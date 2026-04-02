/**
 * 类名:clscc_CourseTypeWApi
 * 表名:cc_CourseType(01120057)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:44:22
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 课程类型(cc_CourseType)
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
import { clscc_CourseTypeEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cc_CourseType_Controller = 'cc_CourseTypeApi';
export const cc_CourseType_ConstructorName = 'cc_CourseType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCourseTypeId:关键字
 * @returns 对象
 **/
export async function cc_CourseType_GetObjByCourseTypeIdAsync(
  strCourseTypeId: string,
): Promise<clscc_CourseTypeEN | null> {
  const strThisFuncName = 'GetObjByCourseTypeIdAsync';

  if (IsNullOrEmpty(strCourseTypeId) == true) {
    const strMsg = Format(
      '参数:[strCourseTypeId]不能为空!(In clscc_CourseTypeWApi.GetObjByCourseTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCourseTypeId]的长度:[{0}]不正确!(clscc_CourseTypeWApi.GetObjByCourseTypeIdAsync)',
      strCourseTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCourseTypeId';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseTypeId,
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
      const objcc_CourseType = cc_CourseType_GetObjFromJsonObj(returnObj);
      return objcc_CourseType;
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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
 * @param strCourseTypeId:所给的关键字
 * @returns 对象
 */
export async function cc_CourseType_GetObjByCourseTypeIdCache(
  strCourseTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCourseTypeIdCache';

  if (IsNullOrEmpty(strCourseTypeId) == true) {
    const strMsg = Format(
      '参数:[strCourseTypeId]不能为空!(In clscc_CourseTypeWApi.GetObjByCourseTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCourseTypeId]的长度:[{0}]不正确!(clscc_CourseTypeWApi.GetObjByCourseTypeIdCache)',
      strCourseTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstCache();
  try {
    const arrcc_CourseTypeSel = arrcc_CourseTypeObjLstCache.filter(
      (x) => x.courseTypeId == strCourseTypeId,
    );
    let objcc_CourseType: clscc_CourseTypeEN;
    if (arrcc_CourseTypeSel.length > 0) {
      objcc_CourseType = arrcc_CourseTypeSel[0];
      return objcc_CourseType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objcc_CourseTypeConst = await cc_CourseType_GetObjByCourseTypeIdAsync(
          strCourseTypeId,
        );
        if (objcc_CourseTypeConst != null) {
          cc_CourseType_ReFreshThisCache();
          return objcc_CourseTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCourseTypeId,
      cc_CourseType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCourseTypeId:所给的关键字
 * @returns 对象
 */
export async function cc_CourseType_GetObjByCourseTypeIdlocalStorage(strCourseTypeId: string) {
  const strThisFuncName = 'GetObjByCourseTypeIdlocalStorage';

  if (IsNullOrEmpty(strCourseTypeId) == true) {
    const strMsg = Format(
      '参数:[strCourseTypeId]不能为空!(In clscc_CourseTypeWApi.GetObjByCourseTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCourseTypeId]的长度:[{0}]不正确!(clscc_CourseTypeWApi.GetObjByCourseTypeIdlocalStorage)',
      strCourseTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clscc_CourseTypeEN._CurrTabName, strCourseTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objcc_CourseTypeCache: clscc_CourseTypeEN = JSON.parse(strTempObj);
    return objcc_CourseTypeCache;
  }
  try {
    const objcc_CourseType = await cc_CourseType_GetObjByCourseTypeIdAsync(strCourseTypeId);
    if (objcc_CourseType != null) {
      localStorage.setItem(strKey, JSON.stringify(objcc_CourseType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objcc_CourseType;
    }
    return objcc_CourseType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCourseTypeId,
      cc_CourseType_ConstructorName,
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
 * @param objcc_CourseType:所给的对象
 * @returns 对象
 */
export async function cc_CourseType_UpdateObjInLstCache(objcc_CourseType: clscc_CourseTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstCache();
    const obj = arrcc_CourseTypeObjLstCache.find(
      (x) => x.courseTypeId == objcc_CourseType.courseTypeId,
    );
    if (obj != null) {
      objcc_CourseType.courseTypeId = obj.courseTypeId;
      ObjectAssign(obj, objcc_CourseType);
    } else {
      arrcc_CourseTypeObjLstCache.push(objcc_CourseType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      cc_CourseType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCourseTypeId:所给的关键字
 * @returns 对象
 */
export async function cc_CourseType_GetNameByCourseTypeIdCache(strCourseTypeId: string) {
  if (IsNullOrEmpty(strCourseTypeId) == true) {
    const strMsg = Format(
      '参数:[strCourseTypeId]不能为空!(In clscc_CourseTypeWApi.GetNameByCourseTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCourseTypeId]的长度:[{0}]不正确!(clscc_CourseTypeWApi.GetNameByCourseTypeIdCache)',
      strCourseTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstCache();
  if (arrcc_CourseTypeObjLstCache == null) return '';
  try {
    const arrcc_CourseTypeSel = arrcc_CourseTypeObjLstCache.filter(
      (x) => x.courseTypeId == strCourseTypeId,
    );
    let objcc_CourseType: clscc_CourseTypeEN;
    if (arrcc_CourseTypeSel.length > 0) {
      objcc_CourseType = arrcc_CourseTypeSel[0];
      return objcc_CourseType.courseTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strCourseTypeId,
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
export async function cc_CourseType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clscc_CourseTypeEN.con_CourseTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clscc_CourseTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clscc_CourseTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCourseTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objcc_CourseType = await cc_CourseType_GetObjByCourseTypeIdCache(strCourseTypeId);
  if (objcc_CourseType == null) return '';
  if (objcc_CourseType.GetFldValue(strOutFldName) == null) return '';
  return objcc_CourseType.GetFldValue(strOutFldName).toString();
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
export function cc_CourseType_SortFunDefa(a: clscc_CourseTypeEN, b: clscc_CourseTypeEN): number {
  return a.courseTypeId.localeCompare(b.courseTypeId);
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
export function cc_CourseType_SortFunDefa2Fld(
  a: clscc_CourseTypeEN,
  b: clscc_CourseTypeEN,
): number {
  if (a.courseTypeName == b.courseTypeName) return a.idSchool.localeCompare(b.idSchool);
  else return a.courseTypeName.localeCompare(b.courseTypeName);
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
export function cc_CourseType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscc_CourseTypeEN.con_CourseTypeId:
        return (a: clscc_CourseTypeEN, b: clscc_CourseTypeEN) => {
          return a.courseTypeId.localeCompare(b.courseTypeId);
        };
      case clscc_CourseTypeEN.con_CourseTypeName:
        return (a: clscc_CourseTypeEN, b: clscc_CourseTypeEN) => {
          return a.courseTypeName.localeCompare(b.courseTypeName);
        };
      case clscc_CourseTypeEN.con_IdSchool:
        return (a: clscc_CourseTypeEN, b: clscc_CourseTypeEN) => {
          if (a.idSchool == null) return -1;
          if (b.idSchool == null) return 1;
          return a.idSchool.localeCompare(b.idSchool);
        };
      case clscc_CourseTypeEN.con_IsUse:
        return (a: clscc_CourseTypeEN) => {
          if (a.isUse == true) return 1;
          else return -1;
        };
      case clscc_CourseTypeEN.con_UpdDate:
        return (a: clscc_CourseTypeEN, b: clscc_CourseTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clscc_CourseTypeEN.con_UpdUserId:
        return (a: clscc_CourseTypeEN, b: clscc_CourseTypeEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clscc_CourseTypeEN.con_Memo:
        return (a: clscc_CourseTypeEN, b: clscc_CourseTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[cc_CourseType]中不存在!(in ${cc_CourseType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clscc_CourseTypeEN.con_CourseTypeId:
        return (a: clscc_CourseTypeEN, b: clscc_CourseTypeEN) => {
          return b.courseTypeId.localeCompare(a.courseTypeId);
        };
      case clscc_CourseTypeEN.con_CourseTypeName:
        return (a: clscc_CourseTypeEN, b: clscc_CourseTypeEN) => {
          return b.courseTypeName.localeCompare(a.courseTypeName);
        };
      case clscc_CourseTypeEN.con_IdSchool:
        return (a: clscc_CourseTypeEN, b: clscc_CourseTypeEN) => {
          if (b.idSchool == null) return -1;
          if (a.idSchool == null) return 1;
          return b.idSchool.localeCompare(a.idSchool);
        };
      case clscc_CourseTypeEN.con_IsUse:
        return (b: clscc_CourseTypeEN) => {
          if (b.isUse == true) return 1;
          else return -1;
        };
      case clscc_CourseTypeEN.con_UpdDate:
        return (a: clscc_CourseTypeEN, b: clscc_CourseTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clscc_CourseTypeEN.con_UpdUserId:
        return (a: clscc_CourseTypeEN, b: clscc_CourseTypeEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clscc_CourseTypeEN.con_Memo:
        return (a: clscc_CourseTypeEN, b: clscc_CourseTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[cc_CourseType]中不存在!(in ${cc_CourseType_ConstructorName}.${strThisFuncName})`;
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
export async function cc_CourseType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clscc_CourseTypeEN.con_CourseTypeId:
      return (obj: clscc_CourseTypeEN) => {
        return obj.courseTypeId === value;
      };
    case clscc_CourseTypeEN.con_CourseTypeName:
      return (obj: clscc_CourseTypeEN) => {
        return obj.courseTypeName === value;
      };
    case clscc_CourseTypeEN.con_IdSchool:
      return (obj: clscc_CourseTypeEN) => {
        return obj.idSchool === value;
      };
    case clscc_CourseTypeEN.con_IsUse:
      return (obj: clscc_CourseTypeEN) => {
        return obj.isUse === value;
      };
    case clscc_CourseTypeEN.con_UpdDate:
      return (obj: clscc_CourseTypeEN) => {
        return obj.updDate === value;
      };
    case clscc_CourseTypeEN.con_UpdUserId:
      return (obj: clscc_CourseTypeEN) => {
        return obj.updUserId === value;
      };
    case clscc_CourseTypeEN.con_Memo:
      return (obj: clscc_CourseTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[cc_CourseType]中不存在!(in ${cc_CourseType_ConstructorName}.${strThisFuncName})`;
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
export async function cc_CourseType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clscc_CourseTypeEN.con_CourseTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrcc_CourseType = await cc_CourseType_GetObjLstCache();
  if (arrcc_CourseType == null) return [];
  let arrcc_CourseTypeSel = arrcc_CourseType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrcc_CourseTypeSel.length == 0) return [];
  return arrcc_CourseTypeSel.map((x) => x.courseTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function cc_CourseType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
export async function cc_CourseType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
export async function cc_CourseType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clscc_CourseTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

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
      const objcc_CourseType = cc_CourseType_GetObjFromJsonObj(returnObj);
      return objcc_CourseType;
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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
export async function cc_CourseType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscc_CourseTypeEN._CurrTabName;
  if (IsNullOrEmpty(clscc_CourseTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_CourseTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrcc_CourseTypeExObjLstCache: Array<clscc_CourseTypeEN> = CacheHelper.Get(strKey);
    const arrcc_CourseTypeObjLstT = cc_CourseType_GetObjLstByJSONObjLst(
      arrcc_CourseTypeExObjLstCache,
    );
    return arrcc_CourseTypeObjLstT;
  }
  try {
    const arrcc_CourseTypeExObjLst = await cc_CourseType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrcc_CourseTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_CourseTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_CourseTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_CourseType_ConstructorName,
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
export async function cc_CourseType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscc_CourseTypeEN._CurrTabName;
  if (IsNullOrEmpty(clscc_CourseTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_CourseTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrcc_CourseTypeExObjLstCache: Array<clscc_CourseTypeEN> = JSON.parse(strTempObjLst);
    const arrcc_CourseTypeObjLstT = cc_CourseType_GetObjLstByJSONObjLst(
      arrcc_CourseTypeExObjLstCache,
    );
    return arrcc_CourseTypeObjLstT;
  }
  try {
    const arrcc_CourseTypeExObjLst = await cc_CourseType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrcc_CourseTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_CourseTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_CourseTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_CourseType_ConstructorName,
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
export async function cc_CourseType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clscc_CourseTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrcc_CourseTypeObjLstCache: Array<clscc_CourseTypeEN> = JSON.parse(strTempObjLst);
    return arrcc_CourseTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function cc_CourseType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clscc_CourseTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

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
          cc_CourseType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseType_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
export async function cc_CourseType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscc_CourseTypeEN._CurrTabName;
  if (IsNullOrEmpty(clscc_CourseTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_CourseTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrcc_CourseTypeExObjLstCache: Array<clscc_CourseTypeEN> = JSON.parse(strTempObjLst);
    const arrcc_CourseTypeObjLstT = cc_CourseType_GetObjLstByJSONObjLst(
      arrcc_CourseTypeExObjLstCache,
    );
    return arrcc_CourseTypeObjLstT;
  }
  try {
    const arrcc_CourseTypeExObjLst = await cc_CourseType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrcc_CourseTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_CourseTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_CourseTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_CourseType_ConstructorName,
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
export async function cc_CourseType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clscc_CourseTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrcc_CourseTypeObjLstCache: Array<clscc_CourseTypeEN> = JSON.parse(strTempObjLst);
    return arrcc_CourseTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function cc_CourseType_GetObjLstCache(): Promise<Array<clscc_CourseTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrcc_CourseTypeObjLstCache;
  switch (clscc_CourseTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstClientCache();
      break;
    default:
      arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstClientCache();
      break;
  }
  return arrcc_CourseTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function cc_CourseType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrcc_CourseTypeObjLstCache;
  switch (clscc_CourseTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrcc_CourseTypeObjLstCache = null;
      break;
    default:
      arrcc_CourseTypeObjLstCache = null;
      break;
  }
  return arrcc_CourseTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCourseTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function cc_CourseType_GetSubObjLstCache(objcc_CourseTypeCond: clscc_CourseTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstCache();
  let arrcc_CourseTypeSel = arrcc_CourseTypeObjLstCache;
  if (
    objcc_CourseTypeCond.sfFldComparisonOp == null ||
    objcc_CourseTypeCond.sfFldComparisonOp == ''
  )
    return arrcc_CourseTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_CourseTypeCond.sfFldComparisonOp,
  );
  //console.log("clscc_CourseTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_CourseTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_CourseTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrcc_CourseTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objcc_CourseTypeCond),
      cc_CourseType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCourseTypeId:关键字列表
 * @returns 对象列表
 **/
export async function cc_CourseType_GetObjLstByCourseTypeIdLstAsync(
  arrCourseTypeId: Array<string>,
): Promise<Array<clscc_CourseTypeEN>> {
  const strThisFuncName = 'GetObjLstByCourseTypeIdLstAsync';
  const strAction = 'GetObjLstByCourseTypeIdLst';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCourseTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cc_CourseType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseType_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
 * @param arrstrCourseTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function cc_CourseType_GetObjLstByCourseTypeIdLstCache(
  arrCourseTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByCourseTypeIdLstCache';
  try {
    const arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstCache();
    const arrcc_CourseTypeSel = arrcc_CourseTypeObjLstCache.filter(
      (x) => arrCourseTypeIdLst.indexOf(x.courseTypeId) > -1,
    );
    return arrcc_CourseTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCourseTypeIdLst.join(','),
      cc_CourseType_ConstructorName,
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
export async function cc_CourseType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clscc_CourseTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

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
          cc_CourseType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseType_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
export async function cc_CourseType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clscc_CourseTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

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
          cc_CourseType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseType_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
export async function cc_CourseType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clscc_CourseTypeEN>();
  const arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstCache();
  if (arrcc_CourseTypeObjLstCache.length == 0) return arrcc_CourseTypeObjLstCache;
  let arrcc_CourseTypeSel = arrcc_CourseTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objcc_CourseTypeCond = new clscc_CourseTypeEN();
  ObjectAssign(objcc_CourseTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clscc_CourseTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_CourseTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_CourseTypeSel.length == 0) return arrcc_CourseTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_CourseTypeSel = arrcc_CourseTypeSel.sort(
        cc_CourseType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_CourseTypeSel = arrcc_CourseTypeSel.sort(objPagerPara.sortFun);
    }
    arrcc_CourseTypeSel = arrcc_CourseTypeSel.slice(intStart, intEnd);
    return arrcc_CourseTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_CourseType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function cc_CourseType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_CourseTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clscc_CourseTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

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
          cc_CourseType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseType_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
 * @param strCourseTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function cc_CourseType_DelRecordAsync(strCourseTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strCourseTypeId);

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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
 * @param arrCourseTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function cc_CourseType_Delcc_CourseTypesAsync(
  arrCourseTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delcc_CourseTypesAsync';
  const strAction = 'Delcc_CourseTypes';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCourseTypeId, config);
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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
export async function cc_CourseType_Delcc_CourseTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delcc_CourseTypesByCondAsync';
  const strAction = 'Delcc_CourseTypesByCond';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
 * @param objcc_CourseTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_CourseType_AddNewRecordAsync(
  objcc_CourseTypeEN: clscc_CourseTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objcc_CourseTypeEN.courseTypeId === null || objcc_CourseTypeEN.courseTypeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objcc_CourseTypeEN);
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseTypeEN, config);
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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
 * @param objcc_CourseTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_CourseType_AddNewRecordWithMaxIdAsync(
  objcc_CourseTypeEN: clscc_CourseTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseTypeEN, config);
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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
 * @param objcc_CourseTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function cc_CourseType_AddNewRecordWithReturnKeyAsync(
  objcc_CourseTypeEN: clscc_CourseTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseTypeEN, config);
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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
 * @param objcc_CourseTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function cc_CourseType_UpdateRecordAsync(
  objcc_CourseTypeEN: clscc_CourseTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objcc_CourseTypeEN.sfUpdFldSetStr === undefined ||
    objcc_CourseTypeEN.sfUpdFldSetStr === null ||
    objcc_CourseTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcc_CourseTypeEN.courseTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseTypeEN, config);
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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
 * @param objcc_CourseTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function cc_CourseType_UpdateWithConditionAsync(
  objcc_CourseTypeEN: clscc_CourseTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objcc_CourseTypeEN.sfUpdFldSetStr === undefined ||
    objcc_CourseTypeEN.sfUpdFldSetStr === null ||
    objcc_CourseTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcc_CourseTypeEN.courseTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);
  objcc_CourseTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseTypeEN, config);
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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
 * @param objstrCourseTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function cc_CourseType_IsExistRecordCache(objcc_CourseTypeCond: clscc_CourseTypeEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstCache();
  if (arrcc_CourseTypeObjLstCache == null) return false;
  let arrcc_CourseTypeSel = arrcc_CourseTypeObjLstCache;
  if (
    objcc_CourseTypeCond.sfFldComparisonOp == null ||
    objcc_CourseTypeCond.sfFldComparisonOp == ''
  )
    return arrcc_CourseTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_CourseTypeCond.sfFldComparisonOp,
  );
  //console.log("clscc_CourseTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_CourseTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_CourseTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_CourseTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objcc_CourseTypeCond),
      cc_CourseType_ConstructorName,
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
export async function cc_CourseType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
 * @param strCourseTypeId:所给的关键字
 * @returns 对象
 */
export async function cc_CourseType_IsExistCache(strCourseTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstCache();
  if (arrcc_CourseTypeObjLstCache == null) return false;
  try {
    const arrcc_CourseTypeSel = arrcc_CourseTypeObjLstCache.filter(
      (x) => x.courseTypeId == strCourseTypeId,
    );
    if (arrcc_CourseTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCourseTypeId,
      cc_CourseType_ConstructorName,
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
 * @param strCourseTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function cc_CourseType_IsExistAsync(strCourseTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseTypeId,
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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
export async function cc_CourseType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
 * @param objcc_CourseTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function cc_CourseType_GetRecCountByCondCache(
  objcc_CourseTypeCond: clscc_CourseTypeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrcc_CourseTypeObjLstCache = await cc_CourseType_GetObjLstCache();
  if (arrcc_CourseTypeObjLstCache == null) return 0;
  let arrcc_CourseTypeSel = arrcc_CourseTypeObjLstCache;
  if (
    objcc_CourseTypeCond.sfFldComparisonOp == null ||
    objcc_CourseTypeCond.sfFldComparisonOp == ''
  )
    return arrcc_CourseTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_CourseTypeCond.sfFldComparisonOp,
  );
  //console.log("clscc_CourseTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_CourseTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_CourseTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseTypeSel = arrcc_CourseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrcc_CourseTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objcc_CourseTypeCond),
      cc_CourseType_ConstructorName,
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
export async function cc_CourseType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cc_CourseType_Controller, strAction);

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
        cc_CourseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseType_ConstructorName,
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
export function cc_CourseType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function cc_CourseType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clscc_CourseTypeEN._CurrTabName;
  switch (clscc_CourseTypeEN.CacheModeId) {
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
export function cc_CourseType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clscc_CourseTypeEN._CurrTabName;
    switch (clscc_CourseTypeEN.CacheModeId) {
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
export async function cc_CourseType_BindDdl_CourseTypeIDInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CourseTypeIDInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CourseTypeIDInDivCache");
  const arrObjLstSel = await cc_CourseType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clscc_CourseTypeEN.con_CourseTypeId,
    clscc_CourseTypeEN.con_CourseTypeName,
    '课程类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function cc_CourseType_CheckPropertyNew(pobjcc_CourseTypeEN: clscc_CourseTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjcc_CourseTypeEN.courseTypeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[课程类型名称]不能为空(In 课程类型)!(clscc_CourseTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.courseTypeId) == false &&
    GetStrLen(pobjcc_CourseTypeEN.courseTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程类型ID(courseTypeId)]的长度不能超过4(In 课程类型(cc_CourseType))!值:$(pobjcc_CourseTypeEN.courseTypeId)(clscc_CourseTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.courseTypeName) == false &&
    GetStrLen(pobjcc_CourseTypeEN.courseTypeName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程类型名称(courseTypeName)]的长度不能超过30(In 课程类型(cc_CourseType))!值:$(pobjcc_CourseTypeEN.courseTypeName)(clscc_CourseTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.idSchool) == false &&
    GetStrLen(pobjcc_CourseTypeEN.idSchool) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学校流水号(idSchool)]的长度不能超过4(In 课程类型(cc_CourseType))!值:$(pobjcc_CourseTypeEN.idSchool)(clscc_CourseTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.updDate) == false &&
    GetStrLen(pobjcc_CourseTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 课程类型(cc_CourseType))!值:$(pobjcc_CourseTypeEN.updDate)(clscc_CourseTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.updUserId) == false &&
    GetStrLen(pobjcc_CourseTypeEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 课程类型(cc_CourseType))!值:$(pobjcc_CourseTypeEN.updUserId)(clscc_CourseTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.memo) == false &&
    GetStrLen(pobjcc_CourseTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 课程类型(cc_CourseType))!值:$(pobjcc_CourseTypeEN.memo)(clscc_CourseTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.courseTypeId) == false &&
    undefined !== pobjcc_CourseTypeEN.courseTypeId &&
    tzDataType.isString(pobjcc_CourseTypeEN.courseTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程类型ID(courseTypeId)]的值:[$(pobjcc_CourseTypeEN.courseTypeId)], 非法,应该为字符型(In 课程类型(cc_CourseType))!(clscc_CourseTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.courseTypeName) == false &&
    undefined !== pobjcc_CourseTypeEN.courseTypeName &&
    tzDataType.isString(pobjcc_CourseTypeEN.courseTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程类型名称(courseTypeName)]的值:[$(pobjcc_CourseTypeEN.courseTypeName)], 非法,应该为字符型(In 课程类型(cc_CourseType))!(clscc_CourseTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.idSchool) == false &&
    undefined !== pobjcc_CourseTypeEN.idSchool &&
    tzDataType.isString(pobjcc_CourseTypeEN.idSchool) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学校流水号(idSchool)]的值:[$(pobjcc_CourseTypeEN.idSchool)], 非法,应该为字符型(In 课程类型(cc_CourseType))!(clscc_CourseTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseTypeEN.isUse &&
    undefined !== pobjcc_CourseTypeEN.isUse &&
    tzDataType.isBoolean(pobjcc_CourseTypeEN.isUse) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否使用(isUse)]的值:[$(pobjcc_CourseTypeEN.isUse)], 非法,应该为布尔型(In 课程类型(cc_CourseType))!(clscc_CourseTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.updDate) == false &&
    undefined !== pobjcc_CourseTypeEN.updDate &&
    tzDataType.isString(pobjcc_CourseTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjcc_CourseTypeEN.updDate)], 非法,应该为字符型(In 课程类型(cc_CourseType))!(clscc_CourseTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.updUserId) == false &&
    undefined !== pobjcc_CourseTypeEN.updUserId &&
    tzDataType.isString(pobjcc_CourseTypeEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjcc_CourseTypeEN.updUserId)], 非法,应该为字符型(In 课程类型(cc_CourseType))!(clscc_CourseTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.memo) == false &&
    undefined !== pobjcc_CourseTypeEN.memo &&
    tzDataType.isString(pobjcc_CourseTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjcc_CourseTypeEN.memo)], 非法,应该为字符型(In 课程类型(cc_CourseType))!(clscc_CourseTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function cc_CourseType_CheckProperty4Update(pobjcc_CourseTypeEN: clscc_CourseTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.courseTypeId) == false &&
    GetStrLen(pobjcc_CourseTypeEN.courseTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程类型ID(courseTypeId)]的长度不能超过4(In 课程类型(cc_CourseType))!值:$(pobjcc_CourseTypeEN.courseTypeId)(clscc_CourseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.courseTypeName) == false &&
    GetStrLen(pobjcc_CourseTypeEN.courseTypeName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程类型名称(courseTypeName)]的长度不能超过30(In 课程类型(cc_CourseType))!值:$(pobjcc_CourseTypeEN.courseTypeName)(clscc_CourseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.idSchool) == false &&
    GetStrLen(pobjcc_CourseTypeEN.idSchool) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学校流水号(idSchool)]的长度不能超过4(In 课程类型(cc_CourseType))!值:$(pobjcc_CourseTypeEN.idSchool)(clscc_CourseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.updDate) == false &&
    GetStrLen(pobjcc_CourseTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 课程类型(cc_CourseType))!值:$(pobjcc_CourseTypeEN.updDate)(clscc_CourseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.updUserId) == false &&
    GetStrLen(pobjcc_CourseTypeEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 课程类型(cc_CourseType))!值:$(pobjcc_CourseTypeEN.updUserId)(clscc_CourseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.memo) == false &&
    GetStrLen(pobjcc_CourseTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 课程类型(cc_CourseType))!值:$(pobjcc_CourseTypeEN.memo)(clscc_CourseTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.courseTypeId) == false &&
    undefined !== pobjcc_CourseTypeEN.courseTypeId &&
    tzDataType.isString(pobjcc_CourseTypeEN.courseTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程类型ID(courseTypeId)]的值:[$(pobjcc_CourseTypeEN.courseTypeId)], 非法,应该为字符型(In 课程类型(cc_CourseType))!(clscc_CourseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.courseTypeName) == false &&
    undefined !== pobjcc_CourseTypeEN.courseTypeName &&
    tzDataType.isString(pobjcc_CourseTypeEN.courseTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程类型名称(courseTypeName)]的值:[$(pobjcc_CourseTypeEN.courseTypeName)], 非法,应该为字符型(In 课程类型(cc_CourseType))!(clscc_CourseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.idSchool) == false &&
    undefined !== pobjcc_CourseTypeEN.idSchool &&
    tzDataType.isString(pobjcc_CourseTypeEN.idSchool) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学校流水号(idSchool)]的值:[$(pobjcc_CourseTypeEN.idSchool)], 非法,应该为字符型(In 课程类型(cc_CourseType))!(clscc_CourseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseTypeEN.isUse &&
    undefined !== pobjcc_CourseTypeEN.isUse &&
    tzDataType.isBoolean(pobjcc_CourseTypeEN.isUse) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否使用(isUse)]的值:[$(pobjcc_CourseTypeEN.isUse)], 非法,应该为布尔型(In 课程类型(cc_CourseType))!(clscc_CourseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.updDate) == false &&
    undefined !== pobjcc_CourseTypeEN.updDate &&
    tzDataType.isString(pobjcc_CourseTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjcc_CourseTypeEN.updDate)], 非法,应该为字符型(In 课程类型(cc_CourseType))!(clscc_CourseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.updUserId) == false &&
    undefined !== pobjcc_CourseTypeEN.updUserId &&
    tzDataType.isString(pobjcc_CourseTypeEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjcc_CourseTypeEN.updUserId)], 非法,应该为字符型(In 课程类型(cc_CourseType))!(clscc_CourseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.memo) == false &&
    undefined !== pobjcc_CourseTypeEN.memo &&
    tzDataType.isString(pobjcc_CourseTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjcc_CourseTypeEN.memo)], 非法,应该为字符型(In 课程类型(cc_CourseType))!(clscc_CourseTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjcc_CourseTypeEN.courseTypeId) === true ||
    pobjcc_CourseTypeEN.courseTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[课程类型ID]不能为空(In 课程类型)!(clscc_CourseTypeBL:CheckProperty4Update)',
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
export function cc_CourseType_GetJSONStrByObj(pobjcc_CourseTypeEN: clscc_CourseTypeEN): string {
  pobjcc_CourseTypeEN.sfUpdFldSetStr = pobjcc_CourseTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjcc_CourseTypeEN);
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
export function cc_CourseType_GetObjLstByJSONStr(strJSON: string): Array<clscc_CourseTypeEN> {
  let arrcc_CourseTypeObjLst = new Array<clscc_CourseTypeEN>();
  if (strJSON === '') {
    return arrcc_CourseTypeObjLst;
  }
  try {
    arrcc_CourseTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrcc_CourseTypeObjLst;
  }
  return arrcc_CourseTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_CourseTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function cc_CourseType_GetObjLstByJSONObjLst(
  arrcc_CourseTypeObjLstS: Array<clscc_CourseTypeEN>,
): Array<clscc_CourseTypeEN> {
  const arrcc_CourseTypeObjLst = new Array<clscc_CourseTypeEN>();
  for (const objInFor of arrcc_CourseTypeObjLstS) {
    const obj1 = cc_CourseType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrcc_CourseTypeObjLst.push(obj1);
  }
  return arrcc_CourseTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function cc_CourseType_GetObjByJSONStr(strJSON: string): clscc_CourseTypeEN {
  let pobjcc_CourseTypeEN = new clscc_CourseTypeEN();
  if (strJSON === '') {
    return pobjcc_CourseTypeEN;
  }
  try {
    pobjcc_CourseTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjcc_CourseTypeEN;
  }
  return pobjcc_CourseTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function cc_CourseType_GetCombineCondition(
  objcc_CourseTypeCond: clscc_CourseTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseTypeCond.dicFldComparisonOp,
      clscc_CourseTypeEN.con_CourseTypeId,
    ) == true
  ) {
    const strComparisonOpCourseTypeId: string =
      objcc_CourseTypeCond.dicFldComparisonOp[clscc_CourseTypeEN.con_CourseTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseTypeEN.con_CourseTypeId,
      objcc_CourseTypeCond.courseTypeId,
      strComparisonOpCourseTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseTypeCond.dicFldComparisonOp,
      clscc_CourseTypeEN.con_CourseTypeName,
    ) == true
  ) {
    const strComparisonOpCourseTypeName: string =
      objcc_CourseTypeCond.dicFldComparisonOp[clscc_CourseTypeEN.con_CourseTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseTypeEN.con_CourseTypeName,
      objcc_CourseTypeCond.courseTypeName,
      strComparisonOpCourseTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseTypeCond.dicFldComparisonOp,
      clscc_CourseTypeEN.con_IdSchool,
    ) == true
  ) {
    const strComparisonOpIdSchool: string =
      objcc_CourseTypeCond.dicFldComparisonOp[clscc_CourseTypeEN.con_IdSchool];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseTypeEN.con_IdSchool,
      objcc_CourseTypeCond.idSchool,
      strComparisonOpIdSchool,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseTypeCond.dicFldComparisonOp,
      clscc_CourseTypeEN.con_IsUse,
    ) == true
  ) {
    if (objcc_CourseTypeCond.isUse == true) {
      strWhereCond += Format(" And {0} = '1'", clscc_CourseTypeEN.con_IsUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscc_CourseTypeEN.con_IsUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseTypeCond.dicFldComparisonOp,
      clscc_CourseTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objcc_CourseTypeCond.dicFldComparisonOp[clscc_CourseTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseTypeEN.con_UpdDate,
      objcc_CourseTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseTypeCond.dicFldComparisonOp,
      clscc_CourseTypeEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objcc_CourseTypeCond.dicFldComparisonOp[clscc_CourseTypeEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseTypeEN.con_UpdUserId,
      objcc_CourseTypeCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseTypeCond.dicFldComparisonOp,
      clscc_CourseTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objcc_CourseTypeCond.dicFldComparisonOp[clscc_CourseTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseTypeEN.con_Memo,
      objcc_CourseTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_CourseTypeENS:源对象
 * @param objcc_CourseTypeENT:目标对象
 */
export function cc_CourseType_CopyObjTo(
  objcc_CourseTypeENS: clscc_CourseTypeEN,
  objcc_CourseTypeENT: clscc_CourseTypeEN,
): void {
  objcc_CourseTypeENT.courseTypeId = objcc_CourseTypeENS.courseTypeId; //课程类型ID
  objcc_CourseTypeENT.courseTypeName = objcc_CourseTypeENS.courseTypeName; //课程类型名称
  objcc_CourseTypeENT.idSchool = objcc_CourseTypeENS.idSchool; //学校流水号
  objcc_CourseTypeENT.isUse = objcc_CourseTypeENS.isUse; //是否使用
  objcc_CourseTypeENT.updDate = objcc_CourseTypeENS.updDate; //修改日期
  objcc_CourseTypeENT.updUserId = objcc_CourseTypeENS.updUserId; //修改用户Id
  objcc_CourseTypeENT.memo = objcc_CourseTypeENS.memo; //备注
  objcc_CourseTypeENT.sfUpdFldSetStr = objcc_CourseTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_CourseTypeENS:源对象
 * @param objcc_CourseTypeENT:目标对象
 */
export function cc_CourseType_GetObjFromJsonObj(
  objcc_CourseTypeENS: clscc_CourseTypeEN,
): clscc_CourseTypeEN {
  const objcc_CourseTypeENT: clscc_CourseTypeEN = new clscc_CourseTypeEN();
  ObjectAssign(objcc_CourseTypeENT, objcc_CourseTypeENS);
  return objcc_CourseTypeENT;
}
