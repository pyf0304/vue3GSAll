/**
 * 类名:clsPaperEduClsRelaWApi
 * 表名:PaperEduClsRela(01120919)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:45:57
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 论文教学班关系(PaperEduClsRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月08日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPaperEduClsRelaEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEduClsRelaEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const paperEduClsRela_Controller = 'PaperEduClsRelaApi';
export const paperEduClsRela_ConstructorName = 'paperEduClsRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function PaperEduClsRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsPaperEduClsRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsPaperEduClsRelaWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objPaperEduClsRela = PaperEduClsRela_GetObjFromJsonObj(returnObj);
      return objPaperEduClsRela;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function PaperEduClsRela_GetObjBymIdCache(
  lngmId: number,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsPaperEduClsRelaWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrPaperEduClsRelaObjLstCache = await PaperEduClsRela_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrPaperEduClsRelaSel = arrPaperEduClsRelaObjLstCache.filter((x) => x.mId == lngmId);
    let objPaperEduClsRela: clsPaperEduClsRelaEN;
    if (arrPaperEduClsRelaSel.length > 0) {
      objPaperEduClsRela = arrPaperEduClsRelaSel[0];
      return objPaperEduClsRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPaperEduClsRelaConst = await PaperEduClsRela_GetObjBymIdAsync(lngmId);
        if (objPaperEduClsRelaConst != null) {
          PaperEduClsRela_ReFreshThisCache(strIdCurrEduCls);
          return objPaperEduClsRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      paperEduClsRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function PaperEduClsRela_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsPaperEduClsRelaWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPaperEduClsRelaEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPaperEduClsRelaCache: clsPaperEduClsRelaEN = JSON.parse(strTempObj);
    return objPaperEduClsRelaCache;
  }
  try {
    const objPaperEduClsRela = await PaperEduClsRela_GetObjBymIdAsync(lngmId);
    if (objPaperEduClsRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objPaperEduClsRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPaperEduClsRela;
    }
    return objPaperEduClsRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      paperEduClsRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objPaperEduClsRela:所给的对象
 * @returns 对象
 */
export async function PaperEduClsRela_UpdateObjInLstCache(
  objPaperEduClsRela: clsPaperEduClsRelaEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPaperEduClsRelaObjLstCache = await PaperEduClsRela_GetObjLstCache(strIdCurrEduCls);
    const obj = arrPaperEduClsRelaObjLstCache.find(
      (x) =>
        x.paperId == objPaperEduClsRela.paperId &&
        x.idCurrEduCls == objPaperEduClsRela.idCurrEduCls,
    );
    if (obj != null) {
      objPaperEduClsRela.mId = obj.mId;
      ObjectAssign(obj, objPaperEduClsRela);
    } else {
      arrPaperEduClsRelaObjLstCache.push(objPaperEduClsRela);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      paperEduClsRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function PaperEduClsRela_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsPaperEduClsRelaWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsPaperEduClsRelaWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsPaperEduClsRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPaperEduClsRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPaperEduClsRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objPaperEduClsRela = await PaperEduClsRela_GetObjBymIdCache(lngmId, strIdCurrEduClsClassfy);
  if (objPaperEduClsRela == null) return '';
  if (objPaperEduClsRela.GetFldValue(strOutFldName) == null) return '';
  return objPaperEduClsRela.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PaperEduClsRela_SortFunDefa(
  a: clsPaperEduClsRelaEN,
  b: clsPaperEduClsRelaEN,
): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PaperEduClsRela_SortFunDefa2Fld(
  a: clsPaperEduClsRelaEN,
  b: clsPaperEduClsRelaEN,
): number {
  if (a.paperId == b.paperId) return a.paperTitle.localeCompare(b.paperTitle);
  else return a.paperId.localeCompare(b.paperId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PaperEduClsRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPaperEduClsRelaEN.con_mId:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          return a.mId - b.mId;
        };
      case clsPaperEduClsRelaEN.con_PaperId:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          return a.paperId.localeCompare(b.paperId);
        };
      case clsPaperEduClsRelaEN.con_PaperTitle:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          if (a.paperTitle == null) return -1;
          if (b.paperTitle == null) return 1;
          return a.paperTitle.localeCompare(b.paperTitle);
        };
      case clsPaperEduClsRelaEN.con_IdCurrEduCls:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsPaperEduClsRelaEN.con_Author:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          if (a.author == null) return -1;
          if (b.author == null) return 1;
          return a.author.localeCompare(b.author);
        };
      case clsPaperEduClsRelaEN.con_UpdUser:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsPaperEduClsRelaEN.con_UpdDate:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPaperEduClsRelaEN.con_Memo:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PaperEduClsRela]中不存在!(in ${paperEduClsRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPaperEduClsRelaEN.con_mId:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          return b.mId - a.mId;
        };
      case clsPaperEduClsRelaEN.con_PaperId:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          return b.paperId.localeCompare(a.paperId);
        };
      case clsPaperEduClsRelaEN.con_PaperTitle:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          if (b.paperTitle == null) return -1;
          if (a.paperTitle == null) return 1;
          return b.paperTitle.localeCompare(a.paperTitle);
        };
      case clsPaperEduClsRelaEN.con_IdCurrEduCls:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsPaperEduClsRelaEN.con_Author:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          if (b.author == null) return -1;
          if (a.author == null) return 1;
          return b.author.localeCompare(a.author);
        };
      case clsPaperEduClsRelaEN.con_UpdUser:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsPaperEduClsRelaEN.con_UpdDate:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPaperEduClsRelaEN.con_Memo:
        return (a: clsPaperEduClsRelaEN, b: clsPaperEduClsRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PaperEduClsRela]中不存在!(in ${paperEduClsRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PaperEduClsRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPaperEduClsRelaEN.con_mId:
      return (obj: clsPaperEduClsRelaEN) => {
        return obj.mId === value;
      };
    case clsPaperEduClsRelaEN.con_PaperId:
      return (obj: clsPaperEduClsRelaEN) => {
        return obj.paperId === value;
      };
    case clsPaperEduClsRelaEN.con_PaperTitle:
      return (obj: clsPaperEduClsRelaEN) => {
        return obj.paperTitle === value;
      };
    case clsPaperEduClsRelaEN.con_IdCurrEduCls:
      return (obj: clsPaperEduClsRelaEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsPaperEduClsRelaEN.con_Author:
      return (obj: clsPaperEduClsRelaEN) => {
        return obj.author === value;
      };
    case clsPaperEduClsRelaEN.con_UpdUser:
      return (obj: clsPaperEduClsRelaEN) => {
        return obj.updUser === value;
      };
    case clsPaperEduClsRelaEN.con_UpdDate:
      return (obj: clsPaperEduClsRelaEN) => {
        return obj.updDate === value;
      };
    case clsPaperEduClsRelaEN.con_Memo:
      return (obj: clsPaperEduClsRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PaperEduClsRela]中不存在!(in ${paperEduClsRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function PaperEduClsRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsPaperEduClsRelaWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsPaperEduClsRelaWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsPaperEduClsRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrPaperEduClsRela = await PaperEduClsRela_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrPaperEduClsRela == null) return [];
  let arrPaperEduClsRelaSel = arrPaperEduClsRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPaperEduClsRelaSel.length == 0) return [];
  return arrPaperEduClsRelaSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperEduClsRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 */
export async function PaperEduClsRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export async function PaperEduClsRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPaperEduClsRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objPaperEduClsRela = PaperEduClsRela_GetObjFromJsonObj(returnObj);
      return objPaperEduClsRela;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperEduClsRela_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPaperEduClsRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsPaperEduClsRelaEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsPaperEduClsRelaEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsPaperEduClsRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperEduClsRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPaperEduClsRelaExObjLstCache: Array<clsPaperEduClsRelaEN> = CacheHelper.Get(strKey);
    const arrPaperEduClsRelaObjLstT = PaperEduClsRela_GetObjLstByJSONObjLst(
      arrPaperEduClsRelaExObjLstCache,
    );
    return arrPaperEduClsRelaObjLstT;
  }
  try {
    const arrPaperEduClsRelaExObjLst = await PaperEduClsRela_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPaperEduClsRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperEduClsRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperEduClsRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperEduClsRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperEduClsRela_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPaperEduClsRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsPaperEduClsRelaEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsPaperEduClsRelaEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsPaperEduClsRelaEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsPaperEduClsRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperEduClsRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPaperEduClsRelaExObjLstCache: Array<clsPaperEduClsRelaEN> = JSON.parse(strTempObjLst);
    const arrPaperEduClsRelaObjLstT = PaperEduClsRela_GetObjLstByJSONObjLst(
      arrPaperEduClsRelaExObjLstCache,
    );
    return arrPaperEduClsRelaObjLstT;
  }
  try {
    const arrPaperEduClsRelaExObjLst = await PaperEduClsRela_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPaperEduClsRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperEduClsRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperEduClsRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperEduClsRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperEduClsRela_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsPaperEduClsRelaEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPaperEduClsRelaObjLstCache: Array<clsPaperEduClsRelaEN> = JSON.parse(strTempObjLst);
    return arrPaperEduClsRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PaperEduClsRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPaperEduClsRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          paperEduClsRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperEduClsRela_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperEduClsRela_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPaperEduClsRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsPaperEduClsRelaEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsPaperEduClsRelaEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsPaperEduClsRelaEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsPaperEduClsRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPaperEduClsRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPaperEduClsRelaExObjLstCache: Array<clsPaperEduClsRelaEN> = JSON.parse(strTempObjLst);
    const arrPaperEduClsRelaObjLstT = PaperEduClsRela_GetObjLstByJSONObjLst(
      arrPaperEduClsRelaExObjLstCache,
    );
    return arrPaperEduClsRelaObjLstT;
  }
  try {
    const arrPaperEduClsRelaExObjLst = await PaperEduClsRela_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPaperEduClsRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPaperEduClsRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrPaperEduClsRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      paperEduClsRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperEduClsRela_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsPaperEduClsRelaEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPaperEduClsRelaObjLstCache: Array<clsPaperEduClsRelaEN> = JSON.parse(strTempObjLst);
    return arrPaperEduClsRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperEduClsRela_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsPaperEduClsRelaEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsPaperEduClsRelaWApi.PaperEduClsRela_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsPaperEduClsRelaWApi.PaperEduClsRela_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrPaperEduClsRelaObjLstCache;
  switch (clsPaperEduClsRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrPaperEduClsRelaObjLstCache = await PaperEduClsRela_GetObjLstsessionStorage(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrPaperEduClsRelaObjLstCache = await PaperEduClsRela_GetObjLstlocalStorage(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrPaperEduClsRelaObjLstCache = await PaperEduClsRela_GetObjLstClientCache(strIdCurrEduCls);
      break;
    default:
      arrPaperEduClsRelaObjLstCache = await PaperEduClsRela_GetObjLstClientCache(strIdCurrEduCls);
      break;
  }
  return arrPaperEduClsRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PaperEduClsRela_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPaperEduClsRelaObjLstCache;
  switch (clsPaperEduClsRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrPaperEduClsRelaObjLstCache = await PaperEduClsRela_GetObjLstsessionStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrPaperEduClsRelaObjLstCache = await PaperEduClsRela_GetObjLstlocalStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrPaperEduClsRelaObjLstCache = null;
      break;
    default:
      arrPaperEduClsRelaObjLstCache = null;
      break;
  }
  return arrPaperEduClsRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PaperEduClsRela_GetSubObjLstCache(
  objPaperEduClsRelaCond: clsPaperEduClsRelaEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPaperEduClsRelaObjLstCache = await PaperEduClsRela_GetObjLstCache(strIdCurrEduCls);
  let arrPaperEduClsRelaSel = arrPaperEduClsRelaObjLstCache;
  if (
    objPaperEduClsRelaCond.sfFldComparisonOp == null ||
    objPaperEduClsRelaCond.sfFldComparisonOp == ''
  )
    return arrPaperEduClsRelaSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperEduClsRelaCond.sfFldComparisonOp,
  );
  //console.log("clsPaperEduClsRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperEduClsRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperEduClsRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPaperEduClsRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPaperEduClsRelaCond),
      paperEduClsRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperEduClsRelaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function PaperEduClsRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsPaperEduClsRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          paperEduClsRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperEduClsRela_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
 */
export async function PaperEduClsRela_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrPaperEduClsRelaObjLstCache = await PaperEduClsRela_GetObjLstCache(strIdCurrEduCls);
    const arrPaperEduClsRelaSel = arrPaperEduClsRelaObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrPaperEduClsRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      paperEduClsRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
}

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function PaperEduClsRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPaperEduClsRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          paperEduClsRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperEduClsRela_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PaperEduClsRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPaperEduClsRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRangePara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          paperEduClsRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperEduClsRela_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PaperEduClsRela_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPaperEduClsRelaEN>();
  const arrPaperEduClsRelaObjLstCache = await PaperEduClsRela_GetObjLstCache(strIdCurrEduCls);
  if (arrPaperEduClsRelaObjLstCache.length == 0) return arrPaperEduClsRelaObjLstCache;
  let arrPaperEduClsRelaSel = arrPaperEduClsRelaObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objPaperEduClsRelaCond = new clsPaperEduClsRelaEN();
  ObjectAssign(objPaperEduClsRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsPaperEduClsRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperEduClsRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPaperEduClsRelaSel.length == 0) return arrPaperEduClsRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.sort(
        PaperEduClsRela_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.sort(objPagerPara.sortFun);
    }
    arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.slice(intStart, intEnd);
    return arrPaperEduClsRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      paperEduClsRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperEduClsRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PaperEduClsRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPaperEduClsRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPaperEduClsRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPagerPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          paperEduClsRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperEduClsRela_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function PaperEduClsRela_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngmId);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const configDel = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.delete(strUrl, configDel);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PaperEduClsRela_DelPaperEduClsRelasAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPaperEduClsRelasAsync';
  const strAction = 'DelPaperEduClsRelas';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function PaperEduClsRela_DelPaperEduClsRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPaperEduClsRelasByCondAsync';
  const strAction = 'DelPaperEduClsRelasByCond';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objPaperEduClsRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PaperEduClsRela_AddNewRecordAsync(
  objPaperEduClsRelaEN: clsPaperEduClsRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPaperEduClsRelaEN);
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperEduClsRelaEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objPaperEduClsRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PaperEduClsRela_AddNewRecordWithReturnKeyAsync(
  objPaperEduClsRelaEN: clsPaperEduClsRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperEduClsRelaEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objPaperEduClsRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PaperEduClsRela_UpdateRecordAsync(
  objPaperEduClsRelaEN: clsPaperEduClsRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPaperEduClsRelaEN.sfUpdFldSetStr === undefined ||
    objPaperEduClsRelaEN.sfUpdFldSetStr === null ||
    objPaperEduClsRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPaperEduClsRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperEduClsRelaEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objPaperEduClsRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperEduClsRela_UpdateWithConditionAsync(
  objPaperEduClsRelaEN: clsPaperEduClsRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPaperEduClsRelaEN.sfUpdFldSetStr === undefined ||
    objPaperEduClsRelaEN.sfUpdFldSetStr === null ||
    objPaperEduClsRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPaperEduClsRelaEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);
  objPaperEduClsRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperEduClsRelaEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PaperEduClsRela_IsExistRecordCache(
  objPaperEduClsRelaCond: clsPaperEduClsRelaEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPaperEduClsRelaObjLstCache = await PaperEduClsRela_GetObjLstCache(strIdCurrEduCls);
  if (arrPaperEduClsRelaObjLstCache == null) return false;
  let arrPaperEduClsRelaSel = arrPaperEduClsRelaObjLstCache;
  if (
    objPaperEduClsRelaCond.sfFldComparisonOp == null ||
    objPaperEduClsRelaCond.sfFldComparisonOp == ''
  )
    return arrPaperEduClsRelaSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperEduClsRelaCond.sfFldComparisonOp,
  );
  //console.log("clsPaperEduClsRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperEduClsRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperEduClsRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPaperEduClsRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPaperEduClsRelaCond),
      paperEduClsRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return false;
}

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function PaperEduClsRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function PaperEduClsRela_IsExistCache(lngmId: number, strIdCurrEduCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrPaperEduClsRelaObjLstCache = await PaperEduClsRela_GetObjLstCache(strIdCurrEduCls);
  if (arrPaperEduClsRelaObjLstCache == null) return false;
  try {
    const arrPaperEduClsRelaSel = arrPaperEduClsRelaObjLstCache.filter((x) => x.mId == lngmId);
    if (arrPaperEduClsRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      paperEduClsRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return false;
}

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PaperEduClsRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export async function PaperEduClsRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objPaperEduClsRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function PaperEduClsRela_GetRecCountByCondCache(
  objPaperEduClsRelaCond: clsPaperEduClsRelaEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPaperEduClsRelaObjLstCache = await PaperEduClsRela_GetObjLstCache(strIdCurrEduCls);
  if (arrPaperEduClsRelaObjLstCache == null) return 0;
  let arrPaperEduClsRelaSel = arrPaperEduClsRelaObjLstCache;
  if (
    objPaperEduClsRelaCond.sfFldComparisonOp == null ||
    objPaperEduClsRelaCond.sfFldComparisonOp == ''
  )
    return arrPaperEduClsRelaSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPaperEduClsRelaCond.sfFldComparisonOp,
  );
  //console.log("clsPaperEduClsRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPaperEduClsRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperEduClsRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperEduClsRelaSel = arrPaperEduClsRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPaperEduClsRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPaperEduClsRelaCond),
      paperEduClsRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function PaperEduClsRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(paperEduClsRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrefix,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperEduClsRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function PaperEduClsRela_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export function PaperEduClsRela_ReFreshCache(strIdCurrEduCls: string): void {
  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空!(In clsPaperEduClsRelaWApi.clsPaperEduClsRelaWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsPaperEduClsRelaWApi.clsPaperEduClsRelaWApi.ReFreshCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsPaperEduClsRelaEN._CurrTabName, strIdCurrEduCls);
  switch (clsPaperEduClsRelaEN.CacheModeId) {
    case '04': //sessionStorage
      sessionStorage.removeItem(strKey);
      break;
    case '03': //localStorage
      localStorage.removeItem(strKey);
      break;
    case '02': //ClientCache
      CacheHelper.Remove(strKey);
      break;
    default:
      CacheHelper.Remove(strKey);
      break;
  }
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function PaperEduClsRela_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsPaperEduClsRelaEN._CurrTabName, strIdCurrEduCls);
    switch (clsPaperEduClsRelaEN.CacheModeId) {
      case '04': //sessionStorage
        sessionStorage.removeItem(strKey);
        break;
      case '03': //localStorage
        localStorage.removeItem(strKey);
        break;
      case '02': //ClientCache
        CacheHelper.Remove(strKey);
        break;
      default:
        CacheHelper.Remove(strKey);
        break;
    }
    const strMsg = Format('刷新缓存成功!');
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
  }
}

//(IsNeedGC == false)该表下拉框功能不需要生成;

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PaperEduClsRela_CheckPropertyNew(pobjPaperEduClsRelaEN: clsPaperEduClsRelaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.paperId) === true ||
    pobjPaperEduClsRelaEN.paperId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[论文Id]不能为空(In 论文教学班关系)!(clsPaperEduClsRelaBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.paperId) == false &&
    GetStrLen(pobjPaperEduClsRelaEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 论文教学班关系(PaperEduClsRela))!值:$(pobjPaperEduClsRelaEN.paperId)(clsPaperEduClsRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.paperTitle) == false &&
    GetStrLen(pobjPaperEduClsRelaEN.paperTitle) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[论文标题(paperTitle)]的长度不能超过500(In 论文教学班关系(PaperEduClsRela))!值:$(pobjPaperEduClsRelaEN.paperTitle)(clsPaperEduClsRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.idCurrEduCls) == false &&
    GetStrLen(pobjPaperEduClsRelaEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 论文教学班关系(PaperEduClsRela))!值:$(pobjPaperEduClsRelaEN.idCurrEduCls)(clsPaperEduClsRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.author) == false &&
    GetStrLen(pobjPaperEduClsRelaEN.author) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[作者(author)]的长度不能超过200(In 论文教学班关系(PaperEduClsRela))!值:$(pobjPaperEduClsRelaEN.author)(clsPaperEduClsRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.updUser) == false &&
    GetStrLen(pobjPaperEduClsRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文教学班关系(PaperEduClsRela))!值:$(pobjPaperEduClsRelaEN.updUser)(clsPaperEduClsRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.updDate) == false &&
    GetStrLen(pobjPaperEduClsRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文教学班关系(PaperEduClsRela))!值:$(pobjPaperEduClsRelaEN.updDate)(clsPaperEduClsRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.memo) == false &&
    GetStrLen(pobjPaperEduClsRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 论文教学班关系(PaperEduClsRela))!值:$(pobjPaperEduClsRelaEN.memo)(clsPaperEduClsRelaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjPaperEduClsRelaEN.mId &&
    undefined !== pobjPaperEduClsRelaEN.mId &&
    tzDataType.isNumber(pobjPaperEduClsRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjPaperEduClsRelaEN.mId)], 非法,应该为数值型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.paperId) == false &&
    undefined !== pobjPaperEduClsRelaEN.paperId &&
    tzDataType.isString(pobjPaperEduClsRelaEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjPaperEduClsRelaEN.paperId)], 非法,应该为字符型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.paperTitle) == false &&
    undefined !== pobjPaperEduClsRelaEN.paperTitle &&
    tzDataType.isString(pobjPaperEduClsRelaEN.paperTitle) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文标题(paperTitle)]的值:[$(pobjPaperEduClsRelaEN.paperTitle)], 非法,应该为字符型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.idCurrEduCls) == false &&
    undefined !== pobjPaperEduClsRelaEN.idCurrEduCls &&
    tzDataType.isString(pobjPaperEduClsRelaEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjPaperEduClsRelaEN.idCurrEduCls)], 非法,应该为字符型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.author) == false &&
    undefined !== pobjPaperEduClsRelaEN.author &&
    tzDataType.isString(pobjPaperEduClsRelaEN.author) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[作者(author)]的值:[$(pobjPaperEduClsRelaEN.author)], 非法,应该为字符型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.updUser) == false &&
    undefined !== pobjPaperEduClsRelaEN.updUser &&
    tzDataType.isString(pobjPaperEduClsRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjPaperEduClsRelaEN.updUser)], 非法,应该为字符型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.updDate) == false &&
    undefined !== pobjPaperEduClsRelaEN.updDate &&
    tzDataType.isString(pobjPaperEduClsRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjPaperEduClsRelaEN.updDate)], 非法,应该为字符型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.memo) == false &&
    undefined !== pobjPaperEduClsRelaEN.memo &&
    tzDataType.isString(pobjPaperEduClsRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjPaperEduClsRelaEN.memo)], 非法,应该为字符型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PaperEduClsRela_CheckProperty4Update(pobjPaperEduClsRelaEN: clsPaperEduClsRelaEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.paperId) == false &&
    GetStrLen(pobjPaperEduClsRelaEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 论文教学班关系(PaperEduClsRela))!值:$(pobjPaperEduClsRelaEN.paperId)(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.paperTitle) == false &&
    GetStrLen(pobjPaperEduClsRelaEN.paperTitle) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[论文标题(paperTitle)]的长度不能超过500(In 论文教学班关系(PaperEduClsRela))!值:$(pobjPaperEduClsRelaEN.paperTitle)(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.idCurrEduCls) == false &&
    GetStrLen(pobjPaperEduClsRelaEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 论文教学班关系(PaperEduClsRela))!值:$(pobjPaperEduClsRelaEN.idCurrEduCls)(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.author) == false &&
    GetStrLen(pobjPaperEduClsRelaEN.author) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[作者(author)]的长度不能超过200(In 论文教学班关系(PaperEduClsRela))!值:$(pobjPaperEduClsRelaEN.author)(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.updUser) == false &&
    GetStrLen(pobjPaperEduClsRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文教学班关系(PaperEduClsRela))!值:$(pobjPaperEduClsRelaEN.updUser)(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.updDate) == false &&
    GetStrLen(pobjPaperEduClsRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文教学班关系(PaperEduClsRela))!值:$(pobjPaperEduClsRelaEN.updDate)(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.memo) == false &&
    GetStrLen(pobjPaperEduClsRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 论文教学班关系(PaperEduClsRela))!值:$(pobjPaperEduClsRelaEN.memo)(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjPaperEduClsRelaEN.mId &&
    undefined !== pobjPaperEduClsRelaEN.mId &&
    tzDataType.isNumber(pobjPaperEduClsRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjPaperEduClsRelaEN.mId)], 非法,应该为数值型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.paperId) == false &&
    undefined !== pobjPaperEduClsRelaEN.paperId &&
    tzDataType.isString(pobjPaperEduClsRelaEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjPaperEduClsRelaEN.paperId)], 非法,应该为字符型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.paperTitle) == false &&
    undefined !== pobjPaperEduClsRelaEN.paperTitle &&
    tzDataType.isString(pobjPaperEduClsRelaEN.paperTitle) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文标题(paperTitle)]的值:[$(pobjPaperEduClsRelaEN.paperTitle)], 非法,应该为字符型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.idCurrEduCls) == false &&
    undefined !== pobjPaperEduClsRelaEN.idCurrEduCls &&
    tzDataType.isString(pobjPaperEduClsRelaEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjPaperEduClsRelaEN.idCurrEduCls)], 非法,应该为字符型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.author) == false &&
    undefined !== pobjPaperEduClsRelaEN.author &&
    tzDataType.isString(pobjPaperEduClsRelaEN.author) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[作者(author)]的值:[$(pobjPaperEduClsRelaEN.author)], 非法,应该为字符型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.updUser) == false &&
    undefined !== pobjPaperEduClsRelaEN.updUser &&
    tzDataType.isString(pobjPaperEduClsRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjPaperEduClsRelaEN.updUser)], 非法,应该为字符型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.updDate) == false &&
    undefined !== pobjPaperEduClsRelaEN.updDate &&
    tzDataType.isString(pobjPaperEduClsRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjPaperEduClsRelaEN.updDate)], 非法,应该为字符型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPaperEduClsRelaEN.memo) == false &&
    undefined !== pobjPaperEduClsRelaEN.memo &&
    tzDataType.isString(pobjPaperEduClsRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjPaperEduClsRelaEN.memo)], 非法,应该为字符型(In 论文教学班关系(PaperEduClsRela))!(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjPaperEduClsRelaEN.mId ||
    (pobjPaperEduClsRelaEN.mId != null && pobjPaperEduClsRelaEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 论文教学班关系)!(clsPaperEduClsRelaBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PaperEduClsRela_GetJSONStrByObj(
  pobjPaperEduClsRelaEN: clsPaperEduClsRelaEN,
): string {
  pobjPaperEduClsRelaEN.sfUpdFldSetStr = pobjPaperEduClsRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPaperEduClsRelaEN);
  } catch (objException) {
    const strEx = GetExceptionStr(objException);
    myShowErrorMsg(strEx);
  }
  if (strJson == undefined) return '';
  else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PaperEduClsRela_GetObjLstByJSONStr(strJSON: string): Array<clsPaperEduClsRelaEN> {
  let arrPaperEduClsRelaObjLst = new Array<clsPaperEduClsRelaEN>();
  if (strJSON === '') {
    return arrPaperEduClsRelaObjLst;
  }
  try {
    arrPaperEduClsRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPaperEduClsRelaObjLst;
  }
  return arrPaperEduClsRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPaperEduClsRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PaperEduClsRela_GetObjLstByJSONObjLst(
  arrPaperEduClsRelaObjLstS: Array<clsPaperEduClsRelaEN>,
): Array<clsPaperEduClsRelaEN> {
  const arrPaperEduClsRelaObjLst = new Array<clsPaperEduClsRelaEN>();
  for (const objInFor of arrPaperEduClsRelaObjLstS) {
    const obj1 = PaperEduClsRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPaperEduClsRelaObjLst.push(obj1);
  }
  return arrPaperEduClsRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PaperEduClsRela_GetObjByJSONStr(strJSON: string): clsPaperEduClsRelaEN {
  let pobjPaperEduClsRelaEN = new clsPaperEduClsRelaEN();
  if (strJSON === '') {
    return pobjPaperEduClsRelaEN;
  }
  try {
    pobjPaperEduClsRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPaperEduClsRelaEN;
  }
  return pobjPaperEduClsRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PaperEduClsRela_GetCombineCondition(
  objPaperEduClsRelaCond: clsPaperEduClsRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperEduClsRelaCond.dicFldComparisonOp,
      clsPaperEduClsRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objPaperEduClsRelaCond.dicFldComparisonOp[clsPaperEduClsRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperEduClsRelaEN.con_mId,
      objPaperEduClsRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperEduClsRelaCond.dicFldComparisonOp,
      clsPaperEduClsRelaEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objPaperEduClsRelaCond.dicFldComparisonOp[clsPaperEduClsRelaEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperEduClsRelaEN.con_PaperId,
      objPaperEduClsRelaCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperEduClsRelaCond.dicFldComparisonOp,
      clsPaperEduClsRelaEN.con_PaperTitle,
    ) == true
  ) {
    const strComparisonOpPaperTitle: string =
      objPaperEduClsRelaCond.dicFldComparisonOp[clsPaperEduClsRelaEN.con_PaperTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperEduClsRelaEN.con_PaperTitle,
      objPaperEduClsRelaCond.paperTitle,
      strComparisonOpPaperTitle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperEduClsRelaCond.dicFldComparisonOp,
      clsPaperEduClsRelaEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objPaperEduClsRelaCond.dicFldComparisonOp[clsPaperEduClsRelaEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperEduClsRelaEN.con_IdCurrEduCls,
      objPaperEduClsRelaCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperEduClsRelaCond.dicFldComparisonOp,
      clsPaperEduClsRelaEN.con_Author,
    ) == true
  ) {
    const strComparisonOpAuthor: string =
      objPaperEduClsRelaCond.dicFldComparisonOp[clsPaperEduClsRelaEN.con_Author];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperEduClsRelaEN.con_Author,
      objPaperEduClsRelaCond.author,
      strComparisonOpAuthor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperEduClsRelaCond.dicFldComparisonOp,
      clsPaperEduClsRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objPaperEduClsRelaCond.dicFldComparisonOp[clsPaperEduClsRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperEduClsRelaEN.con_UpdUser,
      objPaperEduClsRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperEduClsRelaCond.dicFldComparisonOp,
      clsPaperEduClsRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPaperEduClsRelaCond.dicFldComparisonOp[clsPaperEduClsRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperEduClsRelaEN.con_UpdDate,
      objPaperEduClsRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperEduClsRelaCond.dicFldComparisonOp,
      clsPaperEduClsRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPaperEduClsRelaCond.dicFldComparisonOp[clsPaperEduClsRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperEduClsRelaEN.con_Memo,
      objPaperEduClsRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PaperEduClsRela(论文教学班关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PaperEduClsRela_GetUniCondStr(objPaperEduClsRelaEN: clsPaperEduClsRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PaperId = '{0}'", objPaperEduClsRelaEN.paperId);
  strWhereCond += Format(" and IdCurrEduCls = '{0}'", objPaperEduClsRelaEN.idCurrEduCls);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PaperEduClsRela(论文教学班关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PaperEduClsRela_GetUniCondStr4Update(
  objPaperEduClsRelaEN: clsPaperEduClsRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objPaperEduClsRelaEN.mId);
  strWhereCond += Format(" and PaperId = '{0}'", objPaperEduClsRelaEN.paperId);
  strWhereCond += Format(" and IdCurrEduCls = '{0}'", objPaperEduClsRelaEN.idCurrEduCls);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objPaperEduClsRelaENS:源对象
 * @param objPaperEduClsRelaENT:目标对象
 */
export function PaperEduClsRela_CopyObjTo(
  objPaperEduClsRelaENS: clsPaperEduClsRelaEN,
  objPaperEduClsRelaENT: clsPaperEduClsRelaEN,
): void {
  objPaperEduClsRelaENT.mId = objPaperEduClsRelaENS.mId; //mId
  objPaperEduClsRelaENT.paperId = objPaperEduClsRelaENS.paperId; //论文Id
  objPaperEduClsRelaENT.paperTitle = objPaperEduClsRelaENS.paperTitle; //论文标题
  objPaperEduClsRelaENT.idCurrEduCls = objPaperEduClsRelaENS.idCurrEduCls; //教学班流水号
  objPaperEduClsRelaENT.author = objPaperEduClsRelaENS.author; //作者
  objPaperEduClsRelaENT.updUser = objPaperEduClsRelaENS.updUser; //修改人
  objPaperEduClsRelaENT.updDate = objPaperEduClsRelaENS.updDate; //修改日期
  objPaperEduClsRelaENT.memo = objPaperEduClsRelaENS.memo; //备注
  objPaperEduClsRelaENT.sfUpdFldSetStr = objPaperEduClsRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPaperEduClsRelaENS:源对象
 * @param objPaperEduClsRelaENT:目标对象
 */
export function PaperEduClsRela_GetObjFromJsonObj(
  objPaperEduClsRelaENS: clsPaperEduClsRelaEN,
): clsPaperEduClsRelaEN {
  const objPaperEduClsRelaENT: clsPaperEduClsRelaEN = new clsPaperEduClsRelaEN();
  ObjectAssign(objPaperEduClsRelaENT, objPaperEduClsRelaENS);
  return objPaperEduClsRelaENT;
}
