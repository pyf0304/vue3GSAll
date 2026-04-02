/**
 * 类名:clsRTResearchResultWApi
 * 表名:RTResearchResult(01120620)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:15
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 研究结果(RTResearchResult)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月08日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsRTResearchResultEN } from '@/ts/L0Entity/GradEduTopic/clsRTResearchResultEN';
import { vRTResearchResult_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduTopic/clsvRTResearchResultWApi';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const rTResearchResult_Controller = 'RTResearchResultApi';
export const rTResearchResult_ConstructorName = 'rTResearchResult';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function RTResearchResult_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsRTResearchResultEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsRTResearchResultWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
      const objRTResearchResult = RTResearchResult_GetObjFromJsonObj(returnObj);
      return objRTResearchResult;
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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsRTResearchResultWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrRTResearchResultObjLstCache = await RTResearchResult_GetObjLstCache();
  try {
    const arrRTResearchResultSel = arrRTResearchResultObjLstCache.filter((x) => x.mId == lngmId);
    let objRTResearchResult: clsRTResearchResultEN;
    if (arrRTResearchResultSel.length > 0) {
      objRTResearchResult = arrRTResearchResultSel[0];
      return objRTResearchResult;
    } else {
      if (bolTryAsyncOnce == true) {
        const objRTResearchResultConst = await RTResearchResult_GetObjBymIdAsync(lngmId);
        if (objRTResearchResultConst != null) {
          RTResearchResult_ReFreshThisCache();
          return objRTResearchResultConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsRTResearchResultWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsRTResearchResultEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objRTResearchResultCache: clsRTResearchResultEN = JSON.parse(strTempObj);
    return objRTResearchResultCache;
  }
  try {
    const objRTResearchResult = await RTResearchResult_GetObjBymIdAsync(lngmId);
    if (objRTResearchResult != null) {
      localStorage.setItem(strKey, JSON.stringify(objRTResearchResult));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objRTResearchResult;
    }
    return objRTResearchResult;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      rTResearchResult_ConstructorName,
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
 * @param objRTResearchResult:所给的对象
 * @returns 对象
 */
export async function RTResearchResult_UpdateObjInLstCache(
  objRTResearchResult: clsRTResearchResultEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrRTResearchResultObjLstCache = await RTResearchResult_GetObjLstCache();
    const obj = arrRTResearchResultObjLstCache.find(
      (x) =>
        x.mId == objRTResearchResult.mId &&
        x.topicId == objRTResearchResult.topicId &&
        x.paperId == objRTResearchResult.paperId,
    );
    if (obj != null) {
      objRTResearchResult.mId = obj.mId;
      ObjectAssign(obj, objRTResearchResult);
    } else {
      arrRTResearchResultObjLstCache.push(objRTResearchResult);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      rTResearchResult_ConstructorName,
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
 * @returns 返回一个输出字段值
 */
export async function RTResearchResult_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsRTResearchResultEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsRTResearchResultEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsRTResearchResultEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objRTResearchResult = await RTResearchResult_GetObjBymIdCache(lngmId);
  if (objRTResearchResult == null) return '';
  if (objRTResearchResult.GetFldValue(strOutFldName) == null) return '';
  return objRTResearchResult.GetFldValue(strOutFldName).toString();
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
export function RTResearchResult_SortFunDefa(
  a: clsRTResearchResultEN,
  b: clsRTResearchResultEN,
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
export function RTResearchResult_SortFunDefa2Fld(
  a: clsRTResearchResultEN,
  b: clsRTResearchResultEN,
): number {
  if (a.topicId == b.topicId) return a.paperId.localeCompare(b.paperId);
  else return a.topicId.localeCompare(b.topicId);
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
export function RTResearchResult_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsRTResearchResultEN.con_mId:
        return (a: clsRTResearchResultEN, b: clsRTResearchResultEN) => {
          return a.mId - b.mId;
        };
      case clsRTResearchResultEN.con_TopicId:
        return (a: clsRTResearchResultEN, b: clsRTResearchResultEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsRTResearchResultEN.con_PaperId:
        return (a: clsRTResearchResultEN, b: clsRTResearchResultEN) => {
          if (a.paperId == null) return -1;
          if (b.paperId == null) return 1;
          return a.paperId.localeCompare(b.paperId);
        };
      case clsRTResearchResultEN.con_UpdDate:
        return (a: clsRTResearchResultEN, b: clsRTResearchResultEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsRTResearchResultEN.con_UpdUser:
        return (a: clsRTResearchResultEN, b: clsRTResearchResultEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsRTResearchResultEN.con_Memo:
        return (a: clsRTResearchResultEN, b: clsRTResearchResultEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsRTResearchResultEN.con_IdCurrEduCls:
        return (a: clsRTResearchResultEN, b: clsRTResearchResultEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[RTResearchResult]中不存在!(in ${rTResearchResult_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsRTResearchResultEN.con_mId:
        return (a: clsRTResearchResultEN, b: clsRTResearchResultEN) => {
          return b.mId - a.mId;
        };
      case clsRTResearchResultEN.con_TopicId:
        return (a: clsRTResearchResultEN, b: clsRTResearchResultEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsRTResearchResultEN.con_PaperId:
        return (a: clsRTResearchResultEN, b: clsRTResearchResultEN) => {
          if (b.paperId == null) return -1;
          if (a.paperId == null) return 1;
          return b.paperId.localeCompare(a.paperId);
        };
      case clsRTResearchResultEN.con_UpdDate:
        return (a: clsRTResearchResultEN, b: clsRTResearchResultEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsRTResearchResultEN.con_UpdUser:
        return (a: clsRTResearchResultEN, b: clsRTResearchResultEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsRTResearchResultEN.con_Memo:
        return (a: clsRTResearchResultEN, b: clsRTResearchResultEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsRTResearchResultEN.con_IdCurrEduCls:
        return (a: clsRTResearchResultEN, b: clsRTResearchResultEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[RTResearchResult]中不存在!(in ${rTResearchResult_ConstructorName}.${strThisFuncName})`;
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
export async function RTResearchResult_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsRTResearchResultEN.con_mId:
      return (obj: clsRTResearchResultEN) => {
        return obj.mId === value;
      };
    case clsRTResearchResultEN.con_TopicId:
      return (obj: clsRTResearchResultEN) => {
        return obj.topicId === value;
      };
    case clsRTResearchResultEN.con_PaperId:
      return (obj: clsRTResearchResultEN) => {
        return obj.paperId === value;
      };
    case clsRTResearchResultEN.con_UpdDate:
      return (obj: clsRTResearchResultEN) => {
        return obj.updDate === value;
      };
    case clsRTResearchResultEN.con_UpdUser:
      return (obj: clsRTResearchResultEN) => {
        return obj.updUser === value;
      };
    case clsRTResearchResultEN.con_Memo:
      return (obj: clsRTResearchResultEN) => {
        return obj.memo === value;
      };
    case clsRTResearchResultEN.con_IdCurrEduCls:
      return (obj: clsRTResearchResultEN) => {
        return obj.idCurrEduCls === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[RTResearchResult]中不存在!(in ${rTResearchResult_ConstructorName}.${strThisFuncName})`;
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
export async function RTResearchResult_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsRTResearchResultEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrRTResearchResult = await RTResearchResult_GetObjLstCache();
  if (arrRTResearchResult == null) return [];
  let arrRTResearchResultSel = arrRTResearchResult;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrRTResearchResultSel = arrRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrRTResearchResultSel = arrRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrRTResearchResultSel = arrRTResearchResultSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrRTResearchResultSel = arrRTResearchResultSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrRTResearchResultSel = arrRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrRTResearchResultSel = arrRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrRTResearchResultSel = arrRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrRTResearchResultSel = arrRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrRTResearchResultSel = arrRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrRTResearchResultSel = arrRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrRTResearchResultSel.length == 0) return [];
  return arrRTResearchResultSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function RTResearchResult_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsRTResearchResultEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
      const objRTResearchResult = RTResearchResult_GetObjFromJsonObj(returnObj);
      return objRTResearchResult;
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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRTResearchResultEN._CurrTabName;
  if (IsNullOrEmpty(clsRTResearchResultEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRTResearchResultEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrRTResearchResultExObjLstCache: Array<clsRTResearchResultEN> = CacheHelper.Get(strKey);
    const arrRTResearchResultObjLstT = RTResearchResult_GetObjLstByJSONObjLst(
      arrRTResearchResultExObjLstCache,
    );
    return arrRTResearchResultObjLstT;
  }
  try {
    const arrRTResearchResultExObjLst = await RTResearchResult_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrRTResearchResultExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRTResearchResultExObjLst.length,
    );
    console.log(strInfo);
    return arrRTResearchResultExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRTResearchResultEN._CurrTabName;
  if (IsNullOrEmpty(clsRTResearchResultEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRTResearchResultEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrRTResearchResultExObjLstCache: Array<clsRTResearchResultEN> =
      JSON.parse(strTempObjLst);
    const arrRTResearchResultObjLstT = RTResearchResult_GetObjLstByJSONObjLst(
      arrRTResearchResultExObjLstCache,
    );
    return arrRTResearchResultObjLstT;
  }
  try {
    const arrRTResearchResultExObjLst = await RTResearchResult_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrRTResearchResultExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRTResearchResultExObjLst.length,
    );
    console.log(strInfo);
    return arrRTResearchResultExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsRTResearchResultEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrRTResearchResultObjLstCache: Array<clsRTResearchResultEN> = JSON.parse(strTempObjLst);
    return arrRTResearchResultObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function RTResearchResult_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsRTResearchResultEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
          rTResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRTResearchResultEN._CurrTabName;
  if (IsNullOrEmpty(clsRTResearchResultEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRTResearchResultEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrRTResearchResultExObjLstCache: Array<clsRTResearchResultEN> =
      JSON.parse(strTempObjLst);
    const arrRTResearchResultObjLstT = RTResearchResult_GetObjLstByJSONObjLst(
      arrRTResearchResultExObjLstCache,
    );
    return arrRTResearchResultObjLstT;
  }
  try {
    const arrRTResearchResultExObjLst = await RTResearchResult_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrRTResearchResultExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRTResearchResultExObjLst.length,
    );
    console.log(strInfo);
    return arrRTResearchResultExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsRTResearchResultEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrRTResearchResultObjLstCache: Array<clsRTResearchResultEN> = JSON.parse(strTempObjLst);
    return arrRTResearchResultObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function RTResearchResult_GetObjLstCache(): Promise<Array<clsRTResearchResultEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrRTResearchResultObjLstCache;
  switch (clsRTResearchResultEN.CacheModeId) {
    case '04': //sessionStorage
      arrRTResearchResultObjLstCache = await RTResearchResult_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrRTResearchResultObjLstCache = await RTResearchResult_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrRTResearchResultObjLstCache = await RTResearchResult_GetObjLstClientCache();
      break;
    default:
      arrRTResearchResultObjLstCache = await RTResearchResult_GetObjLstClientCache();
      break;
  }
  return arrRTResearchResultObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function RTResearchResult_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrRTResearchResultObjLstCache;
  switch (clsRTResearchResultEN.CacheModeId) {
    case '04': //sessionStorage
      arrRTResearchResultObjLstCache = await RTResearchResult_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrRTResearchResultObjLstCache = await RTResearchResult_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrRTResearchResultObjLstCache = null;
      break;
    default:
      arrRTResearchResultObjLstCache = null;
      break;
  }
  return arrRTResearchResultObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function RTResearchResult_GetSubObjLstCache(
  objRTResearchResultCond: clsRTResearchResultEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrRTResearchResultObjLstCache = await RTResearchResult_GetObjLstCache();
  let arrRTResearchResultSel = arrRTResearchResultObjLstCache;
  if (
    objRTResearchResultCond.sfFldComparisonOp == null ||
    objRTResearchResultCond.sfFldComparisonOp == ''
  )
    return arrRTResearchResultSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRTResearchResultCond.sfFldComparisonOp,
  );
  //console.log("clsRTResearchResultWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRTResearchResultCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRTResearchResultSel = arrRTResearchResultSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRTResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrRTResearchResultSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objRTResearchResultCond),
      rTResearchResult_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRTResearchResultEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function RTResearchResult_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsRTResearchResultEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
          rTResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrRTResearchResultObjLstCache = await RTResearchResult_GetObjLstCache();
    const arrRTResearchResultSel = arrRTResearchResultObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrRTResearchResultSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsRTResearchResultEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
          rTResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsRTResearchResultEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
          rTResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsRTResearchResultEN>();
  const arrRTResearchResultObjLstCache = await RTResearchResult_GetObjLstCache();
  if (arrRTResearchResultObjLstCache.length == 0) return arrRTResearchResultObjLstCache;
  let arrRTResearchResultSel = arrRTResearchResultObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objRTResearchResultCond = new clsRTResearchResultEN();
  ObjectAssign(objRTResearchResultCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsRTResearchResultWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRTResearchResultSel = arrRTResearchResultSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRTResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrRTResearchResultSel.length == 0) return arrRTResearchResultSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrRTResearchResultSel = arrRTResearchResultSel.sort(
        RTResearchResult_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrRTResearchResultSel = arrRTResearchResultSel.sort(objPagerPara.sortFun);
    }
    arrRTResearchResultSel = arrRTResearchResultSel.slice(intStart, intEnd);
    return arrRTResearchResultSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      rTResearchResult_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRTResearchResultEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function RTResearchResult_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsRTResearchResultEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsRTResearchResultEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
          rTResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export async function RTResearchResult_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);
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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export async function RTResearchResult_DelRTResearchResultsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelRTResearchResultsAsync';
  const strAction = 'DelRTResearchResults';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export async function RTResearchResult_DelRTResearchResultsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelRTResearchResultsByCondAsync';
  const strAction = 'DelRTResearchResultsByCond';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
 * @param objRTResearchResultEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RTResearchResult_AddNewRecordAsync(
  objRTResearchResultEN: clsRTResearchResultEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objRTResearchResultEN);
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRTResearchResultEN, config);
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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
 * @param objRTResearchResultEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function RTResearchResult_AddNewRecordWithReturnKeyAsync(
  objRTResearchResultEN: clsRTResearchResultEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRTResearchResultEN, config);
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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
 * @param objRTResearchResultEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function RTResearchResult_UpdateRecordAsync(
  objRTResearchResultEN: clsRTResearchResultEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objRTResearchResultEN.sfUpdFldSetStr === undefined ||
    objRTResearchResultEN.sfUpdFldSetStr === null ||
    objRTResearchResultEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objRTResearchResultEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRTResearchResultEN, config);
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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
 * @param objRTResearchResultEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function RTResearchResult_UpdateWithConditionAsync(
  objRTResearchResultEN: clsRTResearchResultEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objRTResearchResultEN.sfUpdFldSetStr === undefined ||
    objRTResearchResultEN.sfUpdFldSetStr === null ||
    objRTResearchResultEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objRTResearchResultEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);
  objRTResearchResultEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRTResearchResultEN, config);
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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export async function RTResearchResult_IsExistRecordCache(
  objRTResearchResultCond: clsRTResearchResultEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrRTResearchResultObjLstCache = await RTResearchResult_GetObjLstCache();
  if (arrRTResearchResultObjLstCache == null) return false;
  let arrRTResearchResultSel = arrRTResearchResultObjLstCache;
  if (
    objRTResearchResultCond.sfFldComparisonOp == null ||
    objRTResearchResultCond.sfFldComparisonOp == ''
  )
    return arrRTResearchResultSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRTResearchResultCond.sfFldComparisonOp,
  );
  //console.log("clsRTResearchResultWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRTResearchResultCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRTResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrRTResearchResultSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objRTResearchResultCond),
      rTResearchResult_ConstructorName,
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
export async function RTResearchResult_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export async function RTResearchResult_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrRTResearchResultObjLstCache = await RTResearchResult_GetObjLstCache();
  if (arrRTResearchResultObjLstCache == null) return false;
  try {
    const arrRTResearchResultSel = arrRTResearchResultObjLstCache.filter((x) => x.mId == lngmId);
    if (arrRTResearchResultSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      rTResearchResult_ConstructorName,
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
export async function RTResearchResult_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
 * @param objRTResearchResultCond:条件对象
 * @returns 对象列表记录数
 */
export async function RTResearchResult_GetRecCountByCondCache(
  objRTResearchResultCond: clsRTResearchResultEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrRTResearchResultObjLstCache = await RTResearchResult_GetObjLstCache();
  if (arrRTResearchResultObjLstCache == null) return 0;
  let arrRTResearchResultSel = arrRTResearchResultObjLstCache;
  if (
    objRTResearchResultCond.sfFldComparisonOp == null ||
    objRTResearchResultCond.sfFldComparisonOp == ''
  )
    return arrRTResearchResultSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRTResearchResultCond.sfFldComparisonOp,
  );
  //console.log("clsRTResearchResultWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRTResearchResultCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRTResearchResultSel = arrRTResearchResultSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRTResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrRTResearchResultSel = arrRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrRTResearchResultSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objRTResearchResultCond),
      rTResearchResult_ConstructorName,
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
export async function RTResearchResult_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(rTResearchResult_Controller, strAction);

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
        rTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTResearchResult_ConstructorName,
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
export function RTResearchResult_GetWebApiUrl(strController: string, strAction: string): string {
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
export function RTResearchResult_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsRTResearchResultEN._CurrTabName;
  switch (clsRTResearchResultEN.CacheModeId) {
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
  vRTResearchResult_ReFreshThisCache();
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function RTResearchResult_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsRTResearchResultEN._CurrTabName;
    switch (clsRTResearchResultEN.CacheModeId) {
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
export function RTResearchResult_CheckPropertyNew(pobjRTResearchResultEN: clsRTResearchResultEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjRTResearchResultEN.updUser) === true) {
    throw new Error(
      '(errid:Watl000411)字段[修改人]不能为空(In 研究结果)!(clsRTResearchResultBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.topicId) == false &&
    GetStrLen(pobjRTResearchResultEN.topicId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 研究结果(RTResearchResult))!值:$(pobjRTResearchResultEN.topicId)(clsRTResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.paperId) == false &&
    GetStrLen(pobjRTResearchResultEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 研究结果(RTResearchResult))!值:$(pobjRTResearchResultEN.paperId)(clsRTResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.updDate) == false &&
    GetStrLen(pobjRTResearchResultEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 研究结果(RTResearchResult))!值:$(pobjRTResearchResultEN.updDate)(clsRTResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.updUser) == false &&
    GetStrLen(pobjRTResearchResultEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 研究结果(RTResearchResult))!值:$(pobjRTResearchResultEN.updUser)(clsRTResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.memo) == false &&
    GetStrLen(pobjRTResearchResultEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 研究结果(RTResearchResult))!值:$(pobjRTResearchResultEN.memo)(clsRTResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.idCurrEduCls) == false &&
    GetStrLen(pobjRTResearchResultEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 研究结果(RTResearchResult))!值:$(pobjRTResearchResultEN.idCurrEduCls)(clsRTResearchResultBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjRTResearchResultEN.mId &&
    undefined !== pobjRTResearchResultEN.mId &&
    tzDataType.isNumber(pobjRTResearchResultEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjRTResearchResultEN.mId)], 非法,应该为数值型(In 研究结果(RTResearchResult))!(clsRTResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.topicId) == false &&
    undefined !== pobjRTResearchResultEN.topicId &&
    tzDataType.isString(pobjRTResearchResultEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题Id(topicId)]的值:[$(pobjRTResearchResultEN.topicId)], 非法,应该为字符型(In 研究结果(RTResearchResult))!(clsRTResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.paperId) == false &&
    undefined !== pobjRTResearchResultEN.paperId &&
    tzDataType.isString(pobjRTResearchResultEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjRTResearchResultEN.paperId)], 非法,应该为字符型(In 研究结果(RTResearchResult))!(clsRTResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.updDate) == false &&
    undefined !== pobjRTResearchResultEN.updDate &&
    tzDataType.isString(pobjRTResearchResultEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjRTResearchResultEN.updDate)], 非法,应该为字符型(In 研究结果(RTResearchResult))!(clsRTResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.updUser) == false &&
    undefined !== pobjRTResearchResultEN.updUser &&
    tzDataType.isString(pobjRTResearchResultEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjRTResearchResultEN.updUser)], 非法,应该为字符型(In 研究结果(RTResearchResult))!(clsRTResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.memo) == false &&
    undefined !== pobjRTResearchResultEN.memo &&
    tzDataType.isString(pobjRTResearchResultEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjRTResearchResultEN.memo)], 非法,应该为字符型(In 研究结果(RTResearchResult))!(clsRTResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.idCurrEduCls) == false &&
    undefined !== pobjRTResearchResultEN.idCurrEduCls &&
    tzDataType.isString(pobjRTResearchResultEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjRTResearchResultEN.idCurrEduCls)], 非法,应该为字符型(In 研究结果(RTResearchResult))!(clsRTResearchResultBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function RTResearchResult_CheckProperty4Update(
  pobjRTResearchResultEN: clsRTResearchResultEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.topicId) == false &&
    GetStrLen(pobjRTResearchResultEN.topicId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 研究结果(RTResearchResult))!值:$(pobjRTResearchResultEN.topicId)(clsRTResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.paperId) == false &&
    GetStrLen(pobjRTResearchResultEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 研究结果(RTResearchResult))!值:$(pobjRTResearchResultEN.paperId)(clsRTResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.updDate) == false &&
    GetStrLen(pobjRTResearchResultEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 研究结果(RTResearchResult))!值:$(pobjRTResearchResultEN.updDate)(clsRTResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.updUser) == false &&
    GetStrLen(pobjRTResearchResultEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 研究结果(RTResearchResult))!值:$(pobjRTResearchResultEN.updUser)(clsRTResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.memo) == false &&
    GetStrLen(pobjRTResearchResultEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 研究结果(RTResearchResult))!值:$(pobjRTResearchResultEN.memo)(clsRTResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.idCurrEduCls) == false &&
    GetStrLen(pobjRTResearchResultEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 研究结果(RTResearchResult))!值:$(pobjRTResearchResultEN.idCurrEduCls)(clsRTResearchResultBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjRTResearchResultEN.mId &&
    undefined !== pobjRTResearchResultEN.mId &&
    tzDataType.isNumber(pobjRTResearchResultEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjRTResearchResultEN.mId)], 非法,应该为数值型(In 研究结果(RTResearchResult))!(clsRTResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.topicId) == false &&
    undefined !== pobjRTResearchResultEN.topicId &&
    tzDataType.isString(pobjRTResearchResultEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题Id(topicId)]的值:[$(pobjRTResearchResultEN.topicId)], 非法,应该为字符型(In 研究结果(RTResearchResult))!(clsRTResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.paperId) == false &&
    undefined !== pobjRTResearchResultEN.paperId &&
    tzDataType.isString(pobjRTResearchResultEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjRTResearchResultEN.paperId)], 非法,应该为字符型(In 研究结果(RTResearchResult))!(clsRTResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.updDate) == false &&
    undefined !== pobjRTResearchResultEN.updDate &&
    tzDataType.isString(pobjRTResearchResultEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjRTResearchResultEN.updDate)], 非法,应该为字符型(In 研究结果(RTResearchResult))!(clsRTResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.updUser) == false &&
    undefined !== pobjRTResearchResultEN.updUser &&
    tzDataType.isString(pobjRTResearchResultEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjRTResearchResultEN.updUser)], 非法,应该为字符型(In 研究结果(RTResearchResult))!(clsRTResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.memo) == false &&
    undefined !== pobjRTResearchResultEN.memo &&
    tzDataType.isString(pobjRTResearchResultEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjRTResearchResultEN.memo)], 非法,应该为字符型(In 研究结果(RTResearchResult))!(clsRTResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTResearchResultEN.idCurrEduCls) == false &&
    undefined !== pobjRTResearchResultEN.idCurrEduCls &&
    tzDataType.isString(pobjRTResearchResultEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjRTResearchResultEN.idCurrEduCls)], 非法,应该为字符型(In 研究结果(RTResearchResult))!(clsRTResearchResultBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjRTResearchResultEN.mId ||
    (pobjRTResearchResultEN.mId != null && pobjRTResearchResultEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 研究结果)!(clsRTResearchResultBL:CheckProperty4Update)',
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
export function RTResearchResult_GetJSONStrByObj(
  pobjRTResearchResultEN: clsRTResearchResultEN,
): string {
  pobjRTResearchResultEN.sfUpdFldSetStr = pobjRTResearchResultEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjRTResearchResultEN);
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
export function RTResearchResult_GetObjLstByJSONStr(strJSON: string): Array<clsRTResearchResultEN> {
  let arrRTResearchResultObjLst = new Array<clsRTResearchResultEN>();
  if (strJSON === '') {
    return arrRTResearchResultObjLst;
  }
  try {
    arrRTResearchResultObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrRTResearchResultObjLst;
  }
  return arrRTResearchResultObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRTResearchResultObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function RTResearchResult_GetObjLstByJSONObjLst(
  arrRTResearchResultObjLstS: Array<clsRTResearchResultEN>,
): Array<clsRTResearchResultEN> {
  const arrRTResearchResultObjLst = new Array<clsRTResearchResultEN>();
  for (const objInFor of arrRTResearchResultObjLstS) {
    const obj1 = RTResearchResult_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrRTResearchResultObjLst.push(obj1);
  }
  return arrRTResearchResultObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function RTResearchResult_GetObjByJSONStr(strJSON: string): clsRTResearchResultEN {
  let pobjRTResearchResultEN = new clsRTResearchResultEN();
  if (strJSON === '') {
    return pobjRTResearchResultEN;
  }
  try {
    pobjRTResearchResultEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjRTResearchResultEN;
  }
  return pobjRTResearchResultEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function RTResearchResult_GetCombineCondition(
  objRTResearchResultCond: clsRTResearchResultEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objRTResearchResultCond.dicFldComparisonOp,
      clsRTResearchResultEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objRTResearchResultCond.dicFldComparisonOp[clsRTResearchResultEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsRTResearchResultEN.con_mId,
      objRTResearchResultCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTResearchResultCond.dicFldComparisonOp,
      clsRTResearchResultEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objRTResearchResultCond.dicFldComparisonOp[clsRTResearchResultEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTResearchResultEN.con_TopicId,
      objRTResearchResultCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTResearchResultCond.dicFldComparisonOp,
      clsRTResearchResultEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objRTResearchResultCond.dicFldComparisonOp[clsRTResearchResultEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTResearchResultEN.con_PaperId,
      objRTResearchResultCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTResearchResultCond.dicFldComparisonOp,
      clsRTResearchResultEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objRTResearchResultCond.dicFldComparisonOp[clsRTResearchResultEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTResearchResultEN.con_UpdDate,
      objRTResearchResultCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTResearchResultCond.dicFldComparisonOp,
      clsRTResearchResultEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objRTResearchResultCond.dicFldComparisonOp[clsRTResearchResultEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTResearchResultEN.con_UpdUser,
      objRTResearchResultCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTResearchResultCond.dicFldComparisonOp,
      clsRTResearchResultEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objRTResearchResultCond.dicFldComparisonOp[clsRTResearchResultEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTResearchResultEN.con_Memo,
      objRTResearchResultCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTResearchResultCond.dicFldComparisonOp,
      clsRTResearchResultEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objRTResearchResultCond.dicFldComparisonOp[clsRTResearchResultEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTResearchResultEN.con_IdCurrEduCls,
      objRTResearchResultCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--RTResearchResult(研究结果),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function RTResearchResult_GetUniCondStr(
  objRTResearchResultEN: clsRTResearchResultEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId = '{0}'", objRTResearchResultEN.mId);
  strWhereCond += Format(" and TopicId = '{0}'", objRTResearchResultEN.topicId);
  strWhereCond += Format(" and PaperId = '{0}'", objRTResearchResultEN.paperId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--RTResearchResult(研究结果),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function RTResearchResult_GetUniCondStr4Update(
  objRTResearchResultEN: clsRTResearchResultEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objRTResearchResultEN.mId);
  strWhereCond += Format(" and mId = '{0}'", objRTResearchResultEN.mId);
  strWhereCond += Format(" and TopicId = '{0}'", objRTResearchResultEN.topicId);
  strWhereCond += Format(" and PaperId = '{0}'", objRTResearchResultEN.paperId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRTResearchResultENS:源对象
 * @param objRTResearchResultENT:目标对象
 */
export function RTResearchResult_CopyObjTo(
  objRTResearchResultENS: clsRTResearchResultEN,
  objRTResearchResultENT: clsRTResearchResultEN,
): void {
  objRTResearchResultENT.mId = objRTResearchResultENS.mId; //mId
  objRTResearchResultENT.topicId = objRTResearchResultENS.topicId; //主题Id
  objRTResearchResultENT.paperId = objRTResearchResultENS.paperId; //论文Id
  objRTResearchResultENT.updDate = objRTResearchResultENS.updDate; //修改日期
  objRTResearchResultENT.updUser = objRTResearchResultENS.updUser; //修改人
  objRTResearchResultENT.memo = objRTResearchResultENS.memo; //备注
  objRTResearchResultENT.idCurrEduCls = objRTResearchResultENS.idCurrEduCls; //教学班流水号
  objRTResearchResultENT.sfUpdFldSetStr = objRTResearchResultENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRTResearchResultENS:源对象
 * @param objRTResearchResultENT:目标对象
 */
export function RTResearchResult_GetObjFromJsonObj(
  objRTResearchResultENS: clsRTResearchResultEN,
): clsRTResearchResultEN {
  const objRTResearchResultENT: clsRTResearchResultEN = new clsRTResearchResultEN();
  ObjectAssign(objRTResearchResultENT, objRTResearchResultENS);
  return objRTResearchResultENT;
}
