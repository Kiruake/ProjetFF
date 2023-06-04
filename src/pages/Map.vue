<template>
    <HeaderPage/>
    <GoogleMap/>
    <Footerpage/>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, routerKey } from 'vue-router'
import PocketBase from 'pocketbase';
import { onMounted, ref } from 'vue';
import Footerpage from '@/components/Footerpage.vue';
import HeaderPage from '@/components/HeaderPage.vue';
import GoogleMap from '@/components/GoogleMap.vue';

</script>