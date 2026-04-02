/**
 * 类名:clsgs_PaperAttentionWApi
 * 表名:gs_PaperAttention(01120748)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:27
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
 * 论文关注(gs_PaperAttention)
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
import { clsgs_PaperAttentionEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperAttentionEN';
import { vgs_PaperAttention_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduPaper/clsvgs_PaperAttentionWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gs_PaperAttention_Controller = 'gs_PaperAttentionApi';
export const gs_PaperAttention_ConstructorName = 'gs_PaperAttention';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngPaperAttentionId:关键字
 * @returns 对象
 **/
export async function gs_PaperAttention_GetObjByPaperAttentionIdAsync(
  lngPaperAttentionId: number,
): Promise<clsgs_PaperAttentionEN | null> {
  const strThisFuncName = 'GetObjByPaperAttentionIdAsync';

  if (lngPaperAttentionId == 0) {
    const strMsg = Format(
      '参数:[lngPaperAttentionId]不能为空!(In clsgs_PaperAttentionWApi.GetObjByPaperAttentionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPaperAttentionId';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngPaperAttentionId,
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
      const objgs_PaperAttention = gs_PaperAttention_GetObjFromJsonObj(returnObj);
      return objgs_PaperAttention;
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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
 * @param lngPaperAttentionId:所给的关键字
 * @returns 对象
 */
export async function gs_PaperAttention_GetObjByPaperAttentionIdCache(
  lngPaperAttentionId: number,
  strUserId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPaperAttentionIdCache';

  if (lngPaperAttentionId == 0) {
    const strMsg = Format(
      '参数:[lngPaperAttentionId]不能为空!(In clsgs_PaperAttentionWApi.GetObjByPaperAttentionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_PaperAttentionObjLstCache = await gs_PaperAttention_GetObjLstCache(strUserId);
  try {
    const arrgs_PaperAttentionSel = arrgs_PaperAttentionObjLstCache.filter(
      (x) => x.paperAttentionId == lngPaperAttentionId,
    );
    let objgs_PaperAttention: clsgs_PaperAttentionEN;
    if (arrgs_PaperAttentionSel.length > 0) {
      objgs_PaperAttention = arrgs_PaperAttentionSel[0];
      return objgs_PaperAttention;
    } else {
      if (bolTryAsyncOnce == true) {
        const objgs_PaperAttentionConst = await gs_PaperAttention_GetObjByPaperAttentionIdAsync(
          lngPaperAttentionId,
        );
        if (objgs_PaperAttentionConst != null) {
          gs_PaperAttention_ReFreshThisCache(strUserId);
          return objgs_PaperAttentionConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngPaperAttentionId,
      gs_PaperAttention_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngPaperAttentionId:所给的关键字
 * @returns 对象
 */
export async function gs_PaperAttention_GetObjByPaperAttentionIdlocalStorage(
  lngPaperAttentionId: number,
) {
  const strThisFuncName = 'GetObjByPaperAttentionIdlocalStorage';

  if (lngPaperAttentionId == 0) {
    const strMsg = Format(
      '参数:[lngPaperAttentionId]不能为空!(In clsgs_PaperAttentionWApi.GetObjByPaperAttentionIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsgs_PaperAttentionEN._CurrTabName, lngPaperAttentionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objgs_PaperAttentionCache: clsgs_PaperAttentionEN = JSON.parse(strTempObj);
    return objgs_PaperAttentionCache;
  }
  try {
    const objgs_PaperAttention = await gs_PaperAttention_GetObjByPaperAttentionIdAsync(
      lngPaperAttentionId,
    );
    if (objgs_PaperAttention != null) {
      localStorage.setItem(strKey, JSON.stringify(objgs_PaperAttention));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objgs_PaperAttention;
    }
    return objgs_PaperAttention;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngPaperAttentionId,
      gs_PaperAttention_ConstructorName,
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
 * @param objgs_PaperAttention:所给的对象
 * @returns 对象
 */
export async function gs_PaperAttention_UpdateObjInLstCache(
  objgs_PaperAttention: clsgs_PaperAttentionEN,
  strUserId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrgs_PaperAttentionObjLstCache = await gs_PaperAttention_GetObjLstCache(strUserId);
    const obj = arrgs_PaperAttentionObjLstCache.find(
      (x) => x.paperId == objgs_PaperAttention.paperId && x.userId == objgs_PaperAttention.userId,
    );
    if (obj != null) {
      objgs_PaperAttention.paperAttentionId = obj.paperAttentionId;
      ObjectAssign(obj, objgs_PaperAttention);
    } else {
      arrgs_PaperAttentionObjLstCache.push(objgs_PaperAttention);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gs_PaperAttention_ConstructorName,
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
 @param strUserId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function gs_PaperAttention_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strUserIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strUserIdClassfy) == true) {
    const strMsg = Format('参数:[strUserIdClassfy]不能为空!(In clsgs_PaperAttentionWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsgs_PaperAttentionEN.con_PaperAttentionId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsgs_PaperAttentionEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsgs_PaperAttentionEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngPaperAttentionId = Number(strInValue);
  if (lngPaperAttentionId == 0) {
    return '';
  }
  const objgs_PaperAttention = await gs_PaperAttention_GetObjByPaperAttentionIdCache(
    lngPaperAttentionId,
    strUserIdClassfy,
  );
  if (objgs_PaperAttention == null) return '';
  if (objgs_PaperAttention.GetFldValue(strOutFldName) == null) return '';
  return objgs_PaperAttention.GetFldValue(strOutFldName).toString();
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
export function gs_PaperAttention_SortFunDefa(
  a: clsgs_PaperAttentionEN,
  b: clsgs_PaperAttentionEN,
): number {
  return a.paperAttentionId - b.paperAttentionId;
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
export function gs_PaperAttention_SortFunDefa2Fld(
  a: clsgs_PaperAttentionEN,
  b: clsgs_PaperAttentionEN,
): number {
  if (a.paperId == b.paperId) return a.userId.localeCompare(b.userId);
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
export function gs_PaperAttention_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_PaperAttentionEN.con_PaperAttentionId:
        return (a: clsgs_PaperAttentionEN, b: clsgs_PaperAttentionEN) => {
          return a.paperAttentionId - b.paperAttentionId;
        };
      case clsgs_PaperAttentionEN.con_PaperId:
        return (a: clsgs_PaperAttentionEN, b: clsgs_PaperAttentionEN) => {
          if (a.paperId == null) return -1;
          if (b.paperId == null) return 1;
          return a.paperId.localeCompare(b.paperId);
        };
      case clsgs_PaperAttentionEN.con_UserId:
        return (a: clsgs_PaperAttentionEN, b: clsgs_PaperAttentionEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsgs_PaperAttentionEN.con_PaperGroupId:
        return (a: clsgs_PaperAttentionEN, b: clsgs_PaperAttentionEN) => {
          if (a.paperGroupId == null) return -1;
          if (b.paperGroupId == null) return 1;
          return a.paperGroupId.localeCompare(b.paperGroupId);
        };
      case clsgs_PaperAttentionEN.con_UpdUser:
        return (a: clsgs_PaperAttentionEN, b: clsgs_PaperAttentionEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsgs_PaperAttentionEN.con_UpdDate:
        return (a: clsgs_PaperAttentionEN, b: clsgs_PaperAttentionEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsgs_PaperAttentionEN.con_Meno:
        return (a: clsgs_PaperAttentionEN, b: clsgs_PaperAttentionEN) => {
          if (a.meno == null) return -1;
          if (b.meno == null) return 1;
          return a.meno.localeCompare(b.meno);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_PaperAttention]中不存在!(in ${gs_PaperAttention_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsgs_PaperAttentionEN.con_PaperAttentionId:
        return (a: clsgs_PaperAttentionEN, b: clsgs_PaperAttentionEN) => {
          return b.paperAttentionId - a.paperAttentionId;
        };
      case clsgs_PaperAttentionEN.con_PaperId:
        return (a: clsgs_PaperAttentionEN, b: clsgs_PaperAttentionEN) => {
          if (b.paperId == null) return -1;
          if (a.paperId == null) return 1;
          return b.paperId.localeCompare(a.paperId);
        };
      case clsgs_PaperAttentionEN.con_UserId:
        return (a: clsgs_PaperAttentionEN, b: clsgs_PaperAttentionEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsgs_PaperAttentionEN.con_PaperGroupId:
        return (a: clsgs_PaperAttentionEN, b: clsgs_PaperAttentionEN) => {
          if (b.paperGroupId == null) return -1;
          if (a.paperGroupId == null) return 1;
          return b.paperGroupId.localeCompare(a.paperGroupId);
        };
      case clsgs_PaperAttentionEN.con_UpdUser:
        return (a: clsgs_PaperAttentionEN, b: clsgs_PaperAttentionEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsgs_PaperAttentionEN.con_UpdDate:
        return (a: clsgs_PaperAttentionEN, b: clsgs_PaperAttentionEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsgs_PaperAttentionEN.con_Meno:
        return (a: clsgs_PaperAttentionEN, b: clsgs_PaperAttentionEN) => {
          if (b.meno == null) return -1;
          if (a.meno == null) return 1;
          return b.meno.localeCompare(a.meno);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_PaperAttention]中不存在!(in ${gs_PaperAttention_ConstructorName}.${strThisFuncName})`;
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
export async function gs_PaperAttention_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_PaperAttentionEN.con_PaperAttentionId:
      return (obj: clsgs_PaperAttentionEN) => {
        return obj.paperAttentionId === value;
      };
    case clsgs_PaperAttentionEN.con_PaperId:
      return (obj: clsgs_PaperAttentionEN) => {
        return obj.paperId === value;
      };
    case clsgs_PaperAttentionEN.con_UserId:
      return (obj: clsgs_PaperAttentionEN) => {
        return obj.userId === value;
      };
    case clsgs_PaperAttentionEN.con_PaperGroupId:
      return (obj: clsgs_PaperAttentionEN) => {
        return obj.paperGroupId === value;
      };
    case clsgs_PaperAttentionEN.con_UpdUser:
      return (obj: clsgs_PaperAttentionEN) => {
        return obj.updUser === value;
      };
    case clsgs_PaperAttentionEN.con_UpdDate:
      return (obj: clsgs_PaperAttentionEN) => {
        return obj.updDate === value;
      };
    case clsgs_PaperAttentionEN.con_Meno:
      return (obj: clsgs_PaperAttentionEN) => {
        return obj.meno === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[gs_PaperAttention]中不存在!(in ${gs_PaperAttention_ConstructorName}.${strThisFuncName})`;
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
 @param strUserId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function gs_PaperAttention_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strUserIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strUserIdClassfy) == true) {
    const strMsg = Format('参数:[strUserIdClassfy]不能为空!(In clsgs_PaperAttentionWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsgs_PaperAttentionEN.con_PaperAttentionId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrgs_PaperAttention = await gs_PaperAttention_GetObjLstCache(strUserIdClassfy);
  if (arrgs_PaperAttention == null) return [];
  let arrgs_PaperAttentionSel = arrgs_PaperAttention;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrgs_PaperAttentionSel.length == 0) return [];
  return arrgs_PaperAttentionSel.map((x) => x.paperAttentionId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_PaperAttention_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
export async function gs_PaperAttention_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
export async function gs_PaperAttention_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsgs_PaperAttentionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

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
      const objgs_PaperAttention = gs_PaperAttention_GetObjFromJsonObj(returnObj);
      return objgs_PaperAttention;
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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
export async function gs_PaperAttention_GetObjLstClientCache(strUserId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsgs_PaperAttentionEN.WhereFormat) == false) {
    strWhereCond = Format(clsgs_PaperAttentionEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("UserId='{0}'", strUserId);
  }
  const strKey = Format('{0}_{1}', clsgs_PaperAttentionEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsgs_PaperAttentionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_PaperAttentionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrgs_PaperAttentionExObjLstCache: Array<clsgs_PaperAttentionEN> =
      CacheHelper.Get(strKey);
    const arrgs_PaperAttentionObjLstT = gs_PaperAttention_GetObjLstByJSONObjLst(
      arrgs_PaperAttentionExObjLstCache,
    );
    return arrgs_PaperAttentionObjLstT;
  }
  try {
    const arrgs_PaperAttentionExObjLst = await gs_PaperAttention_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrgs_PaperAttentionExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_PaperAttentionExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_PaperAttentionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_PaperAttention_ConstructorName,
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
export async function gs_PaperAttention_GetObjLstlocalStorage(strUserId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsgs_PaperAttentionEN.WhereFormat) == false) {
    strWhereCond = Format(clsgs_PaperAttentionEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsgs_PaperAttentionEN.con_UserId, strUserId);
  }
  const strKey = Format('{0}_{1}', clsgs_PaperAttentionEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsgs_PaperAttentionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_PaperAttentionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_PaperAttentionExObjLstCache: Array<clsgs_PaperAttentionEN> =
      JSON.parse(strTempObjLst);
    const arrgs_PaperAttentionObjLstT = gs_PaperAttention_GetObjLstByJSONObjLst(
      arrgs_PaperAttentionExObjLstCache,
    );
    return arrgs_PaperAttentionObjLstT;
  }
  try {
    const arrgs_PaperAttentionExObjLst = await gs_PaperAttention_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrgs_PaperAttentionExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_PaperAttentionExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_PaperAttentionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_PaperAttention_ConstructorName,
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
export async function gs_PaperAttention_GetObjLstlocalStoragePureCache(strUserId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsgs_PaperAttentionEN._CurrTabName, strUserId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_PaperAttentionObjLstCache: Array<clsgs_PaperAttentionEN> =
      JSON.parse(strTempObjLst);
    return arrgs_PaperAttentionObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function gs_PaperAttention_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_PaperAttentionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

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
          gs_PaperAttention_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperAttention_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
export async function gs_PaperAttention_GetObjLstsessionStorage(strUserId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsgs_PaperAttentionEN.WhereFormat) == false) {
    strWhereCond = Format(clsgs_PaperAttentionEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsgs_PaperAttentionEN.con_UserId, strUserId);
  }
  const strKey = Format('{0}_{1}', clsgs_PaperAttentionEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsgs_PaperAttentionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_PaperAttentionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_PaperAttentionExObjLstCache: Array<clsgs_PaperAttentionEN> =
      JSON.parse(strTempObjLst);
    const arrgs_PaperAttentionObjLstT = gs_PaperAttention_GetObjLstByJSONObjLst(
      arrgs_PaperAttentionExObjLstCache,
    );
    return arrgs_PaperAttentionObjLstT;
  }
  try {
    const arrgs_PaperAttentionExObjLst = await gs_PaperAttention_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrgs_PaperAttentionExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_PaperAttentionExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_PaperAttentionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_PaperAttention_ConstructorName,
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
export async function gs_PaperAttention_GetObjLstsessionStoragePureCache(strUserId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsgs_PaperAttentionEN._CurrTabName, strUserId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_PaperAttentionObjLstCache: Array<clsgs_PaperAttentionEN> =
      JSON.parse(strTempObjLst);
    return arrgs_PaperAttentionObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_PaperAttention_GetObjLstCache(
  strUserId: string,
): Promise<Array<clsgs_PaperAttentionEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format(
      '参数:[strUserId]不能为空！(In clsgs_PaperAttentionWApi.gs_PaperAttention_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrgs_PaperAttentionObjLstCache;
  switch (clsgs_PaperAttentionEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_PaperAttentionObjLstCache = await gs_PaperAttention_GetObjLstsessionStorage(strUserId);
      break;
    case '03': //localStorage
      arrgs_PaperAttentionObjLstCache = await gs_PaperAttention_GetObjLstlocalStorage(strUserId);
      break;
    case '02': //ClientCache
      arrgs_PaperAttentionObjLstCache = await gs_PaperAttention_GetObjLstClientCache(strUserId);
      break;
    default:
      arrgs_PaperAttentionObjLstCache = await gs_PaperAttention_GetObjLstClientCache(strUserId);
      break;
  }
  return arrgs_PaperAttentionObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_PaperAttention_GetObjLstPureCache(strUserId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrgs_PaperAttentionObjLstCache;
  switch (clsgs_PaperAttentionEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_PaperAttentionObjLstCache = await gs_PaperAttention_GetObjLstsessionStoragePureCache(
        strUserId,
      );
      break;
    case '03': //localStorage
      arrgs_PaperAttentionObjLstCache = await gs_PaperAttention_GetObjLstlocalStoragePureCache(
        strUserId,
      );
      break;
    case '02': //ClientCache
      arrgs_PaperAttentionObjLstCache = null;
      break;
    default:
      arrgs_PaperAttentionObjLstCache = null;
      break;
  }
  return arrgs_PaperAttentionObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngPaperAttentionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_PaperAttention_GetSubObjLstCache(
  objgs_PaperAttentionCond: clsgs_PaperAttentionEN,
  strUserId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrgs_PaperAttentionObjLstCache = await gs_PaperAttention_GetObjLstCache(strUserId);
  let arrgs_PaperAttentionSel = arrgs_PaperAttentionObjLstCache;
  if (
    objgs_PaperAttentionCond.sfFldComparisonOp == null ||
    objgs_PaperAttentionCond.sfFldComparisonOp == ''
  )
    return arrgs_PaperAttentionSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_PaperAttentionCond.sfFldComparisonOp,
  );
  //console.log("clsgs_PaperAttentionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_PaperAttentionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperAttentionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_PaperAttentionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_PaperAttentionCond),
      gs_PaperAttention_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_PaperAttentionEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPaperAttentionId:关键字列表
 * @returns 对象列表
 **/
export async function gs_PaperAttention_GetObjLstByPaperAttentionIdLstAsync(
  arrPaperAttentionId: Array<string>,
): Promise<Array<clsgs_PaperAttentionEN>> {
  const strThisFuncName = 'GetObjLstByPaperAttentionIdLstAsync';
  const strAction = 'GetObjLstByPaperAttentionIdLst';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPaperAttentionId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_PaperAttention_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperAttention_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
 * @param arrlngPaperAttentionIdLst:关键字列表
 * @returns 对象列表
 */
export async function gs_PaperAttention_GetObjLstByPaperAttentionIdLstCache(
  arrPaperAttentionIdLst: Array<number>,
  strUserId: string,
) {
  const strThisFuncName = 'GetObjLstByPaperAttentionIdLstCache';
  try {
    const arrgs_PaperAttentionObjLstCache = await gs_PaperAttention_GetObjLstCache(strUserId);
    const arrgs_PaperAttentionSel = arrgs_PaperAttentionObjLstCache.filter(
      (x) => arrPaperAttentionIdLst.indexOf(x.paperAttentionId) > -1,
    );
    return arrgs_PaperAttentionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPaperAttentionIdLst.join(','),
      gs_PaperAttention_ConstructorName,
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
export async function gs_PaperAttention_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsgs_PaperAttentionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

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
          gs_PaperAttention_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperAttention_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
export async function gs_PaperAttention_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsgs_PaperAttentionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

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
          gs_PaperAttention_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperAttention_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
export async function gs_PaperAttention_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strUserId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_PaperAttentionEN>();
  const arrgs_PaperAttentionObjLstCache = await gs_PaperAttention_GetObjLstCache(strUserId);
  if (arrgs_PaperAttentionObjLstCache.length == 0) return arrgs_PaperAttentionObjLstCache;
  let arrgs_PaperAttentionSel = arrgs_PaperAttentionObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_PaperAttentionCond = new clsgs_PaperAttentionEN();
  ObjectAssign(objgs_PaperAttentionCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_PaperAttentionWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperAttentionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_PaperAttentionSel.length == 0) return arrgs_PaperAttentionSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.sort(
        gs_PaperAttention_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.sort(objPagerPara.sortFun);
    }
    arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.slice(intStart, intEnd);
    return arrgs_PaperAttentionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_PaperAttention_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_PaperAttentionEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_PaperAttention_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_PaperAttentionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_PaperAttentionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

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
          gs_PaperAttention_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperAttention_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
 * @param lngPaperAttentionId:关键字
 * @returns 获取删除的结果
 **/
export async function gs_PaperAttention_DelRecordAsync(
  lngPaperAttentionId: number,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngPaperAttentionId);

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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
 * @param arrPaperAttentionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function gs_PaperAttention_Delgs_PaperAttentionsAsync(
  arrPaperAttentionId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delgs_PaperAttentionsAsync';
  const strAction = 'Delgs_PaperAttentions';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPaperAttentionId, config);
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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
export async function gs_PaperAttention_Delgs_PaperAttentionsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delgs_PaperAttentionsByCondAsync';
  const strAction = 'Delgs_PaperAttentionsByCond';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
 * @param objgs_PaperAttentionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_PaperAttention_AddNewRecordAsync(
  objgs_PaperAttentionEN: clsgs_PaperAttentionEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objgs_PaperAttentionEN);
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperAttentionEN, config);
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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
 * @param objgs_PaperAttentionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function gs_PaperAttention_AddNewRecordWithReturnKeyAsync(
  objgs_PaperAttentionEN: clsgs_PaperAttentionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperAttentionEN, config);
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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
 * @param objgs_PaperAttentionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function gs_PaperAttention_UpdateRecordAsync(
  objgs_PaperAttentionEN: clsgs_PaperAttentionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objgs_PaperAttentionEN.sfUpdFldSetStr === undefined ||
    objgs_PaperAttentionEN.sfUpdFldSetStr === null ||
    objgs_PaperAttentionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_PaperAttentionEN.paperAttentionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperAttentionEN, config);
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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
 * @param objgs_PaperAttentionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_PaperAttention_UpdateWithConditionAsync(
  objgs_PaperAttentionEN: clsgs_PaperAttentionEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objgs_PaperAttentionEN.sfUpdFldSetStr === undefined ||
    objgs_PaperAttentionEN.sfUpdFldSetStr === null ||
    objgs_PaperAttentionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_PaperAttentionEN.paperAttentionId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);
  objgs_PaperAttentionEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperAttentionEN, config);
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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
 * @param objlngPaperAttentionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_PaperAttention_IsExistRecordCache(
  objgs_PaperAttentionCond: clsgs_PaperAttentionEN,
  strUserId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrgs_PaperAttentionObjLstCache = await gs_PaperAttention_GetObjLstCache(strUserId);
  if (arrgs_PaperAttentionObjLstCache == null) return false;
  let arrgs_PaperAttentionSel = arrgs_PaperAttentionObjLstCache;
  if (
    objgs_PaperAttentionCond.sfFldComparisonOp == null ||
    objgs_PaperAttentionCond.sfFldComparisonOp == ''
  )
    return arrgs_PaperAttentionSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_PaperAttentionCond.sfFldComparisonOp,
  );
  //console.log("clsgs_PaperAttentionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_PaperAttentionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperAttentionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_PaperAttentionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objgs_PaperAttentionCond),
      gs_PaperAttention_ConstructorName,
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
export async function gs_PaperAttention_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
 * @param lngPaperAttentionId:所给的关键字
 * @returns 对象
 */
export async function gs_PaperAttention_IsExistCache(
  lngPaperAttentionId: number,
  strUserId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrgs_PaperAttentionObjLstCache = await gs_PaperAttention_GetObjLstCache(strUserId);
  if (arrgs_PaperAttentionObjLstCache == null) return false;
  try {
    const arrgs_PaperAttentionSel = arrgs_PaperAttentionObjLstCache.filter(
      (x) => x.paperAttentionId == lngPaperAttentionId,
    );
    if (arrgs_PaperAttentionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngPaperAttentionId,
      gs_PaperAttention_ConstructorName,
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
 * @param lngPaperAttentionId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function gs_PaperAttention_IsExistAsync(
  lngPaperAttentionId: number,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngPaperAttentionId,
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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
export async function gs_PaperAttention_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
 * @param objgs_PaperAttentionCond:条件对象
 * @returns 对象列表记录数
 */
export async function gs_PaperAttention_GetRecCountByCondCache(
  objgs_PaperAttentionCond: clsgs_PaperAttentionEN,
  strUserId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrgs_PaperAttentionObjLstCache = await gs_PaperAttention_GetObjLstCache(strUserId);
  if (arrgs_PaperAttentionObjLstCache == null) return 0;
  let arrgs_PaperAttentionSel = arrgs_PaperAttentionObjLstCache;
  if (
    objgs_PaperAttentionCond.sfFldComparisonOp == null ||
    objgs_PaperAttentionCond.sfFldComparisonOp == ''
  )
    return arrgs_PaperAttentionSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_PaperAttentionCond.sfFldComparisonOp,
  );
  //console.log("clsgs_PaperAttentionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_PaperAttentionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperAttentionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperAttentionSel = arrgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_PaperAttentionSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_PaperAttentionCond),
      gs_PaperAttention_ConstructorName,
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
export async function gs_PaperAttention_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gs_PaperAttention_Controller, strAction);

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
        gs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperAttention_ConstructorName,
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
export function gs_PaperAttention_GetWebApiUrl(strController: string, strAction: string): string {
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
export function gs_PaperAttention_ReFreshCache(strUserId: string): void {
  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format(
      '参数:[strUserId]不能为空!(In clsgs_PaperAttentionWApi.clsgs_PaperAttentionWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsgs_PaperAttentionEN._CurrTabName, strUserId);
  switch (clsgs_PaperAttentionEN.CacheModeId) {
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
  vgs_PaperAttention_ReFreshThisCache(strUserId);
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function gs_PaperAttention_ReFreshThisCache(strUserId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsgs_PaperAttentionEN._CurrTabName, strUserId);
    switch (clsgs_PaperAttentionEN.CacheModeId) {
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
export function gs_PaperAttention_CheckPropertyNew(
  pobjgs_PaperAttentionEN: clsgs_PaperAttentionEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjgs_PaperAttentionEN.updUser) === true) {
    throw new Error(
      '(errid:Watl000411)字段[修改人]不能为空(In 论文关注)!(clsgs_PaperAttentionBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.paperId) == false &&
    GetStrLen(pobjgs_PaperAttentionEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 论文关注(gs_PaperAttention))!值:$(pobjgs_PaperAttentionEN.paperId)(clsgs_PaperAttentionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.userId) == false &&
    GetStrLen(pobjgs_PaperAttentionEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 论文关注(gs_PaperAttention))!值:$(pobjgs_PaperAttentionEN.userId)(clsgs_PaperAttentionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.paperGroupId) == false &&
    GetStrLen(pobjgs_PaperAttentionEN.paperGroupId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[组Id(paperGroupId)]的长度不能超过8(In 论文关注(gs_PaperAttention))!值:$(pobjgs_PaperAttentionEN.paperGroupId)(clsgs_PaperAttentionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.updUser) == false &&
    GetStrLen(pobjgs_PaperAttentionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文关注(gs_PaperAttention))!值:$(pobjgs_PaperAttentionEN.updUser)(clsgs_PaperAttentionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.updDate) == false &&
    GetStrLen(pobjgs_PaperAttentionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文关注(gs_PaperAttention))!值:$(pobjgs_PaperAttentionEN.updDate)(clsgs_PaperAttentionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.meno) == false &&
    GetStrLen(pobjgs_PaperAttentionEN.meno) > 2000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(meno)]的长度不能超过2000(In 论文关注(gs_PaperAttention))!值:$(pobjgs_PaperAttentionEN.meno)(clsgs_PaperAttentionBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjgs_PaperAttentionEN.paperAttentionId &&
    undefined !== pobjgs_PaperAttentionEN.paperAttentionId &&
    tzDataType.isNumber(pobjgs_PaperAttentionEN.paperAttentionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文收藏Id(paperAttentionId)]的值:[$(pobjgs_PaperAttentionEN.paperAttentionId)], 非法,应该为数值型(In 论文关注(gs_PaperAttention))!(clsgs_PaperAttentionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.paperId) == false &&
    undefined !== pobjgs_PaperAttentionEN.paperId &&
    tzDataType.isString(pobjgs_PaperAttentionEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjgs_PaperAttentionEN.paperId)], 非法,应该为字符型(In 论文关注(gs_PaperAttention))!(clsgs_PaperAttentionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.userId) == false &&
    undefined !== pobjgs_PaperAttentionEN.userId &&
    tzDataType.isString(pobjgs_PaperAttentionEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户ID(userId)]的值:[$(pobjgs_PaperAttentionEN.userId)], 非法,应该为字符型(In 论文关注(gs_PaperAttention))!(clsgs_PaperAttentionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.paperGroupId) == false &&
    undefined !== pobjgs_PaperAttentionEN.paperGroupId &&
    tzDataType.isString(pobjgs_PaperAttentionEN.paperGroupId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[组Id(paperGroupId)]的值:[$(pobjgs_PaperAttentionEN.paperGroupId)], 非法,应该为字符型(In 论文关注(gs_PaperAttention))!(clsgs_PaperAttentionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.updUser) == false &&
    undefined !== pobjgs_PaperAttentionEN.updUser &&
    tzDataType.isString(pobjgs_PaperAttentionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_PaperAttentionEN.updUser)], 非法,应该为字符型(In 论文关注(gs_PaperAttention))!(clsgs_PaperAttentionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.updDate) == false &&
    undefined !== pobjgs_PaperAttentionEN.updDate &&
    tzDataType.isString(pobjgs_PaperAttentionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_PaperAttentionEN.updDate)], 非法,应该为字符型(In 论文关注(gs_PaperAttention))!(clsgs_PaperAttentionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.meno) == false &&
    undefined !== pobjgs_PaperAttentionEN.meno &&
    tzDataType.isString(pobjgs_PaperAttentionEN.meno) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(meno)]的值:[$(pobjgs_PaperAttentionEN.meno)], 非法,应该为字符型(In 论文关注(gs_PaperAttention))!(clsgs_PaperAttentionBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_PaperAttention_CheckProperty4Update(
  pobjgs_PaperAttentionEN: clsgs_PaperAttentionEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.paperId) == false &&
    GetStrLen(pobjgs_PaperAttentionEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 论文关注(gs_PaperAttention))!值:$(pobjgs_PaperAttentionEN.paperId)(clsgs_PaperAttentionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.userId) == false &&
    GetStrLen(pobjgs_PaperAttentionEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 论文关注(gs_PaperAttention))!值:$(pobjgs_PaperAttentionEN.userId)(clsgs_PaperAttentionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.paperGroupId) == false &&
    GetStrLen(pobjgs_PaperAttentionEN.paperGroupId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[组Id(paperGroupId)]的长度不能超过8(In 论文关注(gs_PaperAttention))!值:$(pobjgs_PaperAttentionEN.paperGroupId)(clsgs_PaperAttentionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.updUser) == false &&
    GetStrLen(pobjgs_PaperAttentionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文关注(gs_PaperAttention))!值:$(pobjgs_PaperAttentionEN.updUser)(clsgs_PaperAttentionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.updDate) == false &&
    GetStrLen(pobjgs_PaperAttentionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文关注(gs_PaperAttention))!值:$(pobjgs_PaperAttentionEN.updDate)(clsgs_PaperAttentionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.meno) == false &&
    GetStrLen(pobjgs_PaperAttentionEN.meno) > 2000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(meno)]的长度不能超过2000(In 论文关注(gs_PaperAttention))!值:$(pobjgs_PaperAttentionEN.meno)(clsgs_PaperAttentionBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjgs_PaperAttentionEN.paperAttentionId &&
    undefined !== pobjgs_PaperAttentionEN.paperAttentionId &&
    tzDataType.isNumber(pobjgs_PaperAttentionEN.paperAttentionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文收藏Id(paperAttentionId)]的值:[$(pobjgs_PaperAttentionEN.paperAttentionId)], 非法,应该为数值型(In 论文关注(gs_PaperAttention))!(clsgs_PaperAttentionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.paperId) == false &&
    undefined !== pobjgs_PaperAttentionEN.paperId &&
    tzDataType.isString(pobjgs_PaperAttentionEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjgs_PaperAttentionEN.paperId)], 非法,应该为字符型(In 论文关注(gs_PaperAttention))!(clsgs_PaperAttentionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.userId) == false &&
    undefined !== pobjgs_PaperAttentionEN.userId &&
    tzDataType.isString(pobjgs_PaperAttentionEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户ID(userId)]的值:[$(pobjgs_PaperAttentionEN.userId)], 非法,应该为字符型(In 论文关注(gs_PaperAttention))!(clsgs_PaperAttentionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.paperGroupId) == false &&
    undefined !== pobjgs_PaperAttentionEN.paperGroupId &&
    tzDataType.isString(pobjgs_PaperAttentionEN.paperGroupId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[组Id(paperGroupId)]的值:[$(pobjgs_PaperAttentionEN.paperGroupId)], 非法,应该为字符型(In 论文关注(gs_PaperAttention))!(clsgs_PaperAttentionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.updUser) == false &&
    undefined !== pobjgs_PaperAttentionEN.updUser &&
    tzDataType.isString(pobjgs_PaperAttentionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_PaperAttentionEN.updUser)], 非法,应该为字符型(In 论文关注(gs_PaperAttention))!(clsgs_PaperAttentionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.updDate) == false &&
    undefined !== pobjgs_PaperAttentionEN.updDate &&
    tzDataType.isString(pobjgs_PaperAttentionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_PaperAttentionEN.updDate)], 非法,应该为字符型(In 论文关注(gs_PaperAttention))!(clsgs_PaperAttentionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperAttentionEN.meno) == false &&
    undefined !== pobjgs_PaperAttentionEN.meno &&
    tzDataType.isString(pobjgs_PaperAttentionEN.meno) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(meno)]的值:[$(pobjgs_PaperAttentionEN.meno)], 非法,应该为字符型(In 论文关注(gs_PaperAttention))!(clsgs_PaperAttentionBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjgs_PaperAttentionEN.paperAttentionId ||
    (pobjgs_PaperAttentionEN.paperAttentionId != null &&
      pobjgs_PaperAttentionEN.paperAttentionId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[论文收藏Id]不能为空(In 论文关注)!(clsgs_PaperAttentionBL:CheckProperty4Update)',
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
export function gs_PaperAttention_GetJSONStrByObj(
  pobjgs_PaperAttentionEN: clsgs_PaperAttentionEN,
): string {
  pobjgs_PaperAttentionEN.sfUpdFldSetStr = pobjgs_PaperAttentionEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjgs_PaperAttentionEN);
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
export function gs_PaperAttention_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsgs_PaperAttentionEN> {
  let arrgs_PaperAttentionObjLst = new Array<clsgs_PaperAttentionEN>();
  if (strJSON === '') {
    return arrgs_PaperAttentionObjLst;
  }
  try {
    arrgs_PaperAttentionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrgs_PaperAttentionObjLst;
  }
  return arrgs_PaperAttentionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_PaperAttentionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function gs_PaperAttention_GetObjLstByJSONObjLst(
  arrgs_PaperAttentionObjLstS: Array<clsgs_PaperAttentionEN>,
): Array<clsgs_PaperAttentionEN> {
  const arrgs_PaperAttentionObjLst = new Array<clsgs_PaperAttentionEN>();
  for (const objInFor of arrgs_PaperAttentionObjLstS) {
    const obj1 = gs_PaperAttention_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrgs_PaperAttentionObjLst.push(obj1);
  }
  return arrgs_PaperAttentionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_PaperAttention_GetObjByJSONStr(strJSON: string): clsgs_PaperAttentionEN {
  let pobjgs_PaperAttentionEN = new clsgs_PaperAttentionEN();
  if (strJSON === '') {
    return pobjgs_PaperAttentionEN;
  }
  try {
    pobjgs_PaperAttentionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjgs_PaperAttentionEN;
  }
  return pobjgs_PaperAttentionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function gs_PaperAttention_GetCombineCondition(
  objgs_PaperAttentionCond: clsgs_PaperAttentionEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperAttentionCond.dicFldComparisonOp,
      clsgs_PaperAttentionEN.con_PaperAttentionId,
    ) == true
  ) {
    const strComparisonOpPaperAttentionId: string =
      objgs_PaperAttentionCond.dicFldComparisonOp[clsgs_PaperAttentionEN.con_PaperAttentionId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_PaperAttentionEN.con_PaperAttentionId,
      objgs_PaperAttentionCond.paperAttentionId,
      strComparisonOpPaperAttentionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperAttentionCond.dicFldComparisonOp,
      clsgs_PaperAttentionEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objgs_PaperAttentionCond.dicFldComparisonOp[clsgs_PaperAttentionEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperAttentionEN.con_PaperId,
      objgs_PaperAttentionCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperAttentionCond.dicFldComparisonOp,
      clsgs_PaperAttentionEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objgs_PaperAttentionCond.dicFldComparisonOp[clsgs_PaperAttentionEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperAttentionEN.con_UserId,
      objgs_PaperAttentionCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperAttentionCond.dicFldComparisonOp,
      clsgs_PaperAttentionEN.con_PaperGroupId,
    ) == true
  ) {
    const strComparisonOpPaperGroupId: string =
      objgs_PaperAttentionCond.dicFldComparisonOp[clsgs_PaperAttentionEN.con_PaperGroupId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperAttentionEN.con_PaperGroupId,
      objgs_PaperAttentionCond.paperGroupId,
      strComparisonOpPaperGroupId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperAttentionCond.dicFldComparisonOp,
      clsgs_PaperAttentionEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objgs_PaperAttentionCond.dicFldComparisonOp[clsgs_PaperAttentionEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperAttentionEN.con_UpdUser,
      objgs_PaperAttentionCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperAttentionCond.dicFldComparisonOp,
      clsgs_PaperAttentionEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objgs_PaperAttentionCond.dicFldComparisonOp[clsgs_PaperAttentionEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperAttentionEN.con_UpdDate,
      objgs_PaperAttentionCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperAttentionCond.dicFldComparisonOp,
      clsgs_PaperAttentionEN.con_Meno,
    ) == true
  ) {
    const strComparisonOpMeno: string =
      objgs_PaperAttentionCond.dicFldComparisonOp[clsgs_PaperAttentionEN.con_Meno];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperAttentionEN.con_Meno,
      objgs_PaperAttentionCond.meno,
      strComparisonOpMeno,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_PaperAttention(论文关注),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_PaperAttention_GetUniCondStr(
  objgs_PaperAttentionEN: clsgs_PaperAttentionEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PaperId = '{0}'", objgs_PaperAttentionEN.paperId);
  strWhereCond += Format(" and UserId = '{0}'", objgs_PaperAttentionEN.userId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_PaperAttention(论文关注),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_PaperAttention_GetUniCondStr4Update(
  objgs_PaperAttentionEN: clsgs_PaperAttentionEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PaperAttentionId <> '{0}'", objgs_PaperAttentionEN.paperAttentionId);
  strWhereCond += Format(" and PaperId = '{0}'", objgs_PaperAttentionEN.paperId);
  strWhereCond += Format(" and UserId = '{0}'", objgs_PaperAttentionEN.userId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_PaperAttentionENS:源对象
 * @param objgs_PaperAttentionENT:目标对象
 */
export function gs_PaperAttention_CopyObjTo(
  objgs_PaperAttentionENS: clsgs_PaperAttentionEN,
  objgs_PaperAttentionENT: clsgs_PaperAttentionEN,
): void {
  objgs_PaperAttentionENT.paperAttentionId = objgs_PaperAttentionENS.paperAttentionId; //论文收藏Id
  objgs_PaperAttentionENT.paperId = objgs_PaperAttentionENS.paperId; //论文Id
  objgs_PaperAttentionENT.userId = objgs_PaperAttentionENS.userId; //用户ID
  objgs_PaperAttentionENT.paperGroupId = objgs_PaperAttentionENS.paperGroupId; //组Id
  objgs_PaperAttentionENT.updUser = objgs_PaperAttentionENS.updUser; //修改人
  objgs_PaperAttentionENT.updDate = objgs_PaperAttentionENS.updDate; //修改日期
  objgs_PaperAttentionENT.meno = objgs_PaperAttentionENS.meno; //备注
  objgs_PaperAttentionENT.sfUpdFldSetStr = objgs_PaperAttentionENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_PaperAttentionENS:源对象
 * @param objgs_PaperAttentionENT:目标对象
 */
export function gs_PaperAttention_GetObjFromJsonObj(
  objgs_PaperAttentionENS: clsgs_PaperAttentionEN,
): clsgs_PaperAttentionEN {
  const objgs_PaperAttentionENT: clsgs_PaperAttentionEN = new clsgs_PaperAttentionEN();
  ObjectAssign(objgs_PaperAttentionENT, objgs_PaperAttentionENS);
  return objgs_PaperAttentionENT;
}
