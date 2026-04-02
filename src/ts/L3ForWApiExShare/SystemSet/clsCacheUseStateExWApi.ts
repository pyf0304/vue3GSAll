import { clsCacheUseStateEN } from '@/ts/L0Entity/SystemSet/clsCacheUseStateEN';
import { clsCacheUseStateENEx } from '@/ts/L0Entity/SystemSet/clsCacheUseStateENEx';
import { clsCacheModeEN, enumCacheMode } from '@/ts/L0Entity/SystemSet/clsCacheModeEN';
import {
  CacheUseState_AddNewRecordAsync,
  CacheUseState_DelCacheUseStatesByCondAsync,
  CacheUseState_GetObjLstCache,
  CacheUseState_ReFreshCache,
  CacheUseState_SortFunByKey,
} from '@/ts/L3ForWApi/SystemSet/clsCacheUseStateWApi';
import {
  CacheMode_func,
  CacheMode_GetObjLstCache,
} from '@/ts/L3ForWApi/SystemSet/clsCacheModeWApi';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { Format, getBytes, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const cacheUseStateEx_Controller = 'CacheUseStateExApi';
export const cacheUseStateEx_ConstructorName = 'cacheUseStateEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objCacheUseStateENS">源对象</param>
/// <param name = "objCacheUseStateENT">目标对象</param>
export function CacheUseStateEx_CopyToEx(
  objCacheUseStateENS: clsCacheUseStateEN,
): clsCacheUseStateENEx {
  const objCacheUseStateENT: clsCacheUseStateENEx = new clsCacheUseStateENEx();
  objCacheUseStateENT.mId = objCacheUseStateENS.mId; //mId
  objCacheUseStateENT.cacheModeId = objCacheUseStateENS.cacheModeId; //缓存方式Id
  objCacheUseStateENT.cacheKey = objCacheUseStateENS.cacheKey; //缓存关键字
  objCacheUseStateENT.cacheSize = objCacheUseStateENS.cacheSize; //缓存大小
  objCacheUseStateENT.userId = objCacheUseStateENS.userId; //缓存大小

  objCacheUseStateENT.memo = objCacheUseStateENS.memo; //说明
  objCacheUseStateENT.sfUpdFldSetStr = objCacheUseStateENS.updFldString; //专门用于记录某字段属性是否修改
  objCacheUseStateENT.sfFldComparisonOp = objCacheUseStateENS.sfFldComparisonOp; //专门用于记录条件对象某字段的比较运算符
  return objCacheUseStateENT;
}

export function CacheUseStateEx_LogCache4localStorage(strKey: string, strUserId: string) {
  //strKey = localStorage.key(i)
  //if (strKey == null) continue;
  // let myCache;
  if (IsNullOrEmpty(strKey) == true) return;
  //strCacheKeyLst += Format("{0},", strKey);
  //拿到所有含u-的key
  const objCacheUseState: clsCacheUseStateEN = new clsCacheUseStateEN();
  objCacheUseState.cacheKey = strKey;
  objCacheUseState.userId = strUserId;
  objCacheUseState.useDate = clsDateTime.getTodayDateTimeStr(1);
  objCacheUseState.cacheModeId = enumCacheMode.localStorage_03;
  const myCache = localStorage.getItem(strKey);
  if (myCache == null) {
    objCacheUseState.cacheSize = 0;
  } else {
    objCacheUseState.cacheSize = getBytes(myCache);
  }
}

export function CacheUseStateEx_getBytes(str: string): number {
  const len = str.length;
  let bytes = len;
  for (let i = 0; i < len; i++) {
    if (str.charCodeAt(i) > 255) bytes++;
  }
  return bytes;
}

export async function CacheUseStateEx_GetCacheUseState(strUserId: string) {
  let strKey;
  let myCache;
  let strCacheKeyLst = '';
  const strCondition = Format("{0}='{1}'", clsCacheUseStateEN.con_UserId, strUserId);
  await CacheUseState_DelCacheUseStatesByCondAsync(strCondition);
  for (let i = 0; i < localStorage.length; i++) {
    strKey = localStorage.key(i);
    if (strKey == null) continue;

    if (IsNullOrEmpty(strKey) == true) continue;
    strCacheKeyLst += Format('{0},', strKey);
    //拿到所有含u-的key
    const objCacheUseState: clsCacheUseStateEN = new clsCacheUseStateEN();
    objCacheUseState.cacheKey = strKey;
    objCacheUseState.userId = strUserId;
    objCacheUseState.useDate = clsDateTime.getTodayDateTimeStr(1);
    objCacheUseState.cacheModeId = enumCacheMode.localStorage_03;
    myCache = localStorage.getItem(strKey);
    if (myCache == null) {
      objCacheUseState.cacheSize = 0;
    } else {
      objCacheUseState.cacheSize = getBytes(myCache);
    }
    try {
      await CacheUseState_AddNewRecordAsync(objCacheUseState);
    } catch (e) {
      console.error(e);
    }
  }
  for (let i = 0; i < sessionStorage.length; i++) {
    strKey = sessionStorage.key(i);
    if (strKey == null) continue;
    if (IsNullOrEmpty(strKey) == true) continue;
    strCacheKeyLst += Format('{0},', strKey);
    //拿到所有含u-的key
    const objCacheUseState: clsCacheUseStateEN = new clsCacheUseStateEN();
    objCacheUseState.cacheKey = strKey;
    objCacheUseState.userId = strUserId;
    objCacheUseState.useDate = clsDateTime.getTodayDateTimeStr(1);
    objCacheUseState.cacheModeId = enumCacheMode.sessionStorage_04;
    myCache = sessionStorage.getItem(strKey);
    if (myCache == null) {
      objCacheUseState.cacheSize = 0;
    } else {
      objCacheUseState.cacheSize = getBytes(myCache);
    }
    try {
      await CacheUseState_AddNewRecordAsync(objCacheUseState);
    } catch (e) {
      console.error(e);
    }
  }
  for (let i = 0; i < CacheHelper.CacheLength(); i++) {
    strKey = CacheHelper.Key(i);
    if (strKey == null) continue;

    if (IsNullOrEmpty(strKey) == true) continue;
    strCacheKeyLst += Format('{0},', strKey);
    //拿到所有含u-的key
    const objCacheUseState: clsCacheUseStateEN = new clsCacheUseStateEN();
    objCacheUseState.cacheKey = strKey;
    objCacheUseState.userId = strUserId;
    objCacheUseState.useDate = clsDateTime.getTodayDateTimeStr(1);
    objCacheUseState.cacheModeId = enumCacheMode.ClientCache_02;
    myCache = CacheHelper.Get(strKey);
    if (myCache == null) {
      objCacheUseState.cacheSize = 0;
    } else {
      objCacheUseState.cacheSize = getBytes(myCache);
    }
    try {
      await CacheUseState_AddNewRecordAsync(objCacheUseState);
    } catch (e) {
      console.error(e);
    }
  }
  CacheUseState_ReFreshCache(strUserId);
  //alert(strCacheKeyLst);
  console.info('strCacheKeyLst:', strCacheKeyLst);
}
export async function CacheUseStateEx_Subtotals(strUserId: string) {
  const arrCacheUseStateObjLst = await CacheUseState_GetObjLstCache(strUserId);
  const arrCacheMode = await CacheMode_GetObjLstCache();
  arrCacheMode.forEach((x) => {
    const arr_Sel = arrCacheUseStateObjLst.filter((y) => y.cacheModeId == x.cacheModeId);
    let intTotals = 0;
    if (arr_Sel.length > 0) {
      const data = arr_Sel.map((z) => z.cacheSize);
      data.forEach((d) => (intTotals += d));
      //                arr_Sel.reduce((intTotals, item) => intTotals + item.cacheSize, 0);
      intTotals = intTotals / 1024;
      if (
        x.cacheModeId == enumCacheMode.localStorage_03 ||
        x.cacheModeId == enumCacheMode.sessionStorage_04
      ) {
        const fltPercent = (intTotals * 100) / (1024 * 5);
        x.memo = Format('{0}KB, 占 {1} %', intTotals.toFixed(2), fltPercent.toFixed(2));
      } else {
        x.memo = Format('{0}KB', intTotals.toFixed(2));
      }
    }
    if (intTotals > 0) {
      let txtClientCache: HTMLInputElement;
      let txtlocalStorage: HTMLInputElement;
      let txtsessionStorage: HTMLInputElement;
      switch (x.cacheModeId) {
        case enumCacheMode.ClientCache_02:
          console.error('ClientCache_02:', x.memo);
          txtClientCache = <HTMLInputElement>document.getElementById('txtClientCache');
          if (txtClientCache != null) {
            txtClientCache.value = x.memo;
          }
          break;
        case enumCacheMode.localStorage_03:
          console.error('localStorage_03:', x.memo);
          txtlocalStorage = <HTMLInputElement>document.getElementById('txtlocalStorage');
          if (txtlocalStorage != null) {
            txtlocalStorage.value = x.memo;
          }
          break;
        case enumCacheMode.sessionStorage_04:
          console.error('sessionStorage_04:', x.memo);
          txtsessionStorage = <HTMLInputElement>document.getElementById('txtsessionStorage');
          if (txtsessionStorage != null) {
            txtsessionStorage.value = x.memo;
          }
          break;
      }
    }
  });
}
export function CacheUseStateEx_ClearLocalStorage() {
  const arrCacheKeyLst: Array<string> = new Array<string>();
  for (let i = 0; i < localStorage.length; i++) {
    const strKey = localStorage.key(i);
    if (strKey != null) {
      arrCacheKeyLst.push(strKey);
    }
    //拿到所有含u-的key
  }
  //        alert(strCacheKeyLst);
  arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
}

export function CacheUseStateEx_ClearSessionStorage() {
  const arrCacheKeyLst: Array<string> = new Array<string>();
  for (let i = 0; i < sessionStorage.length; i++) {
    const strKey = sessionStorage.key(i);
    if (strKey != null) {
      arrCacheKeyLst.push(strKey);
    }
    //拿到所有含u-的key
  }
  //        alert(strCacheKeyLst);
  arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CacheUseStateEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strUserId: string,
): Promise<Array<clsCacheUseStateENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrCacheUseStateObjLst = await CacheUseState_GetObjLstCache(strUserId);
  const arrCacheUseStateExObjLst = arrCacheUseStateObjLst.map(CacheUseStateEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCacheUseStateEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrCacheUseStateExObjLst) {
      await CacheUseStateEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrCacheUseStateExObjLst.length == 0) return arrCacheUseStateExObjLst;
  let arrCacheUseStateSel: Array<clsCacheUseStateENEx> = arrCacheUseStateExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objCacheUseStateCond = new clsCacheUseStateENEx();
  ObjectAssign(objCacheUseStateCond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsCacheUseStateWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCacheUseStateSel = arrCacheUseStateSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCacheUseStateCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCacheUseStateSel.length == 0) return arrCacheUseStateSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCacheUseStateSel = arrCacheUseStateSel.sort(
        CacheUseStateEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrCacheUseStateSel = arrCacheUseStateSel.sort(objPagerPara.sortFun);
    }
    arrCacheUseStateSel = arrCacheUseStateSel.slice(intStart, intEnd);
    return arrCacheUseStateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cacheUseStateEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCacheUseStateENEx>();
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CacheUseStateEx_FuncMapByFldName(
  strFldName: string,
  objCacheUseStateEx: clsCacheUseStateENEx,
) {
  const strThisFuncName = CacheUseStateEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsCacheUseStateEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCacheUseStateENEx.con_CacheModeName:
      return CacheUseStateEx_FuncMapCacheModeName(objCacheUseStateEx);
    case clsCacheUseStateENEx.con_CacheModeENName:
      return CacheUseStateEx_FuncMapCacheModeENName(objCacheUseStateEx);
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCacheUseStateS:源对象
 **/
export async function CacheUseStateEx_FuncMapCacheModeName(objCacheUseState: clsCacheUseStateENEx) {
  const strThisFuncName = CacheUseStateEx_FuncMapCacheModeName.name;
  try {
    if (IsNullOrEmpty(objCacheUseState.cacheModeName) == true) {
      const CacheModeCacheModeId = objCacheUseState.cacheModeId;
      const CacheModeCacheModeName = await CacheMode_func(
        clsCacheModeEN.con_CacheModeId,
        clsCacheModeEN.con_CacheModeName,
        CacheModeCacheModeId,
      );
      objCacheUseState.cacheModeName = CacheModeCacheModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000160)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cacheUseStateEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCacheUseStateS:源对象
 **/
export async function CacheUseStateEx_FuncMapCacheModeENName(
  objCacheUseState: clsCacheUseStateENEx,
) {
  const strThisFuncName = CacheUseStateEx_FuncMapCacheModeENName.name;
  try {
    if (IsNullOrEmpty(objCacheUseState.cacheModeENName) == true) {
      const CacheModeCacheModeId = objCacheUseState.cacheModeId;
      const CacheModeCacheModeENName = await CacheMode_func(
        clsCacheModeEN.con_CacheModeId,
        clsCacheModeEN.con_CacheModeENName,
        CacheModeCacheModeId,
      );
      objCacheUseState.cacheModeENName = CacheModeCacheModeENName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000161)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cacheUseStateEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CacheUseStateEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCacheUseStateENEx.con_CacheModeName:
        return (a: clsCacheUseStateENEx, b: clsCacheUseStateENEx) => {
          return a.cacheModeName.localeCompare(b.cacheModeName);
        };
      case clsCacheUseStateENEx.con_CacheModeENName:
        return (a: clsCacheUseStateENEx, b: clsCacheUseStateENEx) => {
          return a.cacheModeENName.localeCompare(b.cacheModeENName);
        };
      default:
        return CacheUseState_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCacheUseStateENEx.con_CacheModeName:
        return (a: clsCacheUseStateENEx, b: clsCacheUseStateENEx) => {
          return b.cacheModeName.localeCompare(a.cacheModeName);
        };
      case clsCacheUseStateENEx.con_CacheModeENName:
        return (a: clsCacheUseStateENEx, b: clsCacheUseStateENEx) => {
          return b.cacheModeENName.localeCompare(a.cacheModeENName);
        };
      default:
        return CacheUseState_SortFunByKey(strKey, AscOrDesc);
    }
  }
}
