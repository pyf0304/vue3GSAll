/**
 * 类名:clsQxDepartmentInfoWApi
 * 表名:QxDepartmentInfo(01120924)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:51:17
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 部门(QxDepartmentInfo)
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
import { clsQxDepartmentInfoEN } from '@/ts/L0Entity/UserManage/clsQxDepartmentInfoEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const qxDepartmentInfo_Controller = 'QxDepartmentInfoApi';
export const qxDepartmentInfo_ConstructorName = 'qxDepartmentInfo';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDepartmentId:关键字
 * @returns 对象
 **/
export async function QxDepartmentInfo_GetObjByDepartmentIdAsync(
  strDepartmentId: string,
): Promise<clsQxDepartmentInfoEN | null> {
  const strThisFuncName = 'GetObjByDepartmentIdAsync';

  if (IsNullOrEmpty(strDepartmentId) == true) {
    const strMsg = Format(
      '参数:[strDepartmentId]不能为空!(In clsQxDepartmentInfoWApi.GetObjByDepartmentIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDepartmentId';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDepartmentId,
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
      const objQxDepartmentInfo = QxDepartmentInfo_GetObjFromJsonObj(returnObj);
      return objQxDepartmentInfo;
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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
 * @param strDepartmentId:所给的关键字
 * @returns 对象
 */
export async function QxDepartmentInfo_GetObjByDepartmentIdCache(
  strDepartmentId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDepartmentIdCache';

  if (IsNullOrEmpty(strDepartmentId) == true) {
    const strMsg = Format(
      '参数:[strDepartmentId]不能为空!(In clsQxDepartmentInfoWApi.GetObjByDepartmentIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstCache();
  try {
    const arrQxDepartmentInfoSel = arrQxDepartmentInfoObjLstCache.filter(
      (x) => x.departmentId == strDepartmentId,
    );
    let objQxDepartmentInfo: clsQxDepartmentInfoEN;
    if (arrQxDepartmentInfoSel.length > 0) {
      objQxDepartmentInfo = arrQxDepartmentInfoSel[0];
      return objQxDepartmentInfo;
    } else {
      if (bolTryAsyncOnce == true) {
        const objQxDepartmentInfoConst = await QxDepartmentInfo_GetObjByDepartmentIdAsync(
          strDepartmentId,
        );
        if (objQxDepartmentInfoConst != null) {
          QxDepartmentInfo_ReFreshThisCache();
          return objQxDepartmentInfoConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDepartmentId,
      qxDepartmentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strDepartmentId:所给的关键字
 * @returns 对象
 */
export async function QxDepartmentInfo_GetObjByDepartmentIdlocalStorage(strDepartmentId: string) {
  const strThisFuncName = 'GetObjByDepartmentIdlocalStorage';

  if (IsNullOrEmpty(strDepartmentId) == true) {
    const strMsg = Format(
      '参数:[strDepartmentId]不能为空!(In clsQxDepartmentInfoWApi.GetObjByDepartmentIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsQxDepartmentInfoEN._CurrTabName, strDepartmentId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objQxDepartmentInfoCache: clsQxDepartmentInfoEN = JSON.parse(strTempObj);
    return objQxDepartmentInfoCache;
  }
  try {
    const objQxDepartmentInfo = await QxDepartmentInfo_GetObjByDepartmentIdAsync(strDepartmentId);
    if (objQxDepartmentInfo != null) {
      localStorage.setItem(strKey, JSON.stringify(objQxDepartmentInfo));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objQxDepartmentInfo;
    }
    return objQxDepartmentInfo;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDepartmentId,
      qxDepartmentInfo_ConstructorName,
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
 * @param objQxDepartmentInfo:所给的对象
 * @returns 对象
 */
export async function QxDepartmentInfo_UpdateObjInLstCache(
  objQxDepartmentInfo: clsQxDepartmentInfoEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstCache();
    const obj = arrQxDepartmentInfoObjLstCache.find(
      (x) => x.departmentId == objQxDepartmentInfo.departmentId,
    );
    if (obj != null) {
      objQxDepartmentInfo.departmentId = obj.departmentId;
      ObjectAssign(obj, objQxDepartmentInfo);
    } else {
      arrQxDepartmentInfoObjLstCache.push(objQxDepartmentInfo);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      qxDepartmentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strDepartmentId:所给的关键字
 * @returns 对象
 */
export async function QxDepartmentInfo_GetNameByDepartmentIdCache(strDepartmentId: string) {
  if (IsNullOrEmpty(strDepartmentId) == true) {
    const strMsg = Format(
      '参数:[strDepartmentId]不能为空!(In clsQxDepartmentInfoWApi.GetNameByDepartmentIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstCache();
  if (arrQxDepartmentInfoObjLstCache == null) return '';
  try {
    const arrQxDepartmentInfoSel = arrQxDepartmentInfoObjLstCache.filter(
      (x) => x.departmentId == strDepartmentId,
    );
    let objQxDepartmentInfo: clsQxDepartmentInfoEN;
    if (arrQxDepartmentInfoSel.length > 0) {
      objQxDepartmentInfo = arrQxDepartmentInfoSel[0];
      return objQxDepartmentInfo.departmentName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strDepartmentId,
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
export async function QxDepartmentInfo_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsQxDepartmentInfoEN.con_DepartmentId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsQxDepartmentInfoEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsQxDepartmentInfoEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strDepartmentId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objQxDepartmentInfo = await QxDepartmentInfo_GetObjByDepartmentIdCache(strDepartmentId);
  if (objQxDepartmentInfo == null) return '';
  if (objQxDepartmentInfo.GetFldValue(strOutFldName) == null) return '';
  return objQxDepartmentInfo.GetFldValue(strOutFldName).toString();
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
export function QxDepartmentInfo_SortFunDefa(
  a: clsQxDepartmentInfoEN,
  b: clsQxDepartmentInfoEN,
): number {
  return a.departmentId.localeCompare(b.departmentId);
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
export function QxDepartmentInfo_SortFunDefa2Fld(
  a: clsQxDepartmentInfoEN,
  b: clsQxDepartmentInfoEN,
): number {
  if (a.departmentName == b.departmentName)
    return a.departmentAbbrName.localeCompare(b.departmentAbbrName);
  else return a.departmentName.localeCompare(b.departmentName);
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
export function QxDepartmentInfo_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxDepartmentInfoEN.con_DepartmentId:
        return (a: clsQxDepartmentInfoEN, b: clsQxDepartmentInfoEN) => {
          return a.departmentId.localeCompare(b.departmentId);
        };
      case clsQxDepartmentInfoEN.con_DepartmentName:
        return (a: clsQxDepartmentInfoEN, b: clsQxDepartmentInfoEN) => {
          return a.departmentName.localeCompare(b.departmentName);
        };
      case clsQxDepartmentInfoEN.con_DepartmentAbbrName:
        return (a: clsQxDepartmentInfoEN, b: clsQxDepartmentInfoEN) => {
          if (a.departmentAbbrName == null) return -1;
          if (b.departmentAbbrName == null) return 1;
          return a.departmentAbbrName.localeCompare(b.departmentAbbrName);
        };
      case clsQxDepartmentInfoEN.con_DepartmentTypeId:
        return (a: clsQxDepartmentInfoEN, b: clsQxDepartmentInfoEN) => {
          if (a.departmentTypeId == null) return -1;
          if (b.departmentTypeId == null) return 1;
          return a.departmentTypeId.localeCompare(b.departmentTypeId);
        };
      case clsQxDepartmentInfoEN.con_UpDepartmentId:
        return (a: clsQxDepartmentInfoEN, b: clsQxDepartmentInfoEN) => {
          if (a.upDepartmentId == null) return -1;
          if (b.upDepartmentId == null) return 1;
          return a.upDepartmentId.localeCompare(b.upDepartmentId);
        };
      case clsQxDepartmentInfoEN.con_OrderNum:
        return (a: clsQxDepartmentInfoEN, b: clsQxDepartmentInfoEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsQxDepartmentInfoEN.con_InUse:
        return (a: clsQxDepartmentInfoEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsQxDepartmentInfoEN.con_Memo:
        return (a: clsQxDepartmentInfoEN, b: clsQxDepartmentInfoEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxDepartmentInfo]中不存在!(in ${qxDepartmentInfo_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsQxDepartmentInfoEN.con_DepartmentId:
        return (a: clsQxDepartmentInfoEN, b: clsQxDepartmentInfoEN) => {
          return b.departmentId.localeCompare(a.departmentId);
        };
      case clsQxDepartmentInfoEN.con_DepartmentName:
        return (a: clsQxDepartmentInfoEN, b: clsQxDepartmentInfoEN) => {
          return b.departmentName.localeCompare(a.departmentName);
        };
      case clsQxDepartmentInfoEN.con_DepartmentAbbrName:
        return (a: clsQxDepartmentInfoEN, b: clsQxDepartmentInfoEN) => {
          if (b.departmentAbbrName == null) return -1;
          if (a.departmentAbbrName == null) return 1;
          return b.departmentAbbrName.localeCompare(a.departmentAbbrName);
        };
      case clsQxDepartmentInfoEN.con_DepartmentTypeId:
        return (a: clsQxDepartmentInfoEN, b: clsQxDepartmentInfoEN) => {
          if (b.departmentTypeId == null) return -1;
          if (a.departmentTypeId == null) return 1;
          return b.departmentTypeId.localeCompare(a.departmentTypeId);
        };
      case clsQxDepartmentInfoEN.con_UpDepartmentId:
        return (a: clsQxDepartmentInfoEN, b: clsQxDepartmentInfoEN) => {
          if (b.upDepartmentId == null) return -1;
          if (a.upDepartmentId == null) return 1;
          return b.upDepartmentId.localeCompare(a.upDepartmentId);
        };
      case clsQxDepartmentInfoEN.con_OrderNum:
        return (a: clsQxDepartmentInfoEN, b: clsQxDepartmentInfoEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsQxDepartmentInfoEN.con_InUse:
        return (b: clsQxDepartmentInfoEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsQxDepartmentInfoEN.con_Memo:
        return (a: clsQxDepartmentInfoEN, b: clsQxDepartmentInfoEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxDepartmentInfo]中不存在!(in ${qxDepartmentInfo_ConstructorName}.${strThisFuncName})`;
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
export async function QxDepartmentInfo_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsQxDepartmentInfoEN.con_DepartmentId:
      return (obj: clsQxDepartmentInfoEN) => {
        return obj.departmentId === value;
      };
    case clsQxDepartmentInfoEN.con_DepartmentName:
      return (obj: clsQxDepartmentInfoEN) => {
        return obj.departmentName === value;
      };
    case clsQxDepartmentInfoEN.con_DepartmentAbbrName:
      return (obj: clsQxDepartmentInfoEN) => {
        return obj.departmentAbbrName === value;
      };
    case clsQxDepartmentInfoEN.con_DepartmentTypeId:
      return (obj: clsQxDepartmentInfoEN) => {
        return obj.departmentTypeId === value;
      };
    case clsQxDepartmentInfoEN.con_UpDepartmentId:
      return (obj: clsQxDepartmentInfoEN) => {
        return obj.upDepartmentId === value;
      };
    case clsQxDepartmentInfoEN.con_OrderNum:
      return (obj: clsQxDepartmentInfoEN) => {
        return obj.orderNum === value;
      };
    case clsQxDepartmentInfoEN.con_InUse:
      return (obj: clsQxDepartmentInfoEN) => {
        return obj.inUse === value;
      };
    case clsQxDepartmentInfoEN.con_Memo:
      return (obj: clsQxDepartmentInfoEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[QxDepartmentInfo]中不存在!(in ${qxDepartmentInfo_ConstructorName}.${strThisFuncName})`;
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
export async function QxDepartmentInfo_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsQxDepartmentInfoEN.con_DepartmentId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrQxDepartmentInfo = await QxDepartmentInfo_GetObjLstCache();
  if (arrQxDepartmentInfo == null) return [];
  let arrQxDepartmentInfoSel = arrQxDepartmentInfo;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrQxDepartmentInfoSel.length == 0) return [];
  return arrQxDepartmentInfoSel.map((x) => x.departmentId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxDepartmentInfo_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
export async function QxDepartmentInfo_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
export async function QxDepartmentInfo_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsQxDepartmentInfoEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

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
      const objQxDepartmentInfo = QxDepartmentInfo_GetObjFromJsonObj(returnObj);
      return objQxDepartmentInfo;
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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
export async function QxDepartmentInfo_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxDepartmentInfoEN._CurrTabName;
  if (IsNullOrEmpty(clsQxDepartmentInfoEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxDepartmentInfoEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrQxDepartmentInfoExObjLstCache: Array<clsQxDepartmentInfoEN> = CacheHelper.Get(strKey);
    const arrQxDepartmentInfoObjLstT = QxDepartmentInfo_GetObjLstByJSONObjLst(
      arrQxDepartmentInfoExObjLstCache,
    );
    return arrQxDepartmentInfoObjLstT;
  }
  try {
    const arrQxDepartmentInfoExObjLst = await QxDepartmentInfo_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrQxDepartmentInfoExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQxDepartmentInfoExObjLst.length,
    );
    console.log(strInfo);
    return arrQxDepartmentInfoExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxDepartmentInfo_ConstructorName,
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
export async function QxDepartmentInfo_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxDepartmentInfoEN._CurrTabName;
  if (IsNullOrEmpty(clsQxDepartmentInfoEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxDepartmentInfoEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQxDepartmentInfoExObjLstCache: Array<clsQxDepartmentInfoEN> =
      JSON.parse(strTempObjLst);
    const arrQxDepartmentInfoObjLstT = QxDepartmentInfo_GetObjLstByJSONObjLst(
      arrQxDepartmentInfoExObjLstCache,
    );
    return arrQxDepartmentInfoObjLstT;
  }
  try {
    const arrQxDepartmentInfoExObjLst = await QxDepartmentInfo_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrQxDepartmentInfoExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQxDepartmentInfoExObjLst.length,
    );
    console.log(strInfo);
    return arrQxDepartmentInfoExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxDepartmentInfo_ConstructorName,
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
export async function QxDepartmentInfo_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsQxDepartmentInfoEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQxDepartmentInfoObjLstCache: Array<clsQxDepartmentInfoEN> = JSON.parse(strTempObjLst);
    return arrQxDepartmentInfoObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function QxDepartmentInfo_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsQxDepartmentInfoEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

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
          qxDepartmentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxDepartmentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
export async function QxDepartmentInfo_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxDepartmentInfoEN._CurrTabName;
  if (IsNullOrEmpty(clsQxDepartmentInfoEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxDepartmentInfoEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQxDepartmentInfoExObjLstCache: Array<clsQxDepartmentInfoEN> =
      JSON.parse(strTempObjLst);
    const arrQxDepartmentInfoObjLstT = QxDepartmentInfo_GetObjLstByJSONObjLst(
      arrQxDepartmentInfoExObjLstCache,
    );
    return arrQxDepartmentInfoObjLstT;
  }
  try {
    const arrQxDepartmentInfoExObjLst = await QxDepartmentInfo_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrQxDepartmentInfoExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQxDepartmentInfoExObjLst.length,
    );
    console.log(strInfo);
    return arrQxDepartmentInfoExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxDepartmentInfo_ConstructorName,
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
export async function QxDepartmentInfo_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsQxDepartmentInfoEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQxDepartmentInfoObjLstCache: Array<clsQxDepartmentInfoEN> = JSON.parse(strTempObjLst);
    return arrQxDepartmentInfoObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxDepartmentInfo_GetObjLstCache(): Promise<Array<clsQxDepartmentInfoEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrQxDepartmentInfoObjLstCache;
  switch (clsQxDepartmentInfoEN.CacheModeId) {
    case '04': //sessionStorage
      arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstClientCache();
      break;
    default:
      arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstClientCache();
      break;
  }
  return arrQxDepartmentInfoObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxDepartmentInfo_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrQxDepartmentInfoObjLstCache;
  switch (clsQxDepartmentInfoEN.CacheModeId) {
    case '04': //sessionStorage
      arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrQxDepartmentInfoObjLstCache = null;
      break;
    default:
      arrQxDepartmentInfoObjLstCache = null;
      break;
  }
  return arrQxDepartmentInfoObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrDepartmentIdCond:条件对象
 * @returns 对象列表子集
 */
export async function QxDepartmentInfo_GetSubObjLstCache(
  objQxDepartmentInfoCond: clsQxDepartmentInfoEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstCache();
  let arrQxDepartmentInfoSel = arrQxDepartmentInfoObjLstCache;
  if (
    objQxDepartmentInfoCond.sfFldComparisonOp == null ||
    objQxDepartmentInfoCond.sfFldComparisonOp == ''
  )
    return arrQxDepartmentInfoSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxDepartmentInfoCond.sfFldComparisonOp,
  );
  //console.log("clsQxDepartmentInfoWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxDepartmentInfoCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxDepartmentInfoCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrQxDepartmentInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQxDepartmentInfoCond),
      qxDepartmentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxDepartmentInfoEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDepartmentId:关键字列表
 * @returns 对象列表
 **/
export async function QxDepartmentInfo_GetObjLstByDepartmentIdLstAsync(
  arrDepartmentId: Array<string>,
): Promise<Array<clsQxDepartmentInfoEN>> {
  const strThisFuncName = 'GetObjLstByDepartmentIdLstAsync';
  const strAction = 'GetObjLstByDepartmentIdLst';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDepartmentId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qxDepartmentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxDepartmentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
 * @param arrstrDepartmentIdLst:关键字列表
 * @returns 对象列表
 */
export async function QxDepartmentInfo_GetObjLstByDepartmentIdLstCache(
  arrDepartmentIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByDepartmentIdLstCache';
  try {
    const arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstCache();
    const arrQxDepartmentInfoSel = arrQxDepartmentInfoObjLstCache.filter(
      (x) => arrDepartmentIdLst.indexOf(x.departmentId) > -1,
    );
    return arrQxDepartmentInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrDepartmentIdLst.join(','),
      qxDepartmentInfo_ConstructorName,
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
export async function QxDepartmentInfo_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsQxDepartmentInfoEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

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
          qxDepartmentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxDepartmentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
export async function QxDepartmentInfo_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsQxDepartmentInfoEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

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
          qxDepartmentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxDepartmentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
export async function QxDepartmentInfo_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsQxDepartmentInfoEN>();
  const arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstCache();
  if (arrQxDepartmentInfoObjLstCache.length == 0) return arrQxDepartmentInfoObjLstCache;
  let arrQxDepartmentInfoSel = arrQxDepartmentInfoObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objQxDepartmentInfoCond = new clsQxDepartmentInfoEN();
  ObjectAssign(objQxDepartmentInfoCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsQxDepartmentInfoWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxDepartmentInfoCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQxDepartmentInfoSel.length == 0) return arrQxDepartmentInfoSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.sort(
        QxDepartmentInfo_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.sort(objPagerPara.sortFun);
    }
    arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.slice(intStart, intEnd);
    return arrQxDepartmentInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxDepartmentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxDepartmentInfoEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function QxDepartmentInfo_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxDepartmentInfoEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsQxDepartmentInfoEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

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
          qxDepartmentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxDepartmentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
 * @param strDepartmentId:关键字
 * @returns 获取删除的结果
 **/
export async function QxDepartmentInfo_DelRecordAsync(strDepartmentId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDepartmentId);

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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
 * @param arrDepartmentId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function QxDepartmentInfo_DelQxDepartmentInfosAsync(
  arrDepartmentId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelQxDepartmentInfosAsync';
  const strAction = 'DelQxDepartmentInfos';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDepartmentId, config);
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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
export async function QxDepartmentInfo_DelQxDepartmentInfosByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelQxDepartmentInfosByCondAsync';
  const strAction = 'DelQxDepartmentInfosByCond';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
 * @param objQxDepartmentInfoEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QxDepartmentInfo_AddNewRecordAsync(
  objQxDepartmentInfoEN: clsQxDepartmentInfoEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objQxDepartmentInfoEN.departmentId === null || objQxDepartmentInfoEN.departmentId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objQxDepartmentInfoEN);
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxDepartmentInfoEN, config);
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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
 * @param objQxDepartmentInfoEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QxDepartmentInfo_AddNewRecordWithMaxIdAsync(
  objQxDepartmentInfoEN: clsQxDepartmentInfoEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxDepartmentInfoEN, config);
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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
 * @param objQxDepartmentInfoEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function QxDepartmentInfo_AddNewRecordWithReturnKeyAsync(
  objQxDepartmentInfoEN: clsQxDepartmentInfoEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxDepartmentInfoEN, config);
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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
 * @param objQxDepartmentInfoEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QxDepartmentInfo_UpdateRecordAsync(
  objQxDepartmentInfoEN: clsQxDepartmentInfoEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objQxDepartmentInfoEN.sfUpdFldSetStr === undefined ||
    objQxDepartmentInfoEN.sfUpdFldSetStr === null ||
    objQxDepartmentInfoEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objQxDepartmentInfoEN.departmentId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxDepartmentInfoEN, config);
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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
 * @param objQxDepartmentInfoEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxDepartmentInfo_UpdateWithConditionAsync(
  objQxDepartmentInfoEN: clsQxDepartmentInfoEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objQxDepartmentInfoEN.sfUpdFldSetStr === undefined ||
    objQxDepartmentInfoEN.sfUpdFldSetStr === null ||
    objQxDepartmentInfoEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objQxDepartmentInfoEN.departmentId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);
  objQxDepartmentInfoEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxDepartmentInfoEN, config);
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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
 * @param objstrDepartmentIdCond:条件对象
 * @returns 对象列表子集
 */
export async function QxDepartmentInfo_IsExistRecordCache(
  objQxDepartmentInfoCond: clsQxDepartmentInfoEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstCache();
  if (arrQxDepartmentInfoObjLstCache == null) return false;
  let arrQxDepartmentInfoSel = arrQxDepartmentInfoObjLstCache;
  if (
    objQxDepartmentInfoCond.sfFldComparisonOp == null ||
    objQxDepartmentInfoCond.sfFldComparisonOp == ''
  )
    return arrQxDepartmentInfoSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxDepartmentInfoCond.sfFldComparisonOp,
  );
  //console.log("clsQxDepartmentInfoWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxDepartmentInfoCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxDepartmentInfoCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQxDepartmentInfoSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objQxDepartmentInfoCond),
      qxDepartmentInfo_ConstructorName,
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
export async function QxDepartmentInfo_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
 * @param strDepartmentId:所给的关键字
 * @returns 对象
 */
export async function QxDepartmentInfo_IsExistCache(strDepartmentId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstCache();
  if (arrQxDepartmentInfoObjLstCache == null) return false;
  try {
    const arrQxDepartmentInfoSel = arrQxDepartmentInfoObjLstCache.filter(
      (x) => x.departmentId == strDepartmentId,
    );
    if (arrQxDepartmentInfoSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strDepartmentId,
      qxDepartmentInfo_ConstructorName,
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
 * @param strDepartmentId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function QxDepartmentInfo_IsExistAsync(strDepartmentId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDepartmentId,
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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
export async function QxDepartmentInfo_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
 * @param objQxDepartmentInfoCond:条件对象
 * @returns 对象列表记录数
 */
export async function QxDepartmentInfo_GetRecCountByCondCache(
  objQxDepartmentInfoCond: clsQxDepartmentInfoEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrQxDepartmentInfoObjLstCache = await QxDepartmentInfo_GetObjLstCache();
  if (arrQxDepartmentInfoObjLstCache == null) return 0;
  let arrQxDepartmentInfoSel = arrQxDepartmentInfoObjLstCache;
  if (
    objQxDepartmentInfoCond.sfFldComparisonOp == null ||
    objQxDepartmentInfoCond.sfFldComparisonOp == ''
  )
    return arrQxDepartmentInfoSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxDepartmentInfoCond.sfFldComparisonOp,
  );
  //console.log("clsQxDepartmentInfoWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxDepartmentInfoCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxDepartmentInfoCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxDepartmentInfoSel = arrQxDepartmentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrQxDepartmentInfoSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQxDepartmentInfoCond),
      qxDepartmentInfo_ConstructorName,
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
export async function QxDepartmentInfo_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(qxDepartmentInfo_Controller, strAction);

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
        qxDepartmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxDepartmentInfo_ConstructorName,
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
export function QxDepartmentInfo_GetWebApiUrl(strController: string, strAction: string): string {
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
export function QxDepartmentInfo_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsQxDepartmentInfoEN._CurrTabName;
  switch (clsQxDepartmentInfoEN.CacheModeId) {
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
export function QxDepartmentInfo_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsQxDepartmentInfoEN._CurrTabName;
    switch (clsQxDepartmentInfoEN.CacheModeId) {
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
export async function QxDepartmentInfo_BindDdl_DepartmentIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_DepartmentIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DepartmentIdInDivCache");
  const arrObjLstSel = await QxDepartmentInfo_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsQxDepartmentInfoEN.con_DepartmentId,
    clsQxDepartmentInfoEN.con_DepartmentName,
    '部门',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QxDepartmentInfo_CheckPropertyNew(pobjQxDepartmentInfoEN: clsQxDepartmentInfoEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[部门名称]不能为空(In 部门)!(clsQxDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentId) == false &&
    GetStrLen(pobjQxDepartmentInfoEN.departmentId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[部门Id(departmentId)]的长度不能超过8(In 部门(QxDepartmentInfo))!值:$(pobjQxDepartmentInfoEN.departmentId)(clsQxDepartmentInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentName) == false &&
    GetStrLen(pobjQxDepartmentInfoEN.departmentName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[部门名称(departmentName)]的长度不能超过100(In 部门(QxDepartmentInfo))!值:$(pobjQxDepartmentInfoEN.departmentName)(clsQxDepartmentInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentAbbrName) == false &&
    GetStrLen(pobjQxDepartmentInfoEN.departmentAbbrName) > 12
  ) {
    throw new Error(
      '(errid:Watl000413)字段[DepartmentAbbrName(departmentAbbrName)]的长度不能超过12(In 部门(QxDepartmentInfo))!值:$(pobjQxDepartmentInfoEN.departmentAbbrName)(clsQxDepartmentInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentTypeId) == false &&
    GetStrLen(pobjQxDepartmentInfoEN.departmentTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[DepartmentTypeId(departmentTypeId)]的长度不能超过2(In 部门(QxDepartmentInfo))!值:$(pobjQxDepartmentInfoEN.departmentTypeId)(clsQxDepartmentInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.upDepartmentId) == false &&
    GetStrLen(pobjQxDepartmentInfoEN.upDepartmentId) > 6
  ) {
    throw new Error(
      '(errid:Watl000413)字段[UpDepartmentId(upDepartmentId)]的长度不能超过6(In 部门(QxDepartmentInfo))!值:$(pobjQxDepartmentInfoEN.upDepartmentId)(clsQxDepartmentInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.memo) == false &&
    GetStrLen(pobjQxDepartmentInfoEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 部门(QxDepartmentInfo))!值:$(pobjQxDepartmentInfoEN.memo)(clsQxDepartmentInfoBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentId) == false &&
    undefined !== pobjQxDepartmentInfoEN.departmentId &&
    tzDataType.isString(pobjQxDepartmentInfoEN.departmentId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[部门Id(departmentId)]的值:[$(pobjQxDepartmentInfoEN.departmentId)], 非法,应该为字符型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentName) == false &&
    undefined !== pobjQxDepartmentInfoEN.departmentName &&
    tzDataType.isString(pobjQxDepartmentInfoEN.departmentName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[部门名称(departmentName)]的值:[$(pobjQxDepartmentInfoEN.departmentName)], 非法,应该为字符型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentAbbrName) == false &&
    undefined !== pobjQxDepartmentInfoEN.departmentAbbrName &&
    tzDataType.isString(pobjQxDepartmentInfoEN.departmentAbbrName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[DepartmentAbbrName(departmentAbbrName)]的值:[$(pobjQxDepartmentInfoEN.departmentAbbrName)], 非法,应该为字符型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentTypeId) == false &&
    undefined !== pobjQxDepartmentInfoEN.departmentTypeId &&
    tzDataType.isString(pobjQxDepartmentInfoEN.departmentTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[DepartmentTypeId(departmentTypeId)]的值:[$(pobjQxDepartmentInfoEN.departmentTypeId)], 非法,应该为字符型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.upDepartmentId) == false &&
    undefined !== pobjQxDepartmentInfoEN.upDepartmentId &&
    tzDataType.isString(pobjQxDepartmentInfoEN.upDepartmentId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[UpDepartmentId(upDepartmentId)]的值:[$(pobjQxDepartmentInfoEN.upDepartmentId)], 非法,应该为字符型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjQxDepartmentInfoEN.orderNum &&
    undefined !== pobjQxDepartmentInfoEN.orderNum &&
    tzDataType.isNumber(pobjQxDepartmentInfoEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjQxDepartmentInfoEN.orderNum)], 非法,应该为数值型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjQxDepartmentInfoEN.inUse &&
    undefined !== pobjQxDepartmentInfoEN.inUse &&
    tzDataType.isBoolean(pobjQxDepartmentInfoEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否在用(inUse)]的值:[$(pobjQxDepartmentInfoEN.inUse)], 非法,应该为布尔型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.memo) == false &&
    undefined !== pobjQxDepartmentInfoEN.memo &&
    tzDataType.isString(pobjQxDepartmentInfoEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjQxDepartmentInfoEN.memo)], 非法,应该为字符型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentTypeId) == false &&
    pobjQxDepartmentInfoEN.departmentTypeId != '[nuull]' &&
    GetStrLen(pobjQxDepartmentInfoEN.departmentTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[DepartmentTypeId]作为外键字段,长度应该为2(In 部门)!(clsQxDepartmentInfoBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QxDepartmentInfo_CheckProperty4Update(
  pobjQxDepartmentInfoEN: clsQxDepartmentInfoEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentId) == false &&
    GetStrLen(pobjQxDepartmentInfoEN.departmentId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[部门Id(departmentId)]的长度不能超过8(In 部门(QxDepartmentInfo))!值:$(pobjQxDepartmentInfoEN.departmentId)(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentName) == false &&
    GetStrLen(pobjQxDepartmentInfoEN.departmentName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[部门名称(departmentName)]的长度不能超过100(In 部门(QxDepartmentInfo))!值:$(pobjQxDepartmentInfoEN.departmentName)(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentAbbrName) == false &&
    GetStrLen(pobjQxDepartmentInfoEN.departmentAbbrName) > 12
  ) {
    throw new Error(
      '(errid:Watl000416)字段[DepartmentAbbrName(departmentAbbrName)]的长度不能超过12(In 部门(QxDepartmentInfo))!值:$(pobjQxDepartmentInfoEN.departmentAbbrName)(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentTypeId) == false &&
    GetStrLen(pobjQxDepartmentInfoEN.departmentTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[DepartmentTypeId(departmentTypeId)]的长度不能超过2(In 部门(QxDepartmentInfo))!值:$(pobjQxDepartmentInfoEN.departmentTypeId)(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.upDepartmentId) == false &&
    GetStrLen(pobjQxDepartmentInfoEN.upDepartmentId) > 6
  ) {
    throw new Error(
      '(errid:Watl000416)字段[UpDepartmentId(upDepartmentId)]的长度不能超过6(In 部门(QxDepartmentInfo))!值:$(pobjQxDepartmentInfoEN.upDepartmentId)(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.memo) == false &&
    GetStrLen(pobjQxDepartmentInfoEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 部门(QxDepartmentInfo))!值:$(pobjQxDepartmentInfoEN.memo)(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentId) == false &&
    undefined !== pobjQxDepartmentInfoEN.departmentId &&
    tzDataType.isString(pobjQxDepartmentInfoEN.departmentId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[部门Id(departmentId)]的值:[$(pobjQxDepartmentInfoEN.departmentId)], 非法,应该为字符型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentName) == false &&
    undefined !== pobjQxDepartmentInfoEN.departmentName &&
    tzDataType.isString(pobjQxDepartmentInfoEN.departmentName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[部门名称(departmentName)]的值:[$(pobjQxDepartmentInfoEN.departmentName)], 非法,应该为字符型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentAbbrName) == false &&
    undefined !== pobjQxDepartmentInfoEN.departmentAbbrName &&
    tzDataType.isString(pobjQxDepartmentInfoEN.departmentAbbrName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[DepartmentAbbrName(departmentAbbrName)]的值:[$(pobjQxDepartmentInfoEN.departmentAbbrName)], 非法,应该为字符型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentTypeId) == false &&
    undefined !== pobjQxDepartmentInfoEN.departmentTypeId &&
    tzDataType.isString(pobjQxDepartmentInfoEN.departmentTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[DepartmentTypeId(departmentTypeId)]的值:[$(pobjQxDepartmentInfoEN.departmentTypeId)], 非法,应该为字符型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.upDepartmentId) == false &&
    undefined !== pobjQxDepartmentInfoEN.upDepartmentId &&
    tzDataType.isString(pobjQxDepartmentInfoEN.upDepartmentId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[UpDepartmentId(upDepartmentId)]的值:[$(pobjQxDepartmentInfoEN.upDepartmentId)], 非法,应该为字符型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjQxDepartmentInfoEN.orderNum &&
    undefined !== pobjQxDepartmentInfoEN.orderNum &&
    tzDataType.isNumber(pobjQxDepartmentInfoEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjQxDepartmentInfoEN.orderNum)], 非法,应该为数值型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjQxDepartmentInfoEN.inUse &&
    undefined !== pobjQxDepartmentInfoEN.inUse &&
    tzDataType.isBoolean(pobjQxDepartmentInfoEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否在用(inUse)]的值:[$(pobjQxDepartmentInfoEN.inUse)], 非法,应该为布尔型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.memo) == false &&
    undefined !== pobjQxDepartmentInfoEN.memo &&
    tzDataType.isString(pobjQxDepartmentInfoEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjQxDepartmentInfoEN.memo)], 非法,应该为字符型(In 部门(QxDepartmentInfo))!(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentId) === true ||
    pobjQxDepartmentInfoEN.departmentId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[部门Id]不能为空(In 部门)!(clsQxDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoEN.departmentTypeId) == false &&
    pobjQxDepartmentInfoEN.departmentTypeId != '[nuull]' &&
    GetStrLen(pobjQxDepartmentInfoEN.departmentTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[DepartmentTypeId]作为外键字段,长度应该为2(In 部门)!(clsQxDepartmentInfoBL:CheckPropertyNew)';
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
export function QxDepartmentInfo_GetJSONStrByObj(
  pobjQxDepartmentInfoEN: clsQxDepartmentInfoEN,
): string {
  pobjQxDepartmentInfoEN.sfUpdFldSetStr = pobjQxDepartmentInfoEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjQxDepartmentInfoEN);
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
export function QxDepartmentInfo_GetObjLstByJSONStr(strJSON: string): Array<clsQxDepartmentInfoEN> {
  let arrQxDepartmentInfoObjLst = new Array<clsQxDepartmentInfoEN>();
  if (strJSON === '') {
    return arrQxDepartmentInfoObjLst;
  }
  try {
    arrQxDepartmentInfoObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrQxDepartmentInfoObjLst;
  }
  return arrQxDepartmentInfoObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxDepartmentInfoObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function QxDepartmentInfo_GetObjLstByJSONObjLst(
  arrQxDepartmentInfoObjLstS: Array<clsQxDepartmentInfoEN>,
): Array<clsQxDepartmentInfoEN> {
  const arrQxDepartmentInfoObjLst = new Array<clsQxDepartmentInfoEN>();
  for (const objInFor of arrQxDepartmentInfoObjLstS) {
    const obj1 = QxDepartmentInfo_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrQxDepartmentInfoObjLst.push(obj1);
  }
  return arrQxDepartmentInfoObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxDepartmentInfo_GetObjByJSONStr(strJSON: string): clsQxDepartmentInfoEN {
  let pobjQxDepartmentInfoEN = new clsQxDepartmentInfoEN();
  if (strJSON === '') {
    return pobjQxDepartmentInfoEN;
  }
  try {
    pobjQxDepartmentInfoEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjQxDepartmentInfoEN;
  }
  return pobjQxDepartmentInfoEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function QxDepartmentInfo_GetCombineCondition(
  objQxDepartmentInfoCond: clsQxDepartmentInfoEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoCond.dicFldComparisonOp,
      clsQxDepartmentInfoEN.con_DepartmentId,
    ) == true
  ) {
    const strComparisonOpDepartmentId: string =
      objQxDepartmentInfoCond.dicFldComparisonOp[clsQxDepartmentInfoEN.con_DepartmentId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxDepartmentInfoEN.con_DepartmentId,
      objQxDepartmentInfoCond.departmentId,
      strComparisonOpDepartmentId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoCond.dicFldComparisonOp,
      clsQxDepartmentInfoEN.con_DepartmentName,
    ) == true
  ) {
    const strComparisonOpDepartmentName: string =
      objQxDepartmentInfoCond.dicFldComparisonOp[clsQxDepartmentInfoEN.con_DepartmentName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxDepartmentInfoEN.con_DepartmentName,
      objQxDepartmentInfoCond.departmentName,
      strComparisonOpDepartmentName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoCond.dicFldComparisonOp,
      clsQxDepartmentInfoEN.con_DepartmentAbbrName,
    ) == true
  ) {
    const strComparisonOpDepartmentAbbrName: string =
      objQxDepartmentInfoCond.dicFldComparisonOp[clsQxDepartmentInfoEN.con_DepartmentAbbrName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxDepartmentInfoEN.con_DepartmentAbbrName,
      objQxDepartmentInfoCond.departmentAbbrName,
      strComparisonOpDepartmentAbbrName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoCond.dicFldComparisonOp,
      clsQxDepartmentInfoEN.con_DepartmentTypeId,
    ) == true
  ) {
    const strComparisonOpDepartmentTypeId: string =
      objQxDepartmentInfoCond.dicFldComparisonOp[clsQxDepartmentInfoEN.con_DepartmentTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxDepartmentInfoEN.con_DepartmentTypeId,
      objQxDepartmentInfoCond.departmentTypeId,
      strComparisonOpDepartmentTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoCond.dicFldComparisonOp,
      clsQxDepartmentInfoEN.con_UpDepartmentId,
    ) == true
  ) {
    const strComparisonOpUpDepartmentId: string =
      objQxDepartmentInfoCond.dicFldComparisonOp[clsQxDepartmentInfoEN.con_UpDepartmentId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxDepartmentInfoEN.con_UpDepartmentId,
      objQxDepartmentInfoCond.upDepartmentId,
      strComparisonOpUpDepartmentId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoCond.dicFldComparisonOp,
      clsQxDepartmentInfoEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objQxDepartmentInfoCond.dicFldComparisonOp[clsQxDepartmentInfoEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQxDepartmentInfoEN.con_OrderNum,
      objQxDepartmentInfoCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoCond.dicFldComparisonOp,
      clsQxDepartmentInfoEN.con_InUse,
    ) == true
  ) {
    if (objQxDepartmentInfoCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsQxDepartmentInfoEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsQxDepartmentInfoEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoCond.dicFldComparisonOp,
      clsQxDepartmentInfoEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objQxDepartmentInfoCond.dicFldComparisonOp[clsQxDepartmentInfoEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxDepartmentInfoEN.con_Memo,
      objQxDepartmentInfoCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objQxDepartmentInfoENS:源对象
 * @param objQxDepartmentInfoENT:目标对象
 */
export function QxDepartmentInfo_CopyObjTo(
  objQxDepartmentInfoENS: clsQxDepartmentInfoEN,
  objQxDepartmentInfoENT: clsQxDepartmentInfoEN,
): void {
  objQxDepartmentInfoENT.departmentId = objQxDepartmentInfoENS.departmentId; //部门Id
  objQxDepartmentInfoENT.departmentName = objQxDepartmentInfoENS.departmentName; //部门名称
  objQxDepartmentInfoENT.departmentAbbrName = objQxDepartmentInfoENS.departmentAbbrName; //DepartmentAbbrName
  objQxDepartmentInfoENT.departmentTypeId = objQxDepartmentInfoENS.departmentTypeId; //DepartmentTypeId
  objQxDepartmentInfoENT.upDepartmentId = objQxDepartmentInfoENS.upDepartmentId; //UpDepartmentId
  objQxDepartmentInfoENT.orderNum = objQxDepartmentInfoENS.orderNum; //序号
  objQxDepartmentInfoENT.inUse = objQxDepartmentInfoENS.inUse; //是否在用
  objQxDepartmentInfoENT.memo = objQxDepartmentInfoENS.memo; //备注
  objQxDepartmentInfoENT.sfUpdFldSetStr = objQxDepartmentInfoENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxDepartmentInfoENS:源对象
 * @param objQxDepartmentInfoENT:目标对象
 */
export function QxDepartmentInfo_GetObjFromJsonObj(
  objQxDepartmentInfoENS: clsQxDepartmentInfoEN,
): clsQxDepartmentInfoEN {
  const objQxDepartmentInfoENT: clsQxDepartmentInfoEN = new clsQxDepartmentInfoEN();
  ObjectAssign(objQxDepartmentInfoENT, objQxDepartmentInfoENS);
  return objQxDepartmentInfoENT;
}
