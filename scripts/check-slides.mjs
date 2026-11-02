import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const content = fs.readFileSync(path.join(root, 'slides.md'), 'utf8');
const count = 1 + [...content.matchAll(/^layout: default$/gm)].length;
const fences = [...content.matchAll(/^```/gm)].length;
const notes = [...content.matchAll(/^<!--/gm)].length;
const oldWidgets = [...content.matchAll(/<DeepExplain\b/g)].length;
const missing = [...content.matchAll(/(?:src|href)="(\/[^"\s]+)"/g)]
  .map(([, url]) => url)
  .filter((url) => /\.(png|jpg|jpeg|webp|svg)$/i.test(url))
  .filter((url) => !fs.existsSync(path.join(root, 'public', url.slice(1))));

if (count !== 35 || fences % 2 || notes < count || missing.length || oldWidgets) {
  console.error(`Lỗi kiểm tra: ${count} slides, ${fences} dấu code fence, ${notes} speaker notes.`);
  if (missing.length) console.error('Ảnh thiếu:', [...new Set(missing)].join(', '));
  if (oldWidgets) console.error(`Còn ${oldWidgets} nút giải thích cũ trong slides.md.`);
  process.exitCode = 1;
} else {
  console.log(`OK: ${count} slide, ${fences / 2} code blocks, ${notes} speaker notes, ảnh đầy đủ.`);
}
