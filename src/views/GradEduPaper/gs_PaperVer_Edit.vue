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
        <tr id="trPaperTitle">
          <td class="text-right">
            <label
              id="lblPaperId"
              name="lblPaperId"
              class="col-form-label text-right"
              style="width: 90px"
              >论文Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPaperId"
              name="ddlPaperId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblPaperTitle"
              name="lblPaperTitle"
              class="col-form-label text-right"
              style="width: 90px"
              >论文标题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPaperTitle"
              name="txtPaperTitle"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trPeriodical">
          <td class="text-right">
            <label
              id="lblPaperContent"
              name="lblPaperContent"
              class="col-form-label text-right"
              style="width: 90px"
              >主题内容
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPaperContent"
              name="txtPaperContent"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblPeriodical"
              name="lblPeriodical"
              class="col-form-label text-right"
              style="width: 90px"
              >期刊
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPeriodical"
              name="txtPeriodical"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trResearchQuestion">
          <td class="text-right">
            <label
              id="lblAuthor"
              name="lblAuthor"
              class="col-form-label text-right"
              style="width: 90px"
              >作者
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtAuthor"
              name="txtAuthor"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblResearchQuestion"
              name="lblResearchQuestion"
              class="col-form-label text-right"
              style="width: 90px"
              >研究问题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtResearchQuestion"
              name="txtResearchQuestion"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trLiteratureSources">
          <td class="text-right">
            <label
              id="lblKeyword"
              name="lblKeyword"
              class="col-form-label text-right"
              style="width: 90px"
              >关键字
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtKeyword"
              name="txtKeyword"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblLiteratureSources"
              name="lblLiteratureSources"
              class="col-form-label text-right"
              style="width: 90px"
              >文献来源
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLiteratureSources"
              name="txtLiteratureSources"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trUploadfileUrl">
          <td class="text-right">
            <label
              id="lblLiteratureLink"
              name="lblLiteratureLink"
              class="col-form-label text-right"
              style="width: 90px"
              >文献链接
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLiteratureLink"
              name="txtLiteratureLink"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblUploadfileUrl"
              name="lblUploadfileUrl"
              class="col-form-label text-right"
              style="width: 90px"
              >文件地址
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUploadfileUrl"
              name="txtUploadfileUrl"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIsSubmit">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsQuotethesis"
                name="chkIsQuotethesis"
                type="checkbox"
                Text="是否引用论文"
              /><label for="chkIsQuotethesis">是否引用论文</label></span
            >
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
        <tr id="trQuoteId">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsChecked" name="chkIsChecked" type="checkbox" Text="是否检查" /><label
                for="chkIsChecked"
                >是否检查</label
              ></span
            >
          </td>
          <td class="text-right">
            <label
              id="lblQuoteId"
              name="lblQuoteId"
              class="col-form-label text-right"
              style="width: 90px"
              >引用Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtQuoteId"
              name="txtQuoteId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trLiteratureTypeId">
          <td class="text-right">
            <label
              id="lblChecker"
              name="lblChecker"
              class="col-form-label text-right"
              style="width: 90px"
              >审核人
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtChecker"
              name="txtChecker"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblLiteratureTypeId"
              name="lblLiteratureTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >作文类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLiteratureTypeId"
              name="txtLiteratureTypeId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trUpdDate">
          <td class="text-right">
            <label
              id="lblUpdUser"
              name="lblUpdUser"
              class="col-form-label text-right"
              style="width: 90px"
              >修改人
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUpdUser"
              name="txtUpdUser"
              class="form-control form-control-sm"
              style="width: 150px"
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
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trPaperTypeId">
          <td class="text-right">
            <label
              id="lblIdCurrEduCls"
              name="lblIdCurrEduCls"
              class="col-form-label text-right"
              style="width: 90px"
              >教学班流水号
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
          <td class="text-right">
            <label
              id="lblPaperTypeId"
              name="lblPaperTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >论文类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPaperTypeId"
              name="txtPaperTypeId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label
              id="lblPaperStatusId"
              name="lblPaperStatusId"
              class="col-form-label text-right"
              style="width: 90px"
              >论文状态Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPaperStatusId"
              name="txtPaperStatusId"
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
      <el-button id="btnCancelgs_PaperVer" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitgs_PaperVer"
        type="primary"
        @click="btngs_PaperVer_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { gs_PaperVerCRUDEx } from '@/views/GradEduPaper/gs_PaperVerCRUDEx';
  import { gs_PaperVer_EditEx } from '@/views/GradEduPaper/gs_PaperVer_EditEx';
  export default defineComponent({
    name: 'GsPaperVerEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('论文历史版本表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelgs_PaperVer':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitgs_PaperVer':
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
          case 'btnCancelgs_PaperVer':
            return strCancelButtonText.value;
          case 'btnSubmitgs_PaperVer':
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
        //gs_PaperVer_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btngs_PaperVer_Edit_Click(strCommandName: string, strKeyId: string) {
        gs_PaperVer_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_gs_PaperVer(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new gs_PaperVer_EditEx(new gs_PaperVerCRUDEx());
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
