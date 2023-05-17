<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CardDefis from '@/components/CardDefis.vue';
import CardDefis2 from '@/components/CardDefis2.vue';
import BoutonSwitch from '@/components/BoutonSwitch.vue';
</script>

<template>
    <div class=" flex flex-col justify-center items-center gap-8">
       <CardDefis/> 
       <CardDefis2/>
    </div>

<RouterView/>
</template>