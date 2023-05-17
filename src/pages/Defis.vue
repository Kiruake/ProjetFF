<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CardDefis from '@/components/Cards/CardDefis.vue';
import CardDefis2 from '@/components/Cards/CardDefis2.vue';
</script>

<template>
    <p class="text-white pl-6 mt-6">défis(3)</p>
    <div class=" flex flex-col justify-center items-center gap-8 mt-10">
       <CardDefis/> 
       <CardDefis2/>
    </div>

<RouterView/>
</template>