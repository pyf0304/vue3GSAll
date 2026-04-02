/**
 * 类名:clsXzMajorDirectionWApi
 * 表名:XzMajorDirection(01120552)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/10 08:14:10
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 专业方向(XzMajorDirection)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月10日.
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
import { clsXzMajorDirectionEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorDirectionEN';
import { vXzMajorDirection_ReFreshThisCache } from '@/ts/L3ForWApi/BaseInfo/clsvXzMajorDirectionWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const xzMajorDirection_Controller = 'XzMajorDirectionApi';
export const xzMajorDirection_ConstructorName = 'xzMajorDirection';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strMajorDirectionId:关键字
 * @returns 对象
 **/
export async function XzMajorDirection_GetObjByMajorDirectionIdAsync(
  strMajorDirectionId: string,
): Promise<clsXzMajorDirectionEN | null> {
  const strThisFuncName = 'GetObjByMajorDirectionIdAsync';

  if (IsNullOrEmpty(strMajorDirectionId) == true) {
    const strMsg = Format(
      '参数:[strMajorDirectionId]不能为空!(In clsXzMajorDirectionWApi.GetObjByMajorDirectionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strMajorDirectionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strMajorDirectionId]的长度:[{0}]不正确!(clsXzMajorDirectionWApi.GetObjByMajorDirectionIdAsync)',
      strMajorDirectionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByMajorDirectionId';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strMajorDirectionId,
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
      const objXzMajorDirection = XzMajorDirection_GetObjFromJsonObj(returnObj);
      return objXzMajorDirection;
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
 * @param strMajorDirectionId:所给的关键字
 * @returns 对象
 */
export async function XzMajorDirection_GetObjByMajorDirectionIdCache(
  strMajorDirectionId: string,
  strIdXzMajor: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByMajorDirectionIdCache';

  if (IsNullOrEmpty(strMajorDirectionId) == true) {
    const strMsg = Format(
      '参数:[strMajorDirectionId]不能为空!(In clsXzMajorDirectionWApi.GetObjByMajorDirectionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strMajorDirectionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strMajorDirectionId]的长度:[{0}]不正确!(clsXzMajorDirectionWApi.GetObjByMajorDirectionIdCache)',
      strMajorDirectionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstCache(strIdXzMajor);
  try {
    const arrXzMajorDirectionSel = arrXzMajorDirectionObjLstCache.filter(
      (x) => x.majorDirectionId == strMajorDirectionId,
    );
    let objXzMajorDirection: clsXzMajorDirectionEN;
    if (arrXzMajorDirectionSel.length > 0) {
      objXzMajorDirection = arrXzMajorDirectionSel[0];
      return objXzMajorDirection;
    } else {
      if (bolTryAsyncOnce == true) {
        const objXzMajorDirectionConst = await XzMajorDirection_GetObjByMajorDirectionIdAsync(
          strMajorDirectionId,
        );
        if (objXzMajorDirectionConst != null) {
          XzMajorDirection_ReFreshThisCache(strIdXzMajor);
          return objXzMajorDirectionConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strMajorDirectionId,
      xzMajorDirection_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strMajorDirectionId:所给的关键字
 * @returns 对象
 */
export async function XzMajorDirection_GetObjByMajorDirectionIdlocalStorage(
  strMajorDirectionId: string,
) {
  const strThisFuncName = 'GetObjByMajorDirectionIdlocalStorage';

  if (IsNullOrEmpty(strMajorDirectionId) == true) {
    const strMsg = Format(
      '参数:[strMajorDirectionId]不能为空!(In clsXzMajorDirectionWApi.GetObjByMajorDirectionIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strMajorDirectionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strMajorDirectionId]的长度:[{0}]不正确!(clsXzMajorDirectionWApi.GetObjByMajorDirectionIdlocalStorage)',
      strMajorDirectionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsXzMajorDirectionEN._CurrTabName, strMajorDirectionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objXzMajorDirectionCache: clsXzMajorDirectionEN = JSON.parse(strTempObj);
    return objXzMajorDirectionCache;
  }
  try {
    const objXzMajorDirection = await XzMajorDirection_GetObjByMajorDirectionIdAsync(
      strMajorDirectionId,
    );
    if (objXzMajorDirection != null) {
      localStorage.setItem(strKey, JSON.stringify(objXzMajorDirection));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objXzMajorDirection;
    }
    return objXzMajorDirection;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strMajorDirectionId,
      xzMajorDirection_ConstructorName,
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
 * @param objXzMajorDirection:所给的对象
 * @returns 对象
 */
export async function XzMajorDirection_UpdateObjInLstCache(
  objXzMajorDirection: clsXzMajorDirectionEN,
  strIdXzMajor: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstCache(strIdXzMajor);
    const obj = arrXzMajorDirectionObjLstCache.find(
      (x) =>
        x.idXzMajor == objXzMajorDirection.idXzMajor &&
        x.majorDirectionName == objXzMajorDirection.majorDirectionName,
    );
    if (obj != null) {
      objXzMajorDirection.majorDirectionId = obj.majorDirectionId;
      ObjectAssign(obj, objXzMajorDirection);
    } else {
      arrXzMajorDirectionObjLstCache.push(objXzMajorDirection);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      xzMajorDirection_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strMajorDirectionId:所给的关键字
 * @returns 对象
 */
export async function XzMajorDirection_GetNameByMajorDirectionIdCache(
  strMajorDirectionId: string,
  strIdXzMajor: string,
) {
  if (IsNullOrEmpty(strMajorDirectionId) == true) {
    const strMsg = Format(
      '参数:[strMajorDirectionId]不能为空!(In clsXzMajorDirectionWApi.GetNameByMajorDirectionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strMajorDirectionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strMajorDirectionId]的长度:[{0}]不正确!(clsXzMajorDirectionWApi.GetNameByMajorDirectionIdCache)',
      strMajorDirectionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstCache(strIdXzMajor);
  if (arrXzMajorDirectionObjLstCache == null) return '';
  try {
    const arrXzMajorDirectionSel = arrXzMajorDirectionObjLstCache.filter(
      (x) => x.majorDirectionId == strMajorDirectionId,
    );
    let objXzMajorDirection: clsXzMajorDirectionEN;
    if (arrXzMajorDirectionSel.length > 0) {
      objXzMajorDirection = arrXzMajorDirectionSel[0];
      return objXzMajorDirection.majorDirectionName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strMajorDirectionId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strIdXzMajor:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function XzMajorDirection_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdXzMajorClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdXzMajorClassfy) == true) {
    const strMsg = Format('参数:[strIdXzMajorClassfy]不能为空!(In clsXzMajorDirectionWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajorClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajorClassfy]的长度:[{0}]不正确!(clsXzMajorDirectionWApi.func)',
      strIdXzMajorClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsXzMajorDirectionEN.con_MajorDirectionId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsXzMajorDirectionEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsXzMajorDirectionEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strMajorDirectionId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objXzMajorDirection = await XzMajorDirection_GetObjByMajorDirectionIdCache(
    strMajorDirectionId,
    strIdXzMajorClassfy,
  );
  if (objXzMajorDirection == null) return '';
  if (objXzMajorDirection.GetFldValue(strOutFldName) == null) return '';
  return objXzMajorDirection.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function XzMajorDirection_SortFunDefa(
  a: clsXzMajorDirectionEN,
  b: clsXzMajorDirectionEN,
): number {
  return a.majorDirectionId.localeCompare(b.majorDirectionId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function XzMajorDirection_SortFunDefa2Fld(
  a: clsXzMajorDirectionEN,
  b: clsXzMajorDirectionEN,
): number {
  if (a.idXzMajor == b.idXzMajor) return a.majorDirectionName.localeCompare(b.majorDirectionName);
  else return a.idXzMajor.localeCompare(b.idXzMajor);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function XzMajorDirection_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsXzMajorDirectionEN.con_MajorDirectionId:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          return a.majorDirectionId.localeCompare(b.majorDirectionId);
        };
      case clsXzMajorDirectionEN.con_IdXzMajor:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          return a.idXzMajor.localeCompare(b.idXzMajor);
        };
      case clsXzMajorDirectionEN.con_MajorDirectionName:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          return a.majorDirectionName.localeCompare(b.majorDirectionName);
        };
      case clsXzMajorDirectionEN.con_MajorDirectionENName:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          if (a.majorDirectionENName == null) return -1;
          if (b.majorDirectionENName == null) return 1;
          return a.majorDirectionENName.localeCompare(b.majorDirectionENName);
        };
      case clsXzMajorDirectionEN.con_MajorDirectionExplain:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          if (a.majorDirectionExplain == null) return -1;
          if (b.majorDirectionExplain == null) return 1;
          return a.majorDirectionExplain.localeCompare(b.majorDirectionExplain);
        };
      case clsXzMajorDirectionEN.con_IsVisible:
        return (a: clsXzMajorDirectionEN) => {
          if (a.isVisible == true) return 1;
          else return -1;
        };
      case clsXzMajorDirectionEN.con_UpdDate:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsXzMajorDirectionEN.con_UpdUser:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsXzMajorDirectionEN.con_Memo:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzMajorDirection]中不存在!(in ${xzMajorDirection_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsXzMajorDirectionEN.con_MajorDirectionId:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          return b.majorDirectionId.localeCompare(a.majorDirectionId);
        };
      case clsXzMajorDirectionEN.con_IdXzMajor:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          return b.idXzMajor.localeCompare(a.idXzMajor);
        };
      case clsXzMajorDirectionEN.con_MajorDirectionName:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          return b.majorDirectionName.localeCompare(a.majorDirectionName);
        };
      case clsXzMajorDirectionEN.con_MajorDirectionENName:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          if (b.majorDirectionENName == null) return -1;
          if (a.majorDirectionENName == null) return 1;
          return b.majorDirectionENName.localeCompare(a.majorDirectionENName);
        };
      case clsXzMajorDirectionEN.con_MajorDirectionExplain:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          if (b.majorDirectionExplain == null) return -1;
          if (a.majorDirectionExplain == null) return 1;
          return b.majorDirectionExplain.localeCompare(a.majorDirectionExplain);
        };
      case clsXzMajorDirectionEN.con_IsVisible:
        return (b: clsXzMajorDirectionEN) => {
          if (b.isVisible == true) return 1;
          else return -1;
        };
      case clsXzMajorDirectionEN.con_UpdDate:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsXzMajorDirectionEN.con_UpdUser:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsXzMajorDirectionEN.con_Memo:
        return (a: clsXzMajorDirectionEN, b: clsXzMajorDirectionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzMajorDirection]中不存在!(in ${xzMajorDirection_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function XzMajorDirection_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsXzMajorDirectionEN.con_MajorDirectionId:
      return (obj: clsXzMajorDirectionEN) => {
        return obj.majorDirectionId === value;
      };
    case clsXzMajorDirectionEN.con_IdXzMajor:
      return (obj: clsXzMajorDirectionEN) => {
        return obj.idXzMajor === value;
      };
    case clsXzMajorDirectionEN.con_MajorDirectionName:
      return (obj: clsXzMajorDirectionEN) => {
        return obj.majorDirectionName === value;
      };
    case clsXzMajorDirectionEN.con_MajorDirectionENName:
      return (obj: clsXzMajorDirectionEN) => {
        return obj.majorDirectionENName === value;
      };
    case clsXzMajorDirectionEN.con_MajorDirectionExplain:
      return (obj: clsXzMajorDirectionEN) => {
        return obj.majorDirectionExplain === value;
      };
    case clsXzMajorDirectionEN.con_IsVisible:
      return (obj: clsXzMajorDirectionEN) => {
        return obj.isVisible === value;
      };
    case clsXzMajorDirectionEN.con_UpdDate:
      return (obj: clsXzMajorDirectionEN) => {
        return obj.updDate === value;
      };
    case clsXzMajorDirectionEN.con_UpdUser:
      return (obj: clsXzMajorDirectionEN) => {
        return obj.updUser === value;
      };
    case clsXzMajorDirectionEN.con_Memo:
      return (obj: clsXzMajorDirectionEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[XzMajorDirection]中不存在!(in ${xzMajorDirection_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strIdXzMajor:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function XzMajorDirection_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdXzMajorClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdXzMajorClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajorClassfy]不能为空!(In clsXzMajorDirectionWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajorClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajorClassfy]的长度:[{0}]不正确!(clsXzMajorDirectionWApi.funcKey)',
      strIdXzMajorClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsXzMajorDirectionEN.con_MajorDirectionId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrXzMajorDirection = await XzMajorDirection_GetObjLstCache(strIdXzMajorClassfy);
  if (arrXzMajorDirection == null) return [];
  let arrXzMajorDirectionSel = arrXzMajorDirection;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrXzMajorDirectionSel.length == 0) return [];
  return arrXzMajorDirectionSel.map((x) => x.majorDirectionId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzMajorDirection_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
export async function XzMajorDirection_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
export async function XzMajorDirection_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsXzMajorDirectionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

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
      const objXzMajorDirection = XzMajorDirection_GetObjFromJsonObj(returnObj);
      return objXzMajorDirection;
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
export async function XzMajorDirection_GetObjLstClientCache(strIdXzMajor: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsXzMajorDirectionEN.WhereFormat) == false) {
    strWhereCond = Format(clsXzMajorDirectionEN.WhereFormat, strIdXzMajor);
  } else {
    strWhereCond = Format("IdXzMajor='{0}'", strIdXzMajor);
  }
  const strKey = Format('{0}_{1}', clsXzMajorDirectionEN._CurrTabName, strIdXzMajor);
  if (IsNullOrEmpty(clsXzMajorDirectionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzMajorDirectionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrXzMajorDirectionExObjLstCache: Array<clsXzMajorDirectionEN> = CacheHelper.Get(strKey);
    const arrXzMajorDirectionObjLstT = XzMajorDirection_GetObjLstByJSONObjLst(
      arrXzMajorDirectionExObjLstCache,
    );
    return arrXzMajorDirectionObjLstT;
  }
  try {
    const arrXzMajorDirectionExObjLst = await XzMajorDirection_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrXzMajorDirectionExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzMajorDirectionExObjLst.length,
    );
    console.log(strInfo);
    return arrXzMajorDirectionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzMajorDirection_ConstructorName,
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
export async function XzMajorDirection_GetObjLstlocalStorage(strIdXzMajor: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsXzMajorDirectionEN.WhereFormat) == false) {
    strWhereCond = Format(clsXzMajorDirectionEN.WhereFormat, strIdXzMajor);
  } else {
    strWhereCond = Format("{0}='{1}'", clsXzMajorDirectionEN.con_IdXzMajor, strIdXzMajor);
  }
  const strKey = Format('{0}_{1}', clsXzMajorDirectionEN._CurrTabName, strIdXzMajor);
  if (IsNullOrEmpty(clsXzMajorDirectionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzMajorDirectionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzMajorDirectionExObjLstCache: Array<clsXzMajorDirectionEN> =
      JSON.parse(strTempObjLst);
    const arrXzMajorDirectionObjLstT = XzMajorDirection_GetObjLstByJSONObjLst(
      arrXzMajorDirectionExObjLstCache,
    );
    return arrXzMajorDirectionObjLstT;
  }
  try {
    const arrXzMajorDirectionExObjLst = await XzMajorDirection_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrXzMajorDirectionExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzMajorDirectionExObjLst.length,
    );
    console.log(strInfo);
    return arrXzMajorDirectionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzMajorDirection_ConstructorName,
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
export async function XzMajorDirection_GetObjLstlocalStoragePureCache(strIdXzMajor: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsXzMajorDirectionEN._CurrTabName, strIdXzMajor);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzMajorDirectionObjLstCache: Array<clsXzMajorDirectionEN> = JSON.parse(strTempObjLst);
    return arrXzMajorDirectionObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function XzMajorDirection_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsXzMajorDirectionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

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
          xzMajorDirection_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajorDirection_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
export async function XzMajorDirection_GetObjLstsessionStorage(strIdXzMajor: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsXzMajorDirectionEN.WhereFormat) == false) {
    strWhereCond = Format(clsXzMajorDirectionEN.WhereFormat, strIdXzMajor);
  } else {
    strWhereCond = Format("{0}='{1}'", clsXzMajorDirectionEN.con_IdXzMajor, strIdXzMajor);
  }
  const strKey = Format('{0}_{1}', clsXzMajorDirectionEN._CurrTabName, strIdXzMajor);
  if (IsNullOrEmpty(clsXzMajorDirectionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzMajorDirectionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzMajorDirectionExObjLstCache: Array<clsXzMajorDirectionEN> =
      JSON.parse(strTempObjLst);
    const arrXzMajorDirectionObjLstT = XzMajorDirection_GetObjLstByJSONObjLst(
      arrXzMajorDirectionExObjLstCache,
    );
    return arrXzMajorDirectionObjLstT;
  }
  try {
    const arrXzMajorDirectionExObjLst = await XzMajorDirection_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrXzMajorDirectionExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzMajorDirectionExObjLst.length,
    );
    console.log(strInfo);
    return arrXzMajorDirectionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzMajorDirection_ConstructorName,
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
export async function XzMajorDirection_GetObjLstsessionStoragePureCache(strIdXzMajor: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsXzMajorDirectionEN._CurrTabName, strIdXzMajor);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzMajorDirectionObjLstCache: Array<clsXzMajorDirectionEN> = JSON.parse(strTempObjLst);
    return arrXzMajorDirectionObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzMajorDirection_GetObjLstCache(
  strIdXzMajor: string,
): Promise<Array<clsXzMajorDirectionEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdXzMajor) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajor]不能为空！(In clsXzMajorDirectionWApi.XzMajorDirection_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajor.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajor]的长度:[{0}]不正确！(clsXzMajorDirectionWApi.XzMajorDirection_GetObjLstCache)',
      strIdXzMajor.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrXzMajorDirectionObjLstCache;
  switch (clsXzMajorDirectionEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstsessionStorage(strIdXzMajor);
      break;
    case '03': //localStorage
      arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstlocalStorage(strIdXzMajor);
      break;
    case '02': //ClientCache
      arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstClientCache(strIdXzMajor);
      break;
    default:
      arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstClientCache(strIdXzMajor);
      break;
  }
  return arrXzMajorDirectionObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzMajorDirection_GetObjLstPureCache(strIdXzMajor: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrXzMajorDirectionObjLstCache;
  switch (clsXzMajorDirectionEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstsessionStoragePureCache(
        strIdXzMajor,
      );
      break;
    case '03': //localStorage
      arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstlocalStoragePureCache(
        strIdXzMajor,
      );
      break;
    case '02': //ClientCache
      arrXzMajorDirectionObjLstCache = null;
      break;
    default:
      arrXzMajorDirectionObjLstCache = null;
      break;
  }
  return arrXzMajorDirectionObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrMajorDirectionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function XzMajorDirection_GetSubObjLstCache(
  objXzMajorDirectionCond: clsXzMajorDirectionEN,
  strIdXzMajor: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstCache(strIdXzMajor);
  let arrXzMajorDirectionSel = arrXzMajorDirectionObjLstCache;
  if (
    objXzMajorDirectionCond.sfFldComparisonOp == null ||
    objXzMajorDirectionCond.sfFldComparisonOp == ''
  )
    return arrXzMajorDirectionSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzMajorDirectionCond.sfFldComparisonOp,
  );
  //console.log("clsXzMajorDirectionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzMajorDirectionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzMajorDirectionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrXzMajorDirectionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzMajorDirectionCond),
      xzMajorDirection_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzMajorDirectionEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrMajorDirectionId:关键字列表
 * @returns 对象列表
 **/
export async function XzMajorDirection_GetObjLstByMajorDirectionIdLstAsync(
  arrMajorDirectionId: Array<string>,
): Promise<Array<clsXzMajorDirectionEN>> {
  const strThisFuncName = 'GetObjLstByMajorDirectionIdLstAsync';
  const strAction = 'GetObjLstByMajorDirectionIdLst';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrMajorDirectionId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          xzMajorDirection_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajorDirection_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
 * @param arrstrMajorDirectionIdLst:关键字列表
 * @returns 对象列表
 */
export async function XzMajorDirection_GetObjLstByMajorDirectionIdLstCache(
  arrMajorDirectionIdLst: Array<string>,
  strIdXzMajor: string,
) {
  const strThisFuncName = 'GetObjLstByMajorDirectionIdLstCache';
  try {
    const arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstCache(strIdXzMajor);
    const arrXzMajorDirectionSel = arrXzMajorDirectionObjLstCache.filter(
      (x) => arrMajorDirectionIdLst.indexOf(x.majorDirectionId) > -1,
    );
    return arrXzMajorDirectionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrMajorDirectionIdLst.join(','),
      xzMajorDirection_ConstructorName,
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
export async function XzMajorDirection_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsXzMajorDirectionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

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
          xzMajorDirection_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajorDirection_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
export async function XzMajorDirection_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsXzMajorDirectionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

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
          xzMajorDirection_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajorDirection_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
export async function XzMajorDirection_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdXzMajor: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzMajorDirectionEN>();
  const arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstCache(strIdXzMajor);
  if (arrXzMajorDirectionObjLstCache.length == 0) return arrXzMajorDirectionObjLstCache;
  let arrXzMajorDirectionSel = arrXzMajorDirectionObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objXzMajorDirectionCond = new clsXzMajorDirectionEN();
  ObjectAssign(objXzMajorDirectionCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsXzMajorDirectionWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzMajorDirectionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrXzMajorDirectionSel.length == 0) return arrXzMajorDirectionSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzMajorDirectionSel = arrXzMajorDirectionSel.sort(
        XzMajorDirection_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzMajorDirectionSel = arrXzMajorDirectionSel.sort(objPagerPara.sortFun);
    }
    arrXzMajorDirectionSel = arrXzMajorDirectionSel.slice(intStart, intEnd);
    return arrXzMajorDirectionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzMajorDirection_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzMajorDirectionEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function XzMajorDirection_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzMajorDirectionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzMajorDirectionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

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
          xzMajorDirection_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajorDirection_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
 * @param strMajorDirectionId:关键字
 * @returns 获取删除的结果
 **/
export async function XzMajorDirection_DelRecordAsync(
  strMajorDirectionId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strMajorDirectionId);

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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
 * @param arrMajorDirectionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function XzMajorDirection_DelXzMajorDirectionsAsync(
  arrMajorDirectionId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelXzMajorDirectionsAsync';
  const strAction = 'DelXzMajorDirections';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrMajorDirectionId, config);
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
export async function XzMajorDirection_DelXzMajorDirectionsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelXzMajorDirectionsByCondAsync';
  const strAction = 'DelXzMajorDirectionsByCond';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
 * @param objXzMajorDirectionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzMajorDirection_AddNewRecordAsync(
  objXzMajorDirectionEN: clsXzMajorDirectionEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objXzMajorDirectionEN);
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorDirectionEN, config);
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
 * @param objXzMajorDirectionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzMajorDirection_AddNewRecordWithMaxIdAsync(
  objXzMajorDirectionEN: clsXzMajorDirectionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorDirectionEN, config);
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
 * @param objXzMajorDirectionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function XzMajorDirection_AddNewRecordWithReturnKeyAsync(
  objXzMajorDirectionEN: clsXzMajorDirectionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorDirectionEN, config);
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
 * @param objXzMajorDirectionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function XzMajorDirection_UpdateRecordAsync(
  objXzMajorDirectionEN: clsXzMajorDirectionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objXzMajorDirectionEN.sfUpdFldSetStr === undefined ||
    objXzMajorDirectionEN.sfUpdFldSetStr === null ||
    objXzMajorDirectionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzMajorDirectionEN.majorDirectionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorDirectionEN, config);
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
 * @param objXzMajorDirectionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzMajorDirection_UpdateWithConditionAsync(
  objXzMajorDirectionEN: clsXzMajorDirectionEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objXzMajorDirectionEN.sfUpdFldSetStr === undefined ||
    objXzMajorDirectionEN.sfUpdFldSetStr === null ||
    objXzMajorDirectionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzMajorDirectionEN.majorDirectionId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);
  objXzMajorDirectionEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorDirectionEN, config);
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
 * @param objstrMajorDirectionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function XzMajorDirection_IsExistRecordCache(
  objXzMajorDirectionCond: clsXzMajorDirectionEN,
  strIdXzMajor: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstCache(strIdXzMajor);
  if (arrXzMajorDirectionObjLstCache == null) return false;
  let arrXzMajorDirectionSel = arrXzMajorDirectionObjLstCache;
  if (
    objXzMajorDirectionCond.sfFldComparisonOp == null ||
    objXzMajorDirectionCond.sfFldComparisonOp == ''
  )
    return arrXzMajorDirectionSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzMajorDirectionCond.sfFldComparisonOp,
  );
  //console.log("clsXzMajorDirectionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzMajorDirectionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzMajorDirectionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrXzMajorDirectionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objXzMajorDirectionCond),
      xzMajorDirection_ConstructorName,
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
export async function XzMajorDirection_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
 * @param strMajorDirectionId:所给的关键字
 * @returns 对象
 */
export async function XzMajorDirection_IsExistCache(
  strMajorDirectionId: string,
  strIdXzMajor: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstCache(strIdXzMajor);
  if (arrXzMajorDirectionObjLstCache == null) return false;
  try {
    const arrXzMajorDirectionSel = arrXzMajorDirectionObjLstCache.filter(
      (x) => x.majorDirectionId == strMajorDirectionId,
    );
    if (arrXzMajorDirectionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strMajorDirectionId,
      xzMajorDirection_ConstructorName,
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
 * @param strMajorDirectionId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function XzMajorDirection_IsExistAsync(strMajorDirectionId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strMajorDirectionId,
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
export async function XzMajorDirection_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
 * @param objXzMajorDirectionCond:条件对象
 * @returns 对象列表记录数
 */
export async function XzMajorDirection_GetRecCountByCondCache(
  objXzMajorDirectionCond: clsXzMajorDirectionEN,
  strIdXzMajor: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrXzMajorDirectionObjLstCache = await XzMajorDirection_GetObjLstCache(strIdXzMajor);
  if (arrXzMajorDirectionObjLstCache == null) return 0;
  let arrXzMajorDirectionSel = arrXzMajorDirectionObjLstCache;
  if (
    objXzMajorDirectionCond.sfFldComparisonOp == null ||
    objXzMajorDirectionCond.sfFldComparisonOp == ''
  )
    return arrXzMajorDirectionSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzMajorDirectionCond.sfFldComparisonOp,
  );
  //console.log("clsXzMajorDirectionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzMajorDirectionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzMajorDirectionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrXzMajorDirectionSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzMajorDirectionCond),
      xzMajorDirection_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function XzMajorDirection_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function XzMajorDirection_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(xzMajorDirection_Controller, strAction);

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
        xzMajorDirection_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorDirection_ConstructorName,
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
export function XzMajorDirection_GetWebApiUrl(strController: string, strAction: string): string {
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
export function XzMajorDirection_ReFreshCache(strIdXzMajor: string): void {
  if (IsNullOrEmpty(strIdXzMajor) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajor]不能为空!(In clsXzMajorDirectionWApi.clsXzMajorDirectionWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajor.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajor]的长度:[{0}]不正确!(clsXzMajorDirectionWApi.clsXzMajorDirectionWApi.ReFreshCache)',
      strIdXzMajor.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsXzMajorDirectionEN._CurrTabName, strIdXzMajor);
  switch (clsXzMajorDirectionEN.CacheModeId) {
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
  vXzMajorDirection_ReFreshThisCache();
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function XzMajorDirection_ReFreshThisCache(strIdXzMajor: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsXzMajorDirectionEN._CurrTabName, strIdXzMajor);
    switch (clsXzMajorDirectionEN.CacheModeId) {
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
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdXzMajor:
*/
export async function XzMajorDirection_BindDdl_MajorDirectionIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strIdXzMajor: string,
) {
  if (IsNullOrEmpty(strIdXzMajor) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajor]不能为空！(In clsXzMajorDirectionWApi.BindDdl_MajorDirectionIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajor.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajor]的长度:[{0}]不正确！(clsXzMajorDirectionWApi.BindDdl_MajorDirectionIdInDiv)',
      strIdXzMajor.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_MajorDirectionIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_MajorDirectionIdInDivCache");
  const arrObjLstSel = await XzMajorDirection_GetObjLstCache(strIdXzMajor);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsXzMajorDirectionEN.con_MajorDirectionId,
    clsXzMajorDirectionEN.con_MajorDirectionName,
    '专业方向',
  );
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdXzMajor:
*/
export async function XzMajorDirection_BindDdl_MajorDirectionIdByIdXzMajorInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strIdXzMajor: string,
) {
  if (IsNullOrEmpty(strIdXzMajor) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajor]不能为空！(In clsXzMajorDirectionWApi.BindDdl_MajorDirectionIdByIdXzMajorInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajor.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajor]的长度:[{0}]不正确！(clsXzMajorDirectionWApi.BindDdl_MajorDirectionIdByIdXzMajorInDiv)',
      strIdXzMajor.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_MajorDirectionIdByIdXzMajorInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_MajorDirectionIdByIdXzMajorInDivCache");
  let arrObjLstSel = await XzMajorDirection_GetObjLstCache(strIdXzMajor);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.idXzMajor == strIdXzMajor);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsXzMajorDirectionEN.con_MajorDirectionId,
    clsXzMajorDirectionEN.con_MajorDirectionName,
    '专业方向',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzMajorDirection_CheckPropertyNew(pobjXzMajorDirectionEN: clsXzMajorDirectionEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.idXzMajor) === true ||
    pobjXzMajorDirectionEN.idXzMajor.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[专业流水号]不能为空(In 专业方向)!(clsXzMajorDirectionBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[研究方向名]不能为空(In 专业方向)!(clsXzMajorDirectionBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjXzMajorDirectionEN.isVisible ||
    (pobjXzMajorDirectionEN.isVisible != null && pobjXzMajorDirectionEN.isVisible.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否显示]不能为空(In 专业方向)!(clsXzMajorDirectionBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjXzMajorDirectionEN.updUser) === true) {
    throw new Error(
      '(errid:Watl000411)字段[修改人]不能为空(In 专业方向)!(clsXzMajorDirectionBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionId) == false &&
    GetStrLen(pobjXzMajorDirectionEN.majorDirectionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[研究方向Id(majorDirectionId)]的长度不能超过8(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.majorDirectionId)(clsXzMajorDirectionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.idXzMajor) == false &&
    GetStrLen(pobjXzMajorDirectionEN.idXzMajor) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[专业流水号(idXzMajor)]的长度不能超过8(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.idXzMajor)(clsXzMajorDirectionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionName) == false &&
    GetStrLen(pobjXzMajorDirectionEN.majorDirectionName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[研究方向名(majorDirectionName)]的长度不能超过100(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.majorDirectionName)(clsXzMajorDirectionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionENName) == false &&
    GetStrLen(pobjXzMajorDirectionEN.majorDirectionENName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[研究方向英文名(majorDirectionENName)]的长度不能超过200(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.majorDirectionENName)(clsXzMajorDirectionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionExplain) == false &&
    GetStrLen(pobjXzMajorDirectionEN.majorDirectionExplain) > 2000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[专业方向说明(majorDirectionExplain)]的长度不能超过2000(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.majorDirectionExplain)(clsXzMajorDirectionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.updDate) == false &&
    GetStrLen(pobjXzMajorDirectionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.updDate)(clsXzMajorDirectionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.updUser) == false &&
    GetStrLen(pobjXzMajorDirectionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.updUser)(clsXzMajorDirectionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.memo) == false &&
    GetStrLen(pobjXzMajorDirectionEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.memo)(clsXzMajorDirectionBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionId) == false &&
    undefined !== pobjXzMajorDirectionEN.majorDirectionId &&
    tzDataType.isString(pobjXzMajorDirectionEN.majorDirectionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[研究方向Id(majorDirectionId)]的值:[$(pobjXzMajorDirectionEN.majorDirectionId)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.idXzMajor) == false &&
    undefined !== pobjXzMajorDirectionEN.idXzMajor &&
    tzDataType.isString(pobjXzMajorDirectionEN.idXzMajor) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[专业流水号(idXzMajor)]的值:[$(pobjXzMajorDirectionEN.idXzMajor)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionName) == false &&
    undefined !== pobjXzMajorDirectionEN.majorDirectionName &&
    tzDataType.isString(pobjXzMajorDirectionEN.majorDirectionName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[研究方向名(majorDirectionName)]的值:[$(pobjXzMajorDirectionEN.majorDirectionName)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionENName) == false &&
    undefined !== pobjXzMajorDirectionEN.majorDirectionENName &&
    tzDataType.isString(pobjXzMajorDirectionEN.majorDirectionENName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[研究方向英文名(majorDirectionENName)]的值:[$(pobjXzMajorDirectionEN.majorDirectionENName)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionExplain) == false &&
    undefined !== pobjXzMajorDirectionEN.majorDirectionExplain &&
    tzDataType.isString(pobjXzMajorDirectionEN.majorDirectionExplain) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[专业方向说明(majorDirectionExplain)]的值:[$(pobjXzMajorDirectionEN.majorDirectionExplain)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjXzMajorDirectionEN.isVisible &&
    undefined !== pobjXzMajorDirectionEN.isVisible &&
    tzDataType.isBoolean(pobjXzMajorDirectionEN.isVisible) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否显示(isVisible)]的值:[$(pobjXzMajorDirectionEN.isVisible)], 非法,应该为布尔型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.updDate) == false &&
    undefined !== pobjXzMajorDirectionEN.updDate &&
    tzDataType.isString(pobjXzMajorDirectionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjXzMajorDirectionEN.updDate)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.updUser) == false &&
    undefined !== pobjXzMajorDirectionEN.updUser &&
    tzDataType.isString(pobjXzMajorDirectionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjXzMajorDirectionEN.updUser)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.memo) == false &&
    undefined !== pobjXzMajorDirectionEN.memo &&
    tzDataType.isString(pobjXzMajorDirectionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjXzMajorDirectionEN.memo)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzMajorDirection_CheckProperty4Update(
  pobjXzMajorDirectionEN: clsXzMajorDirectionEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionId) == false &&
    GetStrLen(pobjXzMajorDirectionEN.majorDirectionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[研究方向Id(majorDirectionId)]的长度不能超过8(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.majorDirectionId)(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.idXzMajor) == false &&
    GetStrLen(pobjXzMajorDirectionEN.idXzMajor) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[专业流水号(idXzMajor)]的长度不能超过8(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.idXzMajor)(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionName) == false &&
    GetStrLen(pobjXzMajorDirectionEN.majorDirectionName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[研究方向名(majorDirectionName)]的长度不能超过100(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.majorDirectionName)(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionENName) == false &&
    GetStrLen(pobjXzMajorDirectionEN.majorDirectionENName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[研究方向英文名(majorDirectionENName)]的长度不能超过200(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.majorDirectionENName)(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionExplain) == false &&
    GetStrLen(pobjXzMajorDirectionEN.majorDirectionExplain) > 2000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[专业方向说明(majorDirectionExplain)]的长度不能超过2000(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.majorDirectionExplain)(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.updDate) == false &&
    GetStrLen(pobjXzMajorDirectionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.updDate)(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.updUser) == false &&
    GetStrLen(pobjXzMajorDirectionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.updUser)(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.memo) == false &&
    GetStrLen(pobjXzMajorDirectionEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 专业方向(XzMajorDirection))!值:$(pobjXzMajorDirectionEN.memo)(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionId) == false &&
    undefined !== pobjXzMajorDirectionEN.majorDirectionId &&
    tzDataType.isString(pobjXzMajorDirectionEN.majorDirectionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[研究方向Id(majorDirectionId)]的值:[$(pobjXzMajorDirectionEN.majorDirectionId)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.idXzMajor) == false &&
    undefined !== pobjXzMajorDirectionEN.idXzMajor &&
    tzDataType.isString(pobjXzMajorDirectionEN.idXzMajor) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[专业流水号(idXzMajor)]的值:[$(pobjXzMajorDirectionEN.idXzMajor)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionName) == false &&
    undefined !== pobjXzMajorDirectionEN.majorDirectionName &&
    tzDataType.isString(pobjXzMajorDirectionEN.majorDirectionName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[研究方向名(majorDirectionName)]的值:[$(pobjXzMajorDirectionEN.majorDirectionName)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionENName) == false &&
    undefined !== pobjXzMajorDirectionEN.majorDirectionENName &&
    tzDataType.isString(pobjXzMajorDirectionEN.majorDirectionENName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[研究方向英文名(majorDirectionENName)]的值:[$(pobjXzMajorDirectionEN.majorDirectionENName)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.majorDirectionExplain) == false &&
    undefined !== pobjXzMajorDirectionEN.majorDirectionExplain &&
    tzDataType.isString(pobjXzMajorDirectionEN.majorDirectionExplain) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[专业方向说明(majorDirectionExplain)]的值:[$(pobjXzMajorDirectionEN.majorDirectionExplain)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjXzMajorDirectionEN.isVisible &&
    undefined !== pobjXzMajorDirectionEN.isVisible &&
    tzDataType.isBoolean(pobjXzMajorDirectionEN.isVisible) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否显示(isVisible)]的值:[$(pobjXzMajorDirectionEN.isVisible)], 非法,应该为布尔型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.updDate) == false &&
    undefined !== pobjXzMajorDirectionEN.updDate &&
    tzDataType.isString(pobjXzMajorDirectionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjXzMajorDirectionEN.updDate)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.updUser) == false &&
    undefined !== pobjXzMajorDirectionEN.updUser &&
    tzDataType.isString(pobjXzMajorDirectionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjXzMajorDirectionEN.updUser)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorDirectionEN.memo) == false &&
    undefined !== pobjXzMajorDirectionEN.memo &&
    tzDataType.isString(pobjXzMajorDirectionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjXzMajorDirectionEN.memo)], 非法,应该为字符型(In 专业方向(XzMajorDirection))!(clsXzMajorDirectionBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function XzMajorDirection_GetJSONStrByObj(
  pobjXzMajorDirectionEN: clsXzMajorDirectionEN,
): string {
  pobjXzMajorDirectionEN.sfUpdFldSetStr = pobjXzMajorDirectionEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjXzMajorDirectionEN);
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
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function XzMajorDirection_GetObjLstByJSONStr(strJSON: string): Array<clsXzMajorDirectionEN> {
  let arrXzMajorDirectionObjLst = new Array<clsXzMajorDirectionEN>();
  if (strJSON === '') {
    return arrXzMajorDirectionObjLst;
  }
  try {
    arrXzMajorDirectionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrXzMajorDirectionObjLst;
  }
  return arrXzMajorDirectionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrXzMajorDirectionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function XzMajorDirection_GetObjLstByJSONObjLst(
  arrXzMajorDirectionObjLstS: Array<clsXzMajorDirectionEN>,
): Array<clsXzMajorDirectionEN> {
  const arrXzMajorDirectionObjLst = new Array<clsXzMajorDirectionEN>();
  for (const objInFor of arrXzMajorDirectionObjLstS) {
    const obj1 = XzMajorDirection_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrXzMajorDirectionObjLst.push(obj1);
  }
  return arrXzMajorDirectionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function XzMajorDirection_GetObjByJSONStr(strJSON: string): clsXzMajorDirectionEN {
  let pobjXzMajorDirectionEN = new clsXzMajorDirectionEN();
  if (strJSON === '') {
    return pobjXzMajorDirectionEN;
  }
  try {
    pobjXzMajorDirectionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjXzMajorDirectionEN;
  }
  return pobjXzMajorDirectionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function XzMajorDirection_GetCombineCondition(
  objXzMajorDirectionCond: clsXzMajorDirectionEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorDirectionCond.dicFldComparisonOp,
      clsXzMajorDirectionEN.con_MajorDirectionId,
    ) == true
  ) {
    const strComparisonOpMajorDirectionId: string =
      objXzMajorDirectionCond.dicFldComparisonOp[clsXzMajorDirectionEN.con_MajorDirectionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorDirectionEN.con_MajorDirectionId,
      objXzMajorDirectionCond.majorDirectionId,
      strComparisonOpMajorDirectionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorDirectionCond.dicFldComparisonOp,
      clsXzMajorDirectionEN.con_IdXzMajor,
    ) == true
  ) {
    const strComparisonOpIdXzMajor: string =
      objXzMajorDirectionCond.dicFldComparisonOp[clsXzMajorDirectionEN.con_IdXzMajor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorDirectionEN.con_IdXzMajor,
      objXzMajorDirectionCond.idXzMajor,
      strComparisonOpIdXzMajor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorDirectionCond.dicFldComparisonOp,
      clsXzMajorDirectionEN.con_MajorDirectionName,
    ) == true
  ) {
    const strComparisonOpMajorDirectionName: string =
      objXzMajorDirectionCond.dicFldComparisonOp[clsXzMajorDirectionEN.con_MajorDirectionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorDirectionEN.con_MajorDirectionName,
      objXzMajorDirectionCond.majorDirectionName,
      strComparisonOpMajorDirectionName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorDirectionCond.dicFldComparisonOp,
      clsXzMajorDirectionEN.con_MajorDirectionENName,
    ) == true
  ) {
    const strComparisonOpMajorDirectionENName: string =
      objXzMajorDirectionCond.dicFldComparisonOp[clsXzMajorDirectionEN.con_MajorDirectionENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorDirectionEN.con_MajorDirectionENName,
      objXzMajorDirectionCond.majorDirectionENName,
      strComparisonOpMajorDirectionENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorDirectionCond.dicFldComparisonOp,
      clsXzMajorDirectionEN.con_MajorDirectionExplain,
    ) == true
  ) {
    const strComparisonOpMajorDirectionExplain: string =
      objXzMajorDirectionCond.dicFldComparisonOp[clsXzMajorDirectionEN.con_MajorDirectionExplain];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorDirectionEN.con_MajorDirectionExplain,
      objXzMajorDirectionCond.majorDirectionExplain,
      strComparisonOpMajorDirectionExplain,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorDirectionCond.dicFldComparisonOp,
      clsXzMajorDirectionEN.con_IsVisible,
    ) == true
  ) {
    if (objXzMajorDirectionCond.isVisible == true) {
      strWhereCond += Format(" And {0} = '1'", clsXzMajorDirectionEN.con_IsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsXzMajorDirectionEN.con_IsVisible);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorDirectionCond.dicFldComparisonOp,
      clsXzMajorDirectionEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objXzMajorDirectionCond.dicFldComparisonOp[clsXzMajorDirectionEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorDirectionEN.con_UpdDate,
      objXzMajorDirectionCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorDirectionCond.dicFldComparisonOp,
      clsXzMajorDirectionEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objXzMajorDirectionCond.dicFldComparisonOp[clsXzMajorDirectionEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorDirectionEN.con_UpdUser,
      objXzMajorDirectionCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorDirectionCond.dicFldComparisonOp,
      clsXzMajorDirectionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objXzMajorDirectionCond.dicFldComparisonOp[clsXzMajorDirectionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorDirectionEN.con_Memo,
      objXzMajorDirectionCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--XzMajorDirection(专业方向),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIdXzMajor: 专业流水号(要求唯一的字段)
 * @param strMajorDirectionName: 研究方向名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function XzMajorDirection_GetUniCondStr(
  objXzMajorDirectionEN: clsXzMajorDirectionEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and IdXzMajor = '{0}'", objXzMajorDirectionEN.idXzMajor);
  strWhereCond += Format(
    " and MajorDirectionName = '{0}'",
    objXzMajorDirectionEN.majorDirectionName,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--XzMajorDirection(专业方向),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIdXzMajor: 专业流水号(要求唯一的字段)
 * @param strMajorDirectionName: 研究方向名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function XzMajorDirection_GetUniCondStr4Update(
  objXzMajorDirectionEN: clsXzMajorDirectionEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and MajorDirectionId <> '{0}'", objXzMajorDirectionEN.majorDirectionId);
  strWhereCond += Format(" and IdXzMajor = '{0}'", objXzMajorDirectionEN.idXzMajor);
  strWhereCond += Format(
    " and MajorDirectionName = '{0}'",
    objXzMajorDirectionEN.majorDirectionName,
  );
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objXzMajorDirectionENS:源对象
 * @param objXzMajorDirectionENT:目标对象
 */
export function XzMajorDirection_CopyObjTo(
  objXzMajorDirectionENS: clsXzMajorDirectionEN,
  objXzMajorDirectionENT: clsXzMajorDirectionEN,
): void {
  objXzMajorDirectionENT.majorDirectionId = objXzMajorDirectionENS.majorDirectionId; //研究方向Id
  objXzMajorDirectionENT.idXzMajor = objXzMajorDirectionENS.idXzMajor; //专业流水号
  objXzMajorDirectionENT.majorDirectionName = objXzMajorDirectionENS.majorDirectionName; //研究方向名
  objXzMajorDirectionENT.majorDirectionENName = objXzMajorDirectionENS.majorDirectionENName; //研究方向英文名
  objXzMajorDirectionENT.majorDirectionExplain = objXzMajorDirectionENS.majorDirectionExplain; //专业方向说明
  objXzMajorDirectionENT.isVisible = objXzMajorDirectionENS.isVisible; //是否显示
  objXzMajorDirectionENT.updDate = objXzMajorDirectionENS.updDate; //修改日期
  objXzMajorDirectionENT.updUser = objXzMajorDirectionENS.updUser; //修改人
  objXzMajorDirectionENT.memo = objXzMajorDirectionENS.memo; //备注
  objXzMajorDirectionENT.sfUpdFldSetStr = objXzMajorDirectionENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objXzMajorDirectionENS:源对象
 * @param objXzMajorDirectionENT:目标对象
 */
export function XzMajorDirection_GetObjFromJsonObj(
  objXzMajorDirectionENS: clsXzMajorDirectionEN,
): clsXzMajorDirectionEN {
  const objXzMajorDirectionENT: clsXzMajorDirectionEN = new clsXzMajorDirectionEN();
  ObjectAssign(objXzMajorDirectionENT, objXzMajorDirectionENS);
  return objXzMajorDirectionENT;
}
