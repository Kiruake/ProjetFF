<script setup lang="ts">
import IconDefis from '@/components/icons/IconDefis.vue';
import IconAccueil from '@/components/icons/IconAccueil.vue';
import IconMessage from '@/components/icons/IconMessage.vue';
import IconProfil from '@/components/icons/IconProfil.vue';
import IconLoc from '@/components/icons/IconLoc.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="fixed bottom-0 w-screen z-10">
        <nav class="bg-white py-4 drop-shadow-3xl">
            <div>
                <ul class="grid grid-cols-5 items-center justify-items-center ">
                    <li><RouterLink :to="{name:'index'}"><IconAccueil/></RouterLink></li>
                    <li><RouterLink to="/defis"><IconDefis/></RouterLink></li>
                    <li><RouterLink to="/map"><IconLoc/></RouterLink></li>
                    <li><RouterLink to="/messages"><IconMessage/></RouterLink></li>
                    <li><RouterLink to="/profil"><IconProfil/></RouterLink></li>
                </ul>
            </div>
        </nav>

    
</footer>
</template>