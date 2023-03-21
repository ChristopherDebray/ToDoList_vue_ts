<template>
  <div class="twoRowLayout">
    <section>
      <slot name="upperRow"></slot>
    </section>
    <section>
      <slot name="lowerRow"></slot>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.twoRowLayout {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.twoRowLayout > section {
  width: 100%;
  margin: 1.5rem 0;
  background-color: rgba(212, 212, 212, 0.211);
}
</style>
