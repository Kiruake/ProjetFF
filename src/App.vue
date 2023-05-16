<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterPage from "./components/Footerpage.vue"
import HeaderPage from "./components/HeaderPage.vue"
import Premium from './components/Premium.vue';
import BoutonSwitch from './components/BoutonSwitch.vue';
</script>

<template>
<BoutonSwitch/>
 <FooterPage /><HeaderPage /><Premium/>
  
   <RouterView />
</template>
