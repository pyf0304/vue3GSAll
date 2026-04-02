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
              id="spnMessagePushId_d"
              name="spnMessagePushId_d"
              CssClass="col-form-label text-right"
              >消息Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblMessagePushId_d"
              name="lblMessagePushId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnMessagePushNumber_d"
              name="spnMessagePushNumber_d"
              CssClass="col-form-label text-right"
              >消息编号</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblMessagePushNumber_d"
              name="lblMessagePushNumber_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnMessageTitle_d"
              name="spnMessageTitle_d"
              CssClass="col-form-label text-right"
              >消息标题</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblMessageTitle_d"
              name="lblMessageTitle_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnMessageContent_d"
              name="spnMessageContent_d"
              CssClass="col-form-label text-right"
              >消息内容</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblMessageContent_d"
              name="lblMessageContent_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnReceivePeople_d"
              name="spnReceivePeople_d"
              CssClass="col-form-label text-right"
              >接收人员</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblReceivePeople_d"
              name="lblReceivePeople_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnMessageTypeId_d"
              name="spnMessageTypeId_d"
              CssClass="col-form-label text-right"
              >消息类型Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblMessageTypeId_d"
              name="lblMessageTypeId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnIsAllpush_d" name="spnIsAllpush_d" CssClass="col-form-label text-right"
              >是否全体推送</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblIsAllpush_d"
              name="lblIsAllpush_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnIsReceive_d" name="spnIsReceive_d" CssClass="col-form-label text-right"
              >是否接收</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblIsReceive_d"
              name="lblIsReceive_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnClientVersionTypeId_d"
              name="spnClientVersionTypeId_d"
              CssClass="col-form-label text-right"
              >客户端版本类型Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblClientVersionTypeId_d"
              name="lblClientVersionTypeId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
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
      <el-button id="btnCancelMessagePush" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { MessagePush_DetailEx } from '@/views/NewsAnn/MessagePush_DetailEx';
  export default defineComponent({
    name: 'MessagePushDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('消息推送详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelMessagePush':
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
          case 'btnCancelMessagePush':
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
      btnMessagePush_Detail_Click(strCommandName: string, strKeyId: string) {
        MessagePush_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
