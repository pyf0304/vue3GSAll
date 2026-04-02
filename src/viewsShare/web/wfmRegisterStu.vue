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
      <div class="container" style="width: 100%">
        <section id="content" style="text-align: center">
          <h3>上海泰泽在线教育平台--用户注册</h3>
          <div>
            <table
              style="width: 100%"
              id="tabLayout"
              cellspacing="2"
              cellpadding="2"
              class="msgtable"
            >
              <tr>
                <td style="text-align: right">
                  <label id="lblRoleID" class="form-control form-control-sm">用户类型</label>
                </td>
                <td style="text-align: left">
                  <select
                    v-model="identityId"
                    ref="ddlIdentityId"
                    id="ddlIdentityId"
                    style="width: 300px"
                    @change="ddlIdentityId_SelectedIndexChanged"
                  >
                  </select>
                </td>
              </tr>
              <tr id="STang">
                <td style="text-align: right">
                  <label id="Label1" class="form-control form-control-sm">{{ collegeName }}</label>
                </td>
                <td style="text-align: left">
                  <select
                    v-model="idXzCollege"
                    id="ddlIdXzCollege"
                    style="width: 300px"
                    @change="ddlIdXzCollege_SelectedIndexChanged"
                  ></select>
                </td>
              </tr>
              <tr ref="trIdXzMajor" id="trIdXzMajor">
                <td style="text-align: right">
                  <label id="Label2" class="form-control form-control-sm">选择专业</label>
                </td>
                <td style="text-align: left">
                  <select id="ddlIdXzMajor" style="width: 300px"></select>
                </td>
              </tr>
              <tr id="trIdGradeBase">
                <td style="text-align: right">
                  <label id="lblIdGradeBase" class="form-control form-control-sm">入学年级</label>
                </td>
                <td style="text-align: left">
                  <select id="ddlIdGradeBase" class="ValueControl" style="width: 300px"> </select>
                </td>
              </tr>
              <tr ref="trIdGrade" id="trIdGrade">
                <td style="text-align: right">
                  <label id="lblid_Grade" class="form-control form-control-sm">年级</label>
                </td>
                <td style="text-align: left">
                  <select id="ddlIdGrade" class="ValueControl" style="width: 300px"> </select>
                </td>
              </tr>
              <tr>
                <td style="text-align: right; width: 30%">
                  <label id="lblUserId" class="form-control form-control-sm">账号</label>
                </td>
                <td style="text-align: left">
                  <input
                    id="txtUserId"
                    type="text"
                    class="form-control form-control-sm"
                    style="width: 300px"
                  />
                </td>
              </tr>
              <tr>
                <td style="text-align: right">
                  <label id="lblUserName" class="form-control form-control-sm">姓名</label>
                </td>
                <td style="text-align: left">
                  <input
                    id="txtUserName"
                    type="text"
                    class="form-control form-control-sm"
                    style="width: 300px"
                  />
                </td>
              </tr>
              <tr>
                <td style="text-align: right">
                  <label id="lblPassword" class="form-control form-control-sm">密码</label>
                </td>
                <td style="text-align: left">
                  <input id="txtPassword" placeholder="密码" type="password" style="width: 300px" />
                </td>
              </tr>
              <tr>
                <td style="text-align: right">
                  <label id="lblPwds" class="form-control form-control-sm">确认密码</label>
                </td>
                <td style="text-align: left">
                  <input id="txtPwdTwo" placeholder="密码" type="password" style="width: 300px" />
                </td>
              </tr>

              <tr>
                <td style="text-align: right">
                  <label id="lblReason" class="form-control form-control-sm">备注</label>
                </td>
                <td style="text-align: left">
                  <textarea id="txtReason" style="width: 300px; height: 50px"></textarea>
                </td>
              </tr>
            </table>
          </div>
        </section>
      </div>
    </div>
    <template #footer>
      <el-button
        id="btnRegister"
        Text="提交"
        style="width: 100px"
        class="btn btn-outline-info btn-sm text-nowrap"
        @click="btnEdit_Click('Register', '')"
        >提交注册</el-button
      >

      &nbsp;&nbsp;
      <el-button
        id="btnCancel"
        style="width: 100px"
        class="btn btn-outline-info btn-sm text-nowrap"
        @click="btnEdit_Click('Cancel', '')"
        >重置</el-button
      >
      &nbsp; &nbsp;<el-button
        id="btnReturnIndex"
        Text=""
        style="width: 100px"
        class="btn btn-outline-info btn-sm text-nowrap"
        @click="btnEdit_Click('ReturnIndex', '')"
        >返回登录</el-button
      >

      <br />
      <label id="lblMessage" Text="" ForeColor="Red"> </label>
      <br />
      <div class="bottom">
        <a href="#"
          >版权所有：上海泰泽信息技术有限公司 联系信箱：pyf@shnu.edu.cn 技术电话：1391721741</a
        >
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { gs_RelaTypeCRUDEx } from '@/viewsShare/Knowledges/gs_RelaTypeCRUDEx';

  import RegisterStuCom from '@/viewsShare/web/RegisterStu.vue';
  import { wfmRegisterStu } from '@/viewsShare/web/wfmRegisterStu';
  import { XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
  import { message } from '@/utils/myMessage';
  import { QxUserIdentity_GetObjByIdentityIdCache } from '@/ts/L3ForWApi/UserManage/clsQxUserIdentityWApi';
  import { UserTypeMap } from '@/store/modules/types/userType';
  import { HideTrObj, ShowTrObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { XzClgEx_BindDdl_IdXzCollegeByUserTypeInDivCache } from '@/ts/L3ForWApiExShare/BaseInfo/clsXzClgExWApi';
  import { XzGrade_BindDdl_IdGradeInDivCache } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
  export default defineComponent({
    name: 'GsRelaTypeEdit',
    components: {
      // 组件注册
      RegisterStuCom,
    },
    setup() {
      const collegeName = ref('选择学院');
      const refDivEdit = ref();
      const idXzCollege = ref('');
      const identityId = ref('');
      const userType = ref('');
      const ddlIdentityId = ref();
      const trIdXzMajor = ref();
      const trIdGrade = ref();
      const strTitle = ref('注册');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelgs_RelaType':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitgs_RelaType':
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
          case 'btnCancelgs_RelaType':
            return strCancelButtonText.value;
          case 'btnSubmitgs_RelaType':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('600px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          wfmRegisterStu.GetPropValue = GetPropValue;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'userType':
            return userType.value;
          default:
            return '';
        }
      }

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
        refDivEdit,
        idXzCollege,
        identityId,
        ddlIdentityId,
        trIdXzMajor,
        trIdGrade,
        collegeName,
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
        //RegisterStu.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnEdit_Click(strCommandName: string, strKeyId: string) {
        console.log(strCommandName, strKeyId);
        wfmRegisterStu.btnEdit_Click(strCommandName, strKeyId);
      },

      async ddlIdXzCollege_SelectedIndexChanged() {
        const strId_college = this.idXzCollege;
        if (IsNullOrEmpty(strId_college) == false) {
          await XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache(
            this.refDivEdit,
            'ddlIdXzMajor',
            strId_college,
          );
        }
        //            SetDdl_id_Major();
      },

      async ddlIdentityId_SelectedIndexChanged() {
        const strIdentityId = this.identityId;
        if (IsNullOrEmpty(strIdentityId) == true) {
          message.warning('请选择一个用户身份');
          this.ddlIdentityId.focus();
          return;
        }
        const objQxUserIdentity = await QxUserIdentity_GetObjByIdentityIdCache(strIdentityId);
        if (objQxUserIdentity == null) return;
        this.userType = objQxUserIdentity.userType;
        switch (objQxUserIdentity.userType) {
          case UserTypeMap.middle_School:
            // this.trIdXzMajor.style.visibility = 'hidden';
            // this.trIdXzMajor.style.display = 'none';
            HideTrObj(this.trIdXzMajor);
            ShowTrObj(this.trIdGrade);
            this.collegeName = '选择学校';
            await XzGrade_BindDdl_IdGradeInDivCache(this.refDivEdit, 'ddlIdGrade');
            break;
          case UserTypeMap.university:
            ShowTrObj(this.trIdXzMajor);
            HideTrObj(this.trIdGrade);
            this.collegeName = '选择学院';
            break;
        }
        await XzClgEx_BindDdl_IdXzCollegeByUserTypeInDivCache(
          this.refDivEdit,
          'ddlIdXzCollege',
          objQxUserIdentity.userType,
        );

        //            SetDdl_id_Major();
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
