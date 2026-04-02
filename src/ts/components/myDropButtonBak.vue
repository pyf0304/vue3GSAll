<!-- <template>
  <a-dropdown-button @click="handleButtonClick" :disabled="visible">
    OrderGroup
    <a-menu slot="overlay" v-model:visible="visible">
      <a-menu-item
        v-for="button in buttons"
        :key="button.key"
        @click="handleButtonClick(button.key)"
      >
        {{ button.label }}
      </a-menu-item>
    </a-menu>
  </a-dropdown-button>
</template> -->
<template>
  <a-dropdown-button :disabled="visible" @click="handleButtonClick">
    {{ title }}
    <template #overlay>
      <a-menu v-model:visible="visible">
        <a-menu-item
          v-for="button in buttons"
          :key="button.keyId"
          @click="handleButtonClick(button.keyId)"
        >
          {{ button.text }}
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown-button>
</template>
<script lang="ts">
  import { ref, onMounted } from 'vue';
  import { clsBtnItem } from '@/ts/PubFun/clsBtnItem';

  export default {
    name: 'MyDropButton',
    // components: {
    //   ADropdownButton, // Use the correct component name here
    //   AMenu,
    //   AMenuItem,
    // },
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
    },
    emits: ['on-button-click'],

    setup(props, { emit }) {
      // const buttons = ref([
      //   { key: 'button1', label: '按钮1' },
      //   { key: 'button2', label: '按钮2' },
      //   { key: 'button3', label: '按钮3' },
      // ]);

      const visible = ref(props.isVisible);

      const handleButtonClick = (key: string) => {
        emit('on-button-click', {
          keyId: key,
          content: '按钮单击事件',
        });
        // // 根据点击的按钮选项执行相应的操作
        // if (key === 'button1') {
        //   // 处理按钮1的点击操作
        //   // ...
        //   alert('button1');
        // } else if (key === 'button2') {
        //   // 处理按钮2的点击操作
        //   // ...
        //   alert('button2');
        // } else if (key === 'button3') {
        //   // 处理按钮3的点击操作
        //   // ...
        //   alert('button3');
        // }

        // 切换按钮的显示和隐藏
        // visible.value = !visible.value;
      };
      onMounted(() => {
        console.log('props.buttons:', props.buttons);
      });
      return {
        visible,
        handleButtonClick,
      };
    },
  };
</script>
<style scoped>
  .dropdown-btn {
    display: none; /* 初始状态隐藏按钮 */
  }

  a-dropdown[aria-expanded='true'] .dropdown-btn {
    display: inline-block; /* 下拉展开后显示按钮 */
  }
</style>
