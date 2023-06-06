<script setup lang="ts">

import { oneIDUsers, pb } from '@/backend'
import { oneIDEvent } from '@/backend'
import Footerpage from '@/components/Footerpage.vue';
import HeaderPage from '@/components/HeaderPage.vue';
import IconLocEvent from '@/components/icons/IconLocEvent.vue';
import DateIcon from '@/components/icons/DateIcon.vue';
import IconMembres from '@/components/icons/IconMembres.vue';
import { formatDate } from '@/helper'


const props = defineProps<{ id: string }>();
console.log(props.id);

const unEvent = await oneIDEvent(props.id)
console.log(unEvent);


const urlImgEvent = unEvent.image ? pb.getFileUrl(unEvent, unEvent.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImgEvent)

</script>

<template>

<HeaderPage/>

<div class="lg:ml-64 lg:mt-4">

         <img class=" mt-14 lg:ml-40 lg:mt-0 w-full lg:w-2/3 " :src="urlImgEvent">

        <div class="bg-white pt-5 lg:ml-40 pb-5 lg:w-2/3">

                    <div class="bg-tahiti-100 border-2 border-tahiti-300 rounded-md mx-28">
                    <h1 class="text-2xl text-white text-center py-2">{{ unEvent.nom_event}}</h1>
                    </div>

                    <div class=" mt-4 border-2 border-tahiti-100 w-[275px] m-auto"></div>

                    <div class=" mt-6 pl-4 flex gap-2">
                        <DateIcon/>
                    <p class="text-lg">{{ formatDate (unEvent.date) }}</p>
                    </div>

                    <div class=" mt-4 pl-4 flex gap-2">
                    <IconLocEvent/>
                    <p class="text-lg">{{ unEvent.lieu_event }}</p>
                    </div>

                    <div class=" mt-4 pl-4 flex gap-2">
                        <IconMembres/>
                        <p class="text-lg underline underline-offset-4">Membres</p>
                        </div>


        </div>

  <div class="lg:w-2/3 lg:ml-40">

        <h2 class="text-center text-white mt-8  ">description</h2>

                <div class="bg-white  mx-4 rounded-md mt-6 pt-5 pr-2 pb-5 pl-3">
                    <p class="" v-html="unEvent.description"></p>     
                </div>

        <div class="flex justify-center mt-10 mb-36 lg:mb-10 ">
    
            <div class="bg-tahiti-300 border-2 border-white rounded-md text-center text-white font-semibold px-2 py-2 ">Rejoindre</div>

                </div>

    </div>
</div>

<Footerpage/>

</template>