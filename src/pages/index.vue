<template>
    <HeaderPage/>

        <TacheViolette class="absolute top-0"/>

     <h2 class="text-white text-center mt-64">Bienvenue {{ currentUser?.name }}</h2> 

    <h2 class="text-white text-center mt-16">Evenements à venir</h2>

 
        <CardEvent v-for="unEvent of EventsListe" v-bind="{ ...unEvent }"/>
    
    
            <div class="flex justify-center mt-16">
          <RouterLink to="/CreationEvents"> <BoutonPlus1/></RouterLink>
            </div>

    <RouterView/>   

    <Footerpage/>
       
</template>

    <script setup lang="ts">
    import { RouterLink, RouterView, routerKey } from 'vue-router'
    import PocketBase from 'pocketbase';
    import { onMounted, ref } from 'vue';
    import CardEvent from '@/components/Cards/CardEvent.vue';
    import { allEvents } from '@/backend';
    const EventsListe = await allEvents();

    import TacheViolette from '@/components/icons/TacheViolette.vue';
    import Footerpage from '@/components/Footerpage.vue';
    import HeaderPage from '@/components/HeaderPage.vue';
    import BoutonPlus1 from '@/components/Boutons/BoutonPlus1.vue';
    import { useRouter,} from 'vue-router';

        
    

    var pocketbase_ip = ''
    if (import.meta.env.MODE === 'production')
        pocketbase_ip = 'http://193.168.146.10:80'
    else pocketbase_ip = 'http://127.0.0.1:8090'
    alert(pocketbase_ip)


    let pb = null;
    const currentUser = ref();
    const router = useRouter ();


    onMounted(async () => {
        pb = new PocketBase('http://127.0.0.1:8090');
         !pb.authStore.isValid && router.replace("/LoginPage")
         currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
      
    });


</script>
