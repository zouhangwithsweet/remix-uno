import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  preflights: [
    {
      getCSS: () => `
      :root {
        --brand: #6366f1
      }
    `,
    },
  ],
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
  },
})
