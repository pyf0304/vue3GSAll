/**
 * 类名:clsPaperResRelaExWApi
 * 表名:PaperResRela(01120964)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/22 00:35:08
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduPaper)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 论文资源关系(PaperResRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年03月22日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPaperResRelaENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperResRelaENEx';
import {
  PaperResRela_GetObjLstAsync,
  PaperResRela_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperResRelaWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsPaperResRelaEN } from '@/ts/L0Entity/GradEduPaper/clsPaperResRelaEN';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsPaperSubResTypeEN } from '@/ts/L0Entity/ResourceMan/clsPaperSubResTypeEN';
import { clsPaperSubResEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubResEN';
import { PaperSubRes_func } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubResWApi';
import { clsvQxUsersSimEN } from '@/ts/L0Entity/UserManage_GP/clsvQxUsersSimEN';
import { clsvPaperSimEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSimEN';
import { vPaperSim_func } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSimWApi';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { PaperSubResType_func } from '@/ts/L3ForWApi/ResourceMan/clsPaperSubResTypeWApi';

export const paperResRelaExController = 'PaperResRelaExApi';
export const paperResRelaEx_ConstructorName = 'paperResRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function PaperResRelaEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objPaperResRelaENS:源对象
 * @returns 目标对象=>clsPaperResRelaEN:objPaperResRelaENT
 **/
export function PaperResRelaEx_CopyToEx(
  objPaperResRelaENS: clsPaperResRelaEN,
): clsPaperResRelaENEx {
  const strThisFuncName = PaperResRelaEx_CopyToEx.name;
  const objPaperResRelaENT = new clsPaperResRelaENEx();
  try {
    ObjectAssign(objPaperResRelaENT, objPaperResRelaENS);
    return objPaperResRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperResRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPaperResRelaENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PaperResRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPaperResRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrPaperResRelaObjLst = await PaperResRela_GetObjLstAsync(objPagerPara.whereCond);
  const arrPaperResRelaExObjLst = arrPaperResRelaObjLst.map(PaperResRelaEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPaperResRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrPaperResRelaExObjLst) {
      await PaperResRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrPaperResRelaExObjLst.length == 0) return arrPaperResRelaExObjLst;
  let arrPaperResRelaSel: Array<clsPaperResRelaENEx> = arrPaperResRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPaperResRelaSel = arrPaperResRelaSel.sort(
        PaperResRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPaperResRelaSel = arrPaperResRelaSel.sort(objPagerPara.sortFun);
    }
    arrPaperResRelaSel = arrPaperResRelaSel.slice(intStart, intEnd);
    return arrPaperResRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      paperResRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperResRelaENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-22
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PaperResRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return PaperResRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return PaperResRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-03-22
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function PaperResRelaEx_FuncMapByFldName(
  strFldName: string,
  objPaperResRelaEx: clsPaperResRelaENEx,
) {
  const strThisFuncName = PaperResRelaEx_FuncMapByFldName.name;
  console.log(objPaperResRelaEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsPaperResRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsPaperResRelaENEx.con_PaperSubResName:
      return PaperResRelaEx_FuncMapPaperSubResName(objPaperResRelaEx);
    case clsPaperResRelaENEx.con_PaperTitle:
      return PaperResRelaEx_FuncMapPaperTitle(objPaperResRelaEx);
    case clsPaperResRelaENEx.con_Author:
      return PaperResRelaEx_FuncMapAuthor(objPaperResRelaEx);
    case clsPaperResRelaENEx.con_UserName:
      return PaperResRelaEx_FuncMapUserName(objPaperResRelaEx);
    case clsPaperResRelaENEx.con_PaperSubResTypeName:
      return PaperResRelaEx_FuncMapPaperSubResTypeName(objPaperResRelaEx);
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperResRelaS:源对象
 **/
export async function PaperResRelaEx_FuncMapPaperSubResName(objPaperResRela: clsPaperResRelaENEx) {
  const strThisFuncName = PaperResRelaEx_FuncMapPaperSubResName.name;
  try {
    if (IsNullOrEmpty(objPaperResRela.paperSubResName) == true) {
      const PaperSubResPaperSubResId = objPaperResRela.paperSubResId;
      const PaperSubResPaperSubResName = await PaperSubRes_func(
        clsPaperSubResEN.con_PaperSubResId,
        clsPaperSubResEN.con_PaperSubResName,
        PaperSubResPaperSubResId.toString(),
      );
      objPaperResRela.paperSubResName = PaperSubResPaperSubResName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000520)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperResRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperResRelaS:源对象
 **/
export async function PaperResRelaEx_FuncMapPaperTitle(objPaperResRela: clsPaperResRelaENEx) {
  const strThisFuncName = PaperResRelaEx_FuncMapPaperTitle.name;
  try {
    if (IsNullOrEmpty(objPaperResRela.paperTitle) == true) {
      const vPaperSimPaperId = objPaperResRela.paperId;
      const vPaperSimPaperTitle = await vPaperSim_func(
        clsvPaperSimEN.con_PaperId,
        clsvPaperSimEN.con_PaperTitle,
        vPaperSimPaperId,
      );
      objPaperResRela.paperTitle = vPaperSimPaperTitle;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000456)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperResRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperResRelaS:源对象
 **/
export async function PaperResRelaEx_FuncMapAuthor(objPaperResRela: clsPaperResRelaENEx) {
  const strThisFuncName = PaperResRelaEx_FuncMapAuthor.name;
  try {
    if (IsNullOrEmpty(objPaperResRela.author) == true) {
      const vPaperSimPaperId = objPaperResRela.paperId;
      const vPaperSimAuthor = await vPaperSim_func(
        clsvPaperSimEN.con_PaperId,
        clsvPaperSimEN.con_Author,
        vPaperSimPaperId,
      );
      objPaperResRela.author = vPaperSimAuthor;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000521)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperResRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperResRelaS:源对象
 **/
export async function PaperResRelaEx_FuncMapUserName(objPaperResRela: clsPaperResRelaENEx) {
  const strThisFuncName = PaperResRelaEx_FuncMapUserName.name;
  try {
    if (IsNullOrEmpty(objPaperResRela.userName) == true) {
      const vQxUsersSimUserId = objPaperResRela.updUser;
      const vQxUsersSimUserName = await vQxUsersSimStore.getUserName(vQxUsersSimUserId);
      objPaperResRela.userName = vQxUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000311)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperResRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPaperResRelaS:源对象
 **/
export async function PaperResRelaEx_FuncMapPaperSubResTypeName(
  objPaperResRela: clsPaperResRelaENEx,
) {
  const strThisFuncName = PaperResRelaEx_FuncMapPaperSubResTypeName.name;
  try {
    if (IsNullOrEmpty(objPaperResRela.paperSubResTypeName) == true) {
      const PaperSubResPaperSubResId = objPaperResRela.paperSubResId;
      const PaperSubResPaperSubResTypeId = await PaperSubRes_func(
        clsPaperSubResEN.con_PaperSubResId,
        clsPaperSubResEN.con_PaperSubResTypeId,
        PaperSubResPaperSubResId.toString(),
      );
      const PaperSubResTypePaperSubResTypeId = PaperSubResPaperSubResTypeId;
      const PaperSubResTypePaperSubResTypeName = await PaperSubResType_func(
        clsPaperSubResTypeEN.con_PaperSubResTypeId,
        clsPaperSubResTypeEN.con_PaperSubResTypeName,
        PaperSubResTypePaperSubResTypeId,
      );
      objPaperResRela.paperSubResTypeName = PaperSubResTypePaperSubResTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000522)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperResRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
