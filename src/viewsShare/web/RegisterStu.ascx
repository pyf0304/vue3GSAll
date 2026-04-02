<%@ Control Language="C#" AutoEventWireup="True" CodeBehind="RegisterStu.ascx.cs" 
    Inherits="ExamLib.Webform.RegisterStu" %>

<script src="../../scripts/jquery-1.9.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="../../scripts/jquery-migrate-3.0.0.js"></script>
<script src="../../EhJs/jquery.form.js" type="text/javascript"></script>
<script src="../../EhJs/jquery.validate.min.js" type="text/javascript"></script>
<script src="../../EhJs/messages_cn.js" type="text/javascript"></script>
<script src="../../EhJs/cursorfocus.js" type="text/javascript"></script>

<%--<script type="text/javascript">
    $(function () {
        //表单验证JS
        $("#form1").validate({
            //出错时添加的标签
            errorElement: "span",
            success: function (label) {
                //正确时的样式
                label.text(" ").addClass("success");
            }
        });

    });
</script>--%>

<table style="width: 100%" id="tabLayout" cellspacing="2" cellpadding="2" runat="server" class="msgtable">
    <tr>
        <td align="right">
            <asp:Label ID="lblRoleID" runat="server" CssClass="NameControl">用户类型</asp:Label>
        </td>
        <td>
            <asp:DropDownList ID="ddlIdentityID" runat="server" Width="200px">
            </asp:DropDownList>
        </td>
    </tr>
    <tr runat="server" id="STang">
        <td align="right">
            <asp:Label ID="Label1" runat="server" CssClass="NameControl">选择学院</asp:Label>
        </td>
        <td>
            <asp:DropDownList ID="ddlId_XzCollege" runat="server" Width="200px" OnSelectedIndexChanged="ddlId_XzCollege_SelectedIndexChanged" AutoPostBack="True"></asp:DropDownList>
        </td>
    </tr>
      <tr runat="server" id="Tr1">
        <td align="right">
            <asp:Label ID="Label2" runat="server" CssClass="NameControl">选择专业</asp:Label>
        </td>
        <td>
            <asp:DropDownList ID="ddlId_XzMajor" runat="server" Width="200px"></asp:DropDownList>
        </td>
    </tr>
     <tr>
        <td align="right">
             <asp:Label ID="lblid_Grade" runat="server" CssClass="NameControl">年级</asp:Label>
         </td>
         <td class="ValueTD" style="width: 186px; height: 24px;">
             <asp:DropDownList ID="ddlid_GradeBase" runat="server" CssClass="ValueControl" Width="220px">
             </asp:DropDownList>
         </td>
     </tr>
    <tr>
        <td align="right" style="width: 30%">
            <asp:Label ID="lblUserId" runat="server" CssClass="NameControl">账号</asp:Label>
        </td>
        <td>
            <asp:TextBox ID="txtUserId" runat="server" CssClass="input w380 required" MaxLength="50"
                minlength="3" Width="200px"></asp:TextBox>
        </td>
    </tr>
    <tr>
        <td align="right">
            <asp:Label ID="lblUserName" runat="server" CssClass="NameControl">姓名</asp:Label>
        </td>
        <td class="ValueTD">
            <asp:TextBox ID="txtUserName" runat="server" CssClass="input w380 required" MaxLength="50"
                minlength="2" Width="200px"></asp:TextBox>
        </td>
    </tr>
    <tr>
        <td align="right">
            <asp:Label ID="lblPassword" runat="server" CssClass="NameControl">密码</asp:Label>
        </td>
        <td class="ValueTD">
            <asp:TextBox ID="txtPassword" runat="server" CssClass="input w380 required" MaxLength="50" TextMode="Password"
                minlength="3" Width="200px"></asp:TextBox>
        </td>
    </tr>
    <tr>
        <td align="right">
            <asp:Label ID="lblPwds" runat="server" CssClass="NameControl">确认密码</asp:Label>
        </td>
        <td class="ValueTD">
            <asp:TextBox ID="txtPwdTwo" runat="server" TextMode="Password" CssClass="input w380 required" MaxLength="50" minlength="3" Width="200px"></asp:TextBox>
            <asp:CompareValidator ID="CompareValidator1" runat="server" ControlToCompare="txtPassword" ControlToValidate="txtPwdTwo" ErrorMessage="两次密码输入不一致" ForeColor="Red"></asp:CompareValidator>
        </td>
    </tr>




    <tr>
        <td align="right">
            <asp:Label ID="lblReason" runat="server" CssClass="NameControl">备注</asp:Label>
        </td>
        <td class="ValueTD">
            <asp:TextBox ID="txtReason" runat="server" CssClass="w380" MaxLength="500" minlength="3" Width="300px" TextMode="MultiLine" Height="50px"></asp:TextBox>
        </td>
    </tr>
    <tr>

        <td class="NameTD" style="text-align: center"></td>
        <td class="ValueTD">

            <asp:Button ID="btnRegister" runat="server" Text="提交" Width="80px" Height="24px" CssClass="Button_Defa" OnClick="btnRegister_Click" />

            &nbsp;&nbsp;
            <asp:Button ID="btnCancel" runat="server" Text="重置" Width="80px" Height="24px" CssClass="Button_Defa" OnClick="btnCancel_Click" />
            &nbsp;            &nbsp;<asp:Button ID="btnReturnIndex" runat="server" Text="返回登录" Width="80px" Height="24px" CssClass="Button_Defa" OnClick="btnReturnIndex_Click" />
                                   
        </td>

    </tr>
    <tr>
        <td colspan="3"> <asp:Label ID="lblMessage" Text="" runat="server" ForeColor="Red">
                        </asp:Label></td>
    </tr>
</table>
