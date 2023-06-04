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

const User1 = await oneIDUsers(unEvent.user_participation[0])
const User2 = await oneIDUsers(unEvent.user_participation[0])
const User3 = await oneIDUsers(unEvent.user_participation[0])


const urlImgEvent = unEvent.image ? pb.getFileUrl(unEvent, unEvent.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImgEvent)

const urlImageUser1 = User1.avatar ? pb.getFileUrl(User1, User1.avatar, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImageUser1)

const urlImageUser2 = User2.avatar ? pb.getFileUrl(User2, User2.avatar, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImageUser2)

const urlImageUser3 = User3.avatar ? pb.getFileUrl(User3, User3.avatar, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImageUser3)


</script>

<template>

<HeaderPage/>


         <img class=" mt-14 " :src="urlImgEvent">

        <div class="bg-white pt-5 pb-5">

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

                        <div class="flex gap-4 pl-8 mt-4">
                            <img class="mt-2" :src="urlImageUser1">
                            <img class="mt-2" :src="urlImageUser2">
                            <img class="mt-2" :src="urlImageUser3">
                        </div>

        </div>

  
        <h2 class="text-center text-white mt-8  ">description</h2>

                <div class="bg-white  mx-4 rounded-md mt-6 pt-5 pr-2 pb-5 pl-3">
                    <p class="" v-html="unEvent.description"></p>     
                </div>

        <div class="flex justify-center mt-10 mb-36 ">
    
            <div class="bg-tahiti-300 border-2 border-white rounded-md text-center text-white font-semibold px-2 py-2 ">Rejoindre</div>

                </div>

<Footerpage/>

</template>