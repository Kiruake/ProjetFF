<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CardDefis from '@/components/Cards/CardDefis.vue';
import CardDefis2 from '@/components/Cards/CardDefis2.vue';
import CardDefis3 from '@/components/Cards/CardDefis3.vue';
import TacheViolette from '@/components/icons/TacheViolette.vue';

</script>

<template>
    <h2 class="top-24 text-center">Izy Challenges</h2>
    <TacheViolette class="absolute z-0 top-0"/>
    <h3 class="text-white pl-6 mt-52">défis(3)</h3>

        <div class=" flex flex-col justify-center items-center gap-8 mt-10">
        <CardDefis/> 
        <CardDefis2/>
        <CardDefis3/>
        </div>

    <h2 class="text-center text-white mt-6">Classement</h2>

</template>