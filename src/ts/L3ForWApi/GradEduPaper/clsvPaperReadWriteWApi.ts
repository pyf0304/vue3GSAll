/**
 * 类名:clsvPaperReadWriteWApi
 * 表名:vPaperReadWrite(01120550)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:50
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
 * v论文读写表(vPaperReadWrite)
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
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperReadWriteEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vPaperReadWrite_Controller = 'vPaperReadWriteApi';
export const vPaperReadWrite_ConstructorName = 'vPaperReadWrite';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPaperRWId:关键字
 * @returns 对象
 **/
export async function vPaperReadWrite_GetObjByPaperRWIdAsync(
  strPaperRWId: string,
): Promise<clsvPaperReadWriteEN | null> {
  const strThisFuncName = 'GetObjByPaperRWIdAsync';

  if (IsNullOrEmpty(strPaperRWId) == true) {
    const strMsg = Format(
      '参数:[strPaperRWId]不能为空!(In clsvPaperReadWriteWApi.GetObjByPaperRWIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPaperRWId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPaperRWId]的长度:[{0}]不正确!(clsvPaperReadWriteWApi.GetObjByPaperRWIdAsync)',
      strPaperRWId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPaperRWId';
  const strUrl = GetWebApiUrl(vPaperReadWrite_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPaperRWId,
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
      const objvPaperReadWrite = vPaperReadWrite_GetObjFromJsonObj(returnObj);
      return objvPaperReadWrite;
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
        vPaperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPaperReadWrite_ConstructorName,
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
 * @param strPaperRWId:所给的关键字
 * @returns 对象
 */
export async function vPaperReadWrite_GetObjByPaperRWIdCache(
  strPaperRWId: string,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPaperRWIdCache';

  if (IsNullOrEmpty(strPaperRWId) == true) {
    const strMsg = Format(
      '参数:[strPaperRWId]不能为空!(In clsvPaperReadWriteWApi.GetObjByPaperRWIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPaperRWId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPaperRWId]的长度:[{0}]不正确!(clsvPaperReadWriteWApi.GetObjByPaperRWIdCache)',
      strPaperRWId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPaperReadWriteObjLstCache = await vPaperReadWrite_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrvPaperReadWriteSel = arrvPaperReadWriteObjLstCache.filter(
      (x) => x.paperRWId == strPaperRWId,
    );
    let objvPaperReadWrite: clsvPaperReadWriteEN;
    if (arrvPaperReadWriteSel.length > 0) {
      objvPaperReadWrite = arrvPaperReadWriteSel[0];
      return objvPaperReadWrite;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvPaperReadWriteConst = await vPaperReadWrite_GetObjByPaperRWIdAsync(strPaperRWId);
        if (objvPaperReadWriteConst != null) {
          vPaperReadWrite_ReFreshThisCache(strIdCurrEduCls);
          return objvPaperReadWriteConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPaperRWId,
      vPaperReadWrite_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strPaperRWId:所给的关键字
 * @returns 对象
 */
export async function vPaperReadWrite_GetObjByPaperRWIdlocalStorage(strPaperRWId: string) {
  const strThisFuncName = 'GetObjByPaperRWIdlocalStorage';

  if (IsNullOrEmpty(strPaperRWId) == true) {
    const strMsg = Format(
      '参数:[strPaperRWId]不能为空!(In clsvPaperReadWriteWApi.GetObjByPaperRWIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPaperRWId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPaperRWId]的长度:[{0}]不正确!(clsvPaperReadWriteWApi.GetObjByPaperRWIdlocalStorage)',
      strPaperRWId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvPaperReadWriteEN._CurrTabName, strPaperRWId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvPaperReadWriteCache: clsvPaperReadWriteEN = JSON.parse(strTempObj);
    return objvPaperReadWriteCache;
  }
  try {
    const objvPaperReadWrite = await vPaperReadWrite_GetObjByPaperRWIdAsync(strPaperRWId);
    if (objvPaperReadWrite != null) {
      localStorage.setItem(strKey, JSON.stringify(objvPaperReadWrite));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvPaperReadWrite;
    }
    return objvPaperReadWrite;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPaperRWId,
      vPaperReadWrite_ConstructorName,
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
 * @param strPaperRWId:所给的关键字
 * @returns 对象
 */
export async function vPaperReadWrite_GetNameByPaperRWIdCache(
  strPaperRWId: string,
  strIdCurrEduCls: string,
) {
  if (IsNullOrEmpty(strPaperRWId) == true) {
    const strMsg = Format(
      '参数:[strPaperRWId]不能为空!(In clsvPaperReadWriteWApi.GetNameByPaperRWIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPaperRWId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPaperRWId]的长度:[{0}]不正确!(clsvPaperReadWriteWApi.GetNameByPaperRWIdCache)',
      strPaperRWId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPaperReadWriteObjLstCache = await vPaperReadWrite_GetObjLstCache(strIdCurrEduCls);
  if (arrvPaperReadWriteObjLstCache == null) return '';
  try {
    const arrvPaperReadWriteSel = arrvPaperReadWriteObjLstCache.filter(
      (x) => x.paperRWId == strPaperRWId,
    );
    let objvPaperReadWrite: clsvPaperReadWriteEN;
    if (arrvPaperReadWriteSel.length > 0) {
      objvPaperReadWrite = arrvPaperReadWriteSel[0];
      return objvPaperReadWrite.operationTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strPaperRWId,
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
export async function vPaperReadWrite_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsvPaperReadWriteWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvPaperReadWriteWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvPaperReadWriteEN.con_PaperRWId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvPaperReadWriteEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvPaperReadWriteEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strPaperRWId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvPaperReadWrite = await vPaperReadWrite_GetObjByPaperRWIdCache(
    strPaperRWId,
    strIdCurrEduClsClassfy,
  );
  if (objvPaperReadWrite == null) return '';
  if (objvPaperReadWrite.GetFldValue(strOutFldName) == null) return '';
  return objvPaperReadWrite.GetFldValue(strOutFldName).toString();
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
export function vPaperReadWrite_SortFunDefa(
  a: clsvPaperReadWriteEN,
  b: clsvPaperReadWriteEN,
): number {
  return a.paperRWId.localeCompare(b.paperRWId);
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
export function vPaperReadWrite_SortFunDefa2Fld(
  a: clsvPaperReadWriteEN,
  b: clsvPaperReadWriteEN,
): number {
  if (a.readerId == b.readerId) return a.paperId.localeCompare(b.paperId);
  else return a.readerId.localeCompare(b.readerId);
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
export function vPaperReadWrite_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvPaperReadWriteEN.con_PaperRWId:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          return a.paperRWId.localeCompare(b.paperRWId);
        };
      case clsvPaperReadWriteEN.con_ReaderId:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.readerId == null) return -1;
          if (b.readerId == null) return 1;
          return a.readerId.localeCompare(b.readerId);
        };
      case clsvPaperReadWriteEN.con_PaperId:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.paperId == null) return -1;
          if (b.paperId == null) return 1;
          return a.paperId.localeCompare(b.paperId);
        };
      case clsvPaperReadWriteEN.con_PaperTitle:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.paperTitle == null) return -1;
          if (b.paperTitle == null) return 1;
          return a.paperTitle.localeCompare(b.paperTitle);
        };
      case clsvPaperReadWriteEN.con_PaperContent:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.paperContent == null) return -1;
          if (b.paperContent == null) return 1;
          return a.paperContent.localeCompare(b.paperContent);
        };
      case clsvPaperReadWriteEN.con_Periodical:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.periodical == null) return -1;
          if (b.periodical == null) return 1;
          return a.periodical.localeCompare(b.periodical);
        };
      case clsvPaperReadWriteEN.con_Author:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.author == null) return -1;
          if (b.author == null) return 1;
          return a.author.localeCompare(b.author);
        };
      case clsvPaperReadWriteEN.con_Keyword:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.keyword == null) return -1;
          if (b.keyword == null) return 1;
          return a.keyword.localeCompare(b.keyword);
        };
      case clsvPaperReadWriteEN.con_ResearchQuestion:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.researchQuestion == null) return -1;
          if (b.researchQuestion == null) return 1;
          return a.researchQuestion.localeCompare(b.researchQuestion);
        };
      case clsvPaperReadWriteEN.con_OperationTypeId:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          return a.operationTypeId.localeCompare(b.operationTypeId);
        };
      case clsvPaperReadWriteEN.con_OperationTypeName:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          return a.operationTypeName.localeCompare(b.operationTypeName);
        };
      case clsvPaperReadWriteEN.con_UpdDate:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvPaperReadWriteEN.con_Memo:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvPaperReadWriteEN.con_LiteratureLink:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.literatureLink == null) return -1;
          if (b.literatureLink == null) return 1;
          return a.literatureLink.localeCompare(b.literatureLink);
        };
      case clsvPaperReadWriteEN.con_LiteratureSources:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.literatureSources == null) return -1;
          if (b.literatureSources == null) return 1;
          return a.literatureSources.localeCompare(b.literatureSources);
        };
      case clsvPaperReadWriteEN.con_LiteratureTypeId:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.literatureTypeId == null) return -1;
          if (b.literatureTypeId == null) return 1;
          return a.literatureTypeId.localeCompare(b.literatureTypeId);
        };
      case clsvPaperReadWriteEN.con_LiteratureTypeName:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.literatureTypeName == null) return -1;
          if (b.literatureTypeName == null) return 1;
          return a.literatureTypeName.localeCompare(b.literatureTypeName);
        };
      case clsvPaperReadWriteEN.con_UploadfileUrl:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.uploadfileUrl == null) return -1;
          if (b.uploadfileUrl == null) return 1;
          return a.uploadfileUrl.localeCompare(b.uploadfileUrl);
        };
      case clsvPaperReadWriteEN.con_IsPublic:
        return (a: clsvPaperReadWriteEN) => {
          if (a.isPublic == true) return 1;
          else return -1;
        };
      case clsvPaperReadWriteEN.con_IsSubmit:
        return (a: clsvPaperReadWriteEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsvPaperReadWriteEN.con_Submitter:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.submitter == null) return -1;
          if (b.submitter == null) return 1;
          return a.submitter.localeCompare(b.submitter);
        };
      case clsvPaperReadWriteEN.con_Pcount:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          return a.pcount - b.pcount;
        };
      case clsvPaperReadWriteEN.con_TeaCount:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          return a.teaCount - b.teaCount;
        };
      case clsvPaperReadWriteEN.con_IdCurrEduCls:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvPaperReadWriteEN.con_SubVCount:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          return a.subVCount - b.subVCount;
        };
      case clsvPaperReadWriteEN.con_CreateDate:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.createDate == null) return -1;
          if (b.createDate == null) return 1;
          return a.createDate.localeCompare(b.createDate);
        };
      case clsvPaperReadWriteEN.con_ShareId:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.shareId == null) return -1;
          if (b.shareId == null) return 1;
          return a.shareId.localeCompare(b.shareId);
        };
      case clsvPaperReadWriteEN.con_UpdUser:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPaperReadWrite]中不存在!(in ${vPaperReadWrite_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvPaperReadWriteEN.con_PaperRWId:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          return b.paperRWId.localeCompare(a.paperRWId);
        };
      case clsvPaperReadWriteEN.con_ReaderId:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.readerId == null) return -1;
          if (a.readerId == null) return 1;
          return b.readerId.localeCompare(a.readerId);
        };
      case clsvPaperReadWriteEN.con_PaperId:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.paperId == null) return -1;
          if (a.paperId == null) return 1;
          return b.paperId.localeCompare(a.paperId);
        };
      case clsvPaperReadWriteEN.con_PaperTitle:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.paperTitle == null) return -1;
          if (a.paperTitle == null) return 1;
          return b.paperTitle.localeCompare(a.paperTitle);
        };
      case clsvPaperReadWriteEN.con_PaperContent:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.paperContent == null) return -1;
          if (a.paperContent == null) return 1;
          return b.paperContent.localeCompare(a.paperContent);
        };
      case clsvPaperReadWriteEN.con_Periodical:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.periodical == null) return -1;
          if (a.periodical == null) return 1;
          return b.periodical.localeCompare(a.periodical);
        };
      case clsvPaperReadWriteEN.con_Author:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.author == null) return -1;
          if (a.author == null) return 1;
          return b.author.localeCompare(a.author);
        };
      case clsvPaperReadWriteEN.con_Keyword:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.keyword == null) return -1;
          if (a.keyword == null) return 1;
          return b.keyword.localeCompare(a.keyword);
        };
      case clsvPaperReadWriteEN.con_ResearchQuestion:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.researchQuestion == null) return -1;
          if (a.researchQuestion == null) return 1;
          return b.researchQuestion.localeCompare(a.researchQuestion);
        };
      case clsvPaperReadWriteEN.con_OperationTypeId:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          return b.operationTypeId.localeCompare(a.operationTypeId);
        };
      case clsvPaperReadWriteEN.con_OperationTypeName:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          return b.operationTypeName.localeCompare(a.operationTypeName);
        };
      case clsvPaperReadWriteEN.con_UpdDate:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvPaperReadWriteEN.con_Memo:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvPaperReadWriteEN.con_LiteratureLink:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.literatureLink == null) return -1;
          if (a.literatureLink == null) return 1;
          return b.literatureLink.localeCompare(a.literatureLink);
        };
      case clsvPaperReadWriteEN.con_LiteratureSources:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.literatureSources == null) return -1;
          if (a.literatureSources == null) return 1;
          return b.literatureSources.localeCompare(a.literatureSources);
        };
      case clsvPaperReadWriteEN.con_LiteratureTypeId:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.literatureTypeId == null) return -1;
          if (a.literatureTypeId == null) return 1;
          return b.literatureTypeId.localeCompare(a.literatureTypeId);
        };
      case clsvPaperReadWriteEN.con_LiteratureTypeName:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.literatureTypeName == null) return -1;
          if (a.literatureTypeName == null) return 1;
          return b.literatureTypeName.localeCompare(a.literatureTypeName);
        };
      case clsvPaperReadWriteEN.con_UploadfileUrl:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.uploadfileUrl == null) return -1;
          if (a.uploadfileUrl == null) return 1;
          return b.uploadfileUrl.localeCompare(a.uploadfileUrl);
        };
      case clsvPaperReadWriteEN.con_IsPublic:
        return (b: clsvPaperReadWriteEN) => {
          if (b.isPublic == true) return 1;
          else return -1;
        };
      case clsvPaperReadWriteEN.con_IsSubmit:
        return (b: clsvPaperReadWriteEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsvPaperReadWriteEN.con_Submitter:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.submitter == null) return -1;
          if (a.submitter == null) return 1;
          return b.submitter.localeCompare(a.submitter);
        };
      case clsvPaperReadWriteEN.con_Pcount:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          return b.pcount - a.pcount;
        };
      case clsvPaperReadWriteEN.con_TeaCount:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          return b.teaCount - a.teaCount;
        };
      case clsvPaperReadWriteEN.con_IdCurrEduCls:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvPaperReadWriteEN.con_SubVCount:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          return b.subVCount - a.subVCount;
        };
      case clsvPaperReadWriteEN.con_CreateDate:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.createDate == null) return -1;
          if (a.createDate == null) return 1;
          return b.createDate.localeCompare(a.createDate);
        };
      case clsvPaperReadWriteEN.con_ShareId:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.shareId == null) return -1;
          if (a.shareId == null) return 1;
          return b.shareId.localeCompare(a.shareId);
        };
      case clsvPaperReadWriteEN.con_UpdUser:
        return (a: clsvPaperReadWriteEN, b: clsvPaperReadWriteEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPaperReadWrite]中不存在!(in ${vPaperReadWrite_ConstructorName}.${strThisFuncName})`;
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
export async function vPaperReadWrite_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvPaperReadWriteEN.con_PaperRWId:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.paperRWId === value;
      };
    case clsvPaperReadWriteEN.con_ReaderId:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.readerId === value;
      };
    case clsvPaperReadWriteEN.con_PaperId:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.paperId === value;
      };
    case clsvPaperReadWriteEN.con_PaperTitle:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.paperTitle === value;
      };
    case clsvPaperReadWriteEN.con_PaperContent:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.paperContent === value;
      };
    case clsvPaperReadWriteEN.con_Periodical:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.periodical === value;
      };
    case clsvPaperReadWriteEN.con_Author:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.author === value;
      };
    case clsvPaperReadWriteEN.con_Keyword:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.keyword === value;
      };
    case clsvPaperReadWriteEN.con_ResearchQuestion:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.researchQuestion === value;
      };
    case clsvPaperReadWriteEN.con_OperationTypeId:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.operationTypeId === value;
      };
    case clsvPaperReadWriteEN.con_OperationTypeName:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.operationTypeName === value;
      };
    case clsvPaperReadWriteEN.con_UpdDate:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.updDate === value;
      };
    case clsvPaperReadWriteEN.con_Memo:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.memo === value;
      };
    case clsvPaperReadWriteEN.con_LiteratureLink:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.literatureLink === value;
      };
    case clsvPaperReadWriteEN.con_LiteratureSources:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.literatureSources === value;
      };
    case clsvPaperReadWriteEN.con_LiteratureTypeId:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.literatureTypeId === value;
      };
    case clsvPaperReadWriteEN.con_LiteratureTypeName:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.literatureTypeName === value;
      };
    case clsvPaperReadWriteEN.con_UploadfileUrl:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.uploadfileUrl === value;
      };
    case clsvPaperReadWriteEN.con_IsPublic:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.isPublic === value;
      };
    case clsvPaperReadWriteEN.con_IsSubmit:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.isSubmit === value;
      };
    case clsvPaperReadWriteEN.con_Submitter:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.submitter === value;
      };
    case clsvPaperReadWriteEN.con_Pcount:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.pcount === value;
      };
    case clsvPaperReadWriteEN.con_TeaCount:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.teaCount === value;
      };
    case clsvPaperReadWriteEN.con_IdCurrEduCls:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvPaperReadWriteEN.con_SubVCount:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.subVCount === value;
      };
    case clsvPaperReadWriteEN.con_CreateDate:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.createDate === value;
      };
    case clsvPaperReadWriteEN.con_ShareId:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.shareId === value;
      };
    case clsvPaperReadWriteEN.con_UpdUser:
      return (obj: clsvPaperReadWriteEN) => {
        return obj.updUser === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vPaperReadWrite]中不存在!(in ${vPaperReadWrite_ConstructorName}.${strThisFuncName})`;
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
export async function vPaperReadWrite_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsvPaperReadWriteWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvPaperReadWriteWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvPaperReadWriteEN.con_PaperRWId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvPaperReadWrite = await vPaperReadWrite_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrvPaperReadWrite == null) return [];
  let arrvPaperReadWriteSel = arrvPaperReadWrite;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvPaperReadWriteSel.length == 0) return [];
  return arrvPaperReadWriteSel.map((x) => x.paperRWId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vPaperReadWrite_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPaperReadWrite_Controller, strAction);

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
        vPaperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPaperReadWrite_ConstructorName,
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
export async function vPaperReadWrite_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPaperReadWrite_Controller, strAction);

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
        vPaperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPaperReadWrite_ConstructorName,
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
export async function vPaperReadWrite_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvPaperReadWriteEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vPaperReadWrite_Controller, strAction);

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
      const objvPaperReadWrite = vPaperReadWrite_GetObjFromJsonObj(returnObj);
      return objvPaperReadWrite;
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
        vPaperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPaperReadWrite_ConstructorName,
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
export async function vPaperReadWrite_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPaperReadWriteEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPaperReadWriteEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvPaperReadWriteEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvPaperReadWriteEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPaperReadWriteEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvPaperReadWriteExObjLstCache: Array<clsvPaperReadWriteEN> = CacheHelper.Get(strKey);
    const arrvPaperReadWriteObjLstT = vPaperReadWrite_GetObjLstByJSONObjLst(
      arrvPaperReadWriteExObjLstCache,
    );
    return arrvPaperReadWriteObjLstT;
  }
  try {
    const arrvPaperReadWriteExObjLst = await vPaperReadWrite_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvPaperReadWriteExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPaperReadWriteExObjLst.length,
    );
    console.log(strInfo);
    return arrvPaperReadWriteExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPaperReadWrite_ConstructorName,
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
export async function vPaperReadWrite_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPaperReadWriteEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPaperReadWriteEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvPaperReadWriteEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvPaperReadWriteEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvPaperReadWriteEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPaperReadWriteEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPaperReadWriteExObjLstCache: Array<clsvPaperReadWriteEN> = JSON.parse(strTempObjLst);
    const arrvPaperReadWriteObjLstT = vPaperReadWrite_GetObjLstByJSONObjLst(
      arrvPaperReadWriteExObjLstCache,
    );
    return arrvPaperReadWriteObjLstT;
  }
  try {
    const arrvPaperReadWriteExObjLst = await vPaperReadWrite_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvPaperReadWriteExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPaperReadWriteExObjLst.length,
    );
    console.log(strInfo);
    return arrvPaperReadWriteExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPaperReadWrite_ConstructorName,
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
export async function vPaperReadWrite_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvPaperReadWriteEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPaperReadWriteObjLstCache: Array<clsvPaperReadWriteEN> = JSON.parse(strTempObjLst);
    return arrvPaperReadWriteObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vPaperReadWrite_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvPaperReadWriteEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vPaperReadWrite_Controller, strAction);

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
          vPaperReadWrite_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPaperReadWrite_GetObjLstByJSONObjLst(returnObjLst);
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
        vPaperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPaperReadWrite_ConstructorName,
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
export async function vPaperReadWrite_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPaperReadWriteEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPaperReadWriteEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvPaperReadWriteEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvPaperReadWriteEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvPaperReadWriteEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPaperReadWriteEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPaperReadWriteExObjLstCache: Array<clsvPaperReadWriteEN> = JSON.parse(strTempObjLst);
    const arrvPaperReadWriteObjLstT = vPaperReadWrite_GetObjLstByJSONObjLst(
      arrvPaperReadWriteExObjLstCache,
    );
    return arrvPaperReadWriteObjLstT;
  }
  try {
    const arrvPaperReadWriteExObjLst = await vPaperReadWrite_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvPaperReadWriteExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPaperReadWriteExObjLst.length,
    );
    console.log(strInfo);
    return arrvPaperReadWriteExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPaperReadWrite_ConstructorName,
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
export async function vPaperReadWrite_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvPaperReadWriteEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPaperReadWriteObjLstCache: Array<clsvPaperReadWriteEN> = JSON.parse(strTempObjLst);
    return arrvPaperReadWriteObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPaperReadWrite_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsvPaperReadWriteEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsvPaperReadWriteWApi.vPaperReadWrite_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvPaperReadWriteWApi.vPaperReadWrite_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvPaperReadWriteObjLstCache;
  switch (clsvPaperReadWriteEN.CacheModeId) {
    case '04': //sessionStorage
      arrvPaperReadWriteObjLstCache = await vPaperReadWrite_GetObjLstsessionStorage(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrvPaperReadWriteObjLstCache = await vPaperReadWrite_GetObjLstlocalStorage(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrvPaperReadWriteObjLstCache = await vPaperReadWrite_GetObjLstClientCache(strIdCurrEduCls);
      break;
    default:
      arrvPaperReadWriteObjLstCache = await vPaperReadWrite_GetObjLstClientCache(strIdCurrEduCls);
      break;
  }
  return arrvPaperReadWriteObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPaperReadWrite_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvPaperReadWriteObjLstCache;
  switch (clsvPaperReadWriteEN.CacheModeId) {
    case '04': //sessionStorage
      arrvPaperReadWriteObjLstCache = await vPaperReadWrite_GetObjLstsessionStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrvPaperReadWriteObjLstCache = await vPaperReadWrite_GetObjLstlocalStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrvPaperReadWriteObjLstCache = null;
      break;
    default:
      arrvPaperReadWriteObjLstCache = null;
      break;
  }
  return arrvPaperReadWriteObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPaperRWIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vPaperReadWrite_GetSubObjLstCache(
  objvPaperReadWriteCond: clsvPaperReadWriteEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvPaperReadWriteObjLstCache = await vPaperReadWrite_GetObjLstCache(strIdCurrEduCls);
  let arrvPaperReadWriteSel = arrvPaperReadWriteObjLstCache;
  if (
    objvPaperReadWriteCond.sfFldComparisonOp == null ||
    objvPaperReadWriteCond.sfFldComparisonOp == ''
  )
    return arrvPaperReadWriteSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPaperReadWriteCond.sfFldComparisonOp,
  );
  //console.log("clsvPaperReadWriteWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPaperReadWriteCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPaperReadWriteCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvPaperReadWriteSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPaperReadWriteCond),
      vPaperReadWrite_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPaperReadWriteEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPaperRWId:关键字列表
 * @returns 对象列表
 **/
export async function vPaperReadWrite_GetObjLstByPaperRWIdLstAsync(
  arrPaperRWId: Array<string>,
): Promise<Array<clsvPaperReadWriteEN>> {
  const strThisFuncName = 'GetObjLstByPaperRWIdLstAsync';
  const strAction = 'GetObjLstByPaperRWIdLst';
  const strUrl = GetWebApiUrl(vPaperReadWrite_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPaperRWId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vPaperReadWrite_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPaperReadWrite_GetObjLstByJSONObjLst(returnObjLst);
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
        vPaperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPaperReadWrite_ConstructorName,
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
 * @param arrstrPaperRWIdLst:关键字列表
 * @returns 对象列表
 */
export async function vPaperReadWrite_GetObjLstByPaperRWIdLstCache(
  arrPaperRWIdLst: Array<string>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPaperRWIdLstCache';
  try {
    const arrvPaperReadWriteObjLstCache = await vPaperReadWrite_GetObjLstCache(strIdCurrEduCls);
    const arrvPaperReadWriteSel = arrvPaperReadWriteObjLstCache.filter(
      (x) => arrPaperRWIdLst.indexOf(x.paperRWId) > -1,
    );
    return arrvPaperReadWriteSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPaperRWIdLst.join(','),
      vPaperReadWrite_ConstructorName,
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
export async function vPaperReadWrite_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvPaperReadWriteEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vPaperReadWrite_Controller, strAction);

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
          vPaperReadWrite_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPaperReadWrite_GetObjLstByJSONObjLst(returnObjLst);
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
        vPaperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPaperReadWrite_ConstructorName,
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
export async function vPaperReadWrite_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvPaperReadWriteEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vPaperReadWrite_Controller, strAction);

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
          vPaperReadWrite_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPaperReadWrite_GetObjLstByJSONObjLst(returnObjLst);
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
        vPaperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPaperReadWrite_ConstructorName,
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
export async function vPaperReadWrite_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPaperReadWriteEN>();
  const arrvPaperReadWriteObjLstCache = await vPaperReadWrite_GetObjLstCache(strIdCurrEduCls);
  if (arrvPaperReadWriteObjLstCache.length == 0) return arrvPaperReadWriteObjLstCache;
  let arrvPaperReadWriteSel = arrvPaperReadWriteObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvPaperReadWriteCond = new clsvPaperReadWriteEN();
  ObjectAssign(objvPaperReadWriteCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvPaperReadWriteWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPaperReadWriteCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPaperReadWriteSel.length == 0) return arrvPaperReadWriteSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPaperReadWriteSel = arrvPaperReadWriteSel.sort(
        vPaperReadWrite_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvPaperReadWriteSel = arrvPaperReadWriteSel.sort(objPagerPara.sortFun);
    }
    arrvPaperReadWriteSel = arrvPaperReadWriteSel.slice(intStart, intEnd);
    return arrvPaperReadWriteSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPaperReadWrite_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPaperReadWriteEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vPaperReadWrite_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPaperReadWriteEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPaperReadWriteEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vPaperReadWrite_Controller, strAction);

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
          vPaperReadWrite_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPaperReadWrite_GetObjLstByJSONObjLst(returnObjLst);
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
        vPaperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPaperReadWrite_ConstructorName,
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
 * @param objstrPaperRWIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vPaperReadWrite_IsExistRecordCache(
  objvPaperReadWriteCond: clsvPaperReadWriteEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvPaperReadWriteObjLstCache = await vPaperReadWrite_GetObjLstCache(strIdCurrEduCls);
  if (arrvPaperReadWriteObjLstCache == null) return false;
  let arrvPaperReadWriteSel = arrvPaperReadWriteObjLstCache;
  if (
    objvPaperReadWriteCond.sfFldComparisonOp == null ||
    objvPaperReadWriteCond.sfFldComparisonOp == ''
  )
    return arrvPaperReadWriteSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPaperReadWriteCond.sfFldComparisonOp,
  );
  //console.log("clsvPaperReadWriteWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPaperReadWriteCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPaperReadWriteCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPaperReadWriteSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvPaperReadWriteCond),
      vPaperReadWrite_ConstructorName,
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
export async function vPaperReadWrite_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vPaperReadWrite_Controller, strAction);

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
        vPaperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPaperReadWrite_ConstructorName,
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
 * @param strPaperRWId:所给的关键字
 * @returns 对象
 */
export async function vPaperReadWrite_IsExistCache(strPaperRWId: string, strIdCurrEduCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvPaperReadWriteObjLstCache = await vPaperReadWrite_GetObjLstCache(strIdCurrEduCls);
  if (arrvPaperReadWriteObjLstCache == null) return false;
  try {
    const arrvPaperReadWriteSel = arrvPaperReadWriteObjLstCache.filter(
      (x) => x.paperRWId == strPaperRWId,
    );
    if (arrvPaperReadWriteSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strPaperRWId,
      vPaperReadWrite_ConstructorName,
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
 * @param strPaperRWId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vPaperReadWrite_IsExistAsync(strPaperRWId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vPaperReadWrite_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPaperRWId,
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
        vPaperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPaperReadWrite_ConstructorName,
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
export async function vPaperReadWrite_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vPaperReadWrite_Controller, strAction);

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
        vPaperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPaperReadWrite_ConstructorName,
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
 * @param objvPaperReadWriteCond:条件对象
 * @returns 对象列表记录数
 */
export async function vPaperReadWrite_GetRecCountByCondCache(
  objvPaperReadWriteCond: clsvPaperReadWriteEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvPaperReadWriteObjLstCache = await vPaperReadWrite_GetObjLstCache(strIdCurrEduCls);
  if (arrvPaperReadWriteObjLstCache == null) return 0;
  let arrvPaperReadWriteSel = arrvPaperReadWriteObjLstCache;
  if (
    objvPaperReadWriteCond.sfFldComparisonOp == null ||
    objvPaperReadWriteCond.sfFldComparisonOp == ''
  )
    return arrvPaperReadWriteSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPaperReadWriteCond.sfFldComparisonOp,
  );
  //console.log("clsvPaperReadWriteWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPaperReadWriteCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPaperReadWriteCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPaperReadWriteSel = arrvPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvPaperReadWriteSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPaperReadWriteCond),
      vPaperReadWrite_ConstructorName,
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
export function vPaperReadWrite_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vPaperReadWrite_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvPaperReadWriteEN._CurrTabName, strIdCurrEduCls);
    switch (clsvPaperReadWriteEN.CacheModeId) {
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

 * @param strIdCurrEduCls:
*/
export async function vPaperReadWrite_Cache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strIdCurrEduCls: string,
) {
  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format('参数:[strIdCurrEduCls]不能为空！(In clsvPaperReadWriteWApi.)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvPaperReadWriteWApi.)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In )', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：Cache");
  const arrObjLstSel = await vPaperReadWrite_GetObjLstCache(strIdCurrEduCls);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvPaperReadWriteEN.con_PaperRWId,
    clsvPaperReadWriteEN.con_OperationTypeName,
    'v论文读写表',
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
export function vPaperReadWrite_GetJSONStrByObj(
  pobjvPaperReadWriteEN: clsvPaperReadWriteEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvPaperReadWriteEN);
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
export function vPaperReadWrite_GetObjLstByJSONStr(strJSON: string): Array<clsvPaperReadWriteEN> {
  let arrvPaperReadWriteObjLst = new Array<clsvPaperReadWriteEN>();
  if (strJSON === '') {
    return arrvPaperReadWriteObjLst;
  }
  try {
    arrvPaperReadWriteObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvPaperReadWriteObjLst;
  }
  return arrvPaperReadWriteObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvPaperReadWriteObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vPaperReadWrite_GetObjLstByJSONObjLst(
  arrvPaperReadWriteObjLstS: Array<clsvPaperReadWriteEN>,
): Array<clsvPaperReadWriteEN> {
  const arrvPaperReadWriteObjLst = new Array<clsvPaperReadWriteEN>();
  for (const objInFor of arrvPaperReadWriteObjLstS) {
    const obj1 = vPaperReadWrite_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvPaperReadWriteObjLst.push(obj1);
  }
  return arrvPaperReadWriteObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPaperReadWrite_GetObjByJSONStr(strJSON: string): clsvPaperReadWriteEN {
  let pobjvPaperReadWriteEN = new clsvPaperReadWriteEN();
  if (strJSON === '') {
    return pobjvPaperReadWriteEN;
  }
  try {
    pobjvPaperReadWriteEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvPaperReadWriteEN;
  }
  return pobjvPaperReadWriteEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vPaperReadWrite_GetCombineCondition(
  objvPaperReadWriteCond: clsvPaperReadWriteEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_PaperRWId,
    ) == true
  ) {
    const strComparisonOpPaperRWId: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_PaperRWId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_PaperRWId,
      objvPaperReadWriteCond.paperRWId,
      strComparisonOpPaperRWId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_ReaderId,
    ) == true
  ) {
    const strComparisonOpReaderId: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_ReaderId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_ReaderId,
      objvPaperReadWriteCond.readerId,
      strComparisonOpReaderId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_PaperId,
      objvPaperReadWriteCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_PaperTitle,
    ) == true
  ) {
    const strComparisonOpPaperTitle: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_PaperTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_PaperTitle,
      objvPaperReadWriteCond.paperTitle,
      strComparisonOpPaperTitle,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_Periodical,
    ) == true
  ) {
    const strComparisonOpPeriodical: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_Periodical];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_Periodical,
      objvPaperReadWriteCond.periodical,
      strComparisonOpPeriodical,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_Author,
    ) == true
  ) {
    const strComparisonOpAuthor: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_Author];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_Author,
      objvPaperReadWriteCond.author,
      strComparisonOpAuthor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_Keyword,
    ) == true
  ) {
    const strComparisonOpKeyword: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_Keyword];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_Keyword,
      objvPaperReadWriteCond.keyword,
      strComparisonOpKeyword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_ResearchQuestion,
    ) == true
  ) {
    const strComparisonOpResearchQuestion: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_ResearchQuestion];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_ResearchQuestion,
      objvPaperReadWriteCond.researchQuestion,
      strComparisonOpResearchQuestion,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_OperationTypeId,
    ) == true
  ) {
    const strComparisonOpOperationTypeId: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_OperationTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_OperationTypeId,
      objvPaperReadWriteCond.operationTypeId,
      strComparisonOpOperationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_OperationTypeName,
    ) == true
  ) {
    const strComparisonOpOperationTypeName: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_OperationTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_OperationTypeName,
      objvPaperReadWriteCond.operationTypeName,
      strComparisonOpOperationTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_UpdDate,
      objvPaperReadWriteCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_Memo,
      objvPaperReadWriteCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_LiteratureLink,
    ) == true
  ) {
    const strComparisonOpLiteratureLink: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_LiteratureLink];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_LiteratureLink,
      objvPaperReadWriteCond.literatureLink,
      strComparisonOpLiteratureLink,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_LiteratureSources,
    ) == true
  ) {
    const strComparisonOpLiteratureSources: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_LiteratureSources];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_LiteratureSources,
      objvPaperReadWriteCond.literatureSources,
      strComparisonOpLiteratureSources,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_LiteratureTypeId,
    ) == true
  ) {
    const strComparisonOpLiteratureTypeId: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_LiteratureTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_LiteratureTypeId,
      objvPaperReadWriteCond.literatureTypeId,
      strComparisonOpLiteratureTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_LiteratureTypeName,
    ) == true
  ) {
    const strComparisonOpLiteratureTypeName: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_LiteratureTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_LiteratureTypeName,
      objvPaperReadWriteCond.literatureTypeName,
      strComparisonOpLiteratureTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_UploadfileUrl,
    ) == true
  ) {
    const strComparisonOpUploadfileUrl: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_UploadfileUrl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_UploadfileUrl,
      objvPaperReadWriteCond.uploadfileUrl,
      strComparisonOpUploadfileUrl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_IsPublic,
    ) == true
  ) {
    if (objvPaperReadWriteCond.isPublic == true) {
      strWhereCond += Format(" And {0} = '1'", clsvPaperReadWriteEN.con_IsPublic);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvPaperReadWriteEN.con_IsPublic);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_IsSubmit,
    ) == true
  ) {
    if (objvPaperReadWriteCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvPaperReadWriteEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvPaperReadWriteEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_Submitter,
    ) == true
  ) {
    const strComparisonOpSubmitter: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_Submitter];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_Submitter,
      objvPaperReadWriteCond.submitter,
      strComparisonOpSubmitter,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_Pcount,
    ) == true
  ) {
    const strComparisonOpPcount: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_Pcount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvPaperReadWriteEN.con_Pcount,
      objvPaperReadWriteCond.pcount,
      strComparisonOpPcount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_TeaCount,
    ) == true
  ) {
    const strComparisonOpTeaCount: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_TeaCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvPaperReadWriteEN.con_TeaCount,
      objvPaperReadWriteCond.teaCount,
      strComparisonOpTeaCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_IdCurrEduCls,
      objvPaperReadWriteCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_SubVCount,
    ) == true
  ) {
    const strComparisonOpSubVCount: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_SubVCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvPaperReadWriteEN.con_SubVCount,
      objvPaperReadWriteCond.subVCount,
      strComparisonOpSubVCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_CreateDate,
    ) == true
  ) {
    const strComparisonOpCreateDate: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_CreateDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_CreateDate,
      objvPaperReadWriteCond.createDate,
      strComparisonOpCreateDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_ShareId,
    ) == true
  ) {
    const strComparisonOpShareId: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_ShareId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_ShareId,
      objvPaperReadWriteCond.shareId,
      strComparisonOpShareId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPaperReadWriteCond.dicFldComparisonOp,
      clsvPaperReadWriteEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvPaperReadWriteCond.dicFldComparisonOp[clsvPaperReadWriteEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPaperReadWriteEN.con_UpdUser,
      objvPaperReadWriteCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvPaperReadWriteENS:源对象
 * @param objvPaperReadWriteENT:目标对象
 */
export function vPaperReadWrite_CopyObjTo(
  objvPaperReadWriteENS: clsvPaperReadWriteEN,
  objvPaperReadWriteENT: clsvPaperReadWriteEN,
): void {
  objvPaperReadWriteENT.paperRWId = objvPaperReadWriteENS.paperRWId; //课文阅读
  objvPaperReadWriteENT.readerId = objvPaperReadWriteENS.readerId; //阅读者Id
  objvPaperReadWriteENT.paperId = objvPaperReadWriteENS.paperId; //论文Id
  objvPaperReadWriteENT.paperTitle = objvPaperReadWriteENS.paperTitle; //论文标题
  objvPaperReadWriteENT.paperContent = objvPaperReadWriteENS.paperContent; //主题内容
  objvPaperReadWriteENT.periodical = objvPaperReadWriteENS.periodical; //期刊
  objvPaperReadWriteENT.author = objvPaperReadWriteENS.author; //作者
  objvPaperReadWriteENT.keyword = objvPaperReadWriteENS.keyword; //关键字
  objvPaperReadWriteENT.researchQuestion = objvPaperReadWriteENS.researchQuestion; //研究问题
  objvPaperReadWriteENT.operationTypeId = objvPaperReadWriteENS.operationTypeId; //操作类型ID
  objvPaperReadWriteENT.operationTypeName = objvPaperReadWriteENS.operationTypeName; //操作类型名
  objvPaperReadWriteENT.updDate = objvPaperReadWriteENS.updDate; //修改日期
  objvPaperReadWriteENT.memo = objvPaperReadWriteENS.memo; //备注
  objvPaperReadWriteENT.literatureLink = objvPaperReadWriteENS.literatureLink; //文献链接
  objvPaperReadWriteENT.literatureSources = objvPaperReadWriteENS.literatureSources; //文献来源
  objvPaperReadWriteENT.literatureTypeId = objvPaperReadWriteENS.literatureTypeId; //文献类型Id
  objvPaperReadWriteENT.literatureTypeName = objvPaperReadWriteENS.literatureTypeName; //作文类型名
  objvPaperReadWriteENT.uploadfileUrl = objvPaperReadWriteENS.uploadfileUrl; //文件地址
  objvPaperReadWriteENT.isPublic = objvPaperReadWriteENS.isPublic; //是否公开
  objvPaperReadWriteENT.isSubmit = objvPaperReadWriteENS.isSubmit; //是否提交
  objvPaperReadWriteENT.submitter = objvPaperReadWriteENS.submitter; //提交人
  objvPaperReadWriteENT.pcount = objvPaperReadWriteENS.pcount; //读写数
  objvPaperReadWriteENT.teaCount = objvPaperReadWriteENS.teaCount; //TeaCount
  objvPaperReadWriteENT.idCurrEduCls = objvPaperReadWriteENS.idCurrEduCls; //教学班流水号
  objvPaperReadWriteENT.subVCount = objvPaperReadWriteENS.subVCount; //论文子观点数
  objvPaperReadWriteENT.createDate = objvPaperReadWriteENS.createDate; //建立日期
  objvPaperReadWriteENT.shareId = objvPaperReadWriteENS.shareId; //分享Id
  objvPaperReadWriteENT.updUser = objvPaperReadWriteENS.updUser; //修改人
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvPaperReadWriteENS:源对象
 * @param objvPaperReadWriteENT:目标对象
 */
export function vPaperReadWrite_GetObjFromJsonObj(
  objvPaperReadWriteENS: clsvPaperReadWriteEN,
): clsvPaperReadWriteEN {
  const objvPaperReadWriteENT: clsvPaperReadWriteEN = new clsvPaperReadWriteEN();
  ObjectAssign(objvPaperReadWriteENT, objvPaperReadWriteENS);
  return objvPaperReadWriteENT;
}
