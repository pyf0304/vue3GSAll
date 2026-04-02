/**
 * 类名:clsvXzMajorWApi
 * 表名:vXzMajor(01120066)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:55
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
 * v专业(vXzMajor)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月08日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsvXzMajorEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vXzMajor_Controller = 'vXzMajorApi';
export const vXzMajor_ConstructorName = 'vXzMajor';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdXzMajor:关键字
 * @returns 对象
 **/
export async function vXzMajor_GetObjByIdXzMajorAsync(
  strIdXzMajor: string,
): Promise<clsvXzMajorEN | null> {
  const strThisFuncName = 'GetObjByIdXzMajorAsync';

  if (IsNullOrEmpty(strIdXzMajor) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajor]不能为空!(In clsvXzMajorWApi.GetObjByIdXzMajorAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajor.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajor]的长度:[{0}]不正确!(clsvXzMajorWApi.GetObjByIdXzMajorAsync)',
      strIdXzMajor.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdXzMajor';
  const strUrl = GetWebApiUrl(vXzMajor_Controller, strAction);

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
      const objvXzMajor = vXzMajor_GetObjFromJsonObj(returnObj);
      return objvXzMajor;
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
        vXzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vXzMajor_ConstructorName,
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
export async function vXzMajor_GetObjByIdXzMajorCache(
  strIdXzMajor: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByIdXzMajorCache';

  if (IsNullOrEmpty(strIdXzMajor) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajor]不能为空!(In clsvXzMajorWApi.GetObjByIdXzMajorCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajor.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajor]的长度:[{0}]不正确!(clsvXzMajorWApi.GetObjByIdXzMajorCache)',
      strIdXzMajor.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvXzMajorObjLstCache = await vXzMajor_GetObjLstCache();
  try {
    const arrvXzMajorSel = arrvXzMajorObjLstCache.filter((x) => x.idXzMajor == strIdXzMajor);
    let objvXzMajor: clsvXzMajorEN;
    if (arrvXzMajorSel.length > 0) {
      objvXzMajor = arrvXzMajorSel[0];
      return objvXzMajor;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvXzMajorConst = await vXzMajor_GetObjByIdXzMajorAsync(strIdXzMajor);
        if (objvXzMajorConst != null) {
          vXzMajor_ReFreshThisCache();
          return objvXzMajorConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdXzMajor,
      vXzMajor_ConstructorName,
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
export async function vXzMajor_GetObjByIdXzMajorlocalStorage(strIdXzMajor: string) {
  const strThisFuncName = 'GetObjByIdXzMajorlocalStorage';

  if (IsNullOrEmpty(strIdXzMajor) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajor]不能为空!(In clsvXzMajorWApi.GetObjByIdXzMajorlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajor.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajor]的长度:[{0}]不正确!(clsvXzMajorWApi.GetObjByIdXzMajorlocalStorage)',
      strIdXzMajor.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvXzMajorEN._CurrTabName, strIdXzMajor);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvXzMajorCache: clsvXzMajorEN = JSON.parse(strTempObj);
    return objvXzMajorCache;
  }
  try {
    const objvXzMajor = await vXzMajor_GetObjByIdXzMajorAsync(strIdXzMajor);
    if (objvXzMajor != null) {
      localStorage.setItem(strKey, JSON.stringify(objvXzMajor));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvXzMajor;
    }
    return objvXzMajor;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdXzMajor,
      vXzMajor_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdXzMajor:所给的关键字
 * @returns 对象
 */
export async function vXzMajor_GetNameByIdXzMajorCache(strIdXzMajor: string) {
  if (IsNullOrEmpty(strIdXzMajor) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajor]不能为空!(In clsvXzMajorWApi.GetNameByIdXzMajorCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajor.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajor]的长度:[{0}]不正确!(clsvXzMajorWApi.GetNameByIdXzMajorCache)',
      strIdXzMajor.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvXzMajorObjLstCache = await vXzMajor_GetObjLstCache();
  if (arrvXzMajorObjLstCache == null) return '';
  try {
    const arrvXzMajorSel = arrvXzMajorObjLstCache.filter((x) => x.idXzMajor == strIdXzMajor);
    let objvXzMajor: clsvXzMajorEN;
    if (arrvXzMajorSel.length > 0) {
      objvXzMajor = arrvXzMajorSel[0];
      return objvXzMajor.majorName;
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
export async function vXzMajor_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvXzMajorEN.con_IdXzMajor) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvXzMajorEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvXzMajorEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdXzMajor = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvXzMajor = await vXzMajor_GetObjByIdXzMajorCache(strIdXzMajor);
  if (objvXzMajor == null) return '';
  if (objvXzMajor.GetFldValue(strOutFldName) == null) return '';
  return objvXzMajor.GetFldValue(strOutFldName).toString();
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
export function vXzMajor_SortFunDefa(a: clsvXzMajorEN, b: clsvXzMajorEN): number {
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
export function vXzMajor_SortFunDefa2Fld(a: clsvXzMajorEN, b: clsvXzMajorEN): number {
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
export function vXzMajor_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvXzMajorEN.con_IdXzMajor:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          return a.idXzMajor.localeCompare(b.idXzMajor);
        };
      case clsvXzMajorEN.con_MajorID:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          return a.majorID.localeCompare(b.majorID);
        };
      case clsvXzMajorEN.con_MajorName:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          return a.majorName.localeCompare(b.majorName);
        };
      case clsvXzMajorEN.con_MajorEnglishName:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (a.majorEnglishName == null) return -1;
          if (b.majorEnglishName == null) return 1;
          return a.majorEnglishName.localeCompare(b.majorEnglishName);
        };
      case clsvXzMajorEN.con_MajorExplain:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (a.majorExplain == null) return -1;
          if (b.majorExplain == null) return 1;
          return a.majorExplain.localeCompare(b.majorExplain);
        };
      case clsvXzMajorEN.con_MajorNationalID:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (a.majorNationalID == null) return -1;
          if (b.majorNationalID == null) return 1;
          return a.majorNationalID.localeCompare(b.majorNationalID);
        };
      case clsvXzMajorEN.con_IdXzCollege:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (a.idXzCollege == null) return -1;
          if (b.idXzCollege == null) return 1;
          return a.idXzCollege.localeCompare(b.idXzCollege);
        };
      case clsvXzMajorEN.con_CollegeId:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          return a.collegeId.localeCompare(b.collegeId);
        };
      case clsvXzMajorEN.con_CollegeName:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsvXzMajorEN.con_CollegeNameA:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (a.collegeNameA == null) return -1;
          if (b.collegeNameA == null) return 1;
          return a.collegeNameA.localeCompare(b.collegeNameA);
        };
      case clsvXzMajorEN.con_IdMajorType:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (a.idMajorType == null) return -1;
          if (b.idMajorType == null) return 1;
          return a.idMajorType.localeCompare(b.idMajorType);
        };
      case clsvXzMajorEN.con_MajorTypeName:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          return a.majorTypeName.localeCompare(b.majorTypeName);
        };
      case clsvXzMajorEN.con_IdDegreeType:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (a.idDegreeType == null) return -1;
          if (b.idDegreeType == null) return 1;
          return a.idDegreeType.localeCompare(b.idDegreeType);
        };
      case clsvXzMajorEN.con_XwTypeDesc:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          return a.xwTypeDesc.localeCompare(b.xwTypeDesc);
        };
      case clsvXzMajorEN.con_IsMainMajor:
        return (a: clsvXzMajorEN) => {
          if (a.isMainMajor == true) return 1;
          else return -1;
        };
      case clsvXzMajorEN.con_MajorDirection:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (a.majorDirection == null) return -1;
          if (b.majorDirection == null) return 1;
          return a.majorDirection.localeCompare(b.majorDirection);
        };
      case clsvXzMajorEN.con_IsVisible:
        return (a: clsvXzMajorEN) => {
          if (a.isVisible == true) return 1;
          else return -1;
        };
      case clsvXzMajorEN.con_IsNormal:
        return (a: clsvXzMajorEN) => {
          if (a.isNormal == true) return 1;
          else return -1;
        };
      case clsvXzMajorEN.con_ModifyDate:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (a.modifyDate == null) return -1;
          if (b.modifyDate == null) return 1;
          return a.modifyDate.localeCompare(b.modifyDate);
        };
      case clsvXzMajorEN.con_ModifyUserId:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (a.modifyUserId == null) return -1;
          if (b.modifyUserId == null) return 1;
          return a.modifyUserId.localeCompare(b.modifyUserId);
        };
      case clsvXzMajorEN.con_Memo:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvXzMajorEN.con_IsVisible4XzClg:
        return (a: clsvXzMajorEN) => {
          if (a.isVisible4XzClg == true) return 1;
          else return -1;
        };
      case clsvXzMajorEN.con_TypeName:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (a.typeName == null) return -1;
          if (b.typeName == null) return 1;
          return a.typeName.localeCompare(b.typeName);
        };
      case clsvXzMajorEN.con_IdXzMajorShoolType:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (a.idXzMajorShoolType == null) return -1;
          if (b.idXzMajorShoolType == null) return 1;
          return a.idXzMajorShoolType.localeCompare(b.idXzMajorShoolType);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vXzMajor]中不存在!(in ${vXzMajor_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvXzMajorEN.con_IdXzMajor:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          return b.idXzMajor.localeCompare(a.idXzMajor);
        };
      case clsvXzMajorEN.con_MajorID:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          return b.majorID.localeCompare(a.majorID);
        };
      case clsvXzMajorEN.con_MajorName:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          return b.majorName.localeCompare(a.majorName);
        };
      case clsvXzMajorEN.con_MajorEnglishName:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (b.majorEnglishName == null) return -1;
          if (a.majorEnglishName == null) return 1;
          return b.majorEnglishName.localeCompare(a.majorEnglishName);
        };
      case clsvXzMajorEN.con_MajorExplain:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (b.majorExplain == null) return -1;
          if (a.majorExplain == null) return 1;
          return b.majorExplain.localeCompare(a.majorExplain);
        };
      case clsvXzMajorEN.con_MajorNationalID:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (b.majorNationalID == null) return -1;
          if (a.majorNationalID == null) return 1;
          return b.majorNationalID.localeCompare(a.majorNationalID);
        };
      case clsvXzMajorEN.con_IdXzCollege:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (b.idXzCollege == null) return -1;
          if (a.idXzCollege == null) return 1;
          return b.idXzCollege.localeCompare(a.idXzCollege);
        };
      case clsvXzMajorEN.con_CollegeId:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          return b.collegeId.localeCompare(a.collegeId);
        };
      case clsvXzMajorEN.con_CollegeName:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsvXzMajorEN.con_CollegeNameA:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (b.collegeNameA == null) return -1;
          if (a.collegeNameA == null) return 1;
          return b.collegeNameA.localeCompare(a.collegeNameA);
        };
      case clsvXzMajorEN.con_IdMajorType:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (b.idMajorType == null) return -1;
          if (a.idMajorType == null) return 1;
          return b.idMajorType.localeCompare(a.idMajorType);
        };
      case clsvXzMajorEN.con_MajorTypeName:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          return b.majorTypeName.localeCompare(a.majorTypeName);
        };
      case clsvXzMajorEN.con_IdDegreeType:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (b.idDegreeType == null) return -1;
          if (a.idDegreeType == null) return 1;
          return b.idDegreeType.localeCompare(a.idDegreeType);
        };
      case clsvXzMajorEN.con_XwTypeDesc:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          return b.xwTypeDesc.localeCompare(a.xwTypeDesc);
        };
      case clsvXzMajorEN.con_IsMainMajor:
        return (b: clsvXzMajorEN) => {
          if (b.isMainMajor == true) return 1;
          else return -1;
        };
      case clsvXzMajorEN.con_MajorDirection:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (b.majorDirection == null) return -1;
          if (a.majorDirection == null) return 1;
          return b.majorDirection.localeCompare(a.majorDirection);
        };
      case clsvXzMajorEN.con_IsVisible:
        return (b: clsvXzMajorEN) => {
          if (b.isVisible == true) return 1;
          else return -1;
        };
      case clsvXzMajorEN.con_IsNormal:
        return (b: clsvXzMajorEN) => {
          if (b.isNormal == true) return 1;
          else return -1;
        };
      case clsvXzMajorEN.con_ModifyDate:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (b.modifyDate == null) return -1;
          if (a.modifyDate == null) return 1;
          return b.modifyDate.localeCompare(a.modifyDate);
        };
      case clsvXzMajorEN.con_ModifyUserId:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (b.modifyUserId == null) return -1;
          if (a.modifyUserId == null) return 1;
          return b.modifyUserId.localeCompare(a.modifyUserId);
        };
      case clsvXzMajorEN.con_Memo:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvXzMajorEN.con_IsVisible4XzClg:
        return (b: clsvXzMajorEN) => {
          if (b.isVisible4XzClg == true) return 1;
          else return -1;
        };
      case clsvXzMajorEN.con_TypeName:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (b.typeName == null) return -1;
          if (a.typeName == null) return 1;
          return b.typeName.localeCompare(a.typeName);
        };
      case clsvXzMajorEN.con_IdXzMajorShoolType:
        return (a: clsvXzMajorEN, b: clsvXzMajorEN) => {
          if (b.idXzMajorShoolType == null) return -1;
          if (a.idXzMajorShoolType == null) return 1;
          return b.idXzMajorShoolType.localeCompare(a.idXzMajorShoolType);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vXzMajor]中不存在!(in ${vXzMajor_ConstructorName}.${strThisFuncName})`;
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
export async function vXzMajor_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvXzMajorEN.con_IdXzMajor:
      return (obj: clsvXzMajorEN) => {
        return obj.idXzMajor === value;
      };
    case clsvXzMajorEN.con_MajorID:
      return (obj: clsvXzMajorEN) => {
        return obj.majorID === value;
      };
    case clsvXzMajorEN.con_MajorName:
      return (obj: clsvXzMajorEN) => {
        return obj.majorName === value;
      };
    case clsvXzMajorEN.con_MajorEnglishName:
      return (obj: clsvXzMajorEN) => {
        return obj.majorEnglishName === value;
      };
    case clsvXzMajorEN.con_MajorExplain:
      return (obj: clsvXzMajorEN) => {
        return obj.majorExplain === value;
      };
    case clsvXzMajorEN.con_MajorNationalID:
      return (obj: clsvXzMajorEN) => {
        return obj.majorNationalID === value;
      };
    case clsvXzMajorEN.con_IdXzCollege:
      return (obj: clsvXzMajorEN) => {
        return obj.idXzCollege === value;
      };
    case clsvXzMajorEN.con_CollegeId:
      return (obj: clsvXzMajorEN) => {
        return obj.collegeId === value;
      };
    case clsvXzMajorEN.con_CollegeName:
      return (obj: clsvXzMajorEN) => {
        return obj.collegeName === value;
      };
    case clsvXzMajorEN.con_CollegeNameA:
      return (obj: clsvXzMajorEN) => {
        return obj.collegeNameA === value;
      };
    case clsvXzMajorEN.con_IdMajorType:
      return (obj: clsvXzMajorEN) => {
        return obj.idMajorType === value;
      };
    case clsvXzMajorEN.con_MajorTypeName:
      return (obj: clsvXzMajorEN) => {
        return obj.majorTypeName === value;
      };
    case clsvXzMajorEN.con_IdDegreeType:
      return (obj: clsvXzMajorEN) => {
        return obj.idDegreeType === value;
      };
    case clsvXzMajorEN.con_XwTypeDesc:
      return (obj: clsvXzMajorEN) => {
        return obj.xwTypeDesc === value;
      };
    case clsvXzMajorEN.con_IsMainMajor:
      return (obj: clsvXzMajorEN) => {
        return obj.isMainMajor === value;
      };
    case clsvXzMajorEN.con_MajorDirection:
      return (obj: clsvXzMajorEN) => {
        return obj.majorDirection === value;
      };
    case clsvXzMajorEN.con_IsVisible:
      return (obj: clsvXzMajorEN) => {
        return obj.isVisible === value;
      };
    case clsvXzMajorEN.con_IsNormal:
      return (obj: clsvXzMajorEN) => {
        return obj.isNormal === value;
      };
    case clsvXzMajorEN.con_ModifyDate:
      return (obj: clsvXzMajorEN) => {
        return obj.modifyDate === value;
      };
    case clsvXzMajorEN.con_ModifyUserId:
      return (obj: clsvXzMajorEN) => {
        return obj.modifyUserId === value;
      };
    case clsvXzMajorEN.con_Memo:
      return (obj: clsvXzMajorEN) => {
        return obj.memo === value;
      };
    case clsvXzMajorEN.con_IsVisible4XzClg:
      return (obj: clsvXzMajorEN) => {
        return obj.isVisible4XzClg === value;
      };
    case clsvXzMajorEN.con_TypeName:
      return (obj: clsvXzMajorEN) => {
        return obj.typeName === value;
      };
    case clsvXzMajorEN.con_IdXzMajorShoolType:
      return (obj: clsvXzMajorEN) => {
        return obj.idXzMajorShoolType === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vXzMajor]中不存在!(in ${vXzMajor_ConstructorName}.${strThisFuncName})`;
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
export async function vXzMajor_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvXzMajorEN.con_IdXzMajor) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvXzMajor = await vXzMajor_GetObjLstCache();
  if (arrvXzMajor == null) return [];
  let arrvXzMajorSel = arrvXzMajor;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvXzMajorSel = arrvXzMajorSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvXzMajorSel = arrvXzMajorSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvXzMajorSel = arrvXzMajorSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrvXzMajorSel.length == 0) return [];
  return arrvXzMajorSel.map((x) => x.idXzMajor);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vXzMajor_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vXzMajor_Controller, strAction);

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
        vXzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vXzMajor_ConstructorName,
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
export async function vXzMajor_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vXzMajor_Controller, strAction);

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
        vXzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vXzMajor_ConstructorName,
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
export async function vXzMajor_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvXzMajorEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vXzMajor_Controller, strAction);

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
      const objvXzMajor = vXzMajor_GetObjFromJsonObj(returnObj);
      return objvXzMajor;
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
        vXzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vXzMajor_ConstructorName,
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
export async function vXzMajor_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvXzMajorEN._CurrTabName;
  if (IsNullOrEmpty(clsvXzMajorEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvXzMajorEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvXzMajorExObjLstCache: Array<clsvXzMajorEN> = CacheHelper.Get(strKey);
    const arrvXzMajorObjLstT = vXzMajor_GetObjLstByJSONObjLst(arrvXzMajorExObjLstCache);
    return arrvXzMajorObjLstT;
  }
  try {
    const arrvXzMajorExObjLst = await vXzMajor_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvXzMajorExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvXzMajorExObjLst.length,
    );
    console.log(strInfo);
    return arrvXzMajorExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vXzMajor_ConstructorName,
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
export async function vXzMajor_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvXzMajorEN._CurrTabName;
  if (IsNullOrEmpty(clsvXzMajorEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvXzMajorEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvXzMajorExObjLstCache: Array<clsvXzMajorEN> = JSON.parse(strTempObjLst);
    const arrvXzMajorObjLstT = vXzMajor_GetObjLstByJSONObjLst(arrvXzMajorExObjLstCache);
    return arrvXzMajorObjLstT;
  }
  try {
    const arrvXzMajorExObjLst = await vXzMajor_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvXzMajorExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvXzMajorExObjLst.length,
    );
    console.log(strInfo);
    return arrvXzMajorExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vXzMajor_ConstructorName,
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
export async function vXzMajor_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvXzMajorEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvXzMajorObjLstCache: Array<clsvXzMajorEN> = JSON.parse(strTempObjLst);
    return arrvXzMajorObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vXzMajor_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvXzMajorEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vXzMajor_Controller, strAction);

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
          vXzMajor_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vXzMajor_GetObjLstByJSONObjLst(returnObjLst);
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
        vXzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vXzMajor_ConstructorName,
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
export async function vXzMajor_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvXzMajorEN._CurrTabName;
  if (IsNullOrEmpty(clsvXzMajorEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvXzMajorEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvXzMajorExObjLstCache: Array<clsvXzMajorEN> = JSON.parse(strTempObjLst);
    const arrvXzMajorObjLstT = vXzMajor_GetObjLstByJSONObjLst(arrvXzMajorExObjLstCache);
    return arrvXzMajorObjLstT;
  }
  try {
    const arrvXzMajorExObjLst = await vXzMajor_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvXzMajorExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvXzMajorExObjLst.length,
    );
    console.log(strInfo);
    return arrvXzMajorExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vXzMajor_ConstructorName,
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
export async function vXzMajor_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvXzMajorEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvXzMajorObjLstCache: Array<clsvXzMajorEN> = JSON.parse(strTempObjLst);
    return arrvXzMajorObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vXzMajor_GetObjLstCache(): Promise<Array<clsvXzMajorEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvXzMajorObjLstCache;
  switch (clsvXzMajorEN.CacheModeId) {
    case '04': //sessionStorage
      arrvXzMajorObjLstCache = await vXzMajor_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvXzMajorObjLstCache = await vXzMajor_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvXzMajorObjLstCache = await vXzMajor_GetObjLstClientCache();
      break;
    default:
      arrvXzMajorObjLstCache = await vXzMajor_GetObjLstClientCache();
      break;
  }
  return arrvXzMajorObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vXzMajor_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvXzMajorObjLstCache;
  switch (clsvXzMajorEN.CacheModeId) {
    case '04': //sessionStorage
      arrvXzMajorObjLstCache = await vXzMajor_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvXzMajorObjLstCache = await vXzMajor_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvXzMajorObjLstCache = null;
      break;
    default:
      arrvXzMajorObjLstCache = null;
      break;
  }
  return arrvXzMajorObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdXzMajorCond:条件对象
 * @returns 对象列表子集
 */
export async function vXzMajor_GetSubObjLstCache(objvXzMajorCond: clsvXzMajorEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvXzMajorObjLstCache = await vXzMajor_GetObjLstCache();
  let arrvXzMajorSel = arrvXzMajorObjLstCache;
  if (objvXzMajorCond.sfFldComparisonOp == null || objvXzMajorCond.sfFldComparisonOp == '')
    return arrvXzMajorSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvXzMajorCond.sfFldComparisonOp,
  );
  //console.log("clsvXzMajorWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvXzMajorCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvXzMajorCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvXzMajorSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvXzMajorCond),
      vXzMajor_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvXzMajorEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdXzMajor:关键字列表
 * @returns 对象列表
 **/
export async function vXzMajor_GetObjLstByIdXzMajorLstAsync(
  arrIdXzMajor: Array<string>,
): Promise<Array<clsvXzMajorEN>> {
  const strThisFuncName = 'GetObjLstByIdXzMajorLstAsync';
  const strAction = 'GetObjLstByIdXzMajorLst';
  const strUrl = GetWebApiUrl(vXzMajor_Controller, strAction);

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
          vXzMajor_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vXzMajor_GetObjLstByJSONObjLst(returnObjLst);
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
        vXzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vXzMajor_ConstructorName,
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
export async function vXzMajor_GetObjLstByIdXzMajorLstCache(arrIdXzMajorLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByIdXzMajorLstCache';
  try {
    const arrvXzMajorObjLstCache = await vXzMajor_GetObjLstCache();
    const arrvXzMajorSel = arrvXzMajorObjLstCache.filter(
      (x) => arrIdXzMajorLst.indexOf(x.idXzMajor) > -1,
    );
    return arrvXzMajorSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdXzMajorLst.join(','),
      vXzMajor_ConstructorName,
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
export async function vXzMajor_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvXzMajorEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vXzMajor_Controller, strAction);

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
          vXzMajor_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vXzMajor_GetObjLstByJSONObjLst(returnObjLst);
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
        vXzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vXzMajor_ConstructorName,
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
export async function vXzMajor_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvXzMajorEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vXzMajor_Controller, strAction);

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
          vXzMajor_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vXzMajor_GetObjLstByJSONObjLst(returnObjLst);
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
        vXzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vXzMajor_ConstructorName,
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
export async function vXzMajor_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvXzMajorEN>();
  const arrvXzMajorObjLstCache = await vXzMajor_GetObjLstCache();
  if (arrvXzMajorObjLstCache.length == 0) return arrvXzMajorObjLstCache;
  let arrvXzMajorSel = arrvXzMajorObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvXzMajorCond = new clsvXzMajorEN();
  ObjectAssign(objvXzMajorCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvXzMajorWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvXzMajorCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvXzMajorSel.length == 0) return arrvXzMajorSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvXzMajorSel = arrvXzMajorSel.sort(vXzMajor_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvXzMajorSel = arrvXzMajorSel.sort(objPagerPara.sortFun);
    }
    arrvXzMajorSel = arrvXzMajorSel.slice(intStart, intEnd);
    return arrvXzMajorSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vXzMajor_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvXzMajorEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vXzMajor_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvXzMajorEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvXzMajorEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vXzMajor_Controller, strAction);

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
          vXzMajor_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vXzMajor_GetObjLstByJSONObjLst(returnObjLst);
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
        vXzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vXzMajor_ConstructorName,
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
export async function vXzMajor_IsExistRecordCache(objvXzMajorCond: clsvXzMajorEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvXzMajorObjLstCache = await vXzMajor_GetObjLstCache();
  if (arrvXzMajorObjLstCache == null) return false;
  let arrvXzMajorSel = arrvXzMajorObjLstCache;
  if (objvXzMajorCond.sfFldComparisonOp == null || objvXzMajorCond.sfFldComparisonOp == '')
    return arrvXzMajorSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvXzMajorCond.sfFldComparisonOp,
  );
  //console.log("clsvXzMajorWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvXzMajorCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvXzMajorCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvXzMajorSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvXzMajorCond),
      vXzMajor_ConstructorName,
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
export async function vXzMajor_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vXzMajor_Controller, strAction);

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
        vXzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vXzMajor_ConstructorName,
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
export async function vXzMajor_IsExistCache(strIdXzMajor: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvXzMajorObjLstCache = await vXzMajor_GetObjLstCache();
  if (arrvXzMajorObjLstCache == null) return false;
  try {
    const arrvXzMajorSel = arrvXzMajorObjLstCache.filter((x) => x.idXzMajor == strIdXzMajor);
    if (arrvXzMajorSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdXzMajor,
      vXzMajor_ConstructorName,
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
export async function vXzMajor_IsExistAsync(strIdXzMajor: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vXzMajor_Controller, strAction);

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
        vXzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vXzMajor_ConstructorName,
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
export async function vXzMajor_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vXzMajor_Controller, strAction);

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
        vXzMajor_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vXzMajor_ConstructorName,
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
 * @param objvXzMajorCond:条件对象
 * @returns 对象列表记录数
 */
export async function vXzMajor_GetRecCountByCondCache(objvXzMajorCond: clsvXzMajorEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvXzMajorObjLstCache = await vXzMajor_GetObjLstCache();
  if (arrvXzMajorObjLstCache == null) return 0;
  let arrvXzMajorSel = arrvXzMajorObjLstCache;
  if (objvXzMajorCond.sfFldComparisonOp == null || objvXzMajorCond.sfFldComparisonOp == '')
    return arrvXzMajorSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvXzMajorCond.sfFldComparisonOp,
  );
  //console.log("clsvXzMajorWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvXzMajorCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvXzMajorCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvXzMajorSel = arrvXzMajorSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvXzMajorSel = arrvXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvXzMajorSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvXzMajorCond),
      vXzMajor_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vXzMajor_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vXzMajor_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvXzMajorEN._CurrTabName;
    switch (clsvXzMajorEN.CacheModeId) {
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
export async function vXzMajor_Cache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In )', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：Cache");
  const arrObjLstSel = await vXzMajor_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvXzMajorEN.con_IdXzMajor,
    clsvXzMajorEN.con_MajorName,
    'v专业',
  );
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vXzMajor_GetJSONStrByObj(pobjvXzMajorEN: clsvXzMajorEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvXzMajorEN);
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
export function vXzMajor_GetObjLstByJSONStr(strJSON: string): Array<clsvXzMajorEN> {
  let arrvXzMajorObjLst = new Array<clsvXzMajorEN>();
  if (strJSON === '') {
    return arrvXzMajorObjLst;
  }
  try {
    arrvXzMajorObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvXzMajorObjLst;
  }
  return arrvXzMajorObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvXzMajorObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vXzMajor_GetObjLstByJSONObjLst(
  arrvXzMajorObjLstS: Array<clsvXzMajorEN>,
): Array<clsvXzMajorEN> {
  const arrvXzMajorObjLst = new Array<clsvXzMajorEN>();
  for (const objInFor of arrvXzMajorObjLstS) {
    const obj1 = vXzMajor_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvXzMajorObjLst.push(obj1);
  }
  return arrvXzMajorObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vXzMajor_GetObjByJSONStr(strJSON: string): clsvXzMajorEN {
  let pobjvXzMajorEN = new clsvXzMajorEN();
  if (strJSON === '') {
    return pobjvXzMajorEN;
  }
  try {
    pobjvXzMajorEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvXzMajorEN;
  }
  return pobjvXzMajorEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vXzMajor_GetCombineCondition(objvXzMajorCond: clsvXzMajorEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_IdXzMajor,
    ) == true
  ) {
    const strComparisonOpIdXzMajor: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_IdXzMajor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_IdXzMajor,
      objvXzMajorCond.idXzMajor,
      strComparisonOpIdXzMajor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_MajorID,
    ) == true
  ) {
    const strComparisonOpMajorID: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_MajorID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_MajorID,
      objvXzMajorCond.majorID,
      strComparisonOpMajorID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_MajorName,
    ) == true
  ) {
    const strComparisonOpMajorName: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_MajorName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_MajorName,
      objvXzMajorCond.majorName,
      strComparisonOpMajorName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_MajorEnglishName,
    ) == true
  ) {
    const strComparisonOpMajorEnglishName: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_MajorEnglishName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_MajorEnglishName,
      objvXzMajorCond.majorEnglishName,
      strComparisonOpMajorEnglishName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_MajorExplain,
    ) == true
  ) {
    const strComparisonOpMajorExplain: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_MajorExplain];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_MajorExplain,
      objvXzMajorCond.majorExplain,
      strComparisonOpMajorExplain,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_MajorNationalID,
    ) == true
  ) {
    const strComparisonOpMajorNationalID: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_MajorNationalID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_MajorNationalID,
      objvXzMajorCond.majorNationalID,
      strComparisonOpMajorNationalID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_IdXzCollege,
    ) == true
  ) {
    const strComparisonOpIdXzCollege: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_IdXzCollege];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_IdXzCollege,
      objvXzMajorCond.idXzCollege,
      strComparisonOpIdXzCollege,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_CollegeId,
    ) == true
  ) {
    const strComparisonOpCollegeId: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_CollegeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_CollegeId,
      objvXzMajorCond.collegeId,
      strComparisonOpCollegeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_CollegeName,
    ) == true
  ) {
    const strComparisonOpCollegeName: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_CollegeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_CollegeName,
      objvXzMajorCond.collegeName,
      strComparisonOpCollegeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_CollegeNameA,
    ) == true
  ) {
    const strComparisonOpCollegeNameA: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_CollegeNameA];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_CollegeNameA,
      objvXzMajorCond.collegeNameA,
      strComparisonOpCollegeNameA,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_IdMajorType,
    ) == true
  ) {
    const strComparisonOpIdMajorType: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_IdMajorType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_IdMajorType,
      objvXzMajorCond.idMajorType,
      strComparisonOpIdMajorType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_MajorTypeName,
    ) == true
  ) {
    const strComparisonOpMajorTypeName: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_MajorTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_MajorTypeName,
      objvXzMajorCond.majorTypeName,
      strComparisonOpMajorTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_IdDegreeType,
    ) == true
  ) {
    const strComparisonOpIdDegreeType: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_IdDegreeType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_IdDegreeType,
      objvXzMajorCond.idDegreeType,
      strComparisonOpIdDegreeType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_XwTypeDesc,
    ) == true
  ) {
    const strComparisonOpXwTypeDesc: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_XwTypeDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_XwTypeDesc,
      objvXzMajorCond.xwTypeDesc,
      strComparisonOpXwTypeDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_IsMainMajor,
    ) == true
  ) {
    if (objvXzMajorCond.isMainMajor == true) {
      strWhereCond += Format(" And {0} = '1'", clsvXzMajorEN.con_IsMainMajor);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvXzMajorEN.con_IsMainMajor);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_MajorDirection,
    ) == true
  ) {
    const strComparisonOpMajorDirection: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_MajorDirection];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_MajorDirection,
      objvXzMajorCond.majorDirection,
      strComparisonOpMajorDirection,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_IsVisible,
    ) == true
  ) {
    if (objvXzMajorCond.isVisible == true) {
      strWhereCond += Format(" And {0} = '1'", clsvXzMajorEN.con_IsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvXzMajorEN.con_IsVisible);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_IsNormal,
    ) == true
  ) {
    if (objvXzMajorCond.isNormal == true) {
      strWhereCond += Format(" And {0} = '1'", clsvXzMajorEN.con_IsNormal);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvXzMajorEN.con_IsNormal);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_ModifyDate,
    ) == true
  ) {
    const strComparisonOpModifyDate: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_ModifyDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_ModifyDate,
      objvXzMajorCond.modifyDate,
      strComparisonOpModifyDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_ModifyUserId,
    ) == true
  ) {
    const strComparisonOpModifyUserId: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_ModifyUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_ModifyUserId,
      objvXzMajorCond.modifyUserId,
      strComparisonOpModifyUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_Memo,
      objvXzMajorCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_IsVisible4XzClg,
    ) == true
  ) {
    if (objvXzMajorCond.isVisible4XzClg == true) {
      strWhereCond += Format(" And {0} = '1'", clsvXzMajorEN.con_IsVisible4XzClg);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvXzMajorEN.con_IsVisible4XzClg);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_TypeName,
    ) == true
  ) {
    const strComparisonOpTypeName: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_TypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_TypeName,
      objvXzMajorCond.typeName,
      strComparisonOpTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvXzMajorCond.dicFldComparisonOp,
      clsvXzMajorEN.con_IdXzMajorShoolType,
    ) == true
  ) {
    const strComparisonOpIdXzMajorShoolType: string =
      objvXzMajorCond.dicFldComparisonOp[clsvXzMajorEN.con_IdXzMajorShoolType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvXzMajorEN.con_IdXzMajorShoolType,
      objvXzMajorCond.idXzMajorShoolType,
      strComparisonOpIdXzMajorShoolType,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvXzMajorENS:源对象
 * @param objvXzMajorENT:目标对象
 */
export function vXzMajor_CopyObjTo(
  objvXzMajorENS: clsvXzMajorEN,
  objvXzMajorENT: clsvXzMajorEN,
): void {
  objvXzMajorENT.idXzMajor = objvXzMajorENS.idXzMajor; //专业流水号
  objvXzMajorENT.majorID = objvXzMajorENS.majorID; //专业ID
  objvXzMajorENT.majorName = objvXzMajorENS.majorName; //专业名称
  objvXzMajorENT.majorEnglishName = objvXzMajorENS.majorEnglishName; //专业英文名称
  objvXzMajorENT.majorExplain = objvXzMajorENS.majorExplain; //专业说明
  objvXzMajorENT.majorNationalID = objvXzMajorENS.majorNationalID; //专业国家代码
  objvXzMajorENT.idXzCollege = objvXzMajorENS.idXzCollege; //学院流水号
  objvXzMajorENT.collegeId = objvXzMajorENS.collegeId; //学院ID
  objvXzMajorENT.collegeName = objvXzMajorENS.collegeName; //学院名称
  objvXzMajorENT.collegeNameA = objvXzMajorENS.collegeNameA; //学院名称简写
  objvXzMajorENT.idMajorType = objvXzMajorENS.idMajorType; //专业类型(文理工)流水号
  objvXzMajorENT.majorTypeName = objvXzMajorENS.majorTypeName; //专业类型名称
  objvXzMajorENT.idDegreeType = objvXzMajorENS.idDegreeType; //学位类型流水号
  objvXzMajorENT.xwTypeDesc = objvXzMajorENS.xwTypeDesc; //学位类型名称
  objvXzMajorENT.isMainMajor = objvXzMajorENS.isMainMajor; //是否重要专业
  objvXzMajorENT.majorDirection = objvXzMajorENS.majorDirection; //专业方向
  objvXzMajorENT.isVisible = objvXzMajorENS.isVisible; //是否显示
  objvXzMajorENT.isNormal = objvXzMajorENS.isNormal; //IsNormal
  objvXzMajorENT.modifyDate = objvXzMajorENS.modifyDate; //修改日期
  objvXzMajorENT.modifyUserId = objvXzMajorENS.modifyUserId; //修改人
  objvXzMajorENT.memo = objvXzMajorENS.memo; //备注
  objvXzMajorENT.isVisible4XzClg = objvXzMajorENS.isVisible4XzClg; //IsVisible4XzClg
  objvXzMajorENT.typeName = objvXzMajorENS.typeName; //类型名称
  objvXzMajorENT.idXzMajorShoolType = objvXzMajorENS.idXzMajorShoolType; //专业学校类型流水号
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvXzMajorENS:源对象
 * @param objvXzMajorENT:目标对象
 */
export function vXzMajor_GetObjFromJsonObj(objvXzMajorENS: clsvXzMajorEN): clsvXzMajorEN {
  const objvXzMajorENT: clsvXzMajorEN = new clsvXzMajorEN();
  ObjectAssign(objvXzMajorENT, objvXzMajorENS);
  return objvXzMajorENT;
}
