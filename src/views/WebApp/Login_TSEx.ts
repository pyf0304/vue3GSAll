import $ from 'jquery';

import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { clsLoginLogEN } from '@/ts/L0Entity/LogManage/clsLoginLogEN';
import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';

import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';

import { XzClg_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { XzMajor_GetObjLstAsync } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { LoginLog_AddNewRecordAsync } from '@/ts/L3ForWApi/LogManage/clsLoginLogWApi';
import { XzGradeBase_GetObjLstAsync } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';

import { Users_IsExistAsync } from '@/ts/L3ForWApi/UserManage/clsUsersWApi';

import { UsersEx_AddNewRecordAsync } from '@/ts/L3ForWApiExShare/UserManage_GP/clsUsersExWApi';
import { LoginLog_Edit } from '@/viewsBase/LogManage/LoginLog_Edit';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { QxUserIdentity_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsQxUserIdentityWApi';
import { clsQxUserIdentityEN } from '@/ts/L0Entity/UserManage/clsQxUserIdentityEN';
import { clsQxUserRoleRelationEN } from '@/ts/L0Entity/UsersRight/clsQxUserRoleRelationEN';
import { QxUserRoleRelation_GetObjLstAsync } from '@/ts/L3ForWApi/UsersRight/clsQxUserRoleRelationWApi';
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
import { QxUsers_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi';

declare let strUrl_Session_SetString: string;
declare let window: any;
/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Login_TSEx extends LoginLog_Edit {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  //登录方法
  public async btnQuery_Click() {
    let result = '';
    let strWhereCond = '';
    try {
      if (this.userId != '') {
        strWhereCond += ` ${clsQxUsersEN.con_UserId} = '${this.userId}'`;
        if (this.password != '') {
          strWhereCond += ` And ${clsQxUsersEN.con_Password} = '${this.password}'`;
          let arrUsersObjLst: Array<clsQxUsersEN> = [];
          arrUsersObjLst = await QxUsers_GetObjLstAsync(strWhereCond);

          let objUsersEN: clsQxUsersEN = new clsQxUsersEN();

          if (arrUsersObjLst.length != 0) {
            for (objUsersEN of arrUsersObjLst) {
              result = 'ok';

              this.SetSessionAsync('userId', this.userId);
              this.SetSessionAsync('userName', objUsersEN.userName);

              //this.GetUserRoleName();
              //调用登录日志；
              this.AddNewRecordLoginLogSave(result);

              //alert("登录成功！");
              break;
            }
          } else {
            alert('用户名或密码错误！');
          }
        } else {
          alert('请输入密码！');
        }
      } else {
        alert('请输入用户名！');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `登录失败,${e}.`;
      alert(strMsg);
    }
  }

  //通过用户登录ID获取用户的角色名
  public async GetUserRoleName() {
    const divName = this.getDivName();
    if (divName == null) return;
    // let strRoleResult = '';
    const strWhereCond = ` userId='${this.userId}' And QxprjId='0062' order by roleId asc `;
    let arrUserRoleRelationObjLst: Array<clsQxUserRoleRelationEN> = [];
    //获取所有角色，判断是否是教师还是学生；
    arrUserRoleRelationObjLst = await QxUserRoleRelation_GetObjLstAsync(strWhereCond);
    let objUserRoleRelation: clsQxUserRoleRelationEN = new clsQxUserRoleRelationEN();
    //循环判断是否包含教师或学生
    if (arrUserRoleRelationObjLst.length > 0) {
      for (objUserRoleRelation of arrUserRoleRelationObjLst) {
        //00620001 管理员 00620002教师 00620003学生、只要包含其中一个角色那么就跳出
        if (objUserRoleRelation.roleId == '00620001') {
          // strRoleResult = 'admin';

          break;
        } else if (objUserRoleRelation.roleId == '00620002') {
          // strRoleResult = 'teacher';

          break;
        } else if (objUserRoleRelation.roleId == '00620003') {
          // strRoleResult = 'student';
          break;
        }
      }
      //window.location.href = "/WebApp/UserRoleRelation";
      //window.location.href = "/GraduateStudyWebApp/CourseLearning/cc_CourseList";
      if (GetInputValueInDivObj(divName, 'hidStata') == '1') {
        reLogin();
      } else {
        window.location.href = '../WebApp/Indexs';
      }
    }
    const strJson = JSON.stringify(objUserRoleRelation);
    console.log(strJson);
    this.SetSessionAsync('objUserRoleRelation', strJson);
  }

  /* 添加登录日志
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 */
  public async AddNewRecordLoginLogSave(strResult: string) {
    const objLoginLogEN: clsLoginLogEN = new clsLoginLogEN();
    this.PutDataToLoginLogClass_pyf(objLoginLogEN, strResult);
    try {
      const responseText2 = await LoginLog_AddNewRecordAsync(objLoginLogEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        //登录 成功 ，获取用户角色角色存放session；
        this.GetUserRoleName();

        //strIdCurrEduclsstrInfo: string = `添加记录成功!`;
        //
        ////显示信息框
        //alert(strInfo);
      } else {
        const strInfo = `日志添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjLoginLogEN">数据传输的目的类对象</param>
   */
  public async PutDataToLoginLogClass_pyf(pobjLoginLogEN: clsLoginLogEN, strResult: string) {
    pobjLoginLogEN.SetLoginUserId(this.userId); // 登录用户Id
    pobjLoginLogEN.SetLoginLogNumber(this.getNowDateNunber());
    //pobjLoginLogEN.SetLoginIP(LoginIp;// 登录IP
    pobjLoginLogEN.SetLoginIP(''); // 登录IP 先默认为空
    pobjLoginLogEN.SetLoginTime(clsPubFun4Web.getNowDate()); // 登录时间
    pobjLoginLogEN.SetOutTime(''); // 注销时间
    pobjLoginLogEN.SetOnlineTime(''); // 在线时间
    if (strResult == 'ok') {
      pobjLoginLogEN.SetLoginResult('成功'); // 登录结果
    } else {
      pobjLoginLogEN.SetLoginResult('失败'); // 登录结果
    }

    pobjLoginLogEN.SetFailReason(''); // failReason
    pobjLoginLogEN.SetMemo(this.memo); // 备注
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

  //获取带格式的年月日
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
   * 登录用户名
   */
  public set userId(value: string) {
    const divName = this.getDivName();

    SetInputValueInDivObj(divName, 'txtUserId', value);
  }
  /*
   * 登录用户名
   */
  public get userId(): string {
    const divName = this.getDivName();

    return GetInputValueInDivObj(divName, 'txtUserId');
  }

  /*
   * 密码
   */
  public set password(value: string) {
    const divName = this.getDivName();

    SetInputValueInDivObj(divName, 'txtPassword', value);
  }
  /*
   * 密码
   */
  public get password(): string {
    const divName = this.getDivName();

    return GetInputValueInDivObj(divName, 'txtPassword');
  }

  /*
     设置Session    
     <param name = "Key">关键字</param>
     <param name = "Value">值</param>
    */
  public static SetSessionAsync(Key: string, Value: string): Promise<void> {
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: strUrl_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data) {
          //$('#myValue').val(text);
          const strKey = data.key;
          const strValue = data.value;

          //$('#myKey').html(strKey);
          //$('#myValue').html(strValue);
          console.log(strKey + strValue);
        },
      });
    });
  }

  /*
获取Session 关键字的值
<param name = "Key">关键字</param>
<return>值</return>
*/
  public static GetSessionAsync(Key: string): Promise<string> {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: '/Session/GetString',
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
        },
        success(data) {
          const strValue = data.value;

          console.log(Key + strValue);
          resolve(data);
        },
        error: (e: any) => {
          // const strErrMsg = decodeURIComponent(e.responseText);
          reject(e);
        },
      });
    });
  }

  public async btn_Register_Click(strListDiv: string) {
    console.log(strListDiv);
    try {
      await this.BindDdl_idGradeBase('ddlIdGradeBase');
      await this.BindDdl_IdXzCollege('ddlIdXzCollege');
      //const ddl_idXzMajor = await this.BindDdl_idXzMajor("ddlIdXzMajor");
      await this.BindDdl_IdentityID('ddlIdentityId');
    } catch (e: any) {
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
      const arrXzGradeBaseObjLst: Array<clsXzGradeBaseEN> = await XzGradeBase_GetObjLstAsync(
        strWhereCond,
      );
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
      const arrXzClgObjLst: Array<clsXzClgEN> = await XzClg_GetObjLstAsync(strWhereCond);
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
  /// <summary>
  /// 为下拉框获取数据,从表:[UserIdentity]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_IdentityID(ddlIdentityId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlIdentityId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlIdentityId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrUserIdentityObjLst: Array<clsQxUserIdentityEN> = await QxUserIdentity_GetObjLstAsync(
        strWhereCond,
      );
      BindDdl_ObjLst(
        ddlIdentityId,
        arrUserIdentityObjLst,
        clsQxUserIdentityEN.con_IdentityId,
        clsQxUserIdentityEN.con_IdentityDesc,
        '用户身份',
      );
      console.log('完成BindDdl_IdentityID!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //注册方法
  public async btnRegister_Click(strListDiv: string) {
    console.log(strListDiv);
    if (this.idXzCollege == '') {
      alert('学院不能为空！');
      window.location.href = '#pagetwo';
    } else if (this.idXzMajor == '') {
      alert('专业不能为空！');
      window.location.href = '#pagetwo';
    } else if (this.idGradeBase == '') {
      alert('年级不能为空！');
      window.location.href = '#pagetwo';
    } else if (this.identityID == '') {
      alert('身份不能为空！');
      window.location.href = '#pagetwo';
    } else if (this.userId == '') {
      alert('账号不能为空！');
      window.location.href = '#pagetwo';
    } else if (this.userName == '') {
      alert('姓名不能为空！');
      window.location.href = '#pagetwo';
    } else if (this.RePassword == '') {
      alert('密码不能为空！');
      window.location.href = '#pagetwo';
    } else if (this.Re_Password == '') {
      alert('重复密码不能为空！');
      window.location.href = '#pagetwo';
    } else {
      if (this.RePassword == this.Re_Password) {
        await this.AddUserSave().then((jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == true) {
            //alert("注册成功！");
            window.location.href = '#pageLogin';
          }
        });
      } else {
        alert('重复密码不一致！');
        window.location.href = '#pagetwo';
      }
    }
  }

  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddUserSave() {
    const objUsersEN: clsUsersEN = new clsUsersEN();
    this.PutDataToUsersClass(objUsersEN);
    try {
      const responseText = await Users_IsExistAsync(objUsersEN.userId);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `注册账号：${objUsersEN.userId}已经存在，请重新命名！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }
      const responseText2 = await UsersEx_AddNewRecordAsync(objUsersEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `注册成功，请等待管理员审核!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `注册不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `注册记录不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjUsersEN">数据传输的目的类对象</param>
   */
  public PutDataToUsersClass(pobjUsersEN: clsUsersEN) {
    pobjUsersEN.SetUserId(this.ReUserId); // 用户ID
    pobjUsersEN.SetUserName(this.userName); // 用户名
    pobjUsersEN.SetUserStateId('02'); // 用户状态Id
    pobjUsersEN.SetPassword(this.RePassword); // password
    pobjUsersEN.SetIdGradeBase(this.idGradeBase); // 年级流水号
    pobjUsersEN.SetIdXzCollege(this.idXzCollege); // 学院流水号
    pobjUsersEN.SetIdXzMajor(this.idXzMajor); // 专业流水号

    pobjUsersEN.SetEmail(this.email); // 电子邮箱
    pobjUsersEN.SetIdentityId(this.identityID); // 身份编号
    pobjUsersEN.SetIsRegister(true); // isRegister
    pobjUsersEN.SetRegisterDate(this.getNowDateNunber()); // registerDate
    pobjUsersEN.SetUpdDate(this.getNowDateNunber()); // 修改日期
    pobjUsersEN.SetUpdUser(this.userId); // 修改人
    pobjUsersEN.SetMemo('移动端注册'); // 备注
  }

  /*
   * 年级流水号
   */
  public set idGradeBase(value: string) {
    const divName = this.getDivName();

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

  /*
   * 身份编号
   */
  public set identityID(value: string) {
    const divName = this.getDivName();

    SetSelectValueByIdInDivObj(divName, 'ddlIdentityId', value);
  }
  /*
   * 身份编号
   */
  public get identityID(): string {
    const divName = this.getDivName();

    return GetSelectValueInDivObj(divName, 'ddlIdentityId');
  }

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

  /*
   * 用户ID
   */
  public set ReUserId(value: string) {
    const divName = this.getDivName();

    SetInputValueInDivObj(divName, 'txtReUserId', value);
  }
  /*
   * 用户ID
   */
  public get ReUserId(): string {
    const divName = this.getDivName();

    return GetInputValueInDivObj(divName, 'txtReUserId');
  }
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
   * password
   */
  public set Re_Password(value: string) {
    const divName = this.getDivName();

    SetInputValueInDivObj(divName, 'txtRe_Password', value);
  }
  /*
   * password
   */
  public get Re_Password(): string {
    const divName = this.getDivName();

    return GetInputValueInDivObj(divName, 'txtRe_Password');
  }

  public SetSessionAsync(Key: string, Value: string): Promise<void> {
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: strUrl_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(`strKey, strValue=${strKey}${strValue}`);
        },
      });
    });
  }
}
