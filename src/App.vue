<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterPage from "./components/Footerpage.vue"
import HeaderPage from "./components/HeaderPage.vue"
</script>

<template>
  
<HeaderPage /> 
<main class="mb-32">
    <RouterView/>
</main>
<FooterPage/>


</template>
