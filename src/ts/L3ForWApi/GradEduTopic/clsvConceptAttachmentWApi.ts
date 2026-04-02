/**
 * 类名:clsvConceptAttachmentWApi
 * 表名:vConceptAttachment(01120606)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:36
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
 * vConceptAttachment(vConceptAttachment)
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
import { clsvConceptAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsvConceptAttachmentEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vConceptAttachment_Controller = 'vConceptAttachmentApi';
export const vConceptAttachment_ConstructorName = 'vConceptAttachment';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngConceptAttachmentId:关键字
 * @returns 对象
 **/
export async function vConceptAttachment_GetObjByConceptAttachmentIdAsync(
  lngConceptAttachmentId: number,
): Promise<clsvConceptAttachmentEN | null> {
  const strThisFuncName = 'GetObjByConceptAttachmentIdAsync';

  if (lngConceptAttachmentId == 0) {
    const strMsg = Format(
      '参数:[lngConceptAttachmentId]不能为空!(In clsvConceptAttachmentWApi.GetObjByConceptAttachmentIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByConceptAttachmentId';
  const strUrl = GetWebApiUrl(vConceptAttachment_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngConceptAttachmentId,
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
      const objvConceptAttachment = vConceptAttachment_GetObjFromJsonObj(returnObj);
      return objvConceptAttachment;
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
        vConceptAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConceptAttachment_ConstructorName,
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
 * @param lngConceptAttachmentId:所给的关键字
 * @returns 对象
 */
export async function vConceptAttachment_GetObjByConceptAttachmentIdCache(
  lngConceptAttachmentId: number,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByConceptAttachmentIdCache';

  if (lngConceptAttachmentId == 0) {
    const strMsg = Format(
      '参数:[lngConceptAttachmentId]不能为空!(In clsvConceptAttachmentWApi.GetObjByConceptAttachmentIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvConceptAttachmentObjLstCache = await vConceptAttachment_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrvConceptAttachmentSel = arrvConceptAttachmentObjLstCache.filter(
      (x) => x.conceptAttachmentId == lngConceptAttachmentId,
    );
    let objvConceptAttachment: clsvConceptAttachmentEN;
    if (arrvConceptAttachmentSel.length > 0) {
      objvConceptAttachment = arrvConceptAttachmentSel[0];
      return objvConceptAttachment;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvConceptAttachmentConst =
          await vConceptAttachment_GetObjByConceptAttachmentIdAsync(lngConceptAttachmentId);
        if (objvConceptAttachmentConst != null) {
          vConceptAttachment_ReFreshThisCache(strIdCurrEduCls);
          return objvConceptAttachmentConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngConceptAttachmentId,
      vConceptAttachment_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngConceptAttachmentId:所给的关键字
 * @returns 对象
 */
export async function vConceptAttachment_GetObjByConceptAttachmentIdlocalStorage(
  lngConceptAttachmentId: number,
) {
  const strThisFuncName = 'GetObjByConceptAttachmentIdlocalStorage';

  if (lngConceptAttachmentId == 0) {
    const strMsg = Format(
      '参数:[lngConceptAttachmentId]不能为空!(In clsvConceptAttachmentWApi.GetObjByConceptAttachmentIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvConceptAttachmentEN._CurrTabName, lngConceptAttachmentId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvConceptAttachmentCache: clsvConceptAttachmentEN = JSON.parse(strTempObj);
    return objvConceptAttachmentCache;
  }
  try {
    const objvConceptAttachment = await vConceptAttachment_GetObjByConceptAttachmentIdAsync(
      lngConceptAttachmentId,
    );
    if (objvConceptAttachment != null) {
      localStorage.setItem(strKey, JSON.stringify(objvConceptAttachment));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvConceptAttachment;
    }
    return objvConceptAttachment;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngConceptAttachmentId,
      vConceptAttachment_ConstructorName,
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
export async function vConceptAttachment_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsvConceptAttachmentWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvConceptAttachmentWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvConceptAttachmentEN.con_ConceptAttachmentId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvConceptAttachmentEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvConceptAttachmentEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngConceptAttachmentId = Number(strInValue);
  if (lngConceptAttachmentId == 0) {
    return '';
  }
  const objvConceptAttachment = await vConceptAttachment_GetObjByConceptAttachmentIdCache(
    lngConceptAttachmentId,
    strIdCurrEduClsClassfy,
  );
  if (objvConceptAttachment == null) return '';
  if (objvConceptAttachment.GetFldValue(strOutFldName) == null) return '';
  return objvConceptAttachment.GetFldValue(strOutFldName).toString();
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
export function vConceptAttachment_SortFunDefa(
  a: clsvConceptAttachmentEN,
  b: clsvConceptAttachmentEN,
): number {
  return a.conceptAttachmentId - b.conceptAttachmentId;
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
export function vConceptAttachment_SortFunDefa2Fld(
  a: clsvConceptAttachmentEN,
  b: clsvConceptAttachmentEN,
): number {
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
export function vConceptAttachment_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvConceptAttachmentEN.con_ConceptName:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          if (a.conceptName == null) return -1;
          if (b.conceptName == null) return 1;
          return a.conceptName.localeCompare(b.conceptName);
        };
      case clsvConceptAttachmentEN.con_ConceptAttachmentId:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          return a.conceptAttachmentId - b.conceptAttachmentId;
        };
      case clsvConceptAttachmentEN.con_ConceptContent:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          if (a.conceptContent == null) return -1;
          if (b.conceptContent == null) return 1;
          return a.conceptContent.localeCompare(b.conceptContent);
        };
      case clsvConceptAttachmentEN.con_ConceptAttachmentName:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          if (a.conceptAttachmentName == null) return -1;
          if (b.conceptAttachmentName == null) return 1;
          return a.conceptAttachmentName.localeCompare(b.conceptAttachmentName);
        };
      case clsvConceptAttachmentEN.con_ConceptId:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          if (a.conceptId == null) return -1;
          if (b.conceptId == null) return 1;
          return a.conceptId.localeCompare(b.conceptId);
        };
      case clsvConceptAttachmentEN.con_IsSubmit:
        return (a: clsvConceptAttachmentEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsvConceptAttachmentEN.con_FilePath:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          return a.filePath.localeCompare(b.filePath);
        };
      case clsvConceptAttachmentEN.con_UpdDate:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvConceptAttachmentEN.con_Memo:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvConceptAttachmentEN.con_IdCurrEduCls:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vConceptAttachment]中不存在!(in ${vConceptAttachment_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvConceptAttachmentEN.con_ConceptName:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          if (b.conceptName == null) return -1;
          if (a.conceptName == null) return 1;
          return b.conceptName.localeCompare(a.conceptName);
        };
      case clsvConceptAttachmentEN.con_ConceptAttachmentId:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          return b.conceptAttachmentId - a.conceptAttachmentId;
        };
      case clsvConceptAttachmentEN.con_ConceptContent:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          if (b.conceptContent == null) return -1;
          if (a.conceptContent == null) return 1;
          return b.conceptContent.localeCompare(a.conceptContent);
        };
      case clsvConceptAttachmentEN.con_ConceptAttachmentName:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          if (b.conceptAttachmentName == null) return -1;
          if (a.conceptAttachmentName == null) return 1;
          return b.conceptAttachmentName.localeCompare(a.conceptAttachmentName);
        };
      case clsvConceptAttachmentEN.con_ConceptId:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          if (b.conceptId == null) return -1;
          if (a.conceptId == null) return 1;
          return b.conceptId.localeCompare(a.conceptId);
        };
      case clsvConceptAttachmentEN.con_IsSubmit:
        return (b: clsvConceptAttachmentEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsvConceptAttachmentEN.con_FilePath:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          return b.filePath.localeCompare(a.filePath);
        };
      case clsvConceptAttachmentEN.con_UpdDate:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvConceptAttachmentEN.con_Memo:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvConceptAttachmentEN.con_IdCurrEduCls:
        return (a: clsvConceptAttachmentEN, b: clsvConceptAttachmentEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vConceptAttachment]中不存在!(in ${vConceptAttachment_ConstructorName}.${strThisFuncName})`;
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
export async function vConceptAttachment_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvConceptAttachmentEN.con_ConceptName:
      return (obj: clsvConceptAttachmentEN) => {
        return obj.conceptName === value;
      };
    case clsvConceptAttachmentEN.con_ConceptAttachmentId:
      return (obj: clsvConceptAttachmentEN) => {
        return obj.conceptAttachmentId === value;
      };
    case clsvConceptAttachmentEN.con_ConceptContent:
      return (obj: clsvConceptAttachmentEN) => {
        return obj.conceptContent === value;
      };
    case clsvConceptAttachmentEN.con_ConceptAttachmentName:
      return (obj: clsvConceptAttachmentEN) => {
        return obj.conceptAttachmentName === value;
      };
    case clsvConceptAttachmentEN.con_ConceptId:
      return (obj: clsvConceptAttachmentEN) => {
        return obj.conceptId === value;
      };
    case clsvConceptAttachmentEN.con_IsSubmit:
      return (obj: clsvConceptAttachmentEN) => {
        return obj.isSubmit === value;
      };
    case clsvConceptAttachmentEN.con_FilePath:
      return (obj: clsvConceptAttachmentEN) => {
        return obj.filePath === value;
      };
    case clsvConceptAttachmentEN.con_UpdDate:
      return (obj: clsvConceptAttachmentEN) => {
        return obj.updDate === value;
      };
    case clsvConceptAttachmentEN.con_Memo:
      return (obj: clsvConceptAttachmentEN) => {
        return obj.memo === value;
      };
    case clsvConceptAttachmentEN.con_IdCurrEduCls:
      return (obj: clsvConceptAttachmentEN) => {
        return obj.idCurrEduCls === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vConceptAttachment]中不存在!(in ${vConceptAttachment_ConstructorName}.${strThisFuncName})`;
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
export async function vConceptAttachment_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsvConceptAttachmentWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvConceptAttachmentWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvConceptAttachmentEN.con_ConceptAttachmentId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvConceptAttachment = await vConceptAttachment_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrvConceptAttachment == null) return [];
  let arrvConceptAttachmentSel = arrvConceptAttachment;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvConceptAttachmentSel.length == 0) return [];
  return arrvConceptAttachmentSel.map((x) => x.conceptAttachmentId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vConceptAttachment_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vConceptAttachment_Controller, strAction);

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
        vConceptAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConceptAttachment_ConstructorName,
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
export async function vConceptAttachment_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vConceptAttachment_Controller, strAction);

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
        vConceptAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConceptAttachment_ConstructorName,
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
export async function vConceptAttachment_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvConceptAttachmentEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vConceptAttachment_Controller, strAction);

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
      const objvConceptAttachment = vConceptAttachment_GetObjFromJsonObj(returnObj);
      return objvConceptAttachment;
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
        vConceptAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConceptAttachment_ConstructorName,
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
export async function vConceptAttachment_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvConceptAttachmentEN.WhereFormat) == false) {
    strWhereCond = Format(clsvConceptAttachmentEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvConceptAttachmentEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvConceptAttachmentEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvConceptAttachmentEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvConceptAttachmentExObjLstCache: Array<clsvConceptAttachmentEN> =
      CacheHelper.Get(strKey);
    const arrvConceptAttachmentObjLstT = vConceptAttachment_GetObjLstByJSONObjLst(
      arrvConceptAttachmentExObjLstCache,
    );
    return arrvConceptAttachmentObjLstT;
  }
  try {
    const arrvConceptAttachmentExObjLst = await vConceptAttachment_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvConceptAttachmentExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvConceptAttachmentExObjLst.length,
    );
    console.log(strInfo);
    return arrvConceptAttachmentExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vConceptAttachment_ConstructorName,
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
export async function vConceptAttachment_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvConceptAttachmentEN.WhereFormat) == false) {
    strWhereCond = Format(clsvConceptAttachmentEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvConceptAttachmentEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvConceptAttachmentEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvConceptAttachmentEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvConceptAttachmentEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvConceptAttachmentExObjLstCache: Array<clsvConceptAttachmentEN> =
      JSON.parse(strTempObjLst);
    const arrvConceptAttachmentObjLstT = vConceptAttachment_GetObjLstByJSONObjLst(
      arrvConceptAttachmentExObjLstCache,
    );
    return arrvConceptAttachmentObjLstT;
  }
  try {
    const arrvConceptAttachmentExObjLst = await vConceptAttachment_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvConceptAttachmentExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvConceptAttachmentExObjLst.length,
    );
    console.log(strInfo);
    return arrvConceptAttachmentExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vConceptAttachment_ConstructorName,
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
export async function vConceptAttachment_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvConceptAttachmentEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvConceptAttachmentObjLstCache: Array<clsvConceptAttachmentEN> =
      JSON.parse(strTempObjLst);
    return arrvConceptAttachmentObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vConceptAttachment_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvConceptAttachmentEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vConceptAttachment_Controller, strAction);

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
          vConceptAttachment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vConceptAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
        vConceptAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConceptAttachment_ConstructorName,
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
export async function vConceptAttachment_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvConceptAttachmentEN.WhereFormat) == false) {
    strWhereCond = Format(clsvConceptAttachmentEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvConceptAttachmentEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvConceptAttachmentEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvConceptAttachmentEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvConceptAttachmentEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvConceptAttachmentExObjLstCache: Array<clsvConceptAttachmentEN> =
      JSON.parse(strTempObjLst);
    const arrvConceptAttachmentObjLstT = vConceptAttachment_GetObjLstByJSONObjLst(
      arrvConceptAttachmentExObjLstCache,
    );
    return arrvConceptAttachmentObjLstT;
  }
  try {
    const arrvConceptAttachmentExObjLst = await vConceptAttachment_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvConceptAttachmentExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvConceptAttachmentExObjLst.length,
    );
    console.log(strInfo);
    return arrvConceptAttachmentExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vConceptAttachment_ConstructorName,
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
export async function vConceptAttachment_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvConceptAttachmentEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvConceptAttachmentObjLstCache: Array<clsvConceptAttachmentEN> =
      JSON.parse(strTempObjLst);
    return arrvConceptAttachmentObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vConceptAttachment_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsvConceptAttachmentEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsvConceptAttachmentWApi.vConceptAttachment_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvConceptAttachmentWApi.vConceptAttachment_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvConceptAttachmentObjLstCache;
  switch (clsvConceptAttachmentEN.CacheModeId) {
    case '04': //sessionStorage
      arrvConceptAttachmentObjLstCache = await vConceptAttachment_GetObjLstsessionStorage(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrvConceptAttachmentObjLstCache = await vConceptAttachment_GetObjLstlocalStorage(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrvConceptAttachmentObjLstCache = await vConceptAttachment_GetObjLstClientCache(
        strIdCurrEduCls,
      );
      break;
    default:
      arrvConceptAttachmentObjLstCache = await vConceptAttachment_GetObjLstClientCache(
        strIdCurrEduCls,
      );
      break;
  }
  return arrvConceptAttachmentObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vConceptAttachment_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvConceptAttachmentObjLstCache;
  switch (clsvConceptAttachmentEN.CacheModeId) {
    case '04': //sessionStorage
      arrvConceptAttachmentObjLstCache = await vConceptAttachment_GetObjLstsessionStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrvConceptAttachmentObjLstCache = await vConceptAttachment_GetObjLstlocalStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrvConceptAttachmentObjLstCache = null;
      break;
    default:
      arrvConceptAttachmentObjLstCache = null;
      break;
  }
  return arrvConceptAttachmentObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngConceptAttachmentIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vConceptAttachment_GetSubObjLstCache(
  objvConceptAttachmentCond: clsvConceptAttachmentEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvConceptAttachmentObjLstCache = await vConceptAttachment_GetObjLstCache(strIdCurrEduCls);
  let arrvConceptAttachmentSel = arrvConceptAttachmentObjLstCache;
  if (
    objvConceptAttachmentCond.sfFldComparisonOp == null ||
    objvConceptAttachmentCond.sfFldComparisonOp == ''
  )
    return arrvConceptAttachmentSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvConceptAttachmentCond.sfFldComparisonOp,
  );
  //console.log("clsvConceptAttachmentWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvConceptAttachmentCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvConceptAttachmentCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvConceptAttachmentSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvConceptAttachmentCond),
      vConceptAttachment_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvConceptAttachmentEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrConceptAttachmentId:关键字列表
 * @returns 对象列表
 **/
export async function vConceptAttachment_GetObjLstByConceptAttachmentIdLstAsync(
  arrConceptAttachmentId: Array<string>,
): Promise<Array<clsvConceptAttachmentEN>> {
  const strThisFuncName = 'GetObjLstByConceptAttachmentIdLstAsync';
  const strAction = 'GetObjLstByConceptAttachmentIdLst';
  const strUrl = GetWebApiUrl(vConceptAttachment_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrConceptAttachmentId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vConceptAttachment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vConceptAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
        vConceptAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConceptAttachment_ConstructorName,
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
 * @param arrlngConceptAttachmentIdLst:关键字列表
 * @returns 对象列表
 */
export async function vConceptAttachment_GetObjLstByConceptAttachmentIdLstCache(
  arrConceptAttachmentIdLst: Array<number>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByConceptAttachmentIdLstCache';
  try {
    const arrvConceptAttachmentObjLstCache = await vConceptAttachment_GetObjLstCache(
      strIdCurrEduCls,
    );
    const arrvConceptAttachmentSel = arrvConceptAttachmentObjLstCache.filter(
      (x) => arrConceptAttachmentIdLst.indexOf(x.conceptAttachmentId) > -1,
    );
    return arrvConceptAttachmentSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrConceptAttachmentIdLst.join(','),
      vConceptAttachment_ConstructorName,
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
export async function vConceptAttachment_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvConceptAttachmentEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vConceptAttachment_Controller, strAction);

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
          vConceptAttachment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vConceptAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
        vConceptAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConceptAttachment_ConstructorName,
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
export async function vConceptAttachment_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvConceptAttachmentEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vConceptAttachment_Controller, strAction);

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
          vConceptAttachment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vConceptAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
        vConceptAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConceptAttachment_ConstructorName,
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
export async function vConceptAttachment_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvConceptAttachmentEN>();
  const arrvConceptAttachmentObjLstCache = await vConceptAttachment_GetObjLstCache(strIdCurrEduCls);
  if (arrvConceptAttachmentObjLstCache.length == 0) return arrvConceptAttachmentObjLstCache;
  let arrvConceptAttachmentSel = arrvConceptAttachmentObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvConceptAttachmentCond = new clsvConceptAttachmentEN();
  ObjectAssign(objvConceptAttachmentCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvConceptAttachmentWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvConceptAttachmentCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvConceptAttachmentSel.length == 0) return arrvConceptAttachmentSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvConceptAttachmentSel = arrvConceptAttachmentSel.sort(
        vConceptAttachment_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvConceptAttachmentSel = arrvConceptAttachmentSel.sort(objPagerPara.sortFun);
    }
    arrvConceptAttachmentSel = arrvConceptAttachmentSel.slice(intStart, intEnd);
    return arrvConceptAttachmentSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vConceptAttachment_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvConceptAttachmentEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vConceptAttachment_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvConceptAttachmentEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvConceptAttachmentEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vConceptAttachment_Controller, strAction);

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
          vConceptAttachment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vConceptAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
        vConceptAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConceptAttachment_ConstructorName,
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
 * @param objlngConceptAttachmentIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vConceptAttachment_IsExistRecordCache(
  objvConceptAttachmentCond: clsvConceptAttachmentEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvConceptAttachmentObjLstCache = await vConceptAttachment_GetObjLstCache(strIdCurrEduCls);
  if (arrvConceptAttachmentObjLstCache == null) return false;
  let arrvConceptAttachmentSel = arrvConceptAttachmentObjLstCache;
  if (
    objvConceptAttachmentCond.sfFldComparisonOp == null ||
    objvConceptAttachmentCond.sfFldComparisonOp == ''
  )
    return arrvConceptAttachmentSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvConceptAttachmentCond.sfFldComparisonOp,
  );
  //console.log("clsvConceptAttachmentWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvConceptAttachmentCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvConceptAttachmentCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvConceptAttachmentSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvConceptAttachmentCond),
      vConceptAttachment_ConstructorName,
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
export async function vConceptAttachment_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vConceptAttachment_Controller, strAction);

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
        vConceptAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConceptAttachment_ConstructorName,
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
 * @param lngConceptAttachmentId:所给的关键字
 * @returns 对象
 */
export async function vConceptAttachment_IsExistCache(
  lngConceptAttachmentId: number,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrvConceptAttachmentObjLstCache = await vConceptAttachment_GetObjLstCache(strIdCurrEduCls);
  if (arrvConceptAttachmentObjLstCache == null) return false;
  try {
    const arrvConceptAttachmentSel = arrvConceptAttachmentObjLstCache.filter(
      (x) => x.conceptAttachmentId == lngConceptAttachmentId,
    );
    if (arrvConceptAttachmentSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngConceptAttachmentId,
      vConceptAttachment_ConstructorName,
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
 * @param lngConceptAttachmentId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vConceptAttachment_IsExistAsync(
  lngConceptAttachmentId: number,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vConceptAttachment_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngConceptAttachmentId,
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
        vConceptAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConceptAttachment_ConstructorName,
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
export async function vConceptAttachment_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vConceptAttachment_Controller, strAction);

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
        vConceptAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vConceptAttachment_ConstructorName,
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
 * @param objvConceptAttachmentCond:条件对象
 * @returns 对象列表记录数
 */
export async function vConceptAttachment_GetRecCountByCondCache(
  objvConceptAttachmentCond: clsvConceptAttachmentEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvConceptAttachmentObjLstCache = await vConceptAttachment_GetObjLstCache(strIdCurrEduCls);
  if (arrvConceptAttachmentObjLstCache == null) return 0;
  let arrvConceptAttachmentSel = arrvConceptAttachmentObjLstCache;
  if (
    objvConceptAttachmentCond.sfFldComparisonOp == null ||
    objvConceptAttachmentCond.sfFldComparisonOp == ''
  )
    return arrvConceptAttachmentSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvConceptAttachmentCond.sfFldComparisonOp,
  );
  //console.log("clsvConceptAttachmentWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvConceptAttachmentCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvConceptAttachmentCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvConceptAttachmentSel = arrvConceptAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvConceptAttachmentSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvConceptAttachmentCond),
      vConceptAttachment_ConstructorName,
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
export function vConceptAttachment_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vConceptAttachment_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvConceptAttachmentEN._CurrTabName, strIdCurrEduCls);
    switch (clsvConceptAttachmentEN.CacheModeId) {
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
export function vConceptAttachment_GetJSONStrByObj(
  pobjvConceptAttachmentEN: clsvConceptAttachmentEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvConceptAttachmentEN);
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
export function vConceptAttachment_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvConceptAttachmentEN> {
  let arrvConceptAttachmentObjLst = new Array<clsvConceptAttachmentEN>();
  if (strJSON === '') {
    return arrvConceptAttachmentObjLst;
  }
  try {
    arrvConceptAttachmentObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvConceptAttachmentObjLst;
  }
  return arrvConceptAttachmentObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvConceptAttachmentObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vConceptAttachment_GetObjLstByJSONObjLst(
  arrvConceptAttachmentObjLstS: Array<clsvConceptAttachmentEN>,
): Array<clsvConceptAttachmentEN> {
  const arrvConceptAttachmentObjLst = new Array<clsvConceptAttachmentEN>();
  for (const objInFor of arrvConceptAttachmentObjLstS) {
    const obj1 = vConceptAttachment_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvConceptAttachmentObjLst.push(obj1);
  }
  return arrvConceptAttachmentObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vConceptAttachment_GetObjByJSONStr(strJSON: string): clsvConceptAttachmentEN {
  let pobjvConceptAttachmentEN = new clsvConceptAttachmentEN();
  if (strJSON === '') {
    return pobjvConceptAttachmentEN;
  }
  try {
    pobjvConceptAttachmentEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvConceptAttachmentEN;
  }
  return pobjvConceptAttachmentEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vConceptAttachment_GetCombineCondition(
  objvConceptAttachmentCond: clsvConceptAttachmentEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptAttachmentCond.dicFldComparisonOp,
      clsvConceptAttachmentEN.con_ConceptName,
    ) == true
  ) {
    const strComparisonOpConceptName: string =
      objvConceptAttachmentCond.dicFldComparisonOp[clsvConceptAttachmentEN.con_ConceptName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptAttachmentEN.con_ConceptName,
      objvConceptAttachmentCond.conceptName,
      strComparisonOpConceptName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptAttachmentCond.dicFldComparisonOp,
      clsvConceptAttachmentEN.con_ConceptAttachmentId,
    ) == true
  ) {
    const strComparisonOpConceptAttachmentId: string =
      objvConceptAttachmentCond.dicFldComparisonOp[clsvConceptAttachmentEN.con_ConceptAttachmentId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvConceptAttachmentEN.con_ConceptAttachmentId,
      objvConceptAttachmentCond.conceptAttachmentId,
      strComparisonOpConceptAttachmentId,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptAttachmentCond.dicFldComparisonOp,
      clsvConceptAttachmentEN.con_ConceptAttachmentName,
    ) == true
  ) {
    const strComparisonOpConceptAttachmentName: string =
      objvConceptAttachmentCond.dicFldComparisonOp[
        clsvConceptAttachmentEN.con_ConceptAttachmentName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptAttachmentEN.con_ConceptAttachmentName,
      objvConceptAttachmentCond.conceptAttachmentName,
      strComparisonOpConceptAttachmentName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptAttachmentCond.dicFldComparisonOp,
      clsvConceptAttachmentEN.con_ConceptId,
    ) == true
  ) {
    const strComparisonOpConceptId: string =
      objvConceptAttachmentCond.dicFldComparisonOp[clsvConceptAttachmentEN.con_ConceptId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptAttachmentEN.con_ConceptId,
      objvConceptAttachmentCond.conceptId,
      strComparisonOpConceptId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptAttachmentCond.dicFldComparisonOp,
      clsvConceptAttachmentEN.con_IsSubmit,
    ) == true
  ) {
    if (objvConceptAttachmentCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvConceptAttachmentEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvConceptAttachmentEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptAttachmentCond.dicFldComparisonOp,
      clsvConceptAttachmentEN.con_FilePath,
    ) == true
  ) {
    const strComparisonOpFilePath: string =
      objvConceptAttachmentCond.dicFldComparisonOp[clsvConceptAttachmentEN.con_FilePath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptAttachmentEN.con_FilePath,
      objvConceptAttachmentCond.filePath,
      strComparisonOpFilePath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptAttachmentCond.dicFldComparisonOp,
      clsvConceptAttachmentEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvConceptAttachmentCond.dicFldComparisonOp[clsvConceptAttachmentEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptAttachmentEN.con_UpdDate,
      objvConceptAttachmentCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptAttachmentCond.dicFldComparisonOp,
      clsvConceptAttachmentEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvConceptAttachmentCond.dicFldComparisonOp[clsvConceptAttachmentEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptAttachmentEN.con_Memo,
      objvConceptAttachmentCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvConceptAttachmentCond.dicFldComparisonOp,
      clsvConceptAttachmentEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvConceptAttachmentCond.dicFldComparisonOp[clsvConceptAttachmentEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvConceptAttachmentEN.con_IdCurrEduCls,
      objvConceptAttachmentCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vConceptAttachment(vConceptAttachment),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngConceptAttachmentId: 概念附件Id(要求唯一的字段)
 * @param strConceptId: 概念Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vConceptAttachment_GetUniCondStr(
  objvConceptAttachmentEN: clsvConceptAttachmentEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and ConceptAttachmentId = '{0}'",
    objvConceptAttachmentEN.conceptAttachmentId,
  );
  strWhereCond += Format(" and ConceptId = '{0}'", objvConceptAttachmentEN.conceptId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vConceptAttachment(vConceptAttachment),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngConceptAttachmentId: 概念附件Id(要求唯一的字段)
 * @param strConceptId: 概念Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vConceptAttachment_GetUniCondStr4Update(
  objvConceptAttachmentEN: clsvConceptAttachmentEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and ConceptAttachmentId <> '{0}'",
    objvConceptAttachmentEN.conceptAttachmentId,
  );
  strWhereCond += Format(
    " and ConceptAttachmentId = '{0}'",
    objvConceptAttachmentEN.conceptAttachmentId,
  );
  strWhereCond += Format(" and ConceptId = '{0}'", objvConceptAttachmentEN.conceptId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvConceptAttachmentENS:源对象
 * @param objvConceptAttachmentENT:目标对象
 */
export function vConceptAttachment_CopyObjTo(
  objvConceptAttachmentENS: clsvConceptAttachmentEN,
  objvConceptAttachmentENT: clsvConceptAttachmentEN,
): void {
  objvConceptAttachmentENT.conceptName = objvConceptAttachmentENS.conceptName; //概念名称
  objvConceptAttachmentENT.conceptAttachmentId = objvConceptAttachmentENS.conceptAttachmentId; //概念附件Id
  objvConceptAttachmentENT.conceptContent = objvConceptAttachmentENS.conceptContent; //概念内容
  objvConceptAttachmentENT.conceptAttachmentName = objvConceptAttachmentENS.conceptAttachmentName; //附件名称
  objvConceptAttachmentENT.conceptId = objvConceptAttachmentENS.conceptId; //概念Id
  objvConceptAttachmentENT.isSubmit = objvConceptAttachmentENS.isSubmit; //是否提交
  objvConceptAttachmentENT.filePath = objvConceptAttachmentENS.filePath; //文件路径
  objvConceptAttachmentENT.updDate = objvConceptAttachmentENS.updDate; //修改日期
  objvConceptAttachmentENT.memo = objvConceptAttachmentENS.memo; //备注
  objvConceptAttachmentENT.idCurrEduCls = objvConceptAttachmentENS.idCurrEduCls; //教学班流水号
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvConceptAttachmentENS:源对象
 * @param objvConceptAttachmentENT:目标对象
 */
export function vConceptAttachment_GetObjFromJsonObj(
  objvConceptAttachmentENS: clsvConceptAttachmentEN,
): clsvConceptAttachmentEN {
  const objvConceptAttachmentENT: clsvConceptAttachmentEN = new clsvConceptAttachmentEN();
  ObjectAssign(objvConceptAttachmentENT, objvConceptAttachmentENS);
  return objvConceptAttachmentENT;
}
