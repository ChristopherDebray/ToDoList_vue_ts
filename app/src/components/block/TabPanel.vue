<template>
  <div>
    <nav>
      <ul>
        <li
          v-for="(_, tab) in tabs"
          :key="tab"
          :class="['tab-button', { active: currentTab === tab }]"
          @click="currentTab = tab"
        >
          {{ tab }}
        </li>
      </ul>
    </nav>
    <div>
      <KeepAlive v-if="keepalive">
        <component :is="tabs[currentTab]" class="tab"></component>
      </KeepAlive>
      <component :is="tabs[currentTab]" class="tab" v-else></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, PropType } from "vue";

interface ITab {
  [key: string]: object;
}

const props = defineProps({
  tabs: {
    type: Object as PropType<ITab>,
    required: true,
  },
  keepalive: {
    type: Boolean,
    default: false,
  },
});

const firstTab = Object.keys(props.tabs)[0];
const currentTab = ref(firstTab);
</script>

<style scoped>
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  cursor: pointer;
  display: inline-block;
}

.tab-button {
  padding: 6px 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
