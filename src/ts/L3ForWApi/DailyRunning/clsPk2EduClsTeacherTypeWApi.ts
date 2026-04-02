/**
 * 类名:clsPk2EduClsTeacherTypeWApi
 * 表名:Pk2EduClsTeacherType(01120133)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:44:25
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教学班教师角色表2(Pk2EduClsTeacherType)
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
import { clsPk2EduClsTeacherTypeEN } from '@/ts/L0Entity/DailyRunning/clsPk2EduClsTeacherTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const pk2EduClsTeacherType_Controller = 'Pk2EduClsTeacherTypeApi';
export const pk2EduClsTeacherType_ConstructorName = 'pk2EduClsTeacherType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdPk2EduClsTeacherType:关键字
 * @returns 对象
 **/
export async function Pk2EduClsTeacherType_GetObjByIdPk2EduClsTeacherTypeAsync(
  strIdPk2EduClsTeacherType: string,
): Promise<clsPk2EduClsTeacherTypeEN | null> {
  const strThisFuncName = 'GetObjByIdPk2EduClsTeacherTypeAsync';

  if (IsNullOrEmpty(strIdPk2EduClsTeacherType) == true) {
    const strMsg = Format(
      '参数:[strIdPk2EduClsTeacherType]不能为空!(In clsPk2EduClsTeacherTypeWApi.GetObjByIdPk2EduClsTeacherTypeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdPk2EduClsTeacherType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdPk2EduClsTeacherType]的长度:[{0}]不正确!(clsPk2EduClsTeacherTypeWApi.GetObjByIdPk2EduClsTeacherTypeAsync)',
      strIdPk2EduClsTeacherType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdPk2EduClsTeacherType';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdPk2EduClsTeacherType,
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
      const objPk2EduClsTeacherType = Pk2EduClsTeacherType_GetObjFromJsonObj(returnObj);
      return objPk2EduClsTeacherType;
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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
 * @param strIdPk2EduClsTeacherType:所给的关键字
 * @returns 对象
 */
export async function Pk2EduClsTeacherType_GetObjByIdPk2EduClsTeacherTypeCache(
  strIdPk2EduClsTeacherType: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByIdPk2EduClsTeacherTypeCache';

  if (IsNullOrEmpty(strIdPk2EduClsTeacherType) == true) {
    const strMsg = Format(
      '参数:[strIdPk2EduClsTeacherType]不能为空!(In clsPk2EduClsTeacherTypeWApi.GetObjByIdPk2EduClsTeacherTypeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdPk2EduClsTeacherType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdPk2EduClsTeacherType]的长度:[{0}]不正确!(clsPk2EduClsTeacherTypeWApi.GetObjByIdPk2EduClsTeacherTypeCache)',
      strIdPk2EduClsTeacherType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPk2EduClsTeacherTypeObjLstCache = await Pk2EduClsTeacherType_GetObjLstCache();
  try {
    const arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeObjLstCache.filter(
      (x) => x.idPk2EduClsTeacherType == strIdPk2EduClsTeacherType,
    );
    let objPk2EduClsTeacherType: clsPk2EduClsTeacherTypeEN;
    if (arrPk2EduClsTeacherTypeSel.length > 0) {
      objPk2EduClsTeacherType = arrPk2EduClsTeacherTypeSel[0];
      return objPk2EduClsTeacherType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPk2EduClsTeacherTypeConst =
          await Pk2EduClsTeacherType_GetObjByIdPk2EduClsTeacherTypeAsync(strIdPk2EduClsTeacherType);
        if (objPk2EduClsTeacherTypeConst != null) {
          Pk2EduClsTeacherType_ReFreshThisCache();
          return objPk2EduClsTeacherTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdPk2EduClsTeacherType,
      pk2EduClsTeacherType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdPk2EduClsTeacherType:所给的关键字
 * @returns 对象
 */
export async function Pk2EduClsTeacherType_GetObjByIdPk2EduClsTeacherTypelocalStorage(
  strIdPk2EduClsTeacherType: string,
) {
  const strThisFuncName = 'GetObjByIdPk2EduClsTeacherTypelocalStorage';

  if (IsNullOrEmpty(strIdPk2EduClsTeacherType) == true) {
    const strMsg = Format(
      '参数:[strIdPk2EduClsTeacherType]不能为空!(In clsPk2EduClsTeacherTypeWApi.GetObjByIdPk2EduClsTeacherTypelocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdPk2EduClsTeacherType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdPk2EduClsTeacherType]的长度:[{0}]不正确!(clsPk2EduClsTeacherTypeWApi.GetObjByIdPk2EduClsTeacherTypelocalStorage)',
      strIdPk2EduClsTeacherType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format(
    '{0}_{1}',
    clsPk2EduClsTeacherTypeEN._CurrTabName,
    strIdPk2EduClsTeacherType,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPk2EduClsTeacherTypeCache: clsPk2EduClsTeacherTypeEN = JSON.parse(strTempObj);
    return objPk2EduClsTeacherTypeCache;
  }
  try {
    const objPk2EduClsTeacherType = await Pk2EduClsTeacherType_GetObjByIdPk2EduClsTeacherTypeAsync(
      strIdPk2EduClsTeacherType,
    );
    if (objPk2EduClsTeacherType != null) {
      localStorage.setItem(strKey, JSON.stringify(objPk2EduClsTeacherType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPk2EduClsTeacherType;
    }
    return objPk2EduClsTeacherType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdPk2EduClsTeacherType,
      pk2EduClsTeacherType_ConstructorName,
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
 * @param objPk2EduClsTeacherType:所给的对象
 * @returns 对象
 */
export async function Pk2EduClsTeacherType_UpdateObjInLstCache(
  objPk2EduClsTeacherType: clsPk2EduClsTeacherTypeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPk2EduClsTeacherTypeObjLstCache = await Pk2EduClsTeacherType_GetObjLstCache();
    const obj = arrPk2EduClsTeacherTypeObjLstCache.find(
      (x) => x.idPk2EduClsTeacherType == objPk2EduClsTeacherType.idPk2EduClsTeacherType,
    );
    if (obj != null) {
      objPk2EduClsTeacherType.idPk2EduClsTeacherType = obj.idPk2EduClsTeacherType;
      ObjectAssign(obj, objPk2EduClsTeacherType);
    } else {
      arrPk2EduClsTeacherTypeObjLstCache.push(objPk2EduClsTeacherType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      pk2EduClsTeacherType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdPk2EduClsTeacherType:所给的关键字
 * @returns 对象
 */
export async function Pk2EduClsTeacherType_GetNameByIdPk2EduClsTeacherTypeCache(
  strIdPk2EduClsTeacherType: string,
) {
  if (IsNullOrEmpty(strIdPk2EduClsTeacherType) == true) {
    const strMsg = Format(
      '参数:[strIdPk2EduClsTeacherType]不能为空!(In clsPk2EduClsTeacherTypeWApi.GetNameByIdPk2EduClsTeacherTypeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdPk2EduClsTeacherType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdPk2EduClsTeacherType]的长度:[{0}]不正确!(clsPk2EduClsTeacherTypeWApi.GetNameByIdPk2EduClsTeacherTypeCache)',
      strIdPk2EduClsTeacherType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPk2EduClsTeacherTypeObjLstCache = await Pk2EduClsTeacherType_GetObjLstCache();
  if (arrPk2EduClsTeacherTypeObjLstCache == null) return '';
  try {
    const arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeObjLstCache.filter(
      (x) => x.idPk2EduClsTeacherType == strIdPk2EduClsTeacherType,
    );
    let objPk2EduClsTeacherType: clsPk2EduClsTeacherTypeEN;
    if (arrPk2EduClsTeacherTypeSel.length > 0) {
      objPk2EduClsTeacherType = arrPk2EduClsTeacherTypeSel[0];
      return objPk2EduClsTeacherType.eduClsTeacherTypeDesc;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdPk2EduClsTeacherType,
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
export async function Pk2EduClsTeacherType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsPk2EduClsTeacherTypeEN.con_IdPk2EduClsTeacherType) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPk2EduClsTeacherTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPk2EduClsTeacherTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdPk2EduClsTeacherType = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objPk2EduClsTeacherType = await Pk2EduClsTeacherType_GetObjByIdPk2EduClsTeacherTypeCache(
    strIdPk2EduClsTeacherType,
  );
  if (objPk2EduClsTeacherType == null) return '';
  if (objPk2EduClsTeacherType.GetFldValue(strOutFldName) == null) return '';
  return objPk2EduClsTeacherType.GetFldValue(strOutFldName).toString();
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
export function Pk2EduClsTeacherType_SortFunDefa(
  a: clsPk2EduClsTeacherTypeEN,
  b: clsPk2EduClsTeacherTypeEN,
): number {
  return a.idPk2EduClsTeacherType.localeCompare(b.idPk2EduClsTeacherType);
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
export function Pk2EduClsTeacherType_SortFunDefa2Fld(
  a: clsPk2EduClsTeacherTypeEN,
  b: clsPk2EduClsTeacherTypeEN,
): number {
  if (a.eduClsTeacherTypeId == b.eduClsTeacherTypeId)
    return a.eduClsTeacherTypeDesc.localeCompare(b.eduClsTeacherTypeDesc);
  else return a.eduClsTeacherTypeId.localeCompare(b.eduClsTeacherTypeId);
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
export function Pk2EduClsTeacherType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPk2EduClsTeacherTypeEN.con_IdPk2EduClsTeacherType:
        return (a: clsPk2EduClsTeacherTypeEN, b: clsPk2EduClsTeacherTypeEN) => {
          return a.idPk2EduClsTeacherType.localeCompare(b.idPk2EduClsTeacherType);
        };
      case clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeId:
        return (a: clsPk2EduClsTeacherTypeEN, b: clsPk2EduClsTeacherTypeEN) => {
          if (a.eduClsTeacherTypeId == null) return -1;
          if (b.eduClsTeacherTypeId == null) return 1;
          return a.eduClsTeacherTypeId.localeCompare(b.eduClsTeacherTypeId);
        };
      case clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeDesc:
        return (a: clsPk2EduClsTeacherTypeEN, b: clsPk2EduClsTeacherTypeEN) => {
          if (a.eduClsTeacherTypeDesc == null) return -1;
          if (b.eduClsTeacherTypeDesc == null) return 1;
          return a.eduClsTeacherTypeDesc.localeCompare(b.eduClsTeacherTypeDesc);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Pk2EduClsTeacherType]中不存在!(in ${pk2EduClsTeacherType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPk2EduClsTeacherTypeEN.con_IdPk2EduClsTeacherType:
        return (a: clsPk2EduClsTeacherTypeEN, b: clsPk2EduClsTeacherTypeEN) => {
          return b.idPk2EduClsTeacherType.localeCompare(a.idPk2EduClsTeacherType);
        };
      case clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeId:
        return (a: clsPk2EduClsTeacherTypeEN, b: clsPk2EduClsTeacherTypeEN) => {
          if (b.eduClsTeacherTypeId == null) return -1;
          if (a.eduClsTeacherTypeId == null) return 1;
          return b.eduClsTeacherTypeId.localeCompare(a.eduClsTeacherTypeId);
        };
      case clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeDesc:
        return (a: clsPk2EduClsTeacherTypeEN, b: clsPk2EduClsTeacherTypeEN) => {
          if (b.eduClsTeacherTypeDesc == null) return -1;
          if (a.eduClsTeacherTypeDesc == null) return 1;
          return b.eduClsTeacherTypeDesc.localeCompare(a.eduClsTeacherTypeDesc);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Pk2EduClsTeacherType]中不存在!(in ${pk2EduClsTeacherType_ConstructorName}.${strThisFuncName})`;
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
export async function Pk2EduClsTeacherType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPk2EduClsTeacherTypeEN.con_IdPk2EduClsTeacherType:
      return (obj: clsPk2EduClsTeacherTypeEN) => {
        return obj.idPk2EduClsTeacherType === value;
      };
    case clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeId:
      return (obj: clsPk2EduClsTeacherTypeEN) => {
        return obj.eduClsTeacherTypeId === value;
      };
    case clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeDesc:
      return (obj: clsPk2EduClsTeacherTypeEN) => {
        return obj.eduClsTeacherTypeDesc === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[Pk2EduClsTeacherType]中不存在!(in ${pk2EduClsTeacherType_ConstructorName}.${strThisFuncName})`;
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
export async function Pk2EduClsTeacherType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsPk2EduClsTeacherTypeEN.con_IdPk2EduClsTeacherType) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrPk2EduClsTeacherType = await Pk2EduClsTeacherType_GetObjLstCache();
  if (arrPk2EduClsTeacherType == null) return [];
  let arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPk2EduClsTeacherTypeSel.length == 0) return [];
  return arrPk2EduClsTeacherTypeSel.map((x) => x.idPk2EduClsTeacherType);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function Pk2EduClsTeacherType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
export async function Pk2EduClsTeacherType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
export async function Pk2EduClsTeacherType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPk2EduClsTeacherTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

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
      const objPk2EduClsTeacherType = Pk2EduClsTeacherType_GetObjFromJsonObj(returnObj);
      return objPk2EduClsTeacherType;
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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
export async function Pk2EduClsTeacherType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPk2EduClsTeacherTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPk2EduClsTeacherTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPk2EduClsTeacherTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPk2EduClsTeacherTypeExObjLstCache: Array<clsPk2EduClsTeacherTypeEN> =
      CacheHelper.Get(strKey);
    const arrPk2EduClsTeacherTypeObjLstT = Pk2EduClsTeacherType_GetObjLstByJSONObjLst(
      arrPk2EduClsTeacherTypeExObjLstCache,
    );
    return arrPk2EduClsTeacherTypeObjLstT;
  }
  try {
    const arrPk2EduClsTeacherTypeExObjLst = await Pk2EduClsTeacherType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPk2EduClsTeacherTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPk2EduClsTeacherTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPk2EduClsTeacherTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      pk2EduClsTeacherType_ConstructorName,
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
export async function Pk2EduClsTeacherType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPk2EduClsTeacherTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPk2EduClsTeacherTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPk2EduClsTeacherTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPk2EduClsTeacherTypeExObjLstCache: Array<clsPk2EduClsTeacherTypeEN> =
      JSON.parse(strTempObjLst);
    const arrPk2EduClsTeacherTypeObjLstT = Pk2EduClsTeacherType_GetObjLstByJSONObjLst(
      arrPk2EduClsTeacherTypeExObjLstCache,
    );
    return arrPk2EduClsTeacherTypeObjLstT;
  }
  try {
    const arrPk2EduClsTeacherTypeExObjLst = await Pk2EduClsTeacherType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPk2EduClsTeacherTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPk2EduClsTeacherTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPk2EduClsTeacherTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      pk2EduClsTeacherType_ConstructorName,
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
export async function Pk2EduClsTeacherType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPk2EduClsTeacherTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPk2EduClsTeacherTypeObjLstCache: Array<clsPk2EduClsTeacherTypeEN> =
      JSON.parse(strTempObjLst);
    return arrPk2EduClsTeacherTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function Pk2EduClsTeacherType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPk2EduClsTeacherTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

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
          pk2EduClsTeacherType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Pk2EduClsTeacherType_GetObjLstByJSONObjLst(returnObjLst);
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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
export async function Pk2EduClsTeacherType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPk2EduClsTeacherTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPk2EduClsTeacherTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPk2EduClsTeacherTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPk2EduClsTeacherTypeExObjLstCache: Array<clsPk2EduClsTeacherTypeEN> =
      JSON.parse(strTempObjLst);
    const arrPk2EduClsTeacherTypeObjLstT = Pk2EduClsTeacherType_GetObjLstByJSONObjLst(
      arrPk2EduClsTeacherTypeExObjLstCache,
    );
    return arrPk2EduClsTeacherTypeObjLstT;
  }
  try {
    const arrPk2EduClsTeacherTypeExObjLst = await Pk2EduClsTeacherType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPk2EduClsTeacherTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPk2EduClsTeacherTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPk2EduClsTeacherTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      pk2EduClsTeacherType_ConstructorName,
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
export async function Pk2EduClsTeacherType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPk2EduClsTeacherTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPk2EduClsTeacherTypeObjLstCache: Array<clsPk2EduClsTeacherTypeEN> =
      JSON.parse(strTempObjLst);
    return arrPk2EduClsTeacherTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function Pk2EduClsTeacherType_GetObjLstCache(): Promise<
  Array<clsPk2EduClsTeacherTypeEN>
> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrPk2EduClsTeacherTypeObjLstCache;
  switch (clsPk2EduClsTeacherTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrPk2EduClsTeacherTypeObjLstCache = await Pk2EduClsTeacherType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrPk2EduClsTeacherTypeObjLstCache = await Pk2EduClsTeacherType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrPk2EduClsTeacherTypeObjLstCache = await Pk2EduClsTeacherType_GetObjLstClientCache();
      break;
    default:
      arrPk2EduClsTeacherTypeObjLstCache = await Pk2EduClsTeacherType_GetObjLstClientCache();
      break;
  }
  return arrPk2EduClsTeacherTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function Pk2EduClsTeacherType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPk2EduClsTeacherTypeObjLstCache;
  switch (clsPk2EduClsTeacherTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrPk2EduClsTeacherTypeObjLstCache =
        await Pk2EduClsTeacherType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrPk2EduClsTeacherTypeObjLstCache =
        await Pk2EduClsTeacherType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrPk2EduClsTeacherTypeObjLstCache = null;
      break;
    default:
      arrPk2EduClsTeacherTypeObjLstCache = null;
      break;
  }
  return arrPk2EduClsTeacherTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdPk2EduClsTeacherTypeCond:条件对象
 * @returns 对象列表子集
 */
export async function Pk2EduClsTeacherType_GetSubObjLstCache(
  objPk2EduClsTeacherTypeCond: clsPk2EduClsTeacherTypeEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPk2EduClsTeacherTypeObjLstCache = await Pk2EduClsTeacherType_GetObjLstCache();
  let arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeObjLstCache;
  if (
    objPk2EduClsTeacherTypeCond.sfFldComparisonOp == null ||
    objPk2EduClsTeacherTypeCond.sfFldComparisonOp == ''
  )
    return arrPk2EduClsTeacherTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPk2EduClsTeacherTypeCond.sfFldComparisonOp,
  );
  //console.log("clsPk2EduClsTeacherTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPk2EduClsTeacherTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPk2EduClsTeacherTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPk2EduClsTeacherTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPk2EduClsTeacherTypeCond),
      pk2EduClsTeacherType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPk2EduClsTeacherTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdPk2EduClsTeacherType:关键字列表
 * @returns 对象列表
 **/
export async function Pk2EduClsTeacherType_GetObjLstByIdPk2EduClsTeacherTypeLstAsync(
  arrIdPk2EduClsTeacherType: Array<string>,
): Promise<Array<clsPk2EduClsTeacherTypeEN>> {
  const strThisFuncName = 'GetObjLstByIdPk2EduClsTeacherTypeLstAsync';
  const strAction = 'GetObjLstByIdPk2EduClsTeacherTypeLst';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdPk2EduClsTeacherType, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          pk2EduClsTeacherType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Pk2EduClsTeacherType_GetObjLstByJSONObjLst(returnObjLst);
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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
 * @param arrstrIdPk2EduClsTeacherTypeLst:关键字列表
 * @returns 对象列表
 */
export async function Pk2EduClsTeacherType_GetObjLstByIdPk2EduClsTeacherTypeLstCache(
  arrIdPk2EduClsTeacherTypeLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByIdPk2EduClsTeacherTypeLstCache';
  try {
    const arrPk2EduClsTeacherTypeObjLstCache = await Pk2EduClsTeacherType_GetObjLstCache();
    const arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeObjLstCache.filter(
      (x) => arrIdPk2EduClsTeacherTypeLst.indexOf(x.idPk2EduClsTeacherType) > -1,
    );
    return arrPk2EduClsTeacherTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdPk2EduClsTeacherTypeLst.join(','),
      pk2EduClsTeacherType_ConstructorName,
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
export async function Pk2EduClsTeacherType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPk2EduClsTeacherTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

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
          pk2EduClsTeacherType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Pk2EduClsTeacherType_GetObjLstByJSONObjLst(returnObjLst);
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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
export async function Pk2EduClsTeacherType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPk2EduClsTeacherTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

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
          pk2EduClsTeacherType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Pk2EduClsTeacherType_GetObjLstByJSONObjLst(returnObjLst);
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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
export async function Pk2EduClsTeacherType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPk2EduClsTeacherTypeEN>();
  const arrPk2EduClsTeacherTypeObjLstCache = await Pk2EduClsTeacherType_GetObjLstCache();
  if (arrPk2EduClsTeacherTypeObjLstCache.length == 0) return arrPk2EduClsTeacherTypeObjLstCache;
  let arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objPk2EduClsTeacherTypeCond = new clsPk2EduClsTeacherTypeEN();
  ObjectAssign(objPk2EduClsTeacherTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsPk2EduClsTeacherTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPk2EduClsTeacherTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPk2EduClsTeacherTypeSel.length == 0) return arrPk2EduClsTeacherTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.sort(
        Pk2EduClsTeacherType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.sort(objPagerPara.sortFun);
    }
    arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.slice(intStart, intEnd);
    return arrPk2EduClsTeacherTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      pk2EduClsTeacherType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPk2EduClsTeacherTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function Pk2EduClsTeacherType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPk2EduClsTeacherTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPk2EduClsTeacherTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

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
          pk2EduClsTeacherType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Pk2EduClsTeacherType_GetObjLstByJSONObjLst(returnObjLst);
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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
 * @param strIdPk2EduClsTeacherType:关键字
 * @returns 获取删除的结果
 **/
export async function Pk2EduClsTeacherType_DelRecordAsync(
  strIdPk2EduClsTeacherType: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdPk2EduClsTeacherType);

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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
 * @param arrIdPk2EduClsTeacherType:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function Pk2EduClsTeacherType_DelPk2EduClsTeacherTypesAsync(
  arrIdPk2EduClsTeacherType: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPk2EduClsTeacherTypesAsync';
  const strAction = 'DelPk2EduClsTeacherTypes';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdPk2EduClsTeacherType, config);
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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
export async function Pk2EduClsTeacherType_DelPk2EduClsTeacherTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPk2EduClsTeacherTypesByCondAsync';
  const strAction = 'DelPk2EduClsTeacherTypesByCond';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
 * @param objPk2EduClsTeacherTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Pk2EduClsTeacherType_AddNewRecordAsync(
  objPk2EduClsTeacherTypeEN: clsPk2EduClsTeacherTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (
    objPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType === null ||
    objPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType === ''
  ) {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPk2EduClsTeacherTypeEN);
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPk2EduClsTeacherTypeEN, config);
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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
 * @param objPk2EduClsTeacherTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Pk2EduClsTeacherType_AddNewRecordWithMaxIdAsync(
  objPk2EduClsTeacherTypeEN: clsPk2EduClsTeacherTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPk2EduClsTeacherTypeEN, config);
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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
 * @param objPk2EduClsTeacherTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function Pk2EduClsTeacherType_AddNewRecordWithReturnKeyAsync(
  objPk2EduClsTeacherTypeEN: clsPk2EduClsTeacherTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPk2EduClsTeacherTypeEN, config);
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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
 * @param objPk2EduClsTeacherTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function Pk2EduClsTeacherType_UpdateRecordAsync(
  objPk2EduClsTeacherTypeEN: clsPk2EduClsTeacherTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPk2EduClsTeacherTypeEN.sfUpdFldSetStr === undefined ||
    objPk2EduClsTeacherTypeEN.sfUpdFldSetStr === null ||
    objPk2EduClsTeacherTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPk2EduClsTeacherTypeEN, config);
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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
 * @param objPk2EduClsTeacherTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function Pk2EduClsTeacherType_UpdateWithConditionAsync(
  objPk2EduClsTeacherTypeEN: clsPk2EduClsTeacherTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPk2EduClsTeacherTypeEN.sfUpdFldSetStr === undefined ||
    objPk2EduClsTeacherTypeEN.sfUpdFldSetStr === null ||
    objPk2EduClsTeacherTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);
  objPk2EduClsTeacherTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPk2EduClsTeacherTypeEN, config);
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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
 * @param objstrIdPk2EduClsTeacherTypeCond:条件对象
 * @returns 对象列表子集
 */
export async function Pk2EduClsTeacherType_IsExistRecordCache(
  objPk2EduClsTeacherTypeCond: clsPk2EduClsTeacherTypeEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPk2EduClsTeacherTypeObjLstCache = await Pk2EduClsTeacherType_GetObjLstCache();
  if (arrPk2EduClsTeacherTypeObjLstCache == null) return false;
  let arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeObjLstCache;
  if (
    objPk2EduClsTeacherTypeCond.sfFldComparisonOp == null ||
    objPk2EduClsTeacherTypeCond.sfFldComparisonOp == ''
  )
    return arrPk2EduClsTeacherTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPk2EduClsTeacherTypeCond.sfFldComparisonOp,
  );
  //console.log("clsPk2EduClsTeacherTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPk2EduClsTeacherTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPk2EduClsTeacherTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPk2EduClsTeacherTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPk2EduClsTeacherTypeCond),
      pk2EduClsTeacherType_ConstructorName,
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
export async function Pk2EduClsTeacherType_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
 * @param strIdPk2EduClsTeacherType:所给的关键字
 * @returns 对象
 */
export async function Pk2EduClsTeacherType_IsExistCache(strIdPk2EduClsTeacherType: string) {
  const strThisFuncName = 'IsExistCache';
  const arrPk2EduClsTeacherTypeObjLstCache = await Pk2EduClsTeacherType_GetObjLstCache();
  if (arrPk2EduClsTeacherTypeObjLstCache == null) return false;
  try {
    const arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeObjLstCache.filter(
      (x) => x.idPk2EduClsTeacherType == strIdPk2EduClsTeacherType,
    );
    if (arrPk2EduClsTeacherTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdPk2EduClsTeacherType,
      pk2EduClsTeacherType_ConstructorName,
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
 * @param strIdPk2EduClsTeacherType:关键字
 * @returns 是否存在?存在返回True
 **/
export async function Pk2EduClsTeacherType_IsExistAsync(
  strIdPk2EduClsTeacherType: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdPk2EduClsTeacherType,
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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
export async function Pk2EduClsTeacherType_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
 * @param objPk2EduClsTeacherTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function Pk2EduClsTeacherType_GetRecCountByCondCache(
  objPk2EduClsTeacherTypeCond: clsPk2EduClsTeacherTypeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPk2EduClsTeacherTypeObjLstCache = await Pk2EduClsTeacherType_GetObjLstCache();
  if (arrPk2EduClsTeacherTypeObjLstCache == null) return 0;
  let arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeObjLstCache;
  if (
    objPk2EduClsTeacherTypeCond.sfFldComparisonOp == null ||
    objPk2EduClsTeacherTypeCond.sfFldComparisonOp == ''
  )
    return arrPk2EduClsTeacherTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPk2EduClsTeacherTypeCond.sfFldComparisonOp,
  );
  //console.log("clsPk2EduClsTeacherTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPk2EduClsTeacherTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPk2EduClsTeacherTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPk2EduClsTeacherTypeSel = arrPk2EduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPk2EduClsTeacherTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPk2EduClsTeacherTypeCond),
      pk2EduClsTeacherType_ConstructorName,
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
export async function Pk2EduClsTeacherType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(pk2EduClsTeacherType_Controller, strAction);

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
        pk2EduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pk2EduClsTeacherType_ConstructorName,
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
export function Pk2EduClsTeacherType_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
export function Pk2EduClsTeacherType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsPk2EduClsTeacherTypeEN._CurrTabName;
  switch (clsPk2EduClsTeacherTypeEN.CacheModeId) {
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
export function Pk2EduClsTeacherType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsPk2EduClsTeacherTypeEN._CurrTabName;
    switch (clsPk2EduClsTeacherTypeEN.CacheModeId) {
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
export async function Pk2EduClsTeacherType_BindDdl_id_Pk2EduClsTeacherTypeInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_id_Pk2EduClsTeacherTypeInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_id_Pk2EduClsTeacherTypeInDivCache");
  const arrObjLstSel = await Pk2EduClsTeacherType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPk2EduClsTeacherTypeEN.con_IdPk2EduClsTeacherType,
    clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeDesc,
    '教学班教师角色表2',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Pk2EduClsTeacherType_CheckPropertyNew(
  pobjPk2EduClsTeacherTypeEN: clsPk2EduClsTeacherTypeEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType) == false &&
    GetStrLen(pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班老师角色(主讲,辅导)流水号(idPk2EduClsTeacherType)]的长度不能超过4(In 教学班教师角色表2(Pk2EduClsTeacherType))!值:$(pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType)(clsPk2EduClsTeacherTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeId) == false &&
    GetStrLen(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班教学类型ID(eduClsTeacherTypeId)]的长度不能超过4(In 教学班教师角色表2(Pk2EduClsTeacherType))!值:$(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeId)(clsPk2EduClsTeacherTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeDesc) == false &&
    GetStrLen(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeDesc) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班教师类型名(eduClsTeacherTypeDesc)]的长度不能超过20(In 教学班教师角色表2(Pk2EduClsTeacherType))!值:$(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeDesc)(clsPk2EduClsTeacherTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType) == false &&
    undefined !== pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType &&
    tzDataType.isString(pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班老师角色(主讲,辅导)流水号(idPk2EduClsTeacherType)]的值:[$(pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType)], 非法,应该为字符型(In 教学班教师角色表2(Pk2EduClsTeacherType))!(clsPk2EduClsTeacherTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeId) == false &&
    undefined !== pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeId &&
    tzDataType.isString(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班教学类型ID(eduClsTeacherTypeId)]的值:[$(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeId)], 非法,应该为字符型(In 教学班教师角色表2(Pk2EduClsTeacherType))!(clsPk2EduClsTeacherTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeDesc) == false &&
    undefined !== pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeDesc &&
    tzDataType.isString(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班教师类型名(eduClsTeacherTypeDesc)]的值:[$(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeDesc)], 非法,应该为字符型(In 教学班教师角色表2(Pk2EduClsTeacherType))!(clsPk2EduClsTeacherTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Pk2EduClsTeacherType_CheckProperty4Update(
  pobjPk2EduClsTeacherTypeEN: clsPk2EduClsTeacherTypeEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType) == false &&
    GetStrLen(pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班老师角色(主讲,辅导)流水号(idPk2EduClsTeacherType)]的长度不能超过4(In 教学班教师角色表2(Pk2EduClsTeacherType))!值:$(pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType)(clsPk2EduClsTeacherTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeId) == false &&
    GetStrLen(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班教学类型ID(eduClsTeacherTypeId)]的长度不能超过4(In 教学班教师角色表2(Pk2EduClsTeacherType))!值:$(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeId)(clsPk2EduClsTeacherTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeDesc) == false &&
    GetStrLen(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeDesc) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班教师类型名(eduClsTeacherTypeDesc)]的长度不能超过20(In 教学班教师角色表2(Pk2EduClsTeacherType))!值:$(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeDesc)(clsPk2EduClsTeacherTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType) == false &&
    undefined !== pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType &&
    tzDataType.isString(pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班老师角色(主讲,辅导)流水号(idPk2EduClsTeacherType)]的值:[$(pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType)], 非法,应该为字符型(In 教学班教师角色表2(Pk2EduClsTeacherType))!(clsPk2EduClsTeacherTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeId) == false &&
    undefined !== pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeId &&
    tzDataType.isString(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班教学类型ID(eduClsTeacherTypeId)]的值:[$(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeId)], 非法,应该为字符型(In 教学班教师角色表2(Pk2EduClsTeacherType))!(clsPk2EduClsTeacherTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeDesc) == false &&
    undefined !== pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeDesc &&
    tzDataType.isString(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班教师类型名(eduClsTeacherTypeDesc)]的值:[$(pobjPk2EduClsTeacherTypeEN.eduClsTeacherTypeDesc)], 非法,应该为字符型(In 教学班教师角色表2(Pk2EduClsTeacherType))!(clsPk2EduClsTeacherTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType) === true ||
    pobjPk2EduClsTeacherTypeEN.idPk2EduClsTeacherType.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[教学班老师角色(主讲,辅导)流水号]不能为空(In 教学班教师角色表2)!(clsPk2EduClsTeacherTypeBL:CheckProperty4Update)',
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
export function Pk2EduClsTeacherType_GetJSONStrByObj(
  pobjPk2EduClsTeacherTypeEN: clsPk2EduClsTeacherTypeEN,
): string {
  pobjPk2EduClsTeacherTypeEN.sfUpdFldSetStr = pobjPk2EduClsTeacherTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPk2EduClsTeacherTypeEN);
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
export function Pk2EduClsTeacherType_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsPk2EduClsTeacherTypeEN> {
  let arrPk2EduClsTeacherTypeObjLst = new Array<clsPk2EduClsTeacherTypeEN>();
  if (strJSON === '') {
    return arrPk2EduClsTeacherTypeObjLst;
  }
  try {
    arrPk2EduClsTeacherTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPk2EduClsTeacherTypeObjLst;
  }
  return arrPk2EduClsTeacherTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPk2EduClsTeacherTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function Pk2EduClsTeacherType_GetObjLstByJSONObjLst(
  arrPk2EduClsTeacherTypeObjLstS: Array<clsPk2EduClsTeacherTypeEN>,
): Array<clsPk2EduClsTeacherTypeEN> {
  const arrPk2EduClsTeacherTypeObjLst = new Array<clsPk2EduClsTeacherTypeEN>();
  for (const objInFor of arrPk2EduClsTeacherTypeObjLstS) {
    const obj1 = Pk2EduClsTeacherType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPk2EduClsTeacherTypeObjLst.push(obj1);
  }
  return arrPk2EduClsTeacherTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function Pk2EduClsTeacherType_GetObjByJSONStr(strJSON: string): clsPk2EduClsTeacherTypeEN {
  let pobjPk2EduClsTeacherTypeEN = new clsPk2EduClsTeacherTypeEN();
  if (strJSON === '') {
    return pobjPk2EduClsTeacherTypeEN;
  }
  try {
    pobjPk2EduClsTeacherTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPk2EduClsTeacherTypeEN;
  }
  return pobjPk2EduClsTeacherTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function Pk2EduClsTeacherType_GetCombineCondition(
  objPk2EduClsTeacherTypeCond: clsPk2EduClsTeacherTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPk2EduClsTeacherTypeCond.dicFldComparisonOp,
      clsPk2EduClsTeacherTypeEN.con_IdPk2EduClsTeacherType,
    ) == true
  ) {
    const strComparisonOpIdPk2EduClsTeacherType: string =
      objPk2EduClsTeacherTypeCond.dicFldComparisonOp[
        clsPk2EduClsTeacherTypeEN.con_IdPk2EduClsTeacherType
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPk2EduClsTeacherTypeEN.con_IdPk2EduClsTeacherType,
      objPk2EduClsTeacherTypeCond.idPk2EduClsTeacherType,
      strComparisonOpIdPk2EduClsTeacherType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPk2EduClsTeacherTypeCond.dicFldComparisonOp,
      clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeId,
    ) == true
  ) {
    const strComparisonOpEduClsTeacherTypeId: string =
      objPk2EduClsTeacherTypeCond.dicFldComparisonOp[
        clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeId,
      objPk2EduClsTeacherTypeCond.eduClsTeacherTypeId,
      strComparisonOpEduClsTeacherTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPk2EduClsTeacherTypeCond.dicFldComparisonOp,
      clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeDesc,
    ) == true
  ) {
    const strComparisonOpEduClsTeacherTypeDesc: string =
      objPk2EduClsTeacherTypeCond.dicFldComparisonOp[
        clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeDesc
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeDesc,
      objPk2EduClsTeacherTypeCond.eduClsTeacherTypeDesc,
      strComparisonOpEduClsTeacherTypeDesc,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objPk2EduClsTeacherTypeENS:源对象
 * @param objPk2EduClsTeacherTypeENT:目标对象
 */
export function Pk2EduClsTeacherType_CopyObjTo(
  objPk2EduClsTeacherTypeENS: clsPk2EduClsTeacherTypeEN,
  objPk2EduClsTeacherTypeENT: clsPk2EduClsTeacherTypeEN,
): void {
  objPk2EduClsTeacherTypeENT.idPk2EduClsTeacherType =
    objPk2EduClsTeacherTypeENS.idPk2EduClsTeacherType; //教学班老师角色(主讲,辅导)流水号
  objPk2EduClsTeacherTypeENT.eduClsTeacherTypeId = objPk2EduClsTeacherTypeENS.eduClsTeacherTypeId; //教学班教学类型ID
  objPk2EduClsTeacherTypeENT.eduClsTeacherTypeDesc =
    objPk2EduClsTeacherTypeENS.eduClsTeacherTypeDesc; //教学班教师类型名
  objPk2EduClsTeacherTypeENT.sfUpdFldSetStr = objPk2EduClsTeacherTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPk2EduClsTeacherTypeENS:源对象
 * @param objPk2EduClsTeacherTypeENT:目标对象
 */
export function Pk2EduClsTeacherType_GetObjFromJsonObj(
  objPk2EduClsTeacherTypeENS: clsPk2EduClsTeacherTypeEN,
): clsPk2EduClsTeacherTypeEN {
  const objPk2EduClsTeacherTypeENT: clsPk2EduClsTeacherTypeEN = new clsPk2EduClsTeacherTypeEN();
  ObjectAssign(objPk2EduClsTeacherTypeENT, objPk2EduClsTeacherTypeENS);
  return objPk2EduClsTeacherTypeENT;
}
