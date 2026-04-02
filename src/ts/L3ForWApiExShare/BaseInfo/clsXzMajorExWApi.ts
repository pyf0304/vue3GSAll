/**
 * 类名:clsXzMajorExWApi
 * 表名:XzMajor(01120065)
 * 版本:2023.08.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/25 23:54:46
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
 * 专业(XzMajor)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年08月25日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import {
  ObjectAssign,
  GetSortExpressInfo,
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  XzMajor_GetObjLstCache,
  XzMajor_GetObjLstAsync,
  XzMajor_SortFunByKey,
  XzMajor_FilterFunByKey,
} from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { clsXzMajorENEx } from '@/ts/L0Entity/BaseInfo/clsXzMajorENEx';
import { XzClg_func, XzClg_funcKey } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';

export const xzMajorExController = 'XzMajorExApi';
export const xzMajorEx_ConstructorName = 'xzMajorEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function XzMajorEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objXzMajorENS:源对象
 * @returns 目标对象=>clsXzMajorEN:objXzMajorENT
 **/
export function XzMajorEx_CopyToEx(objXzMajorENS: clsXzMajorEN): clsXzMajorENEx {
  const strThisFuncName = XzMajorEx_CopyToEx.name;
  const objXzMajorENT = new clsXzMajorENEx();
  try {
    ObjectAssign(objXzMajorENT, objXzMajorENS);
    return objXzMajorENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      xzMajorEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objXzMajorENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function XzMajorEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzMajorENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrXzMajorObjLst = await XzMajor_GetObjLstCache();
  const arrXzMajorExObjLst = arrXzMajorObjLst.map(XzMajorEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsXzMajorEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrXzMajorExObjLst) {
      await XzMajorEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrXzMajorExObjLst.length == 0) return arrXzMajorExObjLst;
  let arrXzMajorSel: Array<clsXzMajorENEx> = arrXzMajorExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objXzMajorCond = new clsXzMajorENEx();
  ObjectAssign(objXzMajorCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsXzMajorWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzMajorCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrXzMajorSel = arrXzMajorSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzMajorSel = arrXzMajorSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrXzMajorSel.length == 0) return arrXzMajorSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzMajorSel = arrXzMajorSel.sort(XzMajorEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzMajorSel = arrXzMajorSel.sort(objPagerPara.sortFun);
    }
    arrXzMajorSel = arrXzMajorSel.slice(intStart, intEnd);
    return arrXzMajorSel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzMajorEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzMajorENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function XzMajorEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzMajorENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrXzMajorObjLst = await XzMajor_GetObjLstAsync(objPagerPara.whereCond);
  const arrXzMajorExObjLst = arrXzMajorObjLst.map(XzMajorEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsXzMajorEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrXzMajorExObjLst) {
      await XzMajorEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrXzMajorExObjLst.length == 0) return arrXzMajorExObjLst;
  let arrXzMajorSel: Array<clsXzMajorENEx> = arrXzMajorExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzMajorSel = arrXzMajorSel.sort(XzMajorEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzMajorSel = arrXzMajorSel.sort(objPagerPara.sortFun);
    }
    arrXzMajorSel = arrXzMajorSel.slice(intStart, intEnd);
    return arrXzMajorSel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzMajorEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzMajorENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objXzMajorS:源对象
 **/
export async function XzMajorEx_FuncMapCollegeName(objXzMajor: clsXzMajorENEx) {
  const strThisFuncName = XzMajorEx_FuncMapCollegeName.name;
  try {
    if (IsNullOrEmpty(objXzMajor.collegeName) == true) {
      const XzClgidXzCollege = objXzMajor.idXzCollege;
      const XzClgCollegeName = await XzClg_func(
        clsXzClgEN.con_IdXzCollege,
        clsXzClgEN.con_CollegeName,
        XzClgidXzCollege,
      );
      objXzMajor.collegeName = XzClgCollegeName;
    }
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      xzMajorEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-08-25
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function XzMajorEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsXzMajorENEx.con_CollegeName:
        return (a: clsXzMajorENEx, b: clsXzMajorENEx) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      default:
        return XzMajor_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsXzMajorENEx.con_CollegeName:
        return (a: clsXzMajorENEx, b: clsXzMajorENEx) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      default:
        return XzMajor_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-08-25
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function XzMajorEx_FuncMapByFldName(strFldName: string, objXzMajorEx: clsXzMajorENEx) {
  const strThisFuncName = XzMajorEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsXzMajorEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsXzMajorENEx.con_CollegeName:
      return XzMajorEx_FuncMapCollegeName(objXzMajorEx);
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
 * 日期:2023-08-25
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function XzMajorEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsXzMajorENEx.con_CollegeName:
      return (obj: clsXzMajorENEx) => {
        return obj.collegeName === value;
      };
    default:
      return XzMajor_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objXzMajorS:源对象
 **/
export async function XzMajorEx_FuncMapKeyCollegeName(
  objXzMajor: clsXzMajorENEx,
): Promise<Array<string>> {
  const strThisFuncName = XzMajorEx_FuncMapKeyCollegeName.name;
  try {
    if (IsNullOrEmpty(objXzMajor.collegeName) == true) return [];
    const XzClgCollegeName = objXzMajor.collegeName;
    const arrIdXzCollege = await XzClg_funcKey(
      clsXzClgEN.con_CollegeName,
      XzClgCollegeName,
      enumComparisonOp.Like_03,
    );
    return arrIdXzCollege;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      xzMajorEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-08-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function XzMajorEx_SortFun_MajorName(a: clsXzMajorEN, b: clsXzMajorEN): number {
  return a.majorName.localeCompare(b.majorName);
}

export async function XzMajorEx_BindDdl_IdXzMajorForvUsersSimInDivCacheEx(
  divName: HTMLDivElement,
  strDdlName: string,
  strCmPrjId: string,
) {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strstrCmPrjIdPrjId]不能为空！(In BindDdl_idXzMajor_CacheEx)');
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_idXzMajor_Cache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  let arrObjLst_Sel: Array<clsXzMajorEN> = await XzMajor_GetObjLstCache();
  
  const strWhere_User = '1=1';
  const arrvUsersSimObjLst = await vUsersSim_GetObjLstAsync(strWhere_User);

  const arridXzMajor = arrvUsersSimObjLst.map((x) => x.idXzMajor);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arridXzMajor.indexOf(x.idXzMajor) > -1);
  BindDdl_ObjLstInDivObj(
    divName,
    strDdlName,
    arrObjLst_Sel,
    clsXzMajorEN.con_IdXzMajor,
    clsXzMajorEN.con_MajorName,
    '专业',
  );
}
