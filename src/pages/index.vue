<template>
    <HeaderPage/>

        <TacheViolette class="absolute top-0"/>

     <h2 class="text-white text-center mt-64">Bienvenue {{ currentUser?.name }}</h2> 

    <h2 class="text-white text-center mt-16">Evenements à venir</h2>

 
        
    
            <div class="flex justify-center mt-16">
          <RouterLink to="/CreationEvents"> <BoutonPlus1/></RouterLink>
            </div>

    <RouterView/>   

    <Footerpage/>
       
</template>

    <script setup lang="ts">
    import { RouterLink, RouterView, routerKey } from 'vue-router'
    import PocketBase from 'pocketbase';
    import {pb} from '@/backend'
    import { onMounted, ref } from 'vue';
    import CardEvent from '@/components/Cards/CardEvent.vue';
    import { allEvents } from '@/backend';
    const EventsListe = await allEvents();
    import TacheViolette from '@/components/icons/TacheViolette.vue';
    import Footerpage from '@/components/Footerpage.vue';
    import HeaderPage from '@/components/HeaderPage.vue';
    import BoutonPlus1 from '@/components/Boutons/BoutonPlus1.vue';
    import { useRouter,} from 'vue-router';

        


    const currentUser = ref();
    const router = useRouter ();


    onMounted(async () => {
   
         !pb.authStore.isValid && router.replace("/LoginPage")
         currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
      
    });


</script>
