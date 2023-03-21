<template>
  <MainPageContentLayout>
    <template v-slot:title>Homepage</template>
    <template v-slot:content>Content</template>
  </MainPageContentLayout>
</template>

<script setup lang="ts">
import MainPageContentLayout from '@/layouts/pageContent/MainPageContentLayout.vue';
</script>
