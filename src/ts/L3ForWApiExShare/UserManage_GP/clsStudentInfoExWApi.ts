import { Storage } from '@/utils/Storage';
import axios from 'axios';
import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import {
  StudentInfo_CopyObjTo,
  StudentInfo_GetFirstIDAsync,
  StudentInfo_GetFirstObjAsync,
  StudentInfo_GetObjByIdStudentInfoAsync,
  StudentInfo_UpdateRecordAsync,
} from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  StudentInfo_GetObjLstCache,
  StudentInfo_GetObjLstAsync,
  StudentInfo_SortFunByKey,
} from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
import { clsStudentInfoENEx } from '@/ts/L0Entity/UserManage/clsStudentInfoENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { clsXzGradeEN } from '@/ts/L0Entity/BaseInfo/clsXzGradeEN';
import { XzGrade_func } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
import { XzUniZone_func } from '@/ts/L3ForWApi/SysPara/clsXzUniZoneWApi';
import { clsXzUniZoneEN } from '@/ts/L0Entity/SysPara/clsXzUniZoneEN';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { XzClg_func } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { XzMajor_func } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { XzGradeBase_func } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsSexEN } from '@/ts/L0Entity/SysPara/clsSexEN';
import { Sex_func } from '@/ts/L3ForWApi/SysPara/clsSexWApi';
import { clsPlatDefaRoleEN } from '@/ts/L0Entity/SysPara/clsPlatDefaRoleEN';
import { PlatDefaRole_GetObjLstAsync } from '@/ts/L3ForWApi/SysPara/clsPlatDefaRoleWApi';

import { XzClgEx_GetDepartmentIdInGPByIdCollege } from '@/ts/L3ForWApiExShare/BaseInfo/clsXzClgExWApi';
import {
  QxUsersEx_AddNewUsers,
  QxUsersEx_AddUserRoleRelation,
} from '@/ts/L3ForWApiExShare/UserManage_GP/clsQxUsersExWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';

import { userStore } from '@/store/modulesShare/user';

export const studentInfoExController = 'StudentInfoExApi';
export const studentInfoEx_ConstructorName = 'studentInfoEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function StudentInfoEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objStudentInfoENS:源对象
 * @returns 目标对象=>clsStudentInfoEN:objStudentInfoENT
 **/
export function StudentInfoEx_CopyToEx(objStudentInfoENS: clsStudentInfoEN): clsStudentInfoENEx {
  const strThisFuncName = StudentInfoEx_CopyToEx.name;
  const objStudentInfoENT = new clsStudentInfoENEx();
  try {
    ObjectAssign(objStudentInfoENT, objStudentInfoENS);
    return objStudentInfoENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objStudentInfoENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function StudentInfoEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsStudentInfoENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrStudentInfoObjLst = await StudentInfo_GetObjLstCache();
  const arrStudentInfoExObjLst = arrStudentInfoObjLst.map(StudentInfoEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsStudentInfoEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrStudentInfoExObjLst) {
      await StudentInfoEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrStudentInfoExObjLst.length == 0) return arrStudentInfoExObjLst;
  let arrStudentInfoSel: Array<clsStudentInfoENEx> = arrStudentInfoExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objStudentInfoCond = new clsStudentInfoENEx();
  ObjectAssign(objStudentInfoCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsStudentInfoWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrStudentInfoSel = arrStudentInfoSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objStudentInfoCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrStudentInfoSel = arrStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrStudentInfoSel = arrStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrStudentInfoSel = arrStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrStudentInfoSel = arrStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrStudentInfoSel = arrStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrStudentInfoSel = arrStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrStudentInfoSel = arrStudentInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrStudentInfoSel = arrStudentInfoSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrStudentInfoSel = arrStudentInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrStudentInfoSel = arrStudentInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrStudentInfoSel = arrStudentInfoSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrStudentInfoSel = arrStudentInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrStudentInfoSel = arrStudentInfoSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrStudentInfoSel = arrStudentInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrStudentInfoSel.length == 0) return arrStudentInfoSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrStudentInfoSel = arrStudentInfoSel.sort(
        StudentInfoEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrStudentInfoSel = arrStudentInfoSel.sort(objPagerPara.sortFun);
    }
    arrStudentInfoSel = arrStudentInfoSel.slice(intStart, intEnd);
    return arrStudentInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      studentInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsStudentInfoENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function StudentInfoEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsStudentInfoENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrStudentInfoObjLst = await StudentInfo_GetObjLstAsync(objPagerPara.whereCond);
  const arrStudentInfoExObjLst = arrStudentInfoObjLst.map(StudentInfoEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsStudentInfoEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrStudentInfoExObjLst) {
      await StudentInfoEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrStudentInfoExObjLst.length == 0) return arrStudentInfoExObjLst;
  let arrStudentInfoSel: Array<clsStudentInfoENEx> = arrStudentInfoExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrStudentInfoSel = arrStudentInfoSel.sort(
        StudentInfoEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrStudentInfoSel = arrStudentInfoSel.sort(objPagerPara.sortFun);
    }
    arrStudentInfoSel = arrStudentInfoSel.slice(intStart, intEnd);
    return arrStudentInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      studentInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsStudentInfoENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function StudentInfoEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsStudentInfoENEx.con_GradeName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return a.gradeName.localeCompare(b.gradeName);
        };
      case clsStudentInfoENEx.con_GradeBaseName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return a.gradeBaseName.localeCompare(b.gradeBaseName);
        };
      case clsStudentInfoENEx.con_UniZoneDesc:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return a.uniZoneDesc.localeCompare(b.uniZoneDesc);
        };
      case clsStudentInfoENEx.con_CollegeName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsStudentInfoENEx.con_MajorName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return a.majorName.localeCompare(b.majorName);
        };
      case clsStudentInfoENEx.con_DateTimeSim:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      case clsStudentInfoENEx.con_SexDesc:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return a.sexDesc.localeCompare(b.sexDesc);
        };
      default:
        return StudentInfo_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsStudentInfoENEx.con_GradeName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return b.gradeName.localeCompare(a.gradeName);
        };
      case clsStudentInfoENEx.con_GradeBaseName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return b.gradeBaseName.localeCompare(a.gradeBaseName);
        };
      case clsStudentInfoENEx.con_UniZoneDesc:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return b.uniZoneDesc.localeCompare(a.uniZoneDesc);
        };
      case clsStudentInfoENEx.con_CollegeName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsStudentInfoENEx.con_MajorName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return b.majorName.localeCompare(a.majorName);
        };
      case clsStudentInfoENEx.con_DateTimeSim:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      case clsStudentInfoENEx.con_SexDesc:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return b.sexDesc.localeCompare(a.sexDesc);
        };
      default:
        return StudentInfo_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function StudentInfoEx_FuncMapByFldName(
  strFldName: string,
  objStudentInfoEx: clsStudentInfoENEx,
) {
  const strThisFuncName = StudentInfoEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsStudentInfoEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsStudentInfoENEx.con_GradeName:
      return StudentInfoEx_FuncMapGradeName(objStudentInfoEx);
    case clsStudentInfoENEx.con_GradeBaseName:
      return StudentInfoEx_FuncMapGradeBaseName(objStudentInfoEx);
    case clsStudentInfoENEx.con_UniZoneDesc:
      return StudentInfoEx_FuncMapUniZoneDesc(objStudentInfoEx);
    case clsStudentInfoENEx.con_CollegeName:
      return StudentInfoEx_FuncMapCollegeName(objStudentInfoEx);
    case clsStudentInfoENEx.con_MajorName:
      return StudentInfoEx_FuncMapMajorName(objStudentInfoEx);
    case clsStudentInfoENEx.con_DateTimeSim:
      return StudentInfoEx_FuncMapDateTimeSim(objStudentInfoEx);
    case clsStudentInfoENEx.con_SexDesc:
      return StudentInfoEx_FuncMapSexDesc(objStudentInfoEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

export function StudentInfoEx_GetIdStudentInfoByStuId(strStuId: string) {
  const strThisFuncName = StudentInfoEx_GetIdStudentInfoByStuId.name;
  // console.log(objStudentInfoEx);
  let strMsg = '';
  const strWhere = `${clsStudentInfoEN.con_StuId} = '${strStuId}'`;
  //如果是本表中字段,不需要映射
  const strIdStudentInfo = StudentInfo_GetFirstIDAsync(strWhere);
  return strIdStudentInfo;
}

export async function StudentInfoEx_GetObjByStuId(
  strStuId: string,
): Promise<clsStudentInfoEN | null> {
  const strThisFuncName = StudentInfoEx_GetIdStudentInfoByStuId.name;
  // console.log(objStudentInfoEx);
  // let strMsg = '';
  const strWhere = `${clsStudentInfoEN.con_StuId} = '${strStuId}'`;
  //如果是本表中字段,不需要映射
  const objStudentInfo = await StudentInfo_GetFirstObjAsync(strWhere);
  return objStudentInfo;
}

/**
 * 同步用户信息到学生
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param objUsersEN: 用户对象
 * @returns 获取的相应对象列表
 */
export async function StudentInfoEx_SynchUsersToStudent(
  objUsersEN: clsUsersEN,
): Promise<clsStudentInfoEN> {
  const strThisFuncName = StudentInfoEx_SynchUsersToStudent.name;
  const strAction = 'SynchUsersToStudent';
  const strUrl = StudentInfoEx_GetWebApiUrl(studentInfoExController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      objUsersEN,
    },
  };
  try {
    const response = await axios.post(strUrl, objUsersEN);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      //console.log(returnObj);
      return returnObj;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        studentInfoEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        studentInfoEx_ConstructorName,
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
 * 同步学生到平台
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdStudentInfo: 学生流水号
 * @param strSchoolId: 学校Id
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function StudentInfoEx_SynchStudentToPlatformBak(
  strIdStudentInfo: string,
  strSchoolId: string,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = StudentInfoEx_SynchStudentToPlatformBak.name;
  const strAction = 'SynchStudentToPlatform';
  const strUrl = StudentInfoEx_GetWebApiUrl(studentInfoExController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdStudentInfo,
      strSchoolId,
      strOpUser,
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        studentInfoEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        studentInfoEx_ConstructorName,
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfoEx_FuncMapGradeName(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfoEx_FuncMapGradeName.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.gradeName) == true) {
      const XzGradeidGrade = objStudentInfo.idGrade;
      const XzGradeGradeName = await XzGrade_func(
        clsXzGradeEN.con_IdGrade,
        clsXzGradeEN.con_GradeName,
        XzGradeidGrade,
      );
      objStudentInfo.gradeName = XzGradeGradeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000477)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfoEx_FuncMapGradeBaseName(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfoEx_FuncMapGradeBaseName.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.gradeBaseName) == true) {
      const XzGradeBaseidGradeBase = objStudentInfo.idGradeBase;
      const XzGradeBaseGradeBaseName = await XzGradeBase_func(
        clsXzGradeBaseEN.con_IdGradeBase,
        clsXzGradeBaseEN.con_GradeBaseName,
        XzGradeBaseidGradeBase,
      );
      objStudentInfo.gradeBaseName = XzGradeBaseGradeBaseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000457)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfoEx_FuncMapUniZoneDesc(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfoEx_FuncMapUniZoneDesc.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.uniZoneDesc) == true) {
      const XzUniZoneidUniZone = objStudentInfo.idUniZone;
      const XzUniZoneUniZoneDesc = await XzUniZone_func(
        clsXzUniZoneEN.con_IdUniZone,
        clsXzUniZoneEN.con_UniZoneDesc,
        XzUniZoneidUniZone,
      );
      objStudentInfo.uniZoneDesc = XzUniZoneUniZoneDesc;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000478)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfoEx_FuncMapCollegeName(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfoEx_FuncMapCollegeName.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.collegeName) == true) {
      const XzClgidXzCollege = objStudentInfo.idXzCollege;
      const XzClgCollegeName = await XzClg_func(
        clsXzClgEN.con_IdXzCollege,
        clsXzClgEN.con_CollegeName,
        XzClgidXzCollege,
        clsSysPara4WebApi.spIdSchool,
      );
      objStudentInfo.collegeName = XzClgCollegeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfoEx_FuncMapMajorName(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfoEx_FuncMapMajorName.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.majorName) == true) {
      const XzMajoridXzMajor = objStudentInfo.idXzMajor;
      const XzMajorMajorName = await XzMajor_func(
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        XzMajoridXzMajor,
      );
      objStudentInfo.majorName = XzMajorMajorName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000426)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfoEx_FuncMapDateTimeSim(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfoEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objStudentInfo.updDate);
      objStudentInfo.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfoEx_FuncMapSexDesc(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfoEx_FuncMapSexDesc.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.sexDesc) == true) {
      const SexIdSex = objStudentInfo.idSex;
      const SexSexDesc = await Sex_func(clsSexEN.con_IdSex, clsSexEN.con_SexDesc, SexIdSex);
      objStudentInfo.sexDesc = SexSexDesc;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000479)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 扩展删除学生
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param arrIdStu: 学生流水号殂
 * @returns 获取的相应对象列表
 */
export async function StudentInfoEx_DelStudentInfoEx(arrIdStu: Array<string>): Promise<boolean> {
  const strThisFuncName = StudentInfoEx_DelStudentInfoEx.name;
  const strAction = 'DelStudentInfoEx';
  const strUrl = StudentInfoEx_GetWebApiUrl(studentInfoExController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      arrIdStu,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdStu);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        studentInfoEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        studentInfoEx_ConstructorName,
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
 * 同步学生对象到用户权限统一平台
 * </summary>
 * <param name="strId_StudentInfo">学生流水号</param>
 * <param name="strSchoolId">学校Id</param>
 * <param name="strOpUserId">操作用户Id</param>
 * <returns>是否成功?</returns>
 **/
export async function StudentInfoEx_SynchStudentToPlatform(
  strIdStudentInfo: string,
  strIdSchool: string,
  strIdentityDesc: string,
  strOpUserId: string,
): Promise<boolean> {
  const objStudentInfo = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStudentInfo);
  if (objStudentInfo == null) return false;
  const strCondition = `${clsPlatDefaRoleEN.con_IdSchool}='${strIdSchool}' And ${clsPlatDefaRoleEN.con_PersonType}='${strIdentityDesc}' order by PrjId`;
  const arrvPlatDefaRoleobjLst = await PlatDefaRole_GetObjLstAsync(strCondition);
  const arrRoleId = new Array<string>();
  const arrPrjIdLst = new Array<string>();
  for (const objvPlatDefaRoleEN of arrvPlatDefaRoleobjLst) {
    if (arrPrjIdLst.indexOf(objvPlatDefaRoleEN.prjId) == -1) {
      arrPrjIdLst.push(objvPlatDefaRoleEN.prjId);
      arrRoleId.push(objvPlatDefaRoleEN.roleId);
    }
  }
  if (arrPrjIdLst.length == 0) {
    //clsRsStaffTypeEN objStaffTypeEN = clsRsStaffTypeBL.GetStaffTypeObjByid_StaffType_Cache(qsid_StaffType);
    const strMsg = `没有为[${strIdentityDesc}]在统一平台中设置相应的角色，请联系管理员!`;
    throw strMsg;
  }

  const strCurrDate = clsDateTime.getTodayDateTimeStr(0);

  if (IsNullOrEmpty(objStudentInfo.idXzCollege) == true) {
    const strMsg = Format(
      '该学生：{0}({1})没有相关学院部门，请设置学院部门再同步到统一平台！',
      objStudentInfo.stuName,
      objStudentInfo.stuId,
    );
    throw strMsg;
  }

  const objUsersEN = new clsQxUsersEN();
  objUsersEN.userId = objStudentInfo.stuId;
  objUsersEN.userName = objStudentInfo.stuName;
  objUsersEN.userStateId = '01';
  objUsersEN.idXzCollege = objStudentInfo.idXzCollege;
  // objUsersEN.idXzMajor = objStudentInfo.idXzMajor;
  objUsersEN.idGradeBase = objStudentInfo.idGradeBase;
  // objUsersEN.idGrade = objStudentInfo.idGrade;

  //objUsersEN.IdentityID = "04";
  if (IsNullOrEmpty(objStudentInfo.idXzCollege) == true) {
    objUsersEN.departmentId = '000000';
  } else {
    try {
      const strDepartmentIdInGP = await XzClgEx_GetDepartmentIdInGPByIdCollege(
        objStudentInfo.idXzCollege,
      );
      if (IsNullOrEmpty(strDepartmentIdInGP) == true) {
        objUsersEN.departmentId = '000000';
      } else {
        objUsersEN.departmentId = strDepartmentIdInGP;
      }
    } catch (objException) {
      throw objException;
    }
  }
  objUsersEN.stuTeacherId = objStudentInfo.stuId;
  if (IsNullOrEmpty(objStudentInfo.registerPassword) == true) {
    objUsersEN.password = '111111';
  } else {
    objUsersEN.password = objStudentInfo.registerPassword;
  }
  objUsersEN.updDate = strCurrDate;
  objUsersEN.updUser = strOpUserId;
  objUsersEN.memo = '由移动端导入到统一平台:' + strCurrDate;

  for (const strPrjId in arrPrjIdLst) {
    let bolIsFirst = true;
    for (const objvPlatDefaRoleEN of arrvPlatDefaRoleobjLst) {
      if (objvPlatDefaRoleEN.prjId != strPrjId) continue;
      if (bolIsFirst == true) {
        await QxUsersEx_AddNewUsers(
          objUsersEN,
          strPrjId,
          objvPlatDefaRoleEN.roleId,
          userStore.getUserId,
        );
        bolIsFirst = false;
      } else {
        await QxUsersEx_AddUserRoleRelation(
          objUsersEN.userId,
          objvPlatDefaRoleEN.roleId,
          userStore.getUserId,
        );
      }
    }
  }
  if (arrRoleId.length > 0) {
    await QxUsersEx_AddNewUsers(objUsersEN, '0062', arrRoleId[0], strOpUserId);
    // QxUsers_ReFreshCache();
  }
  if (arrRoleId.length > 1) {
    for (let i = 1; i < arrRoleId.length; i++) {
      await QxUsersEx_AddUserRoleRelation(objUsersEN.userId, arrRoleId[i], strOpUserId);
    }
    // QxUsers_ReFreshCache();
  }
  const objStudentInfo1 = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStudentInfo);
  if (objStudentInfo1 == null) return false;
  objStudentInfo1.SetIdStudentInfo(objStudentInfo1.idStudentInfo);
  objStudentInfo1.SetIsGpUser(true);
  await StudentInfo_UpdateRecordAsync(objStudentInfo1);

  return true;
}
