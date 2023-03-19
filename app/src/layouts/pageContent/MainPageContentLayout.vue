<template>
  <MainLayout>
    <template v-slot:pageContent>
      <header>
        <h1>
          <slot name="title"></slot>
        </h1>
      </header>
      <section>
        <slot name="content"></slot>
      </section>
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../base/MainLayout.vue';
</script>

<style scoped></style>
