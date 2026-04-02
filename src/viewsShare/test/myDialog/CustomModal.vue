<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <!-- 内容放在这里 -->
      this is my Dialog1<br />
      <button id="aa">aaa</button>
      <span class="close" @click="closeModal">&times;</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'CustomModal',

    setup() {
      const showModal = ref(false);
      const UserId = ref('0001');
      const UserName = ref('pyf');
      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      // // 打开模态框
      // function openModal() {
      //   document.getElementById('customModal').style.display = 'block';
      // }

      // // 关闭模态框
      // function closeModal() {
      //   document.getElementById('customModal').style.display = 'none';
      // }
      return {
        getUser,
        UserId,
        UserName,
        showModal,
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
      
    },
  });
</script>

<style scoped>
  /* 样式定义同上 */
  /* 弹出框样式 */
  .modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
