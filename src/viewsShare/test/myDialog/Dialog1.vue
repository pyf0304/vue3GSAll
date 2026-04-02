<template>
  <div>
    <button @click="openModal">打开弹出窗口</button>
    <custom-modal ref="customModal"></custom-modal>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import CustomModal from './CustomModalV2.vue'; // 引入自定义弹出框组件
  export default defineComponent({
    name: 'Dialog1',
    components: {
      CustomModal,
    },
    setup() {
      const customModal = ref();
      const UserId = ref('0001');
      const UserName = ref('pyf');
      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      function openModal() {
        customModal.value.showDialog(); // 通过组件引用调用打开方法
      }
      return {
        getUser,
        UserId,
        UserName,
        customModal,
        openModal,
      };
    },
    methods: {
      openModal2() {
        // this.$refs.customModal.openModal(); // 通过组件引用调用打开方法
      },
    },
  });
</script>
<style scoped></style>
