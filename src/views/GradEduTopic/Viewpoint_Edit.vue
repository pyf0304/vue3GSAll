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
        <tr id="trViewpointName">
          <td class="text-right">
            <label
              id="lblViewpointId"
              name="lblViewpointId"
              class="col-form-label text-right"
              style="width: 90px"
              >观点Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtViewpointId"
              name="txtViewpointId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblViewpointName"
              name="lblViewpointName"
              class="col-form-label text-right"
              style="width: 90px"
              >观点名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtViewpointName"
              name="txtViewpointName"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trViewpointTypeId">
          <td class="text-right">
            <label
              id="lblViewpointContent"
              name="lblViewpointContent"
              class="col-form-label text-right"
              style="width: 90px"
              >观点内容
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtViewpointContent"
              name="txtViewpointContent"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblViewpointTypeId"
              name="lblViewpointTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >观点类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlViewpointTypeId"
              name="ddlViewpointTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr id="trSource">
          <td class="text-right">
            <label
              id="lblReason"
              name="lblReason"
              class="col-form-label text-right"
              style="width: 90px"
              >理由
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtReason"
              name="txtReason"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblSource"
              name="lblSource"
              class="col-form-label text-right"
              style="width: 90px"
              >来源
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtSource"
              name="txtSource"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trUpdDate">
          <td class="text-right">
            <label
              id="lblVPProposePeople"
              name="lblVPProposePeople"
              class="col-form-label text-right"
              style="width: 90px"
              >观点提出人
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtVPProposePeople"
              name="txtVPProposePeople"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
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
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trIsSubmit">
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
              style="width: 200px"
            />
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsSubmit" name="chkIsSubmit" type="checkbox" Text="是否提交" /><label
                for="chkIsSubmit"
                >是否提交</label
              ></span
            >
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelViewpoint" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitViewpoint"
        type="primary"
        @click="btnViewpoint_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { ViewpointCRUDEx } from '@/views/GradEduTopic/ViewpointCRUDEx';
  import { Viewpoint_EditEx } from '@/views/GradEduTopic/Viewpoint_EditEx';
  export default defineComponent({
    name: 'ViewpointEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('观点表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelViewpoint':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitViewpoint':
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
          case 'btnCancelViewpoint':
            return strCancelButtonText.value;
          case 'btnSubmitViewpoint':
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
        //Viewpoint_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnViewpoint_Edit_Click(strCommandName: string, strKeyId: string) {
        Viewpoint_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_Viewpoint(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new Viewpoint_EditEx(new ViewpointCRUDEx());
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
