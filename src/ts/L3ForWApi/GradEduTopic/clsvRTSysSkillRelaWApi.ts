/**
 * 类名:clsvRTSysSkillRelaWApi
 * 表名:vRTSysSkillRela(01120656)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:27
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
 * vRTSysSkillRela(vRTSysSkillRela)
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
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvRTSysSkillRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTSysSkillRelaEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const vRTSysSkillRela_Controller = 'vRTSysSkillRelaApi';
export const vRTSysSkillRela_ConstructorName = 'vRTSysSkillRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function vRTSysSkillRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsvRTSysSkillRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvRTSysSkillRelaWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
      const objvRTSysSkillRela = vRTSysSkillRela_GetObjFromJsonObj(returnObj);
      return objvRTSysSkillRela;
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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvRTSysSkillRelaWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrvRTSysSkillRelaObjLstCache = await vRTSysSkillRela_GetObjLstCache();
  try {
    const arrvRTSysSkillRelaSel = arrvRTSysSkillRelaObjLstCache.filter((x) => x.mId == lngmId);
    let objvRTSysSkillRela: clsvRTSysSkillRelaEN;
    if (arrvRTSysSkillRelaSel.length > 0) {
      objvRTSysSkillRela = arrvRTSysSkillRelaSel[0];
      return objvRTSysSkillRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvRTSysSkillRelaConst = await vRTSysSkillRela_GetObjBymIdAsync(lngmId);
        if (objvRTSysSkillRelaConst != null) {
          vRTSysSkillRela_ReFreshThisCache();
          return objvRTSysSkillRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsvRTSysSkillRelaWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvRTSysSkillRelaEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvRTSysSkillRelaCache: clsvRTSysSkillRelaEN = JSON.parse(strTempObj);
    return objvRTSysSkillRelaCache;
  }
  try {
    const objvRTSysSkillRela = await vRTSysSkillRela_GetObjBymIdAsync(lngmId);
    if (objvRTSysSkillRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objvRTSysSkillRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvRTSysSkillRela;
    }
    return objvRTSysSkillRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vRTSysSkillRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function vRTSysSkillRela_GetNameBymIdCache(lngmId: number) {
  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvRTSysSkillRelaWApi.GetNameBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrvRTSysSkillRelaObjLstCache = await vRTSysSkillRela_GetObjLstCache();
  if (arrvRTSysSkillRelaObjLstCache == null) return '';
  try {
    const arrvRTSysSkillRelaSel = arrvRTSysSkillRelaObjLstCache.filter((x) => x.mId == lngmId);
    let objvRTSysSkillRela: clsvRTSysSkillRelaEN;
    if (arrvRTSysSkillRelaSel.length > 0) {
      objvRTSysSkillRela = arrvRTSysSkillRelaSel[0];
      return objvRTSysSkillRela.operationTypeId;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format('错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!', e, lngmId);
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
 * @returns 返回一个输出字段值
 */
export async function vRTSysSkillRela_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvRTSysSkillRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvRTSysSkillRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvRTSysSkillRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objvRTSysSkillRela = await vRTSysSkillRela_GetObjBymIdCache(lngmId);
  if (objvRTSysSkillRela == null) return '';
  if (objvRTSysSkillRela.GetFldValue(strOutFldName) == null) return '';
  return objvRTSysSkillRela.GetFldValue(strOutFldName).toString();
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
export function vRTSysSkillRela_SortFunDefa(
  a: clsvRTSysSkillRelaEN,
  b: clsvRTSysSkillRelaEN,
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
export function vRTSysSkillRela_SortFunDefa2Fld(
  a: clsvRTSysSkillRelaEN,
  b: clsvRTSysSkillRelaEN,
): number {
  if (a.topicName == b.topicName) return a.skillName.localeCompare(b.skillName);
  else return a.topicName.localeCompare(b.topicName);
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
export function vRTSysSkillRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvRTSysSkillRelaEN.con_TopicName:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.topicName == null) return -1;
          if (b.topicName == null) return 1;
          return a.topicName.localeCompare(b.topicName);
        };
      case clsvRTSysSkillRelaEN.con_SkillName:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.skillName == null) return -1;
          if (b.skillName == null) return 1;
          return a.skillName.localeCompare(b.skillName);
        };
      case clsvRTSysSkillRelaEN.con_OperationTypeId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.operationTypeId == null) return -1;
          if (b.operationTypeId == null) return 1;
          return a.operationTypeId.localeCompare(b.operationTypeId);
        };
      case clsvRTSysSkillRelaEN.con_Process:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.process == null) return -1;
          if (b.process == null) return 1;
          return a.process.localeCompare(b.process);
        };
      case clsvRTSysSkillRelaEN.con_LevelId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.levelId == null) return -1;
          if (b.levelId == null) return 1;
          return a.levelId.localeCompare(b.levelId);
        };
      case clsvRTSysSkillRelaEN.con_LevelName:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.levelName == null) return -1;
          if (b.levelName == null) return 1;
          return a.levelName.localeCompare(b.levelName);
        };
      case clsvRTSysSkillRelaEN.con_SkillUpdUser:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.skillUpdUser == null) return -1;
          if (b.skillUpdUser == null) return 1;
          return a.skillUpdUser.localeCompare(b.skillUpdUser);
        };
      case clsvRTSysSkillRelaEN.con_SkillUpdDate:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.skillUpdDate == null) return -1;
          if (b.skillUpdDate == null) return 1;
          return a.skillUpdDate.localeCompare(b.skillUpdDate);
        };
      case clsvRTSysSkillRelaEN.con_OrderNum:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvRTSysSkillRelaEN.con_IdCurrEduCls:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvRTSysSkillRelaEN.con_TopicProposePeople:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.topicProposePeople == null) return -1;
          if (b.topicProposePeople == null) return 1;
          return a.topicProposePeople.localeCompare(b.topicProposePeople);
        };
      case clsvRTSysSkillRelaEN.con_TopicContent:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.topicContent == null) return -1;
          if (b.topicContent == null) return 1;
          return a.topicContent.localeCompare(b.topicContent);
        };
      case clsvRTSysSkillRelaEN.con_IsSubmit:
        return (a: clsvRTSysSkillRelaEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsvRTSysSkillRelaEN.con_AppraiseCount:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return a.appraiseCount - b.appraiseCount;
        };
      case clsvRTSysSkillRelaEN.con_Score:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return a.score - b.score;
        };
      case clsvRTSysSkillRelaEN.con_StuScore:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return a.stuScore - b.stuScore;
        };
      case clsvRTSysSkillRelaEN.con_TeaScore:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsvRTSysSkillRelaEN.con_PdfContent:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.pdfContent == null) return -1;
          if (b.pdfContent == null) return 1;
          return a.pdfContent.localeCompare(b.pdfContent);
        };
      case clsvRTSysSkillRelaEN.con_PdfPageNum:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return a.pdfPageNum - b.pdfPageNum;
        };
      case clsvRTSysSkillRelaEN.con_CitationCount:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return a.citationCount - b.citationCount;
        };
      case clsvRTSysSkillRelaEN.con_VersionCount:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return a.versionCount - b.versionCount;
        };
      case clsvRTSysSkillRelaEN.con_OperationTypeName:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.operationTypeName == null) return -1;
          if (b.operationTypeName == null) return 1;
          return a.operationTypeName.localeCompare(b.operationTypeName);
        };
      case clsvRTSysSkillRelaEN.con_OkCount:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return a.okCount - b.okCount;
        };
      case clsvRTSysSkillRelaEN.con_CitationId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.citationId == null) return -1;
          if (b.citationId == null) return 1;
          return a.citationId.localeCompare(b.citationId);
        };
      case clsvRTSysSkillRelaEN.con_mId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return a.mId - b.mId;
        };
      case clsvRTSysSkillRelaEN.con_TopicId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsvRTSysSkillRelaEN.con_SkillId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return a.skillId.localeCompare(b.skillId);
        };
      case clsvRTSysSkillRelaEN.con_UpdDate:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvRTSysSkillRelaEN.con_Memo:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvRTSysSkillRelaEN.con_UpdUser:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvRTSysSkillRelaEN.con_CreateDate:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.createDate == null) return -1;
          if (b.createDate == null) return 1;
          return a.createDate.localeCompare(b.createDate);
        };
      case clsvRTSysSkillRelaEN.con_ShareId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.shareId == null) return -1;
          if (b.shareId == null) return 1;
          return a.shareId.localeCompare(b.shareId);
        };
      case clsvRTSysSkillRelaEN.con_ClassificationId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (a.classificationId == null) return -1;
          if (b.classificationId == null) return 1;
          return a.classificationId.localeCompare(b.classificationId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vRTSysSkillRela]中不存在!(in ${vRTSysSkillRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvRTSysSkillRelaEN.con_TopicName:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.topicName == null) return -1;
          if (a.topicName == null) return 1;
          return b.topicName.localeCompare(a.topicName);
        };
      case clsvRTSysSkillRelaEN.con_SkillName:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.skillName == null) return -1;
          if (a.skillName == null) return 1;
          return b.skillName.localeCompare(a.skillName);
        };
      case clsvRTSysSkillRelaEN.con_OperationTypeId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.operationTypeId == null) return -1;
          if (a.operationTypeId == null) return 1;
          return b.operationTypeId.localeCompare(a.operationTypeId);
        };
      case clsvRTSysSkillRelaEN.con_Process:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.process == null) return -1;
          if (a.process == null) return 1;
          return b.process.localeCompare(a.process);
        };
      case clsvRTSysSkillRelaEN.con_LevelId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.levelId == null) return -1;
          if (a.levelId == null) return 1;
          return b.levelId.localeCompare(a.levelId);
        };
      case clsvRTSysSkillRelaEN.con_LevelName:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.levelName == null) return -1;
          if (a.levelName == null) return 1;
          return b.levelName.localeCompare(a.levelName);
        };
      case clsvRTSysSkillRelaEN.con_SkillUpdUser:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.skillUpdUser == null) return -1;
          if (a.skillUpdUser == null) return 1;
          return b.skillUpdUser.localeCompare(a.skillUpdUser);
        };
      case clsvRTSysSkillRelaEN.con_SkillUpdDate:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.skillUpdDate == null) return -1;
          if (a.skillUpdDate == null) return 1;
          return b.skillUpdDate.localeCompare(a.skillUpdDate);
        };
      case clsvRTSysSkillRelaEN.con_OrderNum:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvRTSysSkillRelaEN.con_IdCurrEduCls:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvRTSysSkillRelaEN.con_TopicProposePeople:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.topicProposePeople == null) return -1;
          if (a.topicProposePeople == null) return 1;
          return b.topicProposePeople.localeCompare(a.topicProposePeople);
        };
      case clsvRTSysSkillRelaEN.con_TopicContent:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.topicContent == null) return -1;
          if (a.topicContent == null) return 1;
          return b.topicContent.localeCompare(a.topicContent);
        };
      case clsvRTSysSkillRelaEN.con_IsSubmit:
        return (b: clsvRTSysSkillRelaEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsvRTSysSkillRelaEN.con_AppraiseCount:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return b.appraiseCount - a.appraiseCount;
        };
      case clsvRTSysSkillRelaEN.con_Score:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return b.score - a.score;
        };
      case clsvRTSysSkillRelaEN.con_StuScore:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return b.stuScore - a.stuScore;
        };
      case clsvRTSysSkillRelaEN.con_TeaScore:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsvRTSysSkillRelaEN.con_PdfContent:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.pdfContent == null) return -1;
          if (a.pdfContent == null) return 1;
          return b.pdfContent.localeCompare(a.pdfContent);
        };
      case clsvRTSysSkillRelaEN.con_PdfPageNum:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return b.pdfPageNum - a.pdfPageNum;
        };
      case clsvRTSysSkillRelaEN.con_CitationCount:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return b.citationCount - a.citationCount;
        };
      case clsvRTSysSkillRelaEN.con_VersionCount:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return b.versionCount - a.versionCount;
        };
      case clsvRTSysSkillRelaEN.con_OperationTypeName:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.operationTypeName == null) return -1;
          if (a.operationTypeName == null) return 1;
          return b.operationTypeName.localeCompare(a.operationTypeName);
        };
      case clsvRTSysSkillRelaEN.con_OkCount:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return b.okCount - a.okCount;
        };
      case clsvRTSysSkillRelaEN.con_CitationId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.citationId == null) return -1;
          if (a.citationId == null) return 1;
          return b.citationId.localeCompare(a.citationId);
        };
      case clsvRTSysSkillRelaEN.con_mId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return b.mId - a.mId;
        };
      case clsvRTSysSkillRelaEN.con_TopicId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsvRTSysSkillRelaEN.con_SkillId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          return b.skillId.localeCompare(a.skillId);
        };
      case clsvRTSysSkillRelaEN.con_UpdDate:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvRTSysSkillRelaEN.con_Memo:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvRTSysSkillRelaEN.con_UpdUser:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvRTSysSkillRelaEN.con_CreateDate:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.createDate == null) return -1;
          if (a.createDate == null) return 1;
          return b.createDate.localeCompare(a.createDate);
        };
      case clsvRTSysSkillRelaEN.con_ShareId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.shareId == null) return -1;
          if (a.shareId == null) return 1;
          return b.shareId.localeCompare(a.shareId);
        };
      case clsvRTSysSkillRelaEN.con_ClassificationId:
        return (a: clsvRTSysSkillRelaEN, b: clsvRTSysSkillRelaEN) => {
          if (b.classificationId == null) return -1;
          if (a.classificationId == null) return 1;
          return b.classificationId.localeCompare(a.classificationId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vRTSysSkillRela]中不存在!(in ${vRTSysSkillRela_ConstructorName}.${strThisFuncName})`;
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
export async function vRTSysSkillRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvRTSysSkillRelaEN.con_TopicName:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.topicName === value;
      };
    case clsvRTSysSkillRelaEN.con_SkillName:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.skillName === value;
      };
    case clsvRTSysSkillRelaEN.con_OperationTypeId:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.operationTypeId === value;
      };
    case clsvRTSysSkillRelaEN.con_Process:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.process === value;
      };
    case clsvRTSysSkillRelaEN.con_LevelId:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.levelId === value;
      };
    case clsvRTSysSkillRelaEN.con_LevelName:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.levelName === value;
      };
    case clsvRTSysSkillRelaEN.con_SkillUpdUser:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.skillUpdUser === value;
      };
    case clsvRTSysSkillRelaEN.con_SkillUpdDate:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.skillUpdDate === value;
      };
    case clsvRTSysSkillRelaEN.con_OrderNum:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.orderNum === value;
      };
    case clsvRTSysSkillRelaEN.con_IdCurrEduCls:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvRTSysSkillRelaEN.con_TopicProposePeople:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.topicProposePeople === value;
      };
    case clsvRTSysSkillRelaEN.con_TopicContent:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.topicContent === value;
      };
    case clsvRTSysSkillRelaEN.con_IsSubmit:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.isSubmit === value;
      };
    case clsvRTSysSkillRelaEN.con_AppraiseCount:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.appraiseCount === value;
      };
    case clsvRTSysSkillRelaEN.con_Score:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.score === value;
      };
    case clsvRTSysSkillRelaEN.con_StuScore:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.stuScore === value;
      };
    case clsvRTSysSkillRelaEN.con_TeaScore:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.teaScore === value;
      };
    case clsvRTSysSkillRelaEN.con_PdfContent:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.pdfContent === value;
      };
    case clsvRTSysSkillRelaEN.con_PdfPageNum:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.pdfPageNum === value;
      };
    case clsvRTSysSkillRelaEN.con_CitationCount:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.citationCount === value;
      };
    case clsvRTSysSkillRelaEN.con_VersionCount:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.versionCount === value;
      };
    case clsvRTSysSkillRelaEN.con_OperationTypeName:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.operationTypeName === value;
      };
    case clsvRTSysSkillRelaEN.con_OkCount:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.okCount === value;
      };
    case clsvRTSysSkillRelaEN.con_CitationId:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.citationId === value;
      };
    case clsvRTSysSkillRelaEN.con_mId:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.mId === value;
      };
    case clsvRTSysSkillRelaEN.con_TopicId:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.topicId === value;
      };
    case clsvRTSysSkillRelaEN.con_SkillId:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.skillId === value;
      };
    case clsvRTSysSkillRelaEN.con_UpdDate:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.updDate === value;
      };
    case clsvRTSysSkillRelaEN.con_Memo:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.memo === value;
      };
    case clsvRTSysSkillRelaEN.con_UpdUser:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.updUser === value;
      };
    case clsvRTSysSkillRelaEN.con_CreateDate:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.createDate === value;
      };
    case clsvRTSysSkillRelaEN.con_ShareId:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.shareId === value;
      };
    case clsvRTSysSkillRelaEN.con_ClassificationId:
      return (obj: clsvRTSysSkillRelaEN) => {
        return obj.classificationId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vRTSysSkillRela]中不存在!(in ${vRTSysSkillRela_ConstructorName}.${strThisFuncName})`;
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
export async function vRTSysSkillRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvRTSysSkillRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvRTSysSkillRela = await vRTSysSkillRela_GetObjLstCache();
  if (arrvRTSysSkillRela == null) return [];
  let arrvRTSysSkillRelaSel = arrvRTSysSkillRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvRTSysSkillRelaSel.length == 0) return [];
  return arrvRTSysSkillRelaSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vRTSysSkillRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvRTSysSkillRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
      const objvRTSysSkillRela = vRTSysSkillRela_GetObjFromJsonObj(returnObj);
      return objvRTSysSkillRela;
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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvRTSysSkillRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsvRTSysSkillRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTSysSkillRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvRTSysSkillRelaExObjLstCache: Array<clsvRTSysSkillRelaEN> = CacheHelper.Get(strKey);
    const arrvRTSysSkillRelaObjLstT = vRTSysSkillRela_GetObjLstByJSONObjLst(
      arrvRTSysSkillRelaExObjLstCache,
    );
    return arrvRTSysSkillRelaObjLstT;
  }
  try {
    const arrvRTSysSkillRelaExObjLst = await vRTSysSkillRela_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvRTSysSkillRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTSysSkillRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTSysSkillRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvRTSysSkillRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsvRTSysSkillRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTSysSkillRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvRTSysSkillRelaExObjLstCache: Array<clsvRTSysSkillRelaEN> = JSON.parse(strTempObjLst);
    const arrvRTSysSkillRelaObjLstT = vRTSysSkillRela_GetObjLstByJSONObjLst(
      arrvRTSysSkillRelaExObjLstCache,
    );
    return arrvRTSysSkillRelaObjLstT;
  }
  try {
    const arrvRTSysSkillRelaExObjLst = await vRTSysSkillRela_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvRTSysSkillRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTSysSkillRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTSysSkillRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvRTSysSkillRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvRTSysSkillRelaObjLstCache: Array<clsvRTSysSkillRelaEN> = JSON.parse(strTempObjLst);
    return arrvRTSysSkillRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vRTSysSkillRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvRTSysSkillRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
          vRTSysSkillRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTSysSkillRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvRTSysSkillRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsvRTSysSkillRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTSysSkillRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvRTSysSkillRelaExObjLstCache: Array<clsvRTSysSkillRelaEN> = JSON.parse(strTempObjLst);
    const arrvRTSysSkillRelaObjLstT = vRTSysSkillRela_GetObjLstByJSONObjLst(
      arrvRTSysSkillRelaExObjLstCache,
    );
    return arrvRTSysSkillRelaObjLstT;
  }
  try {
    const arrvRTSysSkillRelaExObjLst = await vRTSysSkillRela_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvRTSysSkillRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTSysSkillRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTSysSkillRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvRTSysSkillRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvRTSysSkillRelaObjLstCache: Array<clsvRTSysSkillRelaEN> = JSON.parse(strTempObjLst);
    return arrvRTSysSkillRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vRTSysSkillRela_GetObjLstCache(): Promise<Array<clsvRTSysSkillRelaEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvRTSysSkillRelaObjLstCache;
  switch (clsvRTSysSkillRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrvRTSysSkillRelaObjLstCache = await vRTSysSkillRela_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvRTSysSkillRelaObjLstCache = await vRTSysSkillRela_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvRTSysSkillRelaObjLstCache = await vRTSysSkillRela_GetObjLstClientCache();
      break;
    default:
      arrvRTSysSkillRelaObjLstCache = await vRTSysSkillRela_GetObjLstClientCache();
      break;
  }
  return arrvRTSysSkillRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vRTSysSkillRela_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvRTSysSkillRelaObjLstCache;
  switch (clsvRTSysSkillRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrvRTSysSkillRelaObjLstCache = await vRTSysSkillRela_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvRTSysSkillRelaObjLstCache = await vRTSysSkillRela_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvRTSysSkillRelaObjLstCache = null;
      break;
    default:
      arrvRTSysSkillRelaObjLstCache = null;
      break;
  }
  return arrvRTSysSkillRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vRTSysSkillRela_GetSubObjLstCache(
  objvRTSysSkillRelaCond: clsvRTSysSkillRelaEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvRTSysSkillRelaObjLstCache = await vRTSysSkillRela_GetObjLstCache();
  let arrvRTSysSkillRelaSel = arrvRTSysSkillRelaObjLstCache;
  if (
    objvRTSysSkillRelaCond.sfFldComparisonOp == null ||
    objvRTSysSkillRelaCond.sfFldComparisonOp == ''
  )
    return arrvRTSysSkillRelaSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTSysSkillRelaCond.sfFldComparisonOp,
  );
  //console.log("clsvRTSysSkillRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTSysSkillRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTSysSkillRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvRTSysSkillRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvRTSysSkillRelaCond),
      vRTSysSkillRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvRTSysSkillRelaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function vRTSysSkillRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsvRTSysSkillRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
          vRTSysSkillRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTSysSkillRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrvRTSysSkillRelaObjLstCache = await vRTSysSkillRela_GetObjLstCache();
    const arrvRTSysSkillRelaSel = arrvRTSysSkillRelaObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrvRTSysSkillRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvRTSysSkillRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
          vRTSysSkillRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTSysSkillRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvRTSysSkillRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
          vRTSysSkillRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTSysSkillRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvRTSysSkillRelaEN>();
  const arrvRTSysSkillRelaObjLstCache = await vRTSysSkillRela_GetObjLstCache();
  if (arrvRTSysSkillRelaObjLstCache.length == 0) return arrvRTSysSkillRelaObjLstCache;
  let arrvRTSysSkillRelaSel = arrvRTSysSkillRelaObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvRTSysSkillRelaCond = new clsvRTSysSkillRelaEN();
  ObjectAssign(objvRTSysSkillRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvRTSysSkillRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTSysSkillRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvRTSysSkillRelaSel.length == 0) return arrvRTSysSkillRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.sort(
        vRTSysSkillRela_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.sort(objPagerPara.sortFun);
    }
    arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.slice(intStart, intEnd);
    return arrvRTSysSkillRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vRTSysSkillRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvRTSysSkillRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vRTSysSkillRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvRTSysSkillRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvRTSysSkillRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
          vRTSysSkillRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTSysSkillRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
 * @param objvRTSysSkillRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vRTSysSkillRela_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
 * @param objvRTSysSkillRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vRTSysSkillRela_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objvRTSysSkillRelaEN);
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
 * @param objvRTSysSkillRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vRTSysSkillRela_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objvRTSysSkillRelaEN);
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
 * @param objvRTSysSkillRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vRTSysSkillRela_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objvRTSysSkillRelaEN);
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
 * @param objvRTSysSkillRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vRTSysSkillRela_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objvRTSysSkillRelaEN);
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_IsExistRecordCache(
  objvRTSysSkillRelaCond: clsvRTSysSkillRelaEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvRTSysSkillRelaObjLstCache = await vRTSysSkillRela_GetObjLstCache();
  if (arrvRTSysSkillRelaObjLstCache == null) return false;
  let arrvRTSysSkillRelaSel = arrvRTSysSkillRelaObjLstCache;
  if (
    objvRTSysSkillRelaCond.sfFldComparisonOp == null ||
    objvRTSysSkillRelaCond.sfFldComparisonOp == ''
  )
    return arrvRTSysSkillRelaSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTSysSkillRelaCond.sfFldComparisonOp,
  );
  //console.log("clsvRTSysSkillRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTSysSkillRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTSysSkillRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvRTSysSkillRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvRTSysSkillRelaCond),
      vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrvRTSysSkillRelaObjLstCache = await vRTSysSkillRela_GetObjLstCache();
  if (arrvRTSysSkillRelaObjLstCache == null) return false;
  try {
    const arrvRTSysSkillRelaSel = arrvRTSysSkillRelaObjLstCache.filter((x) => x.mId == lngmId);
    if (arrvRTSysSkillRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
export async function vRTSysSkillRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vRTSysSkillRela_Controller, strAction);

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
        vRTSysSkillRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTSysSkillRela_ConstructorName,
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
 * @param objvRTSysSkillRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function vRTSysSkillRela_GetRecCountByCondCache(
  objvRTSysSkillRelaCond: clsvRTSysSkillRelaEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvRTSysSkillRelaObjLstCache = await vRTSysSkillRela_GetObjLstCache();
  if (arrvRTSysSkillRelaObjLstCache == null) return 0;
  let arrvRTSysSkillRelaSel = arrvRTSysSkillRelaObjLstCache;
  if (
    objvRTSysSkillRelaCond.sfFldComparisonOp == null ||
    objvRTSysSkillRelaCond.sfFldComparisonOp == ''
  )
    return arrvRTSysSkillRelaSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTSysSkillRelaCond.sfFldComparisonOp,
  );
  //console.log("clsvRTSysSkillRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTSysSkillRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTSysSkillRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTSysSkillRelaSel = arrvRTSysSkillRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvRTSysSkillRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvRTSysSkillRelaCond),
      vRTSysSkillRela_ConstructorName,
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
export function vRTSysSkillRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vRTSysSkillRela_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvRTSysSkillRelaEN._CurrTabName;
    switch (clsvRTSysSkillRelaEN.CacheModeId) {
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

*/
export async function vRTSysSkillRela_Cache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In )', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：Cache");
  const arrObjLstSel = await vRTSysSkillRela_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvRTSysSkillRelaEN.con_mId,
    clsvRTSysSkillRelaEN.con_OperationTypeId,
    'vRTSysSkillRela',
  );
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vRTSysSkillRela_GetJSONStrByObj(
  pobjvRTSysSkillRelaEN: clsvRTSysSkillRelaEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvRTSysSkillRelaEN);
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
export function vRTSysSkillRela_GetObjLstByJSONStr(strJSON: string): Array<clsvRTSysSkillRelaEN> {
  let arrvRTSysSkillRelaObjLst = new Array<clsvRTSysSkillRelaEN>();
  if (strJSON === '') {
    return arrvRTSysSkillRelaObjLst;
  }
  try {
    arrvRTSysSkillRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvRTSysSkillRelaObjLst;
  }
  return arrvRTSysSkillRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvRTSysSkillRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vRTSysSkillRela_GetObjLstByJSONObjLst(
  arrvRTSysSkillRelaObjLstS: Array<clsvRTSysSkillRelaEN>,
): Array<clsvRTSysSkillRelaEN> {
  const arrvRTSysSkillRelaObjLst = new Array<clsvRTSysSkillRelaEN>();
  for (const objInFor of arrvRTSysSkillRelaObjLstS) {
    const obj1 = vRTSysSkillRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvRTSysSkillRelaObjLst.push(obj1);
  }
  return arrvRTSysSkillRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vRTSysSkillRela_GetObjByJSONStr(strJSON: string): clsvRTSysSkillRelaEN {
  let pobjvRTSysSkillRelaEN = new clsvRTSysSkillRelaEN();
  if (strJSON === '') {
    return pobjvRTSysSkillRelaEN;
  }
  try {
    pobjvRTSysSkillRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvRTSysSkillRelaEN;
  }
  return pobjvRTSysSkillRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vRTSysSkillRela_GetCombineCondition(
  objvRTSysSkillRelaCond: clsvRTSysSkillRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_TopicName,
    ) == true
  ) {
    const strComparisonOpTopicName: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_TopicName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_TopicName,
      objvRTSysSkillRelaCond.topicName,
      strComparisonOpTopicName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_SkillName,
    ) == true
  ) {
    const strComparisonOpSkillName: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_SkillName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_SkillName,
      objvRTSysSkillRelaCond.skillName,
      strComparisonOpSkillName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_OperationTypeId,
    ) == true
  ) {
    const strComparisonOpOperationTypeId: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_OperationTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_OperationTypeId,
      objvRTSysSkillRelaCond.operationTypeId,
      strComparisonOpOperationTypeId,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_LevelId,
    ) == true
  ) {
    const strComparisonOpLevelId: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_LevelId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_LevelId,
      objvRTSysSkillRelaCond.levelId,
      strComparisonOpLevelId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_LevelName,
    ) == true
  ) {
    const strComparisonOpLevelName: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_LevelName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_LevelName,
      objvRTSysSkillRelaCond.levelName,
      strComparisonOpLevelName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_SkillUpdUser,
    ) == true
  ) {
    const strComparisonOpSkillUpdUser: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_SkillUpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_SkillUpdUser,
      objvRTSysSkillRelaCond.skillUpdUser,
      strComparisonOpSkillUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_SkillUpdDate,
    ) == true
  ) {
    const strComparisonOpSkillUpdDate: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_SkillUpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_SkillUpdDate,
      objvRTSysSkillRelaCond.skillUpdDate,
      strComparisonOpSkillUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTSysSkillRelaEN.con_OrderNum,
      objvRTSysSkillRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_IdCurrEduCls,
      objvRTSysSkillRelaCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_TopicProposePeople,
    ) == true
  ) {
    const strComparisonOpTopicProposePeople: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_TopicProposePeople];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_TopicProposePeople,
      objvRTSysSkillRelaCond.topicProposePeople,
      strComparisonOpTopicProposePeople,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_IsSubmit,
    ) == true
  ) {
    if (objvRTSysSkillRelaCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvRTSysSkillRelaEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvRTSysSkillRelaEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_AppraiseCount,
    ) == true
  ) {
    const strComparisonOpAppraiseCount: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_AppraiseCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTSysSkillRelaEN.con_AppraiseCount,
      objvRTSysSkillRelaCond.appraiseCount,
      strComparisonOpAppraiseCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTSysSkillRelaEN.con_Score,
      objvRTSysSkillRelaCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTSysSkillRelaEN.con_StuScore,
      objvRTSysSkillRelaCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTSysSkillRelaEN.con_TeaScore,
      objvRTSysSkillRelaCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_PdfContent,
    ) == true
  ) {
    const strComparisonOpPdfContent: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_PdfContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_PdfContent,
      objvRTSysSkillRelaCond.pdfContent,
      strComparisonOpPdfContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_PdfPageNum,
    ) == true
  ) {
    const strComparisonOpPdfPageNum: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_PdfPageNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTSysSkillRelaEN.con_PdfPageNum,
      objvRTSysSkillRelaCond.pdfPageNum,
      strComparisonOpPdfPageNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_CitationCount,
    ) == true
  ) {
    const strComparisonOpCitationCount: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_CitationCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTSysSkillRelaEN.con_CitationCount,
      objvRTSysSkillRelaCond.citationCount,
      strComparisonOpCitationCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_VersionCount,
    ) == true
  ) {
    const strComparisonOpVersionCount: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_VersionCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTSysSkillRelaEN.con_VersionCount,
      objvRTSysSkillRelaCond.versionCount,
      strComparisonOpVersionCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_OperationTypeName,
    ) == true
  ) {
    const strComparisonOpOperationTypeName: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_OperationTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_OperationTypeName,
      objvRTSysSkillRelaCond.operationTypeName,
      strComparisonOpOperationTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_OkCount,
    ) == true
  ) {
    const strComparisonOpOkCount: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_OkCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTSysSkillRelaEN.con_OkCount,
      objvRTSysSkillRelaCond.okCount,
      strComparisonOpOkCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_CitationId,
    ) == true
  ) {
    const strComparisonOpCitationId: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_CitationId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_CitationId,
      objvRTSysSkillRelaCond.citationId,
      strComparisonOpCitationId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTSysSkillRelaEN.con_mId,
      objvRTSysSkillRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_TopicId,
      objvRTSysSkillRelaCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_SkillId,
    ) == true
  ) {
    const strComparisonOpSkillId: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_SkillId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_SkillId,
      objvRTSysSkillRelaCond.skillId,
      strComparisonOpSkillId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_UpdDate,
      objvRTSysSkillRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_Memo,
      objvRTSysSkillRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_UpdUser,
      objvRTSysSkillRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_CreateDate,
    ) == true
  ) {
    const strComparisonOpCreateDate: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_CreateDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_CreateDate,
      objvRTSysSkillRelaCond.createDate,
      strComparisonOpCreateDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_ShareId,
    ) == true
  ) {
    const strComparisonOpShareId: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_ShareId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_ShareId,
      objvRTSysSkillRelaCond.shareId,
      strComparisonOpShareId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTSysSkillRelaCond.dicFldComparisonOp,
      clsvRTSysSkillRelaEN.con_ClassificationId,
    ) == true
  ) {
    const strComparisonOpClassificationId: string =
      objvRTSysSkillRelaCond.dicFldComparisonOp[clsvRTSysSkillRelaEN.con_ClassificationId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTSysSkillRelaEN.con_ClassificationId,
      objvRTSysSkillRelaCond.classificationId,
      strComparisonOpClassificationId,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vRTSysSkillRela(vRTSysSkillRela),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vRTSysSkillRela_GetUniCondStr(objvRTSysSkillRelaEN: clsvRTSysSkillRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId = '{0}'", objvRTSysSkillRelaEN.mId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vRTSysSkillRela(vRTSysSkillRela),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vRTSysSkillRela_GetUniCondStr4Update(
  objvRTSysSkillRelaEN: clsvRTSysSkillRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objvRTSysSkillRelaEN.mId);
  strWhereCond += Format(" and mId = '{0}'", objvRTSysSkillRelaEN.mId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvRTSysSkillRelaENS:源对象
 * @param objvRTSysSkillRelaENT:目标对象
 */
export function vRTSysSkillRela_CopyObjTo(
  objvRTSysSkillRelaENS: clsvRTSysSkillRelaEN,
  objvRTSysSkillRelaENT: clsvRTSysSkillRelaEN,
): void {
  objvRTSysSkillRelaENT.topicName = objvRTSysSkillRelaENS.topicName; //栏目主题
  objvRTSysSkillRelaENT.skillName = objvRTSysSkillRelaENS.skillName; //技能名称
  objvRTSysSkillRelaENT.operationTypeId = objvRTSysSkillRelaENS.operationTypeId; //操作类型ID
  objvRTSysSkillRelaENT.process = objvRTSysSkillRelaENS.process; //实施过程
  objvRTSysSkillRelaENT.levelId = objvRTSysSkillRelaENS.levelId; //级别Id
  objvRTSysSkillRelaENT.levelName = objvRTSysSkillRelaENS.levelName; //级别名称
  objvRTSysSkillRelaENT.skillUpdUser = objvRTSysSkillRelaENS.skillUpdUser; //SkillUpdUser
  objvRTSysSkillRelaENT.skillUpdDate = objvRTSysSkillRelaENS.skillUpdDate; //SkillUpdDate
  objvRTSysSkillRelaENT.orderNum = objvRTSysSkillRelaENS.orderNum; //序号
  objvRTSysSkillRelaENT.idCurrEduCls = objvRTSysSkillRelaENS.idCurrEduCls; //教学班流水号
  objvRTSysSkillRelaENT.topicProposePeople = objvRTSysSkillRelaENS.topicProposePeople; //主题提出人
  objvRTSysSkillRelaENT.topicContent = objvRTSysSkillRelaENS.topicContent; //主题内容
  objvRTSysSkillRelaENT.isSubmit = objvRTSysSkillRelaENS.isSubmit; //是否提交
  objvRTSysSkillRelaENT.appraiseCount = objvRTSysSkillRelaENS.appraiseCount; //评论数
  objvRTSysSkillRelaENT.score = objvRTSysSkillRelaENS.score; //评分
  objvRTSysSkillRelaENT.stuScore = objvRTSysSkillRelaENS.stuScore; //学生平均分
  objvRTSysSkillRelaENT.teaScore = objvRTSysSkillRelaENS.teaScore; //教师评分
  objvRTSysSkillRelaENT.pdfContent = objvRTSysSkillRelaENS.pdfContent; //Pdf内容
  objvRTSysSkillRelaENT.pdfPageNum = objvRTSysSkillRelaENS.pdfPageNum; //Pdf页码
  objvRTSysSkillRelaENT.citationCount = objvRTSysSkillRelaENS.citationCount; //引用统计
  objvRTSysSkillRelaENT.versionCount = objvRTSysSkillRelaENS.versionCount; //版本统计
  objvRTSysSkillRelaENT.operationTypeName = objvRTSysSkillRelaENS.operationTypeName; //操作类型名
  objvRTSysSkillRelaENT.okCount = objvRTSysSkillRelaENS.okCount; //点赞统计
  objvRTSysSkillRelaENT.citationId = objvRTSysSkillRelaENS.citationId; //引用Id
  objvRTSysSkillRelaENT.mId = objvRTSysSkillRelaENS.mId; //mId
  objvRTSysSkillRelaENT.topicId = objvRTSysSkillRelaENS.topicId; //主题Id
  objvRTSysSkillRelaENT.skillId = objvRTSysSkillRelaENS.skillId; //技能Id
  objvRTSysSkillRelaENT.updDate = objvRTSysSkillRelaENS.updDate; //修改日期
  objvRTSysSkillRelaENT.memo = objvRTSysSkillRelaENS.memo; //备注
  objvRTSysSkillRelaENT.updUser = objvRTSysSkillRelaENS.updUser; //修改人
  objvRTSysSkillRelaENT.createDate = objvRTSysSkillRelaENS.createDate; //建立日期
  objvRTSysSkillRelaENT.shareId = objvRTSysSkillRelaENS.shareId; //分享Id
  objvRTSysSkillRelaENT.classificationId = objvRTSysSkillRelaENS.classificationId; //分类Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvRTSysSkillRelaENS:源对象
 * @param objvRTSysSkillRelaENT:目标对象
 */
export function vRTSysSkillRela_GetObjFromJsonObj(
  objvRTSysSkillRelaENS: clsvRTSysSkillRelaEN,
): clsvRTSysSkillRelaEN {
  const objvRTSysSkillRelaENT: clsvRTSysSkillRelaEN = new clsvRTSysSkillRelaEN();
  ObjectAssign(objvRTSysSkillRelaENT, objvRTSysSkillRelaENS);
  return objvRTSysSkillRelaENT;
}
