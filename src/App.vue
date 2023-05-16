<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterPage from "./components/Footerpage.vue"
import HeaderPage from "./components/HeaderPage.vue"
import Premium from './components/Events.vue';
import BoutonSwitch from './components/BoutonSwitch.vue';
import Events from './components/Events.vue';
</script>

<template>
<BoutonSwitch/>
<HeaderPage /> 
  <RouterView />
<FooterPage />
<Events/>
  
   <RouterView />
</template>
