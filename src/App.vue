<template>
   
<main>

    <Suspense>
    <RouterView/>
    </Suspense>
    <Auth/>
</main>


</template>


<script setup lang="ts">

import { RouterView } from 'vue-router'
import PocketBase from 'pocketbase';
import Auth from './components/Auth.vue';



</script>


