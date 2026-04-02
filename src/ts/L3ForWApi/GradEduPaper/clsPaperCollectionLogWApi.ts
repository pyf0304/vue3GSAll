/**
 * 类名:clsPaperCollectionLogWApi
 * 表名:PaperCollectionLog(01120565)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:18
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
 * 论文收藏(PaperCollectionLog)
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
import { clsPaperCollectionLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperCollectionLogEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const paperCollectionLog_Controller = 'PaperCollectionLogApi';
export const paperCollectionLog_ConstructorName = 'paperCollectionLog';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngPaperCollectionLogId:关键字
 * @returns 对象
 **/
export async function PaperCollectionLog_GetObjByPaperCollectionLogIdAsync(
  lngPaperCollectionLogId: number,
): Promise<clsPaperCollectionLogEN | null> {
  const strThisFuncName = 'GetObjByPaperCollectionLogIdAsync';

  if (lngPaperCollectionLogId == 0) {
    const strMsg = Format(
      '参数:[lngPaperCollectionLogId]不能为空!(In clsPaperCollectionLogWApi.GetObjByPaperCollectionLogIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPaperCollectionLogId';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngPaperCollectionLogId,
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
      const objPaperCollectionLog = PaperCollectionLog_GetObjFromJsonObj(returnObj);
      return objPaperCollectionLog;
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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
 * @param lngPaperCollectionLogId:所给的关键字
 * @returns 对象
 */
export async function PaperCollectionLog_GetObjByPaperCollectionLogIdCache(
  lngPaperCollectionLogId: number,
  strUpdUser: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPaperCollectionLogIdCache';

  if (lngPaperCollectionLogId == 0) {
    const strMsg = Format(
      '参数:[lngPaperCollectionLogId]不能为空!(In clsPaperCollectionLogWApi.GetObjByPaperCollectionLogIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPaperCollectionLogObjLstCache = await PaperCollectionLog_GetObjLstCache(strUpdUser);
  try {
    const arrPaperCollectionLogSel = arrPaperCollectionLogObjLstCache.filter(
      (x) => x.paperCollectionLogId == lngPaperCollectionLogId,
    );
    let objPaperCollectionLog: clsPaperCollectionLogEN;
    if (arrPaperCollectionLogSel.length > 0) {
      objPaperCollectionLog = arrPaperCollectionLogSel[0];
      return objPaperCollectionLog;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPaperCollectionLogConst =
          await PaperCollectionLog_GetObjByPaperCollectionLogIdAsync(lngPaperCollectionLogId);
        if (objPaperCollectionLogConst != null) {
          PaperCollectionLog_ReFreshThisCache(strUpdUser);
          return objPaperCollectionLogConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngPaperCollectionLogId,
      paperCollectionLog_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngPaperCollectionLogId:所给的关键字
 * @returns 对象
 */
export async function PaperCollectionLog_GetObjByPaperCollectionLogIdlocalStorage(
  lngPaperCollectionLogId: number,
) {
  const strThisFuncName = 'GetObjByPaperCollectionLogIdlocalStorage';

  if (lngPaperCollectionLogId == 0) {
    const strMsg = Format(
      '参数:[lngPaperCollectionLogId]不能为空!(In clsPaperCollectionLogWApi.GetObjByPaperCollectionLogIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPaperCollectionLogEN._CurrTabName, lngPaperCollectionLogId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPaperCollectionLogCache: clsPaperCollectionLogEN = JSON.parse(strTempObj);
    return objPaperCollectionLogCache;
  }
  try {
    const objPaperCollectionLog = await PaperCollectionLog_GetObjByPaperCollectionLogIdAsync(
      lngPaperCollectionLogId,
    );
    if (objPaperCollectionLog != null) {
      localStorage.setItem(strKey, JSON.stringify(objPaperCollectionLog));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPaperCollectionLog;
    }
    return objPaperCollectionLog;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngPaperCollectionLogId,
      paperCollectionLog_ConstructorName,
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
 * @param objPaperCollectionLog:所给的对象
 * @returns 对象
 */
export async function PaperCollectionLog_UpdateObjInLstCache(
  objPaperCollectionLog: clsPaperCollectionLogEN,
  strUpdUser: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPaperCollectionLogObjLstCache = await PaperCollectionLog_GetObjLstCache(strUpdUser);
    const obj = arrPaperCollectionLogObjLstCache.find(
      (x) => x.paperCollectionLogId == objPaperCollectionLog.paperCollectionLogId,
    );
    if (obj != null) {
      objPaperCollectionLog.paperCollectionLogId = obj.paperCollectionLogId;
      ObjectAssign(obj, objPaperCollectionLog);
    } else {
      arrPaperCollectionLogObjLstCache.push(objPaperCollectionLog);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      paperCollectionLog_ConstructorName,
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
 @param strUpdUser:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function PaperCollectionLog_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strUpdUserClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strUpdUserClassfy) == true) {
    const strMsg = Format('参数:[strUpdUserClassfy]不能为空!(In clsPaperCollectionLogWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsPaperCollectionLogEN.con_PaperCollectionLogId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPaperCollectionLogEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPaperCollectionLogEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngPaperCollectionLogId = Number(strInValue);
  if (lngPaperCollectionLogId == 0) {
    return '';
  }
  const objPaperCollectionLog = await PaperCollectionLog_GetObjByPaperCollectionLogIdCache(
    lngPaperCollectionLogId,
    strUpdUserClassfy,
  );
  if (objPaperCollectionLog == null) return '';
  if (objPaperCollectionLog.GetFldValue(strOutFldName) == null) return '';
  return objPaperCollectionLog.GetFldValue(strOutFldName).toString();
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
export function PaperCollectionLog_SortFunDefa(
  a: clsPaperCollectionLogEN,
  b: clsPaperCollectionLogEN,
): number {
  return a.paperCollectionLogId - b.paperCollectionLogId;
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
export function PaperCollectionLog_SortFunDefa2Fld(
  a: clsPaperCollectionLogEN,
  b: clsPaperCollectionLogEN,
): number {
  if (a.paperId == b.paperId) return a.updUser.localeCompare(b.updUser);
  else return a.paperId.localeCompare(b.paperId);
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
export function PaperCollectionLog_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPaperCollectionLogEN.con_PaperCollectionLogId:
        return (a: clsPaperCollectionLogEN, b: clsPaperCollectionLogEN) => {
          return a.paperCollectionLogId - b.paperCollectionLogId;
        };
      case clsPaperCollectionLogEN.con_PaperId:
        return (a: clsPaperCollectionLogEN, b: clsPaperCollectionLogEN) => {
          if (a.paperId == null) return -1;
          if (b.paperId == null) return 1;
          return a.paperId.localeCompare(b.paperId);
        };
      case clsPaperCollectionLogEN.con_UpdUser:
        return (a: clsPaperCollectionLogEN, b: clsPaperCollectionLogEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsPaperCollectionLogEN.con_UpdDate:
        return (a: clsPaperCollectionLogEN, b: clsPaperCollectionLogEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPaperCollectionLogEN.con_Meno:
        return (a: clsPaperCollectionLogEN, b: clsPaperCollectionLogEN) => {
          if (a.meno == null) return -1;
          if (b.meno == null) return 1;
          return a.meno.localeCompare(b.meno);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PaperCollectionLog]中不存在!(in ${paperCollectionLog_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPaperCollectionLogEN.con_PaperCollectionLogId:
        return (a: clsPaperCollectionLogEN, b: clsPaperCollectionLogEN) => {
          return b.paperCollectionLogId - a.paperCollectionLogId;
        };
      case clsPaperCollectionLogEN.con_PaperId:
        return (a: clsPaperCollectionLogEN, b: clsPaperCollectionLogEN) => {
          if (b.paperId == null) return -1;
          if (a.paperId == null) return 1;
          return b.paperId.localeCompare(a.paperId);
        };
      case clsPaperCollectionLogEN.con_UpdUser:
        return (a: clsPaperCollectionLogEN, b: clsPaperCollectionLogEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsPaperCollectionLogEN.con_UpdDate:
        return (a: clsPaperCollectionLogEN, b: clsPaperCollectionLogEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPaperCollectionLogEN.con_Meno:
        return (a: clsPaperCollectionLogEN, b: clsPaperCollectionLogEN) => {
          if (b.meno == null) return -1;
          if (a.meno == null) return 1;
          return b.meno.localeCompare(a.meno);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PaperCollectionLog]中不存在!(in ${paperCollectionLog_ConstructorName}.${strThisFuncName})`;
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
export async function PaperCollectionLog_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPaperCollectionLogEN.con_PaperCollectionLogId:
      return (obj: clsPaperCollectionLogEN) => {
        return obj.paperCollectionLogId === value;
      };
    case clsPaperCollectionLogEN.con_PaperId:
      return (obj: clsPaperCollectionLogEN) => {
        return obj.paperId === value;
      };
    case clsPaperCollectionLogEN.con_UpdUser:
      return (obj: clsPaperCollectionLogEN) => {
        return obj.updUser === value;
      };
    case clsPaperCollectionLogEN.con_UpdDate:
      return (obj: clsPaperCollectionLogEN) => {
        return obj.updDate === value;
      };
    case clsPaperCollectionLogEN.con_Meno:
      return (obj: clsPaperCollectionLogEN) => {
        return obj.meno === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PaperCollectionLog]中不存在!(in ${paperCollectionLog_ConstructorName}.${strThisFuncName})`;
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
 @param strUpdUser:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function PaperCollectionLog_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strUpdUserClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strUpdUserClassfy) == true) {
    const strMsg = Format(
      '参数:[strUpdUserClassfy]不能为空!(In clsPaperCollectionLogWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsPaperCollectionLogEN.con_PaperCollectionLogId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrPaperCollectionLog = await PaperCollectionLog_GetObjLstCache(strUpdUserClassfy);
  if (arrPaperCollectionLog == null) return [];
  let arrPaperCollectionLogSel = arrPaperCollectionLog;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPaperCollectionLogSel.length == 0) return [];
  return arrPaperCollectionLogSel.map((x) => x.paperCollectionLogId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperCollectionLog_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
export async function PaperCollectionLog_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
export async function PaperCollectionLog_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPaperCollectionLogEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

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
      const objPaperCollectionLog = PaperCollectionLog_GetObjFromJsonObj(returnObj);
      return objPaperCollectionLog;
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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
export async function PaperCollectionLog_GetObjLstClientCache(strUpdUser: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPaperCollectionLogEN.WhereFormat) == false) {
    strWhereCond = Format(clsPaperCollectionLogEN.WhereFormat, strUpdUser);
  } else {
    strWhereCond = Format("UpdUser='{0}'", strUpdUser);
  }
  const strKey = Format('{0}_{1}', clsPaperCollectionLogEN._CurrTabName, strUpdUser);
  if (IsNullOrEmpty(clsPaperCollectionLogEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperCollectionLogEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPaperCollectionLogExObjLstCache: Array<clsPaperCollectionLogEN> =
      CacheHelper.Get(strKey);
    const arrPaperCollectionLogObjLstT = PaperCollectionLog_GetObjLstByJSONObjLst(
      arrPaperCollectionLogExObjLstCache,
    );
    return arrPaperCollectionLogObjLstT;
  }
  try {
    const arrPaperCollectionLogExObjLst = await PaperCollectionLog_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPaperCollectionLogExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperCollectionLogExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperCollectionLogExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperCollectionLog_ConstructorName,
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
export async function PaperCollectionLog_GetObjLstlocalStorage(strUpdUser: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPaperCollectionLogEN.WhereFormat) == false) {
    strWhereCond = Format(clsPaperCollectionLogEN.WhereFormat, strUpdUser);
  } else {
    strWhereCond = Format("{0}='{1}'", clsPaperCollectionLogEN.con_UpdUser, strUpdUser);
  }
  const strKey = Format('{0}_{1}', clsPaperCollectionLogEN._CurrTabName, strUpdUser);
  if (IsNullOrEmpty(clsPaperCollectionLogEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperCollectionLogEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPaperCollectionLogExObjLstCache: Array<clsPaperCollectionLogEN> =
      JSON.parse(strTempObjLst);
    const arrPaperCollectionLogObjLstT = PaperCollectionLog_GetObjLstByJSONObjLst(
      arrPaperCollectionLogExObjLstCache,
    );
    return arrPaperCollectionLogObjLstT;
  }
  try {
    const arrPaperCollectionLogExObjLst = await PaperCollectionLog_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPaperCollectionLogExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperCollectionLogExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperCollectionLogExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperCollectionLog_ConstructorName,
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
export async function PaperCollectionLog_GetObjLstlocalStoragePureCache(strUpdUser: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsPaperCollectionLogEN._CurrTabName, strUpdUser);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPaperCollectionLogObjLstCache: Array<clsPaperCollectionLogEN> =
      JSON.parse(strTempObjLst);
    return arrPaperCollectionLogObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PaperCollectionLog_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPaperCollectionLogEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

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
          paperCollectionLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperCollectionLog_GetObjLstByJSONObjLst(returnObjLst);
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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
export async function PaperCollectionLog_GetObjLstsessionStorage(strUpdUser: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPaperCollectionLogEN.WhereFormat) == false) {
    strWhereCond = Format(clsPaperCollectionLogEN.WhereFormat, strUpdUser);
  } else {
    strWhereCond = Format("{0}='{1}'", clsPaperCollectionLogEN.con_UpdUser, strUpdUser);
  }
  const strKey = Format('{0}_{1}', clsPaperCollectionLogEN._CurrTabName, strUpdUser);
  if (IsNullOrEmpty(clsPaperCollectionLogEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperCollectionLogEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPaperCollectionLogExObjLstCache: Array<clsPaperCollectionLogEN> =
      JSON.parse(strTempObjLst);
    const arrPaperCollectionLogObjLstT = PaperCollectionLog_GetObjLstByJSONObjLst(
      arrPaperCollectionLogExObjLstCache,
    );
    return arrPaperCollectionLogObjLstT;
  }
  try {
    const arrPaperCollectionLogExObjLst = await PaperCollectionLog_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPaperCollectionLogExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperCollectionLogExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperCollectionLogExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperCollectionLog_ConstructorName,
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
export async function PaperCollectionLog_GetObjLstsessionStoragePureCache(strUpdUser: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsPaperCollectionLogEN._CurrTabName, strUpdUser);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPaperCollectionLogObjLstCache: Array<clsPaperCollectionLogEN> =
      JSON.parse(strTempObjLst);
    return arrPaperCollectionLogObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperCollectionLog_GetObjLstCache(
  strUpdUser: string,
): Promise<Array<clsPaperCollectionLogEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strUpdUser) == true) {
    const strMsg = Format(
      '参数:[strUpdUser]不能为空！(In clsPaperCollectionLogWApi.PaperCollectionLog_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrPaperCollectionLogObjLstCache;
  switch (clsPaperCollectionLogEN.CacheModeId) {
    case '04': //sessionStorage
      arrPaperCollectionLogObjLstCache = await PaperCollectionLog_GetObjLstsessionStorage(
        strUpdUser,
      );
      break;
    case '03': //localStorage
      arrPaperCollectionLogObjLstCache = await PaperCollectionLog_GetObjLstlocalStorage(strUpdUser);
      break;
    case '02': //ClientCache
      arrPaperCollectionLogObjLstCache = await PaperCollectionLog_GetObjLstClientCache(strUpdUser);
      break;
    default:
      arrPaperCollectionLogObjLstCache = await PaperCollectionLog_GetObjLstClientCache(strUpdUser);
      break;
  }
  return arrPaperCollectionLogObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperCollectionLog_GetObjLstPureCache(strUpdUser: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPaperCollectionLogObjLstCache;
  switch (clsPaperCollectionLogEN.CacheModeId) {
    case '04': //sessionStorage
      arrPaperCollectionLogObjLstCache = await PaperCollectionLog_GetObjLstsessionStoragePureCache(
        strUpdUser,
      );
      break;
    case '03': //localStorage
      arrPaperCollectionLogObjLstCache = await PaperCollectionLog_GetObjLstlocalStoragePureCache(
        strUpdUser,
      );
      break;
    case '02': //ClientCache
      arrPaperCollectionLogObjLstCache = null;
      break;
    default:
      arrPaperCollectionLogObjLstCache = null;
      break;
  }
  return arrPaperCollectionLogObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngPaperCollectionLogIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PaperCollectionLog_GetSubObjLstCache(
  objPaperCollectionLogCond: clsPaperCollectionLogEN,
  strUpdUser: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPaperCollectionLogObjLstCache = await PaperCollectionLog_GetObjLstCache(strUpdUser);
  let arrPaperCollectionLogSel = arrPaperCollectionLogObjLstCache;
  if (
    objPaperCollectionLogCond.sfFldComparisonOp == null ||
    objPaperCollectionLogCond.sfFldComparisonOp == ''
  )
    return arrPaperCollectionLogSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperCollectionLogCond.sfFldComparisonOp,
  );
  //console.log("clsPaperCollectionLogWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperCollectionLogCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperCollectionLogCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPaperCollectionLogSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPaperCollectionLogCond),
      paperCollectionLog_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperCollectionLogEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPaperCollectionLogId:关键字列表
 * @returns 对象列表
 **/
export async function PaperCollectionLog_GetObjLstByPaperCollectionLogIdLstAsync(
  arrPaperCollectionLogId: Array<string>,
): Promise<Array<clsPaperCollectionLogEN>> {
  const strThisFuncName = 'GetObjLstByPaperCollectionLogIdLstAsync';
  const strAction = 'GetObjLstByPaperCollectionLogIdLst';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPaperCollectionLogId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          paperCollectionLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperCollectionLog_GetObjLstByJSONObjLst(returnObjLst);
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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
 * @param arrlngPaperCollectionLogIdLst:关键字列表
 * @returns 对象列表
 */
export async function PaperCollectionLog_GetObjLstByPaperCollectionLogIdLstCache(
  arrPaperCollectionLogIdLst: Array<number>,
  strUpdUser: string,
) {
  const strThisFuncName = 'GetObjLstByPaperCollectionLogIdLstCache';
  try {
    const arrPaperCollectionLogObjLstCache = await PaperCollectionLog_GetObjLstCache(strUpdUser);
    const arrPaperCollectionLogSel = arrPaperCollectionLogObjLstCache.filter(
      (x) => arrPaperCollectionLogIdLst.indexOf(x.paperCollectionLogId) > -1,
    );
    return arrPaperCollectionLogSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPaperCollectionLogIdLst.join(','),
      paperCollectionLog_ConstructorName,
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
export async function PaperCollectionLog_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPaperCollectionLogEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

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
          paperCollectionLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperCollectionLog_GetObjLstByJSONObjLst(returnObjLst);
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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
export async function PaperCollectionLog_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPaperCollectionLogEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

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
          paperCollectionLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperCollectionLog_GetObjLstByJSONObjLst(returnObjLst);
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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
export async function PaperCollectionLog_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strUpdUser: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPaperCollectionLogEN>();
  const arrPaperCollectionLogObjLstCache = await PaperCollectionLog_GetObjLstCache(strUpdUser);
  if (arrPaperCollectionLogObjLstCache.length == 0) return arrPaperCollectionLogObjLstCache;
  let arrPaperCollectionLogSel = arrPaperCollectionLogObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objPaperCollectionLogCond = new clsPaperCollectionLogEN();
  ObjectAssign(objPaperCollectionLogCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsPaperCollectionLogWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperCollectionLogCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPaperCollectionLogSel.length == 0) return arrPaperCollectionLogSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPaperCollectionLogSel = arrPaperCollectionLogSel.sort(
        PaperCollectionLog_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPaperCollectionLogSel = arrPaperCollectionLogSel.sort(objPagerPara.sortFun);
    }
    arrPaperCollectionLogSel = arrPaperCollectionLogSel.slice(intStart, intEnd);
    return arrPaperCollectionLogSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      paperCollectionLog_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperCollectionLogEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PaperCollectionLog_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPaperCollectionLogEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPaperCollectionLogEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

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
          paperCollectionLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperCollectionLog_GetObjLstByJSONObjLst(returnObjLst);
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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
 * @param lngPaperCollectionLogId:关键字
 * @returns 获取删除的结果
 **/
export async function PaperCollectionLog_DelRecordAsync(
  lngPaperCollectionLogId: number,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngPaperCollectionLogId);

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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
 * @param arrPaperCollectionLogId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PaperCollectionLog_DelPaperCollectionLogsAsync(
  arrPaperCollectionLogId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPaperCollectionLogsAsync';
  const strAction = 'DelPaperCollectionLogs';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPaperCollectionLogId, config);
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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
export async function PaperCollectionLog_DelPaperCollectionLogsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPaperCollectionLogsByCondAsync';
  const strAction = 'DelPaperCollectionLogsByCond';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
 * @param objPaperCollectionLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PaperCollectionLog_AddNewRecordAsync(
  objPaperCollectionLogEN: clsPaperCollectionLogEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPaperCollectionLogEN);
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperCollectionLogEN, config);
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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objPaperCollectionLogEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PaperCollectionLog_AddNewRecordWithReturnKeyAsync(
  objPaperCollectionLogEN: clsPaperCollectionLogEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperCollectionLogEN, config);
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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
 * @param objPaperCollectionLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PaperCollectionLog_UpdateRecordAsync(
  objPaperCollectionLogEN: clsPaperCollectionLogEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPaperCollectionLogEN.sfUpdFldSetStr === undefined ||
    objPaperCollectionLogEN.sfUpdFldSetStr === null ||
    objPaperCollectionLogEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPaperCollectionLogEN.paperCollectionLogId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperCollectionLogEN, config);
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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
 * @param objPaperCollectionLogEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperCollectionLog_UpdateWithConditionAsync(
  objPaperCollectionLogEN: clsPaperCollectionLogEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPaperCollectionLogEN.sfUpdFldSetStr === undefined ||
    objPaperCollectionLogEN.sfUpdFldSetStr === null ||
    objPaperCollectionLogEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPaperCollectionLogEN.paperCollectionLogId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);
  objPaperCollectionLogEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperCollectionLogEN, config);
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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
 * @param objlngPaperCollectionLogIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PaperCollectionLog_IsExistRecordCache(
  objPaperCollectionLogCond: clsPaperCollectionLogEN,
  strUpdUser: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPaperCollectionLogObjLstCache = await PaperCollectionLog_GetObjLstCache(strUpdUser);
  if (arrPaperCollectionLogObjLstCache == null) return false;
  let arrPaperCollectionLogSel = arrPaperCollectionLogObjLstCache;
  if (
    objPaperCollectionLogCond.sfFldComparisonOp == null ||
    objPaperCollectionLogCond.sfFldComparisonOp == ''
  )
    return arrPaperCollectionLogSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperCollectionLogCond.sfFldComparisonOp,
  );
  //console.log("clsPaperCollectionLogWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperCollectionLogCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperCollectionLogCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPaperCollectionLogSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPaperCollectionLogCond),
      paperCollectionLog_ConstructorName,
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
export async function PaperCollectionLog_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
 * @param lngPaperCollectionLogId:所给的关键字
 * @returns 对象
 */
export async function PaperCollectionLog_IsExistCache(
  lngPaperCollectionLogId: number,
  strUpdUser: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrPaperCollectionLogObjLstCache = await PaperCollectionLog_GetObjLstCache(strUpdUser);
  if (arrPaperCollectionLogObjLstCache == null) return false;
  try {
    const arrPaperCollectionLogSel = arrPaperCollectionLogObjLstCache.filter(
      (x) => x.paperCollectionLogId == lngPaperCollectionLogId,
    );
    if (arrPaperCollectionLogSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngPaperCollectionLogId,
      paperCollectionLog_ConstructorName,
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
 * @param lngPaperCollectionLogId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PaperCollectionLog_IsExistAsync(
  lngPaperCollectionLogId: number,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngPaperCollectionLogId,
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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
export async function PaperCollectionLog_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
 * @param objPaperCollectionLogCond:条件对象
 * @returns 对象列表记录数
 */
export async function PaperCollectionLog_GetRecCountByCondCache(
  objPaperCollectionLogCond: clsPaperCollectionLogEN,
  strUpdUser: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPaperCollectionLogObjLstCache = await PaperCollectionLog_GetObjLstCache(strUpdUser);
  if (arrPaperCollectionLogObjLstCache == null) return 0;
  let arrPaperCollectionLogSel = arrPaperCollectionLogObjLstCache;
  if (
    objPaperCollectionLogCond.sfFldComparisonOp == null ||
    objPaperCollectionLogCond.sfFldComparisonOp == ''
  )
    return arrPaperCollectionLogSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperCollectionLogCond.sfFldComparisonOp,
  );
  //console.log("clsPaperCollectionLogWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperCollectionLogCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperCollectionLogCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperCollectionLogSel = arrPaperCollectionLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPaperCollectionLogSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPaperCollectionLogCond),
      paperCollectionLog_ConstructorName,
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
export async function PaperCollectionLog_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(paperCollectionLog_Controller, strAction);

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
        paperCollectionLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperCollectionLog_ConstructorName,
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
export function PaperCollectionLog_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PaperCollectionLog_ReFreshCache(strUpdUser: string): void {
  if (IsNullOrEmpty(strUpdUser) == true) {
    const strMsg = Format(
      '参数:[strUpdUser]不能为空!(In clsPaperCollectionLogWApi.clsPaperCollectionLogWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsPaperCollectionLogEN._CurrTabName, strUpdUser);
  switch (clsPaperCollectionLogEN.CacheModeId) {
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
export function PaperCollectionLog_ReFreshThisCache(strUpdUser: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsPaperCollectionLogEN._CurrTabName, strUpdUser);
    switch (clsPaperCollectionLogEN.CacheModeId) {
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
export function PaperCollectionLog_CheckPropertyNew(
  pobjPaperCollectionLogEN: clsPaperCollectionLogEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPaperCollectionLogEN.updUser) === true) {
    throw new Error(
      '(errid:Watl000411)字段[修改人]不能为空(In 论文收藏)!(clsPaperCollectionLogBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.paperId) == false &&
    GetStrLen(pobjPaperCollectionLogEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 论文收藏(PaperCollectionLog))!值:$(pobjPaperCollectionLogEN.paperId)(clsPaperCollectionLogBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.updUser) == false &&
    GetStrLen(pobjPaperCollectionLogEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文收藏(PaperCollectionLog))!值:$(pobjPaperCollectionLogEN.updUser)(clsPaperCollectionLogBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.updDate) == false &&
    GetStrLen(pobjPaperCollectionLogEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文收藏(PaperCollectionLog))!值:$(pobjPaperCollectionLogEN.updDate)(clsPaperCollectionLogBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.meno) == false &&
    GetStrLen(pobjPaperCollectionLogEN.meno) > 2000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(meno)]的长度不能超过2000(In 论文收藏(PaperCollectionLog))!值:$(pobjPaperCollectionLogEN.meno)(clsPaperCollectionLogBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjPaperCollectionLogEN.paperCollectionLogId &&
    undefined !== pobjPaperCollectionLogEN.paperCollectionLogId &&
    tzDataType.isNumber(pobjPaperCollectionLogEN.paperCollectionLogId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文收藏Id(paperCollectionLogId)]的值:[$(pobjPaperCollectionLogEN.paperCollectionLogId)], 非法,应该为数值型(In 论文收藏(PaperCollectionLog))!(clsPaperCollectionLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.paperId) == false &&
    undefined !== pobjPaperCollectionLogEN.paperId &&
    tzDataType.isString(pobjPaperCollectionLogEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjPaperCollectionLogEN.paperId)], 非法,应该为字符型(In 论文收藏(PaperCollectionLog))!(clsPaperCollectionLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.updUser) == false &&
    undefined !== pobjPaperCollectionLogEN.updUser &&
    tzDataType.isString(pobjPaperCollectionLogEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjPaperCollectionLogEN.updUser)], 非法,应该为字符型(In 论文收藏(PaperCollectionLog))!(clsPaperCollectionLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.updDate) == false &&
    undefined !== pobjPaperCollectionLogEN.updDate &&
    tzDataType.isString(pobjPaperCollectionLogEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjPaperCollectionLogEN.updDate)], 非法,应该为字符型(In 论文收藏(PaperCollectionLog))!(clsPaperCollectionLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.meno) == false &&
    undefined !== pobjPaperCollectionLogEN.meno &&
    tzDataType.isString(pobjPaperCollectionLogEN.meno) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(meno)]的值:[$(pobjPaperCollectionLogEN.meno)], 非法,应该为字符型(In 论文收藏(PaperCollectionLog))!(clsPaperCollectionLogBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PaperCollectionLog_CheckProperty4Update(
  pobjPaperCollectionLogEN: clsPaperCollectionLogEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.paperId) == false &&
    GetStrLen(pobjPaperCollectionLogEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 论文收藏(PaperCollectionLog))!值:$(pobjPaperCollectionLogEN.paperId)(clsPaperCollectionLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.updUser) == false &&
    GetStrLen(pobjPaperCollectionLogEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文收藏(PaperCollectionLog))!值:$(pobjPaperCollectionLogEN.updUser)(clsPaperCollectionLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.updDate) == false &&
    GetStrLen(pobjPaperCollectionLogEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文收藏(PaperCollectionLog))!值:$(pobjPaperCollectionLogEN.updDate)(clsPaperCollectionLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.meno) == false &&
    GetStrLen(pobjPaperCollectionLogEN.meno) > 2000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(meno)]的长度不能超过2000(In 论文收藏(PaperCollectionLog))!值:$(pobjPaperCollectionLogEN.meno)(clsPaperCollectionLogBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjPaperCollectionLogEN.paperCollectionLogId &&
    undefined !== pobjPaperCollectionLogEN.paperCollectionLogId &&
    tzDataType.isNumber(pobjPaperCollectionLogEN.paperCollectionLogId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文收藏Id(paperCollectionLogId)]的值:[$(pobjPaperCollectionLogEN.paperCollectionLogId)], 非法,应该为数值型(In 论文收藏(PaperCollectionLog))!(clsPaperCollectionLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.paperId) == false &&
    undefined !== pobjPaperCollectionLogEN.paperId &&
    tzDataType.isString(pobjPaperCollectionLogEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjPaperCollectionLogEN.paperId)], 非法,应该为字符型(In 论文收藏(PaperCollectionLog))!(clsPaperCollectionLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.updUser) == false &&
    undefined !== pobjPaperCollectionLogEN.updUser &&
    tzDataType.isString(pobjPaperCollectionLogEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjPaperCollectionLogEN.updUser)], 非法,应该为字符型(In 论文收藏(PaperCollectionLog))!(clsPaperCollectionLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.updDate) == false &&
    undefined !== pobjPaperCollectionLogEN.updDate &&
    tzDataType.isString(pobjPaperCollectionLogEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjPaperCollectionLogEN.updDate)], 非法,应该为字符型(In 论文收藏(PaperCollectionLog))!(clsPaperCollectionLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperCollectionLogEN.meno) == false &&
    undefined !== pobjPaperCollectionLogEN.meno &&
    tzDataType.isString(pobjPaperCollectionLogEN.meno) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(meno)]的值:[$(pobjPaperCollectionLogEN.meno)], 非法,应该为字符型(In 论文收藏(PaperCollectionLog))!(clsPaperCollectionLogBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjPaperCollectionLogEN.paperCollectionLogId ||
    (pobjPaperCollectionLogEN.paperCollectionLogId != null &&
      pobjPaperCollectionLogEN.paperCollectionLogId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[论文收藏Id]不能为空(In 论文收藏)!(clsPaperCollectionLogBL:CheckProperty4Update)',
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
export function PaperCollectionLog_GetJSONStrByObj(
  pobjPaperCollectionLogEN: clsPaperCollectionLogEN,
): string {
  pobjPaperCollectionLogEN.sfUpdFldSetStr = pobjPaperCollectionLogEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPaperCollectionLogEN);
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
export function PaperCollectionLog_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsPaperCollectionLogEN> {
  let arrPaperCollectionLogObjLst = new Array<clsPaperCollectionLogEN>();
  if (strJSON === '') {
    return arrPaperCollectionLogObjLst;
  }
  try {
    arrPaperCollectionLogObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPaperCollectionLogObjLst;
  }
  return arrPaperCollectionLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPaperCollectionLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PaperCollectionLog_GetObjLstByJSONObjLst(
  arrPaperCollectionLogObjLstS: Array<clsPaperCollectionLogEN>,
): Array<clsPaperCollectionLogEN> {
  const arrPaperCollectionLogObjLst = new Array<clsPaperCollectionLogEN>();
  for (const objInFor of arrPaperCollectionLogObjLstS) {
    const obj1 = PaperCollectionLog_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPaperCollectionLogObjLst.push(obj1);
  }
  return arrPaperCollectionLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PaperCollectionLog_GetObjByJSONStr(strJSON: string): clsPaperCollectionLogEN {
  let pobjPaperCollectionLogEN = new clsPaperCollectionLogEN();
  if (strJSON === '') {
    return pobjPaperCollectionLogEN;
  }
  try {
    pobjPaperCollectionLogEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPaperCollectionLogEN;
  }
  return pobjPaperCollectionLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PaperCollectionLog_GetCombineCondition(
  objPaperCollectionLogCond: clsPaperCollectionLogEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperCollectionLogCond.dicFldComparisonOp,
      clsPaperCollectionLogEN.con_PaperCollectionLogId,
    ) == true
  ) {
    const strComparisonOpPaperCollectionLogId: string =
      objPaperCollectionLogCond.dicFldComparisonOp[
        clsPaperCollectionLogEN.con_PaperCollectionLogId
      ];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperCollectionLogEN.con_PaperCollectionLogId,
      objPaperCollectionLogCond.paperCollectionLogId,
      strComparisonOpPaperCollectionLogId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperCollectionLogCond.dicFldComparisonOp,
      clsPaperCollectionLogEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objPaperCollectionLogCond.dicFldComparisonOp[clsPaperCollectionLogEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperCollectionLogEN.con_PaperId,
      objPaperCollectionLogCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperCollectionLogCond.dicFldComparisonOp,
      clsPaperCollectionLogEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objPaperCollectionLogCond.dicFldComparisonOp[clsPaperCollectionLogEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperCollectionLogEN.con_UpdUser,
      objPaperCollectionLogCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperCollectionLogCond.dicFldComparisonOp,
      clsPaperCollectionLogEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPaperCollectionLogCond.dicFldComparisonOp[clsPaperCollectionLogEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperCollectionLogEN.con_UpdDate,
      objPaperCollectionLogCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperCollectionLogCond.dicFldComparisonOp,
      clsPaperCollectionLogEN.con_Meno,
    ) == true
  ) {
    const strComparisonOpMeno: string =
      objPaperCollectionLogCond.dicFldComparisonOp[clsPaperCollectionLogEN.con_Meno];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperCollectionLogEN.con_Meno,
      objPaperCollectionLogCond.meno,
      strComparisonOpMeno,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PaperCollectionLog(论文收藏),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngPaperCollectionLogId: 论文收藏Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PaperCollectionLog_GetUniCondStr(
  objPaperCollectionLogEN: clsPaperCollectionLogEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and PaperCollectionLogId = '{0}'",
    objPaperCollectionLogEN.paperCollectionLogId,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PaperCollectionLog(论文收藏),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngPaperCollectionLogId: 论文收藏Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PaperCollectionLog_GetUniCondStr4Update(
  objPaperCollectionLogEN: clsPaperCollectionLogEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and PaperCollectionLogId <> '{0}'",
    objPaperCollectionLogEN.paperCollectionLogId,
  );
  strWhereCond += Format(
    " and PaperCollectionLogId = '{0}'",
    objPaperCollectionLogEN.paperCollectionLogId,
  );
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objPaperCollectionLogENS:源对象
 * @param objPaperCollectionLogENT:目标对象
 */
export function PaperCollectionLog_CopyObjTo(
  objPaperCollectionLogENS: clsPaperCollectionLogEN,
  objPaperCollectionLogENT: clsPaperCollectionLogEN,
): void {
  objPaperCollectionLogENT.paperCollectionLogId = objPaperCollectionLogENS.paperCollectionLogId; //论文收藏Id
  objPaperCollectionLogENT.paperId = objPaperCollectionLogENS.paperId; //论文Id
  objPaperCollectionLogENT.updUser = objPaperCollectionLogENS.updUser; //修改人
  objPaperCollectionLogENT.updDate = objPaperCollectionLogENS.updDate; //修改日期
  objPaperCollectionLogENT.meno = objPaperCollectionLogENS.meno; //备注
  objPaperCollectionLogENT.sfUpdFldSetStr = objPaperCollectionLogENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPaperCollectionLogENS:源对象
 * @param objPaperCollectionLogENT:目标对象
 */
export function PaperCollectionLog_GetObjFromJsonObj(
  objPaperCollectionLogENS: clsPaperCollectionLogEN,
): clsPaperCollectionLogEN {
  const objPaperCollectionLogENT: clsPaperCollectionLogEN = new clsPaperCollectionLogEN();
  ObjectAssign(objPaperCollectionLogENT, objPaperCollectionLogENS);
  return objPaperCollectionLogENT;
}
