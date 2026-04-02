/**
 * 类名:clsUsersExWApi
 * 表名:Users(01120034)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:43:51
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户(Users)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年03月18日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  Users_GetObjLstCache,
  Users_GetObjLstAsync,
  Users_SortFunByKey,
  Users_FilterFunByKey,
} from '@/ts/L3ForWApi/UserManage/clsUsersWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import { clsUsersENEx } from '@/ts/L0Entity/UserManage/clsUsersENEx';
import { XzClg_func, XzClg_funcKey } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { XzMajor_func, XzMajor_funcKey } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { UserState_func, UserState_funcKey } from '@/ts/L3ForWApi/SysPara/clsUserStateWApi';
import { clsUserStateEN } from '@/ts/L0Entity/SysPara/clsUserStateEN';
import { XzGradeBase_func, XzGradeBase_funcKey } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
import {
  QxUserIdentity_func,
  QxUserIdentity_funcKey,
} from '@/ts/L3ForWApi/UserManage/clsQxUserIdentityWApi';
import { clsQxUserIdentityEN } from '@/ts/L0Entity/UserManage/clsQxUserIdentityEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const usersExController = 'UsersExApi';
export const usersEx_ConstructorName = 'usersEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function UsersEx_GetWebApiUrl(strController: string, strAction: string): string {
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objUsersENS:源对象
 * @returns 目标对象=>clsUsersEN:objUsersENT
 **/
export function UsersEx_CopyToEx(objUsersENS: clsUsersEN): clsUsersENEx {
  const strThisFuncName = UsersEx_CopyToEx.name;
  const objUsersENT = new clsUsersENEx();
  try {
    ObjectAssign(objUsersENT, objUsersENS);
    return objUsersENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objUsersENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function UsersEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUsersENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrUsersObjLst = await Users_GetObjLstCache();
  const arrUsersExObjLst = arrUsersObjLst.map(UsersEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsUsersEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrUsersExObjLst) {
      await UsersEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrUsersExObjLst.length == 0) return arrUsersExObjLst;
  let arrUsersSel: Array<clsUsersENEx> = arrUsersExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objUsersCond = new clsUsersENEx();
  ObjectAssign(objUsersCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsUsersWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUsersCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrUsersSel = arrUsersSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrUsersSel.length == 0) return arrUsersSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUsersSel = arrUsersSel.sort(UsersEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrUsersSel = arrUsersSel.sort(objPagerPara.sortFun);
    }
    arrUsersSel = arrUsersSel.slice(intStart, intEnd);
    return arrUsersSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUsersENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function UsersEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUsersENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrUsersObjLst = await Users_GetObjLstAsync(objPagerPara.whereCond);
  const arrUsersExObjLst = arrUsersObjLst.map(UsersEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsUsersEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrUsersExObjLst) {
      await UsersEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrUsersExObjLst.length == 0) return arrUsersExObjLst;
  let arrUsersSel: Array<clsUsersENEx> = arrUsersExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUsersSel = arrUsersSel.sort(UsersEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrUsersSel = arrUsersSel.sort(objPagerPara.sortFun);
    }
    arrUsersSel = arrUsersSel.slice(intStart, intEnd);
    return arrUsersSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUsersENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapCollegeName(objUsers: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapCollegeName.name;
  try {
    if (IsNullOrEmpty(objUsers.collegeName) == true) {
      const XzClgidXzCollege = objUsers.idXzCollege;
      const XzClgCollegeName = await XzClg_func(
        clsXzClgEN.con_IdXzCollege,
        clsXzClgEN.con_CollegeName,
        XzClgidXzCollege,
        clsSysPara4WebApi.spIdSchool,
      );
      objUsers.collegeName = XzClgCollegeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapMajorName(objUsers: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapMajorName.name;
  try {
    if (IsNullOrEmpty(objUsers.majorName) == true) {
      const XzMajoridXzMajor = objUsers.idXzMajor;
      const XzMajorMajorName = await XzMajor_func(
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        XzMajoridXzMajor,
      );
      objUsers.majorName = XzMajorMajorName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000426)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapUserStateName(objUsers: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapUserStateName.name;
  try {
    if (IsNullOrEmpty(objUsers.userStateName) == true) {
      const UserStateUserStateId = objUsers.userStateId;
      const UserStateUserStateName = await UserState_func(
        clsUserStateEN.con_UserStateId,
        clsUserStateEN.con_UserStateName,
        UserStateUserStateId,
      );
      objUsers.userStateName = UserStateUserStateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000473)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapGradeBaseName(objUsers: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapGradeBaseName.name;
  try {
    if (IsNullOrEmpty(objUsers.gradeBaseName) == true) {
      const XzGradeBaseidGradeBase = objUsers.idGradeBase;
      const XzGradeBaseGradeBaseName = await XzGradeBase_func(
        clsXzGradeBaseEN.con_IdGradeBase,
        clsXzGradeBaseEN.con_GradeBaseName,
        XzGradeBaseidGradeBase,
      );
      objUsers.gradeBaseName = XzGradeBaseGradeBaseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000457)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapDateTimeSim(objUsers: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objUsers.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objUsers.updDate);
      objUsers.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapIdentityDesc(objUsers: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapIdentityDesc.name;
  try {
    if (IsNullOrEmpty(objUsers.identityDesc) == true) {
      const QxUserIdentityIdentityId = objUsers.identityId;
      const QxUserIdentityIdentityDesc = await QxUserIdentity_func(
        clsQxUserIdentityEN.con_IdentityId,
        clsQxUserIdentityEN.con_IdentityDesc,
        QxUserIdentityIdentityId,
      );
      objUsers.identityDesc = QxUserIdentityIdentityDesc;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000475)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function UsersEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUsersENEx.con_CollegeName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsUsersENEx.con_MajorName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return a.majorName.localeCompare(b.majorName);
        };
      case clsUsersENEx.con_UserStateName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return a.userStateName.localeCompare(b.userStateName);
        };
      case clsUsersENEx.con_GradeBaseName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return a.gradeBaseName.localeCompare(b.gradeBaseName);
        };
      case clsUsersENEx.con_RoleNames:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return a.roleNames.localeCompare(b.roleNames);
        };
      case clsUsersENEx.con_DateTimeSim:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      case clsUsersENEx.con_IdentityDesc:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return a.identityDesc.localeCompare(b.identityDesc);
        };
      default:
        return Users_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsUsersENEx.con_CollegeName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsUsersENEx.con_MajorName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return b.majorName.localeCompare(a.majorName);
        };
      case clsUsersENEx.con_UserStateName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return b.userStateName.localeCompare(a.userStateName);
        };
      case clsUsersENEx.con_GradeBaseName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return b.gradeBaseName.localeCompare(a.gradeBaseName);
        };
      case clsUsersENEx.con_RoleNames:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return b.roleNames.localeCompare(a.roleNames);
        };
      case clsUsersENEx.con_DateTimeSim:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      case clsUsersENEx.con_IdentityDesc:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return b.identityDesc.localeCompare(a.identityDesc);
        };
      default:
        return Users_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function UsersEx_FuncMapByFldName(strFldName: string, objUsersEx: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsUsersEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsUsersENEx.con_CollegeName:
      return UsersEx_FuncMapCollegeName(objUsersEx);
    case clsUsersENEx.con_MajorName:
      return UsersEx_FuncMapMajorName(objUsersEx);
    case clsUsersENEx.con_UserStateName:
      return UsersEx_FuncMapUserStateName(objUsersEx);
    case clsUsersENEx.con_GradeBaseName:
      return UsersEx_FuncMapGradeBaseName(objUsersEx);
    case clsUsersENEx.con_DateTimeSim:
      return UsersEx_FuncMapDateTimeSim(objUsersEx);
    case clsUsersENEx.con_IdentityDesc:
      return UsersEx_FuncMapIdentityDesc(objUsersEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function UsersEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsUsersENEx.con_CollegeName:
      return (obj: clsUsersENEx) => {
        return obj.collegeName === value;
      };
    case clsUsersENEx.con_MajorName:
      return (obj: clsUsersENEx) => {
        return obj.majorName === value;
      };
    case clsUsersENEx.con_UserStateName:
      return (obj: clsUsersENEx) => {
        return obj.userStateName === value;
      };
    case clsUsersENEx.con_GradeBaseName:
      return (obj: clsUsersENEx) => {
        return obj.gradeBaseName === value;
      };
    case clsUsersENEx.con_RoleNames:
      return (obj: clsUsersENEx) => {
        return obj.roleNames === value;
      };
    case clsUsersENEx.con_DateTimeSim:
      return (obj: clsUsersENEx) => {
        return obj.dateTimeSim === value;
      };
    case clsUsersENEx.con_IdentityDesc:
      return (obj: clsUsersENEx) => {
        return obj.identityDesc === value;
      };
    default:
      return Users_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapKeyCollegeName(
  objUsers: clsUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = UsersEx_FuncMapKeyCollegeName.name;
  try {
    if (IsNullOrEmpty(objUsers.collegeName) == true) return [];
    const XzClgCollegeName = objUsers.collegeName;
    const arrIdXzCollege = await XzClg_funcKey(
      clsXzClgEN.con_CollegeName,
      XzClgCollegeName,
      enumComparisonOp.Like_03,
      clsSysPara4WebApi.spIdSchool,
    );
    return arrIdXzCollege;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapKeyMajorName(objUsers: clsUsersENEx): Promise<Array<string>> {
  const strThisFuncName = UsersEx_FuncMapKeyMajorName.name;
  try {
    if (IsNullOrEmpty(objUsers.majorName) == true) return [];
    const XzMajorMajorName = objUsers.majorName;
    const arrIdXzMajor = await XzMajor_funcKey(
      clsXzMajorEN.con_MajorName,
      XzMajorMajorName,
      enumComparisonOp.Like_03,
    );
    return arrIdXzMajor;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000426)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapKeyUserStateName(
  objUsers: clsUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = UsersEx_FuncMapKeyUserStateName.name;
  try {
    if (IsNullOrEmpty(objUsers.userStateName) == true) return [];
    const UserStateUserStateName = objUsers.userStateName;
    const arrUserStateId = await UserState_funcKey(
      clsUserStateEN.con_UserStateName,
      UserStateUserStateName,
      enumComparisonOp.Like_03,
    );
    return arrUserStateId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000473)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapKeyGradeBaseName(
  objUsers: clsUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = UsersEx_FuncMapKeyGradeBaseName.name;
  try {
    if (IsNullOrEmpty(objUsers.gradeBaseName) == true) return [];
    const XzGradeBaseGradeBaseName = objUsers.gradeBaseName;
    const arrIdGradeBase = await XzGradeBase_funcKey(
      clsXzGradeBaseEN.con_GradeBaseName,
      XzGradeBaseGradeBaseName,
      enumComparisonOp.Like_03,
    );
    return arrIdGradeBase;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000457)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapKeyIdentityDesc(
  objUsers: clsUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = UsersEx_FuncMapKeyIdentityDesc.name;
  try {
    if (IsNullOrEmpty(objUsers.identityDesc) == true) return [];
    const QxUserIdentityIdentityDesc = objUsers.identityDesc;
    const arrIdentityId = await QxUserIdentity_funcKey(
      clsQxUserIdentityEN.con_IdentityDesc,
      QxUserIdentityIdentityDesc,
      enumComparisonOp.Like_03,
    );
    return arrIdentityId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000475)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
