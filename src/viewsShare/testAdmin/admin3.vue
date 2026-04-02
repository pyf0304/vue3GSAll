<template>
  <div class="app-container">
    <!-- 标题区域 -->
    <header>
      <h1>{{ pageTitle }}</h1>
    </header>

    <!-- 主体内容 -->
    <div class="main-content">
      <!-- 左侧菜单 -->
      <aside class="sidebar">
        <ul>
          <li @click="changeTab('Home')">Home</li>
          <li @click="changeTab('about')">About</li>
          <li @click="changeTab('about2')">About2</li>
          <!-- 其他菜单项 -->
        </ul>
      </aside>

      <!-- 右侧内容区域 -->
      <main class="content">
        <el-tabs v-model="currentTab" type="card">
          <el-tab-pane label="Home" name="Home">
            <!-- Home 页面内容 -->
            <div>Home Page Content</div>
          </el-tab-pane>
          <el-tab-pane label="about" name="about">
            <!-- About 页面内容 -->
            <div>About Page Content</div>
          </el-tab-pane>
          <el-tab-pane label="about2" name="about2">
            <!-- About 页面内容 -->
            <div>About2 Page Content</div>
          </el-tab-pane>
          <!-- 其他页面 -->
        </el-tabs>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  // 页面标题
  const pageTitle = ref('Your Page Title');

  // 当前选中的页面标签
  const currentTab = ref('Home'); // 默认选择 Home 页面

  // 切换选项卡
  const changeTab = (tabName: string) => {
    currentTab.value = tabName;
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

  .content {
    flex: 1;
    padding: 20px;
  }
</style>
