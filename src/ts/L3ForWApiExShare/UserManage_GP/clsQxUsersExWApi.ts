/**
 * Qx用户(QxUsers)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月05日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
//import * as QQ from "q";
import { Storage } from '@/utils/Storage';
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';

import { GetWebApiUrl_GP, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { XzClg_func } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { QxUserState_func } from '@/ts/L3ForWApi/UserManage/clsQxUserStateWApi';
import { clsQxUserStateEN } from '@/ts/L0Entity/UserManage/clsQxUserStateEN';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { XzGradeBase_func } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
import { XzSchool_func } from '@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi';
import { clsXzSchoolEN } from '@/ts/L0Entity/SystemSet/clsXzSchoolEN';
import { userRoleRelationStore } from '@/store/modulesShare/qxUserRoleRelation';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

import { GetA_Empty, GetDiv_Empty, GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { QxRoles_GetNameByRoleIdCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';

import { clsQxUsersENEx } from '@/ts/L0Entity/UserManage_GP/clsQxUsersENEx';
import {
  QxUsers_FilterFunByKey,
  QxUsers_GetObjLstAsync,
  QxUsers_SortFunByKey,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi';
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';

export const qxUsersEx_Controller = 'QxUsersExApi';
export const qxUsersEx_ConstructorName = 'qxUsersEx';

export class clsQxUsersExWApi {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objQxUsersENS:源对象
 * @returns 目标对象=>clsQxUsersEN:objQxUsersENT
 **/
export function QxUsersEx_CopyToEx(objQxUsersENS: clsQxUsersEN): clsQxUsersENEx {
  const strThisFuncName = QxUsersEx_CopyToEx.name;
  const objQxUsersENT = new clsQxUsersENEx();
  try {
    ObjectAssign(objQxUsersENT, objQxUsersENS);
    return objQxUsersENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxUsersENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxUsersEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxUsersENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxUsersObjLst = await QxUsers_GetObjLstAsync(objPagerPara.whereCond);
  const arrQxUsersExObjLst = arrQxUsersObjLst.map(QxUsersEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrQxUsersExObjLst) {
      await QxUsersEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxUsersExObjLst.length == 0) return arrQxUsersExObjLst;
  let arrQxUsers_Sel: Array<clsQxUsersENEx> = arrQxUsersExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxUsers_Sel = arrQxUsers_Sel.sort(QxUsersEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQxUsers_Sel = arrQxUsers_Sel.sort(objPagerPara.sortFun);
    }
    arrQxUsers_Sel = arrQxUsers_Sel.slice(intStart, intEnd);
    return arrQxUsers_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxUsersENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxUsersEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxUsersENEx.con_UserStateName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.userStateName.localeCompare(b.userStateName);
        };
      case clsQxUsersENEx.con_CollegeName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsQxUsersENEx.con_GradeBaseName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.gradeBaseName.localeCompare(b.gradeBaseName);
        };
      case clsQxUsersENEx.con_RoleNames:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.roleNames.localeCompare(b.roleNames);
        };
      case clsQxUsersENEx.con_SchoolName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.schoolName.localeCompare(b.schoolName);
        };
      case clsQxUsersENEx.con_DateTimeSim:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      default:
        return QxUsers_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQxUsersENEx.con_UserStateName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.userStateName.localeCompare(a.userStateName);
        };
      case clsQxUsersENEx.con_CollegeName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsQxUsersENEx.con_GradeBaseName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.gradeBaseName.localeCompare(a.gradeBaseName);
        };
      case clsQxUsersENEx.con_RoleNames:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.roleNames.localeCompare(a.roleNames);
        };
      case clsQxUsersENEx.con_SchoolName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.schoolName.localeCompare(a.schoolName);
        };
      case clsQxUsersENEx.con_DateTimeSim:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      default:
        return QxUsers_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxUsersEx_FuncMapByFldName(strFldName: string, objQxUsersEx: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxUsersEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQxUsersENEx.con_UserStateName:
      return QxUsersEx_FuncMapUserStateName(objQxUsersEx);
    case clsQxUsersENEx.con_CollegeName:
      return QxUsersEx_FuncMapCollegeName(objQxUsersEx);
    case clsQxUsersENEx.con_GradeBaseName:
      return QxUsersEx_FuncMapGradeBaseName(objQxUsersEx);
    case clsQxUsersENEx.con_SchoolName:
      return QxUsersEx_FuncMapSchoolName(objQxUsersEx);
    case clsQxUsersENEx.con_RoleNames:
      return QxUsersEx_FuncMapRoleNamesWithDelButton(objQxUsersEx);
    case clsQxUsersENEx.con_DateTimeSim:
      return QxUsersEx_FuncMapDateTimeSim(objQxUsersEx);
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
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2022-11-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function QxUsersEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return QxUsers_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapUserStateName(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapUserStateName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.userStateName) == true) {
      const QxUserStateUserStateId = objQxUsers.userStateId;
      const QxUserStateUserStateName = await QxUserState_func(
        clsQxUserStateEN.con_UserStateId,
        clsQxUserStateEN.con_UserStateName,
        QxUserStateUserStateId,
      );
      objQxUsers.userStateName = QxUserStateUserStateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000473)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapCollegeName(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapCollegeName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.collegeName) == true) {
      const XzClgidXzCollege = objQxUsers.idXzCollege;
      const XzClgCollegeName = await XzClg_func(
        clsXzClgEN.con_IdXzCollege,
        clsXzClgEN.con_CollegeName,
        XzClgidXzCollege,
        clsSysPara4WebApi.spIdSchool,
      );
      objQxUsers.collegeName = XzClgCollegeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapGradeBaseName(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapGradeBaseName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.gradeBaseName) == true) {
      const XzGradeBaseidGradeBase = objQxUsers.idGradeBase;
      const XzGradeBaseGradeBaseName = await XzGradeBase_func(
        clsXzGradeBaseEN.con_IdGradeBase,
        clsXzGradeBaseEN.con_GradeBaseName,
        XzGradeBaseidGradeBase,
      );
      objQxUsers.gradeBaseName = XzGradeBaseGradeBaseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000457)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapSchoolName(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapSchoolName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.schoolName) == true) {
      const XzSchoolidSchool = objQxUsers.idSchool;
      const XzSchoolSchoolName = await XzSchool_func(
        clsXzSchoolEN.con_IdSchool,
        clsXzSchoolEN.con_SchoolName,
        XzSchoolidSchool,
      );
      objQxUsers.schoolName = XzSchoolSchoolName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000469)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function QxUsersEx_FuncMapRoleNames(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapRoleNames.name;
  try {
    if (IsNullOrEmpty(objQxUsers.roleNames) == true) {
      const strPrjId = clsSysPara4WebApi.currSelPrjId;
      const strRoleNames = await userRoleRelationStore.getRoleNames(objQxUsers.userId, strPrjId);
      objQxUsers.roleNames = strRoleNames;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000469)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
export async function QxUsersEx_FuncMapRoleNamesWithDelButton(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapRoleNames.name;
  try {
    if (IsNullOrEmpty(objQxUsers.roleNames) == true) {
      const strPrjId = clsSysPara4WebApi.currSelPrjId;
      const arrRoleIds = await userRoleRelationStore.getRoleIds(objQxUsers.userId, strPrjId);
      const divRoleNames = GetDiv_Empty('');

      for (const strRoleId of arrRoleIds) {
        if (strRoleId == '') continue;
        const strRoleName = await QxRoles_GetNameByRoleIdCache(strRoleId, strPrjId);
        const spnRole = GetSpan_Empty('text-secondary');
        spnRole.innerHTML = strRoleName;
        const aDel = GetA_Empty('text-primary ml-2 mr-2');
        aDel.innerHTML = '删除';
        aDel.id = 'aDel';
        aDel.href = 'javascript:void(0)';
        const objData = `${objQxUsers.userId}|${strRoleId} `;
        aDel.setAttribute('keyId', objData);
        // aDel.href = 'http://www.shnu.edu.cn';

        // (function (objData: any) {
        //   aDel.onclick = function () {
        //     console.error('aDel.onclick');
        //     clsQxUsersExWApi.vuebtn_Click('DelRole', objData);
        //   };
        // })(objData);
        const spnEmpty = GetSpan_Empty('text-secondary ml-2');
        spnEmpty.innerHTML = '&nbsp;';
        const spnEmpty1 = GetSpan_Empty('text-secondary ml-2');
        spnEmpty1.innerHTML = '&nbsp;&nbsp;';
        divRoleNames.appendChild(spnRole);
        divRoleNames.appendChild(spnEmpty);
        divRoleNames.appendChild(aDel);
        divRoleNames.appendChild(spnEmpty1);
      }
      objQxUsers.roleNames = divRoleNames.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000469)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapDateTimeSim(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objQxUsers.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objQxUsers.updDate);
      objQxUsers.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 添加新用户，附加角色和工程
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param objQxUsers: 用户对象
 * @param strPrjId: 工程Id
 * @param strRoleId: 角色Id
 * @param strUpdUser: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function QxUsersEx_AddNewUsers(
  objQxUsers: clsQxUsersEN,
  strPrjId: string,
  strRoleId: string,
  strUpdUser: string,
): Promise<boolean> {
  const strThisFuncName = QxUsersEx_AddNewUsers.name;
  const strAction = 'AddNewUsers';
  const strUrl = GetWebApiUrl_GP(qxUsersEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      objQxUsers,
      strPrjId,
      strRoleId,
      strUpdUser,
    },
  };
  const requestData = {
    objQxUsers: objQxUsers, // 字符串数组
    strPrjId: strPrjId, // 字符串参数
    strRoleId: strRoleId, // 字符串参数
    strUpdUser: strUpdUser, // 字符串参数
  };
  try {
    // axios
    //   .post(strUrl, JSON.stringify(requestData), {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data); // 处理成功的响应
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error); // 处理错误
    //   });

    //   const response = await axios.post(strUrl, requestData, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    const response = await axios.post(strUrl, JSON.stringify(requestData), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsersEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsersEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 为用户添加角色
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strUserId: 用户Id
 * @param strRoleId: 角色Id
 * @param strUpdUser: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function QxUsersEx_AddUserRoleRelation(
  strUserId: string,
  strRoleId: string,
  strUpdUser: string,
): Promise<boolean> {
  const strThisFuncName = QxUsersEx_AddUserRoleRelation.name;
  const strAction = 'AddUserRoleRelation';
  const strUrl = GetWebApiUrl_GP(qxUsersEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
      strRoleId,
      strUpdUser,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsersEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsersEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
