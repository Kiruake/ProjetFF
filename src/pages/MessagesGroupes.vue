<template>
    <HeaderPage />

      <div class="flex mt-24 lg:mt-12 lg:ml-32 justify-center gap-20 lg:text-2xl font-semibold text-white">
           <RouterLink to="/messages"><p>Amis</p></RouterLink>
          <p class="underline underline-offset-8">Groupes</p>
        </div>

    <CardMessagesVue />

    <Footerpage />
</template>

<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue';
import Footerpage from '@/components/Footerpage.vue';
import CardMessagesVue from '@/components/Cards/CardMessages.vue';
</script>
