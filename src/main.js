import '@/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import videobg from './plugins/video-bg'

const app = createApp(App)

app.use(router)
app.use(videobg)

app.mount('#app')
