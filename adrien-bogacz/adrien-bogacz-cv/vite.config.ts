import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import autoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pages(), autoImport({ imports: ['vue', 'vue-i18n', 'vue-router'], dts: 'src/auto-imports.d.ts' })]
})
