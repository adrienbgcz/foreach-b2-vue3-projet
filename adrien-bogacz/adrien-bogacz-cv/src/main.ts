import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'


import App from '@/App.vue'
import router from '@/router'

import messages from '@intlify/vite-plugin-vue-i18n/messages'

import 'virtual:windi.css'


const app = createApp(App)



const i18n = createI18n({
     locale: 'fr',
     messages,
})

app.use(i18n)
//app.use(pinia)
app.use(router)
app.mount('#app')