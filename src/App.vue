<template>
<div v-if="currentUser" class="mt-24 ">

        <h1>Welcome {{ currentUser?.name }}</h1>

        <div>
            <button type="button" @click="doLogout"
             class="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LogOut</button>
        </div>

         </div>

        <div v-else>

            <div class="flex justify-center mt-32">
             <LogoIzymate/>
             </div>


        <div class=" flex flex-col justify-center items-center mt-10 ">
            <input v-model="username" id="username" name="username" type="text" autocomplete="none" placeholder="Email" required class=" w-72 mt-2 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <input v-model="password" id="password" name="password" type="password" autocomplete="none" placeholder="Mot de passe" required class=" w-72 mt-4 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>

                <div v-if="loginMode" class="flex justify-center space-x-16 mt-16">
                    <button type="button" @click="doLogin"
                            class="flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Se connecter</button>
            
                    <button type="button" @click="loginMode=false"
                            class="flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">S'inscrire</button>
       
        </div>

    <div v-else>


                <div class="flex justify-center items-center mt-4">
                  <input v-model="Name" id="username" name="Name" type="text" autocomplete="none" placeholder="Nom" required class=" w-72 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>

                <div class="flex justify-center space-x-10 mt-14">
                <button type="button" @click="doCreateAccount"
                     class="flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Créer</button>
            
                 <button type="button" @click="loginMode = true"
                 class="flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Retour</button>
     
                </div>
    </div>

 <a href="#" class="text-gray-100 underline flex justify-center mt-10">Mot de passe oublié ?</a>
 
</div>

<HeaderPage/>

<main class="mb-32">
    <RouterView/>
</main>
<FooterPage/>


</template>



<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterPage from "./components/Footerpage.vue"
import HeaderPage from "./components/HeaderPage.vue"
import PocketBase from 'pocketbase';
import { onMounted, ref } from 'vue';
import LogoIzymate from "./components/icons/LogoIzymate.vue";



let pb = null;
const currentUser = ref();
const username = ref("");
const password = ref("");
const Name = ref("");

const loginMode = ref(true);

onMounted ( async () => {
    pb = new PocketBase('http://127.0.0.1:8090');

    pb.authStore.onChange(()=>{
         currentUser.value = pb.authStore.model
    },true)
});

  const doLogout = () => {
    pb.authStore.clear();

  }

const doLogin = async () => {
    try {
     const authData = await pb.collection('users')
        .authWithPassword(username.value,password.value);

    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model);

    } catch (error) {
        alert(error.message)
    }   

}

const doCreateAccount = async () => {
    try{
    const data = {
        "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
        "email": username.value,
        "emailVisibility": true,
        "password": password.value,
        "passwordConfirm": password.value,
        "name": Name.value
    };

    const record = await pb.collection('users').create(data);

    await doLogin ();
} catch (error) {
    alert (error.message)
}
}
</script>


