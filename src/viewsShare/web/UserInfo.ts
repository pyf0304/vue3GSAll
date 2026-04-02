import { Ref } from 'vue';
import $ from 'jquery';

import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import { clsvUsersEN } from '@/ts/L0Entity/UserManage/clsvUsersEN';

import { XzClg_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { XzMajor_GetObjLstAsync } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { XzGradeBase_GetObjLstAsync } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import {
  Users_GetObjByUserIdAsync,
  Users_UpdateRecordAsync,
} from '@/ts/L3ForWApi/UserManage/clsUsersWApi';

import { vUsers_GetFirstObjAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { UploadResponseData } from '@/ts/FunClass/UploadResponseData';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
import { QxUsers_UpdateRecordAsync } from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi';
import { userStore } from '@/store/modulesShare/user';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';

declare function HideDialog(): void;
declare let window: any;
/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class UserInfo {
  public static uploadResponseData: UploadResponseData = new UploadResponseData();
  protected _className = 'Unknown'; // 基类中的实际字段
  // 定义虚拟属性
  get className(): string {
    return this._className;
  }
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)

  public static EditObj: any;
  public static divEdit: HTMLDivElement;

  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public async PageLoad() {
    const divName = this.getDivName();
    if (divName == null) return;
    try {
      const bolIsShow = await this.ShowDialog_UserInfo('');
      if (bolIsShow == false) return;
      this.Bind_UserInfo();

      HideDivInDivObj(divName, 'divLoading');
      await this.BindDdl_idGradeBase('ddlIdGradeBase');
      await this.BindDdl_IdXzCollege('ddlIdXzCollege');
      await this.BindDdl_idXzMajor2('ddlIdXzMajor');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async Bind_UserInfo() {
    try {
      const strUserId = userStore.getUserId;
      // const strRoleId = userStore.getRoleId;

      if (strUserId != '') {
        $('#hidUserId').val(strUserId);
        //判断角色 教师
        const strWhereCond = `UserID='${strUserId}'`;

        //const objvUsers: clsvUsersEN;
        vUsers_GetFirstObjAsync(strWhereCond).then((jsonData) => {
          const objvUsers: clsvUsersEN = <clsvUsersEN>jsonData;
          if (objvUsers.headPic != '') {
            const strheadPic = `/GraduateStudyWebApp/${objvUsers.headPic}`;
            $('#headPic').attr('src', strheadPic);
            $('#hidheadPicUrl').val(objvUsers.headPic);
          }
          $('#lbl_identityDesc').html(objvUsers.identityDesc);
          $('#lbl_collegeName').html(objvUsers.collegeName);
          $('#lbl_majorName').html(objvUsers.majorName);
          $('#lbl_gradeBaseName').html(objvUsers.gradeBaseName);
          $('#lbl_UserName').html(objvUsers.userName);
          $('#lbl_Email').html(objvUsers.email);
        });
      } else {
        reLogin();
      }

      //const responseRecCount1 = await vUsers_GetRecCountByCondAsync("1=1").then((jsonData) => {
      //    strIdCurrEduclsrecCount = jsonData;
      //    $('#PaperNum').html(recCount);
      //});
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async selectMajor_Click() {
    try {
      //clsPrjInfoEN objPrjInfo = clsPrjInfoBL.GetObjByPrjID_Cache(strPrjId);
      const strWhereCond = ` idXzCollege='${this.idXzCollege}'`;
      await this.BindDdl_idXzMajor('ddlIdXzMajor', strWhereCond);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 为下拉框获取数据,从表:[XzGradeBase]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_idGradeBase(ddlIdGradeBase: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlIdGradeBase);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlIdGradeBase} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrXzGradeBaseObjLst = await XzGradeBase_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlIdGradeBase,
        arrXzGradeBaseObjLst,
        clsXzGradeBaseEN.con_IdGradeBase,
        clsXzGradeBaseEN.con_GradeBaseName,
        '年级',
      );
      console.log('完成BindDdl_idGradeBase!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /// <summary>
  /// 为下拉框获取数据,从表:[XzClg]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_IdXzCollege(ddlIdXzCollege: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlIdXzCollege);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlIdXzCollege} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrXzClgObjLst = await XzClg_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlIdXzCollege,
        arrXzClgObjLst,
        clsXzClgEN.con_IdXzCollege,
        clsXzClgEN.con_CollegeName,
        '学院',
      );
      console.log('完成BindDdl_IdXzCollege!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /// <summary>
  /// 为下拉框获取数据,从表:[XzMajor]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_idXzMajor2(ddlIdXzMajor: string) {
    const strWhereCond = ' 1 =1 ';
    const objDdl = document.getElementById(ddlIdXzMajor);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlIdXzMajor} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrXzMajorObjLst: Array<clsXzMajorEN> = await XzMajor_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlIdXzMajor,
        arrXzMajorObjLst,
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        '专业',
      );
      console.log('完成BindDdl_idXzMajor!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /// <summary>
  /// 为下拉框获取数据,从表:[XzMajor]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_idXzMajor(ddlIdXzMajor: string, strWhereCond: string) {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlIdXzMajor);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlIdXzMajor} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrXzMajorObjLst: Array<clsXzMajorEN> = await XzMajor_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlIdXzMajor,
        arrXzMajorObjLst,
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        '专业',
      );
      console.log('完成BindDdl_idXzMajor!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 根据关键字获取相应的记录的对象
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async btnUpdate_Click() {
    this.btnOKUpd = '确认修改';
    this.Clear();

    const strUserId = userStore.getUserId;

    try {
      const objUsersEN = await Users_GetObjByUserIdAsync(strUserId);
      if (objUsersEN == null) return;
      this.GetDataFromUsersClass(objUsersEN);
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  public Clear() {
    this.idXzCollege = '';
    this.idXzMajor = '';
    this.idGradeBase = '';
    this.email = '';
    this.password = '';
  }

  public GetDataFromUsersClass(pobjUsersEN: clsUsersEN) {
    $('#hidUserId').val(pobjUsersEN.userId); // 登录用户名
    if (pobjUsersEN.headPic != '') {
      const strheadPic = `/GraduateStudyWebApp/${pobjUsersEN.headPic}`;
      $('#EditheadPic').attr('src', strheadPic);
    }

    this.idXzCollege = pobjUsersEN.idXzCollege;
    this.idXzMajor = pobjUsersEN.idXzMajor;
    this.idGradeBase = pobjUsersEN.idGradeBase; // idGradeBase
    this.email = pobjUsersEN.email; // EMail
    this.userName = pobjUsersEN.userName;
    $('#txtUploadheadPicUrl').val('');
  }

  //提交
  public async btnOKUpd_Click(strListDiv: string) {
    console.log(strListDiv);
    if (this.idXzCollege == '') {
      alert('学院不能为空！');
    } else if (this.idXzMajor == '') {
      alert('专业不能为空！');
    } else if (this.idGradeBase == '') {
      alert('年级不能为空！');
    }
    //else if (this.password == "") {
    //    alert("密码不能为空！");

    //}
    //else if (this.RePassword == "") {
    //    alert("重复密码不能为空！");

    //}
    else {
      if (this.password == this.RePassword) {
        const returnBool: boolean = await this.UpdateRecordSave();
        if (returnBool == true) {
          HideDialog();
          this.Bind_UserInfo();
        }
      } else {
        alert('重复密码不一致！');
        //window.location.href = "#pagetwo";
      }
    }
  }

  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateRecordSave(): Promise<boolean> {
    const divName = this.getDivName();
    if (divName == null) return false;
    const objUsersEN: clsUsersEN = new clsUsersEN();
    const objQxUsersEN: clsQxUsersEN = new clsQxUsersEN();
    objUsersEN.SetUserId(userStore.getUserId);
    objQxUsersEN.SetUserId(userStore.getUserId);
    this.PutDataToUsersClass(objUsersEN);
    this.PutDataToUsersClass2(objQxUsersEN);
    objUsersEN.sfUpdFldSetStr = objUsersEN.updFldString; //设置哪些字段被修改(脏字段)
    objQxUsersEN.sfUpdFldSetStr = objQxUsersEN.updFldString;

    try {
      let returnBool = await Users_UpdateRecordAsync(objUsersEN);
      if (returnBool == true) {
        //strIdCurrEduclsstrInfo: string = `修改记录成功!`;
        //
        ////显示信息框
        //alert(strInfo);
      } else {
        const strInfo = `修改记录不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('完成UpdateRecordSave');
      }
      //resolve(jsonData);

      returnBool = await QxUsers_UpdateRecordAsync(objQxUsersEN);
      if (returnBool == true) {
        HideDivInDivObj(divName, 'divLoading');
        this.Bind_UserInfo();
        const strInfo = `修改记录成功!`;

        //显示信息框
        alert(strInfo);
        //刷新用户缓存
        // vUsersSim_ReFreshThisCache(clsSysPara4WebApi.cmPrjId);
      } else {
        const strInfo = `修改记录不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('完成UpdateRecordSave');
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjUsersEN">数据传输的目的类对象</param>
   */
  public PutDataToUsersClass(pobjUsersEN: clsUsersEN) {
    const divName = this.getDivName();
    if (divName == null) return;
    pobjUsersEN.SetIdXzCollege(this.idXzCollege); // 学院流水号
    pobjUsersEN.SetIdXzMajor(this.idXzMajor); // 专业流水号
    pobjUsersEN.SetIdGradeBase(this.idGradeBase); // 年级流水号
    pobjUsersEN.SetEmail(this.email); // 电子邮箱
    if (this.password != '' && this.RePassword != '') {
      pobjUsersEN.SetPassword(this.password); // password
    }
    //else
    //{
    //    alert("密码不能为空！");
    //}
    pobjUsersEN.SetUpdDate(this.getNowDateNunber()); // 修改日期
    pobjUsersEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjUsersEN.SetUserName(this.userName); //用户名
    pobjUsersEN.SetHeadPic(GetInputValueInDivObj(divName, 'hidheadPicUrl')); //头像
  }

  public PutDataToUsersClass2(pobjQxUsersEN: clsQxUsersEN) {
    pobjQxUsersEN.SetIdXzCollege(this.idXzCollege); // 学院流水号
    pobjQxUsersEN.SetEmail(this.email); // 电子邮箱
    if (this.password != '' && this.RePassword != '') {
      pobjQxUsersEN.SetPassword(this.password); // password
    }
    //else {
    //    alert("密码不能为空！");
    //}

    pobjQxUsersEN.SetUpdDate(this.getNowDateNunber()); // 修改日期
    pobjQxUsersEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjQxUsersEN.SetUserName(this.userName);
  }

  /*
   * 获取年月日
   */
  public getNowDate(): string {
    const date = new Date();
    let month: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();
    if (month <= 9) {
      month = `0${month}`;
    }
    if (strDate <= 9) {
      strDate = `0${strDate}`;
    }

    return `${date
      .getFullYear()
      .toString()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
  /*
   * 获取年月日数据串
   */
  public getNowDateNunber(): string {
    const date = new Date();
    let month: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();
    if (month <= 9) {
      month = `0${month}`;
    }
    if (strDate <= 9) {
      strDate = `0${strDate}`;
    }

    return (
      date.getFullYear().toString() +
      month +
      strDate +
      date.getHours() +
      date.getMinutes() +
      date.getSeconds()
    );
  }

  /*
   * 年级流水号
   */
  public set idGradeBase(value: string) {
    const divName = this.getDivName();
    if (divName == null) return;
    SetSelectValueByIdInDivObj(divName, 'ddlIdGradeBase', value);
  }
  /*
   * 年级流水号
   */
  public get idGradeBase(): string {
    const divName = this.getDivName();

    return GetSelectValueInDivObj(divName, 'ddlIdGradeBase');
  }

  /*
   * 学院流水号
   */
  public set idXzCollege(value: string) {
    const divName = this.getDivName();
    if (divName == null) return;
    SetSelectValueByIdInDivObj(divName, 'ddlIdXzCollege', value);
  }
  /*
   * 学院流水号
   */
  public get idXzCollege(): string {
    const divName = this.getDivName();

    return GetSelectValueInDivObj(divName, 'ddlIdXzCollege');
  }

  /*
   * 专业流水号
   */
  public set idXzMajor(value: string) {
    const divName = this.getDivName();

    SetSelectValueByIdInDivObj(divName, 'ddlIdXzMajor', value);
  }
  /*
   * 专业流水号
   */
  public get idXzMajor(): string {
    const divName = this.getDivName();

    return GetSelectValueInDivObj(divName, 'ddlIdXzMajor');
  }

  // /*
  // * 身份编号
  //*/
  // public set identityID(value: string) {
  //     $("#ddlIdentityId").val(value);
  // }
  // /*
  // * 身份编号
  //*/
  // public get identityID(): string {
  //     return $("#ddlIdentityId").val();
  // }

  /*
   * 用户ID
   */
  public set email(value: string) {
    const divName = this.getDivName();

    SetInputValueInDivObj(divName, 'txtEmail', value);
  }
  /*
   * 用户ID
   */
  public get email(): string {
    const divName = this.getDivName();

    return GetInputValueInDivObj(divName, 'txtEmail');
  }

  // /*
  // * 用户ID
  //*/
  // public set ReUserId(value: string) {
  //     $("#txtReUserId").val(value);
  // }
  // /*
  // * 用户ID
  //*/
  // public get ReUserId(): string {
  //     return $("#txtReUserId").val();
  // }
  /*
   * 用户名
   */
  public set userName(value: string) {
    const divName = this.getDivName();

    SetInputValueInDivObj(divName, 'txtUserName', value);
  }
  /*
   * 用户名
   */
  public get userName(): string {
    const divName = this.getDivName();

    return GetInputValueInDivObj(divName, 'txtUserName');
  }
  /*
   * password
   */
  public set password(value: string) {
    const divName = this.getDivName();

    SetInputValueInDivObj(divName, 'txtPassword', value);
  }
  /*
   * password
   */
  public get password(): string {
    const divName = this.getDivName();

    return GetInputValueInDivObj(divName, 'txtPassword');
  }

  /*
   * password
   */
  public set RePassword(value: string) {
    const divName = this.getDivName();

    SetInputValueInDivObj(divName, 'txtRePassword', value);
  }
  /*
   * password
   */
  public get RePassword(): string {
    const divName = this.getDivName();

    return GetInputValueInDivObj(divName, 'txtRePassword');
  }

  /*
   * 设置确定按钮的标题
   */
  public set btnOKUpd(value: string) {
    $('#btnOKUpd').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnOKUpd(): string {
    return $('#btnOKUpd').html();
  }
  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    UserInfo.divEdit = UserInfo.EditObj.$refs.refDivEdit;
    if (UserInfo.divEdit == null) {
      if (UserInfo.times4TestShowDialog < 2) {
        UserInfo.times4TestShowDialog++;
        setTimeout(() => {
          this.getDivName();
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
      return null;
    } else {
      UserInfo.times4TestShowDialog = 0;
    }
    return UserInfo.divEdit;
  }
  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_UserInfo() {
    if (UserInfo.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      UserInfo.EditObj.hideDialog();
    }
  }
  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_UserInfo(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_UserInfo.name;
    if (UserInfo.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (UserInfo.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditRef为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await UserInfo.EditObj.showDialog();
    }
    UserInfo.divEdit = UserInfo.EditObj.$refs.refDivEdit;
    if (UserInfo.divEdit == null) {
      if (UserInfo.times4TestShowDialog < 2) {
        UserInfo.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_UserInfo(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      UserInfo.times4TestShowDialog = 0;
    }
    // if (strOp === 'Add' || strOp === 'AddWithMaxId') {
    //   this.btnSubmitUserInfo = '确认添加';
    //   this.btnCancelUserInfo = '取消添加';
    // } else if (strOp === 'Update') {
    //   this.btnSubmitUserInfo = '确认修改';
    //   this.btnCancelUserInfo = '取消修改';
    // }
    return true;
  }
}
