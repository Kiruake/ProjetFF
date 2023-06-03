<script setup lang="ts">

import type { DefisResponse } from '@/pocketbase-types';
import { ref, onMounted } from "vue";
import CardDefis from '@/components/Cards/CardDefis.vue'
import { getAllDefis } from '@/backend';
const allDefis = ref<DefisResponse[]>([]);
onMounted(async () => {

    allDefis.value = await getAllDefis();
    console.log(allDefis.value);
});

</script>

<template>
    <h1 class="uppercase text-center text-4xl mt-24 mb-16 lg:mb-2">Defis</h1>

    <div class=" flex flex-col justify-center items-center gap-8 mt-4">
        <CardDefis v-for="unDefis in allDefis" v-bind="{ ...unDefis }" />

    </div>
</template>