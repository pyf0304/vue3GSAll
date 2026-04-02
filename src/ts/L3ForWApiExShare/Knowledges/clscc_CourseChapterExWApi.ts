/**
 * 类名:clscc_CourseChapterExWApi
 * 表名:cc_CourseChapter(01120060)
 * 版本:2023.08.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/27 10:37:40
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
 * 课程章节(cc_CourseChapter)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年08月27日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys, BindDdl_ObjLstInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
import {
  cc_CourseChapter_GetObjLstCache,
  cc_CourseChapter_GetObjLstAsync,
  cc_CourseChapter_SortFunByKey,
  cc_CourseChapter_FilterFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clscc_CourseChapterWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clscc_CourseChapterEN } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterEN';
import { clscc_CourseChapterENEx } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterENEx';
import {
  vcc_Course_Sim_func,
  vcc_Course_Sim_funcKey,
} from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi';
import { clsvcc_Course_SimEN } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const cc_CourseChapterExController = 'cc_CourseChapterExApi';
export const cc_CourseChapterEx_ConstructorName = 'cc_CourseChapterEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_CourseChapterEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objcc_CourseChapterENS:源对象
 * @returns 目标对象=>clscc_CourseChapterEN:objcc_CourseChapterENT
 **/
export function cc_CourseChapterEx_CopyToEx(
  objcc_CourseChapterENS: clscc_CourseChapterEN,
): clscc_CourseChapterENEx {
  const strThisFuncName = cc_CourseChapterEx_CopyToEx.name;
  const objcc_CourseChapterENT = new clscc_CourseChapterENEx();
  try {
    ObjectAssign(objcc_CourseChapterENT, objcc_CourseChapterENS);
    return objcc_CourseChapterENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseChapterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_CourseChapterENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_CourseChapterEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clscc_CourseChapterENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrcc_CourseChapterObjLst = await cc_CourseChapter_GetObjLstCache(strCourseId);
  const arrcc_CourseChapterExObjLst = arrcc_CourseChapterObjLst.map(cc_CourseChapterEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_CourseChapterEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrcc_CourseChapterExObjLst) {
      await cc_CourseChapterEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_CourseChapterExObjLst.length == 0) return arrcc_CourseChapterExObjLst;
  let arrcc_CourseChapterSel: Array<clscc_CourseChapterENEx> = arrcc_CourseChapterExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objcc_CourseChapterCond = new clscc_CourseChapterENEx();
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
            const arrValues = strValue.split(',');
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
        cc_CourseChapterEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_CourseChapterSel = arrcc_CourseChapterSel.sort(objPagerPara.sortFun);
    }
    arrcc_CourseChapterSel = arrcc_CourseChapterSel.slice(intStart, intEnd);
    return arrcc_CourseChapterSel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_CourseChapterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseChapterENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_CourseChapterEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_CourseChapterENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_CourseChapterObjLst = await cc_CourseChapter_GetObjLstAsync(objPagerPara.whereCond);
  const arrcc_CourseChapterExObjLst = arrcc_CourseChapterObjLst.map(cc_CourseChapterEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_CourseChapterEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrcc_CourseChapterExObjLst) {
      await cc_CourseChapterEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_CourseChapterExObjLst.length == 0) return arrcc_CourseChapterExObjLst;
  let arrcc_CourseChapterSel: Array<clscc_CourseChapterENEx> = arrcc_CourseChapterExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_CourseChapterSel = arrcc_CourseChapterSel.sort(
        cc_CourseChapterEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_CourseChapterSel = arrcc_CourseChapterSel.sort(objPagerPara.sortFun);
    }
    arrcc_CourseChapterSel = arrcc_CourseChapterSel.slice(intStart, intEnd);
    return arrcc_CourseChapterSel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_CourseChapterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseChapterENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseChapterS:源对象
 **/
export async function cc_CourseChapterEx_FuncMapCourseName(
  objcc_CourseChapter: clscc_CourseChapterENEx,
) {
  const strThisFuncName = cc_CourseChapterEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseChapter.courseName) == true) {
      const vccCourseSimCourseId = objcc_CourseChapter.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objcc_CourseChapter.courseName = vccCourseSimCourseName;
    }
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseChapterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-08-27
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_CourseChapterEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscc_CourseChapterENEx.con_QuestionNum:
        return (a: clscc_CourseChapterENEx, b: clscc_CourseChapterENEx) => {
          return a.questionNum - b.questionNum;
        };
      case clscc_CourseChapterENEx.con_CourseName:
        return (a: clscc_CourseChapterENEx, b: clscc_CourseChapterENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clscc_CourseChapterENEx.con_MajorName:
        return (a: clscc_CourseChapterENEx, b: clscc_CourseChapterENEx) => {
          return a.majorName.localeCompare(b.majorName);
        };
      default:
        return cc_CourseChapter_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clscc_CourseChapterENEx.con_QuestionNum:
        return (a: clscc_CourseChapterENEx, b: clscc_CourseChapterENEx) => {
          return b.questionNum - a.questionNum;
        };
      case clscc_CourseChapterENEx.con_CourseName:
        return (a: clscc_CourseChapterENEx, b: clscc_CourseChapterENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clscc_CourseChapterENEx.con_MajorName:
        return (a: clscc_CourseChapterENEx, b: clscc_CourseChapterENEx) => {
          return b.majorName.localeCompare(a.majorName);
        };
      default:
        return cc_CourseChapter_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-08-27
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function cc_CourseChapterEx_FuncMapByFldName(
  strFldName: string,
  objcc_CourseChapterEx: clscc_CourseChapterENEx,
) {
  const strThisFuncName = cc_CourseChapterEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clscc_CourseChapterEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscc_CourseChapterENEx.con_CourseName:
      return cc_CourseChapterEx_FuncMapCourseName(objcc_CourseChapterEx);
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
 * 日期:2023-08-27
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function cc_CourseChapterEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clscc_CourseChapterENEx.con_QuestionNum:
      return (obj: clscc_CourseChapterENEx) => {
        return obj.questionNum === value;
      };
    case clscc_CourseChapterENEx.con_CourseName:
      return (obj: clscc_CourseChapterENEx) => {
        return obj.courseName === value;
      };
    case clscc_CourseChapterENEx.con_MajorName:
      return (obj: clscc_CourseChapterENEx) => {
        return obj.majorName === value;
      };
    default:
      return cc_CourseChapter_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_CourseChapterS:源对象
 **/
export async function cc_CourseChapterEx_FuncMapKeyCourseName(
  objcc_CourseChapter: clscc_CourseChapterENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_CourseChapterEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseChapter.courseName) == true) return [];
    const vccCourseSimCourseName = objcc_CourseChapter.courseName;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseName,
      vccCourseSimCourseName,
      enumComparisonOp.Like_03,
    );
    return arrCourseId;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseChapterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export async function cc_CourseChapterEx_BindDdl_CourseChapterIdInDivCache(
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