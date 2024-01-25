import { createApp } from 'vue'
import registerPresentation from './presentation/index'
import App from './App.vue'

import './assets/styles/global.scss'

const app = createApp(App)

registerPresentation(app)

app.mount('#app')
