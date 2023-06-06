<template>
    <HeaderPage/>



    <div class="flex mt-24 justify-center gap-20 font-semibold text-white">
        <p class="underline underline-offset-8">Amis</p>
       <RouterLink to="/messagesgroupes"><p>Groupe</p></RouterLink>
    </div>


    <CardMessagesVue/>




<Footerpage/>


</template>

<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue';
import Footerpage from '@/components/Footerpage.vue';
import Tchat from '@/components/Tchat.vue';
import CardMessagesVue from '@/components/Cards/CardMessages.vue';



</script>
