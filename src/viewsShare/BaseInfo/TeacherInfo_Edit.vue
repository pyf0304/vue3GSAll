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
        <tr id="trTeacherId">
          <td class="text-right">
            <label
              id="lblIdTeacher"
              name="lblIdTeacher"
              class="col-form-label text-right"
              style="width: 90px"
              >教师流水号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtIdTeacher"
              name="txtIdTeacher"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblTeacherId"
              name="lblTeacherId"
              class="col-form-label text-right"
              style="width: 90px"
              >教师工号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTeacherId"
              name="txtTeacherId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIdSex">
          <td class="text-right">
            <label
              id="lblTeacherName"
              name="lblTeacherName"
              class="col-form-label text-right"
              style="width: 90px"
              >教师姓名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTeacherName"
              name="txtTeacherName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblIdSex"
              name="lblIdSex"
              class="col-form-label text-right"
              style="width: 90px"
              >性别
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdSex"
              name="ddlIdSex"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trIdXzCollege">
          <td class="text-right">
            <label
              id="lblIdEthnic"
              name="lblIdEthnic"
              class="col-form-label text-right"
              style="width: 90px"
              >民族
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdEthnic"
              name="ddlIdEthnic"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIdXzCollege"
              name="lblIdXzCollege"
              class="col-form-label text-right"
              style="width: 90px"
              >学院
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdXzCollege"
              name="ddlIdXzCollege"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trIdAdminGrade">
          <td class="text-right">
            <label
              id="lblIdPolitics"
              name="lblIdPolitics"
              class="col-form-label text-right"
              style="width: 90px"
              >政治面貌
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdPolitics"
              name="ddlIdPolitics"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIdAdminGrade"
              name="lblIdAdminGrade"
              class="col-form-label text-right"
              style="width: 90px"
              >行政职务
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdAdminGrade"
              name="ddlIdAdminGrade"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trIdStaffType">
          <td class="text-right">
            <label
              id="lblIdProfGrade"
              name="lblIdProfGrade"
              class="col-form-label text-right"
              style="width: 90px"
              >专业职称流水号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdProfGrade"
              name="ddlIdProfGrade"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIdStaffType"
              name="lblIdStaffType"
              class="col-form-label text-right"
              style="width: 90px"
              >职工类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdStaffType"
              name="ddlIdStaffType"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelTeacherInfo" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitTeacherInfo"
        type="primary"
        @click="btnTeacherInfo_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { TeacherInfoCRUDEx } from '@/viewsShare/BaseInfo/TeacherInfoCRUDEx';
  import { TeacherInfo_EditEx } from '@/viewsShare/BaseInfo/TeacherInfo_EditEx';
  export default defineComponent({
    name: 'TeacherInfoEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('教师编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelTeacherInfo':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitTeacherInfo':
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
          case 'btnCancelTeacherInfo':
            return strCancelButtonText.value;
          case 'btnSubmitTeacherInfo':
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
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //TeacherInfo_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnTeacherInfo_Edit_Click(strCommandName: string, strKeyId: string) {
        TeacherInfo_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_TeacherInfo(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new TeacherInfo_EditEx('TeacherInfo_EditEx', new TeacherInfoCRUDEx());
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
