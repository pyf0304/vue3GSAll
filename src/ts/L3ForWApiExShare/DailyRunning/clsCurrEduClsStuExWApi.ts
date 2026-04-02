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
  CurrEduClsStu_GetObjLstCache,
  CurrEduClsStu_GetObjLstAsync,
  CurrEduClsStu_SortFunByKey,
  CurrEduClsStu_FilterFunByKey,
  CurrEduClsStu_UpdateRecordAsync,
  CurrEduClsStu_ReFreshCache,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsStuWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsStuEN';
import { clsCurrEduClsStuENEx } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsStuENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { CurrEduCls_GetObjLstCache } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const currEduClsStuEx_Controller = 'CurrEduClsStuExApi';
export const currEduClsStuEx_ConstructorName = 'currEduClsStuEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function CurrEduClsStuEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objCurrEduClsStuENS:源对象
 * @returns 目标对象=>clsCurrEduClsStuEN:objCurrEduClsStuENT
 **/
export function CurrEduClsStuEx_CopyToEx(
  objCurrEduClsStuENS: clsCurrEduClsStuEN,
): clsCurrEduClsStuENEx {
  const strThisFuncName = CurrEduClsStuEx_CopyToEx.name;
  const objCurrEduClsStuENT = new clsCurrEduClsStuENEx();
  try {
    ObjectAssign(objCurrEduClsStuENT, objCurrEduClsStuENS);
    return objCurrEduClsStuENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCurrEduClsStuENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CurrEduClsStuEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
): Promise<Array<clsCurrEduClsStuENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrCurrEduClsStuObjLst = await CurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
  const arrCurrEduClsStuExObjLst = arrCurrEduClsStuObjLst.map(CurrEduClsStuEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCurrEduClsStuEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrCurrEduClsStuExObjLst) {
      await CurrEduClsStuEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrCurrEduClsStuExObjLst.length == 0) return arrCurrEduClsStuExObjLst;
  let arrCurrEduClsStuSel: Array<clsCurrEduClsStuENEx> = arrCurrEduClsStuExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objCurrEduClsStuCond = new clsCurrEduClsStuENEx();
  ObjectAssign(objCurrEduClsStuCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsCurrEduClsStuWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCurrEduClsStuCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCurrEduClsStuSel.length == 0) return arrCurrEduClsStuSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCurrEduClsStuSel = arrCurrEduClsStuSel.sort(
        CurrEduClsStuEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCurrEduClsStuSel = arrCurrEduClsStuSel.sort(objPagerPara.sortFun);
    }
    arrCurrEduClsStuSel = arrCurrEduClsStuSel.slice(intStart, intEnd);
    return arrCurrEduClsStuSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCurrEduClsStuENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CurrEduClsStuEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCurrEduClsStuENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrCurrEduClsStuObjLst = await CurrEduClsStu_GetObjLstAsync(objPagerPara.whereCond);
  const arrCurrEduClsStuExObjLst = arrCurrEduClsStuObjLst.map(CurrEduClsStuEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCurrEduClsStuEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrCurrEduClsStuExObjLst) {
      await CurrEduClsStuEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrCurrEduClsStuExObjLst.length == 0) return arrCurrEduClsStuExObjLst;
  let arrCurrEduClsStuSel: Array<clsCurrEduClsStuENEx> = arrCurrEduClsStuExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCurrEduClsStuSel = arrCurrEduClsStuSel.sort(
        CurrEduClsStuEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCurrEduClsStuSel = arrCurrEduClsStuSel.sort(objPagerPara.sortFun);
    }
    arrCurrEduClsStuSel = arrCurrEduClsStuSel.slice(intStart, intEnd);
    return arrCurrEduClsStuSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCurrEduClsStuENEx>();
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
export function CurrEduClsStuEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCurrEduClsStuENEx.con_StuName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return a.stuName.localeCompare(b.stuName);
        };
      default:
        return CurrEduClsStu_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCurrEduClsStuENEx.con_StuName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return b.stuName.localeCompare(a.stuName);
        };
      default:
        return CurrEduClsStu_SortFunByKey(strKey, AscOrDesc);
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
export function CurrEduClsStuEx_FuncMapByFldName(
  strFldName: string,
  objCurrEduClsStuEx: clsCurrEduClsStuENEx,
) {
  const strThisFuncName = CurrEduClsStuEx_FuncMapByFldName.name;
  console.log(objCurrEduClsStuEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCurrEduClsStuEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
export async function CurrEduClsStuEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsCurrEduClsStuENEx.con_StuName:
      return (obj: clsCurrEduClsStuENEx) => {
        return obj.stuName === value;
      };
    default:
      return CurrEduClsStu_FilterFunByKey(strKey, value);
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param stridCurrEduCls:教学班流水号
 */
export async function CurrEduClsStu_BindDdl_IdStuByIdCurrEduClsInDivExCache(
  divName: HTMLDivElement,
  strDdlName: string,
  stridCurrEduCls: string,
) {
  // const strThisFuncName = 'BindDdl_id_StuByidCurrEduClsInDiv_Cache';

  if (IsNullOrEmpty(stridCurrEduCls) == true) {
    const strMsg = Format('参数:[stridCurrEduCls]不能为空！(In BindDdl_id_StuByidCurrEduClsInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (stridCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[stridCurrEduCls]的长度:[{0}]不正确！',
      stridCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_id_StuByidCurrEduClsInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_id_StuByidCurrEduClsInDiv_Cache");
  let arrObjLst_Sel = await CurrEduClsStu_GetObjLstCache(stridCurrEduCls);
  if (arrObjLst_Sel == null) return;
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.idCurrEduCls == stridCurrEduCls);
  BindDdl_ObjLstInDivObj(
    divName,
    strDdlName,
    arrObjLst_Sel,
    clsCurrEduClsStuEN.con_IdStu,
    clsCurrEduClsStuENEx.con_StuName,
    '教学班与学生关系',
  );
}

/**
 * 根据学生Id获取教学班流水号列表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strStuId: 学号
 * @returns 获取的相应对象列表
 */
export async function CurrEduClsStuEx_GetIdCurrEduClsListByStuId(
  strStuId: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetidCurrEduClsListByStuId';
  const strAction = 'GetidCurrEduClsListByStuId';
  const strUrl = CurrEduClsStuEx_GetWebApiUrl(currEduClsStuEx_Controller, strAction);

  try {
    const response = await axios.get(strUrl, {
      params: { strStuId },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          currEduClsStuEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = returnObjLst;
      return arrObjLst;
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
        currEduClsStuEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        currEduClsStuEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据教学班流水号获取学生Id列表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdCurrEduCls: 教学班流水号
 * @returns 获取的相应对象列表
 */
export async function CurrEduClsStuEx_GetStuIDLstByIdCurrEduCls(
  strIdCurrEduCls: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetStuIDLstByIdCurrEduCls';
  const strAction = 'GetStuIDLstByIdCurrEduCls';
  const strUrl = CurrEduClsStuEx_GetWebApiUrl(currEduClsStuEx_Controller, strAction);
  //var mapParam: Dictionary = new Dictionary();
  //mapParam.add("strIdCurrEduCls", strIdCurrEduCls);
  //let strData = mapParam.getParamText();// "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: { strIdCurrEduCls },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          currEduClsStuEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = returnObjLst;
      return arrObjLst;
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
        currEduClsStuEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        currEduClsStuEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 绑定基于Web的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 */
export async function CurrEduClsStuEx_BindDdl_IdCurrEduClsByStuIdInDivCache(
  divName: HTMLDivElement,
  strDdlName: string,
  strStuId: string,
) {
  const strCourseId = clsPubLocalStorage.courseId;
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_idCurrEduClsInDiv_Cache)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  console.log('开始：BindDdl_idCurrEduClsInDiv_Cache');
  const arrObjLst_Sel: Array<clsCurrEduClsEN> = await CurrEduCls_GetObjLstCache(strCourseId);

  const arrIdCurrEduClsLst = await CurrEduClsStuEx_GetIdCurrEduClsListByStuId(strStuId);
  const arrObjLst_Sel2 = arrObjLst_Sel.filter(
    (x) => arrIdCurrEduClsLst.indexOf(x.idCurrEduCls) > -1,
  );

  BindDdl_ObjLstInDivObj(
    divName,
    strDdlName,
    arrObjLst_Sel2,
    clsCurrEduClsEN.con_IdCurrEduCls,
    clsCurrEduClsEN.con_EduClsName,
    '教学班',
  );
}

export async function CurrEduClsStuEx_UpdateLastVisitedDate(
  strIdCurrEduCls: string,
  strIdStu: string,
): Promise<boolean> {
  const strThisFuncName = CurrEduClsStuEx_UpdateLastVisitedDate.name;

  const arr = await CurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
  const objCurrEduClsStu = arr.find((x) => x.idStu == strIdStu);

  if (objCurrEduClsStu == null) {
    const strMsg = Format(
      '根据IdCurrEduCls:[{0}], IdStu:[{1}]获取相应的记录的对象为空.(in {2}.{3})',
      strIdCurrEduCls,
      strIdStu,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }

  objCurrEduClsStu.SetLastVisitedDate(clsDateTime.getTodayDateTimeStr(0));
  objCurrEduClsStu.SetIdEduClsStu(objCurrEduClsStu.idEduClsStu);
  const bolIsSuccess = await CurrEduClsStu_UpdateRecordAsync(objCurrEduClsStu);
  CurrEduClsStu_ReFreshCache(strIdCurrEduCls);
  return bolIsSuccess;
}

export async function CurrEduClsStuEx_GetLastVisitedDate(
  strIdCurrEduCls: string,
  strIdStu: string,
): Promise<string> {
  const strThisFuncName = CurrEduClsStuEx_GetLastVisitedDate.name;

  const arr = await CurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
  const objCurrEduClsStu = arr.find((x) => x.idStu == strIdStu);
  if (objCurrEduClsStu == null) {
    const strMsg = Format(
      '根据IdCurrEduCls:[{0}], IdStu:[{1}]获取相应的记录的对象为空.(in {2}.{3})',
      strIdCurrEduCls,
      strIdStu,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    // alert(strMsg);
    return '';
  }
  return objCurrEduClsStu.lastVisitedDate;
}

/**
 * 添加学生Id到教学班
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdStu: 学生流水号
 * @param strId_CurrEduCls: 教学班流水号
 * @param strOperator: 操作者
 * @returns 获取的相应对象列表
 */
export async function CurrEduClsStuEx_AddId_Stu4EduCls(
  strIdStu: string,
  strId_CurrEduCls: string,
  strOperator: string,
): Promise<boolean> {
  const strThisFuncName = CurrEduClsStuEx_AddId_Stu4EduCls.name;
  const strAction = 'AddId_Stu4EduCls';
  const strUrl = CurrEduClsStuEx_GetWebApiUrl(currEduClsStuEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdStu,
      strId_CurrEduCls,
      strOperator,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
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
        currEduClsStuEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        currEduClsStuEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
