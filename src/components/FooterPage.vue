<script setup lang="ts">
import IconDefis from '@/components/icons/IconDefis.vue';
import IconAccueil from '@/components/icons/IconAccueil.vue';
import IconMessage from '@/components/icons/IconMessage.vue';
import IconProfil from '@/components/icons/IconProfil.vue';
import IconLoc from '@/components/icons/IconLoc.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <footer class="mt-6">
        <nav class="bg-white py-4 drop-shadow-3xl">
            <div>
                <ul class="grid grid-cols-5 items-center justify-items-center ">
                    <li><RouterLink to="/index"><IconAccueil/></RouterLink></li>
                    <li><RouterLink to="/Defis"><IconDefis/></RouterLink></li>
                    <li><RouterLink to="/Map"><IconLoc/></RouterLink></li>
                    <li><RouterLink to="/Messages"><IconMessage/></RouterLink></li>
                    <li><RouterLink to="/Profil"><IconProfil/></RouterLink></li>
                </ul>
            </div>
        </nav>

    
</footer>
     <RouterView />
</template>