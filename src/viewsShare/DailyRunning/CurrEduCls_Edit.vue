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
        <tr id="trEduClsName">
          <td class="text-right">
            <label id="lblCurrEduClsId" class="col-form-label text-right" style="width: 90px"
              >教学班Id
            </label>
          </td>
          <td class="text-left">
            <input id="txtCurrEduClsId" class="form-control form-control-sm" style="width: 150px" />
          </td>
          <td class="text-right">
            <label id="lblEduClsName" class="col-form-label text-right" style="width: 90px"
              >教学班名称
            </label>
          </td>
          <td class="text-left">
            <input id="txtEduClsName" class="form-control form-control-sm" style="width: 150px" />
          </td>
        </tr>
        <tr id="trIdXzCollege">
          <td class="text-right">
            <label id="lblCourseId" class="col-form-label text-right" style="width: 90px"
              >课程
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCourseId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label id="lblIdXzCollege" class="col-form-label text-right" style="width: 90px"
              >学院
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdXzCollege"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trIsEffective">
          <td class="text-right">
            <label id="lblIdGradeBase" class="col-form-label text-right" style="width: 90px"
              >年级
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdGradeBase"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsEffective" type="checkbox" Text="是否有效" /><label
                for="chkIsEffective"
                >是否有效</label
              ></span
            >
          </td>
        </tr>
        <tr id="trSchoolTerm">
          <td class="text-right">
            <label id="lblSchoolYear" class="col-form-label text-right" style="width: 90px"
              >学年
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlSchoolYear"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label id="lblSchoolTerm" class="col-form-label text-right" style="width: 90px"
              >学期
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlSchoolTerm"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trUserType">
          <td class="text-right">
            <label id="lblUserType" class="col-form-label text-right" style="width: 90px"
              >用户类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlUserType"
              v-model="userType"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option value="unknown">未知</option>
              <option value="university">大学</option>
              <option value="middle_School">中学</option>
              <option value="company">公司</option>
            </select>
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" class="col-form-label text-right" style="width: 90px">备注 </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input id="txtMemo" class="form-control form-control-sm" style="width: 400px" />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
      <input id="txtIdCurrEduCls" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelCurrEduCls" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitCurrEduCls"
        type="primary"
        @click="btnCurrEduCls_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { CurrEduCls_EditEx } from '@/viewsShare/DailyRunning/CurrEduCls_EditEx';
  export default defineComponent({
    name: 'CurrEduClsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userType = ref('unknown');
      const strTitle = ref('当前教学班编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelCurrEduCls':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitCurrEduCls':
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
          case 'btnCancelCurrEduCls':
            return strCancelButtonText.value;
          case 'btnSubmitCurrEduCls':
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
        userType,
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
        //CurrEduCls_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnCurrEduCls_Edit_Click(strCommandName: string, strKeyId: string) {
        CurrEduCls_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
