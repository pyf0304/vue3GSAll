/**
 * 类名:clsgs_TotalDataRelaExWApi
 * 表名:gs_TotalDataRela(01120700)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/05 01:03:36
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
 * 各观点总数据关系表(gs_TotalDataRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月05日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import {
  gs_TotalDataRela_GetObjLstCache,
  gs_TotalDataRela_GetObjLstAsync,
  gs_TotalDataRela_SortFunByKey,
  gs_TotalDataRela_FilterFunByKey,
} from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataRelaWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsgs_TotalDataRelaEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataRelaEN';

import { clsgs_TotalDataRelaENEx } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataRelaENEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { clsvViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvViewpointEN';
import { clsvConceptEN } from '@/ts/L0Entity/GradEduTopic/clsvConceptEN';
import { clsvTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN';
import { clsvSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSkillEN';
import { clsvSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsEN';
import { vViewpoint_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTopic/clsvViewpointWApi';
import { vSysSocialRelations_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTopic/clsvSysSocialRelationsWApi';
import { vSysSkill_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTopic/clsvSysSkillWApi';
import { vTopicObjective_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTopic/clsvTopicObjectiveWApi';
import { vConcept_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTopic/clsvConceptWApi';

export const gs_TotalDataRelaEx_Controller = 'gs_TotalDataRelaExApi';
export const gs_TotalDataRelaEx_ConstructorName = 'gs_TotalDataRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function gs_TotalDataRelaEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objgs_TotalDataRelaENS:源对象
 * @returns 目标对象=>clsgs_TotalDataRelaEN:objgs_TotalDataRelaENT
 **/
export function gs_TotalDataRelaEx_CopyToEx(
  objgs_TotalDataRelaENS: clsgs_TotalDataRelaEN,
): clsgs_TotalDataRelaENEx {
  const strThisFuncName = gs_TotalDataRelaEx_CopyToEx.name;
  const objgs_TotalDataRelaENT = new clsgs_TotalDataRelaENEx();
  try {
    ObjectAssign(objgs_TotalDataRelaENT, objgs_TotalDataRelaENS);
    return objgs_TotalDataRelaENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_TotalDataRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objgs_TotalDataRelaENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_TotalDataRelaEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
): Promise<Array<clsgs_TotalDataRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrgs_TotalDataRelaObjLst = await gs_TotalDataRela_GetObjLstCache(strIdCurrEducls);
  const arrgs_TotalDataRelaExObjLst = arrgs_TotalDataRelaObjLst.map(gs_TotalDataRelaEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrgs_TotalDataRelaExObjLst) {
      await gs_TotalDataRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_TotalDataRelaExObjLst.length == 0) return arrgs_TotalDataRelaExObjLst;
  let arrgs_TotalDataRela_Sel: Array<clsgs_TotalDataRelaENEx> = arrgs_TotalDataRelaExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objgs_TotalDataRela_Cond = new clsgs_TotalDataRelaENEx();
  ObjectAssign(objgs_TotalDataRela_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsgs_TotalDataRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_TotalDataRela_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_TotalDataRela_Sel.length == 0) return arrgs_TotalDataRela_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.sort(
        gs_TotalDataRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.sort(objPagerPara.sortFun);
    }
    arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.slice(intStart, intEnd);
    return arrgs_TotalDataRela_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_TotalDataRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_TotalDataRelaENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_TotalDataRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_TotalDataRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrgs_TotalDataRelaObjLst = await gs_TotalDataRela_GetObjLstAsync(objPagerPara.whereCond);
  const arrgs_TotalDataRelaExObjLst = arrgs_TotalDataRelaObjLst.map(gs_TotalDataRelaEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrgs_TotalDataRelaExObjLst) {
      await gs_TotalDataRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_TotalDataRelaExObjLst.length == 0) return arrgs_TotalDataRelaExObjLst;
  let arrgs_TotalDataRela_Sel: Array<clsgs_TotalDataRelaENEx> = arrgs_TotalDataRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.sort(
        gs_TotalDataRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.sort(objPagerPara.sortFun);
    }
    arrgs_TotalDataRela_Sel = arrgs_TotalDataRela_Sel.slice(intStart, intEnd);
    return arrgs_TotalDataRela_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_TotalDataRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_TotalDataRelaENEx>();
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
export function gs_TotalDataRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return gs_TotalDataRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return gs_TotalDataRela_SortFunByKey(strKey, AscOrDesc);
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
export function gs_TotalDataRelaEx_FuncMapByFldName(
  strFldName: string,
  objgs_TotalDataRelaEx: clsgs_TotalDataRelaENEx,
) {
  const strThisFuncName = gs_TotalDataRelaEx_FuncMapByFldName.name;
  console.log(objgs_TotalDataRelaEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsgs_TotalDataRelaEN.AttributeName;
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
export async function gs_TotalDataRelaEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return gs_TotalDataRela_FilterFunByKey(strKey, value);
  }
}

//绑定各观点关系
export async function gs_TotalDataRelaEx_BindList_gs_TotalDataRela(
  arrgs_TotalDataRelaObjLst: Array<clsgs_TotalDataRelaEN>,
): Promise<string> {
  const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
  //各观点实体
  let arrvViewpointObjLst0: Array<clsvViewpointEN> = []; //
  let arrvViewpointObjLst: Array<clsvViewpointEN> = []; //

  let arrvConceptObjLst0: Array<clsvConceptEN> = []; //
  let arrvConceptObjLst: Array<clsvConceptEN> = []; //

  let arrvTopicObjectiveObjLst0: Array<clsvTopicObjectiveEN> = []; //
  let arrvTopicObjectiveObjLst: Array<clsvTopicObjectiveEN> = []; //

  let arrvSysSkillObjLst0: Array<clsvSysSkillEN> = []; //
  let arrvSysSkillObjLst: Array<clsvSysSkillEN> = []; //

  let arrvSysSocialRelationsObjLst0: Array<clsvSysSocialRelationsEN> = []; //
  let arrvSysSocialRelationsObjLst: Array<clsvSysSocialRelationsEN> = []; //

  let strhtml = '';
  try {
    //观点
    arrvViewpointObjLst0 = await vViewpoint_GetObjLstCache(strIdCurrEducls);
    //概念
    arrvConceptObjLst0 = await vConcept_GetObjLstCache(strIdCurrEducls);
    //客观
    arrvTopicObjectiveObjLst0 = await vTopicObjective_GetObjLstCache(strIdCurrEducls);
    //技能
    arrvSysSkillObjLst0 = await vSysSkill_GetObjLstCache(strIdCurrEducls);
    //社会关系
    arrvSysSocialRelationsObjLst0 = await vSysSocialRelations_GetObjLstCache(strIdCurrEducls);

    strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[相关观点]：</span>';
    for (let j = 0; j < arrgs_TotalDataRelaObjLst.length; j++) {
      const totalDataId2 = arrgs_TotalDataRelaObjLst[j].totalDataId2;
      const strVtypeId = totalDataId2.substring(0, 2);
      const strVId = totalDataId2.substring(4, 8);

      if (strVtypeId == '04' || strVtypeId == '05') {
        arrvViewpointObjLst = arrvViewpointObjLst0.filter((x) => x.viewpointId == strVId);
        for (let k = 0; k < arrvViewpointObjLst.length; k++) {
          let strYear = arrvViewpointObjLst[k].updDate;
          strYear = strYear.substring(0, 4);
          const strUserName = await vQxUsersSimStore.getUserName(arrvViewpointObjLst[k].updUser);
          if (strUserName != '') {
            strhtml += `${arrvViewpointObjLst[k].viewpointName}<span class="rowtit color1">(${arrvViewpointObjLst[k].userTypeName}观点/${strUserName}/${strYear})</span>，`;
          }
        }
      } else if (strVtypeId == '06') {
        arrvConceptObjLst = arrvConceptObjLst0.filter((x) => x.conceptId == strVId);
        for (let k = 0; k < arrvConceptObjLst.length; k++) {
          let strYear = arrvConceptObjLst[k].updDate;
          strYear = strYear.substring(0, 4);
          const strUserName = await vQxUsersSimStore.getUserName(arrvConceptObjLst[k].updUser);
          if (strUserName != '') {
            strhtml += `${arrvConceptObjLst[k].conceptName}<span class="rowtit color2">(相关概念/${strUserName}/${strYear})</span>，`;
          }
          //strhtml += '' + arrvConceptObjLst[k].conceptName + '<span class="rowtit color2">(相关概念/' + arrvConceptObjLst[k].userName + '/' + strYear + ')</span>，';
        }
      } else if (strVtypeId == '07' || strVtypeId == '08') {
        arrvTopicObjectiveObjLst = arrvTopicObjectiveObjLst0.filter(
          (x) => x.topicObjectiveId == strVId,
        );
        for (let k = 0; k < arrvTopicObjectiveObjLst.length; k++) {
          let strYear = arrvTopicObjectiveObjLst[k].updDate;
          strYear = strYear.substring(0, 4);
          //获取用户名；
          const strUserName = await vQxUsersSimStore.getUserName(
            arrvTopicObjectiveObjLst[k].updUser,
          );
          if (strUserName != '') {
            strhtml += `${arrvTopicObjectiveObjLst[k].objectiveName}<span class="rowtit color3">(${arrvTopicObjectiveObjLst[k].objectiveTypeName}/${strUserName}/${strYear})</span>，`;
          }

          //strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[相关' + arrvTopicObjectiveObjLst[k].objectiveTypeName + '关系]：</span>' + arrvTopicObjectiveObjLst[k].objectiveName + '';
        }
      } else if (strVtypeId == '09') {
        arrvSysSkillObjLst = arrvSysSkillObjLst0.filter((x) => x.skillId == strVId);
        for (let k = 0; k < arrvSysSkillObjLst.length; k++) {
          let strYear = arrvSysSkillObjLst[k].updDate;
          strYear = strYear.substring(0, 4);
          const strUserName = await vQxUsersSimStore.getUserName(arrvSysSkillObjLst[k].updUser);
          if (strUserName != '') {
            strhtml += `${arrvSysSkillObjLst[k].skillName}<span class="rowtit color4">(相关技能，${strUserName}，${strYear})</span>；`;
          }
          //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[相关技能关系]：</span>' + arrvSysSkillObjLst[k].skillName + '';
        }
      } else if (strVtypeId == '10') {
        arrvSysSocialRelationsObjLst = arrvSysSocialRelationsObjLst0.filter(
          (x) => x.socialId == strVId,
        );
        for (let k = 0; k < arrvSysSocialRelationsObjLst.length; k++) {
          let strYear = arrvSysSocialRelationsObjLst[k].updDate;
          strYear = strYear.substring(0, 4);
          const strUserName = await vQxUsersSimStore.getUserName(
            arrvSysSocialRelationsObjLst[k].updUser,
          );
          if (strUserName != '') {
            strhtml += `${arrvSysSocialRelationsObjLst[k].fullName}<span class="rowtit color5">(社会关系，${strUserName}，${strYear})</span>；`;
          }
          //strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[相关社会关系]：</span>' + arrvSysSocialRelationsObjLst[k].fullName + '';
        }
      }
    }
  } catch (e: any) {
    console.error('catch(e)=');
    console.error(e);
    const strMsg = `获取各个观点关系不成功,${e}.`;
    alert(strMsg);
  }

  return strhtml;
}
