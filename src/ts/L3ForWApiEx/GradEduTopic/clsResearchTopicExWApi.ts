/*-- -- -- -- -- -- -- -- -- -- --
类名:clsResearchTopicWApi
表名:ResearchTopic(01120546)
生成代码版本:2020.02.25.1
生成日期:2020/02/25 10:40:02
生成者:
生成服务器IP:192.168.1.10
工程名称:问卷调查
工程ID:0112
相关数据库:tzar.tpddns.cn,19433EduHigh_Jsie
PrjDataBaseId:0122
模块中文名:研究生培养
模块英文名:GraduateEdu
框架-层名:WA_访问层(WA_Access)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/

/// <summary>
/// 研究主题(ResearchTopic)
/// (AutoGCLib.WA_Access4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2020年02月25日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

import axios from 'axios';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import { clsResearchTopicENEx } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicENEx';
import {
  ResearchTopic_FilterFunByKey,
  ResearchTopic_GetObjByTopicIdAsync,
  ResearchTopic_GetObjLstAsync,
  ResearchTopic_GetObjLstByTopicIdLstAsync,
  ResearchTopic_GetObjLstCache,
  ResearchTopic_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { CurrEduCls_GetObjByIdCurrEduClsAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import {
  RTUserRelaEx_AddUserId,
  RTUserRelaEx_GetLastVisitedDate,
  RTUserRelaEx_GetTopicIdLstByUserId,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsRTUserRelaExWApi';
import {
  GetA_Empty,
  GetLi_Empty,
  GetUlObjInDivObj,
  SetSpanHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  RTPaperRelaEx_FilterFunByKey,
  RTPaperRelaEx_GetTopicIdLstByPaperId,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsRTPaperRelaExWApi';
import { userStore } from '@/store/modulesShare/user';
export const researchTopicEx_Controller = 'ResearchTopicExApi';
export const researchTopicEx_ConstructorName = 'researchTopicEx';

//export class clsResearchTopicExWApi {
//    public static arrResearchTopicObjLst_Cache: Array<clsResearchTopicEN>;
//    public static mstrController: string = "ResearchTopicExApi";
//    public objResearchTopicEN: clsResearchTopicEN = new clsResearchTopicEN();
//    constructor(pobjResearchTopicEN: clsResearchTopicEN) {
//        this.objResearchTopicEN = pobjResearchTopicEN;
//    };

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ResearchTopicEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objResearchTopicENS:源对象
 * @returns 目标对象=>clsResearchTopicEN:objResearchTopicENT
 **/
export function ResearchTopicEx_CopyToEx(
  objResearchTopicENS: clsResearchTopicEN,
): clsResearchTopicENEx {
  const strThisFuncName = ResearchTopicEx_CopyToEx.name;
  const objResearchTopicENT = new clsResearchTopicENEx();
  try {
    ObjectAssign(objResearchTopicENT, objResearchTopicENS);
    return objResearchTopicENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      researchTopicEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objResearchTopicENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ResearchTopicEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
): Promise<Array<clsResearchTopicENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrResearchTopicObjLst = await ResearchTopic_GetObjLstCache(strIdCurrEducls);
  const arrResearchTopicExObjLst = arrResearchTopicObjLst.map(ResearchTopicEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrResearchTopicExObjLst) {
      await ResearchTopicEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrResearchTopicExObjLst.length == 0) return arrResearchTopicExObjLst;
  let arrResearchTopic_Sel: Array<clsResearchTopicENEx> = arrResearchTopicExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objResearchTopic_Cond = new clsResearchTopicENEx();
  ObjectAssign(objResearchTopic_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsResearchTopicWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrResearchTopic_Sel = arrResearchTopic_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objResearchTopic_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrResearchTopic_Sel = arrResearchTopic_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrResearchTopic_Sel = arrResearchTopic_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrResearchTopic_Sel = arrResearchTopic_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrResearchTopic_Sel = arrResearchTopic_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrResearchTopic_Sel = arrResearchTopic_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrResearchTopic_Sel = arrResearchTopic_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrResearchTopic_Sel = arrResearchTopic_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrResearchTopic_Sel = arrResearchTopic_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrResearchTopic_Sel = arrResearchTopic_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrResearchTopic_Sel.length == 0) return arrResearchTopic_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrResearchTopic_Sel = arrResearchTopic_Sel.sort(
        ResearchTopicEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrResearchTopic_Sel = arrResearchTopic_Sel.sort(objPagerPara.sortFun);
    }
    arrResearchTopic_Sel = arrResearchTopic_Sel.slice(intStart, intEnd);
    return arrResearchTopic_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      researchTopicEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsResearchTopicENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ResearchTopicEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsResearchTopicENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrResearchTopicObjLst = await ResearchTopic_GetObjLstAsync(objPagerPara.whereCond);
  const arrResearchTopicExObjLst = arrResearchTopicObjLst.map(ResearchTopicEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrResearchTopicExObjLst) {
      await ResearchTopicEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrResearchTopicExObjLst.length == 0) return arrResearchTopicExObjLst;
  let arrResearchTopic_Sel: Array<clsResearchTopicENEx> = arrResearchTopicExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrResearchTopic_Sel = arrResearchTopic_Sel.sort(
        ResearchTopicEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrResearchTopic_Sel = arrResearchTopic_Sel.sort(objPagerPara.sortFun);
    }
    arrResearchTopic_Sel = arrResearchTopic_Sel.slice(intStart, intEnd);
    return arrResearchTopic_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      researchTopicEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsResearchTopicENEx>();
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
export function ResearchTopicEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsResearchTopicENEx.con_LastVisitedDate:
        return (a: clsResearchTopicENEx, b: clsResearchTopicENEx) => {
          if (a.lastVisitedDate == null) return -1;
          if (b.lastVisitedDate == null) return 1;
          return a.lastVisitedDate.localeCompare(b.lastVisitedDate);
        };
      default:
        return ResearchTopic_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsResearchTopicENEx.con_LastVisitedDate:
        return (a: clsResearchTopicENEx, b: clsResearchTopicENEx) => {
          if (b.lastVisitedDate == null) return -1;
          if (a.lastVisitedDate == null) return 1;
          return b.lastVisitedDate.localeCompare(a.lastVisitedDate);
        };
      default:
        return ResearchTopic_SortFunByKey(strKey, AscOrDesc);
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
export function ResearchTopicEx_FuncMapByFldName(
  strFldName: string,
  objResearchTopicEx: clsResearchTopicENEx,
) {
  const strThisFuncName = ResearchTopicEx_FuncMapByFldName.name;
  // console.log(objResearchTopicEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsResearchTopicEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsResearchTopicENEx.con_LastVisitedDate:
      return ResearchTopicEx_FuncMap_LastVisitedDate(objResearchTopicEx);

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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objResearchTopicS:源对象
 **/
export async function ResearchTopicEx_FuncMap_LastVisitedDate(
  objResearchTopic: clsResearchTopicENEx,
) {
  const strThisFuncName = ResearchTopicEx_FuncMap_LastVisitedDate.name;
  try {
    if (IsNullOrEmpty(objResearchTopic.lastVisitedDate) == true) {
      const ResearchTopic_TopicId = objResearchTopic.topicId;
      const ResearchTopic_LastVisitedDate = await RTUserRelaEx_GetLastVisitedDate(
        ResearchTopic_TopicId,
        userStore.getUserId,
      );
      objResearchTopic.lastVisitedDate = ResearchTopic_LastVisitedDate;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000141)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      researchTopicEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
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
export async function ResearchTopicEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return ResearchTopic_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 调用WebApi来删除记录
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
/// </summary>
/// <param name = "strTopicId">关键字</param>
/// <returns>获取删除的结果</returns>
export async function ResearchTopicEx_DelRecordAsyncEx(strTopicId: string): Promise<number> {
  const strThisFuncName = '';
  const strAction = 'DelRecordEx';
  let strUrl = ResearchTopicEx_GetWebApiUrl(researchTopicEx_Controller, strAction);

  strUrl = Format('{0}?Id={1}', strUrl, strTopicId);
  try {
    const response = await axios.delete(strUrl);
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
        researchTopicEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        researchTopicEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function ResearchTopicEx_GetIdCurrEduClsByTopicId(
  strTopicId: string,
): Promise<string> {
  if (strTopicId == '00000000') return clsPubLocalStorage.idCurrEduCls;
  if (strTopicId == '') return clsPubLocalStorage.idCurrEduCls;
  // const strThisFuncName = '';
  const objResearchTopic = await ResearchTopic_GetObjByTopicIdAsync(strTopicId);
  if (objResearchTopic == null) return '';
  return objResearchTopic.idCurrEduCls;
}
export async function ResearchTopicEx_SetIdCurrEduCls(strTopicId: string): Promise<boolean> {
  const strThisFuncName = ResearchTopicEx_SetIdCurrEduCls.name;
  const objResearchTopic = await ResearchTopic_GetObjByTopicIdAsync(strTopicId);
  if (objResearchTopic == null) {
    const strMsg = Format(
      '根据关键字:[{0}]获取相应的记录的对象为空.(in {1}.{2})',
      strTopicId,
      researchTopicEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }

  const objCurrEduCls = await CurrEduCls_GetObjByIdCurrEduClsAsync(objResearchTopic.idCurrEduCls);
  if (objCurrEduCls == null) {
    const strMsg = Format(
      '根据关键字:[{0}]获取相应的记录的对象为空.(in {1}.{2})',
      clsPubLocalStorage.idCurrEduCls,
      researchTopicEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  clsPubLocalStorage.eduClsName = objCurrEduCls.eduClsName;
  clsPubLocalStorage.courseId = objCurrEduCls.courseId;
  return true;
}

export async function ResearchTopicEx_GetObjExByLastVisitedDate(
  arrResearchTopicObjLst: Array<clsResearchTopicEN>,
): Promise<Array<clsResearchTopicENEx>> {
  // const strThisFuncName = ResearchTopicEx_GetObjExByLastVisitedDate.name;

  let arrResearchTopicExObjLst = arrResearchTopicObjLst.map(ResearchTopicEx_CopyToEx);
  if (arrResearchTopicExObjLst.length > 1) {
    for (let objResearchTopicEx of arrResearchTopicExObjLst) {
      await ResearchTopicEx_FuncMapByFldName(
        clsResearchTopicENEx.con_LastVisitedDate,
        objResearchTopicEx,
      );
    }
    arrResearchTopicExObjLst = arrResearchTopicExObjLst.sort(
      ResearchTopicEx_SortFunByKey(clsResearchTopicENEx.con_LastVisitedDate, 'Desc'),
    );
  }
  return arrResearchTopicExObjLst;
}

//教学班教师
export async function ResearchTopicEx_Bind_TopicList(
  divLayout: HTMLDivElement,
  Topic_Click: (strTopicId: string, strTopicName: string) => void,
  strTopicNameId: string,
  strPaperId: string,
) {
  try {
    const ulResearchTopic = GetUlObjInDivObj(divLayout, 'ulResearchTopic');
    const strUserId = userStore.getUserId;
    const arrTopicId_User = await RTUserRelaEx_GetTopicIdLstByUserId(strUserId);
    const arrTopicId_Paper = await RTPaperRelaEx_GetTopicIdLstByPaperId(strPaperId);
    // 计算 arrA 和 arrB 的交集
    const arrTopicId = arrTopicId_User.filter((value) => arrTopicId_Paper.includes(value));
    if (arrTopicId.length == 0) return;
    const arrResearchTopic = await ResearchTopic_GetObjLstByTopicIdLstAsync(arrTopicId);
    // let strhtml = '';
    for (let i = 0; i < arrResearchTopic.length; i++) {
      const objResearchTopic = arrResearchTopic[i];
      if (i == 0) {
        if (
          clsPubLocalStorage.idCurrEduCls == '' ||
          clsPubLocalStorage.idCurrEduCls == 'undefined'
        ) {
          SetSpanHtmlInDivObj(divLayout, strTopicNameId, objResearchTopic.topicName);
          //存入session
          clsPubLocalStorage.topicId = arrResearchTopic[i].topicId;

          clsPubLocalStorage.topicName = arrResearchTopic[i].topicName;
        } else {
          // $('#spntopicName').html(clsPubLocalStorage.topicName);
          SetSpanHtmlInDivObj(divLayout, strTopicNameId, clsPubLocalStorage.topicName);
        }
      }

      const li1 = GetLi_Empty('');
      const a1 = GetA_Empty('dropdown-item');
      a1.href = 'javascript:void(0)';
      a1.innerText = objResearchTopic.topicName;
      (function (strTopicId, strEduName) {
        a1.onclick = function () {
          Topic_Click(strTopicId, strEduName);
        };
      })(objResearchTopic.topicId, objResearchTopic.topicName);

      li1.appendChild(a1);
      ulResearchTopic.appendChild(li1);
      // strhtml += `<dd><a onclick=EduCls_Click("${arrResearchTopic[i].topicId}","${arrResearchTopic[i].eduClsName}","${arrResearchTopic[i].eduClsTypeId}")> ${arrResearchTopic[i].eduClsName}</a></dd>`;
    }
    // $('#dlEduClsList').html(strhtml);
  } catch (e: any) {
    const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
    console.error(strMsg);
    // alert(strMsg);
  }
}
