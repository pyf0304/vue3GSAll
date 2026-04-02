<template>
  <div class="dropdown-container">
    <button class="dropdown-btn" @click="toggleDropdown">下拉按钮</button>
    <div class="dropdown-content" :style="{ display: isDropdownOpen ? 'block' : 'none' }">
      <span class="dropdown-item" @click="handleItemClick('Option 1')">Option 1</span>
      <span class="dropdown-item" @click="handleItemClick('Option 2')">Option 2</span>
      <span class="dropdown-item" @click="handleItemClick('Option 3')">Option 3</span>
      <span
        class="dropdown-item"
        v-for="button in buttons"
        :key="button.id"
        @click="handleItemClick(button.label)"
        >{{ button.label }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue';
  interface Button {
    id: number;
    label: string;
  }
  export default {
    setup() {
      const isDropdownOpen = ref(false);

      const buttons: Button[] = [
        { id: 1, label: 'Option 1' },
        { id: 2, label: 'Option 2' },
        { id: 3, label: 'Option 3' },
      ];

      function toggleDropdown() {
        isDropdownOpen.value = !isDropdownOpen.value;
      }

      function handleItemClick(option: string) {
        console.log('Clicked:', option);
        // 处理点击选项后的逻辑
      }

      return {
        isDropdownOpen,
        toggleDropdown,
        handleItemClick,
        buttons,
      };
    },
  };
</script>

<style scoped>
  /* 样式直接放在 Vue 文件中 */
  .dropdown-container {
    position: relative;
  }

  .dropdown-btn {
    padding: 8px 16px;
    background-color: #3498db;
    color: white;
    border: none;
    cursor: pointer;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  .dropdown-item {
    display: block;
    padding: 12px 16px;
    text-decoration: none;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .dropdown-item:hover {
    background-color: #f1f1f1;
  }
</style>
