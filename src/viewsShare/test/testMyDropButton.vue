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
  <!-- <a-dropdown-button :disabled="visible" @click="handleButtonClick">
    OrderGroup
    <template #overlay>
      <a-menu v-model:visible="visible">
        <a-menu-item
          v-for="button in buttons"
          :key="button.key"
          @click="handleButtonClick(button.key)"
        >
          {{ button.label }}
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown-button> -->
  <div>
    <p>Received Parameter: {{ $route.query.param1 }}</p>
    <p>Received Parameter2: {{ $route.query.param2 }}</p>
    <MyDropButton
      :buttons="buttons"
      :is-visible="visible"
      :title="myTitle1"
      :is-replace-title="true"
      @on-button-click="handleButtonClick"
    ></MyDropButton>
    <MyDropButton
      :buttons="buttons"
      :is-visible="visible"
      :title="myTitle1"
      :is-replace-title="false"
      @on-button-click="handleButtonClick"
    ></MyDropButton>
  </div>
</template>
<script lang="ts">
  import { ref } from 'vue';

  import MyDropButton from '@/ts/components/myDropButton.vue';
  import { clsBtnItem } from '@/ts/PubFun/clsBtnItem';
  export default {
    name: 'TestMyDropButton',
    components: {
      MyDropButton, // Use the correct component name here
    },
    setup() {
      const buttons: Array<clsBtnItem> = [
        { type: 'btn', keyId: 'button1', text: '添加按钮1', title: '' },
        { type: 'btn', keyId: 'button2', text: '删除按钮2222', title: '' },
        { type: 'btn', keyId: 'button3', text: '修改按钮3', title: '' },
      ];

      const visible = ref(true);
      const myTitle1 = ref('排序');
      const handleButtonClick = (data: any) => {
        const strKeyId = data.keyId;
        const objButton = buttons.find((x) => x.keyId == strKeyId);
        if (objButton == null) return;
        // 根据点击的按钮选项执行相应的操作
        if (strKeyId === 'button1') {
          // 处理按钮1的点击操作
          // ...
          alert('button1');
        } else if (strKeyId === 'button2') {
          // 处理按钮2的点击操作
          // ...
          alert(objButton.keyId + objButton.text);
        } else if (strKeyId === 'button3') {
          // 处理按钮3的点击操作
          // ...
          alert('button3');
        }

        // 切换按钮的显示和隐藏
        // visible.value = !visible.value;
      };

      return {
        buttons,
        visible,
        myTitle1,
        handleButtonClick,
      };
    },
  };
</script>

<style scoped>
  /* 样式直接放在 Vue 文件中 */
</style>
