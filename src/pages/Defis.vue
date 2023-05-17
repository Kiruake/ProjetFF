<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CardDefis from '@/components/CardDefis.vue';
import BoutonSwitch from '@/components/BoutonSwitch.vue';
</script>

<template>
    <div class=" flex justify-center">
       <CardDefis/> 
    </div>
<RouterView/>
</template>