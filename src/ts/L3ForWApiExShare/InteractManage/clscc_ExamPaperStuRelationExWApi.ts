
/**
 * 考卷与学生关系(cc_ExamPaperStuRelation)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年12月11日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { Storage } from '@/utils/Storage';
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';

import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  cc_ExamPaperStuRelation_GetObjLstCache,
  cc_ExamPaperStuRelation_GetObjLstAsync,
  cc_ExamPaperStuRelation_SortFunByKey,
  cc_ExamPaperStuRelation_FilterFunByKey,
} from '@/ts/L3ForWApi/InteractManage/clscc_ExamPaperStuRelationWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clscc_ExamPaperStuRelationEN } from '@/ts/L0Entity/InteractManage/clscc_ExamPaperStuRelationEN';
import { clscc_ExamPaperStuRelationENEx } from '@/ts/L0Entity/InteractManage/clscc_ExamPaperStuRelationENEx';
import { CurrEduCls_func, CurrEduCls_funcKey } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const cc_ExamPaperStuRelationExController = 'cc_ExamPaperStuRelationExApi';
export const cc_ExamPaperStuRelationEx_ConstructorName = 'cc_ExamPaperStuRelationEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_ExamPaperStuRelationEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * @param objcc_ExamPaperStuRelationENS:源对象
 * @returns 目标对象=>clscc_ExamPaperStuRelationEN:objcc_ExamPaperStuRelationENT
 **/
export function cc_ExamPaperStuRelationEx_CopyToEx(
  objcc_ExamPaperStuRelationENS: clscc_ExamPaperStuRelationEN,
): clscc_ExamPaperStuRelationENEx {
  const strThisFuncName = cc_ExamPaperStuRelationEx_CopyToEx.name;
  const objcc_ExamPaperStuRelationENT = new clscc_ExamPaperStuRelationENEx();
  try {
    ObjectAssign(objcc_ExamPaperStuRelationENT, objcc_ExamPaperStuRelationENS);
    return objcc_ExamPaperStuRelationENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_ExamPaperStuRelationENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_ExamPaperStuRelationEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
): Promise<Array<clscc_ExamPaperStuRelationENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrcc_ExamPaperStuRelationObjLst = await cc_ExamPaperStuRelation_GetObjLstCache(
    strIdCurrEduCls,
  );
  const arrcc_ExamPaperStuRelationExObjLst = arrcc_ExamPaperStuRelationObjLst.map(
    cc_ExamPaperStuRelationEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_ExamPaperStuRelationEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrcc_ExamPaperStuRelationExObjLst) {
      await cc_ExamPaperStuRelationEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_ExamPaperStuRelationExObjLst.length == 0) return arrcc_ExamPaperStuRelationExObjLst;
  let arrcc_ExamPaperStuRelationSel: Array<clscc_ExamPaperStuRelationENEx> =
    arrcc_ExamPaperStuRelationExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objcc_ExamPaperStuRelationCond = new clscc_ExamPaperStuRelationENEx();
  ObjectAssign(objcc_ExamPaperStuRelationCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clscc_ExamPaperStuRelationWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_ExamPaperStuRelationCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_ExamPaperStuRelationSel.length == 0) return arrcc_ExamPaperStuRelationSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.sort(
        cc_ExamPaperStuRelationEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.sort(objPagerPara.sortFun);
    }
    arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.slice(intStart, intEnd);
    return arrcc_ExamPaperStuRelationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_ExamPaperStuRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_ExamPaperStuRelationENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_ExamPaperStuRelationEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_ExamPaperStuRelationENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_ExamPaperStuRelationObjLst = await cc_ExamPaperStuRelation_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrcc_ExamPaperStuRelationExObjLst = arrcc_ExamPaperStuRelationObjLst.map(
    cc_ExamPaperStuRelationEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_ExamPaperStuRelationEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrcc_ExamPaperStuRelationExObjLst) {
      await cc_ExamPaperStuRelationEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_ExamPaperStuRelationExObjLst.length == 0) return arrcc_ExamPaperStuRelationExObjLst;
  let arrcc_ExamPaperStuRelationSel: Array<clscc_ExamPaperStuRelationENEx> =
    arrcc_ExamPaperStuRelationExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.sort(
        cc_ExamPaperStuRelationEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.sort(objPagerPara.sortFun);
    }
    arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.slice(intStart, intEnd);
    return arrcc_ExamPaperStuRelationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_ExamPaperStuRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_ExamPaperStuRelationENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_ExamPaperStuRelationS:源对象
 **/
export async function cc_ExamPaperStuRelationEx_FuncMapEduClsName(
  objcc_ExamPaperStuRelation: clscc_ExamPaperStuRelationENEx,
) {
  const strThisFuncName = cc_ExamPaperStuRelationEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuRelation.eduClsName) == true) {
      const CurrEduClsidCurrEduClass = objcc_ExamPaperStuRelation.idCurrEduCls;
      const CurrEduClsEduClassName = await CurrEduCls_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduClsidCurrEduClass,
        objcc_ExamPaperStuRelation.courseId,
      );
      objcc_ExamPaperStuRelation.eduClsName = CurrEduClsEduClassName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000437)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_ExamPaperStuRelationS:源对象
 **/
export async function cc_ExamPaperStuRelationEx_FuncMapCourseId(
  objcc_ExamPaperStuRelation: clscc_ExamPaperStuRelationENEx,
) {
  const strThisFuncName = cc_ExamPaperStuRelationEx_FuncMapCourseId.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuRelation.courseId) == true) {
      const CurrEduClsidCurrEduClass = objcc_ExamPaperStuRelation.idCurrEduCls;
      const CurrEduClsCourseId = await CurrEduCls_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_CourseId,
        CurrEduClsidCurrEduClass,
        objcc_ExamPaperStuRelation.courseId,
      );
      objcc_ExamPaperStuRelation.courseId = CurrEduClsCourseId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000444)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_ExamPaperStuRelationEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscc_ExamPaperStuRelationENEx.con_CourseId:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return a.courseId.localeCompare(b.courseId);
        };
      case clscc_ExamPaperStuRelationENEx.con_ExamPaperName:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return a.examPaperName.localeCompare(b.examPaperName);
        };
      case clscc_ExamPaperStuRelationENEx.con_EduClsName:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clscc_ExamPaperStuRelationENEx.con_StuName:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return a.stuName.localeCompare(b.stuName);
        };
      default:
        return cc_ExamPaperStuRelation_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clscc_ExamPaperStuRelationENEx.con_CourseId:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return b.courseId.localeCompare(a.courseId);
        };
      case clscc_ExamPaperStuRelationENEx.con_ExamPaperName:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return b.examPaperName.localeCompare(a.examPaperName);
        };
      case clscc_ExamPaperStuRelationENEx.con_EduClsName:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clscc_ExamPaperStuRelationENEx.con_StuName:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return b.stuName.localeCompare(a.stuName);
        };
      default:
        return cc_ExamPaperStuRelation_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-12-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function cc_ExamPaperStuRelationEx_FuncMapByFldName(
  strFldName: string,
  objcc_ExamPaperStuRelationEx: clscc_ExamPaperStuRelationENEx,
) {
  const strThisFuncName = cc_ExamPaperStuRelationEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clscc_ExamPaperStuRelationEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscc_ExamPaperStuRelationENEx.con_CourseId:
      return cc_ExamPaperStuRelationEx_FuncMapCourseId(objcc_ExamPaperStuRelationEx);
    case clscc_ExamPaperStuRelationENEx.con_EduClsName:
      return cc_ExamPaperStuRelationEx_FuncMapEduClsName(objcc_ExamPaperStuRelationEx);
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
 * 日期:2023-12-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function cc_ExamPaperStuRelationEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clscc_ExamPaperStuRelationENEx.con_CourseId:
      return (obj: clscc_ExamPaperStuRelationENEx) => {
        return obj.courseId === value;
      };
    case clscc_ExamPaperStuRelationENEx.con_ExamPaperName:
      return (obj: clscc_ExamPaperStuRelationENEx) => {
        return obj.examPaperName === value;
      };
    case clscc_ExamPaperStuRelationENEx.con_EduClsName:
      return (obj: clscc_ExamPaperStuRelationENEx) => {
        return obj.eduClsName === value;
      };
    case clscc_ExamPaperStuRelationENEx.con_StuName:
      return (obj: clscc_ExamPaperStuRelationENEx) => {
        return obj.stuName === value;
      };
    default:
      return cc_ExamPaperStuRelation_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_ExamPaperStuRelationS:源对象
 **/
export async function cc_ExamPaperStuRelationEx_FuncMapKeyEduClsName(
  objcc_ExamPaperStuRelation: clscc_ExamPaperStuRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_ExamPaperStuRelationEx_FuncMapKeyEduClsName.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuRelation.eduClsName) == true) return [];
    const CurrEduClsEduClassName = objcc_ExamPaperStuRelation.eduClsName;
    const arrIdCurrEduCls = await CurrEduCls_funcKey(
      clsCurrEduClsEN.con_EduClsName,
      CurrEduClsEduClassName,
      objcc_ExamPaperStuRelation.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000437)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuRelationEx_ConstructorName,
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
 * @param objcc_ExamPaperStuRelationS:源对象
 **/
export async function cc_ExamPaperStuRelationEx_FuncMapKeyCourseId(
  objcc_ExamPaperStuRelation: clscc_ExamPaperStuRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_ExamPaperStuRelationEx_FuncMapKeyCourseId.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuRelation.courseId) == true) return [];
    const CurrEduClsCourseId = objcc_ExamPaperStuRelation.courseId;
    const arrIdCurrEduCls = await CurrEduCls_funcKey(
      clsCurrEduClsEN.con_CourseId,
      CurrEduClsCourseId,
      objcc_ExamPaperStuRelation.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000444)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 安排家庭作业
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strId_CurrEduCls: 教学班流水号
 * @param strIdStu: 学生流水号
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function cc_ExamPaperStuRelationEx_ArrangeHomeWork(
  strId_CurrEduCls: string,
  strIdStu: string,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = cc_ExamPaperStuRelationEx_ArrangeHomeWork.name;
  const strAction = 'ArrangeHomeWork';
  const strUrl = cc_ExamPaperStuRelationEx_GetWebApiUrl(
    cc_ExamPaperStuRelationExController,
    strAction,
  );
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strId_CurrEduCls,
      strIdStu,
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
        cc_ExamPaperStuRelationEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        cc_ExamPaperStuRelationEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
