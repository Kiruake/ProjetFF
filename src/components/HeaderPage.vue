<script setup lang="ts" >
import { RouterLink } from 'vue-router';
import IconNotificationVue from '@/components/icons/IconNoti.vue';
import IconParametreVue from './icons/IconParametre.vue';
import { ref, computed, watch } from 'vue';


const activeMenu = ref(false)

function closeMenu() {
    activeMenu.value = false
}
</script>
<template>

     <header class=" flex justify-end z-10 fixed top-0 drop-shadow-3xl w-full translate-y-0 bg-white px-6 py-4 transition-all duration-300 ease-in-out">
        <div class="z-20">
            <IconParametreVue @click= "activeMenu = !activeMenu" />
        </div>

        <div class="flex items-center gap-4">
         	<nav class="invisible opacity-0 z-10 fixed inset-0 h-screen w-screen bg-white text-2xl text-white transition-all duration-300 ease-in-out"
            :class="{ '!visible opacity-100': activeMenu }" >
           
            
    		    <ul class=" flex-col justify-start pt-28 items-center">
    		      <li><RouterLink class="menu-link text-black" to="/Confidentialite" @click="closeMenu">Confidentialité</RouterLink></li>
    		      <li><RouterLink class="menu-link text-black" to="/Confidentialite" @click="closeMenu">Compte</RouterLink></li>
    		      <li><RouterLink class="menu-link text-black" to="/Confidentialite" @click="closeMenu">A Propos</RouterLink></li>
    		      <li><RouterLink class="menu-link text-black" to="/Confidentialite" @click="closeMenu">Contact</RouterLink></li>
    		      <li><RouterLink class="menu-link text-black" to="/Confidentialite" @click="closeMenu">Premium</RouterLink></li>
    		    </ul>
    		  </nav>
        </div>
    
      </header>
</template>