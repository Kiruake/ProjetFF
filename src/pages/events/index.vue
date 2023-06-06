
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

    <h1 class="uppercase text-center lg:ml-40 text-white text-4xl mt-24 lg:mt-10 mb-10 lg:mb-16">Events</h1>

   <div class="grid grid-col-1 lg:grid-cols-2 lg:ml-96 justify-center items-center gap-8 mt-4 mb-8">
            <CardEvent v-for="unEvent in allEvents" v-bind="{...unEvent}"/>
    
        </div>


<Footerpage/>

</template>

