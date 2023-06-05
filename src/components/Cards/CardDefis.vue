<script setup lang="ts">
import { pb } from '@/backend'
import type { DefisResponse, IsoDateString, RecordIdString } from '@/pocketbase-types'
import IconTrophy from '../icons/IconTrophy.vue'
import { formatDate } from '@/helper'


const props: DefisResponse = defineProps<DefisResponse>()


const urlImgDefis = props.image ? pb.getFileUrl(props, props.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImgDefis)

const url = `/defis/${props.id}`
</script>



<template>


  <div class="w-[350px] h-[127px] mt-16 rounded-md bg-white m-auto relative">
    
    <div>
      <div class="absolute pl-[70px] pt-3  text-white">
          <h3 class="border-2 border-white rounded-md px-2 py-2">{{ nom_defis }}</h3>
      </div>
      <img class="m-auto w-[350px] h-[67px]  rounded-tl-md rounded-tr-md object-cover " :src="urlImgDefis">
    </div>

    <p class=" text-xl font-semibold text-center text-white">
      C’est moi le champion</p>

    <div class="flex pl-4 gap-20">

        <p class=" text-base text-center text-black">Fin le : {{formatDate (date) }}</p>

        <div class="flex gap-1">
          <div class="pt-1"><IconTrophy/></div> 
          <p class=" text-base text-left text-black">{{ points }}</p>
        </div>

      
    
    </div>


  <RouterLink
                      :to="{
                        name: 'defis-id',
                        params: {
                          id
                        }
                      }"
                     >
                     <div class="bg-tahiti-300 mt-8 border-2 border-white rounded-md text-center mx-24 text-white font-semibold  py-2  ">
                     <p class="text-center text-lg hover rounded-md">En savoir plus</p>
                     </div>
                 
                     </RouterLink>


  </div>

</template>