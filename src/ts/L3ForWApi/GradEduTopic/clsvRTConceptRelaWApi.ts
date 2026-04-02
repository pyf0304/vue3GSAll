/**
 * 类名:clsvRTConceptRelaWApi
 * 表名:vRTConceptRela(01120607)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:38
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
 * vRTConceptRela(vRTConceptRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月08日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvRTConceptRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTConceptRelaEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const vRTConceptRela_Controller = 'vRTConceptRelaApi';
export const vRTConceptRela_ConstructorName = 'vRTConceptRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function vRTConceptRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsvRTConceptRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvRTConceptRelaWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
      const objvRTConceptRela = vRTConceptRela_GetObjFromJsonObj(returnObj);
      return objvRTConceptRela;
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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function vRTConceptRela_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvRTConceptRelaWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrvRTConceptRelaObjLstCache = await vRTConceptRela_GetObjLstCache();
  try {
    const arrvRTConceptRelaSel = arrvRTConceptRelaObjLstCache.filter((x) => x.mId == lngmId);
    let objvRTConceptRela: clsvRTConceptRelaEN;
    if (arrvRTConceptRelaSel.length > 0) {
      objvRTConceptRela = arrvRTConceptRelaSel[0];
      return objvRTConceptRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvRTConceptRelaConst = await vRTConceptRela_GetObjBymIdAsync(lngmId);
        if (objvRTConceptRelaConst != null) {
          vRTConceptRela_ReFreshThisCache();
          return objvRTConceptRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vRTConceptRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function vRTConceptRela_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsvRTConceptRelaWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvRTConceptRelaEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvRTConceptRelaCache: clsvRTConceptRelaEN = JSON.parse(strTempObj);
    return objvRTConceptRelaCache;
  }
  try {
    const objvRTConceptRela = await vRTConceptRela_GetObjBymIdAsync(lngmId);
    if (objvRTConceptRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objvRTConceptRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvRTConceptRela;
    }
    return objvRTConceptRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vRTConceptRela_ConstructorName,
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
 * @returns 返回一个输出字段值
 */
export async function vRTConceptRela_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvRTConceptRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvRTConceptRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvRTConceptRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objvRTConceptRela = await vRTConceptRela_GetObjBymIdCache(lngmId);
  if (objvRTConceptRela == null) return '';
  if (objvRTConceptRela.GetFldValue(strOutFldName) == null) return '';
  return objvRTConceptRela.GetFldValue(strOutFldName).toString();
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
export function vRTConceptRela_SortFunDefa(a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN): number {
  return a.mId - b.mId;
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
export function vRTConceptRela_SortFunDefa2Fld(
  a: clsvRTConceptRelaEN,
  b: clsvRTConceptRelaEN,
): number {
  if (a.topicId == b.topicId) return a.conceptId.localeCompare(b.conceptId);
  else return a.topicId.localeCompare(b.topicId);
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
export function vRTConceptRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvRTConceptRelaEN.con_mId:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return a.mId - b.mId;
        };
      case clsvRTConceptRelaEN.con_TopicId:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsvRTConceptRelaEN.con_ConceptId:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return a.conceptId.localeCompare(b.conceptId);
        };
      case clsvRTConceptRelaEN.con_UpdDate:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvRTConceptRelaEN.con_Memo:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvRTConceptRelaEN.con_TopicName:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.topicName == null) return -1;
          if (b.topicName == null) return 1;
          return a.topicName.localeCompare(b.topicName);
        };
      case clsvRTConceptRelaEN.con_TopicContent:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.topicContent == null) return -1;
          if (b.topicContent == null) return 1;
          return a.topicContent.localeCompare(b.topicContent);
        };
      case clsvRTConceptRelaEN.con_OrderNum:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvRTConceptRelaEN.con_TopicProposePeople:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.topicProposePeople == null) return -1;
          if (b.topicProposePeople == null) return 1;
          return a.topicProposePeople.localeCompare(b.topicProposePeople);
        };
      case clsvRTConceptRelaEN.con_ConceptContent:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.conceptContent == null) return -1;
          if (b.conceptContent == null) return 1;
          return a.conceptContent.localeCompare(b.conceptContent);
        };
      case clsvRTConceptRelaEN.con_ConceptName:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.conceptName == null) return -1;
          if (b.conceptName == null) return 1;
          return a.conceptName.localeCompare(b.conceptName);
        };
      case clsvRTConceptRelaEN.con_AppraiseCount:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return a.appraiseCount - b.appraiseCount;
        };
      case clsvRTConceptRelaEN.con_CitationCount:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return a.citationCount - b.citationCount;
        };
      case clsvRTConceptRelaEN.con_CitationId:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.citationId == null) return -1;
          if (b.citationId == null) return 1;
          return a.citationId.localeCompare(b.citationId);
        };
      case clsvRTConceptRelaEN.con_IsSubmit:
        return (a: clsvRTConceptRelaEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsvRTConceptRelaEN.con_Score:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return a.score - b.score;
        };
      case clsvRTConceptRelaEN.con_StuScore:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return a.stuScore - b.stuScore;
        };
      case clsvRTConceptRelaEN.con_TeaScore:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsvRTConceptRelaEN.con_ConcepDate:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.concepDate == null) return -1;
          if (b.concepDate == null) return 1;
          return a.concepDate.localeCompare(b.concepDate);
        };
      case clsvRTConceptRelaEN.con_ConcepUserId:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.concepUserId == null) return -1;
          if (b.concepUserId == null) return 1;
          return a.concepUserId.localeCompare(b.concepUserId);
        };
      case clsvRTConceptRelaEN.con_IdCurrEduCls:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvRTConceptRelaEN.con_PdfContent:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.pdfContent == null) return -1;
          if (b.pdfContent == null) return 1;
          return a.pdfContent.localeCompare(b.pdfContent);
        };
      case clsvRTConceptRelaEN.con_PdfPageNum:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return a.pdfPageNum - b.pdfPageNum;
        };
      case clsvRTConceptRelaEN.con_OkCount:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return a.okCount - b.okCount;
        };
      case clsvRTConceptRelaEN.con_VersionCount:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return a.versionCount - b.versionCount;
        };
      case clsvRTConceptRelaEN.con_CreateDate:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.createDate == null) return -1;
          if (b.createDate == null) return 1;
          return a.createDate.localeCompare(b.createDate);
        };
      case clsvRTConceptRelaEN.con_ShareId:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.shareId == null) return -1;
          if (b.shareId == null) return 1;
          return a.shareId.localeCompare(b.shareId);
        };
      case clsvRTConceptRelaEN.con_UpdUser:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvRTConceptRelaEN.con_ClassificationId:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (a.classificationId == null) return -1;
          if (b.classificationId == null) return 1;
          return a.classificationId.localeCompare(b.classificationId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vRTConceptRela]中不存在!(in ${vRTConceptRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvRTConceptRelaEN.con_mId:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return b.mId - a.mId;
        };
      case clsvRTConceptRelaEN.con_TopicId:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsvRTConceptRelaEN.con_ConceptId:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return b.conceptId.localeCompare(a.conceptId);
        };
      case clsvRTConceptRelaEN.con_UpdDate:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvRTConceptRelaEN.con_Memo:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvRTConceptRelaEN.con_TopicName:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.topicName == null) return -1;
          if (a.topicName == null) return 1;
          return b.topicName.localeCompare(a.topicName);
        };
      case clsvRTConceptRelaEN.con_TopicContent:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.topicContent == null) return -1;
          if (a.topicContent == null) return 1;
          return b.topicContent.localeCompare(a.topicContent);
        };
      case clsvRTConceptRelaEN.con_OrderNum:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvRTConceptRelaEN.con_TopicProposePeople:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.topicProposePeople == null) return -1;
          if (a.topicProposePeople == null) return 1;
          return b.topicProposePeople.localeCompare(a.topicProposePeople);
        };
      case clsvRTConceptRelaEN.con_ConceptContent:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.conceptContent == null) return -1;
          if (a.conceptContent == null) return 1;
          return b.conceptContent.localeCompare(a.conceptContent);
        };
      case clsvRTConceptRelaEN.con_ConceptName:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.conceptName == null) return -1;
          if (a.conceptName == null) return 1;
          return b.conceptName.localeCompare(a.conceptName);
        };
      case clsvRTConceptRelaEN.con_AppraiseCount:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return b.appraiseCount - a.appraiseCount;
        };
      case clsvRTConceptRelaEN.con_CitationCount:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return b.citationCount - a.citationCount;
        };
      case clsvRTConceptRelaEN.con_CitationId:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.citationId == null) return -1;
          if (a.citationId == null) return 1;
          return b.citationId.localeCompare(a.citationId);
        };
      case clsvRTConceptRelaEN.con_IsSubmit:
        return (b: clsvRTConceptRelaEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsvRTConceptRelaEN.con_Score:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return b.score - a.score;
        };
      case clsvRTConceptRelaEN.con_StuScore:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return b.stuScore - a.stuScore;
        };
      case clsvRTConceptRelaEN.con_TeaScore:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsvRTConceptRelaEN.con_ConcepDate:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.concepDate == null) return -1;
          if (a.concepDate == null) return 1;
          return b.concepDate.localeCompare(a.concepDate);
        };
      case clsvRTConceptRelaEN.con_ConcepUserId:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.concepUserId == null) return -1;
          if (a.concepUserId == null) return 1;
          return b.concepUserId.localeCompare(a.concepUserId);
        };
      case clsvRTConceptRelaEN.con_IdCurrEduCls:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvRTConceptRelaEN.con_PdfContent:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.pdfContent == null) return -1;
          if (a.pdfContent == null) return 1;
          return b.pdfContent.localeCompare(a.pdfContent);
        };
      case clsvRTConceptRelaEN.con_PdfPageNum:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return b.pdfPageNum - a.pdfPageNum;
        };
      case clsvRTConceptRelaEN.con_OkCount:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return b.okCount - a.okCount;
        };
      case clsvRTConceptRelaEN.con_VersionCount:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          return b.versionCount - a.versionCount;
        };
      case clsvRTConceptRelaEN.con_CreateDate:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.createDate == null) return -1;
          if (a.createDate == null) return 1;
          return b.createDate.localeCompare(a.createDate);
        };
      case clsvRTConceptRelaEN.con_ShareId:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.shareId == null) return -1;
          if (a.shareId == null) return 1;
          return b.shareId.localeCompare(a.shareId);
        };
      case clsvRTConceptRelaEN.con_UpdUser:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvRTConceptRelaEN.con_ClassificationId:
        return (a: clsvRTConceptRelaEN, b: clsvRTConceptRelaEN) => {
          if (b.classificationId == null) return -1;
          if (a.classificationId == null) return 1;
          return b.classificationId.localeCompare(a.classificationId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vRTConceptRela]中不存在!(in ${vRTConceptRela_ConstructorName}.${strThisFuncName})`;
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
export async function vRTConceptRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvRTConceptRelaEN.con_mId:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.mId === value;
      };
    case clsvRTConceptRelaEN.con_TopicId:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.topicId === value;
      };
    case clsvRTConceptRelaEN.con_ConceptId:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.conceptId === value;
      };
    case clsvRTConceptRelaEN.con_UpdDate:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.updDate === value;
      };
    case clsvRTConceptRelaEN.con_Memo:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.memo === value;
      };
    case clsvRTConceptRelaEN.con_TopicName:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.topicName === value;
      };
    case clsvRTConceptRelaEN.con_TopicContent:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.topicContent === value;
      };
    case clsvRTConceptRelaEN.con_OrderNum:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.orderNum === value;
      };
    case clsvRTConceptRelaEN.con_TopicProposePeople:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.topicProposePeople === value;
      };
    case clsvRTConceptRelaEN.con_ConceptContent:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.conceptContent === value;
      };
    case clsvRTConceptRelaEN.con_ConceptName:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.conceptName === value;
      };
    case clsvRTConceptRelaEN.con_AppraiseCount:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.appraiseCount === value;
      };
    case clsvRTConceptRelaEN.con_CitationCount:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.citationCount === value;
      };
    case clsvRTConceptRelaEN.con_CitationId:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.citationId === value;
      };
    case clsvRTConceptRelaEN.con_IsSubmit:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.isSubmit === value;
      };
    case clsvRTConceptRelaEN.con_Score:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.score === value;
      };
    case clsvRTConceptRelaEN.con_StuScore:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.stuScore === value;
      };
    case clsvRTConceptRelaEN.con_TeaScore:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.teaScore === value;
      };
    case clsvRTConceptRelaEN.con_ConcepDate:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.concepDate === value;
      };
    case clsvRTConceptRelaEN.con_ConcepUserId:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.concepUserId === value;
      };
    case clsvRTConceptRelaEN.con_IdCurrEduCls:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvRTConceptRelaEN.con_PdfContent:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.pdfContent === value;
      };
    case clsvRTConceptRelaEN.con_PdfPageNum:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.pdfPageNum === value;
      };
    case clsvRTConceptRelaEN.con_OkCount:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.okCount === value;
      };
    case clsvRTConceptRelaEN.con_VersionCount:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.versionCount === value;
      };
    case clsvRTConceptRelaEN.con_CreateDate:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.createDate === value;
      };
    case clsvRTConceptRelaEN.con_ShareId:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.shareId === value;
      };
    case clsvRTConceptRelaEN.con_UpdUser:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.updUser === value;
      };
    case clsvRTConceptRelaEN.con_ClassificationId:
      return (obj: clsvRTConceptRelaEN) => {
        return obj.classificationId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vRTConceptRela]中不存在!(in ${vRTConceptRela_ConstructorName}.${strThisFuncName})`;
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
 * @returns 返回一个关键字值列表
 */
export async function vRTConceptRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvRTConceptRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvRTConceptRela = await vRTConceptRela_GetObjLstCache();
  if (arrvRTConceptRela == null) return [];
  let arrvRTConceptRelaSel = arrvRTConceptRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvRTConceptRelaSel.length == 0) return [];
  return arrvRTConceptRelaSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vRTConceptRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
export async function vRTConceptRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
export async function vRTConceptRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvRTConceptRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

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
      const objvRTConceptRela = vRTConceptRela_GetObjFromJsonObj(returnObj);
      return objvRTConceptRela;
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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
export async function vRTConceptRela_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvRTConceptRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsvRTConceptRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTConceptRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvRTConceptRelaExObjLstCache: Array<clsvRTConceptRelaEN> = CacheHelper.Get(strKey);
    const arrvRTConceptRelaObjLstT = vRTConceptRela_GetObjLstByJSONObjLst(
      arrvRTConceptRelaExObjLstCache,
    );
    return arrvRTConceptRelaObjLstT;
  }
  try {
    const arrvRTConceptRelaExObjLst = await vRTConceptRela_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvRTConceptRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTConceptRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTConceptRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTConceptRela_ConstructorName,
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
export async function vRTConceptRela_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvRTConceptRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsvRTConceptRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTConceptRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvRTConceptRelaExObjLstCache: Array<clsvRTConceptRelaEN> = JSON.parse(strTempObjLst);
    const arrvRTConceptRelaObjLstT = vRTConceptRela_GetObjLstByJSONObjLst(
      arrvRTConceptRelaExObjLstCache,
    );
    return arrvRTConceptRelaObjLstT;
  }
  try {
    const arrvRTConceptRelaExObjLst = await vRTConceptRela_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvRTConceptRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTConceptRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTConceptRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTConceptRela_ConstructorName,
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
export async function vRTConceptRela_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvRTConceptRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvRTConceptRelaObjLstCache: Array<clsvRTConceptRelaEN> = JSON.parse(strTempObjLst);
    return arrvRTConceptRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vRTConceptRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvRTConceptRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

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
          vRTConceptRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTConceptRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
export async function vRTConceptRela_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvRTConceptRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsvRTConceptRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTConceptRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvRTConceptRelaExObjLstCache: Array<clsvRTConceptRelaEN> = JSON.parse(strTempObjLst);
    const arrvRTConceptRelaObjLstT = vRTConceptRela_GetObjLstByJSONObjLst(
      arrvRTConceptRelaExObjLstCache,
    );
    return arrvRTConceptRelaObjLstT;
  }
  try {
    const arrvRTConceptRelaExObjLst = await vRTConceptRela_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvRTConceptRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTConceptRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTConceptRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTConceptRela_ConstructorName,
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
export async function vRTConceptRela_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvRTConceptRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvRTConceptRelaObjLstCache: Array<clsvRTConceptRelaEN> = JSON.parse(strTempObjLst);
    return arrvRTConceptRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vRTConceptRela_GetObjLstCache(): Promise<Array<clsvRTConceptRelaEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvRTConceptRelaObjLstCache;
  switch (clsvRTConceptRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrvRTConceptRelaObjLstCache = await vRTConceptRela_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvRTConceptRelaObjLstCache = await vRTConceptRela_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvRTConceptRelaObjLstCache = await vRTConceptRela_GetObjLstClientCache();
      break;
    default:
      arrvRTConceptRelaObjLstCache = await vRTConceptRela_GetObjLstClientCache();
      break;
  }
  return arrvRTConceptRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vRTConceptRela_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvRTConceptRelaObjLstCache;
  switch (clsvRTConceptRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrvRTConceptRelaObjLstCache = await vRTConceptRela_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvRTConceptRelaObjLstCache = await vRTConceptRela_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvRTConceptRelaObjLstCache = null;
      break;
    default:
      arrvRTConceptRelaObjLstCache = null;
      break;
  }
  return arrvRTConceptRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vRTConceptRela_GetSubObjLstCache(objvRTConceptRelaCond: clsvRTConceptRelaEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvRTConceptRelaObjLstCache = await vRTConceptRela_GetObjLstCache();
  let arrvRTConceptRelaSel = arrvRTConceptRelaObjLstCache;
  if (
    objvRTConceptRelaCond.sfFldComparisonOp == null ||
    objvRTConceptRelaCond.sfFldComparisonOp == ''
  )
    return arrvRTConceptRelaSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTConceptRelaCond.sfFldComparisonOp,
  );
  //console.log("clsvRTConceptRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTConceptRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTConceptRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvRTConceptRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvRTConceptRelaCond),
      vRTConceptRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvRTConceptRelaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function vRTConceptRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsvRTConceptRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vRTConceptRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTConceptRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
 */
export async function vRTConceptRela_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrvRTConceptRelaObjLstCache = await vRTConceptRela_GetObjLstCache();
    const arrvRTConceptRelaSel = arrvRTConceptRelaObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrvRTConceptRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      vRTConceptRela_ConstructorName,
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
export async function vRTConceptRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvRTConceptRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

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
          vRTConceptRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTConceptRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
export async function vRTConceptRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvRTConceptRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

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
          vRTConceptRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTConceptRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
export async function vRTConceptRela_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvRTConceptRelaEN>();
  const arrvRTConceptRelaObjLstCache = await vRTConceptRela_GetObjLstCache();
  if (arrvRTConceptRelaObjLstCache.length == 0) return arrvRTConceptRelaObjLstCache;
  let arrvRTConceptRelaSel = arrvRTConceptRelaObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvRTConceptRelaCond = new clsvRTConceptRelaEN();
  ObjectAssign(objvRTConceptRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvRTConceptRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTConceptRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvRTConceptRelaSel.length == 0) return arrvRTConceptRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvRTConceptRelaSel = arrvRTConceptRelaSel.sort(
        vRTConceptRela_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvRTConceptRelaSel = arrvRTConceptRelaSel.sort(objPagerPara.sortFun);
    }
    arrvRTConceptRelaSel = arrvRTConceptRelaSel.slice(intStart, intEnd);
    return arrvRTConceptRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vRTConceptRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvRTConceptRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vRTConceptRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvRTConceptRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvRTConceptRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

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
          vRTConceptRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTConceptRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objvRTConceptRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vRTConceptRela_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
 * @param objvRTConceptRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vRTConceptRela_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objvRTConceptRelaEN);
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
 * @param objvRTConceptRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vRTConceptRela_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objvRTConceptRelaEN);
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
 * @param objvRTConceptRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vRTConceptRela_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objvRTConceptRelaEN);
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
 * @param objvRTConceptRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vRTConceptRela_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objvRTConceptRelaEN);
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vRTConceptRela_IsExistRecordCache(
  objvRTConceptRelaCond: clsvRTConceptRelaEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvRTConceptRelaObjLstCache = await vRTConceptRela_GetObjLstCache();
  if (arrvRTConceptRelaObjLstCache == null) return false;
  let arrvRTConceptRelaSel = arrvRTConceptRelaObjLstCache;
  if (
    objvRTConceptRelaCond.sfFldComparisonOp == null ||
    objvRTConceptRelaCond.sfFldComparisonOp == ''
  )
    return arrvRTConceptRelaSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTConceptRelaCond.sfFldComparisonOp,
  );
  //console.log("clsvRTConceptRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTConceptRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTConceptRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvRTConceptRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvRTConceptRelaCond),
      vRTConceptRela_ConstructorName,
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
export async function vRTConceptRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function vRTConceptRela_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrvRTConceptRelaObjLstCache = await vRTConceptRela_GetObjLstCache();
  if (arrvRTConceptRelaObjLstCache == null) return false;
  try {
    const arrvRTConceptRelaSel = arrvRTConceptRelaObjLstCache.filter((x) => x.mId == lngmId);
    if (arrvRTConceptRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      vRTConceptRela_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vRTConceptRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
export async function vRTConceptRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vRTConceptRela_Controller, strAction);

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
        vRTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTConceptRela_ConstructorName,
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
 * @param objvRTConceptRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function vRTConceptRela_GetRecCountByCondCache(
  objvRTConceptRelaCond: clsvRTConceptRelaEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvRTConceptRelaObjLstCache = await vRTConceptRela_GetObjLstCache();
  if (arrvRTConceptRelaObjLstCache == null) return 0;
  let arrvRTConceptRelaSel = arrvRTConceptRelaObjLstCache;
  if (
    objvRTConceptRelaCond.sfFldComparisonOp == null ||
    objvRTConceptRelaCond.sfFldComparisonOp == ''
  )
    return arrvRTConceptRelaSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTConceptRelaCond.sfFldComparisonOp,
  );
  //console.log("clsvRTConceptRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTConceptRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTConceptRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTConceptRelaSel = arrvRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvRTConceptRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvRTConceptRelaCond),
      vRTConceptRela_ConstructorName,
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
export function vRTConceptRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vRTConceptRela_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvRTConceptRelaEN._CurrTabName;
    switch (clsvRTConceptRelaEN.CacheModeId) {
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
export function vRTConceptRela_GetJSONStrByObj(pobjvRTConceptRelaEN: clsvRTConceptRelaEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvRTConceptRelaEN);
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
export function vRTConceptRela_GetObjLstByJSONStr(strJSON: string): Array<clsvRTConceptRelaEN> {
  let arrvRTConceptRelaObjLst = new Array<clsvRTConceptRelaEN>();
  if (strJSON === '') {
    return arrvRTConceptRelaObjLst;
  }
  try {
    arrvRTConceptRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvRTConceptRelaObjLst;
  }
  return arrvRTConceptRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvRTConceptRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vRTConceptRela_GetObjLstByJSONObjLst(
  arrvRTConceptRelaObjLstS: Array<clsvRTConceptRelaEN>,
): Array<clsvRTConceptRelaEN> {
  const arrvRTConceptRelaObjLst = new Array<clsvRTConceptRelaEN>();
  for (const objInFor of arrvRTConceptRelaObjLstS) {
    const obj1 = vRTConceptRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvRTConceptRelaObjLst.push(obj1);
  }
  return arrvRTConceptRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vRTConceptRela_GetObjByJSONStr(strJSON: string): clsvRTConceptRelaEN {
  let pobjvRTConceptRelaEN = new clsvRTConceptRelaEN();
  if (strJSON === '') {
    return pobjvRTConceptRelaEN;
  }
  try {
    pobjvRTConceptRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvRTConceptRelaEN;
  }
  return pobjvRTConceptRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vRTConceptRela_GetCombineCondition(
  objvRTConceptRelaCond: clsvRTConceptRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTConceptRelaEN.con_mId,
      objvRTConceptRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_TopicId,
      objvRTConceptRelaCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_ConceptId,
    ) == true
  ) {
    const strComparisonOpConceptId: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_ConceptId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_ConceptId,
      objvRTConceptRelaCond.conceptId,
      strComparisonOpConceptId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_UpdDate,
      objvRTConceptRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_Memo,
      objvRTConceptRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_TopicName,
    ) == true
  ) {
    const strComparisonOpTopicName: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_TopicName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_TopicName,
      objvRTConceptRelaCond.topicName,
      strComparisonOpTopicName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTConceptRelaEN.con_OrderNum,
      objvRTConceptRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_TopicProposePeople,
    ) == true
  ) {
    const strComparisonOpTopicProposePeople: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_TopicProposePeople];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_TopicProposePeople,
      objvRTConceptRelaCond.topicProposePeople,
      strComparisonOpTopicProposePeople,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_ConceptName,
    ) == true
  ) {
    const strComparisonOpConceptName: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_ConceptName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_ConceptName,
      objvRTConceptRelaCond.conceptName,
      strComparisonOpConceptName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_AppraiseCount,
    ) == true
  ) {
    const strComparisonOpAppraiseCount: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_AppraiseCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTConceptRelaEN.con_AppraiseCount,
      objvRTConceptRelaCond.appraiseCount,
      strComparisonOpAppraiseCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_CitationCount,
    ) == true
  ) {
    const strComparisonOpCitationCount: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_CitationCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTConceptRelaEN.con_CitationCount,
      objvRTConceptRelaCond.citationCount,
      strComparisonOpCitationCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_CitationId,
    ) == true
  ) {
    const strComparisonOpCitationId: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_CitationId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_CitationId,
      objvRTConceptRelaCond.citationId,
      strComparisonOpCitationId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_IsSubmit,
    ) == true
  ) {
    if (objvRTConceptRelaCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvRTConceptRelaEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvRTConceptRelaEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTConceptRelaEN.con_Score,
      objvRTConceptRelaCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTConceptRelaEN.con_StuScore,
      objvRTConceptRelaCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTConceptRelaEN.con_TeaScore,
      objvRTConceptRelaCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_ConcepDate,
    ) == true
  ) {
    const strComparisonOpConcepDate: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_ConcepDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_ConcepDate,
      objvRTConceptRelaCond.concepDate,
      strComparisonOpConcepDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_ConcepUserId,
    ) == true
  ) {
    const strComparisonOpConcepUserId: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_ConcepUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_ConcepUserId,
      objvRTConceptRelaCond.concepUserId,
      strComparisonOpConcepUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_IdCurrEduCls,
      objvRTConceptRelaCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_PdfContent,
    ) == true
  ) {
    const strComparisonOpPdfContent: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_PdfContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_PdfContent,
      objvRTConceptRelaCond.pdfContent,
      strComparisonOpPdfContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_PdfPageNum,
    ) == true
  ) {
    const strComparisonOpPdfPageNum: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_PdfPageNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTConceptRelaEN.con_PdfPageNum,
      objvRTConceptRelaCond.pdfPageNum,
      strComparisonOpPdfPageNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_OkCount,
    ) == true
  ) {
    const strComparisonOpOkCount: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_OkCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTConceptRelaEN.con_OkCount,
      objvRTConceptRelaCond.okCount,
      strComparisonOpOkCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_VersionCount,
    ) == true
  ) {
    const strComparisonOpVersionCount: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_VersionCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTConceptRelaEN.con_VersionCount,
      objvRTConceptRelaCond.versionCount,
      strComparisonOpVersionCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_CreateDate,
    ) == true
  ) {
    const strComparisonOpCreateDate: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_CreateDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_CreateDate,
      objvRTConceptRelaCond.createDate,
      strComparisonOpCreateDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_ShareId,
    ) == true
  ) {
    const strComparisonOpShareId: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_ShareId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_ShareId,
      objvRTConceptRelaCond.shareId,
      strComparisonOpShareId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_UpdUser,
      objvRTConceptRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTConceptRelaCond.dicFldComparisonOp,
      clsvRTConceptRelaEN.con_ClassificationId,
    ) == true
  ) {
    const strComparisonOpClassificationId: string =
      objvRTConceptRelaCond.dicFldComparisonOp[clsvRTConceptRelaEN.con_ClassificationId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTConceptRelaEN.con_ClassificationId,
      objvRTConceptRelaCond.classificationId,
      strComparisonOpClassificationId,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vRTConceptRela(vRTConceptRela),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @param strConceptId: 概念Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vRTConceptRela_GetUniCondStr(objvRTConceptRelaEN: clsvRTConceptRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId = '{0}'", objvRTConceptRelaEN.mId);
  strWhereCond += Format(" and TopicId = '{0}'", objvRTConceptRelaEN.topicId);
  strWhereCond += Format(" and ConceptId = '{0}'", objvRTConceptRelaEN.conceptId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vRTConceptRela(vRTConceptRela),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @param strConceptId: 概念Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vRTConceptRela_GetUniCondStr4Update(
  objvRTConceptRelaEN: clsvRTConceptRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objvRTConceptRelaEN.mId);
  strWhereCond += Format(" and mId = '{0}'", objvRTConceptRelaEN.mId);
  strWhereCond += Format(" and TopicId = '{0}'", objvRTConceptRelaEN.topicId);
  strWhereCond += Format(" and ConceptId = '{0}'", objvRTConceptRelaEN.conceptId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvRTConceptRelaENS:源对象
 * @param objvRTConceptRelaENT:目标对象
 */
export function vRTConceptRela_CopyObjTo(
  objvRTConceptRelaENS: clsvRTConceptRelaEN,
  objvRTConceptRelaENT: clsvRTConceptRelaEN,
): void {
  objvRTConceptRelaENT.mId = objvRTConceptRelaENS.mId; //mId
  objvRTConceptRelaENT.topicId = objvRTConceptRelaENS.topicId; //主题Id
  objvRTConceptRelaENT.conceptId = objvRTConceptRelaENS.conceptId; //概念Id
  objvRTConceptRelaENT.updDate = objvRTConceptRelaENS.updDate; //修改日期
  objvRTConceptRelaENT.memo = objvRTConceptRelaENS.memo; //备注
  objvRTConceptRelaENT.topicName = objvRTConceptRelaENS.topicName; //栏目主题
  objvRTConceptRelaENT.topicContent = objvRTConceptRelaENS.topicContent; //主题内容
  objvRTConceptRelaENT.orderNum = objvRTConceptRelaENS.orderNum; //序号
  objvRTConceptRelaENT.topicProposePeople = objvRTConceptRelaENS.topicProposePeople; //主题提出人
  objvRTConceptRelaENT.conceptContent = objvRTConceptRelaENS.conceptContent; //概念内容
  objvRTConceptRelaENT.conceptName = objvRTConceptRelaENS.conceptName; //概念名称
  objvRTConceptRelaENT.appraiseCount = objvRTConceptRelaENS.appraiseCount; //评论数
  objvRTConceptRelaENT.citationCount = objvRTConceptRelaENS.citationCount; //引用统计
  objvRTConceptRelaENT.citationId = objvRTConceptRelaENS.citationId; //引用Id
  objvRTConceptRelaENT.isSubmit = objvRTConceptRelaENS.isSubmit; //是否提交
  objvRTConceptRelaENT.score = objvRTConceptRelaENS.score; //评分
  objvRTConceptRelaENT.stuScore = objvRTConceptRelaENS.stuScore; //学生平均分
  objvRTConceptRelaENT.teaScore = objvRTConceptRelaENS.teaScore; //教师评分
  objvRTConceptRelaENT.concepDate = objvRTConceptRelaENS.concepDate; //ConcepDate
  objvRTConceptRelaENT.concepUserId = objvRTConceptRelaENS.concepUserId; //ConcepUserId
  objvRTConceptRelaENT.idCurrEduCls = objvRTConceptRelaENS.idCurrEduCls; //教学班流水号
  objvRTConceptRelaENT.pdfContent = objvRTConceptRelaENS.pdfContent; //Pdf内容
  objvRTConceptRelaENT.pdfPageNum = objvRTConceptRelaENS.pdfPageNum; //Pdf页码
  objvRTConceptRelaENT.okCount = objvRTConceptRelaENS.okCount; //点赞统计
  objvRTConceptRelaENT.versionCount = objvRTConceptRelaENS.versionCount; //版本统计
  objvRTConceptRelaENT.createDate = objvRTConceptRelaENS.createDate; //建立日期
  objvRTConceptRelaENT.shareId = objvRTConceptRelaENS.shareId; //分享Id
  objvRTConceptRelaENT.updUser = objvRTConceptRelaENS.updUser; //修改人
  objvRTConceptRelaENT.classificationId = objvRTConceptRelaENS.classificationId; //分类Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvRTConceptRelaENS:源对象
 * @param objvRTConceptRelaENT:目标对象
 */
export function vRTConceptRela_GetObjFromJsonObj(
  objvRTConceptRelaENS: clsvRTConceptRelaEN,
): clsvRTConceptRelaEN {
  const objvRTConceptRelaENT: clsvRTConceptRelaEN = new clsvRTConceptRelaEN();
  ObjectAssign(objvRTConceptRelaENT, objvRTConceptRelaENS);
  return objvRTConceptRelaENT;
}
