/**
* 类名:clsMajorDirectionPaperRelaExWApi
* 表名:MajorDirectionPaperRela(01120554)
* 版本:2023.02.22.1(服务器:WIN-SRV103-116)
* 日期:2023/02/22 23:30:36
* 生成者:pyf
* 生成服务器IP:
工程名称:问卷调查(0112)
CM工程:研究生论文学习(变量首字母小写)-全部函数集
* 相关数据库:103.116.76.183,9433EduHigh_Jsie
* PrjDataBaseId:0170
模块中文名:研培论文(GradEduPaper)
* 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
* 编程语言:TypeScript
* 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
  *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
**/

/**
 * 专业方向论文关系(MajorDirectionPaperRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年02月22日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import {
  MajorDirectionPaperRela_AddNewRecordAsync,
  MajorDirectionPaperRela_GetObjLstAsync,
  MajorDirectionPaperRela_GetUniCondStr,
  MajorDirectionPaperRela_IsExistRecordAsync,
  MajorDirectionPaperRela_ReFreshCache,
  MajorDirectionPaperRela_SortFunByKey,
  MajorDirectionPaperRela_FilterFunByKey,
} from '@/ts/L3ForWApi/GradEduPaper/clsMajorDirectionPaperRelaWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsMajorDirectionPaperRelaENEx } from '@/ts/L0Entity/GradEduPaper/clsMajorDirectionPaperRelaENEx';
import { clsMajorDirectionPaperRelaEN } from '@/ts/L0Entity/GradEduPaper/clsMajorDirectionPaperRelaEN';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { userStore } from '@/store/modulesShare/user';
export const majorDirectionPaperRelaEx_Controller = 'MajorDirectionPaperRelaExApi';
export const majorDirectionPaperRelaEx_ConstructorName = 'majorDirectionPaperRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function MajorDirectionPaperRelaEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
  //   const strThisFuncName = 'GetWebApiUrl';
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
 * @param objMajorDirectionPaperRelaENS:源对象
 * @returns 目标对象=>clsMajorDirectionPaperRelaEN:objMajorDirectionPaperRelaENT
 **/
export function MajorDirectionPaperRelaEx_CopyToEx(
  objMajorDirectionPaperRelaENS: clsMajorDirectionPaperRelaEN,
): clsMajorDirectionPaperRelaENEx {
  const strThisFuncName = MajorDirectionPaperRelaEx_CopyToEx.name;
  const objMajorDirectionPaperRelaENT = new clsMajorDirectionPaperRelaENEx();
  try {
    ObjectAssign(objMajorDirectionPaperRelaENT, objMajorDirectionPaperRelaENS);
    return objMajorDirectionPaperRelaENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      majorDirectionPaperRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objMajorDirectionPaperRelaENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function MajorDirectionPaperRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsMajorDirectionPaperRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrMajorDirectionPaperRelaObjLst = await MajorDirectionPaperRela_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrMajorDirectionPaperRelaExObjLst = arrMajorDirectionPaperRelaObjLst.map(
    MajorDirectionPaperRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrMajorDirectionPaperRelaExObjLst) {
      await MajorDirectionPaperRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrMajorDirectionPaperRelaExObjLst.length == 0) return arrMajorDirectionPaperRelaExObjLst;
  let arrMajorDirectionPaperRela_Sel: Array<clsMajorDirectionPaperRelaENEx> =
    arrMajorDirectionPaperRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrMajorDirectionPaperRela_Sel = arrMajorDirectionPaperRela_Sel.sort(
        MajorDirectionPaperRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrMajorDirectionPaperRela_Sel = arrMajorDirectionPaperRela_Sel.sort(objPagerPara.sortFun);
    }
    arrMajorDirectionPaperRela_Sel = arrMajorDirectionPaperRela_Sel.slice(intStart, intEnd);
    return arrMajorDirectionPaperRela_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      majorDirectionPaperRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsMajorDirectionPaperRelaENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-02-22
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function MajorDirectionPaperRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  //   const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return MajorDirectionPaperRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return MajorDirectionPaperRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-02-22
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function MajorDirectionPaperRelaEx_FuncMapByFldName(
  strFldName: string,
  objMajorDirectionPaperRelaEx: clsMajorDirectionPaperRelaENEx,
) {
  const strThisFuncName = MajorDirectionPaperRelaEx_FuncMapByFldName.name;
  console.log(objMajorDirectionPaperRelaEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsMajorDirectionPaperRelaEN.AttributeName;
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
 * 日期:2023-02-22
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function MajorDirectionPaperRelaEx_FilterFunByKey(strKey: string, value: any) {
  //   const strThisFuncName = 'FilterFunByKey';
  //   const strMsg = '';
  switch (strKey) {
    default:
      return MajorDirectionPaperRela_FilterFunByKey(strKey, value);
  }
}

/** 设置字段值-MajorDirectionId
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
 **/
export async function MajorDirectionPaperRelaEx_SetMajorDirectionId(
  arrPaperId: Array<string>,
  strMajorDirectionId: string,
) {
  const strThisFuncName = MajorDirectionPaperRelaEx_SetMajorDirectionId.name;
  if (strMajorDirectionId == null || strMajorDirectionId == '') {
    const strMsg = '请输入专业方向Id(MajorDirectionId)!';
    console.error('Error: ', strMsg);
    //console.trace();
    alert(strMsg);
    return '';
  }
  if (arrPaperId.length == 0) {
    const strMsg = '没有选择记录，不能设置字段值!';
    console.error('Error: ', strMsg);
    //console.trace();
    alert(strMsg);
    return '';
  }
  try {
    let intCount = 0;
    for (const strPaperId of arrPaperId) {
      const objMajorDirectionPaperRelaEN = new clsMajorDirectionPaperRelaEN();

      objMajorDirectionPaperRelaEN.SetMajorDirectionId(strMajorDirectionId);
      objMajorDirectionPaperRelaEN.SetPaperId(strPaperId);
      objMajorDirectionPaperRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0));
      objMajorDirectionPaperRelaEN.SetUpdUser(userStore.getUserId);
      const strCondition = MajorDirectionPaperRela_GetUniCondStr(objMajorDirectionPaperRelaEN);
      try {
        const returnExist = await MajorDirectionPaperRela_IsExistRecordAsync(strCondition);
        if (returnExist == true) continue;

        const returnBool = await MajorDirectionPaperRela_AddNewRecordAsync(
          objMajorDirectionPaperRelaEN,
        );
        if (returnBool == true) intCount++;
      } catch (e: any) {
        const strMsg = Format(
          '设置当前专业方向不成功,{0}.(in {1}.{2})',
          e,
          majorDirectionPaperRelaEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strMsg);
        return;
      }
    }

    //console.log('完成！');
    if (intCount > 0) {
      const strInfo = Format('设置当前专业方向成功!共设置:[{0}]记录.', intCount);
      alert(strInfo);
      MajorDirectionPaperRela_ReFreshCache(strMajorDirectionId);
    } else {
      const strInfo = Format('设置当前专业方向记录数为0!');
      //显示信息框
      alert(strInfo);
    }
  } catch (e: any) {
    const strMsg = Format(
      '设置当前专业方向不成功,{0}.(in {1}.{2})',
      e,
      majorDirectionPaperRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error('Error: ', strMsg);
    //console.trace();
    alert(strMsg);
  }
}
