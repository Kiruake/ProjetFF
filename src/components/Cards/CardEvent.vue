<script setup lang="ts">
import { pb } from '@/backend'
import type { EventsResponse, IsoDateString, RecordIdString } from '@/pocketbase-types'

const props: EventsResponse = defineProps<EventsResponse>()

const urlImgEvent = props.image ? pb.getFileUrl(props, props.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImgEvent)

const url = `/events/${props.id}`

</script>


<template>


<div class="bg-white rounded-md w-[330px] ">
   <img class="relative left-0" :src="urlImgEvent">
        <p class="text-2xl font-semibold text-center text-black pt-3">{{ nom_event }}</p>
        <p class="relative text-lg text-center text-black">{{ lieu_event }}</p>

        <div class="flex justify-center gap-2">
            <p class="relative text-base text-center text-black">{{ membre_actuel }}/ {{ membre_max }}</p>
            <img class="w-[17px] h-[17px]" src="/images/IconePersonne.png" />
        </div>

      <!-- <p>{{ prive }}</p> <p>{{ football }}</p>  -->

  </div>


       <RouterLink
                      :to="{
                        name: 'events-id',
                        params: {
                          id
                        }
                      }"
                     >
                     <div class="border bg-white  rounded-md  py-2 px-4 mb-16 hover:text-white-100 hover:bg-tahiti-100">
                     <p class="text-center text-base hover font-semibold rounded-md">Voir +</p>
                     </div>
                 
                     </RouterLink>

</template>