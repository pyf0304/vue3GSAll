/**
 * 类名:clsPaperSubAttachmentExWApi
 * 表名:PaperSubAttachment(01120579)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/05 01:04:13
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
 * 子观点附件(PaperSubAttachment)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月05日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  PaperSubAttachment_GetObjLstCache,
  PaperSubAttachment_GetObjLstAsync,
  PaperSubAttachment_SortFunByKey,
  PaperSubAttachment_FilterFunByKey,
  PaperSubAttachment_AddNewRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubAttachmentWApi';
import { clsPaperSubAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachmentEN';
import { clsPaperSubAttachmentENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachmentENEx';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { UploadResponseData } from '@/ts/FunClass/UploadResponseData';
import { message } from '@/utils/myMessage';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { userStore } from '@/store/modulesShare/user';

export const paperSubAttachmentEx_Controller = 'PaperSubAttachmentExApi';
export const paperSubAttachmentEx_ConstructorName = 'paperSubAttachmentEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function PaperSubAttachmentEx_GetWebApiUrl(
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
 * @param objPaperSubAttachmentENS:源对象
 * @returns 目标对象=>clsPaperSubAttachmentEN:objPaperSubAttachmentENT
 **/
export function PaperSubAttachmentEx_CopyToEx(
  objPaperSubAttachmentENS: clsPaperSubAttachmentEN,
): clsPaperSubAttachmentENEx {
  const strThisFuncName = PaperSubAttachmentEx_CopyToEx.name;
  const objPaperSubAttachmentENT = new clsPaperSubAttachmentENEx();
  try {
    ObjectAssign(objPaperSubAttachmentENT, objPaperSubAttachmentENS);
    return objPaperSubAttachmentENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperSubAttachmentEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPaperSubAttachmentENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PaperSubAttachmentEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPaperSubAttachmentENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrPaperSubAttachmentObjLst = await PaperSubAttachment_GetObjLstCache();
  const arrPaperSubAttachmentExObjLst = arrPaperSubAttachmentObjLst.map(
    PaperSubAttachmentEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrPaperSubAttachmentExObjLst) {
      await PaperSubAttachmentEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrPaperSubAttachmentExObjLst.length == 0) return arrPaperSubAttachmentExObjLst;
  let arrPaperSubAttachment_Sel: Array<clsPaperSubAttachmentENEx> = arrPaperSubAttachmentExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objPaperSubAttachment_Cond = new clsPaperSubAttachmentENEx();
  ObjectAssign(objPaperSubAttachment_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsPaperSubAttachmentWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperSubAttachment_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPaperSubAttachment_Sel.length == 0) return arrPaperSubAttachment_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.sort(
        PaperSubAttachmentEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.sort(objPagerPara.sortFun);
    }
    arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.slice(intStart, intEnd);
    return arrPaperSubAttachment_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      paperSubAttachmentEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperSubAttachmentENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PaperSubAttachmentEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPaperSubAttachmentENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrPaperSubAttachmentObjLst = await PaperSubAttachment_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrPaperSubAttachmentExObjLst = arrPaperSubAttachmentObjLst.map(
    PaperSubAttachmentEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrPaperSubAttachmentExObjLst) {
      await PaperSubAttachmentEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrPaperSubAttachmentExObjLst.length == 0) return arrPaperSubAttachmentExObjLst;
  let arrPaperSubAttachment_Sel: Array<clsPaperSubAttachmentENEx> = arrPaperSubAttachmentExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.sort(
        PaperSubAttachmentEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.sort(objPagerPara.sortFun);
    }
    arrPaperSubAttachment_Sel = arrPaperSubAttachment_Sel.slice(intStart, intEnd);
    return arrPaperSubAttachment_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      paperSubAttachmentEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperSubAttachmentENEx>();
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
export function PaperSubAttachmentEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return PaperSubAttachment_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return PaperSubAttachment_SortFunByKey(strKey, AscOrDesc);
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
export function PaperSubAttachmentEx_FuncMapByFldName(
  strFldName: string,
  objPaperSubAttachmentEx: clsPaperSubAttachmentENEx,
) {
  const strThisFuncName = PaperSubAttachmentEx_FuncMapByFldName.name;
  console.log(objPaperSubAttachmentEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsPaperSubAttachmentEN.AttributeName;
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
export async function PaperSubAttachmentEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return PaperSubAttachment_FilterFunByKey(strKey, value);
  }
}

function PaperSubAttachmentEx_PutDataToPaperSubAttachmentClass(
  pobjPaperSubAttachmentEN: clsPaperSubAttachmentEN,
  strSubViewpointId: number,
  filePath: string,
  strIdCurrEduCls: string,
) {
  pobjPaperSubAttachmentEN.SetSubViewpointId(strSubViewpointId); // 论文Id
  pobjPaperSubAttachmentEN.SetIdCurrEduCls(strIdCurrEduCls); // 论文Id
  let strfilePath = filePath;
  //判断地址不为空则执行截取操作
  if (strfilePath != '') {
    const index = strfilePath.lastIndexOf('/');
    strfilePath = strfilePath.substring(index + 1, strfilePath.length);
    pobjPaperSubAttachmentEN.SetFilePath(filePath);

    pobjPaperSubAttachmentEN.SetPaperSubAttachmentName(strfilePath);
  }
  pobjPaperSubAttachmentEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0)); // 修改日期

  pobjPaperSubAttachmentEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
}
async function PaperSubAttachmentEx_AddPaperSubViewpointAttachmentSave(
  strSubViewpointId: number,
  filePath: string,
  strIdCurrEduCls: string,
) {
  const objPaperSubAttachmentEN: clsPaperSubAttachmentEN = new clsPaperSubAttachmentEN();
  await PaperSubAttachmentEx_PutDataToPaperSubAttachmentClass(
    objPaperSubAttachmentEN,
    strSubViewpointId,
    filePath,
    strIdCurrEduCls,
  );
  try {
    const returnBool = await PaperSubAttachment_AddNewRecordAsync(objPaperSubAttachmentEN);
    if (returnBool == true) {
    } else {
      const strInfo = `论文附件添加不成功!`;
      //显示信息框
      message.warning(strInfo);
    }
    return returnBool; //一定要有一个返回值，否则会出错！
  } catch (e: any) {
    const strMsg = `论文附件添加不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  //return true;//一定要有一个返回值，否则会出错！
}

export async function PaperSubAttachmentEx_AddPaperSubViewpointAttachment(
  strSubViewpointId: number,
  strIdCurrEduCls: string,
  uploadResponseData: UploadResponseData,
) {
  if (strSubViewpointId == 0) {
    const strInfo = `添加论文附件时，论文Id不能为空!`;

    //显示信息框
    alert(strInfo);
    return;
  }
  try {
    //存放主键

    //判断是否有返回的附件路径值
    if (uploadResponseData.imgFilePathOne == '') return true;

    //第一个附件框判断
    const fileOne = uploadResponseData.imgFilePathOne;
    const returnBool1 = await PaperSubAttachmentEx_AddPaperSubViewpointAttachmentSave(
      strSubViewpointId,
      fileOne,
      strIdCurrEduCls,
    );

    if (returnBool1 != true) {
      const strInfo = `添加第1个论文附件失败，请修改该条数据重新上传附件!`;
      alert(strInfo);
      return false;
    }

    if (uploadResponseData.imgFilePathTwo == '') return true;
    const fileTwo = uploadResponseData.imgFilePathTwo;
    const returnBool2 = await PaperSubAttachmentEx_AddPaperSubViewpointAttachmentSave(
      strSubViewpointId,
      fileTwo,
      strIdCurrEduCls,
    );

    if (returnBool2 != true) {
      const strInfo = `添加第2个论文附件失败，请修改该条数据重新上传附件!`;
      alert(strInfo);
      return false;
    }

    if (uploadResponseData.imgFilePathThree == '') return true;

    const fileThree = uploadResponseData.imgFilePathThree;
    const returnBool3 = await PaperSubAttachmentEx_AddPaperSubViewpointAttachmentSave(
      strSubViewpointId,
      fileThree,
      strIdCurrEduCls,
    );

    if (returnBool3 != true) {
      const strInfo = `添加第3个论文附件失败，请修改该条数据重新上传附件!`;
      alert(strInfo);
      return false;
    }
    return true;
  } catch (e: any) {
    const strMsg = `添加论文附件不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
}

export async function PaperSubAttachmentEx_GetObjLstBySubViewpointId(
  intSubViewpointId: number,
): Promise<Array<clsPaperSubAttachmentEN>> {
  const strWhere = `${clsPaperSubAttachmentEN.con_SubViewpointId} = ${intSubViewpointId}`;
  const arrPaperSubAttachmentObjLst = await PaperSubAttachment_GetObjLstAsync(strWhere);
  return arrPaperSubAttachmentObjLst;
}
