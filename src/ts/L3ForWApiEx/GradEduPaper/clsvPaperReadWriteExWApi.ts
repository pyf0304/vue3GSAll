/**
* 类名:clsvPaperReadWriteExWApi
* 表名:vPaperReadWrite(01120550)
* 生成代码版本:2022.11.02.1
* 生成日期:2022/11/02 15:20:43
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
 * v论文读写表(vPaperReadWrite)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月02日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  vPaperReadWrite_GetObjLstCache,
  vPaperReadWrite_GetObjLstAsync,
  vPaperReadWrite_SortFunByKey,
  vPaperReadWrite_FilterFunByKey,
} from '@/ts/L3ForWApi/GradEduPaper/clsvPaperReadWriteWApi';
import { clsvPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperReadWriteEN';
import { clsvPaperReadWriteENEx } from '@/ts/L0Entity/GradEduPaper/clsvPaperReadWriteENEx';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

export const vPaperReadWriteEx_Controller = 'vPaperReadWriteExApi';
export const vPaperReadWriteEx_ConstructorName = 'vPaperReadWriteEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vPaperReadWriteEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvPaperReadWriteENS:源对象
 * @returns 目标对象=>clsvPaperReadWriteEN:objvPaperReadWriteENT
 **/
export function vPaperReadWriteEx_CopyToEx(
  objvPaperReadWriteENS: clsvPaperReadWriteEN,
): clsvPaperReadWriteENEx {
  const strThisFuncName = vPaperReadWriteEx_CopyToEx.name;
  const objvPaperReadWriteENT = new clsvPaperReadWriteENEx();
  try {
    ObjectAssign(objvPaperReadWriteENT, objvPaperReadWriteENS);
    return objvPaperReadWriteENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vPaperReadWriteEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvPaperReadWriteENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vPaperReadWriteEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
): Promise<Array<clsvPaperReadWriteENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrvPaperReadWriteObjLst = await vPaperReadWrite_GetObjLstCache(strIdCurrEducls);
  const arrvPaperReadWriteExObjLst = arrvPaperReadWriteObjLst.map(vPaperReadWriteEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvPaperReadWriteExObjLst) {
      await vPaperReadWriteEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvPaperReadWriteExObjLst.length == 0) return arrvPaperReadWriteExObjLst;
  let arrvPaperReadWrite_Sel: Array<clsvPaperReadWriteENEx> = arrvPaperReadWriteExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objvPaperReadWrite_Cond = new clsvPaperReadWriteENEx();
  ObjectAssign(objvPaperReadWrite_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsvPaperReadWriteWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPaperReadWrite_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPaperReadWrite_Sel.length == 0) return arrvPaperReadWrite_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.sort(
        vPaperReadWriteEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.sort(objPagerPara.sortFun);
    }
    arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.slice(intStart, intEnd);
    return arrvPaperReadWrite_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPaperReadWriteEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPaperReadWriteENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vPaperReadWriteEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPaperReadWriteENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvPaperReadWriteObjLst = await vPaperReadWrite_GetObjLstAsync(objPagerPara.whereCond);
  const arrvPaperReadWriteExObjLst = arrvPaperReadWriteObjLst.map(vPaperReadWriteEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvPaperReadWriteExObjLst) {
      await vPaperReadWriteEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvPaperReadWriteExObjLst.length == 0) return arrvPaperReadWriteExObjLst;
  let arrvPaperReadWrite_Sel: Array<clsvPaperReadWriteENEx> = arrvPaperReadWriteExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.sort(
        vPaperReadWriteEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.sort(objPagerPara.sortFun);
    }
    arrvPaperReadWrite_Sel = arrvPaperReadWrite_Sel.slice(intStart, intEnd);
    return arrvPaperReadWrite_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPaperReadWriteEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPaperReadWriteENEx>();
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
export function vPaperReadWriteEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvPaperReadWriteENEx.con_UserName:
        return (a: clsvPaperReadWriteENEx, b: clsvPaperReadWriteENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      default:
        return vPaperReadWrite_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsvPaperReadWriteENEx.con_UserName:
        return (a: clsvPaperReadWriteENEx, b: clsvPaperReadWriteENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      default:
        return vPaperReadWrite_SortFunByKey(strKey, AscOrDesc);
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
export function vPaperReadWriteEx_FuncMapByFldName(
  strFldName: string,
  objvPaperReadWriteEx: clsvPaperReadWriteENEx,
) {
  const strThisFuncName = vPaperReadWriteEx_FuncMapByFldName.name;
  console.log(objvPaperReadWriteEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvPaperReadWriteEN.AttributeName;
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
export async function vPaperReadWriteEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    case clsvPaperReadWriteENEx.con_UserName:
      return (obj: clsvPaperReadWriteENEx) => {
        return obj.userName === value;
      };
    default:
      return vPaperReadWrite_FilterFunByKey(strKey, value);
  }
}
