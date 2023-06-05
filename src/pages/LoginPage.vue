<template>

        <div class="flex justify-center mt-32 mb-20 pt-14">
            <LogoIzymate/>
        </div>


        <div class=" flex flex-col justify-center items-center mt-10 ">

            <input v-model="username" id="username" name="username" type="text" autocomplete="none" placeholder="Email.."
                    required class=" w-72 mt-2 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">

            <input v-model="password" id="password" name="password" type="password" autocomplete="none"
                placeholder="Mot de passe.." required class=" w-72 mt-4 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>

        <div class="flex justify-center space-x-16 mt-16">

            <button type="button" @click="doLogin"
                class="flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Se connecter
            </button>

            <button type="button" @click="$router.push('/CreateAccPage')"
                class="flex justify-center rounded-md bg-white px-6 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                S'inscrire
            </button>

        </div>
        <div class="flex justify-center">
            <button type="button" @click="$router.push('/Password')"
                class="text-gray-100 underline mt-10 mb-32 ">Mot de passe oublié ? 
            </button>
        </div>

</template>

<script setup lang="ts">
import {pb} from '@/backend'
import { onMounted, ref } from 'vue';
import LogoIzymate from '@/components/icons/LogoIzymate.vue';
import { useRouter } from 'vue-router';

const router = useRouter();


const currentUser = ref();
const username = ref("");
const password = ref("");


onMounted(async () => {

    pb.authStore.onChange(() => {
        currentUser.value = pb.authStore.model
    }, true)
});


const doLogin = async () => {
    try {
        const authData = await pb.collection('users')
            .authWithPassword(username.value, password.value);
            pb.authStore.isValid && router.replace("/")
    
    } catch (error) {
        alert(error.message)
    }

}


</script>
