import { Ref } from 'vue';
import $ from 'jquery';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsLoginLogEN } from '@/ts/L0Entity/LogManage/clsLoginLogEN';

import { cc_Course_GetObjByCourseIdCache } from '@/ts/L3ForWApi/CourseLearning/clscc_CourseWApi';
import { CurrEduCls_GetObjByIdCurrEduClsAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { LoginLog_AddNewRecordAsync } from '@/ts/L3ForWApi/LogManage/clsLoginLogWApi';
import {
  UserDefaValueEx_getUserDefaValue,
  UserDefaValueEx_setUserDefaValue,
} from '@/ts/L3ForWApiExShare/LogManage/clsUserDefaValueExWApi';

import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  GetInputValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { CurrEduClsStuEx_GetIdCurrEduClsListByStuId } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsStuExWApi';
import { CurrEduClsTeacherEx_GetIdCurrEduClsListByTeacherId } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsTeacherExWApi';
import router from '@/router';
import { userStore } from '@/store/modulesShare/user';
import { enumQxUserRoles } from '@/ts/L0Entity/UserManage/clsQxUserRolesEN';
import { clsQxUserRoleRelationEN } from '@/ts/L0Entity/UsersRight/clsQxUserRoleRelationEN';

import { QxUserRoleRelation_GetObjLstAsync } from '@/ts/L3ForWApi/UsersRight/clsQxUserRoleRelationWApi';
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
import { QxUsers_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi';

declare function CloseWindow(): void;

declare let window: any;
/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Login {
  protected _className = 'Unknown'; // 基类中的实际字段
  // 定义虚拟属性
  get className(): string {
    return this._className;
  }
  public static EditObj: any;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';

  protected iShowList: IShowList;
  public static objPageEdit: Login;
  public static objPageEdit2: Login;
  public static objPageEdit3: Login;
  constructor(strClassName: string, objShowList: IShowList) {
    this._className = strClassName;
    this.iShowList = objShowList;
    if (Login.SetPageEdit(this, 1) == true) return;
    if (Login.SetPageEdit(this, 2) == true) return;
    if (Login.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (Login.objPageEdit == null) {
          Login.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = Login.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            Login.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (Login.objPageEdit2 == null) {
          Login.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = Login.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            Login.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (Login.objPageEdit3 == null) {
          Login.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = Login.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            Login.objPageEdit3 = objDataLst;
            return true;
          } else return false;
        }
        break;
      default:
        return false;
      // break;
    }
  }
  public static GetPageEditObj(strClassName: string): any {
    if (Login.objPageEdit != null) {
      const strClassNameOld = Login.objPageEdit.className;
      if (strClassNameOld == strClassName) return Login.objPageEdit;
    }
    if (Login.objPageEdit2 != null) {
      const strClassNameOld = Login.objPageEdit2.className;
      if (strClassNameOld == strClassName) return Login.objPageEdit2;
    }
    if (Login.objPageEdit3 != null) {
      const strClassNameOld = Login.objPageEdit3.className;
      if (strClassNameOld == strClassName) return Login.objPageEdit3;
    }
    return null;
  }
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    // const objPage: Login = new Login();
    const objPage: Login = <Login>Login.GetPageEditObj('Login');
    switch (strCommandName) {
      case 'login': //提交
        objPage.PageLoad();
        break;
      case 'Submit': //提交
        objPage.btnLogin_Click();
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'Login.btnEdit_Click');

        break;
    }
  }
  public async PageLoad() {
    this.opType = 'login';
    const bolIsSuccess = await this.ShowDialog_Login(this.opType);
    if (bolIsSuccess == false) return;
    // 在此处放置用户代码以初始化页面
    // try {
    // } catch (e:any) {
    //   const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
    //   alert(strMsg);
    // }
  }
  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_Login(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_Login.name;
    // if (Login.strPageDispModeId == enumPageDispMode.PopupBox_01) {
    console.log('Login.EditRef:(in ShowDialog_Login)', Login.EditObj);
    await Login.EditObj.showDialog();
    // }
    Login.divEdit = Login.EditObj.$refs.refDivEdit;
    if (Login.divEdit == null) {
      if (Login.times4TestShowDialog < 2) {
        Login.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_Login(strOp);
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
      Login.times4TestShowDialog = 0;
    }
    // if (strOp === 'Add' || strOp === 'AddWithMaxId') {
    //   this.btnSubmitLogin = '确认添加';
    //   this.btnCancelLogin = '取消添加';
    // } else if (strOp === 'Update') {
    //   this.btnSubmitLogin = '确认修改';
    //   this.btnCancelLogin = '取消修改';
    // }
    return true;
  }
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  public async getDefaultCurrEduCls() {
    let strIdCurrEduCls = '';
    let arrIdCurrEduCls;
    switch (userStore.getRoleId) {
      case enumQxUserRoles.Regular_Student_00620003:
        arrIdCurrEduCls = await CurrEduClsStuEx_GetIdCurrEduClsListByStuId(userStore.getUserId);
        if (arrIdCurrEduCls.length > 0) strIdCurrEduCls = arrIdCurrEduCls[0];
        break;
      case enumQxUserRoles.High_School_Student_00620017:
        arrIdCurrEduCls = await CurrEduClsStuEx_GetIdCurrEduClsListByStuId(userStore.getUserId);
        if (arrIdCurrEduCls.length > 0) strIdCurrEduCls = arrIdCurrEduCls[0];
        break;
      case enumQxUserRoles.K_12_Teacher_00620013:
      case enumQxUserRoles.Regular_Teacher_00620002:
        arrIdCurrEduCls = await CurrEduClsTeacherEx_GetIdCurrEduClsListByTeacherId(
          userStore.getUserId,
        );
        if (arrIdCurrEduCls.length > 0) strIdCurrEduCls = arrIdCurrEduCls[0];
        break;
      default:
        arrIdCurrEduCls = await CurrEduClsTeacherEx_GetIdCurrEduClsListByTeacherId(
          userStore.getUserId,
        );
        if (arrIdCurrEduCls.length > 0) strIdCurrEduCls = arrIdCurrEduCls[0];
        break;
    }
    if (arrIdCurrEduCls.length == 0) {
      const strMsg = `当前用户:${userStore.getUserId}没有分配教学班，请联系管理员!`;
      console.error(strMsg);
      alert(strMsg);
      return '';
    }
    if (strIdCurrEduCls == '') {
      const strMsg = Format('新建默认教学班Id不成功，请检查!');
      console.error(strMsg);
      alert(strMsg);
      return '';
    } else {
      await UserDefaValueEx_setUserDefaValue(userStore.getUserId, '默认教学班Id', strIdCurrEduCls);
    }
    return strIdCurrEduCls;
  }
  //登录方法
  public async btnLogin_Click() {
    const divName = this.getDivName();
    if (divName == null) return;
    const strThisFuncName = this.btnLogin_Click.name;
    $('#divLoading').show();
    let result = '';
    let strWhereCond = '';
    try {
      strWhereCond += ` ${clsQxUserRoleRelationEN.con_UserId} = '${this.userId}'`;
      strWhereCond += ` And ${clsQxUsersEN.con_Password} = '${this.password}'`;

      const strWhereCond_PrjId = ` ${clsQxUserRoleRelationEN.con_UserId} = '${this.userId}' And QxprjId = '0062' order by roleId asc `;

      //const responseText = await QxUsers_GetFirstObjAsync(strWhereCond);
      //const objQxUsers: clsQxUsersEN = <clsQxUsersEN>responseText;
      const arrQxUser = await QxUsers_GetObjLstAsync(strWhereCond);

      if (arrQxUser.length == 0) {
        alert(`用户:${this.userId}或密码不正确！`);
        return;
      }

      const arrUserRoleRelation = await QxUserRoleRelation_GetObjLstAsync(strWhereCond_PrjId);
      if (arrUserRoleRelation.length > 0) {
        result = 'ok';
        //调用登录日志；
        userStore.afterLogin(arrUserRoleRelation);

        let strIdCurrEduCls = await UserDefaValueEx_getUserDefaValue(
          userStore.getUserId,
          '默认教学班Id',
        );
        if (IsNullOrEmpty(strIdCurrEduCls) || strIdCurrEduCls == '0') {
          //strCmPrjId = await CMProjectEx_AddDefaCmProject(clsPubSessionStorage.currSelPrjId, clsPubSessionStorage.currSelPrjName, userStore.getUserId);
          strIdCurrEduCls = await this.getDefaultCurrEduCls();
          // if (strIdCurrEduCls == '') {
          //   HideDivInDivObj(divName, 'divLoading');
          //   this.iShowList.BindGvCache('LoginFinish', '');
          //   return;
          // }
        } else {
          // const strWhereCond1 = ` idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
          // 获取教学班学生数据；
          const objCurrEduCls = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);

          if (objCurrEduCls != null) {
            const strCourseId = objCurrEduCls.courseId;

            clsPubLocalStorage.idCurrEduCls = strIdCurrEduCls;
            clsPubLocalStorage.eduClsTypeId = objCurrEduCls.eduClsTypeId;
            clsPubLocalStorage.eduClsName = objCurrEduCls.eduClsName;
            clsPubLocalStorage.courseId = strCourseId;
            const objcc_Course = await cc_Course_GetObjByCourseIdCache(strCourseId);
            if (objcc_Course == null) {
              const strMsg = Format(
                '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
                this.className,
                strThisFuncName,
              );
              console.error(strMsg);
              alert(strMsg);
              return;
            }
            clsPubLocalStorage.courseName = objcc_Course.courseName;
          }
        }

        // if (userStore.getUserId != '') {
        //   if (userStore.getUserId != userStore.getUserId) {
        //     userStore.getUserId = userStore.getUserId;
        //     const strKey = 'idCurrEduCls';
        //     localStorage.removeItem(strKey);
        //   }
        // } else {
        //   userStore.getUserId = userStore.getUserId;
        // }

        HideDivInDivObj(divName, 'divLoading');

        if (GetInputValueInDivObj(divName, 'hidState') == '1') {
          CloseWindow();
        } else {
          // router.push('/index');
        }
        //const responseText1 = await this.GetUserRoleName();
        // vUsersSim_ReFreshThisCache(clsSysPara4WebApi.cmPrjId);
        await this.AddNewRecordLoginLogSave(result);
        this.HideDialog_Login();

        // router.push('/index');
        this.iShowList.BindGvCache('LoginFinish', '');
      } else {
        HideDivInDivObj(divName, 'divLoading');
        alert('用户名或密码错误！');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `登录失败,${e}.`;
      alert(strMsg);
    }
  }

  /* 添加登录日志
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 */
  public async AddNewRecordLoginLogSave(strResult: string) {
    const divName = this.getDivName();
    if (divName == null) return;
    //this.DivName = "divAddNewRecordSave";
    const objLoginLogEN: clsLoginLogEN = new clsLoginLogEN();
    this.PutDataToLoginLogClass(objLoginLogEN, strResult);
    try {
      const responseText2 = await LoginLog_AddNewRecordAsync(objLoginLogEN);
      const returnBool = !!responseText2;
      if (returnBool == false) {
        HideDivInDivObj(divName, 'divLoading');
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
  public PutDataToLoginLogClass(pobjLoginLogEN: clsLoginLogEN, strResult: string) {
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
    //pobjLoginLogEN.SetMemo(this.memo;// 备注
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

  //    /*
  //     设置Session
  //     <param name = "Key">关键字</param>
  //     <param name = "Value">值</param>
  //    */
  //    public static SetSessionAsync(Key: string, Value: string): Promise<void> {
  //        return new Promise(function (resolve, reject) {

  //            $.ajax({
  //                url: strUrl_Session_SetString,
  //                cache: false,
  //                async: false,
  //                type: 'get',
  //                dataType: "json",
  //                data: {
  //                    Key: Key,
  //                    Value: Value
  //                },
  //                success: function (data) {
  //                    //$('#myValue').val(text);
  //                    strIdCurrEduclsstrKey = data.key;
  //                    strIdCurrEduclsstrValue = data.value;

  //                    //$('#myKey').html(strKey);
  //                    //$('#myValue').html(strValue);
  //                    console.log(strKey + strValue);

  //                }

  //            });
  //        });
  //    }

  //    /*
  //获取Session 关键字的值
  //<param name = "Key">关键字</param>
  //<return>值</return>
  //*/
  //    public static GetSessionAsync(Key: string): Promise<string> {
  //        return new Promise(function (resolve, reject) {

  //            $.ajax({
  //                url: "/Session/GetString",
  //                cache: false,
  //                async: false,
  //                type: 'get',
  //                dataType: "json",
  //                data: {
  //                    Key: Key
  //                },
  //                success: function (data) {
  //                    strIdCurrEduclsstrValue = data.value;

  //                    console.log(Key + strValue);
  //                    resolve(data);
  //                },
  //                error: (e:any) => {
  //                    strIdCurrEduclsstrErrMsg = decodeURIComponent(e.responseText)
  //                    reject(e);
  //                }
  //            });
  //        });
  //    }

  //    public async btn_Register_Click(strListDiv: string) {
  //        try {
  //            const ddl_idGradeBase = await this.BindDdl_idGradeBase("ddlIdGradeBase");
  //            const ddl_idXzCollege = await this.BindDdl_IdXzCollege("ddlIdXzCollege");
  //            //const ddl_idXzMajor = await this.BindDdl_idXzMajor("ddlIdXzMajor");
  //            const ddl_IdentityID = await this.BindDdl_IdentityID("ddlIdentityId");
  //        }
  //        catch (e:any) {
  //            strIdCurrEduclsstrMsg: string = ` const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
  //            alert(strMsg);
  //        }
  //    }

  //    public async selectMajor_Click() {
  //        try {
  //            //clsPrjInfoEN objPrjInfo = clsPrjInfoBL.GetObjByPrjID_Cache(strPrjId);
  //            strWhereCond = " idXzCollege='" + this.idXzCollege + "'";
  //            const ddl_idXzMajor = await this.BindDdl_idXzMajor("ddlIdXzMajor", strWhereCond);

  //        }
  //        catch (e:any) {
  //            strIdCurrEduclsstrMsg: string = `获取数据有问题,${e}.`;
  //            alert(strMsg);
  //        }

  //    }

  //    /// <summary>
  //    /// 为下拉框获取数据,从表:[XzGradeBase]中获取
  //    /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  //    /// </summary>
  //    /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  //    public BindDdl_idGradeBase(ddlIdGradeBase: string, strWhereCond: string = "1 =1") {
  //        //strWhereCond = " 1 =1 ";
  //        const objDdl = document.getElementById(ddlIdGradeBase);
  //        if (objDdl == null) {
  //            const strMsg = `下拉框：${ddlIdGradeBase} 不存在！`;
  //            alert(strMsg);
  //            throw (strMsg);
  //        }
  //        return new Promise((resolve, reject) => {
  //            try {
  //                const responseText = XzGradeBase_GetObjLstAsync(strWhereCond).then((jsonData) => {
  //                    strIdCurrEduclsarrXzGradeBaseObjLst: Array<clsXzGradeBaseEN> = <Array<clsXzGradeBaseEN>>jsonData;
  //                    BindDdl_ObjLst(ddlIdGradeBase, arrXzGradeBaseObjLst, clsXzGradeBaseEN.con_IdGradeBase, clsXzGradeBaseEN.con_GradeBaseName, "年级");
  //                    console.log("完成BindDdl_idGradeBase!");
  //                    resolve(jsonData);
  //                });
  //            }
  //            catch (e:any) {
  //                strIdCurrEduclsstrMsg: string = ` const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
  //                alert(strMsg);
  //            }
  //        });
  //    }
  //    /// <summary>
  //    /// 为下拉框获取数据,从表:[XzClg]中获取
  //    /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  //    /// </summary>
  //    /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  //    public BindDdl_IdXzCollege(ddlIdXzCollege: string, strWhereCond: string = "1 =1") {
  //        //strWhereCond = " 1 =1 ";
  //        const objDdl = document.getElementById(ddlIdXzCollege);
  //        if (objDdl == null) {
  //            const strMsg = `下拉框：${ddlIdXzCollege} 不存在！`;
  //            alert(strMsg);
  //            throw (strMsg);
  //        }
  //        return new Promise((resolve, reject) => {
  //            try {
  //                const responseText = XzClg_GetObjLstAsync(strWhereCond).then((jsonData) => {
  //                    strIdCurrEduclsarrXzClgObjLst: Array<clsXzClgEN> = <Array<clsXzClgEN>>jsonData;
  //                    BindDdl_ObjLst(ddlIdXzCollege, arrXzClgObjLst, clsXzClgEN.con_IdXzCollege, clsXzClgEN.con_CollegeName, "学院");
  //                    console.log("完成BindDdl_IdXzCollege!");
  //                    resolve(jsonData);
  //                });
  //            }
  //            catch (e:any) {
  //                strIdCurrEduclsstrMsg: string = ` const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
  //                alert(strMsg);
  //            }
  //        });
  //    }
  //    /// <summary>
  //    /// 为下拉框获取数据,从表:[XzMajor]中获取
  //    /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  //    /// </summary>
  //    /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  //    public BindDdl_idXzMajor(ddlIdXzMajor: string, strWhereCond: string) {
  //        //strWhereCond = " 1 =1 ";
  //        const objDdl = document.getElementById(ddlIdXzMajor);
  //        if (objDdl == null) {
  //            const strMsg = `下拉框：${ddlIdXzMajor} 不存在！`;
  //            alert(strMsg);
  //            throw (strMsg);
  //        }
  //        return new Promise((resolve, reject) => {
  //            try {
  //                const responseText = XzMajor_GetObjLstAsync(strWhereCond).then((jsonData) => {
  //                    strIdCurrEduclsarrXzMajorObjLst: Array<clsXzMajorEN> = <Array<clsXzMajorEN>>jsonData;
  //                    BindDdl_ObjLst(ddlIdXzMajor, arrXzMajorObjLst, clsXzMajorEN.con_IdXzMajor, clsXzMajorEN.con_MajorName, "专业");
  //                    console.log("完成BindDdl_idXzMajor!");
  //                    resolve(jsonData);
  //                });
  //            }
  //            catch (e:any) {
  //                strIdCurrEduclsstrMsg: string = ` const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
  //                alert(strMsg);
  //            }
  //        });
  //    }
  //    /// <summary>
  //    /// 为下拉框获取数据,从表:[UserIdentity]中获取
  //    /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  //    /// </summary>
  //    /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  //    public BindDdl_IdentityID(ddlIdentityId: string, strWhereCond: string = "1 =1") {
  //        //strWhereCond = " 1 =1 ";
  //        const objDdl = document.getElementById(ddlIdentityId);
  //        if (objDdl == null) {
  //            const strMsg = `下拉框：${ddlIdentityId} 不存在！`;
  //            alert(strMsg);
  //            throw (strMsg);
  //        }
  //        return new Promise((resolve, reject) => {
  //            try {
  //                const responseText = UserIdentity_GetObjLstAsync(strWhereCond).then((jsonData) => {
  //                    strIdCurrEduclsarrUserIdentityObjLst: Array<clsUserIdentityEN> = <Array<clsUserIdentityEN>>jsonData;
  //                    BindDdl_ObjLst(ddlIdentityId, arrUserIdentityObjLst, clsUserIdentityEN.con_IdentityID, clsUserIdentityEN.con_identityDesc, "用户身份");
  //                    console.log("完成BindDdl_IdentityID!");
  //                    resolve(jsonData);
  //                });
  //            }
  //            catch (e:any) {
  //                strIdCurrEduclsstrMsg: string = ` const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
  //                alert(strMsg);
  //            }
  //        });
  //    }

  //    //注册方法
  //    public async btnRegister_Click(strListDiv: string) {
  //        if (this.idXzCollege == "") {
  //            alert("学院不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else if (this.idXzMajor == "") {
  //            alert("专业不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else if (this.idGradeBase == "") {
  //            alert("年级不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else if (this.identityID == "") {
  //            alert("身份不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else if (this.userId == "") {
  //            alert("账号不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else if (this.userName == "") {
  //            alert("姓名不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else if (this.RePassword == "") {
  //            alert("密码不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else if (this.Re_Password == "") {
  //            alert("重复密码不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else {
  //            if (this.RePassword == this.Re_Password) {
  //                const responseText2 = await this.AddUserSave().then((jsonData) => {
  //                    const returnBool: boolean = jsonData;
  //                    if (returnBool == true) {
  //                        //alert("注册成功！");
  //                        window.location.href = "#pageLogin";

  //                    }
  //                });
  //            }
  //            else {
  //                alert("重复密码不一致！");
  //                window.location.href = "#pagetwo";
  //            }
  //        }
  //    }

  //    /* 添加新记录
  //    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
  //   */
  //    public async AddUserSave() {
  //        this.DivName = "divAddNewRecordSave";
  //        objUsersEN: clsUsersEN = new clsUsersEN();
  //        this.PutDataToUsersClass(objUsersEN);
  //        try {
  //            const responseText = await Users_IsExistAsync(objUsersEN.userId);
  //            strIdCurrEduclsbolIsExist: boolean = responseText;
  //            if (bolIsExist == true) {
  //                strIdCurrEduclsstrMsg: string = `注册账号：${objUsersEN.userId}已经存在，请重新命名！`;
  //                alert(strMsg);
  //                return responseText;//一定要有一个返回值，否则会出错！
  //            }
  //            const responseText2 = await UsersEx_AddNewRecordAsync(objUsersEN);
  //            const returnBool: boolean = !!responseText2;
  //            if (returnBool == true) {
  //                strIdCurrEduclsstrInfo: string = `注册成功，请等待管理员审核!`;
  //
  //                //显示信息框
  //                alert(strInfo);
  //            }
  //            else {
  //                strIdCurrEduclsstrInfo: string = `注册不成功!`;
  //
  //                //显示信息框
  //                alert(strInfo);
  //            }
  //            return responseText2;//一定要有一个返回值，否则会出错！
  //        }
  //        catch (e:any) {
  //            console.error('catch(e)=');
  //            console.error(e);
  //            strIdCurrEduclsstrMsg: string = `注册记录不成功,${e}.`;
  //            alert(strMsg);
  //        }
  //        return true;//一定要有一个返回值，否则会出错！
  //    }

  //    /* 函数功能:把界面上的属性数据传到类对象中
  //     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
  //     <param name = "pobjUsersEN">数据传输的目的类对象</param>
  //   */
  //    public PutDataToUsersClass(pobjUsersEN: clsUsersEN) {
  //        pobjUsersEN.SetUserId(this.ReUserId;// 用户ID
  //        pobjUsersEN.SetUserName(this.userName;// 用户名
  //        pobjUsersEN.SetUserStateId("02";// 用户状态Id
  //        pobjUsersEN.SetPassword(this.RePassword;// password
  //        pobjUsersEN.SetIdGradeBase(this.idGradeBase;// 年级流水号
  //        pobjUsersEN.SetIdXzCollege(this.idXzCollege;// 学院流水号
  //        pobjUsersEN.SetIdXzMajor(this.idXzMajor;// 专业流水号

  //        pobjUsersEN.SetEmail(this.email;// 电子邮箱
  //        pobjUsersEN.SetIdentityID(this.identityID;// 身份编号
  //        pobjUsersEN.SetIsRegister(true;// isRegister
  //        pobjUsersEN.SetRegisterDate(this.getNowDateNunber();// registerDate
  //        pobjUsersEN.SetUpdDate(this.getNowDateNunber();// 修改日期
  //        pobjUsersEN.SetUpdUser(this.userId;// 修改人
  //        pobjUsersEN.SetMemo("移动端注册";// 备注
  //    }

  //  /*
  //  * 年级流水号
  // */
  //  public set idGradeBase(value: string) {
  //      $("#ddlIdGradeBase").val(value);
  //  }
  //  /*
  //  * 年级流水号
  // */
  //  public get idGradeBase(): string {
  //      return $("#ddlIdGradeBase").val();
  //  }
  //  /*
  //  * 学院流水号
  // */
  //  public set idXzCollege(value: string) {
  //      $("#ddlIdXzCollege").val(value);
  //  }
  //  /*
  //  * 学院流水号
  // */
  //  public get idXzCollege(): string {
  //      return $("#ddlIdXzCollege").val();
  //  }

  //  /*
  //  * 专业流水号
  // */
  //  public set idXzMajor(value: string) {
  //      $("#ddlIdXzMajor").val(value);
  //  }
  //  /*
  //  * 专业流水号
  // */
  //  public get idXzMajor(): string {
  //      return $("#ddlIdXzMajor").val();
  //  }

  //  /*
  //  * 身份编号
  // */
  //  public set identityID(value: string) {
  //      $("#ddlIdentityId").val(value);
  //  }
  //  /*
  //  * 身份编号
  // */
  //  public get identityID(): string {
  //      return $("#ddlIdentityId").val();
  //  }

  //  /*
  // * 用户ID
  //*/
  //  public set email(value: string) {
  //      $("#txtEmail").val(value);
  //  }
  //  /*
  //  * 用户ID
  // */
  //  public get email(): string {
  //      return $("#txtEmail").val();
  //  }

  //  /*
  //  * 用户ID
  // */
  //  public set ReUserId(value: string) {
  //      $("#txtReUserId").val(value);
  //  }
  //  /*
  //  * 用户ID
  // */
  //  public get ReUserId(): string {
  //      return $("#txtReUserId").val();
  //  }
  //  /*
  //  * 用户名
  // */
  //  public set userName(value: string) {
  //      $("#txtUserName").val(value);
  //  }
  //  /*
  //  * 用户名
  // */
  //  public get userName(): string {
  //      return $("#txtUserName").val();
  //  }
  //  /*
  //  * password
  //  */
  //  public set RePassword(value: string) {
  //      $("#txtRePassword").val(value);
  //  }
  //  /*
  //  * password
  // */
  //  public get RePassword(): string {
  //      return $("#txtRePassword").val();
  //  }

  //  /*
  //  * password
  //  */
  //  public set Re_Password(value: string) {
  //      $("#txtRe_Password").val(value);
  //  }
  //  /*
  //  * password
  // */
  //  public get Re_Password(): string {
  //      return $("#txtRe_Password").val();
  //  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    Login.divEdit = Login.EditObj.$refs.refDivEdit;
    if (Login.divEdit == null) {
      if (Login.times4TestShowDialog < 2) {
        Login.times4TestShowDialog++;
        setTimeout(() => {
          this.getDivName();
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
      return null;
    } else {
      Login.times4TestShowDialog = 0;
    }
    return Login.divEdit;
  }
  /**
   * 隐藏对话框
   **/
  public HideDialog_Login() {
    // if (Login.strPageDispModeId == enumPageDispMode.PopupBox_01) {
    Login.EditObj.hideDialog();
    // }
  }
}
