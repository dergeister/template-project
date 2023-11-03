import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './presentation/router'

import mitt from 'mitt'
import i18n from './presentation/i18n'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import './assets/styles/global.scss'

const emitter = mitt()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(PrimeVue)
app.use(ToastService)

app.config.globalProperties.emitter = emitter

app.mount('#app')
