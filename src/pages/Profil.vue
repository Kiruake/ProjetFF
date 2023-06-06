
<template>
    <HeaderPage/>
   <CardPP/>
    <Footerpage />


<div class="lg:grid lg:grid-cols-2 mb-24">

<div class="lg:col-start-1 lg:ml-40">

<h3 class="text-center text-2xl text-white  mt-8 mb-8">Evénements joués (3)</h3>

  <div class="font-bold space-y-8 pt-4 pb-6  bg-white rounded-md lg:mx-32 mx-12">

      <p class="underline underline-offset-8 text-center">Historiques</p>

        <div class="flex space-x-6 lg:pl-14 pl-5">
        <img src="/images/Event1.png"/>
        <p class="pt-4 pr-6">ARENA</p>
        <p class="pt-4 text-gray-400">1j</p>
        </div>

        <div class="flex space-x-6 lg:pl-14 pl-5">
        <img src="/images/Event2.png"/>
        <p class="pt-4 pr-7">SIUUU</p>
        <p class="pt-4 text-gray-400">3j</p>
        </div>

        <div class="flex space-x-6 lg:pl-14 pl-5">
        <img src="/images/Event3.png"/>
        <p class="pt-4">Les sangs</p>
        <p class="pt-4 text-gray-400">6j</p>
        </div>

  </div>

  </div>


  <div>
  <div class="flex justify-center text-white  mb-12 space-x-7 lg:mt-8  mt-14  ">

    <h2 class=" text-center mt-1 lg:mt-0 lg:ml-16 text-2xl col-start-2 row-start-1">Mes IzyTrophies</h2>

    <div class="font-semibold text-2xl lg:border-none flex border-2 rounded-md px-2 py-1 lg:py-0">
        <p>90</p> 
            <div class="pt-2  pl-2">
            <IconTrophy/>
            </div>
    </div>
    </div>
    <div class="pl-5 lg:pl-20 grid grid-cols-3 lg:col-start-2 lg:row-start-1 font-bold gap-4 pb-6 bg-white rounded-md lg:mx-32 mx-12">

      <p class="col-span-2 ml-2 lg:ml-0 pt-5 ">Mes badges</p>

            <img class="w-14 h-16 ml col-start-1" src="images/Medaille.png"/>
            <img class="w-14 h-16 col-start-2" src="images/Medaille.png"/>
            <img class="w-14 h-16 col-start-3" src="images/Medaille.png"/>
      
          </div>

          <div class=" mt-12 lg:mx-72 mx-32 rounded-sm border m-auto bg-tahiti-100 h-11">
            <p class="text-lg font-semibold text-white lg:ml-16  ml-9 mt-2">Voir +</p>
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
