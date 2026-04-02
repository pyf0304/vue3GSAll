/**
 * 类名:clsPaperReadWriteWApi
 * 表名:PaperReadWrite(01120547)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:06
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
 * 论文读写表(PaperReadWrite)
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
import { clsPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsPaperReadWriteEN';
import { vPaperReadWrite_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperReadWriteWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const paperReadWrite_Controller = 'PaperReadWriteApi';
export const paperReadWrite_ConstructorName = 'paperReadWrite';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPaperRWId:关键字
 * @returns 对象
 **/
export async function PaperReadWrite_GetObjByPaperRWIdAsync(
  strPaperRWId: string,
): Promise<clsPaperReadWriteEN | null> {
  const strThisFuncName = 'GetObjByPaperRWIdAsync';

  if (IsNullOrEmpty(strPaperRWId) == true) {
    const strMsg = Format(
      '参数:[strPaperRWId]不能为空!(In clsPaperReadWriteWApi.GetObjByPaperRWIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPaperRWId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPaperRWId]的长度:[{0}]不正确!(clsPaperReadWriteWApi.GetObjByPaperRWIdAsync)',
      strPaperRWId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPaperRWId';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
      const objPaperReadWrite = PaperReadWrite_GetObjFromJsonObj(returnObj);
      return objPaperReadWrite;
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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetObjByPaperRWIdCache(
  strPaperRWId: string,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPaperRWIdCache';

  if (IsNullOrEmpty(strPaperRWId) == true) {
    const strMsg = Format(
      '参数:[strPaperRWId]不能为空!(In clsPaperReadWriteWApi.GetObjByPaperRWIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPaperRWId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPaperRWId]的长度:[{0}]不正确!(clsPaperReadWriteWApi.GetObjByPaperRWIdCache)',
      strPaperRWId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPaperReadWriteObjLstCache = await PaperReadWrite_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrPaperReadWriteSel = arrPaperReadWriteObjLstCache.filter(
      (x) => x.paperRWId == strPaperRWId,
    );
    let objPaperReadWrite: clsPaperReadWriteEN;
    if (arrPaperReadWriteSel.length > 0) {
      objPaperReadWrite = arrPaperReadWriteSel[0];
      return objPaperReadWrite;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPaperReadWriteConst = await PaperReadWrite_GetObjByPaperRWIdAsync(strPaperRWId);
        if (objPaperReadWriteConst != null) {
          PaperReadWrite_ReFreshThisCache(strIdCurrEduCls);
          return objPaperReadWriteConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPaperRWId,
      paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetObjByPaperRWIdlocalStorage(strPaperRWId: string) {
  const strThisFuncName = 'GetObjByPaperRWIdlocalStorage';

  if (IsNullOrEmpty(strPaperRWId) == true) {
    const strMsg = Format(
      '参数:[strPaperRWId]不能为空!(In clsPaperReadWriteWApi.GetObjByPaperRWIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPaperRWId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPaperRWId]的长度:[{0}]不正确!(clsPaperReadWriteWApi.GetObjByPaperRWIdlocalStorage)',
      strPaperRWId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPaperReadWriteEN._CurrTabName, strPaperRWId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPaperReadWriteCache: clsPaperReadWriteEN = JSON.parse(strTempObj);
    return objPaperReadWriteCache;
  }
  try {
    const objPaperReadWrite = await PaperReadWrite_GetObjByPaperRWIdAsync(strPaperRWId);
    if (objPaperReadWrite != null) {
      localStorage.setItem(strKey, JSON.stringify(objPaperReadWrite));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPaperReadWrite;
    }
    return objPaperReadWrite;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPaperRWId,
      paperReadWrite_ConstructorName,
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
 * @param objPaperReadWrite:所给的对象
 * @returns 对象
 */
export async function PaperReadWrite_UpdateObjInLstCache(
  objPaperReadWrite: clsPaperReadWriteEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPaperReadWriteObjLstCache = await PaperReadWrite_GetObjLstCache(strIdCurrEduCls);
    const obj = arrPaperReadWriteObjLstCache.find(
      (x) => x.readerId == objPaperReadWrite.readerId && x.paperId == objPaperReadWrite.paperId,
    );
    if (obj != null) {
      objPaperReadWrite.paperRWId = obj.paperRWId;
      ObjectAssign(obj, objPaperReadWrite);
    } else {
      arrPaperReadWriteObjLstCache.push(objPaperReadWrite);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      paperReadWrite_ConstructorName,
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function PaperReadWrite_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsPaperReadWriteWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsPaperReadWriteWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsPaperReadWriteEN.con_PaperRWId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPaperReadWriteEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPaperReadWriteEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strPaperRWId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objPaperReadWrite = await PaperReadWrite_GetObjByPaperRWIdCache(
    strPaperRWId,
    strIdCurrEduClsClassfy,
  );
  if (objPaperReadWrite == null) return '';
  if (objPaperReadWrite.GetFldValue(strOutFldName) == null) return '';
  return objPaperReadWrite.GetFldValue(strOutFldName).toString();
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
export function PaperReadWrite_SortFunDefa(a: clsPaperReadWriteEN, b: clsPaperReadWriteEN): number {
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
export function PaperReadWrite_SortFunDefa2Fld(
  a: clsPaperReadWriteEN,
  b: clsPaperReadWriteEN,
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
export function PaperReadWrite_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPaperReadWriteEN.con_PaperRWId:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          return a.paperRWId.localeCompare(b.paperRWId);
        };
      case clsPaperReadWriteEN.con_ReaderId:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (a.readerId == null) return -1;
          if (b.readerId == null) return 1;
          return a.readerId.localeCompare(b.readerId);
        };
      case clsPaperReadWriteEN.con_PaperId:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (a.paperId == null) return -1;
          if (b.paperId == null) return 1;
          return a.paperId.localeCompare(b.paperId);
        };
      case clsPaperReadWriteEN.con_ResearchQuestion:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (a.researchQuestion == null) return -1;
          if (b.researchQuestion == null) return 1;
          return a.researchQuestion.localeCompare(b.researchQuestion);
        };
      case clsPaperReadWriteEN.con_OperationTypeId:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          return a.operationTypeId.localeCompare(b.operationTypeId);
        };
      case clsPaperReadWriteEN.con_UpdDate:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPaperReadWriteEN.con_Memo:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsPaperReadWriteEN.con_IsSubmit:
        return (a: clsPaperReadWriteEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsPaperReadWriteEN.con_IsPublic:
        return (a: clsPaperReadWriteEN) => {
          if (a.isPublic == true) return 1;
          else return -1;
        };
      case clsPaperReadWriteEN.con_Submitter:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (a.submitter == null) return -1;
          if (b.submitter == null) return 1;
          return a.submitter.localeCompare(b.submitter);
        };
      case clsPaperReadWriteEN.con_IdCurrEduCls:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsPaperReadWriteEN.con_SubVCount:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          return a.subVCount - b.subVCount;
        };
      case clsPaperReadWriteEN.con_TeaCount:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          return a.teaCount - b.teaCount;
        };
      case clsPaperReadWriteEN.con_CreateDate:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (a.createDate == null) return -1;
          if (b.createDate == null) return 1;
          return a.createDate.localeCompare(b.createDate);
        };
      case clsPaperReadWriteEN.con_ShareId:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (a.shareId == null) return -1;
          if (b.shareId == null) return 1;
          return a.shareId.localeCompare(b.shareId);
        };
      case clsPaperReadWriteEN.con_UpdUser:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PaperReadWrite]中不存在!(in ${paperReadWrite_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPaperReadWriteEN.con_PaperRWId:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          return b.paperRWId.localeCompare(a.paperRWId);
        };
      case clsPaperReadWriteEN.con_ReaderId:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (b.readerId == null) return -1;
          if (a.readerId == null) return 1;
          return b.readerId.localeCompare(a.readerId);
        };
      case clsPaperReadWriteEN.con_PaperId:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (b.paperId == null) return -1;
          if (a.paperId == null) return 1;
          return b.paperId.localeCompare(a.paperId);
        };
      case clsPaperReadWriteEN.con_ResearchQuestion:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (b.researchQuestion == null) return -1;
          if (a.researchQuestion == null) return 1;
          return b.researchQuestion.localeCompare(a.researchQuestion);
        };
      case clsPaperReadWriteEN.con_OperationTypeId:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          return b.operationTypeId.localeCompare(a.operationTypeId);
        };
      case clsPaperReadWriteEN.con_UpdDate:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPaperReadWriteEN.con_Memo:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsPaperReadWriteEN.con_IsSubmit:
        return (b: clsPaperReadWriteEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsPaperReadWriteEN.con_IsPublic:
        return (b: clsPaperReadWriteEN) => {
          if (b.isPublic == true) return 1;
          else return -1;
        };
      case clsPaperReadWriteEN.con_Submitter:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (b.submitter == null) return -1;
          if (a.submitter == null) return 1;
          return b.submitter.localeCompare(a.submitter);
        };
      case clsPaperReadWriteEN.con_IdCurrEduCls:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsPaperReadWriteEN.con_SubVCount:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          return b.subVCount - a.subVCount;
        };
      case clsPaperReadWriteEN.con_TeaCount:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          return b.teaCount - a.teaCount;
        };
      case clsPaperReadWriteEN.con_CreateDate:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (b.createDate == null) return -1;
          if (a.createDate == null) return 1;
          return b.createDate.localeCompare(a.createDate);
        };
      case clsPaperReadWriteEN.con_ShareId:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (b.shareId == null) return -1;
          if (a.shareId == null) return 1;
          return b.shareId.localeCompare(a.shareId);
        };
      case clsPaperReadWriteEN.con_UpdUser:
        return (a: clsPaperReadWriteEN, b: clsPaperReadWriteEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PaperReadWrite]中不存在!(in ${paperReadWrite_ConstructorName}.${strThisFuncName})`;
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
export async function PaperReadWrite_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPaperReadWriteEN.con_PaperRWId:
      return (obj: clsPaperReadWriteEN) => {
        return obj.paperRWId === value;
      };
    case clsPaperReadWriteEN.con_ReaderId:
      return (obj: clsPaperReadWriteEN) => {
        return obj.readerId === value;
      };
    case clsPaperReadWriteEN.con_PaperId:
      return (obj: clsPaperReadWriteEN) => {
        return obj.paperId === value;
      };
    case clsPaperReadWriteEN.con_ResearchQuestion:
      return (obj: clsPaperReadWriteEN) => {
        return obj.researchQuestion === value;
      };
    case clsPaperReadWriteEN.con_OperationTypeId:
      return (obj: clsPaperReadWriteEN) => {
        return obj.operationTypeId === value;
      };
    case clsPaperReadWriteEN.con_UpdDate:
      return (obj: clsPaperReadWriteEN) => {
        return obj.updDate === value;
      };
    case clsPaperReadWriteEN.con_Memo:
      return (obj: clsPaperReadWriteEN) => {
        return obj.memo === value;
      };
    case clsPaperReadWriteEN.con_IsSubmit:
      return (obj: clsPaperReadWriteEN) => {
        return obj.isSubmit === value;
      };
    case clsPaperReadWriteEN.con_IsPublic:
      return (obj: clsPaperReadWriteEN) => {
        return obj.isPublic === value;
      };
    case clsPaperReadWriteEN.con_Submitter:
      return (obj: clsPaperReadWriteEN) => {
        return obj.submitter === value;
      };
    case clsPaperReadWriteEN.con_IdCurrEduCls:
      return (obj: clsPaperReadWriteEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsPaperReadWriteEN.con_SubVCount:
      return (obj: clsPaperReadWriteEN) => {
        return obj.subVCount === value;
      };
    case clsPaperReadWriteEN.con_TeaCount:
      return (obj: clsPaperReadWriteEN) => {
        return obj.teaCount === value;
      };
    case clsPaperReadWriteEN.con_CreateDate:
      return (obj: clsPaperReadWriteEN) => {
        return obj.createDate === value;
      };
    case clsPaperReadWriteEN.con_ShareId:
      return (obj: clsPaperReadWriteEN) => {
        return obj.shareId === value;
      };
    case clsPaperReadWriteEN.con_UpdUser:
      return (obj: clsPaperReadWriteEN) => {
        return obj.updUser === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PaperReadWrite]中不存在!(in ${paperReadWrite_ConstructorName}.${strThisFuncName})`;
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
export async function PaperReadWrite_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsPaperReadWriteWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsPaperReadWriteWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsPaperReadWriteEN.con_PaperRWId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrPaperReadWrite = await PaperReadWrite_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrPaperReadWrite == null) return [];
  let arrPaperReadWriteSel = arrPaperReadWrite;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPaperReadWriteSel.length == 0) return [];
  return arrPaperReadWriteSel.map((x) => x.paperRWId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperReadWrite_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPaperReadWriteEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
      const objPaperReadWrite = PaperReadWrite_GetObjFromJsonObj(returnObj);
      return objPaperReadWrite;
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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPaperReadWriteEN.WhereFormat) == false) {
    strWhereCond = Format(clsPaperReadWriteEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsPaperReadWriteEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsPaperReadWriteEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperReadWriteEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPaperReadWriteExObjLstCache: Array<clsPaperReadWriteEN> = CacheHelper.Get(strKey);
    const arrPaperReadWriteObjLstT = PaperReadWrite_GetObjLstByJSONObjLst(
      arrPaperReadWriteExObjLstCache,
    );
    return arrPaperReadWriteObjLstT;
  }
  try {
    const arrPaperReadWriteExObjLst = await PaperReadWrite_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPaperReadWriteExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperReadWriteExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperReadWriteExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPaperReadWriteEN.WhereFormat) == false) {
    strWhereCond = Format(clsPaperReadWriteEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsPaperReadWriteEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsPaperReadWriteEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsPaperReadWriteEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperReadWriteEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPaperReadWriteExObjLstCache: Array<clsPaperReadWriteEN> = JSON.parse(strTempObjLst);
    const arrPaperReadWriteObjLstT = PaperReadWrite_GetObjLstByJSONObjLst(
      arrPaperReadWriteExObjLstCache,
    );
    return arrPaperReadWriteObjLstT;
  }
  try {
    const arrPaperReadWriteExObjLst = await PaperReadWrite_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPaperReadWriteExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperReadWriteExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperReadWriteExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsPaperReadWriteEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPaperReadWriteObjLstCache: Array<clsPaperReadWriteEN> = JSON.parse(strTempObjLst);
    return arrPaperReadWriteObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PaperReadWrite_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPaperReadWriteEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
          paperReadWrite_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperReadWrite_GetObjLstByJSONObjLst(returnObjLst);
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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPaperReadWriteEN.WhereFormat) == false) {
    strWhereCond = Format(clsPaperReadWriteEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsPaperReadWriteEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsPaperReadWriteEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsPaperReadWriteEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperReadWriteEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPaperReadWriteExObjLstCache: Array<clsPaperReadWriteEN> = JSON.parse(strTempObjLst);
    const arrPaperReadWriteObjLstT = PaperReadWrite_GetObjLstByJSONObjLst(
      arrPaperReadWriteExObjLstCache,
    );
    return arrPaperReadWriteObjLstT;
  }
  try {
    const arrPaperReadWriteExObjLst = await PaperReadWrite_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPaperReadWriteExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperReadWriteExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperReadWriteExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsPaperReadWriteEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPaperReadWriteObjLstCache: Array<clsPaperReadWriteEN> = JSON.parse(strTempObjLst);
    return arrPaperReadWriteObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperReadWrite_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsPaperReadWriteEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsPaperReadWriteWApi.PaperReadWrite_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsPaperReadWriteWApi.PaperReadWrite_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrPaperReadWriteObjLstCache;
  switch (clsPaperReadWriteEN.CacheModeId) {
    case '04': //sessionStorage
      arrPaperReadWriteObjLstCache = await PaperReadWrite_GetObjLstsessionStorage(strIdCurrEduCls);
      break;
    case '03': //localStorage
      arrPaperReadWriteObjLstCache = await PaperReadWrite_GetObjLstlocalStorage(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrPaperReadWriteObjLstCache = await PaperReadWrite_GetObjLstClientCache(strIdCurrEduCls);
      break;
    default:
      arrPaperReadWriteObjLstCache = await PaperReadWrite_GetObjLstClientCache(strIdCurrEduCls);
      break;
  }
  return arrPaperReadWriteObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperReadWrite_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPaperReadWriteObjLstCache;
  switch (clsPaperReadWriteEN.CacheModeId) {
    case '04': //sessionStorage
      arrPaperReadWriteObjLstCache = await PaperReadWrite_GetObjLstsessionStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrPaperReadWriteObjLstCache = await PaperReadWrite_GetObjLstlocalStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrPaperReadWriteObjLstCache = null;
      break;
    default:
      arrPaperReadWriteObjLstCache = null;
      break;
  }
  return arrPaperReadWriteObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPaperRWIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PaperReadWrite_GetSubObjLstCache(
  objPaperReadWriteCond: clsPaperReadWriteEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPaperReadWriteObjLstCache = await PaperReadWrite_GetObjLstCache(strIdCurrEduCls);
  let arrPaperReadWriteSel = arrPaperReadWriteObjLstCache;
  if (
    objPaperReadWriteCond.sfFldComparisonOp == null ||
    objPaperReadWriteCond.sfFldComparisonOp == ''
  )
    return arrPaperReadWriteSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperReadWriteCond.sfFldComparisonOp,
  );
  //console.log("clsPaperReadWriteWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperReadWriteCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperReadWriteSel = arrPaperReadWriteSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperReadWriteCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPaperReadWriteSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPaperReadWriteCond),
      paperReadWrite_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperReadWriteEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPaperRWId:关键字列表
 * @returns 对象列表
 **/
export async function PaperReadWrite_GetObjLstByPaperRWIdLstAsync(
  arrPaperRWId: Array<string>,
): Promise<Array<clsPaperReadWriteEN>> {
  const strThisFuncName = 'GetObjLstByPaperRWIdLstAsync';
  const strAction = 'GetObjLstByPaperRWIdLst';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
          paperReadWrite_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperReadWrite_GetObjLstByJSONObjLst(returnObjLst);
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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetObjLstByPaperRWIdLstCache(
  arrPaperRWIdLst: Array<string>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPaperRWIdLstCache';
  try {
    const arrPaperReadWriteObjLstCache = await PaperReadWrite_GetObjLstCache(strIdCurrEduCls);
    const arrPaperReadWriteSel = arrPaperReadWriteObjLstCache.filter(
      (x) => arrPaperRWIdLst.indexOf(x.paperRWId) > -1,
    );
    return arrPaperReadWriteSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPaperRWIdLst.join(','),
      paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPaperReadWriteEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
          paperReadWrite_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperReadWrite_GetObjLstByJSONObjLst(returnObjLst);
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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPaperReadWriteEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
          paperReadWrite_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperReadWrite_GetObjLstByJSONObjLst(returnObjLst);
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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPaperReadWriteEN>();
  const arrPaperReadWriteObjLstCache = await PaperReadWrite_GetObjLstCache(strIdCurrEduCls);
  if (arrPaperReadWriteObjLstCache.length == 0) return arrPaperReadWriteObjLstCache;
  let arrPaperReadWriteSel = arrPaperReadWriteObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objPaperReadWriteCond = new clsPaperReadWriteEN();
  ObjectAssign(objPaperReadWriteCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsPaperReadWriteWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperReadWriteSel = arrPaperReadWriteSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperReadWriteCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPaperReadWriteSel.length == 0) return arrPaperReadWriteSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPaperReadWriteSel = arrPaperReadWriteSel.sort(
        PaperReadWrite_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPaperReadWriteSel = arrPaperReadWriteSel.sort(objPagerPara.sortFun);
    }
    arrPaperReadWriteSel = arrPaperReadWriteSel.slice(intStart, intEnd);
    return arrPaperReadWriteSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      paperReadWrite_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperReadWriteEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PaperReadWrite_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPaperReadWriteEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPaperReadWriteEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
          paperReadWrite_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperReadWrite_GetObjLstByJSONObjLst(returnObjLst);
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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
 * @param strPaperRWId:关键字
 * @returns 获取删除的结果
 **/
export async function PaperReadWrite_DelRecordAsync(strPaperRWId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strPaperRWId);

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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
 * @param arrPaperRWId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PaperReadWrite_DelPaperReadWritesAsync(
  arrPaperRWId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPaperReadWritesAsync';
  const strAction = 'DelPaperReadWrites';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_DelPaperReadWritesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPaperReadWritesByCondAsync';
  const strAction = 'DelPaperReadWritesByCond';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
 * @param objPaperReadWriteEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PaperReadWrite_AddNewRecordAsync(
  objPaperReadWriteEN: clsPaperReadWriteEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPaperReadWriteEN);
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperReadWriteEN, config);
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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
 * @param objPaperReadWriteEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PaperReadWrite_AddNewRecordWithMaxIdAsync(
  objPaperReadWriteEN: clsPaperReadWriteEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperReadWriteEN, config);
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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
 * @param objPaperReadWriteEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PaperReadWrite_AddNewRecordWithReturnKeyAsync(
  objPaperReadWriteEN: clsPaperReadWriteEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperReadWriteEN, config);
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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
 * @param objPaperReadWriteEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PaperReadWrite_UpdateRecordAsync(
  objPaperReadWriteEN: clsPaperReadWriteEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPaperReadWriteEN.sfUpdFldSetStr === undefined ||
    objPaperReadWriteEN.sfUpdFldSetStr === null ||
    objPaperReadWriteEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPaperReadWriteEN.paperRWId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperReadWriteEN, config);
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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
 * @param objPaperReadWriteEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperReadWrite_UpdateWithConditionAsync(
  objPaperReadWriteEN: clsPaperReadWriteEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPaperReadWriteEN.sfUpdFldSetStr === undefined ||
    objPaperReadWriteEN.sfUpdFldSetStr === null ||
    objPaperReadWriteEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPaperReadWriteEN.paperRWId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);
  objPaperReadWriteEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperReadWriteEN, config);
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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_IsExistRecordCache(
  objPaperReadWriteCond: clsPaperReadWriteEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPaperReadWriteObjLstCache = await PaperReadWrite_GetObjLstCache(strIdCurrEduCls);
  if (arrPaperReadWriteObjLstCache == null) return false;
  let arrPaperReadWriteSel = arrPaperReadWriteObjLstCache;
  if (
    objPaperReadWriteCond.sfFldComparisonOp == null ||
    objPaperReadWriteCond.sfFldComparisonOp == ''
  )
    return arrPaperReadWriteSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperReadWriteCond.sfFldComparisonOp,
  );
  //console.log("clsPaperReadWriteWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperReadWriteCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperReadWriteCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPaperReadWriteSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPaperReadWriteCond),
      paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_IsExistCache(strPaperRWId: string, strIdCurrEduCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrPaperReadWriteObjLstCache = await PaperReadWrite_GetObjLstCache(strIdCurrEduCls);
  if (arrPaperReadWriteObjLstCache == null) return false;
  try {
    const arrPaperReadWriteSel = arrPaperReadWriteObjLstCache.filter(
      (x) => x.paperRWId == strPaperRWId,
    );
    if (arrPaperReadWriteSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strPaperRWId,
      paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_IsExistAsync(strPaperRWId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
 * @param objPaperReadWriteCond:条件对象
 * @returns 对象列表记录数
 */
export async function PaperReadWrite_GetRecCountByCondCache(
  objPaperReadWriteCond: clsPaperReadWriteEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPaperReadWriteObjLstCache = await PaperReadWrite_GetObjLstCache(strIdCurrEduCls);
  if (arrPaperReadWriteObjLstCache == null) return 0;
  let arrPaperReadWriteSel = arrPaperReadWriteObjLstCache;
  if (
    objPaperReadWriteCond.sfFldComparisonOp == null ||
    objPaperReadWriteCond.sfFldComparisonOp == ''
  )
    return arrPaperReadWriteSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperReadWriteCond.sfFldComparisonOp,
  );
  //console.log("clsPaperReadWriteWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperReadWriteCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperReadWriteSel = arrPaperReadWriteSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperReadWriteCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperReadWriteSel = arrPaperReadWriteSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPaperReadWriteSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPaperReadWriteCond),
      paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
export async function PaperReadWrite_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(paperReadWrite_Controller, strAction);

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
        paperReadWrite_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperReadWrite_ConstructorName,
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
export function PaperReadWrite_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PaperReadWrite_ReFreshCache(strIdCurrEduCls: string): void {
  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空!(In clsPaperReadWriteWApi.clsPaperReadWriteWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsPaperReadWriteWApi.clsPaperReadWriteWApi.ReFreshCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsPaperReadWriteEN._CurrTabName, strIdCurrEduCls);
  switch (clsPaperReadWriteEN.CacheModeId) {
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
  vPaperReadWrite_ReFreshThisCache(strIdCurrEduCls);
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function PaperReadWrite_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsPaperReadWriteEN._CurrTabName, strIdCurrEduCls);
    switch (clsPaperReadWriteEN.CacheModeId) {
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
export function PaperReadWrite_CheckPropertyNew(pobjPaperReadWriteEN: clsPaperReadWriteEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPaperReadWriteEN.operationTypeId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[操作类型ID]不能为空(In 论文读写表)!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjPaperReadWriteEN.updDate) === true) {
    throw new Error(
      '(errid:Watl000411)字段[修改日期]不能为空(In 论文读写表)!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.paperRWId) == false &&
    GetStrLen(pobjPaperReadWriteEN.paperRWId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课文阅读(paperRWId)]的长度不能超过8(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.paperRWId)(clsPaperReadWriteBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.readerId) == false &&
    GetStrLen(pobjPaperReadWriteEN.readerId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[阅读者Id(readerId)]的长度不能超过20(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.readerId)(clsPaperReadWriteBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.paperId) == false &&
    GetStrLen(pobjPaperReadWriteEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.paperId)(clsPaperReadWriteBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.researchQuestion) == false &&
    GetStrLen(pobjPaperReadWriteEN.researchQuestion) > 2000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[研究问题(researchQuestion)]的长度不能超过2000(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.researchQuestion)(clsPaperReadWriteBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.operationTypeId) == false &&
    GetStrLen(pobjPaperReadWriteEN.operationTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[操作类型ID(operationTypeId)]的长度不能超过4(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.operationTypeId)(clsPaperReadWriteBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.updDate) == false &&
    GetStrLen(pobjPaperReadWriteEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.updDate)(clsPaperReadWriteBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.memo) == false &&
    GetStrLen(pobjPaperReadWriteEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.memo)(clsPaperReadWriteBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.submitter) == false &&
    GetStrLen(pobjPaperReadWriteEN.submitter) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[提交人(submitter)]的长度不能超过50(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.submitter)(clsPaperReadWriteBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.idCurrEduCls) == false &&
    GetStrLen(pobjPaperReadWriteEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.idCurrEduCls)(clsPaperReadWriteBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.createDate) == false &&
    GetStrLen(pobjPaperReadWriteEN.createDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[建立日期(createDate)]的长度不能超过20(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.createDate)(clsPaperReadWriteBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.shareId) == false &&
    GetStrLen(pobjPaperReadWriteEN.shareId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[分享Id(shareId)]的长度不能超过2(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.shareId)(clsPaperReadWriteBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.updUser) == false &&
    GetStrLen(pobjPaperReadWriteEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.updUser)(clsPaperReadWriteBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.paperRWId) == false &&
    undefined !== pobjPaperReadWriteEN.paperRWId &&
    tzDataType.isString(pobjPaperReadWriteEN.paperRWId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课文阅读(paperRWId)]的值:[$(pobjPaperReadWriteEN.paperRWId)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.readerId) == false &&
    undefined !== pobjPaperReadWriteEN.readerId &&
    tzDataType.isString(pobjPaperReadWriteEN.readerId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[阅读者Id(readerId)]的值:[$(pobjPaperReadWriteEN.readerId)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.paperId) == false &&
    undefined !== pobjPaperReadWriteEN.paperId &&
    tzDataType.isString(pobjPaperReadWriteEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjPaperReadWriteEN.paperId)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.researchQuestion) == false &&
    undefined !== pobjPaperReadWriteEN.researchQuestion &&
    tzDataType.isString(pobjPaperReadWriteEN.researchQuestion) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[研究问题(researchQuestion)]的值:[$(pobjPaperReadWriteEN.researchQuestion)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.operationTypeId) == false &&
    undefined !== pobjPaperReadWriteEN.operationTypeId &&
    tzDataType.isString(pobjPaperReadWriteEN.operationTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[操作类型ID(operationTypeId)]的值:[$(pobjPaperReadWriteEN.operationTypeId)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.updDate) == false &&
    undefined !== pobjPaperReadWriteEN.updDate &&
    tzDataType.isString(pobjPaperReadWriteEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjPaperReadWriteEN.updDate)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.memo) == false &&
    undefined !== pobjPaperReadWriteEN.memo &&
    tzDataType.isString(pobjPaperReadWriteEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjPaperReadWriteEN.memo)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjPaperReadWriteEN.isSubmit &&
    undefined !== pobjPaperReadWriteEN.isSubmit &&
    tzDataType.isBoolean(pobjPaperReadWriteEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjPaperReadWriteEN.isSubmit)], 非法,应该为布尔型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjPaperReadWriteEN.isPublic &&
    undefined !== pobjPaperReadWriteEN.isPublic &&
    tzDataType.isBoolean(pobjPaperReadWriteEN.isPublic) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否公开(isPublic)]的值:[$(pobjPaperReadWriteEN.isPublic)], 非法,应该为布尔型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.submitter) == false &&
    undefined !== pobjPaperReadWriteEN.submitter &&
    tzDataType.isString(pobjPaperReadWriteEN.submitter) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[提交人(submitter)]的值:[$(pobjPaperReadWriteEN.submitter)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.idCurrEduCls) == false &&
    undefined !== pobjPaperReadWriteEN.idCurrEduCls &&
    tzDataType.isString(pobjPaperReadWriteEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjPaperReadWriteEN.idCurrEduCls)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjPaperReadWriteEN.subVCount &&
    undefined !== pobjPaperReadWriteEN.subVCount &&
    tzDataType.isNumber(pobjPaperReadWriteEN.subVCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文子观点数(subVCount)]的值:[$(pobjPaperReadWriteEN.subVCount)], 非法,应该为数值型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjPaperReadWriteEN.teaCount &&
    undefined !== pobjPaperReadWriteEN.teaCount &&
    tzDataType.isNumber(pobjPaperReadWriteEN.teaCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[TeaCount(teaCount)]的值:[$(pobjPaperReadWriteEN.teaCount)], 非法,应该为数值型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.createDate) == false &&
    undefined !== pobjPaperReadWriteEN.createDate &&
    tzDataType.isString(pobjPaperReadWriteEN.createDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[建立日期(createDate)]的值:[$(pobjPaperReadWriteEN.createDate)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.shareId) == false &&
    undefined !== pobjPaperReadWriteEN.shareId &&
    tzDataType.isString(pobjPaperReadWriteEN.shareId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[分享Id(shareId)]的值:[$(pobjPaperReadWriteEN.shareId)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.updUser) == false &&
    undefined !== pobjPaperReadWriteEN.updUser &&
    tzDataType.isString(pobjPaperReadWriteEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjPaperReadWriteEN.updUser)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.paperId) == false &&
    pobjPaperReadWriteEN.paperId != '[nuull]' &&
    GetStrLen(pobjPaperReadWriteEN.paperId) != 8
  ) {
    throw '(errid:Watl000415)字段[论文Id]作为外键字段,长度应该为8(In 论文读写表)!(clsPaperReadWriteBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PaperReadWrite_CheckProperty4Update(pobjPaperReadWriteEN: clsPaperReadWriteEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.paperRWId) == false &&
    GetStrLen(pobjPaperReadWriteEN.paperRWId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课文阅读(paperRWId)]的长度不能超过8(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.paperRWId)(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.readerId) == false &&
    GetStrLen(pobjPaperReadWriteEN.readerId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[阅读者Id(readerId)]的长度不能超过20(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.readerId)(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.paperId) == false &&
    GetStrLen(pobjPaperReadWriteEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.paperId)(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.researchQuestion) == false &&
    GetStrLen(pobjPaperReadWriteEN.researchQuestion) > 2000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[研究问题(researchQuestion)]的长度不能超过2000(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.researchQuestion)(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.operationTypeId) == false &&
    GetStrLen(pobjPaperReadWriteEN.operationTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[操作类型ID(operationTypeId)]的长度不能超过4(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.operationTypeId)(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.updDate) == false &&
    GetStrLen(pobjPaperReadWriteEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.updDate)(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.memo) == false &&
    GetStrLen(pobjPaperReadWriteEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.memo)(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.submitter) == false &&
    GetStrLen(pobjPaperReadWriteEN.submitter) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[提交人(submitter)]的长度不能超过50(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.submitter)(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.idCurrEduCls) == false &&
    GetStrLen(pobjPaperReadWriteEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.idCurrEduCls)(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.createDate) == false &&
    GetStrLen(pobjPaperReadWriteEN.createDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[建立日期(createDate)]的长度不能超过20(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.createDate)(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.shareId) == false &&
    GetStrLen(pobjPaperReadWriteEN.shareId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[分享Id(shareId)]的长度不能超过2(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.shareId)(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.updUser) == false &&
    GetStrLen(pobjPaperReadWriteEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文读写表(PaperReadWrite))!值:$(pobjPaperReadWriteEN.updUser)(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.paperRWId) == false &&
    undefined !== pobjPaperReadWriteEN.paperRWId &&
    tzDataType.isString(pobjPaperReadWriteEN.paperRWId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课文阅读(paperRWId)]的值:[$(pobjPaperReadWriteEN.paperRWId)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.readerId) == false &&
    undefined !== pobjPaperReadWriteEN.readerId &&
    tzDataType.isString(pobjPaperReadWriteEN.readerId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[阅读者Id(readerId)]的值:[$(pobjPaperReadWriteEN.readerId)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.paperId) == false &&
    undefined !== pobjPaperReadWriteEN.paperId &&
    tzDataType.isString(pobjPaperReadWriteEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjPaperReadWriteEN.paperId)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.researchQuestion) == false &&
    undefined !== pobjPaperReadWriteEN.researchQuestion &&
    tzDataType.isString(pobjPaperReadWriteEN.researchQuestion) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[研究问题(researchQuestion)]的值:[$(pobjPaperReadWriteEN.researchQuestion)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.operationTypeId) == false &&
    undefined !== pobjPaperReadWriteEN.operationTypeId &&
    tzDataType.isString(pobjPaperReadWriteEN.operationTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[操作类型ID(operationTypeId)]的值:[$(pobjPaperReadWriteEN.operationTypeId)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.updDate) == false &&
    undefined !== pobjPaperReadWriteEN.updDate &&
    tzDataType.isString(pobjPaperReadWriteEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjPaperReadWriteEN.updDate)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.memo) == false &&
    undefined !== pobjPaperReadWriteEN.memo &&
    tzDataType.isString(pobjPaperReadWriteEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjPaperReadWriteEN.memo)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjPaperReadWriteEN.isSubmit &&
    undefined !== pobjPaperReadWriteEN.isSubmit &&
    tzDataType.isBoolean(pobjPaperReadWriteEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjPaperReadWriteEN.isSubmit)], 非法,应该为布尔型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjPaperReadWriteEN.isPublic &&
    undefined !== pobjPaperReadWriteEN.isPublic &&
    tzDataType.isBoolean(pobjPaperReadWriteEN.isPublic) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否公开(isPublic)]的值:[$(pobjPaperReadWriteEN.isPublic)], 非法,应该为布尔型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.submitter) == false &&
    undefined !== pobjPaperReadWriteEN.submitter &&
    tzDataType.isString(pobjPaperReadWriteEN.submitter) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[提交人(submitter)]的值:[$(pobjPaperReadWriteEN.submitter)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.idCurrEduCls) == false &&
    undefined !== pobjPaperReadWriteEN.idCurrEduCls &&
    tzDataType.isString(pobjPaperReadWriteEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjPaperReadWriteEN.idCurrEduCls)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjPaperReadWriteEN.subVCount &&
    undefined !== pobjPaperReadWriteEN.subVCount &&
    tzDataType.isNumber(pobjPaperReadWriteEN.subVCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文子观点数(subVCount)]的值:[$(pobjPaperReadWriteEN.subVCount)], 非法,应该为数值型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjPaperReadWriteEN.teaCount &&
    undefined !== pobjPaperReadWriteEN.teaCount &&
    tzDataType.isNumber(pobjPaperReadWriteEN.teaCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[TeaCount(teaCount)]的值:[$(pobjPaperReadWriteEN.teaCount)], 非法,应该为数值型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.createDate) == false &&
    undefined !== pobjPaperReadWriteEN.createDate &&
    tzDataType.isString(pobjPaperReadWriteEN.createDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[建立日期(createDate)]的值:[$(pobjPaperReadWriteEN.createDate)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.shareId) == false &&
    undefined !== pobjPaperReadWriteEN.shareId &&
    tzDataType.isString(pobjPaperReadWriteEN.shareId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[分享Id(shareId)]的值:[$(pobjPaperReadWriteEN.shareId)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.updUser) == false &&
    undefined !== pobjPaperReadWriteEN.updUser &&
    tzDataType.isString(pobjPaperReadWriteEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjPaperReadWriteEN.updUser)], 非法,应该为字符型(In 论文读写表(PaperReadWrite))!(clsPaperReadWriteBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjPaperReadWriteEN.paperId) == false &&
    pobjPaperReadWriteEN.paperId != '[nuull]' &&
    GetStrLen(pobjPaperReadWriteEN.paperId) != 8
  ) {
    throw '(errid:Watl000418)字段[论文Id]作为外键字段,长度应该为8(In 论文读写表)!(clsPaperReadWriteBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PaperReadWrite_GetJSONStrByObj(pobjPaperReadWriteEN: clsPaperReadWriteEN): string {
  pobjPaperReadWriteEN.sfUpdFldSetStr = pobjPaperReadWriteEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPaperReadWriteEN);
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
export function PaperReadWrite_GetObjLstByJSONStr(strJSON: string): Array<clsPaperReadWriteEN> {
  let arrPaperReadWriteObjLst = new Array<clsPaperReadWriteEN>();
  if (strJSON === '') {
    return arrPaperReadWriteObjLst;
  }
  try {
    arrPaperReadWriteObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPaperReadWriteObjLst;
  }
  return arrPaperReadWriteObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPaperReadWriteObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PaperReadWrite_GetObjLstByJSONObjLst(
  arrPaperReadWriteObjLstS: Array<clsPaperReadWriteEN>,
): Array<clsPaperReadWriteEN> {
  const arrPaperReadWriteObjLst = new Array<clsPaperReadWriteEN>();
  for (const objInFor of arrPaperReadWriteObjLstS) {
    const obj1 = PaperReadWrite_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPaperReadWriteObjLst.push(obj1);
  }
  return arrPaperReadWriteObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PaperReadWrite_GetObjByJSONStr(strJSON: string): clsPaperReadWriteEN {
  let pobjPaperReadWriteEN = new clsPaperReadWriteEN();
  if (strJSON === '') {
    return pobjPaperReadWriteEN;
  }
  try {
    pobjPaperReadWriteEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPaperReadWriteEN;
  }
  return pobjPaperReadWriteEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PaperReadWrite_GetCombineCondition(
  objPaperReadWriteCond: clsPaperReadWriteEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_PaperRWId,
    ) == true
  ) {
    const strComparisonOpPaperRWId: string =
      objPaperReadWriteCond.dicFldComparisonOp[clsPaperReadWriteEN.con_PaperRWId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperReadWriteEN.con_PaperRWId,
      objPaperReadWriteCond.paperRWId,
      strComparisonOpPaperRWId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_ReaderId,
    ) == true
  ) {
    const strComparisonOpReaderId: string =
      objPaperReadWriteCond.dicFldComparisonOp[clsPaperReadWriteEN.con_ReaderId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperReadWriteEN.con_ReaderId,
      objPaperReadWriteCond.readerId,
      strComparisonOpReaderId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objPaperReadWriteCond.dicFldComparisonOp[clsPaperReadWriteEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperReadWriteEN.con_PaperId,
      objPaperReadWriteCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_ResearchQuestion,
    ) == true
  ) {
    const strComparisonOpResearchQuestion: string =
      objPaperReadWriteCond.dicFldComparisonOp[clsPaperReadWriteEN.con_ResearchQuestion];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperReadWriteEN.con_ResearchQuestion,
      objPaperReadWriteCond.researchQuestion,
      strComparisonOpResearchQuestion,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_OperationTypeId,
    ) == true
  ) {
    const strComparisonOpOperationTypeId: string =
      objPaperReadWriteCond.dicFldComparisonOp[clsPaperReadWriteEN.con_OperationTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperReadWriteEN.con_OperationTypeId,
      objPaperReadWriteCond.operationTypeId,
      strComparisonOpOperationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPaperReadWriteCond.dicFldComparisonOp[clsPaperReadWriteEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperReadWriteEN.con_UpdDate,
      objPaperReadWriteCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPaperReadWriteCond.dicFldComparisonOp[clsPaperReadWriteEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperReadWriteEN.con_Memo,
      objPaperReadWriteCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_IsSubmit,
    ) == true
  ) {
    if (objPaperReadWriteCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsPaperReadWriteEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPaperReadWriteEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_IsPublic,
    ) == true
  ) {
    if (objPaperReadWriteCond.isPublic == true) {
      strWhereCond += Format(" And {0} = '1'", clsPaperReadWriteEN.con_IsPublic);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPaperReadWriteEN.con_IsPublic);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_Submitter,
    ) == true
  ) {
    const strComparisonOpSubmitter: string =
      objPaperReadWriteCond.dicFldComparisonOp[clsPaperReadWriteEN.con_Submitter];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperReadWriteEN.con_Submitter,
      objPaperReadWriteCond.submitter,
      strComparisonOpSubmitter,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objPaperReadWriteCond.dicFldComparisonOp[clsPaperReadWriteEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperReadWriteEN.con_IdCurrEduCls,
      objPaperReadWriteCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_SubVCount,
    ) == true
  ) {
    const strComparisonOpSubVCount: string =
      objPaperReadWriteCond.dicFldComparisonOp[clsPaperReadWriteEN.con_SubVCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperReadWriteEN.con_SubVCount,
      objPaperReadWriteCond.subVCount,
      strComparisonOpSubVCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_TeaCount,
    ) == true
  ) {
    const strComparisonOpTeaCount: string =
      objPaperReadWriteCond.dicFldComparisonOp[clsPaperReadWriteEN.con_TeaCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperReadWriteEN.con_TeaCount,
      objPaperReadWriteCond.teaCount,
      strComparisonOpTeaCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_CreateDate,
    ) == true
  ) {
    const strComparisonOpCreateDate: string =
      objPaperReadWriteCond.dicFldComparisonOp[clsPaperReadWriteEN.con_CreateDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperReadWriteEN.con_CreateDate,
      objPaperReadWriteCond.createDate,
      strComparisonOpCreateDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_ShareId,
    ) == true
  ) {
    const strComparisonOpShareId: string =
      objPaperReadWriteCond.dicFldComparisonOp[clsPaperReadWriteEN.con_ShareId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperReadWriteEN.con_ShareId,
      objPaperReadWriteCond.shareId,
      strComparisonOpShareId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperReadWriteCond.dicFldComparisonOp,
      clsPaperReadWriteEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objPaperReadWriteCond.dicFldComparisonOp[clsPaperReadWriteEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperReadWriteEN.con_UpdUser,
      objPaperReadWriteCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PaperReadWrite(论文读写表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strReaderId: 阅读者Id(要求唯一的字段)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PaperReadWrite_GetUniCondStr(objPaperReadWriteEN: clsPaperReadWriteEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ReaderId = '{0}'", objPaperReadWriteEN.readerId);
  strWhereCond += Format(" and PaperId = '{0}'", objPaperReadWriteEN.paperId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PaperReadWrite(论文读写表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strReaderId: 阅读者Id(要求唯一的字段)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PaperReadWrite_GetUniCondStr4Update(
  objPaperReadWriteEN: clsPaperReadWriteEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PaperRWId <> '{0}'", objPaperReadWriteEN.paperRWId);
  strWhereCond += Format(" and ReaderId = '{0}'", objPaperReadWriteEN.readerId);
  strWhereCond += Format(" and PaperId = '{0}'", objPaperReadWriteEN.paperId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objPaperReadWriteENS:源对象
 * @param objPaperReadWriteENT:目标对象
 */
export function PaperReadWrite_CopyObjTo(
  objPaperReadWriteENS: clsPaperReadWriteEN,
  objPaperReadWriteENT: clsPaperReadWriteEN,
): void {
  objPaperReadWriteENT.paperRWId = objPaperReadWriteENS.paperRWId; //课文阅读
  objPaperReadWriteENT.readerId = objPaperReadWriteENS.readerId; //阅读者Id
  objPaperReadWriteENT.paperId = objPaperReadWriteENS.paperId; //论文Id
  objPaperReadWriteENT.researchQuestion = objPaperReadWriteENS.researchQuestion; //研究问题
  objPaperReadWriteENT.operationTypeId = objPaperReadWriteENS.operationTypeId; //操作类型ID
  objPaperReadWriteENT.updDate = objPaperReadWriteENS.updDate; //修改日期
  objPaperReadWriteENT.memo = objPaperReadWriteENS.memo; //备注
  objPaperReadWriteENT.isSubmit = objPaperReadWriteENS.isSubmit; //是否提交
  objPaperReadWriteENT.isPublic = objPaperReadWriteENS.isPublic; //是否公开
  objPaperReadWriteENT.submitter = objPaperReadWriteENS.submitter; //提交人
  objPaperReadWriteENT.idCurrEduCls = objPaperReadWriteENS.idCurrEduCls; //教学班流水号
  objPaperReadWriteENT.subVCount = objPaperReadWriteENS.subVCount; //论文子观点数
  objPaperReadWriteENT.teaCount = objPaperReadWriteENS.teaCount; //TeaCount
  objPaperReadWriteENT.createDate = objPaperReadWriteENS.createDate; //建立日期
  objPaperReadWriteENT.shareId = objPaperReadWriteENS.shareId; //分享Id
  objPaperReadWriteENT.updUser = objPaperReadWriteENS.updUser; //修改人
  objPaperReadWriteENT.sfUpdFldSetStr = objPaperReadWriteENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPaperReadWriteENS:源对象
 * @param objPaperReadWriteENT:目标对象
 */
export function PaperReadWrite_GetObjFromJsonObj(
  objPaperReadWriteENS: clsPaperReadWriteEN,
): clsPaperReadWriteEN {
  const objPaperReadWriteENT: clsPaperReadWriteEN = new clsPaperReadWriteEN();
  ObjectAssign(objPaperReadWriteENT, objPaperReadWriteENS);
  return objPaperReadWriteENT;
}
