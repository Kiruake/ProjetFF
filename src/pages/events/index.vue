
<script setup lang="ts">

import type { EventsResponse } from '@/pocketbase-types';
import { ref, onMounted } from "vue";
import CardEvent from '@/components/Cards/CardEvent.vue'
import { getAllEvents } from '@/backend';
import Footerpage from '@/components/Footerpage.vue';
import HeaderPage from '@/components/HeaderPage.vue';

const allEvents = ref<EventsResponse[]>([]);
onMounted(async () => {
   
    allEvents.value = await getAllEvents();
    console.log(allEvents.value);
});



</script>

<template>

    <HeaderPage/>

    <h1 class="uppercase text-center text-4xl mt-24 mb-16 lg:mb-2">Events</h1>

   <div class=" flex flex-col justify-center items-center gap-8 mt-4">
            <CardEvent v-for="unEvent in allEvents" v-bind="{...unEvent}"/>
    
        </div>


<Footerpage/>

</template>

