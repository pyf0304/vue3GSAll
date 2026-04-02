/**
 * 类名:clsgs_VpClassificationRelaExWApi
 * 表名:gs_VpClassificationRela(01120777)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 01:03:33
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 观点分类主题关系表(gs_VpClassificationRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import {
  ObjectAssign,
  GetSortExpressInfo,
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  gs_VpClassificationRela_GetObjLstCache,
  gs_VpClassificationRela_GetObjLstAsync,
  gs_VpClassificationRela_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationRelaWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsgs_VpClassificationRelaEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationRelaEN';
import { clsgs_VpClassificationRelaENEx } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationRelaENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import { ResearchTopic_funcKey } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import {
  gs_VpClassification_GetObjLstAsync,
  gs_VpClassification_funcKey,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationWApi';

export const gs_VpClassificationRelaExController = 'gs_VpClassificationRelaExApi';
export const gs_VpClassificationRelaEx_ConstructorName = 'gs_VpClassificationRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function gs_VpClassificationRelaEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * @param objgs_VpClassificationRelaENS:源对象
 * @returns 目标对象=>clsgs_VpClassificationRelaEN:objgs_VpClassificationRelaENT
 **/
export function gs_VpClassificationRelaEx_CopyToEx(
  objgs_VpClassificationRelaENS: clsgs_VpClassificationRelaEN,
): clsgs_VpClassificationRelaENEx {
  const strThisFuncName = gs_VpClassificationRelaEx_CopyToEx.name;
  const objgs_VpClassificationRelaENT = new clsgs_VpClassificationRelaENEx();
  try {
    ObjectAssign(objgs_VpClassificationRelaENT, objgs_VpClassificationRelaENS);
    return objgs_VpClassificationRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_VpClassificationRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objgs_VpClassificationRelaENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_VpClassificationRelaEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strTopicId: string,
): Promise<Array<clsgs_VpClassificationRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrgs_VpClassificationRelaObjLst = await gs_VpClassificationRela_GetObjLstCache(strTopicId);
  const arrgs_VpClassificationRelaExObjLst = arrgs_VpClassificationRelaObjLst.map(
    gs_VpClassificationRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsgs_VpClassificationRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrgs_VpClassificationRelaExObjLst) {
      await gs_VpClassificationRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_VpClassificationRelaExObjLst.length == 0) return arrgs_VpClassificationRelaExObjLst;
  let arrgs_VpClassificationRelaSel: Array<clsgs_VpClassificationRelaENEx> =
    arrgs_VpClassificationRelaExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_VpClassificationRelaCond = new clsgs_VpClassificationRelaENEx();
  ObjectAssign(objgs_VpClassificationRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_VpClassificationRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_VpClassificationRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_VpClassificationRelaSel.length == 0) return arrgs_VpClassificationRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.sort(
        gs_VpClassificationRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.sort(objPagerPara.sortFun);
    }
    arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.slice(intStart, intEnd);
    return arrgs_VpClassificationRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_VpClassificationRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_VpClassificationRelaENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_VpClassificationRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_VpClassificationRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrgs_VpClassificationRelaObjLst = await gs_VpClassificationRela_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrgs_VpClassificationRelaExObjLst = arrgs_VpClassificationRelaObjLst.map(
    gs_VpClassificationRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsgs_VpClassificationRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrgs_VpClassificationRelaExObjLst) {
      await gs_VpClassificationRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_VpClassificationRelaExObjLst.length == 0) return arrgs_VpClassificationRelaExObjLst;
  let arrgs_VpClassificationRelaSel: Array<clsgs_VpClassificationRelaENEx> =
    arrgs_VpClassificationRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.sort(
        gs_VpClassificationRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.sort(objPagerPara.sortFun);
    }
    arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.slice(intStart, intEnd);
    return arrgs_VpClassificationRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_VpClassificationRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_VpClassificationRelaENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function gs_VpClassificationRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return gs_VpClassificationRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return gs_VpClassificationRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function gs_VpClassificationRelaEx_FuncMapByFldName(
  strFldName: string,
  objgs_VpClassificationRelaEx: clsgs_VpClassificationRelaENEx,
) {
  const strThisFuncName = gs_VpClassificationRelaEx_FuncMapByFldName.name;
  console.log(objgs_VpClassificationRelaEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsgs_VpClassificationRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

export async function gs_VpClassificationRelaEx_GetObjLstByTopicId(
  strTopicId: string,
): Promise<Array<clsgs_VpClassificationRelaEN>> {
  // const strThisFuncName = gs_VpClassificationRelaEx_GetTopicIdLstByUserId.name;
  const strWhere = `${clsgs_VpClassificationRelaEN.con_TopicId} = '${strTopicId}'`;
  const arrgs_VpClassificationRela = await gs_VpClassificationRela_GetObjLstAsync(strWhere);

  return arrgs_VpClassificationRela;
}

export async function gs_VpClassificationRelaEx_GetObjLstByClassificationId(
  intClassificationId: number,
): Promise<Array<clsgs_VpClassificationRelaEN>> {
  // const strThisFuncName = gs_VpClassificationRelaEx_GetTopicIdLstByUserId.name;
  const strWhere = `${clsgs_VpClassificationRelaEN.con_ClassificationId} = ${intClassificationId}`;
  const arrgs_VpClassificationRela = await gs_VpClassificationRela_GetObjLstAsync(strWhere);

  return arrgs_VpClassificationRela;
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objgs_VpClassificationRelaS:源对象
 **/
export async function gs_VpClassificationRelaEx_FuncMapKeyClassificationName(
  objgs_VpClassificationRela: clsgs_VpClassificationRelaENEx,
): Promise<Array<number>> {
  const strThisFuncName = gs_VpClassificationRelaEx_FuncMapKeyClassificationName.name;
  try {
    if (IsNullOrEmpty(objgs_VpClassificationRela.classificationName) == true) return [];
    const gsVpClassificationClassificationName = objgs_VpClassificationRela.classificationName;
    const arrClassificationId = await gs_VpClassification_funcKey(
      clsgs_VpClassificationEN.con_ClassificationName,
      gsVpClassificationClassificationName,
      enumComparisonOp.Like_03,
    );
    return arrClassificationId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000489)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_VpClassificationRelaEx_ConstructorName,
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
 * @param objgs_VpClassificationRelaS:源对象
 **/
export async function gs_VpClassificationRelaEx_FuncMapKeyTopicName(
  objgs_VpClassificationRela: clsgs_VpClassificationRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = gs_VpClassificationRelaEx_FuncMapKeyTopicName.name;
  try {
    if (IsNullOrEmpty(objgs_VpClassificationRela.topicName) == true) return [];
    const ResearchTopicTopicName = objgs_VpClassificationRela.topicName;
    const arrTopicId = await ResearchTopic_funcKey(
      clsResearchTopicEN.con_TopicName,
      ResearchTopicTopicName,
      objgs_VpClassificationRela.idCurrEduCls,
      enumComparisonOp.Like_03,
    );
    return arrTopicId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000490)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_VpClassificationRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export async function gs_VpClassificationRelaEx_BindDdl_ClassificationIdByTopicIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strTopicId: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ClassificationIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ClassificationIdInDivCache");
  const strCondition = `1=1 and ${clsgs_VpClassificationEN.con_ClassificationId} in (select ${clsgs_VpClassificationEN.con_ClassificationId} from ${clsgs_VpClassificationRelaEN._CurrTabName} where ${clsgs_VpClassificationRelaEN.con_TopicId} = '${strTopicId}')`;
  const arrObjLstSel = await gs_VpClassification_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsgs_VpClassificationEN.con_ClassificationId,
    clsgs_VpClassificationEN.con_ClassificationName,
    '各观点分类表',
  );
}
