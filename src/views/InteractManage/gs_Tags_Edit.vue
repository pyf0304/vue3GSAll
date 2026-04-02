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
        <tr id="trTagsContent">
          <td class="text-right">
            <label
              id="lblTagsId"
              name="lblTagsId"
              class="col-form-label text-right"
              style="width: 90px"
              >标注Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTagsId"
              name="txtTagsId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblTagsContent"
              name="lblTagsContent"
              class="col-form-label text-right"
              style="width: 90px"
              >标注内容
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTagsContent"
              name="txtTagsContent"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trPdfPageNum">
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
              style="width: 150px"
            />
          </td>
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
              id="lblVoteCount"
              name="lblVoteCount"
              class="col-form-label text-right"
              style="width: 90px"
              >点赞计数
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtVoteCount"
              name="txtVoteCount"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
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
        <tr id="trPdfX">
          <td class="text-right">
            <label
              id="lblPdfLineNum"
              name="lblPdfLineNum"
              class="col-form-label text-right"
              style="width: 90px"
              >pdf行号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPdfLineNum"
              name="txtPdfLineNum"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label id="lblPdfX" name="lblPdfX" class="col-form-label text-right" style="width: 90px"
              >PdfX
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPdfX"
              name="txtPdfX"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblPdfY" name="lblPdfY" class="col-form-label text-right" style="width: 90px"
              >PdfY
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPdfY"
              name="txtPdfY"
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
        <tr id="trPaperId">
          <td class="text-right">
            <label
              id="lblIdCurrEduCls"
              name="lblIdCurrEduCls"
              class="col-form-label text-right"
              style="width: 90px"
              >教学班
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
              id="lblPaperId"
              name="lblPaperId"
              class="col-form-label text-right"
              style="width: 90px"
              >论文
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
        </tr>
        <tr id="trPdfPageNumIn">
          <td class="text-right">
            <label
              id="lblShareId"
              name="lblShareId"
              class="col-form-label text-right"
              style="width: 90px"
              >分享Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtShareId"
              name="txtShareId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblPdfPageNumIn"
              name="lblPdfPageNumIn"
              class="col-form-label text-right"
              style="width: 90px"
              >PdfPageNumIn
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPdfPageNumIn"
              name="txtPdfPageNumIn"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trPdfDivLet">
          <td class="text-right">
            <label
              id="lblPdfPageTop"
              name="lblPdfPageTop"
              class="col-form-label text-right"
              style="width: 90px"
              >pdf页面顶部位置
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPdfPageTop"
              name="txtPdfPageTop"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblPdfDivLet"
              name="lblPdfDivLet"
              class="col-form-label text-right"
              style="width: 90px"
              >PdfDivLet
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPdfDivLet"
              name="txtPdfDivLet"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trPdfZoom">
          <td class="text-right">
            <label
              id="lblPdfDivTop"
              name="lblPdfDivTop"
              class="col-form-label text-right"
              style="width: 90px"
              >PdfDivTop
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPdfDivTop"
              name="txtPdfDivTop"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblPdfZoom"
              name="lblPdfZoom"
              class="col-form-label text-right"
              style="width: 90px"
              >PdfZoom
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPdfZoom"
              name="txtPdfZoom"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trTagsTypeId">
          <td class="text-right">
            <label
              id="lblTagsTypeId"
              name="lblTagsTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >标注类型ID
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTagsTypeId"
              name="txtTagsTypeId"
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
      <el-button id="btnCancelgs_Tags" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitgs_Tags"
        type="primary"
        @click="btngs_Tags_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  // import { gs_TagsCRUDEx } from '@/views/InteractManage/gs_TagsCRUDEx';
  import { gs_Tags_EditEx } from '@/views/InteractManage/gs_Tags_EditEx';
  export default defineComponent({
    name: 'GsTagsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('标注编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelgs_Tags':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitgs_Tags':
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
          case 'btnCancelgs_Tags':
            return strCancelButtonText.value;
          case 'btnSubmitgs_Tags':
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
        //gs_Tags_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btngs_Tags_Edit_Click(strCommandName: string, strKeyId: string) {
        gs_Tags_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_gs_Tags(strOp: string) {
        alert(`提交${strOp}`);
        // const objPage = new gs_Tags_EditEx(new gs_TagsCRUDEx());
        // objPage.btnSubmit_Click();
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
