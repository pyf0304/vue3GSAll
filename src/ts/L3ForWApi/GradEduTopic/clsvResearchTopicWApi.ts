/**
 * 类名:clsvResearchTopicWApi
 * 表名:vResearchTopic(01120612)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:45
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
 * 研究主题视图(vResearchTopic)
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
import { clsvResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsvResearchTopicEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vResearchTopic_Controller = 'vResearchTopicApi';
export const vResearchTopic_ConstructorName = 'vResearchTopic';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTopicId:关键字
 * @returns 对象
 **/
export async function vResearchTopic_GetObjByTopicIdAsync(
  strTopicId: string,
): Promise<clsvResearchTopicEN | null> {
  const strThisFuncName = 'GetObjByTopicIdAsync';

  if (IsNullOrEmpty(strTopicId) == true) {
    const strMsg = Format(
      '参数:[strTopicId]不能为空!(In clsvResearchTopicWApi.GetObjByTopicIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsvResearchTopicWApi.GetObjByTopicIdAsync)',
      strTopicId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTopicId';
  const strUrl = GetWebApiUrl(vResearchTopic_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTopicId,
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
      const objvResearchTopic = vResearchTopic_GetObjFromJsonObj(returnObj);
      return objvResearchTopic;
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
        vResearchTopic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vResearchTopic_ConstructorName,
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
 * @param strTopicId:所给的关键字
 * @returns 对象
 */
export async function vResearchTopic_GetObjByTopicIdCache(
  strTopicId: string,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTopicIdCache';

  if (IsNullOrEmpty(strTopicId) == true) {
    const strMsg = Format(
      '参数:[strTopicId]不能为空!(In clsvResearchTopicWApi.GetObjByTopicIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsvResearchTopicWApi.GetObjByTopicIdCache)',
      strTopicId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvResearchTopicObjLstCache = await vResearchTopic_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrvResearchTopicSel = arrvResearchTopicObjLstCache.filter(
      (x) => x.topicId == strTopicId,
    );
    let objvResearchTopic: clsvResearchTopicEN;
    if (arrvResearchTopicSel.length > 0) {
      objvResearchTopic = arrvResearchTopicSel[0];
      return objvResearchTopic;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvResearchTopicConst = await vResearchTopic_GetObjByTopicIdAsync(strTopicId);
        if (objvResearchTopicConst != null) {
          vResearchTopic_ReFreshThisCache(strIdCurrEduCls);
          return objvResearchTopicConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTopicId,
      vResearchTopic_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strTopicId:所给的关键字
 * @returns 对象
 */
export async function vResearchTopic_GetObjByTopicIdlocalStorage(strTopicId: string) {
  const strThisFuncName = 'GetObjByTopicIdlocalStorage';

  if (IsNullOrEmpty(strTopicId) == true) {
    const strMsg = Format(
      '参数:[strTopicId]不能为空!(In clsvResearchTopicWApi.GetObjByTopicIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsvResearchTopicWApi.GetObjByTopicIdlocalStorage)',
      strTopicId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvResearchTopicEN._CurrTabName, strTopicId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvResearchTopicCache: clsvResearchTopicEN = JSON.parse(strTempObj);
    return objvResearchTopicCache;
  }
  try {
    const objvResearchTopic = await vResearchTopic_GetObjByTopicIdAsync(strTopicId);
    if (objvResearchTopic != null) {
      localStorage.setItem(strKey, JSON.stringify(objvResearchTopic));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvResearchTopic;
    }
    return objvResearchTopic;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTopicId,
      vResearchTopic_ConstructorName,
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
export async function vResearchTopic_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsvResearchTopicWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvResearchTopicWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvResearchTopicEN.con_TopicId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvResearchTopicEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvResearchTopicEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTopicId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvResearchTopic = await vResearchTopic_GetObjByTopicIdCache(
    strTopicId,
    strIdCurrEduClsClassfy,
  );
  if (objvResearchTopic == null) return '';
  if (objvResearchTopic.GetFldValue(strOutFldName) == null) return '';
  return objvResearchTopic.GetFldValue(strOutFldName).toString();
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
export function vResearchTopic_SortFunDefa(a: clsvResearchTopicEN, b: clsvResearchTopicEN): number {
  return a.topicId.localeCompare(b.topicId);
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
export function vResearchTopic_SortFunDefa2Fld(
  a: clsvResearchTopicEN,
  b: clsvResearchTopicEN,
): number {
  if (a.topicName == b.topicName) return a.topicContent.localeCompare(b.topicContent);
  else return a.topicName.localeCompare(b.topicName);
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
export function vResearchTopic_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvResearchTopicEN.con_TopicId:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          return a.topicId.localeCompare(b.topicId);
        };
      case clsvResearchTopicEN.con_TopicName:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (a.topicName == null) return -1;
          if (b.topicName == null) return 1;
          return a.topicName.localeCompare(b.topicName);
        };
      case clsvResearchTopicEN.con_TopicContent:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (a.topicContent == null) return -1;
          if (b.topicContent == null) return 1;
          return a.topicContent.localeCompare(b.topicContent);
        };
      case clsvResearchTopicEN.con_TopicProposePeople:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (a.topicProposePeople == null) return -1;
          if (b.topicProposePeople == null) return 1;
          return a.topicProposePeople.localeCompare(b.topicProposePeople);
        };
      case clsvResearchTopicEN.con_OrderNum:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvResearchTopicEN.con_UpdDate:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvResearchTopicEN.con_UpdUser:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvResearchTopicEN.con_Memo:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvResearchTopicEN.con_IsSubmit:
        return (a: clsvResearchTopicEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsvResearchTopicEN.con_UserName:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (a.userName == null) return -1;
          if (b.userName == null) return 1;
          return a.userName.localeCompare(b.userName);
        };
      case clsvResearchTopicEN.con_IdCurrEduCls:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvResearchTopicEN.con_ShareId:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          return a.shareId.localeCompare(b.shareId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vResearchTopic]中不存在!(in ${vResearchTopic_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvResearchTopicEN.con_TopicId:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          return b.topicId.localeCompare(a.topicId);
        };
      case clsvResearchTopicEN.con_TopicName:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (b.topicName == null) return -1;
          if (a.topicName == null) return 1;
          return b.topicName.localeCompare(a.topicName);
        };
      case clsvResearchTopicEN.con_TopicContent:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (b.topicContent == null) return -1;
          if (a.topicContent == null) return 1;
          return b.topicContent.localeCompare(a.topicContent);
        };
      case clsvResearchTopicEN.con_TopicProposePeople:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (b.topicProposePeople == null) return -1;
          if (a.topicProposePeople == null) return 1;
          return b.topicProposePeople.localeCompare(a.topicProposePeople);
        };
      case clsvResearchTopicEN.con_OrderNum:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvResearchTopicEN.con_UpdDate:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvResearchTopicEN.con_UpdUser:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvResearchTopicEN.con_Memo:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvResearchTopicEN.con_IsSubmit:
        return (b: clsvResearchTopicEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsvResearchTopicEN.con_UserName:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (b.userName == null) return -1;
          if (a.userName == null) return 1;
          return b.userName.localeCompare(a.userName);
        };
      case clsvResearchTopicEN.con_IdCurrEduCls:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvResearchTopicEN.con_ShareId:
        return (a: clsvResearchTopicEN, b: clsvResearchTopicEN) => {
          return b.shareId.localeCompare(a.shareId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vResearchTopic]中不存在!(in ${vResearchTopic_ConstructorName}.${strThisFuncName})`;
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
export async function vResearchTopic_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvResearchTopicEN.con_TopicId:
      return (obj: clsvResearchTopicEN) => {
        return obj.topicId === value;
      };
    case clsvResearchTopicEN.con_TopicName:
      return (obj: clsvResearchTopicEN) => {
        return obj.topicName === value;
      };
    case clsvResearchTopicEN.con_TopicContent:
      return (obj: clsvResearchTopicEN) => {
        return obj.topicContent === value;
      };
    case clsvResearchTopicEN.con_TopicProposePeople:
      return (obj: clsvResearchTopicEN) => {
        return obj.topicProposePeople === value;
      };
    case clsvResearchTopicEN.con_OrderNum:
      return (obj: clsvResearchTopicEN) => {
        return obj.orderNum === value;
      };
    case clsvResearchTopicEN.con_UpdDate:
      return (obj: clsvResearchTopicEN) => {
        return obj.updDate === value;
      };
    case clsvResearchTopicEN.con_UpdUser:
      return (obj: clsvResearchTopicEN) => {
        return obj.updUser === value;
      };
    case clsvResearchTopicEN.con_Memo:
      return (obj: clsvResearchTopicEN) => {
        return obj.memo === value;
      };
    case clsvResearchTopicEN.con_IsSubmit:
      return (obj: clsvResearchTopicEN) => {
        return obj.isSubmit === value;
      };
    case clsvResearchTopicEN.con_UserName:
      return (obj: clsvResearchTopicEN) => {
        return obj.userName === value;
      };
    case clsvResearchTopicEN.con_IdCurrEduCls:
      return (obj: clsvResearchTopicEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvResearchTopicEN.con_ShareId:
      return (obj: clsvResearchTopicEN) => {
        return obj.shareId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vResearchTopic]中不存在!(in ${vResearchTopic_ConstructorName}.${strThisFuncName})`;
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
export async function vResearchTopic_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsvResearchTopicWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvResearchTopicWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvResearchTopicEN.con_TopicId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvResearchTopic = await vResearchTopic_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrvResearchTopic == null) return [];
  let arrvResearchTopicSel = arrvResearchTopic;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvResearchTopicSel = arrvResearchTopicSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvResearchTopicSel = arrvResearchTopicSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvResearchTopicSel = arrvResearchTopicSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvResearchTopicSel = arrvResearchTopicSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvResearchTopicSel = arrvResearchTopicSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvResearchTopicSel = arrvResearchTopicSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvResearchTopicSel = arrvResearchTopicSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvResearchTopicSel = arrvResearchTopicSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvResearchTopicSel = arrvResearchTopicSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvResearchTopicSel = arrvResearchTopicSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvResearchTopicSel.length == 0) return [];
  return arrvResearchTopicSel.map((x) => x.topicId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vResearchTopic_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vResearchTopic_Controller, strAction);

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
        vResearchTopic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vResearchTopic_ConstructorName,
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
export async function vResearchTopic_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vResearchTopic_Controller, strAction);

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
        vResearchTopic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vResearchTopic_ConstructorName,
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
export async function vResearchTopic_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvResearchTopicEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vResearchTopic_Controller, strAction);

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
      const objvResearchTopic = vResearchTopic_GetObjFromJsonObj(returnObj);
      return objvResearchTopic;
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
        vResearchTopic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vResearchTopic_ConstructorName,
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
export async function vResearchTopic_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvResearchTopicEN.WhereFormat) == false) {
    strWhereCond = Format(clsvResearchTopicEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvResearchTopicEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvResearchTopicEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvResearchTopicEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvResearchTopicExObjLstCache: Array<clsvResearchTopicEN> = CacheHelper.Get(strKey);
    const arrvResearchTopicObjLstT = vResearchTopic_GetObjLstByJSONObjLst(
      arrvResearchTopicExObjLstCache,
    );
    return arrvResearchTopicObjLstT;
  }
  try {
    const arrvResearchTopicExObjLst = await vResearchTopic_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvResearchTopicExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvResearchTopicExObjLst.length,
    );
    console.log(strInfo);
    return arrvResearchTopicExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vResearchTopic_ConstructorName,
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
export async function vResearchTopic_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvResearchTopicEN.WhereFormat) == false) {
    strWhereCond = Format(clsvResearchTopicEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvResearchTopicEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvResearchTopicEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvResearchTopicEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvResearchTopicEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvResearchTopicExObjLstCache: Array<clsvResearchTopicEN> = JSON.parse(strTempObjLst);
    const arrvResearchTopicObjLstT = vResearchTopic_GetObjLstByJSONObjLst(
      arrvResearchTopicExObjLstCache,
    );
    return arrvResearchTopicObjLstT;
  }
  try {
    const arrvResearchTopicExObjLst = await vResearchTopic_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvResearchTopicExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvResearchTopicExObjLst.length,
    );
    console.log(strInfo);
    return arrvResearchTopicExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vResearchTopic_ConstructorName,
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
export async function vResearchTopic_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvResearchTopicEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvResearchTopicObjLstCache: Array<clsvResearchTopicEN> = JSON.parse(strTempObjLst);
    return arrvResearchTopicObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vResearchTopic_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvResearchTopicEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vResearchTopic_Controller, strAction);

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
          vResearchTopic_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vResearchTopic_GetObjLstByJSONObjLst(returnObjLst);
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
        vResearchTopic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vResearchTopic_ConstructorName,
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
export async function vResearchTopic_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvResearchTopicEN.WhereFormat) == false) {
    strWhereCond = Format(clsvResearchTopicEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvResearchTopicEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvResearchTopicEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvResearchTopicEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvResearchTopicEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvResearchTopicExObjLstCache: Array<clsvResearchTopicEN> = JSON.parse(strTempObjLst);
    const arrvResearchTopicObjLstT = vResearchTopic_GetObjLstByJSONObjLst(
      arrvResearchTopicExObjLstCache,
    );
    return arrvResearchTopicObjLstT;
  }
  try {
    const arrvResearchTopicExObjLst = await vResearchTopic_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvResearchTopicExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvResearchTopicExObjLst.length,
    );
    console.log(strInfo);
    return arrvResearchTopicExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vResearchTopic_ConstructorName,
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
export async function vResearchTopic_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvResearchTopicEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvResearchTopicObjLstCache: Array<clsvResearchTopicEN> = JSON.parse(strTempObjLst);
    return arrvResearchTopicObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vResearchTopic_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsvResearchTopicEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsvResearchTopicWApi.vResearchTopic_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvResearchTopicWApi.vResearchTopic_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvResearchTopicObjLstCache;
  switch (clsvResearchTopicEN.CacheModeId) {
    case '04': //sessionStorage
      arrvResearchTopicObjLstCache = await vResearchTopic_GetObjLstsessionStorage(strIdCurrEduCls);
      break;
    case '03': //localStorage
      arrvResearchTopicObjLstCache = await vResearchTopic_GetObjLstlocalStorage(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrvResearchTopicObjLstCache = await vResearchTopic_GetObjLstClientCache(strIdCurrEduCls);
      break;
    default:
      arrvResearchTopicObjLstCache = await vResearchTopic_GetObjLstClientCache(strIdCurrEduCls);
      break;
  }
  return arrvResearchTopicObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vResearchTopic_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvResearchTopicObjLstCache;
  switch (clsvResearchTopicEN.CacheModeId) {
    case '04': //sessionStorage
      arrvResearchTopicObjLstCache = await vResearchTopic_GetObjLstsessionStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrvResearchTopicObjLstCache = await vResearchTopic_GetObjLstlocalStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrvResearchTopicObjLstCache = null;
      break;
    default:
      arrvResearchTopicObjLstCache = null;
      break;
  }
  return arrvResearchTopicObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTopicIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vResearchTopic_GetSubObjLstCache(
  objvResearchTopicCond: clsvResearchTopicEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvResearchTopicObjLstCache = await vResearchTopic_GetObjLstCache(strIdCurrEduCls);
  let arrvResearchTopicSel = arrvResearchTopicObjLstCache;
  if (
    objvResearchTopicCond.sfFldComparisonOp == null ||
    objvResearchTopicCond.sfFldComparisonOp == ''
  )
    return arrvResearchTopicSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvResearchTopicCond.sfFldComparisonOp,
  );
  //console.log("clsvResearchTopicWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvResearchTopicCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvResearchTopicSel = arrvResearchTopicSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvResearchTopicCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvResearchTopicSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvResearchTopicCond),
      vResearchTopic_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvResearchTopicEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTopicId:关键字列表
 * @returns 对象列表
 **/
export async function vResearchTopic_GetObjLstByTopicIdLstAsync(
  arrTopicId: Array<string>,
): Promise<Array<clsvResearchTopicEN>> {
  const strThisFuncName = 'GetObjLstByTopicIdLstAsync';
  const strAction = 'GetObjLstByTopicIdLst';
  const strUrl = GetWebApiUrl(vResearchTopic_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTopicId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vResearchTopic_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vResearchTopic_GetObjLstByJSONObjLst(returnObjLst);
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
        vResearchTopic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vResearchTopic_ConstructorName,
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
 * @param arrstrTopicIdLst:关键字列表
 * @returns 对象列表
 */
export async function vResearchTopic_GetObjLstByTopicIdLstCache(
  arrTopicIdLst: Array<string>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByTopicIdLstCache';
  try {
    const arrvResearchTopicObjLstCache = await vResearchTopic_GetObjLstCache(strIdCurrEduCls);
    const arrvResearchTopicSel = arrvResearchTopicObjLstCache.filter(
      (x) => arrTopicIdLst.indexOf(x.topicId) > -1,
    );
    return arrvResearchTopicSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTopicIdLst.join(','),
      vResearchTopic_ConstructorName,
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
export async function vResearchTopic_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvResearchTopicEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vResearchTopic_Controller, strAction);

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
          vResearchTopic_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vResearchTopic_GetObjLstByJSONObjLst(returnObjLst);
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
        vResearchTopic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vResearchTopic_ConstructorName,
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
export async function vResearchTopic_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvResearchTopicEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vResearchTopic_Controller, strAction);

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
          vResearchTopic_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vResearchTopic_GetObjLstByJSONObjLst(returnObjLst);
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
        vResearchTopic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vResearchTopic_ConstructorName,
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
export async function vResearchTopic_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvResearchTopicEN>();
  const arrvResearchTopicObjLstCache = await vResearchTopic_GetObjLstCache(strIdCurrEduCls);
  if (arrvResearchTopicObjLstCache.length == 0) return arrvResearchTopicObjLstCache;
  let arrvResearchTopicSel = arrvResearchTopicObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvResearchTopicCond = new clsvResearchTopicEN();
  ObjectAssign(objvResearchTopicCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvResearchTopicWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvResearchTopicSel = arrvResearchTopicSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvResearchTopicCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvResearchTopicSel.length == 0) return arrvResearchTopicSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvResearchTopicSel = arrvResearchTopicSel.sort(
        vResearchTopic_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvResearchTopicSel = arrvResearchTopicSel.sort(objPagerPara.sortFun);
    }
    arrvResearchTopicSel = arrvResearchTopicSel.slice(intStart, intEnd);
    return arrvResearchTopicSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vResearchTopic_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvResearchTopicEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vResearchTopic_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvResearchTopicEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvResearchTopicEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vResearchTopic_Controller, strAction);

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
          vResearchTopic_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vResearchTopic_GetObjLstByJSONObjLst(returnObjLst);
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
        vResearchTopic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vResearchTopic_ConstructorName,
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
 * @param objstrTopicIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vResearchTopic_IsExistRecordCache(
  objvResearchTopicCond: clsvResearchTopicEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvResearchTopicObjLstCache = await vResearchTopic_GetObjLstCache(strIdCurrEduCls);
  if (arrvResearchTopicObjLstCache == null) return false;
  let arrvResearchTopicSel = arrvResearchTopicObjLstCache;
  if (
    objvResearchTopicCond.sfFldComparisonOp == null ||
    objvResearchTopicCond.sfFldComparisonOp == ''
  )
    return arrvResearchTopicSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvResearchTopicCond.sfFldComparisonOp,
  );
  //console.log("clsvResearchTopicWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvResearchTopicCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvResearchTopicCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvResearchTopicSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvResearchTopicCond),
      vResearchTopic_ConstructorName,
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
export async function vResearchTopic_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vResearchTopic_Controller, strAction);

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
        vResearchTopic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vResearchTopic_ConstructorName,
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
 * @param strTopicId:所给的关键字
 * @returns 对象
 */
export async function vResearchTopic_IsExistCache(strTopicId: string, strIdCurrEduCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvResearchTopicObjLstCache = await vResearchTopic_GetObjLstCache(strIdCurrEduCls);
  if (arrvResearchTopicObjLstCache == null) return false;
  try {
    const arrvResearchTopicSel = arrvResearchTopicObjLstCache.filter(
      (x) => x.topicId == strTopicId,
    );
    if (arrvResearchTopicSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTopicId,
      vResearchTopic_ConstructorName,
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
 * @param strTopicId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vResearchTopic_IsExistAsync(strTopicId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vResearchTopic_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTopicId,
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
        vResearchTopic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vResearchTopic_ConstructorName,
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
export async function vResearchTopic_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vResearchTopic_Controller, strAction);

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
        vResearchTopic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vResearchTopic_ConstructorName,
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
 * @param objvResearchTopicCond:条件对象
 * @returns 对象列表记录数
 */
export async function vResearchTopic_GetRecCountByCondCache(
  objvResearchTopicCond: clsvResearchTopicEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvResearchTopicObjLstCache = await vResearchTopic_GetObjLstCache(strIdCurrEduCls);
  if (arrvResearchTopicObjLstCache == null) return 0;
  let arrvResearchTopicSel = arrvResearchTopicObjLstCache;
  if (
    objvResearchTopicCond.sfFldComparisonOp == null ||
    objvResearchTopicCond.sfFldComparisonOp == ''
  )
    return arrvResearchTopicSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvResearchTopicCond.sfFldComparisonOp,
  );
  //console.log("clsvResearchTopicWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvResearchTopicCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvResearchTopicSel = arrvResearchTopicSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvResearchTopicCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvResearchTopicSel = arrvResearchTopicSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvResearchTopicSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvResearchTopicCond),
      vResearchTopic_ConstructorName,
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
export function vResearchTopic_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vResearchTopic_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvResearchTopicEN._CurrTabName, strIdCurrEduCls);
    switch (clsvResearchTopicEN.CacheModeId) {
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
export function vResearchTopic_GetJSONStrByObj(pobjvResearchTopicEN: clsvResearchTopicEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvResearchTopicEN);
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
export function vResearchTopic_GetObjLstByJSONStr(strJSON: string): Array<clsvResearchTopicEN> {
  let arrvResearchTopicObjLst = new Array<clsvResearchTopicEN>();
  if (strJSON === '') {
    return arrvResearchTopicObjLst;
  }
  try {
    arrvResearchTopicObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvResearchTopicObjLst;
  }
  return arrvResearchTopicObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvResearchTopicObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vResearchTopic_GetObjLstByJSONObjLst(
  arrvResearchTopicObjLstS: Array<clsvResearchTopicEN>,
): Array<clsvResearchTopicEN> {
  const arrvResearchTopicObjLst = new Array<clsvResearchTopicEN>();
  for (const objInFor of arrvResearchTopicObjLstS) {
    const obj1 = vResearchTopic_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvResearchTopicObjLst.push(obj1);
  }
  return arrvResearchTopicObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vResearchTopic_GetObjByJSONStr(strJSON: string): clsvResearchTopicEN {
  let pobjvResearchTopicEN = new clsvResearchTopicEN();
  if (strJSON === '') {
    return pobjvResearchTopicEN;
  }
  try {
    pobjvResearchTopicEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvResearchTopicEN;
  }
  return pobjvResearchTopicEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vResearchTopic_GetCombineCondition(
  objvResearchTopicCond: clsvResearchTopicEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvResearchTopicCond.dicFldComparisonOp,
      clsvResearchTopicEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objvResearchTopicCond.dicFldComparisonOp[clsvResearchTopicEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvResearchTopicEN.con_TopicId,
      objvResearchTopicCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvResearchTopicCond.dicFldComparisonOp,
      clsvResearchTopicEN.con_TopicName,
    ) == true
  ) {
    const strComparisonOpTopicName: string =
      objvResearchTopicCond.dicFldComparisonOp[clsvResearchTopicEN.con_TopicName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvResearchTopicEN.con_TopicName,
      objvResearchTopicCond.topicName,
      strComparisonOpTopicName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvResearchTopicCond.dicFldComparisonOp,
      clsvResearchTopicEN.con_TopicProposePeople,
    ) == true
  ) {
    const strComparisonOpTopicProposePeople: string =
      objvResearchTopicCond.dicFldComparisonOp[clsvResearchTopicEN.con_TopicProposePeople];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvResearchTopicEN.con_TopicProposePeople,
      objvResearchTopicCond.topicProposePeople,
      strComparisonOpTopicProposePeople,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvResearchTopicCond.dicFldComparisonOp,
      clsvResearchTopicEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvResearchTopicCond.dicFldComparisonOp[clsvResearchTopicEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvResearchTopicEN.con_OrderNum,
      objvResearchTopicCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvResearchTopicCond.dicFldComparisonOp,
      clsvResearchTopicEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvResearchTopicCond.dicFldComparisonOp[clsvResearchTopicEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvResearchTopicEN.con_UpdDate,
      objvResearchTopicCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvResearchTopicCond.dicFldComparisonOp,
      clsvResearchTopicEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvResearchTopicCond.dicFldComparisonOp[clsvResearchTopicEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvResearchTopicEN.con_UpdUser,
      objvResearchTopicCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvResearchTopicCond.dicFldComparisonOp,
      clsvResearchTopicEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvResearchTopicCond.dicFldComparisonOp[clsvResearchTopicEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvResearchTopicEN.con_Memo,
      objvResearchTopicCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvResearchTopicCond.dicFldComparisonOp,
      clsvResearchTopicEN.con_IsSubmit,
    ) == true
  ) {
    if (objvResearchTopicCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvResearchTopicEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvResearchTopicEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvResearchTopicCond.dicFldComparisonOp,
      clsvResearchTopicEN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objvResearchTopicCond.dicFldComparisonOp[clsvResearchTopicEN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvResearchTopicEN.con_UserName,
      objvResearchTopicCond.userName,
      strComparisonOpUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvResearchTopicCond.dicFldComparisonOp,
      clsvResearchTopicEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvResearchTopicCond.dicFldComparisonOp[clsvResearchTopicEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvResearchTopicEN.con_IdCurrEduCls,
      objvResearchTopicCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvResearchTopicCond.dicFldComparisonOp,
      clsvResearchTopicEN.con_ShareId,
    ) == true
  ) {
    const strComparisonOpShareId: string =
      objvResearchTopicCond.dicFldComparisonOp[clsvResearchTopicEN.con_ShareId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvResearchTopicEN.con_ShareId,
      objvResearchTopicCond.shareId,
      strComparisonOpShareId,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvResearchTopicENS:源对象
 * @param objvResearchTopicENT:目标对象
 */
export function vResearchTopic_CopyObjTo(
  objvResearchTopicENS: clsvResearchTopicEN,
  objvResearchTopicENT: clsvResearchTopicEN,
): void {
  objvResearchTopicENT.topicId = objvResearchTopicENS.topicId; //主题Id
  objvResearchTopicENT.topicName = objvResearchTopicENS.topicName; //栏目主题
  objvResearchTopicENT.topicContent = objvResearchTopicENS.topicContent; //主题内容
  objvResearchTopicENT.topicProposePeople = objvResearchTopicENS.topicProposePeople; //主题提出人
  objvResearchTopicENT.orderNum = objvResearchTopicENS.orderNum; //序号
  objvResearchTopicENT.updDate = objvResearchTopicENS.updDate; //修改日期
  objvResearchTopicENT.updUser = objvResearchTopicENS.updUser; //修改人
  objvResearchTopicENT.memo = objvResearchTopicENS.memo; //备注
  objvResearchTopicENT.isSubmit = objvResearchTopicENS.isSubmit; //是否提交
  objvResearchTopicENT.userName = objvResearchTopicENS.userName; //用户名
  objvResearchTopicENT.idCurrEduCls = objvResearchTopicENS.idCurrEduCls; //教学班流水号
  objvResearchTopicENT.shareId = objvResearchTopicENS.shareId; //分享Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvResearchTopicENS:源对象
 * @param objvResearchTopicENT:目标对象
 */
export function vResearchTopic_GetObjFromJsonObj(
  objvResearchTopicENS: clsvResearchTopicEN,
): clsvResearchTopicEN {
  const objvResearchTopicENT: clsvResearchTopicEN = new clsvResearchTopicEN();
  ObjectAssign(objvResearchTopicENT, objvResearchTopicENS);
  return objvResearchTopicENT;
}
