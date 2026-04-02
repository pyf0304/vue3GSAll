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
        <tr id="trReceiveUser">
          <td class="text-right">
            <label
              id="lblQuestionsId"
              name="lblQuestionsId"
              class="col-form-label text-right"
              style="width: 90px"
              >提问Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtQuestionsId"
              name="txtQuestionsId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblReceiveUser"
              name="lblReceiveUser"
              class="col-form-label text-right"
              style="width: 90px"
              >接收用户
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtReceiveUser"
              name="txtReceiveUser"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIsReceive">
          <td class="text-right">
            <label
              id="lblReceiveDate"
              name="lblReceiveDate"
              class="col-form-label text-right"
              style="width: 90px"
              >接收日期
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtReceiveDate"
              name="txtReceiveDate"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsReceive" name="chkIsReceive" type="checkbox" Text="是否接收" /><label
                for="chkIsReceive"
                >是否接收</label
              ></span
            >
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label
              id="lblUpdDate"
              name="lblUpdDate"
              class="col-form-label text-right"
              style="width: 90px"
              >修改日期
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUpdDate"
              name="txtUpdDate"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >备注
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMemo"
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIsReply">
          <td class="text-right">
            <label
              id="lblIdCurrEduCls"
              name="lblIdCurrEduCls"
              class="col-form-label text-right"
              style="width: 90px"
              >当前教学班流水号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdCurrEduCls"
              name="ddlIdCurrEduCls"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsReply" name="chkIsReply" type="checkbox" Text="是否回复" /><label
                for="chkIsReply"
                >是否回复</label
              ></span
            >
          </td>
        </tr>
        <tr id="trReplyDate">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsRequestReply"
                name="chkIsRequestReply"
                type="checkbox"
                Text="是否要求回复"
              /><label for="chkIsRequestReply">是否要求回复</label></span
            >
          </td>
          <td class="text-right">
            <label
              id="lblReplyDate"
              name="lblReplyDate"
              class="col-form-label text-right"
              style="width: 90px"
              >回复日期
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtReplyDate"
              name="txtReplyDate"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelqa_Push" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitqa_Push"
        type="primary"
        @click="btnqa_Push_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { qa_PushCRUDEx } from '@/views/InteractManage/qa_PushCRUDEx';
  import { qa_Push_EditEx } from '@/views/InteractManage/qa_Push_EditEx';
  export default defineComponent({
    name: 'QaPushEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('答疑推送编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelqa_Push':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitqa_Push':
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
          case 'btnCancelqa_Push':
            return strCancelButtonText.value;
          case 'btnSubmitqa_Push':
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
        //qa_Push_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnqa_Push_Edit_Click(strCommandName: string, strKeyId: string) {
        qa_Push_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_qa_Push(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new qa_Push_EditEx(new qa_PushCRUDEx());
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
