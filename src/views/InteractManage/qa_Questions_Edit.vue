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
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trQuestionsContent">
          <td class="text-right">
            <label
              id="lblQuestionsContent"
              name="lblQuestionsContent"
              class="col-form-label text-right"
              style="width: 90px"
              >提问内容
            </label>
          </td>
          <td class="text-left">
            <select id="ddlQuestionsContent" @change="onQuestionsContentChange($event)"></select>
            <textarea
              id="txtQuestionsContent"
              ref="txtQuestionsContentRef"
              placeholder="问题内容"
              class="layui-input"
              style="width: 100%; height: 150px"
            ></textarea>
          </td>
        </tr>
        <tr style="display: none">
          <td colspan="2">
            <button
              type="button"
              class="layui-btn layui-btn-sm layui-btn-radius layui-btn-normal"
              @click="InviteOthers_Click(1)"
            >
              <font-awesome-icon icon="user-plus" />邀请其他人来回答
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;<input
              id="chkIsRequestReply"
              type="checkbox"
              name="chkIsRequestReply"
              Text="是否要求回复"
            />要求回复
          </td>
        </tr>
        <!-- <tr id="trPdfContent">
          <td class="text-right">
            <label
              id="lblPdfContent"
              name="lblPdfContent"
              class="col-form-label text-right"
              style="width: 90px"
              >Pdf内容
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPdfContent"
              name="txtPdfContent"
              class="form-control form-control-sm"
              style="width: 450px"
            />
          </td>
        </tr>
        <tr id="trPdfPageNum">
          <td class="text-right">
            <label
              id="lblPdfPageNum"
              name="lblPdfPageNum"
              class="col-form-label text-right"
              style="width: 90px"
              >Pdf页码
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPdfPageNum"
              name="txtPdfPageNum"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trOrderNum">
          <td class="text-right">
            <label
              id="lblOrderNum"
              name="lblOrderNum"
              class="col-form-label text-right"
              style="width: 90px"
              >序号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtOrderNum"
              name="txtOrderNum"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr> -->
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >备注
            </label>
          </td>
          <td class="text-left">
            <textarea
              id="txtMemo"
              placeholder="备注"
              class="layui-input"
              style="width: 100%; height: 100px"
            ></textarea>
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
      <input id="txtQuestionsId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelqa_Questions" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitqa_Questions"
        type="primary"
        @click="btnqa_Questions_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { qa_QuestionsCRUDEx } from '@/views/InteractManage/qa_QuestionsCRUDEx';
  import { qa_Questions_EditEx } from '@/views/InteractManage/qa_Questions_EditEx';

  export default defineComponent({
    name: 'QaQuestionsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('答疑提问表编辑');
      // const strQuestionsContent = ref('');
      const txtQuestionsContentRef = ref();
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelqa_Questions':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitqa_Questions':
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
          case 'btnCancelqa_Questions':
            return strCancelButtonText.value;
          case 'btnSubmitqa_Questions':
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
      //邀请其他同学回答
      function InviteOthers_Click(key: number) {
        $('#hidInviteKey').val(key);
        //message.info('hi，功能还在搭建中....');

        // const objPage = new Question_QA();
        // objPage.InviteOthers_Click();

        //atOthers();
      }
      function onQuestionsContentChange(event: any) {
        console.log(event);
        if (txtQuestionsContentRef.value.value == '') {
          const selectedOption = event.target.options[event.target.selectedIndex];
          const selectedOptionText = selectedOption.textContent;
          txtQuestionsContentRef.value.value = selectedOptionText;
        }
      }
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
        InviteOthers_Click,
        txtQuestionsContentRef,
        onQuestionsContentChange,
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
        //qa_Questions_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnqa_Questions_Edit_Click(strCommandName: string, strKeyId: string) {
        qa_Questions_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_qa_Questions(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new qa_Questions_EditEx(new qa_QuestionsCRUDEx());
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
