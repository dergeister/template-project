import { createApp } from 'vue'

import App from './App.vue'

import registerPlugins from './plugins'

import './assets/styles/global.scss'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
