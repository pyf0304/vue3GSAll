/**
 * 类名:clsXzClgWApi
 * 表名:XzClg(00140122)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/20 15:49:52
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * XzClg(XzClg)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年03月20日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { clsSysPara4WebApi, GetWebApiUrl_GP } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const xzClg_Controller = 'XzClgApi';
export const xzClg_ConstructorName = 'xzClg';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdXzCollege:关键字
 * @returns 对象
 **/
export async function XzClg_GetObjByIdXzCollegeAsync(
  strIdXzCollege: string,
): Promise<clsXzClgEN | null> {
  const strThisFuncName = 'GetObjByIdXzCollegeAsync';

  if (IsNullOrEmpty(strIdXzCollege) == true) {
    const strMsg = Format(
      '参数:[strIdXzCollege]不能为空!(In clsXzClgWApi.GetObjByIdXzCollegeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzCollege.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzCollege]的长度:[{0}]不正确!(clsXzClgWApi.GetObjByIdXzCollegeAsync)',
      strIdXzCollege.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdXzCollege';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdXzCollege,
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
      const objXzClg = XzClg_GetObjFromJsonObj(returnObj);
      return objXzClg;
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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
 * @param strIdXzCollege:所给的关键字
 * @returns 对象
 */
export async function XzClg_GetObjByIdXzCollegeCache(
  strIdXzCollege: string,
  strIdSchool: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByIdXzCollegeCache';

  if (IsNullOrEmpty(strIdXzCollege) == true) {
    const strMsg = Format(
      '参数:[strIdXzCollege]不能为空!(In clsXzClgWApi.GetObjByIdXzCollegeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzCollege.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzCollege]的长度:[{0}]不正确!(clsXzClgWApi.GetObjByIdXzCollegeCache)',
      strIdXzCollege.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzClgObjLstCache = await XzClg_GetObjLstCache(strIdSchool);
  try {
    const arrXzClgSel = arrXzClgObjLstCache.filter((x) => x.idXzCollege == strIdXzCollege);
    let objXzClg: clsXzClgEN;
    if (arrXzClgSel.length > 0) {
      objXzClg = arrXzClgSel[0];
      return objXzClg;
    } else {
      if (bolTryAsyncOnce == true) {
        const objXzClgConst = await XzClg_GetObjByIdXzCollegeAsync(strIdXzCollege);
        if (objXzClgConst != null) {
          XzClg_ReFreshThisCache(strIdSchool);
          return objXzClgConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdXzCollege,
      xzClg_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdXzCollege:所给的关键字
 * @returns 对象
 */
export async function XzClg_GetObjByIdXzCollegelocalStorage(strIdXzCollege: string) {
  const strThisFuncName = 'GetObjByIdXzCollegelocalStorage';

  if (IsNullOrEmpty(strIdXzCollege) == true) {
    const strMsg = Format(
      '参数:[strIdXzCollege]不能为空!(In clsXzClgWApi.GetObjByIdXzCollegelocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzCollege.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzCollege]的长度:[{0}]不正确!(clsXzClgWApi.GetObjByIdXzCollegelocalStorage)',
      strIdXzCollege.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsXzClgEN._CurrTabName, strIdXzCollege);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objXzClgCache: clsXzClgEN = JSON.parse(strTempObj);
    return objXzClgCache;
  }
  try {
    const objXzClg = await XzClg_GetObjByIdXzCollegeAsync(strIdXzCollege);
    if (objXzClg != null) {
      localStorage.setItem(strKey, JSON.stringify(objXzClg));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objXzClg;
    }
    return objXzClg;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdXzCollege,
      xzClg_ConstructorName,
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
 * @param objXzClg:所给的对象
 * @returns 对象
 */
export async function XzClg_UpdateObjInLstCache(objXzClg: clsXzClgEN, strIdSchool: string) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrXzClgObjLstCache = await XzClg_GetObjLstCache(strIdSchool);
    const obj = arrXzClgObjLstCache.find((x) => x.idXzCollege == objXzClg.idXzCollege);
    if (obj != null) {
      objXzClg.idXzCollege = obj.idXzCollege;
      ObjectAssign(obj, objXzClg);
    } else {
      arrXzClgObjLstCache.push(objXzClg);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      xzClg_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdXzCollege:所给的关键字
 * @returns 对象
 */
export async function XzClg_GetNameByIdXzCollegeCache(strIdXzCollege: string, strIdSchool: string) {
  if (IsNullOrEmpty(strIdXzCollege) == true) {
    const strMsg = Format(
      '参数:[strIdXzCollege]不能为空!(In clsXzClgWApi.GetNameByIdXzCollegeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzCollege.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzCollege]的长度:[{0}]不正确!(clsXzClgWApi.GetNameByIdXzCollegeCache)',
      strIdXzCollege.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzClgObjLstCache = await XzClg_GetObjLstCache(strIdSchool);
  if (arrXzClgObjLstCache == null) return '';
  try {
    const arrXzClgSel = arrXzClgObjLstCache.filter((x) => x.idXzCollege == strIdXzCollege);
    let objXzClg: clsXzClgEN;
    if (arrXzClgSel.length > 0) {
      objXzClg = arrXzClgSel[0];
      return objXzClg.collegeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdXzCollege,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strIdSchool:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function XzClg_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdSchoolClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdSchoolClassfy) == true) {
    const strMsg = Format('参数:[strIdSchoolClassfy]不能为空!(In clsXzClgWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSchoolClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSchoolClassfy]的长度:[{0}]不正确!(clsXzClgWApi.func)',
      strIdSchoolClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsXzClgEN.con_IdXzCollege) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsXzClgEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsXzClgEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdXzCollege = strInValue;
  if (IsNullOrEmpty(strIdXzCollege) == true) {
    return '';
  }
  const objXzClg = await XzClg_GetObjByIdXzCollegeCache(strIdXzCollege, strIdSchoolClassfy);
  if (objXzClg == null) return '';
  if (objXzClg.GetFldValue(strOutFldName) == null) return '';
  return objXzClg.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function XzClg_SortFunDefa(a: clsXzClgEN, b: clsXzClgEN): number {
  return a.idXzCollege.localeCompare(b.idXzCollege);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function XzClg_SortFunDefa2Fld(a: clsXzClgEN, b: clsXzClgEN): number {
  if (a.collegeId == b.collegeId) return a.collegeName.localeCompare(b.collegeName);
  else return a.collegeId.localeCompare(b.collegeId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function XzClg_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsXzClgEN.con_IdXzCollege:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          return a.idXzCollege.localeCompare(b.idXzCollege);
        };
      case clsXzClgEN.con_CollegeId:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          return a.collegeId.localeCompare(b.collegeId);
        };
      case clsXzClgEN.con_CollegeName:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsXzClgEN.con_CollegeNameA:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          return a.collegeNameA.localeCompare(b.collegeNameA);
        };
      case clsXzClgEN.con_ClgEnglishName:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (a.clgEnglishName == null) return -1;
          if (b.clgEnglishName == null) return 1;
          return a.clgEnglishName.localeCompare(b.clgEnglishName);
        };
      case clsXzClgEN.con_UserType:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (a.userType == null) return -1;
          if (b.userType == null) return 1;
          return a.userType.localeCompare(b.userType);
        };
      case clsXzClgEN.con_CollegeIdInGP:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (a.collegeIdInGP == null) return -1;
          if (b.collegeIdInGP == null) return 1;
          return a.collegeIdInGP.localeCompare(b.collegeIdInGP);
        };
      case clsXzClgEN.con_IdSchool:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (a.idSchool == null) return -1;
          if (b.idSchool == null) return 1;
          return a.idSchool.localeCompare(b.idSchool);
        };
      case clsXzClgEN.con_IdUni:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (a.idUni == null) return -1;
          if (b.idUni == null) return 1;
          return a.idUni.localeCompare(b.idUni);
        };
      case clsXzClgEN.con_PhoneNumber:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (a.phoneNumber == null) return -1;
          if (b.phoneNumber == null) return 1;
          return a.phoneNumber.localeCompare(b.phoneNumber);
        };
      case clsXzClgEN.con_WebSite:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (a.webSite == null) return -1;
          if (b.webSite == null) return 1;
          return a.webSite.localeCompare(b.webSite);
        };
      case clsXzClgEN.con_IsVisible:
        return (a: clsXzClgEN) => {
          if (a.isVisible == true) return 1;
          else return -1;
        };
      case clsXzClgEN.con_IsVisible4Tea:
        return (a: clsXzClgEN) => {
          if (a.isVisible4Tea == true) return 1;
          else return -1;
        };
      case clsXzClgEN.con_OrderNum:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsXzClgEN.con_ModifyDate:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (a.modifyDate == null) return -1;
          if (b.modifyDate == null) return 1;
          return a.modifyDate.localeCompare(b.modifyDate);
        };
      case clsXzClgEN.con_ModifyUserId:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (a.modifyUserId == null) return -1;
          if (b.modifyUserId == null) return 1;
          return a.modifyUserId.localeCompare(b.modifyUserId);
        };
      case clsXzClgEN.con_Memo:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzClg]中不存在!(in ${xzClg_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsXzClgEN.con_IdXzCollege:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          return b.idXzCollege.localeCompare(a.idXzCollege);
        };
      case clsXzClgEN.con_CollegeId:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          return b.collegeId.localeCompare(a.collegeId);
        };
      case clsXzClgEN.con_CollegeName:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsXzClgEN.con_CollegeNameA:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          return b.collegeNameA.localeCompare(a.collegeNameA);
        };
      case clsXzClgEN.con_ClgEnglishName:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (b.clgEnglishName == null) return -1;
          if (a.clgEnglishName == null) return 1;
          return b.clgEnglishName.localeCompare(a.clgEnglishName);
        };
      case clsXzClgEN.con_UserType:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (b.userType == null) return -1;
          if (a.userType == null) return 1;
          return b.userType.localeCompare(a.userType);
        };
      case clsXzClgEN.con_CollegeIdInGP:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (b.collegeIdInGP == null) return -1;
          if (a.collegeIdInGP == null) return 1;
          return b.collegeIdInGP.localeCompare(a.collegeIdInGP);
        };
      case clsXzClgEN.con_IdSchool:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (b.idSchool == null) return -1;
          if (a.idSchool == null) return 1;
          return b.idSchool.localeCompare(a.idSchool);
        };
      case clsXzClgEN.con_IdUni:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (b.idUni == null) return -1;
          if (a.idUni == null) return 1;
          return b.idUni.localeCompare(a.idUni);
        };
      case clsXzClgEN.con_PhoneNumber:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (b.phoneNumber == null) return -1;
          if (a.phoneNumber == null) return 1;
          return b.phoneNumber.localeCompare(a.phoneNumber);
        };
      case clsXzClgEN.con_WebSite:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (b.webSite == null) return -1;
          if (a.webSite == null) return 1;
          return b.webSite.localeCompare(a.webSite);
        };
      case clsXzClgEN.con_IsVisible:
        return (b: clsXzClgEN) => {
          if (b.isVisible == true) return 1;
          else return -1;
        };
      case clsXzClgEN.con_IsVisible4Tea:
        return (b: clsXzClgEN) => {
          if (b.isVisible4Tea == true) return 1;
          else return -1;
        };
      case clsXzClgEN.con_OrderNum:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsXzClgEN.con_ModifyDate:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (b.modifyDate == null) return -1;
          if (a.modifyDate == null) return 1;
          return b.modifyDate.localeCompare(a.modifyDate);
        };
      case clsXzClgEN.con_ModifyUserId:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (b.modifyUserId == null) return -1;
          if (a.modifyUserId == null) return 1;
          return b.modifyUserId.localeCompare(a.modifyUserId);
        };
      case clsXzClgEN.con_Memo:
        return (a: clsXzClgEN, b: clsXzClgEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzClg]中不存在!(in ${xzClg_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function XzClg_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsXzClgEN.con_IdXzCollege:
      return (obj: clsXzClgEN) => {
        return obj.idXzCollege === value;
      };
    case clsXzClgEN.con_CollegeId:
      return (obj: clsXzClgEN) => {
        return obj.collegeId === value;
      };
    case clsXzClgEN.con_CollegeName:
      return (obj: clsXzClgEN) => {
        return obj.collegeName === value;
      };
    case clsXzClgEN.con_CollegeNameA:
      return (obj: clsXzClgEN) => {
        return obj.collegeNameA === value;
      };
    case clsXzClgEN.con_ClgEnglishName:
      return (obj: clsXzClgEN) => {
        return obj.clgEnglishName === value;
      };
    case clsXzClgEN.con_UserType:
      return (obj: clsXzClgEN) => {
        return obj.userType === value;
      };
    case clsXzClgEN.con_CollegeIdInGP:
      return (obj: clsXzClgEN) => {
        return obj.collegeIdInGP === value;
      };
    case clsXzClgEN.con_IdSchool:
      return (obj: clsXzClgEN) => {
        return obj.idSchool === value;
      };
    case clsXzClgEN.con_IdUni:
      return (obj: clsXzClgEN) => {
        return obj.idUni === value;
      };
    case clsXzClgEN.con_PhoneNumber:
      return (obj: clsXzClgEN) => {
        return obj.phoneNumber === value;
      };
    case clsXzClgEN.con_WebSite:
      return (obj: clsXzClgEN) => {
        return obj.webSite === value;
      };
    case clsXzClgEN.con_IsVisible:
      return (obj: clsXzClgEN) => {
        return obj.isVisible === value;
      };
    case clsXzClgEN.con_IsVisible4Tea:
      return (obj: clsXzClgEN) => {
        return obj.isVisible4Tea === value;
      };
    case clsXzClgEN.con_OrderNum:
      return (obj: clsXzClgEN) => {
        return obj.orderNum === value;
      };
    case clsXzClgEN.con_ModifyDate:
      return (obj: clsXzClgEN) => {
        return obj.modifyDate === value;
      };
    case clsXzClgEN.con_ModifyUserId:
      return (obj: clsXzClgEN) => {
        return obj.modifyUserId === value;
      };
    case clsXzClgEN.con_Memo:
      return (obj: clsXzClgEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[XzClg]中不存在!(in ${xzClg_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strIdSchool:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function XzClg_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdSchoolClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdSchoolClassfy) == true) {
    const strMsg = Format('参数:[strIdSchoolClassfy]不能为空!(In clsXzClgWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSchoolClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSchoolClassfy]的长度:[{0}]不正确!(clsXzClgWApi.funcKey)',
      strIdSchoolClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsXzClgEN.con_IdXzCollege) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrXzClg = await XzClg_GetObjLstCache(strIdSchoolClassfy);
  if (arrXzClg == null) return [];
  let arrXzClgSel = arrXzClg;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrXzClgSel = arrXzClgSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrXzClgSel = arrXzClgSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrXzClgSel = arrXzClgSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrXzClgSel.length == 0) return [];
  return arrXzClgSel.map((x) => x.idXzCollege);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzClg_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
export async function XzClg_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
export async function XzClg_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
export async function XzClg_GetFirstObjAsync(strWhereCond: string): Promise<clsXzClgEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

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
      const objXzClg = XzClg_GetObjFromJsonObj(returnObj);
      return objXzClg;
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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
export async function XzClg_GetObjLstClientCache(strIdSchool: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsXzClgEN.WhereFormat) == false) {
    strWhereCond = Format(clsXzClgEN.WhereFormat, strIdSchool);
  } else {
    strWhereCond = Format("IdSchool='{0}'", strIdSchool);
  }
  const strKey = Format('{0}_{1}', clsXzClgEN._CurrTabName, strIdSchool);
  if (IsNullOrEmpty(clsXzClgEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzClgEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrXzClgExObjLstCache: Array<clsXzClgEN> = CacheHelper.Get(strKey);
    const arrXzClgObjLstT = XzClg_GetObjLstByJSONObjLst(arrXzClgExObjLstCache);
    return arrXzClgObjLstT;
  }
  try {
    const arrXzClgExObjLst = await XzClg_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrXzClgExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzClgExObjLst.length,
    );
    console.log(strInfo);
    return arrXzClgExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzClg_ConstructorName,
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
export async function XzClg_GetObjLstlocalStorage(strIdSchool: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsXzClgEN.WhereFormat) == false) {
    strWhereCond = Format(clsXzClgEN.WhereFormat, strIdSchool);
  } else {
    strWhereCond = Format("{0}='{1}'", clsXzClgEN.con_IdSchool, strIdSchool);
  }
  const strKey = Format('{0}_{1}', clsXzClgEN._CurrTabName, strIdSchool);
  if (IsNullOrEmpty(clsXzClgEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzClgEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzClgExObjLstCache: Array<clsXzClgEN> = JSON.parse(strTempObjLst);
    const arrXzClgObjLstT = XzClg_GetObjLstByJSONObjLst(arrXzClgExObjLstCache);
    return arrXzClgObjLstT;
  }
  try {
    const arrXzClgExObjLst = await XzClg_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsXzClgEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrXzClgExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzClgExObjLst.length,
    );
    console.log(strInfo);
    return arrXzClgExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzClg_ConstructorName,
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
export async function XzClg_GetObjLstlocalStoragePureCache(strIdSchool: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsXzClgEN._CurrTabName, strIdSchool);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzClgObjLstCache: Array<clsXzClgEN> = JSON.parse(strTempObjLst);
    return arrXzClgObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function XzClg_GetObjLstAsync(strWhereCond: string): Promise<Array<clsXzClgEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

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
          xzClg_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzClg_GetObjLstByJSONObjLst(returnObjLst);
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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
export async function XzClg_GetObjLstsessionStorage(strIdSchool: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsXzClgEN.WhereFormat) == false) {
    strWhereCond = Format(clsXzClgEN.WhereFormat, strIdSchool);
  } else {
    strWhereCond = Format("{0}='{1}'", clsXzClgEN.con_IdSchool, strIdSchool);
  }
  const strKey = Format('{0}_{1}', clsXzClgEN._CurrTabName, strIdSchool);
  if (IsNullOrEmpty(clsXzClgEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzClgEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzClgExObjLstCache: Array<clsXzClgEN> = JSON.parse(strTempObjLst);
    const arrXzClgObjLstT = XzClg_GetObjLstByJSONObjLst(arrXzClgExObjLstCache);
    return arrXzClgObjLstT;
  }
  try {
    const arrXzClgExObjLst = await XzClg_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsXzClgEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrXzClgExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzClgExObjLst.length,
    );
    console.log(strInfo);
    return arrXzClgExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzClg_ConstructorName,
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
export async function XzClg_GetObjLstsessionStoragePureCache(strIdSchool: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsXzClgEN._CurrTabName, strIdSchool);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzClgObjLstCache: Array<clsXzClgEN> = JSON.parse(strTempObjLst);
    return arrXzClgObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzClg_GetObjLstCache(strIdSchool: string): Promise<Array<clsXzClgEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdSchool) == true) {
    const strMsg = Format('参数:[strIdSchool]不能为空！(In clsXzClgWApi.XzClg_GetObjLstCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSchool.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSchool]的长度:[{0}]不正确！(clsXzClgWApi.XzClg_GetObjLstCache)',
      strIdSchool.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrXzClgObjLstCache;
  switch (clsXzClgEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzClgObjLstCache = await XzClg_GetObjLstsessionStorage(strIdSchool);
      break;
    case '03': //localStorage
      arrXzClgObjLstCache = await XzClg_GetObjLstlocalStorage(strIdSchool);
      break;
    case '02': //ClientCache
      arrXzClgObjLstCache = await XzClg_GetObjLstClientCache(strIdSchool);
      break;
    default:
      arrXzClgObjLstCache = await XzClg_GetObjLstClientCache(strIdSchool);
      break;
  }
  return arrXzClgObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzClg_GetObjLstPureCache(strIdSchool: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrXzClgObjLstCache;
  switch (clsXzClgEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzClgObjLstCache = await XzClg_GetObjLstsessionStoragePureCache(strIdSchool);
      break;
    case '03': //localStorage
      arrXzClgObjLstCache = await XzClg_GetObjLstlocalStoragePureCache(strIdSchool);
      break;
    case '02': //ClientCache
      arrXzClgObjLstCache = null;
      break;
    default:
      arrXzClgObjLstCache = null;
      break;
  }
  return arrXzClgObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdXzCollegeCond:条件对象
 * @returns 对象列表子集
 */
export async function XzClg_GetSubObjLstCache(objXzClgCond: clsXzClgEN, strIdSchool: string) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrXzClgObjLstCache = await XzClg_GetObjLstCache(strIdSchool);
  let arrXzClgSel = arrXzClgObjLstCache;
  if (objXzClgCond.sfFldComparisonOp == null || objXzClgCond.sfFldComparisonOp == '')
    return arrXzClgSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzClgCond.sfFldComparisonOp,
  );
  //console.log("clsXzClgWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzClgCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzClgCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrXzClgSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzClgCond),
      xzClg_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzClgEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdXzCollege:关键字列表
 * @returns 对象列表
 **/
export async function XzClg_GetObjLstByIdXzCollegeLstAsync(
  arrIdXzCollege: Array<string>,
): Promise<Array<clsXzClgEN>> {
  const strThisFuncName = 'GetObjLstByIdXzCollegeLstAsync';
  const strAction = 'GetObjLstByIdXzCollegeLst';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdXzCollege, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          xzClg_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzClg_GetObjLstByJSONObjLst(returnObjLst);
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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
 * @param arrstrIdXzCollegeLst:关键字列表
 * @returns 对象列表
 */
export async function XzClg_GetObjLstByIdXzCollegeLstCache(
  arrIdXzCollegeLst: Array<string>,
  strIdSchool: string,
) {
  const strThisFuncName = 'GetObjLstByIdXzCollegeLstCache';
  try {
    const arrXzClgObjLstCache = await XzClg_GetObjLstCache(strIdSchool);
    const arrXzClgSel = arrXzClgObjLstCache.filter(
      (x) => arrIdXzCollegeLst.indexOf(x.idXzCollege) > -1,
    );
    return arrXzClgSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdXzCollegeLst.join(','),
      xzClg_ConstructorName,
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
export async function XzClg_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsXzClgEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

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
          xzClg_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzClg_GetObjLstByJSONObjLst(returnObjLst);
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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
export async function XzClg_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsXzClgEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

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
          xzClg_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzClg_GetObjLstByJSONObjLst(returnObjLst);
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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
export async function XzClg_GetObjLstByPagerCache(objPagerPara: stuPagerPara, strIdSchool: string) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzClgEN>();
  const arrXzClgObjLstCache = await XzClg_GetObjLstCache(strIdSchool);
  if (arrXzClgObjLstCache.length == 0) return arrXzClgObjLstCache;
  let arrXzClgSel = arrXzClgObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objXzClgCond = new clsXzClgEN();
  ObjectAssign(objXzClgCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsXzClgWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzClgCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzClgSel = arrXzClgSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrXzClgSel.length == 0) return arrXzClgSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzClgSel = arrXzClgSel.sort(XzClg_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzClgSel = arrXzClgSel.sort(objPagerPara.sortFun);
    }
    arrXzClgSel = arrXzClgSel.slice(intStart, intEnd);
    return arrXzClgSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzClg_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzClgEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function XzClg_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzClgEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzClgEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

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
          xzClg_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzClg_GetObjLstByJSONObjLst(returnObjLst);
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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
 * @param strIdXzCollege:关键字
 * @returns 获取删除的结果
 **/
export async function XzClg_DelRecordAsync(strIdXzCollege: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdXzCollege);

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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
 * @param arrIdXzCollege:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function XzClg_DelXzClgsAsync(arrIdXzCollege: Array<string>): Promise<number> {
  const strThisFuncName = 'DelXzClgsAsync';
  const strAction = 'DelXzClgs';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdXzCollege, config);
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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
export async function XzClg_DelXzClgsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelXzClgsByCondAsync';
  const strAction = 'DelXzClgsByCond';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
 * @param objXzClgEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzClg_AddNewRecordAsync(objXzClgEN: clsXzClgEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objXzClgEN.idXzCollege === null || objXzClgEN.idXzCollege === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objXzClgEN);
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzClgEN, config);
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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
 * @param objXzClgEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzClg_AddNewRecordWithMaxIdAsync(objXzClgEN: clsXzClgEN): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzClgEN, config);
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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
 * @param objXzClgEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function XzClg_AddNewRecordWithReturnKeyAsync(
  objXzClgEN: clsXzClgEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzClgEN, config);
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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
 * @param objXzClgEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function XzClg_UpdateRecordAsync(objXzClgEN: clsXzClgEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objXzClgEN.sfUpdFldSetStr === undefined ||
    objXzClgEN.sfUpdFldSetStr === null ||
    objXzClgEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzClgEN.idXzCollege,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzClgEN, config);
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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
 * @param objXzClgEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzClg_UpdateWithConditionAsync(
  objXzClgEN: clsXzClgEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objXzClgEN.sfUpdFldSetStr === undefined ||
    objXzClgEN.sfUpdFldSetStr === null ||
    objXzClgEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzClgEN.idXzCollege,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);
  objXzClgEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzClgEN, config);
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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
 * @param objstrIdXzCollegeCond:条件对象
 * @returns 对象列表子集
 */
export async function XzClg_IsExistRecordCache(objXzClgCond: clsXzClgEN, strIdSchool: string) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrXzClgObjLstCache = await XzClg_GetObjLstCache(strIdSchool);
  if (arrXzClgObjLstCache == null) return false;
  let arrXzClgSel = arrXzClgObjLstCache;
  if (objXzClgCond.sfFldComparisonOp == null || objXzClgCond.sfFldComparisonOp == '')
    return arrXzClgSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzClgCond.sfFldComparisonOp,
  );
  //console.log("clsXzClgWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzClgCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzClgCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrXzClgSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objXzClgCond),
      xzClg_ConstructorName,
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
export async function XzClg_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
 * @param strIdXzCollege:所给的关键字
 * @returns 对象
 */
export async function XzClg_IsExistCache(strIdXzCollege: string, strIdSchool: string) {
  const strThisFuncName = 'IsExistCache';
  const arrXzClgObjLstCache = await XzClg_GetObjLstCache(strIdSchool);
  if (arrXzClgObjLstCache == null) return false;
  try {
    const arrXzClgSel = arrXzClgObjLstCache.filter((x) => x.idXzCollege == strIdXzCollege);
    if (arrXzClgSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdXzCollege,
      xzClg_ConstructorName,
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
 * @param strIdXzCollege:关键字
 * @returns 是否存在?存在返回True
 **/
export async function XzClg_IsExistAsync(strIdXzCollege: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdXzCollege,
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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
export async function XzClg_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
 * @param objXzClgCond:条件对象
 * @returns 对象列表记录数
 */
export async function XzClg_GetRecCountByCondCache(objXzClgCond: clsXzClgEN, strIdSchool: string) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrXzClgObjLstCache = await XzClg_GetObjLstCache(strIdSchool);
  if (arrXzClgObjLstCache == null) return 0;
  let arrXzClgSel = arrXzClgObjLstCache;
  if (objXzClgCond.sfFldComparisonOp == null || objXzClgCond.sfFldComparisonOp == '')
    return arrXzClgSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzClgCond.sfFldComparisonOp,
  );
  //console.log("clsXzClgWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzClgCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzClgCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzClgSel = arrXzClgSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrXzClgSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzClgCond),
      xzClg_ConstructorName,
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
export async function XzClg_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl_GP(xzClg_Controller, strAction);

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
        xzClg_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzClg_ConstructorName,
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
export function XzClg_GetWebApiUrl(strController: string, strAction: string): string {
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
export function XzClg_ReFreshCache(strIdSchool: string): void {
  if (IsNullOrEmpty(strIdSchool) == true) {
    const strMsg = Format('参数:[strIdSchool]不能为空!(In clsXzClgWApi.clsXzClgWApi.ReFreshCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSchool.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSchool]的长度:[{0}]不正确!(clsXzClgWApi.clsXzClgWApi.ReFreshCache)',
      strIdSchool.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsXzClgEN._CurrTabName, strIdSchool);
  switch (clsXzClgEN.CacheModeId) {
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
export function XzClg_ReFreshThisCache(strIdSchool: string): void {
  if (IsNullOrEmpty(strIdSchool) == true) {
    const strMsg = Format('参数:[strIdSchool]不能为空!(In clsXzClgWApi.XzClg_ReFreshThisCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSchool.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSchool]的长度:[{0}]不正确!(clsXzClgWApi.XzClg_ReFreshThisCache)',
      strIdSchool.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsXzClgEN._CurrTabName, strIdSchool);
    switch (clsXzClgEN.CacheModeId) {
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

 * @param strUserType:
 * @param strIdSchool:
*/
export async function XzClg_BindDdl_IdXzCollegeByUserTypeInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strUserType: string,
  strIdSchool: string,
) {
  if (IsNullOrEmpty(strUserType) == true) {
    const strMsg = Format(
      '参数:[strUserType]不能为空！(In clsXzClgWApi.BindDdl_IdXzCollegeByUserTypeInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strIdSchool) == true) {
    const strMsg = Format(
      '参数:[strIdSchool]不能为空！(In clsXzClgWApi.BindDdl_IdXzCollegeByUserTypeInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSchool.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSchool]的长度:[{0}]不正确！(clsXzClgWApi.BindDdl_IdXzCollegeByUserTypeInDiv)',
      strIdSchool.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_IdXzCollegeByUserTypeInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_IdXzCollegeByUserTypeInDivCache");
  let arrObjLstSel = await XzClg_GetObjLstCache(strIdSchool);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.userType == strUserType);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsXzClgEN.con_IdXzCollege,
    clsXzClgEN.con_CollegeName,
    'XzClg',
  );
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdSchool:
*/
export async function XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strIdSchool: string,
) {
  if (IsNullOrEmpty(strIdSchool) == true) {
    const strMsg = Format(
      '参数:[strIdSchool]不能为空！(In clsXzClgWApi.BindDdl_IdXzCollegeByIdSchoolInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSchool.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSchool]的长度:[{0}]不正确！(clsXzClgWApi.BindDdl_IdXzCollegeByIdSchoolInDiv)',
      strIdSchool.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_IdXzCollegeByIdSchoolInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_IdXzCollegeByIdSchoolInDivCache");
  let arrObjLstSel = await XzClg_GetObjLstCache(strIdSchool);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.idSchool == strIdSchool);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsXzClgEN.con_IdXzCollege,
    clsXzClgEN.con_CollegeName,
    'XzClg',
  );
}
//(IsNeedGC == false)该表下拉框功能不需要生成;

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzClg_CheckPropertyNew(pobjXzClgEN: clsXzClgEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjXzClgEN.collegeId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[CollegeId]不能为空(In XzClg)!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.collegeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[学院名]不能为空(In XzClg)!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.collegeNameA) === true) {
    throw new Error(
      `(errid:Watl000411)字段[CollegeNameA]不能为空(In XzClg)!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjXzClgEN.idXzCollege) == false && GetStrLen(pobjXzClgEN.idXzCollege) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[学院Id(idXzCollege)]的长度不能超过4(In XzClg(XzClg))!值:${pobjXzClgEN.idXzCollege}(clsXzClgBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.collegeId) == false && GetStrLen(pobjXzClgEN.collegeId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[CollegeId(collegeId)]的长度不能超过4(In XzClg(XzClg))!值:${pobjXzClgEN.collegeId}(clsXzClgBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.collegeName) == false && GetStrLen(pobjXzClgEN.collegeName) > 100) {
    throw new Error(
      `(errid:Watl000413)字段[学院名(collegeName)]的长度不能超过100(In XzClg(XzClg))!值:${pobjXzClgEN.collegeName}(clsXzClgBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.collegeNameA) == false &&
    GetStrLen(pobjXzClgEN.collegeNameA) > 12
  ) {
    throw new Error(
      `(errid:Watl000413)字段[CollegeNameA(collegeNameA)]的长度不能超过12(In XzClg(XzClg))!值:${pobjXzClgEN.collegeNameA}(clsXzClgBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.clgEnglishName) == false &&
    GetStrLen(pobjXzClgEN.clgEnglishName) > 60
  ) {
    throw new Error(
      `(errid:Watl000413)字段[ClgEnglishName(clgEnglishName)]的长度不能超过60(In XzClg(XzClg))!值:${pobjXzClgEN.clgEnglishName}(clsXzClgBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.userType) == false && GetStrLen(pobjXzClgEN.userType) > 50) {
    throw new Error(
      `(errid:Watl000413)字段[用户类型(userType)]的长度不能超过50(In XzClg(XzClg))!值:${pobjXzClgEN.userType}(clsXzClgBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.collegeIdInGP) == false &&
    GetStrLen(pobjXzClgEN.collegeIdInGP) > 6
  ) {
    throw new Error(
      `(errid:Watl000413)字段[CollegeIdInGP(collegeIdInGP)]的长度不能超过6(In XzClg(XzClg))!值:${pobjXzClgEN.collegeIdInGP}(clsXzClgBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.idSchool) == false && GetStrLen(pobjXzClgEN.idSchool) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[学校流水号(idSchool)]的长度不能超过4(In XzClg(XzClg))!值:${pobjXzClgEN.idSchool}(clsXzClgBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.idUni) == false && GetStrLen(pobjXzClgEN.idUni) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[IdUni(idUni)]的长度不能超过4(In XzClg(XzClg))!值:${pobjXzClgEN.idUni}(clsXzClgBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.phoneNumber) == false && GetStrLen(pobjXzClgEN.phoneNumber) > 15) {
    throw new Error(
      `(errid:Watl000413)字段[电话号码(phoneNumber)]的长度不能超过15(In XzClg(XzClg))!值:${pobjXzClgEN.phoneNumber}(clsXzClgBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.webSite) == false && GetStrLen(pobjXzClgEN.webSite) > 60) {
    throw new Error(
      `(errid:Watl000413)字段[WebSite(webSite)]的长度不能超过60(In XzClg(XzClg))!值:${pobjXzClgEN.webSite}(clsXzClgBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.modifyDate) == false && GetStrLen(pobjXzClgEN.modifyDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In XzClg(XzClg))!值:${pobjXzClgEN.modifyDate}(clsXzClgBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.modifyUserId) == false &&
    GetStrLen(pobjXzClgEN.modifyUserId) > 18
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In XzClg(XzClg))!值:${pobjXzClgEN.modifyUserId}(clsXzClgBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.memo) == false && GetStrLen(pobjXzClgEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In XzClg(XzClg))!值:${pobjXzClgEN.memo}(clsXzClgBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzClgEN.idXzCollege) == false &&
    undefined !== pobjXzClgEN.idXzCollege &&
    tzDataType.isString(pobjXzClgEN.idXzCollege) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[学院Id(idXzCollege)]的值:[${pobjXzClgEN.idXzCollege}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.collegeId) == false &&
    undefined !== pobjXzClgEN.collegeId &&
    tzDataType.isString(pobjXzClgEN.collegeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[CollegeId(collegeId)]的值:[${pobjXzClgEN.collegeId}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.collegeName) == false &&
    undefined !== pobjXzClgEN.collegeName &&
    tzDataType.isString(pobjXzClgEN.collegeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[学院名(collegeName)]的值:[${pobjXzClgEN.collegeName}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.collegeNameA) == false &&
    undefined !== pobjXzClgEN.collegeNameA &&
    tzDataType.isString(pobjXzClgEN.collegeNameA) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[CollegeNameA(collegeNameA)]的值:[${pobjXzClgEN.collegeNameA}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.clgEnglishName) == false &&
    undefined !== pobjXzClgEN.clgEnglishName &&
    tzDataType.isString(pobjXzClgEN.clgEnglishName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[ClgEnglishName(clgEnglishName)]的值:[${pobjXzClgEN.clgEnglishName}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.userType) == false &&
    undefined !== pobjXzClgEN.userType &&
    tzDataType.isString(pobjXzClgEN.userType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用户类型(userType)]的值:[${pobjXzClgEN.userType}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.collegeIdInGP) == false &&
    undefined !== pobjXzClgEN.collegeIdInGP &&
    tzDataType.isString(pobjXzClgEN.collegeIdInGP) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[CollegeIdInGP(collegeIdInGP)]的值:[${pobjXzClgEN.collegeIdInGP}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.idSchool) == false &&
    undefined !== pobjXzClgEN.idSchool &&
    tzDataType.isString(pobjXzClgEN.idSchool) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[学校流水号(idSchool)]的值:[${pobjXzClgEN.idSchool}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.idUni) == false &&
    undefined !== pobjXzClgEN.idUni &&
    tzDataType.isString(pobjXzClgEN.idUni) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[IdUni(idUni)]的值:[${pobjXzClgEN.idUni}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.phoneNumber) == false &&
    undefined !== pobjXzClgEN.phoneNumber &&
    tzDataType.isString(pobjXzClgEN.phoneNumber) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[电话号码(phoneNumber)]的值:[${pobjXzClgEN.phoneNumber}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.webSite) == false &&
    undefined !== pobjXzClgEN.webSite &&
    tzDataType.isString(pobjXzClgEN.webSite) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[WebSite(webSite)]的值:[${pobjXzClgEN.webSite}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjXzClgEN.isVisible &&
    undefined !== pobjXzClgEN.isVisible &&
    tzDataType.isBoolean(pobjXzClgEN.isVisible) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否显示(isVisible)]的值:[${pobjXzClgEN.isVisible}], 非法,应该为布尔型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjXzClgEN.isVisible4Tea &&
    undefined !== pobjXzClgEN.isVisible4Tea &&
    tzDataType.isBoolean(pobjXzClgEN.isVisible4Tea) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[IsVisible4Tea(isVisible4Tea)]的值:[${pobjXzClgEN.isVisible4Tea}], 非法,应该为布尔型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjXzClgEN.orderNum &&
    undefined !== pobjXzClgEN.orderNum &&
    tzDataType.isNumber(pobjXzClgEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[排序号(orderNum)]的值:[${pobjXzClgEN.orderNum}], 非法,应该为数值型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.modifyDate) == false &&
    undefined !== pobjXzClgEN.modifyDate &&
    tzDataType.isString(pobjXzClgEN.modifyDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(modifyDate)]的值:[${pobjXzClgEN.modifyDate}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.modifyUserId) == false &&
    undefined !== pobjXzClgEN.modifyUserId &&
    tzDataType.isString(pobjXzClgEN.modifyUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改人(modifyUserId)]的值:[${pobjXzClgEN.modifyUserId}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.memo) == false &&
    undefined !== pobjXzClgEN.memo &&
    tzDataType.isString(pobjXzClgEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[备注(memo)]的值:[${pobjXzClgEN.memo}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzClg_CheckProperty4Update(pobjXzClgEN: clsXzClgEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjXzClgEN.idXzCollege) == false && GetStrLen(pobjXzClgEN.idXzCollege) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[学院Id(idXzCollege)]的长度不能超过4(In XzClg(XzClg))!值:${pobjXzClgEN.idXzCollege}(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.collegeId) == false && GetStrLen(pobjXzClgEN.collegeId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[CollegeId(collegeId)]的长度不能超过4(In XzClg(XzClg))!值:${pobjXzClgEN.collegeId}(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.collegeName) == false && GetStrLen(pobjXzClgEN.collegeName) > 100) {
    throw new Error(
      `(errid:Watl000416)字段[学院名(collegeName)]的长度不能超过100(In XzClg(XzClg))!值:${pobjXzClgEN.collegeName}(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.collegeNameA) == false &&
    GetStrLen(pobjXzClgEN.collegeNameA) > 12
  ) {
    throw new Error(
      `(errid:Watl000416)字段[CollegeNameA(collegeNameA)]的长度不能超过12(In XzClg(XzClg))!值:${pobjXzClgEN.collegeNameA}(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.clgEnglishName) == false &&
    GetStrLen(pobjXzClgEN.clgEnglishName) > 60
  ) {
    throw new Error(
      `(errid:Watl000416)字段[ClgEnglishName(clgEnglishName)]的长度不能超过60(In XzClg(XzClg))!值:${pobjXzClgEN.clgEnglishName}(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.userType) == false && GetStrLen(pobjXzClgEN.userType) > 50) {
    throw new Error(
      `(errid:Watl000416)字段[用户类型(userType)]的长度不能超过50(In XzClg(XzClg))!值:${pobjXzClgEN.userType}(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.collegeIdInGP) == false &&
    GetStrLen(pobjXzClgEN.collegeIdInGP) > 6
  ) {
    throw new Error(
      `(errid:Watl000416)字段[CollegeIdInGP(collegeIdInGP)]的长度不能超过6(In XzClg(XzClg))!值:${pobjXzClgEN.collegeIdInGP}(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.idSchool) == false && GetStrLen(pobjXzClgEN.idSchool) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[学校流水号(idSchool)]的长度不能超过4(In XzClg(XzClg))!值:${pobjXzClgEN.idSchool}(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.idUni) == false && GetStrLen(pobjXzClgEN.idUni) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[IdUni(idUni)]的长度不能超过4(In XzClg(XzClg))!值:${pobjXzClgEN.idUni}(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.phoneNumber) == false && GetStrLen(pobjXzClgEN.phoneNumber) > 15) {
    throw new Error(
      `(errid:Watl000416)字段[电话号码(phoneNumber)]的长度不能超过15(In XzClg(XzClg))!值:${pobjXzClgEN.phoneNumber}(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.webSite) == false && GetStrLen(pobjXzClgEN.webSite) > 60) {
    throw new Error(
      `(errid:Watl000416)字段[WebSite(webSite)]的长度不能超过60(In XzClg(XzClg))!值:${pobjXzClgEN.webSite}(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.modifyDate) == false && GetStrLen(pobjXzClgEN.modifyDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In XzClg(XzClg))!值:${pobjXzClgEN.modifyDate}(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.modifyUserId) == false &&
    GetStrLen(pobjXzClgEN.modifyUserId) > 18
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In XzClg(XzClg))!值:${pobjXzClgEN.modifyUserId}(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjXzClgEN.memo) == false && GetStrLen(pobjXzClgEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In XzClg(XzClg))!值:${pobjXzClgEN.memo}(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzClgEN.idXzCollege) == false &&
    undefined !== pobjXzClgEN.idXzCollege &&
    tzDataType.isString(pobjXzClgEN.idXzCollege) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[学院Id(idXzCollege)]的值:[${pobjXzClgEN.idXzCollege}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.collegeId) == false &&
    undefined !== pobjXzClgEN.collegeId &&
    tzDataType.isString(pobjXzClgEN.collegeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[CollegeId(collegeId)]的值:[${pobjXzClgEN.collegeId}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.collegeName) == false &&
    undefined !== pobjXzClgEN.collegeName &&
    tzDataType.isString(pobjXzClgEN.collegeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[学院名(collegeName)]的值:[${pobjXzClgEN.collegeName}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.collegeNameA) == false &&
    undefined !== pobjXzClgEN.collegeNameA &&
    tzDataType.isString(pobjXzClgEN.collegeNameA) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[CollegeNameA(collegeNameA)]的值:[${pobjXzClgEN.collegeNameA}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.clgEnglishName) == false &&
    undefined !== pobjXzClgEN.clgEnglishName &&
    tzDataType.isString(pobjXzClgEN.clgEnglishName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[ClgEnglishName(clgEnglishName)]的值:[${pobjXzClgEN.clgEnglishName}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.userType) == false &&
    undefined !== pobjXzClgEN.userType &&
    tzDataType.isString(pobjXzClgEN.userType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用户类型(userType)]的值:[${pobjXzClgEN.userType}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.collegeIdInGP) == false &&
    undefined !== pobjXzClgEN.collegeIdInGP &&
    tzDataType.isString(pobjXzClgEN.collegeIdInGP) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[CollegeIdInGP(collegeIdInGP)]的值:[${pobjXzClgEN.collegeIdInGP}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.idSchool) == false &&
    undefined !== pobjXzClgEN.idSchool &&
    tzDataType.isString(pobjXzClgEN.idSchool) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[学校流水号(idSchool)]的值:[${pobjXzClgEN.idSchool}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.idUni) == false &&
    undefined !== pobjXzClgEN.idUni &&
    tzDataType.isString(pobjXzClgEN.idUni) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[IdUni(idUni)]的值:[${pobjXzClgEN.idUni}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.phoneNumber) == false &&
    undefined !== pobjXzClgEN.phoneNumber &&
    tzDataType.isString(pobjXzClgEN.phoneNumber) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[电话号码(phoneNumber)]的值:[${pobjXzClgEN.phoneNumber}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.webSite) == false &&
    undefined !== pobjXzClgEN.webSite &&
    tzDataType.isString(pobjXzClgEN.webSite) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[WebSite(webSite)]的值:[${pobjXzClgEN.webSite}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjXzClgEN.isVisible &&
    undefined !== pobjXzClgEN.isVisible &&
    tzDataType.isBoolean(pobjXzClgEN.isVisible) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否显示(isVisible)]的值:[${pobjXzClgEN.isVisible}], 非法,应该为布尔型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjXzClgEN.isVisible4Tea &&
    undefined !== pobjXzClgEN.isVisible4Tea &&
    tzDataType.isBoolean(pobjXzClgEN.isVisible4Tea) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[IsVisible4Tea(isVisible4Tea)]的值:[${pobjXzClgEN.isVisible4Tea}], 非法,应该为布尔型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjXzClgEN.orderNum &&
    undefined !== pobjXzClgEN.orderNum &&
    tzDataType.isNumber(pobjXzClgEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[排序号(orderNum)]的值:[${pobjXzClgEN.orderNum}], 非法,应该为数值型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.modifyDate) == false &&
    undefined !== pobjXzClgEN.modifyDate &&
    tzDataType.isString(pobjXzClgEN.modifyDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(modifyDate)]的值:[${pobjXzClgEN.modifyDate}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.modifyUserId) == false &&
    undefined !== pobjXzClgEN.modifyUserId &&
    tzDataType.isString(pobjXzClgEN.modifyUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改人(modifyUserId)]的值:[${pobjXzClgEN.modifyUserId}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjXzClgEN.memo) == false &&
    undefined !== pobjXzClgEN.memo &&
    tzDataType.isString(pobjXzClgEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[备注(memo)]的值:[${pobjXzClgEN.memo}], 非法,应该为字符型(In XzClg(XzClg))!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjXzClgEN.idXzCollege) === true) {
    throw new Error(
      `(errid:Watl000064)字段[学院Id]不能为空(In XzClg)!(clsXzClgBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function XzClg_GetJSONStrByObj(pobjXzClgEN: clsXzClgEN): string {
  pobjXzClgEN.sfUpdFldSetStr = pobjXzClgEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjXzClgEN);
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
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function XzClg_GetObjLstByJSONStr(strJSON: string): Array<clsXzClgEN> {
  let arrXzClgObjLst = new Array<clsXzClgEN>();
  if (strJSON === '') {
    return arrXzClgObjLst;
  }
  try {
    arrXzClgObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrXzClgObjLst;
  }
  return arrXzClgObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrXzClgObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function XzClg_GetObjLstByJSONObjLst(arrXzClgObjLstS: Array<clsXzClgEN>): Array<clsXzClgEN> {
  const arrXzClgObjLst = new Array<clsXzClgEN>();
  for (const objInFor of arrXzClgObjLstS) {
    const obj1 = XzClg_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrXzClgObjLst.push(obj1);
  }
  return arrXzClgObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function XzClg_GetObjByJSONStr(strJSON: string): clsXzClgEN {
  let pobjXzClgEN = new clsXzClgEN();
  if (strJSON === '') {
    return pobjXzClgEN;
  }
  try {
    pobjXzClgEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjXzClgEN;
  }
  return pobjXzClgEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function XzClg_GetCombineCondition(objXzClgCond: clsXzClgEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objXzClgCond.dicFldComparisonOp,
      clsXzClgEN.con_IdXzCollege,
    ) == true
  ) {
    const strComparisonOpIdXzCollege: string =
      objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_IdXzCollege];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzClgEN.con_IdXzCollege,
      objXzClgCond.idXzCollege,
      strComparisonOpIdXzCollege,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzClgCond.dicFldComparisonOp,
      clsXzClgEN.con_CollegeId,
    ) == true
  ) {
    const strComparisonOpCollegeId: string =
      objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_CollegeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzClgEN.con_CollegeId,
      objXzClgCond.collegeId,
      strComparisonOpCollegeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzClgCond.dicFldComparisonOp,
      clsXzClgEN.con_CollegeName,
    ) == true
  ) {
    const strComparisonOpCollegeName: string =
      objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_CollegeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzClgEN.con_CollegeName,
      objXzClgCond.collegeName,
      strComparisonOpCollegeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzClgCond.dicFldComparisonOp,
      clsXzClgEN.con_CollegeNameA,
    ) == true
  ) {
    const strComparisonOpCollegeNameA: string =
      objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_CollegeNameA];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzClgEN.con_CollegeNameA,
      objXzClgCond.collegeNameA,
      strComparisonOpCollegeNameA,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzClgCond.dicFldComparisonOp,
      clsXzClgEN.con_ClgEnglishName,
    ) == true
  ) {
    const strComparisonOpClgEnglishName: string =
      objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_ClgEnglishName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzClgEN.con_ClgEnglishName,
      objXzClgCond.clgEnglishName,
      strComparisonOpClgEnglishName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzClgCond.dicFldComparisonOp,
      clsXzClgEN.con_UserType,
    ) == true
  ) {
    const strComparisonOpUserType: string =
      objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_UserType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzClgEN.con_UserType,
      objXzClgCond.userType,
      strComparisonOpUserType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzClgCond.dicFldComparisonOp,
      clsXzClgEN.con_CollegeIdInGP,
    ) == true
  ) {
    const strComparisonOpCollegeIdInGP: string =
      objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_CollegeIdInGP];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzClgEN.con_CollegeIdInGP,
      objXzClgCond.collegeIdInGP,
      strComparisonOpCollegeIdInGP,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzClgCond.dicFldComparisonOp,
      clsXzClgEN.con_IdSchool,
    ) == true
  ) {
    const strComparisonOpIdSchool: string =
      objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_IdSchool];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzClgEN.con_IdSchool,
      objXzClgCond.idSchool,
      strComparisonOpIdSchool,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objXzClgCond.dicFldComparisonOp, clsXzClgEN.con_IdUni) ==
    true
  ) {
    const strComparisonOpIdUni: string = objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_IdUni];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzClgEN.con_IdUni,
      objXzClgCond.idUni,
      strComparisonOpIdUni,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzClgCond.dicFldComparisonOp,
      clsXzClgEN.con_PhoneNumber,
    ) == true
  ) {
    const strComparisonOpPhoneNumber: string =
      objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_PhoneNumber];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzClgEN.con_PhoneNumber,
      objXzClgCond.phoneNumber,
      strComparisonOpPhoneNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objXzClgCond.dicFldComparisonOp, clsXzClgEN.con_WebSite) ==
    true
  ) {
    const strComparisonOpWebSite: string = objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_WebSite];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzClgEN.con_WebSite,
      objXzClgCond.webSite,
      strComparisonOpWebSite,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzClgCond.dicFldComparisonOp,
      clsXzClgEN.con_IsVisible,
    ) == true
  ) {
    if (objXzClgCond.isVisible == true) {
      strWhereCond += Format(" And {0} = '1'", clsXzClgEN.con_IsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsXzClgEN.con_IsVisible);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzClgCond.dicFldComparisonOp,
      clsXzClgEN.con_IsVisible4Tea,
    ) == true
  ) {
    if (objXzClgCond.isVisible4Tea == true) {
      strWhereCond += Format(" And {0} = '1'", clsXzClgEN.con_IsVisible4Tea);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsXzClgEN.con_IsVisible4Tea);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzClgCond.dicFldComparisonOp,
      clsXzClgEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsXzClgEN.con_OrderNum,
      objXzClgCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzClgCond.dicFldComparisonOp,
      clsXzClgEN.con_ModifyDate,
    ) == true
  ) {
    const strComparisonOpModifyDate: string =
      objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_ModifyDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzClgEN.con_ModifyDate,
      objXzClgCond.modifyDate,
      strComparisonOpModifyDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzClgCond.dicFldComparisonOp,
      clsXzClgEN.con_ModifyUserId,
    ) == true
  ) {
    const strComparisonOpModifyUserId: string =
      objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_ModifyUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzClgEN.con_ModifyUserId,
      objXzClgCond.modifyUserId,
      strComparisonOpModifyUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objXzClgCond.dicFldComparisonOp, clsXzClgEN.con_Memo) ==
    true
  ) {
    const strComparisonOpMemo: string = objXzClgCond.dicFldComparisonOp[clsXzClgEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzClgEN.con_Memo,
      objXzClgCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objXzClgENS:源对象
 * @param objXzClgENT:目标对象
 */
export function XzClg_GetObjFromJsonObj(objXzClgENS: clsXzClgEN): clsXzClgEN {
  const objXzClgENT: clsXzClgEN = new clsXzClgEN();
  ObjectAssign(objXzClgENT, objXzClgENS);
  return objXzClgENT;
}
