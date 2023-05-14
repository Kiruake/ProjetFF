<script setup lang="ts">
import IconDefis from './icons/IconDefis.vue';
import IconAccueil from './icons/IconAccueil.vue';
import IconMessage from './icons/IconMessage.vue';
import IconProfil from './icons/IconProfil.vue';
import IconLoc from './icons/IconLoc.vue';
</script>

<template>
    <footer class="mt-6">
        <nav class="bg-white py-4 drop-shadow-3xl">
            <div>
                <ul class="flex justify-center gap-7">

                    <li><a href="">
                    <IconAccueil/>
                     </a></li>

                    <li class="pr-20"><a href="">
                    <IconDefis/>
                    </a></li>

                    <li class="absolute -top-4"><a href="">
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