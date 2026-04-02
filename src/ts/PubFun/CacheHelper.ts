import { IsNullOrEmpty } from './clsString';

export class CacheHelper {
  //缓存容器
  public static CacheDictionary: { [index: string]: any } = {};
  public static get CacheLength1() {
    return CacheHelper.CacheDictionary.length;
  }

  public static CacheLength(): number {
    let intCount = 0;
    for (const k in CacheHelper.CacheDictionary) {
      console.log(k);
      intCount++;
    }
    return intCount;
  }
  /// <summary>
  /// 获取缓存
  /// </summary>
  public static Key(index: number) {
    let rlt = '';
    if (index >= 0 && index < CacheHelper.CacheDictionary.length) {
      rlt = CacheHelper.CacheDictionary[index];
    }
    return rlt;
  }
  /// <summary>
  /// 添加缓存
  /// </summary>
  public static Add(key: string, value: any) {
    CacheHelper.CacheDictionary[key] = value;
  }
  /// <summary>
  /// 删除给定关键
  /// </summary>
  /// <param name="key"></param>
  public static Remove(key: string) {
    if (CacheHelper.Exsits(key)) {
      delete CacheHelper.CacheDictionary[key];
    }
  }
  /// <summary>
  /// 获取缓存
  /// </summary>
  public static Get(key: string) {
    return CacheHelper.CacheDictionary[key];
  }

  /// <summary>
  /// 判断缓存是否存在
  /// </summary>
  /// <param name="key"></param>
  /// <returns></returns>
  public static Exsits(key: string): boolean {
    return Object.prototype.hasOwnProperty.call(CacheHelper.CacheDictionary, key);
  }
  /// <summary>
  /// 缓存获取方法
  /// </summary>
  /// <typeparam name="T"></typeparam>
  /// <param name="key">缓存字典容器对应key</param>
  /// <param name="func">委托方法 传入操作对象</param>
  /// <returns></returns>
  public static GetCache(key: string, func: (strKey: string) => any) {
    let t: any;
    if (CacheHelper.Exsits(key)) {
      //缓存存在，直接获取原数据
      t = CacheHelper.Get(key);
    } else {
      //缓存不存在，去生成缓存，并加入容器
      console.log(key);
      console.log(func);
      t = func(key);

      CacheHelper.Add(key, t);
    }
    return t;
  }

  /// <summary>
  /// 缓存获取方法
  /// </summary>
  /// <typeparam name="T"></typeparam>
  /// <param name="key">缓存字典容器对应key</param>
  /// <param name="func">委托方法 传入操作对象</param>
  /// <returns></returns>
  public static GetCacheByCondition(
    key: string,
    strCondition: string,
    func: (strCondition: string) => any,
  ) {
    let t: any;
    if (CacheHelper.Exsits(key)) {
      //缓存存在，直接获取原数据
      t = CacheHelper.Get(key);
    } else {
      //缓存不存在，去生成缓存，并加入容器
      console.log(key);
      console.log(func);
      t = func(strCondition);

      CacheHelper.Add(key, t);
    }
    return t;
  }

  public static GetCacheByConditionAsync(
    key: string,
    strCondition: string,
    func: (strCondition: string) => any,
  ): Promise<any> {
    let t: any;
    if (CacheHelper.Exsits(key)) {
      //缓存存在，直接获取原数据
      t = CacheHelper.Get(key);
    } else {
      //缓存不存在，去生成缓存，并加入容器
      console.log(key);
      console.log(func);
      t = func(strCondition);

      CacheHelper.Add(key, t);
    }
    return t;
  }
  public static getBytes(str: string): number {
    const len = str.length;
    let bytes = len;
    for (let i = 0; i < len; i++) {
      if (str.charCodeAt(i) > 255) bytes++;
    }
    return bytes;
  }
  public static localStorageSubTotals(): number {
    let strKey;
    let myCache;
    // let strCacheKeyLst = '';
    let intTotals = 0;

    for (let i = 0; i < localStorage.length; i++) {
      strKey = localStorage.key(i);
      if (strKey == null) continue;

      if (IsNullOrEmpty(strKey) == true) continue;
      // strCacheKeyLst += Format('{0},', strKey);
      //拿到所有含u-的key
      myCache = localStorage.getItem(strKey);
      if (myCache == null) {
        //objCacheUseState.cacheSize = 0;
      } else {
        intTotals += this.getBytes(myCache);
      }
    }
    intTotals = intTotals / 1024;
    // const strTotals = Format('{0}KB', intTotals.toFixed(2));
    return intTotals;
  }

  public static sessionStorageSubTotals(): number {
    let strKey;
    let myCache;
    // let strCacheKeyLst = '';
    let intTotals = 0;

    for (let i = 0; i < sessionStorage.length; i++) {
      strKey = sessionStorage.key(i);
      if (strKey == null) continue;

      if (IsNullOrEmpty(strKey) == true) continue;
      // strCacheKeyLst += Format('{0},', strKey);
      //拿到所有含u-的key
      myCache = sessionStorage.getItem(strKey);
      if (myCache == null) {
        //objCacheUseState.cacheSize = 0;
      } else {
        intTotals += this.getBytes(myCache);
      }
    }
    intTotals = intTotals / 1024;
    // const strTotals = Format('{0}KB', intTotals.toFixed(2));
    return intTotals;
  }

  public static ClearLocalStorage() {
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

  public static ClearSessionStorage() {
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
  public static ClearLocalStorage4Head(strHead: string) {
    const arrCacheKeyLst: Array<string> = new Array<string>();
    for (let i = 0; i < localStorage.length; i++) {
      const strKey = localStorage.key(i);
      if (strKey != null) {
        if (strKey.indexOf(strHead) == 0) {
          arrCacheKeyLst.push(strKey);
        }
      }
      //拿到所有含u-的key
    }
    //        alert(strCacheKeyLst);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
  }
  public static ClearSessionStorage4Head(strHead: string) {
    const arrCacheKeyLst: Array<string> = new Array<string>();
    for (let i = 0; i < sessionStorage.length; i++) {
      const strKey = sessionStorage.key(i);
      if (strKey != null) {
        if (strKey.indexOf(strHead) == 0) {
          arrCacheKeyLst.push(strKey);
        }
      }
      //拿到所有含u-的key
    }
    //        alert(strCacheKeyLst);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
  }
}

//export function GetSessionCacheAdditionCondition(strTabName: string) {
//    const arrTabCacheAdditionCondition = GetLst_TabCacheAdditionCondition();
//    const objCacheAdditionCondition = arrTabCacheAdditionCondition.find(x => x.tabName == strTabName);
//    if (objCacheAdditionCondition == null) return '';
//    return objCacheAdditionCondition.cacheAdditionCondition;
//}
/**
 * 在LocalStorage中查找某前缀的关键字
 * @param strPrefix：前缀
 */
export function LocalStorage_GetKeyByPrefix(strPrefix: string) {
  const arrCacheKeyLst: Array<string> = new Array<string>();
  for (let i = 0; i < localStorage.length; i++) {
    const strKey = localStorage.key(i);
    if (strKey != null) {
      if (strKey.indexOf(strPrefix) >= 0) arrCacheKeyLst.push(strKey);
    }
    //拿到所有含u-的key
  }
  //        alert(strCacheKeyLst);
  return arrCacheKeyLst;
}

/**
 * 在LocalStorage中查找某前缀的关键字
 * @param strPrefix：前缀
 */
export function SessionStorage_GetKeyByPrefix(strPrefix: string) {
  const arrCacheKeyLst: Array<string> = new Array<string>();
  for (let i = 0; i < sessionStorage.length; i++) {
    const strKey = sessionStorage.key(i);
    if (strKey != null) {
      if (strKey.indexOf(strPrefix) >= 0) arrCacheKeyLst.push(strKey);
    }
    //拿到所有含u-的key
  }
  //        alert(strCacheKeyLst);
  return arrCacheKeyLst;
}
