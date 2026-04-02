<template>
  <div class="dropdown-button-container">
    <el-dropdown>
      <el-button type="primary">下拉按钮</el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click="handleItemClick('Option 1')">Option 1</el-dropdown-item>
        <el-dropdown-item @click="handleItemClick('Option 2')">Option 2</el-dropdown-item>
        <el-dropdown-item @click="handleItemClick('Option 3')">Option 3</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
  import { ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus';

  export default {
    components: {
      ElButton,
      ElDropdown,
      ElDropdownItem,
      ElDropdownMenu,
    },
    methods: {
      handleItemClick(item: any) {
        console.log('Clicked:', item);
        // 在这里可以处理点击选项后的逻辑
      },
    },
  };
</script>

<style>
  /* 样式直接放在 Vue 文件中 */
  .dropdown-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  @import url('https://cdn.jsdelivr.net/npm/element-plus/lib/theme-chalk/index.css');
</style>
