<template>
  <!-- 编辑层 -->

  <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
    <table style="width: 100%" id="tabLayout" cellspacing="2" cellpadding="2" class="msgtable">
      <tr>
        <td style="text-align: right">
          <label id="lblRoleID" CssClass="NameControl">用户类型</label>
        </td>
        <td>
          <select id="ddlIdentityId" Width="200px"> </select>
        </td>
      </tr>
      <tr id="STang">
        <td style="text-align: right">
          <label id="Label1" CssClass="NameControl">选择学院</label>
        </td>
        <td>
          <select
            id="ddlIdXzCollege"
            Width="200px"
            OnSelectedIndexChanged="ddlIdXzCollege_SelectedIndexChanged"
            AutoPostBack="True"
          ></select>
        </td>
      </tr>
      <tr id="Tr1">
        <td style="text-align: right">
          <label id="Label2" CssClass="NameControl">选择专业</label>
        </td>
        <td>
          <select id="ddlIdXzMajor" Width="200px"></select>
        </td>
      </tr>
      <tr>
        <td style="text-align: right">
          <label id="lblid_Grade" CssClass="NameControl">年级</label>
        </td>
        <td class="ValueTD" style="width: 186px; height: 24px">
          <select id="ddlIdGradeBase" CssClass="ValueControl" Width="220px"> </select>
        </td>
      </tr>
      <tr>
        <td style="text-align: right; width: 30%">
          <label id="lblUserId" CssClass="NameControl">账号</label>
        </td>
        <td>
          <input
            id="txtUserId"
            CssClass="input w380 required"
            MaxLength="50"
            minlength="3"
            Width="200px"
          />
        </td>
      </tr>
      <tr>
        <td style="text-align: right">
          <label id="lblUserName" CssClass="NameControl">姓名</label>
        </td>
        <td class="ValueTD">
          <input
            id="txtUserName"
            CssClass="input w380 required"
            MaxLength="50"
            minlength="2"
            Width="200px"
          />
        </td>
      </tr>
      <tr>
        <td style="text-align: right">
          <label id="lblPassword" CssClass="NameControl">密码</label>
        </td>
        <td class="ValueTD">
          <input
            id="txtPassword"
            CssClass="input w380 required"
            MaxLength="50"
            TextMode="Password"
            minlength="3"
            Width="200px"
          />
        </td>
      </tr>
      <tr>
        <td style="text-align: right">
          <label id="lblPwds" CssClass="NameControl">确认密码</label>
        </td>
        <td class="ValueTD">
          <input
            id="txtPwdTwo"
            TextMode="Password"
            CssClass="input w380 required"
            MaxLength="50"
            minlength="3"
            Width="200px"
          />
          <asp:CompareValidator
            id="CompareValidator1"
            ControlToCompare="txtPassword"
            ControlToValidate="txtPwdTwo"
            ErrorMessage="两次密码输入不一致"
            ForeColor="Red"
          ></asp:CompareValidator>
        </td>
      </tr>

      <tr>
        <td style="text-align: right">
          <label id="lblReason" CssClass="NameControl">备注</label>
        </td>
        <td class="ValueTD">
          <input
            id="txtReason"
            CssClass="w380"
            MaxLength="500"
            minlength="3"
            Width="300px"
            TextMode="MultiLine"
            Height="50px"
          />
        </td>
      </tr>
      <tr>
        <td class="NameTD" style="text-align: center"></td>
        <td class="ValueTD">
          <asp:Button
            id="btnRegister"
            Text="提交"
            Width="80px"
            Height="24px"
            CssClass="Button_Defa"
            OnClick="btnRegister_Click"
          />

          &nbsp;&nbsp;
          <asp:Button
            id="btnCancel"
            Text="重置"
            Width="80px"
            Height="24px"
            CssClass="Button_Defa"
            OnClick="btnCancel_Click"
          />
          &nbsp; &nbsp;<asp:Button
            id="btnReturnIndex"
            Text="返回登录"
            Width="80px"
            Height="24px"
            CssClass="Button_Defa"
            OnClick="btnReturnIndex_Click"
          />
        </td>
      </tr>
      <tr>
        <td colspan="3"> <label id="lblMessage" Text="" ForeColor="Red"> </label></td>
      </tr>
    </table>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { gs_RelaTypeCRUDEx } from '@/viewsShare/Knowledges/gs_RelaTypeCRUDEx';
  import { gs_RelaType_EditEx } from '@/viewsShare/Knowledges/gs_RelaType_EditEx';
  export default defineComponent({
    name: 'RegisterStu',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('知识点关系类型表编辑');
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
        //gs_RelaType_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btngs_RelaType_Edit_Click(strCommandName: string, strKeyId: string) {
        gs_RelaType_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_gs_RelaType(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new gs_RelaType_EditEx('', new gs_RelaTypeCRUDEx());
        objPage.btnSubmit_Click();
      },
    },
  });
</script>
<style scoped></style>
