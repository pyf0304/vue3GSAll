/**
 * 类名:clsvcc_Course_SimExWApi
 * 表名:vcc_Course_Sim(01120950)
 * 版本:2023.08.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/25 23:18:58
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程管理(CourseManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vcc_Course_Sim(vcc_Course_Sim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年08月25日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  vcc_Course_Sim_GetObjLstCache,
  vcc_Course_Sim_GetObjLstAsync,
  vcc_Course_Sim_SortFunByKey,
} from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvcc_Course_SimEN } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN';
import { clsvcc_Course_SimENEx } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const vcc_Course_SimExController = 'vcc_Course_SimExApi';
export const vcc_Course_SimEx_ConstructorName = 'vcc_Course_SimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vcc_Course_SimEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvcc_Course_SimENS:源对象
 * @returns 目标对象=>clsvcc_Course_SimEN:objvcc_Course_SimENT
 **/
export function vcc_Course_SimEx_CopyToEx(
  objvcc_Course_SimENS: clsvcc_Course_SimEN,
): clsvcc_Course_SimENEx {
  const strThisFuncName = vcc_Course_SimEx_CopyToEx.name;
  const objvcc_Course_SimENT = new clsvcc_Course_SimENEx();
  try {
    ObjectAssign(objvcc_Course_SimENT, objvcc_Course_SimENS);
    return objvcc_Course_SimENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vcc_Course_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvcc_Course_SimENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vcc_Course_SimEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvcc_Course_SimENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrvcc_Course_SimObjLst = await vcc_Course_Sim_GetObjLstCache();
  const arrvcc_Course_SimExObjLst = arrvcc_Course_SimObjLst.map(vcc_Course_SimEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvcc_Course_SimEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrvcc_Course_SimExObjLst) {
      await vcc_Course_SimEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvcc_Course_SimExObjLst.length == 0) return arrvcc_Course_SimExObjLst;
  let arrvcc_Course_SimSel: Array<clsvcc_Course_SimENEx> = arrvcc_Course_SimExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvcc_Course_SimCond = new clsvcc_Course_SimENEx();
  ObjectAssign(objvcc_Course_SimCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvcc_Course_SimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvcc_Course_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvcc_Course_SimSel = arrvcc_Course_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvcc_Course_SimSel.length == 0) return arrvcc_Course_SimSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvcc_Course_SimSel = arrvcc_Course_SimSel.sort(
        vcc_Course_SimEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvcc_Course_SimSel = arrvcc_Course_SimSel.sort(objPagerPara.sortFun);
    }
    arrvcc_Course_SimSel = arrvcc_Course_SimSel.slice(intStart, intEnd);
    return arrvcc_Course_SimSel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vcc_Course_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvcc_Course_SimENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vcc_Course_SimEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvcc_Course_SimENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvcc_Course_SimObjLst = await vcc_Course_Sim_GetObjLstAsync(objPagerPara.whereCond);
  const arrvcc_Course_SimExObjLst = arrvcc_Course_SimObjLst.map(vcc_Course_SimEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvcc_Course_SimEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrvcc_Course_SimExObjLst) {
      await vcc_Course_SimEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvcc_Course_SimExObjLst.length == 0) return arrvcc_Course_SimExObjLst;
  let arrvcc_Course_SimSel: Array<clsvcc_Course_SimENEx> = arrvcc_Course_SimExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvcc_Course_SimSel = arrvcc_Course_SimSel.sort(
        vcc_Course_SimEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvcc_Course_SimSel = arrvcc_Course_SimSel.sort(objPagerPara.sortFun);
    }
    arrvcc_Course_SimSel = arrvcc_Course_SimSel.slice(intStart, intEnd);
    return arrvcc_Course_SimSel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vcc_Course_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvcc_Course_SimENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-08-25
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vcc_Course_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vcc_Course_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vcc_Course_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-08-25
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vcc_Course_SimEx_FuncMapByFldName(
  strFldName: string,
  objvcc_Course_SimEx: clsvcc_Course_SimENEx,
) {
  const strThisFuncName = vcc_Course_SimEx_FuncMapByFldName.name;
  console.log(objvcc_Course_SimEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvcc_Course_SimEN.AttributeName;
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
