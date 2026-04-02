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
        <tr id="trLoginIP">
          <td class="text-right">
            <label
              id="lblLoginLogNumber"
              name="lblLoginLogNumber"
              class="col-form-label text-right"
              style="width: 90px"
              >LoginLogNumber
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLoginLogNumber"
              name="txtLoginLogNumber"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblLoginIP"
              name="lblLoginIP"
              class="col-form-label text-right"
              style="width: 90px"
              >LoginIP
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLoginIP"
              name="txtLoginIP"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trLoginResult">
          <td class="text-right">
            <label
              id="lblFailReason"
              name="lblFailReason"
              class="col-form-label text-right"
              style="width: 90px"
              >FailReason
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFailReason"
              name="txtFailReason"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblLoginResult"
              name="lblLoginResult"
              class="col-form-label text-right"
              style="width: 90px"
              >LoginResult
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLoginResult"
              name="txtLoginResult"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trLoginUserId">
          <td class="text-right">
            <label
              id="lblLoginTime"
              name="lblLoginTime"
              class="col-form-label text-right"
              style="width: 90px"
              >LoginTime
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLoginTime"
              name="txtLoginTime"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblLoginUserId"
              name="lblLoginUserId"
              class="col-form-label text-right"
              style="width: 90px"
              >LoginUserId
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLoginUserId"
              name="txtLoginUserId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trOutTime">
          <td class="text-right">
            <label
              id="lblOnlineTime"
              name="lblOnlineTime"
              class="col-form-label text-right"
              style="width: 90px"
              >OnlineTime
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtOnlineTime"
              name="txtOnlineTime"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblOutTime"
              name="lblOutTime"
              class="col-form-label text-right"
              style="width: 90px"
              >OutTime
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtOutTime"
              name="txtOutTime"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trMemo">
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
      <el-button id="btnCancelLoginLog" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitLoginLog"
        type="primary"
        @click="btnLoginLog_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { LoginLogCRUDEx } from '@/viewsShare/LogManage/LoginLogCRUDEx';
  import { LoginLog_EditEx } from '@/viewsShare/LogManage/LoginLog_EditEx';
  export default defineComponent({
    name: 'LoginLogEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('登录日志编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelLoginLog':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitLoginLog':
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
          case 'btnCancelLoginLog':
            return strCancelButtonText.value;
          case 'btnSubmitLoginLog':
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
        //LoginLog_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnLoginLog_Edit_Click(strCommandName: string, strKeyId: string) {
        LoginLog_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_LoginLog(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new LoginLog_EditEx('', new LoginLogCRUDEx());
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
