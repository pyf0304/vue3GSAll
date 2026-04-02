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
        style="width: 700px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trUpdDate" style="display: none">
          <td class="text-right">
            <label
              id="lblReportId"
              name="lblReportId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              汇报Id
            </label>
          </td>
          <td class="text-left">
            <input id="txtReportId" name="txtReportId" class="form-control" style="width: 150px" />
          </td>
          <td class="text-right">
            <label
              id="lblUpdDate"
              name="lblUpdDate"
              class="col-form-label text-right"
              style="width: 90px"
            >
              修改日期
            </label>
          </td>
          <td class="text-left">
            <input id="txtUpdDate" name="txtUpdDate" class="form-control" style="width: 150px" />
          </td>
        </tr>

        <tr id="trReportContent">
          <td class="text-left" colspan="2">
            <select id="ddlPaperId" name="ddlPaperId" class="form-control" style="width: 400px" />
          </td>
        </tr>
        <tr id="trPaperId">
          <td class="text-left" colspan="2">
            <textarea
              id="txtReportContent"
              name="txtReportContent"
              placeholder="请输入汇报内容"
              class="form-control"
              style="width: 100%; height: 200px"
            />
          </td>
        </tr>
        <tr id="trReportDate">
          <td class="text-left">
            <input
              id="txtReportDate"
              name="txtReportDate"
              placeholder="请输入汇报日期"
              class="form-control"
              style="width: 150px"
            />
          </td>
          <td class="text-left">
            <input
              id="txtReportUser"
              name="txtReportUser"
              placeholder="请输入汇报人员"
              class="form-control"
              style="width: 300px"
            />
          </td>
        </tr>
        <tr id="trPPTUrl">
          <td class="text-left" colspan="2">
            <label
              id="lblPPTUrl"
              name="lblPPTUrl"
              class="col-form-label text-right"
              style="width: 60px; float: left"
            >
              PPT：
            </label>
            <input
              type="file"
              id="txtPPTUrl"
              name="txtPPTUrl"
              placeholder="请上传PPT文件"
              class="form-control"
              style="width: 250px"
            />
          </td>
        </tr>
        <tr id="trPDFUrl">
          <td class="text-left" colspan="2">
            <label
              id="lblPDFUrl"
              name="lblPDFUrl"
              class="col-form-label text-right"
              style="width: 60px; float: left"
            >
              PDF： </label
            ><input
              type="file"
              id="txtPDFUrl"
              name="txtPDFUrl"
              class="form-control"
              style="width: 250px"
            />
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-left" colspan="2">
            <input
              id="txtMemo"
              name="txtMemo"
              placeholder="备注"
              class="form-control"
              style="width: 100%"
            />
          </td>
        </tr>
      </table>
      <input id="hidppt" type="hidden" />
      <input id="hidpdf" type="hidden" />
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelgs_PaperReport" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitgs_PaperReport"
        type="primary"
        @click="btngs_PaperReport_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { gs_PaperReportCRUDEx } from '@/views/GradEduTopic/gs_PaperReportCRUDEx';
  import { gs_PaperReport_EditEx } from '@/views/GradEduTopic/gs_PaperReport_EditEx';
  export default defineComponent({
    name: 'GsPaperReportEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('论文汇报表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelgs_PaperReport':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitgs_PaperReport':
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
          case 'btnCancelgs_PaperReport':
            return strCancelButtonText.value;
          case 'btnSubmitgs_PaperReport':
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
        //gs_PaperReport_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btngs_PaperReport_Edit_Click(strCommandName: string, strKeyId: string) {
        gs_PaperReport_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_gs_PaperReport(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new gs_PaperReport_EditEx('', new gs_PaperReportCRUDEx());
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
