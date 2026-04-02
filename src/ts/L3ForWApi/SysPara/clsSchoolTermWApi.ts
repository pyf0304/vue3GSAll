/**
 * 类名:clsSchoolTermWApi
 * 表名:SchoolTerm(01120135)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:06
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 学期(SchoolTerm)
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
import { clsSchoolTermEN } from '@/ts/L0Entity/SysPara/clsSchoolTermEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const schoolTerm_Controller = 'SchoolTermApi';
export const schoolTerm_ConstructorName = 'schoolTerm';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSchoolTerm:关键字
 * @returns 对象
 **/
export async function SchoolTerm_GetObjBySchoolTermAsync(
  strSchoolTerm: string,
): Promise<clsSchoolTermEN | null> {
  const strThisFuncName = 'GetObjBySchoolTermAsync';

  if (IsNullOrEmpty(strSchoolTerm) == true) {
    const strMsg = Format(
      '参数:[strSchoolTerm]不能为空!(In clsSchoolTermWApi.GetObjBySchoolTermAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSchoolTerm.length != 1) {
    const strMsg = Format(
      '缓存分类变量:[strSchoolTerm]的长度:[{0}]不正确!(clsSchoolTermWApi.GetObjBySchoolTermAsync)',
      strSchoolTerm.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBySchoolTerm';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSchoolTerm,
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
      const objSchoolTerm = SchoolTerm_GetObjFromJsonObj(returnObj);
      return objSchoolTerm;
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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
 * @param strSchoolTerm:所给的关键字
 * @returns 对象
 */
export async function SchoolTerm_GetObjBySchoolTermCache(
  strSchoolTerm: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBySchoolTermCache';

  if (IsNullOrEmpty(strSchoolTerm) == true) {
    const strMsg = Format(
      '参数:[strSchoolTerm]不能为空!(In clsSchoolTermWApi.GetObjBySchoolTermCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSchoolTerm.length != 1) {
    const strMsg = Format(
      '缓存分类变量:[strSchoolTerm]的长度:[{0}]不正确!(clsSchoolTermWApi.GetObjBySchoolTermCache)',
      strSchoolTerm.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstCache();
  try {
    const arrSchoolTermSel = arrSchoolTermObjLstCache.filter((x) => x.schoolTerm == strSchoolTerm);
    let objSchoolTerm: clsSchoolTermEN;
    if (arrSchoolTermSel.length > 0) {
      objSchoolTerm = arrSchoolTermSel[0];
      return objSchoolTerm;
    } else {
      if (bolTryAsyncOnce == true) {
        const objSchoolTermConst = await SchoolTerm_GetObjBySchoolTermAsync(strSchoolTerm);
        if (objSchoolTermConst != null) {
          SchoolTerm_ReFreshThisCache();
          return objSchoolTermConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSchoolTerm,
      schoolTerm_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strSchoolTerm:所给的关键字
 * @returns 对象
 */
export async function SchoolTerm_GetObjBySchoolTermlocalStorage(strSchoolTerm: string) {
  const strThisFuncName = 'GetObjBySchoolTermlocalStorage';

  if (IsNullOrEmpty(strSchoolTerm) == true) {
    const strMsg = Format(
      '参数:[strSchoolTerm]不能为空!(In clsSchoolTermWApi.GetObjBySchoolTermlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSchoolTerm.length != 1) {
    const strMsg = Format(
      '缓存分类变量:[strSchoolTerm]的长度:[{0}]不正确!(clsSchoolTermWApi.GetObjBySchoolTermlocalStorage)',
      strSchoolTerm.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsSchoolTermEN._CurrTabName, strSchoolTerm);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objSchoolTermCache: clsSchoolTermEN = JSON.parse(strTempObj);
    return objSchoolTermCache;
  }
  try {
    const objSchoolTerm = await SchoolTerm_GetObjBySchoolTermAsync(strSchoolTerm);
    if (objSchoolTerm != null) {
      localStorage.setItem(strKey, JSON.stringify(objSchoolTerm));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objSchoolTerm;
    }
    return objSchoolTerm;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSchoolTerm,
      schoolTerm_ConstructorName,
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
 * @param objSchoolTerm:所给的对象
 * @returns 对象
 */
export async function SchoolTerm_UpdateObjInLstCache(objSchoolTerm: clsSchoolTermEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstCache();
    const obj = arrSchoolTermObjLstCache.find((x) => x.schoolTerm == objSchoolTerm.schoolTerm);
    if (obj != null) {
      objSchoolTerm.schoolTerm = obj.schoolTerm;
      ObjectAssign(obj, objSchoolTerm);
    } else {
      arrSchoolTermObjLstCache.push(objSchoolTerm);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      schoolTerm_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strSchoolTerm:所给的关键字
 * @returns 对象
 */
export async function SchoolTerm_GetNameBySchoolTermCache(strSchoolTerm: string) {
  if (IsNullOrEmpty(strSchoolTerm) == true) {
    const strMsg = Format(
      '参数:[strSchoolTerm]不能为空!(In clsSchoolTermWApi.GetNameBySchoolTermCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSchoolTerm.length != 1) {
    const strMsg = Format(
      '缓存分类变量:[strSchoolTerm]的长度:[{0}]不正确!(clsSchoolTermWApi.GetNameBySchoolTermCache)',
      strSchoolTerm.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstCache();
  if (arrSchoolTermObjLstCache == null) return '';
  try {
    const arrSchoolTermSel = arrSchoolTermObjLstCache.filter((x) => x.schoolTerm == strSchoolTerm);
    let objSchoolTerm: clsSchoolTermEN;
    if (arrSchoolTermSel.length > 0) {
      objSchoolTerm = arrSchoolTermSel[0];
      return objSchoolTerm.schoolTermName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strSchoolTerm,
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
export async function SchoolTerm_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsSchoolTermEN.con_SchoolTerm) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsSchoolTermEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsSchoolTermEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strSchoolTerm = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objSchoolTerm = await SchoolTerm_GetObjBySchoolTermCache(strSchoolTerm);
  if (objSchoolTerm == null) return '';
  if (objSchoolTerm.GetFldValue(strOutFldName) == null) return '';
  return objSchoolTerm.GetFldValue(strOutFldName).toString();
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
export function SchoolTerm_SortFunDefa(a: clsSchoolTermEN, b: clsSchoolTermEN): number {
  return a.schoolTerm.localeCompare(b.schoolTerm);
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
export function SchoolTerm_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSchoolTermEN.con_SchoolTerm:
        return (a: clsSchoolTermEN, b: clsSchoolTermEN) => {
          return a.schoolTerm.localeCompare(b.schoolTerm);
        };
      case clsSchoolTermEN.con_SchoolTermName:
        return (a: clsSchoolTermEN, b: clsSchoolTermEN) => {
          if (a.schoolTermName == null) return -1;
          if (b.schoolTermName == null) return 1;
          return a.schoolTermName.localeCompare(b.schoolTermName);
        };
      case clsSchoolTermEN.con_IsCurrentSchoolTerm:
        return (a: clsSchoolTermEN) => {
          if (a.isCurrentSchoolTerm == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SchoolTerm]中不存在!(in ${schoolTerm_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSchoolTermEN.con_SchoolTerm:
        return (a: clsSchoolTermEN, b: clsSchoolTermEN) => {
          return b.schoolTerm.localeCompare(a.schoolTerm);
        };
      case clsSchoolTermEN.con_SchoolTermName:
        return (a: clsSchoolTermEN, b: clsSchoolTermEN) => {
          if (b.schoolTermName == null) return -1;
          if (a.schoolTermName == null) return 1;
          return b.schoolTermName.localeCompare(a.schoolTermName);
        };
      case clsSchoolTermEN.con_IsCurrentSchoolTerm:
        return (b: clsSchoolTermEN) => {
          if (b.isCurrentSchoolTerm == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SchoolTerm]中不存在!(in ${schoolTerm_ConstructorName}.${strThisFuncName})`;
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
export async function SchoolTerm_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSchoolTermEN.con_SchoolTerm:
      return (obj: clsSchoolTermEN) => {
        return obj.schoolTerm === value;
      };
    case clsSchoolTermEN.con_SchoolTermName:
      return (obj: clsSchoolTermEN) => {
        return obj.schoolTermName === value;
      };
    case clsSchoolTermEN.con_IsCurrentSchoolTerm:
      return (obj: clsSchoolTermEN) => {
        return obj.isCurrentSchoolTerm === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SchoolTerm]中不存在!(in ${schoolTerm_ConstructorName}.${strThisFuncName})`;
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
export async function SchoolTerm_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsSchoolTermEN.con_SchoolTerm) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrSchoolTerm = await SchoolTerm_GetObjLstCache();
  if (arrSchoolTerm == null) return [];
  let arrSchoolTermSel = arrSchoolTerm;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrSchoolTermSel = arrSchoolTermSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrSchoolTermSel = arrSchoolTermSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrSchoolTermSel = arrSchoolTermSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrSchoolTermSel = arrSchoolTermSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrSchoolTermSel = arrSchoolTermSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrSchoolTermSel = arrSchoolTermSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrSchoolTermSel = arrSchoolTermSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrSchoolTermSel = arrSchoolTermSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrSchoolTermSel = arrSchoolTermSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrSchoolTermSel = arrSchoolTermSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrSchoolTermSel.length == 0) return [];
  return arrSchoolTermSel.map((x) => x.schoolTerm);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SchoolTerm_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
export async function SchoolTerm_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
export async function SchoolTerm_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSchoolTermEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

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
      const objSchoolTerm = SchoolTerm_GetObjFromJsonObj(returnObj);
      return objSchoolTerm;
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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
export async function SchoolTerm_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSchoolTermEN._CurrTabName;
  if (IsNullOrEmpty(clsSchoolTermEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSchoolTermEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrSchoolTermExObjLstCache: Array<clsSchoolTermEN> = CacheHelper.Get(strKey);
    const arrSchoolTermObjLstT = SchoolTerm_GetObjLstByJSONObjLst(arrSchoolTermExObjLstCache);
    return arrSchoolTermObjLstT;
  }
  try {
    const arrSchoolTermExObjLst = await SchoolTerm_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrSchoolTermExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSchoolTermExObjLst.length,
    );
    console.log(strInfo);
    return arrSchoolTermExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      schoolTerm_ConstructorName,
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
export async function SchoolTerm_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSchoolTermEN._CurrTabName;
  if (IsNullOrEmpty(clsSchoolTermEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSchoolTermEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSchoolTermExObjLstCache: Array<clsSchoolTermEN> = JSON.parse(strTempObjLst);
    const arrSchoolTermObjLstT = SchoolTerm_GetObjLstByJSONObjLst(arrSchoolTermExObjLstCache);
    return arrSchoolTermObjLstT;
  }
  try {
    const arrSchoolTermExObjLst = await SchoolTerm_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrSchoolTermExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSchoolTermExObjLst.length,
    );
    console.log(strInfo);
    return arrSchoolTermExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      schoolTerm_ConstructorName,
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
export async function SchoolTerm_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSchoolTermEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSchoolTermObjLstCache: Array<clsSchoolTermEN> = JSON.parse(strTempObjLst);
    return arrSchoolTermObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SchoolTerm_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSchoolTermEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

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
          schoolTerm_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SchoolTerm_GetObjLstByJSONObjLst(returnObjLst);
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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
export async function SchoolTerm_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSchoolTermEN._CurrTabName;
  if (IsNullOrEmpty(clsSchoolTermEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSchoolTermEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSchoolTermExObjLstCache: Array<clsSchoolTermEN> = JSON.parse(strTempObjLst);
    const arrSchoolTermObjLstT = SchoolTerm_GetObjLstByJSONObjLst(arrSchoolTermExObjLstCache);
    return arrSchoolTermObjLstT;
  }
  try {
    const arrSchoolTermExObjLst = await SchoolTerm_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrSchoolTermExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSchoolTermExObjLst.length,
    );
    console.log(strInfo);
    return arrSchoolTermExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      schoolTerm_ConstructorName,
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
export async function SchoolTerm_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSchoolTermEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSchoolTermObjLstCache: Array<clsSchoolTermEN> = JSON.parse(strTempObjLst);
    return arrSchoolTermObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SchoolTerm_GetObjLstCache(): Promise<Array<clsSchoolTermEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrSchoolTermObjLstCache;
  switch (clsSchoolTermEN.CacheModeId) {
    case '04': //sessionStorage
      arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstClientCache();
      break;
    default:
      arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstClientCache();
      break;
  }
  return arrSchoolTermObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SchoolTerm_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrSchoolTermObjLstCache;
  switch (clsSchoolTermEN.CacheModeId) {
    case '04': //sessionStorage
      arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrSchoolTermObjLstCache = null;
      break;
    default:
      arrSchoolTermObjLstCache = null;
      break;
  }
  return arrSchoolTermObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrSchoolTermCond:条件对象
 * @returns 对象列表子集
 */
export async function SchoolTerm_GetSubObjLstCache(objSchoolTermCond: clsSchoolTermEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstCache();
  let arrSchoolTermSel = arrSchoolTermObjLstCache;
  if (objSchoolTermCond.sfFldComparisonOp == null || objSchoolTermCond.sfFldComparisonOp == '')
    return arrSchoolTermSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSchoolTermCond.sfFldComparisonOp,
  );
  //console.log("clsSchoolTermWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSchoolTermCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSchoolTermCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrSchoolTermSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSchoolTermCond),
      schoolTerm_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSchoolTermEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSchoolTerm:关键字列表
 * @returns 对象列表
 **/
export async function SchoolTerm_GetObjLstBySchoolTermLstAsync(
  arrSchoolTerm: Array<string>,
): Promise<Array<clsSchoolTermEN>> {
  const strThisFuncName = 'GetObjLstBySchoolTermLstAsync';
  const strAction = 'GetObjLstBySchoolTermLst';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSchoolTerm, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          schoolTerm_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SchoolTerm_GetObjLstByJSONObjLst(returnObjLst);
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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
 * @param arrstrSchoolTermLst:关键字列表
 * @returns 对象列表
 */
export async function SchoolTerm_GetObjLstBySchoolTermLstCache(arrSchoolTermLst: Array<string>) {
  const strThisFuncName = 'GetObjLstBySchoolTermLstCache';
  try {
    const arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstCache();
    const arrSchoolTermSel = arrSchoolTermObjLstCache.filter(
      (x) => arrSchoolTermLst.indexOf(x.schoolTerm) > -1,
    );
    return arrSchoolTermSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrSchoolTermLst.join(','),
      schoolTerm_ConstructorName,
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
export async function SchoolTerm_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSchoolTermEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

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
          schoolTerm_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SchoolTerm_GetObjLstByJSONObjLst(returnObjLst);
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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
export async function SchoolTerm_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSchoolTermEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

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
          schoolTerm_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SchoolTerm_GetObjLstByJSONObjLst(returnObjLst);
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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
export async function SchoolTerm_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsSchoolTermEN>();
  const arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstCache();
  if (arrSchoolTermObjLstCache.length == 0) return arrSchoolTermObjLstCache;
  let arrSchoolTermSel = arrSchoolTermObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objSchoolTermCond = new clsSchoolTermEN();
  ObjectAssign(objSchoolTermCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsSchoolTermWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSchoolTermCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrSchoolTermSel.length == 0) return arrSchoolTermSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSchoolTermSel = arrSchoolTermSel.sort(SchoolTerm_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSchoolTermSel = arrSchoolTermSel.sort(objPagerPara.sortFun);
    }
    arrSchoolTermSel = arrSchoolTermSel.slice(intStart, intEnd);
    return arrSchoolTermSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      schoolTerm_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSchoolTermEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SchoolTerm_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSchoolTermEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSchoolTermEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

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
          schoolTerm_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SchoolTerm_GetObjLstByJSONObjLst(returnObjLst);
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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
 * @param strSchoolTerm:关键字
 * @returns 获取删除的结果
 **/
export async function SchoolTerm_DelRecordAsync(strSchoolTerm: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strSchoolTerm);

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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
 * @param arrSchoolTerm:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SchoolTerm_DelSchoolTermsAsync(
  arrSchoolTerm: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelSchoolTermsAsync';
  const strAction = 'DelSchoolTerms';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSchoolTerm, config);
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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
export async function SchoolTerm_DelSchoolTermsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelSchoolTermsByCondAsync';
  const strAction = 'DelSchoolTermsByCond';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
 * @param objSchoolTermEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SchoolTerm_AddNewRecordAsync(
  objSchoolTermEN: clsSchoolTermEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objSchoolTermEN.schoolTerm === null || objSchoolTermEN.schoolTerm === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objSchoolTermEN);
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSchoolTermEN, config);
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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
 * @param objSchoolTermEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SchoolTerm_AddNewRecordWithMaxIdAsync(
  objSchoolTermEN: clsSchoolTermEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSchoolTermEN, config);
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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
 * @param objSchoolTermEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SchoolTerm_AddNewRecordWithReturnKeyAsync(
  objSchoolTermEN: clsSchoolTermEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSchoolTermEN, config);
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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
 * @param objSchoolTermEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SchoolTerm_UpdateRecordAsync(
  objSchoolTermEN: clsSchoolTermEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSchoolTermEN.sfUpdFldSetStr === undefined ||
    objSchoolTermEN.sfUpdFldSetStr === null ||
    objSchoolTermEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSchoolTermEN.schoolTerm,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSchoolTermEN, config);
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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
 * @param objSchoolTermEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SchoolTerm_UpdateWithConditionAsync(
  objSchoolTermEN: clsSchoolTermEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSchoolTermEN.sfUpdFldSetStr === undefined ||
    objSchoolTermEN.sfUpdFldSetStr === null ||
    objSchoolTermEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSchoolTermEN.schoolTerm,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);
  objSchoolTermEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSchoolTermEN, config);
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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
 * @param objstrSchoolTermCond:条件对象
 * @returns 对象列表子集
 */
export async function SchoolTerm_IsExistRecordCache(objSchoolTermCond: clsSchoolTermEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstCache();
  if (arrSchoolTermObjLstCache == null) return false;
  let arrSchoolTermSel = arrSchoolTermObjLstCache;
  if (objSchoolTermCond.sfFldComparisonOp == null || objSchoolTermCond.sfFldComparisonOp == '')
    return arrSchoolTermSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSchoolTermCond.sfFldComparisonOp,
  );
  //console.log("clsSchoolTermWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSchoolTermCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSchoolTermCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrSchoolTermSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objSchoolTermCond),
      schoolTerm_ConstructorName,
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
export async function SchoolTerm_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
 * @param strSchoolTerm:所给的关键字
 * @returns 对象
 */
export async function SchoolTerm_IsExistCache(strSchoolTerm: string) {
  const strThisFuncName = 'IsExistCache';
  const arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstCache();
  if (arrSchoolTermObjLstCache == null) return false;
  try {
    const arrSchoolTermSel = arrSchoolTermObjLstCache.filter((x) => x.schoolTerm == strSchoolTerm);
    if (arrSchoolTermSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strSchoolTerm,
      schoolTerm_ConstructorName,
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
 * @param strSchoolTerm:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SchoolTerm_IsExistAsync(strSchoolTerm: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSchoolTerm,
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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
export async function SchoolTerm_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
 * @param objSchoolTermCond:条件对象
 * @returns 对象列表记录数
 */
export async function SchoolTerm_GetRecCountByCondCache(objSchoolTermCond: clsSchoolTermEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrSchoolTermObjLstCache = await SchoolTerm_GetObjLstCache();
  if (arrSchoolTermObjLstCache == null) return 0;
  let arrSchoolTermSel = arrSchoolTermObjLstCache;
  if (objSchoolTermCond.sfFldComparisonOp == null || objSchoolTermCond.sfFldComparisonOp == '')
    return arrSchoolTermSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSchoolTermCond.sfFldComparisonOp,
  );
  //console.log("clsSchoolTermWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSchoolTermCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSchoolTermCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSchoolTermSel = arrSchoolTermSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSchoolTermSel = arrSchoolTermSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrSchoolTermSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSchoolTermCond),
      schoolTerm_ConstructorName,
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
export async function SchoolTerm_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(schoolTerm_Controller, strAction);

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
        schoolTerm_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        schoolTerm_ConstructorName,
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
export function SchoolTerm_GetWebApiUrl(strController: string, strAction: string): string {
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
export function SchoolTerm_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsSchoolTermEN._CurrTabName;
  switch (clsSchoolTermEN.CacheModeId) {
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
export function SchoolTerm_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsSchoolTermEN._CurrTabName;
    switch (clsSchoolTermEN.CacheModeId) {
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
export async function SchoolTerm_BindDdl_SchoolTermInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_SchoolTermInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_SchoolTermInDivCache");
  const arrObjLstSel = await SchoolTerm_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsSchoolTermEN.con_SchoolTerm,
    clsSchoolTermEN.con_SchoolTermName,
    '学期',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SchoolTerm_CheckPropertyNew(pobjSchoolTermEN: clsSchoolTermEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    null === pobjSchoolTermEN.isCurrentSchoolTerm ||
    (pobjSchoolTermEN.isCurrentSchoolTerm != null &&
      pobjSchoolTermEN.isCurrentSchoolTerm.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[学期]不能为空(In 学期)!(clsSchoolTermBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSchoolTermEN.schoolTerm) == false &&
    GetStrLen(pobjSchoolTermEN.schoolTerm) > 1
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学期(schoolTerm)]的长度不能超过1(In 学期(SchoolTerm))!值:$(pobjSchoolTermEN.schoolTerm)(clsSchoolTermBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSchoolTermEN.schoolTermName) == false &&
    GetStrLen(pobjSchoolTermEN.schoolTermName) > 1
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学期名(schoolTermName)]的长度不能超过1(In 学期(SchoolTerm))!值:$(pobjSchoolTermEN.schoolTermName)(clsSchoolTermBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSchoolTermEN.schoolTerm) == false &&
    undefined !== pobjSchoolTermEN.schoolTerm &&
    tzDataType.isString(pobjSchoolTermEN.schoolTerm) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学期(schoolTerm)]的值:[$(pobjSchoolTermEN.schoolTerm)], 非法,应该为字符型(In 学期(SchoolTerm))!(clsSchoolTermBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSchoolTermEN.schoolTermName) == false &&
    undefined !== pobjSchoolTermEN.schoolTermName &&
    tzDataType.isString(pobjSchoolTermEN.schoolTermName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学期名(schoolTermName)]的值:[$(pobjSchoolTermEN.schoolTermName)], 非法,应该为字符型(In 学期(SchoolTerm))!(clsSchoolTermBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjSchoolTermEN.isCurrentSchoolTerm &&
    undefined !== pobjSchoolTermEN.isCurrentSchoolTerm &&
    tzDataType.isBoolean(pobjSchoolTermEN.isCurrentSchoolTerm) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学期(isCurrentSchoolTerm)]的值:[$(pobjSchoolTermEN.isCurrentSchoolTerm)], 非法,应该为布尔型(In 学期(SchoolTerm))!(clsSchoolTermBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SchoolTerm_CheckProperty4Update(pobjSchoolTermEN: clsSchoolTermEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSchoolTermEN.schoolTerm) == false &&
    GetStrLen(pobjSchoolTermEN.schoolTerm) > 1
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学期(schoolTerm)]的长度不能超过1(In 学期(SchoolTerm))!值:$(pobjSchoolTermEN.schoolTerm)(clsSchoolTermBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSchoolTermEN.schoolTermName) == false &&
    GetStrLen(pobjSchoolTermEN.schoolTermName) > 1
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学期名(schoolTermName)]的长度不能超过1(In 学期(SchoolTerm))!值:$(pobjSchoolTermEN.schoolTermName)(clsSchoolTermBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSchoolTermEN.schoolTerm) == false &&
    undefined !== pobjSchoolTermEN.schoolTerm &&
    tzDataType.isString(pobjSchoolTermEN.schoolTerm) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学期(schoolTerm)]的值:[$(pobjSchoolTermEN.schoolTerm)], 非法,应该为字符型(In 学期(SchoolTerm))!(clsSchoolTermBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSchoolTermEN.schoolTermName) == false &&
    undefined !== pobjSchoolTermEN.schoolTermName &&
    tzDataType.isString(pobjSchoolTermEN.schoolTermName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学期名(schoolTermName)]的值:[$(pobjSchoolTermEN.schoolTermName)], 非法,应该为字符型(In 学期(SchoolTerm))!(clsSchoolTermBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjSchoolTermEN.isCurrentSchoolTerm &&
    undefined !== pobjSchoolTermEN.isCurrentSchoolTerm &&
    tzDataType.isBoolean(pobjSchoolTermEN.isCurrentSchoolTerm) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学期(isCurrentSchoolTerm)]的值:[$(pobjSchoolTermEN.isCurrentSchoolTerm)], 非法,应该为布尔型(In 学期(SchoolTerm))!(clsSchoolTermBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjSchoolTermEN.schoolTerm) === true ||
    pobjSchoolTermEN.schoolTerm.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[学期]不能为空(In 学期)!(clsSchoolTermBL:CheckProperty4Update)',
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
export function SchoolTerm_GetJSONStrByObj(pobjSchoolTermEN: clsSchoolTermEN): string {
  pobjSchoolTermEN.sfUpdFldSetStr = pobjSchoolTermEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSchoolTermEN);
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
export function SchoolTerm_GetObjLstByJSONStr(strJSON: string): Array<clsSchoolTermEN> {
  let arrSchoolTermObjLst = new Array<clsSchoolTermEN>();
  if (strJSON === '') {
    return arrSchoolTermObjLst;
  }
  try {
    arrSchoolTermObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSchoolTermObjLst;
  }
  return arrSchoolTermObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSchoolTermObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SchoolTerm_GetObjLstByJSONObjLst(
  arrSchoolTermObjLstS: Array<clsSchoolTermEN>,
): Array<clsSchoolTermEN> {
  const arrSchoolTermObjLst = new Array<clsSchoolTermEN>();
  for (const objInFor of arrSchoolTermObjLstS) {
    const obj1 = SchoolTerm_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSchoolTermObjLst.push(obj1);
  }
  return arrSchoolTermObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SchoolTerm_GetObjByJSONStr(strJSON: string): clsSchoolTermEN {
  let pobjSchoolTermEN = new clsSchoolTermEN();
  if (strJSON === '') {
    return pobjSchoolTermEN;
  }
  try {
    pobjSchoolTermEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSchoolTermEN;
  }
  return pobjSchoolTermEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SchoolTerm_GetCombineCondition(objSchoolTermCond: clsSchoolTermEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSchoolTermCond.dicFldComparisonOp,
      clsSchoolTermEN.con_SchoolTerm,
    ) == true
  ) {
    const strComparisonOpSchoolTerm: string =
      objSchoolTermCond.dicFldComparisonOp[clsSchoolTermEN.con_SchoolTerm];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSchoolTermEN.con_SchoolTerm,
      objSchoolTermCond.schoolTerm,
      strComparisonOpSchoolTerm,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSchoolTermCond.dicFldComparisonOp,
      clsSchoolTermEN.con_SchoolTermName,
    ) == true
  ) {
    const strComparisonOpSchoolTermName: string =
      objSchoolTermCond.dicFldComparisonOp[clsSchoolTermEN.con_SchoolTermName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSchoolTermEN.con_SchoolTermName,
      objSchoolTermCond.schoolTermName,
      strComparisonOpSchoolTermName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSchoolTermCond.dicFldComparisonOp,
      clsSchoolTermEN.con_IsCurrentSchoolTerm,
    ) == true
  ) {
    if (objSchoolTermCond.isCurrentSchoolTerm == true) {
      strWhereCond += Format(" And {0} = '1'", clsSchoolTermEN.con_IsCurrentSchoolTerm);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsSchoolTermEN.con_IsCurrentSchoolTerm);
    }
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSchoolTermENS:源对象
 * @param objSchoolTermENT:目标对象
 */
export function SchoolTerm_CopyObjTo(
  objSchoolTermENS: clsSchoolTermEN,
  objSchoolTermENT: clsSchoolTermEN,
): void {
  objSchoolTermENT.schoolTerm = objSchoolTermENS.schoolTerm; //学期
  objSchoolTermENT.schoolTermName = objSchoolTermENS.schoolTermName; //学期名
  objSchoolTermENT.isCurrentSchoolTerm = objSchoolTermENS.isCurrentSchoolTerm; //学期
  objSchoolTermENT.sfUpdFldSetStr = objSchoolTermENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSchoolTermENS:源对象
 * @param objSchoolTermENT:目标对象
 */
export function SchoolTerm_GetObjFromJsonObj(objSchoolTermENS: clsSchoolTermEN): clsSchoolTermEN {
  const objSchoolTermENT: clsSchoolTermEN = new clsSchoolTermEN();
  ObjectAssign(objSchoolTermENT, objSchoolTermENS);
  return objSchoolTermENT;
}
