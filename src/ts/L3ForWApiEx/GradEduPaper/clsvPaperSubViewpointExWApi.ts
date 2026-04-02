//import * as QQ from "q";
import axios from 'axios';
import { GetAddressAndPort, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  vPaperSubViewpoint_FilterFunByKey,
  vPaperSubViewpoint_GetObjLstAsync,
  vPaperSubViewpoint_GetObjLstByJSONObjLst,
  vPaperSubViewpoint_GetObjLstCache,
  vPaperSubViewpoint_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsvPaperSubViewpointENEx } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointENEx';
import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
import { clsPaperSubAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachmentEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { rtUserRelaStore } from '@/store/modules/rtRTUserRela';
import { paperSubAttachmentStore } from '@/store/modules/paperSubAttachment';
import { sysVoteStore } from '@/store/modules/sysVote';
import { userStore } from '@/store/modulesShare/user';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsgs_TotalDataRelaEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataRelaEN';
import { gs_TotalDataRela_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataRelaWApi';
import { RTUserRela_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTUserRelaWApi';
import { gs_VpClassification_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';
import { gs_TotalDataRelaEx_BindList_gs_TotalDataRela } from '@/ts/L3ForWApiEx/GradEduTools/clsgs_TotalDataRelaExWApi';
import { gs_VpClassificationRelaStore } from '@/store/modules/gs_VpClassificationRela';
export const vPaperSubViewpointEx_Controller = 'vPaperSubViewpointExApi';
export const vPaperSubViewpointEx_ConstructorName = 'vPaperSubViewpointEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vPaperSubViewpointEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * @param objvPaperSubViewpointENS:源对象
 * @returns 目标对象=>clsvPaperSubViewpointEN:objvPaperSubViewpointENT
 **/
export function vPaperSubViewpointEx_CopyToEx(
  objvPaperSubViewpointENS: clsvPaperSubViewpointEN,
): clsvPaperSubViewpointENEx {
  const strThisFuncName = vPaperSubViewpointEx_CopyToEx.name;
  const objvPaperSubViewpointENT = new clsvPaperSubViewpointENEx();
  try {
    ObjectAssign(objvPaperSubViewpointENT, objvPaperSubViewpointENS);
    return objvPaperSubViewpointENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vPaperSubViewpointEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvPaperSubViewpointENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vPaperSubViewpointEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
): Promise<Array<clsvPaperSubViewpointENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrvPaperSubViewpointObjLst = await vPaperSubViewpoint_GetObjLstCache(strIdCurrEducls);
  const arrvPaperSubViewpointExObjLst = arrvPaperSubViewpointObjLst.map(
    vPaperSubViewpointEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvPaperSubViewpointExObjLst) {
      await vPaperSubViewpointEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvPaperSubViewpointExObjLst.length == 0) return arrvPaperSubViewpointExObjLst;
  let arrvPaperSubViewpoint_Sel: Array<clsvPaperSubViewpointENEx> = arrvPaperSubViewpointExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objvPaperSubViewpoint_Cond = new clsvPaperSubViewpointENEx();
  ObjectAssign(objvPaperSubViewpoint_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsvPaperSubViewpointWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPaperSubViewpoint_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPaperSubViewpoint_Sel.length == 0) return arrvPaperSubViewpoint_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.sort(
        vPaperSubViewpointEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.sort(objPagerPara.sortFun);
    }
    arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.slice(intStart, intEnd);
    return arrvPaperSubViewpoint_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPaperSubViewpointEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPaperSubViewpointENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vPaperSubViewpointEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPaperSubViewpointENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvPaperSubViewpointObjLst = await vPaperSubViewpoint_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrvPaperSubViewpointExObjLst = arrvPaperSubViewpointObjLst.map(
    vPaperSubViewpointEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvPaperSubViewpointExObjLst) {
      await vPaperSubViewpointEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvPaperSubViewpointExObjLst.length == 0) return arrvPaperSubViewpointExObjLst;
  let arrvPaperSubViewpoint_Sel: Array<clsvPaperSubViewpointENEx> = arrvPaperSubViewpointExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.sort(
        vPaperSubViewpointEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.sort(objPagerPara.sortFun);
    }
    arrvPaperSubViewpoint_Sel = arrvPaperSubViewpoint_Sel.slice(intStart, intEnd);
    return arrvPaperSubViewpoint_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPaperSubViewpointEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPaperSubViewpointENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-02
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPaperSubViewpointEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vPaperSubViewpoint_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vPaperSubViewpoint_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-02
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vPaperSubViewpointEx_FuncMapByFldName(
  strFldName: string,
  objvPaperSubViewpointEx: clsvPaperSubViewpointENEx,
) {
  const strThisFuncName = vPaperSubViewpointEx_FuncMapByFldName.name;
  console.log(objvPaperSubViewpointEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvPaperSubViewpointEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
export async function vPaperSubViewpointEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return vPaperSubViewpoint_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 获取论文中的用户数量
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function vPaperSubViewpointEx_GetSubViewpointNumObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvPaperSubViewpointEN>> {
  const strThisFuncName = 'GetSubViewpointNumObjLstAsync';
  const strAction = 'GetSubViewpointNumObjLst';
  const strUrl = vPaperSubViewpointEx_GetWebApiUrl(vPaperSubViewpointEx_Controller, strAction);
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
          vPaperSubViewpointEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPaperSubViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
        vPaperSubViewpointEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vPaperSubViewpointEx_Controller,
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
/// 获取论文中的评论数量
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function vPaperSubViewpointEx_GetSubViewpointTypeNumObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvPaperSubViewpointEN>> {
  const strThisFuncName = 'GetSubViewpointTypeNumObjLstAsync';
  const strAction = 'GetSubViewpointTypeNumObjLst';
  const strUrl = vPaperSubViewpointEx_GetWebApiUrl(vPaperSubViewpointEx_Controller, strAction);
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
          vPaperSubViewpointEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPaperSubViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
        vPaperSubViewpointEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vPaperSubViewpointEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function vPaperSubViewpointEx_DetailShow(
  objvPaperSubViewpoint: clsvPaperSubViewpointEN,
  intK: number,
  strReadWriteTypeId: string,
  strVoteType: string,
): Promise<string> {
  let arrPaperSubAttachmentObjLst: Array<clsPaperSubAttachmentEN> = [];
  const strSubViewpointId = objvPaperSubViewpoint.subViewpointId;
  const strPaperId = objvPaperSubViewpoint.paperId;
  const strUserId = userStore.getUserId;
  let strhtml = '';
  //===============知识类型
  strhtml += '<div style="float:left;">';
  strhtml += `&nbsp;&nbsp;<span class="color3">${intK}</span>.${clsIcon.faPlay}【知识类型】<span class="text-primary">${objvPaperSubViewpoint.gsKnowledgeTypeName}</span>`;
  strhtml += `&nbsp;<button id="btnUpdateKnowledgeTypeId" keyId="${strSubViewpointId}" title="编辑知识类型" class="btn btn-info btn-sm" >${clsIcon.faPenToSquare}</button>`;
  //===============观点态度
  switch (objvPaperSubViewpoint.gsKnowledgeTypeId) {
    case enumgs_KnowledgeType.PersonalOpinion_01:
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【${
        objvPaperSubViewpoint.attitudesName ?? '无态度'
      }】${objvPaperSubViewpoint.subViewpointContent}`;
      //==================观点说明
      if (objvPaperSubViewpoint.explainContent != '') {
        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【${
          objvPaperSubViewpoint.explainTypeName
        }】${objvPaperSubViewpoint.explainContent ?? '无'}`;
      }

      break;
    case enumgs_KnowledgeType.ExpertOpinion_02:
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【${
        objvPaperSubViewpoint.attitudesName ?? '无态度'
      }】${objvPaperSubViewpoint.subViewpointContent}`;
      //==================观点说明
      if (objvPaperSubViewpoint.explainContent != '') {
        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【${
          objvPaperSubViewpoint.explainTypeName
        }】${objvPaperSubViewpoint.explainContent ?? '无'}`;
      }

      break;
    case enumgs_KnowledgeType.Concept_03:
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【概念】${objvPaperSubViewpoint.subViewpointContent}`;
      //==================观点说明
      if (objvPaperSubViewpoint.explainContent != '') {
        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【概念内容】${
          objvPaperSubViewpoint.explainContent ?? '无'
        }`;
      }

      break;
    case enumgs_KnowledgeType.ObjectiveFact_04:
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【${objvPaperSubViewpoint.gsKnowledgeTypeName}】${objvPaperSubViewpoint.subViewpointContent}`;
      //==================观点说明
      if (objvPaperSubViewpoint.explainContent != '') {
        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【内容】${
          objvPaperSubViewpoint.explainContent ?? '无'
        }`;
      }
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【结论】${objvPaperSubViewpoint.conclusion}`;

      break;
    case enumgs_KnowledgeType.ObjectiveData_05:
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【${objvPaperSubViewpoint.gsKnowledgeTypeName}】${objvPaperSubViewpoint.subViewpointContent}`;
      //==================观点说明
      if (objvPaperSubViewpoint.explainContent != '') {
        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【内容】${
          objvPaperSubViewpoint.explainContent ?? '无'
        }`;
      }
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【结论】${objvPaperSubViewpoint.conclusion}`;
      break;
    case enumgs_KnowledgeType.Skill_06:
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【技能】${objvPaperSubViewpoint.subViewpointContent}`;
      //==================观点说明
      if (objvPaperSubViewpoint.explainContent != '') {
        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【实施过程】${
          objvPaperSubViewpoint.explainContent ?? '无'
        }`;
      }
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【操作类型】${
        objvPaperSubViewpoint.operationTypeName ?? '无'
      }`;
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【安全级别】${
        objvPaperSubViewpoint.levelName ?? '无'
      }`;

      break;
    case enumgs_KnowledgeType.SocialRelationships_07:
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【全名】${objvPaperSubViewpoint.subViewpointContent}`;
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【国籍】${objvPaperSubViewpoint.nationality}`;
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【工作单位】${objvPaperSubViewpoint.workUnit}`;
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【专业】${objvPaperSubViewpoint.major}`;
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【成就】${objvPaperSubViewpoint.achievement}`;
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【详细说明】${objvPaperSubViewpoint.explainContent}`;
      break;
  }

  //===============论文节
  //根据子观点id 得到附件
  if (IsNullOrEmpty(objvPaperSubViewpoint.sectionName) == false) {
    strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【论文节】${objvPaperSubViewpoint.sectionName}`;
  }

  const arrPaperSubAttachments = await paperSubAttachmentStore.getObjLst(strSubViewpointId);
  if (arrPaperSubAttachments != null && arrPaperSubAttachments.length > 0) {
    for (let y = 0; y < arrPaperSubAttachments.length; y++) {
      const objPaperSubAttachment = arrPaperSubAttachments[y];
      if (objPaperSubAttachment != null && objPaperSubAttachment.filePath != '') {
        const strAddressAndPortfull = GetAddressAndPort() + objPaperSubAttachment.filePath;
        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" alt="" id="txtImgPath${objPaperSubAttachment.paperSubAttachmentId}"/>`;
      }
    }
  }

  //if (objvPaperSubViewpoint.literatureSourcesId != "") {

  //    strhtml += '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【引用文献】' + objvPaperSubViewpoint.PaperTitleEx + '(作者：' + objvPaperSubViewpoint.AuthorEx + ')';
  //}
  //==================pdf页码
  if (objvPaperSubViewpoint.paperPageNum != 0) {
    strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="color3" >${clsIcon.faPlay}【pdf页码】第${objvPaperSubViewpoint.paperPageNum}页</a>`;
  }

  //==================编辑时间
  const strUserName = await vQxUsersSimStore.getUserName(objvPaperSubViewpoint.updUser);
  if (strUserName != '') {
    strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="color2">${clsIcon.faPlay}【编辑时间】${objvPaperSubViewpoint.updDate}【编辑用户】${strUserName}</span>`;
  }
  strhtml += '</div>';
  //最底一行编辑
  strhtml += '<div style="float:right;">';

  if (strReadWriteTypeId == '01') {
    strhtml += `&nbsp;&nbsp;<img src="/img/vote.png" width = "20px" height = "18px" title = "点赞数" >&nbsp;赞${objvPaperSubViewpoint.okCount}`;
    strhtml += `&nbsp;&nbsp;评论数:${objvPaperSubViewpoint.appraiseCount}`;
    if (objvPaperSubViewpoint.score != 0) {
      strhtml += `&nbsp;&nbsp;综合评分:${objvPaperSubViewpoint.score}`;
    }
    if (objvPaperSubViewpoint.teaScore != 0) {
      strhtml += `&nbsp;&nbsp;教师评分:${objvPaperSubViewpoint.teaScore}`;
    }
    if (objvPaperSubViewpoint.stuScore != 0) {
      strhtml += `&nbsp;&nbsp;学生评分:${objvPaperSubViewpoint.stuScore}`;
    }

    //编辑
    // o1nclick=btnUpdateRecordInTab_Click("${strSubViewpointId}")
    strhtml += `&nbsp;<button id="btnUpdateRecordInTab" keyId="${strSubViewpointId}" title="编辑子观点" class="btn btn-info btn-sm" >${clsIcon.faPenToSquare}</button>`;
    //删除
    // o1nclick=btnDelRecordInTab_Click("${strSubViewpointId}")
    strhtml += `&nbsp;<button id="btnDelRecordInTab" keyId="${strSubViewpointId}" title="删除子观点" class="btn-danger btn btn-sm" >${clsIcon.faTrash}</button>`;
    //}
  } else if (strReadWriteTypeId == '02') {
    const objLike = sysVoteStore.getObj(strVoteType, strUserId, strSubViewpointId.toString());

    // o1nclick=btnAddVote_Click("${strSubViewpointId}","${objvPaperSubViewpoint.updUser}")
    let strKeyId = `${strSubViewpointId}|${objvPaperSubViewpoint.updUser}`;
    if (objLike == null) {
      strhtml += `&nbsp;&nbsp;<a id="btnAddVote" keyId="${strKeyId}" href="javascript:void(0)"  ><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞" >&nbsp;赞${objvPaperSubViewpoint.okCount}</a>`;
    } else {
      strhtml += `&nbsp;&nbsp;<a id="btnAddVote" keyId="${strKeyId}" href="javascript:void(0)" ><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞" >&nbsp;已赞${objvPaperSubViewpoint.okCount}</a>`;
    }

    strhtml += `&nbsp;&nbsp;<span style="color:royalblue" >评论数:${objvPaperSubViewpoint.appraiseCount}</span>`;

    if (objvPaperSubViewpoint.score != 0) {
      strhtml += `&nbsp;&nbsp;综合评分:${objvPaperSubViewpoint.score}`;
    }
    if (objvPaperSubViewpoint.teaScore != 0) {
      strhtml += `&nbsp;&nbsp;教师评分:${objvPaperSubViewpoint.teaScore}`;
    }
    if (objvPaperSubViewpoint.stuScore != 0) {
      strhtml += `&nbsp;&nbsp;学生评分:${objvPaperSubViewpoint.stuScore}`;
    }
    strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${strPaperId}`;
    // o1nclick="xadmin.open('论文子观点评论', '../GradEduTools/SysComment?Key=${strSubViewpointId}&Type=02&User=${objvPaperSubViewpoint.updUser}&pubParentId=${clsPrivateSessionStorage.paperId}')"
    strhtml += `&nbsp;&nbsp;<button id="btnSysComment" keyId="${strKeyId}" class="btn btn-info btn-sm" > ${clsIcon.faCommentDots}添加评论</button >`;
  }

  strhtml += '</div>';
  return strhtml;
}

export async function vPaperSubViewpointEx_DetailShow_Topic(
  objvPaperSubViewpoint: clsvPaperSubViewpointEN,
  strTopicId: string,
  bolIsCurrTopicViewpoint: boolean,
  intK: number,
): Promise<string> {
  const strSubViewpointId = objvPaperSubViewpoint.subViewpointId;
  const strPaperId = objvPaperSubViewpoint.paperId;

  let strhtml = '';
  //判断当前内容编辑用户的色码
  let UserColor;
  UserColor = await rtUserRelaStore.getColorCode(objvPaperSubViewpoint.updUser, strTopicId);
  if (UserColor == '') {
    UserColor = ''; //`&nbsp;&nbsp;<span class="color3">${intK}</span>.${clsIcon.faPlay}<span>【${objvPaperSubViewpoint.attitudesName}】${objvPaperSubViewpoint.subViewpointContent}</span>`;
  }
  // ===============知识类型
  strhtml += `&nbsp;&nbsp;<span class="color3">${intK}</span>.${clsIcon.faPlay}【知识类型】<span class="text-primary">${objvPaperSubViewpoint.gsKnowledgeTypeName}</span>`;
  strhtml += `&nbsp;<button id="btnUpdateKnowledgeTypeId" keyId="${strSubViewpointId}" title="编辑知识类型" class="btn btn-info btn-sm" >${clsIcon.faPenToSquare}</button>`;
  if (bolIsCurrTopicViewpoint == true) {
    strhtml += `&nbsp;&nbsp;<span class="color3">(主题观点)</span>`;
  } else {
    strhtml += `&nbsp;&nbsp;<span class="color4">(非主题观点)</span>`;
    const strKeyId = `${strSubViewpointId}|${objvPaperSubViewpoint.gsKnowledgeTypeId}`;
    strhtml += `&nbsp;<button id="btnAddToCurrTopicId" keyId="${strKeyId}" title="把当前观点添加到本主题" class="btn btn-info btn-sm" >添加到本主题</button>`;
  }
  //===============观点态度
  switch (objvPaperSubViewpoint.gsKnowledgeTypeId) {
    case enumgs_KnowledgeType.PersonalOpinion_01:
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【${
        objvPaperSubViewpoint.attitudesName ?? '无态度'
      }】${objvPaperSubViewpoint.subViewpointContent}`;
      //==================观点说明
      if (objvPaperSubViewpoint.explainContent != '') {
        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【${
          objvPaperSubViewpoint.explainTypeName
        }】${objvPaperSubViewpoint.explainContent ?? '无'}`;
      }

      break;
    case enumgs_KnowledgeType.ExpertOpinion_02:
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【${
        objvPaperSubViewpoint.attitudesName ?? '无态度'
      }】${objvPaperSubViewpoint.subViewpointContent}`;
      //==================观点说明
      if (objvPaperSubViewpoint.explainContent != '') {
        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【${
          objvPaperSubViewpoint.explainTypeName
        }】${objvPaperSubViewpoint.explainContent ?? '无'}`;
      }

      break;
    case enumgs_KnowledgeType.Concept_03:
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【概念】${objvPaperSubViewpoint.subViewpointContent}`;
      //==================观点说明
      if (objvPaperSubViewpoint.explainContent != '') {
        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【概念内容】${
          objvPaperSubViewpoint.explainContent ?? '无'
        }`;
      }

      break;
    case enumgs_KnowledgeType.ObjectiveFact_04:
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【${objvPaperSubViewpoint.gsKnowledgeTypeName}】${objvPaperSubViewpoint.subViewpointContent}`;
      //==================观点说明
      if (objvPaperSubViewpoint.explainContent != '') {
        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【内容】${
          objvPaperSubViewpoint.explainContent ?? '无'
        }`;
      }
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【结论】${objvPaperSubViewpoint.conclusion}`;

      break;
    case enumgs_KnowledgeType.ObjectiveData_05:
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【${objvPaperSubViewpoint.gsKnowledgeTypeName}】${objvPaperSubViewpoint.subViewpointContent}`;
      //==================观点说明
      if (objvPaperSubViewpoint.explainContent != '') {
        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【内容】${
          objvPaperSubViewpoint.explainContent ?? '无'
        }`;
      }
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【结论】${objvPaperSubViewpoint.conclusion}`;
      break;
    case enumgs_KnowledgeType.Skill_06:
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【技能】${objvPaperSubViewpoint.subViewpointContent}`;
      //==================观点说明
      if (objvPaperSubViewpoint.explainContent != '') {
        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【实施过程】${
          objvPaperSubViewpoint.explainContent ?? '无'
        }`;
      }
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【操作类型】${objvPaperSubViewpoint.operationTypeName}`;
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【安全级别】${objvPaperSubViewpoint.levelName}`;

      break;
    case enumgs_KnowledgeType.SocialRelationships_07:
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【全名】${objvPaperSubViewpoint.subViewpointContent}`;
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【国籍】${objvPaperSubViewpoint.nationality}`;
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【工作单位】${objvPaperSubViewpoint.workUnit}`;
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【专业】${objvPaperSubViewpoint.major}`;
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【成就】${objvPaperSubViewpoint.achievement}`;
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【详细说明】${objvPaperSubViewpoint.explainContent}`;
      break;
  }

  strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}<span style="color:${UserColor}">【论文名】${objvPaperSubViewpoint.paperTitle}</span>`;
  //根据子观点id 得到附件
  if (IsNullOrEmpty(objvPaperSubViewpoint.sectionName) == false) {
    strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}<span style="color:${UserColor}">【论文节】${objvPaperSubViewpoint.sectionName}</span>`;
  }

  const arrPaperSubAttachments = await paperSubAttachmentStore.getObjLst(strSubViewpointId);
  if (arrPaperSubAttachments != null && arrPaperSubAttachments.length > 0) {
    for (let y = 0; y < arrPaperSubAttachments.length; y++) {
      const strAddressAndPortfull = GetAddressAndPort() + arrPaperSubAttachments[y].filePath;
      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" alt="" id="txtImgPath${arrPaperSubAttachments[y].paperSubAttachmentId}"/>`;
    }
  }

  if (objvPaperSubViewpoint.paperPageNum != 0) {
    strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="color3" >${clsIcon.faPlay}【pdf页码】第${objvPaperSubViewpoint.paperPageNum}页</a>`;
  }
  const strUserName = await vQxUsersSimStore.getUserName(objvPaperSubViewpoint.updUser);
  if (strUserName != '') {
    strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="color2">${clsIcon.faPlay}【编辑时间】${objvPaperSubViewpoint.updDate}【编辑用户】${strUserName}</span>`;
  }
  //最底一行编辑
  strhtml += '<br/><div style="float:right;">';

  strhtml += `&nbsp;&nbsp;<span style="color:royalblue" >评论数:${objvPaperSubViewpoint.appraiseCount}</span>`;

  if (objvPaperSubViewpoint.score != 0) {
    strhtml += `&nbsp;&nbsp;综合评分:${objvPaperSubViewpoint.score}`;
  }
  if (objvPaperSubViewpoint.teaScore != 0) {
    strhtml += `&nbsp;&nbsp;教师评分:${objvPaperSubViewpoint.teaScore}`;
  }
  if (objvPaperSubViewpoint.stuScore != 0) {
    strhtml += `&nbsp;&nbsp;学生评分:${objvPaperSubViewpoint.stuScore}`;
  }
  strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('论文读写子观点评论', '../GradEduTools/SysComment?Key=${strSubViewpointId}&Type=02&User=${objvPaperSubViewpoint.updUser}&pubParentId=${strPaperId}')"> ${clsIcon.faCommentDots}添加评论</button >`;

  strhtml += '</div>';
  return strhtml;
}

export async function vPaperSubViewpointEx_DetailShowList_vViewpointEx(
  strOperationType: string,
  strVType: string,
  arrvPaperSubViewpointExObjLst: Array<clsvPaperSubViewpointENEx>,
): Promise<string> {
  const strTopicId = clsPrivateSessionStorage.topicIdInTree;
  const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
  // const strCourseId = clsPubLocalStorage.courseId;

  const strUserId = userStore.getUserId;
  const strRoleId = userStore.getRoleId;
  //换行符
  const strBr =
    '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

  //观点关系
  let arrgs_TotalDataRelaObjLst: Array<clsgs_TotalDataRelaEN> = []; //
  let arrgs_TotalDataRelaObjLst0: Array<clsgs_TotalDataRelaEN> = []; //

  //主题用户关系列表

  // let objRTUserRela: clsRTUserRelaEN;
  let strRTUserId; // objRTUserRela.userId;
  //观点分类
  let arrgs_VpClassificationObjLst: Array<clsgs_VpClassificationEN> = [];

  let strhtml = '';
  let strTitle = '';

  let strVoteType = '';
  let strTypeId = '';
  //判断页面参数
  if (strVType == '01') {
    strTitle = '个人观点';
    strVoteType = '03';
    strTypeId = '04';
    strhtml += '<div class="info" id="infoViewpoint"><div class="title btn-3">';
  } else if (strVType == '02') {
    //专家观点
    //$("#ListTitle").html("当前论文相关的专家观点");
    strTitle = '专家观点';
    strVoteType = '04';
    strTypeId = '05';
    strhtml += '<div class="info" id="infoExpert"><div class="title btn-3">';
  }

  //关系查看需要点赞功能
  if (strOperationType == '01' || strOperationType == '07') {
    arrgs_TotalDataRelaObjLst0 = await gs_TotalDataRela_GetObjLstCache(strIdCurrEducls);
  }
  if (strOperationType == '06') {
    //主题用户关系
    const strTopicId = arrvPaperSubViewpointExObjLst[0].memo;
    const strWhereCond3 = `topicId ='${strTopicId}' and topicUserRoleId='0002'`;
    const objRTUserRela = await RTUserRela_GetFirstObjAsync(strWhereCond3);
    if (objRTUserRela != null) strRTUserId = objRTUserRela.userId;

    const strWhereCond = ` 1 = 1 and topicId='${strTopicId}' order by updDate Asc`;
    //获取观点分类

    arrgs_VpClassificationObjLst = await gs_VpClassification_GetObjLstAsync(strWhereCond);
  }

  if (strOperationType == '01') {
    strhtml += `<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加${strTitle}" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加${strTitle}</button></div>`;
  } else {
    strhtml += `<div style="float:left;"><a href="javascript:void(0)" title="${strTitle}">${strTitle}</a></div>`;
  }

  strhtml += '</div><ul class="artlist">';
  let intIndex = 0; //给内容加个序号
  for (let i = 0; i < arrvPaperSubViewpointExObjLst.length; i++) {
    const objvPaperSubViewpointEx = arrvPaperSubViewpointExObjLst[i];
    //得到viewpointId；
    const strSubViewpointId = objvPaperSubViewpointEx.subViewpointId;
    //各观点关系
    const strTotalDataId1 = `${strTypeId}00${strSubViewpointId}`;
    intIndex++;
    //对内容进行换行替换
    let strViewpointContent = objvPaperSubViewpointEx.subViewpointContent;
    let strReason = objvPaperSubViewpointEx.explainContent;
    if (IsNullOrEmpty(strViewpointContent) == false) {
      strViewpointContent = strViewpointContent.replace(/\r\n/g, strBr);
      strViewpointContent = strViewpointContent.replace(/\n/g, strBr);
    }
    if (IsNullOrEmpty(strReason) == false) {
      strReason = strReason.replace(/\r\n/g, strBr);
      strReason = strReason.replace(/\n/g, strBr);
    }
    if (strOperationType == '06') {
      const strClassificationName = await gs_VpClassificationRelaStore.getClassificationName(
        objvPaperSubViewpointEx.classificationId,
        strTopicId,
      );
      if (strClassificationName != '') {
        if (objvPaperSubViewpointEx.isRecommend == true) {
          strhtml += `<li><span class="rowtit color3">${intIndex}.[观点]：</span><span class="abstract-text">${objvPaperSubViewpointEx.subViewpointContent}</span>&nbsp;&nbsp;<span style="color:#17a2b8;">(${strClassificationName})(小组推荐观点)</span></li>`;
        } else {
          strhtml += `<li><span class="rowtit color3">${intIndex}.[观点]：</span><span class="abstract-text">${objvPaperSubViewpointEx.subViewpointContent}</span>&nbsp;&nbsp;<span style="color:#17a2b8;">(${strClassificationName})</span></li>`;
        }
      } else {
        if (objvPaperSubViewpointEx.isRecommend == true) {
          strhtml += `<li><span class="rowtit color3">${intIndex}.[观点]：</span><span class="abstract-text">${objvPaperSubViewpointEx.subViewpointContent}</span><span style="color:red;">(小组推荐观点)</span></li>`;
        } else {
          strhtml += `<li><span class="rowtit color3">${intIndex}.[观点]：</span><span class="abstract-text">${objvPaperSubViewpointEx.subViewpointContent}</span>&nbsp;&nbsp;<span style="color:red;">(未分类)</span></li>`;
        }
      }
    } else {
      if (objvPaperSubViewpointEx.isRecommend == true) {
        strhtml += `<li><span class="rowtit color3">${intIndex}.[观点]：</span><span class="abstract-text">${objvPaperSubViewpointEx.subViewpointContent}</span><span style="color:red;">(小组推荐观点)</span></li>`;
      } else {
        strhtml += `<li><span class="rowtit color3">${intIndex}.[观点]：</span><span class="abstract-text">${objvPaperSubViewpointEx.subViewpointContent}</span></li>`;
      }
    }

    //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[观点内容]：</span><span class="abstract-text">' + strViewpointContent + '</span></li>';
    strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${objvPaperSubViewpointEx.explainTypeName}]：</span><span class="abstract-text">${strReason}</span></li>`;

    //查询附件
    const arrPaperSubAttachments = await paperSubAttachmentStore.getObjLst(strSubViewpointId);
    if (arrPaperSubAttachments != null && arrPaperSubAttachments.length > 0) {
      for (let y = 0; y < arrPaperSubAttachments.length; y++) {
        const strAddressAndPortfull = GetAddressAndPort() + arrPaperSubAttachments[y].filePath;
        strhtml += `<li><div class="example"><img style="max-width:500px; margin-left: 10px; " src="${strAddressAndPortfull}"  alt="" data-action="zoom" /></div></li>`;
      }
    }

    strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[统计]：</span>';
    if (objvPaperSubViewpointEx.okCount != 0) {
      strhtml += `点赞数：${objvPaperSubViewpointEx.okCount}&nbsp;&nbsp`;
    }
    if (objvPaperSubViewpointEx.appraiseCount != 0) {
      //评论
      strhtml += `&nbsp;&nbsp;评论数：${objvPaperSubViewpointEx.appraiseCount}`;
    }
    if (objvPaperSubViewpointEx.score != 0) {
      //评分
      strhtml += `&nbsp;&nbsp;综合评分：${objvPaperSubViewpointEx.score}`;
    }
    if (objvPaperSubViewpointEx.teaScore != 0) {
      strhtml += `&nbsp;&nbsp;教师评分：${objvPaperSubViewpointEx.teaScore}`;
    }
    if (objvPaperSubViewpointEx.stuScore != 0) {
      strhtml += `&nbsp;&nbsp;学生评分：${objvPaperSubViewpointEx.stuScore}&nbsp;&nbsp;`;
    }
    //引用数
    strhtml += `被引用数：${objvPaperSubViewpointEx.citationCount}`;

    if (objvPaperSubViewpointEx.versionCount != 0) {
      strhtml += `&nbsp;&nbsp;&nbsp;历史版本数：${objvPaperSubViewpointEx.versionCount}`;
    }
    if (objvPaperSubViewpointEx.isSubmit == true) {
      strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已提交</span>';
    } else {
      strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">未提交</span>';
    }
    strhtml += '</li>';

    strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：</span>';
    if (strOperationType == '06' || strOperationType == '07') {
      const strUserName = await vQxUsersSimStore.getUserName(objvPaperSubViewpointEx.relaUpdUser);
      if (strUserName != '') {
        if (objvPaperSubViewpointEx.updUser == objvPaperSubViewpointEx.relaUpdUser) {
          strhtml += `<span class="rowtit color3">编辑引用人：</span>${strUserName}`;
        } else {
          const strUserNameRT = await vQxUsersSimStore.getUserName(objvPaperSubViewpointEx.updUser);
          if (strUserNameRT != '') {
            strhtml += `<span class="rowtit color3">编辑&nbsp;/&nbsp;引用人：</span>${strUserName}&nbsp;/&nbsp;${strUserNameRT}`;
          }
        }
      }

      if (objvPaperSubViewpointEx.updDate == objvPaperSubViewpointEx.relaUpdDate) {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑引用时间：</span>${clsDateTime.GetDate_Sim(
          objvPaperSubViewpointEx.updDate,
        )}`;
      } else {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑&nbsp;/&nbsp;引用时间：</span>${clsDateTime.GetDate_Sim(
          objvPaperSubViewpointEx.updDate,
        )}&nbsp;/&nbsp;${clsDateTime.GetDate_Sim(objvPaperSubViewpointEx.relaUpdDate)}`;
      }
      if (strOperationType == '06') {
        //加入到观点分类
        if (objvPaperSubViewpointEx.classificationId == 0) {
          // onclick="btnAddClassificationRecordInTab_Click(${objvPaperSubViewpointEx.topicId},${objvPaperSubViewpointEx.subViewpointId})"
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnAddClassificationRecordInTab" keyId="${objvPaperSubViewpointEx.subViewpointId}" style="float:right;" title="加入当前分类" class="layui-btn layui-btn layui-btn-xs"  > <i class="layui-icon" >&#xe61f;</i>加入分类</button>`;
        } else {
          // onclick=btnUpdateClassificationRecordInTab_Click(${objvPaperSubViewpointEx.topicId},${objvPaperSubViewpointEx.subViewpointId},"${objvPaperSubViewpointEx.classificationId}")
          const strKeyId = `${objvPaperSubViewpointEx.subViewpointId}|${objvPaperSubViewpointEx.classificationId}`;
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnUpdateClassificationRecordInTab" keyId="${strKeyId}" style="float:right;" title="调整当前分类" class="layui-btn layui-btn layui-btn-xs"  > ${clsIcon.faCommentDots}调整分类</button>`;
        }

        if (strUserId == objvPaperSubViewpointEx.updUser) {
          // onclick="btnDelViewPointRelaRecordInTab_Click(${objvPaperSubViewpointEx.topicId},${objvPaperSubViewpointEx.subViewpointId})"
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnDelViewPointRelaRecordInTab" keyId="${objvPaperSubViewpointEx.subViewpointId}" style="float:right;" title="移除引用" class="layui-btn-danger layui-btn layui-btn-xs"  > <i class="layui-icon" >&#xe640;</i>移除</button>`;
        }
        if (objvPaperSubViewpointEx.isSubmit != true) {
          // onclick=btnUpdViewPoint_Click("${strViewpointId}","${strVType}")
          const strKeyId = `${strSubViewpointId}|${objvPaperSubViewpointEx.paperId}`;
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnUpdViewPoint" keyId="${strKeyId}" style="float:right;" title="修改" class="layui-btn layui-btn layui-btn-xs"  > ${clsIcon.faCommentDots}修改</button>`;
        }

        //如果是小组长就可以对该篇观点可以推荐
        // const strRTUserId = objRTUserRela.userId;
        if (strRTUserId == strUserId) {
          if (objvPaperSubViewpointEx.isRecommend != true) {
            strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="小组推荐" class="layui-btn-danger layui-btn layui-btn-xs" onclick=btnRecommendViewPoint_Click("${strSubViewpointId}","${strVType}") > <i class="layui-icon" >&#xe604;</i>小组推荐</button>`;
          }
        }
      } else if (strOperationType == '07') {
        const objLike = sysVoteStore.getObj(strVoteType, strUserId, strSubViewpointId.toString()); //新0605
        strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;';
        if (objLike == null) {
          strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${strSubViewpointId}","${objvPaperSubViewpointEx.updUser}","${strVoteType}")><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞"></a>`;
        } else {
          strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${strSubViewpointId}","${objvPaperSubViewpointEx.updUser}","${strVoteType}")><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞"></a>`;
        }
        strhtml += `&nbsp;${objvPaperSubViewpointEx.okCount}&nbsp;&nbsp;`;
        //评论
        //strhtml += '&nbsp;&nbsp;<span  style="color:royalblue" >评论数:' + objvPaperSubViewpointEx.appraiseCount + '</span >';
        strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('${strTitle}评论', '../GradEduTools/SysComment?Key=${strSubViewpointId}&Type=${strVoteType}&User=${
          objvPaperSubViewpointEx.updUser
        }&pubParentId=${clsPrivateSessionStorage.topicIdInTree}&FontSize=${$(
          '#hidFontSize',
        ).val()}')"> ${clsIcon.faCommentDots}添加评论<span class="badge text-bg-info">${
          objvPaperSubViewpointEx.appraiseCount
        }</span></button >`;
      }
      if (
        objvPaperSubViewpointEx.versionCount > 0 &&
        objvPaperSubViewpointEx.versionCount != null
      ) {
        strhtml += `&nbsp;&nbsp;<button style="float: right;" class="layui-btn layui-btn-warm layui-btn-xs" onclick="xadmin.open('${strTitle}历史版本', '../GradEduEx/HistoricalVersion?Key=${strSubViewpointId}&Type=${strVoteType}')"> ${clsIcon.faCommentDots}历史版本</button >`;
      }
    } else {
      const strUserName = await vQxUsersSimStore.getUserName(objvPaperSubViewpointEx.updUser);
      if (strUserName != '') {
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑用户：</span>${strUserName}`;
      }

      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑时间：</span>${clsDateTime.GetDate_Sim(
        objvPaperSubViewpointEx.updDate,
      )}`;
    }
    if (strOperationType == '01') {
      //历史版本
      if (
        objvPaperSubViewpointEx.versionCount > 0 &&
        objvPaperSubViewpointEx.versionCount != null
      ) {
        strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs" onclick="xadmin.open('${strTitle}历史版本', '../GradEduEx/HistoricalVersion?Key=${strSubViewpointId}&Type=${strVoteType}')"> ${clsIcon.faCommentDots}历史版本</button >`;
      }
      if (strUserId == objvPaperSubViewpointEx.updUser) {
        //修改个人观点
        if (objvPaperSubViewpointEx.isSubmit != true) {
          strhtml += `&nbsp;&nbsp;<button title="修改" class="layui-btn layui-btn layui-btn-xs" onclick=btnUpdateRecordInTab_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}修改</button>`;
          //观点提交
          strhtml += `&nbsp;&nbsp;<button title="观点提交" class="layui-btn layui-btn layui-btn-xs" onclick=btnIsSubmit_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}观点提交</button>`;
          //删除个人观点
          strhtml += `&nbsp;&nbsp;<button title="删除" class="layui-btn layui-btn-danger layui-btn-xs" onclick=btnDelRecordInTab_Click("${strSubViewpointId}")> <i class="layui-icon" >&#xe640;</i>删除</button>`;
        }
      }
      if (strRoleId != '00620003') {
        //取消提交
        strhtml += `&nbsp;&nbsp;<button id="btnCancelSubmit" title="取消提交" class="layui-btn layui-btn layui-btn-xs" onclick=btnCancelSubmit_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}取消提交</button>`;
      }

      arrgs_TotalDataRelaObjLst = arrgs_TotalDataRelaObjLst0.filter(
        (x) => x.totalDataId1 == strTotalDataId1,
      ); //
      strhtml += `&nbsp;&nbsp;<button id="AddViewRela" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('建立观点关系', '../GradEduTools/gs_TotalDataRela?keyId=${strSubViewpointId}&TypeId=${strTypeId}&OperationType=1','','',true)"> ${clsIcon.faCommentDots}建立观点关系<span class="badge text-bg-info">${arrgs_TotalDataRelaObjLst.length}</span></button >`;
    } else if (strOperationType == '02') {
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button title="引用${strTitle}" class="layui-btn layui-btn layui-btn layui-btn-xs" onclick=btnOkInTab_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}引用该${strTitle}</button>`;
    } else if (strOperationType == '04') {
      // onclick=btnDelViewPointRelaRecordInTab_Click("${strViewpointId}","${strVType}")
      const strKeyId = `${strSubViewpointId}|${strVType}`;
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnDelViewPointRelaRecordInTab" keyId="${strKeyId}" style="float:right;" title="移除关系" class="layui-btn-danger layui-btn layui-btn-xs"  > <i class="layui-icon" >&#xe640;</i>移除</button>`;
    } else if (strOperationType == '05') {
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="建立关系" class="layui-btn layui-btn layui-btn-xs" onclick=btnAdd_ViewpointRela_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}建立关系</button>`;
    }

    strhtml += '</li>';

    //如果当前观点有引用论文，那么就显示论文标题和作者
    const varCitationId = objvPaperSubViewpointEx.paperId;
    if (varCitationId != '' && varCitationId != null) {
      const objPaper: clsPaperEN = await PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache(
        varCitationId,
        strIdCurrEducls,
      );
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[引用自]：</span>${objPaper.paperTitle}(作者：${objPaper.author})</li>`;
    }

    //主题查看——各观点关系查看
    if (strOperationType == '07') {
      arrgs_TotalDataRelaObjLst = arrgs_TotalDataRelaObjLst0.filter(
        (x) => x.totalDataId1 == strTotalDataId1,
      ); //

      if (arrgs_TotalDataRelaObjLst.length > 0) {
        strhtml += '<li>';

        strhtml += await gs_TotalDataRelaEx_BindList_gs_TotalDataRela(arrgs_TotalDataRelaObjLst);
        strhtml += `&nbsp;&nbsp;&nbsp;<button id="AddViewRela" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('相关观点查看', '../GradEduTools/gs_TotalDataRela?keyId=${strSubViewpointId}&TypeId=${strTypeId}&OperationType=2')"> ${clsIcon.faCommentDots}相关观点详细<span class="badge text-bg-info">${arrgs_TotalDataRelaObjLst.length}</span></button >`;
        strhtml += '</li>';
      }
    }

    strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
  }

  strhtml += '</ul></div>';

  return strhtml;
}

//绑定观点列表数据
export async function vPaperSubViewpointEx_DetailShowList_vTopicObjectiveEx(
  strOperationType: string,
  strVType: string,
  arrvTopicObjectiveExObjLst: Array<clsvPaperSubViewpointENEx>,
): Promise<string> {
  const strTopicId = clsPrivateSessionStorage.topicIdInTree;
  //换行符
  const strBr =
    '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
  //动态显示对应的数据
  const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
  // const strCourseId = clsPubLocalStorage.courseId;
  const strUserId = userStore.getUserId;
  const strRoleId = userStore.getRoleId;
  let strhtml = '';
  let strTitle = '';

  let strType = '';
  let strTypeId = '';
  //判断页面参数
  if (strVType == '01') {
    strTitle = '客观事实';
    strType = '06';
    strTypeId = '07';
    //客观事实
    strhtml += '<div class="info" id="infoFacts"><div class="title btn-3">';
  } else if (strVType == '02') {
    strTitle = '客观数据';
    strType = '07';
    strTypeId = '08';
    //个人观点
    strhtml += '<div class="info" id="infoBasis"><div class="title btn-3">';
  }

  //观点关系
  let arrgs_TotalDataRelaObjLst: Array<clsgs_TotalDataRelaEN> = []; //
  let arrgs_TotalDataRelaObjLst0: Array<clsgs_TotalDataRelaEN> = []; //

  //各观点实体
  // const arrvViewpointObjLst0: Array<clsvViewpointEN> = []; //

  // const arrvConceptObjLst0: Array<clsvConceptEN> = []; //

  // const arrvTopicObjectiveObjLst0: Array<clsvTopicObjectiveEN> = []; //

  // const arrvSysSkillObjLst0: Array<clsvSysSkillEN> = []; //

  // const arrvSysSocialRelationsObjLst0: Array<clsvSysSocialRelationsEN> = []; //

  //观点分类
  let arrgs_VpClassificationObjLst: Array<clsgs_VpClassificationEN> = [];
  // const strWhereCondLike = `1=1 and voteTypeId='${strType}' And ${clsSysVoteEN.con_UpdUser} = '${strUserId}'`; //新0605
  const strVoteType = strType; // '01';

  //关系查看需要点赞功能
  if (strOperationType == '01' || strOperationType == '07') {
    await gs_TotalDataRela_GetObjLstCache(clsPubLocalStorage.idCurrEduCls).then((jsonData) => {
      arrgs_TotalDataRelaObjLst0 = <Array<clsgs_TotalDataRelaEN>>jsonData;
    });

    if (strOperationType == '07') {
      //观点
      // arrvViewpointObjLst0 = await vViewpoint_GetObjLstCache(strIdCurrEducls);
      // //概念
      // arrvConceptObjLst0 = await vConcept_GetObjLstCache(strIdCurrEducls);
      // //客观
      // arrvTopicObjectiveObjLst0 = await vTopicObjective_GetObjLstCache(strIdCurrEducls);
      // //技能
      // arrvSysSkillObjLst0 = await vSysSkill_GetObjLstCache(strIdCurrEducls);
      // //社会关系
      // arrvSysSocialRelationsObjLst0 = await vSysSocialRelations_GetObjLstCache(strIdCurrEducls);
    }
  }

  if (strOperationType == '06') {
    //主题用户关系
    //主题用户关系

    const strWhereCond = ` 1 = 1 and topicId='${strTopicId}' order by updDate Asc`;
    //获取观点分类
    arrgs_VpClassificationObjLst = await gs_VpClassification_GetObjLstAsync(strWhereCond);
  }

  if (strOperationType == '01') {
    strhtml += `<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加${strTitle}" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加${strTitle}</button></div>`;
  } else {
    strhtml += `<div style="float:left;"><a href="javascript:void(0)" title="${strTitle}">${strTitle}</a></div>`;
  }

  strhtml += '</div><ul class="artlist">';
  let intIndex = 0; //给内容加个序号
  for (let i = 0; i < arrvTopicObjectiveExObjLst.length; i++) {
    const objvTopicObjectiveEx = arrvTopicObjectiveExObjLst[i];
    //得到topicObjectiveId；
    const strSubViewpointId = objvTopicObjectiveEx.subViewpointId;
    //
    const strTotalDataId1 = `${strTypeId}00${strSubViewpointId}`;
    intIndex++;
    //对内容进行换行替换
    let strObjectiveContent = objvTopicObjectiveEx.explainContent;
    let strConclusion = objvTopicObjectiveEx.conclusion;
    strObjectiveContent = strObjectiveContent.replace(/\r\n/g, strBr);
    strObjectiveContent = strObjectiveContent.replace(/\n/g, strBr);
    strConclusion = strConclusion.replace(/\r\n/g, strBr);
    strConclusion = strConclusion.replace(/\n/g, strBr);

    //strhtml += v + ".观点：" + objvTopicObjectiveEx.TopicObjectiveName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>" + "&nbsp;内容:" + objvTopicObjectiveEx.TopicObjectiveContent + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;" + objvTopicObjectiveEx.TopicObjectiveTypeName + ":" + objvTopicObjectiveEx.reason + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;所属主题：" + objvTopicObjectiveEx.topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%></br>";

    if (strOperationType == '06') {
      const strClassificationName = await gs_VpClassificationRelaStore.getClassificationName(
        Number(objvTopicObjectiveEx.memo),
        strTopicId,
      );

      if (strClassificationName != '') {
        strhtml += `<li><span class="rowtit color6">${intIndex}.[标题]：</span><span class="abstract-text">${objvTopicObjectiveEx.subViewpointContent}</span>&nbsp;&nbsp;<span style="color:#17a2b8;">(${strClassificationName})</span></li>`;
      } else {
        strhtml += `<li><span class="rowtit color6">${intIndex}.[标题]：</span><span class="abstract-text">${objvTopicObjectiveEx.subViewpointContent}</span>&nbsp;&nbsp;<span style="color:red;">(未分类)</span></li>`;
      }
    } else {
      strhtml += `<li><span class="rowtit color6">${intIndex}.[标题]：</span><span class="abstract-text">${objvTopicObjectiveEx.subViewpointContent}</span></li>`;
    }
    strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[内容]：</span><span class="abstract-text">${strObjectiveContent}</span></li>`;
    strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[推论]：</span><span class="abstract-text">${strConclusion}</span></li>`;
    //查询附件
    const arrPaperSubAttachments = await paperSubAttachmentStore.getObjLst(strSubViewpointId);
    if (arrPaperSubAttachments != null && arrPaperSubAttachments.length > 0) {
      for (let y = 0; y < arrPaperSubAttachments.length; y++) {
        const strAddressAndPortfull = GetAddressAndPort() + arrPaperSubAttachments[y].filePath;
        strhtml += `<li><div class="example"><img style="max-width:500px; margin-left: 10px; " src="${strAddressAndPortfull}"  alt="" data-action="zoom" /></div></li>`;
      }
    }

    strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[统计]：</span>';
    if (objvTopicObjectiveEx.okCount != 0) {
      strhtml += `点赞数：${objvTopicObjectiveEx.okCount}&nbsp;&nbsp`;
    }
    if (objvTopicObjectiveEx.appraiseCount != 0) {
      //评论
      strhtml += `&nbsp;&nbsp;评论数：${objvTopicObjectiveEx.appraiseCount}`;
    }
    if (objvTopicObjectiveEx.score != 0) {
      //评分
      strhtml += `&nbsp;&nbsp;综合评分：${objvTopicObjectiveEx.score}`;
    }
    if (objvTopicObjectiveEx.teaScore != 0) {
      strhtml += `&nbsp;&nbsp;教师评分：${objvTopicObjectiveEx.teaScore}`;
    }
    if (objvTopicObjectiveEx.stuScore != 0) {
      strhtml += `&nbsp;&nbsp;学生评分：${objvTopicObjectiveEx.stuScore}`;
    }
    //引用数
    strhtml += `&nbsp;&nbsp;&nbsp;被引用数：${objvTopicObjectiveEx.citationCount}`;

    if (objvTopicObjectiveEx.versionCount != 0) {
      strhtml += `&nbsp;&nbsp;&nbsp;历史版本数：${objvTopicObjectiveEx.versionCount}`;
    }
    if (objvTopicObjectiveEx.isSubmit == true) {
      strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已提交</span>';
    } else {
      strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">未提交</span>';
    }

    strhtml += '</li>';
    strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：</span>';

    if (strOperationType == '06' || strOperationType == '07') {
      //得到编辑人名字
      const strUserName = await vQxUsersSimStore.getUserName(objvTopicObjectiveEx.relaUpdUser);
      if (strUserName != '') {
        if (objvTopicObjectiveEx.updUser == objvTopicObjectiveEx.relaUpdUser) {
          strhtml += `<span class="rowtit color6">编辑引用人：</span>${strUserName}`;
        } else {
          //得到引用人名字
          const strUserNameRT = await vQxUsersSimStore.getUserName(objvTopicObjectiveEx.updUser);
          if (strUserNameRT != '') {
            strhtml += `<span class="rowtit color6">编辑&nbsp;/&nbsp;引用人：</span>${strUserName}&nbsp;/&nbsp;${strUserNameRT}`;
          }
        }
      }

      if (objvTopicObjectiveEx.updDate == objvTopicObjectiveEx.relaUpdDate) {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color6">编辑引用时间：</span>${clsDateTime.GetDate_Sim(
          objvTopicObjectiveEx.updDate,
        )}`;
      } else {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color6">编辑&nbsp;/&nbsp;引用时间：</span>${clsDateTime.GetDate_Sim(
          objvTopicObjectiveEx.updDate,
        )}&nbsp;/&nbsp;${clsDateTime.GetDate_Sim(objvTopicObjectiveEx.relaUpdDate)}`;
      }

      if (strOperationType == '06') {
        //加入到观点分类
        if (objvTopicObjectiveEx.memo == '0000000000') {
          // onclick="btnAddClassificationRecordInTab_Click(${objvTopicObjectiveEx.subViewpointId})"
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnAddClassificationRecordInTab" keyId="${objvTopicObjectiveEx.subViewpointId}" style="float:right;" title="加入当前分类" class="layui-btn layui-btn layui-btn-xs"  > <i class="layui-icon" >&#xe61f;</i>加入分类</button>`;
        } else {
          // onclick=btnUpdateClassificationRecordInTab_Click(${objvTopicObjectiveEx.topicId},${objvTopicObjectiveEx.subViewpointId},"${objvTopicObjectiveEx.memo}")
          const strKeyId = `${objvTopicObjectiveEx.subViewpointId}|${objvTopicObjectiveEx.memo}`;
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnUpdateClassificationRecordInTab" keyId="${strKeyId}" style="float:right;" title="调整当前分类" class="layui-btn layui-btn layui-btn-xs"  > ${clsIcon.faCommentDots}调整分类</button>`;
        }

        if (strUserId == objvTopicObjectiveEx.updUser) {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="移除引用" class="layui-btn-danger layui-btn layui-btn layui-btn-xs" onclick="btnDelObjectiveRecordInTab_Click(${objvTopicObjectiveEx.subViewpointId})" > <i class="layui-icon" >&#xe640;</i>移除引用</button>`;
        }
        if (objvTopicObjectiveEx.isSubmit != true) {
          // onclick=btnUpdObjective_Click("${strTopicObjectiveId}")
          const strKeyId = `${strSubViewpointId}|${objvTopicObjectiveEx.paperId}`;
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnUpdObjective" keyId=${strKeyId} style="float:right;" title="修改" class="layui-btn layui-btn layui-btn layui-btn-xs"  > ${clsIcon.faCommentDots}修改</button>`;
        }
      } else if (strOperationType == '07') {
        const objLike = sysVoteStore.getObj(strVoteType, strUserId, strSubViewpointId.toString()); //新0605
        strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;';
        if (objLike == null) {
          strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${strSubViewpointId}","${objvTopicObjectiveEx.updUser}","${strType}")><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞"></a>`;
        } else {
          strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${strSubViewpointId}","${objvTopicObjectiveEx.updUser}","${strType}")><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞"></a>`;
        }
        strhtml += `&nbsp;${objvTopicObjectiveEx.okCount}&nbsp;&nbsp;`;
        //评论
        //strhtml += '&nbsp;&nbsp;<span  style="color:royalblue" >评论数:' + objvTopicObjectiveEx.appraiseCount + '</span >';
        strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('${strTitle}评论', '../GradEduTools/SysComment?Key=${strSubViewpointId}&Type=${strType}&User=${
          objvTopicObjectiveEx.updUser
        }&pubParentId=${clsPrivateSessionStorage.topicIdInTree}&FontSize=${$(
          '#hidFontSize',
        ).val()}')"> ${clsIcon.faCommentDots}添加评论<span class="badge text-bg-info">${
          objvTopicObjectiveEx.appraiseCount
        }</span></button >`;
      }
      if (objvTopicObjectiveEx.versionCount > 0 && objvTopicObjectiveEx.versionCount != null) {
        strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('${strTitle}历史版本', '../GradEduEx/HistoricalVersion?Key=${strSubViewpointId}&Type=${strType}')"> ${clsIcon.faCommentDots}历史版本</button >`;
      }
    } else {
      const strUserName = await vQxUsersSimStore.getUserName(objvTopicObjectiveEx.updUser);
      if (strUserName != '') {
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color6">编辑用户：</span>${strUserName}`;
      }

      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color6">编辑时间：</span>${clsDateTime.GetDate_Sim(
        objvTopicObjectiveEx.updDate,
      )}`;
    }
    if (strOperationType == '01') {
      //历史版本
      if (objvTopicObjectiveEx.versionCount > 0 && objvTopicObjectiveEx.versionCount != null) {
        strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs" onclick="xadmin.open('${strTitle}历史版本', '../GradEduEx/HistoricalVersion?Key=${strSubViewpointId}&Type=${strType}')"> ${clsIcon.faCommentDots}历史版本</button >`;
      }
      if (strUserId == objvTopicObjectiveEx.updUser) {
        //修改个人观点
        if (objvTopicObjectiveEx.isSubmit != true) {
          strhtml += `&nbsp;&nbsp;<button title="修改" class="layui-btn layui-btn layui-btn-xs" onclick=btnUpdateRecordInTab_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}修改</button>`;
          //观点提交
          strhtml += `&nbsp;&nbsp;<button title="提交" class="layui-btn layui-btn layui-btn-xs" onclick=btnIsSubmit_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}提交</button>`;
          //删除个人观点
          strhtml += `&nbsp;&nbsp;<button title="删除" class="layui-btn layui-btn-danger layui-btn-xs" onclick=btnDelRecordInTab_Click("${strSubViewpointId}")> <i class="layui-icon" >&#xe640;</i>删除</button>`;
        }
      }
      if (strRoleId != '00620003') {
        //取消提交
        strhtml += `&nbsp;&nbsp;<button id="btnCancelSubmit" title="取消提交" class="layui-btn layui-btn layui-btn-xs" onclick=btnCancelSubmit_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}取消提交</button>`;
      }
      //建立观点关系

      arrgs_TotalDataRelaObjLst = arrgs_TotalDataRelaObjLst0.filter(
        (x) => x.totalDataId1 == strTotalDataId1,
      ); //
      strhtml += `&nbsp;&nbsp;<button id="AddViewRela" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('建立观点关系', '../GradEduTools/gs_TotalDataRela?keyId=${strSubViewpointId}&TypeId=${strTypeId}&OperationType=1','','',true)"> ${clsIcon.faCommentDots}建立观点关系<span class="badge text-bg-info">${arrgs_TotalDataRelaObjLst.length}</span></button >`;
    } else if (strOperationType == '02') {
      strhtml += `&nbsp;&nbsp;<button title="引用该${strTitle}" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkObjectiveInTab_Click("${strSubViewpointId}") > ${clsIcon.faCommentDots}引用该${strTitle}</button>`;
    } else if (strOperationType == '04') {
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="移除关系" class="layui-btn-danger layui-btn layui-btn-xs" onclick=btnDelObjectiveRecordInTab_Click("${strSubViewpointId}","${strVType}") > <i class="layui-icon" >&#xe640;</i>移除</button>`;
    } else if (strOperationType == '05') {
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="建立关系" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkObjectiveInTab_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}建立关系</button>`;
    }
    strhtml += '</li>';

    //如果当前观点有引用论文，那么就显示论文标题和作者
    const varCitationId = objvTopicObjectiveEx.paperId;
    if (varCitationId != '' && varCitationId != null) {
      const objPaper: clsPaperEN = await PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache(
        varCitationId,
        strIdCurrEducls,
      );
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[引用自]：</span>${objPaper.paperTitle}(作者：${objPaper.author})</li>`;
    }

    //主题查看——各观点关系查看
    if (strOperationType == '07') {
      arrgs_TotalDataRelaObjLst = arrgs_TotalDataRelaObjLst0.filter(
        (x) => x.totalDataId1 == strTotalDataId1,
      ); //
      if (arrgs_TotalDataRelaObjLst.length > 0) {
        strhtml += '<li>';

        strhtml += await gs_TotalDataRelaEx_BindList_gs_TotalDataRela(arrgs_TotalDataRelaObjLst);
        strhtml += `&nbsp;&nbsp;&nbsp;<button id="AddViewRela" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('关联观点查看', '../GradEduTools/gs_TotalDataRela?keyId=${strSubViewpointId}&TypeId=${strTypeId}&OperationType=2')"> ${clsIcon.faCommentDots}相关观点详细<span class="badge text-bg-info">${arrgs_TotalDataRelaObjLst.length}</span></button >`;
        strhtml += '</li>';
      }
    }

    strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
  }
  strhtml += '</ul></div>';

  return strhtml;
}

//绑定观点列表数据
export async function vPaperSubViewpointEx_DetailShowList_vSysSocialRelationsEx(
  strOperationType: string,
  arrvPaperSubViewpointExObjLst: Array<clsvPaperSubViewpointENEx>,
): Promise<string> {
  //获取用户缓存数据

  let strhtml = '';

  //观点关系
  let arrgs_TotalDataRelaObjLst: Array<clsgs_TotalDataRelaEN> = []; //
  let arrgs_TotalDataRelaObjLst0: Array<clsgs_TotalDataRelaEN> = []; //

  //获取观点图片
  // //观点分类
  let arrgs_VpClassificationObjLst: Array<clsgs_VpClassificationEN> = [];
  // const strWhereCondLike = `1=1 and voteTypeId='10' And ${clsSysVoteEN.con_UpdUser} = '${strUserId}'`; //新0605
  const strVoteType = '10';

  //关系查看需要点赞功能
  if (strOperationType == '01' || strOperationType == '07') {
    //strWhereCondRela = "1=1 and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
    arrgs_TotalDataRelaObjLst0 = await gs_TotalDataRela_GetObjLstCache(
      clsPubLocalStorage.idCurrEduCls,
    );

    if (strOperationType == '07') {
      //观点
    }
  }

  if (strOperationType == '06') {
    //主题用户关系
    //主题用户关系
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strWhereCond = ` 1 = 1 and topicId='${strTopicId}' order by updDate Asc`;
    //获取观点分类
    arrgs_VpClassificationObjLst = await gs_VpClassification_GetObjLstAsync(strWhereCond);
  }

  strhtml += '<div class="info" id="infoSysSocialRelations"><div class="title btn-3">';

  if (strOperationType == '01') {
    strhtml +=
      '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加社会关系" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加社会关系</button></div>';
  } else {
    strhtml +=
      '<div style="float:left;"><a href="javascript:void(0)" title="社会关系">社会关系</a></div>';
  }
  strhtml += '</div><ul class="artlist">';
  let intIndex = 0; //给内容加个序号
  for (let i = 0; i < arrvPaperSubViewpointExObjLst.length; i++) {
    const objvSysSocialRelationsEx = arrvPaperSubViewpointExObjLst[i];
    intIndex++;
    const strDetailShow = await vPaperSubViewpointEx_DetailShow_vSysSocialRelationsEx(
      strOperationType,
      objvSysSocialRelationsEx,
      arrgs_TotalDataRelaObjLst0,
      intIndex,
      strVoteType,
    );
    strhtml += strDetailShow;
  }
  strhtml += '</ul></div>';

  return strhtml;
}

//绑定观点列表数据
export async function vPaperSubViewpointEx_DetailShow_vSysSocialRelationsEx(
  strOperationType: string,
  objvSysSocialRelationsEx: clsvPaperSubViewpointENEx,
  arrgs_TotalDataRelaObjLst0: Array<clsgs_TotalDataRelaEN>,
  intIndex: number,
  strVoteType: string,
): Promise<string> {
  const strTopicId = clsPrivateSessionStorage.topicIdInTree;
  let strhtml = '';
  //换行符
  const strBr =
    '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
  const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
  // const strCourseId = clsPubLocalStorage.courseId;
  const strUserId = userStore.getUserId;
  const strRoleId = userStore.getRoleId;
  //得到conceptId；
  const strSubViewpointId = objvSysSocialRelationsEx.subViewpointId;
  const strTotalDataId1 = `10${strSubViewpointId}`;

  let strDetailedDescription = objvSysSocialRelationsEx.explainContent;
  if (strDetailedDescription != null) {
    strDetailedDescription = strDetailedDescription.replace(/\r\n/g, strBr);
    strDetailedDescription = strDetailedDescription.replace(/\n/g, strBr);
  }
  if (strOperationType == '06') {
    const strClassificationName = await gs_VpClassificationRelaStore.getClassificationName(
      Number(objvSysSocialRelationsEx.memo),
      strTopicId,
    );
    if (strClassificationName != '') {
      strhtml += `<li><span class="rowtit color6">${intIndex}.[姓名]：</span><span class="abstract-text">${objvSysSocialRelationsEx.subViewpointContent}</span>&nbsp;&nbsp;<span style="color:#17a2b8;">(${strClassificationName})</span></li>`;
    } else {
      strhtml += `<li><span class="rowtit color6">${intIndex}.[姓名]：</span><span class="abstract-text">${objvSysSocialRelationsEx.subViewpointContent}</span>&nbsp;&nbsp;<span style="color:red;">(未分类)</span></li>`;
    }
  } else {
    strhtml += `<li><span class="rowtit color6">${intIndex}.[姓名]：</span><span class="abstract-text">${objvSysSocialRelationsEx.subViewpointContent}</span></li>`;
  }

  strhtml += `<li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[国籍]：</span><span class="abstract-text">${objvSysSocialRelationsEx.nationality}</span>`;
  strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[工作单位]：</span><span class="abstract-text">${objvSysSocialRelationsEx.workUnit}</span>`;
  strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[专业]：</span><span class="abstract-text">${objvSysSocialRelationsEx.major}</span></li>`;

  strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[成就]：</span><span class="abstract-text">${objvSysSocialRelationsEx.achievement}</span></li>`;
  strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[详细说明]：</span><span class="abstract-text">${
    strDetailedDescription ?? ''
  }</span></li>`;
  //查询附件
  const arrPaperSubAttachments = await paperSubAttachmentStore.getObjLst(strSubViewpointId);
  if (arrPaperSubAttachments != null && arrPaperSubAttachments.length > 0) {
    for (let y = 0; y < arrPaperSubAttachments.length; y++) {
      const strAddressAndPortfull = GetAddressAndPort() + arrPaperSubAttachments[y].filePath;
      strhtml += `<li><div class="example"><img style="max-width:500px; margin-left: 10px; " src="${strAddressAndPortfull}"  alt="" data-action="zoom" /></div></li>`;
    }
  }
  strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[统计]：';
  if (objvSysSocialRelationsEx.okCount != 0) {
    strhtml += `点赞数：${objvSysSocialRelationsEx.okCount}&nbsp;&nbsp`;
  }
  if (objvSysSocialRelationsEx.appraiseCount != 0) {
    //评论
    strhtml += `&nbsp;&nbsp;评论数：${objvSysSocialRelationsEx.appraiseCount}`;
  }
  if (objvSysSocialRelationsEx.score != 0) {
    //评分
    strhtml += `&nbsp;&nbsp;综合评分：${objvSysSocialRelationsEx.score}`;
  }
  if (objvSysSocialRelationsEx.teaScore != 0) {
    strhtml += `&nbsp;&nbsp;教师评分：${objvSysSocialRelationsEx.teaScore}`;
  }
  if (objvSysSocialRelationsEx.stuScore != 0) {
    strhtml += `&nbsp;&nbsp;学生评分：${objvSysSocialRelationsEx.stuScore}`;
  }
  //引用数
  strhtml += `&nbsp;&nbsp;&nbsp;被引用数：${objvSysSocialRelationsEx.citationCount}`;

  if (objvSysSocialRelationsEx.versionCount != 0) {
    strhtml += `&nbsp;&nbsp;&nbsp;历史版本数：${objvSysSocialRelationsEx.versionCount}`;
  }
  if (objvSysSocialRelationsEx.isSubmit == true) {
    strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已提交</span>';
  } else {
    strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">未提交</span>';
  }

  strhtml += '</li>';
  strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：</span>';

  const strUserName = await vQxUsersSimStore.getUserName(objvSysSocialRelationsEx.updUser);
  const strRelaUserName = await vQxUsersSimStore.getUserName(objvSysSocialRelationsEx.relaUpdUser);

  if (strOperationType == '06' || strOperationType == '07') {
    if (strUserName != '' && strRelaUserName != '') {
      if (objvSysSocialRelationsEx.updUser == objvSysSocialRelationsEx.relaUpdUser) {
        strhtml += `<span class="rowtit color3">编辑引用人：</span>${strUserName}`;
      } else {
        strhtml += `<span class="rowtit color3">编辑&nbsp;/&nbsp;引用人：</span>${strUserName}&nbsp;/&nbsp;${strRelaUserName}`;
      }
    }
    if (objvSysSocialRelationsEx.updDate == objvSysSocialRelationsEx.relaUpdDate) {
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑引用时间：</span>${clsDateTime.GetDate_Sim(
        objvSysSocialRelationsEx.updDate,
      )}`;
    } else {
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑&nbsp;/&nbsp;引用时间：</span>${clsDateTime.GetDate_Sim(
        objvSysSocialRelationsEx.updDate,
      )}&nbsp;/&nbsp;${clsDateTime.GetDate_Sim(objvSysSocialRelationsEx.relaUpdDate)}`;
    }

    if (strOperationType == '06') {
      //加入到观点分类
      if (objvSysSocialRelationsEx.memo == '0000000000') {
        // onclick="btnAddClassificationRecordInTab_Click(${objvSysSocialRelationsEx.mId})"
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnAddClassificationRecordInTab" keyId="${objvSysSocialRelationsEx.subViewpointId}" style="float:right;" title="加入当前分类" class="layui-btn layui-btn layui-btn-xs"  > <i class="layui-icon" >&#xe61f;</i>加入分类</button>`;
      } else {
        // onclick=btnUpdateClassificationRecordInTab_Click(${objvSysSocialRelationsEx.mId},"${objvSysSocialRelationsEx.memo}")
        const strKeyId = `${objvSysSocialRelationsEx.subViewpointId}|${objvSysSocialRelationsEx.memo}`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnUpdateClassificationRecordInTab" keyId="${strKeyId}" style="float:right;" title="调整当前分类" class="layui-btn layui-btn layui-btn-xs"  > ${clsIcon.faCommentDots}调整分类</button>`;
      }

      if (strUserId == objvSysSocialRelationsEx.updUser) {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="移除引用" class="layui-btn-danger layui-btn layui-btn layui-btn-xs" onclick="btnDelRTSysSocialRelaRecordInTab_Click(${objvSysSocialRelationsEx.subViewpointId})" > <i class="layui-icon" >&#xe640;</i>移除</button>`;
      }
      if (objvSysSocialRelationsEx.isSubmit != true) {
        // onclick=btnUpdSyssocial_Click("${objvSysSocialRelationsEx.subViewpointId}")
        const strKeyId = `${objvSysSocialRelationsEx.subViewpointId}|${objvSysSocialRelationsEx.paperId}`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnUpdSyssocial" keyId="${strKeyId}" style="float:right;" title="修改" class="layui-btn layui-btn layui-btn layui-btn-xs"  > ${clsIcon.faCommentDots}修改</button>`;
      }
    } else if (strOperationType == '07') {
      const objLike = sysVoteStore.getObj(strVoteType, strUserId, strSubViewpointId.toString()); //新0605
      strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;';
      if (objLike == null) {
        strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${strSubViewpointId}","${objvSysSocialRelationsEx.updUser}","10")><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞"></a>`;
      } else {
        strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${strSubViewpointId}","${objvSysSocialRelationsEx.updUser}","10")><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞"></a>`;
      }
      strhtml += `&nbsp;${objvSysSocialRelationsEx.okCount}&nbsp;&nbsp;`;
      //评论
      //strhtml += '&nbsp;&nbsp;<span  style="color:royalblue" >评论数:' + objvSysSocialRelationsEx.appraiseCount + '</span >';
      strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('社会关系评论', '../GradEduTools/SysComment?Key=${strSubViewpointId}&Type=10&User=${
        objvSysSocialRelationsEx.updUser
      }&pubParentId=${clsPrivateSessionStorage.topicIdInTree}&FontSize=${$(
        '#hidFontSize',
      ).val()}')"> ${clsIcon.faCommentDots}添加评论<span class="badge text-bg-info">${
        objvSysSocialRelationsEx.appraiseCount
      }</span></button >`;
      //建立观点关系
    }
    if (
      objvSysSocialRelationsEx.versionCount > 0 &&
      objvSysSocialRelationsEx.versionCount != null
    ) {
      strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('历史版本', '../GradEduEx/HistoricalVersion?Key=${objvSysSocialRelationsEx.subViewpointId}&Type=09')"> ${clsIcon.faCommentDots}历史版本</button >`;
    }
  } else {
    if (strUserName != '') {
      strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑用户：</span>${strUserName}`;
    }
    strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑时间：</span>${clsDateTime.GetDate_Sim(
      objvSysSocialRelationsEx.updDate,
    )}`;
  }
  if (strOperationType == '01') {
    //历史版本
    if (
      objvSysSocialRelationsEx.versionCount > 0 &&
      objvSysSocialRelationsEx.versionCount != null
    ) {
      strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs" onclick="xadmin.open('历史版本', '../GradEduEx/HistoricalVersion?Key=${strSubViewpointId}&Type=09')"> ${clsIcon.faCommentDots}历史版本</button >`;
    }
    if (strUserId == objvSysSocialRelationsEx.updUser) {
      if (objvSysSocialRelationsEx.isSubmit != true) {
        //修改个人观点
        strhtml += `&nbsp;&nbsp;<button title="修改" class="layui-btn layui-btn layui-btn-xs" onclick=btnUpdateRecordInTab_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}修改</button>`;
        //删除个人观点
        strhtml += `&nbsp;&nbsp;<button title="删除" class="layui-btn layui-btn-danger layui-btn-xs" onclick=btnDelRecordInTab_Click("${strSubViewpointId}")> <i class="layui-icon" >&#xe640;</i>删除</button>`;
        //观点提交
        strhtml += `&nbsp;&nbsp;<button title="提交" class="layui-btn layui-btn layui-btn-xs" onclick=btnIsSubmit_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}提交</button>`;
      }
    }
    if (strRoleId != '00620003') {
      //取消提交
      strhtml += `&nbsp;&nbsp;<button id="btnCancelSubmit" title="取消提交" class="layui-btn layui-btn layui-btn-xs" onclick=btnCancelSubmit_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}取消提交</button>`;
    }
    //建立观点关系

    const arrgs_TotalDataRelaObjLst = arrgs_TotalDataRelaObjLst0.filter(
      (x) => x.totalDataId1 == strTotalDataId1,
    ); //
    strhtml += `&nbsp;&nbsp;<button id="AddViewRela" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('建立观点关系', '../GradEduTools/gs_TotalDataRela?keyId=${strSubViewpointId}&TypeId=10&OperationType=1','','',true)"> ${clsIcon.faCommentDots}建立观点关系<span class="badge text-bg-info">${arrgs_TotalDataRelaObjLst.length}</span></button >`;
  } else if (strOperationType == '02') {
    strhtml += `&nbsp;&nbsp;<button title="引用社会关系" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkRTSysSocialRelaInTab_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}引用该社会关系</button>`;
  } else if (strOperationType == '04') {
    strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="移除关系" class="layui-btn-danger layui-btn layui-btn-xs" onclick=btnDelgs_PSocialRelaRecordInTab_Click("${strSubViewpointId}") > <i class="layui-icon" >&#xe640;</i>移除</button>`;
  } else if (strOperationType == '05') {
    strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button title="建立关系" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkgs_PSocialRelaInTab_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}建立关系</button>`;
  }

  strhtml += '</li>';

  //如果当前观点有引用论文，那么就显示论文标题和作者
  const varCitationId = objvSysSocialRelationsEx.paperId;
  if (varCitationId != '' && varCitationId != null) {
    const objPaper: clsPaperEN = await PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache(
      varCitationId,
      strIdCurrEducls,
    );
    strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[引用自]：</span>${objPaper.paperTitle}(作者：${objPaper.author})</li>`;
  }

  //主题查看——各观点关系查看
  if (strOperationType == '07') {
    const arrgs_TotalDataRelaObjLst = arrgs_TotalDataRelaObjLst0.filter(
      (x) => x.totalDataId1 == strTotalDataId1,
    ); //
    if (arrgs_TotalDataRelaObjLst.length > 0) {
      strhtml += '<li>';
      strhtml += await gs_TotalDataRelaEx_BindList_gs_TotalDataRela(arrgs_TotalDataRelaObjLst);
      strhtml += `&nbsp;&nbsp;&nbsp;<button id="AddViewRela" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('关联观点查看', '../GradEduTools/gs_TotalDataRela?keyId=${strSubViewpointId}&TypeId=10&OperationType=2')"> ${clsIcon.faCommentDots}相关观点详细<span class="badge text-bg-info">${arrgs_TotalDataRelaObjLst.length}</span></button >`;
      strhtml += '</li>';
    }
  }

  strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
  return strhtml;
}

//绑定观点列表数据
export async function vPaperSubViewpointEx_DetailShowList_vSysSkillEx(
  strOperationType: string,
  arrvSysSkillExObjLst: Array<clsvPaperSubViewpointENEx>,
): Promise<string> {
  const strTopicId = clsPrivateSessionStorage.topicIdInTree;
  let strhtml = '';
  //换行符
  const strBr =
    '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
  const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
  // const strCourseId = clsPubLocalStorage.courseId;
  const strUserId = userStore.getUserId;
  const strRoleId = userStore.getRoleId;

  //观点关系
  let arrgs_TotalDataRelaObjLst: Array<clsgs_TotalDataRelaEN> = []; //
  let arrgs_TotalDataRelaObjLst0: Array<clsgs_TotalDataRelaEN> = []; //

  //各观点实体
  // let arrvViewpointObjLst0: Array<clsvViewpointEN> = []; //
  // const arrvViewpointObjLst: Array<clsvViewpointEN> = []; //

  // let arrvConceptObjLst0: Array<clsvConceptEN> = []; //
  // const arrvConceptObjLst: Array<clsvConceptEN> = []; //

  // let arrvTopicObjectiveObjLst0: Array<clsvTopicObjectiveEN> = []; //
  // const arrvTopicObjectiveObjLst: Array<clsvTopicObjectiveEN> = []; //

  // let arrvSysSkillObjLst0: Array<clsvSysSkillEN> = []; //
  // const arrvSysSkillObjLst: Array<clsvSysSkillEN> = []; //

  // let arrvSysSocialRelationsObjLst0: Array<clsvSysSocialRelationsEN> = []; //
  // const arrvSysSocialRelationsObjLst: Array<clsvSysSocialRelationsEN> = []; //

  //观点分类
  let arrgs_VpClassificationObjLst: Array<clsgs_VpClassificationEN> = [];
  //获取观点图片
  // const strWhereCondLike = `1=1 and voteTypeId='09' And ${clsSysVoteEN.con_UpdUser} = '${strUserId}'`; //新0605
  const strVoteType = '09';

  //关系查看需要点赞功能
  if (strOperationType == '01' || strOperationType == '07') {
    arrgs_TotalDataRelaObjLst0 = await gs_TotalDataRela_GetObjLstCache(
      clsPubLocalStorage.idCurrEduCls,
    );

    if (strOperationType == '07') {
      // //观点
      // arrvViewpointObjLst0 = await vViewpoint_GetObjLstCache(strIdCurrEducls);
      // //概念
      // arrvConceptObjLst0 = await vConcept_GetObjLstCache(strIdCurrEducls);
      // //客观
      // arrvTopicObjectiveObjLst0 = await vTopicObjective_GetObjLstCache(strIdCurrEducls);
      // //技能
      // arrvSysSkillObjLst0 = await vSysSkill_GetObjLstCache(strIdCurrEducls);
      // //社会关系
      // arrvSysSocialRelationsObjLst0 = await vSysSocialRelations_GetObjLstCache(strIdCurrEducls);
    }
  }

  if (strOperationType == '06') {
    //主题用户关系
    //主题用户关系

    const strWhereCond = ` 1 = 1 and topicId='${strTopicId}' order by updDate Asc`;
    //获取观点分类
    arrgs_VpClassificationObjLst = await gs_VpClassification_GetObjLstAsync(strWhereCond);
  }

  strhtml += '<div class="info" id="infoSysskill"><div class="title btn-3">';
  if (strOperationType == '01') {
    strhtml +=
      '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加技能" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加技能</button></div>';
  } else {
    strhtml += '<div style="float:left;"><a href="javascript:void(0)" title="技能">技能</a></div>';
  }

  strhtml += '</div><ul class="artlist">';
  // let intIndex = 0; //给内容加个序号
  for (let i = 0; i < arrvSysSkillExObjLst.length; i++) {
    const objvSysSkillEx = arrvSysSkillExObjLst[i];
    //得到skillId；
    const strSubViewpointId = objvSysSkillEx.subViewpointId;
    //各观点关系
    const strTotalDataId1 = `09${strSubViewpointId}`;
    // intIndex++;
    let strProcess = objvSysSkillEx.explainContent;
    if (IsNullOrEmpty(strProcess) == false) {
      strProcess = strProcess.replace(/\r\n/g, strBr);
      strProcess = strProcess.replace(/\n/g, strBr);
    }
    if (strOperationType == '06') {
      const strClassificationName = await gs_VpClassificationRelaStore.getClassificationName(
        Number(objvSysSkillEx.memo),
        strTopicId,
      );

      if (strClassificationName != '') {
        strhtml += `<li><span class="rowtit color6">[技能]：</span><span class="abstract-text">${objvSysSkillEx.subViewpointContent}</span>&nbsp;&nbsp;<span style="color:#17a2b8;">(${strClassificationName})</span></li>`;
      } else {
        strhtml += `<li><span class="rowtit color6">[技能]：</span><span class="abstract-text">${objvSysSkillEx.subViewpointContent}</span>&nbsp;&nbsp;<span style="color:red;">(未分类)</span></li>`;
      }
    } else {
      strhtml += `<li><span class="rowtit color6">[技能]：</span><span class="abstract-text">${objvSysSkillEx.subViewpointContent}</span></li>`;
    }

    strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[类型]：</span><span class="abstract-text">${objvSysSkillEx.operationTypeName}</span>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[保密等级]：</span><span class="abstract-text">${objvSysSkillEx.levelName}</span></li>`;
    strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[实施过程]：</span><span class="abstract-text">${strProcess}</span></li>`;

    //查询附件
    const arrPaperSubAttachments = await paperSubAttachmentStore.getObjLst(strSubViewpointId);
    if (arrPaperSubAttachments != null && arrPaperSubAttachments.length > 0) {
      for (let y = 0; y < arrPaperSubAttachments.length; y++) {
        const strAddressAndPortfull = GetAddressAndPort() + arrPaperSubAttachments[y].filePath;
        strhtml += `<li><div class="example"><img style="max-width:500px; margin-left: 10px; " src="${strAddressAndPortfull}"  alt="" data-action="zoom" /></div></li>`;
      }
    }

    strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[统计]：';
    if (objvSysSkillEx.okCount != 0) {
      strhtml += `点赞数：${objvSysSkillEx.okCount}&nbsp;&nbsp`;
    }
    if (objvSysSkillEx.appraiseCount != 0) {
      //评论
      strhtml += `&nbsp;&nbsp;评论数：${objvSysSkillEx.appraiseCount}`;
    }
    if (objvSysSkillEx.score != 0) {
      //评分
      strhtml += `&nbsp;&nbsp;综合评分：${objvSysSkillEx.score}`;
    }
    if (objvSysSkillEx.teaScore != 0) {
      strhtml += `&nbsp;&nbsp;教师评分：${objvSysSkillEx.teaScore}`;
    }
    if (objvSysSkillEx.stuScore != 0) {
      strhtml += `&nbsp;&nbsp;学生评分：${objvSysSkillEx.stuScore}`;
    }
    //引用数
    strhtml += `&nbsp;&nbsp;&nbsp;被引用数：${objvSysSkillEx.citationCount}`;

    if (objvSysSkillEx.versionCount != 0) {
      strhtml += `&nbsp;&nbsp;&nbsp;历史版本数：${objvSysSkillEx.versionCount}`;
    }
    if (objvSysSkillEx.isSubmit == true) {
      strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已提交</span>';
    } else {
      strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">未提交</span>';
    }

    strhtml += '</li>';
    strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：</span>';
    const strUserName = await vQxUsersSimStore.getUserName(objvSysSkillEx.updUser);
    const strRelaUserName = await vQxUsersSimStore.getUserName(objvSysSkillEx.relaUpdUser);

    if (strOperationType == '06' || strOperationType == '07') {
      if (strUserName != '' && strRelaUserName != '') {
        if (objvSysSkillEx.updUser == objvSysSkillEx.relaUpdUser) {
          strhtml += `<span class="rowtit color4">编辑引用人：</span>${strUserName}`;
        } else {
          strhtml += `<span class="rowtit color4">编辑&nbsp;/&nbsp;引用人：</span>${strUserName}&nbsp;/&nbsp;${strRelaUserName}`;
        }
      }
      if (objvSysSkillEx.updDate == objvSysSkillEx.relaUpdDate) {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">编辑引用时间：</span>${clsDateTime.GetDate_Sim(
          objvSysSkillEx.updDate,
        )}`;
      } else {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">编辑&nbsp;/&nbsp;引用时间：</span>${clsDateTime.GetDate_Sim(
          objvSysSkillEx.updDate,
        )}&nbsp;/&nbsp;${clsDateTime.GetDate_Sim(objvSysSkillEx.relaUpdDate)}`;
      }
      if (strOperationType == '06') {
        //加入到观点分类
        if (objvSysSkillEx.memo == '0000000000') {
          // onclick="btnAddClassificationRecordInTab_Click(${objvSysSkillEx.subViewpointId})"
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnAddClassificationRecordInTab" keyId="${objvSysSkillEx.subViewpointId}" style="float:right;" title="加入当前分类" class="layui-btn layui-btn layui-btn-xs"  > <i class="layui-icon" >&#xe61f;</i>加入分类</button>`;
        } else {
          // onclick=btnUpdateClassificationRecordInTab_Click(${objvSysSkillEx.subViewpointId},"${objvSysSkillEx.memo}")
          const strKeyId = `${objvSysSkillEx.subViewpointId}|${objvSysSkillEx.memo}`;
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnUpdateClassificationRecordInTab" keyId="${strKeyId}" style="float:right;" title="调整当前分类" class="layui-btn layui-btn layui-btn-xs"  > ${clsIcon.faCommentDots}调整分类</button>`;
        }

        if (strUserId == objvSysSkillEx.updUser) {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="移除引用" class="layui-btn-danger layui-btn layui-btn layui-btn-xs" onclick="btnDelSysskillRecordInTab_Click(${objvSysSkillEx.subViewpointId})" > <i class="layui-icon" >&#xe640;</i>移除</button>`;
        }
        if (objvSysSkillEx.isSubmit != true) {
          // onclick=btnUpdSysskill_Click("${strSkillId}")
          const strKeyId = `${strSubViewpointId}|${objvSysSkillEx.paperId}`;
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnUpdSysskill" keyId=${strKeyId} style="float:right;" title="修改" class="layui-btn layui-btn layui-btn layui-btn-xs"  > ${clsIcon.faCommentDots}修改</button>`;
        }
      } else if (strOperationType == '07') {
        const objLike = sysVoteStore.getObj(strVoteType, strUserId, strSubViewpointId.toString()); //新0605
        strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;';
        if (objLike == null) {
          strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${strSubViewpointId}","${objvSysSkillEx.updUser}","09")><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞"></a>`;
        } else {
          strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${strSubViewpointId}","${objvSysSkillEx.updUser}","09")><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞"></a>`;
        }
        strhtml += `&nbsp;${objvSysSkillEx.okCount}&nbsp;&nbsp;`;
        //评论
        //strhtml += '&nbsp;&nbsp;<span  style="color:royalblue" >评论数:' + objvSysSkillEx.appraiseCount + '</span >';
        strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('相关技能评论', '../GradEduTools/SysComment?Key=${strSubViewpointId}&Type=09&User=${
          objvSysSkillEx.updUser
        }&pubParentId=${clsPrivateSessionStorage.topicIdInTree}&FontSize=${$(
          '#hidFontSize',
        ).val()}')"> ${clsIcon.faCommentDots}添加评论<span class="badge text-bg-info">${
          objvSysSkillEx.appraiseCount
        }</span></button >`;
        //建立观点关系
      }
      if (objvSysSkillEx.versionCount > 0 && objvSysSkillEx.versionCount != null) {
        strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('相关技能历史版本', '../GradEduEx/HistoricalVersion?Key=${strSubViewpointId}&Type=08')"> ${clsIcon.faCommentDots}历史版本</button >`;
      }
    } else {
      if (strUserName != '') {
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color4">编辑用户：</span>${strUserName}`;
      }
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">编辑时间：</span>${clsDateTime.GetDate_Sim(
        objvSysSkillEx.updDate,
      )}`;
    }
    if (strOperationType == '01') {
      //历史版本
      if (objvSysSkillEx.versionCount > 0 && objvSysSkillEx.versionCount != null) {
        strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs" onclick="xadmin.open('历史版本', '../GradEduEx/HistoricalVersion?Key=${strSubViewpointId}&Type=08')"> ${clsIcon.faCommentDots}历史版本</button >`;
      }
      if (strUserId == objvSysSkillEx.updUser) {
        if (objvSysSkillEx.isSubmit != true) {
          //修改个人观点
          strhtml += `&nbsp;&nbsp;<button title="修改" class="layui-btn layui-btn layui-btn-xs" onclick=btnUpdateRecordInTab_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}修改</button>`;
          //删除个人观点
          strhtml += `&nbsp;&nbsp;<button title="删除" class="layui-btn layui-btn-danger layui-btn-xs" onclick=btnDelRecordInTab_Click("${strSubViewpointId}")> <i class="layui-icon" >&#xe640;</i>删除</button>`;
          //观点提交
          strhtml += `&nbsp;&nbsp;<button title="提交" class="layui-btn layui-btn layui-btn-xs" onclick=btnIsSubmit_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}提交</button>`;
        }
      }
      if (strRoleId != '00620003') {
        //取消提交
        strhtml += `&nbsp;&nbsp;<button id="btnCancelSubmit" title="取消提交" class="layui-btn layui-btn layui-btn-xs" onclick=btnCancelSubmit_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}取消提交</button>`;
      }
      //建立观点关系

      arrgs_TotalDataRelaObjLst = arrgs_TotalDataRelaObjLst0.filter(
        (x) => x.totalDataId1 == strTotalDataId1,
      ); //
      strhtml += `&nbsp;&nbsp;<button id="AddViewRela" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('建立观点关系', '../GradEduTools/gs_TotalDataRela?keyId=${strSubViewpointId}&TypeId=09&OperationType=1','','',true)"> ${clsIcon.faCommentDots}建立观点关系</button >`;
    } else if (strOperationType == '02') {
      strhtml += `&nbsp;&nbsp;<button title="引用相关技能" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkSysskillInTab_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}引用该相关概念</button>`;
    } else if (strOperationType == '04') {
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="移除关系" class="layui-btn-danger layui-btn layui-btn-xs" onclick=btnDelSysskillRecordInTab_Click("${strSubViewpointId}") > <i class="layui-icon" >&#xe640;</i>移除</button>`;
    } else if (strOperationType == '05') {
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button title="建立关系" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkSysskillInTab_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}建立关系</button>`;
    }

    strhtml += '</li>';

    //如果当前观点有引用论文，那么就显示论文标题和作者
    const varCitationId = objvSysSkillEx.paperId;
    if (varCitationId != '' && varCitationId != null) {
      const objPaper: clsPaperEN = await PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache(
        varCitationId,
        strIdCurrEducls,
      );
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[引用自]：</span>${objPaper.paperTitle}(作者：${objPaper.author})</li>`;
    }

    //主题查看——各观点关系查看
    if (strOperationType == '07') {
      arrgs_TotalDataRelaObjLst = arrgs_TotalDataRelaObjLst0.filter(
        (x) => x.totalDataId1 == strTotalDataId1,
      ); //
      if (arrgs_TotalDataRelaObjLst.length > 0) {
        strhtml += '<li>';

        strhtml += await gs_TotalDataRelaEx_BindList_gs_TotalDataRela(arrgs_TotalDataRelaObjLst);
        strhtml += `&nbsp;&nbsp;&nbsp;<button id="AddViewRela" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('关联观点查看', '../GradEduTools/gs_TotalDataRela?keyId=${strSubViewpointId}&TypeId=09&OperationType=2')"> ${clsIcon.faCommentDots}相关观点详细<span class="badge text-bg-info">${arrgs_TotalDataRelaObjLst.length}</span></button >`;
        strhtml += '</li>';
      }
    }

    strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
  }
  strhtml += '</ul></div>';

  return strhtml;
}

//绑定观点列表数据
export async function vPaperSubViewpointEx_DetailShowList_vConceptEx(
  strOperationType: string,
  arrvPaperSubViewpointExObjLst: Array<clsvPaperSubViewpointENEx>,
): Promise<string> {
  //主题用户关系
  const strTopicId = clsPrivateSessionStorage.topicIdInTree;
  //换行符
  const strBr =
    '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
  const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
  // const strCourseId = clsPubLocalStorage.courseId;
  const strUserId = userStore.getUserId;
  const strRoleId = userStore.getRoleId;
  let strhtml = '';

  //观点关系
  let arrgs_TotalDataRelaObjLst: Array<clsgs_TotalDataRelaEN> = []; //
  let arrgs_TotalDataRelaObjLst0: Array<clsgs_TotalDataRelaEN> = []; //

  //观点分类
  let arrgs_VpClassificationObjLst: Array<clsgs_VpClassificationEN> = [];

  //点赞
  // const strWhereCondLike = `1=1 and voteTypeId='05' And ${clsSysVoteEN.con_UpdUser} = '${strUserId}'`; //新0605
  const strVoteType = '05';

  //关系查看需要点赞功能
  if (strOperationType == '01' || strOperationType == '07') {
    await gs_TotalDataRela_GetObjLstCache(clsPubLocalStorage.idCurrEduCls).then((jsonData) => {
      arrgs_TotalDataRelaObjLst0 = <Array<clsgs_TotalDataRelaEN>>jsonData;
    });

    if (strOperationType == '07') {
      //观点
    }
  }

  if (strOperationType == '06') {
    //主题用户关系

    const strWhereCond = ` 1 = 1 and topicId='${strTopicId}' order by updDate Asc`;
    //获取观点分类
    arrgs_VpClassificationObjLst = await gs_VpClassification_GetObjLstAsync(strWhereCond);
  }
  //附件

  strhtml += '<div class="info" id="infoConcept"><div class="title btn-3">';

  if (strOperationType == '01') {
    strhtml +=
      '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加概念" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加概念</button></div>';
  } else {
    strhtml +=
      '<div style="float:left;"><a href="javascript:void(0)" title="相关概念">相关概念</a></div>';
  }

  strhtml += '</div><ul class="artlist">';
  let intIndex = 0; //给内容加个序号
  for (let i = 0; i < arrvPaperSubViewpointExObjLst.length; i++) {
    const objvConceptEx = arrvPaperSubViewpointExObjLst[i];
    //得到conceptId；
    const strSubViewpointId = objvConceptEx.subViewpointId;
    //各观点关系
    const strTotalDataId1 = `0600${strSubViewpointId}`;
    intIndex++;
    //对内容进行换行替换
    let strConceptContent = objvConceptEx.explainContent;
    if (IsNullOrEmpty(strConceptContent) == false) {
      strConceptContent = strConceptContent.replace(/\r\n/g, strBr);
      strConceptContent = strConceptContent.replace(/\n/g, strBr);
    }
    if (strOperationType == '06') {
      const strClassificationName = await gs_VpClassificationRelaStore.getClassificationName(
        Number(objvConceptEx.memo),
        strTopicId,
      );
      if (strClassificationName != '') {
        strhtml += `<li><span class="rowtit color4">${intIndex}.[概念]：</span><span class="abstract-text">${objvConceptEx.subViewpointContent}</span>&nbsp;&nbsp;<span style="color:#17a2b8;">(${strClassificationName})</span></li>`;
      } else {
        strhtml += `<li><span class="rowtit color4">${intIndex}.[概念]：</span><span class="abstract-text">${objvConceptEx.subViewpointContent}</span>&nbsp;&nbsp;<span style="color:red;">(未分类)</span></li>`;
      }
    } else {
      strhtml += `<li><span class="rowtit color4">${intIndex}.[概念]：</span><span class="abstract-text">${objvConceptEx.subViewpointContent}</span></li>`;
    }

    strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[内容]：</span><span class="abstract-text">${strConceptContent}</span></li>`;

    //查询附件
    const arrPaperSubAttachments = await paperSubAttachmentStore.getObjLst(strSubViewpointId);
    if (arrPaperSubAttachments != null && arrPaperSubAttachments.length > 0) {
      for (let y = 0; y < arrPaperSubAttachments.length; y++) {
        const strAddressAndPortfull = GetAddressAndPort() + arrPaperSubAttachments[y].filePath;
        strhtml += `<li><div class="example"><img style="max-width:400px; margin-left: 10px; " src="${strAddressAndPortfull}"  alt="" data-action="zoom" /></div></li>`;
      }
    }

    strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[统计]：';
    if (objvConceptEx.okCount != 0) {
      strhtml += `点赞数：${objvConceptEx.okCount}&nbsp;&nbsp`;
    }
    if (objvConceptEx.appraiseCount != 0) {
      //评论
      strhtml += `&nbsp;&nbsp;评论数：${objvConceptEx.appraiseCount}`;
    }
    if (objvConceptEx.score != 0) {
      //评分
      strhtml += `&nbsp;&nbsp;综合评分：${objvConceptEx.score}`;
    }
    if (objvConceptEx.teaScore != 0) {
      strhtml += `&nbsp;&nbsp;教师评分：${objvConceptEx.teaScore}`;
    }
    if (objvConceptEx.stuScore != 0) {
      strhtml += `&nbsp;&nbsp;学生评分：${objvConceptEx.stuScore}`;
    }
    //引用数
    strhtml += `&nbsp;&nbsp;&nbsp;被引用数：${objvConceptEx.citationCount}`;

    if (objvConceptEx.versionCount != 0) {
      strhtml += `&nbsp;&nbsp;&nbsp;历史版本数：${objvConceptEx.versionCount}`;
    }
    if (objvConceptEx.isSubmit == true) {
      strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已提交</span>';
    } else {
      strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">未提交</span>';
    }

    strhtml += '</li>';
    strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：</span>';

    if (strOperationType == '06' || strOperationType == '07') {
      //得到编辑人名字
      const strUserName = await vQxUsersSimStore.getUserName(objvConceptEx.relaUpdUser);
      if (strUserName != '') {
        if (objvConceptEx.updUser == objvConceptEx.relaUpdUser) {
          strhtml += `<span class="rowtit color4">编辑引用人：</span>${strUserName}`;
        } else {
          const strUserNameRT = await vQxUsersSimStore.getUserName(objvConceptEx.relaUpdUser);
          if (strUserNameRT != '') {
            strhtml += `<span class="rowtit color4">编辑&nbsp;/&nbsp;引用人：</span>${strUserName}&nbsp;/&nbsp;${strUserNameRT}`;
          }
        }
      }

      if (objvConceptEx.updDate == objvConceptEx.relaUpdDate) {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">编辑引用时间：</span>${clsDateTime.GetDate_Sim(
          objvConceptEx.updDate,
        )}`;
      } else {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">编辑&nbsp;/&nbsp;引用时间：</span>${clsDateTime.GetDate_Sim(
          objvConceptEx.updDate,
        )}&nbsp;/&nbsp;${clsDateTime.GetDate_Sim(objvConceptEx.relaUpdDate)}`;
      }
      if (strOperationType == '06') {
        //加入到观点分类
        if (objvConceptEx.memo == '0000000000') {
          // onclick="btnAddClassificationRecordInTab_Click(${objvConceptEx.subViewpointId})"
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnAddClassificationRecordInTab" keyId="${objvConceptEx.subViewpointId}" style="float:right;" title="加入当前分类" class="layui-btn layui-btn layui-btn-xs"  > <i class="layui-icon" >&#xe61f;</i>加入分类</button>`;
        } else {
          // onclick=btnUpdateClassificationRecordInTab_Click(${objvConceptEx.subViewpointId},"${objvConceptEx.memo}")
          const strKeyId = `${objvConceptEx.subViewpointId}|${objvConceptEx.memo}`;
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnUpdateClassificationRecordInTab" keyId="${strKeyId}" style="float:right;" title="调整当前分类" class="layui-btn layui-btn layui-btn-xs"  > ${clsIcon.faCommentDots}调整分类</button>`;
        }

        if (strUserId == objvConceptEx.updUser) {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="移除引用" class="layui-btn-danger layui-btn layui-btn layui-btn-xs" onclick="btnDelConceptRecordInTab_Click(${objvConceptEx.subViewpointId})" > <i class="layui-icon" >&#xe640;</i>移除</button>`;
        }
        if (objvConceptEx.isSubmit != true) {
          // onclick=btnUpdConcept_Click("${strConceptId}")

          const strKeyId = `${strSubViewpointId}|${objvConceptEx.paperId}`;
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnUpdConcept" keyId="${strKeyId}" style="float:right;" title="修改" class="layui-btn layui-btn layui-btn layui-btn-xs"  > ${clsIcon.faCommentDots}修改</button>`;
        }
      } else if (strOperationType == '07') {
        const objLike = sysVoteStore.getObj(strVoteType, strUserId, strSubViewpointId.toString()); //新0605
        strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;';
        if (objLike == null) {
          strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${strSubViewpointId}","${objvConceptEx.updUser}","05")><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞"></a>`;
        } else {
          strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${strSubViewpointId}","${objvConceptEx.updUser}","05")><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞"></a>`;
        }
        strhtml += `&nbsp;${objvConceptEx.okCount}&nbsp;&nbsp;`;
        //评论
        //strhtml += '&nbsp;&nbsp;<span  style="color:royalblue" >评论数:' + objvConceptEx.appraiseCount + '</span >';
        strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('相关概念评论', '../GradEduTools/SysComment?Key=${strSubViewpointId}&Type=05&User=${
          objvConceptEx.updUser
        }&pubParentId=${clsPrivateSessionStorage.topicIdInTree}&FontSize=${$(
          '#hidFontSize',
        ).val()}')"> ${clsIcon.faCommentDots}添加评论<span class="badge text-bg-info">${
          objvConceptEx.appraiseCount
        }</span></button >`;
        //查看观点关系
      }
      if (objvConceptEx.versionCount > 0 && objvConceptEx.versionCount != null) {
        strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('历史版本', '../GradEduEx/HistoricalVersion?Key=${strSubViewpointId}&Type=05')"> ${clsIcon.faCommentDots}历史版本</button >`;
      }
    } else {
      const strUserName = await vQxUsersSimStore.getUserName(objvConceptEx.updUser);
      if (strUserName != '') {
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color4">编辑用户：</span>${strUserName}`;
      }

      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">编辑时间：</span>${clsDateTime.GetDate_Sim(
        objvConceptEx.updDate,
      )}`;
    }
    if (strOperationType == '01') {
      //历史版本
      if (objvConceptEx.versionCount > 0 && objvConceptEx.versionCount != null) {
        strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs" onclick="xadmin.open('历史版本', '../GradEduEx/HistoricalVersion?Key=${strSubViewpointId}&Type=05')"> ${clsIcon.faCommentDots}历史版本</button >`;
      }
      if (strUserId == objvConceptEx.updUser) {
        if (objvConceptEx.isSubmit != true) {
          //修改个人观点
          strhtml += `&nbsp;&nbsp;<button title="修改" class="layui-btn layui-btn layui-btn-xs" onclick=btnUpdateRecordInTab_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}修改</button>`;
          //删除个人观点
          strhtml += `&nbsp;&nbsp;<button title="删除" class="layui-btn layui-btn-danger layui-btn-xs" onclick=btnDelRecordInTab_Click("${strSubViewpointId}")> <i class="layui-icon" >&#xe640;</i>删除</button>`;
          //观点提交
          strhtml += `&nbsp;&nbsp;<button title="提交" class="layui-btn layui-btn layui-btn-xs" onclick=btnIsSubmit_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}提交</button>`;
        }
      }
      if (strRoleId != '00620003') {
        //取消提交
        strhtml += `&nbsp;&nbsp;<button id="btnCancelSubmit" title="取消提交" class="layui-btn layui-btn layui-btn-xs" onclick=btnCancelSubmit_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}取消提交</button>`;
      }

      //建立观点关系

      arrgs_TotalDataRelaObjLst = arrgs_TotalDataRelaObjLst0.filter(
        (x) => x.totalDataId1 == strTotalDataId1,
      ); //
      strhtml += `&nbsp;&nbsp;<button id="AddViewRela" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('建立观点关系', '../GradEduTools/gs_TotalDataRela?keyId=${strSubViewpointId}&TypeId=06&OperationType=1','','',true)"> ${clsIcon.faCommentDots}建立观点关系</button >`;
    } else if (strOperationType == '02') {
      strhtml += `&nbsp;&nbsp;<button title="引用该相关概念" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkConceptInTab_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}引用该相关概念</button>`;
    } else if (strOperationType == '04') {
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="移除关系" class="layui-btn-danger layui-btn layui-btn-xs" onclick=btnDelConceptRelaRecordInTab_Click("${strSubViewpointId}") > <i class="layui-icon" >&#xe640;</i>移除</button>`;
    } else if (strOperationType == '05') {
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button title="建立关系" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkConceptInTab_Click("${strSubViewpointId}")> ${clsIcon.faCommentDots}建立关系</button>`;
    }

    strhtml += '</li>';

    //如果当前观点有引用论文，那么就显示论文标题和作者
    const varCitationId = objvConceptEx.paperId;
    if (varCitationId != '' && varCitationId != null) {
      const objPaper: clsPaperEN = await PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache(
        varCitationId,
        strIdCurrEducls,
      );
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[引用自]：</span>${objPaper.paperTitle}(作者：${objPaper.author})</li>`;
    }

    //主题查看——各观点关系查看
    if (strOperationType == '07') {
      arrgs_TotalDataRelaObjLst = arrgs_TotalDataRelaObjLst0.filter(
        (x) => x.totalDataId1 == strTotalDataId1,
      ); //
      if (arrgs_TotalDataRelaObjLst.length > 0) {
        strhtml += '<li>';

        strhtml += await gs_TotalDataRelaEx_BindList_gs_TotalDataRela(arrgs_TotalDataRelaObjLst);
        strhtml += `&nbsp;&nbsp;&nbsp;<button id="AddViewRela" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('关联观点查看', '../GradEduTools/gs_TotalDataRela?keyId=${strSubViewpointId}&TypeId=06&OperationType=2')"> ${clsIcon.faCommentDots}相关观点详细<span class="badge text-bg-info">${arrgs_TotalDataRelaObjLst.length}</span></button >`;
        strhtml += '</li>';
      }
    }

    strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
  }
  strhtml += '</ul></div>';

  return strhtml;
}
