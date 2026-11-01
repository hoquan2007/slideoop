import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// Slidev 53 bundles a Twoslash client that patches FloatingVue's old VMenu
// internals. FloatingVue 5.4 uses a different component structure.
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@shikijs\/vitepress-twoslash\/client$/,
        replacement: fileURLToPath(new URL('./shims/twoslash-client.ts', import.meta.url)),
      },
    ],
  },
  server: {
    watch: {
      ignored: ['**/.sources/**'],
    },
  },
})
