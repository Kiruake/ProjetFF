import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import V3ScrollLock from 'v3-scroll-lock'

import './assets/css/style.css'




const router =  createRouter({
    history: createWebHistory(),
    routes 
    
  })


const app = createApp(App)
app.use(router)

app.use(V3ScrollLock, {})
app.mount('#app')



