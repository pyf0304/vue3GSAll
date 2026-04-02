/**
 * 各观点分类表(gs_VpClassification)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import {
  ObjectAssign,
  GetSortExpressInfo,
  BindDdl_ObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsgs_VpClassificationENEx } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationENEx';
import {
  gs_VpClassification_GetObjLstAsync,
  gs_VpClassification_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsgs_VpClassificationRelaEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationRelaEN';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { gs_VpClassificationRelaStore } from '@/store/modules/gs_VpClassificationRela';
import { GetBr_Empty, GetDiv_Empty, GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';

export const gs_VpClassificationExController = 'gs_VpClassificationExApi';
export const gs_VpClassificationEx_ConstructorName = 'gs_VpClassificationEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function gs_VpClassificationEx_GetWebApiUrl(
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
 * @param objgs_VpClassificationENS:源对象
 * @returns 目标对象=>clsgs_VpClassificationEN:objgs_VpClassificationENT
 **/
export function gs_VpClassificationEx_CopyToEx(
  objgs_VpClassificationENS: clsgs_VpClassificationEN,
): clsgs_VpClassificationENEx {
  const strThisFuncName = gs_VpClassificationEx_CopyToEx.name;
  const objgs_VpClassificationENT = new clsgs_VpClassificationENEx();
  try {
    ObjectAssign(objgs_VpClassificationENT, objgs_VpClassificationENS);
    return objgs_VpClassificationENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_VpClassificationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objgs_VpClassificationENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_VpClassificationEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_VpClassificationENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrgs_VpClassificationObjLst = await gs_VpClassification_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrgs_VpClassificationExObjLst = arrgs_VpClassificationObjLst.map(
    gs_VpClassificationEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsgs_VpClassificationEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrgs_VpClassificationExObjLst) {
      await gs_VpClassificationEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_VpClassificationExObjLst.length == 0) return arrgs_VpClassificationExObjLst;
  let arrgs_VpClassificationSel: Array<clsgs_VpClassificationENEx> = arrgs_VpClassificationExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_VpClassificationSel = arrgs_VpClassificationSel.sort(
        gs_VpClassificationEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_VpClassificationSel = arrgs_VpClassificationSel.sort(objPagerPara.sortFun);
    }
    arrgs_VpClassificationSel = arrgs_VpClassificationSel.slice(intStart, intEnd);
    return arrgs_VpClassificationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_VpClassificationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_VpClassificationENEx>();
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
export function gs_VpClassificationEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return gs_VpClassification_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return gs_VpClassification_SortFunByKey(strKey, AscOrDesc);
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
export function gs_VpClassificationEx_FuncMapByFldName(
  strFldName: string,
  objgs_VpClassificationEx: clsgs_VpClassificationENEx,
) {
  const strThisFuncName = gs_VpClassificationEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsgs_VpClassificationEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsgs_VpClassificationENEx.con_DateTimeSim:
      return gs_VpClassificationEx_FuncMapDateTimeSim(objgs_VpClassificationEx);
    case clsgs_VpClassificationENEx.con_TopicNames:
      return gs_VpClassificationEx_FuncMapTopicNames(objgs_VpClassificationEx);
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
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_gs_VpClassification_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function gs_VpClassificationEx_BindDdl_ClassificationIdInDiv(
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

//论文组
export async function gs_VpClassificationEx_BindDdl_ClassificationId(
  objDiv: HTMLDivElement,
  ddlClassificationId: string,
  strTopicId: string,
) {
  const strWhereCond = ` 1 = 1 and topicId='${strTopicId}' order by updDate Asc`;
  const objDdl = document.getElementById(ddlClassificationId);
  if (objDdl == null) {
    const strMsg = `下拉框：${ddlClassificationId} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }
  try {
    let arrObjLst_Sel: Array<clsgs_VpClassificationEN> = await gs_VpClassification_GetObjLstAsync(
      strWhereCond,
    );
    arrObjLst_Sel = arrObjLst_Sel.sort((x) =>
      x.GetFldValue(clsgs_VpClassificationEN.con_ClassificationId),
    );
    BindDdl_ObjLstInDivObj(
      objDiv,
      ddlClassificationId,
      arrObjLst_Sel,
      clsgs_VpClassificationEN.con_ClassificationId,
      clsgs_VpClassificationEN.con_ClassificationName,
      '观点分类',
    );
    console.log('完成BindDdl_gs_VpClassificationId!');
  } catch (e: any) {
    const strMsg = `根据条件获取主题分类的列表不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function gs_VpClassificationEx_FuncMapTopicNames(
  objgs_VpClassification: clsgs_VpClassificationENEx,
) {
  const strThisFuncName = gs_VpClassificationEx_FuncMapTopicNames.name;
  try {
    if (IsNullOrEmpty(objgs_VpClassification.topicNames) == true) {
      const gs_VpClassificationMenuId = objgs_VpClassification.classificationId;
      const arrFldNames = await gs_VpClassificationRelaStore.getTopicNames(
        gs_VpClassificationMenuId,
      );
      const divFldNames = GetDiv_Empty('');
      for (const strFldName of arrFldNames) {
        if (strFldName == '') continue;
        const spnFld = GetSpan_Empty('text-secondary');
        spnFld.innerHTML = strFldName;
        const brEmpty = GetBr_Empty();
        divFldNames.appendChild(spnFld);
        divFldNames.appendChild(brEmpty);
      }
      objgs_VpClassification.topicNames = divFldNames.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000486)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_VpClassificationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objgs_VpClassificationS:源对象
 **/
export async function gs_VpClassificationEx_FuncMapDateTimeSim(
  objgs_VpClassification: clsgs_VpClassificationENEx,
) {
  const strThisFuncName = gs_VpClassificationEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objgs_VpClassification.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objgs_VpClassification.updDate);
      objgs_VpClassification.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_VpClassificationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_VpClassificationEx_GetObjByName(
  strClassificationName: string,
): Promise<clsgs_VpClassificationEN | null> {
  const strThisFuncName = 'gs_VpClassificationEx_GetObjByName';
  const strWhere = `${clsgs_VpClassificationEN.con_ClassificationName} = '${strClassificationName}'`;
  const arrgs_VpClassificationObjLst = await gs_VpClassification_GetObjLstAsync(strWhere);
  if (arrgs_VpClassificationObjLst.length == 0) return null;
  return arrgs_VpClassificationObjLst[0];
}
