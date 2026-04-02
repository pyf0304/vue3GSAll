/**
 * 类名:clsvStudentInfoWApi
 * 表名:vStudentInfo(01120132)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:44:19
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
 * v学生(vStudentInfo)
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
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvStudentInfoEN } from '@/ts/L0Entity/UserManage/clsvStudentInfoEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vStudentInfo_Controller = 'vStudentInfoApi';
export const vStudentInfo_ConstructorName = 'vStudentInfo';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdStudentInfo:关键字
 * @returns 对象
 **/
export async function vStudentInfo_GetObjByIdStudentInfoAsync(
  strIdStudentInfo: string,
): Promise<clsvStudentInfoEN | null> {
  const strThisFuncName = 'GetObjByIdStudentInfoAsync';

  if (IsNullOrEmpty(strIdStudentInfo) == true) {
    const strMsg = Format(
      '参数:[strIdStudentInfo]不能为空!(In clsvStudentInfoWApi.GetObjByIdStudentInfoAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdStudentInfo.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdStudentInfo]的长度:[{0}]不正确!(clsvStudentInfoWApi.GetObjByIdStudentInfoAsync)',
      strIdStudentInfo.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdStudentInfo';
  const strUrl = GetWebApiUrl(vStudentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdStudentInfo,
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
      const objvStudentInfo = vStudentInfo_GetObjFromJsonObj(returnObj);
      return objvStudentInfo;
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
        vStudentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vStudentInfo_ConstructorName,
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
 * @param strIdStudentInfo:所给的关键字
 * @returns 对象
 */
export async function vStudentInfo_GetObjByIdStudentInfoCache(
  strIdStudentInfo: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByIdStudentInfoCache';

  if (IsNullOrEmpty(strIdStudentInfo) == true) {
    const strMsg = Format(
      '参数:[strIdStudentInfo]不能为空!(In clsvStudentInfoWApi.GetObjByIdStudentInfoCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdStudentInfo.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdStudentInfo]的长度:[{0}]不正确!(clsvStudentInfoWApi.GetObjByIdStudentInfoCache)',
      strIdStudentInfo.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvStudentInfoObjLstCache = await vStudentInfo_GetObjLstCache();
  try {
    const arrvStudentInfoSel = arrvStudentInfoObjLstCache.filter(
      (x) => x.idStudentInfo == strIdStudentInfo,
    );
    let objvStudentInfo: clsvStudentInfoEN;
    if (arrvStudentInfoSel.length > 0) {
      objvStudentInfo = arrvStudentInfoSel[0];
      return objvStudentInfo;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvStudentInfoConst = await vStudentInfo_GetObjByIdStudentInfoAsync(
          strIdStudentInfo,
        );
        if (objvStudentInfoConst != null) {
          vStudentInfo_ReFreshThisCache();
          return objvStudentInfoConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdStudentInfo,
      vStudentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdStudentInfo:所给的关键字
 * @returns 对象
 */
export async function vStudentInfo_GetObjByIdStudentInfolocalStorage(strIdStudentInfo: string) {
  const strThisFuncName = 'GetObjByIdStudentInfolocalStorage';

  if (IsNullOrEmpty(strIdStudentInfo) == true) {
    const strMsg = Format(
      '参数:[strIdStudentInfo]不能为空!(In clsvStudentInfoWApi.GetObjByIdStudentInfolocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdStudentInfo.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdStudentInfo]的长度:[{0}]不正确!(clsvStudentInfoWApi.GetObjByIdStudentInfolocalStorage)',
      strIdStudentInfo.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvStudentInfoEN._CurrTabName, strIdStudentInfo);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvStudentInfoCache: clsvStudentInfoEN = JSON.parse(strTempObj);
    return objvStudentInfoCache;
  }
  try {
    const objvStudentInfo = await vStudentInfo_GetObjByIdStudentInfoAsync(strIdStudentInfo);
    if (objvStudentInfo != null) {
      localStorage.setItem(strKey, JSON.stringify(objvStudentInfo));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvStudentInfo;
    }
    return objvStudentInfo;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdStudentInfo,
      vStudentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}
/*该表没有名称字段,不能生成此函数!*/

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
export async function vStudentInfo_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvStudentInfoEN.con_IdStudentInfo) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvStudentInfoEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvStudentInfoEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdStudentInfo = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvStudentInfo = await vStudentInfo_GetObjByIdStudentInfoCache(strIdStudentInfo);
  if (objvStudentInfo == null) return '';
  if (objvStudentInfo.GetFldValue(strOutFldName) == null) return '';
  return objvStudentInfo.GetFldValue(strOutFldName).toString();
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
export function vStudentInfo_SortFunDefa(a: clsvStudentInfoEN, b: clsvStudentInfoEN): number {
  return a.idStudentInfo.localeCompare(b.idStudentInfo);
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
export function vStudentInfo_SortFunDefa2Fld(a: clsvStudentInfoEN, b: clsvStudentInfoEN): number {
  if (a.stuId == b.stuId) return a.stuName.localeCompare(b.stuName);
  else return a.stuId.localeCompare(b.stuId);
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
export function vStudentInfo_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvStudentInfoEN.con_IdStudentInfo:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return a.idStudentInfo.localeCompare(b.idStudentInfo);
        };
      case clsvStudentInfoEN.con_StuId:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return a.stuId.localeCompare(b.stuId);
        };
      case clsvStudentInfoEN.con_StuName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return a.stuName.localeCompare(b.stuName);
        };
      case clsvStudentInfoEN.con_IdPolitics:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return a.idPolitics.localeCompare(b.idPolitics);
        };
      case clsvStudentInfoEN.con_PoliticsID:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.politicsID == null) return -1;
          if (b.politicsID == null) return 1;
          return a.politicsID.localeCompare(b.politicsID);
        };
      case clsvStudentInfoEN.con_PoliticsName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return a.politicsName.localeCompare(b.politicsName);
        };
      case clsvStudentInfoEN.con_IdSex:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return a.idSex.localeCompare(b.idSex);
        };
      case clsvStudentInfoEN.con_SexDesc:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.sexDesc == null) return -1;
          if (b.sexDesc == null) return 1;
          return a.sexDesc.localeCompare(b.sexDesc);
        };
      case clsvStudentInfoEN.con_IdEthnic:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return a.idEthnic.localeCompare(b.idEthnic);
        };
      case clsvStudentInfoEN.con_EthnicID:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.ethnicID == null) return -1;
          if (b.ethnicID == null) return 1;
          return a.ethnicID.localeCompare(b.ethnicID);
        };
      case clsvStudentInfoEN.con_EthnicName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.ethnicName == null) return -1;
          if (b.ethnicName == null) return 1;
          return a.ethnicName.localeCompare(b.ethnicName);
        };
      case clsvStudentInfoEN.con_IdUniZone:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return a.idUniZone.localeCompare(b.idUniZone);
        };
      case clsvStudentInfoEN.con_UniZoneDesc:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return a.uniZoneDesc.localeCompare(b.uniZoneDesc);
        };
      case clsvStudentInfoEN.con_IdStuType:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.idStuType == null) return -1;
          if (b.idStuType == null) return 1;
          return a.idStuType.localeCompare(b.idStuType);
        };
      case clsvStudentInfoEN.con_StuTypeID:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.stuTypeID == null) return -1;
          if (b.stuTypeID == null) return 1;
          return a.stuTypeID.localeCompare(b.stuTypeID);
        };
      case clsvStudentInfoEN.con_StuTypeDesc:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.stuTypeDesc == null) return -1;
          if (b.stuTypeDesc == null) return 1;
          return a.stuTypeDesc.localeCompare(b.stuTypeDesc);
        };
      case clsvStudentInfoEN.con_IdXzCollege:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.idXzCollege == null) return -1;
          if (b.idXzCollege == null) return 1;
          return a.idXzCollege.localeCompare(b.idXzCollege);
        };
      case clsvStudentInfoEN.con_CollegeId:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.collegeId == null) return -1;
          if (b.collegeId == null) return 1;
          return a.collegeId.localeCompare(b.collegeId);
        };
      case clsvStudentInfoEN.con_CollegeName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsvStudentInfoEN.con_CollegeIdInGP:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.collegeIdInGP == null) return -1;
          if (b.collegeIdInGP == null) return 1;
          return a.collegeIdInGP.localeCompare(b.collegeIdInGP);
        };
      case clsvStudentInfoEN.con_CollegeNameA:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.collegeNameA == null) return -1;
          if (b.collegeNameA == null) return 1;
          return a.collegeNameA.localeCompare(b.collegeNameA);
        };
      case clsvStudentInfoEN.con_IdXzMajor:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.idXzMajor == null) return -1;
          if (b.idXzMajor == null) return 1;
          return a.idXzMajor.localeCompare(b.idXzMajor);
        };
      case clsvStudentInfoEN.con_MajorID:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.majorID == null) return -1;
          if (b.majorID == null) return 1;
          return a.majorID.localeCompare(b.majorID);
        };
      case clsvStudentInfoEN.con_MajorName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return a.majorName.localeCompare(b.majorName);
        };
      case clsvStudentInfoEN.con_IsNormal:
        return (a: clsvStudentInfoEN) => {
          if (a.isNormal == true) return 1;
          else return -1;
        };
      case clsvStudentInfoEN.con_IdGradeBase:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return a.idGradeBase.localeCompare(b.idGradeBase);
        };
      case clsvStudentInfoEN.con_GradeBaseName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.gradeBaseName == null) return -1;
          if (b.gradeBaseName == null) return 1;
          return a.gradeBaseName.localeCompare(b.gradeBaseName);
        };
      case clsvStudentInfoEN.con_IdAdminCls:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return a.idAdminCls.localeCompare(b.idAdminCls);
        };
      case clsvStudentInfoEN.con_AdminClsName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.adminClsName == null) return -1;
          if (b.adminClsName == null) return 1;
          return a.adminClsName.localeCompare(b.adminClsName);
        };
      case clsvStudentInfoEN.con_AdminClsId:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.adminClsId == null) return -1;
          if (b.adminClsId == null) return 1;
          return a.adminClsId.localeCompare(b.adminClsId);
        };
      case clsvStudentInfoEN.con_IdAdminClsType:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.idAdminClsType == null) return -1;
          if (b.idAdminClsType == null) return 1;
          return a.idAdminClsType.localeCompare(b.idAdminClsType);
        };
      case clsvStudentInfoEN.con_AdminClsTypeName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.adminClsTypeName == null) return -1;
          if (b.adminClsTypeName == null) return 1;
          return a.adminClsTypeName.localeCompare(b.adminClsTypeName);
        };
      case clsvStudentInfoEN.con_Birthday:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.birthday == null) return -1;
          if (b.birthday == null) return 1;
          return a.birthday.localeCompare(b.birthday);
        };
      case clsvStudentInfoEN.con_NativePlace:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.nativePlace == null) return -1;
          if (b.nativePlace == null) return 1;
          return a.nativePlace.localeCompare(b.nativePlace);
        };
      case clsvStudentInfoEN.con_Duty:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.duty == null) return -1;
          if (b.duty == null) return 1;
          return a.duty.localeCompare(b.duty);
        };
      case clsvStudentInfoEN.con_IdCardNo:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.idCardNo == null) return -1;
          if (b.idCardNo == null) return 1;
          return a.idCardNo.localeCompare(b.idCardNo);
        };
      case clsvStudentInfoEN.con_StuCardNo:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.stuCardNo == null) return -1;
          if (b.stuCardNo == null) return 1;
          return a.stuCardNo.localeCompare(b.stuCardNo);
        };
      case clsvStudentInfoEN.con_LiveAddress:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.liveAddress == null) return -1;
          if (b.liveAddress == null) return 1;
          return a.liveAddress.localeCompare(b.liveAddress);
        };
      case clsvStudentInfoEN.con_HomePhone:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.homePhone == null) return -1;
          if (b.homePhone == null) return 1;
          return a.homePhone.localeCompare(b.homePhone);
        };
      case clsvStudentInfoEN.con_IdCardNo2:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.idCardNo2 == null) return -1;
          if (b.idCardNo2 == null) return 1;
          return a.idCardNo2.localeCompare(b.idCardNo2);
        };
      case clsvStudentInfoEN.con_CardNo:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.cardNo == null) return -1;
          if (b.cardNo == null) return 1;
          return a.cardNo.localeCompare(b.cardNo);
        };
      case clsvStudentInfoEN.con_IsAvconClassUser:
        return (a: clsvStudentInfoEN) => {
          if (a.isAvconClassUser == true) return 1;
          else return -1;
        };
      case clsvStudentInfoEN.con_IsAvconUser:
        return (a: clsvStudentInfoEN) => {
          if (a.isAvconUser == true) return 1;
          else return -1;
        };
      case clsvStudentInfoEN.con_IsGpUser:
        return (a: clsvStudentInfoEN) => {
          if (a.isGpUser == true) return 1;
          else return -1;
        };
      case clsvStudentInfoEN.con_IsLocalUser:
        return (a: clsvStudentInfoEN) => {
          if (a.isLocalUser == true) return 1;
          else return -1;
        };
      case clsvStudentInfoEN.con_IsLeaved:
        return (a: clsvStudentInfoEN) => {
          if (a.isLeaved == true) return 1;
          else return -1;
        };
      case clsvStudentInfoEN.con_UserId:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsvStudentInfoEN.con_UserId4Avcon:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.userId4Avcon == null) return -1;
          if (b.userId4Avcon == null) return 1;
          return a.userId4Avcon.localeCompare(b.userId4Avcon);
        };
      case clsvStudentInfoEN.con_EnrollmentDate:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.enrollmentDate == null) return -1;
          if (b.enrollmentDate == null) return 1;
          return a.enrollmentDate.localeCompare(b.enrollmentDate);
        };
      case clsvStudentInfoEN.con_PostCode:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.postCode == null) return -1;
          if (b.postCode == null) return 1;
          return a.postCode.localeCompare(b.postCode);
        };
      case clsvStudentInfoEN.con_Email:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.email == null) return -1;
          if (b.email == null) return 1;
          return a.email.localeCompare(b.email);
        };
      case clsvStudentInfoEN.con_IsMessage:
        return (a: clsvStudentInfoEN) => {
          if (a.isMessage == true) return 1;
          else return -1;
        };
      case clsvStudentInfoEN.con_Microblog:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.microblog == null) return -1;
          if (b.microblog == null) return 1;
          return a.microblog.localeCompare(b.microblog);
        };
      case clsvStudentInfoEN.con_PhoneNumber:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.phoneNumber == null) return -1;
          if (b.phoneNumber == null) return 1;
          return a.phoneNumber.localeCompare(b.phoneNumber);
        };
      case clsvStudentInfoEN.con_QQ:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.qQ == null) return -1;
          if (b.qQ == null) return 1;
          return a.qQ.localeCompare(b.qQ);
        };
      case clsvStudentInfoEN.con_RegisterPassword:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.registerPassword == null) return -1;
          if (b.registerPassword == null) return 1;
          return a.registerPassword.localeCompare(b.registerPassword);
        };
      case clsvStudentInfoEN.con_UpdDate:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvStudentInfoEN.con_UpdUser:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvStudentInfoEN.con_Memo:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vStudentInfo]中不存在!(in ${vStudentInfo_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvStudentInfoEN.con_IdStudentInfo:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return b.idStudentInfo.localeCompare(a.idStudentInfo);
        };
      case clsvStudentInfoEN.con_StuId:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return b.stuId.localeCompare(a.stuId);
        };
      case clsvStudentInfoEN.con_StuName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return b.stuName.localeCompare(a.stuName);
        };
      case clsvStudentInfoEN.con_IdPolitics:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return b.idPolitics.localeCompare(a.idPolitics);
        };
      case clsvStudentInfoEN.con_PoliticsID:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.politicsID == null) return -1;
          if (a.politicsID == null) return 1;
          return b.politicsID.localeCompare(a.politicsID);
        };
      case clsvStudentInfoEN.con_PoliticsName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return b.politicsName.localeCompare(a.politicsName);
        };
      case clsvStudentInfoEN.con_IdSex:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return b.idSex.localeCompare(a.idSex);
        };
      case clsvStudentInfoEN.con_SexDesc:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.sexDesc == null) return -1;
          if (a.sexDesc == null) return 1;
          return b.sexDesc.localeCompare(a.sexDesc);
        };
      case clsvStudentInfoEN.con_IdEthnic:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return b.idEthnic.localeCompare(a.idEthnic);
        };
      case clsvStudentInfoEN.con_EthnicID:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.ethnicID == null) return -1;
          if (a.ethnicID == null) return 1;
          return b.ethnicID.localeCompare(a.ethnicID);
        };
      case clsvStudentInfoEN.con_EthnicName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.ethnicName == null) return -1;
          if (a.ethnicName == null) return 1;
          return b.ethnicName.localeCompare(a.ethnicName);
        };
      case clsvStudentInfoEN.con_IdUniZone:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return b.idUniZone.localeCompare(a.idUniZone);
        };
      case clsvStudentInfoEN.con_UniZoneDesc:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return b.uniZoneDesc.localeCompare(a.uniZoneDesc);
        };
      case clsvStudentInfoEN.con_IdStuType:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.idStuType == null) return -1;
          if (a.idStuType == null) return 1;
          return b.idStuType.localeCompare(a.idStuType);
        };
      case clsvStudentInfoEN.con_StuTypeID:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.stuTypeID == null) return -1;
          if (a.stuTypeID == null) return 1;
          return b.stuTypeID.localeCompare(a.stuTypeID);
        };
      case clsvStudentInfoEN.con_StuTypeDesc:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.stuTypeDesc == null) return -1;
          if (a.stuTypeDesc == null) return 1;
          return b.stuTypeDesc.localeCompare(a.stuTypeDesc);
        };
      case clsvStudentInfoEN.con_IdXzCollege:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.idXzCollege == null) return -1;
          if (a.idXzCollege == null) return 1;
          return b.idXzCollege.localeCompare(a.idXzCollege);
        };
      case clsvStudentInfoEN.con_CollegeId:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.collegeId == null) return -1;
          if (a.collegeId == null) return 1;
          return b.collegeId.localeCompare(a.collegeId);
        };
      case clsvStudentInfoEN.con_CollegeName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsvStudentInfoEN.con_CollegeIdInGP:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.collegeIdInGP == null) return -1;
          if (a.collegeIdInGP == null) return 1;
          return b.collegeIdInGP.localeCompare(a.collegeIdInGP);
        };
      case clsvStudentInfoEN.con_CollegeNameA:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.collegeNameA == null) return -1;
          if (a.collegeNameA == null) return 1;
          return b.collegeNameA.localeCompare(a.collegeNameA);
        };
      case clsvStudentInfoEN.con_IdXzMajor:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.idXzMajor == null) return -1;
          if (a.idXzMajor == null) return 1;
          return b.idXzMajor.localeCompare(a.idXzMajor);
        };
      case clsvStudentInfoEN.con_MajorID:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.majorID == null) return -1;
          if (a.majorID == null) return 1;
          return b.majorID.localeCompare(a.majorID);
        };
      case clsvStudentInfoEN.con_MajorName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return b.majorName.localeCompare(a.majorName);
        };
      case clsvStudentInfoEN.con_IsNormal:
        return (b: clsvStudentInfoEN) => {
          if (b.isNormal == true) return 1;
          else return -1;
        };
      case clsvStudentInfoEN.con_IdGradeBase:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return b.idGradeBase.localeCompare(a.idGradeBase);
        };
      case clsvStudentInfoEN.con_GradeBaseName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.gradeBaseName == null) return -1;
          if (a.gradeBaseName == null) return 1;
          return b.gradeBaseName.localeCompare(a.gradeBaseName);
        };
      case clsvStudentInfoEN.con_IdAdminCls:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          return b.idAdminCls.localeCompare(a.idAdminCls);
        };
      case clsvStudentInfoEN.con_AdminClsName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.adminClsName == null) return -1;
          if (a.adminClsName == null) return 1;
          return b.adminClsName.localeCompare(a.adminClsName);
        };
      case clsvStudentInfoEN.con_AdminClsId:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.adminClsId == null) return -1;
          if (a.adminClsId == null) return 1;
          return b.adminClsId.localeCompare(a.adminClsId);
        };
      case clsvStudentInfoEN.con_IdAdminClsType:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.idAdminClsType == null) return -1;
          if (a.idAdminClsType == null) return 1;
          return b.idAdminClsType.localeCompare(a.idAdminClsType);
        };
      case clsvStudentInfoEN.con_AdminClsTypeName:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.adminClsTypeName == null) return -1;
          if (a.adminClsTypeName == null) return 1;
          return b.adminClsTypeName.localeCompare(a.adminClsTypeName);
        };
      case clsvStudentInfoEN.con_Birthday:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.birthday == null) return -1;
          if (a.birthday == null) return 1;
          return b.birthday.localeCompare(a.birthday);
        };
      case clsvStudentInfoEN.con_NativePlace:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.nativePlace == null) return -1;
          if (a.nativePlace == null) return 1;
          return b.nativePlace.localeCompare(a.nativePlace);
        };
      case clsvStudentInfoEN.con_Duty:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.duty == null) return -1;
          if (a.duty == null) return 1;
          return b.duty.localeCompare(a.duty);
        };
      case clsvStudentInfoEN.con_IdCardNo:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.idCardNo == null) return -1;
          if (a.idCardNo == null) return 1;
          return b.idCardNo.localeCompare(a.idCardNo);
        };
      case clsvStudentInfoEN.con_StuCardNo:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.stuCardNo == null) return -1;
          if (a.stuCardNo == null) return 1;
          return b.stuCardNo.localeCompare(a.stuCardNo);
        };
      case clsvStudentInfoEN.con_LiveAddress:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.liveAddress == null) return -1;
          if (a.liveAddress == null) return 1;
          return b.liveAddress.localeCompare(a.liveAddress);
        };
      case clsvStudentInfoEN.con_HomePhone:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.homePhone == null) return -1;
          if (a.homePhone == null) return 1;
          return b.homePhone.localeCompare(a.homePhone);
        };
      case clsvStudentInfoEN.con_IdCardNo2:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.idCardNo2 == null) return -1;
          if (a.idCardNo2 == null) return 1;
          return b.idCardNo2.localeCompare(a.idCardNo2);
        };
      case clsvStudentInfoEN.con_CardNo:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.cardNo == null) return -1;
          if (a.cardNo == null) return 1;
          return b.cardNo.localeCompare(a.cardNo);
        };
      case clsvStudentInfoEN.con_IsAvconClassUser:
        return (b: clsvStudentInfoEN) => {
          if (b.isAvconClassUser == true) return 1;
          else return -1;
        };
      case clsvStudentInfoEN.con_IsAvconUser:
        return (b: clsvStudentInfoEN) => {
          if (b.isAvconUser == true) return 1;
          else return -1;
        };
      case clsvStudentInfoEN.con_IsGpUser:
        return (b: clsvStudentInfoEN) => {
          if (b.isGpUser == true) return 1;
          else return -1;
        };
      case clsvStudentInfoEN.con_IsLocalUser:
        return (b: clsvStudentInfoEN) => {
          if (b.isLocalUser == true) return 1;
          else return -1;
        };
      case clsvStudentInfoEN.con_IsLeaved:
        return (b: clsvStudentInfoEN) => {
          if (b.isLeaved == true) return 1;
          else return -1;
        };
      case clsvStudentInfoEN.con_UserId:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsvStudentInfoEN.con_UserId4Avcon:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.userId4Avcon == null) return -1;
          if (a.userId4Avcon == null) return 1;
          return b.userId4Avcon.localeCompare(a.userId4Avcon);
        };
      case clsvStudentInfoEN.con_EnrollmentDate:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.enrollmentDate == null) return -1;
          if (a.enrollmentDate == null) return 1;
          return b.enrollmentDate.localeCompare(a.enrollmentDate);
        };
      case clsvStudentInfoEN.con_PostCode:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.postCode == null) return -1;
          if (a.postCode == null) return 1;
          return b.postCode.localeCompare(a.postCode);
        };
      case clsvStudentInfoEN.con_Email:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.email == null) return -1;
          if (a.email == null) return 1;
          return b.email.localeCompare(a.email);
        };
      case clsvStudentInfoEN.con_IsMessage:
        return (b: clsvStudentInfoEN) => {
          if (b.isMessage == true) return 1;
          else return -1;
        };
      case clsvStudentInfoEN.con_Microblog:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.microblog == null) return -1;
          if (a.microblog == null) return 1;
          return b.microblog.localeCompare(a.microblog);
        };
      case clsvStudentInfoEN.con_PhoneNumber:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.phoneNumber == null) return -1;
          if (a.phoneNumber == null) return 1;
          return b.phoneNumber.localeCompare(a.phoneNumber);
        };
      case clsvStudentInfoEN.con_QQ:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.qQ == null) return -1;
          if (a.qQ == null) return 1;
          return b.qQ.localeCompare(a.qQ);
        };
      case clsvStudentInfoEN.con_RegisterPassword:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.registerPassword == null) return -1;
          if (a.registerPassword == null) return 1;
          return b.registerPassword.localeCompare(a.registerPassword);
        };
      case clsvStudentInfoEN.con_UpdDate:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvStudentInfoEN.con_UpdUser:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvStudentInfoEN.con_Memo:
        return (a: clsvStudentInfoEN, b: clsvStudentInfoEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vStudentInfo]中不存在!(in ${vStudentInfo_ConstructorName}.${strThisFuncName})`;
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
export async function vStudentInfo_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvStudentInfoEN.con_IdStudentInfo:
      return (obj: clsvStudentInfoEN) => {
        return obj.idStudentInfo === value;
      };
    case clsvStudentInfoEN.con_StuId:
      return (obj: clsvStudentInfoEN) => {
        return obj.stuId === value;
      };
    case clsvStudentInfoEN.con_StuName:
      return (obj: clsvStudentInfoEN) => {
        return obj.stuName === value;
      };
    case clsvStudentInfoEN.con_IdPolitics:
      return (obj: clsvStudentInfoEN) => {
        return obj.idPolitics === value;
      };
    case clsvStudentInfoEN.con_PoliticsID:
      return (obj: clsvStudentInfoEN) => {
        return obj.politicsID === value;
      };
    case clsvStudentInfoEN.con_PoliticsName:
      return (obj: clsvStudentInfoEN) => {
        return obj.politicsName === value;
      };
    case clsvStudentInfoEN.con_IdSex:
      return (obj: clsvStudentInfoEN) => {
        return obj.idSex === value;
      };
    case clsvStudentInfoEN.con_SexDesc:
      return (obj: clsvStudentInfoEN) => {
        return obj.sexDesc === value;
      };
    case clsvStudentInfoEN.con_IdEthnic:
      return (obj: clsvStudentInfoEN) => {
        return obj.idEthnic === value;
      };
    case clsvStudentInfoEN.con_EthnicID:
      return (obj: clsvStudentInfoEN) => {
        return obj.ethnicID === value;
      };
    case clsvStudentInfoEN.con_EthnicName:
      return (obj: clsvStudentInfoEN) => {
        return obj.ethnicName === value;
      };
    case clsvStudentInfoEN.con_IdUniZone:
      return (obj: clsvStudentInfoEN) => {
        return obj.idUniZone === value;
      };
    case clsvStudentInfoEN.con_UniZoneDesc:
      return (obj: clsvStudentInfoEN) => {
        return obj.uniZoneDesc === value;
      };
    case clsvStudentInfoEN.con_IdStuType:
      return (obj: clsvStudentInfoEN) => {
        return obj.idStuType === value;
      };
    case clsvStudentInfoEN.con_StuTypeID:
      return (obj: clsvStudentInfoEN) => {
        return obj.stuTypeID === value;
      };
    case clsvStudentInfoEN.con_StuTypeDesc:
      return (obj: clsvStudentInfoEN) => {
        return obj.stuTypeDesc === value;
      };
    case clsvStudentInfoEN.con_IdXzCollege:
      return (obj: clsvStudentInfoEN) => {
        return obj.idXzCollege === value;
      };
    case clsvStudentInfoEN.con_CollegeId:
      return (obj: clsvStudentInfoEN) => {
        return obj.collegeId === value;
      };
    case clsvStudentInfoEN.con_CollegeName:
      return (obj: clsvStudentInfoEN) => {
        return obj.collegeName === value;
      };
    case clsvStudentInfoEN.con_CollegeIdInGP:
      return (obj: clsvStudentInfoEN) => {
        return obj.collegeIdInGP === value;
      };
    case clsvStudentInfoEN.con_CollegeNameA:
      return (obj: clsvStudentInfoEN) => {
        return obj.collegeNameA === value;
      };
    case clsvStudentInfoEN.con_IdXzMajor:
      return (obj: clsvStudentInfoEN) => {
        return obj.idXzMajor === value;
      };
    case clsvStudentInfoEN.con_MajorID:
      return (obj: clsvStudentInfoEN) => {
        return obj.majorID === value;
      };
    case clsvStudentInfoEN.con_MajorName:
      return (obj: clsvStudentInfoEN) => {
        return obj.majorName === value;
      };
    case clsvStudentInfoEN.con_IsNormal:
      return (obj: clsvStudentInfoEN) => {
        return obj.isNormal === value;
      };
    case clsvStudentInfoEN.con_IdGradeBase:
      return (obj: clsvStudentInfoEN) => {
        return obj.idGradeBase === value;
      };
    case clsvStudentInfoEN.con_GradeBaseName:
      return (obj: clsvStudentInfoEN) => {
        return obj.gradeBaseName === value;
      };
    case clsvStudentInfoEN.con_IdAdminCls:
      return (obj: clsvStudentInfoEN) => {
        return obj.idAdminCls === value;
      };
    case clsvStudentInfoEN.con_AdminClsName:
      return (obj: clsvStudentInfoEN) => {
        return obj.adminClsName === value;
      };
    case clsvStudentInfoEN.con_AdminClsId:
      return (obj: clsvStudentInfoEN) => {
        return obj.adminClsId === value;
      };
    case clsvStudentInfoEN.con_IdAdminClsType:
      return (obj: clsvStudentInfoEN) => {
        return obj.idAdminClsType === value;
      };
    case clsvStudentInfoEN.con_AdminClsTypeName:
      return (obj: clsvStudentInfoEN) => {
        return obj.adminClsTypeName === value;
      };
    case clsvStudentInfoEN.con_Birthday:
      return (obj: clsvStudentInfoEN) => {
        return obj.birthday === value;
      };
    case clsvStudentInfoEN.con_NativePlace:
      return (obj: clsvStudentInfoEN) => {
        return obj.nativePlace === value;
      };
    case clsvStudentInfoEN.con_Duty:
      return (obj: clsvStudentInfoEN) => {
        return obj.duty === value;
      };
    case clsvStudentInfoEN.con_IdCardNo:
      return (obj: clsvStudentInfoEN) => {
        return obj.idCardNo === value;
      };
    case clsvStudentInfoEN.con_StuCardNo:
      return (obj: clsvStudentInfoEN) => {
        return obj.stuCardNo === value;
      };
    case clsvStudentInfoEN.con_LiveAddress:
      return (obj: clsvStudentInfoEN) => {
        return obj.liveAddress === value;
      };
    case clsvStudentInfoEN.con_HomePhone:
      return (obj: clsvStudentInfoEN) => {
        return obj.homePhone === value;
      };
    case clsvStudentInfoEN.con_IdCardNo2:
      return (obj: clsvStudentInfoEN) => {
        return obj.idCardNo2 === value;
      };
    case clsvStudentInfoEN.con_CardNo:
      return (obj: clsvStudentInfoEN) => {
        return obj.cardNo === value;
      };
    case clsvStudentInfoEN.con_IsAvconClassUser:
      return (obj: clsvStudentInfoEN) => {
        return obj.isAvconClassUser === value;
      };
    case clsvStudentInfoEN.con_IsAvconUser:
      return (obj: clsvStudentInfoEN) => {
        return obj.isAvconUser === value;
      };
    case clsvStudentInfoEN.con_IsGpUser:
      return (obj: clsvStudentInfoEN) => {
        return obj.isGpUser === value;
      };
    case clsvStudentInfoEN.con_IsLocalUser:
      return (obj: clsvStudentInfoEN) => {
        return obj.isLocalUser === value;
      };
    case clsvStudentInfoEN.con_IsLeaved:
      return (obj: clsvStudentInfoEN) => {
        return obj.isLeaved === value;
      };
    case clsvStudentInfoEN.con_UserId:
      return (obj: clsvStudentInfoEN) => {
        return obj.userId === value;
      };
    case clsvStudentInfoEN.con_UserId4Avcon:
      return (obj: clsvStudentInfoEN) => {
        return obj.userId4Avcon === value;
      };
    case clsvStudentInfoEN.con_EnrollmentDate:
      return (obj: clsvStudentInfoEN) => {
        return obj.enrollmentDate === value;
      };
    case clsvStudentInfoEN.con_PostCode:
      return (obj: clsvStudentInfoEN) => {
        return obj.postCode === value;
      };
    case clsvStudentInfoEN.con_Email:
      return (obj: clsvStudentInfoEN) => {
        return obj.email === value;
      };
    case clsvStudentInfoEN.con_IsMessage:
      return (obj: clsvStudentInfoEN) => {
        return obj.isMessage === value;
      };
    case clsvStudentInfoEN.con_Microblog:
      return (obj: clsvStudentInfoEN) => {
        return obj.microblog === value;
      };
    case clsvStudentInfoEN.con_PhoneNumber:
      return (obj: clsvStudentInfoEN) => {
        return obj.phoneNumber === value;
      };
    case clsvStudentInfoEN.con_QQ:
      return (obj: clsvStudentInfoEN) => {
        return obj.qQ === value;
      };
    case clsvStudentInfoEN.con_RegisterPassword:
      return (obj: clsvStudentInfoEN) => {
        return obj.registerPassword === value;
      };
    case clsvStudentInfoEN.con_UpdDate:
      return (obj: clsvStudentInfoEN) => {
        return obj.updDate === value;
      };
    case clsvStudentInfoEN.con_UpdUser:
      return (obj: clsvStudentInfoEN) => {
        return obj.updUser === value;
      };
    case clsvStudentInfoEN.con_Memo:
      return (obj: clsvStudentInfoEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vStudentInfo]中不存在!(in ${vStudentInfo_ConstructorName}.${strThisFuncName})`;
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
export async function vStudentInfo_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvStudentInfoEN.con_IdStudentInfo) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvStudentInfo = await vStudentInfo_GetObjLstCache();
  if (arrvStudentInfo == null) return [];
  let arrvStudentInfoSel = arrvStudentInfo;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvStudentInfoSel = arrvStudentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvStudentInfoSel = arrvStudentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvStudentInfoSel = arrvStudentInfoSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvStudentInfoSel = arrvStudentInfoSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvStudentInfoSel = arrvStudentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvStudentInfoSel = arrvStudentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvStudentInfoSel = arrvStudentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvStudentInfoSel = arrvStudentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvStudentInfoSel = arrvStudentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvStudentInfoSel = arrvStudentInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvStudentInfoSel.length == 0) return [];
  return arrvStudentInfoSel.map((x) => x.idStudentInfo);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vStudentInfo_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vStudentInfo_Controller, strAction);

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
        vStudentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vStudentInfo_ConstructorName,
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
export async function vStudentInfo_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vStudentInfo_Controller, strAction);

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
        vStudentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vStudentInfo_ConstructorName,
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
export async function vStudentInfo_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvStudentInfoEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vStudentInfo_Controller, strAction);

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
      const objvStudentInfo = vStudentInfo_GetObjFromJsonObj(returnObj);
      return objvStudentInfo;
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
        vStudentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vStudentInfo_ConstructorName,
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
export async function vStudentInfo_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvStudentInfoEN._CurrTabName;
  if (IsNullOrEmpty(clsvStudentInfoEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvStudentInfoEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvStudentInfoExObjLstCache: Array<clsvStudentInfoEN> = CacheHelper.Get(strKey);
    const arrvStudentInfoObjLstT = vStudentInfo_GetObjLstByJSONObjLst(arrvStudentInfoExObjLstCache);
    return arrvStudentInfoObjLstT;
  }
  try {
    const arrvStudentInfoExObjLst = await vStudentInfo_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvStudentInfoExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvStudentInfoExObjLst.length,
    );
    console.log(strInfo);
    return arrvStudentInfoExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vStudentInfo_ConstructorName,
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
export async function vStudentInfo_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvStudentInfoEN._CurrTabName;
  if (IsNullOrEmpty(clsvStudentInfoEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvStudentInfoEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvStudentInfoExObjLstCache: Array<clsvStudentInfoEN> = JSON.parse(strTempObjLst);
    const arrvStudentInfoObjLstT = vStudentInfo_GetObjLstByJSONObjLst(arrvStudentInfoExObjLstCache);
    return arrvStudentInfoObjLstT;
  }
  try {
    const arrvStudentInfoExObjLst = await vStudentInfo_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvStudentInfoExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvStudentInfoExObjLst.length,
    );
    console.log(strInfo);
    return arrvStudentInfoExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vStudentInfo_ConstructorName,
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
export async function vStudentInfo_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvStudentInfoEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvStudentInfoObjLstCache: Array<clsvStudentInfoEN> = JSON.parse(strTempObjLst);
    return arrvStudentInfoObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vStudentInfo_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvStudentInfoEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vStudentInfo_Controller, strAction);

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
          vStudentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vStudentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        vStudentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vStudentInfo_ConstructorName,
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
export async function vStudentInfo_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvStudentInfoEN._CurrTabName;
  if (IsNullOrEmpty(clsvStudentInfoEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvStudentInfoEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvStudentInfoExObjLstCache: Array<clsvStudentInfoEN> = JSON.parse(strTempObjLst);
    const arrvStudentInfoObjLstT = vStudentInfo_GetObjLstByJSONObjLst(arrvStudentInfoExObjLstCache);
    return arrvStudentInfoObjLstT;
  }
  try {
    const arrvStudentInfoExObjLst = await vStudentInfo_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvStudentInfoExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvStudentInfoExObjLst.length,
    );
    console.log(strInfo);
    return arrvStudentInfoExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vStudentInfo_ConstructorName,
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
export async function vStudentInfo_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvStudentInfoEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvStudentInfoObjLstCache: Array<clsvStudentInfoEN> = JSON.parse(strTempObjLst);
    return arrvStudentInfoObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vStudentInfo_GetObjLstCache(): Promise<Array<clsvStudentInfoEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvStudentInfoObjLstCache;
  switch (clsvStudentInfoEN.CacheModeId) {
    case '04': //sessionStorage
      arrvStudentInfoObjLstCache = await vStudentInfo_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvStudentInfoObjLstCache = await vStudentInfo_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvStudentInfoObjLstCache = await vStudentInfo_GetObjLstClientCache();
      break;
    default:
      arrvStudentInfoObjLstCache = await vStudentInfo_GetObjLstClientCache();
      break;
  }
  return arrvStudentInfoObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vStudentInfo_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvStudentInfoObjLstCache;
  switch (clsvStudentInfoEN.CacheModeId) {
    case '04': //sessionStorage
      arrvStudentInfoObjLstCache = await vStudentInfo_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvStudentInfoObjLstCache = await vStudentInfo_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvStudentInfoObjLstCache = null;
      break;
    default:
      arrvStudentInfoObjLstCache = null;
      break;
  }
  return arrvStudentInfoObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdStudentInfoCond:条件对象
 * @returns 对象列表子集
 */
export async function vStudentInfo_GetSubObjLstCache(objvStudentInfoCond: clsvStudentInfoEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvStudentInfoObjLstCache = await vStudentInfo_GetObjLstCache();
  let arrvStudentInfoSel = arrvStudentInfoObjLstCache;
  if (objvStudentInfoCond.sfFldComparisonOp == null || objvStudentInfoCond.sfFldComparisonOp == '')
    return arrvStudentInfoSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvStudentInfoCond.sfFldComparisonOp,
  );
  //console.log("clsvStudentInfoWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvStudentInfoCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvStudentInfoSel = arrvStudentInfoSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvStudentInfoCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvStudentInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvStudentInfoCond),
      vStudentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvStudentInfoEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdStudentInfo:关键字列表
 * @returns 对象列表
 **/
export async function vStudentInfo_GetObjLstByIdStudentInfoLstAsync(
  arrIdStudentInfo: Array<string>,
): Promise<Array<clsvStudentInfoEN>> {
  const strThisFuncName = 'GetObjLstByIdStudentInfoLstAsync';
  const strAction = 'GetObjLstByIdStudentInfoLst';
  const strUrl = GetWebApiUrl(vStudentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdStudentInfo, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vStudentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vStudentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        vStudentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vStudentInfo_ConstructorName,
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
 * @param arrstrIdStudentInfoLst:关键字列表
 * @returns 对象列表
 */
export async function vStudentInfo_GetObjLstByIdStudentInfoLstCache(
  arrIdStudentInfoLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByIdStudentInfoLstCache';
  try {
    const arrvStudentInfoObjLstCache = await vStudentInfo_GetObjLstCache();
    const arrvStudentInfoSel = arrvStudentInfoObjLstCache.filter(
      (x) => arrIdStudentInfoLst.indexOf(x.idStudentInfo) > -1,
    );
    return arrvStudentInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdStudentInfoLst.join(','),
      vStudentInfo_ConstructorName,
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
export async function vStudentInfo_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvStudentInfoEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vStudentInfo_Controller, strAction);

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
          vStudentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vStudentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        vStudentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vStudentInfo_ConstructorName,
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
export async function vStudentInfo_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvStudentInfoEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vStudentInfo_Controller, strAction);

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
          vStudentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vStudentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        vStudentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vStudentInfo_ConstructorName,
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
export async function vStudentInfo_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvStudentInfoEN>();
  const arrvStudentInfoObjLstCache = await vStudentInfo_GetObjLstCache();
  if (arrvStudentInfoObjLstCache.length == 0) return arrvStudentInfoObjLstCache;
  let arrvStudentInfoSel = arrvStudentInfoObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvStudentInfoCond = new clsvStudentInfoEN();
  ObjectAssign(objvStudentInfoCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvStudentInfoWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvStudentInfoSel = arrvStudentInfoSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvStudentInfoCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvStudentInfoSel.length == 0) return arrvStudentInfoSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvStudentInfoSel = arrvStudentInfoSel.sort(
        vStudentInfo_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvStudentInfoSel = arrvStudentInfoSel.sort(objPagerPara.sortFun);
    }
    arrvStudentInfoSel = arrvStudentInfoSel.slice(intStart, intEnd);
    return arrvStudentInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vStudentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvStudentInfoEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vStudentInfo_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvStudentInfoEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvStudentInfoEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vStudentInfo_Controller, strAction);

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
          vStudentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vStudentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        vStudentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vStudentInfo_ConstructorName,
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
 * @param objstrIdStudentInfoCond:条件对象
 * @returns 对象列表子集
 */
export async function vStudentInfo_IsExistRecordCache(objvStudentInfoCond: clsvStudentInfoEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvStudentInfoObjLstCache = await vStudentInfo_GetObjLstCache();
  if (arrvStudentInfoObjLstCache == null) return false;
  let arrvStudentInfoSel = arrvStudentInfoObjLstCache;
  if (objvStudentInfoCond.sfFldComparisonOp == null || objvStudentInfoCond.sfFldComparisonOp == '')
    return arrvStudentInfoSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvStudentInfoCond.sfFldComparisonOp,
  );
  //console.log("clsvStudentInfoWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvStudentInfoCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvStudentInfoCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvStudentInfoSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvStudentInfoCond),
      vStudentInfo_ConstructorName,
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
export async function vStudentInfo_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vStudentInfo_Controller, strAction);

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
        vStudentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vStudentInfo_ConstructorName,
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
 * @param strIdStudentInfo:所给的关键字
 * @returns 对象
 */
export async function vStudentInfo_IsExistCache(strIdStudentInfo: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvStudentInfoObjLstCache = await vStudentInfo_GetObjLstCache();
  if (arrvStudentInfoObjLstCache == null) return false;
  try {
    const arrvStudentInfoSel = arrvStudentInfoObjLstCache.filter(
      (x) => x.idStudentInfo == strIdStudentInfo,
    );
    if (arrvStudentInfoSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdStudentInfo,
      vStudentInfo_ConstructorName,
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
 * @param strIdStudentInfo:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vStudentInfo_IsExistAsync(strIdStudentInfo: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vStudentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdStudentInfo,
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
        vStudentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vStudentInfo_ConstructorName,
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
export async function vStudentInfo_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vStudentInfo_Controller, strAction);

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
        vStudentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vStudentInfo_ConstructorName,
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
 * @param objvStudentInfoCond:条件对象
 * @returns 对象列表记录数
 */
export async function vStudentInfo_GetRecCountByCondCache(objvStudentInfoCond: clsvStudentInfoEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvStudentInfoObjLstCache = await vStudentInfo_GetObjLstCache();
  if (arrvStudentInfoObjLstCache == null) return 0;
  let arrvStudentInfoSel = arrvStudentInfoObjLstCache;
  if (objvStudentInfoCond.sfFldComparisonOp == null || objvStudentInfoCond.sfFldComparisonOp == '')
    return arrvStudentInfoSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvStudentInfoCond.sfFldComparisonOp,
  );
  //console.log("clsvStudentInfoWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvStudentInfoCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvStudentInfoSel = arrvStudentInfoSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvStudentInfoCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvStudentInfoSel = arrvStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvStudentInfoSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvStudentInfoCond),
      vStudentInfo_ConstructorName,
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
export function vStudentInfo_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vStudentInfo_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvStudentInfoEN._CurrTabName;
    switch (clsvStudentInfoEN.CacheModeId) {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vStudentInfo_GetJSONStrByObj(pobjvStudentInfoEN: clsvStudentInfoEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvStudentInfoEN);
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
export function vStudentInfo_GetObjLstByJSONStr(strJSON: string): Array<clsvStudentInfoEN> {
  let arrvStudentInfoObjLst = new Array<clsvStudentInfoEN>();
  if (strJSON === '') {
    return arrvStudentInfoObjLst;
  }
  try {
    arrvStudentInfoObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvStudentInfoObjLst;
  }
  return arrvStudentInfoObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvStudentInfoObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vStudentInfo_GetObjLstByJSONObjLst(
  arrvStudentInfoObjLstS: Array<clsvStudentInfoEN>,
): Array<clsvStudentInfoEN> {
  const arrvStudentInfoObjLst = new Array<clsvStudentInfoEN>();
  for (const objInFor of arrvStudentInfoObjLstS) {
    const obj1 = vStudentInfo_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvStudentInfoObjLst.push(obj1);
  }
  return arrvStudentInfoObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vStudentInfo_GetObjByJSONStr(strJSON: string): clsvStudentInfoEN {
  let pobjvStudentInfoEN = new clsvStudentInfoEN();
  if (strJSON === '') {
    return pobjvStudentInfoEN;
  }
  try {
    pobjvStudentInfoEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvStudentInfoEN;
  }
  return pobjvStudentInfoEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vStudentInfo_GetCombineCondition(objvStudentInfoCond: clsvStudentInfoEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IdStudentInfo,
    ) == true
  ) {
    const strComparisonOpIdStudentInfo: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_IdStudentInfo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_IdStudentInfo,
      objvStudentInfoCond.idStudentInfo,
      strComparisonOpIdStudentInfo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_StuId,
    ) == true
  ) {
    const strComparisonOpStuId: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_StuId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_StuId,
      objvStudentInfoCond.stuId,
      strComparisonOpStuId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_StuName,
    ) == true
  ) {
    const strComparisonOpStuName: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_StuName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_StuName,
      objvStudentInfoCond.stuName,
      strComparisonOpStuName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IdPolitics,
    ) == true
  ) {
    const strComparisonOpIdPolitics: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_IdPolitics];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_IdPolitics,
      objvStudentInfoCond.idPolitics,
      strComparisonOpIdPolitics,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_PoliticsID,
    ) == true
  ) {
    const strComparisonOpPoliticsID: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_PoliticsID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_PoliticsID,
      objvStudentInfoCond.politicsID,
      strComparisonOpPoliticsID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_PoliticsName,
    ) == true
  ) {
    const strComparisonOpPoliticsName: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_PoliticsName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_PoliticsName,
      objvStudentInfoCond.politicsName,
      strComparisonOpPoliticsName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IdSex,
    ) == true
  ) {
    const strComparisonOpIdSex: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_IdSex];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_IdSex,
      objvStudentInfoCond.idSex,
      strComparisonOpIdSex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_SexDesc,
    ) == true
  ) {
    const strComparisonOpSexDesc: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_SexDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_SexDesc,
      objvStudentInfoCond.sexDesc,
      strComparisonOpSexDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IdEthnic,
    ) == true
  ) {
    const strComparisonOpIdEthnic: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_IdEthnic];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_IdEthnic,
      objvStudentInfoCond.idEthnic,
      strComparisonOpIdEthnic,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_EthnicID,
    ) == true
  ) {
    const strComparisonOpEthnicID: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_EthnicID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_EthnicID,
      objvStudentInfoCond.ethnicID,
      strComparisonOpEthnicID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_EthnicName,
    ) == true
  ) {
    const strComparisonOpEthnicName: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_EthnicName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_EthnicName,
      objvStudentInfoCond.ethnicName,
      strComparisonOpEthnicName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IdUniZone,
    ) == true
  ) {
    const strComparisonOpIdUniZone: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_IdUniZone];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_IdUniZone,
      objvStudentInfoCond.idUniZone,
      strComparisonOpIdUniZone,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_UniZoneDesc,
    ) == true
  ) {
    const strComparisonOpUniZoneDesc: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_UniZoneDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_UniZoneDesc,
      objvStudentInfoCond.uniZoneDesc,
      strComparisonOpUniZoneDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IdStuType,
    ) == true
  ) {
    const strComparisonOpIdStuType: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_IdStuType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_IdStuType,
      objvStudentInfoCond.idStuType,
      strComparisonOpIdStuType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_StuTypeID,
    ) == true
  ) {
    const strComparisonOpStuTypeID: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_StuTypeID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_StuTypeID,
      objvStudentInfoCond.stuTypeID,
      strComparisonOpStuTypeID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_StuTypeDesc,
    ) == true
  ) {
    const strComparisonOpStuTypeDesc: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_StuTypeDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_StuTypeDesc,
      objvStudentInfoCond.stuTypeDesc,
      strComparisonOpStuTypeDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IdXzCollege,
    ) == true
  ) {
    const strComparisonOpIdXzCollege: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_IdXzCollege];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_IdXzCollege,
      objvStudentInfoCond.idXzCollege,
      strComparisonOpIdXzCollege,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_CollegeId,
    ) == true
  ) {
    const strComparisonOpCollegeId: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_CollegeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_CollegeId,
      objvStudentInfoCond.collegeId,
      strComparisonOpCollegeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_CollegeName,
    ) == true
  ) {
    const strComparisonOpCollegeName: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_CollegeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_CollegeName,
      objvStudentInfoCond.collegeName,
      strComparisonOpCollegeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_CollegeIdInGP,
    ) == true
  ) {
    const strComparisonOpCollegeIdInGP: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_CollegeIdInGP];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_CollegeIdInGP,
      objvStudentInfoCond.collegeIdInGP,
      strComparisonOpCollegeIdInGP,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_CollegeNameA,
    ) == true
  ) {
    const strComparisonOpCollegeNameA: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_CollegeNameA];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_CollegeNameA,
      objvStudentInfoCond.collegeNameA,
      strComparisonOpCollegeNameA,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IdXzMajor,
    ) == true
  ) {
    const strComparisonOpIdXzMajor: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_IdXzMajor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_IdXzMajor,
      objvStudentInfoCond.idXzMajor,
      strComparisonOpIdXzMajor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_MajorID,
    ) == true
  ) {
    const strComparisonOpMajorID: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_MajorID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_MajorID,
      objvStudentInfoCond.majorID,
      strComparisonOpMajorID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_MajorName,
    ) == true
  ) {
    const strComparisonOpMajorName: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_MajorName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_MajorName,
      objvStudentInfoCond.majorName,
      strComparisonOpMajorName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IsNormal,
    ) == true
  ) {
    if (objvStudentInfoCond.isNormal == true) {
      strWhereCond += Format(" And {0} = '1'", clsvStudentInfoEN.con_IsNormal);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvStudentInfoEN.con_IsNormal);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IdGradeBase,
    ) == true
  ) {
    const strComparisonOpIdGradeBase: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_IdGradeBase];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_IdGradeBase,
      objvStudentInfoCond.idGradeBase,
      strComparisonOpIdGradeBase,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_GradeBaseName,
    ) == true
  ) {
    const strComparisonOpGradeBaseName: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_GradeBaseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_GradeBaseName,
      objvStudentInfoCond.gradeBaseName,
      strComparisonOpGradeBaseName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IdAdminCls,
    ) == true
  ) {
    const strComparisonOpIdAdminCls: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_IdAdminCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_IdAdminCls,
      objvStudentInfoCond.idAdminCls,
      strComparisonOpIdAdminCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_AdminClsName,
    ) == true
  ) {
    const strComparisonOpAdminClsName: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_AdminClsName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_AdminClsName,
      objvStudentInfoCond.adminClsName,
      strComparisonOpAdminClsName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_AdminClsId,
    ) == true
  ) {
    const strComparisonOpAdminClsId: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_AdminClsId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_AdminClsId,
      objvStudentInfoCond.adminClsId,
      strComparisonOpAdminClsId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IdAdminClsType,
    ) == true
  ) {
    const strComparisonOpIdAdminClsType: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_IdAdminClsType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_IdAdminClsType,
      objvStudentInfoCond.idAdminClsType,
      strComparisonOpIdAdminClsType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_AdminClsTypeName,
    ) == true
  ) {
    const strComparisonOpAdminClsTypeName: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_AdminClsTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_AdminClsTypeName,
      objvStudentInfoCond.adminClsTypeName,
      strComparisonOpAdminClsTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_Birthday,
    ) == true
  ) {
    const strComparisonOpBirthday: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_Birthday];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_Birthday,
      objvStudentInfoCond.birthday,
      strComparisonOpBirthday,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_NativePlace,
    ) == true
  ) {
    const strComparisonOpNativePlace: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_NativePlace];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_NativePlace,
      objvStudentInfoCond.nativePlace,
      strComparisonOpNativePlace,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_Duty,
    ) == true
  ) {
    const strComparisonOpDuty: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_Duty];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_Duty,
      objvStudentInfoCond.duty,
      strComparisonOpDuty,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IdCardNo,
    ) == true
  ) {
    const strComparisonOpIdCardNo: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_IdCardNo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_IdCardNo,
      objvStudentInfoCond.idCardNo,
      strComparisonOpIdCardNo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_StuCardNo,
    ) == true
  ) {
    const strComparisonOpStuCardNo: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_StuCardNo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_StuCardNo,
      objvStudentInfoCond.stuCardNo,
      strComparisonOpStuCardNo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_LiveAddress,
    ) == true
  ) {
    const strComparisonOpLiveAddress: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_LiveAddress];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_LiveAddress,
      objvStudentInfoCond.liveAddress,
      strComparisonOpLiveAddress,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_HomePhone,
    ) == true
  ) {
    const strComparisonOpHomePhone: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_HomePhone];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_HomePhone,
      objvStudentInfoCond.homePhone,
      strComparisonOpHomePhone,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IdCardNo2,
    ) == true
  ) {
    const strComparisonOpIdCardNo2: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_IdCardNo2];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_IdCardNo2,
      objvStudentInfoCond.idCardNo2,
      strComparisonOpIdCardNo2,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_CardNo,
    ) == true
  ) {
    const strComparisonOpCardNo: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_CardNo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_CardNo,
      objvStudentInfoCond.cardNo,
      strComparisonOpCardNo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IsAvconClassUser,
    ) == true
  ) {
    if (objvStudentInfoCond.isAvconClassUser == true) {
      strWhereCond += Format(" And {0} = '1'", clsvStudentInfoEN.con_IsAvconClassUser);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvStudentInfoEN.con_IsAvconClassUser);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IsAvconUser,
    ) == true
  ) {
    if (objvStudentInfoCond.isAvconUser == true) {
      strWhereCond += Format(" And {0} = '1'", clsvStudentInfoEN.con_IsAvconUser);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvStudentInfoEN.con_IsAvconUser);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IsGpUser,
    ) == true
  ) {
    if (objvStudentInfoCond.isGpUser == true) {
      strWhereCond += Format(" And {0} = '1'", clsvStudentInfoEN.con_IsGpUser);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvStudentInfoEN.con_IsGpUser);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IsLocalUser,
    ) == true
  ) {
    if (objvStudentInfoCond.isLocalUser == true) {
      strWhereCond += Format(" And {0} = '1'", clsvStudentInfoEN.con_IsLocalUser);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvStudentInfoEN.con_IsLocalUser);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IsLeaved,
    ) == true
  ) {
    if (objvStudentInfoCond.isLeaved == true) {
      strWhereCond += Format(" And {0} = '1'", clsvStudentInfoEN.con_IsLeaved);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvStudentInfoEN.con_IsLeaved);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_UserId,
      objvStudentInfoCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_UserId4Avcon,
    ) == true
  ) {
    const strComparisonOpUserId4Avcon: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_UserId4Avcon];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_UserId4Avcon,
      objvStudentInfoCond.userId4Avcon,
      strComparisonOpUserId4Avcon,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_EnrollmentDate,
    ) == true
  ) {
    const strComparisonOpEnrollmentDate: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_EnrollmentDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_EnrollmentDate,
      objvStudentInfoCond.enrollmentDate,
      strComparisonOpEnrollmentDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_PostCode,
    ) == true
  ) {
    const strComparisonOpPostCode: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_PostCode];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_PostCode,
      objvStudentInfoCond.postCode,
      strComparisonOpPostCode,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_Email,
    ) == true
  ) {
    const strComparisonOpEmail: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_Email];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_Email,
      objvStudentInfoCond.email,
      strComparisonOpEmail,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_IsMessage,
    ) == true
  ) {
    if (objvStudentInfoCond.isMessage == true) {
      strWhereCond += Format(" And {0} = '1'", clsvStudentInfoEN.con_IsMessage);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvStudentInfoEN.con_IsMessage);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_Microblog,
    ) == true
  ) {
    const strComparisonOpMicroblog: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_Microblog];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_Microblog,
      objvStudentInfoCond.microblog,
      strComparisonOpMicroblog,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_PhoneNumber,
    ) == true
  ) {
    const strComparisonOpPhoneNumber: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_PhoneNumber];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_PhoneNumber,
      objvStudentInfoCond.phoneNumber,
      strComparisonOpPhoneNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_QQ,
    ) == true
  ) {
    const strComparisonOpQQ: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_QQ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_QQ,
      objvStudentInfoCond.qQ,
      strComparisonOpQQ,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_RegisterPassword,
    ) == true
  ) {
    const strComparisonOpRegisterPassword: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_RegisterPassword];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_RegisterPassword,
      objvStudentInfoCond.registerPassword,
      strComparisonOpRegisterPassword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_UpdDate,
      objvStudentInfoCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_UpdUser,
      objvStudentInfoCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvStudentInfoCond.dicFldComparisonOp,
      clsvStudentInfoEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvStudentInfoCond.dicFldComparisonOp[clsvStudentInfoEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvStudentInfoEN.con_Memo,
      objvStudentInfoCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvStudentInfoENS:源对象
 * @param objvStudentInfoENT:目标对象
 */
export function vStudentInfo_CopyObjTo(
  objvStudentInfoENS: clsvStudentInfoEN,
  objvStudentInfoENT: clsvStudentInfoEN,
): void {
  objvStudentInfoENT.idStudentInfo = objvStudentInfoENS.idStudentInfo; //学生流水号
  objvStudentInfoENT.stuId = objvStudentInfoENS.stuId; //学号
  objvStudentInfoENT.stuName = objvStudentInfoENS.stuName; //姓名
  objvStudentInfoENT.idPolitics = objvStudentInfoENS.idPolitics; //政治面貌流水号
  objvStudentInfoENT.politicsID = objvStudentInfoENS.politicsID; //政治面貌ID
  objvStudentInfoENT.politicsName = objvStudentInfoENS.politicsName; //政治面貌
  objvStudentInfoENT.idSex = objvStudentInfoENS.idSex; //性别流水号
  objvStudentInfoENT.sexDesc = objvStudentInfoENS.sexDesc; //性别名称
  objvStudentInfoENT.idEthnic = objvStudentInfoENS.idEthnic; //民族流水号
  objvStudentInfoENT.ethnicID = objvStudentInfoENS.ethnicID; //民族ID
  objvStudentInfoENT.ethnicName = objvStudentInfoENS.ethnicName; //民族名称
  objvStudentInfoENT.idUniZone = objvStudentInfoENS.idUniZone; //校区流水号
  objvStudentInfoENT.uniZoneDesc = objvStudentInfoENS.uniZoneDesc; //校区名称
  objvStudentInfoENT.idStuType = objvStudentInfoENS.idStuType; //学生类别流水号
  objvStudentInfoENT.stuTypeID = objvStudentInfoENS.stuTypeID; //学生类别ID
  objvStudentInfoENT.stuTypeDesc = objvStudentInfoENS.stuTypeDesc; //学生类别名称
  objvStudentInfoENT.idXzCollege = objvStudentInfoENS.idXzCollege; //学院流水号
  objvStudentInfoENT.collegeId = objvStudentInfoENS.collegeId; //学院ID
  objvStudentInfoENT.collegeName = objvStudentInfoENS.collegeName; //学院名称
  objvStudentInfoENT.collegeIdInGP = objvStudentInfoENS.collegeIdInGP; //CollegeIdInGP
  objvStudentInfoENT.collegeNameA = objvStudentInfoENS.collegeNameA; //学院名称简写
  objvStudentInfoENT.idXzMajor = objvStudentInfoENS.idXzMajor; //专业流水号
  objvStudentInfoENT.majorID = objvStudentInfoENS.majorID; //专业ID
  objvStudentInfoENT.majorName = objvStudentInfoENS.majorName; //专业名称
  objvStudentInfoENT.isNormal = objvStudentInfoENS.isNormal; //IsNormal
  objvStudentInfoENT.idGradeBase = objvStudentInfoENS.idGradeBase; //年级流水号
  objvStudentInfoENT.gradeBaseName = objvStudentInfoENS.gradeBaseName; //年级名称
  objvStudentInfoENT.idAdminCls = objvStudentInfoENS.idAdminCls; //行政班流水号
  objvStudentInfoENT.adminClsName = objvStudentInfoENS.adminClsName; //行政班名称
  objvStudentInfoENT.adminClsId = objvStudentInfoENS.adminClsId; //行政班代号
  objvStudentInfoENT.idAdminClsType = objvStudentInfoENS.idAdminClsType; //行政班级类型流水号
  objvStudentInfoENT.adminClsTypeName = objvStudentInfoENS.adminClsTypeName; //行政班级类型名称
  objvStudentInfoENT.birthday = objvStudentInfoENS.birthday; //出生日期
  objvStudentInfoENT.nativePlace = objvStudentInfoENS.nativePlace; //籍贯
  objvStudentInfoENT.duty = objvStudentInfoENS.duty; //职位
  objvStudentInfoENT.idCardNo = objvStudentInfoENS.idCardNo; //身份证号
  objvStudentInfoENT.stuCardNo = objvStudentInfoENS.stuCardNo; //学生证号
  objvStudentInfoENT.liveAddress = objvStudentInfoENS.liveAddress; //居住地址
  objvStudentInfoENT.homePhone = objvStudentInfoENS.homePhone; //住宅电话
  objvStudentInfoENT.idCardNo2 = objvStudentInfoENS.idCardNo2; //内卡号
  objvStudentInfoENT.cardNo = objvStudentInfoENS.cardNo; //卡号
  objvStudentInfoENT.isAvconClassUser = objvStudentInfoENS.isAvconClassUser; //IsAvconClassUser
  objvStudentInfoENT.isAvconUser = objvStudentInfoENS.isAvconUser; //IsAvconUser
  objvStudentInfoENT.isGpUser = objvStudentInfoENS.isGpUser; //是否Gp用户
  objvStudentInfoENT.isLocalUser = objvStudentInfoENS.isLocalUser; //是否本地用户
  objvStudentInfoENT.isLeaved = objvStudentInfoENS.isLeaved; //IsLeaved
  objvStudentInfoENT.userId = objvStudentInfoENS.userId; //用户ID
  objvStudentInfoENT.userId4Avcon = objvStudentInfoENS.userId4Avcon; //UserId4Avcon
  objvStudentInfoENT.enrollmentDate = objvStudentInfoENS.enrollmentDate; //入校日期
  objvStudentInfoENT.postCode = objvStudentInfoENS.postCode; //邮编
  objvStudentInfoENT.email = objvStudentInfoENS.email; //电子邮箱
  objvStudentInfoENT.isMessage = objvStudentInfoENS.isMessage; //IsMessage
  objvStudentInfoENT.microblog = objvStudentInfoENS.microblog; //Microblog
  objvStudentInfoENT.phoneNumber = objvStudentInfoENS.phoneNumber; //PhoneNumber
  objvStudentInfoENT.qQ = objvStudentInfoENS.qQ; //QQ
  objvStudentInfoENT.registerPassword = objvStudentInfoENS.registerPassword; //RegisterPassword
  objvStudentInfoENT.updDate = objvStudentInfoENS.updDate; //修改日期
  objvStudentInfoENT.updUser = objvStudentInfoENS.updUser; //修改人
  objvStudentInfoENT.memo = objvStudentInfoENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvStudentInfoENS:源对象
 * @param objvStudentInfoENT:目标对象
 */
export function vStudentInfo_GetObjFromJsonObj(
  objvStudentInfoENS: clsvStudentInfoEN,
): clsvStudentInfoEN {
  const objvStudentInfoENT: clsvStudentInfoEN = new clsvStudentInfoEN();
  ObjectAssign(objvStudentInfoENT, objvStudentInfoENS);
  return objvStudentInfoENT;
}
