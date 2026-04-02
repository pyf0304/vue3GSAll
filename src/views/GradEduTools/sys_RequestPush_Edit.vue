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
        <tr id="trTableKey">
          <td class="text-right">
            <label
              id="lblRequesTypeId"
              name="lblRequesTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >请求类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRequesTypeId"
              name="txtRequesTypeId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblTableKey"
              name="lblTableKey"
              class="col-form-label text-right"
              style="width: 90px"
              >表主键
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTableKey"
              name="txtTableKey"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIsReply">
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
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsReply" name="chkIsReply" type="checkbox" Text="是否回复" /><label
                for="chkIsReply"
                >是否回复</label
              ></span
            >
          </td>
        </tr>
        <tr id="trRequestUser">
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
          <td class="text-right">
            <label
              id="lblRequestUser"
              name="lblRequestUser"
              class="col-form-label text-right"
              style="width: 90px"
              >RequestUser
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRequestUser"
              name="txtRequestUser"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trRequestStata">
          <td class="text-right">
            <label
              id="lblRequestDate"
              name="lblRequestDate"
              class="col-form-label text-right"
              style="width: 90px"
              >RequestDate
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRequestDate"
              name="txtRequestDate"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblRequestStata"
              name="lblRequestStata"
              class="col-form-label text-right"
              style="width: 90px"
              >RequestStata
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRequestStata"
              name="txtRequestStata"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIdCurrEduCls">
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
        </tr>
        <tr id="trPushTypeId">
          <td class="text-right">
            <label
              id="lblPushTypeId"
              name="lblPushTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >推送类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPushTypeId"
              name="txtPushTypeId"
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
      <el-button id="btnCancelsys_RequestPush" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitsys_RequestPush"
        type="primary"
        @click="btnsys_RequestPush_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { sys_RequestPushCRUDEx } from '@/views/GradEduTools/sys_RequestPushCRUDEx';
  import { sys_RequestPush_EditEx } from '@/views/GradEduTools/sys_RequestPush_EditEx';
  export default defineComponent({
    name: 'SysRequestPushEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('请求推送表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelsys_RequestPush':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitsys_RequestPush':
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
          case 'btnCancelsys_RequestPush':
            return strCancelButtonText.value;
          case 'btnSubmitsys_RequestPush':
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
        //sys_RequestPush_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnsys_RequestPush_Edit_Click(strCommandName: string, strKeyId: string) {
        sys_RequestPush_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_sys_RequestPush(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new sys_RequestPush_EditEx(new sys_RequestPushCRUDEx());
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
