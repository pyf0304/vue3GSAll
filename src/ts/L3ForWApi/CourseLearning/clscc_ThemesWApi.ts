/**
 * 类名:clscc_ThemesWApi
 * 表名:cc_Themes(01120069)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:06
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
 * 课程主题(cc_Themes)
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
import { clscc_ThemesEN } from '@/ts/L0Entity/CourseLearning/clscc_ThemesEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cc_Themes_Controller = 'cc_ThemesApi';
export const cc_Themes_ConstructorName = 'cc_Themes';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strThemeId:关键字
 * @returns 对象
 **/
export async function cc_Themes_GetObjByThemeIdAsync(
  strThemeId: string,
): Promise<clscc_ThemesEN | null> {
  const strThisFuncName = 'GetObjByThemeIdAsync';

  if (IsNullOrEmpty(strThemeId) == true) {
    const strMsg = Format('参数:[strThemeId]不能为空!(In clscc_ThemesWApi.GetObjByThemeIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strThemeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strThemeId]的长度:[{0}]不正确!(clscc_ThemesWApi.GetObjByThemeIdAsync)',
      strThemeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByThemeId';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strThemeId,
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
      const objcc_Themes = cc_Themes_GetObjFromJsonObj(returnObj);
      return objcc_Themes;
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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
 * @param strThemeId:所给的关键字
 * @returns 对象
 */
export async function cc_Themes_GetObjByThemeIdCache(strThemeId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByThemeIdCache';

  if (IsNullOrEmpty(strThemeId) == true) {
    const strMsg = Format('参数:[strThemeId]不能为空!(In clscc_ThemesWApi.GetObjByThemeIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strThemeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strThemeId]的长度:[{0}]不正确!(clscc_ThemesWApi.GetObjByThemeIdCache)',
      strThemeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstCache();
  try {
    const arrcc_ThemesSel = arrcc_ThemesObjLstCache.filter((x) => x.themeId == strThemeId);
    let objcc_Themes: clscc_ThemesEN;
    if (arrcc_ThemesSel.length > 0) {
      objcc_Themes = arrcc_ThemesSel[0];
      return objcc_Themes;
    } else {
      if (bolTryAsyncOnce == true) {
        const objcc_ThemesConst = await cc_Themes_GetObjByThemeIdAsync(strThemeId);
        if (objcc_ThemesConst != null) {
          cc_Themes_ReFreshThisCache();
          return objcc_ThemesConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strThemeId,
      cc_Themes_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strThemeId:所给的关键字
 * @returns 对象
 */
export async function cc_Themes_GetObjByThemeIdlocalStorage(strThemeId: string) {
  const strThisFuncName = 'GetObjByThemeIdlocalStorage';

  if (IsNullOrEmpty(strThemeId) == true) {
    const strMsg = Format(
      '参数:[strThemeId]不能为空!(In clscc_ThemesWApi.GetObjByThemeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strThemeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strThemeId]的长度:[{0}]不正确!(clscc_ThemesWApi.GetObjByThemeIdlocalStorage)',
      strThemeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clscc_ThemesEN._CurrTabName, strThemeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objcc_ThemesCache: clscc_ThemesEN = JSON.parse(strTempObj);
    return objcc_ThemesCache;
  }
  try {
    const objcc_Themes = await cc_Themes_GetObjByThemeIdAsync(strThemeId);
    if (objcc_Themes != null) {
      localStorage.setItem(strKey, JSON.stringify(objcc_Themes));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objcc_Themes;
    }
    return objcc_Themes;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strThemeId,
      cc_Themes_ConstructorName,
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
 * @param objcc_Themes:所给的对象
 * @returns 对象
 */
export async function cc_Themes_UpdateObjInLstCache(objcc_Themes: clscc_ThemesEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstCache();
    const obj = arrcc_ThemesObjLstCache.find((x) => x.themeId == objcc_Themes.themeId);
    if (obj != null) {
      objcc_Themes.themeId = obj.themeId;
      ObjectAssign(obj, objcc_Themes);
    } else {
      arrcc_ThemesObjLstCache.push(objcc_Themes);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      cc_Themes_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strThemeId:所给的关键字
 * @returns 对象
 */
export async function cc_Themes_GetNameByThemeIdCache(strThemeId: string) {
  if (IsNullOrEmpty(strThemeId) == true) {
    const strMsg = Format('参数:[strThemeId]不能为空!(In clscc_ThemesWApi.GetNameByThemeIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strThemeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strThemeId]的长度:[{0}]不正确!(clscc_ThemesWApi.GetNameByThemeIdCache)',
      strThemeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstCache();
  if (arrcc_ThemesObjLstCache == null) return '';
  try {
    const arrcc_ThemesSel = arrcc_ThemesObjLstCache.filter((x) => x.themeId == strThemeId);
    let objcc_Themes: clscc_ThemesEN;
    if (arrcc_ThemesSel.length > 0) {
      objcc_Themes = arrcc_ThemesSel[0];
      return objcc_Themes.themeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strThemeId,
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
export async function cc_Themes_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clscc_ThemesEN.con_ThemeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clscc_ThemesEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clscc_ThemesEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strThemeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objcc_Themes = await cc_Themes_GetObjByThemeIdCache(strThemeId);
  if (objcc_Themes == null) return '';
  if (objcc_Themes.GetFldValue(strOutFldName) == null) return '';
  return objcc_Themes.GetFldValue(strOutFldName).toString();
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
export function cc_Themes_SortFunDefa(a: clscc_ThemesEN, b: clscc_ThemesEN): number {
  return a.themeId.localeCompare(b.themeId);
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
export function cc_Themes_SortFunDefa2Fld(a: clscc_ThemesEN, b: clscc_ThemesEN): number {
  if (a.themeName == b.themeName) return a.themeDesc.localeCompare(b.themeDesc);
  else return a.themeName.localeCompare(b.themeName);
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
export function cc_Themes_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscc_ThemesEN.con_ThemeId:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          return a.themeId.localeCompare(b.themeId);
        };
      case clscc_ThemesEN.con_ThemeName:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          return a.themeName.localeCompare(b.themeName);
        };
      case clscc_ThemesEN.con_ThemeDesc:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          if (a.themeDesc == null) return -1;
          if (b.themeDesc == null) return 1;
          return a.themeDesc.localeCompare(b.themeDesc);
        };
      case clscc_ThemesEN.con_PageName:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          if (a.pageName == null) return -1;
          if (b.pageName == null) return 1;
          return a.pageName.localeCompare(b.pageName);
        };
      case clscc_ThemesEN.con_ExampleImgPath:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          if (a.exampleImgPath == null) return -1;
          if (b.exampleImgPath == null) return 1;
          return a.exampleImgPath.localeCompare(b.exampleImgPath);
        };
      case clscc_ThemesEN.con_OrderNum:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          return a.orderNum - b.orderNum;
        };
      case clscc_ThemesEN.con_IsUse:
        return (a: clscc_ThemesEN) => {
          if (a.isUse == true) return 1;
          else return -1;
        };
      case clscc_ThemesEN.con_UpdDate:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clscc_ThemesEN.con_UpdUserId:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clscc_ThemesEN.con_Memo:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[cc_Themes]中不存在!(in ${cc_Themes_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clscc_ThemesEN.con_ThemeId:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          return b.themeId.localeCompare(a.themeId);
        };
      case clscc_ThemesEN.con_ThemeName:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          return b.themeName.localeCompare(a.themeName);
        };
      case clscc_ThemesEN.con_ThemeDesc:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          if (b.themeDesc == null) return -1;
          if (a.themeDesc == null) return 1;
          return b.themeDesc.localeCompare(a.themeDesc);
        };
      case clscc_ThemesEN.con_PageName:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          if (b.pageName == null) return -1;
          if (a.pageName == null) return 1;
          return b.pageName.localeCompare(a.pageName);
        };
      case clscc_ThemesEN.con_ExampleImgPath:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          if (b.exampleImgPath == null) return -1;
          if (a.exampleImgPath == null) return 1;
          return b.exampleImgPath.localeCompare(a.exampleImgPath);
        };
      case clscc_ThemesEN.con_OrderNum:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          return b.orderNum - a.orderNum;
        };
      case clscc_ThemesEN.con_IsUse:
        return (b: clscc_ThemesEN) => {
          if (b.isUse == true) return 1;
          else return -1;
        };
      case clscc_ThemesEN.con_UpdDate:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clscc_ThemesEN.con_UpdUserId:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clscc_ThemesEN.con_Memo:
        return (a: clscc_ThemesEN, b: clscc_ThemesEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[cc_Themes]中不存在!(in ${cc_Themes_ConstructorName}.${strThisFuncName})`;
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
export async function cc_Themes_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clscc_ThemesEN.con_ThemeId:
      return (obj: clscc_ThemesEN) => {
        return obj.themeId === value;
      };
    case clscc_ThemesEN.con_ThemeName:
      return (obj: clscc_ThemesEN) => {
        return obj.themeName === value;
      };
    case clscc_ThemesEN.con_ThemeDesc:
      return (obj: clscc_ThemesEN) => {
        return obj.themeDesc === value;
      };
    case clscc_ThemesEN.con_PageName:
      return (obj: clscc_ThemesEN) => {
        return obj.pageName === value;
      };
    case clscc_ThemesEN.con_ExampleImgPath:
      return (obj: clscc_ThemesEN) => {
        return obj.exampleImgPath === value;
      };
    case clscc_ThemesEN.con_OrderNum:
      return (obj: clscc_ThemesEN) => {
        return obj.orderNum === value;
      };
    case clscc_ThemesEN.con_IsUse:
      return (obj: clscc_ThemesEN) => {
        return obj.isUse === value;
      };
    case clscc_ThemesEN.con_UpdDate:
      return (obj: clscc_ThemesEN) => {
        return obj.updDate === value;
      };
    case clscc_ThemesEN.con_UpdUserId:
      return (obj: clscc_ThemesEN) => {
        return obj.updUserId === value;
      };
    case clscc_ThemesEN.con_Memo:
      return (obj: clscc_ThemesEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[cc_Themes]中不存在!(in ${cc_Themes_ConstructorName}.${strThisFuncName})`;
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
export async function cc_Themes_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clscc_ThemesEN.con_ThemeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrcc_Themes = await cc_Themes_GetObjLstCache();
  if (arrcc_Themes == null) return [];
  let arrcc_ThemesSel = arrcc_Themes;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrcc_ThemesSel = arrcc_ThemesSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrcc_ThemesSel = arrcc_ThemesSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrcc_ThemesSel = arrcc_ThemesSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrcc_ThemesSel = arrcc_ThemesSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrcc_ThemesSel = arrcc_ThemesSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrcc_ThemesSel = arrcc_ThemesSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrcc_ThemesSel = arrcc_ThemesSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrcc_ThemesSel = arrcc_ThemesSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrcc_ThemesSel.length == 0) return [];
  return arrcc_ThemesSel.map((x) => x.themeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function cc_Themes_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
export async function cc_Themes_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
export async function cc_Themes_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clscc_ThemesEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

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
      const objcc_Themes = cc_Themes_GetObjFromJsonObj(returnObj);
      return objcc_Themes;
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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
export async function cc_Themes_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscc_ThemesEN._CurrTabName;
  if (IsNullOrEmpty(clscc_ThemesEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_ThemesEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrcc_ThemesExObjLstCache: Array<clscc_ThemesEN> = CacheHelper.Get(strKey);
    const arrcc_ThemesObjLstT = cc_Themes_GetObjLstByJSONObjLst(arrcc_ThemesExObjLstCache);
    return arrcc_ThemesObjLstT;
  }
  try {
    const arrcc_ThemesExObjLst = await cc_Themes_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrcc_ThemesExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_ThemesExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_ThemesExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_Themes_ConstructorName,
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
export async function cc_Themes_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscc_ThemesEN._CurrTabName;
  if (IsNullOrEmpty(clscc_ThemesEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_ThemesEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrcc_ThemesExObjLstCache: Array<clscc_ThemesEN> = JSON.parse(strTempObjLst);
    const arrcc_ThemesObjLstT = cc_Themes_GetObjLstByJSONObjLst(arrcc_ThemesExObjLstCache);
    return arrcc_ThemesObjLstT;
  }
  try {
    const arrcc_ThemesExObjLst = await cc_Themes_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrcc_ThemesExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_ThemesExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_ThemesExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_Themes_ConstructorName,
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
export async function cc_Themes_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clscc_ThemesEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrcc_ThemesObjLstCache: Array<clscc_ThemesEN> = JSON.parse(strTempObjLst);
    return arrcc_ThemesObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function cc_Themes_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clscc_ThemesEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

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
          cc_Themes_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_Themes_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
export async function cc_Themes_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscc_ThemesEN._CurrTabName;
  if (IsNullOrEmpty(clscc_ThemesEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_ThemesEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrcc_ThemesExObjLstCache: Array<clscc_ThemesEN> = JSON.parse(strTempObjLst);
    const arrcc_ThemesObjLstT = cc_Themes_GetObjLstByJSONObjLst(arrcc_ThemesExObjLstCache);
    return arrcc_ThemesObjLstT;
  }
  try {
    const arrcc_ThemesExObjLst = await cc_Themes_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrcc_ThemesExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_ThemesExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_ThemesExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_Themes_ConstructorName,
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
export async function cc_Themes_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clscc_ThemesEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrcc_ThemesObjLstCache: Array<clscc_ThemesEN> = JSON.parse(strTempObjLst);
    return arrcc_ThemesObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function cc_Themes_GetObjLstCache(): Promise<Array<clscc_ThemesEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrcc_ThemesObjLstCache;
  switch (clscc_ThemesEN.CacheModeId) {
    case '04': //sessionStorage
      arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstClientCache();
      break;
    default:
      arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstClientCache();
      break;
  }
  return arrcc_ThemesObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function cc_Themes_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrcc_ThemesObjLstCache;
  switch (clscc_ThemesEN.CacheModeId) {
    case '04': //sessionStorage
      arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrcc_ThemesObjLstCache = null;
      break;
    default:
      arrcc_ThemesObjLstCache = null;
      break;
  }
  return arrcc_ThemesObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrThemeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function cc_Themes_GetSubObjLstCache(objcc_ThemesCond: clscc_ThemesEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstCache();
  let arrcc_ThemesSel = arrcc_ThemesObjLstCache;
  if (objcc_ThemesCond.sfFldComparisonOp == null || objcc_ThemesCond.sfFldComparisonOp == '')
    return arrcc_ThemesSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_ThemesCond.sfFldComparisonOp,
  );
  //console.log("clscc_ThemesWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_ThemesCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_ThemesCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrcc_ThemesSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objcc_ThemesCond),
      cc_Themes_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_ThemesEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrThemeId:关键字列表
 * @returns 对象列表
 **/
export async function cc_Themes_GetObjLstByThemeIdLstAsync(
  arrThemeId: Array<string>,
): Promise<Array<clscc_ThemesEN>> {
  const strThisFuncName = 'GetObjLstByThemeIdLstAsync';
  const strAction = 'GetObjLstByThemeIdLst';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrThemeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cc_Themes_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_Themes_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
 * @param arrstrThemeIdLst:关键字列表
 * @returns 对象列表
 */
export async function cc_Themes_GetObjLstByThemeIdLstCache(arrThemeIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByThemeIdLstCache';
  try {
    const arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstCache();
    const arrcc_ThemesSel = arrcc_ThemesObjLstCache.filter(
      (x) => arrThemeIdLst.indexOf(x.themeId) > -1,
    );
    return arrcc_ThemesSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrThemeIdLst.join(','),
      cc_Themes_ConstructorName,
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
export async function cc_Themes_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clscc_ThemesEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

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
          cc_Themes_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_Themes_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
export async function cc_Themes_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clscc_ThemesEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

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
          cc_Themes_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_Themes_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
export async function cc_Themes_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clscc_ThemesEN>();
  const arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstCache();
  if (arrcc_ThemesObjLstCache.length == 0) return arrcc_ThemesObjLstCache;
  let arrcc_ThemesSel = arrcc_ThemesObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objcc_ThemesCond = new clscc_ThemesEN();
  ObjectAssign(objcc_ThemesCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clscc_ThemesWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_ThemesCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrcc_ThemesSel.length == 0) return arrcc_ThemesSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_ThemesSel = arrcc_ThemesSel.sort(cc_Themes_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_ThemesSel = arrcc_ThemesSel.sort(objPagerPara.sortFun);
    }
    arrcc_ThemesSel = arrcc_ThemesSel.slice(intStart, intEnd);
    return arrcc_ThemesSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_Themes_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_ThemesEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function cc_Themes_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_ThemesEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clscc_ThemesEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

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
          cc_Themes_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_Themes_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
 * @param strThemeId:关键字
 * @returns 获取删除的结果
 **/
export async function cc_Themes_DelRecordAsync(strThemeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strThemeId);

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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
 * @param arrThemeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function cc_Themes_Delcc_ThemessAsync(arrThemeId: Array<string>): Promise<number> {
  const strThisFuncName = 'Delcc_ThemessAsync';
  const strAction = 'Delcc_Themess';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrThemeId, config);
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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
export async function cc_Themes_Delcc_ThemessByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'Delcc_ThemessByCondAsync';
  const strAction = 'Delcc_ThemessByCond';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
 * @param objcc_ThemesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_Themes_AddNewRecordAsync(
  objcc_ThemesEN: clscc_ThemesEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objcc_ThemesEN.themeId === null || objcc_ThemesEN.themeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objcc_ThemesEN);
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_ThemesEN, config);
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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
 * @param objcc_ThemesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_Themes_AddNewRecordWithMaxIdAsync(
  objcc_ThemesEN: clscc_ThemesEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_ThemesEN, config);
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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
 * @param objcc_ThemesEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function cc_Themes_AddNewRecordWithReturnKeyAsync(
  objcc_ThemesEN: clscc_ThemesEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_ThemesEN, config);
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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
 * @param objcc_ThemesEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function cc_Themes_UpdateRecordAsync(
  objcc_ThemesEN: clscc_ThemesEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objcc_ThemesEN.sfUpdFldSetStr === undefined ||
    objcc_ThemesEN.sfUpdFldSetStr === null ||
    objcc_ThemesEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcc_ThemesEN.themeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_ThemesEN, config);
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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
 * @param objcc_ThemesEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function cc_Themes_UpdateWithConditionAsync(
  objcc_ThemesEN: clscc_ThemesEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objcc_ThemesEN.sfUpdFldSetStr === undefined ||
    objcc_ThemesEN.sfUpdFldSetStr === null ||
    objcc_ThemesEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcc_ThemesEN.themeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);
  objcc_ThemesEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_ThemesEN, config);
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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
 * @param objstrThemeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function cc_Themes_IsExistRecordCache(objcc_ThemesCond: clscc_ThemesEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstCache();
  if (arrcc_ThemesObjLstCache == null) return false;
  let arrcc_ThemesSel = arrcc_ThemesObjLstCache;
  if (objcc_ThemesCond.sfFldComparisonOp == null || objcc_ThemesCond.sfFldComparisonOp == '')
    return arrcc_ThemesSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_ThemesCond.sfFldComparisonOp,
  );
  //console.log("clscc_ThemesWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_ThemesCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_ThemesCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrcc_ThemesSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objcc_ThemesCond),
      cc_Themes_ConstructorName,
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
export async function cc_Themes_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
 * @param strThemeId:所给的关键字
 * @returns 对象
 */
export async function cc_Themes_IsExistCache(strThemeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstCache();
  if (arrcc_ThemesObjLstCache == null) return false;
  try {
    const arrcc_ThemesSel = arrcc_ThemesObjLstCache.filter((x) => x.themeId == strThemeId);
    if (arrcc_ThemesSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strThemeId,
      cc_Themes_ConstructorName,
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
 * @param strThemeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function cc_Themes_IsExistAsync(strThemeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strThemeId,
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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
export async function cc_Themes_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
 * @param objcc_ThemesCond:条件对象
 * @returns 对象列表记录数
 */
export async function cc_Themes_GetRecCountByCondCache(objcc_ThemesCond: clscc_ThemesEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrcc_ThemesObjLstCache = await cc_Themes_GetObjLstCache();
  if (arrcc_ThemesObjLstCache == null) return 0;
  let arrcc_ThemesSel = arrcc_ThemesObjLstCache;
  if (objcc_ThemesCond.sfFldComparisonOp == null || objcc_ThemesCond.sfFldComparisonOp == '')
    return arrcc_ThemesSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_ThemesCond.sfFldComparisonOp,
  );
  //console.log("clscc_ThemesWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_ThemesCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_ThemesCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrcc_ThemesSel = arrcc_ThemesSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrcc_ThemesSel = arrcc_ThemesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrcc_ThemesSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objcc_ThemesCond),
      cc_Themes_ConstructorName,
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
export async function cc_Themes_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cc_Themes_Controller, strAction);

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
        cc_Themes_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_Themes_ConstructorName,
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
export function cc_Themes_GetWebApiUrl(strController: string, strAction: string): string {
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
export function cc_Themes_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clscc_ThemesEN._CurrTabName;
  switch (clscc_ThemesEN.CacheModeId) {
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
export function cc_Themes_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clscc_ThemesEN._CurrTabName;
    switch (clscc_ThemesEN.CacheModeId) {
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
export async function cc_Themes_Cache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In )', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：Cache");
  const arrObjLstSel = await cc_Themes_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clscc_ThemesEN.con_ThemeId,
    clscc_ThemesEN.con_ThemeName,
    '课程主题',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function cc_Themes_CheckPropertyNew(pobjcc_ThemesEN: clscc_ThemesEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjcc_ThemesEN.themeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[主题名]不能为空(In 课程主题)!(clscc_ThemesBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjcc_ThemesEN.themeId) == false && GetStrLen(pobjcc_ThemesEN.themeId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[主题Id(themeId)]的长度不能超过4(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.themeId)(clscc_ThemesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.themeName) == false &&
    GetStrLen(pobjcc_ThemesEN.themeName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主题名(themeName)]的长度不能超过200(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.themeName)(clscc_ThemesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.themeDesc) == false &&
    GetStrLen(pobjcc_ThemesEN.themeDesc) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主题描述(themeDesc)]的长度不能超过500(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.themeDesc)(clscc_ThemesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.pageName) == false &&
    GetStrLen(pobjcc_ThemesEN.pageName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[页面名称(pageName)]的长度不能超过100(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.pageName)(clscc_ThemesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.exampleImgPath) == false &&
    GetStrLen(pobjcc_ThemesEN.exampleImgPath) > 300
  ) {
    throw new Error(
      '(errid:Watl000413)字段[示例图路径(exampleImgPath)]的长度不能超过300(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.exampleImgPath)(clscc_ThemesBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjcc_ThemesEN.updDate) == false && GetStrLen(pobjcc_ThemesEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.updDate)(clscc_ThemesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.updUserId) == false &&
    GetStrLen(pobjcc_ThemesEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.updUserId)(clscc_ThemesBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjcc_ThemesEN.memo) == false && GetStrLen(pobjcc_ThemesEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.memo)(clscc_ThemesBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.themeId) == false &&
    undefined !== pobjcc_ThemesEN.themeId &&
    tzDataType.isString(pobjcc_ThemesEN.themeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题Id(themeId)]的值:[$(pobjcc_ThemesEN.themeId)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.themeName) == false &&
    undefined !== pobjcc_ThemesEN.themeName &&
    tzDataType.isString(pobjcc_ThemesEN.themeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题名(themeName)]的值:[$(pobjcc_ThemesEN.themeName)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.themeDesc) == false &&
    undefined !== pobjcc_ThemesEN.themeDesc &&
    tzDataType.isString(pobjcc_ThemesEN.themeDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题描述(themeDesc)]的值:[$(pobjcc_ThemesEN.themeDesc)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.pageName) == false &&
    undefined !== pobjcc_ThemesEN.pageName &&
    tzDataType.isString(pobjcc_ThemesEN.pageName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[页面名称(pageName)]的值:[$(pobjcc_ThemesEN.pageName)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.exampleImgPath) == false &&
    undefined !== pobjcc_ThemesEN.exampleImgPath &&
    tzDataType.isString(pobjcc_ThemesEN.exampleImgPath) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[示例图路径(exampleImgPath)]的值:[$(pobjcc_ThemesEN.exampleImgPath)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_ThemesEN.orderNum &&
    undefined !== pobjcc_ThemesEN.orderNum &&
    tzDataType.isNumber(pobjcc_ThemesEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjcc_ThemesEN.orderNum)], 非法,应该为数值型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_ThemesEN.isUse &&
    undefined !== pobjcc_ThemesEN.isUse &&
    tzDataType.isBoolean(pobjcc_ThemesEN.isUse) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否使用(isUse)]的值:[$(pobjcc_ThemesEN.isUse)], 非法,应该为布尔型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.updDate) == false &&
    undefined !== pobjcc_ThemesEN.updDate &&
    tzDataType.isString(pobjcc_ThemesEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjcc_ThemesEN.updDate)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.updUserId) == false &&
    undefined !== pobjcc_ThemesEN.updUserId &&
    tzDataType.isString(pobjcc_ThemesEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjcc_ThemesEN.updUserId)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.memo) == false &&
    undefined !== pobjcc_ThemesEN.memo &&
    tzDataType.isString(pobjcc_ThemesEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjcc_ThemesEN.memo)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function cc_Themes_CheckProperty4Update(pobjcc_ThemesEN: clscc_ThemesEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjcc_ThemesEN.themeId) == false && GetStrLen(pobjcc_ThemesEN.themeId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[主题Id(themeId)]的长度不能超过4(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.themeId)(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.themeName) == false &&
    GetStrLen(pobjcc_ThemesEN.themeName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主题名(themeName)]的长度不能超过200(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.themeName)(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.themeDesc) == false &&
    GetStrLen(pobjcc_ThemesEN.themeDesc) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主题描述(themeDesc)]的长度不能超过500(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.themeDesc)(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.pageName) == false &&
    GetStrLen(pobjcc_ThemesEN.pageName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[页面名称(pageName)]的长度不能超过100(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.pageName)(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.exampleImgPath) == false &&
    GetStrLen(pobjcc_ThemesEN.exampleImgPath) > 300
  ) {
    throw new Error(
      '(errid:Watl000416)字段[示例图路径(exampleImgPath)]的长度不能超过300(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.exampleImgPath)(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjcc_ThemesEN.updDate) == false && GetStrLen(pobjcc_ThemesEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.updDate)(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.updUserId) == false &&
    GetStrLen(pobjcc_ThemesEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.updUserId)(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjcc_ThemesEN.memo) == false && GetStrLen(pobjcc_ThemesEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 课程主题(cc_Themes))!值:$(pobjcc_ThemesEN.memo)(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.themeId) == false &&
    undefined !== pobjcc_ThemesEN.themeId &&
    tzDataType.isString(pobjcc_ThemesEN.themeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题Id(themeId)]的值:[$(pobjcc_ThemesEN.themeId)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.themeName) == false &&
    undefined !== pobjcc_ThemesEN.themeName &&
    tzDataType.isString(pobjcc_ThemesEN.themeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题名(themeName)]的值:[$(pobjcc_ThemesEN.themeName)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.themeDesc) == false &&
    undefined !== pobjcc_ThemesEN.themeDesc &&
    tzDataType.isString(pobjcc_ThemesEN.themeDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题描述(themeDesc)]的值:[$(pobjcc_ThemesEN.themeDesc)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.pageName) == false &&
    undefined !== pobjcc_ThemesEN.pageName &&
    tzDataType.isString(pobjcc_ThemesEN.pageName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[页面名称(pageName)]的值:[$(pobjcc_ThemesEN.pageName)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.exampleImgPath) == false &&
    undefined !== pobjcc_ThemesEN.exampleImgPath &&
    tzDataType.isString(pobjcc_ThemesEN.exampleImgPath) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[示例图路径(exampleImgPath)]的值:[$(pobjcc_ThemesEN.exampleImgPath)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_ThemesEN.orderNum &&
    undefined !== pobjcc_ThemesEN.orderNum &&
    tzDataType.isNumber(pobjcc_ThemesEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjcc_ThemesEN.orderNum)], 非法,应该为数值型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_ThemesEN.isUse &&
    undefined !== pobjcc_ThemesEN.isUse &&
    tzDataType.isBoolean(pobjcc_ThemesEN.isUse) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否使用(isUse)]的值:[$(pobjcc_ThemesEN.isUse)], 非法,应该为布尔型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.updDate) == false &&
    undefined !== pobjcc_ThemesEN.updDate &&
    tzDataType.isString(pobjcc_ThemesEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjcc_ThemesEN.updDate)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.updUserId) == false &&
    undefined !== pobjcc_ThemesEN.updUserId &&
    tzDataType.isString(pobjcc_ThemesEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjcc_ThemesEN.updUserId)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_ThemesEN.memo) == false &&
    undefined !== pobjcc_ThemesEN.memo &&
    tzDataType.isString(pobjcc_ThemesEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjcc_ThemesEN.memo)], 非法,应该为字符型(In 课程主题(cc_Themes))!(clscc_ThemesBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjcc_ThemesEN.themeId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[主题Id]不能为空(In 课程主题)!(clscc_ThemesBL:CheckProperty4Update)',
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
export function cc_Themes_GetJSONStrByObj(pobjcc_ThemesEN: clscc_ThemesEN): string {
  pobjcc_ThemesEN.sfUpdFldSetStr = pobjcc_ThemesEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjcc_ThemesEN);
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
export function cc_Themes_GetObjLstByJSONStr(strJSON: string): Array<clscc_ThemesEN> {
  let arrcc_ThemesObjLst = new Array<clscc_ThemesEN>();
  if (strJSON === '') {
    return arrcc_ThemesObjLst;
  }
  try {
    arrcc_ThemesObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrcc_ThemesObjLst;
  }
  return arrcc_ThemesObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_ThemesObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function cc_Themes_GetObjLstByJSONObjLst(
  arrcc_ThemesObjLstS: Array<clscc_ThemesEN>,
): Array<clscc_ThemesEN> {
  const arrcc_ThemesObjLst = new Array<clscc_ThemesEN>();
  for (const objInFor of arrcc_ThemesObjLstS) {
    const obj1 = cc_Themes_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrcc_ThemesObjLst.push(obj1);
  }
  return arrcc_ThemesObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function cc_Themes_GetObjByJSONStr(strJSON: string): clscc_ThemesEN {
  let pobjcc_ThemesEN = new clscc_ThemesEN();
  if (strJSON === '') {
    return pobjcc_ThemesEN;
  }
  try {
    pobjcc_ThemesEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjcc_ThemesEN;
  }
  return pobjcc_ThemesEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function cc_Themes_GetCombineCondition(objcc_ThemesCond: clscc_ThemesEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_ThemesCond.dicFldComparisonOp,
      clscc_ThemesEN.con_ThemeId,
    ) == true
  ) {
    const strComparisonOpThemeId: string =
      objcc_ThemesCond.dicFldComparisonOp[clscc_ThemesEN.con_ThemeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_ThemesEN.con_ThemeId,
      objcc_ThemesCond.themeId,
      strComparisonOpThemeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_ThemesCond.dicFldComparisonOp,
      clscc_ThemesEN.con_ThemeName,
    ) == true
  ) {
    const strComparisonOpThemeName: string =
      objcc_ThemesCond.dicFldComparisonOp[clscc_ThemesEN.con_ThemeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_ThemesEN.con_ThemeName,
      objcc_ThemesCond.themeName,
      strComparisonOpThemeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_ThemesCond.dicFldComparisonOp,
      clscc_ThemesEN.con_ThemeDesc,
    ) == true
  ) {
    const strComparisonOpThemeDesc: string =
      objcc_ThemesCond.dicFldComparisonOp[clscc_ThemesEN.con_ThemeDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_ThemesEN.con_ThemeDesc,
      objcc_ThemesCond.themeDesc,
      strComparisonOpThemeDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_ThemesCond.dicFldComparisonOp,
      clscc_ThemesEN.con_PageName,
    ) == true
  ) {
    const strComparisonOpPageName: string =
      objcc_ThemesCond.dicFldComparisonOp[clscc_ThemesEN.con_PageName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_ThemesEN.con_PageName,
      objcc_ThemesCond.pageName,
      strComparisonOpPageName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_ThemesCond.dicFldComparisonOp,
      clscc_ThemesEN.con_ExampleImgPath,
    ) == true
  ) {
    const strComparisonOpExampleImgPath: string =
      objcc_ThemesCond.dicFldComparisonOp[clscc_ThemesEN.con_ExampleImgPath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_ThemesEN.con_ExampleImgPath,
      objcc_ThemesCond.exampleImgPath,
      strComparisonOpExampleImgPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_ThemesCond.dicFldComparisonOp,
      clscc_ThemesEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objcc_ThemesCond.dicFldComparisonOp[clscc_ThemesEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clscc_ThemesEN.con_OrderNum,
      objcc_ThemesCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_ThemesCond.dicFldComparisonOp,
      clscc_ThemesEN.con_IsUse,
    ) == true
  ) {
    if (objcc_ThemesCond.isUse == true) {
      strWhereCond += Format(" And {0} = '1'", clscc_ThemesEN.con_IsUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscc_ThemesEN.con_IsUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_ThemesCond.dicFldComparisonOp,
      clscc_ThemesEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objcc_ThemesCond.dicFldComparisonOp[clscc_ThemesEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_ThemesEN.con_UpdDate,
      objcc_ThemesCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_ThemesCond.dicFldComparisonOp,
      clscc_ThemesEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objcc_ThemesCond.dicFldComparisonOp[clscc_ThemesEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_ThemesEN.con_UpdUserId,
      objcc_ThemesCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_ThemesCond.dicFldComparisonOp,
      clscc_ThemesEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objcc_ThemesCond.dicFldComparisonOp[clscc_ThemesEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_ThemesEN.con_Memo,
      objcc_ThemesCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_ThemesENS:源对象
 * @param objcc_ThemesENT:目标对象
 */
export function cc_Themes_CopyObjTo(
  objcc_ThemesENS: clscc_ThemesEN,
  objcc_ThemesENT: clscc_ThemesEN,
): void {
  objcc_ThemesENT.themeId = objcc_ThemesENS.themeId; //主题Id
  objcc_ThemesENT.themeName = objcc_ThemesENS.themeName; //主题名
  objcc_ThemesENT.themeDesc = objcc_ThemesENS.themeDesc; //主题描述
  objcc_ThemesENT.pageName = objcc_ThemesENS.pageName; //页面名称
  objcc_ThemesENT.exampleImgPath = objcc_ThemesENS.exampleImgPath; //示例图路径
  objcc_ThemesENT.orderNum = objcc_ThemesENS.orderNum; //序号
  objcc_ThemesENT.isUse = objcc_ThemesENS.isUse; //是否使用
  objcc_ThemesENT.updDate = objcc_ThemesENS.updDate; //修改日期
  objcc_ThemesENT.updUserId = objcc_ThemesENS.updUserId; //修改用户Id
  objcc_ThemesENT.memo = objcc_ThemesENS.memo; //备注
  objcc_ThemesENT.sfUpdFldSetStr = objcc_ThemesENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_ThemesENS:源对象
 * @param objcc_ThemesENT:目标对象
 */
export function cc_Themes_GetObjFromJsonObj(objcc_ThemesENS: clscc_ThemesEN): clscc_ThemesEN {
  const objcc_ThemesENT: clscc_ThemesEN = new clscc_ThemesEN();
  ObjectAssign(objcc_ThemesENT, objcc_ThemesENS);
  return objcc_ThemesENT;
}
