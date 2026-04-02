/**
 * 类名:clsCurrEduClsTeacherWApi
 * 表名:CurrEduClsTeacher(01120124)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/10 11:54:58
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 当前教学班教师(CurrEduClsTeacher)
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
import { clsCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { vCurrEduClsTeacher_ReFreshThisCache } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const currEduClsTeacher_Controller = 'CurrEduClsTeacherApi';
export const currEduClsTeacher_ConstructorName = 'currEduClsTeacher';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngIdEduClsTeacher:关键字
 * @returns 对象
 **/
export async function CurrEduClsTeacher_GetObjByIdEduClsTeacherAsync(
  lngIdEduClsTeacher: number,
): Promise<clsCurrEduClsTeacherEN | null> {
  const strThisFuncName = 'GetObjByIdEduClsTeacherAsync';

  if (lngIdEduClsTeacher == 0) {
    const strMsg = Format(
      '参数:[lngIdEduClsTeacher]不能为空!(In clsCurrEduClsTeacherWApi.GetObjByIdEduClsTeacherAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdEduClsTeacher';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngIdEduClsTeacher,
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
      const objCurrEduClsTeacher = CurrEduClsTeacher_GetObjFromJsonObj(returnObj);
      return objCurrEduClsTeacher;
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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param lngIdEduClsTeacher:所给的关键字
 * @returns 对象
 */
export async function CurrEduClsTeacher_GetObjByIdEduClsTeacherCache(
  lngIdEduClsTeacher: number,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByIdEduClsTeacherCache';

  if (lngIdEduClsTeacher == 0) {
    const strMsg = Format(
      '参数:[lngIdEduClsTeacher]不能为空!(In clsCurrEduClsTeacherWApi.GetObjByIdEduClsTeacherCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCurrEduClsTeacherObjLstCache = await CurrEduClsTeacher_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrCurrEduClsTeacherSel = arrCurrEduClsTeacherObjLstCache.filter(
      (x) => x.idEduClsTeacher == lngIdEduClsTeacher,
    );
    let objCurrEduClsTeacher: clsCurrEduClsTeacherEN;
    if (arrCurrEduClsTeacherSel.length > 0) {
      objCurrEduClsTeacher = arrCurrEduClsTeacherSel[0];
      return objCurrEduClsTeacher;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCurrEduClsTeacherConst = await CurrEduClsTeacher_GetObjByIdEduClsTeacherAsync(
          lngIdEduClsTeacher,
        );
        if (objCurrEduClsTeacherConst != null) {
          CurrEduClsTeacher_ReFreshThisCache(strIdCurrEduCls);
          return objCurrEduClsTeacherConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngIdEduClsTeacher,
      currEduClsTeacher_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngIdEduClsTeacher:所给的关键字
 * @returns 对象
 */
export async function CurrEduClsTeacher_GetObjByIdEduClsTeacherlocalStorage(
  lngIdEduClsTeacher: number,
) {
  const strThisFuncName = 'GetObjByIdEduClsTeacherlocalStorage';

  if (lngIdEduClsTeacher == 0) {
    const strMsg = Format(
      '参数:[lngIdEduClsTeacher]不能为空!(In clsCurrEduClsTeacherWApi.GetObjByIdEduClsTeacherlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCurrEduClsTeacherEN._CurrTabName, lngIdEduClsTeacher);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCurrEduClsTeacherCache: clsCurrEduClsTeacherEN = JSON.parse(strTempObj);
    return objCurrEduClsTeacherCache;
  }
  try {
    const objCurrEduClsTeacher = await CurrEduClsTeacher_GetObjByIdEduClsTeacherAsync(
      lngIdEduClsTeacher,
    );
    if (objCurrEduClsTeacher != null) {
      localStorage.setItem(strKey, JSON.stringify(objCurrEduClsTeacher));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCurrEduClsTeacher;
    }
    return objCurrEduClsTeacher;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngIdEduClsTeacher,
      currEduClsTeacher_ConstructorName,
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
 * @param objCurrEduClsTeacher:所给的对象
 * @returns 对象
 */
export async function CurrEduClsTeacher_UpdateObjInLstCache(
  objCurrEduClsTeacher: clsCurrEduClsTeacherEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCurrEduClsTeacherObjLstCache = await CurrEduClsTeacher_GetObjLstCache(strIdCurrEduCls);
    const obj = arrCurrEduClsTeacherObjLstCache.find(
      (x) =>
        x.idCurrEduCls == objCurrEduClsTeacher.idCurrEduCls &&
        x.idTeacher == objCurrEduClsTeacher.idTeacher,
    );
    if (obj != null) {
      objCurrEduClsTeacher.idEduClsTeacher = obj.idEduClsTeacher;
      ObjectAssign(obj, objCurrEduClsTeacher);
    } else {
      arrCurrEduClsTeacherObjLstCache.push(objCurrEduClsTeacher);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      currEduClsTeacher_ConstructorName,
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function CurrEduClsTeacher_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsCurrEduClsTeacherWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsCurrEduClsTeacherWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsCurrEduClsTeacherEN.con_IdEduClsTeacher) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCurrEduClsTeacherEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCurrEduClsTeacherEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngIdEduClsTeacher = Number(strInValue);
  if (lngIdEduClsTeacher == 0) {
    return '';
  }
  const objCurrEduClsTeacher = await CurrEduClsTeacher_GetObjByIdEduClsTeacherCache(
    lngIdEduClsTeacher,
    strIdCurrEduClsClassfy,
  );
  if (objCurrEduClsTeacher == null) return '';
  if (objCurrEduClsTeacher.GetFldValue(strOutFldName) == null) return '';
  return objCurrEduClsTeacher.GetFldValue(strOutFldName).toString();
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
export function CurrEduClsTeacher_SortFunDefa(
  a: clsCurrEduClsTeacherEN,
  b: clsCurrEduClsTeacherEN,
): number {
  return a.idEduClsTeacher - b.idEduClsTeacher;
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
export function CurrEduClsTeacher_SortFunDefa2Fld(
  a: clsCurrEduClsTeacherEN,
  b: clsCurrEduClsTeacherEN,
): number {
  if (a.idCurrEduCls == b.idCurrEduCls) return a.idTeacher.localeCompare(b.idTeacher);
  else return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
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
export function CurrEduClsTeacher_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCurrEduClsTeacherEN.con_IdEduClsTeacher:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          return a.idEduClsTeacher - b.idEduClsTeacher;
        };
      case clsCurrEduClsTeacherEN.con_IdCurrEduCls:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsCurrEduClsTeacherEN.con_IdTeacher:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (a.idTeacher == null) return -1;
          if (b.idTeacher == null) return 1;
          return a.idTeacher.localeCompare(b.idTeacher);
        };
      case clsCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (a.idPk2EduClsTeacherType == null) return -1;
          if (b.idPk2EduClsTeacherType == null) return 1;
          return a.idPk2EduClsTeacherType.localeCompare(b.idPk2EduClsTeacherType);
        };
      case clsCurrEduClsTeacherEN.con_SchoolTerm:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (a.schoolTerm == null) return -1;
          if (b.schoolTerm == null) return 1;
          return a.schoolTerm.localeCompare(b.schoolTerm);
        };
      case clsCurrEduClsTeacherEN.con_SchoolYear:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (a.schoolYear == null) return -1;
          if (b.schoolYear == null) return 1;
          return a.schoolYear.localeCompare(b.schoolYear);
        };
      case clsCurrEduClsTeacherEN.con_OpenBeginDate:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (a.openBeginDate == null) return -1;
          if (b.openBeginDate == null) return 1;
          return a.openBeginDate.localeCompare(b.openBeginDate);
        };
      case clsCurrEduClsTeacherEN.con_OpenEndDate:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (a.openEndDate == null) return -1;
          if (b.openEndDate == null) return 1;
          return a.openEndDate.localeCompare(b.openEndDate);
        };
      case clsCurrEduClsTeacherEN.con_OrderNum:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsCurrEduClsTeacherEN.con_UpdDate:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCurrEduClsTeacherEN.con_LastVisitedDate:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          return a.lastVisitedDate.localeCompare(b.lastVisitedDate);
        };
      case clsCurrEduClsTeacherEN.con_UpdUser:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCurrEduClsTeacherEN.con_Memo:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CurrEduClsTeacher]中不存在!(in ${currEduClsTeacher_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCurrEduClsTeacherEN.con_IdEduClsTeacher:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          return b.idEduClsTeacher - a.idEduClsTeacher;
        };
      case clsCurrEduClsTeacherEN.con_IdCurrEduCls:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsCurrEduClsTeacherEN.con_IdTeacher:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (b.idTeacher == null) return -1;
          if (a.idTeacher == null) return 1;
          return b.idTeacher.localeCompare(a.idTeacher);
        };
      case clsCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (b.idPk2EduClsTeacherType == null) return -1;
          if (a.idPk2EduClsTeacherType == null) return 1;
          return b.idPk2EduClsTeacherType.localeCompare(a.idPk2EduClsTeacherType);
        };
      case clsCurrEduClsTeacherEN.con_SchoolTerm:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (b.schoolTerm == null) return -1;
          if (a.schoolTerm == null) return 1;
          return b.schoolTerm.localeCompare(a.schoolTerm);
        };
      case clsCurrEduClsTeacherEN.con_SchoolYear:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (b.schoolYear == null) return -1;
          if (a.schoolYear == null) return 1;
          return b.schoolYear.localeCompare(a.schoolYear);
        };
      case clsCurrEduClsTeacherEN.con_OpenBeginDate:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (b.openBeginDate == null) return -1;
          if (a.openBeginDate == null) return 1;
          return b.openBeginDate.localeCompare(a.openBeginDate);
        };
      case clsCurrEduClsTeacherEN.con_OpenEndDate:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (b.openEndDate == null) return -1;
          if (a.openEndDate == null) return 1;
          return b.openEndDate.localeCompare(a.openEndDate);
        };
      case clsCurrEduClsTeacherEN.con_OrderNum:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsCurrEduClsTeacherEN.con_UpdDate:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCurrEduClsTeacherEN.con_LastVisitedDate:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          return b.lastVisitedDate.localeCompare(a.lastVisitedDate);
        };
      case clsCurrEduClsTeacherEN.con_UpdUser:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCurrEduClsTeacherEN.con_Memo:
        return (a: clsCurrEduClsTeacherEN, b: clsCurrEduClsTeacherEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CurrEduClsTeacher]中不存在!(in ${currEduClsTeacher_ConstructorName}.${strThisFuncName})`;
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
export async function CurrEduClsTeacher_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCurrEduClsTeacherEN.con_IdEduClsTeacher:
      return (obj: clsCurrEduClsTeacherEN) => {
        return obj.idEduClsTeacher === value;
      };
    case clsCurrEduClsTeacherEN.con_IdCurrEduCls:
      return (obj: clsCurrEduClsTeacherEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsCurrEduClsTeacherEN.con_IdTeacher:
      return (obj: clsCurrEduClsTeacherEN) => {
        return obj.idTeacher === value;
      };
    case clsCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType:
      return (obj: clsCurrEduClsTeacherEN) => {
        return obj.idPk2EduClsTeacherType === value;
      };
    case clsCurrEduClsTeacherEN.con_SchoolTerm:
      return (obj: clsCurrEduClsTeacherEN) => {
        return obj.schoolTerm === value;
      };
    case clsCurrEduClsTeacherEN.con_SchoolYear:
      return (obj: clsCurrEduClsTeacherEN) => {
        return obj.schoolYear === value;
      };
    case clsCurrEduClsTeacherEN.con_OpenBeginDate:
      return (obj: clsCurrEduClsTeacherEN) => {
        return obj.openBeginDate === value;
      };
    case clsCurrEduClsTeacherEN.con_OpenEndDate:
      return (obj: clsCurrEduClsTeacherEN) => {
        return obj.openEndDate === value;
      };
    case clsCurrEduClsTeacherEN.con_OrderNum:
      return (obj: clsCurrEduClsTeacherEN) => {
        return obj.orderNum === value;
      };
    case clsCurrEduClsTeacherEN.con_UpdDate:
      return (obj: clsCurrEduClsTeacherEN) => {
        return obj.updDate === value;
      };
    case clsCurrEduClsTeacherEN.con_LastVisitedDate:
      return (obj: clsCurrEduClsTeacherEN) => {
        return obj.lastVisitedDate === value;
      };
    case clsCurrEduClsTeacherEN.con_UpdUser:
      return (obj: clsCurrEduClsTeacherEN) => {
        return obj.updUser === value;
      };
    case clsCurrEduClsTeacherEN.con_Memo:
      return (obj: clsCurrEduClsTeacherEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CurrEduClsTeacher]中不存在!(in ${currEduClsTeacher_ConstructorName}.${strThisFuncName})`;
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function CurrEduClsTeacher_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsCurrEduClsTeacherWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsCurrEduClsTeacherWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsCurrEduClsTeacherEN.con_IdEduClsTeacher) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrCurrEduClsTeacher = await CurrEduClsTeacher_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrCurrEduClsTeacher == null) return [];
  let arrCurrEduClsTeacherSel = arrCurrEduClsTeacher;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrCurrEduClsTeacherSel.length == 0) return [];
  return arrCurrEduClsTeacherSel.map((x) => x.idEduClsTeacher);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CurrEduClsTeacher_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
export async function CurrEduClsTeacher_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
export async function CurrEduClsTeacher_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCurrEduClsTeacherEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
      const objCurrEduClsTeacher = CurrEduClsTeacher_GetObjFromJsonObj(returnObj);
      return objCurrEduClsTeacher;
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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
export async function CurrEduClsTeacher_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCurrEduClsTeacherEN.WhereFormat) == false) {
    strWhereCond = Format(clsCurrEduClsTeacherEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsCurrEduClsTeacherEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsCurrEduClsTeacherEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCurrEduClsTeacherEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCurrEduClsTeacherExObjLstCache: Array<clsCurrEduClsTeacherEN> =
      CacheHelper.Get(strKey);
    const arrCurrEduClsTeacherObjLstT = CurrEduClsTeacher_GetObjLstByJSONObjLst(
      arrCurrEduClsTeacherExObjLstCache,
    );
    return arrCurrEduClsTeacherObjLstT;
  }
  try {
    const arrCurrEduClsTeacherExObjLst = await CurrEduClsTeacher_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCurrEduClsTeacherExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCurrEduClsTeacherExObjLst.length,
    );
    console.log(strInfo);
    return arrCurrEduClsTeacherExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      currEduClsTeacher_ConstructorName,
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
export async function CurrEduClsTeacher_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCurrEduClsTeacherEN.WhereFormat) == false) {
    strWhereCond = Format(clsCurrEduClsTeacherEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsCurrEduClsTeacherEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsCurrEduClsTeacherEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsCurrEduClsTeacherEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCurrEduClsTeacherEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCurrEduClsTeacherExObjLstCache: Array<clsCurrEduClsTeacherEN> =
      JSON.parse(strTempObjLst);
    const arrCurrEduClsTeacherObjLstT = CurrEduClsTeacher_GetObjLstByJSONObjLst(
      arrCurrEduClsTeacherExObjLstCache,
    );
    return arrCurrEduClsTeacherObjLstT;
  }
  try {
    const arrCurrEduClsTeacherExObjLst = await CurrEduClsTeacher_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCurrEduClsTeacherExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCurrEduClsTeacherExObjLst.length,
    );
    console.log(strInfo);
    return arrCurrEduClsTeacherExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      currEduClsTeacher_ConstructorName,
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
export async function CurrEduClsTeacher_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsCurrEduClsTeacherEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCurrEduClsTeacherObjLstCache: Array<clsCurrEduClsTeacherEN> =
      JSON.parse(strTempObjLst);
    return arrCurrEduClsTeacherObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CurrEduClsTeacher_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCurrEduClsTeacherEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
          currEduClsTeacher_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CurrEduClsTeacher_GetObjLstByJSONObjLst(returnObjLst);
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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
export async function CurrEduClsTeacher_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCurrEduClsTeacherEN.WhereFormat) == false) {
    strWhereCond = Format(clsCurrEduClsTeacherEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsCurrEduClsTeacherEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsCurrEduClsTeacherEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsCurrEduClsTeacherEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCurrEduClsTeacherEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCurrEduClsTeacherExObjLstCache: Array<clsCurrEduClsTeacherEN> =
      JSON.parse(strTempObjLst);
    const arrCurrEduClsTeacherObjLstT = CurrEduClsTeacher_GetObjLstByJSONObjLst(
      arrCurrEduClsTeacherExObjLstCache,
    );
    return arrCurrEduClsTeacherObjLstT;
  }
  try {
    const arrCurrEduClsTeacherExObjLst = await CurrEduClsTeacher_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCurrEduClsTeacherExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCurrEduClsTeacherExObjLst.length,
    );
    console.log(strInfo);
    return arrCurrEduClsTeacherExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      currEduClsTeacher_ConstructorName,
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
export async function CurrEduClsTeacher_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsCurrEduClsTeacherEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCurrEduClsTeacherObjLstCache: Array<clsCurrEduClsTeacherEN> =
      JSON.parse(strTempObjLst);
    return arrCurrEduClsTeacherObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CurrEduClsTeacher_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsCurrEduClsTeacherEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsCurrEduClsTeacherWApi.CurrEduClsTeacher_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsCurrEduClsTeacherWApi.CurrEduClsTeacher_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrCurrEduClsTeacherObjLstCache;
  switch (clsCurrEduClsTeacherEN.CacheModeId) {
    case '04': //sessionStorage
      arrCurrEduClsTeacherObjLstCache = await CurrEduClsTeacher_GetObjLstsessionStorage(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrCurrEduClsTeacherObjLstCache = await CurrEduClsTeacher_GetObjLstlocalStorage(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrCurrEduClsTeacherObjLstCache = await CurrEduClsTeacher_GetObjLstClientCache(
        strIdCurrEduCls,
      );
      break;
    default:
      arrCurrEduClsTeacherObjLstCache = await CurrEduClsTeacher_GetObjLstClientCache(
        strIdCurrEduCls,
      );
      break;
  }
  return arrCurrEduClsTeacherObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CurrEduClsTeacher_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCurrEduClsTeacherObjLstCache;
  switch (clsCurrEduClsTeacherEN.CacheModeId) {
    case '04': //sessionStorage
      arrCurrEduClsTeacherObjLstCache = await CurrEduClsTeacher_GetObjLstsessionStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrCurrEduClsTeacherObjLstCache = await CurrEduClsTeacher_GetObjLstlocalStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrCurrEduClsTeacherObjLstCache = null;
      break;
    default:
      arrCurrEduClsTeacherObjLstCache = null;
      break;
  }
  return arrCurrEduClsTeacherObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngIdEduClsTeacherCond:条件对象
 * @returns 对象列表子集
 */
export async function CurrEduClsTeacher_GetSubObjLstCache(
  objCurrEduClsTeacherCond: clsCurrEduClsTeacherEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCurrEduClsTeacherObjLstCache = await CurrEduClsTeacher_GetObjLstCache(strIdCurrEduCls);
  let arrCurrEduClsTeacherSel = arrCurrEduClsTeacherObjLstCache;
  if (
    objCurrEduClsTeacherCond.sfFldComparisonOp == null ||
    objCurrEduClsTeacherCond.sfFldComparisonOp == ''
  )
    return arrCurrEduClsTeacherSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCurrEduClsTeacherCond.sfFldComparisonOp,
  );
  //console.log("clsCurrEduClsTeacherWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCurrEduClsTeacherCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCurrEduClsTeacherCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCurrEduClsTeacherSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCurrEduClsTeacherCond),
      currEduClsTeacher_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCurrEduClsTeacherEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdEduClsTeacher:关键字列表
 * @returns 对象列表
 **/
export async function CurrEduClsTeacher_GetObjLstByIdEduClsTeacherLstAsync(
  arrIdEduClsTeacher: Array<string>,
): Promise<Array<clsCurrEduClsTeacherEN>> {
  const strThisFuncName = 'GetObjLstByIdEduClsTeacherLstAsync';
  const strAction = 'GetObjLstByIdEduClsTeacherLst';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdEduClsTeacher, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          currEduClsTeacher_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CurrEduClsTeacher_GetObjLstByJSONObjLst(returnObjLst);
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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param arrlngIdEduClsTeacherLst:关键字列表
 * @returns 对象列表
 */
export async function CurrEduClsTeacher_GetObjLstByIdEduClsTeacherLstCache(
  arrIdEduClsTeacherLst: Array<number>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByIdEduClsTeacherLstCache';
  try {
    const arrCurrEduClsTeacherObjLstCache = await CurrEduClsTeacher_GetObjLstCache(strIdCurrEduCls);
    const arrCurrEduClsTeacherSel = arrCurrEduClsTeacherObjLstCache.filter(
      (x) => arrIdEduClsTeacherLst.indexOf(x.idEduClsTeacher) > -1,
    );
    return arrCurrEduClsTeacherSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdEduClsTeacherLst.join(','),
      currEduClsTeacher_ConstructorName,
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
export async function CurrEduClsTeacher_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCurrEduClsTeacherEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
          currEduClsTeacher_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CurrEduClsTeacher_GetObjLstByJSONObjLst(returnObjLst);
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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
export async function CurrEduClsTeacher_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCurrEduClsTeacherEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
          currEduClsTeacher_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CurrEduClsTeacher_GetObjLstByJSONObjLst(returnObjLst);
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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
export async function CurrEduClsTeacher_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCurrEduClsTeacherEN>();
  const arrCurrEduClsTeacherObjLstCache = await CurrEduClsTeacher_GetObjLstCache(strIdCurrEduCls);
  if (arrCurrEduClsTeacherObjLstCache.length == 0) return arrCurrEduClsTeacherObjLstCache;
  let arrCurrEduClsTeacherSel = arrCurrEduClsTeacherObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objCurrEduClsTeacherCond = new clsCurrEduClsTeacherEN();
  ObjectAssign(objCurrEduClsTeacherCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsCurrEduClsTeacherWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCurrEduClsTeacherCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCurrEduClsTeacherSel.length == 0) return arrCurrEduClsTeacherSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.sort(
        CurrEduClsTeacher_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.sort(objPagerPara.sortFun);
    }
    arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.slice(intStart, intEnd);
    return arrCurrEduClsTeacherSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      currEduClsTeacher_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCurrEduClsTeacherEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CurrEduClsTeacher_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCurrEduClsTeacherEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCurrEduClsTeacherEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
          currEduClsTeacher_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CurrEduClsTeacher_GetObjLstByJSONObjLst(returnObjLst);
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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param lngIdEduClsTeacher:关键字
 * @returns 获取删除的结果
 **/
export async function CurrEduClsTeacher_DelRecordAsync(
  lngIdEduClsTeacher: number,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngIdEduClsTeacher);

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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param arrIdEduClsTeacher:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CurrEduClsTeacher_DelCurrEduClsTeachersAsync(
  arrIdEduClsTeacher: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCurrEduClsTeachersAsync';
  const strAction = 'DelCurrEduClsTeachers';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdEduClsTeacher, config);
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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
export async function CurrEduClsTeacher_DelCurrEduClsTeachersByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCurrEduClsTeachersByCondAsync';
  const strAction = 'DelCurrEduClsTeachersByCond';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param objCurrEduClsTeacherEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CurrEduClsTeacher_AddNewRecordAsync(
  objCurrEduClsTeacherEN: clsCurrEduClsTeacherEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objCurrEduClsTeacherEN);
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCurrEduClsTeacherEN, config);
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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param objCurrEduClsTeacherEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CurrEduClsTeacher_GoTopAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param objCurrEduClsTeacherEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CurrEduClsTeacher_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCurrEduClsTeacherEN);
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param objCurrEduClsTeacherEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CurrEduClsTeacher_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCurrEduClsTeacherEN);
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param objCurrEduClsTeacherEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CurrEduClsTeacher_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCurrEduClsTeacherEN);
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param objCurrEduClsTeacherEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CurrEduClsTeacher_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objCurrEduClsTeacherEN);
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param objCurrEduClsTeacherEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CurrEduClsTeacher_AddNewRecordWithReturnKeyAsync(
  objCurrEduClsTeacherEN: clsCurrEduClsTeacherEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCurrEduClsTeacherEN, config);
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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param objCurrEduClsTeacherEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CurrEduClsTeacher_UpdateRecordAsync(
  objCurrEduClsTeacherEN: clsCurrEduClsTeacherEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCurrEduClsTeacherEN.sfUpdFldSetStr === undefined ||
    objCurrEduClsTeacherEN.sfUpdFldSetStr === null ||
    objCurrEduClsTeacherEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCurrEduClsTeacherEN.idEduClsTeacher,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCurrEduClsTeacherEN, config);
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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param objCurrEduClsTeacherEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CurrEduClsTeacher_UpdateWithConditionAsync(
  objCurrEduClsTeacherEN: clsCurrEduClsTeacherEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCurrEduClsTeacherEN.sfUpdFldSetStr === undefined ||
    objCurrEduClsTeacherEN.sfUpdFldSetStr === null ||
    objCurrEduClsTeacherEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCurrEduClsTeacherEN.idEduClsTeacher,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);
  objCurrEduClsTeacherEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCurrEduClsTeacherEN, config);
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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param objlngIdEduClsTeacherCond:条件对象
 * @returns 对象列表子集
 */
export async function CurrEduClsTeacher_IsExistRecordCache(
  objCurrEduClsTeacherCond: clsCurrEduClsTeacherEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCurrEduClsTeacherObjLstCache = await CurrEduClsTeacher_GetObjLstCache(strIdCurrEduCls);
  if (arrCurrEduClsTeacherObjLstCache == null) return false;
  let arrCurrEduClsTeacherSel = arrCurrEduClsTeacherObjLstCache;
  if (
    objCurrEduClsTeacherCond.sfFldComparisonOp == null ||
    objCurrEduClsTeacherCond.sfFldComparisonOp == ''
  )
    return arrCurrEduClsTeacherSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCurrEduClsTeacherCond.sfFldComparisonOp,
  );
  //console.log("clsCurrEduClsTeacherWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCurrEduClsTeacherCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCurrEduClsTeacherCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCurrEduClsTeacherSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCurrEduClsTeacherCond),
      currEduClsTeacher_ConstructorName,
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
export async function CurrEduClsTeacher_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param lngIdEduClsTeacher:所给的关键字
 * @returns 对象
 */
export async function CurrEduClsTeacher_IsExistCache(
  lngIdEduClsTeacher: number,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrCurrEduClsTeacherObjLstCache = await CurrEduClsTeacher_GetObjLstCache(strIdCurrEduCls);
  if (arrCurrEduClsTeacherObjLstCache == null) return false;
  try {
    const arrCurrEduClsTeacherSel = arrCurrEduClsTeacherObjLstCache.filter(
      (x) => x.idEduClsTeacher == lngIdEduClsTeacher,
    );
    if (arrCurrEduClsTeacherSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngIdEduClsTeacher,
      currEduClsTeacher_ConstructorName,
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
 * @param lngIdEduClsTeacher:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CurrEduClsTeacher_IsExistAsync(lngIdEduClsTeacher: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngIdEduClsTeacher,
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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
export async function CurrEduClsTeacher_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
 * @param objCurrEduClsTeacherCond:条件对象
 * @returns 对象列表记录数
 */
export async function CurrEduClsTeacher_GetRecCountByCondCache(
  objCurrEduClsTeacherCond: clsCurrEduClsTeacherEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCurrEduClsTeacherObjLstCache = await CurrEduClsTeacher_GetObjLstCache(strIdCurrEduCls);
  if (arrCurrEduClsTeacherObjLstCache == null) return 0;
  let arrCurrEduClsTeacherSel = arrCurrEduClsTeacherObjLstCache;
  if (
    objCurrEduClsTeacherCond.sfFldComparisonOp == null ||
    objCurrEduClsTeacherCond.sfFldComparisonOp == ''
  )
    return arrCurrEduClsTeacherSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCurrEduClsTeacherCond.sfFldComparisonOp,
  );
  //console.log("clsCurrEduClsTeacherWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCurrEduClsTeacherCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCurrEduClsTeacherCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCurrEduClsTeacherSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCurrEduClsTeacherCond),
      currEduClsTeacher_ConstructorName,
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
export async function CurrEduClsTeacher_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(currEduClsTeacher_Controller, strAction);

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
        currEduClsTeacher_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        currEduClsTeacher_ConstructorName,
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
export function CurrEduClsTeacher_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CurrEduClsTeacher_ReFreshCache(strIdCurrEduCls: string): void {
  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空!(In clsCurrEduClsTeacherWApi.clsCurrEduClsTeacherWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsCurrEduClsTeacherWApi.clsCurrEduClsTeacherWApi.ReFreshCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsCurrEduClsTeacherEN._CurrTabName, strIdCurrEduCls);
  switch (clsCurrEduClsTeacherEN.CacheModeId) {
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
  vCurrEduClsTeacher_ReFreshThisCache(strIdCurrEduCls);
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function CurrEduClsTeacher_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsCurrEduClsTeacherEN._CurrTabName, strIdCurrEduCls);
    switch (clsCurrEduClsTeacherEN.CacheModeId) {
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
export function CurrEduClsTeacher_CheckPropertyNew(
  pobjCurrEduClsTeacherEN: clsCurrEduClsTeacherEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idCurrEduCls) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.idCurrEduCls)(clsCurrEduClsTeacherBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idTeacher) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.idTeacher) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教师流水号(idTeacher)]的长度不能超过8(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.idTeacher)(clsCurrEduClsTeacherBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班老师角色(主讲,辅导)流水号(idPk2EduClsTeacherType)]的长度不能超过4(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType)(clsCurrEduClsTeacherBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.schoolTerm) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.schoolTerm) > 1
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学期(schoolTerm)]的长度不能超过1(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.schoolTerm)(clsCurrEduClsTeacherBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.schoolYear) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.schoolYear) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学年(schoolYear)]的长度不能超过10(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.schoolYear)(clsCurrEduClsTeacherBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.openBeginDate) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.openBeginDate) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[开放开始日期(openBeginDate)]的长度不能超过8(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.openBeginDate)(clsCurrEduClsTeacherBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.openEndDate) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.openEndDate) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[开放结束日期(openEndDate)]的长度不能超过8(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.openEndDate)(clsCurrEduClsTeacherBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.updDate) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.updDate)(clsCurrEduClsTeacherBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.lastVisitedDate) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.lastVisitedDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(lastVisitedDate)]的长度不能超过20(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.lastVisitedDate)(clsCurrEduClsTeacherBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.updUser) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.updUser)(clsCurrEduClsTeacherBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.memo) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.memo)(clsCurrEduClsTeacherBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCurrEduClsTeacherEN.idEduClsTeacher &&
    undefined !== pobjCurrEduClsTeacherEN.idEduClsTeacher &&
    tzDataType.isNumber(pobjCurrEduClsTeacherEN.idEduClsTeacher) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班老师流水号(idEduClsTeacher)]的值:[$(pobjCurrEduClsTeacherEN.idEduClsTeacher)], 非法,应该为数值型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idCurrEduCls) == false &&
    undefined !== pobjCurrEduClsTeacherEN.idCurrEduCls &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjCurrEduClsTeacherEN.idCurrEduCls)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idTeacher) == false &&
    undefined !== pobjCurrEduClsTeacherEN.idTeacher &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.idTeacher) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教师流水号(idTeacher)]的值:[$(pobjCurrEduClsTeacherEN.idTeacher)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType) == false &&
    undefined !== pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班老师角色(主讲,辅导)流水号(idPk2EduClsTeacherType)]的值:[$(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.schoolTerm) == false &&
    undefined !== pobjCurrEduClsTeacherEN.schoolTerm &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.schoolTerm) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学期(schoolTerm)]的值:[$(pobjCurrEduClsTeacherEN.schoolTerm)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.schoolYear) == false &&
    undefined !== pobjCurrEduClsTeacherEN.schoolYear &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.schoolYear) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学年(schoolYear)]的值:[$(pobjCurrEduClsTeacherEN.schoolYear)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.openBeginDate) == false &&
    undefined !== pobjCurrEduClsTeacherEN.openBeginDate &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.openBeginDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[开放开始日期(openBeginDate)]的值:[$(pobjCurrEduClsTeacherEN.openBeginDate)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.openEndDate) == false &&
    undefined !== pobjCurrEduClsTeacherEN.openEndDate &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.openEndDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[开放结束日期(openEndDate)]的值:[$(pobjCurrEduClsTeacherEN.openEndDate)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCurrEduClsTeacherEN.orderNum &&
    undefined !== pobjCurrEduClsTeacherEN.orderNum &&
    tzDataType.isNumber(pobjCurrEduClsTeacherEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjCurrEduClsTeacherEN.orderNum)], 非法,应该为数值型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.updDate) == false &&
    undefined !== pobjCurrEduClsTeacherEN.updDate &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjCurrEduClsTeacherEN.updDate)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.lastVisitedDate) == false &&
    undefined !== pobjCurrEduClsTeacherEN.lastVisitedDate &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.lastVisitedDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(lastVisitedDate)]的值:[$(pobjCurrEduClsTeacherEN.lastVisitedDate)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.updUser) == false &&
    undefined !== pobjCurrEduClsTeacherEN.updUser &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjCurrEduClsTeacherEN.updUser)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.memo) == false &&
    undefined !== pobjCurrEduClsTeacherEN.memo &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjCurrEduClsTeacherEN.memo)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idCurrEduCls) == false &&
    pobjCurrEduClsTeacherEN.idCurrEduCls != '[nuull]' &&
    GetStrLen(pobjCurrEduClsTeacherEN.idCurrEduCls) != 8
  ) {
    throw '(errid:Watl000415)字段[教学班流水号]作为外键字段,长度应该为8(In 当前教学班教师)!(clsCurrEduClsTeacherBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idTeacher) == false &&
    pobjCurrEduClsTeacherEN.idTeacher != '[nuull]' &&
    GetStrLen(pobjCurrEduClsTeacherEN.idTeacher) != 8
  ) {
    throw '(errid:Watl000415)字段[教师流水号]作为外键字段,长度应该为8(In 当前教学班教师)!(clsCurrEduClsTeacherBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType) == false &&
    pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType != '[nuull]' &&
    GetStrLen(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType) != 4
  ) {
    throw '(errid:Watl000415)字段[教学班老师角色(主讲,辅导)流水号]作为外键字段,长度应该为4(In 当前教学班教师)!(clsCurrEduClsTeacherBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CurrEduClsTeacher_CheckProperty4Update(
  pobjCurrEduClsTeacherEN: clsCurrEduClsTeacherEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idCurrEduCls) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.idCurrEduCls)(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idTeacher) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.idTeacher) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教师流水号(idTeacher)]的长度不能超过8(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.idTeacher)(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班老师角色(主讲,辅导)流水号(idPk2EduClsTeacherType)]的长度不能超过4(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType)(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.schoolTerm) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.schoolTerm) > 1
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学期(schoolTerm)]的长度不能超过1(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.schoolTerm)(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.schoolYear) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.schoolYear) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学年(schoolYear)]的长度不能超过10(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.schoolYear)(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.openBeginDate) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.openBeginDate) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[开放开始日期(openBeginDate)]的长度不能超过8(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.openBeginDate)(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.openEndDate) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.openEndDate) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[开放结束日期(openEndDate)]的长度不能超过8(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.openEndDate)(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.updDate) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.updDate)(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.lastVisitedDate) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.lastVisitedDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(lastVisitedDate)]的长度不能超过20(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.lastVisitedDate)(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.updUser) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.updUser)(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.memo) == false &&
    GetStrLen(pobjCurrEduClsTeacherEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 当前教学班教师(CurrEduClsTeacher))!值:$(pobjCurrEduClsTeacherEN.memo)(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCurrEduClsTeacherEN.idEduClsTeacher &&
    undefined !== pobjCurrEduClsTeacherEN.idEduClsTeacher &&
    tzDataType.isNumber(pobjCurrEduClsTeacherEN.idEduClsTeacher) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班老师流水号(idEduClsTeacher)]的值:[$(pobjCurrEduClsTeacherEN.idEduClsTeacher)], 非法,应该为数值型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idCurrEduCls) == false &&
    undefined !== pobjCurrEduClsTeacherEN.idCurrEduCls &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjCurrEduClsTeacherEN.idCurrEduCls)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idTeacher) == false &&
    undefined !== pobjCurrEduClsTeacherEN.idTeacher &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.idTeacher) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教师流水号(idTeacher)]的值:[$(pobjCurrEduClsTeacherEN.idTeacher)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType) == false &&
    undefined !== pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班老师角色(主讲,辅导)流水号(idPk2EduClsTeacherType)]的值:[$(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.schoolTerm) == false &&
    undefined !== pobjCurrEduClsTeacherEN.schoolTerm &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.schoolTerm) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学期(schoolTerm)]的值:[$(pobjCurrEduClsTeacherEN.schoolTerm)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.schoolYear) == false &&
    undefined !== pobjCurrEduClsTeacherEN.schoolYear &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.schoolYear) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学年(schoolYear)]的值:[$(pobjCurrEduClsTeacherEN.schoolYear)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.openBeginDate) == false &&
    undefined !== pobjCurrEduClsTeacherEN.openBeginDate &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.openBeginDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[开放开始日期(openBeginDate)]的值:[$(pobjCurrEduClsTeacherEN.openBeginDate)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.openEndDate) == false &&
    undefined !== pobjCurrEduClsTeacherEN.openEndDate &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.openEndDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[开放结束日期(openEndDate)]的值:[$(pobjCurrEduClsTeacherEN.openEndDate)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCurrEduClsTeacherEN.orderNum &&
    undefined !== pobjCurrEduClsTeacherEN.orderNum &&
    tzDataType.isNumber(pobjCurrEduClsTeacherEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjCurrEduClsTeacherEN.orderNum)], 非法,应该为数值型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.updDate) == false &&
    undefined !== pobjCurrEduClsTeacherEN.updDate &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjCurrEduClsTeacherEN.updDate)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.lastVisitedDate) == false &&
    undefined !== pobjCurrEduClsTeacherEN.lastVisitedDate &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.lastVisitedDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(lastVisitedDate)]的值:[$(pobjCurrEduClsTeacherEN.lastVisitedDate)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.updUser) == false &&
    undefined !== pobjCurrEduClsTeacherEN.updUser &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjCurrEduClsTeacherEN.updUser)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.memo) == false &&
    undefined !== pobjCurrEduClsTeacherEN.memo &&
    tzDataType.isString(pobjCurrEduClsTeacherEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjCurrEduClsTeacherEN.memo)], 非法,应该为字符型(In 当前教学班教师(CurrEduClsTeacher))!(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjCurrEduClsTeacherEN.idEduClsTeacher ||
    (pobjCurrEduClsTeacherEN.idEduClsTeacher != null &&
      pobjCurrEduClsTeacherEN.idEduClsTeacher.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[教学班老师流水号]不能为空(In 当前教学班教师)!(clsCurrEduClsTeacherBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idCurrEduCls) == false &&
    pobjCurrEduClsTeacherEN.idCurrEduCls != '[nuull]' &&
    GetStrLen(pobjCurrEduClsTeacherEN.idCurrEduCls) != 8
  ) {
    throw '(errid:Watl000418)字段[教学班流水号]作为外键字段,长度应该为8(In 当前教学班教师)!(clsCurrEduClsTeacherBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idTeacher) == false &&
    pobjCurrEduClsTeacherEN.idTeacher != '[nuull]' &&
    GetStrLen(pobjCurrEduClsTeacherEN.idTeacher) != 8
  ) {
    throw '(errid:Watl000418)字段[教师流水号]作为外键字段,长度应该为8(In 当前教学班教师)!(clsCurrEduClsTeacherBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType) == false &&
    pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType != '[nuull]' &&
    GetStrLen(pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType) != 4
  ) {
    throw '(errid:Watl000418)字段[教学班老师角色(主讲,辅导)流水号]作为外键字段,长度应该为4(In 当前教学班教师)!(clsCurrEduClsTeacherBL:CheckPropertyNew)';
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
export function CurrEduClsTeacher_GetJSONStrByObj(
  pobjCurrEduClsTeacherEN: clsCurrEduClsTeacherEN,
): string {
  pobjCurrEduClsTeacherEN.sfUpdFldSetStr = pobjCurrEduClsTeacherEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCurrEduClsTeacherEN);
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
export function CurrEduClsTeacher_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsCurrEduClsTeacherEN> {
  let arrCurrEduClsTeacherObjLst = new Array<clsCurrEduClsTeacherEN>();
  if (strJSON === '') {
    return arrCurrEduClsTeacherObjLst;
  }
  try {
    arrCurrEduClsTeacherObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCurrEduClsTeacherObjLst;
  }
  return arrCurrEduClsTeacherObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCurrEduClsTeacherObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CurrEduClsTeacher_GetObjLstByJSONObjLst(
  arrCurrEduClsTeacherObjLstS: Array<clsCurrEduClsTeacherEN>,
): Array<clsCurrEduClsTeacherEN> {
  const arrCurrEduClsTeacherObjLst = new Array<clsCurrEduClsTeacherEN>();
  for (const objInFor of arrCurrEduClsTeacherObjLstS) {
    const obj1 = CurrEduClsTeacher_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCurrEduClsTeacherObjLst.push(obj1);
  }
  return arrCurrEduClsTeacherObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CurrEduClsTeacher_GetObjByJSONStr(strJSON: string): clsCurrEduClsTeacherEN {
  let pobjCurrEduClsTeacherEN = new clsCurrEduClsTeacherEN();
  if (strJSON === '') {
    return pobjCurrEduClsTeacherEN;
  }
  try {
    pobjCurrEduClsTeacherEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCurrEduClsTeacherEN;
  }
  return pobjCurrEduClsTeacherEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CurrEduClsTeacher_GetCombineCondition(
  objCurrEduClsTeacherCond: clsCurrEduClsTeacherEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCurrEduClsTeacherCond.dicFldComparisonOp,
      clsCurrEduClsTeacherEN.con_IdEduClsTeacher,
    ) == true
  ) {
    const strComparisonOpIdEduClsTeacher: string =
      objCurrEduClsTeacherCond.dicFldComparisonOp[clsCurrEduClsTeacherEN.con_IdEduClsTeacher];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCurrEduClsTeacherEN.con_IdEduClsTeacher,
      objCurrEduClsTeacherCond.idEduClsTeacher,
      strComparisonOpIdEduClsTeacher,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCurrEduClsTeacherCond.dicFldComparisonOp,
      clsCurrEduClsTeacherEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objCurrEduClsTeacherCond.dicFldComparisonOp[clsCurrEduClsTeacherEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCurrEduClsTeacherEN.con_IdCurrEduCls,
      objCurrEduClsTeacherCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCurrEduClsTeacherCond.dicFldComparisonOp,
      clsCurrEduClsTeacherEN.con_IdTeacher,
    ) == true
  ) {
    const strComparisonOpIdTeacher: string =
      objCurrEduClsTeacherCond.dicFldComparisonOp[clsCurrEduClsTeacherEN.con_IdTeacher];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCurrEduClsTeacherEN.con_IdTeacher,
      objCurrEduClsTeacherCond.idTeacher,
      strComparisonOpIdTeacher,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCurrEduClsTeacherCond.dicFldComparisonOp,
      clsCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType,
    ) == true
  ) {
    const strComparisonOpIdPk2EduClsTeacherType: string =
      objCurrEduClsTeacherCond.dicFldComparisonOp[
        clsCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType,
      objCurrEduClsTeacherCond.idPk2EduClsTeacherType,
      strComparisonOpIdPk2EduClsTeacherType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCurrEduClsTeacherCond.dicFldComparisonOp,
      clsCurrEduClsTeacherEN.con_SchoolTerm,
    ) == true
  ) {
    const strComparisonOpSchoolTerm: string =
      objCurrEduClsTeacherCond.dicFldComparisonOp[clsCurrEduClsTeacherEN.con_SchoolTerm];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCurrEduClsTeacherEN.con_SchoolTerm,
      objCurrEduClsTeacherCond.schoolTerm,
      strComparisonOpSchoolTerm,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCurrEduClsTeacherCond.dicFldComparisonOp,
      clsCurrEduClsTeacherEN.con_SchoolYear,
    ) == true
  ) {
    const strComparisonOpSchoolYear: string =
      objCurrEduClsTeacherCond.dicFldComparisonOp[clsCurrEduClsTeacherEN.con_SchoolYear];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCurrEduClsTeacherEN.con_SchoolYear,
      objCurrEduClsTeacherCond.schoolYear,
      strComparisonOpSchoolYear,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCurrEduClsTeacherCond.dicFldComparisonOp,
      clsCurrEduClsTeacherEN.con_OpenBeginDate,
    ) == true
  ) {
    const strComparisonOpOpenBeginDate: string =
      objCurrEduClsTeacherCond.dicFldComparisonOp[clsCurrEduClsTeacherEN.con_OpenBeginDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCurrEduClsTeacherEN.con_OpenBeginDate,
      objCurrEduClsTeacherCond.openBeginDate,
      strComparisonOpOpenBeginDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCurrEduClsTeacherCond.dicFldComparisonOp,
      clsCurrEduClsTeacherEN.con_OpenEndDate,
    ) == true
  ) {
    const strComparisonOpOpenEndDate: string =
      objCurrEduClsTeacherCond.dicFldComparisonOp[clsCurrEduClsTeacherEN.con_OpenEndDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCurrEduClsTeacherEN.con_OpenEndDate,
      objCurrEduClsTeacherCond.openEndDate,
      strComparisonOpOpenEndDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCurrEduClsTeacherCond.dicFldComparisonOp,
      clsCurrEduClsTeacherEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objCurrEduClsTeacherCond.dicFldComparisonOp[clsCurrEduClsTeacherEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCurrEduClsTeacherEN.con_OrderNum,
      objCurrEduClsTeacherCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCurrEduClsTeacherCond.dicFldComparisonOp,
      clsCurrEduClsTeacherEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCurrEduClsTeacherCond.dicFldComparisonOp[clsCurrEduClsTeacherEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCurrEduClsTeacherEN.con_UpdDate,
      objCurrEduClsTeacherCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCurrEduClsTeacherCond.dicFldComparisonOp,
      clsCurrEduClsTeacherEN.con_LastVisitedDate,
    ) == true
  ) {
    const strComparisonOpLastVisitedDate: string =
      objCurrEduClsTeacherCond.dicFldComparisonOp[clsCurrEduClsTeacherEN.con_LastVisitedDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCurrEduClsTeacherEN.con_LastVisitedDate,
      objCurrEduClsTeacherCond.lastVisitedDate,
      strComparisonOpLastVisitedDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCurrEduClsTeacherCond.dicFldComparisonOp,
      clsCurrEduClsTeacherEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCurrEduClsTeacherCond.dicFldComparisonOp[clsCurrEduClsTeacherEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCurrEduClsTeacherEN.con_UpdUser,
      objCurrEduClsTeacherCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCurrEduClsTeacherCond.dicFldComparisonOp,
      clsCurrEduClsTeacherEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCurrEduClsTeacherCond.dicFldComparisonOp[clsCurrEduClsTeacherEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCurrEduClsTeacherEN.con_Memo,
      objCurrEduClsTeacherCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CurrEduClsTeacher(当前教学班教师),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strIdTeacher: 教师流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CurrEduClsTeacher_GetUniCondStr(
  objCurrEduClsTeacherEN: clsCurrEduClsTeacherEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and IdCurrEduCls = '{0}'", objCurrEduClsTeacherEN.idCurrEduCls);
  strWhereCond += Format(" and IdTeacher = '{0}'", objCurrEduClsTeacherEN.idTeacher);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CurrEduClsTeacher(当前教学班教师),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strIdTeacher: 教师流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CurrEduClsTeacher_GetUniCondStr4Update(
  objCurrEduClsTeacherEN: clsCurrEduClsTeacherEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and IdEduClsTeacher <> '{0}'", objCurrEduClsTeacherEN.idEduClsTeacher);
  strWhereCond += Format(" and IdCurrEduCls = '{0}'", objCurrEduClsTeacherEN.idCurrEduCls);
  strWhereCond += Format(" and IdTeacher = '{0}'", objCurrEduClsTeacherEN.idTeacher);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objCurrEduClsTeacherENS:源对象
 * @param objCurrEduClsTeacherENT:目标对象
 */
export function CurrEduClsTeacher_CopyObjTo(
  objCurrEduClsTeacherENS: clsCurrEduClsTeacherEN,
  objCurrEduClsTeacherENT: clsCurrEduClsTeacherEN,
): void {
  objCurrEduClsTeacherENT.idEduClsTeacher = objCurrEduClsTeacherENS.idEduClsTeacher; //教学班老师流水号
  objCurrEduClsTeacherENT.idCurrEduCls = objCurrEduClsTeacherENS.idCurrEduCls; //教学班流水号
  objCurrEduClsTeacherENT.idTeacher = objCurrEduClsTeacherENS.idTeacher; //教师流水号
  objCurrEduClsTeacherENT.idPk2EduClsTeacherType = objCurrEduClsTeacherENS.idPk2EduClsTeacherType; //教学班老师角色(主讲,辅导)流水号
  objCurrEduClsTeacherENT.schoolTerm = objCurrEduClsTeacherENS.schoolTerm; //学期
  objCurrEduClsTeacherENT.schoolYear = objCurrEduClsTeacherENS.schoolYear; //学年
  objCurrEduClsTeacherENT.openBeginDate = objCurrEduClsTeacherENS.openBeginDate; //开放开始日期
  objCurrEduClsTeacherENT.openEndDate = objCurrEduClsTeacherENS.openEndDate; //开放结束日期
  objCurrEduClsTeacherENT.orderNum = objCurrEduClsTeacherENS.orderNum; //序号
  objCurrEduClsTeacherENT.updDate = objCurrEduClsTeacherENS.updDate; //修改日期
  objCurrEduClsTeacherENT.lastVisitedDate = objCurrEduClsTeacherENS.lastVisitedDate; //修改日期
  objCurrEduClsTeacherENT.updUser = objCurrEduClsTeacherENS.updUser; //修改人
  objCurrEduClsTeacherENT.memo = objCurrEduClsTeacherENS.memo; //备注
  objCurrEduClsTeacherENT.sfUpdFldSetStr = objCurrEduClsTeacherENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCurrEduClsTeacherENS:源对象
 * @param objCurrEduClsTeacherENT:目标对象
 */
export function CurrEduClsTeacher_GetObjFromJsonObj(
  objCurrEduClsTeacherENS: clsCurrEduClsTeacherEN,
): clsCurrEduClsTeacherEN {
  const objCurrEduClsTeacherENT: clsCurrEduClsTeacherEN = new clsCurrEduClsTeacherEN();
  ObjectAssign(objCurrEduClsTeacherENT, objCurrEduClsTeacherENS);
  return objCurrEduClsTeacherENT;
}
