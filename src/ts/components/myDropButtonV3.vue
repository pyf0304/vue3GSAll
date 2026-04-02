<template>
  <a-dropdown-button :disabled="visible">
    {{ title }}
    <template #overlay>
      <a-menu v-model:visible="visible">
        <a-menu-item
          v-for="button in buttons"
          :key="button.keyId"
          @click="handleButtonClick(button.keyId, inputValue)"
        >
          <hr v-if="button.type === 'hr'" />
          <template v-else-if="button.type === 'btntext'">
            <!-- Check if it's the specific button with the text input -->
            <a-input
              id="txtInput"
              ref="textInputRef"
              v-model="inputValue"
              style="width: 50px"
              @click.stop
            />
            {{ button.text }}
          </template>
          <template v-else>
            {{ button.text }}
          </template>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown-button>
</template>
<script lang="ts">
  import { ref, onMounted, reactive } from 'vue';
  import { clsBtnItem } from '@/ts/PubFun/clsBtnItem';

  // import { ADropdownButton, AMenu, AMenuItem } from 'ant-design-vue';
  export default {
    name: 'MyDropButtonV3',
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
      const inputValue = ref('');
      const visible = ref(props.isVisible);
      // const textInputRef = ref<HTMLInputElement | null>(null);
      // const textInputRef = ref([] as HTMLInputElement[]);
      // const textInputRef = reactive([] as Array<HTMLElement>); // Store the references to the input elements
      const textInputRef = reactive([] as Array<any>);
      const handleButtonClick = (key: string, inputText0: string) => {
        // console.error(key, inputText0, 'inputValue:', inputValue);
        // Access the input element using ref and its ID
        let inputText1 = '';
        textInputRef.forEach((inputElement) => {
          if (inputElement.input.value != '') inputText1 = inputElement.input.value;
          console.log('Input text:', inputText1);
        });

        emit('on-button-click', {
          keyId: key,
          inputText: inputText1,
          content: '按钮单击事件',
        });
        if (inputText0 == '') {
          console.log('输入值为空！', inputText0);
        } else {
          console.log('输入值不为空:', inputText0);
        }
        // 切换按钮的显示和隐藏
        // visible.value = !visible.value;
      };
      onMounted(() => {
        console.log('props.buttons:', props.buttons);
      });
      return {
        visible,
        inputValue,
        handleButtonClick,
        textInputRef,
      };
    },
  };
</script>
<style>
  .dropdown-btn {
    display: none; /* 初始状态隐藏按钮 */
  }

  a-dropdown[aria-expanded='true'] .dropdown-btn {
    display: inline-block; /* 下拉展开后显示按钮 */
  }
</style>
