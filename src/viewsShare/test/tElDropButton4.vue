<template>
  <div class="dropdown-container">
    <button class="dropdown-btn" @click="toggleDropdown">下拉按钮</button>
    <div class="dropdown-content" :style="{ display: isDropdownOpen ? 'block' : 'none' }">
      <span
        class="dropdown-item"
        v-for="button in buttons"
        :key="button.keyId"
        @click="handleItemClick(button.text)"
        >{{ button.text }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
  import { clsBtnItem } from '@/ts/PubFun/clsBtnItem';
  import { ref } from 'vue';

  export default {
    setup() {
      const isDropdownOpen = ref(false);

      // const buttons: clsBtnItem[] = [
      //   { id: 1, label: 'Option 1' },
      //   { id: 2, label: 'Option 2' },
      //   { id: 3, label: 'Option 3' },
      // ];
      const buttons: Array<clsBtnItem> = [
        { type: 'btn', keyId: 'button1', text: '添加按钮1', title: '' },
        { type: 'btn', keyId: 'button2', text: '删除按钮2222', title: '' },
        { type: 'btn', keyId: 'button3', text: '修改按钮3', title: '' },
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
