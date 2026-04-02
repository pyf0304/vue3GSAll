/**
 * 类名:clsJournalSubjectWApi
 * 表名:JournalSubject(01120930)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:07
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 期刊学科(JournalSubject)
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
import { clsJournalSubjectEN } from '@/ts/L0Entity/GradEduPaper/clsJournalSubjectEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const journalSubject_Controller = 'JournalSubjectApi';
export const journalSubject_ConstructorName = 'journalSubject';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strJournalSubjectId:关键字
 * @returns 对象
 **/
export async function JournalSubject_GetObjByJournalSubjectIdAsync(
  strJournalSubjectId: string,
): Promise<clsJournalSubjectEN | null> {
  const strThisFuncName = 'GetObjByJournalSubjectIdAsync';

  if (IsNullOrEmpty(strJournalSubjectId) == true) {
    const strMsg = Format(
      '参数:[strJournalSubjectId]不能为空!(In clsJournalSubjectWApi.GetObjByJournalSubjectIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strJournalSubjectId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strJournalSubjectId]的长度:[{0}]不正确!(clsJournalSubjectWApi.GetObjByJournalSubjectIdAsync)',
      strJournalSubjectId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByJournalSubjectId';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strJournalSubjectId,
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
      const objJournalSubject = JournalSubject_GetObjFromJsonObj(returnObj);
      return objJournalSubject;
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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
 * @param strJournalSubjectId:所给的关键字
 * @returns 对象
 */
export async function JournalSubject_GetObjByJournalSubjectIdCache(
  strJournalSubjectId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByJournalSubjectIdCache';

  if (IsNullOrEmpty(strJournalSubjectId) == true) {
    const strMsg = Format(
      '参数:[strJournalSubjectId]不能为空!(In clsJournalSubjectWApi.GetObjByJournalSubjectIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strJournalSubjectId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strJournalSubjectId]的长度:[{0}]不正确!(clsJournalSubjectWApi.GetObjByJournalSubjectIdCache)',
      strJournalSubjectId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstCache();
  try {
    const arrJournalSubjectSel = arrJournalSubjectObjLstCache.filter(
      (x) => x.journalSubjectId == strJournalSubjectId,
    );
    let objJournalSubject: clsJournalSubjectEN;
    if (arrJournalSubjectSel.length > 0) {
      objJournalSubject = arrJournalSubjectSel[0];
      return objJournalSubject;
    } else {
      if (bolTryAsyncOnce == true) {
        const objJournalSubjectConst = await JournalSubject_GetObjByJournalSubjectIdAsync(
          strJournalSubjectId,
        );
        if (objJournalSubjectConst != null) {
          JournalSubject_ReFreshThisCache();
          return objJournalSubjectConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strJournalSubjectId,
      journalSubject_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strJournalSubjectId:所给的关键字
 * @returns 对象
 */
export async function JournalSubject_GetObjByJournalSubjectIdlocalStorage(
  strJournalSubjectId: string,
) {
  const strThisFuncName = 'GetObjByJournalSubjectIdlocalStorage';

  if (IsNullOrEmpty(strJournalSubjectId) == true) {
    const strMsg = Format(
      '参数:[strJournalSubjectId]不能为空!(In clsJournalSubjectWApi.GetObjByJournalSubjectIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strJournalSubjectId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strJournalSubjectId]的长度:[{0}]不正确!(clsJournalSubjectWApi.GetObjByJournalSubjectIdlocalStorage)',
      strJournalSubjectId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsJournalSubjectEN._CurrTabName, strJournalSubjectId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objJournalSubjectCache: clsJournalSubjectEN = JSON.parse(strTempObj);
    return objJournalSubjectCache;
  }
  try {
    const objJournalSubject = await JournalSubject_GetObjByJournalSubjectIdAsync(
      strJournalSubjectId,
    );
    if (objJournalSubject != null) {
      localStorage.setItem(strKey, JSON.stringify(objJournalSubject));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objJournalSubject;
    }
    return objJournalSubject;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strJournalSubjectId,
      journalSubject_ConstructorName,
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
 * @param objJournalSubject:所给的对象
 * @returns 对象
 */
export async function JournalSubject_UpdateObjInLstCache(objJournalSubject: clsJournalSubjectEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstCache();
    const obj = arrJournalSubjectObjLstCache.find(
      (x) =>
        x.journalSubjectCategoryId == objJournalSubject.journalSubjectCategoryId &&
        x.journalSubjectName == objJournalSubject.journalSubjectName,
    );
    if (obj != null) {
      objJournalSubject.journalSubjectId = obj.journalSubjectId;
      ObjectAssign(obj, objJournalSubject);
    } else {
      arrJournalSubjectObjLstCache.push(objJournalSubject);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      journalSubject_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strJournalSubjectId:所给的关键字
 * @returns 对象
 */
export async function JournalSubject_GetNameByJournalSubjectIdCache(strJournalSubjectId: string) {
  if (IsNullOrEmpty(strJournalSubjectId) == true) {
    const strMsg = Format(
      '参数:[strJournalSubjectId]不能为空!(In clsJournalSubjectWApi.GetNameByJournalSubjectIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strJournalSubjectId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strJournalSubjectId]的长度:[{0}]不正确!(clsJournalSubjectWApi.GetNameByJournalSubjectIdCache)',
      strJournalSubjectId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstCache();
  if (arrJournalSubjectObjLstCache == null) return '';
  try {
    const arrJournalSubjectSel = arrJournalSubjectObjLstCache.filter(
      (x) => x.journalSubjectId == strJournalSubjectId,
    );
    let objJournalSubject: clsJournalSubjectEN;
    if (arrJournalSubjectSel.length > 0) {
      objJournalSubject = arrJournalSubjectSel[0];
      return objJournalSubject.journalSubjectName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strJournalSubjectId,
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
export async function JournalSubject_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsJournalSubjectEN.con_JournalSubjectId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsJournalSubjectEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsJournalSubjectEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strJournalSubjectId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objJournalSubject = await JournalSubject_GetObjByJournalSubjectIdCache(strJournalSubjectId);
  if (objJournalSubject == null) return '';
  if (objJournalSubject.GetFldValue(strOutFldName) == null) return '';
  return objJournalSubject.GetFldValue(strOutFldName).toString();
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
export function JournalSubject_SortFunDefa(a: clsJournalSubjectEN, b: clsJournalSubjectEN): number {
  return a.journalSubjectId.localeCompare(b.journalSubjectId);
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
export function JournalSubject_SortFunDefa2Fld(
  a: clsJournalSubjectEN,
  b: clsJournalSubjectEN,
): number {
  if (a.journalSubjectCode == b.journalSubjectCode)
    return a.journalSubjectName.localeCompare(b.journalSubjectName);
  else return a.journalSubjectCode.localeCompare(b.journalSubjectCode);
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
export function JournalSubject_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsJournalSubjectEN.con_JournalSubjectId:
        return (a: clsJournalSubjectEN, b: clsJournalSubjectEN) => {
          return a.journalSubjectId.localeCompare(b.journalSubjectId);
        };
      case clsJournalSubjectEN.con_JournalSubjectCode:
        return (a: clsJournalSubjectEN, b: clsJournalSubjectEN) => {
          return a.journalSubjectCode.localeCompare(b.journalSubjectCode);
        };
      case clsJournalSubjectEN.con_JournalSubjectName:
        return (a: clsJournalSubjectEN, b: clsJournalSubjectEN) => {
          return a.journalSubjectName.localeCompare(b.journalSubjectName);
        };
      case clsJournalSubjectEN.con_JournalSubjectCategoryId:
        return (a: clsJournalSubjectEN, b: clsJournalSubjectEN) => {
          return a.journalSubjectCategoryId.localeCompare(b.journalSubjectCategoryId);
        };
      case clsJournalSubjectEN.con_UpdDate:
        return (a: clsJournalSubjectEN, b: clsJournalSubjectEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsJournalSubjectEN.con_UpdUser:
        return (a: clsJournalSubjectEN, b: clsJournalSubjectEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsJournalSubjectEN.con_Memo:
        return (a: clsJournalSubjectEN, b: clsJournalSubjectEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[JournalSubject]中不存在!(in ${journalSubject_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsJournalSubjectEN.con_JournalSubjectId:
        return (a: clsJournalSubjectEN, b: clsJournalSubjectEN) => {
          return b.journalSubjectId.localeCompare(a.journalSubjectId);
        };
      case clsJournalSubjectEN.con_JournalSubjectCode:
        return (a: clsJournalSubjectEN, b: clsJournalSubjectEN) => {
          return b.journalSubjectCode.localeCompare(a.journalSubjectCode);
        };
      case clsJournalSubjectEN.con_JournalSubjectName:
        return (a: clsJournalSubjectEN, b: clsJournalSubjectEN) => {
          return b.journalSubjectName.localeCompare(a.journalSubjectName);
        };
      case clsJournalSubjectEN.con_JournalSubjectCategoryId:
        return (a: clsJournalSubjectEN, b: clsJournalSubjectEN) => {
          return b.journalSubjectCategoryId.localeCompare(a.journalSubjectCategoryId);
        };
      case clsJournalSubjectEN.con_UpdDate:
        return (a: clsJournalSubjectEN, b: clsJournalSubjectEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsJournalSubjectEN.con_UpdUser:
        return (a: clsJournalSubjectEN, b: clsJournalSubjectEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsJournalSubjectEN.con_Memo:
        return (a: clsJournalSubjectEN, b: clsJournalSubjectEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[JournalSubject]中不存在!(in ${journalSubject_ConstructorName}.${strThisFuncName})`;
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
export async function JournalSubject_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsJournalSubjectEN.con_JournalSubjectId:
      return (obj: clsJournalSubjectEN) => {
        return obj.journalSubjectId === value;
      };
    case clsJournalSubjectEN.con_JournalSubjectCode:
      return (obj: clsJournalSubjectEN) => {
        return obj.journalSubjectCode === value;
      };
    case clsJournalSubjectEN.con_JournalSubjectName:
      return (obj: clsJournalSubjectEN) => {
        return obj.journalSubjectName === value;
      };
    case clsJournalSubjectEN.con_JournalSubjectCategoryId:
      return (obj: clsJournalSubjectEN) => {
        return obj.journalSubjectCategoryId === value;
      };
    case clsJournalSubjectEN.con_UpdDate:
      return (obj: clsJournalSubjectEN) => {
        return obj.updDate === value;
      };
    case clsJournalSubjectEN.con_UpdUser:
      return (obj: clsJournalSubjectEN) => {
        return obj.updUser === value;
      };
    case clsJournalSubjectEN.con_Memo:
      return (obj: clsJournalSubjectEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[JournalSubject]中不存在!(in ${journalSubject_ConstructorName}.${strThisFuncName})`;
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
export async function JournalSubject_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsJournalSubjectEN.con_JournalSubjectId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrJournalSubject = await JournalSubject_GetObjLstCache();
  if (arrJournalSubject == null) return [];
  let arrJournalSubjectSel = arrJournalSubject;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrJournalSubjectSel = arrJournalSubjectSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrJournalSubjectSel = arrJournalSubjectSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrJournalSubjectSel = arrJournalSubjectSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrJournalSubjectSel = arrJournalSubjectSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrJournalSubjectSel = arrJournalSubjectSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrJournalSubjectSel = arrJournalSubjectSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrJournalSubjectSel = arrJournalSubjectSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrJournalSubjectSel = arrJournalSubjectSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrJournalSubjectSel = arrJournalSubjectSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrJournalSubjectSel = arrJournalSubjectSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrJournalSubjectSel.length == 0) return [];
  return arrJournalSubjectSel.map((x) => x.journalSubjectId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function JournalSubject_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
export async function JournalSubject_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
export async function JournalSubject_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsJournalSubjectEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

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
      const objJournalSubject = JournalSubject_GetObjFromJsonObj(returnObj);
      return objJournalSubject;
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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
export async function JournalSubject_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsJournalSubjectEN._CurrTabName;
  if (IsNullOrEmpty(clsJournalSubjectEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsJournalSubjectEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrJournalSubjectExObjLstCache: Array<clsJournalSubjectEN> = CacheHelper.Get(strKey);
    const arrJournalSubjectObjLstT = JournalSubject_GetObjLstByJSONObjLst(
      arrJournalSubjectExObjLstCache,
    );
    return arrJournalSubjectObjLstT;
  }
  try {
    const arrJournalSubjectExObjLst = await JournalSubject_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrJournalSubjectExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrJournalSubjectExObjLst.length,
    );
    console.log(strInfo);
    return arrJournalSubjectExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      journalSubject_ConstructorName,
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
export async function JournalSubject_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsJournalSubjectEN._CurrTabName;
  if (IsNullOrEmpty(clsJournalSubjectEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsJournalSubjectEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrJournalSubjectExObjLstCache: Array<clsJournalSubjectEN> = JSON.parse(strTempObjLst);
    const arrJournalSubjectObjLstT = JournalSubject_GetObjLstByJSONObjLst(
      arrJournalSubjectExObjLstCache,
    );
    return arrJournalSubjectObjLstT;
  }
  try {
    const arrJournalSubjectExObjLst = await JournalSubject_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrJournalSubjectExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrJournalSubjectExObjLst.length,
    );
    console.log(strInfo);
    return arrJournalSubjectExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      journalSubject_ConstructorName,
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
export async function JournalSubject_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsJournalSubjectEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrJournalSubjectObjLstCache: Array<clsJournalSubjectEN> = JSON.parse(strTempObjLst);
    return arrJournalSubjectObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function JournalSubject_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsJournalSubjectEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

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
          journalSubject_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = JournalSubject_GetObjLstByJSONObjLst(returnObjLst);
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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
export async function JournalSubject_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsJournalSubjectEN._CurrTabName;
  if (IsNullOrEmpty(clsJournalSubjectEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsJournalSubjectEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrJournalSubjectExObjLstCache: Array<clsJournalSubjectEN> = JSON.parse(strTempObjLst);
    const arrJournalSubjectObjLstT = JournalSubject_GetObjLstByJSONObjLst(
      arrJournalSubjectExObjLstCache,
    );
    return arrJournalSubjectObjLstT;
  }
  try {
    const arrJournalSubjectExObjLst = await JournalSubject_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrJournalSubjectExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrJournalSubjectExObjLst.length,
    );
    console.log(strInfo);
    return arrJournalSubjectExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      journalSubject_ConstructorName,
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
export async function JournalSubject_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsJournalSubjectEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrJournalSubjectObjLstCache: Array<clsJournalSubjectEN> = JSON.parse(strTempObjLst);
    return arrJournalSubjectObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function JournalSubject_GetObjLstCache(): Promise<Array<clsJournalSubjectEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrJournalSubjectObjLstCache;
  switch (clsJournalSubjectEN.CacheModeId) {
    case '04': //sessionStorage
      arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstClientCache();
      break;
    default:
      arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstClientCache();
      break;
  }
  return arrJournalSubjectObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function JournalSubject_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrJournalSubjectObjLstCache;
  switch (clsJournalSubjectEN.CacheModeId) {
    case '04': //sessionStorage
      arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrJournalSubjectObjLstCache = null;
      break;
    default:
      arrJournalSubjectObjLstCache = null;
      break;
  }
  return arrJournalSubjectObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrJournalSubjectIdCond:条件对象
 * @returns 对象列表子集
 */
export async function JournalSubject_GetSubObjLstCache(objJournalSubjectCond: clsJournalSubjectEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstCache();
  let arrJournalSubjectSel = arrJournalSubjectObjLstCache;
  if (
    objJournalSubjectCond.sfFldComparisonOp == null ||
    objJournalSubjectCond.sfFldComparisonOp == ''
  )
    return arrJournalSubjectSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objJournalSubjectCond.sfFldComparisonOp,
  );
  //console.log("clsJournalSubjectWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objJournalSubjectCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrJournalSubjectSel = arrJournalSubjectSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objJournalSubjectCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrJournalSubjectSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objJournalSubjectCond),
      journalSubject_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsJournalSubjectEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrJournalSubjectId:关键字列表
 * @returns 对象列表
 **/
export async function JournalSubject_GetObjLstByJournalSubjectIdLstAsync(
  arrJournalSubjectId: Array<string>,
): Promise<Array<clsJournalSubjectEN>> {
  const strThisFuncName = 'GetObjLstByJournalSubjectIdLstAsync';
  const strAction = 'GetObjLstByJournalSubjectIdLst';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrJournalSubjectId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          journalSubject_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = JournalSubject_GetObjLstByJSONObjLst(returnObjLst);
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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
 * @param arrstrJournalSubjectIdLst:关键字列表
 * @returns 对象列表
 */
export async function JournalSubject_GetObjLstByJournalSubjectIdLstCache(
  arrJournalSubjectIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByJournalSubjectIdLstCache';
  try {
    const arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstCache();
    const arrJournalSubjectSel = arrJournalSubjectObjLstCache.filter(
      (x) => arrJournalSubjectIdLst.indexOf(x.journalSubjectId) > -1,
    );
    return arrJournalSubjectSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrJournalSubjectIdLst.join(','),
      journalSubject_ConstructorName,
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
export async function JournalSubject_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsJournalSubjectEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

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
          journalSubject_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = JournalSubject_GetObjLstByJSONObjLst(returnObjLst);
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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
export async function JournalSubject_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsJournalSubjectEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

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
          journalSubject_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = JournalSubject_GetObjLstByJSONObjLst(returnObjLst);
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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
export async function JournalSubject_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsJournalSubjectEN>();
  const arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstCache();
  if (arrJournalSubjectObjLstCache.length == 0) return arrJournalSubjectObjLstCache;
  let arrJournalSubjectSel = arrJournalSubjectObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objJournalSubjectCond = new clsJournalSubjectEN();
  ObjectAssign(objJournalSubjectCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsJournalSubjectWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrJournalSubjectSel = arrJournalSubjectSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objJournalSubjectCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrJournalSubjectSel.length == 0) return arrJournalSubjectSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrJournalSubjectSel = arrJournalSubjectSel.sort(
        JournalSubject_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrJournalSubjectSel = arrJournalSubjectSel.sort(objPagerPara.sortFun);
    }
    arrJournalSubjectSel = arrJournalSubjectSel.slice(intStart, intEnd);
    return arrJournalSubjectSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      journalSubject_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsJournalSubjectEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function JournalSubject_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsJournalSubjectEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsJournalSubjectEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

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
          journalSubject_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = JournalSubject_GetObjLstByJSONObjLst(returnObjLst);
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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
 * @param strJournalSubjectId:关键字
 * @returns 获取删除的结果
 **/
export async function JournalSubject_DelRecordAsync(strJournalSubjectId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(journalSubject_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strJournalSubjectId);

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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
 * @param arrJournalSubjectId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function JournalSubject_DelJournalSubjectsAsync(
  arrJournalSubjectId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelJournalSubjectsAsync';
  const strAction = 'DelJournalSubjects';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrJournalSubjectId, config);
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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
export async function JournalSubject_DelJournalSubjectsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelJournalSubjectsByCondAsync';
  const strAction = 'DelJournalSubjectsByCond';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
 * @param objJournalSubjectEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function JournalSubject_AddNewRecordAsync(
  objJournalSubjectEN: clsJournalSubjectEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objJournalSubjectEN);
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objJournalSubjectEN, config);
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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
 * @param objJournalSubjectEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function JournalSubject_AddNewRecordWithMaxIdAsync(
  objJournalSubjectEN: clsJournalSubjectEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objJournalSubjectEN, config);
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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
 * @param objJournalSubjectEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function JournalSubject_AddNewRecordWithReturnKeyAsync(
  objJournalSubjectEN: clsJournalSubjectEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objJournalSubjectEN, config);
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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
 * @param objJournalSubjectEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function JournalSubject_UpdateRecordAsync(
  objJournalSubjectEN: clsJournalSubjectEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objJournalSubjectEN.sfUpdFldSetStr === undefined ||
    objJournalSubjectEN.sfUpdFldSetStr === null ||
    objJournalSubjectEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objJournalSubjectEN.journalSubjectId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objJournalSubjectEN, config);
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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
 * @param objJournalSubjectEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function JournalSubject_UpdateWithConditionAsync(
  objJournalSubjectEN: clsJournalSubjectEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objJournalSubjectEN.sfUpdFldSetStr === undefined ||
    objJournalSubjectEN.sfUpdFldSetStr === null ||
    objJournalSubjectEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objJournalSubjectEN.journalSubjectId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);
  objJournalSubjectEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objJournalSubjectEN, config);
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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
 * @param objstrJournalSubjectIdCond:条件对象
 * @returns 对象列表子集
 */
export async function JournalSubject_IsExistRecordCache(
  objJournalSubjectCond: clsJournalSubjectEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstCache();
  if (arrJournalSubjectObjLstCache == null) return false;
  let arrJournalSubjectSel = arrJournalSubjectObjLstCache;
  if (
    objJournalSubjectCond.sfFldComparisonOp == null ||
    objJournalSubjectCond.sfFldComparisonOp == ''
  )
    return arrJournalSubjectSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objJournalSubjectCond.sfFldComparisonOp,
  );
  //console.log("clsJournalSubjectWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objJournalSubjectCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objJournalSubjectCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrJournalSubjectSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objJournalSubjectCond),
      journalSubject_ConstructorName,
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
export async function JournalSubject_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
 * @param strJournalSubjectId:所给的关键字
 * @returns 对象
 */
export async function JournalSubject_IsExistCache(strJournalSubjectId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstCache();
  if (arrJournalSubjectObjLstCache == null) return false;
  try {
    const arrJournalSubjectSel = arrJournalSubjectObjLstCache.filter(
      (x) => x.journalSubjectId == strJournalSubjectId,
    );
    if (arrJournalSubjectSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strJournalSubjectId,
      journalSubject_ConstructorName,
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
 * @param strJournalSubjectId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function JournalSubject_IsExistAsync(strJournalSubjectId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strJournalSubjectId,
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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
export async function JournalSubject_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
 * @param objJournalSubjectCond:条件对象
 * @returns 对象列表记录数
 */
export async function JournalSubject_GetRecCountByCondCache(
  objJournalSubjectCond: clsJournalSubjectEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrJournalSubjectObjLstCache = await JournalSubject_GetObjLstCache();
  if (arrJournalSubjectObjLstCache == null) return 0;
  let arrJournalSubjectSel = arrJournalSubjectObjLstCache;
  if (
    objJournalSubjectCond.sfFldComparisonOp == null ||
    objJournalSubjectCond.sfFldComparisonOp == ''
  )
    return arrJournalSubjectSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objJournalSubjectCond.sfFldComparisonOp,
  );
  //console.log("clsJournalSubjectWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objJournalSubjectCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrJournalSubjectSel = arrJournalSubjectSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objJournalSubjectCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrJournalSubjectSel = arrJournalSubjectSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrJournalSubjectSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objJournalSubjectCond),
      journalSubject_ConstructorName,
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
export async function JournalSubject_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
export async function JournalSubject_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(journalSubject_Controller, strAction);

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
        journalSubject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        journalSubject_ConstructorName,
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
export function JournalSubject_GetWebApiUrl(strController: string, strAction: string): string {
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
export function JournalSubject_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsJournalSubjectEN._CurrTabName;
  switch (clsJournalSubjectEN.CacheModeId) {
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
export function JournalSubject_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsJournalSubjectEN._CurrTabName;
    switch (clsJournalSubjectEN.CacheModeId) {
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
export async function JournalSubject_BindDdl_JournalSubjectIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_JournalSubjectIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_JournalSubjectIdInDivCache");
  const arrObjLstSel = await JournalSubject_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsJournalSubjectEN.con_JournalSubjectId,
    clsJournalSubjectEN.con_JournalSubjectName,
    '期刊学科',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function JournalSubject_CheckPropertyNew(pobjJournalSubjectEN: clsJournalSubjectEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectCode) === true) {
    throw new Error(
      '(errid:Watl000411)字段[期刊学科代码]不能为空(In 期刊学科)!(clsJournalSubjectBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[期刊学科名称]不能为空(In 期刊学科)!(clsJournalSubjectBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectCategoryId) === true ||
    pobjJournalSubjectEN.journalSubjectCategoryId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[期刊学科门类Id]不能为空(In 期刊学科)!(clsJournalSubjectBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectId) == false &&
    GetStrLen(pobjJournalSubjectEN.journalSubjectId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[期刊学科Id(journalSubjectId)]的长度不能超过4(In 期刊学科(JournalSubject))!值:$(pobjJournalSubjectEN.journalSubjectId)(clsJournalSubjectBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectCode) == false &&
    GetStrLen(pobjJournalSubjectEN.journalSubjectCode) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[期刊学科代码(journalSubjectCode)]的长度不能超过100(In 期刊学科(JournalSubject))!值:$(pobjJournalSubjectEN.journalSubjectCode)(clsJournalSubjectBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectName) == false &&
    GetStrLen(pobjJournalSubjectEN.journalSubjectName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[期刊学科名称(journalSubjectName)]的长度不能超过100(In 期刊学科(JournalSubject))!值:$(pobjJournalSubjectEN.journalSubjectName)(clsJournalSubjectBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectCategoryId) == false &&
    GetStrLen(pobjJournalSubjectEN.journalSubjectCategoryId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[期刊学科门类Id(journalSubjectCategoryId)]的长度不能超过4(In 期刊学科(JournalSubject))!值:$(pobjJournalSubjectEN.journalSubjectCategoryId)(clsJournalSubjectBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.updDate) == false &&
    GetStrLen(pobjJournalSubjectEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 期刊学科(JournalSubject))!值:$(pobjJournalSubjectEN.updDate)(clsJournalSubjectBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.updUser) == false &&
    GetStrLen(pobjJournalSubjectEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 期刊学科(JournalSubject))!值:$(pobjJournalSubjectEN.updUser)(clsJournalSubjectBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.memo) == false &&
    GetStrLen(pobjJournalSubjectEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 期刊学科(JournalSubject))!值:$(pobjJournalSubjectEN.memo)(clsJournalSubjectBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectId) == false &&
    undefined !== pobjJournalSubjectEN.journalSubjectId &&
    tzDataType.isString(pobjJournalSubjectEN.journalSubjectId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[期刊学科Id(journalSubjectId)]的值:[$(pobjJournalSubjectEN.journalSubjectId)], 非法,应该为字符型(In 期刊学科(JournalSubject))!(clsJournalSubjectBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectCode) == false &&
    undefined !== pobjJournalSubjectEN.journalSubjectCode &&
    tzDataType.isString(pobjJournalSubjectEN.journalSubjectCode) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[期刊学科代码(journalSubjectCode)]的值:[$(pobjJournalSubjectEN.journalSubjectCode)], 非法,应该为字符型(In 期刊学科(JournalSubject))!(clsJournalSubjectBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectName) == false &&
    undefined !== pobjJournalSubjectEN.journalSubjectName &&
    tzDataType.isString(pobjJournalSubjectEN.journalSubjectName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[期刊学科名称(journalSubjectName)]的值:[$(pobjJournalSubjectEN.journalSubjectName)], 非法,应该为字符型(In 期刊学科(JournalSubject))!(clsJournalSubjectBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectCategoryId) == false &&
    undefined !== pobjJournalSubjectEN.journalSubjectCategoryId &&
    tzDataType.isString(pobjJournalSubjectEN.journalSubjectCategoryId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[期刊学科门类Id(journalSubjectCategoryId)]的值:[$(pobjJournalSubjectEN.journalSubjectCategoryId)], 非法,应该为字符型(In 期刊学科(JournalSubject))!(clsJournalSubjectBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.updDate) == false &&
    undefined !== pobjJournalSubjectEN.updDate &&
    tzDataType.isString(pobjJournalSubjectEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjJournalSubjectEN.updDate)], 非法,应该为字符型(In 期刊学科(JournalSubject))!(clsJournalSubjectBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.updUser) == false &&
    undefined !== pobjJournalSubjectEN.updUser &&
    tzDataType.isString(pobjJournalSubjectEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjJournalSubjectEN.updUser)], 非法,应该为字符型(In 期刊学科(JournalSubject))!(clsJournalSubjectBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.memo) == false &&
    undefined !== pobjJournalSubjectEN.memo &&
    tzDataType.isString(pobjJournalSubjectEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjJournalSubjectEN.memo)], 非法,应该为字符型(In 期刊学科(JournalSubject))!(clsJournalSubjectBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function JournalSubject_CheckProperty4Update(pobjJournalSubjectEN: clsJournalSubjectEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectId) == false &&
    GetStrLen(pobjJournalSubjectEN.journalSubjectId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[期刊学科Id(journalSubjectId)]的长度不能超过4(In 期刊学科(JournalSubject))!值:$(pobjJournalSubjectEN.journalSubjectId)(clsJournalSubjectBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectCode) == false &&
    GetStrLen(pobjJournalSubjectEN.journalSubjectCode) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[期刊学科代码(journalSubjectCode)]的长度不能超过100(In 期刊学科(JournalSubject))!值:$(pobjJournalSubjectEN.journalSubjectCode)(clsJournalSubjectBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectName) == false &&
    GetStrLen(pobjJournalSubjectEN.journalSubjectName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[期刊学科名称(journalSubjectName)]的长度不能超过100(In 期刊学科(JournalSubject))!值:$(pobjJournalSubjectEN.journalSubjectName)(clsJournalSubjectBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectCategoryId) == false &&
    GetStrLen(pobjJournalSubjectEN.journalSubjectCategoryId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[期刊学科门类Id(journalSubjectCategoryId)]的长度不能超过4(In 期刊学科(JournalSubject))!值:$(pobjJournalSubjectEN.journalSubjectCategoryId)(clsJournalSubjectBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.updDate) == false &&
    GetStrLen(pobjJournalSubjectEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 期刊学科(JournalSubject))!值:$(pobjJournalSubjectEN.updDate)(clsJournalSubjectBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.updUser) == false &&
    GetStrLen(pobjJournalSubjectEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 期刊学科(JournalSubject))!值:$(pobjJournalSubjectEN.updUser)(clsJournalSubjectBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.memo) == false &&
    GetStrLen(pobjJournalSubjectEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 期刊学科(JournalSubject))!值:$(pobjJournalSubjectEN.memo)(clsJournalSubjectBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectId) == false &&
    undefined !== pobjJournalSubjectEN.journalSubjectId &&
    tzDataType.isString(pobjJournalSubjectEN.journalSubjectId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[期刊学科Id(journalSubjectId)]的值:[$(pobjJournalSubjectEN.journalSubjectId)], 非法,应该为字符型(In 期刊学科(JournalSubject))!(clsJournalSubjectBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectCode) == false &&
    undefined !== pobjJournalSubjectEN.journalSubjectCode &&
    tzDataType.isString(pobjJournalSubjectEN.journalSubjectCode) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[期刊学科代码(journalSubjectCode)]的值:[$(pobjJournalSubjectEN.journalSubjectCode)], 非法,应该为字符型(In 期刊学科(JournalSubject))!(clsJournalSubjectBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectName) == false &&
    undefined !== pobjJournalSubjectEN.journalSubjectName &&
    tzDataType.isString(pobjJournalSubjectEN.journalSubjectName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[期刊学科名称(journalSubjectName)]的值:[$(pobjJournalSubjectEN.journalSubjectName)], 非法,应该为字符型(In 期刊学科(JournalSubject))!(clsJournalSubjectBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.journalSubjectCategoryId) == false &&
    undefined !== pobjJournalSubjectEN.journalSubjectCategoryId &&
    tzDataType.isString(pobjJournalSubjectEN.journalSubjectCategoryId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[期刊学科门类Id(journalSubjectCategoryId)]的值:[$(pobjJournalSubjectEN.journalSubjectCategoryId)], 非法,应该为字符型(In 期刊学科(JournalSubject))!(clsJournalSubjectBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.updDate) == false &&
    undefined !== pobjJournalSubjectEN.updDate &&
    tzDataType.isString(pobjJournalSubjectEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjJournalSubjectEN.updDate)], 非法,应该为字符型(In 期刊学科(JournalSubject))!(clsJournalSubjectBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.updUser) == false &&
    undefined !== pobjJournalSubjectEN.updUser &&
    tzDataType.isString(pobjJournalSubjectEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjJournalSubjectEN.updUser)], 非法,应该为字符型(In 期刊学科(JournalSubject))!(clsJournalSubjectBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjJournalSubjectEN.memo) == false &&
    undefined !== pobjJournalSubjectEN.memo &&
    tzDataType.isString(pobjJournalSubjectEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjJournalSubjectEN.memo)], 非法,应该为字符型(In 期刊学科(JournalSubject))!(clsJournalSubjectBL:CheckProperty4Update)',
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
export function JournalSubject_GetJSONStrByObj(pobjJournalSubjectEN: clsJournalSubjectEN): string {
  pobjJournalSubjectEN.sfUpdFldSetStr = pobjJournalSubjectEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjJournalSubjectEN);
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
export function JournalSubject_GetObjLstByJSONStr(strJSON: string): Array<clsJournalSubjectEN> {
  let arrJournalSubjectObjLst = new Array<clsJournalSubjectEN>();
  if (strJSON === '') {
    return arrJournalSubjectObjLst;
  }
  try {
    arrJournalSubjectObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrJournalSubjectObjLst;
  }
  return arrJournalSubjectObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrJournalSubjectObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function JournalSubject_GetObjLstByJSONObjLst(
  arrJournalSubjectObjLstS: Array<clsJournalSubjectEN>,
): Array<clsJournalSubjectEN> {
  const arrJournalSubjectObjLst = new Array<clsJournalSubjectEN>();
  for (const objInFor of arrJournalSubjectObjLstS) {
    const obj1 = JournalSubject_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrJournalSubjectObjLst.push(obj1);
  }
  return arrJournalSubjectObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function JournalSubject_GetObjByJSONStr(strJSON: string): clsJournalSubjectEN {
  let pobjJournalSubjectEN = new clsJournalSubjectEN();
  if (strJSON === '') {
    return pobjJournalSubjectEN;
  }
  try {
    pobjJournalSubjectEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjJournalSubjectEN;
  }
  return pobjJournalSubjectEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function JournalSubject_GetCombineCondition(
  objJournalSubjectCond: clsJournalSubjectEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objJournalSubjectCond.dicFldComparisonOp,
      clsJournalSubjectEN.con_JournalSubjectId,
    ) == true
  ) {
    const strComparisonOpJournalSubjectId: string =
      objJournalSubjectCond.dicFldComparisonOp[clsJournalSubjectEN.con_JournalSubjectId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsJournalSubjectEN.con_JournalSubjectId,
      objJournalSubjectCond.journalSubjectId,
      strComparisonOpJournalSubjectId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objJournalSubjectCond.dicFldComparisonOp,
      clsJournalSubjectEN.con_JournalSubjectCode,
    ) == true
  ) {
    const strComparisonOpJournalSubjectCode: string =
      objJournalSubjectCond.dicFldComparisonOp[clsJournalSubjectEN.con_JournalSubjectCode];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsJournalSubjectEN.con_JournalSubjectCode,
      objJournalSubjectCond.journalSubjectCode,
      strComparisonOpJournalSubjectCode,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objJournalSubjectCond.dicFldComparisonOp,
      clsJournalSubjectEN.con_JournalSubjectName,
    ) == true
  ) {
    const strComparisonOpJournalSubjectName: string =
      objJournalSubjectCond.dicFldComparisonOp[clsJournalSubjectEN.con_JournalSubjectName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsJournalSubjectEN.con_JournalSubjectName,
      objJournalSubjectCond.journalSubjectName,
      strComparisonOpJournalSubjectName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objJournalSubjectCond.dicFldComparisonOp,
      clsJournalSubjectEN.con_JournalSubjectCategoryId,
    ) == true
  ) {
    const strComparisonOpJournalSubjectCategoryId: string =
      objJournalSubjectCond.dicFldComparisonOp[clsJournalSubjectEN.con_JournalSubjectCategoryId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsJournalSubjectEN.con_JournalSubjectCategoryId,
      objJournalSubjectCond.journalSubjectCategoryId,
      strComparisonOpJournalSubjectCategoryId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objJournalSubjectCond.dicFldComparisonOp,
      clsJournalSubjectEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objJournalSubjectCond.dicFldComparisonOp[clsJournalSubjectEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsJournalSubjectEN.con_UpdDate,
      objJournalSubjectCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objJournalSubjectCond.dicFldComparisonOp,
      clsJournalSubjectEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objJournalSubjectCond.dicFldComparisonOp[clsJournalSubjectEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsJournalSubjectEN.con_UpdUser,
      objJournalSubjectCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objJournalSubjectCond.dicFldComparisonOp,
      clsJournalSubjectEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objJournalSubjectCond.dicFldComparisonOp[clsJournalSubjectEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsJournalSubjectEN.con_Memo,
      objJournalSubjectCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--JournalSubject(期刊学科),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strJournalSubjectCategoryId: 期刊学科门类Id(要求唯一的字段)
 * @param strJournalSubjectName: 期刊学科名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function JournalSubject_GetUniCondStr(objJournalSubjectEN: clsJournalSubjectEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and JournalSubjectCategoryId = '{0}'",
    objJournalSubjectEN.journalSubjectCategoryId,
  );
  strWhereCond += Format(" and JournalSubjectName = '{0}'", objJournalSubjectEN.journalSubjectName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--JournalSubject(期刊学科),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strJournalSubjectCategoryId: 期刊学科门类Id(要求唯一的字段)
 * @param strJournalSubjectName: 期刊学科名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function JournalSubject_GetUniCondStr4Update(
  objJournalSubjectEN: clsJournalSubjectEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and JournalSubjectId <> '{0}'", objJournalSubjectEN.journalSubjectId);
  strWhereCond += Format(
    " and JournalSubjectCategoryId = '{0}'",
    objJournalSubjectEN.journalSubjectCategoryId,
  );
  strWhereCond += Format(" and JournalSubjectName = '{0}'", objJournalSubjectEN.journalSubjectName);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objJournalSubjectENS:源对象
 * @param objJournalSubjectENT:目标对象
 */
export function JournalSubject_CopyObjTo(
  objJournalSubjectENS: clsJournalSubjectEN,
  objJournalSubjectENT: clsJournalSubjectEN,
): void {
  objJournalSubjectENT.journalSubjectId = objJournalSubjectENS.journalSubjectId; //期刊学科Id
  objJournalSubjectENT.journalSubjectCode = objJournalSubjectENS.journalSubjectCode; //期刊学科代码
  objJournalSubjectENT.journalSubjectName = objJournalSubjectENS.journalSubjectName; //期刊学科名称
  objJournalSubjectENT.journalSubjectCategoryId = objJournalSubjectENS.journalSubjectCategoryId; //期刊学科门类Id
  objJournalSubjectENT.updDate = objJournalSubjectENS.updDate; //修改日期
  objJournalSubjectENT.updUser = objJournalSubjectENS.updUser; //修改人
  objJournalSubjectENT.memo = objJournalSubjectENS.memo; //备注
  objJournalSubjectENT.sfUpdFldSetStr = objJournalSubjectENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objJournalSubjectENS:源对象
 * @param objJournalSubjectENT:目标对象
 */
export function JournalSubject_GetObjFromJsonObj(
  objJournalSubjectENS: clsJournalSubjectEN,
): clsJournalSubjectEN {
  const objJournalSubjectENT: clsJournalSubjectEN = new clsJournalSubjectEN();
  ObjectAssign(objJournalSubjectENT, objJournalSubjectENS);
  return objJournalSubjectENT;
}
