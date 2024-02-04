import { createApp } from 'vue'

import i18n from '@i18n'
import router from '@router'
import registerModules from './modules'

import App from './App.vue'

import './assets/styles/global.scss'

const app = createApp(App)

registerModules(app, router)

app.use(i18n)
app.use(router)

app.mount('#app')
