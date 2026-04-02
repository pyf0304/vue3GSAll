/**
 * 类名:clske_SuperWApi
 * 表名:ke_Super(01120661)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:53
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
 * 知识经济父类(ke_Super)
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
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clske_SuperEN } from '@/ts/L0Entity/GradEduTopic/clske_SuperEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const ke_Super_Controller = 'ke_SuperApi';
export const ke_Super_ConstructorName = 'ke_Super';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeSuperId:关键字
 * @returns 对象
 **/
export async function ke_Super_GetObjByKeSuperIdAsync(
  strKeSuperId: string,
): Promise<clske_SuperEN | null> {
  const strThisFuncName = 'GetObjByKeSuperIdAsync';

  if (IsNullOrEmpty(strKeSuperId) == true) {
    const strMsg = Format(
      '参数:[strKeSuperId]不能为空!(In clske_SuperWApi.GetObjByKeSuperIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKeSuperId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKeSuperId]的长度:[{0}]不正确!(clske_SuperWApi.GetObjByKeSuperIdAsync)',
      strKeSuperId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeSuperId';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strKeSuperId,
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
      const objke_Super = ke_Super_GetObjFromJsonObj(returnObj);
      return objke_Super;
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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
 * @param strKeSuperId:所给的关键字
 * @returns 对象
 */
export async function ke_Super_GetObjByKeSuperIdCache(
  strKeSuperId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByKeSuperIdCache';

  if (IsNullOrEmpty(strKeSuperId) == true) {
    const strMsg = Format(
      '参数:[strKeSuperId]不能为空!(In clske_SuperWApi.GetObjByKeSuperIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKeSuperId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKeSuperId]的长度:[{0}]不正确!(clske_SuperWApi.GetObjByKeSuperIdCache)',
      strKeSuperId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrke_SuperObjLstCache = await ke_Super_GetObjLstCache();
  try {
    const arrke_SuperSel = arrke_SuperObjLstCache.filter((x) => x.keSuperId == strKeSuperId);
    let objke_Super: clske_SuperEN;
    if (arrke_SuperSel.length > 0) {
      objke_Super = arrke_SuperSel[0];
      return objke_Super;
    } else {
      if (bolTryAsyncOnce == true) {
        const objke_SuperConst = await ke_Super_GetObjByKeSuperIdAsync(strKeSuperId);
        if (objke_SuperConst != null) {
          ke_Super_ReFreshThisCache();
          return objke_SuperConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strKeSuperId,
      ke_Super_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strKeSuperId:所给的关键字
 * @returns 对象
 */
export async function ke_Super_GetObjByKeSuperIdlocalStorage(strKeSuperId: string) {
  const strThisFuncName = 'GetObjByKeSuperIdlocalStorage';

  if (IsNullOrEmpty(strKeSuperId) == true) {
    const strMsg = Format(
      '参数:[strKeSuperId]不能为空!(In clske_SuperWApi.GetObjByKeSuperIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKeSuperId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKeSuperId]的长度:[{0}]不正确!(clske_SuperWApi.GetObjByKeSuperIdlocalStorage)',
      strKeSuperId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clske_SuperEN._CurrTabName, strKeSuperId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objke_SuperCache: clske_SuperEN = JSON.parse(strTempObj);
    return objke_SuperCache;
  }
  try {
    const objke_Super = await ke_Super_GetObjByKeSuperIdAsync(strKeSuperId);
    if (objke_Super != null) {
      localStorage.setItem(strKey, JSON.stringify(objke_Super));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objke_Super;
    }
    return objke_Super;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strKeSuperId,
      ke_Super_ConstructorName,
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
 * @param objke_Super:所给的对象
 * @returns 对象
 */
export async function ke_Super_UpdateObjInLstCache(objke_Super: clske_SuperEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrke_SuperObjLstCache = await ke_Super_GetObjLstCache();
    const obj = arrke_SuperObjLstCache.find((x) => x.keSuperId == objke_Super.keSuperId);
    if (obj != null) {
      objke_Super.keSuperId = obj.keSuperId;
      ObjectAssign(obj, objke_Super);
    } else {
      arrke_SuperObjLstCache.push(objke_Super);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      ke_Super_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strKeSuperId:所给的关键字
 * @returns 对象
 */
export async function ke_Super_GetNameByKeSuperIdCache(strKeSuperId: string) {
  if (IsNullOrEmpty(strKeSuperId) == true) {
    const strMsg = Format(
      '参数:[strKeSuperId]不能为空!(In clske_SuperWApi.GetNameByKeSuperIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKeSuperId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKeSuperId]的长度:[{0}]不正确!(clske_SuperWApi.GetNameByKeSuperIdCache)',
      strKeSuperId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrke_SuperObjLstCache = await ke_Super_GetObjLstCache();
  if (arrke_SuperObjLstCache == null) return '';
  try {
    const arrke_SuperSel = arrke_SuperObjLstCache.filter((x) => x.keSuperId == strKeSuperId);
    let objke_Super: clske_SuperEN;
    if (arrke_SuperSel.length > 0) {
      objke_Super = arrke_SuperSel[0];
      return objke_Super.keSuperNameCn;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strKeSuperId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

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
export async function ke_Super_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clske_SuperEN.con_KeSuperId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clske_SuperEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clske_SuperEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strKeSuperId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objke_Super = await ke_Super_GetObjByKeSuperIdCache(strKeSuperId);
  if (objke_Super == null) return '';
  if (objke_Super.GetFldValue(strOutFldName) == null) return '';
  return objke_Super.GetFldValue(strOutFldName).toString();
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
export function ke_Super_SortFunDefa(a: clske_SuperEN, b: clske_SuperEN): number {
  return a.keSuperId.localeCompare(b.keSuperId);
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
export function ke_Super_SortFunDefa2Fld(a: clske_SuperEN, b: clske_SuperEN): number {
  if (a.keSuperNameCn == b.keSuperNameCn) return a.keSuperNameEn.localeCompare(b.keSuperNameEn);
  else return a.keSuperNameCn.localeCompare(b.keSuperNameCn);
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
export function ke_Super_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clske_SuperEN.con_KeSuperId:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          return a.keSuperId.localeCompare(b.keSuperId);
        };
      case clske_SuperEN.con_KeSuperNameCn:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          return a.keSuperNameCn.localeCompare(b.keSuperNameCn);
        };
      case clske_SuperEN.con_KeSuperNameEn:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          if (a.keSuperNameEn == null) return -1;
          if (b.keSuperNameEn == null) return 1;
          return a.keSuperNameEn.localeCompare(b.keSuperNameEn);
        };
      case clske_SuperEN.con_KeSuperDescribeCn:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          if (a.keSuperDescribeCn == null) return -1;
          if (b.keSuperDescribeCn == null) return 1;
          return a.keSuperDescribeCn.localeCompare(b.keSuperDescribeCn);
        };
      case clske_SuperEN.con_KeSuperDescribeEn:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          if (a.keSuperDescribeEn == null) return -1;
          if (b.keSuperDescribeEn == null) return 1;
          return a.keSuperDescribeEn.localeCompare(b.keSuperDescribeEn);
        };
      case clske_SuperEN.con_UpdDate:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clske_SuperEN.con_UpdUser:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clske_SuperEN.con_Memo:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ke_Super]中不存在!(in ${ke_Super_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clske_SuperEN.con_KeSuperId:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          return b.keSuperId.localeCompare(a.keSuperId);
        };
      case clske_SuperEN.con_KeSuperNameCn:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          return b.keSuperNameCn.localeCompare(a.keSuperNameCn);
        };
      case clske_SuperEN.con_KeSuperNameEn:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          if (b.keSuperNameEn == null) return -1;
          if (a.keSuperNameEn == null) return 1;
          return b.keSuperNameEn.localeCompare(a.keSuperNameEn);
        };
      case clske_SuperEN.con_KeSuperDescribeCn:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          if (b.keSuperDescribeCn == null) return -1;
          if (a.keSuperDescribeCn == null) return 1;
          return b.keSuperDescribeCn.localeCompare(a.keSuperDescribeCn);
        };
      case clske_SuperEN.con_KeSuperDescribeEn:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          if (b.keSuperDescribeEn == null) return -1;
          if (a.keSuperDescribeEn == null) return 1;
          return b.keSuperDescribeEn.localeCompare(a.keSuperDescribeEn);
        };
      case clske_SuperEN.con_UpdDate:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clske_SuperEN.con_UpdUser:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clske_SuperEN.con_Memo:
        return (a: clske_SuperEN, b: clske_SuperEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ke_Super]中不存在!(in ${ke_Super_ConstructorName}.${strThisFuncName})`;
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
export async function ke_Super_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clske_SuperEN.con_KeSuperId:
      return (obj: clske_SuperEN) => {
        return obj.keSuperId === value;
      };
    case clske_SuperEN.con_KeSuperNameCn:
      return (obj: clske_SuperEN) => {
        return obj.keSuperNameCn === value;
      };
    case clske_SuperEN.con_KeSuperNameEn:
      return (obj: clske_SuperEN) => {
        return obj.keSuperNameEn === value;
      };
    case clske_SuperEN.con_KeSuperDescribeCn:
      return (obj: clske_SuperEN) => {
        return obj.keSuperDescribeCn === value;
      };
    case clske_SuperEN.con_KeSuperDescribeEn:
      return (obj: clske_SuperEN) => {
        return obj.keSuperDescribeEn === value;
      };
    case clske_SuperEN.con_UpdDate:
      return (obj: clske_SuperEN) => {
        return obj.updDate === value;
      };
    case clske_SuperEN.con_UpdUser:
      return (obj: clske_SuperEN) => {
        return obj.updUser === value;
      };
    case clske_SuperEN.con_Memo:
      return (obj: clske_SuperEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ke_Super]中不存在!(in ${ke_Super_ConstructorName}.${strThisFuncName})`;
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
export async function ke_Super_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clske_SuperEN.con_KeSuperId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrke_Super = await ke_Super_GetObjLstCache();
  if (arrke_Super == null) return [];
  let arrke_SuperSel = arrke_Super;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrke_SuperSel = arrke_SuperSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrke_SuperSel = arrke_SuperSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrke_SuperSel = arrke_SuperSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrke_SuperSel.length == 0) return [];
  return arrke_SuperSel.map((x) => x.keSuperId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ke_Super_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
export async function ke_Super_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
export async function ke_Super_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clske_SuperEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

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
      const objke_Super = ke_Super_GetObjFromJsonObj(returnObj);
      return objke_Super;
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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
export async function ke_Super_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clske_SuperEN._CurrTabName;
  if (IsNullOrEmpty(clske_SuperEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clske_SuperEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrke_SuperExObjLstCache: Array<clske_SuperEN> = CacheHelper.Get(strKey);
    const arrke_SuperObjLstT = ke_Super_GetObjLstByJSONObjLst(arrke_SuperExObjLstCache);
    return arrke_SuperObjLstT;
  }
  try {
    const arrke_SuperExObjLst = await ke_Super_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrke_SuperExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrke_SuperExObjLst.length,
    );
    console.log(strInfo);
    return arrke_SuperExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      ke_Super_ConstructorName,
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
export async function ke_Super_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clske_SuperEN._CurrTabName;
  if (IsNullOrEmpty(clske_SuperEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clske_SuperEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrke_SuperExObjLstCache: Array<clske_SuperEN> = JSON.parse(strTempObjLst);
    const arrke_SuperObjLstT = ke_Super_GetObjLstByJSONObjLst(arrke_SuperExObjLstCache);
    return arrke_SuperObjLstT;
  }
  try {
    const arrke_SuperExObjLst = await ke_Super_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrke_SuperExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrke_SuperExObjLst.length,
    );
    console.log(strInfo);
    return arrke_SuperExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      ke_Super_ConstructorName,
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
export async function ke_Super_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clske_SuperEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrke_SuperObjLstCache: Array<clske_SuperEN> = JSON.parse(strTempObjLst);
    return arrke_SuperObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ke_Super_GetObjLstAsync(strWhereCond: string): Promise<Array<clske_SuperEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

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
          ke_Super_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ke_Super_GetObjLstByJSONObjLst(returnObjLst);
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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
export async function ke_Super_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clske_SuperEN._CurrTabName;
  if (IsNullOrEmpty(clske_SuperEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clske_SuperEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrke_SuperExObjLstCache: Array<clske_SuperEN> = JSON.parse(strTempObjLst);
    const arrke_SuperObjLstT = ke_Super_GetObjLstByJSONObjLst(arrke_SuperExObjLstCache);
    return arrke_SuperObjLstT;
  }
  try {
    const arrke_SuperExObjLst = await ke_Super_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrke_SuperExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrke_SuperExObjLst.length,
    );
    console.log(strInfo);
    return arrke_SuperExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      ke_Super_ConstructorName,
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
export async function ke_Super_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clske_SuperEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrke_SuperObjLstCache: Array<clske_SuperEN> = JSON.parse(strTempObjLst);
    return arrke_SuperObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ke_Super_GetObjLstCache(): Promise<Array<clske_SuperEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrke_SuperObjLstCache;
  switch (clske_SuperEN.CacheModeId) {
    case '04': //sessionStorage
      arrke_SuperObjLstCache = await ke_Super_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrke_SuperObjLstCache = await ke_Super_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrke_SuperObjLstCache = await ke_Super_GetObjLstClientCache();
      break;
    default:
      arrke_SuperObjLstCache = await ke_Super_GetObjLstClientCache();
      break;
  }
  return arrke_SuperObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ke_Super_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrke_SuperObjLstCache;
  switch (clske_SuperEN.CacheModeId) {
    case '04': //sessionStorage
      arrke_SuperObjLstCache = await ke_Super_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrke_SuperObjLstCache = await ke_Super_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrke_SuperObjLstCache = null;
      break;
    default:
      arrke_SuperObjLstCache = null;
      break;
  }
  return arrke_SuperObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrKeSuperIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ke_Super_GetSubObjLstCache(objke_SuperCond: clske_SuperEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrke_SuperObjLstCache = await ke_Super_GetObjLstCache();
  let arrke_SuperSel = arrke_SuperObjLstCache;
  if (objke_SuperCond.sfFldComparisonOp == null || objke_SuperCond.sfFldComparisonOp == '')
    return arrke_SuperSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objke_SuperCond.sfFldComparisonOp,
  );
  //console.log("clske_SuperWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objke_SuperCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objke_SuperCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrke_SuperSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objke_SuperCond),
      ke_Super_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clske_SuperEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrKeSuperId:关键字列表
 * @returns 对象列表
 **/
export async function ke_Super_GetObjLstByKeSuperIdLstAsync(
  arrKeSuperId: Array<string>,
): Promise<Array<clske_SuperEN>> {
  const strThisFuncName = 'GetObjLstByKeSuperIdLstAsync';
  const strAction = 'GetObjLstByKeSuperIdLst';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeSuperId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          ke_Super_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ke_Super_GetObjLstByJSONObjLst(returnObjLst);
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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
 * @param arrstrKeSuperIdLst:关键字列表
 * @returns 对象列表
 */
export async function ke_Super_GetObjLstByKeSuperIdLstCache(arrKeSuperIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByKeSuperIdLstCache';
  try {
    const arrke_SuperObjLstCache = await ke_Super_GetObjLstCache();
    const arrke_SuperSel = arrke_SuperObjLstCache.filter(
      (x) => arrKeSuperIdLst.indexOf(x.keSuperId) > -1,
    );
    return arrke_SuperSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrKeSuperIdLst.join(','),
      ke_Super_ConstructorName,
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
export async function ke_Super_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clske_SuperEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

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
          ke_Super_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ke_Super_GetObjLstByJSONObjLst(returnObjLst);
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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
export async function ke_Super_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clske_SuperEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

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
          ke_Super_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ke_Super_GetObjLstByJSONObjLst(returnObjLst);
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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
export async function ke_Super_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clske_SuperEN>();
  const arrke_SuperObjLstCache = await ke_Super_GetObjLstCache();
  if (arrke_SuperObjLstCache.length == 0) return arrke_SuperObjLstCache;
  let arrke_SuperSel = arrke_SuperObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objke_SuperCond = new clske_SuperEN();
  ObjectAssign(objke_SuperCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clske_SuperWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objke_SuperCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrke_SuperSel.length == 0) return arrke_SuperSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrke_SuperSel = arrke_SuperSel.sort(ke_Super_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrke_SuperSel = arrke_SuperSel.sort(objPagerPara.sortFun);
    }
    arrke_SuperSel = arrke_SuperSel.slice(intStart, intEnd);
    return arrke_SuperSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ke_Super_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clske_SuperEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ke_Super_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clske_SuperEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clske_SuperEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

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
          ke_Super_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ke_Super_GetObjLstByJSONObjLst(returnObjLst);
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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
 * @param strKeSuperId:关键字
 * @returns 获取删除的结果
 **/
export async function ke_Super_DelRecordAsync(strKeSuperId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(ke_Super_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strKeSuperId);

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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
 * @param arrKeSuperId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ke_Super_Delke_SupersAsync(arrKeSuperId: Array<string>): Promise<number> {
  const strThisFuncName = 'Delke_SupersAsync';
  const strAction = 'Delke_Supers';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeSuperId, config);
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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
export async function ke_Super_Delke_SupersByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'Delke_SupersByCondAsync';
  const strAction = 'Delke_SupersByCond';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
 * @param objke_SuperEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ke_Super_AddNewRecordAsync(objke_SuperEN: clske_SuperEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objke_SuperEN.keSuperId === null || objke_SuperEN.keSuperId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objke_SuperEN);
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objke_SuperEN, config);
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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
 * @param objke_SuperEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ke_Super_AddNewRecordWithMaxIdAsync(
  objke_SuperEN: clske_SuperEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objke_SuperEN, config);
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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
 * @param objke_SuperEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ke_Super_AddNewRecordWithReturnKeyAsync(
  objke_SuperEN: clske_SuperEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objke_SuperEN, config);
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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
 * @param objke_SuperEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ke_Super_UpdateRecordAsync(objke_SuperEN: clske_SuperEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objke_SuperEN.sfUpdFldSetStr === undefined ||
    objke_SuperEN.sfUpdFldSetStr === null ||
    objke_SuperEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objke_SuperEN.keSuperId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objke_SuperEN, config);
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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
 * @param objke_SuperEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ke_Super_UpdateWithConditionAsync(
  objke_SuperEN: clske_SuperEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objke_SuperEN.sfUpdFldSetStr === undefined ||
    objke_SuperEN.sfUpdFldSetStr === null ||
    objke_SuperEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objke_SuperEN.keSuperId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);
  objke_SuperEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objke_SuperEN, config);
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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
 * @param objstrKeSuperIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ke_Super_IsExistRecordCache(objke_SuperCond: clske_SuperEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrke_SuperObjLstCache = await ke_Super_GetObjLstCache();
  if (arrke_SuperObjLstCache == null) return false;
  let arrke_SuperSel = arrke_SuperObjLstCache;
  if (objke_SuperCond.sfFldComparisonOp == null || objke_SuperCond.sfFldComparisonOp == '')
    return arrke_SuperSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objke_SuperCond.sfFldComparisonOp,
  );
  //console.log("clske_SuperWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objke_SuperCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objke_SuperCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrke_SuperSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objke_SuperCond),
      ke_Super_ConstructorName,
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
export async function ke_Super_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
 * @param strKeSuperId:所给的关键字
 * @returns 对象
 */
export async function ke_Super_IsExistCache(strKeSuperId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrke_SuperObjLstCache = await ke_Super_GetObjLstCache();
  if (arrke_SuperObjLstCache == null) return false;
  try {
    const arrke_SuperSel = arrke_SuperObjLstCache.filter((x) => x.keSuperId == strKeSuperId);
    if (arrke_SuperSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strKeSuperId,
      ke_Super_ConstructorName,
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
 * @param strKeSuperId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ke_Super_IsExistAsync(strKeSuperId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strKeSuperId,
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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
export async function ke_Super_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
 * @param objke_SuperCond:条件对象
 * @returns 对象列表记录数
 */
export async function ke_Super_GetRecCountByCondCache(objke_SuperCond: clske_SuperEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrke_SuperObjLstCache = await ke_Super_GetObjLstCache();
  if (arrke_SuperObjLstCache == null) return 0;
  let arrke_SuperSel = arrke_SuperObjLstCache;
  if (objke_SuperCond.sfFldComparisonOp == null || objke_SuperCond.sfFldComparisonOp == '')
    return arrke_SuperSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objke_SuperCond.sfFldComparisonOp,
  );
  //console.log("clske_SuperWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objke_SuperCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objke_SuperCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrke_SuperSel = arrke_SuperSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrke_SuperSel = arrke_SuperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrke_SuperSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objke_SuperCond),
      ke_Super_ConstructorName,
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
export async function ke_Super_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(ke_Super_Controller, strAction);

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
        ke_Super_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ke_Super_ConstructorName,
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
export function ke_Super_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ke_Super_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clske_SuperEN._CurrTabName;
  switch (clske_SuperEN.CacheModeId) {
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
export function ke_Super_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clske_SuperEN._CurrTabName;
    switch (clske_SuperEN.CacheModeId) {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function ke_Super_BindDdl_ke_SuperIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ke_SuperIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ke_SuperIdInDivCache");
  const arrObjLstSel = await ke_Super_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clske_SuperEN.con_KeSuperId,
    clske_SuperEN.con_KeSuperNameCn,
    '知识经济父类',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ke_Super_CheckPropertyNew(pobjke_SuperEN: clske_SuperEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjke_SuperEN.keSuperNameCn) === true) {
    throw new Error(
      '(errid:Watl000411)字段[知识分类名]不能为空(In 知识经济父类)!(clske_SuperBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjke_SuperEN.keSuperId) == false && GetStrLen(pobjke_SuperEN.keSuperId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[知识分类Id(keSuperId)]的长度不能超过4(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.keSuperId)(clske_SuperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperNameCn) == false &&
    GetStrLen(pobjke_SuperEN.keSuperNameCn) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[知识分类名(keSuperNameCn)]的长度不能超过200(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.keSuperNameCn)(clske_SuperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperNameEn) == false &&
    GetStrLen(pobjke_SuperEN.keSuperNameEn) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[知识分类英文名(keSuperNameEn)]的长度不能超过200(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.keSuperNameEn)(clske_SuperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperDescribeCn) == false &&
    GetStrLen(pobjke_SuperEN.keSuperDescribeCn) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[知识分类描述(keSuperDescribeCn)]的长度不能超过500(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.keSuperDescribeCn)(clske_SuperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperDescribeEn) == false &&
    GetStrLen(pobjke_SuperEN.keSuperDescribeEn) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[知识分类英文描述(keSuperDescribeEn)]的长度不能超过500(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.keSuperDescribeEn)(clske_SuperBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjke_SuperEN.updDate) == false && GetStrLen(pobjke_SuperEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.updDate)(clske_SuperBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjke_SuperEN.updUser) == false && GetStrLen(pobjke_SuperEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.updUser)(clske_SuperBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjke_SuperEN.memo) == false && GetStrLen(pobjke_SuperEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.memo)(clske_SuperBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperId) == false &&
    undefined !== pobjke_SuperEN.keSuperId &&
    tzDataType.isString(pobjke_SuperEN.keSuperId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识分类Id(keSuperId)]的值:[$(pobjke_SuperEN.keSuperId)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperNameCn) == false &&
    undefined !== pobjke_SuperEN.keSuperNameCn &&
    tzDataType.isString(pobjke_SuperEN.keSuperNameCn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识分类名(keSuperNameCn)]的值:[$(pobjke_SuperEN.keSuperNameCn)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperNameEn) == false &&
    undefined !== pobjke_SuperEN.keSuperNameEn &&
    tzDataType.isString(pobjke_SuperEN.keSuperNameEn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识分类英文名(keSuperNameEn)]的值:[$(pobjke_SuperEN.keSuperNameEn)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperDescribeCn) == false &&
    undefined !== pobjke_SuperEN.keSuperDescribeCn &&
    tzDataType.isString(pobjke_SuperEN.keSuperDescribeCn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识分类描述(keSuperDescribeCn)]的值:[$(pobjke_SuperEN.keSuperDescribeCn)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperDescribeEn) == false &&
    undefined !== pobjke_SuperEN.keSuperDescribeEn &&
    tzDataType.isString(pobjke_SuperEN.keSuperDescribeEn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识分类英文描述(keSuperDescribeEn)]的值:[$(pobjke_SuperEN.keSuperDescribeEn)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.updDate) == false &&
    undefined !== pobjke_SuperEN.updDate &&
    tzDataType.isString(pobjke_SuperEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjke_SuperEN.updDate)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.updUser) == false &&
    undefined !== pobjke_SuperEN.updUser &&
    tzDataType.isString(pobjke_SuperEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjke_SuperEN.updUser)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.memo) == false &&
    undefined !== pobjke_SuperEN.memo &&
    tzDataType.isString(pobjke_SuperEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjke_SuperEN.memo)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ke_Super_CheckProperty4Update(pobjke_SuperEN: clske_SuperEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjke_SuperEN.keSuperId) == false && GetStrLen(pobjke_SuperEN.keSuperId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[知识分类Id(keSuperId)]的长度不能超过4(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.keSuperId)(clske_SuperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperNameCn) == false &&
    GetStrLen(pobjke_SuperEN.keSuperNameCn) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[知识分类名(keSuperNameCn)]的长度不能超过200(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.keSuperNameCn)(clske_SuperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperNameEn) == false &&
    GetStrLen(pobjke_SuperEN.keSuperNameEn) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[知识分类英文名(keSuperNameEn)]的长度不能超过200(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.keSuperNameEn)(clske_SuperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperDescribeCn) == false &&
    GetStrLen(pobjke_SuperEN.keSuperDescribeCn) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[知识分类描述(keSuperDescribeCn)]的长度不能超过500(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.keSuperDescribeCn)(clske_SuperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperDescribeEn) == false &&
    GetStrLen(pobjke_SuperEN.keSuperDescribeEn) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[知识分类英文描述(keSuperDescribeEn)]的长度不能超过500(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.keSuperDescribeEn)(clske_SuperBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjke_SuperEN.updDate) == false && GetStrLen(pobjke_SuperEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.updDate)(clske_SuperBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjke_SuperEN.updUser) == false && GetStrLen(pobjke_SuperEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.updUser)(clske_SuperBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjke_SuperEN.memo) == false && GetStrLen(pobjke_SuperEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识经济父类(ke_Super))!值:$(pobjke_SuperEN.memo)(clske_SuperBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperId) == false &&
    undefined !== pobjke_SuperEN.keSuperId &&
    tzDataType.isString(pobjke_SuperEN.keSuperId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识分类Id(keSuperId)]的值:[$(pobjke_SuperEN.keSuperId)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperNameCn) == false &&
    undefined !== pobjke_SuperEN.keSuperNameCn &&
    tzDataType.isString(pobjke_SuperEN.keSuperNameCn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识分类名(keSuperNameCn)]的值:[$(pobjke_SuperEN.keSuperNameCn)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperNameEn) == false &&
    undefined !== pobjke_SuperEN.keSuperNameEn &&
    tzDataType.isString(pobjke_SuperEN.keSuperNameEn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识分类英文名(keSuperNameEn)]的值:[$(pobjke_SuperEN.keSuperNameEn)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperDescribeCn) == false &&
    undefined !== pobjke_SuperEN.keSuperDescribeCn &&
    tzDataType.isString(pobjke_SuperEN.keSuperDescribeCn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识分类描述(keSuperDescribeCn)]的值:[$(pobjke_SuperEN.keSuperDescribeCn)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.keSuperDescribeEn) == false &&
    undefined !== pobjke_SuperEN.keSuperDescribeEn &&
    tzDataType.isString(pobjke_SuperEN.keSuperDescribeEn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识分类英文描述(keSuperDescribeEn)]的值:[$(pobjke_SuperEN.keSuperDescribeEn)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.updDate) == false &&
    undefined !== pobjke_SuperEN.updDate &&
    tzDataType.isString(pobjke_SuperEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjke_SuperEN.updDate)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.updUser) == false &&
    undefined !== pobjke_SuperEN.updUser &&
    tzDataType.isString(pobjke_SuperEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjke_SuperEN.updUser)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjke_SuperEN.memo) == false &&
    undefined !== pobjke_SuperEN.memo &&
    tzDataType.isString(pobjke_SuperEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjke_SuperEN.memo)], 非法,应该为字符型(In 知识经济父类(ke_Super))!(clske_SuperBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjke_SuperEN.keSuperId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[知识分类Id]不能为空(In 知识经济父类)!(clske_SuperBL:CheckProperty4Update)',
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
export function ke_Super_GetJSONStrByObj(pobjke_SuperEN: clske_SuperEN): string {
  pobjke_SuperEN.sfUpdFldSetStr = pobjke_SuperEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjke_SuperEN);
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
export function ke_Super_GetObjLstByJSONStr(strJSON: string): Array<clske_SuperEN> {
  let arrke_SuperObjLst = new Array<clske_SuperEN>();
  if (strJSON === '') {
    return arrke_SuperObjLst;
  }
  try {
    arrke_SuperObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrke_SuperObjLst;
  }
  return arrke_SuperObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrke_SuperObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ke_Super_GetObjLstByJSONObjLst(
  arrke_SuperObjLstS: Array<clske_SuperEN>,
): Array<clske_SuperEN> {
  const arrke_SuperObjLst = new Array<clske_SuperEN>();
  for (const objInFor of arrke_SuperObjLstS) {
    const obj1 = ke_Super_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrke_SuperObjLst.push(obj1);
  }
  return arrke_SuperObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ke_Super_GetObjByJSONStr(strJSON: string): clske_SuperEN {
  let pobjke_SuperEN = new clske_SuperEN();
  if (strJSON === '') {
    return pobjke_SuperEN;
  }
  try {
    pobjke_SuperEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjke_SuperEN;
  }
  return pobjke_SuperEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ke_Super_GetCombineCondition(objke_SuperCond: clske_SuperEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SuperCond.dicFldComparisonOp,
      clske_SuperEN.con_KeSuperId,
    ) == true
  ) {
    const strComparisonOpKeSuperId: string =
      objke_SuperCond.dicFldComparisonOp[clske_SuperEN.con_KeSuperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SuperEN.con_KeSuperId,
      objke_SuperCond.keSuperId,
      strComparisonOpKeSuperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SuperCond.dicFldComparisonOp,
      clske_SuperEN.con_KeSuperNameCn,
    ) == true
  ) {
    const strComparisonOpKeSuperNameCn: string =
      objke_SuperCond.dicFldComparisonOp[clske_SuperEN.con_KeSuperNameCn];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SuperEN.con_KeSuperNameCn,
      objke_SuperCond.keSuperNameCn,
      strComparisonOpKeSuperNameCn,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SuperCond.dicFldComparisonOp,
      clske_SuperEN.con_KeSuperNameEn,
    ) == true
  ) {
    const strComparisonOpKeSuperNameEn: string =
      objke_SuperCond.dicFldComparisonOp[clske_SuperEN.con_KeSuperNameEn];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SuperEN.con_KeSuperNameEn,
      objke_SuperCond.keSuperNameEn,
      strComparisonOpKeSuperNameEn,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SuperCond.dicFldComparisonOp,
      clske_SuperEN.con_KeSuperDescribeCn,
    ) == true
  ) {
    const strComparisonOpKeSuperDescribeCn: string =
      objke_SuperCond.dicFldComparisonOp[clske_SuperEN.con_KeSuperDescribeCn];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SuperEN.con_KeSuperDescribeCn,
      objke_SuperCond.keSuperDescribeCn,
      strComparisonOpKeSuperDescribeCn,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SuperCond.dicFldComparisonOp,
      clske_SuperEN.con_KeSuperDescribeEn,
    ) == true
  ) {
    const strComparisonOpKeSuperDescribeEn: string =
      objke_SuperCond.dicFldComparisonOp[clske_SuperEN.con_KeSuperDescribeEn];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SuperEN.con_KeSuperDescribeEn,
      objke_SuperCond.keSuperDescribeEn,
      strComparisonOpKeSuperDescribeEn,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SuperCond.dicFldComparisonOp,
      clske_SuperEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objke_SuperCond.dicFldComparisonOp[clske_SuperEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SuperEN.con_UpdDate,
      objke_SuperCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SuperCond.dicFldComparisonOp,
      clske_SuperEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objke_SuperCond.dicFldComparisonOp[clske_SuperEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SuperEN.con_UpdUser,
      objke_SuperCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objke_SuperCond.dicFldComparisonOp,
      clske_SuperEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objke_SuperCond.dicFldComparisonOp[clske_SuperEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clske_SuperEN.con_Memo,
      objke_SuperCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objke_SuperENS:源对象
 * @param objke_SuperENT:目标对象
 */
export function ke_Super_CopyObjTo(
  objke_SuperENS: clske_SuperEN,
  objke_SuperENT: clske_SuperEN,
): void {
  objke_SuperENT.keSuperId = objke_SuperENS.keSuperId; //知识分类Id
  objke_SuperENT.keSuperNameCn = objke_SuperENS.keSuperNameCn; //知识分类名
  objke_SuperENT.keSuperNameEn = objke_SuperENS.keSuperNameEn; //知识分类英文名
  objke_SuperENT.keSuperDescribeCn = objke_SuperENS.keSuperDescribeCn; //知识分类描述
  objke_SuperENT.keSuperDescribeEn = objke_SuperENS.keSuperDescribeEn; //知识分类英文描述
  objke_SuperENT.updDate = objke_SuperENS.updDate; //修改日期
  objke_SuperENT.updUser = objke_SuperENS.updUser; //修改人
  objke_SuperENT.memo = objke_SuperENS.memo; //备注
  objke_SuperENT.sfUpdFldSetStr = objke_SuperENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objke_SuperENS:源对象
 * @param objke_SuperENT:目标对象
 */
export function ke_Super_GetObjFromJsonObj(objke_SuperENS: clske_SuperEN): clske_SuperEN {
  const objke_SuperENT: clske_SuperEN = new clske_SuperEN();
  ObjectAssign(objke_SuperENT, objke_SuperENS);
  return objke_SuperENT;
}
