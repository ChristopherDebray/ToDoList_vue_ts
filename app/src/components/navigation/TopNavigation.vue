<template>
  <nav>
    <ul>
      <li><router-link to="/">Homepage</router-link></li>
      <li><router-link to="/todolistColumn">Todo list column</router-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
nav ul {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
}
nav ul li a {
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  color: black;
}
nav ul li a:hover {
  color: white;
  background-color: black;
}
</style>