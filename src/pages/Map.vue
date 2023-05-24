<template>
    <Footerpage/>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, routerKey } from 'vue-router'
import PocketBase from 'pocketbase';
import { onMounted, ref } from 'vue';
import Footerpage from '@/components/Footerpage.vue';
</script>