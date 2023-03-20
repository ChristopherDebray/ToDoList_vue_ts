<template>
  <div>
    <header>
      <slot name="pageHeader"><h1>Page header</h1></slot>
      <slot name="pageHeaderNavigation">
        <TopNavigation />
      </slot>
    </header>

    <main class="content">
      <slot name="pageContent">Page content</slot>
    </main>

    <footer>
      <slot name="pageFooter">Page footer</slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import TopNavigation from '@/components/navigation/TopNavigation.vue';
</script>

<style scoped>
header,
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15%;
}
header h1 {
  margin: 0;
}
.content {
  margin: 0 15%;
}
</style>
