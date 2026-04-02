

/**
 * Qx用户角色关系(QxUserRoleRelation)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年01月11日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetWebApiUrl, GetWebApiUrl_GP, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  QxUserRoleRelation_GetObjLstCache,
  QxUserRoleRelation_GetObjLstAsync,
  QxUserRoleRelation_SortFunByKey,
  QxUserRoleRelation_FilterFunByKey,
} from '@/ts/L3ForWApi/UsersRight/clsQxUserRoleRelationWApi';
import { clsQxUserRoleRelationEN } from '@/ts/L0Entity/UsersRight/clsQxUserRoleRelationEN';
import { clsQxUserRoleRelationENEx } from '@/ts/L0Entity/UsersRight/clsQxUserRoleRelationENEx';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsQxUserRoleRelation } from '@/ts/L0Entity/UsersRight/clsQxUserRoleRelation';

export const qxUserRoleRelationEx_Controller = 'QxUserRoleRelationExApi';
export const qxUserRoleRelationEx_ConstructorName = 'qxUserRoleRelationEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objQxUserRoleRelationENS:源对象
 * @returns 目标对象=>clsQxUserRoleRelationEN:objQxUserRoleRelationENT
 **/
export function QxUserRoleRelationEx_CopyToEx(
  objQxUserRoleRelationENS: clsQxUserRoleRelationEN,
): clsQxUserRoleRelationENEx {
  const strThisFuncName = QxUserRoleRelationEx_CopyToEx.name;
  const objQxUserRoleRelationENT = new clsQxUserRoleRelationENEx();
  try {
    ObjectAssign(objQxUserRoleRelationENT, objQxUserRoleRelationENS);
    return objQxUserRoleRelationENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxUserRoleRelationENT;
  }
}

export function QxUserRoleRelationEx_CopyTo(
  objQxUserRoleRelationENS: clsQxUserRoleRelationEN,
): clsQxUserRoleRelation {
  const strThisFuncName = QxUserRoleRelationEx_CopyTo.name;
  const objQxUserRoleRelationENT = new clsQxUserRoleRelation();
  try {
    ObjectAssign(objQxUserRoleRelationENT, objQxUserRoleRelationENS);
    return objQxUserRoleRelationENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxUserRoleRelationENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxUserRoleRelationEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxUserRoleRelationENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrQxUserRoleRelationObjLst = await QxUserRoleRelation_GetObjLstCache();
  const arrQxUserRoleRelationExObjLst = arrQxUserRoleRelationObjLst.map(
    QxUserRoleRelationEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrQxUserRoleRelationExObjLst) {
      await QxUserRoleRelationEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxUserRoleRelationExObjLst.length == 0) return arrQxUserRoleRelationExObjLst;
  let arrQxUserRoleRelation_Sel: Array<clsQxUserRoleRelationENEx> = arrQxUserRoleRelationExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objQxUserRoleRelation_Cond = new clsQxUserRoleRelationENEx();
  ObjectAssign(objQxUserRoleRelation_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsQxUserRoleRelationWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxUserRoleRelation_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
              (x) => (x.GetFldValue(strKey).toString().length = Number(strValue.toString())),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQxUserRoleRelation_Sel.length == 0) return arrQxUserRoleRelation_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.sort(
        QxUserRoleRelationEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.sort(objPagerPara.sortFun);
    }
    arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.slice(intStart, intEnd);
    return arrQxUserRoleRelation_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxUserRoleRelationENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxUserRoleRelationEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxUserRoleRelationENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxUserRoleRelationObjLst = await QxUserRoleRelation_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrQxUserRoleRelationExObjLst = arrQxUserRoleRelationObjLst.map(
    QxUserRoleRelationEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrQxUserRoleRelationExObjLst) {
      await QxUserRoleRelationEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxUserRoleRelationExObjLst.length == 0) return arrQxUserRoleRelationExObjLst;
  let arrQxUserRoleRelation_Sel: Array<clsQxUserRoleRelationENEx> = arrQxUserRoleRelationExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.sort(
        QxUserRoleRelationEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.sort(objPagerPara.sortFun);
    }
    arrQxUserRoleRelation_Sel = arrQxUserRoleRelation_Sel.slice(intStart, intEnd);
    return arrQxUserRoleRelation_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxUserRoleRelationENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-01-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxUserRoleRelationEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return QxUserRoleRelation_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return QxUserRoleRelation_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-01-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxUserRoleRelationEx_FuncMapByFldName(
  strFldName: string,
  objQxUserRoleRelationEx: clsQxUserRoleRelationENEx,
) {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapByFldName.name;
  console.log(objQxUserRoleRelationEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsQxUserRoleRelationEN.AttributeName;
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
 * 日期:2023-01-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function QxUserRoleRelationEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return QxUserRoleRelation_FilterFunByKey(strKey, value);
  }
}

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId(
  strUserId: string,
  strQxPrjId: string,
): Promise<Array<clsQxUserRoleRelationEN>> {
  const strThisFuncName = 'GetObjLstByUserIdAndPrjId';
  try {
    if (strUserId == '') {
      const strMsg = Format(
        '参数:[strUserId]不能为空!(In clsQxUserRoleRelationExWApi.GetObjLstByUserIdAndPrjId)',
      );
      console.error(strMsg);
      throw strMsg;
    }
    if (strQxPrjId == '') {
      const strMsg = Format(
        '参数:[strQxPrjId]不能为空!(In clsQxUserRoleRelationExWApi.GetObjLstByUserIdAndPrjId)',
      );
      console.error(strMsg);
      throw strMsg;
    }
    const strWhere = `${clsQxUserRoleRelationEN.con_UserId} = '${strUserId}' and ${clsQxUserRoleRelationEN.con_QxPrjId} = '${strQxPrjId}'`;
    //console.log(returnObj);
    const arrObjLst = await QxUserRoleRelation_GetObjLstAsync(strWhere);
    return arrObjLst;
  } catch (error: any) {
    console.error(error);
    const strMsg = `获取对象列表时出错。${error}`;
    throw strMsg;
  }
}

/**
 * 为用户设置角色
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strUserId: 用户Id
 * @param strRoleId: 角色Id
 * @returns 获取的相应对象列表
 */
export async function QxUserRoleRelationEx_AddRecord(
  strUserId: string,
  strRoleId: string,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = QxUserRoleRelationEx_AddRecord.name;
  const strAction = 'AddRecord';
  const strUrl = GetWebApiUrl_GP(qxUserRoleRelationEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
      strRoleId,
      strOpUser,
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
        qxUserRoleRelationEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUserRoleRelationEx_ConstructorName,
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
 * 为用户删除角色
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strUserId: 用户Id
 * @param strRoleId: 角色Id
 * @returns 获取的相应对象列表
 */
export async function QxUserRoleRelationEx_DelRecord(
  strUserId: string,
  strRoleId: string,
): Promise<number> {
  const strThisFuncName = QxUserRoleRelationEx_DelRecord.name;
  const strAction = 'DelRecord';
  const strUrl = GetWebApiUrl_GP(qxUserRoleRelationEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
      strRoleId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        qxUserRoleRelationEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUserRoleRelationEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
