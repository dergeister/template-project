import { createApp } from 'vue'

import App from './App.vue'

import setupCommon from '@common'

import './assets/styles/global.scss'

const app = createApp(App)

setupCommon(app)

app.mount('#app')
