/**
 * 类名:clsObjectiveAttachmentWApi
 * 表名:ObjectiveAttachment(01120614)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:20
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
 * 客观附件表(ObjectiveAttachment)
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
import { clsObjectiveAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsObjectiveAttachmentEN';
import { vObjectiveAttachment_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduTopic/clsvObjectiveAttachmentWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const objectiveAttachment_Controller = 'ObjectiveAttachmentApi';
export const objectiveAttachment_ConstructorName = 'objectiveAttachment';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngObjectiveAttachmentId:关键字
 * @returns 对象
 **/
export async function ObjectiveAttachment_GetObjByObjectiveAttachmentIdAsync(
  lngObjectiveAttachmentId: number,
): Promise<clsObjectiveAttachmentEN | null> {
  const strThisFuncName = 'GetObjByObjectiveAttachmentIdAsync';

  if (lngObjectiveAttachmentId == 0) {
    const strMsg = Format(
      '参数:[lngObjectiveAttachmentId]不能为空!(In clsObjectiveAttachmentWApi.GetObjByObjectiveAttachmentIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByObjectiveAttachmentId';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngObjectiveAttachmentId,
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
      const objObjectiveAttachment = ObjectiveAttachment_GetObjFromJsonObj(returnObj);
      return objObjectiveAttachment;
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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
 * @param lngObjectiveAttachmentId:所给的关键字
 * @returns 对象
 */
export async function ObjectiveAttachment_GetObjByObjectiveAttachmentIdCache(
  lngObjectiveAttachmentId: number,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByObjectiveAttachmentIdCache';

  if (lngObjectiveAttachmentId == 0) {
    const strMsg = Format(
      '参数:[lngObjectiveAttachmentId]不能为空!(In clsObjectiveAttachmentWApi.GetObjByObjectiveAttachmentIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrObjectiveAttachmentObjLstCache = await ObjectiveAttachment_GetObjLstCache(
    strIdCurrEduCls,
  );
  try {
    const arrObjectiveAttachmentSel = arrObjectiveAttachmentObjLstCache.filter(
      (x) => x.objectiveAttachmentId == lngObjectiveAttachmentId,
    );
    let objObjectiveAttachment: clsObjectiveAttachmentEN;
    if (arrObjectiveAttachmentSel.length > 0) {
      objObjectiveAttachment = arrObjectiveAttachmentSel[0];
      return objObjectiveAttachment;
    } else {
      if (bolTryAsyncOnce == true) {
        const objObjectiveAttachmentConst =
          await ObjectiveAttachment_GetObjByObjectiveAttachmentIdAsync(lngObjectiveAttachmentId);
        if (objObjectiveAttachmentConst != null) {
          ObjectiveAttachment_ReFreshThisCache(strIdCurrEduCls);
          return objObjectiveAttachmentConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngObjectiveAttachmentId,
      objectiveAttachment_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngObjectiveAttachmentId:所给的关键字
 * @returns 对象
 */
export async function ObjectiveAttachment_GetObjByObjectiveAttachmentIdlocalStorage(
  lngObjectiveAttachmentId: number,
) {
  const strThisFuncName = 'GetObjByObjectiveAttachmentIdlocalStorage';

  if (lngObjectiveAttachmentId == 0) {
    const strMsg = Format(
      '参数:[lngObjectiveAttachmentId]不能为空!(In clsObjectiveAttachmentWApi.GetObjByObjectiveAttachmentIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsObjectiveAttachmentEN._CurrTabName, lngObjectiveAttachmentId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objObjectiveAttachmentCache: clsObjectiveAttachmentEN = JSON.parse(strTempObj);
    return objObjectiveAttachmentCache;
  }
  try {
    const objObjectiveAttachment = await ObjectiveAttachment_GetObjByObjectiveAttachmentIdAsync(
      lngObjectiveAttachmentId,
    );
    if (objObjectiveAttachment != null) {
      localStorage.setItem(strKey, JSON.stringify(objObjectiveAttachment));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objObjectiveAttachment;
    }
    return objObjectiveAttachment;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngObjectiveAttachmentId,
      objectiveAttachment_ConstructorName,
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
 * @param objObjectiveAttachment:所给的对象
 * @returns 对象
 */
export async function ObjectiveAttachment_UpdateObjInLstCache(
  objObjectiveAttachment: clsObjectiveAttachmentEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrObjectiveAttachmentObjLstCache = await ObjectiveAttachment_GetObjLstCache(
      strIdCurrEduCls,
    );
    const obj = arrObjectiveAttachmentObjLstCache.find(
      (x) =>
        x.topicObjectiveId == objObjectiveAttachment.topicObjectiveId &&
        x.objectiveAttachmentId == objObjectiveAttachment.objectiveAttachmentId,
    );
    if (obj != null) {
      objObjectiveAttachment.objectiveAttachmentId = obj.objectiveAttachmentId;
      ObjectAssign(obj, objObjectiveAttachment);
    } else {
      arrObjectiveAttachmentObjLstCache.push(objObjectiveAttachment);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      objectiveAttachment_ConstructorName,
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
export async function ObjectiveAttachment_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsObjectiveAttachmentWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsObjectiveAttachmentWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsObjectiveAttachmentEN.con_ObjectiveAttachmentId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsObjectiveAttachmentEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsObjectiveAttachmentEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngObjectiveAttachmentId = Number(strInValue);
  if (lngObjectiveAttachmentId == 0) {
    return '';
  }
  const objObjectiveAttachment = await ObjectiveAttachment_GetObjByObjectiveAttachmentIdCache(
    lngObjectiveAttachmentId,
    strIdCurrEduClsClassfy,
  );
  if (objObjectiveAttachment == null) return '';
  if (objObjectiveAttachment.GetFldValue(strOutFldName) == null) return '';
  return objObjectiveAttachment.GetFldValue(strOutFldName).toString();
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
export function ObjectiveAttachment_SortFunDefa(
  a: clsObjectiveAttachmentEN,
  b: clsObjectiveAttachmentEN,
): number {
  return a.objectiveAttachmentId - b.objectiveAttachmentId;
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
export function ObjectiveAttachment_SortFunDefa2Fld(
  a: clsObjectiveAttachmentEN,
  b: clsObjectiveAttachmentEN,
): number {
  if (a.topicObjectiveId == b.topicObjectiveId)
    return a.objectiveAttachmentName.localeCompare(b.objectiveAttachmentName);
  else return a.topicObjectiveId.localeCompare(b.topicObjectiveId);
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
export function ObjectiveAttachment_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsObjectiveAttachmentEN.con_TopicObjectiveId:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          return a.topicObjectiveId.localeCompare(b.topicObjectiveId);
        };
      case clsObjectiveAttachmentEN.con_ObjectiveAttachmentId:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          return a.objectiveAttachmentId - b.objectiveAttachmentId;
        };
      case clsObjectiveAttachmentEN.con_ObjectiveAttachmentName:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          if (a.objectiveAttachmentName == null) return -1;
          if (b.objectiveAttachmentName == null) return 1;
          return a.objectiveAttachmentName.localeCompare(b.objectiveAttachmentName);
        };
      case clsObjectiveAttachmentEN.con_FilePath:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          return a.filePath.localeCompare(b.filePath);
        };
      case clsObjectiveAttachmentEN.con_UpdDate:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsObjectiveAttachmentEN.con_UpdUserId:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsObjectiveAttachmentEN.con_Memo:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsObjectiveAttachmentEN.con_IdCurrEduCls:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ObjectiveAttachment]中不存在!(in ${objectiveAttachment_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsObjectiveAttachmentEN.con_TopicObjectiveId:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          return b.topicObjectiveId.localeCompare(a.topicObjectiveId);
        };
      case clsObjectiveAttachmentEN.con_ObjectiveAttachmentId:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          return b.objectiveAttachmentId - a.objectiveAttachmentId;
        };
      case clsObjectiveAttachmentEN.con_ObjectiveAttachmentName:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          if (b.objectiveAttachmentName == null) return -1;
          if (a.objectiveAttachmentName == null) return 1;
          return b.objectiveAttachmentName.localeCompare(a.objectiveAttachmentName);
        };
      case clsObjectiveAttachmentEN.con_FilePath:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          return b.filePath.localeCompare(a.filePath);
        };
      case clsObjectiveAttachmentEN.con_UpdDate:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsObjectiveAttachmentEN.con_UpdUserId:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsObjectiveAttachmentEN.con_Memo:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsObjectiveAttachmentEN.con_IdCurrEduCls:
        return (a: clsObjectiveAttachmentEN, b: clsObjectiveAttachmentEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ObjectiveAttachment]中不存在!(in ${objectiveAttachment_ConstructorName}.${strThisFuncName})`;
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
export async function ObjectiveAttachment_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsObjectiveAttachmentEN.con_TopicObjectiveId:
      return (obj: clsObjectiveAttachmentEN) => {
        return obj.topicObjectiveId === value;
      };
    case clsObjectiveAttachmentEN.con_ObjectiveAttachmentId:
      return (obj: clsObjectiveAttachmentEN) => {
        return obj.objectiveAttachmentId === value;
      };
    case clsObjectiveAttachmentEN.con_ObjectiveAttachmentName:
      return (obj: clsObjectiveAttachmentEN) => {
        return obj.objectiveAttachmentName === value;
      };
    case clsObjectiveAttachmentEN.con_FilePath:
      return (obj: clsObjectiveAttachmentEN) => {
        return obj.filePath === value;
      };
    case clsObjectiveAttachmentEN.con_UpdDate:
      return (obj: clsObjectiveAttachmentEN) => {
        return obj.updDate === value;
      };
    case clsObjectiveAttachmentEN.con_UpdUserId:
      return (obj: clsObjectiveAttachmentEN) => {
        return obj.updUserId === value;
      };
    case clsObjectiveAttachmentEN.con_Memo:
      return (obj: clsObjectiveAttachmentEN) => {
        return obj.memo === value;
      };
    case clsObjectiveAttachmentEN.con_IdCurrEduCls:
      return (obj: clsObjectiveAttachmentEN) => {
        return obj.idCurrEduCls === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ObjectiveAttachment]中不存在!(in ${objectiveAttachment_ConstructorName}.${strThisFuncName})`;
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
export async function ObjectiveAttachment_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsObjectiveAttachmentWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsObjectiveAttachmentWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsObjectiveAttachmentEN.con_ObjectiveAttachmentId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrObjectiveAttachment = await ObjectiveAttachment_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrObjectiveAttachment == null) return [];
  let arrObjectiveAttachmentSel = arrObjectiveAttachment;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrObjectiveAttachmentSel.length == 0) return [];
  return arrObjectiveAttachmentSel.map((x) => x.objectiveAttachmentId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ObjectiveAttachment_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
export async function ObjectiveAttachment_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
export async function ObjectiveAttachment_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsObjectiveAttachmentEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

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
      const objObjectiveAttachment = ObjectiveAttachment_GetObjFromJsonObj(returnObj);
      return objObjectiveAttachment;
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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
export async function ObjectiveAttachment_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsObjectiveAttachmentEN.WhereFormat) == false) {
    strWhereCond = Format(clsObjectiveAttachmentEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsObjectiveAttachmentEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsObjectiveAttachmentEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsObjectiveAttachmentEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrObjectiveAttachmentExObjLstCache: Array<clsObjectiveAttachmentEN> =
      CacheHelper.Get(strKey);
    const arrObjectiveAttachmentObjLstT = ObjectiveAttachment_GetObjLstByJSONObjLst(
      arrObjectiveAttachmentExObjLstCache,
    );
    return arrObjectiveAttachmentObjLstT;
  }
  try {
    const arrObjectiveAttachmentExObjLst = await ObjectiveAttachment_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrObjectiveAttachmentExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrObjectiveAttachmentExObjLst.length,
    );
    console.log(strInfo);
    return arrObjectiveAttachmentExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      objectiveAttachment_ConstructorName,
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
export async function ObjectiveAttachment_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsObjectiveAttachmentEN.WhereFormat) == false) {
    strWhereCond = Format(clsObjectiveAttachmentEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsObjectiveAttachmentEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsObjectiveAttachmentEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsObjectiveAttachmentEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsObjectiveAttachmentEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrObjectiveAttachmentExObjLstCache: Array<clsObjectiveAttachmentEN> =
      JSON.parse(strTempObjLst);
    const arrObjectiveAttachmentObjLstT = ObjectiveAttachment_GetObjLstByJSONObjLst(
      arrObjectiveAttachmentExObjLstCache,
    );
    return arrObjectiveAttachmentObjLstT;
  }
  try {
    const arrObjectiveAttachmentExObjLst = await ObjectiveAttachment_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrObjectiveAttachmentExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrObjectiveAttachmentExObjLst.length,
    );
    console.log(strInfo);
    return arrObjectiveAttachmentExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      objectiveAttachment_ConstructorName,
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
export async function ObjectiveAttachment_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsObjectiveAttachmentEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrObjectiveAttachmentObjLstCache: Array<clsObjectiveAttachmentEN> =
      JSON.parse(strTempObjLst);
    return arrObjectiveAttachmentObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ObjectiveAttachment_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsObjectiveAttachmentEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

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
          objectiveAttachment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ObjectiveAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
export async function ObjectiveAttachment_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsObjectiveAttachmentEN.WhereFormat) == false) {
    strWhereCond = Format(clsObjectiveAttachmentEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsObjectiveAttachmentEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsObjectiveAttachmentEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsObjectiveAttachmentEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsObjectiveAttachmentEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrObjectiveAttachmentExObjLstCache: Array<clsObjectiveAttachmentEN> =
      JSON.parse(strTempObjLst);
    const arrObjectiveAttachmentObjLstT = ObjectiveAttachment_GetObjLstByJSONObjLst(
      arrObjectiveAttachmentExObjLstCache,
    );
    return arrObjectiveAttachmentObjLstT;
  }
  try {
    const arrObjectiveAttachmentExObjLst = await ObjectiveAttachment_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrObjectiveAttachmentExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrObjectiveAttachmentExObjLst.length,
    );
    console.log(strInfo);
    return arrObjectiveAttachmentExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      objectiveAttachment_ConstructorName,
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
export async function ObjectiveAttachment_GetObjLstsessionStoragePureCache(
  strIdCurrEduCls: string,
) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsObjectiveAttachmentEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrObjectiveAttachmentObjLstCache: Array<clsObjectiveAttachmentEN> =
      JSON.parse(strTempObjLst);
    return arrObjectiveAttachmentObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ObjectiveAttachment_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsObjectiveAttachmentEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsObjectiveAttachmentWApi.ObjectiveAttachment_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsObjectiveAttachmentWApi.ObjectiveAttachment_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrObjectiveAttachmentObjLstCache;
  switch (clsObjectiveAttachmentEN.CacheModeId) {
    case '04': //sessionStorage
      arrObjectiveAttachmentObjLstCache = await ObjectiveAttachment_GetObjLstsessionStorage(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrObjectiveAttachmentObjLstCache = await ObjectiveAttachment_GetObjLstlocalStorage(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrObjectiveAttachmentObjLstCache = await ObjectiveAttachment_GetObjLstClientCache(
        strIdCurrEduCls,
      );
      break;
    default:
      arrObjectiveAttachmentObjLstCache = await ObjectiveAttachment_GetObjLstClientCache(
        strIdCurrEduCls,
      );
      break;
  }
  return arrObjectiveAttachmentObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ObjectiveAttachment_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrObjectiveAttachmentObjLstCache;
  switch (clsObjectiveAttachmentEN.CacheModeId) {
    case '04': //sessionStorage
      arrObjectiveAttachmentObjLstCache =
        await ObjectiveAttachment_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
      break;
    case '03': //localStorage
      arrObjectiveAttachmentObjLstCache = await ObjectiveAttachment_GetObjLstlocalStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrObjectiveAttachmentObjLstCache = null;
      break;
    default:
      arrObjectiveAttachmentObjLstCache = null;
      break;
  }
  return arrObjectiveAttachmentObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngObjectiveAttachmentIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ObjectiveAttachment_GetSubObjLstCache(
  objObjectiveAttachmentCond: clsObjectiveAttachmentEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrObjectiveAttachmentObjLstCache = await ObjectiveAttachment_GetObjLstCache(
    strIdCurrEduCls,
  );
  let arrObjectiveAttachmentSel = arrObjectiveAttachmentObjLstCache;
  if (
    objObjectiveAttachmentCond.sfFldComparisonOp == null ||
    objObjectiveAttachmentCond.sfFldComparisonOp == ''
  )
    return arrObjectiveAttachmentSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objObjectiveAttachmentCond.sfFldComparisonOp,
  );
  //console.log("clsObjectiveAttachmentWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objObjectiveAttachmentCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objObjectiveAttachmentCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrObjectiveAttachmentSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objObjectiveAttachmentCond),
      objectiveAttachment_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsObjectiveAttachmentEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrObjectiveAttachmentId:关键字列表
 * @returns 对象列表
 **/
export async function ObjectiveAttachment_GetObjLstByObjectiveAttachmentIdLstAsync(
  arrObjectiveAttachmentId: Array<string>,
): Promise<Array<clsObjectiveAttachmentEN>> {
  const strThisFuncName = 'GetObjLstByObjectiveAttachmentIdLstAsync';
  const strAction = 'GetObjLstByObjectiveAttachmentIdLst';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrObjectiveAttachmentId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          objectiveAttachment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ObjectiveAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
 * @param arrlngObjectiveAttachmentIdLst:关键字列表
 * @returns 对象列表
 */
export async function ObjectiveAttachment_GetObjLstByObjectiveAttachmentIdLstCache(
  arrObjectiveAttachmentIdLst: Array<number>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByObjectiveAttachmentIdLstCache';
  try {
    const arrObjectiveAttachmentObjLstCache = await ObjectiveAttachment_GetObjLstCache(
      strIdCurrEduCls,
    );
    const arrObjectiveAttachmentSel = arrObjectiveAttachmentObjLstCache.filter(
      (x) => arrObjectiveAttachmentIdLst.indexOf(x.objectiveAttachmentId) > -1,
    );
    return arrObjectiveAttachmentSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrObjectiveAttachmentIdLst.join(','),
      objectiveAttachment_ConstructorName,
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
export async function ObjectiveAttachment_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsObjectiveAttachmentEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

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
          objectiveAttachment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ObjectiveAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
export async function ObjectiveAttachment_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsObjectiveAttachmentEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

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
          objectiveAttachment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ObjectiveAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
export async function ObjectiveAttachment_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsObjectiveAttachmentEN>();
  const arrObjectiveAttachmentObjLstCache = await ObjectiveAttachment_GetObjLstCache(
    strIdCurrEduCls,
  );
  if (arrObjectiveAttachmentObjLstCache.length == 0) return arrObjectiveAttachmentObjLstCache;
  let arrObjectiveAttachmentSel = arrObjectiveAttachmentObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objObjectiveAttachmentCond = new clsObjectiveAttachmentEN();
  ObjectAssign(objObjectiveAttachmentCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsObjectiveAttachmentWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objObjectiveAttachmentCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrObjectiveAttachmentSel.length == 0) return arrObjectiveAttachmentSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.sort(
        ObjectiveAttachment_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.sort(objPagerPara.sortFun);
    }
    arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.slice(intStart, intEnd);
    return arrObjectiveAttachmentSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      objectiveAttachment_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsObjectiveAttachmentEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ObjectiveAttachment_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsObjectiveAttachmentEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsObjectiveAttachmentEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

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
          objectiveAttachment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ObjectiveAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
 * @param lngObjectiveAttachmentId:关键字
 * @returns 获取删除的结果
 **/
export async function ObjectiveAttachment_DelRecordAsync(
  lngObjectiveAttachmentId: number,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngObjectiveAttachmentId);

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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
 * @param arrObjectiveAttachmentId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ObjectiveAttachment_DelObjectiveAttachmentsAsync(
  arrObjectiveAttachmentId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelObjectiveAttachmentsAsync';
  const strAction = 'DelObjectiveAttachments';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrObjectiveAttachmentId, config);
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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
export async function ObjectiveAttachment_DelObjectiveAttachmentsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelObjectiveAttachmentsByCondAsync';
  const strAction = 'DelObjectiveAttachmentsByCond';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
 * @param objObjectiveAttachmentEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ObjectiveAttachment_AddNewRecordAsync(
  objObjectiveAttachmentEN: clsObjectiveAttachmentEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objObjectiveAttachmentEN);
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objObjectiveAttachmentEN, config);
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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objObjectiveAttachmentEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ObjectiveAttachment_AddNewRecordWithReturnKeyAsync(
  objObjectiveAttachmentEN: clsObjectiveAttachmentEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objObjectiveAttachmentEN, config);
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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
 * @param objObjectiveAttachmentEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ObjectiveAttachment_UpdateRecordAsync(
  objObjectiveAttachmentEN: clsObjectiveAttachmentEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objObjectiveAttachmentEN.sfUpdFldSetStr === undefined ||
    objObjectiveAttachmentEN.sfUpdFldSetStr === null ||
    objObjectiveAttachmentEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objObjectiveAttachmentEN.objectiveAttachmentId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objObjectiveAttachmentEN, config);
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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
 * @param objObjectiveAttachmentEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ObjectiveAttachment_UpdateWithConditionAsync(
  objObjectiveAttachmentEN: clsObjectiveAttachmentEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objObjectiveAttachmentEN.sfUpdFldSetStr === undefined ||
    objObjectiveAttachmentEN.sfUpdFldSetStr === null ||
    objObjectiveAttachmentEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objObjectiveAttachmentEN.objectiveAttachmentId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);
  objObjectiveAttachmentEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objObjectiveAttachmentEN, config);
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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
 * @param objlngObjectiveAttachmentIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ObjectiveAttachment_IsExistRecordCache(
  objObjectiveAttachmentCond: clsObjectiveAttachmentEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrObjectiveAttachmentObjLstCache = await ObjectiveAttachment_GetObjLstCache(
    strIdCurrEduCls,
  );
  if (arrObjectiveAttachmentObjLstCache == null) return false;
  let arrObjectiveAttachmentSel = arrObjectiveAttachmentObjLstCache;
  if (
    objObjectiveAttachmentCond.sfFldComparisonOp == null ||
    objObjectiveAttachmentCond.sfFldComparisonOp == ''
  )
    return arrObjectiveAttachmentSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objObjectiveAttachmentCond.sfFldComparisonOp,
  );
  //console.log("clsObjectiveAttachmentWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objObjectiveAttachmentCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objObjectiveAttachmentCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrObjectiveAttachmentSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objObjectiveAttachmentCond),
      objectiveAttachment_ConstructorName,
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
export async function ObjectiveAttachment_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
 * @param lngObjectiveAttachmentId:所给的关键字
 * @returns 对象
 */
export async function ObjectiveAttachment_IsExistCache(
  lngObjectiveAttachmentId: number,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrObjectiveAttachmentObjLstCache = await ObjectiveAttachment_GetObjLstCache(
    strIdCurrEduCls,
  );
  if (arrObjectiveAttachmentObjLstCache == null) return false;
  try {
    const arrObjectiveAttachmentSel = arrObjectiveAttachmentObjLstCache.filter(
      (x) => x.objectiveAttachmentId == lngObjectiveAttachmentId,
    );
    if (arrObjectiveAttachmentSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngObjectiveAttachmentId,
      objectiveAttachment_ConstructorName,
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
 * @param lngObjectiveAttachmentId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ObjectiveAttachment_IsExistAsync(
  lngObjectiveAttachmentId: number,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngObjectiveAttachmentId,
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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
export async function ObjectiveAttachment_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
 * @param objObjectiveAttachmentCond:条件对象
 * @returns 对象列表记录数
 */
export async function ObjectiveAttachment_GetRecCountByCondCache(
  objObjectiveAttachmentCond: clsObjectiveAttachmentEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrObjectiveAttachmentObjLstCache = await ObjectiveAttachment_GetObjLstCache(
    strIdCurrEduCls,
  );
  if (arrObjectiveAttachmentObjLstCache == null) return 0;
  let arrObjectiveAttachmentSel = arrObjectiveAttachmentObjLstCache;
  if (
    objObjectiveAttachmentCond.sfFldComparisonOp == null ||
    objObjectiveAttachmentCond.sfFldComparisonOp == ''
  )
    return arrObjectiveAttachmentSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objObjectiveAttachmentCond.sfFldComparisonOp,
  );
  //console.log("clsObjectiveAttachmentWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objObjectiveAttachmentCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objObjectiveAttachmentCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrObjectiveAttachmentSel = arrObjectiveAttachmentSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrObjectiveAttachmentSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objObjectiveAttachmentCond),
      objectiveAttachment_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function ObjectiveAttachment_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(objectiveAttachment_Controller, strAction);

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
        objectiveAttachment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        objectiveAttachment_ConstructorName,
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
export function ObjectiveAttachment_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ObjectiveAttachment_ReFreshCache(strIdCurrEduCls: string): void {
  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空!(In clsObjectiveAttachmentWApi.clsObjectiveAttachmentWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsObjectiveAttachmentWApi.clsObjectiveAttachmentWApi.ReFreshCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsObjectiveAttachmentEN._CurrTabName, strIdCurrEduCls);
  switch (clsObjectiveAttachmentEN.CacheModeId) {
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
  vObjectiveAttachment_ReFreshThisCache(strIdCurrEduCls);
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ObjectiveAttachment_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsObjectiveAttachmentEN._CurrTabName, strIdCurrEduCls);
    switch (clsObjectiveAttachmentEN.CacheModeId) {
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
export function ObjectiveAttachment_CheckPropertyNew(
  pobjObjectiveAttachmentEN: clsObjectiveAttachmentEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjObjectiveAttachmentEN.topicObjectiveId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[客观Id]不能为空(In 客观附件表)!(clsObjectiveAttachmentBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjObjectiveAttachmentEN.filePath) === true) {
    throw new Error(
      '(errid:Watl000411)字段[文件路径]不能为空(In 客观附件表)!(clsObjectiveAttachmentBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.topicObjectiveId) == false &&
    GetStrLen(pobjObjectiveAttachmentEN.topicObjectiveId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[客观Id(topicObjectiveId)]的长度不能超过8(In 客观附件表(ObjectiveAttachment))!值:$(pobjObjectiveAttachmentEN.topicObjectiveId)(clsObjectiveAttachmentBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.objectiveAttachmentName) == false &&
    GetStrLen(pobjObjectiveAttachmentEN.objectiveAttachmentName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[附件名称(objectiveAttachmentName)]的长度不能超过200(In 客观附件表(ObjectiveAttachment))!值:$(pobjObjectiveAttachmentEN.objectiveAttachmentName)(clsObjectiveAttachmentBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.filePath) == false &&
    GetStrLen(pobjObjectiveAttachmentEN.filePath) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[文件路径(filePath)]的长度不能超过500(In 客观附件表(ObjectiveAttachment))!值:$(pobjObjectiveAttachmentEN.filePath)(clsObjectiveAttachmentBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.updDate) == false &&
    GetStrLen(pobjObjectiveAttachmentEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 客观附件表(ObjectiveAttachment))!值:$(pobjObjectiveAttachmentEN.updDate)(clsObjectiveAttachmentBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.updUserId) == false &&
    GetStrLen(pobjObjectiveAttachmentEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 客观附件表(ObjectiveAttachment))!值:$(pobjObjectiveAttachmentEN.updUserId)(clsObjectiveAttachmentBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.memo) == false &&
    GetStrLen(pobjObjectiveAttachmentEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 客观附件表(ObjectiveAttachment))!值:$(pobjObjectiveAttachmentEN.memo)(clsObjectiveAttachmentBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.idCurrEduCls) == false &&
    GetStrLen(pobjObjectiveAttachmentEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 客观附件表(ObjectiveAttachment))!值:$(pobjObjectiveAttachmentEN.idCurrEduCls)(clsObjectiveAttachmentBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.topicObjectiveId) == false &&
    undefined !== pobjObjectiveAttachmentEN.topicObjectiveId &&
    tzDataType.isString(pobjObjectiveAttachmentEN.topicObjectiveId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[客观Id(topicObjectiveId)]的值:[$(pobjObjectiveAttachmentEN.topicObjectiveId)], 非法,应该为字符型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjObjectiveAttachmentEN.objectiveAttachmentId &&
    undefined !== pobjObjectiveAttachmentEN.objectiveAttachmentId &&
    tzDataType.isNumber(pobjObjectiveAttachmentEN.objectiveAttachmentId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[客观附件Id(objectiveAttachmentId)]的值:[$(pobjObjectiveAttachmentEN.objectiveAttachmentId)], 非法,应该为数值型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.objectiveAttachmentName) == false &&
    undefined !== pobjObjectiveAttachmentEN.objectiveAttachmentName &&
    tzDataType.isString(pobjObjectiveAttachmentEN.objectiveAttachmentName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[附件名称(objectiveAttachmentName)]的值:[$(pobjObjectiveAttachmentEN.objectiveAttachmentName)], 非法,应该为字符型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.filePath) == false &&
    undefined !== pobjObjectiveAttachmentEN.filePath &&
    tzDataType.isString(pobjObjectiveAttachmentEN.filePath) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文件路径(filePath)]的值:[$(pobjObjectiveAttachmentEN.filePath)], 非法,应该为字符型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.updDate) == false &&
    undefined !== pobjObjectiveAttachmentEN.updDate &&
    tzDataType.isString(pobjObjectiveAttachmentEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjObjectiveAttachmentEN.updDate)], 非法,应该为字符型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.updUserId) == false &&
    undefined !== pobjObjectiveAttachmentEN.updUserId &&
    tzDataType.isString(pobjObjectiveAttachmentEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjObjectiveAttachmentEN.updUserId)], 非法,应该为字符型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.memo) == false &&
    undefined !== pobjObjectiveAttachmentEN.memo &&
    tzDataType.isString(pobjObjectiveAttachmentEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjObjectiveAttachmentEN.memo)], 非法,应该为字符型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.idCurrEduCls) == false &&
    undefined !== pobjObjectiveAttachmentEN.idCurrEduCls &&
    tzDataType.isString(pobjObjectiveAttachmentEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjObjectiveAttachmentEN.idCurrEduCls)], 非法,应该为字符型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ObjectiveAttachment_CheckProperty4Update(
  pobjObjectiveAttachmentEN: clsObjectiveAttachmentEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.topicObjectiveId) == false &&
    GetStrLen(pobjObjectiveAttachmentEN.topicObjectiveId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[客观Id(topicObjectiveId)]的长度不能超过8(In 客观附件表(ObjectiveAttachment))!值:$(pobjObjectiveAttachmentEN.topicObjectiveId)(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.objectiveAttachmentName) == false &&
    GetStrLen(pobjObjectiveAttachmentEN.objectiveAttachmentName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[附件名称(objectiveAttachmentName)]的长度不能超过200(In 客观附件表(ObjectiveAttachment))!值:$(pobjObjectiveAttachmentEN.objectiveAttachmentName)(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.filePath) == false &&
    GetStrLen(pobjObjectiveAttachmentEN.filePath) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[文件路径(filePath)]的长度不能超过500(In 客观附件表(ObjectiveAttachment))!值:$(pobjObjectiveAttachmentEN.filePath)(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.updDate) == false &&
    GetStrLen(pobjObjectiveAttachmentEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 客观附件表(ObjectiveAttachment))!值:$(pobjObjectiveAttachmentEN.updDate)(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.updUserId) == false &&
    GetStrLen(pobjObjectiveAttachmentEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 客观附件表(ObjectiveAttachment))!值:$(pobjObjectiveAttachmentEN.updUserId)(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.memo) == false &&
    GetStrLen(pobjObjectiveAttachmentEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 客观附件表(ObjectiveAttachment))!值:$(pobjObjectiveAttachmentEN.memo)(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.idCurrEduCls) == false &&
    GetStrLen(pobjObjectiveAttachmentEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 客观附件表(ObjectiveAttachment))!值:$(pobjObjectiveAttachmentEN.idCurrEduCls)(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.topicObjectiveId) == false &&
    undefined !== pobjObjectiveAttachmentEN.topicObjectiveId &&
    tzDataType.isString(pobjObjectiveAttachmentEN.topicObjectiveId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[客观Id(topicObjectiveId)]的值:[$(pobjObjectiveAttachmentEN.topicObjectiveId)], 非法,应该为字符型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjObjectiveAttachmentEN.objectiveAttachmentId &&
    undefined !== pobjObjectiveAttachmentEN.objectiveAttachmentId &&
    tzDataType.isNumber(pobjObjectiveAttachmentEN.objectiveAttachmentId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[客观附件Id(objectiveAttachmentId)]的值:[$(pobjObjectiveAttachmentEN.objectiveAttachmentId)], 非法,应该为数值型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.objectiveAttachmentName) == false &&
    undefined !== pobjObjectiveAttachmentEN.objectiveAttachmentName &&
    tzDataType.isString(pobjObjectiveAttachmentEN.objectiveAttachmentName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[附件名称(objectiveAttachmentName)]的值:[$(pobjObjectiveAttachmentEN.objectiveAttachmentName)], 非法,应该为字符型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.filePath) == false &&
    undefined !== pobjObjectiveAttachmentEN.filePath &&
    tzDataType.isString(pobjObjectiveAttachmentEN.filePath) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文件路径(filePath)]的值:[$(pobjObjectiveAttachmentEN.filePath)], 非法,应该为字符型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.updDate) == false &&
    undefined !== pobjObjectiveAttachmentEN.updDate &&
    tzDataType.isString(pobjObjectiveAttachmentEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjObjectiveAttachmentEN.updDate)], 非法,应该为字符型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.updUserId) == false &&
    undefined !== pobjObjectiveAttachmentEN.updUserId &&
    tzDataType.isString(pobjObjectiveAttachmentEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjObjectiveAttachmentEN.updUserId)], 非法,应该为字符型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.memo) == false &&
    undefined !== pobjObjectiveAttachmentEN.memo &&
    tzDataType.isString(pobjObjectiveAttachmentEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjObjectiveAttachmentEN.memo)], 非法,应该为字符型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjObjectiveAttachmentEN.idCurrEduCls) == false &&
    undefined !== pobjObjectiveAttachmentEN.idCurrEduCls &&
    tzDataType.isString(pobjObjectiveAttachmentEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjObjectiveAttachmentEN.idCurrEduCls)], 非法,应该为字符型(In 客观附件表(ObjectiveAttachment))!(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjObjectiveAttachmentEN.objectiveAttachmentId ||
    (pobjObjectiveAttachmentEN.objectiveAttachmentId != null &&
      pobjObjectiveAttachmentEN.objectiveAttachmentId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[客观附件Id]不能为空(In 客观附件表)!(clsObjectiveAttachmentBL:CheckProperty4Update)',
    );
  }
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
export function ObjectiveAttachment_GetJSONStrByObj(
  pobjObjectiveAttachmentEN: clsObjectiveAttachmentEN,
): string {
  pobjObjectiveAttachmentEN.sfUpdFldSetStr = pobjObjectiveAttachmentEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjObjectiveAttachmentEN);
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
export function ObjectiveAttachment_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsObjectiveAttachmentEN> {
  let arrObjectiveAttachmentObjLst = new Array<clsObjectiveAttachmentEN>();
  if (strJSON === '') {
    return arrObjectiveAttachmentObjLst;
  }
  try {
    arrObjectiveAttachmentObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrObjectiveAttachmentObjLst;
  }
  return arrObjectiveAttachmentObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrObjectiveAttachmentObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ObjectiveAttachment_GetObjLstByJSONObjLst(
  arrObjectiveAttachmentObjLstS: Array<clsObjectiveAttachmentEN>,
): Array<clsObjectiveAttachmentEN> {
  const arrObjectiveAttachmentObjLst = new Array<clsObjectiveAttachmentEN>();
  for (const objInFor of arrObjectiveAttachmentObjLstS) {
    const obj1 = ObjectiveAttachment_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrObjectiveAttachmentObjLst.push(obj1);
  }
  return arrObjectiveAttachmentObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ObjectiveAttachment_GetObjByJSONStr(strJSON: string): clsObjectiveAttachmentEN {
  let pobjObjectiveAttachmentEN = new clsObjectiveAttachmentEN();
  if (strJSON === '') {
    return pobjObjectiveAttachmentEN;
  }
  try {
    pobjObjectiveAttachmentEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjObjectiveAttachmentEN;
  }
  return pobjObjectiveAttachmentEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ObjectiveAttachment_GetCombineCondition(
  objObjectiveAttachmentCond: clsObjectiveAttachmentEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objObjectiveAttachmentCond.dicFldComparisonOp,
      clsObjectiveAttachmentEN.con_TopicObjectiveId,
    ) == true
  ) {
    const strComparisonOpTopicObjectiveId: string =
      objObjectiveAttachmentCond.dicFldComparisonOp[clsObjectiveAttachmentEN.con_TopicObjectiveId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsObjectiveAttachmentEN.con_TopicObjectiveId,
      objObjectiveAttachmentCond.topicObjectiveId,
      strComparisonOpTopicObjectiveId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objObjectiveAttachmentCond.dicFldComparisonOp,
      clsObjectiveAttachmentEN.con_ObjectiveAttachmentId,
    ) == true
  ) {
    const strComparisonOpObjectiveAttachmentId: string =
      objObjectiveAttachmentCond.dicFldComparisonOp[
        clsObjectiveAttachmentEN.con_ObjectiveAttachmentId
      ];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsObjectiveAttachmentEN.con_ObjectiveAttachmentId,
      objObjectiveAttachmentCond.objectiveAttachmentId,
      strComparisonOpObjectiveAttachmentId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objObjectiveAttachmentCond.dicFldComparisonOp,
      clsObjectiveAttachmentEN.con_ObjectiveAttachmentName,
    ) == true
  ) {
    const strComparisonOpObjectiveAttachmentName: string =
      objObjectiveAttachmentCond.dicFldComparisonOp[
        clsObjectiveAttachmentEN.con_ObjectiveAttachmentName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsObjectiveAttachmentEN.con_ObjectiveAttachmentName,
      objObjectiveAttachmentCond.objectiveAttachmentName,
      strComparisonOpObjectiveAttachmentName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objObjectiveAttachmentCond.dicFldComparisonOp,
      clsObjectiveAttachmentEN.con_FilePath,
    ) == true
  ) {
    const strComparisonOpFilePath: string =
      objObjectiveAttachmentCond.dicFldComparisonOp[clsObjectiveAttachmentEN.con_FilePath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsObjectiveAttachmentEN.con_FilePath,
      objObjectiveAttachmentCond.filePath,
      strComparisonOpFilePath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objObjectiveAttachmentCond.dicFldComparisonOp,
      clsObjectiveAttachmentEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objObjectiveAttachmentCond.dicFldComparisonOp[clsObjectiveAttachmentEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsObjectiveAttachmentEN.con_UpdDate,
      objObjectiveAttachmentCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objObjectiveAttachmentCond.dicFldComparisonOp,
      clsObjectiveAttachmentEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objObjectiveAttachmentCond.dicFldComparisonOp[clsObjectiveAttachmentEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsObjectiveAttachmentEN.con_UpdUserId,
      objObjectiveAttachmentCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objObjectiveAttachmentCond.dicFldComparisonOp,
      clsObjectiveAttachmentEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objObjectiveAttachmentCond.dicFldComparisonOp[clsObjectiveAttachmentEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsObjectiveAttachmentEN.con_Memo,
      objObjectiveAttachmentCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objObjectiveAttachmentCond.dicFldComparisonOp,
      clsObjectiveAttachmentEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objObjectiveAttachmentCond.dicFldComparisonOp[clsObjectiveAttachmentEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsObjectiveAttachmentEN.con_IdCurrEduCls,
      objObjectiveAttachmentCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ObjectiveAttachment(客观附件表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTopicObjectiveId: 客观Id(要求唯一的字段)
 * @param lngObjectiveAttachmentId: 客观附件Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ObjectiveAttachment_GetUniCondStr(
  objObjectiveAttachmentEN: clsObjectiveAttachmentEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and TopicObjectiveId = '{0}'",
    objObjectiveAttachmentEN.topicObjectiveId,
  );
  strWhereCond += Format(
    " and ObjectiveAttachmentId = '{0}'",
    objObjectiveAttachmentEN.objectiveAttachmentId,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ObjectiveAttachment(客观附件表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTopicObjectiveId: 客观Id(要求唯一的字段)
 * @param lngObjectiveAttachmentId: 客观附件Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ObjectiveAttachment_GetUniCondStr4Update(
  objObjectiveAttachmentEN: clsObjectiveAttachmentEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and ObjectiveAttachmentId <> '{0}'",
    objObjectiveAttachmentEN.objectiveAttachmentId,
  );
  strWhereCond += Format(
    " and TopicObjectiveId = '{0}'",
    objObjectiveAttachmentEN.topicObjectiveId,
  );
  strWhereCond += Format(
    " and ObjectiveAttachmentId = '{0}'",
    objObjectiveAttachmentEN.objectiveAttachmentId,
  );
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objObjectiveAttachmentENS:源对象
 * @param objObjectiveAttachmentENT:目标对象
 */
export function ObjectiveAttachment_CopyObjTo(
  objObjectiveAttachmentENS: clsObjectiveAttachmentEN,
  objObjectiveAttachmentENT: clsObjectiveAttachmentEN,
): void {
  objObjectiveAttachmentENT.topicObjectiveId = objObjectiveAttachmentENS.topicObjectiveId; //客观Id
  objObjectiveAttachmentENT.objectiveAttachmentId = objObjectiveAttachmentENS.objectiveAttachmentId; //客观附件Id
  objObjectiveAttachmentENT.objectiveAttachmentName =
    objObjectiveAttachmentENS.objectiveAttachmentName; //附件名称
  objObjectiveAttachmentENT.filePath = objObjectiveAttachmentENS.filePath; //文件路径
  objObjectiveAttachmentENT.updDate = objObjectiveAttachmentENS.updDate; //修改日期
  objObjectiveAttachmentENT.updUserId = objObjectiveAttachmentENS.updUserId; //修改用户Id
  objObjectiveAttachmentENT.memo = objObjectiveAttachmentENS.memo; //备注
  objObjectiveAttachmentENT.idCurrEduCls = objObjectiveAttachmentENS.idCurrEduCls; //教学班流水号
  objObjectiveAttachmentENT.sfUpdFldSetStr = objObjectiveAttachmentENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objObjectiveAttachmentENS:源对象
 * @param objObjectiveAttachmentENT:目标对象
 */
export function ObjectiveAttachment_GetObjFromJsonObj(
  objObjectiveAttachmentENS: clsObjectiveAttachmentEN,
): clsObjectiveAttachmentEN {
  const objObjectiveAttachmentENT: clsObjectiveAttachmentEN = new clsObjectiveAttachmentEN();
  ObjectAssign(objObjectiveAttachmentENT, objObjectiveAttachmentENS);
  return objObjectiveAttachmentENT;
}
