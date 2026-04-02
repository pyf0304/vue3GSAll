<%@ Page Language="C#" AutoEventWireup="True" CodeBehind="wfmRegisterStu.aspx.cs" Inherits="ExamLib.Webform.wfmRegisterStu" %>

<%@ Register Src="../UserManage/RegisterStu.ascx" TagName="RegisterStu" TagPrefix="uc2" %>
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="ie6 ielt8"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="ie7 ielt8"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="ie8"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="en">
<!--<![endif]-->
<head>
    <meta charset="utf-8">
    <title>注册-安全生产月知识竞赛</title>
    <link rel="stylesheet" type="text/css" href="common/css/register.css" />
</head>
<body>
    <%--<form id="form1" runat="server">--%>
    <div class="container">
        <section id="content">
            <form action="" id="form1" runat="server">
                <h1>上海泰泽在线教育平台--用户注册</h1>
                <div>

                    <uc2:RegisterStu ID="RegisterUser1" runat="server" />
                </div>

            </form>
            <!-- form -->

            <!-- button -->
        </section>
        <!-- content -->


    </div>
    <!-- container -->
    <div class="bottom">
        <a href="#">版权所有：上海泰泽信息技术有限公司 联系信箱：pyf@shnu.edu.cn 技术电话：021-51580822 业务电话:021-58402361-861</a>
    </div>
    <%--</form>--%>
</body>
</html>
