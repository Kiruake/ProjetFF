
<script setup lang="ts">

import { allEvents } from '@/backend';
import CardEvent from '@/components/Cards/CardEvent.vue';

const EventsListe = await allEvents();

</script>

<template>
    <h1 class="uppercase text-center text-4xl mt-24 mb-16 lg:mb-2">Events</h1>

   <div class=" flex flex-col justify-center items-center gap-8 mt-4">
            <CardEvent v-for="unEvent of EventsListe" v-bind="{...unEvent}"/>
    
        </div>

</template>

