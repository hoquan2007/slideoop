import FloatingVue, { recomputeAllPoppers } from 'floating-vue'
import type { App } from 'vue'

// Retain Twoslash hover/click popovers without patching the removed
// FloatingVue VMenu implementation (which logs a TypeError on every slide).
const isMobile = typeof navigator !== 'undefined'
  && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

export default {
  install(app: App, options: Record<string, any> = {}) {
    if (typeof window !== 'undefined') {
      window.addEventListener('vitepress:codeGroupTabActivate', recomputeAllPoppers, { passive: true })
      window.addEventListener('click', (event) => {
        if (event.composedPath().some((element) =>
          element instanceof Element && (element.classList.contains('vp-code-group') || element.classList.contains('tabs')))) {
          recomputeAllPoppers()
        }
      }, { passive: true })
    }

    app.use(FloatingVue, {
      strategy: 'fixed',
      ...options,
      themes: {
        ...options.themes,
        twoslash: {
          $extend: 'dropdown',
          triggers: isMobile ? ['touch'] : ['hover', 'touch'],
          popperTriggers: isMobile ? ['touch'] : ['hover', 'touch'],
          placement: 'bottom-start',
          overflowPadding: 10,
          delay: { show: 200, hide: 0 },
          handleResize: false,
          autoHide: true,
          noAutoFocus: true,
          instantMove: true,
          flip: false,
          arrowPadding: 8,
          autoBoundaryMaxSize: true,
          ...options.themes?.twoslash,
        },
        'twoslash-query': {
          $extend: 'twoslash',
          triggers: ['click'],
          popperTriggers: ['click'],
          autoHide: false,
          noAutoFocus: true,
          ...options.themes?.['twoslash-query'],
        },
        'twoslash-completion': {
          $extend: 'twoslash-query',
          triggers: ['click'],
          popperTriggers: ['click'],
          autoHide: false,
          noAutoFocus: true,
          distance: 0,
          arrowOverflow: true,
          ...options.themes?.['twoslash-completion'],
        },
      },
    })
  },
}
