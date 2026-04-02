/**
 * 类名:clsXzMajorWApi
 * 表名:XzMajor(01120065)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:35
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 专业(XzMajor)
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
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const xzMajor_Controller = 'XzMajorApi';
export const xzMajor_ConstructorName = 'xzMajor';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdXzMajor:关键字
 * @returns 对象
 **/
export async function XzMajor_GetObjByIdXzMajorAsync(
  strIdXzMajor: string,
): Promise<clsXzMajorEN | null> {
  const strThisFuncName = 'GetObjByIdXzMajorAsync';

  if (IsNullOrEmpty(strIdXzMajor) == true) {
    const strMsg = Format('参数:[strIdXzMajor]不能为空!(In clsXzMajorWApi.GetObjByIdXzMajorAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajor.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajor]的长度:[{0}]不正确!(clsXzMajorWApi.GetObjByIdXzMajorAsync)',
      strIdXzMajor.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdXzMajor';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdXzMajor,
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
      const objXzMajor = XzMajor_GetObjFromJsonObj(returnObj);
      return objXzMajor;
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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
 * @param strIdXzMajor:所给的关键字
 * @returns 对象
 */
export async function XzMajor_GetObjByIdXzMajorCache(strIdXzMajor: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByIdXzMajorCache';

  if (IsNullOrEmpty(strIdXzMajor) == true) {
    const strMsg = Format('参数:[strIdXzMajor]不能为空!(In clsXzMajorWApi.GetObjByIdXzMajorCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajor.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajor]的长度:[{0}]不正确!(clsXzMajorWApi.GetObjByIdXzMajorCache)',
      strIdXzMajor.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzMajorObjLstCache = await XzMajor_GetObjLstCache();
  try {
    const arrXzMajorSel = arrXzMajorObjLstCache.filter((x) => x.idXzMajor == strIdXzMajor);
    let objXzMajor: clsXzMajorEN;
    if (arrXzMajorSel.length > 0) {
      objXzMajor = arrXzMajorSel[0];
      return objXzMajor;
    } else {
      if (bolTryAsyncOnce == true) {
        const objXzMajorConst = await XzMajor_GetObjByIdXzMajorAsync(strIdXzMajor);
        if (objXzMajorConst != null) {
          XzMajor_ReFreshThisCache();
          return objXzMajorConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdXzMajor,
      xzMajor_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdXzMajor:所给的关键字
 * @returns 对象
 */
export async function XzMajor_GetObjByIdXzMajorlocalStorage(strIdXzMajor: string) {
  const strThisFuncName = 'GetObjByIdXzMajorlocalStorage';

  if (IsNullOrEmpty(strIdXzMajor) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajor]不能为空!(In clsXzMajorWApi.GetObjByIdXzMajorlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajor.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajor]的长度:[{0}]不正确!(clsXzMajorWApi.GetObjByIdXzMajorlocalStorage)',
      strIdXzMajor.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsXzMajorEN._CurrTabName, strIdXzMajor);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objXzMajorCache: clsXzMajorEN = JSON.parse(strTempObj);
    return objXzMajorCache;
  }
  try {
    const objXzMajor = await XzMajor_GetObjByIdXzMajorAsync(strIdXzMajor);
    if (objXzMajor != null) {
      localStorage.setItem(strKey, JSON.stringify(objXzMajor));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objXzMajor;
    }
    return objXzMajor;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdXzMajor,
      xzMajor_ConstructorName,
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
 * @param objXzMajor:所给的对象
 * @returns 对象
 */
export async function XzMajor_UpdateObjInLstCache(objXzMajor: clsXzMajorEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrXzMajorObjLstCache = await XzMajor_GetObjLstCache();
    const obj = arrXzMajorObjLstCache.find((x) => x.idXzMajor == objXzMajor.idXzMajor);
    if (obj != null) {
      objXzMajor.idXzMajor = obj.idXzMajor;
      ObjectAssign(obj, objXzMajor);
    } else {
      arrXzMajorObjLstCache.push(objXzMajor);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      xzMajor_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdXzMajor:所给的关键字
 * @returns 对象
 */
export async function XzMajor_GetNameByIdXzMajorCache(strIdXzMajor: string) {
  if (IsNullOrEmpty(strIdXzMajor) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajor]不能为空!(In clsXzMajorWApi.GetNameByIdXzMajorCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajor.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajor]的长度:[{0}]不正确!(clsXzMajorWApi.GetNameByIdXzMajorCache)',
      strIdXzMajor.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzMajorObjLstCache = await XzMajor_GetObjLstCache();
  if (arrXzMajorObjLstCache == null) return '';
  try {
    const arrXzMajorSel = arrXzMajorObjLstCache.filter((x) => x.idXzMajor == strIdXzMajor);
    let objXzMajor: clsXzMajorEN;
    if (arrXzMajorSel.length > 0) {
      objXzMajor = arrXzMajorSel[0];
      return objXzMajor.majorName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdXzMajor,
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
export async function XzMajor_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsXzMajorEN.con_IdXzMajor) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsXzMajorEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsXzMajorEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdXzMajor = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objXzMajor = await XzMajor_GetObjByIdXzMajorCache(strIdXzMajor);
  if (objXzMajor == null) return '';
  if (objXzMajor.GetFldValue(strOutFldName) == null) return '';
  return objXzMajor.GetFldValue(strOutFldName).toString();
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
export function XzMajor_SortFunDefa(a: clsXzMajorEN, b: clsXzMajorEN): number {
  return a.idXzMajor.localeCompare(b.idXzMajor);
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
export function XzMajor_SortFunDefa2Fld(a: clsXzMajorEN, b: clsXzMajorEN): number {
  if (a.majorID == b.majorID) return a.majorName.localeCompare(b.majorName);
  else return a.majorID.localeCompare(b.majorID);
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
export function XzMajor_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsXzMajorEN.con_IdXzMajor:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          return a.idXzMajor.localeCompare(b.idXzMajor);
        };
      case clsXzMajorEN.con_MajorID:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          return a.majorID.localeCompare(b.majorID);
        };
      case clsXzMajorEN.con_MajorName:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          return a.majorName.localeCompare(b.majorName);
        };
      case clsXzMajorEN.con_MajorEnglishName:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (a.majorEnglishName == null) return -1;
          if (b.majorEnglishName == null) return 1;
          return a.majorEnglishName.localeCompare(b.majorEnglishName);
        };
      case clsXzMajorEN.con_MajorExplain:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (a.majorExplain == null) return -1;
          if (b.majorExplain == null) return 1;
          return a.majorExplain.localeCompare(b.majorExplain);
        };
      case clsXzMajorEN.con_MajorNationalID:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (a.majorNationalID == null) return -1;
          if (b.majorNationalID == null) return 1;
          return a.majorNationalID.localeCompare(b.majorNationalID);
        };
      case clsXzMajorEN.con_IdXzCollege:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          return a.idXzCollege.localeCompare(b.idXzCollege);
        };
      case clsXzMajorEN.con_IdMajorType:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (a.idMajorType == null) return -1;
          if (b.idMajorType == null) return 1;
          return a.idMajorType.localeCompare(b.idMajorType);
        };
      case clsXzMajorEN.con_IdDegreeType:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (a.idDegreeType == null) return -1;
          if (b.idDegreeType == null) return 1;
          return a.idDegreeType.localeCompare(b.idDegreeType);
        };
      case clsXzMajorEN.con_IsMainMajor:
        return (a: clsXzMajorEN) => {
          if (a.isMainMajor == true) return 1;
          else return -1;
        };
      case clsXzMajorEN.con_MajorDirection:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (a.majorDirection == null) return -1;
          if (b.majorDirection == null) return 1;
          return a.majorDirection.localeCompare(b.majorDirection);
        };
      case clsXzMajorEN.con_IsVisible:
        return (a: clsXzMajorEN) => {
          if (a.isVisible == true) return 1;
          else return -1;
        };
      case clsXzMajorEN.con_IsNormal:
        return (a: clsXzMajorEN) => {
          if (a.isNormal == true) return 1;
          else return -1;
        };
      case clsXzMajorEN.con_ModifyDate:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (a.modifyDate == null) return -1;
          if (b.modifyDate == null) return 1;
          return a.modifyDate.localeCompare(b.modifyDate);
        };
      case clsXzMajorEN.con_ModifyUserId:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (a.modifyUserId == null) return -1;
          if (b.modifyUserId == null) return 1;
          return a.modifyUserId.localeCompare(b.modifyUserId);
        };
      case clsXzMajorEN.con_Memo:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsXzMajorEN.con_IdXzMajorShoolType:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (a.idXzMajorShoolType == null) return -1;
          if (b.idXzMajorShoolType == null) return 1;
          return a.idXzMajorShoolType.localeCompare(b.idXzMajorShoolType);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzMajor]中不存在!(in ${xzMajor_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsXzMajorEN.con_IdXzMajor:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          return b.idXzMajor.localeCompare(a.idXzMajor);
        };
      case clsXzMajorEN.con_MajorID:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          return b.majorID.localeCompare(a.majorID);
        };
      case clsXzMajorEN.con_MajorName:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          return b.majorName.localeCompare(a.majorName);
        };
      case clsXzMajorEN.con_MajorEnglishName:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (b.majorEnglishName == null) return -1;
          if (a.majorEnglishName == null) return 1;
          return b.majorEnglishName.localeCompare(a.majorEnglishName);
        };
      case clsXzMajorEN.con_MajorExplain:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (b.majorExplain == null) return -1;
          if (a.majorExplain == null) return 1;
          return b.majorExplain.localeCompare(a.majorExplain);
        };
      case clsXzMajorEN.con_MajorNationalID:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (b.majorNationalID == null) return -1;
          if (a.majorNationalID == null) return 1;
          return b.majorNationalID.localeCompare(a.majorNationalID);
        };
      case clsXzMajorEN.con_IdXzCollege:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          return b.idXzCollege.localeCompare(a.idXzCollege);
        };
      case clsXzMajorEN.con_IdMajorType:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (b.idMajorType == null) return -1;
          if (a.idMajorType == null) return 1;
          return b.idMajorType.localeCompare(a.idMajorType);
        };
      case clsXzMajorEN.con_IdDegreeType:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (b.idDegreeType == null) return -1;
          if (a.idDegreeType == null) return 1;
          return b.idDegreeType.localeCompare(a.idDegreeType);
        };
      case clsXzMajorEN.con_IsMainMajor:
        return (b: clsXzMajorEN) => {
          if (b.isMainMajor == true) return 1;
          else return -1;
        };
      case clsXzMajorEN.con_MajorDirection:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (b.majorDirection == null) return -1;
          if (a.majorDirection == null) return 1;
          return b.majorDirection.localeCompare(a.majorDirection);
        };
      case clsXzMajorEN.con_IsVisible:
        return (b: clsXzMajorEN) => {
          if (b.isVisible == true) return 1;
          else return -1;
        };
      case clsXzMajorEN.con_IsNormal:
        return (b: clsXzMajorEN) => {
          if (b.isNormal == true) return 1;
          else return -1;
        };
      case clsXzMajorEN.con_ModifyDate:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (b.modifyDate == null) return -1;
          if (a.modifyDate == null) return 1;
          return b.modifyDate.localeCompare(a.modifyDate);
        };
      case clsXzMajorEN.con_ModifyUserId:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (b.modifyUserId == null) return -1;
          if (a.modifyUserId == null) return 1;
          return b.modifyUserId.localeCompare(a.modifyUserId);
        };
      case clsXzMajorEN.con_Memo:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsXzMajorEN.con_IdXzMajorShoolType:
        return (a: clsXzMajorEN, b: clsXzMajorEN) => {
          if (b.idXzMajorShoolType == null) return -1;
          if (a.idXzMajorShoolType == null) return 1;
          return b.idXzMajorShoolType.localeCompare(a.idXzMajorShoolType);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzMajor]中不存在!(in ${xzMajor_ConstructorName}.${strThisFuncName})`;
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
export async function XzMajor_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsXzMajorEN.con_IdXzMajor:
      return (obj: clsXzMajorEN) => {
        return obj.idXzMajor === value;
      };
    case clsXzMajorEN.con_MajorID:
      return (obj: clsXzMajorEN) => {
        return obj.majorID === value;
      };
    case clsXzMajorEN.con_MajorName:
      return (obj: clsXzMajorEN) => {
        return obj.majorName === value;
      };
    case clsXzMajorEN.con_MajorEnglishName:
      return (obj: clsXzMajorEN) => {
        return obj.majorEnglishName === value;
      };
    case clsXzMajorEN.con_MajorExplain:
      return (obj: clsXzMajorEN) => {
        return obj.majorExplain === value;
      };
    case clsXzMajorEN.con_MajorNationalID:
      return (obj: clsXzMajorEN) => {
        return obj.majorNationalID === value;
      };
    case clsXzMajorEN.con_IdXzCollege:
      return (obj: clsXzMajorEN) => {
        return obj.idXzCollege === value;
      };
    case clsXzMajorEN.con_IdMajorType:
      return (obj: clsXzMajorEN) => {
        return obj.idMajorType === value;
      };
    case clsXzMajorEN.con_IdDegreeType:
      return (obj: clsXzMajorEN) => {
        return obj.idDegreeType === value;
      };
    case clsXzMajorEN.con_IsMainMajor:
      return (obj: clsXzMajorEN) => {
        return obj.isMainMajor === value;
      };
    case clsXzMajorEN.con_MajorDirection:
      return (obj: clsXzMajorEN) => {
        return obj.majorDirection === value;
      };
    case clsXzMajorEN.con_IsVisible:
      return (obj: clsXzMajorEN) => {
        return obj.isVisible === value;
      };
    case clsXzMajorEN.con_IsNormal:
      return (obj: clsXzMajorEN) => {
        return obj.isNormal === value;
      };
    case clsXzMajorEN.con_ModifyDate:
      return (obj: clsXzMajorEN) => {
        return obj.modifyDate === value;
      };
    case clsXzMajorEN.con_ModifyUserId:
      return (obj: clsXzMajorEN) => {
        return obj.modifyUserId === value;
      };
    case clsXzMajorEN.con_Memo:
      return (obj: clsXzMajorEN) => {
        return obj.memo === value;
      };
    case clsXzMajorEN.con_IdXzMajorShoolType:
      return (obj: clsXzMajorEN) => {
        return obj.idXzMajorShoolType === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[XzMajor]中不存在!(in ${xzMajor_ConstructorName}.${strThisFuncName})`;
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
export async function XzMajor_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsXzMajorEN.con_IdXzMajor) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrXzMajor = await XzMajor_GetObjLstCache();
  if (arrXzMajor == null) return [];
  let arrXzMajorSel = arrXzMajor;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrXzMajorSel = arrXzMajorSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrXzMajorSel = arrXzMajorSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrXzMajorSel = arrXzMajorSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrXzMajorSel.length == 0) return [];
  return arrXzMajorSel.map((x) => x.idXzMajor);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzMajor_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
export async function XzMajor_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
export async function XzMajor_GetFirstObjAsync(strWhereCond: string): Promise<clsXzMajorEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

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
      const objXzMajor = XzMajor_GetObjFromJsonObj(returnObj);
      return objXzMajor;
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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
export async function XzMajor_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzMajorEN._CurrTabName;
  if (IsNullOrEmpty(clsXzMajorEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzMajorEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrXzMajorExObjLstCache: Array<clsXzMajorEN> = CacheHelper.Get(strKey);
    const arrXzMajorObjLstT = XzMajor_GetObjLstByJSONObjLst(arrXzMajorExObjLstCache);
    return arrXzMajorObjLstT;
  }
  try {
    const arrXzMajorExObjLst = await XzMajor_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrXzMajorExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzMajorExObjLst.length,
    );
    console.log(strInfo);
    return arrXzMajorExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzMajor_ConstructorName,
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
export async function XzMajor_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzMajorEN._CurrTabName;
  if (IsNullOrEmpty(clsXzMajorEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzMajorEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzMajorExObjLstCache: Array<clsXzMajorEN> = JSON.parse(strTempObjLst);
    const arrXzMajorObjLstT = XzMajor_GetObjLstByJSONObjLst(arrXzMajorExObjLstCache);
    return arrXzMajorObjLstT;
  }
  try {
    const arrXzMajorExObjLst = await XzMajor_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrXzMajorExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzMajorExObjLst.length,
    );
    console.log(strInfo);
    return arrXzMajorExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzMajor_ConstructorName,
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
export async function XzMajor_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzMajorEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzMajorObjLstCache: Array<clsXzMajorEN> = JSON.parse(strTempObjLst);
    return arrXzMajorObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function XzMajor_GetObjLstAsync(strWhereCond: string): Promise<Array<clsXzMajorEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

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
          xzMajor_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajor_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
export async function XzMajor_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzMajorEN._CurrTabName;
  if (IsNullOrEmpty(clsXzMajorEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzMajorEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzMajorExObjLstCache: Array<clsXzMajorEN> = JSON.parse(strTempObjLst);
    const arrXzMajorObjLstT = XzMajor_GetObjLstByJSONObjLst(arrXzMajorExObjLstCache);
    return arrXzMajorObjLstT;
  }
  try {
    const arrXzMajorExObjLst = await XzMajor_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrXzMajorExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzMajorExObjLst.length,
    );
    console.log(strInfo);
    return arrXzMajorExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzMajor_ConstructorName,
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
export async function XzMajor_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzMajorEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzMajorObjLstCache: Array<clsXzMajorEN> = JSON.parse(strTempObjLst);
    return arrXzMajorObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzMajor_GetObjLstCache(): Promise<Array<clsXzMajorEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrXzMajorObjLstCache;
  switch (clsXzMajorEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzMajorObjLstCache = await XzMajor_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrXzMajorObjLstCache = await XzMajor_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrXzMajorObjLstCache = await XzMajor_GetObjLstClientCache();
      break;
    default:
      arrXzMajorObjLstCache = await XzMajor_GetObjLstClientCache();
      break;
  }
  return arrXzMajorObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzMajor_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrXzMajorObjLstCache;
  switch (clsXzMajorEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzMajorObjLstCache = await XzMajor_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrXzMajorObjLstCache = await XzMajor_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrXzMajorObjLstCache = null;
      break;
    default:
      arrXzMajorObjLstCache = null;
      break;
  }
  return arrXzMajorObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdXzMajorCond:条件对象
 * @returns 对象列表子集
 */
export async function XzMajor_GetSubObjLstCache(objXzMajorCond: clsXzMajorEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrXzMajorObjLstCache = await XzMajor_GetObjLstCache();
  let arrXzMajorSel = arrXzMajorObjLstCache;
  if (objXzMajorCond.sfFldComparisonOp == null || objXzMajorCond.sfFldComparisonOp == '')
    return arrXzMajorSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzMajorCond.sfFldComparisonOp,
  );
  //console.log("clsXzMajorWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzMajorCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzMajorCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrXzMajorSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzMajorCond),
      xzMajor_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzMajorEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdXzMajor:关键字列表
 * @returns 对象列表
 **/
export async function XzMajor_GetObjLstByIdXzMajorLstAsync(
  arrIdXzMajor: Array<string>,
): Promise<Array<clsXzMajorEN>> {
  const strThisFuncName = 'GetObjLstByIdXzMajorLstAsync';
  const strAction = 'GetObjLstByIdXzMajorLst';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdXzMajor, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          xzMajor_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajor_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
 * @param arrstrIdXzMajorLst:关键字列表
 * @returns 对象列表
 */
export async function XzMajor_GetObjLstByIdXzMajorLstCache(arrIdXzMajorLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByIdXzMajorLstCache';
  try {
    const arrXzMajorObjLstCache = await XzMajor_GetObjLstCache();
    const arrXzMajorSel = arrXzMajorObjLstCache.filter(
      (x) => arrIdXzMajorLst.indexOf(x.idXzMajor) > -1,
    );
    return arrXzMajorSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdXzMajorLst.join(','),
      xzMajor_ConstructorName,
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
export async function XzMajor_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsXzMajorEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

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
          xzMajor_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajor_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
export async function XzMajor_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsXzMajorEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

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
          xzMajor_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajor_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
export async function XzMajor_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzMajorEN>();
  const arrXzMajorObjLstCache = await XzMajor_GetObjLstCache();
  if (arrXzMajorObjLstCache.length == 0) return arrXzMajorObjLstCache;
  let arrXzMajorSel = arrXzMajorObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objXzMajorCond = new clsXzMajorEN();
  ObjectAssign(objXzMajorCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsXzMajorWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzMajorCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrXzMajorSel.length == 0) return arrXzMajorSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzMajorSel = arrXzMajorSel.sort(XzMajor_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzMajorSel = arrXzMajorSel.sort(objPagerPara.sortFun);
    }
    arrXzMajorSel = arrXzMajorSel.slice(intStart, intEnd);
    return arrXzMajorSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzMajor_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzMajorEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function XzMajor_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzMajorEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzMajorEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

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
          xzMajor_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajor_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
 * @param strIdXzMajor:关键字
 * @returns 获取删除的结果
 **/
export async function XzMajor_DelRecordAsync(strIdXzMajor: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(xzMajor_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdXzMajor);

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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
 * @param arrIdXzMajor:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function XzMajor_DelXzMajorsAsync(arrIdXzMajor: Array<string>): Promise<number> {
  const strThisFuncName = 'DelXzMajorsAsync';
  const strAction = 'DelXzMajors';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdXzMajor, config);
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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
export async function XzMajor_DelXzMajorsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelXzMajorsByCondAsync';
  const strAction = 'DelXzMajorsByCond';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
 * @param objXzMajorEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzMajor_AddNewRecordAsync(objXzMajorEN: clsXzMajorEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objXzMajorEN);
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorEN, config);
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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
 * @param objXzMajorEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzMajor_AddNewRecordWithMaxIdAsync(
  objXzMajorEN: clsXzMajorEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorEN, config);
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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
 * @param objXzMajorEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function XzMajor_AddNewRecordWithReturnKeyAsync(
  objXzMajorEN: clsXzMajorEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorEN, config);
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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
 * @param objXzMajorEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function XzMajor_UpdateRecordAsync(objXzMajorEN: clsXzMajorEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objXzMajorEN.sfUpdFldSetStr === undefined ||
    objXzMajorEN.sfUpdFldSetStr === null ||
    objXzMajorEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzMajorEN.idXzMajor,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorEN, config);
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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
 * @param objXzMajorEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzMajor_UpdateWithConditionAsync(
  objXzMajorEN: clsXzMajorEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objXzMajorEN.sfUpdFldSetStr === undefined ||
    objXzMajorEN.sfUpdFldSetStr === null ||
    objXzMajorEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzMajorEN.idXzMajor,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);
  objXzMajorEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorEN, config);
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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
 * @param objstrIdXzMajorCond:条件对象
 * @returns 对象列表子集
 */
export async function XzMajor_IsExistRecordCache(objXzMajorCond: clsXzMajorEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrXzMajorObjLstCache = await XzMajor_GetObjLstCache();
  if (arrXzMajorObjLstCache == null) return false;
  let arrXzMajorSel = arrXzMajorObjLstCache;
  if (objXzMajorCond.sfFldComparisonOp == null || objXzMajorCond.sfFldComparisonOp == '')
    return arrXzMajorSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzMajorCond.sfFldComparisonOp,
  );
  //console.log("clsXzMajorWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzMajorCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzMajorCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrXzMajorSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objXzMajorCond),
      xzMajor_ConstructorName,
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
export async function XzMajor_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
 * @param strIdXzMajor:所给的关键字
 * @returns 对象
 */
export async function XzMajor_IsExistCache(strIdXzMajor: string) {
  const strThisFuncName = 'IsExistCache';
  const arrXzMajorObjLstCache = await XzMajor_GetObjLstCache();
  if (arrXzMajorObjLstCache == null) return false;
  try {
    const arrXzMajorSel = arrXzMajorObjLstCache.filter((x) => x.idXzMajor == strIdXzMajor);
    if (arrXzMajorSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdXzMajor,
      xzMajor_ConstructorName,
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
 * @param strIdXzMajor:关键字
 * @returns 是否存在?存在返回True
 **/
export async function XzMajor_IsExistAsync(strIdXzMajor: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdXzMajor,
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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
export async function XzMajor_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
 * @param objXzMajorCond:条件对象
 * @returns 对象列表记录数
 */
export async function XzMajor_GetRecCountByCondCache(objXzMajorCond: clsXzMajorEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrXzMajorObjLstCache = await XzMajor_GetObjLstCache();
  if (arrXzMajorObjLstCache == null) return 0;
  let arrXzMajorSel = arrXzMajorObjLstCache;
  if (objXzMajorCond.sfFldComparisonOp == null || objXzMajorCond.sfFldComparisonOp == '')
    return arrXzMajorSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzMajorCond.sfFldComparisonOp,
  );
  //console.log("clsXzMajorWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzMajorCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzMajorCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrXzMajorSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzMajorCond),
      xzMajor_ConstructorName,
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
export async function XzMajor_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
export async function XzMajor_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(xzMajor_Controller, strAction);

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
        xzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajor_ConstructorName,
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
export function XzMajor_GetWebApiUrl(strController: string, strAction: string): string {
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
export function XzMajor_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsXzMajorEN._CurrTabName;
  switch (clsXzMajorEN.CacheModeId) {
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
export function XzMajor_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsXzMajorEN._CurrTabName;
    switch (clsXzMajorEN.CacheModeId) {
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

 * @param strIdXzMajorShoolType:
*/
export async function XzMajor_BindDdl_IdXzMajorByIdXzMajorShoolTypeInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strIdXzMajorShoolType: string,
) {
  if (IsNullOrEmpty(strIdXzMajorShoolType) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajorShoolType]不能为空！(In clsXzMajorWApi.BindDdl_IdXzMajorByIdXzMajorShoolTypeInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajorShoolType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajorShoolType]的长度:[{0}]不正确！(clsXzMajorWApi.BindDdl_IdXzMajorByIdXzMajorShoolTypeInDiv)',
      strIdXzMajorShoolType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_IdXzMajorByIdXzMajorShoolTypeInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_IdXzMajorByIdXzMajorShoolTypeInDivCache");
  let arrObjLstSel = await XzMajor_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.idXzMajorShoolType == strIdXzMajorShoolType);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsXzMajorEN.con_IdXzMajor,
    clsXzMajorEN.con_MajorName,
    '专业',
  );
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function XzMajor_BindDdl_IdXzMajorInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_IdXzMajorInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_IdXzMajorInDivCache");
  const arrObjLstSel = await XzMajor_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsXzMajorEN.con_IdXzMajor,
    clsXzMajorEN.con_MajorName,
    '专业',
  );
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdXzCollege:
*/
export async function XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strIdXzCollege: string,
) {
  if (IsNullOrEmpty(strIdXzCollege) == true) {
    const strMsg = Format(
      '参数:[strIdXzCollege]不能为空！(In clsXzMajorWApi.BindDdl_IdXzMajorByIdXzCollegeInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzCollege.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzCollege]的长度:[{0}]不正确！(clsXzMajorWApi.BindDdl_IdXzMajorByIdXzCollegeInDiv)',
      strIdXzCollege.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_IdXzMajorByIdXzCollegeInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_IdXzMajorByIdXzCollegeInDivCache");
  let arrObjLstSel = await XzMajor_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.idXzCollege == strIdXzCollege);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsXzMajorEN.con_IdXzMajor,
    clsXzMajorEN.con_MajorName,
    '专业',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzMajor_CheckPropertyNew(pobjXzMajorEN: clsXzMajorEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjXzMajorEN.majorID) === true) {
    throw new Error(
      '(errid:Watl000411)字段[专业ID]不能为空(In 专业)!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjXzMajorEN.majorName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[专业名称]不能为空(In 专业)!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idXzCollege) === true ||
    pobjXzMajorEN.idXzCollege.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[学院流水号]不能为空(In 专业)!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjXzMajorEN.isVisible ||
    (pobjXzMajorEN.isVisible != null && pobjXzMajorEN.isVisible.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否显示]不能为空(In 专业)!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjXzMajorEN.idXzMajor) == false && GetStrLen(pobjXzMajorEN.idXzMajor) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[专业流水号(idXzMajor)]的长度不能超过8(In 专业(XzMajor))!值:$(pobjXzMajorEN.idXzMajor)(clsXzMajorBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjXzMajorEN.majorID) == false && GetStrLen(pobjXzMajorEN.majorID) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[专业ID(majorID)]的长度不能超过4(In 专业(XzMajor))!值:$(pobjXzMajorEN.majorID)(clsXzMajorBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjXzMajorEN.majorName) == false && GetStrLen(pobjXzMajorEN.majorName) > 100) {
    throw new Error(
      '(errid:Watl000413)字段[专业名称(majorName)]的长度不能超过100(In 专业(XzMajor))!值:$(pobjXzMajorEN.majorName)(clsXzMajorBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorEnglishName) == false &&
    GetStrLen(pobjXzMajorEN.majorEnglishName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[专业英文名称(majorEnglishName)]的长度不能超过200(In 专业(XzMajor))!值:$(pobjXzMajorEN.majorEnglishName)(clsXzMajorBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorExplain) == false &&
    GetStrLen(pobjXzMajorEN.majorExplain) > 2000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[专业说明(majorExplain)]的长度不能超过2000(In 专业(XzMajor))!值:$(pobjXzMajorEN.majorExplain)(clsXzMajorBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorNationalID) == false &&
    GetStrLen(pobjXzMajorEN.majorNationalID) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[专业国家代码(majorNationalID)]的长度不能超过10(In 专业(XzMajor))!值:$(pobjXzMajorEN.majorNationalID)(clsXzMajorBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idXzCollege) == false &&
    GetStrLen(pobjXzMajorEN.idXzCollege) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学院流水号(idXzCollege)]的长度不能超过4(In 专业(XzMajor))!值:$(pobjXzMajorEN.idXzCollege)(clsXzMajorBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idMajorType) == false &&
    GetStrLen(pobjXzMajorEN.idMajorType) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[专业类型(文理工)流水号(idMajorType)]的长度不能超过4(In 专业(XzMajor))!值:$(pobjXzMajorEN.idMajorType)(clsXzMajorBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idDegreeType) == false &&
    GetStrLen(pobjXzMajorEN.idDegreeType) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学位类型流水号(idDegreeType)]的长度不能超过4(In 专业(XzMajor))!值:$(pobjXzMajorEN.idDegreeType)(clsXzMajorBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorDirection) == false &&
    GetStrLen(pobjXzMajorEN.majorDirection) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[专业方向(majorDirection)]的长度不能超过30(In 专业(XzMajor))!值:$(pobjXzMajorEN.majorDirection)(clsXzMajorBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.modifyDate) == false &&
    GetStrLen(pobjXzMajorEN.modifyDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 专业(XzMajor))!值:$(pobjXzMajorEN.modifyDate)(clsXzMajorBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.modifyUserId) == false &&
    GetStrLen(pobjXzMajorEN.modifyUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 专业(XzMajor))!值:$(pobjXzMajorEN.modifyUserId)(clsXzMajorBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjXzMajorEN.memo) == false && GetStrLen(pobjXzMajorEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 专业(XzMajor))!值:$(pobjXzMajorEN.memo)(clsXzMajorBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idXzMajorShoolType) == false &&
    GetStrLen(pobjXzMajorEN.idXzMajorShoolType) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[专业学校类型流水号(idXzMajorShoolType)]的长度不能超过4(In 专业(XzMajor))!值:$(pobjXzMajorEN.idXzMajorShoolType)(clsXzMajorBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzMajorEN.idXzMajor) == false &&
    undefined !== pobjXzMajorEN.idXzMajor &&
    tzDataType.isString(pobjXzMajorEN.idXzMajor) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[专业流水号(idXzMajor)]的值:[$(pobjXzMajorEN.idXzMajor)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorID) == false &&
    undefined !== pobjXzMajorEN.majorID &&
    tzDataType.isString(pobjXzMajorEN.majorID) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[专业ID(majorID)]的值:[$(pobjXzMajorEN.majorID)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorName) == false &&
    undefined !== pobjXzMajorEN.majorName &&
    tzDataType.isString(pobjXzMajorEN.majorName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[专业名称(majorName)]的值:[$(pobjXzMajorEN.majorName)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorEnglishName) == false &&
    undefined !== pobjXzMajorEN.majorEnglishName &&
    tzDataType.isString(pobjXzMajorEN.majorEnglishName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[专业英文名称(majorEnglishName)]的值:[$(pobjXzMajorEN.majorEnglishName)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorExplain) == false &&
    undefined !== pobjXzMajorEN.majorExplain &&
    tzDataType.isString(pobjXzMajorEN.majorExplain) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[专业说明(majorExplain)]的值:[$(pobjXzMajorEN.majorExplain)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorNationalID) == false &&
    undefined !== pobjXzMajorEN.majorNationalID &&
    tzDataType.isString(pobjXzMajorEN.majorNationalID) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[专业国家代码(majorNationalID)]的值:[$(pobjXzMajorEN.majorNationalID)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idXzCollege) == false &&
    undefined !== pobjXzMajorEN.idXzCollege &&
    tzDataType.isString(pobjXzMajorEN.idXzCollege) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学院流水号(idXzCollege)]的值:[$(pobjXzMajorEN.idXzCollege)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idMajorType) == false &&
    undefined !== pobjXzMajorEN.idMajorType &&
    tzDataType.isString(pobjXzMajorEN.idMajorType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[专业类型(文理工)流水号(idMajorType)]的值:[$(pobjXzMajorEN.idMajorType)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idDegreeType) == false &&
    undefined !== pobjXzMajorEN.idDegreeType &&
    tzDataType.isString(pobjXzMajorEN.idDegreeType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学位类型流水号(idDegreeType)]的值:[$(pobjXzMajorEN.idDegreeType)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjXzMajorEN.isMainMajor &&
    undefined !== pobjXzMajorEN.isMainMajor &&
    tzDataType.isBoolean(pobjXzMajorEN.isMainMajor) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否重要专业(isMainMajor)]的值:[$(pobjXzMajorEN.isMainMajor)], 非法,应该为布尔型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorDirection) == false &&
    undefined !== pobjXzMajorEN.majorDirection &&
    tzDataType.isString(pobjXzMajorEN.majorDirection) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[专业方向(majorDirection)]的值:[$(pobjXzMajorEN.majorDirection)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjXzMajorEN.isVisible &&
    undefined !== pobjXzMajorEN.isVisible &&
    tzDataType.isBoolean(pobjXzMajorEN.isVisible) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否显示(isVisible)]的值:[$(pobjXzMajorEN.isVisible)], 非法,应该为布尔型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjXzMajorEN.isNormal &&
    undefined !== pobjXzMajorEN.isNormal &&
    tzDataType.isBoolean(pobjXzMajorEN.isNormal) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[IsNormal(isNormal)]的值:[$(pobjXzMajorEN.isNormal)], 非法,应该为布尔型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.modifyDate) == false &&
    undefined !== pobjXzMajorEN.modifyDate &&
    tzDataType.isString(pobjXzMajorEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjXzMajorEN.modifyDate)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.modifyUserId) == false &&
    undefined !== pobjXzMajorEN.modifyUserId &&
    tzDataType.isString(pobjXzMajorEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjXzMajorEN.modifyUserId)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.memo) == false &&
    undefined !== pobjXzMajorEN.memo &&
    tzDataType.isString(pobjXzMajorEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjXzMajorEN.memo)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idXzMajorShoolType) == false &&
    undefined !== pobjXzMajorEN.idXzMajorShoolType &&
    tzDataType.isString(pobjXzMajorEN.idXzMajorShoolType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[专业学校类型流水号(idXzMajorShoolType)]的值:[$(pobjXzMajorEN.idXzMajorShoolType)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjXzMajorEN.idXzCollege) == false &&
    pobjXzMajorEN.idXzCollege != '[nuull]' &&
    GetStrLen(pobjXzMajorEN.idXzCollege) != 4
  ) {
    throw '(errid:Watl000415)字段[学院流水号]作为外键字段,长度应该为4(In 专业)!(clsXzMajorBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idMajorType) == false &&
    pobjXzMajorEN.idMajorType != '[nuull]' &&
    GetStrLen(pobjXzMajorEN.idMajorType) != 4
  ) {
    throw '(errid:Watl000415)字段[专业类型(文理工)流水号]作为外键字段,长度应该为4(In 专业)!(clsXzMajorBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idDegreeType) == false &&
    pobjXzMajorEN.idDegreeType != '[nuull]' &&
    GetStrLen(pobjXzMajorEN.idDegreeType) != 4
  ) {
    throw '(errid:Watl000415)字段[学位类型流水号]作为外键字段,长度应该为4(In 专业)!(clsXzMajorBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzMajor_CheckProperty4Update(pobjXzMajorEN: clsXzMajorEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjXzMajorEN.idXzMajor) == false && GetStrLen(pobjXzMajorEN.idXzMajor) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[专业流水号(idXzMajor)]的长度不能超过8(In 专业(XzMajor))!值:$(pobjXzMajorEN.idXzMajor)(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjXzMajorEN.majorID) == false && GetStrLen(pobjXzMajorEN.majorID) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[专业ID(majorID)]的长度不能超过4(In 专业(XzMajor))!值:$(pobjXzMajorEN.majorID)(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjXzMajorEN.majorName) == false && GetStrLen(pobjXzMajorEN.majorName) > 100) {
    throw new Error(
      '(errid:Watl000416)字段[专业名称(majorName)]的长度不能超过100(In 专业(XzMajor))!值:$(pobjXzMajorEN.majorName)(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorEnglishName) == false &&
    GetStrLen(pobjXzMajorEN.majorEnglishName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[专业英文名称(majorEnglishName)]的长度不能超过200(In 专业(XzMajor))!值:$(pobjXzMajorEN.majorEnglishName)(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorExplain) == false &&
    GetStrLen(pobjXzMajorEN.majorExplain) > 2000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[专业说明(majorExplain)]的长度不能超过2000(In 专业(XzMajor))!值:$(pobjXzMajorEN.majorExplain)(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorNationalID) == false &&
    GetStrLen(pobjXzMajorEN.majorNationalID) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[专业国家代码(majorNationalID)]的长度不能超过10(In 专业(XzMajor))!值:$(pobjXzMajorEN.majorNationalID)(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idXzCollege) == false &&
    GetStrLen(pobjXzMajorEN.idXzCollege) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学院流水号(idXzCollege)]的长度不能超过4(In 专业(XzMajor))!值:$(pobjXzMajorEN.idXzCollege)(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idMajorType) == false &&
    GetStrLen(pobjXzMajorEN.idMajorType) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[专业类型(文理工)流水号(idMajorType)]的长度不能超过4(In 专业(XzMajor))!值:$(pobjXzMajorEN.idMajorType)(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idDegreeType) == false &&
    GetStrLen(pobjXzMajorEN.idDegreeType) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学位类型流水号(idDegreeType)]的长度不能超过4(In 专业(XzMajor))!值:$(pobjXzMajorEN.idDegreeType)(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorDirection) == false &&
    GetStrLen(pobjXzMajorEN.majorDirection) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[专业方向(majorDirection)]的长度不能超过30(In 专业(XzMajor))!值:$(pobjXzMajorEN.majorDirection)(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.modifyDate) == false &&
    GetStrLen(pobjXzMajorEN.modifyDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 专业(XzMajor))!值:$(pobjXzMajorEN.modifyDate)(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.modifyUserId) == false &&
    GetStrLen(pobjXzMajorEN.modifyUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 专业(XzMajor))!值:$(pobjXzMajorEN.modifyUserId)(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjXzMajorEN.memo) == false && GetStrLen(pobjXzMajorEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 专业(XzMajor))!值:$(pobjXzMajorEN.memo)(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idXzMajorShoolType) == false &&
    GetStrLen(pobjXzMajorEN.idXzMajorShoolType) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[专业学校类型流水号(idXzMajorShoolType)]的长度不能超过4(In 专业(XzMajor))!值:$(pobjXzMajorEN.idXzMajorShoolType)(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzMajorEN.idXzMajor) == false &&
    undefined !== pobjXzMajorEN.idXzMajor &&
    tzDataType.isString(pobjXzMajorEN.idXzMajor) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[专业流水号(idXzMajor)]的值:[$(pobjXzMajorEN.idXzMajor)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorID) == false &&
    undefined !== pobjXzMajorEN.majorID &&
    tzDataType.isString(pobjXzMajorEN.majorID) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[专业ID(majorID)]的值:[$(pobjXzMajorEN.majorID)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorName) == false &&
    undefined !== pobjXzMajorEN.majorName &&
    tzDataType.isString(pobjXzMajorEN.majorName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[专业名称(majorName)]的值:[$(pobjXzMajorEN.majorName)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorEnglishName) == false &&
    undefined !== pobjXzMajorEN.majorEnglishName &&
    tzDataType.isString(pobjXzMajorEN.majorEnglishName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[专业英文名称(majorEnglishName)]的值:[$(pobjXzMajorEN.majorEnglishName)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorExplain) == false &&
    undefined !== pobjXzMajorEN.majorExplain &&
    tzDataType.isString(pobjXzMajorEN.majorExplain) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[专业说明(majorExplain)]的值:[$(pobjXzMajorEN.majorExplain)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorNationalID) == false &&
    undefined !== pobjXzMajorEN.majorNationalID &&
    tzDataType.isString(pobjXzMajorEN.majorNationalID) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[专业国家代码(majorNationalID)]的值:[$(pobjXzMajorEN.majorNationalID)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idXzCollege) == false &&
    undefined !== pobjXzMajorEN.idXzCollege &&
    tzDataType.isString(pobjXzMajorEN.idXzCollege) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学院流水号(idXzCollege)]的值:[$(pobjXzMajorEN.idXzCollege)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idMajorType) == false &&
    undefined !== pobjXzMajorEN.idMajorType &&
    tzDataType.isString(pobjXzMajorEN.idMajorType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[专业类型(文理工)流水号(idMajorType)]的值:[$(pobjXzMajorEN.idMajorType)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idDegreeType) == false &&
    undefined !== pobjXzMajorEN.idDegreeType &&
    tzDataType.isString(pobjXzMajorEN.idDegreeType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学位类型流水号(idDegreeType)]的值:[$(pobjXzMajorEN.idDegreeType)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjXzMajorEN.isMainMajor &&
    undefined !== pobjXzMajorEN.isMainMajor &&
    tzDataType.isBoolean(pobjXzMajorEN.isMainMajor) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否重要专业(isMainMajor)]的值:[$(pobjXzMajorEN.isMainMajor)], 非法,应该为布尔型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.majorDirection) == false &&
    undefined !== pobjXzMajorEN.majorDirection &&
    tzDataType.isString(pobjXzMajorEN.majorDirection) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[专业方向(majorDirection)]的值:[$(pobjXzMajorEN.majorDirection)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjXzMajorEN.isVisible &&
    undefined !== pobjXzMajorEN.isVisible &&
    tzDataType.isBoolean(pobjXzMajorEN.isVisible) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否显示(isVisible)]的值:[$(pobjXzMajorEN.isVisible)], 非法,应该为布尔型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjXzMajorEN.isNormal &&
    undefined !== pobjXzMajorEN.isNormal &&
    tzDataType.isBoolean(pobjXzMajorEN.isNormal) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[IsNormal(isNormal)]的值:[$(pobjXzMajorEN.isNormal)], 非法,应该为布尔型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.modifyDate) == false &&
    undefined !== pobjXzMajorEN.modifyDate &&
    tzDataType.isString(pobjXzMajorEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjXzMajorEN.modifyDate)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.modifyUserId) == false &&
    undefined !== pobjXzMajorEN.modifyUserId &&
    tzDataType.isString(pobjXzMajorEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjXzMajorEN.modifyUserId)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.memo) == false &&
    undefined !== pobjXzMajorEN.memo &&
    tzDataType.isString(pobjXzMajorEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjXzMajorEN.memo)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idXzMajorShoolType) == false &&
    undefined !== pobjXzMajorEN.idXzMajorShoolType &&
    tzDataType.isString(pobjXzMajorEN.idXzMajorShoolType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[专业学校类型流水号(idXzMajorShoolType)]的值:[$(pobjXzMajorEN.idXzMajorShoolType)], 非法,应该为字符型(In 专业(XzMajor))!(clsXzMajorBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjXzMajorEN.idXzCollege) == false &&
    pobjXzMajorEN.idXzCollege != '[nuull]' &&
    GetStrLen(pobjXzMajorEN.idXzCollege) != 4
  ) {
    throw '(errid:Watl000418)字段[学院流水号]作为外键字段,长度应该为4(In 专业)!(clsXzMajorBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idMajorType) == false &&
    pobjXzMajorEN.idMajorType != '[nuull]' &&
    GetStrLen(pobjXzMajorEN.idMajorType) != 4
  ) {
    throw '(errid:Watl000418)字段[专业类型(文理工)流水号]作为外键字段,长度应该为4(In 专业)!(clsXzMajorBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjXzMajorEN.idDegreeType) == false &&
    pobjXzMajorEN.idDegreeType != '[nuull]' &&
    GetStrLen(pobjXzMajorEN.idDegreeType) != 4
  ) {
    throw '(errid:Watl000418)字段[学位类型流水号]作为外键字段,长度应该为4(In 专业)!(clsXzMajorBL:CheckPropertyNew)';
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
export function XzMajor_GetJSONStrByObj(pobjXzMajorEN: clsXzMajorEN): string {
  pobjXzMajorEN.sfUpdFldSetStr = pobjXzMajorEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjXzMajorEN);
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
export function XzMajor_GetObjLstByJSONStr(strJSON: string): Array<clsXzMajorEN> {
  let arrXzMajorObjLst = new Array<clsXzMajorEN>();
  if (strJSON === '') {
    return arrXzMajorObjLst;
  }
  try {
    arrXzMajorObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrXzMajorObjLst;
  }
  return arrXzMajorObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrXzMajorObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function XzMajor_GetObjLstByJSONObjLst(
  arrXzMajorObjLstS: Array<clsXzMajorEN>,
): Array<clsXzMajorEN> {
  const arrXzMajorObjLst = new Array<clsXzMajorEN>();
  for (const objInFor of arrXzMajorObjLstS) {
    const obj1 = XzMajor_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrXzMajorObjLst.push(obj1);
  }
  return arrXzMajorObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function XzMajor_GetObjByJSONStr(strJSON: string): clsXzMajorEN {
  let pobjXzMajorEN = new clsXzMajorEN();
  if (strJSON === '') {
    return pobjXzMajorEN;
  }
  try {
    pobjXzMajorEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjXzMajorEN;
  }
  return pobjXzMajorEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function XzMajor_GetCombineCondition(objXzMajorCond: clsXzMajorEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_IdXzMajor,
    ) == true
  ) {
    const strComparisonOpIdXzMajor: string =
      objXzMajorCond.dicFldComparisonOp[clsXzMajorEN.con_IdXzMajor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorEN.con_IdXzMajor,
      objXzMajorCond.idXzMajor,
      strComparisonOpIdXzMajor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_MajorID,
    ) == true
  ) {
    const strComparisonOpMajorID: string =
      objXzMajorCond.dicFldComparisonOp[clsXzMajorEN.con_MajorID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorEN.con_MajorID,
      objXzMajorCond.majorID,
      strComparisonOpMajorID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_MajorName,
    ) == true
  ) {
    const strComparisonOpMajorName: string =
      objXzMajorCond.dicFldComparisonOp[clsXzMajorEN.con_MajorName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorEN.con_MajorName,
      objXzMajorCond.majorName,
      strComparisonOpMajorName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_MajorEnglishName,
    ) == true
  ) {
    const strComparisonOpMajorEnglishName: string =
      objXzMajorCond.dicFldComparisonOp[clsXzMajorEN.con_MajorEnglishName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorEN.con_MajorEnglishName,
      objXzMajorCond.majorEnglishName,
      strComparisonOpMajorEnglishName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_MajorExplain,
    ) == true
  ) {
    const strComparisonOpMajorExplain: string =
      objXzMajorCond.dicFldComparisonOp[clsXzMajorEN.con_MajorExplain];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorEN.con_MajorExplain,
      objXzMajorCond.majorExplain,
      strComparisonOpMajorExplain,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_MajorNationalID,
    ) == true
  ) {
    const strComparisonOpMajorNationalID: string =
      objXzMajorCond.dicFldComparisonOp[clsXzMajorEN.con_MajorNationalID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorEN.con_MajorNationalID,
      objXzMajorCond.majorNationalID,
      strComparisonOpMajorNationalID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_IdXzCollege,
    ) == true
  ) {
    const strComparisonOpIdXzCollege: string =
      objXzMajorCond.dicFldComparisonOp[clsXzMajorEN.con_IdXzCollege];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorEN.con_IdXzCollege,
      objXzMajorCond.idXzCollege,
      strComparisonOpIdXzCollege,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_IdMajorType,
    ) == true
  ) {
    const strComparisonOpIdMajorType: string =
      objXzMajorCond.dicFldComparisonOp[clsXzMajorEN.con_IdMajorType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorEN.con_IdMajorType,
      objXzMajorCond.idMajorType,
      strComparisonOpIdMajorType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_IdDegreeType,
    ) == true
  ) {
    const strComparisonOpIdDegreeType: string =
      objXzMajorCond.dicFldComparisonOp[clsXzMajorEN.con_IdDegreeType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorEN.con_IdDegreeType,
      objXzMajorCond.idDegreeType,
      strComparisonOpIdDegreeType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_IsMainMajor,
    ) == true
  ) {
    if (objXzMajorCond.isMainMajor == true) {
      strWhereCond += Format(" And {0} = '1'", clsXzMajorEN.con_IsMainMajor);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsXzMajorEN.con_IsMainMajor);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_MajorDirection,
    ) == true
  ) {
    const strComparisonOpMajorDirection: string =
      objXzMajorCond.dicFldComparisonOp[clsXzMajorEN.con_MajorDirection];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorEN.con_MajorDirection,
      objXzMajorCond.majorDirection,
      strComparisonOpMajorDirection,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_IsVisible,
    ) == true
  ) {
    if (objXzMajorCond.isVisible == true) {
      strWhereCond += Format(" And {0} = '1'", clsXzMajorEN.con_IsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsXzMajorEN.con_IsVisible);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_IsNormal,
    ) == true
  ) {
    if (objXzMajorCond.isNormal == true) {
      strWhereCond += Format(" And {0} = '1'", clsXzMajorEN.con_IsNormal);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsXzMajorEN.con_IsNormal);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_ModifyDate,
    ) == true
  ) {
    const strComparisonOpModifyDate: string =
      objXzMajorCond.dicFldComparisonOp[clsXzMajorEN.con_ModifyDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorEN.con_ModifyDate,
      objXzMajorCond.modifyDate,
      strComparisonOpModifyDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_ModifyUserId,
    ) == true
  ) {
    const strComparisonOpModifyUserId: string =
      objXzMajorCond.dicFldComparisonOp[clsXzMajorEN.con_ModifyUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorEN.con_ModifyUserId,
      objXzMajorCond.modifyUserId,
      strComparisonOpModifyUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objXzMajorCond.dicFldComparisonOp[clsXzMajorEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorEN.con_Memo,
      objXzMajorCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorCond.dicFldComparisonOp,
      clsXzMajorEN.con_IdXzMajorShoolType,
    ) == true
  ) {
    const strComparisonOpIdXzMajorShoolType: string =
      objXzMajorCond.dicFldComparisonOp[clsXzMajorEN.con_IdXzMajorShoolType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorEN.con_IdXzMajorShoolType,
      objXzMajorCond.idXzMajorShoolType,
      strComparisonOpIdXzMajorShoolType,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--XzMajor(专业),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIdXzMajor: 专业流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function XzMajor_GetUniCondStr(objXzMajorEN: clsXzMajorEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and IdXzMajor = '{0}'", objXzMajorEN.idXzMajor);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--XzMajor(专业),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIdXzMajor: 专业流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function XzMajor_GetUniCondStr4Update(objXzMajorEN: clsXzMajorEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and IdXzMajor <> '{0}'", objXzMajorEN.idXzMajor);
  strWhereCond += Format(" and IdXzMajor = '{0}'", objXzMajorEN.idXzMajor);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objXzMajorENS:源对象
 * @param objXzMajorENT:目标对象
 */
export function XzMajor_CopyObjTo(objXzMajorENS: clsXzMajorEN, objXzMajorENT: clsXzMajorEN): void {
  objXzMajorENT.idXzMajor = objXzMajorENS.idXzMajor; //专业流水号
  objXzMajorENT.majorID = objXzMajorENS.majorID; //专业ID
  objXzMajorENT.majorName = objXzMajorENS.majorName; //专业名称
  objXzMajorENT.majorEnglishName = objXzMajorENS.majorEnglishName; //专业英文名称
  objXzMajorENT.majorExplain = objXzMajorENS.majorExplain; //专业说明
  objXzMajorENT.majorNationalID = objXzMajorENS.majorNationalID; //专业国家代码
  objXzMajorENT.idXzCollege = objXzMajorENS.idXzCollege; //学院流水号
  objXzMajorENT.idMajorType = objXzMajorENS.idMajorType; //专业类型(文理工)流水号
  objXzMajorENT.idDegreeType = objXzMajorENS.idDegreeType; //学位类型流水号
  objXzMajorENT.isMainMajor = objXzMajorENS.isMainMajor; //是否重要专业
  objXzMajorENT.majorDirection = objXzMajorENS.majorDirection; //专业方向
  objXzMajorENT.isVisible = objXzMajorENS.isVisible; //是否显示
  objXzMajorENT.isNormal = objXzMajorENS.isNormal; //IsNormal
  objXzMajorENT.modifyDate = objXzMajorENS.modifyDate; //修改日期
  objXzMajorENT.modifyUserId = objXzMajorENS.modifyUserId; //修改人
  objXzMajorENT.memo = objXzMajorENS.memo; //备注
  objXzMajorENT.idXzMajorShoolType = objXzMajorENS.idXzMajorShoolType; //专业学校类型流水号
  objXzMajorENT.sfUpdFldSetStr = objXzMajorENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objXzMajorENS:源对象
 * @param objXzMajorENT:目标对象
 */
export function XzMajor_GetObjFromJsonObj(objXzMajorENS: clsXzMajorEN): clsXzMajorEN {
  const objXzMajorENT: clsXzMajorEN = new clsXzMajorEN();
  ObjectAssign(objXzMajorENT, objXzMajorENS);
  return objXzMajorENT;
}
