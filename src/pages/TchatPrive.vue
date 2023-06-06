<script setup lang="ts">

import Footerpage from '@/components/Footerpage.vue';
import HeaderPage from '@/components/HeaderPage.vue';
import Tchat from '@/components/Tchat.vue';
import ArrowBack from  '@/components/icons/ArrowBack.vue';
import { RouterLink, RouterView, routerKey } from 'vue-router'

</script>


<template>

<HeaderPage/>

    
<Tchat/>

<Footerpage/>

</template>