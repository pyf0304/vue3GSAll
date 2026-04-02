<template>
  <div v-if="isDialogVisible" id="dialog1" class="modal">
    <div class="modal-content2">
      <span @click="closeDialog" class="close-button">&times;</span>
      <h2>弹出框标题</h2>
      <p>这是弹出框的内容。</p>
      this is my Dialog1<br />
      <button id="aa">aaa</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { getDivObjById } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'CustomModal',

    setup() {
      const showModal = ref(false);
      const isDialogVisible = ref(false);

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
        isDialogVisible,
      };
    },
    methods: {
      // openModal() {
      //   this.showModal = true;
      // },
      // closeModal() {
      //   this.showModal = false;
      // },
      showDialog() {
        this.isDialogVisible = true;
        // const dialog1 = getDivObjById('dialog1');
        // dialog1.style.display = '';
        setTimeout(() => {
          const dialog1 = getDivObjById('dialog1');
          dialog1.style.display = 'block';
        }, 100);
      },
      closeDialog() {
        this.isDialogVisible = false;
        const dialog1 = getDivObjById('dialog1');
        dialog1.style.display = 'none';
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
    z-index: 1;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    width: 400px;
  }

  .modal-content2 {
    position: absolute;
    top: 30%;
    left: 40%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    width: 400px;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
  }
</style>
