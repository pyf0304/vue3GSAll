/**
 * 类名:clsXzMajorDirectionExWApi
 * 表名:XzMajorDirection(01120552)
 * 版本:2023.08.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/26 15:24:36
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 专业方向(XzMajorDirection)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年08月26日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  XzMajorDirection_GetObjLstCache,
  XzMajorDirection_GetObjLstAsync,
  XzMajorDirection_SortFunByKey,
  XzMajorDirection_FilterFunByKey,
} from '@/ts/L3ForWApi/BaseInfo/clsXzMajorDirectionWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsXzMajorDirectionEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorDirectionEN';
import { clsXzMajorDirectionENEx } from '@/ts/L0Entity/BaseInfo/clsXzMajorDirectionENEx';
import { XzMajor_func, XzMajor_funcKey } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const xzMajorDirectionExController = 'XzMajorDirectionExApi';
export const xzMajorDirectionEx_ConstructorName = 'xzMajorDirectionEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function XzMajorDirectionEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objXzMajorDirectionENS:源对象
 * @returns 目标对象=>clsXzMajorDirectionEN:objXzMajorDirectionENT
 **/
export function XzMajorDirectionEx_CopyToEx(
  objXzMajorDirectionENS: clsXzMajorDirectionEN,
): clsXzMajorDirectionENEx {
  const strThisFuncName = XzMajorDirectionEx_CopyToEx.name;
  const objXzMajorDirectionENT = new clsXzMajorDirectionENEx();
  try {
    ObjectAssign(objXzMajorDirectionENT, objXzMajorDirectionENS);
    return objXzMajorDirectionENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      xzMajorDirectionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objXzMajorDirectionENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function XzMajorDirectionEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdXzMajor: string,
): Promise<Array<clsXzMajorDirectionENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrXzMajorDirectionObjLst = await XzMajorDirection_GetObjLstCache(strIdXzMajor);
  const arrXzMajorDirectionExObjLst = arrXzMajorDirectionObjLst.map(XzMajorDirectionEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsXzMajorDirectionEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrXzMajorDirectionExObjLst) {
      await XzMajorDirectionEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrXzMajorDirectionExObjLst.length == 0) return arrXzMajorDirectionExObjLst;
  let arrXzMajorDirectionSel: Array<clsXzMajorDirectionENEx> = arrXzMajorDirectionExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objXzMajorDirectionCond = new clsXzMajorDirectionENEx();
  ObjectAssign(objXzMajorDirectionCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsXzMajorDirectionWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzMajorDirectionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrXzMajorDirectionSel = arrXzMajorDirectionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrXzMajorDirectionSel.length == 0) return arrXzMajorDirectionSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzMajorDirectionSel = arrXzMajorDirectionSel.sort(
        XzMajorDirectionEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzMajorDirectionSel = arrXzMajorDirectionSel.sort(objPagerPara.sortFun);
    }
    arrXzMajorDirectionSel = arrXzMajorDirectionSel.slice(intStart, intEnd);
    return arrXzMajorDirectionSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzMajorDirectionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzMajorDirectionENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function XzMajorDirectionEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzMajorDirectionENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrXzMajorDirectionObjLst = await XzMajorDirection_GetObjLstAsync(objPagerPara.whereCond);
  const arrXzMajorDirectionExObjLst = arrXzMajorDirectionObjLst.map(XzMajorDirectionEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsXzMajorDirectionEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrXzMajorDirectionExObjLst) {
      await XzMajorDirectionEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrXzMajorDirectionExObjLst.length == 0) return arrXzMajorDirectionExObjLst;
  let arrXzMajorDirectionSel: Array<clsXzMajorDirectionENEx> = arrXzMajorDirectionExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzMajorDirectionSel = arrXzMajorDirectionSel.sort(
        XzMajorDirectionEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzMajorDirectionSel = arrXzMajorDirectionSel.sort(objPagerPara.sortFun);
    }
    arrXzMajorDirectionSel = arrXzMajorDirectionSel.slice(intStart, intEnd);
    return arrXzMajorDirectionSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzMajorDirectionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzMajorDirectionENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objXzMajorDirectionS:源对象
 **/
export async function XzMajorDirectionEx_FuncMapMajorName(
  objXzMajorDirection: clsXzMajorDirectionENEx,
) {
  const strThisFuncName = XzMajorDirectionEx_FuncMapMajorName.name;
  try {
    if (IsNullOrEmpty(objXzMajorDirection.majorName) == true) {
      const XzMajoridXzMajor = objXzMajorDirection.idXzMajor;
      const XzMajorMajorName = await XzMajor_func(
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        XzMajoridXzMajor,
      );
      objXzMajorDirection.majorName = XzMajorMajorName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000426)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      xzMajorDirectionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-08-26
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function XzMajorDirectionEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsXzMajorDirectionENEx.con_MajorName:
        return (a: clsXzMajorDirectionENEx, b: clsXzMajorDirectionENEx) => {
          return a.majorName.localeCompare(b.majorName);
        };
      default:
        return XzMajorDirection_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsXzMajorDirectionENEx.con_MajorName:
        return (a: clsXzMajorDirectionENEx, b: clsXzMajorDirectionENEx) => {
          return b.majorName.localeCompare(a.majorName);
        };
      default:
        return XzMajorDirection_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-08-26
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function XzMajorDirectionEx_FuncMapByFldName(
  strFldName: string,
  objXzMajorDirectionEx: clsXzMajorDirectionENEx,
) {
  const strThisFuncName = XzMajorDirectionEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsXzMajorDirectionEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsXzMajorDirectionENEx.con_MajorName:
      return XzMajorDirectionEx_FuncMapMajorName(objXzMajorDirectionEx);
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
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-08-26
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function XzMajorDirectionEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsXzMajorDirectionENEx.con_MajorName:
      return (obj: clsXzMajorDirectionENEx) => {
        return obj.majorName === value;
      };
    default:
      return XzMajorDirection_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objXzMajorDirectionS:源对象
 **/
export async function XzMajorDirectionEx_FuncMapKeyMajorName(
  objXzMajorDirection: clsXzMajorDirectionENEx,
): Promise<Array<string>> {
  const strThisFuncName = XzMajorDirectionEx_FuncMapKeyMajorName.name;
  try {
    if (IsNullOrEmpty(objXzMajorDirection.majorName) == true) return [];
    const XzMajorMajorName = objXzMajorDirection.majorName;
    const arrIdXzMajor = await XzMajor_funcKey(
      clsXzMajorEN.con_MajorName,
      XzMajorMajorName,
      enumComparisonOp.Like_03,
    );
    return arrIdXzMajor;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000426)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      xzMajorDirectionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
