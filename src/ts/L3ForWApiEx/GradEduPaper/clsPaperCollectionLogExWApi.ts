//import $ from "jquery";

import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  PaperCollectionLog_AddNewRecordAsync,
  PaperCollectionLog_GetObjLstAsync,
  PaperCollectionLog_GetRecCountByCondAsync,
  PaperCollectionLog_IsExistRecordAsync,
  PaperCollectionLog_ReFreshCache,
  PaperCollectionLog_SortFunByKey,
  PaperCollectionLog_FilterFunByKey,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperCollectionLogWApi';
import { Paper_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsPaperCollectionLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperCollectionLogEN';
import { clsPaperCollectionLogENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperCollectionLogENEx';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { userStore } from '@/store/modulesShare/user';
export const paperCollectionLogEx_Controller = 'PaperCollectionLogExApi';
export const paperCollectionLogEx_ConstructorName = 'paperCollectionLogEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function PaperCollectionLogEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * @param objPaperCollectionLogENS:源对象
 * @returns 目标对象=>clsPaperCollectionLogEN:objPaperCollectionLogENT
 **/
export function PaperCollectionLogEx_CopyToEx(
  objPaperCollectionLogENS: clsPaperCollectionLogEN,
): clsPaperCollectionLogENEx {
  const strThisFuncName = PaperCollectionLogEx_CopyToEx.name;
  const objPaperCollectionLogENT = new clsPaperCollectionLogENEx();
  try {
    ObjectAssign(objPaperCollectionLogENT, objPaperCollectionLogENS);
    return objPaperCollectionLogENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperCollectionLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPaperCollectionLogENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PaperCollectionLogEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPaperCollectionLogENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrPaperCollectionLogObjLst = await PaperCollectionLog_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrPaperCollectionLogExObjLst = arrPaperCollectionLogObjLst.map(
    PaperCollectionLogEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrPaperCollectionLogExObjLst) {
      await PaperCollectionLogEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrPaperCollectionLogExObjLst.length == 0) return arrPaperCollectionLogExObjLst;
  let arrPaperCollectionLog_Sel: Array<clsPaperCollectionLogENEx> = arrPaperCollectionLogExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPaperCollectionLog_Sel = arrPaperCollectionLog_Sel.sort(
        PaperCollectionLogEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrPaperCollectionLog_Sel = arrPaperCollectionLog_Sel.sort(objPagerPara.sortFun);
    }
    arrPaperCollectionLog_Sel = arrPaperCollectionLog_Sel.slice(intStart, intEnd);
    return arrPaperCollectionLog_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      paperCollectionLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperCollectionLogENEx>();
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
export function PaperCollectionLogEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return PaperCollectionLog_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return PaperCollectionLog_SortFunByKey(strKey, AscOrDesc);
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
export function PaperCollectionLogEx_FuncMapByFldName(
  strFldName: string,
  objPaperCollectionLogEx: clsPaperCollectionLogENEx,
) {
  const strThisFuncName = PaperCollectionLogEx_FuncMapByFldName.name;
  console.log(objPaperCollectionLogEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsPaperCollectionLogEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
export async function PaperCollectionLogEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return PaperCollectionLog_FilterFunByKey(strKey, value);
  }
}

//添加收藏
export async function PaperCollectionLogEx_btnAddCollection_Click(
  strPaperId: string,
  strUpdUser: string,
) {
  const strThisFuncName = PaperCollectionLogEx_btnAddCollection_Click.name;

  const objPaperCollectionLogEN: clsPaperCollectionLogEN = new clsPaperCollectionLogEN();

  objPaperCollectionLogEN.SetPaperId(strPaperId);
  objPaperCollectionLogEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
  objPaperCollectionLogEN.SetUpdUser(userStore.getUserId); // 修改用户Id
  const strWhereCond = ` updUser='${objPaperCollectionLogEN.updUser}' and paperId='${strPaperId}'`;
  try {
    const bolIsExist = await PaperCollectionLog_IsExistRecordAsync(strWhereCond);

    if (bolIsExist == true) {
      const strMsg = `您已经收藏过这条论文了！`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }

    const returnBool = await PaperCollectionLog_AddNewRecordAsync(objPaperCollectionLogEN);

    if (returnBool == true) {
      PaperCollectionLog_ReFreshCache(strUpdUser);
      const strWhereCond2 = ` paperId='${strPaperId}'`;
      const intCollectionCount = await PaperCollectionLog_GetRecCountByCondAsync(strWhereCond2);
      const objPaperEN: clsPaperEN = new clsPaperEN();
      objPaperEN.SetPaperId(strPaperId);
      objPaperEN.SetCollectionCount(intCollectionCount);

      objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
      if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
        throw Format(
          '关键字不能为空!(in {0}.{1})',
          paperCollectionLogEx_ConstructorName,
          strThisFuncName,
        );
      }
      const returnBool2 = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool2 == true) {
        //this.BindGv_Paper00();
        return true;
      } else {
        const strInfo = `收藏不成功!`;
        alert(strInfo);
        console.log('收藏不成功');
        return false;
      }
    } else {
      const strInfo = `收藏不成功!`;

      //显示信息框
      alert(strInfo);
      //this.BindGv_vPaperSubViewpoint();
      return false;
    }
  } catch (e: any) {
    console.error('catch(e)=');
    console.error(e);
    const strMsg = `收藏不成功,${e}.`;
    alert(strMsg);
    return false;
  }
}
