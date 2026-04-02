/**
 * 类名:clscc_CourseChapterWApi
 * 表名:cc_CourseChapter(01120060)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:44:11
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
 * 课程章节(cc_CourseChapter)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年03月18日.
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
import { clscc_CourseChapterEN } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cc_CourseChapter_Controller = 'cc_CourseChapterApi';
export const cc_CourseChapter_ConstructorName = 'cc_CourseChapter';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCourseChapterId:关键字
 * @returns 对象
 **/
export async function cc_CourseChapter_GetObjByCourseChapterIdAsync(
  strCourseChapterId: string,
): Promise<clscc_CourseChapterEN | null> {
  const strThisFuncName = 'GetObjByCourseChapterIdAsync';

  if (IsNullOrEmpty(strCourseChapterId) == true) {
    const strMsg = Format(
      '参数:[strCourseChapterId]不能为空!(In clscc_CourseChapterWApi.GetObjByCourseChapterIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseChapterId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseChapterId]的长度:[{0}]不正确!(clscc_CourseChapterWApi.GetObjByCourseChapterIdAsync)',
      strCourseChapterId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCourseChapterId';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseChapterId,
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
      const objcc_CourseChapter = cc_CourseChapter_GetObjFromJsonObj(returnObj);
      return objcc_CourseChapter;
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param strCourseChapterId:所给的关键字
 * @returns 对象
 */
export async function cc_CourseChapter_GetObjByCourseChapterIdCache(
  strCourseChapterId: string,
  strCourseId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCourseChapterIdCache';

  if (IsNullOrEmpty(strCourseChapterId) == true) {
    const strMsg = Format(
      '参数:[strCourseChapterId]不能为空!(In clscc_CourseChapterWApi.GetObjByCourseChapterIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseChapterId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseChapterId]的长度:[{0}]不正确!(clscc_CourseChapterWApi.GetObjByCourseChapterIdCache)',
      strCourseChapterId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstCache(strCourseId);
  try {
    const arrcc_CourseChapterSel = arrcc_CourseChapterObjLstCache.filter(
      (x) => x.courseChapterId == strCourseChapterId,
    );
    let objcc_CourseChapter: clscc_CourseChapterEN;
    if (arrcc_CourseChapterSel.length > 0) {
      objcc_CourseChapter = arrcc_CourseChapterSel[0];
      return objcc_CourseChapter;
    } else {
      if (bolTryAsyncOnce == true) {
        const objcc_CourseChapterConst = await cc_CourseChapter_GetObjByCourseChapterIdAsync(
          strCourseChapterId,
        );
        if (objcc_CourseChapterConst != null) {
          cc_CourseChapter_ReFreshThisCache(strCourseId);
          return objcc_CourseChapterConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCourseChapterId,
      cc_CourseChapter_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCourseChapterId:所给的关键字
 * @returns 对象
 */
export async function cc_CourseChapter_GetObjByCourseChapterIdlocalStorage(
  strCourseChapterId: string,
) {
  const strThisFuncName = 'GetObjByCourseChapterIdlocalStorage';

  if (IsNullOrEmpty(strCourseChapterId) == true) {
    const strMsg = Format(
      '参数:[strCourseChapterId]不能为空!(In clscc_CourseChapterWApi.GetObjByCourseChapterIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseChapterId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseChapterId]的长度:[{0}]不正确!(clscc_CourseChapterWApi.GetObjByCourseChapterIdlocalStorage)',
      strCourseChapterId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clscc_CourseChapterEN._CurrTabName, strCourseChapterId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objcc_CourseChapterCache: clscc_CourseChapterEN = JSON.parse(strTempObj);
    return objcc_CourseChapterCache;
  }
  try {
    const objcc_CourseChapter = await cc_CourseChapter_GetObjByCourseChapterIdAsync(
      strCourseChapterId,
    );
    if (objcc_CourseChapter != null) {
      localStorage.setItem(strKey, JSON.stringify(objcc_CourseChapter));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objcc_CourseChapter;
    }
    return objcc_CourseChapter;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCourseChapterId,
      cc_CourseChapter_ConstructorName,
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
 * @param objcc_CourseChapter:所给的对象
 * @returns 对象
 */
export async function cc_CourseChapter_UpdateObjInLstCache(
  objcc_CourseChapter: clscc_CourseChapterEN,
  strCourseId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstCache(strCourseId);
    const obj = arrcc_CourseChapterObjLstCache.find(
      (x) =>
        x.courseId == objcc_CourseChapter.courseId &&
        x.courseChapterName == objcc_CourseChapter.courseChapterName,
    );
    if (obj != null) {
      objcc_CourseChapter.courseChapterId = obj.courseChapterId;
      ObjectAssign(obj, objcc_CourseChapter);
    } else {
      arrcc_CourseChapterObjLstCache.push(objcc_CourseChapter);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      cc_CourseChapter_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCourseChapterId:所给的关键字
 * @returns 对象
 */
export async function cc_CourseChapter_GetNameByCourseChapterIdCache(
  strCourseChapterId: string,
  strCourseId: string,
) {
  if (IsNullOrEmpty(strCourseChapterId) == true) {
    const strMsg = Format(
      '参数:[strCourseChapterId]不能为空!(In clscc_CourseChapterWApi.GetNameByCourseChapterIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseChapterId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseChapterId]的长度:[{0}]不正确!(clscc_CourseChapterWApi.GetNameByCourseChapterIdCache)',
      strCourseChapterId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstCache(strCourseId);
  if (arrcc_CourseChapterObjLstCache == null) return '';
  try {
    const arrcc_CourseChapterSel = arrcc_CourseChapterObjLstCache.filter(
      (x) => x.courseChapterId == strCourseChapterId,
    );
    let objcc_CourseChapter: clscc_CourseChapterEN;
    if (arrcc_CourseChapterSel.length > 0) {
      objcc_CourseChapter = arrcc_CourseChapterSel[0];
      return objcc_CourseChapter.courseChapterName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strCourseChapterId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strCourseId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function cc_CourseChapter_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strCourseIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCourseIdClassfy) == true) {
    const strMsg = Format('参数:[strCourseIdClassfy]不能为空!(In clscc_CourseChapterWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clscc_CourseChapterWApi.func)',
      strCourseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clscc_CourseChapterEN.con_CourseChapterId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clscc_CourseChapterEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clscc_CourseChapterEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCourseChapterId = strInValue;
  if (IsNullOrEmpty(strCourseChapterId) == true) {
    return '';
  }
  const objcc_CourseChapter = await cc_CourseChapter_GetObjByCourseChapterIdCache(
    strCourseChapterId,
    strCourseIdClassfy,
  );
  if (objcc_CourseChapter == null) return '';
  if (objcc_CourseChapter.GetFldValue(strOutFldName) == null) return '';
  return objcc_CourseChapter.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_CourseChapter_SortFunDefa(
  a: clscc_CourseChapterEN,
  b: clscc_CourseChapterEN,
): number {
  return a.courseChapterId.localeCompare(b.courseChapterId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_CourseChapter_SortFunDefa2Fld(
  a: clscc_CourseChapterEN,
  b: clscc_CourseChapterEN,
): number {
  if (a.courseChapterName == b.courseChapterName) return a.chapterId.localeCompare(b.chapterId);
  else return a.courseChapterName.localeCompare(b.courseChapterName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_CourseChapter_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscc_CourseChapterEN.con_CourseChapterId:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          return a.courseChapterId.localeCompare(b.courseChapterId);
        };
      case clscc_CourseChapterEN.con_CourseChapterName:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          return a.courseChapterName.localeCompare(b.courseChapterName);
        };
      case clscc_CourseChapterEN.con_ChapterId:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (a.chapterId == null) return -1;
          if (b.chapterId == null) return 1;
          return a.chapterId.localeCompare(b.chapterId);
        };
      case clscc_CourseChapterEN.con_SectionId:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (a.sectionId == null) return -1;
          if (b.sectionId == null) return 1;
          return a.sectionId.localeCompare(b.sectionId);
        };
      case clscc_CourseChapterEN.con_ChapterName:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (a.chapterName == null) return -1;
          if (b.chapterName == null) return 1;
          return a.chapterName.localeCompare(b.chapterName);
        };
      case clscc_CourseChapterEN.con_SectionName:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (a.sectionName == null) return -1;
          if (b.sectionName == null) return 1;
          return a.sectionName.localeCompare(b.sectionName);
        };
      case clscc_CourseChapterEN.con_ChapterNameSim:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (a.chapterNameSim == null) return -1;
          if (b.chapterNameSim == null) return 1;
          return a.chapterNameSim.localeCompare(b.chapterNameSim);
        };
      case clscc_CourseChapterEN.con_SectionNameSim:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (a.sectionNameSim == null) return -1;
          if (b.sectionNameSim == null) return 1;
          return a.sectionNameSim.localeCompare(b.sectionNameSim);
        };
      case clscc_CourseChapterEN.con_ChapterContent:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (a.chapterContent == null) return -1;
          if (b.chapterContent == null) return 1;
          return a.chapterContent.localeCompare(b.chapterContent);
        };
      case clscc_CourseChapterEN.con_CourseId:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          return a.courseId.localeCompare(b.courseId);
        };
      case clscc_CourseChapterEN.con_ParentNodeId:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          return a.parentNodeId.localeCompare(b.parentNodeId);
        };
      case clscc_CourseChapterEN.con_IsOpenToAllStu:
        return (a: clscc_CourseChapterEN) => {
          if (a.isOpenToAllStu == true) return 1;
          else return -1;
        };
      case clscc_CourseChapterEN.con_IsOpenToSchool:
        return (a: clscc_CourseChapterEN) => {
          if (a.isOpenToSchool == true) return 1;
          else return -1;
        };
      case clscc_CourseChapterEN.con_IsOpenToSocial:
        return (a: clscc_CourseChapterEN) => {
          if (a.isOpenToSocial == true) return 1;
          else return -1;
        };
      case clscc_CourseChapterEN.con_IsMustMenu:
        return (a: clscc_CourseChapterEN) => {
          if (a.isMustMenu == true) return 1;
          else return -1;
        };
      case clscc_CourseChapterEN.con_ThemeName:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (a.themeName == null) return -1;
          if (b.themeName == null) return 1;
          return a.themeName.localeCompare(b.themeName);
        };
      case clscc_CourseChapterEN.con_IsFile:
        return (a: clscc_CourseChapterEN) => {
          if (a.isFile == true) return 1;
          else return -1;
        };
      case clscc_CourseChapterEN.con_IsUse:
        return (a: clscc_CourseChapterEN) => {
          if (a.isUse == true) return 1;
          else return -1;
        };
      case clscc_CourseChapterEN.con_ViewCount:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          return a.viewCount - b.viewCount;
        };
      case clscc_CourseChapterEN.con_CourseChapterReferred:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (a.courseChapterReferred == null) return -1;
          if (b.courseChapterReferred == null) return 1;
          return a.courseChapterReferred.localeCompare(b.courseChapterReferred);
        };
      case clscc_CourseChapterEN.con_OrderNum:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          return a.orderNum - b.orderNum;
        };
      case clscc_CourseChapterEN.con_CreateDate:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (a.createDate == null) return -1;
          if (b.createDate == null) return 1;
          return a.createDate.localeCompare(b.createDate);
        };
      case clscc_CourseChapterEN.con_EditPeople:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (a.editPeople == null) return -1;
          if (b.editPeople == null) return 1;
          return a.editPeople.localeCompare(b.editPeople);
        };
      case clscc_CourseChapterEN.con_UpdDate:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clscc_CourseChapterEN.con_Memo:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[cc_CourseChapter]中不存在!(in ${cc_CourseChapter_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clscc_CourseChapterEN.con_CourseChapterId:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          return b.courseChapterId.localeCompare(a.courseChapterId);
        };
      case clscc_CourseChapterEN.con_CourseChapterName:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          return b.courseChapterName.localeCompare(a.courseChapterName);
        };
      case clscc_CourseChapterEN.con_ChapterId:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (b.chapterId == null) return -1;
          if (a.chapterId == null) return 1;
          return b.chapterId.localeCompare(a.chapterId);
        };
      case clscc_CourseChapterEN.con_SectionId:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (b.sectionId == null) return -1;
          if (a.sectionId == null) return 1;
          return b.sectionId.localeCompare(a.sectionId);
        };
      case clscc_CourseChapterEN.con_ChapterName:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (b.chapterName == null) return -1;
          if (a.chapterName == null) return 1;
          return b.chapterName.localeCompare(a.chapterName);
        };
      case clscc_CourseChapterEN.con_SectionName:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (b.sectionName == null) return -1;
          if (a.sectionName == null) return 1;
          return b.sectionName.localeCompare(a.sectionName);
        };
      case clscc_CourseChapterEN.con_ChapterNameSim:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (b.chapterNameSim == null) return -1;
          if (a.chapterNameSim == null) return 1;
          return b.chapterNameSim.localeCompare(a.chapterNameSim);
        };
      case clscc_CourseChapterEN.con_SectionNameSim:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (b.sectionNameSim == null) return -1;
          if (a.sectionNameSim == null) return 1;
          return b.sectionNameSim.localeCompare(a.sectionNameSim);
        };
      case clscc_CourseChapterEN.con_ChapterContent:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (b.chapterContent == null) return -1;
          if (a.chapterContent == null) return 1;
          return b.chapterContent.localeCompare(a.chapterContent);
        };
      case clscc_CourseChapterEN.con_CourseId:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          return b.courseId.localeCompare(a.courseId);
        };
      case clscc_CourseChapterEN.con_ParentNodeId:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          return b.parentNodeId.localeCompare(a.parentNodeId);
        };
      case clscc_CourseChapterEN.con_IsOpenToAllStu:
        return (b: clscc_CourseChapterEN) => {
          if (b.isOpenToAllStu == true) return 1;
          else return -1;
        };
      case clscc_CourseChapterEN.con_IsOpenToSchool:
        return (b: clscc_CourseChapterEN) => {
          if (b.isOpenToSchool == true) return 1;
          else return -1;
        };
      case clscc_CourseChapterEN.con_IsOpenToSocial:
        return (b: clscc_CourseChapterEN) => {
          if (b.isOpenToSocial == true) return 1;
          else return -1;
        };
      case clscc_CourseChapterEN.con_IsMustMenu:
        return (b: clscc_CourseChapterEN) => {
          if (b.isMustMenu == true) return 1;
          else return -1;
        };
      case clscc_CourseChapterEN.con_ThemeName:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (b.themeName == null) return -1;
          if (a.themeName == null) return 1;
          return b.themeName.localeCompare(a.themeName);
        };
      case clscc_CourseChapterEN.con_IsFile:
        return (b: clscc_CourseChapterEN) => {
          if (b.isFile == true) return 1;
          else return -1;
        };
      case clscc_CourseChapterEN.con_IsUse:
        return (b: clscc_CourseChapterEN) => {
          if (b.isUse == true) return 1;
          else return -1;
        };
      case clscc_CourseChapterEN.con_ViewCount:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          return b.viewCount - a.viewCount;
        };
      case clscc_CourseChapterEN.con_CourseChapterReferred:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (b.courseChapterReferred == null) return -1;
          if (a.courseChapterReferred == null) return 1;
          return b.courseChapterReferred.localeCompare(a.courseChapterReferred);
        };
      case clscc_CourseChapterEN.con_OrderNum:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          return b.orderNum - a.orderNum;
        };
      case clscc_CourseChapterEN.con_CreateDate:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (b.createDate == null) return -1;
          if (a.createDate == null) return 1;
          return b.createDate.localeCompare(a.createDate);
        };
      case clscc_CourseChapterEN.con_EditPeople:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (b.editPeople == null) return -1;
          if (a.editPeople == null) return 1;
          return b.editPeople.localeCompare(a.editPeople);
        };
      case clscc_CourseChapterEN.con_UpdDate:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clscc_CourseChapterEN.con_Memo:
        return (a: clscc_CourseChapterEN, b: clscc_CourseChapterEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[cc_CourseChapter]中不存在!(in ${cc_CourseChapter_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function cc_CourseChapter_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clscc_CourseChapterEN.con_CourseChapterId:
      return (obj: clscc_CourseChapterEN) => {
        return obj.courseChapterId === value;
      };
    case clscc_CourseChapterEN.con_CourseChapterName:
      return (obj: clscc_CourseChapterEN) => {
        return obj.courseChapterName === value;
      };
    case clscc_CourseChapterEN.con_ChapterId:
      return (obj: clscc_CourseChapterEN) => {
        return obj.chapterId === value;
      };
    case clscc_CourseChapterEN.con_SectionId:
      return (obj: clscc_CourseChapterEN) => {
        return obj.sectionId === value;
      };
    case clscc_CourseChapterEN.con_ChapterName:
      return (obj: clscc_CourseChapterEN) => {
        return obj.chapterName === value;
      };
    case clscc_CourseChapterEN.con_SectionName:
      return (obj: clscc_CourseChapterEN) => {
        return obj.sectionName === value;
      };
    case clscc_CourseChapterEN.con_ChapterNameSim:
      return (obj: clscc_CourseChapterEN) => {
        return obj.chapterNameSim === value;
      };
    case clscc_CourseChapterEN.con_SectionNameSim:
      return (obj: clscc_CourseChapterEN) => {
        return obj.sectionNameSim === value;
      };
    case clscc_CourseChapterEN.con_ChapterContent:
      return (obj: clscc_CourseChapterEN) => {
        return obj.chapterContent === value;
      };
    case clscc_CourseChapterEN.con_CourseId:
      return (obj: clscc_CourseChapterEN) => {
        return obj.courseId === value;
      };
    case clscc_CourseChapterEN.con_ParentNodeId:
      return (obj: clscc_CourseChapterEN) => {
        return obj.parentNodeId === value;
      };
    case clscc_CourseChapterEN.con_IsOpenToAllStu:
      return (obj: clscc_CourseChapterEN) => {
        return obj.isOpenToAllStu === value;
      };
    case clscc_CourseChapterEN.con_IsOpenToSchool:
      return (obj: clscc_CourseChapterEN) => {
        return obj.isOpenToSchool === value;
      };
    case clscc_CourseChapterEN.con_IsOpenToSocial:
      return (obj: clscc_CourseChapterEN) => {
        return obj.isOpenToSocial === value;
      };
    case clscc_CourseChapterEN.con_IsMustMenu:
      return (obj: clscc_CourseChapterEN) => {
        return obj.isMustMenu === value;
      };
    case clscc_CourseChapterEN.con_ThemeName:
      return (obj: clscc_CourseChapterEN) => {
        return obj.themeName === value;
      };
    case clscc_CourseChapterEN.con_IsFile:
      return (obj: clscc_CourseChapterEN) => {
        return obj.isFile === value;
      };
    case clscc_CourseChapterEN.con_IsUse:
      return (obj: clscc_CourseChapterEN) => {
        return obj.isUse === value;
      };
    case clscc_CourseChapterEN.con_ViewCount:
      return (obj: clscc_CourseChapterEN) => {
        return obj.viewCount === value;
      };
    case clscc_CourseChapterEN.con_CourseChapterReferred:
      return (obj: clscc_CourseChapterEN) => {
        return obj.courseChapterReferred === value;
      };
    case clscc_CourseChapterEN.con_OrderNum:
      return (obj: clscc_CourseChapterEN) => {
        return obj.orderNum === value;
      };
    case clscc_CourseChapterEN.con_CreateDate:
      return (obj: clscc_CourseChapterEN) => {
        return obj.createDate === value;
      };
    case clscc_CourseChapterEN.con_EditPeople:
      return (obj: clscc_CourseChapterEN) => {
        return obj.editPeople === value;
      };
    case clscc_CourseChapterEN.con_UpdDate:
      return (obj: clscc_CourseChapterEN) => {
        return obj.updDate === value;
      };
    case clscc_CourseChapterEN.con_Memo:
      return (obj: clscc_CourseChapterEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[cc_CourseChapter]中不存在!(in ${cc_CourseChapter_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strCourseId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function cc_CourseChapter_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCourseIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCourseIdClassfy) == true) {
    const strMsg = Format('参数:[strCourseIdClassfy]不能为空!(In clscc_CourseChapterWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clscc_CourseChapterWApi.funcKey)',
      strCourseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clscc_CourseChapterEN.con_CourseChapterId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrcc_CourseChapter = await cc_CourseChapter_GetObjLstCache(strCourseIdClassfy);
  if (arrcc_CourseChapter == null) return [];
  let arrcc_CourseChapterSel = arrcc_CourseChapter;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrcc_CourseChapterSel.length == 0) return [];
  return arrcc_CourseChapterSel.map((x) => x.courseChapterId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function cc_CourseChapter_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function cc_CourseChapter_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldName,
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const arrId = data.returnStrLst.split(',');
      return arrId;
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clscc_CourseChapterEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
      const objcc_CourseChapter = cc_CourseChapter_GetObjFromJsonObj(returnObj);
      return objcc_CourseChapter;
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_GetObjLstClientCache(strCourseId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clscc_CourseChapterEN.WhereFormat) == false) {
    strWhereCond = Format(clscc_CourseChapterEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("CourseId='{0}'", strCourseId);
  }
  const strKey = Format('{0}_{1}', clscc_CourseChapterEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clscc_CourseChapterEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_CourseChapterEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrcc_CourseChapterExObjLstCache: Array<clscc_CourseChapterEN> = CacheHelper.Get(strKey);
    const arrcc_CourseChapterObjLstT = cc_CourseChapter_GetObjLstByJSONObjLst(
      arrcc_CourseChapterExObjLstCache,
    );
    return arrcc_CourseChapterObjLstT;
  }
  try {
    const arrcc_CourseChapterExObjLst = await cc_CourseChapter_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrcc_CourseChapterExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_CourseChapterExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_CourseChapterExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_GetObjLstlocalStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clscc_CourseChapterEN.WhereFormat) == false) {
    strWhereCond = Format(clscc_CourseChapterEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("{0}='{1}'", clscc_CourseChapterEN.con_CourseId, strCourseId);
  }
  const strKey = Format('{0}_{1}', clscc_CourseChapterEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clscc_CourseChapterEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_CourseChapterEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrcc_CourseChapterExObjLstCache: Array<clscc_CourseChapterEN> =
      JSON.parse(strTempObjLst);
    const arrcc_CourseChapterObjLstT = cc_CourseChapter_GetObjLstByJSONObjLst(
      arrcc_CourseChapterExObjLstCache,
    );
    return arrcc_CourseChapterObjLstT;
  }
  try {
    const arrcc_CourseChapterExObjLst = await cc_CourseChapter_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrcc_CourseChapterExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_CourseChapterExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_CourseChapterExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_GetObjLstlocalStoragePureCache(strCourseId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clscc_CourseChapterEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrcc_CourseChapterObjLstCache: Array<clscc_CourseChapterEN> = JSON.parse(strTempObjLst);
    return arrcc_CourseChapterObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function cc_CourseChapter_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clscc_CourseChapterEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
          cc_CourseChapter_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseChapter_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_GetObjLstsessionStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clscc_CourseChapterEN.WhereFormat) == false) {
    strWhereCond = Format(clscc_CourseChapterEN.WhereFormat, strCourseId);
  } else {
    strWhereCond = Format("{0}='{1}'", clscc_CourseChapterEN.con_CourseId, strCourseId);
  }
  const strKey = Format('{0}_{1}', clscc_CourseChapterEN._CurrTabName, strCourseId);
  if (IsNullOrEmpty(clscc_CourseChapterEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscc_CourseChapterEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrcc_CourseChapterExObjLstCache: Array<clscc_CourseChapterEN> =
      JSON.parse(strTempObjLst);
    const arrcc_CourseChapterObjLstT = cc_CourseChapter_GetObjLstByJSONObjLst(
      arrcc_CourseChapterExObjLstCache,
    );
    return arrcc_CourseChapterObjLstT;
  }
  try {
    const arrcc_CourseChapterExObjLst = await cc_CourseChapter_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrcc_CourseChapterExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcc_CourseChapterExObjLst.length,
    );
    console.log(strInfo);
    return arrcc_CourseChapterExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_GetObjLstsessionStoragePureCache(strCourseId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clscc_CourseChapterEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrcc_CourseChapterObjLstCache: Array<clscc_CourseChapterEN> = JSON.parse(strTempObjLst);
    return arrcc_CourseChapterObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function cc_CourseChapter_GetObjLstCache(
  strCourseId: string,
): Promise<Array<clscc_CourseChapterEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clscc_CourseChapterWApi.cc_CourseChapter_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clscc_CourseChapterWApi.cc_CourseChapter_GetObjLstCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrcc_CourseChapterObjLstCache;
  switch (clscc_CourseChapterEN.CacheModeId) {
    case '04': //sessionStorage
      arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstsessionStorage(strCourseId);
      break;
    case '03': //localStorage
      arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstlocalStorage(strCourseId);
      break;
    case '02': //ClientCache
      arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstClientCache(strCourseId);
      break;
    default:
      arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstClientCache(strCourseId);
      break;
  }
  return arrcc_CourseChapterObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function cc_CourseChapter_GetObjLstPureCache(strCourseId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrcc_CourseChapterObjLstCache;
  switch (clscc_CourseChapterEN.CacheModeId) {
    case '04': //sessionStorage
      arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstsessionStoragePureCache(
        strCourseId,
      );
      break;
    case '03': //localStorage
      arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstlocalStoragePureCache(
        strCourseId,
      );
      break;
    case '02': //ClientCache
      arrcc_CourseChapterObjLstCache = null;
      break;
    default:
      arrcc_CourseChapterObjLstCache = null;
      break;
  }
  return arrcc_CourseChapterObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCourseChapterIdCond:条件对象
 * @returns 对象列表子集
 */
export async function cc_CourseChapter_GetSubObjLstCache(
  objcc_CourseChapterCond: clscc_CourseChapterEN,
  strCourseId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstCache(strCourseId);
  let arrcc_CourseChapterSel = arrcc_CourseChapterObjLstCache;
  if (
    objcc_CourseChapterCond.sfFldComparisonOp == null ||
    objcc_CourseChapterCond.sfFldComparisonOp == ''
  )
    return arrcc_CourseChapterSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_CourseChapterCond.sfFldComparisonOp,
  );
  //console.log("clscc_CourseChapterWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_CourseChapterCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_CourseChapterCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrcc_CourseChapterSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objcc_CourseChapterCond),
      cc_CourseChapter_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseChapterEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCourseChapterId:关键字列表
 * @returns 对象列表
 **/
export async function cc_CourseChapter_GetObjLstByCourseChapterIdLstAsync(
  arrCourseChapterId: Array<string>,
): Promise<Array<clscc_CourseChapterEN>> {
  const strThisFuncName = 'GetObjLstByCourseChapterIdLstAsync';
  const strAction = 'GetObjLstByCourseChapterIdLst';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCourseChapterId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cc_CourseChapter_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseChapter_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param arrstrCourseChapterIdLst:关键字列表
 * @returns 对象列表
 */
export async function cc_CourseChapter_GetObjLstByCourseChapterIdLstCache(
  arrCourseChapterIdLst: Array<string>,
  strCourseId: string,
) {
  const strThisFuncName = 'GetObjLstByCourseChapterIdLstCache';
  try {
    const arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstCache(strCourseId);
    const arrcc_CourseChapterSel = arrcc_CourseChapterObjLstCache.filter(
      (x) => arrCourseChapterIdLst.indexOf(x.courseChapterId) > -1,
    );
    return arrcc_CourseChapterSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCourseChapterIdLst.join(','),
      cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clscc_CourseChapterEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
          cc_CourseChapter_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseChapter_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clscc_CourseChapterEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
          cc_CourseChapter_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseChapter_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clscc_CourseChapterEN>();
  const arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstCache(strCourseId);
  if (arrcc_CourseChapterObjLstCache.length == 0) return arrcc_CourseChapterObjLstCache;
  let arrcc_CourseChapterSel = arrcc_CourseChapterObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objcc_CourseChapterCond = new clscc_CourseChapterEN();
  ObjectAssign(objcc_CourseChapterCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clscc_CourseChapterWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_CourseChapterCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_CourseChapterSel.length == 0) return arrcc_CourseChapterSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_CourseChapterSel = arrcc_CourseChapterSel.sort(
        cc_CourseChapter_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_CourseChapterSel = arrcc_CourseChapterSel.sort(objPagerPara.sortFun);
    }
    arrcc_CourseChapterSel = arrcc_CourseChapterSel.slice(intStart, intEnd);
    return arrcc_CourseChapterSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_CourseChapter_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseChapterEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function cc_CourseChapter_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_CourseChapterEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clscc_CourseChapterEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
          cc_CourseChapter_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = cc_CourseChapter_GetObjLstByJSONObjLst(returnObjLst);
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param strCourseChapterId:关键字
 * @returns 获取删除的结果
 **/
export async function cc_CourseChapter_DelRecordAsync(strCourseChapterId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strCourseChapterId);

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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param arrCourseChapterId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function cc_CourseChapter_Delcc_CourseChaptersAsync(
  arrCourseChapterId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delcc_CourseChaptersAsync';
  const strAction = 'Delcc_CourseChapters';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCourseChapterId, config);
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_Delcc_CourseChaptersByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delcc_CourseChaptersByCondAsync';
  const strAction = 'Delcc_CourseChaptersByCond';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param objcc_CourseChapterEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_CourseChapter_AddNewRecordAsync(
  objcc_CourseChapterEN: clscc_CourseChapterEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objcc_CourseChapterEN);
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseChapterEN, config);
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param objcc_CourseChapterEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_CourseChapter_AddNewRecordWithMaxIdAsync(
  objcc_CourseChapterEN: clscc_CourseChapterEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseChapterEN, config);
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param objcc_CourseChapterEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_CourseChapter_GoTopAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param objcc_CourseChapterEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_CourseChapter_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objcc_CourseChapterEN);
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param objcc_CourseChapterEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_CourseChapter_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objcc_CourseChapterEN);
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param objcc_CourseChapterEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_CourseChapter_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objcc_CourseChapterEN);
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param objcc_CourseChapterEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function cc_CourseChapter_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objcc_CourseChapterEN);
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param objcc_CourseChapterEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function cc_CourseChapter_AddNewRecordWithReturnKeyAsync(
  objcc_CourseChapterEN: clscc_CourseChapterEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseChapterEN, config);
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param objcc_CourseChapterEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function cc_CourseChapter_UpdateRecordAsync(
  objcc_CourseChapterEN: clscc_CourseChapterEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objcc_CourseChapterEN.sfUpdFldSetStr === undefined ||
    objcc_CourseChapterEN.sfUpdFldSetStr === null ||
    objcc_CourseChapterEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcc_CourseChapterEN.courseChapterId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseChapterEN, config);
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param objcc_CourseChapterEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function cc_CourseChapter_UpdateWithConditionAsync(
  objcc_CourseChapterEN: clscc_CourseChapterEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objcc_CourseChapterEN.sfUpdFldSetStr === undefined ||
    objcc_CourseChapterEN.sfUpdFldSetStr === null ||
    objcc_CourseChapterEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcc_CourseChapterEN.courseChapterId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);
  objcc_CourseChapterEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcc_CourseChapterEN, config);
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param objstrCourseChapterIdCond:条件对象
 * @returns 对象列表子集
 */
export async function cc_CourseChapter_IsExistRecordCache(
  objcc_CourseChapterCond: clscc_CourseChapterEN,
  strCourseId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstCache(strCourseId);
  if (arrcc_CourseChapterObjLstCache == null) return false;
  let arrcc_CourseChapterSel = arrcc_CourseChapterObjLstCache;
  if (
    objcc_CourseChapterCond.sfFldComparisonOp == null ||
    objcc_CourseChapterCond.sfFldComparisonOp == ''
  )
    return arrcc_CourseChapterSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_CourseChapterCond.sfFldComparisonOp,
  );
  //console.log("clscc_CourseChapterWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_CourseChapterCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_CourseChapterCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_CourseChapterSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objcc_CourseChapterCond),
      cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param strCourseChapterId:所给的关键字
 * @returns 对象
 */
export async function cc_CourseChapter_IsExistCache(
  strCourseChapterId: string,
  strCourseId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstCache(strCourseId);
  if (arrcc_CourseChapterObjLstCache == null) return false;
  try {
    const arrcc_CourseChapterSel = arrcc_CourseChapterObjLstCache.filter(
      (x) => x.courseChapterId == strCourseChapterId,
    );
    if (arrcc_CourseChapterSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCourseChapterId,
      cc_CourseChapter_ConstructorName,
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
 * @param strCourseChapterId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function cc_CourseChapter_IsExistAsync(strCourseChapterId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseChapterId,
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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
 * @param objcc_CourseChapterCond:条件对象
 * @returns 对象列表记录数
 */
export async function cc_CourseChapter_GetRecCountByCondCache(
  objcc_CourseChapterCond: clscc_CourseChapterEN,
  strCourseId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrcc_CourseChapterObjLstCache = await cc_CourseChapter_GetObjLstCache(strCourseId);
  if (arrcc_CourseChapterObjLstCache == null) return 0;
  let arrcc_CourseChapterSel = arrcc_CourseChapterObjLstCache;
  if (
    objcc_CourseChapterCond.sfFldComparisonOp == null ||
    objcc_CourseChapterCond.sfFldComparisonOp == ''
  )
    return arrcc_CourseChapterSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objcc_CourseChapterCond.sfFldComparisonOp,
  );
  //console.log("clscc_CourseChapterWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objcc_CourseChapterCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_CourseChapterCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseChapterSel = arrcc_CourseChapterSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrcc_CourseChapterSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objcc_CourseChapterCond),
      cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
export async function cc_CourseChapter_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cc_CourseChapter_Controller, strAction);

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
        cc_CourseChapter_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cc_CourseChapter_ConstructorName,
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
export function cc_CourseChapter_GetWebApiUrl(strController: string, strAction: string): string {
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
export function cc_CourseChapter_ReFreshCache(strCourseId: string): void {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空!(In clscc_CourseChapterWApi.clscc_CourseChapterWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clscc_CourseChapterWApi.clscc_CourseChapterWApi.ReFreshCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clscc_CourseChapterEN._CurrTabName, strCourseId);
  switch (clscc_CourseChapterEN.CacheModeId) {
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
export function cc_CourseChapter_ReFreshThisCache(strCourseId: string): void {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空!(In clscc_CourseChapterWApi.cc_CourseChapter_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clscc_CourseChapterWApi.cc_CourseChapter_ReFreshThisCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clscc_CourseChapterEN._CurrTabName, strCourseId);
    switch (clscc_CourseChapterEN.CacheModeId) {
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
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export async function cc_CourseChapter_BindDdl_CourseChapterIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strCourseId: string,
) {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clscc_CourseChapterWApi.BindDdl_CourseChapterIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clscc_CourseChapterWApi.BindDdl_CourseChapterIdInDiv)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CourseChapterIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CourseChapterIdInDivCache");
  let arrObjLstSel = await cc_CourseChapter_GetObjLstCache(strCourseId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.courseId == strCourseId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clscc_CourseChapterEN.con_CourseChapterId,
    clscc_CourseChapterEN.con_CourseChapterName,
    '课程章节',
  );
}
//(IsNeedGC == false)该表下拉框功能不需要生成;

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function cc_CourseChapter_CheckPropertyNew(pobjcc_CourseChapterEN: clscc_CourseChapterEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjcc_CourseChapterEN.courseChapterName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[课程章节名称]不能为空(In 课程章节)!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseId) === true ||
    pobjcc_CourseChapterEN.courseId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[课程Id]不能为空(In 课程章节)!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjcc_CourseChapterEN.parentNodeId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[父节点编号]不能为空(In 课程章节)!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjcc_CourseChapterEN.isOpenToAllStu ||
    (pobjcc_CourseChapterEN.isOpenToAllStu != null &&
      pobjcc_CourseChapterEN.isOpenToAllStu.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[全校师生]不能为空(In 课程章节)!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjcc_CourseChapterEN.isOpenToSchool ||
    (pobjcc_CourseChapterEN.isOpenToSchool != null &&
      pobjcc_CourseChapterEN.isOpenToSchool.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[全校师生公开]不能为空(In 课程章节)!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjcc_CourseChapterEN.isOpenToSocial ||
    (pobjcc_CourseChapterEN.isOpenToSocial != null &&
      pobjcc_CourseChapterEN.isOpenToSocial.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[社会公众]不能为空(In 课程章节)!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjcc_CourseChapterEN.isMustMenu ||
    (pobjcc_CourseChapterEN.isMustMenu != null &&
      pobjcc_CourseChapterEN.isMustMenu.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否必建栏目]不能为空(In 课程章节)!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjcc_CourseChapterEN.isFile ||
    (pobjcc_CourseChapterEN.isFile != null && pobjcc_CourseChapterEN.isFile.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[项目或文件夹]不能为空(In 课程章节)!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseChapterId) == false &&
    GetStrLen(pobjcc_CourseChapterEN.courseChapterId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程章节ID(courseChapterId)]的长度不能超过8(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.courseChapterId)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseChapterName) == false &&
    GetStrLen(pobjcc_CourseChapterEN.courseChapterName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程章节名称(courseChapterName)]的长度不能超过100(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.courseChapterName)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.chapterId) == false &&
    GetStrLen(pobjcc_CourseChapterEN.chapterId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[章Id(chapterId)]的长度不能超过8(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.chapterId)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.sectionId) == false &&
    GetStrLen(pobjcc_CourseChapterEN.sectionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[节Id(sectionId)]的长度不能超过8(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.sectionId)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.chapterName) == false &&
    GetStrLen(pobjcc_CourseChapterEN.chapterName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[章名(chapterName)]的长度不能超过100(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.chapterName)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.sectionName) == false &&
    GetStrLen(pobjcc_CourseChapterEN.sectionName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[节名(sectionName)]的长度不能超过100(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.sectionName)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.chapterNameSim) == false &&
    GetStrLen(pobjcc_CourseChapterEN.chapterNameSim) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[章名简称(chapterNameSim)]的长度不能超过10(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.chapterNameSim)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.sectionNameSim) == false &&
    GetStrLen(pobjcc_CourseChapterEN.sectionNameSim) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[节名简称(sectionNameSim)]的长度不能超过10(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.sectionNameSim)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseId) == false &&
    GetStrLen(pobjcc_CourseChapterEN.courseId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.courseId)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.parentNodeId) == false &&
    GetStrLen(pobjcc_CourseChapterEN.parentNodeId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[父节点编号(parentNodeId)]的长度不能超过8(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.parentNodeId)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.themeName) == false &&
    GetStrLen(pobjcc_CourseChapterEN.themeName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主题名(themeName)]的长度不能超过200(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.themeName)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseChapterReferred) == false &&
    GetStrLen(pobjcc_CourseChapterEN.courseChapterReferred) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[节简称(courseChapterReferred)]的长度不能超过10(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.courseChapterReferred)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.createDate) == false &&
    GetStrLen(pobjcc_CourseChapterEN.createDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[建立日期(createDate)]的长度不能超过20(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.createDate)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.editPeople) == false &&
    GetStrLen(pobjcc_CourseChapterEN.editPeople) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(editPeople)]的长度不能超过50(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.editPeople)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.updDate) == false &&
    GetStrLen(pobjcc_CourseChapterEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.updDate)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.memo) == false &&
    GetStrLen(pobjcc_CourseChapterEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.memo)(clscc_CourseChapterBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseChapterId) == false &&
    undefined !== pobjcc_CourseChapterEN.courseChapterId &&
    tzDataType.isString(pobjcc_CourseChapterEN.courseChapterId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程章节ID(courseChapterId)]的值:[$(pobjcc_CourseChapterEN.courseChapterId)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseChapterName) == false &&
    undefined !== pobjcc_CourseChapterEN.courseChapterName &&
    tzDataType.isString(pobjcc_CourseChapterEN.courseChapterName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程章节名称(courseChapterName)]的值:[$(pobjcc_CourseChapterEN.courseChapterName)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.chapterId) == false &&
    undefined !== pobjcc_CourseChapterEN.chapterId &&
    tzDataType.isString(pobjcc_CourseChapterEN.chapterId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[章Id(chapterId)]的值:[$(pobjcc_CourseChapterEN.chapterId)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.sectionId) == false &&
    undefined !== pobjcc_CourseChapterEN.sectionId &&
    tzDataType.isString(pobjcc_CourseChapterEN.sectionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[节Id(sectionId)]的值:[$(pobjcc_CourseChapterEN.sectionId)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.chapterName) == false &&
    undefined !== pobjcc_CourseChapterEN.chapterName &&
    tzDataType.isString(pobjcc_CourseChapterEN.chapterName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[章名(chapterName)]的值:[$(pobjcc_CourseChapterEN.chapterName)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.sectionName) == false &&
    undefined !== pobjcc_CourseChapterEN.sectionName &&
    tzDataType.isString(pobjcc_CourseChapterEN.sectionName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[节名(sectionName)]的值:[$(pobjcc_CourseChapterEN.sectionName)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.chapterNameSim) == false &&
    undefined !== pobjcc_CourseChapterEN.chapterNameSim &&
    tzDataType.isString(pobjcc_CourseChapterEN.chapterNameSim) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[章名简称(chapterNameSim)]的值:[$(pobjcc_CourseChapterEN.chapterNameSim)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.sectionNameSim) == false &&
    undefined !== pobjcc_CourseChapterEN.sectionNameSim &&
    tzDataType.isString(pobjcc_CourseChapterEN.sectionNameSim) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[节名简称(sectionNameSim)]的值:[$(pobjcc_CourseChapterEN.sectionNameSim)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.chapterContent) == false &&
    undefined !== pobjcc_CourseChapterEN.chapterContent &&
    tzDataType.isString(pobjcc_CourseChapterEN.chapterContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[章节内容(chapterContent)]的值:[$(pobjcc_CourseChapterEN.chapterContent)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseId) == false &&
    undefined !== pobjcc_CourseChapterEN.courseId &&
    tzDataType.isString(pobjcc_CourseChapterEN.courseId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[课程Id(courseId)]的值:[$(pobjcc_CourseChapterEN.courseId)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.parentNodeId) == false &&
    undefined !== pobjcc_CourseChapterEN.parentNodeId &&
    tzDataType.isString(pobjcc_CourseChapterEN.parentNodeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[父节点编号(parentNodeId)]的值:[$(pobjcc_CourseChapterEN.parentNodeId)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.isOpenToAllStu &&
    undefined !== pobjcc_CourseChapterEN.isOpenToAllStu &&
    tzDataType.isBoolean(pobjcc_CourseChapterEN.isOpenToAllStu) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[全校师生(isOpenToAllStu)]的值:[$(pobjcc_CourseChapterEN.isOpenToAllStu)], 非法,应该为布尔型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.isOpenToSchool &&
    undefined !== pobjcc_CourseChapterEN.isOpenToSchool &&
    tzDataType.isBoolean(pobjcc_CourseChapterEN.isOpenToSchool) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[全校师生公开(isOpenToSchool)]的值:[$(pobjcc_CourseChapterEN.isOpenToSchool)], 非法,应该为布尔型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.isOpenToSocial &&
    undefined !== pobjcc_CourseChapterEN.isOpenToSocial &&
    tzDataType.isBoolean(pobjcc_CourseChapterEN.isOpenToSocial) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[社会公众(isOpenToSocial)]的值:[$(pobjcc_CourseChapterEN.isOpenToSocial)], 非法,应该为布尔型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.isMustMenu &&
    undefined !== pobjcc_CourseChapterEN.isMustMenu &&
    tzDataType.isBoolean(pobjcc_CourseChapterEN.isMustMenu) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否必建栏目(isMustMenu)]的值:[$(pobjcc_CourseChapterEN.isMustMenu)], 非法,应该为布尔型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.themeName) == false &&
    undefined !== pobjcc_CourseChapterEN.themeName &&
    tzDataType.isString(pobjcc_CourseChapterEN.themeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题名(themeName)]的值:[$(pobjcc_CourseChapterEN.themeName)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.isFile &&
    undefined !== pobjcc_CourseChapterEN.isFile &&
    tzDataType.isBoolean(pobjcc_CourseChapterEN.isFile) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[项目或文件夹(isFile)]的值:[$(pobjcc_CourseChapterEN.isFile)], 非法,应该为布尔型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.isUse &&
    undefined !== pobjcc_CourseChapterEN.isUse &&
    tzDataType.isBoolean(pobjcc_CourseChapterEN.isUse) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否使用(isUse)]的值:[$(pobjcc_CourseChapterEN.isUse)], 非法,应该为布尔型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.viewCount &&
    undefined !== pobjcc_CourseChapterEN.viewCount &&
    tzDataType.isNumber(pobjcc_CourseChapterEN.viewCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[浏览量(viewCount)]的值:[$(pobjcc_CourseChapterEN.viewCount)], 非法,应该为数值型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseChapterReferred) == false &&
    undefined !== pobjcc_CourseChapterEN.courseChapterReferred &&
    tzDataType.isString(pobjcc_CourseChapterEN.courseChapterReferred) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[节简称(courseChapterReferred)]的值:[$(pobjcc_CourseChapterEN.courseChapterReferred)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.orderNum &&
    undefined !== pobjcc_CourseChapterEN.orderNum &&
    tzDataType.isNumber(pobjcc_CourseChapterEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjcc_CourseChapterEN.orderNum)], 非法,应该为数值型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.createDate) == false &&
    undefined !== pobjcc_CourseChapterEN.createDate &&
    tzDataType.isString(pobjcc_CourseChapterEN.createDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[建立日期(createDate)]的值:[$(pobjcc_CourseChapterEN.createDate)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.editPeople) == false &&
    undefined !== pobjcc_CourseChapterEN.editPeople &&
    tzDataType.isString(pobjcc_CourseChapterEN.editPeople) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(editPeople)]的值:[$(pobjcc_CourseChapterEN.editPeople)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.updDate) == false &&
    undefined !== pobjcc_CourseChapterEN.updDate &&
    tzDataType.isString(pobjcc_CourseChapterEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjcc_CourseChapterEN.updDate)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.memo) == false &&
    undefined !== pobjcc_CourseChapterEN.memo &&
    tzDataType.isString(pobjcc_CourseChapterEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjcc_CourseChapterEN.memo)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function cc_CourseChapter_CheckProperty4Update(
  pobjcc_CourseChapterEN: clscc_CourseChapterEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseChapterId) == false &&
    GetStrLen(pobjcc_CourseChapterEN.courseChapterId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程章节ID(courseChapterId)]的长度不能超过8(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.courseChapterId)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseChapterName) == false &&
    GetStrLen(pobjcc_CourseChapterEN.courseChapterName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程章节名称(courseChapterName)]的长度不能超过100(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.courseChapterName)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.chapterId) == false &&
    GetStrLen(pobjcc_CourseChapterEN.chapterId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[章Id(chapterId)]的长度不能超过8(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.chapterId)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.sectionId) == false &&
    GetStrLen(pobjcc_CourseChapterEN.sectionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[节Id(sectionId)]的长度不能超过8(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.sectionId)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.chapterName) == false &&
    GetStrLen(pobjcc_CourseChapterEN.chapterName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[章名(chapterName)]的长度不能超过100(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.chapterName)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.sectionName) == false &&
    GetStrLen(pobjcc_CourseChapterEN.sectionName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[节名(sectionName)]的长度不能超过100(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.sectionName)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.chapterNameSim) == false &&
    GetStrLen(pobjcc_CourseChapterEN.chapterNameSim) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[章名简称(chapterNameSim)]的长度不能超过10(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.chapterNameSim)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.sectionNameSim) == false &&
    GetStrLen(pobjcc_CourseChapterEN.sectionNameSim) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[节名简称(sectionNameSim)]的长度不能超过10(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.sectionNameSim)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseId) == false &&
    GetStrLen(pobjcc_CourseChapterEN.courseId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.courseId)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.parentNodeId) == false &&
    GetStrLen(pobjcc_CourseChapterEN.parentNodeId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[父节点编号(parentNodeId)]的长度不能超过8(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.parentNodeId)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.themeName) == false &&
    GetStrLen(pobjcc_CourseChapterEN.themeName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主题名(themeName)]的长度不能超过200(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.themeName)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseChapterReferred) == false &&
    GetStrLen(pobjcc_CourseChapterEN.courseChapterReferred) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[节简称(courseChapterReferred)]的长度不能超过10(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.courseChapterReferred)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.createDate) == false &&
    GetStrLen(pobjcc_CourseChapterEN.createDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[建立日期(createDate)]的长度不能超过20(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.createDate)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.editPeople) == false &&
    GetStrLen(pobjcc_CourseChapterEN.editPeople) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(editPeople)]的长度不能超过50(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.editPeople)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.updDate) == false &&
    GetStrLen(pobjcc_CourseChapterEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.updDate)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.memo) == false &&
    GetStrLen(pobjcc_CourseChapterEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 课程章节(cc_CourseChapter))!值:$(pobjcc_CourseChapterEN.memo)(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseChapterId) == false &&
    undefined !== pobjcc_CourseChapterEN.courseChapterId &&
    tzDataType.isString(pobjcc_CourseChapterEN.courseChapterId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程章节ID(courseChapterId)]的值:[$(pobjcc_CourseChapterEN.courseChapterId)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseChapterName) == false &&
    undefined !== pobjcc_CourseChapterEN.courseChapterName &&
    tzDataType.isString(pobjcc_CourseChapterEN.courseChapterName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程章节名称(courseChapterName)]的值:[$(pobjcc_CourseChapterEN.courseChapterName)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.chapterId) == false &&
    undefined !== pobjcc_CourseChapterEN.chapterId &&
    tzDataType.isString(pobjcc_CourseChapterEN.chapterId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[章Id(chapterId)]的值:[$(pobjcc_CourseChapterEN.chapterId)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.sectionId) == false &&
    undefined !== pobjcc_CourseChapterEN.sectionId &&
    tzDataType.isString(pobjcc_CourseChapterEN.sectionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[节Id(sectionId)]的值:[$(pobjcc_CourseChapterEN.sectionId)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.chapterName) == false &&
    undefined !== pobjcc_CourseChapterEN.chapterName &&
    tzDataType.isString(pobjcc_CourseChapterEN.chapterName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[章名(chapterName)]的值:[$(pobjcc_CourseChapterEN.chapterName)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.sectionName) == false &&
    undefined !== pobjcc_CourseChapterEN.sectionName &&
    tzDataType.isString(pobjcc_CourseChapterEN.sectionName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[节名(sectionName)]的值:[$(pobjcc_CourseChapterEN.sectionName)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.chapterNameSim) == false &&
    undefined !== pobjcc_CourseChapterEN.chapterNameSim &&
    tzDataType.isString(pobjcc_CourseChapterEN.chapterNameSim) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[章名简称(chapterNameSim)]的值:[$(pobjcc_CourseChapterEN.chapterNameSim)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.sectionNameSim) == false &&
    undefined !== pobjcc_CourseChapterEN.sectionNameSim &&
    tzDataType.isString(pobjcc_CourseChapterEN.sectionNameSim) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[节名简称(sectionNameSim)]的值:[$(pobjcc_CourseChapterEN.sectionNameSim)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.chapterContent) == false &&
    undefined !== pobjcc_CourseChapterEN.chapterContent &&
    tzDataType.isString(pobjcc_CourseChapterEN.chapterContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[章节内容(chapterContent)]的值:[$(pobjcc_CourseChapterEN.chapterContent)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseId) == false &&
    undefined !== pobjcc_CourseChapterEN.courseId &&
    tzDataType.isString(pobjcc_CourseChapterEN.courseId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[课程Id(courseId)]的值:[$(pobjcc_CourseChapterEN.courseId)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.parentNodeId) == false &&
    undefined !== pobjcc_CourseChapterEN.parentNodeId &&
    tzDataType.isString(pobjcc_CourseChapterEN.parentNodeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[父节点编号(parentNodeId)]的值:[$(pobjcc_CourseChapterEN.parentNodeId)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.isOpenToAllStu &&
    undefined !== pobjcc_CourseChapterEN.isOpenToAllStu &&
    tzDataType.isBoolean(pobjcc_CourseChapterEN.isOpenToAllStu) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[全校师生(isOpenToAllStu)]的值:[$(pobjcc_CourseChapterEN.isOpenToAllStu)], 非法,应该为布尔型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.isOpenToSchool &&
    undefined !== pobjcc_CourseChapterEN.isOpenToSchool &&
    tzDataType.isBoolean(pobjcc_CourseChapterEN.isOpenToSchool) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[全校师生公开(isOpenToSchool)]的值:[$(pobjcc_CourseChapterEN.isOpenToSchool)], 非法,应该为布尔型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.isOpenToSocial &&
    undefined !== pobjcc_CourseChapterEN.isOpenToSocial &&
    tzDataType.isBoolean(pobjcc_CourseChapterEN.isOpenToSocial) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[社会公众(isOpenToSocial)]的值:[$(pobjcc_CourseChapterEN.isOpenToSocial)], 非法,应该为布尔型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.isMustMenu &&
    undefined !== pobjcc_CourseChapterEN.isMustMenu &&
    tzDataType.isBoolean(pobjcc_CourseChapterEN.isMustMenu) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否必建栏目(isMustMenu)]的值:[$(pobjcc_CourseChapterEN.isMustMenu)], 非法,应该为布尔型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.themeName) == false &&
    undefined !== pobjcc_CourseChapterEN.themeName &&
    tzDataType.isString(pobjcc_CourseChapterEN.themeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题名(themeName)]的值:[$(pobjcc_CourseChapterEN.themeName)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.isFile &&
    undefined !== pobjcc_CourseChapterEN.isFile &&
    tzDataType.isBoolean(pobjcc_CourseChapterEN.isFile) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[项目或文件夹(isFile)]的值:[$(pobjcc_CourseChapterEN.isFile)], 非法,应该为布尔型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.isUse &&
    undefined !== pobjcc_CourseChapterEN.isUse &&
    tzDataType.isBoolean(pobjcc_CourseChapterEN.isUse) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否使用(isUse)]的值:[$(pobjcc_CourseChapterEN.isUse)], 非法,应该为布尔型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.viewCount &&
    undefined !== pobjcc_CourseChapterEN.viewCount &&
    tzDataType.isNumber(pobjcc_CourseChapterEN.viewCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[浏览量(viewCount)]的值:[$(pobjcc_CourseChapterEN.viewCount)], 非法,应该为数值型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.courseChapterReferred) == false &&
    undefined !== pobjcc_CourseChapterEN.courseChapterReferred &&
    tzDataType.isString(pobjcc_CourseChapterEN.courseChapterReferred) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[节简称(courseChapterReferred)]的值:[$(pobjcc_CourseChapterEN.courseChapterReferred)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcc_CourseChapterEN.orderNum &&
    undefined !== pobjcc_CourseChapterEN.orderNum &&
    tzDataType.isNumber(pobjcc_CourseChapterEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjcc_CourseChapterEN.orderNum)], 非法,应该为数值型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.createDate) == false &&
    undefined !== pobjcc_CourseChapterEN.createDate &&
    tzDataType.isString(pobjcc_CourseChapterEN.createDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[建立日期(createDate)]的值:[$(pobjcc_CourseChapterEN.createDate)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.editPeople) == false &&
    undefined !== pobjcc_CourseChapterEN.editPeople &&
    tzDataType.isString(pobjcc_CourseChapterEN.editPeople) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(editPeople)]的值:[$(pobjcc_CourseChapterEN.editPeople)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.updDate) == false &&
    undefined !== pobjcc_CourseChapterEN.updDate &&
    tzDataType.isString(pobjcc_CourseChapterEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjcc_CourseChapterEN.updDate)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcc_CourseChapterEN.memo) == false &&
    undefined !== pobjcc_CourseChapterEN.memo &&
    tzDataType.isString(pobjcc_CourseChapterEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjcc_CourseChapterEN.memo)], 非法,应该为字符型(In 课程章节(cc_CourseChapter))!(clscc_CourseChapterBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function cc_CourseChapter_GetJSONStrByObj(
  pobjcc_CourseChapterEN: clscc_CourseChapterEN,
): string {
  pobjcc_CourseChapterEN.sfUpdFldSetStr = pobjcc_CourseChapterEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjcc_CourseChapterEN);
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
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function cc_CourseChapter_GetObjLstByJSONStr(strJSON: string): Array<clscc_CourseChapterEN> {
  let arrcc_CourseChapterObjLst = new Array<clscc_CourseChapterEN>();
  if (strJSON === '') {
    return arrcc_CourseChapterObjLst;
  }
  try {
    arrcc_CourseChapterObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrcc_CourseChapterObjLst;
  }
  return arrcc_CourseChapterObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_CourseChapterObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function cc_CourseChapter_GetObjLstByJSONObjLst(
  arrcc_CourseChapterObjLstS: Array<clscc_CourseChapterEN>,
): Array<clscc_CourseChapterEN> {
  const arrcc_CourseChapterObjLst = new Array<clscc_CourseChapterEN>();
  for (const objInFor of arrcc_CourseChapterObjLstS) {
    const obj1 = cc_CourseChapter_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrcc_CourseChapterObjLst.push(obj1);
  }
  return arrcc_CourseChapterObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function cc_CourseChapter_GetObjByJSONStr(strJSON: string): clscc_CourseChapterEN {
  let pobjcc_CourseChapterEN = new clscc_CourseChapterEN();
  if (strJSON === '') {
    return pobjcc_CourseChapterEN;
  }
  try {
    pobjcc_CourseChapterEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjcc_CourseChapterEN;
  }
  return pobjcc_CourseChapterEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function cc_CourseChapter_GetCombineCondition(
  objcc_CourseChapterCond: clscc_CourseChapterEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_CourseChapterId,
    ) == true
  ) {
    const strComparisonOpCourseChapterId: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_CourseChapterId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_CourseChapterId,
      objcc_CourseChapterCond.courseChapterId,
      strComparisonOpCourseChapterId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_CourseChapterName,
    ) == true
  ) {
    const strComparisonOpCourseChapterName: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_CourseChapterName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_CourseChapterName,
      objcc_CourseChapterCond.courseChapterName,
      strComparisonOpCourseChapterName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_ChapterId,
    ) == true
  ) {
    const strComparisonOpChapterId: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_ChapterId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_ChapterId,
      objcc_CourseChapterCond.chapterId,
      strComparisonOpChapterId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_SectionId,
    ) == true
  ) {
    const strComparisonOpSectionId: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_SectionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_SectionId,
      objcc_CourseChapterCond.sectionId,
      strComparisonOpSectionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_ChapterName,
    ) == true
  ) {
    const strComparisonOpChapterName: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_ChapterName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_ChapterName,
      objcc_CourseChapterCond.chapterName,
      strComparisonOpChapterName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_SectionName,
    ) == true
  ) {
    const strComparisonOpSectionName: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_SectionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_SectionName,
      objcc_CourseChapterCond.sectionName,
      strComparisonOpSectionName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_ChapterNameSim,
    ) == true
  ) {
    const strComparisonOpChapterNameSim: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_ChapterNameSim];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_ChapterNameSim,
      objcc_CourseChapterCond.chapterNameSim,
      strComparisonOpChapterNameSim,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_SectionNameSim,
    ) == true
  ) {
    const strComparisonOpSectionNameSim: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_SectionNameSim];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_SectionNameSim,
      objcc_CourseChapterCond.sectionNameSim,
      strComparisonOpSectionNameSim,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_CourseId,
    ) == true
  ) {
    const strComparisonOpCourseId: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_CourseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_CourseId,
      objcc_CourseChapterCond.courseId,
      strComparisonOpCourseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_ParentNodeId,
    ) == true
  ) {
    const strComparisonOpParentNodeId: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_ParentNodeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_ParentNodeId,
      objcc_CourseChapterCond.parentNodeId,
      strComparisonOpParentNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_IsOpenToAllStu,
    ) == true
  ) {
    if (objcc_CourseChapterCond.isOpenToAllStu == true) {
      strWhereCond += Format(" And {0} = '1'", clscc_CourseChapterEN.con_IsOpenToAllStu);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscc_CourseChapterEN.con_IsOpenToAllStu);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_IsOpenToSchool,
    ) == true
  ) {
    if (objcc_CourseChapterCond.isOpenToSchool == true) {
      strWhereCond += Format(" And {0} = '1'", clscc_CourseChapterEN.con_IsOpenToSchool);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscc_CourseChapterEN.con_IsOpenToSchool);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_IsOpenToSocial,
    ) == true
  ) {
    if (objcc_CourseChapterCond.isOpenToSocial == true) {
      strWhereCond += Format(" And {0} = '1'", clscc_CourseChapterEN.con_IsOpenToSocial);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscc_CourseChapterEN.con_IsOpenToSocial);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_IsMustMenu,
    ) == true
  ) {
    if (objcc_CourseChapterCond.isMustMenu == true) {
      strWhereCond += Format(" And {0} = '1'", clscc_CourseChapterEN.con_IsMustMenu);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscc_CourseChapterEN.con_IsMustMenu);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_ThemeName,
    ) == true
  ) {
    const strComparisonOpThemeName: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_ThemeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_ThemeName,
      objcc_CourseChapterCond.themeName,
      strComparisonOpThemeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_IsFile,
    ) == true
  ) {
    if (objcc_CourseChapterCond.isFile == true) {
      strWhereCond += Format(" And {0} = '1'", clscc_CourseChapterEN.con_IsFile);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscc_CourseChapterEN.con_IsFile);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_IsUse,
    ) == true
  ) {
    if (objcc_CourseChapterCond.isUse == true) {
      strWhereCond += Format(" And {0} = '1'", clscc_CourseChapterEN.con_IsUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscc_CourseChapterEN.con_IsUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_ViewCount,
    ) == true
  ) {
    const strComparisonOpViewCount: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_ViewCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clscc_CourseChapterEN.con_ViewCount,
      objcc_CourseChapterCond.viewCount,
      strComparisonOpViewCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_CourseChapterReferred,
    ) == true
  ) {
    const strComparisonOpCourseChapterReferred: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_CourseChapterReferred];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_CourseChapterReferred,
      objcc_CourseChapterCond.courseChapterReferred,
      strComparisonOpCourseChapterReferred,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clscc_CourseChapterEN.con_OrderNum,
      objcc_CourseChapterCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_CreateDate,
    ) == true
  ) {
    const strComparisonOpCreateDate: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_CreateDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_CreateDate,
      objcc_CourseChapterCond.createDate,
      strComparisonOpCreateDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_EditPeople,
    ) == true
  ) {
    const strComparisonOpEditPeople: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_EditPeople];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_EditPeople,
      objcc_CourseChapterCond.editPeople,
      strComparisonOpEditPeople,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_UpdDate,
      objcc_CourseChapterCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcc_CourseChapterCond.dicFldComparisonOp,
      clscc_CourseChapterEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objcc_CourseChapterCond.dicFldComparisonOp[clscc_CourseChapterEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscc_CourseChapterEN.con_Memo,
      objcc_CourseChapterCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--cc_CourseChapter(课程章节),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @param strCourseChapterName: 课程章节名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function cc_CourseChapter_GetUniCondStr(
  objcc_CourseChapterEN: clscc_CourseChapterEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CourseId = '{0}'", objcc_CourseChapterEN.courseId);
  strWhereCond += Format(" and CourseChapterName = '{0}'", objcc_CourseChapterEN.courseChapterName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--cc_CourseChapter(课程章节),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @param strCourseChapterName: 课程章节名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function cc_CourseChapter_GetUniCondStr4Update(
  objcc_CourseChapterEN: clscc_CourseChapterEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CourseChapterId <> '{0}'", objcc_CourseChapterEN.courseChapterId);
  strWhereCond += Format(" and CourseId = '{0}'", objcc_CourseChapterEN.courseId);
  strWhereCond += Format(" and CourseChapterName = '{0}'", objcc_CourseChapterEN.courseChapterName);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_CourseChapterENS:源对象
 * @param objcc_CourseChapterENT:目标对象
 */
export function cc_CourseChapter_CopyObjTo(
  objcc_CourseChapterENS: clscc_CourseChapterEN,
  objcc_CourseChapterENT: clscc_CourseChapterEN,
): void {
  objcc_CourseChapterENT.courseChapterId = objcc_CourseChapterENS.courseChapterId; //课程章节ID
  objcc_CourseChapterENT.courseChapterName = objcc_CourseChapterENS.courseChapterName; //课程章节名称
  objcc_CourseChapterENT.chapterId = objcc_CourseChapterENS.chapterId; //章Id
  objcc_CourseChapterENT.sectionId = objcc_CourseChapterENS.sectionId; //节Id
  objcc_CourseChapterENT.chapterName = objcc_CourseChapterENS.chapterName; //章名
  objcc_CourseChapterENT.sectionName = objcc_CourseChapterENS.sectionName; //节名
  objcc_CourseChapterENT.chapterNameSim = objcc_CourseChapterENS.chapterNameSim; //章名简称
  objcc_CourseChapterENT.sectionNameSim = objcc_CourseChapterENS.sectionNameSim; //节名简称
  objcc_CourseChapterENT.chapterContent = objcc_CourseChapterENS.chapterContent; //章节内容
  objcc_CourseChapterENT.courseId = objcc_CourseChapterENS.courseId; //课程Id
  objcc_CourseChapterENT.parentNodeId = objcc_CourseChapterENS.parentNodeId; //父节点编号
  objcc_CourseChapterENT.isOpenToAllStu = objcc_CourseChapterENS.isOpenToAllStu; //全校师生
  objcc_CourseChapterENT.isOpenToSchool = objcc_CourseChapterENS.isOpenToSchool; //全校师生公开
  objcc_CourseChapterENT.isOpenToSocial = objcc_CourseChapterENS.isOpenToSocial; //社会公众
  objcc_CourseChapterENT.isMustMenu = objcc_CourseChapterENS.isMustMenu; //是否必建栏目
  objcc_CourseChapterENT.themeName = objcc_CourseChapterENS.themeName; //主题名
  objcc_CourseChapterENT.isFile = objcc_CourseChapterENS.isFile; //项目或文件夹
  objcc_CourseChapterENT.isUse = objcc_CourseChapterENS.isUse; //是否使用
  objcc_CourseChapterENT.viewCount = objcc_CourseChapterENS.viewCount; //浏览量
  objcc_CourseChapterENT.courseChapterReferred = objcc_CourseChapterENS.courseChapterReferred; //节简称
  objcc_CourseChapterENT.orderNum = objcc_CourseChapterENS.orderNum; //序号
  objcc_CourseChapterENT.createDate = objcc_CourseChapterENS.createDate; //建立日期
  objcc_CourseChapterENT.editPeople = objcc_CourseChapterENS.editPeople; //修改人
  objcc_CourseChapterENT.updDate = objcc_CourseChapterENS.updDate; //修改日期
  objcc_CourseChapterENT.memo = objcc_CourseChapterENS.memo; //备注
  objcc_CourseChapterENT.sfUpdFldSetStr = objcc_CourseChapterENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_CourseChapterENS:源对象
 * @param objcc_CourseChapterENT:目标对象
 */
export function cc_CourseChapter_GetObjFromJsonObj(
  objcc_CourseChapterENS: clscc_CourseChapterEN,
): clscc_CourseChapterEN {
  const objcc_CourseChapterENT: clscc_CourseChapterEN = new clscc_CourseChapterEN();
  ObjectAssign(objcc_CourseChapterENT, objcc_CourseChapterENS);
  return objcc_CourseChapterENT;
}
