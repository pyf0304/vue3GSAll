<template>
  <div class="dropdown-container" style="z-index: 999">
    <button class="dropdown-btn2" @click="toggleDropdown"
      >{{ btnLabel }} <font-awesome-icon :icon="['fas', 'caret-down']"
    /></button>
    <div class="dropdown-content" :style="{ display: isDropdownOpen ? 'block' : 'none' }">
      <span
        class="dropdown-item"
        v-for="button in buttons"
        :key="button.keyId"
        @click="handleItemClick(button.keyId, button.text)"
        >{{ button.text }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
  import { clsBtnItem } from '@/ts/PubFun/clsBtnItem';
  import { onMounted, ref } from 'vue';

  export default {
    name: 'MyDropButton',
    props: {
      title: {
        type: String,
        required: true,
        default: '按钮列表',
      },
      buttons: {
        type: Array<clsBtnItem>,
        required: true,
      },
      isVisible: {
        type: Boolean,
        required: true,
        default: true,
      },
      isReplaceTitle: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    emits: ['on-button-click'],

    setup(props, { emit }) {
      const isDropdownOpen = ref(false);
      const visible = ref(props.isVisible);
      const btnLabel = ref(props.title);
      onMounted(() => {
        if (props.isReplaceTitle == true && props.buttons.length > 0) {
          btnLabel.value = props.buttons[0].text;
        }
      });
      // const buttons: clsBtnItem[] = [
      //   { id: 1, label: 'Option 1' },
      //   { id: 2, label: 'Option 2' },
      //   { id: 3, label: 'Option 3' },
      // ];
      const buttonsBak: Array<clsBtnItem> = [
        { type: 'btn', keyId: 'button1', text: '添加按钮1111', title: '' },
        { type: 'btn', keyId: 'button2', text: '删除按钮2222', title: '' },
        { type: 'btn', keyId: 'button3', text: '修改按钮3333', title: '' },
      ];
      function toggleDropdown() {
        isDropdownOpen.value = !isDropdownOpen.value;
      }
      function myFun1() {
        alert('myFun1');
      }
      function SetTitle(strTitle: string) {
        // visible.value = true;
        btnLabel.value = strTitle;
      }
      function handleItemClick(keyId: string, text: string) {
        console.log('Clicked:', text);
        if (props.isReplaceTitle == true) {
          btnLabel.value = text;
        }
        isDropdownOpen.value = false;
        emit('on-button-click', {
          keyId: keyId,
          inputText: text,
          content: '按钮单击事件',
        });
        // 处理点击选项后的逻辑
      }

      return {
        isDropdownOpen,
        toggleDropdown,
        handleItemClick,
        buttonsBak,
        visible,
        btnLabel,
        myFun1,
        SetTitle,
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
  .dropdown-btn2 {
    padding: 1px 2px;
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
