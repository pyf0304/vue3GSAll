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
        style="width: 800px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr style="display: none">
          <td class="text-right">
            <label
              id="lblResultId"
              name="lblResultId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              成果Id
            </label>
          </td>
          <td class="text-left">
            <input id="txtResultId" name="txtResultId" class="form-control" style="width: 150px" />
          </td>
          <td class="text-right">
            <label
              id="lblPaperId"
              name="lblPaperId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              论文Id
            </label>
          </td>
          <td class="text-left"> </td>
        </tr>
        <tr id="trResultTypeId" style="display: none">
          <td class="text-right">
            <label
              id="lblTopicId"
              name="lblTopicId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              主题编号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTopicId"
              name="ddlTopicId"
              class="form-control"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblResultTypeId"
              name="lblResultTypeId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              成果类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtResultTypeId"
              name="txtResultTypeId"
              class="form-control"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trResultName">
          <td class="text-left" colspan="2">
            <input
              id="txtResultName"
              name="txtResultName"
              placeholder="成果名称"
              class="form-control"
              style="width: 500px"
            />
          </td>
        </tr>

        <tr id="trResultContent">
          <td class="text-left" colspan="2">
            <textarea
              id="txtResultContent"
              name="txtResultContent"
              placeholder="成果说明"
              class="form-control"
              style="width: 100%; height: 200px"
            />
          </td>
        </tr>

        <tr>
          <td colspan="2">
            <select
              name="ddlResultTypeId"
              id="ddlResultTypeId"
              class="form-control"
              style="width: 300px"
              onchange="SelectResultType_Click()"
            >
              <option selected="true" value="0">请选择研究成果类型...</option>
              <option value="01">选择论文</option>
              <option value="02">上传pdf</option>
              <option value="03">上传图片</option>
              <option value="04">上传压缩文件</option>
              <option value="05">上传word文件</option>
              <option value="06">上传ppt文件</option>
            </select>
          </td>
        </tr>

        <tr id="trPaperId" style="display: none">
          <td class="text-left" colspan="2">
            <select id="ddlPaperId" name="ddlPaperId" class="form-control" style="width: 500px" />
          </td>
        </tr>

        <tr id="trUploadfile" style="display: none">
          <td class="NameTD">
            <label
              id="lblUploadfileUrl"
              name="lblUploadfileUrl"
              class="col-form-label text-right"
              style="width: 90px"
            >
              上传图片
            </label>
          </td>
          <td class="ValueTD" id="InputsWrapper">
            <input type="file" id="txtUploadfile" name="txtUploadfile" />
            <button id="AddMoreFileBox" type="button" class="btn btn-primary" data-dismiss="modal"
              >添加更多图片</button
            >
          </td>
        </tr>

        <tr id="trAuthor">
          <td class="text-left" colspan="2">
            <input
              id="txtAuthor"
              name="txtAuthor"
              placeholder="作者，如果多人请用逗号隔开"
              class="form-control"
              style="width: 500px"
            />
          </td>
        </tr>

        <tr id="trDivision">
          <td class="text-left" colspan="2">
            <textarea
              id="txtDivision"
              name="txtDivision"
              placeholder="成果分工"
              class="form-control"
              style="width: 600px; height: 100px"
            />
          </td>
        </tr>

        <tr id="trUpdUser" style="display: none">
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
          <td class="text-right">
            <label
              id="lblUpdUser"
              name="lblUpdUser"
              class="col-form-label text-right"
              style="width: 90px"
            >
              修改人
            </label>
          </td>
          <td class="text-left">
            <input id="txtUpdUser" name="txtUpdUser" class="form-control" style="width: 150px" />
          </td>
        </tr>

        <tr id="trMemo">
          <td class="text-left" colspan="2">
            <textarea
              id="txtMemo"
              name="txtMemo"
              placeholder="备注"
              class="form-control"
              style="width: 500px; height: 80px"
            />
          </td>
        </tr>
      </table>
      <!-- 研究成果 -->
      <input id="hdnFileOne" type="hidden" />
      <input id="hdnFileTwo" type="hidden" />
      <input id="hdnFileThree" type="hidden" />
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelgs_ResearchResult" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitgs_ResearchResult"
        type="primary"
        @click="btngs_ResearchResult_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { gs_ResearchResultCRUDEx } from '@/views/GradEduTopic/gs_ResearchResultCRUDEx';
  import { gs_ResearchResult_EditEx } from '@/views/GradEduTopic/gs_ResearchResult_EditEx';
  export default defineComponent({
    name: 'GsResearchResultEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('研究成果编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelgs_ResearchResult':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitgs_ResearchResult':
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
          case 'btnCancelgs_ResearchResult':
            return strCancelButtonText.value;
          case 'btnSubmitgs_ResearchResult':
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
        //gs_ResearchResult_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btngs_ResearchResult_Edit_Click(strCommandName: string, strKeyId: string) {
        gs_ResearchResult_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_gs_ResearchResult(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new gs_ResearchResult_EditEx('', new gs_ResearchResultCRUDEx());
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
