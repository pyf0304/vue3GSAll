/**
 * 类名:clsQxRolePotenceRelaExWApi
 * 表名:QxRolePotenceRela(00140123)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/20 22:45:59
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:权限管理(PotenceMan)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 角色权限关系(QxRolePotenceRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年01月20日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { clsQxRolePotenceRelaENEx } from '@/ts/L0Entity/PotenceMan/clsQxRolePotenceRelaENEx';
import {
  QxRolePotenceRela_GetObjLstAsync,
  QxRolePotenceRela_SortFunByKey,
} from '@/ts/L3ForWApi/PotenceMan/clsQxRolePotenceRelaWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { QxRoles_func, QxRoles_funcKey } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { clsQxRolesEN } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
import {
  QxPrjPotence_func,
  QxPrjPotence_funcKey,
} from '@/ts/L3ForWApi/PotenceMan/clsQxPrjPotenceWApi';
import { clsQxPrjPotenceEN } from '@/ts/L0Entity/PotenceMan/clsQxPrjPotenceEN';
import { clsQxRolePotenceRelaEN } from '@/ts/L0Entity/PotenceMan/clsQxRolePotenceRelaEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { GetWebApiUrl_GP, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const qxRolePotenceRelaExController = 'QxRolePotenceRelaExApi';
export const qxRolePotenceRelaEx_ConstructorName = 'qxRolePotenceRelaEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objQxRolePotenceRelaENS:源对象
 * @returns 目标对象=>clsQxRolePotenceRelaEN:objQxRolePotenceRelaENT
 **/
export function QxRolePotenceRelaEx_CopyToEx(
  objQxRolePotenceRelaENS: clsQxRolePotenceRelaEN,
): clsQxRolePotenceRelaENEx {
  const strThisFuncName = QxRolePotenceRelaEx_CopyToEx.name;
  const objQxRolePotenceRelaENT = new clsQxRolePotenceRelaENEx();
  try {
    ObjectAssign(objQxRolePotenceRelaENT, objQxRolePotenceRelaENS);
    return objQxRolePotenceRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolePotenceRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxRolePotenceRelaENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxRolePotenceRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxRolePotenceRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxRolePotenceRelaObjLst = await QxRolePotenceRela_GetObjLstAsync(objPagerPara.whereCond);
  const arrQxRolePotenceRelaExObjLst = arrQxRolePotenceRelaObjLst.map(QxRolePotenceRelaEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxRolePotenceRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxRolePotenceRelaExObjLst) {
      await QxRolePotenceRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxRolePotenceRelaExObjLst.length == 0) return arrQxRolePotenceRelaExObjLst;
  let arrQxRolePotenceRelaSel: Array<clsQxRolePotenceRelaENEx> = arrQxRolePotenceRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxRolePotenceRelaSel = arrQxRolePotenceRelaSel.sort(
        QxRolePotenceRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxRolePotenceRelaSel = arrQxRolePotenceRelaSel.sort(objPagerPara.sortFun);
    }
    arrQxRolePotenceRelaSel = arrQxRolePotenceRelaSel.slice(intStart, intEnd);
    return arrQxRolePotenceRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxRolePotenceRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxRolePotenceRelaENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRolePotenceRelaS:源对象
 **/
export async function QxRolePotenceRelaEx_FuncMapRoleName(
  objQxRolePotenceRela: clsQxRolePotenceRelaENEx,
) {
  const strThisFuncName = QxRolePotenceRelaEx_FuncMapRoleName.name;
  try {
    if (IsNullOrEmpty(objQxRolePotenceRela.roleName) == true) {
      const QxUserRolesRoleId = objQxRolePotenceRela.roleId;
      const QxUserRolesRoleName = await QxRoles_func(
        clsQxRolesEN.con_RoleId,
        clsQxRolesEN.con_RoleName,
        QxUserRolesRoleId,
        objQxRolePotenceRela.qxPrjId,
      );
      objQxRolePotenceRela.roleName = QxUserRolesRoleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000312)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolePotenceRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRolePotenceRelaS:源对象
 **/
export async function QxRolePotenceRelaEx_FuncMapPotenceName(
  objQxRolePotenceRela: clsQxRolePotenceRelaENEx,
) {
  const strThisFuncName = QxRolePotenceRelaEx_FuncMapPotenceName.name;
  try {
    if (IsNullOrEmpty(objQxRolePotenceRela.potenceName) == true) {
      const QxPrjPotencePotenceId = objQxRolePotenceRela.potenceId;
      const QxPrjPotencePotenceName = await QxPrjPotence_func(
        clsQxPrjPotenceEN.con_PotenceId,
        clsQxPrjPotenceEN.con_PotenceName,
        QxPrjPotencePotenceId,
        clsSysPara4WebApi.currSelPrjId,
      );
      objQxRolePotenceRela.potenceName = QxPrjPotencePotenceName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000488)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolePotenceRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxRolePotenceRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxRolePotenceRelaENEx.con_RoleName:
        return (a: clsQxRolePotenceRelaENEx, b: clsQxRolePotenceRelaENEx) => {
          return a.roleName.localeCompare(b.roleName);
        };
      case clsQxRolePotenceRelaENEx.con_PotenceName:
        return (a: clsQxRolePotenceRelaENEx, b: clsQxRolePotenceRelaENEx) => {
          return a.potenceName.localeCompare(b.potenceName);
        };
      default:
        return QxRolePotenceRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQxRolePotenceRelaENEx.con_RoleName:
        return (a: clsQxRolePotenceRelaENEx, b: clsQxRolePotenceRelaENEx) => {
          return b.roleName.localeCompare(a.roleName);
        };
      case clsQxRolePotenceRelaENEx.con_PotenceName:
        return (a: clsQxRolePotenceRelaENEx, b: clsQxRolePotenceRelaENEx) => {
          return b.potenceName.localeCompare(a.potenceName);
        };
      default:
        return QxRolePotenceRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxRolePotenceRelaEx_FuncMapByFldName(
  strFldName: string,
  objQxRolePotenceRelaEx: clsQxRolePotenceRelaENEx,
) {
  const strThisFuncName = QxRolePotenceRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxRolePotenceRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQxRolePotenceRelaENEx.con_RoleName:
      return QxRolePotenceRelaEx_FuncMapRoleName(objQxRolePotenceRelaEx);
    case clsQxRolePotenceRelaENEx.con_PotenceName:
      return QxRolePotenceRelaEx_FuncMapPotenceName(objQxRolePotenceRelaEx);

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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRolePotenceRelaS:源对象
 **/
export async function QxRolePotenceRelaEx_FuncMapKeyRoleName(
  objQxRolePotenceRela: clsQxRolePotenceRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRolePotenceRelaEx_FuncMapKeyRoleName.name;
  try {
    if (IsNullOrEmpty(objQxRolePotenceRela.roleName) == true) return [];
    const QxUserRolesRoleName = objQxRolePotenceRela.roleName;
    const arrRoleId = await QxRoles_funcKey(
      clsQxRolesEN.con_RoleName,
      QxUserRolesRoleName,
      objQxRolePotenceRela.qxPrjId,
      enumComparisonOp.Like_03,
    );
    return arrRoleId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000312)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolePotenceRelaEx_ConstructorName,
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
 * @param objQxRolePotenceRelaS:源对象
 **/
export async function QxRolePotenceRelaEx_FuncMapKeyPotenceName(
  objQxRolePotenceRela: clsQxRolePotenceRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRolePotenceRelaEx_FuncMapKeyPotenceName.name;
  try {
    if (IsNullOrEmpty(objQxRolePotenceRela.potenceName) == true) return [];
    const QxPrjPotencePotenceName = objQxRolePotenceRela.potenceName;
    const arrPotenceId = await QxPrjPotence_funcKey(
      clsQxPrjPotenceEN.con_PotenceName,
      QxPrjPotencePotenceName,
      enumComparisonOp.Like_03,
      clsSysPara4WebApi.currSelPrjId,
    );
    return arrPotenceId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000488)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolePotenceRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 删除角色权限
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strRoleId: 角色Id
 * @param strPotenceId: 权限
 * @returns 获取的相应对象列表
 */
export async function QxRolePotenceRelaEx_Delete(
  strRoleId: string,
  strPotenceId: string,
): Promise<boolean> {
  const strThisFuncName = QxRolePotenceRelaEx_Delete.name;
  const strAction = 'Delete';
  const strUrl = GetWebApiUrl_GP(qxRolePotenceRelaExController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRoleId,
      strPotenceId,
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
        qxRolePotenceRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRolePotenceRelaEx_ConstructorName,
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
 * 为角色设置权限
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strPrjId: 工程Id
 * @param strRoleId: 角色Id
 * @param strPotenceId: 权限
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function QxRolePotenceRelaEx_SetRolePotence(
  strPrjId: string,
  strRoleId: string,
  strPotenceId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = QxRolePotenceRelaEx_SetRolePotence.name;
  const strAction = 'SetRolePotence';
  const strUrl = GetWebApiUrl_GP(qxRolePotenceRelaExController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strRoleId,
      strPotenceId,
      strOpUserId,
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
        qxRolePotenceRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRolePotenceRelaEx_ConstructorName,
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
 * 根据关键字获取相应记录的对象
 * @param strPotenceId:权限Id
 * @param strQxPrjId:工程Id
 * @returns 对象
 **/
export async function QxRolePotenceRelaEx_GetObjLstByPotenceIdAndPrjId(
  strPotenceId: string,
  strQxPrjId: string,
): Promise<Array<clsQxRolePotenceRelaEN>> {
  const strThisFuncName = 'GetObjLstByPotenceIdAndPrjId';
  try {
    if (strPotenceId == '') {
      const strMsg = Format(
        '参数:[strPotenceId]不能为空!(In clsQxRolePotenceRelaExWApi.GetObjLstByPotenceIdAndPrjId)',
      );
      console.error(strMsg);
      throw strMsg;
    }
    if (strQxPrjId == '') {
      const strMsg = Format(
        '参数:[strQxPrjId]不能为空!(In clsQxRolePotenceRelaExWApi.GetObjLstByPotenceIdAndPrjId)',
      );
      console.error(strMsg);
      throw strMsg;
    }
    const strWhere = `${clsQxRolePotenceRelaEN.con_PotenceId} = '${strPotenceId}' and ${clsQxRolePotenceRelaEN.con_QxPrjId} = '${strQxPrjId}'`;
    //console.log(returnObj);
    const arrObjLst = await QxRolePotenceRela_GetObjLstAsync(strWhere);
    return arrObjLst;
  } catch (error: any) {
    console.error(error);
    const strMsg = `获取对象列表时出错。${error}`;
    throw strMsg;
  }
}

/**
 * 根据关键字获取相应记录的对象
 * @param strPotenceId:权限Id
 * @param strQxPrjId:工程Id
 * @returns 对象
 **/
export async function QxRolePotenceRelaEx_GetObjLstByPrjId(
  strQxPrjId: string,
): Promise<Array<clsQxRolePotenceRelaEN>> {
  const strThisFuncName = 'GetObjLstByPotenceIdAndPrjId';
  try {
    if (strQxPrjId == '') {
      const strMsg = Format(
        '参数:[strQxPrjId]不能为空!(In clsQxRolePotenceRelaExWApi.GetObjLstByPotenceIdAndPrjId)',
      );
      console.error(strMsg);
      throw strMsg;
    }
    const strWhere = `${clsQxRolePotenceRelaEN.con_QxPrjId} = '${strQxPrjId}'`;
    //console.log(returnObj);
    const arrObjLst = await QxRolePotenceRela_GetObjLstAsync(strWhere);
    return arrObjLst;
  } catch (error: any) {
    console.error(error);
    const strMsg = `获取对象列表时出错。${error}`;
    throw strMsg;
  }
}
