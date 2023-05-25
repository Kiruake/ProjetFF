<script setup lang="ts" >
import { RouterLink } from 'vue-router';
import IconNotiVue from './icons/IconNoti.vue';
import IconParametreVue from './icons/IconParametre.vue';
import VectorBleuMenu from './icons/VectorBleuMenu.vue';
import VectorVioletMenuVue from './icons/VectorVioletMenu.vue';
import { useRouter, } from 'vue-router';
import { onMounted, ref } from 'vue';
import PocketBase from 'pocketbase';
import {computed, watch } from 'vue';


const activeMenu = ref(false)

function closeMenu() {
    activeMenu.value = false
}

let pb = null;
const currentUser = ref();
const router = useRouter();


onMounted(async () => {
  pb = new PocketBase('http://127.0.0.1:8090');
  !pb.authStore.isValid && router.replace("/LoginPage")
  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;

});

const doLogout = () => {
  pb.authStore.clear();
  currentUser.value = null;
  router.replace("/LoginPage")

}
</script>




<template>

     <header class=" flex justify-end z-10 fixed top-0 drop-shadow-3xl w-full translate-y-0 bg-white px-4 py-4 transition-all duration-300 ease-in-out">
        <div class="flex gap-4 z-20">
          <IconNotiVue/>
            <IconParametreVue @click= "activeMenu = !activeMenu" />
        </div>

        <div class="flex items-center gap-4">
          
         	  <nav class="invisible opacity-0 z-10 fixed inset-0 h-screen w-screen bg-white text-2xl text-white transition-all duration-300 ease-in-out"
            :class="{ '!visible opacity-100': activeMenu }" >

          <VectorVioletMenuVue class="absolute top-14"/>
           <VectorBleuMenu class="absolute bottom-12"/>
            
    		      <ul class=" flex-col justify-start pt-40 items-center text-3xl">
    		        <li><RouterLink class="menu-link text-black" to="/Confidentialite" @click="closeMenu">Confidentialité</RouterLink></li>
    		        <li><RouterLink class="menu-link text-black" to="/Confidentialite" @click="closeMenu">Compte</RouterLink></li>
    		        <li><RouterLink class="menu-link text-black" to="/Confidentialite" @click="closeMenu">A Propos</RouterLink></li>
    		        <li><RouterLink class="menu-link text-black" to="/Confidentialite" @click="closeMenu">Contact</RouterLink></li>
    		        <li><RouterLink class="menu-link text-black" to="/Confidentialite" @click="closeMenu">Premium</RouterLink></li> 

                <li> <div class="flex flex-col justify-center items-center mt-10">
                  <button type="button" @click="doLogout"
                          class="flex justify-center text-red-500  font-semibold ">Se déconnecter</button>
                   </div>
              </li>
    		      </ul>
    		    </nav>
        </div>
    
      </header>
</template>