/**
 * 类名:clsRTUserRelaWApi
 * 表名:RTUserRela(01120582)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/10 09:06:35
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 主题用户关系(RTUserRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月10日.
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
import { clsRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { vRTUserRela_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const rTUserRela_Controller = 'RTUserRelaApi';
export const rTUserRela_ConstructorName = 'rTUserRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function RTUserRela_GetObjBymIdAsync(lngmId: number): Promise<clsRTUserRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsRTUserRelaWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
      const objRTUserRela = RTUserRela_GetObjFromJsonObj(returnObj);
      return objRTUserRela;
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export async function RTUserRela_GetObjBymIdCache(
  lngmId: number,
  strUserId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsRTUserRelaWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrRTUserRelaObjLstCache = await RTUserRela_GetObjLstCache(strUserId);
  try {
    const arrRTUserRelaSel = arrRTUserRelaObjLstCache.filter((x) => x.mId == lngmId);
    let objRTUserRela: clsRTUserRelaEN;
    if (arrRTUserRelaSel.length > 0) {
      objRTUserRela = arrRTUserRelaSel[0];
      return objRTUserRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objRTUserRelaConst = await RTUserRela_GetObjBymIdAsync(lngmId);
        if (objRTUserRelaConst != null) {
          RTUserRela_ReFreshThisCache(strUserId);
          return objRTUserRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      rTUserRela_ConstructorName,
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
export async function RTUserRela_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsRTUserRelaWApi.GetObjBymIdlocalStorage)');
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsRTUserRelaEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objRTUserRelaCache: clsRTUserRelaEN = JSON.parse(strTempObj);
    return objRTUserRelaCache;
  }
  try {
    const objRTUserRela = await RTUserRela_GetObjBymIdAsync(lngmId);
    if (objRTUserRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objRTUserRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objRTUserRela;
    }
    return objRTUserRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      rTUserRela_ConstructorName,
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
 * @param objRTUserRela:所给的对象
 * @returns 对象
 */
export async function RTUserRela_UpdateObjInLstCache(
  objRTUserRela: clsRTUserRelaEN,
  strUserId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrRTUserRelaObjLstCache = await RTUserRela_GetObjLstCache(strUserId);
    const obj = arrRTUserRelaObjLstCache.find(
      (x) => x.topicId == objRTUserRela.topicId && x.userId == objRTUserRela.userId,
    );
    if (obj != null) {
      objRTUserRela.mId = obj.mId;
      ObjectAssign(obj, objRTUserRela);
    } else {
      arrRTUserRelaObjLstCache.push(objRTUserRela);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      rTUserRela_ConstructorName,
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
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strUserId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function RTUserRela_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strUserIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strUserIdClassfy) == true) {
    const strMsg = Format('参数:[strUserIdClassfy]不能为空!(In clsRTUserRelaWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsRTUserRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsRTUserRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsRTUserRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objRTUserRela = await RTUserRela_GetObjBymIdCache(lngmId, strUserIdClassfy);
  if (objRTUserRela == null) return '';
  if (objRTUserRela.GetFldValue(strOutFldName) == null) return '';
  return objRTUserRela.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function RTUserRela_SortFunDefa(a: clsRTUserRelaEN, b: clsRTUserRelaEN): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function RTUserRela_SortFunDefa2Fld(a: clsRTUserRelaEN, b: clsRTUserRelaEN): number {
  if (a.topicId == b.topicId) return a.userId.localeCompare(b.userId);
  else return a.topicId.localeCompare(b.topicId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function RTUserRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsRTUserRelaEN.con_mId:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return a.mId - b.mId;
        };
      case clsRTUserRelaEN.con_TopicId:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsRTUserRelaEN.con_UserId:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsRTUserRelaEN.con_TopicUserRoleId:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return a.topicUserRoleId.localeCompare(b.topicUserRoleId);
        };
      case clsRTUserRelaEN.con_ColorId:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (a.colorId == null) return -1;
          if (b.colorId == null) return 1;
          return a.colorId.localeCompare(b.colorId);
        };
      case clsRTUserRelaEN.con_OrderNum:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsRTUserRelaEN.con_UserBgColor:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (a.userBgColor == null) return -1;
          if (b.userBgColor == null) return 1;
          return a.userBgColor.localeCompare(b.userBgColor);
        };
      case clsRTUserRelaEN.con_IdCurrEduCls:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsRTUserRelaEN.con_AppraiseCount:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return a.appraiseCount - b.appraiseCount;
        };
      case clsRTUserRelaEN.con_OkCount:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return a.okCount - b.okCount;
        };
      case clsRTUserRelaEN.con_Score:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return a.score - b.score;
        };
      case clsRTUserRelaEN.con_StuScore:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return a.stuScore - b.stuScore;
        };
      case clsRTUserRelaEN.con_TeaScore:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsRTUserRelaEN.con_IsSubmit:
        return (a: clsRTUserRelaEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsRTUserRelaEN.con_LastVisitedDate:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (a.lastVisitedDate == null) return -1;
          if (b.lastVisitedDate == null) return 1;
          return a.lastVisitedDate.localeCompare(b.lastVisitedDate);
        };
      case clsRTUserRelaEN.con_UpdDate:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsRTUserRelaEN.con_UpdUser:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsRTUserRelaEN.con_Memo:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[RTUserRela]中不存在!(in ${rTUserRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsRTUserRelaEN.con_mId:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return b.mId - a.mId;
        };
      case clsRTUserRelaEN.con_TopicId:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsRTUserRelaEN.con_UserId:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsRTUserRelaEN.con_TopicUserRoleId:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return b.topicUserRoleId.localeCompare(a.topicUserRoleId);
        };
      case clsRTUserRelaEN.con_ColorId:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (b.colorId == null) return -1;
          if (a.colorId == null) return 1;
          return b.colorId.localeCompare(a.colorId);
        };
      case clsRTUserRelaEN.con_OrderNum:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsRTUserRelaEN.con_UserBgColor:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (b.userBgColor == null) return -1;
          if (a.userBgColor == null) return 1;
          return b.userBgColor.localeCompare(a.userBgColor);
        };
      case clsRTUserRelaEN.con_IdCurrEduCls:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsRTUserRelaEN.con_AppraiseCount:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return b.appraiseCount - a.appraiseCount;
        };
      case clsRTUserRelaEN.con_OkCount:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return b.okCount - a.okCount;
        };
      case clsRTUserRelaEN.con_Score:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return b.score - a.score;
        };
      case clsRTUserRelaEN.con_StuScore:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return b.stuScore - a.stuScore;
        };
      case clsRTUserRelaEN.con_TeaScore:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsRTUserRelaEN.con_IsSubmit:
        return (b: clsRTUserRelaEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsRTUserRelaEN.con_LastVisitedDate:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (b.lastVisitedDate == null) return -1;
          if (a.lastVisitedDate == null) return 1;
          return b.lastVisitedDate.localeCompare(a.lastVisitedDate);
        };
      case clsRTUserRelaEN.con_UpdDate:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsRTUserRelaEN.con_UpdUser:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsRTUserRelaEN.con_Memo:
        return (a: clsRTUserRelaEN, b: clsRTUserRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[RTUserRela]中不存在!(in ${rTUserRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function RTUserRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsRTUserRelaEN.con_mId:
      return (obj: clsRTUserRelaEN) => {
        return obj.mId === value;
      };
    case clsRTUserRelaEN.con_TopicId:
      return (obj: clsRTUserRelaEN) => {
        return obj.topicId === value;
      };
    case clsRTUserRelaEN.con_UserId:
      return (obj: clsRTUserRelaEN) => {
        return obj.userId === value;
      };
    case clsRTUserRelaEN.con_TopicUserRoleId:
      return (obj: clsRTUserRelaEN) => {
        return obj.topicUserRoleId === value;
      };
    case clsRTUserRelaEN.con_ColorId:
      return (obj: clsRTUserRelaEN) => {
        return obj.colorId === value;
      };
    case clsRTUserRelaEN.con_OrderNum:
      return (obj: clsRTUserRelaEN) => {
        return obj.orderNum === value;
      };
    case clsRTUserRelaEN.con_UserBgColor:
      return (obj: clsRTUserRelaEN) => {
        return obj.userBgColor === value;
      };
    case clsRTUserRelaEN.con_IdCurrEduCls:
      return (obj: clsRTUserRelaEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsRTUserRelaEN.con_AppraiseCount:
      return (obj: clsRTUserRelaEN) => {
        return obj.appraiseCount === value;
      };
    case clsRTUserRelaEN.con_OkCount:
      return (obj: clsRTUserRelaEN) => {
        return obj.okCount === value;
      };
    case clsRTUserRelaEN.con_Score:
      return (obj: clsRTUserRelaEN) => {
        return obj.score === value;
      };
    case clsRTUserRelaEN.con_StuScore:
      return (obj: clsRTUserRelaEN) => {
        return obj.stuScore === value;
      };
    case clsRTUserRelaEN.con_TeaScore:
      return (obj: clsRTUserRelaEN) => {
        return obj.teaScore === value;
      };
    case clsRTUserRelaEN.con_IsSubmit:
      return (obj: clsRTUserRelaEN) => {
        return obj.isSubmit === value;
      };
    case clsRTUserRelaEN.con_LastVisitedDate:
      return (obj: clsRTUserRelaEN) => {
        return obj.lastVisitedDate === value;
      };
    case clsRTUserRelaEN.con_UpdDate:
      return (obj: clsRTUserRelaEN) => {
        return obj.updDate === value;
      };
    case clsRTUserRelaEN.con_UpdUser:
      return (obj: clsRTUserRelaEN) => {
        return obj.updUser === value;
      };
    case clsRTUserRelaEN.con_Memo:
      return (obj: clsRTUserRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[RTUserRela]中不存在!(in ${rTUserRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strUserId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function RTUserRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strUserIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strUserIdClassfy) == true) {
    const strMsg = Format('参数:[strUserIdClassfy]不能为空!(In clsRTUserRelaWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsRTUserRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrRTUserRela = await RTUserRela_GetObjLstCache(strUserIdClassfy);
  if (arrRTUserRela == null) return [];
  let arrRTUserRelaSel = arrRTUserRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrRTUserRelaSel = arrRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrRTUserRelaSel = arrRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrRTUserRelaSel = arrRTUserRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrRTUserRelaSel = arrRTUserRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrRTUserRelaSel = arrRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrRTUserRelaSel = arrRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrRTUserRelaSel = arrRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrRTUserRelaSel = arrRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrRTUserRelaSel = arrRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrRTUserRelaSel = arrRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrRTUserRelaSel.length == 0) return [];
  return arrRTUserRelaSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function RTUserRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export async function RTUserRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export async function RTUserRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsRTUserRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
      const objRTUserRela = RTUserRela_GetObjFromJsonObj(returnObj);
      return objRTUserRela;
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export async function RTUserRela_GetObjLstClientCache(strUserId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsRTUserRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsRTUserRelaEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("UserId='{0}'", strUserId);
  }
  const strKey = Format('{0}_{1}', clsRTUserRelaEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsRTUserRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRTUserRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrRTUserRelaExObjLstCache: Array<clsRTUserRelaEN> = CacheHelper.Get(strKey);
    const arrRTUserRelaObjLstT = RTUserRela_GetObjLstByJSONObjLst(arrRTUserRelaExObjLstCache);
    return arrRTUserRelaObjLstT;
  }
  try {
    const arrRTUserRelaExObjLst = await RTUserRela_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrRTUserRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRTUserRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrRTUserRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rTUserRela_ConstructorName,
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
export async function RTUserRela_GetObjLstlocalStorage(strUserId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsRTUserRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsRTUserRelaEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsRTUserRelaEN.con_UserId, strUserId);
  }
  const strKey = Format('{0}_{1}', clsRTUserRelaEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsRTUserRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRTUserRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrRTUserRelaExObjLstCache: Array<clsRTUserRelaEN> = JSON.parse(strTempObjLst);
    const arrRTUserRelaObjLstT = RTUserRela_GetObjLstByJSONObjLst(arrRTUserRelaExObjLstCache);
    return arrRTUserRelaObjLstT;
  }
  try {
    const arrRTUserRelaExObjLst = await RTUserRela_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrRTUserRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRTUserRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrRTUserRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rTUserRela_ConstructorName,
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
export async function RTUserRela_GetObjLstlocalStoragePureCache(strUserId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsRTUserRelaEN._CurrTabName, strUserId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrRTUserRelaObjLstCache: Array<clsRTUserRelaEN> = JSON.parse(strTempObjLst);
    return arrRTUserRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function RTUserRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsRTUserRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
          rTUserRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTUserRela_GetObjLstByJSONObjLst(returnObjLst);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export async function RTUserRela_GetObjLstsessionStorage(strUserId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsRTUserRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsRTUserRelaEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsRTUserRelaEN.con_UserId, strUserId);
  }
  const strKey = Format('{0}_{1}', clsRTUserRelaEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsRTUserRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRTUserRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrRTUserRelaExObjLstCache: Array<clsRTUserRelaEN> = JSON.parse(strTempObjLst);
    const arrRTUserRelaObjLstT = RTUserRela_GetObjLstByJSONObjLst(arrRTUserRelaExObjLstCache);
    return arrRTUserRelaObjLstT;
  }
  try {
    const arrRTUserRelaExObjLst = await RTUserRela_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrRTUserRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRTUserRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrRTUserRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rTUserRela_ConstructorName,
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
export async function RTUserRela_GetObjLstsessionStoragePureCache(strUserId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsRTUserRelaEN._CurrTabName, strUserId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrRTUserRelaObjLstCache: Array<clsRTUserRelaEN> = JSON.parse(strTempObjLst);
    return arrRTUserRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function RTUserRela_GetObjLstCache(
  strUserId: string,
): Promise<Array<clsRTUserRelaEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format(
      '参数:[strUserId]不能为空！(In clsRTUserRelaWApi.RTUserRela_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrRTUserRelaObjLstCache;
  switch (clsRTUserRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrRTUserRelaObjLstCache = await RTUserRela_GetObjLstsessionStorage(strUserId);
      break;
    case '03': //localStorage
      arrRTUserRelaObjLstCache = await RTUserRela_GetObjLstlocalStorage(strUserId);
      break;
    case '02': //ClientCache
      arrRTUserRelaObjLstCache = await RTUserRela_GetObjLstClientCache(strUserId);
      break;
    default:
      arrRTUserRelaObjLstCache = await RTUserRela_GetObjLstClientCache(strUserId);
      break;
  }
  return arrRTUserRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function RTUserRela_GetObjLstPureCache(strUserId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrRTUserRelaObjLstCache;
  switch (clsRTUserRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrRTUserRelaObjLstCache = await RTUserRela_GetObjLstsessionStoragePureCache(strUserId);
      break;
    case '03': //localStorage
      arrRTUserRelaObjLstCache = await RTUserRela_GetObjLstlocalStoragePureCache(strUserId);
      break;
    case '02': //ClientCache
      arrRTUserRelaObjLstCache = null;
      break;
    default:
      arrRTUserRelaObjLstCache = null;
      break;
  }
  return arrRTUserRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function RTUserRela_GetSubObjLstCache(
  objRTUserRelaCond: clsRTUserRelaEN,
  strUserId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrRTUserRelaObjLstCache = await RTUserRela_GetObjLstCache(strUserId);
  let arrRTUserRelaSel = arrRTUserRelaObjLstCache;
  if (objRTUserRelaCond.sfFldComparisonOp == null || objRTUserRelaCond.sfFldComparisonOp == '')
    return arrRTUserRelaSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRTUserRelaCond.sfFldComparisonOp,
  );
  //console.log("clsRTUserRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRTUserRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRTUserRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrRTUserRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objRTUserRelaCond),
      rTUserRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRTUserRelaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function RTUserRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsRTUserRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
          rTUserRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTUserRela_GetObjLstByJSONObjLst(returnObjLst);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export async function RTUserRela_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strUserId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrRTUserRelaObjLstCache = await RTUserRela_GetObjLstCache(strUserId);
    const arrRTUserRelaSel = arrRTUserRelaObjLstCache.filter((x) => arrmIdLst.indexOf(x.mId) > -1);
    return arrRTUserRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      rTUserRela_ConstructorName,
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
export async function RTUserRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsRTUserRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
          rTUserRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTUserRela_GetObjLstByJSONObjLst(returnObjLst);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export async function RTUserRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsRTUserRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
          rTUserRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTUserRela_GetObjLstByJSONObjLst(returnObjLst);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export async function RTUserRela_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strUserId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsRTUserRelaEN>();
  const arrRTUserRelaObjLstCache = await RTUserRela_GetObjLstCache(strUserId);
  if (arrRTUserRelaObjLstCache.length == 0) return arrRTUserRelaObjLstCache;
  let arrRTUserRelaSel = arrRTUserRelaObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objRTUserRelaCond = new clsRTUserRelaEN();
  ObjectAssign(objRTUserRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsRTUserRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRTUserRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrRTUserRelaSel.length == 0) return arrRTUserRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrRTUserRelaSel = arrRTUserRelaSel.sort(RTUserRela_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrRTUserRelaSel = arrRTUserRelaSel.sort(objPagerPara.sortFun);
    }
    arrRTUserRelaSel = arrRTUserRelaSel.slice(intStart, intEnd);
    return arrRTUserRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      rTUserRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRTUserRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function RTUserRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsRTUserRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsRTUserRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
          rTUserRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RTUserRela_GetObjLstByJSONObjLst(returnObjLst);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export async function RTUserRela_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export async function RTUserRela_DelRTUserRelasAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelRTUserRelasAsync';
  const strAction = 'DelRTUserRelas';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export async function RTUserRela_DelRTUserRelasByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelRTUserRelasByCondAsync';
  const strAction = 'DelRTUserRelasByCond';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
 * @param objRTUserRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RTUserRela_AddNewRecordAsync(
  objRTUserRelaEN: clsRTUserRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objRTUserRelaEN);
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRTUserRelaEN, config);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objRTUserRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RTUserRela_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objRTUserRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RTUserRela_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objRTUserRelaEN);
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objRTUserRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RTUserRela_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objRTUserRelaEN);
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objRTUserRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RTUserRela_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objRTUserRelaEN);
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objRTUserRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RTUserRela_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objRTUserRelaEN);
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
 * @param objRTUserRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function RTUserRela_AddNewRecordWithReturnKeyAsync(
  objRTUserRelaEN: clsRTUserRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRTUserRelaEN, config);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
 * @param objRTUserRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function RTUserRela_UpdateRecordAsync(
  objRTUserRelaEN: clsRTUserRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objRTUserRelaEN.sfUpdFldSetStr === undefined ||
    objRTUserRelaEN.sfUpdFldSetStr === null ||
    objRTUserRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objRTUserRelaEN.mId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRTUserRelaEN, config);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
 * @param objRTUserRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function RTUserRela_UpdateWithConditionAsync(
  objRTUserRelaEN: clsRTUserRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objRTUserRelaEN.sfUpdFldSetStr === undefined ||
    objRTUserRelaEN.sfUpdFldSetStr === null ||
    objRTUserRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objRTUserRelaEN.mId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);
  objRTUserRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRTUserRelaEN, config);
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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export async function RTUserRela_IsExistRecordCache(
  objRTUserRelaCond: clsRTUserRelaEN,
  strUserId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrRTUserRelaObjLstCache = await RTUserRela_GetObjLstCache(strUserId);
  if (arrRTUserRelaObjLstCache == null) return false;
  let arrRTUserRelaSel = arrRTUserRelaObjLstCache;
  if (objRTUserRelaCond.sfFldComparisonOp == null || objRTUserRelaCond.sfFldComparisonOp == '')
    return arrRTUserRelaSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRTUserRelaCond.sfFldComparisonOp,
  );
  //console.log("clsRTUserRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRTUserRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRTUserRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrRTUserRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objRTUserRelaCond),
      rTUserRela_ConstructorName,
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
export async function RTUserRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export async function RTUserRela_IsExistCache(lngmId: number, strUserId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrRTUserRelaObjLstCache = await RTUserRela_GetObjLstCache(strUserId);
  if (arrRTUserRelaObjLstCache == null) return false;
  try {
    const arrRTUserRelaSel = arrRTUserRelaObjLstCache.filter((x) => x.mId == lngmId);
    if (arrRTUserRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      rTUserRela_ConstructorName,
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
export async function RTUserRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export async function RTUserRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
 * @param objRTUserRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function RTUserRela_GetRecCountByCondCache(
  objRTUserRelaCond: clsRTUserRelaEN,
  strUserId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrRTUserRelaObjLstCache = await RTUserRela_GetObjLstCache(strUserId);
  if (arrRTUserRelaObjLstCache == null) return 0;
  let arrRTUserRelaSel = arrRTUserRelaObjLstCache;
  if (objRTUserRelaCond.sfFldComparisonOp == null || objRTUserRelaCond.sfFldComparisonOp == '')
    return arrRTUserRelaSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRTUserRelaCond.sfFldComparisonOp,
  );
  //console.log("clsRTUserRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRTUserRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRTUserRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrRTUserRelaSel = arrRTUserRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRTUserRelaSel = arrRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrRTUserRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objRTUserRelaCond),
      rTUserRela_ConstructorName,
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
export async function RTUserRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(rTUserRela_Controller, strAction);

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
        rTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rTUserRela_ConstructorName,
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
export function RTUserRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function RTUserRela_ReFreshCache(strUserId: string): void {
  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format(
      '参数:[strUserId]不能为空!(In clsRTUserRelaWApi.clsRTUserRelaWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsRTUserRelaEN._CurrTabName, strUserId);
  switch (clsRTUserRelaEN.CacheModeId) {
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
  vRTUserRela_ReFreshThisCache(strUserId);
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function RTUserRela_ReFreshThisCache(strUserId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsRTUserRelaEN._CurrTabName, strUserId);
    switch (clsRTUserRelaEN.CacheModeId) {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function RTUserRela_CheckPropertyNew(pobjRTUserRelaEN: clsRTUserRelaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjRTUserRelaEN.topicUserRoleId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[主键Id]不能为空(In 主题用户关系)!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjRTUserRelaEN.topicId) == false && GetStrLen(pobjRTUserRelaEN.topicId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.topicId)(clsRTUserRelaBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjRTUserRelaEN.userId) == false && GetStrLen(pobjRTUserRelaEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.userId)(clsRTUserRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.topicUserRoleId) == false &&
    GetStrLen(pobjRTUserRelaEN.topicUserRoleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主键Id(topicUserRoleId)]的长度不能超过4(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.topicUserRoleId)(clsRTUserRelaBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjRTUserRelaEN.colorId) == false && GetStrLen(pobjRTUserRelaEN.colorId) > 2) {
    throw new Error(
      '(errid:Watl000413)字段[颜色Id(colorId)]的长度不能超过2(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.colorId)(clsRTUserRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.userBgColor) == false &&
    GetStrLen(pobjRTUserRelaEN.userBgColor) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户段落背景(userBgColor)]的长度不能超过200(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.userBgColor)(clsRTUserRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.idCurrEduCls) == false &&
    GetStrLen(pobjRTUserRelaEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.idCurrEduCls)(clsRTUserRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.lastVisitedDate) == false &&
    GetStrLen(pobjRTUserRelaEN.lastVisitedDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(lastVisitedDate)]的长度不能超过20(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.lastVisitedDate)(clsRTUserRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.updDate) == false &&
    GetStrLen(pobjRTUserRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.updDate)(clsRTUserRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.updUser) == false &&
    GetStrLen(pobjRTUserRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.updUser)(clsRTUserRelaBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjRTUserRelaEN.memo) == false && GetStrLen(pobjRTUserRelaEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.memo)(clsRTUserRelaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjRTUserRelaEN.mId &&
    undefined !== pobjRTUserRelaEN.mId &&
    tzDataType.isNumber(pobjRTUserRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjRTUserRelaEN.mId)], 非法,应该为数值型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.topicId) == false &&
    undefined !== pobjRTUserRelaEN.topicId &&
    tzDataType.isString(pobjRTUserRelaEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题Id(topicId)]的值:[$(pobjRTUserRelaEN.topicId)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.userId) == false &&
    undefined !== pobjRTUserRelaEN.userId &&
    tzDataType.isString(pobjRTUserRelaEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户ID(userId)]的值:[$(pobjRTUserRelaEN.userId)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.topicUserRoleId) == false &&
    undefined !== pobjRTUserRelaEN.topicUserRoleId &&
    tzDataType.isString(pobjRTUserRelaEN.topicUserRoleId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主键Id(topicUserRoleId)]的值:[$(pobjRTUserRelaEN.topicUserRoleId)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.colorId) == false &&
    undefined !== pobjRTUserRelaEN.colorId &&
    tzDataType.isString(pobjRTUserRelaEN.colorId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[颜色Id(colorId)]的值:[$(pobjRTUserRelaEN.colorId)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjRTUserRelaEN.orderNum &&
    undefined !== pobjRTUserRelaEN.orderNum &&
    tzDataType.isNumber(pobjRTUserRelaEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjRTUserRelaEN.orderNum)], 非法,应该为数值型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.userBgColor) == false &&
    undefined !== pobjRTUserRelaEN.userBgColor &&
    tzDataType.isString(pobjRTUserRelaEN.userBgColor) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户段落背景(userBgColor)]的值:[$(pobjRTUserRelaEN.userBgColor)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.idCurrEduCls) == false &&
    undefined !== pobjRTUserRelaEN.idCurrEduCls &&
    tzDataType.isString(pobjRTUserRelaEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjRTUserRelaEN.idCurrEduCls)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjRTUserRelaEN.appraiseCount &&
    undefined !== pobjRTUserRelaEN.appraiseCount &&
    tzDataType.isNumber(pobjRTUserRelaEN.appraiseCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评论数(appraiseCount)]的值:[$(pobjRTUserRelaEN.appraiseCount)], 非法,应该为数值型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjRTUserRelaEN.okCount &&
    undefined !== pobjRTUserRelaEN.okCount &&
    tzDataType.isNumber(pobjRTUserRelaEN.okCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[点赞统计(okCount)]的值:[$(pobjRTUserRelaEN.okCount)], 非法,应该为数值型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjRTUserRelaEN.score &&
    undefined !== pobjRTUserRelaEN.score &&
    tzDataType.isNumber(pobjRTUserRelaEN.score) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评分(score)]的值:[$(pobjRTUserRelaEN.score)], 非法,应该为数值型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjRTUserRelaEN.stuScore &&
    undefined !== pobjRTUserRelaEN.stuScore &&
    tzDataType.isNumber(pobjRTUserRelaEN.stuScore) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学生平均分(stuScore)]的值:[$(pobjRTUserRelaEN.stuScore)], 非法,应该为数值型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjRTUserRelaEN.teaScore &&
    undefined !== pobjRTUserRelaEN.teaScore &&
    tzDataType.isNumber(pobjRTUserRelaEN.teaScore) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教师评分(teaScore)]的值:[$(pobjRTUserRelaEN.teaScore)], 非法,应该为数值型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjRTUserRelaEN.isSubmit &&
    undefined !== pobjRTUserRelaEN.isSubmit &&
    tzDataType.isBoolean(pobjRTUserRelaEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjRTUserRelaEN.isSubmit)], 非法,应该为布尔型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.lastVisitedDate) == false &&
    undefined !== pobjRTUserRelaEN.lastVisitedDate &&
    tzDataType.isString(pobjRTUserRelaEN.lastVisitedDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(lastVisitedDate)]的值:[$(pobjRTUserRelaEN.lastVisitedDate)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.updDate) == false &&
    undefined !== pobjRTUserRelaEN.updDate &&
    tzDataType.isString(pobjRTUserRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjRTUserRelaEN.updDate)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.updUser) == false &&
    undefined !== pobjRTUserRelaEN.updUser &&
    tzDataType.isString(pobjRTUserRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjRTUserRelaEN.updUser)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.memo) == false &&
    undefined !== pobjRTUserRelaEN.memo &&
    tzDataType.isString(pobjRTUserRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjRTUserRelaEN.memo)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.topicUserRoleId) == false &&
    pobjRTUserRelaEN.topicUserRoleId != '[nuull]' &&
    GetStrLen(pobjRTUserRelaEN.topicUserRoleId) != 4
  ) {
    throw '(errid:Watl000415)字段[主键Id]作为外键字段,长度应该为4(In 主题用户关系)!(clsRTUserRelaBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function RTUserRela_CheckProperty4Update(pobjRTUserRelaEN: clsRTUserRelaEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjRTUserRelaEN.topicId) == false && GetStrLen(pobjRTUserRelaEN.topicId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.topicId)(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjRTUserRelaEN.userId) == false && GetStrLen(pobjRTUserRelaEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.userId)(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.topicUserRoleId) == false &&
    GetStrLen(pobjRTUserRelaEN.topicUserRoleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主键Id(topicUserRoleId)]的长度不能超过4(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.topicUserRoleId)(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjRTUserRelaEN.colorId) == false && GetStrLen(pobjRTUserRelaEN.colorId) > 2) {
    throw new Error(
      '(errid:Watl000416)字段[颜色Id(colorId)]的长度不能超过2(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.colorId)(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.userBgColor) == false &&
    GetStrLen(pobjRTUserRelaEN.userBgColor) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户段落背景(userBgColor)]的长度不能超过200(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.userBgColor)(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.idCurrEduCls) == false &&
    GetStrLen(pobjRTUserRelaEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.idCurrEduCls)(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.lastVisitedDate) == false &&
    GetStrLen(pobjRTUserRelaEN.lastVisitedDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(lastVisitedDate)]的长度不能超过20(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.lastVisitedDate)(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.updDate) == false &&
    GetStrLen(pobjRTUserRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.updDate)(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.updUser) == false &&
    GetStrLen(pobjRTUserRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.updUser)(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjRTUserRelaEN.memo) == false && GetStrLen(pobjRTUserRelaEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 主题用户关系(RTUserRela))!值:$(pobjRTUserRelaEN.memo)(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjRTUserRelaEN.mId &&
    undefined !== pobjRTUserRelaEN.mId &&
    tzDataType.isNumber(pobjRTUserRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjRTUserRelaEN.mId)], 非法,应该为数值型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.topicId) == false &&
    undefined !== pobjRTUserRelaEN.topicId &&
    tzDataType.isString(pobjRTUserRelaEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题Id(topicId)]的值:[$(pobjRTUserRelaEN.topicId)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.userId) == false &&
    undefined !== pobjRTUserRelaEN.userId &&
    tzDataType.isString(pobjRTUserRelaEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户ID(userId)]的值:[$(pobjRTUserRelaEN.userId)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.topicUserRoleId) == false &&
    undefined !== pobjRTUserRelaEN.topicUserRoleId &&
    tzDataType.isString(pobjRTUserRelaEN.topicUserRoleId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主键Id(topicUserRoleId)]的值:[$(pobjRTUserRelaEN.topicUserRoleId)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.colorId) == false &&
    undefined !== pobjRTUserRelaEN.colorId &&
    tzDataType.isString(pobjRTUserRelaEN.colorId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[颜色Id(colorId)]的值:[$(pobjRTUserRelaEN.colorId)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjRTUserRelaEN.orderNum &&
    undefined !== pobjRTUserRelaEN.orderNum &&
    tzDataType.isNumber(pobjRTUserRelaEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjRTUserRelaEN.orderNum)], 非法,应该为数值型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.userBgColor) == false &&
    undefined !== pobjRTUserRelaEN.userBgColor &&
    tzDataType.isString(pobjRTUserRelaEN.userBgColor) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户段落背景(userBgColor)]的值:[$(pobjRTUserRelaEN.userBgColor)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.idCurrEduCls) == false &&
    undefined !== pobjRTUserRelaEN.idCurrEduCls &&
    tzDataType.isString(pobjRTUserRelaEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjRTUserRelaEN.idCurrEduCls)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjRTUserRelaEN.appraiseCount &&
    undefined !== pobjRTUserRelaEN.appraiseCount &&
    tzDataType.isNumber(pobjRTUserRelaEN.appraiseCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评论数(appraiseCount)]的值:[$(pobjRTUserRelaEN.appraiseCount)], 非法,应该为数值型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjRTUserRelaEN.okCount &&
    undefined !== pobjRTUserRelaEN.okCount &&
    tzDataType.isNumber(pobjRTUserRelaEN.okCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[点赞统计(okCount)]的值:[$(pobjRTUserRelaEN.okCount)], 非法,应该为数值型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjRTUserRelaEN.score &&
    undefined !== pobjRTUserRelaEN.score &&
    tzDataType.isNumber(pobjRTUserRelaEN.score) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评分(score)]的值:[$(pobjRTUserRelaEN.score)], 非法,应该为数值型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjRTUserRelaEN.stuScore &&
    undefined !== pobjRTUserRelaEN.stuScore &&
    tzDataType.isNumber(pobjRTUserRelaEN.stuScore) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学生平均分(stuScore)]的值:[$(pobjRTUserRelaEN.stuScore)], 非法,应该为数值型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjRTUserRelaEN.teaScore &&
    undefined !== pobjRTUserRelaEN.teaScore &&
    tzDataType.isNumber(pobjRTUserRelaEN.teaScore) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教师评分(teaScore)]的值:[$(pobjRTUserRelaEN.teaScore)], 非法,应该为数值型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjRTUserRelaEN.isSubmit &&
    undefined !== pobjRTUserRelaEN.isSubmit &&
    tzDataType.isBoolean(pobjRTUserRelaEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjRTUserRelaEN.isSubmit)], 非法,应该为布尔型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.lastVisitedDate) == false &&
    undefined !== pobjRTUserRelaEN.lastVisitedDate &&
    tzDataType.isString(pobjRTUserRelaEN.lastVisitedDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(lastVisitedDate)]的值:[$(pobjRTUserRelaEN.lastVisitedDate)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.updDate) == false &&
    undefined !== pobjRTUserRelaEN.updDate &&
    tzDataType.isString(pobjRTUserRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjRTUserRelaEN.updDate)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.updUser) == false &&
    undefined !== pobjRTUserRelaEN.updUser &&
    tzDataType.isString(pobjRTUserRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjRTUserRelaEN.updUser)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.memo) == false &&
    undefined !== pobjRTUserRelaEN.memo &&
    tzDataType.isString(pobjRTUserRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjRTUserRelaEN.memo)], 非法,应该为字符型(In 主题用户关系(RTUserRela))!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjRTUserRelaEN.mId ||
    (pobjRTUserRelaEN.mId != null && pobjRTUserRelaEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 主题用户关系)!(clsRTUserRelaBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjRTUserRelaEN.topicUserRoleId) == false &&
    pobjRTUserRelaEN.topicUserRoleId != '[nuull]' &&
    GetStrLen(pobjRTUserRelaEN.topicUserRoleId) != 4
  ) {
    throw '(errid:Watl000418)字段[主键Id]作为外键字段,长度应该为4(In 主题用户关系)!(clsRTUserRelaBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function RTUserRela_GetJSONStrByObj(pobjRTUserRelaEN: clsRTUserRelaEN): string {
  pobjRTUserRelaEN.sfUpdFldSetStr = pobjRTUserRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjRTUserRelaEN);
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
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function RTUserRela_GetObjLstByJSONStr(strJSON: string): Array<clsRTUserRelaEN> {
  let arrRTUserRelaObjLst = new Array<clsRTUserRelaEN>();
  if (strJSON === '') {
    return arrRTUserRelaObjLst;
  }
  try {
    arrRTUserRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrRTUserRelaObjLst;
  }
  return arrRTUserRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRTUserRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function RTUserRela_GetObjLstByJSONObjLst(
  arrRTUserRelaObjLstS: Array<clsRTUserRelaEN>,
): Array<clsRTUserRelaEN> {
  const arrRTUserRelaObjLst = new Array<clsRTUserRelaEN>();
  for (const objInFor of arrRTUserRelaObjLstS) {
    const obj1 = RTUserRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrRTUserRelaObjLst.push(obj1);
  }
  return arrRTUserRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function RTUserRela_GetObjByJSONStr(strJSON: string): clsRTUserRelaEN {
  let pobjRTUserRelaEN = new clsRTUserRelaEN();
  if (strJSON === '') {
    return pobjRTUserRelaEN;
  }
  try {
    pobjRTUserRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjRTUserRelaEN;
  }
  return pobjRTUserRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function RTUserRela_GetCombineCondition(objRTUserRelaCond: clsRTUserRelaEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsRTUserRelaEN.con_mId,
      objRTUserRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTUserRelaEN.con_TopicId,
      objRTUserRelaCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTUserRelaEN.con_UserId,
      objRTUserRelaCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_TopicUserRoleId,
    ) == true
  ) {
    const strComparisonOpTopicUserRoleId: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_TopicUserRoleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTUserRelaEN.con_TopicUserRoleId,
      objRTUserRelaCond.topicUserRoleId,
      strComparisonOpTopicUserRoleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_ColorId,
    ) == true
  ) {
    const strComparisonOpColorId: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_ColorId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTUserRelaEN.con_ColorId,
      objRTUserRelaCond.colorId,
      strComparisonOpColorId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsRTUserRelaEN.con_OrderNum,
      objRTUserRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_UserBgColor,
    ) == true
  ) {
    const strComparisonOpUserBgColor: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_UserBgColor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTUserRelaEN.con_UserBgColor,
      objRTUserRelaCond.userBgColor,
      strComparisonOpUserBgColor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTUserRelaEN.con_IdCurrEduCls,
      objRTUserRelaCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_AppraiseCount,
    ) == true
  ) {
    const strComparisonOpAppraiseCount: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_AppraiseCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsRTUserRelaEN.con_AppraiseCount,
      objRTUserRelaCond.appraiseCount,
      strComparisonOpAppraiseCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_OkCount,
    ) == true
  ) {
    const strComparisonOpOkCount: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_OkCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsRTUserRelaEN.con_OkCount,
      objRTUserRelaCond.okCount,
      strComparisonOpOkCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsRTUserRelaEN.con_Score,
      objRTUserRelaCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsRTUserRelaEN.con_StuScore,
      objRTUserRelaCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsRTUserRelaEN.con_TeaScore,
      objRTUserRelaCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_IsSubmit,
    ) == true
  ) {
    if (objRTUserRelaCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsRTUserRelaEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsRTUserRelaEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_LastVisitedDate,
    ) == true
  ) {
    const strComparisonOpLastVisitedDate: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_LastVisitedDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTUserRelaEN.con_LastVisitedDate,
      objRTUserRelaCond.lastVisitedDate,
      strComparisonOpLastVisitedDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTUserRelaEN.con_UpdDate,
      objRTUserRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTUserRelaEN.con_UpdUser,
      objRTUserRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRTUserRelaCond.dicFldComparisonOp,
      clsRTUserRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objRTUserRelaCond.dicFldComparisonOp[clsRTUserRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRTUserRelaEN.con_Memo,
      objRTUserRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--RTUserRela(主题用户关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function RTUserRela_GetUniCondStr(objRTUserRelaEN: clsRTUserRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TopicId = '{0}'", objRTUserRelaEN.topicId);
  strWhereCond += Format(" and UserId = '{0}'", objRTUserRelaEN.userId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--RTUserRela(主题用户关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function RTUserRela_GetUniCondStr4Update(objRTUserRelaEN: clsRTUserRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objRTUserRelaEN.mId);
  strWhereCond += Format(" and TopicId = '{0}'", objRTUserRelaEN.topicId);
  strWhereCond += Format(" and UserId = '{0}'", objRTUserRelaEN.userId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRTUserRelaENS:源对象
 * @param objRTUserRelaENT:目标对象
 */
export function RTUserRela_CopyObjTo(
  objRTUserRelaENS: clsRTUserRelaEN,
  objRTUserRelaENT: clsRTUserRelaEN,
): void {
  objRTUserRelaENT.mId = objRTUserRelaENS.mId; //mId
  objRTUserRelaENT.topicId = objRTUserRelaENS.topicId; //主题Id
  objRTUserRelaENT.userId = objRTUserRelaENS.userId; //用户ID
  objRTUserRelaENT.topicUserRoleId = objRTUserRelaENS.topicUserRoleId; //主键Id
  objRTUserRelaENT.colorId = objRTUserRelaENS.colorId; //颜色Id
  objRTUserRelaENT.orderNum = objRTUserRelaENS.orderNum; //序号
  objRTUserRelaENT.userBgColor = objRTUserRelaENS.userBgColor; //用户段落背景
  objRTUserRelaENT.idCurrEduCls = objRTUserRelaENS.idCurrEduCls; //教学班流水号
  objRTUserRelaENT.appraiseCount = objRTUserRelaENS.appraiseCount; //评论数
  objRTUserRelaENT.okCount = objRTUserRelaENS.okCount; //点赞统计
  objRTUserRelaENT.score = objRTUserRelaENS.score; //评分
  objRTUserRelaENT.stuScore = objRTUserRelaENS.stuScore; //学生平均分
  objRTUserRelaENT.teaScore = objRTUserRelaENS.teaScore; //教师评分
  objRTUserRelaENT.isSubmit = objRTUserRelaENS.isSubmit; //是否提交
  objRTUserRelaENT.lastVisitedDate = objRTUserRelaENS.lastVisitedDate; //修改日期
  objRTUserRelaENT.updDate = objRTUserRelaENS.updDate; //修改日期
  objRTUserRelaENT.updUser = objRTUserRelaENS.updUser; //修改人
  objRTUserRelaENT.memo = objRTUserRelaENS.memo; //备注
  objRTUserRelaENT.sfUpdFldSetStr = objRTUserRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRTUserRelaENS:源对象
 * @param objRTUserRelaENT:目标对象
 */
export function RTUserRela_GetObjFromJsonObj(objRTUserRelaENS: clsRTUserRelaEN): clsRTUserRelaEN {
  const objRTUserRelaENT: clsRTUserRelaEN = new clsRTUserRelaEN();
  ObjectAssign(objRTUserRelaENT, objRTUserRelaENS);
  return objRTUserRelaENT;
}
