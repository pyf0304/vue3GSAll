/**
 * 类名:clsRTConceptRelaWApi
 * 表名:RTConceptRela(01120605)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:17
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
 * 主题概念关系表(RTConceptRela)
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
import { clsRTConceptRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTConceptRelaEN';
import { vRTConceptRela_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduTopic/clsvRTConceptRelaWApi';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const rTConceptRela_Controller = 'RTConceptRelaApi';
export const rTConceptRela_ConstructorName = 'rTConceptRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function RTConceptRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsRTConceptRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsRTConceptRelaWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
      const objRTConceptRela = RTConceptRela_GetObjFromJsonObj(returnObj);
      return objRTConceptRela;
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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsRTConceptRelaWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrRTConceptRelaObjLstCache = await RTConceptRela_GetObjLstCache();
  try {
    const arrRTConceptRelaSel = arrRTConceptRelaObjLstCache.filter((x) => x.mId == lngmId);
    let objRTConceptRela: clsRTConceptRelaEN;
    if (arrRTConceptRelaSel.length > 0) {
      objRTConceptRela = arrRTConceptRelaSel[0];
      return objRTConceptRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objRTConceptRelaConst = await RTConceptRela_GetObjBymIdAsync(lngmId);
        if (objRTConceptRelaConst != null) {
          RTConceptRela_ReFreshThisCache();
          return objRTConceptRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsRTConceptRelaWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsRTConceptRelaEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objRTConceptRelaCache: clsRTConceptRelaEN = JSON.parse(strTempObj);
    return objRTConceptRelaCache;
  }
  try {
    const objRTConceptRela = await RTConceptRela_GetObjBymIdAsync(lngmId);
    if (objRTConceptRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objRTConceptRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objRTConceptRela;
    }
    return objRTConceptRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      rTConceptRela_ConstructorName,
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
 * @param objRTConceptRela:所给的对象
 * @returns 对象
 */
export async function RTConceptRela_UpdateObjInLstCache(objRTConceptRela: clsRTConceptRelaEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrRTConceptRelaObjLstCache = await RTConceptRela_GetObjLstCache();
    const obj = arrRTConceptRelaObjLstCache.find(
      (x) =>
        x.mId == objRTConceptRela.mId &&
        x.topicId == objRTConceptRela.topicId &&
        x.conceptId == objRTConceptRela.conceptId,
    );
    if (obj != null) {
      objRTConceptRela.mId = obj.mId;
      ObjectAssign(obj, objRTConceptRela);
    } else {
      arrRTConceptRelaObjLstCache.push(objRTConceptRela);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      rTConceptRela_ConstructorName,
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
export async function RTConceptRela_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsRTConceptRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsRTConceptRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsRTConceptRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objRTConceptRela = await RTConceptRela_GetObjBymIdCache(lngmId);
  if (objRTConceptRela == null) return '';
  if (objRTConceptRela.GetFldValue(strOutFldName) == null) return '';
  return objRTConceptRela.GetFldValue(strOutFldName).toString();
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
export function RTConceptRela_SortFunDefa(a: clsRTConceptRelaEN, b: clsRTConceptRelaEN): number {
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
export function RTConceptRela_SortFunDefa2Fld(
  a: clsRTConceptRelaEN,
  b: clsRTConceptRelaEN,
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
export function RTConceptRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsRTConceptRelaEN.con_mId:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          return a.mId - b.mId;
        };
      case clsRTConceptRelaEN.con_TopicId:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsRTConceptRelaEN.con_ConceptId:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          return a.conceptId.localeCompare(b.conceptId);
        };
      case clsRTConceptRelaEN.con_UpdDate:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsRTConceptRelaEN.con_Memo:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsRTConceptRelaEN.con_UpdUser:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsRTConceptRelaEN.con_ClassificationId:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          if (a.classificationId == null) return -1;
          if (b.classificationId == null) return 1;
          return a.classificationId.localeCompare(b.classificationId);
        };
      case clsRTConceptRelaEN.con_IdCurrEduCls:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[RTConceptRela]中不存在!(in ${rTConceptRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsRTConceptRelaEN.con_mId:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          return b.mId - a.mId;
        };
      case clsRTConceptRelaEN.con_TopicId:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsRTConceptRelaEN.con_ConceptId:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          return b.conceptId.localeCompare(a.conceptId);
        };
      case clsRTConceptRelaEN.con_UpdDate:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsRTConceptRelaEN.con_Memo:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsRTConceptRelaEN.con_UpdUser:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsRTConceptRelaEN.con_ClassificationId:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          if (b.classificationId == null) return -1;
          if (a.classificationId == null) return 1;
          return b.classificationId.localeCompare(a.classificationId);
        };
      case clsRTConceptRelaEN.con_IdCurrEduCls:
        return (a: clsRTConceptRelaEN, b: clsRTConceptRelaEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[RTConceptRela]中不存在!(in ${rTConceptRela_ConstructorName}.${strThisFuncName})`;
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
export async function RTConceptRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsRTConceptRelaEN.con_mId:
      return (obj: clsRTConceptRelaEN) => {
        return obj.mId === value;
      };
    case clsRTConceptRelaEN.con_TopicId:
      return (obj: clsRTConceptRelaEN) => {
        return obj.topicId === value;
      };
    case clsRTConceptRelaEN.con_ConceptId:
      return (obj: clsRTConceptRelaEN) => {
        return obj.conceptId === value;
      };
    case clsRTConceptRelaEN.con_UpdDate:
      return (obj: clsRTConceptRelaEN) => {
        return obj.updDate === value;
      };
    case clsRTConceptRelaEN.con_Memo:
      return (obj: clsRTConceptRelaEN) => {
        return obj.memo === value;
      };
    case clsRTConceptRelaEN.con_UpdUser:
      return (obj: clsRTConceptRelaEN) => {
        return obj.updUser === value;
      };
    case clsRTConceptRelaEN.con_ClassificationId:
      return (obj: clsRTConceptRelaEN) => {
        return obj.classificationId === value;
      };
    case clsRTConceptRelaEN.con_IdCurrEduCls:
      return (obj: clsRTConceptRelaEN) => {
        return obj.idCurrEduCls === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[RTConceptRela]中不存在!(in ${rTConceptRela_ConstructorName}.${strThisFuncName})`;
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
export async function RTConceptRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsRTConceptRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrRTConceptRela = await RTConceptRela_GetObjLstCache();
  if (arrRTConceptRela == null) return [];
  let arrRTConceptRelaSel = arrRTConceptRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrRTConceptRelaSel.length == 0) return [];
  return arrRTConceptRelaSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function RTConceptRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsRTConceptRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
      const objRTConceptRela = RTConceptRela_GetObjFromJsonObj(returnObj);
      return objRTConceptRela;
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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRTConceptRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsRTConceptRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRTConceptRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrRTConceptRelaExObjLstCache: Array<clsRTConceptRelaEN> = CacheHelper.Get(strKey);
    const arrRTConceptRelaObjLstT = RTConceptRela_GetObjLstByJSONObjLst(
      arrRTConceptRelaExObjLstCache,
    );
    return arrRTConceptRelaObjLstT;
  }
  try {
    const arrRTConceptRelaExObjLst = await RTConceptRela_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrRTConceptRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRTConceptRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrRTConceptRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRTConceptRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsRTConceptRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRTConceptRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrRTConceptRelaExObjLstCache: Array<clsRTConceptRelaEN> = JSON.parse(strTempObjLst);
    const arrRTConceptRelaObjLstT = RTConceptRela_GetObjLstByJSONObjLst(
      arrRTConceptRelaExObjLstCache,
    );
    return arrRTConceptRelaObjLstT;
  }
  try {
    const arrRTConceptRelaExObjLst = await RTConceptRela_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrRTConceptRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRTConceptRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrRTConceptRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsRTConceptRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrRTConceptRelaObjLstCache: Array<clsRTConceptRelaEN> = JSON.parse(strTempObjLst);
    return arrRTConceptRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function RTConceptRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsRTConceptRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
          rTConceptRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTConceptRela_GetObjLstByJSONObjLst(returnObjLst);
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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRTConceptRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsRTConceptRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRTConceptRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrRTConceptRelaExObjLstCache: Array<clsRTConceptRelaEN> = JSON.parse(strTempObjLst);
    const arrRTConceptRelaObjLstT = RTConceptRela_GetObjLstByJSONObjLst(
      arrRTConceptRelaExObjLstCache,
    );
    return arrRTConceptRelaObjLstT;
  }
  try {
    const arrRTConceptRelaExObjLst = await RTConceptRela_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrRTConceptRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRTConceptRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrRTConceptRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsRTConceptRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrRTConceptRelaObjLstCache: Array<clsRTConceptRelaEN> = JSON.parse(strTempObjLst);
    return arrRTConceptRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function RTConceptRela_GetObjLstCache(): Promise<Array<clsRTConceptRelaEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrRTConceptRelaObjLstCache;
  switch (clsRTConceptRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrRTConceptRelaObjLstCache = await RTConceptRela_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrRTConceptRelaObjLstCache = await RTConceptRela_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrRTConceptRelaObjLstCache = await RTConceptRela_GetObjLstClientCache();
      break;
    default:
      arrRTConceptRelaObjLstCache = await RTConceptRela_GetObjLstClientCache();
      break;
  }
  return arrRTConceptRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function RTConceptRela_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrRTConceptRelaObjLstCache;
  switch (clsRTConceptRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrRTConceptRelaObjLstCache = await RTConceptRela_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrRTConceptRelaObjLstCache = await RTConceptRela_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrRTConceptRelaObjLstCache = null;
      break;
    default:
      arrRTConceptRelaObjLstCache = null;
      break;
  }
  return arrRTConceptRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function RTConceptRela_GetSubObjLstCache(objRTConceptRelaCond: clsRTConceptRelaEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrRTConceptRelaObjLstCache = await RTConceptRela_GetObjLstCache();
  let arrRTConceptRelaSel = arrRTConceptRelaObjLstCache;
  if (
    objRTConceptRelaCond.sfFldComparisonOp == null ||
    objRTConceptRelaCond.sfFldComparisonOp == ''
  )
    return arrRTConceptRelaSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRTConceptRelaCond.sfFldComparisonOp,
  );
  //console.log("clsRTConceptRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRTConceptRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRTConceptRelaSel = arrRTConceptRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRTConceptRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrRTConceptRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objRTConceptRelaCond),
      rTConceptRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRTConceptRelaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function RTConceptRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsRTConceptRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
          rTConceptRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTConceptRela_GetObjLstByJSONObjLst(returnObjLst);
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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrRTConceptRelaObjLstCache = await RTConceptRela_GetObjLstCache();
    const arrRTConceptRelaSel = arrRTConceptRelaObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrRTConceptRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsRTConceptRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
          rTConceptRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTConceptRela_GetObjLstByJSONObjLst(returnObjLst);
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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsRTConceptRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
          rTConceptRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTConceptRela_GetObjLstByJSONObjLst(returnObjLst);
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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsRTConceptRelaEN>();
  const arrRTConceptRelaObjLstCache = await RTConceptRela_GetObjLstCache();
  if (arrRTConceptRelaObjLstCache.length == 0) return arrRTConceptRelaObjLstCache;
  let arrRTConceptRelaSel = arrRTConceptRelaObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objRTConceptRelaCond = new clsRTConceptRelaEN();
  ObjectAssign(objRTConceptRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsRTConceptRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRTConceptRelaSel = arrRTConceptRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRTConceptRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrRTConceptRelaSel.length == 0) return arrRTConceptRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrRTConceptRelaSel = arrRTConceptRelaSel.sort(
        RTConceptRela_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrRTConceptRelaSel = arrRTConceptRelaSel.sort(objPagerPara.sortFun);
    }
    arrRTConceptRelaSel = arrRTConceptRelaSel.slice(intStart, intEnd);
    return arrRTConceptRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      rTConceptRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRTConceptRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function RTConceptRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsRTConceptRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsRTConceptRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
          rTConceptRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTConceptRela_GetObjLstByJSONObjLst(returnObjLst);
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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function RTConceptRela_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngmId);

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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function RTConceptRela_DelRTConceptRelasAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelRTConceptRelasAsync';
  const strAction = 'DelRTConceptRelas';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
export async function RTConceptRela_DelRTConceptRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelRTConceptRelasByCondAsync';
  const strAction = 'DelRTConceptRelasByCond';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
 * @param objRTConceptRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RTConceptRela_AddNewRecordAsync(
  objRTConceptRelaEN: clsRTConceptRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objRTConceptRelaEN);
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRTConceptRelaEN, config);
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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
 * @param objRTConceptRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function RTConceptRela_AddNewRecordWithReturnKeyAsync(
  objRTConceptRelaEN: clsRTConceptRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRTConceptRelaEN, config);
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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
 * @param objRTConceptRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function RTConceptRela_UpdateRecordAsync(
  objRTConceptRelaEN: clsRTConceptRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objRTConceptRelaEN.sfUpdFldSetStr === undefined ||
    objRTConceptRelaEN.sfUpdFldSetStr === null ||
    objRTConceptRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objRTConceptRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRTConceptRelaEN, config);
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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
 * @param objRTConceptRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function RTConceptRela_UpdateWithConditionAsync(
  objRTConceptRelaEN: clsRTConceptRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objRTConceptRelaEN.sfUpdFldSetStr === undefined ||
    objRTConceptRelaEN.sfUpdFldSetStr === null ||
    objRTConceptRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objRTConceptRelaEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);
  objRTConceptRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRTConceptRelaEN, config);
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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
export async function RTConceptRela_IsExistRecordCache(objRTConceptRelaCond: clsRTConceptRelaEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrRTConceptRelaObjLstCache = await RTConceptRela_GetObjLstCache();
  if (arrRTConceptRelaObjLstCache == null) return false;
  let arrRTConceptRelaSel = arrRTConceptRelaObjLstCache;
  if (
    objRTConceptRelaCond.sfFldComparisonOp == null ||
    objRTConceptRelaCond.sfFldComparisonOp == ''
  )
    return arrRTConceptRelaSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRTConceptRelaCond.sfFldComparisonOp,
  );
  //console.log("clsRTConceptRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRTConceptRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRTConceptRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrRTConceptRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objRTConceptRelaCond),
      rTConceptRela_ConstructorName,
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
export async function RTConceptRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
export async function RTConceptRela_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrRTConceptRelaObjLstCache = await RTConceptRela_GetObjLstCache();
  if (arrRTConceptRelaObjLstCache == null) return false;
  try {
    const arrRTConceptRelaSel = arrRTConceptRelaObjLstCache.filter((x) => x.mId == lngmId);
    if (arrRTConceptRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      rTConceptRela_ConstructorName,
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
export async function RTConceptRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
 * @param objRTConceptRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function RTConceptRela_GetRecCountByCondCache(
  objRTConceptRelaCond: clsRTConceptRelaEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrRTConceptRelaObjLstCache = await RTConceptRela_GetObjLstCache();
  if (arrRTConceptRelaObjLstCache == null) return 0;
  let arrRTConceptRelaSel = arrRTConceptRelaObjLstCache;
  if (
    objRTConceptRelaCond.sfFldComparisonOp == null ||
    objRTConceptRelaCond.sfFldComparisonOp == ''
  )
    return arrRTConceptRelaSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRTConceptRelaCond.sfFldComparisonOp,
  );
  //console.log("clsRTConceptRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRTConceptRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRTConceptRelaSel = arrRTConceptRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRTConceptRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrRTConceptRelaSel = arrRTConceptRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrRTConceptRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objRTConceptRelaCond),
      rTConceptRela_ConstructorName,
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
export async function RTConceptRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(rTConceptRela_Controller, strAction);

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
        rTConceptRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTConceptRela_ConstructorName,
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
export function RTConceptRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function RTConceptRela_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsRTConceptRelaEN._CurrTabName;
  switch (clsRTConceptRelaEN.CacheModeId) {
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
  vRTConceptRela_ReFreshThisCache();
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function RTConceptRela_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsRTConceptRelaEN._CurrTabName;
    switch (clsRTConceptRelaEN.CacheModeId) {
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
export function RTConceptRela_CheckPropertyNew(pobjRTConceptRelaEN: clsRTConceptRelaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjRTConceptRelaEN.conceptId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[概念Id]不能为空(In 主题概念关系表)!(clsRTConceptRelaBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.topicId) == false &&
    GetStrLen(pobjRTConceptRelaEN.topicId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 主题概念关系表(RTConceptRela))!值:$(pobjRTConceptRelaEN.topicId)(clsRTConceptRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.conceptId) == false &&
    GetStrLen(pobjRTConceptRelaEN.conceptId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[概念Id(conceptId)]的长度不能超过8(In 主题概念关系表(RTConceptRela))!值:$(pobjRTConceptRelaEN.conceptId)(clsRTConceptRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.updDate) == false &&
    GetStrLen(pobjRTConceptRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 主题概念关系表(RTConceptRela))!值:$(pobjRTConceptRelaEN.updDate)(clsRTConceptRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.memo) == false &&
    GetStrLen(pobjRTConceptRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 主题概念关系表(RTConceptRela))!值:$(pobjRTConceptRelaEN.memo)(clsRTConceptRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.updUser) == false &&
    GetStrLen(pobjRTConceptRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 主题概念关系表(RTConceptRela))!值:$(pobjRTConceptRelaEN.updUser)(clsRTConceptRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.classificationId) == false &&
    GetStrLen(pobjRTConceptRelaEN.classificationId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[分类Id(classificationId)]的长度不能超过10(In 主题概念关系表(RTConceptRela))!值:$(pobjRTConceptRelaEN.classificationId)(clsRTConceptRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.idCurrEduCls) == false &&
    GetStrLen(pobjRTConceptRelaEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 主题概念关系表(RTConceptRela))!值:$(pobjRTConceptRelaEN.idCurrEduCls)(clsRTConceptRelaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjRTConceptRelaEN.mId &&
    undefined !== pobjRTConceptRelaEN.mId &&
    tzDataType.isNumber(pobjRTConceptRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjRTConceptRelaEN.mId)], 非法,应该为数值型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.topicId) == false &&
    undefined !== pobjRTConceptRelaEN.topicId &&
    tzDataType.isString(pobjRTConceptRelaEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题Id(topicId)]的值:[$(pobjRTConceptRelaEN.topicId)], 非法,应该为字符型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.conceptId) == false &&
    undefined !== pobjRTConceptRelaEN.conceptId &&
    tzDataType.isString(pobjRTConceptRelaEN.conceptId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[概念Id(conceptId)]的值:[$(pobjRTConceptRelaEN.conceptId)], 非法,应该为字符型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.updDate) == false &&
    undefined !== pobjRTConceptRelaEN.updDate &&
    tzDataType.isString(pobjRTConceptRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjRTConceptRelaEN.updDate)], 非法,应该为字符型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.memo) == false &&
    undefined !== pobjRTConceptRelaEN.memo &&
    tzDataType.isString(pobjRTConceptRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjRTConceptRelaEN.memo)], 非法,应该为字符型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.updUser) == false &&
    undefined !== pobjRTConceptRelaEN.updUser &&
    tzDataType.isString(pobjRTConceptRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjRTConceptRelaEN.updUser)], 非法,应该为字符型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.classificationId) == false &&
    undefined !== pobjRTConceptRelaEN.classificationId &&
    tzDataType.isString(pobjRTConceptRelaEN.classificationId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[分类Id(classificationId)]的值:[$(pobjRTConceptRelaEN.classificationId)], 非法,应该为字符型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.idCurrEduCls) == false &&
    undefined !== pobjRTConceptRelaEN.idCurrEduCls &&
    tzDataType.isString(pobjRTConceptRelaEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjRTConceptRelaEN.idCurrEduCls)], 非法,应该为字符型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.topicId) == false &&
    pobjRTConceptRelaEN.topicId != '[nuull]' &&
    GetStrLen(pobjRTConceptRelaEN.topicId) != 8
  ) {
    throw '(errid:Watl000415)字段[主题Id]作为外键字段,长度应该为8(In 主题概念关系表)!(clsRTConceptRelaBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function RTConceptRela_CheckProperty4Update(pobjRTConceptRelaEN: clsRTConceptRelaEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.topicId) == false &&
    GetStrLen(pobjRTConceptRelaEN.topicId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 主题概念关系表(RTConceptRela))!值:$(pobjRTConceptRelaEN.topicId)(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.conceptId) == false &&
    GetStrLen(pobjRTConceptRelaEN.conceptId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[概念Id(conceptId)]的长度不能超过8(In 主题概念关系表(RTConceptRela))!值:$(pobjRTConceptRelaEN.conceptId)(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.updDate) == false &&
    GetStrLen(pobjRTConceptRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 主题概念关系表(RTConceptRela))!值:$(pobjRTConceptRelaEN.updDate)(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.memo) == false &&
    GetStrLen(pobjRTConceptRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 主题概念关系表(RTConceptRela))!值:$(pobjRTConceptRelaEN.memo)(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.updUser) == false &&
    GetStrLen(pobjRTConceptRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 主题概念关系表(RTConceptRela))!值:$(pobjRTConceptRelaEN.updUser)(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.classificationId) == false &&
    GetStrLen(pobjRTConceptRelaEN.classificationId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[分类Id(classificationId)]的长度不能超过10(In 主题概念关系表(RTConceptRela))!值:$(pobjRTConceptRelaEN.classificationId)(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.idCurrEduCls) == false &&
    GetStrLen(pobjRTConceptRelaEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 主题概念关系表(RTConceptRela))!值:$(pobjRTConceptRelaEN.idCurrEduCls)(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjRTConceptRelaEN.mId &&
    undefined !== pobjRTConceptRelaEN.mId &&
    tzDataType.isNumber(pobjRTConceptRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjRTConceptRelaEN.mId)], 非法,应该为数值型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.topicId) == false &&
    undefined !== pobjRTConceptRelaEN.topicId &&
    tzDataType.isString(pobjRTConceptRelaEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题Id(topicId)]的值:[$(pobjRTConceptRelaEN.topicId)], 非法,应该为字符型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.conceptId) == false &&
    undefined !== pobjRTConceptRelaEN.conceptId &&
    tzDataType.isString(pobjRTConceptRelaEN.conceptId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[概念Id(conceptId)]的值:[$(pobjRTConceptRelaEN.conceptId)], 非法,应该为字符型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.updDate) == false &&
    undefined !== pobjRTConceptRelaEN.updDate &&
    tzDataType.isString(pobjRTConceptRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjRTConceptRelaEN.updDate)], 非法,应该为字符型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.memo) == false &&
    undefined !== pobjRTConceptRelaEN.memo &&
    tzDataType.isString(pobjRTConceptRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjRTConceptRelaEN.memo)], 非法,应该为字符型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.updUser) == false &&
    undefined !== pobjRTConceptRelaEN.updUser &&
    tzDataType.isString(pobjRTConceptRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjRTConceptRelaEN.updUser)], 非法,应该为字符型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.classificationId) == false &&
    undefined !== pobjRTConceptRelaEN.classificationId &&
    tzDataType.isString(pobjRTConceptRelaEN.classificationId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[分类Id(classificationId)]的值:[$(pobjRTConceptRelaEN.classificationId)], 非法,应该为字符型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.idCurrEduCls) == false &&
    undefined !== pobjRTConceptRelaEN.idCurrEduCls &&
    tzDataType.isString(pobjRTConceptRelaEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjRTConceptRelaEN.idCurrEduCls)], 非法,应该为字符型(In 主题概念关系表(RTConceptRela))!(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjRTConceptRelaEN.mId ||
    (pobjRTConceptRelaEN.mId != null && pobjRTConceptRelaEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 主题概念关系表)!(clsRTConceptRelaBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjRTConceptRelaEN.topicId) == false &&
    pobjRTConceptRelaEN.topicId != '[nuull]' &&
    GetStrLen(pobjRTConceptRelaEN.topicId) != 8
  ) {
    throw '(errid:Watl000418)字段[主题Id]作为外键字段,长度应该为8(In 主题概念关系表)!(clsRTConceptRelaBL:CheckPropertyNew)';
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
export function RTConceptRela_GetJSONStrByObj(pobjRTConceptRelaEN: clsRTConceptRelaEN): string {
  pobjRTConceptRelaEN.sfUpdFldSetStr = pobjRTConceptRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjRTConceptRelaEN);
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
export function RTConceptRela_GetObjLstByJSONStr(strJSON: string): Array<clsRTConceptRelaEN> {
  let arrRTConceptRelaObjLst = new Array<clsRTConceptRelaEN>();
  if (strJSON === '') {
    return arrRTConceptRelaObjLst;
  }
  try {
    arrRTConceptRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrRTConceptRelaObjLst;
  }
  return arrRTConceptRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRTConceptRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function RTConceptRela_GetObjLstByJSONObjLst(
  arrRTConceptRelaObjLstS: Array<clsRTConceptRelaEN>,
): Array<clsRTConceptRelaEN> {
  const arrRTConceptRelaObjLst = new Array<clsRTConceptRelaEN>();
  for (const objInFor of arrRTConceptRelaObjLstS) {
    const obj1 = RTConceptRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrRTConceptRelaObjLst.push(obj1);
  }
  return arrRTConceptRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function RTConceptRela_GetObjByJSONStr(strJSON: string): clsRTConceptRelaEN {
  let pobjRTConceptRelaEN = new clsRTConceptRelaEN();
  if (strJSON === '') {
    return pobjRTConceptRelaEN;
  }
  try {
    pobjRTConceptRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjRTConceptRelaEN;
  }
  return pobjRTConceptRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function RTConceptRela_GetCombineCondition(
  objRTConceptRelaCond: clsRTConceptRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objRTConceptRelaCond.dicFldComparisonOp,
      clsRTConceptRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objRTConceptRelaCond.dicFldComparisonOp[clsRTConceptRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsRTConceptRelaEN.con_mId,
      objRTConceptRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTConceptRelaCond.dicFldComparisonOp,
      clsRTConceptRelaEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objRTConceptRelaCond.dicFldComparisonOp[clsRTConceptRelaEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTConceptRelaEN.con_TopicId,
      objRTConceptRelaCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTConceptRelaCond.dicFldComparisonOp,
      clsRTConceptRelaEN.con_ConceptId,
    ) == true
  ) {
    const strComparisonOpConceptId: string =
      objRTConceptRelaCond.dicFldComparisonOp[clsRTConceptRelaEN.con_ConceptId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTConceptRelaEN.con_ConceptId,
      objRTConceptRelaCond.conceptId,
      strComparisonOpConceptId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTConceptRelaCond.dicFldComparisonOp,
      clsRTConceptRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objRTConceptRelaCond.dicFldComparisonOp[clsRTConceptRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTConceptRelaEN.con_UpdDate,
      objRTConceptRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTConceptRelaCond.dicFldComparisonOp,
      clsRTConceptRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objRTConceptRelaCond.dicFldComparisonOp[clsRTConceptRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTConceptRelaEN.con_Memo,
      objRTConceptRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTConceptRelaCond.dicFldComparisonOp,
      clsRTConceptRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objRTConceptRelaCond.dicFldComparisonOp[clsRTConceptRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTConceptRelaEN.con_UpdUser,
      objRTConceptRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTConceptRelaCond.dicFldComparisonOp,
      clsRTConceptRelaEN.con_ClassificationId,
    ) == true
  ) {
    const strComparisonOpClassificationId: string =
      objRTConceptRelaCond.dicFldComparisonOp[clsRTConceptRelaEN.con_ClassificationId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTConceptRelaEN.con_ClassificationId,
      objRTConceptRelaCond.classificationId,
      strComparisonOpClassificationId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTConceptRelaCond.dicFldComparisonOp,
      clsRTConceptRelaEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objRTConceptRelaCond.dicFldComparisonOp[clsRTConceptRelaEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTConceptRelaEN.con_IdCurrEduCls,
      objRTConceptRelaCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--RTConceptRela(主题概念关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @param strConceptId: 概念Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function RTConceptRela_GetUniCondStr(objRTConceptRelaEN: clsRTConceptRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId = '{0}'", objRTConceptRelaEN.mId);
  strWhereCond += Format(" and TopicId = '{0}'", objRTConceptRelaEN.topicId);
  strWhereCond += Format(" and ConceptId = '{0}'", objRTConceptRelaEN.conceptId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--RTConceptRela(主题概念关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @param strConceptId: 概念Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function RTConceptRela_GetUniCondStr4Update(objRTConceptRelaEN: clsRTConceptRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objRTConceptRelaEN.mId);
  strWhereCond += Format(" and mId = '{0}'", objRTConceptRelaEN.mId);
  strWhereCond += Format(" and TopicId = '{0}'", objRTConceptRelaEN.topicId);
  strWhereCond += Format(" and ConceptId = '{0}'", objRTConceptRelaEN.conceptId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRTConceptRelaENS:源对象
 * @param objRTConceptRelaENT:目标对象
 */
export function RTConceptRela_CopyObjTo(
  objRTConceptRelaENS: clsRTConceptRelaEN,
  objRTConceptRelaENT: clsRTConceptRelaEN,
): void {
  objRTConceptRelaENT.mId = objRTConceptRelaENS.mId; //mId
  objRTConceptRelaENT.topicId = objRTConceptRelaENS.topicId; //主题Id
  objRTConceptRelaENT.conceptId = objRTConceptRelaENS.conceptId; //概念Id
  objRTConceptRelaENT.updDate = objRTConceptRelaENS.updDate; //修改日期
  objRTConceptRelaENT.memo = objRTConceptRelaENS.memo; //备注
  objRTConceptRelaENT.updUser = objRTConceptRelaENS.updUser; //修改人
  objRTConceptRelaENT.classificationId = objRTConceptRelaENS.classificationId; //分类Id
  objRTConceptRelaENT.idCurrEduCls = objRTConceptRelaENS.idCurrEduCls; //教学班流水号
  objRTConceptRelaENT.sfUpdFldSetStr = objRTConceptRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRTConceptRelaENS:源对象
 * @param objRTConceptRelaENT:目标对象
 */
export function RTConceptRela_GetObjFromJsonObj(
  objRTConceptRelaENS: clsRTConceptRelaEN,
): clsRTConceptRelaEN {
  const objRTConceptRelaENT: clsRTConceptRelaEN = new clsRTConceptRelaEN();
  ObjectAssign(objRTConceptRelaENT, objRTConceptRelaENS);
  return objRTConceptRelaENT;
}
