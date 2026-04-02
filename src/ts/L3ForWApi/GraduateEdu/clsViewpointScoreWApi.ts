/**
 * 类名:clsViewpointScoreWApi
 * 表名:ViewpointScore(01120600)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:55
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研究生培养(GraduateEdu)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 观点评分表(ViewpointScore)
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
import { clsViewpointScoreEN } from '@/ts/L0Entity/GraduateEdu/clsViewpointScoreEN';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const viewpointScore_Controller = 'ViewpointScoreApi';
export const viewpointScore_ConstructorName = 'viewpointScore';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngViewpointScoreId:关键字
 * @returns 对象
 **/
export async function ViewpointScore_GetObjByViewpointScoreIdAsync(
  lngViewpointScoreId: number,
): Promise<clsViewpointScoreEN | null> {
  const strThisFuncName = 'GetObjByViewpointScoreIdAsync';

  if (lngViewpointScoreId == 0) {
    const strMsg = Format(
      '参数:[lngViewpointScoreId]不能为空!(In clsViewpointScoreWApi.GetObjByViewpointScoreIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewpointScoreId';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngViewpointScoreId,
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
      const objViewpointScore = ViewpointScore_GetObjFromJsonObj(returnObj);
      return objViewpointScore;
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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
 * @param lngViewpointScoreId:所给的关键字
 * @returns 对象
 */
export async function ViewpointScore_GetObjByViewpointScoreIdCache(
  lngViewpointScoreId: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewpointScoreIdCache';

  if (lngViewpointScoreId == 0) {
    const strMsg = Format(
      '参数:[lngViewpointScoreId]不能为空!(In clsViewpointScoreWApi.GetObjByViewpointScoreIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewpointScoreObjLstCache = await ViewpointScore_GetObjLstCache();
  try {
    const arrViewpointScoreSel = arrViewpointScoreObjLstCache.filter(
      (x) => x.viewpointScoreId == lngViewpointScoreId,
    );
    let objViewpointScore: clsViewpointScoreEN;
    if (arrViewpointScoreSel.length > 0) {
      objViewpointScore = arrViewpointScoreSel[0];
      return objViewpointScore;
    } else {
      if (bolTryAsyncOnce == true) {
        const objViewpointScoreConst = await ViewpointScore_GetObjByViewpointScoreIdAsync(
          lngViewpointScoreId,
        );
        if (objViewpointScoreConst != null) {
          ViewpointScore_ReFreshThisCache();
          return objViewpointScoreConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngViewpointScoreId,
      viewpointScore_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngViewpointScoreId:所给的关键字
 * @returns 对象
 */
export async function ViewpointScore_GetObjByViewpointScoreIdlocalStorage(
  lngViewpointScoreId: number,
) {
  const strThisFuncName = 'GetObjByViewpointScoreIdlocalStorage';

  if (lngViewpointScoreId == 0) {
    const strMsg = Format(
      '参数:[lngViewpointScoreId]不能为空!(In clsViewpointScoreWApi.GetObjByViewpointScoreIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsViewpointScoreEN._CurrTabName, lngViewpointScoreId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objViewpointScoreCache: clsViewpointScoreEN = JSON.parse(strTempObj);
    return objViewpointScoreCache;
  }
  try {
    const objViewpointScore = await ViewpointScore_GetObjByViewpointScoreIdAsync(
      lngViewpointScoreId,
    );
    if (objViewpointScore != null) {
      localStorage.setItem(strKey, JSON.stringify(objViewpointScore));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objViewpointScore;
    }
    return objViewpointScore;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngViewpointScoreId,
      viewpointScore_ConstructorName,
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
 * @param objViewpointScore:所给的对象
 * @returns 对象
 */
export async function ViewpointScore_UpdateObjInLstCache(objViewpointScore: clsViewpointScoreEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrViewpointScoreObjLstCache = await ViewpointScore_GetObjLstCache();
    const obj = arrViewpointScoreObjLstCache.find(
      (x) =>
        x.viewpointScoreId == objViewpointScore.viewpointScoreId &&
        x.viewpointId == objViewpointScore.viewpointId,
    );
    if (obj != null) {
      objViewpointScore.viewpointScoreId = obj.viewpointScoreId;
      ObjectAssign(obj, objViewpointScore);
    } else {
      arrViewpointScoreObjLstCache.push(objViewpointScore);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      viewpointScore_ConstructorName,
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
export async function ViewpointScore_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsViewpointScoreEN.con_ViewpointScoreId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsViewpointScoreEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsViewpointScoreEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngViewpointScoreId = Number(strInValue);
  if (lngViewpointScoreId == 0) {
    return '';
  }
  const objViewpointScore = await ViewpointScore_GetObjByViewpointScoreIdCache(lngViewpointScoreId);
  if (objViewpointScore == null) return '';
  if (objViewpointScore.GetFldValue(strOutFldName) == null) return '';
  return objViewpointScore.GetFldValue(strOutFldName).toString();
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
export function ViewpointScore_SortFunDefa(a: clsViewpointScoreEN, b: clsViewpointScoreEN): number {
  return a.viewpointScoreId - b.viewpointScoreId;
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
export function ViewpointScore_SortFunDefa2Fld(
  a: clsViewpointScoreEN,
  b: clsViewpointScoreEN,
): number {
  if (a.viewpointScore == b.viewpointScore) return a.viewpointId.localeCompare(b.viewpointId);
  else return a.viewpointScore - b.viewpointScore;
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
export function ViewpointScore_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewpointScoreEN.con_ViewpointScoreId:
        return (a: clsViewpointScoreEN, b: clsViewpointScoreEN) => {
          return a.viewpointScoreId - b.viewpointScoreId;
        };
      case clsViewpointScoreEN.con_ViewpointScore:
        return (a: clsViewpointScoreEN, b: clsViewpointScoreEN) => {
          return a.viewpointScore - b.viewpointScore;
        };
      case clsViewpointScoreEN.con_ViewpointId:
        return (a: clsViewpointScoreEN, b: clsViewpointScoreEN) => {
          if (a.viewpointId == null) return -1;
          if (b.viewpointId == null) return 1;
          return a.viewpointId.localeCompare(b.viewpointId);
        };
      case clsViewpointScoreEN.con_UpdDate:
        return (a: clsViewpointScoreEN, b: clsViewpointScoreEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsViewpointScoreEN.con_UpdUserId:
        return (a: clsViewpointScoreEN, b: clsViewpointScoreEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsViewpointScoreEN.con_Memo:
        return (a: clsViewpointScoreEN, b: clsViewpointScoreEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewpointScore]中不存在!(in ${viewpointScore_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewpointScoreEN.con_ViewpointScoreId:
        return (a: clsViewpointScoreEN, b: clsViewpointScoreEN) => {
          return b.viewpointScoreId - a.viewpointScoreId;
        };
      case clsViewpointScoreEN.con_ViewpointScore:
        return (a: clsViewpointScoreEN, b: clsViewpointScoreEN) => {
          return b.viewpointScore - a.viewpointScore;
        };
      case clsViewpointScoreEN.con_ViewpointId:
        return (a: clsViewpointScoreEN, b: clsViewpointScoreEN) => {
          if (b.viewpointId == null) return -1;
          if (a.viewpointId == null) return 1;
          return b.viewpointId.localeCompare(a.viewpointId);
        };
      case clsViewpointScoreEN.con_UpdDate:
        return (a: clsViewpointScoreEN, b: clsViewpointScoreEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsViewpointScoreEN.con_UpdUserId:
        return (a: clsViewpointScoreEN, b: clsViewpointScoreEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsViewpointScoreEN.con_Memo:
        return (a: clsViewpointScoreEN, b: clsViewpointScoreEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewpointScore]中不存在!(in ${viewpointScore_ConstructorName}.${strThisFuncName})`;
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
export async function ViewpointScore_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewpointScoreEN.con_ViewpointScoreId:
      return (obj: clsViewpointScoreEN) => {
        return obj.viewpointScoreId === value;
      };
    case clsViewpointScoreEN.con_ViewpointScore:
      return (obj: clsViewpointScoreEN) => {
        return obj.viewpointScore === value;
      };
    case clsViewpointScoreEN.con_ViewpointId:
      return (obj: clsViewpointScoreEN) => {
        return obj.viewpointId === value;
      };
    case clsViewpointScoreEN.con_UpdDate:
      return (obj: clsViewpointScoreEN) => {
        return obj.updDate === value;
      };
    case clsViewpointScoreEN.con_UpdUserId:
      return (obj: clsViewpointScoreEN) => {
        return obj.updUserId === value;
      };
    case clsViewpointScoreEN.con_Memo:
      return (obj: clsViewpointScoreEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewpointScore]中不存在!(in ${viewpointScore_ConstructorName}.${strThisFuncName})`;
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
export async function ViewpointScore_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsViewpointScoreEN.con_ViewpointScoreId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrViewpointScore = await ViewpointScore_GetObjLstCache();
  if (arrViewpointScore == null) return [];
  let arrViewpointScoreSel = arrViewpointScore;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrViewpointScoreSel = arrViewpointScoreSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrViewpointScoreSel = arrViewpointScoreSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrViewpointScoreSel = arrViewpointScoreSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrViewpointScoreSel = arrViewpointScoreSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrViewpointScoreSel = arrViewpointScoreSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrViewpointScoreSel = arrViewpointScoreSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrViewpointScoreSel = arrViewpointScoreSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrViewpointScoreSel = arrViewpointScoreSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrViewpointScoreSel = arrViewpointScoreSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrViewpointScoreSel = arrViewpointScoreSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrViewpointScoreSel.length == 0) return [];
  return arrViewpointScoreSel.map((x) => x.viewpointScoreId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewpointScore_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
export async function ViewpointScore_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
export async function ViewpointScore_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewpointScoreEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

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
      const objViewpointScore = ViewpointScore_GetObjFromJsonObj(returnObj);
      return objViewpointScore;
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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
export async function ViewpointScore_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewpointScoreEN._CurrTabName;
  if (IsNullOrEmpty(clsViewpointScoreEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewpointScoreEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrViewpointScoreExObjLstCache: Array<clsViewpointScoreEN> = CacheHelper.Get(strKey);
    const arrViewpointScoreObjLstT = ViewpointScore_GetObjLstByJSONObjLst(
      arrViewpointScoreExObjLstCache,
    );
    return arrViewpointScoreObjLstT;
  }
  try {
    const arrViewpointScoreExObjLst = await ViewpointScore_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrViewpointScoreExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewpointScoreExObjLst.length,
    );
    console.log(strInfo);
    return arrViewpointScoreExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewpointScore_ConstructorName,
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
export async function ViewpointScore_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewpointScoreEN._CurrTabName;
  if (IsNullOrEmpty(clsViewpointScoreEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewpointScoreEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewpointScoreExObjLstCache: Array<clsViewpointScoreEN> = JSON.parse(strTempObjLst);
    const arrViewpointScoreObjLstT = ViewpointScore_GetObjLstByJSONObjLst(
      arrViewpointScoreExObjLstCache,
    );
    return arrViewpointScoreObjLstT;
  }
  try {
    const arrViewpointScoreExObjLst = await ViewpointScore_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrViewpointScoreExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewpointScoreExObjLst.length,
    );
    console.log(strInfo);
    return arrViewpointScoreExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewpointScore_ConstructorName,
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
export async function ViewpointScore_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsViewpointScoreEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewpointScoreObjLstCache: Array<clsViewpointScoreEN> = JSON.parse(strTempObjLst);
    return arrViewpointScoreObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ViewpointScore_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewpointScoreEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

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
          viewpointScore_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewpointScore_GetObjLstByJSONObjLst(returnObjLst);
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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
export async function ViewpointScore_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewpointScoreEN._CurrTabName;
  if (IsNullOrEmpty(clsViewpointScoreEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewpointScoreEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewpointScoreExObjLstCache: Array<clsViewpointScoreEN> = JSON.parse(strTempObjLst);
    const arrViewpointScoreObjLstT = ViewpointScore_GetObjLstByJSONObjLst(
      arrViewpointScoreExObjLstCache,
    );
    return arrViewpointScoreObjLstT;
  }
  try {
    const arrViewpointScoreExObjLst = await ViewpointScore_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrViewpointScoreExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewpointScoreExObjLst.length,
    );
    console.log(strInfo);
    return arrViewpointScoreExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewpointScore_ConstructorName,
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
export async function ViewpointScore_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsViewpointScoreEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewpointScoreObjLstCache: Array<clsViewpointScoreEN> = JSON.parse(strTempObjLst);
    return arrViewpointScoreObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewpointScore_GetObjLstCache(): Promise<Array<clsViewpointScoreEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrViewpointScoreObjLstCache;
  switch (clsViewpointScoreEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewpointScoreObjLstCache = await ViewpointScore_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrViewpointScoreObjLstCache = await ViewpointScore_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrViewpointScoreObjLstCache = await ViewpointScore_GetObjLstClientCache();
      break;
    default:
      arrViewpointScoreObjLstCache = await ViewpointScore_GetObjLstClientCache();
      break;
  }
  return arrViewpointScoreObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewpointScore_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrViewpointScoreObjLstCache;
  switch (clsViewpointScoreEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewpointScoreObjLstCache = await ViewpointScore_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrViewpointScoreObjLstCache = await ViewpointScore_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrViewpointScoreObjLstCache = null;
      break;
    default:
      arrViewpointScoreObjLstCache = null;
      break;
  }
  return arrViewpointScoreObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngViewpointScoreIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewpointScore_GetSubObjLstCache(objViewpointScoreCond: clsViewpointScoreEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrViewpointScoreObjLstCache = await ViewpointScore_GetObjLstCache();
  let arrViewpointScoreSel = arrViewpointScoreObjLstCache;
  if (
    objViewpointScoreCond.sfFldComparisonOp == null ||
    objViewpointScoreCond.sfFldComparisonOp == ''
  )
    return arrViewpointScoreSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewpointScoreCond.sfFldComparisonOp,
  );
  //console.log("clsViewpointScoreWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewpointScoreCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewpointScoreSel = arrViewpointScoreSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewpointScoreCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrViewpointScoreSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewpointScoreCond),
      viewpointScore_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewpointScoreEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewpointScoreId:关键字列表
 * @returns 对象列表
 **/
export async function ViewpointScore_GetObjLstByViewpointScoreIdLstAsync(
  arrViewpointScoreId: Array<string>,
): Promise<Array<clsViewpointScoreEN>> {
  const strThisFuncName = 'GetObjLstByViewpointScoreIdLstAsync';
  const strAction = 'GetObjLstByViewpointScoreIdLst';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewpointScoreId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          viewpointScore_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewpointScore_GetObjLstByJSONObjLst(returnObjLst);
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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
 * @param arrlngViewpointScoreIdLst:关键字列表
 * @returns 对象列表
 */
export async function ViewpointScore_GetObjLstByViewpointScoreIdLstCache(
  arrViewpointScoreIdLst: Array<number>,
) {
  const strThisFuncName = 'GetObjLstByViewpointScoreIdLstCache';
  try {
    const arrViewpointScoreObjLstCache = await ViewpointScore_GetObjLstCache();
    const arrViewpointScoreSel = arrViewpointScoreObjLstCache.filter(
      (x) => arrViewpointScoreIdLst.indexOf(x.viewpointScoreId) > -1,
    );
    return arrViewpointScoreSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewpointScoreIdLst.join(','),
      viewpointScore_ConstructorName,
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
export async function ViewpointScore_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewpointScoreEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

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
          viewpointScore_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewpointScore_GetObjLstByJSONObjLst(returnObjLst);
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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
export async function ViewpointScore_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewpointScoreEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

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
          viewpointScore_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewpointScore_GetObjLstByJSONObjLst(returnObjLst);
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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
export async function ViewpointScore_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewpointScoreEN>();
  const arrViewpointScoreObjLstCache = await ViewpointScore_GetObjLstCache();
  if (arrViewpointScoreObjLstCache.length == 0) return arrViewpointScoreObjLstCache;
  let arrViewpointScoreSel = arrViewpointScoreObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objViewpointScoreCond = new clsViewpointScoreEN();
  ObjectAssign(objViewpointScoreCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsViewpointScoreWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewpointScoreSel = arrViewpointScoreSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewpointScoreCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewpointScoreSel.length == 0) return arrViewpointScoreSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewpointScoreSel = arrViewpointScoreSel.sort(
        ViewpointScore_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewpointScoreSel = arrViewpointScoreSel.sort(objPagerPara.sortFun);
    }
    arrViewpointScoreSel = arrViewpointScoreSel.slice(intStart, intEnd);
    return arrViewpointScoreSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewpointScore_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewpointScoreEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ViewpointScore_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewpointScoreEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewpointScoreEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

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
          viewpointScore_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewpointScore_GetObjLstByJSONObjLst(returnObjLst);
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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
 * @param lngViewpointScoreId:关键字
 * @returns 获取删除的结果
 **/
export async function ViewpointScore_DelRecordAsync(lngViewpointScoreId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngViewpointScoreId);

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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
 * @param arrViewpointScoreId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ViewpointScore_DelViewpointScoresAsync(
  arrViewpointScoreId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelViewpointScoresAsync';
  const strAction = 'DelViewpointScores';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewpointScoreId, config);
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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
export async function ViewpointScore_DelViewpointScoresByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelViewpointScoresByCondAsync';
  const strAction = 'DelViewpointScoresByCond';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
 * @param objViewpointScoreEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewpointScore_AddNewRecordAsync(
  objViewpointScoreEN: clsViewpointScoreEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objViewpointScoreEN);
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewpointScoreEN, config);
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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
 * @param objViewpointScoreEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewpointScore_AddNewRecordWithReturnKeyAsync(
  objViewpointScoreEN: clsViewpointScoreEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewpointScoreEN, config);
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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
 * @param objViewpointScoreEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewpointScore_UpdateRecordAsync(
  objViewpointScoreEN: clsViewpointScoreEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewpointScoreEN.sfUpdFldSetStr === undefined ||
    objViewpointScoreEN.sfUpdFldSetStr === null ||
    objViewpointScoreEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewpointScoreEN.viewpointScoreId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewpointScoreEN, config);
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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
 * @param objViewpointScoreEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewpointScore_UpdateWithConditionAsync(
  objViewpointScoreEN: clsViewpointScoreEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewpointScoreEN.sfUpdFldSetStr === undefined ||
    objViewpointScoreEN.sfUpdFldSetStr === null ||
    objViewpointScoreEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewpointScoreEN.viewpointScoreId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);
  objViewpointScoreEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewpointScoreEN, config);
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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
 * @param objlngViewpointScoreIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewpointScore_IsExistRecordCache(
  objViewpointScoreCond: clsViewpointScoreEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrViewpointScoreObjLstCache = await ViewpointScore_GetObjLstCache();
  if (arrViewpointScoreObjLstCache == null) return false;
  let arrViewpointScoreSel = arrViewpointScoreObjLstCache;
  if (
    objViewpointScoreCond.sfFldComparisonOp == null ||
    objViewpointScoreCond.sfFldComparisonOp == ''
  )
    return arrViewpointScoreSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewpointScoreCond.sfFldComparisonOp,
  );
  //console.log("clsViewpointScoreWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewpointScoreCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewpointScoreCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewpointScoreSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objViewpointScoreCond),
      viewpointScore_ConstructorName,
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
export async function ViewpointScore_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
 * @param lngViewpointScoreId:所给的关键字
 * @returns 对象
 */
export async function ViewpointScore_IsExistCache(lngViewpointScoreId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrViewpointScoreObjLstCache = await ViewpointScore_GetObjLstCache();
  if (arrViewpointScoreObjLstCache == null) return false;
  try {
    const arrViewpointScoreSel = arrViewpointScoreObjLstCache.filter(
      (x) => x.viewpointScoreId == lngViewpointScoreId,
    );
    if (arrViewpointScoreSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngViewpointScoreId,
      viewpointScore_ConstructorName,
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
 * @param lngViewpointScoreId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewpointScore_IsExistAsync(lngViewpointScoreId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngViewpointScoreId,
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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
export async function ViewpointScore_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
 * @param objViewpointScoreCond:条件对象
 * @returns 对象列表记录数
 */
export async function ViewpointScore_GetRecCountByCondCache(
  objViewpointScoreCond: clsViewpointScoreEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrViewpointScoreObjLstCache = await ViewpointScore_GetObjLstCache();
  if (arrViewpointScoreObjLstCache == null) return 0;
  let arrViewpointScoreSel = arrViewpointScoreObjLstCache;
  if (
    objViewpointScoreCond.sfFldComparisonOp == null ||
    objViewpointScoreCond.sfFldComparisonOp == ''
  )
    return arrViewpointScoreSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewpointScoreCond.sfFldComparisonOp,
  );
  //console.log("clsViewpointScoreWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewpointScoreCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewpointScoreSel = arrViewpointScoreSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewpointScoreCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewpointScoreSel = arrViewpointScoreSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrViewpointScoreSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewpointScoreCond),
      viewpointScore_ConstructorName,
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
export async function ViewpointScore_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewpointScore_Controller, strAction);

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
        viewpointScore_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointScore_ConstructorName,
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
export function ViewpointScore_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewpointScore_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsViewpointScoreEN._CurrTabName;
  switch (clsViewpointScoreEN.CacheModeId) {
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
export function ViewpointScore_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsViewpointScoreEN._CurrTabName;
    switch (clsViewpointScoreEN.CacheModeId) {
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
export function ViewpointScore_CheckPropertyNew(pobjViewpointScoreEN: clsViewpointScoreEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.viewpointId) == false &&
    GetStrLen(pobjViewpointScoreEN.viewpointId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[观点Id(viewpointId)]的长度不能超过8(In 观点评分表(ViewpointScore))!值:$(pobjViewpointScoreEN.viewpointId)(clsViewpointScoreBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.updDate) == false &&
    GetStrLen(pobjViewpointScoreEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 观点评分表(ViewpointScore))!值:$(pobjViewpointScoreEN.updDate)(clsViewpointScoreBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.updUserId) == false &&
    GetStrLen(pobjViewpointScoreEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 观点评分表(ViewpointScore))!值:$(pobjViewpointScoreEN.updUserId)(clsViewpointScoreBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.memo) == false &&
    GetStrLen(pobjViewpointScoreEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 观点评分表(ViewpointScore))!值:$(pobjViewpointScoreEN.memo)(clsViewpointScoreBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewpointScoreEN.viewpointScoreId &&
    undefined !== pobjViewpointScoreEN.viewpointScoreId &&
    tzDataType.isNumber(pobjViewpointScoreEN.viewpointScoreId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评分Id(viewpointScoreId)]的值:[$(pobjViewpointScoreEN.viewpointScoreId)], 非法,应该为数值型(In 观点评分表(ViewpointScore))!(clsViewpointScoreBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewpointScoreEN.viewpointScore &&
    undefined !== pobjViewpointScoreEN.viewpointScore &&
    tzDataType.isNumber(pobjViewpointScoreEN.viewpointScore) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评分(viewpointScore)]的值:[$(pobjViewpointScoreEN.viewpointScore)], 非法,应该为数值型(In 观点评分表(ViewpointScore))!(clsViewpointScoreBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.viewpointId) == false &&
    undefined !== pobjViewpointScoreEN.viewpointId &&
    tzDataType.isString(pobjViewpointScoreEN.viewpointId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[观点Id(viewpointId)]的值:[$(pobjViewpointScoreEN.viewpointId)], 非法,应该为字符型(In 观点评分表(ViewpointScore))!(clsViewpointScoreBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.updDate) == false &&
    undefined !== pobjViewpointScoreEN.updDate &&
    tzDataType.isString(pobjViewpointScoreEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjViewpointScoreEN.updDate)], 非法,应该为字符型(In 观点评分表(ViewpointScore))!(clsViewpointScoreBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.updUserId) == false &&
    undefined !== pobjViewpointScoreEN.updUserId &&
    tzDataType.isString(pobjViewpointScoreEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjViewpointScoreEN.updUserId)], 非法,应该为字符型(In 观点评分表(ViewpointScore))!(clsViewpointScoreBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.memo) == false &&
    undefined !== pobjViewpointScoreEN.memo &&
    tzDataType.isString(pobjViewpointScoreEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjViewpointScoreEN.memo)], 非法,应该为字符型(In 观点评分表(ViewpointScore))!(clsViewpointScoreBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewpointScore_CheckProperty4Update(pobjViewpointScoreEN: clsViewpointScoreEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.viewpointId) == false &&
    GetStrLen(pobjViewpointScoreEN.viewpointId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[观点Id(viewpointId)]的长度不能超过8(In 观点评分表(ViewpointScore))!值:$(pobjViewpointScoreEN.viewpointId)(clsViewpointScoreBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.updDate) == false &&
    GetStrLen(pobjViewpointScoreEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 观点评分表(ViewpointScore))!值:$(pobjViewpointScoreEN.updDate)(clsViewpointScoreBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.updUserId) == false &&
    GetStrLen(pobjViewpointScoreEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 观点评分表(ViewpointScore))!值:$(pobjViewpointScoreEN.updUserId)(clsViewpointScoreBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.memo) == false &&
    GetStrLen(pobjViewpointScoreEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 观点评分表(ViewpointScore))!值:$(pobjViewpointScoreEN.memo)(clsViewpointScoreBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewpointScoreEN.viewpointScoreId &&
    undefined !== pobjViewpointScoreEN.viewpointScoreId &&
    tzDataType.isNumber(pobjViewpointScoreEN.viewpointScoreId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评分Id(viewpointScoreId)]的值:[$(pobjViewpointScoreEN.viewpointScoreId)], 非法,应该为数值型(In 观点评分表(ViewpointScore))!(clsViewpointScoreBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewpointScoreEN.viewpointScore &&
    undefined !== pobjViewpointScoreEN.viewpointScore &&
    tzDataType.isNumber(pobjViewpointScoreEN.viewpointScore) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评分(viewpointScore)]的值:[$(pobjViewpointScoreEN.viewpointScore)], 非法,应该为数值型(In 观点评分表(ViewpointScore))!(clsViewpointScoreBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.viewpointId) == false &&
    undefined !== pobjViewpointScoreEN.viewpointId &&
    tzDataType.isString(pobjViewpointScoreEN.viewpointId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[观点Id(viewpointId)]的值:[$(pobjViewpointScoreEN.viewpointId)], 非法,应该为字符型(In 观点评分表(ViewpointScore))!(clsViewpointScoreBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.updDate) == false &&
    undefined !== pobjViewpointScoreEN.updDate &&
    tzDataType.isString(pobjViewpointScoreEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjViewpointScoreEN.updDate)], 非法,应该为字符型(In 观点评分表(ViewpointScore))!(clsViewpointScoreBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.updUserId) == false &&
    undefined !== pobjViewpointScoreEN.updUserId &&
    tzDataType.isString(pobjViewpointScoreEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjViewpointScoreEN.updUserId)], 非法,应该为字符型(In 观点评分表(ViewpointScore))!(clsViewpointScoreBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointScoreEN.memo) == false &&
    undefined !== pobjViewpointScoreEN.memo &&
    tzDataType.isString(pobjViewpointScoreEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjViewpointScoreEN.memo)], 非法,应该为字符型(In 观点评分表(ViewpointScore))!(clsViewpointScoreBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjViewpointScoreEN.viewpointScoreId ||
    (pobjViewpointScoreEN.viewpointScoreId != null &&
      pobjViewpointScoreEN.viewpointScoreId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[评分Id]不能为空(In 观点评分表)!(clsViewpointScoreBL:CheckProperty4Update)',
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
export function ViewpointScore_GetJSONStrByObj(pobjViewpointScoreEN: clsViewpointScoreEN): string {
  pobjViewpointScoreEN.sfUpdFldSetStr = pobjViewpointScoreEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewpointScoreEN);
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
export function ViewpointScore_GetObjLstByJSONStr(strJSON: string): Array<clsViewpointScoreEN> {
  let arrViewpointScoreObjLst = new Array<clsViewpointScoreEN>();
  if (strJSON === '') {
    return arrViewpointScoreObjLst;
  }
  try {
    arrViewpointScoreObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewpointScoreObjLst;
  }
  return arrViewpointScoreObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewpointScoreObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewpointScore_GetObjLstByJSONObjLst(
  arrViewpointScoreObjLstS: Array<clsViewpointScoreEN>,
): Array<clsViewpointScoreEN> {
  const arrViewpointScoreObjLst = new Array<clsViewpointScoreEN>();
  for (const objInFor of arrViewpointScoreObjLstS) {
    const obj1 = ViewpointScore_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewpointScoreObjLst.push(obj1);
  }
  return arrViewpointScoreObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewpointScore_GetObjByJSONStr(strJSON: string): clsViewpointScoreEN {
  let pobjViewpointScoreEN = new clsViewpointScoreEN();
  if (strJSON === '') {
    return pobjViewpointScoreEN;
  }
  try {
    pobjViewpointScoreEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewpointScoreEN;
  }
  return pobjViewpointScoreEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewpointScore_GetCombineCondition(
  objViewpointScoreCond: clsViewpointScoreEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewpointScoreCond.dicFldComparisonOp,
      clsViewpointScoreEN.con_ViewpointScoreId,
    ) == true
  ) {
    const strComparisonOpViewpointScoreId: string =
      objViewpointScoreCond.dicFldComparisonOp[clsViewpointScoreEN.con_ViewpointScoreId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewpointScoreEN.con_ViewpointScoreId,
      objViewpointScoreCond.viewpointScoreId,
      strComparisonOpViewpointScoreId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewpointScoreCond.dicFldComparisonOp,
      clsViewpointScoreEN.con_ViewpointScore,
    ) == true
  ) {
    const strComparisonOpViewpointScore: string =
      objViewpointScoreCond.dicFldComparisonOp[clsViewpointScoreEN.con_ViewpointScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewpointScoreEN.con_ViewpointScore,
      objViewpointScoreCond.viewpointScore,
      strComparisonOpViewpointScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewpointScoreCond.dicFldComparisonOp,
      clsViewpointScoreEN.con_ViewpointId,
    ) == true
  ) {
    const strComparisonOpViewpointId: string =
      objViewpointScoreCond.dicFldComparisonOp[clsViewpointScoreEN.con_ViewpointId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewpointScoreEN.con_ViewpointId,
      objViewpointScoreCond.viewpointId,
      strComparisonOpViewpointId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewpointScoreCond.dicFldComparisonOp,
      clsViewpointScoreEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objViewpointScoreCond.dicFldComparisonOp[clsViewpointScoreEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewpointScoreEN.con_UpdDate,
      objViewpointScoreCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewpointScoreCond.dicFldComparisonOp,
      clsViewpointScoreEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objViewpointScoreCond.dicFldComparisonOp[clsViewpointScoreEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewpointScoreEN.con_UpdUserId,
      objViewpointScoreCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewpointScoreCond.dicFldComparisonOp,
      clsViewpointScoreEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objViewpointScoreCond.dicFldComparisonOp[clsViewpointScoreEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewpointScoreEN.con_Memo,
      objViewpointScoreCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewpointScore(观点评分表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngViewpointScoreId: 评分Id(要求唯一的字段)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewpointScore_GetUniCondStr(objViewpointScoreEN: clsViewpointScoreEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewpointScoreId = '{0}'", objViewpointScoreEN.viewpointScoreId);
  strWhereCond += Format(" and ViewpointId = '{0}'", objViewpointScoreEN.viewpointId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewpointScore(观点评分表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngViewpointScoreId: 评分Id(要求唯一的字段)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewpointScore_GetUniCondStr4Update(
  objViewpointScoreEN: clsViewpointScoreEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewpointScoreId <> '{0}'", objViewpointScoreEN.viewpointScoreId);
  strWhereCond += Format(" and ViewpointScoreId = '{0}'", objViewpointScoreEN.viewpointScoreId);
  strWhereCond += Format(" and ViewpointId = '{0}'", objViewpointScoreEN.viewpointId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objViewpointScoreENS:源对象
 * @param objViewpointScoreENT:目标对象
 */
export function ViewpointScore_CopyObjTo(
  objViewpointScoreENS: clsViewpointScoreEN,
  objViewpointScoreENT: clsViewpointScoreEN,
): void {
  objViewpointScoreENT.viewpointScoreId = objViewpointScoreENS.viewpointScoreId; //评分Id
  objViewpointScoreENT.viewpointScore = objViewpointScoreENS.viewpointScore; //评分
  objViewpointScoreENT.viewpointId = objViewpointScoreENS.viewpointId; //观点Id
  objViewpointScoreENT.updDate = objViewpointScoreENS.updDate; //修改日期
  objViewpointScoreENT.updUserId = objViewpointScoreENS.updUserId; //修改用户Id
  objViewpointScoreENT.memo = objViewpointScoreENS.memo; //备注
  objViewpointScoreENT.sfUpdFldSetStr = objViewpointScoreENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewpointScoreENS:源对象
 * @param objViewpointScoreENT:目标对象
 */
export function ViewpointScore_GetObjFromJsonObj(
  objViewpointScoreENS: clsViewpointScoreEN,
): clsViewpointScoreEN {
  const objViewpointScoreENT: clsViewpointScoreEN = new clsViewpointScoreEN();
  ObjectAssign(objViewpointScoreENT, objViewpointScoreENS);
  return objViewpointScoreENT;
}
