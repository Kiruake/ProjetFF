<script setup lang="ts">

import type { DefisResponse } from '@/pocketbase-types';
import { ref, onMounted } from "vue";
import CardDefis from '@/components/Cards/CardDefis.vue'
import { getAllDefis, } from '@/backend';
import { oneIDDefis } from '@/backend';
import HeaderPage from '@/components/HeaderPage.vue';
import Footerpage from '@/components/Footerpage.vue';
import TacheViolette from '@/components/icons/TacheViolette.vue';
import ClassementTemplate from '@/components/Cards/ClassementTemplate.vue';
import IconTrophy from '@/components/icons/IconTrophy.vue';

const allDefis = ref<DefisResponse[]>([]);
onMounted(async () => {

    allDefis.value = await getAllDefis();
    console.log(allDefis.value);
});

// const props = defineProps<{ id: string }>();
// console.log(props.id);

// const unDefis = await oneIDDefis(props.id)
// console.log(unDefis);

// const points = await oneIDDefis(unDefis.points.toString())


</script>

<template>
    <HeaderPage/>

        <h2 class="top-24 text-center">Izy Challenges</h2>



        

        <TacheViolette class="lg:hidden absolute z-0 top-0"/>


        <h3 class="text-white lg:text-center lg:text-5xl pl-6 mt-52 lg:mt-16">défis</h3>
        


    
          <div class="grid grid-col-1 lg:grid-cols-3 lg:items-center lg:justify-center gap-8 lg:mt-0 mt-4">
            
            <CardDefis v-for="unDefis in allDefis" v-bind="{ ...unDefis }" />

         </div>

           

                <h2 class="text-center text-white mt-32 mb-10">Classement</h2>
          
            <div class="lg:grid lg:grid-cols-2 pb-24 lg:pl-24 lg:grid-rows-1 items-center ">

                    <ClassementTemplate/>

                    <div class="m-auto lg:pr-14 w-[328px] lg:w-[700px] lg:h-[150px] h-[300px] mb-10 lg:mb-0 rounded-[20px] bg-white border border-black">

                        <div class="flex mt-6 space-x-6 pl-5">
                            <p class="pt-4 text-2xl font-semibold text-tahiti-100">1</p>
                            <img src="/images/PP1.png"/>
                            <p class="pt-4 text-xl">Username1</p>

                            <div class="text-xl flex pt-4">
                                <p>90</p> 
                                    <div class="pt-2 pl-2">
                                        <IconTrophy/>
                                    </div>
                            </div>
                  
                        </div>

                    <div class="flex mt-6 space-x-6 pl-5">
                            <p class="pt-4 text-2xl font-semibold text-tahiti-100">2</p>
                        <img src="/images/PP2.png"/>
                        <p class="pt-4 text-xl">Username2</p>

                        <div class="text-xl flex pt-4 ">
                            <p>90</p> 
                                <div class="pt-2 pl-2">
                                    <IconTrophy/>
                                </div>
                        </div>
                
                    </div>

                    <div class="flex mt-6 space-x-6 pl-5">

                        <p class="pt-4 text-2xl font-semibold text-tahiti-100">3</p>
                        <img src="/images/PP3.png"/>
                        <p class="pt-4 text-xl">Username3</p>

                        <div class="text-xl flex pt-4">

                                <p>90</p> 
                                <div class="pt-2 pl-2">
                                <IconTrophy/>
                                </div>
                    </div>

                </div>

                  
            </div>
        </div>
                        
                   

     <Footerpage/>

</template>