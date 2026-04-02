/**
* 类名:clsvPaperCount2ExWApi
* 表名:vPaperCount2(01120596)
* 生成代码版本:2022.11.02.1
* 生成日期:2022/11/05 23:37:11
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
 * vPaperCount2(vPaperCount2)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月05日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  vPaperCount2_GetObjLstAsync,
  vPaperCount2_SortFunByKey,
  vPaperCount2_FilterFunByKey,
} from '@/ts/L3ForWApi/GradEduPaper/clsvPaperCount2WApi';

import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { clsvPaperCount2ENEx } from '@/ts/L0Entity/GradEduPaper/clsvPaperCount2ENEx';

import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvPaperCount2EN } from '@/ts/L0Entity/GradEduPaper/clsvPaperCount2EN';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const vPaperCount2Ex_Controller = 'vPaperCount2ExApi';
export const vPaperCount2Ex_ConstructorName = 'vPaperCount2Ex';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vPaperCount2Ex_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvPaperCount2ENS:源对象
 * @returns 目标对象=>clsvPaperCount2EN:objvPaperCount2ENT
 **/
export function vPaperCount2Ex_CopyToEx(
  objvPaperCount2ENS: clsvPaperCount2EN,
): clsvPaperCount2ENEx {
  const strThisFuncName = vPaperCount2Ex_CopyToEx.name;
  const objvPaperCount2ENT = new clsvPaperCount2ENEx();
  try {
    ObjectAssign(objvPaperCount2ENT, objvPaperCount2ENS);
    return objvPaperCount2ENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vPaperCount2Ex_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvPaperCount2ENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vPaperCount2Ex_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPaperCount2ENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvPaperCount2ObjLst = await vPaperCount2_GetObjLstAsync(objPagerPara.whereCond);
  const arrvPaperCount2ExObjLst = arrvPaperCount2ObjLst.map(vPaperCount2Ex_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvPaperCount2ExObjLst) {
      await vPaperCount2Ex_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvPaperCount2ExObjLst.length == 0) return arrvPaperCount2ExObjLst;
  let arrvPaperCount2_Sel: Array<clsvPaperCount2ENEx> = arrvPaperCount2ExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPaperCount2_Sel = arrvPaperCount2_Sel.sort(
        vPaperCount2Ex_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvPaperCount2_Sel = arrvPaperCount2_Sel.sort(objPagerPara.sortFun);
    }
    arrvPaperCount2_Sel = arrvPaperCount2_Sel.slice(intStart, intEnd);
    return arrvPaperCount2_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPaperCount2Ex_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPaperCount2ENEx>();
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
export function vPaperCount2Ex_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vPaperCount2_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vPaperCount2_SortFunByKey(strKey, AscOrDesc);
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
export function vPaperCount2Ex_FuncMapByFldName(
  strFldName: string,
  objvPaperCount2Ex: clsvPaperCount2ENEx,
) {
  const strThisFuncName = vPaperCount2Ex_FuncMapByFldName.name;
  console.log(objvPaperCount2Ex);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvPaperCount2EN.AttributeName;
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
export async function vPaperCount2Ex_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return vPaperCount2_FilterFunByKey(strKey, value);
  }
}
