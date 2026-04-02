/**
 * 类名:clsvcc_CourseWApi
 * 表名:vcc_Course(01120058)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:44:59
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v课程(vcc_Course)
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
import { clsvcc_CourseEN } from '@/ts/L0Entity/CourseLearning/clsvcc_CourseEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vcc_Course_Controller = 'vcc_CourseApi';
export const vcc_Course_ConstructorName = 'vcc_Course';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCourseId:关键字
 * @returns 对象
 **/
export async function vcc_Course_GetObjByCourseIdAsync(
  strCourseId: string,
): Promise<clsvcc_CourseEN | null> {
  const strThisFuncName = 'GetObjByCourseIdAsync';

  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空!(In clsvcc_CourseWApi.GetObjByCourseIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsvcc_CourseWApi.GetObjByCourseIdAsync)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCourseId';
  const strUrl = GetWebApiUrl(vcc_Course_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseId,
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
      const objvcc_Course = vcc_Course_GetObjFromJsonObj(returnObj);
      return objvcc_Course;
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
        vcc_Course_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_ConstructorName,
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
 * @param strCourseId:所给的关键字
 * @returns 对象
 */
export async function vcc_Course_GetObjByCourseIdCache(
  strCourseId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCourseIdCache';

  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空!(In clsvcc_CourseWApi.GetObjByCourseIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsvcc_CourseWApi.GetObjByCourseIdCache)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvcc_CourseObjLstCache = await vcc_Course_GetObjLstCache();
  try {
    const arrvcc_CourseSel = arrvcc_CourseObjLstCache.filter((x) => x.courseId == strCourseId);
    let objvcc_Course: clsvcc_CourseEN;
    if (arrvcc_CourseSel.length > 0) {
      objvcc_Course = arrvcc_CourseSel[0];
      return objvcc_Course;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvcc_CourseConst = await vcc_Course_GetObjByCourseIdAsync(strCourseId);
        if (objvcc_CourseConst != null) {
          vcc_Course_ReFreshThisCache();
          return objvcc_CourseConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCourseId,
      vcc_Course_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCourseId:所给的关键字
 * @returns 对象
 */
export async function vcc_Course_GetObjByCourseIdlocalStorage(strCourseId: string) {
  const strThisFuncName = 'GetObjByCourseIdlocalStorage';

  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空!(In clsvcc_CourseWApi.GetObjByCourseIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsvcc_CourseWApi.GetObjByCourseIdlocalStorage)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvcc_CourseEN._CurrTabName, strCourseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvcc_CourseCache: clsvcc_CourseEN = JSON.parse(strTempObj);
    return objvcc_CourseCache;
  }
  try {
    const objvcc_Course = await vcc_Course_GetObjByCourseIdAsync(strCourseId);
    if (objvcc_Course != null) {
      localStorage.setItem(strKey, JSON.stringify(objvcc_Course));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvcc_Course;
    }
    return objvcc_Course;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCourseId,
      vcc_Course_ConstructorName,
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
 * @returns 返回一个输出字段值
 */
export async function vcc_Course_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvcc_CourseEN.con_CourseId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvcc_CourseEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvcc_CourseEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCourseId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvcc_Course = await vcc_Course_GetObjByCourseIdCache(strCourseId);
  if (objvcc_Course == null) return '';
  if (objvcc_Course.GetFldValue(strOutFldName) == null) return '';
  return objvcc_Course.GetFldValue(strOutFldName).toString();
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
export function vcc_Course_SortFunDefa(a: clsvcc_CourseEN, b: clsvcc_CourseEN): number {
  return a.courseId.localeCompare(b.courseId);
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
export function vcc_Course_SortFunDefa2Fld(a: clsvcc_CourseEN, b: clsvcc_CourseEN): number {
  if (a.likeCount == b.likeCount) return a.courseCode.localeCompare(b.courseCode);
  else return a.likeCount - b.likeCount;
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
export function vcc_Course_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvcc_CourseEN.con_CourseId:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return a.courseId.localeCompare(b.courseId);
        };
      case clsvcc_CourseEN.con_LikeCount:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return a.likeCount - b.likeCount;
        };
      case clsvcc_CourseEN.con_CourseCode:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.courseCode == null) return -1;
          if (b.courseCode == null) return 1;
          return a.courseCode.localeCompare(b.courseCode);
        };
      case clsvcc_CourseEN.con_CourseDescription:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.courseDescription == null) return -1;
          if (b.courseDescription == null) return 1;
          return a.courseDescription.localeCompare(b.courseDescription);
        };
      case clsvcc_CourseEN.con_CourseName:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.courseName == null) return -1;
          if (b.courseName == null) return 1;
          return a.courseName.localeCompare(b.courseName);
        };
      case clsvcc_CourseEN.con_CourseTypeId:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return a.courseTypeId.localeCompare(b.courseTypeId);
        };
      case clsvcc_CourseEN.con_CourseTypeName:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return a.courseTypeName.localeCompare(b.courseTypeName);
        };
      case clsvcc_CourseEN.con_CreateDate:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.createDate == null) return -1;
          if (b.createDate == null) return 1;
          return a.createDate.localeCompare(b.createDate);
        };
      case clsvcc_CourseEN.con_ExcellentTypeId:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.excellentTypeId == null) return -1;
          if (b.excellentTypeId == null) return 1;
          return a.excellentTypeId.localeCompare(b.excellentTypeId);
        };
      case clsvcc_CourseEN.con_ExcellentTypeName:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.excellentTypeName == null) return -1;
          if (b.excellentTypeName == null) return 1;
          return a.excellentTypeName.localeCompare(b.excellentTypeName);
        };
      case clsvcc_CourseEN.con_ExcellentYear:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return a.excellentYear - b.excellentYear;
        };
      case clsvcc_CourseEN.con_IsBuildingCourse:
        return (a: clsvcc_CourseEN) => {
          if (a.isBuildingCourse == true) return 1;
          else return -1;
        };
      case clsvcc_CourseEN.con_IsDoubleLanguageCourse:
        return (a: clsvcc_CourseEN) => {
          if (a.isDoubleLanguageCourse == true) return 1;
          else return -1;
        };
      case clsvcc_CourseEN.con_IsOpen:
        return (a: clsvcc_CourseEN) => {
          if (a.isOpen == true) return 1;
          else return -1;
        };
      case clsvcc_CourseEN.con_IsRecommendedCourse:
        return (a: clsvcc_CourseEN) => {
          if (a.isRecommendedCourse == true) return 1;
          else return -1;
        };
      case clsvcc_CourseEN.con_IsSelfPropelledCourse:
        return (a: clsvcc_CourseEN) => {
          if (a.isSelfPropelledCourse == true) return 1;
          else return -1;
        };
      case clsvcc_CourseEN.con_OperationDate:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.operationDate == null) return -1;
          if (b.operationDate == null) return 1;
          return a.operationDate.localeCompare(b.operationDate);
        };
      case clsvcc_CourseEN.con_OrderNum:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvcc_CourseEN.con_OuterLink:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.outerLink == null) return -1;
          if (b.outerLink == null) return 1;
          return a.outerLink.localeCompare(b.outerLink);
        };
      case clsvcc_CourseEN.con_ViewCount:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return a.viewCount - b.viewCount;
        };
      case clsvcc_CourseEN.con_ThemeId:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.themeId == null) return -1;
          if (b.themeId == null) return 1;
          return a.themeId.localeCompare(b.themeId);
        };
      case clsvcc_CourseEN.con_ThemeName:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.themeName == null) return -1;
          if (b.themeName == null) return 1;
          return a.themeName.localeCompare(b.themeName);
        };
      case clsvcc_CourseEN.con_ExampleImgPath:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.exampleImgPath == null) return -1;
          if (b.exampleImgPath == null) return 1;
          return a.exampleImgPath.localeCompare(b.exampleImgPath);
        };
      case clsvcc_CourseEN.con_IdXzMajor:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.idXzMajor == null) return -1;
          if (b.idXzMajor == null) return 1;
          return a.idXzMajor.localeCompare(b.idXzMajor);
        };
      case clsvcc_CourseEN.con_MajorID:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.majorID == null) return -1;
          if (b.majorID == null) return 1;
          return a.majorID.localeCompare(b.majorID);
        };
      case clsvcc_CourseEN.con_MajorName:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return a.majorName.localeCompare(b.majorName);
        };
      case clsvcc_CourseEN.con_IdXzCollege:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return a.idXzCollege.localeCompare(b.idXzCollege);
        };
      case clsvcc_CourseEN.con_CollegeId:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.collegeId == null) return -1;
          if (b.collegeId == null) return 1;
          return a.collegeId.localeCompare(b.collegeId);
        };
      case clsvcc_CourseEN.con_CollegeName:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsvcc_CourseEN.con_CollegeNameA:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.collegeNameA == null) return -1;
          if (b.collegeNameA == null) return 1;
          return a.collegeNameA.localeCompare(b.collegeNameA);
        };
      case clsvcc_CourseEN.con_Memo:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vcc_Course]中不存在!(in ${vcc_Course_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvcc_CourseEN.con_CourseId:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return b.courseId.localeCompare(a.courseId);
        };
      case clsvcc_CourseEN.con_LikeCount:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return b.likeCount - a.likeCount;
        };
      case clsvcc_CourseEN.con_CourseCode:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.courseCode == null) return -1;
          if (a.courseCode == null) return 1;
          return b.courseCode.localeCompare(a.courseCode);
        };
      case clsvcc_CourseEN.con_CourseDescription:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.courseDescription == null) return -1;
          if (a.courseDescription == null) return 1;
          return b.courseDescription.localeCompare(a.courseDescription);
        };
      case clsvcc_CourseEN.con_CourseName:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.courseName == null) return -1;
          if (a.courseName == null) return 1;
          return b.courseName.localeCompare(a.courseName);
        };
      case clsvcc_CourseEN.con_CourseTypeId:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return b.courseTypeId.localeCompare(a.courseTypeId);
        };
      case clsvcc_CourseEN.con_CourseTypeName:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return b.courseTypeName.localeCompare(a.courseTypeName);
        };
      case clsvcc_CourseEN.con_CreateDate:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.createDate == null) return -1;
          if (a.createDate == null) return 1;
          return b.createDate.localeCompare(a.createDate);
        };
      case clsvcc_CourseEN.con_ExcellentTypeId:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.excellentTypeId == null) return -1;
          if (a.excellentTypeId == null) return 1;
          return b.excellentTypeId.localeCompare(a.excellentTypeId);
        };
      case clsvcc_CourseEN.con_ExcellentTypeName:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.excellentTypeName == null) return -1;
          if (a.excellentTypeName == null) return 1;
          return b.excellentTypeName.localeCompare(a.excellentTypeName);
        };
      case clsvcc_CourseEN.con_ExcellentYear:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return b.excellentYear - a.excellentYear;
        };
      case clsvcc_CourseEN.con_IsBuildingCourse:
        return (b: clsvcc_CourseEN) => {
          if (b.isBuildingCourse == true) return 1;
          else return -1;
        };
      case clsvcc_CourseEN.con_IsDoubleLanguageCourse:
        return (b: clsvcc_CourseEN) => {
          if (b.isDoubleLanguageCourse == true) return 1;
          else return -1;
        };
      case clsvcc_CourseEN.con_IsOpen:
        return (b: clsvcc_CourseEN) => {
          if (b.isOpen == true) return 1;
          else return -1;
        };
      case clsvcc_CourseEN.con_IsRecommendedCourse:
        return (b: clsvcc_CourseEN) => {
          if (b.isRecommendedCourse == true) return 1;
          else return -1;
        };
      case clsvcc_CourseEN.con_IsSelfPropelledCourse:
        return (b: clsvcc_CourseEN) => {
          if (b.isSelfPropelledCourse == true) return 1;
          else return -1;
        };
      case clsvcc_CourseEN.con_OperationDate:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.operationDate == null) return -1;
          if (a.operationDate == null) return 1;
          return b.operationDate.localeCompare(a.operationDate);
        };
      case clsvcc_CourseEN.con_OrderNum:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvcc_CourseEN.con_OuterLink:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.outerLink == null) return -1;
          if (a.outerLink == null) return 1;
          return b.outerLink.localeCompare(a.outerLink);
        };
      case clsvcc_CourseEN.con_ViewCount:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return b.viewCount - a.viewCount;
        };
      case clsvcc_CourseEN.con_ThemeId:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.themeId == null) return -1;
          if (a.themeId == null) return 1;
          return b.themeId.localeCompare(a.themeId);
        };
      case clsvcc_CourseEN.con_ThemeName:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.themeName == null) return -1;
          if (a.themeName == null) return 1;
          return b.themeName.localeCompare(a.themeName);
        };
      case clsvcc_CourseEN.con_ExampleImgPath:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.exampleImgPath == null) return -1;
          if (a.exampleImgPath == null) return 1;
          return b.exampleImgPath.localeCompare(a.exampleImgPath);
        };
      case clsvcc_CourseEN.con_IdXzMajor:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.idXzMajor == null) return -1;
          if (a.idXzMajor == null) return 1;
          return b.idXzMajor.localeCompare(a.idXzMajor);
        };
      case clsvcc_CourseEN.con_MajorID:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.majorID == null) return -1;
          if (a.majorID == null) return 1;
          return b.majorID.localeCompare(a.majorID);
        };
      case clsvcc_CourseEN.con_MajorName:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return b.majorName.localeCompare(a.majorName);
        };
      case clsvcc_CourseEN.con_IdXzCollege:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return b.idXzCollege.localeCompare(a.idXzCollege);
        };
      case clsvcc_CourseEN.con_CollegeId:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.collegeId == null) return -1;
          if (a.collegeId == null) return 1;
          return b.collegeId.localeCompare(a.collegeId);
        };
      case clsvcc_CourseEN.con_CollegeName:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsvcc_CourseEN.con_CollegeNameA:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.collegeNameA == null) return -1;
          if (a.collegeNameA == null) return 1;
          return b.collegeNameA.localeCompare(a.collegeNameA);
        };
      case clsvcc_CourseEN.con_Memo:
        return (a: clsvcc_CourseEN, b: clsvcc_CourseEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vcc_Course]中不存在!(in ${vcc_Course_ConstructorName}.${strThisFuncName})`;
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
export async function vcc_Course_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvcc_CourseEN.con_CourseId:
      return (obj: clsvcc_CourseEN) => {
        return obj.courseId === value;
      };
    case clsvcc_CourseEN.con_LikeCount:
      return (obj: clsvcc_CourseEN) => {
        return obj.likeCount === value;
      };
    case clsvcc_CourseEN.con_CourseCode:
      return (obj: clsvcc_CourseEN) => {
        return obj.courseCode === value;
      };
    case clsvcc_CourseEN.con_CourseDescription:
      return (obj: clsvcc_CourseEN) => {
        return obj.courseDescription === value;
      };
    case clsvcc_CourseEN.con_CourseName:
      return (obj: clsvcc_CourseEN) => {
        return obj.courseName === value;
      };
    case clsvcc_CourseEN.con_CourseTypeId:
      return (obj: clsvcc_CourseEN) => {
        return obj.courseTypeId === value;
      };
    case clsvcc_CourseEN.con_CourseTypeName:
      return (obj: clsvcc_CourseEN) => {
        return obj.courseTypeName === value;
      };
    case clsvcc_CourseEN.con_CreateDate:
      return (obj: clsvcc_CourseEN) => {
        return obj.createDate === value;
      };
    case clsvcc_CourseEN.con_ExcellentTypeId:
      return (obj: clsvcc_CourseEN) => {
        return obj.excellentTypeId === value;
      };
    case clsvcc_CourseEN.con_ExcellentTypeName:
      return (obj: clsvcc_CourseEN) => {
        return obj.excellentTypeName === value;
      };
    case clsvcc_CourseEN.con_ExcellentYear:
      return (obj: clsvcc_CourseEN) => {
        return obj.excellentYear === value;
      };
    case clsvcc_CourseEN.con_IsBuildingCourse:
      return (obj: clsvcc_CourseEN) => {
        return obj.isBuildingCourse === value;
      };
    case clsvcc_CourseEN.con_IsDoubleLanguageCourse:
      return (obj: clsvcc_CourseEN) => {
        return obj.isDoubleLanguageCourse === value;
      };
    case clsvcc_CourseEN.con_IsOpen:
      return (obj: clsvcc_CourseEN) => {
        return obj.isOpen === value;
      };
    case clsvcc_CourseEN.con_IsRecommendedCourse:
      return (obj: clsvcc_CourseEN) => {
        return obj.isRecommendedCourse === value;
      };
    case clsvcc_CourseEN.con_IsSelfPropelledCourse:
      return (obj: clsvcc_CourseEN) => {
        return obj.isSelfPropelledCourse === value;
      };
    case clsvcc_CourseEN.con_OperationDate:
      return (obj: clsvcc_CourseEN) => {
        return obj.operationDate === value;
      };
    case clsvcc_CourseEN.con_OrderNum:
      return (obj: clsvcc_CourseEN) => {
        return obj.orderNum === value;
      };
    case clsvcc_CourseEN.con_OuterLink:
      return (obj: clsvcc_CourseEN) => {
        return obj.outerLink === value;
      };
    case clsvcc_CourseEN.con_ViewCount:
      return (obj: clsvcc_CourseEN) => {
        return obj.viewCount === value;
      };
    case clsvcc_CourseEN.con_ThemeId:
      return (obj: clsvcc_CourseEN) => {
        return obj.themeId === value;
      };
    case clsvcc_CourseEN.con_ThemeName:
      return (obj: clsvcc_CourseEN) => {
        return obj.themeName === value;
      };
    case clsvcc_CourseEN.con_ExampleImgPath:
      return (obj: clsvcc_CourseEN) => {
        return obj.exampleImgPath === value;
      };
    case clsvcc_CourseEN.con_IdXzMajor:
      return (obj: clsvcc_CourseEN) => {
        return obj.idXzMajor === value;
      };
    case clsvcc_CourseEN.con_MajorID:
      return (obj: clsvcc_CourseEN) => {
        return obj.majorID === value;
      };
    case clsvcc_CourseEN.con_MajorName:
      return (obj: clsvcc_CourseEN) => {
        return obj.majorName === value;
      };
    case clsvcc_CourseEN.con_IdXzCollege:
      return (obj: clsvcc_CourseEN) => {
        return obj.idXzCollege === value;
      };
    case clsvcc_CourseEN.con_CollegeId:
      return (obj: clsvcc_CourseEN) => {
        return obj.collegeId === value;
      };
    case clsvcc_CourseEN.con_CollegeName:
      return (obj: clsvcc_CourseEN) => {
        return obj.collegeName === value;
      };
    case clsvcc_CourseEN.con_CollegeNameA:
      return (obj: clsvcc_CourseEN) => {
        return obj.collegeNameA === value;
      };
    case clsvcc_CourseEN.con_Memo:
      return (obj: clsvcc_CourseEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vcc_Course]中不存在!(in ${vcc_Course_ConstructorName}.${strThisFuncName})`;
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
export async function vcc_Course_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvcc_CourseEN.con_CourseId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvcc_Course = await vcc_Course_GetObjLstCache();
  if (arrvcc_Course == null) return [];
  let arrvcc_CourseSel = arrvcc_Course;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvcc_CourseSel = arrvcc_CourseSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvcc_CourseSel = arrvcc_CourseSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvcc_CourseSel = arrvcc_CourseSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvcc_CourseSel = arrvcc_CourseSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvcc_CourseSel = arrvcc_CourseSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvcc_CourseSel = arrvcc_CourseSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvcc_CourseSel = arrvcc_CourseSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvcc_CourseSel = arrvcc_CourseSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvcc_CourseSel = arrvcc_CourseSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvcc_CourseSel = arrvcc_CourseSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvcc_CourseSel.length == 0) return [];
  return arrvcc_CourseSel.map((x) => x.courseId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vcc_Course_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vcc_Course_Controller, strAction);

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
        vcc_Course_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_ConstructorName,
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
export async function vcc_Course_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vcc_Course_Controller, strAction);

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
        vcc_Course_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_ConstructorName,
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
export async function vcc_Course_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvcc_CourseEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vcc_Course_Controller, strAction);

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
      const objvcc_Course = vcc_Course_GetObjFromJsonObj(returnObj);
      return objvcc_Course;
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
        vcc_Course_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_ConstructorName,
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
export async function vcc_Course_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvcc_CourseEN._CurrTabName;
  if (IsNullOrEmpty(clsvcc_CourseEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvcc_CourseEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvcc_CourseExObjLstCache: Array<clsvcc_CourseEN> = CacheHelper.Get(strKey);
    const arrvcc_CourseObjLstT = vcc_Course_GetObjLstByJSONObjLst(arrvcc_CourseExObjLstCache);
    return arrvcc_CourseObjLstT;
  }
  try {
    const arrvcc_CourseExObjLst = await vcc_Course_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvcc_CourseExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvcc_CourseExObjLst.length,
    );
    console.log(strInfo);
    return arrvcc_CourseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vcc_Course_ConstructorName,
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
export async function vcc_Course_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvcc_CourseEN._CurrTabName;
  if (IsNullOrEmpty(clsvcc_CourseEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvcc_CourseEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvcc_CourseExObjLstCache: Array<clsvcc_CourseEN> = JSON.parse(strTempObjLst);
    const arrvcc_CourseObjLstT = vcc_Course_GetObjLstByJSONObjLst(arrvcc_CourseExObjLstCache);
    return arrvcc_CourseObjLstT;
  }
  try {
    const arrvcc_CourseExObjLst = await vcc_Course_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvcc_CourseExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvcc_CourseExObjLst.length,
    );
    console.log(strInfo);
    return arrvcc_CourseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vcc_Course_ConstructorName,
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
export async function vcc_Course_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvcc_CourseEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvcc_CourseObjLstCache: Array<clsvcc_CourseEN> = JSON.parse(strTempObjLst);
    return arrvcc_CourseObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vcc_Course_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvcc_CourseEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vcc_Course_Controller, strAction);

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
          vcc_Course_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vcc_Course_GetObjLstByJSONObjLst(returnObjLst);
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
        vcc_Course_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_ConstructorName,
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
export async function vcc_Course_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvcc_CourseEN._CurrTabName;
  if (IsNullOrEmpty(clsvcc_CourseEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvcc_CourseEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvcc_CourseExObjLstCache: Array<clsvcc_CourseEN> = JSON.parse(strTempObjLst);
    const arrvcc_CourseObjLstT = vcc_Course_GetObjLstByJSONObjLst(arrvcc_CourseExObjLstCache);
    return arrvcc_CourseObjLstT;
  }
  try {
    const arrvcc_CourseExObjLst = await vcc_Course_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvcc_CourseExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvcc_CourseExObjLst.length,
    );
    console.log(strInfo);
    return arrvcc_CourseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vcc_Course_ConstructorName,
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
export async function vcc_Course_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvcc_CourseEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvcc_CourseObjLstCache: Array<clsvcc_CourseEN> = JSON.parse(strTempObjLst);
    return arrvcc_CourseObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vcc_Course_GetObjLstCache(): Promise<Array<clsvcc_CourseEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvcc_CourseObjLstCache;
  switch (clsvcc_CourseEN.CacheModeId) {
    case '04': //sessionStorage
      arrvcc_CourseObjLstCache = await vcc_Course_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvcc_CourseObjLstCache = await vcc_Course_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvcc_CourseObjLstCache = await vcc_Course_GetObjLstClientCache();
      break;
    default:
      arrvcc_CourseObjLstCache = await vcc_Course_GetObjLstClientCache();
      break;
  }
  return arrvcc_CourseObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vcc_Course_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvcc_CourseObjLstCache;
  switch (clsvcc_CourseEN.CacheModeId) {
    case '04': //sessionStorage
      arrvcc_CourseObjLstCache = await vcc_Course_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvcc_CourseObjLstCache = await vcc_Course_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvcc_CourseObjLstCache = null;
      break;
    default:
      arrvcc_CourseObjLstCache = null;
      break;
  }
  return arrvcc_CourseObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCourseIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vcc_Course_GetSubObjLstCache(objvcc_CourseCond: clsvcc_CourseEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvcc_CourseObjLstCache = await vcc_Course_GetObjLstCache();
  let arrvcc_CourseSel = arrvcc_CourseObjLstCache;
  if (objvcc_CourseCond.sfFldComparisonOp == null || objvcc_CourseCond.sfFldComparisonOp == '')
    return arrvcc_CourseSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvcc_CourseCond.sfFldComparisonOp,
  );
  //console.log("clsvcc_CourseWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvcc_CourseCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvcc_CourseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvcc_CourseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvcc_CourseCond),
      vcc_Course_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvcc_CourseEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCourseId:关键字列表
 * @returns 对象列表
 **/
export async function vcc_Course_GetObjLstByCourseIdLstAsync(
  arrCourseId: Array<string>,
): Promise<Array<clsvcc_CourseEN>> {
  const strThisFuncName = 'GetObjLstByCourseIdLstAsync';
  const strAction = 'GetObjLstByCourseIdLst';
  const strUrl = GetWebApiUrl(vcc_Course_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCourseId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vcc_Course_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vcc_Course_GetObjLstByJSONObjLst(returnObjLst);
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
        vcc_Course_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_ConstructorName,
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
 * @param arrstrCourseIdLst:关键字列表
 * @returns 对象列表
 */
export async function vcc_Course_GetObjLstByCourseIdLstCache(arrCourseIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByCourseIdLstCache';
  try {
    const arrvcc_CourseObjLstCache = await vcc_Course_GetObjLstCache();
    const arrvcc_CourseSel = arrvcc_CourseObjLstCache.filter(
      (x) => arrCourseIdLst.indexOf(x.courseId) > -1,
    );
    return arrvcc_CourseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCourseIdLst.join(','),
      vcc_Course_ConstructorName,
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
export async function vcc_Course_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvcc_CourseEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vcc_Course_Controller, strAction);

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
          vcc_Course_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vcc_Course_GetObjLstByJSONObjLst(returnObjLst);
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
        vcc_Course_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_ConstructorName,
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
export async function vcc_Course_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvcc_CourseEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vcc_Course_Controller, strAction);

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
          vcc_Course_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vcc_Course_GetObjLstByJSONObjLst(returnObjLst);
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
        vcc_Course_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_ConstructorName,
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
export async function vcc_Course_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvcc_CourseEN>();
  const arrvcc_CourseObjLstCache = await vcc_Course_GetObjLstCache();
  if (arrvcc_CourseObjLstCache.length == 0) return arrvcc_CourseObjLstCache;
  let arrvcc_CourseSel = arrvcc_CourseObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvcc_CourseCond = new clsvcc_CourseEN();
  ObjectAssign(objvcc_CourseCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvcc_CourseWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvcc_CourseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvcc_CourseSel.length == 0) return arrvcc_CourseSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvcc_CourseSel = arrvcc_CourseSel.sort(vcc_Course_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvcc_CourseSel = arrvcc_CourseSel.sort(objPagerPara.sortFun);
    }
    arrvcc_CourseSel = arrvcc_CourseSel.slice(intStart, intEnd);
    return arrvcc_CourseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vcc_Course_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvcc_CourseEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vcc_Course_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvcc_CourseEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvcc_CourseEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vcc_Course_Controller, strAction);

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
          vcc_Course_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vcc_Course_GetObjLstByJSONObjLst(returnObjLst);
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
        vcc_Course_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_ConstructorName,
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
 * @param objstrCourseIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vcc_Course_IsExistRecordCache(objvcc_CourseCond: clsvcc_CourseEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvcc_CourseObjLstCache = await vcc_Course_GetObjLstCache();
  if (arrvcc_CourseObjLstCache == null) return false;
  let arrvcc_CourseSel = arrvcc_CourseObjLstCache;
  if (objvcc_CourseCond.sfFldComparisonOp == null || objvcc_CourseCond.sfFldComparisonOp == '')
    return arrvcc_CourseSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvcc_CourseCond.sfFldComparisonOp,
  );
  //console.log("clsvcc_CourseWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvcc_CourseCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvcc_CourseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvcc_CourseSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvcc_CourseCond),
      vcc_Course_ConstructorName,
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
export async function vcc_Course_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vcc_Course_Controller, strAction);

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
        vcc_Course_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_ConstructorName,
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
 * @param strCourseId:所给的关键字
 * @returns 对象
 */
export async function vcc_Course_IsExistCache(strCourseId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvcc_CourseObjLstCache = await vcc_Course_GetObjLstCache();
  if (arrvcc_CourseObjLstCache == null) return false;
  try {
    const arrvcc_CourseSel = arrvcc_CourseObjLstCache.filter((x) => x.courseId == strCourseId);
    if (arrvcc_CourseSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCourseId,
      vcc_Course_ConstructorName,
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
 * @param strCourseId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vcc_Course_IsExistAsync(strCourseId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vcc_Course_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseId,
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
        vcc_Course_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_ConstructorName,
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
export async function vcc_Course_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vcc_Course_Controller, strAction);

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
        vcc_Course_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vcc_Course_ConstructorName,
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
 * @param objvcc_CourseCond:条件对象
 * @returns 对象列表记录数
 */
export async function vcc_Course_GetRecCountByCondCache(objvcc_CourseCond: clsvcc_CourseEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvcc_CourseObjLstCache = await vcc_Course_GetObjLstCache();
  if (arrvcc_CourseObjLstCache == null) return 0;
  let arrvcc_CourseSel = arrvcc_CourseObjLstCache;
  if (objvcc_CourseCond.sfFldComparisonOp == null || objvcc_CourseCond.sfFldComparisonOp == '')
    return arrvcc_CourseSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvcc_CourseCond.sfFldComparisonOp,
  );
  //console.log("clsvcc_CourseWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvcc_CourseCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvcc_CourseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvcc_CourseSel = arrvcc_CourseSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvcc_CourseSel = arrvcc_CourseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvcc_CourseSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvcc_CourseCond),
      vcc_Course_ConstructorName,
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
export function vcc_Course_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vcc_Course_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvcc_CourseEN._CurrTabName;
    switch (clsvcc_CourseEN.CacheModeId) {
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
export function vcc_Course_GetJSONStrByObj(pobjvcc_CourseEN: clsvcc_CourseEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvcc_CourseEN);
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
export function vcc_Course_GetObjLstByJSONStr(strJSON: string): Array<clsvcc_CourseEN> {
  let arrvcc_CourseObjLst = new Array<clsvcc_CourseEN>();
  if (strJSON === '') {
    return arrvcc_CourseObjLst;
  }
  try {
    arrvcc_CourseObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvcc_CourseObjLst;
  }
  return arrvcc_CourseObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvcc_CourseObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vcc_Course_GetObjLstByJSONObjLst(
  arrvcc_CourseObjLstS: Array<clsvcc_CourseEN>,
): Array<clsvcc_CourseEN> {
  const arrvcc_CourseObjLst = new Array<clsvcc_CourseEN>();
  for (const objInFor of arrvcc_CourseObjLstS) {
    const obj1 = vcc_Course_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvcc_CourseObjLst.push(obj1);
  }
  return arrvcc_CourseObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vcc_Course_GetObjByJSONStr(strJSON: string): clsvcc_CourseEN {
  let pobjvcc_CourseEN = new clsvcc_CourseEN();
  if (strJSON === '') {
    return pobjvcc_CourseEN;
  }
  try {
    pobjvcc_CourseEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvcc_CourseEN;
  }
  return pobjvcc_CourseEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vcc_Course_GetCombineCondition(objvcc_CourseCond: clsvcc_CourseEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_CourseId,
    ) == true
  ) {
    const strComparisonOpCourseId: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_CourseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_CourseId,
      objvcc_CourseCond.courseId,
      strComparisonOpCourseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_LikeCount,
    ) == true
  ) {
    const strComparisonOpLikeCount: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_LikeCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvcc_CourseEN.con_LikeCount,
      objvcc_CourseCond.likeCount,
      strComparisonOpLikeCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_CourseCode,
    ) == true
  ) {
    const strComparisonOpCourseCode: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_CourseCode];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_CourseCode,
      objvcc_CourseCond.courseCode,
      strComparisonOpCourseCode,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_CourseDescription,
    ) == true
  ) {
    const strComparisonOpCourseDescription: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_CourseDescription];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_CourseDescription,
      objvcc_CourseCond.courseDescription,
      strComparisonOpCourseDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_CourseName,
    ) == true
  ) {
    const strComparisonOpCourseName: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_CourseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_CourseName,
      objvcc_CourseCond.courseName,
      strComparisonOpCourseName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_CourseTypeId,
    ) == true
  ) {
    const strComparisonOpCourseTypeId: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_CourseTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_CourseTypeId,
      objvcc_CourseCond.courseTypeId,
      strComparisonOpCourseTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_CourseTypeName,
    ) == true
  ) {
    const strComparisonOpCourseTypeName: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_CourseTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_CourseTypeName,
      objvcc_CourseCond.courseTypeName,
      strComparisonOpCourseTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_CreateDate,
    ) == true
  ) {
    const strComparisonOpCreateDate: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_CreateDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_CreateDate,
      objvcc_CourseCond.createDate,
      strComparisonOpCreateDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_ExcellentTypeId,
    ) == true
  ) {
    const strComparisonOpExcellentTypeId: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_ExcellentTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_ExcellentTypeId,
      objvcc_CourseCond.excellentTypeId,
      strComparisonOpExcellentTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_ExcellentTypeName,
    ) == true
  ) {
    const strComparisonOpExcellentTypeName: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_ExcellentTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_ExcellentTypeName,
      objvcc_CourseCond.excellentTypeName,
      strComparisonOpExcellentTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_ExcellentYear,
    ) == true
  ) {
    const strComparisonOpExcellentYear: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_ExcellentYear];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvcc_CourseEN.con_ExcellentYear,
      objvcc_CourseCond.excellentYear,
      strComparisonOpExcellentYear,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_IsBuildingCourse,
    ) == true
  ) {
    if (objvcc_CourseCond.isBuildingCourse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvcc_CourseEN.con_IsBuildingCourse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvcc_CourseEN.con_IsBuildingCourse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_IsDoubleLanguageCourse,
    ) == true
  ) {
    if (objvcc_CourseCond.isDoubleLanguageCourse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvcc_CourseEN.con_IsDoubleLanguageCourse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvcc_CourseEN.con_IsDoubleLanguageCourse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_IsOpen,
    ) == true
  ) {
    if (objvcc_CourseCond.isOpen == true) {
      strWhereCond += Format(" And {0} = '1'", clsvcc_CourseEN.con_IsOpen);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvcc_CourseEN.con_IsOpen);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_IsRecommendedCourse,
    ) == true
  ) {
    if (objvcc_CourseCond.isRecommendedCourse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvcc_CourseEN.con_IsRecommendedCourse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvcc_CourseEN.con_IsRecommendedCourse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_IsSelfPropelledCourse,
    ) == true
  ) {
    if (objvcc_CourseCond.isSelfPropelledCourse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvcc_CourseEN.con_IsSelfPropelledCourse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvcc_CourseEN.con_IsSelfPropelledCourse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_OperationDate,
    ) == true
  ) {
    const strComparisonOpOperationDate: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_OperationDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_OperationDate,
      objvcc_CourseCond.operationDate,
      strComparisonOpOperationDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvcc_CourseEN.con_OrderNum,
      objvcc_CourseCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_OuterLink,
    ) == true
  ) {
    const strComparisonOpOuterLink: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_OuterLink];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_OuterLink,
      objvcc_CourseCond.outerLink,
      strComparisonOpOuterLink,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_ViewCount,
    ) == true
  ) {
    const strComparisonOpViewCount: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_ViewCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvcc_CourseEN.con_ViewCount,
      objvcc_CourseCond.viewCount,
      strComparisonOpViewCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_ThemeId,
    ) == true
  ) {
    const strComparisonOpThemeId: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_ThemeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_ThemeId,
      objvcc_CourseCond.themeId,
      strComparisonOpThemeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_ThemeName,
    ) == true
  ) {
    const strComparisonOpThemeName: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_ThemeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_ThemeName,
      objvcc_CourseCond.themeName,
      strComparisonOpThemeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_ExampleImgPath,
    ) == true
  ) {
    const strComparisonOpExampleImgPath: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_ExampleImgPath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_ExampleImgPath,
      objvcc_CourseCond.exampleImgPath,
      strComparisonOpExampleImgPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_IdXzMajor,
    ) == true
  ) {
    const strComparisonOpIdXzMajor: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_IdXzMajor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_IdXzMajor,
      objvcc_CourseCond.idXzMajor,
      strComparisonOpIdXzMajor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_MajorID,
    ) == true
  ) {
    const strComparisonOpMajorID: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_MajorID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_MajorID,
      objvcc_CourseCond.majorID,
      strComparisonOpMajorID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_MajorName,
    ) == true
  ) {
    const strComparisonOpMajorName: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_MajorName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_MajorName,
      objvcc_CourseCond.majorName,
      strComparisonOpMajorName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_IdXzCollege,
    ) == true
  ) {
    const strComparisonOpIdXzCollege: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_IdXzCollege];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_IdXzCollege,
      objvcc_CourseCond.idXzCollege,
      strComparisonOpIdXzCollege,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_CollegeId,
    ) == true
  ) {
    const strComparisonOpCollegeId: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_CollegeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_CollegeId,
      objvcc_CourseCond.collegeId,
      strComparisonOpCollegeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_CollegeName,
    ) == true
  ) {
    const strComparisonOpCollegeName: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_CollegeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_CollegeName,
      objvcc_CourseCond.collegeName,
      strComparisonOpCollegeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_CollegeNameA,
    ) == true
  ) {
    const strComparisonOpCollegeNameA: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_CollegeNameA];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_CollegeNameA,
      objvcc_CourseCond.collegeNameA,
      strComparisonOpCollegeNameA,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvcc_CourseCond.dicFldComparisonOp,
      clsvcc_CourseEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvcc_CourseCond.dicFldComparisonOp[clsvcc_CourseEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvcc_CourseEN.con_Memo,
      objvcc_CourseCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvcc_CourseENS:源对象
 * @param objvcc_CourseENT:目标对象
 */
export function vcc_Course_CopyObjTo(
  objvcc_CourseENS: clsvcc_CourseEN,
  objvcc_CourseENT: clsvcc_CourseEN,
): void {
  objvcc_CourseENT.courseId = objvcc_CourseENS.courseId; //课程Id
  objvcc_CourseENT.likeCount = objvcc_CourseENS.likeCount; //LikeCount
  objvcc_CourseENT.courseCode = objvcc_CourseENS.courseCode; //课程代码
  objvcc_CourseENT.courseDescription = objvcc_CourseENS.courseDescription; //课程描述
  objvcc_CourseENT.courseName = objvcc_CourseENS.courseName; //课程名称
  objvcc_CourseENT.courseTypeId = objvcc_CourseENS.courseTypeId; //课程类型ID
  objvcc_CourseENT.courseTypeName = objvcc_CourseENS.courseTypeName; //课程类型名称
  objvcc_CourseENT.createDate = objvcc_CourseENS.createDate; //建立日期
  objvcc_CourseENT.excellentTypeId = objvcc_CourseENS.excellentTypeId; //精品课程类型Id
  objvcc_CourseENT.excellentTypeName = objvcc_CourseENS.excellentTypeName; //精品课程类型名称
  objvcc_CourseENT.excellentYear = objvcc_CourseENS.excellentYear; //课程年份
  objvcc_CourseENT.isBuildingCourse = objvcc_CourseENS.isBuildingCourse; //是否已建设课程
  objvcc_CourseENT.isDoubleLanguageCourse = objvcc_CourseENS.isDoubleLanguageCourse; //是否双语课程
  objvcc_CourseENT.isOpen = objvcc_CourseENS.isOpen; //是否公开
  objvcc_CourseENT.isRecommendedCourse = objvcc_CourseENS.isRecommendedCourse; //是否推荐课程
  objvcc_CourseENT.isSelfPropelledCourse = objvcc_CourseENS.isSelfPropelledCourse; //是否自荐课程
  objvcc_CourseENT.operationDate = objvcc_CourseENS.operationDate; //操作时间
  objvcc_CourseENT.orderNum = objvcc_CourseENS.orderNum; //序号
  objvcc_CourseENT.outerLink = objvcc_CourseENS.outerLink; //外链地址
  objvcc_CourseENT.viewCount = objvcc_CourseENS.viewCount; //浏览量
  objvcc_CourseENT.themeId = objvcc_CourseENS.themeId; //主题Id
  objvcc_CourseENT.themeName = objvcc_CourseENS.themeName; //主题名
  objvcc_CourseENT.exampleImgPath = objvcc_CourseENS.exampleImgPath; //示例图路径
  objvcc_CourseENT.idXzMajor = objvcc_CourseENS.idXzMajor; //专业流水号
  objvcc_CourseENT.majorID = objvcc_CourseENS.majorID; //专业ID
  objvcc_CourseENT.majorName = objvcc_CourseENS.majorName; //专业名称
  objvcc_CourseENT.idXzCollege = objvcc_CourseENS.idXzCollege; //学院流水号
  objvcc_CourseENT.collegeId = objvcc_CourseENS.collegeId; //学院ID
  objvcc_CourseENT.collegeName = objvcc_CourseENS.collegeName; //学院名称
  objvcc_CourseENT.collegeNameA = objvcc_CourseENS.collegeNameA; //学院名称简写
  objvcc_CourseENT.memo = objvcc_CourseENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvcc_CourseENS:源对象
 * @param objvcc_CourseENT:目标对象
 */
export function vcc_Course_GetObjFromJsonObj(objvcc_CourseENS: clsvcc_CourseEN): clsvcc_CourseEN {
  const objvcc_CourseENT: clsvcc_CourseEN = new clsvcc_CourseEN();
  ObjectAssign(objvcc_CourseENT, objvcc_CourseENS);
  return objvcc_CourseENT;
}
