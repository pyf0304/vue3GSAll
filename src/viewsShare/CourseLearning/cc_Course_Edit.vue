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
        <tr id="trCourseCode">
          <td class="text-right">
            <label
              id="lblCourseName"
              name="lblCourseName"
              class="col-form-label text-right"
              style="width: 90px"
              >课程名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCourseName"
              name="txtCourseName"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblCourseCode"
              name="lblCourseCode"
              class="col-form-label text-right"
              style="width: 90px"
              >课程代码
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCourseCode"
              name="txtCourseCode"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trCourseDescription">
          <td class="text-right">
            <label
              id="lblCourseDescription"
              name="lblCourseDescription"
              class="col-form-label text-right"
              style="width: 90px"
              >课程描述
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input
              id="txtCourseDescription"
              name="txtCourseDescription"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trIdXzMajor">
          <td class="text-right">
            <label
              id="lblCourseTypeID"
              name="lblCourseTypeID"
              class="col-form-label text-right"
              style="width: 90px"
              >课程类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCourseTypeID"
              name="ddlCourseTypeID"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIdXzMajor"
              name="lblIdXzMajor"
              class="col-form-label text-right"
              style="width: 90px"
              >专业
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdXzMajor"
              name="ddlIdXzMajor"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr id="trIsOpen">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input id="chkIsOpen" name="chkIsOpen" type="checkbox" Text="是否公开" /><label
                for="chkIsOpen"
                >是否公开</label
              ></span
            >
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
              style="width: 400px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelcc_Course" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitcc_Course"
        type="primary"
        @click="btncc_Course_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { cc_CourseCRUDEx } from '@/viewsShare/CourseLearning/cc_CourseCRUDEx';
  import { cc_Course_EditEx } from '@/viewsShare/CourseLearning/cc_Course_EditEx';
  export default defineComponent({
    name: 'CcCourseEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('课程编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelcc_Course':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitcc_Course':
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
          case 'btnCancelcc_Course':
            return strCancelButtonText.value;
          case 'btnSubmitcc_Course':
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
        //cc_Course_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btncc_Course_Edit_Click(strCommandName: string, strKeyId: string) {
        cc_Course_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_cc_Course(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new cc_Course_EditEx('', new cc_CourseCRUDEx());
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
