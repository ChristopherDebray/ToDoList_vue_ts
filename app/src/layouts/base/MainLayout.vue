<template>
  <div>
    <header>
      <slot name="pageHeader">Page header</slot>
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

    <main>
      <slot name="pageContent">Page content</slot>
    </main>

    <footer>
      <slot name="pageFooter">Page footer</slot>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>
