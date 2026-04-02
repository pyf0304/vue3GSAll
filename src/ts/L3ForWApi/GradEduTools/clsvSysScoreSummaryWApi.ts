/**
 * 类名:clsvSysScoreSummaryWApi
 * 表名:vSysScoreSummary(01120627)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:15
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v分数汇总视图(vSysScoreSummary)
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
import { clsvSysScoreSummaryEN } from '@/ts/L0Entity/GradEduTools/clsvSysScoreSummaryEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vSysScoreSummary_Controller = 'vSysScoreSummaryApi';
export const vSysScoreSummary_ConstructorName = 'vSysScoreSummary';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function vSysScoreSummary_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsvSysScoreSummaryEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvSysScoreSummaryWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(vSysScoreSummary_Controller, strAction);

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
      const objvSysScoreSummary = vSysScoreSummary_GetObjFromJsonObj(returnObj);
      return objvSysScoreSummary;
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
        vSysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_GetObjBymIdCache(
  lngmId: number,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvSysScoreSummaryWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrvSysScoreSummaryObjLstCache = await vSysScoreSummary_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrvSysScoreSummarySel = arrvSysScoreSummaryObjLstCache.filter((x) => x.mId == lngmId);
    let objvSysScoreSummary: clsvSysScoreSummaryEN;
    if (arrvSysScoreSummarySel.length > 0) {
      objvSysScoreSummary = arrvSysScoreSummarySel[0];
      return objvSysScoreSummary;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvSysScoreSummaryConst = await vSysScoreSummary_GetObjBymIdAsync(lngmId);
        if (objvSysScoreSummaryConst != null) {
          vSysScoreSummary_ReFreshThisCache(strIdCurrEduCls);
          return objvSysScoreSummaryConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsvSysScoreSummaryWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvSysScoreSummaryEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvSysScoreSummaryCache: clsvSysScoreSummaryEN = JSON.parse(strTempObj);
    return objvSysScoreSummaryCache;
  }
  try {
    const objvSysScoreSummary = await vSysScoreSummary_GetObjBymIdAsync(lngmId);
    if (objvSysScoreSummary != null) {
      localStorage.setItem(strKey, JSON.stringify(objvSysScoreSummary));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvSysScoreSummary;
    }
    return objvSysScoreSummary;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsvSysScoreSummaryWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvSysScoreSummaryWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvSysScoreSummaryEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvSysScoreSummaryEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvSysScoreSummaryEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objvSysScoreSummary = await vSysScoreSummary_GetObjBymIdCache(
    lngmId,
    strIdCurrEduClsClassfy,
  );
  if (objvSysScoreSummary == null) return '';
  if (objvSysScoreSummary.GetFldValue(strOutFldName) == null) return '';
  return objvSysScoreSummary.GetFldValue(strOutFldName).toString();
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
export function vSysScoreSummary_SortFunDefa(
  a: clsvSysScoreSummaryEN,
  b: clsvSysScoreSummaryEN,
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
export function vSysScoreSummary_SortFunDefa2Fld(
  a: clsvSysScoreSummaryEN,
  b: clsvSysScoreSummaryEN,
): number {
  if (a.userId == b.userId) return a.schoolYear.localeCompare(b.schoolYear);
  else return a.userId.localeCompare(b.userId);
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
export function vSysScoreSummary_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvSysScoreSummaryEN.con_mId:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          return a.mId - b.mId;
        };
      case clsvSysScoreSummaryEN.con_UserId:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsvSysScoreSummaryEN.con_SchoolYear:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.schoolYear == null) return -1;
          if (b.schoolYear == null) return 1;
          return a.schoolYear.localeCompare(b.schoolYear);
        };
      case clsvSysScoreSummaryEN.con_UpdDate:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvSysScoreSummaryEN.con_Memo:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvSysScoreSummaryEN.con_UserName:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.userName == null) return -1;
          if (b.userName == null) return 1;
          return a.userName.localeCompare(b.userName);
        };
      case clsvSysScoreSummaryEN.con_IdXzCollege:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.idXzCollege == null) return -1;
          if (b.idXzCollege == null) return 1;
          return a.idXzCollege.localeCompare(b.idXzCollege);
        };
      case clsvSysScoreSummaryEN.con_CollegeName:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.collegeName == null) return -1;
          if (b.collegeName == null) return 1;
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsvSysScoreSummaryEN.con_IdXzMajor:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.idXzMajor == null) return -1;
          if (b.idXzMajor == null) return 1;
          return a.idXzMajor.localeCompare(b.idXzMajor);
        };
      case clsvSysScoreSummaryEN.con_MajorName:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.majorName == null) return -1;
          if (b.majorName == null) return 1;
          return a.majorName.localeCompare(b.majorName);
        };
      case clsvSysScoreSummaryEN.con_IdGradeBase:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.idGradeBase == null) return -1;
          if (b.idGradeBase == null) return 1;
          return a.idGradeBase.localeCompare(b.idGradeBase);
        };
      case clsvSysScoreSummaryEN.con_GradeBaseName:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.gradeBaseName == null) return -1;
          if (b.gradeBaseName == null) return 1;
          return a.gradeBaseName.localeCompare(b.gradeBaseName);
        };
      case clsvSysScoreSummaryEN.con_OnlyId:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.onlyId == null) return -1;
          if (b.onlyId == null) return 1;
          return a.onlyId.localeCompare(b.onlyId);
        };
      case clsvSysScoreSummaryEN.con_ScoreTypeId:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.scoreTypeId == null) return -1;
          if (b.scoreTypeId == null) return 1;
          return a.scoreTypeId.localeCompare(b.scoreTypeId);
        };
      case clsvSysScoreSummaryEN.con_ScoreTypeName:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.scoreTypeName == null) return -1;
          if (b.scoreTypeName == null) return 1;
          return a.scoreTypeName.localeCompare(b.scoreTypeName);
        };
      case clsvSysScoreSummaryEN.con_UpdUser:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvSysScoreSummaryEN.con_Score:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          return a.score - b.score;
        };
      case clsvSysScoreSummaryEN.con_IdCurrEduCls:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvSysScoreSummaryEN.con_EduClsName:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (a.eduClsName == null) return -1;
          if (b.eduClsName == null) return 1;
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsvSysScoreSummaryEN.con_IsSubmit:
        return (a: clsvSysScoreSummaryEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vSysScoreSummary]中不存在!(in ${vSysScoreSummary_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvSysScoreSummaryEN.con_mId:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          return b.mId - a.mId;
        };
      case clsvSysScoreSummaryEN.con_UserId:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsvSysScoreSummaryEN.con_SchoolYear:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.schoolYear == null) return -1;
          if (a.schoolYear == null) return 1;
          return b.schoolYear.localeCompare(a.schoolYear);
        };
      case clsvSysScoreSummaryEN.con_UpdDate:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvSysScoreSummaryEN.con_Memo:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvSysScoreSummaryEN.con_UserName:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.userName == null) return -1;
          if (a.userName == null) return 1;
          return b.userName.localeCompare(a.userName);
        };
      case clsvSysScoreSummaryEN.con_IdXzCollege:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.idXzCollege == null) return -1;
          if (a.idXzCollege == null) return 1;
          return b.idXzCollege.localeCompare(a.idXzCollege);
        };
      case clsvSysScoreSummaryEN.con_CollegeName:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.collegeName == null) return -1;
          if (a.collegeName == null) return 1;
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsvSysScoreSummaryEN.con_IdXzMajor:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.idXzMajor == null) return -1;
          if (a.idXzMajor == null) return 1;
          return b.idXzMajor.localeCompare(a.idXzMajor);
        };
      case clsvSysScoreSummaryEN.con_MajorName:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.majorName == null) return -1;
          if (a.majorName == null) return 1;
          return b.majorName.localeCompare(a.majorName);
        };
      case clsvSysScoreSummaryEN.con_IdGradeBase:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.idGradeBase == null) return -1;
          if (a.idGradeBase == null) return 1;
          return b.idGradeBase.localeCompare(a.idGradeBase);
        };
      case clsvSysScoreSummaryEN.con_GradeBaseName:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.gradeBaseName == null) return -1;
          if (a.gradeBaseName == null) return 1;
          return b.gradeBaseName.localeCompare(a.gradeBaseName);
        };
      case clsvSysScoreSummaryEN.con_OnlyId:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.onlyId == null) return -1;
          if (a.onlyId == null) return 1;
          return b.onlyId.localeCompare(a.onlyId);
        };
      case clsvSysScoreSummaryEN.con_ScoreTypeId:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.scoreTypeId == null) return -1;
          if (a.scoreTypeId == null) return 1;
          return b.scoreTypeId.localeCompare(a.scoreTypeId);
        };
      case clsvSysScoreSummaryEN.con_ScoreTypeName:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.scoreTypeName == null) return -1;
          if (a.scoreTypeName == null) return 1;
          return b.scoreTypeName.localeCompare(a.scoreTypeName);
        };
      case clsvSysScoreSummaryEN.con_UpdUser:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvSysScoreSummaryEN.con_Score:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          return b.score - a.score;
        };
      case clsvSysScoreSummaryEN.con_IdCurrEduCls:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvSysScoreSummaryEN.con_EduClsName:
        return (a: clsvSysScoreSummaryEN, b: clsvSysScoreSummaryEN) => {
          if (b.eduClsName == null) return -1;
          if (a.eduClsName == null) return 1;
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsvSysScoreSummaryEN.con_IsSubmit:
        return (b: clsvSysScoreSummaryEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vSysScoreSummary]中不存在!(in ${vSysScoreSummary_ConstructorName}.${strThisFuncName})`;
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
export async function vSysScoreSummary_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvSysScoreSummaryEN.con_mId:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.mId === value;
      };
    case clsvSysScoreSummaryEN.con_UserId:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.userId === value;
      };
    case clsvSysScoreSummaryEN.con_SchoolYear:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.schoolYear === value;
      };
    case clsvSysScoreSummaryEN.con_UpdDate:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.updDate === value;
      };
    case clsvSysScoreSummaryEN.con_Memo:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.memo === value;
      };
    case clsvSysScoreSummaryEN.con_UserName:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.userName === value;
      };
    case clsvSysScoreSummaryEN.con_IdXzCollege:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.idXzCollege === value;
      };
    case clsvSysScoreSummaryEN.con_CollegeName:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.collegeName === value;
      };
    case clsvSysScoreSummaryEN.con_IdXzMajor:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.idXzMajor === value;
      };
    case clsvSysScoreSummaryEN.con_MajorName:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.majorName === value;
      };
    case clsvSysScoreSummaryEN.con_IdGradeBase:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.idGradeBase === value;
      };
    case clsvSysScoreSummaryEN.con_GradeBaseName:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.gradeBaseName === value;
      };
    case clsvSysScoreSummaryEN.con_OnlyId:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.onlyId === value;
      };
    case clsvSysScoreSummaryEN.con_ScoreTypeId:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.scoreTypeId === value;
      };
    case clsvSysScoreSummaryEN.con_ScoreTypeName:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.scoreTypeName === value;
      };
    case clsvSysScoreSummaryEN.con_UpdUser:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.updUser === value;
      };
    case clsvSysScoreSummaryEN.con_Score:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.score === value;
      };
    case clsvSysScoreSummaryEN.con_IdCurrEduCls:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvSysScoreSummaryEN.con_EduClsName:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.eduClsName === value;
      };
    case clsvSysScoreSummaryEN.con_IsSubmit:
      return (obj: clsvSysScoreSummaryEN) => {
        return obj.isSubmit === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vSysScoreSummary]中不存在!(in ${vSysScoreSummary_ConstructorName}.${strThisFuncName})`;
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
export async function vSysScoreSummary_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsvSysScoreSummaryWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvSysScoreSummaryWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvSysScoreSummaryEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvSysScoreSummary = await vSysScoreSummary_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrvSysScoreSummary == null) return [];
  let arrvSysScoreSummarySel = arrvSysScoreSummary;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvSysScoreSummarySel.length == 0) return [];
  return arrvSysScoreSummarySel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vSysScoreSummary_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vSysScoreSummary_Controller, strAction);

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
        vSysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vSysScoreSummary_Controller, strAction);

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
        vSysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvSysScoreSummaryEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vSysScoreSummary_Controller, strAction);

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
      const objvSysScoreSummary = vSysScoreSummary_GetObjFromJsonObj(returnObj);
      return objvSysScoreSummary;
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
        vSysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvSysScoreSummaryEN.WhereFormat) == false) {
    strWhereCond = Format(clsvSysScoreSummaryEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvSysScoreSummaryEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvSysScoreSummaryEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSysScoreSummaryEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvSysScoreSummaryExObjLstCache: Array<clsvSysScoreSummaryEN> = CacheHelper.Get(strKey);
    const arrvSysScoreSummaryObjLstT = vSysScoreSummary_GetObjLstByJSONObjLst(
      arrvSysScoreSummaryExObjLstCache,
    );
    return arrvSysScoreSummaryObjLstT;
  }
  try {
    const arrvSysScoreSummaryExObjLst = await vSysScoreSummary_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvSysScoreSummaryExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSysScoreSummaryExObjLst.length,
    );
    console.log(strInfo);
    return arrvSysScoreSummaryExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvSysScoreSummaryEN.WhereFormat) == false) {
    strWhereCond = Format(clsvSysScoreSummaryEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvSysScoreSummaryEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvSysScoreSummaryEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvSysScoreSummaryEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSysScoreSummaryEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvSysScoreSummaryExObjLstCache: Array<clsvSysScoreSummaryEN> =
      JSON.parse(strTempObjLst);
    const arrvSysScoreSummaryObjLstT = vSysScoreSummary_GetObjLstByJSONObjLst(
      arrvSysScoreSummaryExObjLstCache,
    );
    return arrvSysScoreSummaryObjLstT;
  }
  try {
    const arrvSysScoreSummaryExObjLst = await vSysScoreSummary_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvSysScoreSummaryExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSysScoreSummaryExObjLst.length,
    );
    console.log(strInfo);
    return arrvSysScoreSummaryExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvSysScoreSummaryEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvSysScoreSummaryObjLstCache: Array<clsvSysScoreSummaryEN> = JSON.parse(strTempObjLst);
    return arrvSysScoreSummaryObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vSysScoreSummary_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvSysScoreSummaryEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vSysScoreSummary_Controller, strAction);

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
          vSysScoreSummary_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysScoreSummary_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvSysScoreSummaryEN.WhereFormat) == false) {
    strWhereCond = Format(clsvSysScoreSummaryEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvSysScoreSummaryEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvSysScoreSummaryEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvSysScoreSummaryEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSysScoreSummaryEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvSysScoreSummaryExObjLstCache: Array<clsvSysScoreSummaryEN> =
      JSON.parse(strTempObjLst);
    const arrvSysScoreSummaryObjLstT = vSysScoreSummary_GetObjLstByJSONObjLst(
      arrvSysScoreSummaryExObjLstCache,
    );
    return arrvSysScoreSummaryObjLstT;
  }
  try {
    const arrvSysScoreSummaryExObjLst = await vSysScoreSummary_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvSysScoreSummaryExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSysScoreSummaryExObjLst.length,
    );
    console.log(strInfo);
    return arrvSysScoreSummaryExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvSysScoreSummaryEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvSysScoreSummaryObjLstCache: Array<clsvSysScoreSummaryEN> = JSON.parse(strTempObjLst);
    return arrvSysScoreSummaryObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vSysScoreSummary_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsvSysScoreSummaryEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsvSysScoreSummaryWApi.vSysScoreSummary_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvSysScoreSummaryWApi.vSysScoreSummary_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvSysScoreSummaryObjLstCache;
  switch (clsvSysScoreSummaryEN.CacheModeId) {
    case '04': //sessionStorage
      arrvSysScoreSummaryObjLstCache = await vSysScoreSummary_GetObjLstsessionStorage(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrvSysScoreSummaryObjLstCache = await vSysScoreSummary_GetObjLstlocalStorage(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrvSysScoreSummaryObjLstCache = await vSysScoreSummary_GetObjLstClientCache(strIdCurrEduCls);
      break;
    default:
      arrvSysScoreSummaryObjLstCache = await vSysScoreSummary_GetObjLstClientCache(strIdCurrEduCls);
      break;
  }
  return arrvSysScoreSummaryObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vSysScoreSummary_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvSysScoreSummaryObjLstCache;
  switch (clsvSysScoreSummaryEN.CacheModeId) {
    case '04': //sessionStorage
      arrvSysScoreSummaryObjLstCache = await vSysScoreSummary_GetObjLstsessionStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrvSysScoreSummaryObjLstCache = await vSysScoreSummary_GetObjLstlocalStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrvSysScoreSummaryObjLstCache = null;
      break;
    default:
      arrvSysScoreSummaryObjLstCache = null;
      break;
  }
  return arrvSysScoreSummaryObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vSysScoreSummary_GetSubObjLstCache(
  objvSysScoreSummaryCond: clsvSysScoreSummaryEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvSysScoreSummaryObjLstCache = await vSysScoreSummary_GetObjLstCache(strIdCurrEduCls);
  let arrvSysScoreSummarySel = arrvSysScoreSummaryObjLstCache;
  if (
    objvSysScoreSummaryCond.sfFldComparisonOp == null ||
    objvSysScoreSummaryCond.sfFldComparisonOp == ''
  )
    return arrvSysScoreSummarySel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSysScoreSummaryCond.sfFldComparisonOp,
  );
  //console.log("clsvSysScoreSummaryWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSysScoreSummaryCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysScoreSummaryCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvSysScoreSummarySel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvSysScoreSummaryCond),
      vSysScoreSummary_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvSysScoreSummaryEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function vSysScoreSummary_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsvSysScoreSummaryEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(vSysScoreSummary_Controller, strAction);

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
          vSysScoreSummary_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysScoreSummary_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrvSysScoreSummaryObjLstCache = await vSysScoreSummary_GetObjLstCache(strIdCurrEduCls);
    const arrvSysScoreSummarySel = arrvSysScoreSummaryObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrvSysScoreSummarySel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvSysScoreSummaryEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vSysScoreSummary_Controller, strAction);

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
          vSysScoreSummary_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysScoreSummary_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvSysScoreSummaryEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vSysScoreSummary_Controller, strAction);

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
          vSysScoreSummary_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysScoreSummary_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvSysScoreSummaryEN>();
  const arrvSysScoreSummaryObjLstCache = await vSysScoreSummary_GetObjLstCache(strIdCurrEduCls);
  if (arrvSysScoreSummaryObjLstCache.length == 0) return arrvSysScoreSummaryObjLstCache;
  let arrvSysScoreSummarySel = arrvSysScoreSummaryObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvSysScoreSummaryCond = new clsvSysScoreSummaryEN();
  ObjectAssign(objvSysScoreSummaryCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvSysScoreSummaryWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysScoreSummaryCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvSysScoreSummarySel.length == 0) return arrvSysScoreSummarySel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvSysScoreSummarySel = arrvSysScoreSummarySel.sort(
        vSysScoreSummary_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvSysScoreSummarySel = arrvSysScoreSummarySel.sort(objPagerPara.sortFun);
    }
    arrvSysScoreSummarySel = arrvSysScoreSummarySel.slice(intStart, intEnd);
    return arrvSysScoreSummarySel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vSysScoreSummary_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvSysScoreSummaryEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vSysScoreSummary_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvSysScoreSummaryEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvSysScoreSummaryEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vSysScoreSummary_Controller, strAction);

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
          vSysScoreSummary_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysScoreSummary_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_IsExistRecordCache(
  objvSysScoreSummaryCond: clsvSysScoreSummaryEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvSysScoreSummaryObjLstCache = await vSysScoreSummary_GetObjLstCache(strIdCurrEduCls);
  if (arrvSysScoreSummaryObjLstCache == null) return false;
  let arrvSysScoreSummarySel = arrvSysScoreSummaryObjLstCache;
  if (
    objvSysScoreSummaryCond.sfFldComparisonOp == null ||
    objvSysScoreSummaryCond.sfFldComparisonOp == ''
  )
    return arrvSysScoreSummarySel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSysScoreSummaryCond.sfFldComparisonOp,
  );
  //console.log("clsvSysScoreSummaryWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSysScoreSummaryCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysScoreSummaryCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvSysScoreSummarySel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvSysScoreSummaryCond),
      vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vSysScoreSummary_Controller, strAction);

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
        vSysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_IsExistCache(lngmId: number, strIdCurrEduCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvSysScoreSummaryObjLstCache = await vSysScoreSummary_GetObjLstCache(strIdCurrEduCls);
  if (arrvSysScoreSummaryObjLstCache == null) return false;
  try {
    const arrvSysScoreSummarySel = arrvSysScoreSummaryObjLstCache.filter((x) => x.mId == lngmId);
    if (arrvSysScoreSummarySel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vSysScoreSummary_Controller, strAction);

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
        vSysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreSummary_ConstructorName,
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
export async function vSysScoreSummary_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vSysScoreSummary_Controller, strAction);

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
        vSysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreSummary_ConstructorName,
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
 * @param objvSysScoreSummaryCond:条件对象
 * @returns 对象列表记录数
 */
export async function vSysScoreSummary_GetRecCountByCondCache(
  objvSysScoreSummaryCond: clsvSysScoreSummaryEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvSysScoreSummaryObjLstCache = await vSysScoreSummary_GetObjLstCache(strIdCurrEduCls);
  if (arrvSysScoreSummaryObjLstCache == null) return 0;
  let arrvSysScoreSummarySel = arrvSysScoreSummaryObjLstCache;
  if (
    objvSysScoreSummaryCond.sfFldComparisonOp == null ||
    objvSysScoreSummaryCond.sfFldComparisonOp == ''
  )
    return arrvSysScoreSummarySel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSysScoreSummaryCond.sfFldComparisonOp,
  );
  //console.log("clsvSysScoreSummaryWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSysScoreSummaryCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysScoreSummaryCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvSysScoreSummarySel = arrvSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvSysScoreSummarySel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvSysScoreSummaryCond),
      vSysScoreSummary_ConstructorName,
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
export function vSysScoreSummary_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vSysScoreSummary_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvSysScoreSummaryEN._CurrTabName, strIdCurrEduCls);
    switch (clsvSysScoreSummaryEN.CacheModeId) {
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
export function vSysScoreSummary_GetJSONStrByObj(
  pobjvSysScoreSummaryEN: clsvSysScoreSummaryEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvSysScoreSummaryEN);
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
export function vSysScoreSummary_GetObjLstByJSONStr(strJSON: string): Array<clsvSysScoreSummaryEN> {
  let arrvSysScoreSummaryObjLst = new Array<clsvSysScoreSummaryEN>();
  if (strJSON === '') {
    return arrvSysScoreSummaryObjLst;
  }
  try {
    arrvSysScoreSummaryObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvSysScoreSummaryObjLst;
  }
  return arrvSysScoreSummaryObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvSysScoreSummaryObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vSysScoreSummary_GetObjLstByJSONObjLst(
  arrvSysScoreSummaryObjLstS: Array<clsvSysScoreSummaryEN>,
): Array<clsvSysScoreSummaryEN> {
  const arrvSysScoreSummaryObjLst = new Array<clsvSysScoreSummaryEN>();
  for (const objInFor of arrvSysScoreSummaryObjLstS) {
    const obj1 = vSysScoreSummary_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvSysScoreSummaryObjLst.push(obj1);
  }
  return arrvSysScoreSummaryObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vSysScoreSummary_GetObjByJSONStr(strJSON: string): clsvSysScoreSummaryEN {
  let pobjvSysScoreSummaryEN = new clsvSysScoreSummaryEN();
  if (strJSON === '') {
    return pobjvSysScoreSummaryEN;
  }
  try {
    pobjvSysScoreSummaryEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvSysScoreSummaryEN;
  }
  return pobjvSysScoreSummaryEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vSysScoreSummary_GetCombineCondition(
  objvSysScoreSummaryCond: clsvSysScoreSummaryEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvSysScoreSummaryEN.con_mId,
      objvSysScoreSummaryCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_UserId,
      objvSysScoreSummaryCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_SchoolYear,
    ) == true
  ) {
    const strComparisonOpSchoolYear: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_SchoolYear];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_SchoolYear,
      objvSysScoreSummaryCond.schoolYear,
      strComparisonOpSchoolYear,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_UpdDate,
      objvSysScoreSummaryCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_Memo,
      objvSysScoreSummaryCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_UserName,
      objvSysScoreSummaryCond.userName,
      strComparisonOpUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_IdXzCollege,
    ) == true
  ) {
    const strComparisonOpIdXzCollege: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_IdXzCollege];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_IdXzCollege,
      objvSysScoreSummaryCond.idXzCollege,
      strComparisonOpIdXzCollege,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_CollegeName,
    ) == true
  ) {
    const strComparisonOpCollegeName: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_CollegeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_CollegeName,
      objvSysScoreSummaryCond.collegeName,
      strComparisonOpCollegeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_IdXzMajor,
    ) == true
  ) {
    const strComparisonOpIdXzMajor: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_IdXzMajor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_IdXzMajor,
      objvSysScoreSummaryCond.idXzMajor,
      strComparisonOpIdXzMajor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_MajorName,
    ) == true
  ) {
    const strComparisonOpMajorName: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_MajorName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_MajorName,
      objvSysScoreSummaryCond.majorName,
      strComparisonOpMajorName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_IdGradeBase,
    ) == true
  ) {
    const strComparisonOpIdGradeBase: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_IdGradeBase];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_IdGradeBase,
      objvSysScoreSummaryCond.idGradeBase,
      strComparisonOpIdGradeBase,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_GradeBaseName,
    ) == true
  ) {
    const strComparisonOpGradeBaseName: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_GradeBaseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_GradeBaseName,
      objvSysScoreSummaryCond.gradeBaseName,
      strComparisonOpGradeBaseName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_OnlyId,
    ) == true
  ) {
    const strComparisonOpOnlyId: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_OnlyId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_OnlyId,
      objvSysScoreSummaryCond.onlyId,
      strComparisonOpOnlyId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_ScoreTypeId,
    ) == true
  ) {
    const strComparisonOpScoreTypeId: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_ScoreTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_ScoreTypeId,
      objvSysScoreSummaryCond.scoreTypeId,
      strComparisonOpScoreTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_ScoreTypeName,
    ) == true
  ) {
    const strComparisonOpScoreTypeName: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_ScoreTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_ScoreTypeName,
      objvSysScoreSummaryCond.scoreTypeName,
      strComparisonOpScoreTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_UpdUser,
      objvSysScoreSummaryCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvSysScoreSummaryEN.con_Score,
      objvSysScoreSummaryCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_IdCurrEduCls,
      objvSysScoreSummaryCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_EduClsName,
    ) == true
  ) {
    const strComparisonOpEduClsName: string =
      objvSysScoreSummaryCond.dicFldComparisonOp[clsvSysScoreSummaryEN.con_EduClsName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreSummaryEN.con_EduClsName,
      objvSysScoreSummaryCond.eduClsName,
      strComparisonOpEduClsName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreSummaryCond.dicFldComparisonOp,
      clsvSysScoreSummaryEN.con_IsSubmit,
    ) == true
  ) {
    if (objvSysScoreSummaryCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvSysScoreSummaryEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvSysScoreSummaryEN.con_IsSubmit);
    }
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvSysScoreSummaryENS:源对象
 * @param objvSysScoreSummaryENT:目标对象
 */
export function vSysScoreSummary_CopyObjTo(
  objvSysScoreSummaryENS: clsvSysScoreSummaryEN,
  objvSysScoreSummaryENT: clsvSysScoreSummaryEN,
): void {
  objvSysScoreSummaryENT.mId = objvSysScoreSummaryENS.mId; //mId
  objvSysScoreSummaryENT.userId = objvSysScoreSummaryENS.userId; //用户ID
  objvSysScoreSummaryENT.schoolYear = objvSysScoreSummaryENS.schoolYear; //学年
  objvSysScoreSummaryENT.updDate = objvSysScoreSummaryENS.updDate; //修改日期
  objvSysScoreSummaryENT.memo = objvSysScoreSummaryENS.memo; //备注
  objvSysScoreSummaryENT.userName = objvSysScoreSummaryENS.userName; //用户名
  objvSysScoreSummaryENT.idXzCollege = objvSysScoreSummaryENS.idXzCollege; //学院流水号
  objvSysScoreSummaryENT.collegeName = objvSysScoreSummaryENS.collegeName; //学院名称
  objvSysScoreSummaryENT.idXzMajor = objvSysScoreSummaryENS.idXzMajor; //专业流水号
  objvSysScoreSummaryENT.majorName = objvSysScoreSummaryENS.majorName; //专业名称
  objvSysScoreSummaryENT.idGradeBase = objvSysScoreSummaryENS.idGradeBase; //年级流水号
  objvSysScoreSummaryENT.gradeBaseName = objvSysScoreSummaryENS.gradeBaseName; //年级名称
  objvSysScoreSummaryENT.onlyId = objvSysScoreSummaryENS.onlyId; //OnlyId
  objvSysScoreSummaryENT.scoreTypeId = objvSysScoreSummaryENS.scoreTypeId; //分数类型Id
  objvSysScoreSummaryENT.scoreTypeName = objvSysScoreSummaryENS.scoreTypeName; //分数类型名称
  objvSysScoreSummaryENT.updUser = objvSysScoreSummaryENS.updUser; //修改人
  objvSysScoreSummaryENT.score = objvSysScoreSummaryENS.score; //评分
  objvSysScoreSummaryENT.idCurrEduCls = objvSysScoreSummaryENS.idCurrEduCls; //教学班流水号
  objvSysScoreSummaryENT.eduClsName = objvSysScoreSummaryENS.eduClsName; //教学班名
  objvSysScoreSummaryENT.isSubmit = objvSysScoreSummaryENS.isSubmit; //是否提交
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvSysScoreSummaryENS:源对象
 * @param objvSysScoreSummaryENT:目标对象
 */
export function vSysScoreSummary_GetObjFromJsonObj(
  objvSysScoreSummaryENS: clsvSysScoreSummaryEN,
): clsvSysScoreSummaryEN {
  const objvSysScoreSummaryENT: clsvSysScoreSummaryEN = new clsvSysScoreSummaryEN();
  ObjectAssign(objvSysScoreSummaryENT, objvSysScoreSummaryENS);
  return objvSysScoreSummaryENT;
}
