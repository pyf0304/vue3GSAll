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
        <tr id="trMessagePushNumber">
          <td class="text-right">
            <label
              id="lblMessagePushId"
              name="lblMessagePushId"
              class="col-form-label text-right"
              style="width: 90px"
              >消息Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMessagePushId"
              name="txtMessagePushId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblMessagePushNumber"
              name="lblMessagePushNumber"
              class="col-form-label text-right"
              style="width: 90px"
              >消息编号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMessagePushNumber"
              name="txtMessagePushNumber"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trMessageContent">
          <td class="text-right">
            <label
              id="lblMessageTitle"
              name="lblMessageTitle"
              class="col-form-label text-right"
              style="width: 90px"
              >消息标题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMessageTitle"
              name="txtMessageTitle"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblMessageContent"
              name="lblMessageContent"
              class="col-form-label text-right"
              style="width: 90px"
              >消息内容
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMessageContent"
              name="txtMessageContent"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trMessageTypeId">
          <td class="text-right">
            <label
              id="lblReceivePeople"
              name="lblReceivePeople"
              class="col-form-label text-right"
              style="width: 90px"
              >接收人员
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtReceivePeople"
              name="txtReceivePeople"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblMessageTypeId"
              name="lblMessageTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >消息类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMessageTypeId"
              name="txtMessageTypeId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIsReceive">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsAllpush"
                name="chkIsAllpush"
                type="checkbox"
                Text="是否全体推送"
              /><label for="chkIsAllpush">是否全体推送</label></span
            >
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
              id="lblClientVersionTypeId"
              name="lblClientVersionTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >客户端版本类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtClientVersionTypeId"
              name="txtClientVersionTypeId"
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
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelMessagePush" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitMessagePush"
        type="primary"
        @click="btnMessagePush_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { MessagePushCRUDEx } from '@/views/NewsAnn/MessagePushCRUDEx';
  import { MessagePush_EditEx } from '@/views/NewsAnn/MessagePush_EditEx';
  export default defineComponent({
    name: 'MessagePushEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('消息推送编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelMessagePush':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitMessagePush':
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
          case 'btnCancelMessagePush':
            return strCancelButtonText.value;
          case 'btnSubmitMessagePush':
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
        //MessagePush_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnMessagePush_Edit_Click(strCommandName: string, strKeyId: string) {
        MessagePush_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_MessagePush(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new MessagePush_EditEx(new MessagePushCRUDEx());
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
