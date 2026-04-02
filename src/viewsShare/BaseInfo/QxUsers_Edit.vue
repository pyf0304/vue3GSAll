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
        <tr id="trUserName">
          <td class="text-right">
            <label
              id="lblUserId"
              name="lblUserId"
              class="col-form-label text-right"
              style="width: 90px"
              >用户ID
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUserId"
              name="txtUserId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblUserName"
              name="lblUserName"
              class="col-form-label text-right"
              style="width: 90px"
              >用户名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUserName"
              name="txtUserName"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trUserStateId">
          <td class="text-right">
            <label
              id="lblPassword"
              name="lblPassword"
              class="col-form-label text-right"
              style="width: 90px"
              >口令
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPassword"
              name="txtPassword"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblUserStateId"
              name="lblUserStateId"
              class="col-form-label text-right"
              style="width: 90px"
              >用户状态
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlUserStateId"
              name="ddlUserStateId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr id="trIdGradeBase">
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
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIdGradeBase"
              name="lblIdGradeBase"
              class="col-form-label text-right"
              style="width: 90px"
              >年级
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdGradeBase"
              name="ddlIdGradeBase"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr id="trEmail">
          <td class="text-right">
            <label
              id="lblPhoneNumber"
              name="lblPhoneNumber"
              class="col-form-label text-right"
              style="width: 90px"
              >电话
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPhoneNumber"
              name="txtPhoneNumber"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblEmail"
              name="lblEmail"
              class="col-form-label text-right"
              style="width: 90px"
              >电子邮箱
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtEmail"
              name="txtEmail"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trEffitiveEndDate">
          <td class="text-right">
            <label
              id="lblEffitiveBeginDate"
              name="lblEffitiveBeginDate"
              class="col-form-label text-right"
              style="width: 90px"
              >有效开始
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtEffitiveBeginDate"
              name="txtEffitiveBeginDate"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblEffitiveEndDate"
              name="lblEffitiveEndDate"
              class="col-form-label text-right"
              style="width: 90px"
              >有效结束
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtEffitiveEndDate"
              name="txtEffitiveEndDate"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trIdentityId">
          <td class="text-right">
            <label
              id="lblStuTeacherId"
              name="lblStuTeacherId"
              class="col-form-label text-right"
              style="width: 90px"
              >学工号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtStuTeacherId"
              name="txtStuTeacherId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblIdentityId"
              name="lblIdentityId"
              class="col-form-label text-right"
              style="width: 90px"
              >身份编号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdentityId"
              name="ddlIdentityId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr id="trIsLeaved">
          <td class="text-right">
            <label
              id="lblIdSchool"
              name="lblIdSchool"
              class="col-form-label text-right"
              style="width: 90px"
              >学校
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdSchool"
              name="ddlIdSchool"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input id="chkIsLeaved" name="chkIsLeaved" type="checkbox" Text="IsLeaved" /><label
                for="chkIsLeaved"
                >IsLeaved</label
              ></span
            >
          </td>
        </tr>
        <tr id="trDepartmentId">
          <td class="text-right">
            <label
              id="lblAvatarsPicture"
              name="lblAvatarsPicture"
              class="col-form-label text-right"
              style="width: 90px"
              >虚拟头像
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtAvatarsPicture"
              name="txtAvatarsPicture"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblDepartmentId"
              name="lblDepartmentId"
              class="col-form-label text-right"
              style="width: 90px"
              >部门
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDepartmentId"
              name="ddlDepartmentId"
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
      <el-button id="btnCancelQxUsers" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitQxUsers"
        type="primary"
        @click="btnQxUsers_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { QxUsersCRUDEx } from '@/viewsShare/BaseInfo/QxUsersCRUDEx';
  import { QxUsers_EditEx } from '@/viewsShare/BaseInfo/QxUsers_EditEx';
  export default defineComponent({
    name: 'QxUsersEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('Qx用户编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxUsers':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitQxUsers':
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
          case 'btnCancelQxUsers':
            return strCancelButtonText.value;
          case 'btnSubmitQxUsers':
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
        //QxUsers_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnQxUsers_Edit_Click(strCommandName: string, strKeyId: string) {
        QxUsers_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_QxUsers(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new QxUsers_EditEx('QxUsers_EditEx', new QxUsersCRUDEx());
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
