<template>
    <HeaderPage/>

        <div class="lg:hidden">

             <TacheViolette class="absolute top-0"/>
         </div> 

<div class="lg:ml-32">

     <h2 class="text-white text-center mt-64 lg:mt-32 lg:mb-16 ">Bienvenue {{ currentUser?.name }}</h2>

     <img class="shadow-xl rounded-full h-auto align-middle border-none lg:mb-20 m-auto mt-7 max-w-150-px lg:m-auto" src="/images/PPSasuke.png"/>
         

<div class="lg:flex lg:space-x-32 lg:justify-center">

            <div class="flex justify-center lg:mt-12 mt-16">
          <RouterLink to="/Events"> 

<div class="bg-tahiti-300 border-2 border-white rounded-md text-center text-white font-semibold px-2 py-2 ">Tout les événements </div>

          </RouterLink>
            </div>


             <div class="flex justify-center lg:mt-12 mt-7">
              <RouterLink to="/Events/create"> 

    <div class="bg-tahiti-300 border-2 border-white rounded-md text-center text-white font-semibold mb-40 px-2 py-2 ">Créer un événement</div>

              </RouterLink>
                </div>

    <RouterView/>  
</div>
    </div>
    <Footerpage/>
       
</template>

    <script setup lang="ts">
    import { RouterLink, RouterView, routerKey } from 'vue-router'
    import PocketBase from 'pocketbase';
    import { oneIDUsers, pb} from '@/backend'
    import { onMounted, ref } from 'vue';

    import { allEvents } from '@/backend';
    const EventsListe = await allEvents();
    import TacheViolette from '@/components/icons/TacheViolette.vue';
    import Footerpage from '@/components/Footerpage.vue';
    import HeaderPage from '@/components/HeaderPage.vue';

    import { useRouter,} from 'vue-router';



    const currentUser = ref();
    const router = useRouter ();


    onMounted(async () => {
   
         !pb.authStore.isValid && router.replace("/LoginPage")
         currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
      
    });


</script>
