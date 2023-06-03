<script setup lang="ts">
import { pb } from '@/backend'
import type { DefisResponse, IsoDateString, RecordIdString } from '@/pocketbase-types'
import IconTrophy from '../icons/IconTrophy.vue'


const props = defineProps<{
  id: RecordIdString
  image?: string
  date?: IsoDateString
  nombre?: number
  points?: number
  nom_defis?: string
  defis1?: string
  defis2?: string
 }>() 

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

        <p class=" text-base text-center text-black">{{ date }}</p>

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
                     <div class="border border-black hover:border-tahiti-100 rounded-md mx-24 lg:mx-9 py-4 mb-16 hover:text-white-100 hover:bg-tahiti-100">
                     <p class="text-center text-xl hover rounded-md">En savoir plus</p>
                     </div>
                 
                     </RouterLink>



</template>