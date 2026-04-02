/**
 * 类名:clsUserDefaValueExWApi
 * 表名:UserDefaValue(01120203)
 * 生成代码版本:2022.11.12.1
 * 生成日期:2022/11/15 00:59:16
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日志管理(LogManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户缺省值(UserDefaValue)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月15日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
import $ from 'jquery';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  UserDefaValue_GetObjLstAsync,
  UserDefaValue_SortFunByKey,
  UserDefaValue_FilterFunByKey,
} from '@/ts/L3ForWApi/LogManage/clsUserDefaValueWApi';
import { clsUserDefaValueENEx } from '@/ts/L0Entity/LogManage/clsUserDefaValueENEx';
import { clsUserDefaValueEN } from '@/ts/L0Entity/LogManage/clsUserDefaValueEN';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Dictionary } from '@/ts/PubFun/tzDictionary';
export const userDefaValueEx_Controller = 'UserDefaValueExApi';
export const userDefaValueEx_ConstructorName = 'userDefaValueEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function UserDefaValueEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objUserDefaValueENS:源对象
 * @returns 目标对象=>clsUserDefaValueEN:objUserDefaValueENT
 **/
export function UserDefaValueEx_CopyToEx(
  objUserDefaValueENS: clsUserDefaValueEN,
): clsUserDefaValueENEx {
  const strThisFuncName = UserDefaValueEx_CopyToEx.name;
  const objUserDefaValueENT = new clsUserDefaValueENEx();
  try {
    ObjectAssign(objUserDefaValueENT, objUserDefaValueENS);
    return objUserDefaValueENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      userDefaValueEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objUserDefaValueENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function UserDefaValueEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserDefaValueENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrUserDefaValueObjLst = await UserDefaValue_GetObjLstAsync(objPagerPara.whereCond);
  const arrUserDefaValueExObjLst = arrUserDefaValueObjLst.map(UserDefaValueEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrUserDefaValueExObjLst) {
      await UserDefaValueEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrUserDefaValueExObjLst.length == 0) return arrUserDefaValueExObjLst;
  let arrUserDefaValue_Sel: Array<clsUserDefaValueENEx> = arrUserDefaValueExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUserDefaValue_Sel = arrUserDefaValue_Sel.sort(
        UserDefaValueEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrUserDefaValue_Sel = arrUserDefaValue_Sel.sort(objPagerPara.sortFun);
    }
    arrUserDefaValue_Sel = arrUserDefaValue_Sel.slice(intStart, intEnd);
    return arrUserDefaValue_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      userDefaValueEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserDefaValueENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-15
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function UserDefaValueEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  //   const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return UserDefaValue_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return UserDefaValue_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-15
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function UserDefaValueEx_FuncMapByFldName(
  strFldName: string,
  objUserDefaValueEx: clsUserDefaValueENEx,
) {
  const strThisFuncName = UserDefaValueEx_FuncMapByFldName.name;
  console.log(objUserDefaValueEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsUserDefaValueEN.AttributeName;
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
 * 日期:2022-11-15
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function UserDefaValueEx_FilterFunByKey(strKey: string, value: any) {
  //   const strThisFuncName = 'FilterFunByKey';
  //   const strMsg = '';
  switch (strKey) {
    default:
      return UserDefaValue_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 设置用户缺省值
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strCurrPrjId">当前工程Id</param>
/// <param name = "strCurrSelPrjId">当前用户选择的工程Id</param>
/// <param name = "strUserId">用户Id</param>
/// <param name = "strDefaValName">缺省值名</param>
/// <param name = "strUserDefaValue">用户缺省值</param>
/// <returns>获取的相应对象列表</returns>
export function UserDefaValueEx_setUserDefaValue(
  strUserId: string,
  strDefaValName: string,
  strUserDefaValue: string,
): Promise<boolean> {
  const strAction = 'setUserDefaValue';
  const strUrl = UserDefaValueEx_GetWebApiUrl(userDefaValueEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strUserId', strUserId);
  mapParam.add('strDefaValName', strDefaValName);
  mapParam.add('strUserDefaValue', strUserDefaValue);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'Get',
      dataType: 'json',
      data: strData,
      success(data: any) {
        if (data.errorId == 0) {
          resolve(data.returnBool);
        } else {
          console.log(data.errorMsg);
          reject(data.errorMsg);
        }
      },
      error(result: any) {
        console.log(result);
        console.log(JSON.stringify(result));
        if (result.statusText == 'error') {
          const strInfo = `网络错误！访问地址:${strUrl} 不成功！`;
          reject(strInfo);
        } else {
          reject(result.statusText);
        }
      },
    });
  });
}

/**
 * 获取用户缺省值
 * @param strCurrPrjId:当前工程Id
 * @param strCurrSelPrjId:当前用户选择的工程Id
 * @param strUserId:用户Id
 * @param strDefaValName:缺省值名
 * @returns 获取的相应对象列表
 */
export function UserDefaValueEx_getUserDefaValue(
  strUserId: string,
  strDefaValName: string,
): Promise<string> {
  const strAction = 'getUserDefaValue';
  const strUrl = UserDefaValueEx_GetWebApiUrl(userDefaValueEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strUserId', strUserId);
  mapParam.add('strDefaValName', strDefaValName);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'Get',
      dataType: 'json',
      data: strData,
      success(data: any) {
        if (data.errorId == 0) {
          resolve(data.returnStr);
        } else {
          console.log(data.errorMsg);
          reject(data.errorMsg);
        }
      },
      error(result: any) {
        console.log(result);
        console.log(JSON.stringify(result));
        if (result.statusText == 'error') {
          const strInfo = `网络错误！访问地址:${strUrl} 不成功！`;
          reject(strInfo);
        } else {
          reject(result.statusText);
        }
      },
    });
  });
}
