/**
 * 类名:clsgs_PaperReportWApi
 * 表名:gs_PaperReport(01120772)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:43
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
 * 论文汇报表(gs_PaperReport)
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
import { clsgs_PaperReportEN } from '@/ts/L0Entity/GradEduTopic/clsgs_PaperReportEN';
import { vgs_PaperReport_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduTopic/clsvgs_PaperReportWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gs_PaperReport_Controller = 'gs_PaperReportApi';
export const gs_PaperReport_ConstructorName = 'gs_PaperReport';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strReportId:关键字
 * @returns 对象
 **/
export async function gs_PaperReport_GetObjByReportIdAsync(
  strReportId: string,
): Promise<clsgs_PaperReportEN | null> {
  const strThisFuncName = 'GetObjByReportIdAsync';

  if (IsNullOrEmpty(strReportId) == true) {
    const strMsg = Format(
      '参数:[strReportId]不能为空!(In clsgs_PaperReportWApi.GetObjByReportIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strReportId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strReportId]的长度:[{0}]不正确!(clsgs_PaperReportWApi.GetObjByReportIdAsync)',
      strReportId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByReportId';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strReportId,
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
      const objgs_PaperReport = gs_PaperReport_GetObjFromJsonObj(returnObj);
      return objgs_PaperReport;
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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
 * @param strReportId:所给的关键字
 * @returns 对象
 */
export async function gs_PaperReport_GetObjByReportIdCache(
  strReportId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByReportIdCache';

  if (IsNullOrEmpty(strReportId) == true) {
    const strMsg = Format(
      '参数:[strReportId]不能为空!(In clsgs_PaperReportWApi.GetObjByReportIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strReportId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strReportId]的长度:[{0}]不正确!(clsgs_PaperReportWApi.GetObjByReportIdCache)',
      strReportId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_PaperReportObjLstCache = await gs_PaperReport_GetObjLstCache();
  try {
    const arrgs_PaperReportSel = arrgs_PaperReportObjLstCache.filter(
      (x) => x.reportId == strReportId,
    );
    let objgs_PaperReport: clsgs_PaperReportEN;
    if (arrgs_PaperReportSel.length > 0) {
      objgs_PaperReport = arrgs_PaperReportSel[0];
      return objgs_PaperReport;
    } else {
      if (bolTryAsyncOnce == true) {
        const objgs_PaperReportConst = await gs_PaperReport_GetObjByReportIdAsync(strReportId);
        if (objgs_PaperReportConst != null) {
          gs_PaperReport_ReFreshThisCache();
          return objgs_PaperReportConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strReportId,
      gs_PaperReport_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strReportId:所给的关键字
 * @returns 对象
 */
export async function gs_PaperReport_GetObjByReportIdlocalStorage(strReportId: string) {
  const strThisFuncName = 'GetObjByReportIdlocalStorage';

  if (IsNullOrEmpty(strReportId) == true) {
    const strMsg = Format(
      '参数:[strReportId]不能为空!(In clsgs_PaperReportWApi.GetObjByReportIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strReportId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strReportId]的长度:[{0}]不正确!(clsgs_PaperReportWApi.GetObjByReportIdlocalStorage)',
      strReportId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsgs_PaperReportEN._CurrTabName, strReportId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objgs_PaperReportCache: clsgs_PaperReportEN = JSON.parse(strTempObj);
    return objgs_PaperReportCache;
  }
  try {
    const objgs_PaperReport = await gs_PaperReport_GetObjByReportIdAsync(strReportId);
    if (objgs_PaperReport != null) {
      localStorage.setItem(strKey, JSON.stringify(objgs_PaperReport));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objgs_PaperReport;
    }
    return objgs_PaperReport;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strReportId,
      gs_PaperReport_ConstructorName,
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
 * @param objgs_PaperReport:所给的对象
 * @returns 对象
 */
export async function gs_PaperReport_UpdateObjInLstCache(objgs_PaperReport: clsgs_PaperReportEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrgs_PaperReportObjLstCache = await gs_PaperReport_GetObjLstCache();
    const obj = arrgs_PaperReportObjLstCache.find(
      (x) =>
        x.topicId == objgs_PaperReport.topicId &&
        x.reportUser == objgs_PaperReport.reportUser &&
        x.reportDate == objgs_PaperReport.reportDate,
    );
    if (obj != null) {
      objgs_PaperReport.reportId = obj.reportId;
      ObjectAssign(obj, objgs_PaperReport);
    } else {
      arrgs_PaperReportObjLstCache.push(objgs_PaperReport);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gs_PaperReport_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
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
export async function gs_PaperReport_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsgs_PaperReportEN.con_ReportId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsgs_PaperReportEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsgs_PaperReportEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strReportId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objgs_PaperReport = await gs_PaperReport_GetObjByReportIdCache(strReportId);
  if (objgs_PaperReport == null) return '';
  if (objgs_PaperReport.GetFldValue(strOutFldName) == null) return '';
  return objgs_PaperReport.GetFldValue(strOutFldName).toString();
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
export function gs_PaperReport_SortFunDefa(a: clsgs_PaperReportEN, b: clsgs_PaperReportEN): number {
  return a.reportId.localeCompare(b.reportId);
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
export function gs_PaperReport_SortFunDefa2Fld(
  a: clsgs_PaperReportEN,
  b: clsgs_PaperReportEN,
): number {
  if (a.topicId == b.topicId) return a.paperId.localeCompare(b.paperId);
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
export function gs_PaperReport_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_PaperReportEN.con_ReportId:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return a.reportId.localeCompare(b.reportId);
        };
      case clsgs_PaperReportEN.con_TopicId:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsgs_PaperReportEN.con_PaperId:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (a.paperId == null) return -1;
          if (b.paperId == null) return 1;
          return a.paperId.localeCompare(b.paperId);
        };
      case clsgs_PaperReportEN.con_ReportContent:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (a.reportContent == null) return -1;
          if (b.reportContent == null) return 1;
          return a.reportContent.localeCompare(b.reportContent);
        };
      case clsgs_PaperReportEN.con_IsSubmit:
        return (a: clsgs_PaperReportEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsgs_PaperReportEN.con_ReportUser:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (a.reportUser == null) return -1;
          if (b.reportUser == null) return 1;
          return a.reportUser.localeCompare(b.reportUser);
        };
      case clsgs_PaperReportEN.con_ReportDate:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (a.reportDate == null) return -1;
          if (b.reportDate == null) return 1;
          return a.reportDate.localeCompare(b.reportDate);
        };
      case clsgs_PaperReportEN.con_VersionCount:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return a.versionCount - b.versionCount;
        };
      case clsgs_PaperReportEN.con_OkCount:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return a.okCount - b.okCount;
        };
      case clsgs_PaperReportEN.con_AppraiseCount:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return a.appraiseCount - b.appraiseCount;
        };
      case clsgs_PaperReportEN.con_Score:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return a.score - b.score;
        };
      case clsgs_PaperReportEN.con_StuScore:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return a.stuScore - b.stuScore;
        };
      case clsgs_PaperReportEN.con_TeaScore:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsgs_PaperReportEN.con_PDFUrl:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (a.pDFUrl == null) return -1;
          if (b.pDFUrl == null) return 1;
          return a.pDFUrl.localeCompare(b.pDFUrl);
        };
      case clsgs_PaperReportEN.con_PPTUrl:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (a.pPTUrl == null) return -1;
          if (b.pPTUrl == null) return 1;
          return a.pPTUrl.localeCompare(b.pPTUrl);
        };
      case clsgs_PaperReportEN.con_Month:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (a.month == null) return -1;
          if (b.month == null) return 1;
          return a.month.localeCompare(b.month);
        };
      case clsgs_PaperReportEN.con_Week:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return a.week - b.week;
        };
      case clsgs_PaperReportEN.con_Year:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (a.year == null) return -1;
          if (b.year == null) return 1;
          return a.year.localeCompare(b.year);
        };
      case clsgs_PaperReportEN.con_IdCurrEduCls:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsgs_PaperReportEN.con_UpdUser:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsgs_PaperReportEN.con_UpdDate:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsgs_PaperReportEN.con_Memo:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_PaperReport]中不存在!(in ${gs_PaperReport_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsgs_PaperReportEN.con_ReportId:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return b.reportId.localeCompare(a.reportId);
        };
      case clsgs_PaperReportEN.con_TopicId:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsgs_PaperReportEN.con_PaperId:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (b.paperId == null) return -1;
          if (a.paperId == null) return 1;
          return b.paperId.localeCompare(a.paperId);
        };
      case clsgs_PaperReportEN.con_ReportContent:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (b.reportContent == null) return -1;
          if (a.reportContent == null) return 1;
          return b.reportContent.localeCompare(a.reportContent);
        };
      case clsgs_PaperReportEN.con_IsSubmit:
        return (b: clsgs_PaperReportEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsgs_PaperReportEN.con_ReportUser:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (b.reportUser == null) return -1;
          if (a.reportUser == null) return 1;
          return b.reportUser.localeCompare(a.reportUser);
        };
      case clsgs_PaperReportEN.con_ReportDate:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (b.reportDate == null) return -1;
          if (a.reportDate == null) return 1;
          return b.reportDate.localeCompare(a.reportDate);
        };
      case clsgs_PaperReportEN.con_VersionCount:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return b.versionCount - a.versionCount;
        };
      case clsgs_PaperReportEN.con_OkCount:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return b.okCount - a.okCount;
        };
      case clsgs_PaperReportEN.con_AppraiseCount:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return b.appraiseCount - a.appraiseCount;
        };
      case clsgs_PaperReportEN.con_Score:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return b.score - a.score;
        };
      case clsgs_PaperReportEN.con_StuScore:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return b.stuScore - a.stuScore;
        };
      case clsgs_PaperReportEN.con_TeaScore:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsgs_PaperReportEN.con_PDFUrl:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (b.pDFUrl == null) return -1;
          if (a.pDFUrl == null) return 1;
          return b.pDFUrl.localeCompare(a.pDFUrl);
        };
      case clsgs_PaperReportEN.con_PPTUrl:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (b.pPTUrl == null) return -1;
          if (a.pPTUrl == null) return 1;
          return b.pPTUrl.localeCompare(a.pPTUrl);
        };
      case clsgs_PaperReportEN.con_Month:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (b.month == null) return -1;
          if (a.month == null) return 1;
          return b.month.localeCompare(a.month);
        };
      case clsgs_PaperReportEN.con_Week:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          return b.week - a.week;
        };
      case clsgs_PaperReportEN.con_Year:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (b.year == null) return -1;
          if (a.year == null) return 1;
          return b.year.localeCompare(a.year);
        };
      case clsgs_PaperReportEN.con_IdCurrEduCls:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsgs_PaperReportEN.con_UpdUser:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsgs_PaperReportEN.con_UpdDate:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsgs_PaperReportEN.con_Memo:
        return (a: clsgs_PaperReportEN, b: clsgs_PaperReportEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_PaperReport]中不存在!(in ${gs_PaperReport_ConstructorName}.${strThisFuncName})`;
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
export async function gs_PaperReport_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_PaperReportEN.con_ReportId:
      return (obj: clsgs_PaperReportEN) => {
        return obj.reportId === value;
      };
    case clsgs_PaperReportEN.con_TopicId:
      return (obj: clsgs_PaperReportEN) => {
        return obj.topicId === value;
      };
    case clsgs_PaperReportEN.con_PaperId:
      return (obj: clsgs_PaperReportEN) => {
        return obj.paperId === value;
      };
    case clsgs_PaperReportEN.con_ReportContent:
      return (obj: clsgs_PaperReportEN) => {
        return obj.reportContent === value;
      };
    case clsgs_PaperReportEN.con_IsSubmit:
      return (obj: clsgs_PaperReportEN) => {
        return obj.isSubmit === value;
      };
    case clsgs_PaperReportEN.con_ReportUser:
      return (obj: clsgs_PaperReportEN) => {
        return obj.reportUser === value;
      };
    case clsgs_PaperReportEN.con_ReportDate:
      return (obj: clsgs_PaperReportEN) => {
        return obj.reportDate === value;
      };
    case clsgs_PaperReportEN.con_VersionCount:
      return (obj: clsgs_PaperReportEN) => {
        return obj.versionCount === value;
      };
    case clsgs_PaperReportEN.con_OkCount:
      return (obj: clsgs_PaperReportEN) => {
        return obj.okCount === value;
      };
    case clsgs_PaperReportEN.con_AppraiseCount:
      return (obj: clsgs_PaperReportEN) => {
        return obj.appraiseCount === value;
      };
    case clsgs_PaperReportEN.con_Score:
      return (obj: clsgs_PaperReportEN) => {
        return obj.score === value;
      };
    case clsgs_PaperReportEN.con_StuScore:
      return (obj: clsgs_PaperReportEN) => {
        return obj.stuScore === value;
      };
    case clsgs_PaperReportEN.con_TeaScore:
      return (obj: clsgs_PaperReportEN) => {
        return obj.teaScore === value;
      };
    case clsgs_PaperReportEN.con_PDFUrl:
      return (obj: clsgs_PaperReportEN) => {
        return obj.pDFUrl === value;
      };
    case clsgs_PaperReportEN.con_PPTUrl:
      return (obj: clsgs_PaperReportEN) => {
        return obj.pPTUrl === value;
      };
    case clsgs_PaperReportEN.con_Month:
      return (obj: clsgs_PaperReportEN) => {
        return obj.month === value;
      };
    case clsgs_PaperReportEN.con_Week:
      return (obj: clsgs_PaperReportEN) => {
        return obj.week === value;
      };
    case clsgs_PaperReportEN.con_Year:
      return (obj: clsgs_PaperReportEN) => {
        return obj.year === value;
      };
    case clsgs_PaperReportEN.con_IdCurrEduCls:
      return (obj: clsgs_PaperReportEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsgs_PaperReportEN.con_UpdUser:
      return (obj: clsgs_PaperReportEN) => {
        return obj.updUser === value;
      };
    case clsgs_PaperReportEN.con_UpdDate:
      return (obj: clsgs_PaperReportEN) => {
        return obj.updDate === value;
      };
    case clsgs_PaperReportEN.con_Memo:
      return (obj: clsgs_PaperReportEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[gs_PaperReport]中不存在!(in ${gs_PaperReport_ConstructorName}.${strThisFuncName})`;
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
export async function gs_PaperReport_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsgs_PaperReportEN.con_ReportId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrgs_PaperReport = await gs_PaperReport_GetObjLstCache();
  if (arrgs_PaperReport == null) return [];
  let arrgs_PaperReportSel = arrgs_PaperReport;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrgs_PaperReportSel.length == 0) return [];
  return arrgs_PaperReportSel.map((x) => x.reportId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_PaperReport_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsgs_PaperReportEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

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
      const objgs_PaperReport = gs_PaperReport_GetObjFromJsonObj(returnObj);
      return objgs_PaperReport;
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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_PaperReportEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_PaperReportEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_PaperReportEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrgs_PaperReportExObjLstCache: Array<clsgs_PaperReportEN> = CacheHelper.Get(strKey);
    const arrgs_PaperReportObjLstT = gs_PaperReport_GetObjLstByJSONObjLst(
      arrgs_PaperReportExObjLstCache,
    );
    return arrgs_PaperReportObjLstT;
  }
  try {
    const arrgs_PaperReportExObjLst = await gs_PaperReport_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrgs_PaperReportExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_PaperReportExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_PaperReportExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_PaperReportEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_PaperReportEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_PaperReportEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_PaperReportExObjLstCache: Array<clsgs_PaperReportEN> = JSON.parse(strTempObjLst);
    const arrgs_PaperReportObjLstT = gs_PaperReport_GetObjLstByJSONObjLst(
      arrgs_PaperReportExObjLstCache,
    );
    return arrgs_PaperReportObjLstT;
  }
  try {
    const arrgs_PaperReportExObjLst = await gs_PaperReport_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrgs_PaperReportExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_PaperReportExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_PaperReportExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_PaperReportEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_PaperReportObjLstCache: Array<clsgs_PaperReportEN> = JSON.parse(strTempObjLst);
    return arrgs_PaperReportObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function gs_PaperReport_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_PaperReportEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

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
          gs_PaperReport_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperReport_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_PaperReportEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_PaperReportEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_PaperReportEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_PaperReportExObjLstCache: Array<clsgs_PaperReportEN> = JSON.parse(strTempObjLst);
    const arrgs_PaperReportObjLstT = gs_PaperReport_GetObjLstByJSONObjLst(
      arrgs_PaperReportExObjLstCache,
    );
    return arrgs_PaperReportObjLstT;
  }
  try {
    const arrgs_PaperReportExObjLst = await gs_PaperReport_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrgs_PaperReportExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_PaperReportExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_PaperReportExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_PaperReportEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_PaperReportObjLstCache: Array<clsgs_PaperReportEN> = JSON.parse(strTempObjLst);
    return arrgs_PaperReportObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_PaperReport_GetObjLstCache(): Promise<Array<clsgs_PaperReportEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrgs_PaperReportObjLstCache;
  switch (clsgs_PaperReportEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_PaperReportObjLstCache = await gs_PaperReport_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrgs_PaperReportObjLstCache = await gs_PaperReport_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrgs_PaperReportObjLstCache = await gs_PaperReport_GetObjLstClientCache();
      break;
    default:
      arrgs_PaperReportObjLstCache = await gs_PaperReport_GetObjLstClientCache();
      break;
  }
  return arrgs_PaperReportObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_PaperReport_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrgs_PaperReportObjLstCache;
  switch (clsgs_PaperReportEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_PaperReportObjLstCache = await gs_PaperReport_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrgs_PaperReportObjLstCache = await gs_PaperReport_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrgs_PaperReportObjLstCache = null;
      break;
    default:
      arrgs_PaperReportObjLstCache = null;
      break;
  }
  return arrgs_PaperReportObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrReportIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_PaperReport_GetSubObjLstCache(objgs_PaperReportCond: clsgs_PaperReportEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrgs_PaperReportObjLstCache = await gs_PaperReport_GetObjLstCache();
  let arrgs_PaperReportSel = arrgs_PaperReportObjLstCache;
  if (
    objgs_PaperReportCond.sfFldComparisonOp == null ||
    objgs_PaperReportCond.sfFldComparisonOp == ''
  )
    return arrgs_PaperReportSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_PaperReportCond.sfFldComparisonOp,
  );
  //console.log("clsgs_PaperReportWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_PaperReportCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_PaperReportSel = arrgs_PaperReportSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperReportCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_PaperReportSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_PaperReportCond),
      gs_PaperReport_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_PaperReportEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrReportId:关键字列表
 * @returns 对象列表
 **/
export async function gs_PaperReport_GetObjLstByReportIdLstAsync(
  arrReportId: Array<string>,
): Promise<Array<clsgs_PaperReportEN>> {
  const strThisFuncName = 'GetObjLstByReportIdLstAsync';
  const strAction = 'GetObjLstByReportIdLst';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrReportId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_PaperReport_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperReport_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
 * @param arrstrReportIdLst:关键字列表
 * @returns 对象列表
 */
export async function gs_PaperReport_GetObjLstByReportIdLstCache(arrReportIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByReportIdLstCache';
  try {
    const arrgs_PaperReportObjLstCache = await gs_PaperReport_GetObjLstCache();
    const arrgs_PaperReportSel = arrgs_PaperReportObjLstCache.filter(
      (x) => arrReportIdLst.indexOf(x.reportId) > -1,
    );
    return arrgs_PaperReportSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrReportIdLst.join(','),
      gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsgs_PaperReportEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

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
          gs_PaperReport_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperReport_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsgs_PaperReportEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

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
          gs_PaperReport_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperReport_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_PaperReportEN>();
  const arrgs_PaperReportObjLstCache = await gs_PaperReport_GetObjLstCache();
  if (arrgs_PaperReportObjLstCache.length == 0) return arrgs_PaperReportObjLstCache;
  let arrgs_PaperReportSel = arrgs_PaperReportObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_PaperReportCond = new clsgs_PaperReportEN();
  ObjectAssign(objgs_PaperReportCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_PaperReportWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_PaperReportSel = arrgs_PaperReportSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperReportCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_PaperReportSel.length == 0) return arrgs_PaperReportSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_PaperReportSel = arrgs_PaperReportSel.sort(
        gs_PaperReport_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_PaperReportSel = arrgs_PaperReportSel.sort(objPagerPara.sortFun);
    }
    arrgs_PaperReportSel = arrgs_PaperReportSel.slice(intStart, intEnd);
    return arrgs_PaperReportSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_PaperReport_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_PaperReportEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_PaperReport_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_PaperReportEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_PaperReportEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

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
          gs_PaperReport_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperReport_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
 * @param strReportId:关键字
 * @returns 获取删除的结果
 **/
export async function gs_PaperReport_DelRecordAsync(strReportId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strReportId);

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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
 * @param arrReportId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function gs_PaperReport_Delgs_PaperReportsAsync(
  arrReportId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delgs_PaperReportsAsync';
  const strAction = 'Delgs_PaperReports';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrReportId, config);
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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_Delgs_PaperReportsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delgs_PaperReportsByCondAsync';
  const strAction = 'Delgs_PaperReportsByCond';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
 * @param objgs_PaperReportEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_PaperReport_AddNewRecordAsync(
  objgs_PaperReportEN: clsgs_PaperReportEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objgs_PaperReportEN);
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperReportEN, config);
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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
 * @param objgs_PaperReportEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_PaperReport_AddNewRecordWithMaxIdAsync(
  objgs_PaperReportEN: clsgs_PaperReportEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperReportEN, config);
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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
 * @param objgs_PaperReportEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function gs_PaperReport_AddNewRecordWithReturnKeyAsync(
  objgs_PaperReportEN: clsgs_PaperReportEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperReportEN, config);
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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
 * @param objgs_PaperReportEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function gs_PaperReport_UpdateRecordAsync(
  objgs_PaperReportEN: clsgs_PaperReportEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objgs_PaperReportEN.sfUpdFldSetStr === undefined ||
    objgs_PaperReportEN.sfUpdFldSetStr === null ||
    objgs_PaperReportEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_PaperReportEN.reportId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperReportEN, config);
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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
 * @param objgs_PaperReportEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_PaperReport_UpdateWithConditionAsync(
  objgs_PaperReportEN: clsgs_PaperReportEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objgs_PaperReportEN.sfUpdFldSetStr === undefined ||
    objgs_PaperReportEN.sfUpdFldSetStr === null ||
    objgs_PaperReportEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_PaperReportEN.reportId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);
  objgs_PaperReportEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperReportEN, config);
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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
 * @param objstrReportIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_PaperReport_IsExistRecordCache(
  objgs_PaperReportCond: clsgs_PaperReportEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrgs_PaperReportObjLstCache = await gs_PaperReport_GetObjLstCache();
  if (arrgs_PaperReportObjLstCache == null) return false;
  let arrgs_PaperReportSel = arrgs_PaperReportObjLstCache;
  if (
    objgs_PaperReportCond.sfFldComparisonOp == null ||
    objgs_PaperReportCond.sfFldComparisonOp == ''
  )
    return arrgs_PaperReportSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_PaperReportCond.sfFldComparisonOp,
  );
  //console.log("clsgs_PaperReportWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_PaperReportCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperReportCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_PaperReportSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objgs_PaperReportCond),
      gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
 * @param strReportId:所给的关键字
 * @returns 对象
 */
export async function gs_PaperReport_IsExistCache(strReportId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrgs_PaperReportObjLstCache = await gs_PaperReport_GetObjLstCache();
  if (arrgs_PaperReportObjLstCache == null) return false;
  try {
    const arrgs_PaperReportSel = arrgs_PaperReportObjLstCache.filter(
      (x) => x.reportId == strReportId,
    );
    if (arrgs_PaperReportSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strReportId,
      gs_PaperReport_ConstructorName,
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
 * @param strReportId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function gs_PaperReport_IsExistAsync(strReportId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strReportId,
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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
 * @param objgs_PaperReportCond:条件对象
 * @returns 对象列表记录数
 */
export async function gs_PaperReport_GetRecCountByCondCache(
  objgs_PaperReportCond: clsgs_PaperReportEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrgs_PaperReportObjLstCache = await gs_PaperReport_GetObjLstCache();
  if (arrgs_PaperReportObjLstCache == null) return 0;
  let arrgs_PaperReportSel = arrgs_PaperReportObjLstCache;
  if (
    objgs_PaperReportCond.sfFldComparisonOp == null ||
    objgs_PaperReportCond.sfFldComparisonOp == ''
  )
    return arrgs_PaperReportSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_PaperReportCond.sfFldComparisonOp,
  );
  //console.log("clsgs_PaperReportWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_PaperReportCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_PaperReportSel = arrgs_PaperReportSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperReportCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperReportSel = arrgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_PaperReportSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_PaperReportCond),
      gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
export async function gs_PaperReport_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gs_PaperReport_Controller, strAction);

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
        gs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperReport_ConstructorName,
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
export function gs_PaperReport_GetWebApiUrl(strController: string, strAction: string): string {
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
export function gs_PaperReport_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsgs_PaperReportEN._CurrTabName;
  switch (clsgs_PaperReportEN.CacheModeId) {
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
  vgs_PaperReport_ReFreshThisCache();
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function gs_PaperReport_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsgs_PaperReportEN._CurrTabName;
    switch (clsgs_PaperReportEN.CacheModeId) {
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
export function gs_PaperReport_CheckPropertyNew(pobjgs_PaperReportEN: clsgs_PaperReportEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportId) == false &&
    GetStrLen(pobjgs_PaperReportEN.reportId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[汇报Id(reportId)]的长度不能超过10(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.reportId)(clsgs_PaperReportBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.topicId) == false &&
    GetStrLen(pobjgs_PaperReportEN.topicId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.topicId)(clsgs_PaperReportBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.paperId) == false &&
    GetStrLen(pobjgs_PaperReportEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.paperId)(clsgs_PaperReportBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportContent) == false &&
    GetStrLen(pobjgs_PaperReportEN.reportContent) > 5000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[汇报内容(reportContent)]的长度不能超过5000(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.reportContent)(clsgs_PaperReportBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportUser) == false &&
    GetStrLen(pobjgs_PaperReportEN.reportUser) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[汇报用户(reportUser)]的长度不能超过500(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.reportUser)(clsgs_PaperReportBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportDate) == false &&
    GetStrLen(pobjgs_PaperReportEN.reportDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[汇报日期(reportDate)]的长度不能超过20(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.reportDate)(clsgs_PaperReportBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.pDFUrl) == false &&
    GetStrLen(pobjgs_PaperReportEN.pDFUrl) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[PDFUrl(pDFUrl)]的长度不能超过500(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.pDFUrl)(clsgs_PaperReportBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.pPTUrl) == false &&
    GetStrLen(pobjgs_PaperReportEN.pPTUrl) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[PPTUrl(pPTUrl)]的长度不能超过500(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.pPTUrl)(clsgs_PaperReportBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.month) == false &&
    GetStrLen(pobjgs_PaperReportEN.month) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[月(month)]的长度不能超过2(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.month)(clsgs_PaperReportBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.year) == false &&
    GetStrLen(pobjgs_PaperReportEN.year) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[年(year)]的长度不能超过4(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.year)(clsgs_PaperReportBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.idCurrEduCls) == false &&
    GetStrLen(pobjgs_PaperReportEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.idCurrEduCls)(clsgs_PaperReportBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.updUser) == false &&
    GetStrLen(pobjgs_PaperReportEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.updUser)(clsgs_PaperReportBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.updDate) == false &&
    GetStrLen(pobjgs_PaperReportEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.updDate)(clsgs_PaperReportBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.memo) == false &&
    GetStrLen(pobjgs_PaperReportEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.memo)(clsgs_PaperReportBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportId) == false &&
    undefined !== pobjgs_PaperReportEN.reportId &&
    tzDataType.isString(pobjgs_PaperReportEN.reportId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[汇报Id(reportId)]的值:[$(pobjgs_PaperReportEN.reportId)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.topicId) == false &&
    undefined !== pobjgs_PaperReportEN.topicId &&
    tzDataType.isString(pobjgs_PaperReportEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题Id(topicId)]的值:[$(pobjgs_PaperReportEN.topicId)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.paperId) == false &&
    undefined !== pobjgs_PaperReportEN.paperId &&
    tzDataType.isString(pobjgs_PaperReportEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjgs_PaperReportEN.paperId)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportContent) == false &&
    undefined !== pobjgs_PaperReportEN.reportContent &&
    tzDataType.isString(pobjgs_PaperReportEN.reportContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[汇报内容(reportContent)]的值:[$(pobjgs_PaperReportEN.reportContent)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.isSubmit &&
    undefined !== pobjgs_PaperReportEN.isSubmit &&
    tzDataType.isBoolean(pobjgs_PaperReportEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjgs_PaperReportEN.isSubmit)], 非法,应该为布尔型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportUser) == false &&
    undefined !== pobjgs_PaperReportEN.reportUser &&
    tzDataType.isString(pobjgs_PaperReportEN.reportUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[汇报用户(reportUser)]的值:[$(pobjgs_PaperReportEN.reportUser)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportDate) == false &&
    undefined !== pobjgs_PaperReportEN.reportDate &&
    tzDataType.isString(pobjgs_PaperReportEN.reportDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[汇报日期(reportDate)]的值:[$(pobjgs_PaperReportEN.reportDate)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.versionCount &&
    undefined !== pobjgs_PaperReportEN.versionCount &&
    tzDataType.isNumber(pobjgs_PaperReportEN.versionCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[版本统计(versionCount)]的值:[$(pobjgs_PaperReportEN.versionCount)], 非法,应该为数值型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.okCount &&
    undefined !== pobjgs_PaperReportEN.okCount &&
    tzDataType.isNumber(pobjgs_PaperReportEN.okCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[点赞统计(okCount)]的值:[$(pobjgs_PaperReportEN.okCount)], 非法,应该为数值型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.appraiseCount &&
    undefined !== pobjgs_PaperReportEN.appraiseCount &&
    tzDataType.isNumber(pobjgs_PaperReportEN.appraiseCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评论数(appraiseCount)]的值:[$(pobjgs_PaperReportEN.appraiseCount)], 非法,应该为数值型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.score &&
    undefined !== pobjgs_PaperReportEN.score &&
    tzDataType.isNumber(pobjgs_PaperReportEN.score) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评分(score)]的值:[$(pobjgs_PaperReportEN.score)], 非法,应该为数值型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.stuScore &&
    undefined !== pobjgs_PaperReportEN.stuScore &&
    tzDataType.isNumber(pobjgs_PaperReportEN.stuScore) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学生平均分(stuScore)]的值:[$(pobjgs_PaperReportEN.stuScore)], 非法,应该为数值型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.teaScore &&
    undefined !== pobjgs_PaperReportEN.teaScore &&
    tzDataType.isNumber(pobjgs_PaperReportEN.teaScore) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教师评分(teaScore)]的值:[$(pobjgs_PaperReportEN.teaScore)], 非法,应该为数值型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.pDFUrl) == false &&
    undefined !== pobjgs_PaperReportEN.pDFUrl &&
    tzDataType.isString(pobjgs_PaperReportEN.pDFUrl) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[PDFUrl(pDFUrl)]的值:[$(pobjgs_PaperReportEN.pDFUrl)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.pPTUrl) == false &&
    undefined !== pobjgs_PaperReportEN.pPTUrl &&
    tzDataType.isString(pobjgs_PaperReportEN.pPTUrl) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[PPTUrl(pPTUrl)]的值:[$(pobjgs_PaperReportEN.pPTUrl)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.month) == false &&
    undefined !== pobjgs_PaperReportEN.month &&
    tzDataType.isString(pobjgs_PaperReportEN.month) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[月(month)]的值:[$(pobjgs_PaperReportEN.month)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.week &&
    undefined !== pobjgs_PaperReportEN.week &&
    tzDataType.isNumber(pobjgs_PaperReportEN.week) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[周(week)]的值:[$(pobjgs_PaperReportEN.week)], 非法,应该为数值型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.year) == false &&
    undefined !== pobjgs_PaperReportEN.year &&
    tzDataType.isString(pobjgs_PaperReportEN.year) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[年(year)]的值:[$(pobjgs_PaperReportEN.year)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.idCurrEduCls) == false &&
    undefined !== pobjgs_PaperReportEN.idCurrEduCls &&
    tzDataType.isString(pobjgs_PaperReportEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjgs_PaperReportEN.idCurrEduCls)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.updUser) == false &&
    undefined !== pobjgs_PaperReportEN.updUser &&
    tzDataType.isString(pobjgs_PaperReportEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_PaperReportEN.updUser)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.updDate) == false &&
    undefined !== pobjgs_PaperReportEN.updDate &&
    tzDataType.isString(pobjgs_PaperReportEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_PaperReportEN.updDate)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.memo) == false &&
    undefined !== pobjgs_PaperReportEN.memo &&
    tzDataType.isString(pobjgs_PaperReportEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_PaperReportEN.memo)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_PaperReport_CheckProperty4Update(pobjgs_PaperReportEN: clsgs_PaperReportEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportId) == false &&
    GetStrLen(pobjgs_PaperReportEN.reportId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[汇报Id(reportId)]的长度不能超过10(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.reportId)(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.topicId) == false &&
    GetStrLen(pobjgs_PaperReportEN.topicId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.topicId)(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.paperId) == false &&
    GetStrLen(pobjgs_PaperReportEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.paperId)(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportContent) == false &&
    GetStrLen(pobjgs_PaperReportEN.reportContent) > 5000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[汇报内容(reportContent)]的长度不能超过5000(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.reportContent)(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportUser) == false &&
    GetStrLen(pobjgs_PaperReportEN.reportUser) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[汇报用户(reportUser)]的长度不能超过500(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.reportUser)(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportDate) == false &&
    GetStrLen(pobjgs_PaperReportEN.reportDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[汇报日期(reportDate)]的长度不能超过20(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.reportDate)(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.pDFUrl) == false &&
    GetStrLen(pobjgs_PaperReportEN.pDFUrl) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[PDFUrl(pDFUrl)]的长度不能超过500(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.pDFUrl)(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.pPTUrl) == false &&
    GetStrLen(pobjgs_PaperReportEN.pPTUrl) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[PPTUrl(pPTUrl)]的长度不能超过500(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.pPTUrl)(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.month) == false &&
    GetStrLen(pobjgs_PaperReportEN.month) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[月(month)]的长度不能超过2(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.month)(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.year) == false &&
    GetStrLen(pobjgs_PaperReportEN.year) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[年(year)]的长度不能超过4(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.year)(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.idCurrEduCls) == false &&
    GetStrLen(pobjgs_PaperReportEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.idCurrEduCls)(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.updUser) == false &&
    GetStrLen(pobjgs_PaperReportEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.updUser)(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.updDate) == false &&
    GetStrLen(pobjgs_PaperReportEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.updDate)(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.memo) == false &&
    GetStrLen(pobjgs_PaperReportEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 论文汇报表(gs_PaperReport))!值:$(pobjgs_PaperReportEN.memo)(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportId) == false &&
    undefined !== pobjgs_PaperReportEN.reportId &&
    tzDataType.isString(pobjgs_PaperReportEN.reportId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[汇报Id(reportId)]的值:[$(pobjgs_PaperReportEN.reportId)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.topicId) == false &&
    undefined !== pobjgs_PaperReportEN.topicId &&
    tzDataType.isString(pobjgs_PaperReportEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题Id(topicId)]的值:[$(pobjgs_PaperReportEN.topicId)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.paperId) == false &&
    undefined !== pobjgs_PaperReportEN.paperId &&
    tzDataType.isString(pobjgs_PaperReportEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjgs_PaperReportEN.paperId)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportContent) == false &&
    undefined !== pobjgs_PaperReportEN.reportContent &&
    tzDataType.isString(pobjgs_PaperReportEN.reportContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[汇报内容(reportContent)]的值:[$(pobjgs_PaperReportEN.reportContent)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.isSubmit &&
    undefined !== pobjgs_PaperReportEN.isSubmit &&
    tzDataType.isBoolean(pobjgs_PaperReportEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjgs_PaperReportEN.isSubmit)], 非法,应该为布尔型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportUser) == false &&
    undefined !== pobjgs_PaperReportEN.reportUser &&
    tzDataType.isString(pobjgs_PaperReportEN.reportUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[汇报用户(reportUser)]的值:[$(pobjgs_PaperReportEN.reportUser)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.reportDate) == false &&
    undefined !== pobjgs_PaperReportEN.reportDate &&
    tzDataType.isString(pobjgs_PaperReportEN.reportDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[汇报日期(reportDate)]的值:[$(pobjgs_PaperReportEN.reportDate)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.versionCount &&
    undefined !== pobjgs_PaperReportEN.versionCount &&
    tzDataType.isNumber(pobjgs_PaperReportEN.versionCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[版本统计(versionCount)]的值:[$(pobjgs_PaperReportEN.versionCount)], 非法,应该为数值型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.okCount &&
    undefined !== pobjgs_PaperReportEN.okCount &&
    tzDataType.isNumber(pobjgs_PaperReportEN.okCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[点赞统计(okCount)]的值:[$(pobjgs_PaperReportEN.okCount)], 非法,应该为数值型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.appraiseCount &&
    undefined !== pobjgs_PaperReportEN.appraiseCount &&
    tzDataType.isNumber(pobjgs_PaperReportEN.appraiseCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评论数(appraiseCount)]的值:[$(pobjgs_PaperReportEN.appraiseCount)], 非法,应该为数值型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.score &&
    undefined !== pobjgs_PaperReportEN.score &&
    tzDataType.isNumber(pobjgs_PaperReportEN.score) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评分(score)]的值:[$(pobjgs_PaperReportEN.score)], 非法,应该为数值型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.stuScore &&
    undefined !== pobjgs_PaperReportEN.stuScore &&
    tzDataType.isNumber(pobjgs_PaperReportEN.stuScore) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学生平均分(stuScore)]的值:[$(pobjgs_PaperReportEN.stuScore)], 非法,应该为数值型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.teaScore &&
    undefined !== pobjgs_PaperReportEN.teaScore &&
    tzDataType.isNumber(pobjgs_PaperReportEN.teaScore) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教师评分(teaScore)]的值:[$(pobjgs_PaperReportEN.teaScore)], 非法,应该为数值型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.pDFUrl) == false &&
    undefined !== pobjgs_PaperReportEN.pDFUrl &&
    tzDataType.isString(pobjgs_PaperReportEN.pDFUrl) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[PDFUrl(pDFUrl)]的值:[$(pobjgs_PaperReportEN.pDFUrl)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.pPTUrl) == false &&
    undefined !== pobjgs_PaperReportEN.pPTUrl &&
    tzDataType.isString(pobjgs_PaperReportEN.pPTUrl) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[PPTUrl(pPTUrl)]的值:[$(pobjgs_PaperReportEN.pPTUrl)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.month) == false &&
    undefined !== pobjgs_PaperReportEN.month &&
    tzDataType.isString(pobjgs_PaperReportEN.month) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[月(month)]的值:[$(pobjgs_PaperReportEN.month)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_PaperReportEN.week &&
    undefined !== pobjgs_PaperReportEN.week &&
    tzDataType.isNumber(pobjgs_PaperReportEN.week) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[周(week)]的值:[$(pobjgs_PaperReportEN.week)], 非法,应该为数值型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.year) == false &&
    undefined !== pobjgs_PaperReportEN.year &&
    tzDataType.isString(pobjgs_PaperReportEN.year) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[年(year)]的值:[$(pobjgs_PaperReportEN.year)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.idCurrEduCls) == false &&
    undefined !== pobjgs_PaperReportEN.idCurrEduCls &&
    tzDataType.isString(pobjgs_PaperReportEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjgs_PaperReportEN.idCurrEduCls)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.updUser) == false &&
    undefined !== pobjgs_PaperReportEN.updUser &&
    tzDataType.isString(pobjgs_PaperReportEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_PaperReportEN.updUser)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.updDate) == false &&
    undefined !== pobjgs_PaperReportEN.updDate &&
    tzDataType.isString(pobjgs_PaperReportEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_PaperReportEN.updDate)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperReportEN.memo) == false &&
    undefined !== pobjgs_PaperReportEN.memo &&
    tzDataType.isString(pobjgs_PaperReportEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_PaperReportEN.memo)], 非法,应该为字符型(In 论文汇报表(gs_PaperReport))!(clsgs_PaperReportBL:CheckProperty4Update)',
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
export function gs_PaperReport_GetJSONStrByObj(pobjgs_PaperReportEN: clsgs_PaperReportEN): string {
  pobjgs_PaperReportEN.sfUpdFldSetStr = pobjgs_PaperReportEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjgs_PaperReportEN);
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
export function gs_PaperReport_GetObjLstByJSONStr(strJSON: string): Array<clsgs_PaperReportEN> {
  let arrgs_PaperReportObjLst = new Array<clsgs_PaperReportEN>();
  if (strJSON === '') {
    return arrgs_PaperReportObjLst;
  }
  try {
    arrgs_PaperReportObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrgs_PaperReportObjLst;
  }
  return arrgs_PaperReportObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_PaperReportObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function gs_PaperReport_GetObjLstByJSONObjLst(
  arrgs_PaperReportObjLstS: Array<clsgs_PaperReportEN>,
): Array<clsgs_PaperReportEN> {
  const arrgs_PaperReportObjLst = new Array<clsgs_PaperReportEN>();
  for (const objInFor of arrgs_PaperReportObjLstS) {
    const obj1 = gs_PaperReport_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrgs_PaperReportObjLst.push(obj1);
  }
  return arrgs_PaperReportObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_PaperReport_GetObjByJSONStr(strJSON: string): clsgs_PaperReportEN {
  let pobjgs_PaperReportEN = new clsgs_PaperReportEN();
  if (strJSON === '') {
    return pobjgs_PaperReportEN;
  }
  try {
    pobjgs_PaperReportEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjgs_PaperReportEN;
  }
  return pobjgs_PaperReportEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function gs_PaperReport_GetCombineCondition(
  objgs_PaperReportCond: clsgs_PaperReportEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_ReportId,
    ) == true
  ) {
    const strComparisonOpReportId: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_ReportId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperReportEN.con_ReportId,
      objgs_PaperReportCond.reportId,
      strComparisonOpReportId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperReportEN.con_TopicId,
      objgs_PaperReportCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperReportEN.con_PaperId,
      objgs_PaperReportCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_ReportContent,
    ) == true
  ) {
    const strComparisonOpReportContent: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_ReportContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperReportEN.con_ReportContent,
      objgs_PaperReportCond.reportContent,
      strComparisonOpReportContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_IsSubmit,
    ) == true
  ) {
    if (objgs_PaperReportCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsgs_PaperReportEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsgs_PaperReportEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_ReportUser,
    ) == true
  ) {
    const strComparisonOpReportUser: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_ReportUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperReportEN.con_ReportUser,
      objgs_PaperReportCond.reportUser,
      strComparisonOpReportUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_ReportDate,
    ) == true
  ) {
    const strComparisonOpReportDate: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_ReportDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperReportEN.con_ReportDate,
      objgs_PaperReportCond.reportDate,
      strComparisonOpReportDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_VersionCount,
    ) == true
  ) {
    const strComparisonOpVersionCount: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_VersionCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_PaperReportEN.con_VersionCount,
      objgs_PaperReportCond.versionCount,
      strComparisonOpVersionCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_OkCount,
    ) == true
  ) {
    const strComparisonOpOkCount: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_OkCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_PaperReportEN.con_OkCount,
      objgs_PaperReportCond.okCount,
      strComparisonOpOkCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_AppraiseCount,
    ) == true
  ) {
    const strComparisonOpAppraiseCount: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_AppraiseCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_PaperReportEN.con_AppraiseCount,
      objgs_PaperReportCond.appraiseCount,
      strComparisonOpAppraiseCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_PaperReportEN.con_Score,
      objgs_PaperReportCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_PaperReportEN.con_StuScore,
      objgs_PaperReportCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_PaperReportEN.con_TeaScore,
      objgs_PaperReportCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_PDFUrl,
    ) == true
  ) {
    const strComparisonOpPDFUrl: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_PDFUrl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperReportEN.con_PDFUrl,
      objgs_PaperReportCond.pDFUrl,
      strComparisonOpPDFUrl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_PPTUrl,
    ) == true
  ) {
    const strComparisonOpPPTUrl: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_PPTUrl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperReportEN.con_PPTUrl,
      objgs_PaperReportCond.pPTUrl,
      strComparisonOpPPTUrl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_Month,
    ) == true
  ) {
    const strComparisonOpMonth: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_Month];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperReportEN.con_Month,
      objgs_PaperReportCond.month,
      strComparisonOpMonth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_Week,
    ) == true
  ) {
    const strComparisonOpWeek: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_Week];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_PaperReportEN.con_Week,
      objgs_PaperReportCond.week,
      strComparisonOpWeek,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_Year,
    ) == true
  ) {
    const strComparisonOpYear: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_Year];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperReportEN.con_Year,
      objgs_PaperReportCond.year,
      strComparisonOpYear,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperReportEN.con_IdCurrEduCls,
      objgs_PaperReportCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperReportEN.con_UpdUser,
      objgs_PaperReportCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperReportEN.con_UpdDate,
      objgs_PaperReportCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperReportCond.dicFldComparisonOp,
      clsgs_PaperReportEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objgs_PaperReportCond.dicFldComparisonOp[clsgs_PaperReportEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperReportEN.con_Memo,
      objgs_PaperReportCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_PaperReport(论文汇报表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @param strReportUser: 汇报用户(要求唯一的字段)
 * @param strReportDate: 汇报日期(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_PaperReport_GetUniCondStr(objgs_PaperReportEN: clsgs_PaperReportEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TopicId = '{0}'", objgs_PaperReportEN.topicId);
  strWhereCond += Format(" and ReportUser = '{0}'", objgs_PaperReportEN.reportUser);
  strWhereCond += Format(" and ReportDate = '{0}'", objgs_PaperReportEN.reportDate);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_PaperReport(论文汇报表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @param strReportUser: 汇报用户(要求唯一的字段)
 * @param strReportDate: 汇报日期(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_PaperReport_GetUniCondStr4Update(
  objgs_PaperReportEN: clsgs_PaperReportEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ReportId <> '{0}'", objgs_PaperReportEN.reportId);
  strWhereCond += Format(" and TopicId = '{0}'", objgs_PaperReportEN.topicId);
  strWhereCond += Format(" and ReportUser = '{0}'", objgs_PaperReportEN.reportUser);
  strWhereCond += Format(" and ReportDate = '{0}'", objgs_PaperReportEN.reportDate);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_PaperReportENS:源对象
 * @param objgs_PaperReportENT:目标对象
 */
export function gs_PaperReport_CopyObjTo(
  objgs_PaperReportENS: clsgs_PaperReportEN,
  objgs_PaperReportENT: clsgs_PaperReportEN,
): void {
  objgs_PaperReportENT.reportId = objgs_PaperReportENS.reportId; //汇报Id
  objgs_PaperReportENT.topicId = objgs_PaperReportENS.topicId; //主题Id
  objgs_PaperReportENT.paperId = objgs_PaperReportENS.paperId; //论文Id
  objgs_PaperReportENT.reportContent = objgs_PaperReportENS.reportContent; //汇报内容
  objgs_PaperReportENT.isSubmit = objgs_PaperReportENS.isSubmit; //是否提交
  objgs_PaperReportENT.reportUser = objgs_PaperReportENS.reportUser; //汇报用户
  objgs_PaperReportENT.reportDate = objgs_PaperReportENS.reportDate; //汇报日期
  objgs_PaperReportENT.versionCount = objgs_PaperReportENS.versionCount; //版本统计
  objgs_PaperReportENT.okCount = objgs_PaperReportENS.okCount; //点赞统计
  objgs_PaperReportENT.appraiseCount = objgs_PaperReportENS.appraiseCount; //评论数
  objgs_PaperReportENT.score = objgs_PaperReportENS.score; //评分
  objgs_PaperReportENT.stuScore = objgs_PaperReportENS.stuScore; //学生平均分
  objgs_PaperReportENT.teaScore = objgs_PaperReportENS.teaScore; //教师评分
  objgs_PaperReportENT.pDFUrl = objgs_PaperReportENS.pDFUrl; //PDFUrl
  objgs_PaperReportENT.pPTUrl = objgs_PaperReportENS.pPTUrl; //PPTUrl
  objgs_PaperReportENT.month = objgs_PaperReportENS.month; //月
  objgs_PaperReportENT.week = objgs_PaperReportENS.week; //周
  objgs_PaperReportENT.year = objgs_PaperReportENS.year; //年
  objgs_PaperReportENT.idCurrEduCls = objgs_PaperReportENS.idCurrEduCls; //教学班流水号
  objgs_PaperReportENT.updUser = objgs_PaperReportENS.updUser; //修改人
  objgs_PaperReportENT.updDate = objgs_PaperReportENS.updDate; //修改日期
  objgs_PaperReportENT.memo = objgs_PaperReportENS.memo; //备注
  objgs_PaperReportENT.sfUpdFldSetStr = objgs_PaperReportENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_PaperReportENS:源对象
 * @param objgs_PaperReportENT:目标对象
 */
export function gs_PaperReport_GetObjFromJsonObj(
  objgs_PaperReportENS: clsgs_PaperReportEN,
): clsgs_PaperReportEN {
  const objgs_PaperReportENT: clsgs_PaperReportEN = new clsgs_PaperReportEN();
  ObjectAssign(objgs_PaperReportENT, objgs_PaperReportENS);
  return objgs_PaperReportENT;
}
