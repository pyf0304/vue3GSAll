/**
 * 类名:clske_SubWApi
 * 表名:ke_Sub(01120660)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:51
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
 * 知识经济子类(ke_Sub)
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
import { clske_SubEN } from '@/ts/L0Entity/GradEduTopic/clske_SubEN';
import { vke_Sub_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduTopic/clsvke_SubWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const ke_Sub_Controller = 'ke_SubApi';
export const ke_Sub_ConstructorName = 'ke_Sub';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeSubId:关键字
 * @returns 对象
 **/
export async function ke_Sub_GetObjByKeSubIdAsync(strKeSubId: string): Promise<clske_SubEN | null> {
  const strThisFuncName = 'GetObjByKeSubIdAsync';

  if (IsNullOrEmpty(strKeSubId) == true) {
    const strMsg = Format('参数:[strKeSubId]不能为空!(In clske_SubWApi.GetObjByKeSubIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strKeSubId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKeSubId]的长度:[{0}]不正确!(clske_SubWApi.GetObjByKeSubIdAsync)',
      strKeSubId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeSubId';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strKeSubId,
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
      const objke_Sub = ke_Sub_GetObjFromJsonObj(returnObj);
      return objke_Sub;
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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
 * @param strKeSubId:所给的关键字
 * @returns 对象
 */
export async function ke_Sub_GetObjByKeSubIdCache(strKeSubId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByKeSubIdCache';

  if (IsNullOrEmpty(strKeSubId) == true) {
    const strMsg = Format('参数:[strKeSubId]不能为空!(In clske_SubWApi.GetObjByKeSubIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strKeSubId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKeSubId]的长度:[{0}]不正确!(clske_SubWApi.GetObjByKeSubIdCache)',
      strKeSubId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrke_SubObjLstCache = await ke_Sub_GetObjLstCache();
  try {
    const arrke_SubSel = arrke_SubObjLstCache.filter((x) => x.keSubId == strKeSubId);
    let objke_Sub: clske_SubEN;
    if (arrke_SubSel.length > 0) {
      objke_Sub = arrke_SubSel[0];
      return objke_Sub;
    } else {
      if (bolTryAsyncOnce == true) {
        const objke_SubConst = await ke_Sub_GetObjByKeSubIdAsync(strKeSubId);
        if (objke_SubConst != null) {
          ke_Sub_ReFreshThisCache();
          return objke_SubConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strKeSubId,
      ke_Sub_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strKeSubId:所给的关键字
 * @returns 对象
 */
export async function ke_Sub_GetObjByKeSubIdlocalStorage(strKeSubId: string) {
  const strThisFuncName = 'GetObjByKeSubIdlocalStorage';

  if (IsNullOrEmpty(strKeSubId) == true) {
    const strMsg = Format(
      '参数:[strKeSubId]不能为空!(In clske_SubWApi.GetObjByKeSubIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKeSubId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKeSubId]的长度:[{0}]不正确!(clske_SubWApi.GetObjByKeSubIdlocalStorage)',
      strKeSubId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clske_SubEN._CurrTabName, strKeSubId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objke_SubCache: clske_SubEN = JSON.parse(strTempObj);
    return objke_SubCache;
  }
  try {
    const objke_Sub = await ke_Sub_GetObjByKeSubIdAsync(strKeSubId);
    if (objke_Sub != null) {
      localStorage.setItem(strKey, JSON.stringify(objke_Sub));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objke_Sub;
    }
    return objke_Sub;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strKeSubId,
      ke_Sub_ConstructorName,
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
 * @param objke_Sub:所给的对象
 * @returns 对象
 */
export async function ke_Sub_UpdateObjInLstCache(objke_Sub: clske_SubEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrke_SubObjLstCache = await ke_Sub_GetObjLstCache();
    const obj = arrke_SubObjLstCache.find((x) => x.keSubId == objke_Sub.keSubId);
    if (obj != null) {
      objke_Sub.keSubId = obj.keSubId;
      ObjectAssign(obj, objke_Sub);
    } else {
      arrke_SubObjLstCache.push(objke_Sub);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      ke_Sub_ConstructorName,
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
export async function ke_Sub_func(strInFldName: string, strOutFldName: string, strInValue: string) {
  //const strThisFuncName = "func";

  if (strInFldName != clske_SubEN.con_KeSubId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clske_SubEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clske_SubEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strKeSubId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objke_Sub = await ke_Sub_GetObjByKeSubIdCache(strKeSubId);
  if (objke_Sub == null) return '';
  if (objke_Sub.GetFldValue(strOutFldName) == null) return '';
  return objke_Sub.GetFldValue(strOutFldName).toString();
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
export function ke_Sub_SortFunDefa(a: clske_SubEN, b: clske_SubEN): number {
  return a.keSubId.localeCompare(b.keSubId);
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
export function ke_Sub_SortFunDefa2Fld(a: clske_SubEN, b: clske_SubEN): number {
  if (a.keSuperId == b.keSuperId) return a.keSubNameCn.localeCompare(b.keSubNameCn);
  else return a.keSuperId.localeCompare(b.keSuperId);
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
export function ke_Sub_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clske_SubEN.con_KeSubId:
        return (a: clske_SubEN, b: clske_SubEN) => {
          return a.keSubId.localeCompare(b.keSubId);
        };
      case clske_SubEN.con_KeSuperId:
        return (a: clske_SubEN, b: clske_SubEN) => {
          return a.keSuperId.localeCompare(b.keSuperId);
        };
      case clske_SubEN.con_KeSubNameCn:
        return (a: clske_SubEN, b: clske_SubEN) => {
          return a.keSubNameCn.localeCompare(b.keSubNameCn);
        };
      case clske_SubEN.con_KeSubNameEn:
        return (a: clske_SubEN, b: clske_SubEN) => {
          if (a.keSubNameEn == null) return -1;
          if (b.keSubNameEn == null) return 1;
          return a.keSubNameEn.localeCompare(b.keSubNameEn);
        };
      case clske_SubEN.con_KeSubDescribeCn:
        return (a: clske_SubEN, b: clske_SubEN) => {
          if (a.keSubDescribeCn == null) return -1;
          if (b.keSubDescribeCn == null) return 1;
          return a.keSubDescribeCn.localeCompare(b.keSubDescribeCn);
        };
      case clske_SubEN.con_KeSubDescribeEn:
        return (a: clske_SubEN, b: clske_SubEN) => {
          if (a.keSubDescribeEn == null) return -1;
          if (b.keSubDescribeEn == null) return 1;
          return a.keSubDescribeEn.localeCompare(b.keSubDescribeEn);
        };
      case clske_SubEN.con_UpdDate:
        return (a: clske_SubEN, b: clske_SubEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clske_SubEN.con_UpdUser:
        return (a: clske_SubEN, b: clske_SubEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clske_SubEN.con_Memo:
        return (a: clske_SubEN, b: clske_SubEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clske_SubEN.con_Link:
        return (a: clske_SubEN, b: clske_SubEN) => {
          if (a.link == null) return -1;
          if (b.link == null) return 1;
          return a.link.localeCompare(b.link);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ke_Sub]中不存在!(in ${ke_Sub_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clske_SubEN.con_KeSubId:
        return (a: clske_SubEN, b: clske_SubEN) => {
          return b.keSubId.localeCompare(a.keSubId);
        };
      case clske_SubEN.con_KeSuperId:
        return (a: clske_SubEN, b: clske_SubEN) => {
          return b.keSuperId.localeCompare(a.keSuperId);
        };
      case clske_SubEN.con_KeSubNameCn:
        return (a: clske_SubEN, b: clske_SubEN) => {
          return b.keSubNameCn.localeCompare(a.keSubNameCn);
        };
      case clske_SubEN.con_KeSubNameEn:
        return (a: clske_SubEN, b: clske_SubEN) => {
          if (b.keSubNameEn == null) return -1;
          if (a.keSubNameEn == null) return 1;
          return b.keSubNameEn.localeCompare(a.keSubNameEn);
        };
      case clske_SubEN.con_KeSubDescribeCn:
        return (a: clske_SubEN, b: clske_SubEN) => {
          if (b.keSubDescribeCn == null) return -1;
          if (a.keSubDescribeCn == null) return 1;
          return b.keSubDescribeCn.localeCompare(a.keSubDescribeCn);
        };
      case clske_SubEN.con_KeSubDescribeEn:
        return (a: clske_SubEN, b: clske_SubEN) => {
          if (b.keSubDescribeEn == null) return -1;
          if (a.keSubDescribeEn == null) return 1;
          return b.keSubDescribeEn.localeCompare(a.keSubDescribeEn);
        };
      case clske_SubEN.con_UpdDate:
        return (a: clske_SubEN, b: clske_SubEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clske_SubEN.con_UpdUser:
        return (a: clske_SubEN, b: clske_SubEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clske_SubEN.con_Memo:
        return (a: clske_SubEN, b: clske_SubEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clske_SubEN.con_Link:
        return (a: clske_SubEN, b: clske_SubEN) => {
          if (b.link == null) return -1;
          if (a.link == null) return 1;
          return b.link.localeCompare(a.link);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ke_Sub]中不存在!(in ${ke_Sub_ConstructorName}.${strThisFuncName})`;
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
export async function ke_Sub_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clske_SubEN.con_KeSubId:
      return (obj: clske_SubEN) => {
        return obj.keSubId === value;
      };
    case clske_SubEN.con_KeSuperId:
      return (obj: clske_SubEN) => {
        return obj.keSuperId === value;
      };
    case clske_SubEN.con_KeSubNameCn:
      return (obj: clske_SubEN) => {
        return obj.keSubNameCn === value;
      };
    case clske_SubEN.con_KeSubNameEn:
      return (obj: clske_SubEN) => {
        return obj.keSubNameEn === value;
      };
    case clske_SubEN.con_KeSubDescribeCn:
      return (obj: clske_SubEN) => {
        return obj.keSubDescribeCn === value;
      };
    case clske_SubEN.con_KeSubDescribeEn:
      return (obj: clske_SubEN) => {
        return obj.keSubDescribeEn === value;
      };
    case clske_SubEN.con_UpdDate:
      return (obj: clske_SubEN) => {
        return obj.updDate === value;
      };
    case clske_SubEN.con_UpdUser:
      return (obj: clske_SubEN) => {
        return obj.updUser === value;
      };
    case clske_SubEN.con_Memo:
      return (obj: clske_SubEN) => {
        return obj.memo === value;
      };
    case clske_SubEN.con_Link:
      return (obj: clske_SubEN) => {
        return obj.link === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ke_Sub]中不存在!(in ${ke_Sub_ConstructorName}.${strThisFuncName})`;
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
export async function ke_Sub_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clske_SubEN.con_KeSubId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrke_Sub = await ke_Sub_GetObjLstCache();
  if (arrke_Sub == null) return [];
  let arrke_SubSel = arrke_Sub;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrke_SubSel = arrke_SubSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrke_SubSel = arrke_SubSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrke_SubSel = arrke_SubSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrke_SubSel.length == 0) return [];
  return arrke_SubSel.map((x) => x.keSubId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ke_Sub_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
export async function ke_Sub_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
export async function ke_Sub_GetFirstObjAsync(strWhereCond: string): Promise<clske_SubEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

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
      const objke_Sub = ke_Sub_GetObjFromJsonObj(returnObj);
      return objke_Sub;
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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
export async function ke_Sub_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clske_SubEN._CurrTabName;
  if (IsNullOrEmpty(clske_SubEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clske_SubEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrke_SubExObjLstCache: Array<clske_SubEN> = CacheHelper.Get(strKey);
    const arrke_SubObjLstT = ke_Sub_GetObjLstByJSONObjLst(arrke_SubExObjLstCache);
    return arrke_SubObjLstT;
  }
  try {
    const arrke_SubExObjLst = await ke_Sub_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrke_SubExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrke_SubExObjLst.length,
    );
    console.log(strInfo);
    return arrke_SubExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      ke_Sub_ConstructorName,
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
export async function ke_Sub_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clske_SubEN._CurrTabName;
  if (IsNullOrEmpty(clske_SubEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clske_SubEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrke_SubExObjLstCache: Array<clske_SubEN> = JSON.parse(strTempObjLst);
    const arrke_SubObjLstT = ke_Sub_GetObjLstByJSONObjLst(arrke_SubExObjLstCache);
    return arrke_SubObjLstT;
  }
  try {
    const arrke_SubExObjLst = await ke_Sub_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrke_SubExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrke_SubExObjLst.length,
    );
    console.log(strInfo);
    return arrke_SubExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      ke_Sub_ConstructorName,
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
export async function ke_Sub_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clske_SubEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrke_SubObjLstCache: Array<clske_SubEN> = JSON.parse(strTempObjLst);
    return arrke_SubObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ke_Sub_GetObjLstAsync(strWhereCond: string): Promise<Array<clske_SubEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

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
          ke_Sub_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ke_Sub_GetObjLstByJSONObjLst(returnObjLst);
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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
export async function ke_Sub_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clske_SubEN._CurrTabName;
  if (IsNullOrEmpty(clske_SubEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clske_SubEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrke_SubExObjLstCache: Array<clske_SubEN> = JSON.parse(strTempObjLst);
    const arrke_SubObjLstT = ke_Sub_GetObjLstByJSONObjLst(arrke_SubExObjLstCache);
    return arrke_SubObjLstT;
  }
  try {
    const arrke_SubExObjLst = await ke_Sub_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrke_SubExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrke_SubExObjLst.length,
    );
    console.log(strInfo);
    return arrke_SubExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      ke_Sub_ConstructorName,
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
export async function ke_Sub_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clske_SubEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrke_SubObjLstCache: Array<clske_SubEN> = JSON.parse(strTempObjLst);
    return arrke_SubObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ke_Sub_GetObjLstCache(): Promise<Array<clske_SubEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrke_SubObjLstCache;
  switch (clske_SubEN.CacheModeId) {
    case '04': //sessionStorage
      arrke_SubObjLstCache = await ke_Sub_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrke_SubObjLstCache = await ke_Sub_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrke_SubObjLstCache = await ke_Sub_GetObjLstClientCache();
      break;
    default:
      arrke_SubObjLstCache = await ke_Sub_GetObjLstClientCache();
      break;
  }
  return arrke_SubObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ke_Sub_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrke_SubObjLstCache;
  switch (clske_SubEN.CacheModeId) {
    case '04': //sessionStorage
      arrke_SubObjLstCache = await ke_Sub_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrke_SubObjLstCache = await ke_Sub_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrke_SubObjLstCache = null;
      break;
    default:
      arrke_SubObjLstCache = null;
      break;
  }
  return arrke_SubObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrKeSubIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ke_Sub_GetSubObjLstCache(objke_SubCond: clske_SubEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrke_SubObjLstCache = await ke_Sub_GetObjLstCache();
  let arrke_SubSel = arrke_SubObjLstCache;
  if (objke_SubCond.sfFldComparisonOp == null || objke_SubCond.sfFldComparisonOp == '')
    return arrke_SubSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objke_SubCond.sfFldComparisonOp,
  );
  //console.log("clske_SubWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objke_SubCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objke_SubCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrke_SubSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objke_SubCond),
      ke_Sub_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clske_SubEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrKeSubId:关键字列表
 * @returns 对象列表
 **/
export async function ke_Sub_GetObjLstByKeSubIdLstAsync(
  arrKeSubId: Array<string>,
): Promise<Array<clske_SubEN>> {
  const strThisFuncName = 'GetObjLstByKeSubIdLstAsync';
  const strAction = 'GetObjLstByKeSubIdLst';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeSubId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          ke_Sub_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ke_Sub_GetObjLstByJSONObjLst(returnObjLst);
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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
 * @param arrstrKeSubIdLst:关键字列表
 * @returns 对象列表
 */
export async function ke_Sub_GetObjLstByKeSubIdLstCache(arrKeSubIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByKeSubIdLstCache';
  try {
    const arrke_SubObjLstCache = await ke_Sub_GetObjLstCache();
    const arrke_SubSel = arrke_SubObjLstCache.filter((x) => arrKeSubIdLst.indexOf(x.keSubId) > -1);
    return arrke_SubSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrKeSubIdLst.join(','),
      ke_Sub_ConstructorName,
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
export async function ke_Sub_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clske_SubEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

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
          ke_Sub_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ke_Sub_GetObjLstByJSONObjLst(returnObjLst);
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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
export async function ke_Sub_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clske_SubEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

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
          ke_Sub_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ke_Sub_GetObjLstByJSONObjLst(returnObjLst);
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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
export async function ke_Sub_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clske_SubEN>();
  const arrke_SubObjLstCache = await ke_Sub_GetObjLstCache();
  if (arrke_SubObjLstCache.length == 0) return arrke_SubObjLstCache;
  let arrke_SubSel = arrke_SubObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objke_SubCond = new clske_SubEN();
  ObjectAssign(objke_SubCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clske_SubWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objke_SubCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrke_SubSel = arrke_SubSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrke_SubSel.length == 0) return arrke_SubSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrke_SubSel = arrke_SubSel.sort(ke_Sub_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrke_SubSel = arrke_SubSel.sort(objPagerPara.sortFun);
    }
    arrke_SubSel = arrke_SubSel.slice(intStart, intEnd);
    return arrke_SubSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ke_Sub_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clske_SubEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ke_Sub_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clske_SubEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clske_SubEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

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
          ke_Sub_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ke_Sub_GetObjLstByJSONObjLst(returnObjLst);
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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
 * @param strKeSubId:关键字
 * @returns 获取删除的结果
 **/
export async function ke_Sub_DelRecordAsync(strKeSubId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strKeSubId);

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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
 * @param arrKeSubId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ke_Sub_Delke_SubsAsync(arrKeSubId: Array<string>): Promise<number> {
  const strThisFuncName = 'Delke_SubsAsync';
  const strAction = 'Delke_Subs';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeSubId, config);
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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
export async function ke_Sub_Delke_SubsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'Delke_SubsByCondAsync';
  const strAction = 'Delke_SubsByCond';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
 * @param objke_SubEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ke_Sub_AddNewRecordAsync(objke_SubEN: clske_SubEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objke_SubEN.keSubId === null || objke_SubEN.keSubId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objke_SubEN);
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objke_SubEN, config);
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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
 * @param objke_SubEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ke_Sub_AddNewRecordWithMaxIdAsync(objke_SubEN: clske_SubEN): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objke_SubEN, config);
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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
 * @param objke_SubEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ke_Sub_AddNewRecordWithReturnKeyAsync(
  objke_SubEN: clske_SubEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objke_SubEN, config);
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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
 * @param objke_SubEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ke_Sub_UpdateRecordAsync(objke_SubEN: clske_SubEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objke_SubEN.sfUpdFldSetStr === undefined ||
    objke_SubEN.sfUpdFldSetStr === null ||
    objke_SubEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objke_SubEN.keSubId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objke_SubEN, config);
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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
 * @param objke_SubEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ke_Sub_UpdateWithConditionAsync(
  objke_SubEN: clske_SubEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objke_SubEN.sfUpdFldSetStr === undefined ||
    objke_SubEN.sfUpdFldSetStr === null ||
    objke_SubEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objke_SubEN.keSubId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);
  objke_SubEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objke_SubEN, config);
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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
 * @param objstrKeSubIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ke_Sub_IsExistRecordCache(objke_SubCond: clske_SubEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrke_SubObjLstCache = await ke_Sub_GetObjLstCache();
  if (arrke_SubObjLstCache == null) return false;
  let arrke_SubSel = arrke_SubObjLstCache;
  if (objke_SubCond.sfFldComparisonOp == null || objke_SubCond.sfFldComparisonOp == '')
    return arrke_SubSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objke_SubCond.sfFldComparisonOp,
  );
  //console.log("clske_SubWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objke_SubCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objke_SubCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrke_SubSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objke_SubCond),
      ke_Sub_ConstructorName,
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
export async function ke_Sub_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
 * @param strKeSubId:所给的关键字
 * @returns 对象
 */
export async function ke_Sub_IsExistCache(strKeSubId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrke_SubObjLstCache = await ke_Sub_GetObjLstCache();
  if (arrke_SubObjLstCache == null) return false;
  try {
    const arrke_SubSel = arrke_SubObjLstCache.filter((x) => x.keSubId == strKeSubId);
    if (arrke_SubSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strKeSubId,
      ke_Sub_ConstructorName,
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
 * @param strKeSubId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ke_Sub_IsExistAsync(strKeSubId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strKeSubId,
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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
export async function ke_Sub_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
 * @param objke_SubCond:条件对象
 * @returns 对象列表记录数
 */
export async function ke_Sub_GetRecCountByCondCache(objke_SubCond: clske_SubEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrke_SubObjLstCache = await ke_Sub_GetObjLstCache();
  if (arrke_SubObjLstCache == null) return 0;
  let arrke_SubSel = arrke_SubObjLstCache;
  if (objke_SubCond.sfFldComparisonOp == null || objke_SubCond.sfFldComparisonOp == '')
    return arrke_SubSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objke_SubCond.sfFldComparisonOp,
  );
  //console.log("clske_SubWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objke_SubCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objke_SubCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrke_SubSel = arrke_SubSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrke_SubSel = arrke_SubSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrke_SubSel = arrke_SubSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrke_SubSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objke_SubCond),
      ke_Sub_ConstructorName,
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
export async function ke_Sub_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(ke_Sub_Controller, strAction);

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
        ke_Sub_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Sub_ConstructorName,
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
export function ke_Sub_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ke_Sub_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clske_SubEN._CurrTabName;
  switch (clske_SubEN.CacheModeId) {
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
  vke_Sub_ReFreshThisCache();
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ke_Sub_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clske_SubEN._CurrTabName;
    switch (clske_SubEN.CacheModeId) {
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
export function ke_Sub_CheckPropertyNew(pobjke_SubEN: clske_SubEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjke_SubEN.keSuperId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[知识分类Id]不能为空(In 知识经济子类)!(clske_SubBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjke_SubEN.keSubNameCn) === true) {
    throw new Error(
      '(errid:Watl000411)字段[知识子类名]不能为空(In 知识经济子类)!(clske_SubBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjke_SubEN.keSubId) == false && GetStrLen(pobjke_SubEN.keSubId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[知识子类Id(keSubId)]的长度不能超过4(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.keSubId)(clske_SubBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjke_SubEN.keSuperId) == false && GetStrLen(pobjke_SubEN.keSuperId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[知识分类Id(keSuperId)]的长度不能超过4(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.keSuperId)(clske_SubBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubNameCn) == false &&
    GetStrLen(pobjke_SubEN.keSubNameCn) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[知识子类名(keSubNameCn)]的长度不能超过200(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.keSubNameCn)(clske_SubBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubNameEn) == false &&
    GetStrLen(pobjke_SubEN.keSubNameEn) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[知识子类英文名(keSubNameEn)]的长度不能超过200(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.keSubNameEn)(clske_SubBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubDescribeCn) == false &&
    GetStrLen(pobjke_SubEN.keSubDescribeCn) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[知识子类描述(keSubDescribeCn)]的长度不能超过500(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.keSubDescribeCn)(clske_SubBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubDescribeEn) == false &&
    GetStrLen(pobjke_SubEN.keSubDescribeEn) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[知识子类英文描述(keSubDescribeEn)]的长度不能超过500(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.keSubDescribeEn)(clske_SubBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjke_SubEN.updDate) == false && GetStrLen(pobjke_SubEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.updDate)(clske_SubBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjke_SubEN.updUser) == false && GetStrLen(pobjke_SubEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.updUser)(clske_SubBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjke_SubEN.memo) == false && GetStrLen(pobjke_SubEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.memo)(clske_SubBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjke_SubEN.link) == false && GetStrLen(pobjke_SubEN.link) > 200) {
    throw new Error(
      '(errid:Watl000413)字段[相应链接(link)]的长度不能超过200(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.link)(clske_SubBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubId) == false &&
    undefined !== pobjke_SubEN.keSubId &&
    tzDataType.isString(pobjke_SubEN.keSubId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识子类Id(keSubId)]的值:[$(pobjke_SubEN.keSubId)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSuperId) == false &&
    undefined !== pobjke_SubEN.keSuperId &&
    tzDataType.isString(pobjke_SubEN.keSuperId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识分类Id(keSuperId)]的值:[$(pobjke_SubEN.keSuperId)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubNameCn) == false &&
    undefined !== pobjke_SubEN.keSubNameCn &&
    tzDataType.isString(pobjke_SubEN.keSubNameCn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识子类名(keSubNameCn)]的值:[$(pobjke_SubEN.keSubNameCn)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubNameEn) == false &&
    undefined !== pobjke_SubEN.keSubNameEn &&
    tzDataType.isString(pobjke_SubEN.keSubNameEn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识子类英文名(keSubNameEn)]的值:[$(pobjke_SubEN.keSubNameEn)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubDescribeCn) == false &&
    undefined !== pobjke_SubEN.keSubDescribeCn &&
    tzDataType.isString(pobjke_SubEN.keSubDescribeCn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识子类描述(keSubDescribeCn)]的值:[$(pobjke_SubEN.keSubDescribeCn)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubDescribeEn) == false &&
    undefined !== pobjke_SubEN.keSubDescribeEn &&
    tzDataType.isString(pobjke_SubEN.keSubDescribeEn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识子类英文描述(keSubDescribeEn)]的值:[$(pobjke_SubEN.keSubDescribeEn)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.updDate) == false &&
    undefined !== pobjke_SubEN.updDate &&
    tzDataType.isString(pobjke_SubEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjke_SubEN.updDate)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.updUser) == false &&
    undefined !== pobjke_SubEN.updUser &&
    tzDataType.isString(pobjke_SubEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjke_SubEN.updUser)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.memo) == false &&
    undefined !== pobjke_SubEN.memo &&
    tzDataType.isString(pobjke_SubEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjke_SubEN.memo)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.link) == false &&
    undefined !== pobjke_SubEN.link &&
    tzDataType.isString(pobjke_SubEN.link) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[相应链接(link)]的值:[$(pobjke_SubEN.link)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ke_Sub_CheckProperty4Update(pobjke_SubEN: clske_SubEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjke_SubEN.keSubId) == false && GetStrLen(pobjke_SubEN.keSubId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[知识子类Id(keSubId)]的长度不能超过4(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.keSubId)(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjke_SubEN.keSuperId) == false && GetStrLen(pobjke_SubEN.keSuperId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[知识分类Id(keSuperId)]的长度不能超过4(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.keSuperId)(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubNameCn) == false &&
    GetStrLen(pobjke_SubEN.keSubNameCn) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[知识子类名(keSubNameCn)]的长度不能超过200(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.keSubNameCn)(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubNameEn) == false &&
    GetStrLen(pobjke_SubEN.keSubNameEn) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[知识子类英文名(keSubNameEn)]的长度不能超过200(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.keSubNameEn)(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubDescribeCn) == false &&
    GetStrLen(pobjke_SubEN.keSubDescribeCn) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[知识子类描述(keSubDescribeCn)]的长度不能超过500(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.keSubDescribeCn)(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubDescribeEn) == false &&
    GetStrLen(pobjke_SubEN.keSubDescribeEn) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[知识子类英文描述(keSubDescribeEn)]的长度不能超过500(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.keSubDescribeEn)(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjke_SubEN.updDate) == false && GetStrLen(pobjke_SubEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.updDate)(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjke_SubEN.updUser) == false && GetStrLen(pobjke_SubEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.updUser)(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjke_SubEN.memo) == false && GetStrLen(pobjke_SubEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.memo)(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjke_SubEN.link) == false && GetStrLen(pobjke_SubEN.link) > 200) {
    throw new Error(
      '(errid:Watl000416)字段[相应链接(link)]的长度不能超过200(In 知识经济子类(ke_Sub))!值:$(pobjke_SubEN.link)(clske_SubBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubId) == false &&
    undefined !== pobjke_SubEN.keSubId &&
    tzDataType.isString(pobjke_SubEN.keSubId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识子类Id(keSubId)]的值:[$(pobjke_SubEN.keSubId)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSuperId) == false &&
    undefined !== pobjke_SubEN.keSuperId &&
    tzDataType.isString(pobjke_SubEN.keSuperId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识分类Id(keSuperId)]的值:[$(pobjke_SubEN.keSuperId)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubNameCn) == false &&
    undefined !== pobjke_SubEN.keSubNameCn &&
    tzDataType.isString(pobjke_SubEN.keSubNameCn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识子类名(keSubNameCn)]的值:[$(pobjke_SubEN.keSubNameCn)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubNameEn) == false &&
    undefined !== pobjke_SubEN.keSubNameEn &&
    tzDataType.isString(pobjke_SubEN.keSubNameEn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识子类英文名(keSubNameEn)]的值:[$(pobjke_SubEN.keSubNameEn)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubDescribeCn) == false &&
    undefined !== pobjke_SubEN.keSubDescribeCn &&
    tzDataType.isString(pobjke_SubEN.keSubDescribeCn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识子类描述(keSubDescribeCn)]的值:[$(pobjke_SubEN.keSubDescribeCn)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.keSubDescribeEn) == false &&
    undefined !== pobjke_SubEN.keSubDescribeEn &&
    tzDataType.isString(pobjke_SubEN.keSubDescribeEn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识子类英文描述(keSubDescribeEn)]的值:[$(pobjke_SubEN.keSubDescribeEn)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.updDate) == false &&
    undefined !== pobjke_SubEN.updDate &&
    tzDataType.isString(pobjke_SubEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjke_SubEN.updDate)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.updUser) == false &&
    undefined !== pobjke_SubEN.updUser &&
    tzDataType.isString(pobjke_SubEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjke_SubEN.updUser)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.memo) == false &&
    undefined !== pobjke_SubEN.memo &&
    tzDataType.isString(pobjke_SubEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjke_SubEN.memo)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SubEN.link) == false &&
    undefined !== pobjke_SubEN.link &&
    tzDataType.isString(pobjke_SubEN.link) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[相应链接(link)]的值:[$(pobjke_SubEN.link)], 非法,应该为字符型(In 知识经济子类(ke_Sub))!(clske_SubBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjke_SubEN.keSubId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[知识子类Id]不能为空(In 知识经济子类)!(clske_SubBL:CheckProperty4Update)',
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
export function ke_Sub_GetJSONStrByObj(pobjke_SubEN: clske_SubEN): string {
  pobjke_SubEN.sfUpdFldSetStr = pobjke_SubEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjke_SubEN);
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
export function ke_Sub_GetObjLstByJSONStr(strJSON: string): Array<clske_SubEN> {
  let arrke_SubObjLst = new Array<clske_SubEN>();
  if (strJSON === '') {
    return arrke_SubObjLst;
  }
  try {
    arrke_SubObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrke_SubObjLst;
  }
  return arrke_SubObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrke_SubObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ke_Sub_GetObjLstByJSONObjLst(
  arrke_SubObjLstS: Array<clske_SubEN>,
): Array<clske_SubEN> {
  const arrke_SubObjLst = new Array<clske_SubEN>();
  for (const objInFor of arrke_SubObjLstS) {
    const obj1 = ke_Sub_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrke_SubObjLst.push(obj1);
  }
  return arrke_SubObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ke_Sub_GetObjByJSONStr(strJSON: string): clske_SubEN {
  let pobjke_SubEN = new clske_SubEN();
  if (strJSON === '') {
    return pobjke_SubEN;
  }
  try {
    pobjke_SubEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjke_SubEN;
  }
  return pobjke_SubEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ke_Sub_GetCombineCondition(objke_SubCond: clske_SubEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SubCond.dicFldComparisonOp,
      clske_SubEN.con_KeSubId,
    ) == true
  ) {
    const strComparisonOpKeSubId: string =
      objke_SubCond.dicFldComparisonOp[clske_SubEN.con_KeSubId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SubEN.con_KeSubId,
      objke_SubCond.keSubId,
      strComparisonOpKeSubId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SubCond.dicFldComparisonOp,
      clske_SubEN.con_KeSuperId,
    ) == true
  ) {
    const strComparisonOpKeSuperId: string =
      objke_SubCond.dicFldComparisonOp[clske_SubEN.con_KeSuperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SubEN.con_KeSuperId,
      objke_SubCond.keSuperId,
      strComparisonOpKeSuperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SubCond.dicFldComparisonOp,
      clske_SubEN.con_KeSubNameCn,
    ) == true
  ) {
    const strComparisonOpKeSubNameCn: string =
      objke_SubCond.dicFldComparisonOp[clske_SubEN.con_KeSubNameCn];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SubEN.con_KeSubNameCn,
      objke_SubCond.keSubNameCn,
      strComparisonOpKeSubNameCn,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SubCond.dicFldComparisonOp,
      clske_SubEN.con_KeSubNameEn,
    ) == true
  ) {
    const strComparisonOpKeSubNameEn: string =
      objke_SubCond.dicFldComparisonOp[clske_SubEN.con_KeSubNameEn];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SubEN.con_KeSubNameEn,
      objke_SubCond.keSubNameEn,
      strComparisonOpKeSubNameEn,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SubCond.dicFldComparisonOp,
      clske_SubEN.con_KeSubDescribeCn,
    ) == true
  ) {
    const strComparisonOpKeSubDescribeCn: string =
      objke_SubCond.dicFldComparisonOp[clske_SubEN.con_KeSubDescribeCn];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SubEN.con_KeSubDescribeCn,
      objke_SubCond.keSubDescribeCn,
      strComparisonOpKeSubDescribeCn,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SubCond.dicFldComparisonOp,
      clske_SubEN.con_KeSubDescribeEn,
    ) == true
  ) {
    const strComparisonOpKeSubDescribeEn: string =
      objke_SubCond.dicFldComparisonOp[clske_SubEN.con_KeSubDescribeEn];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SubEN.con_KeSubDescribeEn,
      objke_SubCond.keSubDescribeEn,
      strComparisonOpKeSubDescribeEn,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SubCond.dicFldComparisonOp,
      clske_SubEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objke_SubCond.dicFldComparisonOp[clske_SubEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SubEN.con_UpdDate,
      objke_SubCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SubCond.dicFldComparisonOp,
      clske_SubEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objke_SubCond.dicFldComparisonOp[clske_SubEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SubEN.con_UpdUser,
      objke_SubCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objke_SubCond.dicFldComparisonOp, clske_SubEN.con_Memo) ==
    true
  ) {
    const strComparisonOpMemo: string = objke_SubCond.dicFldComparisonOp[clske_SubEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SubEN.con_Memo,
      objke_SubCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objke_SubCond.dicFldComparisonOp, clske_SubEN.con_Link) ==
    true
  ) {
    const strComparisonOpLink: string = objke_SubCond.dicFldComparisonOp[clske_SubEN.con_Link];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SubEN.con_Link,
      objke_SubCond.link,
      strComparisonOpLink,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objke_SubENS:源对象
 * @param objke_SubENT:目标对象
 */
export function ke_Sub_CopyObjTo(objke_SubENS: clske_SubEN, objke_SubENT: clske_SubEN): void {
  objke_SubENT.keSubId = objke_SubENS.keSubId; //知识子类Id
  objke_SubENT.keSuperId = objke_SubENS.keSuperId; //知识分类Id
  objke_SubENT.keSubNameCn = objke_SubENS.keSubNameCn; //知识子类名
  objke_SubENT.keSubNameEn = objke_SubENS.keSubNameEn; //知识子类英文名
  objke_SubENT.keSubDescribeCn = objke_SubENS.keSubDescribeCn; //知识子类描述
  objke_SubENT.keSubDescribeEn = objke_SubENS.keSubDescribeEn; //知识子类英文描述
  objke_SubENT.updDate = objke_SubENS.updDate; //修改日期
  objke_SubENT.updUser = objke_SubENS.updUser; //修改人
  objke_SubENT.memo = objke_SubENS.memo; //备注
  objke_SubENT.link = objke_SubENS.link; //相应链接
  objke_SubENT.sfUpdFldSetStr = objke_SubENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objke_SubENS:源对象
 * @param objke_SubENT:目标对象
 */
export function ke_Sub_GetObjFromJsonObj(objke_SubENS: clske_SubEN): clske_SubEN {
  const objke_SubENT: clske_SubEN = new clske_SubEN();
  ObjectAssign(objke_SubENT, objke_SubENS);
  return objke_SubENT;
}
