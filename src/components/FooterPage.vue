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
    <footer class="fixed bottom-0 lg:left-0 w-screen lg:w-40  z-10">
        <nav class="bg-white py-1 lg:pb-12 drop-shadow-3xl lg:drop-shadow-none ">
            <div>
                <ul class="grid grid-cols-5  lg:grid-cols-1 items-center justify-items-center ">
                    <div>
                    <li class="lg:py-16"><RouterLink to="/" @click="closeMenu"><IconAccueil/></RouterLink></li>
                    <p class="hidden lg:visible" >défQQQQQQQQis</p>
                    </div>

                    <div class="flex">
                    <li><RouterLink to="/defis" @click="closeMenu"><IconDefis/></RouterLink></li>
                    <p class="lg:visible hidden" >défis</p>
                    </div>

                    <div>
                    <li class="lg:py-16"><RouterLink to="/map" @click="closeMenu"><IconLoc/></RouterLink></li>
                    <p class="lg:visible hidden" >défis</p>
                    </div>

                    <div>
                    <li><RouterLink to="/messages" @click="closeMenu"><IconMessage/></RouterLink></li>
                    <p class="lg:visible hidden" >défis</p>
                    </div>

                    <div>
                    <li class="lg:py-16"><RouterLink to="/profil" @click="closeMenu"><IconProfil/></RouterLink></li>
                    <p class="lg:visible hidden" >défis</p>
                    </div>

                </ul>
            </div>
        </nav>

    
</footer>
</template>