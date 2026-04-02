/**
 * 类名:clsViewpointAppraiseWApi
 * 表名:ViewpointAppraise(01120599)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:09
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
 * 观点评论表(ViewpointAppraise)
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
import { clsViewpointAppraiseEN } from '@/ts/L0Entity/GradEduPaper/clsViewpointAppraiseEN';
import { vViewpointAppraise_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduPaper/clsvViewpointAppraiseWApi';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const viewpointAppraise_Controller = 'ViewpointAppraiseApi';
export const viewpointAppraise_ConstructorName = 'viewpointAppraise';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngViewpointAppraiseId:关键字
 * @returns 对象
 **/
export async function ViewpointAppraise_GetObjByViewpointAppraiseIdAsync(
  lngViewpointAppraiseId: number,
): Promise<clsViewpointAppraiseEN | null> {
  const strThisFuncName = 'GetObjByViewpointAppraiseIdAsync';

  if (lngViewpointAppraiseId == 0) {
    const strMsg = Format(
      '参数:[lngViewpointAppraiseId]不能为空!(In clsViewpointAppraiseWApi.GetObjByViewpointAppraiseIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewpointAppraiseId';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngViewpointAppraiseId,
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
      const objViewpointAppraise = ViewpointAppraise_GetObjFromJsonObj(returnObj);
      return objViewpointAppraise;
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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
 * @param lngViewpointAppraiseId:所给的关键字
 * @returns 对象
 */
export async function ViewpointAppraise_GetObjByViewpointAppraiseIdCache(
  lngViewpointAppraiseId: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewpointAppraiseIdCache';

  if (lngViewpointAppraiseId == 0) {
    const strMsg = Format(
      '参数:[lngViewpointAppraiseId]不能为空!(In clsViewpointAppraiseWApi.GetObjByViewpointAppraiseIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewpointAppraiseObjLstCache = await ViewpointAppraise_GetObjLstCache();
  try {
    const arrViewpointAppraiseSel = arrViewpointAppraiseObjLstCache.filter(
      (x) => x.viewpointAppraiseId == lngViewpointAppraiseId,
    );
    let objViewpointAppraise: clsViewpointAppraiseEN;
    if (arrViewpointAppraiseSel.length > 0) {
      objViewpointAppraise = arrViewpointAppraiseSel[0];
      return objViewpointAppraise;
    } else {
      if (bolTryAsyncOnce == true) {
        const objViewpointAppraiseConst = await ViewpointAppraise_GetObjByViewpointAppraiseIdAsync(
          lngViewpointAppraiseId,
        );
        if (objViewpointAppraiseConst != null) {
          ViewpointAppraise_ReFreshThisCache();
          return objViewpointAppraiseConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngViewpointAppraiseId,
      viewpointAppraise_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngViewpointAppraiseId:所给的关键字
 * @returns 对象
 */
export async function ViewpointAppraise_GetObjByViewpointAppraiseIdlocalStorage(
  lngViewpointAppraiseId: number,
) {
  const strThisFuncName = 'GetObjByViewpointAppraiseIdlocalStorage';

  if (lngViewpointAppraiseId == 0) {
    const strMsg = Format(
      '参数:[lngViewpointAppraiseId]不能为空!(In clsViewpointAppraiseWApi.GetObjByViewpointAppraiseIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsViewpointAppraiseEN._CurrTabName, lngViewpointAppraiseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objViewpointAppraiseCache: clsViewpointAppraiseEN = JSON.parse(strTempObj);
    return objViewpointAppraiseCache;
  }
  try {
    const objViewpointAppraise = await ViewpointAppraise_GetObjByViewpointAppraiseIdAsync(
      lngViewpointAppraiseId,
    );
    if (objViewpointAppraise != null) {
      localStorage.setItem(strKey, JSON.stringify(objViewpointAppraise));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objViewpointAppraise;
    }
    return objViewpointAppraise;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngViewpointAppraiseId,
      viewpointAppraise_ConstructorName,
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
 * @param objViewpointAppraise:所给的对象
 * @returns 对象
 */
export async function ViewpointAppraise_UpdateObjInLstCache(
  objViewpointAppraise: clsViewpointAppraiseEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrViewpointAppraiseObjLstCache = await ViewpointAppraise_GetObjLstCache();
    const obj = arrViewpointAppraiseObjLstCache.find(
      (x) =>
        x.viewpointAppraiseId == objViewpointAppraise.viewpointAppraiseId &&
        x.viewpointId == objViewpointAppraise.viewpointId,
    );
    if (obj != null) {
      objViewpointAppraise.viewpointAppraiseId = obj.viewpointAppraiseId;
      ObjectAssign(obj, objViewpointAppraise);
    } else {
      arrViewpointAppraiseObjLstCache.push(objViewpointAppraise);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsViewpointAppraiseEN.con_ViewpointAppraiseId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsViewpointAppraiseEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsViewpointAppraiseEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngViewpointAppraiseId = Number(strInValue);
  if (lngViewpointAppraiseId == 0) {
    return '';
  }
  const objViewpointAppraise = await ViewpointAppraise_GetObjByViewpointAppraiseIdCache(
    lngViewpointAppraiseId,
  );
  if (objViewpointAppraise == null) return '';
  if (objViewpointAppraise.GetFldValue(strOutFldName) == null) return '';
  return objViewpointAppraise.GetFldValue(strOutFldName).toString();
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
export function ViewpointAppraise_SortFunDefa(
  a: clsViewpointAppraiseEN,
  b: clsViewpointAppraiseEN,
): number {
  return a.viewpointAppraiseId - b.viewpointAppraiseId;
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
export function ViewpointAppraise_SortFunDefa2Fld(
  a: clsViewpointAppraiseEN,
  b: clsViewpointAppraiseEN,
): number {
  if (a.viewpointId == b.viewpointId) return a.appraiseContent.localeCompare(b.appraiseContent);
  else return a.viewpointId.localeCompare(b.viewpointId);
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
export function ViewpointAppraise_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewpointAppraiseEN.con_ViewpointAppraiseId:
        return (a: clsViewpointAppraiseEN, b: clsViewpointAppraiseEN) => {
          return a.viewpointAppraiseId - b.viewpointAppraiseId;
        };
      case clsViewpointAppraiseEN.con_ViewpointId:
        return (a: clsViewpointAppraiseEN, b: clsViewpointAppraiseEN) => {
          if (a.viewpointId == null) return -1;
          if (b.viewpointId == null) return 1;
          return a.viewpointId.localeCompare(b.viewpointId);
        };
      case clsViewpointAppraiseEN.con_AppraiseContent:
        return (a: clsViewpointAppraiseEN, b: clsViewpointAppraiseEN) => {
          if (a.appraiseContent == null) return -1;
          if (b.appraiseContent == null) return 1;
          return a.appraiseContent.localeCompare(b.appraiseContent);
        };
      case clsViewpointAppraiseEN.con_UpdDate:
        return (a: clsViewpointAppraiseEN, b: clsViewpointAppraiseEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsViewpointAppraiseEN.con_Memo:
        return (a: clsViewpointAppraiseEN, b: clsViewpointAppraiseEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsViewpointAppraiseEN.con_UpdUser:
        return (a: clsViewpointAppraiseEN, b: clsViewpointAppraiseEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewpointAppraise]中不存在!(in ${viewpointAppraise_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewpointAppraiseEN.con_ViewpointAppraiseId:
        return (a: clsViewpointAppraiseEN, b: clsViewpointAppraiseEN) => {
          return b.viewpointAppraiseId - a.viewpointAppraiseId;
        };
      case clsViewpointAppraiseEN.con_ViewpointId:
        return (a: clsViewpointAppraiseEN, b: clsViewpointAppraiseEN) => {
          if (b.viewpointId == null) return -1;
          if (a.viewpointId == null) return 1;
          return b.viewpointId.localeCompare(a.viewpointId);
        };
      case clsViewpointAppraiseEN.con_AppraiseContent:
        return (a: clsViewpointAppraiseEN, b: clsViewpointAppraiseEN) => {
          if (b.appraiseContent == null) return -1;
          if (a.appraiseContent == null) return 1;
          return b.appraiseContent.localeCompare(a.appraiseContent);
        };
      case clsViewpointAppraiseEN.con_UpdDate:
        return (a: clsViewpointAppraiseEN, b: clsViewpointAppraiseEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsViewpointAppraiseEN.con_Memo:
        return (a: clsViewpointAppraiseEN, b: clsViewpointAppraiseEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsViewpointAppraiseEN.con_UpdUser:
        return (a: clsViewpointAppraiseEN, b: clsViewpointAppraiseEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewpointAppraise]中不存在!(in ${viewpointAppraise_ConstructorName}.${strThisFuncName})`;
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
export async function ViewpointAppraise_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewpointAppraiseEN.con_ViewpointAppraiseId:
      return (obj: clsViewpointAppraiseEN) => {
        return obj.viewpointAppraiseId === value;
      };
    case clsViewpointAppraiseEN.con_ViewpointId:
      return (obj: clsViewpointAppraiseEN) => {
        return obj.viewpointId === value;
      };
    case clsViewpointAppraiseEN.con_AppraiseContent:
      return (obj: clsViewpointAppraiseEN) => {
        return obj.appraiseContent === value;
      };
    case clsViewpointAppraiseEN.con_UpdDate:
      return (obj: clsViewpointAppraiseEN) => {
        return obj.updDate === value;
      };
    case clsViewpointAppraiseEN.con_Memo:
      return (obj: clsViewpointAppraiseEN) => {
        return obj.memo === value;
      };
    case clsViewpointAppraiseEN.con_UpdUser:
      return (obj: clsViewpointAppraiseEN) => {
        return obj.updUser === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewpointAppraise]中不存在!(in ${viewpointAppraise_ConstructorName}.${strThisFuncName})`;
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
export async function ViewpointAppraise_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsViewpointAppraiseEN.con_ViewpointAppraiseId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrViewpointAppraise = await ViewpointAppraise_GetObjLstCache();
  if (arrViewpointAppraise == null) return [];
  let arrViewpointAppraiseSel = arrViewpointAppraise;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrViewpointAppraiseSel.length == 0) return [];
  return arrViewpointAppraiseSel.map((x) => x.viewpointAppraiseId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewpointAppraise_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewpointAppraiseEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

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
      const objViewpointAppraise = ViewpointAppraise_GetObjFromJsonObj(returnObj);
      return objViewpointAppraise;
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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewpointAppraiseEN._CurrTabName;
  if (IsNullOrEmpty(clsViewpointAppraiseEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewpointAppraiseEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrViewpointAppraiseExObjLstCache: Array<clsViewpointAppraiseEN> =
      CacheHelper.Get(strKey);
    const arrViewpointAppraiseObjLstT = ViewpointAppraise_GetObjLstByJSONObjLst(
      arrViewpointAppraiseExObjLstCache,
    );
    return arrViewpointAppraiseObjLstT;
  }
  try {
    const arrViewpointAppraiseExObjLst = await ViewpointAppraise_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrViewpointAppraiseExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewpointAppraiseExObjLst.length,
    );
    console.log(strInfo);
    return arrViewpointAppraiseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewpointAppraiseEN._CurrTabName;
  if (IsNullOrEmpty(clsViewpointAppraiseEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewpointAppraiseEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewpointAppraiseExObjLstCache: Array<clsViewpointAppraiseEN> =
      JSON.parse(strTempObjLst);
    const arrViewpointAppraiseObjLstT = ViewpointAppraise_GetObjLstByJSONObjLst(
      arrViewpointAppraiseExObjLstCache,
    );
    return arrViewpointAppraiseObjLstT;
  }
  try {
    const arrViewpointAppraiseExObjLst = await ViewpointAppraise_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrViewpointAppraiseExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewpointAppraiseExObjLst.length,
    );
    console.log(strInfo);
    return arrViewpointAppraiseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsViewpointAppraiseEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewpointAppraiseObjLstCache: Array<clsViewpointAppraiseEN> =
      JSON.parse(strTempObjLst);
    return arrViewpointAppraiseObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ViewpointAppraise_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewpointAppraiseEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

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
          viewpointAppraise_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewpointAppraiseEN._CurrTabName;
  if (IsNullOrEmpty(clsViewpointAppraiseEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewpointAppraiseEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewpointAppraiseExObjLstCache: Array<clsViewpointAppraiseEN> =
      JSON.parse(strTempObjLst);
    const arrViewpointAppraiseObjLstT = ViewpointAppraise_GetObjLstByJSONObjLst(
      arrViewpointAppraiseExObjLstCache,
    );
    return arrViewpointAppraiseObjLstT;
  }
  try {
    const arrViewpointAppraiseExObjLst = await ViewpointAppraise_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrViewpointAppraiseExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewpointAppraiseExObjLst.length,
    );
    console.log(strInfo);
    return arrViewpointAppraiseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsViewpointAppraiseEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewpointAppraiseObjLstCache: Array<clsViewpointAppraiseEN> =
      JSON.parse(strTempObjLst);
    return arrViewpointAppraiseObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewpointAppraise_GetObjLstCache(): Promise<Array<clsViewpointAppraiseEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrViewpointAppraiseObjLstCache;
  switch (clsViewpointAppraiseEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewpointAppraiseObjLstCache = await ViewpointAppraise_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrViewpointAppraiseObjLstCache = await ViewpointAppraise_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrViewpointAppraiseObjLstCache = await ViewpointAppraise_GetObjLstClientCache();
      break;
    default:
      arrViewpointAppraiseObjLstCache = await ViewpointAppraise_GetObjLstClientCache();
      break;
  }
  return arrViewpointAppraiseObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewpointAppraise_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrViewpointAppraiseObjLstCache;
  switch (clsViewpointAppraiseEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewpointAppraiseObjLstCache = await ViewpointAppraise_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrViewpointAppraiseObjLstCache = await ViewpointAppraise_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrViewpointAppraiseObjLstCache = null;
      break;
    default:
      arrViewpointAppraiseObjLstCache = null;
      break;
  }
  return arrViewpointAppraiseObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngViewpointAppraiseIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewpointAppraise_GetSubObjLstCache(
  objViewpointAppraiseCond: clsViewpointAppraiseEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrViewpointAppraiseObjLstCache = await ViewpointAppraise_GetObjLstCache();
  let arrViewpointAppraiseSel = arrViewpointAppraiseObjLstCache;
  if (
    objViewpointAppraiseCond.sfFldComparisonOp == null ||
    objViewpointAppraiseCond.sfFldComparisonOp == ''
  )
    return arrViewpointAppraiseSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewpointAppraiseCond.sfFldComparisonOp,
  );
  //console.log("clsViewpointAppraiseWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewpointAppraiseCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewpointAppraiseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrViewpointAppraiseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewpointAppraiseCond),
      viewpointAppraise_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewpointAppraiseEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewpointAppraiseId:关键字列表
 * @returns 对象列表
 **/
export async function ViewpointAppraise_GetObjLstByViewpointAppraiseIdLstAsync(
  arrViewpointAppraiseId: Array<string>,
): Promise<Array<clsViewpointAppraiseEN>> {
  const strThisFuncName = 'GetObjLstByViewpointAppraiseIdLstAsync';
  const strAction = 'GetObjLstByViewpointAppraiseIdLst';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewpointAppraiseId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          viewpointAppraise_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
 * @param arrlngViewpointAppraiseIdLst:关键字列表
 * @returns 对象列表
 */
export async function ViewpointAppraise_GetObjLstByViewpointAppraiseIdLstCache(
  arrViewpointAppraiseIdLst: Array<number>,
) {
  const strThisFuncName = 'GetObjLstByViewpointAppraiseIdLstCache';
  try {
    const arrViewpointAppraiseObjLstCache = await ViewpointAppraise_GetObjLstCache();
    const arrViewpointAppraiseSel = arrViewpointAppraiseObjLstCache.filter(
      (x) => arrViewpointAppraiseIdLst.indexOf(x.viewpointAppraiseId) > -1,
    );
    return arrViewpointAppraiseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewpointAppraiseIdLst.join(','),
      viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewpointAppraiseEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

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
          viewpointAppraise_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewpointAppraiseEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

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
          viewpointAppraise_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewpointAppraiseEN>();
  const arrViewpointAppraiseObjLstCache = await ViewpointAppraise_GetObjLstCache();
  if (arrViewpointAppraiseObjLstCache.length == 0) return arrViewpointAppraiseObjLstCache;
  let arrViewpointAppraiseSel = arrViewpointAppraiseObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objViewpointAppraiseCond = new clsViewpointAppraiseEN();
  ObjectAssign(objViewpointAppraiseCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsViewpointAppraiseWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewpointAppraiseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewpointAppraiseSel.length == 0) return arrViewpointAppraiseSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewpointAppraiseSel = arrViewpointAppraiseSel.sort(
        ViewpointAppraise_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewpointAppraiseSel = arrViewpointAppraiseSel.sort(objPagerPara.sortFun);
    }
    arrViewpointAppraiseSel = arrViewpointAppraiseSel.slice(intStart, intEnd);
    return arrViewpointAppraiseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewpointAppraise_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewpointAppraiseEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ViewpointAppraise_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewpointAppraiseEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewpointAppraiseEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

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
          viewpointAppraise_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
 * @param lngViewpointAppraiseId:关键字
 * @returns 获取删除的结果
 **/
export async function ViewpointAppraise_DelRecordAsync(
  lngViewpointAppraiseId: number,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngViewpointAppraiseId);

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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
 * @param arrViewpointAppraiseId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ViewpointAppraise_DelViewpointAppraisesAsync(
  arrViewpointAppraiseId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelViewpointAppraisesAsync';
  const strAction = 'DelViewpointAppraises';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewpointAppraiseId, config);
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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_DelViewpointAppraisesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelViewpointAppraisesByCondAsync';
  const strAction = 'DelViewpointAppraisesByCond';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
 * @param objViewpointAppraiseEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewpointAppraise_AddNewRecordAsync(
  objViewpointAppraiseEN: clsViewpointAppraiseEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objViewpointAppraiseEN);
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewpointAppraiseEN, config);
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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
 * @param objViewpointAppraiseEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewpointAppraise_AddNewRecordWithReturnKeyAsync(
  objViewpointAppraiseEN: clsViewpointAppraiseEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewpointAppraiseEN, config);
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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
 * @param objViewpointAppraiseEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewpointAppraise_UpdateRecordAsync(
  objViewpointAppraiseEN: clsViewpointAppraiseEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewpointAppraiseEN.sfUpdFldSetStr === undefined ||
    objViewpointAppraiseEN.sfUpdFldSetStr === null ||
    objViewpointAppraiseEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewpointAppraiseEN.viewpointAppraiseId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewpointAppraiseEN, config);
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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
 * @param objViewpointAppraiseEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewpointAppraise_UpdateWithConditionAsync(
  objViewpointAppraiseEN: clsViewpointAppraiseEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewpointAppraiseEN.sfUpdFldSetStr === undefined ||
    objViewpointAppraiseEN.sfUpdFldSetStr === null ||
    objViewpointAppraiseEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewpointAppraiseEN.viewpointAppraiseId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);
  objViewpointAppraiseEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewpointAppraiseEN, config);
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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
 * @param objlngViewpointAppraiseIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewpointAppraise_IsExistRecordCache(
  objViewpointAppraiseCond: clsViewpointAppraiseEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrViewpointAppraiseObjLstCache = await ViewpointAppraise_GetObjLstCache();
  if (arrViewpointAppraiseObjLstCache == null) return false;
  let arrViewpointAppraiseSel = arrViewpointAppraiseObjLstCache;
  if (
    objViewpointAppraiseCond.sfFldComparisonOp == null ||
    objViewpointAppraiseCond.sfFldComparisonOp == ''
  )
    return arrViewpointAppraiseSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewpointAppraiseCond.sfFldComparisonOp,
  );
  //console.log("clsViewpointAppraiseWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewpointAppraiseCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewpointAppraiseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewpointAppraiseSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objViewpointAppraiseCond),
      viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
 * @param lngViewpointAppraiseId:所给的关键字
 * @returns 对象
 */
export async function ViewpointAppraise_IsExistCache(lngViewpointAppraiseId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrViewpointAppraiseObjLstCache = await ViewpointAppraise_GetObjLstCache();
  if (arrViewpointAppraiseObjLstCache == null) return false;
  try {
    const arrViewpointAppraiseSel = arrViewpointAppraiseObjLstCache.filter(
      (x) => x.viewpointAppraiseId == lngViewpointAppraiseId,
    );
    if (arrViewpointAppraiseSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngViewpointAppraiseId,
      viewpointAppraise_ConstructorName,
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
 * @param lngViewpointAppraiseId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewpointAppraise_IsExistAsync(
  lngViewpointAppraiseId: number,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngViewpointAppraiseId,
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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
 * @param objViewpointAppraiseCond:条件对象
 * @returns 对象列表记录数
 */
export async function ViewpointAppraise_GetRecCountByCondCache(
  objViewpointAppraiseCond: clsViewpointAppraiseEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrViewpointAppraiseObjLstCache = await ViewpointAppraise_GetObjLstCache();
  if (arrViewpointAppraiseObjLstCache == null) return 0;
  let arrViewpointAppraiseSel = arrViewpointAppraiseObjLstCache;
  if (
    objViewpointAppraiseCond.sfFldComparisonOp == null ||
    objViewpointAppraiseCond.sfFldComparisonOp == ''
  )
    return arrViewpointAppraiseSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewpointAppraiseCond.sfFldComparisonOp,
  );
  //console.log("clsViewpointAppraiseWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewpointAppraiseCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewpointAppraiseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewpointAppraiseSel = arrViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrViewpointAppraiseSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewpointAppraiseCond),
      viewpointAppraise_ConstructorName,
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
export async function ViewpointAppraise_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewpointAppraise_Controller, strAction);

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
        viewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewpointAppraise_ConstructorName,
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
export function ViewpointAppraise_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewpointAppraise_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsViewpointAppraiseEN._CurrTabName;
  switch (clsViewpointAppraiseEN.CacheModeId) {
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
  vViewpointAppraise_ReFreshThisCache();
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ViewpointAppraise_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsViewpointAppraiseEN._CurrTabName;
    switch (clsViewpointAppraiseEN.CacheModeId) {
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
export function ViewpointAppraise_CheckPropertyNew(
  pobjViewpointAppraiseEN: clsViewpointAppraiseEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.viewpointId) == false &&
    GetStrLen(pobjViewpointAppraiseEN.viewpointId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[观点Id(viewpointId)]的长度不能超过8(In 观点评论表(ViewpointAppraise))!值:$(pobjViewpointAppraiseEN.viewpointId)(clsViewpointAppraiseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.appraiseContent) == false &&
    GetStrLen(pobjViewpointAppraiseEN.appraiseContent) > 2000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[评议内容(appraiseContent)]的长度不能超过2000(In 观点评论表(ViewpointAppraise))!值:$(pobjViewpointAppraiseEN.appraiseContent)(clsViewpointAppraiseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.updDate) == false &&
    GetStrLen(pobjViewpointAppraiseEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 观点评论表(ViewpointAppraise))!值:$(pobjViewpointAppraiseEN.updDate)(clsViewpointAppraiseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.memo) == false &&
    GetStrLen(pobjViewpointAppraiseEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 观点评论表(ViewpointAppraise))!值:$(pobjViewpointAppraiseEN.memo)(clsViewpointAppraiseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.updUser) == false &&
    GetStrLen(pobjViewpointAppraiseEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 观点评论表(ViewpointAppraise))!值:$(pobjViewpointAppraiseEN.updUser)(clsViewpointAppraiseBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewpointAppraiseEN.viewpointAppraiseId &&
    undefined !== pobjViewpointAppraiseEN.viewpointAppraiseId &&
    tzDataType.isNumber(pobjViewpointAppraiseEN.viewpointAppraiseId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[观点评论Id(viewpointAppraiseId)]的值:[$(pobjViewpointAppraiseEN.viewpointAppraiseId)], 非法,应该为数值型(In 观点评论表(ViewpointAppraise))!(clsViewpointAppraiseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.viewpointId) == false &&
    undefined !== pobjViewpointAppraiseEN.viewpointId &&
    tzDataType.isString(pobjViewpointAppraiseEN.viewpointId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[观点Id(viewpointId)]的值:[$(pobjViewpointAppraiseEN.viewpointId)], 非法,应该为字符型(In 观点评论表(ViewpointAppraise))!(clsViewpointAppraiseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.appraiseContent) == false &&
    undefined !== pobjViewpointAppraiseEN.appraiseContent &&
    tzDataType.isString(pobjViewpointAppraiseEN.appraiseContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评议内容(appraiseContent)]的值:[$(pobjViewpointAppraiseEN.appraiseContent)], 非法,应该为字符型(In 观点评论表(ViewpointAppraise))!(clsViewpointAppraiseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.updDate) == false &&
    undefined !== pobjViewpointAppraiseEN.updDate &&
    tzDataType.isString(pobjViewpointAppraiseEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjViewpointAppraiseEN.updDate)], 非法,应该为字符型(In 观点评论表(ViewpointAppraise))!(clsViewpointAppraiseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.memo) == false &&
    undefined !== pobjViewpointAppraiseEN.memo &&
    tzDataType.isString(pobjViewpointAppraiseEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjViewpointAppraiseEN.memo)], 非法,应该为字符型(In 观点评论表(ViewpointAppraise))!(clsViewpointAppraiseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.updUser) == false &&
    undefined !== pobjViewpointAppraiseEN.updUser &&
    tzDataType.isString(pobjViewpointAppraiseEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjViewpointAppraiseEN.updUser)], 非法,应该为字符型(In 观点评论表(ViewpointAppraise))!(clsViewpointAppraiseBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewpointAppraise_CheckProperty4Update(
  pobjViewpointAppraiseEN: clsViewpointAppraiseEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.viewpointId) == false &&
    GetStrLen(pobjViewpointAppraiseEN.viewpointId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[观点Id(viewpointId)]的长度不能超过8(In 观点评论表(ViewpointAppraise))!值:$(pobjViewpointAppraiseEN.viewpointId)(clsViewpointAppraiseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.appraiseContent) == false &&
    GetStrLen(pobjViewpointAppraiseEN.appraiseContent) > 2000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[评议内容(appraiseContent)]的长度不能超过2000(In 观点评论表(ViewpointAppraise))!值:$(pobjViewpointAppraiseEN.appraiseContent)(clsViewpointAppraiseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.updDate) == false &&
    GetStrLen(pobjViewpointAppraiseEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 观点评论表(ViewpointAppraise))!值:$(pobjViewpointAppraiseEN.updDate)(clsViewpointAppraiseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.memo) == false &&
    GetStrLen(pobjViewpointAppraiseEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 观点评论表(ViewpointAppraise))!值:$(pobjViewpointAppraiseEN.memo)(clsViewpointAppraiseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.updUser) == false &&
    GetStrLen(pobjViewpointAppraiseEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 观点评论表(ViewpointAppraise))!值:$(pobjViewpointAppraiseEN.updUser)(clsViewpointAppraiseBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewpointAppraiseEN.viewpointAppraiseId &&
    undefined !== pobjViewpointAppraiseEN.viewpointAppraiseId &&
    tzDataType.isNumber(pobjViewpointAppraiseEN.viewpointAppraiseId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[观点评论Id(viewpointAppraiseId)]的值:[$(pobjViewpointAppraiseEN.viewpointAppraiseId)], 非法,应该为数值型(In 观点评论表(ViewpointAppraise))!(clsViewpointAppraiseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.viewpointId) == false &&
    undefined !== pobjViewpointAppraiseEN.viewpointId &&
    tzDataType.isString(pobjViewpointAppraiseEN.viewpointId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[观点Id(viewpointId)]的值:[$(pobjViewpointAppraiseEN.viewpointId)], 非法,应该为字符型(In 观点评论表(ViewpointAppraise))!(clsViewpointAppraiseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.appraiseContent) == false &&
    undefined !== pobjViewpointAppraiseEN.appraiseContent &&
    tzDataType.isString(pobjViewpointAppraiseEN.appraiseContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评议内容(appraiseContent)]的值:[$(pobjViewpointAppraiseEN.appraiseContent)], 非法,应该为字符型(In 观点评论表(ViewpointAppraise))!(clsViewpointAppraiseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.updDate) == false &&
    undefined !== pobjViewpointAppraiseEN.updDate &&
    tzDataType.isString(pobjViewpointAppraiseEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjViewpointAppraiseEN.updDate)], 非法,应该为字符型(In 观点评论表(ViewpointAppraise))!(clsViewpointAppraiseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.memo) == false &&
    undefined !== pobjViewpointAppraiseEN.memo &&
    tzDataType.isString(pobjViewpointAppraiseEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjViewpointAppraiseEN.memo)], 非法,应该为字符型(In 观点评论表(ViewpointAppraise))!(clsViewpointAppraiseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewpointAppraiseEN.updUser) == false &&
    undefined !== pobjViewpointAppraiseEN.updUser &&
    tzDataType.isString(pobjViewpointAppraiseEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjViewpointAppraiseEN.updUser)], 非法,应该为字符型(In 观点评论表(ViewpointAppraise))!(clsViewpointAppraiseBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjViewpointAppraiseEN.viewpointAppraiseId ||
    (pobjViewpointAppraiseEN.viewpointAppraiseId != null &&
      pobjViewpointAppraiseEN.viewpointAppraiseId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[观点评论Id]不能为空(In 观点评论表)!(clsViewpointAppraiseBL:CheckProperty4Update)',
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
export function ViewpointAppraise_GetJSONStrByObj(
  pobjViewpointAppraiseEN: clsViewpointAppraiseEN,
): string {
  pobjViewpointAppraiseEN.sfUpdFldSetStr = pobjViewpointAppraiseEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewpointAppraiseEN);
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
export function ViewpointAppraise_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsViewpointAppraiseEN> {
  let arrViewpointAppraiseObjLst = new Array<clsViewpointAppraiseEN>();
  if (strJSON === '') {
    return arrViewpointAppraiseObjLst;
  }
  try {
    arrViewpointAppraiseObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewpointAppraiseObjLst;
  }
  return arrViewpointAppraiseObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewpointAppraiseObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewpointAppraise_GetObjLstByJSONObjLst(
  arrViewpointAppraiseObjLstS: Array<clsViewpointAppraiseEN>,
): Array<clsViewpointAppraiseEN> {
  const arrViewpointAppraiseObjLst = new Array<clsViewpointAppraiseEN>();
  for (const objInFor of arrViewpointAppraiseObjLstS) {
    const obj1 = ViewpointAppraise_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewpointAppraiseObjLst.push(obj1);
  }
  return arrViewpointAppraiseObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewpointAppraise_GetObjByJSONStr(strJSON: string): clsViewpointAppraiseEN {
  let pobjViewpointAppraiseEN = new clsViewpointAppraiseEN();
  if (strJSON === '') {
    return pobjViewpointAppraiseEN;
  }
  try {
    pobjViewpointAppraiseEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewpointAppraiseEN;
  }
  return pobjViewpointAppraiseEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewpointAppraise_GetCombineCondition(
  objViewpointAppraiseCond: clsViewpointAppraiseEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewpointAppraiseCond.dicFldComparisonOp,
      clsViewpointAppraiseEN.con_ViewpointAppraiseId,
    ) == true
  ) {
    const strComparisonOpViewpointAppraiseId: string =
      objViewpointAppraiseCond.dicFldComparisonOp[clsViewpointAppraiseEN.con_ViewpointAppraiseId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewpointAppraiseEN.con_ViewpointAppraiseId,
      objViewpointAppraiseCond.viewpointAppraiseId,
      strComparisonOpViewpointAppraiseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewpointAppraiseCond.dicFldComparisonOp,
      clsViewpointAppraiseEN.con_ViewpointId,
    ) == true
  ) {
    const strComparisonOpViewpointId: string =
      objViewpointAppraiseCond.dicFldComparisonOp[clsViewpointAppraiseEN.con_ViewpointId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewpointAppraiseEN.con_ViewpointId,
      objViewpointAppraiseCond.viewpointId,
      strComparisonOpViewpointId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewpointAppraiseCond.dicFldComparisonOp,
      clsViewpointAppraiseEN.con_AppraiseContent,
    ) == true
  ) {
    const strComparisonOpAppraiseContent: string =
      objViewpointAppraiseCond.dicFldComparisonOp[clsViewpointAppraiseEN.con_AppraiseContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewpointAppraiseEN.con_AppraiseContent,
      objViewpointAppraiseCond.appraiseContent,
      strComparisonOpAppraiseContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewpointAppraiseCond.dicFldComparisonOp,
      clsViewpointAppraiseEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objViewpointAppraiseCond.dicFldComparisonOp[clsViewpointAppraiseEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewpointAppraiseEN.con_UpdDate,
      objViewpointAppraiseCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewpointAppraiseCond.dicFldComparisonOp,
      clsViewpointAppraiseEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objViewpointAppraiseCond.dicFldComparisonOp[clsViewpointAppraiseEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewpointAppraiseEN.con_Memo,
      objViewpointAppraiseCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewpointAppraiseCond.dicFldComparisonOp,
      clsViewpointAppraiseEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objViewpointAppraiseCond.dicFldComparisonOp[clsViewpointAppraiseEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewpointAppraiseEN.con_UpdUser,
      objViewpointAppraiseCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewpointAppraise(观点评论表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngViewpointAppraiseId: 观点评论Id(要求唯一的字段)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewpointAppraise_GetUniCondStr(
  objViewpointAppraiseEN: clsViewpointAppraiseEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and ViewpointAppraiseId = '{0}'",
    objViewpointAppraiseEN.viewpointAppraiseId,
  );
  strWhereCond += Format(" and ViewpointId = '{0}'", objViewpointAppraiseEN.viewpointId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewpointAppraise(观点评论表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngViewpointAppraiseId: 观点评论Id(要求唯一的字段)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewpointAppraise_GetUniCondStr4Update(
  objViewpointAppraiseEN: clsViewpointAppraiseEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and ViewpointAppraiseId <> '{0}'",
    objViewpointAppraiseEN.viewpointAppraiseId,
  );
  strWhereCond += Format(
    " and ViewpointAppraiseId = '{0}'",
    objViewpointAppraiseEN.viewpointAppraiseId,
  );
  strWhereCond += Format(" and ViewpointId = '{0}'", objViewpointAppraiseEN.viewpointId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objViewpointAppraiseENS:源对象
 * @param objViewpointAppraiseENT:目标对象
 */
export function ViewpointAppraise_CopyObjTo(
  objViewpointAppraiseENS: clsViewpointAppraiseEN,
  objViewpointAppraiseENT: clsViewpointAppraiseEN,
): void {
  objViewpointAppraiseENT.viewpointAppraiseId = objViewpointAppraiseENS.viewpointAppraiseId; //观点评论Id
  objViewpointAppraiseENT.viewpointId = objViewpointAppraiseENS.viewpointId; //观点Id
  objViewpointAppraiseENT.appraiseContent = objViewpointAppraiseENS.appraiseContent; //评议内容
  objViewpointAppraiseENT.updDate = objViewpointAppraiseENS.updDate; //修改日期
  objViewpointAppraiseENT.memo = objViewpointAppraiseENS.memo; //备注
  objViewpointAppraiseENT.updUser = objViewpointAppraiseENS.updUser; //修改人
  objViewpointAppraiseENT.sfUpdFldSetStr = objViewpointAppraiseENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewpointAppraiseENS:源对象
 * @param objViewpointAppraiseENT:目标对象
 */
export function ViewpointAppraise_GetObjFromJsonObj(
  objViewpointAppraiseENS: clsViewpointAppraiseEN,
): clsViewpointAppraiseEN {
  const objViewpointAppraiseENT: clsViewpointAppraiseEN = new clsViewpointAppraiseEN();
  ObjectAssign(objViewpointAppraiseENT, objViewpointAppraiseENS);
  return objViewpointAppraiseENT;
}
