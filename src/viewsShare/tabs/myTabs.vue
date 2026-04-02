<template>
  <div>
    <ul class="tabs">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab.label }}
      </li>
    </ul>

    <component :is="currentTabComponent" />
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  import Tab1 from '@/viewsShare/tabs/Tab1.vue';
  import Tab2 from '@/viewsShare/tabs/Tab2.vue';
  //  import Tab3 from '@/components/tabs/Tab3.vue';
  import Tab3 from '@/viewsShare/tabs/Tab3.vue';

  export default defineComponent({
    components: {
      Tab1,
      Tab2,
      Tab3,
    },
    setup() {
      const tabs = [
        { label: 'Tab 1', component: Tab1 },
        { label: '页面2', component: Tab2 },
        { label: 'Tab 3', component: Tab3 },
      ];

      const activeTab = ref(0);

      const currentTabComponent = computed(() => {
        return tabs[activeTab.value].component;
      });

      return {
        tabs,
        activeTab,
        currentTabComponent,
      };
    },
  });
</script>

<style scoped>
  .tabs-container {
    display: flex;
    flex-direction: row;
  }

  .tabs {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tabs li {
    cursor: pointer;
    padding: 10px 20px;
    background-color: #eee;
  }

  .tabs li.active {
    font-weight: bold;
    background-color: #ccc;
  }

  .tab-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #f0f0f0;
  }
</style>
