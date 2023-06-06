<script setup lang="ts">
import { pb } from '@/backend'
import type { EventsResponse, IsoDateString, RecordIdString } from '@/pocketbase-types'

const props: EventsResponse = defineProps<EventsResponse>()

const urlImgEvent = props.image ? pb.getFileUrl(props, props.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImgEvent)

const url = `/events/${props.id}`

</script>


<template>


<div class="bg-white rounded-md w-[330px] mb-14 ">

   <img class="relative left-0" :src="urlImgEvent">

        <p class="text-2xl font-semibold text-center text-black pt-3">{{ nom_event }}</p>
        <p class="relative text-lg text-center text-black">{{ lieu_event }}</p>


       <RouterLink
                      :to="{
                        name: 'events-id',
                        params: {
                          id
                        }
                      }"
                     >
                     <div class="border mt-2 bg-tahiti-200 text-white rounded-b-md py-2 px-4">
                     <p class="text-center text-base hover font-semibold rounded-md">Voir +</p>
                     </div>
                 
                     </RouterLink>
   </div>

</template>