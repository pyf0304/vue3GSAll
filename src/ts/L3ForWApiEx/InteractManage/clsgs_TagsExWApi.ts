/**
 * 类名:clsgs_TagsExWApi
 * 表名:gs_Tags(01120714)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/05 01:04:04
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 标注(gs_Tags)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月05日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  gs_Tags_GetObjLstAsync,
  gs_Tags_SortFunByKey,
  gs_Tags_FilterFunByKey,
} from '@/ts/L3ForWApi/InteractManage/clsgs_TagsWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsgs_TagsEN } from '@/ts/L0Entity/InteractManage/clsgs_TagsEN';

import { clsgs_TagsENEx } from '@/ts/L0Entity/InteractManage/clsgs_TagsENEx';

import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { paperStore } from '@/store/modules/paper';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
export const gs_TagsEx_Controller = 'gs_TagsExApi';
export const gs_TagsEx_ConstructorName = 'gs_TagsEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function gs_TagsEx_GetWebApiUrl(strController: string, strAction: string): string {
  // const strThisFuncName = 'GetWebApiUrl';
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
 * @param objgs_TagsENS:源对象
 * @returns 目标对象=>clsgs_TagsEN:objgs_TagsENT
 **/
export function gs_TagsEx_CopyToEx(objgs_TagsENS: clsgs_TagsEN): clsgs_TagsENEx {
  const strThisFuncName = gs_TagsEx_CopyToEx.name;
  const objgs_TagsENT = new clsgs_TagsENEx();
  try {
    ObjectAssign(objgs_TagsENT, objgs_TagsENS);
    return objgs_TagsENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_TagsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objgs_TagsENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_TagsEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_TagsENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrgs_TagsObjLst = await gs_Tags_GetObjLstAsync(objPagerPara.whereCond);
  const arrgs_TagsExObjLst = arrgs_TagsObjLst.map(gs_TagsEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrgs_TagsExObjLst) {
      await gs_TagsEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_TagsExObjLst.length == 0) return arrgs_TagsExObjLst;
  let arrgs_Tags_Sel: Array<clsgs_TagsENEx> = arrgs_TagsExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_Tags_Sel = arrgs_Tags_Sel.sort(gs_TagsEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrgs_Tags_Sel = arrgs_Tags_Sel.sort(objPagerPara.sortFun);
    }
    arrgs_Tags_Sel = arrgs_Tags_Sel.slice(intStart, intEnd);
    return arrgs_Tags_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_TagsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_TagsENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function gs_TagsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_TagsENEx.con_PaperTitle:
        return (a: clsgs_TagsENEx, b: clsgs_TagsENEx) => {
          return a.paperTitle.localeCompare(b.paperTitle);
        };
      case clsgs_TagsENEx.con_UserName:
        return (a: clsgs_TagsENEx, b: clsgs_TagsENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      default:
        return gs_Tags_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsgs_TagsENEx.con_PaperTitle:
        return (a: clsgs_TagsENEx, b: clsgs_TagsENEx) => {
          return b.paperTitle.localeCompare(a.paperTitle);
        };
      case clsgs_TagsENEx.con_UserName:
        return (a: clsgs_TagsENEx, b: clsgs_TagsENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      default:
        return gs_Tags_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function gs_TagsEx_FuncMapByFldName(strFldName: string, objgs_TagsEx: clsgs_TagsENEx) {
  const strThisFuncName = gs_TagsEx_FuncMapByFldName.name;
  console.log(objgs_TagsEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsgs_TagsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsgs_TagsENEx.con_PaperTitle:
      return gs_TagsEx_FuncMapPaperTitle(objgs_TagsEx);
    case clsgs_TagsENEx.con_UserName:
      return gs_TagsEx_FuncMapUserName(objgs_TagsEx);
    case clsgs_TagsENEx.con_PaperTitleAuthor:
      return gs_TagsEx_FuncMapPaperTitleAuthor(objgs_TagsEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2022-11-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function gs_TagsEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    case clsgs_TagsENEx.con_PaperTitle:
      return (obj: clsgs_TagsENEx) => {
        return obj.paperTitle === value;
      };
    case clsgs_TagsENEx.con_UserName:
      return (obj: clsgs_TagsENEx) => {
        return obj.userName === value;
      };
    default:
      return gs_Tags_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objgs_TagsS:源对象
 **/
export async function gs_TagsEx_FuncMapPaperTitle(objgs_Tags: clsgs_TagsENEx) {
  const strThisFuncName = gs_TagsEx_FuncMapPaperTitle.name;
  try {
    if (IsNullOrEmpty(objgs_Tags.paperTitle) == true) {
      const PaperEduClsRelaPaperId = objgs_Tags.paperId;
      const PaperEduClsRelaPaperTitle = await paperStore.getPaperTitle(PaperEduClsRelaPaperId);
      objgs_Tags.paperTitle = PaperEduClsRelaPaperTitle;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000456)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_TagsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objgs_TagsS:源对象
 **/
export async function gs_TagsEx_FuncMapUserName(objgs_Tags: clsgs_TagsENEx) {
  const strThisFuncName = gs_TagsEx_FuncMapUserName.name;
  try {
    if (IsNullOrEmpty(objgs_Tags.userName) == true) {
      const vUsersSimUserId = objgs_Tags.userId;
      const vUsersSimUserName = await vQxUsersSimStore.getUserName(vUsersSimUserId);
      objgs_Tags.userName = vUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000311)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_TagsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objgs_TagsS:源对象
 **/
export async function gs_TagsEx_FuncMapPaperTitleAuthor(objgs_Tags: clsgs_TagsENEx) {
  const strThisFuncName = gs_TagsEx_FuncMapPaperTitleAuthor.name;
  try {
    if (IsNullOrEmpty(objgs_Tags.paperTitleAuthor) == true) {
      const PaperEduClsRelaPaperId = objgs_Tags.paperId;
      const PaperEduClsRelaPaperTitleAuthor = await paperStore.getAuthor(PaperEduClsRelaPaperId);
      objgs_Tags.paperTitleAuthor = PaperEduClsRelaPaperTitleAuthor;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000436)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_TagsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
