import axios from 'axios';
import $ from 'jquery';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { gs_PaperAttention_GetObjLstCache } from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperAttentionWApi';
import { PaperCollectionLog_GetObjLstCache } from '@/ts/L3ForWApi/GradEduPaper/clsPaperCollectionLogWApi';
import {
  Paper_FilterFunByKey,
  Paper_GetObjByPaperIdAsync,
  Paper_GetObjLstAsync,
  Paper_GetObjLstByJSONObjLst,
  Paper_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { vPaperSim_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSimWApi';
import { SysVote_GetObjLstCache } from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import { gs_PaperType_func } from '@/ts/L3ForWApi/RT_Params/clsgs_PaperTypeWApi';

import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';
import { clsvPaperSimEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSimEN';
import { clsgs_PaperTypeEN, enumgs_PaperType } from '@/ts/L0Entity/RT_Params/clsgs_PaperTypeEN';
import { enumSysVoteType } from '@/ts/L0Entity/RT_Params/clsSysVoteTypeEN';
import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetA_Empty,
  GetB_Empty,
  GetButton_Empty,
  GetDList_Empty,
  GetDd_Empty,
  GetDivObjInDivObj,
  GetDiv_Empty,
  GetEm_Empty,
  GetHeading_Empty,
  GetI_Empty,
  GetLabel_Empty,
  GetLi_Empty,
  GetSpan_Empty,
  GetUl_Empty,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  BindDdl_ObjLst,
  BindDdl_ObjLstInDivObj,
  BindDdl_ObjLst_V,
  BindTab,
  GetObjKeys,
  GetSortExpressInfo,
  ObjectAssign,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsOperateList } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { vUsersSimEx_func } from '@/ts/L3ForWApiExShare/UserManage_GP/clsvUsersSimExWApi';
import { vRTPaperRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTPaperRelaWApi';
import { clsvRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN';
import { vRTPaperRelaEx_SortByPaperTypeTitle } from '@/ts/L3ForWApiEx/GradEduTopic/clsvRTPaperRelaExWApi';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { clsXzGradeEN } from '@/ts/L0Entity/BaseInfo/clsXzGradeEN';
import { XzGrade_func } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
import { clsStudyLevelEN } from '@/ts/L0Entity/SysPara/clsStudyLevelEN';
import { StudyLevel_func } from '@/ts/L3ForWApi/SysPara/clsStudyLevelWApi';
import { sectionStore } from '@/store/modules/section';

export const paperEx_Controller = 'PaperExApi';
export const paperEx_ConstructorName = 'paperEx';

export class clsPaperExWApi {
  public static btn_Click: (
    strCommandName: string,
    strKeyId: string,
    divLayout: HTMLDivElement,
  ) => void;
}
export function myBtn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
  console.log('in myBtn_Click:', strCommandName, strKeyId);
  console.log('clsPaperExWApi.btn_Click:', clsPaperExWApi.btn_Click);
  if (clsPaperExWApi.btn_Click != null) {
    clsPaperExWApi.btn_Click(strCommandName, strKeyId, divLayout);
  }
}
/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function PaperEx_GetWebApiUrl(strController: string, strAction: string): string {
  // const strThisFuncName = 'GetWebApiUrl';
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
 * @param objPaperENS:源对象
 * @returns 目标对象=>clsPaperEN:objPaperENT
 **/
export function PaperEx_CopyToEx(objPaperENS: clsPaperEN): clsPaperENEx {
  const strThisFuncName = PaperEx_CopyToEx.name;
  const objPaperENT = new clsPaperENEx();
  try {
    ObjectAssign(objPaperENT, objPaperENS);
    return objPaperENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPaperENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
//export async function PaperEx_GetObjExLstByPagerCache(objPagerPara: stuPagerPara): Promise<Array<clsPaperENEx>> {
//    const strThisFuncName = "GetObjLstByPagerCache";
//    const arrPaperObjLst = await Paper_GetObjLstCache();
//    const arrPaperExObjLst = arrPaperObjLst.map(PaperEx_CopyToEx);
//    const objSortInfo = GetSortExpressInfo(objPagerPara);
//    if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
//        for (const objInFor of arrPaperExObjLst) {
//            await PaperEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
//        }
//    }
//    if (arrPaperExObjLst.length == 0) return arrPaperExObjLst;
//    let arrPaper_Sel: Array<clsPaperENEx> = arrPaperExObjLst;
//    const obj_Cond = JSON.parse(objPagerPara.whereCond);
//    const objPaper_Cond = new clsPaperENEx();
//    ObjectAssign(objPaper_Cond, obj_Cond);
//    let dicFldComparisonOp: { [index: string]: string } = {};
//    if (obj_Cond.sfFldComparisonOp != "") {
//        dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
//    }
//    //console.log("clsPaperWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//    //console.log(dicFldComparisonOp);
//    try {
//        const sstrKeys = GetObjKeys(obj_Cond);
//        //console.log(sstrKeys);
//        for (const strKey of sstrKeys) {
//            if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
//            arrPaper_Sel = arrPaper_Sel.filter(x => x.GetFldValue(strKey) != null);
//            const strComparisonOp = dicFldComparisonOp[strKey];
//            const strValue = objPaper_Cond.GetFldValue(strKey);
//            const strType = typeof (strValue);
//            switch (strType) {
//                case "string":
//                    if (strValue == null) continue;
//                    if (strValue == "") continue;
//                    if (strComparisonOp == "=") {
//                        arrPaper_Sel = arrPaper_Sel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
//                    }
//                    else if (strComparisonOp == "like") {
//                        arrPaper_Sel = arrPaper_Sel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
//                    }
//                    else if (strComparisonOp == "in") {
//                        const arrValues = strValue.split(',');
//                        arrPaper_Sel = arrPaper_Sel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
//                    }
//                    break;
//                case "boolean":
//                    if (strValue == null) continue;
//                    if (strComparisonOp == "=") {
//                        arrPaper_Sel = arrPaper_Sel.filter(x => x.GetFldValue(strKey) == strValue);
//                    }
//                    break;
//                case "number":
//                    if (Number(strValue) == 0) continue;
//                    if (strComparisonOp == "=") {
//                        arrPaper_Sel = arrPaper_Sel.filter(x => x.GetFldValue(strKey) == strValue);
//                    }
//                    else if (strComparisonOp == ">=") {
//                        arrPaper_Sel = arrPaper_Sel.filter(x => x.GetFldValue(strKey) >= strValue);
//                    }
//                    else if (strComparisonOp == "<=") {
//                        arrPaper_Sel = arrPaper_Sel.filter(x => x.GetFldValue(strKey) <= strValue);
//                    }
//                    else if (strComparisonOp == ">") {
//                        arrPaper_Sel = arrPaper_Sel.filter(x => x.GetFldValue(strKey) > strValue);
//                    }
//                    else if (strComparisonOp == "<") {
//                        arrPaper_Sel = arrPaper_Sel.filter(x => x.GetFldValue(strKey) <= strValue);
//                    }
//                    break;
//            }
//        }
//        if (arrPaper_Sel.length == 0) return arrPaper_Sel;
//        let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
//        if (intStart <= 0) intStart = 0;
//        const intEnd = intStart + objPagerPara.pageSize;
//        if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
//            const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
//            let strSortType = "asc";
//            const strSortFld = sstrSplit[0];
//            if (sstrSplit.length > 1) strSortType = sstrSplit[1];
//            arrPaper_Sel = arrPaper_Sel.sort(PaperEx_SortFunByKey(strSortFld, strSortType));
//        }
//        else {
//            //如果排序字段名[OrderBy]为空，就调用排序函数
//            arrPaper_Sel = arrPaper_Sel.sort(objPagerPara.sortFun);
//        }
//        arrPaper_Sel = arrPaper_Sel.slice(intStart, intEnd);
//        return arrPaper_Sel;
//    }
//    catch (e:any) {
//        const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, paperEx_ConstructorName, strThisFuncName);
//        console.error(strMsg);
//        throw new Error(strMsg);
//    }
//    return new Array<clsPaperENEx>();
//}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PaperEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPaperENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrPaperObjLst = await Paper_GetObjLstAsync(objPagerPara.whereCond);
  const arrPaperExObjLst = arrPaperObjLst.map(PaperEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPaperEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrPaperExObjLst) {
      await PaperEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrPaperExObjLst.length == 0) return arrPaperExObjLst;
  let arrPaperSel: Array<clsPaperENEx> = arrPaperExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPaperSel = arrPaperSel.sort(PaperEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPaperSel = arrPaperSel.sort(objPagerPara.sortFun);
    }
    arrPaperSel = arrPaperSel.slice(intStart, intEnd);
    return arrPaperSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperENEx>();
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
export function PaperEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPaperENEx.con_IdCurrEduCls:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsPaperENEx.con_PaperTypeName:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return a.paperTypeName.localeCompare(b.paperTypeName);
        };
      case clsPaperENEx.con_IsSysVote:
        return (a: clsPaperENEx) => {
          if (a.isSysVote == true) return 1;
          else return -1;
        };
      case clsPaperENEx.con_IsCollection:
        return (a: clsPaperENEx) => {
          if (a.isCollection == true) return 1;
          else return -1;
        };
      case clsPaperENEx.con_IsHasAttention:
        return (a: clsPaperENEx) => {
          if (a.isHasAttention == true) return 1;
          else return -1;
        };
      case clsPaperENEx.con_UpdUserName:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return a.updUserName.localeCompare(b.updUserName);
        };
      case clsPaperENEx.con_DdAuthor:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return a.ddAuthor.localeCompare(b.ddAuthor);
        };
      case clsPaperENEx.con_DdPeriodical:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return a.ddPeriodical.localeCompare(b.ddPeriodical);
        };
      case clsPaperENEx.con_DdKeyword:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return a.ddKeyword.localeCompare(b.ddKeyword);
        };
      case clsPaperENEx.con_DdLiteratureSources:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return a.ddLiteratureSources.localeCompare(b.ddLiteratureSources);
        };
      case clsPaperENEx.con_SectionNum:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return a.sectionNum - b.sectionNum;
        };
      default:
        return Paper_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsPaperENEx.con_IdCurrEduCls:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsPaperENEx.con_PaperTypeName:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return b.paperTypeName.localeCompare(a.paperTypeName);
        };
      case clsPaperENEx.con_IsSysVote:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          if (b.isSysVote == true) return 1;
          else return -1;
        };
      case clsPaperENEx.con_IsCollection:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          if (b.isCollection == true) return 1;
          else return -1;
        };
      case clsPaperENEx.con_IsHasAttention:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          if (b.isHasAttention == true) return 1;
          else return -1;
        };
      case clsPaperENEx.con_UpdUserName:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return b.updUserName.localeCompare(a.updUserName);
        };
      case clsPaperENEx.con_DdAuthor:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return b.ddAuthor.localeCompare(a.ddAuthor);
        };
      case clsPaperENEx.con_DdPeriodical:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return b.ddPeriodical.localeCompare(a.ddPeriodical);
        };
      case clsPaperENEx.con_DdKeyword:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return b.ddKeyword.localeCompare(a.ddKeyword);
        };
      case clsPaperENEx.con_DdLiteratureSources:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return b.ddLiteratureSources.localeCompare(a.ddLiteratureSources);
        };
      case clsPaperENEx.con_SectionNum:
        return (a: clsPaperENEx, b: clsPaperENEx) => {
          return b.sectionNum - a.sectionNum;
        };
      default:
        return Paper_SortFunByKey(strKey, AscOrDesc);
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
export function PaperEx_FuncMapByFldName(strFldName: string, objPaperEx: clsPaperENEx) {
  const strThisFuncName = PaperEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsPaperEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsPaperENEx.con_PaperTypeName:
      return PaperEx_FuncMap_PaperTypeName(objPaperEx);
    case clsPaperENEx.con_UpdUserName:
      return PaperEx_FuncMap_UpdUserName(objPaperEx);
    case clsPaperENEx.con_IsCollection:
      return PaperEx_FuncMap_IsCollection(objPaperEx);
    case clsPaperENEx.con_IsHasAttention:
      return PaperEx_FuncMap_IsHasAttention(objPaperEx);
    case clsPaperENEx.con_IsSysVote:
      return PaperEx_FuncMap_IsSysVote(objPaperEx);
    case clsPaperENEx.con_DdAuthor:
      return PaperEx_FuncMap_ddAuthor(objPaperEx);
    case clsPaperENEx.con_DdPeriodical:
      return PaperEx_FuncMap_ddPeriodical(objPaperEx);
    case clsPaperENEx.con_DdKeyword:
      return PaperEx_FuncMap_ddKeyword(objPaperEx);
    case clsPaperENEx.con_DdLiteratureSources:
      return PaperEx_FuncMap_ddLiteratureSources(objPaperEx);
    case clsPaperENEx.con_StudyLevelName:
      return PaperEx_FuncMapStudyLevelName(objPaperEx);
    case clsPaperENEx.con_GradeName:
      return PaperEx_FuncMapGradeName(objPaperEx);

    case clsPaperENEx.con_SectionNum:
      return PaperEx_FuncMapSectionNum(objPaperEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2022-11-02
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PaperEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return Paper_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
export async function PaperEx_BindDdl_PaperIdInDivByIdCurrEduCls_Cache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strIdCurrEducls: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_PaperIdInDivCache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  console.log('开始：BindDdl_PaperIdInDivCache');
  const arrObjLst_Sel: Array<clsPaperEN> = await PaperEx_GetObjLstByIdCurrEduCls_Cache(
    strIdCurrEducls,
  );
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLst_Sel,
    clsPaperEN.con_PaperId,
    clsPaperEN.con_PaperTitle,
    '论文表',
  );
}

/// <summary>
/// 根据教学班获取对象列表，用对象列表表示
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strIdCurrEduCls">教学班流水号</param>
/// <returns>获取的相应对象列表</returns>
export async function PaperEx_GetObjLstByIdCurrEduCls(
  strIdCurrEduCls: string,
): Promise<Array<clsPaperEN>> {
  const strThisFuncName = 'GetObjLstByIdCurrEduCls';
  const strAction = 'GetObjLstByIdCurrEduCls';
  const strUrl = PaperEx_GetWebApiUrl(paperEx_Controller, strAction);

  try {
    const response = await axios.get(strUrl, {
      params: { strIdCurrEduCls },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          paperEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Paper_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        paperEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        paperEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 根据关键字获取相关对象, 从缓存中获取.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_Cache)
/// </summary>
/// <param name = "strPaperId">所给的关键字</param>
/// <returns>对象</returns>
export async function PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache(
  strPaperId: string,
  strIdCurrEducls: string,
) {
  const arrPaperObjLst_Cache: Array<clsPaperEN> = await PaperEx_GetObjLstByIdCurrEduCls_Cache(
    strIdCurrEducls,
  );
  const obj: clsPaperEN = new clsPaperEN();
  try {
    const arrPaper_Sel: Array<clsPaperEN> = arrPaperObjLst_Cache.filter(
      (x) => x.paperId == strPaperId,
    );
    let objPaper: clsPaperEN;
    if (arrPaper_Sel.length > 0) {
      objPaper = arrPaper_Sel[0];
      return objPaper;
    } else {
      return obj;
    }
  } catch (e: any) {
    const strMsg = `错误:[${e}]. \n根据关键字:[${strPaperId}]获取相应的对象不成功!`;
    console.error(strMsg);
    alert(strMsg);
  }
  return obj;
}

/// <summary>
/// 刷新本类中的缓存.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
/// </summary>
export async function PaperEx_ReFreshThisCacheByIdCurrEduCls(strIdCurrEducls: string) {
  let strMsg = '';
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = `${clsPaperEN._CurrTabName}_${strIdCurrEducls}`;
    switch (clsPaperEN.CacheModeId) {
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
  } else {
    strMsg = `刷新缓存已经关闭。`;
  }
}

/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function PaperEx_GetObjLstByIdCurrEduCls_Cache(strIdCurrEducls: string) {
  let arrPaperObjLst_Cache: Array<clsPaperEN>;
  switch (clsPaperEN.CacheModeId) {
    case '04': //sessionStorage
      arrPaperObjLst_Cache = await PaperEx_GetObjLstByIdCurrEduCls_sessionStorage(strIdCurrEducls);
      break;
    case '03': //localStorage
      arrPaperObjLst_Cache = await PaperEx_GetObjLstByIdCurrEduCls_localStorage(strIdCurrEducls);
      break;
    case '02': //ClientCache
      arrPaperObjLst_Cache = await PaperEx_GetObjLstByIdCurrEduCls_ClientCache(strIdCurrEducls);
      break;
    default:
      arrPaperObjLst_Cache = await PaperEx_GetObjLstByIdCurrEduCls_ClientCache(strIdCurrEducls);
      break;
  }
  return arrPaperObjLst_Cache;
}

/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstClientCache)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function PaperEx_GetObjLstByIdCurrEduCls_ClientCache(strIdCurrEducls: string) {
  //初始化列表缓存
  // let strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;
  const strKey = `${clsPaperEN._CurrTabName}_${strIdCurrEducls}`;
  if (strKey == '') {
    console.log('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrPaperObjLst_Cache: Array<clsPaperEN> = CacheHelper.Get(strKey);
    return arrPaperObjLst_Cache;
  }
  try {
    const arrPaperObjLst = await PaperEx_GetObjLstByIdCurrEduCls(strIdCurrEducls);

    CacheHelper.Add(strKey, arrPaperObjLst);
    const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrPaperObjLst.length}!`;
    console.log(strInfo);
    return arrPaperObjLst;
  } catch (e: any) {
    const strMsg = `从本地缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
    console.error(strMsg);
    throw strMsg;
  }
}

/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstlocalStorage)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function PaperEx_GetObjLstByIdCurrEduCls_localStorage(strIdCurrEducls: string) {
  //初始化列表缓存
  // let strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;
  const strKey = `${clsPaperEN._CurrTabName}_${strIdCurrEducls}`;
  if (strKey == '') {
    console.log('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }

  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPaperObjLst_Cache: Array<clsPaperEN> = JSON.parse(strTempObjLst);
    return arrPaperObjLst_Cache;
  }
  try {
    const responseText = await PaperEx_GetObjLstByIdCurrEduCls(strIdCurrEducls);
    const arrPaperObjLst: Array<clsPaperEN> = <Array<clsPaperEN>>responseText;
    localStorage.setItem(strKey, JSON.stringify(arrPaperObjLst));
    const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrPaperObjLst.length}!`;
    console.log(strInfo);
    return arrPaperObjLst;
  } catch (e: any) {
    const strMsg = `从本地缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
    console.error(strMsg);
    throw strMsg;
  }
}
/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstsessionStorage)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function PaperEx_GetObjLstByIdCurrEduCls_sessionStorage(strIdCurrEducls: string) {
  //初始化列表缓存
  // let strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;
  const strKey = `${clsPaperEN._CurrTabName}_${strIdCurrEducls}`;
  if (strKey == '') {
    console.log('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }

  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPaperObjLst_Cache: Array<clsPaperEN> = JSON.parse(strTempObjLst);
    return arrPaperObjLst_Cache;
  }
  try {
    const responseText = await PaperEx_GetObjLstByIdCurrEduCls(strIdCurrEducls);
    const arrPaperObjLst: Array<clsPaperEN> = <Array<clsPaperEN>>responseText;
    sessionStorage.setItem(strKey, JSON.stringify(arrPaperObjLst));
    const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrPaperObjLst.length}!`;
    console.log(strInfo);
    return arrPaperObjLst;
  } catch (e: any) {
    const strMsg = `从缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
    console.error(strMsg);
    throw strMsg;
  }
}

/// <summary>
/// 根据条件对象, 从缓存的对象列表中获取子集.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
/// </summary>
/// <param name = "objstrSubViewpointId_Cond">条件对象</param>
/// <returns>对象列表子集</returns>
export async function PaperEx_GetSubObjLstByIdCurrEduCls_Cache(
  objPaper_Cond: clsPaperEN,
  strIdCurrEducls: string,
) {
  const arrPaperObjLst_Cache: Array<clsPaperEN> = await PaperEx_GetObjLstByIdCurrEduCls_Cache(
    strIdCurrEducls,
  );
  let arrPaper_Sel: Array<clsPaperEN> = arrPaperObjLst_Cache;
  if (objPaper_Cond.sfFldComparisonOp == null || objPaper_Cond.sfFldComparisonOp == '')
    return arrPaper_Sel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaper_Cond.sfFldComparisonOp,
  );
  //console.log("clsPaperWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaper_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;

      arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaper_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaper_Sel = arrPaper_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaper_Sel = arrPaper_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (strValue == 0) continue;
          if (strComparisonOp == '=') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPaper_Sel;
  } catch (e: any) {
    const strMsg = `错误:[${e}]. \n根据条件:[${JSON.stringify(
      objPaper_Cond,
    )}]缓存对象列表中获取子集对象不成功!`;
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperEN>();
}
/// <summary>
/// 根据条件对象, 从缓存的对象列表中获取记录数.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
/// </summary>
/// <param name = "objPaper_Cond">条件对象</param>
/// <returns>对象列表记录数</returns>
export async function PaperEx_GetRecCountByCondByIdCurrEduCls_Cache(
  objPaper_Cond: clsPaperEN,
  strIdCurrEducls: string,
) {
  const arrPaperObjLst_Cache: Array<clsPaperEN> = await PaperEx_GetObjLstByIdCurrEduCls_Cache(
    strIdCurrEducls,
  );
  let arrPaper_Sel: Array<clsPaperEN> = arrPaperObjLst_Cache;
  if (objPaper_Cond.sfFldComparisonOp == null || objPaper_Cond.sfFldComparisonOp == '')
    return arrPaper_Sel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaper_Cond.sfFldComparisonOp,
  );
  //console.log("clsPaperWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaper_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaper_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaper_Sel = arrPaper_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaper_Sel = arrPaper_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (strValue == 0) continue;
          if (strComparisonOp == '=') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPaper_Sel.length;
  } catch (e: any) {
    const strMsg = `错误:[${e}]. \n根据条件:[${JSON.stringify(
      objPaper_Cond,
    )}]从缓存对象列表中获取记录数不成功!`;
    console.error(strMsg);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/// <summary>
/// 从缓存中获取分页对象列表.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
/// </summary>
/// <param name = "objPagerPara">分页参数结构</param>
/// <returns>对象列表</returns>
export async function PaperEx_GetObjLstByPagerByIdCurrEduCls_Cache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
) {
  const arrPaperObjLst_Cache: Array<clsPaperEN> = await PaperEx_GetObjLstByIdCurrEduCls_Cache(
    strIdCurrEducls,
  );
  if (arrPaperObjLst_Cache.length == 0) return arrPaperObjLst_Cache;
  let arrPaper_Sel: Array<clsPaperEN> = arrPaperObjLst_Cache;
  const obj_Cond: clsPaperEN = JSON.parse(objPagerPara.whereCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsPaperWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = obj_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaper_Sel = arrPaper_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaper_Sel = arrPaper_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (strValue == 0) continue;
          if (strComparisonOp == '=') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPaper_Sel = arrPaper_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPaper_Sel.length == 0) return arrPaper_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      //                console.log(arrPaper_Sel);
      const objFirst = arrPaper_Sel[0]; //第一个对象
      const strSortValue = objFirst.GetFldValue(strSortFld); //第一个对象排序字段值
      const strSortFldType = typeof strSortValue; //排序字段值的数据类型
      //console.log("排序字段的数据类型: " + strSortFldType);
      switch (strSortFldType) {
        case 'string':
          if (strSortType.toLowerCase() == 'asc') {
            arrPaper_Sel = arrPaper_Sel.sort((x, y) =>
              x.GetFldValue(strSortFld).localeCompare(y.GetFldValue(strSortFld)),
            );
          } else {
            arrPaper_Sel = arrPaper_Sel.sort((x, y) =>
              y.GetFldValue(strSortFld).localeCompare(x.GetFldValue(strSortFld)),
            );
          }
          break;
        case 'number':
        case 'boolean':
          if (strSortType.toLowerCase() == 'asc') {
            arrPaper_Sel = arrPaper_Sel.sort(
              (x, y) => x.GetFldValue(strSortFld) - y.GetFldValue(strSortFld),
            );
          } else {
            arrPaper_Sel = arrPaper_Sel.sort(
              (x, y) => y.GetFldValue(strSortFld) - x.GetFldValue(strSortFld),
            );
          }
          break;
      }
    } else {
      //如果排序字段名[orderBy]为空，就调用排序函数
      arrPaper_Sel = arrPaper_Sel.sort(objPagerPara.sortFun);
    }
    arrPaper_Sel = arrPaper_Sel.slice(intStart, intEnd);
    return arrPaper_Sel;
  } catch (e: any) {
    const strMsg = `错误:[${e}]. \n根据条件:[${objPagerPara.whereCond}]获取分页对象列表不成功!(In Paper_GetObjLstByPagerCache)`;
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperEN>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperS:源对象
 **/
export async function PaperEx_FuncMap_PaperTypeName(objPaper: clsPaperENEx) {
  const strThisFuncName = PaperEx_FuncMap_PaperTypeName.name;
  try {
    if (IsNullOrEmpty(objPaper.paperTypeName) == true) {
      const gs_PaperType_PaperTypeId = objPaper.paperTypeId;
      const gs_PaperType_PaperTypeName = await gs_PaperType_func(
        clsgs_PaperTypeEN.con_PaperTypeId,
        clsgs_PaperTypeEN.con_PaperTypeName,
        gs_PaperType_PaperTypeId,
      );
      objPaper.paperTypeName = gs_PaperType_PaperTypeName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000260)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperS:源对象
 **/
export async function PaperEx_FuncMap_UpdUserName(objPaper: clsPaperENEx) {
  const strThisFuncName = PaperEx_FuncMap_UpdUserName.name;
  try {
    if (IsNullOrEmpty(objPaper.updUserName) == true) {
      const vUsersSim_UserId = objPaper.updUser;
      const vUsersSim_UserName = await vQxUsersSimStore.getUserName(vUsersSim_UserId);
      objPaper.updUserName = vUsersSim_UserName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000262)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperS:源对象
 **/
export async function PaperEx_FuncMap_IsCollection(objPaper: clsPaperENEx) {
  const strThisFuncName = PaperEx_FuncMap_UpdUserName.name;
  try {
    const arrPaperCollectionLogObjLst = await PaperCollectionLog_GetObjLstCache(
      userStore.getUserId,
    );
    const arr = arrPaperCollectionLogObjLst.filter((x) => x.paperId == objPaper.paperId);
    objPaper.isCollection = arr.length > 0 ? true : false;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000262)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperS:源对象
 **/
export async function PaperEx_FuncMap_IsHasAttention(objPaper: clsPaperENEx) {
  const strThisFuncName = PaperEx_FuncMap_IsHasAttention.name;
  try {
    const arrgs_PaperAttentionObjLst = await gs_PaperAttention_GetObjLstCache(userStore.getUserId);
    const arr = arrgs_PaperAttentionObjLst.filter((x) => x.paperId == objPaper.paperId);
    objPaper.isHasAttention = arr.length > 0 ? true : false;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000262)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperS:源对象
 **/
export async function PaperEx_FuncMap_IsSysVote(objPaper: clsPaperENEx) {
  const strThisFuncName = PaperEx_FuncMap_IsSysVote.name;
  try {
    const arrSysVoteObjLst = await SysVote_GetObjLstCache(userStore.getUserId);
    const arrSysVoteObjLst_Sel = arrSysVoteObjLst.filter(
      (x) => x.voteTypeId == enumSysVoteType.Paper_01,
    );
    const arr = arrSysVoteObjLst_Sel.filter((x) => x.tableKey == objPaper.paperId);
    objPaper.isSysVote = arr.length > 0 ? true : false;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000262)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function PaperEx_BindList_PaperBak(
  strTypeId: string,
  divContainer: HTMLDivElement,
  arrPaperExObjLst: Array<clsPaperENEx>,
) {
  const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
  for (const objInFor of arrPaperExObjLst) {
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_IsSysVote, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_IsCollection, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_IsHasAttention, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_UpdUserName, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_DdAuthor, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_DdKeyword, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_DdLiteratureSources, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_DdPeriodical, objInFor);

    objInFor.author = objInFor.author == null ? '[无作者]' : objInFor.author;
    objInFor.literatureSources =
      objInFor.literatureSources == null ? '[无来源]' : objInFor.literatureSources;
    objInFor.keyword = objInFor.keyword == null ? '[无关键字]' : objInFor.keyword;
    objInFor.periodical = objInFor.periodical == null ? '[无期刊]' : objInFor.periodical;
  }

  let strhtml = '';

  try {
    for (let i = 0; i < arrPaperExObjLst.length; i++) {
      const objPaperEx = arrPaperExObjLst[i];
      if (objPaperEx == null) continue;
      //const objCount1 = arrvPaperCountObjLst.find(x => x.paperId == objPaperEx.paperId);//使用find必须通过if判断不能为空后才能调用属性

      strhtml += '<div class="main-w1 fl" ><dl class="detail-list dbpage" ><dd>';

      //判断引用论文，自研论文
      if (objPaperEx.paperTypeId == enumgs_PaperType.OriginalThesis_02) {
        //自研论文
        strhtml += `<h6><a href="javascript:void(0)" onclick="xadmin.open('论文查看(原创论文)', '../GradEduEx/PaperDetail?paperId=${objPaperEx.paperId}')"><span class='text-info'>${objPaperEx.paperTitle}(${objPaperEx.paperTypeName})</a>`;
      } else {
        strhtml += `<h6><a href="javascript:void(0)" onclick="xadmin.open('论文查看(引用论文)', '../GradEduEx/PaperDetail?paperId=${objPaperEx.paperId}')">${objPaperEx.paperTitle}(${objPaperEx.paperTypeName})</a>`;
      }
      if (objPaperEx.literatureTypeId == '05') {
        strhtml += `<span class="btn-2" style="padding-left:50px;"><a style="font-size:15px; color:#f98c51" href="javascript:void(0)" onclick=PaperSubVer_Click("${objPaperEx.paperId}")>阅读训练</a></span>`;
      } else {
        strhtml += `<span class="btn-2" style="padding-left:50px;"><a style="font-size:15px; color:#f98c51" href="javascript:void(0)" onclick=PaperSubVer_Click("${objPaperEx.paperId}")>pdf论文子观点查看</a></span>`;
      }
      //只有自研论文才有历史版本
      if (objPaperEx.paperTypeId == enumgs_PaperType.OriginalThesis_02) {
        if (objPaperEx.versionCount > 0 && objPaperEx.versionCount != null) {
          strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('自研论文历史版本', '../GradEduEx/HistoricalVersion?Key=${objPaperEx.paperId}&Type=10')"> ${clsIcon.faCommentDots}历史版本</button >`;
        }
      }

      strhtml += '</h6>';
      strhtml += `<div class="baseinfo">${objPaperEx.ddAuthor}<span class="ml-2"><a href="javascript:void(0)">${objPaperEx.ddLiteratureSources}</a></span>`;
      strhtml += `<span>${objPaperEx.ddPeriodical}</span><em>${objPaperEx.ddKeyword}</em>`;
      strhtml += '</div>';
      strhtml += `<div class="abstract">${objPaperEx.paperContent}</div>`;
      strhtml += '<div class="opts"><ul class="opts-count">';
      strhtml += `<li>评论数:<em>${objPaperEx.appraiseCount}</em></li><li>综合评分:<em>${objPaperEx.score}</em></li>`;
      if (objPaperEx.teaScore != null) {
        strhtml += `<li>教师评分:<em>${objPaperEx.teaScore}</em></li>`;
      }
      if (objPaperEx.stuScore != null) {
        strhtml += `<li>学生评分:<em>${objPaperEx.stuScore}</em></li>`;
      }
      strhtml += `<li>读写数:<em>${objPaperEx.pcount}</em></li><li>浏览量:<em>${objPaperEx.browseNumber}</em></li>`;

      if (IsNullOrEmpty(objPaperEx.updUserName) == false) {
        strhtml += `<li class="date">编辑用户：${objPaperEx.updUserName}</li><li class="date">发表日期：${objPaperEx.updDate}</li></ul>`;
      }

      strhtml += '<ul class="opts-btn">';

      if (objPaperEx.isHasAttention == false) {
        strhtml += `<li><a href="javascript:void(0)" onclick=btn_Click('AddAttention',"${objPaperEx.paperId}")><i class="layui-icon layui-icon-face-smile-b" style="font-size: 20px;"></i><b>关注</b></a></li>`;
      } else {
        strhtml += `<li><a href="javascript:void(0)" onclick=btn_Click('AddAttention',"${objPaperEx.paperId}")><i class="layui-icon layui-icon-face-smile-b" style="font-size: 20px; color: #1E9FFF;"></i><b>已关注</b></a></li>`;
      }

      if (objPaperEx.isSysVote == false) {
        strhtml += `<li>${objPaperEx.okCount}<a href="javascript:void(0)" onclick=btn_Click('AddVote',"${objPaperEx.paperId}")><i class="layui-icon layui-icon-praise" style="font-size: 24px; "></i>点赞</a></li>`;
      } else {
        strhtml += `<li>${objPaperEx.okCount}<a href="javascript:void(0)" onclick=btn_Click('AddVote',"${objPaperEx.paperId}")><i class="layui-icon layui-icon-praise" style="font-size: 24px; color: #1E9FFF;"></i>已点赞</a></li>`;
      }

      if (objPaperEx.isCollection == false) {
        strhtml += `<li><a href="javascript:void(0)" onclick=btn_Click('AddCollection',"${objPaperEx.paperId}")><i class="layui-icon layui-icon-rate" style="font-size: 22px; "></i><b>收藏</b></a></li>`;
      } else {
        strhtml += `<li><a href="javascript:void(0)" onclick=btn_Click('AddCollection',"${objPaperEx.paperId}")><i class="layui-icon layui-icon-rate-solid" style="font-size: 22px; color: #1E9FFF;"></i><b>已收藏</b></a></li>`;
      }
      if (objPaperEx.attachmentCount > 0) {
        strhtml += `<li>${objPaperEx.downloadCount}<a id="btnDownLoadFile"  href="javascript:void(0)" onclick=btnDownLoadFile_Click("${objPaperEx.paperId}")> <i class="layui-icon layui-icon-download-circle" style="font-size: 24px; "></i><b>点击下载</b></a></li>`;
      } else {
        strhtml +=
          '<li><a id="btnDownLoadFile" href="javascript:void(0)" title="暂无下载文件"><i class="layui-icon layui-icon-download-circle" style="font-size: 24px; color: #1E9FFF;"></i><b>无下载文件</b></a></li>';
      }

      strhtml += '</ul></div>';

      strhtml += '</dd></dl></div>';
    }
    const strDivName4Disp = Format('#{0}', divDataLst.id);
    $(strDivName4Disp).html(strhtml);
  } catch (e: any) {
    console.error('catch(e)=');
    console.error(e);
    const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
    alert(strMsg);
  }
}
export async function PaperEx_BindList_Paper(
  strTypeId: string,
  divContainer: HTMLDivElement,
  arrPaperExObjLst: Array<clsPaperENEx>,
  divLayout: HTMLDivElement,
) {
  const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
  divDataLst.innerHTML = '';
  for (const objInFor of arrPaperExObjLst) {
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_IsSysVote, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_IsCollection, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_IsHasAttention, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_UpdUserName, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_DdAuthor, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_DdKeyword, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_DdLiteratureSources, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_DdPeriodical, objInFor);
    await PaperEx_FuncMapByFldName(clsPaperENEx.con_PaperTypeName, objInFor);

    objInFor.author = objInFor.author == null ? '[无作者]' : objInFor.author;
    objInFor.literatureSources =
      objInFor.literatureSources == null ? '[无来源]' : objInFor.literatureSources;
    objInFor.keyword = objInFor.keyword == null ? '[无关键字]' : objInFor.keyword;
    objInFor.periodical = objInFor.periodical == null ? '[无期刊]' : objInFor.periodical;
  }

  // let strhtml = '';

  try {
    for (let i = 0; i < arrPaperExObjLst.length; i++) {
      const objPaperEx = arrPaperExObjLst[i];
      if (objPaperEx == null) continue;
      //const objCount1 = arrvPaperCountObjLst.find(x => x.paperId == objPaperEx.paperId);//使用find必须通过if判断不能为空后才能调用属性

      // strhtml += '<div class="main-w1 fl" ><dl class="detail-list dbpage" ><dd>';
      const divMain = GetDiv_Empty('main-w1 fl');
      const dlList = GetDList_Empty('detail-list dbpage');
      const dd1 = GetDd_Empty('');

      const h6 = GetHeading_Empty('');
      const aSeekPaper = GetA_Empty('');
      aSeekPaper.href = 'javascript:void(0)';
      aSeekPaper.innerText = `${objPaperEx.paperTitle}(${objPaperEx.paperTypeName})`;

      //判断引用论文，自研论文
      if (objPaperEx.paperTypeId == enumgs_PaperType.OriginalThesis_02) {
        //自研论文
        // strhtml += `<h6><a href="javascript:void(0)" onclick="xadmin.open('论文查看(原创论文)', '../GradEduEx/PaperDetail?paperId=${objPaperEx.paperId}')">${objPaperEx.paperTitle}(${objPaperEx.paperTypeName})</a>`;
        aSeekPaper.title = '论文查看(原创论文)';
      } else {
        // strhtml += `<h6><a href="javascript:void(0)" onclick="xadmin.open('论文查看(引用论文)', '../GradEduEx/PaperDetail?paperId=${objPaperEx.paperId}')">${objPaperEx.paperTitle}(${objPaperEx.paperTypeName})</a>`;
        aSeekPaper.title = '论文查看(引用论文)';
      }
      (function (strKeyId: string) {
        aSeekPaper.onclick = function () {
          clsPaperExWApi.btn_Click('PaperDetail', strKeyId, divLayout);
        };
      })(objPaperEx.paperId);

      h6.appendChild(aSeekPaper);

      // strhtml += `<span class="btn-2" style="padding-left:50px;"><a style="font-size:15px; color:#f98c51" href="javascript:void(0)" onclick=PaperSubVer_Click("${objPaperEx.paperId}")>pdf论文子观点查看</a></span>`;
      const spn1 = GetSpan_Empty('btn-2');
      spn1.style.paddingLeft = '50px';

      const aPaperSubVer = GetA_Empty('');
      if (objPaperEx.literatureTypeId == '05') {
        aPaperSubVer.href = `#/ReadTraining?paperId=${objPaperEx.paperId}`;
        aPaperSubVer.innerText = `阅读训练`;
      } else {
        aPaperSubVer.href = `#/PaperSubViewpoint?paperId=${objPaperEx.paperId}`;
        aPaperSubVer.innerText = `pdf论文子观点查看`;
      }
      // (function (strKeyId: string) {
      //   aPaperSubVer.onclick = function () {
      //     myBtn_Click('PaperSubVer', strKeyId);
      //   };
      // })(objPaperEx.paperId);
      spn1.appendChild(aPaperSubVer);
      h6.appendChild(spn1);

      //只有自研论文才有历史版本
      if (objPaperEx.paperTypeId == enumgs_PaperType.OriginalThesis_02) {
        if (objPaperEx.versionCount > 0 && objPaperEx.versionCount != null) {
          // strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('自研论文历史版本', '../GradEduEx/HistoricalVersion?Key=${objPaperEx.paperId}&Type=10')"> ${clsIcon.faCommentDots}历史版本</button >`;

          const i1 = GetI_Empty('layui-icon');
          i1.innerText = '&#xe642;';
          const btn1 = GetButton_Empty('layui-btn layui-btn-warm layui-btn-xs btnRight lm-3');
          btn1.appendChild(i1);
          btn1.innerText = '历史版本';
          (function (strKeyId: string, divLayout1) {
            btn1.onclick = function () {
              myBtn_Click('HistoricalVersion', strKeyId, divLayout1);
            };
          })(objPaperEx.paperId, divLayout);
          h6.appendChild(btn1);
        }
      }

      // strhtml += '</h6>';
      dd1.appendChild(h6);
      //-----------------------div2
      // strhtml += `<div class="baseinfo">${objPaperEx.ddAuthor}<span class="ml-2"><a href="javascript:void(0)">${objPaperEx.ddLiteratureSources}</a></span>`;
      const divBaseInfo = GetDiv_Empty('baseinfo');
      const spn2 = GetSpan_Empty('');
      spn2.innerHTML = objPaperEx.ddAuthor;
      divBaseInfo.appendChild(spn2);
      const spn3 = GetSpan_Empty('ml-2');
      const a3 = GetA_Empty('');
      a3.href = 'javascript:void(0)';
      a3.innerHTML = objPaperEx.ddLiteratureSources;
      spn3.appendChild(a3);
      divBaseInfo.appendChild(spn3);

      // strhtml += `<span>${objPaperEx.ddPeriodical}</span><em>${objPaperEx.ddKeyword}</em>`;
      const spn4 = GetSpan_Empty('');
      spn4.innerHTML = objPaperEx.ddPeriodical;
      divBaseInfo.appendChild(spn4);
      const em1 = GetEm_Empty('');
      em1.innerHTML = objPaperEx.ddKeyword;
      divBaseInfo.appendChild(em1);
      // strhtml += '</div>';
      //==========================div2
      dd1.appendChild(divBaseInfo);

      // strhtml += `<div class="abstract">${objPaperEx.paperContent}</div>`;

      const divAbstract = GetDiv_Empty('abstract');
      divAbstract.innerHTML = objPaperEx.paperContent;
      dd1.appendChild(divAbstract);

      //-------------div4--------------
      // strhtml += '<div class="opts"><ul class="opts-count">';
      const divOpts = GetDiv_Empty('opts');
      const ulOpts = GetUl_Empty('opts-count');

      // strhtml += `<li>评论数:<em>${objPaperEx.appraiseCount}</em></li><li>综合评分:<em>${objPaperEx.score}</em></li>`;
      const li1 = GetLi_Empty('');
      const em2 = GetEm_Empty('');
      em2.innerText = objPaperEx.appraiseCount == null ? '0' : objPaperEx.appraiseCount.toString();
      li1.innerText = '评论数:';
      li1.appendChild(em2);

      const li2 = GetLi_Empty('');
      const em3 = GetEm_Empty('');
      em3.innerText = objPaperEx.appraiseCount == null ? '0' : objPaperEx.appraiseCount.toString();
      li2.innerText = '综合评分:';
      li2.appendChild(em3);
      ulOpts.appendChild(li1);
      ulOpts.appendChild(li2);

      if (objPaperEx.teaScore != null) {
        // strhtml += `<li>教师评分:<em>${objPaperEx.teaScore}</em></li>`;

        const li3 = GetLi_Empty('');
        const em4 = GetEm_Empty('');
        em4.innerText = objPaperEx.teaScore.toString();
        li3.innerText = '教师评分:';
        li3.appendChild(em4);
        ulOpts.appendChild(li3);
      }
      if (objPaperEx.stuScore != null) {
        // strhtml += `<li>学生评分:<em>${objPaperEx.stuScore}</em></li>`;
        const li4 = GetLi_Empty('');
        const em5 = GetEm_Empty('');
        em5.innerText = objPaperEx.stuScore.toString();
        li4.innerText = '学生评分:';
        li4.appendChild(em5);
        ulOpts.appendChild(li4);
      }
      // strhtml += `<li>读写数:<em>${objPaperEx.pcount}</em></li><li>浏览量:<em>${objPaperEx.browseNumber}</em></li>`;
      {
        const li6 = GetLi_Empty('');
        const em6 = GetEm_Empty('');
        em6.innerText = (objPaperEx.pcount ?? 0).toString();
        li6.innerText = '读写数:';
        li6.appendChild(em6);
        ulOpts.appendChild(li6);

        const li7 = GetLi_Empty('');
        const em7 = GetEm_Empty('');
        em7.innerText = (objPaperEx.browseNumber ?? 0).toString();
        li7.innerText = '浏览量:';
        li7.appendChild(em7);
        ulOpts.appendChild(li7);
      }
      if (IsNullOrEmpty(objPaperEx.updUserName) == false) {
        // strhtml += `<li class="date">编辑用户：${objPaperEx.updUserName}</li><li class="date">发表日期：${objPaperEx.updDate}</li></ul>`;
        {
          const li8 = GetLi_Empty('date');

          li8.innerText = `编辑用户：${objPaperEx.updUserName}`;

          ulOpts.appendChild(li8);

          const li9 = GetLi_Empty('date');
          li9.innerText = `发表日期：${objPaperEx.updDate}`;

          ulOpts.appendChild(li9);
        }
      }
      divOpts.appendChild(ulOpts);

      // strhtml += '<ul class="opts-btn">';
      const ulOpts2 = GetUl_Empty('opts-btn');
      {
        if (objPaperEx.isHasAttention == false) {
          // strhtml += `<li><a href="javascript:void(0)" onclick=btn_Click('AddAttention',"${objPaperEx.paperId}")><i class="layui-icon layui-icon-face-smile-b" style="font-size: 20px;"></i><b>关注</b></a></li>`;
        } else {
          // strhtml += `<li><a href="javascript:void(0)" onclick=btn_Click('AddAttention',"${objPaperEx.paperId}")><i class="layui-icon layui-icon-face-smile-b" style="font-size: 20px; color: #1E9FFF;"></i><b>已关注</b></a></li>`;
        }

        const li10 = GetLi_Empty('');
        const a10 = GetA_Empty('');
        a10.href = 'javascript:void(0)';
        (function (strKeyId: string, divLayout1) {
          a10.onclick = function () {
            myBtn_Click('AddAttention', strKeyId, divLayout1);
          };
        })(objPaperEx.paperId, divLayout);
        const i10 = GetI_Empty('layui-icon layui-icon-face-smile-b');
        i10.style.fontSize = '20px';
        a10.appendChild(i10);
        const b10 = GetB_Empty('');
        b10.innerText = objPaperEx.isHasAttention == true ? '已关注' : '关注';
        a10.appendChild(b10);
        li10.appendChild(a10);
        ulOpts2.appendChild(li10);
      }

      if (objPaperEx.isSysVote == false) {
        // strhtml += `<li>${objPaperEx.okCount}<a href="javascript:void(0)" onclick=btn_Click('AddVote',"${objPaperEx.paperId}")><i class="layui-icon layui-icon-praise" style="font-size: 24px; "></i>点赞</a></li>`;
      } else {
        // strhtml += `<li>${objPaperEx.okCount}<a href="javascript:void(0)" onclick=btn_Click('AddVote',"${objPaperEx.paperId}")><i class="layui-icon layui-icon-praise" style="font-size: 24px; color: #1E9FFF;"></i>已点赞</a></li>`;
      }
      {
        const li10 = GetLi_Empty('');
        const spn10 = GetSpan_Empty('');
        spn10.innerText = (objPaperEx.okCount ?? 0).toString();
        li10.appendChild(spn10);
        const a10 = GetA_Empty('');
        a10.href = 'javascript:void(0)';
        (function (strKeyId: string) {
          a10.onclick = function () {
            myBtn_Click('AddVote', strKeyId, divLayout);
          };
        })(objPaperEx.paperId);
        const i10 = GetI_Empty('layui-icon layui-icon-face-smile-b');
        i10.style.fontSize = '20px';
        a10.appendChild(i10);
        const b10 = GetB_Empty('');
        b10.innerText = objPaperEx.isSysVote == true ? '已点赞' : '点赞';
        a10.appendChild(b10);
        li10.appendChild(a10);
        ulOpts2.appendChild(li10);
      }

      if (objPaperEx.isCollection == false) {
        // strhtml += `<li><a href="javascript:void(0)" onclick=btn_Click('AddCollection',"${objPaperEx.paperId}")><i class="layui-icon layui-icon-rate" style="font-size: 22px; "></i><b>收藏</b></a></li>`;
      } else {
        // strhtml += `<li><a href="javascript:void(0)" onclick=btn_Click('AddCollection',"${objPaperEx.paperId}")><i class="layui-icon layui-icon-rate-solid" style="font-size: 22px; color: #1E9FFF;"></i><b>已收藏</b></a></li>`;
      }
      {
        const li10 = GetLi_Empty('');
        const a10 = GetA_Empty('');
        a10.href = 'javascript:void(0)';
        (function (strKeyId: string, divLayout1) {
          a10.onclick = function () {
            myBtn_Click('AddCollection', strKeyId, divLayout1);
          };
        })(objPaperEx.paperId, divLayout);
        const i10 = GetI_Empty('layui-icon layui-icon-face-smile-b');
        i10.style.fontSize = '20px';
        a10.appendChild(i10);
        const b10 = GetB_Empty('');
        b10.innerText = objPaperEx.isCollection == true ? '已收藏' : '收藏';
        a10.appendChild(b10);
        li10.appendChild(a10);
        ulOpts2.appendChild(li10);
      }
      {
        const li10 = GetLi_Empty('');
        const a10 = GetA_Empty('');
        a10.href = 'javascript:void(0)';
        a10.id = 'btnDownLoadFile';
        const i10 = GetI_Empty('layui-icon layui-icon-face-smile-b');
        i10.style.fontSize = '20px';
        a10.appendChild(i10);
        const b10 = GetB_Empty('');

        if (objPaperEx.attachmentCount > 0) {
          // strhtml += `<li>${objPaperEx.downloadCount}<a id="btnDownLoadFile"  href="javascript:void(0)" onclick=btnDownLoadFile_Click("${objPaperEx.paperId}")> <i class="layui-icon layui-icon-download-circle" style="font-size: 24px; "></i><b>点击下载</b></a></li>`;
          (function (strKeyId: string, divLayout1) {
            a10.onclick = function () {
              myBtn_Click('DownLoadFile', strKeyId, divLayout1);
            };
          })(objPaperEx.paperId, divLayout);
          i10.style.fontSize = '24px';
          b10.innerText = '点击下载';
        } else {
          // strhtml +=
          //   '<li><a id="btnDownLoadFile" href="javascript:void(0)" title="暂无下载文件"><i class="layui-icon layui-icon-download-circle" style="font-size: 24px; color: #1E9FFF;"></i><b>无下载文件</b></a></li>';
          a10.title = '暂无下载文件';
          b10.innerText = '无下载文件';
          i10.style.fontSize = '24px';
          i10.style.color = '#1E9FFF';
        }
        a10.appendChild(i10);
        a10.appendChild(b10);
        li10.appendChild(a10);
        ulOpts2.appendChild(li10);
      }
      // strhtml += '</ul></div>';
      divOpts.appendChild(ulOpts2);
      dd1.appendChild(divOpts);
      //================div4=====================
      // strhtml += '</dd></dl></div>';

      dlList.appendChild(dd1);
      divMain.appendChild(dlList);
      divDataLst.appendChild(divMain);
    }
    // const strDivName4Disp = Format('#{0}', divName.id);
    // $(strDivName4Disp).html(strhtml);
  } catch (e: any) {
    console.error('catch(e)=');
    console.error(e);
    const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
    alert(strMsg);
  }
}
// export function btn_Click(strCommandName: string, strKeyId: string) {
//   Paper_ListEx.btn_Click(strCommandName, strKeyId);
// }
/**
 * 显示一个字段的单元信息
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperS:源对象
 **/
export async function PaperEx_FuncMap_ddAuthor(objPaper: clsPaperENEx) {
  const strThisFuncName = PaperEx_FuncMap_ddAuthor.name;
  try {
    if (IsNullOrEmpty(objPaper.ddAuthor) == true) {
      const lblCurr = GetLabel_Empty('col-form-label text-right');
      const lblStyle_Title = GetLabel_Empty('text-secondary font-weight-bold'); //;
      lblStyle_Title.innerHTML = '作者';
      const lblStyle_Content = GetLabel_Empty('text-black'); //; await css_StyleEx_GetHtmlElementByStyleId(objCss_FldDispUnitStyle.styleId_Content, strContent);
      lblStyle_Content.innerHTML = objPaper.author;
      lblCurr.innerHTML = Format('{0}:{1}', lblStyle_Title.outerHTML, lblStyle_Content.outerHTML);
      objPaper.ddAuthor = lblCurr.outerHTML;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000266)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 显示一个字段的单元信息
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperS:源对象
 **/
export async function PaperEx_FuncMap_ddPeriodical(objPaper: clsPaperENEx) {
  const strThisFuncName = PaperEx_FuncMap_ddPeriodical.name;
  try {
    if (IsNullOrEmpty(objPaper.ddPeriodical) == true) {
      const lblCurr = GetLabel_Empty('col-form-label text-right');
      const lblStyle_Title = GetLabel_Empty('text-secondary font-weight-bold'); //;
      lblStyle_Title.innerHTML = '期刊';
      const lblStyle_Content = GetLabel_Empty('text-black'); //; await css_StyleEx_GetHtmlElementByStyleId(objCss_FldDispUnitStyle.styleId_Content, strContent);
      lblStyle_Content.innerHTML = objPaper.periodical;
      lblCurr.innerHTML = Format('{0}:{1}', lblStyle_Title.outerHTML, lblStyle_Content.outerHTML);
      objPaper.ddPeriodical = lblCurr.outerHTML;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000267)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 显示一个字段的单元信息
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperS:源对象
 **/
export async function PaperEx_FuncMap_ddLiteratureSources(objPaper: clsPaperENEx) {
  const strThisFuncName = PaperEx_FuncMap_ddLiteratureSources.name;
  try {
    if (IsNullOrEmpty(objPaper.ddLiteratureSources) == true) {
      const lblCurr = GetLabel_Empty('col-form-label text-right');
      const lblStyle_Title = GetLabel_Empty('text-secondary font-weight-bold'); //;
      lblStyle_Title.innerHTML = '文献来源';
      const lblStyle_Content = GetLabel_Empty('text-black'); //; await css_StyleEx_GetHtmlElementByStyleId(objCss_FldDispUnitStyle.styleId_Content, strContent);
      lblStyle_Content.innerHTML = objPaper.literatureSources;
      lblCurr.innerHTML = Format('{0}:{1}', lblStyle_Title.outerHTML, lblStyle_Content.outerHTML);
      objPaper.ddLiteratureSources = lblCurr.outerHTML;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000268)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 显示一个字段的单元信息
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperS:源对象
 **/
export async function PaperEx_FuncMap_ddKeyword(objPaper: clsPaperENEx) {
  const strThisFuncName = PaperEx_FuncMap_ddKeyword.name;
  try {
    if (IsNullOrEmpty(objPaper.ddKeyword) == true) {
      const lblCurr = GetLabel_Empty('col-form-label text-right');
      const lblStyle_Title = GetLabel_Empty('text-secondary font-weight-bold'); //;
      lblStyle_Title.innerHTML = '关键字';
      const lblStyle_Content = GetLabel_Empty('text-black'); //; await css_StyleEx_GetHtmlElementByStyleId(objCss_FldDispUnitStyle.styleId_Content, strContent);
      lblStyle_Content.innerHTML = objPaper.keyword;
      lblCurr.innerHTML = Format('{0}:{1}', lblStyle_Title.outerHTML, lblStyle_Content.outerHTML);
      objPaper.ddKeyword = lblCurr.outerHTML;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000269)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/* 显示vPaper对象的所有属性值
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   <param name = "divContainer">显示容器</param>
   <param name = "arrPaperObjLst">需要绑定的对象列表</param>
 */
export async function PaperEx_BindTab_Paper(
  divContainer: HTMLDivElement,
  arrPaperExObjLst: Array<clsPaperENEx>,
  objOperateList: clsOperateList,
) {
  const strThisFuncName = PaperEx_BindTab_Paper.name;

  if (divContainer == null) {
    const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return;
  }
  const arrDataColumn: Array<clsDataColumn> = [
    {
      fldName: '',
      colHeader: '',
      text: '',
      tdClass: 'text-left',
      sortBy: '',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'CheckBox',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_PaperTitle,
      colHeader: '论文标题',
      text: '',
      tdClass: 'text-left',
      sortBy: 'paperTitle',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    //{
    //    fldName: "paperTitle",
    //    colHeader: "论文标题",
    //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
    //    columnType: "Label",
    //    orderNum: 1,
    //    funcName: (strKeyId: string, strText: string) => {
    //        strIdCurrEduclsa1: HTMLElement = document.createElement("Label");
    //        a1.innerText = strText;
    //        a1.className = "btn btn-outline-info";
    //        a1.setAttribute("onclick", `btnDetailRecordInTab_Click('${strKeyId}');`);
    //        return a1;
    //    }
    //},

    {
      fldName: clsPaperENEx.con_Periodical,
      colHeader: '期刊',
      text: '',
      tdClass: 'text-left',
      sortBy: 'periodical',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_Author,
      colHeader: '作者',
      text: '',
      tdClass: 'text-left',
      sortBy: 'author',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    //{
    //    fldName: "researchQuestion",
    //    colHeader: "研究问题",
    //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
    //    columnType: "Label",
    //    orderNum: 1,
    //    funcName: () => { }
    //},

    {
      fldName: clsPaperENEx.con_Keyword,
      colHeader: '关键字',
      text: '',
      tdClass: 'text-left',
      sortBy: 'keyword',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_LiteratureSources,
      colHeader: '文献来源',
      text: '',
      tdClass: 'text-left',
      sortBy: 'literatureSources',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_SectionNum,
      colHeader: '节数',
      text: '',
      tdClass: 'text-left',
      sortBy: clsPaperENEx.con_SectionNum,
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    //{
    //    fldName: "literatureLink",
    //    colHeader: "文献链接",
    //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
    //    columnType: "Label",
    //    orderNum: 1,
    //    funcName: () => { }
    //},
    //{
    //    fldName: "uploadfileUrl",
    //    colHeader: "文件地址",
    //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
    //    columnType: "Label",
    //    orderNum: 1,
    //    funcName: () => { }
    //},
    //{
    //    fldName: "checker",
    //    colHeader: "审核人",
    //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
    //    columnType: "Label",
    //    orderNum: 1,
    //    funcName: () => { }
    //},
    {
      fldName: clsPaperENEx.con_IsSubmit,
      colHeader: '是否提交',
      text: '',
      tdClass: 'text-left',
      sortBy: 'isSubmit',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_IsChecked,
      colHeader: '是否审核',
      text: '',
      tdClass: 'text-left',
      sortBy: 'isChecked',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    //{
    //    fldName: "isQuotethesis",
    //    colHeader: "是否引用论文",
    //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
    //    columnType: "Label",
    //    orderNum: 1,
    //    funcName: () => { }
    //},
    {
      fldName: clsPaperENEx.con_UpdDate,
      colHeader: '提交日期',
      text: '',
      tdClass: 'text-left',
      sortBy: 'updDate',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_UpdUserName,
      colHeader: '提交用户',
      text: '',
      tdClass: 'text-left',
      sortBy: 'userName',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_Pcount,
      colHeader: '读写数',
      text: '',
      tdClass: 'text-left',
      sortBy: 'pcount',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_AttachmentCount,
      colHeader: '附件数',
      text: '',
      tdClass: 'text-left',
      sortBy: 'attachmentCount',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: '',
      colHeader: '详情',
      text: '详情',
      tdClass: 'text-left',
      sortBy: '',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Button',
      orderNum: 1,
      funcName: (strKeyId: string, strText: string) => {
        const btn1: HTMLElement = document.createElement('button');
        btn1.innerText = strText;
        btn1.className = 'btn btn-outline-info btn-sm';
        btn1.setAttribute('onclick', `btnDetailRecordInTab_Click("${strKeyId}");`);
        return btn1;
      },
    },
    //{
    //    fldName: "",
    //    colHeader: "删除",
    //    text: "删除",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
    //    columnType: "Button",
    //    orderNum: 1,
    //    funcName: (strKeyId: string, strText: string) => {
    //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
    //        btn1.innerText = strText;
    //        btn1.className = "btn btn-outline-info";
    //        btn1.setAttribute("onclick", `btnDelRecordInTab_Click('${strKeyId}');`);
    //        return btn1;
    //    }
    //},
  ];
  try {
    await PaperEx_ExtendFldFuncMap(arrPaperExObjLst, arrDataColumn);
  } catch (e: any) {
    const strMsg = Format(
      '扩展字段值的映射出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
  const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
  await BindTab(divDataLst, arrPaperExObjLst, arrDataColumn, 'paperId', objOperateList);
}

/* 显示vPaper对象的所有属性值
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   <param name = "divContainer">显示容器</param>
   <param name = "arrPaperObjLst">需要绑定的对象列表</param>
 */
export async function PaperEx_BindTab_Paper4MSReading(
  divContainer: HTMLDivElement,
  arrPaperExObjLst: Array<clsPaperENEx>,
  objOperateList: clsOperateList,
) {
  const strThisFuncName = PaperEx_BindTab_Paper.name;

  if (divContainer == null) {
    const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return;
  }
  const arrDataColumn: Array<clsDataColumn> = [
    {
      fldName: '',
      colHeader: '',
      text: '',
      tdClass: 'text-left',
      sortBy: '',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'CheckBox',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_PaperTitle,
      colHeader: '课文标题',
      text: '',
      tdClass: 'text-left',
      sortBy: 'paperTitle',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },

    {
      fldName: clsPaperENEx.con_GradeName,
      colHeader: '年级',
      text: '',
      tdClass: 'text-left',
      sortBy: 'periodical',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_StudyLevelName,
      colHeader: '学段',
      text: '',
      tdClass: 'text-left',
      sortBy: 'periodical',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_Author,
      colHeader: '作者',
      text: '',
      tdClass: 'text-left',
      sortBy: 'author',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },

    {
      fldName: clsPaperENEx.con_Keyword,
      colHeader: '关键字',
      text: '',
      tdClass: 'text-left',
      sortBy: 'keyword',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_SectionNum,
      colHeader: '节数',
      text: '',
      tdClass: 'text-left',
      sortBy: clsPaperENEx.con_SectionNum,
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    // {
    //   fldName: clsPaperENEx.con_LiteratureSources,
    //   colHeader: '文献来源',
    //   text: '',
    //   tdClass: 'text-left',
    //   sortBy: 'literatureSources',
    //   sortFun: SortFun,
    //   getDataSource: '',
    //   columnType: 'Label',
    //   orderNum: 1,
    //   funcName: () => {},
    // },

    {
      fldName: clsPaperENEx.con_IsSubmit,
      colHeader: '是否提交',
      text: '',
      tdClass: 'text-left',
      sortBy: 'isSubmit',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_IsChecked,
      colHeader: '是否审核',
      text: '',
      tdClass: 'text-left',
      sortBy: 'isChecked',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },

    {
      fldName: clsPaperENEx.con_UpdDate,
      colHeader: '提交日期',
      text: '',
      tdClass: 'text-left',
      sortBy: 'updDate',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_UpdUserName,
      colHeader: '提交用户',
      text: '',
      tdClass: 'text-left',
      sortBy: 'userName',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_Pcount,
      colHeader: '读写数',
      text: '',
      tdClass: 'text-left',
      sortBy: 'pcount',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: clsPaperENEx.con_AttachmentCount,
      colHeader: '附件数',
      text: '',
      tdClass: 'text-left',
      sortBy: 'attachmentCount',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Label',
      orderNum: 1,
      funcName: () => {},
    },
    {
      fldName: '',
      colHeader: '详情',
      text: '详情',
      tdClass: 'text-left',
      sortBy: '',
      sortFun: SortFun,
      getDataSource: '',
      columnType: 'Button',
      orderNum: 1,
      funcName: (strKeyId: string, strText: string) => {
        const btn1: HTMLElement = document.createElement('button');
        btn1.innerText = strText;
        btn1.className = 'btn btn-outline-info btn-sm';
        btn1.setAttribute('onclick', `btnDetailRecordInTab_Click("${strKeyId}");`);
        return btn1;
      },
    },
    //{
    //    fldName: "",
    //    colHeader: "删除",
    //    text: "删除",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
    //    columnType: "Button",
    //    orderNum: 1,
    //    funcName: (strKeyId: string, strText: string) => {
    //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
    //        btn1.innerText = strText;
    //        btn1.className = "btn btn-outline-info";
    //        btn1.setAttribute("onclick", `btnDelRecordInTab_Click('${strKeyId}');`);
    //        return btn1;
    //    }
    //},
  ];
  try {
    await PaperEx_ExtendFldFuncMap(arrPaperExObjLst, arrDataColumn);
  } catch (e: any) {
    const strMsg = Format(
      '扩展字段值的映射出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
  const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
  await BindTab(divDataLst, arrPaperExObjLst, arrDataColumn, 'paperId', objOperateList);
}
/** 扩展字段值的函数映射
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
 * @param arrPaperExObjLst:需要映射的对象列表
 * @param arrDataColumn:用于绑定表的数据列信息
 **/
export async function PaperEx_ExtendFldFuncMap(
  arrPaperExObjLst: Array<clsPaperENEx>,
  arrDataColumn: Array<clsDataColumn>,
) {
  const arrFldName = clsPaperEN.AttributeName;
  for (const objDataColumn of arrDataColumn) {
    if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
    if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
    for (const objInFor of arrPaperExObjLst) {
      await PaperEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
    }
  }
}

export async function PaperEx_SynPaperStatisticsAsync(TeaUserId: string): Promise<boolean> {
  const strThisFuncName = '';
  const strAction = 'GetTotalRevalidation';
  const strUrl = PaperEx_GetWebApiUrl(paperEx_Controller, strAction);

  try {
    const response = await axios.get(strUrl, {
      params: { updUser: TeaUserId },
    });
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
        paperEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        paperEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 获取论文中的用户数量
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function PaperEx_GetUserNumObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPaperEN>> {
  const strThisFuncName = 'GetUserNumObjLstAsync';
  const strAction = 'GetUserNumObjLst';
  const strUrl = PaperEx_GetWebApiUrl(paperEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: { strWhereCond },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          paperEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Paper_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        paperEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        paperEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function vPaperEx_SynPaperStatisticsAsync(TeaUserId: string): Promise<boolean> {
  const strThisFuncName = '';
  const strAction = 'GetTotalRevalidation';
  const strUrl = PaperEx_GetWebApiUrl(paperEx_Controller, strAction);

  try {
    const response = await axios.get(strUrl, {
      params: { updUser: TeaUserId },
    });
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
        paperEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        paperEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// <summary>
/// 绑定基于论文缓存的用户下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
export async function vPaperEx_BindDdl_UsersInvSimPaper_Cache(strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);

  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  console.log('开始：BindDdl_UserId_Cache');
  const arrvPaperSim: Array<clsvPaperSimEN> = await vPaperSim_GetObjLstAsync('1=1');
  let arrObjLst_Sel: Array<clsUsersEN> = arrvPaperSim.map(vPaperEx_GetUsersBvPaperSim);
  arrObjLst_Sel = vPaperEx_uniq(arrObjLst_Sel);
  console.log(arrObjLst_Sel);
  arrObjLst_Sel = arrObjLst_Sel.sort((x) => x.GetFldValue(clsUsersEN.con_UserName));
  BindDdl_ObjLst(
    strDdlName,
    arrObjLst_Sel,
    clsUsersEN.con_UserId,
    clsUsersEN.con_UserName,
    '编辑用户',
  );
}

export function vPaperEx_uniq(arr: Array<clsUsersEN>): Array<clsUsersEN> {
  const arrObjLst_New: Array<clsUsersEN> = new Array<clsUsersEN>();
  for (const x of arr) {
    if (vPaperEx_IsExist(arrObjLst_New, x) == false) {
      arrObjLst_New.push(x);
    }
  }
  return arrObjLst_New;
}

export function vPaperEx_IsExist(arr: Array<clsUsersEN>, key: clsUsersEN) {
  const arr_Sel = arr.filter((x) => x.userId == key.userId);
  if (arr_Sel.length > 0) return true;
  return false;
}

export function vPaperEx_GetUsersBvPaperSim(objvPaperSim: clsvPaperSimEN): clsUsersEN {
  const objUsers: clsUsersEN = new clsUsersEN();
  objUsers.userId = objvPaperSim.updUser;
  objUsers.userName = objvPaperSim.userName;
  return objUsers;
}

/// <summary>
/// 绑定基于论文缓存的专业下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
export async function vPaperEx_BindDdl_XzMajorInvSimPaper_Cache(strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  console.log('开始：BindDdl_idXzMajor_Cache');
  const arrvPaperSim: Array<clsvPaperSimEN> = await vPaperSim_GetObjLstAsync('1=1');
  let arrObjLst_Sel: Array<clsXzMajorEN> = arrvPaperSim.map(vPaperEx_GetXzMajorBvPaperSim);
  arrObjLst_Sel = vPaperEx_XzMajorUniq(arrObjLst_Sel);
  console.log(arrObjLst_Sel);
  arrObjLst_Sel = arrObjLst_Sel.sort((x) => x.GetFldValue(clsXzMajorEN.con_MajorName));
  BindDdl_ObjLst(
    strDdlName,
    arrObjLst_Sel,
    clsXzMajorEN.con_IdXzMajor,
    clsXzMajorEN.con_MajorName,
    '专业',
  );
}

export function vPaperEx_XzMajorUniq(arr: Array<clsXzMajorEN>): Array<clsXzMajorEN> {
  const arrObjLst_New: Array<clsXzMajorEN> = new Array<clsXzMajorEN>();
  for (const x of arr) {
    if (vPaperEx_XzMajorIsExist(arrObjLst_New, x) == false) {
      arrObjLst_New.push(x);
    }
  }
  return arrObjLst_New;
}

export function vPaperEx_XzMajorIsExist(arr: Array<clsXzMajorEN>, key: clsXzMajorEN) {
  const arr_Sel = arr.filter((x) => x.idXzMajor == key.idXzMajor);
  if (arr_Sel.length > 0) return true;
  return false;
}

export function vPaperEx_GetXzMajorBvPaperSim(objvPaperSim: clsvPaperSimEN): clsXzMajorEN {
  const objXzMajor: clsXzMajorEN = new clsXzMajorEN();
  objXzMajor.idXzMajor = objvPaperSim.idXzMajor;
  objXzMajor.majorName = objvPaperSim.majorName;
  return objXzMajor;
}

/// <summary>
/// 根据教学班获取对象列表，用对象列表表示
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strIdCurrEduCls">教学班流水号</param>
/// <returns>获取的相应对象列表</returns>
export async function vPaperEx_GetObjLstByIdCurrEduCls(
  strIdCurrEduCls: string,
  strCourseId: string,
): Promise<Array<clsPaperEN>> {
  const strThisFuncName = 'GetObjLstByIdCurrEduCls';
  const strAction = 'GetObjLstByIdCurrEduCls';
  const strUrl = PaperEx_GetWebApiUrl(paperEx_Controller, strAction);

  try {
    const response = await axios.get(strUrl, {
      params: {
        strIdCurrEduCls,
        strCourseId,
      },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          paperEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Paper_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        paperEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        paperEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 根据关键字获取相关对象, 从缓存中获取.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_Cache)
/// </summary>
/// <param name = "strPaperId">所给的关键字</param>
/// <returns>对象</returns>
export async function vPaperEx_GetObjByPaperIdByIdCurrEduCls_Cache(
  strPaperId: string,
  strIdCurrEducls: string,
  strCourseId: string,
) {
  const arrvPaperObjLst_Cache: Array<clsPaperEN> = await vPaperEx_GetObjLstByIdCurrEduCls_Cache(
    strIdCurrEducls,
    strCourseId,
  );
  const obj: clsPaperEN = new clsPaperEN();
  try {
    const arrvPaper_Sel: Array<clsPaperEN> = arrvPaperObjLst_Cache.filter(
      (x) => x.paperId == strPaperId,
    );
    let objvPaper: clsPaperEN;
    if (arrvPaper_Sel.length > 0) {
      objvPaper = arrvPaper_Sel[0];
      return objvPaper;
    } else {
      return obj;
    }
  } catch (e: any) {
    const strMsg = `错误:[${e}]. \n根据关键字:[${strPaperId}]获取相应的对象不成功!`;
    console.error(strMsg);
    alert(strMsg);
  }
  return obj;
}

/// <summary>
/// 刷新本类中的缓存.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
/// </summary>
export function PaperEx_ReFreshThisCacheByIdCurrEduClsBakFromV(strIdCurrEducls: string) {
  let strMsg = '';
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = `${clsPaperEN._CurrTabName}_${strIdCurrEducls}`;
    switch (clsPaperEN.CacheModeId) {
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
  } else {
    strMsg = `刷新缓存已经关闭。`;
  }
}

/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function vPaperEx_GetObjLstByIdCurrEduCls_Cache(
  strIdCurrEducls: string,
  strCourseId: string,
) {
  let arrvPaperObjLst_Cache: Array<clsPaperEN>;
  switch (clsPaperEN.CacheModeId) {
    case '04': //sessionStorage
      arrvPaperObjLst_Cache = await vPaperEx_GetObjLstByIdCurrEduCls_sessionStorage(
        strIdCurrEducls,
        strCourseId,
      );
      break;
    case '03': //localStorage
      arrvPaperObjLst_Cache = await vPaperEx_GetObjLstByIdCurrEduCls_localStorage(
        strIdCurrEducls,
        strCourseId,
      );
      break;
    case '02': //ClientCache
      arrvPaperObjLst_Cache = await vPaperEx_GetObjLstByIdCurrEduCls_ClientCache(
        strIdCurrEducls,
        strCourseId,
      );
      break;
    default:
      arrvPaperObjLst_Cache = await vPaperEx_GetObjLstByIdCurrEduCls_ClientCache(
        strIdCurrEducls,
        strCourseId,
      );
      break;
  }
  return arrvPaperObjLst_Cache;
}

/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstClientCache)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function vPaperEx_GetObjLstByIdCurrEduCls_ClientCache(
  strIdCurrEducls: string,
  strCourseId: string,
) {
  //初始化列表缓存
  // let strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;
  const strKey = `${clsPaperEN._CurrTabName}_${strIdCurrEducls}`;
  if (strKey == '') {
    console.log('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrvPaperObjLst_Cache: Array<clsPaperEN> = CacheHelper.Get(strKey);
    return arrvPaperObjLst_Cache;
  }
  try {
    const arrPaperExObjLst = await vPaperEx_GetObjLstByIdCurrEduCls(strIdCurrEducls, strCourseId);

    CacheHelper.Add(strKey, arrPaperExObjLst);
    const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrPaperExObjLst.length}!`;
    console.log(strInfo);
    return arrPaperExObjLst;
  } catch (e: any) {
    const strMsg = `从本地缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
    console.error(strMsg);
    throw strMsg;
  }
}

/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstlocalStorage)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function vPaperEx_GetObjLstByIdCurrEduCls_localStorage(
  strIdCurrEducls: string,
  strCourseId: string,
) {
  //初始化列表缓存
  // let strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;
  const strKey = `${clsPaperEN._CurrTabName}_${strIdCurrEducls}`;
  if (strKey == '') {
    console.log('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }

  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPaperObjLst_Cache: Array<clsPaperEN> = JSON.parse(strTempObjLst);
    return arrvPaperObjLst_Cache;
  }
  try {
    const arrPaperExObjLst = await vPaperEx_GetObjLstByIdCurrEduCls(strIdCurrEducls, strCourseId);

    localStorage.setItem(strKey, JSON.stringify(arrPaperExObjLst));
    const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrPaperExObjLst.length}!`;
    console.log(strInfo);
    return arrPaperExObjLst;
  } catch (e: any) {
    const strMsg = `从本地缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
    console.error(strMsg);
    throw strMsg;
  }
}
/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstsessionStorage)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function vPaperEx_GetObjLstByIdCurrEduCls_sessionStorage(
  strIdCurrEducls: string,
  strCourseId: string,
) {
  //初始化列表缓存
  // let strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;
  const strKey = `${clsPaperEN._CurrTabName}_${strIdCurrEducls}`;
  if (strKey == '') {
    console.log('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }

  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPaperObjLst_Cache: Array<clsPaperEN> = JSON.parse(strTempObjLst);
    return arrvPaperObjLst_Cache;
  }
  try {
    const arrPaperExObjLst = await vPaperEx_GetObjLstByIdCurrEduCls(strIdCurrEducls, strCourseId);

    sessionStorage.setItem(strKey, JSON.stringify(arrPaperExObjLst));
    const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrPaperExObjLst.length}!`;
    console.log(strInfo);
    return arrPaperExObjLst;
  } catch (e: any) {
    const strMsg = `从缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
    console.error(strMsg);
    throw strMsg;
  }
}

/// <summary>
/// 根据条件对象, 从缓存的对象列表中获取子集.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
/// </summary>
/// <param name = "objstrSubViewpointId_Cond">条件对象</param>
/// <returns>对象列表子集</returns>
export async function vPaperEx_GetSubObjLstByIdCurrEduCls_Cache(
  objvPaper_Cond: clsPaperEN,
  strIdCurrEducls: string,
  strCourseId: string,
) {
  const arrvPaperObjLst_Cache: Array<clsPaperEN> = await vPaperEx_GetObjLstByIdCurrEduCls_Cache(
    strIdCurrEducls,
    strCourseId,
  );
  let arrvPaper_Sel: Array<clsPaperEN> = arrvPaperObjLst_Cache;
  if (objvPaper_Cond.sfFldComparisonOp == null || objvPaper_Cond.sfFldComparisonOp == '')
    return arrvPaper_Sel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPaper_Cond.sfFldComparisonOp,
  );
  //console.log("clsvPaperWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPaper_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPaper_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPaper_Sel = arrvPaper_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPaper_Sel = arrvPaper_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (strValue == 0) continue;
          if (strComparisonOp == '=') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvPaper_Sel;
  } catch (e: any) {
    const strMsg = `错误:[${e}]. \n根据条件:[${JSON.stringify(
      objvPaper_Cond,
    )}]缓存对象列表中获取子集对象不成功!`;
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperEN>();
}
/// <summary>
/// 根据条件对象, 从缓存的对象列表中获取记录数.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
/// </summary>
/// <param name = "objvPaper_Cond">条件对象</param>
/// <returns>对象列表记录数</returns>
export async function vPaperEx_GetRecCountByCondByIdCurrEduCls_Cache(
  objvPaper_Cond: clsPaperEN,
  strIdCurrEducls: string,
  strCourseId: string,
) {
  const arrvPaperObjLst_Cache: Array<clsPaperEN> = await vPaperEx_GetObjLstByIdCurrEduCls_Cache(
    strIdCurrEducls,
    strCourseId,
  );
  let arrvPaper_Sel: Array<clsPaperEN> = arrvPaperObjLst_Cache;
  if (objvPaper_Cond.sfFldComparisonOp == null || objvPaper_Cond.sfFldComparisonOp == '')
    return arrvPaper_Sel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPaper_Cond.sfFldComparisonOp,
  );
  //console.log("clsvPaperWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPaper_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPaper_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPaper_Sel = arrvPaper_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPaper_Sel = arrvPaper_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (strValue == 0) continue;
          if (strComparisonOp == '=') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvPaper_Sel.length;
  } catch (e: any) {
    const strMsg = `错误:[${e}]. \n根据条件:[${JSON.stringify(
      objvPaper_Cond,
    )}]从缓存对象列表中获取记录数不成功!`;
    console.error(strMsg);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/// <summary>
/// 从缓存中获取分页对象列表.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
/// </summary>
/// <param name = "objPagerPara">分页参数结构</param>
/// <returns>对象列表</returns>
export async function vPaperEx_GetObjLstByPagerByIdCurrEduCls_Cache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
  strCourseId: string,
) {
  console.log(strCourseId);
  const arrvPaperObjLst_Cache: Array<clsPaperEN> = await PaperEx_GetObjLstByIdCurrEduCls_Cache(
    strIdCurrEducls,
  );
  if (arrvPaperObjLst_Cache.length == 0) return arrvPaperObjLst_Cache;
  let arrvPaper_Sel: Array<clsPaperEN> = arrvPaperObjLst_Cache;
  const obj_Cond: clsPaperEN = JSON.parse(objPagerPara.whereCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsvPaperWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = obj_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPaper_Sel = arrvPaper_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPaper_Sel = arrvPaper_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (strValue == 0) continue;
          if (strComparisonOp == '=') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvPaper_Sel = arrvPaper_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvPaper_Sel.length == 0) return arrvPaper_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      //                console.log(arrvPaper_Sel);
      const objFirst = arrvPaper_Sel[0]; //第一个对象
      const strSortValue = objFirst.GetFldValue(strSortFld); //第一个对象排序字段值
      const strSortFldType = typeof strSortValue; //排序字段值的数据类型
      //console.log("排序字段的数据类型: " + strSortFldType);
      switch (strSortFldType) {
        case 'string':
          if (strSortType.toLowerCase() == 'asc') {
            arrvPaper_Sel = arrvPaper_Sel.sort((x, y) =>
              x.GetFldValue(strSortFld).localeCompare(y.GetFldValue(strSortFld)),
            );
          } else {
            arrvPaper_Sel = arrvPaper_Sel.sort((x, y) =>
              y.GetFldValue(strSortFld).localeCompare(x.GetFldValue(strSortFld)),
            );
          }
          break;
        case 'number':
        case 'boolean':
          if (strSortType.toLowerCase() == 'asc') {
            arrvPaper_Sel = arrvPaper_Sel.sort(
              (x, y) => x.GetFldValue(strSortFld) - y.GetFldValue(strSortFld),
            );
          } else {
            arrvPaper_Sel = arrvPaper_Sel.sort(
              (x, y) => y.GetFldValue(strSortFld) - x.GetFldValue(strSortFld),
            );
          }
          break;
      }
    } else {
      //如果排序字段名[orderBy]为空，就调用排序函数
      arrvPaper_Sel = arrvPaper_Sel.sort(objPagerPara.sortFun);
    }
    arrvPaper_Sel = arrvPaper_Sel.slice(intStart, intEnd);
    return arrvPaper_Sel;
  } catch (e: any) {
    const strMsg = `错误:[${e}]. \n根据条件:[${objPagerPara.whereCond}]获取分页对象列表不成功!(In vPaper_GetObjLstByPagerCache)`;
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperEN>();
}

export async function vPaperEx_EditSubViewPoint(
  strPaperId: string,
  strTopicIc: string,
  strIdCurrEduCls: string,
  strKnowledgeTypeId: string,
) {
  const objPaper = await Paper_GetObjByPaperIdAsync(strPaperId);
  if (objPaper == null) return;
  const aPaperSubVer = GetA_Empty('');
  if (objPaper.literatureTypeId == '05') {
    aPaperSubVer.href = `#/ReadTraining?paperId=${objPaper.paperId}&topicId=${strTopicIc}&idCurrEduCls=${strIdCurrEduCls}&knowledgeTypeId=${strKnowledgeTypeId}`;
    aPaperSubVer.innerText = `阅读训练`;
  } else {
    aPaperSubVer.href = `#/PaperSubViewpoint?paperId=${objPaper.paperId}&topicId=${strTopicIc}&idCurrEduCls=${strIdCurrEduCls}&knowledgeTypeId=${strKnowledgeTypeId}`;
    aPaperSubVer.innerText = `pdf论文子观点查看`;
  }
  aPaperSubVer.click();
}
// router.push("/PaperIframe");

//论文下拉框绑定
export async function vPaperEx_BindDdl_PaperIdByTopicId(ddlPaperId: string, strTopicId: string) {
  const strWhereCond = ` topicId= ${strTopicId}`;

  const objDdl = document.getElementById(ddlPaperId);
  if (objDdl == null) {
    const strMsg = `下拉框：${ddlPaperId} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }

  try {
    let arrvRTPaperRelaObjLst = await vRTPaperRela_GetObjLstAsync(strWhereCond);
    arrvRTPaperRelaObjLst = arrvRTPaperRelaObjLst.sort(vRTPaperRelaEx_SortByPaperTypeTitle);
    for (const objInFor of arrvRTPaperRelaObjLst) {
      objInFor.memo = `${objInFor.paperTypeName}-${objInFor.paperTitle}`;
    }
    BindDdl_ObjLst_V(
      ddlPaperId,
      arrvRTPaperRelaObjLst,
      clsvRTPaperRelaEN.con_PaperId,
      clsvRTPaperRelaEN.con_Memo,
      '主题相关论文',
    );
    console.log('完成BindDdl_UserId!');
  } catch (e: any) {
    const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperS:源对象
 **/
export async function PaperEx_FuncMapStudyLevelName(objPaper: clsPaperENEx) {
  const strThisFuncName = PaperEx_FuncMapStudyLevelName.name;
  try {
    if (IsNullOrEmpty(objPaper.studyLevelName) == true) {
      const StudyLevelidStudyLevel = objPaper.idStudyLevel;
      const StudyLevelStudyLevelName = await StudyLevel_func(
        clsStudyLevelEN.con_IdStudyLevel,
        clsStudyLevelEN.con_StudyLevelName,
        StudyLevelidStudyLevel,
      );
      objPaper.studyLevelName = StudyLevelStudyLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000523)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperS:源对象
 **/
export async function PaperEx_FuncMapGradeName(objPaper: clsPaperENEx) {
  const strThisFuncName = PaperEx_FuncMapGradeName.name;
  try {
    if (IsNullOrEmpty(objPaper.gradeName) == true) {
      const XzGradeidGrade = objPaper.idGrade;
      const XzGradeGradeName = await XzGrade_func(
        clsXzGradeEN.con_IdGrade,
        clsXzGradeEN.con_GradeName,
        XzGradeidGrade,
      );
      objPaper.gradeName = XzGradeGradeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000477)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function PaperEx_FuncMapSectionNum(objPaper: clsPaperENEx) {
  const strThisFuncName = PaperEx_FuncMapGradeName.name;
  try {
    if (objPaper.sectionNum == 0) {
      const strPaperId = objPaper.paperId;
      const arrSection = await sectionStore.getObjLst(strPaperId);
      if (arrSection == null) objPaper.sectionNum = 0;
      else objPaper.sectionNum = arrSection.length;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000477)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
