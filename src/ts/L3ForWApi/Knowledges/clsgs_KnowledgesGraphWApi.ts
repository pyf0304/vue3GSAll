/**
 * 类名:clsgs_KnowledgesGraphWApi
 * 表名:gs_KnowledgesGraph(01120873)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:45:33
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识点逻辑图(gs_KnowledgesGraph)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月08日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsgs_KnowledgesGraphEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gs_KnowledgesGraph_Controller = 'gs_KnowledgesGraphApi';
export const gs_KnowledgesGraph_ConstructorName = 'gs_KnowledgesGraph';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKnowledgeGraphId:关键字
 * @returns 对象
 **/
export async function gs_KnowledgesGraph_GetObjByKnowledgeGraphIdAsync(
  strKnowledgeGraphId: string,
): Promise<clsgs_KnowledgesGraphEN | null> {
  const strThisFuncName = 'GetObjByKnowledgeGraphIdAsync';

  if (IsNullOrEmpty(strKnowledgeGraphId) == true) {
    const strMsg = Format(
      '参数:[strKnowledgeGraphId]不能为空!(In clsgs_KnowledgesGraphWApi.GetObjByKnowledgeGraphIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKnowledgeGraphId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strKnowledgeGraphId]的长度:[{0}]不正确!(clsgs_KnowledgesGraphWApi.GetObjByKnowledgeGraphIdAsync)',
      strKnowledgeGraphId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKnowledgeGraphId';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strKnowledgeGraphId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objgs_KnowledgesGraph = gs_KnowledgesGraph_GetObjFromJsonObj(returnObj);
      return objgs_KnowledgesGraph;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strKnowledgeGraphId:所给的关键字
 * @returns 对象
 */
export async function gs_KnowledgesGraph_GetObjByKnowledgeGraphIdCache(
  strKnowledgeGraphId: string,
  strCourseId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByKnowledgeGraphIdCache';

  if (IsNullOrEmpty(strKnowledgeGraphId) == true) {
    const strMsg = Format(
      '参数:[strKnowledgeGraphId]不能为空!(In clsgs_KnowledgesGraphWApi.GetObjByKnowledgeGraphIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKnowledgeGraphId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strKnowledgeGraphId]的长度:[{0}]不正确!(clsgs_KnowledgesGraphWApi.GetObjByKnowledgeGraphIdCache)',
      strKnowledgeGraphId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstCache(strCourseId);
  try {
    const arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphObjLstCache.filter(
      (x) => x.knowledgeGraphId == strKnowledgeGraphId,
    );
    let objgs_KnowledgesGraph: clsgs_KnowledgesGraphEN;
    if (arrgs_KnowledgesGraphSel.length > 0) {
      objgs_KnowledgesGraph = arrgs_KnowledgesGraphSel[0];
      return objgs_KnowledgesGraph;
    } else {
      if (bolTryAsyncOnce == true) {
        const objgs_KnowledgesGraphConst = await gs_KnowledgesGraph_GetObjByKnowledgeGraphIdAsync(
          strKnowledgeGraphId,
        );
        if (objgs_KnowledgesGraphConst != null) {
          gs_KnowledgesGraph_ReFreshThisCache(strCourseId);
          return objgs_KnowledgesGraphConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strKnowledgeGraphId,
      gs_KnowledgesGraph_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strKnowledgeGraphId:所给的关键字
 * @returns 对象
 */
export async function gs_KnowledgesGraph_GetObjByKnowledgeGraphIdlocalStorage(
  strKnowledgeGraphId: string,
) {
  const strThisFuncName = 'GetObjByKnowledgeGraphIdlocalStorage';

  if (IsNullOrEmpty(strKnowledgeGraphId) == true) {
    const strMsg = Format(
      '参数:[strKnowledgeGraphId]不能为空!(In clsgs_KnowledgesGraphWApi.GetObjByKnowledgeGraphIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKnowledgeGraphId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strKnowledgeGraphId]的长度:[{0}]不正确!(clsgs_KnowledgesGraphWApi.GetObjByKnowledgeGraphIdlocalStorage)',
      strKnowledgeGraphId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsgs_KnowledgesGraphEN._CurrTabName, strKnowledgeGraphId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objgs_KnowledgesGraphCache: clsgs_KnowledgesGraphEN = JSON.parse(strTempObj);
    return objgs_KnowledgesGraphCache;
  }
  try {
    const objgs_KnowledgesGraph = await gs_KnowledgesGraph_GetObjByKnowledgeGraphIdAsync(
      strKnowledgeGraphId,
    );
    if (objgs_KnowledgesGraph != null) {
      localStorage.setItem(strKey, JSON.stringify(objgs_KnowledgesGraph));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objgs_KnowledgesGraph;
    }
    return objgs_KnowledgesGraph;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strKnowledgeGraphId,
      gs_KnowledgesGraph_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objgs_KnowledgesGraph:所给的对象
 * @returns 对象
 */
export async function gs_KnowledgesGraph_UpdateObjInLstCache(
  objgs_KnowledgesGraph: clsgs_KnowledgesGraphEN,
  strCourseId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstCache(strCourseId);
    const obj = arrgs_KnowledgesGraphObjLstCache.find(
      (x) =>
        x.knowledgeGraphName == objgs_KnowledgesGraph.knowledgeGraphName &&
        x.courseId == objgs_KnowledgesGraph.courseId &&
        x.createUser == objgs_KnowledgesGraph.createUser,
    );
    if (obj != null) {
      objgs_KnowledgesGraph.knowledgeGraphId = obj.knowledgeGraphId;
      ObjectAssign(obj, objgs_KnowledgesGraph);
    } else {
      arrgs_KnowledgesGraphObjLstCache.push(objgs_KnowledgesGraph);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gs_KnowledgesGraph_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strKnowledgeGraphId:所给的关键字
 * @returns 对象
 */
export async function gs_KnowledgesGraph_GetNameByKnowledgeGraphIdCache(
  strKnowledgeGraphId: string,
  strCourseId: string,
) {
  if (IsNullOrEmpty(strKnowledgeGraphId) == true) {
    const strMsg = Format(
      '参数:[strKnowledgeGraphId]不能为空!(In clsgs_KnowledgesGraphWApi.GetNameByKnowledgeGraphIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKnowledgeGraphId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strKnowledgeGraphId]的长度:[{0}]不正确!(clsgs_KnowledgesGraphWApi.GetNameByKnowledgeGraphIdCache)',
      strKnowledgeGraphId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstCache(strCourseId);
  if (arrgs_KnowledgesGraphObjLstCache == null) return '';
  try {
    const arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphObjLstCache.filter(
      (x) => x.knowledgeGraphId == strKnowledgeGraphId,
    );
    let objgs_KnowledgesGraph: clsgs_KnowledgesGraphEN;
    if (arrgs_KnowledgesGraphSel.length > 0) {
      objgs_KnowledgesGraph = arrgs_KnowledgesGraphSel[0];
      return objgs_KnowledgesGraph.knowledgeGraphName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strKnowledgeGraphId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strCourseId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function gs_KnowledgesGraph_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strCourseIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCourseIdClassfy) == true) {
    const strMsg = Format('参数:[strCourseIdClassfy]不能为空!(In clsgs_KnowledgesGraphWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsgs_KnowledgesGraphWApi.func)',
      strCourseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsgs_KnowledgesGraphEN.con_KnowledgeGraphId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsgs_KnowledgesGraphEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsgs_KnowledgesGraphEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strKnowledgeGraphId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objgs_KnowledgesGraph = await gs_KnowledgesGraph_GetObjByKnowledgeGraphIdCache(
    strKnowledgeGraphId,
    strCourseIdClassfy,
  );
  if (objgs_KnowledgesGraph == null) return '';
  if (objgs_KnowledgesGraph.GetFldValue(strOutFldName) == null) return '';
  return objgs_KnowledgesGraph.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function gs_KnowledgesGraph_SortFunDefa(
  a: clsgs_KnowledgesGraphEN,
  b: clsgs_KnowledgesGraphEN,
): number {
  return a.knowledgeGraphId.localeCompare(b.knowledgeGraphId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function gs_KnowledgesGraph_SortFunDefa2Fld(
  a: clsgs_KnowledgesGraphEN,
  b: clsgs_KnowledgesGraphEN,
): number {
  if (a.knowledgeGraphName == b.knowledgeGraphName)
    return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
  else return a.knowledgeGraphName.localeCompare(b.knowledgeGraphName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function gs_KnowledgesGraph_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_KnowledgesGraphEN.con_KnowledgeGraphId:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          return a.knowledgeGraphId.localeCompare(b.knowledgeGraphId);
        };
      case clsgs_KnowledgesGraphEN.con_KnowledgeGraphName:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (a.knowledgeGraphName == null) return -1;
          if (b.knowledgeGraphName == null) return 1;
          return a.knowledgeGraphName.localeCompare(b.knowledgeGraphName);
        };
      case clsgs_KnowledgesGraphEN.con_IdCurrEduCls:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsgs_KnowledgesGraphEN.con_CourseId:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (a.courseId == null) return -1;
          if (b.courseId == null) return 1;
          return a.courseId.localeCompare(b.courseId);
        };
      case clsgs_KnowledgesGraphEN.con_CreateUser:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (a.createUser == null) return -1;
          if (b.createUser == null) return 1;
          return a.createUser.localeCompare(b.createUser);
        };
      case clsgs_KnowledgesGraphEN.con_UpdDate:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsgs_KnowledgesGraphEN.con_UpdUser:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsgs_KnowledgesGraphEN.con_Memo:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsgs_KnowledgesGraphEN.con_GraphTypeId:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (a.graphTypeId == null) return -1;
          if (b.graphTypeId == null) return 1;
          return a.graphTypeId.localeCompare(b.graphTypeId);
        };
      case clsgs_KnowledgesGraphEN.con_IsDisplay:
        return (a: clsgs_KnowledgesGraphEN) => {
          if (a.isDisplay == true) return 1;
          else return -1;
        };
      case clsgs_KnowledgesGraphEN.con_IsExtend:
        return (a: clsgs_KnowledgesGraphEN) => {
          if (a.isExtend == true) return 1;
          else return -1;
        };
      case clsgs_KnowledgesGraphEN.con_IsRecommend:
        return (a: clsgs_KnowledgesGraphEN) => {
          if (a.isRecommend == true) return 1;
          else return -1;
        };
      case clsgs_KnowledgesGraphEN.con_IsAnswer:
        return (a: clsgs_KnowledgesGraphEN) => {
          if (a.isAnswer == true) return 1;
          else return -1;
        };
      case clsgs_KnowledgesGraphEN.con_IsSubmit:
        return (a: clsgs_KnowledgesGraphEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsgs_KnowledgesGraphEN.con_StartTime:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (a.startTime == null) return -1;
          if (b.startTime == null) return 1;
          return a.startTime.localeCompare(b.startTime);
        };
      case clsgs_KnowledgesGraphEN.con_SubmitTime:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (a.submitTime == null) return -1;
          if (b.submitTime == null) return 1;
          return a.submitTime.localeCompare(b.submitTime);
        };
      case clsgs_KnowledgesGraphEN.con_TakeUpTime:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (a.takeUpTime == null) return -1;
          if (b.takeUpTime == null) return 1;
          return a.takeUpTime.localeCompare(b.takeUpTime);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_KnowledgesGraph]中不存在!(in ${gs_KnowledgesGraph_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsgs_KnowledgesGraphEN.con_KnowledgeGraphId:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          return b.knowledgeGraphId.localeCompare(a.knowledgeGraphId);
        };
      case clsgs_KnowledgesGraphEN.con_KnowledgeGraphName:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (b.knowledgeGraphName == null) return -1;
          if (a.knowledgeGraphName == null) return 1;
          return b.knowledgeGraphName.localeCompare(a.knowledgeGraphName);
        };
      case clsgs_KnowledgesGraphEN.con_IdCurrEduCls:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsgs_KnowledgesGraphEN.con_CourseId:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (b.courseId == null) return -1;
          if (a.courseId == null) return 1;
          return b.courseId.localeCompare(a.courseId);
        };
      case clsgs_KnowledgesGraphEN.con_CreateUser:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (b.createUser == null) return -1;
          if (a.createUser == null) return 1;
          return b.createUser.localeCompare(a.createUser);
        };
      case clsgs_KnowledgesGraphEN.con_UpdDate:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsgs_KnowledgesGraphEN.con_UpdUser:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsgs_KnowledgesGraphEN.con_Memo:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsgs_KnowledgesGraphEN.con_GraphTypeId:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (b.graphTypeId == null) return -1;
          if (a.graphTypeId == null) return 1;
          return b.graphTypeId.localeCompare(a.graphTypeId);
        };
      case clsgs_KnowledgesGraphEN.con_IsDisplay:
        return (b: clsgs_KnowledgesGraphEN) => {
          if (b.isDisplay == true) return 1;
          else return -1;
        };
      case clsgs_KnowledgesGraphEN.con_IsExtend:
        return (b: clsgs_KnowledgesGraphEN) => {
          if (b.isExtend == true) return 1;
          else return -1;
        };
      case clsgs_KnowledgesGraphEN.con_IsRecommend:
        return (b: clsgs_KnowledgesGraphEN) => {
          if (b.isRecommend == true) return 1;
          else return -1;
        };
      case clsgs_KnowledgesGraphEN.con_IsAnswer:
        return (b: clsgs_KnowledgesGraphEN) => {
          if (b.isAnswer == true) return 1;
          else return -1;
        };
      case clsgs_KnowledgesGraphEN.con_IsSubmit:
        return (b: clsgs_KnowledgesGraphEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsgs_KnowledgesGraphEN.con_StartTime:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (b.startTime == null) return -1;
          if (a.startTime == null) return 1;
          return b.startTime.localeCompare(a.startTime);
        };
      case clsgs_KnowledgesGraphEN.con_SubmitTime:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (b.submitTime == null) return -1;
          if (a.submitTime == null) return 1;
          return b.submitTime.localeCompare(a.submitTime);
        };
      case clsgs_KnowledgesGraphEN.con_TakeUpTime:
        return (a: clsgs_KnowledgesGraphEN, b: clsgs_KnowledgesGraphEN) => {
          if (b.takeUpTime == null) return -1;
          if (a.takeUpTime == null) return 1;
          return b.takeUpTime.localeCompare(a.takeUpTime);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_KnowledgesGraph]中不存在!(in ${gs_KnowledgesGraph_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function gs_KnowledgesGraph_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_KnowledgesGraphEN.con_KnowledgeGraphId:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.knowledgeGraphId === value;
      };
    case clsgs_KnowledgesGraphEN.con_KnowledgeGraphName:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.knowledgeGraphName === value;
      };
    case clsgs_KnowledgesGraphEN.con_IdCurrEduCls:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsgs_KnowledgesGraphEN.con_CourseId:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.courseId === value;
      };
    case clsgs_KnowledgesGraphEN.con_CreateUser:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.createUser === value;
      };
    case clsgs_KnowledgesGraphEN.con_UpdDate:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.updDate === value;
      };
    case clsgs_KnowledgesGraphEN.con_UpdUser:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.updUser === value;
      };
    case clsgs_KnowledgesGraphEN.con_Memo:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.memo === value;
      };
    case clsgs_KnowledgesGraphEN.con_GraphTypeId:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.graphTypeId === value;
      };
    case clsgs_KnowledgesGraphEN.con_IsDisplay:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.isDisplay === value;
      };
    case clsgs_KnowledgesGraphEN.con_IsExtend:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.isExtend === value;
      };
    case clsgs_KnowledgesGraphEN.con_IsRecommend:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.isRecommend === value;
      };
    case clsgs_KnowledgesGraphEN.con_IsAnswer:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.isAnswer === value;
      };
    case clsgs_KnowledgesGraphEN.con_IsSubmit:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.isSubmit === value;
      };
    case clsgs_KnowledgesGraphEN.con_StartTime:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.startTime === value;
      };
    case clsgs_KnowledgesGraphEN.con_SubmitTime:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.submitTime === value;
      };
    case clsgs_KnowledgesGraphEN.con_TakeUpTime:
      return (obj: clsgs_KnowledgesGraphEN) => {
        return obj.takeUpTime === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[gs_KnowledgesGraph]中不存在!(in ${gs_KnowledgesGraph_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strCourseId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function gs_KnowledgesGraph_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCourseIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCourseIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strCourseIdClassfy]不能为空!(In clsgs_KnowledgesGraphWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsgs_KnowledgesGraphWApi.funcKey)',
      strCourseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsgs_KnowledgesGraphEN.con_KnowledgeGraphId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrgs_KnowledgesGraph = await gs_KnowledgesGraph_GetObjLstCache(strCourseIdClassfy);
  if (arrgs_KnowledgesGraph == null) return [];
  let arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraph;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrgs_KnowledgesGraphSel.length == 0) return [];
  return arrgs_KnowledgesGraphSel.map((x) => x.knowledgeGraphId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_KnowledgesGraph_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 */
export async function gs_KnowledgesGraph_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export async function gs_KnowledgesGraph_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsgs_KnowledgesGraphEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objgs_KnowledgesGraph = gs_KnowledgesGraph_GetObjFromJsonObj(returnObj);
      return objgs_KnowledgesGraph;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_KnowledgesGraph_GetObjLstClientCache(strCourseId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsgs_KnowledgesGraphEN.WhereFormat) == false) {
    strWhereCond = Format(clsgs_KnowledgesGraphEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("CourseId='{0}'", strCourseId);
  }
  const strKey = Format('{0}_{1}', clsgs_KnowledgesGraphEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsgs_KnowledgesGraphEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_KnowledgesGraphEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrgs_KnowledgesGraphExObjLstCache: Array<clsgs_KnowledgesGraphEN> =
      CacheHelper.Get(strKey);
    const arrgs_KnowledgesGraphObjLstT = gs_KnowledgesGraph_GetObjLstByJSONObjLst(
      arrgs_KnowledgesGraphExObjLstCache,
    );
    return arrgs_KnowledgesGraphObjLstT;
  }
  try {
    const arrgs_KnowledgesGraphExObjLst = await gs_KnowledgesGraph_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrgs_KnowledgesGraphExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_KnowledgesGraphExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_KnowledgesGraphExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_KnowledgesGraph_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_KnowledgesGraph_GetObjLstlocalStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsgs_KnowledgesGraphEN.WhereFormat) == false) {
    strWhereCond = Format(clsgs_KnowledgesGraphEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsgs_KnowledgesGraphEN.con_CourseId, strCourseId);
  }
  const strKey = Format('{0}_{1}', clsgs_KnowledgesGraphEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsgs_KnowledgesGraphEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_KnowledgesGraphEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_KnowledgesGraphExObjLstCache: Array<clsgs_KnowledgesGraphEN> =
      JSON.parse(strTempObjLst);
    const arrgs_KnowledgesGraphObjLstT = gs_KnowledgesGraph_GetObjLstByJSONObjLst(
      arrgs_KnowledgesGraphExObjLstCache,
    );
    return arrgs_KnowledgesGraphObjLstT;
  }
  try {
    const arrgs_KnowledgesGraphExObjLst = await gs_KnowledgesGraph_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrgs_KnowledgesGraphExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_KnowledgesGraphExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_KnowledgesGraphExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_KnowledgesGraph_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_KnowledgesGraph_GetObjLstlocalStoragePureCache(strCourseId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsgs_KnowledgesGraphEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_KnowledgesGraphObjLstCache: Array<clsgs_KnowledgesGraphEN> =
      JSON.parse(strTempObjLst);
    return arrgs_KnowledgesGraphObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function gs_KnowledgesGraph_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_KnowledgesGraphEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_KnowledgesGraph_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_KnowledgesGraph_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_KnowledgesGraph_GetObjLstsessionStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsgs_KnowledgesGraphEN.WhereFormat) == false) {
    strWhereCond = Format(clsgs_KnowledgesGraphEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsgs_KnowledgesGraphEN.con_CourseId, strCourseId);
  }
  const strKey = Format('{0}_{1}', clsgs_KnowledgesGraphEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsgs_KnowledgesGraphEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_KnowledgesGraphEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_KnowledgesGraphExObjLstCache: Array<clsgs_KnowledgesGraphEN> =
      JSON.parse(strTempObjLst);
    const arrgs_KnowledgesGraphObjLstT = gs_KnowledgesGraph_GetObjLstByJSONObjLst(
      arrgs_KnowledgesGraphExObjLstCache,
    );
    return arrgs_KnowledgesGraphObjLstT;
  }
  try {
    const arrgs_KnowledgesGraphExObjLst = await gs_KnowledgesGraph_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrgs_KnowledgesGraphExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_KnowledgesGraphExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_KnowledgesGraphExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_KnowledgesGraph_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_KnowledgesGraph_GetObjLstsessionStoragePureCache(strCourseId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsgs_KnowledgesGraphEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_KnowledgesGraphObjLstCache: Array<clsgs_KnowledgesGraphEN> =
      JSON.parse(strTempObjLst);
    return arrgs_KnowledgesGraphObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_KnowledgesGraph_GetObjLstCache(
  strCourseId: string,
): Promise<Array<clsgs_KnowledgesGraphEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clsgs_KnowledgesGraphWApi.gs_KnowledgesGraph_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsgs_KnowledgesGraphWApi.gs_KnowledgesGraph_GetObjLstCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrgs_KnowledgesGraphObjLstCache;
  switch (clsgs_KnowledgesGraphEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstsessionStorage(
        strCourseId,
      );
      break;
    case '03': //localStorage
      arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstlocalStorage(
        strCourseId,
      );
      break;
    case '02': //ClientCache
      arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstClientCache(strCourseId);
      break;
    default:
      arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstClientCache(strCourseId);
      break;
  }
  return arrgs_KnowledgesGraphObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_KnowledgesGraph_GetObjLstPureCache(strCourseId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrgs_KnowledgesGraphObjLstCache;
  switch (clsgs_KnowledgesGraphEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstsessionStoragePureCache(
        strCourseId,
      );
      break;
    case '03': //localStorage
      arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstlocalStoragePureCache(
        strCourseId,
      );
      break;
    case '02': //ClientCache
      arrgs_KnowledgesGraphObjLstCache = null;
      break;
    default:
      arrgs_KnowledgesGraphObjLstCache = null;
      break;
  }
  return arrgs_KnowledgesGraphObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrKnowledgeGraphIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_KnowledgesGraph_GetSubObjLstCache(
  objgs_KnowledgesGraphCond: clsgs_KnowledgesGraphEN,
  strCourseId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstCache(strCourseId);
  let arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphObjLstCache;
  if (
    objgs_KnowledgesGraphCond.sfFldComparisonOp == null ||
    objgs_KnowledgesGraphCond.sfFldComparisonOp == ''
  )
    return arrgs_KnowledgesGraphSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_KnowledgesGraphCond.sfFldComparisonOp,
  );
  //console.log("clsgs_KnowledgesGraphWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_KnowledgesGraphCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_KnowledgesGraphCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_KnowledgesGraphSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_KnowledgesGraphCond),
      gs_KnowledgesGraph_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_KnowledgesGraphEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrKnowledgeGraphId:关键字列表
 * @returns 对象列表
 **/
export async function gs_KnowledgesGraph_GetObjLstByKnowledgeGraphIdLstAsync(
  arrKnowledgeGraphId: Array<string>,
): Promise<Array<clsgs_KnowledgesGraphEN>> {
  const strThisFuncName = 'GetObjLstByKnowledgeGraphIdLstAsync';
  const strAction = 'GetObjLstByKnowledgeGraphIdLst';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKnowledgeGraphId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_KnowledgesGraph_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_KnowledgesGraph_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrKnowledgeGraphIdLst:关键字列表
 * @returns 对象列表
 */
export async function gs_KnowledgesGraph_GetObjLstByKnowledgeGraphIdLstCache(
  arrKnowledgeGraphIdLst: Array<string>,
  strCourseId: string,
) {
  const strThisFuncName = 'GetObjLstByKnowledgeGraphIdLstCache';
  try {
    const arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstCache(strCourseId);
    const arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphObjLstCache.filter(
      (x) => arrKnowledgeGraphIdLst.indexOf(x.knowledgeGraphId) > -1,
    );
    return arrgs_KnowledgesGraphSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrKnowledgeGraphIdLst.join(','),
      gs_KnowledgesGraph_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
}

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function gs_KnowledgesGraph_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsgs_KnowledgesGraphEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_KnowledgesGraph_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_KnowledgesGraph_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_KnowledgesGraph_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsgs_KnowledgesGraphEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRangePara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_KnowledgesGraph_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_KnowledgesGraph_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_KnowledgesGraph_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_KnowledgesGraphEN>();
  const arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstCache(strCourseId);
  if (arrgs_KnowledgesGraphObjLstCache.length == 0) return arrgs_KnowledgesGraphObjLstCache;
  let arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_KnowledgesGraphCond = new clsgs_KnowledgesGraphEN();
  ObjectAssign(objgs_KnowledgesGraphCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_KnowledgesGraphWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_KnowledgesGraphCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_KnowledgesGraphSel.length == 0) return arrgs_KnowledgesGraphSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.sort(
        gs_KnowledgesGraph_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.sort(objPagerPara.sortFun);
    }
    arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.slice(intStart, intEnd);
    return arrgs_KnowledgesGraphSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_KnowledgesGraph_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_KnowledgesGraphEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_KnowledgesGraph_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_KnowledgesGraphEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_KnowledgesGraphEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPagerPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_KnowledgesGraph_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_KnowledgesGraph_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strKnowledgeGraphId:关键字
 * @returns 获取删除的结果
 **/
export async function gs_KnowledgesGraph_DelRecordAsync(
  strKnowledgeGraphId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strKnowledgeGraphId);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const configDel = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.delete(strUrl, configDel);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrKnowledgeGraphId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function gs_KnowledgesGraph_Delgs_KnowledgesGraphsAsync(
  arrKnowledgeGraphId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delgs_KnowledgesGraphsAsync';
  const strAction = 'Delgs_KnowledgesGraphs';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKnowledgeGraphId, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function gs_KnowledgesGraph_Delgs_KnowledgesGraphsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delgs_KnowledgesGraphsByCondAsync';
  const strAction = 'Delgs_KnowledgesGraphsByCond';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objgs_KnowledgesGraphEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_KnowledgesGraph_AddNewRecordAsync(
  objgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objgs_KnowledgesGraphEN);
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_KnowledgesGraphEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objgs_KnowledgesGraphEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_KnowledgesGraph_AddNewRecordWithMaxIdAsync(
  objgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_KnowledgesGraphEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objgs_KnowledgesGraphEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function gs_KnowledgesGraph_AddNewRecordWithReturnKeyAsync(
  objgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_KnowledgesGraphEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objgs_KnowledgesGraphEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function gs_KnowledgesGraph_UpdateRecordAsync(
  objgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objgs_KnowledgesGraphEN.sfUpdFldSetStr === undefined ||
    objgs_KnowledgesGraphEN.sfUpdFldSetStr === null ||
    objgs_KnowledgesGraphEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_KnowledgesGraphEN.knowledgeGraphId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_KnowledgesGraphEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objgs_KnowledgesGraphEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_KnowledgesGraph_UpdateWithConditionAsync(
  objgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objgs_KnowledgesGraphEN.sfUpdFldSetStr === undefined ||
    objgs_KnowledgesGraphEN.sfUpdFldSetStr === null ||
    objgs_KnowledgesGraphEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_KnowledgesGraphEN.knowledgeGraphId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);
  objgs_KnowledgesGraphEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_KnowledgesGraphEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrKnowledgeGraphIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_KnowledgesGraph_IsExistRecordCache(
  objgs_KnowledgesGraphCond: clsgs_KnowledgesGraphEN,
  strCourseId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstCache(strCourseId);
  if (arrgs_KnowledgesGraphObjLstCache == null) return false;
  let arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphObjLstCache;
  if (
    objgs_KnowledgesGraphCond.sfFldComparisonOp == null ||
    objgs_KnowledgesGraphCond.sfFldComparisonOp == ''
  )
    return arrgs_KnowledgesGraphSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_KnowledgesGraphCond.sfFldComparisonOp,
  );
  //console.log("clsgs_KnowledgesGraphWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_KnowledgesGraphCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_KnowledgesGraphCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_KnowledgesGraphSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objgs_KnowledgesGraphCond),
      gs_KnowledgesGraph_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return false;
}

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function gs_KnowledgesGraph_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param strKnowledgeGraphId:所给的关键字
 * @returns 对象
 */
export async function gs_KnowledgesGraph_IsExistCache(
  strKnowledgeGraphId: string,
  strCourseId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstCache(strCourseId);
  if (arrgs_KnowledgesGraphObjLstCache == null) return false;
  try {
    const arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphObjLstCache.filter(
      (x) => x.knowledgeGraphId == strKnowledgeGraphId,
    );
    if (arrgs_KnowledgesGraphSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strKnowledgeGraphId,
      gs_KnowledgesGraph_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return false;
}

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strKnowledgeGraphId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function gs_KnowledgesGraph_IsExistAsync(
  strKnowledgeGraphId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strKnowledgeGraphId,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export async function gs_KnowledgesGraph_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objgs_KnowledgesGraphCond:条件对象
 * @returns 对象列表记录数
 */
export async function gs_KnowledgesGraph_GetRecCountByCondCache(
  objgs_KnowledgesGraphCond: clsgs_KnowledgesGraphEN,
  strCourseId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrgs_KnowledgesGraphObjLstCache = await gs_KnowledgesGraph_GetObjLstCache(strCourseId);
  if (arrgs_KnowledgesGraphObjLstCache == null) return 0;
  let arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphObjLstCache;
  if (
    objgs_KnowledgesGraphCond.sfFldComparisonOp == null ||
    objgs_KnowledgesGraphCond.sfFldComparisonOp == ''
  )
    return arrgs_KnowledgesGraphSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_KnowledgesGraphCond.sfFldComparisonOp,
  );
  //console.log("clsgs_KnowledgesGraphWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_KnowledgesGraphCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_KnowledgesGraphCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_KnowledgesGraphSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_KnowledgesGraphCond),
      gs_KnowledgesGraph_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function gs_KnowledgesGraph_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function gs_KnowledgesGraph_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gs_KnowledgesGraph_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrefix,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraph_ConstructorName,
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function gs_KnowledgesGraph_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export function gs_KnowledgesGraph_ReFreshCache(strCourseId: string): void {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空!(In clsgs_KnowledgesGraphWApi.clsgs_KnowledgesGraphWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsgs_KnowledgesGraphWApi.clsgs_KnowledgesGraphWApi.ReFreshCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsgs_KnowledgesGraphEN._CurrTabName, strCourseId);
  switch (clsgs_KnowledgesGraphEN.CacheModeId) {
    case '04': //sessionStorage
      sessionStorage.removeItem(strKey);
      break;
    case '03': //localStorage
      localStorage.removeItem(strKey);
      break;
    case '02': //ClientCache
      CacheHelper.Remove(strKey);
      break;
    default:
      CacheHelper.Remove(strKey);
      break;
  }
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function gs_KnowledgesGraph_ReFreshThisCache(strCourseId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsgs_KnowledgesGraphEN._CurrTabName, strCourseId);
    switch (clsgs_KnowledgesGraphEN.CacheModeId) {
      case '04': //sessionStorage
        sessionStorage.removeItem(strKey);
        break;
      case '03': //localStorage
        localStorage.removeItem(strKey);
        break;
      case '02': //ClientCache
        CacheHelper.Remove(strKey);
        break;
      default:
        CacheHelper.Remove(strKey);
        break;
    }
    const strMsg = Format('刷新缓存成功!');
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export async function gs_KnowledgesGraph_BindDdl_KnowledgeGraphIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strCourseId: string,
) {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clsgs_KnowledgesGraphWApi.BindDdl_KnowledgeGraphIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsgs_KnowledgesGraphWApi.BindDdl_KnowledgeGraphIdInDiv)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_KnowledgeGraphIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_KnowledgeGraphIdInDivCache");
  let arrObjLstSel = await gs_KnowledgesGraph_GetObjLstCache(strCourseId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.courseId == strCourseId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsgs_KnowledgesGraphEN.con_KnowledgeGraphId,
    clsgs_KnowledgesGraphEN.con_KnowledgeGraphName,
    '知识点逻辑图',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_KnowledgesGraph_CheckPropertyNew(
  pobjgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.knowledgeGraphId) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.knowledgeGraphId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[知识点图Id(knowledgeGraphId)]的长度不能超过10(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.knowledgeGraphId)(clsgs_KnowledgesGraphBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.knowledgeGraphName) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.knowledgeGraphName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[连连看图名(knowledgeGraphName)]的长度不能超过100(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.knowledgeGraphName)(clsgs_KnowledgesGraphBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.idCurrEduCls) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.idCurrEduCls)(clsgs_KnowledgesGraphBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.courseId) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.courseId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.courseId)(clsgs_KnowledgesGraphBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.createUser) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.createUser) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[建立用户(createUser)]的长度不能超过50(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.createUser)(clsgs_KnowledgesGraphBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.updDate) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.updDate)(clsgs_KnowledgesGraphBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.updUser) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.updUser)(clsgs_KnowledgesGraphBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.memo) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.memo)(clsgs_KnowledgesGraphBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.graphTypeId) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.graphTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[图谱类型Id(graphTypeId)]的长度不能超过2(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.graphTypeId)(clsgs_KnowledgesGraphBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.startTime) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.startTime) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[开始时间(startTime)]的长度不能超过20(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.startTime)(clsgs_KnowledgesGraphBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.submitTime) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.submitTime) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[提交时间(submitTime)]的长度不能超过20(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.submitTime)(clsgs_KnowledgesGraphBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.takeUpTime) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.takeUpTime) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[耗时(takeUpTime)]的长度不能超过50(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.takeUpTime)(clsgs_KnowledgesGraphBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.knowledgeGraphId) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.knowledgeGraphId &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.knowledgeGraphId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识点图Id(knowledgeGraphId)]的值:[$(pobjgs_KnowledgesGraphEN.knowledgeGraphId)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.knowledgeGraphName) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.knowledgeGraphName &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.knowledgeGraphName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[连连看图名(knowledgeGraphName)]的值:[$(pobjgs_KnowledgesGraphEN.knowledgeGraphName)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.idCurrEduCls) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.idCurrEduCls &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjgs_KnowledgesGraphEN.idCurrEduCls)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.courseId) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.courseId &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.courseId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程Id(courseId)]的值:[$(pobjgs_KnowledgesGraphEN.courseId)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.createUser) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.createUser &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.createUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[建立用户(createUser)]的值:[$(pobjgs_KnowledgesGraphEN.createUser)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.updDate) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.updDate &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_KnowledgesGraphEN.updDate)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.updUser) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.updUser &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_KnowledgesGraphEN.updUser)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.memo) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.memo &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_KnowledgesGraphEN.memo)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.graphTypeId) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.graphTypeId &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.graphTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[图谱类型Id(graphTypeId)]的值:[$(pobjgs_KnowledgesGraphEN.graphTypeId)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_KnowledgesGraphEN.isDisplay &&
    undefined !== pobjgs_KnowledgesGraphEN.isDisplay &&
    tzDataType.isBoolean(pobjgs_KnowledgesGraphEN.isDisplay) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否显示(isDisplay)]的值:[$(pobjgs_KnowledgesGraphEN.isDisplay)], 非法,应该为布尔型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_KnowledgesGraphEN.isExtend &&
    undefined !== pobjgs_KnowledgesGraphEN.isExtend &&
    tzDataType.isBoolean(pobjgs_KnowledgesGraphEN.isExtend) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否扩展(isExtend)]的值:[$(pobjgs_KnowledgesGraphEN.isExtend)], 非法,应该为布尔型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_KnowledgesGraphEN.isRecommend &&
    undefined !== pobjgs_KnowledgesGraphEN.isRecommend &&
    tzDataType.isBoolean(pobjgs_KnowledgesGraphEN.isRecommend) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否推荐(isRecommend)]的值:[$(pobjgs_KnowledgesGraphEN.isRecommend)], 非法,应该为布尔型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_KnowledgesGraphEN.isAnswer &&
    undefined !== pobjgs_KnowledgesGraphEN.isAnswer &&
    tzDataType.isBoolean(pobjgs_KnowledgesGraphEN.isAnswer) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否回答(isAnswer)]的值:[$(pobjgs_KnowledgesGraphEN.isAnswer)], 非法,应该为布尔型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_KnowledgesGraphEN.isSubmit &&
    undefined !== pobjgs_KnowledgesGraphEN.isSubmit &&
    tzDataType.isBoolean(pobjgs_KnowledgesGraphEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjgs_KnowledgesGraphEN.isSubmit)], 非法,应该为布尔型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.startTime) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.startTime &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.startTime) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[开始时间(startTime)]的值:[$(pobjgs_KnowledgesGraphEN.startTime)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.submitTime) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.submitTime &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.submitTime) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[提交时间(submitTime)]的值:[$(pobjgs_KnowledgesGraphEN.submitTime)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.takeUpTime) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.takeUpTime &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.takeUpTime) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[耗时(takeUpTime)]的值:[$(pobjgs_KnowledgesGraphEN.takeUpTime)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_KnowledgesGraph_CheckProperty4Update(
  pobjgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.knowledgeGraphId) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.knowledgeGraphId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[知识点图Id(knowledgeGraphId)]的长度不能超过10(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.knowledgeGraphId)(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.knowledgeGraphName) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.knowledgeGraphName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[连连看图名(knowledgeGraphName)]的长度不能超过100(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.knowledgeGraphName)(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.idCurrEduCls) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.idCurrEduCls)(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.courseId) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.courseId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.courseId)(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.createUser) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.createUser) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[建立用户(createUser)]的长度不能超过50(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.createUser)(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.updDate) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.updDate)(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.updUser) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.updUser)(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.memo) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.memo)(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.graphTypeId) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.graphTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[图谱类型Id(graphTypeId)]的长度不能超过2(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.graphTypeId)(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.startTime) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.startTime) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[开始时间(startTime)]的长度不能超过20(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.startTime)(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.submitTime) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.submitTime) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[提交时间(submitTime)]的长度不能超过20(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.submitTime)(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.takeUpTime) == false &&
    GetStrLen(pobjgs_KnowledgesGraphEN.takeUpTime) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[耗时(takeUpTime)]的长度不能超过50(In 知识点逻辑图(gs_KnowledgesGraph))!值:$(pobjgs_KnowledgesGraphEN.takeUpTime)(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.knowledgeGraphId) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.knowledgeGraphId &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.knowledgeGraphId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识点图Id(knowledgeGraphId)]的值:[$(pobjgs_KnowledgesGraphEN.knowledgeGraphId)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.knowledgeGraphName) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.knowledgeGraphName &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.knowledgeGraphName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[连连看图名(knowledgeGraphName)]的值:[$(pobjgs_KnowledgesGraphEN.knowledgeGraphName)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.idCurrEduCls) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.idCurrEduCls &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjgs_KnowledgesGraphEN.idCurrEduCls)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.courseId) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.courseId &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.courseId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程Id(courseId)]的值:[$(pobjgs_KnowledgesGraphEN.courseId)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.createUser) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.createUser &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.createUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[建立用户(createUser)]的值:[$(pobjgs_KnowledgesGraphEN.createUser)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.updDate) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.updDate &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_KnowledgesGraphEN.updDate)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.updUser) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.updUser &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_KnowledgesGraphEN.updUser)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.memo) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.memo &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_KnowledgesGraphEN.memo)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.graphTypeId) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.graphTypeId &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.graphTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[图谱类型Id(graphTypeId)]的值:[$(pobjgs_KnowledgesGraphEN.graphTypeId)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_KnowledgesGraphEN.isDisplay &&
    undefined !== pobjgs_KnowledgesGraphEN.isDisplay &&
    tzDataType.isBoolean(pobjgs_KnowledgesGraphEN.isDisplay) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否显示(isDisplay)]的值:[$(pobjgs_KnowledgesGraphEN.isDisplay)], 非法,应该为布尔型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_KnowledgesGraphEN.isExtend &&
    undefined !== pobjgs_KnowledgesGraphEN.isExtend &&
    tzDataType.isBoolean(pobjgs_KnowledgesGraphEN.isExtend) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否扩展(isExtend)]的值:[$(pobjgs_KnowledgesGraphEN.isExtend)], 非法,应该为布尔型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_KnowledgesGraphEN.isRecommend &&
    undefined !== pobjgs_KnowledgesGraphEN.isRecommend &&
    tzDataType.isBoolean(pobjgs_KnowledgesGraphEN.isRecommend) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否推荐(isRecommend)]的值:[$(pobjgs_KnowledgesGraphEN.isRecommend)], 非法,应该为布尔型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_KnowledgesGraphEN.isAnswer &&
    undefined !== pobjgs_KnowledgesGraphEN.isAnswer &&
    tzDataType.isBoolean(pobjgs_KnowledgesGraphEN.isAnswer) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否回答(isAnswer)]的值:[$(pobjgs_KnowledgesGraphEN.isAnswer)], 非法,应该为布尔型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_KnowledgesGraphEN.isSubmit &&
    undefined !== pobjgs_KnowledgesGraphEN.isSubmit &&
    tzDataType.isBoolean(pobjgs_KnowledgesGraphEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjgs_KnowledgesGraphEN.isSubmit)], 非法,应该为布尔型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.startTime) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.startTime &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.startTime) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[开始时间(startTime)]的值:[$(pobjgs_KnowledgesGraphEN.startTime)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.submitTime) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.submitTime &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.submitTime) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[提交时间(submitTime)]的值:[$(pobjgs_KnowledgesGraphEN.submitTime)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesGraphEN.takeUpTime) == false &&
    undefined !== pobjgs_KnowledgesGraphEN.takeUpTime &&
    tzDataType.isString(pobjgs_KnowledgesGraphEN.takeUpTime) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[耗时(takeUpTime)]的值:[$(pobjgs_KnowledgesGraphEN.takeUpTime)], 非法,应该为字符型(In 知识点逻辑图(gs_KnowledgesGraph))!(clsgs_KnowledgesGraphBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_KnowledgesGraph_GetJSONStrByObj(
  pobjgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN,
): string {
  pobjgs_KnowledgesGraphEN.sfUpdFldSetStr = pobjgs_KnowledgesGraphEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjgs_KnowledgesGraphEN);
  } catch (objException) {
    const strEx = GetExceptionStr(objException);
    myShowErrorMsg(strEx);
  }
  if (strJson == undefined) return '';
  else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function gs_KnowledgesGraph_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsgs_KnowledgesGraphEN> {
  let arrgs_KnowledgesGraphObjLst = new Array<clsgs_KnowledgesGraphEN>();
  if (strJSON === '') {
    return arrgs_KnowledgesGraphObjLst;
  }
  try {
    arrgs_KnowledgesGraphObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrgs_KnowledgesGraphObjLst;
  }
  return arrgs_KnowledgesGraphObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_KnowledgesGraphObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function gs_KnowledgesGraph_GetObjLstByJSONObjLst(
  arrgs_KnowledgesGraphObjLstS: Array<clsgs_KnowledgesGraphEN>,
): Array<clsgs_KnowledgesGraphEN> {
  const arrgs_KnowledgesGraphObjLst = new Array<clsgs_KnowledgesGraphEN>();
  for (const objInFor of arrgs_KnowledgesGraphObjLstS) {
    const obj1 = gs_KnowledgesGraph_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrgs_KnowledgesGraphObjLst.push(obj1);
  }
  return arrgs_KnowledgesGraphObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_KnowledgesGraph_GetObjByJSONStr(strJSON: string): clsgs_KnowledgesGraphEN {
  let pobjgs_KnowledgesGraphEN = new clsgs_KnowledgesGraphEN();
  if (strJSON === '') {
    return pobjgs_KnowledgesGraphEN;
  }
  try {
    pobjgs_KnowledgesGraphEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjgs_KnowledgesGraphEN;
  }
  return pobjgs_KnowledgesGraphEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function gs_KnowledgesGraph_GetCombineCondition(
  objgs_KnowledgesGraphCond: clsgs_KnowledgesGraphEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_KnowledgeGraphId,
    ) == true
  ) {
    const strComparisonOpKnowledgeGraphId: string =
      objgs_KnowledgesGraphCond.dicFldComparisonOp[clsgs_KnowledgesGraphEN.con_KnowledgeGraphId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesGraphEN.con_KnowledgeGraphId,
      objgs_KnowledgesGraphCond.knowledgeGraphId,
      strComparisonOpKnowledgeGraphId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_KnowledgeGraphName,
    ) == true
  ) {
    const strComparisonOpKnowledgeGraphName: string =
      objgs_KnowledgesGraphCond.dicFldComparisonOp[clsgs_KnowledgesGraphEN.con_KnowledgeGraphName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesGraphEN.con_KnowledgeGraphName,
      objgs_KnowledgesGraphCond.knowledgeGraphName,
      strComparisonOpKnowledgeGraphName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objgs_KnowledgesGraphCond.dicFldComparisonOp[clsgs_KnowledgesGraphEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesGraphEN.con_IdCurrEduCls,
      objgs_KnowledgesGraphCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_CourseId,
    ) == true
  ) {
    const strComparisonOpCourseId: string =
      objgs_KnowledgesGraphCond.dicFldComparisonOp[clsgs_KnowledgesGraphEN.con_CourseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesGraphEN.con_CourseId,
      objgs_KnowledgesGraphCond.courseId,
      strComparisonOpCourseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_CreateUser,
    ) == true
  ) {
    const strComparisonOpCreateUser: string =
      objgs_KnowledgesGraphCond.dicFldComparisonOp[clsgs_KnowledgesGraphEN.con_CreateUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesGraphEN.con_CreateUser,
      objgs_KnowledgesGraphCond.createUser,
      strComparisonOpCreateUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objgs_KnowledgesGraphCond.dicFldComparisonOp[clsgs_KnowledgesGraphEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesGraphEN.con_UpdDate,
      objgs_KnowledgesGraphCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objgs_KnowledgesGraphCond.dicFldComparisonOp[clsgs_KnowledgesGraphEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesGraphEN.con_UpdUser,
      objgs_KnowledgesGraphCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objgs_KnowledgesGraphCond.dicFldComparisonOp[clsgs_KnowledgesGraphEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesGraphEN.con_Memo,
      objgs_KnowledgesGraphCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_GraphTypeId,
    ) == true
  ) {
    const strComparisonOpGraphTypeId: string =
      objgs_KnowledgesGraphCond.dicFldComparisonOp[clsgs_KnowledgesGraphEN.con_GraphTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesGraphEN.con_GraphTypeId,
      objgs_KnowledgesGraphCond.graphTypeId,
      strComparisonOpGraphTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_IsDisplay,
    ) == true
  ) {
    if (objgs_KnowledgesGraphCond.isDisplay == true) {
      strWhereCond += Format(" And {0} = '1'", clsgs_KnowledgesGraphEN.con_IsDisplay);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsgs_KnowledgesGraphEN.con_IsDisplay);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_IsExtend,
    ) == true
  ) {
    if (objgs_KnowledgesGraphCond.isExtend == true) {
      strWhereCond += Format(" And {0} = '1'", clsgs_KnowledgesGraphEN.con_IsExtend);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsgs_KnowledgesGraphEN.con_IsExtend);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_IsRecommend,
    ) == true
  ) {
    if (objgs_KnowledgesGraphCond.isRecommend == true) {
      strWhereCond += Format(" And {0} = '1'", clsgs_KnowledgesGraphEN.con_IsRecommend);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsgs_KnowledgesGraphEN.con_IsRecommend);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_IsAnswer,
    ) == true
  ) {
    if (objgs_KnowledgesGraphCond.isAnswer == true) {
      strWhereCond += Format(" And {0} = '1'", clsgs_KnowledgesGraphEN.con_IsAnswer);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsgs_KnowledgesGraphEN.con_IsAnswer);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_IsSubmit,
    ) == true
  ) {
    if (objgs_KnowledgesGraphCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsgs_KnowledgesGraphEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsgs_KnowledgesGraphEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_StartTime,
    ) == true
  ) {
    const strComparisonOpStartTime: string =
      objgs_KnowledgesGraphCond.dicFldComparisonOp[clsgs_KnowledgesGraphEN.con_StartTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesGraphEN.con_StartTime,
      objgs_KnowledgesGraphCond.startTime,
      strComparisonOpStartTime,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_SubmitTime,
    ) == true
  ) {
    const strComparisonOpSubmitTime: string =
      objgs_KnowledgesGraphCond.dicFldComparisonOp[clsgs_KnowledgesGraphEN.con_SubmitTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesGraphEN.con_SubmitTime,
      objgs_KnowledgesGraphCond.submitTime,
      strComparisonOpSubmitTime,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesGraphCond.dicFldComparisonOp,
      clsgs_KnowledgesGraphEN.con_TakeUpTime,
    ) == true
  ) {
    const strComparisonOpTakeUpTime: string =
      objgs_KnowledgesGraphCond.dicFldComparisonOp[clsgs_KnowledgesGraphEN.con_TakeUpTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesGraphEN.con_TakeUpTime,
      objgs_KnowledgesGraphCond.takeUpTime,
      strComparisonOpTakeUpTime,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_KnowledgesGraph(知识点逻辑图),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strKnowledgeGraphName: 连连看图名(要求唯一的字段)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @param strCreateUser: 建立用户(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_KnowledgesGraph_GetUniCondStr(
  objgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and KnowledgeGraphName = '{0}'",
    objgs_KnowledgesGraphEN.knowledgeGraphName,
  );
  strWhereCond += Format(" and CourseId = '{0}'", objgs_KnowledgesGraphEN.courseId);
  strWhereCond += Format(" and CreateUser = '{0}'", objgs_KnowledgesGraphEN.createUser);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_KnowledgesGraph(知识点逻辑图),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strKnowledgeGraphName: 连连看图名(要求唯一的字段)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @param strCreateUser: 建立用户(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_KnowledgesGraph_GetUniCondStr4Update(
  objgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and KnowledgeGraphId <> '{0}'",
    objgs_KnowledgesGraphEN.knowledgeGraphId,
  );
  strWhereCond += Format(
    " and KnowledgeGraphName = '{0}'",
    objgs_KnowledgesGraphEN.knowledgeGraphName,
  );
  strWhereCond += Format(" and CourseId = '{0}'", objgs_KnowledgesGraphEN.courseId);
  strWhereCond += Format(" and CreateUser = '{0}'", objgs_KnowledgesGraphEN.createUser);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_KnowledgesGraphENS:源对象
 * @param objgs_KnowledgesGraphENT:目标对象
 */
export function gs_KnowledgesGraph_CopyObjTo(
  objgs_KnowledgesGraphENS: clsgs_KnowledgesGraphEN,
  objgs_KnowledgesGraphENT: clsgs_KnowledgesGraphEN,
): void {
  objgs_KnowledgesGraphENT.knowledgeGraphId = objgs_KnowledgesGraphENS.knowledgeGraphId; //知识点图Id
  objgs_KnowledgesGraphENT.knowledgeGraphName = objgs_KnowledgesGraphENS.knowledgeGraphName; //连连看图名
  objgs_KnowledgesGraphENT.idCurrEduCls = objgs_KnowledgesGraphENS.idCurrEduCls; //教学班流水号
  objgs_KnowledgesGraphENT.courseId = objgs_KnowledgesGraphENS.courseId; //课程Id
  objgs_KnowledgesGraphENT.createUser = objgs_KnowledgesGraphENS.createUser; //建立用户
  objgs_KnowledgesGraphENT.updDate = objgs_KnowledgesGraphENS.updDate; //修改日期
  objgs_KnowledgesGraphENT.updUser = objgs_KnowledgesGraphENS.updUser; //修改人
  objgs_KnowledgesGraphENT.memo = objgs_KnowledgesGraphENS.memo; //备注
  objgs_KnowledgesGraphENT.graphTypeId = objgs_KnowledgesGraphENS.graphTypeId; //图谱类型Id
  objgs_KnowledgesGraphENT.isDisplay = objgs_KnowledgesGraphENS.isDisplay; //是否显示
  objgs_KnowledgesGraphENT.isExtend = objgs_KnowledgesGraphENS.isExtend; //是否扩展
  objgs_KnowledgesGraphENT.isRecommend = objgs_KnowledgesGraphENS.isRecommend; //是否推荐
  objgs_KnowledgesGraphENT.isAnswer = objgs_KnowledgesGraphENS.isAnswer; //是否回答
  objgs_KnowledgesGraphENT.isSubmit = objgs_KnowledgesGraphENS.isSubmit; //是否提交
  objgs_KnowledgesGraphENT.startTime = objgs_KnowledgesGraphENS.startTime; //开始时间
  objgs_KnowledgesGraphENT.submitTime = objgs_KnowledgesGraphENS.submitTime; //提交时间
  objgs_KnowledgesGraphENT.takeUpTime = objgs_KnowledgesGraphENS.takeUpTime; //耗时
  objgs_KnowledgesGraphENT.sfUpdFldSetStr = objgs_KnowledgesGraphENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_KnowledgesGraphENS:源对象
 * @param objgs_KnowledgesGraphENT:目标对象
 */
export function gs_KnowledgesGraph_GetObjFromJsonObj(
  objgs_KnowledgesGraphENS: clsgs_KnowledgesGraphEN,
): clsgs_KnowledgesGraphEN {
  const objgs_KnowledgesGraphENT: clsgs_KnowledgesGraphEN = new clsgs_KnowledgesGraphEN();
  ObjectAssign(objgs_KnowledgesGraphENT, objgs_KnowledgesGraphENS);
  return objgs_KnowledgesGraphENT;
}
