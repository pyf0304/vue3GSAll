/**
 * 类名:clsgs_PaperDiscussWApi
 * 表名:gs_PaperDiscuss(01120681)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:25
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
 * 论文讨论表(gs_PaperDiscuss)
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
import { clsgs_PaperDiscussEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperDiscussEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gs_PaperDiscuss_Controller = 'gs_PaperDiscussApi';
export const gs_PaperDiscuss_ConstructorName = 'gs_PaperDiscuss';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDiscussId:关键字
 * @returns 对象
 **/
export async function gs_PaperDiscuss_GetObjByDiscussIdAsync(
  strDiscussId: string,
): Promise<clsgs_PaperDiscussEN | null> {
  const strThisFuncName = 'GetObjByDiscussIdAsync';

  if (IsNullOrEmpty(strDiscussId) == true) {
    const strMsg = Format(
      '参数:[strDiscussId]不能为空!(In clsgs_PaperDiscussWApi.GetObjByDiscussIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDiscussId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strDiscussId]的长度:[{0}]不正确!(clsgs_PaperDiscussWApi.GetObjByDiscussIdAsync)',
      strDiscussId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDiscussId';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDiscussId,
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
      const objgs_PaperDiscuss = gs_PaperDiscuss_GetObjFromJsonObj(returnObj);
      return objgs_PaperDiscuss;
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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
 * @param strDiscussId:所给的关键字
 * @returns 对象
 */
export async function gs_PaperDiscuss_GetObjByDiscussIdCache(
  strDiscussId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDiscussIdCache';

  if (IsNullOrEmpty(strDiscussId) == true) {
    const strMsg = Format(
      '参数:[strDiscussId]不能为空!(In clsgs_PaperDiscussWApi.GetObjByDiscussIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDiscussId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strDiscussId]的长度:[{0}]不正确!(clsgs_PaperDiscussWApi.GetObjByDiscussIdCache)',
      strDiscussId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_PaperDiscussObjLstCache = await gs_PaperDiscuss_GetObjLstCache();
  try {
    const arrgs_PaperDiscussSel = arrgs_PaperDiscussObjLstCache.filter(
      (x) => x.discussId == strDiscussId,
    );
    let objgs_PaperDiscuss: clsgs_PaperDiscussEN;
    if (arrgs_PaperDiscussSel.length > 0) {
      objgs_PaperDiscuss = arrgs_PaperDiscussSel[0];
      return objgs_PaperDiscuss;
    } else {
      if (bolTryAsyncOnce == true) {
        const objgs_PaperDiscussConst = await gs_PaperDiscuss_GetObjByDiscussIdAsync(strDiscussId);
        if (objgs_PaperDiscussConst != null) {
          gs_PaperDiscuss_ReFreshThisCache();
          return objgs_PaperDiscussConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDiscussId,
      gs_PaperDiscuss_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strDiscussId:所给的关键字
 * @returns 对象
 */
export async function gs_PaperDiscuss_GetObjByDiscussIdlocalStorage(strDiscussId: string) {
  const strThisFuncName = 'GetObjByDiscussIdlocalStorage';

  if (IsNullOrEmpty(strDiscussId) == true) {
    const strMsg = Format(
      '参数:[strDiscussId]不能为空!(In clsgs_PaperDiscussWApi.GetObjByDiscussIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDiscussId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strDiscussId]的长度:[{0}]不正确!(clsgs_PaperDiscussWApi.GetObjByDiscussIdlocalStorage)',
      strDiscussId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsgs_PaperDiscussEN._CurrTabName, strDiscussId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objgs_PaperDiscussCache: clsgs_PaperDiscussEN = JSON.parse(strTempObj);
    return objgs_PaperDiscussCache;
  }
  try {
    const objgs_PaperDiscuss = await gs_PaperDiscuss_GetObjByDiscussIdAsync(strDiscussId);
    if (objgs_PaperDiscuss != null) {
      localStorage.setItem(strKey, JSON.stringify(objgs_PaperDiscuss));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objgs_PaperDiscuss;
    }
    return objgs_PaperDiscuss;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDiscussId,
      gs_PaperDiscuss_ConstructorName,
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
 * @param objgs_PaperDiscuss:所给的对象
 * @returns 对象
 */
export async function gs_PaperDiscuss_UpdateObjInLstCache(
  objgs_PaperDiscuss: clsgs_PaperDiscussEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrgs_PaperDiscussObjLstCache = await gs_PaperDiscuss_GetObjLstCache();
    const obj = arrgs_PaperDiscussObjLstCache.find(
      (x) => x.discussId == objgs_PaperDiscuss.discussId,
    );
    if (obj != null) {
      objgs_PaperDiscuss.discussId = obj.discussId;
      ObjectAssign(obj, objgs_PaperDiscuss);
    } else {
      arrgs_PaperDiscussObjLstCache.push(objgs_PaperDiscuss);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsgs_PaperDiscussEN.con_DiscussId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsgs_PaperDiscussEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsgs_PaperDiscussEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strDiscussId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objgs_PaperDiscuss = await gs_PaperDiscuss_GetObjByDiscussIdCache(strDiscussId);
  if (objgs_PaperDiscuss == null) return '';
  if (objgs_PaperDiscuss.GetFldValue(strOutFldName) == null) return '';
  return objgs_PaperDiscuss.GetFldValue(strOutFldName).toString();
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
export function gs_PaperDiscuss_SortFunDefa(
  a: clsgs_PaperDiscussEN,
  b: clsgs_PaperDiscussEN,
): number {
  return a.discussId.localeCompare(b.discussId);
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
export function gs_PaperDiscuss_SortFunDefa2Fld(
  a: clsgs_PaperDiscussEN,
  b: clsgs_PaperDiscussEN,
): number {
  if (a.discussContent == b.discussContent) return a.paperId.localeCompare(b.paperId);
  else return a.discussContent.localeCompare(b.discussContent);
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
export function gs_PaperDiscuss_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_PaperDiscussEN.con_DiscussId:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return a.discussId.localeCompare(b.discussId);
        };
      case clsgs_PaperDiscussEN.con_DiscussContent:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return a.discussContent.localeCompare(b.discussContent);
        };
      case clsgs_PaperDiscussEN.con_PaperId:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return a.paperId.localeCompare(b.paperId);
        };
      case clsgs_PaperDiscussEN.con_ParentId:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return a.parentId.localeCompare(b.parentId);
        };
      case clsgs_PaperDiscussEN.con_Score:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return a.score - b.score;
        };
      case clsgs_PaperDiscussEN.con_ScoreType:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          if (a.scoreType == null) return -1;
          if (b.scoreType == null) return 1;
          return a.scoreType.localeCompare(b.scoreType);
        };
      case clsgs_PaperDiscussEN.con_DiscussTypeId:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return a.discussTypeId.localeCompare(b.discussTypeId);
        };
      case clsgs_PaperDiscussEN.con_UserId:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsgs_PaperDiscussEN.con_VoteCount:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return a.voteCount - b.voteCount;
        };
      case clsgs_PaperDiscussEN.con_UpdUser:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsgs_PaperDiscussEN.con_UpdDate:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsgs_PaperDiscussEN.con_IdCurrEduCls:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsgs_PaperDiscussEN.con_Memo:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_PaperDiscuss]中不存在!(in ${gs_PaperDiscuss_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsgs_PaperDiscussEN.con_DiscussId:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return b.discussId.localeCompare(a.discussId);
        };
      case clsgs_PaperDiscussEN.con_DiscussContent:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return b.discussContent.localeCompare(a.discussContent);
        };
      case clsgs_PaperDiscussEN.con_PaperId:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return b.paperId.localeCompare(a.paperId);
        };
      case clsgs_PaperDiscussEN.con_ParentId:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return b.parentId.localeCompare(a.parentId);
        };
      case clsgs_PaperDiscussEN.con_Score:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return b.score - a.score;
        };
      case clsgs_PaperDiscussEN.con_ScoreType:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          if (b.scoreType == null) return -1;
          if (a.scoreType == null) return 1;
          return b.scoreType.localeCompare(a.scoreType);
        };
      case clsgs_PaperDiscussEN.con_DiscussTypeId:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return b.discussTypeId.localeCompare(a.discussTypeId);
        };
      case clsgs_PaperDiscussEN.con_UserId:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsgs_PaperDiscussEN.con_VoteCount:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return b.voteCount - a.voteCount;
        };
      case clsgs_PaperDiscussEN.con_UpdUser:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsgs_PaperDiscussEN.con_UpdDate:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsgs_PaperDiscussEN.con_IdCurrEduCls:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsgs_PaperDiscussEN.con_Memo:
        return (a: clsgs_PaperDiscussEN, b: clsgs_PaperDiscussEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_PaperDiscuss]中不存在!(in ${gs_PaperDiscuss_ConstructorName}.${strThisFuncName})`;
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
export async function gs_PaperDiscuss_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_PaperDiscussEN.con_DiscussId:
      return (obj: clsgs_PaperDiscussEN) => {
        return obj.discussId === value;
      };
    case clsgs_PaperDiscussEN.con_DiscussContent:
      return (obj: clsgs_PaperDiscussEN) => {
        return obj.discussContent === value;
      };
    case clsgs_PaperDiscussEN.con_PaperId:
      return (obj: clsgs_PaperDiscussEN) => {
        return obj.paperId === value;
      };
    case clsgs_PaperDiscussEN.con_ParentId:
      return (obj: clsgs_PaperDiscussEN) => {
        return obj.parentId === value;
      };
    case clsgs_PaperDiscussEN.con_Score:
      return (obj: clsgs_PaperDiscussEN) => {
        return obj.score === value;
      };
    case clsgs_PaperDiscussEN.con_ScoreType:
      return (obj: clsgs_PaperDiscussEN) => {
        return obj.scoreType === value;
      };
    case clsgs_PaperDiscussEN.con_DiscussTypeId:
      return (obj: clsgs_PaperDiscussEN) => {
        return obj.discussTypeId === value;
      };
    case clsgs_PaperDiscussEN.con_UserId:
      return (obj: clsgs_PaperDiscussEN) => {
        return obj.userId === value;
      };
    case clsgs_PaperDiscussEN.con_VoteCount:
      return (obj: clsgs_PaperDiscussEN) => {
        return obj.voteCount === value;
      };
    case clsgs_PaperDiscussEN.con_UpdUser:
      return (obj: clsgs_PaperDiscussEN) => {
        return obj.updUser === value;
      };
    case clsgs_PaperDiscussEN.con_UpdDate:
      return (obj: clsgs_PaperDiscussEN) => {
        return obj.updDate === value;
      };
    case clsgs_PaperDiscussEN.con_IdCurrEduCls:
      return (obj: clsgs_PaperDiscussEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsgs_PaperDiscussEN.con_Memo:
      return (obj: clsgs_PaperDiscussEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[gs_PaperDiscuss]中不存在!(in ${gs_PaperDiscuss_ConstructorName}.${strThisFuncName})`;
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
export async function gs_PaperDiscuss_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsgs_PaperDiscussEN.con_DiscussId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrgs_PaperDiscuss = await gs_PaperDiscuss_GetObjLstCache();
  if (arrgs_PaperDiscuss == null) return [];
  let arrgs_PaperDiscussSel = arrgs_PaperDiscuss;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrgs_PaperDiscussSel.length == 0) return [];
  return arrgs_PaperDiscussSel.map((x) => x.discussId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_PaperDiscuss_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsgs_PaperDiscussEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

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
      const objgs_PaperDiscuss = gs_PaperDiscuss_GetObjFromJsonObj(returnObj);
      return objgs_PaperDiscuss;
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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_PaperDiscussEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_PaperDiscussEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_PaperDiscussEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrgs_PaperDiscussExObjLstCache: Array<clsgs_PaperDiscussEN> = CacheHelper.Get(strKey);
    const arrgs_PaperDiscussObjLstT = gs_PaperDiscuss_GetObjLstByJSONObjLst(
      arrgs_PaperDiscussExObjLstCache,
    );
    return arrgs_PaperDiscussObjLstT;
  }
  try {
    const arrgs_PaperDiscussExObjLst = await gs_PaperDiscuss_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrgs_PaperDiscussExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_PaperDiscussExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_PaperDiscussExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_PaperDiscussEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_PaperDiscussEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_PaperDiscussEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_PaperDiscussExObjLstCache: Array<clsgs_PaperDiscussEN> = JSON.parse(strTempObjLst);
    const arrgs_PaperDiscussObjLstT = gs_PaperDiscuss_GetObjLstByJSONObjLst(
      arrgs_PaperDiscussExObjLstCache,
    );
    return arrgs_PaperDiscussObjLstT;
  }
  try {
    const arrgs_PaperDiscussExObjLst = await gs_PaperDiscuss_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrgs_PaperDiscussExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_PaperDiscussExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_PaperDiscussExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_PaperDiscussEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_PaperDiscussObjLstCache: Array<clsgs_PaperDiscussEN> = JSON.parse(strTempObjLst);
    return arrgs_PaperDiscussObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function gs_PaperDiscuss_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_PaperDiscussEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

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
          gs_PaperDiscuss_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperDiscuss_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_PaperDiscussEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_PaperDiscussEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_PaperDiscussEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_PaperDiscussExObjLstCache: Array<clsgs_PaperDiscussEN> = JSON.parse(strTempObjLst);
    const arrgs_PaperDiscussObjLstT = gs_PaperDiscuss_GetObjLstByJSONObjLst(
      arrgs_PaperDiscussExObjLstCache,
    );
    return arrgs_PaperDiscussObjLstT;
  }
  try {
    const arrgs_PaperDiscussExObjLst = await gs_PaperDiscuss_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrgs_PaperDiscussExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_PaperDiscussExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_PaperDiscussExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_PaperDiscussEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_PaperDiscussObjLstCache: Array<clsgs_PaperDiscussEN> = JSON.parse(strTempObjLst);
    return arrgs_PaperDiscussObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_PaperDiscuss_GetObjLstCache(): Promise<Array<clsgs_PaperDiscussEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrgs_PaperDiscussObjLstCache;
  switch (clsgs_PaperDiscussEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_PaperDiscussObjLstCache = await gs_PaperDiscuss_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrgs_PaperDiscussObjLstCache = await gs_PaperDiscuss_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrgs_PaperDiscussObjLstCache = await gs_PaperDiscuss_GetObjLstClientCache();
      break;
    default:
      arrgs_PaperDiscussObjLstCache = await gs_PaperDiscuss_GetObjLstClientCache();
      break;
  }
  return arrgs_PaperDiscussObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_PaperDiscuss_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrgs_PaperDiscussObjLstCache;
  switch (clsgs_PaperDiscussEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_PaperDiscussObjLstCache = await gs_PaperDiscuss_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrgs_PaperDiscussObjLstCache = await gs_PaperDiscuss_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrgs_PaperDiscussObjLstCache = null;
      break;
    default:
      arrgs_PaperDiscussObjLstCache = null;
      break;
  }
  return arrgs_PaperDiscussObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrDiscussIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_PaperDiscuss_GetSubObjLstCache(
  objgs_PaperDiscussCond: clsgs_PaperDiscussEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrgs_PaperDiscussObjLstCache = await gs_PaperDiscuss_GetObjLstCache();
  let arrgs_PaperDiscussSel = arrgs_PaperDiscussObjLstCache;
  if (
    objgs_PaperDiscussCond.sfFldComparisonOp == null ||
    objgs_PaperDiscussCond.sfFldComparisonOp == ''
  )
    return arrgs_PaperDiscussSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_PaperDiscussCond.sfFldComparisonOp,
  );
  //console.log("clsgs_PaperDiscussWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_PaperDiscussCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperDiscussCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_PaperDiscussSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_PaperDiscussCond),
      gs_PaperDiscuss_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_PaperDiscussEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDiscussId:关键字列表
 * @returns 对象列表
 **/
export async function gs_PaperDiscuss_GetObjLstByDiscussIdLstAsync(
  arrDiscussId: Array<string>,
): Promise<Array<clsgs_PaperDiscussEN>> {
  const strThisFuncName = 'GetObjLstByDiscussIdLstAsync';
  const strAction = 'GetObjLstByDiscussIdLst';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDiscussId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_PaperDiscuss_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperDiscuss_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
 * @param arrstrDiscussIdLst:关键字列表
 * @returns 对象列表
 */
export async function gs_PaperDiscuss_GetObjLstByDiscussIdLstCache(arrDiscussIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByDiscussIdLstCache';
  try {
    const arrgs_PaperDiscussObjLstCache = await gs_PaperDiscuss_GetObjLstCache();
    const arrgs_PaperDiscussSel = arrgs_PaperDiscussObjLstCache.filter(
      (x) => arrDiscussIdLst.indexOf(x.discussId) > -1,
    );
    return arrgs_PaperDiscussSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrDiscussIdLst.join(','),
      gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsgs_PaperDiscussEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

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
          gs_PaperDiscuss_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperDiscuss_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsgs_PaperDiscussEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

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
          gs_PaperDiscuss_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperDiscuss_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_PaperDiscussEN>();
  const arrgs_PaperDiscussObjLstCache = await gs_PaperDiscuss_GetObjLstCache();
  if (arrgs_PaperDiscussObjLstCache.length == 0) return arrgs_PaperDiscussObjLstCache;
  let arrgs_PaperDiscussSel = arrgs_PaperDiscussObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_PaperDiscussCond = new clsgs_PaperDiscussEN();
  ObjectAssign(objgs_PaperDiscussCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_PaperDiscussWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperDiscussCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_PaperDiscussSel.length == 0) return arrgs_PaperDiscussSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.sort(
        gs_PaperDiscuss_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.sort(objPagerPara.sortFun);
    }
    arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.slice(intStart, intEnd);
    return arrgs_PaperDiscussSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_PaperDiscuss_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_PaperDiscussEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_PaperDiscuss_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_PaperDiscussEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_PaperDiscussEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

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
          gs_PaperDiscuss_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperDiscuss_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
 * @param strDiscussId:关键字
 * @returns 获取删除的结果
 **/
export async function gs_PaperDiscuss_DelRecordAsync(strDiscussId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDiscussId);

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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
 * @param arrDiscussId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function gs_PaperDiscuss_Delgs_PaperDiscusssAsync(
  arrDiscussId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delgs_PaperDiscusssAsync';
  const strAction = 'Delgs_PaperDiscusss';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDiscussId, config);
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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_Delgs_PaperDiscusssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delgs_PaperDiscusssByCondAsync';
  const strAction = 'Delgs_PaperDiscusssByCond';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
 * @param objgs_PaperDiscussEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_PaperDiscuss_AddNewRecordAsync(
  objgs_PaperDiscussEN: clsgs_PaperDiscussEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objgs_PaperDiscussEN);
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperDiscussEN, config);
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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
 * @param objgs_PaperDiscussEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_PaperDiscuss_AddNewRecordWithMaxIdAsync(
  objgs_PaperDiscussEN: clsgs_PaperDiscussEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperDiscussEN, config);
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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
 * @param objgs_PaperDiscussEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function gs_PaperDiscuss_AddNewRecordWithReturnKeyAsync(
  objgs_PaperDiscussEN: clsgs_PaperDiscussEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperDiscussEN, config);
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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
 * @param objgs_PaperDiscussEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function gs_PaperDiscuss_UpdateRecordAsync(
  objgs_PaperDiscussEN: clsgs_PaperDiscussEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objgs_PaperDiscussEN.sfUpdFldSetStr === undefined ||
    objgs_PaperDiscussEN.sfUpdFldSetStr === null ||
    objgs_PaperDiscussEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_PaperDiscussEN.discussId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperDiscussEN, config);
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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
 * @param objgs_PaperDiscussEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_PaperDiscuss_UpdateWithConditionAsync(
  objgs_PaperDiscussEN: clsgs_PaperDiscussEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objgs_PaperDiscussEN.sfUpdFldSetStr === undefined ||
    objgs_PaperDiscussEN.sfUpdFldSetStr === null ||
    objgs_PaperDiscussEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_PaperDiscussEN.discussId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);
  objgs_PaperDiscussEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperDiscussEN, config);
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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
 * @param objstrDiscussIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_PaperDiscuss_IsExistRecordCache(
  objgs_PaperDiscussCond: clsgs_PaperDiscussEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrgs_PaperDiscussObjLstCache = await gs_PaperDiscuss_GetObjLstCache();
  if (arrgs_PaperDiscussObjLstCache == null) return false;
  let arrgs_PaperDiscussSel = arrgs_PaperDiscussObjLstCache;
  if (
    objgs_PaperDiscussCond.sfFldComparisonOp == null ||
    objgs_PaperDiscussCond.sfFldComparisonOp == ''
  )
    return arrgs_PaperDiscussSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_PaperDiscussCond.sfFldComparisonOp,
  );
  //console.log("clsgs_PaperDiscussWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_PaperDiscussCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperDiscussCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_PaperDiscussSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objgs_PaperDiscussCond),
      gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
 * @param strDiscussId:所给的关键字
 * @returns 对象
 */
export async function gs_PaperDiscuss_IsExistCache(strDiscussId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrgs_PaperDiscussObjLstCache = await gs_PaperDiscuss_GetObjLstCache();
  if (arrgs_PaperDiscussObjLstCache == null) return false;
  try {
    const arrgs_PaperDiscussSel = arrgs_PaperDiscussObjLstCache.filter(
      (x) => x.discussId == strDiscussId,
    );
    if (arrgs_PaperDiscussSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strDiscussId,
      gs_PaperDiscuss_ConstructorName,
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
 * @param strDiscussId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function gs_PaperDiscuss_IsExistAsync(strDiscussId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDiscussId,
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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
 * @param objgs_PaperDiscussCond:条件对象
 * @returns 对象列表记录数
 */
export async function gs_PaperDiscuss_GetRecCountByCondCache(
  objgs_PaperDiscussCond: clsgs_PaperDiscussEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrgs_PaperDiscussObjLstCache = await gs_PaperDiscuss_GetObjLstCache();
  if (arrgs_PaperDiscussObjLstCache == null) return 0;
  let arrgs_PaperDiscussSel = arrgs_PaperDiscussObjLstCache;
  if (
    objgs_PaperDiscussCond.sfFldComparisonOp == null ||
    objgs_PaperDiscussCond.sfFldComparisonOp == ''
  )
    return arrgs_PaperDiscussSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_PaperDiscussCond.sfFldComparisonOp,
  );
  //console.log("clsgs_PaperDiscussWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_PaperDiscussCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperDiscussCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperDiscussSel = arrgs_PaperDiscussSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_PaperDiscussSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_PaperDiscussCond),
      gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
export async function gs_PaperDiscuss_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gs_PaperDiscuss_Controller, strAction);

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
        gs_PaperDiscuss_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperDiscuss_ConstructorName,
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
export function gs_PaperDiscuss_GetWebApiUrl(strController: string, strAction: string): string {
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
export function gs_PaperDiscuss_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsgs_PaperDiscussEN._CurrTabName;
  switch (clsgs_PaperDiscussEN.CacheModeId) {
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
export function gs_PaperDiscuss_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsgs_PaperDiscussEN._CurrTabName;
    switch (clsgs_PaperDiscussEN.CacheModeId) {
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
export function gs_PaperDiscuss_CheckPropertyNew(pobjgs_PaperDiscussEN: clsgs_PaperDiscussEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjgs_PaperDiscussEN.discussContent) === true) {
    throw new Error(
      '(errid:Watl000411)字段[讨论内容]不能为空(In 论文讨论表)!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.paperId) === true ||
    pobjgs_PaperDiscussEN.paperId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[论文Id]不能为空(In 论文讨论表)!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjgs_PaperDiscussEN.parentId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[父节点Id]不能为空(In 论文讨论表)!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjgs_PaperDiscussEN.discussTypeId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[讨论类型Id]不能为空(In 论文讨论表)!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.idCurrEduCls) === true ||
    pobjgs_PaperDiscussEN.idCurrEduCls.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[教学班流水号]不能为空(In 论文讨论表)!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.discussId) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.discussId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[讨论ID(discussId)]的长度不能超过10(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.discussId)(clsgs_PaperDiscussBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.discussContent) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.discussContent) > 2000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[讨论内容(discussContent)]的长度不能超过2000(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.discussContent)(clsgs_PaperDiscussBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.paperId) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.paperId)(clsgs_PaperDiscussBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.parentId) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.parentId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[父节点Id(parentId)]的长度不能超过10(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.parentId)(clsgs_PaperDiscussBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.scoreType) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.scoreType) > 1
  ) {
    throw new Error(
      '(errid:Watl000413)字段[评分类型(scoreType)]的长度不能超过1(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.scoreType)(clsgs_PaperDiscussBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.discussTypeId) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.discussTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[讨论类型Id(discussTypeId)]的长度不能超过2(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.discussTypeId)(clsgs_PaperDiscussBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.userId) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.userId)(clsgs_PaperDiscussBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.updUser) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.updUser)(clsgs_PaperDiscussBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.updDate) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.updDate)(clsgs_PaperDiscussBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.idCurrEduCls) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.idCurrEduCls)(clsgs_PaperDiscussBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.memo) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.memo)(clsgs_PaperDiscussBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.discussId) == false &&
    undefined !== pobjgs_PaperDiscussEN.discussId &&
    tzDataType.isString(pobjgs_PaperDiscussEN.discussId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[讨论ID(discussId)]的值:[$(pobjgs_PaperDiscussEN.discussId)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.discussContent) == false &&
    undefined !== pobjgs_PaperDiscussEN.discussContent &&
    tzDataType.isString(pobjgs_PaperDiscussEN.discussContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[讨论内容(discussContent)]的值:[$(pobjgs_PaperDiscussEN.discussContent)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.paperId) == false &&
    undefined !== pobjgs_PaperDiscussEN.paperId &&
    tzDataType.isString(pobjgs_PaperDiscussEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjgs_PaperDiscussEN.paperId)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.parentId) == false &&
    undefined !== pobjgs_PaperDiscussEN.parentId &&
    tzDataType.isString(pobjgs_PaperDiscussEN.parentId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[父节点Id(parentId)]的值:[$(pobjgs_PaperDiscussEN.parentId)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_PaperDiscussEN.score &&
    undefined !== pobjgs_PaperDiscussEN.score &&
    tzDataType.isNumber(pobjgs_PaperDiscussEN.score) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评分(score)]的值:[$(pobjgs_PaperDiscussEN.score)], 非法,应该为数值型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.scoreType) == false &&
    undefined !== pobjgs_PaperDiscussEN.scoreType &&
    tzDataType.isString(pobjgs_PaperDiscussEN.scoreType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评分类型(scoreType)]的值:[$(pobjgs_PaperDiscussEN.scoreType)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.discussTypeId) == false &&
    undefined !== pobjgs_PaperDiscussEN.discussTypeId &&
    tzDataType.isString(pobjgs_PaperDiscussEN.discussTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[讨论类型Id(discussTypeId)]的值:[$(pobjgs_PaperDiscussEN.discussTypeId)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.userId) == false &&
    undefined !== pobjgs_PaperDiscussEN.userId &&
    tzDataType.isString(pobjgs_PaperDiscussEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户ID(userId)]的值:[$(pobjgs_PaperDiscussEN.userId)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_PaperDiscussEN.voteCount &&
    undefined !== pobjgs_PaperDiscussEN.voteCount &&
    tzDataType.isNumber(pobjgs_PaperDiscussEN.voteCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[点赞计数(voteCount)]的值:[$(pobjgs_PaperDiscussEN.voteCount)], 非法,应该为数值型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.updUser) == false &&
    undefined !== pobjgs_PaperDiscussEN.updUser &&
    tzDataType.isString(pobjgs_PaperDiscussEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_PaperDiscussEN.updUser)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.updDate) == false &&
    undefined !== pobjgs_PaperDiscussEN.updDate &&
    tzDataType.isString(pobjgs_PaperDiscussEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_PaperDiscussEN.updDate)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.idCurrEduCls) == false &&
    undefined !== pobjgs_PaperDiscussEN.idCurrEduCls &&
    tzDataType.isString(pobjgs_PaperDiscussEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjgs_PaperDiscussEN.idCurrEduCls)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.memo) == false &&
    undefined !== pobjgs_PaperDiscussEN.memo &&
    tzDataType.isString(pobjgs_PaperDiscussEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_PaperDiscussEN.memo)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_PaperDiscuss_CheckProperty4Update(pobjgs_PaperDiscussEN: clsgs_PaperDiscussEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.discussId) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.discussId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[讨论ID(discussId)]的长度不能超过10(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.discussId)(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.discussContent) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.discussContent) > 2000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[讨论内容(discussContent)]的长度不能超过2000(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.discussContent)(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.paperId) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.paperId)(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.parentId) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.parentId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[父节点Id(parentId)]的长度不能超过10(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.parentId)(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.scoreType) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.scoreType) > 1
  ) {
    throw new Error(
      '(errid:Watl000416)字段[评分类型(scoreType)]的长度不能超过1(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.scoreType)(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.discussTypeId) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.discussTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[讨论类型Id(discussTypeId)]的长度不能超过2(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.discussTypeId)(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.userId) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.userId)(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.updUser) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.updUser)(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.updDate) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.updDate)(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.idCurrEduCls) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.idCurrEduCls)(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.memo) == false &&
    GetStrLen(pobjgs_PaperDiscussEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 论文讨论表(gs_PaperDiscuss))!值:$(pobjgs_PaperDiscussEN.memo)(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.discussId) == false &&
    undefined !== pobjgs_PaperDiscussEN.discussId &&
    tzDataType.isString(pobjgs_PaperDiscussEN.discussId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[讨论ID(discussId)]的值:[$(pobjgs_PaperDiscussEN.discussId)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.discussContent) == false &&
    undefined !== pobjgs_PaperDiscussEN.discussContent &&
    tzDataType.isString(pobjgs_PaperDiscussEN.discussContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[讨论内容(discussContent)]的值:[$(pobjgs_PaperDiscussEN.discussContent)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.paperId) == false &&
    undefined !== pobjgs_PaperDiscussEN.paperId &&
    tzDataType.isString(pobjgs_PaperDiscussEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjgs_PaperDiscussEN.paperId)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.parentId) == false &&
    undefined !== pobjgs_PaperDiscussEN.parentId &&
    tzDataType.isString(pobjgs_PaperDiscussEN.parentId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[父节点Id(parentId)]的值:[$(pobjgs_PaperDiscussEN.parentId)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_PaperDiscussEN.score &&
    undefined !== pobjgs_PaperDiscussEN.score &&
    tzDataType.isNumber(pobjgs_PaperDiscussEN.score) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评分(score)]的值:[$(pobjgs_PaperDiscussEN.score)], 非法,应该为数值型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.scoreType) == false &&
    undefined !== pobjgs_PaperDiscussEN.scoreType &&
    tzDataType.isString(pobjgs_PaperDiscussEN.scoreType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评分类型(scoreType)]的值:[$(pobjgs_PaperDiscussEN.scoreType)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.discussTypeId) == false &&
    undefined !== pobjgs_PaperDiscussEN.discussTypeId &&
    tzDataType.isString(pobjgs_PaperDiscussEN.discussTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[讨论类型Id(discussTypeId)]的值:[$(pobjgs_PaperDiscussEN.discussTypeId)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.userId) == false &&
    undefined !== pobjgs_PaperDiscussEN.userId &&
    tzDataType.isString(pobjgs_PaperDiscussEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户ID(userId)]的值:[$(pobjgs_PaperDiscussEN.userId)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_PaperDiscussEN.voteCount &&
    undefined !== pobjgs_PaperDiscussEN.voteCount &&
    tzDataType.isNumber(pobjgs_PaperDiscussEN.voteCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[点赞计数(voteCount)]的值:[$(pobjgs_PaperDiscussEN.voteCount)], 非法,应该为数值型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.updUser) == false &&
    undefined !== pobjgs_PaperDiscussEN.updUser &&
    tzDataType.isString(pobjgs_PaperDiscussEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_PaperDiscussEN.updUser)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.updDate) == false &&
    undefined !== pobjgs_PaperDiscussEN.updDate &&
    tzDataType.isString(pobjgs_PaperDiscussEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_PaperDiscussEN.updDate)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.idCurrEduCls) == false &&
    undefined !== pobjgs_PaperDiscussEN.idCurrEduCls &&
    tzDataType.isString(pobjgs_PaperDiscussEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjgs_PaperDiscussEN.idCurrEduCls)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperDiscussEN.memo) == false &&
    undefined !== pobjgs_PaperDiscussEN.memo &&
    tzDataType.isString(pobjgs_PaperDiscussEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_PaperDiscussEN.memo)], 非法,应该为字符型(In 论文讨论表(gs_PaperDiscuss))!(clsgs_PaperDiscussBL:CheckProperty4Update)',
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
export function gs_PaperDiscuss_GetJSONStrByObj(
  pobjgs_PaperDiscussEN: clsgs_PaperDiscussEN,
): string {
  pobjgs_PaperDiscussEN.sfUpdFldSetStr = pobjgs_PaperDiscussEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjgs_PaperDiscussEN);
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
export function gs_PaperDiscuss_GetObjLstByJSONStr(strJSON: string): Array<clsgs_PaperDiscussEN> {
  let arrgs_PaperDiscussObjLst = new Array<clsgs_PaperDiscussEN>();
  if (strJSON === '') {
    return arrgs_PaperDiscussObjLst;
  }
  try {
    arrgs_PaperDiscussObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrgs_PaperDiscussObjLst;
  }
  return arrgs_PaperDiscussObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_PaperDiscussObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function gs_PaperDiscuss_GetObjLstByJSONObjLst(
  arrgs_PaperDiscussObjLstS: Array<clsgs_PaperDiscussEN>,
): Array<clsgs_PaperDiscussEN> {
  const arrgs_PaperDiscussObjLst = new Array<clsgs_PaperDiscussEN>();
  for (const objInFor of arrgs_PaperDiscussObjLstS) {
    const obj1 = gs_PaperDiscuss_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrgs_PaperDiscussObjLst.push(obj1);
  }
  return arrgs_PaperDiscussObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_PaperDiscuss_GetObjByJSONStr(strJSON: string): clsgs_PaperDiscussEN {
  let pobjgs_PaperDiscussEN = new clsgs_PaperDiscussEN();
  if (strJSON === '') {
    return pobjgs_PaperDiscussEN;
  }
  try {
    pobjgs_PaperDiscussEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjgs_PaperDiscussEN;
  }
  return pobjgs_PaperDiscussEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function gs_PaperDiscuss_GetCombineCondition(
  objgs_PaperDiscussCond: clsgs_PaperDiscussEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperDiscussCond.dicFldComparisonOp,
      clsgs_PaperDiscussEN.con_DiscussId,
    ) == true
  ) {
    const strComparisonOpDiscussId: string =
      objgs_PaperDiscussCond.dicFldComparisonOp[clsgs_PaperDiscussEN.con_DiscussId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperDiscussEN.con_DiscussId,
      objgs_PaperDiscussCond.discussId,
      strComparisonOpDiscussId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperDiscussCond.dicFldComparisonOp,
      clsgs_PaperDiscussEN.con_DiscussContent,
    ) == true
  ) {
    const strComparisonOpDiscussContent: string =
      objgs_PaperDiscussCond.dicFldComparisonOp[clsgs_PaperDiscussEN.con_DiscussContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperDiscussEN.con_DiscussContent,
      objgs_PaperDiscussCond.discussContent,
      strComparisonOpDiscussContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperDiscussCond.dicFldComparisonOp,
      clsgs_PaperDiscussEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objgs_PaperDiscussCond.dicFldComparisonOp[clsgs_PaperDiscussEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperDiscussEN.con_PaperId,
      objgs_PaperDiscussCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperDiscussCond.dicFldComparisonOp,
      clsgs_PaperDiscussEN.con_ParentId,
    ) == true
  ) {
    const strComparisonOpParentId: string =
      objgs_PaperDiscussCond.dicFldComparisonOp[clsgs_PaperDiscussEN.con_ParentId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperDiscussEN.con_ParentId,
      objgs_PaperDiscussCond.parentId,
      strComparisonOpParentId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperDiscussCond.dicFldComparisonOp,
      clsgs_PaperDiscussEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objgs_PaperDiscussCond.dicFldComparisonOp[clsgs_PaperDiscussEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_PaperDiscussEN.con_Score,
      objgs_PaperDiscussCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperDiscussCond.dicFldComparisonOp,
      clsgs_PaperDiscussEN.con_ScoreType,
    ) == true
  ) {
    const strComparisonOpScoreType: string =
      objgs_PaperDiscussCond.dicFldComparisonOp[clsgs_PaperDiscussEN.con_ScoreType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperDiscussEN.con_ScoreType,
      objgs_PaperDiscussCond.scoreType,
      strComparisonOpScoreType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperDiscussCond.dicFldComparisonOp,
      clsgs_PaperDiscussEN.con_DiscussTypeId,
    ) == true
  ) {
    const strComparisonOpDiscussTypeId: string =
      objgs_PaperDiscussCond.dicFldComparisonOp[clsgs_PaperDiscussEN.con_DiscussTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperDiscussEN.con_DiscussTypeId,
      objgs_PaperDiscussCond.discussTypeId,
      strComparisonOpDiscussTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperDiscussCond.dicFldComparisonOp,
      clsgs_PaperDiscussEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objgs_PaperDiscussCond.dicFldComparisonOp[clsgs_PaperDiscussEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperDiscussEN.con_UserId,
      objgs_PaperDiscussCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperDiscussCond.dicFldComparisonOp,
      clsgs_PaperDiscussEN.con_VoteCount,
    ) == true
  ) {
    const strComparisonOpVoteCount: string =
      objgs_PaperDiscussCond.dicFldComparisonOp[clsgs_PaperDiscussEN.con_VoteCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_PaperDiscussEN.con_VoteCount,
      objgs_PaperDiscussCond.voteCount,
      strComparisonOpVoteCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperDiscussCond.dicFldComparisonOp,
      clsgs_PaperDiscussEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objgs_PaperDiscussCond.dicFldComparisonOp[clsgs_PaperDiscussEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperDiscussEN.con_UpdUser,
      objgs_PaperDiscussCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperDiscussCond.dicFldComparisonOp,
      clsgs_PaperDiscussEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objgs_PaperDiscussCond.dicFldComparisonOp[clsgs_PaperDiscussEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperDiscussEN.con_UpdDate,
      objgs_PaperDiscussCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperDiscussCond.dicFldComparisonOp,
      clsgs_PaperDiscussEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objgs_PaperDiscussCond.dicFldComparisonOp[clsgs_PaperDiscussEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperDiscussEN.con_IdCurrEduCls,
      objgs_PaperDiscussCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperDiscussCond.dicFldComparisonOp,
      clsgs_PaperDiscussEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objgs_PaperDiscussCond.dicFldComparisonOp[clsgs_PaperDiscussEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperDiscussEN.con_Memo,
      objgs_PaperDiscussCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_PaperDiscuss(论文讨论表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strDiscussId: 讨论ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_PaperDiscuss_GetUniCondStr(objgs_PaperDiscussEN: clsgs_PaperDiscussEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DiscussId = '{0}'", objgs_PaperDiscussEN.discussId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_PaperDiscuss(论文讨论表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strDiscussId: 讨论ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_PaperDiscuss_GetUniCondStr4Update(
  objgs_PaperDiscussEN: clsgs_PaperDiscussEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DiscussId <> '{0}'", objgs_PaperDiscussEN.discussId);
  strWhereCond += Format(" and DiscussId = '{0}'", objgs_PaperDiscussEN.discussId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_PaperDiscussENS:源对象
 * @param objgs_PaperDiscussENT:目标对象
 */
export function gs_PaperDiscuss_CopyObjTo(
  objgs_PaperDiscussENS: clsgs_PaperDiscussEN,
  objgs_PaperDiscussENT: clsgs_PaperDiscussEN,
): void {
  objgs_PaperDiscussENT.discussId = objgs_PaperDiscussENS.discussId; //讨论ID
  objgs_PaperDiscussENT.discussContent = objgs_PaperDiscussENS.discussContent; //讨论内容
  objgs_PaperDiscussENT.paperId = objgs_PaperDiscussENS.paperId; //论文Id
  objgs_PaperDiscussENT.parentId = objgs_PaperDiscussENS.parentId; //父节点Id
  objgs_PaperDiscussENT.score = objgs_PaperDiscussENS.score; //评分
  objgs_PaperDiscussENT.scoreType = objgs_PaperDiscussENS.scoreType; //评分类型
  objgs_PaperDiscussENT.discussTypeId = objgs_PaperDiscussENS.discussTypeId; //讨论类型Id
  objgs_PaperDiscussENT.userId = objgs_PaperDiscussENS.userId; //用户ID
  objgs_PaperDiscussENT.voteCount = objgs_PaperDiscussENS.voteCount; //点赞计数
  objgs_PaperDiscussENT.updUser = objgs_PaperDiscussENS.updUser; //修改人
  objgs_PaperDiscussENT.updDate = objgs_PaperDiscussENS.updDate; //修改日期
  objgs_PaperDiscussENT.idCurrEduCls = objgs_PaperDiscussENS.idCurrEduCls; //教学班流水号
  objgs_PaperDiscussENT.memo = objgs_PaperDiscussENS.memo; //备注
  objgs_PaperDiscussENT.sfUpdFldSetStr = objgs_PaperDiscussENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_PaperDiscussENS:源对象
 * @param objgs_PaperDiscussENT:目标对象
 */
export function gs_PaperDiscuss_GetObjFromJsonObj(
  objgs_PaperDiscussENS: clsgs_PaperDiscussEN,
): clsgs_PaperDiscussEN {
  const objgs_PaperDiscussENT: clsgs_PaperDiscussEN = new clsgs_PaperDiscussEN();
  ObjectAssign(objgs_PaperDiscussENT, objgs_PaperDiscussENS);
  return objgs_PaperDiscussENT;
}
