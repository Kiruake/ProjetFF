<template>

    <div class="flex justify-center mt-32 mb-20">
        <LogoIzymate />
    </div>

    <h2 class="text-center">Password</h2>

    <div class=" flex flex-col justify-center items-center mt-10 ">
        
        <input v-model="username" id="username" name="username" type="text" autocomplete="none" placeholder="username" required
                class=" w-72 mt-2 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
    </div>

    <div class="flex justify-center space-x-10 mt-14 mb-60">

        <button type="button" @click="doRequest"
            class="flex justify-center rounded-md bg-white px-4 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Envoyer username</button>

        <div>
            <button type="button" @click="$router.back"
                    class="flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Retour
            </button>
        </div>

    </div>

</template>

<script setup lang="ts">
import PocketBase from 'pocketbase';
import { onMounted, ref } from 'vue';
import {pb} from '@/backend'
import LogoIzymate from '@/components/icons/LogoIzymate.vue';
import { useRouter } from 'vue-router';

const router = useRouter();




const currentUser = ref();
const username = ref("");


onMounted(async () => {


    pb.authStore.onChange(() => {
        currentUser.value = pb.authStore.model
    }, true)
});


const doRequest = async () => {
    if (username.value === "") alert ("Email required")
    try {
 await pb.collection('users').requestPasswordReset(username.value);
 alert ("Password change email sent")
  pb.authStore.isValid && router.replace("/index")

    } catch (error) {
        alert(error.message)
    }

}

</script>
