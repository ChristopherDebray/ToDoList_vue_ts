<template>
  <div class="twoColumnLayout">
    <section>
      <slot name="leftColumn"></slot>
    </section>
    <section>
      <slot name="rightColumn"></slot>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

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
