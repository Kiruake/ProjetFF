<template>


        <TacheViolette class="absolute top-0"/>
     <h2 class="text-white text-center mt-64">Bienvenu {{ currentUser?.name }}</h2> 

      <div class="flex flex-col justify-center items-center mt-10">
                <button type="button" @click="doLogout"
                    class="flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LogOut</button>
            </div>

    <h2 class="text-white text-center mt-16">Evenements à venir</h2>
    <div class=" flex flex-col justify-center items-center gap-8 mt-4">
    <CardEvent1/>
    <CardEvents2/>
    <CardEvent3Vue/>
    </div>
    <RouterView/>

       

</template>

    <script setup lang="ts">
    import { RouterLink, RouterView, routerKey } from 'vue-router'
    import PocketBase from 'pocketbase';
    import { onMounted, ref } from 'vue';
    import LogoIzymate from '@/components/icons/LogoIzymate.vue';
    import CardEvent1 from '@/components/Cards/CardEvent1.vue';
    import CardEvents2 from '@/components/Cards/CardEvent2.vue';
    import TacheViolette from '@/components/icons/TacheViolette.vue';
    import CardEvent3Vue from '@/components/Cards/CardEvent3.vue';
    import { useRouter } from 'vue-router';
    

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

    const doLogout = () => {
        pb.authStore.clear();
        currentUser.value = null;
        router.replace("/LoginPage")

    }

    
function onBeforeMount(arg0: () => void) {
throw new Error('Function not implemented.');
}
</script>
