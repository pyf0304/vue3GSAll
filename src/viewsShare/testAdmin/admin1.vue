<template>
  <div class="app-container">
    <header>
      <h1>{{ pageTitle }}</h1>
    </header>
    <div class="content">
      <aside class="sidebar">
        <!-- 菜单内容 -->
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <!-- 其他菜单项 -->
        </ul>
      </aside>
      <main class="main-content">
        <!-- 主要内容 -->
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 页面标题
const pageTitle = ref("Your Page Title");
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

.content {
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

.main-content {
  flex: 1;
  padding: 20px;
}
</style>
