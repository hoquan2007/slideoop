// Đồng bộ nội dung thuyết trình vào speaker notes; không thêm nút giải thích lên slide.
// Node 24+ có thể nhập trực tiếp tệp .ts nhờ type stripping.
// Chạy: node scripts/sync-study-explanations.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { studyContent } from '../components/studyContent.ts'

const target = resolve('slides.md')
const input = readFileSync(target, 'utf8')
const nl = input.includes('\r\n') ? '\r\n' : '\n'
let current = 0

const updated = input.replace(/^(?:<DeepExplain :slide="\d+" \/>\r?\n\r?\n)?<!--([\s\S]*?)-->/gm, (_full, note) => {
  current++
  const item = studyContent[current]
  if (!item) throw new Error(`Thiếu nội dung cho slide ${current}`)

  const previouslyGenerated = note.match(/\[GHI CHÚ GỐC\]\s*\r?\n([\s\S]*?)\r?\n\[HẾT GHI CHÚ GỐC\]/)
  const original = (previouslyGenerated ? previouslyGenerated[1] : note).trim()
  const lines = [
    `SLIDE ${String(current).padStart(2, '0')} — ${item.title}`,
    `Đối chiếu báo cáo Word: ${item.section}`,
    '',
    `LỜI DẪN DỄ HIỂU: ${item.simple}`,
    '',
    'ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:',
    ...item.steps.map((step, i) => `${i + 1}. ${step}`),
    '',
    `VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: ${item.example}`,
    `KẾT LUẬN CỦA SLIDE: ${item.why}`,
    '',
    '[GHI CHÚ GỐC]', original, '[HẾT GHI CHÚ GỐC]',
  ]

  return `<!--${nl}${lines.join(nl)}${nl}-->`
})

if (current !== 35 || Object.keys(studyContent).length !== 35) {
  throw new Error(`Phải có đúng 35 slide/note và 35 lời giải thích. Đang có ${current} note.`)
}
if (updated === input) {
  console.log('35 slide đã đồng bộ, không có thay đổi mới.')
} else {
  writeFileSync(target, updated, 'utf8')
  console.log(`Đã đồng bộ lời dẫn 35 slide vào speaker notes của ${target}`)
}
