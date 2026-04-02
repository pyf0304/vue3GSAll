/**
 * 类名:clscc_CourseExamPaperWApi
 * 表名:cc_CourseExamPaper(01120071)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:33
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
 * 考卷(cc_CourseExamPaper)
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
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clscc_CourseExamPaperEN } from '@/ts/L0Entity/Knowledges/clscc_CourseExamPaperEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cc_CourseExamPaper_Controller = 'cc_CourseExamPaperApi';
export const cc_CourseExamPaper_ConstructorName = 'cc_CourseExamPaper';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCourseExamPaperId:关键字
 * @returns 对象
 **/
export async function cc_CourseExamPaper_GetObjByCourseExamPaperIdAsync(
  strCourseExamPaperId: string,
): Promise<clscc_CourseExamPaperEN | null> {
  const strThisFuncName = 'GetObjByCourseExamPaperIdAsync';

  if (IsNullOrEmpty(strCourseExamPaperId) == true) {
    const strMsg = Format(
      '参数:[strCourseExamPaperId]不能为空!(In clscc_CourseExamPaperWApi.GetObjByCourseExamPaperIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseExamPaperId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseExamPaperId]的长度:[{0}]不正确!(clscc_CourseExamPaperWApi.GetObjByCourseExamPaperIdAsync)',
      strCourseExamPaperId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCourseExamPaperId';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseExamPaperId,
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
      const objcc_CourseExamPaper = cc_CourseExamPaper_GetObjFromJsonObj(returnObj);
      return objcc_CourseExamPaper;
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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
 * @param strCourseExamPaperId:所给的关键字
 * @returns 对象
 */
export async function cc_CourseExamPaper_GetObjByCourseExamPaperIdCache(
  strCourseExamPaperId: string,
  strCourseId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCourseExamPaperIdCache';

  if (IsNullOrEmpty(strCourseExamPaperId) == true) {
    const strMsg = Format(
      '参数:[strCourseExamPaperId]不能为空!(In clscc_CourseExamPaperWApi.GetObjByCourseExamPaperIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseExamPaperId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseExamPaperId]的长度:[{0}]不正确!(clscc_CourseExamPaperWApi.GetObjByCourseExamPaperIdCache)',
      strCourseExamPaperId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstCache(strCourseId);
  try {
    const arrcc_CourseExamPaperSel = arrcc_CourseExamPaperObjLstCache.filter(
      (x) => x.courseExamPaperId == strCourseExamPaperId,
    );
    let objcc_CourseExamPaper: clscc_CourseExamPaperEN;
    if (arrcc_CourseExamPaperSel.length > 0) {
      objcc_CourseExamPaper = arrcc_CourseExamPaperSel[0];
      return objcc_CourseExamPaper;
    } else {
      if (bolTryAsyncOnce == true) {
        const objcc_CourseExamPaperConst = await cc_CourseExamPaper_GetObjByCourseExamPaperIdAsync(
          strCourseExamPaperId,
        );
        if (objcc_CourseExamPaperConst != null) {
          cc_CourseExamPaper_ReFreshThisCache(strCourseId);
          return objcc_CourseExamPaperConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCourseExamPaperId,
      cc_CourseExamPaper_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCourseExamPaperId:所给的关键字
 * @returns 对象
 */
export async function cc_CourseExamPaper_GetObjByCourseExamPaperIdlocalStorage(
  strCourseExamPaperId: string,
) {
  const strThisFuncName = 'GetObjByCourseExamPaperIdlocalStorage';

  if (IsNullOrEmpty(strCourseExamPaperId) == true) {
    const strMsg = Format(
      '参数:[strCourseExamPaperId]不能为空!(In clscc_CourseExamPaperWApi.GetObjByCourseExamPaperIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseExamPaperId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseExamPaperId]的长度:[{0}]不正确!(clscc_CourseExamPaperWApi.GetObjByCourseExamPaperIdlocalStorage)',
      strCourseExamPaperId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clscc_CourseExamPaperEN._CurrTabName, strCourseExamPaperId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objcc_CourseExamPaperCache: clscc_CourseExamPaperEN = JSON.parse(strTempObj);
    return objcc_CourseExamPaperCache;
  }
  try {
    const objcc_CourseExamPaper = await cc_CourseExamPaper_GetObjByCourseExamPaperIdAsync(
      strCourseExamPaperId,
    );
    if (objcc_CourseExamPaper != null) {
      localStorage.setItem(strKey, JSON.stringify(objcc_CourseExamPaper));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objcc_CourseExamPaper;
    }
    return objcc_CourseExamPaper;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCourseExamPaperId,
      cc_CourseExamPaper_ConstructorName,
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
 * @param objcc_CourseExamPaper:所给的对象
 * @returns 对象
 */
export async function cc_CourseExamPaper_UpdateObjInLstCache(
  objcc_CourseExamPaper: clscc_CourseExamPaperEN,
  strCourseId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstCache(strCourseId);
    const obj = arrcc_CourseExamPaperObjLstCache.find(
      (x) => x.examPaperName == objcc_CourseExamPaper.examPaperName,
    );
    if (obj != null) {
      objcc_CourseExamPaper.courseExamPaperId = obj.courseExamPaperId;
      ObjectAssign(obj, objcc_CourseExamPaper);
    } else {
      arrcc_CourseExamPaperObjLstCache.push(objcc_CourseExamPaper);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      cc_CourseExamPaper_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCourseExamPaperId:所给的关键字
 * @returns 对象
 */
export async function cc_CourseExamPaper_GetNameByCourseExamPaperIdCache(
  strCourseExamPaperId: string,
  strCourseId: string,
) {
  if (IsNullOrEmpty(strCourseExamPaperId) == true) {
    const strMsg = Format(
      '参数:[strCourseExamPaperId]不能为空!(In clscc_CourseExamPaperWApi.GetNameByCourseExamPaperIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseExamPaperId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseExamPaperId]的长度:[{0}]不正确!(clscc_CourseExamPaperWApi.GetNameByCourseExamPaperIdCache)',
      strCourseExamPaperId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstCache(strCourseId);
  if (arrcc_CourseExamPaperObjLstCache == null) return '';
  try {
    const arrcc_CourseExamPaperSel = arrcc_CourseExamPaperObjLstCache.filter(
      (x) => x.courseExamPaperId == strCourseExamPaperId,
    );
    let objcc_CourseExamPaper: clscc_CourseExamPaperEN;
    if (arrcc_CourseExamPaperSel.length > 0) {
      objcc_CourseExamPaper = arrcc_CourseExamPaperSel[0];
      return objcc_CourseExamPaper.examPaperName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strCourseExamPaperId,
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
 @param strCourseId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function cc_CourseExamPaper_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strCourseIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCourseIdClassfy) == true) {
    const strMsg = Format('参数:[strCourseIdClassfy]不能为空!(In clscc_CourseExamPaperWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clscc_CourseExamPaperWApi.func)',
      strCourseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clscc_CourseExamPaperEN.con_CourseExamPaperId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clscc_CourseExamPaperEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clscc_CourseExamPaperEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCourseExamPaperId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objcc_CourseExamPaper = await cc_CourseExamPaper_GetObjByCourseExamPaperIdCache(
    strCourseExamPaperId,
    strCourseIdClassfy,
  );
  if (objcc_CourseExamPaper == null) return '';
  if (objcc_CourseExamPaper.GetFldValue(strOutFldName) == null) return '';
  return objcc_CourseExamPaper.GetFldValue(strOutFldName).toString();
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
export function cc_CourseExamPaper_SortFunDefa(
  a: clscc_CourseExamPaperEN,
  b: clscc_CourseExamPaperEN,
): number {
  return a.courseExamPaperId.localeCompare(b.courseExamPaperId);
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
export function cc_CourseExamPaper_SortFunDefa2Fld(
  a: clscc_CourseExamPaperEN,
  b: clscc_CourseExamPaperEN,
): number {
  if (a.courseId == b.courseId) return a.examPaperName.localeCompare(b.examPaperName);
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
export function cc_CourseExamPaper_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscc_CourseExamPaperEN.con_CourseExamPaperId:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return a.courseExamPaperId.localeCompare(b.courseExamPaperId);
        };
      case clscc_CourseExamPaperEN.con_CourseId:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (a.courseId == null) return -1;
          if (b.courseId == null) return 1;
          return a.courseId.localeCompare(b.courseId);
        };
      case clscc_CourseExamPaperEN.con_ExamPaperName:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (a.examPaperName == null) return -1;
          if (b.examPaperName == null) return 1;
          return a.examPaperName.localeCompare(b.examPaperName);
        };
      case clscc_CourseExamPaperEN.con_PaperIndex:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return a.paperIndex - b.paperIndex;
        };
      case clscc_CourseExamPaperEN.con_ExamPaperTypeId:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return a.examPaperTypeId.localeCompare(b.examPaperTypeId);
        };
      case clscc_CourseExamPaperEN.con_IsShow:
        return (a: clscc_CourseExamPaperEN) => {
          if (a.isShow == true) return 1;
          else return -1;
        };
      case clscc_CourseExamPaperEN.con_TotalScore:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return a.totalScore - b.totalScore;
        };
      case clscc_CourseExamPaperEN.con_ViewCount:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return a.viewCount - b.viewCount;
        };
      case clscc_CourseExamPaperEN.con_DoneNumber:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return a.doneNumber - b.doneNumber;
        };
      case clscc_CourseExamPaperEN.con_PaperTime:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return a.paperTime - b.paperTime;
        };
      case clscc_CourseExamPaperEN.con_DownloadNumber:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return a.downloadNumber - b.downloadNumber;
        };
      case clscc_CourseExamPaperEN.con_CollectionCount:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return a.collectionCount - b.collectionCount;
        };
      case clscc_CourseExamPaperEN.con_LikeCount:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return a.likeCount - b.likeCount;
        };
      case clscc_CourseExamPaperEN.con_IdXzMajor:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (a.idXzMajor == null) return -1;
          if (b.idXzMajor == null) return 1;
          return a.idXzMajor.localeCompare(b.idXzMajor);
        };
      case clscc_CourseExamPaperEN.con_PaperDispModeId:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (a.paperDispModeId == null) return -1;
          if (b.paperDispModeId == null) return 1;
          return a.paperDispModeId.localeCompare(b.paperDispModeId);
        };
      case clscc_CourseExamPaperEN.con_ExamCreateTime:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (a.examCreateTime == null) return -1;
          if (b.examCreateTime == null) return 1;
          return a.examCreateTime.localeCompare(b.examCreateTime);
        };
      case clscc_CourseExamPaperEN.con_CreateUserID:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (a.createUserID == null) return -1;
          if (b.createUserID == null) return 1;
          return a.createUserID.localeCompare(b.createUserID);
        };
      case clscc_CourseExamPaperEN.con_IsOpenToAllStu:
        return (a: clscc_CourseExamPaperEN) => {
          if (a.isOpenToAllStu == true) return 1;
          else return -1;
        };
      case clscc_CourseExamPaperEN.con_IsOpenToSchool:
        return (a: clscc_CourseExamPaperEN) => {
          if (a.isOpenToSchool == true) return 1;
          else return -1;
        };
      case clscc_CourseExamPaperEN.con_IsOpenToSocial:
        return (a: clscc_CourseExamPaperEN) => {
          if (a.isOpenToSocial == true) return 1;
          else return -1;
        };
      case clscc_CourseExamPaperEN.con_CourseChapterId:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (a.courseChapterId == null) return -1;
          if (b.courseChapterId == null) return 1;
          return a.courseChapterId.localeCompare(b.courseChapterId);
        };
      case clscc_CourseExamPaperEN.con_IsAutoGeneQuestion:
        return (a: clscc_CourseExamPaperEN) => {
          if (a.isAutoGeneQuestion == true) return 1;
          else return -1;
        };
      case clscc_CourseExamPaperEN.con_IsCanMultiDo:
        return (a: clscc_CourseExamPaperEN) => {
          if (a.isCanMultiDo == true) return 1;
          else return -1;
        };
      case clscc_CourseExamPaperEN.con_UpdDate:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clscc_CourseExamPaperEN.con_UpdUserId:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clscc_CourseExamPaperEN.con_Memo:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[cc_CourseExamPaper]中不存在!(in ${cc_CourseExamPaper_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clscc_CourseExamPaperEN.con_CourseExamPaperId:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return b.courseExamPaperId.localeCompare(a.courseExamPaperId);
        };
      case clscc_CourseExamPaperEN.con_CourseId:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (b.courseId == null) return -1;
          if (a.courseId == null) return 1;
          return b.courseId.localeCompare(a.courseId);
        };
      case clscc_CourseExamPaperEN.con_ExamPaperName:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (b.examPaperName == null) return -1;
          if (a.examPaperName == null) return 1;
          return b.examPaperName.localeCompare(a.examPaperName);
        };
      case clscc_CourseExamPaperEN.con_PaperIndex:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return b.paperIndex - a.paperIndex;
        };
      case clscc_CourseExamPaperEN.con_ExamPaperTypeId:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return b.examPaperTypeId.localeCompare(a.examPaperTypeId);
        };
      case clscc_CourseExamPaperEN.con_IsShow:
        return (b: clscc_CourseExamPaperEN) => {
          if (b.isShow == true) return 1;
          else return -1;
        };
      case clscc_CourseExamPaperEN.con_TotalScore:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return b.totalScore - a.totalScore;
        };
      case clscc_CourseExamPaperEN.con_ViewCount:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return b.viewCount - a.viewCount;
        };
      case clscc_CourseExamPaperEN.con_DoneNumber:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return b.doneNumber - a.doneNumber;
        };
      case clscc_CourseExamPaperEN.con_PaperTime:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return b.paperTime - a.paperTime;
        };
      case clscc_CourseExamPaperEN.con_DownloadNumber:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return b.downloadNumber - a.downloadNumber;
        };
      case clscc_CourseExamPaperEN.con_CollectionCount:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return b.collectionCount - a.collectionCount;
        };
      case clscc_CourseExamPaperEN.con_LikeCount:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return b.likeCount - a.likeCount;
        };
      case clscc_CourseExamPaperEN.con_IdXzMajor:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (b.idXzMajor == null) return -1;
          if (a.idXzMajor == null) return 1;
          return b.idXzMajor.localeCompare(a.idXzMajor);
        };
      case clscc_CourseExamPaperEN.con_PaperDispModeId:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (b.paperDispModeId == null) return -1;
          if (a.paperDispModeId == null) return 1;
          return b.paperDispModeId.localeCompare(a.paperDispModeId);
        };
      case clscc_CourseExamPaperEN.con_ExamCreateTime:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (b.examCreateTime == null) return -1;
          if (a.examCreateTime == null) return 1;
          return b.examCreateTime.localeCompare(a.examCreateTime);
        };
      case clscc_CourseExamPaperEN.con_CreateUserID:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (b.createUserID == null) return -1;
          if (a.createUserID == null) return 1;
          return b.createUserID.localeCompare(a.createUserID);
        };
      case clscc_CourseExamPaperEN.con_IsOpenToAllStu:
        return (b: clscc_CourseExamPaperEN) => {
          if (b.isOpenToAllStu == true) return 1;
          else return -1;
        };
      case clscc_CourseExamPaperEN.con_IsOpenToSchool:
        return (b: clscc_CourseExamPaperEN) => {
          if (b.isOpenToSchool == true) return 1;
          else return -1;
        };
      case clscc_CourseExamPaperEN.con_IsOpenToSocial:
        return (b: clscc_CourseExamPaperEN) => {
          if (b.isOpenToSocial == true) return 1;
          else return -1;
        };
      case clscc_CourseExamPaperEN.con_CourseChapterId:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (b.courseChapterId == null) return -1;
          if (a.courseChapterId == null) return 1;
          return b.courseChapterId.localeCompare(a.courseChapterId);
        };
      case clscc_CourseExamPaperEN.con_IsAutoGeneQuestion:
        return (b: clscc_CourseExamPaperEN) => {
          if (b.isAutoGeneQuestion == true) return 1;
          else return -1;
        };
      case clscc_CourseExamPaperEN.con_IsCanMultiDo:
        return (b: clscc_CourseExamPaperEN) => {
          if (b.isCanMultiDo == true) return 1;
          else return -1;
        };
      case clscc_CourseExamPaperEN.con_UpdDate:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clscc_CourseExamPaperEN.con_UpdUserId:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clscc_CourseExamPaperEN.con_Memo:
        return (a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[cc_CourseExamPaper]中不存在!(in ${cc_CourseExamPaper_ConstructorName}.${strThisFuncName})`;
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
export async function cc_CourseExamPaper_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clscc_CourseExamPaperEN.con_CourseExamPaperId:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.courseExamPaperId === value;
      };
    case clscc_CourseExamPaperEN.con_CourseId:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.courseId === value;
      };
    case clscc_CourseExamPaperEN.con_ExamPaperName:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.examPaperName === value;
      };
    case clscc_CourseExamPaperEN.con_PaperIndex:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.paperIndex === value;
      };
    case clscc_CourseExamPaperEN.con_ExamPaperTypeId:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.examPaperTypeId === value;
      };
    case clscc_CourseExamPaperEN.con_IsShow:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.isShow === value;
      };
    case clscc_CourseExamPaperEN.con_TotalScore:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.totalScore === value;
      };
    case clscc_CourseExamPaperEN.con_ViewCount:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.viewCount === value;
      };
    case clscc_CourseExamPaperEN.con_DoneNumber:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.doneNumber === value;
      };
    case clscc_CourseExamPaperEN.con_PaperTime:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.paperTime === value;
      };
    case clscc_CourseExamPaperEN.con_DownloadNumber:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.downloadNumber === value;
      };
    case clscc_CourseExamPaperEN.con_CollectionCount:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.collectionCount === value;
      };
    case clscc_CourseExamPaperEN.con_LikeCount:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.likeCount === value;
      };
    case clscc_CourseExamPaperEN.con_IdXzMajor:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.idXzMajor === value;
      };
    case clscc_CourseExamPaperEN.con_PaperDispModeId:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.paperDispModeId === value;
      };
    case clscc_CourseExamPaperEN.con_ExamCreateTime:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.examCreateTime === value;
      };
    case clscc_CourseExamPaperEN.con_CreateUserID:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.createUserID === value;
      };
    case clscc_CourseExamPaperEN.con_IsOpenToAllStu:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.isOpenToAllStu === value;
      };
    case clscc_CourseExamPaperEN.con_IsOpenToSchool:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.isOpenToSchool === value;
      };
    case clscc_CourseExamPaperEN.con_IsOpenToSocial:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.isOpenToSocial === value;
      };
    case clscc_CourseExamPaperEN.con_CourseChapterId:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.courseChapterId === value;
      };
    case clscc_CourseExamPaperEN.con_IsAutoGeneQuestion:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.isAutoGeneQuestion === value;
      };
    case clscc_CourseExamPaperEN.con_IsCanMultiDo:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.isCanMultiDo === value;
      };
    case clscc_CourseExamPaperEN.con_UpdDate:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.updDate === value;
      };
    case clscc_CourseExamPaperEN.con_UpdUserId:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.updUserId === value;
      };
    case clscc_CourseExamPaperEN.con_Memo:
      return (obj: clscc_CourseExamPaperEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[cc_CourseExamPaper]中不存在!(in ${cc_CourseExamPaper_ConstructorName}.${strThisFuncName})`;
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
export async function cc_CourseExamPaper_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCourseIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCourseIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strCourseIdClassfy]不能为空!(In clscc_CourseExamPaperWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clscc_CourseExamPaperWApi.funcKey)',
      strCourseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clscc_CourseExamPaperEN.con_CourseExamPaperId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrcc_CourseExamPaper = await cc_CourseExamPaper_GetObjLstCache(strCourseIdClassfy);
  if (arrcc_CourseExamPaper == null) return [];
  let arrcc_CourseExamPaperSel = arrcc_CourseExamPaper;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrcc_CourseExamPaperSel.length == 0) return [];
  return arrcc_CourseExamPaperSel.map((x) => x.courseExamPaperId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function cc_CourseExamPaper_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clscc_CourseExamPaperEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

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
      const objcc_CourseExamPaper = cc_CourseExamPaper_GetObjFromJsonObj(returnObj);
      return objcc_CourseExamPaper;
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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_GetObjLstClientCache(strCourseId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clscc_CourseExamPaperEN.WhereFormat) == false) {
    strWhereCond = Format(clscc_CourseExamPaperEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("CourseId='{0}'", strCourseId);
  }
  const strKey = Format('{0}_{1}', clscc_CourseExamPaperEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clscc_CourseExamPaperEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_CourseExamPaperEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrcc_CourseExamPaperExObjLstCache: Array<clscc_CourseExamPaperEN> =
      CacheHelper.Get(strKey);
    const arrcc_CourseExamPaperObjLstT = cc_CourseExamPaper_GetObjLstByJSONObjLst(
      arrcc_CourseExamPaperExObjLstCache,
    );
    return arrcc_CourseExamPaperObjLstT;
  }
  try {
    const arrcc_CourseExamPaperExObjLst = await cc_CourseExamPaper_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrcc_CourseExamPaperExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_CourseExamPaperExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_CourseExamPaperExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_GetObjLstlocalStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clscc_CourseExamPaperEN.WhereFormat) == false) {
    strWhereCond = Format(clscc_CourseExamPaperEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("{0}='{1}'", clscc_CourseExamPaperEN.con_CourseId, strCourseId);
  }
  const strKey = Format('{0}_{1}', clscc_CourseExamPaperEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clscc_CourseExamPaperEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_CourseExamPaperEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrcc_CourseExamPaperExObjLstCache: Array<clscc_CourseExamPaperEN> =
      JSON.parse(strTempObjLst);
    const arrcc_CourseExamPaperObjLstT = cc_CourseExamPaper_GetObjLstByJSONObjLst(
      arrcc_CourseExamPaperExObjLstCache,
    );
    return arrcc_CourseExamPaperObjLstT;
  }
  try {
    const arrcc_CourseExamPaperExObjLst = await cc_CourseExamPaper_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrcc_CourseExamPaperExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_CourseExamPaperExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_CourseExamPaperExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_GetObjLstlocalStoragePureCache(strCourseId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clscc_CourseExamPaperEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrcc_CourseExamPaperObjLstCache: Array<clscc_CourseExamPaperEN> =
      JSON.parse(strTempObjLst);
    return arrcc_CourseExamPaperObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function cc_CourseExamPaper_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clscc_CourseExamPaperEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

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
          cc_CourseExamPaper_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseExamPaper_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_GetObjLstsessionStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clscc_CourseExamPaperEN.WhereFormat) == false) {
    strWhereCond = Format(clscc_CourseExamPaperEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("{0}='{1}'", clscc_CourseExamPaperEN.con_CourseId, strCourseId);
  }
  const strKey = Format('{0}_{1}', clscc_CourseExamPaperEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clscc_CourseExamPaperEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_CourseExamPaperEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrcc_CourseExamPaperExObjLstCache: Array<clscc_CourseExamPaperEN> =
      JSON.parse(strTempObjLst);
    const arrcc_CourseExamPaperObjLstT = cc_CourseExamPaper_GetObjLstByJSONObjLst(
      arrcc_CourseExamPaperExObjLstCache,
    );
    return arrcc_CourseExamPaperObjLstT;
  }
  try {
    const arrcc_CourseExamPaperExObjLst = await cc_CourseExamPaper_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrcc_CourseExamPaperExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_CourseExamPaperExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_CourseExamPaperExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_GetObjLstsessionStoragePureCache(strCourseId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clscc_CourseExamPaperEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrcc_CourseExamPaperObjLstCache: Array<clscc_CourseExamPaperEN> =
      JSON.parse(strTempObjLst);
    return arrcc_CourseExamPaperObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function cc_CourseExamPaper_GetObjLstCache(
  strCourseId: string,
): Promise<Array<clscc_CourseExamPaperEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clscc_CourseExamPaperWApi.cc_CourseExamPaper_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clscc_CourseExamPaperWApi.cc_CourseExamPaper_GetObjLstCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrcc_CourseExamPaperObjLstCache;
  switch (clscc_CourseExamPaperEN.CacheModeId) {
    case '04': //sessionStorage
      arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstsessionStorage(
        strCourseId,
      );
      break;
    case '03': //localStorage
      arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstlocalStorage(
        strCourseId,
      );
      break;
    case '02': //ClientCache
      arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstClientCache(strCourseId);
      break;
    default:
      arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstClientCache(strCourseId);
      break;
  }
  return arrcc_CourseExamPaperObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function cc_CourseExamPaper_GetObjLstPureCache(strCourseId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrcc_CourseExamPaperObjLstCache;
  switch (clscc_CourseExamPaperEN.CacheModeId) {
    case '04': //sessionStorage
      arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstsessionStoragePureCache(
        strCourseId,
      );
      break;
    case '03': //localStorage
      arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstlocalStoragePureCache(
        strCourseId,
      );
      break;
    case '02': //ClientCache
      arrcc_CourseExamPaperObjLstCache = null;
      break;
    default:
      arrcc_CourseExamPaperObjLstCache = null;
      break;
  }
  return arrcc_CourseExamPaperObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCourseExamPaperIdCond:条件对象
 * @returns 对象列表子集
 */
export async function cc_CourseExamPaper_GetSubObjLstCache(
  objcc_CourseExamPaperCond: clscc_CourseExamPaperEN,
  strCourseId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstCache(strCourseId);
  let arrcc_CourseExamPaperSel = arrcc_CourseExamPaperObjLstCache;
  if (
    objcc_CourseExamPaperCond.sfFldComparisonOp == null ||
    objcc_CourseExamPaperCond.sfFldComparisonOp == ''
  )
    return arrcc_CourseExamPaperSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_CourseExamPaperCond.sfFldComparisonOp,
  );
  //console.log("clscc_CourseExamPaperWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_CourseExamPaperCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_CourseExamPaperCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrcc_CourseExamPaperSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objcc_CourseExamPaperCond),
      cc_CourseExamPaper_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseExamPaperEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCourseExamPaperId:关键字列表
 * @returns 对象列表
 **/
export async function cc_CourseExamPaper_GetObjLstByCourseExamPaperIdLstAsync(
  arrCourseExamPaperId: Array<string>,
): Promise<Array<clscc_CourseExamPaperEN>> {
  const strThisFuncName = 'GetObjLstByCourseExamPaperIdLstAsync';
  const strAction = 'GetObjLstByCourseExamPaperIdLst';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCourseExamPaperId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cc_CourseExamPaper_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseExamPaper_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
 * @param arrstrCourseExamPaperIdLst:关键字列表
 * @returns 对象列表
 */
export async function cc_CourseExamPaper_GetObjLstByCourseExamPaperIdLstCache(
  arrCourseExamPaperIdLst: Array<string>,
  strCourseId: string,
) {
  const strThisFuncName = 'GetObjLstByCourseExamPaperIdLstCache';
  try {
    const arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstCache(strCourseId);
    const arrcc_CourseExamPaperSel = arrcc_CourseExamPaperObjLstCache.filter(
      (x) => arrCourseExamPaperIdLst.indexOf(x.courseExamPaperId) > -1,
    );
    return arrcc_CourseExamPaperSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCourseExamPaperIdLst.join(','),
      cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clscc_CourseExamPaperEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

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
          cc_CourseExamPaper_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseExamPaper_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clscc_CourseExamPaperEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

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
          cc_CourseExamPaper_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseExamPaper_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clscc_CourseExamPaperEN>();
  const arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstCache(strCourseId);
  if (arrcc_CourseExamPaperObjLstCache.length == 0) return arrcc_CourseExamPaperObjLstCache;
  let arrcc_CourseExamPaperSel = arrcc_CourseExamPaperObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objcc_CourseExamPaperCond = new clscc_CourseExamPaperEN();
  ObjectAssign(objcc_CourseExamPaperCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clscc_CourseExamPaperWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_CourseExamPaperCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_CourseExamPaperSel.length == 0) return arrcc_CourseExamPaperSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.sort(
        cc_CourseExamPaper_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.sort(objPagerPara.sortFun);
    }
    arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.slice(intStart, intEnd);
    return arrcc_CourseExamPaperSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_CourseExamPaper_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseExamPaperEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function cc_CourseExamPaper_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_CourseExamPaperEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clscc_CourseExamPaperEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

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
          cc_CourseExamPaper_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseExamPaper_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
 * @param strCourseExamPaperId:关键字
 * @returns 获取删除的结果
 **/
export async function cc_CourseExamPaper_DelRecordAsync(
  strCourseExamPaperId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strCourseExamPaperId);

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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
 * @param arrCourseExamPaperId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function cc_CourseExamPaper_Delcc_CourseExamPapersAsync(
  arrCourseExamPaperId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delcc_CourseExamPapersAsync';
  const strAction = 'Delcc_CourseExamPapers';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCourseExamPaperId, config);
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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_Delcc_CourseExamPapersByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delcc_CourseExamPapersByCondAsync';
  const strAction = 'Delcc_CourseExamPapersByCond';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
 * @param objcc_CourseExamPaperEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_CourseExamPaper_AddNewRecordAsync(
  objcc_CourseExamPaperEN: clscc_CourseExamPaperEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objcc_CourseExamPaperEN);
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseExamPaperEN, config);
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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
 * @param objcc_CourseExamPaperEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_CourseExamPaper_AddNewRecordWithMaxIdAsync(
  objcc_CourseExamPaperEN: clscc_CourseExamPaperEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseExamPaperEN, config);
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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
 * @param objcc_CourseExamPaperEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function cc_CourseExamPaper_AddNewRecordWithReturnKeyAsync(
  objcc_CourseExamPaperEN: clscc_CourseExamPaperEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseExamPaperEN, config);
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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
 * @param objcc_CourseExamPaperEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function cc_CourseExamPaper_UpdateRecordAsync(
  objcc_CourseExamPaperEN: clscc_CourseExamPaperEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objcc_CourseExamPaperEN.sfUpdFldSetStr === undefined ||
    objcc_CourseExamPaperEN.sfUpdFldSetStr === null ||
    objcc_CourseExamPaperEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcc_CourseExamPaperEN.courseExamPaperId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseExamPaperEN, config);
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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
 * @param objcc_CourseExamPaperEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function cc_CourseExamPaper_UpdateWithConditionAsync(
  objcc_CourseExamPaperEN: clscc_CourseExamPaperEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objcc_CourseExamPaperEN.sfUpdFldSetStr === undefined ||
    objcc_CourseExamPaperEN.sfUpdFldSetStr === null ||
    objcc_CourseExamPaperEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcc_CourseExamPaperEN.courseExamPaperId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);
  objcc_CourseExamPaperEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseExamPaperEN, config);
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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
 * @param objstrCourseExamPaperIdCond:条件对象
 * @returns 对象列表子集
 */
export async function cc_CourseExamPaper_IsExistRecordCache(
  objcc_CourseExamPaperCond: clscc_CourseExamPaperEN,
  strCourseId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstCache(strCourseId);
  if (arrcc_CourseExamPaperObjLstCache == null) return false;
  let arrcc_CourseExamPaperSel = arrcc_CourseExamPaperObjLstCache;
  if (
    objcc_CourseExamPaperCond.sfFldComparisonOp == null ||
    objcc_CourseExamPaperCond.sfFldComparisonOp == ''
  )
    return arrcc_CourseExamPaperSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_CourseExamPaperCond.sfFldComparisonOp,
  );
  //console.log("clscc_CourseExamPaperWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_CourseExamPaperCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_CourseExamPaperCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_CourseExamPaperSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objcc_CourseExamPaperCond),
      cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
 * @param strCourseExamPaperId:所给的关键字
 * @returns 对象
 */
export async function cc_CourseExamPaper_IsExistCache(
  strCourseExamPaperId: string,
  strCourseId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstCache(strCourseId);
  if (arrcc_CourseExamPaperObjLstCache == null) return false;
  try {
    const arrcc_CourseExamPaperSel = arrcc_CourseExamPaperObjLstCache.filter(
      (x) => x.courseExamPaperId == strCourseExamPaperId,
    );
    if (arrcc_CourseExamPaperSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCourseExamPaperId,
      cc_CourseExamPaper_ConstructorName,
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
 * @param strCourseExamPaperId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function cc_CourseExamPaper_IsExistAsync(
  strCourseExamPaperId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseExamPaperId,
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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
 * @param objcc_CourseExamPaperCond:条件对象
 * @returns 对象列表记录数
 */
export async function cc_CourseExamPaper_GetRecCountByCondCache(
  objcc_CourseExamPaperCond: clscc_CourseExamPaperEN,
  strCourseId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrcc_CourseExamPaperObjLstCache = await cc_CourseExamPaper_GetObjLstCache(strCourseId);
  if (arrcc_CourseExamPaperObjLstCache == null) return 0;
  let arrcc_CourseExamPaperSel = arrcc_CourseExamPaperObjLstCache;
  if (
    objcc_CourseExamPaperCond.sfFldComparisonOp == null ||
    objcc_CourseExamPaperCond.sfFldComparisonOp == ''
  )
    return arrcc_CourseExamPaperSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_CourseExamPaperCond.sfFldComparisonOp,
  );
  //console.log("clscc_CourseExamPaperWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_CourseExamPaperCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_CourseExamPaperCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrcc_CourseExamPaperSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objcc_CourseExamPaperCond),
      cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
export async function cc_CourseExamPaper_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cc_CourseExamPaper_Controller, strAction);

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
        cc_CourseExamPaper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseExamPaper_ConstructorName,
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
export function cc_CourseExamPaper_GetWebApiUrl(strController: string, strAction: string): string {
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
export function cc_CourseExamPaper_ReFreshCache(strCourseId: string): void {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空!(In clscc_CourseExamPaperWApi.clscc_CourseExamPaperWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clscc_CourseExamPaperWApi.clscc_CourseExamPaperWApi.ReFreshCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clscc_CourseExamPaperEN._CurrTabName, strCourseId);
  switch (clscc_CourseExamPaperEN.CacheModeId) {
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
export function cc_CourseExamPaper_ReFreshThisCache(strCourseId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clscc_CourseExamPaperEN._CurrTabName, strCourseId);
    switch (clscc_CourseExamPaperEN.CacheModeId) {
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

 * @param strCourseId:
*/
export async function cc_CourseExamPaper_BindDdl_CourseExamPaperIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strCourseId: string,
) {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clscc_CourseExamPaperWApi.BindDdl_CourseExamPaperIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clscc_CourseExamPaperWApi.BindDdl_CourseExamPaperIdInDiv)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CourseExamPaperIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CourseExamPaperIdInDivCache");
  let arrObjLstSel = await cc_CourseExamPaper_GetObjLstCache(strCourseId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.courseId == strCourseId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clscc_CourseExamPaperEN.con_CourseExamPaperId,
    clscc_CourseExamPaperEN.con_ExamPaperName,
    '考卷',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function cc_CourseExamPaper_CheckPropertyNew(
  pobjcc_CourseExamPaperEN: clscc_CourseExamPaperEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.examPaperTypeId) === true ||
    pobjcc_CourseExamPaperEN.examPaperTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[试卷类型Id]不能为空(In 考卷)!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.courseExamPaperId) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.courseExamPaperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[考卷流水号(courseExamPaperId)]的长度不能超过8(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.courseExamPaperId)(clscc_CourseExamPaperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.courseId) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.courseId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.courseId)(clscc_CourseExamPaperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.examPaperName) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.examPaperName) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[考卷名称(examPaperName)]的长度不能超过500(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.examPaperName)(clscc_CourseExamPaperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.examPaperTypeId) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.examPaperTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[试卷类型Id(examPaperTypeId)]的长度不能超过2(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.examPaperTypeId)(clscc_CourseExamPaperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.idXzMajor) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.idXzMajor) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[专业流水号(idXzMajor)]的长度不能超过8(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.idXzMajor)(clscc_CourseExamPaperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.paperDispModeId) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.paperDispModeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[试卷显示模式Id(paperDispModeId)]的长度不能超过4(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.paperDispModeId)(clscc_CourseExamPaperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.examCreateTime) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.examCreateTime) > 14
  ) {
    throw new Error(
      '(errid:Watl000413)字段[考卷建立时间(examCreateTime)]的长度不能超过14(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.examCreateTime)(clscc_CourseExamPaperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.createUserID) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.createUserID) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[建立用户ID(createUserID)]的长度不能超过20(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.createUserID)(clscc_CourseExamPaperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.courseChapterId) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.courseChapterId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程章节ID(courseChapterId)]的长度不能超过8(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.courseChapterId)(clscc_CourseExamPaperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.updDate) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.updDate)(clscc_CourseExamPaperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.updUserId) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.updUserId)(clscc_CourseExamPaperBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.memo) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.memo)(clscc_CourseExamPaperBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.courseExamPaperId) == false &&
    undefined !== pobjcc_CourseExamPaperEN.courseExamPaperId &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.courseExamPaperId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[考卷流水号(courseExamPaperId)]的值:[$(pobjcc_CourseExamPaperEN.courseExamPaperId)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.courseId) == false &&
    undefined !== pobjcc_CourseExamPaperEN.courseId &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.courseId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程Id(courseId)]的值:[$(pobjcc_CourseExamPaperEN.courseId)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.examPaperName) == false &&
    undefined !== pobjcc_CourseExamPaperEN.examPaperName &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.examPaperName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[考卷名称(examPaperName)]的值:[$(pobjcc_CourseExamPaperEN.examPaperName)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.paperIndex &&
    undefined !== pobjcc_CourseExamPaperEN.paperIndex &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.paperIndex) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[试卷序号(paperIndex)]的值:[$(pobjcc_CourseExamPaperEN.paperIndex)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.examPaperTypeId) == false &&
    undefined !== pobjcc_CourseExamPaperEN.examPaperTypeId &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.examPaperTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[试卷类型Id(examPaperTypeId)]的值:[$(pobjcc_CourseExamPaperEN.examPaperTypeId)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.isShow &&
    undefined !== pobjcc_CourseExamPaperEN.isShow &&
    tzDataType.isBoolean(pobjcc_CourseExamPaperEN.isShow) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否启用(isShow)]的值:[$(pobjcc_CourseExamPaperEN.isShow)], 非法,应该为布尔型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.totalScore &&
    undefined !== pobjcc_CourseExamPaperEN.totalScore &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.totalScore) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[总得分(totalScore)]的值:[$(pobjcc_CourseExamPaperEN.totalScore)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.viewCount &&
    undefined !== pobjcc_CourseExamPaperEN.viewCount &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.viewCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[浏览量(viewCount)]的值:[$(pobjcc_CourseExamPaperEN.viewCount)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.doneNumber &&
    undefined !== pobjcc_CourseExamPaperEN.doneNumber &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.doneNumber) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[已做人数(doneNumber)]的值:[$(pobjcc_CourseExamPaperEN.doneNumber)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.paperTime &&
    undefined !== pobjcc_CourseExamPaperEN.paperTime &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.paperTime) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[考试时间（分钟）(paperTime)]的值:[$(pobjcc_CourseExamPaperEN.paperTime)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.downloadNumber &&
    undefined !== pobjcc_CourseExamPaperEN.downloadNumber &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.downloadNumber) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[下载数目(downloadNumber)]的值:[$(pobjcc_CourseExamPaperEN.downloadNumber)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.collectionCount &&
    undefined !== pobjcc_CourseExamPaperEN.collectionCount &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.collectionCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[收藏数量(collectionCount)]的值:[$(pobjcc_CourseExamPaperEN.collectionCount)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.likeCount &&
    undefined !== pobjcc_CourseExamPaperEN.likeCount &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.likeCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[资源喜欢数量(likeCount)]的值:[$(pobjcc_CourseExamPaperEN.likeCount)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.idXzMajor) == false &&
    undefined !== pobjcc_CourseExamPaperEN.idXzMajor &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.idXzMajor) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[专业流水号(idXzMajor)]的值:[$(pobjcc_CourseExamPaperEN.idXzMajor)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.paperDispModeId) == false &&
    undefined !== pobjcc_CourseExamPaperEN.paperDispModeId &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.paperDispModeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[试卷显示模式Id(paperDispModeId)]的值:[$(pobjcc_CourseExamPaperEN.paperDispModeId)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.examCreateTime) == false &&
    undefined !== pobjcc_CourseExamPaperEN.examCreateTime &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.examCreateTime) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[考卷建立时间(examCreateTime)]的值:[$(pobjcc_CourseExamPaperEN.examCreateTime)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.createUserID) == false &&
    undefined !== pobjcc_CourseExamPaperEN.createUserID &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.createUserID) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[建立用户ID(createUserID)]的值:[$(pobjcc_CourseExamPaperEN.createUserID)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.isOpenToAllStu &&
    undefined !== pobjcc_CourseExamPaperEN.isOpenToAllStu &&
    tzDataType.isBoolean(pobjcc_CourseExamPaperEN.isOpenToAllStu) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[全校师生(isOpenToAllStu)]的值:[$(pobjcc_CourseExamPaperEN.isOpenToAllStu)], 非法,应该为布尔型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.isOpenToSchool &&
    undefined !== pobjcc_CourseExamPaperEN.isOpenToSchool &&
    tzDataType.isBoolean(pobjcc_CourseExamPaperEN.isOpenToSchool) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[全校师生公开(isOpenToSchool)]的值:[$(pobjcc_CourseExamPaperEN.isOpenToSchool)], 非法,应该为布尔型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.isOpenToSocial &&
    undefined !== pobjcc_CourseExamPaperEN.isOpenToSocial &&
    tzDataType.isBoolean(pobjcc_CourseExamPaperEN.isOpenToSocial) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[社会公众(isOpenToSocial)]的值:[$(pobjcc_CourseExamPaperEN.isOpenToSocial)], 非法,应该为布尔型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.courseChapterId) == false &&
    undefined !== pobjcc_CourseExamPaperEN.courseChapterId &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.courseChapterId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程章节ID(courseChapterId)]的值:[$(pobjcc_CourseExamPaperEN.courseChapterId)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.isAutoGeneQuestion &&
    undefined !== pobjcc_CourseExamPaperEN.isAutoGeneQuestion &&
    tzDataType.isBoolean(pobjcc_CourseExamPaperEN.isAutoGeneQuestion) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否自动生成题目(isAutoGeneQuestion)]的值:[$(pobjcc_CourseExamPaperEN.isAutoGeneQuestion)], 非法,应该为布尔型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.isCanMultiDo &&
    undefined !== pobjcc_CourseExamPaperEN.isCanMultiDo &&
    tzDataType.isBoolean(pobjcc_CourseExamPaperEN.isCanMultiDo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否可以做多次(isCanMultiDo)]的值:[$(pobjcc_CourseExamPaperEN.isCanMultiDo)], 非法,应该为布尔型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.updDate) == false &&
    undefined !== pobjcc_CourseExamPaperEN.updDate &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjcc_CourseExamPaperEN.updDate)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.updUserId) == false &&
    undefined !== pobjcc_CourseExamPaperEN.updUserId &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjcc_CourseExamPaperEN.updUserId)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.memo) == false &&
    undefined !== pobjcc_CourseExamPaperEN.memo &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjcc_CourseExamPaperEN.memo)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.courseId) == false &&
    pobjcc_CourseExamPaperEN.courseId != '[nuull]' &&
    GetStrLen(pobjcc_CourseExamPaperEN.courseId) != 8
  ) {
    throw '(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 考卷)!(clscc_CourseExamPaperBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.idXzMajor) == false &&
    pobjcc_CourseExamPaperEN.idXzMajor != '[nuull]' &&
    GetStrLen(pobjcc_CourseExamPaperEN.idXzMajor) != 8
  ) {
    throw '(errid:Watl000415)字段[专业流水号]作为外键字段,长度应该为8(In 考卷)!(clscc_CourseExamPaperBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function cc_CourseExamPaper_CheckProperty4Update(
  pobjcc_CourseExamPaperEN: clscc_CourseExamPaperEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.courseExamPaperId) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.courseExamPaperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[考卷流水号(courseExamPaperId)]的长度不能超过8(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.courseExamPaperId)(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.courseId) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.courseId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.courseId)(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.examPaperName) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.examPaperName) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[考卷名称(examPaperName)]的长度不能超过500(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.examPaperName)(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.examPaperTypeId) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.examPaperTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[试卷类型Id(examPaperTypeId)]的长度不能超过2(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.examPaperTypeId)(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.idXzMajor) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.idXzMajor) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[专业流水号(idXzMajor)]的长度不能超过8(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.idXzMajor)(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.paperDispModeId) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.paperDispModeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[试卷显示模式Id(paperDispModeId)]的长度不能超过4(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.paperDispModeId)(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.examCreateTime) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.examCreateTime) > 14
  ) {
    throw new Error(
      '(errid:Watl000416)字段[考卷建立时间(examCreateTime)]的长度不能超过14(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.examCreateTime)(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.createUserID) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.createUserID) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[建立用户ID(createUserID)]的长度不能超过20(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.createUserID)(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.courseChapterId) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.courseChapterId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程章节ID(courseChapterId)]的长度不能超过8(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.courseChapterId)(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.updDate) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.updDate)(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.updUserId) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.updUserId)(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.memo) == false &&
    GetStrLen(pobjcc_CourseExamPaperEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 考卷(cc_CourseExamPaper))!值:$(pobjcc_CourseExamPaperEN.memo)(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.courseExamPaperId) == false &&
    undefined !== pobjcc_CourseExamPaperEN.courseExamPaperId &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.courseExamPaperId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[考卷流水号(courseExamPaperId)]的值:[$(pobjcc_CourseExamPaperEN.courseExamPaperId)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.courseId) == false &&
    undefined !== pobjcc_CourseExamPaperEN.courseId &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.courseId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程Id(courseId)]的值:[$(pobjcc_CourseExamPaperEN.courseId)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.examPaperName) == false &&
    undefined !== pobjcc_CourseExamPaperEN.examPaperName &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.examPaperName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[考卷名称(examPaperName)]的值:[$(pobjcc_CourseExamPaperEN.examPaperName)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.paperIndex &&
    undefined !== pobjcc_CourseExamPaperEN.paperIndex &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.paperIndex) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[试卷序号(paperIndex)]的值:[$(pobjcc_CourseExamPaperEN.paperIndex)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.examPaperTypeId) == false &&
    undefined !== pobjcc_CourseExamPaperEN.examPaperTypeId &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.examPaperTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[试卷类型Id(examPaperTypeId)]的值:[$(pobjcc_CourseExamPaperEN.examPaperTypeId)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.isShow &&
    undefined !== pobjcc_CourseExamPaperEN.isShow &&
    tzDataType.isBoolean(pobjcc_CourseExamPaperEN.isShow) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否启用(isShow)]的值:[$(pobjcc_CourseExamPaperEN.isShow)], 非法,应该为布尔型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.totalScore &&
    undefined !== pobjcc_CourseExamPaperEN.totalScore &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.totalScore) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[总得分(totalScore)]的值:[$(pobjcc_CourseExamPaperEN.totalScore)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.viewCount &&
    undefined !== pobjcc_CourseExamPaperEN.viewCount &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.viewCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[浏览量(viewCount)]的值:[$(pobjcc_CourseExamPaperEN.viewCount)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.doneNumber &&
    undefined !== pobjcc_CourseExamPaperEN.doneNumber &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.doneNumber) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[已做人数(doneNumber)]的值:[$(pobjcc_CourseExamPaperEN.doneNumber)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.paperTime &&
    undefined !== pobjcc_CourseExamPaperEN.paperTime &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.paperTime) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[考试时间（分钟）(paperTime)]的值:[$(pobjcc_CourseExamPaperEN.paperTime)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.downloadNumber &&
    undefined !== pobjcc_CourseExamPaperEN.downloadNumber &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.downloadNumber) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[下载数目(downloadNumber)]的值:[$(pobjcc_CourseExamPaperEN.downloadNumber)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.collectionCount &&
    undefined !== pobjcc_CourseExamPaperEN.collectionCount &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.collectionCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[收藏数量(collectionCount)]的值:[$(pobjcc_CourseExamPaperEN.collectionCount)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.likeCount &&
    undefined !== pobjcc_CourseExamPaperEN.likeCount &&
    tzDataType.isNumber(pobjcc_CourseExamPaperEN.likeCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[资源喜欢数量(likeCount)]的值:[$(pobjcc_CourseExamPaperEN.likeCount)], 非法,应该为数值型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.idXzMajor) == false &&
    undefined !== pobjcc_CourseExamPaperEN.idXzMajor &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.idXzMajor) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[专业流水号(idXzMajor)]的值:[$(pobjcc_CourseExamPaperEN.idXzMajor)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.paperDispModeId) == false &&
    undefined !== pobjcc_CourseExamPaperEN.paperDispModeId &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.paperDispModeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[试卷显示模式Id(paperDispModeId)]的值:[$(pobjcc_CourseExamPaperEN.paperDispModeId)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.examCreateTime) == false &&
    undefined !== pobjcc_CourseExamPaperEN.examCreateTime &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.examCreateTime) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[考卷建立时间(examCreateTime)]的值:[$(pobjcc_CourseExamPaperEN.examCreateTime)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.createUserID) == false &&
    undefined !== pobjcc_CourseExamPaperEN.createUserID &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.createUserID) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[建立用户ID(createUserID)]的值:[$(pobjcc_CourseExamPaperEN.createUserID)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.isOpenToAllStu &&
    undefined !== pobjcc_CourseExamPaperEN.isOpenToAllStu &&
    tzDataType.isBoolean(pobjcc_CourseExamPaperEN.isOpenToAllStu) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[全校师生(isOpenToAllStu)]的值:[$(pobjcc_CourseExamPaperEN.isOpenToAllStu)], 非法,应该为布尔型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.isOpenToSchool &&
    undefined !== pobjcc_CourseExamPaperEN.isOpenToSchool &&
    tzDataType.isBoolean(pobjcc_CourseExamPaperEN.isOpenToSchool) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[全校师生公开(isOpenToSchool)]的值:[$(pobjcc_CourseExamPaperEN.isOpenToSchool)], 非法,应该为布尔型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.isOpenToSocial &&
    undefined !== pobjcc_CourseExamPaperEN.isOpenToSocial &&
    tzDataType.isBoolean(pobjcc_CourseExamPaperEN.isOpenToSocial) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[社会公众(isOpenToSocial)]的值:[$(pobjcc_CourseExamPaperEN.isOpenToSocial)], 非法,应该为布尔型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.courseChapterId) == false &&
    undefined !== pobjcc_CourseExamPaperEN.courseChapterId &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.courseChapterId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程章节ID(courseChapterId)]的值:[$(pobjcc_CourseExamPaperEN.courseChapterId)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.isAutoGeneQuestion &&
    undefined !== pobjcc_CourseExamPaperEN.isAutoGeneQuestion &&
    tzDataType.isBoolean(pobjcc_CourseExamPaperEN.isAutoGeneQuestion) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否自动生成题目(isAutoGeneQuestion)]的值:[$(pobjcc_CourseExamPaperEN.isAutoGeneQuestion)], 非法,应该为布尔型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseExamPaperEN.isCanMultiDo &&
    undefined !== pobjcc_CourseExamPaperEN.isCanMultiDo &&
    tzDataType.isBoolean(pobjcc_CourseExamPaperEN.isCanMultiDo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否可以做多次(isCanMultiDo)]的值:[$(pobjcc_CourseExamPaperEN.isCanMultiDo)], 非法,应该为布尔型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.updDate) == false &&
    undefined !== pobjcc_CourseExamPaperEN.updDate &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjcc_CourseExamPaperEN.updDate)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.updUserId) == false &&
    undefined !== pobjcc_CourseExamPaperEN.updUserId &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjcc_CourseExamPaperEN.updUserId)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.memo) == false &&
    undefined !== pobjcc_CourseExamPaperEN.memo &&
    tzDataType.isString(pobjcc_CourseExamPaperEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjcc_CourseExamPaperEN.memo)], 非法,应该为字符型(In 考卷(cc_CourseExamPaper))!(clscc_CourseExamPaperBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.courseId) == false &&
    pobjcc_CourseExamPaperEN.courseId != '[nuull]' &&
    GetStrLen(pobjcc_CourseExamPaperEN.courseId) != 8
  ) {
    throw '(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 考卷)!(clscc_CourseExamPaperBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjcc_CourseExamPaperEN.idXzMajor) == false &&
    pobjcc_CourseExamPaperEN.idXzMajor != '[nuull]' &&
    GetStrLen(pobjcc_CourseExamPaperEN.idXzMajor) != 8
  ) {
    throw '(errid:Watl000418)字段[专业流水号]作为外键字段,长度应该为8(In 考卷)!(clscc_CourseExamPaperBL:CheckPropertyNew)';
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
export function cc_CourseExamPaper_GetJSONStrByObj(
  pobjcc_CourseExamPaperEN: clscc_CourseExamPaperEN,
): string {
  pobjcc_CourseExamPaperEN.sfUpdFldSetStr = pobjcc_CourseExamPaperEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjcc_CourseExamPaperEN);
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
export function cc_CourseExamPaper_GetObjLstByJSONStr(
  strJSON: string,
): Array<clscc_CourseExamPaperEN> {
  let arrcc_CourseExamPaperObjLst = new Array<clscc_CourseExamPaperEN>();
  if (strJSON === '') {
    return arrcc_CourseExamPaperObjLst;
  }
  try {
    arrcc_CourseExamPaperObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrcc_CourseExamPaperObjLst;
  }
  return arrcc_CourseExamPaperObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_CourseExamPaperObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function cc_CourseExamPaper_GetObjLstByJSONObjLst(
  arrcc_CourseExamPaperObjLstS: Array<clscc_CourseExamPaperEN>,
): Array<clscc_CourseExamPaperEN> {
  const arrcc_CourseExamPaperObjLst = new Array<clscc_CourseExamPaperEN>();
  for (const objInFor of arrcc_CourseExamPaperObjLstS) {
    const obj1 = cc_CourseExamPaper_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrcc_CourseExamPaperObjLst.push(obj1);
  }
  return arrcc_CourseExamPaperObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function cc_CourseExamPaper_GetObjByJSONStr(strJSON: string): clscc_CourseExamPaperEN {
  let pobjcc_CourseExamPaperEN = new clscc_CourseExamPaperEN();
  if (strJSON === '') {
    return pobjcc_CourseExamPaperEN;
  }
  try {
    pobjcc_CourseExamPaperEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjcc_CourseExamPaperEN;
  }
  return pobjcc_CourseExamPaperEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function cc_CourseExamPaper_GetCombineCondition(
  objcc_CourseExamPaperCond: clscc_CourseExamPaperEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_CourseExamPaperId,
    ) == true
  ) {
    const strComparisonOpCourseExamPaperId: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_CourseExamPaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseExamPaperEN.con_CourseExamPaperId,
      objcc_CourseExamPaperCond.courseExamPaperId,
      strComparisonOpCourseExamPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_CourseId,
    ) == true
  ) {
    const strComparisonOpCourseId: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_CourseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseExamPaperEN.con_CourseId,
      objcc_CourseExamPaperCond.courseId,
      strComparisonOpCourseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_ExamPaperName,
    ) == true
  ) {
    const strComparisonOpExamPaperName: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_ExamPaperName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseExamPaperEN.con_ExamPaperName,
      objcc_CourseExamPaperCond.examPaperName,
      strComparisonOpExamPaperName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_PaperIndex,
    ) == true
  ) {
    const strComparisonOpPaperIndex: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_PaperIndex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clscc_CourseExamPaperEN.con_PaperIndex,
      objcc_CourseExamPaperCond.paperIndex,
      strComparisonOpPaperIndex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_ExamPaperTypeId,
    ) == true
  ) {
    const strComparisonOpExamPaperTypeId: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_ExamPaperTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseExamPaperEN.con_ExamPaperTypeId,
      objcc_CourseExamPaperCond.examPaperTypeId,
      strComparisonOpExamPaperTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_IsShow,
    ) == true
  ) {
    if (objcc_CourseExamPaperCond.isShow == true) {
      strWhereCond += Format(" And {0} = '1'", clscc_CourseExamPaperEN.con_IsShow);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscc_CourseExamPaperEN.con_IsShow);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_TotalScore,
    ) == true
  ) {
    const strComparisonOpTotalScore: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_TotalScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clscc_CourseExamPaperEN.con_TotalScore,
      objcc_CourseExamPaperCond.totalScore,
      strComparisonOpTotalScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_ViewCount,
    ) == true
  ) {
    const strComparisonOpViewCount: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_ViewCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clscc_CourseExamPaperEN.con_ViewCount,
      objcc_CourseExamPaperCond.viewCount,
      strComparisonOpViewCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_DoneNumber,
    ) == true
  ) {
    const strComparisonOpDoneNumber: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_DoneNumber];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clscc_CourseExamPaperEN.con_DoneNumber,
      objcc_CourseExamPaperCond.doneNumber,
      strComparisonOpDoneNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_PaperTime,
    ) == true
  ) {
    const strComparisonOpPaperTime: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_PaperTime];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clscc_CourseExamPaperEN.con_PaperTime,
      objcc_CourseExamPaperCond.paperTime,
      strComparisonOpPaperTime,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_DownloadNumber,
    ) == true
  ) {
    const strComparisonOpDownloadNumber: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_DownloadNumber];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clscc_CourseExamPaperEN.con_DownloadNumber,
      objcc_CourseExamPaperCond.downloadNumber,
      strComparisonOpDownloadNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_CollectionCount,
    ) == true
  ) {
    const strComparisonOpCollectionCount: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_CollectionCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clscc_CourseExamPaperEN.con_CollectionCount,
      objcc_CourseExamPaperCond.collectionCount,
      strComparisonOpCollectionCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_LikeCount,
    ) == true
  ) {
    const strComparisonOpLikeCount: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_LikeCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clscc_CourseExamPaperEN.con_LikeCount,
      objcc_CourseExamPaperCond.likeCount,
      strComparisonOpLikeCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_IdXzMajor,
    ) == true
  ) {
    const strComparisonOpIdXzMajor: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_IdXzMajor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseExamPaperEN.con_IdXzMajor,
      objcc_CourseExamPaperCond.idXzMajor,
      strComparisonOpIdXzMajor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_PaperDispModeId,
    ) == true
  ) {
    const strComparisonOpPaperDispModeId: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_PaperDispModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseExamPaperEN.con_PaperDispModeId,
      objcc_CourseExamPaperCond.paperDispModeId,
      strComparisonOpPaperDispModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_ExamCreateTime,
    ) == true
  ) {
    const strComparisonOpExamCreateTime: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_ExamCreateTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseExamPaperEN.con_ExamCreateTime,
      objcc_CourseExamPaperCond.examCreateTime,
      strComparisonOpExamCreateTime,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_CreateUserID,
    ) == true
  ) {
    const strComparisonOpCreateUserID: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_CreateUserID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseExamPaperEN.con_CreateUserID,
      objcc_CourseExamPaperCond.createUserID,
      strComparisonOpCreateUserID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_IsOpenToAllStu,
    ) == true
  ) {
    if (objcc_CourseExamPaperCond.isOpenToAllStu == true) {
      strWhereCond += Format(" And {0} = '1'", clscc_CourseExamPaperEN.con_IsOpenToAllStu);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscc_CourseExamPaperEN.con_IsOpenToAllStu);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_IsOpenToSchool,
    ) == true
  ) {
    if (objcc_CourseExamPaperCond.isOpenToSchool == true) {
      strWhereCond += Format(" And {0} = '1'", clscc_CourseExamPaperEN.con_IsOpenToSchool);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscc_CourseExamPaperEN.con_IsOpenToSchool);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_IsOpenToSocial,
    ) == true
  ) {
    if (objcc_CourseExamPaperCond.isOpenToSocial == true) {
      strWhereCond += Format(" And {0} = '1'", clscc_CourseExamPaperEN.con_IsOpenToSocial);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscc_CourseExamPaperEN.con_IsOpenToSocial);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_CourseChapterId,
    ) == true
  ) {
    const strComparisonOpCourseChapterId: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_CourseChapterId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseExamPaperEN.con_CourseChapterId,
      objcc_CourseExamPaperCond.courseChapterId,
      strComparisonOpCourseChapterId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_IsAutoGeneQuestion,
    ) == true
  ) {
    if (objcc_CourseExamPaperCond.isAutoGeneQuestion == true) {
      strWhereCond += Format(" And {0} = '1'", clscc_CourseExamPaperEN.con_IsAutoGeneQuestion);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscc_CourseExamPaperEN.con_IsAutoGeneQuestion);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_IsCanMultiDo,
    ) == true
  ) {
    if (objcc_CourseExamPaperCond.isCanMultiDo == true) {
      strWhereCond += Format(" And {0} = '1'", clscc_CourseExamPaperEN.con_IsCanMultiDo);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscc_CourseExamPaperEN.con_IsCanMultiDo);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseExamPaperEN.con_UpdDate,
      objcc_CourseExamPaperCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseExamPaperEN.con_UpdUserId,
      objcc_CourseExamPaperCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseExamPaperCond.dicFldComparisonOp,
      clscc_CourseExamPaperEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objcc_CourseExamPaperCond.dicFldComparisonOp[clscc_CourseExamPaperEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseExamPaperEN.con_Memo,
      objcc_CourseExamPaperCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--cc_CourseExamPaper(考卷),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strExamPaperName: 考卷名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function cc_CourseExamPaper_GetUniCondStr(
  objcc_CourseExamPaperEN: clscc_CourseExamPaperEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ExamPaperName = '{0}'", objcc_CourseExamPaperEN.examPaperName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--cc_CourseExamPaper(考卷),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strExamPaperName: 考卷名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function cc_CourseExamPaper_GetUniCondStr4Update(
  objcc_CourseExamPaperEN: clscc_CourseExamPaperEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and CourseExamPaperId <> '{0}'",
    objcc_CourseExamPaperEN.courseExamPaperId,
  );
  strWhereCond += Format(" and ExamPaperName = '{0}'", objcc_CourseExamPaperEN.examPaperName);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_CourseExamPaperENS:源对象
 * @param objcc_CourseExamPaperENT:目标对象
 */
export function cc_CourseExamPaper_CopyObjTo(
  objcc_CourseExamPaperENS: clscc_CourseExamPaperEN,
  objcc_CourseExamPaperENT: clscc_CourseExamPaperEN,
): void {
  objcc_CourseExamPaperENT.courseExamPaperId = objcc_CourseExamPaperENS.courseExamPaperId; //考卷流水号
  objcc_CourseExamPaperENT.courseId = objcc_CourseExamPaperENS.courseId; //课程Id
  objcc_CourseExamPaperENT.examPaperName = objcc_CourseExamPaperENS.examPaperName; //考卷名称
  objcc_CourseExamPaperENT.paperIndex = objcc_CourseExamPaperENS.paperIndex; //试卷序号
  objcc_CourseExamPaperENT.examPaperTypeId = objcc_CourseExamPaperENS.examPaperTypeId; //试卷类型Id
  objcc_CourseExamPaperENT.isShow = objcc_CourseExamPaperENS.isShow; //是否启用
  objcc_CourseExamPaperENT.totalScore = objcc_CourseExamPaperENS.totalScore; //总得分
  objcc_CourseExamPaperENT.viewCount = objcc_CourseExamPaperENS.viewCount; //浏览量
  objcc_CourseExamPaperENT.doneNumber = objcc_CourseExamPaperENS.doneNumber; //已做人数
  objcc_CourseExamPaperENT.paperTime = objcc_CourseExamPaperENS.paperTime; //考试时间（分钟）
  objcc_CourseExamPaperENT.downloadNumber = objcc_CourseExamPaperENS.downloadNumber; //下载数目
  objcc_CourseExamPaperENT.collectionCount = objcc_CourseExamPaperENS.collectionCount; //收藏数量
  objcc_CourseExamPaperENT.likeCount = objcc_CourseExamPaperENS.likeCount; //资源喜欢数量
  objcc_CourseExamPaperENT.idXzMajor = objcc_CourseExamPaperENS.idXzMajor; //专业流水号
  objcc_CourseExamPaperENT.paperDispModeId = objcc_CourseExamPaperENS.paperDispModeId; //试卷显示模式Id
  objcc_CourseExamPaperENT.examCreateTime = objcc_CourseExamPaperENS.examCreateTime; //考卷建立时间
  objcc_CourseExamPaperENT.createUserID = objcc_CourseExamPaperENS.createUserID; //建立用户ID
  objcc_CourseExamPaperENT.isOpenToAllStu = objcc_CourseExamPaperENS.isOpenToAllStu; //全校师生
  objcc_CourseExamPaperENT.isOpenToSchool = objcc_CourseExamPaperENS.isOpenToSchool; //全校师生公开
  objcc_CourseExamPaperENT.isOpenToSocial = objcc_CourseExamPaperENS.isOpenToSocial; //社会公众
  objcc_CourseExamPaperENT.courseChapterId = objcc_CourseExamPaperENS.courseChapterId; //课程章节ID
  objcc_CourseExamPaperENT.isAutoGeneQuestion = objcc_CourseExamPaperENS.isAutoGeneQuestion; //是否自动生成题目
  objcc_CourseExamPaperENT.isCanMultiDo = objcc_CourseExamPaperENS.isCanMultiDo; //是否可以做多次
  objcc_CourseExamPaperENT.updDate = objcc_CourseExamPaperENS.updDate; //修改日期
  objcc_CourseExamPaperENT.updUserId = objcc_CourseExamPaperENS.updUserId; //修改用户Id
  objcc_CourseExamPaperENT.memo = objcc_CourseExamPaperENS.memo; //备注
  objcc_CourseExamPaperENT.sfUpdFldSetStr = objcc_CourseExamPaperENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_CourseExamPaperENS:源对象
 * @param objcc_CourseExamPaperENT:目标对象
 */
export function cc_CourseExamPaper_GetObjFromJsonObj(
  objcc_CourseExamPaperENS: clscc_CourseExamPaperEN,
): clscc_CourseExamPaperEN {
  const objcc_CourseExamPaperENT: clscc_CourseExamPaperEN = new clscc_CourseExamPaperEN();
  ObjectAssign(objcc_CourseExamPaperENT, objcc_CourseExamPaperENS);
  return objcc_CourseExamPaperENT;
}
