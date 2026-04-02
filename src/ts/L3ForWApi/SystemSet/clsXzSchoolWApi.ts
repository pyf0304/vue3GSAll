/**
 * 类名:clsXzSchoolWApi
 * 表名:XzSchool(01120029)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:45:39
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 学校(XzSchool)
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
import { clsXzSchoolEN } from '@/ts/L0Entity/SystemSet/clsXzSchoolEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const xzSchool_Controller = 'XzSchoolApi';
export const xzSchool_ConstructorName = 'xzSchool';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdSchool:关键字
 * @returns 对象
 **/
export async function XzSchool_GetObjByIdSchoolAsync(
  strIdSchool: string,
): Promise<clsXzSchoolEN | null> {
  const strThisFuncName = 'GetObjByIdSchoolAsync';

  if (IsNullOrEmpty(strIdSchool) == true) {
    const strMsg = Format('参数:[strIdSchool]不能为空!(In clsXzSchoolWApi.GetObjByIdSchoolAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSchool.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSchool]的长度:[{0}]不正确!(clsXzSchoolWApi.GetObjByIdSchoolAsync)',
      strIdSchool.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdSchool';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdSchool,
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
      const objXzSchool = XzSchool_GetObjFromJsonObj(returnObj);
      return objXzSchool;
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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
 * @param strIdSchool:所给的关键字
 * @returns 对象
 */
export async function XzSchool_GetObjByIdSchoolCache(strIdSchool: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByIdSchoolCache';

  if (IsNullOrEmpty(strIdSchool) == true) {
    const strMsg = Format('参数:[strIdSchool]不能为空!(In clsXzSchoolWApi.GetObjByIdSchoolCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSchool.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSchool]的长度:[{0}]不正确!(clsXzSchoolWApi.GetObjByIdSchoolCache)',
      strIdSchool.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzSchoolObjLstCache = await XzSchool_GetObjLstCache();
  try {
    const arrXzSchoolSel = arrXzSchoolObjLstCache.filter((x) => x.idSchool == strIdSchool);
    let objXzSchool: clsXzSchoolEN;
    if (arrXzSchoolSel.length > 0) {
      objXzSchool = arrXzSchoolSel[0];
      return objXzSchool;
    } else {
      if (bolTryAsyncOnce == true) {
        const objXzSchoolConst = await XzSchool_GetObjByIdSchoolAsync(strIdSchool);
        if (objXzSchoolConst != null) {
          XzSchool_ReFreshThisCache();
          return objXzSchoolConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdSchool,
      xzSchool_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdSchool:所给的关键字
 * @returns 对象
 */
export async function XzSchool_GetObjByIdSchoollocalStorage(strIdSchool: string) {
  const strThisFuncName = 'GetObjByIdSchoollocalStorage';

  if (IsNullOrEmpty(strIdSchool) == true) {
    const strMsg = Format(
      '参数:[strIdSchool]不能为空!(In clsXzSchoolWApi.GetObjByIdSchoollocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSchool.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSchool]的长度:[{0}]不正确!(clsXzSchoolWApi.GetObjByIdSchoollocalStorage)',
      strIdSchool.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsXzSchoolEN._CurrTabName, strIdSchool);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objXzSchoolCache: clsXzSchoolEN = JSON.parse(strTempObj);
    return objXzSchoolCache;
  }
  try {
    const objXzSchool = await XzSchool_GetObjByIdSchoolAsync(strIdSchool);
    if (objXzSchool != null) {
      localStorage.setItem(strKey, JSON.stringify(objXzSchool));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objXzSchool;
    }
    return objXzSchool;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdSchool,
      xzSchool_ConstructorName,
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
 * @param objXzSchool:所给的对象
 * @returns 对象
 */
export async function XzSchool_UpdateObjInLstCache(objXzSchool: clsXzSchoolEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrXzSchoolObjLstCache = await XzSchool_GetObjLstCache();
    const obj = arrXzSchoolObjLstCache.find((x) => x.idSchool == objXzSchool.idSchool);
    if (obj != null) {
      objXzSchool.idSchool = obj.idSchool;
      ObjectAssign(obj, objXzSchool);
    } else {
      arrXzSchoolObjLstCache.push(objXzSchool);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      xzSchool_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdSchool:所给的关键字
 * @returns 对象
 */
export async function XzSchool_GetNameByIdSchoolCache(strIdSchool: string) {
  if (IsNullOrEmpty(strIdSchool) == true) {
    const strMsg = Format('参数:[strIdSchool]不能为空!(In clsXzSchoolWApi.GetNameByIdSchoolCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSchool.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSchool]的长度:[{0}]不正确!(clsXzSchoolWApi.GetNameByIdSchoolCache)',
      strIdSchool.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzSchoolObjLstCache = await XzSchool_GetObjLstCache();
  if (arrXzSchoolObjLstCache == null) return '';
  try {
    const arrXzSchoolSel = arrXzSchoolObjLstCache.filter((x) => x.idSchool == strIdSchool);
    let objXzSchool: clsXzSchoolEN;
    if (arrXzSchoolSel.length > 0) {
      objXzSchool = arrXzSchoolSel[0];
      return objXzSchool.schoolName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdSchool,
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
export async function XzSchool_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsXzSchoolEN.con_IdSchool) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsXzSchoolEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsXzSchoolEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdSchool = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objXzSchool = await XzSchool_GetObjByIdSchoolCache(strIdSchool);
  if (objXzSchool == null) return '';
  if (objXzSchool.GetFldValue(strOutFldName) == null) return '';
  return objXzSchool.GetFldValue(strOutFldName).toString();
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
export function XzSchool_SortFunDefa(a: clsXzSchoolEN, b: clsXzSchoolEN): number {
  return a.idSchool.localeCompare(b.idSchool);
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
export function XzSchool_SortFunDefa2Fld(a: clsXzSchoolEN, b: clsXzSchoolEN): number {
  if (a.schoolId == b.schoolId) return a.schoolName.localeCompare(b.schoolName);
  else return a.schoolId.localeCompare(b.schoolId);
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
export function XzSchool_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsXzSchoolEN.con_IdSchool:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          return a.idSchool.localeCompare(b.idSchool);
        };
      case clsXzSchoolEN.con_SchoolId:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          return a.schoolId.localeCompare(b.schoolId);
        };
      case clsXzSchoolEN.con_SchoolName:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          return a.schoolName.localeCompare(b.schoolName);
        };
      case clsXzSchoolEN.con_SchoolENName:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          if (a.schoolENName == null) return -1;
          if (b.schoolENName == null) return 1;
          return a.schoolENName.localeCompare(b.schoolENName);
        };
      case clsXzSchoolEN.con_SchoolNameA:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          if (a.schoolNameA == null) return -1;
          if (b.schoolNameA == null) return 1;
          return a.schoolNameA.localeCompare(b.schoolNameA);
        };
      case clsXzSchoolEN.con_SchoolTypeId:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          if (a.schoolTypeId == null) return -1;
          if (b.schoolTypeId == null) return 1;
          return a.schoolTypeId.localeCompare(b.schoolTypeId);
        };
      case clsXzSchoolEN.con_IsCurrentUse:
        return (a: clsXzSchoolEN) => {
          if (a.isCurrentUse == true) return 1;
          else return -1;
        };
      case clsXzSchoolEN.con_UpdDate:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsXzSchoolEN.con_UpdUserId:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsXzSchoolEN.con_Memo:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzSchool]中不存在!(in ${xzSchool_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsXzSchoolEN.con_IdSchool:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          return b.idSchool.localeCompare(a.idSchool);
        };
      case clsXzSchoolEN.con_SchoolId:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          return b.schoolId.localeCompare(a.schoolId);
        };
      case clsXzSchoolEN.con_SchoolName:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          return b.schoolName.localeCompare(a.schoolName);
        };
      case clsXzSchoolEN.con_SchoolENName:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          if (b.schoolENName == null) return -1;
          if (a.schoolENName == null) return 1;
          return b.schoolENName.localeCompare(a.schoolENName);
        };
      case clsXzSchoolEN.con_SchoolNameA:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          if (b.schoolNameA == null) return -1;
          if (a.schoolNameA == null) return 1;
          return b.schoolNameA.localeCompare(a.schoolNameA);
        };
      case clsXzSchoolEN.con_SchoolTypeId:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          if (b.schoolTypeId == null) return -1;
          if (a.schoolTypeId == null) return 1;
          return b.schoolTypeId.localeCompare(a.schoolTypeId);
        };
      case clsXzSchoolEN.con_IsCurrentUse:
        return (b: clsXzSchoolEN) => {
          if (b.isCurrentUse == true) return 1;
          else return -1;
        };
      case clsXzSchoolEN.con_UpdDate:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsXzSchoolEN.con_UpdUserId:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsXzSchoolEN.con_Memo:
        return (a: clsXzSchoolEN, b: clsXzSchoolEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzSchool]中不存在!(in ${xzSchool_ConstructorName}.${strThisFuncName})`;
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
export async function XzSchool_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsXzSchoolEN.con_IdSchool:
      return (obj: clsXzSchoolEN) => {
        return obj.idSchool === value;
      };
    case clsXzSchoolEN.con_SchoolId:
      return (obj: clsXzSchoolEN) => {
        return obj.schoolId === value;
      };
    case clsXzSchoolEN.con_SchoolName:
      return (obj: clsXzSchoolEN) => {
        return obj.schoolName === value;
      };
    case clsXzSchoolEN.con_SchoolENName:
      return (obj: clsXzSchoolEN) => {
        return obj.schoolENName === value;
      };
    case clsXzSchoolEN.con_SchoolNameA:
      return (obj: clsXzSchoolEN) => {
        return obj.schoolNameA === value;
      };
    case clsXzSchoolEN.con_SchoolTypeId:
      return (obj: clsXzSchoolEN) => {
        return obj.schoolTypeId === value;
      };
    case clsXzSchoolEN.con_IsCurrentUse:
      return (obj: clsXzSchoolEN) => {
        return obj.isCurrentUse === value;
      };
    case clsXzSchoolEN.con_UpdDate:
      return (obj: clsXzSchoolEN) => {
        return obj.updDate === value;
      };
    case clsXzSchoolEN.con_UpdUserId:
      return (obj: clsXzSchoolEN) => {
        return obj.updUserId === value;
      };
    case clsXzSchoolEN.con_Memo:
      return (obj: clsXzSchoolEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[XzSchool]中不存在!(in ${xzSchool_ConstructorName}.${strThisFuncName})`;
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
export async function XzSchool_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsXzSchoolEN.con_IdSchool) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrXzSchool = await XzSchool_GetObjLstCache();
  if (arrXzSchool == null) return [];
  let arrXzSchoolSel = arrXzSchool;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrXzSchoolSel = arrXzSchoolSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrXzSchoolSel = arrXzSchoolSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrXzSchoolSel = arrXzSchoolSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrXzSchoolSel.length == 0) return [];
  return arrXzSchoolSel.map((x) => x.idSchool);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzSchool_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
export async function XzSchool_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
export async function XzSchool_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsXzSchoolEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

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
      const objXzSchool = XzSchool_GetObjFromJsonObj(returnObj);
      return objXzSchool;
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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
export async function XzSchool_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzSchoolEN._CurrTabName;
  if (IsNullOrEmpty(clsXzSchoolEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzSchoolEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrXzSchoolExObjLstCache: Array<clsXzSchoolEN> = CacheHelper.Get(strKey);
    const arrXzSchoolObjLstT = XzSchool_GetObjLstByJSONObjLst(arrXzSchoolExObjLstCache);
    return arrXzSchoolObjLstT;
  }
  try {
    const arrXzSchoolExObjLst = await XzSchool_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrXzSchoolExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzSchoolExObjLst.length,
    );
    console.log(strInfo);
    return arrXzSchoolExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzSchool_ConstructorName,
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
export async function XzSchool_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzSchoolEN._CurrTabName;
  if (IsNullOrEmpty(clsXzSchoolEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzSchoolEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzSchoolExObjLstCache: Array<clsXzSchoolEN> = JSON.parse(strTempObjLst);
    const arrXzSchoolObjLstT = XzSchool_GetObjLstByJSONObjLst(arrXzSchoolExObjLstCache);
    return arrXzSchoolObjLstT;
  }
  try {
    const arrXzSchoolExObjLst = await XzSchool_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrXzSchoolExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzSchoolExObjLst.length,
    );
    console.log(strInfo);
    return arrXzSchoolExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzSchool_ConstructorName,
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
export async function XzSchool_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzSchoolEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzSchoolObjLstCache: Array<clsXzSchoolEN> = JSON.parse(strTempObjLst);
    return arrXzSchoolObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function XzSchool_GetObjLstAsync(strWhereCond: string): Promise<Array<clsXzSchoolEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

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
          xzSchool_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzSchool_GetObjLstByJSONObjLst(returnObjLst);
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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
export async function XzSchool_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzSchoolEN._CurrTabName;
  if (IsNullOrEmpty(clsXzSchoolEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzSchoolEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzSchoolExObjLstCache: Array<clsXzSchoolEN> = JSON.parse(strTempObjLst);
    const arrXzSchoolObjLstT = XzSchool_GetObjLstByJSONObjLst(arrXzSchoolExObjLstCache);
    return arrXzSchoolObjLstT;
  }
  try {
    const arrXzSchoolExObjLst = await XzSchool_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrXzSchoolExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzSchoolExObjLst.length,
    );
    console.log(strInfo);
    return arrXzSchoolExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzSchool_ConstructorName,
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
export async function XzSchool_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzSchoolEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzSchoolObjLstCache: Array<clsXzSchoolEN> = JSON.parse(strTempObjLst);
    return arrXzSchoolObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzSchool_GetObjLstCache(): Promise<Array<clsXzSchoolEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrXzSchoolObjLstCache;
  switch (clsXzSchoolEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzSchoolObjLstCache = await XzSchool_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrXzSchoolObjLstCache = await XzSchool_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrXzSchoolObjLstCache = await XzSchool_GetObjLstClientCache();
      break;
    default:
      arrXzSchoolObjLstCache = await XzSchool_GetObjLstClientCache();
      break;
  }
  return arrXzSchoolObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzSchool_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrXzSchoolObjLstCache;
  switch (clsXzSchoolEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzSchoolObjLstCache = await XzSchool_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrXzSchoolObjLstCache = await XzSchool_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrXzSchoolObjLstCache = null;
      break;
    default:
      arrXzSchoolObjLstCache = null;
      break;
  }
  return arrXzSchoolObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdSchoolCond:条件对象
 * @returns 对象列表子集
 */
export async function XzSchool_GetSubObjLstCache(objXzSchoolCond: clsXzSchoolEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrXzSchoolObjLstCache = await XzSchool_GetObjLstCache();
  let arrXzSchoolSel = arrXzSchoolObjLstCache;
  if (objXzSchoolCond.sfFldComparisonOp == null || objXzSchoolCond.sfFldComparisonOp == '')
    return arrXzSchoolSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzSchoolCond.sfFldComparisonOp,
  );
  //console.log("clsXzSchoolWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzSchoolCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzSchoolCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrXzSchoolSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzSchoolCond),
      xzSchool_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzSchoolEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdSchool:关键字列表
 * @returns 对象列表
 **/
export async function XzSchool_GetObjLstByIdSchoolLstAsync(
  arrIdSchool: Array<string>,
): Promise<Array<clsXzSchoolEN>> {
  const strThisFuncName = 'GetObjLstByIdSchoolLstAsync';
  const strAction = 'GetObjLstByIdSchoolLst';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdSchool, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          xzSchool_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzSchool_GetObjLstByJSONObjLst(returnObjLst);
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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
 * @param arrstrIdSchoolLst:关键字列表
 * @returns 对象列表
 */
export async function XzSchool_GetObjLstByIdSchoolLstCache(arrIdSchoolLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByIdSchoolLstCache';
  try {
    const arrXzSchoolObjLstCache = await XzSchool_GetObjLstCache();
    const arrXzSchoolSel = arrXzSchoolObjLstCache.filter(
      (x) => arrIdSchoolLst.indexOf(x.idSchool) > -1,
    );
    return arrXzSchoolSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdSchoolLst.join(','),
      xzSchool_ConstructorName,
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
export async function XzSchool_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsXzSchoolEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

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
          xzSchool_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzSchool_GetObjLstByJSONObjLst(returnObjLst);
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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
export async function XzSchool_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsXzSchoolEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

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
          xzSchool_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzSchool_GetObjLstByJSONObjLst(returnObjLst);
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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
export async function XzSchool_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzSchoolEN>();
  const arrXzSchoolObjLstCache = await XzSchool_GetObjLstCache();
  if (arrXzSchoolObjLstCache.length == 0) return arrXzSchoolObjLstCache;
  let arrXzSchoolSel = arrXzSchoolObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objXzSchoolCond = new clsXzSchoolEN();
  ObjectAssign(objXzSchoolCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsXzSchoolWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzSchoolCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrXzSchoolSel.length == 0) return arrXzSchoolSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzSchoolSel = arrXzSchoolSel.sort(XzSchool_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzSchoolSel = arrXzSchoolSel.sort(objPagerPara.sortFun);
    }
    arrXzSchoolSel = arrXzSchoolSel.slice(intStart, intEnd);
    return arrXzSchoolSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzSchool_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzSchoolEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function XzSchool_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzSchoolEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzSchoolEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

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
          xzSchool_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzSchool_GetObjLstByJSONObjLst(returnObjLst);
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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
 * @param strIdSchool:关键字
 * @returns 获取删除的结果
 **/
export async function XzSchool_DelRecordAsync(strIdSchool: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(xzSchool_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdSchool);

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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
 * @param arrIdSchool:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function XzSchool_DelXzSchoolsAsync(arrIdSchool: Array<string>): Promise<number> {
  const strThisFuncName = 'DelXzSchoolsAsync';
  const strAction = 'DelXzSchools';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdSchool, config);
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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
export async function XzSchool_DelXzSchoolsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelXzSchoolsByCondAsync';
  const strAction = 'DelXzSchoolsByCond';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
 * @param objXzSchoolEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzSchool_AddNewRecordAsync(objXzSchoolEN: clsXzSchoolEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objXzSchoolEN.idSchool === null || objXzSchoolEN.idSchool === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objXzSchoolEN);
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzSchoolEN, config);
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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
 * @param objXzSchoolEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzSchool_AddNewRecordWithMaxIdAsync(
  objXzSchoolEN: clsXzSchoolEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzSchoolEN, config);
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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
 * @param objXzSchoolEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function XzSchool_AddNewRecordWithReturnKeyAsync(
  objXzSchoolEN: clsXzSchoolEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzSchoolEN, config);
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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
 * @param objXzSchoolEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function XzSchool_UpdateRecordAsync(objXzSchoolEN: clsXzSchoolEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objXzSchoolEN.sfUpdFldSetStr === undefined ||
    objXzSchoolEN.sfUpdFldSetStr === null ||
    objXzSchoolEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzSchoolEN.idSchool,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzSchoolEN, config);
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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
 * @param objXzSchoolEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzSchool_UpdateWithConditionAsync(
  objXzSchoolEN: clsXzSchoolEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objXzSchoolEN.sfUpdFldSetStr === undefined ||
    objXzSchoolEN.sfUpdFldSetStr === null ||
    objXzSchoolEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzSchoolEN.idSchool,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);
  objXzSchoolEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzSchoolEN, config);
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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
 * @param objstrIdSchoolCond:条件对象
 * @returns 对象列表子集
 */
export async function XzSchool_IsExistRecordCache(objXzSchoolCond: clsXzSchoolEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrXzSchoolObjLstCache = await XzSchool_GetObjLstCache();
  if (arrXzSchoolObjLstCache == null) return false;
  let arrXzSchoolSel = arrXzSchoolObjLstCache;
  if (objXzSchoolCond.sfFldComparisonOp == null || objXzSchoolCond.sfFldComparisonOp == '')
    return arrXzSchoolSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzSchoolCond.sfFldComparisonOp,
  );
  //console.log("clsXzSchoolWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzSchoolCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzSchoolCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrXzSchoolSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objXzSchoolCond),
      xzSchool_ConstructorName,
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
export async function XzSchool_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
 * @param strIdSchool:所给的关键字
 * @returns 对象
 */
export async function XzSchool_IsExistCache(strIdSchool: string) {
  const strThisFuncName = 'IsExistCache';
  const arrXzSchoolObjLstCache = await XzSchool_GetObjLstCache();
  if (arrXzSchoolObjLstCache == null) return false;
  try {
    const arrXzSchoolSel = arrXzSchoolObjLstCache.filter((x) => x.idSchool == strIdSchool);
    if (arrXzSchoolSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdSchool,
      xzSchool_ConstructorName,
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
 * @param strIdSchool:关键字
 * @returns 是否存在?存在返回True
 **/
export async function XzSchool_IsExistAsync(strIdSchool: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdSchool,
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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
export async function XzSchool_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
 * @param objXzSchoolCond:条件对象
 * @returns 对象列表记录数
 */
export async function XzSchool_GetRecCountByCondCache(objXzSchoolCond: clsXzSchoolEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrXzSchoolObjLstCache = await XzSchool_GetObjLstCache();
  if (arrXzSchoolObjLstCache == null) return 0;
  let arrXzSchoolSel = arrXzSchoolObjLstCache;
  if (objXzSchoolCond.sfFldComparisonOp == null || objXzSchoolCond.sfFldComparisonOp == '')
    return arrXzSchoolSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzSchoolCond.sfFldComparisonOp,
  );
  //console.log("clsXzSchoolWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzSchoolCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzSchoolCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzSchoolSel = arrXzSchoolSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzSchoolSel = arrXzSchoolSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrXzSchoolSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzSchoolCond),
      xzSchool_ConstructorName,
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
export async function XzSchool_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(xzSchool_Controller, strAction);

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
        xzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzSchool_ConstructorName,
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
export function XzSchool_GetWebApiUrl(strController: string, strAction: string): string {
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
export function XzSchool_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsXzSchoolEN._CurrTabName;
  switch (clsXzSchoolEN.CacheModeId) {
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
export function XzSchool_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsXzSchoolEN._CurrTabName;
    switch (clsXzSchoolEN.CacheModeId) {
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
export async function XzSchool_BindDdl_id_SchoolInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_id_SchoolInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_id_SchoolInDivCache");
  const arrObjLstSel = await XzSchool_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsXzSchoolEN.con_IdSchool,
    clsXzSchoolEN.con_SchoolName,
    '学校',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzSchool_CheckPropertyNew(pobjXzSchoolEN: clsXzSchoolEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjXzSchoolEN.schoolId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[学校编号]不能为空(In 学校)!(clsXzSchoolBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjXzSchoolEN.schoolName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[学校名称]不能为空(In 学校)!(clsXzSchoolBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjXzSchoolEN.idSchool) == false && GetStrLen(pobjXzSchoolEN.idSchool) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[学校流水号(idSchool)]的长度不能超过4(In 学校(XzSchool))!值:$(pobjXzSchoolEN.idSchool)(clsXzSchoolBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjXzSchoolEN.schoolId) == false && GetStrLen(pobjXzSchoolEN.schoolId) > 10) {
    throw new Error(
      '(errid:Watl000413)字段[学校编号(schoolId)]的长度不能超过10(In 学校(XzSchool))!值:$(pobjXzSchoolEN.schoolId)(clsXzSchoolBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolName) == false &&
    GetStrLen(pobjXzSchoolEN.schoolName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学校名称(schoolName)]的长度不能超过50(In 学校(XzSchool))!值:$(pobjXzSchoolEN.schoolName)(clsXzSchoolBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolENName) == false &&
    GetStrLen(pobjXzSchoolEN.schoolENName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[SchoolENName(schoolENName)]的长度不能超过50(In 学校(XzSchool))!值:$(pobjXzSchoolEN.schoolENName)(clsXzSchoolBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolNameA) == false &&
    GetStrLen(pobjXzSchoolEN.schoolNameA) > 14
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学校简称(schoolNameA)]的长度不能超过14(In 学校(XzSchool))!值:$(pobjXzSchoolEN.schoolNameA)(clsXzSchoolBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolTypeId) == false &&
    GetStrLen(pobjXzSchoolEN.schoolTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学校类型Id(schoolTypeId)]的长度不能超过2(In 学校(XzSchool))!值:$(pobjXzSchoolEN.schoolTypeId)(clsXzSchoolBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjXzSchoolEN.updDate) == false && GetStrLen(pobjXzSchoolEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 学校(XzSchool))!值:$(pobjXzSchoolEN.updDate)(clsXzSchoolBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.updUserId) == false &&
    GetStrLen(pobjXzSchoolEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 学校(XzSchool))!值:$(pobjXzSchoolEN.updUserId)(clsXzSchoolBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjXzSchoolEN.memo) == false && GetStrLen(pobjXzSchoolEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 学校(XzSchool))!值:$(pobjXzSchoolEN.memo)(clsXzSchoolBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzSchoolEN.idSchool) == false &&
    undefined !== pobjXzSchoolEN.idSchool &&
    tzDataType.isString(pobjXzSchoolEN.idSchool) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学校流水号(idSchool)]的值:[$(pobjXzSchoolEN.idSchool)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolId) == false &&
    undefined !== pobjXzSchoolEN.schoolId &&
    tzDataType.isString(pobjXzSchoolEN.schoolId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学校编号(schoolId)]的值:[$(pobjXzSchoolEN.schoolId)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolName) == false &&
    undefined !== pobjXzSchoolEN.schoolName &&
    tzDataType.isString(pobjXzSchoolEN.schoolName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学校名称(schoolName)]的值:[$(pobjXzSchoolEN.schoolName)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolENName) == false &&
    undefined !== pobjXzSchoolEN.schoolENName &&
    tzDataType.isString(pobjXzSchoolEN.schoolENName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[SchoolENName(schoolENName)]的值:[$(pobjXzSchoolEN.schoolENName)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolNameA) == false &&
    undefined !== pobjXzSchoolEN.schoolNameA &&
    tzDataType.isString(pobjXzSchoolEN.schoolNameA) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学校简称(schoolNameA)]的值:[$(pobjXzSchoolEN.schoolNameA)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolTypeId) == false &&
    undefined !== pobjXzSchoolEN.schoolTypeId &&
    tzDataType.isString(pobjXzSchoolEN.schoolTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学校类型Id(schoolTypeId)]的值:[$(pobjXzSchoolEN.schoolTypeId)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjXzSchoolEN.isCurrentUse &&
    undefined !== pobjXzSchoolEN.isCurrentUse &&
    tzDataType.isBoolean(pobjXzSchoolEN.isCurrentUse) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否当前使用(isCurrentUse)]的值:[$(pobjXzSchoolEN.isCurrentUse)], 非法,应该为布尔型(In 学校(XzSchool))!(clsXzSchoolBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.updDate) == false &&
    undefined !== pobjXzSchoolEN.updDate &&
    tzDataType.isString(pobjXzSchoolEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjXzSchoolEN.updDate)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.updUserId) == false &&
    undefined !== pobjXzSchoolEN.updUserId &&
    tzDataType.isString(pobjXzSchoolEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjXzSchoolEN.updUserId)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.memo) == false &&
    undefined !== pobjXzSchoolEN.memo &&
    tzDataType.isString(pobjXzSchoolEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjXzSchoolEN.memo)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzSchool_CheckProperty4Update(pobjXzSchoolEN: clsXzSchoolEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjXzSchoolEN.idSchool) == false && GetStrLen(pobjXzSchoolEN.idSchool) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[学校流水号(idSchool)]的长度不能超过4(In 学校(XzSchool))!值:$(pobjXzSchoolEN.idSchool)(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjXzSchoolEN.schoolId) == false && GetStrLen(pobjXzSchoolEN.schoolId) > 10) {
    throw new Error(
      '(errid:Watl000416)字段[学校编号(schoolId)]的长度不能超过10(In 学校(XzSchool))!值:$(pobjXzSchoolEN.schoolId)(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolName) == false &&
    GetStrLen(pobjXzSchoolEN.schoolName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学校名称(schoolName)]的长度不能超过50(In 学校(XzSchool))!值:$(pobjXzSchoolEN.schoolName)(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolENName) == false &&
    GetStrLen(pobjXzSchoolEN.schoolENName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[SchoolENName(schoolENName)]的长度不能超过50(In 学校(XzSchool))!值:$(pobjXzSchoolEN.schoolENName)(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolNameA) == false &&
    GetStrLen(pobjXzSchoolEN.schoolNameA) > 14
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学校简称(schoolNameA)]的长度不能超过14(In 学校(XzSchool))!值:$(pobjXzSchoolEN.schoolNameA)(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolTypeId) == false &&
    GetStrLen(pobjXzSchoolEN.schoolTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学校类型Id(schoolTypeId)]的长度不能超过2(In 学校(XzSchool))!值:$(pobjXzSchoolEN.schoolTypeId)(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjXzSchoolEN.updDate) == false && GetStrLen(pobjXzSchoolEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 学校(XzSchool))!值:$(pobjXzSchoolEN.updDate)(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.updUserId) == false &&
    GetStrLen(pobjXzSchoolEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 学校(XzSchool))!值:$(pobjXzSchoolEN.updUserId)(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjXzSchoolEN.memo) == false && GetStrLen(pobjXzSchoolEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 学校(XzSchool))!值:$(pobjXzSchoolEN.memo)(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzSchoolEN.idSchool) == false &&
    undefined !== pobjXzSchoolEN.idSchool &&
    tzDataType.isString(pobjXzSchoolEN.idSchool) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学校流水号(idSchool)]的值:[$(pobjXzSchoolEN.idSchool)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolId) == false &&
    undefined !== pobjXzSchoolEN.schoolId &&
    tzDataType.isString(pobjXzSchoolEN.schoolId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学校编号(schoolId)]的值:[$(pobjXzSchoolEN.schoolId)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolName) == false &&
    undefined !== pobjXzSchoolEN.schoolName &&
    tzDataType.isString(pobjXzSchoolEN.schoolName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学校名称(schoolName)]的值:[$(pobjXzSchoolEN.schoolName)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolENName) == false &&
    undefined !== pobjXzSchoolEN.schoolENName &&
    tzDataType.isString(pobjXzSchoolEN.schoolENName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[SchoolENName(schoolENName)]的值:[$(pobjXzSchoolEN.schoolENName)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolNameA) == false &&
    undefined !== pobjXzSchoolEN.schoolNameA &&
    tzDataType.isString(pobjXzSchoolEN.schoolNameA) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学校简称(schoolNameA)]的值:[$(pobjXzSchoolEN.schoolNameA)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.schoolTypeId) == false &&
    undefined !== pobjXzSchoolEN.schoolTypeId &&
    tzDataType.isString(pobjXzSchoolEN.schoolTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学校类型Id(schoolTypeId)]的值:[$(pobjXzSchoolEN.schoolTypeId)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjXzSchoolEN.isCurrentUse &&
    undefined !== pobjXzSchoolEN.isCurrentUse &&
    tzDataType.isBoolean(pobjXzSchoolEN.isCurrentUse) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否当前使用(isCurrentUse)]的值:[$(pobjXzSchoolEN.isCurrentUse)], 非法,应该为布尔型(In 学校(XzSchool))!(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.updDate) == false &&
    undefined !== pobjXzSchoolEN.updDate &&
    tzDataType.isString(pobjXzSchoolEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjXzSchoolEN.updDate)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.updUserId) == false &&
    undefined !== pobjXzSchoolEN.updUserId &&
    tzDataType.isString(pobjXzSchoolEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjXzSchoolEN.updUserId)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzSchoolEN.memo) == false &&
    undefined !== pobjXzSchoolEN.memo &&
    tzDataType.isString(pobjXzSchoolEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjXzSchoolEN.memo)], 非法,应该为字符型(In 学校(XzSchool))!(clsXzSchoolBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjXzSchoolEN.idSchool) === true ||
    pobjXzSchoolEN.idSchool.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[学校流水号]不能为空(In 学校)!(clsXzSchoolBL:CheckProperty4Update)',
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
export function XzSchool_GetJSONStrByObj(pobjXzSchoolEN: clsXzSchoolEN): string {
  pobjXzSchoolEN.sfUpdFldSetStr = pobjXzSchoolEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjXzSchoolEN);
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
export function XzSchool_GetObjLstByJSONStr(strJSON: string): Array<clsXzSchoolEN> {
  let arrXzSchoolObjLst = new Array<clsXzSchoolEN>();
  if (strJSON === '') {
    return arrXzSchoolObjLst;
  }
  try {
    arrXzSchoolObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrXzSchoolObjLst;
  }
  return arrXzSchoolObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrXzSchoolObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function XzSchool_GetObjLstByJSONObjLst(
  arrXzSchoolObjLstS: Array<clsXzSchoolEN>,
): Array<clsXzSchoolEN> {
  const arrXzSchoolObjLst = new Array<clsXzSchoolEN>();
  for (const objInFor of arrXzSchoolObjLstS) {
    const obj1 = XzSchool_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrXzSchoolObjLst.push(obj1);
  }
  return arrXzSchoolObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function XzSchool_GetObjByJSONStr(strJSON: string): clsXzSchoolEN {
  let pobjXzSchoolEN = new clsXzSchoolEN();
  if (strJSON === '') {
    return pobjXzSchoolEN;
  }
  try {
    pobjXzSchoolEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjXzSchoolEN;
  }
  return pobjXzSchoolEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function XzSchool_GetCombineCondition(objXzSchoolCond: clsXzSchoolEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objXzSchoolCond.dicFldComparisonOp,
      clsXzSchoolEN.con_IdSchool,
    ) == true
  ) {
    const strComparisonOpIdSchool: string =
      objXzSchoolCond.dicFldComparisonOp[clsXzSchoolEN.con_IdSchool];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzSchoolEN.con_IdSchool,
      objXzSchoolCond.idSchool,
      strComparisonOpIdSchool,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzSchoolCond.dicFldComparisonOp,
      clsXzSchoolEN.con_SchoolId,
    ) == true
  ) {
    const strComparisonOpSchoolId: string =
      objXzSchoolCond.dicFldComparisonOp[clsXzSchoolEN.con_SchoolId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzSchoolEN.con_SchoolId,
      objXzSchoolCond.schoolId,
      strComparisonOpSchoolId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzSchoolCond.dicFldComparisonOp,
      clsXzSchoolEN.con_SchoolName,
    ) == true
  ) {
    const strComparisonOpSchoolName: string =
      objXzSchoolCond.dicFldComparisonOp[clsXzSchoolEN.con_SchoolName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzSchoolEN.con_SchoolName,
      objXzSchoolCond.schoolName,
      strComparisonOpSchoolName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzSchoolCond.dicFldComparisonOp,
      clsXzSchoolEN.con_SchoolENName,
    ) == true
  ) {
    const strComparisonOpSchoolENName: string =
      objXzSchoolCond.dicFldComparisonOp[clsXzSchoolEN.con_SchoolENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzSchoolEN.con_SchoolENName,
      objXzSchoolCond.schoolENName,
      strComparisonOpSchoolENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzSchoolCond.dicFldComparisonOp,
      clsXzSchoolEN.con_SchoolNameA,
    ) == true
  ) {
    const strComparisonOpSchoolNameA: string =
      objXzSchoolCond.dicFldComparisonOp[clsXzSchoolEN.con_SchoolNameA];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzSchoolEN.con_SchoolNameA,
      objXzSchoolCond.schoolNameA,
      strComparisonOpSchoolNameA,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzSchoolCond.dicFldComparisonOp,
      clsXzSchoolEN.con_SchoolTypeId,
    ) == true
  ) {
    const strComparisonOpSchoolTypeId: string =
      objXzSchoolCond.dicFldComparisonOp[clsXzSchoolEN.con_SchoolTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzSchoolEN.con_SchoolTypeId,
      objXzSchoolCond.schoolTypeId,
      strComparisonOpSchoolTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzSchoolCond.dicFldComparisonOp,
      clsXzSchoolEN.con_IsCurrentUse,
    ) == true
  ) {
    if (objXzSchoolCond.isCurrentUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsXzSchoolEN.con_IsCurrentUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsXzSchoolEN.con_IsCurrentUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzSchoolCond.dicFldComparisonOp,
      clsXzSchoolEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objXzSchoolCond.dicFldComparisonOp[clsXzSchoolEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzSchoolEN.con_UpdDate,
      objXzSchoolCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzSchoolCond.dicFldComparisonOp,
      clsXzSchoolEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objXzSchoolCond.dicFldComparisonOp[clsXzSchoolEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzSchoolEN.con_UpdUserId,
      objXzSchoolCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzSchoolCond.dicFldComparisonOp,
      clsXzSchoolEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objXzSchoolCond.dicFldComparisonOp[clsXzSchoolEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzSchoolEN.con_Memo,
      objXzSchoolCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objXzSchoolENS:源对象
 * @param objXzSchoolENT:目标对象
 */
export function XzSchool_CopyObjTo(
  objXzSchoolENS: clsXzSchoolEN,
  objXzSchoolENT: clsXzSchoolEN,
): void {
  objXzSchoolENT.idSchool = objXzSchoolENS.idSchool; //学校流水号
  objXzSchoolENT.schoolId = objXzSchoolENS.schoolId; //学校编号
  objXzSchoolENT.schoolName = objXzSchoolENS.schoolName; //学校名称
  objXzSchoolENT.schoolENName = objXzSchoolENS.schoolENName; //SchoolENName
  objXzSchoolENT.schoolNameA = objXzSchoolENS.schoolNameA; //学校简称
  objXzSchoolENT.schoolTypeId = objXzSchoolENS.schoolTypeId; //学校类型Id
  objXzSchoolENT.isCurrentUse = objXzSchoolENS.isCurrentUse; //是否当前使用
  objXzSchoolENT.updDate = objXzSchoolENS.updDate; //修改日期
  objXzSchoolENT.updUserId = objXzSchoolENS.updUserId; //修改用户Id
  objXzSchoolENT.memo = objXzSchoolENS.memo; //备注
  objXzSchoolENT.sfUpdFldSetStr = objXzSchoolENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objXzSchoolENS:源对象
 * @param objXzSchoolENT:目标对象
 */
export function XzSchool_GetObjFromJsonObj(objXzSchoolENS: clsXzSchoolEN): clsXzSchoolEN {
  const objXzSchoolENT: clsXzSchoolEN = new clsXzSchoolEN();
  ObjectAssign(objXzSchoolENT, objXzSchoolENS);
  return objXzSchoolENT;
}
