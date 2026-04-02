<template>
  <div class="dropdown-button-container">
    <el-dropdown>
      <el-button type="primary">下拉按钮2</el-button>
      <el-dropdown-menu
        slot="dropdown"
        v-show="isDropdownVisible"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <el-dropdown-item @click="handleItemClick('Option 1')">Option 1</el-dropdown-item>
        <el-dropdown-item @click="handleItemClick('Option 2')">Option 2</el-dropdown-item>
        <el-dropdown-item @click="handleItemClick('Option 3')">Option 3</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus';

  export default {
    components: {
      ElButton,
      ElDropdown,
      ElDropdownItem,
      ElDropdownMenu,
    },
    setup() {
      const isDropdownVisible = ref(false);

      function handleMouseEnter() {
        isDropdownVisible.value = true;
      }

      function handleMouseLeave() {
        isDropdownVisible.value = false;
      }

      function handleItemClick(item: any) {
        console.log('Clicked:', item);
        // 处理点击选项后的逻辑
      }

      return {
        isDropdownVisible,
        handleMouseEnter,
        handleMouseLeave,
        handleItemClick,
      };
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

  /* Additional styles to display the dropdown menu */
  .el-dropdown-menu {
    display: block !important;
    position: absolute !important;
    z-index: 9999;
    background-color: #fff;
    border: 1px solid #ccc;
    margin-top: 5px; /* Adjust as needed */
  }
  @import url('https://cdn.jsdelivr.net/npm/element-plus/lib/theme-chalk/index.css');
</style>
