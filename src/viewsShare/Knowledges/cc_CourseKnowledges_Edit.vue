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
        <tr id="trKnowledgeName">
          <td class="text-right">
            <label
              id="lblKnowledgeName"
              name="lblKnowledgeName"
              class="col-form-label text-right"
              style="width: 90px"
              >知识点名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtKnowledgeName"
              name="txtKnowledgeName"
              class="form-control form-control-sm"
              style="width: 350px"
            />
          </td>
        </tr>
        <tr id="trKnowledgeTitle">
          <td class="text-right">
            <label
              id="lblKnowledgeTitle"
              name="lblKnowledgeTitle"
              class="col-form-label text-right"
              style="width: 90px"
              >知识点标题
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input
              id="txtKnowledgeTitle"
              name="txtKnowledgeTitle"
              class="form-control form-control-sm"
              style="width: 350px"
            />
          </td>
        </tr>
        <tr id="trKnowledgeTypeId">
          <td class="text-right">
            <label
              id="lblKnowledgeTypeId"
              name="lblKnowledgeTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >知识点类型
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <select
              id="ddlKnowledgeTypeId"
              name="ddlKnowledgeTypeId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trCourseChapterId">
          <td class="text-right">
            <label
              id="lblCourseChapterId"
              name="lblCourseChapterId"
              class="col-form-label text-right"
              style="width: 90px"
              >课程章节
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCourseChapterId"
              name="ddlCourseChapterId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trKnowledgeContent">
          <td class="text-right">
            <label
              id="lblKnowledgeContent"
              name="lblKnowledgeContent"
              class="col-form-label text-right"
              style="width: 90px"
              >知识点内容
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <textarea
              id="txtKnowledgeContent"
              name="txtKnowledgeContent"
              class="form-control form-control-sm"
              rows="5"
              cols="50"
              style="width: 350px"
            />
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >备注
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input
              id="txtMemo"
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 350px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelcc_CourseKnowledges" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitcc_CourseKnowledges"
        type="primary"
        @click="btncc_CourseKnowledges_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { cc_CourseKnowledgesCRUDEx } from '@/viewsShare/Knowledges/cc_CourseKnowledgesCRUDEx';
  import { cc_CourseKnowledges_EditEx } from '@/viewsShare/Knowledges/cc_CourseKnowledges_EditEx';
  export default defineComponent({
    name: 'CcCourseKnowledgesEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('知识点编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelcc_CourseKnowledges':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitcc_CourseKnowledges':
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
          case 'btnCancelcc_CourseKnowledges':
            return strCancelButtonText.value;
          case 'btnSubmitcc_CourseKnowledges':
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
        //cc_CourseKnowledges_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btncc_CourseKnowledges_Edit_Click(strCommandName: string, strKeyId: string) {
        cc_CourseKnowledges_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_cc_CourseKnowledges(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new cc_CourseKnowledges_EditEx('', new cc_CourseKnowledgesCRUDEx());
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
