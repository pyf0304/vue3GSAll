/**
 * 类名:clsTeachingSolutionWApi
 * 表名:TeachingSolution(01120137)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:07
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
 * 教学方案(TeachingSolution)
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
import { clsTeachingSolutionEN } from '@/ts/L0Entity/CourseLearning/clsTeachingSolutionEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const teachingSolution_Controller = 'TeachingSolutionApi';
export const teachingSolution_ConstructorName = 'teachingSolution';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTeachingSolutionId:关键字
 * @returns 对象
 **/
export async function TeachingSolution_GetObjByTeachingSolutionIdAsync(
  strTeachingSolutionId: string,
): Promise<clsTeachingSolutionEN | null> {
  const strThisFuncName = 'GetObjByTeachingSolutionIdAsync';

  if (IsNullOrEmpty(strTeachingSolutionId) == true) {
    const strMsg = Format(
      '参数:[strTeachingSolutionId]不能为空!(In clsTeachingSolutionWApi.GetObjByTeachingSolutionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTeachingSolutionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTeachingSolutionId]的长度:[{0}]不正确!(clsTeachingSolutionWApi.GetObjByTeachingSolutionIdAsync)',
      strTeachingSolutionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTeachingSolutionId';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTeachingSolutionId,
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
      const objTeachingSolution = TeachingSolution_GetObjFromJsonObj(returnObj);
      return objTeachingSolution;
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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
 * @param strTeachingSolutionId:所给的关键字
 * @returns 对象
 */
export async function TeachingSolution_GetObjByTeachingSolutionIdCache(
  strTeachingSolutionId: string,
  strCourseId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTeachingSolutionIdCache';

  if (IsNullOrEmpty(strTeachingSolutionId) == true) {
    const strMsg = Format(
      '参数:[strTeachingSolutionId]不能为空!(In clsTeachingSolutionWApi.GetObjByTeachingSolutionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTeachingSolutionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTeachingSolutionId]的长度:[{0}]不正确!(clsTeachingSolutionWApi.GetObjByTeachingSolutionIdCache)',
      strTeachingSolutionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstCache(strCourseId);
  try {
    const arrTeachingSolutionSel = arrTeachingSolutionObjLstCache.filter(
      (x) => x.teachingSolutionId == strTeachingSolutionId,
    );
    let objTeachingSolution: clsTeachingSolutionEN;
    if (arrTeachingSolutionSel.length > 0) {
      objTeachingSolution = arrTeachingSolutionSel[0];
      return objTeachingSolution;
    } else {
      if (bolTryAsyncOnce == true) {
        const objTeachingSolutionConst = await TeachingSolution_GetObjByTeachingSolutionIdAsync(
          strTeachingSolutionId,
        );
        if (objTeachingSolutionConst != null) {
          TeachingSolution_ReFreshThisCache(strCourseId);
          return objTeachingSolutionConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTeachingSolutionId,
      teachingSolution_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strTeachingSolutionId:所给的关键字
 * @returns 对象
 */
export async function TeachingSolution_GetObjByTeachingSolutionIdlocalStorage(
  strTeachingSolutionId: string,
) {
  const strThisFuncName = 'GetObjByTeachingSolutionIdlocalStorage';

  if (IsNullOrEmpty(strTeachingSolutionId) == true) {
    const strMsg = Format(
      '参数:[strTeachingSolutionId]不能为空!(In clsTeachingSolutionWApi.GetObjByTeachingSolutionIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTeachingSolutionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTeachingSolutionId]的长度:[{0}]不正确!(clsTeachingSolutionWApi.GetObjByTeachingSolutionIdlocalStorage)',
      strTeachingSolutionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsTeachingSolutionEN._CurrTabName, strTeachingSolutionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objTeachingSolutionCache: clsTeachingSolutionEN = JSON.parse(strTempObj);
    return objTeachingSolutionCache;
  }
  try {
    const objTeachingSolution = await TeachingSolution_GetObjByTeachingSolutionIdAsync(
      strTeachingSolutionId,
    );
    if (objTeachingSolution != null) {
      localStorage.setItem(strKey, JSON.stringify(objTeachingSolution));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objTeachingSolution;
    }
    return objTeachingSolution;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTeachingSolutionId,
      teachingSolution_ConstructorName,
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
 * @param objTeachingSolution:所给的对象
 * @returns 对象
 */
export async function TeachingSolution_UpdateObjInLstCache(
  objTeachingSolution: clsTeachingSolutionEN,
  strCourseId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstCache(strCourseId);
    const obj = arrTeachingSolutionObjLstCache.find(
      (x) =>
        x.teachingSolutionName == objTeachingSolution.teachingSolutionName &&
        x.courseId == objTeachingSolution.courseId,
    );
    if (obj != null) {
      objTeachingSolution.teachingSolutionId = obj.teachingSolutionId;
      ObjectAssign(obj, objTeachingSolution);
    } else {
      arrTeachingSolutionObjLstCache.push(objTeachingSolution);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      teachingSolution_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strTeachingSolutionId:所给的关键字
 * @returns 对象
 */
export async function TeachingSolution_GetNameByTeachingSolutionIdCache(
  strTeachingSolutionId: string,
  strCourseId: string,
) {
  if (IsNullOrEmpty(strTeachingSolutionId) == true) {
    const strMsg = Format(
      '参数:[strTeachingSolutionId]不能为空!(In clsTeachingSolutionWApi.GetNameByTeachingSolutionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTeachingSolutionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTeachingSolutionId]的长度:[{0}]不正确!(clsTeachingSolutionWApi.GetNameByTeachingSolutionIdCache)',
      strTeachingSolutionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstCache(strCourseId);
  if (arrTeachingSolutionObjLstCache == null) return '';
  try {
    const arrTeachingSolutionSel = arrTeachingSolutionObjLstCache.filter(
      (x) => x.teachingSolutionId == strTeachingSolutionId,
    );
    let objTeachingSolution: clsTeachingSolutionEN;
    if (arrTeachingSolutionSel.length > 0) {
      objTeachingSolution = arrTeachingSolutionSel[0];
      return objTeachingSolution.teachingSolutionName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strTeachingSolutionId,
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
export async function TeachingSolution_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strCourseIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCourseIdClassfy) == true) {
    const strMsg = Format('参数:[strCourseIdClassfy]不能为空!(In clsTeachingSolutionWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsTeachingSolutionWApi.func)',
      strCourseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsTeachingSolutionEN.con_TeachingSolutionId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsTeachingSolutionEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsTeachingSolutionEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTeachingSolutionId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objTeachingSolution = await TeachingSolution_GetObjByTeachingSolutionIdCache(
    strTeachingSolutionId,
    strCourseIdClassfy,
  );
  if (objTeachingSolution == null) return '';
  if (objTeachingSolution.GetFldValue(strOutFldName) == null) return '';
  return objTeachingSolution.GetFldValue(strOutFldName).toString();
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
export function TeachingSolution_SortFunDefa(
  a: clsTeachingSolutionEN,
  b: clsTeachingSolutionEN,
): number {
  return a.teachingSolutionId.localeCompare(b.teachingSolutionId);
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
export function TeachingSolution_SortFunDefa2Fld(
  a: clsTeachingSolutionEN,
  b: clsTeachingSolutionEN,
): number {
  if (a.teachingSolutionName == b.teachingSolutionName) return a.courseId.localeCompare(b.courseId);
  else return a.teachingSolutionName.localeCompare(b.teachingSolutionName);
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
export function TeachingSolution_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTeachingSolutionEN.con_TeachingSolutionId:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          return a.teachingSolutionId.localeCompare(b.teachingSolutionId);
        };
      case clsTeachingSolutionEN.con_TeachingSolutionName:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          return a.teachingSolutionName.localeCompare(b.teachingSolutionName);
        };
      case clsTeachingSolutionEN.con_CourseId:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          return a.courseId.localeCompare(b.courseId);
        };
      case clsTeachingSolutionEN.con_IdTeacher:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          return a.idTeacher.localeCompare(b.idTeacher);
        };
      case clsTeachingSolutionEN.con_BriefIntroduction:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          if (a.briefIntroduction == null) return -1;
          if (b.briefIntroduction == null) return 1;
          return a.briefIntroduction.localeCompare(b.briefIntroduction);
        };
      case clsTeachingSolutionEN.con_UpdDate:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clsTeachingSolutionEN.con_UpdUser:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsTeachingSolutionEN.con_Memo:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TeachingSolution]中不存在!(in ${teachingSolution_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsTeachingSolutionEN.con_TeachingSolutionId:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          return b.teachingSolutionId.localeCompare(a.teachingSolutionId);
        };
      case clsTeachingSolutionEN.con_TeachingSolutionName:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          return b.teachingSolutionName.localeCompare(a.teachingSolutionName);
        };
      case clsTeachingSolutionEN.con_CourseId:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          return b.courseId.localeCompare(a.courseId);
        };
      case clsTeachingSolutionEN.con_IdTeacher:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          return b.idTeacher.localeCompare(a.idTeacher);
        };
      case clsTeachingSolutionEN.con_BriefIntroduction:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          if (b.briefIntroduction == null) return -1;
          if (a.briefIntroduction == null) return 1;
          return b.briefIntroduction.localeCompare(a.briefIntroduction);
        };
      case clsTeachingSolutionEN.con_UpdDate:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clsTeachingSolutionEN.con_UpdUser:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsTeachingSolutionEN.con_Memo:
        return (a: clsTeachingSolutionEN, b: clsTeachingSolutionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TeachingSolution]中不存在!(in ${teachingSolution_ConstructorName}.${strThisFuncName})`;
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
export async function TeachingSolution_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsTeachingSolutionEN.con_TeachingSolutionId:
      return (obj: clsTeachingSolutionEN) => {
        return obj.teachingSolutionId === value;
      };
    case clsTeachingSolutionEN.con_TeachingSolutionName:
      return (obj: clsTeachingSolutionEN) => {
        return obj.teachingSolutionName === value;
      };
    case clsTeachingSolutionEN.con_CourseId:
      return (obj: clsTeachingSolutionEN) => {
        return obj.courseId === value;
      };
    case clsTeachingSolutionEN.con_IdTeacher:
      return (obj: clsTeachingSolutionEN) => {
        return obj.idTeacher === value;
      };
    case clsTeachingSolutionEN.con_BriefIntroduction:
      return (obj: clsTeachingSolutionEN) => {
        return obj.briefIntroduction === value;
      };
    case clsTeachingSolutionEN.con_UpdDate:
      return (obj: clsTeachingSolutionEN) => {
        return obj.updDate === value;
      };
    case clsTeachingSolutionEN.con_UpdUser:
      return (obj: clsTeachingSolutionEN) => {
        return obj.updUser === value;
      };
    case clsTeachingSolutionEN.con_Memo:
      return (obj: clsTeachingSolutionEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[TeachingSolution]中不存在!(in ${teachingSolution_ConstructorName}.${strThisFuncName})`;
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
export async function TeachingSolution_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCourseIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCourseIdClassfy) == true) {
    const strMsg = Format('参数:[strCourseIdClassfy]不能为空!(In clsTeachingSolutionWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsTeachingSolutionWApi.funcKey)',
      strCourseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsTeachingSolutionEN.con_TeachingSolutionId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrTeachingSolution = await TeachingSolution_GetObjLstCache(strCourseIdClassfy);
  if (arrTeachingSolution == null) return [];
  let arrTeachingSolutionSel = arrTeachingSolution;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrTeachingSolutionSel.length == 0) return [];
  return arrTeachingSolutionSel.map((x) => x.teachingSolutionId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function TeachingSolution_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
export async function TeachingSolution_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
export async function TeachingSolution_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsTeachingSolutionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

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
      const objTeachingSolution = TeachingSolution_GetObjFromJsonObj(returnObj);
      return objTeachingSolution;
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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
export async function TeachingSolution_GetObjLstClientCache(strCourseId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsTeachingSolutionEN.WhereFormat) == false) {
    strWhereCond = Format(clsTeachingSolutionEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("CourseId='{0}'", strCourseId);
  }
  const strKey = Format('{0}_{1}', clsTeachingSolutionEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsTeachingSolutionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTeachingSolutionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrTeachingSolutionExObjLstCache: Array<clsTeachingSolutionEN> = CacheHelper.Get(strKey);
    const arrTeachingSolutionObjLstT = TeachingSolution_GetObjLstByJSONObjLst(
      arrTeachingSolutionExObjLstCache,
    );
    return arrTeachingSolutionObjLstT;
  }
  try {
    const arrTeachingSolutionExObjLst = await TeachingSolution_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrTeachingSolutionExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTeachingSolutionExObjLst.length,
    );
    console.log(strInfo);
    return arrTeachingSolutionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      teachingSolution_ConstructorName,
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
export async function TeachingSolution_GetObjLstlocalStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsTeachingSolutionEN.WhereFormat) == false) {
    strWhereCond = Format(clsTeachingSolutionEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsTeachingSolutionEN.con_CourseId, strCourseId);
  }
  const strKey = Format('{0}_{1}', clsTeachingSolutionEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsTeachingSolutionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTeachingSolutionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrTeachingSolutionExObjLstCache: Array<clsTeachingSolutionEN> =
      JSON.parse(strTempObjLst);
    const arrTeachingSolutionObjLstT = TeachingSolution_GetObjLstByJSONObjLst(
      arrTeachingSolutionExObjLstCache,
    );
    return arrTeachingSolutionObjLstT;
  }
  try {
    const arrTeachingSolutionExObjLst = await TeachingSolution_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrTeachingSolutionExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTeachingSolutionExObjLst.length,
    );
    console.log(strInfo);
    return arrTeachingSolutionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      teachingSolution_ConstructorName,
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
export async function TeachingSolution_GetObjLstlocalStoragePureCache(strCourseId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsTeachingSolutionEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrTeachingSolutionObjLstCache: Array<clsTeachingSolutionEN> = JSON.parse(strTempObjLst);
    return arrTeachingSolutionObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function TeachingSolution_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsTeachingSolutionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

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
          teachingSolution_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TeachingSolution_GetObjLstByJSONObjLst(returnObjLst);
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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
export async function TeachingSolution_GetObjLstsessionStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsTeachingSolutionEN.WhereFormat) == false) {
    strWhereCond = Format(clsTeachingSolutionEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsTeachingSolutionEN.con_CourseId, strCourseId);
  }
  const strKey = Format('{0}_{1}', clsTeachingSolutionEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsTeachingSolutionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTeachingSolutionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrTeachingSolutionExObjLstCache: Array<clsTeachingSolutionEN> =
      JSON.parse(strTempObjLst);
    const arrTeachingSolutionObjLstT = TeachingSolution_GetObjLstByJSONObjLst(
      arrTeachingSolutionExObjLstCache,
    );
    return arrTeachingSolutionObjLstT;
  }
  try {
    const arrTeachingSolutionExObjLst = await TeachingSolution_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrTeachingSolutionExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTeachingSolutionExObjLst.length,
    );
    console.log(strInfo);
    return arrTeachingSolutionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      teachingSolution_ConstructorName,
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
export async function TeachingSolution_GetObjLstsessionStoragePureCache(strCourseId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsTeachingSolutionEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrTeachingSolutionObjLstCache: Array<clsTeachingSolutionEN> = JSON.parse(strTempObjLst);
    return arrTeachingSolutionObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TeachingSolution_GetObjLstCache(
  strCourseId: string,
): Promise<Array<clsTeachingSolutionEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clsTeachingSolutionWApi.TeachingSolution_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsTeachingSolutionWApi.TeachingSolution_GetObjLstCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrTeachingSolutionObjLstCache;
  switch (clsTeachingSolutionEN.CacheModeId) {
    case '04': //sessionStorage
      arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstsessionStorage(strCourseId);
      break;
    case '03': //localStorage
      arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstlocalStorage(strCourseId);
      break;
    case '02': //ClientCache
      arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstClientCache(strCourseId);
      break;
    default:
      arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstClientCache(strCourseId);
      break;
  }
  return arrTeachingSolutionObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TeachingSolution_GetObjLstPureCache(strCourseId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrTeachingSolutionObjLstCache;
  switch (clsTeachingSolutionEN.CacheModeId) {
    case '04': //sessionStorage
      arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstsessionStoragePureCache(
        strCourseId,
      );
      break;
    case '03': //localStorage
      arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstlocalStoragePureCache(
        strCourseId,
      );
      break;
    case '02': //ClientCache
      arrTeachingSolutionObjLstCache = null;
      break;
    default:
      arrTeachingSolutionObjLstCache = null;
      break;
  }
  return arrTeachingSolutionObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTeachingSolutionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function TeachingSolution_GetSubObjLstCache(
  objTeachingSolutionCond: clsTeachingSolutionEN,
  strCourseId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstCache(strCourseId);
  let arrTeachingSolutionSel = arrTeachingSolutionObjLstCache;
  if (
    objTeachingSolutionCond.sfFldComparisonOp == null ||
    objTeachingSolutionCond.sfFldComparisonOp == ''
  )
    return arrTeachingSolutionSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objTeachingSolutionCond.sfFldComparisonOp,
  );
  //console.log("clsTeachingSolutionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objTeachingSolutionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrTeachingSolutionSel = arrTeachingSolutionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objTeachingSolutionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrTeachingSolutionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objTeachingSolutionCond),
      teachingSolution_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTeachingSolutionEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTeachingSolutionId:关键字列表
 * @returns 对象列表
 **/
export async function TeachingSolution_GetObjLstByTeachingSolutionIdLstAsync(
  arrTeachingSolutionId: Array<string>,
): Promise<Array<clsTeachingSolutionEN>> {
  const strThisFuncName = 'GetObjLstByTeachingSolutionIdLstAsync';
  const strAction = 'GetObjLstByTeachingSolutionIdLst';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTeachingSolutionId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          teachingSolution_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TeachingSolution_GetObjLstByJSONObjLst(returnObjLst);
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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
 * @param arrstrTeachingSolutionIdLst:关键字列表
 * @returns 对象列表
 */
export async function TeachingSolution_GetObjLstByTeachingSolutionIdLstCache(
  arrTeachingSolutionIdLst: Array<string>,
  strCourseId: string,
) {
  const strThisFuncName = 'GetObjLstByTeachingSolutionIdLstCache';
  try {
    const arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstCache(strCourseId);
    const arrTeachingSolutionSel = arrTeachingSolutionObjLstCache.filter(
      (x) => arrTeachingSolutionIdLst.indexOf(x.teachingSolutionId) > -1,
    );
    return arrTeachingSolutionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTeachingSolutionIdLst.join(','),
      teachingSolution_ConstructorName,
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
export async function TeachingSolution_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsTeachingSolutionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

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
          teachingSolution_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TeachingSolution_GetObjLstByJSONObjLst(returnObjLst);
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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
export async function TeachingSolution_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsTeachingSolutionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

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
          teachingSolution_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TeachingSolution_GetObjLstByJSONObjLst(returnObjLst);
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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
export async function TeachingSolution_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsTeachingSolutionEN>();
  const arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstCache(strCourseId);
  if (arrTeachingSolutionObjLstCache.length == 0) return arrTeachingSolutionObjLstCache;
  let arrTeachingSolutionSel = arrTeachingSolutionObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objTeachingSolutionCond = new clsTeachingSolutionEN();
  ObjectAssign(objTeachingSolutionCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsTeachingSolutionWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrTeachingSolutionSel = arrTeachingSolutionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objTeachingSolutionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrTeachingSolutionSel.length == 0) return arrTeachingSolutionSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrTeachingSolutionSel = arrTeachingSolutionSel.sort(
        TeachingSolution_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrTeachingSolutionSel = arrTeachingSolutionSel.sort(objPagerPara.sortFun);
    }
    arrTeachingSolutionSel = arrTeachingSolutionSel.slice(intStart, intEnd);
    return arrTeachingSolutionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      teachingSolution_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTeachingSolutionEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function TeachingSolution_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTeachingSolutionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsTeachingSolutionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

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
          teachingSolution_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TeachingSolution_GetObjLstByJSONObjLst(returnObjLst);
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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
 * @param strTeachingSolutionId:关键字
 * @returns 获取删除的结果
 **/
export async function TeachingSolution_DelRecordAsync(
  strTeachingSolutionId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strTeachingSolutionId);

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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
 * @param arrTeachingSolutionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function TeachingSolution_DelTeachingSolutionsAsync(
  arrTeachingSolutionId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelTeachingSolutionsAsync';
  const strAction = 'DelTeachingSolutions';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTeachingSolutionId, config);
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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
export async function TeachingSolution_DelTeachingSolutionsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelTeachingSolutionsByCondAsync';
  const strAction = 'DelTeachingSolutionsByCond';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
 * @param objTeachingSolutionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TeachingSolution_AddNewRecordAsync(
  objTeachingSolutionEN: clsTeachingSolutionEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objTeachingSolutionEN);
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTeachingSolutionEN, config);
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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
 * @param objTeachingSolutionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TeachingSolution_AddNewRecordWithMaxIdAsync(
  objTeachingSolutionEN: clsTeachingSolutionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTeachingSolutionEN, config);
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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
 * @param objTeachingSolutionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function TeachingSolution_AddNewRecordWithReturnKeyAsync(
  objTeachingSolutionEN: clsTeachingSolutionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTeachingSolutionEN, config);
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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
 * @param objTeachingSolutionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function TeachingSolution_UpdateRecordAsync(
  objTeachingSolutionEN: clsTeachingSolutionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objTeachingSolutionEN.sfUpdFldSetStr === undefined ||
    objTeachingSolutionEN.sfUpdFldSetStr === null ||
    objTeachingSolutionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTeachingSolutionEN.teachingSolutionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTeachingSolutionEN, config);
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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
 * @param objTeachingSolutionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function TeachingSolution_UpdateWithConditionAsync(
  objTeachingSolutionEN: clsTeachingSolutionEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objTeachingSolutionEN.sfUpdFldSetStr === undefined ||
    objTeachingSolutionEN.sfUpdFldSetStr === null ||
    objTeachingSolutionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTeachingSolutionEN.teachingSolutionId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);
  objTeachingSolutionEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTeachingSolutionEN, config);
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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
 * @param objstrTeachingSolutionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function TeachingSolution_IsExistRecordCache(
  objTeachingSolutionCond: clsTeachingSolutionEN,
  strCourseId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstCache(strCourseId);
  if (arrTeachingSolutionObjLstCache == null) return false;
  let arrTeachingSolutionSel = arrTeachingSolutionObjLstCache;
  if (
    objTeachingSolutionCond.sfFldComparisonOp == null ||
    objTeachingSolutionCond.sfFldComparisonOp == ''
  )
    return arrTeachingSolutionSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objTeachingSolutionCond.sfFldComparisonOp,
  );
  //console.log("clsTeachingSolutionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objTeachingSolutionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objTeachingSolutionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrTeachingSolutionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objTeachingSolutionCond),
      teachingSolution_ConstructorName,
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
export async function TeachingSolution_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
 * @param strTeachingSolutionId:所给的关键字
 * @returns 对象
 */
export async function TeachingSolution_IsExistCache(
  strTeachingSolutionId: string,
  strCourseId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstCache(strCourseId);
  if (arrTeachingSolutionObjLstCache == null) return false;
  try {
    const arrTeachingSolutionSel = arrTeachingSolutionObjLstCache.filter(
      (x) => x.teachingSolutionId == strTeachingSolutionId,
    );
    if (arrTeachingSolutionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTeachingSolutionId,
      teachingSolution_ConstructorName,
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
 * @param strTeachingSolutionId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function TeachingSolution_IsExistAsync(
  strTeachingSolutionId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTeachingSolutionId,
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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
export async function TeachingSolution_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
 * @param objTeachingSolutionCond:条件对象
 * @returns 对象列表记录数
 */
export async function TeachingSolution_GetRecCountByCondCache(
  objTeachingSolutionCond: clsTeachingSolutionEN,
  strCourseId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrTeachingSolutionObjLstCache = await TeachingSolution_GetObjLstCache(strCourseId);
  if (arrTeachingSolutionObjLstCache == null) return 0;
  let arrTeachingSolutionSel = arrTeachingSolutionObjLstCache;
  if (
    objTeachingSolutionCond.sfFldComparisonOp == null ||
    objTeachingSolutionCond.sfFldComparisonOp == ''
  )
    return arrTeachingSolutionSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objTeachingSolutionCond.sfFldComparisonOp,
  );
  //console.log("clsTeachingSolutionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objTeachingSolutionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrTeachingSolutionSel = arrTeachingSolutionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objTeachingSolutionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTeachingSolutionSel = arrTeachingSolutionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrTeachingSolutionSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objTeachingSolutionCond),
      teachingSolution_ConstructorName,
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
export async function TeachingSolution_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
export async function TeachingSolution_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(teachingSolution_Controller, strAction);

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
        teachingSolution_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        teachingSolution_ConstructorName,
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
export function TeachingSolution_GetWebApiUrl(strController: string, strAction: string): string {
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
export function TeachingSolution_ReFreshCache(strCourseId: string): void {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空!(In clsTeachingSolutionWApi.clsTeachingSolutionWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsTeachingSolutionWApi.clsTeachingSolutionWApi.ReFreshCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsTeachingSolutionEN._CurrTabName, strCourseId);
  switch (clsTeachingSolutionEN.CacheModeId) {
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
export function TeachingSolution_ReFreshThisCache(strCourseId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsTeachingSolutionEN._CurrTabName, strCourseId);
    switch (clsTeachingSolutionEN.CacheModeId) {
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
export async function TeachingSolution_BindDdl_TeachingSolutionIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strCourseId: string,
) {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clsTeachingSolutionWApi.BindDdl_TeachingSolutionIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsTeachingSolutionWApi.BindDdl_TeachingSolutionIdInDiv)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_TeachingSolutionIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_TeachingSolutionIdInDivCache");
  const arrObjLstSel = await TeachingSolution_GetObjLstCache(strCourseId);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsTeachingSolutionEN.con_TeachingSolutionId,
    clsTeachingSolutionEN.con_TeachingSolutionName,
    '教学方案',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TeachingSolution_CheckPropertyNew(pobjTeachingSolutionEN: clsTeachingSolutionEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjTeachingSolutionEN.teachingSolutionName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[教学方案名称]不能为空(In 教学方案)!(clsTeachingSolutionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.courseId) === true ||
    pobjTeachingSolutionEN.courseId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[课程Id]不能为空(In 教学方案)!(clsTeachingSolutionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.idTeacher) === true ||
    pobjTeachingSolutionEN.idTeacher.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[教师流水号]不能为空(In 教学方案)!(clsTeachingSolutionBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.teachingSolutionId) == false &&
    GetStrLen(pobjTeachingSolutionEN.teachingSolutionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学方案Id(teachingSolutionId)]的长度不能超过8(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.teachingSolutionId)(clsTeachingSolutionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.teachingSolutionName) == false &&
    GetStrLen(pobjTeachingSolutionEN.teachingSolutionName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学方案名称(teachingSolutionName)]的长度不能超过100(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.teachingSolutionName)(clsTeachingSolutionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.courseId) == false &&
    GetStrLen(pobjTeachingSolutionEN.courseId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.courseId)(clsTeachingSolutionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.idTeacher) == false &&
    GetStrLen(pobjTeachingSolutionEN.idTeacher) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教师流水号(idTeacher)]的长度不能超过8(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.idTeacher)(clsTeachingSolutionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.briefIntroduction) == false &&
    GetStrLen(pobjTeachingSolutionEN.briefIntroduction) > 8000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[简介(briefIntroduction)]的长度不能超过8000(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.briefIntroduction)(clsTeachingSolutionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.updDate) == false &&
    GetStrLen(pobjTeachingSolutionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.updDate)(clsTeachingSolutionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.updUser) == false &&
    GetStrLen(pobjTeachingSolutionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.updUser)(clsTeachingSolutionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.memo) == false &&
    GetStrLen(pobjTeachingSolutionEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.memo)(clsTeachingSolutionBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.teachingSolutionId) == false &&
    undefined !== pobjTeachingSolutionEN.teachingSolutionId &&
    tzDataType.isString(pobjTeachingSolutionEN.teachingSolutionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学方案Id(teachingSolutionId)]的值:[$(pobjTeachingSolutionEN.teachingSolutionId)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.teachingSolutionName) == false &&
    undefined !== pobjTeachingSolutionEN.teachingSolutionName &&
    tzDataType.isString(pobjTeachingSolutionEN.teachingSolutionName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学方案名称(teachingSolutionName)]的值:[$(pobjTeachingSolutionEN.teachingSolutionName)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.courseId) == false &&
    undefined !== pobjTeachingSolutionEN.courseId &&
    tzDataType.isString(pobjTeachingSolutionEN.courseId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程Id(courseId)]的值:[$(pobjTeachingSolutionEN.courseId)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.idTeacher) == false &&
    undefined !== pobjTeachingSolutionEN.idTeacher &&
    tzDataType.isString(pobjTeachingSolutionEN.idTeacher) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教师流水号(idTeacher)]的值:[$(pobjTeachingSolutionEN.idTeacher)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.briefIntroduction) == false &&
    undefined !== pobjTeachingSolutionEN.briefIntroduction &&
    tzDataType.isString(pobjTeachingSolutionEN.briefIntroduction) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[简介(briefIntroduction)]的值:[$(pobjTeachingSolutionEN.briefIntroduction)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.updDate) == false &&
    undefined !== pobjTeachingSolutionEN.updDate &&
    tzDataType.isString(pobjTeachingSolutionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjTeachingSolutionEN.updDate)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.updUser) == false &&
    undefined !== pobjTeachingSolutionEN.updUser &&
    tzDataType.isString(pobjTeachingSolutionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjTeachingSolutionEN.updUser)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.memo) == false &&
    undefined !== pobjTeachingSolutionEN.memo &&
    tzDataType.isString(pobjTeachingSolutionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjTeachingSolutionEN.memo)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.courseId) == false &&
    pobjTeachingSolutionEN.courseId != '[nuull]' &&
    GetStrLen(pobjTeachingSolutionEN.courseId) != 8
  ) {
    throw '(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 教学方案)!(clsTeachingSolutionBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.idTeacher) == false &&
    pobjTeachingSolutionEN.idTeacher != '[nuull]' &&
    GetStrLen(pobjTeachingSolutionEN.idTeacher) != 8
  ) {
    throw '(errid:Watl000415)字段[教师流水号]作为外键字段,长度应该为8(In 教学方案)!(clsTeachingSolutionBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TeachingSolution_CheckProperty4Update(
  pobjTeachingSolutionEN: clsTeachingSolutionEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.teachingSolutionId) == false &&
    GetStrLen(pobjTeachingSolutionEN.teachingSolutionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学方案Id(teachingSolutionId)]的长度不能超过8(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.teachingSolutionId)(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.teachingSolutionName) == false &&
    GetStrLen(pobjTeachingSolutionEN.teachingSolutionName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学方案名称(teachingSolutionName)]的长度不能超过100(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.teachingSolutionName)(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.courseId) == false &&
    GetStrLen(pobjTeachingSolutionEN.courseId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.courseId)(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.idTeacher) == false &&
    GetStrLen(pobjTeachingSolutionEN.idTeacher) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教师流水号(idTeacher)]的长度不能超过8(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.idTeacher)(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.briefIntroduction) == false &&
    GetStrLen(pobjTeachingSolutionEN.briefIntroduction) > 8000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[简介(briefIntroduction)]的长度不能超过8000(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.briefIntroduction)(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.updDate) == false &&
    GetStrLen(pobjTeachingSolutionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.updDate)(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.updUser) == false &&
    GetStrLen(pobjTeachingSolutionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.updUser)(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.memo) == false &&
    GetStrLen(pobjTeachingSolutionEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 教学方案(TeachingSolution))!值:$(pobjTeachingSolutionEN.memo)(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.teachingSolutionId) == false &&
    undefined !== pobjTeachingSolutionEN.teachingSolutionId &&
    tzDataType.isString(pobjTeachingSolutionEN.teachingSolutionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学方案Id(teachingSolutionId)]的值:[$(pobjTeachingSolutionEN.teachingSolutionId)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.teachingSolutionName) == false &&
    undefined !== pobjTeachingSolutionEN.teachingSolutionName &&
    tzDataType.isString(pobjTeachingSolutionEN.teachingSolutionName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学方案名称(teachingSolutionName)]的值:[$(pobjTeachingSolutionEN.teachingSolutionName)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.courseId) == false &&
    undefined !== pobjTeachingSolutionEN.courseId &&
    tzDataType.isString(pobjTeachingSolutionEN.courseId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程Id(courseId)]的值:[$(pobjTeachingSolutionEN.courseId)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.idTeacher) == false &&
    undefined !== pobjTeachingSolutionEN.idTeacher &&
    tzDataType.isString(pobjTeachingSolutionEN.idTeacher) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教师流水号(idTeacher)]的值:[$(pobjTeachingSolutionEN.idTeacher)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.briefIntroduction) == false &&
    undefined !== pobjTeachingSolutionEN.briefIntroduction &&
    tzDataType.isString(pobjTeachingSolutionEN.briefIntroduction) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[简介(briefIntroduction)]的值:[$(pobjTeachingSolutionEN.briefIntroduction)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.updDate) == false &&
    undefined !== pobjTeachingSolutionEN.updDate &&
    tzDataType.isString(pobjTeachingSolutionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjTeachingSolutionEN.updDate)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.updUser) == false &&
    undefined !== pobjTeachingSolutionEN.updUser &&
    tzDataType.isString(pobjTeachingSolutionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjTeachingSolutionEN.updUser)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.memo) == false &&
    undefined !== pobjTeachingSolutionEN.memo &&
    tzDataType.isString(pobjTeachingSolutionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjTeachingSolutionEN.memo)], 非法,应该为字符型(In 教学方案(TeachingSolution))!(clsTeachingSolutionBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.courseId) == false &&
    pobjTeachingSolutionEN.courseId != '[nuull]' &&
    GetStrLen(pobjTeachingSolutionEN.courseId) != 8
  ) {
    throw '(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 教学方案)!(clsTeachingSolutionBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjTeachingSolutionEN.idTeacher) == false &&
    pobjTeachingSolutionEN.idTeacher != '[nuull]' &&
    GetStrLen(pobjTeachingSolutionEN.idTeacher) != 8
  ) {
    throw '(errid:Watl000418)字段[教师流水号]作为外键字段,长度应该为8(In 教学方案)!(clsTeachingSolutionBL:CheckPropertyNew)';
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
export function TeachingSolution_GetJSONStrByObj(
  pobjTeachingSolutionEN: clsTeachingSolutionEN,
): string {
  pobjTeachingSolutionEN.sfUpdFldSetStr = pobjTeachingSolutionEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjTeachingSolutionEN);
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
export function TeachingSolution_GetObjLstByJSONStr(strJSON: string): Array<clsTeachingSolutionEN> {
  let arrTeachingSolutionObjLst = new Array<clsTeachingSolutionEN>();
  if (strJSON === '') {
    return arrTeachingSolutionObjLst;
  }
  try {
    arrTeachingSolutionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrTeachingSolutionObjLst;
  }
  return arrTeachingSolutionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrTeachingSolutionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function TeachingSolution_GetObjLstByJSONObjLst(
  arrTeachingSolutionObjLstS: Array<clsTeachingSolutionEN>,
): Array<clsTeachingSolutionEN> {
  const arrTeachingSolutionObjLst = new Array<clsTeachingSolutionEN>();
  for (const objInFor of arrTeachingSolutionObjLstS) {
    const obj1 = TeachingSolution_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrTeachingSolutionObjLst.push(obj1);
  }
  return arrTeachingSolutionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TeachingSolution_GetObjByJSONStr(strJSON: string): clsTeachingSolutionEN {
  let pobjTeachingSolutionEN = new clsTeachingSolutionEN();
  if (strJSON === '') {
    return pobjTeachingSolutionEN;
  }
  try {
    pobjTeachingSolutionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjTeachingSolutionEN;
  }
  return pobjTeachingSolutionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function TeachingSolution_GetCombineCondition(
  objTeachingSolutionCond: clsTeachingSolutionEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objTeachingSolutionCond.dicFldComparisonOp,
      clsTeachingSolutionEN.con_TeachingSolutionId,
    ) == true
  ) {
    const strComparisonOpTeachingSolutionId: string =
      objTeachingSolutionCond.dicFldComparisonOp[clsTeachingSolutionEN.con_TeachingSolutionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTeachingSolutionEN.con_TeachingSolutionId,
      objTeachingSolutionCond.teachingSolutionId,
      strComparisonOpTeachingSolutionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTeachingSolutionCond.dicFldComparisonOp,
      clsTeachingSolutionEN.con_TeachingSolutionName,
    ) == true
  ) {
    const strComparisonOpTeachingSolutionName: string =
      objTeachingSolutionCond.dicFldComparisonOp[clsTeachingSolutionEN.con_TeachingSolutionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTeachingSolutionEN.con_TeachingSolutionName,
      objTeachingSolutionCond.teachingSolutionName,
      strComparisonOpTeachingSolutionName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTeachingSolutionCond.dicFldComparisonOp,
      clsTeachingSolutionEN.con_CourseId,
    ) == true
  ) {
    const strComparisonOpCourseId: string =
      objTeachingSolutionCond.dicFldComparisonOp[clsTeachingSolutionEN.con_CourseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTeachingSolutionEN.con_CourseId,
      objTeachingSolutionCond.courseId,
      strComparisonOpCourseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTeachingSolutionCond.dicFldComparisonOp,
      clsTeachingSolutionEN.con_IdTeacher,
    ) == true
  ) {
    const strComparisonOpIdTeacher: string =
      objTeachingSolutionCond.dicFldComparisonOp[clsTeachingSolutionEN.con_IdTeacher];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTeachingSolutionEN.con_IdTeacher,
      objTeachingSolutionCond.idTeacher,
      strComparisonOpIdTeacher,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTeachingSolutionCond.dicFldComparisonOp,
      clsTeachingSolutionEN.con_BriefIntroduction,
    ) == true
  ) {
    const strComparisonOpBriefIntroduction: string =
      objTeachingSolutionCond.dicFldComparisonOp[clsTeachingSolutionEN.con_BriefIntroduction];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTeachingSolutionEN.con_BriefIntroduction,
      objTeachingSolutionCond.briefIntroduction,
      strComparisonOpBriefIntroduction,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTeachingSolutionCond.dicFldComparisonOp,
      clsTeachingSolutionEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objTeachingSolutionCond.dicFldComparisonOp[clsTeachingSolutionEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTeachingSolutionEN.con_UpdDate,
      objTeachingSolutionCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTeachingSolutionCond.dicFldComparisonOp,
      clsTeachingSolutionEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objTeachingSolutionCond.dicFldComparisonOp[clsTeachingSolutionEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTeachingSolutionEN.con_UpdUser,
      objTeachingSolutionCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTeachingSolutionCond.dicFldComparisonOp,
      clsTeachingSolutionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objTeachingSolutionCond.dicFldComparisonOp[clsTeachingSolutionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTeachingSolutionEN.con_Memo,
      objTeachingSolutionCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TeachingSolution(教学方案),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTeachingSolutionName: 教学方案名称(要求唯一的字段)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TeachingSolution_GetUniCondStr(
  objTeachingSolutionEN: clsTeachingSolutionEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and TeachingSolutionName = '{0}'",
    objTeachingSolutionEN.teachingSolutionName,
  );
  strWhereCond += Format(" and CourseId = '{0}'", objTeachingSolutionEN.courseId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TeachingSolution(教学方案),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTeachingSolutionName: 教学方案名称(要求唯一的字段)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TeachingSolution_GetUniCondStr4Update(
  objTeachingSolutionEN: clsTeachingSolutionEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and TeachingSolutionId <> '{0}'",
    objTeachingSolutionEN.teachingSolutionId,
  );
  strWhereCond += Format(
    " and TeachingSolutionName = '{0}'",
    objTeachingSolutionEN.teachingSolutionName,
  );
  strWhereCond += Format(" and CourseId = '{0}'", objTeachingSolutionEN.courseId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objTeachingSolutionENS:源对象
 * @param objTeachingSolutionENT:目标对象
 */
export function TeachingSolution_CopyObjTo(
  objTeachingSolutionENS: clsTeachingSolutionEN,
  objTeachingSolutionENT: clsTeachingSolutionEN,
): void {
  objTeachingSolutionENT.teachingSolutionId = objTeachingSolutionENS.teachingSolutionId; //教学方案Id
  objTeachingSolutionENT.teachingSolutionName = objTeachingSolutionENS.teachingSolutionName; //教学方案名称
  objTeachingSolutionENT.courseId = objTeachingSolutionENS.courseId; //课程Id
  objTeachingSolutionENT.idTeacher = objTeachingSolutionENS.idTeacher; //教师流水号
  objTeachingSolutionENT.briefIntroduction = objTeachingSolutionENS.briefIntroduction; //简介
  objTeachingSolutionENT.updDate = objTeachingSolutionENS.updDate; //修改日期
  objTeachingSolutionENT.updUser = objTeachingSolutionENS.updUser; //修改人
  objTeachingSolutionENT.memo = objTeachingSolutionENS.memo; //备注
  objTeachingSolutionENT.sfUpdFldSetStr = objTeachingSolutionENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objTeachingSolutionENS:源对象
 * @param objTeachingSolutionENT:目标对象
 */
export function TeachingSolution_GetObjFromJsonObj(
  objTeachingSolutionENS: clsTeachingSolutionEN,
): clsTeachingSolutionEN {
  const objTeachingSolutionENT: clsTeachingSolutionEN = new clsTeachingSolutionEN();
  ObjectAssign(objTeachingSolutionENT, objTeachingSolutionENS);
  return objTeachingSolutionENT;
}
