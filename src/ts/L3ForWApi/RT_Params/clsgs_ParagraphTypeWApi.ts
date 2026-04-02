/**
 * 类名:clsgs_ParagraphTypeWApi
 * 表名:gs_ParagraphType(01120746)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:21
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培参数(RT_Params)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 段落类型(gs_ParagraphType)
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
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsgs_ParagraphTypeEN } from '@/ts/L0Entity/RT_Params/clsgs_ParagraphTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gs_ParagraphType_Controller = 'gs_ParagraphTypeApi';
export const gs_ParagraphType_ConstructorName = 'gs_ParagraphType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strParagraphTypeId:关键字
 * @returns 对象
 **/
export async function gs_ParagraphType_GetObjByParagraphTypeIdAsync(
  strParagraphTypeId: string,
): Promise<clsgs_ParagraphTypeEN | null> {
  const strThisFuncName = 'GetObjByParagraphTypeIdAsync';

  if (IsNullOrEmpty(strParagraphTypeId) == true) {
    const strMsg = Format(
      '参数:[strParagraphTypeId]不能为空!(In clsgs_ParagraphTypeWApi.GetObjByParagraphTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strParagraphTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strParagraphTypeId]的长度:[{0}]不正确!(clsgs_ParagraphTypeWApi.GetObjByParagraphTypeIdAsync)',
      strParagraphTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByParagraphTypeId';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strParagraphTypeId,
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
      const objgs_ParagraphType = gs_ParagraphType_GetObjFromJsonObj(returnObj);
      return objgs_ParagraphType;
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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
 * @param strParagraphTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_ParagraphType_GetObjByParagraphTypeIdCache(
  strParagraphTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByParagraphTypeIdCache';

  if (IsNullOrEmpty(strParagraphTypeId) == true) {
    const strMsg = Format(
      '参数:[strParagraphTypeId]不能为空!(In clsgs_ParagraphTypeWApi.GetObjByParagraphTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strParagraphTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strParagraphTypeId]的长度:[{0}]不正确!(clsgs_ParagraphTypeWApi.GetObjByParagraphTypeIdCache)',
      strParagraphTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstCache();
  try {
    const arrgs_ParagraphTypeSel = arrgs_ParagraphTypeObjLstCache.filter(
      (x) => x.paragraphTypeId == strParagraphTypeId,
    );
    let objgs_ParagraphType: clsgs_ParagraphTypeEN;
    if (arrgs_ParagraphTypeSel.length > 0) {
      objgs_ParagraphType = arrgs_ParagraphTypeSel[0];
      return objgs_ParagraphType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objgs_ParagraphTypeConst = await gs_ParagraphType_GetObjByParagraphTypeIdAsync(
          strParagraphTypeId,
        );
        if (objgs_ParagraphTypeConst != null) {
          gs_ParagraphType_ReFreshThisCache();
          return objgs_ParagraphTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strParagraphTypeId,
      gs_ParagraphType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strParagraphTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_ParagraphType_GetObjByParagraphTypeIdlocalStorage(
  strParagraphTypeId: string,
) {
  const strThisFuncName = 'GetObjByParagraphTypeIdlocalStorage';

  if (IsNullOrEmpty(strParagraphTypeId) == true) {
    const strMsg = Format(
      '参数:[strParagraphTypeId]不能为空!(In clsgs_ParagraphTypeWApi.GetObjByParagraphTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strParagraphTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strParagraphTypeId]的长度:[{0}]不正确!(clsgs_ParagraphTypeWApi.GetObjByParagraphTypeIdlocalStorage)',
      strParagraphTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsgs_ParagraphTypeEN._CurrTabName, strParagraphTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objgs_ParagraphTypeCache: clsgs_ParagraphTypeEN = JSON.parse(strTempObj);
    return objgs_ParagraphTypeCache;
  }
  try {
    const objgs_ParagraphType = await gs_ParagraphType_GetObjByParagraphTypeIdAsync(
      strParagraphTypeId,
    );
    if (objgs_ParagraphType != null) {
      localStorage.setItem(strKey, JSON.stringify(objgs_ParagraphType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objgs_ParagraphType;
    }
    return objgs_ParagraphType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strParagraphTypeId,
      gs_ParagraphType_ConstructorName,
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
 * @param objgs_ParagraphType:所给的对象
 * @returns 对象
 */
export async function gs_ParagraphType_UpdateObjInLstCache(
  objgs_ParagraphType: clsgs_ParagraphTypeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstCache();
    const obj = arrgs_ParagraphTypeObjLstCache.find(
      (x) => x.paragraphTypeId == objgs_ParagraphType.paragraphTypeId,
    );
    if (obj != null) {
      objgs_ParagraphType.paragraphTypeId = obj.paragraphTypeId;
      ObjectAssign(obj, objgs_ParagraphType);
    } else {
      arrgs_ParagraphTypeObjLstCache.push(objgs_ParagraphType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gs_ParagraphType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strParagraphTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_ParagraphType_GetNameByParagraphTypeIdCache(strParagraphTypeId: string) {
  if (IsNullOrEmpty(strParagraphTypeId) == true) {
    const strMsg = Format(
      '参数:[strParagraphTypeId]不能为空!(In clsgs_ParagraphTypeWApi.GetNameByParagraphTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strParagraphTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strParagraphTypeId]的长度:[{0}]不正确!(clsgs_ParagraphTypeWApi.GetNameByParagraphTypeIdCache)',
      strParagraphTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstCache();
  if (arrgs_ParagraphTypeObjLstCache == null) return '';
  try {
    const arrgs_ParagraphTypeSel = arrgs_ParagraphTypeObjLstCache.filter(
      (x) => x.paragraphTypeId == strParagraphTypeId,
    );
    let objgs_ParagraphType: clsgs_ParagraphTypeEN;
    if (arrgs_ParagraphTypeSel.length > 0) {
      objgs_ParagraphType = arrgs_ParagraphTypeSel[0];
      return objgs_ParagraphType.paragraphTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strParagraphTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function gs_ParagraphType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsgs_ParagraphTypeEN.con_ParagraphTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsgs_ParagraphTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsgs_ParagraphTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strParagraphTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objgs_ParagraphType = await gs_ParagraphType_GetObjByParagraphTypeIdCache(
    strParagraphTypeId,
  );
  if (objgs_ParagraphType == null) return '';
  if (objgs_ParagraphType.GetFldValue(strOutFldName) == null) return '';
  return objgs_ParagraphType.GetFldValue(strOutFldName).toString();
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
export function gs_ParagraphType_SortFunDefa(
  a: clsgs_ParagraphTypeEN,
  b: clsgs_ParagraphTypeEN,
): number {
  return a.paragraphTypeId.localeCompare(b.paragraphTypeId);
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
export function gs_ParagraphType_SortFunDefa2Fld(
  a: clsgs_ParagraphTypeEN,
  b: clsgs_ParagraphTypeEN,
): number {
  if (a.paragraphTypeName == b.paragraphTypeName) return a.memo.localeCompare(b.memo);
  else return a.paragraphTypeName.localeCompare(b.paragraphTypeName);
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
export function gs_ParagraphType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_ParagraphTypeEN.con_ParagraphTypeId:
        return (a: clsgs_ParagraphTypeEN, b: clsgs_ParagraphTypeEN) => {
          return a.paragraphTypeId.localeCompare(b.paragraphTypeId);
        };
      case clsgs_ParagraphTypeEN.con_ParagraphTypeName:
        return (a: clsgs_ParagraphTypeEN, b: clsgs_ParagraphTypeEN) => {
          if (a.paragraphTypeName == null) return -1;
          if (b.paragraphTypeName == null) return 1;
          return a.paragraphTypeName.localeCompare(b.paragraphTypeName);
        };
      case clsgs_ParagraphTypeEN.con_Memo:
        return (a: clsgs_ParagraphTypeEN, b: clsgs_ParagraphTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_ParagraphType]中不存在!(in ${gs_ParagraphType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsgs_ParagraphTypeEN.con_ParagraphTypeId:
        return (a: clsgs_ParagraphTypeEN, b: clsgs_ParagraphTypeEN) => {
          return b.paragraphTypeId.localeCompare(a.paragraphTypeId);
        };
      case clsgs_ParagraphTypeEN.con_ParagraphTypeName:
        return (a: clsgs_ParagraphTypeEN, b: clsgs_ParagraphTypeEN) => {
          if (b.paragraphTypeName == null) return -1;
          if (a.paragraphTypeName == null) return 1;
          return b.paragraphTypeName.localeCompare(a.paragraphTypeName);
        };
      case clsgs_ParagraphTypeEN.con_Memo:
        return (a: clsgs_ParagraphTypeEN, b: clsgs_ParagraphTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_ParagraphType]中不存在!(in ${gs_ParagraphType_ConstructorName}.${strThisFuncName})`;
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
export async function gs_ParagraphType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_ParagraphTypeEN.con_ParagraphTypeId:
      return (obj: clsgs_ParagraphTypeEN) => {
        return obj.paragraphTypeId === value;
      };
    case clsgs_ParagraphTypeEN.con_ParagraphTypeName:
      return (obj: clsgs_ParagraphTypeEN) => {
        return obj.paragraphTypeName === value;
      };
    case clsgs_ParagraphTypeEN.con_Memo:
      return (obj: clsgs_ParagraphTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[gs_ParagraphType]中不存在!(in ${gs_ParagraphType_ConstructorName}.${strThisFuncName})`;
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
 * @returns 返回一个关键字值列表
 */
export async function gs_ParagraphType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsgs_ParagraphTypeEN.con_ParagraphTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrgs_ParagraphType = await gs_ParagraphType_GetObjLstCache();
  if (arrgs_ParagraphType == null) return [];
  let arrgs_ParagraphTypeSel = arrgs_ParagraphType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrgs_ParagraphTypeSel.length == 0) return [];
  return arrgs_ParagraphTypeSel.map((x) => x.paragraphTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_ParagraphType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsgs_ParagraphTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

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
      const objgs_ParagraphType = gs_ParagraphType_GetObjFromJsonObj(returnObj);
      return objgs_ParagraphType;
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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_ParagraphTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_ParagraphTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_ParagraphTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrgs_ParagraphTypeExObjLstCache: Array<clsgs_ParagraphTypeEN> = CacheHelper.Get(strKey);
    const arrgs_ParagraphTypeObjLstT = gs_ParagraphType_GetObjLstByJSONObjLst(
      arrgs_ParagraphTypeExObjLstCache,
    );
    return arrgs_ParagraphTypeObjLstT;
  }
  try {
    const arrgs_ParagraphTypeExObjLst = await gs_ParagraphType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrgs_ParagraphTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_ParagraphTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_ParagraphTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_ParagraphTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_ParagraphTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_ParagraphTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_ParagraphTypeExObjLstCache: Array<clsgs_ParagraphTypeEN> =
      JSON.parse(strTempObjLst);
    const arrgs_ParagraphTypeObjLstT = gs_ParagraphType_GetObjLstByJSONObjLst(
      arrgs_ParagraphTypeExObjLstCache,
    );
    return arrgs_ParagraphTypeObjLstT;
  }
  try {
    const arrgs_ParagraphTypeExObjLst = await gs_ParagraphType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrgs_ParagraphTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_ParagraphTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_ParagraphTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_ParagraphTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_ParagraphTypeObjLstCache: Array<clsgs_ParagraphTypeEN> = JSON.parse(strTempObjLst);
    return arrgs_ParagraphTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function gs_ParagraphType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_ParagraphTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

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
          gs_ParagraphType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_ParagraphType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_ParagraphTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_ParagraphTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_ParagraphTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_ParagraphTypeExObjLstCache: Array<clsgs_ParagraphTypeEN> =
      JSON.parse(strTempObjLst);
    const arrgs_ParagraphTypeObjLstT = gs_ParagraphType_GetObjLstByJSONObjLst(
      arrgs_ParagraphTypeExObjLstCache,
    );
    return arrgs_ParagraphTypeObjLstT;
  }
  try {
    const arrgs_ParagraphTypeExObjLst = await gs_ParagraphType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrgs_ParagraphTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_ParagraphTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_ParagraphTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_ParagraphTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_ParagraphTypeObjLstCache: Array<clsgs_ParagraphTypeEN> = JSON.parse(strTempObjLst);
    return arrgs_ParagraphTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_ParagraphType_GetObjLstCache(): Promise<Array<clsgs_ParagraphTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrgs_ParagraphTypeObjLstCache;
  switch (clsgs_ParagraphTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstClientCache();
      break;
    default:
      arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstClientCache();
      break;
  }
  return arrgs_ParagraphTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_ParagraphType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrgs_ParagraphTypeObjLstCache;
  switch (clsgs_ParagraphTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrgs_ParagraphTypeObjLstCache = null;
      break;
    default:
      arrgs_ParagraphTypeObjLstCache = null;
      break;
  }
  return arrgs_ParagraphTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrParagraphTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_ParagraphType_GetSubObjLstCache(
  objgs_ParagraphTypeCond: clsgs_ParagraphTypeEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstCache();
  let arrgs_ParagraphTypeSel = arrgs_ParagraphTypeObjLstCache;
  if (
    objgs_ParagraphTypeCond.sfFldComparisonOp == null ||
    objgs_ParagraphTypeCond.sfFldComparisonOp == ''
  )
    return arrgs_ParagraphTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_ParagraphTypeCond.sfFldComparisonOp,
  );
  //console.log("clsgs_ParagraphTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_ParagraphTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_ParagraphTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_ParagraphTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_ParagraphTypeCond),
      gs_ParagraphType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_ParagraphTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrParagraphTypeId:关键字列表
 * @returns 对象列表
 **/
export async function gs_ParagraphType_GetObjLstByParagraphTypeIdLstAsync(
  arrParagraphTypeId: Array<string>,
): Promise<Array<clsgs_ParagraphTypeEN>> {
  const strThisFuncName = 'GetObjLstByParagraphTypeIdLstAsync';
  const strAction = 'GetObjLstByParagraphTypeIdLst';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrParagraphTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_ParagraphType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_ParagraphType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
 * @param arrstrParagraphTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function gs_ParagraphType_GetObjLstByParagraphTypeIdLstCache(
  arrParagraphTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByParagraphTypeIdLstCache';
  try {
    const arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstCache();
    const arrgs_ParagraphTypeSel = arrgs_ParagraphTypeObjLstCache.filter(
      (x) => arrParagraphTypeIdLst.indexOf(x.paragraphTypeId) > -1,
    );
    return arrgs_ParagraphTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrParagraphTypeIdLst.join(','),
      gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsgs_ParagraphTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

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
          gs_ParagraphType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_ParagraphType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsgs_ParagraphTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

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
          gs_ParagraphType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_ParagraphType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_ParagraphTypeEN>();
  const arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstCache();
  if (arrgs_ParagraphTypeObjLstCache.length == 0) return arrgs_ParagraphTypeObjLstCache;
  let arrgs_ParagraphTypeSel = arrgs_ParagraphTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_ParagraphTypeCond = new clsgs_ParagraphTypeEN();
  ObjectAssign(objgs_ParagraphTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_ParagraphTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_ParagraphTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_ParagraphTypeSel.length == 0) return arrgs_ParagraphTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.sort(
        gs_ParagraphType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.sort(objPagerPara.sortFun);
    }
    arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.slice(intStart, intEnd);
    return arrgs_ParagraphTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_ParagraphType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_ParagraphTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_ParagraphType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_ParagraphTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_ParagraphTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

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
          gs_ParagraphType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_ParagraphType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
 * @param strParagraphTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function gs_ParagraphType_DelRecordAsync(strParagraphTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strParagraphTypeId);

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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
 * @param arrParagraphTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function gs_ParagraphType_Delgs_ParagraphTypesAsync(
  arrParagraphTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delgs_ParagraphTypesAsync';
  const strAction = 'Delgs_ParagraphTypes';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrParagraphTypeId, config);
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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_Delgs_ParagraphTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delgs_ParagraphTypesByCondAsync';
  const strAction = 'Delgs_ParagraphTypesByCond';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
 * @param objgs_ParagraphTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_ParagraphType_AddNewRecordAsync(
  objgs_ParagraphTypeEN: clsgs_ParagraphTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objgs_ParagraphTypeEN);
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_ParagraphTypeEN, config);
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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
 * @param objgs_ParagraphTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_ParagraphType_AddNewRecordWithMaxIdAsync(
  objgs_ParagraphTypeEN: clsgs_ParagraphTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_ParagraphTypeEN, config);
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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
 * @param objgs_ParagraphTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function gs_ParagraphType_AddNewRecordWithReturnKeyAsync(
  objgs_ParagraphTypeEN: clsgs_ParagraphTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_ParagraphTypeEN, config);
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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
 * @param objgs_ParagraphTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function gs_ParagraphType_UpdateRecordAsync(
  objgs_ParagraphTypeEN: clsgs_ParagraphTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objgs_ParagraphTypeEN.sfUpdFldSetStr === undefined ||
    objgs_ParagraphTypeEN.sfUpdFldSetStr === null ||
    objgs_ParagraphTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_ParagraphTypeEN.paragraphTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_ParagraphTypeEN, config);
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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
 * @param objgs_ParagraphTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_ParagraphType_UpdateWithConditionAsync(
  objgs_ParagraphTypeEN: clsgs_ParagraphTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objgs_ParagraphTypeEN.sfUpdFldSetStr === undefined ||
    objgs_ParagraphTypeEN.sfUpdFldSetStr === null ||
    objgs_ParagraphTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_ParagraphTypeEN.paragraphTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);
  objgs_ParagraphTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_ParagraphTypeEN, config);
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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
 * @param objstrParagraphTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_ParagraphType_IsExistRecordCache(
  objgs_ParagraphTypeCond: clsgs_ParagraphTypeEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstCache();
  if (arrgs_ParagraphTypeObjLstCache == null) return false;
  let arrgs_ParagraphTypeSel = arrgs_ParagraphTypeObjLstCache;
  if (
    objgs_ParagraphTypeCond.sfFldComparisonOp == null ||
    objgs_ParagraphTypeCond.sfFldComparisonOp == ''
  )
    return arrgs_ParagraphTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_ParagraphTypeCond.sfFldComparisonOp,
  );
  //console.log("clsgs_ParagraphTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_ParagraphTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_ParagraphTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_ParagraphTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objgs_ParagraphTypeCond),
      gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
 * @param strParagraphTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_ParagraphType_IsExistCache(strParagraphTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstCache();
  if (arrgs_ParagraphTypeObjLstCache == null) return false;
  try {
    const arrgs_ParagraphTypeSel = arrgs_ParagraphTypeObjLstCache.filter(
      (x) => x.paragraphTypeId == strParagraphTypeId,
    );
    if (arrgs_ParagraphTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strParagraphTypeId,
      gs_ParagraphType_ConstructorName,
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
 * @param strParagraphTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function gs_ParagraphType_IsExistAsync(strParagraphTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strParagraphTypeId,
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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
 * @param objgs_ParagraphTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function gs_ParagraphType_GetRecCountByCondCache(
  objgs_ParagraphTypeCond: clsgs_ParagraphTypeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrgs_ParagraphTypeObjLstCache = await gs_ParagraphType_GetObjLstCache();
  if (arrgs_ParagraphTypeObjLstCache == null) return 0;
  let arrgs_ParagraphTypeSel = arrgs_ParagraphTypeObjLstCache;
  if (
    objgs_ParagraphTypeCond.sfFldComparisonOp == null ||
    objgs_ParagraphTypeCond.sfFldComparisonOp == ''
  )
    return arrgs_ParagraphTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_ParagraphTypeCond.sfFldComparisonOp,
  );
  //console.log("clsgs_ParagraphTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_ParagraphTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_ParagraphTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_ParagraphTypeSel = arrgs_ParagraphTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_ParagraphTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_ParagraphTypeCond),
      gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
export async function gs_ParagraphType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gs_ParagraphType_Controller, strAction);

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
        gs_ParagraphType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ParagraphType_ConstructorName,
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
export function gs_ParagraphType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function gs_ParagraphType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsgs_ParagraphTypeEN._CurrTabName;
  switch (clsgs_ParagraphTypeEN.CacheModeId) {
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
export function gs_ParagraphType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsgs_ParagraphTypeEN._CurrTabName;
    switch (clsgs_ParagraphTypeEN.CacheModeId) {
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

*/
export async function gs_ParagraphType_BindDdl_ParagraphTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ParagraphTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ParagraphTypeIdInDivCache");
  const arrObjLstSel = await gs_ParagraphType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsgs_ParagraphTypeEN.con_ParagraphTypeId,
    clsgs_ParagraphTypeEN.con_ParagraphTypeName,
    '段落类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_ParagraphType_CheckPropertyNew(pobjgs_ParagraphTypeEN: clsgs_ParagraphTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_ParagraphTypeEN.paragraphTypeId) == false &&
    GetStrLen(pobjgs_ParagraphTypeEN.paragraphTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[段落类型Id(paragraphTypeId)]的长度不能超过2(In 段落类型(gs_ParagraphType))!值:$(pobjgs_ParagraphTypeEN.paragraphTypeId)(clsgs_ParagraphTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ParagraphTypeEN.paragraphTypeName) == false &&
    GetStrLen(pobjgs_ParagraphTypeEN.paragraphTypeName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[段落类型(paragraphTypeName)]的长度不能超过100(In 段落类型(gs_ParagraphType))!值:$(pobjgs_ParagraphTypeEN.paragraphTypeName)(clsgs_ParagraphTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ParagraphTypeEN.memo) == false &&
    GetStrLen(pobjgs_ParagraphTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 段落类型(gs_ParagraphType))!值:$(pobjgs_ParagraphTypeEN.memo)(clsgs_ParagraphTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_ParagraphTypeEN.paragraphTypeId) == false &&
    undefined !== pobjgs_ParagraphTypeEN.paragraphTypeId &&
    tzDataType.isString(pobjgs_ParagraphTypeEN.paragraphTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[段落类型Id(paragraphTypeId)]的值:[$(pobjgs_ParagraphTypeEN.paragraphTypeId)], 非法,应该为字符型(In 段落类型(gs_ParagraphType))!(clsgs_ParagraphTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ParagraphTypeEN.paragraphTypeName) == false &&
    undefined !== pobjgs_ParagraphTypeEN.paragraphTypeName &&
    tzDataType.isString(pobjgs_ParagraphTypeEN.paragraphTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[段落类型(paragraphTypeName)]的值:[$(pobjgs_ParagraphTypeEN.paragraphTypeName)], 非法,应该为字符型(In 段落类型(gs_ParagraphType))!(clsgs_ParagraphTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ParagraphTypeEN.memo) == false &&
    undefined !== pobjgs_ParagraphTypeEN.memo &&
    tzDataType.isString(pobjgs_ParagraphTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_ParagraphTypeEN.memo)], 非法,应该为字符型(In 段落类型(gs_ParagraphType))!(clsgs_ParagraphTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_ParagraphType_CheckProperty4Update(
  pobjgs_ParagraphTypeEN: clsgs_ParagraphTypeEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_ParagraphTypeEN.paragraphTypeId) == false &&
    GetStrLen(pobjgs_ParagraphTypeEN.paragraphTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[段落类型Id(paragraphTypeId)]的长度不能超过2(In 段落类型(gs_ParagraphType))!值:$(pobjgs_ParagraphTypeEN.paragraphTypeId)(clsgs_ParagraphTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ParagraphTypeEN.paragraphTypeName) == false &&
    GetStrLen(pobjgs_ParagraphTypeEN.paragraphTypeName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[段落类型(paragraphTypeName)]的长度不能超过100(In 段落类型(gs_ParagraphType))!值:$(pobjgs_ParagraphTypeEN.paragraphTypeName)(clsgs_ParagraphTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ParagraphTypeEN.memo) == false &&
    GetStrLen(pobjgs_ParagraphTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 段落类型(gs_ParagraphType))!值:$(pobjgs_ParagraphTypeEN.memo)(clsgs_ParagraphTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_ParagraphTypeEN.paragraphTypeId) == false &&
    undefined !== pobjgs_ParagraphTypeEN.paragraphTypeId &&
    tzDataType.isString(pobjgs_ParagraphTypeEN.paragraphTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[段落类型Id(paragraphTypeId)]的值:[$(pobjgs_ParagraphTypeEN.paragraphTypeId)], 非法,应该为字符型(In 段落类型(gs_ParagraphType))!(clsgs_ParagraphTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ParagraphTypeEN.paragraphTypeName) == false &&
    undefined !== pobjgs_ParagraphTypeEN.paragraphTypeName &&
    tzDataType.isString(pobjgs_ParagraphTypeEN.paragraphTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[段落类型(paragraphTypeName)]的值:[$(pobjgs_ParagraphTypeEN.paragraphTypeName)], 非法,应该为字符型(In 段落类型(gs_ParagraphType))!(clsgs_ParagraphTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ParagraphTypeEN.memo) == false &&
    undefined !== pobjgs_ParagraphTypeEN.memo &&
    tzDataType.isString(pobjgs_ParagraphTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_ParagraphTypeEN.memo)], 非法,应该为字符型(In 段落类型(gs_ParagraphType))!(clsgs_ParagraphTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
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
export function gs_ParagraphType_GetJSONStrByObj(
  pobjgs_ParagraphTypeEN: clsgs_ParagraphTypeEN,
): string {
  pobjgs_ParagraphTypeEN.sfUpdFldSetStr = pobjgs_ParagraphTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjgs_ParagraphTypeEN);
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
export function gs_ParagraphType_GetObjLstByJSONStr(strJSON: string): Array<clsgs_ParagraphTypeEN> {
  let arrgs_ParagraphTypeObjLst = new Array<clsgs_ParagraphTypeEN>();
  if (strJSON === '') {
    return arrgs_ParagraphTypeObjLst;
  }
  try {
    arrgs_ParagraphTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrgs_ParagraphTypeObjLst;
  }
  return arrgs_ParagraphTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_ParagraphTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function gs_ParagraphType_GetObjLstByJSONObjLst(
  arrgs_ParagraphTypeObjLstS: Array<clsgs_ParagraphTypeEN>,
): Array<clsgs_ParagraphTypeEN> {
  const arrgs_ParagraphTypeObjLst = new Array<clsgs_ParagraphTypeEN>();
  for (const objInFor of arrgs_ParagraphTypeObjLstS) {
    const obj1 = gs_ParagraphType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrgs_ParagraphTypeObjLst.push(obj1);
  }
  return arrgs_ParagraphTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_ParagraphType_GetObjByJSONStr(strJSON: string): clsgs_ParagraphTypeEN {
  let pobjgs_ParagraphTypeEN = new clsgs_ParagraphTypeEN();
  if (strJSON === '') {
    return pobjgs_ParagraphTypeEN;
  }
  try {
    pobjgs_ParagraphTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjgs_ParagraphTypeEN;
  }
  return pobjgs_ParagraphTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function gs_ParagraphType_GetCombineCondition(
  objgs_ParagraphTypeCond: clsgs_ParagraphTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ParagraphTypeCond.dicFldComparisonOp,
      clsgs_ParagraphTypeEN.con_ParagraphTypeId,
    ) == true
  ) {
    const strComparisonOpParagraphTypeId: string =
      objgs_ParagraphTypeCond.dicFldComparisonOp[clsgs_ParagraphTypeEN.con_ParagraphTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_ParagraphTypeEN.con_ParagraphTypeId,
      objgs_ParagraphTypeCond.paragraphTypeId,
      strComparisonOpParagraphTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ParagraphTypeCond.dicFldComparisonOp,
      clsgs_ParagraphTypeEN.con_ParagraphTypeName,
    ) == true
  ) {
    const strComparisonOpParagraphTypeName: string =
      objgs_ParagraphTypeCond.dicFldComparisonOp[clsgs_ParagraphTypeEN.con_ParagraphTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_ParagraphTypeEN.con_ParagraphTypeName,
      objgs_ParagraphTypeCond.paragraphTypeName,
      strComparisonOpParagraphTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ParagraphTypeCond.dicFldComparisonOp,
      clsgs_ParagraphTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objgs_ParagraphTypeCond.dicFldComparisonOp[clsgs_ParagraphTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_ParagraphTypeEN.con_Memo,
      objgs_ParagraphTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_ParagraphType(段落类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strParagraphTypeId: 段落类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_ParagraphType_GetUniCondStr(
  objgs_ParagraphTypeEN: clsgs_ParagraphTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ParagraphTypeId = '{0}'", objgs_ParagraphTypeEN.paragraphTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_ParagraphType(段落类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strParagraphTypeId: 段落类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_ParagraphType_GetUniCondStr4Update(
  objgs_ParagraphTypeEN: clsgs_ParagraphTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ParagraphTypeId <> '{0}'", objgs_ParagraphTypeEN.paragraphTypeId);
  strWhereCond += Format(" and ParagraphTypeId = '{0}'", objgs_ParagraphTypeEN.paragraphTypeId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_ParagraphTypeENS:源对象
 * @param objgs_ParagraphTypeENT:目标对象
 */
export function gs_ParagraphType_CopyObjTo(
  objgs_ParagraphTypeENS: clsgs_ParagraphTypeEN,
  objgs_ParagraphTypeENT: clsgs_ParagraphTypeEN,
): void {
  objgs_ParagraphTypeENT.paragraphTypeId = objgs_ParagraphTypeENS.paragraphTypeId; //段落类型Id
  objgs_ParagraphTypeENT.paragraphTypeName = objgs_ParagraphTypeENS.paragraphTypeName; //段落类型
  objgs_ParagraphTypeENT.memo = objgs_ParagraphTypeENS.memo; //备注
  objgs_ParagraphTypeENT.sfUpdFldSetStr = objgs_ParagraphTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_ParagraphTypeENS:源对象
 * @param objgs_ParagraphTypeENT:目标对象
 */
export function gs_ParagraphType_GetObjFromJsonObj(
  objgs_ParagraphTypeENS: clsgs_ParagraphTypeEN,
): clsgs_ParagraphTypeEN {
  const objgs_ParagraphTypeENT: clsgs_ParagraphTypeEN = new clsgs_ParagraphTypeEN();
  ObjectAssign(objgs_ParagraphTypeENT, objgs_ParagraphTypeENS);
  return objgs_ParagraphTypeENT;
}
