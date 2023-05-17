<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CardEvent1 from '@/components/Cards/CardEvent1.vue';
import CardEvents2 from '@/components/Cards/CardEvent2.vue';
import TacheViolette from '@/components/icons/TacheViolette.vue';
</script>

<template>
<TacheViolette class="absolute top-0"/>
<h2 class="text-white text-center mt-64">Evenements à venir</h2>
<div class=" flex flex-col justify-center items-center gap-8 mt-10">
<CardEvent1/>
<CardEvents2/>
</div>
<RouterView/>
    </template>

