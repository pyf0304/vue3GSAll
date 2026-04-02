<template>
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
    <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
      <!-- 详细信息层 -->

      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <span
              id="spnLoginLogNumber_d"
              name="spnLoginLogNumber_d"
              CssClass="col-form-label text-right"
              >LoginLogNumber</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblLoginLogNumber_d"
              name="lblLoginLogNumber_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnLoginIP_d" name="spnLoginIP_d" CssClass="col-form-label text-right"
              >LoginIP</span
            >
          </td>
          <td class="text-left">
            <label id="lblLoginIP_d" name="lblLoginIP_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnFailReason_d" name="spnFailReason_d" CssClass="col-form-label text-right"
              >FailReason</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblFailReason_d"
              name="lblFailReason_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnLoginResult_d" name="spnLoginResult_d" CssClass="col-form-label text-right"
              >LoginResult</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblLoginResult_d"
              name="lblLoginResult_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnLoginTime_d" name="spnLoginTime_d" CssClass="col-form-label text-right"
              >LoginTime</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblLoginTime_d"
              name="lblLoginTime_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnLoginUserId_d" name="spnLoginUserId_d" CssClass="col-form-label text-right"
              >LoginUserId</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblLoginUserId_d"
              name="lblLoginUserId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnOnlineTime_d" name="spnOnlineTime_d" CssClass="col-form-label text-right"
              >OnlineTime</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblOnlineTime_d"
              name="lblOnlineTime_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnOutTime_d" name="spnOutTime_d" CssClass="col-form-label text-right"
              >OutTime</span
            >
          </td>
          <td class="text-left">
            <label id="lblOutTime_d" name="lblOutTime_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">备注</span>
          </td>
          <td class="text-left">
            <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelLoginLog" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { LoginLog_DetailEx } from '@/viewsShare/LogManage/LoginLog_DetailEx';
  export default defineComponent({
    name: 'LoginLogDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('登录日志详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelLoginLog':
            strCancelButtonText.value = strNewValue;
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
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        hideDialog,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
      };
    },

    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
      },

      /**
       *按钮单击,用于调用Js函数中btnDetail_Click
       *(AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_JS_btnDetail_Click)
       **/
      btnLoginLog_Detail_Click(strCommandName: string, strKeyId: string) {
        // LoginLog_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
