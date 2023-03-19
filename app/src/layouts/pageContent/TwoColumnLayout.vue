<template>
  <MainPageContentLayout>
    <template v-slot:title></template>
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
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.twoColumnLayout > section {
  width: 500px;
  min-height: 700px;
}
</style>
