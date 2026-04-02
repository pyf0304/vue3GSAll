/**
 * 类名:clsPaperSubViewpointWApi
 * 表名:PaperSubViewpoint(01120534)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/19 12:33:52
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 子观点表(PaperSubViewpoint)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年03月19日.
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
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubViewpointEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { vPaperSubViewpoint_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const paperSubViewpoint_Controller = 'PaperSubViewpointApi';
export const paperSubViewpoint_ConstructorName = 'paperSubViewpoint';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngSubViewpointId:关键字
 * @returns 对象
 **/
export async function PaperSubViewpoint_GetObjBySubViewpointIdAsync(
  lngSubViewpointId: number,
): Promise<clsPaperSubViewpointEN | null> {
  const strThisFuncName = 'GetObjBySubViewpointIdAsync';

  if (lngSubViewpointId == 0) {
    const strMsg = Format(
      '参数:[lngSubViewpointId]不能为空!(In clsPaperSubViewpointWApi.GetObjBySubViewpointIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBySubViewpointId';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngSubViewpointId,
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
      const objPaperSubViewpoint = PaperSubViewpoint_GetObjFromJsonObj(returnObj);
      return objPaperSubViewpoint;
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * @param lngSubViewpointId:所给的关键字
 * @returns 对象
 */
export async function PaperSubViewpoint_GetObjBySubViewpointIdCache(
  lngSubViewpointId: number,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBySubViewpointIdCache';

  if (lngSubViewpointId == 0) {
    const strMsg = Format(
      '参数:[lngSubViewpointId]不能为空!(In clsPaperSubViewpointWApi.GetObjBySubViewpointIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrPaperSubViewpointSel = arrPaperSubViewpointObjLstCache.filter(
      (x) => x.subViewpointId == lngSubViewpointId,
    );
    let objPaperSubViewpoint: clsPaperSubViewpointEN;
    if (arrPaperSubViewpointSel.length > 0) {
      objPaperSubViewpoint = arrPaperSubViewpointSel[0];
      return objPaperSubViewpoint;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPaperSubViewpointConst = await PaperSubViewpoint_GetObjBySubViewpointIdAsync(
          lngSubViewpointId,
        );
        if (objPaperSubViewpointConst != null) {
          PaperSubViewpoint_ReFreshThisCache(strIdCurrEduCls);
          return objPaperSubViewpointConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngSubViewpointId,
      paperSubViewpoint_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngSubViewpointId:所给的关键字
 * @returns 对象
 */
export async function PaperSubViewpoint_GetObjBySubViewpointIdlocalStorage(
  lngSubViewpointId: number,
) {
  const strThisFuncName = 'GetObjBySubViewpointIdlocalStorage';

  if (lngSubViewpointId == 0) {
    const strMsg = Format(
      '参数:[lngSubViewpointId]不能为空!(In clsPaperSubViewpointWApi.GetObjBySubViewpointIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPaperSubViewpointEN._CurrTabName, lngSubViewpointId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPaperSubViewpointCache: clsPaperSubViewpointEN = JSON.parse(strTempObj);
    return objPaperSubViewpointCache;
  }
  try {
    const objPaperSubViewpoint = await PaperSubViewpoint_GetObjBySubViewpointIdAsync(
      lngSubViewpointId,
    );
    if (objPaperSubViewpoint != null) {
      localStorage.setItem(strKey, JSON.stringify(objPaperSubViewpoint));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPaperSubViewpoint;
    }
    return objPaperSubViewpoint;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngSubViewpointId,
      paperSubViewpoint_ConstructorName,
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
 * @param objPaperSubViewpoint:所给的对象
 * @returns 对象
 */
export async function PaperSubViewpoint_UpdateObjInLstCache(
  objPaperSubViewpoint: clsPaperSubViewpointEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
    const obj = arrPaperSubViewpointObjLstCache.find(
      (x) =>
        x.paperId == objPaperSubViewpoint.paperId &&
        x.subViewpointTypeId == objPaperSubViewpoint.subViewpointTypeId &&
        x.userId == objPaperSubViewpoint.userId &&
        x.subViewpointContent == objPaperSubViewpoint.subViewpointContent,
    );
    if (obj != null) {
      objPaperSubViewpoint.subViewpointId = obj.subViewpointId;
      ObjectAssign(obj, objPaperSubViewpoint);
    } else {
      arrPaperSubViewpointObjLstCache.push(objPaperSubViewpoint);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      paperSubViewpoint_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param lngSubViewpointId:所给的关键字
 * @returns 对象
 */
export async function PaperSubViewpoint_GetNameBySubViewpointIdCache(
  lngSubViewpointId: number,
  strIdCurrEduCls: string,
) {
  if (lngSubViewpointId == 0) {
    const strMsg = Format(
      '参数:[lngSubViewpointId]不能为空!(In clsPaperSubViewpointWApi.GetNameBySubViewpointIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
  if (arrPaperSubViewpointObjLstCache == null) return '';
  try {
    const arrPaperSubViewpointSel = arrPaperSubViewpointObjLstCache.filter(
      (x) => x.subViewpointId == lngSubViewpointId,
    );
    let objPaperSubViewpoint: clsPaperSubViewpointEN;
    if (arrPaperSubViewpointSel.length > 0) {
      objPaperSubViewpoint = arrPaperSubViewpointSel[0];
      return objPaperSubViewpoint.subViewpointContent;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      lngSubViewpointId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function PaperSubViewpoint_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsPaperSubViewpointWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsPaperSubViewpointWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsPaperSubViewpointEN.con_SubViewpointId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPaperSubViewpointEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPaperSubViewpointEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngSubViewpointId = Number(strInValue);
  if (lngSubViewpointId == 0) {
    return '';
  }
  const objPaperSubViewpoint = await PaperSubViewpoint_GetObjBySubViewpointIdCache(
    lngSubViewpointId,
    strIdCurrEduClsClassfy,
  );
  if (objPaperSubViewpoint == null) return '';
  if (objPaperSubViewpoint.GetFldValue(strOutFldName) == null) return '';
  return objPaperSubViewpoint.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PaperSubViewpoint_SortFunDefa(
  a: clsPaperSubViewpointEN,
  b: clsPaperSubViewpointEN,
): number {
  return a.subViewpointId - b.subViewpointId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PaperSubViewpoint_SortFunDefa2Fld(
  a: clsPaperSubViewpointEN,
  b: clsPaperSubViewpointEN,
): number {
  if (a.subViewpointContent == b.subViewpointContent) return a.paperRWId.localeCompare(b.paperRWId);
  else return a.subViewpointContent.localeCompare(b.subViewpointContent);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PaperSubViewpoint_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPaperSubViewpointEN.con_SubViewpointId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.subViewpointId - b.subViewpointId;
        };
      case clsPaperSubViewpointEN.con_SubViewpointContent:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.subViewpointContent == null) return -1;
          if (b.subViewpointContent == null) return 1;
          return a.subViewpointContent.localeCompare(b.subViewpointContent);
        };
      case clsPaperSubViewpointEN.con_PaperRWId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.paperRWId == null) return -1;
          if (b.paperRWId == null) return 1;
          return a.paperRWId.localeCompare(b.paperRWId);
        };
      case clsPaperSubViewpointEN.con_PaperId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.paperId.localeCompare(b.paperId);
        };
      case clsPaperSubViewpointEN.con_IdCurrEduCls:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsPaperSubViewpointEN.con_UserId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsPaperSubViewpointEN.con_SectionId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.sectionId == null) return -1;
          if (b.sectionId == null) return 1;
          return a.sectionId.localeCompare(b.sectionId);
        };
      case clsPaperSubViewpointEN.con_SubViewpointTypeId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.subViewpointTypeId.localeCompare(b.subViewpointTypeId);
        };
      case clsPaperSubViewpointEN.con_gsKnowledgeTypeId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.gsKnowledgeTypeId.localeCompare(b.gsKnowledgeTypeId);
        };
      case clsPaperSubViewpointEN.con_RWTitle:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.rWTitle == null) return -1;
          if (b.rWTitle == null) return 1;
          return a.rWTitle.localeCompare(b.rWTitle);
        };
      case clsPaperSubViewpointEN.con_ExplainTypeId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.explainTypeId == null) return -1;
          if (b.explainTypeId == null) return 1;
          return a.explainTypeId.localeCompare(b.explainTypeId);
        };
      case clsPaperSubViewpointEN.con_ExplainContent:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.explainContent == null) return -1;
          if (b.explainContent == null) return 1;
          return a.explainContent.localeCompare(b.explainContent);
        };
      case clsPaperSubViewpointEN.con_IsPublic:
        return (a: clsPaperSubViewpointEN) => {
          if (a.isPublic == true) return 1;
          else return -1;
        };
      case clsPaperSubViewpointEN.con_LiteratureSourcesId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.literatureSourcesId == null) return -1;
          if (b.literatureSourcesId == null) return 1;
          return a.literatureSourcesId.localeCompare(b.literatureSourcesId);
        };
      case clsPaperSubViewpointEN.con_OperationTypeId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.operationTypeId == null) return -1;
          if (b.operationTypeId == null) return 1;
          return a.operationTypeId.localeCompare(b.operationTypeId);
        };
      case clsPaperSubViewpointEN.con_LevelId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.levelId == null) return -1;
          if (b.levelId == null) return 1;
          return a.levelId.localeCompare(b.levelId);
        };
      case clsPaperSubViewpointEN.con_Conclusion:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.conclusion == null) return -1;
          if (b.conclusion == null) return 1;
          return a.conclusion.localeCompare(b.conclusion);
        };
      case clsPaperSubViewpointEN.con_Nationality:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.nationality == null) return -1;
          if (b.nationality == null) return 1;
          return a.nationality.localeCompare(b.nationality);
        };
      case clsPaperSubViewpointEN.con_Achievement:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.achievement == null) return -1;
          if (b.achievement == null) return 1;
          return a.achievement.localeCompare(b.achievement);
        };
      case clsPaperSubViewpointEN.con_Major:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.major == null) return -1;
          if (b.major == null) return 1;
          return a.major.localeCompare(b.major);
        };
      case clsPaperSubViewpointEN.con_WorkUnit:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.workUnit == null) return -1;
          if (b.workUnit == null) return 1;
          return a.workUnit.localeCompare(b.workUnit);
        };
      case clsPaperSubViewpointEN.con_PageNumber:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.pageNumber - b.pageNumber;
        };
      case clsPaperSubViewpointEN.con_OrderNum:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsPaperSubViewpointEN.con_PdfContent:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.pdfContent == null) return -1;
          if (b.pdfContent == null) return 1;
          return a.pdfContent.localeCompare(b.pdfContent);
        };
      case clsPaperSubViewpointEN.con_selectSpanRange:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.selectSpanRange == null) return -1;
          if (b.selectSpanRange == null) return 1;
          return a.selectSpanRange.localeCompare(b.selectSpanRange);
        };
      case clsPaperSubViewpointEN.con_PaperLineNum:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.paperLineNum - b.paperLineNum;
        };
      case clsPaperSubViewpointEN.con_PaperPageNum:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.paperPageNum - b.paperPageNum;
        };
      case clsPaperSubViewpointEN.con_AppraiseCount:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.appraiseCount - b.appraiseCount;
        };
      case clsPaperSubViewpointEN.con_OkCount:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.okCount - b.okCount;
        };
      case clsPaperSubViewpointEN.con_Score:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.score - b.score;
        };
      case clsPaperSubViewpointEN.con_StuScore:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.stuScore - b.stuScore;
        };
      case clsPaperSubViewpointEN.con_TeaScore:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsPaperSubViewpointEN.con_CreateDate:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.createDate == null) return -1;
          if (b.createDate == null) return 1;
          return a.createDate.localeCompare(b.createDate);
        };
      case clsPaperSubViewpointEN.con_ShareId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.shareId.localeCompare(b.shareId);
        };
      case clsPaperSubViewpointEN.con_TopicId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsPaperSubViewpointEN.con_AttitudesId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.attitudesId == null) return -1;
          if (b.attitudesId == null) return 1;
          return a.attitudesId.localeCompare(b.attitudesId);
        };
      case clsPaperSubViewpointEN.con_VersionCount:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.versionCount - b.versionCount;
        };
      case clsPaperSubViewpointEN.con_CitationCount:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return a.citationCount - b.citationCount;
        };
      case clsPaperSubViewpointEN.con_CourseId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.courseId == null) return -1;
          if (b.courseId == null) return 1;
          return a.courseId.localeCompare(b.courseId);
        };
      case clsPaperSubViewpointEN.con_IsRecommend:
        return (a: clsPaperSubViewpointEN) => {
          if (a.isRecommend == true) return 1;
          else return -1;
        };
      case clsPaperSubViewpointEN.con_UpdDate:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPaperSubViewpointEN.con_UpdUser:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsPaperSubViewpointEN.con_Memo:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PaperSubViewpoint]中不存在!(in ${paperSubViewpoint_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPaperSubViewpointEN.con_SubViewpointId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.subViewpointId - a.subViewpointId;
        };
      case clsPaperSubViewpointEN.con_SubViewpointContent:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.subViewpointContent == null) return -1;
          if (a.subViewpointContent == null) return 1;
          return b.subViewpointContent.localeCompare(a.subViewpointContent);
        };
      case clsPaperSubViewpointEN.con_PaperRWId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.paperRWId == null) return -1;
          if (a.paperRWId == null) return 1;
          return b.paperRWId.localeCompare(a.paperRWId);
        };
      case clsPaperSubViewpointEN.con_PaperId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.paperId.localeCompare(a.paperId);
        };
      case clsPaperSubViewpointEN.con_IdCurrEduCls:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsPaperSubViewpointEN.con_UserId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsPaperSubViewpointEN.con_SectionId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.sectionId == null) return -1;
          if (a.sectionId == null) return 1;
          return b.sectionId.localeCompare(a.sectionId);
        };
      case clsPaperSubViewpointEN.con_SubViewpointTypeId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.subViewpointTypeId.localeCompare(a.subViewpointTypeId);
        };
      case clsPaperSubViewpointEN.con_gsKnowledgeTypeId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.gsKnowledgeTypeId.localeCompare(a.gsKnowledgeTypeId);
        };
      case clsPaperSubViewpointEN.con_RWTitle:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.rWTitle == null) return -1;
          if (a.rWTitle == null) return 1;
          return b.rWTitle.localeCompare(a.rWTitle);
        };
      case clsPaperSubViewpointEN.con_ExplainTypeId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.explainTypeId == null) return -1;
          if (a.explainTypeId == null) return 1;
          return b.explainTypeId.localeCompare(a.explainTypeId);
        };
      case clsPaperSubViewpointEN.con_ExplainContent:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.explainContent == null) return -1;
          if (a.explainContent == null) return 1;
          return b.explainContent.localeCompare(a.explainContent);
        };
      case clsPaperSubViewpointEN.con_IsPublic:
        return (b: clsPaperSubViewpointEN) => {
          if (b.isPublic == true) return 1;
          else return -1;
        };
      case clsPaperSubViewpointEN.con_LiteratureSourcesId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.literatureSourcesId == null) return -1;
          if (a.literatureSourcesId == null) return 1;
          return b.literatureSourcesId.localeCompare(a.literatureSourcesId);
        };
      case clsPaperSubViewpointEN.con_OperationTypeId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.operationTypeId == null) return -1;
          if (a.operationTypeId == null) return 1;
          return b.operationTypeId.localeCompare(a.operationTypeId);
        };
      case clsPaperSubViewpointEN.con_LevelId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.levelId == null) return -1;
          if (a.levelId == null) return 1;
          return b.levelId.localeCompare(a.levelId);
        };
      case clsPaperSubViewpointEN.con_Conclusion:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.conclusion == null) return -1;
          if (a.conclusion == null) return 1;
          return b.conclusion.localeCompare(a.conclusion);
        };
      case clsPaperSubViewpointEN.con_Nationality:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.nationality == null) return -1;
          if (a.nationality == null) return 1;
          return b.nationality.localeCompare(a.nationality);
        };
      case clsPaperSubViewpointEN.con_Achievement:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.achievement == null) return -1;
          if (a.achievement == null) return 1;
          return b.achievement.localeCompare(a.achievement);
        };
      case clsPaperSubViewpointEN.con_Major:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.major == null) return -1;
          if (a.major == null) return 1;
          return b.major.localeCompare(a.major);
        };
      case clsPaperSubViewpointEN.con_WorkUnit:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.workUnit == null) return -1;
          if (a.workUnit == null) return 1;
          return b.workUnit.localeCompare(a.workUnit);
        };
      case clsPaperSubViewpointEN.con_PageNumber:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.pageNumber - a.pageNumber;
        };
      case clsPaperSubViewpointEN.con_OrderNum:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsPaperSubViewpointEN.con_PdfContent:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.pdfContent == null) return -1;
          if (a.pdfContent == null) return 1;
          return b.pdfContent.localeCompare(a.pdfContent);
        };
      case clsPaperSubViewpointEN.con_selectSpanRange:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.selectSpanRange == null) return -1;
          if (a.selectSpanRange == null) return 1;
          return b.selectSpanRange.localeCompare(a.selectSpanRange);
        };
      case clsPaperSubViewpointEN.con_PaperLineNum:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.paperLineNum - a.paperLineNum;
        };
      case clsPaperSubViewpointEN.con_PaperPageNum:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.paperPageNum - a.paperPageNum;
        };
      case clsPaperSubViewpointEN.con_AppraiseCount:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.appraiseCount - a.appraiseCount;
        };
      case clsPaperSubViewpointEN.con_OkCount:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.okCount - a.okCount;
        };
      case clsPaperSubViewpointEN.con_Score:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.score - a.score;
        };
      case clsPaperSubViewpointEN.con_StuScore:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.stuScore - a.stuScore;
        };
      case clsPaperSubViewpointEN.con_TeaScore:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsPaperSubViewpointEN.con_CreateDate:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.createDate == null) return -1;
          if (a.createDate == null) return 1;
          return b.createDate.localeCompare(a.createDate);
        };
      case clsPaperSubViewpointEN.con_ShareId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.shareId.localeCompare(a.shareId);
        };
      case clsPaperSubViewpointEN.con_TopicId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsPaperSubViewpointEN.con_AttitudesId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.attitudesId == null) return -1;
          if (a.attitudesId == null) return 1;
          return b.attitudesId.localeCompare(a.attitudesId);
        };
      case clsPaperSubViewpointEN.con_VersionCount:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.versionCount - a.versionCount;
        };
      case clsPaperSubViewpointEN.con_CitationCount:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          return b.citationCount - a.citationCount;
        };
      case clsPaperSubViewpointEN.con_CourseId:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.courseId == null) return -1;
          if (a.courseId == null) return 1;
          return b.courseId.localeCompare(a.courseId);
        };
      case clsPaperSubViewpointEN.con_IsRecommend:
        return (b: clsPaperSubViewpointEN) => {
          if (b.isRecommend == true) return 1;
          else return -1;
        };
      case clsPaperSubViewpointEN.con_UpdDate:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPaperSubViewpointEN.con_UpdUser:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsPaperSubViewpointEN.con_Memo:
        return (a: clsPaperSubViewpointEN, b: clsPaperSubViewpointEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PaperSubViewpoint]中不存在!(in ${paperSubViewpoint_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PaperSubViewpoint_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPaperSubViewpointEN.con_SubViewpointId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.subViewpointId === value;
      };
    case clsPaperSubViewpointEN.con_SubViewpointContent:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.subViewpointContent === value;
      };
    case clsPaperSubViewpointEN.con_PaperRWId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.paperRWId === value;
      };
    case clsPaperSubViewpointEN.con_PaperId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.paperId === value;
      };
    case clsPaperSubViewpointEN.con_IdCurrEduCls:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsPaperSubViewpointEN.con_UserId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.userId === value;
      };
    case clsPaperSubViewpointEN.con_SectionId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.sectionId === value;
      };
    case clsPaperSubViewpointEN.con_SubViewpointTypeId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.subViewpointTypeId === value;
      };
    case clsPaperSubViewpointEN.con_gsKnowledgeTypeId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.gsKnowledgeTypeId === value;
      };
    case clsPaperSubViewpointEN.con_RWTitle:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.rWTitle === value;
      };
    case clsPaperSubViewpointEN.con_ExplainTypeId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.explainTypeId === value;
      };
    case clsPaperSubViewpointEN.con_ExplainContent:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.explainContent === value;
      };
    case clsPaperSubViewpointEN.con_IsPublic:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.isPublic === value;
      };
    case clsPaperSubViewpointEN.con_LiteratureSourcesId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.literatureSourcesId === value;
      };
    case clsPaperSubViewpointEN.con_OperationTypeId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.operationTypeId === value;
      };
    case clsPaperSubViewpointEN.con_LevelId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.levelId === value;
      };
    case clsPaperSubViewpointEN.con_Conclusion:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.conclusion === value;
      };
    case clsPaperSubViewpointEN.con_Nationality:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.nationality === value;
      };
    case clsPaperSubViewpointEN.con_Achievement:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.achievement === value;
      };
    case clsPaperSubViewpointEN.con_Major:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.major === value;
      };
    case clsPaperSubViewpointEN.con_WorkUnit:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.workUnit === value;
      };
    case clsPaperSubViewpointEN.con_PageNumber:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.pageNumber === value;
      };
    case clsPaperSubViewpointEN.con_OrderNum:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.orderNum === value;
      };
    case clsPaperSubViewpointEN.con_PdfContent:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.pdfContent === value;
      };
    case clsPaperSubViewpointEN.con_selectSpanRange:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.selectSpanRange === value;
      };
    case clsPaperSubViewpointEN.con_PaperLineNum:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.paperLineNum === value;
      };
    case clsPaperSubViewpointEN.con_PaperPageNum:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.paperPageNum === value;
      };
    case clsPaperSubViewpointEN.con_AppraiseCount:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.appraiseCount === value;
      };
    case clsPaperSubViewpointEN.con_OkCount:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.okCount === value;
      };
    case clsPaperSubViewpointEN.con_Score:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.score === value;
      };
    case clsPaperSubViewpointEN.con_StuScore:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.stuScore === value;
      };
    case clsPaperSubViewpointEN.con_TeaScore:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.teaScore === value;
      };
    case clsPaperSubViewpointEN.con_CreateDate:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.createDate === value;
      };
    case clsPaperSubViewpointEN.con_ShareId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.shareId === value;
      };
    case clsPaperSubViewpointEN.con_TopicId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.topicId === value;
      };
    case clsPaperSubViewpointEN.con_AttitudesId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.attitudesId === value;
      };
    case clsPaperSubViewpointEN.con_VersionCount:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.versionCount === value;
      };
    case clsPaperSubViewpointEN.con_CitationCount:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.citationCount === value;
      };
    case clsPaperSubViewpointEN.con_CourseId:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.courseId === value;
      };
    case clsPaperSubViewpointEN.con_IsRecommend:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.isRecommend === value;
      };
    case clsPaperSubViewpointEN.con_UpdDate:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.updDate === value;
      };
    case clsPaperSubViewpointEN.con_UpdUser:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.updUser === value;
      };
    case clsPaperSubViewpointEN.con_Memo:
      return (obj: clsPaperSubViewpointEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PaperSubViewpoint]中不存在!(in ${paperSubViewpoint_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function PaperSubViewpoint_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsPaperSubViewpointWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsPaperSubViewpointWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsPaperSubViewpointEN.con_SubViewpointId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrPaperSubViewpoint = await PaperSubViewpoint_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrPaperSubViewpoint == null) return [];
  let arrPaperSubViewpointSel = arrPaperSubViewpoint;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPaperSubViewpointSel.length == 0) return [];
  return arrPaperSubViewpointSel.map((x) => x.subViewpointId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperSubViewpoint_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperSubViewpoint_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldName,
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const arrId = data.returnStrLst.split(',');
      return arrId;
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
export async function PaperSubViewpoint_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
export async function PaperSubViewpoint_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPaperSubViewpointEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

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
      const objPaperSubViewpoint = PaperSubViewpoint_GetObjFromJsonObj(returnObj);
      return objPaperSubViewpoint;
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
export async function PaperSubViewpoint_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPaperSubViewpointEN.WhereFormat) == false) {
    strWhereCond = Format(clsPaperSubViewpointEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsPaperSubViewpointEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsPaperSubViewpointEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperSubViewpointEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPaperSubViewpointExObjLstCache: Array<clsPaperSubViewpointEN> =
      CacheHelper.Get(strKey);
    const arrPaperSubViewpointObjLstT = PaperSubViewpoint_GetObjLstByJSONObjLst(
      arrPaperSubViewpointExObjLstCache,
    );
    return arrPaperSubViewpointObjLstT;
  }
  try {
    const arrPaperSubViewpointExObjLst = await PaperSubViewpoint_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPaperSubViewpointExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperSubViewpointExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperSubViewpointExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperSubViewpoint_ConstructorName,
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
export async function PaperSubViewpoint_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPaperSubViewpointEN.WhereFormat) == false) {
    strWhereCond = Format(clsPaperSubViewpointEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsPaperSubViewpointEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsPaperSubViewpointEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsPaperSubViewpointEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperSubViewpointEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPaperSubViewpointExObjLstCache: Array<clsPaperSubViewpointEN> =
      JSON.parse(strTempObjLst);
    const arrPaperSubViewpointObjLstT = PaperSubViewpoint_GetObjLstByJSONObjLst(
      arrPaperSubViewpointExObjLstCache,
    );
    return arrPaperSubViewpointObjLstT;
  }
  try {
    const arrPaperSubViewpointExObjLst = await PaperSubViewpoint_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPaperSubViewpointExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperSubViewpointExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperSubViewpointExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperSubViewpoint_ConstructorName,
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
export async function PaperSubViewpoint_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsPaperSubViewpointEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPaperSubViewpointObjLstCache: Array<clsPaperSubViewpointEN> =
      JSON.parse(strTempObjLst);
    return arrPaperSubViewpointObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PaperSubViewpoint_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPaperSubViewpointEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

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
          paperSubViewpoint_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperSubViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
export async function PaperSubViewpoint_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPaperSubViewpointEN.WhereFormat) == false) {
    strWhereCond = Format(clsPaperSubViewpointEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsPaperSubViewpointEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsPaperSubViewpointEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsPaperSubViewpointEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperSubViewpointEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPaperSubViewpointExObjLstCache: Array<clsPaperSubViewpointEN> =
      JSON.parse(strTempObjLst);
    const arrPaperSubViewpointObjLstT = PaperSubViewpoint_GetObjLstByJSONObjLst(
      arrPaperSubViewpointExObjLstCache,
    );
    return arrPaperSubViewpointObjLstT;
  }
  try {
    const arrPaperSubViewpointExObjLst = await PaperSubViewpoint_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPaperSubViewpointExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperSubViewpointExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperSubViewpointExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperSubViewpoint_ConstructorName,
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
export async function PaperSubViewpoint_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsPaperSubViewpointEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPaperSubViewpointObjLstCache: Array<clsPaperSubViewpointEN> =
      JSON.parse(strTempObjLst);
    return arrPaperSubViewpointObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperSubViewpoint_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsPaperSubViewpointEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsPaperSubViewpointWApi.PaperSubViewpoint_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsPaperSubViewpointWApi.PaperSubViewpoint_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrPaperSubViewpointObjLstCache;
  switch (clsPaperSubViewpointEN.CacheModeId) {
    case '04': //sessionStorage
      arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstsessionStorage(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstlocalStorage(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstClientCache(
        strIdCurrEduCls,
      );
      break;
    default:
      arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstClientCache(
        strIdCurrEduCls,
      );
      break;
  }
  return arrPaperSubViewpointObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperSubViewpoint_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPaperSubViewpointObjLstCache;
  switch (clsPaperSubViewpointEN.CacheModeId) {
    case '04': //sessionStorage
      arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstsessionStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstlocalStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrPaperSubViewpointObjLstCache = null;
      break;
    default:
      arrPaperSubViewpointObjLstCache = null;
      break;
  }
  return arrPaperSubViewpointObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngSubViewpointIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PaperSubViewpoint_GetSubObjLstCache(
  objPaperSubViewpointCond: clsPaperSubViewpointEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
  let arrPaperSubViewpointSel = arrPaperSubViewpointObjLstCache;
  if (
    objPaperSubViewpointCond.sfFldComparisonOp == null ||
    objPaperSubViewpointCond.sfFldComparisonOp == ''
  )
    return arrPaperSubViewpointSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperSubViewpointCond.sfFldComparisonOp,
  );
  //console.log("clsPaperSubViewpointWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperSubViewpointCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperSubViewpointCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPaperSubViewpointSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPaperSubViewpointCond),
      paperSubViewpoint_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperSubViewpointEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSubViewpointId:关键字列表
 * @returns 对象列表
 **/
export async function PaperSubViewpoint_GetObjLstBySubViewpointIdLstAsync(
  arrSubViewpointId: Array<string>,
): Promise<Array<clsPaperSubViewpointEN>> {
  const strThisFuncName = 'GetObjLstBySubViewpointIdLstAsync';
  const strAction = 'GetObjLstBySubViewpointIdLst';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSubViewpointId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          paperSubViewpoint_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperSubViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * @param arrlngSubViewpointIdLst:关键字列表
 * @returns 对象列表
 */
export async function PaperSubViewpoint_GetObjLstBySubViewpointIdLstCache(
  arrSubViewpointIdLst: Array<number>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstBySubViewpointIdLstCache';
  try {
    const arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
    const arrPaperSubViewpointSel = arrPaperSubViewpointObjLstCache.filter(
      (x) => arrSubViewpointIdLst.indexOf(x.subViewpointId) > -1,
    );
    return arrPaperSubViewpointSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrSubViewpointIdLst.join(','),
      paperSubViewpoint_ConstructorName,
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
export async function PaperSubViewpoint_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPaperSubViewpointEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

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
          paperSubViewpoint_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperSubViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
export async function PaperSubViewpoint_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPaperSubViewpointEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

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
          paperSubViewpoint_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperSubViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
export async function PaperSubViewpoint_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPaperSubViewpointEN>();
  const arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
  if (arrPaperSubViewpointObjLstCache.length == 0) return arrPaperSubViewpointObjLstCache;
  let arrPaperSubViewpointSel = arrPaperSubViewpointObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objPaperSubViewpointCond = new clsPaperSubViewpointEN();
  ObjectAssign(objPaperSubViewpointCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsPaperSubViewpointWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperSubViewpointCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPaperSubViewpointSel.length == 0) return arrPaperSubViewpointSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPaperSubViewpointSel = arrPaperSubViewpointSel.sort(
        PaperSubViewpoint_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPaperSubViewpointSel = arrPaperSubViewpointSel.sort(objPagerPara.sortFun);
    }
    arrPaperSubViewpointSel = arrPaperSubViewpointSel.slice(intStart, intEnd);
    return arrPaperSubViewpointSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      paperSubViewpoint_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperSubViewpointEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PaperSubViewpoint_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPaperSubViewpointEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPaperSubViewpointEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

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
          paperSubViewpoint_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperSubViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * @param lngSubViewpointId:关键字
 * @returns 获取删除的结果
 **/
export async function PaperSubViewpoint_DelRecordAsync(lngSubViewpointId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngSubViewpointId);

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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * @param arrSubViewpointId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PaperSubViewpoint_DelPaperSubViewpointsAsync(
  arrSubViewpointId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPaperSubViewpointsAsync';
  const strAction = 'DelPaperSubViewpoints';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSubViewpointId, config);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
export async function PaperSubViewpoint_DelPaperSubViewpointsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPaperSubViewpointsByCondAsync';
  const strAction = 'DelPaperSubViewpointsByCond';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * @param objPaperSubViewpointEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PaperSubViewpoint_AddNewRecordAsync(
  objPaperSubViewpointEN: clsPaperSubViewpointEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPaperSubViewpointEN);
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperSubViewpointEN, config);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/**
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objPaperSubViewpointEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PaperSubViewpoint_GoTopAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objPaperSubViewpointEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PaperSubViewpoint_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPaperSubViewpointEN);
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objPaperSubViewpointEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PaperSubViewpoint_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPaperSubViewpointEN);
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objPaperSubViewpointEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PaperSubViewpoint_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPaperSubViewpointEN);
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objPaperSubViewpointEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PaperSubViewpoint_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objPaperSubViewpointEN);
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * @param objPaperSubViewpointEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PaperSubViewpoint_AddNewRecordWithReturnKeyAsync(
  objPaperSubViewpointEN: clsPaperSubViewpointEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperSubViewpointEN, config);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * @param objPaperSubViewpointEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PaperSubViewpoint_UpdateRecordAsync(
  objPaperSubViewpointEN: clsPaperSubViewpointEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPaperSubViewpointEN.sfUpdFldSetStr === undefined ||
    objPaperSubViewpointEN.sfUpdFldSetStr === null ||
    objPaperSubViewpointEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPaperSubViewpointEN.subViewpointId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperSubViewpointEN, config);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * @param objPaperSubViewpointEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperSubViewpoint_UpdateWithConditionAsync(
  objPaperSubViewpointEN: clsPaperSubViewpointEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPaperSubViewpointEN.sfUpdFldSetStr === undefined ||
    objPaperSubViewpointEN.sfUpdFldSetStr === null ||
    objPaperSubViewpointEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPaperSubViewpointEN.subViewpointId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);
  objPaperSubViewpointEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperSubViewpointEN, config);
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * @param objlngSubViewpointIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PaperSubViewpoint_IsExistRecordCache(
  objPaperSubViewpointCond: clsPaperSubViewpointEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
  if (arrPaperSubViewpointObjLstCache == null) return false;
  let arrPaperSubViewpointSel = arrPaperSubViewpointObjLstCache;
  if (
    objPaperSubViewpointCond.sfFldComparisonOp == null ||
    objPaperSubViewpointCond.sfFldComparisonOp == ''
  )
    return arrPaperSubViewpointSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperSubViewpointCond.sfFldComparisonOp,
  );
  //console.log("clsPaperSubViewpointWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperSubViewpointCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperSubViewpointCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPaperSubViewpointSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPaperSubViewpointCond),
      paperSubViewpoint_ConstructorName,
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
export async function PaperSubViewpoint_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * @param lngSubViewpointId:所给的关键字
 * @returns 对象
 */
export async function PaperSubViewpoint_IsExistCache(
  lngSubViewpointId: number,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
  if (arrPaperSubViewpointObjLstCache == null) return false;
  try {
    const arrPaperSubViewpointSel = arrPaperSubViewpointObjLstCache.filter(
      (x) => x.subViewpointId == lngSubViewpointId,
    );
    if (arrPaperSubViewpointSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngSubViewpointId,
      paperSubViewpoint_ConstructorName,
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
 * @param lngSubViewpointId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PaperSubViewpoint_IsExistAsync(lngSubViewpointId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngSubViewpointId,
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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
export async function PaperSubViewpoint_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
 * @param objPaperSubViewpointCond:条件对象
 * @returns 对象列表记录数
 */
export async function PaperSubViewpoint_GetRecCountByCondCache(
  objPaperSubViewpointCond: clsPaperSubViewpointEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPaperSubViewpointObjLstCache = await PaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
  if (arrPaperSubViewpointObjLstCache == null) return 0;
  let arrPaperSubViewpointSel = arrPaperSubViewpointObjLstCache;
  if (
    objPaperSubViewpointCond.sfFldComparisonOp == null ||
    objPaperSubViewpointCond.sfFldComparisonOp == ''
  )
    return arrPaperSubViewpointSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperSubViewpointCond.sfFldComparisonOp,
  );
  //console.log("clsPaperSubViewpointWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperSubViewpointCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperSubViewpointCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperSubViewpointSel = arrPaperSubViewpointSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPaperSubViewpointSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPaperSubViewpointCond),
      paperSubViewpoint_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function PaperSubViewpoint_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(paperSubViewpoint_Controller, strAction);

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
        paperSubViewpoint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperSubViewpoint_ConstructorName,
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
export function PaperSubViewpoint_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PaperSubViewpoint_ReFreshCache(strIdCurrEduCls: string): void {
  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空!(In clsPaperSubViewpointWApi.clsPaperSubViewpointWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsPaperSubViewpointWApi.clsPaperSubViewpointWApi.ReFreshCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsPaperSubViewpointEN._CurrTabName, strIdCurrEduCls);
  switch (clsPaperSubViewpointEN.CacheModeId) {
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
  vPaperSubViewpoint_ReFreshThisCache(strIdCurrEduCls);
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function PaperSubViewpoint_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空!(In clsPaperSubViewpointWApi.PaperSubViewpoint_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsPaperSubViewpointWApi.PaperSubViewpoint_ReFreshThisCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsPaperSubViewpointEN._CurrTabName, strIdCurrEduCls);
    switch (clsPaperSubViewpointEN.CacheModeId) {
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
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PaperSubViewpoint_CheckPropertyNew(
  pobjPaperSubViewpointEN: clsPaperSubViewpointEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.paperId) === true ||
    pobjPaperSubViewpointEN.paperId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[论文Id]不能为空(In 子观点表)!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.idCurrEduCls) === true ||
    pobjPaperSubViewpointEN.idCurrEduCls.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[教学班流水号]不能为空(In 子观点表)!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjPaperSubViewpointEN.userId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[用户ID]不能为空(In 子观点表)!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.subViewpointTypeId) === true ||
    pobjPaperSubViewpointEN.subViewpointTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[类型Id]不能为空(In 子观点表)!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjPaperSubViewpointEN.gsKnowledgeTypeId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[知识类型Id]不能为空(In 子观点表)!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.shareId) === true ||
    pobjPaperSubViewpointEN.shareId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[分享Id]不能为空(In 子观点表)!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.subViewpointContent) == false &&
    GetStrLen(pobjPaperSubViewpointEN.subViewpointContent) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[详情内容(subViewpointContent)]的长度不能超过500(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.subViewpointContent}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.paperRWId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.paperRWId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[课文阅读(paperRWId)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.paperRWId}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.paperId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.paperId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.paperId}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.idCurrEduCls) == false &&
    GetStrLen(pobjPaperSubViewpointEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.idCurrEduCls}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.userId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.userId) > 18
  ) {
    throw new Error(
      `(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.userId}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.sectionId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.sectionId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[节Id(sectionId)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.sectionId}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.subViewpointTypeId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.subViewpointTypeId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[类型Id(subViewpointTypeId)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.subViewpointTypeId}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.gsKnowledgeTypeId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.gsKnowledgeTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[知识类型Id(gsKnowledgeTypeId)]的长度不能超过2(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.gsKnowledgeTypeId}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.rWTitle) == false &&
    GetStrLen(pobjPaperSubViewpointEN.rWTitle) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[读写标题(rWTitle)]的长度不能超过50(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.rWTitle}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.explainTypeId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.explainTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明类型Id(explainTypeId)]的长度不能超过2(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.explainTypeId}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.explainContent) == false &&
    GetStrLen(pobjPaperSubViewpointEN.explainContent) > 5000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明内容(explainContent)]的长度不能超过5000(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.explainContent}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.literatureSourcesId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.literatureSourcesId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[文献来源(literatureSourcesId)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.literatureSourcesId}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.operationTypeId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.operationTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[操作类型ID(operationTypeId)]的长度不能超过4(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.operationTypeId}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.levelId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.levelId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[级别Id(levelId)]的长度不能超过2(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.levelId}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.conclusion) == false &&
    GetStrLen(pobjPaperSubViewpointEN.conclusion) > 5000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[结论(conclusion)]的长度不能超过5000(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.conclusion}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.nationality) == false &&
    GetStrLen(pobjPaperSubViewpointEN.nationality) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[国籍(nationality)]的长度不能超过50(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.nationality}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.achievement) == false &&
    GetStrLen(pobjPaperSubViewpointEN.achievement) > 5000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[成就(achievement)]的长度不能超过5000(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.achievement}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.major) == false &&
    GetStrLen(pobjPaperSubViewpointEN.major) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[专业(major)]的长度不能超过50(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.major}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.workUnit) == false &&
    GetStrLen(pobjPaperSubViewpointEN.workUnit) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工作单位(workUnit)]的长度不能超过100(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.workUnit}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.pdfContent) == false &&
    GetStrLen(pobjPaperSubViewpointEN.pdfContent) > 2000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Pdf内容(pdfContent)]的长度不能超过2000(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.pdfContent}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.selectSpanRange) == false &&
    GetStrLen(pobjPaperSubViewpointEN.selectSpanRange) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[选择Span范围(selectSpanRange)]的长度不能超过50(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.selectSpanRange}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.createDate) == false &&
    GetStrLen(pobjPaperSubViewpointEN.createDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[建立日期(createDate)]的长度不能超过20(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.createDate}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.shareId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.shareId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[分享Id(shareId)]的长度不能超过2(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.shareId}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.topicId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.topicId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.topicId}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.attitudesId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.attitudesId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[态度Id(attitudesId)]的长度不能超过2(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.attitudesId}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.courseId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.courseId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.courseId}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.updDate) == false &&
    GetStrLen(pobjPaperSubViewpointEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.updDate}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.updUser) == false &&
    GetStrLen(pobjPaperSubViewpointEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.updUser}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.memo) == false &&
    GetStrLen(pobjPaperSubViewpointEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.memo}(clsPaperSubViewpointBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjPaperSubViewpointEN.subViewpointId &&
    undefined !== pobjPaperSubViewpointEN.subViewpointId &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.subViewpointId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[子观点Id(subViewpointId)]的值:[${pobjPaperSubViewpointEN.subViewpointId}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.subViewpointContent) == false &&
    undefined !== pobjPaperSubViewpointEN.subViewpointContent &&
    tzDataType.isString(pobjPaperSubViewpointEN.subViewpointContent) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[详情内容(subViewpointContent)]的值:[${pobjPaperSubViewpointEN.subViewpointContent}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.paperRWId) == false &&
    undefined !== pobjPaperSubViewpointEN.paperRWId &&
    tzDataType.isString(pobjPaperSubViewpointEN.paperRWId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[课文阅读(paperRWId)]的值:[${pobjPaperSubViewpointEN.paperRWId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.paperId) == false &&
    undefined !== pobjPaperSubViewpointEN.paperId &&
    tzDataType.isString(pobjPaperSubViewpointEN.paperId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[论文Id(paperId)]的值:[${pobjPaperSubViewpointEN.paperId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.idCurrEduCls) == false &&
    undefined !== pobjPaperSubViewpointEN.idCurrEduCls &&
    tzDataType.isString(pobjPaperSubViewpointEN.idCurrEduCls) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjPaperSubViewpointEN.idCurrEduCls}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.userId) == false &&
    undefined !== pobjPaperSubViewpointEN.userId &&
    tzDataType.isString(pobjPaperSubViewpointEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjPaperSubViewpointEN.userId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.sectionId) == false &&
    undefined !== pobjPaperSubViewpointEN.sectionId &&
    tzDataType.isString(pobjPaperSubViewpointEN.sectionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[节Id(sectionId)]的值:[${pobjPaperSubViewpointEN.sectionId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.subViewpointTypeId) == false &&
    undefined !== pobjPaperSubViewpointEN.subViewpointTypeId &&
    tzDataType.isString(pobjPaperSubViewpointEN.subViewpointTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[类型Id(subViewpointTypeId)]的值:[${pobjPaperSubViewpointEN.subViewpointTypeId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.gsKnowledgeTypeId) == false &&
    undefined !== pobjPaperSubViewpointEN.gsKnowledgeTypeId &&
    tzDataType.isString(pobjPaperSubViewpointEN.gsKnowledgeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[知识类型Id(gsKnowledgeTypeId)]的值:[${pobjPaperSubViewpointEN.gsKnowledgeTypeId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.rWTitle) == false &&
    undefined !== pobjPaperSubViewpointEN.rWTitle &&
    tzDataType.isString(pobjPaperSubViewpointEN.rWTitle) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[读写标题(rWTitle)]的值:[${pobjPaperSubViewpointEN.rWTitle}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.explainTypeId) == false &&
    undefined !== pobjPaperSubViewpointEN.explainTypeId &&
    tzDataType.isString(pobjPaperSubViewpointEN.explainTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明类型Id(explainTypeId)]的值:[${pobjPaperSubViewpointEN.explainTypeId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.explainContent) == false &&
    undefined !== pobjPaperSubViewpointEN.explainContent &&
    tzDataType.isString(pobjPaperSubViewpointEN.explainContent) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明内容(explainContent)]的值:[${pobjPaperSubViewpointEN.explainContent}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.isPublic &&
    undefined !== pobjPaperSubViewpointEN.isPublic &&
    tzDataType.isBoolean(pobjPaperSubViewpointEN.isPublic) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否公开(isPublic)]的值:[${pobjPaperSubViewpointEN.isPublic}], 非法,应该为布尔型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.literatureSourcesId) == false &&
    undefined !== pobjPaperSubViewpointEN.literatureSourcesId &&
    tzDataType.isString(pobjPaperSubViewpointEN.literatureSourcesId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[文献来源(literatureSourcesId)]的值:[${pobjPaperSubViewpointEN.literatureSourcesId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.operationTypeId) == false &&
    undefined !== pobjPaperSubViewpointEN.operationTypeId &&
    tzDataType.isString(pobjPaperSubViewpointEN.operationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[操作类型ID(operationTypeId)]的值:[${pobjPaperSubViewpointEN.operationTypeId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.levelId) == false &&
    undefined !== pobjPaperSubViewpointEN.levelId &&
    tzDataType.isString(pobjPaperSubViewpointEN.levelId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[级别Id(levelId)]的值:[${pobjPaperSubViewpointEN.levelId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.conclusion) == false &&
    undefined !== pobjPaperSubViewpointEN.conclusion &&
    tzDataType.isString(pobjPaperSubViewpointEN.conclusion) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[结论(conclusion)]的值:[${pobjPaperSubViewpointEN.conclusion}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.nationality) == false &&
    undefined !== pobjPaperSubViewpointEN.nationality &&
    tzDataType.isString(pobjPaperSubViewpointEN.nationality) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[国籍(nationality)]的值:[${pobjPaperSubViewpointEN.nationality}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.achievement) == false &&
    undefined !== pobjPaperSubViewpointEN.achievement &&
    tzDataType.isString(pobjPaperSubViewpointEN.achievement) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[成就(achievement)]的值:[${pobjPaperSubViewpointEN.achievement}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.major) == false &&
    undefined !== pobjPaperSubViewpointEN.major &&
    tzDataType.isString(pobjPaperSubViewpointEN.major) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[专业(major)]的值:[${pobjPaperSubViewpointEN.major}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.workUnit) == false &&
    undefined !== pobjPaperSubViewpointEN.workUnit &&
    tzDataType.isString(pobjPaperSubViewpointEN.workUnit) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工作单位(workUnit)]的值:[${pobjPaperSubViewpointEN.workUnit}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.pageNumber &&
    undefined !== pobjPaperSubViewpointEN.pageNumber &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.pageNumber) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[页码(pageNumber)]的值:[${pobjPaperSubViewpointEN.pageNumber}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.orderNum &&
    undefined !== pobjPaperSubViewpointEN.orderNum &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjPaperSubViewpointEN.orderNum}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.pdfContent) == false &&
    undefined !== pobjPaperSubViewpointEN.pdfContent &&
    tzDataType.isString(pobjPaperSubViewpointEN.pdfContent) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Pdf内容(pdfContent)]的值:[${pobjPaperSubViewpointEN.pdfContent}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.selectSpanRange) == false &&
    undefined !== pobjPaperSubViewpointEN.selectSpanRange &&
    tzDataType.isString(pobjPaperSubViewpointEN.selectSpanRange) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[选择Span范围(selectSpanRange)]的值:[${pobjPaperSubViewpointEN.selectSpanRange}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.paperLineNum &&
    undefined !== pobjPaperSubViewpointEN.paperLineNum &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.paperLineNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[论文行号(paperLineNum)]的值:[${pobjPaperSubViewpointEN.paperLineNum}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.paperPageNum &&
    undefined !== pobjPaperSubViewpointEN.paperPageNum &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.paperPageNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[论文页码(paperPageNum)]的值:[${pobjPaperSubViewpointEN.paperPageNum}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.appraiseCount &&
    undefined !== pobjPaperSubViewpointEN.appraiseCount &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.appraiseCount) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[评论数(appraiseCount)]的值:[${pobjPaperSubViewpointEN.appraiseCount}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.okCount &&
    undefined !== pobjPaperSubViewpointEN.okCount &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.okCount) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[点赞统计(okCount)]的值:[${pobjPaperSubViewpointEN.okCount}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.score &&
    undefined !== pobjPaperSubViewpointEN.score &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.score) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[评分(score)]的值:[${pobjPaperSubViewpointEN.score}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.stuScore &&
    undefined !== pobjPaperSubViewpointEN.stuScore &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.stuScore) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[学生平均分(stuScore)]的值:[${pobjPaperSubViewpointEN.stuScore}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.teaScore &&
    undefined !== pobjPaperSubViewpointEN.teaScore &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.teaScore) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[教师评分(teaScore)]的值:[${pobjPaperSubViewpointEN.teaScore}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.createDate) == false &&
    undefined !== pobjPaperSubViewpointEN.createDate &&
    tzDataType.isString(pobjPaperSubViewpointEN.createDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[建立日期(createDate)]的值:[${pobjPaperSubViewpointEN.createDate}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.shareId) == false &&
    undefined !== pobjPaperSubViewpointEN.shareId &&
    tzDataType.isString(pobjPaperSubViewpointEN.shareId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[分享Id(shareId)]的值:[${pobjPaperSubViewpointEN.shareId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.topicId) == false &&
    undefined !== pobjPaperSubViewpointEN.topicId &&
    tzDataType.isString(pobjPaperSubViewpointEN.topicId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[主题Id(topicId)]的值:[${pobjPaperSubViewpointEN.topicId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.attitudesId) == false &&
    undefined !== pobjPaperSubViewpointEN.attitudesId &&
    tzDataType.isString(pobjPaperSubViewpointEN.attitudesId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[态度Id(attitudesId)]的值:[${pobjPaperSubViewpointEN.attitudesId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.versionCount &&
    undefined !== pobjPaperSubViewpointEN.versionCount &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.versionCount) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[版本统计(versionCount)]的值:[${pobjPaperSubViewpointEN.versionCount}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.citationCount &&
    undefined !== pobjPaperSubViewpointEN.citationCount &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.citationCount) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[引用统计(citationCount)]的值:[${pobjPaperSubViewpointEN.citationCount}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.courseId) == false &&
    undefined !== pobjPaperSubViewpointEN.courseId &&
    tzDataType.isString(pobjPaperSubViewpointEN.courseId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjPaperSubViewpointEN.courseId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.isRecommend &&
    undefined !== pobjPaperSubViewpointEN.isRecommend &&
    tzDataType.isBoolean(pobjPaperSubViewpointEN.isRecommend) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否推荐(isRecommend)]的值:[${pobjPaperSubViewpointEN.isRecommend}], 非法,应该为布尔型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.updDate) == false &&
    undefined !== pobjPaperSubViewpointEN.updDate &&
    tzDataType.isString(pobjPaperSubViewpointEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjPaperSubViewpointEN.updDate}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.updUser) == false &&
    undefined !== pobjPaperSubViewpointEN.updUser &&
    tzDataType.isString(pobjPaperSubViewpointEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjPaperSubViewpointEN.updUser}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.memo) == false &&
    undefined !== pobjPaperSubViewpointEN.memo &&
    tzDataType.isString(pobjPaperSubViewpointEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[备注(memo)]的值:[${pobjPaperSubViewpointEN.memo}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.paperRWId) == false &&
    pobjPaperSubViewpointEN.paperRWId != '[nuull]' &&
    GetStrLen(pobjPaperSubViewpointEN.paperRWId) != 8
  ) {
    throw '(errid:Watl000415)字段[课文阅读]作为外键字段,长度应该为8(In 子观点表)!(clsPaperSubViewpointBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.subViewpointTypeId) == false &&
    pobjPaperSubViewpointEN.subViewpointTypeId != '[nuull]' &&
    GetStrLen(pobjPaperSubViewpointEN.subViewpointTypeId) != 8
  ) {
    throw '(errid:Watl000415)字段[类型Id]作为外键字段,长度应该为8(In 子观点表)!(clsPaperSubViewpointBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.gsKnowledgeTypeId) == false &&
    pobjPaperSubViewpointEN.gsKnowledgeTypeId != '[nuull]' &&
    GetStrLen(pobjPaperSubViewpointEN.gsKnowledgeTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[知识类型Id]作为外键字段,长度应该为2(In 子观点表)!(clsPaperSubViewpointBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.explainTypeId) == false &&
    pobjPaperSubViewpointEN.explainTypeId != '[nuull]' &&
    GetStrLen(pobjPaperSubViewpointEN.explainTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[说明类型Id]作为外键字段,长度应该为2(In 子观点表)!(clsPaperSubViewpointBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PaperSubViewpoint_CheckProperty4Update(
  pobjPaperSubViewpointEN: clsPaperSubViewpointEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.subViewpointContent) == false &&
    GetStrLen(pobjPaperSubViewpointEN.subViewpointContent) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[详情内容(subViewpointContent)]的长度不能超过500(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.subViewpointContent}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.paperRWId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.paperRWId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[课文阅读(paperRWId)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.paperRWId}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.paperId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.paperId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.paperId}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.idCurrEduCls) == false &&
    GetStrLen(pobjPaperSubViewpointEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.idCurrEduCls}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.userId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.userId) > 18
  ) {
    throw new Error(
      `(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.userId}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.sectionId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.sectionId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[节Id(sectionId)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.sectionId}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.subViewpointTypeId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.subViewpointTypeId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[类型Id(subViewpointTypeId)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.subViewpointTypeId}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.gsKnowledgeTypeId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.gsKnowledgeTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[知识类型Id(gsKnowledgeTypeId)]的长度不能超过2(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.gsKnowledgeTypeId}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.rWTitle) == false &&
    GetStrLen(pobjPaperSubViewpointEN.rWTitle) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[读写标题(rWTitle)]的长度不能超过50(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.rWTitle}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.explainTypeId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.explainTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明类型Id(explainTypeId)]的长度不能超过2(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.explainTypeId}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.explainContent) == false &&
    GetStrLen(pobjPaperSubViewpointEN.explainContent) > 5000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明内容(explainContent)]的长度不能超过5000(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.explainContent}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.literatureSourcesId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.literatureSourcesId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[文献来源(literatureSourcesId)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.literatureSourcesId}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.operationTypeId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.operationTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[操作类型ID(operationTypeId)]的长度不能超过4(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.operationTypeId}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.levelId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.levelId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[级别Id(levelId)]的长度不能超过2(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.levelId}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.conclusion) == false &&
    GetStrLen(pobjPaperSubViewpointEN.conclusion) > 5000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[结论(conclusion)]的长度不能超过5000(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.conclusion}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.nationality) == false &&
    GetStrLen(pobjPaperSubViewpointEN.nationality) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[国籍(nationality)]的长度不能超过50(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.nationality}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.achievement) == false &&
    GetStrLen(pobjPaperSubViewpointEN.achievement) > 5000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[成就(achievement)]的长度不能超过5000(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.achievement}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.major) == false &&
    GetStrLen(pobjPaperSubViewpointEN.major) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[专业(major)]的长度不能超过50(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.major}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.workUnit) == false &&
    GetStrLen(pobjPaperSubViewpointEN.workUnit) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工作单位(workUnit)]的长度不能超过100(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.workUnit}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.pdfContent) == false &&
    GetStrLen(pobjPaperSubViewpointEN.pdfContent) > 2000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Pdf内容(pdfContent)]的长度不能超过2000(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.pdfContent}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.selectSpanRange) == false &&
    GetStrLen(pobjPaperSubViewpointEN.selectSpanRange) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[选择Span范围(selectSpanRange)]的长度不能超过50(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.selectSpanRange}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.createDate) == false &&
    GetStrLen(pobjPaperSubViewpointEN.createDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[建立日期(createDate)]的长度不能超过20(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.createDate}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.shareId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.shareId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[分享Id(shareId)]的长度不能超过2(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.shareId}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.topicId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.topicId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.topicId}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.attitudesId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.attitudesId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[态度Id(attitudesId)]的长度不能超过2(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.attitudesId}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.courseId) == false &&
    GetStrLen(pobjPaperSubViewpointEN.courseId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.courseId}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.updDate) == false &&
    GetStrLen(pobjPaperSubViewpointEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.updDate}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.updUser) == false &&
    GetStrLen(pobjPaperSubViewpointEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.updUser}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.memo) == false &&
    GetStrLen(pobjPaperSubViewpointEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 子观点表(PaperSubViewpoint))!值:${pobjPaperSubViewpointEN.memo}(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjPaperSubViewpointEN.subViewpointId &&
    undefined !== pobjPaperSubViewpointEN.subViewpointId &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.subViewpointId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[子观点Id(subViewpointId)]的值:[${pobjPaperSubViewpointEN.subViewpointId}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.subViewpointContent) == false &&
    undefined !== pobjPaperSubViewpointEN.subViewpointContent &&
    tzDataType.isString(pobjPaperSubViewpointEN.subViewpointContent) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[详情内容(subViewpointContent)]的值:[${pobjPaperSubViewpointEN.subViewpointContent}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.paperRWId) == false &&
    undefined !== pobjPaperSubViewpointEN.paperRWId &&
    tzDataType.isString(pobjPaperSubViewpointEN.paperRWId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[课文阅读(paperRWId)]的值:[${pobjPaperSubViewpointEN.paperRWId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.paperId) == false &&
    undefined !== pobjPaperSubViewpointEN.paperId &&
    tzDataType.isString(pobjPaperSubViewpointEN.paperId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[论文Id(paperId)]的值:[${pobjPaperSubViewpointEN.paperId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.idCurrEduCls) == false &&
    undefined !== pobjPaperSubViewpointEN.idCurrEduCls &&
    tzDataType.isString(pobjPaperSubViewpointEN.idCurrEduCls) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjPaperSubViewpointEN.idCurrEduCls}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.userId) == false &&
    undefined !== pobjPaperSubViewpointEN.userId &&
    tzDataType.isString(pobjPaperSubViewpointEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjPaperSubViewpointEN.userId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.sectionId) == false &&
    undefined !== pobjPaperSubViewpointEN.sectionId &&
    tzDataType.isString(pobjPaperSubViewpointEN.sectionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[节Id(sectionId)]的值:[${pobjPaperSubViewpointEN.sectionId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.subViewpointTypeId) == false &&
    undefined !== pobjPaperSubViewpointEN.subViewpointTypeId &&
    tzDataType.isString(pobjPaperSubViewpointEN.subViewpointTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[类型Id(subViewpointTypeId)]的值:[${pobjPaperSubViewpointEN.subViewpointTypeId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.gsKnowledgeTypeId) == false &&
    undefined !== pobjPaperSubViewpointEN.gsKnowledgeTypeId &&
    tzDataType.isString(pobjPaperSubViewpointEN.gsKnowledgeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[知识类型Id(gsKnowledgeTypeId)]的值:[${pobjPaperSubViewpointEN.gsKnowledgeTypeId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.rWTitle) == false &&
    undefined !== pobjPaperSubViewpointEN.rWTitle &&
    tzDataType.isString(pobjPaperSubViewpointEN.rWTitle) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[读写标题(rWTitle)]的值:[${pobjPaperSubViewpointEN.rWTitle}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.explainTypeId) == false &&
    undefined !== pobjPaperSubViewpointEN.explainTypeId &&
    tzDataType.isString(pobjPaperSubViewpointEN.explainTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明类型Id(explainTypeId)]的值:[${pobjPaperSubViewpointEN.explainTypeId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.explainContent) == false &&
    undefined !== pobjPaperSubViewpointEN.explainContent &&
    tzDataType.isString(pobjPaperSubViewpointEN.explainContent) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明内容(explainContent)]的值:[${pobjPaperSubViewpointEN.explainContent}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.isPublic &&
    undefined !== pobjPaperSubViewpointEN.isPublic &&
    tzDataType.isBoolean(pobjPaperSubViewpointEN.isPublic) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否公开(isPublic)]的值:[${pobjPaperSubViewpointEN.isPublic}], 非法,应该为布尔型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.literatureSourcesId) == false &&
    undefined !== pobjPaperSubViewpointEN.literatureSourcesId &&
    tzDataType.isString(pobjPaperSubViewpointEN.literatureSourcesId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[文献来源(literatureSourcesId)]的值:[${pobjPaperSubViewpointEN.literatureSourcesId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.operationTypeId) == false &&
    undefined !== pobjPaperSubViewpointEN.operationTypeId &&
    tzDataType.isString(pobjPaperSubViewpointEN.operationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[操作类型ID(operationTypeId)]的值:[${pobjPaperSubViewpointEN.operationTypeId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.levelId) == false &&
    undefined !== pobjPaperSubViewpointEN.levelId &&
    tzDataType.isString(pobjPaperSubViewpointEN.levelId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[级别Id(levelId)]的值:[${pobjPaperSubViewpointEN.levelId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.conclusion) == false &&
    undefined !== pobjPaperSubViewpointEN.conclusion &&
    tzDataType.isString(pobjPaperSubViewpointEN.conclusion) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[结论(conclusion)]的值:[${pobjPaperSubViewpointEN.conclusion}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.nationality) == false &&
    undefined !== pobjPaperSubViewpointEN.nationality &&
    tzDataType.isString(pobjPaperSubViewpointEN.nationality) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[国籍(nationality)]的值:[${pobjPaperSubViewpointEN.nationality}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.achievement) == false &&
    undefined !== pobjPaperSubViewpointEN.achievement &&
    tzDataType.isString(pobjPaperSubViewpointEN.achievement) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[成就(achievement)]的值:[${pobjPaperSubViewpointEN.achievement}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.major) == false &&
    undefined !== pobjPaperSubViewpointEN.major &&
    tzDataType.isString(pobjPaperSubViewpointEN.major) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[专业(major)]的值:[${pobjPaperSubViewpointEN.major}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.workUnit) == false &&
    undefined !== pobjPaperSubViewpointEN.workUnit &&
    tzDataType.isString(pobjPaperSubViewpointEN.workUnit) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工作单位(workUnit)]的值:[${pobjPaperSubViewpointEN.workUnit}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.pageNumber &&
    undefined !== pobjPaperSubViewpointEN.pageNumber &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.pageNumber) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[页码(pageNumber)]的值:[${pobjPaperSubViewpointEN.pageNumber}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.orderNum &&
    undefined !== pobjPaperSubViewpointEN.orderNum &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjPaperSubViewpointEN.orderNum}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.pdfContent) == false &&
    undefined !== pobjPaperSubViewpointEN.pdfContent &&
    tzDataType.isString(pobjPaperSubViewpointEN.pdfContent) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Pdf内容(pdfContent)]的值:[${pobjPaperSubViewpointEN.pdfContent}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.selectSpanRange) == false &&
    undefined !== pobjPaperSubViewpointEN.selectSpanRange &&
    tzDataType.isString(pobjPaperSubViewpointEN.selectSpanRange) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[选择Span范围(selectSpanRange)]的值:[${pobjPaperSubViewpointEN.selectSpanRange}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.paperLineNum &&
    undefined !== pobjPaperSubViewpointEN.paperLineNum &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.paperLineNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[论文行号(paperLineNum)]的值:[${pobjPaperSubViewpointEN.paperLineNum}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.paperPageNum &&
    undefined !== pobjPaperSubViewpointEN.paperPageNum &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.paperPageNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[论文页码(paperPageNum)]的值:[${pobjPaperSubViewpointEN.paperPageNum}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.appraiseCount &&
    undefined !== pobjPaperSubViewpointEN.appraiseCount &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.appraiseCount) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[评论数(appraiseCount)]的值:[${pobjPaperSubViewpointEN.appraiseCount}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.okCount &&
    undefined !== pobjPaperSubViewpointEN.okCount &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.okCount) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[点赞统计(okCount)]的值:[${pobjPaperSubViewpointEN.okCount}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.score &&
    undefined !== pobjPaperSubViewpointEN.score &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.score) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[评分(score)]的值:[${pobjPaperSubViewpointEN.score}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.stuScore &&
    undefined !== pobjPaperSubViewpointEN.stuScore &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.stuScore) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[学生平均分(stuScore)]的值:[${pobjPaperSubViewpointEN.stuScore}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.teaScore &&
    undefined !== pobjPaperSubViewpointEN.teaScore &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.teaScore) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[教师评分(teaScore)]的值:[${pobjPaperSubViewpointEN.teaScore}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.createDate) == false &&
    undefined !== pobjPaperSubViewpointEN.createDate &&
    tzDataType.isString(pobjPaperSubViewpointEN.createDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[建立日期(createDate)]的值:[${pobjPaperSubViewpointEN.createDate}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.shareId) == false &&
    undefined !== pobjPaperSubViewpointEN.shareId &&
    tzDataType.isString(pobjPaperSubViewpointEN.shareId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[分享Id(shareId)]的值:[${pobjPaperSubViewpointEN.shareId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.topicId) == false &&
    undefined !== pobjPaperSubViewpointEN.topicId &&
    tzDataType.isString(pobjPaperSubViewpointEN.topicId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[主题Id(topicId)]的值:[${pobjPaperSubViewpointEN.topicId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.attitudesId) == false &&
    undefined !== pobjPaperSubViewpointEN.attitudesId &&
    tzDataType.isString(pobjPaperSubViewpointEN.attitudesId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[态度Id(attitudesId)]的值:[${pobjPaperSubViewpointEN.attitudesId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.versionCount &&
    undefined !== pobjPaperSubViewpointEN.versionCount &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.versionCount) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[版本统计(versionCount)]的值:[${pobjPaperSubViewpointEN.versionCount}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.citationCount &&
    undefined !== pobjPaperSubViewpointEN.citationCount &&
    tzDataType.isNumber(pobjPaperSubViewpointEN.citationCount) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[引用统计(citationCount)]的值:[${pobjPaperSubViewpointEN.citationCount}], 非法,应该为数值型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.courseId) == false &&
    undefined !== pobjPaperSubViewpointEN.courseId &&
    tzDataType.isString(pobjPaperSubViewpointEN.courseId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjPaperSubViewpointEN.courseId}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPaperSubViewpointEN.isRecommend &&
    undefined !== pobjPaperSubViewpointEN.isRecommend &&
    tzDataType.isBoolean(pobjPaperSubViewpointEN.isRecommend) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否推荐(isRecommend)]的值:[${pobjPaperSubViewpointEN.isRecommend}], 非法,应该为布尔型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.updDate) == false &&
    undefined !== pobjPaperSubViewpointEN.updDate &&
    tzDataType.isString(pobjPaperSubViewpointEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjPaperSubViewpointEN.updDate}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.updUser) == false &&
    undefined !== pobjPaperSubViewpointEN.updUser &&
    tzDataType.isString(pobjPaperSubViewpointEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjPaperSubViewpointEN.updUser}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.memo) == false &&
    undefined !== pobjPaperSubViewpointEN.memo &&
    tzDataType.isString(pobjPaperSubViewpointEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[备注(memo)]的值:[${pobjPaperSubViewpointEN.memo}], 非法,应该为字符型(In 子观点表(PaperSubViewpoint))!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjPaperSubViewpointEN.subViewpointId ||
    (pobjPaperSubViewpointEN.subViewpointId != null &&
      pobjPaperSubViewpointEN.subViewpointId.toString() === '') ||
    pobjPaperSubViewpointEN.subViewpointId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[子观点Id]不能为空(In 子观点表)!(clsPaperSubViewpointBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.paperRWId) == false &&
    pobjPaperSubViewpointEN.paperRWId != '[nuull]' &&
    GetStrLen(pobjPaperSubViewpointEN.paperRWId) != 8
  ) {
    throw '(errid:Watl000418)字段[课文阅读]作为外键字段,长度应该为8(In 子观点表)!(clsPaperSubViewpointBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.subViewpointTypeId) == false &&
    pobjPaperSubViewpointEN.subViewpointTypeId != '[nuull]' &&
    GetStrLen(pobjPaperSubViewpointEN.subViewpointTypeId) != 8
  ) {
    throw '(errid:Watl000418)字段[类型Id]作为外键字段,长度应该为8(In 子观点表)!(clsPaperSubViewpointBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.gsKnowledgeTypeId) == false &&
    pobjPaperSubViewpointEN.gsKnowledgeTypeId != '[nuull]' &&
    GetStrLen(pobjPaperSubViewpointEN.gsKnowledgeTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[知识类型Id]作为外键字段,长度应该为2(In 子观点表)!(clsPaperSubViewpointBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPaperSubViewpointEN.explainTypeId) == false &&
    pobjPaperSubViewpointEN.explainTypeId != '[nuull]' &&
    GetStrLen(pobjPaperSubViewpointEN.explainTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[说明类型Id]作为外键字段,长度应该为2(In 子观点表)!(clsPaperSubViewpointBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PaperSubViewpoint_GetJSONStrByObj(
  pobjPaperSubViewpointEN: clsPaperSubViewpointEN,
): string {
  pobjPaperSubViewpointEN.sfUpdFldSetStr = pobjPaperSubViewpointEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPaperSubViewpointEN);
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
 * 日期:2024-03-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PaperSubViewpoint_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsPaperSubViewpointEN> {
  let arrPaperSubViewpointObjLst = new Array<clsPaperSubViewpointEN>();
  if (strJSON === '') {
    return arrPaperSubViewpointObjLst;
  }
  try {
    arrPaperSubViewpointObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPaperSubViewpointObjLst;
  }
  return arrPaperSubViewpointObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPaperSubViewpointObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PaperSubViewpoint_GetObjLstByJSONObjLst(
  arrPaperSubViewpointObjLstS: Array<clsPaperSubViewpointEN>,
): Array<clsPaperSubViewpointEN> {
  const arrPaperSubViewpointObjLst = new Array<clsPaperSubViewpointEN>();
  for (const objInFor of arrPaperSubViewpointObjLstS) {
    const obj1 = PaperSubViewpoint_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPaperSubViewpointObjLst.push(obj1);
  }
  return arrPaperSubViewpointObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PaperSubViewpoint_GetObjByJSONStr(strJSON: string): clsPaperSubViewpointEN {
  let pobjPaperSubViewpointEN = new clsPaperSubViewpointEN();
  if (strJSON === '') {
    return pobjPaperSubViewpointEN;
  }
  try {
    pobjPaperSubViewpointEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPaperSubViewpointEN;
  }
  return pobjPaperSubViewpointEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PaperSubViewpoint_GetCombineCondition(
  objPaperSubViewpointCond: clsPaperSubViewpointEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_SubViewpointId,
    ) == true
  ) {
    const strComparisonOpSubViewpointId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_SubViewpointId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperSubViewpointEN.con_SubViewpointId,
      objPaperSubViewpointCond.subViewpointId,
      strComparisonOpSubViewpointId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_SubViewpointContent,
    ) == true
  ) {
    const strComparisonOpSubViewpointContent: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_SubViewpointContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_SubViewpointContent,
      objPaperSubViewpointCond.subViewpointContent,
      strComparisonOpSubViewpointContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_PaperRWId,
    ) == true
  ) {
    const strComparisonOpPaperRWId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_PaperRWId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_PaperRWId,
      objPaperSubViewpointCond.paperRWId,
      strComparisonOpPaperRWId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_PaperId,
      objPaperSubViewpointCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_IdCurrEduCls,
      objPaperSubViewpointCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_UserId,
      objPaperSubViewpointCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_SectionId,
    ) == true
  ) {
    const strComparisonOpSectionId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_SectionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_SectionId,
      objPaperSubViewpointCond.sectionId,
      strComparisonOpSectionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_SubViewpointTypeId,
    ) == true
  ) {
    const strComparisonOpSubViewpointTypeId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_SubViewpointTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_SubViewpointTypeId,
      objPaperSubViewpointCond.subViewpointTypeId,
      strComparisonOpSubViewpointTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_gsKnowledgeTypeId,
    ) == true
  ) {
    const strComparisonOpgsKnowledgeTypeId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_gsKnowledgeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_gsKnowledgeTypeId,
      objPaperSubViewpointCond.gsKnowledgeTypeId,
      strComparisonOpgsKnowledgeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_RWTitle,
    ) == true
  ) {
    const strComparisonOpRWTitle: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_RWTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_RWTitle,
      objPaperSubViewpointCond.rWTitle,
      strComparisonOpRWTitle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_ExplainTypeId,
    ) == true
  ) {
    const strComparisonOpExplainTypeId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_ExplainTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_ExplainTypeId,
      objPaperSubViewpointCond.explainTypeId,
      strComparisonOpExplainTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_ExplainContent,
    ) == true
  ) {
    const strComparisonOpExplainContent: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_ExplainContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_ExplainContent,
      objPaperSubViewpointCond.explainContent,
      strComparisonOpExplainContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_IsPublic,
    ) == true
  ) {
    if (objPaperSubViewpointCond.isPublic == true) {
      strWhereCond += Format(" And {0} = '1'", clsPaperSubViewpointEN.con_IsPublic);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPaperSubViewpointEN.con_IsPublic);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_LiteratureSourcesId,
    ) == true
  ) {
    const strComparisonOpLiteratureSourcesId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_LiteratureSourcesId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_LiteratureSourcesId,
      objPaperSubViewpointCond.literatureSourcesId,
      strComparisonOpLiteratureSourcesId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_OperationTypeId,
    ) == true
  ) {
    const strComparisonOpOperationTypeId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_OperationTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_OperationTypeId,
      objPaperSubViewpointCond.operationTypeId,
      strComparisonOpOperationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_LevelId,
    ) == true
  ) {
    const strComparisonOpLevelId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_LevelId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_LevelId,
      objPaperSubViewpointCond.levelId,
      strComparisonOpLevelId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_Conclusion,
    ) == true
  ) {
    const strComparisonOpConclusion: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_Conclusion];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_Conclusion,
      objPaperSubViewpointCond.conclusion,
      strComparisonOpConclusion,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_Nationality,
    ) == true
  ) {
    const strComparisonOpNationality: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_Nationality];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_Nationality,
      objPaperSubViewpointCond.nationality,
      strComparisonOpNationality,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_Achievement,
    ) == true
  ) {
    const strComparisonOpAchievement: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_Achievement];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_Achievement,
      objPaperSubViewpointCond.achievement,
      strComparisonOpAchievement,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_Major,
    ) == true
  ) {
    const strComparisonOpMajor: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_Major];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_Major,
      objPaperSubViewpointCond.major,
      strComparisonOpMajor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_WorkUnit,
    ) == true
  ) {
    const strComparisonOpWorkUnit: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_WorkUnit];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_WorkUnit,
      objPaperSubViewpointCond.workUnit,
      strComparisonOpWorkUnit,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_PageNumber,
    ) == true
  ) {
    const strComparisonOpPageNumber: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_PageNumber];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperSubViewpointEN.con_PageNumber,
      objPaperSubViewpointCond.pageNumber,
      strComparisonOpPageNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperSubViewpointEN.con_OrderNum,
      objPaperSubViewpointCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_PdfContent,
    ) == true
  ) {
    const strComparisonOpPdfContent: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_PdfContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_PdfContent,
      objPaperSubViewpointCond.pdfContent,
      strComparisonOpPdfContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_selectSpanRange,
    ) == true
  ) {
    const strComparisonOpselectSpanRange: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_selectSpanRange];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_selectSpanRange,
      objPaperSubViewpointCond.selectSpanRange,
      strComparisonOpselectSpanRange,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_PaperLineNum,
    ) == true
  ) {
    const strComparisonOpPaperLineNum: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_PaperLineNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperSubViewpointEN.con_PaperLineNum,
      objPaperSubViewpointCond.paperLineNum,
      strComparisonOpPaperLineNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_PaperPageNum,
    ) == true
  ) {
    const strComparisonOpPaperPageNum: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_PaperPageNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperSubViewpointEN.con_PaperPageNum,
      objPaperSubViewpointCond.paperPageNum,
      strComparisonOpPaperPageNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_AppraiseCount,
    ) == true
  ) {
    const strComparisonOpAppraiseCount: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_AppraiseCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperSubViewpointEN.con_AppraiseCount,
      objPaperSubViewpointCond.appraiseCount,
      strComparisonOpAppraiseCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_OkCount,
    ) == true
  ) {
    const strComparisonOpOkCount: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_OkCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperSubViewpointEN.con_OkCount,
      objPaperSubViewpointCond.okCount,
      strComparisonOpOkCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperSubViewpointEN.con_Score,
      objPaperSubViewpointCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperSubViewpointEN.con_StuScore,
      objPaperSubViewpointCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperSubViewpointEN.con_TeaScore,
      objPaperSubViewpointCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_CreateDate,
    ) == true
  ) {
    const strComparisonOpCreateDate: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_CreateDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_CreateDate,
      objPaperSubViewpointCond.createDate,
      strComparisonOpCreateDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_ShareId,
    ) == true
  ) {
    const strComparisonOpShareId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_ShareId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_ShareId,
      objPaperSubViewpointCond.shareId,
      strComparisonOpShareId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_TopicId,
      objPaperSubViewpointCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_AttitudesId,
    ) == true
  ) {
    const strComparisonOpAttitudesId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_AttitudesId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_AttitudesId,
      objPaperSubViewpointCond.attitudesId,
      strComparisonOpAttitudesId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_VersionCount,
    ) == true
  ) {
    const strComparisonOpVersionCount: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_VersionCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperSubViewpointEN.con_VersionCount,
      objPaperSubViewpointCond.versionCount,
      strComparisonOpVersionCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_CitationCount,
    ) == true
  ) {
    const strComparisonOpCitationCount: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_CitationCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperSubViewpointEN.con_CitationCount,
      objPaperSubViewpointCond.citationCount,
      strComparisonOpCitationCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_CourseId,
    ) == true
  ) {
    const strComparisonOpCourseId: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_CourseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_CourseId,
      objPaperSubViewpointCond.courseId,
      strComparisonOpCourseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_IsRecommend,
    ) == true
  ) {
    if (objPaperSubViewpointCond.isRecommend == true) {
      strWhereCond += Format(" And {0} = '1'", clsPaperSubViewpointEN.con_IsRecommend);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPaperSubViewpointEN.con_IsRecommend);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_UpdDate,
      objPaperSubViewpointCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_UpdUser,
      objPaperSubViewpointCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperSubViewpointCond.dicFldComparisonOp,
      clsPaperSubViewpointEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPaperSubViewpointCond.dicFldComparisonOp[clsPaperSubViewpointEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperSubViewpointEN.con_Memo,
      objPaperSubViewpointCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PaperSubViewpoint(子观点表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @param strSubViewpointTypeId: 类型Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strSubViewpointContent: 详情内容(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PaperSubViewpoint_GetUniCondStr(
  objPaperSubViewpointEN: clsPaperSubViewpointEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PaperId = '{0}'", objPaperSubViewpointEN.paperId);
  strWhereCond += Format(
    " and SubViewpointTypeId = '{0}'",
    objPaperSubViewpointEN.subViewpointTypeId,
  );
  strWhereCond += Format(" and UserId = '{0}'", objPaperSubViewpointEN.userId);
  strWhereCond += Format(
    " and SubViewpointContent = '{0}'",
    objPaperSubViewpointEN.subViewpointContent,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PaperSubViewpoint(子观点表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @param strSubViewpointTypeId: 类型Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strSubViewpointContent: 详情内容(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PaperSubViewpoint_GetUniCondStr4Update(
  objPaperSubViewpointEN: clsPaperSubViewpointEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and SubViewpointId <> '{0}'", objPaperSubViewpointEN.subViewpointId);
  strWhereCond += Format(" and PaperId = '{0}'", objPaperSubViewpointEN.paperId);
  strWhereCond += Format(
    " and SubViewpointTypeId = '{0}'",
    objPaperSubViewpointEN.subViewpointTypeId,
  );
  strWhereCond += Format(" and UserId = '{0}'", objPaperSubViewpointEN.userId);
  strWhereCond += Format(
    " and SubViewpointContent = '{0}'",
    objPaperSubViewpointEN.subViewpointContent,
  );
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objPaperSubViewpointENS:源对象
 * @param objPaperSubViewpointENT:目标对象
 */
export function PaperSubViewpoint_CopyObjTo(
  objPaperSubViewpointENS: clsPaperSubViewpointEN,
  objPaperSubViewpointENT: clsPaperSubViewpointEN,
): void {
  objPaperSubViewpointENT.subViewpointId = objPaperSubViewpointENS.subViewpointId; //子观点Id
  objPaperSubViewpointENT.subViewpointContent = objPaperSubViewpointENS.subViewpointContent; //详情内容
  objPaperSubViewpointENT.paperRWId = objPaperSubViewpointENS.paperRWId; //课文阅读
  objPaperSubViewpointENT.paperId = objPaperSubViewpointENS.paperId; //论文Id
  objPaperSubViewpointENT.idCurrEduCls = objPaperSubViewpointENS.idCurrEduCls; //教学班流水号
  objPaperSubViewpointENT.userId = objPaperSubViewpointENS.userId; //用户ID
  objPaperSubViewpointENT.sectionId = objPaperSubViewpointENS.sectionId; //节Id
  objPaperSubViewpointENT.subViewpointTypeId = objPaperSubViewpointENS.subViewpointTypeId; //类型Id
  objPaperSubViewpointENT.gsKnowledgeTypeId = objPaperSubViewpointENS.gsKnowledgeTypeId; //知识类型Id
  objPaperSubViewpointENT.rWTitle = objPaperSubViewpointENS.rWTitle; //读写标题
  objPaperSubViewpointENT.explainTypeId = objPaperSubViewpointENS.explainTypeId; //说明类型Id
  objPaperSubViewpointENT.explainContent = objPaperSubViewpointENS.explainContent; //说明内容
  objPaperSubViewpointENT.isPublic = objPaperSubViewpointENS.isPublic; //是否公开
  objPaperSubViewpointENT.literatureSourcesId = objPaperSubViewpointENS.literatureSourcesId; //文献来源
  objPaperSubViewpointENT.operationTypeId = objPaperSubViewpointENS.operationTypeId; //操作类型ID
  objPaperSubViewpointENT.levelId = objPaperSubViewpointENS.levelId; //级别Id
  objPaperSubViewpointENT.conclusion = objPaperSubViewpointENS.conclusion; //结论
  objPaperSubViewpointENT.nationality = objPaperSubViewpointENS.nationality; //国籍
  objPaperSubViewpointENT.achievement = objPaperSubViewpointENS.achievement; //成就
  objPaperSubViewpointENT.major = objPaperSubViewpointENS.major; //专业
  objPaperSubViewpointENT.workUnit = objPaperSubViewpointENS.workUnit; //工作单位
  objPaperSubViewpointENT.pageNumber = objPaperSubViewpointENS.pageNumber; //页码
  objPaperSubViewpointENT.orderNum = objPaperSubViewpointENS.orderNum; //序号
  objPaperSubViewpointENT.pdfContent = objPaperSubViewpointENS.pdfContent; //Pdf内容
  objPaperSubViewpointENT.selectSpanRange = objPaperSubViewpointENS.selectSpanRange; //选择Span范围
  objPaperSubViewpointENT.paperLineNum = objPaperSubViewpointENS.paperLineNum; //论文行号
  objPaperSubViewpointENT.paperPageNum = objPaperSubViewpointENS.paperPageNum; //论文页码
  objPaperSubViewpointENT.appraiseCount = objPaperSubViewpointENS.appraiseCount; //评论数
  objPaperSubViewpointENT.okCount = objPaperSubViewpointENS.okCount; //点赞统计
  objPaperSubViewpointENT.score = objPaperSubViewpointENS.score; //评分
  objPaperSubViewpointENT.stuScore = objPaperSubViewpointENS.stuScore; //学生平均分
  objPaperSubViewpointENT.teaScore = objPaperSubViewpointENS.teaScore; //教师评分
  objPaperSubViewpointENT.createDate = objPaperSubViewpointENS.createDate; //建立日期
  objPaperSubViewpointENT.shareId = objPaperSubViewpointENS.shareId; //分享Id
  objPaperSubViewpointENT.topicId = objPaperSubViewpointENS.topicId; //主题Id
  objPaperSubViewpointENT.attitudesId = objPaperSubViewpointENS.attitudesId; //态度Id
  objPaperSubViewpointENT.versionCount = objPaperSubViewpointENS.versionCount; //版本统计
  objPaperSubViewpointENT.citationCount = objPaperSubViewpointENS.citationCount; //引用统计
  objPaperSubViewpointENT.courseId = objPaperSubViewpointENS.courseId; //课程Id
  objPaperSubViewpointENT.isRecommend = objPaperSubViewpointENS.isRecommend; //是否推荐
  objPaperSubViewpointENT.updDate = objPaperSubViewpointENS.updDate; //修改日期
  objPaperSubViewpointENT.updUser = objPaperSubViewpointENS.updUser; //修改人
  objPaperSubViewpointENT.memo = objPaperSubViewpointENS.memo; //备注
  objPaperSubViewpointENT.sfUpdFldSetStr = objPaperSubViewpointENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPaperSubViewpointENS:源对象
 * @param objPaperSubViewpointENT:目标对象
 */
export function PaperSubViewpoint_GetObjFromJsonObj(
  objPaperSubViewpointENS: clsPaperSubViewpointEN,
): clsPaperSubViewpointEN {
  const objPaperSubViewpointENT: clsPaperSubViewpointEN = new clsPaperSubViewpointEN();
  ObjectAssign(objPaperSubViewpointENT, objPaperSubViewpointENS);
  return objPaperSubViewpointENT;
}
