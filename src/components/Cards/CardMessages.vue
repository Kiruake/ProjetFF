<script setup lang="ts">

import SearchBar1 from '../SearchBar1.vue';

</script>

<template>

<h3 class="mt-10 ml-8 mb-7 text-white">Messages</h3>
<div class="flex justify-center ">

    <div class="w-[328px] h-[500px] mb-10 flex rounded-[20px] bg-white border border-black"
        style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);">

        <div class="flex-cols items-start pt-8">

            <div class="grid grid-cols-3 items-start mt-8 -mb-4">

                <img class="pl-6" src="/images/PP1.png" />
                <p class=" pt-2 text-xs font-semibold  text-black">Username </p>
                <p class=" pt-2 text-[10px] text-center text-[#828282]">22min </p>
        
            </div>

            <p class="pl-24 text-[10px] text-left text-[#828282]">lorem ipsum lorem ipsum lorem ipsu...</p>

            <div class=" w-72 border mt-4 ml-4 flex"></div>
                  
            <div class="grid grid-cols-3 items-start pt-4 -mb-4">
                <img class="pl-6"  src="/images/PP2.png"/>
                <p class="  pt-2 text-xs font-semibold  text-black">Username </p>
                <p class=" pt-2 text-[10px] text-center text-[#828282]">3h </p>
            </div>

            <p class="pl-24 text-[10px] text-left text-[#828282]">lorem ipsum lorem ipsum lorem ipsu...</p>
             <div class=" w-72 border mt-4 ml-4 flex"></div>
            
            <div class="grid grid-cols-3 items-start pt-4 -mb-4">
                <img class="pl-6"  src="/images/PP3.png" />
                <p class="  pt-2 text-xs font-semibold text-black">Username </p>
                <p class=" pt-2 text-[10px] text-center text-[#828282]">3h </p>
            </div>

            <p class="pl-24 text-[10px] text-left text-[#828282]">lorem ipsum lorem ipsum lorem ipsu...</p>
             <div class=" w-72 border mt-4 ml-4 flex"></div>

            <div class="grid grid-cols-3 items-start pt-4 -mb-4">
                <img class="pl-6" src="/images/PP4.png" />
                <p class=" pt-2 text-xs font-semibold  text-black">Username </p>
                <p class=" pt-2 text-[10px] text-center text-[#828282]">1sem </p>
            </div>

            <p class=" pl-24 text-[10px] text-left text-[#828282]">lorem ipsum lorem ipsum lorem ipsu...</p>
             <div class=" w-72 border mt-4 ml-4 flex"></div>
            
        </div>

    </div>
</div>
    
</template>