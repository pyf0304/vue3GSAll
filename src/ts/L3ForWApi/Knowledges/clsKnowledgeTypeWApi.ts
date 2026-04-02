/**
 * 类名:clsKnowledgeTypeWApi
 * 表名:KnowledgeType(01120890)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:45:29
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识点类型(KnowledgeType)
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
import { clsKnowledgeTypeEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const knowledgeType_Controller = 'KnowledgeTypeApi';
export const knowledgeType_ConstructorName = 'knowledgeType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKnowledgeTypeId:关键字
 * @returns 对象
 **/
export async function KnowledgeType_GetObjByKnowledgeTypeIdAsync(
  strKnowledgeTypeId: string,
): Promise<clsKnowledgeTypeEN | null> {
  const strThisFuncName = 'GetObjByKnowledgeTypeIdAsync';

  if (IsNullOrEmpty(strKnowledgeTypeId) == true) {
    const strMsg = Format(
      '参数:[strKnowledgeTypeId]不能为空!(In clsKnowledgeTypeWApi.GetObjByKnowledgeTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKnowledgeTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKnowledgeTypeId]的长度:[{0}]不正确!(clsKnowledgeTypeWApi.GetObjByKnowledgeTypeIdAsync)',
      strKnowledgeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKnowledgeTypeId';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strKnowledgeTypeId,
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
      const objKnowledgeType = KnowledgeType_GetObjFromJsonObj(returnObj);
      return objKnowledgeType;
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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
 * @param strKnowledgeTypeId:所给的关键字
 * @returns 对象
 */
export async function KnowledgeType_GetObjByKnowledgeTypeIdCache(
  strKnowledgeTypeId: string,
  strCourseId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByKnowledgeTypeIdCache';

  if (IsNullOrEmpty(strKnowledgeTypeId) == true) {
    const strMsg = Format(
      '参数:[strKnowledgeTypeId]不能为空!(In clsKnowledgeTypeWApi.GetObjByKnowledgeTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKnowledgeTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKnowledgeTypeId]的长度:[{0}]不正确!(clsKnowledgeTypeWApi.GetObjByKnowledgeTypeIdCache)',
      strKnowledgeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstCache(strCourseId);
  try {
    const arrKnowledgeTypeSel = arrKnowledgeTypeObjLstCache.filter(
      (x) => x.knowledgeTypeId == strKnowledgeTypeId,
    );
    let objKnowledgeType: clsKnowledgeTypeEN;
    if (arrKnowledgeTypeSel.length > 0) {
      objKnowledgeType = arrKnowledgeTypeSel[0];
      return objKnowledgeType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objKnowledgeTypeConst = await KnowledgeType_GetObjByKnowledgeTypeIdAsync(
          strKnowledgeTypeId,
        );
        if (objKnowledgeTypeConst != null) {
          KnowledgeType_ReFreshThisCache(strCourseId);
          return objKnowledgeTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strKnowledgeTypeId,
      knowledgeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strKnowledgeTypeId:所给的关键字
 * @returns 对象
 */
export async function KnowledgeType_GetObjByKnowledgeTypeIdlocalStorage(
  strKnowledgeTypeId: string,
) {
  const strThisFuncName = 'GetObjByKnowledgeTypeIdlocalStorage';

  if (IsNullOrEmpty(strKnowledgeTypeId) == true) {
    const strMsg = Format(
      '参数:[strKnowledgeTypeId]不能为空!(In clsKnowledgeTypeWApi.GetObjByKnowledgeTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKnowledgeTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKnowledgeTypeId]的长度:[{0}]不正确!(clsKnowledgeTypeWApi.GetObjByKnowledgeTypeIdlocalStorage)',
      strKnowledgeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsKnowledgeTypeEN._CurrTabName, strKnowledgeTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objKnowledgeTypeCache: clsKnowledgeTypeEN = JSON.parse(strTempObj);
    return objKnowledgeTypeCache;
  }
  try {
    const objKnowledgeType = await KnowledgeType_GetObjByKnowledgeTypeIdAsync(strKnowledgeTypeId);
    if (objKnowledgeType != null) {
      localStorage.setItem(strKey, JSON.stringify(objKnowledgeType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objKnowledgeType;
    }
    return objKnowledgeType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strKnowledgeTypeId,
      knowledgeType_ConstructorName,
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
 * @param objKnowledgeType:所给的对象
 * @returns 对象
 */
export async function KnowledgeType_UpdateObjInLstCache(
  objKnowledgeType: clsKnowledgeTypeEN,
  strCourseId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstCache(strCourseId);
    const obj = arrKnowledgeTypeObjLstCache.find(
      (x) => x.knowledgeTypeName == objKnowledgeType.knowledgeTypeName,
    );
    if (obj != null) {
      objKnowledgeType.knowledgeTypeId = obj.knowledgeTypeId;
      ObjectAssign(obj, objKnowledgeType);
    } else {
      arrKnowledgeTypeObjLstCache.push(objKnowledgeType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      knowledgeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strKnowledgeTypeId:所给的关键字
 * @returns 对象
 */
export async function KnowledgeType_GetNameByKnowledgeTypeIdCache(
  strKnowledgeTypeId: string,
  strCourseId: string,
) {
  if (IsNullOrEmpty(strKnowledgeTypeId) == true) {
    const strMsg = Format(
      '参数:[strKnowledgeTypeId]不能为空!(In clsKnowledgeTypeWApi.GetNameByKnowledgeTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKnowledgeTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKnowledgeTypeId]的长度:[{0}]不正确!(clsKnowledgeTypeWApi.GetNameByKnowledgeTypeIdCache)',
      strKnowledgeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstCache(strCourseId);
  if (arrKnowledgeTypeObjLstCache == null) return '';
  try {
    const arrKnowledgeTypeSel = arrKnowledgeTypeObjLstCache.filter(
      (x) => x.knowledgeTypeId == strKnowledgeTypeId,
    );
    let objKnowledgeType: clsKnowledgeTypeEN;
    if (arrKnowledgeTypeSel.length > 0) {
      objKnowledgeType = arrKnowledgeTypeSel[0];
      return objKnowledgeType.knowledgeTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strKnowledgeTypeId,
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
 @param strCourseId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function KnowledgeType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strCourseIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCourseIdClassfy) == true) {
    const strMsg = Format('参数:[strCourseIdClassfy]不能为空!(In clsKnowledgeTypeWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsKnowledgeTypeWApi.func)',
      strCourseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsKnowledgeTypeEN.con_KnowledgeTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsKnowledgeTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsKnowledgeTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strKnowledgeTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objKnowledgeType = await KnowledgeType_GetObjByKnowledgeTypeIdCache(
    strKnowledgeTypeId,
    strCourseIdClassfy,
  );
  if (objKnowledgeType == null) return '';
  if (objKnowledgeType.GetFldValue(strOutFldName) == null) return '';
  return objKnowledgeType.GetFldValue(strOutFldName).toString();
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
export function KnowledgeType_SortFunDefa(a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN): number {
  return a.knowledgeTypeId.localeCompare(b.knowledgeTypeId);
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
export function KnowledgeType_SortFunDefa2Fld(
  a: clsKnowledgeTypeEN,
  b: clsKnowledgeTypeEN,
): number {
  if (a.knowledgeTypeName == b.knowledgeTypeName) return a.courseId.localeCompare(b.courseId);
  else return a.knowledgeTypeName.localeCompare(b.knowledgeTypeName);
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
export function KnowledgeType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsKnowledgeTypeEN.con_KnowledgeTypeId:
        return (a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN) => {
          return a.knowledgeTypeId.localeCompare(b.knowledgeTypeId);
        };
      case clsKnowledgeTypeEN.con_KnowledgeTypeName:
        return (a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN) => {
          return a.knowledgeTypeName.localeCompare(b.knowledgeTypeName);
        };
      case clsKnowledgeTypeEN.con_CourseId:
        return (a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN) => {
          return a.courseId.localeCompare(b.courseId);
        };
      case clsKnowledgeTypeEN.con_OrderNum:
        return (a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsKnowledgeTypeEN.con_UpdDate:
        return (a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsKnowledgeTypeEN.con_UpdUser:
        return (a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsKnowledgeTypeEN.con_Memo:
        return (a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[KnowledgeType]中不存在!(in ${knowledgeType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsKnowledgeTypeEN.con_KnowledgeTypeId:
        return (a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN) => {
          return b.knowledgeTypeId.localeCompare(a.knowledgeTypeId);
        };
      case clsKnowledgeTypeEN.con_KnowledgeTypeName:
        return (a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN) => {
          return b.knowledgeTypeName.localeCompare(a.knowledgeTypeName);
        };
      case clsKnowledgeTypeEN.con_CourseId:
        return (a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN) => {
          return b.courseId.localeCompare(a.courseId);
        };
      case clsKnowledgeTypeEN.con_OrderNum:
        return (a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsKnowledgeTypeEN.con_UpdDate:
        return (a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsKnowledgeTypeEN.con_UpdUser:
        return (a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsKnowledgeTypeEN.con_Memo:
        return (a: clsKnowledgeTypeEN, b: clsKnowledgeTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[KnowledgeType]中不存在!(in ${knowledgeType_ConstructorName}.${strThisFuncName})`;
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
export async function KnowledgeType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsKnowledgeTypeEN.con_KnowledgeTypeId:
      return (obj: clsKnowledgeTypeEN) => {
        return obj.knowledgeTypeId === value;
      };
    case clsKnowledgeTypeEN.con_KnowledgeTypeName:
      return (obj: clsKnowledgeTypeEN) => {
        return obj.knowledgeTypeName === value;
      };
    case clsKnowledgeTypeEN.con_CourseId:
      return (obj: clsKnowledgeTypeEN) => {
        return obj.courseId === value;
      };
    case clsKnowledgeTypeEN.con_OrderNum:
      return (obj: clsKnowledgeTypeEN) => {
        return obj.orderNum === value;
      };
    case clsKnowledgeTypeEN.con_UpdDate:
      return (obj: clsKnowledgeTypeEN) => {
        return obj.updDate === value;
      };
    case clsKnowledgeTypeEN.con_UpdUser:
      return (obj: clsKnowledgeTypeEN) => {
        return obj.updUser === value;
      };
    case clsKnowledgeTypeEN.con_Memo:
      return (obj: clsKnowledgeTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[KnowledgeType]中不存在!(in ${knowledgeType_ConstructorName}.${strThisFuncName})`;
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
 @param strCourseId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function KnowledgeType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCourseIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCourseIdClassfy) == true) {
    const strMsg = Format('参数:[strCourseIdClassfy]不能为空!(In clsKnowledgeTypeWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsKnowledgeTypeWApi.funcKey)',
      strCourseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsKnowledgeTypeEN.con_KnowledgeTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrKnowledgeType = await KnowledgeType_GetObjLstCache(strCourseIdClassfy);
  if (arrKnowledgeType == null) return [];
  let arrKnowledgeTypeSel = arrKnowledgeType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrKnowledgeTypeSel.length == 0) return [];
  return arrKnowledgeTypeSel.map((x) => x.knowledgeTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function KnowledgeType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
export async function KnowledgeType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
export async function KnowledgeType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsKnowledgeTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

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
      const objKnowledgeType = KnowledgeType_GetObjFromJsonObj(returnObj);
      return objKnowledgeType;
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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
export async function KnowledgeType_GetObjLstClientCache(strCourseId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsKnowledgeTypeEN.WhereFormat) == false) {
    strWhereCond = Format(clsKnowledgeTypeEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("CourseId='{0}'", strCourseId);
  }
  const strKey = Format('{0}_{1}', clsKnowledgeTypeEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsKnowledgeTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsKnowledgeTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrKnowledgeTypeExObjLstCache: Array<clsKnowledgeTypeEN> = CacheHelper.Get(strKey);
    const arrKnowledgeTypeObjLstT = KnowledgeType_GetObjLstByJSONObjLst(
      arrKnowledgeTypeExObjLstCache,
    );
    return arrKnowledgeTypeObjLstT;
  }
  try {
    const arrKnowledgeTypeExObjLst = await KnowledgeType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrKnowledgeTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrKnowledgeTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrKnowledgeTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      knowledgeType_ConstructorName,
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
export async function KnowledgeType_GetObjLstlocalStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsKnowledgeTypeEN.WhereFormat) == false) {
    strWhereCond = Format(clsKnowledgeTypeEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsKnowledgeTypeEN.con_CourseId, strCourseId);
  }
  const strKey = Format('{0}_{1}', clsKnowledgeTypeEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsKnowledgeTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsKnowledgeTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrKnowledgeTypeExObjLstCache: Array<clsKnowledgeTypeEN> = JSON.parse(strTempObjLst);
    const arrKnowledgeTypeObjLstT = KnowledgeType_GetObjLstByJSONObjLst(
      arrKnowledgeTypeExObjLstCache,
    );
    return arrKnowledgeTypeObjLstT;
  }
  try {
    const arrKnowledgeTypeExObjLst = await KnowledgeType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrKnowledgeTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrKnowledgeTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrKnowledgeTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      knowledgeType_ConstructorName,
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
export async function KnowledgeType_GetObjLstlocalStoragePureCache(strCourseId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsKnowledgeTypeEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrKnowledgeTypeObjLstCache: Array<clsKnowledgeTypeEN> = JSON.parse(strTempObjLst);
    return arrKnowledgeTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function KnowledgeType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsKnowledgeTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

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
          knowledgeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = KnowledgeType_GetObjLstByJSONObjLst(returnObjLst);
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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
export async function KnowledgeType_GetObjLstsessionStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsKnowledgeTypeEN.WhereFormat) == false) {
    strWhereCond = Format(clsKnowledgeTypeEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsKnowledgeTypeEN.con_CourseId, strCourseId);
  }
  const strKey = Format('{0}_{1}', clsKnowledgeTypeEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsKnowledgeTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsKnowledgeTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrKnowledgeTypeExObjLstCache: Array<clsKnowledgeTypeEN> = JSON.parse(strTempObjLst);
    const arrKnowledgeTypeObjLstT = KnowledgeType_GetObjLstByJSONObjLst(
      arrKnowledgeTypeExObjLstCache,
    );
    return arrKnowledgeTypeObjLstT;
  }
  try {
    const arrKnowledgeTypeExObjLst = await KnowledgeType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrKnowledgeTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrKnowledgeTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrKnowledgeTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      knowledgeType_ConstructorName,
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
export async function KnowledgeType_GetObjLstsessionStoragePureCache(strCourseId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsKnowledgeTypeEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrKnowledgeTypeObjLstCache: Array<clsKnowledgeTypeEN> = JSON.parse(strTempObjLst);
    return arrKnowledgeTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function KnowledgeType_GetObjLstCache(
  strCourseId: string,
): Promise<Array<clsKnowledgeTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clsKnowledgeTypeWApi.KnowledgeType_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsKnowledgeTypeWApi.KnowledgeType_GetObjLstCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrKnowledgeTypeObjLstCache;
  switch (clsKnowledgeTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstsessionStorage(strCourseId);
      break;
    case '03': //localStorage
      arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstlocalStorage(strCourseId);
      break;
    case '02': //ClientCache
      arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstClientCache(strCourseId);
      break;
    default:
      arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstClientCache(strCourseId);
      break;
  }
  return arrKnowledgeTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function KnowledgeType_GetObjLstPureCache(strCourseId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrKnowledgeTypeObjLstCache;
  switch (clsKnowledgeTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstsessionStoragePureCache(
        strCourseId,
      );
      break;
    case '03': //localStorage
      arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstlocalStoragePureCache(strCourseId);
      break;
    case '02': //ClientCache
      arrKnowledgeTypeObjLstCache = null;
      break;
    default:
      arrKnowledgeTypeObjLstCache = null;
      break;
  }
  return arrKnowledgeTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrKnowledgeTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function KnowledgeType_GetSubObjLstCache(
  objKnowledgeTypeCond: clsKnowledgeTypeEN,
  strCourseId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstCache(strCourseId);
  let arrKnowledgeTypeSel = arrKnowledgeTypeObjLstCache;
  if (
    objKnowledgeTypeCond.sfFldComparisonOp == null ||
    objKnowledgeTypeCond.sfFldComparisonOp == ''
  )
    return arrKnowledgeTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objKnowledgeTypeCond.sfFldComparisonOp,
  );
  //console.log("clsKnowledgeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objKnowledgeTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objKnowledgeTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrKnowledgeTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objKnowledgeTypeCond),
      knowledgeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsKnowledgeTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrKnowledgeTypeId:关键字列表
 * @returns 对象列表
 **/
export async function KnowledgeType_GetObjLstByKnowledgeTypeIdLstAsync(
  arrKnowledgeTypeId: Array<string>,
): Promise<Array<clsKnowledgeTypeEN>> {
  const strThisFuncName = 'GetObjLstByKnowledgeTypeIdLstAsync';
  const strAction = 'GetObjLstByKnowledgeTypeIdLst';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKnowledgeTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          knowledgeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = KnowledgeType_GetObjLstByJSONObjLst(returnObjLst);
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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
 * @param arrstrKnowledgeTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function KnowledgeType_GetObjLstByKnowledgeTypeIdLstCache(
  arrKnowledgeTypeIdLst: Array<string>,
  strCourseId: string,
) {
  const strThisFuncName = 'GetObjLstByKnowledgeTypeIdLstCache';
  try {
    const arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstCache(strCourseId);
    const arrKnowledgeTypeSel = arrKnowledgeTypeObjLstCache.filter(
      (x) => arrKnowledgeTypeIdLst.indexOf(x.knowledgeTypeId) > -1,
    );
    return arrKnowledgeTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrKnowledgeTypeIdLst.join(','),
      knowledgeType_ConstructorName,
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
export async function KnowledgeType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsKnowledgeTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

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
          knowledgeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = KnowledgeType_GetObjLstByJSONObjLst(returnObjLst);
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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
export async function KnowledgeType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsKnowledgeTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

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
          knowledgeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = KnowledgeType_GetObjLstByJSONObjLst(returnObjLst);
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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
export async function KnowledgeType_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsKnowledgeTypeEN>();
  const arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstCache(strCourseId);
  if (arrKnowledgeTypeObjLstCache.length == 0) return arrKnowledgeTypeObjLstCache;
  let arrKnowledgeTypeSel = arrKnowledgeTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objKnowledgeTypeCond = new clsKnowledgeTypeEN();
  ObjectAssign(objKnowledgeTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsKnowledgeTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objKnowledgeTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrKnowledgeTypeSel.length == 0) return arrKnowledgeTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrKnowledgeTypeSel = arrKnowledgeTypeSel.sort(
        KnowledgeType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrKnowledgeTypeSel = arrKnowledgeTypeSel.sort(objPagerPara.sortFun);
    }
    arrKnowledgeTypeSel = arrKnowledgeTypeSel.slice(intStart, intEnd);
    return arrKnowledgeTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      knowledgeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsKnowledgeTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function KnowledgeType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsKnowledgeTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsKnowledgeTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

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
          knowledgeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = KnowledgeType_GetObjLstByJSONObjLst(returnObjLst);
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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
 * @param strKnowledgeTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function KnowledgeType_DelRecordAsync(strKnowledgeTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strKnowledgeTypeId);

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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
 * @param arrKnowledgeTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function KnowledgeType_DelKnowledgeTypesAsync(
  arrKnowledgeTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelKnowledgeTypesAsync';
  const strAction = 'DelKnowledgeTypes';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKnowledgeTypeId, config);
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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
export async function KnowledgeType_DelKnowledgeTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelKnowledgeTypesByCondAsync';
  const strAction = 'DelKnowledgeTypesByCond';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
 * @param objKnowledgeTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function KnowledgeType_AddNewRecordAsync(
  objKnowledgeTypeEN: clsKnowledgeTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objKnowledgeTypeEN);
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objKnowledgeTypeEN, config);
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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
 * @param objKnowledgeTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function KnowledgeType_AddNewRecordWithMaxIdAsync(
  objKnowledgeTypeEN: clsKnowledgeTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objKnowledgeTypeEN, config);
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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
 * @param objKnowledgeTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function KnowledgeType_AddNewRecordWithReturnKeyAsync(
  objKnowledgeTypeEN: clsKnowledgeTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objKnowledgeTypeEN, config);
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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
 * @param objKnowledgeTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function KnowledgeType_UpdateRecordAsync(
  objKnowledgeTypeEN: clsKnowledgeTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objKnowledgeTypeEN.sfUpdFldSetStr === undefined ||
    objKnowledgeTypeEN.sfUpdFldSetStr === null ||
    objKnowledgeTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objKnowledgeTypeEN.knowledgeTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objKnowledgeTypeEN, config);
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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
 * @param objKnowledgeTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function KnowledgeType_UpdateWithConditionAsync(
  objKnowledgeTypeEN: clsKnowledgeTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objKnowledgeTypeEN.sfUpdFldSetStr === undefined ||
    objKnowledgeTypeEN.sfUpdFldSetStr === null ||
    objKnowledgeTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objKnowledgeTypeEN.knowledgeTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);
  objKnowledgeTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objKnowledgeTypeEN, config);
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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
 * @param objstrKnowledgeTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function KnowledgeType_IsExistRecordCache(
  objKnowledgeTypeCond: clsKnowledgeTypeEN,
  strCourseId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstCache(strCourseId);
  if (arrKnowledgeTypeObjLstCache == null) return false;
  let arrKnowledgeTypeSel = arrKnowledgeTypeObjLstCache;
  if (
    objKnowledgeTypeCond.sfFldComparisonOp == null ||
    objKnowledgeTypeCond.sfFldComparisonOp == ''
  )
    return arrKnowledgeTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objKnowledgeTypeCond.sfFldComparisonOp,
  );
  //console.log("clsKnowledgeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objKnowledgeTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objKnowledgeTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrKnowledgeTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objKnowledgeTypeCond),
      knowledgeType_ConstructorName,
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
export async function KnowledgeType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
 * @param strKnowledgeTypeId:所给的关键字
 * @returns 对象
 */
export async function KnowledgeType_IsExistCache(strKnowledgeTypeId: string, strCourseId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstCache(strCourseId);
  if (arrKnowledgeTypeObjLstCache == null) return false;
  try {
    const arrKnowledgeTypeSel = arrKnowledgeTypeObjLstCache.filter(
      (x) => x.knowledgeTypeId == strKnowledgeTypeId,
    );
    if (arrKnowledgeTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strKnowledgeTypeId,
      knowledgeType_ConstructorName,
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
 * @param strKnowledgeTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function KnowledgeType_IsExistAsync(strKnowledgeTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strKnowledgeTypeId,
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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
export async function KnowledgeType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
 * @param objKnowledgeTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function KnowledgeType_GetRecCountByCondCache(
  objKnowledgeTypeCond: clsKnowledgeTypeEN,
  strCourseId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrKnowledgeTypeObjLstCache = await KnowledgeType_GetObjLstCache(strCourseId);
  if (arrKnowledgeTypeObjLstCache == null) return 0;
  let arrKnowledgeTypeSel = arrKnowledgeTypeObjLstCache;
  if (
    objKnowledgeTypeCond.sfFldComparisonOp == null ||
    objKnowledgeTypeCond.sfFldComparisonOp == ''
  )
    return arrKnowledgeTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objKnowledgeTypeCond.sfFldComparisonOp,
  );
  //console.log("clsKnowledgeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objKnowledgeTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objKnowledgeTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrKnowledgeTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objKnowledgeTypeCond),
      knowledgeType_ConstructorName,
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
export async function KnowledgeType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
export async function KnowledgeType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(knowledgeType_Controller, strAction);

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
        knowledgeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        knowledgeType_ConstructorName,
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
export function KnowledgeType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function KnowledgeType_ReFreshCache(strCourseId: string): void {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空!(In clsKnowledgeTypeWApi.clsKnowledgeTypeWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsKnowledgeTypeWApi.clsKnowledgeTypeWApi.ReFreshCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsKnowledgeTypeEN._CurrTabName, strCourseId);
  switch (clsKnowledgeTypeEN.CacheModeId) {
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
export function KnowledgeType_ReFreshThisCache(strCourseId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsKnowledgeTypeEN._CurrTabName, strCourseId);
    switch (clsKnowledgeTypeEN.CacheModeId) {
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

 * @param strCourseId:
*/
export async function KnowledgeType_BindDdl_KnowledgeTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strCourseId: string,
) {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clsKnowledgeTypeWApi.BindDdl_KnowledgeTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsKnowledgeTypeWApi.BindDdl_KnowledgeTypeIdInDiv)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_KnowledgeTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_KnowledgeTypeIdInDivCache");
  const arrObjLstSel = await KnowledgeType_GetObjLstCache(strCourseId);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsKnowledgeTypeEN.con_KnowledgeTypeId,
    clsKnowledgeTypeEN.con_KnowledgeTypeName,
    '知识点类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function KnowledgeType_CheckPropertyNew(pobjKnowledgeTypeEN: clsKnowledgeTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjKnowledgeTypeEN.knowledgeTypeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[知识点类型名]不能为空(In 知识点类型)!(clsKnowledgeTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.courseId) === true ||
    pobjKnowledgeTypeEN.courseId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[课程Id]不能为空(In 知识点类型)!(clsKnowledgeTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.knowledgeTypeId) == false &&
    GetStrLen(pobjKnowledgeTypeEN.knowledgeTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[知识点类型Id(knowledgeTypeId)]的长度不能超过4(In 知识点类型(KnowledgeType))!值:$(pobjKnowledgeTypeEN.knowledgeTypeId)(clsKnowledgeTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.knowledgeTypeName) == false &&
    GetStrLen(pobjKnowledgeTypeEN.knowledgeTypeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[知识点类型名(knowledgeTypeName)]的长度不能超过50(In 知识点类型(KnowledgeType))!值:$(pobjKnowledgeTypeEN.knowledgeTypeName)(clsKnowledgeTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.courseId) == false &&
    GetStrLen(pobjKnowledgeTypeEN.courseId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 知识点类型(KnowledgeType))!值:$(pobjKnowledgeTypeEN.courseId)(clsKnowledgeTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.updDate) == false &&
    GetStrLen(pobjKnowledgeTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点类型(KnowledgeType))!值:$(pobjKnowledgeTypeEN.updDate)(clsKnowledgeTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.updUser) == false &&
    GetStrLen(pobjKnowledgeTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点类型(KnowledgeType))!值:$(pobjKnowledgeTypeEN.updUser)(clsKnowledgeTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.memo) == false &&
    GetStrLen(pobjKnowledgeTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点类型(KnowledgeType))!值:$(pobjKnowledgeTypeEN.memo)(clsKnowledgeTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.knowledgeTypeId) == false &&
    undefined !== pobjKnowledgeTypeEN.knowledgeTypeId &&
    tzDataType.isString(pobjKnowledgeTypeEN.knowledgeTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识点类型Id(knowledgeTypeId)]的值:[$(pobjKnowledgeTypeEN.knowledgeTypeId)], 非法,应该为字符型(In 知识点类型(KnowledgeType))!(clsKnowledgeTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.knowledgeTypeName) == false &&
    undefined !== pobjKnowledgeTypeEN.knowledgeTypeName &&
    tzDataType.isString(pobjKnowledgeTypeEN.knowledgeTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识点类型名(knowledgeTypeName)]的值:[$(pobjKnowledgeTypeEN.knowledgeTypeName)], 非法,应该为字符型(In 知识点类型(KnowledgeType))!(clsKnowledgeTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.courseId) == false &&
    undefined !== pobjKnowledgeTypeEN.courseId &&
    tzDataType.isString(pobjKnowledgeTypeEN.courseId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程Id(courseId)]的值:[$(pobjKnowledgeTypeEN.courseId)], 非法,应该为字符型(In 知识点类型(KnowledgeType))!(clsKnowledgeTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjKnowledgeTypeEN.orderNum &&
    undefined !== pobjKnowledgeTypeEN.orderNum &&
    tzDataType.isNumber(pobjKnowledgeTypeEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjKnowledgeTypeEN.orderNum)], 非法,应该为数值型(In 知识点类型(KnowledgeType))!(clsKnowledgeTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.updDate) == false &&
    undefined !== pobjKnowledgeTypeEN.updDate &&
    tzDataType.isString(pobjKnowledgeTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjKnowledgeTypeEN.updDate)], 非法,应该为字符型(In 知识点类型(KnowledgeType))!(clsKnowledgeTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.updUser) == false &&
    undefined !== pobjKnowledgeTypeEN.updUser &&
    tzDataType.isString(pobjKnowledgeTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjKnowledgeTypeEN.updUser)], 非法,应该为字符型(In 知识点类型(KnowledgeType))!(clsKnowledgeTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.memo) == false &&
    undefined !== pobjKnowledgeTypeEN.memo &&
    tzDataType.isString(pobjKnowledgeTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjKnowledgeTypeEN.memo)], 非法,应该为字符型(In 知识点类型(KnowledgeType))!(clsKnowledgeTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.courseId) == false &&
    pobjKnowledgeTypeEN.courseId != '[nuull]' &&
    GetStrLen(pobjKnowledgeTypeEN.courseId) != 8
  ) {
    throw '(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 知识点类型)!(clsKnowledgeTypeBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function KnowledgeType_CheckProperty4Update(pobjKnowledgeTypeEN: clsKnowledgeTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.knowledgeTypeId) == false &&
    GetStrLen(pobjKnowledgeTypeEN.knowledgeTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[知识点类型Id(knowledgeTypeId)]的长度不能超过4(In 知识点类型(KnowledgeType))!值:$(pobjKnowledgeTypeEN.knowledgeTypeId)(clsKnowledgeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.knowledgeTypeName) == false &&
    GetStrLen(pobjKnowledgeTypeEN.knowledgeTypeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[知识点类型名(knowledgeTypeName)]的长度不能超过50(In 知识点类型(KnowledgeType))!值:$(pobjKnowledgeTypeEN.knowledgeTypeName)(clsKnowledgeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.courseId) == false &&
    GetStrLen(pobjKnowledgeTypeEN.courseId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 知识点类型(KnowledgeType))!值:$(pobjKnowledgeTypeEN.courseId)(clsKnowledgeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.updDate) == false &&
    GetStrLen(pobjKnowledgeTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点类型(KnowledgeType))!值:$(pobjKnowledgeTypeEN.updDate)(clsKnowledgeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.updUser) == false &&
    GetStrLen(pobjKnowledgeTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点类型(KnowledgeType))!值:$(pobjKnowledgeTypeEN.updUser)(clsKnowledgeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.memo) == false &&
    GetStrLen(pobjKnowledgeTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点类型(KnowledgeType))!值:$(pobjKnowledgeTypeEN.memo)(clsKnowledgeTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.knowledgeTypeId) == false &&
    undefined !== pobjKnowledgeTypeEN.knowledgeTypeId &&
    tzDataType.isString(pobjKnowledgeTypeEN.knowledgeTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识点类型Id(knowledgeTypeId)]的值:[$(pobjKnowledgeTypeEN.knowledgeTypeId)], 非法,应该为字符型(In 知识点类型(KnowledgeType))!(clsKnowledgeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.knowledgeTypeName) == false &&
    undefined !== pobjKnowledgeTypeEN.knowledgeTypeName &&
    tzDataType.isString(pobjKnowledgeTypeEN.knowledgeTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识点类型名(knowledgeTypeName)]的值:[$(pobjKnowledgeTypeEN.knowledgeTypeName)], 非法,应该为字符型(In 知识点类型(KnowledgeType))!(clsKnowledgeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.courseId) == false &&
    undefined !== pobjKnowledgeTypeEN.courseId &&
    tzDataType.isString(pobjKnowledgeTypeEN.courseId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程Id(courseId)]的值:[$(pobjKnowledgeTypeEN.courseId)], 非法,应该为字符型(In 知识点类型(KnowledgeType))!(clsKnowledgeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjKnowledgeTypeEN.orderNum &&
    undefined !== pobjKnowledgeTypeEN.orderNum &&
    tzDataType.isNumber(pobjKnowledgeTypeEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjKnowledgeTypeEN.orderNum)], 非法,应该为数值型(In 知识点类型(KnowledgeType))!(clsKnowledgeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.updDate) == false &&
    undefined !== pobjKnowledgeTypeEN.updDate &&
    tzDataType.isString(pobjKnowledgeTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjKnowledgeTypeEN.updDate)], 非法,应该为字符型(In 知识点类型(KnowledgeType))!(clsKnowledgeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.updUser) == false &&
    undefined !== pobjKnowledgeTypeEN.updUser &&
    tzDataType.isString(pobjKnowledgeTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjKnowledgeTypeEN.updUser)], 非法,应该为字符型(In 知识点类型(KnowledgeType))!(clsKnowledgeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.memo) == false &&
    undefined !== pobjKnowledgeTypeEN.memo &&
    tzDataType.isString(pobjKnowledgeTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjKnowledgeTypeEN.memo)], 非法,应该为字符型(In 知识点类型(KnowledgeType))!(clsKnowledgeTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjKnowledgeTypeEN.courseId) == false &&
    pobjKnowledgeTypeEN.courseId != '[nuull]' &&
    GetStrLen(pobjKnowledgeTypeEN.courseId) != 8
  ) {
    throw '(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 知识点类型)!(clsKnowledgeTypeBL:CheckPropertyNew)';
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
export function KnowledgeType_GetJSONStrByObj(pobjKnowledgeTypeEN: clsKnowledgeTypeEN): string {
  pobjKnowledgeTypeEN.sfUpdFldSetStr = pobjKnowledgeTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjKnowledgeTypeEN);
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
export function KnowledgeType_GetObjLstByJSONStr(strJSON: string): Array<clsKnowledgeTypeEN> {
  let arrKnowledgeTypeObjLst = new Array<clsKnowledgeTypeEN>();
  if (strJSON === '') {
    return arrKnowledgeTypeObjLst;
  }
  try {
    arrKnowledgeTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrKnowledgeTypeObjLst;
  }
  return arrKnowledgeTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrKnowledgeTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function KnowledgeType_GetObjLstByJSONObjLst(
  arrKnowledgeTypeObjLstS: Array<clsKnowledgeTypeEN>,
): Array<clsKnowledgeTypeEN> {
  const arrKnowledgeTypeObjLst = new Array<clsKnowledgeTypeEN>();
  for (const objInFor of arrKnowledgeTypeObjLstS) {
    const obj1 = KnowledgeType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrKnowledgeTypeObjLst.push(obj1);
  }
  return arrKnowledgeTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function KnowledgeType_GetObjByJSONStr(strJSON: string): clsKnowledgeTypeEN {
  let pobjKnowledgeTypeEN = new clsKnowledgeTypeEN();
  if (strJSON === '') {
    return pobjKnowledgeTypeEN;
  }
  try {
    pobjKnowledgeTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjKnowledgeTypeEN;
  }
  return pobjKnowledgeTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function KnowledgeType_GetCombineCondition(
  objKnowledgeTypeCond: clsKnowledgeTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objKnowledgeTypeCond.dicFldComparisonOp,
      clsKnowledgeTypeEN.con_KnowledgeTypeId,
    ) == true
  ) {
    const strComparisonOpKnowledgeTypeId: string =
      objKnowledgeTypeCond.dicFldComparisonOp[clsKnowledgeTypeEN.con_KnowledgeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsKnowledgeTypeEN.con_KnowledgeTypeId,
      objKnowledgeTypeCond.knowledgeTypeId,
      strComparisonOpKnowledgeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objKnowledgeTypeCond.dicFldComparisonOp,
      clsKnowledgeTypeEN.con_KnowledgeTypeName,
    ) == true
  ) {
    const strComparisonOpKnowledgeTypeName: string =
      objKnowledgeTypeCond.dicFldComparisonOp[clsKnowledgeTypeEN.con_KnowledgeTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsKnowledgeTypeEN.con_KnowledgeTypeName,
      objKnowledgeTypeCond.knowledgeTypeName,
      strComparisonOpKnowledgeTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objKnowledgeTypeCond.dicFldComparisonOp,
      clsKnowledgeTypeEN.con_CourseId,
    ) == true
  ) {
    const strComparisonOpCourseId: string =
      objKnowledgeTypeCond.dicFldComparisonOp[clsKnowledgeTypeEN.con_CourseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsKnowledgeTypeEN.con_CourseId,
      objKnowledgeTypeCond.courseId,
      strComparisonOpCourseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objKnowledgeTypeCond.dicFldComparisonOp,
      clsKnowledgeTypeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objKnowledgeTypeCond.dicFldComparisonOp[clsKnowledgeTypeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsKnowledgeTypeEN.con_OrderNum,
      objKnowledgeTypeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objKnowledgeTypeCond.dicFldComparisonOp,
      clsKnowledgeTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objKnowledgeTypeCond.dicFldComparisonOp[clsKnowledgeTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsKnowledgeTypeEN.con_UpdDate,
      objKnowledgeTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objKnowledgeTypeCond.dicFldComparisonOp,
      clsKnowledgeTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objKnowledgeTypeCond.dicFldComparisonOp[clsKnowledgeTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsKnowledgeTypeEN.con_UpdUser,
      objKnowledgeTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objKnowledgeTypeCond.dicFldComparisonOp,
      clsKnowledgeTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objKnowledgeTypeCond.dicFldComparisonOp[clsKnowledgeTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsKnowledgeTypeEN.con_Memo,
      objKnowledgeTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--KnowledgeType(知识点类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strKnowledgeTypeName: 知识点类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function KnowledgeType_GetUniCondStr(objKnowledgeTypeEN: clsKnowledgeTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and KnowledgeTypeName = '{0}'", objKnowledgeTypeEN.knowledgeTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--KnowledgeType(知识点类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strKnowledgeTypeName: 知识点类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function KnowledgeType_GetUniCondStr4Update(objKnowledgeTypeEN: clsKnowledgeTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and KnowledgeTypeId <> '{0}'", objKnowledgeTypeEN.knowledgeTypeId);
  strWhereCond += Format(" and KnowledgeTypeName = '{0}'", objKnowledgeTypeEN.knowledgeTypeName);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objKnowledgeTypeENS:源对象
 * @param objKnowledgeTypeENT:目标对象
 */
export function KnowledgeType_CopyObjTo(
  objKnowledgeTypeENS: clsKnowledgeTypeEN,
  objKnowledgeTypeENT: clsKnowledgeTypeEN,
): void {
  objKnowledgeTypeENT.knowledgeTypeId = objKnowledgeTypeENS.knowledgeTypeId; //知识点类型Id
  objKnowledgeTypeENT.knowledgeTypeName = objKnowledgeTypeENS.knowledgeTypeName; //知识点类型名
  objKnowledgeTypeENT.courseId = objKnowledgeTypeENS.courseId; //课程Id
  objKnowledgeTypeENT.orderNum = objKnowledgeTypeENS.orderNum; //序号
  objKnowledgeTypeENT.updDate = objKnowledgeTypeENS.updDate; //修改日期
  objKnowledgeTypeENT.updUser = objKnowledgeTypeENS.updUser; //修改人
  objKnowledgeTypeENT.memo = objKnowledgeTypeENS.memo; //备注
  objKnowledgeTypeENT.sfUpdFldSetStr = objKnowledgeTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objKnowledgeTypeENS:源对象
 * @param objKnowledgeTypeENT:目标对象
 */
export function KnowledgeType_GetObjFromJsonObj(
  objKnowledgeTypeENS: clsKnowledgeTypeEN,
): clsKnowledgeTypeEN {
  const objKnowledgeTypeENT: clsKnowledgeTypeEN = new clsKnowledgeTypeEN();
  ObjectAssign(objKnowledgeTypeENT, objKnowledgeTypeENS);
  return objKnowledgeTypeENT;
}
