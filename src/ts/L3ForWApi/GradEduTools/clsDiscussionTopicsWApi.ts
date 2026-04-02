/**
 * 类名:clsDiscussionTopicsWApi
 * 表名:DiscussionTopics(01120588)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:11
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 讨论主题(DiscussionTopics)
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
import { clsDiscussionTopicsEN } from '@/ts/L0Entity/GradEduTools/clsDiscussionTopicsEN';
import { vDiscussionTopics_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduTools/clsvDiscussionTopicsWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const discussionTopics_Controller = 'DiscussionTopicsApi';
export const discussionTopics_ConstructorName = 'discussionTopics';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTopicsId:关键字
 * @returns 对象
 **/
export async function DiscussionTopics_GetObjByTopicsIdAsync(
  strTopicsId: string,
): Promise<clsDiscussionTopicsEN | null> {
  const strThisFuncName = 'GetObjByTopicsIdAsync';

  if (IsNullOrEmpty(strTopicsId) == true) {
    const strMsg = Format(
      '参数:[strTopicsId]不能为空!(In clsDiscussionTopicsWApi.GetObjByTopicsIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicsId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTopicsId]的长度:[{0}]不正确!(clsDiscussionTopicsWApi.GetObjByTopicsIdAsync)',
      strTopicsId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTopicsId';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTopicsId,
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
      const objDiscussionTopics = DiscussionTopics_GetObjFromJsonObj(returnObj);
      return objDiscussionTopics;
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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
 * @param strTopicsId:所给的关键字
 * @returns 对象
 */
export async function DiscussionTopics_GetObjByTopicsIdCache(
  strTopicsId: string,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTopicsIdCache';

  if (IsNullOrEmpty(strTopicsId) == true) {
    const strMsg = Format(
      '参数:[strTopicsId]不能为空!(In clsDiscussionTopicsWApi.GetObjByTopicsIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicsId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTopicsId]的长度:[{0}]不正确!(clsDiscussionTopicsWApi.GetObjByTopicsIdCache)',
      strTopicsId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDiscussionTopicsObjLstCache = await DiscussionTopics_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrDiscussionTopicsSel = arrDiscussionTopicsObjLstCache.filter(
      (x) => x.topicsId == strTopicsId,
    );
    let objDiscussionTopics: clsDiscussionTopicsEN;
    if (arrDiscussionTopicsSel.length > 0) {
      objDiscussionTopics = arrDiscussionTopicsSel[0];
      return objDiscussionTopics;
    } else {
      if (bolTryAsyncOnce == true) {
        const objDiscussionTopicsConst = await DiscussionTopics_GetObjByTopicsIdAsync(strTopicsId);
        if (objDiscussionTopicsConst != null) {
          DiscussionTopics_ReFreshThisCache(strIdCurrEduCls);
          return objDiscussionTopicsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTopicsId,
      discussionTopics_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strTopicsId:所给的关键字
 * @returns 对象
 */
export async function DiscussionTopics_GetObjByTopicsIdlocalStorage(strTopicsId: string) {
  const strThisFuncName = 'GetObjByTopicsIdlocalStorage';

  if (IsNullOrEmpty(strTopicsId) == true) {
    const strMsg = Format(
      '参数:[strTopicsId]不能为空!(In clsDiscussionTopicsWApi.GetObjByTopicsIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicsId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTopicsId]的长度:[{0}]不正确!(clsDiscussionTopicsWApi.GetObjByTopicsIdlocalStorage)',
      strTopicsId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsDiscussionTopicsEN._CurrTabName, strTopicsId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objDiscussionTopicsCache: clsDiscussionTopicsEN = JSON.parse(strTempObj);
    return objDiscussionTopicsCache;
  }
  try {
    const objDiscussionTopics = await DiscussionTopics_GetObjByTopicsIdAsync(strTopicsId);
    if (objDiscussionTopics != null) {
      localStorage.setItem(strKey, JSON.stringify(objDiscussionTopics));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objDiscussionTopics;
    }
    return objDiscussionTopics;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTopicsId,
      discussionTopics_ConstructorName,
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
 * @param objDiscussionTopics:所给的对象
 * @returns 对象
 */
export async function DiscussionTopics_UpdateObjInLstCache(
  objDiscussionTopics: clsDiscussionTopicsEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrDiscussionTopicsObjLstCache = await DiscussionTopics_GetObjLstCache(strIdCurrEduCls);
    const obj = arrDiscussionTopicsObjLstCache.find(
      (x) => x.topicsId == objDiscussionTopics.topicsId,
    );
    if (obj != null) {
      objDiscussionTopics.topicsId = obj.topicsId;
      ObjectAssign(obj, objDiscussionTopics);
    } else {
      arrDiscussionTopicsObjLstCache.push(objDiscussionTopics);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      discussionTopics_ConstructorName,
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function DiscussionTopics_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsDiscussionTopicsWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsDiscussionTopicsWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsDiscussionTopicsEN.con_TopicsId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsDiscussionTopicsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsDiscussionTopicsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTopicsId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objDiscussionTopics = await DiscussionTopics_GetObjByTopicsIdCache(
    strTopicsId,
    strIdCurrEduClsClassfy,
  );
  if (objDiscussionTopics == null) return '';
  if (objDiscussionTopics.GetFldValue(strOutFldName) == null) return '';
  return objDiscussionTopics.GetFldValue(strOutFldName).toString();
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
export function DiscussionTopics_SortFunDefa(
  a: clsDiscussionTopicsEN,
  b: clsDiscussionTopicsEN,
): number {
  return a.topicsId.localeCompare(b.topicsId);
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
export function DiscussionTopics_SortFunDefa2Fld(
  a: clsDiscussionTopicsEN,
  b: clsDiscussionTopicsEN,
): number {
  if (a.discussionTypeId == b.discussionTypeId) return a.topicsTitle.localeCompare(b.topicsTitle);
  else return a.discussionTypeId.localeCompare(b.discussionTypeId);
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
export function DiscussionTopics_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDiscussionTopicsEN.con_TopicsId:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          return a.topicsId.localeCompare(b.topicsId);
        };
      case clsDiscussionTopicsEN.con_DiscussionTypeId:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          return a.discussionTypeId.localeCompare(b.discussionTypeId);
        };
      case clsDiscussionTopicsEN.con_TopicsTitle:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          if (a.topicsTitle == null) return -1;
          if (b.topicsTitle == null) return 1;
          return a.topicsTitle.localeCompare(b.topicsTitle);
        };
      case clsDiscussionTopicsEN.con_TopicsContent:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          if (a.topicsContent == null) return -1;
          if (b.topicsContent == null) return 1;
          return a.topicsContent.localeCompare(b.topicsContent);
        };
      case clsDiscussionTopicsEN.con_IsAudit:
        return (a: clsDiscussionTopicsEN) => {
          if (a.isAudit == true) return 1;
          else return -1;
        };
      case clsDiscussionTopicsEN.con_IsTop:
        return (a: clsDiscussionTopicsEN) => {
          if (a.isTop == true) return 1;
          else return -1;
        };
      case clsDiscussionTopicsEN.con_BrowseNumber:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          return a.browseNumber - b.browseNumber;
        };
      case clsDiscussionTopicsEN.con_UpdDate:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsDiscussionTopicsEN.con_UpdUser:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsDiscussionTopicsEN.con_Memo:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsDiscussionTopicsEN.con_IdCurrEduCls:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsDiscussionTopicsEN.con_SubCount:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          return a.subCount - b.subCount;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DiscussionTopics]中不存在!(in ${discussionTopics_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDiscussionTopicsEN.con_TopicsId:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          return b.topicsId.localeCompare(a.topicsId);
        };
      case clsDiscussionTopicsEN.con_DiscussionTypeId:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          return b.discussionTypeId.localeCompare(a.discussionTypeId);
        };
      case clsDiscussionTopicsEN.con_TopicsTitle:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          if (b.topicsTitle == null) return -1;
          if (a.topicsTitle == null) return 1;
          return b.topicsTitle.localeCompare(a.topicsTitle);
        };
      case clsDiscussionTopicsEN.con_TopicsContent:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          if (b.topicsContent == null) return -1;
          if (a.topicsContent == null) return 1;
          return b.topicsContent.localeCompare(a.topicsContent);
        };
      case clsDiscussionTopicsEN.con_IsAudit:
        return (b: clsDiscussionTopicsEN) => {
          if (b.isAudit == true) return 1;
          else return -1;
        };
      case clsDiscussionTopicsEN.con_IsTop:
        return (b: clsDiscussionTopicsEN) => {
          if (b.isTop == true) return 1;
          else return -1;
        };
      case clsDiscussionTopicsEN.con_BrowseNumber:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          return b.browseNumber - a.browseNumber;
        };
      case clsDiscussionTopicsEN.con_UpdDate:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsDiscussionTopicsEN.con_UpdUser:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsDiscussionTopicsEN.con_Memo:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsDiscussionTopicsEN.con_IdCurrEduCls:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsDiscussionTopicsEN.con_SubCount:
        return (a: clsDiscussionTopicsEN, b: clsDiscussionTopicsEN) => {
          return b.subCount - a.subCount;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DiscussionTopics]中不存在!(in ${discussionTopics_ConstructorName}.${strThisFuncName})`;
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
export async function DiscussionTopics_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDiscussionTopicsEN.con_TopicsId:
      return (obj: clsDiscussionTopicsEN) => {
        return obj.topicsId === value;
      };
    case clsDiscussionTopicsEN.con_DiscussionTypeId:
      return (obj: clsDiscussionTopicsEN) => {
        return obj.discussionTypeId === value;
      };
    case clsDiscussionTopicsEN.con_TopicsTitle:
      return (obj: clsDiscussionTopicsEN) => {
        return obj.topicsTitle === value;
      };
    case clsDiscussionTopicsEN.con_TopicsContent:
      return (obj: clsDiscussionTopicsEN) => {
        return obj.topicsContent === value;
      };
    case clsDiscussionTopicsEN.con_IsAudit:
      return (obj: clsDiscussionTopicsEN) => {
        return obj.isAudit === value;
      };
    case clsDiscussionTopicsEN.con_IsTop:
      return (obj: clsDiscussionTopicsEN) => {
        return obj.isTop === value;
      };
    case clsDiscussionTopicsEN.con_BrowseNumber:
      return (obj: clsDiscussionTopicsEN) => {
        return obj.browseNumber === value;
      };
    case clsDiscussionTopicsEN.con_UpdDate:
      return (obj: clsDiscussionTopicsEN) => {
        return obj.updDate === value;
      };
    case clsDiscussionTopicsEN.con_UpdUser:
      return (obj: clsDiscussionTopicsEN) => {
        return obj.updUser === value;
      };
    case clsDiscussionTopicsEN.con_Memo:
      return (obj: clsDiscussionTopicsEN) => {
        return obj.memo === value;
      };
    case clsDiscussionTopicsEN.con_IdCurrEduCls:
      return (obj: clsDiscussionTopicsEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsDiscussionTopicsEN.con_SubCount:
      return (obj: clsDiscussionTopicsEN) => {
        return obj.subCount === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DiscussionTopics]中不存在!(in ${discussionTopics_ConstructorName}.${strThisFuncName})`;
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function DiscussionTopics_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsDiscussionTopicsWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsDiscussionTopicsWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsDiscussionTopicsEN.con_TopicsId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrDiscussionTopics = await DiscussionTopics_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrDiscussionTopics == null) return [];
  let arrDiscussionTopicsSel = arrDiscussionTopics;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrDiscussionTopicsSel.length == 0) return [];
  return arrDiscussionTopicsSel.map((x) => x.topicsId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DiscussionTopics_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
export async function DiscussionTopics_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
export async function DiscussionTopics_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDiscussionTopicsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

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
      const objDiscussionTopics = DiscussionTopics_GetObjFromJsonObj(returnObj);
      return objDiscussionTopics;
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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
export async function DiscussionTopics_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsDiscussionTopicsEN.WhereFormat) == false) {
    strWhereCond = Format(clsDiscussionTopicsEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsDiscussionTopicsEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsDiscussionTopicsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDiscussionTopicsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrDiscussionTopicsExObjLstCache: Array<clsDiscussionTopicsEN> = CacheHelper.Get(strKey);
    const arrDiscussionTopicsObjLstT = DiscussionTopics_GetObjLstByJSONObjLst(
      arrDiscussionTopicsExObjLstCache,
    );
    return arrDiscussionTopicsObjLstT;
  }
  try {
    const arrDiscussionTopicsExObjLst = await DiscussionTopics_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrDiscussionTopicsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDiscussionTopicsExObjLst.length,
    );
    console.log(strInfo);
    return arrDiscussionTopicsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      discussionTopics_ConstructorName,
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
export async function DiscussionTopics_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsDiscussionTopicsEN.WhereFormat) == false) {
    strWhereCond = Format(clsDiscussionTopicsEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsDiscussionTopicsEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsDiscussionTopicsEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsDiscussionTopicsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDiscussionTopicsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDiscussionTopicsExObjLstCache: Array<clsDiscussionTopicsEN> =
      JSON.parse(strTempObjLst);
    const arrDiscussionTopicsObjLstT = DiscussionTopics_GetObjLstByJSONObjLst(
      arrDiscussionTopicsExObjLstCache,
    );
    return arrDiscussionTopicsObjLstT;
  }
  try {
    const arrDiscussionTopicsExObjLst = await DiscussionTopics_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrDiscussionTopicsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDiscussionTopicsExObjLst.length,
    );
    console.log(strInfo);
    return arrDiscussionTopicsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      discussionTopics_ConstructorName,
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
export async function DiscussionTopics_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsDiscussionTopicsEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDiscussionTopicsObjLstCache: Array<clsDiscussionTopicsEN> = JSON.parse(strTempObjLst);
    return arrDiscussionTopicsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function DiscussionTopics_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDiscussionTopicsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

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
          discussionTopics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DiscussionTopics_GetObjLstByJSONObjLst(returnObjLst);
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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
export async function DiscussionTopics_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsDiscussionTopicsEN.WhereFormat) == false) {
    strWhereCond = Format(clsDiscussionTopicsEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsDiscussionTopicsEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsDiscussionTopicsEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsDiscussionTopicsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDiscussionTopicsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDiscussionTopicsExObjLstCache: Array<clsDiscussionTopicsEN> =
      JSON.parse(strTempObjLst);
    const arrDiscussionTopicsObjLstT = DiscussionTopics_GetObjLstByJSONObjLst(
      arrDiscussionTopicsExObjLstCache,
    );
    return arrDiscussionTopicsObjLstT;
  }
  try {
    const arrDiscussionTopicsExObjLst = await DiscussionTopics_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrDiscussionTopicsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDiscussionTopicsExObjLst.length,
    );
    console.log(strInfo);
    return arrDiscussionTopicsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      discussionTopics_ConstructorName,
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
export async function DiscussionTopics_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsDiscussionTopicsEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDiscussionTopicsObjLstCache: Array<clsDiscussionTopicsEN> = JSON.parse(strTempObjLst);
    return arrDiscussionTopicsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DiscussionTopics_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsDiscussionTopicsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsDiscussionTopicsWApi.DiscussionTopics_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsDiscussionTopicsWApi.DiscussionTopics_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrDiscussionTopicsObjLstCache;
  switch (clsDiscussionTopicsEN.CacheModeId) {
    case '04': //sessionStorage
      arrDiscussionTopicsObjLstCache = await DiscussionTopics_GetObjLstsessionStorage(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrDiscussionTopicsObjLstCache = await DiscussionTopics_GetObjLstlocalStorage(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrDiscussionTopicsObjLstCache = await DiscussionTopics_GetObjLstClientCache(strIdCurrEduCls);
      break;
    default:
      arrDiscussionTopicsObjLstCache = await DiscussionTopics_GetObjLstClientCache(strIdCurrEduCls);
      break;
  }
  return arrDiscussionTopicsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DiscussionTopics_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrDiscussionTopicsObjLstCache;
  switch (clsDiscussionTopicsEN.CacheModeId) {
    case '04': //sessionStorage
      arrDiscussionTopicsObjLstCache = await DiscussionTopics_GetObjLstsessionStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrDiscussionTopicsObjLstCache = await DiscussionTopics_GetObjLstlocalStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrDiscussionTopicsObjLstCache = null;
      break;
    default:
      arrDiscussionTopicsObjLstCache = null;
      break;
  }
  return arrDiscussionTopicsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTopicsIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DiscussionTopics_GetSubObjLstCache(
  objDiscussionTopicsCond: clsDiscussionTopicsEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrDiscussionTopicsObjLstCache = await DiscussionTopics_GetObjLstCache(strIdCurrEduCls);
  let arrDiscussionTopicsSel = arrDiscussionTopicsObjLstCache;
  if (
    objDiscussionTopicsCond.sfFldComparisonOp == null ||
    objDiscussionTopicsCond.sfFldComparisonOp == ''
  )
    return arrDiscussionTopicsSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDiscussionTopicsCond.sfFldComparisonOp,
  );
  //console.log("clsDiscussionTopicsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDiscussionTopicsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDiscussionTopicsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDiscussionTopicsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDiscussionTopicsCond),
      discussionTopics_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDiscussionTopicsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTopicsId:关键字列表
 * @returns 对象列表
 **/
export async function DiscussionTopics_GetObjLstByTopicsIdLstAsync(
  arrTopicsId: Array<string>,
): Promise<Array<clsDiscussionTopicsEN>> {
  const strThisFuncName = 'GetObjLstByTopicsIdLstAsync';
  const strAction = 'GetObjLstByTopicsIdLst';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTopicsId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          discussionTopics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DiscussionTopics_GetObjLstByJSONObjLst(returnObjLst);
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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
 * @param arrstrTopicsIdLst:关键字列表
 * @returns 对象列表
 */
export async function DiscussionTopics_GetObjLstByTopicsIdLstCache(
  arrTopicsIdLst: Array<string>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByTopicsIdLstCache';
  try {
    const arrDiscussionTopicsObjLstCache = await DiscussionTopics_GetObjLstCache(strIdCurrEduCls);
    const arrDiscussionTopicsSel = arrDiscussionTopicsObjLstCache.filter(
      (x) => arrTopicsIdLst.indexOf(x.topicsId) > -1,
    );
    return arrDiscussionTopicsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTopicsIdLst.join(','),
      discussionTopics_ConstructorName,
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
export async function DiscussionTopics_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDiscussionTopicsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

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
          discussionTopics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DiscussionTopics_GetObjLstByJSONObjLst(returnObjLst);
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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
export async function DiscussionTopics_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDiscussionTopicsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

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
          discussionTopics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DiscussionTopics_GetObjLstByJSONObjLst(returnObjLst);
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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
export async function DiscussionTopics_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsDiscussionTopicsEN>();
  const arrDiscussionTopicsObjLstCache = await DiscussionTopics_GetObjLstCache(strIdCurrEduCls);
  if (arrDiscussionTopicsObjLstCache.length == 0) return arrDiscussionTopicsObjLstCache;
  let arrDiscussionTopicsSel = arrDiscussionTopicsObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objDiscussionTopicsCond = new clsDiscussionTopicsEN();
  ObjectAssign(objDiscussionTopicsCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsDiscussionTopicsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDiscussionTopicsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDiscussionTopicsSel.length == 0) return arrDiscussionTopicsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDiscussionTopicsSel = arrDiscussionTopicsSel.sort(
        DiscussionTopics_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDiscussionTopicsSel = arrDiscussionTopicsSel.sort(objPagerPara.sortFun);
    }
    arrDiscussionTopicsSel = arrDiscussionTopicsSel.slice(intStart, intEnd);
    return arrDiscussionTopicsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      discussionTopics_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDiscussionTopicsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function DiscussionTopics_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDiscussionTopicsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDiscussionTopicsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

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
          discussionTopics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DiscussionTopics_GetObjLstByJSONObjLst(returnObjLst);
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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
 * @param strTopicsId:关键字
 * @returns 获取删除的结果
 **/
export async function DiscussionTopics_DelRecordAsync(strTopicsId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strTopicsId);

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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
 * @param arrTopicsId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DiscussionTopics_DelDiscussionTopicssAsync(
  arrTopicsId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDiscussionTopicssAsync';
  const strAction = 'DelDiscussionTopicss';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTopicsId, config);
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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
export async function DiscussionTopics_DelDiscussionTopicssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelDiscussionTopicssByCondAsync';
  const strAction = 'DelDiscussionTopicssByCond';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
 * @param objDiscussionTopicsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DiscussionTopics_AddNewRecordAsync(
  objDiscussionTopicsEN: clsDiscussionTopicsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objDiscussionTopicsEN.topicsId === null || objDiscussionTopicsEN.topicsId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objDiscussionTopicsEN);
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDiscussionTopicsEN, config);
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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
 * @param objDiscussionTopicsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DiscussionTopics_AddNewRecordWithMaxIdAsync(
  objDiscussionTopicsEN: clsDiscussionTopicsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDiscussionTopicsEN, config);
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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
 * @param objDiscussionTopicsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DiscussionTopics_AddNewRecordWithReturnKeyAsync(
  objDiscussionTopicsEN: clsDiscussionTopicsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDiscussionTopicsEN, config);
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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
 * @param objDiscussionTopicsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DiscussionTopics_UpdateRecordAsync(
  objDiscussionTopicsEN: clsDiscussionTopicsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDiscussionTopicsEN.sfUpdFldSetStr === undefined ||
    objDiscussionTopicsEN.sfUpdFldSetStr === null ||
    objDiscussionTopicsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDiscussionTopicsEN.topicsId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDiscussionTopicsEN, config);
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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
 * @param objDiscussionTopicsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DiscussionTopics_UpdateWithConditionAsync(
  objDiscussionTopicsEN: clsDiscussionTopicsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDiscussionTopicsEN.sfUpdFldSetStr === undefined ||
    objDiscussionTopicsEN.sfUpdFldSetStr === null ||
    objDiscussionTopicsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDiscussionTopicsEN.topicsId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);
  objDiscussionTopicsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDiscussionTopicsEN, config);
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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
 * @param objstrTopicsIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DiscussionTopics_IsExistRecordCache(
  objDiscussionTopicsCond: clsDiscussionTopicsEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrDiscussionTopicsObjLstCache = await DiscussionTopics_GetObjLstCache(strIdCurrEduCls);
  if (arrDiscussionTopicsObjLstCache == null) return false;
  let arrDiscussionTopicsSel = arrDiscussionTopicsObjLstCache;
  if (
    objDiscussionTopicsCond.sfFldComparisonOp == null ||
    objDiscussionTopicsCond.sfFldComparisonOp == ''
  )
    return arrDiscussionTopicsSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDiscussionTopicsCond.sfFldComparisonOp,
  );
  //console.log("clsDiscussionTopicsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDiscussionTopicsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDiscussionTopicsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDiscussionTopicsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objDiscussionTopicsCond),
      discussionTopics_ConstructorName,
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
export async function DiscussionTopics_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
 * @param strTopicsId:所给的关键字
 * @returns 对象
 */
export async function DiscussionTopics_IsExistCache(strTopicsId: string, strIdCurrEduCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrDiscussionTopicsObjLstCache = await DiscussionTopics_GetObjLstCache(strIdCurrEduCls);
  if (arrDiscussionTopicsObjLstCache == null) return false;
  try {
    const arrDiscussionTopicsSel = arrDiscussionTopicsObjLstCache.filter(
      (x) => x.topicsId == strTopicsId,
    );
    if (arrDiscussionTopicsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTopicsId,
      discussionTopics_ConstructorName,
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
 * @param strTopicsId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function DiscussionTopics_IsExistAsync(strTopicsId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTopicsId,
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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
export async function DiscussionTopics_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
 * @param objDiscussionTopicsCond:条件对象
 * @returns 对象列表记录数
 */
export async function DiscussionTopics_GetRecCountByCondCache(
  objDiscussionTopicsCond: clsDiscussionTopicsEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrDiscussionTopicsObjLstCache = await DiscussionTopics_GetObjLstCache(strIdCurrEduCls);
  if (arrDiscussionTopicsObjLstCache == null) return 0;
  let arrDiscussionTopicsSel = arrDiscussionTopicsObjLstCache;
  if (
    objDiscussionTopicsCond.sfFldComparisonOp == null ||
    objDiscussionTopicsCond.sfFldComparisonOp == ''
  )
    return arrDiscussionTopicsSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDiscussionTopicsCond.sfFldComparisonOp,
  );
  //console.log("clsDiscussionTopicsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDiscussionTopicsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDiscussionTopicsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDiscussionTopicsSel = arrDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDiscussionTopicsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDiscussionTopicsCond),
      discussionTopics_ConstructorName,
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
export async function DiscussionTopics_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(discussionTopics_Controller, strAction);

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
        discussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionTopics_ConstructorName,
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
export function DiscussionTopics_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DiscussionTopics_ReFreshCache(strIdCurrEduCls: string): void {
  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空!(In clsDiscussionTopicsWApi.clsDiscussionTopicsWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsDiscussionTopicsWApi.clsDiscussionTopicsWApi.ReFreshCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsDiscussionTopicsEN._CurrTabName, strIdCurrEduCls);
  switch (clsDiscussionTopicsEN.CacheModeId) {
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
  vDiscussionTopics_ReFreshThisCache(strIdCurrEduCls);
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function DiscussionTopics_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsDiscussionTopicsEN._CurrTabName, strIdCurrEduCls);
    switch (clsDiscussionTopicsEN.CacheModeId) {
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
export function DiscussionTopics_CheckPropertyNew(pobjDiscussionTopicsEN: clsDiscussionTopicsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.discussionTypeId) === true ||
    pobjDiscussionTopicsEN.discussionTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[讨论类型Id]不能为空(In 讨论主题)!(clsDiscussionTopicsBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.topicsId) == false &&
    GetStrLen(pobjDiscussionTopicsEN.topicsId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主题Id(topicsId)]的长度不能超过8(In 讨论主题(DiscussionTopics))!值:$(pobjDiscussionTopicsEN.topicsId)(clsDiscussionTopicsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.discussionTypeId) == false &&
    GetStrLen(pobjDiscussionTopicsEN.discussionTypeId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[讨论类型Id(discussionTypeId)]的长度不能超过8(In 讨论主题(DiscussionTopics))!值:$(pobjDiscussionTopicsEN.discussionTypeId)(clsDiscussionTopicsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.topicsTitle) == false &&
    GetStrLen(pobjDiscussionTopicsEN.topicsTitle) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主题标题(topicsTitle)]的长度不能超过200(In 讨论主题(DiscussionTopics))!值:$(pobjDiscussionTopicsEN.topicsTitle)(clsDiscussionTopicsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.updDate) == false &&
    GetStrLen(pobjDiscussionTopicsEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 讨论主题(DiscussionTopics))!值:$(pobjDiscussionTopicsEN.updDate)(clsDiscussionTopicsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.updUser) == false &&
    GetStrLen(pobjDiscussionTopicsEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 讨论主题(DiscussionTopics))!值:$(pobjDiscussionTopicsEN.updUser)(clsDiscussionTopicsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.memo) == false &&
    GetStrLen(pobjDiscussionTopicsEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 讨论主题(DiscussionTopics))!值:$(pobjDiscussionTopicsEN.memo)(clsDiscussionTopicsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.idCurrEduCls) == false &&
    GetStrLen(pobjDiscussionTopicsEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 讨论主题(DiscussionTopics))!值:$(pobjDiscussionTopicsEN.idCurrEduCls)(clsDiscussionTopicsBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.topicsId) == false &&
    undefined !== pobjDiscussionTopicsEN.topicsId &&
    tzDataType.isString(pobjDiscussionTopicsEN.topicsId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题Id(topicsId)]的值:[$(pobjDiscussionTopicsEN.topicsId)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.discussionTypeId) == false &&
    undefined !== pobjDiscussionTopicsEN.discussionTypeId &&
    tzDataType.isString(pobjDiscussionTopicsEN.discussionTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[讨论类型Id(discussionTypeId)]的值:[$(pobjDiscussionTopicsEN.discussionTypeId)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.topicsTitle) == false &&
    undefined !== pobjDiscussionTopicsEN.topicsTitle &&
    tzDataType.isString(pobjDiscussionTopicsEN.topicsTitle) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题标题(topicsTitle)]的值:[$(pobjDiscussionTopicsEN.topicsTitle)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.topicsContent) == false &&
    undefined !== pobjDiscussionTopicsEN.topicsContent &&
    tzDataType.isString(pobjDiscussionTopicsEN.topicsContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题内容(topicsContent)]的值:[$(pobjDiscussionTopicsEN.topicsContent)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDiscussionTopicsEN.isAudit &&
    undefined !== pobjDiscussionTopicsEN.isAudit &&
    tzDataType.isBoolean(pobjDiscussionTopicsEN.isAudit) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否审核(isAudit)]的值:[$(pobjDiscussionTopicsEN.isAudit)], 非法,应该为布尔型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDiscussionTopicsEN.isTop &&
    undefined !== pobjDiscussionTopicsEN.isTop &&
    tzDataType.isBoolean(pobjDiscussionTopicsEN.isTop) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否置顶(isTop)]的值:[$(pobjDiscussionTopicsEN.isTop)], 非法,应该为布尔型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDiscussionTopicsEN.browseNumber &&
    undefined !== pobjDiscussionTopicsEN.browseNumber &&
    tzDataType.isNumber(pobjDiscussionTopicsEN.browseNumber) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[浏览量(browseNumber)]的值:[$(pobjDiscussionTopicsEN.browseNumber)], 非法,应该为数值型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.updDate) == false &&
    undefined !== pobjDiscussionTopicsEN.updDate &&
    tzDataType.isString(pobjDiscussionTopicsEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjDiscussionTopicsEN.updDate)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.updUser) == false &&
    undefined !== pobjDiscussionTopicsEN.updUser &&
    tzDataType.isString(pobjDiscussionTopicsEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjDiscussionTopicsEN.updUser)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.memo) == false &&
    undefined !== pobjDiscussionTopicsEN.memo &&
    tzDataType.isString(pobjDiscussionTopicsEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjDiscussionTopicsEN.memo)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.idCurrEduCls) == false &&
    undefined !== pobjDiscussionTopicsEN.idCurrEduCls &&
    tzDataType.isString(pobjDiscussionTopicsEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjDiscussionTopicsEN.idCurrEduCls)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDiscussionTopicsEN.subCount &&
    undefined !== pobjDiscussionTopicsEN.subCount &&
    tzDataType.isNumber(pobjDiscussionTopicsEN.subCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[SubCount(subCount)]的值:[$(pobjDiscussionTopicsEN.subCount)], 非法,应该为数值型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.discussionTypeId) == false &&
    pobjDiscussionTopicsEN.discussionTypeId != '[nuull]' &&
    GetStrLen(pobjDiscussionTopicsEN.discussionTypeId) != 8
  ) {
    throw '(errid:Watl000415)字段[讨论类型Id]作为外键字段,长度应该为8(In 讨论主题)!(clsDiscussionTopicsBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DiscussionTopics_CheckProperty4Update(
  pobjDiscussionTopicsEN: clsDiscussionTopicsEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.topicsId) == false &&
    GetStrLen(pobjDiscussionTopicsEN.topicsId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主题Id(topicsId)]的长度不能超过8(In 讨论主题(DiscussionTopics))!值:$(pobjDiscussionTopicsEN.topicsId)(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.discussionTypeId) == false &&
    GetStrLen(pobjDiscussionTopicsEN.discussionTypeId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[讨论类型Id(discussionTypeId)]的长度不能超过8(In 讨论主题(DiscussionTopics))!值:$(pobjDiscussionTopicsEN.discussionTypeId)(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.topicsTitle) == false &&
    GetStrLen(pobjDiscussionTopicsEN.topicsTitle) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主题标题(topicsTitle)]的长度不能超过200(In 讨论主题(DiscussionTopics))!值:$(pobjDiscussionTopicsEN.topicsTitle)(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.updDate) == false &&
    GetStrLen(pobjDiscussionTopicsEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 讨论主题(DiscussionTopics))!值:$(pobjDiscussionTopicsEN.updDate)(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.updUser) == false &&
    GetStrLen(pobjDiscussionTopicsEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 讨论主题(DiscussionTopics))!值:$(pobjDiscussionTopicsEN.updUser)(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.memo) == false &&
    GetStrLen(pobjDiscussionTopicsEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 讨论主题(DiscussionTopics))!值:$(pobjDiscussionTopicsEN.memo)(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.idCurrEduCls) == false &&
    GetStrLen(pobjDiscussionTopicsEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 讨论主题(DiscussionTopics))!值:$(pobjDiscussionTopicsEN.idCurrEduCls)(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.topicsId) == false &&
    undefined !== pobjDiscussionTopicsEN.topicsId &&
    tzDataType.isString(pobjDiscussionTopicsEN.topicsId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题Id(topicsId)]的值:[$(pobjDiscussionTopicsEN.topicsId)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.discussionTypeId) == false &&
    undefined !== pobjDiscussionTopicsEN.discussionTypeId &&
    tzDataType.isString(pobjDiscussionTopicsEN.discussionTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[讨论类型Id(discussionTypeId)]的值:[$(pobjDiscussionTopicsEN.discussionTypeId)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.topicsTitle) == false &&
    undefined !== pobjDiscussionTopicsEN.topicsTitle &&
    tzDataType.isString(pobjDiscussionTopicsEN.topicsTitle) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题标题(topicsTitle)]的值:[$(pobjDiscussionTopicsEN.topicsTitle)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.topicsContent) == false &&
    undefined !== pobjDiscussionTopicsEN.topicsContent &&
    tzDataType.isString(pobjDiscussionTopicsEN.topicsContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题内容(topicsContent)]的值:[$(pobjDiscussionTopicsEN.topicsContent)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDiscussionTopicsEN.isAudit &&
    undefined !== pobjDiscussionTopicsEN.isAudit &&
    tzDataType.isBoolean(pobjDiscussionTopicsEN.isAudit) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否审核(isAudit)]的值:[$(pobjDiscussionTopicsEN.isAudit)], 非法,应该为布尔型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDiscussionTopicsEN.isTop &&
    undefined !== pobjDiscussionTopicsEN.isTop &&
    tzDataType.isBoolean(pobjDiscussionTopicsEN.isTop) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否置顶(isTop)]的值:[$(pobjDiscussionTopicsEN.isTop)], 非法,应该为布尔型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDiscussionTopicsEN.browseNumber &&
    undefined !== pobjDiscussionTopicsEN.browseNumber &&
    tzDataType.isNumber(pobjDiscussionTopicsEN.browseNumber) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[浏览量(browseNumber)]的值:[$(pobjDiscussionTopicsEN.browseNumber)], 非法,应该为数值型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.updDate) == false &&
    undefined !== pobjDiscussionTopicsEN.updDate &&
    tzDataType.isString(pobjDiscussionTopicsEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjDiscussionTopicsEN.updDate)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.updUser) == false &&
    undefined !== pobjDiscussionTopicsEN.updUser &&
    tzDataType.isString(pobjDiscussionTopicsEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjDiscussionTopicsEN.updUser)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.memo) == false &&
    undefined !== pobjDiscussionTopicsEN.memo &&
    tzDataType.isString(pobjDiscussionTopicsEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjDiscussionTopicsEN.memo)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.idCurrEduCls) == false &&
    undefined !== pobjDiscussionTopicsEN.idCurrEduCls &&
    tzDataType.isString(pobjDiscussionTopicsEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjDiscussionTopicsEN.idCurrEduCls)], 非法,应该为字符型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDiscussionTopicsEN.subCount &&
    undefined !== pobjDiscussionTopicsEN.subCount &&
    tzDataType.isNumber(pobjDiscussionTopicsEN.subCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[SubCount(subCount)]的值:[$(pobjDiscussionTopicsEN.subCount)], 非法,应该为数值型(In 讨论主题(DiscussionTopics))!(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjDiscussionTopicsEN.topicsId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[主题Id]不能为空(In 讨论主题)!(clsDiscussionTopicsBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjDiscussionTopicsEN.discussionTypeId) == false &&
    pobjDiscussionTopicsEN.discussionTypeId != '[nuull]' &&
    GetStrLen(pobjDiscussionTopicsEN.discussionTypeId) != 8
  ) {
    throw '(errid:Watl000418)字段[讨论类型Id]作为外键字段,长度应该为8(In 讨论主题)!(clsDiscussionTopicsBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DiscussionTopics_GetJSONStrByObj(
  pobjDiscussionTopicsEN: clsDiscussionTopicsEN,
): string {
  pobjDiscussionTopicsEN.sfUpdFldSetStr = pobjDiscussionTopicsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDiscussionTopicsEN);
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
export function DiscussionTopics_GetObjLstByJSONStr(strJSON: string): Array<clsDiscussionTopicsEN> {
  let arrDiscussionTopicsObjLst = new Array<clsDiscussionTopicsEN>();
  if (strJSON === '') {
    return arrDiscussionTopicsObjLst;
  }
  try {
    arrDiscussionTopicsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDiscussionTopicsObjLst;
  }
  return arrDiscussionTopicsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDiscussionTopicsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DiscussionTopics_GetObjLstByJSONObjLst(
  arrDiscussionTopicsObjLstS: Array<clsDiscussionTopicsEN>,
): Array<clsDiscussionTopicsEN> {
  const arrDiscussionTopicsObjLst = new Array<clsDiscussionTopicsEN>();
  for (const objInFor of arrDiscussionTopicsObjLstS) {
    const obj1 = DiscussionTopics_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDiscussionTopicsObjLst.push(obj1);
  }
  return arrDiscussionTopicsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DiscussionTopics_GetObjByJSONStr(strJSON: string): clsDiscussionTopicsEN {
  let pobjDiscussionTopicsEN = new clsDiscussionTopicsEN();
  if (strJSON === '') {
    return pobjDiscussionTopicsEN;
  }
  try {
    pobjDiscussionTopicsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDiscussionTopicsEN;
  }
  return pobjDiscussionTopicsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DiscussionTopics_GetCombineCondition(
  objDiscussionTopicsCond: clsDiscussionTopicsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTopicsCond.dicFldComparisonOp,
      clsDiscussionTopicsEN.con_TopicsId,
    ) == true
  ) {
    const strComparisonOpTopicsId: string =
      objDiscussionTopicsCond.dicFldComparisonOp[clsDiscussionTopicsEN.con_TopicsId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDiscussionTopicsEN.con_TopicsId,
      objDiscussionTopicsCond.topicsId,
      strComparisonOpTopicsId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTopicsCond.dicFldComparisonOp,
      clsDiscussionTopicsEN.con_DiscussionTypeId,
    ) == true
  ) {
    const strComparisonOpDiscussionTypeId: string =
      objDiscussionTopicsCond.dicFldComparisonOp[clsDiscussionTopicsEN.con_DiscussionTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDiscussionTopicsEN.con_DiscussionTypeId,
      objDiscussionTopicsCond.discussionTypeId,
      strComparisonOpDiscussionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTopicsCond.dicFldComparisonOp,
      clsDiscussionTopicsEN.con_TopicsTitle,
    ) == true
  ) {
    const strComparisonOpTopicsTitle: string =
      objDiscussionTopicsCond.dicFldComparisonOp[clsDiscussionTopicsEN.con_TopicsTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDiscussionTopicsEN.con_TopicsTitle,
      objDiscussionTopicsCond.topicsTitle,
      strComparisonOpTopicsTitle,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTopicsCond.dicFldComparisonOp,
      clsDiscussionTopicsEN.con_IsAudit,
    ) == true
  ) {
    if (objDiscussionTopicsCond.isAudit == true) {
      strWhereCond += Format(" And {0} = '1'", clsDiscussionTopicsEN.con_IsAudit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDiscussionTopicsEN.con_IsAudit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTopicsCond.dicFldComparisonOp,
      clsDiscussionTopicsEN.con_IsTop,
    ) == true
  ) {
    if (objDiscussionTopicsCond.isTop == true) {
      strWhereCond += Format(" And {0} = '1'", clsDiscussionTopicsEN.con_IsTop);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDiscussionTopicsEN.con_IsTop);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTopicsCond.dicFldComparisonOp,
      clsDiscussionTopicsEN.con_BrowseNumber,
    ) == true
  ) {
    const strComparisonOpBrowseNumber: string =
      objDiscussionTopicsCond.dicFldComparisonOp[clsDiscussionTopicsEN.con_BrowseNumber];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDiscussionTopicsEN.con_BrowseNumber,
      objDiscussionTopicsCond.browseNumber,
      strComparisonOpBrowseNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTopicsCond.dicFldComparisonOp,
      clsDiscussionTopicsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objDiscussionTopicsCond.dicFldComparisonOp[clsDiscussionTopicsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDiscussionTopicsEN.con_UpdDate,
      objDiscussionTopicsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTopicsCond.dicFldComparisonOp,
      clsDiscussionTopicsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objDiscussionTopicsCond.dicFldComparisonOp[clsDiscussionTopicsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDiscussionTopicsEN.con_UpdUser,
      objDiscussionTopicsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTopicsCond.dicFldComparisonOp,
      clsDiscussionTopicsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDiscussionTopicsCond.dicFldComparisonOp[clsDiscussionTopicsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDiscussionTopicsEN.con_Memo,
      objDiscussionTopicsCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTopicsCond.dicFldComparisonOp,
      clsDiscussionTopicsEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objDiscussionTopicsCond.dicFldComparisonOp[clsDiscussionTopicsEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDiscussionTopicsEN.con_IdCurrEduCls,
      objDiscussionTopicsCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTopicsCond.dicFldComparisonOp,
      clsDiscussionTopicsEN.con_SubCount,
    ) == true
  ) {
    const strComparisonOpSubCount: string =
      objDiscussionTopicsCond.dicFldComparisonOp[clsDiscussionTopicsEN.con_SubCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDiscussionTopicsEN.con_SubCount,
      objDiscussionTopicsCond.subCount,
      strComparisonOpSubCount,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objDiscussionTopicsENS:源对象
 * @param objDiscussionTopicsENT:目标对象
 */
export function DiscussionTopics_CopyObjTo(
  objDiscussionTopicsENS: clsDiscussionTopicsEN,
  objDiscussionTopicsENT: clsDiscussionTopicsEN,
): void {
  objDiscussionTopicsENT.topicsId = objDiscussionTopicsENS.topicsId; //主题Id
  objDiscussionTopicsENT.discussionTypeId = objDiscussionTopicsENS.discussionTypeId; //讨论类型Id
  objDiscussionTopicsENT.topicsTitle = objDiscussionTopicsENS.topicsTitle; //主题标题
  objDiscussionTopicsENT.topicsContent = objDiscussionTopicsENS.topicsContent; //主题内容
  objDiscussionTopicsENT.isAudit = objDiscussionTopicsENS.isAudit; //是否审核
  objDiscussionTopicsENT.isTop = objDiscussionTopicsENS.isTop; //是否置顶
  objDiscussionTopicsENT.browseNumber = objDiscussionTopicsENS.browseNumber; //浏览量
  objDiscussionTopicsENT.updDate = objDiscussionTopicsENS.updDate; //修改日期
  objDiscussionTopicsENT.updUser = objDiscussionTopicsENS.updUser; //修改人
  objDiscussionTopicsENT.memo = objDiscussionTopicsENS.memo; //备注
  objDiscussionTopicsENT.idCurrEduCls = objDiscussionTopicsENS.idCurrEduCls; //教学班流水号
  objDiscussionTopicsENT.subCount = objDiscussionTopicsENS.subCount; //SubCount
  objDiscussionTopicsENT.sfUpdFldSetStr = objDiscussionTopicsENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDiscussionTopicsENS:源对象
 * @param objDiscussionTopicsENT:目标对象
 */
export function DiscussionTopics_GetObjFromJsonObj(
  objDiscussionTopicsENS: clsDiscussionTopicsEN,
): clsDiscussionTopicsEN {
  const objDiscussionTopicsENT: clsDiscussionTopicsEN = new clsDiscussionTopicsEN();
  ObjectAssign(objDiscussionTopicsENT, objDiscussionTopicsENS);
  return objDiscussionTopicsENT;
}
