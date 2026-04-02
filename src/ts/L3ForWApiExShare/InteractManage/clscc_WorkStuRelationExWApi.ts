/**
 * 类名:clscc_WorkStuRelationExWApi
 * 表名:cc_WorkStuRelation(01120145)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/11 17:27:02
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
 * 作业与学生关系(cc_WorkStuRelation)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年12月11日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { Storage } from '@/utils/Storage';
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';

import { clscc_WorkStuRelationEN } from '@/ts/L0Entity/InteractManage/clscc_WorkStuRelationEN';
import { clscc_WorkStuRelationENEx } from '@/ts/L0Entity/InteractManage/clscc_WorkStuRelationENEx';
import {
  cc_WorkStuRelation_GetObjLstAsync,
  cc_WorkStuRelation_SortFunByKey,
} from '@/ts/L3ForWApi/InteractManage/clscc_WorkStuRelationWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cc_WorkStuRelationExController = 'cc_WorkStuRelationExApi';
export const cc_WorkStuRelationEx_ConstructorName = 'cc_WorkStuRelationEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_WorkStuRelationEx_GetWebApiUrl(
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
 * @param objcc_WorkStuRelationENS:源对象
 * @returns 目标对象=>clscc_WorkStuRelationEN:objcc_WorkStuRelationENT
 **/
export function cc_WorkStuRelationEx_CopyToEx(
  objcc_WorkStuRelationENS: clscc_WorkStuRelationEN,
): clscc_WorkStuRelationENEx {
  const strThisFuncName = cc_WorkStuRelationEx_CopyToEx.name;
  const objcc_WorkStuRelationENT = new clscc_WorkStuRelationENEx();
  try {
    ObjectAssign(objcc_WorkStuRelationENT, objcc_WorkStuRelationENS);
    return objcc_WorkStuRelationENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_WorkStuRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_WorkStuRelationENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_WorkStuRelationEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_WorkStuRelationENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_WorkStuRelationObjLst = await cc_WorkStuRelation_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrcc_WorkStuRelationExObjLst = arrcc_WorkStuRelationObjLst.map(
    cc_WorkStuRelationEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_WorkStuRelationEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrcc_WorkStuRelationExObjLst) {
      await cc_WorkStuRelationEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_WorkStuRelationExObjLst.length == 0) return arrcc_WorkStuRelationExObjLst;
  let arrcc_WorkStuRelationSel: Array<clscc_WorkStuRelationENEx> = arrcc_WorkStuRelationExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_WorkStuRelationSel = arrcc_WorkStuRelationSel.sort(
        cc_WorkStuRelationEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_WorkStuRelationSel = arrcc_WorkStuRelationSel.sort(objPagerPara.sortFun);
    }
    arrcc_WorkStuRelationSel = arrcc_WorkStuRelationSel.slice(intStart, intEnd);
    return arrcc_WorkStuRelationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_WorkStuRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_WorkStuRelationENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_WorkStuRelationEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return cc_WorkStuRelation_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return cc_WorkStuRelation_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-12-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function cc_WorkStuRelationEx_FuncMapByFldName(
  strFldName: string,
  objcc_WorkStuRelationEx: clscc_WorkStuRelationENEx,
) {
  const strThisFuncName = cc_WorkStuRelationEx_FuncMapByFldName.name;
  console.log(objcc_WorkStuRelationEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clscc_WorkStuRelationEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
 * 获取家庭作业
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdStu: 学生流水号
 * @returns 获取的相应对象列表
 */
export async function cc_WorkStuRelationEx_GetHomeWork(strIdStu: string): Promise<number> {
  const strThisFuncName = cc_WorkStuRelationEx_GetHomeWork.name;
  const strAction = 'GetHomeWork';
  const strUrl = cc_WorkStuRelationEx_GetWebApiUrl(cc_WorkStuRelationExController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdStu,
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        cc_WorkStuRelationEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        cc_WorkStuRelationEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
