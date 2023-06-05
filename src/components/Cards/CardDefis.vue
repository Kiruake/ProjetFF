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

<div class="w-[350px] h-[127px] rounded-md bg-white relative">

    <img class="m-auto w-[350px] h-[67px]  rounded-tl-md rounded-tr-mdobject-cover " :src="urlImgDefis">

    <p class=" text-xl font-semibold text-center text-white">
      C’est moi le champion</p>

    <div class="flex gap-8">

        <p class=" text-base text-center text-black">{{formatDate (date) }}</p>

        <div class="flex gap-1">
          <div class="pt-1"><IconTrophy/></div> 
          <p class=" text-base text-left text-black">{{ points }}</p>
        </div>

        <p class="text-base text-left text-black">{{ nombre }}</p>
    
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
                     <div class="bg-tahiti-300 mb-3 border-2 border-white rounded-md text-center text-white font-semibold px-2 py-2 ">
                     <p class="text-center text-lg hover rounded-md">En savoir plus</p>
                     </div>
                 
                     </RouterLink>



</template>