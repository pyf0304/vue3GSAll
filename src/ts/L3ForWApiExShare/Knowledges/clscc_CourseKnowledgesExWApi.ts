/**
 * 类名:clscc_CourseKnowledgesExWApi
 * 表名:cc_CourseKnowledges(01120082)
 * 版本:2023.08.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/26 09:01:26
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识点(cc_CourseKnowledges)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年08月26日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  cc_CourseKnowledges_GetObjLstCache,
  cc_CourseKnowledges_GetObjLstAsync,
  cc_CourseKnowledges_SortFunByKey,
  cc_CourseKnowledges_FilterFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clscc_CourseKnowledgesWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clscc_CourseKnowledgesEN } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN';
import { clscc_CourseKnowledgesENEx } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesENEx';
import {
  cc_CourseChapter_func,
  cc_CourseChapter_funcKey,
} from '@/ts/L3ForWApi/Knowledges/clscc_CourseChapterWApi';
import { clscc_CourseChapterEN } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterEN';
import {
  KnowledgeType_func,
  KnowledgeType_funcKey,
} from '@/ts/L3ForWApi/Knowledges/clsKnowledgeTypeWApi';
import { clsKnowledgeTypeEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeTypeEN';
import {
  vQuestionNumByKnowledgeId_func,
  vQuestionNumByKnowledgeId_funcKey,
} from '@/ts/L3ForWApi/Knowledges/clsvQuestionNumByKnowledgeIdWApi';
import { clsvQuestionNumByKnowledgeIdEN } from '@/ts/L0Entity/Knowledges/clsvQuestionNumByKnowledgeIdEN';
import {
  vcc_Course_Sim_func,
  vcc_Course_Sim_funcKey,
} from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi';
import { clsvcc_Course_SimEN } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN';

import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { vUsersSimEx_func } from '@/ts/L3ForWApiExShare/UserManage_GP/clsvUsersSimExWApi';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

export const cc_CourseKnowledgesExController = 'cc_CourseKnowledgesExApi';
export const cc_CourseKnowledgesEx_ConstructorName = 'cc_CourseKnowledgesEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_CourseKnowledgesEx_GetWebApiUrl(
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
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objcc_CourseKnowledgesENS:源对象
 * @returns 目标对象=>clscc_CourseKnowledgesEN:objcc_CourseKnowledgesENT
 **/
export function cc_CourseKnowledgesEx_CopyToEx(
  objcc_CourseKnowledgesENS: clscc_CourseKnowledgesEN,
): clscc_CourseKnowledgesENEx {
  const strThisFuncName = cc_CourseKnowledgesEx_CopyToEx.name;
  const objcc_CourseKnowledgesENT = new clscc_CourseKnowledgesENEx();
  try {
    ObjectAssign(objcc_CourseKnowledgesENT, objcc_CourseKnowledgesENS);
    return objcc_CourseKnowledgesENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_CourseKnowledgesENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_CourseKnowledgesEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clscc_CourseKnowledgesENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrcc_CourseKnowledgesObjLst = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
  const arrcc_CourseKnowledgesExObjLst = arrcc_CourseKnowledgesObjLst.map(
    cc_CourseKnowledgesEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_CourseKnowledgesEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrcc_CourseKnowledgesExObjLst) {
      await cc_CourseKnowledgesEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_CourseKnowledgesExObjLst.length == 0) return arrcc_CourseKnowledgesExObjLst;
  let arrcc_CourseKnowledgesSel: Array<clscc_CourseKnowledgesENEx> = arrcc_CourseKnowledgesExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objcc_CourseKnowledgesCond = new clscc_CourseKnowledgesENEx();
  ObjectAssign(objcc_CourseKnowledgesCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clscc_CourseKnowledgesWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_CourseKnowledgesCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_CourseKnowledgesSel.length == 0) return arrcc_CourseKnowledgesSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.sort(
        cc_CourseKnowledgesEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.sort(objPagerPara.sortFun);
    }
    arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.slice(intStart, intEnd);
    return arrcc_CourseKnowledgesSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseKnowledgesENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_CourseKnowledgesEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_CourseKnowledgesENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_CourseKnowledgesObjLst = await cc_CourseKnowledges_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrcc_CourseKnowledgesExObjLst = arrcc_CourseKnowledgesObjLst.map(
    cc_CourseKnowledgesEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_CourseKnowledgesEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrcc_CourseKnowledgesExObjLst) {
      await cc_CourseKnowledgesEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_CourseKnowledgesExObjLst.length == 0) return arrcc_CourseKnowledgesExObjLst;
  let arrcc_CourseKnowledgesSel: Array<clscc_CourseKnowledgesENEx> = arrcc_CourseKnowledgesExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.sort(
        cc_CourseKnowledgesEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.sort(objPagerPara.sortFun);
    }
    arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.slice(intStart, intEnd);
    return arrcc_CourseKnowledgesSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseKnowledgesENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapCourseChapterName(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
) {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapCourseChapterName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.courseChapterName) == true) {
      const ccCourseChapterCourseChapterId = objcc_CourseKnowledges.courseChapterId;
      const ccCourseChapterCourseChapterName = await cc_CourseChapter_func(
        clscc_CourseChapterEN.con_CourseChapterId,
        clscc_CourseChapterEN.con_CourseChapterName,
        ccCourseChapterCourseChapterId,
        objcc_CourseKnowledges.courseId,
      );
      objcc_CourseKnowledges.courseChapterName = ccCourseChapterCourseChapterName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000460)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapKnowledgeTypeName(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
) {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapKnowledgeTypeName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.knowledgeTypeName) == true) {
      const KnowledgeTypeKnowledgeTypeId = objcc_CourseKnowledges.knowledgeTypeId;
      const KnowledgeTypeKnowledgeTypeName = await KnowledgeType_func(
        clsKnowledgeTypeEN.con_KnowledgeTypeId,
        clsKnowledgeTypeEN.con_KnowledgeTypeName,
        KnowledgeTypeKnowledgeTypeId,
        objcc_CourseKnowledges.courseId,
      );
      objcc_CourseKnowledges.knowledgeTypeName = KnowledgeTypeKnowledgeTypeName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000461)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapQuestionNum(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
) {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapQuestionNum.name;
  try {
    if (objcc_CourseKnowledges.questionNum == 0) {
      const vQuestionNumByKnowledgeIdCourseKnowledgeId = objcc_CourseKnowledges.courseKnowledgeId;
      const vQuestionNumByKnowledgeIdQuestionNum = await vQuestionNumByKnowledgeId_func(
        clsvQuestionNumByKnowledgeIdEN.con_CourseKnowledgeId,
        clsvQuestionNumByKnowledgeIdEN.con_QuestionNum,
        vQuestionNumByKnowledgeIdCourseKnowledgeId,
        objcc_CourseKnowledges.courseId,
      );
      objcc_CourseKnowledges.questionNum = vQuestionNumByKnowledgeIdQuestionNum;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000462)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapCourseName(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
) {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.courseName) == true) {
      const vccCourseSimCourseId = objcc_CourseKnowledges.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objcc_CourseKnowledges.courseName = vccCourseSimCourseName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapChapterName(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
) {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapChapterName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.chapterName) == true) {
      const ccCourseChapterCourseChapterId = objcc_CourseKnowledges.courseChapterId;
      const ccCourseChapterChapterName = await cc_CourseChapter_func(
        clscc_CourseChapterEN.con_CourseChapterId,
        clscc_CourseChapterEN.con_ChapterName,
        ccCourseChapterCourseChapterId,
        objcc_CourseKnowledges.courseId,
      );
      objcc_CourseKnowledges.chapterName = ccCourseChapterChapterName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000463)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapUserName(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
) {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapUserName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.userName) == true) {
      const vUsersSimUserId = objcc_CourseKnowledges.userId;
      const vUsersSimUserName = await vUsersSimEx_func(
        clsvUsersSimEN.con_UserId,
        clsvUsersSimEN.con_UserName,
        vUsersSimUserId,
      );
      objcc_CourseKnowledges.userName = vUsersSimUserName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000311)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapCourseCode(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
) {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapCourseCode.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.courseCode) == true) {
      const vccCourseSimCourseId = objcc_CourseKnowledges.courseId;
      const vccCourseSimCourseCode = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseCode,
        vccCourseSimCourseId,
      );
      objcc_CourseKnowledges.courseCode = vccCourseSimCourseCode;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000458)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapSectionNameSim(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
) {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapSectionNameSim.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.sectionNameSim) == true) {
      const ccCourseChapterCourseChapterId = objcc_CourseKnowledges.courseChapterId;
      const ccCourseChapterSectionNameSim = await cc_CourseChapter_func(
        clscc_CourseChapterEN.con_CourseChapterId,
        clscc_CourseChapterEN.con_SectionNameSim,
        ccCourseChapterCourseChapterId,
        objcc_CourseKnowledges.courseId,
      );
      objcc_CourseKnowledges.sectionNameSim = ccCourseChapterSectionNameSim;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000464)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapChapterNameSim(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
) {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapChapterNameSim.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.chapterNameSim) == true) {
      const ccCourseChapterCourseChapterId = objcc_CourseKnowledges.courseChapterId;
      const ccCourseChapterChapterNameSim = await cc_CourseChapter_func(
        clscc_CourseChapterEN.con_CourseChapterId,
        clscc_CourseChapterEN.con_ChapterNameSim,
        ccCourseChapterCourseChapterId,
        objcc_CourseKnowledges.courseId,
      );
      objcc_CourseKnowledges.chapterNameSim = ccCourseChapterChapterNameSim;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000465)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapSectionName(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
) {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapSectionName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.sectionName) == true) {
      const ccCourseChapterCourseChapterId = objcc_CourseKnowledges.courseChapterId;
      const ccCourseChapterSectionName = await cc_CourseChapter_func(
        clscc_CourseChapterEN.con_CourseChapterId,
        clscc_CourseChapterEN.con_SectionName,
        ccCourseChapterCourseChapterId,
        objcc_CourseKnowledges.courseId,
      );
      objcc_CourseKnowledges.sectionName = ccCourseChapterSectionName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000466)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-08-26
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_CourseKnowledgesEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscc_CourseKnowledgesENEx.con_CourseChapterName:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return a.courseChapterName.localeCompare(b.courseChapterName);
        };
      case clscc_CourseKnowledgesENEx.con_CourseName:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clscc_CourseKnowledgesENEx.con_KnowledgeTypeName:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return a.knowledgeTypeName.localeCompare(b.knowledgeTypeName);
        };
      case clscc_CourseKnowledgesENEx.con_QuestionNum:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return a.questionNum - b.questionNum;
        };
      case clscc_CourseKnowledgesENEx.con_ChapterName:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return a.chapterName.localeCompare(b.chapterName);
        };
      case clscc_CourseKnowledgesENEx.con_UserName:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      case clscc_CourseKnowledgesENEx.con_CourseCode:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return a.courseCode.localeCompare(b.courseCode);
        };
      case clscc_CourseKnowledgesENEx.con_SectionNameSim:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return a.sectionNameSim.localeCompare(b.sectionNameSim);
        };
      case clscc_CourseKnowledgesENEx.con_ChapterNameSim:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return a.chapterNameSim.localeCompare(b.chapterNameSim);
        };
      case clscc_CourseKnowledgesENEx.con_SectionName:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return a.sectionName.localeCompare(b.sectionName);
        };
      default:
        return cc_CourseKnowledges_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clscc_CourseKnowledgesENEx.con_CourseChapterName:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return b.courseChapterName.localeCompare(a.courseChapterName);
        };
      case clscc_CourseKnowledgesENEx.con_CourseName:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clscc_CourseKnowledgesENEx.con_KnowledgeTypeName:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return b.knowledgeTypeName.localeCompare(a.knowledgeTypeName);
        };
      case clscc_CourseKnowledgesENEx.con_QuestionNum:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return b.questionNum - a.questionNum;
        };
      case clscc_CourseKnowledgesENEx.con_ChapterName:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return b.chapterName.localeCompare(a.chapterName);
        };
      case clscc_CourseKnowledgesENEx.con_UserName:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      case clscc_CourseKnowledgesENEx.con_CourseCode:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return b.courseCode.localeCompare(a.courseCode);
        };
      case clscc_CourseKnowledgesENEx.con_SectionNameSim:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return b.sectionNameSim.localeCompare(a.sectionNameSim);
        };
      case clscc_CourseKnowledgesENEx.con_ChapterNameSim:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return b.chapterNameSim.localeCompare(a.chapterNameSim);
        };
      case clscc_CourseKnowledgesENEx.con_SectionName:
        return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
          return b.sectionName.localeCompare(a.sectionName);
        };
      default:
        return cc_CourseKnowledges_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-08-26
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function cc_CourseKnowledgesEx_FuncMapByFldName(
  strFldName: string,
  objcc_CourseKnowledgesEx: clscc_CourseKnowledgesENEx,
) {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clscc_CourseKnowledgesEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscc_CourseKnowledgesENEx.con_CourseChapterName:
      return cc_CourseKnowledgesEx_FuncMapCourseChapterName(objcc_CourseKnowledgesEx);
    case clscc_CourseKnowledgesENEx.con_CourseName:
      return cc_CourseKnowledgesEx_FuncMapCourseName(objcc_CourseKnowledgesEx);
    case clscc_CourseKnowledgesENEx.con_KnowledgeTypeName:
      return cc_CourseKnowledgesEx_FuncMapKnowledgeTypeName(objcc_CourseKnowledgesEx);
    case clscc_CourseKnowledgesENEx.con_QuestionNum:
      return cc_CourseKnowledgesEx_FuncMapQuestionNum(objcc_CourseKnowledgesEx);
    case clscc_CourseKnowledgesENEx.con_ChapterName:
      return cc_CourseKnowledgesEx_FuncMapChapterName(objcc_CourseKnowledgesEx);
    case clscc_CourseKnowledgesENEx.con_UserName:
      return cc_CourseKnowledgesEx_FuncMapUserName(objcc_CourseKnowledgesEx);
    case clscc_CourseKnowledgesENEx.con_CourseCode:
      return cc_CourseKnowledgesEx_FuncMapCourseCode(objcc_CourseKnowledgesEx);
    case clscc_CourseKnowledgesENEx.con_SectionNameSim:
      return cc_CourseKnowledgesEx_FuncMapSectionNameSim(objcc_CourseKnowledgesEx);
    case clscc_CourseKnowledgesENEx.con_ChapterNameSim:
      return cc_CourseKnowledgesEx_FuncMapChapterNameSim(objcc_CourseKnowledgesEx);
    case clscc_CourseKnowledgesENEx.con_SectionName:
      return cc_CourseKnowledgesEx_FuncMapSectionName(objcc_CourseKnowledgesEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-08-26
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function cc_CourseKnowledgesEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clscc_CourseKnowledgesENEx.con_CourseChapterName:
      return (obj: clscc_CourseKnowledgesENEx) => {
        return obj.courseChapterName === value;
      };
    case clscc_CourseKnowledgesENEx.con_CourseName:
      return (obj: clscc_CourseKnowledgesENEx) => {
        return obj.courseName === value;
      };
    case clscc_CourseKnowledgesENEx.con_KnowledgeTypeName:
      return (obj: clscc_CourseKnowledgesENEx) => {
        return obj.knowledgeTypeName === value;
      };
    case clscc_CourseKnowledgesENEx.con_QuestionNum:
      return (obj: clscc_CourseKnowledgesENEx) => {
        return obj.questionNum === value;
      };
    case clscc_CourseKnowledgesENEx.con_ChapterName:
      return (obj: clscc_CourseKnowledgesENEx) => {
        return obj.chapterName === value;
      };
    case clscc_CourseKnowledgesENEx.con_UserName:
      return (obj: clscc_CourseKnowledgesENEx) => {
        return obj.userName === value;
      };
    case clscc_CourseKnowledgesENEx.con_CourseCode:
      return (obj: clscc_CourseKnowledgesENEx) => {
        return obj.courseCode === value;
      };
    case clscc_CourseKnowledgesENEx.con_SectionNameSim:
      return (obj: clscc_CourseKnowledgesENEx) => {
        return obj.sectionNameSim === value;
      };
    case clscc_CourseKnowledgesENEx.con_ChapterNameSim:
      return (obj: clscc_CourseKnowledgesENEx) => {
        return obj.chapterNameSim === value;
      };
    case clscc_CourseKnowledgesENEx.con_SectionName:
      return (obj: clscc_CourseKnowledgesENEx) => {
        return obj.sectionName === value;
      };
    default:
      return cc_CourseKnowledges_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapKeyCourseChapterName(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapKeyCourseChapterName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.courseChapterName) == true) return [];
    const ccCourseChapterCourseChapterName = objcc_CourseKnowledges.courseChapterName;
    const arrCourseChapterId = await cc_CourseChapter_funcKey(
      clscc_CourseChapterEN.con_CourseChapterName,
      ccCourseChapterCourseChapterName,
      objcc_CourseKnowledges.courseId,
      enumComparisonOp.Like_03,
    );
    return arrCourseChapterId;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000460)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapKeyKnowledgeTypeName(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapKeyKnowledgeTypeName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.knowledgeTypeName) == true) return [];
    const KnowledgeTypeKnowledgeTypeName = objcc_CourseKnowledges.knowledgeTypeName;
    const arrKnowledgeTypeId = await KnowledgeType_funcKey(
      clsKnowledgeTypeEN.con_KnowledgeTypeName,
      KnowledgeTypeKnowledgeTypeName,
      objcc_CourseKnowledges.courseId,
      enumComparisonOp.Like_03,
    );
    return arrKnowledgeTypeId;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000461)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapKeyQuestionNum(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapKeyQuestionNum.name;
  try {
    if (objcc_CourseKnowledges.questionNum == 0) return [];
    const vQuestionNumByKnowledgeIdQuestionNum = objcc_CourseKnowledges.questionNum;
    const arrCourseKnowledgeId = await vQuestionNumByKnowledgeId_funcKey(
      clsvQuestionNumByKnowledgeIdEN.con_QuestionNum,
      vQuestionNumByKnowledgeIdQuestionNum,
      objcc_CourseKnowledges.courseId,
      enumComparisonOp.Like_03,
    );
    return arrCourseKnowledgeId;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000462)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapKeyCourseName(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.courseName) == true) return [];
    const vccCourseSimCourseName = objcc_CourseKnowledges.courseName;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseName,
      vccCourseSimCourseName,
      enumComparisonOp.Like_03,
    );
    return arrCourseId;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapKeyChapterName(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapKeyChapterName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.chapterName) == true) return [];
    const ccCourseChapterChapterName = objcc_CourseKnowledges.chapterName;
    const arrCourseChapterId = await cc_CourseChapter_funcKey(
      clscc_CourseChapterEN.con_ChapterName,
      ccCourseChapterChapterName,
      objcc_CourseKnowledges.courseId,
      enumComparisonOp.Like_03,
    );
    return arrCourseChapterId;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000463)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapKeyUserName(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapKeyUserName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.userName) == true) return [];
    const vUsersSimUserName = objcc_CourseKnowledges.userName;
    const arrUserId = vQxUsersSimStore.getUserIdLstByUserName(
      vUsersSimUserName,
      enumComparisonOp.Like_03,
    );
    return arrUserId;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000311)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapKeyCourseCode(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapKeyCourseCode.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.courseCode) == true) return [];
    const vccCourseSimCourseCode = objcc_CourseKnowledges.courseCode;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseCode,
      vccCourseSimCourseCode,
      enumComparisonOp.Like_03,
    );
    return arrCourseId;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000458)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapKeySectionNameSim(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapKeySectionNameSim.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.sectionNameSim) == true) return [];
    const ccCourseChapterSectionNameSim = objcc_CourseKnowledges.sectionNameSim;
    const arrCourseChapterId = await cc_CourseChapter_funcKey(
      clscc_CourseChapterEN.con_SectionNameSim,
      ccCourseChapterSectionNameSim,
      objcc_CourseKnowledges.courseId,
      enumComparisonOp.Like_03,
    );
    return arrCourseChapterId;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000464)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapKeyChapterNameSim(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapKeyChapterNameSim.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.chapterNameSim) == true) return [];
    const ccCourseChapterChapterNameSim = objcc_CourseKnowledges.chapterNameSim;
    const arrCourseChapterId = await cc_CourseChapter_funcKey(
      clscc_CourseChapterEN.con_ChapterNameSim,
      ccCourseChapterChapterNameSim,
      objcc_CourseKnowledges.courseId,
      enumComparisonOp.Like_03,
    );
    return arrCourseChapterId;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000465)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export async function cc_CourseKnowledgesEx_FuncMapKeySectionName(
  objcc_CourseKnowledges: clscc_CourseKnowledgesENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseKnowledgesEx_FuncMapKeySectionName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseKnowledges.sectionName) == true) return [];
    const ccCourseChapterSectionName = objcc_CourseKnowledges.sectionName;
    const arrCourseChapterId = await cc_CourseChapter_funcKey(
      clscc_CourseChapterEN.con_SectionName,
      ccCourseChapterSectionName,
      objcc_CourseKnowledges.courseId,
      enumComparisonOp.Like_03,
    );
    return arrCourseChapterId;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000466)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseKnowledgesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
