/**
 * 类名:clsPaperSubResTypeExWApi
 * 表名:PaperSubResType(01120965)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/22 23:43:57
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 论文子资源类型(PaperSubResType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年03月22日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import {
  ObjectAssign,
  GetSortExpressInfo,
  BindDdl_ObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPaperSubResTypeENEx } from '@/ts/L0Entity/ResourceMan/clsPaperSubResTypeENEx';
import {
  PaperSubResType_GetObjLstAsync,
  PaperSubResType_GetObjLstCache,
  PaperSubResType_SortFunByKey,
} from '@/ts/L3ForWApi/ResourceMan/clsPaperSubResTypeWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsPaperSubResTypeEN } from '@/ts/L0Entity/ResourceMan/clsPaperSubResTypeEN';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const paperSubResTypeExController = 'PaperSubResTypeExApi';
export const paperSubResTypeEx_ConstructorName = 'paperSubResTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function PaperSubResTypeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objPaperSubResTypeENS:源对象
 * @returns 目标对象=>clsPaperSubResTypeEN:objPaperSubResTypeENT
 **/
export function PaperSubResTypeEx_CopyToEx(
  objPaperSubResTypeENS: clsPaperSubResTypeEN,
): clsPaperSubResTypeENEx {
  const strThisFuncName = PaperSubResTypeEx_CopyToEx.name;
  const objPaperSubResTypeENT = new clsPaperSubResTypeENEx();
  try {
    ObjectAssign(objPaperSubResTypeENT, objPaperSubResTypeENS);
    return objPaperSubResTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperSubResTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPaperSubResTypeENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PaperSubResTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPaperSubResTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrPaperSubResTypeObjLst = await PaperSubResType_GetObjLstAsync(objPagerPara.whereCond);
  const arrPaperSubResTypeExObjLst = arrPaperSubResTypeObjLst.map(PaperSubResTypeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPaperSubResTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrPaperSubResTypeExObjLst) {
      await PaperSubResTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrPaperSubResTypeExObjLst.length == 0) return arrPaperSubResTypeExObjLst;
  let arrPaperSubResTypeSel: Array<clsPaperSubResTypeENEx> = arrPaperSubResTypeExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPaperSubResTypeSel = arrPaperSubResTypeSel.sort(
        PaperSubResTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPaperSubResTypeSel = arrPaperSubResTypeSel.sort(objPagerPara.sortFun);
    }
    arrPaperSubResTypeSel = arrPaperSubResTypeSel.slice(intStart, intEnd);
    return arrPaperSubResTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      paperSubResTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperSubResTypeENEx>();
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
export function PaperSubResTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return PaperSubResType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return PaperSubResType_SortFunByKey(strKey, AscOrDesc);
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
export function PaperSubResTypeEx_FuncMapByFldName(
  strFldName: string,
  objPaperSubResTypeEx: clsPaperSubResTypeENEx,
) {
  const strThisFuncName = PaperSubResTypeEx_FuncMapByFldName.name;
  console.log(objPaperSubResTypeEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsPaperSubResTypeEN.AttributeName;
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
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PaperSubResTypeEx_BindDdl_PaperSubResTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_PaperSubResTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PaperSubResTypeIdInDivCache");
  const arrObjLst = await PaperSubResType_GetObjLstCache();
  if (arrObjLst == null) return;
  const arrObjLstSel = arrObjLst
    .filter((x) => x.isUse == true)
    .sort((x, y) => {
      return x.orderNum - y.orderNum;
    });
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPaperSubResTypeEN.con_PaperSubResTypeId,
    clsPaperSubResTypeEN.con_PaperSubResTypeName,
    '论文子资源类型',
  );
}
