/**
 * 类名:clsvcc_Course_SimWApi
 * 表名:vcc_Course_Sim(01120950)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:44:50
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程管理(CourseManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vcc_Course_Sim(vcc_Course_Sim)
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
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvcc_Course_SimEN } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vcc_Course_Sim_Controller = 'vcc_Course_SimApi';
export const vcc_Course_Sim_ConstructorName = 'vcc_Course_Sim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCourseId:关键字
 * @returns 对象
 **/
export async function vcc_Course_Sim_GetObjByCourseIdAsync(
  strCourseId: string,
): Promise<clsvcc_Course_SimEN | null> {
  const strThisFuncName = 'GetObjByCourseIdAsync';

  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空!(In clsvcc_Course_SimWApi.GetObjByCourseIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsvcc_Course_SimWApi.GetObjByCourseIdAsync)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCourseId';
  const strUrl = GetWebApiUrl(vcc_Course_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseId,
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
      const objvcc_Course_Sim = vcc_Course_Sim_GetObjFromJsonObj(returnObj);
      return objvcc_Course_Sim;
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
        vcc_Course_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_Sim_ConstructorName,
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
 * @param strCourseId:所给的关键字
 * @returns 对象
 */
export async function vcc_Course_Sim_GetObjByCourseIdCache(
  strCourseId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCourseIdCache';

  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空!(In clsvcc_Course_SimWApi.GetObjByCourseIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsvcc_Course_SimWApi.GetObjByCourseIdCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvcc_Course_SimObjLstCache = await vcc_Course_Sim_GetObjLstCache();
  try {
    const arrvcc_Course_SimSel = arrvcc_Course_SimObjLstCache.filter(
      (x) => x.courseId == strCourseId,
    );
    let objvcc_Course_Sim: clsvcc_Course_SimEN;
    if (arrvcc_Course_SimSel.length > 0) {
      objvcc_Course_Sim = arrvcc_Course_SimSel[0];
      return objvcc_Course_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvcc_Course_SimConst = await vcc_Course_Sim_GetObjByCourseIdAsync(strCourseId);
        if (objvcc_Course_SimConst != null) {
          vcc_Course_Sim_ReFreshThisCache();
          return objvcc_Course_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCourseId,
      vcc_Course_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCourseId:所给的关键字
 * @returns 对象
 */
export async function vcc_Course_Sim_GetObjByCourseIdlocalStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjByCourseIdlocalStorage';

  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空!(In clsvcc_Course_SimWApi.GetObjByCourseIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsvcc_Course_SimWApi.GetObjByCourseIdlocalStorage)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvcc_Course_SimEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvcc_Course_SimCache: clsvcc_Course_SimEN = JSON.parse(strTempObj);
    return objvcc_Course_SimCache;
  }
  try {
    const objvcc_Course_Sim = await vcc_Course_Sim_GetObjByCourseIdAsync(strCourseId);
    if (objvcc_Course_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvcc_Course_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvcc_Course_Sim;
    }
    return objvcc_Course_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCourseId,
      vcc_Course_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCourseId:所给的关键字
 * @returns 对象
 */
export async function vcc_Course_Sim_GetNameByCourseIdCache(strCourseId: string) {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空!(In clsvcc_Course_SimWApi.GetNameByCourseIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsvcc_Course_SimWApi.GetNameByCourseIdCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvcc_Course_SimObjLstCache = await vcc_Course_Sim_GetObjLstCache();
  if (arrvcc_Course_SimObjLstCache == null) return '';
  try {
    const arrvcc_Course_SimSel = arrvcc_Course_SimObjLstCache.filter(
      (x) => x.courseId == strCourseId,
    );
    let objvcc_Course_Sim: clsvcc_Course_SimEN;
    if (arrvcc_Course_SimSel.length > 0) {
      objvcc_Course_Sim = arrvcc_Course_SimSel[0];
      return objvcc_Course_Sim.courseName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strCourseId,
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
export async function vcc_Course_Sim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvcc_Course_SimEN.con_CourseId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvcc_Course_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvcc_Course_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCourseId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvcc_Course_Sim = await vcc_Course_Sim_GetObjByCourseIdCache(strCourseId);
  if (objvcc_Course_Sim == null) return '';
  if (objvcc_Course_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvcc_Course_Sim.GetFldValue(strOutFldName).toString();
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
export function vcc_Course_Sim_SortFunDefa(a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN): number {
  return a.courseId.localeCompare(b.courseId);
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
export function vcc_Course_Sim_SortFunDefa2Fld(
  a: clsvcc_Course_SimEN,
  b: clsvcc_Course_SimEN,
): number {
  if (a.courseCode == b.courseCode) return a.courseName.localeCompare(b.courseName);
  else return a.courseCode.localeCompare(b.courseCode);
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
export function vcc_Course_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvcc_Course_SimEN.con_CourseId:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          return a.courseId.localeCompare(b.courseId);
        };
      case clsvcc_Course_SimEN.con_CourseCode:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          if (a.courseCode == null) return -1;
          if (b.courseCode == null) return 1;
          return a.courseCode.localeCompare(b.courseCode);
        };
      case clsvcc_Course_SimEN.con_CourseName:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          if (a.courseName == null) return -1;
          if (b.courseName == null) return 1;
          return a.courseName.localeCompare(b.courseName);
        };
      case clsvcc_Course_SimEN.con_OrderNum:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvcc_Course_SimEN.con_CourseTypeId:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          return a.courseTypeId.localeCompare(b.courseTypeId);
        };
      case clsvcc_Course_SimEN.con_IdXzMajor:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          return a.idXzMajor.localeCompare(b.idXzMajor);
        };
      case clsvcc_Course_SimEN.con_IdXzCollege:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          if (a.idXzCollege == null) return -1;
          if (b.idXzCollege == null) return 1;
          return a.idXzCollege.localeCompare(b.idXzCollege);
        };
      case clsvcc_Course_SimEN.con_ExcellentTypeId:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          if (a.excellentTypeId == null) return -1;
          if (b.excellentTypeId == null) return 1;
          return a.excellentTypeId.localeCompare(b.excellentTypeId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vcc_Course_Sim]中不存在!(in ${vcc_Course_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvcc_Course_SimEN.con_CourseId:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          return b.courseId.localeCompare(a.courseId);
        };
      case clsvcc_Course_SimEN.con_CourseCode:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          if (b.courseCode == null) return -1;
          if (a.courseCode == null) return 1;
          return b.courseCode.localeCompare(a.courseCode);
        };
      case clsvcc_Course_SimEN.con_CourseName:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          if (b.courseName == null) return -1;
          if (a.courseName == null) return 1;
          return b.courseName.localeCompare(a.courseName);
        };
      case clsvcc_Course_SimEN.con_OrderNum:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvcc_Course_SimEN.con_CourseTypeId:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          return b.courseTypeId.localeCompare(a.courseTypeId);
        };
      case clsvcc_Course_SimEN.con_IdXzMajor:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          return b.idXzMajor.localeCompare(a.idXzMajor);
        };
      case clsvcc_Course_SimEN.con_IdXzCollege:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          if (b.idXzCollege == null) return -1;
          if (a.idXzCollege == null) return 1;
          return b.idXzCollege.localeCompare(a.idXzCollege);
        };
      case clsvcc_Course_SimEN.con_ExcellentTypeId:
        return (a: clsvcc_Course_SimEN, b: clsvcc_Course_SimEN) => {
          if (b.excellentTypeId == null) return -1;
          if (a.excellentTypeId == null) return 1;
          return b.excellentTypeId.localeCompare(a.excellentTypeId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vcc_Course_Sim]中不存在!(in ${vcc_Course_Sim_ConstructorName}.${strThisFuncName})`;
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
export async function vcc_Course_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvcc_Course_SimEN.con_CourseId:
      return (obj: clsvcc_Course_SimEN) => {
        return obj.courseId === value;
      };
    case clsvcc_Course_SimEN.con_CourseCode:
      return (obj: clsvcc_Course_SimEN) => {
        return obj.courseCode === value;
      };
    case clsvcc_Course_SimEN.con_CourseName:
      return (obj: clsvcc_Course_SimEN) => {
        return obj.courseName === value;
      };
    case clsvcc_Course_SimEN.con_OrderNum:
      return (obj: clsvcc_Course_SimEN) => {
        return obj.orderNum === value;
      };
    case clsvcc_Course_SimEN.con_CourseTypeId:
      return (obj: clsvcc_Course_SimEN) => {
        return obj.courseTypeId === value;
      };
    case clsvcc_Course_SimEN.con_IdXzMajor:
      return (obj: clsvcc_Course_SimEN) => {
        return obj.idXzMajor === value;
      };
    case clsvcc_Course_SimEN.con_IdXzCollege:
      return (obj: clsvcc_Course_SimEN) => {
        return obj.idXzCollege === value;
      };
    case clsvcc_Course_SimEN.con_ExcellentTypeId:
      return (obj: clsvcc_Course_SimEN) => {
        return obj.excellentTypeId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vcc_Course_Sim]中不存在!(in ${vcc_Course_Sim_ConstructorName}.${strThisFuncName})`;
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
export async function vcc_Course_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvcc_Course_SimEN.con_CourseId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvcc_Course_Sim = await vcc_Course_Sim_GetObjLstCache();
  if (arrvcc_Course_Sim == null) return [];
  let arrvcc_Course_SimSel = arrvcc_Course_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvcc_Course_SimSel.length == 0) return [];
  return arrvcc_Course_SimSel.map((x) => x.courseId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vcc_Course_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vcc_Course_Sim_Controller, strAction);

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
        vcc_Course_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_Sim_ConstructorName,
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
export async function vcc_Course_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vcc_Course_Sim_Controller, strAction);

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
        vcc_Course_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_Sim_ConstructorName,
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
export async function vcc_Course_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvcc_Course_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vcc_Course_Sim_Controller, strAction);

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
      const objvcc_Course_Sim = vcc_Course_Sim_GetObjFromJsonObj(returnObj);
      return objvcc_Course_Sim;
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
        vcc_Course_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_Sim_ConstructorName,
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
export async function vcc_Course_Sim_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvcc_Course_SimEN._CurrTabName;
  if (IsNullOrEmpty(clsvcc_Course_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvcc_Course_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvcc_Course_SimExObjLstCache: Array<clsvcc_Course_SimEN> = CacheHelper.Get(strKey);
    const arrvcc_Course_SimObjLstT = vcc_Course_Sim_GetObjLstByJSONObjLst(
      arrvcc_Course_SimExObjLstCache,
    );
    return arrvcc_Course_SimObjLstT;
  }
  try {
    const arrvcc_Course_SimExObjLst = await vcc_Course_Sim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvcc_Course_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvcc_Course_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvcc_Course_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vcc_Course_Sim_ConstructorName,
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
export async function vcc_Course_Sim_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvcc_Course_SimEN._CurrTabName;
  if (IsNullOrEmpty(clsvcc_Course_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvcc_Course_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvcc_Course_SimExObjLstCache: Array<clsvcc_Course_SimEN> = JSON.parse(strTempObjLst);
    const arrvcc_Course_SimObjLstT = vcc_Course_Sim_GetObjLstByJSONObjLst(
      arrvcc_Course_SimExObjLstCache,
    );
    return arrvcc_Course_SimObjLstT;
  }
  try {
    const arrvcc_Course_SimExObjLst = await vcc_Course_Sim_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvcc_Course_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvcc_Course_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvcc_Course_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vcc_Course_Sim_ConstructorName,
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
export async function vcc_Course_Sim_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvcc_Course_SimEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvcc_Course_SimObjLstCache: Array<clsvcc_Course_SimEN> = JSON.parse(strTempObjLst);
    return arrvcc_Course_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vcc_Course_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvcc_Course_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vcc_Course_Sim_Controller, strAction);

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
          vcc_Course_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vcc_Course_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vcc_Course_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_Sim_ConstructorName,
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
export async function vcc_Course_Sim_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvcc_Course_SimEN._CurrTabName;
  if (IsNullOrEmpty(clsvcc_Course_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvcc_Course_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvcc_Course_SimExObjLstCache: Array<clsvcc_Course_SimEN> = JSON.parse(strTempObjLst);
    const arrvcc_Course_SimObjLstT = vcc_Course_Sim_GetObjLstByJSONObjLst(
      arrvcc_Course_SimExObjLstCache,
    );
    return arrvcc_Course_SimObjLstT;
  }
  try {
    const arrvcc_Course_SimExObjLst = await vcc_Course_Sim_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvcc_Course_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvcc_Course_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvcc_Course_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vcc_Course_Sim_ConstructorName,
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
export async function vcc_Course_Sim_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvcc_Course_SimEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvcc_Course_SimObjLstCache: Array<clsvcc_Course_SimEN> = JSON.parse(strTempObjLst);
    return arrvcc_Course_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vcc_Course_Sim_GetObjLstCache(): Promise<Array<clsvcc_Course_SimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvcc_Course_SimObjLstCache;
  switch (clsvcc_Course_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvcc_Course_SimObjLstCache = await vcc_Course_Sim_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvcc_Course_SimObjLstCache = await vcc_Course_Sim_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvcc_Course_SimObjLstCache = await vcc_Course_Sim_GetObjLstClientCache();
      break;
    default:
      arrvcc_Course_SimObjLstCache = await vcc_Course_Sim_GetObjLstClientCache();
      break;
  }
  return arrvcc_Course_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vcc_Course_Sim_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvcc_Course_SimObjLstCache;
  switch (clsvcc_Course_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvcc_Course_SimObjLstCache = await vcc_Course_Sim_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvcc_Course_SimObjLstCache = await vcc_Course_Sim_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvcc_Course_SimObjLstCache = null;
      break;
    default:
      arrvcc_Course_SimObjLstCache = null;
      break;
  }
  return arrvcc_Course_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCourseIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vcc_Course_Sim_GetSubObjLstCache(objvcc_Course_SimCond: clsvcc_Course_SimEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvcc_Course_SimObjLstCache = await vcc_Course_Sim_GetObjLstCache();
  let arrvcc_Course_SimSel = arrvcc_Course_SimObjLstCache;
  if (
    objvcc_Course_SimCond.sfFldComparisonOp == null ||
    objvcc_Course_SimCond.sfFldComparisonOp == ''
  )
    return arrvcc_Course_SimSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvcc_Course_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvcc_Course_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvcc_Course_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvcc_Course_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvcc_Course_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvcc_Course_SimCond),
      vcc_Course_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvcc_Course_SimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCourseId:关键字列表
 * @returns 对象列表
 **/
export async function vcc_Course_Sim_GetObjLstByCourseIdLstAsync(
  arrCourseId: Array<string>,
): Promise<Array<clsvcc_Course_SimEN>> {
  const strThisFuncName = 'GetObjLstByCourseIdLstAsync';
  const strAction = 'GetObjLstByCourseIdLst';
  const strUrl = GetWebApiUrl(vcc_Course_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCourseId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vcc_Course_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vcc_Course_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vcc_Course_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_Sim_ConstructorName,
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
 * @param arrstrCourseIdLst:关键字列表
 * @returns 对象列表
 */
export async function vcc_Course_Sim_GetObjLstByCourseIdLstCache(arrCourseIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByCourseIdLstCache';
  try {
    const arrvcc_Course_SimObjLstCache = await vcc_Course_Sim_GetObjLstCache();
    const arrvcc_Course_SimSel = arrvcc_Course_SimObjLstCache.filter(
      (x) => arrCourseIdLst.indexOf(x.courseId) > -1,
    );
    return arrvcc_Course_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCourseIdLst.join(','),
      vcc_Course_Sim_ConstructorName,
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
export async function vcc_Course_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvcc_Course_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vcc_Course_Sim_Controller, strAction);

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
          vcc_Course_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vcc_Course_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vcc_Course_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_Sim_ConstructorName,
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
export async function vcc_Course_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvcc_Course_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vcc_Course_Sim_Controller, strAction);

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
          vcc_Course_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vcc_Course_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vcc_Course_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_Sim_ConstructorName,
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
export async function vcc_Course_Sim_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvcc_Course_SimEN>();
  const arrvcc_Course_SimObjLstCache = await vcc_Course_Sim_GetObjLstCache();
  if (arrvcc_Course_SimObjLstCache.length == 0) return arrvcc_Course_SimObjLstCache;
  let arrvcc_Course_SimSel = arrvcc_Course_SimObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvcc_Course_SimCond = new clsvcc_Course_SimEN();
  ObjectAssign(objvcc_Course_SimCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvcc_Course_SimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvcc_Course_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvcc_Course_SimSel.length == 0) return arrvcc_Course_SimSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvcc_Course_SimSel = arrvcc_Course_SimSel.sort(
        vcc_Course_Sim_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvcc_Course_SimSel = arrvcc_Course_SimSel.sort(objPagerPara.sortFun);
    }
    arrvcc_Course_SimSel = arrvcc_Course_SimSel.slice(intStart, intEnd);
    return arrvcc_Course_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vcc_Course_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvcc_Course_SimEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vcc_Course_Sim_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvcc_Course_SimEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvcc_Course_SimEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vcc_Course_Sim_Controller, strAction);

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
          vcc_Course_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vcc_Course_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vcc_Course_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_Sim_ConstructorName,
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
 * @param objstrCourseIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vcc_Course_Sim_IsExistRecordCache(
  objvcc_Course_SimCond: clsvcc_Course_SimEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvcc_Course_SimObjLstCache = await vcc_Course_Sim_GetObjLstCache();
  if (arrvcc_Course_SimObjLstCache == null) return false;
  let arrvcc_Course_SimSel = arrvcc_Course_SimObjLstCache;
  if (
    objvcc_Course_SimCond.sfFldComparisonOp == null ||
    objvcc_Course_SimCond.sfFldComparisonOp == ''
  )
    return arrvcc_Course_SimSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvcc_Course_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvcc_Course_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvcc_Course_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvcc_Course_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvcc_Course_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvcc_Course_SimCond),
      vcc_Course_Sim_ConstructorName,
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
export async function vcc_Course_Sim_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vcc_Course_Sim_Controller, strAction);

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
        vcc_Course_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_Sim_ConstructorName,
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
 * @param strCourseId:所给的关键字
 * @returns 对象
 */
export async function vcc_Course_Sim_IsExistCache(strCourseId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvcc_Course_SimObjLstCache = await vcc_Course_Sim_GetObjLstCache();
  if (arrvcc_Course_SimObjLstCache == null) return false;
  try {
    const arrvcc_Course_SimSel = arrvcc_Course_SimObjLstCache.filter(
      (x) => x.courseId == strCourseId,
    );
    if (arrvcc_Course_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCourseId,
      vcc_Course_Sim_ConstructorName,
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
 * @param strCourseId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vcc_Course_Sim_IsExistAsync(strCourseId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vcc_Course_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseId,
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
        vcc_Course_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_Sim_ConstructorName,
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
export async function vcc_Course_Sim_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vcc_Course_Sim_Controller, strAction);

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
        vcc_Course_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_Sim_ConstructorName,
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
 * @param objvcc_Course_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vcc_Course_Sim_GetRecCountByCondCache(
  objvcc_Course_SimCond: clsvcc_Course_SimEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvcc_Course_SimObjLstCache = await vcc_Course_Sim_GetObjLstCache();
  if (arrvcc_Course_SimObjLstCache == null) return 0;
  let arrvcc_Course_SimSel = arrvcc_Course_SimObjLstCache;
  if (
    objvcc_Course_SimCond.sfFldComparisonOp == null ||
    objvcc_Course_SimCond.sfFldComparisonOp == ''
  )
    return arrvcc_Course_SimSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvcc_Course_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvcc_Course_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvcc_Course_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvcc_Course_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvcc_Course_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvcc_Course_SimCond),
      vcc_Course_Sim_ConstructorName,
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
export function vcc_Course_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vcc_Course_Sim_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvcc_Course_SimEN._CurrTabName;
    switch (clsvcc_Course_SimEN.CacheModeId) {
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
export async function vcc_Course_Sim_BindDdl_CourseIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CourseIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CourseIdInDivCache");
  const arrObjLstSel = await vcc_Course_Sim_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvcc_Course_SimEN.con_CourseId,
    clsvcc_Course_SimEN.con_CourseName,
    'vcc_Course_Sim',
  );
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vcc_Course_Sim_GetJSONStrByObj(pobjvcc_Course_SimEN: clsvcc_Course_SimEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvcc_Course_SimEN);
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
export function vcc_Course_Sim_GetObjLstByJSONStr(strJSON: string): Array<clsvcc_Course_SimEN> {
  let arrvcc_Course_SimObjLst = new Array<clsvcc_Course_SimEN>();
  if (strJSON === '') {
    return arrvcc_Course_SimObjLst;
  }
  try {
    arrvcc_Course_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvcc_Course_SimObjLst;
  }
  return arrvcc_Course_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvcc_Course_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vcc_Course_Sim_GetObjLstByJSONObjLst(
  arrvcc_Course_SimObjLstS: Array<clsvcc_Course_SimEN>,
): Array<clsvcc_Course_SimEN> {
  const arrvcc_Course_SimObjLst = new Array<clsvcc_Course_SimEN>();
  for (const objInFor of arrvcc_Course_SimObjLstS) {
    const obj1 = vcc_Course_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvcc_Course_SimObjLst.push(obj1);
  }
  return arrvcc_Course_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vcc_Course_Sim_GetObjByJSONStr(strJSON: string): clsvcc_Course_SimEN {
  let pobjvcc_Course_SimEN = new clsvcc_Course_SimEN();
  if (strJSON === '') {
    return pobjvcc_Course_SimEN;
  }
  try {
    pobjvcc_Course_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvcc_Course_SimEN;
  }
  return pobjvcc_Course_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vcc_Course_Sim_GetCombineCondition(
  objvcc_Course_SimCond: clsvcc_Course_SimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_Course_SimCond.dicFldComparisonOp,
      clsvcc_Course_SimEN.con_CourseId,
    ) == true
  ) {
    const strComparisonOpCourseId: string =
      objvcc_Course_SimCond.dicFldComparisonOp[clsvcc_Course_SimEN.con_CourseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_Course_SimEN.con_CourseId,
      objvcc_Course_SimCond.courseId,
      strComparisonOpCourseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_Course_SimCond.dicFldComparisonOp,
      clsvcc_Course_SimEN.con_CourseCode,
    ) == true
  ) {
    const strComparisonOpCourseCode: string =
      objvcc_Course_SimCond.dicFldComparisonOp[clsvcc_Course_SimEN.con_CourseCode];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_Course_SimEN.con_CourseCode,
      objvcc_Course_SimCond.courseCode,
      strComparisonOpCourseCode,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_Course_SimCond.dicFldComparisonOp,
      clsvcc_Course_SimEN.con_CourseName,
    ) == true
  ) {
    const strComparisonOpCourseName: string =
      objvcc_Course_SimCond.dicFldComparisonOp[clsvcc_Course_SimEN.con_CourseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_Course_SimEN.con_CourseName,
      objvcc_Course_SimCond.courseName,
      strComparisonOpCourseName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_Course_SimCond.dicFldComparisonOp,
      clsvcc_Course_SimEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvcc_Course_SimCond.dicFldComparisonOp[clsvcc_Course_SimEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvcc_Course_SimEN.con_OrderNum,
      objvcc_Course_SimCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_Course_SimCond.dicFldComparisonOp,
      clsvcc_Course_SimEN.con_CourseTypeId,
    ) == true
  ) {
    const strComparisonOpCourseTypeId: string =
      objvcc_Course_SimCond.dicFldComparisonOp[clsvcc_Course_SimEN.con_CourseTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_Course_SimEN.con_CourseTypeId,
      objvcc_Course_SimCond.courseTypeId,
      strComparisonOpCourseTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_Course_SimCond.dicFldComparisonOp,
      clsvcc_Course_SimEN.con_IdXzMajor,
    ) == true
  ) {
    const strComparisonOpIdXzMajor: string =
      objvcc_Course_SimCond.dicFldComparisonOp[clsvcc_Course_SimEN.con_IdXzMajor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_Course_SimEN.con_IdXzMajor,
      objvcc_Course_SimCond.idXzMajor,
      strComparisonOpIdXzMajor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_Course_SimCond.dicFldComparisonOp,
      clsvcc_Course_SimEN.con_IdXzCollege,
    ) == true
  ) {
    const strComparisonOpIdXzCollege: string =
      objvcc_Course_SimCond.dicFldComparisonOp[clsvcc_Course_SimEN.con_IdXzCollege];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_Course_SimEN.con_IdXzCollege,
      objvcc_Course_SimCond.idXzCollege,
      strComparisonOpIdXzCollege,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_Course_SimCond.dicFldComparisonOp,
      clsvcc_Course_SimEN.con_ExcellentTypeId,
    ) == true
  ) {
    const strComparisonOpExcellentTypeId: string =
      objvcc_Course_SimCond.dicFldComparisonOp[clsvcc_Course_SimEN.con_ExcellentTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_Course_SimEN.con_ExcellentTypeId,
      objvcc_Course_SimCond.excellentTypeId,
      strComparisonOpExcellentTypeId,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvcc_Course_SimENS:源对象
 * @param objvcc_Course_SimENT:目标对象
 */
export function vcc_Course_Sim_CopyObjTo(
  objvcc_Course_SimENS: clsvcc_Course_SimEN,
  objvcc_Course_SimENT: clsvcc_Course_SimEN,
): void {
  objvcc_Course_SimENT.courseId = objvcc_Course_SimENS.courseId; //课程Id
  objvcc_Course_SimENT.courseCode = objvcc_Course_SimENS.courseCode; //课程代码
  objvcc_Course_SimENT.courseName = objvcc_Course_SimENS.courseName; //课程名称
  objvcc_Course_SimENT.orderNum = objvcc_Course_SimENS.orderNum; //序号
  objvcc_Course_SimENT.courseTypeId = objvcc_Course_SimENS.courseTypeId; //课程类型ID
  objvcc_Course_SimENT.idXzMajor = objvcc_Course_SimENS.idXzMajor; //专业流水号
  objvcc_Course_SimENT.idXzCollege = objvcc_Course_SimENS.idXzCollege; //学院流水号
  objvcc_Course_SimENT.excellentTypeId = objvcc_Course_SimENS.excellentTypeId; //精品课程类型Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvcc_Course_SimENS:源对象
 * @param objvcc_Course_SimENT:目标对象
 */
export function vcc_Course_Sim_GetObjFromJsonObj(
  objvcc_Course_SimENS: clsvcc_Course_SimEN,
): clsvcc_Course_SimEN {
  const objvcc_Course_SimENT: clsvcc_Course_SimEN = new clsvcc_Course_SimEN();
  ObjectAssign(objvcc_Course_SimENT, objvcc_Course_SimENS);
  return objvcc_Course_SimENT;
}
