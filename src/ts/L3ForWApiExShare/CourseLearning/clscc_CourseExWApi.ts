/**
 * 类名:clscc_CourseExWApi
 * 表名:cc_Course(01120056)
 * 版本:2023.08.27.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/29 09:01:33
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 课程(cc_Course)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年08月29日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  cc_Course_GetObjLstCache,
  cc_Course_GetObjLstAsync,
  cc_Course_SortFunByKey,
  cc_Course_FilterFunByKey,
} from '@/ts/L3ForWApi/CourseLearning/clscc_CourseWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';
import { clscc_CourseENEx } from '@/ts/L0Entity/CourseLearning/clscc_CourseENEx';

import { clsXzSchoolEN } from '@/ts/L0Entity/SystemSet/clsXzSchoolEN';
import { XzMajor_func, XzMajor_funcKey } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { XzClg_func, XzClg_funcKey } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import {
  cc_ExcellentType_func,
  cc_ExcellentType_funcKey,
} from '@/ts/L3ForWApi/CourseLearning/clscc_ExcellentTypeWApi';
import { clscc_ExcellentTypeEN } from '@/ts/L0Entity/CourseLearning/clscc_ExcellentTypeEN';
import {
  cc_CourseType_func,
  cc_CourseType_funcKey,
} from '@/ts/L3ForWApi/CourseLearning/clscc_CourseTypeWApi';
import { clscc_CourseTypeEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseTypeEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { XzSchool_func, XzSchool_funcKey } from '@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi';

export const cc_CourseExController = 'cc_CourseExApi';
export const cc_CourseEx_ConstructorName = 'cc_CourseEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_CourseEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objcc_CourseENS:源对象
 * @returns 目标对象=>clscc_CourseEN:objcc_CourseENT
 **/
export function cc_CourseEx_CopyToEx(objcc_CourseENS: clscc_CourseEN): clscc_CourseENEx {
  const strThisFuncName = cc_CourseEx_CopyToEx.name;
  const objcc_CourseENT = new clscc_CourseENEx();
  try {
    ObjectAssign(objcc_CourseENT, objcc_CourseENS);
    return objcc_CourseENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_CourseENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_CourseEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_CourseENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrcc_CourseObjLst = await cc_Course_GetObjLstCache();
  const arrcc_CourseExObjLst = arrcc_CourseObjLst.map(cc_CourseEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_CourseEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrcc_CourseExObjLst) {
      await cc_CourseEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_CourseExObjLst.length == 0) return arrcc_CourseExObjLst;
  let arrcc_CourseSel: Array<clscc_CourseENEx> = arrcc_CourseExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objcc_CourseCond = new clscc_CourseENEx();
  ObjectAssign(objcc_CourseCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clscc_CourseWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_CourseSel = arrcc_CourseSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_CourseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseSel = arrcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseSel = arrcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseSel = arrcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseSel = arrcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseSel = arrcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseSel = arrcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseSel = arrcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrcc_CourseSel = arrcc_CourseSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseSel = arrcc_CourseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseSel = arrcc_CourseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrcc_CourseSel = arrcc_CourseSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrcc_CourseSel = arrcc_CourseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrcc_CourseSel = arrcc_CourseSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrcc_CourseSel = arrcc_CourseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrcc_CourseSel.length == 0) return arrcc_CourseSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_CourseSel = arrcc_CourseSel.sort(cc_CourseEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_CourseSel = arrcc_CourseSel.sort(objPagerPara.sortFun);
    }
    arrcc_CourseSel = arrcc_CourseSel.slice(intStart, intEnd);
    return arrcc_CourseSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_CourseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_CourseEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_CourseENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_CourseObjLst = await cc_Course_GetObjLstAsync(objPagerPara.whereCond);
  const arrcc_CourseExObjLst = arrcc_CourseObjLst.map(cc_CourseEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_CourseEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrcc_CourseExObjLst) {
      await cc_CourseEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_CourseExObjLst.length == 0) return arrcc_CourseExObjLst;
  let arrcc_CourseSel: Array<clscc_CourseENEx> = arrcc_CourseExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_CourseSel = arrcc_CourseSel.sort(cc_CourseEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_CourseSel = arrcc_CourseSel.sort(objPagerPara.sortFun);
    }
    arrcc_CourseSel = arrcc_CourseSel.slice(intStart, intEnd);
    return arrcc_CourseSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_CourseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseS:源对象
 **/
export async function cc_CourseEx_FuncMapSchoolName(objcc_Course: clscc_CourseENEx) {
  const strThisFuncName = cc_CourseEx_FuncMapSchoolName.name;
  try {
    if (IsNullOrEmpty(objcc_Course.schoolName) == true) {
      const XzSchoolidSchool = objcc_Course.idSchool;
      const XzSchoolSchoolName = await XzSchool_func(
        clsXzSchoolEN.con_IdSchool,
        clsXzSchoolEN.con_SchoolName,
        XzSchoolidSchool,
      );
      objcc_Course.schoolName = XzSchoolSchoolName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000469)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseS:源对象
 **/
export async function cc_CourseEx_FuncMapMajorName(objcc_Course: clscc_CourseENEx) {
  const strThisFuncName = cc_CourseEx_FuncMapMajorName.name;
  try {
    if (IsNullOrEmpty(objcc_Course.majorName) == true) {
      const XzMajoridXzMajor = objcc_Course.idXzMajor;
      const XzMajorMajorName = await XzMajor_func(
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        XzMajoridXzMajor,
      );
      objcc_Course.majorName = XzMajorMajorName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000426)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseS:源对象
 **/
export async function cc_CourseEx_FuncMapCollegeName(objcc_Course: clscc_CourseENEx) {
  const strThisFuncName = cc_CourseEx_FuncMapCollegeName.name;
  try {
    if (IsNullOrEmpty(objcc_Course.collegeName) == true) {
      const XzClgidXzCollege = objcc_Course.idXzCollege;
      const XzClgCollegeName = await XzClg_func(
        clsXzClgEN.con_IdXzCollege,
        clsXzClgEN.con_CollegeName,
        XzClgidXzCollege,
      );
      objcc_Course.collegeName = XzClgCollegeName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseS:源对象
 **/
export async function cc_CourseEx_FuncMapExcellentTypeName(objcc_Course: clscc_CourseENEx) {
  const strThisFuncName = cc_CourseEx_FuncMapExcellentTypeName.name;
  try {
    if (IsNullOrEmpty(objcc_Course.excellentTypeName) == true) {
      const ccExcellentTypeExcellentTypeId = objcc_Course.excellentTypeId;
      const ccExcellentTypeExcellentTypeName = await cc_ExcellentType_func(
        clscc_ExcellentTypeEN.con_ExcellentTypeId,
        clscc_ExcellentTypeEN.con_ExcellentTypeName,
        ccExcellentTypeExcellentTypeId,
      );
      objcc_Course.excellentTypeName = ccExcellentTypeExcellentTypeName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000470)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseS:源对象
 **/
export async function cc_CourseEx_FuncMapCourseTypeName(objcc_Course: clscc_CourseENEx) {
  const strThisFuncName = cc_CourseEx_FuncMapCourseTypeName.name;
  try {
    if (IsNullOrEmpty(objcc_Course.courseTypeName) == true) {
      const ccCourseTypeCourseTypeID = objcc_Course.courseTypeId;
      const ccCourseTypeCourseTypeName = await cc_CourseType_func(
        clscc_CourseTypeEN.con_CourseTypeId,
        clscc_CourseTypeEN.con_CourseTypeName,
        ccCourseTypeCourseTypeID,
      );
      objcc_Course.courseTypeName = ccCourseTypeCourseTypeName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000471)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-08-29
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_CourseEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscc_CourseENEx.con_SchoolName:
        return (a: clscc_CourseENEx, b: clscc_CourseENEx) => {
          return a.schoolName.localeCompare(b.schoolName);
        };
      case clscc_CourseENEx.con_MajorName:
        return (a: clscc_CourseENEx, b: clscc_CourseENEx) => {
          return a.majorName.localeCompare(b.majorName);
        };
      case clscc_CourseENEx.con_CollegeName:
        return (a: clscc_CourseENEx, b: clscc_CourseENEx) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clscc_CourseENEx.con_ExcellentTypeName:
        return (a: clscc_CourseENEx, b: clscc_CourseENEx) => {
          return a.excellentTypeName.localeCompare(b.excellentTypeName);
        };
      case clscc_CourseENEx.con_CourseTypeName:
        return (a: clscc_CourseENEx, b: clscc_CourseENEx) => {
          return a.courseTypeName.localeCompare(b.courseTypeName);
        };
      default:
        return cc_Course_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clscc_CourseENEx.con_SchoolName:
        return (a: clscc_CourseENEx, b: clscc_CourseENEx) => {
          return b.schoolName.localeCompare(a.schoolName);
        };
      case clscc_CourseENEx.con_MajorName:
        return (a: clscc_CourseENEx, b: clscc_CourseENEx) => {
          return b.majorName.localeCompare(a.majorName);
        };
      case clscc_CourseENEx.con_CollegeName:
        return (a: clscc_CourseENEx, b: clscc_CourseENEx) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clscc_CourseENEx.con_ExcellentTypeName:
        return (a: clscc_CourseENEx, b: clscc_CourseENEx) => {
          return b.excellentTypeName.localeCompare(a.excellentTypeName);
        };
      case clscc_CourseENEx.con_CourseTypeName:
        return (a: clscc_CourseENEx, b: clscc_CourseENEx) => {
          return b.courseTypeName.localeCompare(a.courseTypeName);
        };
      default:
        return cc_Course_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-08-29
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function cc_CourseEx_FuncMapByFldName(strFldName: string, objcc_CourseEx: clscc_CourseENEx) {
  const strThisFuncName = cc_CourseEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clscc_CourseEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscc_CourseENEx.con_SchoolName:
      return cc_CourseEx_FuncMapSchoolName(objcc_CourseEx);
    case clscc_CourseENEx.con_MajorName:
      return cc_CourseEx_FuncMapMajorName(objcc_CourseEx);
    case clscc_CourseENEx.con_CollegeName:
      return cc_CourseEx_FuncMapCollegeName(objcc_CourseEx);
    case clscc_CourseENEx.con_ExcellentTypeName:
      return cc_CourseEx_FuncMapExcellentTypeName(objcc_CourseEx);
    case clscc_CourseENEx.con_CourseTypeName:
      return cc_CourseEx_FuncMapCourseTypeName(objcc_CourseEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-08-29
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function cc_CourseEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clscc_CourseENEx.con_SchoolName:
      return (obj: clscc_CourseENEx) => {
        return obj.schoolName === value;
      };
    case clscc_CourseENEx.con_MajorName:
      return (obj: clscc_CourseENEx) => {
        return obj.majorName === value;
      };
    case clscc_CourseENEx.con_CollegeName:
      return (obj: clscc_CourseENEx) => {
        return obj.collegeName === value;
      };
    case clscc_CourseENEx.con_ExcellentTypeName:
      return (obj: clscc_CourseENEx) => {
        return obj.excellentTypeName === value;
      };
    case clscc_CourseENEx.con_CourseTypeName:
      return (obj: clscc_CourseENEx) => {
        return obj.courseTypeName === value;
      };
    default:
      return cc_Course_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseS:源对象
 **/
export async function cc_CourseEx_FuncMapKeySchoolName(
  objcc_Course: clscc_CourseENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseEx_FuncMapKeySchoolName.name;
  try {
    if (IsNullOrEmpty(objcc_Course.schoolName) == true) return [];
    const XzSchoolSchoolName = objcc_Course.schoolName;
    const arrIdSchool = await XzSchool_funcKey(
      clsXzSchoolEN.con_SchoolName,
      XzSchoolSchoolName,
      enumComparisonOp.Like_03,
    );
    return arrIdSchool;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000469)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseS:源对象
 **/
export async function cc_CourseEx_FuncMapKeyMajorName(
  objcc_Course: clscc_CourseENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseEx_FuncMapKeyMajorName.name;
  try {
    if (IsNullOrEmpty(objcc_Course.majorName) == true) return [];
    const XzMajorMajorName = objcc_Course.majorName;
    const arrIdXzMajor = await XzMajor_funcKey(
      clsXzMajorEN.con_MajorName,
      XzMajorMajorName,
      enumComparisonOp.Like_03,
    );
    return arrIdXzMajor;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000426)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseS:源对象
 **/
export async function cc_CourseEx_FuncMapKeyCollegeName(
  objcc_Course: clscc_CourseENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseEx_FuncMapKeyCollegeName.name;
  try {
    if (IsNullOrEmpty(objcc_Course.collegeName) == true) return [];
    const XzClgCollegeName = objcc_Course.collegeName;
    const arrIdXzCollege = await XzClg_funcKey(
      clsXzClgEN.con_CollegeName,
      XzClgCollegeName,
      enumComparisonOp.Like_03,
    );
    return arrIdXzCollege;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseS:源对象
 **/
export async function cc_CourseEx_FuncMapKeyExcellentTypeName(
  objcc_Course: clscc_CourseENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseEx_FuncMapKeyExcellentTypeName.name;
  try {
    if (IsNullOrEmpty(objcc_Course.excellentTypeName) == true) return [];
    const ccExcellentTypeExcellentTypeName = objcc_Course.excellentTypeName;
    const arrExcellentTypeId = await cc_ExcellentType_funcKey(
      clscc_ExcellentTypeEN.con_ExcellentTypeName,
      ccExcellentTypeExcellentTypeName,
      enumComparisonOp.Like_03,
    );
    return arrExcellentTypeId;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000470)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseS:源对象
 **/
export async function cc_CourseEx_FuncMapKeyCourseTypeName(
  objcc_Course: clscc_CourseENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseEx_FuncMapKeyCourseTypeName.name;
  try {
    if (IsNullOrEmpty(objcc_Course.courseTypeName) == true) return [];
    const ccCourseTypeCourseTypeName = objcc_Course.courseTypeName;
    const arrCourseTypeID = await cc_CourseType_funcKey(
      clscc_CourseTypeEN.con_CourseTypeName,
      ccCourseTypeCourseTypeName,
      enumComparisonOp.Like_03,
    );
    return arrCourseTypeID;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000471)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
