<template>
   
<HeaderPage/>

<main class="mb-32">
    <RouterView/>
</main>


</template>


<script setup lang="ts">

import { RouterView } from 'vue-router'
import HeaderPage from "./components/HeaderPage.vue"
import PocketBase from 'pocketbase';



var pocketbase_ip=''
if (import.meta.env.MODE === 'production')
pocketbase_ip='http://193.168.146.10:80'
else pocketbase_ip='http://127.0.0.1:8090'
alert (pocketbase_ip)


</script>


