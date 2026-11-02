/** Browser-level QA of every Slidev page through Chrome DevTools Protocol.
 * Usage: start Chrome with --remote-debugging-port=9338 and run:
 *   node scripts/visual-qa.mjs
 * The Chrome profile should be outside the Vite-watched project directory.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const port = process.env.SLIDE_QA_PORT || '9338';
const base = process.env.SLIDE_QA_URL || 'http://localhost:47658';
const count = Number(process.env.SLIDE_QA_COUNT || 35);
const output = resolve('.sources', 'visual-qa');
mkdirSync(output, { recursive: true });

const tabs = await fetch(`http://127.0.0.1:${port}/json/list`).then(r => r.json());
const tab = tabs.find(t => t.type === 'page' && t.webSocketDebuggerUrl);
if (!tab) throw new Error('Chrome DevTools has no open page');

const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((ok, fail) => { ws.onopen = ok; ws.onerror = fail; });
let seq = 0;
const pending = new Map();
const errors = [];
const reports = [];
ws.onmessage = event => {
  const msg = JSON.parse(event.data);
  if (msg.id) {
    const waiter = pending.get(msg.id);
    if (!waiter) return;
    pending.delete(msg.id);
    if (msg.error) waiter.reject(new Error(JSON.stringify(msg.error)));
    else waiter.resolve(msg.result);
  } else if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
    errors.push({ slide: reports.length + 1, kind: 'console', message: msg.params.args.map(x => x.value || x.description).join(' ') });
  } else if (msg.method === 'Runtime.exceptionThrown') {
    errors.push({ slide: reports.length + 1, kind: 'exception', message: msg.params.exceptionDetails?.text });
  }
};
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++seq;
  pending.set(id, { resolve, reject });
  ws.send(JSON.stringify({ id, method, params }));
  setTimeout(() => { if (pending.delete(id)) reject(new Error(`Timeout: ${method}`)); }, 15000);
});
const evaluate = async expression => {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  return result.result.value;
};
const sleep = ms => new Promise(r => setTimeout(r, ms));
const activeLayout = `([...document.querySelectorAll('.slidev-layout')].find(el => {
  const r = el.getBoundingClientRect();
  return r.width > 100 && r.height > 100 && r.left > -100 && r.top > -100;
}))`;
await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });

for (let index = 1; index <= count; index++) {
  await send('Page.navigate', { url: `${base}/${index}` });
  for (let retry = 0; retry < 100; retry++) {
    await sleep(100);
    if (await evaluate(`location.pathname === '/${index}' && Boolean(${activeLayout})`)) break;
  }
  await sleep(500);
  const metrics = await evaluate(`(() => {
    const slide = [...document.querySelectorAll('.slidev-layout')].find(el => {
      const r = el.getBoundingClientRect(); return r.width > 100 && r.height > 100 && r.left > -100 && r.top > -100;
    });
    if (!slide) return { problem: 'NO SLIDE LAYOUT', url: location.href };
    const sr = slide.getBoundingClientRect();
    const cssScale = sr.width / slide.offsetWidth;
    const outside = [];
    for (const e of slide.querySelectorAll('h1,h2,h3,h4,p,pre,.eyebrow,.takeaway,.slide-footnote,.source-line,.api-demo__bar,.api-demo__takeaway,.thanks-links')) {
      if (e.closest('.slidev-vclick-hidden')) continue;
      const text = (e.innerText || '').trim();
      if (!text) continue;
      const r = e.getBoundingClientRect();
      if (r.right > sr.right + 3 || r.left < sr.left - 3 || r.bottom > sr.bottom + 3 || r.top < sr.top - 3) {
        outside.push({ selector: e.className || e.tagName, text: text.slice(0, 65), x: Math.round(r.left), y: Math.round(r.top), right: Math.round(r.right), bottom: Math.round(r.bottom) });
      }
    }
    const badImage = [...slide.querySelectorAll('img')].filter(x => !x.complete || x.naturalWidth === 0).map(x => x.getAttribute('src'));
    const clipped = [...slide.querySelectorAll('.api-demo__inspect pre,.fetch-code pre,.slidev-code')].filter(x => x.scrollHeight > x.clientHeight + 4 || x.scrollWidth > x.clientWidth + 4)
      .map(x => ({ text: (x.innerText || '').slice(0, 45), height: x.clientHeight, scrollHeight: x.scrollHeight, width: x.clientWidth, scrollWidth: x.scrollWidth }));
    return { title: slide.querySelector('h1')?.innerText || 'COVER', scale: +cssScale.toFixed(2), bounds: [sr.x, sr.y, sr.width, sr.height].map(Math.round), outside, badImage, clipped, textLength: (slide.innerText || '').length };
  })()`);
  if (metrics?.problem) throw new Error(`Slide ${index}: ${metrics.problem} (${metrics.url})`);
  const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  writeFileSync(resolve(output, `slide-${String(index).padStart(2, '0')}.png`), Buffer.from(shot.data, 'base64'));
  reports.push({ slide: index, ...metrics });
  process.stdout.write(`${index}/${count} ${metrics.title?.replace(/\n/g, ' ').slice(0, 52)} | outside ${metrics.outside?.length || 0}, clipped ${metrics.clipped?.length || 0}\n`);
}

await send('Page.navigate', { url: `${base}/18` });
await sleep(1250);
const apiBefore = await evaluate(`(() => ({count:document.querySelector('.api-demo__count')?.innerText, button:document.querySelector('.api-demo__primary')?.innerText}))()`);
await evaluate(`document.querySelector('.api-demo__controls button[aria-label="Tiến một bước"]')?.click()`);
const apiNext = await evaluate(`(() => ({count:document.querySelector('.api-demo__count')?.innerText, button:document.querySelector('.api-demo__primary')?.innerText}))()`);
await evaluate(`document.querySelector('.api-demo__controls button[title="Chạy lại từ đầu"]')?.click()`);
const apiReplay = await evaluate(`(() => ({count:document.querySelector('.api-demo__count')?.innerText, button:document.querySelector('.api-demo__primary')?.innerText}))()`);

const interactive = [];
for (const [index, endpoint, status, failed] of [
  [18, '/api/products?page=1', '200 OK', false],
]) {
  await send('Page.navigate', { url: `${base}/${index}` });
  let ready = false;
  for (let retry = 0; retry < 50; retry++) {
    await sleep(100);
    ready = await evaluate(`location.pathname === '/${index}' && ${activeLayout}?.querySelector('.api-demo__endpoint code')?.textContent?.trim() === ${JSON.stringify(endpoint)}`);
    if (ready) break;
  }
  if (!ready) throw new Error(`Slide ${index} never loaded API endpoint ${endpoint}`);
  await sleep(120);
  await evaluate(`window.__qaDemo = ${activeLayout}?.querySelector('.api-demo'); true`);
  await evaluate(`window.__qaDemo?.querySelector('.api-demo__controls button[title="Chạy lại từ đầu"]')?.click()`);
  for (let step = 0; step < 5; step++) {
    await evaluate(`window.__qaDemo?.querySelector('.api-demo__controls button[aria-label="Tiến một bước"]')?.click()`);
  }
  const state = await evaluate(`(() => ({
    count: window.__qaDemo?.querySelector('.api-demo__count')?.innerText,
    endpoint: window.__qaDemo?.querySelector('.api-demo__endpoint code')?.innerText,
    status: window.__qaDemo?.querySelector('.api-demo__result')?.innerText,
    error: window.__qaDemo?.querySelector('.api-demo__result')?.classList.contains('error'),
    completion: window.__qaDemo?.querySelector('.api-demo__complete')?.innerText,
  }))()`);
  const passed = state.count?.includes('05 / 05') && state.endpoint === endpoint
    && state.status === status && state.error === failed && Boolean(state.completion);
  interactive.push({ slide: index, passed, ...state });
}

await send('Page.navigate', { url: `${base}/19` });
for (let retry = 0; retry < 30; retry++) {
  await sleep(100);
  if (await evaluate('Boolean(document.querySelector(".fetch-pipeline"))')) break;
}
const beforeClicks = await evaluate('document.querySelectorAll(".fetch-pipeline .slidev-vclick-hidden").length');
const clickCounts = [];
for (let step = 0; step < 4; step++) {
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'ArrowRight', code: 'ArrowRight', windowsVirtualKeyCode: 39 });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'ArrowRight', code: 'ArrowRight', windowsVirtualKeyCode: 39 });
  await sleep(140);
  clickCounts.push(await evaluate('document.querySelectorAll(".fetch-pipeline .slidev-vclick-hidden").length'));
}
const revealPassed = beforeClicks === 4 && clickCounts.join(',') === '3,2,1,0';

const summary = { generatedAt: new Date().toISOString(), url: base, count, problems: reports.filter(x => x.problem || x.outside?.length || x.clipped?.length || x.badImage?.length), errors, apiControls: { before: apiBefore, next: apiNext, replay: apiReplay }, interactive, reveal: { slide: 19, beforeClicks, clickCounts, passed: revealPassed }, reports };
writeFileSync(resolve(output, 'report.json'), JSON.stringify(summary, null, 2));
console.log(`QA: ${summary.problems.length} slides flagged, ${errors.length} console issues.`);
console.log('API buttons:', JSON.stringify(summary.apiControls));
console.log('API scenarios:', interactive.map(item => `${item.slide}: ${item.passed ? 'PASS' : 'FAIL'}`).join(', '));
console.log('Slide 19 reveal:', JSON.stringify(summary.reveal));
if (summary.problems.length || summary.errors.length || interactive.some(item => !item.passed) || !revealPassed) process.exitCode = 1;
ws.close();
