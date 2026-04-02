/**
 * 类名:clsvgs_PSkillRelaExWApi
 * 表名:vgs_PSkillRela(01120666)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/05 01:03:03
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
 * 论文技能关系视图(vgs_PSkillRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月05日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  vgs_PSkillRela_GetObjLstAsync,
  vgs_PSkillRela_SortFunByKey,
  vgs_PSkillRela_FilterFunByKey,
} from '@/ts/L3ForWApi/GradEduPaper/clsvgs_PSkillRelaWApi';
import { clsvgs_PSkillRelaENEx } from '@/ts/L0Entity/GradEduPaper/clsvgs_PSkillRelaENEx';
import { clsvgs_PSkillRelaEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PSkillRelaEN';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const vgs_PSkillRelaEx_Controller = 'vgs_PSkillRelaExApi';
export const vgs_PSkillRelaEx_ConstructorName = 'vgs_PSkillRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vgs_PSkillRelaEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvgs_PSkillRelaENS:源对象
 * @returns 目标对象=>clsvgs_PSkillRelaEN:objvgs_PSkillRelaENT
 **/
export function vgs_PSkillRelaEx_CopyToEx(
  objvgs_PSkillRelaENS: clsvgs_PSkillRelaEN,
): clsvgs_PSkillRelaENEx {
  const strThisFuncName = vgs_PSkillRelaEx_CopyToEx.name;
  const objvgs_PSkillRelaENT = new clsvgs_PSkillRelaENEx();
  try {
    ObjectAssign(objvgs_PSkillRelaENT, objvgs_PSkillRelaENS);
    return objvgs_PSkillRelaENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vgs_PSkillRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvgs_PSkillRelaENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vgs_PSkillRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvgs_PSkillRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvgs_PSkillRelaObjLst = await vgs_PSkillRela_GetObjLstAsync(objPagerPara.whereCond);
  const arrvgs_PSkillRelaExObjLst = arrvgs_PSkillRelaObjLst.map(vgs_PSkillRelaEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvgs_PSkillRelaExObjLst) {
      await vgs_PSkillRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvgs_PSkillRelaExObjLst.length == 0) return arrvgs_PSkillRelaExObjLst;
  let arrvgs_PSkillRela_Sel: Array<clsvgs_PSkillRelaENEx> = arrvgs_PSkillRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvgs_PSkillRela_Sel = arrvgs_PSkillRela_Sel.sort(
        vgs_PSkillRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvgs_PSkillRela_Sel = arrvgs_PSkillRela_Sel.sort(objPagerPara.sortFun);
    }
    arrvgs_PSkillRela_Sel = arrvgs_PSkillRela_Sel.slice(intStart, intEnd);
    return arrvgs_PSkillRela_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vgs_PSkillRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_PSkillRelaENEx>();
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
export function vgs_PSkillRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vgs_PSkillRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vgs_PSkillRela_SortFunByKey(strKey, AscOrDesc);
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
export function vgs_PSkillRelaEx_FuncMapByFldName(
  strFldName: string,
  objvgs_PSkillRelaEx: clsvgs_PSkillRelaENEx,
) {
  const strThisFuncName = vgs_PSkillRelaEx_FuncMapByFldName.name;
  console.log(objvgs_PSkillRelaEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvgs_PSkillRelaEN.AttributeName;
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
export async function vgs_PSkillRelaEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return vgs_PSkillRela_FilterFunByKey(strKey, value);
  }
}
