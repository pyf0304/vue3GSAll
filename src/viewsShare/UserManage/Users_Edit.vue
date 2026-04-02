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
        <tr id="trPassword">
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
          <td class="text-right">
            <label
              id="lblPassword"
              name="lblPassword"
              class="col-form-label text-right"
              style="width: 90px"
              >Password
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
        </tr>
        <tr id="trIdXzCollege">
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
        </tr>
        <tr id="trStuIdTeacherId">
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
          <td class="text-right">
            <label
              id="lblStuIdTeacherId"
              name="lblStuIdTeacherId"
              class="col-form-label text-right"
              style="width: 90px"
              >学工号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtStuIdTeacherId"
              name="txtStuIdTeacherId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trIdentityId">
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
        <tr id="trOpenId">
          <td class="text-right">
            <label
              id="lblMobilePhone"
              name="lblMobilePhone"
              class="col-form-label text-right"
              style="width: 90px"
              >手机
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMobilePhone"
              name="txtMobilePhone"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblOpenId"
              name="lblOpenId"
              class="col-form-label text-right"
              style="width: 90px"
              >微信OpenId
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtOpenId"
              name="txtOpenId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trIdGrade">
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
          <td class="text-right">
            <label
              id="lblIdGrade"
              name="lblIdGrade"
              class="col-form-label text-right"
              style="width: 90px"
              >年级
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdGrade"
              name="ddlIdGrade"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trHeadPic">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input id="chkIsAudit" name="chkIsAudit" type="checkbox" Text="IsAudit" /><label
                for="chkIsAudit"
                >IsAudit</label
              ></span
            >
          </td>
          <td class="text-right">
            <label
              id="lblHeadPic"
              name="lblHeadPic"
              class="col-form-label text-right"
              style="width: 90px"
              >头像
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtHeadPic"
              name="txtHeadPic"
              class="form-control form-control-sm"
              style="width: 150px"
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
              style="width: 400px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelUsers" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitUsers" type="primary" @click="btnUsers_Edit_Click('Submit', '')">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { UsersCRUDEx } from '@/viewsShare/UserManage/UsersCRUDEx';
  import { Users_EditEx } from '@/viewsShare/UserManage/Users_EditEx';
  export default defineComponent({
    name: 'UsersEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('用户编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelUsers':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitUsers':
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
          case 'btnCancelUsers':
            return strCancelButtonText.value;
          case 'btnSubmitUsers':
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
        //Users_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnUsers_Edit_Click(strCommandName: string, strKeyId: string) {
        Users_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_Users(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new Users_EditEx('Users_EditEx', new UsersCRUDEx());
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
