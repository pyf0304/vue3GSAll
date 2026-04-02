<template>
  <div class="app-container">
    <header>
      <h1>{{ pageTitle }}</h1>
    </header>

    <div class="main-content">
      <aside class="sidebar">
        <ul>
          <li v-for="(module, index) in menu" :key="index">
            {{ module.name }}
            <ul>
              <li v-for="(feature, idx) in module.features" :key="idx" @click="changeTab(feature)">
                {{ feature }}
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      <main class="content">
        <!-- 右侧内容区域，使用 Tabs 或其他组件显示不同的功能页面 -->
        <div v-if="selectedTab === 'Home'">Home Page Content</div>
        <div v-if="selectedTab === 'about'">About Page Content</div>
        <div v-if="selectedTab === 'about2'">About2 Page Content</div>
        <!-- 其他页面内容 -->
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  // 页面标题
  const pageTitle = ref('Your Page Title');

  // 选中的页面标签
  const selectedTab = ref('Home'); // 默认选择 Home 页面

  // 菜单数据
  const menu = ref([
    {
      name: 'Module A',
      features: ['about', 'about2', 'Feature 3'],
    },
    {
      name: 'Module B',
      features: ['Feature 4', 'Feature 5', 'Feature 6'],
    },
  ]);

  // 切换选项卡
  const changeTab = (tabName: string) => {
    selectedTab.value = tabName;
  };
</script>

<style>
  /* 样式可以根据需求进行修改 */
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  header {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
  }

  .main-content {
    display: flex;
    flex: 1;
  }

  .sidebar {
    background-color: #f0f0f0;
    width: 200px;
    padding: 20px;
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
  }

  .sidebar li {
    margin-bottom: 10px;
  }

  .sidebar ul > li > ul > li {
    margin-left: 10px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    padding: 20px;
  }
</style>
