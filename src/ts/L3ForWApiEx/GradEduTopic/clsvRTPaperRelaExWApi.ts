/**
* 类名:clsvRTPaperRelaExWApi
* 表名:vRTPaperRela(01120583)
* 生成代码版本:2022.11.02.1
* 生成日期:2022/11/02 14:49:02
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
 * vRTPaperRela(vRTPaperRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月02日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  vRTPaperRela_GetObjLstAsync,
  vRTPaperRela_SortFunByKey,
  vRTPaperRela_FilterFunByKey,
  vRTPaperRela_GetObjLstCache,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTPaperRelaWApi';

import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clsvRTPaperRelaENEx } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaENEx';

import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const vRTPaperRelaEx_Controller = 'vRTPaperRelaExApi';
export const vRTPaperRelaEx_ConstructorName = 'vRTPaperRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vRTPaperRelaEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvRTPaperRelaENS:源对象
 * @returns 目标对象=>clsvRTPaperRelaEN:objvRTPaperRelaENT
 **/
export function vRTPaperRelaEx_CopyToEx(
  objvRTPaperRelaENS: clsvRTPaperRelaEN,
): clsvRTPaperRelaENEx {
  const strThisFuncName = vRTPaperRelaEx_CopyToEx.name;
  const objvRTPaperRelaENT = new clsvRTPaperRelaENEx();
  try {
    ObjectAssign(objvRTPaperRelaENT, objvRTPaperRelaENS);
    return objvRTPaperRelaENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vRTPaperRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvRTPaperRelaENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vRTPaperRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvRTPaperRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvRTPaperRelaObjLst = await vRTPaperRela_GetObjLstAsync(objPagerPara.whereCond);
  const arrvRTPaperRelaExObjLst = arrvRTPaperRelaObjLst.map(vRTPaperRelaEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvRTPaperRelaExObjLst) {
      await vRTPaperRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvRTPaperRelaExObjLst.length == 0) return arrvRTPaperRelaExObjLst;
  let arrvRTPaperRela_Sel: Array<clsvRTPaperRelaENEx> = arrvRTPaperRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvRTPaperRela_Sel = arrvRTPaperRela_Sel.sort(
        vRTPaperRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvRTPaperRela_Sel = arrvRTPaperRela_Sel.sort(objPagerPara.sortFun);
    }
    arrvRTPaperRela_Sel = arrvRTPaperRela_Sel.slice(intStart, intEnd);
    return arrvRTPaperRela_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vRTPaperRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvRTPaperRelaENEx>();
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
export function vRTPaperRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvRTPaperRelaENEx.con_UserName:
        return (a: clsvRTPaperRelaENEx, b: clsvRTPaperRelaENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      default:
        return vRTPaperRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsvRTPaperRelaENEx.con_UserName:
        return (a: clsvRTPaperRelaENEx, b: clsvRTPaperRelaENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      default:
        return vRTPaperRela_SortFunByKey(strKey, AscOrDesc);
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
export function vRTPaperRelaEx_FuncMapByFldName(
  strFldName: string,
  objvRTPaperRelaEx: clsvRTPaperRelaENEx,
) {
  const strThisFuncName = vRTPaperRelaEx_FuncMapByFldName.name;
  console.log(objvRTPaperRelaEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvRTPaperRelaEN.AttributeName;
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
export async function vRTPaperRelaEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    case clsvRTPaperRelaENEx.con_UserName:
      return (obj: clsvRTPaperRelaENEx) => {
        return obj.userName === value;
      };
    default:
      return vRTPaperRela_FilterFunByKey(strKey, value);
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vRTPaperRelaEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvRTPaperRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrvRTPaperRelaObjLst = await vRTPaperRela_GetObjLstCache();
  const arrvRTPaperRelaExObjLst = arrvRTPaperRelaObjLst.map(vRTPaperRelaEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvRTPaperRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrvRTPaperRelaExObjLst) {
      await vRTPaperRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvRTPaperRelaExObjLst.length == 0) return arrvRTPaperRelaExObjLst;
  let arrvRTPaperRelaSel: Array<clsvRTPaperRelaENEx> = arrvRTPaperRelaExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvRTPaperRelaCond = new clsvRTPaperRelaENEx();
  ObjectAssign(objvRTPaperRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvRTPaperRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTPaperRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvRTPaperRelaSel.length == 0) return arrvRTPaperRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvRTPaperRelaSel = arrvRTPaperRelaSel.sort(
        vRTPaperRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvRTPaperRelaSel = arrvRTPaperRelaSel.sort(objPagerPara.sortFun);
    }
    arrvRTPaperRelaSel = arrvRTPaperRelaSel.slice(intStart, intEnd);
    return arrvRTPaperRelaSel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vRTPaperRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvRTPaperRelaENEx>();
}

export function vRTPaperRelaEx_SortByPaperTypeTitle(a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN): number {
  if (a.paperTypeId == b.paperTypeId) return a.paperTitle.localeCompare(b.paperTitle);
  else return a.paperTypeId.localeCompare(b.paperTypeId);
}