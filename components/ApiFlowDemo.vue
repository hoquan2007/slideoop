<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

type Scenario = 'products' | 'cart' | 'conflict' | 'quote'
const props = withDefaults(defineProps<{ scenario?: Scenario }>(), { scenario: 'products' })

const examples = {
  products: {
    eyebrow: 'XEM DANH MỤC SẢN PHẨM', method: 'GET', endpoint: '/api/products?page=1',
    request: 'GET /api/products?page=1\nAccept: application/json',
    process: 'publicCatalog(r, options)',
    db: 'SELECT sản phẩm đang bán\nJOIN cửa hàng đã duyệt',
    response: '{ "items": [\n  { "name": "Áo sơ mi", "price": 149000 }\n], "page": 1 }',
    screen: 'Danh sách sản phẩm xuất hiện',
    status: '200 OK', failed: false,
    lesson: 'Frontend nhận JSON, đọc items và tạo thẻ sản phẩm trên giao diện.',
  },
  cart: {
    eyebrow: 'XEM GIỎ HÀNG CỦA TÔI', method: 'GET', endpoint: '/api/cart',
    request: 'GET /api/cart\nCookie: phiên đăng nhập',
    process: 'loginRequired(u)\nprivateCartView(r, u)',
    db: 'Tra cứu carts theo user_id\nĐọc thông tin biến thể',
    response: '{ "cart": { "revision": 3 },\n  "lines": [\n    { "quantity": 2, "unit_price": 149000 }\n  ] }',
    screen: 'Giỏ hàng hiển thị 2 sản phẩm',
    status: '200 OK', failed: false,
    lesson: 'Cookie định danh phiên; C++ kiểm tra đăng nhập trước khi trả giỏ hàng.',
  },
  conflict: {
    eyebrow: 'THỬ CẬP NHẬT GIỎ HÀNG CŨ', method: 'PUT', endpoint: '/api/cart',
    request: 'PUT /api/cart\n{ "expected_revision": 2,\n  "items": [ ... ] }',
    process: 'if (expected_revision\n    != cart["revision"])\n  throw Error(409, ...)',
    db: 'Đọc revision hiện tại = 3\nPhát hiện dữ liệu đã đổi',
    response: '{ "error": {\n  "code": "cart_conflict",\n  "message": "Giỏ hàng đã thay đổi"\n} }',
    screen: 'Thông báo: Tải lại giỏ hàng',
    status: '409 CONFLICT', failed: true,
    lesson: 'HTTP 409 báo xung đột. Frontend hiển thị lỗi và yêu cầu tải dữ liệu mới.',
  },
  quote: {
    eyebrow: 'XEM TRƯỚC TỔNG TIỀN ĐƠN HÀNG', method: 'POST', endpoint: '/api/checkout/quote',
    request: 'POST /api/checkout/quote\n{ "method": "cod",\n  "address_id": "dia-chi-1",\n  "idempotency_key": "ma-du-16-ky-tu..." }',
    process: 'Kiểm tra địa chỉ, giỏ, kho\nTính phí ship và voucher\nKý quote_token',
    db: 'Đọc sản phẩm, giá và tồn kho\nTính tổng theo từng shop',
    response: '{ "quote_token": "...",\n  "checkout": { "total": 318000 },\n  "orders": [ ... ] }',
    screen: 'Hiển thị báo giá, chưa chốt đơn',
    status: '200 OK', failed: false,
    lesson: 'Bước quote giúp xem tổng tiền; POST /api/checkout mới xác nhận ghi đơn.',
  },
} as const

const current = computed(() => examples[props.scenario])
const step = ref(0)
const playing = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined
const phases = ['Sẵn sàng', 'Gửi request', 'C++ xác thực / xử lý', 'Đọc dữ liệu', 'Trả response', 'Client cập nhật giao diện']

function stopTimer() {
  if (timer) clearTimeout(timer)
  timer = undefined
  playing.value = false
}

function schedule() {
  if (!playing.value) return
  if (step.value >= 5) { playing.value = false; return }
  timer = setTimeout(() => {
    step.value += 1
    schedule()
  }, step.value === 0 ? 650 : step.value === 3 ? 1700 : 1450)
}

function replay() {
  stopTimer()
  step.value = 0
  playing.value = true
  schedule()
}

function togglePlay() {
  if (playing.value) { stopTimer(); return }
  if (step.value === 5) step.value = 0
  playing.value = true
  schedule()
}

function next() {
  stopTimer()
  step.value = Math.min(5, step.value + 1)
}

function previous() {
  stopTimer()
  step.value = Math.max(0, step.value - 1)
}

watch(() => props.scenario, replay)
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) step.value = 5
  else timer = setTimeout(replay, 600)
})
onUnmounted(stopTimer)
</script>

<template>
  <section class="api-demo" :class="{ 'api-demo--error': current.failed }" aria-label="Mô phỏng quy trình HTTP request và response">
    <div class="api-demo__bar">
      <div class="api-demo__endpoint">
        <span class="api-demo__live"><i /> FLOW LAB · MÔ PHỎNG</span>
        <span class="api-demo__verb" :class="current.method.toLowerCase()">{{ current.method }}</span>
        <code>{{ current.endpoint }}</code>
      </div>
      <div class="api-demo__controls">
        <button type="button" @click="previous" :disabled="step === 0" aria-label="Quay lại một bước">←</button>
        <button type="button" class="api-demo__primary" @click="togglePlay">{{ playing ? 'Ⅱ Tạm dừng' : '▶ Chạy' }}</button>
        <button type="button" @click="next" :disabled="step === 5" aria-label="Tiến một bước">→</button>
        <button type="button" @click="replay" title="Chạy lại từ đầu">↺</button>
      </div>
    </div>

    <div class="api-demo__map">
      <div class="api-demo__nodes">
        <div class="api-demo__node client" :class="{ active: step === 1 || step === 5 }">
          <span class="api-demo__node-icon">◫</span>
          <div><small>01 / FRONTEND</small><strong>Client / Browser</strong><em>{{ step === 5 ? 'Đã cập nhật UI' : 'JavaScript / fetch()' }}</em></div>
          <b v-if="step === 5" class="api-demo__ready">✓</b>
        </div>
        <div class="api-demo__node server" :class="{ active: step === 2 || step === 4 }">
          <span class="api-demo__node-icon">{ }</span>
          <div><small>02 / APPLICATION</small><strong>C++20 Backend</strong><em>{{ step === 2 ? 'Đang xử lý request…' : 'Route + nghiệp vụ OOP' }}</em></div>
          <b v-if="step === 2" class="api-demo__busy">●</b>
        </div>
        <div class="api-demo__node database" :class="{ active: step === 3 }">
          <span class="api-demo__node-icon">▤</span>
          <div><small>03 / DATA LAYER</small><strong>Database</strong><em>{{ step === 3 ? 'Đang truy vấn…' : 'Repository + SQL' }}</em></div>
          <b v-if="step === 3" class="api-demo__busy">●</b>
        </div>
      </div>

      <div class="api-demo__rails" aria-hidden="true">
        <div class="api-demo__rail api-demo__rail--out"><span>REQUEST →</span><i /></div>
        <div class="api-demo__rail api-demo__rail--back"><span>← RESPONSE</span><i /></div>
        <div v-if="step === 1" :key="'request-' + step" class="api-demo__packet api-demo__packet--request">{{ current.method }} · Request</div>
        <div v-if="step === 3" :key="'sql-' + step" class="api-demo__packet api-demo__packet--sql">SQL ↗ ↙</div>
        <div v-if="step === 4" :key="'response-' + step" class="api-demo__packet api-demo__packet--response">{{ current.status }} · JSON</div>
        <div v-if="step === 5" class="api-demo__complete" :class="{ error: current.failed }">{{ current.failed ? '⚠' : '✓' }} {{ current.screen }}</div>
      </div>
    </div>

    <div class="api-demo__status" aria-live="polite">
      <span class="api-demo__count">0{{ step }} <small>/ 05</small></span>
      <div class="api-demo__meter"><span :style="{ width: (step * 20) + '%' }" /></div>
      <strong>{{ phases[step] }}</strong>
      <span class="api-demo__result" :class="{ visible: step >= 4, error: current.failed && step >= 4 }">{{ step >= 4 ? current.status : 'ĐANG MÔ PHỎNG' }}</span>
    </div>

    <div class="api-demo__inspection">
      <div class="api-demo__inspect" :class="{ focus: step === 1, pending: step < 1 }">
        <div class="api-demo__inspect-head"><span class="api-demo__dot orange" /> HTTP REQUEST <small>Client → Server</small></div>
        <pre>{{ current.request }}</pre>
      </div>
      <div class="api-demo__inspect" :class="{ focus: step === 2 || step === 3, pending: step < 2 }">
        <div class="api-demo__inspect-head"><span class="api-demo__dot navy" /> C++ & SQL <small>Server xử lý</small></div>
        <pre>{{ step === 3 ? current.db : current.process }}</pre>
      </div>
      <div class="api-demo__inspect" :class="{ focus: step === 4 || step === 5, pending: step < 4 }">
        <div class="api-demo__inspect-head"><span class="api-demo__dot green" /> HTTP RESPONSE <small>Server → Client</small></div>
        <pre>{{ current.response }}</pre>
      </div>
    </div>
    <div class="api-demo__takeaway"><b>{{ current.eyebrow }}</b><span>{{ current.lesson }}</span></div>
  </section>
</template>

<style scoped>
.api-demo{font-family:'Be Vietnam Pro','Inter',sans-serif;color:#1d2d40;width:100%;border:1px solid #dfe4e9;border-radius:17px;background:white;box-shadow:0 17px 44px #1d30400d;overflow:hidden;font-size:14px}
.api-demo__bar{height:55px;display:flex;justify-content:space-between;align-items:center;padding:0 18px 0 23px;border-bottom:1px solid #edf0f2;gap:14px}
.api-demo__endpoint{display:flex;align-items:center;gap:11px;min-width:0}
.api-demo__endpoint>code{font:700 16px/1.3 Consolas,'Cascadia Code',monospace;color:#27384e;white-space:nowrap}
.api-demo__live{font-size:10px;font-weight:800;letter-spacing:.075em;color:#788696;white-space:nowrap;display:flex;align-items:center;gap:7px}
.api-demo__live i{display:block;height:8px;width:8px;background:#25a37b;border-radius:50%;box-shadow:0 0 0 4px #25a37b18}
.api-demo__verb{border-radius:5px;font-size:11px;font-weight:900;color:#137a5e;background:#e5f5ef;padding:5px 7px}
.api-demo__verb.post{color:#ac4727;background:#ffede5}.api-demo__verb.put{color:#6252b4;background:#f0ecff}
.api-demo__controls{display:flex;align-items:center;gap:7px;flex-shrink:0}
.api-demo__controls button{height:32px;min-width:33px;padding:0 10px;display:flex;align-items:center;justify-content:center;border:1px solid #e0e4e9;border-radius:7px;background:#fff;color:#374b61;font-weight:750;cursor:pointer;font-size:13px;transition:background .2s,transform .2s}
.api-demo__controls button:hover:not(:disabled){background:#f0f4f8;transform:translateY(-1px)}.api-demo__controls button:disabled{opacity:.3;cursor:default}
.api-demo__controls .api-demo__primary{color:white;background:#1d3046;border-color:#1d3046;padding:0 16px}.api-demo__controls .api-demo__primary:hover{background:#335372}
.api-demo__map{background:radial-gradient(ellipse at center,#fff8f3 0,#f9fbfc 75%);padding:15px 25px 0}
.api-demo__nodes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:17px}
.api-demo__node{border:1px solid #e0e5ea;border-radius:12px;background:white;min-height:87px;padding:12px 14px;display:flex;align-items:center;gap:12px;position:relative;transition:border-color .25s,box-shadow .25s,transform .25s}
.api-demo__node.active{border-color:#df8b64;box-shadow:0 8px 18px #d6886422;transform:translateY(-3px)}.api-demo__node.database.active{border-color:#629cbd;box-shadow:0 8px 20px #629cbd20}
.api-demo__node-icon{background:#eaf3f7;border-radius:10px;height:44px;width:44px;display:grid;place-items:center;color:#2f607c;font:800 18px/1 Consolas,monospace;flex-shrink:0}
.api-demo__node.client .api-demo__node-icon{background:#fff1e7;color:#c15a33}.api-demo__node.server .api-demo__node-icon{background:#1d3249;color:#fff}
.api-demo__node small{display:block;font-size:9px;letter-spacing:.11em;font-weight:800;color:#8a96a6;margin-bottom:5px}
.api-demo__node strong{display:block;font-weight:800;font-size:16px;line-height:1.35;white-space:nowrap}.api-demo__node em{display:block;font-style:normal;font-size:11px;color:#788697;margin-top:3px;white-space:nowrap}
.api-demo__ready,.api-demo__busy{position:absolute;right:12px;top:12px;color:#279875;font-size:16px}.api-demo__busy{color:#d87550;animation:api-glow 1s ease infinite alternate}
.api-demo__rails{height:86px;position:relative;padding:5px 0}.api-demo__rail{height:38px;position:relative;display:flex;align-items:center;justify-content:center}
.api-demo__rail>i{position:absolute;left:12%;right:12%;border-top:2px dashed #f0b397;top:20px}.api-demo__rail--back>i{border-color:#7bb9a7}
.api-demo__rail span{position:relative;z-index:1;background:#f9fafb;color:#9b7965;border-radius:10px;padding:4px 11px;font-size:9px;font-weight:800;letter-spacing:.15em}
.api-demo__rail--back span{color:#428b75}
.api-demo__packet{position:absolute;z-index:3;border:1px solid white;white-space:nowrap;border-radius:7px;padding:8px 13px;color:white;box-shadow:0 7px 16px #2734472c;font:800 11px/1.2 Consolas,monospace;transform:translateX(-50%)}
.api-demo__packet--request{top:12px;left:12%;background:#da6740;animation:api-req 1.4s cubic-bezier(.2,.7,.2,1) forwards}
.api-demo__packet--sql{top:12px;left:50%;background:#3e7194;animation:api-sql 1.65s ease-in-out forwards}
.api-demo__packet--response{top:49px;left:50%;background:#218875;animation:api-resp 1.4s cubic-bezier(.2,.7,.2,1) forwards}
.api-demo__complete{position:absolute;z-index:4;left:12%;top:12px;background:#e6f7ed;border:1px solid #c4e7d5;border-radius:8px;padding:12px 17px;color:#1c7858;font-weight:800;box-shadow:0 4px 14px #1d644812;animation:api-pop .3s ease-out both}
.api-demo__complete.error{background:#fff1eb;border-color:#f1d6c7;color:#ba5633}
.api-demo__status{display:flex;gap:14px;align-items:center;background:#24384e;color:white;padding:8px 26px;height:44px}
.api-demo__count{font:800 19px/1 'Inter',sans-serif;color:#f6ac87}.api-demo__count small{font-size:11px;color:#8fa4b8}
.api-demo__meter{width:132px;height:6px;border-radius:10px;background:#46576b;overflow:hidden}.api-demo__meter>span{display:block;height:100%;background:#ffa47b;transition:width .33s ease;border-radius:10px}
.api-demo__status strong{font-size:13px;font-weight:700;color:#f0f3f7;flex:1}.api-demo__result{border:1px solid #53657a;border-radius:15px;padding:5px 10px;font:700 10px Consolas,monospace;opacity:.55;color:#dbe6f1;letter-spacing:.03em}
.api-demo__result.visible{opacity:1;background:#d6f0e5;border-color:#d6f0e5;color:#166a4d}.api-demo__result.error{background:#ffddd2;border-color:#ffddd2;color:#aa4426}
.api-demo__inspection{display:grid;grid-template-columns:1.1fr 1fr 1.15fr;gap:12px;padding:10px 20px 9px;background:#fff}
.api-demo__inspect{background:#f8f9fb;border:1px solid #e5e8ec;border-radius:10px;padding:10px 14px;min-width:0;height:133px;transition:border-color .2s,background .2s}
.api-demo__inspect.focus{background:#fffaf6;border-color:#e9ac8e}.api-demo__inspect-head{display:flex;align-items:center;gap:7px;font-size:10px;font-weight:850;letter-spacing:.09em;white-space:nowrap;color:#526176}
.api-demo__inspect.pending{background:#fafbfc}.api-demo__inspect.pending pre{opacity:.28}.api-demo__inspect.pending .api-demo__inspect-head{opacity:.6}
.api-demo__inspect-head small{margin-left:auto;font-size:9px;color:#98a2ae;letter-spacing:normal;font-weight:600}
.api-demo__dot{display:inline-block;width:7px;height:7px;border-radius:50%}.api-demo__dot.orange{background:#dc7044}.api-demo__dot.navy{background:#547594}.api-demo__dot.green{background:#27a383}
.api-demo__inspect pre{padding:11px 0 0 !important;background:none!important;border:0!important;border-radius:0!important;box-shadow:none!important;font:600 11px/1.5 Consolas,'Cascadia Code',monospace!important;color:#314357!important;margin:0!important;white-space:pre-wrap;word-break:break-word;overflow:hidden!important;transition:opacity .32s ease}
.api-demo__takeaway{background:#fff7f1;border-top:1px solid #fae9de;padding:9px 21px;display:flex;align-items:center;gap:13px;font-size:11px;color:#815541;min-height:36px}
.api-demo__takeaway b{font-size:9px;font-weight:900;letter-spacing:.035em;color:#b34e2d;white-space:nowrap}
@keyframes api-req{0%{left:12%;opacity:0}12%{opacity:1}86%{opacity:1}100%{left:50%;opacity:0}}
@keyframes api-sql{0%{left:50%;opacity:0}17%{opacity:1}50%{left:88%;opacity:1}100%{left:50%;opacity:0}}
@keyframes api-resp{0%{left:50%;opacity:0}14%{opacity:1}88%{opacity:1}100%{left:12%;opacity:0}}
@keyframes api-glow{from{opacity:.35}to{opacity:1}}
@keyframes api-pop{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
@media(prefers-reduced-motion:reduce){.api-demo *, .api-demo *::before,.api-demo *::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
</style>
