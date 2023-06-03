<template>

<HeaderPage/>

    <div class="container mx-auto">

        <h1 class="text-2xl text-white text-center font-bold mt-24 mb-6">Créer un événement</h1>

        <form @submit.prevent="submitForm">

            <div class="mb-4 pl-4">
                <label for="Nom" class="block font-bold mb-1 text-white">Nom de l'événement</label>

                <input v-model="eventData.nom_event" type="text" id="Nom" class="border border-gray-300 rounded-md p-2"
                    required>
            </div>

            <div class="mb-4 pl-4">
                <label for="dateStart" class="block font-bold mb-1 text-white">Date de l'événement</label>

                <input v-model="eventData.date" type="datetime-local" id="dateStart"
                    class="border border-gray-300 rounded-md p-2 " required>
            </div>
           
            <div class="mb-4 pl-4">
                <label for="place" class="block font-bold mb-1 text-white">Lieu</label>
            
                <input v-model="eventData.lieu_event" type="text" id="place" class="border pr-12 border-gray-300 rounded-md p-2"
                    required @input="fetchAddressSuggestions">
                <ul v-if="addressSuggestions.length > 0" class="bg-white border border-gray-300 rounded-md mt-2 p-2">
                    <li v-for="suggestion in addressSuggestions" :key="suggestion.place_id"
                        @click="selectAddressSuggestion(suggestion)">{{ suggestion.display_name }}</li>
                </ul>
            </div>

             <div class="mb-4 pl-4">
                    <label for="Participants" class="block font-bold mb-1 text-white">Membres maximum</label>

                    <input v-model="eventData.membre_max" type="number" id="Participants" min="1"
                        class="border border-gray-300 rounded-md p-2 " required>
                </div>


          <fieldset class="mb-4 pl-4 flex justify-center gap-16" >
        <legend class="text-white font-bold mb-4">Choix du sport:</legend>

        <div>
          <input v-model="eventData.football" type="radio" id="football" name="drone" value="football"
                 checked>
          <label class="text-white" for="football">Football</label>
        </div>

        <div>
          <input v-model="eventData.football" type="radio" id="football" name="drone" value="football">
          <label class="text-white" for="football">Basketball</label>
        </div>
          </fieldset>


    <div class="mb-4 pl-4">
                    <label for="Description" class="block font-bold mb-1 text-white">Description de l'événement</label>

                    <input v-model="eventData.description" type="textfield" id="Description" maxlength="50" class="border border-gray-300 rounded-md py-8 px-16 p-2"
                        required>
                </div>

                <button type="submit"
                    class="m-auto flex bg-white hover:bg-indigo-300 py-2 px-4 rounded-md">Créer</button>

        </form>

    </div>
<Footerpage/>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createEvent } from '@/backend';
import type { EventsRecord } from '@/pocketbase-types';
import { parseISO } from 'date-fns'
import axios from 'axios'
import HeaderPage from '@/components/HeaderPage.vue';
import Footerpage from '@/components/Footerpage.vue';

const eventData = ref<EventsRecord>({

});

const addressSuggestions = ref([]);

async function fetchAddressSuggestions() {
    try {
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
                q: eventData.value.lieu_event,
                format: 'json',
                limit: 5,
            },
        });

        addressSuggestions.value = response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des suggestions d\'adresse', error);
    }
}

function selectAddressSuggestion(suggestion: { display_name: string | undefined; }) {
    eventData.value.lieu_event = suggestion.display_name;
    addressSuggestions.value = [];
}

async function submitForm() {
    try {
        const eventDataWithISODate: EventsRecord = {
            ...eventData.value,
            date: parseISO(eventData.value.date).toISOString(),
        };

        await createEvent(eventDataWithISODate);

        console.log('Événement à été créé avec succès');
        eventData.value = {
            nom_event: '',
            date: '',
            lieu_event: '',
        };
    } catch (error) {
        console.error('Erreur lors de la création', error);
    }
}


</script>