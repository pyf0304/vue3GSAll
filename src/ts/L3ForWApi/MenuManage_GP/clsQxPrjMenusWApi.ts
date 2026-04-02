/**
 * 类名:clsQxPrjMenusWApi
 * 表名:QxPrjMenus(00140004)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/07 16:23:44
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台Spa(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程菜单(QxPrjMenus)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月07日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
import { clsSysPara4WebApi, GetWebApiUrl_GP } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const qxPrjMenus_Controller = 'QxPrjMenusApi';
export const qxPrjMenus_ConstructorName = 'qxPrjMenus';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strMenuId:关键字
 * @returns 对象
 **/
export async function QxPrjMenus_GetObjByMenuIdAsync(
  strMenuId: string,
): Promise<clsQxPrjMenusEN | null> {
  const strThisFuncName = 'GetObjByMenuIdAsync';

  if (IsNullOrEmpty(strMenuId) == true) {
    const strMsg = Format('参数:[strMenuId]不能为空!(In clsQxPrjMenusWApi.GetObjByMenuIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strMenuId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strMenuId]的长度:[{0}]不正确!(clsQxPrjMenusWApi.GetObjByMenuIdAsync)',
      strMenuId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByMenuId';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strMenuId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objQxPrjMenus = QxPrjMenus_GetObjFromJsonObj(returnObj);
      return objQxPrjMenus;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strMenuId:所给的关键字
 * @returns 对象
 */
export async function QxPrjMenus_GetObjByMenuIdCache(
  strMenuId: string,
  strQxPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByMenuIdCache';

  if (IsNullOrEmpty(strMenuId) == true) {
    const strMsg = Format('参数:[strMenuId]不能为空!(In clsQxPrjMenusWApi.GetObjByMenuIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strMenuId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strMenuId]的长度:[{0}]不正确!(clsQxPrjMenusWApi.GetObjByMenuIdCache)',
      strMenuId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstCache(strQxPrjId);
  try {
    const arrQxPrjMenusSel = arrQxPrjMenusObjLstCache.filter((x) => x.menuId == strMenuId);
    let objQxPrjMenus: clsQxPrjMenusEN;
    if (arrQxPrjMenusSel.length > 0) {
      objQxPrjMenus = arrQxPrjMenusSel[0];
      return objQxPrjMenus;
    } else {
      if (bolTryAsyncOnce == true) {
        const objQxPrjMenusConst = await QxPrjMenus_GetObjByMenuIdAsync(strMenuId);
        if (objQxPrjMenusConst != null) {
          QxPrjMenus_ReFreshThisCache(strQxPrjId);
          return objQxPrjMenusConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strMenuId,
      qxPrjMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strMenuId:所给的关键字
 * @returns 对象
 */
export async function QxPrjMenus_GetObjByMenuIdlocalStorage(strMenuId: string) {
  const strThisFuncName = 'GetObjByMenuIdlocalStorage';

  if (IsNullOrEmpty(strMenuId) == true) {
    const strMsg = Format(
      '参数:[strMenuId]不能为空!(In clsQxPrjMenusWApi.GetObjByMenuIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strMenuId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strMenuId]的长度:[{0}]不正确!(clsQxPrjMenusWApi.GetObjByMenuIdlocalStorage)',
      strMenuId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsQxPrjMenusEN._CurrTabName, strMenuId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objQxPrjMenusCache: clsQxPrjMenusEN = JSON.parse(strTempObj);
    return objQxPrjMenusCache;
  }
  try {
    const objQxPrjMenus = await QxPrjMenus_GetObjByMenuIdAsync(strMenuId);
    if (objQxPrjMenus != null) {
      localStorage.setItem(strKey, JSON.stringify(objQxPrjMenus));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objQxPrjMenus;
    }
    return objQxPrjMenus;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strMenuId,
      qxPrjMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQxPrjMenus:所给的对象
 * @returns 对象
 */
export async function QxPrjMenus_UpdateObjInLstCache(
  objQxPrjMenus: clsQxPrjMenusEN,
  strQxPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstCache(strQxPrjId);
    const obj = arrQxPrjMenusObjLstCache.find(
      (x) => x.menuName == objQxPrjMenus.menuName && x.qxPrjId == objQxPrjMenus.qxPrjId,
    );
    if (obj != null) {
      objQxPrjMenus.menuId = obj.menuId;
      ObjectAssign(obj, objQxPrjMenus);
    } else {
      arrQxPrjMenusObjLstCache.push(objQxPrjMenus);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      qxPrjMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strMenuId:所给的关键字
 * @returns 对象
 */
export async function QxPrjMenus_GetNameByMenuIdCache(strMenuId: string, strQxPrjId: string) {
  if (IsNullOrEmpty(strMenuId) == true) {
    const strMsg = Format('参数:[strMenuId]不能为空!(In clsQxPrjMenusWApi.GetNameByMenuIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strMenuId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strMenuId]的长度:[{0}]不正确!(clsQxPrjMenusWApi.GetNameByMenuIdCache)',
      strMenuId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstCache(strQxPrjId);
  if (arrQxPrjMenusObjLstCache == null) return '';
  try {
    const arrQxPrjMenusSel = arrQxPrjMenusObjLstCache.filter((x) => x.menuId == strMenuId);
    let objQxPrjMenus: clsQxPrjMenusEN;
    if (arrQxPrjMenusSel.length > 0) {
      objQxPrjMenus = arrQxPrjMenusSel[0];
      return objQxPrjMenus.menuName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strMenuId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strQxPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function QxPrjMenus_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strQxPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strQxPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strQxPrjIdClassfy]不能为空!(In clsQxPrjMenusWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strQxPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strQxPrjIdClassfy]的长度:[{0}]不正确!(clsQxPrjMenusWApi.func)',
      strQxPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsQxPrjMenusEN.con_MenuId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsQxPrjMenusEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsQxPrjMenusEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strMenuId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objQxPrjMenus = await QxPrjMenus_GetObjByMenuIdCache(strMenuId, strQxPrjIdClassfy);
  if (objQxPrjMenus == null) return '';
  if (objQxPrjMenus.GetFldValue(strOutFldName) == null) return '';
  return objQxPrjMenus.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxPrjMenus_SortFunDefa(a: clsQxPrjMenusEN, b: clsQxPrjMenusEN): number {
  return a.menuId.localeCompare(b.menuId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxPrjMenus_SortFunDefa2Fld(a: clsQxPrjMenusEN, b: clsQxPrjMenusEN): number {
  if (a.menuName == b.menuName) return a.qxPrjId.localeCompare(b.qxPrjId);
  else return a.menuName.localeCompare(b.menuName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxPrjMenus_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxPrjMenusEN.con_MenuId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          return a.menuId.localeCompare(b.menuId);
        };
      case clsQxPrjMenusEN.con_MenuName:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          return a.menuName.localeCompare(b.menuName);
        };
      case clsQxPrjMenusEN.con_QxPrjId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          return a.qxPrjId.localeCompare(b.qxPrjId);
        };
      case clsQxPrjMenusEN.con_UpMenuId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          return a.upMenuId.localeCompare(b.upMenuId);
        };
      case clsQxPrjMenusEN.con_LinkFile:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (a.linkFile == null) return -1;
          if (b.linkFile == null) return 1;
          return a.linkFile.localeCompare(b.linkFile);
        };
      case clsQxPrjMenusEN.con_qsParameters:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (a.qsParameters == null) return -1;
          if (b.qsParameters == null) return 1;
          return a.qsParameters.localeCompare(b.qsParameters);
        };
      case clsQxPrjMenusEN.con_TabId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (a.tabId == null) return -1;
          if (b.tabId == null) return 1;
          return a.tabId.localeCompare(b.tabId);
        };
      case clsQxPrjMenusEN.con_ImgFile:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (a.imgFile == null) return -1;
          if (b.imgFile == null) return 1;
          return a.imgFile.localeCompare(b.imgFile);
        };
      case clsQxPrjMenusEN.con_RoleId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (a.roleId == null) return -1;
          if (b.roleId == null) return 1;
          return a.roleId.localeCompare(b.roleId);
        };
      case clsQxPrjMenusEN.con_OrderNum:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsQxPrjMenusEN.con_IsLeafNode:
        return (a: clsQxPrjMenusEN) => {
          if (a.isLeafNode == true) return 1;
          else return -1;
        };
      case clsQxPrjMenusEN.con_MenuSetId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (a.menuSetId == null) return -1;
          if (b.menuSetId == null) return 1;
          return a.menuSetId.localeCompare(b.menuSetId);
        };
      case clsQxPrjMenusEN.con_MenuTitle:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (a.menuTitle == null) return -1;
          if (b.menuTitle == null) return 1;
          return a.menuTitle.localeCompare(b.menuTitle);
        };
      case clsQxPrjMenusEN.con_PageDispModeId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (a.pageDispModeId == null) return -1;
          if (b.pageDispModeId == null) return 1;
          return a.pageDispModeId.localeCompare(b.pageDispModeId);
        };
      case clsQxPrjMenusEN.con_InUse:
        return (a: clsQxPrjMenusEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsQxPrjMenusEN.con_MenuControlName:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (a.menuControlName == null) return -1;
          if (b.menuControlName == null) return 1;
          return a.menuControlName.localeCompare(b.menuControlName);
        };
      case clsQxPrjMenusEN.con_ApplicationTypeId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsQxPrjMenusEN.con_UpdDate:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsQxPrjMenusEN.con_UpdUserId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsQxPrjMenusEN.con_Memo:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxPrjMenus]中不存在!(in ${qxPrjMenus_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsQxPrjMenusEN.con_MenuId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          return b.menuId.localeCompare(a.menuId);
        };
      case clsQxPrjMenusEN.con_MenuName:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          return b.menuName.localeCompare(a.menuName);
        };
      case clsQxPrjMenusEN.con_QxPrjId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          return b.qxPrjId.localeCompare(a.qxPrjId);
        };
      case clsQxPrjMenusEN.con_UpMenuId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          return b.upMenuId.localeCompare(a.upMenuId);
        };
      case clsQxPrjMenusEN.con_LinkFile:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (b.linkFile == null) return -1;
          if (a.linkFile == null) return 1;
          return b.linkFile.localeCompare(a.linkFile);
        };
      case clsQxPrjMenusEN.con_qsParameters:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (b.qsParameters == null) return -1;
          if (a.qsParameters == null) return 1;
          return b.qsParameters.localeCompare(a.qsParameters);
        };
      case clsQxPrjMenusEN.con_TabId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (b.tabId == null) return -1;
          if (a.tabId == null) return 1;
          return b.tabId.localeCompare(a.tabId);
        };
      case clsQxPrjMenusEN.con_ImgFile:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (b.imgFile == null) return -1;
          if (a.imgFile == null) return 1;
          return b.imgFile.localeCompare(a.imgFile);
        };
      case clsQxPrjMenusEN.con_RoleId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (b.roleId == null) return -1;
          if (a.roleId == null) return 1;
          return b.roleId.localeCompare(a.roleId);
        };
      case clsQxPrjMenusEN.con_OrderNum:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsQxPrjMenusEN.con_IsLeafNode:
        return (b: clsQxPrjMenusEN) => {
          if (b.isLeafNode == true) return 1;
          else return -1;
        };
      case clsQxPrjMenusEN.con_MenuSetId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (b.menuSetId == null) return -1;
          if (a.menuSetId == null) return 1;
          return b.menuSetId.localeCompare(a.menuSetId);
        };
      case clsQxPrjMenusEN.con_MenuTitle:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (b.menuTitle == null) return -1;
          if (a.menuTitle == null) return 1;
          return b.menuTitle.localeCompare(a.menuTitle);
        };
      case clsQxPrjMenusEN.con_PageDispModeId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (b.pageDispModeId == null) return -1;
          if (a.pageDispModeId == null) return 1;
          return b.pageDispModeId.localeCompare(a.pageDispModeId);
        };
      case clsQxPrjMenusEN.con_InUse:
        return (b: clsQxPrjMenusEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsQxPrjMenusEN.con_MenuControlName:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (b.menuControlName == null) return -1;
          if (a.menuControlName == null) return 1;
          return b.menuControlName.localeCompare(a.menuControlName);
        };
      case clsQxPrjMenusEN.con_ApplicationTypeId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsQxPrjMenusEN.con_UpdDate:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsQxPrjMenusEN.con_UpdUserId:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsQxPrjMenusEN.con_Memo:
        return (a: clsQxPrjMenusEN, b: clsQxPrjMenusEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxPrjMenus]中不存在!(in ${qxPrjMenus_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function QxPrjMenus_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsQxPrjMenusEN.con_MenuId:
      return (obj: clsQxPrjMenusEN) => {
        return obj.menuId === value;
      };
    case clsQxPrjMenusEN.con_MenuName:
      return (obj: clsQxPrjMenusEN) => {
        return obj.menuName === value;
      };
    case clsQxPrjMenusEN.con_QxPrjId:
      return (obj: clsQxPrjMenusEN) => {
        return obj.qxPrjId === value;
      };
    case clsQxPrjMenusEN.con_UpMenuId:
      return (obj: clsQxPrjMenusEN) => {
        return obj.upMenuId === value;
      };
    case clsQxPrjMenusEN.con_LinkFile:
      return (obj: clsQxPrjMenusEN) => {
        return obj.linkFile === value;
      };
    case clsQxPrjMenusEN.con_qsParameters:
      return (obj: clsQxPrjMenusEN) => {
        return obj.qsParameters === value;
      };
    case clsQxPrjMenusEN.con_TabId:
      return (obj: clsQxPrjMenusEN) => {
        return obj.tabId === value;
      };
    case clsQxPrjMenusEN.con_ImgFile:
      return (obj: clsQxPrjMenusEN) => {
        return obj.imgFile === value;
      };
    case clsQxPrjMenusEN.con_RoleId:
      return (obj: clsQxPrjMenusEN) => {
        return obj.roleId === value;
      };
    case clsQxPrjMenusEN.con_OrderNum:
      return (obj: clsQxPrjMenusEN) => {
        return obj.orderNum === value;
      };
    case clsQxPrjMenusEN.con_IsLeafNode:
      return (obj: clsQxPrjMenusEN) => {
        return obj.isLeafNode === value;
      };
    case clsQxPrjMenusEN.con_MenuSetId:
      return (obj: clsQxPrjMenusEN) => {
        return obj.menuSetId === value;
      };
    case clsQxPrjMenusEN.con_MenuTitle:
      return (obj: clsQxPrjMenusEN) => {
        return obj.menuTitle === value;
      };
    case clsQxPrjMenusEN.con_PageDispModeId:
      return (obj: clsQxPrjMenusEN) => {
        return obj.pageDispModeId === value;
      };
    case clsQxPrjMenusEN.con_InUse:
      return (obj: clsQxPrjMenusEN) => {
        return obj.inUse === value;
      };
    case clsQxPrjMenusEN.con_MenuControlName:
      return (obj: clsQxPrjMenusEN) => {
        return obj.menuControlName === value;
      };
    case clsQxPrjMenusEN.con_ApplicationTypeId:
      return (obj: clsQxPrjMenusEN) => {
        return obj.applicationTypeId === value;
      };
    case clsQxPrjMenusEN.con_UpdDate:
      return (obj: clsQxPrjMenusEN) => {
        return obj.updDate === value;
      };
    case clsQxPrjMenusEN.con_UpdUserId:
      return (obj: clsQxPrjMenusEN) => {
        return obj.updUserId === value;
      };
    case clsQxPrjMenusEN.con_Memo:
      return (obj: clsQxPrjMenusEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[QxPrjMenus]中不存在!(in ${qxPrjMenus_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strQxPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function QxPrjMenus_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strQxPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strQxPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strQxPrjIdClassfy]不能为空!(In clsQxPrjMenusWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strQxPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strQxPrjIdClassfy]的长度:[{0}]不正确!(clsQxPrjMenusWApi.funcKey)',
      strQxPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsQxPrjMenusEN.con_MenuId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrQxPrjMenus = await QxPrjMenus_GetObjLstCache(strQxPrjIdClassfy);
  if (arrQxPrjMenus == null) return [];
  let arrQxPrjMenusSel = arrQxPrjMenus;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrQxPrjMenusSel.length == 0) return [];
  return arrQxPrjMenusSel.map((x) => x.menuId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxPrjMenus_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 */
export async function QxPrjMenus_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export async function QxPrjMenus_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsQxPrjMenusEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objQxPrjMenus = QxPrjMenus_GetObjFromJsonObj(returnObj);
      return objQxPrjMenus;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxPrjMenus_GetObjLstClientCache(strQxPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsQxPrjMenusEN.WhereFormat) == false) {
    strWhereCond = Format(clsQxPrjMenusEN.WhereFormat, strQxPrjId);
  } else {
    strWhereCond = Format("QxPrjId='{0}'", strQxPrjId);
  }
  const strKey = Format('{0}_{1}', clsQxPrjMenusEN._CurrTabName, strQxPrjId);
  if (IsNullOrEmpty(clsQxPrjMenusEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxPrjMenusEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrQxPrjMenusExObjLstCache: Array<clsQxPrjMenusEN> = CacheHelper.Get(strKey);
    const arrQxPrjMenusObjLstT = QxPrjMenus_GetObjLstByJSONObjLst(arrQxPrjMenusExObjLstCache);
    return arrQxPrjMenusObjLstT;
  }
  try {
    const arrQxPrjMenusExObjLst = await QxPrjMenus_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrQxPrjMenusExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQxPrjMenusExObjLst.length,
    );
    console.log(strInfo);
    return arrQxPrjMenusExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxPrjMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxPrjMenus_GetObjLstlocalStorage(strQxPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsQxPrjMenusEN.WhereFormat) == false) {
    strWhereCond = Format(clsQxPrjMenusEN.WhereFormat, strQxPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsQxPrjMenusEN.con_QxPrjId, strQxPrjId);
  }
  const strKey = Format('{0}_{1}', clsQxPrjMenusEN._CurrTabName, strQxPrjId);
  if (IsNullOrEmpty(clsQxPrjMenusEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxPrjMenusEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQxPrjMenusExObjLstCache: Array<clsQxPrjMenusEN> = JSON.parse(strTempObjLst);
    const arrQxPrjMenusObjLstT = QxPrjMenus_GetObjLstByJSONObjLst(arrQxPrjMenusExObjLstCache);
    return arrQxPrjMenusObjLstT;
  }
  try {
    const arrQxPrjMenusExObjLst = await QxPrjMenus_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrQxPrjMenusExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQxPrjMenusExObjLst.length,
    );
    console.log(strInfo);
    return arrQxPrjMenusExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxPrjMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxPrjMenus_GetObjLstlocalStoragePureCache(strQxPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsQxPrjMenusEN._CurrTabName, strQxPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQxPrjMenusObjLstCache: Array<clsQxPrjMenusEN> = JSON.parse(strTempObjLst);
    return arrQxPrjMenusObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function QxPrjMenus_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsQxPrjMenusEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qxPrjMenus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxPrjMenus_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxPrjMenus_GetObjLstsessionStorage(strQxPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsQxPrjMenusEN.WhereFormat) == false) {
    strWhereCond = Format(clsQxPrjMenusEN.WhereFormat, strQxPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsQxPrjMenusEN.con_QxPrjId, strQxPrjId);
  }
  const strKey = Format('{0}_{1}', clsQxPrjMenusEN._CurrTabName, strQxPrjId);
  if (IsNullOrEmpty(clsQxPrjMenusEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxPrjMenusEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQxPrjMenusExObjLstCache: Array<clsQxPrjMenusEN> = JSON.parse(strTempObjLst);
    const arrQxPrjMenusObjLstT = QxPrjMenus_GetObjLstByJSONObjLst(arrQxPrjMenusExObjLstCache);
    return arrQxPrjMenusObjLstT;
  }
  try {
    const arrQxPrjMenusExObjLst = await QxPrjMenus_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrQxPrjMenusExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQxPrjMenusExObjLst.length,
    );
    console.log(strInfo);
    return arrQxPrjMenusExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxPrjMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxPrjMenus_GetObjLstsessionStoragePureCache(strQxPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsQxPrjMenusEN._CurrTabName, strQxPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQxPrjMenusObjLstCache: Array<clsQxPrjMenusEN> = JSON.parse(strTempObjLst);
    return arrQxPrjMenusObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxPrjMenus_GetObjLstCache(
  strQxPrjId: string,
): Promise<Array<clsQxPrjMenusEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strQxPrjId) == true) {
    const strMsg = Format(
      '参数:[strQxPrjId]不能为空！(In clsQxPrjMenusWApi.QxPrjMenus_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQxPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确！(clsQxPrjMenusWApi.QxPrjMenus_GetObjLstCache)',
      strQxPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrQxPrjMenusObjLstCache;
  switch (clsQxPrjMenusEN.CacheModeId) {
    case '04': //sessionStorage
      arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstsessionStorage(strQxPrjId);
      break;
    case '03': //localStorage
      arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstlocalStorage(strQxPrjId);
      break;
    case '02': //ClientCache
      arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstClientCache(strQxPrjId);
      break;
    default:
      arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstClientCache(strQxPrjId);
      break;
  }
  return arrQxPrjMenusObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxPrjMenus_GetObjLstPureCache(strQxPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrQxPrjMenusObjLstCache;
  switch (clsQxPrjMenusEN.CacheModeId) {
    case '04': //sessionStorage
      arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstsessionStoragePureCache(strQxPrjId);
      break;
    case '03': //localStorage
      arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstlocalStoragePureCache(strQxPrjId);
      break;
    case '02': //ClientCache
      arrQxPrjMenusObjLstCache = null;
      break;
    default:
      arrQxPrjMenusObjLstCache = null;
      break;
  }
  return arrQxPrjMenusObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrMenuIdCond:条件对象
 * @returns 对象列表子集
 */
export async function QxPrjMenus_GetSubObjLstCache(
  objQxPrjMenusCond: clsQxPrjMenusEN,
  strQxPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstCache(strQxPrjId);
  let arrQxPrjMenusSel = arrQxPrjMenusObjLstCache;
  if (objQxPrjMenusCond.sfFldComparisonOp == null || objQxPrjMenusCond.sfFldComparisonOp == '')
    return arrQxPrjMenusSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxPrjMenusCond.sfFldComparisonOp,
  );
  //console.log("clsQxPrjMenusWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxPrjMenusCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxPrjMenusCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrQxPrjMenusSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQxPrjMenusCond),
      qxPrjMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxPrjMenusEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrMenuId:关键字列表
 * @returns 对象列表
 **/
export async function QxPrjMenus_GetObjLstByMenuIdLstAsync(
  arrMenuId: Array<string>,
): Promise<Array<clsQxPrjMenusEN>> {
  const strThisFuncName = 'GetObjLstByMenuIdLstAsync';
  const strAction = 'GetObjLstByMenuIdLst';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrMenuId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qxPrjMenus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxPrjMenus_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrMenuIdLst:关键字列表
 * @returns 对象列表
 */
export async function QxPrjMenus_GetObjLstByMenuIdLstCache(
  arrMenuIdLst: Array<string>,
  strQxPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByMenuIdLstCache';
  try {
    const arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstCache(strQxPrjId);
    const arrQxPrjMenusSel = arrQxPrjMenusObjLstCache.filter(
      (x) => arrMenuIdLst.indexOf(x.menuId) > -1,
    );
    return arrQxPrjMenusSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrMenuIdLst.join(','),
      qxPrjMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
}

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function QxPrjMenus_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsQxPrjMenusEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qxPrjMenus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxPrjMenus_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function QxPrjMenus_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsQxPrjMenusEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRangePara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qxPrjMenus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxPrjMenus_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxPrjMenus_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strQxPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsQxPrjMenusEN>();
  const arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstCache(strQxPrjId);
  if (arrQxPrjMenusObjLstCache.length == 0) return arrQxPrjMenusObjLstCache;
  let arrQxPrjMenusSel = arrQxPrjMenusObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objQxPrjMenusCond = new clsQxPrjMenusEN();
  ObjectAssign(objQxPrjMenusCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsQxPrjMenusWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxPrjMenusCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrQxPrjMenusSel.length == 0) return arrQxPrjMenusSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxPrjMenusSel = arrQxPrjMenusSel.sort(QxPrjMenus_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxPrjMenusSel = arrQxPrjMenusSel.sort(objPagerPara.sortFun);
    }
    arrQxPrjMenusSel = arrQxPrjMenusSel.slice(intStart, intEnd);
    return arrQxPrjMenusSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxPrjMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxPrjMenusEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function QxPrjMenus_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxPrjMenusEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsQxPrjMenusEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPagerPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qxPrjMenus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxPrjMenus_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strMenuId:关键字
 * @returns 获取删除的结果
 **/
export async function QxPrjMenus_DelRecordAsync(strMenuId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strMenuId);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const configDel = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.delete(strUrl, configDel);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrMenuId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function QxPrjMenus_DelQxPrjMenussAsync(arrMenuId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelQxPrjMenussAsync';
  const strAction = 'DelQxPrjMenuss';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrMenuId, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function QxPrjMenus_DelQxPrjMenussByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelQxPrjMenussByCondAsync';
  const strAction = 'DelQxPrjMenussByCond';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objQxPrjMenusEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QxPrjMenus_AddNewRecordAsync(
  objQxPrjMenusEN: clsQxPrjMenusEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objQxPrjMenusEN.menuId === null || objQxPrjMenusEN.menuId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objQxPrjMenusEN);
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxPrjMenusEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objQxPrjMenusEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QxPrjMenus_AddNewRecordWithMaxIdAsync(
  objQxPrjMenusEN: clsQxPrjMenusEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxPrjMenusEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxPrjMenusEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function QxPrjMenus_AddNewRecordWithReturnKeyAsync(
  objQxPrjMenusEN: clsQxPrjMenusEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxPrjMenusEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objQxPrjMenusEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QxPrjMenus_UpdateRecordAsync(
  objQxPrjMenusEN: clsQxPrjMenusEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objQxPrjMenusEN.sfUpdFldSetStr === undefined ||
    objQxPrjMenusEN.sfUpdFldSetStr === null ||
    objQxPrjMenusEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objQxPrjMenusEN.menuId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxPrjMenusEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objQxPrjMenusEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxPrjMenus_UpdateWithConditionAsync(
  objQxPrjMenusEN: clsQxPrjMenusEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objQxPrjMenusEN.sfUpdFldSetStr === undefined ||
    objQxPrjMenusEN.sfUpdFldSetStr === null ||
    objQxPrjMenusEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objQxPrjMenusEN.menuId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);
  objQxPrjMenusEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxPrjMenusEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrMenuIdCond:条件对象
 * @returns 对象列表子集
 */
export async function QxPrjMenus_IsExistRecordCache(
  objQxPrjMenusCond: clsQxPrjMenusEN,
  strQxPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstCache(strQxPrjId);
  if (arrQxPrjMenusObjLstCache == null) return false;
  let arrQxPrjMenusSel = arrQxPrjMenusObjLstCache;
  if (objQxPrjMenusCond.sfFldComparisonOp == null || objQxPrjMenusCond.sfFldComparisonOp == '')
    return arrQxPrjMenusSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxPrjMenusCond.sfFldComparisonOp,
  );
  //console.log("clsQxPrjMenusWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxPrjMenusCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxPrjMenusCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrQxPrjMenusSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objQxPrjMenusCond),
      qxPrjMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return false;
}

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function QxPrjMenus_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param strMenuId:所给的关键字
 * @returns 对象
 */
export async function QxPrjMenus_IsExistCache(strMenuId: string, strQxPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstCache(strQxPrjId);
  if (arrQxPrjMenusObjLstCache == null) return false;
  try {
    const arrQxPrjMenusSel = arrQxPrjMenusObjLstCache.filter((x) => x.menuId == strMenuId);
    if (arrQxPrjMenusSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strMenuId,
      qxPrjMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return false;
}

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strMenuId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function QxPrjMenus_IsExistAsync(strMenuId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strMenuId,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export async function QxPrjMenus_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objQxPrjMenusCond:条件对象
 * @returns 对象列表记录数
 */
export async function QxPrjMenus_GetRecCountByCondCache(
  objQxPrjMenusCond: clsQxPrjMenusEN,
  strQxPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrQxPrjMenusObjLstCache = await QxPrjMenus_GetObjLstCache(strQxPrjId);
  if (arrQxPrjMenusObjLstCache == null) return 0;
  let arrQxPrjMenusSel = arrQxPrjMenusObjLstCache;
  if (objQxPrjMenusCond.sfFldComparisonOp == null || objQxPrjMenusCond.sfFldComparisonOp == '')
    return arrQxPrjMenusSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxPrjMenusCond.sfFldComparisonOp,
  );
  //console.log("clsQxPrjMenusWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxPrjMenusCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxPrjMenusCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxPrjMenusSel = arrQxPrjMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrQxPrjMenusSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQxPrjMenusCond),
      qxPrjMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefixAsync)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 **/
export async function QxPrjMenus_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdByPrefixAsync';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrefix,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function QxPrjMenus_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl_GP(qxPrjMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrefix,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPrjMenus_ConstructorName,
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function QxPrjMenus_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export function QxPrjMenus_ReFreshCache(strQxPrjId: string): void {
  if (IsNullOrEmpty(strQxPrjId) == true) {
    const strMsg = Format(
      '参数:[strQxPrjId]不能为空!(In clsQxPrjMenusWApi.clsQxPrjMenusWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQxPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(clsQxPrjMenusWApi.clsQxPrjMenusWApi.ReFreshCache)',
      strQxPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsQxPrjMenusEN._CurrTabName, strQxPrjId);
  switch (clsQxPrjMenusEN.CacheModeId) {
    case '04': //sessionStorage
      sessionStorage.removeItem(strKey);
      break;
    case '03': //localStorage
      localStorage.removeItem(strKey);
      break;
    case '02': //ClientCache
      CacheHelper.Remove(strKey);
      break;
    default:
      CacheHelper.Remove(strKey);
      break;
  }
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function QxPrjMenus_ReFreshThisCache(strQxPrjId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsQxPrjMenusEN._CurrTabName, strQxPrjId);
    switch (clsQxPrjMenusEN.CacheModeId) {
      case '04': //sessionStorage
        sessionStorage.removeItem(strKey);
        break;
      case '03': //localStorage
        localStorage.removeItem(strKey);
        break;
      case '02': //ClientCache
        CacheHelper.Remove(strKey);
        break;
      default:
        CacheHelper.Remove(strKey);
        break;
    }
    const strMsg = Format('刷新缓存成功!');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strQxPrjId:
*/
export async function QxPrjMenus_BindDdl_MenuIdByMenuSetIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strQxPrjId: string,
) {
  if (IsNullOrEmpty(strQxPrjId) == true) {
    const strMsg = Format(
      '参数:[strQxPrjId]不能为空！(In clsQxPrjMenusWApi.BindDdl_MenuIdByMenuSetIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQxPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确！(clsQxPrjMenusWApi.BindDdl_MenuIdByMenuSetIdInDiv)',
      strQxPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_MenuIdByMenuSetIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_MenuIdByMenuSetIdInDivCache");
  const arrObjLstSel = await QxPrjMenus_GetObjLstCache(strQxPrjId);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsQxPrjMenusEN.con_MenuId,
    clsQxPrjMenusEN.con_MenuName,
    '工程菜单',
  );
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strQxPrjId:
*/
export async function QxPrjMenus_BindDdl_MenuIdByQxPrjIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strQxPrjId: string,
) {
  if (IsNullOrEmpty(strQxPrjId) == true) {
    const strMsg = Format(
      '参数:[strQxPrjId]不能为空！(In clsQxPrjMenusWApi.BindDdl_MenuIdByQxPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQxPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确！(clsQxPrjMenusWApi.BindDdl_MenuIdByQxPrjIdInDiv)',
      strQxPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_MenuIdByQxPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_MenuIdByQxPrjIdInDivCache");
  let arrObjLstSel = await QxPrjMenus_GetObjLstCache(strQxPrjId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.qxPrjId == strQxPrjId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsQxPrjMenusEN.con_MenuId,
    clsQxPrjMenusEN.con_MenuName,
    '工程菜单',
  );
}
//(IsNeedGC == false)该表下拉框功能不需要生成;

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QxPrjMenus_CheckPropertyNew(pobjQxPrjMenusEN: clsQxPrjMenusEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjQxPrjMenusEN.menuName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[菜单名]不能为空(In 工程菜单)!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.qxPrjId) === true ||
    pobjQxPrjMenusEN.qxPrjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[项目Id]不能为空(In 工程菜单)!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.upMenuId) === true ||
    pobjQxPrjMenusEN.upMenuId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[上级菜单Id]不能为空(In 工程菜单)!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjQxPrjMenusEN.orderNum ||
    (pobjQxPrjMenusEN.orderNum != null && pobjQxPrjMenusEN.orderNum.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[排序号]不能为空(In 工程菜单)!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjQxPrjMenusEN.isLeafNode ||
    (pobjQxPrjMenusEN.isLeafNode != null && pobjQxPrjMenusEN.isLeafNode.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否叶子]不能为空(In 工程菜单)!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjQxPrjMenusEN.applicationTypeId ||
    (pobjQxPrjMenusEN.applicationTypeId != null &&
      pobjQxPrjMenusEN.applicationTypeId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[应用程序类型Id]不能为空(In 工程菜单)!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjQxPrjMenusEN.menuId) == false && GetStrLen(pobjQxPrjMenusEN.menuId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[菜单Id(menuId)]的长度不能超过8(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.menuId)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuName) == false &&
    GetStrLen(pobjQxPrjMenusEN.menuName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[菜单名(menuName)]的长度不能超过50(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.menuName)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxPrjMenusEN.qxPrjId) == false && GetStrLen(pobjQxPrjMenusEN.qxPrjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.qxPrjId)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.upMenuId) == false &&
    GetStrLen(pobjQxPrjMenusEN.upMenuId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[上级菜单Id(upMenuId)]的长度不能超过8(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.upMenuId)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.linkFile) == false &&
    GetStrLen(pobjQxPrjMenusEN.linkFile) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[链接文件(linkFile)]的长度不能超过500(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.linkFile)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.qsParameters) == false &&
    GetStrLen(pobjQxPrjMenusEN.qsParameters) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[qs参数(qsParameters)]的长度不能超过200(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.qsParameters)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxPrjMenusEN.tabId) == false && GetStrLen(pobjQxPrjMenusEN.tabId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.tabId)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.imgFile) == false &&
    GetStrLen(pobjQxPrjMenusEN.imgFile) > 300
  ) {
    throw new Error(
      '(errid:Watl000413)字段[图像文件(imgFile)]的长度不能超过300(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.imgFile)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxPrjMenusEN.roleId) == false && GetStrLen(pobjQxPrjMenusEN.roleId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[角色Id(roleId)]的长度不能超过8(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.roleId)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuSetId) == false &&
    GetStrLen(pobjQxPrjMenusEN.menuSetId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[菜单集Id(menuSetId)]的长度不能超过4(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.menuSetId)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuTitle) == false &&
    GetStrLen(pobjQxPrjMenusEN.menuTitle) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[菜单标题(menuTitle)]的长度不能超过50(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.menuTitle)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.pageDispModeId) == false &&
    GetStrLen(pobjQxPrjMenusEN.pageDispModeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[页面显示模式Id(pageDispModeId)]的长度不能超过2(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.pageDispModeId)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuControlName) == false &&
    GetStrLen(pobjQxPrjMenusEN.menuControlName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[菜单控件名(menuControlName)]的长度不能超过100(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.menuControlName)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.updDate) == false &&
    GetStrLen(pobjQxPrjMenusEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.updDate)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.updUserId) == false &&
    GetStrLen(pobjQxPrjMenusEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.updUserId)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxPrjMenusEN.memo) == false && GetStrLen(pobjQxPrjMenusEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.memo)(clsQxPrjMenusBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuId) == false &&
    undefined !== pobjQxPrjMenusEN.menuId &&
    tzDataType.isString(pobjQxPrjMenusEN.menuId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[菜单Id(menuId)]的值:[$(pobjQxPrjMenusEN.menuId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuName) == false &&
    undefined !== pobjQxPrjMenusEN.menuName &&
    tzDataType.isString(pobjQxPrjMenusEN.menuName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[菜单名(menuName)]的值:[$(pobjQxPrjMenusEN.menuName)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.qxPrjId) == false &&
    undefined !== pobjQxPrjMenusEN.qxPrjId &&
    tzDataType.isString(pobjQxPrjMenusEN.qxPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[$(pobjQxPrjMenusEN.qxPrjId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.upMenuId) == false &&
    undefined !== pobjQxPrjMenusEN.upMenuId &&
    tzDataType.isString(pobjQxPrjMenusEN.upMenuId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[上级菜单Id(upMenuId)]的值:[$(pobjQxPrjMenusEN.upMenuId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.linkFile) == false &&
    undefined !== pobjQxPrjMenusEN.linkFile &&
    tzDataType.isString(pobjQxPrjMenusEN.linkFile) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[链接文件(linkFile)]的值:[$(pobjQxPrjMenusEN.linkFile)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.qsParameters) == false &&
    undefined !== pobjQxPrjMenusEN.qsParameters &&
    tzDataType.isString(pobjQxPrjMenusEN.qsParameters) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[qs参数(qsParameters)]的值:[$(pobjQxPrjMenusEN.qsParameters)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.tabId) == false &&
    undefined !== pobjQxPrjMenusEN.tabId &&
    tzDataType.isString(pobjQxPrjMenusEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表ID(tabId)]的值:[$(pobjQxPrjMenusEN.tabId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.imgFile) == false &&
    undefined !== pobjQxPrjMenusEN.imgFile &&
    tzDataType.isString(pobjQxPrjMenusEN.imgFile) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[图像文件(imgFile)]的值:[$(pobjQxPrjMenusEN.imgFile)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.roleId) == false &&
    undefined !== pobjQxPrjMenusEN.roleId &&
    tzDataType.isString(pobjQxPrjMenusEN.roleId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[角色Id(roleId)]的值:[$(pobjQxPrjMenusEN.roleId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjQxPrjMenusEN.orderNum &&
    undefined !== pobjQxPrjMenusEN.orderNum &&
    tzDataType.isNumber(pobjQxPrjMenusEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[排序号(orderNum)]的值:[$(pobjQxPrjMenusEN.orderNum)], 非法,应该为数值型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjQxPrjMenusEN.isLeafNode &&
    undefined !== pobjQxPrjMenusEN.isLeafNode &&
    tzDataType.isBoolean(pobjQxPrjMenusEN.isLeafNode) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否叶子(isLeafNode)]的值:[$(pobjQxPrjMenusEN.isLeafNode)], 非法,应该为布尔型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuSetId) == false &&
    undefined !== pobjQxPrjMenusEN.menuSetId &&
    tzDataType.isString(pobjQxPrjMenusEN.menuSetId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[菜单集Id(menuSetId)]的值:[$(pobjQxPrjMenusEN.menuSetId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuTitle) == false &&
    undefined !== pobjQxPrjMenusEN.menuTitle &&
    tzDataType.isString(pobjQxPrjMenusEN.menuTitle) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[菜单标题(menuTitle)]的值:[$(pobjQxPrjMenusEN.menuTitle)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.pageDispModeId) == false &&
    undefined !== pobjQxPrjMenusEN.pageDispModeId &&
    tzDataType.isString(pobjQxPrjMenusEN.pageDispModeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[页面显示模式Id(pageDispModeId)]的值:[$(pobjQxPrjMenusEN.pageDispModeId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjQxPrjMenusEN.inUse &&
    undefined !== pobjQxPrjMenusEN.inUse &&
    tzDataType.isBoolean(pobjQxPrjMenusEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否在用(inUse)]的值:[$(pobjQxPrjMenusEN.inUse)], 非法,应该为布尔型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuControlName) == false &&
    undefined !== pobjQxPrjMenusEN.menuControlName &&
    tzDataType.isString(pobjQxPrjMenusEN.menuControlName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[菜单控件名(menuControlName)]的值:[$(pobjQxPrjMenusEN.menuControlName)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjQxPrjMenusEN.applicationTypeId &&
    undefined !== pobjQxPrjMenusEN.applicationTypeId &&
    tzDataType.isNumber(pobjQxPrjMenusEN.applicationTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[应用程序类型Id(applicationTypeId)]的值:[$(pobjQxPrjMenusEN.applicationTypeId)], 非法,应该为数值型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.updDate) == false &&
    undefined !== pobjQxPrjMenusEN.updDate &&
    tzDataType.isString(pobjQxPrjMenusEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjQxPrjMenusEN.updDate)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.updUserId) == false &&
    undefined !== pobjQxPrjMenusEN.updUserId &&
    tzDataType.isString(pobjQxPrjMenusEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjQxPrjMenusEN.updUserId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.memo) == false &&
    undefined !== pobjQxPrjMenusEN.memo &&
    tzDataType.isString(pobjQxPrjMenusEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjQxPrjMenusEN.memo)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.qxPrjId) == false &&
    pobjQxPrjMenusEN.qxPrjId != '[nuull]' &&
    GetStrLen(pobjQxPrjMenusEN.qxPrjId) != 4
  ) {
    throw '(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 工程菜单)!(clsQxPrjMenusBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.upMenuId) == false &&
    pobjQxPrjMenusEN.upMenuId != '[nuull]' &&
    GetStrLen(pobjQxPrjMenusEN.upMenuId) != 8
  ) {
    throw '(errid:Watl000415)字段[上级菜单Id]作为外键字段,长度应该为8(In 工程菜单)!(clsQxPrjMenusBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.roleId) == false &&
    pobjQxPrjMenusEN.roleId != '[nuull]' &&
    GetStrLen(pobjQxPrjMenusEN.roleId) != 8
  ) {
    throw '(errid:Watl000415)字段[角色Id]作为外键字段,长度应该为8(In 工程菜单)!(clsQxPrjMenusBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QxPrjMenus_CheckProperty4Update(pobjQxPrjMenusEN: clsQxPrjMenusEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjQxPrjMenusEN.menuId) == false && GetStrLen(pobjQxPrjMenusEN.menuId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[菜单Id(menuId)]的长度不能超过8(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.menuId)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuName) == false &&
    GetStrLen(pobjQxPrjMenusEN.menuName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[菜单名(menuName)]的长度不能超过50(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.menuName)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxPrjMenusEN.qxPrjId) == false && GetStrLen(pobjQxPrjMenusEN.qxPrjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.qxPrjId)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.upMenuId) == false &&
    GetStrLen(pobjQxPrjMenusEN.upMenuId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[上级菜单Id(upMenuId)]的长度不能超过8(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.upMenuId)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.linkFile) == false &&
    GetStrLen(pobjQxPrjMenusEN.linkFile) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[链接文件(linkFile)]的长度不能超过500(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.linkFile)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.qsParameters) == false &&
    GetStrLen(pobjQxPrjMenusEN.qsParameters) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[qs参数(qsParameters)]的长度不能超过200(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.qsParameters)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxPrjMenusEN.tabId) == false && GetStrLen(pobjQxPrjMenusEN.tabId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.tabId)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.imgFile) == false &&
    GetStrLen(pobjQxPrjMenusEN.imgFile) > 300
  ) {
    throw new Error(
      '(errid:Watl000416)字段[图像文件(imgFile)]的长度不能超过300(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.imgFile)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxPrjMenusEN.roleId) == false && GetStrLen(pobjQxPrjMenusEN.roleId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[角色Id(roleId)]的长度不能超过8(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.roleId)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuSetId) == false &&
    GetStrLen(pobjQxPrjMenusEN.menuSetId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[菜单集Id(menuSetId)]的长度不能超过4(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.menuSetId)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuTitle) == false &&
    GetStrLen(pobjQxPrjMenusEN.menuTitle) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[菜单标题(menuTitle)]的长度不能超过50(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.menuTitle)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.pageDispModeId) == false &&
    GetStrLen(pobjQxPrjMenusEN.pageDispModeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[页面显示模式Id(pageDispModeId)]的长度不能超过2(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.pageDispModeId)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuControlName) == false &&
    GetStrLen(pobjQxPrjMenusEN.menuControlName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[菜单控件名(menuControlName)]的长度不能超过100(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.menuControlName)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.updDate) == false &&
    GetStrLen(pobjQxPrjMenusEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.updDate)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.updUserId) == false &&
    GetStrLen(pobjQxPrjMenusEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.updUserId)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxPrjMenusEN.memo) == false && GetStrLen(pobjQxPrjMenusEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 工程菜单(QxPrjMenus))!值:$(pobjQxPrjMenusEN.memo)(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuId) == false &&
    undefined !== pobjQxPrjMenusEN.menuId &&
    tzDataType.isString(pobjQxPrjMenusEN.menuId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[菜单Id(menuId)]的值:[$(pobjQxPrjMenusEN.menuId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuName) == false &&
    undefined !== pobjQxPrjMenusEN.menuName &&
    tzDataType.isString(pobjQxPrjMenusEN.menuName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[菜单名(menuName)]的值:[$(pobjQxPrjMenusEN.menuName)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.qxPrjId) == false &&
    undefined !== pobjQxPrjMenusEN.qxPrjId &&
    tzDataType.isString(pobjQxPrjMenusEN.qxPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[$(pobjQxPrjMenusEN.qxPrjId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.upMenuId) == false &&
    undefined !== pobjQxPrjMenusEN.upMenuId &&
    tzDataType.isString(pobjQxPrjMenusEN.upMenuId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[上级菜单Id(upMenuId)]的值:[$(pobjQxPrjMenusEN.upMenuId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.linkFile) == false &&
    undefined !== pobjQxPrjMenusEN.linkFile &&
    tzDataType.isString(pobjQxPrjMenusEN.linkFile) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[链接文件(linkFile)]的值:[$(pobjQxPrjMenusEN.linkFile)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.qsParameters) == false &&
    undefined !== pobjQxPrjMenusEN.qsParameters &&
    tzDataType.isString(pobjQxPrjMenusEN.qsParameters) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[qs参数(qsParameters)]的值:[$(pobjQxPrjMenusEN.qsParameters)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.tabId) == false &&
    undefined !== pobjQxPrjMenusEN.tabId &&
    tzDataType.isString(pobjQxPrjMenusEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表ID(tabId)]的值:[$(pobjQxPrjMenusEN.tabId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.imgFile) == false &&
    undefined !== pobjQxPrjMenusEN.imgFile &&
    tzDataType.isString(pobjQxPrjMenusEN.imgFile) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[图像文件(imgFile)]的值:[$(pobjQxPrjMenusEN.imgFile)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.roleId) == false &&
    undefined !== pobjQxPrjMenusEN.roleId &&
    tzDataType.isString(pobjQxPrjMenusEN.roleId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[角色Id(roleId)]的值:[$(pobjQxPrjMenusEN.roleId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjQxPrjMenusEN.orderNum &&
    undefined !== pobjQxPrjMenusEN.orderNum &&
    tzDataType.isNumber(pobjQxPrjMenusEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[排序号(orderNum)]的值:[$(pobjQxPrjMenusEN.orderNum)], 非法,应该为数值型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjQxPrjMenusEN.isLeafNode &&
    undefined !== pobjQxPrjMenusEN.isLeafNode &&
    tzDataType.isBoolean(pobjQxPrjMenusEN.isLeafNode) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否叶子(isLeafNode)]的值:[$(pobjQxPrjMenusEN.isLeafNode)], 非法,应该为布尔型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuSetId) == false &&
    undefined !== pobjQxPrjMenusEN.menuSetId &&
    tzDataType.isString(pobjQxPrjMenusEN.menuSetId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[菜单集Id(menuSetId)]的值:[$(pobjQxPrjMenusEN.menuSetId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuTitle) == false &&
    undefined !== pobjQxPrjMenusEN.menuTitle &&
    tzDataType.isString(pobjQxPrjMenusEN.menuTitle) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[菜单标题(menuTitle)]的值:[$(pobjQxPrjMenusEN.menuTitle)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.pageDispModeId) == false &&
    undefined !== pobjQxPrjMenusEN.pageDispModeId &&
    tzDataType.isString(pobjQxPrjMenusEN.pageDispModeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[页面显示模式Id(pageDispModeId)]的值:[$(pobjQxPrjMenusEN.pageDispModeId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjQxPrjMenusEN.inUse &&
    undefined !== pobjQxPrjMenusEN.inUse &&
    tzDataType.isBoolean(pobjQxPrjMenusEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否在用(inUse)]的值:[$(pobjQxPrjMenusEN.inUse)], 非法,应该为布尔型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuControlName) == false &&
    undefined !== pobjQxPrjMenusEN.menuControlName &&
    tzDataType.isString(pobjQxPrjMenusEN.menuControlName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[菜单控件名(menuControlName)]的值:[$(pobjQxPrjMenusEN.menuControlName)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjQxPrjMenusEN.applicationTypeId &&
    undefined !== pobjQxPrjMenusEN.applicationTypeId &&
    tzDataType.isNumber(pobjQxPrjMenusEN.applicationTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[应用程序类型Id(applicationTypeId)]的值:[$(pobjQxPrjMenusEN.applicationTypeId)], 非法,应该为数值型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.updDate) == false &&
    undefined !== pobjQxPrjMenusEN.updDate &&
    tzDataType.isString(pobjQxPrjMenusEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjQxPrjMenusEN.updDate)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.updUserId) == false &&
    undefined !== pobjQxPrjMenusEN.updUserId &&
    tzDataType.isString(pobjQxPrjMenusEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjQxPrjMenusEN.updUserId)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.memo) == false &&
    undefined !== pobjQxPrjMenusEN.memo &&
    tzDataType.isString(pobjQxPrjMenusEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjQxPrjMenusEN.memo)], 非法,应该为字符型(In 工程菜单(QxPrjMenus))!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.menuId) === true ||
    pobjQxPrjMenusEN.menuId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[菜单Id]不能为空(In 工程菜单)!(clsQxPrjMenusBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.qxPrjId) == false &&
    pobjQxPrjMenusEN.qxPrjId != '[nuull]' &&
    GetStrLen(pobjQxPrjMenusEN.qxPrjId) != 4
  ) {
    throw '(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 工程菜单)!(clsQxPrjMenusBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.upMenuId) == false &&
    pobjQxPrjMenusEN.upMenuId != '[nuull]' &&
    GetStrLen(pobjQxPrjMenusEN.upMenuId) != 8
  ) {
    throw '(errid:Watl000418)字段[上级菜单Id]作为外键字段,长度应该为8(In 工程菜单)!(clsQxPrjMenusBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjQxPrjMenusEN.roleId) == false &&
    pobjQxPrjMenusEN.roleId != '[nuull]' &&
    GetStrLen(pobjQxPrjMenusEN.roleId) != 8
  ) {
    throw '(errid:Watl000418)字段[角色Id]作为外键字段,长度应该为8(In 工程菜单)!(clsQxPrjMenusBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxPrjMenus_GetJSONStrByObj(pobjQxPrjMenusEN: clsQxPrjMenusEN): string {
  pobjQxPrjMenusEN.sfUpdFldSetStr = pobjQxPrjMenusEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjQxPrjMenusEN);
  } catch (objException) {
    const strEx = GetExceptionStr(objException);
    myShowErrorMsg(strEx);
  }
  if (strJson == undefined) return '';
  else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2024-01-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function QxPrjMenus_GetObjLstByJSONStr(strJSON: string): Array<clsQxPrjMenusEN> {
  let arrQxPrjMenusObjLst = new Array<clsQxPrjMenusEN>();
  if (strJSON === '') {
    return arrQxPrjMenusObjLst;
  }
  try {
    arrQxPrjMenusObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrQxPrjMenusObjLst;
  }
  return arrQxPrjMenusObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxPrjMenusObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function QxPrjMenus_GetObjLstByJSONObjLst(
  arrQxPrjMenusObjLstS: Array<clsQxPrjMenusEN>,
): Array<clsQxPrjMenusEN> {
  const arrQxPrjMenusObjLst = new Array<clsQxPrjMenusEN>();
  for (const objInFor of arrQxPrjMenusObjLstS) {
    const obj1 = QxPrjMenus_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrQxPrjMenusObjLst.push(obj1);
  }
  return arrQxPrjMenusObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxPrjMenus_GetObjByJSONStr(strJSON: string): clsQxPrjMenusEN {
  let pobjQxPrjMenusEN = new clsQxPrjMenusEN();
  if (strJSON === '') {
    return pobjQxPrjMenusEN;
  }
  try {
    pobjQxPrjMenusEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjQxPrjMenusEN;
  }
  return pobjQxPrjMenusEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function QxPrjMenus_GetCombineCondition(objQxPrjMenusCond: clsQxPrjMenusEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_MenuId,
    ) == true
  ) {
    const strComparisonOpMenuId: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_MenuId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_MenuId,
      objQxPrjMenusCond.menuId,
      strComparisonOpMenuId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_MenuName,
    ) == true
  ) {
    const strComparisonOpMenuName: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_MenuName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_MenuName,
      objQxPrjMenusCond.menuName,
      strComparisonOpMenuName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_QxPrjId,
    ) == true
  ) {
    const strComparisonOpQxPrjId: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_QxPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_QxPrjId,
      objQxPrjMenusCond.qxPrjId,
      strComparisonOpQxPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_UpMenuId,
    ) == true
  ) {
    const strComparisonOpUpMenuId: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_UpMenuId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_UpMenuId,
      objQxPrjMenusCond.upMenuId,
      strComparisonOpUpMenuId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_LinkFile,
    ) == true
  ) {
    const strComparisonOpLinkFile: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_LinkFile];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_LinkFile,
      objQxPrjMenusCond.linkFile,
      strComparisonOpLinkFile,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_qsParameters,
    ) == true
  ) {
    const strComparisonOpqsParameters: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_qsParameters];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_qsParameters,
      objQxPrjMenusCond.qsParameters,
      strComparisonOpqsParameters,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_TabId,
      objQxPrjMenusCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_ImgFile,
    ) == true
  ) {
    const strComparisonOpImgFile: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_ImgFile];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_ImgFile,
      objQxPrjMenusCond.imgFile,
      strComparisonOpImgFile,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_RoleId,
    ) == true
  ) {
    const strComparisonOpRoleId: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_RoleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_RoleId,
      objQxPrjMenusCond.roleId,
      strComparisonOpRoleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQxPrjMenusEN.con_OrderNum,
      objQxPrjMenusCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_IsLeafNode,
    ) == true
  ) {
    if (objQxPrjMenusCond.isLeafNode == true) {
      strWhereCond += Format(" And {0} = '1'", clsQxPrjMenusEN.con_IsLeafNode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsQxPrjMenusEN.con_IsLeafNode);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_MenuSetId,
    ) == true
  ) {
    const strComparisonOpMenuSetId: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_MenuSetId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_MenuSetId,
      objQxPrjMenusCond.menuSetId,
      strComparisonOpMenuSetId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_MenuTitle,
    ) == true
  ) {
    const strComparisonOpMenuTitle: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_MenuTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_MenuTitle,
      objQxPrjMenusCond.menuTitle,
      strComparisonOpMenuTitle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_PageDispModeId,
    ) == true
  ) {
    const strComparisonOpPageDispModeId: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_PageDispModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_PageDispModeId,
      objQxPrjMenusCond.pageDispModeId,
      strComparisonOpPageDispModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_InUse,
    ) == true
  ) {
    if (objQxPrjMenusCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsQxPrjMenusEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsQxPrjMenusEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_MenuControlName,
    ) == true
  ) {
    const strComparisonOpMenuControlName: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_MenuControlName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_MenuControlName,
      objQxPrjMenusCond.menuControlName,
      strComparisonOpMenuControlName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQxPrjMenusEN.con_ApplicationTypeId,
      objQxPrjMenusCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_UpdDate,
      objQxPrjMenusCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_UpdUserId,
      objQxPrjMenusCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPrjMenusCond.dicFldComparisonOp,
      clsQxPrjMenusEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objQxPrjMenusCond.dicFldComparisonOp[clsQxPrjMenusEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPrjMenusEN.con_Memo,
      objQxPrjMenusCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--QxPrjMenus(工程菜单),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strMenuName: 菜单名(要求唯一的字段)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function QxPrjMenus_GetUniCondStr(objQxPrjMenusEN: clsQxPrjMenusEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and MenuName = '{0}'", objQxPrjMenusEN.menuName);
  strWhereCond += Format(" and QxPrjId = '{0}'", objQxPrjMenusEN.qxPrjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--QxPrjMenus(工程菜单),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strMenuName: 菜单名(要求唯一的字段)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function QxPrjMenus_GetUniCondStr4Update(objQxPrjMenusEN: clsQxPrjMenusEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and MenuId <> '{0}'", objQxPrjMenusEN.menuId);
  strWhereCond += Format(" and MenuName = '{0}'", objQxPrjMenusEN.menuName);
  strWhereCond += Format(" and QxPrjId = '{0}'", objQxPrjMenusEN.qxPrjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxPrjMenusENS:源对象
 * @param objQxPrjMenusENT:目标对象
 */
export function QxPrjMenus_GetObjFromJsonObj(objQxPrjMenusENS: clsQxPrjMenusEN): clsQxPrjMenusEN {
  const objQxPrjMenusENT: clsQxPrjMenusEN = new clsQxPrjMenusEN();
  ObjectAssign(objQxPrjMenusENT, objQxPrjMenusENS);
  return objQxPrjMenusENT;
}
