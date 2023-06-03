<script setup lang="ts">
import IconDefis from '@/components/icons/IconDefis.vue';
import IconAccueil from '@/components/icons/IconAccueil.vue';
import IconMessage from '@/components/icons/IconMessage.vue';
import IconProfil from '@/components/icons/IconProfil.vue';
import IconLoc from '@/components/icons/IconLoc.vue';
import { RouterLink } from 'vue-router';
import { ref, computed, watch } from 'vue';

const activeMenu = ref(false)

function closeMenu() {
    activeMenu.value = false
}

</script>

<template>
    <footer class="fixed bottom-0 w-screen z-10">
        <nav class="bg-white py-1 drop-shadow-3xl ">
            <div>
                <ul class="grid grid-cols-5 items-center justify-items-center ">
                    <li><RouterLink to="/" @click="closeMenu"><IconAccueil/></RouterLink></li>
                    <li><RouterLink to="/defis" @click="closeMenu"><IconDefis/></RouterLink></li>
                    <li><RouterLink to="/map" @click="closeMenu"><IconLoc/></RouterLink></li>
                    <li><RouterLink to="/messages" @click="closeMenu"><IconMessage/></RouterLink></li>
                    <li><RouterLink to="/profil" @click="closeMenu"><IconProfil/></RouterLink></li>
                </ul>
            </div>
        </nav>

    
</footer>
</template>