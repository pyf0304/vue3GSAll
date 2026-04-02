/**
 * 类名:clsvMessagePushWApi
 * 表名:vMessagePush(01120282)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:59
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:新闻公告(NewsAnn)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 消息推送视图(vMessagePush)
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
import { clsvMessagePushEN } from '@/ts/L0Entity/NewsAnn/clsvMessagePushEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vMessagePush_Controller = 'vMessagePushApi';
export const vMessagePush_ConstructorName = 'vMessagePush';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strMessagePushId:关键字
 * @returns 对象
 **/
export async function vMessagePush_GetObjByMessagePushIdAsync(
  strMessagePushId: string,
): Promise<clsvMessagePushEN | null> {
  const strThisFuncName = 'GetObjByMessagePushIdAsync';

  if (IsNullOrEmpty(strMessagePushId) == true) {
    const strMsg = Format(
      '参数:[strMessagePushId]不能为空!(In clsvMessagePushWApi.GetObjByMessagePushIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strMessagePushId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strMessagePushId]的长度:[{0}]不正确!(clsvMessagePushWApi.GetObjByMessagePushIdAsync)',
      strMessagePushId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByMessagePushId';
  const strUrl = GetWebApiUrl(vMessagePush_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strMessagePushId,
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
      const objvMessagePush = vMessagePush_GetObjFromJsonObj(returnObj);
      return objvMessagePush;
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
        vMessagePush_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vMessagePush_ConstructorName,
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
 * @param strMessagePushId:所给的关键字
 * @returns 对象
 */
export async function vMessagePush_GetObjByMessagePushIdCache(
  strMessagePushId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByMessagePushIdCache';

  if (IsNullOrEmpty(strMessagePushId) == true) {
    const strMsg = Format(
      '参数:[strMessagePushId]不能为空!(In clsvMessagePushWApi.GetObjByMessagePushIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strMessagePushId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strMessagePushId]的长度:[{0}]不正确!(clsvMessagePushWApi.GetObjByMessagePushIdCache)',
      strMessagePushId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvMessagePushObjLstCache = await vMessagePush_GetObjLstCache();
  try {
    const arrvMessagePushSel = arrvMessagePushObjLstCache.filter(
      (x) => x.messagePushId == strMessagePushId,
    );
    let objvMessagePush: clsvMessagePushEN;
    if (arrvMessagePushSel.length > 0) {
      objvMessagePush = arrvMessagePushSel[0];
      return objvMessagePush;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvMessagePushConst = await vMessagePush_GetObjByMessagePushIdAsync(
          strMessagePushId,
        );
        if (objvMessagePushConst != null) {
          vMessagePush_ReFreshThisCache();
          return objvMessagePushConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strMessagePushId,
      vMessagePush_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strMessagePushId:所给的关键字
 * @returns 对象
 */
export async function vMessagePush_GetObjByMessagePushIdlocalStorage(strMessagePushId: string) {
  const strThisFuncName = 'GetObjByMessagePushIdlocalStorage';

  if (IsNullOrEmpty(strMessagePushId) == true) {
    const strMsg = Format(
      '参数:[strMessagePushId]不能为空!(In clsvMessagePushWApi.GetObjByMessagePushIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strMessagePushId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strMessagePushId]的长度:[{0}]不正确!(clsvMessagePushWApi.GetObjByMessagePushIdlocalStorage)',
      strMessagePushId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvMessagePushEN._CurrTabName, strMessagePushId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvMessagePushCache: clsvMessagePushEN = JSON.parse(strTempObj);
    return objvMessagePushCache;
  }
  try {
    const objvMessagePush = await vMessagePush_GetObjByMessagePushIdAsync(strMessagePushId);
    if (objvMessagePush != null) {
      localStorage.setItem(strKey, JSON.stringify(objvMessagePush));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvMessagePush;
    }
    return objvMessagePush;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strMessagePushId,
      vMessagePush_ConstructorName,
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
 * @returns 返回一个输出字段值
 */
export async function vMessagePush_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvMessagePushEN.con_MessagePushId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvMessagePushEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvMessagePushEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strMessagePushId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvMessagePush = await vMessagePush_GetObjByMessagePushIdCache(strMessagePushId);
  if (objvMessagePush == null) return '';
  if (objvMessagePush.GetFldValue(strOutFldName) == null) return '';
  return objvMessagePush.GetFldValue(strOutFldName).toString();
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
export function vMessagePush_SortFunDefa(a: clsvMessagePushEN, b: clsvMessagePushEN): number {
  return a.messagePushId.localeCompare(b.messagePushId);
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
export function vMessagePush_SortFunDefa2Fld(a: clsvMessagePushEN, b: clsvMessagePushEN): number {
  if (a.messagePushNumber == b.messagePushNumber)
    return a.messageTitle.localeCompare(b.messageTitle);
  else return a.messagePushNumber.localeCompare(b.messagePushNumber);
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
export function vMessagePush_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvMessagePushEN.con_MessagePushId:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          return a.messagePushId.localeCompare(b.messagePushId);
        };
      case clsvMessagePushEN.con_MessagePushNumber:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (a.messagePushNumber == null) return -1;
          if (b.messagePushNumber == null) return 1;
          return a.messagePushNumber.localeCompare(b.messagePushNumber);
        };
      case clsvMessagePushEN.con_MessageTitle:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (a.messageTitle == null) return -1;
          if (b.messageTitle == null) return 1;
          return a.messageTitle.localeCompare(b.messageTitle);
        };
      case clsvMessagePushEN.con_MessageContent:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (a.messageContent == null) return -1;
          if (b.messageContent == null) return 1;
          return a.messageContent.localeCompare(b.messageContent);
        };
      case clsvMessagePushEN.con_ReceivePeople:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (a.receivePeople == null) return -1;
          if (b.receivePeople == null) return 1;
          return a.receivePeople.localeCompare(b.receivePeople);
        };
      case clsvMessagePushEN.con_MessageTypeId:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          return a.messageTypeId.localeCompare(b.messageTypeId);
        };
      case clsvMessagePushEN.con_MessageTypeName:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (a.messageTypeName == null) return -1;
          if (b.messageTypeName == null) return 1;
          return a.messageTypeName.localeCompare(b.messageTypeName);
        };
      case clsvMessagePushEN.con_IsAllpush:
        return (a: clsvMessagePushEN) => {
          if (a.isAllpush == true) return 1;
          else return -1;
        };
      case clsvMessagePushEN.con_IsReceive:
        return (a: clsvMessagePushEN) => {
          if (a.isReceive == true) return 1;
          else return -1;
        };
      case clsvMessagePushEN.con_ClientVersionTypeId:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (a.clientVersionTypeId == null) return -1;
          if (b.clientVersionTypeId == null) return 1;
          return a.clientVersionTypeId.localeCompare(b.clientVersionTypeId);
        };
      case clsvMessagePushEN.con_UpdDate:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvMessagePushEN.con_Memo:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vMessagePush]中不存在!(in ${vMessagePush_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvMessagePushEN.con_MessagePushId:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          return b.messagePushId.localeCompare(a.messagePushId);
        };
      case clsvMessagePushEN.con_MessagePushNumber:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (b.messagePushNumber == null) return -1;
          if (a.messagePushNumber == null) return 1;
          return b.messagePushNumber.localeCompare(a.messagePushNumber);
        };
      case clsvMessagePushEN.con_MessageTitle:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (b.messageTitle == null) return -1;
          if (a.messageTitle == null) return 1;
          return b.messageTitle.localeCompare(a.messageTitle);
        };
      case clsvMessagePushEN.con_MessageContent:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (b.messageContent == null) return -1;
          if (a.messageContent == null) return 1;
          return b.messageContent.localeCompare(a.messageContent);
        };
      case clsvMessagePushEN.con_ReceivePeople:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (b.receivePeople == null) return -1;
          if (a.receivePeople == null) return 1;
          return b.receivePeople.localeCompare(a.receivePeople);
        };
      case clsvMessagePushEN.con_MessageTypeId:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          return b.messageTypeId.localeCompare(a.messageTypeId);
        };
      case clsvMessagePushEN.con_MessageTypeName:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (b.messageTypeName == null) return -1;
          if (a.messageTypeName == null) return 1;
          return b.messageTypeName.localeCompare(a.messageTypeName);
        };
      case clsvMessagePushEN.con_IsAllpush:
        return (b: clsvMessagePushEN) => {
          if (b.isAllpush == true) return 1;
          else return -1;
        };
      case clsvMessagePushEN.con_IsReceive:
        return (b: clsvMessagePushEN) => {
          if (b.isReceive == true) return 1;
          else return -1;
        };
      case clsvMessagePushEN.con_ClientVersionTypeId:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (b.clientVersionTypeId == null) return -1;
          if (a.clientVersionTypeId == null) return 1;
          return b.clientVersionTypeId.localeCompare(a.clientVersionTypeId);
        };
      case clsvMessagePushEN.con_UpdDate:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvMessagePushEN.con_Memo:
        return (a: clsvMessagePushEN, b: clsvMessagePushEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vMessagePush]中不存在!(in ${vMessagePush_ConstructorName}.${strThisFuncName})`;
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
export async function vMessagePush_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvMessagePushEN.con_MessagePushId:
      return (obj: clsvMessagePushEN) => {
        return obj.messagePushId === value;
      };
    case clsvMessagePushEN.con_MessagePushNumber:
      return (obj: clsvMessagePushEN) => {
        return obj.messagePushNumber === value;
      };
    case clsvMessagePushEN.con_MessageTitle:
      return (obj: clsvMessagePushEN) => {
        return obj.messageTitle === value;
      };
    case clsvMessagePushEN.con_MessageContent:
      return (obj: clsvMessagePushEN) => {
        return obj.messageContent === value;
      };
    case clsvMessagePushEN.con_ReceivePeople:
      return (obj: clsvMessagePushEN) => {
        return obj.receivePeople === value;
      };
    case clsvMessagePushEN.con_MessageTypeId:
      return (obj: clsvMessagePushEN) => {
        return obj.messageTypeId === value;
      };
    case clsvMessagePushEN.con_MessageTypeName:
      return (obj: clsvMessagePushEN) => {
        return obj.messageTypeName === value;
      };
    case clsvMessagePushEN.con_IsAllpush:
      return (obj: clsvMessagePushEN) => {
        return obj.isAllpush === value;
      };
    case clsvMessagePushEN.con_IsReceive:
      return (obj: clsvMessagePushEN) => {
        return obj.isReceive === value;
      };
    case clsvMessagePushEN.con_ClientVersionTypeId:
      return (obj: clsvMessagePushEN) => {
        return obj.clientVersionTypeId === value;
      };
    case clsvMessagePushEN.con_UpdDate:
      return (obj: clsvMessagePushEN) => {
        return obj.updDate === value;
      };
    case clsvMessagePushEN.con_Memo:
      return (obj: clsvMessagePushEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vMessagePush]中不存在!(in ${vMessagePush_ConstructorName}.${strThisFuncName})`;
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
export async function vMessagePush_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvMessagePushEN.con_MessagePushId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvMessagePush = await vMessagePush_GetObjLstCache();
  if (arrvMessagePush == null) return [];
  let arrvMessagePushSel = arrvMessagePush;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvMessagePushSel = arrvMessagePushSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvMessagePushSel = arrvMessagePushSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvMessagePushSel = arrvMessagePushSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvMessagePushSel = arrvMessagePushSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvMessagePushSel = arrvMessagePushSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvMessagePushSel = arrvMessagePushSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvMessagePushSel = arrvMessagePushSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvMessagePushSel = arrvMessagePushSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvMessagePushSel = arrvMessagePushSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvMessagePushSel = arrvMessagePushSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvMessagePushSel.length == 0) return [];
  return arrvMessagePushSel.map((x) => x.messagePushId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vMessagePush_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vMessagePush_Controller, strAction);

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
        vMessagePush_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vMessagePush_ConstructorName,
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
export async function vMessagePush_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vMessagePush_Controller, strAction);

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
        vMessagePush_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vMessagePush_ConstructorName,
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
export async function vMessagePush_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvMessagePushEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vMessagePush_Controller, strAction);

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
      const objvMessagePush = vMessagePush_GetObjFromJsonObj(returnObj);
      return objvMessagePush;
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
        vMessagePush_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vMessagePush_ConstructorName,
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
export async function vMessagePush_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvMessagePushEN._CurrTabName;
  if (IsNullOrEmpty(clsvMessagePushEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvMessagePushEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvMessagePushExObjLstCache: Array<clsvMessagePushEN> = CacheHelper.Get(strKey);
    const arrvMessagePushObjLstT = vMessagePush_GetObjLstByJSONObjLst(arrvMessagePushExObjLstCache);
    return arrvMessagePushObjLstT;
  }
  try {
    const arrvMessagePushExObjLst = await vMessagePush_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvMessagePushExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvMessagePushExObjLst.length,
    );
    console.log(strInfo);
    return arrvMessagePushExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vMessagePush_ConstructorName,
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
export async function vMessagePush_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvMessagePushEN._CurrTabName;
  if (IsNullOrEmpty(clsvMessagePushEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvMessagePushEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvMessagePushExObjLstCache: Array<clsvMessagePushEN> = JSON.parse(strTempObjLst);
    const arrvMessagePushObjLstT = vMessagePush_GetObjLstByJSONObjLst(arrvMessagePushExObjLstCache);
    return arrvMessagePushObjLstT;
  }
  try {
    const arrvMessagePushExObjLst = await vMessagePush_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvMessagePushExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvMessagePushExObjLst.length,
    );
    console.log(strInfo);
    return arrvMessagePushExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vMessagePush_ConstructorName,
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
export async function vMessagePush_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvMessagePushEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvMessagePushObjLstCache: Array<clsvMessagePushEN> = JSON.parse(strTempObjLst);
    return arrvMessagePushObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vMessagePush_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvMessagePushEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vMessagePush_Controller, strAction);

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
          vMessagePush_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vMessagePush_GetObjLstByJSONObjLst(returnObjLst);
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
        vMessagePush_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vMessagePush_ConstructorName,
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
export async function vMessagePush_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvMessagePushEN._CurrTabName;
  if (IsNullOrEmpty(clsvMessagePushEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvMessagePushEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvMessagePushExObjLstCache: Array<clsvMessagePushEN> = JSON.parse(strTempObjLst);
    const arrvMessagePushObjLstT = vMessagePush_GetObjLstByJSONObjLst(arrvMessagePushExObjLstCache);
    return arrvMessagePushObjLstT;
  }
  try {
    const arrvMessagePushExObjLst = await vMessagePush_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvMessagePushExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvMessagePushExObjLst.length,
    );
    console.log(strInfo);
    return arrvMessagePushExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vMessagePush_ConstructorName,
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
export async function vMessagePush_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvMessagePushEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvMessagePushObjLstCache: Array<clsvMessagePushEN> = JSON.parse(strTempObjLst);
    return arrvMessagePushObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vMessagePush_GetObjLstCache(): Promise<Array<clsvMessagePushEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvMessagePushObjLstCache;
  switch (clsvMessagePushEN.CacheModeId) {
    case '04': //sessionStorage
      arrvMessagePushObjLstCache = await vMessagePush_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvMessagePushObjLstCache = await vMessagePush_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvMessagePushObjLstCache = await vMessagePush_GetObjLstClientCache();
      break;
    default:
      arrvMessagePushObjLstCache = await vMessagePush_GetObjLstClientCache();
      break;
  }
  return arrvMessagePushObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vMessagePush_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvMessagePushObjLstCache;
  switch (clsvMessagePushEN.CacheModeId) {
    case '04': //sessionStorage
      arrvMessagePushObjLstCache = await vMessagePush_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvMessagePushObjLstCache = await vMessagePush_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvMessagePushObjLstCache = null;
      break;
    default:
      arrvMessagePushObjLstCache = null;
      break;
  }
  return arrvMessagePushObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrMessagePushIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vMessagePush_GetSubObjLstCache(objvMessagePushCond: clsvMessagePushEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvMessagePushObjLstCache = await vMessagePush_GetObjLstCache();
  let arrvMessagePushSel = arrvMessagePushObjLstCache;
  if (objvMessagePushCond.sfFldComparisonOp == null || objvMessagePushCond.sfFldComparisonOp == '')
    return arrvMessagePushSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvMessagePushCond.sfFldComparisonOp,
  );
  //console.log("clsvMessagePushWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvMessagePushCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvMessagePushSel = arrvMessagePushSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvMessagePushCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvMessagePushSel = arrvMessagePushSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvMessagePushSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvMessagePushCond),
      vMessagePush_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvMessagePushEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrMessagePushId:关键字列表
 * @returns 对象列表
 **/
export async function vMessagePush_GetObjLstByMessagePushIdLstAsync(
  arrMessagePushId: Array<string>,
): Promise<Array<clsvMessagePushEN>> {
  const strThisFuncName = 'GetObjLstByMessagePushIdLstAsync';
  const strAction = 'GetObjLstByMessagePushIdLst';
  const strUrl = GetWebApiUrl(vMessagePush_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrMessagePushId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vMessagePush_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vMessagePush_GetObjLstByJSONObjLst(returnObjLst);
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
        vMessagePush_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vMessagePush_ConstructorName,
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
 * @param arrstrMessagePushIdLst:关键字列表
 * @returns 对象列表
 */
export async function vMessagePush_GetObjLstByMessagePushIdLstCache(
  arrMessagePushIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByMessagePushIdLstCache';
  try {
    const arrvMessagePushObjLstCache = await vMessagePush_GetObjLstCache();
    const arrvMessagePushSel = arrvMessagePushObjLstCache.filter(
      (x) => arrMessagePushIdLst.indexOf(x.messagePushId) > -1,
    );
    return arrvMessagePushSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrMessagePushIdLst.join(','),
      vMessagePush_ConstructorName,
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
export async function vMessagePush_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvMessagePushEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vMessagePush_Controller, strAction);

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
          vMessagePush_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vMessagePush_GetObjLstByJSONObjLst(returnObjLst);
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
        vMessagePush_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vMessagePush_ConstructorName,
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
export async function vMessagePush_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvMessagePushEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vMessagePush_Controller, strAction);

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
          vMessagePush_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vMessagePush_GetObjLstByJSONObjLst(returnObjLst);
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
        vMessagePush_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vMessagePush_ConstructorName,
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
export async function vMessagePush_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvMessagePushEN>();
  const arrvMessagePushObjLstCache = await vMessagePush_GetObjLstCache();
  if (arrvMessagePushObjLstCache.length == 0) return arrvMessagePushObjLstCache;
  let arrvMessagePushSel = arrvMessagePushObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvMessagePushCond = new clsvMessagePushEN();
  ObjectAssign(objvMessagePushCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvMessagePushWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvMessagePushSel = arrvMessagePushSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvMessagePushCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvMessagePushSel = arrvMessagePushSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvMessagePushSel.length == 0) return arrvMessagePushSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvMessagePushSel = arrvMessagePushSel.sort(
        vMessagePush_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvMessagePushSel = arrvMessagePushSel.sort(objPagerPara.sortFun);
    }
    arrvMessagePushSel = arrvMessagePushSel.slice(intStart, intEnd);
    return arrvMessagePushSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vMessagePush_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvMessagePushEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vMessagePush_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvMessagePushEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvMessagePushEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vMessagePush_Controller, strAction);

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
          vMessagePush_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vMessagePush_GetObjLstByJSONObjLst(returnObjLst);
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
        vMessagePush_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vMessagePush_ConstructorName,
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
 * @param objstrMessagePushIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vMessagePush_IsExistRecordCache(objvMessagePushCond: clsvMessagePushEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvMessagePushObjLstCache = await vMessagePush_GetObjLstCache();
  if (arrvMessagePushObjLstCache == null) return false;
  let arrvMessagePushSel = arrvMessagePushObjLstCache;
  if (objvMessagePushCond.sfFldComparisonOp == null || objvMessagePushCond.sfFldComparisonOp == '')
    return arrvMessagePushSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvMessagePushCond.sfFldComparisonOp,
  );
  //console.log("clsvMessagePushWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvMessagePushCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvMessagePushCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvMessagePushSel = arrvMessagePushSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvMessagePushSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvMessagePushCond),
      vMessagePush_ConstructorName,
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
export async function vMessagePush_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vMessagePush_Controller, strAction);

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
        vMessagePush_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vMessagePush_ConstructorName,
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
 * @param strMessagePushId:所给的关键字
 * @returns 对象
 */
export async function vMessagePush_IsExistCache(strMessagePushId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvMessagePushObjLstCache = await vMessagePush_GetObjLstCache();
  if (arrvMessagePushObjLstCache == null) return false;
  try {
    const arrvMessagePushSel = arrvMessagePushObjLstCache.filter(
      (x) => x.messagePushId == strMessagePushId,
    );
    if (arrvMessagePushSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strMessagePushId,
      vMessagePush_ConstructorName,
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
 * @param strMessagePushId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vMessagePush_IsExistAsync(strMessagePushId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vMessagePush_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strMessagePushId,
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
        vMessagePush_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vMessagePush_ConstructorName,
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
export async function vMessagePush_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vMessagePush_Controller, strAction);

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
        vMessagePush_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vMessagePush_ConstructorName,
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
 * @param objvMessagePushCond:条件对象
 * @returns 对象列表记录数
 */
export async function vMessagePush_GetRecCountByCondCache(objvMessagePushCond: clsvMessagePushEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvMessagePushObjLstCache = await vMessagePush_GetObjLstCache();
  if (arrvMessagePushObjLstCache == null) return 0;
  let arrvMessagePushSel = arrvMessagePushObjLstCache;
  if (objvMessagePushCond.sfFldComparisonOp == null || objvMessagePushCond.sfFldComparisonOp == '')
    return arrvMessagePushSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvMessagePushCond.sfFldComparisonOp,
  );
  //console.log("clsvMessagePushWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvMessagePushCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvMessagePushSel = arrvMessagePushSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvMessagePushCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvMessagePushSel = arrvMessagePushSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvMessagePushSel = arrvMessagePushSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvMessagePushSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvMessagePushCond),
      vMessagePush_ConstructorName,
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
export function vMessagePush_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vMessagePush_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvMessagePushEN._CurrTabName;
    switch (clsvMessagePushEN.CacheModeId) {
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
export function vMessagePush_GetJSONStrByObj(pobjvMessagePushEN: clsvMessagePushEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvMessagePushEN);
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
export function vMessagePush_GetObjLstByJSONStr(strJSON: string): Array<clsvMessagePushEN> {
  let arrvMessagePushObjLst = new Array<clsvMessagePushEN>();
  if (strJSON === '') {
    return arrvMessagePushObjLst;
  }
  try {
    arrvMessagePushObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvMessagePushObjLst;
  }
  return arrvMessagePushObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvMessagePushObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vMessagePush_GetObjLstByJSONObjLst(
  arrvMessagePushObjLstS: Array<clsvMessagePushEN>,
): Array<clsvMessagePushEN> {
  const arrvMessagePushObjLst = new Array<clsvMessagePushEN>();
  for (const objInFor of arrvMessagePushObjLstS) {
    const obj1 = vMessagePush_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvMessagePushObjLst.push(obj1);
  }
  return arrvMessagePushObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vMessagePush_GetObjByJSONStr(strJSON: string): clsvMessagePushEN {
  let pobjvMessagePushEN = new clsvMessagePushEN();
  if (strJSON === '') {
    return pobjvMessagePushEN;
  }
  try {
    pobjvMessagePushEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvMessagePushEN;
  }
  return pobjvMessagePushEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vMessagePush_GetCombineCondition(objvMessagePushCond: clsvMessagePushEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvMessagePushCond.dicFldComparisonOp,
      clsvMessagePushEN.con_MessagePushId,
    ) == true
  ) {
    const strComparisonOpMessagePushId: string =
      objvMessagePushCond.dicFldComparisonOp[clsvMessagePushEN.con_MessagePushId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvMessagePushEN.con_MessagePushId,
      objvMessagePushCond.messagePushId,
      strComparisonOpMessagePushId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvMessagePushCond.dicFldComparisonOp,
      clsvMessagePushEN.con_MessagePushNumber,
    ) == true
  ) {
    const strComparisonOpMessagePushNumber: string =
      objvMessagePushCond.dicFldComparisonOp[clsvMessagePushEN.con_MessagePushNumber];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvMessagePushEN.con_MessagePushNumber,
      objvMessagePushCond.messagePushNumber,
      strComparisonOpMessagePushNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvMessagePushCond.dicFldComparisonOp,
      clsvMessagePushEN.con_MessageTitle,
    ) == true
  ) {
    const strComparisonOpMessageTitle: string =
      objvMessagePushCond.dicFldComparisonOp[clsvMessagePushEN.con_MessageTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvMessagePushEN.con_MessageTitle,
      objvMessagePushCond.messageTitle,
      strComparisonOpMessageTitle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvMessagePushCond.dicFldComparisonOp,
      clsvMessagePushEN.con_MessageContent,
    ) == true
  ) {
    const strComparisonOpMessageContent: string =
      objvMessagePushCond.dicFldComparisonOp[clsvMessagePushEN.con_MessageContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvMessagePushEN.con_MessageContent,
      objvMessagePushCond.messageContent,
      strComparisonOpMessageContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvMessagePushCond.dicFldComparisonOp,
      clsvMessagePushEN.con_ReceivePeople,
    ) == true
  ) {
    const strComparisonOpReceivePeople: string =
      objvMessagePushCond.dicFldComparisonOp[clsvMessagePushEN.con_ReceivePeople];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvMessagePushEN.con_ReceivePeople,
      objvMessagePushCond.receivePeople,
      strComparisonOpReceivePeople,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvMessagePushCond.dicFldComparisonOp,
      clsvMessagePushEN.con_MessageTypeId,
    ) == true
  ) {
    const strComparisonOpMessageTypeId: string =
      objvMessagePushCond.dicFldComparisonOp[clsvMessagePushEN.con_MessageTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvMessagePushEN.con_MessageTypeId,
      objvMessagePushCond.messageTypeId,
      strComparisonOpMessageTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvMessagePushCond.dicFldComparisonOp,
      clsvMessagePushEN.con_MessageTypeName,
    ) == true
  ) {
    const strComparisonOpMessageTypeName: string =
      objvMessagePushCond.dicFldComparisonOp[clsvMessagePushEN.con_MessageTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvMessagePushEN.con_MessageTypeName,
      objvMessagePushCond.messageTypeName,
      strComparisonOpMessageTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvMessagePushCond.dicFldComparisonOp,
      clsvMessagePushEN.con_IsAllpush,
    ) == true
  ) {
    if (objvMessagePushCond.isAllpush == true) {
      strWhereCond += Format(" And {0} = '1'", clsvMessagePushEN.con_IsAllpush);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvMessagePushEN.con_IsAllpush);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvMessagePushCond.dicFldComparisonOp,
      clsvMessagePushEN.con_IsReceive,
    ) == true
  ) {
    if (objvMessagePushCond.isReceive == true) {
      strWhereCond += Format(" And {0} = '1'", clsvMessagePushEN.con_IsReceive);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvMessagePushEN.con_IsReceive);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvMessagePushCond.dicFldComparisonOp,
      clsvMessagePushEN.con_ClientVersionTypeId,
    ) == true
  ) {
    const strComparisonOpClientVersionTypeId: string =
      objvMessagePushCond.dicFldComparisonOp[clsvMessagePushEN.con_ClientVersionTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvMessagePushEN.con_ClientVersionTypeId,
      objvMessagePushCond.clientVersionTypeId,
      strComparisonOpClientVersionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvMessagePushCond.dicFldComparisonOp,
      clsvMessagePushEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvMessagePushCond.dicFldComparisonOp[clsvMessagePushEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvMessagePushEN.con_UpdDate,
      objvMessagePushCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvMessagePushCond.dicFldComparisonOp,
      clsvMessagePushEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvMessagePushCond.dicFldComparisonOp[clsvMessagePushEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvMessagePushEN.con_Memo,
      objvMessagePushCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvMessagePushENS:源对象
 * @param objvMessagePushENT:目标对象
 */
export function vMessagePush_CopyObjTo(
  objvMessagePushENS: clsvMessagePushEN,
  objvMessagePushENT: clsvMessagePushEN,
): void {
  objvMessagePushENT.messagePushId = objvMessagePushENS.messagePushId; //消息Id
  objvMessagePushENT.messagePushNumber = objvMessagePushENS.messagePushNumber; //消息编号
  objvMessagePushENT.messageTitle = objvMessagePushENS.messageTitle; //消息标题
  objvMessagePushENT.messageContent = objvMessagePushENS.messageContent; //消息内容
  objvMessagePushENT.receivePeople = objvMessagePushENS.receivePeople; //接收人员
  objvMessagePushENT.messageTypeId = objvMessagePushENS.messageTypeId; //消息类型Id
  objvMessagePushENT.messageTypeName = objvMessagePushENS.messageTypeName; //消息类型名称
  objvMessagePushENT.isAllpush = objvMessagePushENS.isAllpush; //是否全体推送
  objvMessagePushENT.isReceive = objvMessagePushENS.isReceive; //是否接收
  objvMessagePushENT.clientVersionTypeId = objvMessagePushENS.clientVersionTypeId; //客户端版本类型Id
  objvMessagePushENT.updDate = objvMessagePushENS.updDate; //修改日期
  objvMessagePushENT.memo = objvMessagePushENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvMessagePushENS:源对象
 * @param objvMessagePushENT:目标对象
 */
export function vMessagePush_GetObjFromJsonObj(
  objvMessagePushENS: clsvMessagePushEN,
): clsvMessagePushEN {
  const objvMessagePushENT: clsvMessagePushEN = new clsvMessagePushEN();
  ObjectAssign(objvMessagePushENT, objvMessagePushENS);
  return objvMessagePushENT;
}
