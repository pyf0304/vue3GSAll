/**
 * 类名:clsQxPotenceTypeExWApi
 * 表名:QxPotenceType(00140003)
 * 版本:2024.01.16.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/20 11:58:56
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:权限管理(PotenceMan)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 权限类型(QxPotenceType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年01月20日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  QxPotenceType_GetObjLstCache,
  QxPotenceType_GetObjLstAsync,
  QxPotenceType_SortFunByKey,
} from '@/ts/L3ForWApi/PotenceMan/clsQxPotenceTypeWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxPotenceTypeEN } from '@/ts/L0Entity/PotenceMan/clsQxPotenceTypeEN';
import { clsQxPotenceTypeENEx } from '@/ts/L0Entity/PotenceMan/clsQxPotenceTypeENEx';
import {
  QxFuncModule_func,
  QxFuncModule_funcKey,
} from '@/ts/L3ForWApi/PrjManage_GP/clsQxFuncModuleWApi';
import { clsQxFuncModuleEN } from '@/ts/L0Entity/PrjManage_GP/clsQxFuncModuleEN';
import {
  QxPrjMenus_func,
  QxPrjMenus_funcKey,
} from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const qxPotenceTypeExController = 'QxPotenceTypeExApi';
export const qxPotenceTypeEx_ConstructorName = 'qxPotenceTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxPotenceTypeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxPotenceTypeENS:源对象
 * @returns 目标对象=>clsQxPotenceTypeEN:objQxPotenceTypeENT
 **/
export function QxPotenceTypeEx_CopyToEx(
  objQxPotenceTypeENS: clsQxPotenceTypeEN,
): clsQxPotenceTypeENEx {
  const strThisFuncName = QxPotenceTypeEx_CopyToEx.name;
  const objQxPotenceTypeENT = new clsQxPotenceTypeENEx();
  try {
    ObjectAssign(objQxPotenceTypeENT, objQxPotenceTypeENS);
    return objQxPotenceTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPotenceTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxPotenceTypeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxPotenceTypeEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxPotenceTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrQxPotenceTypeObjLst = await QxPotenceType_GetObjLstCache();
  const arrQxPotenceTypeExObjLst = arrQxPotenceTypeObjLst.map(QxPotenceTypeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxPotenceTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxPotenceTypeExObjLst) {
      await QxPotenceTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxPotenceTypeExObjLst.length == 0) return arrQxPotenceTypeExObjLst;
  let arrQxPotenceTypeSel: Array<clsQxPotenceTypeENEx> = arrQxPotenceTypeExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objQxPotenceTypeCond = new clsQxPotenceTypeENEx();
  ObjectAssign(objQxPotenceTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsQxPotenceTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxPotenceTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQxPotenceTypeSel.length == 0) return arrQxPotenceTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxPotenceTypeSel = arrQxPotenceTypeSel.sort(
        QxPotenceTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxPotenceTypeSel = arrQxPotenceTypeSel.sort(objPagerPara.sortFun);
    }
    arrQxPotenceTypeSel = arrQxPotenceTypeSel.slice(intStart, intEnd);
    return arrQxPotenceTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxPotenceTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxPotenceTypeENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxPotenceTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxPotenceTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxPotenceTypeObjLst = await QxPotenceType_GetObjLstAsync(objPagerPara.whereCond);
  const arrQxPotenceTypeExObjLst = arrQxPotenceTypeObjLst.map(QxPotenceTypeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxPotenceTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxPotenceTypeExObjLst) {
      await QxPotenceTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxPotenceTypeExObjLst.length == 0) return arrQxPotenceTypeExObjLst;
  let arrQxPotenceTypeSel: Array<clsQxPotenceTypeENEx> = arrQxPotenceTypeExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxPotenceTypeSel = arrQxPotenceTypeSel.sort(
        QxPotenceTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxPotenceTypeSel = arrQxPotenceTypeSel.sort(objPagerPara.sortFun);
    }
    arrQxPotenceTypeSel = arrQxPotenceTypeSel.slice(intStart, intEnd);
    return arrQxPotenceTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxPotenceTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxPotenceTypeENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxPotenceTypeS:源对象
 **/
export async function QxPotenceTypeEx_FuncMapFuncModuleName(
  objQxPotenceType: clsQxPotenceTypeENEx,
) {
  const strThisFuncName = QxPotenceTypeEx_FuncMapFuncModuleName.name;
  try {
    if (IsNullOrEmpty(objQxPotenceType.funcModuleName) == true) {
      const QxFuncModuleFuncModuleId = objQxPotenceType.funcModuleId;
      const QxFuncModuleFuncModuleName = await QxFuncModule_func(
        clsQxFuncModuleEN.con_FuncModuleId,
        clsQxFuncModuleEN.con_FuncModuleName,
        QxFuncModuleFuncModuleId,
      );
      objQxPotenceType.funcModuleName = QxFuncModuleFuncModuleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000342)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPotenceTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxPotenceTypeS:源对象
 **/
export async function QxPotenceTypeEx_FuncMapMenuName(objQxPotenceType: clsQxPotenceTypeENEx) {
  const strThisFuncName = QxPotenceTypeEx_FuncMapMenuName.name;
  try {
    if (IsNullOrEmpty(objQxPotenceType.menuName) == true) {
      const QxPrjMenusMenuId = objQxPotenceType.menuId;
      const QxPrjMenusMenuName = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_MenuName,
        QxPrjMenusMenuId,
        objQxPotenceType.qxPrjId,
      );
      objQxPotenceType.menuName = QxPrjMenusMenuName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000403)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPotenceTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxPotenceTypeS:源对象
 **/
export async function QxPotenceTypeEx_FuncMapDateTimeSim(objQxPotenceType: clsQxPotenceTypeENEx) {
  const strThisFuncName = QxPotenceTypeEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objQxPotenceType.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objQxPotenceType.updDate);
      objQxPotenceType.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPotenceTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxPotenceTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxPotenceTypeENEx.con_FuncModuleName:
        return (a: clsQxPotenceTypeENEx, b: clsQxPotenceTypeENEx) => {
          return a.funcModuleName.localeCompare(b.funcModuleName);
        };
      case clsQxPotenceTypeENEx.con_MenuName:
        return (a: clsQxPotenceTypeENEx, b: clsQxPotenceTypeENEx) => {
          return a.menuName.localeCompare(b.menuName);
        };
      case clsQxPotenceTypeENEx.con_DateTimeSim:
        return (a: clsQxPotenceTypeENEx, b: clsQxPotenceTypeENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      default:
        return QxPotenceType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQxPotenceTypeENEx.con_FuncModuleName:
        return (a: clsQxPotenceTypeENEx, b: clsQxPotenceTypeENEx) => {
          return b.funcModuleName.localeCompare(a.funcModuleName);
        };
      case clsQxPotenceTypeENEx.con_MenuName:
        return (a: clsQxPotenceTypeENEx, b: clsQxPotenceTypeENEx) => {
          return b.menuName.localeCompare(a.menuName);
        };
      case clsQxPotenceTypeENEx.con_DateTimeSim:
        return (a: clsQxPotenceTypeENEx, b: clsQxPotenceTypeENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      default:
        return QxPotenceType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxPotenceTypeEx_FuncMapByFldName(
  strFldName: string,
  objQxPotenceTypeEx: clsQxPotenceTypeENEx,
) {
  const strThisFuncName = QxPotenceTypeEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxPotenceTypeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQxPotenceTypeENEx.con_FuncModuleName:
      return QxPotenceTypeEx_FuncMapFuncModuleName(objQxPotenceTypeEx);
    case clsQxPotenceTypeENEx.con_MenuName:
      return QxPotenceTypeEx_FuncMapMenuName(objQxPotenceTypeEx);
    case clsQxPotenceTypeENEx.con_DateTimeSim:
      return QxPotenceTypeEx_FuncMapDateTimeSim(objQxPotenceTypeEx);
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxPotenceTypeS:源对象
 **/
export async function QxPotenceTypeEx_FuncMapKeyFuncModuleName(
  objQxPotenceType: clsQxPotenceTypeENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxPotenceTypeEx_FuncMapKeyFuncModuleName.name;
  try {
    if (IsNullOrEmpty(objQxPotenceType.funcModuleName) == true) return [];
    const QxFuncModuleFuncModuleName = objQxPotenceType.funcModuleName;
    const arrFuncModuleId = await QxFuncModule_funcKey(
      clsQxFuncModuleEN.con_FuncModuleName,
      QxFuncModuleFuncModuleName,
      enumComparisonOp.Like_03,
    );
    return arrFuncModuleId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000342)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPotenceTypeEx_ConstructorName,
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
 * @param objQxPotenceTypeS:源对象
 **/
export async function QxPotenceTypeEx_FuncMapKeyMenuName(
  objQxPotenceType: clsQxPotenceTypeENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxPotenceTypeEx_FuncMapKeyMenuName.name;
  try {
    if (IsNullOrEmpty(objQxPotenceType.menuName) == true) return [];
    const QxPrjMenusMenuName = objQxPotenceType.menuName;
    const arrMenuId = await QxPrjMenus_funcKey(
      clsQxPrjMenusEN.con_MenuName,
      QxPrjMenusMenuName,
      objQxPotenceType.qxPrjId,
      enumComparisonOp.Like_03,
    );
    return arrMenuId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000403)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPotenceTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
// /**
//  * 把一个扩展类的部分属性进行函数转换
//  * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
//  * @param objQxPotenceTypeS:源对象
//  **/
// export async function QxPotenceTypeEx_FuncMapKeyDateTimeSim(
//   objQxPotenceType: clsQxPotenceTypeENEx,
// ): Promise<Array<string>> {
//   const strThisFuncName = QxPotenceTypeEx_FuncMapKeyDateTimeSim.name;
//   try {
//     if (IsNullOrEmpty(objQxPotenceType.dateTimeSim) == true) return [];
//     const QxPotenceTypeUpdDate = clsDateTime.GetDateTime_Sim(CommonDataNodeDateTimeSim);
//     return arrUpdDate;
//   } catch (e) {
//     const strMsg = Format(
//       '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
//       e,
//       qxPotenceTypeEx_ConstructorName,
//       strThisFuncName,
//     );
//     console.error(strMsg);
//     alert(strMsg);
//     throw strMsg;
//   }
// }
