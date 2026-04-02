/**
 * 类名:clsCurrEduClsExWApi
 * 表名:CurrEduCls(01120123)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:43:55
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 当前教学班(CurrEduCls)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年03月18日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  CurrEduCls_GetObjLstCache,
  CurrEduCls_GetObjLstAsync,
  CurrEduCls_SortFunByKey,
  CurrEduCls_FilterFunByKey,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import { clsCurrEduClsENEx } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsENEx';
import { XzClg_func, XzClg_funcKey } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { XzGradeBase_func, XzGradeBase_funcKey } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
import {
  vcc_Course_Sim_func,
  vcc_Course_Sim_funcKey,
} from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi';
import { clsvcc_Course_SimEN } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN';
import { ClsRmType_func, ClsRmType_funcKey } from '@/ts/L3ForWApi/SystemSet/clsClsRmTypeWApi';
import { clsClsRmTypeEN } from '@/ts/L0Entity/SystemSet/clsClsRmTypeEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const currEduClsExController = 'CurrEduClsExApi';
export const currEduClsEx_ConstructorName = 'currEduClsEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function CurrEduClsEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objCurrEduClsENS:源对象
 * @returns 目标对象=>clsCurrEduClsEN:objCurrEduClsENT
 **/
export function CurrEduClsEx_CopyToEx(objCurrEduClsENS: clsCurrEduClsEN): clsCurrEduClsENEx {
  const strThisFuncName = CurrEduClsEx_CopyToEx.name;
  const objCurrEduClsENT = new clsCurrEduClsENEx();
  try {
    ObjectAssign(objCurrEduClsENT, objCurrEduClsENS);
    return objCurrEduClsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCurrEduClsENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CurrEduClsEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clsCurrEduClsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrCurrEduClsObjLst = await CurrEduCls_GetObjLstCache(strCourseId);
  const arrCurrEduClsExObjLst = arrCurrEduClsObjLst.map(CurrEduClsEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCurrEduClsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrCurrEduClsExObjLst) {
      await CurrEduClsEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrCurrEduClsExObjLst.length == 0) return arrCurrEduClsExObjLst;
  let arrCurrEduClsSel: Array<clsCurrEduClsENEx> = arrCurrEduClsExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objCurrEduClsCond = new clsCurrEduClsENEx();
  ObjectAssign(objCurrEduClsCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsCurrEduClsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCurrEduClsSel = arrCurrEduClsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCurrEduClsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsSel = arrCurrEduClsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCurrEduClsSel = arrCurrEduClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCurrEduClsSel = arrCurrEduClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCurrEduClsSel = arrCurrEduClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCurrEduClsSel = arrCurrEduClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCurrEduClsSel = arrCurrEduClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCurrEduClsSel = arrCurrEduClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrCurrEduClsSel = arrCurrEduClsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsSel = arrCurrEduClsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsSel = arrCurrEduClsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCurrEduClsSel = arrCurrEduClsSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCurrEduClsSel = arrCurrEduClsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCurrEduClsSel = arrCurrEduClsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCurrEduClsSel = arrCurrEduClsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCurrEduClsSel.length == 0) return arrCurrEduClsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCurrEduClsSel = arrCurrEduClsSel.sort(CurrEduClsEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCurrEduClsSel = arrCurrEduClsSel.sort(objPagerPara.sortFun);
    }
    arrCurrEduClsSel = arrCurrEduClsSel.slice(intStart, intEnd);
    return arrCurrEduClsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCurrEduClsENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CurrEduClsEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCurrEduClsENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrCurrEduClsObjLst = await CurrEduCls_GetObjLstAsync(objPagerPara.whereCond);
  const arrCurrEduClsExObjLst = arrCurrEduClsObjLst.map(CurrEduClsEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCurrEduClsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrCurrEduClsExObjLst) {
      await CurrEduClsEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrCurrEduClsExObjLst.length == 0) return arrCurrEduClsExObjLst;
  let arrCurrEduClsSel: Array<clsCurrEduClsENEx> = arrCurrEduClsExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCurrEduClsSel = arrCurrEduClsSel.sort(CurrEduClsEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCurrEduClsSel = arrCurrEduClsSel.sort(objPagerPara.sortFun);
    }
    arrCurrEduClsSel = arrCurrEduClsSel.slice(intStart, intEnd);
    return arrCurrEduClsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCurrEduClsENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapCollegeName(objCurrEduCls: clsCurrEduClsENEx) {
  const strThisFuncName = CurrEduClsEx_FuncMapCollegeName.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.collegeName) == true) {
      const XzClgidXzCollege = objCurrEduCls.idXzCollege;
      const XzClgCollegeName = await XzClg_func(
        clsXzClgEN.con_IdXzCollege,
        clsXzClgEN.con_CollegeName,
        XzClgidXzCollege,
        clsSysPara4WebApi.spIdSchool,
      );
      objCurrEduCls.collegeName = XzClgCollegeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapGradeBaseName(objCurrEduCls: clsCurrEduClsENEx) {
  const strThisFuncName = CurrEduClsEx_FuncMapGradeBaseName.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.gradeBaseName) == true) {
      const XzGradeBaseidGradeBase = objCurrEduCls.idGradeBase;
      const XzGradeBaseGradeBaseName = await XzGradeBase_func(
        clsXzGradeBaseEN.con_IdGradeBase,
        clsXzGradeBaseEN.con_GradeBaseName,
        XzGradeBaseidGradeBase,
      );
      objCurrEduCls.gradeBaseName = XzGradeBaseGradeBaseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000457)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapCourseCode(objCurrEduCls: clsCurrEduClsENEx) {
  const strThisFuncName = CurrEduClsEx_FuncMapCourseCode.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.courseCode) == true) {
      const vccCourseSimCourseId = objCurrEduCls.courseId;
      const vccCourseSimCourseCode = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseCode,
        vccCourseSimCourseId,
      );
      objCurrEduCls.courseCode = vccCourseSimCourseCode;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000458)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapCourseName(objCurrEduCls: clsCurrEduClsENEx) {
  const strThisFuncName = CurrEduClsEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.courseName) == true) {
      const vccCourseSimCourseId = objCurrEduCls.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objCurrEduCls.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapClassRoomTypeDesc(objCurrEduCls: clsCurrEduClsENEx) {
  const strThisFuncName = CurrEduClsEx_FuncMapClassRoomTypeDesc.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.classRoomTypeDesc) == true) {
      const ClsRmTypeidClassRoomType = objCurrEduCls.idClassRoomType;
      const ClsRmTypeClassRoomTypeDesc = await ClsRmType_func(
        clsClsRmTypeEN.con_IdClassRoomType,
        clsClsRmTypeEN.con_ClassRoomTypeDesc,
        ClsRmTypeidClassRoomType,
      );
      objCurrEduCls.classRoomTypeDesc = ClsRmTypeClassRoomTypeDesc;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000459)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CurrEduClsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCurrEduClsENEx.con_CollegeName:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsCurrEduClsENEx.con_GradeBaseName:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return a.gradeBaseName.localeCompare(b.gradeBaseName);
        };
      case clsCurrEduClsENEx.con_CourseName:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsCurrEduClsENEx.con_CourseCode:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return a.courseCode.localeCompare(b.courseCode);
        };
      case clsCurrEduClsENEx.con_ClassRoomTypeDesc:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return a.classRoomTypeDesc.localeCompare(b.classRoomTypeDesc);
        };
      case clsCurrEduClsENEx.con_LastVisitedDate:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return a.lastVisitedDate.localeCompare(b.lastVisitedDate);
        };
      default:
        return CurrEduCls_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCurrEduClsENEx.con_CollegeName:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsCurrEduClsENEx.con_GradeBaseName:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return b.gradeBaseName.localeCompare(a.gradeBaseName);
        };
      case clsCurrEduClsENEx.con_CourseName:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsCurrEduClsENEx.con_CourseCode:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return b.courseCode.localeCompare(a.courseCode);
        };
      case clsCurrEduClsENEx.con_ClassRoomTypeDesc:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return b.classRoomTypeDesc.localeCompare(a.classRoomTypeDesc);
        };
      case clsCurrEduClsENEx.con_LastVisitedDate:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return b.lastVisitedDate.localeCompare(a.lastVisitedDate);
        };
      default:
        return CurrEduCls_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CurrEduClsEx_FuncMapByFldName(
  strFldName: string,
  objCurrEduClsEx: clsCurrEduClsENEx,
) {
  const strThisFuncName = CurrEduClsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCurrEduClsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCurrEduClsENEx.con_CollegeName:
      return CurrEduClsEx_FuncMapCollegeName(objCurrEduClsEx);
    case clsCurrEduClsENEx.con_GradeBaseName:
      return CurrEduClsEx_FuncMapGradeBaseName(objCurrEduClsEx);
    case clsCurrEduClsENEx.con_CourseName:
      return CurrEduClsEx_FuncMapCourseName(objCurrEduClsEx);
    case clsCurrEduClsENEx.con_CourseCode:
      return CurrEduClsEx_FuncMapCourseCode(objCurrEduClsEx);
    case clsCurrEduClsENEx.con_ClassRoomTypeDesc:
      return CurrEduClsEx_FuncMapClassRoomTypeDesc(objCurrEduClsEx);
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
 * 日期:2024-03-18
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CurrEduClsEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsCurrEduClsENEx.con_CollegeName:
      return (obj: clsCurrEduClsENEx) => {
        return obj.collegeName === value;
      };
    case clsCurrEduClsENEx.con_GradeBaseName:
      return (obj: clsCurrEduClsENEx) => {
        return obj.gradeBaseName === value;
      };
    case clsCurrEduClsENEx.con_CourseName:
      return (obj: clsCurrEduClsENEx) => {
        return obj.courseName === value;
      };
    case clsCurrEduClsENEx.con_CourseCode:
      return (obj: clsCurrEduClsENEx) => {
        return obj.courseCode === value;
      };
    case clsCurrEduClsENEx.con_ClassRoomTypeDesc:
      return (obj: clsCurrEduClsENEx) => {
        return obj.classRoomTypeDesc === value;
      };
    case clsCurrEduClsENEx.con_LastVisitedDate:
      return (obj: clsCurrEduClsENEx) => {
        return obj.lastVisitedDate === value;
      };
    default:
      return CurrEduCls_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapKeyCollegeName(
  objCurrEduCls: clsCurrEduClsENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsEx_FuncMapKeyCollegeName.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.collegeName) == true) return [];
    const XzClgCollegeName = objCurrEduCls.collegeName;
    const arrIdXzCollege = await XzClg_funcKey(
      clsXzClgEN.con_CollegeName,
      XzClgCollegeName,
      enumComparisonOp.Like_03,
      clsSysPara4WebApi.spIdSchool,
    );
    return arrIdXzCollege;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
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
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapKeyGradeBaseName(
  objCurrEduCls: clsCurrEduClsENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsEx_FuncMapKeyGradeBaseName.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.gradeBaseName) == true) return [];
    const XzGradeBaseGradeBaseName = objCurrEduCls.gradeBaseName;
    const arrIdGradeBase = await XzGradeBase_funcKey(
      clsXzGradeBaseEN.con_GradeBaseName,
      XzGradeBaseGradeBaseName,
      enumComparisonOp.Like_03,
    );
    return arrIdGradeBase;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000457)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
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
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapKeyCourseCode(
  objCurrEduCls: clsCurrEduClsENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsEx_FuncMapKeyCourseCode.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.courseCode) == true) return [];
    const vccCourseSimCourseCode = objCurrEduCls.courseCode;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseCode,
      vccCourseSimCourseCode,
      enumComparisonOp.Like_03,
    );
    return arrCourseId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000458)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
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
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapKeyCourseName(
  objCurrEduCls: clsCurrEduClsENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.courseName) == true) return [];
    const vccCourseSimCourseName = objCurrEduCls.courseName;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseName,
      vccCourseSimCourseName,
      enumComparisonOp.Like_03,
    );
    return arrCourseId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
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
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapKeyClassRoomTypeDesc(
  objCurrEduCls: clsCurrEduClsENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsEx_FuncMapKeyClassRoomTypeDesc.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.classRoomTypeDesc) == true) return [];
    const ClsRmTypeClassRoomTypeDesc = objCurrEduCls.classRoomTypeDesc;
    const arrIdClassRoomType = await ClsRmType_funcKey(
      clsClsRmTypeEN.con_ClassRoomTypeDesc,
      ClsRmTypeClassRoomTypeDesc,
      enumComparisonOp.Like_03,
    );
    return arrIdClassRoomType;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000459)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
