using com.taishsoft.datetime;
using CommFunc4WebForm;
using ExamLib.BusinessLogic;
using ExamLib.BusinessLogicEx;
using ExamLib.Entity;
using System;
using System.Collections.Generic;

namespace ExamLib.Webform
{
    public partial class RegisterStu : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                clsUserIdentityBL.BindDdl_IdentityID(ddlIdentityID);
                clsXzClgBLEx.BindDdl_id_XzCollegeEx(this.ddlId_XzCollege);
                clsXzGradeBaseBLEx.BindDdl_id_GradeBaseEx(ddlid_GradeBase);
            }
        }
        protected void btnRegister_ClickBak201912242(object sender, EventArgs e)
        {
            string strMsg = "";
            string strId_StudentInfo = "";



            clsUsersEN objUsersEN = null;
            if (string.IsNullOrEmpty(Id_XzCollege) == true)
            {
                strMsg = string.Format("学院不能为空！");
                lblMessage.Text = strMsg;
                clsCommonJsFunc.Alert(this, strMsg);
                return;
            }
            if (string.IsNullOrEmpty(id_XzMajor) == true)
            {
                strMsg = string.Format("专业不能为空！");
                lblMessage.Text = strMsg;
                clsCommonJsFunc.Alert(this, strMsg);
                return;
            }
            if (string.IsNullOrEmpty(id_GradeBase) == true)
            {
                strMsg = string.Format("年级不能为空！");
                lblMessage.Text = strMsg;
                clsCommonJsFunc.Alert(this, strMsg);
                return;
            }
            string strDepartmentIdInGP = clsXzClgBLEx.GetDepartmentIdInGPById_College(Id_XzCollege);
            if (string.IsNullOrEmpty(strDepartmentIdInGP) == true)
            {
                clsXzClgEN objXzClg = clsXzClgBL.GetObjByid_XzCollege_Cache(Id_XzCollege);
                strMsg = string.Format("学院:{0}在统一平台中没有对应的部门，请联系管理员！", objXzClg.CollegeName);
                lblMessage.Text = strMsg;
                clsCommonJsFunc.Alert(this, strMsg);
                return;
            }
            if (clsUsersBL.IsExist(this.txtUserId.Text) == true)
            {
                lblMessage.Text = "您申请的用户已被注册！";
                clsCommonJsFunc.Alert(this, "您申请的用户已被注册！");
                return;
            }
                objUsersEN = new clsUsersEN();

            objUsersEN.UserId = this.txtUserId.Text;  //用户ID
            objUsersEN.UserName = this.txtUserName.Text;//用户名
            //objUsersEN.Email = this.txtIDNumber.Text;//邮箱
            objUsersEN.Password = this.txtPassword.Text;//密码
            objUsersEN.DepartmentId = strDepartmentIdInGP;
            objUsersEN.id_XzCollege = Id_XzCollege;
            objUsersEN.id_XzMajor = id_XzMajor;
            objUsersEN.id_GradeBase = id_GradeBase;
            objUsersEN.IsAudit = false;
            objUsersEN.UserStateId = "02";
            //objUsersEN.IdentityID = ddlIdentityID.SelectedValue;
            //if (ddlIdentityID.SelectedValue != "0003")
            //{
            //    objUsersEN.IsAudit = true;
            //    objUsersEN.IdentityID = "0003";
            //}
            //else
            //{
            //    objUsersEN.IsAudit = false;
            //}
            objUsersEN.IsRegister = true;
            objUsersEN.RegisterDate = clsDateTime.getTodayStr(0);
            objUsersEN.UpdDate = clsDateTime.getTodayStr(0);
            objUsersEN.Memo = this.txtReason.Text;
            objUsersEN.MobilePhone = this.txtUserId.Text;
            objUsersEN.IdentityID = IdentityID;//学生


            bool bolResult = clsUsersBL.AddNewRecordBySql2(objUsersEN);

            if (bolResult == false)
            {
                clsCommonJsFunc.Alert(this, "注册失败！");
                return;
            }
            //添加用户到学生表中

            clsStudentInfoEN objStudentInfoEN = clsStudentInfoBLEx.SynchUsersToStudent(objUsersEN, objUsersEN.UserId);
            //同步到统一平台，
            bool bolIsAudit = false;
            if (clsMyConfig.spIsAutoAudit4Register == true)
            {
                bolIsAudit = clsStudentInfoBLEx.SynchStudentToPlatform(objStudentInfoEN.id_StudentInfo, clsMyConfig.spSchool, objUsersEN.UserId);
            }
            string strDefaId_CurrEduCls = clsMyConfig.spDefaId_CurrEduCls;
            if (string.IsNullOrEmpty(strDefaId_CurrEduCls) == true) return;

            clsCurrEduClsEN objCurrEduClsEN = clsCurrEduClsBL.GetObjByid_CurrEduCls(strDefaId_CurrEduCls);
            if (objCurrEduClsEN == null)
            {
                strMsg = string.Format("注册成功！", objCurrEduClsEN.EduClsName);
                lblMessage.Text = strMsg;
                clsCommonJsFunc.Alert(this, strMsg);
                return;
            }
            clsCurrEduClsStuBLEx.AddId_Stu4EduCls(objStudentInfoEN.id_StudentInfo, strDefaId_CurrEduCls, objUsersEN.UserId);
            ArrangeHomeWork(objStudentInfoEN.id_StudentInfo);

            //clsCurrEduClsEN objCurrEduClsEN = InsertToDefaCurrEduCls(objUsersEN, ref strId_StudentInfo);

            if (bolIsAudit == true)
            {
                strMsg = string.Format("注册成功！并且已经插入到学习班:[{0}],现在就可以参加网上学习并完成作业！", objCurrEduClsEN.EduClsName);
            }
            else
            {
                strMsg = string.Format("注册成功！并且已经插入到学习班:[{0}],明天就可以参加网上学习并完成作业！", objCurrEduClsEN.EduClsName);
            }
            lblMessage.Text = strMsg;
            clsCommonJsFunc.Alert(this, strMsg);
            //Response.Redirect("Index.aspx");
            // 不会弹出询问



        }

        protected void btnRegister_Click(object sender, EventArgs e)
        {
            string strMsg = "";
            string strId_StudentInfo = "";



            clsUsersEN objUsersEN = null;
            if (string.IsNullOrEmpty(Id_XzCollege) == true)
            {
                strMsg = string.Format("学院不能为空！");
                lblMessage.Text = strMsg;
                clsCommonJsFunc.Alert(this, strMsg);
                return;
            }
            if (string.IsNullOrEmpty(id_XzMajor) == true)
            {
                strMsg = string.Format("专业不能为空！");
                lblMessage.Text = strMsg;
                clsCommonJsFunc.Alert(this, strMsg);
                return;
            }
            if (string.IsNullOrEmpty(id_GradeBase) == true)
            {
                strMsg = string.Format("年级不能为空！");
                lblMessage.Text = strMsg;
                clsCommonJsFunc.Alert(this, strMsg);
                return;
            }
            string strDepartmentIdInGP = clsXzClgBLEx.GetDepartmentIdInGPById_College(Id_XzCollege);
            if (string.IsNullOrEmpty(strDepartmentIdInGP) == true)
            {
                clsXzClgEN objXzClg = clsXzClgBL.GetObjByid_XzCollege_Cache(Id_XzCollege);
                strMsg = string.Format("学院:{0}在统一平台中没有对应的部门，请联系管理员！", objXzClg.CollegeName);
                lblMessage.Text = strMsg;
                clsCommonJsFunc.Alert(this, strMsg);
                return;
            }
            if (clsUsersBL.IsExist(this.txtUserId.Text) == true)
            {
                lblMessage.Text = "您申请的用户已被注册！";
                clsCommonJsFunc.Alert(this, "您申请的用户已被注册！");
                return;
            }
            objUsersEN = new clsUsersEN();

            objUsersEN.UserId = this.txtUserId.Text;  //用户ID
            objUsersEN.UserName = this.txtUserName.Text;//用户名
            //objUsersEN.Email = this.txtIDNumber.Text;//邮箱
            objUsersEN.Password = this.txtPassword.Text;//密码
            objUsersEN.DepartmentId = strDepartmentIdInGP;
            objUsersEN.id_XzCollege = Id_XzCollege;
            objUsersEN.id_XzMajor = id_XzMajor;
            objUsersEN.id_GradeBase = id_GradeBase;
            objUsersEN.IsAudit = false;
            objUsersEN.UserStateId = "02";
            //objUsersEN.IdentityID = ddlIdentityID.SelectedValue;
            //if (ddlIdentityID.SelectedValue != "0003")
            //{
            //    objUsersEN.IsAudit = true;
            //    objUsersEN.IdentityID = "0003";
            //}
            //else
            //{
            //    objUsersEN.IsAudit = false;
            //}
            objUsersEN.IsRegister = true;
            objUsersEN.RegisterDate = clsDateTime.getTodayStr(0);
            objUsersEN.UpdDate = clsDateTime.getTodayStr(0);
            objUsersEN.Memo = this.txtReason.Text;
            objUsersEN.MobilePhone = this.txtUserId.Text;
            objUsersEN.IdentityID = IdentityID;//学生
            string strDefaId_CurrEduCls = clsMyConfig.spDefaId_CurrEduCls;
            string strReturnInfo = "";
            try
            {
                bool bolIsResult = clsUsersBLEx.RegisterUser(objUsersEN, strDefaId_CurrEduCls, ref strReturnInfo);
                if (bolIsResult == true)
                {
                    if (string.IsNullOrEmpty(strReturnInfo) == false)
                    {
                        clsCommonJsFunc.Alert(this, strReturnInfo);
                        return;
                    }
                    else
                    {
                        clsCommonJsFunc.Alert(this, "注册成功！");
                    }
                }
                else
                {
                    clsCommonJsFunc.Alert(this, "注册失败！");
                }
                return;
            }
            catch(Exception objException)
            {
                clsCommonJsFunc.Alert(this, "注册失败！" + objException.Message);
                return;
            }
          
        }

        //用户注册
        protected void btnRegister_ClickBak20191224(object sender, EventArgs e)
        {
            string strMsg = "";
            string strId_StudentInfo = "";
            clsUsersEN objUsersEN = null;
            if (string.IsNullOrEmpty(Id_XzCollege) == true)
            {
                strMsg = string.Format("学院不能为空！");
                lblMessage.Text = strMsg;
                clsCommonJsFunc.Alert(this, strMsg);
                return;
            }
            if (string.IsNullOrEmpty(id_XzMajor) == true)
            {
                strMsg = string.Format("专业不能为空！");
                lblMessage.Text = strMsg;
                clsCommonJsFunc.Alert(this, strMsg);
                return;
            }
            if (string.IsNullOrEmpty(id_GradeBase) == true)
            {
                strMsg = string.Format("年级不能为空！");
                lblMessage.Text = strMsg;
                clsCommonJsFunc.Alert(this, strMsg);
                return;
            }
            string strDepartmentIdInGP = clsXzClgBLEx.GetDepartmentIdInGPById_College(Id_XzCollege);
            if (string.IsNullOrEmpty(strDepartmentIdInGP) == true)
            {
                clsXzClgEN objXzClg = clsXzClgBL.GetObjByid_XzCollege_Cache(Id_XzCollege);
                strMsg = string.Format("学院:{0}在统一平台中没有对应的部门，请联系管理员！", objXzClg.CollegeName);
                lblMessage.Text = strMsg;
                clsCommonJsFunc.Alert(this, strMsg);
                return;
            }
            if (btnRegister.Text == "确认修改")
            {
                string strUserId = clsCommonSession.UserId;
                objUsersEN = clsUsersBL.GetObjByUserId(strUserId);

                objUsersEN.UserName = this.txtUserName.Text;//用户名
                                                            //objUsersEN.Email = this.txtIDNumber.Text;//邮箱
                objUsersEN.Password = this.txtPassword.Text;//密码
           
                objUsersEN.DepartmentId = strDepartmentIdInGP;
                objUsersEN.id_XzCollege = Id_XzCollege;
                objUsersEN.id_XzMajor = id_XzMajor;
                objUsersEN.id_GradeBase = id_GradeBase;

                //objUsersEN.IsAudit = false;
                objUsersEN.UserStateId = "02";

                //objUsersEN.IsRegister = true;
                objUsersEN.RegisterDate = clsDateTime.getTodayStr(0);
                objUsersEN.UpdDate = clsDateTime.getTodayStr(0);
                objUsersEN.Memo = this.txtReason.Text;
                objUsersEN.MobilePhone = this.txtUserId.Text;
                objUsersEN.IdentityID = "04";//学生
                
             
                try
                {
                    clsUsersBL.UpdateBySql2(objUsersEN);

                    clsCurrEduClsEN objCurrEduClsEN = InsertToDefaCurrEduCls(objUsersEN, ref strId_StudentInfo);
           
                    if (objCurrEduClsEN != null)
                    {
                        strMsg = string.Format("修改成功！并且已经插入到学习班:[{0}],明天就可以参加网上学习并完成作业！", objCurrEduClsEN.EduClsName);
                    }
                    else
                    {
                        strMsg = string.Format("修改成功！明天就可以参加网上学习并完成作业！", objCurrEduClsEN.EduClsName);

                    }
                    lblMessage.Text = strMsg;
                    clsCommonJsFunc.Alert(this, strMsg);

                    //Response.Redirect("Index.aspx");
                    // 不会弹出询问
                }
                catch (Exception objException)
                {
                    clsCommonJsFunc.Alert(this, objException.Message);
                }
                return;
            }
            objUsersEN = new clsUsersEN();
            
            objUsersEN.UserId = this.txtUserId.Text;  //用户ID
            objUsersEN.UserName = this.txtUserName.Text;//用户名
            //objUsersEN.Email = this.txtIDNumber.Text;//邮箱
            objUsersEN.Password = this.txtPassword.Text;//密码
            objUsersEN.DepartmentId = strDepartmentIdInGP;
            objUsersEN.id_XzCollege = Id_XzCollege;
            objUsersEN.id_XzMajor = id_XzMajor;
            objUsersEN.id_GradeBase = id_GradeBase;
            objUsersEN.IsAudit = false;
            objUsersEN.UserStateId = "02";
            //objUsersEN.IdentityID = ddlIdentityID.SelectedValue;
            //if (ddlIdentityID.SelectedValue != "0003")
            //{
            //    objUsersEN.IsAudit = true;
            //    objUsersEN.IdentityID = "0003";
            //}
            //else
            //{
            //    objUsersEN.IsAudit = false;
            //}
            objUsersEN.IsRegister = true;
            objUsersEN.RegisterDate = clsDateTime.getTodayStr(0);
            objUsersEN.UpdDate = clsDateTime.getTodayStr(0);
            objUsersEN.Memo = this.txtReason.Text;
            objUsersEN.MobilePhone = this.txtUserId.Text;
            objUsersEN.IdentityID = IdentityID;//学生


            if (clsUsersBL.IsExist(objUsersEN.UserId) == false)
            {
                bool bolResult = clsUsersBL.AddNewRecordBySql2(objUsersEN);
             
                if (bolResult == true)
                {                   
                    clsCurrEduClsEN objCurrEduClsEN = InsertToDefaCurrEduCls(objUsersEN, ref strId_StudentInfo);
                    if (objCurrEduClsEN != null)
                    {
                        if (objCurrEduClsEN._StrTag == "IsAudit")
                        {
                            strMsg = string.Format("注册成功！并且已经插入到学习班:[{0}],现在就可以参加网上学习并完成作业！", objCurrEduClsEN.EduClsName);
                        }
                        else
                        {
                            strMsg = string.Format("注册成功！并且已经插入到学习班:[{0}],明天就可以参加网上学习并完成作业！", objCurrEduClsEN.EduClsName);
                        }
                    }
                    else
                    {
                        strMsg = string.Format("注册成功！明天就可以参加网上安全竞赛！", objCurrEduClsEN.EduClsName);

                    }
                    lblMessage.Text = strMsg;
                    clsCommonJsFunc.Alert(this, strMsg);
                    //Response.Redirect("Index.aspx");
                    // 不会弹出询问
                }
                else
                {
                    clsCommonJsFunc.Alert(this, "注册失败！");
                }
            }
            else
            {
                lblMessage.Text = "您申请的用户已被注册！";
                clsCommonJsFunc.Alert(this, "您申请的用户已被注册！");
            }
        }
        private clsCurrEduClsEN InsertToDefaCurrEduCls(clsUsersEN objUsersEN, ref string strId_StudentInfo)
        {
            string strDefaId_CurrEduCls = clsMyConfig.spDefaId_CurrEduCls;
            if (string.IsNullOrEmpty(strDefaId_CurrEduCls) == true) return null;
            //string strid_Stu = clsStudentInfoBLEx.Getid_StuByStuId_CacheEx(objUsersEN.UserId);
            clsStudentInfoEN objStudentInfoEN = clsStudentInfoBLEx.SynchUsersToStudent(objUsersEN, objUsersEN.UserId);
            bool bolIsAudit = false;
            if (clsMyConfig.spIsAutoAudit4Register == true)
            {
                bolIsAudit = clsStudentInfoBLEx.SynchStudentToPlatform(objStudentInfoEN.id_StudentInfo, clsMyConfig.spSchool, objUsersEN.UserId);
            }
            clsCurrEduClsStuBLEx.AddId_Stu4EduCls(objStudentInfoEN.id_StudentInfo, strDefaId_CurrEduCls, objUsersEN.UserId);

            clsCurrEduClsEN objCurrEduClsEN = clsCurrEduClsBL.GetObjByid_CurrEduCls(strDefaId_CurrEduCls);
            if (bolIsAudit == true)
            {
                objCurrEduClsEN._StrTag = "IsAudit";
            }
            ArrangeHomeWork(objStudentInfoEN.id_StudentInfo);
            strId_StudentInfo = objStudentInfoEN.id_StudentInfo;
            return objCurrEduClsEN;
        }
        //用户注册
        protected void btnRegister_ClickBak(object sender, EventArgs e)
        {
            clsUsersEN clsON = new clsUsersEN();
            clsON.UserId = this.txtUserId.Text;  //用户ID
            clsON.UserName = this.txtUserName.Text;//用户名
            clsON.Password = this.txtPassword.Text;//密码

            clsON.id_XzCollege = this.ddlId_XzCollege.SelectedValue.ToString();
            clsON.id_XzMajor = this.id_XzMajor;
            clsON.id_GradeBase = this.id_GradeBase;
            clsON.IsAudit = false;
            clsON.UserStateId = "02";
            //clsON.IdentityID = ddlIdentityID.SelectedValue;
            //if (ddlIdentityID.SelectedValue != "0003")
            //{
            //    clsON.IsAudit = true;
            //    clsON.IdentityID = "0003";
            //}
            //else
            //{
            //    clsON.IsAudit = false;
            //}
            clsON.IsRegister = true;
            clsON.RegisterDate = clsDateTime.getTodayStr(0);
            clsON.UpdDate = clsDateTime.getTodayStr(0);
            clsON.Memo = this.txtReason.Text;

            //获取角色号ID
            clsON.IdentityID = this.ddlIdentityID.SelectedValue;

            if (clsON.IdentityID == "0" || string.IsNullOrEmpty(clsON.IdentityID) == true)
            {
                lblMessage.Text = "注册用户类型不能为空！";
                return;
            }

            if (clsUsersBL.IsExist(clsON.UserId) == false)
            {
                bool i = clsUsersBL.AddNewRecordBySql2(clsON);
                if (i == true)
                {
                    lblMessage.Text = "注册成功！";
                    clsCommonJsFunc.Alert(this, "注册成功！");
                    //Response.Redirect("Index.aspx");
                    // 不会弹出询问
                }
                else
                {
                    clsCommonJsFunc.Alert(this, "注册失败！");
                }
            }
            else
            {
                lblMessage.Text = "您申请的用户已被注册！";
                clsCommonJsFunc.Alert(this, "您申请的用户已被注册！");
            }
        }

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            this.txtUserId.Text = "";  //用户ID
            this.txtUserName.Text = "";//用户名
            this.txtPassword.Text = "";//密码
            this.txtReason.Text = "";
            ddlIdentityID.SelectedIndex = 0;
            ddlId_XzCollege.SelectedIndex = 0;
            txtReason.Text = "";
        }

        protected void ddlId_XzCollege_SelectedIndexChanged(object sender, EventArgs e)
        {
            string strId_college = ddlId_XzCollege.SelectedValue.ToString();
            if (string.IsNullOrEmpty(strId_college) == false)
            {
          clsXzMajorBLEx.BindDdl_id_XzMajorEx(ddlId_XzMajor, strId_college);
            }
            //            SetDdl_id_Major();
        
    }
      
        ////根据选择类型判断是否显示食堂
        //protected void ddlRoleID_SelectedIndexChanged(object sender, EventArgs e)
        //{
        //    if (this.ddlIdentityID.SelectedValue == "0003")
        //    {
        //        this.STang.Visible = true;
        //    }
        //    else
        //    {
        //        this.STang.Visible = false;
        //    }
        //}
        public string id_XzMajor
        {
            get
            {
                if (ddlId_XzMajor.SelectedValue == "0")
                    return "";
                return ddlId_XzMajor.SelectedValue;
            }
            set
            {
                if (value == "")
                {
                    ddlId_XzMajor.SelectedValue = "0";
                }
                else
                {
                    try
                    {
                        ddlId_XzMajor.SelectedValue = value;
                        if (ddlId_XzMajor.SelectedIndex > 0)
                        {
                            string strId_Major = ddlId_XzMajor.SelectedValue.ToString();
                       
                        }
                    }
                    catch (Exception objException)
                    {
                        string ss = objException.Message;
                    }
                }
            }
        }

        public string id_GradeBase
        {
            get
            {
                if (ddlid_GradeBase.SelectedValue == "0")
                    return "";
                return ddlid_GradeBase.SelectedValue;
            }
            set
            {
                if (value == "")
                {
                    ddlid_GradeBase.SelectedValue = "0";
                }
                else
                {
                    try
                    {
                        ddlid_GradeBase.SelectedValue = value;
                    }
                    catch (Exception objException)
                    {
                        string strSS = objException.Message;
                    }
                }
            }
        }

        public string Id_XzCollege
        {
            get
            {
                if (ddlId_XzCollege.SelectedValue == "0")
                    return "";
                return ddlId_XzCollege.SelectedValue;
            }
            set
            {
                if (value == "")
                {
                    ddlId_XzCollege.SelectedValue = "0";
                }
                else
                {
                    try
                    {
                        ddlId_XzCollege.SelectedValue = value;
                    }
                    catch (Exception objException)
                    {
                        string strSS = objException.Message;
                    }
                }
            }
        }
        public string IdentityID
        {
            get
            {
                if (ddlIdentityID.SelectedValue == "0")
                    return "";
                return ddlIdentityID.SelectedValue;
            }
            set
            {
                if (value == "")
                {
                    ddlIdentityID.SelectedValue = "0";
                }
                else
                {
                    try
                    {
                        ddlIdentityID.SelectedValue = value;
                    }
                    catch (Exception objException)
                    {
                        string strSS = objException.Message;
                    }
                }
            }
        }
        private void ArrangeHomeWork(string strid_StudentInfo)
        {
            string strDefaId_CurrEduCls = clsMyConfig.spDefaId_CurrEduCls;

            //string strCondition = string.Format("{0}='{1}'",
            //    concc_ExamPaperEduClsRela.id_CurrEduCls, strDefaId_CurrEduCls);
            //List<clscc_ExamPaperEduClsRelaEN> arrcc_ExamPaperEduClsRelaENObjLst = clscc_ExamPaperEduClsRelaBL.GetObjLst(strCondition);
            //foreach (clscc_ExamPaperEduClsRelaEN objcc_ExamPaperEduClsRelaEN in arrcc_ExamPaperEduClsRelaENObjLst)
            //{
            //    clscc_ExamPaperStuRelationBLEx.ArrangeHomeWork(objcc_ExamPaperEduClsRelaEN, strid_StudentInfo);
            //}
            clscc_ExamPaperStuRelationBLEx.ArrangeHomeWork(strDefaId_CurrEduCls, strid_StudentInfo);
            clscc_WorkStuRelationBLEx.GetHomeWork(strid_StudentInfo);
        }

        protected void btnReturnIndex_Click(object sender, EventArgs e)
        {
            Response.Redirect("Login_TZ.aspx");
        }
    }
}