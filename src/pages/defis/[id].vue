<script setup lang="ts">

import { pb } from '@/backend'
import { oneIDDefis } from '@/backend'
import Footerpage from '@/components/Footerpage.vue';
import HeaderPage from '@/components/HeaderPage.vue';
import { formatDate } from '@/helper'
import Etoile from '@/components/icons/Etoile.vue';
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

<div class="lg:ml-96 lg:w-3/5">
    <div>
        <div class="absolute pl-16 pt-10 text-xl text-white">
     <h3 class="border-2 border-white rounded-md px-3 py-3">{{ unDefis.nom_defis }}</h3>
     </div>
     <img class=" mt-14 w-full " :src="urlImgDefis">
     </div> 

     <div class="flex pl-4 mt-4 gap-28">

            <p class=" text-lg lg:text-2xl text-center text-white">{{ formatDate(unDefis.date) }}</p>

            <div class="flex gap-1">
              <div class="pt-1"><IconTrophy/></div> 
              <p class=" text-lg  text-left text-white">{{ unDefis.points }}</p>
            </div>

      
    
        </div>

<div class="lg:flex ">

    <div class="flex gap-2 border border-white rounded-md py-3 mt-8 bg-white mx-16">

        <div class="pt-0.5 pl-1"><Etoile/></div>
        <p class="pt-1 pr-2">{{ unDefis.defis1 }}</p>

    </div>

        <div class=" flex gap-2 border border-white rounded-md py-3 mt-8 bg-white mx-16">

            <div class="pt-0.5 pl-1"><Etoile/></div>
            <p class="pt-1 pr-2">{{ unDefis.defis2 }}</p>

        </div>

    </div>
           <h2 class="text-center text-white mt-8 lg:mt-24  ">description</h2>

                    <div class="bg-white  mx-4 rounded-md mt-6 pt-5 pr-2 pb-5 pl-3">
                        <p class="" v-html="unDefis.description"></p>     
                    </div>

            <div class="flex justify-center mt-10 mb-36 lg:mb-12 ">
    
                <div class="bg-tahiti-300 border-2 border-white rounded-md text-center text-white font-semibold px-2 py-2 ">Ajouter</div>

                    </div>

    </div>
<Footerpage/>

</template>