<template>
  <div>
    <header>
      <slot name="pageHeader"><h1>Page header</h1></slot>
      <slot name="pageHeaderNavigation">
        <nav>
          <ul>
            <li>Lien 1</li>
            <li>Lien 2</li>
            <li>Lien 3</li>
          </ul>
        </nav>
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

<script setup lang="ts"></script>

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
header nav ul {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
}
header nav ul li {
  padding: 10px 20px;
  cursor: pointer;
}
header nav ul li:hover {
  color: white;
  background-color: black;
}

.content {
  margin: 0 15%;
}
</style>
