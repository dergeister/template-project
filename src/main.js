import { createApp } from 'vue'
import mitt from 'mitt'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import i18n from '@i18n'
import router from '@router'
import setupPinia from '@store'

import App from './App.vue'

import './assets/styles/global.scss'

const app = createApp(App)

const emitter = mitt()
app.config.globalProperties.emitter = emitter

app.use(setupPinia(emitter))
app.use(PrimeVue)
app.use(ToastService)

app.use(i18n)
app.use(router)

app.mount('#app')
