<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 200px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trAppraiseContent">
          <td class="text-right">
            <label
              id="lblAppraiseScore"
              name="lblAppraiseScore"
              class="col-form-label text-right"
              style="width: 90px"
              >打分
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtAppraiseScore"
              name="txtAppraiseScore"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblAppraiseContent"
              name="lblAppraiseContent"
              class="col-form-label text-right"
              style="width: 90px"
              >评议内容
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtAppraiseContent"
              name="txtAppraiseContent"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trMeno">
          <td class="text-right">
            <label id="lblMeno" name="lblMeno" class="col-form-label text-right" style="width: 90px"
              >备注
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMeno"
              name="txtMeno"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelPaperSubViewpointAppraise" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitPaperSubViewpointAppraise"
        type="primary"
        @click="btnPaperSubViewpointAppraise_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { PaperSubViewpointAppraiseCRUDEx } from '@/views/GradEduPaper/PaperSubViewpointAppraiseCRUDEx';
  import { PaperSubViewpointAppraise_EditEx } from '@/views/GradEduPaper/PaperSubViewpointAppraise_EditEx';
  export default defineComponent({
    name: 'PaperSubViewpointAppraiseEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('子观点评论表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPaperSubViewpointAppraise':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitPaperSubViewpointAppraise':
            strSubmitButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPaperSubViewpointAppraise':
            return strCancelButtonText.value;
          case 'btnSubmitPaperSubViewpointAppraise':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
      };
    },

    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //PaperSubViewpointAppraise_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnPaperSubViewpointAppraise_Edit_Click(strCommandName: string, strKeyId: string) {
        PaperSubViewpointAppraise_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_PaperSubViewpointAppraise(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new PaperSubViewpointAppraise_EditEx(new PaperSubViewpointAppraiseCRUDEx());
        objPage.btnSubmit_Click();
      },
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
