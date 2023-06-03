<script setup lang="ts">

import type { DefisResponse } from '@/pocketbase-types';
import { ref, onMounted } from "vue";
import CardDefis from '@/components/Cards/CardDefis.vue'
import { getAllDefis } from '@/backend';
import HeaderPage from '@/components/HeaderPage.vue';
import Footerpage from '@/components/Footerpage.vue';
import TacheViolette from '@/components/icons/TacheViolette.vue';
import ClassementTemplate from '@/components/Cards/ClassementTemplate.vue';

const allDefis = ref<DefisResponse[]>([]);
onMounted(async () => {

    allDefis.value = await getAllDefis();
    console.log(allDefis.value);
});

</script>

<template>
    <HeaderPage/>

        <h2 class="top-24 text-center">Izy Challenges</h2>
        <TacheViolette class="absolute z-0 top-0"/>
        <h3 class="text-white pl-6 mt-52">défis</h3>


          <div class=" flex flex-col justify-center items-center gap-8 mt-4">
            <CardDefis v-for="unDefis in allDefis" v-bind="{ ...unDefis }" />

        </div>

    <div class=" flex flex-col justify-center items-center gap-8 mt-4">
        <CardDefis v-for="unDefis in allDefis" v-bind="{ ...unDefis }" />

    </div>

          <h2 class="text-center text-white mb-10">Classement</h2>

      <div class="flex justify-center">
        <ClassementTemplate/>
        </div>

    <div class="flex justify-center m-auto w-[328px] h-[300px] mb-10 rounded-[20px] bg-white border border-black">
        <div class="flex-col">

        </div>
    </div>

    


     <Footerpage/>

</template>