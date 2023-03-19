<template>
  <form action="">
    <input type="text" v-model="task" />
    <button @click.prevent="onSubmit">Enregistrer</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
const task = ref("");

function onSubmit() {
  console.log("Submitted");
}
</script>

<style></style>
