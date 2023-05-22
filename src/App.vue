<template>
<div v-if="currentUser" >

        <h1>Welcome {{ currentUser?.name }}</h1>
        <div>
            <button type="button" @click="doLogout"
             class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LogOut</button>
        </div>
        </div>
        <div v-else>
             <h1>lOGIN</h1>
        
            <div class="flex items-center justify-between">
              <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input id="username" name="username" type="text" autocomplete="none" placeholder="Enter Email Adress" required class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>

            <div class="flex items-center justify-between">
                  <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  <div class="text-sm">
                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  </div>
                </div>
                <div class="mt-2">
                  <input id="password" name="password" type="text" autocomplete="none" placeholder="Enter Email Adress" required class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>


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



let pb = null;
const currentUser = ref();

onMounted ( async () => {
    pb = new PocketBase('http://127.0.0.1:8090');

    const authData = await pb.collection ('users')
    .authWithPassword ('ayrton.chaves08@gmail.com', 'Portugal08');

    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model);
    currentUser.value= pb.authStore.model
});

  const doLogout = () => {
    pb.authStore.clear();
    currentUser.value = null;
  }

</script>


