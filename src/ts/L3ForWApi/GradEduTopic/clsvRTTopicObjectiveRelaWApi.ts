/**
 * 类名:clsvRTTopicObjectiveRelaWApi
 * 表名:vRTTopicObjectiveRela(01120616)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:41
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
 * vRTTopicObjectiveRela(vRTTopicObjectiveRela)
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
import { clsvRTTopicObjectiveRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTTopicObjectiveRelaEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const vRTTopicObjectiveRela_Controller = 'vRTTopicObjectiveRelaApi';
export const vRTTopicObjectiveRela_ConstructorName = 'vRTTopicObjectiveRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function vRTTopicObjectiveRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsvRTTopicObjectiveRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsvRTTopicObjectiveRelaWApi.GetObjBymIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(vRTTopicObjectiveRela_Controller, strAction);

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
      const objvRTTopicObjectiveRela = vRTTopicObjectiveRela_GetObjFromJsonObj(returnObj);
      return objvRTTopicObjectiveRela;
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
        vRTTopicObjectiveRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_GetObjBymIdCache(
  lngmId: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsvRTTopicObjectiveRelaWApi.GetObjBymIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvRTTopicObjectiveRelaObjLstCache = await vRTTopicObjectiveRela_GetObjLstCache();
  try {
    const arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    let objvRTTopicObjectiveRela: clsvRTTopicObjectiveRelaEN;
    if (arrvRTTopicObjectiveRelaSel.length > 0) {
      objvRTTopicObjectiveRela = arrvRTTopicObjectiveRelaSel[0];
      return objvRTTopicObjectiveRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvRTTopicObjectiveRelaConst = await vRTTopicObjectiveRela_GetObjBymIdAsync(lngmId);
        if (objvRTTopicObjectiveRelaConst != null) {
          vRTTopicObjectiveRela_ReFreshThisCache();
          return objvRTTopicObjectiveRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsvRTTopicObjectiveRelaWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvRTTopicObjectiveRelaEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvRTTopicObjectiveRelaCache: clsvRTTopicObjectiveRelaEN = JSON.parse(strTempObj);
    return objvRTTopicObjectiveRelaCache;
  }
  try {
    const objvRTTopicObjectiveRela = await vRTTopicObjectiveRela_GetObjBymIdAsync(lngmId);
    if (objvRTTopicObjectiveRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objvRTTopicObjectiveRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvRTTopicObjectiveRela;
    }
    return objvRTTopicObjectiveRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvRTTopicObjectiveRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvRTTopicObjectiveRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvRTTopicObjectiveRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objvRTTopicObjectiveRela = await vRTTopicObjectiveRela_GetObjBymIdCache(lngmId);
  if (objvRTTopicObjectiveRela == null) return '';
  if (objvRTTopicObjectiveRela.GetFldValue(strOutFldName) == null) return '';
  return objvRTTopicObjectiveRela.GetFldValue(strOutFldName).toString();
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
export function vRTTopicObjectiveRela_SortFunDefa(
  a: clsvRTTopicObjectiveRelaEN,
  b: clsvRTTopicObjectiveRelaEN,
): number {
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
export function vRTTopicObjectiveRela_SortFunDefa2Fld(
  a: clsvRTTopicObjectiveRelaEN,
  b: clsvRTTopicObjectiveRelaEN,
): number {
  if (a.topicId == b.topicId) return a.topicObjectiveId.localeCompare(b.topicObjectiveId);
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
export function vRTTopicObjectiveRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvRTTopicObjectiveRelaEN.con_mId:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return a.mId - b.mId;
        };
      case clsvRTTopicObjectiveRelaEN.con_TopicId:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsvRTTopicObjectiveRelaEN.con_TopicObjectiveId:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return a.topicObjectiveId.localeCompare(b.topicObjectiveId);
        };
      case clsvRTTopicObjectiveRelaEN.con_UpdDate:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvRTTopicObjectiveRelaEN.con_UpdUser:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvRTTopicObjectiveRelaEN.con_ObjectiveTypeName:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.objectiveTypeName == null) return -1;
          if (b.objectiveTypeName == null) return 1;
          return a.objectiveTypeName.localeCompare(b.objectiveTypeName);
        };
      case clsvRTTopicObjectiveRelaEN.con_ObjectiveType:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.objectiveType == null) return -1;
          if (b.objectiveType == null) return 1;
          return a.objectiveType.localeCompare(b.objectiveType);
        };
      case clsvRTTopicObjectiveRelaEN.con_SourceId:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.sourceId == null) return -1;
          if (b.sourceId == null) return 1;
          return a.sourceId.localeCompare(b.sourceId);
        };
      case clsvRTTopicObjectiveRelaEN.con_IsSubmit:
        return (a: clsvRTTopicObjectiveRelaEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsvRTTopicObjectiveRelaEN.con_ObjectiveName:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.objectiveName == null) return -1;
          if (b.objectiveName == null) return 1;
          return a.objectiveName.localeCompare(b.objectiveName);
        };
      case clsvRTTopicObjectiveRelaEN.con_ObjectiveContent:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.objectiveContent == null) return -1;
          if (b.objectiveContent == null) return 1;
          return a.objectiveContent.localeCompare(b.objectiveContent);
        };
      case clsvRTTopicObjectiveRelaEN.con_Conclusion:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.conclusion == null) return -1;
          if (b.conclusion == null) return 1;
          return a.conclusion.localeCompare(b.conclusion);
        };
      case clsvRTTopicObjectiveRelaEN.con_TopicContent:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.topicContent == null) return -1;
          if (b.topicContent == null) return 1;
          return a.topicContent.localeCompare(b.topicContent);
        };
      case clsvRTTopicObjectiveRelaEN.con_TopicName:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.topicName == null) return -1;
          if (b.topicName == null) return 1;
          return a.topicName.localeCompare(b.topicName);
        };
      case clsvRTTopicObjectiveRelaEN.con_AppraiseCount:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return a.appraiseCount - b.appraiseCount;
        };
      case clsvRTTopicObjectiveRelaEN.con_CitationCount:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return a.citationCount - b.citationCount;
        };
      case clsvRTTopicObjectiveRelaEN.con_Score:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return a.score - b.score;
        };
      case clsvRTTopicObjectiveRelaEN.con_StuScore:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return a.stuScore - b.stuScore;
        };
      case clsvRTTopicObjectiveRelaEN.con_TeaScore:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsvRTTopicObjectiveRelaEN.con_ObjDate:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.objDate == null) return -1;
          if (b.objDate == null) return 1;
          return a.objDate.localeCompare(b.objDate);
        };
      case clsvRTTopicObjectiveRelaEN.con_ObjUserId:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.objUserId == null) return -1;
          if (b.objUserId == null) return 1;
          return a.objUserId.localeCompare(b.objUserId);
        };
      case clsvRTTopicObjectiveRelaEN.con_IdCurrEduCls:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvRTTopicObjectiveRelaEN.con_PdfContent:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.pdfContent == null) return -1;
          if (b.pdfContent == null) return 1;
          return a.pdfContent.localeCompare(b.pdfContent);
        };
      case clsvRTTopicObjectiveRelaEN.con_PdfPageNum:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return a.pdfPageNum - b.pdfPageNum;
        };
      case clsvRTTopicObjectiveRelaEN.con_OkCount:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return a.okCount - b.okCount;
        };
      case clsvRTTopicObjectiveRelaEN.con_VersionCount:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return a.versionCount - b.versionCount;
        };
      case clsvRTTopicObjectiveRelaEN.con_CreateDate:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.createDate == null) return -1;
          if (b.createDate == null) return 1;
          return a.createDate.localeCompare(b.createDate);
        };
      case clsvRTTopicObjectiveRelaEN.con_ShareId:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.shareId == null) return -1;
          if (b.shareId == null) return 1;
          return a.shareId.localeCompare(b.shareId);
        };
      case clsvRTTopicObjectiveRelaEN.con_ClassificationId:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (a.classificationId == null) return -1;
          if (b.classificationId == null) return 1;
          return a.classificationId.localeCompare(b.classificationId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vRTTopicObjectiveRela]中不存在!(in ${vRTTopicObjectiveRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvRTTopicObjectiveRelaEN.con_mId:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return b.mId - a.mId;
        };
      case clsvRTTopicObjectiveRelaEN.con_TopicId:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsvRTTopicObjectiveRelaEN.con_TopicObjectiveId:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return b.topicObjectiveId.localeCompare(a.topicObjectiveId);
        };
      case clsvRTTopicObjectiveRelaEN.con_UpdDate:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvRTTopicObjectiveRelaEN.con_UpdUser:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvRTTopicObjectiveRelaEN.con_ObjectiveTypeName:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.objectiveTypeName == null) return -1;
          if (a.objectiveTypeName == null) return 1;
          return b.objectiveTypeName.localeCompare(a.objectiveTypeName);
        };
      case clsvRTTopicObjectiveRelaEN.con_ObjectiveType:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.objectiveType == null) return -1;
          if (a.objectiveType == null) return 1;
          return b.objectiveType.localeCompare(a.objectiveType);
        };
      case clsvRTTopicObjectiveRelaEN.con_SourceId:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.sourceId == null) return -1;
          if (a.sourceId == null) return 1;
          return b.sourceId.localeCompare(a.sourceId);
        };
      case clsvRTTopicObjectiveRelaEN.con_IsSubmit:
        return (b: clsvRTTopicObjectiveRelaEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsvRTTopicObjectiveRelaEN.con_ObjectiveName:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.objectiveName == null) return -1;
          if (a.objectiveName == null) return 1;
          return b.objectiveName.localeCompare(a.objectiveName);
        };
      case clsvRTTopicObjectiveRelaEN.con_ObjectiveContent:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.objectiveContent == null) return -1;
          if (a.objectiveContent == null) return 1;
          return b.objectiveContent.localeCompare(a.objectiveContent);
        };
      case clsvRTTopicObjectiveRelaEN.con_Conclusion:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.conclusion == null) return -1;
          if (a.conclusion == null) return 1;
          return b.conclusion.localeCompare(a.conclusion);
        };
      case clsvRTTopicObjectiveRelaEN.con_TopicContent:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.topicContent == null) return -1;
          if (a.topicContent == null) return 1;
          return b.topicContent.localeCompare(a.topicContent);
        };
      case clsvRTTopicObjectiveRelaEN.con_TopicName:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.topicName == null) return -1;
          if (a.topicName == null) return 1;
          return b.topicName.localeCompare(a.topicName);
        };
      case clsvRTTopicObjectiveRelaEN.con_AppraiseCount:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return b.appraiseCount - a.appraiseCount;
        };
      case clsvRTTopicObjectiveRelaEN.con_CitationCount:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return b.citationCount - a.citationCount;
        };
      case clsvRTTopicObjectiveRelaEN.con_Score:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return b.score - a.score;
        };
      case clsvRTTopicObjectiveRelaEN.con_StuScore:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return b.stuScore - a.stuScore;
        };
      case clsvRTTopicObjectiveRelaEN.con_TeaScore:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsvRTTopicObjectiveRelaEN.con_ObjDate:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.objDate == null) return -1;
          if (a.objDate == null) return 1;
          return b.objDate.localeCompare(a.objDate);
        };
      case clsvRTTopicObjectiveRelaEN.con_ObjUserId:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.objUserId == null) return -1;
          if (a.objUserId == null) return 1;
          return b.objUserId.localeCompare(a.objUserId);
        };
      case clsvRTTopicObjectiveRelaEN.con_IdCurrEduCls:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvRTTopicObjectiveRelaEN.con_PdfContent:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.pdfContent == null) return -1;
          if (a.pdfContent == null) return 1;
          return b.pdfContent.localeCompare(a.pdfContent);
        };
      case clsvRTTopicObjectiveRelaEN.con_PdfPageNum:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return b.pdfPageNum - a.pdfPageNum;
        };
      case clsvRTTopicObjectiveRelaEN.con_OkCount:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return b.okCount - a.okCount;
        };
      case clsvRTTopicObjectiveRelaEN.con_VersionCount:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          return b.versionCount - a.versionCount;
        };
      case clsvRTTopicObjectiveRelaEN.con_CreateDate:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.createDate == null) return -1;
          if (a.createDate == null) return 1;
          return b.createDate.localeCompare(a.createDate);
        };
      case clsvRTTopicObjectiveRelaEN.con_ShareId:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.shareId == null) return -1;
          if (a.shareId == null) return 1;
          return b.shareId.localeCompare(a.shareId);
        };
      case clsvRTTopicObjectiveRelaEN.con_ClassificationId:
        return (a: clsvRTTopicObjectiveRelaEN, b: clsvRTTopicObjectiveRelaEN) => {
          if (b.classificationId == null) return -1;
          if (a.classificationId == null) return 1;
          return b.classificationId.localeCompare(a.classificationId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vRTTopicObjectiveRela]中不存在!(in ${vRTTopicObjectiveRela_ConstructorName}.${strThisFuncName})`;
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
export async function vRTTopicObjectiveRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvRTTopicObjectiveRelaEN.con_mId:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.mId === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_TopicId:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.topicId === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_TopicObjectiveId:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.topicObjectiveId === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_UpdDate:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.updDate === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_UpdUser:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.updUser === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_ObjectiveTypeName:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.objectiveTypeName === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_ObjectiveType:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.objectiveType === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_SourceId:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.sourceId === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_IsSubmit:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.isSubmit === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_ObjectiveName:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.objectiveName === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_ObjectiveContent:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.objectiveContent === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_Conclusion:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.conclusion === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_TopicContent:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.topicContent === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_TopicName:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.topicName === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_AppraiseCount:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.appraiseCount === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_CitationCount:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.citationCount === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_Score:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.score === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_StuScore:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.stuScore === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_TeaScore:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.teaScore === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_ObjDate:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.objDate === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_ObjUserId:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.objUserId === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_IdCurrEduCls:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_PdfContent:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.pdfContent === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_PdfPageNum:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.pdfPageNum === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_OkCount:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.okCount === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_VersionCount:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.versionCount === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_CreateDate:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.createDate === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_ShareId:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.shareId === value;
      };
    case clsvRTTopicObjectiveRelaEN.con_ClassificationId:
      return (obj: clsvRTTopicObjectiveRelaEN) => {
        return obj.classificationId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vRTTopicObjectiveRela]中不存在!(in ${vRTTopicObjectiveRela_ConstructorName}.${strThisFuncName})`;
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
export async function vRTTopicObjectiveRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvRTTopicObjectiveRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvRTTopicObjectiveRela = await vRTTopicObjectiveRela_GetObjLstCache();
  if (arrvRTTopicObjectiveRela == null) return [];
  let arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvRTTopicObjectiveRelaSel.length == 0) return [];
  return arrvRTTopicObjectiveRelaSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vRTTopicObjectiveRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vRTTopicObjectiveRela_Controller, strAction);

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
        vRTTopicObjectiveRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vRTTopicObjectiveRela_Controller, strAction);

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
        vRTTopicObjectiveRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvRTTopicObjectiveRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vRTTopicObjectiveRela_Controller, strAction);

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
      const objvRTTopicObjectiveRela = vRTTopicObjectiveRela_GetObjFromJsonObj(returnObj);
      return objvRTTopicObjectiveRela;
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
        vRTTopicObjectiveRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvRTTopicObjectiveRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsvRTTopicObjectiveRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTTopicObjectiveRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvRTTopicObjectiveRelaExObjLstCache: Array<clsvRTTopicObjectiveRelaEN> =
      CacheHelper.Get(strKey);
    const arrvRTTopicObjectiveRelaObjLstT = vRTTopicObjectiveRela_GetObjLstByJSONObjLst(
      arrvRTTopicObjectiveRelaExObjLstCache,
    );
    return arrvRTTopicObjectiveRelaObjLstT;
  }
  try {
    const arrvRTTopicObjectiveRelaExObjLst = await vRTTopicObjectiveRela_GetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrvRTTopicObjectiveRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTTopicObjectiveRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTTopicObjectiveRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvRTTopicObjectiveRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsvRTTopicObjectiveRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTTopicObjectiveRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvRTTopicObjectiveRelaExObjLstCache: Array<clsvRTTopicObjectiveRelaEN> =
      JSON.parse(strTempObjLst);
    const arrvRTTopicObjectiveRelaObjLstT = vRTTopicObjectiveRela_GetObjLstByJSONObjLst(
      arrvRTTopicObjectiveRelaExObjLstCache,
    );
    return arrvRTTopicObjectiveRelaObjLstT;
  }
  try {
    const arrvRTTopicObjectiveRelaExObjLst = await vRTTopicObjectiveRela_GetObjLstAsync(
      strWhereCond,
    );
    localStorage.setItem(strKey, JSON.stringify(arrvRTTopicObjectiveRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTTopicObjectiveRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTTopicObjectiveRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvRTTopicObjectiveRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvRTTopicObjectiveRelaObjLstCache: Array<clsvRTTopicObjectiveRelaEN> =
      JSON.parse(strTempObjLst);
    return arrvRTTopicObjectiveRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vRTTopicObjectiveRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvRTTopicObjectiveRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vRTTopicObjectiveRela_Controller, strAction);

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
          vRTTopicObjectiveRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTTopicObjectiveRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTTopicObjectiveRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvRTTopicObjectiveRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsvRTTopicObjectiveRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTTopicObjectiveRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvRTTopicObjectiveRelaExObjLstCache: Array<clsvRTTopicObjectiveRelaEN> =
      JSON.parse(strTempObjLst);
    const arrvRTTopicObjectiveRelaObjLstT = vRTTopicObjectiveRela_GetObjLstByJSONObjLst(
      arrvRTTopicObjectiveRelaExObjLstCache,
    );
    return arrvRTTopicObjectiveRelaObjLstT;
  }
  try {
    const arrvRTTopicObjectiveRelaExObjLst = await vRTTopicObjectiveRela_GetObjLstAsync(
      strWhereCond,
    );
    sessionStorage.setItem(strKey, JSON.stringify(arrvRTTopicObjectiveRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTTopicObjectiveRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTTopicObjectiveRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvRTTopicObjectiveRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvRTTopicObjectiveRelaObjLstCache: Array<clsvRTTopicObjectiveRelaEN> =
      JSON.parse(strTempObjLst);
    return arrvRTTopicObjectiveRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vRTTopicObjectiveRela_GetObjLstCache(): Promise<
  Array<clsvRTTopicObjectiveRelaEN>
> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvRTTopicObjectiveRelaObjLstCache;
  switch (clsvRTTopicObjectiveRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrvRTTopicObjectiveRelaObjLstCache = await vRTTopicObjectiveRela_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvRTTopicObjectiveRelaObjLstCache = await vRTTopicObjectiveRela_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvRTTopicObjectiveRelaObjLstCache = await vRTTopicObjectiveRela_GetObjLstClientCache();
      break;
    default:
      arrvRTTopicObjectiveRelaObjLstCache = await vRTTopicObjectiveRela_GetObjLstClientCache();
      break;
  }
  return arrvRTTopicObjectiveRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vRTTopicObjectiveRela_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvRTTopicObjectiveRelaObjLstCache;
  switch (clsvRTTopicObjectiveRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrvRTTopicObjectiveRelaObjLstCache =
        await vRTTopicObjectiveRela_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvRTTopicObjectiveRelaObjLstCache =
        await vRTTopicObjectiveRela_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvRTTopicObjectiveRelaObjLstCache = null;
      break;
    default:
      arrvRTTopicObjectiveRelaObjLstCache = null;
      break;
  }
  return arrvRTTopicObjectiveRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vRTTopicObjectiveRela_GetSubObjLstCache(
  objvRTTopicObjectiveRelaCond: clsvRTTopicObjectiveRelaEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvRTTopicObjectiveRelaObjLstCache = await vRTTopicObjectiveRela_GetObjLstCache();
  let arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaObjLstCache;
  if (
    objvRTTopicObjectiveRelaCond.sfFldComparisonOp == null ||
    objvRTTopicObjectiveRelaCond.sfFldComparisonOp == ''
  )
    return arrvRTTopicObjectiveRelaSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTTopicObjectiveRelaCond.sfFldComparisonOp,
  );
  //console.log("clsvRTTopicObjectiveRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTTopicObjectiveRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTTopicObjectiveRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvRTTopicObjectiveRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvRTTopicObjectiveRelaCond),
      vRTTopicObjectiveRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvRTTopicObjectiveRelaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function vRTTopicObjectiveRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsvRTTopicObjectiveRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(vRTTopicObjectiveRela_Controller, strAction);

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
          vRTTopicObjectiveRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTTopicObjectiveRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTTopicObjectiveRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrvRTTopicObjectiveRelaObjLstCache = await vRTTopicObjectiveRela_GetObjLstCache();
    const arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrvRTTopicObjectiveRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvRTTopicObjectiveRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vRTTopicObjectiveRela_Controller, strAction);

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
          vRTTopicObjectiveRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTTopicObjectiveRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTTopicObjectiveRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvRTTopicObjectiveRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vRTTopicObjectiveRela_Controller, strAction);

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
          vRTTopicObjectiveRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTTopicObjectiveRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTTopicObjectiveRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvRTTopicObjectiveRelaEN>();
  const arrvRTTopicObjectiveRelaObjLstCache = await vRTTopicObjectiveRela_GetObjLstCache();
  if (arrvRTTopicObjectiveRelaObjLstCache.length == 0) return arrvRTTopicObjectiveRelaObjLstCache;
  let arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvRTTopicObjectiveRelaCond = new clsvRTTopicObjectiveRelaEN();
  ObjectAssign(objvRTTopicObjectiveRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvRTTopicObjectiveRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTTopicObjectiveRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvRTTopicObjectiveRelaSel.length == 0) return arrvRTTopicObjectiveRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.sort(
        vRTTopicObjectiveRela_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.sort(objPagerPara.sortFun);
    }
    arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.slice(intStart, intEnd);
    return arrvRTTopicObjectiveRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vRTTopicObjectiveRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvRTTopicObjectiveRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vRTTopicObjectiveRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvRTTopicObjectiveRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvRTTopicObjectiveRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vRTTopicObjectiveRela_Controller, strAction);

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
          vRTTopicObjectiveRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTTopicObjectiveRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTTopicObjectiveRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_IsExistRecordCache(
  objvRTTopicObjectiveRelaCond: clsvRTTopicObjectiveRelaEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvRTTopicObjectiveRelaObjLstCache = await vRTTopicObjectiveRela_GetObjLstCache();
  if (arrvRTTopicObjectiveRelaObjLstCache == null) return false;
  let arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaObjLstCache;
  if (
    objvRTTopicObjectiveRelaCond.sfFldComparisonOp == null ||
    objvRTTopicObjectiveRelaCond.sfFldComparisonOp == ''
  )
    return arrvRTTopicObjectiveRelaSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTTopicObjectiveRelaCond.sfFldComparisonOp,
  );
  //console.log("clsvRTTopicObjectiveRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTTopicObjectiveRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTTopicObjectiveRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvRTTopicObjectiveRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvRTTopicObjectiveRelaCond),
      vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vRTTopicObjectiveRela_Controller, strAction);

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
        vRTTopicObjectiveRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrvRTTopicObjectiveRelaObjLstCache = await vRTTopicObjectiveRela_GetObjLstCache();
  if (arrvRTTopicObjectiveRelaObjLstCache == null) return false;
  try {
    const arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    if (arrvRTTopicObjectiveRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vRTTopicObjectiveRela_Controller, strAction);

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
        vRTTopicObjectiveRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTTopicObjectiveRela_ConstructorName,
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
export async function vRTTopicObjectiveRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vRTTopicObjectiveRela_Controller, strAction);

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
        vRTTopicObjectiveRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTTopicObjectiveRela_ConstructorName,
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
 * @param objvRTTopicObjectiveRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function vRTTopicObjectiveRela_GetRecCountByCondCache(
  objvRTTopicObjectiveRelaCond: clsvRTTopicObjectiveRelaEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvRTTopicObjectiveRelaObjLstCache = await vRTTopicObjectiveRela_GetObjLstCache();
  if (arrvRTTopicObjectiveRelaObjLstCache == null) return 0;
  let arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaObjLstCache;
  if (
    objvRTTopicObjectiveRelaCond.sfFldComparisonOp == null ||
    objvRTTopicObjectiveRelaCond.sfFldComparisonOp == ''
  )
    return arrvRTTopicObjectiveRelaSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTTopicObjectiveRelaCond.sfFldComparisonOp,
  );
  //console.log("clsvRTTopicObjectiveRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTTopicObjectiveRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTTopicObjectiveRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTTopicObjectiveRelaSel = arrvRTTopicObjectiveRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvRTTopicObjectiveRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvRTTopicObjectiveRelaCond),
      vRTTopicObjectiveRela_ConstructorName,
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
export function vRTTopicObjectiveRela_GetWebApiUrl(
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vRTTopicObjectiveRela_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvRTTopicObjectiveRelaEN._CurrTabName;
    switch (clsvRTTopicObjectiveRelaEN.CacheModeId) {
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
export function vRTTopicObjectiveRela_GetJSONStrByObj(
  pobjvRTTopicObjectiveRelaEN: clsvRTTopicObjectiveRelaEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvRTTopicObjectiveRelaEN);
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
export function vRTTopicObjectiveRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvRTTopicObjectiveRelaEN> {
  let arrvRTTopicObjectiveRelaObjLst = new Array<clsvRTTopicObjectiveRelaEN>();
  if (strJSON === '') {
    return arrvRTTopicObjectiveRelaObjLst;
  }
  try {
    arrvRTTopicObjectiveRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvRTTopicObjectiveRelaObjLst;
  }
  return arrvRTTopicObjectiveRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvRTTopicObjectiveRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vRTTopicObjectiveRela_GetObjLstByJSONObjLst(
  arrvRTTopicObjectiveRelaObjLstS: Array<clsvRTTopicObjectiveRelaEN>,
): Array<clsvRTTopicObjectiveRelaEN> {
  const arrvRTTopicObjectiveRelaObjLst = new Array<clsvRTTopicObjectiveRelaEN>();
  for (const objInFor of arrvRTTopicObjectiveRelaObjLstS) {
    const obj1 = vRTTopicObjectiveRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvRTTopicObjectiveRelaObjLst.push(obj1);
  }
  return arrvRTTopicObjectiveRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vRTTopicObjectiveRela_GetObjByJSONStr(strJSON: string): clsvRTTopicObjectiveRelaEN {
  let pobjvRTTopicObjectiveRelaEN = new clsvRTTopicObjectiveRelaEN();
  if (strJSON === '') {
    return pobjvRTTopicObjectiveRelaEN;
  }
  try {
    pobjvRTTopicObjectiveRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvRTTopicObjectiveRelaEN;
  }
  return pobjvRTTopicObjectiveRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vRTTopicObjectiveRela_GetCombineCondition(
  objvRTTopicObjectiveRelaCond: clsvRTTopicObjectiveRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTTopicObjectiveRelaEN.con_mId,
      objvRTTopicObjectiveRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_TopicId,
      objvRTTopicObjectiveRelaCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_TopicObjectiveId,
    ) == true
  ) {
    const strComparisonOpTopicObjectiveId: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[
        clsvRTTopicObjectiveRelaEN.con_TopicObjectiveId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_TopicObjectiveId,
      objvRTTopicObjectiveRelaCond.topicObjectiveId,
      strComparisonOpTopicObjectiveId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_UpdDate,
      objvRTTopicObjectiveRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_UpdUser,
      objvRTTopicObjectiveRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_ObjectiveTypeName,
    ) == true
  ) {
    const strComparisonOpObjectiveTypeName: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[
        clsvRTTopicObjectiveRelaEN.con_ObjectiveTypeName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_ObjectiveTypeName,
      objvRTTopicObjectiveRelaCond.objectiveTypeName,
      strComparisonOpObjectiveTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_ObjectiveType,
    ) == true
  ) {
    const strComparisonOpObjectiveType: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_ObjectiveType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_ObjectiveType,
      objvRTTopicObjectiveRelaCond.objectiveType,
      strComparisonOpObjectiveType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_SourceId,
    ) == true
  ) {
    const strComparisonOpSourceId: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_SourceId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_SourceId,
      objvRTTopicObjectiveRelaCond.sourceId,
      strComparisonOpSourceId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_IsSubmit,
    ) == true
  ) {
    if (objvRTTopicObjectiveRelaCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvRTTopicObjectiveRelaEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvRTTopicObjectiveRelaEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_ObjectiveName,
    ) == true
  ) {
    const strComparisonOpObjectiveName: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_ObjectiveName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_ObjectiveName,
      objvRTTopicObjectiveRelaCond.objectiveName,
      strComparisonOpObjectiveName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_TopicName,
    ) == true
  ) {
    const strComparisonOpTopicName: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_TopicName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_TopicName,
      objvRTTopicObjectiveRelaCond.topicName,
      strComparisonOpTopicName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_AppraiseCount,
    ) == true
  ) {
    const strComparisonOpAppraiseCount: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_AppraiseCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTTopicObjectiveRelaEN.con_AppraiseCount,
      objvRTTopicObjectiveRelaCond.appraiseCount,
      strComparisonOpAppraiseCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_CitationCount,
    ) == true
  ) {
    const strComparisonOpCitationCount: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_CitationCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTTopicObjectiveRelaEN.con_CitationCount,
      objvRTTopicObjectiveRelaCond.citationCount,
      strComparisonOpCitationCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTTopicObjectiveRelaEN.con_Score,
      objvRTTopicObjectiveRelaCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTTopicObjectiveRelaEN.con_StuScore,
      objvRTTopicObjectiveRelaCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTTopicObjectiveRelaEN.con_TeaScore,
      objvRTTopicObjectiveRelaCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_ObjDate,
    ) == true
  ) {
    const strComparisonOpObjDate: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_ObjDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_ObjDate,
      objvRTTopicObjectiveRelaCond.objDate,
      strComparisonOpObjDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_ObjUserId,
    ) == true
  ) {
    const strComparisonOpObjUserId: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_ObjUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_ObjUserId,
      objvRTTopicObjectiveRelaCond.objUserId,
      strComparisonOpObjUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_IdCurrEduCls,
      objvRTTopicObjectiveRelaCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_PdfContent,
    ) == true
  ) {
    const strComparisonOpPdfContent: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_PdfContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_PdfContent,
      objvRTTopicObjectiveRelaCond.pdfContent,
      strComparisonOpPdfContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_PdfPageNum,
    ) == true
  ) {
    const strComparisonOpPdfPageNum: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_PdfPageNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTTopicObjectiveRelaEN.con_PdfPageNum,
      objvRTTopicObjectiveRelaCond.pdfPageNum,
      strComparisonOpPdfPageNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_OkCount,
    ) == true
  ) {
    const strComparisonOpOkCount: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_OkCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTTopicObjectiveRelaEN.con_OkCount,
      objvRTTopicObjectiveRelaCond.okCount,
      strComparisonOpOkCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_VersionCount,
    ) == true
  ) {
    const strComparisonOpVersionCount: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_VersionCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTTopicObjectiveRelaEN.con_VersionCount,
      objvRTTopicObjectiveRelaCond.versionCount,
      strComparisonOpVersionCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_CreateDate,
    ) == true
  ) {
    const strComparisonOpCreateDate: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_CreateDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_CreateDate,
      objvRTTopicObjectiveRelaCond.createDate,
      strComparisonOpCreateDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_ShareId,
    ) == true
  ) {
    const strComparisonOpShareId: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[clsvRTTopicObjectiveRelaEN.con_ShareId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_ShareId,
      objvRTTopicObjectiveRelaCond.shareId,
      strComparisonOpShareId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp,
      clsvRTTopicObjectiveRelaEN.con_ClassificationId,
    ) == true
  ) {
    const strComparisonOpClassificationId: string =
      objvRTTopicObjectiveRelaCond.dicFldComparisonOp[
        clsvRTTopicObjectiveRelaEN.con_ClassificationId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTTopicObjectiveRelaEN.con_ClassificationId,
      objvRTTopicObjectiveRelaCond.classificationId,
      strComparisonOpClassificationId,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvRTTopicObjectiveRelaENS:源对象
 * @param objvRTTopicObjectiveRelaENT:目标对象
 */
export function vRTTopicObjectiveRela_CopyObjTo(
  objvRTTopicObjectiveRelaENS: clsvRTTopicObjectiveRelaEN,
  objvRTTopicObjectiveRelaENT: clsvRTTopicObjectiveRelaEN,
): void {
  objvRTTopicObjectiveRelaENT.mId = objvRTTopicObjectiveRelaENS.mId; //mId
  objvRTTopicObjectiveRelaENT.topicId = objvRTTopicObjectiveRelaENS.topicId; //主题Id
  objvRTTopicObjectiveRelaENT.topicObjectiveId = objvRTTopicObjectiveRelaENS.topicObjectiveId; //客观Id
  objvRTTopicObjectiveRelaENT.updDate = objvRTTopicObjectiveRelaENS.updDate; //修改日期
  objvRTTopicObjectiveRelaENT.updUser = objvRTTopicObjectiveRelaENS.updUser; //修改人
  objvRTTopicObjectiveRelaENT.objectiveTypeName = objvRTTopicObjectiveRelaENS.objectiveTypeName; //ObjectiveTypeName
  objvRTTopicObjectiveRelaENT.objectiveType = objvRTTopicObjectiveRelaENS.objectiveType; //客观类型
  objvRTTopicObjectiveRelaENT.sourceId = objvRTTopicObjectiveRelaENS.sourceId; //来源Id
  objvRTTopicObjectiveRelaENT.isSubmit = objvRTTopicObjectiveRelaENS.isSubmit; //是否提交
  objvRTTopicObjectiveRelaENT.objectiveName = objvRTTopicObjectiveRelaENS.objectiveName; //客观名称
  objvRTTopicObjectiveRelaENT.objectiveContent = objvRTTopicObjectiveRelaENS.objectiveContent; //客观内容
  objvRTTopicObjectiveRelaENT.conclusion = objvRTTopicObjectiveRelaENS.conclusion; //结论
  objvRTTopicObjectiveRelaENT.topicContent = objvRTTopicObjectiveRelaENS.topicContent; //主题内容
  objvRTTopicObjectiveRelaENT.topicName = objvRTTopicObjectiveRelaENS.topicName; //栏目主题
  objvRTTopicObjectiveRelaENT.appraiseCount = objvRTTopicObjectiveRelaENS.appraiseCount; //评论数
  objvRTTopicObjectiveRelaENT.citationCount = objvRTTopicObjectiveRelaENS.citationCount; //引用统计
  objvRTTopicObjectiveRelaENT.score = objvRTTopicObjectiveRelaENS.score; //评分
  objvRTTopicObjectiveRelaENT.stuScore = objvRTTopicObjectiveRelaENS.stuScore; //学生平均分
  objvRTTopicObjectiveRelaENT.teaScore = objvRTTopicObjectiveRelaENS.teaScore; //教师评分
  objvRTTopicObjectiveRelaENT.objDate = objvRTTopicObjectiveRelaENS.objDate; //ObjDate
  objvRTTopicObjectiveRelaENT.objUserId = objvRTTopicObjectiveRelaENS.objUserId; //ObjUserId
  objvRTTopicObjectiveRelaENT.idCurrEduCls = objvRTTopicObjectiveRelaENS.idCurrEduCls; //教学班流水号
  objvRTTopicObjectiveRelaENT.pdfContent = objvRTTopicObjectiveRelaENS.pdfContent; //Pdf内容
  objvRTTopicObjectiveRelaENT.pdfPageNum = objvRTTopicObjectiveRelaENS.pdfPageNum; //Pdf页码
  objvRTTopicObjectiveRelaENT.okCount = objvRTTopicObjectiveRelaENS.okCount; //点赞统计
  objvRTTopicObjectiveRelaENT.versionCount = objvRTTopicObjectiveRelaENS.versionCount; //版本统计
  objvRTTopicObjectiveRelaENT.createDate = objvRTTopicObjectiveRelaENS.createDate; //建立日期
  objvRTTopicObjectiveRelaENT.shareId = objvRTTopicObjectiveRelaENS.shareId; //分享Id
  objvRTTopicObjectiveRelaENT.classificationId = objvRTTopicObjectiveRelaENS.classificationId; //分类Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvRTTopicObjectiveRelaENS:源对象
 * @param objvRTTopicObjectiveRelaENT:目标对象
 */
export function vRTTopicObjectiveRela_GetObjFromJsonObj(
  objvRTTopicObjectiveRelaENS: clsvRTTopicObjectiveRelaEN,
): clsvRTTopicObjectiveRelaEN {
  const objvRTTopicObjectiveRelaENT: clsvRTTopicObjectiveRelaEN = new clsvRTTopicObjectiveRelaEN();
  ObjectAssign(objvRTTopicObjectiveRelaENT, objvRTTopicObjectiveRelaENS);
  return objvRTTopicObjectiveRelaENT;
}
