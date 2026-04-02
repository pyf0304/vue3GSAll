import { UserTypeMap } from '@/store/modules/types/userType';
// import { userStore } from '@/store/modulesShare/user';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import { XzClg_GetObjByIdXzCollegeCache } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { CurrEduCls_GetObjByIdCurrEduClsAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import {
  QxUserIdentity_BindDdl_IdentityIdInDivCache,
  QxUserIdentity_GetNameByIdentityIdCache,
  QxUserIdentity_GetObjByIdentityIdCache,
} from '@/ts/L3ForWApi/UserManage/clsQxUserIdentityWApi';

import {
  Users_GetObjByUserIdAsync,
  Users_IsExistAsync,
  Users_ReFreshCache,
  Users_UpdateRecordAsync,
} from '@/ts/L3ForWApi/UserManage/clsUsersWApi';
import {
  XzClgEx_BindDdl_IdXzCollegeForvUsersSimInDivCacheEx,
  XzClgEx_GetDepartmentIdInGPByIdCollege,
} from '@/ts/L3ForWApiExShare/BaseInfo/clsXzClgExWApi';
import { CurrEduClsStuEx_AddId_Stu4EduCls } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsStuExWApi';
import { cc_ExamPaperStuRelationEx_ArrangeHomeWork } from '@/ts/L3ForWApiExShare/InteractManage/clscc_ExamPaperStuRelationExWApi';
import { cc_WorkStuRelationEx_GetHomeWork } from '@/ts/L3ForWApiExShare/InteractManage/clscc_WorkStuRelationExWApi';
import { XzGradeBaseEx_BindDdl_idGradeBaseInDivCache } from '@/ts/L3ForWApiExShare/SysPara/clsvXzGradeBaseExWApi';
import {
  StudentInfoEx_GetIdStudentInfoByStuId,
  StudentInfoEx_SynchStudentToPlatform,
  StudentInfoEx_SynchUsersToStudent,
} from '@/ts/L3ForWApiExShare/UserManage_GP/clsStudentInfoExWApi';
import {
  UsersEx_RegisterUser,
  UsersEx_SynchUsersToStudentAndPlatform,
} from '@/ts/L3ForWApiExShare/UserManage_GP/clsUsersExWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetTextAreaValueInDivObj, SetTextAreaValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Redirect } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { message } from '@/utils/myMessage';
import { Users_Edit } from '@/viewsBase/UserManage/Users_Edit';

export class wfmRegisterStu extends Users_Edit {
  public static GetPropValue: (strPropName: string) => string;
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: wfmRegisterStu = <wfmRegisterStu>Users_Edit.GetPageEditObj('wfmRegisterStu');
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'Register':
        objPage.btnRegister_Click();
        break;
      case 'Cancel':
        objPage.btnCancel_Click();
        break;
      case 'ReturnIndex':
        objPage.btnReturnIndex_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'wfmRegisterStu.btn_Click');

        break;
    }
  }
  public async PageLoad() {
    const bolIsSuccess = await this.ShowDialog_Users(this.opType);
    if (bolIsSuccess == false) return;
    await QxUserIdentity_BindDdl_IdentityIdInDivCache(this.divEdit, 'ddlIdentityId');
    await XzClgEx_BindDdl_IdXzCollegeForvUsersSimInDivCacheEx(this.divEdit, 'ddlIdXzCollege');
    await XzGradeBaseEx_BindDdl_idGradeBaseInDivCache(this.divEdit, 'ddlIdGradeBase');
  }

  public async btnRegister_Click() {
    let strMsg = '';
    // const strId_StudentInfo: string = '';
    const userType = wfmRegisterStu.GetPropValue('userType');
    let objUsersEN = null;
    if (IsNullOrEmpty(this.idXzCollege) == true) {
      strMsg = Format('学院不能为空！');

      message.warning(strMsg);
      return;
    }
    if (userType == UserTypeMap.university) {
      if (IsNullOrEmpty(this.idXzMajor) == true) {
        strMsg = Format('专业不能为空！');

        message.warning(strMsg);
        return;
      }
    }
    if (IsNullOrEmpty(this.idGradeBase) == true) {
      strMsg = Format('年级不能为空！');

      message.warning(strMsg);
      return;
    }
    const strDepartmentIdInGP = await XzClgEx_GetDepartmentIdInGPByIdCollege(this.idXzCollege);
    if (IsNullOrEmpty(strDepartmentIdInGP) == true) {
      const objXzClg = await XzClg_GetObjByIdXzCollegeCache(
        this.idXzCollege,
        clsSysPara4WebApi.spIdSchool,
      );
      if (objXzClg == null) return;
      strMsg = Format('学院:{0}在统一平台中没有对应的部门，请联系管理员！', objXzClg.collegeName);

      message.warning(strMsg);
      return;
    }
    if ((await Users_IsExistAsync(this.userId)) == true) {
      message.warning('您申请的用户已被注册！');
      return;
    }
    objUsersEN = new clsUsersEN();

    objUsersEN.SetUserId(this.userId); //用户ID
    objUsersEN.SetUserName(this.userName); //用户名
    //objUsersEN.SetEmail = this.txtIDNumber.Text;//邮箱
    objUsersEN.SetPassword(this.password); //密码
    objUsersEN.SetDepartmentId(strDepartmentIdInGP);
    objUsersEN.SetIdXzCollege(this.idXzCollege);
    objUsersEN.SetIdXzMajor(this.idXzMajor);
    objUsersEN.SetIdGradeBase(this.idGradeBase);
    objUsersEN.SetIdGrade(this.idGrade);

    objUsersEN.SetIsAudit(false);
    objUsersEN.SetUserStateId('02');
    //objUsersEN.SetIdentityID = ddlIdentityId.SelectedValue;
    //if (ddlIdentityId.SelectedValue != "0003")
    //{
    //    objUsersEN.SetIsAudit = true;
    //    objUsersEN.SetIdentityID = "0003";
    //}
    //else
    //{
    //    objUsersEN.SetIsAudit = false;
    //}
    objUsersEN.SetIsRegister(true);
    objUsersEN.SetRegisterDate(clsDateTime.getTodayStr(0));
    objUsersEN.SetUpdDate(clsDateTime.getTodayStr(0));
    objUsersEN.SetMemo(this.reason);
    objUsersEN.SetMobilePhone(this.userId);
    objUsersEN.SetIdentityId(this.identityId); //学生
    const strDefaId_CurrEduCls = clsSysPara4WebApi.spDefaIdCurrEduCls;
    const strReturnInfo = '';
    try {
      const objResult = await UsersEx_RegisterUser(
        objUsersEN,
        strDefaId_CurrEduCls,
        true,
        objUsersEN.userId,
      );
      if (objResult.returnBool == true) {
        if (IsNullOrEmpty(objResult.returnInfo) == false) {
          message.warning(objResult.returnInfo);
          return;
        } else {
          // message.warning('注册成功！');
          this.btnAudit_Click(objUsersEN.userId);
        }
      } else {
        message.warning('注册失败！');
      }
      return;
    } catch (objException) {
      message.warning(`注册失败！${objException}`);
      return;
    }
  }

  public async InsertToDefaCurrEduCls(
    objUsersEN: clsUsersEN,
    strId_StudentInfo: string,
  ): Promise<clsCurrEduClsEN | null> {
    const strDefaId_CurrEduCls = clsSysPara4WebApi.spDefaIdCurrEduCls;
    if (IsNullOrEmpty(strDefaId_CurrEduCls) == true) return null;
    //const strid_Stu = clsStudentInfoBLEx.Getid_StuByStuId_CacheEx(objUsersEN.SetUserId);
    objUsersEN.updUser = objUsersEN.userId;
    const objQxUserIdentity = await QxUserIdentity_GetObjByIdentityIdCache(objUsersEN.identityId);
    if (objQxUserIdentity == null) return null;
    const objStudentInfoEN = await StudentInfoEx_SynchUsersToStudent(objUsersEN);
    if (objStudentInfoEN == null) return null;
    let bolIsAudit = false;
    if (clsSysPara4WebApi.spIsAutoAudit4Register == true) {
      bolIsAudit = await StudentInfoEx_SynchStudentToPlatform(
        objStudentInfoEN.idStudentInfo,
        clsSysPara4WebApi.spIdSchool,
        objQxUserIdentity.identityDesc,
        objUsersEN.userId,
      );
    }
    CurrEduClsStuEx_AddId_Stu4EduCls(
      objStudentInfoEN.idStudentInfo,
      strDefaId_CurrEduCls,
      objUsersEN.userId,
    );

    const objCurrEduClsEN = await CurrEduCls_GetObjByIdCurrEduClsAsync(strDefaId_CurrEduCls);
    if (objCurrEduClsEN == null) return null;
    if (bolIsAudit == true) {
      objCurrEduClsEN.SetStrTag('IsAudit');
    }
    this.ArrangeHomeWork(objStudentInfoEN.idStudentInfo, objUsersEN.userId);
    strId_StudentInfo = objStudentInfoEN.idStudentInfo;
    return objCurrEduClsEN;
  }
  //用户注册
  // public btnRegister_ClickBak()
  // {
  // const clsON:    clsUsersEN = new clsUsersEN();
  //     clsON.SetUserId( this.userId);  //用户ID
  //     clsON.SetUserName(this.userName);//用户名
  //     clsON.SetPassword(this.password);//密码

  //     clsON.SetIdXzCollege( this.idXzCollege);
  //     clsON.SetIdXzMajor( this.idXzMajor);
  //     clsON.SetIdGradeBase( this.idGradeBase);
  //     clsON.SetIsAudit( false);
  //     clsON.SetUserStateId("02");

  //     clsON.SetIsRegister( true);
  //     clsON.SetRegisterDate( clsDateTime.getTodayStr(0));
  //     clsON.SetUpdDate( clsDateTime.getTodayStr(0));
  //     clsON.SetMemo(this.reason);

  //     //获取角色号ID
  //     clsON.SetIdentityID(this.identityID);

  //     if (clsON.identityId == "0" || IsNullOrEmpty(clsON.identityId) == true)
  //     {
  //         message.warning( "注册用户类型不能为空！");
  //         return;
  //     }

  //     if (clsUsers_IsExist(clsON.UserId) == false)
  //     {
  //         bool i = clsUsers_AddNewRecordBySql2(clsON);
  //         if (i == true)
  //         {
  //             lblMessage.Text = "注册成功！";
  //             message.warning( "注册成功！");
  //             //Response.Redirect("Index.aspx");
  //             // 不会弹出询问
  //         }
  //         else
  //         {
  //             message.warning( "注册失败！");
  //         }
  //     }
  //     else
  //     {
  //         lblMessage.Text = "您申请的用户已被注册！";
  //         message.warning( "您申请的用户已被注册！");
  //     }
  // }

  public btnCancel_Click() {
    this.userId = ''; //用户ID
    this.userName = ''; //用户名
    this.password = ''; //密码
    this.reason = '';
    this.identityId = '0';
    this.idXzCollege = '';
  }

  public ddlId_XzCollege_SelectedIndexChanged() {
    const strId_college = this.idXzCollege;
    if (IsNullOrEmpty(strId_college) == false) {
      XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache(this.divEdit, '', strId_college);
    }
    //            SetDdl_id_Major();
  }

  public async ArrangeHomeWork(strid_StudentInfo: string, strOpUser: string) {
    const strDefaId_CurrEduCls = clsSysPara4WebApi.spDefaIdCurrEduCls;

    await cc_ExamPaperStuRelationEx_ArrangeHomeWork(
      strDefaId_CurrEduCls,
      strid_StudentInfo,
      strOpUser,
    );
    await cc_WorkStuRelationEx_GetHomeWork(strid_StudentInfo);
  }

  public btnReturnIndex_Click() {
    // Redirect('Login_TZ.aspx');
    this.HideDialog_Users();
  }
  /**
   * 用户ID (Used In Clear())
   **/
  public set reason(value: string) {
    SetTextAreaValueInDivObj(this.divEdit, 'txtReason', value);
  }
  /**
   * 用户ID (Used In PutDataToClass())
   **/
  public get reason(): string {
    const strValue = GetTextAreaValueInDivObj(this.divEdit, 'txtReason');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  public ddlIdXzCollege_SelectedIndexChanged(ddlIdXzCollege: HTMLSelectElement): void {} //

  /**
   * 审核用户
   **/
  public async btnAudit_Click(strUserId: string) {
    const strThisFuncName = this.btnAudit_Click.name;
    try {
      if (strUserId == '') {
        alert('用户名为空,请检查用户!');
        return '';
      }

      await UsersEx_SynchUsersToStudentAndPlatform(
        [strUserId],
        clsSysPara4WebApi.spIdSchool,
        strUserId,
      );

      const strIdStudentInfo = await StudentInfoEx_GetIdStudentInfoByStuId(strUserId);
      if (strIdStudentInfo == '') {
        const strMsg = `学号:${strUserId}在学生表中不存在,请检查!`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const objUsers = await Users_GetObjByUserIdAsync(strUserId);
      if (objUsers == null) {
        const strMsg = `用户:${strUserId}在用户表中不存在,请检查!`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const strIdentityDesc = await QxUserIdentity_GetNameByIdentityIdCache(objUsers.identityId);
      await StudentInfoEx_SynchStudentToPlatform(
        strIdStudentInfo,
        clsSysPara4WebApi.spIdSchool,
        strIdentityDesc,
        objUsers.userId,
      );
      objUsers.SetIsAudit(true);
      objUsers.SetUserId(objUsers.userId);
      await Users_UpdateRecordAsync(objUsers);

      Users_ReFreshCache();
      alert(`你已经注册并审核成功！等待管理员为你分配相应的教学班,才能使用系统`);
      //      message.success(`审核成功！共审核了${intCount}个用户`);
    } catch (e) {
      const strMsg = Format(
        '审核用户不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
}
