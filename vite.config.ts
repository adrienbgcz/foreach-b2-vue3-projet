import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import autoImport from 'unplugin-auto-import/vite'
import { fileURLToPath } from 'url'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import {resolve} from "path"
import windiCSS from 'vite-plugin-windicss'
import icons from 'unplugin-icons/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
            pages(),
            autoImport({ imports: ['vue', 'vue-i18n', 'vue-router'], dts: 'src/auto-imports.d.ts' }),
            vueI18n({
            include: resolve(__dirname, './locales/**')
            }),
            windiCSS(),
            icons()
            ],


  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },



})
