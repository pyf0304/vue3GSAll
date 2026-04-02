/**
 * 类名:clsPaperResRelaWApi
 * 表名:PaperResRela(01120964)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 18:06:56
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
 * 论文资源关系(PaperResRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年03月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { clsPaperResRelaEN } from '@/ts/L0Entity/GradEduPaper/clsPaperResRelaEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const paperResRela_Controller = 'PaperResRelaApi';
export const paperResRela_ConstructorName = 'paperResRela';

/**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export function PaperResRela_SplitKeyLst(strKeyLst: string) {
  const arrKey = strKeyLst.split('|');
  if (arrKey.length != 2) {
    const strMsg = '请选择需要修改的记录!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  const objKeyLst = {
    paperId: arrKey[0],
    paperSubResId: Number(arrKey[1]),
  };
  if (IsNullOrEmpty(objKeyLst.paperId) == true) {
    const strMsg = '关键字段(paperId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  if (objKeyLst.paperSubResId == 0) {
    const strMsg = '关键字段(paperSubResId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  return objKeyLst;
}
/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPaperId:关键字
 * @returns 对象
 **/
export async function PaperResRela_GetObjByKeyLstAsync(
  strPaperId: string,
  lngPaperSubResId: number,
): Promise<clsPaperResRelaEN | null> {
  const strThisFuncName = 'GetObjByKeyLstAsync';

  if (IsNullOrEmpty(strPaperId) == true) {
    const strMsg = Format('参数:[strPaperId]不能为空!(In clsPaperResRelaWApi.GetObjByKeyLstAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPaperId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPaperId]的长度:[{0}]不正确!(clsPaperResRelaWApi.GetObjByKeyLstAsync)',
      strPaperId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngPaperSubResId == 0) {
    const strMsg = Format(
      '参数:[lngPaperSubResId]不能为空!(In clsPaperResRelaWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyLst';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPaperId,
      lngPaperSubResId,
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
      const objPaperResRela = PaperResRela_GetObjFromJsonObj(returnObj);
      return objPaperResRela;
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByKeyLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByKeyLstlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByPaperIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PaperResRela_SortFunDefa(a: clsPaperResRelaEN, b: clsPaperResRelaEN): number {
  return a.paperId.localeCompare(b.paperId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PaperResRela_SortFunDefa2Fld(a: clsPaperResRelaEN, b: clsPaperResRelaEN): number {
  if (a.idCurrEduCls == b.idCurrEduCls) return a.updDate.localeCompare(b.updDate);
  else return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PaperResRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPaperResRelaEN.con_PaperId:
        return (a: clsPaperResRelaEN, b: clsPaperResRelaEN) => {
          return a.paperId.localeCompare(b.paperId);
        };
      case clsPaperResRelaEN.con_PaperSubResId:
        return (a: clsPaperResRelaEN, b: clsPaperResRelaEN) => {
          return a.paperSubResId - b.paperSubResId;
        };
      case clsPaperResRelaEN.con_IdCurrEduCls:
        return (a: clsPaperResRelaEN, b: clsPaperResRelaEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsPaperResRelaEN.con_UpdDate:
        return (a: clsPaperResRelaEN, b: clsPaperResRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPaperResRelaEN.con_UpdUser:
        return (a: clsPaperResRelaEN, b: clsPaperResRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsPaperResRelaEN.con_Memo:
        return (a: clsPaperResRelaEN, b: clsPaperResRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PaperResRela]中不存在!(in ${paperResRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPaperResRelaEN.con_PaperId:
        return (a: clsPaperResRelaEN, b: clsPaperResRelaEN) => {
          return b.paperId.localeCompare(a.paperId);
        };
      case clsPaperResRelaEN.con_PaperSubResId:
        return (a: clsPaperResRelaEN, b: clsPaperResRelaEN) => {
          return b.paperSubResId - a.paperSubResId;
        };
      case clsPaperResRelaEN.con_IdCurrEduCls:
        return (a: clsPaperResRelaEN, b: clsPaperResRelaEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsPaperResRelaEN.con_UpdDate:
        return (a: clsPaperResRelaEN, b: clsPaperResRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPaperResRelaEN.con_UpdUser:
        return (a: clsPaperResRelaEN, b: clsPaperResRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsPaperResRelaEN.con_Memo:
        return (a: clsPaperResRelaEN, b: clsPaperResRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PaperResRela]中不存在!(in ${paperResRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PaperResRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPaperResRelaEN.con_PaperId:
      return (obj: clsPaperResRelaEN) => {
        return obj.paperId === value;
      };
    case clsPaperResRelaEN.con_PaperSubResId:
      return (obj: clsPaperResRelaEN) => {
        return obj.paperSubResId === value;
      };
    case clsPaperResRelaEN.con_IdCurrEduCls:
      return (obj: clsPaperResRelaEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsPaperResRelaEN.con_UpdDate:
      return (obj: clsPaperResRelaEN) => {
        return obj.updDate === value;
      };
    case clsPaperResRelaEN.con_UpdUser:
      return (obj: clsPaperResRelaEN) => {
        return obj.updUser === value;
      };
    case clsPaperResRelaEN.con_Memo:
      return (obj: clsPaperResRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PaperResRela]中不存在!(in ${paperResRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[PaperResRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperResRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperResRela_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldName,
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const arrId = data.returnStrLst.split(',');
      return arrId;
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
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
export async function PaperResRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
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
export async function PaperResRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPaperResRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

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
      const objPaperResRela = PaperResRela_GetObjFromJsonObj(returnObj);
      return objPaperResRela;
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstClientCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStoragePureCache]函数;

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PaperResRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPaperResRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

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
          paperResRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperResRela_GetObjLstByJSONObjLst(returnObjLst);
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstsessionStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstsessionStoragePureCache]函数;
//该表没有使用Cache,不需要生成[GetObjLst_Cache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
//该表没有使用Cache,不需要生成[GetObjLstByPaperIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function PaperResRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPaperResRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

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
          paperResRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperResRela_GetObjLstByJSONObjLst(returnObjLst);
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
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
export async function PaperResRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPaperResRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

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
          paperResRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperResRela_GetObjLstByJSONObjLst(returnObjLst);
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PaperResRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPaperResRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPaperResRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

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
          paperResRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PaperResRela_GetObjLstByJSONObjLst(returnObjLst);
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
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
 * @param strPaperId,lngPaperSubResId:关键字列表
 * @returns 获取删除的结果
 **/
export async function PaperResRela_DelRecKeyLstAsync(
  strPaperId: string,
  lngPaperSubResId: number,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstAsync';
  const strAction = 'DelRecKeyLst';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPaperId,
      lngPaperSubResId,
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
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
 * @param arrKeyLsts:关键字列表, 关键字是多个字段的组合
 * @returns 实际删除记录的个数
 **/
export async function PaperResRela_DelRecKeyLstsAsync(arrKeyLsts: Array<string>): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstsAsync';
  const strAction = 'DelRecKeyLsts';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeyLsts, config);
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
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
export async function PaperResRela_DelPaperResRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPaperResRelasByCondAsync';
  const strAction = 'DelPaperResRelasByCond';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
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
 * @param objPaperResRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PaperResRela_AddNewRecordAsync(
  objPaperResRelaEN: clsPaperResRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objPaperResRelaEN.paperId === null || objPaperResRelaEN.paperId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPaperResRelaEN);
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperResRelaEN, config);
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
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
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objPaperResRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PaperResRela_AddNewRecordWithMaxIdAsync(
  objPaperResRelaEN: clsPaperResRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperResRelaEN, config);
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objPaperResRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PaperResRela_AddNewRecordWithReturnKeyAsync(
  objPaperResRelaEN: clsPaperResRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperResRelaEN, config);
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
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
 * @param objPaperResRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PaperResRela_UpdateRecordAsync(
  objPaperResRelaEN: clsPaperResRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPaperResRelaEN.sfUpdFldSetStr === undefined ||
    objPaperResRelaEN.sfUpdFldSetStr === null ||
    objPaperResRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPaperResRelaEN.paperId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperResRelaEN, config);
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
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
 * @param objPaperResRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PaperResRela_UpdateWithConditionAsync(
  objPaperResRelaEN: clsPaperResRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPaperResRelaEN.sfUpdFldSetStr === undefined ||
    objPaperResRelaEN.sfUpdFldSetStr === null ||
    objPaperResRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPaperResRelaEN.paperId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);
  objPaperResRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPaperResRelaEN, config);
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function PaperResRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strPaperId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PaperResRela_IsExistAsync(
  strPaperId: string,
  lngPaperSubResId: number,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPaperId,
      lngPaperSubResId,
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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
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
export async function PaperResRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function PaperResRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(paperResRela_Controller, strAction);

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
        paperResRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        paperResRela_ConstructorName,
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
export function PaperResRela_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PaperResRela_CheckPropertyNew(pobjPaperResRelaEN: clsPaperResRelaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.paperId) == false &&
    GetStrLen(pobjPaperResRelaEN.paperId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 论文资源关系(PaperResRela))!值:${pobjPaperResRelaEN.paperId}(clsPaperResRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.idCurrEduCls) == false &&
    GetStrLen(pobjPaperResRelaEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 论文资源关系(PaperResRela))!值:${pobjPaperResRelaEN.idCurrEduCls}(clsPaperResRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.updDate) == false &&
    GetStrLen(pobjPaperResRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文资源关系(PaperResRela))!值:${pobjPaperResRelaEN.updDate}(clsPaperResRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.updUser) == false &&
    GetStrLen(pobjPaperResRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文资源关系(PaperResRela))!值:${pobjPaperResRelaEN.updUser}(clsPaperResRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.memo) == false &&
    GetStrLen(pobjPaperResRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 论文资源关系(PaperResRela))!值:${pobjPaperResRelaEN.memo}(clsPaperResRelaBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.paperId) == false &&
    undefined !== pobjPaperResRelaEN.paperId &&
    tzDataType.isString(pobjPaperResRelaEN.paperId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[论文Id(paperId)]的值:[${pobjPaperResRelaEN.paperId}], 非法,应该为字符型(In 论文资源关系(PaperResRela))!(clsPaperResRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPaperResRelaEN.paperSubResId &&
    undefined !== pobjPaperResRelaEN.paperSubResId &&
    tzDataType.isNumber(pobjPaperResRelaEN.paperSubResId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[论文子资源Id(paperSubResId)]的值:[${pobjPaperResRelaEN.paperSubResId}], 非法,应该为数值型(In 论文资源关系(PaperResRela))!(clsPaperResRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.idCurrEduCls) == false &&
    undefined !== pobjPaperResRelaEN.idCurrEduCls &&
    tzDataType.isString(pobjPaperResRelaEN.idCurrEduCls) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjPaperResRelaEN.idCurrEduCls}], 非法,应该为字符型(In 论文资源关系(PaperResRela))!(clsPaperResRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.updDate) == false &&
    undefined !== pobjPaperResRelaEN.updDate &&
    tzDataType.isString(pobjPaperResRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjPaperResRelaEN.updDate}], 非法,应该为字符型(In 论文资源关系(PaperResRela))!(clsPaperResRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.updUser) == false &&
    undefined !== pobjPaperResRelaEN.updUser &&
    tzDataType.isString(pobjPaperResRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjPaperResRelaEN.updUser}], 非法,应该为字符型(In 论文资源关系(PaperResRela))!(clsPaperResRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.memo) == false &&
    undefined !== pobjPaperResRelaEN.memo &&
    tzDataType.isString(pobjPaperResRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[备注(memo)]的值:[${pobjPaperResRelaEN.memo}], 非法,应该为字符型(In 论文资源关系(PaperResRela))!(clsPaperResRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PaperResRela_CheckProperty4Update(pobjPaperResRelaEN: clsPaperResRelaEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.paperId) == false &&
    GetStrLen(pobjPaperResRelaEN.paperId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 论文资源关系(PaperResRela))!值:${pobjPaperResRelaEN.paperId}(clsPaperResRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.idCurrEduCls) == false &&
    GetStrLen(pobjPaperResRelaEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 论文资源关系(PaperResRela))!值:${pobjPaperResRelaEN.idCurrEduCls}(clsPaperResRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.updDate) == false &&
    GetStrLen(pobjPaperResRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文资源关系(PaperResRela))!值:${pobjPaperResRelaEN.updDate}(clsPaperResRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.updUser) == false &&
    GetStrLen(pobjPaperResRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文资源关系(PaperResRela))!值:${pobjPaperResRelaEN.updUser}(clsPaperResRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.memo) == false &&
    GetStrLen(pobjPaperResRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 论文资源关系(PaperResRela))!值:${pobjPaperResRelaEN.memo}(clsPaperResRelaBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.paperId) == false &&
    undefined !== pobjPaperResRelaEN.paperId &&
    tzDataType.isString(pobjPaperResRelaEN.paperId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[论文Id(paperId)]的值:[${pobjPaperResRelaEN.paperId}], 非法,应该为字符型(In 论文资源关系(PaperResRela))!(clsPaperResRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPaperResRelaEN.paperSubResId &&
    undefined !== pobjPaperResRelaEN.paperSubResId &&
    tzDataType.isNumber(pobjPaperResRelaEN.paperSubResId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[论文子资源Id(paperSubResId)]的值:[${pobjPaperResRelaEN.paperSubResId}], 非法,应该为数值型(In 论文资源关系(PaperResRela))!(clsPaperResRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.idCurrEduCls) == false &&
    undefined !== pobjPaperResRelaEN.idCurrEduCls &&
    tzDataType.isString(pobjPaperResRelaEN.idCurrEduCls) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjPaperResRelaEN.idCurrEduCls}], 非法,应该为字符型(In 论文资源关系(PaperResRela))!(clsPaperResRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.updDate) == false &&
    undefined !== pobjPaperResRelaEN.updDate &&
    tzDataType.isString(pobjPaperResRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjPaperResRelaEN.updDate}], 非法,应该为字符型(In 论文资源关系(PaperResRela))!(clsPaperResRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.updUser) == false &&
    undefined !== pobjPaperResRelaEN.updUser &&
    tzDataType.isString(pobjPaperResRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjPaperResRelaEN.updUser}], 非法,应该为字符型(In 论文资源关系(PaperResRela))!(clsPaperResRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.memo) == false &&
    undefined !== pobjPaperResRelaEN.memo &&
    tzDataType.isString(pobjPaperResRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[备注(memo)]的值:[${pobjPaperResRelaEN.memo}], 非法,应该为字符型(In 论文资源关系(PaperResRela))!(clsPaperResRelaBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjPaperResRelaEN.paperId) === true ||
    pobjPaperResRelaEN.paperId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[论文Id]不能为空(In 论文资源关系)!(clsPaperResRelaBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PaperResRela_GetJSONStrByObj(pobjPaperResRelaEN: clsPaperResRelaEN): string {
  pobjPaperResRelaEN.sfUpdFldSetStr = pobjPaperResRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPaperResRelaEN);
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
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PaperResRela_GetObjLstByJSONStr(strJSON: string): Array<clsPaperResRelaEN> {
  let arrPaperResRelaObjLst = new Array<clsPaperResRelaEN>();
  if (strJSON === '') {
    return arrPaperResRelaObjLst;
  }
  try {
    arrPaperResRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPaperResRelaObjLst;
  }
  return arrPaperResRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPaperResRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PaperResRela_GetObjLstByJSONObjLst(
  arrPaperResRelaObjLstS: Array<clsPaperResRelaEN>,
): Array<clsPaperResRelaEN> {
  const arrPaperResRelaObjLst = new Array<clsPaperResRelaEN>();
  for (const objInFor of arrPaperResRelaObjLstS) {
    const obj1 = PaperResRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPaperResRelaObjLst.push(obj1);
  }
  return arrPaperResRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PaperResRela_GetObjByJSONStr(strJSON: string): clsPaperResRelaEN {
  let pobjPaperResRelaEN = new clsPaperResRelaEN();
  if (strJSON === '') {
    return pobjPaperResRelaEN;
  }
  try {
    pobjPaperResRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPaperResRelaEN;
  }
  return pobjPaperResRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PaperResRela_GetCombineCondition(objPaperResRelaCond: clsPaperResRelaEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperResRelaCond.dicFldComparisonOp,
      clsPaperResRelaEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objPaperResRelaCond.dicFldComparisonOp[clsPaperResRelaEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperResRelaEN.con_PaperId,
      objPaperResRelaCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperResRelaCond.dicFldComparisonOp,
      clsPaperResRelaEN.con_PaperSubResId,
    ) == true
  ) {
    const strComparisonOpPaperSubResId: string =
      objPaperResRelaCond.dicFldComparisonOp[clsPaperResRelaEN.con_PaperSubResId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPaperResRelaEN.con_PaperSubResId,
      objPaperResRelaCond.paperSubResId,
      strComparisonOpPaperSubResId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperResRelaCond.dicFldComparisonOp,
      clsPaperResRelaEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objPaperResRelaCond.dicFldComparisonOp[clsPaperResRelaEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperResRelaEN.con_IdCurrEduCls,
      objPaperResRelaCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperResRelaCond.dicFldComparisonOp,
      clsPaperResRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPaperResRelaCond.dicFldComparisonOp[clsPaperResRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperResRelaEN.con_UpdDate,
      objPaperResRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperResRelaCond.dicFldComparisonOp,
      clsPaperResRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objPaperResRelaCond.dicFldComparisonOp[clsPaperResRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperResRelaEN.con_UpdUser,
      objPaperResRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPaperResRelaCond.dicFldComparisonOp,
      clsPaperResRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPaperResRelaCond.dicFldComparisonOp[clsPaperResRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPaperResRelaEN.con_Memo,
      objPaperResRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objPaperResRelaENS:源对象
 * @param objPaperResRelaENT:目标对象
 */
export function PaperResRela_CopyObjTo(
  objPaperResRelaENS: clsPaperResRelaEN,
  objPaperResRelaENT: clsPaperResRelaEN,
): void {
  objPaperResRelaENT.paperId = objPaperResRelaENS.paperId; //论文Id
  objPaperResRelaENT.paperSubResId = objPaperResRelaENS.paperSubResId; //论文子资源Id
  objPaperResRelaENT.idCurrEduCls = objPaperResRelaENS.idCurrEduCls; //教学班流水号
  objPaperResRelaENT.updDate = objPaperResRelaENS.updDate; //修改日期
  objPaperResRelaENT.updUser = objPaperResRelaENS.updUser; //修改人
  objPaperResRelaENT.memo = objPaperResRelaENS.memo; //备注
  objPaperResRelaENT.sfUpdFldSetStr = objPaperResRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPaperResRelaENS:源对象
 * @param objPaperResRelaENT:目标对象
 */
export function PaperResRela_GetObjFromJsonObj(
  objPaperResRelaENS: clsPaperResRelaEN,
): clsPaperResRelaEN {
  const objPaperResRelaENT: clsPaperResRelaEN = new clsPaperResRelaEN();
  ObjectAssign(objPaperResRelaENT, objPaperResRelaENS);
  return objPaperResRelaENT;
}
