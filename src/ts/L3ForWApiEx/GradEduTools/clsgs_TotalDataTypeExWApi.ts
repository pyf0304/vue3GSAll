/**
 * 类名:clsgs_TotalDataTypeExWApi
 * 表名:gs_TotalDataType(01120685)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/05 01:03:37
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 总数据类型表(gs_TotalDataType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月05日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import {
  gs_TotalDataType_GetObjLstCache,
  gs_TotalDataType_GetObjLstAsync,
  gs_TotalDataType_SortFunByKey,
  gs_TotalDataType_FilterFunByKey,
} from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataTypeWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  clsgs_TotalDataTypeEN,
  enumgs_TotalDataType,
} from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataTypeEN';

import { clsgs_TotalDataTypeENEx } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataTypeENEx';
import { vPaperSimPro_GetNameByPaperIdCache } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSimProWApi';
import {
  PaperSubViewpoint_GetNameBySubViewpointIdCache,
  PaperSubViewpoint_GetObjByJSONStr,
  PaperSubViewpoint_GetObjBySubViewpointIdCache,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubViewpointWApi';
import { Viewpoint_GetNameByViewpointIdCache } from '@/ts/L3ForWApi/GradEduTopic/clsViewpointWApi';
import { Concept_GetNameByConceptIdCache } from '@/ts/L3ForWApi/GradEduTopic/clsConceptWApi';
import { TopicObjective_GetNameByTopicObjectiveIdCache } from '@/ts/L3ForWApi/GradEduTopic/clsTopicObjectiveWApi';
import { vSysSkill_GetNameBySkillIdCache } from '@/ts/L3ForWApi/GradEduTopic/clsvSysSkillWApi';
import { vSysSocialRelations_GetNameBySocialIdCache } from '@/ts/L3ForWApi/GradEduTopic/clsvSysSocialRelationsWApi';
import { qa_Answer_GetObjByAnswerIdAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_AnswerWApi';
import enumTotalDataStatisticsTabs from '@/ts/FunClass/enumTotalDataStatisticsTabs';

export const gs_TotalDataTypeEx_Controller = 'gs_TotalDataTypeExApi';
export const gs_TotalDataTypeEx_ConstructorName = 'gs_TotalDataTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function gs_TotalDataTypeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objgs_TotalDataTypeENS:源对象
 * @returns 目标对象=>clsgs_TotalDataTypeEN:objgs_TotalDataTypeENT
 **/
export function gs_TotalDataTypeEx_CopyToEx(
  objgs_TotalDataTypeENS: clsgs_TotalDataTypeEN,
): clsgs_TotalDataTypeENEx {
  const strThisFuncName = gs_TotalDataTypeEx_CopyToEx.name;
  const objgs_TotalDataTypeENT = new clsgs_TotalDataTypeENEx();
  try {
    ObjectAssign(objgs_TotalDataTypeENT, objgs_TotalDataTypeENS);
    return objgs_TotalDataTypeENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_TotalDataTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objgs_TotalDataTypeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_TotalDataTypeEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_TotalDataTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrgs_TotalDataTypeObjLst = await gs_TotalDataType_GetObjLstCache();
  const arrgs_TotalDataTypeExObjLst = arrgs_TotalDataTypeObjLst.map(gs_TotalDataTypeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrgs_TotalDataTypeExObjLst) {
      await gs_TotalDataTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_TotalDataTypeExObjLst.length == 0) return arrgs_TotalDataTypeExObjLst;
  let arrgs_TotalDataType_Sel: Array<clsgs_TotalDataTypeENEx> = arrgs_TotalDataTypeExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objgs_TotalDataType_Cond = new clsgs_TotalDataTypeENEx();
  ObjectAssign(objgs_TotalDataType_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsgs_TotalDataTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_TotalDataType_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_TotalDataType_Sel.length == 0) return arrgs_TotalDataType_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.sort(
        gs_TotalDataTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.sort(objPagerPara.sortFun);
    }
    arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.slice(intStart, intEnd);
    return arrgs_TotalDataType_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_TotalDataTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_TotalDataTypeENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_TotalDataTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_TotalDataTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrgs_TotalDataTypeObjLst = await gs_TotalDataType_GetObjLstAsync(objPagerPara.whereCond);
  const arrgs_TotalDataTypeExObjLst = arrgs_TotalDataTypeObjLst.map(gs_TotalDataTypeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrgs_TotalDataTypeExObjLst) {
      await gs_TotalDataTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_TotalDataTypeExObjLst.length == 0) return arrgs_TotalDataTypeExObjLst;
  let arrgs_TotalDataType_Sel: Array<clsgs_TotalDataTypeENEx> = arrgs_TotalDataTypeExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.sort(
        gs_TotalDataTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.sort(objPagerPara.sortFun);
    }
    arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.slice(intStart, intEnd);
    return arrgs_TotalDataType_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_TotalDataTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_TotalDataTypeENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function gs_TotalDataTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return gs_TotalDataType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return gs_TotalDataType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function gs_TotalDataTypeEx_FuncMapByFldName(
  strFldName: string,
  objgs_TotalDataTypeEx: clsgs_TotalDataTypeENEx,
) {
  const strThisFuncName = gs_TotalDataTypeEx_FuncMapByFldName.name;
  console.log(objgs_TotalDataTypeEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsgs_TotalDataTypeEN.AttributeName;
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
 * 日期:2022-11-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function gs_TotalDataTypeEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return gs_TotalDataType_FilterFunByKey(strKey, value);
  }
}

export function gs_TotalDataTypeEx_GetTypeIdByTotalDataTypeTabsId(strActiveTabId: string) {
  switch (strActiveTabId) {
    case enumTotalDataStatisticsTabs.li_Paper: // '01') {
      //拼接；
      return enumgs_TotalDataType.Paper_01;

    case enumTotalDataStatisticsTabs.li_PaperViewpoint: //      } else if (strTabKeyId == '03') {
      //拼接；
      return enumgs_TotalDataType.PaperSubViewpoint_03;
    case enumTotalDataStatisticsTabs.li_Viewpoint: //      } else if (strTabKeyId == '04') {
      //拼接；
      return enumgs_TotalDataType.Viewpoint_04;
    case enumTotalDataStatisticsTabs.li_ExpertViewpoint: //      } else if (strTabKeyId == '05') {
      //拼接；
      return enumgs_TotalDataType.Viewpoint_05;
    case enumTotalDataStatisticsTabs.li_Concept: //      } else if (strTabKeyId == '06') {
      //拼接；
      return enumgs_TotalDataType.Concept_06;
    case enumTotalDataStatisticsTabs.li_TopicObjective: //      } else if (strTabKeyId == '07') {
      //拼接；
      return enumgs_TotalDataType.TopicObjective_07;
    case enumTotalDataStatisticsTabs.li_ObjectiveBasis: //      } else if (strTabKeyId == '08') {
      //拼接；
      return enumgs_TotalDataType.TopicObjective_08;
    case enumTotalDataStatisticsTabs.li_Skill: //      } else if (strTabKeyId == '09') {
      //拼接；
      return enumgs_TotalDataType.SysSkill_09;
    case enumTotalDataStatisticsTabs.li_SysSocialRelations: // } else if (strTabKeyId == '10') {
      //拼接；
      return enumgs_TotalDataType.SysSocialRelations_10;
    case enumTotalDataStatisticsTabs.li_QaAnswer: //      } else if (strTabKeyId == '11') {
      //拼接；
      return enumgs_TotalDataType.qa_Answer_11;
    default:
      //拼接；
      return enumgs_TotalDataType.Paper_01;
  }
}
export async function gs_TotalDataTypeEx_GetObjNameByTotalDataType(
  strTotalDataTypeId: string,
  strKeyId: string,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'gs_TotalDataTypeEx_GetObjNameByTotalDataType';
  let strMsg = '';
  let strObjName = '';
  let obj1;
  switch (strTotalDataTypeId) {
    case enumgs_TotalDataType.Paper_01: // '01':
      // PaperCount = arrgs_TotalDataStatisticsObjLst.length;
      strObjName = await vPaperSimPro_GetNameByPaperIdCache(strKeyId, strIdCurrEduCls);
      break;
    case enumgs_TotalDataType.PaperSubViewpoint_03:
      strObjName = await PaperSubViewpoint_GetNameBySubViewpointIdCache(strKeyId, strIdCurrEduCls);
      break;
    case enumgs_TotalDataType.Viewpoint_04:
      strObjName = await Viewpoint_GetNameByViewpointIdCache(strKeyId, strIdCurrEduCls);

      break;
    case enumgs_TotalDataType.Viewpoint_05:
      strObjName = await Viewpoint_GetNameByViewpointIdCache(strKeyId, strIdCurrEduCls);

      break;
    case enumgs_TotalDataType.Concept_06:
      strObjName = await Concept_GetNameByConceptIdCache(strKeyId, strIdCurrEduCls);

      break;
    case enumgs_TotalDataType.TopicObjective_07:
      strObjName = await TopicObjective_GetNameByTopicObjectiveIdCache(strKeyId, strIdCurrEduCls);

      break;
    case enumgs_TotalDataType.TopicObjective_08:
      strObjName = await TopicObjective_GetNameByTopicObjectiveIdCache(strKeyId, strIdCurrEduCls);

      break;
    case enumgs_TotalDataType.SysSkill_09:
      strObjName = await vSysSkill_GetNameBySkillIdCache(strKeyId, strIdCurrEduCls);

      break;
    case enumgs_TotalDataType.SysSocialRelations_10:
      strObjName = await vSysSocialRelations_GetNameBySocialIdCache(strKeyId, strIdCurrEduCls);

      break;
    case enumgs_TotalDataType.qa_Answer_11:
      obj1 = await qa_Answer_GetObjByAnswerIdAsync(strKeyId);
      if (obj1 != null) strObjName = obj1.answerContent;
      break;

    default:
      strMsg = `TotalDataType:${strTotalDataTypeId}在函数(${strThisFuncName})中没有被处理！`;
      console.error(strMsg);
      alert(strMsg);
      break;
  }
  return strObjName;
}
