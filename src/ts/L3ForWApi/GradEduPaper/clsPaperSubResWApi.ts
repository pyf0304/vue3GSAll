/**
 * 类名:clsPaperSubResWApi
 * 表名:PaperSubRes(01120963)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 00:25:42
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 论文子资源(PaperSubRes)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年03月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPaperSubResEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubResEN';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const paperSubRes_Controller = 'PaperSubResApi';
export const paperSubRes_ConstructorName = 'paperSubRes';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngPaperSubResId:关键字
 * @returns 对象
 **/
export async function PaperSubRes_GetObjByPaperSubResIdAsync(
  lngPaperSubResId: number,
): Promise<clsPaperSubResEN | null> {
  const strThisFuncName = 'GetObjByPaperSubResIdAsync';

  if (lngPaperSubResId == 0) {
    const strMsg = Format(
      '参数:[lngPaperSubResId]不能为空!(In clsPaperSubResWApi.GetObjByPaperSubResIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPaperSubResId';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngPaperSubResId,
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
      const objPaperSubRes = PaperSubRes_GetObjFromJsonObj(returnObj);
      return objPaperSubRes;
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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
 * @param lngPaperSubResId:所给的关键字
 * @returns 对象
 */
export async function PaperSubRes_GetObjByPaperSubResIdCache(
  lngPaperSubResId: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPaperSubResIdCache';

  if (lngPaperSubResId == 0) {
    const strMsg = Format(
      '参数:[lngPaperSubResId]不能为空!(In clsPaperSubResWApi.GetObjByPaperSubResIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstCache();
  try {
    const arrPaperSubResSel = arrPaperSubResObjLstCache.filter(
      (x) => x.paperSubResId == lngPaperSubResId,
    );
    let objPaperSubRes: clsPaperSubResEN;
    if (arrPaperSubResSel.length > 0) {
      objPaperSubRes = arrPaperSubResSel[0];
      return objPaperSubRes;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPaperSubResConst = await PaperSubRes_GetObjByPaperSubResIdAsync(lngPaperSubResId);
        if (objPaperSubResConst != null) {
          PaperSubRes_ReFreshThisCache();
          return objPaperSubResConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngPaperSubResId,
      paperSubRes_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngPaperSubResId:所给的关键字
 * @returns 对象
 */
export async function PaperSubRes_GetObjByPaperSubResIdlocalStorage(lngPaperSubResId: number) {
  const strThisFuncName = 'GetObjByPaperSubResIdlocalStorage';

  if (lngPaperSubResId == 0) {
    const strMsg = Format(
      '参数:[lngPaperSubResId]不能为空!(In clsPaperSubResWApi.GetObjByPaperSubResIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPaperSubResEN._CurrTabName, lngPaperSubResId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPaperSubResCache: clsPaperSubResEN = JSON.parse(strTempObj);
    return objPaperSubResCache;
  }
  try {
    const objPaperSubRes = await PaperSubRes_GetObjByPaperSubResIdAsync(lngPaperSubResId);
    if (objPaperSubRes != null) {
      localStorage.setItem(strKey, JSON.stringify(objPaperSubRes));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPaperSubRes;
    }
    return objPaperSubRes;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngPaperSubResId,
      paperSubRes_ConstructorName,
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
 * @param objPaperSubRes:所给的对象
 * @returns 对象
 */
export async function PaperSubRes_UpdateObjInLstCache(objPaperSubRes: clsPaperSubResEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstCache();
    const obj = arrPaperSubResObjLstCache.find(
      (x) =>
        x.idCurrEduCls == objPaperSubRes.idCurrEduCls &&
        x.paperSubResName == objPaperSubRes.paperSubResName,
    );
    if (obj != null) {
      objPaperSubRes.paperSubResId = obj.paperSubResId;
      ObjectAssign(obj, objPaperSubRes);
    } else {
      arrPaperSubResObjLstCache.push(objPaperSubRes);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      paperSubRes_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param lngPaperSubResId:所给的关键字
 * @returns 对象
 */
export async function PaperSubRes_GetNameByPaperSubResIdCache(lngPaperSubResId: number) {
  if (lngPaperSubResId == 0) {
    const strMsg = Format(
      '参数:[lngPaperSubResId]不能为空!(In clsPaperSubResWApi.GetNameByPaperSubResIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstCache();
  if (arrPaperSubResObjLstCache == null) return '';
  try {
    const arrPaperSubResSel = arrPaperSubResObjLstCache.filter(
      (x) => x.paperSubResId == lngPaperSubResId,
    );
    let objPaperSubRes: clsPaperSubResEN;
    if (arrPaperSubResSel.length > 0) {
      objPaperSubRes = arrPaperSubResSel[0];
      return objPaperSubRes.paperSubResName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      lngPaperSubResId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function PaperSubRes_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsPaperSubResEN.con_PaperSubResId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPaperSubResEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPaperSubResEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngPaperSubResId = Number(strInValue);
  if (lngPaperSubResId == 0) {
    return '';
  }
  const objPaperSubRes = await PaperSubRes_GetObjByPaperSubResIdCache(lngPaperSubResId);
  if (objPaperSubRes == null) return '';
  if (objPaperSubRes.GetFldValue(strOutFldName) == null) return '';
  return objPaperSubRes.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PaperSubRes_SortFunDefa(a: clsPaperSubResEN, b: clsPaperSubResEN): number {
  return a.paperSubResId - b.paperSubResId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PaperSubRes_SortFunDefa2Fld(a: clsPaperSubResEN, b: clsPaperSubResEN): number {
  if (a.paperSubResName == b.paperSubResName)
    return a.paperSubResTypeId.localeCompare(b.paperSubResTypeId);
  else return a.paperSubResName.localeCompare(b.paperSubResName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PaperSubRes_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPaperSubResEN.con_PaperSubResId:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          return a.paperSubResId - b.paperSubResId;
        };
      case clsPaperSubResEN.con_PaperSubResName:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          if (a.paperSubResName == null) return -1;
          if (b.paperSubResName == null) return 1;
          return a.paperSubResName.localeCompare(b.paperSubResName);
        };
      case clsPaperSubResEN.con_PaperSubResTypeId:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          return a.paperSubResTypeId.localeCompare(b.paperSubResTypeId);
        };
      case clsPaperSubResEN.con_FilePath:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          return a.filePath.localeCompare(b.filePath);
        };
      case clsPaperSubResEN.con_IdCurrEduCls:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsPaperSubResEN.con_UpdUserId:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsPaperSubResEN.con_UpdDate:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPaperSubResEN.con_Memo:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PaperSubRes]中不存在!(in ${paperSubRes_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPaperSubResEN.con_PaperSubResId:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          return b.paperSubResId - a.paperSubResId;
        };
      case clsPaperSubResEN.con_PaperSubResName:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          if (b.paperSubResName == null) return -1;
          if (a.paperSubResName == null) return 1;
          return b.paperSubResName.localeCompare(a.paperSubResName);
        };
      case clsPaperSubResEN.con_PaperSubResTypeId:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          return b.paperSubResTypeId.localeCompare(a.paperSubResTypeId);
        };
      case clsPaperSubResEN.con_FilePath:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          return b.filePath.localeCompare(a.filePath);
        };
      case clsPaperSubResEN.con_IdCurrEduCls:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsPaperSubResEN.con_UpdUserId:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsPaperSubResEN.con_UpdDate:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPaperSubResEN.con_Memo:
        return (a: clsPaperSubResEN, b: clsPaperSubResEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PaperSubRes]中不存在!(in ${paperSubRes_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PaperSubRes_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPaperSubResEN.con_PaperSubResId:
      return (obj: clsPaperSubResEN) => {
        return obj.paperSubResId === value;
      };
    case clsPaperSubResEN.con_PaperSubResName:
      return (obj: clsPaperSubResEN) => {
        return obj.paperSubResName === value;
      };
    case clsPaperSubResEN.con_PaperSubResTypeId:
      return (obj: clsPaperSubResEN) => {
        return obj.paperSubResTypeId === value;
      };
    case clsPaperSubResEN.con_FilePath:
      return (obj: clsPaperSubResEN) => {
        return obj.filePath === value;
      };
    case clsPaperSubResEN.con_IdCurrEduCls:
      return (obj: clsPaperSubResEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsPaperSubResEN.con_UpdUserId:
      return (obj: clsPaperSubResEN) => {
        return obj.updUserId === value;
      };
    case clsPaperSubResEN.con_UpdDate:
      return (obj: clsPaperSubResEN) => {
        return obj.updDate === value;
      };
    case clsPaperSubResEN.con_Memo:
      return (obj: clsPaperSubResEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PaperSubRes]中不存在!(in ${paperSubRes_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function PaperSubRes_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsPaperSubResEN.con_PaperSubResId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrPaperSubRes = await PaperSubRes_GetObjLstCache();
  if (arrPaperSubRes == null) return [];
  let arrPaperSubResSel = arrPaperSubRes;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPaperSubResSel = arrPaperSubResSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPaperSubResSel = arrPaperSubResSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPaperSubResSel = arrPaperSubResSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPaperSubResSel = arrPaperSubResSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPaperSubResSel = arrPaperSubResSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPaperSubResSel = arrPaperSubResSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPaperSubResSel = arrPaperSubResSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPaperSubResSel = arrPaperSubResSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPaperSubResSel = arrPaperSubResSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPaperSubResSel = arrPaperSubResSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPaperSubResSel.length == 0) return [];
  return arrPaperSubResSel.map((x) => x.paperSubResId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperSubRes_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperSubRes_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldName,
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const arrId = data.returnStrLst.split(',');
      return arrId;
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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
export async function PaperSubRes_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
export async function PaperSubRes_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPaperSubResEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

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
      const objPaperSubRes = PaperSubRes_GetObjFromJsonObj(returnObj);
      return objPaperSubRes;
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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
export async function PaperSubRes_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPaperSubResEN._CurrTabName;
  if (IsNullOrEmpty(clsPaperSubResEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperSubResEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPaperSubResExObjLstCache: Array<clsPaperSubResEN> = CacheHelper.Get(strKey);
    const arrPaperSubResObjLstT = PaperSubRes_GetObjLstByJSONObjLst(arrPaperSubResExObjLstCache);
    return arrPaperSubResObjLstT;
  }
  try {
    const arrPaperSubResExObjLst = await PaperSubRes_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPaperSubResExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperSubResExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperSubResExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperSubRes_ConstructorName,
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
export async function PaperSubRes_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPaperSubResEN._CurrTabName;
  if (IsNullOrEmpty(clsPaperSubResEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperSubResEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPaperSubResExObjLstCache: Array<clsPaperSubResEN> = JSON.parse(strTempObjLst);
    const arrPaperSubResObjLstT = PaperSubRes_GetObjLstByJSONObjLst(arrPaperSubResExObjLstCache);
    return arrPaperSubResObjLstT;
  }
  try {
    const arrPaperSubResExObjLst = await PaperSubRes_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPaperSubResExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperSubResExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperSubResExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperSubRes_ConstructorName,
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
export async function PaperSubRes_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPaperSubResEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPaperSubResObjLstCache: Array<clsPaperSubResEN> = JSON.parse(strTempObjLst);
    return arrPaperSubResObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PaperSubRes_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPaperSubResEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

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
          paperSubRes_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperSubRes_GetObjLstByJSONObjLst(returnObjLst);
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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
export async function PaperSubRes_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPaperSubResEN._CurrTabName;
  if (IsNullOrEmpty(clsPaperSubResEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperSubResEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPaperSubResExObjLstCache: Array<clsPaperSubResEN> = JSON.parse(strTempObjLst);
    const arrPaperSubResObjLstT = PaperSubRes_GetObjLstByJSONObjLst(arrPaperSubResExObjLstCache);
    return arrPaperSubResObjLstT;
  }
  try {
    const arrPaperSubResExObjLst = await PaperSubRes_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPaperSubResExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperSubResExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperSubResExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperSubRes_ConstructorName,
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
export async function PaperSubRes_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPaperSubResEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPaperSubResObjLstCache: Array<clsPaperSubResEN> = JSON.parse(strTempObjLst);
    return arrPaperSubResObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperSubRes_GetObjLstCache(): Promise<Array<clsPaperSubResEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrPaperSubResObjLstCache;
  switch (clsPaperSubResEN.CacheModeId) {
    case '04': //sessionStorage
      arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstClientCache();
      break;
    default:
      arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstClientCache();
      break;
  }
  return arrPaperSubResObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperSubRes_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPaperSubResObjLstCache;
  switch (clsPaperSubResEN.CacheModeId) {
    case '04': //sessionStorage
      arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrPaperSubResObjLstCache = null;
      break;
    default:
      arrPaperSubResObjLstCache = null;
      break;
  }
  return arrPaperSubResObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngPaperSubResIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PaperSubRes_GetSubObjLstCache(objPaperSubResCond: clsPaperSubResEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstCache();
  let arrPaperSubResSel = arrPaperSubResObjLstCache;
  if (objPaperSubResCond.sfFldComparisonOp == null || objPaperSubResCond.sfFldComparisonOp == '')
    return arrPaperSubResSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperSubResCond.sfFldComparisonOp,
  );
  //console.log("clsPaperSubResWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperSubResCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperSubResCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPaperSubResSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPaperSubResCond),
      paperSubRes_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperSubResEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPaperSubResId:关键字列表
 * @returns 对象列表
 **/
export async function PaperSubRes_GetObjLstByPaperSubResIdLstAsync(
  arrPaperSubResId: Array<string>,
): Promise<Array<clsPaperSubResEN>> {
  const strThisFuncName = 'GetObjLstByPaperSubResIdLstAsync';
  const strAction = 'GetObjLstByPaperSubResIdLst';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPaperSubResId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          paperSubRes_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperSubRes_GetObjLstByJSONObjLst(returnObjLst);
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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
 * @param arrlngPaperSubResIdLst:关键字列表
 * @returns 对象列表
 */
export async function PaperSubRes_GetObjLstByPaperSubResIdLstCache(
  arrPaperSubResIdLst: Array<number>,
) {
  const strThisFuncName = 'GetObjLstByPaperSubResIdLstCache';
  try {
    const arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstCache();
    const arrPaperSubResSel = arrPaperSubResObjLstCache.filter(
      (x) => arrPaperSubResIdLst.indexOf(x.paperSubResId) > -1,
    );
    return arrPaperSubResSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPaperSubResIdLst.join(','),
      paperSubRes_ConstructorName,
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
export async function PaperSubRes_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPaperSubResEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

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
          paperSubRes_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperSubRes_GetObjLstByJSONObjLst(returnObjLst);
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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
export async function PaperSubRes_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPaperSubResEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

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
          paperSubRes_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperSubRes_GetObjLstByJSONObjLst(returnObjLst);
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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
export async function PaperSubRes_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPaperSubResEN>();
  const arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstCache();
  if (arrPaperSubResObjLstCache.length == 0) return arrPaperSubResObjLstCache;
  let arrPaperSubResSel = arrPaperSubResObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objPaperSubResCond = new clsPaperSubResEN();
  ObjectAssign(objPaperSubResCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsPaperSubResWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperSubResCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPaperSubResSel.length == 0) return arrPaperSubResSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPaperSubResSel = arrPaperSubResSel.sort(PaperSubRes_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPaperSubResSel = arrPaperSubResSel.sort(objPagerPara.sortFun);
    }
    arrPaperSubResSel = arrPaperSubResSel.slice(intStart, intEnd);
    return arrPaperSubResSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      paperSubRes_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperSubResEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PaperSubRes_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPaperSubResEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPaperSubResEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

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
          paperSubRes_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperSubRes_GetObjLstByJSONObjLst(returnObjLst);
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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
 * @param lngPaperSubResId:关键字
 * @returns 获取删除的结果
 **/
export async function PaperSubRes_DelRecordAsync(lngPaperSubResId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngPaperSubResId);

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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
 * @param arrPaperSubResId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PaperSubRes_DelPaperSubRessAsync(
  arrPaperSubResId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPaperSubRessAsync';
  const strAction = 'DelPaperSubRess';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPaperSubResId, config);
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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
export async function PaperSubRes_DelPaperSubRessByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPaperSubRessByCondAsync';
  const strAction = 'DelPaperSubRessByCond';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
 * @param objPaperSubResEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PaperSubRes_AddNewRecordAsync(
  objPaperSubResEN: clsPaperSubResEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPaperSubResEN);
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperSubResEN, config);
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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objPaperSubResEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PaperSubRes_AddNewRecordWithReturnKeyAsync(
  objPaperSubResEN: clsPaperSubResEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperSubResEN, config);
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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
 * @param objPaperSubResEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PaperSubRes_UpdateRecordAsync(
  objPaperSubResEN: clsPaperSubResEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPaperSubResEN.sfUpdFldSetStr === undefined ||
    objPaperSubResEN.sfUpdFldSetStr === null ||
    objPaperSubResEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPaperSubResEN.paperSubResId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperSubResEN, config);
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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
 * @param objPaperSubResEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperSubRes_UpdateWithConditionAsync(
  objPaperSubResEN: clsPaperSubResEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPaperSubResEN.sfUpdFldSetStr === undefined ||
    objPaperSubResEN.sfUpdFldSetStr === null ||
    objPaperSubResEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPaperSubResEN.paperSubResId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);
  objPaperSubResEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperSubResEN, config);
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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
 * @param objlngPaperSubResIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PaperSubRes_IsExistRecordCache(objPaperSubResCond: clsPaperSubResEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstCache();
  if (arrPaperSubResObjLstCache == null) return false;
  let arrPaperSubResSel = arrPaperSubResObjLstCache;
  if (objPaperSubResCond.sfFldComparisonOp == null || objPaperSubResCond.sfFldComparisonOp == '')
    return arrPaperSubResSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperSubResCond.sfFldComparisonOp,
  );
  //console.log("clsPaperSubResWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperSubResCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperSubResCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPaperSubResSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPaperSubResCond),
      paperSubRes_ConstructorName,
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
export async function PaperSubRes_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
 * @param lngPaperSubResId:所给的关键字
 * @returns 对象
 */
export async function PaperSubRes_IsExistCache(lngPaperSubResId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstCache();
  if (arrPaperSubResObjLstCache == null) return false;
  try {
    const arrPaperSubResSel = arrPaperSubResObjLstCache.filter(
      (x) => x.paperSubResId == lngPaperSubResId,
    );
    if (arrPaperSubResSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngPaperSubResId,
      paperSubRes_ConstructorName,
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
 * @param lngPaperSubResId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PaperSubRes_IsExistAsync(lngPaperSubResId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngPaperSubResId,
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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
export async function PaperSubRes_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
 * @param objPaperSubResCond:条件对象
 * @returns 对象列表记录数
 */
export async function PaperSubRes_GetRecCountByCondCache(objPaperSubResCond: clsPaperSubResEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPaperSubResObjLstCache = await PaperSubRes_GetObjLstCache();
  if (arrPaperSubResObjLstCache == null) return 0;
  let arrPaperSubResSel = arrPaperSubResObjLstCache;
  if (objPaperSubResCond.sfFldComparisonOp == null || objPaperSubResCond.sfFldComparisonOp == '')
    return arrPaperSubResSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperSubResCond.sfFldComparisonOp,
  );
  //console.log("clsPaperSubResWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperSubResCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperSubResCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPaperSubResSel = arrPaperSubResSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPaperSubResSel = arrPaperSubResSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPaperSubResSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPaperSubResCond),
      paperSubRes_ConstructorName,
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
export async function PaperSubRes_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(paperSubRes_Controller, strAction);

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
        paperSubRes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubRes_ConstructorName,
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
export function PaperSubRes_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PaperSubRes_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsPaperSubResEN._CurrTabName;
  switch (clsPaperSubResEN.CacheModeId) {
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
export function PaperSubRes_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsPaperSubResEN._CurrTabName;
    switch (clsPaperSubResEN.CacheModeId) {
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
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
export async function PaperSubRes_BindDdl_PaperSubResIdByIdCurrEduClsInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strIdCurrEduCls: string,
) {
  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsPaperSubResWApi.BindDdl_PaperSubResIdByIdCurrEduClsInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsPaperSubResWApi.BindDdl_PaperSubResIdByIdCurrEduClsInDiv)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_PaperSubResIdByIdCurrEduClsInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PaperSubResIdByIdCurrEduClsInDivCache");
  let arrObjLstSel = await PaperSubRes_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.idCurrEduCls == strIdCurrEduCls);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPaperSubResEN.con_PaperSubResId,
    clsPaperSubResEN.con_PaperSubResName,
    '论文子资源',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PaperSubRes_CheckPropertyNew(pobjPaperSubResEN: clsPaperSubResEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPaperSubResEN.paperSubResTypeId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[论文子资源类型Id]不能为空(In 论文子资源)!(clsPaperSubResBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjPaperSubResEN.filePath) === true) {
    throw new Error(
      `(errid:Watl000411)字段[文件路径]不能为空(In 论文子资源)!(clsPaperSubResBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPaperSubResEN.paperSubResName) == false &&
    GetStrLen(pobjPaperSubResEN.paperSubResName) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[子资源名称(paperSubResName)]的长度不能超过200(In 论文子资源(PaperSubRes))!值:${pobjPaperSubResEN.paperSubResName}(clsPaperSubResBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.paperSubResTypeId) == false &&
    GetStrLen(pobjPaperSubResEN.paperSubResTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[论文子资源类型Id(paperSubResTypeId)]的长度不能超过4(In 论文子资源(PaperSubRes))!值:${pobjPaperSubResEN.paperSubResTypeId}(clsPaperSubResBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.filePath) == false &&
    GetStrLen(pobjPaperSubResEN.filePath) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[文件路径(filePath)]的长度不能超过500(In 论文子资源(PaperSubRes))!值:${pobjPaperSubResEN.filePath}(clsPaperSubResBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.idCurrEduCls) == false &&
    GetStrLen(pobjPaperSubResEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 论文子资源(PaperSubRes))!值:${pobjPaperSubResEN.idCurrEduCls}(clsPaperSubResBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.updUserId) == false &&
    GetStrLen(pobjPaperSubResEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 论文子资源(PaperSubRes))!值:${pobjPaperSubResEN.updUserId}(clsPaperSubResBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.updDate) == false &&
    GetStrLen(pobjPaperSubResEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文子资源(PaperSubRes))!值:${pobjPaperSubResEN.updDate}(clsPaperSubResBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPaperSubResEN.memo) == false && GetStrLen(pobjPaperSubResEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 论文子资源(PaperSubRes))!值:${pobjPaperSubResEN.memo}(clsPaperSubResBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjPaperSubResEN.paperSubResId &&
    undefined !== pobjPaperSubResEN.paperSubResId &&
    tzDataType.isNumber(pobjPaperSubResEN.paperSubResId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[论文子资源Id(paperSubResId)]的值:[${pobjPaperSubResEN.paperSubResId}], 非法,应该为数值型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.paperSubResName) == false &&
    undefined !== pobjPaperSubResEN.paperSubResName &&
    tzDataType.isString(pobjPaperSubResEN.paperSubResName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[子资源名称(paperSubResName)]的值:[${pobjPaperSubResEN.paperSubResName}], 非法,应该为字符型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.paperSubResTypeId) == false &&
    undefined !== pobjPaperSubResEN.paperSubResTypeId &&
    tzDataType.isString(pobjPaperSubResEN.paperSubResTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[论文子资源类型Id(paperSubResTypeId)]的值:[${pobjPaperSubResEN.paperSubResTypeId}], 非法,应该为字符型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.filePath) == false &&
    undefined !== pobjPaperSubResEN.filePath &&
    tzDataType.isString(pobjPaperSubResEN.filePath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[文件路径(filePath)]的值:[${pobjPaperSubResEN.filePath}], 非法,应该为字符型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.idCurrEduCls) == false &&
    undefined !== pobjPaperSubResEN.idCurrEduCls &&
    tzDataType.isString(pobjPaperSubResEN.idCurrEduCls) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjPaperSubResEN.idCurrEduCls}], 非法,应该为字符型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.updUserId) == false &&
    undefined !== pobjPaperSubResEN.updUserId &&
    tzDataType.isString(pobjPaperSubResEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjPaperSubResEN.updUserId}], 非法,应该为字符型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.updDate) == false &&
    undefined !== pobjPaperSubResEN.updDate &&
    tzDataType.isString(pobjPaperSubResEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjPaperSubResEN.updDate}], 非法,应该为字符型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.memo) == false &&
    undefined !== pobjPaperSubResEN.memo &&
    tzDataType.isString(pobjPaperSubResEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[备注(memo)]的值:[${pobjPaperSubResEN.memo}], 非法,应该为字符型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PaperSubRes_CheckProperty4Update(pobjPaperSubResEN: clsPaperSubResEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPaperSubResEN.paperSubResName) == false &&
    GetStrLen(pobjPaperSubResEN.paperSubResName) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[子资源名称(paperSubResName)]的长度不能超过200(In 论文子资源(PaperSubRes))!值:${pobjPaperSubResEN.paperSubResName}(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.paperSubResTypeId) == false &&
    GetStrLen(pobjPaperSubResEN.paperSubResTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[论文子资源类型Id(paperSubResTypeId)]的长度不能超过4(In 论文子资源(PaperSubRes))!值:${pobjPaperSubResEN.paperSubResTypeId}(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.filePath) == false &&
    GetStrLen(pobjPaperSubResEN.filePath) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[文件路径(filePath)]的长度不能超过500(In 论文子资源(PaperSubRes))!值:${pobjPaperSubResEN.filePath}(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.idCurrEduCls) == false &&
    GetStrLen(pobjPaperSubResEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 论文子资源(PaperSubRes))!值:${pobjPaperSubResEN.idCurrEduCls}(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.updUserId) == false &&
    GetStrLen(pobjPaperSubResEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 论文子资源(PaperSubRes))!值:${pobjPaperSubResEN.updUserId}(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.updDate) == false &&
    GetStrLen(pobjPaperSubResEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文子资源(PaperSubRes))!值:${pobjPaperSubResEN.updDate}(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPaperSubResEN.memo) == false && GetStrLen(pobjPaperSubResEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 论文子资源(PaperSubRes))!值:${pobjPaperSubResEN.memo}(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjPaperSubResEN.paperSubResId &&
    undefined !== pobjPaperSubResEN.paperSubResId &&
    tzDataType.isNumber(pobjPaperSubResEN.paperSubResId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[论文子资源Id(paperSubResId)]的值:[${pobjPaperSubResEN.paperSubResId}], 非法,应该为数值型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.paperSubResName) == false &&
    undefined !== pobjPaperSubResEN.paperSubResName &&
    tzDataType.isString(pobjPaperSubResEN.paperSubResName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[子资源名称(paperSubResName)]的值:[${pobjPaperSubResEN.paperSubResName}], 非法,应该为字符型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.paperSubResTypeId) == false &&
    undefined !== pobjPaperSubResEN.paperSubResTypeId &&
    tzDataType.isString(pobjPaperSubResEN.paperSubResTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[论文子资源类型Id(paperSubResTypeId)]的值:[${pobjPaperSubResEN.paperSubResTypeId}], 非法,应该为字符型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.filePath) == false &&
    undefined !== pobjPaperSubResEN.filePath &&
    tzDataType.isString(pobjPaperSubResEN.filePath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[文件路径(filePath)]的值:[${pobjPaperSubResEN.filePath}], 非法,应该为字符型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.idCurrEduCls) == false &&
    undefined !== pobjPaperSubResEN.idCurrEduCls &&
    tzDataType.isString(pobjPaperSubResEN.idCurrEduCls) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjPaperSubResEN.idCurrEduCls}], 非法,应该为字符型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.updUserId) == false &&
    undefined !== pobjPaperSubResEN.updUserId &&
    tzDataType.isString(pobjPaperSubResEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjPaperSubResEN.updUserId}], 非法,应该为字符型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.updDate) == false &&
    undefined !== pobjPaperSubResEN.updDate &&
    tzDataType.isString(pobjPaperSubResEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjPaperSubResEN.updDate}], 非法,应该为字符型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubResEN.memo) == false &&
    undefined !== pobjPaperSubResEN.memo &&
    tzDataType.isString(pobjPaperSubResEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[备注(memo)]的值:[${pobjPaperSubResEN.memo}], 非法,应该为字符型(In 论文子资源(PaperSubRes))!(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjPaperSubResEN.paperSubResId ||
    (pobjPaperSubResEN.paperSubResId != null && pobjPaperSubResEN.paperSubResId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[论文子资源Id]不能为空(In 论文子资源)!(clsPaperSubResBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PaperSubRes_GetJSONStrByObj(pobjPaperSubResEN: clsPaperSubResEN): string {
  pobjPaperSubResEN.sfUpdFldSetStr = pobjPaperSubResEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPaperSubResEN);
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
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PaperSubRes_GetObjLstByJSONStr(strJSON: string): Array<clsPaperSubResEN> {
  let arrPaperSubResObjLst = new Array<clsPaperSubResEN>();
  if (strJSON === '') {
    return arrPaperSubResObjLst;
  }
  try {
    arrPaperSubResObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPaperSubResObjLst;
  }
  return arrPaperSubResObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPaperSubResObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PaperSubRes_GetObjLstByJSONObjLst(
  arrPaperSubResObjLstS: Array<clsPaperSubResEN>,
): Array<clsPaperSubResEN> {
  const arrPaperSubResObjLst = new Array<clsPaperSubResEN>();
  for (const objInFor of arrPaperSubResObjLstS) {
    const obj1 = PaperSubRes_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPaperSubResObjLst.push(obj1);
  }
  return arrPaperSubResObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PaperSubRes_GetObjByJSONStr(strJSON: string): clsPaperSubResEN {
  let pobjPaperSubResEN = new clsPaperSubResEN();
  if (strJSON === '') {
    return pobjPaperSubResEN;
  }
  try {
    pobjPaperSubResEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPaperSubResEN;
  }
  return pobjPaperSubResEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PaperSubRes_GetCombineCondition(objPaperSubResCond: clsPaperSubResEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubResCond.dicFldComparisonOp,
      clsPaperSubResEN.con_PaperSubResId,
    ) == true
  ) {
    const strComparisonOpPaperSubResId: string =
      objPaperSubResCond.dicFldComparisonOp[clsPaperSubResEN.con_PaperSubResId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperSubResEN.con_PaperSubResId,
      objPaperSubResCond.paperSubResId,
      strComparisonOpPaperSubResId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubResCond.dicFldComparisonOp,
      clsPaperSubResEN.con_PaperSubResName,
    ) == true
  ) {
    const strComparisonOpPaperSubResName: string =
      objPaperSubResCond.dicFldComparisonOp[clsPaperSubResEN.con_PaperSubResName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubResEN.con_PaperSubResName,
      objPaperSubResCond.paperSubResName,
      strComparisonOpPaperSubResName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubResCond.dicFldComparisonOp,
      clsPaperSubResEN.con_PaperSubResTypeId,
    ) == true
  ) {
    const strComparisonOpPaperSubResTypeId: string =
      objPaperSubResCond.dicFldComparisonOp[clsPaperSubResEN.con_PaperSubResTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubResEN.con_PaperSubResTypeId,
      objPaperSubResCond.paperSubResTypeId,
      strComparisonOpPaperSubResTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubResCond.dicFldComparisonOp,
      clsPaperSubResEN.con_FilePath,
    ) == true
  ) {
    const strComparisonOpFilePath: string =
      objPaperSubResCond.dicFldComparisonOp[clsPaperSubResEN.con_FilePath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubResEN.con_FilePath,
      objPaperSubResCond.filePath,
      strComparisonOpFilePath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubResCond.dicFldComparisonOp,
      clsPaperSubResEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objPaperSubResCond.dicFldComparisonOp[clsPaperSubResEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubResEN.con_IdCurrEduCls,
      objPaperSubResCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubResCond.dicFldComparisonOp,
      clsPaperSubResEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objPaperSubResCond.dicFldComparisonOp[clsPaperSubResEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubResEN.con_UpdUserId,
      objPaperSubResCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubResCond.dicFldComparisonOp,
      clsPaperSubResEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPaperSubResCond.dicFldComparisonOp[clsPaperSubResEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubResEN.con_UpdDate,
      objPaperSubResCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubResCond.dicFldComparisonOp,
      clsPaperSubResEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPaperSubResCond.dicFldComparisonOp[clsPaperSubResEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubResEN.con_Memo,
      objPaperSubResCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PaperSubRes(论文子资源),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strPaperSubResName: 子资源名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PaperSubRes_GetUniCondStr(objPaperSubResEN: clsPaperSubResEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and IdCurrEduCls = '{0}'", objPaperSubResEN.idCurrEduCls);
  strWhereCond += Format(" and PaperSubResName = '{0}'", objPaperSubResEN.paperSubResName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PaperSubRes(论文子资源),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strPaperSubResName: 子资源名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PaperSubRes_GetUniCondStr4Update(objPaperSubResEN: clsPaperSubResEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PaperSubResId <> '{0}'", objPaperSubResEN.paperSubResId);
  strWhereCond += Format(" and IdCurrEduCls = '{0}'", objPaperSubResEN.idCurrEduCls);
  strWhereCond += Format(" and PaperSubResName = '{0}'", objPaperSubResEN.paperSubResName);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objPaperSubResENS:源对象
 * @param objPaperSubResENT:目标对象
 */
export function PaperSubRes_CopyObjTo(
  objPaperSubResENS: clsPaperSubResEN,
  objPaperSubResENT: clsPaperSubResEN,
): void {
  objPaperSubResENT.paperSubResId = objPaperSubResENS.paperSubResId; //论文子资源Id
  objPaperSubResENT.paperSubResName = objPaperSubResENS.paperSubResName; //子资源名称
  objPaperSubResENT.paperSubResTypeId = objPaperSubResENS.paperSubResTypeId; //论文子资源类型Id
  objPaperSubResENT.filePath = objPaperSubResENS.filePath; //文件路径
  objPaperSubResENT.idCurrEduCls = objPaperSubResENS.idCurrEduCls; //教学班流水号
  objPaperSubResENT.updUserId = objPaperSubResENS.updUserId; //修改用户Id
  objPaperSubResENT.updDate = objPaperSubResENS.updDate; //修改日期
  objPaperSubResENT.memo = objPaperSubResENS.memo; //备注
  objPaperSubResENT.sfUpdFldSetStr = objPaperSubResENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPaperSubResENS:源对象
 * @param objPaperSubResENT:目标对象
 */
export function PaperSubRes_GetObjFromJsonObj(
  objPaperSubResENS: clsPaperSubResEN,
): clsPaperSubResEN {
  const objPaperSubResENT: clsPaperSubResEN = new clsPaperSubResEN();
  ObjectAssign(objPaperSubResENT, objPaperSubResENS);
  return objPaperSubResENT;
}
