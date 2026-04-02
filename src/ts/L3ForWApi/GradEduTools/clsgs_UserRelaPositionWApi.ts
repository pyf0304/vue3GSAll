/**
 * 类名:clsgs_UserRelaPositionWApi
 * 表名:gs_UserRelaPosition(01120844)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:05
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户关系坐标位置(gs_UserRelaPosition)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月08日.
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
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsgs_UserRelaPositionEN } from '@/ts/L0Entity/GradEduTools/clsgs_UserRelaPositionEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gs_UserRelaPosition_Controller = 'gs_UserRelaPositionApi';
export const gs_UserRelaPosition_ConstructorName = 'gs_UserRelaPosition';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function gs_UserRelaPosition_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsgs_UserRelaPositionEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsgs_UserRelaPositionWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
      const objgs_UserRelaPosition = gs_UserRelaPosition_GetObjFromJsonObj(returnObj);
      return objgs_UserRelaPosition;
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function gs_UserRelaPosition_GetObjBymIdCache(
  lngmId: number,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsgs_UserRelaPositionWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_UserRelaPositionObjLstCache = await gs_UserRelaPosition_GetObjLstCache(
    strIdCurrEduCls,
  );
  try {
    const arrgs_UserRelaPositionSel = arrgs_UserRelaPositionObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    let objgs_UserRelaPosition: clsgs_UserRelaPositionEN;
    if (arrgs_UserRelaPositionSel.length > 0) {
      objgs_UserRelaPosition = arrgs_UserRelaPositionSel[0];
      return objgs_UserRelaPosition;
    } else {
      if (bolTryAsyncOnce == true) {
        const objgs_UserRelaPositionConst = await gs_UserRelaPosition_GetObjBymIdAsync(lngmId);
        if (objgs_UserRelaPositionConst != null) {
          gs_UserRelaPosition_ReFreshThisCache(strIdCurrEduCls);
          return objgs_UserRelaPositionConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      gs_UserRelaPosition_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function gs_UserRelaPosition_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsgs_UserRelaPositionWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsgs_UserRelaPositionEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objgs_UserRelaPositionCache: clsgs_UserRelaPositionEN = JSON.parse(strTempObj);
    return objgs_UserRelaPositionCache;
  }
  try {
    const objgs_UserRelaPosition = await gs_UserRelaPosition_GetObjBymIdAsync(lngmId);
    if (objgs_UserRelaPosition != null) {
      localStorage.setItem(strKey, JSON.stringify(objgs_UserRelaPosition));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objgs_UserRelaPosition;
    }
    return objgs_UserRelaPosition;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      gs_UserRelaPosition_ConstructorName,
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
 * @param objgs_UserRelaPosition:所给的对象
 * @returns 对象
 */
export async function gs_UserRelaPosition_UpdateObjInLstCache(
  objgs_UserRelaPosition: clsgs_UserRelaPositionEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrgs_UserRelaPositionObjLstCache = await gs_UserRelaPosition_GetObjLstCache(
      strIdCurrEduCls,
    );
    const obj = arrgs_UserRelaPositionObjLstCache.find((x) => x.mId == objgs_UserRelaPosition.mId);
    if (obj != null) {
      objgs_UserRelaPosition.mId = obj.mId;
      ObjectAssign(obj, objgs_UserRelaPosition);
    } else {
      arrgs_UserRelaPositionObjLstCache.push(objgs_UserRelaPosition);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gs_UserRelaPosition_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function gs_UserRelaPosition_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsgs_UserRelaPositionWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsgs_UserRelaPositionWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsgs_UserRelaPositionEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsgs_UserRelaPositionEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsgs_UserRelaPositionEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objgs_UserRelaPosition = await gs_UserRelaPosition_GetObjBymIdCache(
    lngmId,
    strIdCurrEduClsClassfy,
  );
  if (objgs_UserRelaPosition == null) return '';
  if (objgs_UserRelaPosition.GetFldValue(strOutFldName) == null) return '';
  return objgs_UserRelaPosition.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function gs_UserRelaPosition_SortFunDefa(
  a: clsgs_UserRelaPositionEN,
  b: clsgs_UserRelaPositionEN,
): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function gs_UserRelaPosition_SortFunDefa2Fld(
  a: clsgs_UserRelaPositionEN,
  b: clsgs_UserRelaPositionEN,
): number {
  if (a.userId == b.userId) return a.updUser.localeCompare(b.updUser);
  else return a.userId.localeCompare(b.userId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function gs_UserRelaPosition_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_UserRelaPositionEN.con_mId:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          return a.mId - b.mId;
        };
      case clsgs_UserRelaPositionEN.con_UserId:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsgs_UserRelaPositionEN.con_UpdUser:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsgs_UserRelaPositionEN.con_UpdDate:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsgs_UserRelaPositionEN.con_IdCurrEduCls:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsgs_UserRelaPositionEN.con_OrderNum:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsgs_UserRelaPositionEN.con_XPosition:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          return a.xPosition - b.xPosition;
        };
      case clsgs_UserRelaPositionEN.con_YPosition:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          return a.yPosition - b.yPosition;
        };
      case clsgs_UserRelaPositionEN.con_Memo:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_UserRelaPosition]中不存在!(in ${gs_UserRelaPosition_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsgs_UserRelaPositionEN.con_mId:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          return b.mId - a.mId;
        };
      case clsgs_UserRelaPositionEN.con_UserId:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsgs_UserRelaPositionEN.con_UpdUser:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsgs_UserRelaPositionEN.con_UpdDate:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsgs_UserRelaPositionEN.con_IdCurrEduCls:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsgs_UserRelaPositionEN.con_OrderNum:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsgs_UserRelaPositionEN.con_XPosition:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          return b.xPosition - a.xPosition;
        };
      case clsgs_UserRelaPositionEN.con_YPosition:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          return b.yPosition - a.yPosition;
        };
      case clsgs_UserRelaPositionEN.con_Memo:
        return (a: clsgs_UserRelaPositionEN, b: clsgs_UserRelaPositionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_UserRelaPosition]中不存在!(in ${gs_UserRelaPosition_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function gs_UserRelaPosition_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_UserRelaPositionEN.con_mId:
      return (obj: clsgs_UserRelaPositionEN) => {
        return obj.mId === value;
      };
    case clsgs_UserRelaPositionEN.con_UserId:
      return (obj: clsgs_UserRelaPositionEN) => {
        return obj.userId === value;
      };
    case clsgs_UserRelaPositionEN.con_UpdUser:
      return (obj: clsgs_UserRelaPositionEN) => {
        return obj.updUser === value;
      };
    case clsgs_UserRelaPositionEN.con_UpdDate:
      return (obj: clsgs_UserRelaPositionEN) => {
        return obj.updDate === value;
      };
    case clsgs_UserRelaPositionEN.con_IdCurrEduCls:
      return (obj: clsgs_UserRelaPositionEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsgs_UserRelaPositionEN.con_OrderNum:
      return (obj: clsgs_UserRelaPositionEN) => {
        return obj.orderNum === value;
      };
    case clsgs_UserRelaPositionEN.con_XPosition:
      return (obj: clsgs_UserRelaPositionEN) => {
        return obj.xPosition === value;
      };
    case clsgs_UserRelaPositionEN.con_YPosition:
      return (obj: clsgs_UserRelaPositionEN) => {
        return obj.yPosition === value;
      };
    case clsgs_UserRelaPositionEN.con_Memo:
      return (obj: clsgs_UserRelaPositionEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[gs_UserRelaPosition]中不存在!(in ${gs_UserRelaPosition_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function gs_UserRelaPosition_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsgs_UserRelaPositionWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsgs_UserRelaPositionWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsgs_UserRelaPositionEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrgs_UserRelaPosition = await gs_UserRelaPosition_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrgs_UserRelaPosition == null) return [];
  let arrgs_UserRelaPositionSel = arrgs_UserRelaPosition;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrgs_UserRelaPositionSel.length == 0) return [];
  return arrgs_UserRelaPositionSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_UserRelaPosition_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
export async function gs_UserRelaPosition_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
export async function gs_UserRelaPosition_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsgs_UserRelaPositionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

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
      const objgs_UserRelaPosition = gs_UserRelaPosition_GetObjFromJsonObj(returnObj);
      return objgs_UserRelaPosition;
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
export async function gs_UserRelaPosition_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsgs_UserRelaPositionEN.WhereFormat) == false) {
    strWhereCond = Format(clsgs_UserRelaPositionEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsgs_UserRelaPositionEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsgs_UserRelaPositionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_UserRelaPositionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrgs_UserRelaPositionExObjLstCache: Array<clsgs_UserRelaPositionEN> =
      CacheHelper.Get(strKey);
    const arrgs_UserRelaPositionObjLstT = gs_UserRelaPosition_GetObjLstByJSONObjLst(
      arrgs_UserRelaPositionExObjLstCache,
    );
    return arrgs_UserRelaPositionObjLstT;
  }
  try {
    const arrgs_UserRelaPositionExObjLst = await gs_UserRelaPosition_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrgs_UserRelaPositionExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_UserRelaPositionExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_UserRelaPositionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_UserRelaPosition_ConstructorName,
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
export async function gs_UserRelaPosition_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsgs_UserRelaPositionEN.WhereFormat) == false) {
    strWhereCond = Format(clsgs_UserRelaPositionEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsgs_UserRelaPositionEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsgs_UserRelaPositionEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsgs_UserRelaPositionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_UserRelaPositionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_UserRelaPositionExObjLstCache: Array<clsgs_UserRelaPositionEN> =
      JSON.parse(strTempObjLst);
    const arrgs_UserRelaPositionObjLstT = gs_UserRelaPosition_GetObjLstByJSONObjLst(
      arrgs_UserRelaPositionExObjLstCache,
    );
    return arrgs_UserRelaPositionObjLstT;
  }
  try {
    const arrgs_UserRelaPositionExObjLst = await gs_UserRelaPosition_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrgs_UserRelaPositionExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_UserRelaPositionExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_UserRelaPositionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_UserRelaPosition_ConstructorName,
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
export async function gs_UserRelaPosition_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsgs_UserRelaPositionEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_UserRelaPositionObjLstCache: Array<clsgs_UserRelaPositionEN> =
      JSON.parse(strTempObjLst);
    return arrgs_UserRelaPositionObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function gs_UserRelaPosition_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_UserRelaPositionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

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
          gs_UserRelaPosition_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_UserRelaPosition_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
export async function gs_UserRelaPosition_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsgs_UserRelaPositionEN.WhereFormat) == false) {
    strWhereCond = Format(clsgs_UserRelaPositionEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsgs_UserRelaPositionEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsgs_UserRelaPositionEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsgs_UserRelaPositionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_UserRelaPositionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_UserRelaPositionExObjLstCache: Array<clsgs_UserRelaPositionEN> =
      JSON.parse(strTempObjLst);
    const arrgs_UserRelaPositionObjLstT = gs_UserRelaPosition_GetObjLstByJSONObjLst(
      arrgs_UserRelaPositionExObjLstCache,
    );
    return arrgs_UserRelaPositionObjLstT;
  }
  try {
    const arrgs_UserRelaPositionExObjLst = await gs_UserRelaPosition_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrgs_UserRelaPositionExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_UserRelaPositionExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_UserRelaPositionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_UserRelaPosition_ConstructorName,
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
export async function gs_UserRelaPosition_GetObjLstsessionStoragePureCache(
  strIdCurrEduCls: string,
) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsgs_UserRelaPositionEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_UserRelaPositionObjLstCache: Array<clsgs_UserRelaPositionEN> =
      JSON.parse(strTempObjLst);
    return arrgs_UserRelaPositionObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_UserRelaPosition_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsgs_UserRelaPositionEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsgs_UserRelaPositionWApi.gs_UserRelaPosition_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsgs_UserRelaPositionWApi.gs_UserRelaPosition_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrgs_UserRelaPositionObjLstCache;
  switch (clsgs_UserRelaPositionEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_UserRelaPositionObjLstCache = await gs_UserRelaPosition_GetObjLstsessionStorage(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrgs_UserRelaPositionObjLstCache = await gs_UserRelaPosition_GetObjLstlocalStorage(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrgs_UserRelaPositionObjLstCache = await gs_UserRelaPosition_GetObjLstClientCache(
        strIdCurrEduCls,
      );
      break;
    default:
      arrgs_UserRelaPositionObjLstCache = await gs_UserRelaPosition_GetObjLstClientCache(
        strIdCurrEduCls,
      );
      break;
  }
  return arrgs_UserRelaPositionObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_UserRelaPosition_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrgs_UserRelaPositionObjLstCache;
  switch (clsgs_UserRelaPositionEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_UserRelaPositionObjLstCache =
        await gs_UserRelaPosition_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
      break;
    case '03': //localStorage
      arrgs_UserRelaPositionObjLstCache = await gs_UserRelaPosition_GetObjLstlocalStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrgs_UserRelaPositionObjLstCache = null;
      break;
    default:
      arrgs_UserRelaPositionObjLstCache = null;
      break;
  }
  return arrgs_UserRelaPositionObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_UserRelaPosition_GetSubObjLstCache(
  objgs_UserRelaPositionCond: clsgs_UserRelaPositionEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrgs_UserRelaPositionObjLstCache = await gs_UserRelaPosition_GetObjLstCache(
    strIdCurrEduCls,
  );
  let arrgs_UserRelaPositionSel = arrgs_UserRelaPositionObjLstCache;
  if (
    objgs_UserRelaPositionCond.sfFldComparisonOp == null ||
    objgs_UserRelaPositionCond.sfFldComparisonOp == ''
  )
    return arrgs_UserRelaPositionSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_UserRelaPositionCond.sfFldComparisonOp,
  );
  //console.log("clsgs_UserRelaPositionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_UserRelaPositionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_UserRelaPositionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_UserRelaPositionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_UserRelaPositionCond),
      gs_UserRelaPosition_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_UserRelaPositionEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function gs_UserRelaPosition_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsgs_UserRelaPositionEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_UserRelaPosition_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_UserRelaPosition_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
 */
export async function gs_UserRelaPosition_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrgs_UserRelaPositionObjLstCache = await gs_UserRelaPosition_GetObjLstCache(
      strIdCurrEduCls,
    );
    const arrgs_UserRelaPositionSel = arrgs_UserRelaPositionObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrgs_UserRelaPositionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      gs_UserRelaPosition_ConstructorName,
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
export async function gs_UserRelaPosition_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsgs_UserRelaPositionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

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
          gs_UserRelaPosition_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_UserRelaPosition_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
export async function gs_UserRelaPosition_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsgs_UserRelaPositionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

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
          gs_UserRelaPosition_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_UserRelaPosition_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
export async function gs_UserRelaPosition_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_UserRelaPositionEN>();
  const arrgs_UserRelaPositionObjLstCache = await gs_UserRelaPosition_GetObjLstCache(
    strIdCurrEduCls,
  );
  if (arrgs_UserRelaPositionObjLstCache.length == 0) return arrgs_UserRelaPositionObjLstCache;
  let arrgs_UserRelaPositionSel = arrgs_UserRelaPositionObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_UserRelaPositionCond = new clsgs_UserRelaPositionEN();
  ObjectAssign(objgs_UserRelaPositionCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_UserRelaPositionWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_UserRelaPositionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_UserRelaPositionSel.length == 0) return arrgs_UserRelaPositionSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.sort(
        gs_UserRelaPosition_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.sort(objPagerPara.sortFun);
    }
    arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.slice(intStart, intEnd);
    return arrgs_UserRelaPositionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_UserRelaPosition_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_UserRelaPositionEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_UserRelaPosition_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_UserRelaPositionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_UserRelaPositionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

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
          gs_UserRelaPosition_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_UserRelaPosition_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function gs_UserRelaPosition_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngmId);

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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function gs_UserRelaPosition_Delgs_UserRelaPositionsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delgs_UserRelaPositionsAsync';
  const strAction = 'Delgs_UserRelaPositions';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
export async function gs_UserRelaPosition_Delgs_UserRelaPositionsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delgs_UserRelaPositionsByCondAsync';
  const strAction = 'Delgs_UserRelaPositionsByCond';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * @param objgs_UserRelaPositionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_UserRelaPosition_AddNewRecordAsync(
  objgs_UserRelaPositionEN: clsgs_UserRelaPositionEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objgs_UserRelaPositionEN);
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_UserRelaPositionEN, config);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/**
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objgs_UserRelaPositionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_UserRelaPosition_GoTopAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objgs_UserRelaPositionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_UserRelaPosition_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objgs_UserRelaPositionEN);
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objgs_UserRelaPositionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_UserRelaPosition_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objgs_UserRelaPositionEN);
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objgs_UserRelaPositionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_UserRelaPosition_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objgs_UserRelaPositionEN);
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objgs_UserRelaPositionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_UserRelaPosition_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objgs_UserRelaPositionEN);
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * @param objgs_UserRelaPositionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function gs_UserRelaPosition_AddNewRecordWithReturnKeyAsync(
  objgs_UserRelaPositionEN: clsgs_UserRelaPositionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_UserRelaPositionEN, config);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * @param objgs_UserRelaPositionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function gs_UserRelaPosition_UpdateRecordAsync(
  objgs_UserRelaPositionEN: clsgs_UserRelaPositionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objgs_UserRelaPositionEN.sfUpdFldSetStr === undefined ||
    objgs_UserRelaPositionEN.sfUpdFldSetStr === null ||
    objgs_UserRelaPositionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_UserRelaPositionEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_UserRelaPositionEN, config);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * @param objgs_UserRelaPositionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_UserRelaPosition_UpdateWithConditionAsync(
  objgs_UserRelaPositionEN: clsgs_UserRelaPositionEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objgs_UserRelaPositionEN.sfUpdFldSetStr === undefined ||
    objgs_UserRelaPositionEN.sfUpdFldSetStr === null ||
    objgs_UserRelaPositionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_UserRelaPositionEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);
  objgs_UserRelaPositionEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_UserRelaPositionEN, config);
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_UserRelaPosition_IsExistRecordCache(
  objgs_UserRelaPositionCond: clsgs_UserRelaPositionEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrgs_UserRelaPositionObjLstCache = await gs_UserRelaPosition_GetObjLstCache(
    strIdCurrEduCls,
  );
  if (arrgs_UserRelaPositionObjLstCache == null) return false;
  let arrgs_UserRelaPositionSel = arrgs_UserRelaPositionObjLstCache;
  if (
    objgs_UserRelaPositionCond.sfFldComparisonOp == null ||
    objgs_UserRelaPositionCond.sfFldComparisonOp == ''
  )
    return arrgs_UserRelaPositionSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_UserRelaPositionCond.sfFldComparisonOp,
  );
  //console.log("clsgs_UserRelaPositionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_UserRelaPositionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_UserRelaPositionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_UserRelaPositionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objgs_UserRelaPositionCond),
      gs_UserRelaPosition_ConstructorName,
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
export async function gs_UserRelaPosition_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function gs_UserRelaPosition_IsExistCache(lngmId: number, strIdCurrEduCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrgs_UserRelaPositionObjLstCache = await gs_UserRelaPosition_GetObjLstCache(
    strIdCurrEduCls,
  );
  if (arrgs_UserRelaPositionObjLstCache == null) return false;
  try {
    const arrgs_UserRelaPositionSel = arrgs_UserRelaPositionObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    if (arrgs_UserRelaPositionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      gs_UserRelaPosition_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function gs_UserRelaPosition_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
export async function gs_UserRelaPosition_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
 * @param objgs_UserRelaPositionCond:条件对象
 * @returns 对象列表记录数
 */
export async function gs_UserRelaPosition_GetRecCountByCondCache(
  objgs_UserRelaPositionCond: clsgs_UserRelaPositionEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrgs_UserRelaPositionObjLstCache = await gs_UserRelaPosition_GetObjLstCache(
    strIdCurrEduCls,
  );
  if (arrgs_UserRelaPositionObjLstCache == null) return 0;
  let arrgs_UserRelaPositionSel = arrgs_UserRelaPositionObjLstCache;
  if (
    objgs_UserRelaPositionCond.sfFldComparisonOp == null ||
    objgs_UserRelaPositionCond.sfFldComparisonOp == ''
  )
    return arrgs_UserRelaPositionSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_UserRelaPositionCond.sfFldComparisonOp,
  );
  //console.log("clsgs_UserRelaPositionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_UserRelaPositionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_UserRelaPositionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_UserRelaPositionSel = arrgs_UserRelaPositionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_UserRelaPositionSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_UserRelaPositionCond),
      gs_UserRelaPosition_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function gs_UserRelaPosition_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gs_UserRelaPosition_Controller, strAction);

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
        gs_UserRelaPosition_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_UserRelaPosition_ConstructorName,
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
export function gs_UserRelaPosition_GetWebApiUrl(strController: string, strAction: string): string {
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
export function gs_UserRelaPosition_ReFreshCache(strIdCurrEduCls: string): void {
  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空!(In clsgs_UserRelaPositionWApi.clsgs_UserRelaPositionWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsgs_UserRelaPositionWApi.clsgs_UserRelaPositionWApi.ReFreshCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsgs_UserRelaPositionEN._CurrTabName, strIdCurrEduCls);
  switch (clsgs_UserRelaPositionEN.CacheModeId) {
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
export function gs_UserRelaPosition_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsgs_UserRelaPositionEN._CurrTabName, strIdCurrEduCls);
    switch (clsgs_UserRelaPositionEN.CacheModeId) {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_UserRelaPosition_CheckPropertyNew(
  pobjgs_UserRelaPositionEN: clsgs_UserRelaPositionEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.userId) == false &&
    GetStrLen(pobjgs_UserRelaPositionEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户关系坐标位置(gs_UserRelaPosition))!值:$(pobjgs_UserRelaPositionEN.userId)(clsgs_UserRelaPositionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.updUser) == false &&
    GetStrLen(pobjgs_UserRelaPositionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 用户关系坐标位置(gs_UserRelaPosition))!值:$(pobjgs_UserRelaPositionEN.updUser)(clsgs_UserRelaPositionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.updDate) == false &&
    GetStrLen(pobjgs_UserRelaPositionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户关系坐标位置(gs_UserRelaPosition))!值:$(pobjgs_UserRelaPositionEN.updDate)(clsgs_UserRelaPositionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.idCurrEduCls) == false &&
    GetStrLen(pobjgs_UserRelaPositionEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户关系坐标位置(gs_UserRelaPosition))!值:$(pobjgs_UserRelaPositionEN.idCurrEduCls)(clsgs_UserRelaPositionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.memo) == false &&
    GetStrLen(pobjgs_UserRelaPositionEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户关系坐标位置(gs_UserRelaPosition))!值:$(pobjgs_UserRelaPositionEN.memo)(clsgs_UserRelaPositionBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjgs_UserRelaPositionEN.mId &&
    undefined !== pobjgs_UserRelaPositionEN.mId &&
    tzDataType.isNumber(pobjgs_UserRelaPositionEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjgs_UserRelaPositionEN.mId)], 非法,应该为数值型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.userId) == false &&
    undefined !== pobjgs_UserRelaPositionEN.userId &&
    tzDataType.isString(pobjgs_UserRelaPositionEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户ID(userId)]的值:[$(pobjgs_UserRelaPositionEN.userId)], 非法,应该为字符型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.updUser) == false &&
    undefined !== pobjgs_UserRelaPositionEN.updUser &&
    tzDataType.isString(pobjgs_UserRelaPositionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_UserRelaPositionEN.updUser)], 非法,应该为字符型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.updDate) == false &&
    undefined !== pobjgs_UserRelaPositionEN.updDate &&
    tzDataType.isString(pobjgs_UserRelaPositionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_UserRelaPositionEN.updDate)], 非法,应该为字符型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.idCurrEduCls) == false &&
    undefined !== pobjgs_UserRelaPositionEN.idCurrEduCls &&
    tzDataType.isString(pobjgs_UserRelaPositionEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjgs_UserRelaPositionEN.idCurrEduCls)], 非法,应该为字符型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_UserRelaPositionEN.orderNum &&
    undefined !== pobjgs_UserRelaPositionEN.orderNum &&
    tzDataType.isNumber(pobjgs_UserRelaPositionEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjgs_UserRelaPositionEN.orderNum)], 非法,应该为数值型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_UserRelaPositionEN.xPosition &&
    undefined !== pobjgs_UserRelaPositionEN.xPosition &&
    tzDataType.isNumber(pobjgs_UserRelaPositionEN.xPosition) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[X_坐标(xPosition)]的值:[$(pobjgs_UserRelaPositionEN.xPosition)], 非法,应该为数值型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_UserRelaPositionEN.yPosition &&
    undefined !== pobjgs_UserRelaPositionEN.yPosition &&
    tzDataType.isNumber(pobjgs_UserRelaPositionEN.yPosition) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Y_坐标(yPosition)]的值:[$(pobjgs_UserRelaPositionEN.yPosition)], 非法,应该为数值型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.memo) == false &&
    undefined !== pobjgs_UserRelaPositionEN.memo &&
    tzDataType.isString(pobjgs_UserRelaPositionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_UserRelaPositionEN.memo)], 非法,应该为字符型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_UserRelaPosition_CheckProperty4Update(
  pobjgs_UserRelaPositionEN: clsgs_UserRelaPositionEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.userId) == false &&
    GetStrLen(pobjgs_UserRelaPositionEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户关系坐标位置(gs_UserRelaPosition))!值:$(pobjgs_UserRelaPositionEN.userId)(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.updUser) == false &&
    GetStrLen(pobjgs_UserRelaPositionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 用户关系坐标位置(gs_UserRelaPosition))!值:$(pobjgs_UserRelaPositionEN.updUser)(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.updDate) == false &&
    GetStrLen(pobjgs_UserRelaPositionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户关系坐标位置(gs_UserRelaPosition))!值:$(pobjgs_UserRelaPositionEN.updDate)(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.idCurrEduCls) == false &&
    GetStrLen(pobjgs_UserRelaPositionEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户关系坐标位置(gs_UserRelaPosition))!值:$(pobjgs_UserRelaPositionEN.idCurrEduCls)(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.memo) == false &&
    GetStrLen(pobjgs_UserRelaPositionEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户关系坐标位置(gs_UserRelaPosition))!值:$(pobjgs_UserRelaPositionEN.memo)(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjgs_UserRelaPositionEN.mId &&
    undefined !== pobjgs_UserRelaPositionEN.mId &&
    tzDataType.isNumber(pobjgs_UserRelaPositionEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjgs_UserRelaPositionEN.mId)], 非法,应该为数值型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.userId) == false &&
    undefined !== pobjgs_UserRelaPositionEN.userId &&
    tzDataType.isString(pobjgs_UserRelaPositionEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户ID(userId)]的值:[$(pobjgs_UserRelaPositionEN.userId)], 非法,应该为字符型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.updUser) == false &&
    undefined !== pobjgs_UserRelaPositionEN.updUser &&
    tzDataType.isString(pobjgs_UserRelaPositionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_UserRelaPositionEN.updUser)], 非法,应该为字符型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.updDate) == false &&
    undefined !== pobjgs_UserRelaPositionEN.updDate &&
    tzDataType.isString(pobjgs_UserRelaPositionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_UserRelaPositionEN.updDate)], 非法,应该为字符型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.idCurrEduCls) == false &&
    undefined !== pobjgs_UserRelaPositionEN.idCurrEduCls &&
    tzDataType.isString(pobjgs_UserRelaPositionEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjgs_UserRelaPositionEN.idCurrEduCls)], 非法,应该为字符型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_UserRelaPositionEN.orderNum &&
    undefined !== pobjgs_UserRelaPositionEN.orderNum &&
    tzDataType.isNumber(pobjgs_UserRelaPositionEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjgs_UserRelaPositionEN.orderNum)], 非法,应该为数值型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_UserRelaPositionEN.xPosition &&
    undefined !== pobjgs_UserRelaPositionEN.xPosition &&
    tzDataType.isNumber(pobjgs_UserRelaPositionEN.xPosition) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[X_坐标(xPosition)]的值:[$(pobjgs_UserRelaPositionEN.xPosition)], 非法,应该为数值型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_UserRelaPositionEN.yPosition &&
    undefined !== pobjgs_UserRelaPositionEN.yPosition &&
    tzDataType.isNumber(pobjgs_UserRelaPositionEN.yPosition) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Y_坐标(yPosition)]的值:[$(pobjgs_UserRelaPositionEN.yPosition)], 非法,应该为数值型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_UserRelaPositionEN.memo) == false &&
    undefined !== pobjgs_UserRelaPositionEN.memo &&
    tzDataType.isString(pobjgs_UserRelaPositionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_UserRelaPositionEN.memo)], 非法,应该为字符型(In 用户关系坐标位置(gs_UserRelaPosition))!(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjgs_UserRelaPositionEN.mId ||
    (pobjgs_UserRelaPositionEN.mId != null && pobjgs_UserRelaPositionEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 用户关系坐标位置)!(clsgs_UserRelaPositionBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_UserRelaPosition_GetJSONStrByObj(
  pobjgs_UserRelaPositionEN: clsgs_UserRelaPositionEN,
): string {
  pobjgs_UserRelaPositionEN.sfUpdFldSetStr = pobjgs_UserRelaPositionEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjgs_UserRelaPositionEN);
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
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function gs_UserRelaPosition_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsgs_UserRelaPositionEN> {
  let arrgs_UserRelaPositionObjLst = new Array<clsgs_UserRelaPositionEN>();
  if (strJSON === '') {
    return arrgs_UserRelaPositionObjLst;
  }
  try {
    arrgs_UserRelaPositionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrgs_UserRelaPositionObjLst;
  }
  return arrgs_UserRelaPositionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_UserRelaPositionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function gs_UserRelaPosition_GetObjLstByJSONObjLst(
  arrgs_UserRelaPositionObjLstS: Array<clsgs_UserRelaPositionEN>,
): Array<clsgs_UserRelaPositionEN> {
  const arrgs_UserRelaPositionObjLst = new Array<clsgs_UserRelaPositionEN>();
  for (const objInFor of arrgs_UserRelaPositionObjLstS) {
    const obj1 = gs_UserRelaPosition_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrgs_UserRelaPositionObjLst.push(obj1);
  }
  return arrgs_UserRelaPositionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_UserRelaPosition_GetObjByJSONStr(strJSON: string): clsgs_UserRelaPositionEN {
  let pobjgs_UserRelaPositionEN = new clsgs_UserRelaPositionEN();
  if (strJSON === '') {
    return pobjgs_UserRelaPositionEN;
  }
  try {
    pobjgs_UserRelaPositionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjgs_UserRelaPositionEN;
  }
  return pobjgs_UserRelaPositionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function gs_UserRelaPosition_GetCombineCondition(
  objgs_UserRelaPositionCond: clsgs_UserRelaPositionEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_UserRelaPositionCond.dicFldComparisonOp,
      clsgs_UserRelaPositionEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objgs_UserRelaPositionCond.dicFldComparisonOp[clsgs_UserRelaPositionEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_UserRelaPositionEN.con_mId,
      objgs_UserRelaPositionCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_UserRelaPositionCond.dicFldComparisonOp,
      clsgs_UserRelaPositionEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objgs_UserRelaPositionCond.dicFldComparisonOp[clsgs_UserRelaPositionEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_UserRelaPositionEN.con_UserId,
      objgs_UserRelaPositionCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_UserRelaPositionCond.dicFldComparisonOp,
      clsgs_UserRelaPositionEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objgs_UserRelaPositionCond.dicFldComparisonOp[clsgs_UserRelaPositionEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_UserRelaPositionEN.con_UpdUser,
      objgs_UserRelaPositionCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_UserRelaPositionCond.dicFldComparisonOp,
      clsgs_UserRelaPositionEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objgs_UserRelaPositionCond.dicFldComparisonOp[clsgs_UserRelaPositionEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_UserRelaPositionEN.con_UpdDate,
      objgs_UserRelaPositionCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_UserRelaPositionCond.dicFldComparisonOp,
      clsgs_UserRelaPositionEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objgs_UserRelaPositionCond.dicFldComparisonOp[clsgs_UserRelaPositionEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_UserRelaPositionEN.con_IdCurrEduCls,
      objgs_UserRelaPositionCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_UserRelaPositionCond.dicFldComparisonOp,
      clsgs_UserRelaPositionEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objgs_UserRelaPositionCond.dicFldComparisonOp[clsgs_UserRelaPositionEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_UserRelaPositionEN.con_OrderNum,
      objgs_UserRelaPositionCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_UserRelaPositionCond.dicFldComparisonOp,
      clsgs_UserRelaPositionEN.con_XPosition,
    ) == true
  ) {
    const strComparisonOpXPosition: string =
      objgs_UserRelaPositionCond.dicFldComparisonOp[clsgs_UserRelaPositionEN.con_XPosition];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_UserRelaPositionEN.con_XPosition,
      objgs_UserRelaPositionCond.xPosition,
      strComparisonOpXPosition,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_UserRelaPositionCond.dicFldComparisonOp,
      clsgs_UserRelaPositionEN.con_YPosition,
    ) == true
  ) {
    const strComparisonOpYPosition: string =
      objgs_UserRelaPositionCond.dicFldComparisonOp[clsgs_UserRelaPositionEN.con_YPosition];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_UserRelaPositionEN.con_YPosition,
      objgs_UserRelaPositionCond.yPosition,
      strComparisonOpYPosition,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_UserRelaPositionCond.dicFldComparisonOp,
      clsgs_UserRelaPositionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objgs_UserRelaPositionCond.dicFldComparisonOp[clsgs_UserRelaPositionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_UserRelaPositionEN.con_Memo,
      objgs_UserRelaPositionCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_UserRelaPosition(用户关系坐标位置),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_UserRelaPosition_GetUniCondStr(
  objgs_UserRelaPositionEN: clsgs_UserRelaPositionEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId = '{0}'", objgs_UserRelaPositionEN.mId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_UserRelaPosition(用户关系坐标位置),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_UserRelaPosition_GetUniCondStr4Update(
  objgs_UserRelaPositionEN: clsgs_UserRelaPositionEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objgs_UserRelaPositionEN.mId);
  strWhereCond += Format(" and mId = '{0}'", objgs_UserRelaPositionEN.mId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_UserRelaPositionENS:源对象
 * @param objgs_UserRelaPositionENT:目标对象
 */
export function gs_UserRelaPosition_CopyObjTo(
  objgs_UserRelaPositionENS: clsgs_UserRelaPositionEN,
  objgs_UserRelaPositionENT: clsgs_UserRelaPositionEN,
): void {
  objgs_UserRelaPositionENT.mId = objgs_UserRelaPositionENS.mId; //mId
  objgs_UserRelaPositionENT.userId = objgs_UserRelaPositionENS.userId; //用户ID
  objgs_UserRelaPositionENT.updUser = objgs_UserRelaPositionENS.updUser; //修改人
  objgs_UserRelaPositionENT.updDate = objgs_UserRelaPositionENS.updDate; //修改日期
  objgs_UserRelaPositionENT.idCurrEduCls = objgs_UserRelaPositionENS.idCurrEduCls; //教学班流水号
  objgs_UserRelaPositionENT.orderNum = objgs_UserRelaPositionENS.orderNum; //序号
  objgs_UserRelaPositionENT.xPosition = objgs_UserRelaPositionENS.xPosition; //X_坐标
  objgs_UserRelaPositionENT.yPosition = objgs_UserRelaPositionENS.yPosition; //Y_坐标
  objgs_UserRelaPositionENT.memo = objgs_UserRelaPositionENS.memo; //备注
  objgs_UserRelaPositionENT.sfUpdFldSetStr = objgs_UserRelaPositionENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_UserRelaPositionENS:源对象
 * @param objgs_UserRelaPositionENT:目标对象
 */
export function gs_UserRelaPosition_GetObjFromJsonObj(
  objgs_UserRelaPositionENS: clsgs_UserRelaPositionEN,
): clsgs_UserRelaPositionEN {
  const objgs_UserRelaPositionENT: clsgs_UserRelaPositionEN = new clsgs_UserRelaPositionEN();
  ObjectAssign(objgs_UserRelaPositionENT, objgs_UserRelaPositionENS);
  return objgs_UserRelaPositionENT;
}
