/**
 * 学院(XzClg)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年08月31日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { Storage } from '@/utils/Storage';
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import {
  ObjectAssign,
  GetSortExpressInfo,
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  XzClg_GetObjLstCache,
  XzClg_GetObjLstAsync,
  XzClg_SortFunByKey,
} from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { clsXzClgENEx } from '@/ts/L0Entity/UserManage/clsXzClgENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { UserTypeMap } from '@/store/modules/types/userType';

export const xzClgExController = 'XzClgExApi';
export const xzClgEx_ConstructorName = 'xzClgEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function XzClgEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objXzClgENS:源对象
 * @returns 目标对象=>clsXzClgEN:objXzClgENT
 **/
export function XzClgEx_CopyToEx(objXzClgENS: clsXzClgEN): clsXzClgENEx {
  const strThisFuncName = XzClgEx_CopyToEx.name;
  const objXzClgENT = new clsXzClgENEx();
  try {
    ObjectAssign(objXzClgENT, objXzClgENS);
    return objXzClgENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      xzClgEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objXzClgENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function XzClgEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzClgENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrXzClgObjLst = await XzClg_GetObjLstCache(clsSysPara4WebApi.spIdSchool);
  const arrXzClgExObjLst = arrXzClgObjLst.map(XzClgEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsXzClgEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrXzClgExObjLst) {
      await XzClgEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrXzClgExObjLst.length == 0) return arrXzClgExObjLst;
  let arrXzClgSel: Array<clsXzClgENEx> = arrXzClgExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objXzClgCond = new clsXzClgENEx();
  ObjectAssign(objXzClgCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsXzClgWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzClgCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzClgSel = arrXzClgSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrXzClgSel = arrXzClgSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzClgSel = arrXzClgSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrXzClgSel.length == 0) return arrXzClgSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzClgSel = arrXzClgSel.sort(XzClgEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzClgSel = arrXzClgSel.sort(objPagerPara.sortFun);
    }
    arrXzClgSel = arrXzClgSel.slice(intStart, intEnd);
    return arrXzClgSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzClgEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzClgENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function XzClgEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzClgENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrXzClgObjLst = await XzClg_GetObjLstAsync(objPagerPara.whereCond);
  const arrXzClgExObjLst = arrXzClgObjLst.map(XzClgEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsXzClgEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrXzClgExObjLst) {
      await XzClgEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrXzClgExObjLst.length == 0) return arrXzClgExObjLst;
  let arrXzClgSel: Array<clsXzClgENEx> = arrXzClgExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzClgSel = arrXzClgSel.sort(XzClgEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzClgSel = arrXzClgSel.sort(objPagerPara.sortFun);
    }
    arrXzClgSel = arrXzClgSel.slice(intStart, intEnd);
    return arrXzClgSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzClgEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzClgENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-08-31
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function XzClgEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return XzClg_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return XzClg_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-08-31
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function XzClgEx_FuncMapByFldName(strFldName: string, objXzClgEx: clsXzClgENEx) {
  const strThisFuncName = XzClgEx_FuncMapByFldName.name;
  console.log(objXzClgEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsXzClgEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case '':
      break;

    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
      break;
  }
}

export async function XzClgEx_BindDdl_IdXzCollegeForvUsersSimInDivCacheEx(
  divName: HTMLDivElement,
  strDdlName: string,
) {
  // if (IsNullOrEmpty(strCmPrjId) == true) {
  //   const strMsg = Format('参数:[strstrCmPrjIdPrjId]不能为空！(In BindDdl_idXzCollege_CacheEx)');
  //   console.error(strMsg);
  //   throw strMsg;
  // }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_idXzCollege_Cache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  let arrObjLst_Sel = await XzClg_GetObjLstCache(clsSysPara4WebApi.spIdSchool);
  const strWhere = '1=1';
  const arrvUsersSimObjLst = await vUsersSim_GetObjLstAsync(strWhere);
  const arridXzCollege = arrvUsersSimObjLst.map((x) => x.idXzCollege);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arridXzCollege.indexOf(x.idXzCollege) > -1);
  BindDdl_ObjLstInDivObj(
    divName,
    strDdlName,
    arrObjLst_Sel,
    clsXzClgEN.con_IdXzCollege,
    clsXzClgEN.con_CollegeName,
    '学院',
  );
}

/**
 * 获取统一平台中部门Id
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strid_XzCollege: strid_XzCollege
 * @returns 获取的相应对象列表
 */
export async function XzClgEx_GetDepartmentIdInGPByIdCollege(
  strid_XzCollege: string,
): Promise<string> {
  const strThisFuncName = XzClgEx_GetDepartmentIdInGPByIdCollege.name;
  const strAction = 'GetDepartmentIdInGPByIdCollege';
  const strUrl = XzClgEx_GetWebApiUrl(xzClgExController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strid_XzCollege,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        xzClgEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        xzClgEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function XzClgEx_BindDdl_IdXzCollegeByUserTypeInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strUserType: string,
) {
  if (IsNullOrEmpty(strUserType) == true) {
    const strMsg = Format(
      '参数:[strUserType]不能为空！(In clsXzClgWApi.BindDdl_IdXzCollegeByUserTypeInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_IdXzCollegeByUserTypeInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_IdXzCollegeByUserTypeInDivCache");
  let arrObjLstSel = await XzClg_GetObjLstCache(clsSysPara4WebApi.spIdSchool);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.userType == strUserType);
  if (strUserType == UserTypeMap.middle_School) {
    BindDdl_ObjLstInDivObj(
      objDiv,
      strDdlName,
      arrObjLstSel,
      clsXzClgEN.con_IdXzCollege,
      clsXzClgEN.con_CollegeName,
      '学校',
    );
  } else {
    BindDdl_ObjLstInDivObj(
      objDiv,
      strDdlName,
      arrObjLstSel,
      clsXzClgEN.con_IdXzCollege,
      clsXzClgEN.con_CollegeName,
      '学院',
    );
  }
}
