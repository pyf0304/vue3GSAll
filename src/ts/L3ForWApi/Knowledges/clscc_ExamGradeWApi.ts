/**
 * 类名:clscc_ExamGradeWApi
 * 表名:cc_ExamGrade(01120070)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:14
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 题库等级(cc_ExamGrade)
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
import { clscc_ExamGradeEN } from '@/ts/L0Entity/Knowledges/clscc_ExamGradeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cc_ExamGrade_Controller = 'cc_ExamGradeApi';
export const cc_ExamGrade_ConstructorName = 'cc_ExamGrade';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strExamGradeId:关键字
 * @returns 对象
 **/
export async function cc_ExamGrade_GetObjByExamGradeIdAsync(
  strExamGradeId: string,
): Promise<clscc_ExamGradeEN | null> {
  const strThisFuncName = 'GetObjByExamGradeIdAsync';

  if (IsNullOrEmpty(strExamGradeId) == true) {
    const strMsg = Format(
      '参数:[strExamGradeId]不能为空!(In clscc_ExamGradeWApi.GetObjByExamGradeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strExamGradeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strExamGradeId]的长度:[{0}]不正确!(clscc_ExamGradeWApi.GetObjByExamGradeIdAsync)',
      strExamGradeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByExamGradeId';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strExamGradeId,
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
      const objcc_ExamGrade = cc_ExamGrade_GetObjFromJsonObj(returnObj);
      return objcc_ExamGrade;
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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
 * @param strExamGradeId:所给的关键字
 * @returns 对象
 */
export async function cc_ExamGrade_GetObjByExamGradeIdCache(
  strExamGradeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByExamGradeIdCache';

  if (IsNullOrEmpty(strExamGradeId) == true) {
    const strMsg = Format(
      '参数:[strExamGradeId]不能为空!(In clscc_ExamGradeWApi.GetObjByExamGradeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strExamGradeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strExamGradeId]的长度:[{0}]不正确!(clscc_ExamGradeWApi.GetObjByExamGradeIdCache)',
      strExamGradeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstCache();
  try {
    const arrcc_ExamGradeSel = arrcc_ExamGradeObjLstCache.filter(
      (x) => x.examGradeId == strExamGradeId,
    );
    let objcc_ExamGrade: clscc_ExamGradeEN;
    if (arrcc_ExamGradeSel.length > 0) {
      objcc_ExamGrade = arrcc_ExamGradeSel[0];
      return objcc_ExamGrade;
    } else {
      if (bolTryAsyncOnce == true) {
        const objcc_ExamGradeConst = await cc_ExamGrade_GetObjByExamGradeIdAsync(strExamGradeId);
        if (objcc_ExamGradeConst != null) {
          cc_ExamGrade_ReFreshThisCache();
          return objcc_ExamGradeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strExamGradeId,
      cc_ExamGrade_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strExamGradeId:所给的关键字
 * @returns 对象
 */
export async function cc_ExamGrade_GetObjByExamGradeIdlocalStorage(strExamGradeId: string) {
  const strThisFuncName = 'GetObjByExamGradeIdlocalStorage';

  if (IsNullOrEmpty(strExamGradeId) == true) {
    const strMsg = Format(
      '参数:[strExamGradeId]不能为空!(In clscc_ExamGradeWApi.GetObjByExamGradeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strExamGradeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strExamGradeId]的长度:[{0}]不正确!(clscc_ExamGradeWApi.GetObjByExamGradeIdlocalStorage)',
      strExamGradeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clscc_ExamGradeEN._CurrTabName, strExamGradeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objcc_ExamGradeCache: clscc_ExamGradeEN = JSON.parse(strTempObj);
    return objcc_ExamGradeCache;
  }
  try {
    const objcc_ExamGrade = await cc_ExamGrade_GetObjByExamGradeIdAsync(strExamGradeId);
    if (objcc_ExamGrade != null) {
      localStorage.setItem(strKey, JSON.stringify(objcc_ExamGrade));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objcc_ExamGrade;
    }
    return objcc_ExamGrade;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strExamGradeId,
      cc_ExamGrade_ConstructorName,
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
 * @param objcc_ExamGrade:所给的对象
 * @returns 对象
 */
export async function cc_ExamGrade_UpdateObjInLstCache(objcc_ExamGrade: clscc_ExamGradeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstCache();
    const obj = arrcc_ExamGradeObjLstCache.find(
      (x) => x.examGradeName == objcc_ExamGrade.examGradeName,
    );
    if (obj != null) {
      objcc_ExamGrade.examGradeId = obj.examGradeId;
      ObjectAssign(obj, objcc_ExamGrade);
    } else {
      arrcc_ExamGradeObjLstCache.push(objcc_ExamGrade);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      cc_ExamGrade_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strExamGradeId:所给的关键字
 * @returns 对象
 */
export async function cc_ExamGrade_GetNameByExamGradeIdCache(strExamGradeId: string) {
  if (IsNullOrEmpty(strExamGradeId) == true) {
    const strMsg = Format(
      '参数:[strExamGradeId]不能为空!(In clscc_ExamGradeWApi.GetNameByExamGradeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strExamGradeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strExamGradeId]的长度:[{0}]不正确!(clscc_ExamGradeWApi.GetNameByExamGradeIdCache)',
      strExamGradeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstCache();
  if (arrcc_ExamGradeObjLstCache == null) return '';
  try {
    const arrcc_ExamGradeSel = arrcc_ExamGradeObjLstCache.filter(
      (x) => x.examGradeId == strExamGradeId,
    );
    let objcc_ExamGrade: clscc_ExamGradeEN;
    if (arrcc_ExamGradeSel.length > 0) {
      objcc_ExamGrade = arrcc_ExamGradeSel[0];
      return objcc_ExamGrade.examGradeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strExamGradeId,
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
export async function cc_ExamGrade_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clscc_ExamGradeEN.con_ExamGradeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clscc_ExamGradeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clscc_ExamGradeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strExamGradeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objcc_ExamGrade = await cc_ExamGrade_GetObjByExamGradeIdCache(strExamGradeId);
  if (objcc_ExamGrade == null) return '';
  if (objcc_ExamGrade.GetFldValue(strOutFldName) == null) return '';
  return objcc_ExamGrade.GetFldValue(strOutFldName).toString();
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
export function cc_ExamGrade_SortFunDefa(a: clscc_ExamGradeEN, b: clscc_ExamGradeEN): number {
  return a.examGradeId.localeCompare(b.examGradeId);
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
export function cc_ExamGrade_SortFunDefa2Fld(a: clscc_ExamGradeEN, b: clscc_ExamGradeEN): number {
  if (a.examGradeName == b.examGradeName) return a.memo.localeCompare(b.memo);
  else return a.examGradeName.localeCompare(b.examGradeName);
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
export function cc_ExamGrade_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscc_ExamGradeEN.con_ExamGradeId:
        return (a: clscc_ExamGradeEN, b: clscc_ExamGradeEN) => {
          return a.examGradeId.localeCompare(b.examGradeId);
        };
      case clscc_ExamGradeEN.con_ExamGradeName:
        return (a: clscc_ExamGradeEN, b: clscc_ExamGradeEN) => {
          if (a.examGradeName == null) return -1;
          if (b.examGradeName == null) return 1;
          return a.examGradeName.localeCompare(b.examGradeName);
        };
      case clscc_ExamGradeEN.con_Memo:
        return (a: clscc_ExamGradeEN, b: clscc_ExamGradeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[cc_ExamGrade]中不存在!(in ${cc_ExamGrade_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clscc_ExamGradeEN.con_ExamGradeId:
        return (a: clscc_ExamGradeEN, b: clscc_ExamGradeEN) => {
          return b.examGradeId.localeCompare(a.examGradeId);
        };
      case clscc_ExamGradeEN.con_ExamGradeName:
        return (a: clscc_ExamGradeEN, b: clscc_ExamGradeEN) => {
          if (b.examGradeName == null) return -1;
          if (a.examGradeName == null) return 1;
          return b.examGradeName.localeCompare(a.examGradeName);
        };
      case clscc_ExamGradeEN.con_Memo:
        return (a: clscc_ExamGradeEN, b: clscc_ExamGradeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[cc_ExamGrade]中不存在!(in ${cc_ExamGrade_ConstructorName}.${strThisFuncName})`;
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
export async function cc_ExamGrade_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clscc_ExamGradeEN.con_ExamGradeId:
      return (obj: clscc_ExamGradeEN) => {
        return obj.examGradeId === value;
      };
    case clscc_ExamGradeEN.con_ExamGradeName:
      return (obj: clscc_ExamGradeEN) => {
        return obj.examGradeName === value;
      };
    case clscc_ExamGradeEN.con_Memo:
      return (obj: clscc_ExamGradeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[cc_ExamGrade]中不存在!(in ${cc_ExamGrade_ConstructorName}.${strThisFuncName})`;
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
export async function cc_ExamGrade_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clscc_ExamGradeEN.con_ExamGradeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrcc_ExamGrade = await cc_ExamGrade_GetObjLstCache();
  if (arrcc_ExamGrade == null) return [];
  let arrcc_ExamGradeSel = arrcc_ExamGrade;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrcc_ExamGradeSel.length == 0) return [];
  return arrcc_ExamGradeSel.map((x) => x.examGradeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function cc_ExamGrade_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clscc_ExamGradeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

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
      const objcc_ExamGrade = cc_ExamGrade_GetObjFromJsonObj(returnObj);
      return objcc_ExamGrade;
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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscc_ExamGradeEN._CurrTabName;
  if (IsNullOrEmpty(clscc_ExamGradeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_ExamGradeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrcc_ExamGradeExObjLstCache: Array<clscc_ExamGradeEN> = CacheHelper.Get(strKey);
    const arrcc_ExamGradeObjLstT = cc_ExamGrade_GetObjLstByJSONObjLst(arrcc_ExamGradeExObjLstCache);
    return arrcc_ExamGradeObjLstT;
  }
  try {
    const arrcc_ExamGradeExObjLst = await cc_ExamGrade_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrcc_ExamGradeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_ExamGradeExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_ExamGradeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscc_ExamGradeEN._CurrTabName;
  if (IsNullOrEmpty(clscc_ExamGradeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_ExamGradeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrcc_ExamGradeExObjLstCache: Array<clscc_ExamGradeEN> = JSON.parse(strTempObjLst);
    const arrcc_ExamGradeObjLstT = cc_ExamGrade_GetObjLstByJSONObjLst(arrcc_ExamGradeExObjLstCache);
    return arrcc_ExamGradeObjLstT;
  }
  try {
    const arrcc_ExamGradeExObjLst = await cc_ExamGrade_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrcc_ExamGradeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_ExamGradeExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_ExamGradeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clscc_ExamGradeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrcc_ExamGradeObjLstCache: Array<clscc_ExamGradeEN> = JSON.parse(strTempObjLst);
    return arrcc_ExamGradeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function cc_ExamGrade_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clscc_ExamGradeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

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
          cc_ExamGrade_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_ExamGrade_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscc_ExamGradeEN._CurrTabName;
  if (IsNullOrEmpty(clscc_ExamGradeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_ExamGradeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrcc_ExamGradeExObjLstCache: Array<clscc_ExamGradeEN> = JSON.parse(strTempObjLst);
    const arrcc_ExamGradeObjLstT = cc_ExamGrade_GetObjLstByJSONObjLst(arrcc_ExamGradeExObjLstCache);
    return arrcc_ExamGradeObjLstT;
  }
  try {
    const arrcc_ExamGradeExObjLst = await cc_ExamGrade_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrcc_ExamGradeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_ExamGradeExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_ExamGradeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clscc_ExamGradeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrcc_ExamGradeObjLstCache: Array<clscc_ExamGradeEN> = JSON.parse(strTempObjLst);
    return arrcc_ExamGradeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function cc_ExamGrade_GetObjLstCache(): Promise<Array<clscc_ExamGradeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrcc_ExamGradeObjLstCache;
  switch (clscc_ExamGradeEN.CacheModeId) {
    case '04': //sessionStorage
      arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstClientCache();
      break;
    default:
      arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstClientCache();
      break;
  }
  return arrcc_ExamGradeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function cc_ExamGrade_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrcc_ExamGradeObjLstCache;
  switch (clscc_ExamGradeEN.CacheModeId) {
    case '04': //sessionStorage
      arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrcc_ExamGradeObjLstCache = null;
      break;
    default:
      arrcc_ExamGradeObjLstCache = null;
      break;
  }
  return arrcc_ExamGradeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrExamGradeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function cc_ExamGrade_GetSubObjLstCache(objcc_ExamGradeCond: clscc_ExamGradeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstCache();
  let arrcc_ExamGradeSel = arrcc_ExamGradeObjLstCache;
  if (objcc_ExamGradeCond.sfFldComparisonOp == null || objcc_ExamGradeCond.sfFldComparisonOp == '')
    return arrcc_ExamGradeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_ExamGradeCond.sfFldComparisonOp,
  );
  //console.log("clscc_ExamGradeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_ExamGradeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_ExamGradeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrcc_ExamGradeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objcc_ExamGradeCond),
      cc_ExamGrade_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_ExamGradeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrExamGradeId:关键字列表
 * @returns 对象列表
 **/
export async function cc_ExamGrade_GetObjLstByExamGradeIdLstAsync(
  arrExamGradeId: Array<string>,
): Promise<Array<clscc_ExamGradeEN>> {
  const strThisFuncName = 'GetObjLstByExamGradeIdLstAsync';
  const strAction = 'GetObjLstByExamGradeIdLst';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrExamGradeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cc_ExamGrade_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_ExamGrade_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
 * @param arrstrExamGradeIdLst:关键字列表
 * @returns 对象列表
 */
export async function cc_ExamGrade_GetObjLstByExamGradeIdLstCache(
  arrExamGradeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByExamGradeIdLstCache';
  try {
    const arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstCache();
    const arrcc_ExamGradeSel = arrcc_ExamGradeObjLstCache.filter(
      (x) => arrExamGradeIdLst.indexOf(x.examGradeId) > -1,
    );
    return arrcc_ExamGradeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrExamGradeIdLst.join(','),
      cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clscc_ExamGradeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

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
          cc_ExamGrade_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_ExamGrade_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clscc_ExamGradeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

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
          cc_ExamGrade_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_ExamGrade_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clscc_ExamGradeEN>();
  const arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstCache();
  if (arrcc_ExamGradeObjLstCache.length == 0) return arrcc_ExamGradeObjLstCache;
  let arrcc_ExamGradeSel = arrcc_ExamGradeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objcc_ExamGradeCond = new clscc_ExamGradeEN();
  ObjectAssign(objcc_ExamGradeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clscc_ExamGradeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_ExamGradeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_ExamGradeSel.length == 0) return arrcc_ExamGradeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_ExamGradeSel = arrcc_ExamGradeSel.sort(
        cc_ExamGrade_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_ExamGradeSel = arrcc_ExamGradeSel.sort(objPagerPara.sortFun);
    }
    arrcc_ExamGradeSel = arrcc_ExamGradeSel.slice(intStart, intEnd);
    return arrcc_ExamGradeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_ExamGrade_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_ExamGradeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function cc_ExamGrade_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_ExamGradeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clscc_ExamGradeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

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
          cc_ExamGrade_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_ExamGrade_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
 * @param strExamGradeId:关键字
 * @returns 获取删除的结果
 **/
export async function cc_ExamGrade_DelRecordAsync(strExamGradeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strExamGradeId);

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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
 * @param arrExamGradeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function cc_ExamGrade_Delcc_ExamGradesAsync(
  arrExamGradeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delcc_ExamGradesAsync';
  const strAction = 'Delcc_ExamGrades';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrExamGradeId, config);
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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_Delcc_ExamGradesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delcc_ExamGradesByCondAsync';
  const strAction = 'Delcc_ExamGradesByCond';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
 * @param objcc_ExamGradeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_ExamGrade_AddNewRecordAsync(
  objcc_ExamGradeEN: clscc_ExamGradeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objcc_ExamGradeEN);
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_ExamGradeEN, config);
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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
 * @param objcc_ExamGradeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_ExamGrade_AddNewRecordWithMaxIdAsync(
  objcc_ExamGradeEN: clscc_ExamGradeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_ExamGradeEN, config);
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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
 * @param objcc_ExamGradeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function cc_ExamGrade_AddNewRecordWithReturnKeyAsync(
  objcc_ExamGradeEN: clscc_ExamGradeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_ExamGradeEN, config);
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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
 * @param objcc_ExamGradeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function cc_ExamGrade_UpdateRecordAsync(
  objcc_ExamGradeEN: clscc_ExamGradeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objcc_ExamGradeEN.sfUpdFldSetStr === undefined ||
    objcc_ExamGradeEN.sfUpdFldSetStr === null ||
    objcc_ExamGradeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcc_ExamGradeEN.examGradeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_ExamGradeEN, config);
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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
 * @param objcc_ExamGradeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function cc_ExamGrade_UpdateWithConditionAsync(
  objcc_ExamGradeEN: clscc_ExamGradeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objcc_ExamGradeEN.sfUpdFldSetStr === undefined ||
    objcc_ExamGradeEN.sfUpdFldSetStr === null ||
    objcc_ExamGradeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcc_ExamGradeEN.examGradeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);
  objcc_ExamGradeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_ExamGradeEN, config);
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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
 * @param objstrExamGradeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function cc_ExamGrade_IsExistRecordCache(objcc_ExamGradeCond: clscc_ExamGradeEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstCache();
  if (arrcc_ExamGradeObjLstCache == null) return false;
  let arrcc_ExamGradeSel = arrcc_ExamGradeObjLstCache;
  if (objcc_ExamGradeCond.sfFldComparisonOp == null || objcc_ExamGradeCond.sfFldComparisonOp == '')
    return arrcc_ExamGradeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_ExamGradeCond.sfFldComparisonOp,
  );
  //console.log("clscc_ExamGradeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_ExamGradeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_ExamGradeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_ExamGradeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objcc_ExamGradeCond),
      cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
 * @param strExamGradeId:所给的关键字
 * @returns 对象
 */
export async function cc_ExamGrade_IsExistCache(strExamGradeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstCache();
  if (arrcc_ExamGradeObjLstCache == null) return false;
  try {
    const arrcc_ExamGradeSel = arrcc_ExamGradeObjLstCache.filter(
      (x) => x.examGradeId == strExamGradeId,
    );
    if (arrcc_ExamGradeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strExamGradeId,
      cc_ExamGrade_ConstructorName,
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
 * @param strExamGradeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function cc_ExamGrade_IsExistAsync(strExamGradeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strExamGradeId,
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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
 * @param objcc_ExamGradeCond:条件对象
 * @returns 对象列表记录数
 */
export async function cc_ExamGrade_GetRecCountByCondCache(objcc_ExamGradeCond: clscc_ExamGradeEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrcc_ExamGradeObjLstCache = await cc_ExamGrade_GetObjLstCache();
  if (arrcc_ExamGradeObjLstCache == null) return 0;
  let arrcc_ExamGradeSel = arrcc_ExamGradeObjLstCache;
  if (objcc_ExamGradeCond.sfFldComparisonOp == null || objcc_ExamGradeCond.sfFldComparisonOp == '')
    return arrcc_ExamGradeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_ExamGradeCond.sfFldComparisonOp,
  );
  //console.log("clscc_ExamGradeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_ExamGradeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_ExamGradeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrcc_ExamGradeSel = arrcc_ExamGradeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrcc_ExamGradeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objcc_ExamGradeCond),
      cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
export async function cc_ExamGrade_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cc_ExamGrade_Controller, strAction);

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
        cc_ExamGrade_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_ExamGrade_ConstructorName,
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
export function cc_ExamGrade_GetWebApiUrl(strController: string, strAction: string): string {
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
export function cc_ExamGrade_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clscc_ExamGradeEN._CurrTabName;
  switch (clscc_ExamGradeEN.CacheModeId) {
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
export function cc_ExamGrade_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clscc_ExamGradeEN._CurrTabName;
    switch (clscc_ExamGradeEN.CacheModeId) {
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
export async function cc_ExamGrade_Cache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In )', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：Cache");
  const arrObjLstSel = await cc_ExamGrade_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clscc_ExamGradeEN.con_ExamGradeId,
    clscc_ExamGradeEN.con_ExamGradeName,
    '题库等级',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function cc_ExamGrade_CheckPropertyNew(pobjcc_ExamGradeEN: clscc_ExamGradeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjcc_ExamGradeEN.examGradeId) == false &&
    GetStrLen(pobjcc_ExamGradeEN.examGradeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[题库等级ID(examGradeId)]的长度不能超过2(In 题库等级(cc_ExamGrade))!值:$(pobjcc_ExamGradeEN.examGradeId)(clscc_ExamGradeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ExamGradeEN.examGradeName) == false &&
    GetStrLen(pobjcc_ExamGradeEN.examGradeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[题库等级名(examGradeName)]的长度不能超过50(In 题库等级(cc_ExamGrade))!值:$(pobjcc_ExamGradeEN.examGradeName)(clscc_ExamGradeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ExamGradeEN.memo) == false &&
    GetStrLen(pobjcc_ExamGradeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 题库等级(cc_ExamGrade))!值:$(pobjcc_ExamGradeEN.memo)(clscc_ExamGradeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcc_ExamGradeEN.examGradeId) == false &&
    undefined !== pobjcc_ExamGradeEN.examGradeId &&
    tzDataType.isString(pobjcc_ExamGradeEN.examGradeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[题库等级ID(examGradeId)]的值:[$(pobjcc_ExamGradeEN.examGradeId)], 非法,应该为字符型(In 题库等级(cc_ExamGrade))!(clscc_ExamGradeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ExamGradeEN.examGradeName) == false &&
    undefined !== pobjcc_ExamGradeEN.examGradeName &&
    tzDataType.isString(pobjcc_ExamGradeEN.examGradeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[题库等级名(examGradeName)]的值:[$(pobjcc_ExamGradeEN.examGradeName)], 非法,应该为字符型(In 题库等级(cc_ExamGrade))!(clscc_ExamGradeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ExamGradeEN.memo) == false &&
    undefined !== pobjcc_ExamGradeEN.memo &&
    tzDataType.isString(pobjcc_ExamGradeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjcc_ExamGradeEN.memo)], 非法,应该为字符型(In 题库等级(cc_ExamGrade))!(clscc_ExamGradeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function cc_ExamGrade_CheckProperty4Update(pobjcc_ExamGradeEN: clscc_ExamGradeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjcc_ExamGradeEN.examGradeId) == false &&
    GetStrLen(pobjcc_ExamGradeEN.examGradeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[题库等级ID(examGradeId)]的长度不能超过2(In 题库等级(cc_ExamGrade))!值:$(pobjcc_ExamGradeEN.examGradeId)(clscc_ExamGradeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ExamGradeEN.examGradeName) == false &&
    GetStrLen(pobjcc_ExamGradeEN.examGradeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[题库等级名(examGradeName)]的长度不能超过50(In 题库等级(cc_ExamGrade))!值:$(pobjcc_ExamGradeEN.examGradeName)(clscc_ExamGradeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ExamGradeEN.memo) == false &&
    GetStrLen(pobjcc_ExamGradeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 题库等级(cc_ExamGrade))!值:$(pobjcc_ExamGradeEN.memo)(clscc_ExamGradeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcc_ExamGradeEN.examGradeId) == false &&
    undefined !== pobjcc_ExamGradeEN.examGradeId &&
    tzDataType.isString(pobjcc_ExamGradeEN.examGradeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[题库等级ID(examGradeId)]的值:[$(pobjcc_ExamGradeEN.examGradeId)], 非法,应该为字符型(In 题库等级(cc_ExamGrade))!(clscc_ExamGradeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ExamGradeEN.examGradeName) == false &&
    undefined !== pobjcc_ExamGradeEN.examGradeName &&
    tzDataType.isString(pobjcc_ExamGradeEN.examGradeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[题库等级名(examGradeName)]的值:[$(pobjcc_ExamGradeEN.examGradeName)], 非法,应该为字符型(In 题库等级(cc_ExamGrade))!(clscc_ExamGradeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ExamGradeEN.memo) == false &&
    undefined !== pobjcc_ExamGradeEN.memo &&
    tzDataType.isString(pobjcc_ExamGradeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjcc_ExamGradeEN.memo)], 非法,应该为字符型(In 题库等级(cc_ExamGrade))!(clscc_ExamGradeBL:CheckProperty4Update)',
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
export function cc_ExamGrade_GetJSONStrByObj(pobjcc_ExamGradeEN: clscc_ExamGradeEN): string {
  pobjcc_ExamGradeEN.sfUpdFldSetStr = pobjcc_ExamGradeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjcc_ExamGradeEN);
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
export function cc_ExamGrade_GetObjLstByJSONStr(strJSON: string): Array<clscc_ExamGradeEN> {
  let arrcc_ExamGradeObjLst = new Array<clscc_ExamGradeEN>();
  if (strJSON === '') {
    return arrcc_ExamGradeObjLst;
  }
  try {
    arrcc_ExamGradeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrcc_ExamGradeObjLst;
  }
  return arrcc_ExamGradeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_ExamGradeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function cc_ExamGrade_GetObjLstByJSONObjLst(
  arrcc_ExamGradeObjLstS: Array<clscc_ExamGradeEN>,
): Array<clscc_ExamGradeEN> {
  const arrcc_ExamGradeObjLst = new Array<clscc_ExamGradeEN>();
  for (const objInFor of arrcc_ExamGradeObjLstS) {
    const obj1 = cc_ExamGrade_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrcc_ExamGradeObjLst.push(obj1);
  }
  return arrcc_ExamGradeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function cc_ExamGrade_GetObjByJSONStr(strJSON: string): clscc_ExamGradeEN {
  let pobjcc_ExamGradeEN = new clscc_ExamGradeEN();
  if (strJSON === '') {
    return pobjcc_ExamGradeEN;
  }
  try {
    pobjcc_ExamGradeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjcc_ExamGradeEN;
  }
  return pobjcc_ExamGradeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function cc_ExamGrade_GetCombineCondition(objcc_ExamGradeCond: clscc_ExamGradeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_ExamGradeCond.dicFldComparisonOp,
      clscc_ExamGradeEN.con_ExamGradeId,
    ) == true
  ) {
    const strComparisonOpExamGradeId: string =
      objcc_ExamGradeCond.dicFldComparisonOp[clscc_ExamGradeEN.con_ExamGradeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_ExamGradeEN.con_ExamGradeId,
      objcc_ExamGradeCond.examGradeId,
      strComparisonOpExamGradeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_ExamGradeCond.dicFldComparisonOp,
      clscc_ExamGradeEN.con_ExamGradeName,
    ) == true
  ) {
    const strComparisonOpExamGradeName: string =
      objcc_ExamGradeCond.dicFldComparisonOp[clscc_ExamGradeEN.con_ExamGradeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_ExamGradeEN.con_ExamGradeName,
      objcc_ExamGradeCond.examGradeName,
      strComparisonOpExamGradeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_ExamGradeCond.dicFldComparisonOp,
      clscc_ExamGradeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objcc_ExamGradeCond.dicFldComparisonOp[clscc_ExamGradeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_ExamGradeEN.con_Memo,
      objcc_ExamGradeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--cc_ExamGrade(题库等级),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strExamGradeName: 题库等级名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function cc_ExamGrade_GetUniCondStr(objcc_ExamGradeEN: clscc_ExamGradeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ExamGradeName = '{0}'", objcc_ExamGradeEN.examGradeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--cc_ExamGrade(题库等级),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strExamGradeName: 题库等级名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function cc_ExamGrade_GetUniCondStr4Update(objcc_ExamGradeEN: clscc_ExamGradeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ExamGradeId <> '{0}'", objcc_ExamGradeEN.examGradeId);
  strWhereCond += Format(" and ExamGradeName = '{0}'", objcc_ExamGradeEN.examGradeName);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_ExamGradeENS:源对象
 * @param objcc_ExamGradeENT:目标对象
 */
export function cc_ExamGrade_CopyObjTo(
  objcc_ExamGradeENS: clscc_ExamGradeEN,
  objcc_ExamGradeENT: clscc_ExamGradeEN,
): void {
  objcc_ExamGradeENT.examGradeId = objcc_ExamGradeENS.examGradeId; //题库等级ID
  objcc_ExamGradeENT.examGradeName = objcc_ExamGradeENS.examGradeName; //题库等级名
  objcc_ExamGradeENT.memo = objcc_ExamGradeENS.memo; //备注
  objcc_ExamGradeENT.sfUpdFldSetStr = objcc_ExamGradeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_ExamGradeENS:源对象
 * @param objcc_ExamGradeENT:目标对象
 */
export function cc_ExamGrade_GetObjFromJsonObj(
  objcc_ExamGradeENS: clscc_ExamGradeEN,
): clscc_ExamGradeEN {
  const objcc_ExamGradeENT: clscc_ExamGradeEN = new clscc_ExamGradeEN();
  ObjectAssign(objcc_ExamGradeENT, objcc_ExamGradeENS);
  return objcc_ExamGradeENT;
}
