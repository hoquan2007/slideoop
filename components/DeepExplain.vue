<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { studyContent } from './studyContent'

const props = defineProps<{ slide: number }>()
const item = computed(() => studyContent[props.slide])
const open = ref(false)
const trigger = ref<HTMLButtonElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)

async function show() {
  open.value = true
  await nextTick()
  closeButton.value?.focus()
}

function close() {
  open.value = false
  nextTick(() => trigger.value?.focus())
}

function onKeydown(event: KeyboardEvent) {
  if (!open.value) return
  if (event.key === 'Escape') {
    event.preventDefault()
    event.stopImmediatePropagation()
    close()
  }
  // Slidev uses arrow keys to advance. Keep readers on the current slide
  // while they scroll through a long explanation in the dialog.
  if (['ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', ' '].includes(event.key)) {
    if (!(event.target instanceof HTMLElement && event.target.closest('.study-dialog__scroll'))) {
      event.preventDefault()
    }
    event.stopImmediatePropagation()
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown, true))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown, true))
</script>

<template>
  <button
    v-if="item"
    ref="trigger"
    type="button"
    class="study-trigger"
    :aria-label="`Mở giải thích dễ hiểu cho slide ${slide}`"
    :aria-expanded="open"
    @click.stop="show"
  >
    <span aria-hidden="true">ⓘ</span> Giải thích dễ hiểu
  </button>

  <Teleport to="body">
    <div
      v-if="open && item"
      class="study-backdrop"
      role="presentation"
      @click.self="close"
    >
      <section
        class="study-dialog"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`study-title-${slide}`"
      >
        <header class="study-dialog__header">
          <div>
            <span class="study-dialog__label">GIẢI THÍCH TỪ BÁO CÁO WORD · SLIDE {{ String(slide).padStart(2, '0') }}</span>
            <h2 :id="`study-title-${slide}`">{{ item.title }}</h2>
          </div>
          <button ref="closeButton" type="button" class="study-dialog__close" aria-label="Đóng giải thích" @click="close">✕</button>
        </header>

        <div class="study-dialog__scroll" tabindex="0">
          <p class="study-dialog__source">Đối chiếu: {{ item.section }}</p>
          <div class="study-dialog__intro"><b>Hiểu nhanh</b><p>{{ item.simple }}</p></div>
          <h3>Chương trình làm gì, theo từng bước?</h3>
          <ol class="study-dialog__steps">
            <li v-for="(step, i) in item.steps" :key="i"><span>{{ i + 1 }}</span><p>{{ step }}</p></li>
          </ol>
          <div class="study-dialog__example"><b>🛒 Ví dụ ngay trên Shoppe</b><p>{{ item.example }}</p></div>
          <div class="study-dialog__why"><b>Vì sao cần phần này?</b><p>{{ item.why }}</p></div>
        </div>
        <footer class="study-dialog__footer"><span>Nhấn Esc hoặc bấm ngoài khung để trở lại slide.</span><button type="button" @click="close">Quay lại slide</button></footer>
      </section>
    </div>
  </Teleport>
</template>

<style scoped>
.study-trigger { position: absolute; right: 76px; bottom: 15px; z-index: 12; display: inline-flex; align-items: center; gap: 9px; border: 1px solid #e5cbbd; border-radius: 999px; background: #fff6ef; color: #a34222; padding: 8px 17px; font: 800 12px/1.3 'Be Vietnam Pro', sans-serif; box-shadow: 0 5px 16px #40201014; cursor: pointer; transition: background .2s, transform .2s; }
.study-trigger:hover, .study-trigger:focus-visible { background: #fce7db; transform: translateY(-2px); outline-offset: 3px; }
.study-trigger span { font-size: 18px; line-height: 1; }
.study-backdrop { position: fixed; inset: 0; z-index: 99999; background: rgba(18, 29, 48, .72); display: flex; justify-content: center; align-items: center; padding: 22px; box-sizing: border-box; backdrop-filter: blur(8px); }
.study-dialog { font-family: 'Be Vietnam Pro', 'Inter', sans-serif; color: #1b3049; background: #fffdfa; border-radius: 23px; width: min(890px, 100%); max-height: min(94vh, 950px); display: flex; flex-direction: column; box-shadow: 0 30px 85px #06182e80; overflow: hidden; }
.study-dialog__header { display: flex; justify-content: space-between; gap: 20px; padding: 25px 35px 17px; border-bottom: 1px solid #ede2db; }
.study-dialog__label { font-size: 11px; font-weight: 800; letter-spacing: .08em; color: #b9512d; }
.study-dialog__header h2 { font-size: clamp(20px, 2.3vw, 27px); line-height: 1.3; margin: 9px 0 0; font-weight: 800; }
.study-dialog__close { border: none; background: #f6ebe5; color: #7b554a; border-radius: 50%; width: 37px; height: 37px; flex: 0 0 37px; cursor: pointer; font-size: 18px; }
.study-dialog__scroll { padding: 20px 35px 26px; overflow-y: auto; overscroll-behavior: contain; font-size: 15px; line-height: 1.65; }
.study-dialog__source { font-size: 12px; color: #788596; margin: 0 0 16px; }
.study-dialog__intro { background: #fff1e8; padding: 18px 22px; border-left: 4px solid #d85b31; border-radius: 12px; }
.study-dialog__intro b, .study-dialog__example b, .study-dialog__why b { color: #b94d29; }
.study-dialog p { margin: 5px 0 0; color: #435167; }
.study-dialog__scroll h3 { font-size: 18px; margin: 23px 0 13px; color: #1d3149; }
.study-dialog__steps { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 11px; }
.study-dialog__steps li { display: grid; grid-template-columns: 31px 1fr; gap: 13px; align-items: start; }
.study-dialog__steps span { display: inline-grid; place-items: center; background: #24384e; color: white; font-size: 13px; font-weight: 800; width: 29px; height: 29px; border-radius: 50%; }
.study-dialog__steps li p { margin: 0; }
.study-dialog__example { background: #e9f5f1; border-radius: 13px; padding: 17px 22px; margin-top: 22px; }
.study-dialog__example b { color: #17795d; }
.study-dialog__why { background: #f0f4f9; border-radius: 13px; padding: 17px 22px; margin-top: 12px; }
.study-dialog__why b { color: #244c78; }
.study-dialog__footer { padding: 12px 35px; border-top: 1px solid #ede2db; display: flex; align-items: center; justify-content: space-between; gap: 16px; background: #fffaf6; }
.study-dialog__footer span { font-size: 12px; color: #7a8390; }
.study-dialog__footer button { cursor: pointer; background: #c9512d; color: white; border: 0; border-radius: 10px; padding: 10px 17px; font: 700 12px 'Be Vietnam Pro', sans-serif; flex: 0 0 auto; }
@media(max-width:600px) { .study-backdrop { padding: 8px; } .study-dialog { max-height: 98vh; border-radius: 14px; } .study-dialog__header { padding: 17px 16px 12px; } .study-dialog__scroll { padding: 14px 17px 19px; font-size: 13px; } .study-dialog__footer { padding: 10px 17px; } .study-dialog__footer span { display: none; } }
</style>
