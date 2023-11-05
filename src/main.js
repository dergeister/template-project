import { createApp } from 'vue'

import App from './App.vue'

import setupPresentation from './presentation'
import setupApplication from './application'
import setupBuildingBlocks from './building-blocks'

import './assets/styles/global.scss'

const app = createApp(App)

setupBuildingBlocks(app)
setupApplication(app)
setupPresentation(app)

app.mount('#app')
