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
        <tr id="trStuID">
          <td class="text-right">
            <label
              id="lblIdStudentInfo"
              name="lblIdStudentInfo"
              class="col-form-label text-right"
              style="width: 90px"
              >学生流水号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtIdStudentInfo"
              name="txtIdStudentInfo"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblStuID"
              name="lblStuID"
              class="col-form-label text-right"
              style="width: 90px"
              >学号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtStuID"
              name="txtStuID"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIdPolitics">
          <td class="text-right">
            <label
              id="lblStuName"
              name="lblStuName"
              class="col-form-label text-right"
              style="width: 90px"
              >姓名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtStuName"
              name="txtStuName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblIdPolitics"
              name="lblIdPolitics"
              class="col-form-label text-right"
              style="width: 90px"
              >政治面貌流水号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtIdPolitics"
              name="txtIdPolitics"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIdEthnic">
          <td class="text-right">
            <label
              id="lblIdSex"
              name="lblIdSex"
              class="col-form-label text-right"
              style="width: 90px"
              >性别流水号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtIdSex"
              name="txtIdSex"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblIdEthnic"
              name="lblIdEthnic"
              class="col-form-label text-right"
              style="width: 90px"
              >民族流水号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtIdEthnic"
              name="txtIdEthnic"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIdStuType">
          <td class="text-right">
            <label
              id="lblIdUniZone"
              name="lblIdUniZone"
              class="col-form-label text-right"
              style="width: 90px"
              >校区流水号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtIdUniZone"
              name="txtIdUniZone"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblIdStuType"
              name="lblIdStuType"
              class="col-form-label text-right"
              style="width: 90px"
              >学生类别流水号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdStuType"
              name="ddlIdStuType"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trIdXzMajor">
          <td class="text-right">
            <label
              id="lblIdXzCollege"
              name="lblIdXzCollege"
              class="col-form-label text-right"
              style="width: 90px"
              >学院流水号
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
          <td class="text-right">
            <label
              id="lblIdXzMajor"
              name="lblIdXzMajor"
              class="col-form-label text-right"
              style="width: 90px"
              >专业流水号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdXzMajor"
              name="ddlIdXzMajor"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trIdAdminCls">
          <td class="text-right">
            <label
              id="lblIdGradeBase"
              name="lblIdGradeBase"
              class="col-form-label text-right"
              style="width: 90px"
              >年级流水号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdGradeBase"
              name="ddlIdGradeBase"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIdAdminCls"
              name="lblIdAdminCls"
              class="col-form-label text-right"
              style="width: 90px"
              >行政班流水号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdAdminCls"
              name="ddlIdAdminCls"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trNativePlace">
          <td class="text-right">
            <label
              id="lblBirthday"
              name="lblBirthday"
              class="col-form-label text-right"
              style="width: 90px"
              >出生日期
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtBirthday"
              name="txtBirthday"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblNativePlace"
              name="lblNativePlace"
              class="col-form-label text-right"
              style="width: 90px"
              >籍贯
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtNativePlace"
              name="txtNativePlace"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIDCardNo">
          <td class="text-right">
            <label id="lblDuty" name="lblDuty" class="col-form-label text-right" style="width: 90px"
              >职位
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDuty"
              name="txtDuty"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblIDCardNo"
              name="lblIDCardNo"
              class="col-form-label text-right"
              style="width: 90px"
              >身份证号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtIDCardNo"
              name="txtIDCardNo"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trLiveAddress">
          <td class="text-right">
            <label
              id="lblStuCardNo"
              name="lblStuCardNo"
              class="col-form-label text-right"
              style="width: 90px"
              >学生证号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtStuCardNo"
              name="txtStuCardNo"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblLiveAddress"
              name="lblLiveAddress"
              class="col-form-label text-right"
              style="width: 90px"
              >居住地址
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLiveAddress"
              name="txtLiveAddress"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIdCardNo2">
          <td class="text-right">
            <label
              id="lblHomePhone"
              name="lblHomePhone"
              class="col-form-label text-right"
              style="width: 90px"
              >住宅电话
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtHomePhone"
              name="txtHomePhone"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblIdCardNo2"
              name="lblIdCardNo2"
              class="col-form-label text-right"
              style="width: 90px"
              >内卡号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtIdCardNo2"
              name="txtIdCardNo2"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIsAvconClassUser">
          <td class="text-right">
            <label
              id="lblCardNo"
              name="lblCardNo"
              class="col-form-label text-right"
              style="width: 90px"
              >卡号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCardNo"
              name="txtCardNo"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsAvconClassUser"
                name="chkIsAvconClassUser"
                type="checkbox"
                Text="IsAvconClassUser"
              /><label for="chkIsAvconClassUser">IsAvconClassUser</label></span
            >
          </td>
        </tr>
        <tr id="trIsGpUser">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsAvconUser"
                name="chkIsAvconUser"
                type="checkbox"
                Text="IsAvconUser"
              /><label for="chkIsAvconUser">IsAvconUser</label></span
            >
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsGpUser" name="chkIsGpUser" type="checkbox" Text="是否Gp用户" /><label
                for="chkIsGpUser"
                >是否Gp用户</label
              ></span
            >
          </td>
        </tr>
        <tr id="trUserId">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsLeaved" name="chkIsLeaved" type="checkbox" Text="IsLeaved" /><label
                for="chkIsLeaved"
                >IsLeaved</label
              ></span
            >
          </td>
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
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trEnrollmentDate">
          <td class="text-right">
            <label
              id="lblUserID4Avcon"
              name="lblUserID4Avcon"
              class="col-form-label text-right"
              style="width: 90px"
              >UserID4Avcon
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUserID4Avcon"
              name="txtUserID4Avcon"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblEnrollmentDate"
              name="lblEnrollmentDate"
              class="col-form-label text-right"
              style="width: 90px"
              >入校日期
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtEnrollmentDate"
              name="txtEnrollmentDate"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trEmail">
          <td class="text-right">
            <label
              id="lblPostCode"
              name="lblPostCode"
              class="col-form-label text-right"
              style="width: 90px"
              >邮编
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPostCode"
              name="txtPostCode"
              class="form-control form-control-sm"
              style="width: 150px"
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
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trMicroblog">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsMessage" name="chkIsMessage" type="checkbox" Text="IsMessage" /><label
                for="chkIsMessage"
                >IsMessage</label
              ></span
            >
          </td>
          <td class="text-right">
            <label
              id="lblMicroblog"
              name="lblMicroblog"
              class="col-form-label text-right"
              style="width: 90px"
              >Microblog
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMicroblog"
              name="txtMicroblog"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trHeadphoto">
          <td class="text-right">
            <label
              id="lblPhoneNumber"
              name="lblPhoneNumber"
              class="col-form-label text-right"
              style="width: 90px"
              >PhoneNumber
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPhoneNumber"
              name="txtPhoneNumber"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblHeadphoto"
              name="lblHeadphoto"
              class="col-form-label text-right"
              style="width: 90px"
              >Headphoto
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtHeadphoto"
              name="txtHeadphoto"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trRegisterPassword">
          <td class="text-right">
            <label id="lblQQ" name="lblQQ" class="col-form-label text-right" style="width: 90px"
              >QQ
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtQQ"
              name="txtQQ"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblRegisterPassword"
              name="lblRegisterPassword"
              class="col-form-label text-right"
              style="width: 90px"
              >RegisterPassword
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRegisterPassword"
              name="txtRegisterPassword"
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
      <el-button id="btnCancelStudentInfo" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitStudentInfo"
        type="primary"
        @click="btnStudentInfo_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { StudentInfoCRUDEx } from '@/viewsShare/UserManage/StudentInfoCRUDEx';
  import { StudentInfo_EditEx } from '@/viewsShare/UserManage/StudentInfo_EditEx';
  export default defineComponent({
    name: 'StudentInfoEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('学生编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelStudentInfo':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitStudentInfo':
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
          case 'btnCancelStudentInfo':
            return strCancelButtonText.value;
          case 'btnSubmitStudentInfo':
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
        //StudentInfo_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnStudentInfo_Edit_Click(strCommandName: string, strKeyId: string) {
        StudentInfo_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_StudentInfo(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new StudentInfo_EditEx('', new StudentInfoCRUDEx());
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
