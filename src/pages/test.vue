<script setup lang="ts">
import type { EventsResponse } from 'pocketbase-types';
import { ref } from 'vue';
import router from '@/main';


const event = ref<EventsResponse>()

async function submit() {
    await pb.collection('events').create(event.value);
    router.push({ name: 'index' });
}

</script>
<template>
    <div class="bg-blue-500 rounded-xl p-2 text-black font-bold flex justify-center">
        <input type="form" v-model="event" :submit-attrs="{
            ignore: false
        }" submit-label="Créer" class="bg-red-500" @submit="submit">
            <input type="text" label="Nom de l'évènement" name="titre" />
            <input type="number" label="Nombre de participants" name="nb_participants" />
            <input type="text" label="lieu évènement" name="lieu_event" />
      

    </div>
</template>
