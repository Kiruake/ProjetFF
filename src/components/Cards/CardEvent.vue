<script setup lang="ts">

import { events } from "@/Data"
const event = events.find((event) => event.id === String(props.id))

const props = defineProps<{
  id: string
  nom_event : string
  lieu_event: string
  membre_actuel : number
  membre_max: number 
  date: string
  football : boolean
  prive : boolean 
}>()


</script>

<template>


  
    <div class="w-[329px] h-[86px] relative mt-6 z-0">
      <div class="w-[328px] h-20 absolute left-0 top-px rounded-xl bg-black/[0.35]"></div>
      <div class="w-[328px] h-20 absolute left-[-1px] top-[-1px] rounded-xl bg-white"></div>
      <p class="relative pt-0.5 text-2xl font-semibold text-center text-black">{{ nom_event }}</p>
      <p class="relative p text-base text-center text-black">{{ lieu_event }}</p>
      <p class="absolute left-36 top-[52px] text-base text-center text-black">{{ membre_actuel }}/ {{ membre_max }}</p>
      
    <img src="/images/ImageArena.png" class="w-[49px] h-[49px] absolute left-2 top-3 rounded-[100px] object-cover"/>
    <img src="/images/BallonFoot.png" class="w-[42px] h-10 absolute left-[276px] top-[19px]"/>
    <img class="w-[17px] h-[17px] absolute left-[123px] top-[53px]" src="/images/IconePersonne.png" />

    </div>
   

</template>