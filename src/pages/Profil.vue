
<template>
    <HeaderPage/>
   <CardPP/>
    <Footerpage />


<h3 class="text-center text-2xl text-white mt-8 mb-8">Evénements joués (3)</h3>

  <div class="font-bold space-y-8 pt-4 pb-6  bg-white rounded-md mx-12">

<p class="underline underline-offset-8 text-center">Historiques</p>

        <div class="flex space-x-6 pl-5">
        <img src="/images/Event1.png"/>
        <p class="pt-4 pr-6">ARENA</p>
        <p class="pt-4 text-gray-400">1j</p>
        </div>

        <div class="flex space-x-6 pl-5">
        <img src="/images/Event2.png"/>
        <p class="pt-4 pr-7">SIUUU</p>
        <p class="pt-4 text-gray-400">3j</p>
        </div>

        <div class="flex space-x-6 pl-5">
        <img src="/images/Event3.png"/>
        <p class="pt-4">Les sangs</p>
        <p class="pt-4 text-gray-400">6j</p>
        </div>

  </div>

  <div class="flex justify-center text-white  mb-32 space-x-7  mt-14  ">

    <h2 class=" text-center mt-1 text-2xl">Mes IzyTrophies</h2>

    <div class="font-semibold text-2xl flex border-2 rounded-md px-2 py-1">
        <p>90</p> 
            <div class="pt-2 pl-2">
            <IconTrophy/>
            </div>
    </div>

</div>

</template>

<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue';
import Footerpage from '@/components/Footerpage.vue';
import CardPP from '@/components/Cards/CardPP.vue';
import { oneIDEvent, pb } from '@/backend';
import IconTrophy from '@/components/icons/IconTrophy.vue';


</script>
