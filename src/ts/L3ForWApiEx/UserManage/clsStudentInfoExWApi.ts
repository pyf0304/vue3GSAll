/**
 * 类名:clsStudentInfoExWApi
 * 表名:StudentInfo(01120131)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:43:49
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 学生(StudentInfo)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年03月18日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  StudentInfo_GetObjLstCache,
  StudentInfo_GetObjLstAsync,
  StudentInfo_SortFunByKey,
  StudentInfo_FilterFunByKey,
} from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
import { clsStudentInfoENEx } from '@/ts/L0Entity/UserManage/clsStudentInfoENEx';
import { XzGrade_func, XzGrade_funcKey } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
import { clsXzGradeEN } from '@/ts/L0Entity/BaseInfo/clsXzGradeEN';
import { XzGradeBase_func, XzGradeBase_funcKey } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
import { XzUniZone_func, XzUniZone_funcKey } from '@/ts/L3ForWApi/SysPara/clsXzUniZoneWApi';
import { clsXzUniZoneEN } from '@/ts/L0Entity/SysPara/clsXzUniZoneEN';
import { XzClg_func, XzClg_funcKey } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { XzMajor_func, XzMajor_funcKey } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { Sex_func, Sex_funcKey } from '@/ts/L3ForWApi/SysPara/clsSexWApi';
import { clsSexEN } from '@/ts/L0Entity/SysPara/clsSexEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

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
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-18
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
      case clsStudentInfoENEx.con_StuNameEx:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return a.stuNameEx.localeCompare(b.stuNameEx);
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
      case clsStudentInfoENEx.con_StuNameEx:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return b.stuNameEx.localeCompare(a.stuNameEx);
        };
      default:
        return StudentInfo_SortFunByKey(strKey, AscOrDesc);
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

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function StudentInfoEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsStudentInfoENEx.con_GradeName:
      return (obj: clsStudentInfoENEx) => {
        return obj.gradeName === value;
      };
    case clsStudentInfoENEx.con_GradeBaseName:
      return (obj: clsStudentInfoENEx) => {
        return obj.gradeBaseName === value;
      };
    case clsStudentInfoENEx.con_UniZoneDesc:
      return (obj: clsStudentInfoENEx) => {
        return obj.uniZoneDesc === value;
      };
    case clsStudentInfoENEx.con_CollegeName:
      return (obj: clsStudentInfoENEx) => {
        return obj.collegeName === value;
      };
    case clsStudentInfoENEx.con_MajorName:
      return (obj: clsStudentInfoENEx) => {
        return obj.majorName === value;
      };
    case clsStudentInfoENEx.con_DateTimeSim:
      return (obj: clsStudentInfoENEx) => {
        return obj.dateTimeSim === value;
      };
    case clsStudentInfoENEx.con_SexDesc:
      return (obj: clsStudentInfoENEx) => {
        return obj.sexDesc === value;
      };
    case clsStudentInfoENEx.con_StuNameEx:
      return (obj: clsStudentInfoENEx) => {
        return obj.stuNameEx === value;
      };
    default:
      return StudentInfo_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfoEx_FuncMapKeyGradeName(
  objStudentInfo: clsStudentInfoENEx,
): Promise<Array<string>> {
  const strThisFuncName = StudentInfoEx_FuncMapKeyGradeName.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.gradeName) == true) return [];
    const XzGradeGradeName = objStudentInfo.gradeName;
    const arrIdGrade = await XzGrade_funcKey(
      clsXzGradeEN.con_GradeName,
      XzGradeGradeName,
      enumComparisonOp.Like_03,
    );
    return arrIdGrade;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000477)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfoEx_ConstructorName,
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
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfoEx_FuncMapKeyGradeBaseName(
  objStudentInfo: clsStudentInfoENEx,
): Promise<Array<string>> {
  const strThisFuncName = StudentInfoEx_FuncMapKeyGradeBaseName.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.gradeBaseName) == true) return [];
    const XzGradeBaseGradeBaseName = objStudentInfo.gradeBaseName;
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
      studentInfoEx_ConstructorName,
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
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfoEx_FuncMapKeyUniZoneDesc(
  objStudentInfo: clsStudentInfoENEx,
): Promise<Array<string>> {
  const strThisFuncName = StudentInfoEx_FuncMapKeyUniZoneDesc.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.uniZoneDesc) == true) return [];
    const XzUniZoneUniZoneDesc = objStudentInfo.uniZoneDesc;
    const arrIdUniZone = await XzUniZone_funcKey(
      clsXzUniZoneEN.con_UniZoneDesc,
      XzUniZoneUniZoneDesc,
      enumComparisonOp.Like_03,
    );
    return arrIdUniZone;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000478)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfoEx_ConstructorName,
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
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfoEx_FuncMapKeyCollegeName(
  objStudentInfo: clsStudentInfoENEx,
): Promise<Array<string>> {
  const strThisFuncName = StudentInfoEx_FuncMapKeyCollegeName.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.collegeName) == true) return [];
    const XzClgCollegeName = objStudentInfo.collegeName;
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
      studentInfoEx_ConstructorName,
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
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfoEx_FuncMapKeyMajorName(
  objStudentInfo: clsStudentInfoENEx,
): Promise<Array<string>> {
  const strThisFuncName = StudentInfoEx_FuncMapKeyMajorName.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.majorName) == true) return [];
    const XzMajorMajorName = objStudentInfo.majorName;
    const arrIdXzMajor = await XzMajor_funcKey(
      clsXzMajorEN.con_MajorName,
      XzMajorMajorName,
      enumComparisonOp.Like_03,
    );
    return arrIdXzMajor;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000426)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfoEx_ConstructorName,
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
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfoEx_FuncMapKeySexDesc(
  objStudentInfo: clsStudentInfoENEx,
): Promise<Array<string>> {
  const strThisFuncName = StudentInfoEx_FuncMapKeySexDesc.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.sexDesc) == true) return [];
    const SexSexDesc = objStudentInfo.sexDesc;
    const arrIdSex = await Sex_funcKey(clsSexEN.con_SexDesc, SexSexDesc, enumComparisonOp.Like_03);
    return arrIdSex;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000479)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
