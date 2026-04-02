/**
 * 类名:clsvQuestionNumByKnowledgeIdWApi
 * 表名:vQuestionNumByKnowledgeId(01120937)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:03
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vQuestionNumByKnowledgeId(vQuestionNumByKnowledgeId)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月08日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvQuestionNumByKnowledgeIdEN } from '@/ts/L0Entity/Knowledges/clsvQuestionNumByKnowledgeIdEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vQuestionNumByKnowledgeId_Controller = 'vQuestionNumByKnowledgeIdApi';
export const vQuestionNumByKnowledgeId_ConstructorName = 'vQuestionNumByKnowledgeId';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCourseKnowledgeId:关键字
 * @returns 对象
 **/
export async function vQuestionNumByKnowledgeId_GetObjByCourseKnowledgeIdAsync(
  strCourseKnowledgeId: string,
): Promise<clsvQuestionNumByKnowledgeIdEN | null> {
  const strThisFuncName = 'GetObjByCourseKnowledgeIdAsync';

  if (IsNullOrEmpty(strCourseKnowledgeId) == true) {
    const strMsg = Format(
      '参数:[strCourseKnowledgeId]不能为空!(In clsvQuestionNumByKnowledgeIdWApi.GetObjByCourseKnowledgeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseKnowledgeId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseKnowledgeId]的长度:[{0}]不正确!(clsvQuestionNumByKnowledgeIdWApi.GetObjByCourseKnowledgeIdAsync)',
      strCourseKnowledgeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCourseKnowledgeId';
  const strUrl = GetWebApiUrl(vQuestionNumByKnowledgeId_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseKnowledgeId,
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
      const objvQuestionNumByKnowledgeId = vQuestionNumByKnowledgeId_GetObjFromJsonObj(returnObj);
      return objvQuestionNumByKnowledgeId;
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
        vQuestionNumByKnowledgeId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQuestionNumByKnowledgeId_ConstructorName,
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
 * @param strCourseKnowledgeId:所给的关键字
 * @returns 对象
 */
export async function vQuestionNumByKnowledgeId_GetObjByCourseKnowledgeIdCache(
  strCourseKnowledgeId: string,
  strCourseId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCourseKnowledgeIdCache';

  if (IsNullOrEmpty(strCourseKnowledgeId) == true) {
    const strMsg = Format(
      '参数:[strCourseKnowledgeId]不能为空!(In clsvQuestionNumByKnowledgeIdWApi.GetObjByCourseKnowledgeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseKnowledgeId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseKnowledgeId]的长度:[{0}]不正确!(clsvQuestionNumByKnowledgeIdWApi.GetObjByCourseKnowledgeIdCache)',
      strCourseKnowledgeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvQuestionNumByKnowledgeIdObjLstCache = await vQuestionNumByKnowledgeId_GetObjLstCache(
    strCourseId,
  );
  try {
    const arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdObjLstCache.filter(
      (x) => x.courseKnowledgeId == strCourseKnowledgeId,
    );
    let objvQuestionNumByKnowledgeId: clsvQuestionNumByKnowledgeIdEN;
    if (arrvQuestionNumByKnowledgeIdSel.length > 0) {
      objvQuestionNumByKnowledgeId = arrvQuestionNumByKnowledgeIdSel[0];
      return objvQuestionNumByKnowledgeId;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvQuestionNumByKnowledgeIdConst =
          await vQuestionNumByKnowledgeId_GetObjByCourseKnowledgeIdAsync(strCourseKnowledgeId);
        if (objvQuestionNumByKnowledgeIdConst != null) {
          vQuestionNumByKnowledgeId_ReFreshThisCache(strCourseId);
          return objvQuestionNumByKnowledgeIdConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCourseKnowledgeId,
      vQuestionNumByKnowledgeId_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCourseKnowledgeId:所给的关键字
 * @returns 对象
 */
export async function vQuestionNumByKnowledgeId_GetObjByCourseKnowledgeIdlocalStorage(
  strCourseKnowledgeId: string,
) {
  const strThisFuncName = 'GetObjByCourseKnowledgeIdlocalStorage';

  if (IsNullOrEmpty(strCourseKnowledgeId) == true) {
    const strMsg = Format(
      '参数:[strCourseKnowledgeId]不能为空!(In clsvQuestionNumByKnowledgeIdWApi.GetObjByCourseKnowledgeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseKnowledgeId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseKnowledgeId]的长度:[{0}]不正确!(clsvQuestionNumByKnowledgeIdWApi.GetObjByCourseKnowledgeIdlocalStorage)',
      strCourseKnowledgeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format(
    '{0}_{1}',
    clsvQuestionNumByKnowledgeIdEN._CurrTabName,
    strCourseKnowledgeId,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvQuestionNumByKnowledgeIdCache: clsvQuestionNumByKnowledgeIdEN =
      JSON.parse(strTempObj);
    return objvQuestionNumByKnowledgeIdCache;
  }
  try {
    const objvQuestionNumByKnowledgeId =
      await vQuestionNumByKnowledgeId_GetObjByCourseKnowledgeIdAsync(strCourseKnowledgeId);
    if (objvQuestionNumByKnowledgeId != null) {
      localStorage.setItem(strKey, JSON.stringify(objvQuestionNumByKnowledgeId));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvQuestionNumByKnowledgeId;
    }
    return objvQuestionNumByKnowledgeId;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCourseKnowledgeId,
      vQuestionNumByKnowledgeId_ConstructorName,
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
 @param strCourseId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vQuestionNumByKnowledgeId_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strCourseIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCourseIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strCourseIdClassfy]不能为空!(In clsvQuestionNumByKnowledgeIdWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsvQuestionNumByKnowledgeIdWApi.func)',
      strCourseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvQuestionNumByKnowledgeIdEN.con_CourseKnowledgeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvQuestionNumByKnowledgeIdEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvQuestionNumByKnowledgeIdEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCourseKnowledgeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvQuestionNumByKnowledgeId =
    await vQuestionNumByKnowledgeId_GetObjByCourseKnowledgeIdCache(
      strCourseKnowledgeId,
      strCourseIdClassfy,
    );
  if (objvQuestionNumByKnowledgeId == null) return '';
  if (objvQuestionNumByKnowledgeId.GetFldValue(strOutFldName) == null) return '';
  return objvQuestionNumByKnowledgeId.GetFldValue(strOutFldName).toString();
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
export function vQuestionNumByKnowledgeId_SortFunDefa(
  a: clsvQuestionNumByKnowledgeIdEN,
  b: clsvQuestionNumByKnowledgeIdEN,
): number {
  return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
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
export function vQuestionNumByKnowledgeId_SortFunDefa2Fld(
  a: clsvQuestionNumByKnowledgeIdEN,
  b: clsvQuestionNumByKnowledgeIdEN,
): number {
  if (a.courseId == b.courseId) return a.questionNum - b.questionNum;
  else return a.courseId.localeCompare(b.courseId);
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
export function vQuestionNumByKnowledgeId_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvQuestionNumByKnowledgeIdEN.con_CourseKnowledgeId:
        return (a: clsvQuestionNumByKnowledgeIdEN, b: clsvQuestionNumByKnowledgeIdEN) => {
          return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
        };
      case clsvQuestionNumByKnowledgeIdEN.con_CourseId:
        return (a: clsvQuestionNumByKnowledgeIdEN, b: clsvQuestionNumByKnowledgeIdEN) => {
          if (a.courseId == null) return -1;
          if (b.courseId == null) return 1;
          return a.courseId.localeCompare(b.courseId);
        };
      case clsvQuestionNumByKnowledgeIdEN.con_QuestionNum:
        return (a: clsvQuestionNumByKnowledgeIdEN, b: clsvQuestionNumByKnowledgeIdEN) => {
          return a.questionNum - b.questionNum;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vQuestionNumByKnowledgeId]中不存在!(in ${vQuestionNumByKnowledgeId_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvQuestionNumByKnowledgeIdEN.con_CourseKnowledgeId:
        return (a: clsvQuestionNumByKnowledgeIdEN, b: clsvQuestionNumByKnowledgeIdEN) => {
          return b.courseKnowledgeId.localeCompare(a.courseKnowledgeId);
        };
      case clsvQuestionNumByKnowledgeIdEN.con_CourseId:
        return (a: clsvQuestionNumByKnowledgeIdEN, b: clsvQuestionNumByKnowledgeIdEN) => {
          if (b.courseId == null) return -1;
          if (a.courseId == null) return 1;
          return b.courseId.localeCompare(a.courseId);
        };
      case clsvQuestionNumByKnowledgeIdEN.con_QuestionNum:
        return (a: clsvQuestionNumByKnowledgeIdEN, b: clsvQuestionNumByKnowledgeIdEN) => {
          return b.questionNum - a.questionNum;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vQuestionNumByKnowledgeId]中不存在!(in ${vQuestionNumByKnowledgeId_ConstructorName}.${strThisFuncName})`;
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
export async function vQuestionNumByKnowledgeId_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvQuestionNumByKnowledgeIdEN.con_CourseKnowledgeId:
      return (obj: clsvQuestionNumByKnowledgeIdEN) => {
        return obj.courseKnowledgeId === value;
      };
    case clsvQuestionNumByKnowledgeIdEN.con_CourseId:
      return (obj: clsvQuestionNumByKnowledgeIdEN) => {
        return obj.courseId === value;
      };
    case clsvQuestionNumByKnowledgeIdEN.con_QuestionNum:
      return (obj: clsvQuestionNumByKnowledgeIdEN) => {
        return obj.questionNum === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vQuestionNumByKnowledgeId]中不存在!(in ${vQuestionNumByKnowledgeId_ConstructorName}.${strThisFuncName})`;
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
 @param strCourseId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vQuestionNumByKnowledgeId_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCourseIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCourseIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strCourseIdClassfy]不能为空!(In clsvQuestionNumByKnowledgeIdWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsvQuestionNumByKnowledgeIdWApi.funcKey)',
      strCourseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvQuestionNumByKnowledgeIdEN.con_CourseKnowledgeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvQuestionNumByKnowledgeId = await vQuestionNumByKnowledgeId_GetObjLstCache(
    strCourseIdClassfy,
  );
  if (arrvQuestionNumByKnowledgeId == null) return [];
  let arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeId;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvQuestionNumByKnowledgeIdSel.length == 0) return [];
  return arrvQuestionNumByKnowledgeIdSel.map((x) => x.courseKnowledgeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vQuestionNumByKnowledgeId_GetFirstIDAsync(
  strWhereCond: string,
): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vQuestionNumByKnowledgeId_Controller, strAction);

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
        vQuestionNumByKnowledgeId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQuestionNumByKnowledgeId_ConstructorName,
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
export async function vQuestionNumByKnowledgeId_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vQuestionNumByKnowledgeId_Controller, strAction);

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
        vQuestionNumByKnowledgeId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQuestionNumByKnowledgeId_ConstructorName,
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
export async function vQuestionNumByKnowledgeId_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvQuestionNumByKnowledgeIdEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vQuestionNumByKnowledgeId_Controller, strAction);

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
      const objvQuestionNumByKnowledgeId = vQuestionNumByKnowledgeId_GetObjFromJsonObj(returnObj);
      return objvQuestionNumByKnowledgeId;
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
        vQuestionNumByKnowledgeId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQuestionNumByKnowledgeId_ConstructorName,
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
export async function vQuestionNumByKnowledgeId_GetObjLstClientCache(strCourseId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvQuestionNumByKnowledgeIdEN.WhereFormat) == false) {
    strWhereCond = Format(clsvQuestionNumByKnowledgeIdEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("CourseId='{0}'", strCourseId);
  }
  const strKey = Format('{0}_{1}', clsvQuestionNumByKnowledgeIdEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsvQuestionNumByKnowledgeIdEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvQuestionNumByKnowledgeIdEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvQuestionNumByKnowledgeIdExObjLstCache: Array<clsvQuestionNumByKnowledgeIdEN> =
      CacheHelper.Get(strKey);
    const arrvQuestionNumByKnowledgeIdObjLstT = vQuestionNumByKnowledgeId_GetObjLstByJSONObjLst(
      arrvQuestionNumByKnowledgeIdExObjLstCache,
    );
    return arrvQuestionNumByKnowledgeIdObjLstT;
  }
  try {
    const arrvQuestionNumByKnowledgeIdExObjLst = await vQuestionNumByKnowledgeId_GetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrvQuestionNumByKnowledgeIdExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvQuestionNumByKnowledgeIdExObjLst.length,
    );
    console.log(strInfo);
    return arrvQuestionNumByKnowledgeIdExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vQuestionNumByKnowledgeId_ConstructorName,
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
export async function vQuestionNumByKnowledgeId_GetObjLstlocalStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvQuestionNumByKnowledgeIdEN.WhereFormat) == false) {
    strWhereCond = Format(clsvQuestionNumByKnowledgeIdEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvQuestionNumByKnowledgeIdEN.con_CourseId, strCourseId);
  }
  const strKey = Format('{0}_{1}', clsvQuestionNumByKnowledgeIdEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsvQuestionNumByKnowledgeIdEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvQuestionNumByKnowledgeIdEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvQuestionNumByKnowledgeIdExObjLstCache: Array<clsvQuestionNumByKnowledgeIdEN> =
      JSON.parse(strTempObjLst);
    const arrvQuestionNumByKnowledgeIdObjLstT = vQuestionNumByKnowledgeId_GetObjLstByJSONObjLst(
      arrvQuestionNumByKnowledgeIdExObjLstCache,
    );
    return arrvQuestionNumByKnowledgeIdObjLstT;
  }
  try {
    const arrvQuestionNumByKnowledgeIdExObjLst = await vQuestionNumByKnowledgeId_GetObjLstAsync(
      strWhereCond,
    );
    const strPrefix = Format('{0}_', clsvQuestionNumByKnowledgeIdEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvQuestionNumByKnowledgeIdExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvQuestionNumByKnowledgeIdExObjLst.length,
    );
    console.log(strInfo);
    return arrvQuestionNumByKnowledgeIdExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vQuestionNumByKnowledgeId_ConstructorName,
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
export async function vQuestionNumByKnowledgeId_GetObjLstlocalStoragePureCache(
  strCourseId: string,
) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvQuestionNumByKnowledgeIdEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvQuestionNumByKnowledgeIdObjLstCache: Array<clsvQuestionNumByKnowledgeIdEN> =
      JSON.parse(strTempObjLst);
    return arrvQuestionNumByKnowledgeIdObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vQuestionNumByKnowledgeId_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvQuestionNumByKnowledgeIdEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vQuestionNumByKnowledgeId_Controller, strAction);

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
          vQuestionNumByKnowledgeId_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQuestionNumByKnowledgeId_GetObjLstByJSONObjLst(returnObjLst);
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
        vQuestionNumByKnowledgeId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQuestionNumByKnowledgeId_ConstructorName,
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
export async function vQuestionNumByKnowledgeId_GetObjLstsessionStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvQuestionNumByKnowledgeIdEN.WhereFormat) == false) {
    strWhereCond = Format(clsvQuestionNumByKnowledgeIdEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvQuestionNumByKnowledgeIdEN.con_CourseId, strCourseId);
  }
  const strKey = Format('{0}_{1}', clsvQuestionNumByKnowledgeIdEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsvQuestionNumByKnowledgeIdEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvQuestionNumByKnowledgeIdEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvQuestionNumByKnowledgeIdExObjLstCache: Array<clsvQuestionNumByKnowledgeIdEN> =
      JSON.parse(strTempObjLst);
    const arrvQuestionNumByKnowledgeIdObjLstT = vQuestionNumByKnowledgeId_GetObjLstByJSONObjLst(
      arrvQuestionNumByKnowledgeIdExObjLstCache,
    );
    return arrvQuestionNumByKnowledgeIdObjLstT;
  }
  try {
    const arrvQuestionNumByKnowledgeIdExObjLst = await vQuestionNumByKnowledgeId_GetObjLstAsync(
      strWhereCond,
    );
    const strPrefix = Format('{0}_', clsvQuestionNumByKnowledgeIdEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvQuestionNumByKnowledgeIdExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvQuestionNumByKnowledgeIdExObjLst.length,
    );
    console.log(strInfo);
    return arrvQuestionNumByKnowledgeIdExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vQuestionNumByKnowledgeId_ConstructorName,
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
export async function vQuestionNumByKnowledgeId_GetObjLstsessionStoragePureCache(
  strCourseId: string,
) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvQuestionNumByKnowledgeIdEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvQuestionNumByKnowledgeIdObjLstCache: Array<clsvQuestionNumByKnowledgeIdEN> =
      JSON.parse(strTempObjLst);
    return arrvQuestionNumByKnowledgeIdObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQuestionNumByKnowledgeId_GetObjLstCache(
  strCourseId: string,
): Promise<Array<clsvQuestionNumByKnowledgeIdEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clsvQuestionNumByKnowledgeIdWApi.vQuestionNumByKnowledgeId_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvQuestionNumByKnowledgeIdWApi.vQuestionNumByKnowledgeId_GetObjLstCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvQuestionNumByKnowledgeIdObjLstCache;
  switch (clsvQuestionNumByKnowledgeIdEN.CacheModeId) {
    case '04': //sessionStorage
      arrvQuestionNumByKnowledgeIdObjLstCache =
        await vQuestionNumByKnowledgeId_GetObjLstsessionStorage(strCourseId);
      break;
    case '03': //localStorage
      arrvQuestionNumByKnowledgeIdObjLstCache =
        await vQuestionNumByKnowledgeId_GetObjLstlocalStorage(strCourseId);
      break;
    case '02': //ClientCache
      arrvQuestionNumByKnowledgeIdObjLstCache =
        await vQuestionNumByKnowledgeId_GetObjLstClientCache(strCourseId);
      break;
    default:
      arrvQuestionNumByKnowledgeIdObjLstCache =
        await vQuestionNumByKnowledgeId_GetObjLstClientCache(strCourseId);
      break;
  }
  return arrvQuestionNumByKnowledgeIdObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQuestionNumByKnowledgeId_GetObjLstPureCache(strCourseId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvQuestionNumByKnowledgeIdObjLstCache;
  switch (clsvQuestionNumByKnowledgeIdEN.CacheModeId) {
    case '04': //sessionStorage
      arrvQuestionNumByKnowledgeIdObjLstCache =
        await vQuestionNumByKnowledgeId_GetObjLstsessionStoragePureCache(strCourseId);
      break;
    case '03': //localStorage
      arrvQuestionNumByKnowledgeIdObjLstCache =
        await vQuestionNumByKnowledgeId_GetObjLstlocalStoragePureCache(strCourseId);
      break;
    case '02': //ClientCache
      arrvQuestionNumByKnowledgeIdObjLstCache = null;
      break;
    default:
      arrvQuestionNumByKnowledgeIdObjLstCache = null;
      break;
  }
  return arrvQuestionNumByKnowledgeIdObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCourseKnowledgeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vQuestionNumByKnowledgeId_GetSubObjLstCache(
  objvQuestionNumByKnowledgeIdCond: clsvQuestionNumByKnowledgeIdEN,
  strCourseId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvQuestionNumByKnowledgeIdObjLstCache = await vQuestionNumByKnowledgeId_GetObjLstCache(
    strCourseId,
  );
  let arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdObjLstCache;
  if (
    objvQuestionNumByKnowledgeIdCond.sfFldComparisonOp == null ||
    objvQuestionNumByKnowledgeIdCond.sfFldComparisonOp == ''
  )
    return arrvQuestionNumByKnowledgeIdSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvQuestionNumByKnowledgeIdCond.sfFldComparisonOp,
  );
  //console.log("clsvQuestionNumByKnowledgeIdWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvQuestionNumByKnowledgeIdCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvQuestionNumByKnowledgeIdCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvQuestionNumByKnowledgeIdSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvQuestionNumByKnowledgeIdCond),
      vQuestionNumByKnowledgeId_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvQuestionNumByKnowledgeIdEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCourseKnowledgeId:关键字列表
 * @returns 对象列表
 **/
export async function vQuestionNumByKnowledgeId_GetObjLstByCourseKnowledgeIdLstAsync(
  arrCourseKnowledgeId: Array<string>,
): Promise<Array<clsvQuestionNumByKnowledgeIdEN>> {
  const strThisFuncName = 'GetObjLstByCourseKnowledgeIdLstAsync';
  const strAction = 'GetObjLstByCourseKnowledgeIdLst';
  const strUrl = GetWebApiUrl(vQuestionNumByKnowledgeId_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCourseKnowledgeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vQuestionNumByKnowledgeId_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQuestionNumByKnowledgeId_GetObjLstByJSONObjLst(returnObjLst);
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
        vQuestionNumByKnowledgeId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQuestionNumByKnowledgeId_ConstructorName,
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
 * @param arrstrCourseKnowledgeIdLst:关键字列表
 * @returns 对象列表
 */
export async function vQuestionNumByKnowledgeId_GetObjLstByCourseKnowledgeIdLstCache(
  arrCourseKnowledgeIdLst: Array<string>,
  strCourseId: string,
) {
  const strThisFuncName = 'GetObjLstByCourseKnowledgeIdLstCache';
  try {
    const arrvQuestionNumByKnowledgeIdObjLstCache = await vQuestionNumByKnowledgeId_GetObjLstCache(
      strCourseId,
    );
    const arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdObjLstCache.filter(
      (x) => arrCourseKnowledgeIdLst.indexOf(x.courseKnowledgeId) > -1,
    );
    return arrvQuestionNumByKnowledgeIdSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCourseKnowledgeIdLst.join(','),
      vQuestionNumByKnowledgeId_ConstructorName,
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
export async function vQuestionNumByKnowledgeId_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvQuestionNumByKnowledgeIdEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vQuestionNumByKnowledgeId_Controller, strAction);

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
          vQuestionNumByKnowledgeId_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQuestionNumByKnowledgeId_GetObjLstByJSONObjLst(returnObjLst);
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
        vQuestionNumByKnowledgeId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQuestionNumByKnowledgeId_ConstructorName,
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
export async function vQuestionNumByKnowledgeId_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvQuestionNumByKnowledgeIdEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vQuestionNumByKnowledgeId_Controller, strAction);

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
          vQuestionNumByKnowledgeId_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQuestionNumByKnowledgeId_GetObjLstByJSONObjLst(returnObjLst);
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
        vQuestionNumByKnowledgeId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQuestionNumByKnowledgeId_ConstructorName,
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
export async function vQuestionNumByKnowledgeId_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvQuestionNumByKnowledgeIdEN>();
  const arrvQuestionNumByKnowledgeIdObjLstCache = await vQuestionNumByKnowledgeId_GetObjLstCache(
    strCourseId,
  );
  if (arrvQuestionNumByKnowledgeIdObjLstCache.length == 0)
    return arrvQuestionNumByKnowledgeIdObjLstCache;
  let arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvQuestionNumByKnowledgeIdCond = new clsvQuestionNumByKnowledgeIdEN();
  ObjectAssign(objvQuestionNumByKnowledgeIdCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvQuestionNumByKnowledgeIdWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvQuestionNumByKnowledgeIdCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvQuestionNumByKnowledgeIdSel.length == 0) return arrvQuestionNumByKnowledgeIdSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.sort(
        vQuestionNumByKnowledgeId_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.sort(objPagerPara.sortFun);
    }
    arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.slice(intStart, intEnd);
    return arrvQuestionNumByKnowledgeIdSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vQuestionNumByKnowledgeId_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvQuestionNumByKnowledgeIdEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vQuestionNumByKnowledgeId_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvQuestionNumByKnowledgeIdEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvQuestionNumByKnowledgeIdEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vQuestionNumByKnowledgeId_Controller, strAction);

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
          vQuestionNumByKnowledgeId_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQuestionNumByKnowledgeId_GetObjLstByJSONObjLst(returnObjLst);
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
        vQuestionNumByKnowledgeId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQuestionNumByKnowledgeId_ConstructorName,
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
 * @param objstrCourseKnowledgeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vQuestionNumByKnowledgeId_IsExistRecordCache(
  objvQuestionNumByKnowledgeIdCond: clsvQuestionNumByKnowledgeIdEN,
  strCourseId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvQuestionNumByKnowledgeIdObjLstCache = await vQuestionNumByKnowledgeId_GetObjLstCache(
    strCourseId,
  );
  if (arrvQuestionNumByKnowledgeIdObjLstCache == null) return false;
  let arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdObjLstCache;
  if (
    objvQuestionNumByKnowledgeIdCond.sfFldComparisonOp == null ||
    objvQuestionNumByKnowledgeIdCond.sfFldComparisonOp == ''
  )
    return arrvQuestionNumByKnowledgeIdSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvQuestionNumByKnowledgeIdCond.sfFldComparisonOp,
  );
  //console.log("clsvQuestionNumByKnowledgeIdWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvQuestionNumByKnowledgeIdCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvQuestionNumByKnowledgeIdCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvQuestionNumByKnowledgeIdSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvQuestionNumByKnowledgeIdCond),
      vQuestionNumByKnowledgeId_ConstructorName,
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
export async function vQuestionNumByKnowledgeId_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vQuestionNumByKnowledgeId_Controller, strAction);

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
        vQuestionNumByKnowledgeId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQuestionNumByKnowledgeId_ConstructorName,
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
 * @param strCourseKnowledgeId:所给的关键字
 * @returns 对象
 */
export async function vQuestionNumByKnowledgeId_IsExistCache(
  strCourseKnowledgeId: string,
  strCourseId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrvQuestionNumByKnowledgeIdObjLstCache = await vQuestionNumByKnowledgeId_GetObjLstCache(
    strCourseId,
  );
  if (arrvQuestionNumByKnowledgeIdObjLstCache == null) return false;
  try {
    const arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdObjLstCache.filter(
      (x) => x.courseKnowledgeId == strCourseKnowledgeId,
    );
    if (arrvQuestionNumByKnowledgeIdSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCourseKnowledgeId,
      vQuestionNumByKnowledgeId_ConstructorName,
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
 * @param strCourseKnowledgeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vQuestionNumByKnowledgeId_IsExistAsync(
  strCourseKnowledgeId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vQuestionNumByKnowledgeId_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseKnowledgeId,
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
        vQuestionNumByKnowledgeId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQuestionNumByKnowledgeId_ConstructorName,
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
export async function vQuestionNumByKnowledgeId_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vQuestionNumByKnowledgeId_Controller, strAction);

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
        vQuestionNumByKnowledgeId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQuestionNumByKnowledgeId_ConstructorName,
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
 * @param objvQuestionNumByKnowledgeIdCond:条件对象
 * @returns 对象列表记录数
 */
export async function vQuestionNumByKnowledgeId_GetRecCountByCondCache(
  objvQuestionNumByKnowledgeIdCond: clsvQuestionNumByKnowledgeIdEN,
  strCourseId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvQuestionNumByKnowledgeIdObjLstCache = await vQuestionNumByKnowledgeId_GetObjLstCache(
    strCourseId,
  );
  if (arrvQuestionNumByKnowledgeIdObjLstCache == null) return 0;
  let arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdObjLstCache;
  if (
    objvQuestionNumByKnowledgeIdCond.sfFldComparisonOp == null ||
    objvQuestionNumByKnowledgeIdCond.sfFldComparisonOp == ''
  )
    return arrvQuestionNumByKnowledgeIdSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvQuestionNumByKnowledgeIdCond.sfFldComparisonOp,
  );
  //console.log("clsvQuestionNumByKnowledgeIdWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvQuestionNumByKnowledgeIdCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvQuestionNumByKnowledgeIdCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvQuestionNumByKnowledgeIdSel = arrvQuestionNumByKnowledgeIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvQuestionNumByKnowledgeIdSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvQuestionNumByKnowledgeIdCond),
      vQuestionNumByKnowledgeId_ConstructorName,
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
export function vQuestionNumByKnowledgeId_GetWebApiUrl(
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
export function vQuestionNumByKnowledgeId_ReFreshThisCache(strCourseId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvQuestionNumByKnowledgeIdEN._CurrTabName, strCourseId);
    switch (clsvQuestionNumByKnowledgeIdEN.CacheModeId) {
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
export function vQuestionNumByKnowledgeId_GetJSONStrByObj(
  pobjvQuestionNumByKnowledgeIdEN: clsvQuestionNumByKnowledgeIdEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvQuestionNumByKnowledgeIdEN);
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
export function vQuestionNumByKnowledgeId_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvQuestionNumByKnowledgeIdEN> {
  let arrvQuestionNumByKnowledgeIdObjLst = new Array<clsvQuestionNumByKnowledgeIdEN>();
  if (strJSON === '') {
    return arrvQuestionNumByKnowledgeIdObjLst;
  }
  try {
    arrvQuestionNumByKnowledgeIdObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvQuestionNumByKnowledgeIdObjLst;
  }
  return arrvQuestionNumByKnowledgeIdObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQuestionNumByKnowledgeIdObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vQuestionNumByKnowledgeId_GetObjLstByJSONObjLst(
  arrvQuestionNumByKnowledgeIdObjLstS: Array<clsvQuestionNumByKnowledgeIdEN>,
): Array<clsvQuestionNumByKnowledgeIdEN> {
  const arrvQuestionNumByKnowledgeIdObjLst = new Array<clsvQuestionNumByKnowledgeIdEN>();
  for (const objInFor of arrvQuestionNumByKnowledgeIdObjLstS) {
    const obj1 = vQuestionNumByKnowledgeId_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvQuestionNumByKnowledgeIdObjLst.push(obj1);
  }
  return arrvQuestionNumByKnowledgeIdObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vQuestionNumByKnowledgeId_GetObjByJSONStr(
  strJSON: string,
): clsvQuestionNumByKnowledgeIdEN {
  let pobjvQuestionNumByKnowledgeIdEN = new clsvQuestionNumByKnowledgeIdEN();
  if (strJSON === '') {
    return pobjvQuestionNumByKnowledgeIdEN;
  }
  try {
    pobjvQuestionNumByKnowledgeIdEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvQuestionNumByKnowledgeIdEN;
  }
  return pobjvQuestionNumByKnowledgeIdEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vQuestionNumByKnowledgeId_GetCombineCondition(
  objvQuestionNumByKnowledgeIdCond: clsvQuestionNumByKnowledgeIdEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvQuestionNumByKnowledgeIdCond.dicFldComparisonOp,
      clsvQuestionNumByKnowledgeIdEN.con_CourseKnowledgeId,
    ) == true
  ) {
    const strComparisonOpCourseKnowledgeId: string =
      objvQuestionNumByKnowledgeIdCond.dicFldComparisonOp[
        clsvQuestionNumByKnowledgeIdEN.con_CourseKnowledgeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQuestionNumByKnowledgeIdEN.con_CourseKnowledgeId,
      objvQuestionNumByKnowledgeIdCond.courseKnowledgeId,
      strComparisonOpCourseKnowledgeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQuestionNumByKnowledgeIdCond.dicFldComparisonOp,
      clsvQuestionNumByKnowledgeIdEN.con_CourseId,
    ) == true
  ) {
    const strComparisonOpCourseId: string =
      objvQuestionNumByKnowledgeIdCond.dicFldComparisonOp[
        clsvQuestionNumByKnowledgeIdEN.con_CourseId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQuestionNumByKnowledgeIdEN.con_CourseId,
      objvQuestionNumByKnowledgeIdCond.courseId,
      strComparisonOpCourseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQuestionNumByKnowledgeIdCond.dicFldComparisonOp,
      clsvQuestionNumByKnowledgeIdEN.con_QuestionNum,
    ) == true
  ) {
    const strComparisonOpQuestionNum: string =
      objvQuestionNumByKnowledgeIdCond.dicFldComparisonOp[
        clsvQuestionNumByKnowledgeIdEN.con_QuestionNum
      ];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvQuestionNumByKnowledgeIdEN.con_QuestionNum,
      objvQuestionNumByKnowledgeIdCond.questionNum,
      strComparisonOpQuestionNum,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvQuestionNumByKnowledgeIdENS:源对象
 * @param objvQuestionNumByKnowledgeIdENT:目标对象
 */
export function vQuestionNumByKnowledgeId_CopyObjTo(
  objvQuestionNumByKnowledgeIdENS: clsvQuestionNumByKnowledgeIdEN,
  objvQuestionNumByKnowledgeIdENT: clsvQuestionNumByKnowledgeIdEN,
): void {
  objvQuestionNumByKnowledgeIdENT.courseKnowledgeId =
    objvQuestionNumByKnowledgeIdENS.courseKnowledgeId; //知识点Id
  objvQuestionNumByKnowledgeIdENT.courseId = objvQuestionNumByKnowledgeIdENS.courseId; //课程Id
  objvQuestionNumByKnowledgeIdENT.questionNum = objvQuestionNumByKnowledgeIdENS.questionNum; //题目数
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQuestionNumByKnowledgeIdENS:源对象
 * @param objvQuestionNumByKnowledgeIdENT:目标对象
 */
export function vQuestionNumByKnowledgeId_GetObjFromJsonObj(
  objvQuestionNumByKnowledgeIdENS: clsvQuestionNumByKnowledgeIdEN,
): clsvQuestionNumByKnowledgeIdEN {
  const objvQuestionNumByKnowledgeIdENT: clsvQuestionNumByKnowledgeIdEN =
    new clsvQuestionNumByKnowledgeIdEN();
  ObjectAssign(objvQuestionNumByKnowledgeIdENT, objvQuestionNumByKnowledgeIdENS);
  return objvQuestionNumByKnowledgeIdENT;
}
