<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterPage from "./components/Footerpage.vue"
import HeaderPage from "./components/HeaderPage.vue"
import Premium from './components/Premium.vue';
</script>

<template>

 <HeaderPage /><FooterPage /><Premium/>
  
   <RouterView />
</template>
