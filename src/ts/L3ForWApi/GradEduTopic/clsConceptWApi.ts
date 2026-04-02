/**
 * 类名:clsConceptWApi
 * 表名:Concept(01120602)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:45:05
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
 * 观点概念(Concept)
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
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsConceptEN } from '@/ts/L0Entity/GradEduTopic/clsConceptEN';
import { vConcept_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduTopic/clsvConceptWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const concept_Controller = 'ConceptApi';
export const concept_ConstructorName = 'concept';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strConceptId:关键字
 * @returns 对象
 **/
export async function Concept_GetObjByConceptIdAsync(
  strConceptId: string,
): Promise<clsConceptEN | null> {
  const strThisFuncName = 'GetObjByConceptIdAsync';

  if (IsNullOrEmpty(strConceptId) == true) {
    const strMsg = Format('参数:[strConceptId]不能为空!(In clsConceptWApi.GetObjByConceptIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strConceptId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strConceptId]的长度:[{0}]不正确!(clsConceptWApi.GetObjByConceptIdAsync)',
      strConceptId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByConceptId';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
      const objConcept = Concept_GetObjFromJsonObj(returnObj);
      return objConcept;
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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
export async function Concept_GetObjByConceptIdCache(
  strConceptId: string,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByConceptIdCache';

  if (IsNullOrEmpty(strConceptId) == true) {
    const strMsg = Format('参数:[strConceptId]不能为空!(In clsConceptWApi.GetObjByConceptIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strConceptId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strConceptId]的长度:[{0}]不正确!(clsConceptWApi.GetObjByConceptIdCache)',
      strConceptId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrConceptObjLstCache = await Concept_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrConceptSel = arrConceptObjLstCache.filter((x) => x.conceptId == strConceptId);
    let objConcept: clsConceptEN;
    if (arrConceptSel.length > 0) {
      objConcept = arrConceptSel[0];
      return objConcept;
    } else {
      if (bolTryAsyncOnce == true) {
        const objConceptConst = await Concept_GetObjByConceptIdAsync(strConceptId);
        if (objConceptConst != null) {
          Concept_ReFreshThisCache(strIdCurrEduCls);
          return objConceptConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strConceptId,
      concept_ConstructorName,
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
export async function Concept_GetObjByConceptIdlocalStorage(strConceptId: string) {
  const strThisFuncName = 'GetObjByConceptIdlocalStorage';

  if (IsNullOrEmpty(strConceptId) == true) {
    const strMsg = Format(
      '参数:[strConceptId]不能为空!(In clsConceptWApi.GetObjByConceptIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strConceptId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strConceptId]的长度:[{0}]不正确!(clsConceptWApi.GetObjByConceptIdlocalStorage)',
      strConceptId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsConceptEN._CurrTabName, strConceptId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objConceptCache: clsConceptEN = JSON.parse(strTempObj);
    return objConceptCache;
  }
  try {
    const objConcept = await Concept_GetObjByConceptIdAsync(strConceptId);
    if (objConcept != null) {
      localStorage.setItem(strKey, JSON.stringify(objConcept));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objConcept;
    }
    return objConcept;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strConceptId,
      concept_ConstructorName,
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
 * @param objConcept:所给的对象
 * @returns 对象
 */
export async function Concept_UpdateObjInLstCache(
  objConcept: clsConceptEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrConceptObjLstCache = await Concept_GetObjLstCache(strIdCurrEduCls);
    const obj = arrConceptObjLstCache.find(
      (x) => x.idCurrEduCls == objConcept.idCurrEduCls && x.conceptName == objConcept.conceptName,
    );
    if (obj != null) {
      objConcept.conceptId = obj.conceptId;
      ObjectAssign(obj, objConcept);
    } else {
      arrConceptObjLstCache.push(objConcept);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      concept_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strConceptId:所给的关键字
 * @returns 对象
 */
export async function Concept_GetNameByConceptIdCache(
  strConceptId: string,
  strIdCurrEduCls: string,
) {
  if (IsNullOrEmpty(strConceptId) == true) {
    const strMsg = Format(
      '参数:[strConceptId]不能为空!(In clsConceptWApi.GetNameByConceptIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strConceptId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strConceptId]的长度:[{0}]不正确!(clsConceptWApi.GetNameByConceptIdCache)',
      strConceptId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrConceptObjLstCache = await Concept_GetObjLstCache(strIdCurrEduCls);
  if (arrConceptObjLstCache == null) return '';
  try {
    const arrConceptSel = arrConceptObjLstCache.filter((x) => x.conceptId == strConceptId);
    let objConcept: clsConceptEN;
    if (arrConceptSel.length > 0) {
      objConcept = arrConceptSel[0];
      return objConcept.conceptName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strConceptId,
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function Concept_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsConceptWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsConceptWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsConceptEN.con_ConceptId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsConceptEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsConceptEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strConceptId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objConcept = await Concept_GetObjByConceptIdCache(strConceptId, strIdCurrEduClsClassfy);
  if (objConcept == null) return '';
  if (objConcept.GetFldValue(strOutFldName) == null) return '';
  return objConcept.GetFldValue(strOutFldName).toString();
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
export function Concept_SortFunDefa(a: clsConceptEN, b: clsConceptEN): number {
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
export function Concept_SortFunDefa2Fld(a: clsConceptEN, b: clsConceptEN): number {
  if (a.conceptName == b.conceptName) return a.conceptContent.localeCompare(b.conceptContent);
  else return a.conceptName.localeCompare(b.conceptName);
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
export function Concept_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsConceptEN.con_ConceptId:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return a.conceptId.localeCompare(b.conceptId);
        };
      case clsConceptEN.con_ConceptName:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (a.conceptName == null) return -1;
          if (b.conceptName == null) return 1;
          return a.conceptName.localeCompare(b.conceptName);
        };
      case clsConceptEN.con_ConceptContent:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (a.conceptContent == null) return -1;
          if (b.conceptContent == null) return 1;
          return a.conceptContent.localeCompare(b.conceptContent);
        };
      case clsConceptEN.con_IsSubmit:
        return (a: clsConceptEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsConceptEN.con_UpdDate:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsConceptEN.con_Memo:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsConceptEN.con_CitationId:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (a.citationId == null) return -1;
          if (b.citationId == null) return 1;
          return a.citationId.localeCompare(b.citationId);
        };
      case clsConceptEN.con_AppraiseCount:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return a.appraiseCount - b.appraiseCount;
        };
      case clsConceptEN.con_OkCount:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return a.okCount - b.okCount;
        };
      case clsConceptEN.con_Score:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return a.score - b.score;
        };
      case clsConceptEN.con_StuScore:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return a.stuScore - b.stuScore;
        };
      case clsConceptEN.con_TeaScore:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsConceptEN.con_IdCurrEduCls:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsConceptEN.con_PdfContent:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (a.pdfContent == null) return -1;
          if (b.pdfContent == null) return 1;
          return a.pdfContent.localeCompare(b.pdfContent);
        };
      case clsConceptEN.con_PdfPageNum:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return a.pdfPageNum - b.pdfPageNum;
        };
      case clsConceptEN.con_CitationCount:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return a.citationCount - b.citationCount;
        };
      case clsConceptEN.con_VersionCount:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return a.versionCount - b.versionCount;
        };
      case clsConceptEN.con_CreateDate:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (a.createDate == null) return -1;
          if (b.createDate == null) return 1;
          return a.createDate.localeCompare(b.createDate);
        };
      case clsConceptEN.con_ShareId:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return a.shareId.localeCompare(b.shareId);
        };
      case clsConceptEN.con_UpdUser:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Concept]中不存在!(in ${concept_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsConceptEN.con_ConceptId:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return b.conceptId.localeCompare(a.conceptId);
        };
      case clsConceptEN.con_ConceptName:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (b.conceptName == null) return -1;
          if (a.conceptName == null) return 1;
          return b.conceptName.localeCompare(a.conceptName);
        };
      case clsConceptEN.con_ConceptContent:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (b.conceptContent == null) return -1;
          if (a.conceptContent == null) return 1;
          return b.conceptContent.localeCompare(a.conceptContent);
        };
      case clsConceptEN.con_IsSubmit:
        return (b: clsConceptEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsConceptEN.con_UpdDate:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsConceptEN.con_Memo:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsConceptEN.con_CitationId:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (b.citationId == null) return -1;
          if (a.citationId == null) return 1;
          return b.citationId.localeCompare(a.citationId);
        };
      case clsConceptEN.con_AppraiseCount:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return b.appraiseCount - a.appraiseCount;
        };
      case clsConceptEN.con_OkCount:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return b.okCount - a.okCount;
        };
      case clsConceptEN.con_Score:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return b.score - a.score;
        };
      case clsConceptEN.con_StuScore:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return b.stuScore - a.stuScore;
        };
      case clsConceptEN.con_TeaScore:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsConceptEN.con_IdCurrEduCls:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsConceptEN.con_PdfContent:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (b.pdfContent == null) return -1;
          if (a.pdfContent == null) return 1;
          return b.pdfContent.localeCompare(a.pdfContent);
        };
      case clsConceptEN.con_PdfPageNum:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return b.pdfPageNum - a.pdfPageNum;
        };
      case clsConceptEN.con_CitationCount:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return b.citationCount - a.citationCount;
        };
      case clsConceptEN.con_VersionCount:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return b.versionCount - a.versionCount;
        };
      case clsConceptEN.con_CreateDate:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (b.createDate == null) return -1;
          if (a.createDate == null) return 1;
          return b.createDate.localeCompare(a.createDate);
        };
      case clsConceptEN.con_ShareId:
        return (a: clsConceptEN, b: clsConceptEN) => {
          return b.shareId.localeCompare(a.shareId);
        };
      case clsConceptEN.con_UpdUser:
        return (a: clsConceptEN, b: clsConceptEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Concept]中不存在!(in ${concept_ConstructorName}.${strThisFuncName})`;
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
export async function Concept_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsConceptEN.con_ConceptId:
      return (obj: clsConceptEN) => {
        return obj.conceptId === value;
      };
    case clsConceptEN.con_ConceptName:
      return (obj: clsConceptEN) => {
        return obj.conceptName === value;
      };
    case clsConceptEN.con_ConceptContent:
      return (obj: clsConceptEN) => {
        return obj.conceptContent === value;
      };
    case clsConceptEN.con_IsSubmit:
      return (obj: clsConceptEN) => {
        return obj.isSubmit === value;
      };
    case clsConceptEN.con_UpdDate:
      return (obj: clsConceptEN) => {
        return obj.updDate === value;
      };
    case clsConceptEN.con_Memo:
      return (obj: clsConceptEN) => {
        return obj.memo === value;
      };
    case clsConceptEN.con_CitationId:
      return (obj: clsConceptEN) => {
        return obj.citationId === value;
      };
    case clsConceptEN.con_AppraiseCount:
      return (obj: clsConceptEN) => {
        return obj.appraiseCount === value;
      };
    case clsConceptEN.con_OkCount:
      return (obj: clsConceptEN) => {
        return obj.okCount === value;
      };
    case clsConceptEN.con_Score:
      return (obj: clsConceptEN) => {
        return obj.score === value;
      };
    case clsConceptEN.con_StuScore:
      return (obj: clsConceptEN) => {
        return obj.stuScore === value;
      };
    case clsConceptEN.con_TeaScore:
      return (obj: clsConceptEN) => {
        return obj.teaScore === value;
      };
    case clsConceptEN.con_IdCurrEduCls:
      return (obj: clsConceptEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsConceptEN.con_PdfContent:
      return (obj: clsConceptEN) => {
        return obj.pdfContent === value;
      };
    case clsConceptEN.con_PdfPageNum:
      return (obj: clsConceptEN) => {
        return obj.pdfPageNum === value;
      };
    case clsConceptEN.con_CitationCount:
      return (obj: clsConceptEN) => {
        return obj.citationCount === value;
      };
    case clsConceptEN.con_VersionCount:
      return (obj: clsConceptEN) => {
        return obj.versionCount === value;
      };
    case clsConceptEN.con_CreateDate:
      return (obj: clsConceptEN) => {
        return obj.createDate === value;
      };
    case clsConceptEN.con_ShareId:
      return (obj: clsConceptEN) => {
        return obj.shareId === value;
      };
    case clsConceptEN.con_UpdUser:
      return (obj: clsConceptEN) => {
        return obj.updUser === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[Concept]中不存在!(in ${concept_ConstructorName}.${strThisFuncName})`;
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
export async function Concept_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsConceptWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsConceptWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsConceptEN.con_ConceptId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrConcept = await Concept_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrConcept == null) return [];
  let arrConceptSel = arrConcept;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrConceptSel = arrConceptSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrConceptSel = arrConceptSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrConceptSel = arrConceptSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrConceptSel.length == 0) return [];
  return arrConceptSel.map((x) => x.conceptId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function Concept_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
export async function Concept_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
export async function Concept_GetFirstObjAsync(strWhereCond: string): Promise<clsConceptEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
      const objConcept = Concept_GetObjFromJsonObj(returnObj);
      return objConcept;
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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
export async function Concept_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsConceptEN.WhereFormat) == false) {
    strWhereCond = Format(clsConceptEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsConceptEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsConceptEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsConceptEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrConceptExObjLstCache: Array<clsConceptEN> = CacheHelper.Get(strKey);
    const arrConceptObjLstT = Concept_GetObjLstByJSONObjLst(arrConceptExObjLstCache);
    return arrConceptObjLstT;
  }
  try {
    const arrConceptExObjLst = await Concept_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrConceptExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrConceptExObjLst.length,
    );
    console.log(strInfo);
    return arrConceptExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      concept_ConstructorName,
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
export async function Concept_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsConceptEN.WhereFormat) == false) {
    strWhereCond = Format(clsConceptEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsConceptEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsConceptEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsConceptEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsConceptEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrConceptExObjLstCache: Array<clsConceptEN> = JSON.parse(strTempObjLst);
    const arrConceptObjLstT = Concept_GetObjLstByJSONObjLst(arrConceptExObjLstCache);
    return arrConceptObjLstT;
  }
  try {
    const arrConceptExObjLst = await Concept_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrConceptExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrConceptExObjLst.length,
    );
    console.log(strInfo);
    return arrConceptExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      concept_ConstructorName,
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
export async function Concept_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsConceptEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrConceptObjLstCache: Array<clsConceptEN> = JSON.parse(strTempObjLst);
    return arrConceptObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function Concept_GetObjLstAsync(strWhereCond: string): Promise<Array<clsConceptEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
          concept_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Concept_GetObjLstByJSONObjLst(returnObjLst);
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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
export async function Concept_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsConceptEN.WhereFormat) == false) {
    strWhereCond = Format(clsConceptEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsConceptEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsConceptEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsConceptEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsConceptEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrConceptExObjLstCache: Array<clsConceptEN> = JSON.parse(strTempObjLst);
    const arrConceptObjLstT = Concept_GetObjLstByJSONObjLst(arrConceptExObjLstCache);
    return arrConceptObjLstT;
  }
  try {
    const arrConceptExObjLst = await Concept_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrConceptExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrConceptExObjLst.length,
    );
    console.log(strInfo);
    return arrConceptExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      concept_ConstructorName,
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
export async function Concept_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsConceptEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrConceptObjLstCache: Array<clsConceptEN> = JSON.parse(strTempObjLst);
    return arrConceptObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function Concept_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsConceptEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsConceptWApi.Concept_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsConceptWApi.Concept_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrConceptObjLstCache;
  switch (clsConceptEN.CacheModeId) {
    case '04': //sessionStorage
      arrConceptObjLstCache = await Concept_GetObjLstsessionStorage(strIdCurrEduCls);
      break;
    case '03': //localStorage
      arrConceptObjLstCache = await Concept_GetObjLstlocalStorage(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrConceptObjLstCache = await Concept_GetObjLstClientCache(strIdCurrEduCls);
      break;
    default:
      arrConceptObjLstCache = await Concept_GetObjLstClientCache(strIdCurrEduCls);
      break;
  }
  return arrConceptObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function Concept_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrConceptObjLstCache;
  switch (clsConceptEN.CacheModeId) {
    case '04': //sessionStorage
      arrConceptObjLstCache = await Concept_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
      break;
    case '03': //localStorage
      arrConceptObjLstCache = await Concept_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrConceptObjLstCache = null;
      break;
    default:
      arrConceptObjLstCache = null;
      break;
  }
  return arrConceptObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrConceptIdCond:条件对象
 * @returns 对象列表子集
 */
export async function Concept_GetSubObjLstCache(
  objConceptCond: clsConceptEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrConceptObjLstCache = await Concept_GetObjLstCache(strIdCurrEduCls);
  let arrConceptSel = arrConceptObjLstCache;
  if (objConceptCond.sfFldComparisonOp == null || objConceptCond.sfFldComparisonOp == '')
    return arrConceptSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objConceptCond.sfFldComparisonOp,
  );
  //console.log("clsConceptWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objConceptCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objConceptCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrConceptSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objConceptCond),
      concept_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsConceptEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrConceptId:关键字列表
 * @returns 对象列表
 **/
export async function Concept_GetObjLstByConceptIdLstAsync(
  arrConceptId: Array<string>,
): Promise<Array<clsConceptEN>> {
  const strThisFuncName = 'GetObjLstByConceptIdLstAsync';
  const strAction = 'GetObjLstByConceptIdLst';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
          concept_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Concept_GetObjLstByJSONObjLst(returnObjLst);
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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
export async function Concept_GetObjLstByConceptIdLstCache(
  arrConceptIdLst: Array<string>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByConceptIdLstCache';
  try {
    const arrConceptObjLstCache = await Concept_GetObjLstCache(strIdCurrEduCls);
    const arrConceptSel = arrConceptObjLstCache.filter(
      (x) => arrConceptIdLst.indexOf(x.conceptId) > -1,
    );
    return arrConceptSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrConceptIdLst.join(','),
      concept_ConstructorName,
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
export async function Concept_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsConceptEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
          concept_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Concept_GetObjLstByJSONObjLst(returnObjLst);
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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
export async function Concept_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsConceptEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
          concept_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Concept_GetObjLstByJSONObjLst(returnObjLst);
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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
export async function Concept_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsConceptEN>();
  const arrConceptObjLstCache = await Concept_GetObjLstCache(strIdCurrEduCls);
  if (arrConceptObjLstCache.length == 0) return arrConceptObjLstCache;
  let arrConceptSel = arrConceptObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objConceptCond = new clsConceptEN();
  ObjectAssign(objConceptCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsConceptWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objConceptCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrConceptSel = arrConceptSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrConceptSel.length == 0) return arrConceptSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrConceptSel = arrConceptSel.sort(Concept_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrConceptSel = arrConceptSel.sort(objPagerPara.sortFun);
    }
    arrConceptSel = arrConceptSel.slice(intStart, intEnd);
    return arrConceptSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      concept_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsConceptEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function Concept_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsConceptEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsConceptEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
          concept_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Concept_GetObjLstByJSONObjLst(returnObjLst);
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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
 * @param strConceptId:关键字
 * @returns 获取删除的结果
 **/
export async function Concept_DelRecordAsync(strConceptId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(concept_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strConceptId);

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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
 * @param arrConceptId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function Concept_DelConceptsAsync(arrConceptId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelConceptsAsync';
  const strAction = 'DelConcepts';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
export async function Concept_DelConceptsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelConceptsByCondAsync';
  const strAction = 'DelConceptsByCond';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
 * @param objConceptEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Concept_AddNewRecordAsync(objConceptEN: clsConceptEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objConceptEN);
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConceptEN, config);
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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
 * @param objConceptEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Concept_AddNewRecordWithMaxIdAsync(
  objConceptEN: clsConceptEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConceptEN, config);
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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
 * @param objConceptEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function Concept_AddNewRecordWithReturnKeyAsync(
  objConceptEN: clsConceptEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConceptEN, config);
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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
 * @param objConceptEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function Concept_UpdateRecordAsync(objConceptEN: clsConceptEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objConceptEN.sfUpdFldSetStr === undefined ||
    objConceptEN.sfUpdFldSetStr === null ||
    objConceptEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objConceptEN.conceptId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConceptEN, config);
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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
 * @param objConceptEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function Concept_UpdateWithConditionAsync(
  objConceptEN: clsConceptEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objConceptEN.sfUpdFldSetStr === undefined ||
    objConceptEN.sfUpdFldSetStr === null ||
    objConceptEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objConceptEN.conceptId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(concept_Controller, strAction);
  objConceptEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConceptEN, config);
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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
export async function Concept_IsExistRecordCache(
  objConceptCond: clsConceptEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrConceptObjLstCache = await Concept_GetObjLstCache(strIdCurrEduCls);
  if (arrConceptObjLstCache == null) return false;
  let arrConceptSel = arrConceptObjLstCache;
  if (objConceptCond.sfFldComparisonOp == null || objConceptCond.sfFldComparisonOp == '')
    return arrConceptSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objConceptCond.sfFldComparisonOp,
  );
  //console.log("clsConceptWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objConceptCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objConceptCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrConceptSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objConceptCond),
      concept_ConstructorName,
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
export async function Concept_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
export async function Concept_IsExistCache(strConceptId: string, strIdCurrEduCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrConceptObjLstCache = await Concept_GetObjLstCache(strIdCurrEduCls);
  if (arrConceptObjLstCache == null) return false;
  try {
    const arrConceptSel = arrConceptObjLstCache.filter((x) => x.conceptId == strConceptId);
    if (arrConceptSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strConceptId,
      concept_ConstructorName,
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
export async function Concept_IsExistAsync(strConceptId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
export async function Concept_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
 * @param objConceptCond:条件对象
 * @returns 对象列表记录数
 */
export async function Concept_GetRecCountByCondCache(
  objConceptCond: clsConceptEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrConceptObjLstCache = await Concept_GetObjLstCache(strIdCurrEduCls);
  if (arrConceptObjLstCache == null) return 0;
  let arrConceptSel = arrConceptObjLstCache;
  if (objConceptCond.sfFldComparisonOp == null || objConceptCond.sfFldComparisonOp == '')
    return arrConceptSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objConceptCond.sfFldComparisonOp,
  );
  //console.log("clsConceptWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objConceptCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objConceptCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrConceptSel = arrConceptSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrConceptSel = arrConceptSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrConceptSel = arrConceptSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrConceptSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objConceptCond),
      concept_ConstructorName,
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
export async function Concept_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
export async function Concept_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(concept_Controller, strAction);

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
        concept_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        concept_ConstructorName,
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
export function Concept_GetWebApiUrl(strController: string, strAction: string): string {
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
export function Concept_ReFreshCache(strIdCurrEduCls: string): void {
  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空!(In clsConceptWApi.clsConceptWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsConceptWApi.clsConceptWApi.ReFreshCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsConceptEN._CurrTabName, strIdCurrEduCls);
  switch (clsConceptEN.CacheModeId) {
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
  vConcept_ReFreshThisCache(strIdCurrEduCls);
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function Concept_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsConceptEN._CurrTabName, strIdCurrEduCls);
    switch (clsConceptEN.CacheModeId) {
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
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Concept_CheckPropertyNew(pobjConceptEN: clsConceptEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjConceptEN.shareId) === true || pobjConceptEN.shareId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[分享Id]不能为空(In 观点概念)!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjConceptEN.conceptId) == false && GetStrLen(pobjConceptEN.conceptId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[概念Id(conceptId)]的长度不能超过8(In 观点概念(Concept))!值:$(pobjConceptEN.conceptId)(clsConceptBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.conceptName) == false &&
    GetStrLen(pobjConceptEN.conceptName) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[概念名称(conceptName)]的长度不能超过500(In 观点概念(Concept))!值:$(pobjConceptEN.conceptName)(clsConceptBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjConceptEN.updDate) == false && GetStrLen(pobjConceptEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 观点概念(Concept))!值:$(pobjConceptEN.updDate)(clsConceptBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjConceptEN.memo) == false && GetStrLen(pobjConceptEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 观点概念(Concept))!值:$(pobjConceptEN.memo)(clsConceptBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjConceptEN.citationId) == false && GetStrLen(pobjConceptEN.citationId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[引用Id(citationId)]的长度不能超过8(In 观点概念(Concept))!值:$(pobjConceptEN.citationId)(clsConceptBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.idCurrEduCls) == false &&
    GetStrLen(pobjConceptEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 观点概念(Concept))!值:$(pobjConceptEN.idCurrEduCls)(clsConceptBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.pdfContent) == false &&
    GetStrLen(pobjConceptEN.pdfContent) > 2000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Pdf内容(pdfContent)]的长度不能超过2000(In 观点概念(Concept))!值:$(pobjConceptEN.pdfContent)(clsConceptBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.createDate) == false &&
    GetStrLen(pobjConceptEN.createDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[建立日期(createDate)]的长度不能超过20(In 观点概念(Concept))!值:$(pobjConceptEN.createDate)(clsConceptBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjConceptEN.shareId) == false && GetStrLen(pobjConceptEN.shareId) > 2) {
    throw new Error(
      '(errid:Watl000413)字段[分享Id(shareId)]的长度不能超过2(In 观点概念(Concept))!值:$(pobjConceptEN.shareId)(clsConceptBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjConceptEN.updUser) == false && GetStrLen(pobjConceptEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 观点概念(Concept))!值:$(pobjConceptEN.updUser)(clsConceptBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjConceptEN.conceptId) == false &&
    undefined !== pobjConceptEN.conceptId &&
    tzDataType.isString(pobjConceptEN.conceptId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[概念Id(conceptId)]的值:[$(pobjConceptEN.conceptId)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.conceptName) == false &&
    undefined !== pobjConceptEN.conceptName &&
    tzDataType.isString(pobjConceptEN.conceptName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[概念名称(conceptName)]的值:[$(pobjConceptEN.conceptName)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.conceptContent) == false &&
    undefined !== pobjConceptEN.conceptContent &&
    tzDataType.isString(pobjConceptEN.conceptContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[概念内容(conceptContent)]的值:[$(pobjConceptEN.conceptContent)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjConceptEN.isSubmit &&
    undefined !== pobjConceptEN.isSubmit &&
    tzDataType.isBoolean(pobjConceptEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjConceptEN.isSubmit)], 非法,应该为布尔型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.updDate) == false &&
    undefined !== pobjConceptEN.updDate &&
    tzDataType.isString(pobjConceptEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjConceptEN.updDate)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.memo) == false &&
    undefined !== pobjConceptEN.memo &&
    tzDataType.isString(pobjConceptEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjConceptEN.memo)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.citationId) == false &&
    undefined !== pobjConceptEN.citationId &&
    tzDataType.isString(pobjConceptEN.citationId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[引用Id(citationId)]的值:[$(pobjConceptEN.citationId)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjConceptEN.appraiseCount &&
    undefined !== pobjConceptEN.appraiseCount &&
    tzDataType.isNumber(pobjConceptEN.appraiseCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评论数(appraiseCount)]的值:[$(pobjConceptEN.appraiseCount)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjConceptEN.okCount &&
    undefined !== pobjConceptEN.okCount &&
    tzDataType.isNumber(pobjConceptEN.okCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[点赞统计(okCount)]的值:[$(pobjConceptEN.okCount)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjConceptEN.score &&
    undefined !== pobjConceptEN.score &&
    tzDataType.isNumber(pobjConceptEN.score) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评分(score)]的值:[$(pobjConceptEN.score)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjConceptEN.stuScore &&
    undefined !== pobjConceptEN.stuScore &&
    tzDataType.isNumber(pobjConceptEN.stuScore) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学生平均分(stuScore)]的值:[$(pobjConceptEN.stuScore)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjConceptEN.teaScore &&
    undefined !== pobjConceptEN.teaScore &&
    tzDataType.isNumber(pobjConceptEN.teaScore) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教师评分(teaScore)]的值:[$(pobjConceptEN.teaScore)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.idCurrEduCls) == false &&
    undefined !== pobjConceptEN.idCurrEduCls &&
    tzDataType.isString(pobjConceptEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjConceptEN.idCurrEduCls)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.pdfContent) == false &&
    undefined !== pobjConceptEN.pdfContent &&
    tzDataType.isString(pobjConceptEN.pdfContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Pdf内容(pdfContent)]的值:[$(pobjConceptEN.pdfContent)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjConceptEN.pdfPageNum &&
    undefined !== pobjConceptEN.pdfPageNum &&
    tzDataType.isNumber(pobjConceptEN.pdfPageNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Pdf页码(pdfPageNum)]的值:[$(pobjConceptEN.pdfPageNum)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjConceptEN.citationCount &&
    undefined !== pobjConceptEN.citationCount &&
    tzDataType.isNumber(pobjConceptEN.citationCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[引用统计(citationCount)]的值:[$(pobjConceptEN.citationCount)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjConceptEN.versionCount &&
    undefined !== pobjConceptEN.versionCount &&
    tzDataType.isNumber(pobjConceptEN.versionCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[版本统计(versionCount)]的值:[$(pobjConceptEN.versionCount)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.createDate) == false &&
    undefined !== pobjConceptEN.createDate &&
    tzDataType.isString(pobjConceptEN.createDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[建立日期(createDate)]的值:[$(pobjConceptEN.createDate)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.shareId) == false &&
    undefined !== pobjConceptEN.shareId &&
    tzDataType.isString(pobjConceptEN.shareId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[分享Id(shareId)]的值:[$(pobjConceptEN.shareId)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.updUser) == false &&
    undefined !== pobjConceptEN.updUser &&
    tzDataType.isString(pobjConceptEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjConceptEN.updUser)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Concept_CheckProperty4Update(pobjConceptEN: clsConceptEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjConceptEN.conceptId) == false && GetStrLen(pobjConceptEN.conceptId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[概念Id(conceptId)]的长度不能超过8(In 观点概念(Concept))!值:$(pobjConceptEN.conceptId)(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.conceptName) == false &&
    GetStrLen(pobjConceptEN.conceptName) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[概念名称(conceptName)]的长度不能超过500(In 观点概念(Concept))!值:$(pobjConceptEN.conceptName)(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjConceptEN.updDate) == false && GetStrLen(pobjConceptEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 观点概念(Concept))!值:$(pobjConceptEN.updDate)(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjConceptEN.memo) == false && GetStrLen(pobjConceptEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 观点概念(Concept))!值:$(pobjConceptEN.memo)(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjConceptEN.citationId) == false && GetStrLen(pobjConceptEN.citationId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[引用Id(citationId)]的长度不能超过8(In 观点概念(Concept))!值:$(pobjConceptEN.citationId)(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.idCurrEduCls) == false &&
    GetStrLen(pobjConceptEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 观点概念(Concept))!值:$(pobjConceptEN.idCurrEduCls)(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.pdfContent) == false &&
    GetStrLen(pobjConceptEN.pdfContent) > 2000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Pdf内容(pdfContent)]的长度不能超过2000(In 观点概念(Concept))!值:$(pobjConceptEN.pdfContent)(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.createDate) == false &&
    GetStrLen(pobjConceptEN.createDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[建立日期(createDate)]的长度不能超过20(In 观点概念(Concept))!值:$(pobjConceptEN.createDate)(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjConceptEN.shareId) == false && GetStrLen(pobjConceptEN.shareId) > 2) {
    throw new Error(
      '(errid:Watl000416)字段[分享Id(shareId)]的长度不能超过2(In 观点概念(Concept))!值:$(pobjConceptEN.shareId)(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjConceptEN.updUser) == false && GetStrLen(pobjConceptEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 观点概念(Concept))!值:$(pobjConceptEN.updUser)(clsConceptBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjConceptEN.conceptId) == false &&
    undefined !== pobjConceptEN.conceptId &&
    tzDataType.isString(pobjConceptEN.conceptId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[概念Id(conceptId)]的值:[$(pobjConceptEN.conceptId)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.conceptName) == false &&
    undefined !== pobjConceptEN.conceptName &&
    tzDataType.isString(pobjConceptEN.conceptName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[概念名称(conceptName)]的值:[$(pobjConceptEN.conceptName)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.conceptContent) == false &&
    undefined !== pobjConceptEN.conceptContent &&
    tzDataType.isString(pobjConceptEN.conceptContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[概念内容(conceptContent)]的值:[$(pobjConceptEN.conceptContent)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjConceptEN.isSubmit &&
    undefined !== pobjConceptEN.isSubmit &&
    tzDataType.isBoolean(pobjConceptEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjConceptEN.isSubmit)], 非法,应该为布尔型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.updDate) == false &&
    undefined !== pobjConceptEN.updDate &&
    tzDataType.isString(pobjConceptEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjConceptEN.updDate)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.memo) == false &&
    undefined !== pobjConceptEN.memo &&
    tzDataType.isString(pobjConceptEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjConceptEN.memo)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.citationId) == false &&
    undefined !== pobjConceptEN.citationId &&
    tzDataType.isString(pobjConceptEN.citationId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[引用Id(citationId)]的值:[$(pobjConceptEN.citationId)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjConceptEN.appraiseCount &&
    undefined !== pobjConceptEN.appraiseCount &&
    tzDataType.isNumber(pobjConceptEN.appraiseCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评论数(appraiseCount)]的值:[$(pobjConceptEN.appraiseCount)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjConceptEN.okCount &&
    undefined !== pobjConceptEN.okCount &&
    tzDataType.isNumber(pobjConceptEN.okCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[点赞统计(okCount)]的值:[$(pobjConceptEN.okCount)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjConceptEN.score &&
    undefined !== pobjConceptEN.score &&
    tzDataType.isNumber(pobjConceptEN.score) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评分(score)]的值:[$(pobjConceptEN.score)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjConceptEN.stuScore &&
    undefined !== pobjConceptEN.stuScore &&
    tzDataType.isNumber(pobjConceptEN.stuScore) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学生平均分(stuScore)]的值:[$(pobjConceptEN.stuScore)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjConceptEN.teaScore &&
    undefined !== pobjConceptEN.teaScore &&
    tzDataType.isNumber(pobjConceptEN.teaScore) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教师评分(teaScore)]的值:[$(pobjConceptEN.teaScore)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.idCurrEduCls) == false &&
    undefined !== pobjConceptEN.idCurrEduCls &&
    tzDataType.isString(pobjConceptEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjConceptEN.idCurrEduCls)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.pdfContent) == false &&
    undefined !== pobjConceptEN.pdfContent &&
    tzDataType.isString(pobjConceptEN.pdfContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Pdf内容(pdfContent)]的值:[$(pobjConceptEN.pdfContent)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjConceptEN.pdfPageNum &&
    undefined !== pobjConceptEN.pdfPageNum &&
    tzDataType.isNumber(pobjConceptEN.pdfPageNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Pdf页码(pdfPageNum)]的值:[$(pobjConceptEN.pdfPageNum)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjConceptEN.citationCount &&
    undefined !== pobjConceptEN.citationCount &&
    tzDataType.isNumber(pobjConceptEN.citationCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[引用统计(citationCount)]的值:[$(pobjConceptEN.citationCount)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjConceptEN.versionCount &&
    undefined !== pobjConceptEN.versionCount &&
    tzDataType.isNumber(pobjConceptEN.versionCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[版本统计(versionCount)]的值:[$(pobjConceptEN.versionCount)], 非法,应该为数值型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.createDate) == false &&
    undefined !== pobjConceptEN.createDate &&
    tzDataType.isString(pobjConceptEN.createDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[建立日期(createDate)]的值:[$(pobjConceptEN.createDate)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.shareId) == false &&
    undefined !== pobjConceptEN.shareId &&
    tzDataType.isString(pobjConceptEN.shareId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[分享Id(shareId)]的值:[$(pobjConceptEN.shareId)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjConceptEN.updUser) == false &&
    undefined !== pobjConceptEN.updUser &&
    tzDataType.isString(pobjConceptEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjConceptEN.updUser)], 非法,应该为字符型(In 观点概念(Concept))!(clsConceptBL:CheckProperty4Update)',
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
export function Concept_GetJSONStrByObj(pobjConceptEN: clsConceptEN): string {
  pobjConceptEN.sfUpdFldSetStr = pobjConceptEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjConceptEN);
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
export function Concept_GetObjLstByJSONStr(strJSON: string): Array<clsConceptEN> {
  let arrConceptObjLst = new Array<clsConceptEN>();
  if (strJSON === '') {
    return arrConceptObjLst;
  }
  try {
    arrConceptObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrConceptObjLst;
  }
  return arrConceptObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrConceptObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function Concept_GetObjLstByJSONObjLst(
  arrConceptObjLstS: Array<clsConceptEN>,
): Array<clsConceptEN> {
  const arrConceptObjLst = new Array<clsConceptEN>();
  for (const objInFor of arrConceptObjLstS) {
    const obj1 = Concept_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrConceptObjLst.push(obj1);
  }
  return arrConceptObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function Concept_GetObjByJSONStr(strJSON: string): clsConceptEN {
  let pobjConceptEN = new clsConceptEN();
  if (strJSON === '') {
    return pobjConceptEN;
  }
  try {
    pobjConceptEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjConceptEN;
  }
  return pobjConceptEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function Concept_GetCombineCondition(objConceptCond: clsConceptEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_ConceptId,
    ) == true
  ) {
    const strComparisonOpConceptId: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_ConceptId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConceptEN.con_ConceptId,
      objConceptCond.conceptId,
      strComparisonOpConceptId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_ConceptName,
    ) == true
  ) {
    const strComparisonOpConceptName: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_ConceptName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConceptEN.con_ConceptName,
      objConceptCond.conceptName,
      strComparisonOpConceptName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_IsSubmit,
    ) == true
  ) {
    if (objConceptCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsConceptEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsConceptEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConceptEN.con_UpdDate,
      objConceptCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objConceptCond.dicFldComparisonOp[clsConceptEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConceptEN.con_Memo,
      objConceptCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_CitationId,
    ) == true
  ) {
    const strComparisonOpCitationId: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_CitationId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConceptEN.con_CitationId,
      objConceptCond.citationId,
      strComparisonOpCitationId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_AppraiseCount,
    ) == true
  ) {
    const strComparisonOpAppraiseCount: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_AppraiseCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsConceptEN.con_AppraiseCount,
      objConceptCond.appraiseCount,
      strComparisonOpAppraiseCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_OkCount,
    ) == true
  ) {
    const strComparisonOpOkCount: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_OkCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsConceptEN.con_OkCount,
      objConceptCond.okCount,
      strComparisonOpOkCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string = objConceptCond.dicFldComparisonOp[clsConceptEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsConceptEN.con_Score,
      objConceptCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsConceptEN.con_StuScore,
      objConceptCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsConceptEN.con_TeaScore,
      objConceptCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConceptEN.con_IdCurrEduCls,
      objConceptCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_PdfContent,
    ) == true
  ) {
    const strComparisonOpPdfContent: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_PdfContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConceptEN.con_PdfContent,
      objConceptCond.pdfContent,
      strComparisonOpPdfContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_PdfPageNum,
    ) == true
  ) {
    const strComparisonOpPdfPageNum: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_PdfPageNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsConceptEN.con_PdfPageNum,
      objConceptCond.pdfPageNum,
      strComparisonOpPdfPageNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_CitationCount,
    ) == true
  ) {
    const strComparisonOpCitationCount: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_CitationCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsConceptEN.con_CitationCount,
      objConceptCond.citationCount,
      strComparisonOpCitationCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_VersionCount,
    ) == true
  ) {
    const strComparisonOpVersionCount: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_VersionCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsConceptEN.con_VersionCount,
      objConceptCond.versionCount,
      strComparisonOpVersionCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_CreateDate,
    ) == true
  ) {
    const strComparisonOpCreateDate: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_CreateDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConceptEN.con_CreateDate,
      objConceptCond.createDate,
      strComparisonOpCreateDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_ShareId,
    ) == true
  ) {
    const strComparisonOpShareId: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_ShareId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConceptEN.con_ShareId,
      objConceptCond.shareId,
      strComparisonOpShareId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConceptCond.dicFldComparisonOp,
      clsConceptEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objConceptCond.dicFldComparisonOp[clsConceptEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConceptEN.con_UpdUser,
      objConceptCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--Concept(观点概念),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strConceptName: 概念名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Concept_GetUniCondStr(objConceptEN: clsConceptEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and IdCurrEduCls = '{0}'", objConceptEN.idCurrEduCls);
  strWhereCond += Format(" and ConceptName = '{0}'", objConceptEN.conceptName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--Concept(观点概念),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strConceptName: 概念名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Concept_GetUniCondStr4Update(objConceptEN: clsConceptEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ConceptId <> '{0}'", objConceptEN.conceptId);
  strWhereCond += Format(" and IdCurrEduCls = '{0}'", objConceptEN.idCurrEduCls);
  strWhereCond += Format(" and ConceptName = '{0}'", objConceptEN.conceptName);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objConceptENS:源对象
 * @param objConceptENT:目标对象
 */
export function Concept_CopyObjTo(objConceptENS: clsConceptEN, objConceptENT: clsConceptEN): void {
  objConceptENT.conceptId = objConceptENS.conceptId; //概念Id
  objConceptENT.conceptName = objConceptENS.conceptName; //概念名称
  objConceptENT.conceptContent = objConceptENS.conceptContent; //概念内容
  objConceptENT.isSubmit = objConceptENS.isSubmit; //是否提交
  objConceptENT.updDate = objConceptENS.updDate; //修改日期
  objConceptENT.memo = objConceptENS.memo; //备注
  objConceptENT.citationId = objConceptENS.citationId; //引用Id
  objConceptENT.appraiseCount = objConceptENS.appraiseCount; //评论数
  objConceptENT.okCount = objConceptENS.okCount; //点赞统计
  objConceptENT.score = objConceptENS.score; //评分
  objConceptENT.stuScore = objConceptENS.stuScore; //学生平均分
  objConceptENT.teaScore = objConceptENS.teaScore; //教师评分
  objConceptENT.idCurrEduCls = objConceptENS.idCurrEduCls; //教学班流水号
  objConceptENT.pdfContent = objConceptENS.pdfContent; //Pdf内容
  objConceptENT.pdfPageNum = objConceptENS.pdfPageNum; //Pdf页码
  objConceptENT.citationCount = objConceptENS.citationCount; //引用统计
  objConceptENT.versionCount = objConceptENS.versionCount; //版本统计
  objConceptENT.createDate = objConceptENS.createDate; //建立日期
  objConceptENT.shareId = objConceptENS.shareId; //分享Id
  objConceptENT.updUser = objConceptENS.updUser; //修改人
  objConceptENT.sfUpdFldSetStr = objConceptENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objConceptENS:源对象
 * @param objConceptENT:目标对象
 */
export function Concept_GetObjFromJsonObj(objConceptENS: clsConceptEN): clsConceptEN {
  const objConceptENT: clsConceptEN = new clsConceptEN();
  ObjectAssign(objConceptENT, objConceptENS);
  return objConceptENT;
}
