<script setup lang="ts">

import { pb } from '@/backend'
import { oneIDDefis } from '@/backend'
import Footerpage from '@/components/Footerpage.vue';
import HeaderPage from '@/components/HeaderPage.vue';
import { formatDate } from '@/helper'
import IconTrophy from '@/components/icons/IconTrophy.vue';

const props = defineProps<{ id: string }>();
console.log(props.id);

const unDefis = await oneIDDefis(props.id)
console.log(unDefis);

const urlImgDefis = unDefis.image ? pb.getFileUrl(unDefis, unDefis.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImgDefis)

</script>

<template>

<HeaderPage/>

    <div>
        <div class="absolute pl-16 pt-10 text-xl text-black">
     <h3 class="border-2 border-white rounded-md bg-white  px-3 py-3">{{ unDefis.nom_defis }}</h3>
     </div>
     <img class=" mt-14 w-full " :src="urlImgDefis">
     </div> 

     <div class="flex pl-4 mt-4 gap-28">

            <p class=" text-lg text-center text-white">{{ formatDate(unDefis.date) }}</p>

            <div class="flex gap-1">
              <div class="pt-1"><IconTrophy/></div> 
              <p class=" text-lg text-left text-white">{{ unDefis.points }}</p>
            </div>

      
    
        </div>

<div class=" flex border border-white rounded-md py-3 bg-white mx-16">
    <p>{{ unDefis.defis1 }}</p>
</div>

    <div class="border border-white ">
        <p>{{ unDefis.defis2 }}</p>
    </div>

<Footerpage/>

</template>