import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import V3ScrollLock from 'v3-scroll-lock'

import './assets/css/style.css'
import CreateAccPageVue from './pages/CreateAccPage.vue'
import LoginPageVue from './pages/LoginPage.vue'
import PasswordVue from './pages/Password.vue'
import ConfidentialiteVue from './pages/Confidentialite.vue'
import DefisVue from './pages/Defis.vue'
import MapVue from './pages/Map.vue'
import MessagesVue from './pages/Messages.vue'
import ProfilVue from './pages/Profil.vue'
import indexVue from './pages/index.vue'



const router =  createRouter({
    history: createWebHistory(),
    routes : [
      {path : "/", redirect: "/index" },
      {path : "/index", component : indexVue },
      {path : "/CreateAccPage", component : CreateAccPageVue },
      {path : "/LoginPage", component : LoginPageVue },
      {path : "/Password", component : PasswordVue },
      {path : "/Confidentialite", component : ConfidentialiteVue },
      {path : "/defis", component : DefisVue },
      {path : "/map", component : MapVue },
      {path : "/messages", component : MessagesVue },
      {path : "/profil", component : ProfilVue },
    ]
  })

const app = createApp(App)
app.use(router).mount("#app")


app.use(V3ScrollLock, {})



