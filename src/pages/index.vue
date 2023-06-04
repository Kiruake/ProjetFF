<template>
    <HeaderPage/>

        <TacheViolette class="absolute top-0"/>

     <h2 class="text-white text-center mt-64">Bienvenue {{ currentUser?.name }}</h2> 

    <h2 class="text-white text-center mt-16">Evenements à venir</h2>

 
        
    
            <div class="flex justify-center mt-16">
          <RouterLink to="/Events"> 

<div class="bg-tahiti-300 border-2 border-white rounded-md text-center text-white font-semibold px-2 py-2 ">Tout les événements </div>

          </RouterLink>
            </div>

    <RouterView/>   

    <Footerpage/>
       
</template>

    <script setup lang="ts">
    import { RouterLink, RouterView, routerKey } from 'vue-router'
    import PocketBase from 'pocketbase';
    import { pb} from '@/backend'
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
