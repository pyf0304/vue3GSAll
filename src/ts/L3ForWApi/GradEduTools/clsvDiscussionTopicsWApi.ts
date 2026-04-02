/**
 * 类名:clsvDiscussionTopicsWApi
 * 表名:vDiscussionTopics(01120586)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:22
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
 * v讨论主题视图(vDiscussionTopics)
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
import { clsvDiscussionTopicsEN } from '@/ts/L0Entity/GradEduTools/clsvDiscussionTopicsEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vDiscussionTopics_Controller = 'vDiscussionTopicsApi';
export const vDiscussionTopics_ConstructorName = 'vDiscussionTopics';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTopicsId:关键字
 * @returns 对象
 **/
export async function vDiscussionTopics_GetObjByTopicsIdAsync(
  strTopicsId: string,
): Promise<clsvDiscussionTopicsEN | null> {
  const strThisFuncName = 'GetObjByTopicsIdAsync';

  if (IsNullOrEmpty(strTopicsId) == true) {
    const strMsg = Format(
      '参数:[strTopicsId]不能为空!(In clsvDiscussionTopicsWApi.GetObjByTopicsIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicsId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTopicsId]的长度:[{0}]不正确!(clsvDiscussionTopicsWApi.GetObjByTopicsIdAsync)',
      strTopicsId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTopicsId';
  const strUrl = GetWebApiUrl(vDiscussionTopics_Controller, strAction);

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
      const objvDiscussionTopics = vDiscussionTopics_GetObjFromJsonObj(returnObj);
      return objvDiscussionTopics;
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
        vDiscussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_GetObjByTopicsIdCache(
  strTopicsId: string,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTopicsIdCache';

  if (IsNullOrEmpty(strTopicsId) == true) {
    const strMsg = Format(
      '参数:[strTopicsId]不能为空!(In clsvDiscussionTopicsWApi.GetObjByTopicsIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicsId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTopicsId]的长度:[{0}]不正确!(clsvDiscussionTopicsWApi.GetObjByTopicsIdCache)',
      strTopicsId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvDiscussionTopicsObjLstCache = await vDiscussionTopics_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrvDiscussionTopicsSel = arrvDiscussionTopicsObjLstCache.filter(
      (x) => x.topicsId == strTopicsId,
    );
    let objvDiscussionTopics: clsvDiscussionTopicsEN;
    if (arrvDiscussionTopicsSel.length > 0) {
      objvDiscussionTopics = arrvDiscussionTopicsSel[0];
      return objvDiscussionTopics;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvDiscussionTopicsConst = await vDiscussionTopics_GetObjByTopicsIdAsync(
          strTopicsId,
        );
        if (objvDiscussionTopicsConst != null) {
          vDiscussionTopics_ReFreshThisCache(strIdCurrEduCls);
          return objvDiscussionTopicsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTopicsId,
      vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_GetObjByTopicsIdlocalStorage(strTopicsId: string) {
  const strThisFuncName = 'GetObjByTopicsIdlocalStorage';

  if (IsNullOrEmpty(strTopicsId) == true) {
    const strMsg = Format(
      '参数:[strTopicsId]不能为空!(In clsvDiscussionTopicsWApi.GetObjByTopicsIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicsId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTopicsId]的长度:[{0}]不正确!(clsvDiscussionTopicsWApi.GetObjByTopicsIdlocalStorage)',
      strTopicsId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvDiscussionTopicsEN._CurrTabName, strTopicsId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvDiscussionTopicsCache: clsvDiscussionTopicsEN = JSON.parse(strTempObj);
    return objvDiscussionTopicsCache;
  }
  try {
    const objvDiscussionTopics = await vDiscussionTopics_GetObjByTopicsIdAsync(strTopicsId);
    if (objvDiscussionTopics != null) {
      localStorage.setItem(strKey, JSON.stringify(objvDiscussionTopics));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvDiscussionTopics;
    }
    return objvDiscussionTopics;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTopicsId,
      vDiscussionTopics_ConstructorName,
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vDiscussionTopics_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsvDiscussionTopicsWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvDiscussionTopicsWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvDiscussionTopicsEN.con_TopicsId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvDiscussionTopicsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvDiscussionTopicsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTopicsId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvDiscussionTopics = await vDiscussionTopics_GetObjByTopicsIdCache(
    strTopicsId,
    strIdCurrEduClsClassfy,
  );
  if (objvDiscussionTopics == null) return '';
  if (objvDiscussionTopics.GetFldValue(strOutFldName) == null) return '';
  return objvDiscussionTopics.GetFldValue(strOutFldName).toString();
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
export function vDiscussionTopics_SortFunDefa(
  a: clsvDiscussionTopicsEN,
  b: clsvDiscussionTopicsEN,
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
export function vDiscussionTopics_SortFunDefa2Fld(
  a: clsvDiscussionTopicsEN,
  b: clsvDiscussionTopicsEN,
): number {
  if (a.discussionTypeId == b.discussionTypeId)
    return a.discussionTypeName.localeCompare(b.discussionTypeName);
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
export function vDiscussionTopics_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvDiscussionTopicsEN.con_TopicsId:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          return a.topicsId.localeCompare(b.topicsId);
        };
      case clsvDiscussionTopicsEN.con_DiscussionTypeId:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          return a.discussionTypeId.localeCompare(b.discussionTypeId);
        };
      case clsvDiscussionTopicsEN.con_DiscussionTypeName:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (a.discussionTypeName == null) return -1;
          if (b.discussionTypeName == null) return 1;
          return a.discussionTypeName.localeCompare(b.discussionTypeName);
        };
      case clsvDiscussionTopicsEN.con_TopicsTitle:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (a.topicsTitle == null) return -1;
          if (b.topicsTitle == null) return 1;
          return a.topicsTitle.localeCompare(b.topicsTitle);
        };
      case clsvDiscussionTopicsEN.con_TopicsContent:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (a.topicsContent == null) return -1;
          if (b.topicsContent == null) return 1;
          return a.topicsContent.localeCompare(b.topicsContent);
        };
      case clsvDiscussionTopicsEN.con_IsAudit:
        return (a: clsvDiscussionTopicsEN) => {
          if (a.isAudit == true) return 1;
          else return -1;
        };
      case clsvDiscussionTopicsEN.con_IsTop:
        return (a: clsvDiscussionTopicsEN) => {
          if (a.isTop == true) return 1;
          else return -1;
        };
      case clsvDiscussionTopicsEN.con_BrowseNumber:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          return a.browseNumber - b.browseNumber;
        };
      case clsvDiscussionTopicsEN.con_UpdDate:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvDiscussionTopicsEN.con_UpdUser:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvDiscussionTopicsEN.con_Memo:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvDiscussionTopicsEN.con_CollegeName:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (a.collegeName == null) return -1;
          if (b.collegeName == null) return 1;
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsvDiscussionTopicsEN.con_IdXzCollege:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (a.idXzCollege == null) return -1;
          if (b.idXzCollege == null) return 1;
          return a.idXzCollege.localeCompare(b.idXzCollege);
        };
      case clsvDiscussionTopicsEN.con_IdXzMajor:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (a.idXzMajor == null) return -1;
          if (b.idXzMajor == null) return 1;
          return a.idXzMajor.localeCompare(b.idXzMajor);
        };
      case clsvDiscussionTopicsEN.con_MajorName:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (a.majorName == null) return -1;
          if (b.majorName == null) return 1;
          return a.majorName.localeCompare(b.majorName);
        };
      case clsvDiscussionTopicsEN.con_UserName:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (a.userName == null) return -1;
          if (b.userName == null) return 1;
          return a.userName.localeCompare(b.userName);
        };
      case clsvDiscussionTopicsEN.con_SubCount:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          return a.subCount - b.subCount;
        };
      case clsvDiscussionTopicsEN.con_IdCurrEduCls:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vDiscussionTopics]中不存在!(in ${vDiscussionTopics_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvDiscussionTopicsEN.con_TopicsId:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          return b.topicsId.localeCompare(a.topicsId);
        };
      case clsvDiscussionTopicsEN.con_DiscussionTypeId:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          return b.discussionTypeId.localeCompare(a.discussionTypeId);
        };
      case clsvDiscussionTopicsEN.con_DiscussionTypeName:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (b.discussionTypeName == null) return -1;
          if (a.discussionTypeName == null) return 1;
          return b.discussionTypeName.localeCompare(a.discussionTypeName);
        };
      case clsvDiscussionTopicsEN.con_TopicsTitle:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (b.topicsTitle == null) return -1;
          if (a.topicsTitle == null) return 1;
          return b.topicsTitle.localeCompare(a.topicsTitle);
        };
      case clsvDiscussionTopicsEN.con_TopicsContent:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (b.topicsContent == null) return -1;
          if (a.topicsContent == null) return 1;
          return b.topicsContent.localeCompare(a.topicsContent);
        };
      case clsvDiscussionTopicsEN.con_IsAudit:
        return (b: clsvDiscussionTopicsEN) => {
          if (b.isAudit == true) return 1;
          else return -1;
        };
      case clsvDiscussionTopicsEN.con_IsTop:
        return (b: clsvDiscussionTopicsEN) => {
          if (b.isTop == true) return 1;
          else return -1;
        };
      case clsvDiscussionTopicsEN.con_BrowseNumber:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          return b.browseNumber - a.browseNumber;
        };
      case clsvDiscussionTopicsEN.con_UpdDate:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvDiscussionTopicsEN.con_UpdUser:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvDiscussionTopicsEN.con_Memo:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvDiscussionTopicsEN.con_CollegeName:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (b.collegeName == null) return -1;
          if (a.collegeName == null) return 1;
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsvDiscussionTopicsEN.con_IdXzCollege:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (b.idXzCollege == null) return -1;
          if (a.idXzCollege == null) return 1;
          return b.idXzCollege.localeCompare(a.idXzCollege);
        };
      case clsvDiscussionTopicsEN.con_IdXzMajor:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (b.idXzMajor == null) return -1;
          if (a.idXzMajor == null) return 1;
          return b.idXzMajor.localeCompare(a.idXzMajor);
        };
      case clsvDiscussionTopicsEN.con_MajorName:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (b.majorName == null) return -1;
          if (a.majorName == null) return 1;
          return b.majorName.localeCompare(a.majorName);
        };
      case clsvDiscussionTopicsEN.con_UserName:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (b.userName == null) return -1;
          if (a.userName == null) return 1;
          return b.userName.localeCompare(a.userName);
        };
      case clsvDiscussionTopicsEN.con_SubCount:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          return b.subCount - a.subCount;
        };
      case clsvDiscussionTopicsEN.con_IdCurrEduCls:
        return (a: clsvDiscussionTopicsEN, b: clsvDiscussionTopicsEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vDiscussionTopics]中不存在!(in ${vDiscussionTopics_ConstructorName}.${strThisFuncName})`;
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
export async function vDiscussionTopics_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvDiscussionTopicsEN.con_TopicsId:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.topicsId === value;
      };
    case clsvDiscussionTopicsEN.con_DiscussionTypeId:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.discussionTypeId === value;
      };
    case clsvDiscussionTopicsEN.con_DiscussionTypeName:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.discussionTypeName === value;
      };
    case clsvDiscussionTopicsEN.con_TopicsTitle:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.topicsTitle === value;
      };
    case clsvDiscussionTopicsEN.con_TopicsContent:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.topicsContent === value;
      };
    case clsvDiscussionTopicsEN.con_IsAudit:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.isAudit === value;
      };
    case clsvDiscussionTopicsEN.con_IsTop:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.isTop === value;
      };
    case clsvDiscussionTopicsEN.con_BrowseNumber:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.browseNumber === value;
      };
    case clsvDiscussionTopicsEN.con_UpdDate:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.updDate === value;
      };
    case clsvDiscussionTopicsEN.con_UpdUser:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.updUser === value;
      };
    case clsvDiscussionTopicsEN.con_Memo:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.memo === value;
      };
    case clsvDiscussionTopicsEN.con_CollegeName:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.collegeName === value;
      };
    case clsvDiscussionTopicsEN.con_IdXzCollege:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.idXzCollege === value;
      };
    case clsvDiscussionTopicsEN.con_IdXzMajor:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.idXzMajor === value;
      };
    case clsvDiscussionTopicsEN.con_MajorName:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.majorName === value;
      };
    case clsvDiscussionTopicsEN.con_UserName:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.userName === value;
      };
    case clsvDiscussionTopicsEN.con_SubCount:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.subCount === value;
      };
    case clsvDiscussionTopicsEN.con_IdCurrEduCls:
      return (obj: clsvDiscussionTopicsEN) => {
        return obj.idCurrEduCls === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vDiscussionTopics]中不存在!(in ${vDiscussionTopics_ConstructorName}.${strThisFuncName})`;
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
export async function vDiscussionTopics_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsvDiscussionTopicsWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvDiscussionTopicsWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvDiscussionTopicsEN.con_TopicsId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvDiscussionTopics = await vDiscussionTopics_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrvDiscussionTopics == null) return [];
  let arrvDiscussionTopicsSel = arrvDiscussionTopics;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvDiscussionTopicsSel.length == 0) return [];
  return arrvDiscussionTopicsSel.map((x) => x.topicsId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vDiscussionTopics_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vDiscussionTopics_Controller, strAction);

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
        vDiscussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vDiscussionTopics_Controller, strAction);

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
        vDiscussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvDiscussionTopicsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vDiscussionTopics_Controller, strAction);

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
      const objvDiscussionTopics = vDiscussionTopics_GetObjFromJsonObj(returnObj);
      return objvDiscussionTopics;
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
        vDiscussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvDiscussionTopicsEN.WhereFormat) == false) {
    strWhereCond = Format(clsvDiscussionTopicsEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvDiscussionTopicsEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvDiscussionTopicsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvDiscussionTopicsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvDiscussionTopicsExObjLstCache: Array<clsvDiscussionTopicsEN> =
      CacheHelper.Get(strKey);
    const arrvDiscussionTopicsObjLstT = vDiscussionTopics_GetObjLstByJSONObjLst(
      arrvDiscussionTopicsExObjLstCache,
    );
    return arrvDiscussionTopicsObjLstT;
  }
  try {
    const arrvDiscussionTopicsExObjLst = await vDiscussionTopics_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvDiscussionTopicsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvDiscussionTopicsExObjLst.length,
    );
    console.log(strInfo);
    return arrvDiscussionTopicsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvDiscussionTopicsEN.WhereFormat) == false) {
    strWhereCond = Format(clsvDiscussionTopicsEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvDiscussionTopicsEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvDiscussionTopicsEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvDiscussionTopicsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvDiscussionTopicsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvDiscussionTopicsExObjLstCache: Array<clsvDiscussionTopicsEN> =
      JSON.parse(strTempObjLst);
    const arrvDiscussionTopicsObjLstT = vDiscussionTopics_GetObjLstByJSONObjLst(
      arrvDiscussionTopicsExObjLstCache,
    );
    return arrvDiscussionTopicsObjLstT;
  }
  try {
    const arrvDiscussionTopicsExObjLst = await vDiscussionTopics_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvDiscussionTopicsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvDiscussionTopicsExObjLst.length,
    );
    console.log(strInfo);
    return arrvDiscussionTopicsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvDiscussionTopicsEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvDiscussionTopicsObjLstCache: Array<clsvDiscussionTopicsEN> =
      JSON.parse(strTempObjLst);
    return arrvDiscussionTopicsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vDiscussionTopics_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvDiscussionTopicsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vDiscussionTopics_Controller, strAction);

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
          vDiscussionTopics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDiscussionTopics_GetObjLstByJSONObjLst(returnObjLst);
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
        vDiscussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvDiscussionTopicsEN.WhereFormat) == false) {
    strWhereCond = Format(clsvDiscussionTopicsEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvDiscussionTopicsEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvDiscussionTopicsEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvDiscussionTopicsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvDiscussionTopicsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvDiscussionTopicsExObjLstCache: Array<clsvDiscussionTopicsEN> =
      JSON.parse(strTempObjLst);
    const arrvDiscussionTopicsObjLstT = vDiscussionTopics_GetObjLstByJSONObjLst(
      arrvDiscussionTopicsExObjLstCache,
    );
    return arrvDiscussionTopicsObjLstT;
  }
  try {
    const arrvDiscussionTopicsExObjLst = await vDiscussionTopics_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvDiscussionTopicsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvDiscussionTopicsExObjLst.length,
    );
    console.log(strInfo);
    return arrvDiscussionTopicsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvDiscussionTopicsEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvDiscussionTopicsObjLstCache: Array<clsvDiscussionTopicsEN> =
      JSON.parse(strTempObjLst);
    return arrvDiscussionTopicsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vDiscussionTopics_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsvDiscussionTopicsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsvDiscussionTopicsWApi.vDiscussionTopics_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvDiscussionTopicsWApi.vDiscussionTopics_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvDiscussionTopicsObjLstCache;
  switch (clsvDiscussionTopicsEN.CacheModeId) {
    case '04': //sessionStorage
      arrvDiscussionTopicsObjLstCache = await vDiscussionTopics_GetObjLstsessionStorage(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrvDiscussionTopicsObjLstCache = await vDiscussionTopics_GetObjLstlocalStorage(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrvDiscussionTopicsObjLstCache = await vDiscussionTopics_GetObjLstClientCache(
        strIdCurrEduCls,
      );
      break;
    default:
      arrvDiscussionTopicsObjLstCache = await vDiscussionTopics_GetObjLstClientCache(
        strIdCurrEduCls,
      );
      break;
  }
  return arrvDiscussionTopicsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vDiscussionTopics_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvDiscussionTopicsObjLstCache;
  switch (clsvDiscussionTopicsEN.CacheModeId) {
    case '04': //sessionStorage
      arrvDiscussionTopicsObjLstCache = await vDiscussionTopics_GetObjLstsessionStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrvDiscussionTopicsObjLstCache = await vDiscussionTopics_GetObjLstlocalStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrvDiscussionTopicsObjLstCache = null;
      break;
    default:
      arrvDiscussionTopicsObjLstCache = null;
      break;
  }
  return arrvDiscussionTopicsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTopicsIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vDiscussionTopics_GetSubObjLstCache(
  objvDiscussionTopicsCond: clsvDiscussionTopicsEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvDiscussionTopicsObjLstCache = await vDiscussionTopics_GetObjLstCache(strIdCurrEduCls);
  let arrvDiscussionTopicsSel = arrvDiscussionTopicsObjLstCache;
  if (
    objvDiscussionTopicsCond.sfFldComparisonOp == null ||
    objvDiscussionTopicsCond.sfFldComparisonOp == ''
  )
    return arrvDiscussionTopicsSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvDiscussionTopicsCond.sfFldComparisonOp,
  );
  //console.log("clsvDiscussionTopicsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvDiscussionTopicsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvDiscussionTopicsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvDiscussionTopicsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvDiscussionTopicsCond),
      vDiscussionTopics_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvDiscussionTopicsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTopicsId:关键字列表
 * @returns 对象列表
 **/
export async function vDiscussionTopics_GetObjLstByTopicsIdLstAsync(
  arrTopicsId: Array<string>,
): Promise<Array<clsvDiscussionTopicsEN>> {
  const strThisFuncName = 'GetObjLstByTopicsIdLstAsync';
  const strAction = 'GetObjLstByTopicsIdLst';
  const strUrl = GetWebApiUrl(vDiscussionTopics_Controller, strAction);

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
          vDiscussionTopics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDiscussionTopics_GetObjLstByJSONObjLst(returnObjLst);
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
        vDiscussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_GetObjLstByTopicsIdLstCache(
  arrTopicsIdLst: Array<string>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByTopicsIdLstCache';
  try {
    const arrvDiscussionTopicsObjLstCache = await vDiscussionTopics_GetObjLstCache(strIdCurrEduCls);
    const arrvDiscussionTopicsSel = arrvDiscussionTopicsObjLstCache.filter(
      (x) => arrTopicsIdLst.indexOf(x.topicsId) > -1,
    );
    return arrvDiscussionTopicsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTopicsIdLst.join(','),
      vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvDiscussionTopicsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vDiscussionTopics_Controller, strAction);

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
          vDiscussionTopics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDiscussionTopics_GetObjLstByJSONObjLst(returnObjLst);
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
        vDiscussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvDiscussionTopicsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vDiscussionTopics_Controller, strAction);

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
          vDiscussionTopics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDiscussionTopics_GetObjLstByJSONObjLst(returnObjLst);
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
        vDiscussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvDiscussionTopicsEN>();
  const arrvDiscussionTopicsObjLstCache = await vDiscussionTopics_GetObjLstCache(strIdCurrEduCls);
  if (arrvDiscussionTopicsObjLstCache.length == 0) return arrvDiscussionTopicsObjLstCache;
  let arrvDiscussionTopicsSel = arrvDiscussionTopicsObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvDiscussionTopicsCond = new clsvDiscussionTopicsEN();
  ObjectAssign(objvDiscussionTopicsCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvDiscussionTopicsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvDiscussionTopicsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvDiscussionTopicsSel.length == 0) return arrvDiscussionTopicsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.sort(
        vDiscussionTopics_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.sort(objPagerPara.sortFun);
    }
    arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.slice(intStart, intEnd);
    return arrvDiscussionTopicsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vDiscussionTopics_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvDiscussionTopicsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vDiscussionTopics_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvDiscussionTopicsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvDiscussionTopicsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vDiscussionTopics_Controller, strAction);

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
          vDiscussionTopics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDiscussionTopics_GetObjLstByJSONObjLst(returnObjLst);
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
        vDiscussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_IsExistRecordCache(
  objvDiscussionTopicsCond: clsvDiscussionTopicsEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvDiscussionTopicsObjLstCache = await vDiscussionTopics_GetObjLstCache(strIdCurrEduCls);
  if (arrvDiscussionTopicsObjLstCache == null) return false;
  let arrvDiscussionTopicsSel = arrvDiscussionTopicsObjLstCache;
  if (
    objvDiscussionTopicsCond.sfFldComparisonOp == null ||
    objvDiscussionTopicsCond.sfFldComparisonOp == ''
  )
    return arrvDiscussionTopicsSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvDiscussionTopicsCond.sfFldComparisonOp,
  );
  //console.log("clsvDiscussionTopicsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvDiscussionTopicsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvDiscussionTopicsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvDiscussionTopicsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvDiscussionTopicsCond),
      vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vDiscussionTopics_Controller, strAction);

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
        vDiscussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_IsExistCache(strTopicsId: string, strIdCurrEduCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvDiscussionTopicsObjLstCache = await vDiscussionTopics_GetObjLstCache(strIdCurrEduCls);
  if (arrvDiscussionTopicsObjLstCache == null) return false;
  try {
    const arrvDiscussionTopicsSel = arrvDiscussionTopicsObjLstCache.filter(
      (x) => x.topicsId == strTopicsId,
    );
    if (arrvDiscussionTopicsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTopicsId,
      vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_IsExistAsync(strTopicsId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vDiscussionTopics_Controller, strAction);

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
        vDiscussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDiscussionTopics_ConstructorName,
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
export async function vDiscussionTopics_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vDiscussionTopics_Controller, strAction);

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
        vDiscussionTopics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDiscussionTopics_ConstructorName,
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
 * @param objvDiscussionTopicsCond:条件对象
 * @returns 对象列表记录数
 */
export async function vDiscussionTopics_GetRecCountByCondCache(
  objvDiscussionTopicsCond: clsvDiscussionTopicsEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvDiscussionTopicsObjLstCache = await vDiscussionTopics_GetObjLstCache(strIdCurrEduCls);
  if (arrvDiscussionTopicsObjLstCache == null) return 0;
  let arrvDiscussionTopicsSel = arrvDiscussionTopicsObjLstCache;
  if (
    objvDiscussionTopicsCond.sfFldComparisonOp == null ||
    objvDiscussionTopicsCond.sfFldComparisonOp == ''
  )
    return arrvDiscussionTopicsSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvDiscussionTopicsCond.sfFldComparisonOp,
  );
  //console.log("clsvDiscussionTopicsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvDiscussionTopicsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvDiscussionTopicsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvDiscussionTopicsSel = arrvDiscussionTopicsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvDiscussionTopicsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvDiscussionTopicsCond),
      vDiscussionTopics_ConstructorName,
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
export function vDiscussionTopics_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vDiscussionTopics_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvDiscussionTopicsEN._CurrTabName, strIdCurrEduCls);
    switch (clsvDiscussionTopicsEN.CacheModeId) {
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
export function vDiscussionTopics_GetJSONStrByObj(
  pobjvDiscussionTopicsEN: clsvDiscussionTopicsEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvDiscussionTopicsEN);
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
export function vDiscussionTopics_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvDiscussionTopicsEN> {
  let arrvDiscussionTopicsObjLst = new Array<clsvDiscussionTopicsEN>();
  if (strJSON === '') {
    return arrvDiscussionTopicsObjLst;
  }
  try {
    arrvDiscussionTopicsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvDiscussionTopicsObjLst;
  }
  return arrvDiscussionTopicsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvDiscussionTopicsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vDiscussionTopics_GetObjLstByJSONObjLst(
  arrvDiscussionTopicsObjLstS: Array<clsvDiscussionTopicsEN>,
): Array<clsvDiscussionTopicsEN> {
  const arrvDiscussionTopicsObjLst = new Array<clsvDiscussionTopicsEN>();
  for (const objInFor of arrvDiscussionTopicsObjLstS) {
    const obj1 = vDiscussionTopics_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvDiscussionTopicsObjLst.push(obj1);
  }
  return arrvDiscussionTopicsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vDiscussionTopics_GetObjByJSONStr(strJSON: string): clsvDiscussionTopicsEN {
  let pobjvDiscussionTopicsEN = new clsvDiscussionTopicsEN();
  if (strJSON === '') {
    return pobjvDiscussionTopicsEN;
  }
  try {
    pobjvDiscussionTopicsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvDiscussionTopicsEN;
  }
  return pobjvDiscussionTopicsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vDiscussionTopics_GetCombineCondition(
  objvDiscussionTopicsCond: clsvDiscussionTopicsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_TopicsId,
    ) == true
  ) {
    const strComparisonOpTopicsId: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_TopicsId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDiscussionTopicsEN.con_TopicsId,
      objvDiscussionTopicsCond.topicsId,
      strComparisonOpTopicsId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_DiscussionTypeId,
    ) == true
  ) {
    const strComparisonOpDiscussionTypeId: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_DiscussionTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDiscussionTopicsEN.con_DiscussionTypeId,
      objvDiscussionTopicsCond.discussionTypeId,
      strComparisonOpDiscussionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_DiscussionTypeName,
    ) == true
  ) {
    const strComparisonOpDiscussionTypeName: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_DiscussionTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDiscussionTopicsEN.con_DiscussionTypeName,
      objvDiscussionTopicsCond.discussionTypeName,
      strComparisonOpDiscussionTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_TopicsTitle,
    ) == true
  ) {
    const strComparisonOpTopicsTitle: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_TopicsTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDiscussionTopicsEN.con_TopicsTitle,
      objvDiscussionTopicsCond.topicsTitle,
      strComparisonOpTopicsTitle,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_IsAudit,
    ) == true
  ) {
    if (objvDiscussionTopicsCond.isAudit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvDiscussionTopicsEN.con_IsAudit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvDiscussionTopicsEN.con_IsAudit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_IsTop,
    ) == true
  ) {
    if (objvDiscussionTopicsCond.isTop == true) {
      strWhereCond += Format(" And {0} = '1'", clsvDiscussionTopicsEN.con_IsTop);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvDiscussionTopicsEN.con_IsTop);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_BrowseNumber,
    ) == true
  ) {
    const strComparisonOpBrowseNumber: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_BrowseNumber];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvDiscussionTopicsEN.con_BrowseNumber,
      objvDiscussionTopicsCond.browseNumber,
      strComparisonOpBrowseNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDiscussionTopicsEN.con_UpdDate,
      objvDiscussionTopicsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDiscussionTopicsEN.con_UpdUser,
      objvDiscussionTopicsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDiscussionTopicsEN.con_Memo,
      objvDiscussionTopicsCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_CollegeName,
    ) == true
  ) {
    const strComparisonOpCollegeName: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_CollegeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDiscussionTopicsEN.con_CollegeName,
      objvDiscussionTopicsCond.collegeName,
      strComparisonOpCollegeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_IdXzCollege,
    ) == true
  ) {
    const strComparisonOpIdXzCollege: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_IdXzCollege];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDiscussionTopicsEN.con_IdXzCollege,
      objvDiscussionTopicsCond.idXzCollege,
      strComparisonOpIdXzCollege,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_IdXzMajor,
    ) == true
  ) {
    const strComparisonOpIdXzMajor: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_IdXzMajor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDiscussionTopicsEN.con_IdXzMajor,
      objvDiscussionTopicsCond.idXzMajor,
      strComparisonOpIdXzMajor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_MajorName,
    ) == true
  ) {
    const strComparisonOpMajorName: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_MajorName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDiscussionTopicsEN.con_MajorName,
      objvDiscussionTopicsCond.majorName,
      strComparisonOpMajorName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDiscussionTopicsEN.con_UserName,
      objvDiscussionTopicsCond.userName,
      strComparisonOpUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_SubCount,
    ) == true
  ) {
    const strComparisonOpSubCount: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_SubCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvDiscussionTopicsEN.con_SubCount,
      objvDiscussionTopicsCond.subCount,
      strComparisonOpSubCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDiscussionTopicsCond.dicFldComparisonOp,
      clsvDiscussionTopicsEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvDiscussionTopicsCond.dicFldComparisonOp[clsvDiscussionTopicsEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDiscussionTopicsEN.con_IdCurrEduCls,
      objvDiscussionTopicsCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvDiscussionTopicsENS:源对象
 * @param objvDiscussionTopicsENT:目标对象
 */
export function vDiscussionTopics_CopyObjTo(
  objvDiscussionTopicsENS: clsvDiscussionTopicsEN,
  objvDiscussionTopicsENT: clsvDiscussionTopicsEN,
): void {
  objvDiscussionTopicsENT.topicsId = objvDiscussionTopicsENS.topicsId; //主题Id
  objvDiscussionTopicsENT.discussionTypeId = objvDiscussionTopicsENS.discussionTypeId; //讨论类型Id
  objvDiscussionTopicsENT.discussionTypeName = objvDiscussionTopicsENS.discussionTypeName; //讨论类型名称
  objvDiscussionTopicsENT.topicsTitle = objvDiscussionTopicsENS.topicsTitle; //主题标题
  objvDiscussionTopicsENT.topicsContent = objvDiscussionTopicsENS.topicsContent; //主题内容
  objvDiscussionTopicsENT.isAudit = objvDiscussionTopicsENS.isAudit; //是否审核
  objvDiscussionTopicsENT.isTop = objvDiscussionTopicsENS.isTop; //是否置顶
  objvDiscussionTopicsENT.browseNumber = objvDiscussionTopicsENS.browseNumber; //浏览量
  objvDiscussionTopicsENT.updDate = objvDiscussionTopicsENS.updDate; //修改日期
  objvDiscussionTopicsENT.updUser = objvDiscussionTopicsENS.updUser; //修改人
  objvDiscussionTopicsENT.memo = objvDiscussionTopicsENS.memo; //备注
  objvDiscussionTopicsENT.collegeName = objvDiscussionTopicsENS.collegeName; //学院名称
  objvDiscussionTopicsENT.idXzCollege = objvDiscussionTopicsENS.idXzCollege; //学院流水号
  objvDiscussionTopicsENT.idXzMajor = objvDiscussionTopicsENS.idXzMajor; //专业流水号
  objvDiscussionTopicsENT.majorName = objvDiscussionTopicsENS.majorName; //专业名称
  objvDiscussionTopicsENT.userName = objvDiscussionTopicsENS.userName; //用户名
  objvDiscussionTopicsENT.subCount = objvDiscussionTopicsENS.subCount; //SubCount
  objvDiscussionTopicsENT.idCurrEduCls = objvDiscussionTopicsENS.idCurrEduCls; //教学班流水号
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvDiscussionTopicsENS:源对象
 * @param objvDiscussionTopicsENT:目标对象
 */
export function vDiscussionTopics_GetObjFromJsonObj(
  objvDiscussionTopicsENS: clsvDiscussionTopicsEN,
): clsvDiscussionTopicsEN {
  const objvDiscussionTopicsENT: clsvDiscussionTopicsEN = new clsvDiscussionTopicsEN();
  ObjectAssign(objvDiscussionTopicsENT, objvDiscussionTopicsENS);
  return objvDiscussionTopicsENT;
}
