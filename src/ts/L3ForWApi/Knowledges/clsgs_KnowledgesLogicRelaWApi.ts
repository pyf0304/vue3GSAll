/**
 * 类名:clsgs_KnowledgesLogicRelaWApi
 * 表名:gs_KnowledgesLogicRela(01120870)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:10
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
 * 知识点逻辑关系表(gs_KnowledgesLogicRela)
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
import { clsgs_KnowledgesLogicRelaEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicRelaEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gs_KnowledgesLogicRela_Controller = 'gs_KnowledgesLogicRelaApi';
export const gs_KnowledgesLogicRela_ConstructorName = 'gs_KnowledgesLogicRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function gs_KnowledgesLogicRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsgs_KnowledgesLogicRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsgs_KnowledgesLogicRelaWApi.GetObjBymIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
      const objgs_KnowledgesLogicRela = gs_KnowledgesLogicRela_GetObjFromJsonObj(returnObj);
      return objgs_KnowledgesLogicRela;
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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetObjBymIdCache(
  lngmId: number,
  strCourseId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsgs_KnowledgesLogicRelaWApi.GetObjBymIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_KnowledgesLogicRelaObjLstCache = await gs_KnowledgesLogicRela_GetObjLstCache(
    strCourseId,
  );
  try {
    const arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    let objgs_KnowledgesLogicRela: clsgs_KnowledgesLogicRelaEN;
    if (arrgs_KnowledgesLogicRelaSel.length > 0) {
      objgs_KnowledgesLogicRela = arrgs_KnowledgesLogicRelaSel[0];
      return objgs_KnowledgesLogicRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objgs_KnowledgesLogicRelaConst = await gs_KnowledgesLogicRela_GetObjBymIdAsync(
          lngmId,
        );
        if (objgs_KnowledgesLogicRelaConst != null) {
          gs_KnowledgesLogicRela_ReFreshThisCache(strCourseId);
          return objgs_KnowledgesLogicRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsgs_KnowledgesLogicRelaWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsgs_KnowledgesLogicRelaEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objgs_KnowledgesLogicRelaCache: clsgs_KnowledgesLogicRelaEN = JSON.parse(strTempObj);
    return objgs_KnowledgesLogicRelaCache;
  }
  try {
    const objgs_KnowledgesLogicRela = await gs_KnowledgesLogicRela_GetObjBymIdAsync(lngmId);
    if (objgs_KnowledgesLogicRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objgs_KnowledgesLogicRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objgs_KnowledgesLogicRela;
    }
    return objgs_KnowledgesLogicRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      gs_KnowledgesLogicRela_ConstructorName,
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
 * @param objgs_KnowledgesLogicRela:所给的对象
 * @returns 对象
 */
export async function gs_KnowledgesLogicRela_UpdateObjInLstCache(
  objgs_KnowledgesLogicRela: clsgs_KnowledgesLogicRelaEN,
  strCourseId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrgs_KnowledgesLogicRelaObjLstCache = await gs_KnowledgesLogicRela_GetObjLstCache(
      strCourseId,
    );
    const obj = arrgs_KnowledgesLogicRelaObjLstCache.find(
      (x) =>
        x.knowledgeGraphId == objgs_KnowledgesLogicRela.knowledgeGraphId &&
        x.courseKnowledgeIdA == objgs_KnowledgesLogicRela.courseKnowledgeIdA &&
        x.courseKnowledgeIdB == objgs_KnowledgesLogicRela.courseKnowledgeIdB,
    );
    if (obj != null) {
      objgs_KnowledgesLogicRela.mId = obj.mId;
      ObjectAssign(obj, objgs_KnowledgesLogicRela);
    } else {
      arrgs_KnowledgesLogicRelaObjLstCache.push(objgs_KnowledgesLogicRela);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gs_KnowledgesLogicRela_ConstructorName,
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
 @param strCourseId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function gs_KnowledgesLogicRela_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strCourseIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCourseIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strCourseIdClassfy]不能为空!(In clsgs_KnowledgesLogicRelaWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsgs_KnowledgesLogicRelaWApi.func)',
      strCourseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsgs_KnowledgesLogicRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsgs_KnowledgesLogicRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsgs_KnowledgesLogicRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objgs_KnowledgesLogicRela = await gs_KnowledgesLogicRela_GetObjBymIdCache(
    lngmId,
    strCourseIdClassfy,
  );
  if (objgs_KnowledgesLogicRela == null) return '';
  if (objgs_KnowledgesLogicRela.GetFldValue(strOutFldName) == null) return '';
  return objgs_KnowledgesLogicRela.GetFldValue(strOutFldName).toString();
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
export function gs_KnowledgesLogicRela_SortFunDefa(
  a: clsgs_KnowledgesLogicRelaEN,
  b: clsgs_KnowledgesLogicRelaEN,
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
export function gs_KnowledgesLogicRela_SortFunDefa2Fld(
  a: clsgs_KnowledgesLogicRelaEN,
  b: clsgs_KnowledgesLogicRelaEN,
): number {
  if (a.courseKnowledgeIdA == b.courseKnowledgeIdA)
    return a.courseKnowledgeTitleA.localeCompare(b.courseKnowledgeTitleA);
  else return a.courseKnowledgeIdA.localeCompare(b.courseKnowledgeIdA);
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
export function gs_KnowledgesLogicRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_KnowledgesLogicRelaEN.con_mId:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          return a.mId - b.mId;
        };
      case clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdA:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          return a.courseKnowledgeIdA.localeCompare(b.courseKnowledgeIdA);
        };
      case clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeTitleA:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (a.courseKnowledgeTitleA == null) return -1;
          if (b.courseKnowledgeTitleA == null) return 1;
          return a.courseKnowledgeTitleA.localeCompare(b.courseKnowledgeTitleA);
        };
      case clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdB:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          return a.courseKnowledgeIdB.localeCompare(b.courseKnowledgeIdB);
        };
      case clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeTitleB:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (a.courseKnowledgeTitleB == null) return -1;
          if (b.courseKnowledgeTitleB == null) return 1;
          return a.courseKnowledgeTitleB.localeCompare(b.courseKnowledgeTitleB);
        };
      case clsgs_KnowledgesLogicRelaEN.con_KnowledgeGraphId:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (a.knowledgeGraphId == null) return -1;
          if (b.knowledgeGraphId == null) return 1;
          return a.knowledgeGraphId.localeCompare(b.knowledgeGraphId);
        };
      case clsgs_KnowledgesLogicRelaEN.con_SourceAnchor:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (a.sourceAnchor == null) return -1;
          if (b.sourceAnchor == null) return 1;
          return a.sourceAnchor.localeCompare(b.sourceAnchor);
        };
      case clsgs_KnowledgesLogicRelaEN.con_TargetAnchor:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (a.targetAnchor == null) return -1;
          if (b.targetAnchor == null) return 1;
          return a.targetAnchor.localeCompare(b.targetAnchor);
        };
      case clsgs_KnowledgesLogicRelaEN.con_RelaTitle:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (a.relaTitle == null) return -1;
          if (b.relaTitle == null) return 1;
          return a.relaTitle.localeCompare(b.relaTitle);
        };
      case clsgs_KnowledgesLogicRelaEN.con_RelaTypeId:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (a.relaTypeId == null) return -1;
          if (b.relaTypeId == null) return 1;
          return a.relaTypeId.localeCompare(b.relaTypeId);
        };
      case clsgs_KnowledgesLogicRelaEN.con_CourseId:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          return a.courseId.localeCompare(b.courseId);
        };
      case clsgs_KnowledgesLogicRelaEN.con_UpdUser:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsgs_KnowledgesLogicRelaEN.con_UpdDate:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsgs_KnowledgesLogicRelaEN.con_Memo:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_KnowledgesLogicRela]中不存在!(in ${gs_KnowledgesLogicRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsgs_KnowledgesLogicRelaEN.con_mId:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          return b.mId - a.mId;
        };
      case clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdA:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          return b.courseKnowledgeIdA.localeCompare(a.courseKnowledgeIdA);
        };
      case clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeTitleA:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (b.courseKnowledgeTitleA == null) return -1;
          if (a.courseKnowledgeTitleA == null) return 1;
          return b.courseKnowledgeTitleA.localeCompare(a.courseKnowledgeTitleA);
        };
      case clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdB:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          return b.courseKnowledgeIdB.localeCompare(a.courseKnowledgeIdB);
        };
      case clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeTitleB:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (b.courseKnowledgeTitleB == null) return -1;
          if (a.courseKnowledgeTitleB == null) return 1;
          return b.courseKnowledgeTitleB.localeCompare(a.courseKnowledgeTitleB);
        };
      case clsgs_KnowledgesLogicRelaEN.con_KnowledgeGraphId:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (b.knowledgeGraphId == null) return -1;
          if (a.knowledgeGraphId == null) return 1;
          return b.knowledgeGraphId.localeCompare(a.knowledgeGraphId);
        };
      case clsgs_KnowledgesLogicRelaEN.con_SourceAnchor:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (b.sourceAnchor == null) return -1;
          if (a.sourceAnchor == null) return 1;
          return b.sourceAnchor.localeCompare(a.sourceAnchor);
        };
      case clsgs_KnowledgesLogicRelaEN.con_TargetAnchor:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (b.targetAnchor == null) return -1;
          if (a.targetAnchor == null) return 1;
          return b.targetAnchor.localeCompare(a.targetAnchor);
        };
      case clsgs_KnowledgesLogicRelaEN.con_RelaTitle:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (b.relaTitle == null) return -1;
          if (a.relaTitle == null) return 1;
          return b.relaTitle.localeCompare(a.relaTitle);
        };
      case clsgs_KnowledgesLogicRelaEN.con_RelaTypeId:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (b.relaTypeId == null) return -1;
          if (a.relaTypeId == null) return 1;
          return b.relaTypeId.localeCompare(a.relaTypeId);
        };
      case clsgs_KnowledgesLogicRelaEN.con_CourseId:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          return b.courseId.localeCompare(a.courseId);
        };
      case clsgs_KnowledgesLogicRelaEN.con_UpdUser:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsgs_KnowledgesLogicRelaEN.con_UpdDate:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsgs_KnowledgesLogicRelaEN.con_Memo:
        return (a: clsgs_KnowledgesLogicRelaEN, b: clsgs_KnowledgesLogicRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_KnowledgesLogicRela]中不存在!(in ${gs_KnowledgesLogicRela_ConstructorName}.${strThisFuncName})`;
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
export async function gs_KnowledgesLogicRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_KnowledgesLogicRelaEN.con_mId:
      return (obj: clsgs_KnowledgesLogicRelaEN) => {
        return obj.mId === value;
      };
    case clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdA:
      return (obj: clsgs_KnowledgesLogicRelaEN) => {
        return obj.courseKnowledgeIdA === value;
      };
    case clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeTitleA:
      return (obj: clsgs_KnowledgesLogicRelaEN) => {
        return obj.courseKnowledgeTitleA === value;
      };
    case clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdB:
      return (obj: clsgs_KnowledgesLogicRelaEN) => {
        return obj.courseKnowledgeIdB === value;
      };
    case clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeTitleB:
      return (obj: clsgs_KnowledgesLogicRelaEN) => {
        return obj.courseKnowledgeTitleB === value;
      };
    case clsgs_KnowledgesLogicRelaEN.con_KnowledgeGraphId:
      return (obj: clsgs_KnowledgesLogicRelaEN) => {
        return obj.knowledgeGraphId === value;
      };
    case clsgs_KnowledgesLogicRelaEN.con_SourceAnchor:
      return (obj: clsgs_KnowledgesLogicRelaEN) => {
        return obj.sourceAnchor === value;
      };
    case clsgs_KnowledgesLogicRelaEN.con_TargetAnchor:
      return (obj: clsgs_KnowledgesLogicRelaEN) => {
        return obj.targetAnchor === value;
      };
    case clsgs_KnowledgesLogicRelaEN.con_RelaTitle:
      return (obj: clsgs_KnowledgesLogicRelaEN) => {
        return obj.relaTitle === value;
      };
    case clsgs_KnowledgesLogicRelaEN.con_RelaTypeId:
      return (obj: clsgs_KnowledgesLogicRelaEN) => {
        return obj.relaTypeId === value;
      };
    case clsgs_KnowledgesLogicRelaEN.con_CourseId:
      return (obj: clsgs_KnowledgesLogicRelaEN) => {
        return obj.courseId === value;
      };
    case clsgs_KnowledgesLogicRelaEN.con_UpdUser:
      return (obj: clsgs_KnowledgesLogicRelaEN) => {
        return obj.updUser === value;
      };
    case clsgs_KnowledgesLogicRelaEN.con_UpdDate:
      return (obj: clsgs_KnowledgesLogicRelaEN) => {
        return obj.updDate === value;
      };
    case clsgs_KnowledgesLogicRelaEN.con_Memo:
      return (obj: clsgs_KnowledgesLogicRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[gs_KnowledgesLogicRela]中不存在!(in ${gs_KnowledgesLogicRela_ConstructorName}.${strThisFuncName})`;
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
export async function gs_KnowledgesLogicRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCourseIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCourseIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strCourseIdClassfy]不能为空!(In clsgs_KnowledgesLogicRelaWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsgs_KnowledgesLogicRelaWApi.funcKey)',
      strCourseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsgs_KnowledgesLogicRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrgs_KnowledgesLogicRela = await gs_KnowledgesLogicRela_GetObjLstCache(strCourseIdClassfy);
  if (arrgs_KnowledgesLogicRela == null) return [];
  let arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrgs_KnowledgesLogicRelaSel.length == 0) return [];
  return arrgs_KnowledgesLogicRelaSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_KnowledgesLogicRela_GetFirstIDAsync(
  strWhereCond: string,
): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsgs_KnowledgesLogicRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
      const objgs_KnowledgesLogicRela = gs_KnowledgesLogicRela_GetObjFromJsonObj(returnObj);
      return objgs_KnowledgesLogicRela;
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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetObjLstClientCache(strCourseId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsgs_KnowledgesLogicRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsgs_KnowledgesLogicRelaEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("CourseId='{0}'", strCourseId);
  }
  const strKey = Format('{0}_{1}', clsgs_KnowledgesLogicRelaEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsgs_KnowledgesLogicRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_KnowledgesLogicRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrgs_KnowledgesLogicRelaExObjLstCache: Array<clsgs_KnowledgesLogicRelaEN> =
      CacheHelper.Get(strKey);
    const arrgs_KnowledgesLogicRelaObjLstT = gs_KnowledgesLogicRela_GetObjLstByJSONObjLst(
      arrgs_KnowledgesLogicRelaExObjLstCache,
    );
    return arrgs_KnowledgesLogicRelaObjLstT;
  }
  try {
    const arrgs_KnowledgesLogicRelaExObjLst = await gs_KnowledgesLogicRela_GetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrgs_KnowledgesLogicRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_KnowledgesLogicRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_KnowledgesLogicRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetObjLstlocalStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsgs_KnowledgesLogicRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsgs_KnowledgesLogicRelaEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsgs_KnowledgesLogicRelaEN.con_CourseId, strCourseId);
  }
  const strKey = Format('{0}_{1}', clsgs_KnowledgesLogicRelaEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsgs_KnowledgesLogicRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_KnowledgesLogicRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_KnowledgesLogicRelaExObjLstCache: Array<clsgs_KnowledgesLogicRelaEN> =
      JSON.parse(strTempObjLst);
    const arrgs_KnowledgesLogicRelaObjLstT = gs_KnowledgesLogicRela_GetObjLstByJSONObjLst(
      arrgs_KnowledgesLogicRelaExObjLstCache,
    );
    return arrgs_KnowledgesLogicRelaObjLstT;
  }
  try {
    const arrgs_KnowledgesLogicRelaExObjLst = await gs_KnowledgesLogicRela_GetObjLstAsync(
      strWhereCond,
    );
    localStorage.setItem(strKey, JSON.stringify(arrgs_KnowledgesLogicRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_KnowledgesLogicRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_KnowledgesLogicRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetObjLstlocalStoragePureCache(strCourseId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsgs_KnowledgesLogicRelaEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_KnowledgesLogicRelaObjLstCache: Array<clsgs_KnowledgesLogicRelaEN> =
      JSON.parse(strTempObjLst);
    return arrgs_KnowledgesLogicRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function gs_KnowledgesLogicRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_KnowledgesLogicRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
          gs_KnowledgesLogicRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_KnowledgesLogicRela_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetObjLstsessionStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsgs_KnowledgesLogicRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsgs_KnowledgesLogicRelaEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsgs_KnowledgesLogicRelaEN.con_CourseId, strCourseId);
  }
  const strKey = Format('{0}_{1}', clsgs_KnowledgesLogicRelaEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clsgs_KnowledgesLogicRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_KnowledgesLogicRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_KnowledgesLogicRelaExObjLstCache: Array<clsgs_KnowledgesLogicRelaEN> =
      JSON.parse(strTempObjLst);
    const arrgs_KnowledgesLogicRelaObjLstT = gs_KnowledgesLogicRela_GetObjLstByJSONObjLst(
      arrgs_KnowledgesLogicRelaExObjLstCache,
    );
    return arrgs_KnowledgesLogicRelaObjLstT;
  }
  try {
    const arrgs_KnowledgesLogicRelaExObjLst = await gs_KnowledgesLogicRela_GetObjLstAsync(
      strWhereCond,
    );
    sessionStorage.setItem(strKey, JSON.stringify(arrgs_KnowledgesLogicRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_KnowledgesLogicRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_KnowledgesLogicRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetObjLstsessionStoragePureCache(strCourseId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsgs_KnowledgesLogicRelaEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_KnowledgesLogicRelaObjLstCache: Array<clsgs_KnowledgesLogicRelaEN> =
      JSON.parse(strTempObjLst);
    return arrgs_KnowledgesLogicRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_KnowledgesLogicRela_GetObjLstCache(
  strCourseId: string,
): Promise<Array<clsgs_KnowledgesLogicRelaEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clsgs_KnowledgesLogicRelaWApi.gs_KnowledgesLogicRela_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsgs_KnowledgesLogicRelaWApi.gs_KnowledgesLogicRela_GetObjLstCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrgs_KnowledgesLogicRelaObjLstCache;
  switch (clsgs_KnowledgesLogicRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_KnowledgesLogicRelaObjLstCache = await gs_KnowledgesLogicRela_GetObjLstsessionStorage(
        strCourseId,
      );
      break;
    case '03': //localStorage
      arrgs_KnowledgesLogicRelaObjLstCache = await gs_KnowledgesLogicRela_GetObjLstlocalStorage(
        strCourseId,
      );
      break;
    case '02': //ClientCache
      arrgs_KnowledgesLogicRelaObjLstCache = await gs_KnowledgesLogicRela_GetObjLstClientCache(
        strCourseId,
      );
      break;
    default:
      arrgs_KnowledgesLogicRelaObjLstCache = await gs_KnowledgesLogicRela_GetObjLstClientCache(
        strCourseId,
      );
      break;
  }
  return arrgs_KnowledgesLogicRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_KnowledgesLogicRela_GetObjLstPureCache(strCourseId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrgs_KnowledgesLogicRelaObjLstCache;
  switch (clsgs_KnowledgesLogicRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_KnowledgesLogicRelaObjLstCache =
        await gs_KnowledgesLogicRela_GetObjLstsessionStoragePureCache(strCourseId);
      break;
    case '03': //localStorage
      arrgs_KnowledgesLogicRelaObjLstCache =
        await gs_KnowledgesLogicRela_GetObjLstlocalStoragePureCache(strCourseId);
      break;
    case '02': //ClientCache
      arrgs_KnowledgesLogicRelaObjLstCache = null;
      break;
    default:
      arrgs_KnowledgesLogicRelaObjLstCache = null;
      break;
  }
  return arrgs_KnowledgesLogicRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_KnowledgesLogicRela_GetSubObjLstCache(
  objgs_KnowledgesLogicRelaCond: clsgs_KnowledgesLogicRelaEN,
  strCourseId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrgs_KnowledgesLogicRelaObjLstCache = await gs_KnowledgesLogicRela_GetObjLstCache(
    strCourseId,
  );
  let arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaObjLstCache;
  if (
    objgs_KnowledgesLogicRelaCond.sfFldComparisonOp == null ||
    objgs_KnowledgesLogicRelaCond.sfFldComparisonOp == ''
  )
    return arrgs_KnowledgesLogicRelaSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_KnowledgesLogicRelaCond.sfFldComparisonOp,
  );
  //console.log("clsgs_KnowledgesLogicRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_KnowledgesLogicRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_KnowledgesLogicRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_KnowledgesLogicRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_KnowledgesLogicRelaCond),
      gs_KnowledgesLogicRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_KnowledgesLogicRelaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function gs_KnowledgesLogicRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsgs_KnowledgesLogicRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
          gs_KnowledgesLogicRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_KnowledgesLogicRela_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strCourseId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrgs_KnowledgesLogicRelaObjLstCache = await gs_KnowledgesLogicRela_GetObjLstCache(
      strCourseId,
    );
    const arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrgs_KnowledgesLogicRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsgs_KnowledgesLogicRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
          gs_KnowledgesLogicRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_KnowledgesLogicRela_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsgs_KnowledgesLogicRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
          gs_KnowledgesLogicRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_KnowledgesLogicRela_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_KnowledgesLogicRelaEN>();
  const arrgs_KnowledgesLogicRelaObjLstCache = await gs_KnowledgesLogicRela_GetObjLstCache(
    strCourseId,
  );
  if (arrgs_KnowledgesLogicRelaObjLstCache.length == 0) return arrgs_KnowledgesLogicRelaObjLstCache;
  let arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_KnowledgesLogicRelaCond = new clsgs_KnowledgesLogicRelaEN();
  ObjectAssign(objgs_KnowledgesLogicRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_KnowledgesLogicRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_KnowledgesLogicRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_KnowledgesLogicRelaSel.length == 0) return arrgs_KnowledgesLogicRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.sort(
        gs_KnowledgesLogicRela_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.sort(objPagerPara.sortFun);
    }
    arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.slice(intStart, intEnd);
    return arrgs_KnowledgesLogicRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_KnowledgesLogicRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_KnowledgesLogicRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_KnowledgesLogicRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_KnowledgesLogicRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_KnowledgesLogicRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
          gs_KnowledgesLogicRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_KnowledgesLogicRela_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);
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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_Delgs_KnowledgesLogicRelasAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delgs_KnowledgesLogicRelasAsync';
  const strAction = 'Delgs_KnowledgesLogicRelas';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_Delgs_KnowledgesLogicRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delgs_KnowledgesLogicRelasByCondAsync';
  const strAction = 'Delgs_KnowledgesLogicRelasByCond';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
 * @param objgs_KnowledgesLogicRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_KnowledgesLogicRela_AddNewRecordAsync(
  objgs_KnowledgesLogicRelaEN: clsgs_KnowledgesLogicRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objgs_KnowledgesLogicRelaEN);
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_KnowledgesLogicRelaEN, config);
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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
 * @param objgs_KnowledgesLogicRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function gs_KnowledgesLogicRela_AddNewRecordWithReturnKeyAsync(
  objgs_KnowledgesLogicRelaEN: clsgs_KnowledgesLogicRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_KnowledgesLogicRelaEN, config);
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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
 * @param objgs_KnowledgesLogicRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function gs_KnowledgesLogicRela_UpdateRecordAsync(
  objgs_KnowledgesLogicRelaEN: clsgs_KnowledgesLogicRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objgs_KnowledgesLogicRelaEN.sfUpdFldSetStr === undefined ||
    objgs_KnowledgesLogicRelaEN.sfUpdFldSetStr === null ||
    objgs_KnowledgesLogicRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_KnowledgesLogicRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_KnowledgesLogicRelaEN, config);
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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
 * @param objgs_KnowledgesLogicRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_KnowledgesLogicRela_UpdateWithConditionAsync(
  objgs_KnowledgesLogicRelaEN: clsgs_KnowledgesLogicRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objgs_KnowledgesLogicRelaEN.sfUpdFldSetStr === undefined ||
    objgs_KnowledgesLogicRelaEN.sfUpdFldSetStr === null ||
    objgs_KnowledgesLogicRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_KnowledgesLogicRelaEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);
  objgs_KnowledgesLogicRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_KnowledgesLogicRelaEN, config);
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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_IsExistRecordCache(
  objgs_KnowledgesLogicRelaCond: clsgs_KnowledgesLogicRelaEN,
  strCourseId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrgs_KnowledgesLogicRelaObjLstCache = await gs_KnowledgesLogicRela_GetObjLstCache(
    strCourseId,
  );
  if (arrgs_KnowledgesLogicRelaObjLstCache == null) return false;
  let arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaObjLstCache;
  if (
    objgs_KnowledgesLogicRelaCond.sfFldComparisonOp == null ||
    objgs_KnowledgesLogicRelaCond.sfFldComparisonOp == ''
  )
    return arrgs_KnowledgesLogicRelaSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_KnowledgesLogicRelaCond.sfFldComparisonOp,
  );
  //console.log("clsgs_KnowledgesLogicRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_KnowledgesLogicRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_KnowledgesLogicRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_KnowledgesLogicRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objgs_KnowledgesLogicRelaCond),
      gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_IsExistCache(lngmId: number, strCourseId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrgs_KnowledgesLogicRelaObjLstCache = await gs_KnowledgesLogicRela_GetObjLstCache(
    strCourseId,
  );
  if (arrgs_KnowledgesLogicRelaObjLstCache == null) return false;
  try {
    const arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    if (arrgs_KnowledgesLogicRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
 * @param objgs_KnowledgesLogicRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function gs_KnowledgesLogicRela_GetRecCountByCondCache(
  objgs_KnowledgesLogicRelaCond: clsgs_KnowledgesLogicRelaEN,
  strCourseId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrgs_KnowledgesLogicRelaObjLstCache = await gs_KnowledgesLogicRela_GetObjLstCache(
    strCourseId,
  );
  if (arrgs_KnowledgesLogicRelaObjLstCache == null) return 0;
  let arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaObjLstCache;
  if (
    objgs_KnowledgesLogicRelaCond.sfFldComparisonOp == null ||
    objgs_KnowledgesLogicRelaCond.sfFldComparisonOp == ''
  )
    return arrgs_KnowledgesLogicRelaSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_KnowledgesLogicRelaCond.sfFldComparisonOp,
  );
  //console.log("clsgs_KnowledgesLogicRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_KnowledgesLogicRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_KnowledgesLogicRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_KnowledgesLogicRelaSel = arrgs_KnowledgesLogicRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_KnowledgesLogicRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_KnowledgesLogicRelaCond),
      gs_KnowledgesLogicRela_ConstructorName,
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
export async function gs_KnowledgesLogicRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gs_KnowledgesLogicRela_Controller, strAction);

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
        gs_KnowledgesLogicRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRela_ConstructorName,
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
export function gs_KnowledgesLogicRela_GetWebApiUrl(
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
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export function gs_KnowledgesLogicRela_ReFreshCache(strCourseId: string): void {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空!(In clsgs_KnowledgesLogicRelaWApi.clsgs_KnowledgesLogicRelaWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsgs_KnowledgesLogicRelaWApi.clsgs_KnowledgesLogicRelaWApi.ReFreshCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsgs_KnowledgesLogicRelaEN._CurrTabName, strCourseId);
  switch (clsgs_KnowledgesLogicRelaEN.CacheModeId) {
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
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function gs_KnowledgesLogicRela_ReFreshThisCache(strCourseId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsgs_KnowledgesLogicRelaEN._CurrTabName, strCourseId);
    switch (clsgs_KnowledgesLogicRelaEN.CacheModeId) {
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
export function gs_KnowledgesLogicRela_CheckPropertyNew(
  pobjgs_KnowledgesLogicRelaEN: clsgs_KnowledgesLogicRelaEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA) === true) {
    throw new Error(
      '(errid:Watl000411)字段[课程知识点AId]不能为空(In 知识点逻辑关系表)!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB) === true) {
    throw new Error(
      '(errid:Watl000411)字段[课程知识点BId]不能为空(In 知识点逻辑关系表)!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseId) === true ||
    pobjgs_KnowledgesLogicRelaEN.courseId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[课程Id]不能为空(In 知识点逻辑关系表)!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程知识点AId(courseKnowledgeIdA)]的长度不能超过8(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA)(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleA) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleA) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程知识点标题A(courseKnowledgeTitleA)]的长度不能超过100(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleA)(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程知识点BId(courseKnowledgeIdB)]的长度不能超过8(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB)(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleB) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleB) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程知识点标题B(courseKnowledgeTitleB)]的长度不能超过100(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleB)(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[知识点图Id(knowledgeGraphId)]的长度不能超过10(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId)(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.sourceAnchor) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.sourceAnchor) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[源锚点(sourceAnchor)]的长度不能超过50(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.sourceAnchor)(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.targetAnchor) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.targetAnchor) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[目标锚点(targetAnchor)]的长度不能超过50(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.targetAnchor)(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.relaTitle) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.relaTitle) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[关系标题(relaTitle)]的长度不能超过100(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.relaTitle)(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.relaTypeId) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.relaTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[关系类型Id(relaTypeId)]的长度不能超过2(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.relaTypeId)(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseId) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.courseId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.courseId)(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.updUser) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.updUser)(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.updDate) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.updDate)(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.memo) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.memo)(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjgs_KnowledgesLogicRelaEN.mId &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.mId &&
    tzDataType.isNumber(pobjgs_KnowledgesLogicRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjgs_KnowledgesLogicRelaEN.mId)], 非法,应该为数值型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程知识点AId(courseKnowledgeIdA)]的值:[$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleA) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleA &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleA) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程知识点标题A(courseKnowledgeTitleA)]的值:[$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleA)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程知识点BId(courseKnowledgeIdB)]的值:[$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleB) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleB &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleB) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程知识点标题B(courseKnowledgeTitleB)]的值:[$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleB)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[知识点图Id(knowledgeGraphId)]的值:[$(pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.sourceAnchor) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.sourceAnchor &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.sourceAnchor) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[源锚点(sourceAnchor)]的值:[$(pobjgs_KnowledgesLogicRelaEN.sourceAnchor)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.targetAnchor) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.targetAnchor &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.targetAnchor) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[目标锚点(targetAnchor)]的值:[$(pobjgs_KnowledgesLogicRelaEN.targetAnchor)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.relaTitle) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.relaTitle &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.relaTitle) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[关系标题(relaTitle)]的值:[$(pobjgs_KnowledgesLogicRelaEN.relaTitle)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.relaTypeId) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.relaTypeId &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.relaTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[关系类型Id(relaTypeId)]的值:[$(pobjgs_KnowledgesLogicRelaEN.relaTypeId)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseId) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.courseId &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.courseId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程Id(courseId)]的值:[$(pobjgs_KnowledgesLogicRelaEN.courseId)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.updUser) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.updUser &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_KnowledgesLogicRelaEN.updUser)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.updDate) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.updDate &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_KnowledgesLogicRelaEN.updDate)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.memo) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.memo &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_KnowledgesLogicRelaEN.memo)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_KnowledgesLogicRela_CheckProperty4Update(
  pobjgs_KnowledgesLogicRelaEN: clsgs_KnowledgesLogicRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程知识点AId(courseKnowledgeIdA)]的长度不能超过8(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA)(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleA) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleA) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程知识点标题A(courseKnowledgeTitleA)]的长度不能超过100(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleA)(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程知识点BId(courseKnowledgeIdB)]的长度不能超过8(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB)(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleB) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleB) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程知识点标题B(courseKnowledgeTitleB)]的长度不能超过100(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleB)(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[知识点图Id(knowledgeGraphId)]的长度不能超过10(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId)(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.sourceAnchor) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.sourceAnchor) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[源锚点(sourceAnchor)]的长度不能超过50(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.sourceAnchor)(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.targetAnchor) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.targetAnchor) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[目标锚点(targetAnchor)]的长度不能超过50(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.targetAnchor)(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.relaTitle) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.relaTitle) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[关系标题(relaTitle)]的长度不能超过100(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.relaTitle)(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.relaTypeId) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.relaTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[关系类型Id(relaTypeId)]的长度不能超过2(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.relaTypeId)(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseId) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.courseId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.courseId)(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.updUser) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.updUser)(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.updDate) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.updDate)(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.memo) == false &&
    GetStrLen(pobjgs_KnowledgesLogicRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!值:$(pobjgs_KnowledgesLogicRelaEN.memo)(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjgs_KnowledgesLogicRelaEN.mId &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.mId &&
    tzDataType.isNumber(pobjgs_KnowledgesLogicRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjgs_KnowledgesLogicRelaEN.mId)], 非法,应该为数值型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程知识点AId(courseKnowledgeIdA)]的值:[$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleA) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleA &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleA) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程知识点标题A(courseKnowledgeTitleA)]的值:[$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleA)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程知识点BId(courseKnowledgeIdB)]的值:[$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleB) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleB &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleB) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程知识点标题B(courseKnowledgeTitleB)]的值:[$(pobjgs_KnowledgesLogicRelaEN.courseKnowledgeTitleB)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[知识点图Id(knowledgeGraphId)]的值:[$(pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.sourceAnchor) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.sourceAnchor &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.sourceAnchor) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[源锚点(sourceAnchor)]的值:[$(pobjgs_KnowledgesLogicRelaEN.sourceAnchor)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.targetAnchor) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.targetAnchor &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.targetAnchor) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[目标锚点(targetAnchor)]的值:[$(pobjgs_KnowledgesLogicRelaEN.targetAnchor)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.relaTitle) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.relaTitle &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.relaTitle) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[关系标题(relaTitle)]的值:[$(pobjgs_KnowledgesLogicRelaEN.relaTitle)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.relaTypeId) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.relaTypeId &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.relaTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[关系类型Id(relaTypeId)]的值:[$(pobjgs_KnowledgesLogicRelaEN.relaTypeId)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.courseId) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.courseId &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.courseId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程Id(courseId)]的值:[$(pobjgs_KnowledgesLogicRelaEN.courseId)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.updUser) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.updUser &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_KnowledgesLogicRelaEN.updUser)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.updDate) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.updDate &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_KnowledgesLogicRelaEN.updDate)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_KnowledgesLogicRelaEN.memo) == false &&
    undefined !== pobjgs_KnowledgesLogicRelaEN.memo &&
    tzDataType.isString(pobjgs_KnowledgesLogicRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_KnowledgesLogicRelaEN.memo)], 非法,应该为字符型(In 知识点逻辑关系表(gs_KnowledgesLogicRela))!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjgs_KnowledgesLogicRelaEN.mId ||
    (pobjgs_KnowledgesLogicRelaEN.mId != null && pobjgs_KnowledgesLogicRelaEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 知识点逻辑关系表)!(clsgs_KnowledgesLogicRelaBL:CheckProperty4Update)',
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
export function gs_KnowledgesLogicRela_GetJSONStrByObj(
  pobjgs_KnowledgesLogicRelaEN: clsgs_KnowledgesLogicRelaEN,
): string {
  pobjgs_KnowledgesLogicRelaEN.sfUpdFldSetStr = pobjgs_KnowledgesLogicRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjgs_KnowledgesLogicRelaEN);
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
export function gs_KnowledgesLogicRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsgs_KnowledgesLogicRelaEN> {
  let arrgs_KnowledgesLogicRelaObjLst = new Array<clsgs_KnowledgesLogicRelaEN>();
  if (strJSON === '') {
    return arrgs_KnowledgesLogicRelaObjLst;
  }
  try {
    arrgs_KnowledgesLogicRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrgs_KnowledgesLogicRelaObjLst;
  }
  return arrgs_KnowledgesLogicRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_KnowledgesLogicRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function gs_KnowledgesLogicRela_GetObjLstByJSONObjLst(
  arrgs_KnowledgesLogicRelaObjLstS: Array<clsgs_KnowledgesLogicRelaEN>,
): Array<clsgs_KnowledgesLogicRelaEN> {
  const arrgs_KnowledgesLogicRelaObjLst = new Array<clsgs_KnowledgesLogicRelaEN>();
  for (const objInFor of arrgs_KnowledgesLogicRelaObjLstS) {
    const obj1 = gs_KnowledgesLogicRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrgs_KnowledgesLogicRelaObjLst.push(obj1);
  }
  return arrgs_KnowledgesLogicRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_KnowledgesLogicRela_GetObjByJSONStr(
  strJSON: string,
): clsgs_KnowledgesLogicRelaEN {
  let pobjgs_KnowledgesLogicRelaEN = new clsgs_KnowledgesLogicRelaEN();
  if (strJSON === '') {
    return pobjgs_KnowledgesLogicRelaEN;
  }
  try {
    pobjgs_KnowledgesLogicRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjgs_KnowledgesLogicRelaEN;
  }
  return pobjgs_KnowledgesLogicRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function gs_KnowledgesLogicRela_GetCombineCondition(
  objgs_KnowledgesLogicRelaCond: clsgs_KnowledgesLogicRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp,
      clsgs_KnowledgesLogicRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp[clsgs_KnowledgesLogicRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_KnowledgesLogicRelaEN.con_mId,
      objgs_KnowledgesLogicRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp,
      clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdA,
    ) == true
  ) {
    const strComparisonOpCourseKnowledgeIdA: string =
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp[
        clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdA
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdA,
      objgs_KnowledgesLogicRelaCond.courseKnowledgeIdA,
      strComparisonOpCourseKnowledgeIdA,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp,
      clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeTitleA,
    ) == true
  ) {
    const strComparisonOpCourseKnowledgeTitleA: string =
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp[
        clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeTitleA
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeTitleA,
      objgs_KnowledgesLogicRelaCond.courseKnowledgeTitleA,
      strComparisonOpCourseKnowledgeTitleA,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp,
      clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdB,
    ) == true
  ) {
    const strComparisonOpCourseKnowledgeIdB: string =
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp[
        clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdB
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdB,
      objgs_KnowledgesLogicRelaCond.courseKnowledgeIdB,
      strComparisonOpCourseKnowledgeIdB,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp,
      clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeTitleB,
    ) == true
  ) {
    const strComparisonOpCourseKnowledgeTitleB: string =
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp[
        clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeTitleB
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeTitleB,
      objgs_KnowledgesLogicRelaCond.courseKnowledgeTitleB,
      strComparisonOpCourseKnowledgeTitleB,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp,
      clsgs_KnowledgesLogicRelaEN.con_KnowledgeGraphId,
    ) == true
  ) {
    const strComparisonOpKnowledgeGraphId: string =
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp[
        clsgs_KnowledgesLogicRelaEN.con_KnowledgeGraphId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesLogicRelaEN.con_KnowledgeGraphId,
      objgs_KnowledgesLogicRelaCond.knowledgeGraphId,
      strComparisonOpKnowledgeGraphId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp,
      clsgs_KnowledgesLogicRelaEN.con_SourceAnchor,
    ) == true
  ) {
    const strComparisonOpSourceAnchor: string =
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp[
        clsgs_KnowledgesLogicRelaEN.con_SourceAnchor
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesLogicRelaEN.con_SourceAnchor,
      objgs_KnowledgesLogicRelaCond.sourceAnchor,
      strComparisonOpSourceAnchor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp,
      clsgs_KnowledgesLogicRelaEN.con_TargetAnchor,
    ) == true
  ) {
    const strComparisonOpTargetAnchor: string =
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp[
        clsgs_KnowledgesLogicRelaEN.con_TargetAnchor
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesLogicRelaEN.con_TargetAnchor,
      objgs_KnowledgesLogicRelaCond.targetAnchor,
      strComparisonOpTargetAnchor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp,
      clsgs_KnowledgesLogicRelaEN.con_RelaTitle,
    ) == true
  ) {
    const strComparisonOpRelaTitle: string =
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp[clsgs_KnowledgesLogicRelaEN.con_RelaTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesLogicRelaEN.con_RelaTitle,
      objgs_KnowledgesLogicRelaCond.relaTitle,
      strComparisonOpRelaTitle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp,
      clsgs_KnowledgesLogicRelaEN.con_RelaTypeId,
    ) == true
  ) {
    const strComparisonOpRelaTypeId: string =
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp[clsgs_KnowledgesLogicRelaEN.con_RelaTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesLogicRelaEN.con_RelaTypeId,
      objgs_KnowledgesLogicRelaCond.relaTypeId,
      strComparisonOpRelaTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp,
      clsgs_KnowledgesLogicRelaEN.con_CourseId,
    ) == true
  ) {
    const strComparisonOpCourseId: string =
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp[clsgs_KnowledgesLogicRelaEN.con_CourseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesLogicRelaEN.con_CourseId,
      objgs_KnowledgesLogicRelaCond.courseId,
      strComparisonOpCourseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp,
      clsgs_KnowledgesLogicRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp[clsgs_KnowledgesLogicRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesLogicRelaEN.con_UpdUser,
      objgs_KnowledgesLogicRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp,
      clsgs_KnowledgesLogicRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp[clsgs_KnowledgesLogicRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesLogicRelaEN.con_UpdDate,
      objgs_KnowledgesLogicRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp,
      clsgs_KnowledgesLogicRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objgs_KnowledgesLogicRelaCond.dicFldComparisonOp[clsgs_KnowledgesLogicRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_KnowledgesLogicRelaEN.con_Memo,
      objgs_KnowledgesLogicRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_KnowledgesLogicRela(知识点逻辑关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strKnowledgeGraphId: 知识点图Id(要求唯一的字段)
 * @param strCourseKnowledgeIdA: 课程知识点AId(要求唯一的字段)
 * @param strCourseKnowledgeIdB: 课程知识点BId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_KnowledgesLogicRela_GetUniCondStr(
  objgs_KnowledgesLogicRelaEN: clsgs_KnowledgesLogicRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and KnowledgeGraphId = '{0}'",
    objgs_KnowledgesLogicRelaEN.knowledgeGraphId,
  );
  strWhereCond += Format(
    " and CourseKnowledgeIdA = '{0}'",
    objgs_KnowledgesLogicRelaEN.courseKnowledgeIdA,
  );
  strWhereCond += Format(
    " and CourseKnowledgeIdB = '{0}'",
    objgs_KnowledgesLogicRelaEN.courseKnowledgeIdB,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_KnowledgesLogicRela(知识点逻辑关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strKnowledgeGraphId: 知识点图Id(要求唯一的字段)
 * @param strCourseKnowledgeIdA: 课程知识点AId(要求唯一的字段)
 * @param strCourseKnowledgeIdB: 课程知识点BId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_KnowledgesLogicRela_GetUniCondStr4Update(
  objgs_KnowledgesLogicRelaEN: clsgs_KnowledgesLogicRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objgs_KnowledgesLogicRelaEN.mId);
  strWhereCond += Format(
    " and KnowledgeGraphId = '{0}'",
    objgs_KnowledgesLogicRelaEN.knowledgeGraphId,
  );
  strWhereCond += Format(
    " and CourseKnowledgeIdA = '{0}'",
    objgs_KnowledgesLogicRelaEN.courseKnowledgeIdA,
  );
  strWhereCond += Format(
    " and CourseKnowledgeIdB = '{0}'",
    objgs_KnowledgesLogicRelaEN.courseKnowledgeIdB,
  );
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_KnowledgesLogicRelaENS:源对象
 * @param objgs_KnowledgesLogicRelaENT:目标对象
 */
export function gs_KnowledgesLogicRela_CopyObjTo(
  objgs_KnowledgesLogicRelaENS: clsgs_KnowledgesLogicRelaEN,
  objgs_KnowledgesLogicRelaENT: clsgs_KnowledgesLogicRelaEN,
): void {
  objgs_KnowledgesLogicRelaENT.mId = objgs_KnowledgesLogicRelaENS.mId; //mId
  objgs_KnowledgesLogicRelaENT.courseKnowledgeIdA = objgs_KnowledgesLogicRelaENS.courseKnowledgeIdA; //课程知识点AId
  objgs_KnowledgesLogicRelaENT.courseKnowledgeTitleA =
    objgs_KnowledgesLogicRelaENS.courseKnowledgeTitleA; //课程知识点标题A
  objgs_KnowledgesLogicRelaENT.courseKnowledgeIdB = objgs_KnowledgesLogicRelaENS.courseKnowledgeIdB; //课程知识点BId
  objgs_KnowledgesLogicRelaENT.courseKnowledgeTitleB =
    objgs_KnowledgesLogicRelaENS.courseKnowledgeTitleB; //课程知识点标题B
  objgs_KnowledgesLogicRelaENT.knowledgeGraphId = objgs_KnowledgesLogicRelaENS.knowledgeGraphId; //知识点图Id
  objgs_KnowledgesLogicRelaENT.sourceAnchor = objgs_KnowledgesLogicRelaENS.sourceAnchor; //源锚点
  objgs_KnowledgesLogicRelaENT.targetAnchor = objgs_KnowledgesLogicRelaENS.targetAnchor; //目标锚点
  objgs_KnowledgesLogicRelaENT.relaTitle = objgs_KnowledgesLogicRelaENS.relaTitle; //关系标题
  objgs_KnowledgesLogicRelaENT.relaTypeId = objgs_KnowledgesLogicRelaENS.relaTypeId; //关系类型Id
  objgs_KnowledgesLogicRelaENT.courseId = objgs_KnowledgesLogicRelaENS.courseId; //课程Id
  objgs_KnowledgesLogicRelaENT.updUser = objgs_KnowledgesLogicRelaENS.updUser; //修改人
  objgs_KnowledgesLogicRelaENT.updDate = objgs_KnowledgesLogicRelaENS.updDate; //修改日期
  objgs_KnowledgesLogicRelaENT.memo = objgs_KnowledgesLogicRelaENS.memo; //备注
  objgs_KnowledgesLogicRelaENT.sfUpdFldSetStr = objgs_KnowledgesLogicRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_KnowledgesLogicRelaENS:源对象
 * @param objgs_KnowledgesLogicRelaENT:目标对象
 */
export function gs_KnowledgesLogicRela_GetObjFromJsonObj(
  objgs_KnowledgesLogicRelaENS: clsgs_KnowledgesLogicRelaEN,
): clsgs_KnowledgesLogicRelaEN {
  const objgs_KnowledgesLogicRelaENT: clsgs_KnowledgesLogicRelaEN =
    new clsgs_KnowledgesLogicRelaEN();
  ObjectAssign(objgs_KnowledgesLogicRelaENT, objgs_KnowledgesLogicRelaENS);
  return objgs_KnowledgesLogicRelaENT;
}
