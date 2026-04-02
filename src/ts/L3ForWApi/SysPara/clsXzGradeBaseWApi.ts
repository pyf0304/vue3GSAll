/**
 * 类名:clsXzGradeBaseWApi
 * 表名:XzGradeBase(01120129)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/10 08:14:07
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
 * 年级(XzGradeBase)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月10日.
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
import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const xzGradeBase_Controller = 'XzGradeBaseApi';
export const xzGradeBase_ConstructorName = 'xzGradeBase';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdGradeBase:关键字
 * @returns 对象
 **/
export async function XzGradeBase_GetObjByIdGradeBaseAsync(
  strIdGradeBase: string,
): Promise<clsXzGradeBaseEN | null> {
  const strThisFuncName = 'GetObjByIdGradeBaseAsync';

  if (IsNullOrEmpty(strIdGradeBase) == true) {
    const strMsg = Format(
      '参数:[strIdGradeBase]不能为空!(In clsXzGradeBaseWApi.GetObjByIdGradeBaseAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdGradeBase.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdGradeBase]的长度:[{0}]不正确!(clsXzGradeBaseWApi.GetObjByIdGradeBaseAsync)',
      strIdGradeBase.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdGradeBase';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdGradeBase,
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
      const objXzGradeBase = XzGradeBase_GetObjFromJsonObj(returnObj);
      return objXzGradeBase;
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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
 * @param strIdGradeBase:所给的关键字
 * @returns 对象
 */
export async function XzGradeBase_GetObjByIdGradeBaseCache(
  strIdGradeBase: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByIdGradeBaseCache';

  if (IsNullOrEmpty(strIdGradeBase) == true) {
    const strMsg = Format(
      '参数:[strIdGradeBase]不能为空!(In clsXzGradeBaseWApi.GetObjByIdGradeBaseCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdGradeBase.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdGradeBase]的长度:[{0}]不正确!(clsXzGradeBaseWApi.GetObjByIdGradeBaseCache)',
      strIdGradeBase.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstCache();
  try {
    const arrXzGradeBaseSel = arrXzGradeBaseObjLstCache.filter(
      (x) => x.idGradeBase == strIdGradeBase,
    );
    let objXzGradeBase: clsXzGradeBaseEN;
    if (arrXzGradeBaseSel.length > 0) {
      objXzGradeBase = arrXzGradeBaseSel[0];
      return objXzGradeBase;
    } else {
      if (bolTryAsyncOnce == true) {
        const objXzGradeBaseConst = await XzGradeBase_GetObjByIdGradeBaseAsync(strIdGradeBase);
        if (objXzGradeBaseConst != null) {
          XzGradeBase_ReFreshThisCache();
          return objXzGradeBaseConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdGradeBase,
      xzGradeBase_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdGradeBase:所给的关键字
 * @returns 对象
 */
export async function XzGradeBase_GetObjByIdGradeBaselocalStorage(strIdGradeBase: string) {
  const strThisFuncName = 'GetObjByIdGradeBaselocalStorage';

  if (IsNullOrEmpty(strIdGradeBase) == true) {
    const strMsg = Format(
      '参数:[strIdGradeBase]不能为空!(In clsXzGradeBaseWApi.GetObjByIdGradeBaselocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdGradeBase.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdGradeBase]的长度:[{0}]不正确!(clsXzGradeBaseWApi.GetObjByIdGradeBaselocalStorage)',
      strIdGradeBase.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsXzGradeBaseEN._CurrTabName, strIdGradeBase);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objXzGradeBaseCache: clsXzGradeBaseEN = JSON.parse(strTempObj);
    return objXzGradeBaseCache;
  }
  try {
    const objXzGradeBase = await XzGradeBase_GetObjByIdGradeBaseAsync(strIdGradeBase);
    if (objXzGradeBase != null) {
      localStorage.setItem(strKey, JSON.stringify(objXzGradeBase));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objXzGradeBase;
    }
    return objXzGradeBase;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdGradeBase,
      xzGradeBase_ConstructorName,
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
 * @param objXzGradeBase:所给的对象
 * @returns 对象
 */
export async function XzGradeBase_UpdateObjInLstCache(objXzGradeBase: clsXzGradeBaseEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstCache();
    const obj = arrXzGradeBaseObjLstCache.find((x) => x.idGradeBase == objXzGradeBase.idGradeBase);
    if (obj != null) {
      objXzGradeBase.idGradeBase = obj.idGradeBase;
      ObjectAssign(obj, objXzGradeBase);
    } else {
      arrXzGradeBaseObjLstCache.push(objXzGradeBase);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      xzGradeBase_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdGradeBase:所给的关键字
 * @returns 对象
 */
export async function XzGradeBase_GetNameByIdGradeBaseCache(strIdGradeBase: string) {
  if (IsNullOrEmpty(strIdGradeBase) == true) {
    const strMsg = Format(
      '参数:[strIdGradeBase]不能为空!(In clsXzGradeBaseWApi.GetNameByIdGradeBaseCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdGradeBase.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdGradeBase]的长度:[{0}]不正确!(clsXzGradeBaseWApi.GetNameByIdGradeBaseCache)',
      strIdGradeBase.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstCache();
  if (arrXzGradeBaseObjLstCache == null) return '';
  try {
    const arrXzGradeBaseSel = arrXzGradeBaseObjLstCache.filter(
      (x) => x.idGradeBase == strIdGradeBase,
    );
    let objXzGradeBase: clsXzGradeBaseEN;
    if (arrXzGradeBaseSel.length > 0) {
      objXzGradeBase = arrXzGradeBaseSel[0];
      return objXzGradeBase.gradeBaseName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdGradeBase,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function XzGradeBase_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsXzGradeBaseEN.con_IdGradeBase) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsXzGradeBaseEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsXzGradeBaseEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdGradeBase = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objXzGradeBase = await XzGradeBase_GetObjByIdGradeBaseCache(strIdGradeBase);
  if (objXzGradeBase == null) return '';
  if (objXzGradeBase.GetFldValue(strOutFldName) == null) return '';
  return objXzGradeBase.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function XzGradeBase_SortFunDefa(a: clsXzGradeBaseEN, b: clsXzGradeBaseEN): number {
  return a.idGradeBase.localeCompare(b.idGradeBase);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function XzGradeBase_SortFunDefa2Fld(a: clsXzGradeBaseEN, b: clsXzGradeBaseEN): number {
  if (a.gradeBaseId == b.gradeBaseId) return a.gradeBaseName.localeCompare(b.gradeBaseName);
  else return a.gradeBaseId.localeCompare(b.gradeBaseId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function XzGradeBase_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsXzGradeBaseEN.con_IdGradeBase:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return a.idGradeBase.localeCompare(b.idGradeBase);
        };
      case clsXzGradeBaseEN.con_GradeBaseId:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return a.gradeBaseId.localeCompare(b.gradeBaseId);
        };
      case clsXzGradeBaseEN.con_GradeBaseName:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return a.gradeBaseName.localeCompare(b.gradeBaseName);
        };
      case clsXzGradeBaseEN.con_GradeBaseNameA:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (a.gradeBaseNameA == null) return -1;
          if (b.gradeBaseNameA == null) return 1;
          return a.gradeBaseNameA.localeCompare(b.gradeBaseNameA);
        };
      case clsXzGradeBaseEN.con_SchoolYear:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return a.schoolYear.localeCompare(b.schoolYear);
        };
      case clsXzGradeBaseEN.con_SchoolTerm:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return a.schoolTerm.localeCompare(b.schoolTerm);
        };
      case clsXzGradeBaseEN.con_EnterSchoolDate:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (a.enterSchoolDate == null) return -1;
          if (b.enterSchoolDate == null) return 1;
          return a.enterSchoolDate.localeCompare(b.enterSchoolDate);
        };
      case clsXzGradeBaseEN.con_CurrentTermSeq:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return a.currentTermSeq - b.currentTermSeq;
        };
      case clsXzGradeBaseEN.con_ExecPlanTermIndex:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return a.execPlanTermIndex - b.execPlanTermIndex;
        };
      case clsXzGradeBaseEN.con_SetEPTermIndexDate:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (a.setEPTermIndexDate == null) return -1;
          if (b.setEPTermIndexDate == null) return 1;
          return a.setEPTermIndexDate.localeCompare(b.setEPTermIndexDate);
        };
      case clsXzGradeBaseEN.con_IsOffed:
        return (a: clsXzGradeBaseEN) => {
          if (a.isOffed == true) return 1;
          else return -1;
        };
      case clsXzGradeBaseEN.con_GradeIndex:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return a.gradeIndex - b.gradeIndex;
        };
      case clsXzGradeBaseEN.con_BeginYearMonth:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (a.beginYearMonth == null) return -1;
          if (b.beginYearMonth == null) return 1;
          return a.beginYearMonth.localeCompare(b.beginYearMonth);
        };
      case clsXzGradeBaseEN.con_EndYearMonth:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (a.endYearMonth == null) return -1;
          if (b.endYearMonth == null) return 1;
          return a.endYearMonth.localeCompare(b.endYearMonth);
        };
      case clsXzGradeBaseEN.con_AllowUpBaseInfo:
        return (a: clsXzGradeBaseEN) => {
          if (a.allowUpBaseInfo == true) return 1;
          else return -1;
        };
      case clsXzGradeBaseEN.con_Prefix:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (a.prefix == null) return -1;
          if (b.prefix == null) return 1;
          return a.prefix.localeCompare(b.prefix);
        };
      case clsXzGradeBaseEN.con_PointCalcVersionId:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (a.pointCalcVersionId == null) return -1;
          if (b.pointCalcVersionId == null) return 1;
          return a.pointCalcVersionId.localeCompare(b.pointCalcVersionId);
        };
      case clsXzGradeBaseEN.con_ModifyUserId:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (a.modifyUserId == null) return -1;
          if (b.modifyUserId == null) return 1;
          return a.modifyUserId.localeCompare(b.modifyUserId);
        };
      case clsXzGradeBaseEN.con_ModifyDate:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (a.modifyDate == null) return -1;
          if (b.modifyDate == null) return 1;
          return a.modifyDate.localeCompare(b.modifyDate);
        };
      case clsXzGradeBaseEN.con_IdStudyLevel:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (a.idStudyLevel == null) return -1;
          if (b.idStudyLevel == null) return 1;
          return a.idStudyLevel.localeCompare(b.idStudyLevel);
        };
      case clsXzGradeBaseEN.con_IsVisible:
        return (a: clsXzGradeBaseEN) => {
          if (a.isVisible == true) return 1;
          else return -1;
        };
      case clsXzGradeBaseEN.con_Memo:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzGradeBase]中不存在!(in ${xzGradeBase_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsXzGradeBaseEN.con_IdGradeBase:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return b.idGradeBase.localeCompare(a.idGradeBase);
        };
      case clsXzGradeBaseEN.con_GradeBaseId:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return b.gradeBaseId.localeCompare(a.gradeBaseId);
        };
      case clsXzGradeBaseEN.con_GradeBaseName:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return b.gradeBaseName.localeCompare(a.gradeBaseName);
        };
      case clsXzGradeBaseEN.con_GradeBaseNameA:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (b.gradeBaseNameA == null) return -1;
          if (a.gradeBaseNameA == null) return 1;
          return b.gradeBaseNameA.localeCompare(a.gradeBaseNameA);
        };
      case clsXzGradeBaseEN.con_SchoolYear:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return b.schoolYear.localeCompare(a.schoolYear);
        };
      case clsXzGradeBaseEN.con_SchoolTerm:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return b.schoolTerm.localeCompare(a.schoolTerm);
        };
      case clsXzGradeBaseEN.con_EnterSchoolDate:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (b.enterSchoolDate == null) return -1;
          if (a.enterSchoolDate == null) return 1;
          return b.enterSchoolDate.localeCompare(a.enterSchoolDate);
        };
      case clsXzGradeBaseEN.con_CurrentTermSeq:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return b.currentTermSeq - a.currentTermSeq;
        };
      case clsXzGradeBaseEN.con_ExecPlanTermIndex:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return b.execPlanTermIndex - a.execPlanTermIndex;
        };
      case clsXzGradeBaseEN.con_SetEPTermIndexDate:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (b.setEPTermIndexDate == null) return -1;
          if (a.setEPTermIndexDate == null) return 1;
          return b.setEPTermIndexDate.localeCompare(a.setEPTermIndexDate);
        };
      case clsXzGradeBaseEN.con_IsOffed:
        return (b: clsXzGradeBaseEN) => {
          if (b.isOffed == true) return 1;
          else return -1;
        };
      case clsXzGradeBaseEN.con_GradeIndex:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          return b.gradeIndex - a.gradeIndex;
        };
      case clsXzGradeBaseEN.con_BeginYearMonth:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (b.beginYearMonth == null) return -1;
          if (a.beginYearMonth == null) return 1;
          return b.beginYearMonth.localeCompare(a.beginYearMonth);
        };
      case clsXzGradeBaseEN.con_EndYearMonth:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (b.endYearMonth == null) return -1;
          if (a.endYearMonth == null) return 1;
          return b.endYearMonth.localeCompare(a.endYearMonth);
        };
      case clsXzGradeBaseEN.con_AllowUpBaseInfo:
        return (b: clsXzGradeBaseEN) => {
          if (b.allowUpBaseInfo == true) return 1;
          else return -1;
        };
      case clsXzGradeBaseEN.con_Prefix:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (b.prefix == null) return -1;
          if (a.prefix == null) return 1;
          return b.prefix.localeCompare(a.prefix);
        };
      case clsXzGradeBaseEN.con_PointCalcVersionId:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (b.pointCalcVersionId == null) return -1;
          if (a.pointCalcVersionId == null) return 1;
          return b.pointCalcVersionId.localeCompare(a.pointCalcVersionId);
        };
      case clsXzGradeBaseEN.con_ModifyUserId:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (b.modifyUserId == null) return -1;
          if (a.modifyUserId == null) return 1;
          return b.modifyUserId.localeCompare(a.modifyUserId);
        };
      case clsXzGradeBaseEN.con_ModifyDate:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (b.modifyDate == null) return -1;
          if (a.modifyDate == null) return 1;
          return b.modifyDate.localeCompare(a.modifyDate);
        };
      case clsXzGradeBaseEN.con_IdStudyLevel:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (b.idStudyLevel == null) return -1;
          if (a.idStudyLevel == null) return 1;
          return b.idStudyLevel.localeCompare(a.idStudyLevel);
        };
      case clsXzGradeBaseEN.con_IsVisible:
        return (b: clsXzGradeBaseEN) => {
          if (b.isVisible == true) return 1;
          else return -1;
        };
      case clsXzGradeBaseEN.con_Memo:
        return (a: clsXzGradeBaseEN, b: clsXzGradeBaseEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzGradeBase]中不存在!(in ${xzGradeBase_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function XzGradeBase_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsXzGradeBaseEN.con_IdGradeBase:
      return (obj: clsXzGradeBaseEN) => {
        return obj.idGradeBase === value;
      };
    case clsXzGradeBaseEN.con_GradeBaseId:
      return (obj: clsXzGradeBaseEN) => {
        return obj.gradeBaseId === value;
      };
    case clsXzGradeBaseEN.con_GradeBaseName:
      return (obj: clsXzGradeBaseEN) => {
        return obj.gradeBaseName === value;
      };
    case clsXzGradeBaseEN.con_GradeBaseNameA:
      return (obj: clsXzGradeBaseEN) => {
        return obj.gradeBaseNameA === value;
      };
    case clsXzGradeBaseEN.con_SchoolYear:
      return (obj: clsXzGradeBaseEN) => {
        return obj.schoolYear === value;
      };
    case clsXzGradeBaseEN.con_SchoolTerm:
      return (obj: clsXzGradeBaseEN) => {
        return obj.schoolTerm === value;
      };
    case clsXzGradeBaseEN.con_EnterSchoolDate:
      return (obj: clsXzGradeBaseEN) => {
        return obj.enterSchoolDate === value;
      };
    case clsXzGradeBaseEN.con_CurrentTermSeq:
      return (obj: clsXzGradeBaseEN) => {
        return obj.currentTermSeq === value;
      };
    case clsXzGradeBaseEN.con_ExecPlanTermIndex:
      return (obj: clsXzGradeBaseEN) => {
        return obj.execPlanTermIndex === value;
      };
    case clsXzGradeBaseEN.con_SetEPTermIndexDate:
      return (obj: clsXzGradeBaseEN) => {
        return obj.setEPTermIndexDate === value;
      };
    case clsXzGradeBaseEN.con_IsOffed:
      return (obj: clsXzGradeBaseEN) => {
        return obj.isOffed === value;
      };
    case clsXzGradeBaseEN.con_GradeIndex:
      return (obj: clsXzGradeBaseEN) => {
        return obj.gradeIndex === value;
      };
    case clsXzGradeBaseEN.con_BeginYearMonth:
      return (obj: clsXzGradeBaseEN) => {
        return obj.beginYearMonth === value;
      };
    case clsXzGradeBaseEN.con_EndYearMonth:
      return (obj: clsXzGradeBaseEN) => {
        return obj.endYearMonth === value;
      };
    case clsXzGradeBaseEN.con_AllowUpBaseInfo:
      return (obj: clsXzGradeBaseEN) => {
        return obj.allowUpBaseInfo === value;
      };
    case clsXzGradeBaseEN.con_Prefix:
      return (obj: clsXzGradeBaseEN) => {
        return obj.prefix === value;
      };
    case clsXzGradeBaseEN.con_PointCalcVersionId:
      return (obj: clsXzGradeBaseEN) => {
        return obj.pointCalcVersionId === value;
      };
    case clsXzGradeBaseEN.con_ModifyUserId:
      return (obj: clsXzGradeBaseEN) => {
        return obj.modifyUserId === value;
      };
    case clsXzGradeBaseEN.con_ModifyDate:
      return (obj: clsXzGradeBaseEN) => {
        return obj.modifyDate === value;
      };
    case clsXzGradeBaseEN.con_IdStudyLevel:
      return (obj: clsXzGradeBaseEN) => {
        return obj.idStudyLevel === value;
      };
    case clsXzGradeBaseEN.con_IsVisible:
      return (obj: clsXzGradeBaseEN) => {
        return obj.isVisible === value;
      };
    case clsXzGradeBaseEN.con_Memo:
      return (obj: clsXzGradeBaseEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[XzGradeBase]中不存在!(in ${xzGradeBase_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function XzGradeBase_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsXzGradeBaseEN.con_IdGradeBase) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrXzGradeBase = await XzGradeBase_GetObjLstCache();
  if (arrXzGradeBase == null) return [];
  let arrXzGradeBaseSel = arrXzGradeBase;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrXzGradeBaseSel.length == 0) return [];
  return arrXzGradeBaseSel.map((x) => x.idGradeBase);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzGradeBase_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
export async function XzGradeBase_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
export async function XzGradeBase_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsXzGradeBaseEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

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
      const objXzGradeBase = XzGradeBase_GetObjFromJsonObj(returnObj);
      return objXzGradeBase;
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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
export async function XzGradeBase_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzGradeBaseEN._CurrTabName;
  if (IsNullOrEmpty(clsXzGradeBaseEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzGradeBaseEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrXzGradeBaseExObjLstCache: Array<clsXzGradeBaseEN> = CacheHelper.Get(strKey);
    const arrXzGradeBaseObjLstT = XzGradeBase_GetObjLstByJSONObjLst(arrXzGradeBaseExObjLstCache);
    return arrXzGradeBaseObjLstT;
  }
  try {
    const arrXzGradeBaseExObjLst = await XzGradeBase_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrXzGradeBaseExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzGradeBaseExObjLst.length,
    );
    console.log(strInfo);
    return arrXzGradeBaseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzGradeBase_ConstructorName,
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
export async function XzGradeBase_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzGradeBaseEN._CurrTabName;
  if (IsNullOrEmpty(clsXzGradeBaseEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzGradeBaseEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzGradeBaseExObjLstCache: Array<clsXzGradeBaseEN> = JSON.parse(strTempObjLst);
    const arrXzGradeBaseObjLstT = XzGradeBase_GetObjLstByJSONObjLst(arrXzGradeBaseExObjLstCache);
    return arrXzGradeBaseObjLstT;
  }
  try {
    const arrXzGradeBaseExObjLst = await XzGradeBase_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrXzGradeBaseExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzGradeBaseExObjLst.length,
    );
    console.log(strInfo);
    return arrXzGradeBaseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzGradeBase_ConstructorName,
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
export async function XzGradeBase_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzGradeBaseEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzGradeBaseObjLstCache: Array<clsXzGradeBaseEN> = JSON.parse(strTempObjLst);
    return arrXzGradeBaseObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function XzGradeBase_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsXzGradeBaseEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

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
          xzGradeBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzGradeBase_GetObjLstByJSONObjLst(returnObjLst);
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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
export async function XzGradeBase_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzGradeBaseEN._CurrTabName;
  if (IsNullOrEmpty(clsXzGradeBaseEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzGradeBaseEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzGradeBaseExObjLstCache: Array<clsXzGradeBaseEN> = JSON.parse(strTempObjLst);
    const arrXzGradeBaseObjLstT = XzGradeBase_GetObjLstByJSONObjLst(arrXzGradeBaseExObjLstCache);
    return arrXzGradeBaseObjLstT;
  }
  try {
    const arrXzGradeBaseExObjLst = await XzGradeBase_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrXzGradeBaseExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzGradeBaseExObjLst.length,
    );
    console.log(strInfo);
    return arrXzGradeBaseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzGradeBase_ConstructorName,
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
export async function XzGradeBase_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzGradeBaseEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzGradeBaseObjLstCache: Array<clsXzGradeBaseEN> = JSON.parse(strTempObjLst);
    return arrXzGradeBaseObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzGradeBase_GetObjLstCache(): Promise<Array<clsXzGradeBaseEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrXzGradeBaseObjLstCache;
  switch (clsXzGradeBaseEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstClientCache();
      break;
    default:
      arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstClientCache();
      break;
  }
  return arrXzGradeBaseObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzGradeBase_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrXzGradeBaseObjLstCache;
  switch (clsXzGradeBaseEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrXzGradeBaseObjLstCache = null;
      break;
    default:
      arrXzGradeBaseObjLstCache = null;
      break;
  }
  return arrXzGradeBaseObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdGradeBaseCond:条件对象
 * @returns 对象列表子集
 */
export async function XzGradeBase_GetSubObjLstCache(objXzGradeBaseCond: clsXzGradeBaseEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstCache();
  let arrXzGradeBaseSel = arrXzGradeBaseObjLstCache;
  if (objXzGradeBaseCond.sfFldComparisonOp == null || objXzGradeBaseCond.sfFldComparisonOp == '')
    return arrXzGradeBaseSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzGradeBaseCond.sfFldComparisonOp,
  );
  //console.log("clsXzGradeBaseWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzGradeBaseCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzGradeBaseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrXzGradeBaseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzGradeBaseCond),
      xzGradeBase_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzGradeBaseEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdGradeBase:关键字列表
 * @returns 对象列表
 **/
export async function XzGradeBase_GetObjLstByIdGradeBaseLstAsync(
  arrIdGradeBase: Array<string>,
): Promise<Array<clsXzGradeBaseEN>> {
  const strThisFuncName = 'GetObjLstByIdGradeBaseLstAsync';
  const strAction = 'GetObjLstByIdGradeBaseLst';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdGradeBase, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          xzGradeBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzGradeBase_GetObjLstByJSONObjLst(returnObjLst);
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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
 * @param arrstrIdGradeBaseLst:关键字列表
 * @returns 对象列表
 */
export async function XzGradeBase_GetObjLstByIdGradeBaseLstCache(arrIdGradeBaseLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByIdGradeBaseLstCache';
  try {
    const arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstCache();
    const arrXzGradeBaseSel = arrXzGradeBaseObjLstCache.filter(
      (x) => arrIdGradeBaseLst.indexOf(x.idGradeBase) > -1,
    );
    return arrXzGradeBaseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdGradeBaseLst.join(','),
      xzGradeBase_ConstructorName,
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
export async function XzGradeBase_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsXzGradeBaseEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

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
          xzGradeBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzGradeBase_GetObjLstByJSONObjLst(returnObjLst);
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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
export async function XzGradeBase_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsXzGradeBaseEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

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
          xzGradeBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzGradeBase_GetObjLstByJSONObjLst(returnObjLst);
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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
export async function XzGradeBase_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzGradeBaseEN>();
  const arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstCache();
  if (arrXzGradeBaseObjLstCache.length == 0) return arrXzGradeBaseObjLstCache;
  let arrXzGradeBaseSel = arrXzGradeBaseObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objXzGradeBaseCond = new clsXzGradeBaseEN();
  ObjectAssign(objXzGradeBaseCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsXzGradeBaseWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzGradeBaseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrXzGradeBaseSel.length == 0) return arrXzGradeBaseSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzGradeBaseSel = arrXzGradeBaseSel.sort(XzGradeBase_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzGradeBaseSel = arrXzGradeBaseSel.sort(objPagerPara.sortFun);
    }
    arrXzGradeBaseSel = arrXzGradeBaseSel.slice(intStart, intEnd);
    return arrXzGradeBaseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzGradeBase_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzGradeBaseEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function XzGradeBase_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzGradeBaseEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzGradeBaseEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

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
          xzGradeBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzGradeBase_GetObjLstByJSONObjLst(returnObjLst);
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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
 * @param strIdGradeBase:关键字
 * @returns 获取删除的结果
 **/
export async function XzGradeBase_DelRecordAsync(strIdGradeBase: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdGradeBase);

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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
 * @param arrIdGradeBase:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function XzGradeBase_DelXzGradeBasesAsync(
  arrIdGradeBase: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelXzGradeBasesAsync';
  const strAction = 'DelXzGradeBases';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdGradeBase, config);
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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
export async function XzGradeBase_DelXzGradeBasesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelXzGradeBasesByCondAsync';
  const strAction = 'DelXzGradeBasesByCond';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
 * @param objXzGradeBaseEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzGradeBase_AddNewRecordAsync(
  objXzGradeBaseEN: clsXzGradeBaseEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objXzGradeBaseEN.idGradeBase === null || objXzGradeBaseEN.idGradeBase === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objXzGradeBaseEN);
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzGradeBaseEN, config);
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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
 * @param objXzGradeBaseEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzGradeBase_AddNewRecordWithMaxIdAsync(
  objXzGradeBaseEN: clsXzGradeBaseEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzGradeBaseEN, config);
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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
 * @param objXzGradeBaseEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function XzGradeBase_AddNewRecordWithReturnKeyAsync(
  objXzGradeBaseEN: clsXzGradeBaseEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzGradeBaseEN, config);
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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
 * @param objXzGradeBaseEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function XzGradeBase_UpdateRecordAsync(
  objXzGradeBaseEN: clsXzGradeBaseEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objXzGradeBaseEN.sfUpdFldSetStr === undefined ||
    objXzGradeBaseEN.sfUpdFldSetStr === null ||
    objXzGradeBaseEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzGradeBaseEN.idGradeBase,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzGradeBaseEN, config);
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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
 * @param objXzGradeBaseEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzGradeBase_UpdateWithConditionAsync(
  objXzGradeBaseEN: clsXzGradeBaseEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objXzGradeBaseEN.sfUpdFldSetStr === undefined ||
    objXzGradeBaseEN.sfUpdFldSetStr === null ||
    objXzGradeBaseEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzGradeBaseEN.idGradeBase,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);
  objXzGradeBaseEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzGradeBaseEN, config);
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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
 * @param objstrIdGradeBaseCond:条件对象
 * @returns 对象列表子集
 */
export async function XzGradeBase_IsExistRecordCache(objXzGradeBaseCond: clsXzGradeBaseEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstCache();
  if (arrXzGradeBaseObjLstCache == null) return false;
  let arrXzGradeBaseSel = arrXzGradeBaseObjLstCache;
  if (objXzGradeBaseCond.sfFldComparisonOp == null || objXzGradeBaseCond.sfFldComparisonOp == '')
    return arrXzGradeBaseSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzGradeBaseCond.sfFldComparisonOp,
  );
  //console.log("clsXzGradeBaseWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzGradeBaseCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzGradeBaseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrXzGradeBaseSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objXzGradeBaseCond),
      xzGradeBase_ConstructorName,
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
export async function XzGradeBase_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
 * @param strIdGradeBase:所给的关键字
 * @returns 对象
 */
export async function XzGradeBase_IsExistCache(strIdGradeBase: string) {
  const strThisFuncName = 'IsExistCache';
  const arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstCache();
  if (arrXzGradeBaseObjLstCache == null) return false;
  try {
    const arrXzGradeBaseSel = arrXzGradeBaseObjLstCache.filter(
      (x) => x.idGradeBase == strIdGradeBase,
    );
    if (arrXzGradeBaseSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdGradeBase,
      xzGradeBase_ConstructorName,
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
 * @param strIdGradeBase:关键字
 * @returns 是否存在?存在返回True
 **/
export async function XzGradeBase_IsExistAsync(strIdGradeBase: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdGradeBase,
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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
export async function XzGradeBase_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
 * @param objXzGradeBaseCond:条件对象
 * @returns 对象列表记录数
 */
export async function XzGradeBase_GetRecCountByCondCache(objXzGradeBaseCond: clsXzGradeBaseEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrXzGradeBaseObjLstCache = await XzGradeBase_GetObjLstCache();
  if (arrXzGradeBaseObjLstCache == null) return 0;
  let arrXzGradeBaseSel = arrXzGradeBaseObjLstCache;
  if (objXzGradeBaseCond.sfFldComparisonOp == null || objXzGradeBaseCond.sfFldComparisonOp == '')
    return arrXzGradeBaseSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzGradeBaseCond.sfFldComparisonOp,
  );
  //console.log("clsXzGradeBaseWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzGradeBaseCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzGradeBaseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzGradeBaseSel = arrXzGradeBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrXzGradeBaseSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzGradeBaseCond),
      xzGradeBase_ConstructorName,
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
export async function XzGradeBase_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(xzGradeBase_Controller, strAction);

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
        xzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzGradeBase_ConstructorName,
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
export function XzGradeBase_GetWebApiUrl(strController: string, strAction: string): string {
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
export function XzGradeBase_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsXzGradeBaseEN._CurrTabName;
  switch (clsXzGradeBaseEN.CacheModeId) {
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
export function XzGradeBase_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsXzGradeBaseEN._CurrTabName;
    switch (clsXzGradeBaseEN.CacheModeId) {
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
export async function XzGradeBase_BindDdl_IdGradeBaseInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_IdGradeBaseInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_IdGradeBaseInDivCache");
  const arrObjLstSel = await XzGradeBase_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsXzGradeBaseEN.con_IdGradeBase,
    clsXzGradeBaseEN.con_GradeBaseName,
    '年级',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzGradeBase_CheckPropertyNew(pobjXzGradeBaseEN: clsXzGradeBaseEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjXzGradeBaseEN.gradeBaseId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[年级代号]不能为空(In 年级)!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjXzGradeBaseEN.gradeBaseName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[年级名称]不能为空(In 年级)!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.schoolYear) === true ||
    pobjXzGradeBaseEN.schoolYear.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[学年]不能为空(In 年级)!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.schoolTerm) === true ||
    pobjXzGradeBaseEN.schoolTerm.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[学期]不能为空(In 年级)!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.idGradeBase) == false &&
    GetStrLen(pobjXzGradeBaseEN.idGradeBase) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[年级流水号(idGradeBase)]的长度不能超过4(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.idGradeBase)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.gradeBaseId) == false &&
    GetStrLen(pobjXzGradeBaseEN.gradeBaseId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[年级代号(gradeBaseId)]的长度不能超过4(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.gradeBaseId)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.gradeBaseName) == false &&
    GetStrLen(pobjXzGradeBaseEN.gradeBaseName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[年级名称(gradeBaseName)]的长度不能超过50(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.gradeBaseName)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.gradeBaseNameA) == false &&
    GetStrLen(pobjXzGradeBaseEN.gradeBaseNameA) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[年级名称缩写(gradeBaseNameA)]的长度不能超过10(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.gradeBaseNameA)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.schoolYear) == false &&
    GetStrLen(pobjXzGradeBaseEN.schoolYear) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学年(schoolYear)]的长度不能超过10(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.schoolYear)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.schoolTerm) == false &&
    GetStrLen(pobjXzGradeBaseEN.schoolTerm) > 1
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学期(schoolTerm)]的长度不能超过1(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.schoolTerm)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.enterSchoolDate) == false &&
    GetStrLen(pobjXzGradeBaseEN.enterSchoolDate) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[进校日期(enterSchoolDate)]的长度不能超过8(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.enterSchoolDate)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.setEPTermIndexDate) == false &&
    GetStrLen(pobjXzGradeBaseEN.setEPTermIndexDate) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[设定执行计划学期日期(setEPTermIndexDate)]的长度不能超过8(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.setEPTermIndexDate)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.beginYearMonth) == false &&
    GetStrLen(pobjXzGradeBaseEN.beginYearMonth) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[开始年月(beginYearMonth)]的长度不能超过8(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.beginYearMonth)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.endYearMonth) == false &&
    GetStrLen(pobjXzGradeBaseEN.endYearMonth) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[结束年月(endYearMonth)]的长度不能超过8(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.endYearMonth)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjXzGradeBaseEN.prefix) == false && GetStrLen(pobjXzGradeBaseEN.prefix) > 3) {
    throw new Error(
      '(errid:Watl000413)字段[前缀(prefix)]的长度不能超过3(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.prefix)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.pointCalcVersionId) == false &&
    GetStrLen(pobjXzGradeBaseEN.pointCalcVersionId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[绩点计算版本Id(pointCalcVersionId)]的长度不能超过2(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.pointCalcVersionId)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.modifyUserId) == false &&
    GetStrLen(pobjXzGradeBaseEN.modifyUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.modifyUserId)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.modifyDate) == false &&
    GetStrLen(pobjXzGradeBaseEN.modifyDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.modifyDate)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.idStudyLevel) == false &&
    GetStrLen(pobjXzGradeBaseEN.idStudyLevel) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[id_StudyLevel(idStudyLevel)]的长度不能超过4(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.idStudyLevel)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjXzGradeBaseEN.memo) == false && GetStrLen(pobjXzGradeBaseEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.memo)(clsXzGradeBaseBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.idGradeBase) == false &&
    undefined !== pobjXzGradeBaseEN.idGradeBase &&
    tzDataType.isString(pobjXzGradeBaseEN.idGradeBase) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[年级流水号(idGradeBase)]的值:[$(pobjXzGradeBaseEN.idGradeBase)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.gradeBaseId) == false &&
    undefined !== pobjXzGradeBaseEN.gradeBaseId &&
    tzDataType.isString(pobjXzGradeBaseEN.gradeBaseId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[年级代号(gradeBaseId)]的值:[$(pobjXzGradeBaseEN.gradeBaseId)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.gradeBaseName) == false &&
    undefined !== pobjXzGradeBaseEN.gradeBaseName &&
    tzDataType.isString(pobjXzGradeBaseEN.gradeBaseName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[年级名称(gradeBaseName)]的值:[$(pobjXzGradeBaseEN.gradeBaseName)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.gradeBaseNameA) == false &&
    undefined !== pobjXzGradeBaseEN.gradeBaseNameA &&
    tzDataType.isString(pobjXzGradeBaseEN.gradeBaseNameA) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[年级名称缩写(gradeBaseNameA)]的值:[$(pobjXzGradeBaseEN.gradeBaseNameA)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.schoolYear) == false &&
    undefined !== pobjXzGradeBaseEN.schoolYear &&
    tzDataType.isString(pobjXzGradeBaseEN.schoolYear) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学年(schoolYear)]的值:[$(pobjXzGradeBaseEN.schoolYear)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.schoolTerm) == false &&
    undefined !== pobjXzGradeBaseEN.schoolTerm &&
    tzDataType.isString(pobjXzGradeBaseEN.schoolTerm) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学期(schoolTerm)]的值:[$(pobjXzGradeBaseEN.schoolTerm)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.enterSchoolDate) == false &&
    undefined !== pobjXzGradeBaseEN.enterSchoolDate &&
    tzDataType.isString(pobjXzGradeBaseEN.enterSchoolDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[进校日期(enterSchoolDate)]的值:[$(pobjXzGradeBaseEN.enterSchoolDate)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjXzGradeBaseEN.currentTermSeq &&
    undefined !== pobjXzGradeBaseEN.currentTermSeq &&
    tzDataType.isNumber(pobjXzGradeBaseEN.currentTermSeq) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[当前学期(currentTermSeq)]的值:[$(pobjXzGradeBaseEN.currentTermSeq)], 非法,应该为数值型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjXzGradeBaseEN.execPlanTermIndex &&
    undefined !== pobjXzGradeBaseEN.execPlanTermIndex &&
    tzDataType.isNumber(pobjXzGradeBaseEN.execPlanTermIndex) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[生成执行计划学期(execPlanTermIndex)]的值:[$(pobjXzGradeBaseEN.execPlanTermIndex)], 非法,应该为数值型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.setEPTermIndexDate) == false &&
    undefined !== pobjXzGradeBaseEN.setEPTermIndexDate &&
    tzDataType.isString(pobjXzGradeBaseEN.setEPTermIndexDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[设定执行计划学期日期(setEPTermIndexDate)]的值:[$(pobjXzGradeBaseEN.setEPTermIndexDate)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjXzGradeBaseEN.isOffed &&
    undefined !== pobjXzGradeBaseEN.isOffed &&
    tzDataType.isBoolean(pobjXzGradeBaseEN.isOffed) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否毕业(isOffed)]的值:[$(pobjXzGradeBaseEN.isOffed)], 非法,应该为布尔型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjXzGradeBaseEN.gradeIndex &&
    undefined !== pobjXzGradeBaseEN.gradeIndex &&
    tzDataType.isNumber(pobjXzGradeBaseEN.gradeIndex) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[年级序号(gradeIndex)]的值:[$(pobjXzGradeBaseEN.gradeIndex)], 非法,应该为数值型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.beginYearMonth) == false &&
    undefined !== pobjXzGradeBaseEN.beginYearMonth &&
    tzDataType.isString(pobjXzGradeBaseEN.beginYearMonth) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[开始年月(beginYearMonth)]的值:[$(pobjXzGradeBaseEN.beginYearMonth)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.endYearMonth) == false &&
    undefined !== pobjXzGradeBaseEN.endYearMonth &&
    tzDataType.isString(pobjXzGradeBaseEN.endYearMonth) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[结束年月(endYearMonth)]的值:[$(pobjXzGradeBaseEN.endYearMonth)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjXzGradeBaseEN.allowUpBaseInfo &&
    undefined !== pobjXzGradeBaseEN.allowUpBaseInfo &&
    tzDataType.isBoolean(pobjXzGradeBaseEN.allowUpBaseInfo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[允许修改基本信息(allowUpBaseInfo)]的值:[$(pobjXzGradeBaseEN.allowUpBaseInfo)], 非法,应该为布尔型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.prefix) == false &&
    undefined !== pobjXzGradeBaseEN.prefix &&
    tzDataType.isString(pobjXzGradeBaseEN.prefix) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[前缀(prefix)]的值:[$(pobjXzGradeBaseEN.prefix)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.pointCalcVersionId) == false &&
    undefined !== pobjXzGradeBaseEN.pointCalcVersionId &&
    tzDataType.isString(pobjXzGradeBaseEN.pointCalcVersionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[绩点计算版本Id(pointCalcVersionId)]的值:[$(pobjXzGradeBaseEN.pointCalcVersionId)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.modifyUserId) == false &&
    undefined !== pobjXzGradeBaseEN.modifyUserId &&
    tzDataType.isString(pobjXzGradeBaseEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjXzGradeBaseEN.modifyUserId)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.modifyDate) == false &&
    undefined !== pobjXzGradeBaseEN.modifyDate &&
    tzDataType.isString(pobjXzGradeBaseEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjXzGradeBaseEN.modifyDate)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.idStudyLevel) == false &&
    undefined !== pobjXzGradeBaseEN.idStudyLevel &&
    tzDataType.isString(pobjXzGradeBaseEN.idStudyLevel) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[id_StudyLevel(idStudyLevel)]的值:[$(pobjXzGradeBaseEN.idStudyLevel)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjXzGradeBaseEN.isVisible &&
    undefined !== pobjXzGradeBaseEN.isVisible &&
    tzDataType.isBoolean(pobjXzGradeBaseEN.isVisible) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否显示(isVisible)]的值:[$(pobjXzGradeBaseEN.isVisible)], 非法,应该为布尔型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.memo) == false &&
    undefined !== pobjXzGradeBaseEN.memo &&
    tzDataType.isString(pobjXzGradeBaseEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjXzGradeBaseEN.memo)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzGradeBase_CheckProperty4Update(pobjXzGradeBaseEN: clsXzGradeBaseEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.idGradeBase) == false &&
    GetStrLen(pobjXzGradeBaseEN.idGradeBase) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[年级流水号(idGradeBase)]的长度不能超过4(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.idGradeBase)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.gradeBaseId) == false &&
    GetStrLen(pobjXzGradeBaseEN.gradeBaseId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[年级代号(gradeBaseId)]的长度不能超过4(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.gradeBaseId)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.gradeBaseName) == false &&
    GetStrLen(pobjXzGradeBaseEN.gradeBaseName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[年级名称(gradeBaseName)]的长度不能超过50(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.gradeBaseName)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.gradeBaseNameA) == false &&
    GetStrLen(pobjXzGradeBaseEN.gradeBaseNameA) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[年级名称缩写(gradeBaseNameA)]的长度不能超过10(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.gradeBaseNameA)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.schoolYear) == false &&
    GetStrLen(pobjXzGradeBaseEN.schoolYear) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学年(schoolYear)]的长度不能超过10(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.schoolYear)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.schoolTerm) == false &&
    GetStrLen(pobjXzGradeBaseEN.schoolTerm) > 1
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学期(schoolTerm)]的长度不能超过1(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.schoolTerm)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.enterSchoolDate) == false &&
    GetStrLen(pobjXzGradeBaseEN.enterSchoolDate) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[进校日期(enterSchoolDate)]的长度不能超过8(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.enterSchoolDate)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.setEPTermIndexDate) == false &&
    GetStrLen(pobjXzGradeBaseEN.setEPTermIndexDate) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[设定执行计划学期日期(setEPTermIndexDate)]的长度不能超过8(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.setEPTermIndexDate)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.beginYearMonth) == false &&
    GetStrLen(pobjXzGradeBaseEN.beginYearMonth) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[开始年月(beginYearMonth)]的长度不能超过8(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.beginYearMonth)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.endYearMonth) == false &&
    GetStrLen(pobjXzGradeBaseEN.endYearMonth) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[结束年月(endYearMonth)]的长度不能超过8(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.endYearMonth)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjXzGradeBaseEN.prefix) == false && GetStrLen(pobjXzGradeBaseEN.prefix) > 3) {
    throw new Error(
      '(errid:Watl000416)字段[前缀(prefix)]的长度不能超过3(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.prefix)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.pointCalcVersionId) == false &&
    GetStrLen(pobjXzGradeBaseEN.pointCalcVersionId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[绩点计算版本Id(pointCalcVersionId)]的长度不能超过2(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.pointCalcVersionId)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.modifyUserId) == false &&
    GetStrLen(pobjXzGradeBaseEN.modifyUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.modifyUserId)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.modifyDate) == false &&
    GetStrLen(pobjXzGradeBaseEN.modifyDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.modifyDate)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.idStudyLevel) == false &&
    GetStrLen(pobjXzGradeBaseEN.idStudyLevel) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[id_StudyLevel(idStudyLevel)]的长度不能超过4(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.idStudyLevel)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjXzGradeBaseEN.memo) == false && GetStrLen(pobjXzGradeBaseEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 年级(XzGradeBase))!值:$(pobjXzGradeBaseEN.memo)(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.idGradeBase) == false &&
    undefined !== pobjXzGradeBaseEN.idGradeBase &&
    tzDataType.isString(pobjXzGradeBaseEN.idGradeBase) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[年级流水号(idGradeBase)]的值:[$(pobjXzGradeBaseEN.idGradeBase)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.gradeBaseId) == false &&
    undefined !== pobjXzGradeBaseEN.gradeBaseId &&
    tzDataType.isString(pobjXzGradeBaseEN.gradeBaseId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[年级代号(gradeBaseId)]的值:[$(pobjXzGradeBaseEN.gradeBaseId)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.gradeBaseName) == false &&
    undefined !== pobjXzGradeBaseEN.gradeBaseName &&
    tzDataType.isString(pobjXzGradeBaseEN.gradeBaseName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[年级名称(gradeBaseName)]的值:[$(pobjXzGradeBaseEN.gradeBaseName)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.gradeBaseNameA) == false &&
    undefined !== pobjXzGradeBaseEN.gradeBaseNameA &&
    tzDataType.isString(pobjXzGradeBaseEN.gradeBaseNameA) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[年级名称缩写(gradeBaseNameA)]的值:[$(pobjXzGradeBaseEN.gradeBaseNameA)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.schoolYear) == false &&
    undefined !== pobjXzGradeBaseEN.schoolYear &&
    tzDataType.isString(pobjXzGradeBaseEN.schoolYear) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学年(schoolYear)]的值:[$(pobjXzGradeBaseEN.schoolYear)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.schoolTerm) == false &&
    undefined !== pobjXzGradeBaseEN.schoolTerm &&
    tzDataType.isString(pobjXzGradeBaseEN.schoolTerm) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学期(schoolTerm)]的值:[$(pobjXzGradeBaseEN.schoolTerm)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.enterSchoolDate) == false &&
    undefined !== pobjXzGradeBaseEN.enterSchoolDate &&
    tzDataType.isString(pobjXzGradeBaseEN.enterSchoolDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[进校日期(enterSchoolDate)]的值:[$(pobjXzGradeBaseEN.enterSchoolDate)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjXzGradeBaseEN.currentTermSeq &&
    undefined !== pobjXzGradeBaseEN.currentTermSeq &&
    tzDataType.isNumber(pobjXzGradeBaseEN.currentTermSeq) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[当前学期(currentTermSeq)]的值:[$(pobjXzGradeBaseEN.currentTermSeq)], 非法,应该为数值型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjXzGradeBaseEN.execPlanTermIndex &&
    undefined !== pobjXzGradeBaseEN.execPlanTermIndex &&
    tzDataType.isNumber(pobjXzGradeBaseEN.execPlanTermIndex) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[生成执行计划学期(execPlanTermIndex)]的值:[$(pobjXzGradeBaseEN.execPlanTermIndex)], 非法,应该为数值型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.setEPTermIndexDate) == false &&
    undefined !== pobjXzGradeBaseEN.setEPTermIndexDate &&
    tzDataType.isString(pobjXzGradeBaseEN.setEPTermIndexDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[设定执行计划学期日期(setEPTermIndexDate)]的值:[$(pobjXzGradeBaseEN.setEPTermIndexDate)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjXzGradeBaseEN.isOffed &&
    undefined !== pobjXzGradeBaseEN.isOffed &&
    tzDataType.isBoolean(pobjXzGradeBaseEN.isOffed) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否毕业(isOffed)]的值:[$(pobjXzGradeBaseEN.isOffed)], 非法,应该为布尔型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjXzGradeBaseEN.gradeIndex &&
    undefined !== pobjXzGradeBaseEN.gradeIndex &&
    tzDataType.isNumber(pobjXzGradeBaseEN.gradeIndex) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[年级序号(gradeIndex)]的值:[$(pobjXzGradeBaseEN.gradeIndex)], 非法,应该为数值型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.beginYearMonth) == false &&
    undefined !== pobjXzGradeBaseEN.beginYearMonth &&
    tzDataType.isString(pobjXzGradeBaseEN.beginYearMonth) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[开始年月(beginYearMonth)]的值:[$(pobjXzGradeBaseEN.beginYearMonth)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.endYearMonth) == false &&
    undefined !== pobjXzGradeBaseEN.endYearMonth &&
    tzDataType.isString(pobjXzGradeBaseEN.endYearMonth) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[结束年月(endYearMonth)]的值:[$(pobjXzGradeBaseEN.endYearMonth)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjXzGradeBaseEN.allowUpBaseInfo &&
    undefined !== pobjXzGradeBaseEN.allowUpBaseInfo &&
    tzDataType.isBoolean(pobjXzGradeBaseEN.allowUpBaseInfo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[允许修改基本信息(allowUpBaseInfo)]的值:[$(pobjXzGradeBaseEN.allowUpBaseInfo)], 非法,应该为布尔型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.prefix) == false &&
    undefined !== pobjXzGradeBaseEN.prefix &&
    tzDataType.isString(pobjXzGradeBaseEN.prefix) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[前缀(prefix)]的值:[$(pobjXzGradeBaseEN.prefix)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.pointCalcVersionId) == false &&
    undefined !== pobjXzGradeBaseEN.pointCalcVersionId &&
    tzDataType.isString(pobjXzGradeBaseEN.pointCalcVersionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[绩点计算版本Id(pointCalcVersionId)]的值:[$(pobjXzGradeBaseEN.pointCalcVersionId)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.modifyUserId) == false &&
    undefined !== pobjXzGradeBaseEN.modifyUserId &&
    tzDataType.isString(pobjXzGradeBaseEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjXzGradeBaseEN.modifyUserId)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.modifyDate) == false &&
    undefined !== pobjXzGradeBaseEN.modifyDate &&
    tzDataType.isString(pobjXzGradeBaseEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjXzGradeBaseEN.modifyDate)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.idStudyLevel) == false &&
    undefined !== pobjXzGradeBaseEN.idStudyLevel &&
    tzDataType.isString(pobjXzGradeBaseEN.idStudyLevel) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[id_StudyLevel(idStudyLevel)]的值:[$(pobjXzGradeBaseEN.idStudyLevel)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjXzGradeBaseEN.isVisible &&
    undefined !== pobjXzGradeBaseEN.isVisible &&
    tzDataType.isBoolean(pobjXzGradeBaseEN.isVisible) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否显示(isVisible)]的值:[$(pobjXzGradeBaseEN.isVisible)], 非法,应该为布尔型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.memo) == false &&
    undefined !== pobjXzGradeBaseEN.memo &&
    tzDataType.isString(pobjXzGradeBaseEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjXzGradeBaseEN.memo)], 非法,应该为字符型(In 年级(XzGradeBase))!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjXzGradeBaseEN.idGradeBase) === true ||
    pobjXzGradeBaseEN.idGradeBase.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[年级流水号]不能为空(In 年级)!(clsXzGradeBaseBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function XzGradeBase_GetJSONStrByObj(pobjXzGradeBaseEN: clsXzGradeBaseEN): string {
  pobjXzGradeBaseEN.sfUpdFldSetStr = pobjXzGradeBaseEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjXzGradeBaseEN);
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
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function XzGradeBase_GetObjLstByJSONStr(strJSON: string): Array<clsXzGradeBaseEN> {
  let arrXzGradeBaseObjLst = new Array<clsXzGradeBaseEN>();
  if (strJSON === '') {
    return arrXzGradeBaseObjLst;
  }
  try {
    arrXzGradeBaseObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrXzGradeBaseObjLst;
  }
  return arrXzGradeBaseObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrXzGradeBaseObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function XzGradeBase_GetObjLstByJSONObjLst(
  arrXzGradeBaseObjLstS: Array<clsXzGradeBaseEN>,
): Array<clsXzGradeBaseEN> {
  const arrXzGradeBaseObjLst = new Array<clsXzGradeBaseEN>();
  for (const objInFor of arrXzGradeBaseObjLstS) {
    const obj1 = XzGradeBase_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrXzGradeBaseObjLst.push(obj1);
  }
  return arrXzGradeBaseObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function XzGradeBase_GetObjByJSONStr(strJSON: string): clsXzGradeBaseEN {
  let pobjXzGradeBaseEN = new clsXzGradeBaseEN();
  if (strJSON === '') {
    return pobjXzGradeBaseEN;
  }
  try {
    pobjXzGradeBaseEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjXzGradeBaseEN;
  }
  return pobjXzGradeBaseEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function XzGradeBase_GetCombineCondition(objXzGradeBaseCond: clsXzGradeBaseEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_IdGradeBase,
    ) == true
  ) {
    const strComparisonOpIdGradeBase: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_IdGradeBase];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_IdGradeBase,
      objXzGradeBaseCond.idGradeBase,
      strComparisonOpIdGradeBase,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_GradeBaseId,
    ) == true
  ) {
    const strComparisonOpGradeBaseId: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_GradeBaseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_GradeBaseId,
      objXzGradeBaseCond.gradeBaseId,
      strComparisonOpGradeBaseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_GradeBaseName,
    ) == true
  ) {
    const strComparisonOpGradeBaseName: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_GradeBaseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_GradeBaseName,
      objXzGradeBaseCond.gradeBaseName,
      strComparisonOpGradeBaseName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_GradeBaseNameA,
    ) == true
  ) {
    const strComparisonOpGradeBaseNameA: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_GradeBaseNameA];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_GradeBaseNameA,
      objXzGradeBaseCond.gradeBaseNameA,
      strComparisonOpGradeBaseNameA,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_SchoolYear,
    ) == true
  ) {
    const strComparisonOpSchoolYear: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_SchoolYear];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_SchoolYear,
      objXzGradeBaseCond.schoolYear,
      strComparisonOpSchoolYear,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_SchoolTerm,
    ) == true
  ) {
    const strComparisonOpSchoolTerm: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_SchoolTerm];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_SchoolTerm,
      objXzGradeBaseCond.schoolTerm,
      strComparisonOpSchoolTerm,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_EnterSchoolDate,
    ) == true
  ) {
    const strComparisonOpEnterSchoolDate: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_EnterSchoolDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_EnterSchoolDate,
      objXzGradeBaseCond.enterSchoolDate,
      strComparisonOpEnterSchoolDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_CurrentTermSeq,
    ) == true
  ) {
    const strComparisonOpCurrentTermSeq: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_CurrentTermSeq];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsXzGradeBaseEN.con_CurrentTermSeq,
      objXzGradeBaseCond.currentTermSeq,
      strComparisonOpCurrentTermSeq,
    );
  }
  //数据类型number(smallint)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_SetEPTermIndexDate,
    ) == true
  ) {
    const strComparisonOpSetEPTermIndexDate: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_SetEPTermIndexDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_SetEPTermIndexDate,
      objXzGradeBaseCond.setEPTermIndexDate,
      strComparisonOpSetEPTermIndexDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_IsOffed,
    ) == true
  ) {
    if (objXzGradeBaseCond.isOffed == true) {
      strWhereCond += Format(" And {0} = '1'", clsXzGradeBaseEN.con_IsOffed);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsXzGradeBaseEN.con_IsOffed);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_GradeIndex,
    ) == true
  ) {
    const strComparisonOpGradeIndex: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_GradeIndex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsXzGradeBaseEN.con_GradeIndex,
      objXzGradeBaseCond.gradeIndex,
      strComparisonOpGradeIndex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_BeginYearMonth,
    ) == true
  ) {
    const strComparisonOpBeginYearMonth: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_BeginYearMonth];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_BeginYearMonth,
      objXzGradeBaseCond.beginYearMonth,
      strComparisonOpBeginYearMonth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_EndYearMonth,
    ) == true
  ) {
    const strComparisonOpEndYearMonth: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_EndYearMonth];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_EndYearMonth,
      objXzGradeBaseCond.endYearMonth,
      strComparisonOpEndYearMonth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_AllowUpBaseInfo,
    ) == true
  ) {
    if (objXzGradeBaseCond.allowUpBaseInfo == true) {
      strWhereCond += Format(" And {0} = '1'", clsXzGradeBaseEN.con_AllowUpBaseInfo);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsXzGradeBaseEN.con_AllowUpBaseInfo);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_Prefix,
    ) == true
  ) {
    const strComparisonOpPrefix: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_Prefix];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_Prefix,
      objXzGradeBaseCond.prefix,
      strComparisonOpPrefix,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_PointCalcVersionId,
    ) == true
  ) {
    const strComparisonOpPointCalcVersionId: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_PointCalcVersionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_PointCalcVersionId,
      objXzGradeBaseCond.pointCalcVersionId,
      strComparisonOpPointCalcVersionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_ModifyUserId,
    ) == true
  ) {
    const strComparisonOpModifyUserId: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_ModifyUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_ModifyUserId,
      objXzGradeBaseCond.modifyUserId,
      strComparisonOpModifyUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_ModifyDate,
    ) == true
  ) {
    const strComparisonOpModifyDate: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_ModifyDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_ModifyDate,
      objXzGradeBaseCond.modifyDate,
      strComparisonOpModifyDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_IdStudyLevel,
    ) == true
  ) {
    const strComparisonOpIdStudyLevel: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_IdStudyLevel];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_IdStudyLevel,
      objXzGradeBaseCond.idStudyLevel,
      strComparisonOpIdStudyLevel,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_IsVisible,
    ) == true
  ) {
    if (objXzGradeBaseCond.isVisible == true) {
      strWhereCond += Format(" And {0} = '1'", clsXzGradeBaseEN.con_IsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsXzGradeBaseEN.con_IsVisible);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzGradeBaseCond.dicFldComparisonOp,
      clsXzGradeBaseEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objXzGradeBaseCond.dicFldComparisonOp[clsXzGradeBaseEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzGradeBaseEN.con_Memo,
      objXzGradeBaseCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objXzGradeBaseENS:源对象
 * @param objXzGradeBaseENT:目标对象
 */
export function XzGradeBase_CopyObjTo(
  objXzGradeBaseENS: clsXzGradeBaseEN,
  objXzGradeBaseENT: clsXzGradeBaseEN,
): void {
  objXzGradeBaseENT.idGradeBase = objXzGradeBaseENS.idGradeBase; //年级流水号
  objXzGradeBaseENT.gradeBaseId = objXzGradeBaseENS.gradeBaseId; //年级代号
  objXzGradeBaseENT.gradeBaseName = objXzGradeBaseENS.gradeBaseName; //年级名称
  objXzGradeBaseENT.gradeBaseNameA = objXzGradeBaseENS.gradeBaseNameA; //年级名称缩写
  objXzGradeBaseENT.schoolYear = objXzGradeBaseENS.schoolYear; //学年
  objXzGradeBaseENT.schoolTerm = objXzGradeBaseENS.schoolTerm; //学期
  objXzGradeBaseENT.enterSchoolDate = objXzGradeBaseENS.enterSchoolDate; //进校日期
  objXzGradeBaseENT.currentTermSeq = objXzGradeBaseENS.currentTermSeq; //当前学期
  objXzGradeBaseENT.execPlanTermIndex = objXzGradeBaseENS.execPlanTermIndex; //生成执行计划学期
  objXzGradeBaseENT.setEPTermIndexDate = objXzGradeBaseENS.setEPTermIndexDate; //设定执行计划学期日期
  objXzGradeBaseENT.isOffed = objXzGradeBaseENS.isOffed; //是否毕业
  objXzGradeBaseENT.gradeIndex = objXzGradeBaseENS.gradeIndex; //年级序号
  objXzGradeBaseENT.beginYearMonth = objXzGradeBaseENS.beginYearMonth; //开始年月
  objXzGradeBaseENT.endYearMonth = objXzGradeBaseENS.endYearMonth; //结束年月
  objXzGradeBaseENT.allowUpBaseInfo = objXzGradeBaseENS.allowUpBaseInfo; //允许修改基本信息
  objXzGradeBaseENT.prefix = objXzGradeBaseENS.prefix; //前缀
  objXzGradeBaseENT.pointCalcVersionId = objXzGradeBaseENS.pointCalcVersionId; //绩点计算版本Id
  objXzGradeBaseENT.modifyUserId = objXzGradeBaseENS.modifyUserId; //修改人
  objXzGradeBaseENT.modifyDate = objXzGradeBaseENS.modifyDate; //修改日期
  objXzGradeBaseENT.idStudyLevel = objXzGradeBaseENS.idStudyLevel; //id_StudyLevel
  objXzGradeBaseENT.isVisible = objXzGradeBaseENS.isVisible; //是否显示
  objXzGradeBaseENT.memo = objXzGradeBaseENS.memo; //备注
  objXzGradeBaseENT.sfUpdFldSetStr = objXzGradeBaseENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objXzGradeBaseENS:源对象
 * @param objXzGradeBaseENT:目标对象
 */
export function XzGradeBase_GetObjFromJsonObj(
  objXzGradeBaseENS: clsXzGradeBaseEN,
): clsXzGradeBaseEN {
  const objXzGradeBaseENT: clsXzGradeBaseEN = new clsXzGradeBaseEN();
  ObjectAssign(objXzGradeBaseENT, objXzGradeBaseENS);
  return objXzGradeBaseENT;
}
