<script setup lang="ts" >
import { RouterLink } from 'vue-router';
import IconNotiVue from './icons/IconNoti.vue';
import IconParametreVue from './icons/IconParametre.vue';
import VectorBleuMenu from './icons/VectorBleuMenu.vue';
import VectorVioletMenuVue from './icons/VectorVioletMenu.vue';
import { ref, computed, watch } from 'vue';


const activeMenu = ref(false)

function closeMenu() {
    activeMenu.value = false
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
            
    		      <ul class=" flex-col justify-start pt-40 items-center text-xl">
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