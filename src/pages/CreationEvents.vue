<script setup lang="ts">
import Footerpage from '@/components/Footerpage.vue';
import HeaderPage from '@/components/HeaderPage.vue';
import BoutonSwitchVue from '@/components/Boutons/BoutonSwitch.vue';
import VectorBleuMenu from '@/components/icons/VectorBleuMenu.vue';
import VectorVioletMenuVue from '@/components/icons/VectorVioletMenu.vue';

</script>

<template>

     <HeaderPage/>
     <VectorVioletMenuVue class="absolute top-14"/>

<div class="bg-gray-400 pt-2 pb-50">

    <div class="flex justify-end mt-20">
        <BoutonSwitchVue/>
    </div>

        <input label="Nom de l'évènement" name="nom-event" type="text" placeholder="" class="w-72 mt-8 pl-8 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <input label="lieu de l'évènement" name="lieu-event" type="text" placeholder="" class="w-72 mt-16 px-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <p class="text-center text-2xl pt-8">Quels sport?</p>

    <div class="flex justify-center items-center gap-16 pt-8">
        <img src="/images/BallonBasket.png">
        <img src="/images/BallonFoot.png">
    </div>

    <p class="text-center text-2xl pt-8">Le....à...</p>
    <p class="text-center text-2xl">Nombre de participants</p>

</div>

<VectorBleuMenu class="absolute bottom-8"/>
<Footerpage/>

</template>
