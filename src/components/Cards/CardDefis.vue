<script setup lang="ts">
import { pb } from '@/backend'
import type { DefisResponse, IsoDateString, RecordIdString } from '@/pocketbase-types'


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

<div class="w-[350px] h-[127px] relative">

      <img class="m-auto w-[350px] h-[67px] absolute left-[-1px] top-[-1px] rounded-tl-[20px] rounded-tr-[20px] object-cover " :src="urlImgDefis">

      <p class="absolute left-[59px] top-[22px] text-xl font-semibold text-center text-white">
      C’est moi le champion</p>

      <p class="w-[21px] absolute left-[263px] top-[85px] text-base text-left text-black">{{ nombre }}</p>
      <p class="w-[33.37px] text-base text-center text-black">{{date}}</p>
      <p class="w-5 absolute left-28 top-[85px] text-base text-left text-black">{{ points }}</p>

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


</div>

</template>