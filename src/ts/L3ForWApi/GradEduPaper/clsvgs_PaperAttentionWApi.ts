/**
 * 类名:clsvgs_PaperAttentionWApi
 * 表名:vgs_PaperAttention(01120750)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:57
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
 * 论文关注视图(vgs_PaperAttention)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月08日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvgs_PaperAttentionEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PaperAttentionEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vgs_PaperAttention_Controller = 'vgs_PaperAttentionApi';
export const vgs_PaperAttention_ConstructorName = 'vgs_PaperAttention';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngPaperAttentionId:关键字
 * @returns 对象
 **/
export async function vgs_PaperAttention_GetObjByPaperAttentionIdAsync(
  lngPaperAttentionId: number,
): Promise<clsvgs_PaperAttentionEN | null> {
  const strThisFuncName = 'GetObjByPaperAttentionIdAsync';

  if (lngPaperAttentionId == 0) {
    const strMsg = Format(
      '参数:[lngPaperAttentionId]不能为空!(In clsvgs_PaperAttentionWApi.GetObjByPaperAttentionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPaperAttentionId';
  const strUrl = GetWebApiUrl(vgs_PaperAttention_Controller, strAction);

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
      const objvgs_PaperAttention = vgs_PaperAttention_GetObjFromJsonObj(returnObj);
      return objvgs_PaperAttention;
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
        vgs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_GetObjByPaperAttentionIdCache(
  lngPaperAttentionId: number,
  strUserId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPaperAttentionIdCache';

  if (lngPaperAttentionId == 0) {
    const strMsg = Format(
      '参数:[lngPaperAttentionId]不能为空!(In clsvgs_PaperAttentionWApi.GetObjByPaperAttentionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvgs_PaperAttentionObjLstCache = await vgs_PaperAttention_GetObjLstCache(strUserId);
  try {
    const arrvgs_PaperAttentionSel = arrvgs_PaperAttentionObjLstCache.filter(
      (x) => x.paperAttentionId == lngPaperAttentionId,
    );
    let objvgs_PaperAttention: clsvgs_PaperAttentionEN;
    if (arrvgs_PaperAttentionSel.length > 0) {
      objvgs_PaperAttention = arrvgs_PaperAttentionSel[0];
      return objvgs_PaperAttention;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvgs_PaperAttentionConst = await vgs_PaperAttention_GetObjByPaperAttentionIdAsync(
          lngPaperAttentionId,
        );
        if (objvgs_PaperAttentionConst != null) {
          vgs_PaperAttention_ReFreshThisCache(strUserId);
          return objvgs_PaperAttentionConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngPaperAttentionId,
      vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_GetObjByPaperAttentionIdlocalStorage(
  lngPaperAttentionId: number,
) {
  const strThisFuncName = 'GetObjByPaperAttentionIdlocalStorage';

  if (lngPaperAttentionId == 0) {
    const strMsg = Format(
      '参数:[lngPaperAttentionId]不能为空!(In clsvgs_PaperAttentionWApi.GetObjByPaperAttentionIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvgs_PaperAttentionEN._CurrTabName, lngPaperAttentionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvgs_PaperAttentionCache: clsvgs_PaperAttentionEN = JSON.parse(strTempObj);
    return objvgs_PaperAttentionCache;
  }
  try {
    const objvgs_PaperAttention = await vgs_PaperAttention_GetObjByPaperAttentionIdAsync(
      lngPaperAttentionId,
    );
    if (objvgs_PaperAttention != null) {
      localStorage.setItem(strKey, JSON.stringify(objvgs_PaperAttention));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvgs_PaperAttention;
    }
    return objvgs_PaperAttention;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngPaperAttentionId,
      vgs_PaperAttention_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
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
export async function vgs_PaperAttention_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strUserIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strUserIdClassfy) == true) {
    const strMsg = Format('参数:[strUserIdClassfy]不能为空!(In clsvgs_PaperAttentionWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvgs_PaperAttentionEN.con_PaperAttentionId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvgs_PaperAttentionEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvgs_PaperAttentionEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngPaperAttentionId = Number(strInValue);
  if (lngPaperAttentionId == 0) {
    return '';
  }
  const objvgs_PaperAttention = await vgs_PaperAttention_GetObjByPaperAttentionIdCache(
    lngPaperAttentionId,
    strUserIdClassfy,
  );
  if (objvgs_PaperAttention == null) return '';
  if (objvgs_PaperAttention.GetFldValue(strOutFldName) == null) return '';
  return objvgs_PaperAttention.GetFldValue(strOutFldName).toString();
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
export function vgs_PaperAttention_SortFunDefa(
  a: clsvgs_PaperAttentionEN,
  b: clsvgs_PaperAttentionEN,
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
export function vgs_PaperAttention_SortFunDefa2Fld(
  a: clsvgs_PaperAttentionEN,
  b: clsvgs_PaperAttentionEN,
): number {
  if (a.paperId == b.paperId) return a.paperTitle.localeCompare(b.paperTitle);
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
export function vgs_PaperAttention_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvgs_PaperAttentionEN.con_PaperAttentionId:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          return a.paperAttentionId - b.paperAttentionId;
        };
      case clsvgs_PaperAttentionEN.con_PaperId:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (a.paperId == null) return -1;
          if (b.paperId == null) return 1;
          return a.paperId.localeCompare(b.paperId);
        };
      case clsvgs_PaperAttentionEN.con_PaperTitle:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          return a.paperTitle.localeCompare(b.paperTitle);
        };
      case clsvgs_PaperAttentionEN.con_Author:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (a.author == null) return -1;
          if (b.author == null) return 1;
          return a.author.localeCompare(b.author);
        };
      case clsvgs_PaperAttentionEN.con_Keyword:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (a.keyword == null) return -1;
          if (b.keyword == null) return 1;
          return a.keyword.localeCompare(b.keyword);
        };
      case clsvgs_PaperAttentionEN.con_BrowseNumber:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          return a.browseNumber - b.browseNumber;
        };
      case clsvgs_PaperAttentionEN.con_UserId:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsvgs_PaperAttentionEN.con_PaperGroupId:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (a.paperGroupId == null) return -1;
          if (b.paperGroupId == null) return 1;
          return a.paperGroupId.localeCompare(b.paperGroupId);
        };
      case clsvgs_PaperAttentionEN.con_UpdUser:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvgs_PaperAttentionEN.con_UpdDate:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvgs_PaperAttentionEN.con_Meno:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (a.meno == null) return -1;
          if (b.meno == null) return 1;
          return a.meno.localeCompare(b.meno);
        };
      case clsvgs_PaperAttentionEN.con_PaperGroupName:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (a.paperGroupName == null) return -1;
          if (b.paperGroupName == null) return 1;
          return a.paperGroupName.localeCompare(b.paperGroupName);
        };
      case clsvgs_PaperAttentionEN.con_PaperQCount:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          return a.paperQCount - b.paperQCount;
        };
      case clsvgs_PaperAttentionEN.con_SubVCount:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          return a.subVCount - b.subVCount;
        };
      case clsvgs_PaperAttentionEN.con_TagsCount:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          return a.tagsCount - b.tagsCount;
        };
      case clsvgs_PaperAttentionEN.con_TeaQCount:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          return a.teaQCount - b.teaQCount;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vgs_PaperAttention]中不存在!(in ${vgs_PaperAttention_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvgs_PaperAttentionEN.con_PaperAttentionId:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          return b.paperAttentionId - a.paperAttentionId;
        };
      case clsvgs_PaperAttentionEN.con_PaperId:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (b.paperId == null) return -1;
          if (a.paperId == null) return 1;
          return b.paperId.localeCompare(a.paperId);
        };
      case clsvgs_PaperAttentionEN.con_PaperTitle:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          return b.paperTitle.localeCompare(a.paperTitle);
        };
      case clsvgs_PaperAttentionEN.con_Author:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (b.author == null) return -1;
          if (a.author == null) return 1;
          return b.author.localeCompare(a.author);
        };
      case clsvgs_PaperAttentionEN.con_Keyword:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (b.keyword == null) return -1;
          if (a.keyword == null) return 1;
          return b.keyword.localeCompare(a.keyword);
        };
      case clsvgs_PaperAttentionEN.con_BrowseNumber:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          return b.browseNumber - a.browseNumber;
        };
      case clsvgs_PaperAttentionEN.con_UserId:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsvgs_PaperAttentionEN.con_PaperGroupId:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (b.paperGroupId == null) return -1;
          if (a.paperGroupId == null) return 1;
          return b.paperGroupId.localeCompare(a.paperGroupId);
        };
      case clsvgs_PaperAttentionEN.con_UpdUser:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvgs_PaperAttentionEN.con_UpdDate:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvgs_PaperAttentionEN.con_Meno:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (b.meno == null) return -1;
          if (a.meno == null) return 1;
          return b.meno.localeCompare(a.meno);
        };
      case clsvgs_PaperAttentionEN.con_PaperGroupName:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          if (b.paperGroupName == null) return -1;
          if (a.paperGroupName == null) return 1;
          return b.paperGroupName.localeCompare(a.paperGroupName);
        };
      case clsvgs_PaperAttentionEN.con_PaperQCount:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          return b.paperQCount - a.paperQCount;
        };
      case clsvgs_PaperAttentionEN.con_SubVCount:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          return b.subVCount - a.subVCount;
        };
      case clsvgs_PaperAttentionEN.con_TagsCount:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          return b.tagsCount - a.tagsCount;
        };
      case clsvgs_PaperAttentionEN.con_TeaQCount:
        return (a: clsvgs_PaperAttentionEN, b: clsvgs_PaperAttentionEN) => {
          return b.teaQCount - a.teaQCount;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vgs_PaperAttention]中不存在!(in ${vgs_PaperAttention_ConstructorName}.${strThisFuncName})`;
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
export async function vgs_PaperAttention_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvgs_PaperAttentionEN.con_PaperAttentionId:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.paperAttentionId === value;
      };
    case clsvgs_PaperAttentionEN.con_PaperId:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.paperId === value;
      };
    case clsvgs_PaperAttentionEN.con_PaperTitle:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.paperTitle === value;
      };
    case clsvgs_PaperAttentionEN.con_Author:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.author === value;
      };
    case clsvgs_PaperAttentionEN.con_Keyword:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.keyword === value;
      };
    case clsvgs_PaperAttentionEN.con_BrowseNumber:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.browseNumber === value;
      };
    case clsvgs_PaperAttentionEN.con_UserId:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.userId === value;
      };
    case clsvgs_PaperAttentionEN.con_PaperGroupId:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.paperGroupId === value;
      };
    case clsvgs_PaperAttentionEN.con_UpdUser:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.updUser === value;
      };
    case clsvgs_PaperAttentionEN.con_UpdDate:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.updDate === value;
      };
    case clsvgs_PaperAttentionEN.con_Meno:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.meno === value;
      };
    case clsvgs_PaperAttentionEN.con_PaperGroupName:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.paperGroupName === value;
      };
    case clsvgs_PaperAttentionEN.con_PaperQCount:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.paperQCount === value;
      };
    case clsvgs_PaperAttentionEN.con_SubVCount:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.subVCount === value;
      };
    case clsvgs_PaperAttentionEN.con_TagsCount:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.tagsCount === value;
      };
    case clsvgs_PaperAttentionEN.con_TeaQCount:
      return (obj: clsvgs_PaperAttentionEN) => {
        return obj.teaQCount === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vgs_PaperAttention]中不存在!(in ${vgs_PaperAttention_ConstructorName}.${strThisFuncName})`;
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
export async function vgs_PaperAttention_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strUserIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strUserIdClassfy) == true) {
    const strMsg = Format('参数:[strUserIdClassfy]不能为空!(In clsvgs_PaperAttentionWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvgs_PaperAttentionEN.con_PaperAttentionId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvgs_PaperAttention = await vgs_PaperAttention_GetObjLstCache(strUserIdClassfy);
  if (arrvgs_PaperAttention == null) return [];
  let arrvgs_PaperAttentionSel = arrvgs_PaperAttention;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvgs_PaperAttentionSel.length == 0) return [];
  return arrvgs_PaperAttentionSel.map((x) => x.paperAttentionId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vgs_PaperAttention_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vgs_PaperAttention_Controller, strAction);

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
        vgs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vgs_PaperAttention_Controller, strAction);

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
        vgs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvgs_PaperAttentionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vgs_PaperAttention_Controller, strAction);

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
      const objvgs_PaperAttention = vgs_PaperAttention_GetObjFromJsonObj(returnObj);
      return objvgs_PaperAttention;
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
        vgs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_GetObjLstClientCache(strUserId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvgs_PaperAttentionEN.WhereFormat) == false) {
    strWhereCond = Format(clsvgs_PaperAttentionEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("UserId='{0}'", strUserId);
  }
  const strKey = Format('{0}_{1}', clsvgs_PaperAttentionEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsvgs_PaperAttentionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_PaperAttentionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvgs_PaperAttentionExObjLstCache: Array<clsvgs_PaperAttentionEN> =
      CacheHelper.Get(strKey);
    const arrvgs_PaperAttentionObjLstT = vgs_PaperAttention_GetObjLstByJSONObjLst(
      arrvgs_PaperAttentionExObjLstCache,
    );
    return arrvgs_PaperAttentionObjLstT;
  }
  try {
    const arrvgs_PaperAttentionExObjLst = await vgs_PaperAttention_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvgs_PaperAttentionExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_PaperAttentionExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_PaperAttentionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_GetObjLstlocalStorage(strUserId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvgs_PaperAttentionEN.WhereFormat) == false) {
    strWhereCond = Format(clsvgs_PaperAttentionEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvgs_PaperAttentionEN.con_UserId, strUserId);
  }
  const strKey = Format('{0}_{1}', clsvgs_PaperAttentionEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsvgs_PaperAttentionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_PaperAttentionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvgs_PaperAttentionExObjLstCache: Array<clsvgs_PaperAttentionEN> =
      JSON.parse(strTempObjLst);
    const arrvgs_PaperAttentionObjLstT = vgs_PaperAttention_GetObjLstByJSONObjLst(
      arrvgs_PaperAttentionExObjLstCache,
    );
    return arrvgs_PaperAttentionObjLstT;
  }
  try {
    const arrvgs_PaperAttentionExObjLst = await vgs_PaperAttention_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvgs_PaperAttentionExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_PaperAttentionExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_PaperAttentionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_GetObjLstlocalStoragePureCache(strUserId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvgs_PaperAttentionEN._CurrTabName, strUserId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvgs_PaperAttentionObjLstCache: Array<clsvgs_PaperAttentionEN> =
      JSON.parse(strTempObjLst);
    return arrvgs_PaperAttentionObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vgs_PaperAttention_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvgs_PaperAttentionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vgs_PaperAttention_Controller, strAction);

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
          vgs_PaperAttention_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_PaperAttention_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_GetObjLstsessionStorage(strUserId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvgs_PaperAttentionEN.WhereFormat) == false) {
    strWhereCond = Format(clsvgs_PaperAttentionEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvgs_PaperAttentionEN.con_UserId, strUserId);
  }
  const strKey = Format('{0}_{1}', clsvgs_PaperAttentionEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsvgs_PaperAttentionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_PaperAttentionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvgs_PaperAttentionExObjLstCache: Array<clsvgs_PaperAttentionEN> =
      JSON.parse(strTempObjLst);
    const arrvgs_PaperAttentionObjLstT = vgs_PaperAttention_GetObjLstByJSONObjLst(
      arrvgs_PaperAttentionExObjLstCache,
    );
    return arrvgs_PaperAttentionObjLstT;
  }
  try {
    const arrvgs_PaperAttentionExObjLst = await vgs_PaperAttention_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvgs_PaperAttentionExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_PaperAttentionExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_PaperAttentionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_GetObjLstsessionStoragePureCache(strUserId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvgs_PaperAttentionEN._CurrTabName, strUserId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvgs_PaperAttentionObjLstCache: Array<clsvgs_PaperAttentionEN> =
      JSON.parse(strTempObjLst);
    return arrvgs_PaperAttentionObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vgs_PaperAttention_GetObjLstCache(
  strUserId: string,
): Promise<Array<clsvgs_PaperAttentionEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format(
      '参数:[strUserId]不能为空！(In clsvgs_PaperAttentionWApi.vgs_PaperAttention_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvgs_PaperAttentionObjLstCache;
  switch (clsvgs_PaperAttentionEN.CacheModeId) {
    case '04': //sessionStorage
      arrvgs_PaperAttentionObjLstCache = await vgs_PaperAttention_GetObjLstsessionStorage(
        strUserId,
      );
      break;
    case '03': //localStorage
      arrvgs_PaperAttentionObjLstCache = await vgs_PaperAttention_GetObjLstlocalStorage(strUserId);
      break;
    case '02': //ClientCache
      arrvgs_PaperAttentionObjLstCache = await vgs_PaperAttention_GetObjLstClientCache(strUserId);
      break;
    default:
      arrvgs_PaperAttentionObjLstCache = await vgs_PaperAttention_GetObjLstClientCache(strUserId);
      break;
  }
  return arrvgs_PaperAttentionObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vgs_PaperAttention_GetObjLstPureCache(strUserId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvgs_PaperAttentionObjLstCache;
  switch (clsvgs_PaperAttentionEN.CacheModeId) {
    case '04': //sessionStorage
      arrvgs_PaperAttentionObjLstCache = await vgs_PaperAttention_GetObjLstsessionStoragePureCache(
        strUserId,
      );
      break;
    case '03': //localStorage
      arrvgs_PaperAttentionObjLstCache = await vgs_PaperAttention_GetObjLstlocalStoragePureCache(
        strUserId,
      );
      break;
    case '02': //ClientCache
      arrvgs_PaperAttentionObjLstCache = null;
      break;
    default:
      arrvgs_PaperAttentionObjLstCache = null;
      break;
  }
  return arrvgs_PaperAttentionObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngPaperAttentionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vgs_PaperAttention_GetSubObjLstCache(
  objvgs_PaperAttentionCond: clsvgs_PaperAttentionEN,
  strUserId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvgs_PaperAttentionObjLstCache = await vgs_PaperAttention_GetObjLstCache(strUserId);
  let arrvgs_PaperAttentionSel = arrvgs_PaperAttentionObjLstCache;
  if (
    objvgs_PaperAttentionCond.sfFldComparisonOp == null ||
    objvgs_PaperAttentionCond.sfFldComparisonOp == ''
  )
    return arrvgs_PaperAttentionSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_PaperAttentionCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_PaperAttentionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_PaperAttentionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_PaperAttentionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_PaperAttentionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvgs_PaperAttentionCond),
      vgs_PaperAttention_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_PaperAttentionEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPaperAttentionId:关键字列表
 * @returns 对象列表
 **/
export async function vgs_PaperAttention_GetObjLstByPaperAttentionIdLstAsync(
  arrPaperAttentionId: Array<string>,
): Promise<Array<clsvgs_PaperAttentionEN>> {
  const strThisFuncName = 'GetObjLstByPaperAttentionIdLstAsync';
  const strAction = 'GetObjLstByPaperAttentionIdLst';
  const strUrl = GetWebApiUrl(vgs_PaperAttention_Controller, strAction);

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
          vgs_PaperAttention_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_PaperAttention_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_GetObjLstByPaperAttentionIdLstCache(
  arrPaperAttentionIdLst: Array<number>,
  strUserId: string,
) {
  const strThisFuncName = 'GetObjLstByPaperAttentionIdLstCache';
  try {
    const arrvgs_PaperAttentionObjLstCache = await vgs_PaperAttention_GetObjLstCache(strUserId);
    const arrvgs_PaperAttentionSel = arrvgs_PaperAttentionObjLstCache.filter(
      (x) => arrPaperAttentionIdLst.indexOf(x.paperAttentionId) > -1,
    );
    return arrvgs_PaperAttentionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPaperAttentionIdLst.join(','),
      vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvgs_PaperAttentionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vgs_PaperAttention_Controller, strAction);

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
          vgs_PaperAttention_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_PaperAttention_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvgs_PaperAttentionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vgs_PaperAttention_Controller, strAction);

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
          vgs_PaperAttention_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_PaperAttention_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strUserId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvgs_PaperAttentionEN>();
  const arrvgs_PaperAttentionObjLstCache = await vgs_PaperAttention_GetObjLstCache(strUserId);
  if (arrvgs_PaperAttentionObjLstCache.length == 0) return arrvgs_PaperAttentionObjLstCache;
  let arrvgs_PaperAttentionSel = arrvgs_PaperAttentionObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvgs_PaperAttentionCond = new clsvgs_PaperAttentionEN();
  ObjectAssign(objvgs_PaperAttentionCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvgs_PaperAttentionWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_PaperAttentionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvgs_PaperAttentionSel.length == 0) return arrvgs_PaperAttentionSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.sort(
        vgs_PaperAttention_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.sort(objPagerPara.sortFun);
    }
    arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.slice(intStart, intEnd);
    return arrvgs_PaperAttentionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vgs_PaperAttention_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_PaperAttentionEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vgs_PaperAttention_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvgs_PaperAttentionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvgs_PaperAttentionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vgs_PaperAttention_Controller, strAction);

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
          vgs_PaperAttention_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_PaperAttention_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_IsExistRecordCache(
  objvgs_PaperAttentionCond: clsvgs_PaperAttentionEN,
  strUserId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvgs_PaperAttentionObjLstCache = await vgs_PaperAttention_GetObjLstCache(strUserId);
  if (arrvgs_PaperAttentionObjLstCache == null) return false;
  let arrvgs_PaperAttentionSel = arrvgs_PaperAttentionObjLstCache;
  if (
    objvgs_PaperAttentionCond.sfFldComparisonOp == null ||
    objvgs_PaperAttentionCond.sfFldComparisonOp == ''
  )
    return arrvgs_PaperAttentionSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_PaperAttentionCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_PaperAttentionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_PaperAttentionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_PaperAttentionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvgs_PaperAttentionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvgs_PaperAttentionCond),
      vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vgs_PaperAttention_Controller, strAction);

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
        vgs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_IsExistCache(
  lngPaperAttentionId: number,
  strUserId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrvgs_PaperAttentionObjLstCache = await vgs_PaperAttention_GetObjLstCache(strUserId);
  if (arrvgs_PaperAttentionObjLstCache == null) return false;
  try {
    const arrvgs_PaperAttentionSel = arrvgs_PaperAttentionObjLstCache.filter(
      (x) => x.paperAttentionId == lngPaperAttentionId,
    );
    if (arrvgs_PaperAttentionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngPaperAttentionId,
      vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_IsExistAsync(
  lngPaperAttentionId: number,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vgs_PaperAttention_Controller, strAction);

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
        vgs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperAttention_ConstructorName,
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
export async function vgs_PaperAttention_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vgs_PaperAttention_Controller, strAction);

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
        vgs_PaperAttention_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperAttention_ConstructorName,
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
 * @param objvgs_PaperAttentionCond:条件对象
 * @returns 对象列表记录数
 */
export async function vgs_PaperAttention_GetRecCountByCondCache(
  objvgs_PaperAttentionCond: clsvgs_PaperAttentionEN,
  strUserId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvgs_PaperAttentionObjLstCache = await vgs_PaperAttention_GetObjLstCache(strUserId);
  if (arrvgs_PaperAttentionObjLstCache == null) return 0;
  let arrvgs_PaperAttentionSel = arrvgs_PaperAttentionObjLstCache;
  if (
    objvgs_PaperAttentionCond.sfFldComparisonOp == null ||
    objvgs_PaperAttentionCond.sfFldComparisonOp == ''
  )
    return arrvgs_PaperAttentionSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_PaperAttentionCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_PaperAttentionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_PaperAttentionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_PaperAttentionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_PaperAttentionSel = arrvgs_PaperAttentionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_PaperAttentionSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvgs_PaperAttentionCond),
      vgs_PaperAttention_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vgs_PaperAttention_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vgs_PaperAttention_ReFreshThisCache(strUserId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvgs_PaperAttentionEN._CurrTabName, strUserId);
    switch (clsvgs_PaperAttentionEN.CacheModeId) {
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
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vgs_PaperAttention_GetJSONStrByObj(
  pobjvgs_PaperAttentionEN: clsvgs_PaperAttentionEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvgs_PaperAttentionEN);
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
export function vgs_PaperAttention_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvgs_PaperAttentionEN> {
  let arrvgs_PaperAttentionObjLst = new Array<clsvgs_PaperAttentionEN>();
  if (strJSON === '') {
    return arrvgs_PaperAttentionObjLst;
  }
  try {
    arrvgs_PaperAttentionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvgs_PaperAttentionObjLst;
  }
  return arrvgs_PaperAttentionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvgs_PaperAttentionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vgs_PaperAttention_GetObjLstByJSONObjLst(
  arrvgs_PaperAttentionObjLstS: Array<clsvgs_PaperAttentionEN>,
): Array<clsvgs_PaperAttentionEN> {
  const arrvgs_PaperAttentionObjLst = new Array<clsvgs_PaperAttentionEN>();
  for (const objInFor of arrvgs_PaperAttentionObjLstS) {
    const obj1 = vgs_PaperAttention_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvgs_PaperAttentionObjLst.push(obj1);
  }
  return arrvgs_PaperAttentionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vgs_PaperAttention_GetObjByJSONStr(strJSON: string): clsvgs_PaperAttentionEN {
  let pobjvgs_PaperAttentionEN = new clsvgs_PaperAttentionEN();
  if (strJSON === '') {
    return pobjvgs_PaperAttentionEN;
  }
  try {
    pobjvgs_PaperAttentionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvgs_PaperAttentionEN;
  }
  return pobjvgs_PaperAttentionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vgs_PaperAttention_GetCombineCondition(
  objvgs_PaperAttentionCond: clsvgs_PaperAttentionEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_PaperAttentionId,
    ) == true
  ) {
    const strComparisonOpPaperAttentionId: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_PaperAttentionId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_PaperAttentionEN.con_PaperAttentionId,
      objvgs_PaperAttentionCond.paperAttentionId,
      strComparisonOpPaperAttentionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperAttentionEN.con_PaperId,
      objvgs_PaperAttentionCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_PaperTitle,
    ) == true
  ) {
    const strComparisonOpPaperTitle: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_PaperTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperAttentionEN.con_PaperTitle,
      objvgs_PaperAttentionCond.paperTitle,
      strComparisonOpPaperTitle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_Author,
    ) == true
  ) {
    const strComparisonOpAuthor: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_Author];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperAttentionEN.con_Author,
      objvgs_PaperAttentionCond.author,
      strComparisonOpAuthor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_Keyword,
    ) == true
  ) {
    const strComparisonOpKeyword: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_Keyword];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperAttentionEN.con_Keyword,
      objvgs_PaperAttentionCond.keyword,
      strComparisonOpKeyword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_BrowseNumber,
    ) == true
  ) {
    const strComparisonOpBrowseNumber: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_BrowseNumber];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_PaperAttentionEN.con_BrowseNumber,
      objvgs_PaperAttentionCond.browseNumber,
      strComparisonOpBrowseNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperAttentionEN.con_UserId,
      objvgs_PaperAttentionCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_PaperGroupId,
    ) == true
  ) {
    const strComparisonOpPaperGroupId: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_PaperGroupId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperAttentionEN.con_PaperGroupId,
      objvgs_PaperAttentionCond.paperGroupId,
      strComparisonOpPaperGroupId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperAttentionEN.con_UpdUser,
      objvgs_PaperAttentionCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperAttentionEN.con_UpdDate,
      objvgs_PaperAttentionCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_Meno,
    ) == true
  ) {
    const strComparisonOpMeno: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_Meno];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperAttentionEN.con_Meno,
      objvgs_PaperAttentionCond.meno,
      strComparisonOpMeno,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_PaperGroupName,
    ) == true
  ) {
    const strComparisonOpPaperGroupName: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_PaperGroupName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperAttentionEN.con_PaperGroupName,
      objvgs_PaperAttentionCond.paperGroupName,
      strComparisonOpPaperGroupName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_PaperQCount,
    ) == true
  ) {
    const strComparisonOpPaperQCount: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_PaperQCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_PaperAttentionEN.con_PaperQCount,
      objvgs_PaperAttentionCond.paperQCount,
      strComparisonOpPaperQCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_SubVCount,
    ) == true
  ) {
    const strComparisonOpSubVCount: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_SubVCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_PaperAttentionEN.con_SubVCount,
      objvgs_PaperAttentionCond.subVCount,
      strComparisonOpSubVCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_TagsCount,
    ) == true
  ) {
    const strComparisonOpTagsCount: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_TagsCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_PaperAttentionEN.con_TagsCount,
      objvgs_PaperAttentionCond.tagsCount,
      strComparisonOpTagsCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperAttentionCond.dicFldComparisonOp,
      clsvgs_PaperAttentionEN.con_TeaQCount,
    ) == true
  ) {
    const strComparisonOpTeaQCount: string =
      objvgs_PaperAttentionCond.dicFldComparisonOp[clsvgs_PaperAttentionEN.con_TeaQCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_PaperAttentionEN.con_TeaQCount,
      objvgs_PaperAttentionCond.teaQCount,
      strComparisonOpTeaQCount,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvgs_PaperAttentionENS:源对象
 * @param objvgs_PaperAttentionENT:目标对象
 */
export function vgs_PaperAttention_CopyObjTo(
  objvgs_PaperAttentionENS: clsvgs_PaperAttentionEN,
  objvgs_PaperAttentionENT: clsvgs_PaperAttentionEN,
): void {
  objvgs_PaperAttentionENT.paperAttentionId = objvgs_PaperAttentionENS.paperAttentionId; //论文收藏Id
  objvgs_PaperAttentionENT.paperId = objvgs_PaperAttentionENS.paperId; //论文Id
  objvgs_PaperAttentionENT.paperTitle = objvgs_PaperAttentionENS.paperTitle; //论文标题
  objvgs_PaperAttentionENT.author = objvgs_PaperAttentionENS.author; //作者
  objvgs_PaperAttentionENT.keyword = objvgs_PaperAttentionENS.keyword; //关键字
  objvgs_PaperAttentionENT.browseNumber = objvgs_PaperAttentionENS.browseNumber; //浏览量
  objvgs_PaperAttentionENT.userId = objvgs_PaperAttentionENS.userId; //用户ID
  objvgs_PaperAttentionENT.paperGroupId = objvgs_PaperAttentionENS.paperGroupId; //组Id
  objvgs_PaperAttentionENT.updUser = objvgs_PaperAttentionENS.updUser; //修改人
  objvgs_PaperAttentionENT.updDate = objvgs_PaperAttentionENS.updDate; //修改日期
  objvgs_PaperAttentionENT.meno = objvgs_PaperAttentionENS.meno; //备注
  objvgs_PaperAttentionENT.paperGroupName = objvgs_PaperAttentionENS.paperGroupName; //组名
  objvgs_PaperAttentionENT.paperQCount = objvgs_PaperAttentionENS.paperQCount; //论文答疑数
  objvgs_PaperAttentionENT.subVCount = objvgs_PaperAttentionENS.subVCount; //论文子观点数
  objvgs_PaperAttentionENT.tagsCount = objvgs_PaperAttentionENS.tagsCount; //论文标注数
  objvgs_PaperAttentionENT.teaQCount = objvgs_PaperAttentionENS.teaQCount; //教师提问数
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvgs_PaperAttentionENS:源对象
 * @param objvgs_PaperAttentionENT:目标对象
 */
export function vgs_PaperAttention_GetObjFromJsonObj(
  objvgs_PaperAttentionENS: clsvgs_PaperAttentionEN,
): clsvgs_PaperAttentionEN {
  const objvgs_PaperAttentionENT: clsvgs_PaperAttentionEN = new clsvgs_PaperAttentionEN();
  ObjectAssign(objvgs_PaperAttentionENT, objvgs_PaperAttentionENS);
  return objvgs_PaperAttentionENT;
}
