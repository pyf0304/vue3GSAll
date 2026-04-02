import $ from 'jquery';

import { LoginLog_Edit } from '@/viewsBase/LogManage/LoginLog_Edit';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsLoginLogEN } from '@/ts/L0Entity/LogManage/clsLoginLogEN';

import { LoginLog_AddNewRecordAsync } from '@/ts/L3ForWApi/LogManage/clsLoginLogWApi';

import { GetInputValueInDivObj, SetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { QxUserRoleRelation_GetObjLstAsync } from '@/ts/L3ForWApi/UsersRight/clsQxUserRoleRelationWApi';
import { clsQxUserRoleRelationEN } from '@/ts/L0Entity/UsersRight/clsQxUserRoleRelationEN';
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
    let strRoleResult = '';
    const strWhereCond = ` userId='${this.userId}'`;

    //获取所有角色，判断是否是教师还是学生；
    const arrUserRoleRelationObjLst = await QxUserRoleRelation_GetObjLstAsync(strWhereCond);
    let objUserRoleRelation: clsQxUserRoleRelationEN = new clsQxUserRoleRelationEN();
    //循环判断是否包含教师或学生
    if (arrUserRoleRelationObjLst.length > 0) {
      for (objUserRoleRelation of arrUserRoleRelationObjLst) {
        //00620002教师 00620003学生、只要包含其中一个角色那么就跳出
        if (objUserRoleRelation.roleId == '00620002') {
          strRoleResult = 'teacher';

          break;
        } else if (objUserRoleRelation.roleId == '00620003') {
          strRoleResult = 'student';
          break;
        }
      }
      console.log(strRoleResult);
      //window.location.href = "/WebApp/UserRoleRelation";
      //window.location.href = "/GraduateStudyWebApp/CourseLearning/cc_CourseList";
      window.location.href = '/GraduateStudyWebApp/WebApp/Indexs';
    }

    const strJson = JSON.stringify(objUserRoleRelation);
    console.log(strJson);
    this.SetSessionAsync('objvUserRoleRelation', strJson);
  }

  /* 添加新记录
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

  //获取带格式的日志文件
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
