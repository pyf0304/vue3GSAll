/**
 * 类名:clsvConceptWApi
 * 表名:vConcept(01120619)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:01
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 概念视图(vConcept)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月08日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvConceptEN } from '@/ts/L0Entity/GradEduTopic/clsvConceptEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vConcept_Controller = 'vConceptApi';
export const vConcept_ConstructorName = 'vConcept';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strConceptId:关键字
 * @returns 对象
 **/
export async function vConcept_GetObjByConceptIdAsync(
  strConceptId: string,
): Promise<clsvConceptEN | null> {
  const strThisFuncName = 'GetObjByConceptIdAsync';

  if (IsNullOrEmpty(strConceptId) == true) {
    const strMsg = Format(
      '参数:[strConceptId]不能为空!(In clsvConceptWApi.GetObjByConceptIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strConceptId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strConceptId]的长度:[{0}]不正确!(clsvConceptWApi.GetObjByConceptIdAsync)',
      strConceptId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByConceptId';
  const strUrl = GetWebApiUrl(vConcept_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strConceptId,
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
      const objvConcept = vConcept_GetObjFromJsonObj(returnObj);
      return objvConcept;
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
        vConcept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConcept_ConstructorName,
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
 * @param strConceptId:所给的关键字
 * @returns 对象
 */
export async function vConcept_GetObjByConceptIdCache(
  strConceptId: string,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByConceptIdCache';

  if (IsNullOrEmpty(strConceptId) == true) {
    const strMsg = Format(
      '参数:[strConceptId]不能为空!(In clsvConceptWApi.GetObjByConceptIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strConceptId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strConceptId]的长度:[{0}]不正确!(clsvConceptWApi.GetObjByConceptIdCache)',
      strConceptId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvConceptObjLstCache = await vConcept_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrvConceptSel = arrvConceptObjLstCache.filter((x) => x.conceptId == strConceptId);
    let objvConcept: clsvConceptEN;
    if (arrvConceptSel.length > 0) {
      objvConcept = arrvConceptSel[0];
      return objvConcept;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvConceptConst = await vConcept_GetObjByConceptIdAsync(strConceptId);
        if (objvConceptConst != null) {
          vConcept_ReFreshThisCache(strIdCurrEduCls);
          return objvConceptConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strConceptId,
      vConcept_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strConceptId:所给的关键字
 * @returns 对象
 */
export async function vConcept_GetObjByConceptIdlocalStorage(strConceptId: string) {
  const strThisFuncName = 'GetObjByConceptIdlocalStorage';

  if (IsNullOrEmpty(strConceptId) == true) {
    const strMsg = Format(
      '参数:[strConceptId]不能为空!(In clsvConceptWApi.GetObjByConceptIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strConceptId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strConceptId]的长度:[{0}]不正确!(clsvConceptWApi.GetObjByConceptIdlocalStorage)',
      strConceptId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvConceptEN._CurrTabName, strConceptId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvConceptCache: clsvConceptEN = JSON.parse(strTempObj);
    return objvConceptCache;
  }
  try {
    const objvConcept = await vConcept_GetObjByConceptIdAsync(strConceptId);
    if (objvConcept != null) {
      localStorage.setItem(strKey, JSON.stringify(objvConcept));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvConcept;
    }
    return objvConcept;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strConceptId,
      vConcept_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vConcept_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsvConceptWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvConceptWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvConceptEN.con_ConceptId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvConceptEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvConceptEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strConceptId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvConcept = await vConcept_GetObjByConceptIdCache(strConceptId, strIdCurrEduClsClassfy);
  if (objvConcept == null) return '';
  if (objvConcept.GetFldValue(strOutFldName) == null) return '';
  return objvConcept.GetFldValue(strOutFldName).toString();
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
export function vConcept_SortFunDefa(a: clsvConceptEN, b: clsvConceptEN): number {
  return a.conceptId.localeCompare(b.conceptId);
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
export function vConcept_SortFunDefa2Fld(a: clsvConceptEN, b: clsvConceptEN): number {
  if (a.conceptContent == b.conceptContent) return a.conceptName.localeCompare(b.conceptName);
  else return a.conceptContent.localeCompare(b.conceptContent);
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
export function vConcept_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvConceptEN.con_ConceptContent:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (a.conceptContent == null) return -1;
          if (b.conceptContent == null) return 1;
          return a.conceptContent.localeCompare(b.conceptContent);
        };
      case clsvConceptEN.con_ConceptName:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (a.conceptName == null) return -1;
          if (b.conceptName == null) return 1;
          return a.conceptName.localeCompare(b.conceptName);
        };
      case clsvConceptEN.con_IsSubmit:
        return (a: clsvConceptEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsvConceptEN.con_ConceptId:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return a.conceptId.localeCompare(b.conceptId);
        };
      case clsvConceptEN.con_UpdDate:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvConceptEN.con_Memo:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvConceptEN.con_Author:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (a.author == null) return -1;
          if (b.author == null) return 1;
          return a.author.localeCompare(b.author);
        };
      case clsvConceptEN.con_CitationId:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (a.citationId == null) return -1;
          if (b.citationId == null) return 1;
          return a.citationId.localeCompare(b.citationId);
        };
      case clsvConceptEN.con_Keyword:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (a.keyword == null) return -1;
          if (b.keyword == null) return 1;
          return a.keyword.localeCompare(b.keyword);
        };
      case clsvConceptEN.con_PaperTitle:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (a.paperTitle == null) return -1;
          if (b.paperTitle == null) return 1;
          return a.paperTitle.localeCompare(b.paperTitle);
        };
      case clsvConceptEN.con_Periodical:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (a.periodical == null) return -1;
          if (b.periodical == null) return 1;
          return a.periodical.localeCompare(b.periodical);
        };
      case clsvConceptEN.con_ResearchQuestion:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (a.researchQuestion == null) return -1;
          if (b.researchQuestion == null) return 1;
          return a.researchQuestion.localeCompare(b.researchQuestion);
        };
      case clsvConceptEN.con_CitationCount:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return a.citationCount - b.citationCount;
        };
      case clsvConceptEN.con_AppraiseCount:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return a.appraiseCount - b.appraiseCount;
        };
      case clsvConceptEN.con_Score:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return a.score - b.score;
        };
      case clsvConceptEN.con_StuScore:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return a.stuScore - b.stuScore;
        };
      case clsvConceptEN.con_TeaScore:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsvConceptEN.con_IdCurrEduCls:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvConceptEN.con_PdfPageNum:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return a.pdfPageNum - b.pdfPageNum;
        };
      case clsvConceptEN.con_OkCount:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return a.okCount - b.okCount;
        };
      case clsvConceptEN.con_VersionCount:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return a.versionCount - b.versionCount;
        };
      case clsvConceptEN.con_CreateDate:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (a.createDate == null) return -1;
          if (b.createDate == null) return 1;
          return a.createDate.localeCompare(b.createDate);
        };
      case clsvConceptEN.con_ShareId:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return a.shareId.localeCompare(b.shareId);
        };
      case clsvConceptEN.con_UpdUser:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvConceptEN.con_PdfContent:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (a.pdfContent == null) return -1;
          if (b.pdfContent == null) return 1;
          return a.pdfContent.localeCompare(b.pdfContent);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vConcept]中不存在!(in ${vConcept_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvConceptEN.con_ConceptContent:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (b.conceptContent == null) return -1;
          if (a.conceptContent == null) return 1;
          return b.conceptContent.localeCompare(a.conceptContent);
        };
      case clsvConceptEN.con_ConceptName:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (b.conceptName == null) return -1;
          if (a.conceptName == null) return 1;
          return b.conceptName.localeCompare(a.conceptName);
        };
      case clsvConceptEN.con_IsSubmit:
        return (b: clsvConceptEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsvConceptEN.con_ConceptId:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return b.conceptId.localeCompare(a.conceptId);
        };
      case clsvConceptEN.con_UpdDate:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvConceptEN.con_Memo:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvConceptEN.con_Author:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (b.author == null) return -1;
          if (a.author == null) return 1;
          return b.author.localeCompare(a.author);
        };
      case clsvConceptEN.con_CitationId:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (b.citationId == null) return -1;
          if (a.citationId == null) return 1;
          return b.citationId.localeCompare(a.citationId);
        };
      case clsvConceptEN.con_Keyword:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (b.keyword == null) return -1;
          if (a.keyword == null) return 1;
          return b.keyword.localeCompare(a.keyword);
        };
      case clsvConceptEN.con_PaperTitle:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (b.paperTitle == null) return -1;
          if (a.paperTitle == null) return 1;
          return b.paperTitle.localeCompare(a.paperTitle);
        };
      case clsvConceptEN.con_Periodical:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (b.periodical == null) return -1;
          if (a.periodical == null) return 1;
          return b.periodical.localeCompare(a.periodical);
        };
      case clsvConceptEN.con_ResearchQuestion:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (b.researchQuestion == null) return -1;
          if (a.researchQuestion == null) return 1;
          return b.researchQuestion.localeCompare(a.researchQuestion);
        };
      case clsvConceptEN.con_CitationCount:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return b.citationCount - a.citationCount;
        };
      case clsvConceptEN.con_AppraiseCount:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return b.appraiseCount - a.appraiseCount;
        };
      case clsvConceptEN.con_Score:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return b.score - a.score;
        };
      case clsvConceptEN.con_StuScore:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return b.stuScore - a.stuScore;
        };
      case clsvConceptEN.con_TeaScore:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsvConceptEN.con_IdCurrEduCls:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvConceptEN.con_PdfPageNum:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return b.pdfPageNum - a.pdfPageNum;
        };
      case clsvConceptEN.con_OkCount:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return b.okCount - a.okCount;
        };
      case clsvConceptEN.con_VersionCount:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return b.versionCount - a.versionCount;
        };
      case clsvConceptEN.con_CreateDate:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (b.createDate == null) return -1;
          if (a.createDate == null) return 1;
          return b.createDate.localeCompare(a.createDate);
        };
      case clsvConceptEN.con_ShareId:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          return b.shareId.localeCompare(a.shareId);
        };
      case clsvConceptEN.con_UpdUser:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvConceptEN.con_PdfContent:
        return (a: clsvConceptEN, b: clsvConceptEN) => {
          if (b.pdfContent == null) return -1;
          if (a.pdfContent == null) return 1;
          return b.pdfContent.localeCompare(a.pdfContent);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vConcept]中不存在!(in ${vConcept_ConstructorName}.${strThisFuncName})`;
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
export async function vConcept_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvConceptEN.con_ConceptContent:
      return (obj: clsvConceptEN) => {
        return obj.conceptContent === value;
      };
    case clsvConceptEN.con_ConceptName:
      return (obj: clsvConceptEN) => {
        return obj.conceptName === value;
      };
    case clsvConceptEN.con_IsSubmit:
      return (obj: clsvConceptEN) => {
        return obj.isSubmit === value;
      };
    case clsvConceptEN.con_ConceptId:
      return (obj: clsvConceptEN) => {
        return obj.conceptId === value;
      };
    case clsvConceptEN.con_UpdDate:
      return (obj: clsvConceptEN) => {
        return obj.updDate === value;
      };
    case clsvConceptEN.con_Memo:
      return (obj: clsvConceptEN) => {
        return obj.memo === value;
      };
    case clsvConceptEN.con_Author:
      return (obj: clsvConceptEN) => {
        return obj.author === value;
      };
    case clsvConceptEN.con_CitationId:
      return (obj: clsvConceptEN) => {
        return obj.citationId === value;
      };
    case clsvConceptEN.con_Keyword:
      return (obj: clsvConceptEN) => {
        return obj.keyword === value;
      };
    case clsvConceptEN.con_PaperTitle:
      return (obj: clsvConceptEN) => {
        return obj.paperTitle === value;
      };
    case clsvConceptEN.con_Periodical:
      return (obj: clsvConceptEN) => {
        return obj.periodical === value;
      };
    case clsvConceptEN.con_ResearchQuestion:
      return (obj: clsvConceptEN) => {
        return obj.researchQuestion === value;
      };
    case clsvConceptEN.con_CitationCount:
      return (obj: clsvConceptEN) => {
        return obj.citationCount === value;
      };
    case clsvConceptEN.con_AppraiseCount:
      return (obj: clsvConceptEN) => {
        return obj.appraiseCount === value;
      };
    case clsvConceptEN.con_Score:
      return (obj: clsvConceptEN) => {
        return obj.score === value;
      };
    case clsvConceptEN.con_StuScore:
      return (obj: clsvConceptEN) => {
        return obj.stuScore === value;
      };
    case clsvConceptEN.con_TeaScore:
      return (obj: clsvConceptEN) => {
        return obj.teaScore === value;
      };
    case clsvConceptEN.con_IdCurrEduCls:
      return (obj: clsvConceptEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvConceptEN.con_PdfPageNum:
      return (obj: clsvConceptEN) => {
        return obj.pdfPageNum === value;
      };
    case clsvConceptEN.con_OkCount:
      return (obj: clsvConceptEN) => {
        return obj.okCount === value;
      };
    case clsvConceptEN.con_VersionCount:
      return (obj: clsvConceptEN) => {
        return obj.versionCount === value;
      };
    case clsvConceptEN.con_CreateDate:
      return (obj: clsvConceptEN) => {
        return obj.createDate === value;
      };
    case clsvConceptEN.con_ShareId:
      return (obj: clsvConceptEN) => {
        return obj.shareId === value;
      };
    case clsvConceptEN.con_UpdUser:
      return (obj: clsvConceptEN) => {
        return obj.updUser === value;
      };
    case clsvConceptEN.con_PdfContent:
      return (obj: clsvConceptEN) => {
        return obj.pdfContent === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vConcept]中不存在!(in ${vConcept_ConstructorName}.${strThisFuncName})`;
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vConcept_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsvConceptWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvConceptWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvConceptEN.con_ConceptId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvConcept = await vConcept_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrvConcept == null) return [];
  let arrvConceptSel = arrvConcept;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvConceptSel = arrvConceptSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvConceptSel = arrvConceptSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvConceptSel = arrvConceptSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrvConceptSel.length == 0) return [];
  return arrvConceptSel.map((x) => x.conceptId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vConcept_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vConcept_Controller, strAction);

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
        vConcept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConcept_ConstructorName,
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
export async function vConcept_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vConcept_Controller, strAction);

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
        vConcept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConcept_ConstructorName,
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
export async function vConcept_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvConceptEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vConcept_Controller, strAction);

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
      const objvConcept = vConcept_GetObjFromJsonObj(returnObj);
      return objvConcept;
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
        vConcept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConcept_ConstructorName,
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
export async function vConcept_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvConceptEN.WhereFormat) == false) {
    strWhereCond = Format(clsvConceptEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvConceptEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvConceptEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvConceptEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvConceptExObjLstCache: Array<clsvConceptEN> = CacheHelper.Get(strKey);
    const arrvConceptObjLstT = vConcept_GetObjLstByJSONObjLst(arrvConceptExObjLstCache);
    return arrvConceptObjLstT;
  }
  try {
    const arrvConceptExObjLst = await vConcept_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvConceptExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvConceptExObjLst.length,
    );
    console.log(strInfo);
    return arrvConceptExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vConcept_ConstructorName,
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
export async function vConcept_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvConceptEN.WhereFormat) == false) {
    strWhereCond = Format(clsvConceptEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvConceptEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvConceptEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvConceptEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvConceptEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvConceptExObjLstCache: Array<clsvConceptEN> = JSON.parse(strTempObjLst);
    const arrvConceptObjLstT = vConcept_GetObjLstByJSONObjLst(arrvConceptExObjLstCache);
    return arrvConceptObjLstT;
  }
  try {
    const arrvConceptExObjLst = await vConcept_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvConceptExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvConceptExObjLst.length,
    );
    console.log(strInfo);
    return arrvConceptExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vConcept_ConstructorName,
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
export async function vConcept_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvConceptEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvConceptObjLstCache: Array<clsvConceptEN> = JSON.parse(strTempObjLst);
    return arrvConceptObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vConcept_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvConceptEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vConcept_Controller, strAction);

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
          vConcept_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vConcept_GetObjLstByJSONObjLst(returnObjLst);
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
        vConcept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConcept_ConstructorName,
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
export async function vConcept_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvConceptEN.WhereFormat) == false) {
    strWhereCond = Format(clsvConceptEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvConceptEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvConceptEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvConceptEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvConceptEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvConceptExObjLstCache: Array<clsvConceptEN> = JSON.parse(strTempObjLst);
    const arrvConceptObjLstT = vConcept_GetObjLstByJSONObjLst(arrvConceptExObjLstCache);
    return arrvConceptObjLstT;
  }
  try {
    const arrvConceptExObjLst = await vConcept_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvConceptExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvConceptExObjLst.length,
    );
    console.log(strInfo);
    return arrvConceptExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vConcept_ConstructorName,
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
export async function vConcept_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvConceptEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvConceptObjLstCache: Array<clsvConceptEN> = JSON.parse(strTempObjLst);
    return arrvConceptObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vConcept_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsvConceptEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsvConceptWApi.vConcept_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvConceptWApi.vConcept_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvConceptObjLstCache;
  switch (clsvConceptEN.CacheModeId) {
    case '04': //sessionStorage
      arrvConceptObjLstCache = await vConcept_GetObjLstsessionStorage(strIdCurrEduCls);
      break;
    case '03': //localStorage
      arrvConceptObjLstCache = await vConcept_GetObjLstlocalStorage(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrvConceptObjLstCache = await vConcept_GetObjLstClientCache(strIdCurrEduCls);
      break;
    default:
      arrvConceptObjLstCache = await vConcept_GetObjLstClientCache(strIdCurrEduCls);
      break;
  }
  return arrvConceptObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vConcept_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvConceptObjLstCache;
  switch (clsvConceptEN.CacheModeId) {
    case '04': //sessionStorage
      arrvConceptObjLstCache = await vConcept_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
      break;
    case '03': //localStorage
      arrvConceptObjLstCache = await vConcept_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrvConceptObjLstCache = null;
      break;
    default:
      arrvConceptObjLstCache = null;
      break;
  }
  return arrvConceptObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrConceptIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vConcept_GetSubObjLstCache(
  objvConceptCond: clsvConceptEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvConceptObjLstCache = await vConcept_GetObjLstCache(strIdCurrEduCls);
  let arrvConceptSel = arrvConceptObjLstCache;
  if (objvConceptCond.sfFldComparisonOp == null || objvConceptCond.sfFldComparisonOp == '')
    return arrvConceptSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvConceptCond.sfFldComparisonOp,
  );
  //console.log("clsvConceptWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvConceptCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvConceptCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvConceptSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvConceptCond),
      vConcept_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvConceptEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrConceptId:关键字列表
 * @returns 对象列表
 **/
export async function vConcept_GetObjLstByConceptIdLstAsync(
  arrConceptId: Array<string>,
): Promise<Array<clsvConceptEN>> {
  const strThisFuncName = 'GetObjLstByConceptIdLstAsync';
  const strAction = 'GetObjLstByConceptIdLst';
  const strUrl = GetWebApiUrl(vConcept_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrConceptId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vConcept_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vConcept_GetObjLstByJSONObjLst(returnObjLst);
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
        vConcept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConcept_ConstructorName,
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
 * @param arrstrConceptIdLst:关键字列表
 * @returns 对象列表
 */
export async function vConcept_GetObjLstByConceptIdLstCache(
  arrConceptIdLst: Array<string>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByConceptIdLstCache';
  try {
    const arrvConceptObjLstCache = await vConcept_GetObjLstCache(strIdCurrEduCls);
    const arrvConceptSel = arrvConceptObjLstCache.filter(
      (x) => arrConceptIdLst.indexOf(x.conceptId) > -1,
    );
    return arrvConceptSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrConceptIdLst.join(','),
      vConcept_ConstructorName,
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
export async function vConcept_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvConceptEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vConcept_Controller, strAction);

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
          vConcept_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vConcept_GetObjLstByJSONObjLst(returnObjLst);
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
        vConcept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConcept_ConstructorName,
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
export async function vConcept_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvConceptEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vConcept_Controller, strAction);

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
          vConcept_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vConcept_GetObjLstByJSONObjLst(returnObjLst);
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
        vConcept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConcept_ConstructorName,
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
export async function vConcept_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvConceptEN>();
  const arrvConceptObjLstCache = await vConcept_GetObjLstCache(strIdCurrEduCls);
  if (arrvConceptObjLstCache.length == 0) return arrvConceptObjLstCache;
  let arrvConceptSel = arrvConceptObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvConceptCond = new clsvConceptEN();
  ObjectAssign(objvConceptCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvConceptWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvConceptCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvConceptSel = arrvConceptSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvConceptSel.length == 0) return arrvConceptSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvConceptSel = arrvConceptSel.sort(vConcept_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvConceptSel = arrvConceptSel.sort(objPagerPara.sortFun);
    }
    arrvConceptSel = arrvConceptSel.slice(intStart, intEnd);
    return arrvConceptSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vConcept_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvConceptEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vConcept_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvConceptEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvConceptEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vConcept_Controller, strAction);

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
          vConcept_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vConcept_GetObjLstByJSONObjLst(returnObjLst);
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
        vConcept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConcept_ConstructorName,
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
 * @param objstrConceptIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vConcept_IsExistRecordCache(
  objvConceptCond: clsvConceptEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvConceptObjLstCache = await vConcept_GetObjLstCache(strIdCurrEduCls);
  if (arrvConceptObjLstCache == null) return false;
  let arrvConceptSel = arrvConceptObjLstCache;
  if (objvConceptCond.sfFldComparisonOp == null || objvConceptCond.sfFldComparisonOp == '')
    return arrvConceptSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvConceptCond.sfFldComparisonOp,
  );
  //console.log("clsvConceptWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvConceptCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvConceptCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvConceptSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvConceptCond),
      vConcept_ConstructorName,
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
export async function vConcept_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vConcept_Controller, strAction);

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
        vConcept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConcept_ConstructorName,
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
 * @param strConceptId:所给的关键字
 * @returns 对象
 */
export async function vConcept_IsExistCache(strConceptId: string, strIdCurrEduCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvConceptObjLstCache = await vConcept_GetObjLstCache(strIdCurrEduCls);
  if (arrvConceptObjLstCache == null) return false;
  try {
    const arrvConceptSel = arrvConceptObjLstCache.filter((x) => x.conceptId == strConceptId);
    if (arrvConceptSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strConceptId,
      vConcept_ConstructorName,
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
 * @param strConceptId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vConcept_IsExistAsync(strConceptId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vConcept_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strConceptId,
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
        vConcept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConcept_ConstructorName,
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
export async function vConcept_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vConcept_Controller, strAction);

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
        vConcept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConcept_ConstructorName,
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
 * @param objvConceptCond:条件对象
 * @returns 对象列表记录数
 */
export async function vConcept_GetRecCountByCondCache(
  objvConceptCond: clsvConceptEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvConceptObjLstCache = await vConcept_GetObjLstCache(strIdCurrEduCls);
  if (arrvConceptObjLstCache == null) return 0;
  let arrvConceptSel = arrvConceptObjLstCache;
  if (objvConceptCond.sfFldComparisonOp == null || objvConceptCond.sfFldComparisonOp == '')
    return arrvConceptSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvConceptCond.sfFldComparisonOp,
  );
  //console.log("clsvConceptWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvConceptCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvConceptCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvConceptSel = arrvConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvConceptSel = arrvConceptSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvConceptSel = arrvConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvConceptSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvConceptCond),
      vConcept_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vConcept_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vConcept_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvConceptEN._CurrTabName, strIdCurrEduCls);
    switch (clsvConceptEN.CacheModeId) {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vConcept_GetJSONStrByObj(pobjvConceptEN: clsvConceptEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvConceptEN);
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
export function vConcept_GetObjLstByJSONStr(strJSON: string): Array<clsvConceptEN> {
  let arrvConceptObjLst = new Array<clsvConceptEN>();
  if (strJSON === '') {
    return arrvConceptObjLst;
  }
  try {
    arrvConceptObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvConceptObjLst;
  }
  return arrvConceptObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvConceptObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vConcept_GetObjLstByJSONObjLst(
  arrvConceptObjLstS: Array<clsvConceptEN>,
): Array<clsvConceptEN> {
  const arrvConceptObjLst = new Array<clsvConceptEN>();
  for (const objInFor of arrvConceptObjLstS) {
    const obj1 = vConcept_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvConceptObjLst.push(obj1);
  }
  return arrvConceptObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vConcept_GetObjByJSONStr(strJSON: string): clsvConceptEN {
  let pobjvConceptEN = new clsvConceptEN();
  if (strJSON === '') {
    return pobjvConceptEN;
  }
  try {
    pobjvConceptEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvConceptEN;
  }
  return pobjvConceptEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vConcept_GetCombineCondition(objvConceptCond: clsvConceptEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_ConceptName,
    ) == true
  ) {
    const strComparisonOpConceptName: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_ConceptName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_ConceptName,
      objvConceptCond.conceptName,
      strComparisonOpConceptName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_IsSubmit,
    ) == true
  ) {
    if (objvConceptCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvConceptEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvConceptEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_ConceptId,
    ) == true
  ) {
    const strComparisonOpConceptId: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_ConceptId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_ConceptId,
      objvConceptCond.conceptId,
      strComparisonOpConceptId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_UpdDate,
      objvConceptCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_Memo,
      objvConceptCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_Author,
    ) == true
  ) {
    const strComparisonOpAuthor: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_Author];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_Author,
      objvConceptCond.author,
      strComparisonOpAuthor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_CitationId,
    ) == true
  ) {
    const strComparisonOpCitationId: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_CitationId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_CitationId,
      objvConceptCond.citationId,
      strComparisonOpCitationId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_Keyword,
    ) == true
  ) {
    const strComparisonOpKeyword: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_Keyword];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_Keyword,
      objvConceptCond.keyword,
      strComparisonOpKeyword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_PaperTitle,
    ) == true
  ) {
    const strComparisonOpPaperTitle: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_PaperTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_PaperTitle,
      objvConceptCond.paperTitle,
      strComparisonOpPaperTitle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_Periodical,
    ) == true
  ) {
    const strComparisonOpPeriodical: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_Periodical];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_Periodical,
      objvConceptCond.periodical,
      strComparisonOpPeriodical,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_ResearchQuestion,
    ) == true
  ) {
    const strComparisonOpResearchQuestion: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_ResearchQuestion];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_ResearchQuestion,
      objvConceptCond.researchQuestion,
      strComparisonOpResearchQuestion,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_CitationCount,
    ) == true
  ) {
    const strComparisonOpCitationCount: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_CitationCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvConceptEN.con_CitationCount,
      objvConceptCond.citationCount,
      strComparisonOpCitationCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_AppraiseCount,
    ) == true
  ) {
    const strComparisonOpAppraiseCount: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_AppraiseCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvConceptEN.con_AppraiseCount,
      objvConceptCond.appraiseCount,
      strComparisonOpAppraiseCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvConceptEN.con_Score,
      objvConceptCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvConceptEN.con_StuScore,
      objvConceptCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvConceptEN.con_TeaScore,
      objvConceptCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_IdCurrEduCls,
      objvConceptCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_PdfPageNum,
    ) == true
  ) {
    const strComparisonOpPdfPageNum: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_PdfPageNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvConceptEN.con_PdfPageNum,
      objvConceptCond.pdfPageNum,
      strComparisonOpPdfPageNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_OkCount,
    ) == true
  ) {
    const strComparisonOpOkCount: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_OkCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvConceptEN.con_OkCount,
      objvConceptCond.okCount,
      strComparisonOpOkCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_VersionCount,
    ) == true
  ) {
    const strComparisonOpVersionCount: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_VersionCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvConceptEN.con_VersionCount,
      objvConceptCond.versionCount,
      strComparisonOpVersionCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_CreateDate,
    ) == true
  ) {
    const strComparisonOpCreateDate: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_CreateDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_CreateDate,
      objvConceptCond.createDate,
      strComparisonOpCreateDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_ShareId,
    ) == true
  ) {
    const strComparisonOpShareId: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_ShareId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_ShareId,
      objvConceptCond.shareId,
      strComparisonOpShareId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_UpdUser,
      objvConceptCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptCond.dicFldComparisonOp,
      clsvConceptEN.con_PdfContent,
    ) == true
  ) {
    const strComparisonOpPdfContent: string =
      objvConceptCond.dicFldComparisonOp[clsvConceptEN.con_PdfContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptEN.con_PdfContent,
      objvConceptCond.pdfContent,
      strComparisonOpPdfContent,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvConceptENS:源对象
 * @param objvConceptENT:目标对象
 */
export function vConcept_CopyObjTo(
  objvConceptENS: clsvConceptEN,
  objvConceptENT: clsvConceptEN,
): void {
  objvConceptENT.conceptContent = objvConceptENS.conceptContent; //概念内容
  objvConceptENT.conceptName = objvConceptENS.conceptName; //概念名称
  objvConceptENT.isSubmit = objvConceptENS.isSubmit; //是否提交
  objvConceptENT.conceptId = objvConceptENS.conceptId; //概念Id
  objvConceptENT.updDate = objvConceptENS.updDate; //修改日期
  objvConceptENT.memo = objvConceptENS.memo; //备注
  objvConceptENT.author = objvConceptENS.author; //作者
  objvConceptENT.citationId = objvConceptENS.citationId; //引用Id
  objvConceptENT.keyword = objvConceptENS.keyword; //关键字
  objvConceptENT.paperTitle = objvConceptENS.paperTitle; //论文标题
  objvConceptENT.periodical = objvConceptENS.periodical; //期刊
  objvConceptENT.researchQuestion = objvConceptENS.researchQuestion; //研究问题
  objvConceptENT.citationCount = objvConceptENS.citationCount; //引用统计
  objvConceptENT.appraiseCount = objvConceptENS.appraiseCount; //评论数
  objvConceptENT.score = objvConceptENS.score; //评分
  objvConceptENT.stuScore = objvConceptENS.stuScore; //学生平均分
  objvConceptENT.teaScore = objvConceptENS.teaScore; //教师评分
  objvConceptENT.idCurrEduCls = objvConceptENS.idCurrEduCls; //教学班流水号
  objvConceptENT.pdfPageNum = objvConceptENS.pdfPageNum; //Pdf页码
  objvConceptENT.okCount = objvConceptENS.okCount; //点赞统计
  objvConceptENT.versionCount = objvConceptENS.versionCount; //版本统计
  objvConceptENT.createDate = objvConceptENS.createDate; //建立日期
  objvConceptENT.shareId = objvConceptENS.shareId; //分享Id
  objvConceptENT.updUser = objvConceptENS.updUser; //修改人
  objvConceptENT.pdfContent = objvConceptENS.pdfContent; //Pdf内容
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvConceptENS:源对象
 * @param objvConceptENT:目标对象
 */
export function vConcept_GetObjFromJsonObj(objvConceptENS: clsvConceptEN): clsvConceptEN {
  const objvConceptENT: clsvConceptEN = new clsvConceptEN();
  ObjectAssign(objvConceptENT, objvConceptENS);
  return objvConceptENT;
}
