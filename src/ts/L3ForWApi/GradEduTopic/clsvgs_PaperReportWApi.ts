/**
 * 类名:clsvgs_PaperReportWApi
 * 表名:vgs_PaperReport(01120771)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:52
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
 * 论文汇报视图(vgs_PaperReport)
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
import { clsvgs_PaperReportEN } from '@/ts/L0Entity/GradEduTopic/clsvgs_PaperReportEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vgs_PaperReport_Controller = 'vgs_PaperReportApi';
export const vgs_PaperReport_ConstructorName = 'vgs_PaperReport';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strReportId:关键字
 * @returns 对象
 **/
export async function vgs_PaperReport_GetObjByReportIdAsync(
  strReportId: string,
): Promise<clsvgs_PaperReportEN | null> {
  const strThisFuncName = 'GetObjByReportIdAsync';

  if (IsNullOrEmpty(strReportId) == true) {
    const strMsg = Format(
      '参数:[strReportId]不能为空!(In clsvgs_PaperReportWApi.GetObjByReportIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strReportId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strReportId]的长度:[{0}]不正确!(clsvgs_PaperReportWApi.GetObjByReportIdAsync)',
      strReportId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByReportId';
  const strUrl = GetWebApiUrl(vgs_PaperReport_Controller, strAction);

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
      const objvgs_PaperReport = vgs_PaperReport_GetObjFromJsonObj(returnObj);
      return objvgs_PaperReport;
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
        vgs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_GetObjByReportIdCache(
  strReportId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByReportIdCache';

  if (IsNullOrEmpty(strReportId) == true) {
    const strMsg = Format(
      '参数:[strReportId]不能为空!(In clsvgs_PaperReportWApi.GetObjByReportIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strReportId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strReportId]的长度:[{0}]不正确!(clsvgs_PaperReportWApi.GetObjByReportIdCache)',
      strReportId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvgs_PaperReportObjLstCache = await vgs_PaperReport_GetObjLstCache();
  try {
    const arrvgs_PaperReportSel = arrvgs_PaperReportObjLstCache.filter(
      (x) => x.reportId == strReportId,
    );
    let objvgs_PaperReport: clsvgs_PaperReportEN;
    if (arrvgs_PaperReportSel.length > 0) {
      objvgs_PaperReport = arrvgs_PaperReportSel[0];
      return objvgs_PaperReport;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvgs_PaperReportConst = await vgs_PaperReport_GetObjByReportIdAsync(strReportId);
        if (objvgs_PaperReportConst != null) {
          vgs_PaperReport_ReFreshThisCache();
          return objvgs_PaperReportConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strReportId,
      vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_GetObjByReportIdlocalStorage(strReportId: string) {
  const strThisFuncName = 'GetObjByReportIdlocalStorage';

  if (IsNullOrEmpty(strReportId) == true) {
    const strMsg = Format(
      '参数:[strReportId]不能为空!(In clsvgs_PaperReportWApi.GetObjByReportIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strReportId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strReportId]的长度:[{0}]不正确!(clsvgs_PaperReportWApi.GetObjByReportIdlocalStorage)',
      strReportId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvgs_PaperReportEN._CurrTabName, strReportId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvgs_PaperReportCache: clsvgs_PaperReportEN = JSON.parse(strTempObj);
    return objvgs_PaperReportCache;
  }
  try {
    const objvgs_PaperReport = await vgs_PaperReport_GetObjByReportIdAsync(strReportId);
    if (objvgs_PaperReport != null) {
      localStorage.setItem(strKey, JSON.stringify(objvgs_PaperReport));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvgs_PaperReport;
    }
    return objvgs_PaperReport;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strReportId,
      vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvgs_PaperReportEN.con_ReportId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvgs_PaperReportEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvgs_PaperReportEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strReportId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvgs_PaperReport = await vgs_PaperReport_GetObjByReportIdCache(strReportId);
  if (objvgs_PaperReport == null) return '';
  if (objvgs_PaperReport.GetFldValue(strOutFldName) == null) return '';
  return objvgs_PaperReport.GetFldValue(strOutFldName).toString();
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
export function vgs_PaperReport_SortFunDefa(
  a: clsvgs_PaperReportEN,
  b: clsvgs_PaperReportEN,
): number {
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
export function vgs_PaperReport_SortFunDefa2Fld(
  a: clsvgs_PaperReportEN,
  b: clsvgs_PaperReportEN,
): number {
  if (a.memo == b.memo) return a.updDate.localeCompare(b.updDate);
  else return a.memo.localeCompare(b.memo);
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
export function vgs_PaperReport_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvgs_PaperReportEN.con_Memo:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvgs_PaperReportEN.con_ReportId:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return a.reportId.localeCompare(b.reportId);
        };
      case clsvgs_PaperReportEN.con_UpdDate:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvgs_PaperReportEN.con_TopicName:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.topicName == null) return -1;
          if (b.topicName == null) return 1;
          return a.topicName.localeCompare(b.topicName);
        };
      case clsvgs_PaperReportEN.con_TopicId:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsvgs_PaperReportEN.con_PaperId:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.paperId == null) return -1;
          if (b.paperId == null) return 1;
          return a.paperId.localeCompare(b.paperId);
        };
      case clsvgs_PaperReportEN.con_PaperTitle:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.paperTitle == null) return -1;
          if (b.paperTitle == null) return 1;
          return a.paperTitle.localeCompare(b.paperTitle);
        };
      case clsvgs_PaperReportEN.con_ReportContent:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.reportContent == null) return -1;
          if (b.reportContent == null) return 1;
          return a.reportContent.localeCompare(b.reportContent);
        };
      case clsvgs_PaperReportEN.con_IdCurrEduCls:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvgs_PaperReportEN.con_IsSubmit:
        return (a: clsvgs_PaperReportEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsvgs_PaperReportEN.con_ReportUser:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.reportUser == null) return -1;
          if (b.reportUser == null) return 1;
          return a.reportUser.localeCompare(b.reportUser);
        };
      case clsvgs_PaperReportEN.con_ReportDate:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.reportDate == null) return -1;
          if (b.reportDate == null) return 1;
          return a.reportDate.localeCompare(b.reportDate);
        };
      case clsvgs_PaperReportEN.con_UpdUser:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvgs_PaperReportEN.con_VersionCount:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return a.versionCount - b.versionCount;
        };
      case clsvgs_PaperReportEN.con_OkCount:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return a.okCount - b.okCount;
        };
      case clsvgs_PaperReportEN.con_AppraiseCount:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return a.appraiseCount - b.appraiseCount;
        };
      case clsvgs_PaperReportEN.con_Score:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return a.score - b.score;
        };
      case clsvgs_PaperReportEN.con_StuScore:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return a.stuScore - b.stuScore;
        };
      case clsvgs_PaperReportEN.con_TeaScore:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsvgs_PaperReportEN.con_PDFUrl:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.pDFUrl == null) return -1;
          if (b.pDFUrl == null) return 1;
          return a.pDFUrl.localeCompare(b.pDFUrl);
        };
      case clsvgs_PaperReportEN.con_PPTUrl:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.pPTUrl == null) return -1;
          if (b.pPTUrl == null) return 1;
          return a.pPTUrl.localeCompare(b.pPTUrl);
        };
      case clsvgs_PaperReportEN.con_Month:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.month == null) return -1;
          if (b.month == null) return 1;
          return a.month.localeCompare(b.month);
        };
      case clsvgs_PaperReportEN.con_Week:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return a.week - b.week;
        };
      case clsvgs_PaperReportEN.con_Year:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (a.year == null) return -1;
          if (b.year == null) return 1;
          return a.year.localeCompare(b.year);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vgs_PaperReport]中不存在!(in ${vgs_PaperReport_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvgs_PaperReportEN.con_Memo:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvgs_PaperReportEN.con_ReportId:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return b.reportId.localeCompare(a.reportId);
        };
      case clsvgs_PaperReportEN.con_UpdDate:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvgs_PaperReportEN.con_TopicName:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.topicName == null) return -1;
          if (a.topicName == null) return 1;
          return b.topicName.localeCompare(a.topicName);
        };
      case clsvgs_PaperReportEN.con_TopicId:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsvgs_PaperReportEN.con_PaperId:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.paperId == null) return -1;
          if (a.paperId == null) return 1;
          return b.paperId.localeCompare(a.paperId);
        };
      case clsvgs_PaperReportEN.con_PaperTitle:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.paperTitle == null) return -1;
          if (a.paperTitle == null) return 1;
          return b.paperTitle.localeCompare(a.paperTitle);
        };
      case clsvgs_PaperReportEN.con_ReportContent:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.reportContent == null) return -1;
          if (a.reportContent == null) return 1;
          return b.reportContent.localeCompare(a.reportContent);
        };
      case clsvgs_PaperReportEN.con_IdCurrEduCls:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvgs_PaperReportEN.con_IsSubmit:
        return (b: clsvgs_PaperReportEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsvgs_PaperReportEN.con_ReportUser:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.reportUser == null) return -1;
          if (a.reportUser == null) return 1;
          return b.reportUser.localeCompare(a.reportUser);
        };
      case clsvgs_PaperReportEN.con_ReportDate:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.reportDate == null) return -1;
          if (a.reportDate == null) return 1;
          return b.reportDate.localeCompare(a.reportDate);
        };
      case clsvgs_PaperReportEN.con_UpdUser:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvgs_PaperReportEN.con_VersionCount:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return b.versionCount - a.versionCount;
        };
      case clsvgs_PaperReportEN.con_OkCount:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return b.okCount - a.okCount;
        };
      case clsvgs_PaperReportEN.con_AppraiseCount:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return b.appraiseCount - a.appraiseCount;
        };
      case clsvgs_PaperReportEN.con_Score:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return b.score - a.score;
        };
      case clsvgs_PaperReportEN.con_StuScore:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return b.stuScore - a.stuScore;
        };
      case clsvgs_PaperReportEN.con_TeaScore:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsvgs_PaperReportEN.con_PDFUrl:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.pDFUrl == null) return -1;
          if (a.pDFUrl == null) return 1;
          return b.pDFUrl.localeCompare(a.pDFUrl);
        };
      case clsvgs_PaperReportEN.con_PPTUrl:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.pPTUrl == null) return -1;
          if (a.pPTUrl == null) return 1;
          return b.pPTUrl.localeCompare(a.pPTUrl);
        };
      case clsvgs_PaperReportEN.con_Month:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.month == null) return -1;
          if (a.month == null) return 1;
          return b.month.localeCompare(a.month);
        };
      case clsvgs_PaperReportEN.con_Week:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          return b.week - a.week;
        };
      case clsvgs_PaperReportEN.con_Year:
        return (a: clsvgs_PaperReportEN, b: clsvgs_PaperReportEN) => {
          if (b.year == null) return -1;
          if (a.year == null) return 1;
          return b.year.localeCompare(a.year);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vgs_PaperReport]中不存在!(in ${vgs_PaperReport_ConstructorName}.${strThisFuncName})`;
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
export async function vgs_PaperReport_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvgs_PaperReportEN.con_Memo:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.memo === value;
      };
    case clsvgs_PaperReportEN.con_ReportId:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.reportId === value;
      };
    case clsvgs_PaperReportEN.con_UpdDate:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.updDate === value;
      };
    case clsvgs_PaperReportEN.con_TopicName:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.topicName === value;
      };
    case clsvgs_PaperReportEN.con_TopicId:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.topicId === value;
      };
    case clsvgs_PaperReportEN.con_PaperId:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.paperId === value;
      };
    case clsvgs_PaperReportEN.con_PaperTitle:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.paperTitle === value;
      };
    case clsvgs_PaperReportEN.con_ReportContent:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.reportContent === value;
      };
    case clsvgs_PaperReportEN.con_IdCurrEduCls:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvgs_PaperReportEN.con_IsSubmit:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.isSubmit === value;
      };
    case clsvgs_PaperReportEN.con_ReportUser:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.reportUser === value;
      };
    case clsvgs_PaperReportEN.con_ReportDate:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.reportDate === value;
      };
    case clsvgs_PaperReportEN.con_UpdUser:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.updUser === value;
      };
    case clsvgs_PaperReportEN.con_VersionCount:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.versionCount === value;
      };
    case clsvgs_PaperReportEN.con_OkCount:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.okCount === value;
      };
    case clsvgs_PaperReportEN.con_AppraiseCount:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.appraiseCount === value;
      };
    case clsvgs_PaperReportEN.con_Score:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.score === value;
      };
    case clsvgs_PaperReportEN.con_StuScore:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.stuScore === value;
      };
    case clsvgs_PaperReportEN.con_TeaScore:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.teaScore === value;
      };
    case clsvgs_PaperReportEN.con_PDFUrl:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.pDFUrl === value;
      };
    case clsvgs_PaperReportEN.con_PPTUrl:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.pPTUrl === value;
      };
    case clsvgs_PaperReportEN.con_Month:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.month === value;
      };
    case clsvgs_PaperReportEN.con_Week:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.week === value;
      };
    case clsvgs_PaperReportEN.con_Year:
      return (obj: clsvgs_PaperReportEN) => {
        return obj.year === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vgs_PaperReport]中不存在!(in ${vgs_PaperReport_ConstructorName}.${strThisFuncName})`;
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
export async function vgs_PaperReport_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvgs_PaperReportEN.con_ReportId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvgs_PaperReport = await vgs_PaperReport_GetObjLstCache();
  if (arrvgs_PaperReport == null) return [];
  let arrvgs_PaperReportSel = arrvgs_PaperReport;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvgs_PaperReportSel.length == 0) return [];
  return arrvgs_PaperReportSel.map((x) => x.reportId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vgs_PaperReport_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vgs_PaperReport_Controller, strAction);

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
        vgs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vgs_PaperReport_Controller, strAction);

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
        vgs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvgs_PaperReportEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vgs_PaperReport_Controller, strAction);

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
      const objvgs_PaperReport = vgs_PaperReport_GetObjFromJsonObj(returnObj);
      return objvgs_PaperReport;
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
        vgs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvgs_PaperReportEN._CurrTabName;
  if (IsNullOrEmpty(clsvgs_PaperReportEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_PaperReportEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvgs_PaperReportExObjLstCache: Array<clsvgs_PaperReportEN> = CacheHelper.Get(strKey);
    const arrvgs_PaperReportObjLstT = vgs_PaperReport_GetObjLstByJSONObjLst(
      arrvgs_PaperReportExObjLstCache,
    );
    return arrvgs_PaperReportObjLstT;
  }
  try {
    const arrvgs_PaperReportExObjLst = await vgs_PaperReport_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvgs_PaperReportExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_PaperReportExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_PaperReportExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvgs_PaperReportEN._CurrTabName;
  if (IsNullOrEmpty(clsvgs_PaperReportEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_PaperReportEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvgs_PaperReportExObjLstCache: Array<clsvgs_PaperReportEN> = JSON.parse(strTempObjLst);
    const arrvgs_PaperReportObjLstT = vgs_PaperReport_GetObjLstByJSONObjLst(
      arrvgs_PaperReportExObjLstCache,
    );
    return arrvgs_PaperReportObjLstT;
  }
  try {
    const arrvgs_PaperReportExObjLst = await vgs_PaperReport_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvgs_PaperReportExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_PaperReportExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_PaperReportExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvgs_PaperReportEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvgs_PaperReportObjLstCache: Array<clsvgs_PaperReportEN> = JSON.parse(strTempObjLst);
    return arrvgs_PaperReportObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vgs_PaperReport_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvgs_PaperReportEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vgs_PaperReport_Controller, strAction);

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
          vgs_PaperReport_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_PaperReport_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvgs_PaperReportEN._CurrTabName;
  if (IsNullOrEmpty(clsvgs_PaperReportEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_PaperReportEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvgs_PaperReportExObjLstCache: Array<clsvgs_PaperReportEN> = JSON.parse(strTempObjLst);
    const arrvgs_PaperReportObjLstT = vgs_PaperReport_GetObjLstByJSONObjLst(
      arrvgs_PaperReportExObjLstCache,
    );
    return arrvgs_PaperReportObjLstT;
  }
  try {
    const arrvgs_PaperReportExObjLst = await vgs_PaperReport_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvgs_PaperReportExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_PaperReportExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_PaperReportExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvgs_PaperReportEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvgs_PaperReportObjLstCache: Array<clsvgs_PaperReportEN> = JSON.parse(strTempObjLst);
    return arrvgs_PaperReportObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vgs_PaperReport_GetObjLstCache(): Promise<Array<clsvgs_PaperReportEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvgs_PaperReportObjLstCache;
  switch (clsvgs_PaperReportEN.CacheModeId) {
    case '04': //sessionStorage
      arrvgs_PaperReportObjLstCache = await vgs_PaperReport_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvgs_PaperReportObjLstCache = await vgs_PaperReport_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvgs_PaperReportObjLstCache = await vgs_PaperReport_GetObjLstClientCache();
      break;
    default:
      arrvgs_PaperReportObjLstCache = await vgs_PaperReport_GetObjLstClientCache();
      break;
  }
  return arrvgs_PaperReportObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vgs_PaperReport_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvgs_PaperReportObjLstCache;
  switch (clsvgs_PaperReportEN.CacheModeId) {
    case '04': //sessionStorage
      arrvgs_PaperReportObjLstCache = await vgs_PaperReport_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvgs_PaperReportObjLstCache = await vgs_PaperReport_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvgs_PaperReportObjLstCache = null;
      break;
    default:
      arrvgs_PaperReportObjLstCache = null;
      break;
  }
  return arrvgs_PaperReportObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrReportIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vgs_PaperReport_GetSubObjLstCache(
  objvgs_PaperReportCond: clsvgs_PaperReportEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvgs_PaperReportObjLstCache = await vgs_PaperReport_GetObjLstCache();
  let arrvgs_PaperReportSel = arrvgs_PaperReportObjLstCache;
  if (
    objvgs_PaperReportCond.sfFldComparisonOp == null ||
    objvgs_PaperReportCond.sfFldComparisonOp == ''
  )
    return arrvgs_PaperReportSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_PaperReportCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_PaperReportWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_PaperReportCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_PaperReportCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_PaperReportSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvgs_PaperReportCond),
      vgs_PaperReport_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_PaperReportEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrReportId:关键字列表
 * @returns 对象列表
 **/
export async function vgs_PaperReport_GetObjLstByReportIdLstAsync(
  arrReportId: Array<string>,
): Promise<Array<clsvgs_PaperReportEN>> {
  const strThisFuncName = 'GetObjLstByReportIdLstAsync';
  const strAction = 'GetObjLstByReportIdLst';
  const strUrl = GetWebApiUrl(vgs_PaperReport_Controller, strAction);

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
          vgs_PaperReport_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_PaperReport_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_GetObjLstByReportIdLstCache(arrReportIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByReportIdLstCache';
  try {
    const arrvgs_PaperReportObjLstCache = await vgs_PaperReport_GetObjLstCache();
    const arrvgs_PaperReportSel = arrvgs_PaperReportObjLstCache.filter(
      (x) => arrReportIdLst.indexOf(x.reportId) > -1,
    );
    return arrvgs_PaperReportSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrReportIdLst.join(','),
      vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvgs_PaperReportEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vgs_PaperReport_Controller, strAction);

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
          vgs_PaperReport_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_PaperReport_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvgs_PaperReportEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vgs_PaperReport_Controller, strAction);

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
          vgs_PaperReport_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_PaperReport_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvgs_PaperReportEN>();
  const arrvgs_PaperReportObjLstCache = await vgs_PaperReport_GetObjLstCache();
  if (arrvgs_PaperReportObjLstCache.length == 0) return arrvgs_PaperReportObjLstCache;
  let arrvgs_PaperReportSel = arrvgs_PaperReportObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvgs_PaperReportCond = new clsvgs_PaperReportEN();
  ObjectAssign(objvgs_PaperReportCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvgs_PaperReportWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_PaperReportCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvgs_PaperReportSel.length == 0) return arrvgs_PaperReportSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvgs_PaperReportSel = arrvgs_PaperReportSel.sort(
        vgs_PaperReport_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvgs_PaperReportSel = arrvgs_PaperReportSel.sort(objPagerPara.sortFun);
    }
    arrvgs_PaperReportSel = arrvgs_PaperReportSel.slice(intStart, intEnd);
    return arrvgs_PaperReportSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vgs_PaperReport_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_PaperReportEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vgs_PaperReport_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvgs_PaperReportEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvgs_PaperReportEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vgs_PaperReport_Controller, strAction);

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
          vgs_PaperReport_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_PaperReport_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_IsExistRecordCache(
  objvgs_PaperReportCond: clsvgs_PaperReportEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvgs_PaperReportObjLstCache = await vgs_PaperReport_GetObjLstCache();
  if (arrvgs_PaperReportObjLstCache == null) return false;
  let arrvgs_PaperReportSel = arrvgs_PaperReportObjLstCache;
  if (
    objvgs_PaperReportCond.sfFldComparisonOp == null ||
    objvgs_PaperReportCond.sfFldComparisonOp == ''
  )
    return arrvgs_PaperReportSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_PaperReportCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_PaperReportWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_PaperReportCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_PaperReportCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvgs_PaperReportSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvgs_PaperReportCond),
      vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vgs_PaperReport_Controller, strAction);

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
        vgs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_IsExistCache(strReportId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvgs_PaperReportObjLstCache = await vgs_PaperReport_GetObjLstCache();
  if (arrvgs_PaperReportObjLstCache == null) return false;
  try {
    const arrvgs_PaperReportSel = arrvgs_PaperReportObjLstCache.filter(
      (x) => x.reportId == strReportId,
    );
    if (arrvgs_PaperReportSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strReportId,
      vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_IsExistAsync(strReportId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vgs_PaperReport_Controller, strAction);

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
        vgs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperReport_ConstructorName,
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
export async function vgs_PaperReport_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vgs_PaperReport_Controller, strAction);

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
        vgs_PaperReport_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_PaperReport_ConstructorName,
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
 * @param objvgs_PaperReportCond:条件对象
 * @returns 对象列表记录数
 */
export async function vgs_PaperReport_GetRecCountByCondCache(
  objvgs_PaperReportCond: clsvgs_PaperReportEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvgs_PaperReportObjLstCache = await vgs_PaperReport_GetObjLstCache();
  if (arrvgs_PaperReportObjLstCache == null) return 0;
  let arrvgs_PaperReportSel = arrvgs_PaperReportObjLstCache;
  if (
    objvgs_PaperReportCond.sfFldComparisonOp == null ||
    objvgs_PaperReportCond.sfFldComparisonOp == ''
  )
    return arrvgs_PaperReportSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_PaperReportCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_PaperReportWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_PaperReportCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_PaperReportCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_PaperReportSel = arrvgs_PaperReportSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_PaperReportSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvgs_PaperReportCond),
      vgs_PaperReport_ConstructorName,
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
export function vgs_PaperReport_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vgs_PaperReport_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvgs_PaperReportEN._CurrTabName;
    switch (clsvgs_PaperReportEN.CacheModeId) {
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
export function vgs_PaperReport_GetJSONStrByObj(
  pobjvgs_PaperReportEN: clsvgs_PaperReportEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvgs_PaperReportEN);
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
export function vgs_PaperReport_GetObjLstByJSONStr(strJSON: string): Array<clsvgs_PaperReportEN> {
  let arrvgs_PaperReportObjLst = new Array<clsvgs_PaperReportEN>();
  if (strJSON === '') {
    return arrvgs_PaperReportObjLst;
  }
  try {
    arrvgs_PaperReportObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvgs_PaperReportObjLst;
  }
  return arrvgs_PaperReportObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvgs_PaperReportObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vgs_PaperReport_GetObjLstByJSONObjLst(
  arrvgs_PaperReportObjLstS: Array<clsvgs_PaperReportEN>,
): Array<clsvgs_PaperReportEN> {
  const arrvgs_PaperReportObjLst = new Array<clsvgs_PaperReportEN>();
  for (const objInFor of arrvgs_PaperReportObjLstS) {
    const obj1 = vgs_PaperReport_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvgs_PaperReportObjLst.push(obj1);
  }
  return arrvgs_PaperReportObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vgs_PaperReport_GetObjByJSONStr(strJSON: string): clsvgs_PaperReportEN {
  let pobjvgs_PaperReportEN = new clsvgs_PaperReportEN();
  if (strJSON === '') {
    return pobjvgs_PaperReportEN;
  }
  try {
    pobjvgs_PaperReportEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvgs_PaperReportEN;
  }
  return pobjvgs_PaperReportEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vgs_PaperReport_GetCombineCondition(
  objvgs_PaperReportCond: clsvgs_PaperReportEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_Memo,
      objvgs_PaperReportCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_ReportId,
    ) == true
  ) {
    const strComparisonOpReportId: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_ReportId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_ReportId,
      objvgs_PaperReportCond.reportId,
      strComparisonOpReportId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_UpdDate,
      objvgs_PaperReportCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_TopicName,
    ) == true
  ) {
    const strComparisonOpTopicName: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_TopicName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_TopicName,
      objvgs_PaperReportCond.topicName,
      strComparisonOpTopicName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_TopicId,
      objvgs_PaperReportCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_PaperId,
      objvgs_PaperReportCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_PaperTitle,
    ) == true
  ) {
    const strComparisonOpPaperTitle: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_PaperTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_PaperTitle,
      objvgs_PaperReportCond.paperTitle,
      strComparisonOpPaperTitle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_ReportContent,
    ) == true
  ) {
    const strComparisonOpReportContent: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_ReportContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_ReportContent,
      objvgs_PaperReportCond.reportContent,
      strComparisonOpReportContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_IdCurrEduCls,
      objvgs_PaperReportCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_IsSubmit,
    ) == true
  ) {
    if (objvgs_PaperReportCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvgs_PaperReportEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvgs_PaperReportEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_ReportUser,
    ) == true
  ) {
    const strComparisonOpReportUser: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_ReportUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_ReportUser,
      objvgs_PaperReportCond.reportUser,
      strComparisonOpReportUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_ReportDate,
    ) == true
  ) {
    const strComparisonOpReportDate: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_ReportDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_ReportDate,
      objvgs_PaperReportCond.reportDate,
      strComparisonOpReportDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_UpdUser,
      objvgs_PaperReportCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_VersionCount,
    ) == true
  ) {
    const strComparisonOpVersionCount: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_VersionCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_PaperReportEN.con_VersionCount,
      objvgs_PaperReportCond.versionCount,
      strComparisonOpVersionCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_OkCount,
    ) == true
  ) {
    const strComparisonOpOkCount: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_OkCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_PaperReportEN.con_OkCount,
      objvgs_PaperReportCond.okCount,
      strComparisonOpOkCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_AppraiseCount,
    ) == true
  ) {
    const strComparisonOpAppraiseCount: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_AppraiseCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_PaperReportEN.con_AppraiseCount,
      objvgs_PaperReportCond.appraiseCount,
      strComparisonOpAppraiseCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_PaperReportEN.con_Score,
      objvgs_PaperReportCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_PaperReportEN.con_StuScore,
      objvgs_PaperReportCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_PaperReportEN.con_TeaScore,
      objvgs_PaperReportCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_PDFUrl,
    ) == true
  ) {
    const strComparisonOpPDFUrl: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_PDFUrl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_PDFUrl,
      objvgs_PaperReportCond.pDFUrl,
      strComparisonOpPDFUrl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_PPTUrl,
    ) == true
  ) {
    const strComparisonOpPPTUrl: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_PPTUrl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_PPTUrl,
      objvgs_PaperReportCond.pPTUrl,
      strComparisonOpPPTUrl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_Month,
    ) == true
  ) {
    const strComparisonOpMonth: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_Month];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_Month,
      objvgs_PaperReportCond.month,
      strComparisonOpMonth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_Week,
    ) == true
  ) {
    const strComparisonOpWeek: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_Week];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_PaperReportEN.con_Week,
      objvgs_PaperReportCond.week,
      strComparisonOpWeek,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_PaperReportCond.dicFldComparisonOp,
      clsvgs_PaperReportEN.con_Year,
    ) == true
  ) {
    const strComparisonOpYear: string =
      objvgs_PaperReportCond.dicFldComparisonOp[clsvgs_PaperReportEN.con_Year];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_PaperReportEN.con_Year,
      objvgs_PaperReportCond.year,
      strComparisonOpYear,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvgs_PaperReportENS:源对象
 * @param objvgs_PaperReportENT:目标对象
 */
export function vgs_PaperReport_CopyObjTo(
  objvgs_PaperReportENS: clsvgs_PaperReportEN,
  objvgs_PaperReportENT: clsvgs_PaperReportEN,
): void {
  objvgs_PaperReportENT.memo = objvgs_PaperReportENS.memo; //备注
  objvgs_PaperReportENT.reportId = objvgs_PaperReportENS.reportId; //汇报Id
  objvgs_PaperReportENT.updDate = objvgs_PaperReportENS.updDate; //修改日期
  objvgs_PaperReportENT.topicName = objvgs_PaperReportENS.topicName; //栏目主题
  objvgs_PaperReportENT.topicId = objvgs_PaperReportENS.topicId; //主题Id
  objvgs_PaperReportENT.paperId = objvgs_PaperReportENS.paperId; //论文Id
  objvgs_PaperReportENT.paperTitle = objvgs_PaperReportENS.paperTitle; //论文标题
  objvgs_PaperReportENT.reportContent = objvgs_PaperReportENS.reportContent; //汇报内容
  objvgs_PaperReportENT.idCurrEduCls = objvgs_PaperReportENS.idCurrEduCls; //教学班流水号
  objvgs_PaperReportENT.isSubmit = objvgs_PaperReportENS.isSubmit; //是否提交
  objvgs_PaperReportENT.reportUser = objvgs_PaperReportENS.reportUser; //汇报用户
  objvgs_PaperReportENT.reportDate = objvgs_PaperReportENS.reportDate; //汇报日期
  objvgs_PaperReportENT.updUser = objvgs_PaperReportENS.updUser; //修改人
  objvgs_PaperReportENT.versionCount = objvgs_PaperReportENS.versionCount; //版本统计
  objvgs_PaperReportENT.okCount = objvgs_PaperReportENS.okCount; //点赞统计
  objvgs_PaperReportENT.appraiseCount = objvgs_PaperReportENS.appraiseCount; //评论数
  objvgs_PaperReportENT.score = objvgs_PaperReportENS.score; //评分
  objvgs_PaperReportENT.stuScore = objvgs_PaperReportENS.stuScore; //学生平均分
  objvgs_PaperReportENT.teaScore = objvgs_PaperReportENS.teaScore; //教师评分
  objvgs_PaperReportENT.pDFUrl = objvgs_PaperReportENS.pDFUrl; //PDFUrl
  objvgs_PaperReportENT.pPTUrl = objvgs_PaperReportENS.pPTUrl; //PPTUrl
  objvgs_PaperReportENT.month = objvgs_PaperReportENS.month; //月
  objvgs_PaperReportENT.week = objvgs_PaperReportENS.week; //周
  objvgs_PaperReportENT.year = objvgs_PaperReportENS.year; //年
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvgs_PaperReportENS:源对象
 * @param objvgs_PaperReportENT:目标对象
 */
export function vgs_PaperReport_GetObjFromJsonObj(
  objvgs_PaperReportENS: clsvgs_PaperReportEN,
): clsvgs_PaperReportEN {
  const objvgs_PaperReportENT: clsvgs_PaperReportEN = new clsvgs_PaperReportEN();
  ObjectAssign(objvgs_PaperReportENT, objvgs_PaperReportENS);
  return objvgs_PaperReportENT;
}
