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
        <tr id="trIdStu">
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
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIdStu"
              name="lblIdStu"
              class="col-form-label text-right"
              style="width: 90px"
              >学生
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtIdStu"
              name="txtIdStu"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trSchoolYear">
          <td class="text-right">
            <label
              id="lblSchoolTerm"
              name="lblSchoolTerm"
              class="col-form-label text-right"
              style="width: 90px"
              >学期
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlSchoolTerm"
              name="ddlSchoolTerm"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblSchoolYear"
              name="lblSchoolYear"
              class="col-form-label text-right"
              style="width: 90px"
              >学年
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlSchoolYear"
              name="ddlSchoolYear"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
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
      <el-button id="btnCancelCurrEduClsStu" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitCurrEduClsStu"
        type="primary"
        @click="btnCurrEduClsStu_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { CurrEduClsStuCRUDEx } from '@/viewsShare/DailyRunning/CurrEduClsStuCRUDEx';
  import { CurrEduClsStu_EditEx } from '@/viewsShare/DailyRunning/CurrEduClsStu_EditEx';
  export default defineComponent({
    name: 'CurrEduClsStuEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('教学班与学生关系编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelCurrEduClsStu':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitCurrEduClsStu':
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
          case 'btnCancelCurrEduClsStu':
            return strCancelButtonText.value;
          case 'btnSubmitCurrEduClsStu':
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
        //CurrEduClsStu_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnCurrEduClsStu_Edit_Click(strCommandName: string, strKeyId: string) {
        CurrEduClsStu_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_CurrEduClsStu(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new CurrEduClsStu_EditEx('', new CurrEduClsStuCRUDEx());
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
