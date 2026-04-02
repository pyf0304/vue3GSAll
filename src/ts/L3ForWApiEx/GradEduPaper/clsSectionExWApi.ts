/**
 * 类名:clsSectionExWApi
 * 表名:Section(01120558)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/05 01:04:22
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 论文节表(Section)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月05日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  Section_GetObjLstAsync,
  Section_SortFunByKey,
  Section_FilterFunByKey,
} from '@/ts/L3ForWApi/GradEduPaper/clsSectionWApi';
import { clsSectionENEx } from '@/ts/L0Entity/GradEduPaper/clsSectionENEx';
import { clsSectionEN } from '@/ts/L0Entity/GradEduPaper/clsSectionEN';
import { BindDdl_ObjLst, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const sectionEx_Controller = 'SectionExApi';
export const sectionEx_ConstructorName = 'sectionEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function SectionEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objSectionENS:源对象
 * @returns 目标对象=>clsSectionEN:objSectionENT
 **/
export function SectionEx_CopyToEx(objSectionENS: clsSectionEN): clsSectionENEx {
  const strThisFuncName = SectionEx_CopyToEx.name;
  const objSectionENT = new clsSectionENEx();
  try {
    ObjectAssign(objSectionENT, objSectionENS);
    return objSectionENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      sectionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objSectionENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function SectionEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSectionENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrSectionObjLst = await Section_GetObjLstAsync(objPagerPara.whereCond);
  const arrSectionExObjLst = arrSectionObjLst.map(SectionEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrSectionExObjLst) {
      await SectionEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrSectionExObjLst.length == 0) return arrSectionExObjLst;
  let arrSection_Sel: Array<clsSectionENEx> = arrSectionExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSection_Sel = arrSection_Sel.sort(SectionEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrSection_Sel = arrSection_Sel.sort(objPagerPara.sortFun);
    }
    arrSection_Sel = arrSection_Sel.slice(intStart, intEnd);
    return arrSection_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sectionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSectionENEx>();
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
export function SectionEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return Section_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return Section_SortFunByKey(strKey, AscOrDesc);
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
export function SectionEx_FuncMapByFldName(strFldName: string, objSectionEx: clsSectionENEx) {
  const strThisFuncName = SectionEx_FuncMapByFldName.name;
  console.log(objSectionEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsSectionEN.AttributeName;
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
export async function SectionEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return Section_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 为下拉框获取数据,从表:[Section]中获取
/// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
/// </summary>
/// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
export async function SectionEx_BindDdl_SectionId(ddlSectionId: string, strPaperId: string) {
  const strWhereCond = ` 1 =1 and paperId='${strPaperId}'`;
  const objDdl = document.getElementById(ddlSectionId);
  if (objDdl == null) {
    const strMsg = `下拉框：${ddlSectionId} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }

  try {
    const arrSectionObjLst = await Section_GetObjLstAsync(strWhereCond);
    BindDdl_ObjLst(
      ddlSectionId,
      arrSectionObjLst,
      clsSectionEN.con_SectionId,
      clsSectionEN.con_SectionName,
      '论文节',
    );
  } catch (e: any) {
    const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
  }
}
export async function SectionEx_GetObjListByPaperId(
  strPaperId: string,
): Promise<Array<clsSectionEN> | null> {
  const strWhereCond = ` 1 =1 and paperId='${strPaperId}'`;

  try {
    const arrSectionObjLst = await Section_GetObjLstAsync(strWhereCond);
    return arrSectionObjLst;
  } catch (e: any) {
    const strMsg = `根据条件获取相应的记录对象列表不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
    return null;
  }
}
