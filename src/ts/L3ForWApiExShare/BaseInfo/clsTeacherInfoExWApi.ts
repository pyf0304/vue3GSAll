/**
 * 类名:clsTeacherInfoExWApi
 * 表名:TeacherInfo(01120093)
 * 版本:2023.08.27.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/29 06:03:19
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教师(TeacherInfo)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年08月29日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  TeacherInfo_GetObjLstAsync,
  TeacherInfo_SortFunByKey,
  TeacherInfo_GetFirstIDAsync,
  TeacherInfo_GetFirstObjAsync,
} from '@/ts/L3ForWApi/BaseInfo/clsTeacherInfoWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsTeacherInfoEN } from '@/ts/L0Entity/BaseInfo/clsTeacherInfoEN';
import { clsTeacherInfoENEx } from '@/ts/L0Entity/BaseInfo/clsTeacherInfoENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Sex_func } from '@/ts/L3ForWApi/SysPara/clsSexWApi';
import { clsSexEN } from '@/ts/L0Entity/SysPara/clsSexEN';
import { XzUniZone_func } from '@/ts/L3ForWApi/SysPara/clsXzUniZoneWApi';
import { clsXzUniZoneEN } from '@/ts/L0Entity/SysPara/clsXzUniZoneEN';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { XzClg_func } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { RsEthnic_func } from '@/ts/L3ForWApi/SysPara/clsRsEthnicWApi';
import { clsRsEthnicEN } from '@/ts/L0Entity/SysPara/clsRsEthnicEN';
import { RsPolitics_func } from '@/ts/L3ForWApi/SysPara/clsRsPoliticsWApi';
import { clsRsPoliticsEN } from '@/ts/L0Entity/SysPara/clsRsPoliticsEN';
import { clsRsProfGradeEN } from '@/ts/L0Entity/SysPara/clsRsProfGradeEN';
import { RsProfGrade_func } from '@/ts/L3ForWApi/SysPara/clsRsProfGradeWApi';
import { clsRsStaffTypeEN } from '@/ts/L0Entity/SysPara/clsRsStaffTypeEN';
import { RsStaffType_func } from '@/ts/L3ForWApi/SysPara/clsRsStaffTypeWApi';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { XzMajor_func } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { RsAdminGrade_func } from '@/ts/L3ForWApi/SysPara/clsRsAdminGradeWApi';
import { clsRsAdminGradeEN } from '@/ts/L0Entity/SysPara/clsRsAdminGradeEN';

export const teacherInfoExController = 'TeacherInfoExApi';
export const teacherInfoEx_ConstructorName = 'teacherInfoEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function TeacherInfoEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objTeacherInfoENS:源对象
 * @returns 目标对象=>clsTeacherInfoEN:objTeacherInfoENT
 **/
export function TeacherInfoEx_CopyToEx(objTeacherInfoENS: clsTeacherInfoEN): clsTeacherInfoENEx {
  const strThisFuncName = TeacherInfoEx_CopyToEx.name;
  const objTeacherInfoENT = new clsTeacherInfoENEx();
  try {
    ObjectAssign(objTeacherInfoENT, objTeacherInfoENS);
    return objTeacherInfoENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      teacherInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objTeacherInfoENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function TeacherInfoEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTeacherInfoENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrTeacherInfoObjLst = await TeacherInfo_GetObjLstAsync(objPagerPara.whereCond);
  const arrTeacherInfoExObjLst = arrTeacherInfoObjLst.map(TeacherInfoEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsTeacherInfoEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrTeacherInfoExObjLst) {
      await TeacherInfoEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrTeacherInfoExObjLst.length == 0) return arrTeacherInfoExObjLst;
  let arrTeacherInfoSel: Array<clsTeacherInfoENEx> = arrTeacherInfoExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrTeacherInfoSel = arrTeacherInfoSel.sort(
        TeacherInfoEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrTeacherInfoSel = arrTeacherInfoSel.sort(objPagerPara.sortFun);
    }
    arrTeacherInfoSel = arrTeacherInfoSel.slice(intStart, intEnd);
    return arrTeacherInfoSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      teacherInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTeacherInfoENEx>();
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

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function TeacherInfoEx_FuncMapByFldName(
  strFldName: string,
  objTeacherInfoEx: clsTeacherInfoENEx,
) {
  const strThisFuncName = TeacherInfoEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsTeacherInfoEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsTeacherInfoENEx.con_SexDesc:
      return TeacherInfoEx_FuncMapSexDesc(objTeacherInfoEx);
    case clsTeacherInfoENEx.con_UniZoneDesc:
      return TeacherInfoEx_FuncMapUniZoneDesc(objTeacherInfoEx);
    case clsTeacherInfoENEx.con_CollegeName:
      return TeacherInfoEx_FuncMapCollegeName(objTeacherInfoEx);
    case clsTeacherInfoENEx.con_EthnicName:
      return TeacherInfoEx_FuncMapEthnicName(objTeacherInfoEx);
    case clsTeacherInfoENEx.con_PoliticsName:
      return TeacherInfoEx_FuncMapPoliticsName(objTeacherInfoEx);
    case clsTeacherInfoENEx.con_ProfenssionalGradeName:
      return TeacherInfoEx_FuncMapProfenssionalGradeName(objTeacherInfoEx);
    case clsTeacherInfoENEx.con_StaffTypeName:
      return TeacherInfoEx_FuncMapStaffTypeName(objTeacherInfoEx);
    case clsTeacherInfoENEx.con_MajorName:
      return TeacherInfoEx_FuncMapMajorName(objTeacherInfoEx);
    case clsTeacherInfoENEx.con_AdminGradeDesc:
      return TeacherInfoEx_FuncMapAdminGradeDesc(objTeacherInfoEx);
    case clsTeacherInfoENEx.con_DateTimeSim:
      return TeacherInfoEx_FuncMapDateTimeSim(objTeacherInfoEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

export function TeacherInfoEx_GetIdTeacherByTeacherId(strTeacherId: string) {
  const strThisFuncName = TeacherInfoEx_FuncMapByFldName.name;
  // console.log(objTeacherInfoEx);
  let strMsg = '';
  const strWhere = `${clsTeacherInfoEN.con_TeacherId} = '${strTeacherId}'`;
  //如果是本表中字段,不需要映射
  const strIdTeacher = TeacherInfo_GetFirstIDAsync(strWhere);
  return strIdTeacher;
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTeacherInfoS:源对象
 **/
export async function TeacherInfoEx_FuncMapSexDesc(objTeacherInfo: clsTeacherInfoENEx) {
  const strThisFuncName = TeacherInfoEx_FuncMapSexDesc.name;
  try {
    if (IsNullOrEmpty(objTeacherInfo.sexDesc) == true) {
      const SexIdSex = objTeacherInfo.idSex;
      const SexSexDesc = await Sex_func(clsSexEN.con_IdSex, clsSexEN.con_SexDesc, SexIdSex);
      objTeacherInfo.sexDesc = SexSexDesc;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000479)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      teacherInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTeacherInfoS:源对象
 **/
export async function TeacherInfoEx_FuncMapUniZoneDesc(objTeacherInfo: clsTeacherInfoENEx) {
  const strThisFuncName = TeacherInfoEx_FuncMapUniZoneDesc.name;
  try {
    if (IsNullOrEmpty(objTeacherInfo.uniZoneDesc) == true) {
      const XzUniZoneidUniZone = objTeacherInfo.idUniZone;
      const XzUniZoneUniZoneDesc = await XzUniZone_func(
        clsXzUniZoneEN.con_IdUniZone,
        clsXzUniZoneEN.con_UniZoneDesc,
        XzUniZoneidUniZone,
      );
      objTeacherInfo.uniZoneDesc = XzUniZoneUniZoneDesc;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000478)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      teacherInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTeacherInfoS:源对象
 **/
export async function TeacherInfoEx_FuncMapCollegeName(objTeacherInfo: clsTeacherInfoENEx) {
  const strThisFuncName = TeacherInfoEx_FuncMapCollegeName.name;
  try {
    if (IsNullOrEmpty(objTeacherInfo.collegeName) == true) {
      const XzClgidXzCollege = objTeacherInfo.idXzCollege;
      const XzClgCollegeName = await XzClg_func(
        clsXzClgEN.con_IdXzCollege,
        clsXzClgEN.con_CollegeName,
        XzClgidXzCollege,
        clsSysPara4WebApi.spIdSchool,
      );
      objTeacherInfo.collegeName = XzClgCollegeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      teacherInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTeacherInfoS:源对象
 **/
export async function TeacherInfoEx_FuncMapEthnicName(objTeacherInfo: clsTeacherInfoENEx) {
  const strThisFuncName = TeacherInfoEx_FuncMapEthnicName.name;
  try {
    if (IsNullOrEmpty(objTeacherInfo.ethnicName) == true) {
      const RsEthnicIdEthnic = objTeacherInfo.idEthnic;
      const RsEthnicEthnicName = await RsEthnic_func(
        clsRsEthnicEN.con_IdEthnic,
        clsRsEthnicEN.con_EthnicName,
        RsEthnicIdEthnic,
      );
      objTeacherInfo.ethnicName = RsEthnicEthnicName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000480)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      teacherInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTeacherInfoS:源对象
 **/
export async function TeacherInfoEx_FuncMapPoliticsName(objTeacherInfo: clsTeacherInfoENEx) {
  const strThisFuncName = TeacherInfoEx_FuncMapPoliticsName.name;
  try {
    if (IsNullOrEmpty(objTeacherInfo.politicsName) == true) {
      const RsPoliticsIdPolitics = objTeacherInfo.idPolitics;
      const RsPoliticsPoliticsName = await RsPolitics_func(
        clsRsPoliticsEN.con_IdPolitics,
        clsRsPoliticsEN.con_PoliticsName,
        RsPoliticsIdPolitics,
      );
      objTeacherInfo.politicsName = RsPoliticsPoliticsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000481)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      teacherInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTeacherInfoS:源对象
 **/
export async function TeacherInfoEx_FuncMapProfenssionalGradeName(
  objTeacherInfo: clsTeacherInfoENEx,
) {
  const strThisFuncName = TeacherInfoEx_FuncMapProfenssionalGradeName.name;
  try {
    if (IsNullOrEmpty(objTeacherInfo.profenssionalGradeName) == true) {
      const RsProfGradeIdProfGrade = objTeacherInfo.idProfGrade;
      const RsProfGradeProfenssionalGradeName = await RsProfGrade_func(
        clsRsProfGradeEN.con_IdProfGrade,
        clsRsProfGradeEN.con_ProfenssionalGradeName,
        RsProfGradeIdProfGrade,
      );
      objTeacherInfo.profenssionalGradeName = RsProfGradeProfenssionalGradeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000482)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      teacherInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTeacherInfoS:源对象
 **/
export async function TeacherInfoEx_FuncMapStaffTypeName(objTeacherInfo: clsTeacherInfoENEx) {
  const strThisFuncName = TeacherInfoEx_FuncMapStaffTypeName.name;
  try {
    if (IsNullOrEmpty(objTeacherInfo.staffTypeName) == true) {
      const RsStaffTypeIdStaffType = objTeacherInfo.idStaffType;
      const RsStaffTypeStaffTypeName = await RsStaffType_func(
        clsRsStaffTypeEN.con_IdStaffType,
        clsRsStaffTypeEN.con_StaffTypeName,
        RsStaffTypeIdStaffType,
      );
      objTeacherInfo.staffTypeName = RsStaffTypeStaffTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000483)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      teacherInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTeacherInfoS:源对象
 **/
export async function TeacherInfoEx_FuncMapMajorName(objTeacherInfo: clsTeacherInfoENEx) {
  const strThisFuncName = TeacherInfoEx_FuncMapMajorName.name;
  try {
    if (IsNullOrEmpty(objTeacherInfo.majorName) == true) {
      const XzMajoridXzMajor = objTeacherInfo.idXzMajor;
      const XzMajorMajorName = await XzMajor_func(
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        XzMajoridXzMajor,
      );
      objTeacherInfo.majorName = XzMajorMajorName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000426)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      teacherInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTeacherInfoS:源对象
 **/
export async function TeacherInfoEx_FuncMapDateTimeSim(objTeacherInfo: clsTeacherInfoENEx) {
  const strThisFuncName = TeacherInfoEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objTeacherInfo.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objTeacherInfo.modifyDate);
      objTeacherInfo.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      teacherInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTeacherInfoS:源对象
 **/
export async function TeacherInfoEx_FuncMapAdminGradeDesc(objTeacherInfo: clsTeacherInfoENEx) {
  const strThisFuncName = TeacherInfoEx_FuncMapAdminGradeDesc.name;
  try {
    if (IsNullOrEmpty(objTeacherInfo.adminGradeDesc) == true) {
      const RsAdminGradeIdAdminGrade = objTeacherInfo.idAdminGrade;
      const RsAdminGradeAdminGradeDesc = await RsAdminGrade_func(
        clsRsAdminGradeEN.con_IdAdminGrade,
        clsRsAdminGradeEN.con_AdminGradeDesc,
        RsAdminGradeIdAdminGrade,
      );
      objTeacherInfo.adminGradeDesc = RsAdminGradeAdminGradeDesc;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000484)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      teacherInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
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
export function TeacherInfoEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTeacherInfoENEx.con_SexDesc:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return a.sexDesc.localeCompare(b.sexDesc);
        };
      case clsTeacherInfoENEx.con_UniZoneDesc:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return a.uniZoneDesc.localeCompare(b.uniZoneDesc);
        };
      case clsTeacherInfoENEx.con_CollegeName:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsTeacherInfoENEx.con_EthnicName:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return a.ethnicName.localeCompare(b.ethnicName);
        };
      case clsTeacherInfoENEx.con_PoliticsName:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return a.politicsName.localeCompare(b.politicsName);
        };
      case clsTeacherInfoENEx.con_ProfenssionalGradeName:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return a.profenssionalGradeName.localeCompare(b.profenssionalGradeName);
        };
      case clsTeacherInfoENEx.con_StaffTypeName:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return a.staffTypeName.localeCompare(b.staffTypeName);
        };
      case clsTeacherInfoENEx.con_MajorName:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return a.majorName.localeCompare(b.majorName);
        };
      case clsTeacherInfoENEx.con_AdminGradeDesc:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return a.adminGradeDesc.localeCompare(b.adminGradeDesc);
        };
      case clsTeacherInfoENEx.con_DateTimeSim:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      default:
        return TeacherInfo_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsTeacherInfoENEx.con_SexDesc:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return b.sexDesc.localeCompare(a.sexDesc);
        };
      case clsTeacherInfoENEx.con_UniZoneDesc:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return b.uniZoneDesc.localeCompare(a.uniZoneDesc);
        };
      case clsTeacherInfoENEx.con_CollegeName:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsTeacherInfoENEx.con_EthnicName:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return b.ethnicName.localeCompare(a.ethnicName);
        };
      case clsTeacherInfoENEx.con_PoliticsName:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return b.politicsName.localeCompare(a.politicsName);
        };
      case clsTeacherInfoENEx.con_ProfenssionalGradeName:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return b.profenssionalGradeName.localeCompare(a.profenssionalGradeName);
        };
      case clsTeacherInfoENEx.con_StaffTypeName:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return b.staffTypeName.localeCompare(a.staffTypeName);
        };
      case clsTeacherInfoENEx.con_MajorName:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return b.majorName.localeCompare(a.majorName);
        };
      case clsTeacherInfoENEx.con_AdminGradeDesc:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return b.adminGradeDesc.localeCompare(a.adminGradeDesc);
        };
      case clsTeacherInfoENEx.con_DateTimeSim:
        return (a: clsTeacherInfoENEx, b: clsTeacherInfoENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      default:
        return TeacherInfo_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

export async function TeacherInfoEx_GetObjByTeacherId(
  strTeacherId: string,
): Promise<clsTeacherInfoEN | null> {
  // const strThisFuncName = TeacherInfoEx_GetObjByTeacherId.name;

  const strWhere = `${clsTeacherInfoEN.con_TeacherId} = '${strTeacherId}'`;
  //如果是本表中字段,不需要映射
  const objTeacherInfo = await TeacherInfo_GetFirstObjAsync(strWhere);
  return objTeacherInfo;
}
