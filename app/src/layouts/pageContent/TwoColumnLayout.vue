<template>
  <MainPageContentLayout>
    <template v-slot:title>Two column todo list</template>
    <template v-slot:content>
      <div class="twoColumnLayout">
        <section>
          <slot name="leftColumn"></slot>
        </section>
        <section>
          <slot name="rightColumn"></slot>
        </section>
      </div>
    </template>
  </MainPageContentLayout>
</template>

<script setup lang="ts">
import MainPageContentLayout from "@/layouts/pageContent/MainPageContentLayout.vue";
</script>

<style scoped>
.twoColumnLayout {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
.twoColumnLayout > section {
  min-width: 450px;
  min-height: 200px;
  margin: 1.5rem 0;
  background-color: rgba(212, 212, 212, 0.211);
}
</style>
