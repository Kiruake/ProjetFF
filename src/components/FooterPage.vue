<script setup lang="ts">
import IconDefis from './icons/IconDefis.vue';
import IconAccueil from './icons/IconAccueil.vue';
import IconMessage from './icons/IconMessage.vue';
import IconProfil from './icons/IconProfil.vue';
import IconLoc from './icons/IconLoc.vue';
</script>

<template>
    <footer class="mt-6">
        <nav class="bg-stone-400 py-4 drop-shadow-3xl">
            <div>
                <ul class="flex justify-center gap-7">

                    <li><a href="">
                    <IconAccueil/>
                     </a></li>

                    <li><a href="">
                    <IconDefis/>
                    </a></li>

                    <li><a href="">
                    <IconLoc/>
                    </a></li>

                    <li><a href="">
                    <IconMessage/>
                    </a></li>

                    <li><a href="">
                    <IconProfil/>
                    </a></li>
                         
                </ul>
            </div>
        </nav>

</footer></template>