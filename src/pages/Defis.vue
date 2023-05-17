<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CardDefis from '@/components/Cards/CardDefis.vue';
import CardDefis2 from '@/components/Cards/CardDefis2.vue';
import CardDefis3 from '@/components/Cards/CardDefis3.vue';
</script>

<template>

    <h3 class="text-white pl-6 mt-6">défis(3)</h3>

        <div class=" flex flex-col justify-center items-center gap-8 mt-10">
        <CardDefis/> 
        <CardDefis2/>
        <CardDefis3/>
        </div>

    <h2 class="text-center text-white mt-6">Classement</h2>

</template>