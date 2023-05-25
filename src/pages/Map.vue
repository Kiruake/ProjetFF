<template>
    <HeaderPage/>
    <Footerpage/>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, routerKey } from 'vue-router'
import PocketBase from 'pocketbase';
import { onMounted, ref } from 'vue';
import Footerpage from '@/components/Footerpage.vue';
import HeaderPage from '@/components/HeaderPage.vue';
</script>