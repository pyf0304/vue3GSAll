/**
 * 类名:clsClsRmTypeWApi
 * 表名:ClsRmType(01120576)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:32
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
 * 教室类型(ClsRmType)
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
import { clsClsRmTypeEN } from '@/ts/L0Entity/SystemSet/clsClsRmTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const clsRmType_Controller = 'ClsRmTypeApi';
export const clsRmType_ConstructorName = 'clsRmType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdClassRoomType:关键字
 * @returns 对象
 **/
export async function ClsRmType_GetObjByIdClassRoomTypeAsync(
  strIdClassRoomType: string,
): Promise<clsClsRmTypeEN | null> {
  const strThisFuncName = 'GetObjByIdClassRoomTypeAsync';

  if (IsNullOrEmpty(strIdClassRoomType) == true) {
    const strMsg = Format(
      '参数:[strIdClassRoomType]不能为空!(In clsClsRmTypeWApi.GetObjByIdClassRoomTypeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdClassRoomType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdClassRoomType]的长度:[{0}]不正确!(clsClsRmTypeWApi.GetObjByIdClassRoomTypeAsync)',
      strIdClassRoomType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdClassRoomType';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdClassRoomType,
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
      const objClsRmType = ClsRmType_GetObjFromJsonObj(returnObj);
      return objClsRmType;
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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
 * @param strIdClassRoomType:所给的关键字
 * @returns 对象
 */
export async function ClsRmType_GetObjByIdClassRoomTypeCache(
  strIdClassRoomType: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByIdClassRoomTypeCache';

  if (IsNullOrEmpty(strIdClassRoomType) == true) {
    const strMsg = Format(
      '参数:[strIdClassRoomType]不能为空!(In clsClsRmTypeWApi.GetObjByIdClassRoomTypeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdClassRoomType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdClassRoomType]的长度:[{0}]不正确!(clsClsRmTypeWApi.GetObjByIdClassRoomTypeCache)',
      strIdClassRoomType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstCache();
  try {
    const arrClsRmTypeSel = arrClsRmTypeObjLstCache.filter(
      (x) => x.idClassRoomType == strIdClassRoomType,
    );
    let objClsRmType: clsClsRmTypeEN;
    if (arrClsRmTypeSel.length > 0) {
      objClsRmType = arrClsRmTypeSel[0];
      return objClsRmType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objClsRmTypeConst = await ClsRmType_GetObjByIdClassRoomTypeAsync(strIdClassRoomType);
        if (objClsRmTypeConst != null) {
          ClsRmType_ReFreshThisCache();
          return objClsRmTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdClassRoomType,
      clsRmType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdClassRoomType:所给的关键字
 * @returns 对象
 */
export async function ClsRmType_GetObjByIdClassRoomTypelocalStorage(strIdClassRoomType: string) {
  const strThisFuncName = 'GetObjByIdClassRoomTypelocalStorage';

  if (IsNullOrEmpty(strIdClassRoomType) == true) {
    const strMsg = Format(
      '参数:[strIdClassRoomType]不能为空!(In clsClsRmTypeWApi.GetObjByIdClassRoomTypelocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdClassRoomType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdClassRoomType]的长度:[{0}]不正确!(clsClsRmTypeWApi.GetObjByIdClassRoomTypelocalStorage)',
      strIdClassRoomType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsClsRmTypeEN._CurrTabName, strIdClassRoomType);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objClsRmTypeCache: clsClsRmTypeEN = JSON.parse(strTempObj);
    return objClsRmTypeCache;
  }
  try {
    const objClsRmType = await ClsRmType_GetObjByIdClassRoomTypeAsync(strIdClassRoomType);
    if (objClsRmType != null) {
      localStorage.setItem(strKey, JSON.stringify(objClsRmType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objClsRmType;
    }
    return objClsRmType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdClassRoomType,
      clsRmType_ConstructorName,
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
 * @param objClsRmType:所给的对象
 * @returns 对象
 */
export async function ClsRmType_UpdateObjInLstCache(objClsRmType: clsClsRmTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstCache();
    const obj = arrClsRmTypeObjLstCache.find(
      (x) => x.idClassRoomType == objClsRmType.idClassRoomType,
    );
    if (obj != null) {
      objClsRmType.idClassRoomType = obj.idClassRoomType;
      ObjectAssign(obj, objClsRmType);
    } else {
      arrClsRmTypeObjLstCache.push(objClsRmType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      clsRmType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdClassRoomType:所给的关键字
 * @returns 对象
 */
export async function ClsRmType_GetNameByIdClassRoomTypeCache(strIdClassRoomType: string) {
  if (IsNullOrEmpty(strIdClassRoomType) == true) {
    const strMsg = Format(
      '参数:[strIdClassRoomType]不能为空!(In clsClsRmTypeWApi.GetNameByIdClassRoomTypeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdClassRoomType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdClassRoomType]的长度:[{0}]不正确!(clsClsRmTypeWApi.GetNameByIdClassRoomTypeCache)',
      strIdClassRoomType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstCache();
  if (arrClsRmTypeObjLstCache == null) return '';
  try {
    const arrClsRmTypeSel = arrClsRmTypeObjLstCache.filter(
      (x) => x.idClassRoomType == strIdClassRoomType,
    );
    let objClsRmType: clsClsRmTypeEN;
    if (arrClsRmTypeSel.length > 0) {
      objClsRmType = arrClsRmTypeSel[0];
      return objClsRmType.classRoomTypeDesc;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdClassRoomType,
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
export async function ClsRmType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsClsRmTypeEN.con_IdClassRoomType) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsClsRmTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsClsRmTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdClassRoomType = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objClsRmType = await ClsRmType_GetObjByIdClassRoomTypeCache(strIdClassRoomType);
  if (objClsRmType == null) return '';
  if (objClsRmType.GetFldValue(strOutFldName) == null) return '';
  return objClsRmType.GetFldValue(strOutFldName).toString();
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
export function ClsRmType_SortFunDefa(a: clsClsRmTypeEN, b: clsClsRmTypeEN): number {
  return a.idClassRoomType.localeCompare(b.idClassRoomType);
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
export function ClsRmType_SortFunDefa2Fld(a: clsClsRmTypeEN, b: clsClsRmTypeEN): number {
  if (a.classRoomTypeID == b.classRoomTypeID)
    return a.classRoomTypeDesc.localeCompare(b.classRoomTypeDesc);
  else return a.classRoomTypeID.localeCompare(b.classRoomTypeID);
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
export function ClsRmType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsClsRmTypeEN.con_IdClassRoomType:
        return (a: clsClsRmTypeEN, b: clsClsRmTypeEN) => {
          return a.idClassRoomType.localeCompare(b.idClassRoomType);
        };
      case clsClsRmTypeEN.con_ClassRoomTypeID:
        return (a: clsClsRmTypeEN, b: clsClsRmTypeEN) => {
          if (a.classRoomTypeID == null) return -1;
          if (b.classRoomTypeID == null) return 1;
          return a.classRoomTypeID.localeCompare(b.classRoomTypeID);
        };
      case clsClsRmTypeEN.con_ClassRoomTypeDesc:
        return (a: clsClsRmTypeEN, b: clsClsRmTypeEN) => {
          if (a.classRoomTypeDesc == null) return -1;
          if (b.classRoomTypeDesc == null) return 1;
          return a.classRoomTypeDesc.localeCompare(b.classRoomTypeDesc);
        };
      case clsClsRmTypeEN.con_ClassRoomTypeDescA:
        return (a: clsClsRmTypeEN, b: clsClsRmTypeEN) => {
          if (a.classRoomTypeDescA == null) return -1;
          if (b.classRoomTypeDescA == null) return 1;
          return a.classRoomTypeDescA.localeCompare(b.classRoomTypeDescA);
        };
      case clsClsRmTypeEN.con_ModifyUserId:
        return (a: clsClsRmTypeEN, b: clsClsRmTypeEN) => {
          return a.modifyUserId.localeCompare(b.modifyUserId);
        };
      case clsClsRmTypeEN.con_ModifyDate:
        return (a: clsClsRmTypeEN, b: clsClsRmTypeEN) => {
          return a.modifyDate.localeCompare(b.modifyDate);
        };
      case clsClsRmTypeEN.con_Memo:
        return (a: clsClsRmTypeEN, b: clsClsRmTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ClsRmType]中不存在!(in ${clsRmType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsClsRmTypeEN.con_IdClassRoomType:
        return (a: clsClsRmTypeEN, b: clsClsRmTypeEN) => {
          return b.idClassRoomType.localeCompare(a.idClassRoomType);
        };
      case clsClsRmTypeEN.con_ClassRoomTypeID:
        return (a: clsClsRmTypeEN, b: clsClsRmTypeEN) => {
          if (b.classRoomTypeID == null) return -1;
          if (a.classRoomTypeID == null) return 1;
          return b.classRoomTypeID.localeCompare(a.classRoomTypeID);
        };
      case clsClsRmTypeEN.con_ClassRoomTypeDesc:
        return (a: clsClsRmTypeEN, b: clsClsRmTypeEN) => {
          if (b.classRoomTypeDesc == null) return -1;
          if (a.classRoomTypeDesc == null) return 1;
          return b.classRoomTypeDesc.localeCompare(a.classRoomTypeDesc);
        };
      case clsClsRmTypeEN.con_ClassRoomTypeDescA:
        return (a: clsClsRmTypeEN, b: clsClsRmTypeEN) => {
          if (b.classRoomTypeDescA == null) return -1;
          if (a.classRoomTypeDescA == null) return 1;
          return b.classRoomTypeDescA.localeCompare(a.classRoomTypeDescA);
        };
      case clsClsRmTypeEN.con_ModifyUserId:
        return (a: clsClsRmTypeEN, b: clsClsRmTypeEN) => {
          return b.modifyUserId.localeCompare(a.modifyUserId);
        };
      case clsClsRmTypeEN.con_ModifyDate:
        return (a: clsClsRmTypeEN, b: clsClsRmTypeEN) => {
          return b.modifyDate.localeCompare(a.modifyDate);
        };
      case clsClsRmTypeEN.con_Memo:
        return (a: clsClsRmTypeEN, b: clsClsRmTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ClsRmType]中不存在!(in ${clsRmType_ConstructorName}.${strThisFuncName})`;
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
export async function ClsRmType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsClsRmTypeEN.con_IdClassRoomType:
      return (obj: clsClsRmTypeEN) => {
        return obj.idClassRoomType === value;
      };
    case clsClsRmTypeEN.con_ClassRoomTypeID:
      return (obj: clsClsRmTypeEN) => {
        return obj.classRoomTypeID === value;
      };
    case clsClsRmTypeEN.con_ClassRoomTypeDesc:
      return (obj: clsClsRmTypeEN) => {
        return obj.classRoomTypeDesc === value;
      };
    case clsClsRmTypeEN.con_ClassRoomTypeDescA:
      return (obj: clsClsRmTypeEN) => {
        return obj.classRoomTypeDescA === value;
      };
    case clsClsRmTypeEN.con_ModifyUserId:
      return (obj: clsClsRmTypeEN) => {
        return obj.modifyUserId === value;
      };
    case clsClsRmTypeEN.con_ModifyDate:
      return (obj: clsClsRmTypeEN) => {
        return obj.modifyDate === value;
      };
    case clsClsRmTypeEN.con_Memo:
      return (obj: clsClsRmTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ClsRmType]中不存在!(in ${clsRmType_ConstructorName}.${strThisFuncName})`;
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
export async function ClsRmType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsClsRmTypeEN.con_IdClassRoomType) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrClsRmType = await ClsRmType_GetObjLstCache();
  if (arrClsRmType == null) return [];
  let arrClsRmTypeSel = arrClsRmType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrClsRmTypeSel = arrClsRmTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrClsRmTypeSel = arrClsRmTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrClsRmTypeSel = arrClsRmTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrClsRmTypeSel = arrClsRmTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrClsRmTypeSel = arrClsRmTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrClsRmTypeSel = arrClsRmTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrClsRmTypeSel = arrClsRmTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrClsRmTypeSel = arrClsRmTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrClsRmTypeSel.length == 0) return [];
  return arrClsRmTypeSel.map((x) => x.idClassRoomType);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ClsRmType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
export async function ClsRmType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
export async function ClsRmType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsClsRmTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

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
      const objClsRmType = ClsRmType_GetObjFromJsonObj(returnObj);
      return objClsRmType;
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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
export async function ClsRmType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsClsRmTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsClsRmTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsClsRmTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrClsRmTypeExObjLstCache: Array<clsClsRmTypeEN> = CacheHelper.Get(strKey);
    const arrClsRmTypeObjLstT = ClsRmType_GetObjLstByJSONObjLst(arrClsRmTypeExObjLstCache);
    return arrClsRmTypeObjLstT;
  }
  try {
    const arrClsRmTypeExObjLst = await ClsRmType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrClsRmTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrClsRmTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrClsRmTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      clsRmType_ConstructorName,
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
export async function ClsRmType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsClsRmTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsClsRmTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsClsRmTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrClsRmTypeExObjLstCache: Array<clsClsRmTypeEN> = JSON.parse(strTempObjLst);
    const arrClsRmTypeObjLstT = ClsRmType_GetObjLstByJSONObjLst(arrClsRmTypeExObjLstCache);
    return arrClsRmTypeObjLstT;
  }
  try {
    const arrClsRmTypeExObjLst = await ClsRmType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrClsRmTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrClsRmTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrClsRmTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      clsRmType_ConstructorName,
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
export async function ClsRmType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsClsRmTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrClsRmTypeObjLstCache: Array<clsClsRmTypeEN> = JSON.parse(strTempObjLst);
    return arrClsRmTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ClsRmType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsClsRmTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

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
          clsRmType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ClsRmType_GetObjLstByJSONObjLst(returnObjLst);
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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
export async function ClsRmType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsClsRmTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsClsRmTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsClsRmTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrClsRmTypeExObjLstCache: Array<clsClsRmTypeEN> = JSON.parse(strTempObjLst);
    const arrClsRmTypeObjLstT = ClsRmType_GetObjLstByJSONObjLst(arrClsRmTypeExObjLstCache);
    return arrClsRmTypeObjLstT;
  }
  try {
    const arrClsRmTypeExObjLst = await ClsRmType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrClsRmTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrClsRmTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrClsRmTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      clsRmType_ConstructorName,
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
export async function ClsRmType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsClsRmTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrClsRmTypeObjLstCache: Array<clsClsRmTypeEN> = JSON.parse(strTempObjLst);
    return arrClsRmTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ClsRmType_GetObjLstCache(): Promise<Array<clsClsRmTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrClsRmTypeObjLstCache;
  switch (clsClsRmTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstClientCache();
      break;
    default:
      arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstClientCache();
      break;
  }
  return arrClsRmTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ClsRmType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrClsRmTypeObjLstCache;
  switch (clsClsRmTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrClsRmTypeObjLstCache = null;
      break;
    default:
      arrClsRmTypeObjLstCache = null;
      break;
  }
  return arrClsRmTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdClassRoomTypeCond:条件对象
 * @returns 对象列表子集
 */
export async function ClsRmType_GetSubObjLstCache(objClsRmTypeCond: clsClsRmTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstCache();
  let arrClsRmTypeSel = arrClsRmTypeObjLstCache;
  if (objClsRmTypeCond.sfFldComparisonOp == null || objClsRmTypeCond.sfFldComparisonOp == '')
    return arrClsRmTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objClsRmTypeCond.sfFldComparisonOp,
  );
  //console.log("clsClsRmTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objClsRmTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objClsRmTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrClsRmTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objClsRmTypeCond),
      clsRmType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsClsRmTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdClassRoomType:关键字列表
 * @returns 对象列表
 **/
export async function ClsRmType_GetObjLstByIdClassRoomTypeLstAsync(
  arrIdClassRoomType: Array<string>,
): Promise<Array<clsClsRmTypeEN>> {
  const strThisFuncName = 'GetObjLstByIdClassRoomTypeLstAsync';
  const strAction = 'GetObjLstByIdClassRoomTypeLst';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdClassRoomType, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          clsRmType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ClsRmType_GetObjLstByJSONObjLst(returnObjLst);
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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
 * @param arrstrIdClassRoomTypeLst:关键字列表
 * @returns 对象列表
 */
export async function ClsRmType_GetObjLstByIdClassRoomTypeLstCache(
  arrIdClassRoomTypeLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByIdClassRoomTypeLstCache';
  try {
    const arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstCache();
    const arrClsRmTypeSel = arrClsRmTypeObjLstCache.filter(
      (x) => arrIdClassRoomTypeLst.indexOf(x.idClassRoomType) > -1,
    );
    return arrClsRmTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdClassRoomTypeLst.join(','),
      clsRmType_ConstructorName,
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
export async function ClsRmType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsClsRmTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

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
          clsRmType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ClsRmType_GetObjLstByJSONObjLst(returnObjLst);
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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
export async function ClsRmType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsClsRmTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

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
          clsRmType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ClsRmType_GetObjLstByJSONObjLst(returnObjLst);
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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
export async function ClsRmType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsClsRmTypeEN>();
  const arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstCache();
  if (arrClsRmTypeObjLstCache.length == 0) return arrClsRmTypeObjLstCache;
  let arrClsRmTypeSel = arrClsRmTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objClsRmTypeCond = new clsClsRmTypeEN();
  ObjectAssign(objClsRmTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsClsRmTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objClsRmTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrClsRmTypeSel.length == 0) return arrClsRmTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrClsRmTypeSel = arrClsRmTypeSel.sort(ClsRmType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrClsRmTypeSel = arrClsRmTypeSel.sort(objPagerPara.sortFun);
    }
    arrClsRmTypeSel = arrClsRmTypeSel.slice(intStart, intEnd);
    return arrClsRmTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      clsRmType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsClsRmTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ClsRmType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsClsRmTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsClsRmTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

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
          clsRmType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ClsRmType_GetObjLstByJSONObjLst(returnObjLst);
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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
 * @param strIdClassRoomType:关键字
 * @returns 获取删除的结果
 **/
export async function ClsRmType_DelRecordAsync(strIdClassRoomType: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(clsRmType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdClassRoomType);

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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
 * @param arrIdClassRoomType:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ClsRmType_DelClsRmTypesAsync(
  arrIdClassRoomType: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelClsRmTypesAsync';
  const strAction = 'DelClsRmTypes';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdClassRoomType, config);
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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
export async function ClsRmType_DelClsRmTypesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelClsRmTypesByCondAsync';
  const strAction = 'DelClsRmTypesByCond';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
 * @param objClsRmTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ClsRmType_AddNewRecordAsync(
  objClsRmTypeEN: clsClsRmTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objClsRmTypeEN.idClassRoomType === null || objClsRmTypeEN.idClassRoomType === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objClsRmTypeEN);
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objClsRmTypeEN, config);
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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
 * @param objClsRmTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ClsRmType_AddNewRecordWithMaxIdAsync(
  objClsRmTypeEN: clsClsRmTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objClsRmTypeEN, config);
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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
 * @param objClsRmTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ClsRmType_AddNewRecordWithReturnKeyAsync(
  objClsRmTypeEN: clsClsRmTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objClsRmTypeEN, config);
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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
 * @param objClsRmTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ClsRmType_UpdateRecordAsync(
  objClsRmTypeEN: clsClsRmTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objClsRmTypeEN.sfUpdFldSetStr === undefined ||
    objClsRmTypeEN.sfUpdFldSetStr === null ||
    objClsRmTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objClsRmTypeEN.idClassRoomType,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objClsRmTypeEN, config);
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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
 * @param objClsRmTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ClsRmType_UpdateWithConditionAsync(
  objClsRmTypeEN: clsClsRmTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objClsRmTypeEN.sfUpdFldSetStr === undefined ||
    objClsRmTypeEN.sfUpdFldSetStr === null ||
    objClsRmTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objClsRmTypeEN.idClassRoomType,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);
  objClsRmTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objClsRmTypeEN, config);
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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
 * @param objstrIdClassRoomTypeCond:条件对象
 * @returns 对象列表子集
 */
export async function ClsRmType_IsExistRecordCache(objClsRmTypeCond: clsClsRmTypeEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstCache();
  if (arrClsRmTypeObjLstCache == null) return false;
  let arrClsRmTypeSel = arrClsRmTypeObjLstCache;
  if (objClsRmTypeCond.sfFldComparisonOp == null || objClsRmTypeCond.sfFldComparisonOp == '')
    return arrClsRmTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objClsRmTypeCond.sfFldComparisonOp,
  );
  //console.log("clsClsRmTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objClsRmTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objClsRmTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrClsRmTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objClsRmTypeCond),
      clsRmType_ConstructorName,
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
export async function ClsRmType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
 * @param strIdClassRoomType:所给的关键字
 * @returns 对象
 */
export async function ClsRmType_IsExistCache(strIdClassRoomType: string) {
  const strThisFuncName = 'IsExistCache';
  const arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstCache();
  if (arrClsRmTypeObjLstCache == null) return false;
  try {
    const arrClsRmTypeSel = arrClsRmTypeObjLstCache.filter(
      (x) => x.idClassRoomType == strIdClassRoomType,
    );
    if (arrClsRmTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdClassRoomType,
      clsRmType_ConstructorName,
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
 * @param strIdClassRoomType:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ClsRmType_IsExistAsync(strIdClassRoomType: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdClassRoomType,
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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
export async function ClsRmType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
 * @param objClsRmTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function ClsRmType_GetRecCountByCondCache(objClsRmTypeCond: clsClsRmTypeEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrClsRmTypeObjLstCache = await ClsRmType_GetObjLstCache();
  if (arrClsRmTypeObjLstCache == null) return 0;
  let arrClsRmTypeSel = arrClsRmTypeObjLstCache;
  if (objClsRmTypeCond.sfFldComparisonOp == null || objClsRmTypeCond.sfFldComparisonOp == '')
    return arrClsRmTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objClsRmTypeCond.sfFldComparisonOp,
  );
  //console.log("clsClsRmTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objClsRmTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objClsRmTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrClsRmTypeSel = arrClsRmTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrClsRmTypeSel = arrClsRmTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrClsRmTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objClsRmTypeCond),
      clsRmType_ConstructorName,
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
export async function ClsRmType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(clsRmType_Controller, strAction);

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
        clsRmType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        clsRmType_ConstructorName,
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
export function ClsRmType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ClsRmType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsClsRmTypeEN._CurrTabName;
  switch (clsClsRmTypeEN.CacheModeId) {
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
export function ClsRmType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsClsRmTypeEN._CurrTabName;
    switch (clsClsRmTypeEN.CacheModeId) {
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
export async function ClsRmType_BindDdl_id_ClassRoomTypeInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_id_ClassRoomTypeInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_id_ClassRoomTypeInDivCache");
  const arrObjLstSel = await ClsRmType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsClsRmTypeEN.con_IdClassRoomType,
    clsClsRmTypeEN.con_ClassRoomTypeDesc,
    '教室类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ClsRmType_CheckPropertyNew(pobjClsRmTypeEN: clsClsRmTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjClsRmTypeEN.modifyUserId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[修改人]不能为空(In 教室类型)!(clsClsRmTypeBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjClsRmTypeEN.modifyDate) === true) {
    throw new Error(
      '(errid:Watl000411)字段[修改日期]不能为空(In 教室类型)!(clsClsRmTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.idClassRoomType) == false &&
    GetStrLen(pobjClsRmTypeEN.idClassRoomType) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教室类型流水号(idClassRoomType)]的长度不能超过4(In 教室类型(ClsRmType))!值:$(pobjClsRmTypeEN.idClassRoomType)(clsClsRmTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.classRoomTypeID) == false &&
    GetStrLen(pobjClsRmTypeEN.classRoomTypeID) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教室类型代号(classRoomTypeID)]的长度不能超过4(In 教室类型(ClsRmType))!值:$(pobjClsRmTypeEN.classRoomTypeID)(clsClsRmTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.classRoomTypeDesc) == false &&
    GetStrLen(pobjClsRmTypeEN.classRoomTypeDesc) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教室类型描述(classRoomTypeDesc)]的长度不能超过100(In 教室类型(ClsRmType))!值:$(pobjClsRmTypeEN.classRoomTypeDesc)(clsClsRmTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.classRoomTypeDescA) == false &&
    GetStrLen(pobjClsRmTypeEN.classRoomTypeDescA) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教室类型简称(classRoomTypeDescA)]的长度不能超过100(In 教室类型(ClsRmType))!值:$(pobjClsRmTypeEN.classRoomTypeDescA)(clsClsRmTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.modifyUserId) == false &&
    GetStrLen(pobjClsRmTypeEN.modifyUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 教室类型(ClsRmType))!值:$(pobjClsRmTypeEN.modifyUserId)(clsClsRmTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.modifyDate) == false &&
    GetStrLen(pobjClsRmTypeEN.modifyDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 教室类型(ClsRmType))!值:$(pobjClsRmTypeEN.modifyDate)(clsClsRmTypeBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjClsRmTypeEN.memo) == false && GetStrLen(pobjClsRmTypeEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 教室类型(ClsRmType))!值:$(pobjClsRmTypeEN.memo)(clsClsRmTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.idClassRoomType) == false &&
    undefined !== pobjClsRmTypeEN.idClassRoomType &&
    tzDataType.isString(pobjClsRmTypeEN.idClassRoomType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教室类型流水号(idClassRoomType)]的值:[$(pobjClsRmTypeEN.idClassRoomType)], 非法,应该为字符型(In 教室类型(ClsRmType))!(clsClsRmTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.classRoomTypeID) == false &&
    undefined !== pobjClsRmTypeEN.classRoomTypeID &&
    tzDataType.isString(pobjClsRmTypeEN.classRoomTypeID) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教室类型代号(classRoomTypeID)]的值:[$(pobjClsRmTypeEN.classRoomTypeID)], 非法,应该为字符型(In 教室类型(ClsRmType))!(clsClsRmTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.classRoomTypeDesc) == false &&
    undefined !== pobjClsRmTypeEN.classRoomTypeDesc &&
    tzDataType.isString(pobjClsRmTypeEN.classRoomTypeDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教室类型描述(classRoomTypeDesc)]的值:[$(pobjClsRmTypeEN.classRoomTypeDesc)], 非法,应该为字符型(In 教室类型(ClsRmType))!(clsClsRmTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.classRoomTypeDescA) == false &&
    undefined !== pobjClsRmTypeEN.classRoomTypeDescA &&
    tzDataType.isString(pobjClsRmTypeEN.classRoomTypeDescA) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教室类型简称(classRoomTypeDescA)]的值:[$(pobjClsRmTypeEN.classRoomTypeDescA)], 非法,应该为字符型(In 教室类型(ClsRmType))!(clsClsRmTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.modifyUserId) == false &&
    undefined !== pobjClsRmTypeEN.modifyUserId &&
    tzDataType.isString(pobjClsRmTypeEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjClsRmTypeEN.modifyUserId)], 非法,应该为字符型(In 教室类型(ClsRmType))!(clsClsRmTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.modifyDate) == false &&
    undefined !== pobjClsRmTypeEN.modifyDate &&
    tzDataType.isString(pobjClsRmTypeEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjClsRmTypeEN.modifyDate)], 非法,应该为字符型(In 教室类型(ClsRmType))!(clsClsRmTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.memo) == false &&
    undefined !== pobjClsRmTypeEN.memo &&
    tzDataType.isString(pobjClsRmTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjClsRmTypeEN.memo)], 非法,应该为字符型(In 教室类型(ClsRmType))!(clsClsRmTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ClsRmType_CheckProperty4Update(pobjClsRmTypeEN: clsClsRmTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.idClassRoomType) == false &&
    GetStrLen(pobjClsRmTypeEN.idClassRoomType) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教室类型流水号(idClassRoomType)]的长度不能超过4(In 教室类型(ClsRmType))!值:$(pobjClsRmTypeEN.idClassRoomType)(clsClsRmTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.classRoomTypeID) == false &&
    GetStrLen(pobjClsRmTypeEN.classRoomTypeID) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教室类型代号(classRoomTypeID)]的长度不能超过4(In 教室类型(ClsRmType))!值:$(pobjClsRmTypeEN.classRoomTypeID)(clsClsRmTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.classRoomTypeDesc) == false &&
    GetStrLen(pobjClsRmTypeEN.classRoomTypeDesc) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教室类型描述(classRoomTypeDesc)]的长度不能超过100(In 教室类型(ClsRmType))!值:$(pobjClsRmTypeEN.classRoomTypeDesc)(clsClsRmTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.classRoomTypeDescA) == false &&
    GetStrLen(pobjClsRmTypeEN.classRoomTypeDescA) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教室类型简称(classRoomTypeDescA)]的长度不能超过100(In 教室类型(ClsRmType))!值:$(pobjClsRmTypeEN.classRoomTypeDescA)(clsClsRmTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.modifyUserId) == false &&
    GetStrLen(pobjClsRmTypeEN.modifyUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 教室类型(ClsRmType))!值:$(pobjClsRmTypeEN.modifyUserId)(clsClsRmTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.modifyDate) == false &&
    GetStrLen(pobjClsRmTypeEN.modifyDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 教室类型(ClsRmType))!值:$(pobjClsRmTypeEN.modifyDate)(clsClsRmTypeBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjClsRmTypeEN.memo) == false && GetStrLen(pobjClsRmTypeEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 教室类型(ClsRmType))!值:$(pobjClsRmTypeEN.memo)(clsClsRmTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.idClassRoomType) == false &&
    undefined !== pobjClsRmTypeEN.idClassRoomType &&
    tzDataType.isString(pobjClsRmTypeEN.idClassRoomType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教室类型流水号(idClassRoomType)]的值:[$(pobjClsRmTypeEN.idClassRoomType)], 非法,应该为字符型(In 教室类型(ClsRmType))!(clsClsRmTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.classRoomTypeID) == false &&
    undefined !== pobjClsRmTypeEN.classRoomTypeID &&
    tzDataType.isString(pobjClsRmTypeEN.classRoomTypeID) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教室类型代号(classRoomTypeID)]的值:[$(pobjClsRmTypeEN.classRoomTypeID)], 非法,应该为字符型(In 教室类型(ClsRmType))!(clsClsRmTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.classRoomTypeDesc) == false &&
    undefined !== pobjClsRmTypeEN.classRoomTypeDesc &&
    tzDataType.isString(pobjClsRmTypeEN.classRoomTypeDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教室类型描述(classRoomTypeDesc)]的值:[$(pobjClsRmTypeEN.classRoomTypeDesc)], 非法,应该为字符型(In 教室类型(ClsRmType))!(clsClsRmTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.classRoomTypeDescA) == false &&
    undefined !== pobjClsRmTypeEN.classRoomTypeDescA &&
    tzDataType.isString(pobjClsRmTypeEN.classRoomTypeDescA) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教室类型简称(classRoomTypeDescA)]的值:[$(pobjClsRmTypeEN.classRoomTypeDescA)], 非法,应该为字符型(In 教室类型(ClsRmType))!(clsClsRmTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.modifyUserId) == false &&
    undefined !== pobjClsRmTypeEN.modifyUserId &&
    tzDataType.isString(pobjClsRmTypeEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjClsRmTypeEN.modifyUserId)], 非法,应该为字符型(In 教室类型(ClsRmType))!(clsClsRmTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.modifyDate) == false &&
    undefined !== pobjClsRmTypeEN.modifyDate &&
    tzDataType.isString(pobjClsRmTypeEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjClsRmTypeEN.modifyDate)], 非法,应该为字符型(In 教室类型(ClsRmType))!(clsClsRmTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.memo) == false &&
    undefined !== pobjClsRmTypeEN.memo &&
    tzDataType.isString(pobjClsRmTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjClsRmTypeEN.memo)], 非法,应该为字符型(In 教室类型(ClsRmType))!(clsClsRmTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjClsRmTypeEN.idClassRoomType) === true ||
    pobjClsRmTypeEN.idClassRoomType.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[教室类型流水号]不能为空(In 教室类型)!(clsClsRmTypeBL:CheckProperty4Update)',
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
export function ClsRmType_GetJSONStrByObj(pobjClsRmTypeEN: clsClsRmTypeEN): string {
  pobjClsRmTypeEN.sfUpdFldSetStr = pobjClsRmTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjClsRmTypeEN);
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
export function ClsRmType_GetObjLstByJSONStr(strJSON: string): Array<clsClsRmTypeEN> {
  let arrClsRmTypeObjLst = new Array<clsClsRmTypeEN>();
  if (strJSON === '') {
    return arrClsRmTypeObjLst;
  }
  try {
    arrClsRmTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrClsRmTypeObjLst;
  }
  return arrClsRmTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrClsRmTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ClsRmType_GetObjLstByJSONObjLst(
  arrClsRmTypeObjLstS: Array<clsClsRmTypeEN>,
): Array<clsClsRmTypeEN> {
  const arrClsRmTypeObjLst = new Array<clsClsRmTypeEN>();
  for (const objInFor of arrClsRmTypeObjLstS) {
    const obj1 = ClsRmType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrClsRmTypeObjLst.push(obj1);
  }
  return arrClsRmTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ClsRmType_GetObjByJSONStr(strJSON: string): clsClsRmTypeEN {
  let pobjClsRmTypeEN = new clsClsRmTypeEN();
  if (strJSON === '') {
    return pobjClsRmTypeEN;
  }
  try {
    pobjClsRmTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjClsRmTypeEN;
  }
  return pobjClsRmTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ClsRmType_GetCombineCondition(objClsRmTypeCond: clsClsRmTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objClsRmTypeCond.dicFldComparisonOp,
      clsClsRmTypeEN.con_IdClassRoomType,
    ) == true
  ) {
    const strComparisonOpIdClassRoomType: string =
      objClsRmTypeCond.dicFldComparisonOp[clsClsRmTypeEN.con_IdClassRoomType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsClsRmTypeEN.con_IdClassRoomType,
      objClsRmTypeCond.idClassRoomType,
      strComparisonOpIdClassRoomType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objClsRmTypeCond.dicFldComparisonOp,
      clsClsRmTypeEN.con_ClassRoomTypeID,
    ) == true
  ) {
    const strComparisonOpClassRoomTypeID: string =
      objClsRmTypeCond.dicFldComparisonOp[clsClsRmTypeEN.con_ClassRoomTypeID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsClsRmTypeEN.con_ClassRoomTypeID,
      objClsRmTypeCond.classRoomTypeID,
      strComparisonOpClassRoomTypeID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objClsRmTypeCond.dicFldComparisonOp,
      clsClsRmTypeEN.con_ClassRoomTypeDesc,
    ) == true
  ) {
    const strComparisonOpClassRoomTypeDesc: string =
      objClsRmTypeCond.dicFldComparisonOp[clsClsRmTypeEN.con_ClassRoomTypeDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsClsRmTypeEN.con_ClassRoomTypeDesc,
      objClsRmTypeCond.classRoomTypeDesc,
      strComparisonOpClassRoomTypeDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objClsRmTypeCond.dicFldComparisonOp,
      clsClsRmTypeEN.con_ClassRoomTypeDescA,
    ) == true
  ) {
    const strComparisonOpClassRoomTypeDescA: string =
      objClsRmTypeCond.dicFldComparisonOp[clsClsRmTypeEN.con_ClassRoomTypeDescA];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsClsRmTypeEN.con_ClassRoomTypeDescA,
      objClsRmTypeCond.classRoomTypeDescA,
      strComparisonOpClassRoomTypeDescA,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objClsRmTypeCond.dicFldComparisonOp,
      clsClsRmTypeEN.con_ModifyUserId,
    ) == true
  ) {
    const strComparisonOpModifyUserId: string =
      objClsRmTypeCond.dicFldComparisonOp[clsClsRmTypeEN.con_ModifyUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsClsRmTypeEN.con_ModifyUserId,
      objClsRmTypeCond.modifyUserId,
      strComparisonOpModifyUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objClsRmTypeCond.dicFldComparisonOp,
      clsClsRmTypeEN.con_ModifyDate,
    ) == true
  ) {
    const strComparisonOpModifyDate: string =
      objClsRmTypeCond.dicFldComparisonOp[clsClsRmTypeEN.con_ModifyDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsClsRmTypeEN.con_ModifyDate,
      objClsRmTypeCond.modifyDate,
      strComparisonOpModifyDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objClsRmTypeCond.dicFldComparisonOp,
      clsClsRmTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objClsRmTypeCond.dicFldComparisonOp[clsClsRmTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsClsRmTypeEN.con_Memo,
      objClsRmTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objClsRmTypeENS:源对象
 * @param objClsRmTypeENT:目标对象
 */
export function ClsRmType_CopyObjTo(
  objClsRmTypeENS: clsClsRmTypeEN,
  objClsRmTypeENT: clsClsRmTypeEN,
): void {
  objClsRmTypeENT.idClassRoomType = objClsRmTypeENS.idClassRoomType; //教室类型流水号
  objClsRmTypeENT.classRoomTypeID = objClsRmTypeENS.classRoomTypeID; //教室类型代号
  objClsRmTypeENT.classRoomTypeDesc = objClsRmTypeENS.classRoomTypeDesc; //教室类型描述
  objClsRmTypeENT.classRoomTypeDescA = objClsRmTypeENS.classRoomTypeDescA; //教室类型简称
  objClsRmTypeENT.modifyUserId = objClsRmTypeENS.modifyUserId; //修改人
  objClsRmTypeENT.modifyDate = objClsRmTypeENS.modifyDate; //修改日期
  objClsRmTypeENT.memo = objClsRmTypeENS.memo; //备注
  objClsRmTypeENT.sfUpdFldSetStr = objClsRmTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objClsRmTypeENS:源对象
 * @param objClsRmTypeENT:目标对象
 */
export function ClsRmType_GetObjFromJsonObj(objClsRmTypeENS: clsClsRmTypeEN): clsClsRmTypeEN {
  const objClsRmTypeENT: clsClsRmTypeEN = new clsClsRmTypeEN();
  ObjectAssign(objClsRmTypeENT, objClsRmTypeENS);
  return objClsRmTypeENT;
}
