/*-- -- -- -- -- -- -- -- -- -- --
类名:clsUsersWApiEx
表名:Users(01120034)
生成代码版本:2020.06.05.2
生成日期:2020/06/05 19:26:05
生成者:
生成服务器IP:192.168.1.10
工程名称:问卷调查
工程ID:0112
相关数据库:tzar.tpddns.cn,19433EduHigh_Jsie
PrjDataBaseId:0122
模块中文名:用户管理
模块英文名:UserManage
框架-层名:WA_访问层(WA_Access)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/

/// <summary>
/// 用户(Users)
/// (AutoGCLib.WA_Access4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2020年06月05日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

//import * as QQ from "q";
import axios from 'axios';
import {
  Users_GetObjFromJsonObj,
  Users_GetObjLstByJSONObjLst,
  Users_GetSubObjLstCache,
} from '@/ts/L3ForWApi/UserManage/clsUsersWApi';

import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import { GetWebApiUrl, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { GetStrLen } from '@/ts/PubFun/tzPubFun';
import { tzDataType, Format } from '@/ts/PubFun/clsString';


export class clsUsersWApiEx {
  public static mstrController = 'UsersApi';
  public static cacheModeId = '02'; //sessionStorage
  public objUsersEN: clsUsersEN = new clsUsersEN();
  constructor(pobjUsersEN: clsUsersEN) {
    this.objUsersEN = pobjUsersEN;
  }

  /// <summary>
  /// 根据关键字获取相应的记录的对象
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
  /// </summary>
  /// <param name = "strUserId">关键字</param>
  /// <returns>对象</returns>
  public static async GetObjByUserIdAsync(strUserId: string): Promise<clsUsersEN | null> {
    const strThisFuncName = '';
    const strAction = 'GetObjByUserId';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('userId', strUserId);
    // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    try {
      const response = await axios.get(strUrl, {
        params: { userId: strUserId },
      });
      const data = response.data;
      if (data.errorId == 0) {
        const returnObj = data.returnObj;
        if (returnObj == null) {
          return null;
        }
        //console.log(returnObj);
        const objQxUsers = Users_GetObjFromJsonObj(returnObj);
        return objQxUsers;
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 根据关键字获取相关对象, 从缓存中获取.
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_Cache)
  /// </summary>
  /// <param name = "strUserId">所给的关键字</param>
  /// <returns>对象</returns>
  public static async GetObjByUserId_Cache(strUserId: string) {
    const arrUsersObjLst_Cache: Array<clsUsersEN> = await clsUsersWApiEx.GetObjLstAsync('1=1');
    const obj: clsUsersEN = new clsUsersEN();
    try {
      const arrUsers_Sel: Array<clsUsersEN> = arrUsersObjLst_Cache.filter(
        (x) => x.userId == strUserId,
      );
      let objUsers: clsUsersEN;
      if (arrUsers_Sel.length > 0) {
        objUsers = arrUsers_Sel[0];
        return objUsers;
      } else {
        return obj;
      }
    } catch (e:any) {
      const strMsg = `错误:[${e}]. \n根据关键字:[${strUserId}]获取相应的对象不成功!`;
      alert(strMsg);
    }
    return obj;
  }

  /// <summary>
  /// 根据关键字获取相关对象, 从缓存中获取.
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SetCache)
  /// </summary>
  /// <param name = "strUserId">所给的关键字</param>
  /// <returns>对象</returns>
  public static SetCache() {}

  /// <summary>
  /// 根据关键字获取相应的对象
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_WA_CacheAsync)
  /// </summary>
  /// <param name = "strUserId">关键字</param>
  /// <returns>对象</returns>
  public static async GetObjByUserId_WA_CacheAsync(strUserId: string): Promise<clsUsersEN | null> {
    const strThisFuncName = '';
    const strAction = 'GetObjByUserId_Cache';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);

    try {
      const response = await axios.get(strUrl, {
        params: { userId: strUserId },
      });
      const data = response.data;
      if (data.errorId == 0) {
        const returnObj = data.returnObj;
        if (returnObj == null) {
          return null;
        }
        //console.log(returnObj);
        const objQxUsers = Users_GetObjFromJsonObj(returnObj);
        return objQxUsers;
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 根据条件获取相应的记录对象列表
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
  /// </summary>
  /// <param name = "strWhereCond">条件</param>
  /// <returns>返回的第一条记录的关键字值</returns>
  public static async GetFirstIDAsync(strWhereCond: string): Promise<string> {
    const strThisFuncName = '';
    const strAction = 'GetFirstID';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('strWhereCond', strWhereCond);
    // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    try {
      const response = await axios.get(strUrl, {
        params: { strWhereCond },
      });
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 根据条件获取相应的记录对象列表
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
  /// </summary>
  /// <param name = "strWhereCond">条件</param>
  /// <returns>获取的相应对象</returns>
  public static async GetFirstObjAsync(strWhereCond: string): Promise<clsUsersEN | null> {
    const strThisFuncName = '';
    const strAction = 'GetFirstObj';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('strWhereCond', strWhereCond);
    // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    try {
      const response = await axios.get(strUrl, {
        params: { strWhereCond },
      });
      const data = response.data;
      if (data.errorId == 0) {
        const returnObj = data.returnObj;
        if (returnObj == null) {
          return null;
        }
        //console.log(returnObj);
        const objQxUsers = Users_GetObjFromJsonObj(returnObj);
        return objQxUsers;
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstClientCache)
  /// </summary>
  /// <returns>从本地缓存中获取的对象列表</returns>
  public static async GetObjLstClientCache() {
    //初始化列表缓存
    const strWhereCond = '1=1';
    clsUsersWApiEx.InitListCache();
    const strKey: string = clsUsersEN._CurrTabName;
    if (strKey == '') {
      console.log('关键字为空！不正确');
      throw new Error('关键字为空！不正确');
    }
    if (CacheHelper.Exsits(strKey)) {
      //缓存存在，直接返回
      const arrUsersObjLst_Cache: Array<clsUsersEN> = CacheHelper.Get(strKey);
      return arrUsersObjLst_Cache;
    }
    try {
      const responseText = await clsUsersWApiEx.GetObjLstAsync(strWhereCond);
      const arrUsersObjLst: Array<clsUsersEN> = <Array<clsUsersEN>>responseText;
      CacheHelper.Add(strKey, arrUsersObjLst);
      const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrUsersObjLst.length}!`;
      console.log(strInfo);
      return arrUsersObjLst;
    } catch (e:any) {
      console.log('GetObjLstCache:e');
      console.error(e);
      const strMsg = `从本地缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
      throw strMsg;
    }
  }

  /// <summary>
  /// 根据条件获取相应的记录对象列表
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
  /// </summary>
  /// <param name = "strWhereCond">条件</param>
  /// <returns>获取的相应对象列表</returns>
  public static async GetObjLstAsync(strWhereCond: string): Promise<Array<clsUsersEN>> {
    const strThisFuncName = 'GetObjLstAsync';
    const strAction = 'GetObjLst';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('strWhereCond', strWhereCond);
    // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    try {
      const response = await axios.get(strUrl, {
        params: { strWhereCond },
      });
      const data = response.data;
      if (data.errorId == 0) {
        const returnObjLst = data.returnObjLst;
        if (returnObjLst == null) {
          const strNullInfo = Format(
            '获取数据为null, 请注意!(in {0}.{1})',
            this.mstrController,
            strThisFuncName,
          );
          console.error(strNullInfo);
          throw strNullInfo;
        }
        //console.log(returnObjLst);
        const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstlocalStorage)
  /// </summary>
  /// <returns>从本地缓存中获取的对象列表</returns>
  public static async GetObjLstlocalStorage() {
    //初始化列表缓存
    const strWhereCond = '1=1';
    clsUsersWApiEx.InitListCache();
    const strKey: string = clsUsersEN._CurrTabName;
    if (strKey == '') {
      console.log('关键字为空！不正确');
      throw new Error('关键字为空！不正确');
    }
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      const strTempObjLst: string = localStorage.getItem(strKey) as string;
      const arrUsersObjLst_Cache: Array<clsUsersEN> = JSON.parse(strTempObjLst);
      return arrUsersObjLst_Cache;
    }
    try {
      const responseText = await clsUsersWApiEx.GetObjLstAsync(strWhereCond);
      const arrUsersObjLst: Array<clsUsersEN> = <Array<clsUsersEN>>responseText;
      localStorage.setItem(strKey, JSON.stringify(arrUsersObjLst));
      const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrUsersObjLst.length}!`;
      console.log(strInfo);
      return arrUsersObjLst;
    } catch (e:any) {
      console.log('GetObjLstCachee');
      console.error(e);
      const strMsg = `从本地缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
      throw strMsg;
    }
  }

  /// <summary>
  /// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
  /// </summary>
  /// <returns>从本地缓存中获取的对象列表</returns>
  public static async GetObjLstCacheBak() {
    let arrUsersObjLst_Cache: Array<clsUsersEN>;
    switch (clsUsersWApiEx.cacheModeId) {
      case '04': //sessionStorage
        arrUsersObjLst_Cache = await clsUsersWApiEx.GetObjLstsessionStorage();
        break;
      case '03': //localStorage
        arrUsersObjLst_Cache = await clsUsersWApiEx.GetObjLstlocalStorage();
        break;
      case '02': //ClientCache
        arrUsersObjLst_Cache = await clsUsersWApiEx.GetObjLstClientCache();
        break;
      default:
        arrUsersObjLst_Cache = await clsUsersWApiEx.GetObjLstClientCache();
        break;
    }
    return arrUsersObjLst_Cache;
  }

  /// <summary>
  /// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstsessionStorage)
  /// </summary>
  /// <returns>从本地缓存中获取的对象列表</returns>
  public static async GetObjLstsessionStorage() {
    //初始化列表缓存
    const strWhereCond = '1=1 and isGSuser=1';
    clsUsersWApiEx.InitListCache();
    const strKey: string = clsUsersEN._CurrTabName;
    if (strKey == '') {
      console.log('关键字为空！不正确');
      throw new Error('关键字为空！不正确');
    }
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
      const arrUsersObjLst_Cache: Array<clsUsersEN> = JSON.parse(strTempObjLst);
      return arrUsersObjLst_Cache;
    }
    try {
      const responseText = await clsUsersWApiEx.GetObjLstAsync(strWhereCond);
      const arrUsersObjLst: Array<clsUsersEN> = <Array<clsUsersEN>>responseText;
      sessionStorage.setItem(strKey, JSON.stringify(arrUsersObjLst));
      const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrUsersObjLst.length}!`;
      console.log(strInfo);
      return arrUsersObjLst;
    } catch (e:any) {
      console.log('GetObjLstCachee');
      console.error(e);
      const strMsg = `从缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
      throw strMsg;
    }
  }

  /// <summary>
  /// 获取服务器缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_WA_CacheAsync)
  /// </summary>
  /// <param name = "strWhereCond">条件</param>
  /// <returns>获取的相应对象列表</returns>
  public static async GetObjLst_WA_CacheAsync(): Promise<Array<clsUsersEN>> {
    const strThisFuncName = 'GetObjLst_WA_CacheAsync';
    const strAction = 'GetObjLstCache';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);

    try {
      const response = await axios.get(strUrl, {});
      const data = response.data;
      if (data.errorId == 0) {
        const returnObjLst = data.returnObjLst;
        if (returnObjLst == null) {
          const strNullInfo = Format(
            '获取数据为null, 请注意!(in {0}.{1})',
            this.mstrController,
            strThisFuncName,
          );
          console.error(strNullInfo);
          throw strNullInfo;
        }
        //console.log(returnObjLst);
        const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 根据关键字列表获取相关对象列表
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
  /// </summary>
  /// <param name = "arrUserId">关键字列表</param>
  /// <returns>对象列表</returns>
  public static async GetObjLstByUserIdLstAsync(
    arrUserId: Array<string>,
  ): Promise<Array<clsUsersEN>> {
    const strThisFuncName = 'GetObjLstByUserIdLstAsync';
    const strAction = 'GetObjLstByUserIdLst';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);

    try {
      const response = await axios.post(strUrl, arrUserId);
      const data = response.data;
      if (data.errorId == 0) {
        const returnObjLst = data.returnObjLst;
        if (returnObjLst == null) {
          const strNullInfo = Format(
            '获取数据为null, 请注意!(in {0}.{1})',
            this.mstrController,
            strThisFuncName,
          );
          console.error(strNullInfo);
          throw strNullInfo;
        }
        //console.log(returnObjLst);
        const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 根据关键字列表获取相关对象列表, 从缓存中获取.
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLst_Cache)
  /// </summary>
  /// <param name = "arrstrUserIdLst">关键字列表</param>
  /// <returns>对象列表</returns>
  public static async GetObjLstByUserIdLst_Cache(arrUserIdLst: Array<string>) {
    try {
      const arrUsersObjLst_Cache: Array<clsUsersEN> = await clsUsersWApiEx.GetObjLstAsync('1=1');
      const arrUsers_Sel: Array<clsUsersEN> = arrUsersObjLst_Cache.filter(
        (x) => arrUserIdLst.indexOf(x.userId) > -1,
      );
      return arrUsers_Sel;
    } catch (e:any) {
      const strMsg = `错误:[${e}]. \n根据关键字:[${arrUserIdLst.join(',')}]获取对象列表不成功!`;
      throw new Error(strMsg);
    }
    return new Array<clsUsersEN>();
  }

  /// <summary>
  /// 根据关键字列表获取相关对象列表, 从WebApi缓存中获取
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLst_WA_CacheAsync)
  /// </summary>
  /// <param name = "arrUserId">关键字列表</param>
  /// <returns>对象列表</returns>
  public static async GetObjLstByUserIdLst_WA_CacheAsync(
    arrUserId: Array<string>,
  ): Promise<Array<clsUsersEN>> {
    const strThisFuncName = 'GetObjLstByUserIdLst_WA_CacheAsync';
    const strAction = 'GetObjLstByUserIdLst_Cache';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);

    try {
      const response = await axios.post(strUrl, arrUserId);
      const data = response.data;
      if (data.errorId == 0) {
        const returnObjLst = data.returnObjLst;
        if (returnObjLst == null) {
          const strNullInfo = Format(
            '获取数据为null, 请注意!(in {0}.{1})',
            this.mstrController,
            strThisFuncName,
          );
          console.error(strNullInfo);
          throw strNullInfo;
        }
        //console.log(returnObjLst);
        const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 根据条件获取相应的记录对象列表
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
  /// </summary>
  /// <param name = "objTopPara">获取顶部对象列表的参数对象</param>
  /// <returns>获取的相应对象列表</returns>
  public static async GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsUsersEN>> {
    const strThisFuncName = 'GetTopObjLstAsync';
    const strAction = 'GetTopObjLst';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    try {
      const response = await axios.post(strUrl, objTopPara);
      const data = response.data;
      if (data.errorId == 0) {
        const returnObjLst = data.returnObjLst;
        if (returnObjLst == null) {
          const strNullInfo = Format(
            '获取数据为null, 请注意!(in {0}.{1})',
            this.mstrController,
            strThisFuncName,
          );
          console.error(strNullInfo);
          throw strNullInfo;
        }
        //console.log(returnObjLst);
        const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 根据条件获取相应的记录对象列表
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
  /// </summary>
  /// <param name = "objRangePara">根据范围获取对象列表的参数对象</param>
  /// <returns>获取的相应记录对象列表</returns>
  public static async GetObjLstByRangeAsync(
    objRangePara: stuRangePara,
  ): Promise<Array<clsUsersEN>> {
    const strThisFuncName = 'GetObjLstByRangeAsync';
    const strAction = 'GetObjLstByRange';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    // const mapParam: Dictionary = stuRangePara.GetMapParam(objRangePara);
    // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    try {
      const response = await axios.post(strUrl, objRangePara);
      const data = response.data;
      if (data.errorId == 0) {
        const returnObjLst = data.returnObjLst;
        if (returnObjLst == null) {
          const strNullInfo = Format(
            '获取数据为null, 请注意!(in {0}.{1})',
            this.mstrController,
            strThisFuncName,
          );
          console.error(strNullInfo);
          throw strNullInfo;
        }
        //console.log(returnObjLst);
        const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 根据条件获取相应的记录对象列表
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPager_WA_CacheAsync)
  /// </summary>
  /// <param name = "objPagerPara">分页获取对象列表的参数对象</param>
  /// <returns>获取的相应记录对象列表</returns>
  public static async GetObjLstByPager_WA_CacheAsync(
    objPagerPara: stuPagerPara,
  ): Promise<Array<clsUsersEN>> {
    const strThisFuncName = 'GetObjLstByPager_WA_CacheAsync';
    const strAction = 'GetObjLstByPagerCache';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    // const mapParam: Dictionary = stuPagerPara.GetMapParam(objPagerPara);
    // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    try {
      const response = await axios.post(strUrl, objPagerPara);
      const data = response.data;
      if (data.errorId == 0) {
        const returnObjLst = data.returnObjLst;
        if (returnObjLst == null) {
          const strNullInfo = Format(
            '获取数据为null, 请注意!(in {0}.{1})',
            this.mstrController,
            strThisFuncName,
          );
          console.error(strNullInfo);
          throw strNullInfo;
        }
        //console.log(returnObjLst);
        const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 根据条件获取相应的记录对象列表
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
  /// </summary>
  /// <param name = "objPagerPara">分页获取对象列表的参数对象</param>
  /// <returns>获取的相应记录对象列表</returns>
  public static async GetObjLstByPagerAsync(
    objPagerPara: stuPagerPara,
  ): Promise<Array<clsUsersEN>> {
    const strThisFuncName = 'GetObjLstByPagerAsync';
    const strAction = 'GetObjLstByPager';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);

    try {
      const response = await axios.post(strUrl, objPagerPara);
      const data = response.data;
      if (data.errorId == 0) {
        const returnObjLst = data.returnObjLst;
        if (returnObjLst == null) {
          const strNullInfo = Format(
            '获取数据为null, 请注意!(in {0}.{1})',
            this.mstrController,
            strThisFuncName,
          );
          console.error(strNullInfo);
          throw strNullInfo;
        }
        //console.log(returnObjLst);
        const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 调用WebApi来删除记录
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
  /// </summary>
  /// <param name = "strUserId">关键字</param>
  /// <returns>获取删除的结果</returns>
  public static async DelRecordAsync(strUserId: string): Promise<number> {
    const strThisFuncName = '';
    const strAction = 'DelRecord';
    let strUrl = GetWebApiUrl(this.mstrController, strAction);

    strUrl = Format('{0}?Id={1}', strUrl, strUserId);
    try {
      const response = await axios.delete(strUrl, {
        params: { Id: strUserId },
      });
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 根据关键字列表删除记录
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
  /// </summary>
  /// <param name = "arrUserId">关键字列表</param>
  /// <returns>实际删除记录的个数</returns>
  public static async DelUserssAsync(arrUserId: Array<string>): Promise<number> {
    const strThisFuncName = '';
    const strAction = 'DelUserss';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    try {
      const response = await axios.post(strUrl, arrUserId);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 根据条件删除记录
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
  /// </summary>
  /// <returns>实际删除记录的个数</returns>
  public static async DelUserssByCondAsync(strWhereCond: string): Promise<number> {
    const strThisFuncName = '';
    const strAction = 'DelUserssByCond';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    try {
      const response = await axios.get(strUrl, {
        params: { strWhereCond },
      });
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 调用WebApi来添加记录，数据传递使用JSON串
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
  /// </summary>
  /// <param name = "objUsersEN">需要添加的对象</param>
  /// <returns>获取相应的记录的对象</returns>
  public static async AddNewRecordAsync(objUsersEN: clsUsersEN): Promise<boolean> {
    const strThisFuncName = '';
    let strMsg = '';
    const strAction = 'AddNewRecord';
    if (objUsersEN.userId === null || objUsersEN.userId === '') {
      strMsg = '需要的对象的关键字为空，不能添加!';
      throw strMsg;
    }
    //strIdCurrEduclsstrJSON = JSON.stringify(objUsersEN_Sim);
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    try {
      const response = await axios.post(strUrl, objUsersEN);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }
  /// <summary>
  /// 调用WebApi来添加记录，数据传递使用JSON串
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
  /// </summary>
  /// <param name = "objUsersEN">需要添加的对象</param>
  /// <returns>获取相应的记录的对象</returns>
  public static async AddNewRecordWithMaxIdAsync(objUsersEN: clsUsersEN): Promise<boolean> {
    const strThisFuncName = '';
    // const strMsg = '';
    const strAction = 'AddNewRecordWithMaxId';
    //strIdCurrEduclsstrJSON = JSON.stringify(objUsersEN_Sim);
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    try {
      const response = await axios.post(strUrl, objUsersEN);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字)
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
  /// </summary>
  /// <param name = "objUsersEN">需要添加的表对象</param>
  /// <returns>返回新添加记录的关键字</returns>
  public static async AddNewRecordWithReturnKeyAsync(objUsersEN: clsUsersEN): Promise<string> {
    const strThisFuncName = '';
    const strAction = 'AddNewRecordWithReturnKey';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    try {
      const response = await axios.post(strUrl, objUsersEN);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 调用WebApi来修改记录，数据传递使用JSON串
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
  /// </summary>
  /// <param name = "objUsersEN">需要添加的对象</param>
  /// <returns>获取修改是否成功？</returns>
  public static async UpdateRecordAsync(objUsersEN: clsUsersEN): Promise<boolean> {
    const strThisFuncName = '';
    let strMsg = '';
    const strAction = 'UpdateRecord';
    if (objUsersEN.sfUpdFldSetStr === null || objUsersEN.sfUpdFldSetStr === '') {
      strMsg = `对象(关键字: ${objUsersEN.userId})的【修改字段集】为空，不能修改!`;
      throw strMsg;
    }

    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    try {
      const response = await axios.post(strUrl, objUsersEN);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 根据条件来修改记录
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
  /// </summary>
  /// <param name = "objUsersEN">需要修改的对象</param>
  /// <param name = "strWhereCond">条件串</param>
  /// <returns>返回的第一条记录的关键字值</returns>
  public static async UpdateWithConditionAsync(
    objUsersEN: clsUsersEN,
    strWhereCond: string,
  ): Promise<boolean> {
    const strThisFuncName = '';
    const strAction = 'UpdateWithCondition';
    if (objUsersEN.sfUpdFldSetStr === null || objUsersEN.sfUpdFldSetStr === '') {
      const strMsg = `对象(关键字: ${objUsersEN.userId})的【修改字段集】为空，不能修改!`;
      throw new Error(strMsg);
    }
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('strWhereCond', strWhereCond);
    // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    objUsersEN.whereCond = strWhereCond;
    try {
      const response = await axios.post(strUrl, objUsersEN);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 根据条件获取是否存在相应的记录？
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
  /// </summary>
  /// <param name = "strWhereCond">条件</param>
  /// <returns>是否存在记录？</returns>
  public static async IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
    const strThisFuncName = '';
    const strAction = 'IsExistRecord';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);

    try {
      const response = await axios.get(strUrl, {
        params: { strWhereCond },
      });
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }
  /// <summary>
  /// 根据关键字判断是否存在记录, 从本地缓存中判断.
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExist_Cache)
  /// </summary>
  /// <param name = "strUserId">所给的关键字</param>
  /// <returns>对象</returns>
  public static async IsExist_Cache(strUserId: string) {
    const arrUsersObjLst_Cache: Array<clsUsersEN> = await clsUsersWApiEx.GetObjLstAsync('1=1');
    // const obj: clsUsersEN = new clsUsersEN();
    try {
      const arrUsers_Sel: Array<clsUsersEN> = arrUsersObjLst_Cache.filter(
        (x) => x.userId == strUserId,
      );
      //   let objUsers: clsUsersEN;
      if (arrUsers_Sel.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (e:any) {
      const strMsg = `根据关键字:[${strUserId}]判断是否存在不成功!`;
      alert(strMsg);
    }
    return false;
  }

  /// <summary>
  /// 根据关键字判断是否存在记录
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
  /// </summary>
  /// <param name = "strUserId">关键字</param>
  /// <returns>是否存在?存在返回True</returns>
  public static async IsExistAsync(strUserId: string): Promise<boolean> {
    const strThisFuncName = '';
    //检测记录是否存在
    const strAction = 'IsExist';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('userId', strUserId);
    // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    try {
      const response = await axios.get(strUrl, {
        params: { strUserId },
      });
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 获取某一条件的记录数
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
  /// </summary>
  /// <param name = "strWhereCond">条件</param>
  /// <returns>获取某一条件的记录数</returns>
  public static async GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
    const strThisFuncName = '';
    const strAction = 'GetRecCountByCond';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('strWhereCond', strWhereCond);
    const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    console.log('GetRecCountByCondAsync:strData:');
    console.log(strData);
    try {
      const response = await axios.get(strUrl, {
        params: { strWhereCond },
      });
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }
  /// <summary>
  /// 获取表的最大关键字
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
  /// </summary>
  /// <returns>获取表的最大关键字</returns>
  public static async GetMaxStrIdAsync(): Promise<string> {
    const strThisFuncName = '';
    const strAction = 'GetMaxStrId';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    try {
      const response = await axios.get(strUrl);
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

  /// <summary>
  /// 根据前缀获取当前表关键字值的最大值,再加1,避免重复
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefixAsync)
  /// </summary>
  /// <param name = "mapParam">参数列表</param>
  /// <returns>获取当前表关键字值的最大值</returns>
  public static async GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string> {
    const strThisFuncName = '';
    const strAction = 'GetMaxStrIdByPrefix';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);

    try {
      const response = await axios.get(strUrl, {
        params: { strPrefix },
      });
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
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }


  /// <summary>
  /// 为下拉框获取数据,从表:[Users]中获取
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DdlBind_Cache)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_UserId_Cache2(strDdlName: string, objUsers_Cond: clsUsersEN) {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      const arrObjLst_Sel: Array<clsUsersEN> = await Users_GetSubObjLstCache(objUsers_Cond);
      BindDdl_ObjLst(
        strDdlName,
        arrObjLst_Sel,
        clsUsersEN.con_UserId,
        clsUsersEN.con_UserName,
        '用户',
      );
      console.log('完成BindDdl_UserId!');
    } catch (e:any) {
      const strMsg = `使用缓存对象列表绑定下拉框出错,${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 初始化列表缓存.
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_InitListCache)
  /// </summary>
  public static InitListCache(): void {}

  /// <summary>
  /// 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
  /// </summary>
  public static ReFreshCache(): void {
    const strMsg = `刷新缓存成功！(${clsStackTrace.GetCurrClassFunctionByLevel(
      3,
    )}->${clsStackTrace.GetCurrClassFunctionByLevel(2)}->${clsStackTrace.GetCurrClassFunction()})`;
    console.log(strMsg);
    // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
    const strKey: string = clsUsersEN._CurrTabName;
    switch (clsUsersWApiEx.cacheModeId) {
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

  /// <summary>
  /// 刷新本类中的缓存.
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
  /// </summary>
  public static ReFreshThisCache(): void {
    let strMsg = '';
    if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
      const strKey: string = clsUsersEN._CurrTabName;
      switch (clsUsersWApiEx.cacheModeId) {
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
      (strMsg = `刷新缓存成功！(${clsStackTrace.GetCurrClassFunctionByLevel(
        3,
      )}->${clsStackTrace.GetCurrClassFunctionByLevel(
        2,
      )}->${clsStackTrace.GetCurrClassFunction()})`),
        console.log(strMsg);
    } else {
      strMsg = `刷新缓存已经关闭。(clsSysPara4WebApi.spSetRefreshCacheOn == false)(${clsStackTrace.GetCurrClassFunctionByLevel(
        3,
      )}->${clsStackTrace.GetCurrClassFunctionByLevel(
        2,
      )}->${clsStackTrace.GetCurrClassFunction()})`;
      console.log(strMsg);
    }
  }

  /// <summary>
  /// 绑定基于Web的下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public static async BindDdl_UserId_Cache(strDdlName: string, objUsers_Cond: clsUsersEN) {
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_UserId_Cache');
    const arrObjLst_Sel: Array<clsUsersEN> = await Users_GetSubObjLstCache(objUsers_Cond);
    BindDdl_ObjLst(
      strDdlName,
      arrObjLst_Sel,
      clsUsersEN.con_UserId,
      clsUsersEN.con_UserName,
      '用户',
    );
  }
}
export class clsUsersBL {
  /// <summary>
  /// 静态的对象列表,用于缓存,针对记录较少,作为参数表可以使用
  /// (AutoGCLib.WA_Access4TypeScript:GeneCode)
  /// </summary>
  private arrUsersObjLst_Cache = [];
  /// <summary>
  /// 从缓存中查找失败的次数
  /// (AutoGCLib.WA_Access4TypeScript:GeneCode)
  /// </summary>
  private intFindFailCount = 0;

  /// <summary>
  /// 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
  /// </summary>
  public CheckPropertyNew(pobjUsersEN: clsUsersEN) {
    //检查字段非空， 即数据表要求非常非空的字段，不能为空！
    if (
      null === pobjUsersEN.userName ||
      (null !== pobjUsersEN.userName && pobjUsersEN.userName.toString() === '')
    ) {
      throw new Error('(errid:Watl000058)字段[用户|用户名]不能为空(NULL)!(Users_CheckPropertyNew)');
    }
    if (
      null === pobjUsersEN.userStateId ||
      (null !== pobjUsersEN.userStateId && pobjUsersEN.userStateId.toString() === '')
    ) {
      throw new Error(
        '(errid:Watl000058)字段[用户|用户状态Id]不能为空(NULL)!(Users_CheckPropertyNew)',
      );
    }
    if (
      null === pobjUsersEN.identityId ||
      (null !== pobjUsersEN.identityId && pobjUsersEN.identityId.toString() === '') ||
      (null !== pobjUsersEN.identityId && pobjUsersEN.identityId.toString() === '0')
    ) {
      throw new Error(
        '(errid:Watl000058)字段[用户|身份编号]不能为空(NULL)!(Users_CheckPropertyNew)',
      );
    }
    //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
    if (null !== pobjUsersEN.userId && GetStrLen(pobjUsersEN.userId) > 20) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|用户ID(userId)]的长度不能超过20!值:$(pobjUsersEN.userId)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.userName && GetStrLen(pobjUsersEN.userName) > 30) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|用户名(userName)]的长度不能超过30!值:$(pobjUsersEN.userName)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.departmentId && GetStrLen(pobjUsersEN.departmentId) > 8) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|部门Id(departmentId)]的长度不能超过8!值:$(pobjUsersEN.departmentId)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.userStateId && GetStrLen(pobjUsersEN.userStateId) > 2) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|用户状态Id(userStateId)]的长度不能超过2!值:$(pobjUsersEN.userStateId)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.password && GetStrLen(pobjUsersEN.password) > 20) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|password(password)]的长度不能超过20!值:$(pobjUsersEN.password)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.idSchool && GetStrLen(pobjUsersEN.idSchool) > 4) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|学校编号(idSchool)]的长度不能超过4!值:$(pobjUsersEN.idSchool)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.beginYearMonth && GetStrLen(pobjUsersEN.beginYearMonth) > 8) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|开始年月(beginYearMonth)]的长度不能超过8!值:$(pobjUsersEN.beginYearMonth)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.endYearMonth && GetStrLen(pobjUsersEN.endYearMonth) > 8) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|结束年月(endYearMonth)]的长度不能超过8!值:$(pobjUsersEN.endYearMonth)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.idGradeBase && GetStrLen(pobjUsersEN.idGradeBase) > 4) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|年级流水号(idGradeBase)]的长度不能超过4!值:$(pobjUsersEN.idGradeBase)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.idXzCollege && GetStrLen(pobjUsersEN.idXzCollege) > 4) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|学院流水号(idXzCollege)]的长度不能超过4!值:$(pobjUsersEN.idXzCollege)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.idXzMajor && GetStrLen(pobjUsersEN.idXzMajor) > 8) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|专业流水号(idXzMajor)]的长度不能超过8!值:$(pobjUsersEN.idXzMajor)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.stuIdTeacherId && GetStrLen(pobjUsersEN.stuIdTeacherId) > 20) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|学工号(stuIdTeacherId)]的长度不能超过20!值:$(pobjUsersEN.stuIdTeacherId)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.email && GetStrLen(pobjUsersEN.email) > 100) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|电子邮箱(email)]的长度不能超过100!值:$(pobjUsersEN.email)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.phoneNumber && GetStrLen(pobjUsersEN.phoneNumber) > 15) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|phoneNumber(phoneNumber)]的长度不能超过15!值:$(pobjUsersEN.phoneNumber)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.avatarsPicture && GetStrLen(pobjUsersEN.avatarsPicture) > 100) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|avatarsPicture(avatarsPicture)]的长度不能超过100!值:$(pobjUsersEN.avatarsPicture)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.identityId && GetStrLen(pobjUsersEN.identityId) > 2) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|身份编号(identityId)]的长度不能超过2!值:$(pobjUsersEN.identityId)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.auditDate && GetStrLen(pobjUsersEN.auditDate) > 14) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|auditDate(auditDate)]的长度不能超过14!值:$(pobjUsersEN.auditDate)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.auditUser && GetStrLen(pobjUsersEN.auditUser) > 18) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|auditUser(auditUser)]的长度不能超过18!值:$(pobjUsersEN.auditUser)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.registerDate && GetStrLen(pobjUsersEN.registerDate) > 14) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|registerDate(registerDate)]的长度不能超过14!值:$(pobjUsersEN.registerDate)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.mobilePhone && GetStrLen(pobjUsersEN.mobilePhone) > 20) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|手机(mobilePhone)]的长度不能超过20!值:$(pobjUsersEN.mobilePhone)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.openId && GetStrLen(pobjUsersEN.openId) > 50) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|微信openId(openId)]的长度不能超过50!值:$(pobjUsersEN.openId)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.updDate && GetStrLen(pobjUsersEN.updDate) > 20) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|修改日期(updDate)]的长度不能超过20!值:$(pobjUsersEN.updDate)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.updUser && GetStrLen(pobjUsersEN.updUser) > 20) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|修改人(updUser)]的长度不能超过20!值:$(pobjUsersEN.updUser)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.memo && GetStrLen(pobjUsersEN.memo) > 1000) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|备注(memo)]的长度不能超过1000!值:$(pobjUsersEN.memo)(Users_CheckPropertyNew)',
      );
    }
    if (null !== pobjUsersEN.headPic && GetStrLen(pobjUsersEN.headPic) > 500) {
      throw new Error(
        '(errid:Watl000059)字段[用户(Users)|头像(headPic)]的长度不能超过500!值:$(pobjUsersEN.headPic)(Users_CheckPropertyNew)',
      );
    }
    //检查字段的数据类型是否正确
    if (
      null !== pobjUsersEN.userId &&
      undefined !== pobjUsersEN.userId &&
      tzDataType.isString(pobjUsersEN.userId) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|用户ID(userId)]的值:[$(pobjUsersEN.userId)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.userName &&
      undefined !== pobjUsersEN.userName &&
      tzDataType.isString(pobjUsersEN.userName) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|用户名(userName)]的值:[$(pobjUsersEN.userName)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.departmentId &&
      undefined !== pobjUsersEN.departmentId &&
      tzDataType.isString(pobjUsersEN.departmentId) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|部门Id(departmentId)]的值:[$(pobjUsersEN.departmentId)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.userStateId &&
      undefined !== pobjUsersEN.userStateId &&
      tzDataType.isString(pobjUsersEN.userStateId) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|用户状态Id(userStateId)]的值:[$(pobjUsersEN.userStateId)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.password &&
      undefined !== pobjUsersEN.password &&
      tzDataType.isString(pobjUsersEN.password) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|password(password)]的值:[$(pobjUsersEN.password)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.isGpUser &&
      undefined !== pobjUsersEN.isGpUser &&
      tzDataType.isBoolean(pobjUsersEN.isGpUser) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|是否Gp用户(isGpUser)]的值:[$(pobjUsersEN.isGpUser)], 非法，应该为布尔型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.idSchool &&
      undefined !== pobjUsersEN.idSchool &&
      tzDataType.isString(pobjUsersEN.idSchool) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|学校编号(idSchool)]的值:[$(pobjUsersEN.idSchool)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.beginYearMonth &&
      undefined !== pobjUsersEN.beginYearMonth &&
      tzDataType.isString(pobjUsersEN.beginYearMonth) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|开始年月(beginYearMonth)]的值:[$(pobjUsersEN.beginYearMonth)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.endYearMonth &&
      undefined !== pobjUsersEN.endYearMonth &&
      tzDataType.isString(pobjUsersEN.endYearMonth) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|结束年月(endYearMonth)]的值:[$(pobjUsersEN.endYearMonth)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.idGradeBase &&
      undefined !== pobjUsersEN.idGradeBase &&
      tzDataType.isString(pobjUsersEN.idGradeBase) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|年级流水号(idGradeBase)]的值:[$(pobjUsersEN.idGradeBase)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.idXzCollege &&
      undefined !== pobjUsersEN.idXzCollege &&
      tzDataType.isString(pobjUsersEN.idXzCollege) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|学院流水号(idXzCollege)]的值:[$(pobjUsersEN.idXzCollege)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.idXzMajor &&
      undefined !== pobjUsersEN.idXzMajor &&
      tzDataType.isString(pobjUsersEN.idXzMajor) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|专业流水号(idXzMajor)]的值:[$(pobjUsersEN.idXzMajor)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.isLeaved &&
      undefined !== pobjUsersEN.isLeaved &&
      tzDataType.isBoolean(pobjUsersEN.isLeaved) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|isLeaved(isLeaved)]的值:[$(pobjUsersEN.isLeaved)], 非法，应该为布尔型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.stuIdTeacherId &&
      undefined !== pobjUsersEN.stuIdTeacherId &&
      tzDataType.isString(pobjUsersEN.stuIdTeacherId) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|学工号(stuIdTeacherId)]的值:[$(pobjUsersEN.stuIdTeacherId)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.email &&
      undefined !== pobjUsersEN.email &&
      tzDataType.isString(pobjUsersEN.email) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|电子邮箱(email)]的值:[$(pobjUsersEN.email)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.phoneNumber &&
      undefined !== pobjUsersEN.phoneNumber &&
      tzDataType.isString(pobjUsersEN.phoneNumber) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|phoneNumber(phoneNumber)]的值:[$(pobjUsersEN.phoneNumber)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.avatarsPicture &&
      undefined !== pobjUsersEN.avatarsPicture &&
      tzDataType.isString(pobjUsersEN.avatarsPicture) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|avatarsPicture(avatarsPicture)]的值:[$(pobjUsersEN.avatarsPicture)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.identityId &&
      undefined !== pobjUsersEN.identityId &&
      tzDataType.isString(pobjUsersEN.identityId) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|身份编号(identityId)]的值:[$(pobjUsersEN.identityId)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.auditDate &&
      undefined !== pobjUsersEN.auditDate &&
      tzDataType.isString(pobjUsersEN.auditDate) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|auditDate(auditDate)]的值:[$(pobjUsersEN.auditDate)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.auditUser &&
      undefined !== pobjUsersEN.auditUser &&
      tzDataType.isString(pobjUsersEN.auditUser) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|auditUser(auditUser)]的值:[$(pobjUsersEN.auditUser)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.isAudit &&
      undefined !== pobjUsersEN.isAudit &&
      tzDataType.isBoolean(pobjUsersEN.isAudit) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|是否审核(isAudit)]的值:[$(pobjUsersEN.isAudit)], 非法，应该为布尔型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.isRegister &&
      undefined !== pobjUsersEN.isRegister &&
      tzDataType.isBoolean(pobjUsersEN.isRegister) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|isRegister(isRegister)]的值:[$(pobjUsersEN.isRegister)], 非法，应该为布尔型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.registerDate &&
      undefined !== pobjUsersEN.registerDate &&
      tzDataType.isString(pobjUsersEN.registerDate) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|registerDate(registerDate)]的值:[$(pobjUsersEN.registerDate)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.mobilePhone &&
      undefined !== pobjUsersEN.mobilePhone &&
      tzDataType.isString(pobjUsersEN.mobilePhone) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|手机(mobilePhone)]的值:[$(pobjUsersEN.mobilePhone)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.openId &&
      undefined !== pobjUsersEN.openId &&
      tzDataType.isString(pobjUsersEN.openId) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|微信openId(openId)]的值:[$(pobjUsersEN.openId)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.updDate &&
      undefined !== pobjUsersEN.updDate &&
      tzDataType.isString(pobjUsersEN.updDate) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|修改日期(updDate)]的值:[$(pobjUsersEN.updDate)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.updUser &&
      undefined !== pobjUsersEN.updUser &&
      tzDataType.isString(pobjUsersEN.updUser) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|修改人(updUser)]的值:[$(pobjUsersEN.updUser)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.memo &&
      undefined !== pobjUsersEN.memo &&
      tzDataType.isString(pobjUsersEN.memo) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|备注(memo)]的值:[$(pobjUsersEN.memo)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.headPic &&
      undefined !== pobjUsersEN.headPic &&
      tzDataType.isString(pobjUsersEN.headPic) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|头像(headPic)]的值:[$(pobjUsersEN.headPic)], 非法，应该为字符型!(Users_CheckPropertyNew)',
      );
    }
    if (
      null !== pobjUsersEN.isGSuser &&
      undefined !== pobjUsersEN.isGSuser &&
      tzDataType.isBoolean(pobjUsersEN.isGSuser) === false
    ) {
      throw new Error(
        '(errid:Watl000060)字段[用户(Users)|是否GS用户(isGSuser)]的值:[$(pobjUsersEN.isGSuser)], 非法，应该为布尔型!(Users_CheckPropertyNew)',
      );
    }
    //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！

    //设置说明该对象已经检查过了，后面不需要再检查，即非法！
  }
  /// <summary>
  /// 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
  /// </summary>
  public CheckProperty4Update(pobjUsersEN: clsUsersEN) {
    //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
    if (null !== pobjUsersEN.userId && GetStrLen(pobjUsersEN.userId) > 20) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|用户ID(userId)]的长度不能超过20!值:$(pobjUsersEN.userId)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.userName && GetStrLen(pobjUsersEN.userName) > 30) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|用户名(userName)]的长度不能超过30!值:$(pobjUsersEN.userName)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.departmentId && GetStrLen(pobjUsersEN.departmentId) > 8) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|部门Id(departmentId)]的长度不能超过8!值:$(pobjUsersEN.departmentId)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.userStateId && GetStrLen(pobjUsersEN.userStateId) > 2) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|用户状态Id(userStateId)]的长度不能超过2!值:$(pobjUsersEN.userStateId)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.password && GetStrLen(pobjUsersEN.password) > 20) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|password(password)]的长度不能超过20!值:$(pobjUsersEN.password)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.idSchool && GetStrLen(pobjUsersEN.idSchool) > 4) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|学校编号(idSchool)]的长度不能超过4!值:$(pobjUsersEN.idSchool)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.beginYearMonth && GetStrLen(pobjUsersEN.beginYearMonth) > 8) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|开始年月(beginYearMonth)]的长度不能超过8!值:$(pobjUsersEN.beginYearMonth)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.endYearMonth && GetStrLen(pobjUsersEN.endYearMonth) > 8) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|结束年月(endYearMonth)]的长度不能超过8!值:$(pobjUsersEN.endYearMonth)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.idGradeBase && GetStrLen(pobjUsersEN.idGradeBase) > 4) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|年级流水号(idGradeBase)]的长度不能超过4!值:$(pobjUsersEN.idGradeBase)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.idXzCollege && GetStrLen(pobjUsersEN.idXzCollege) > 4) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|学院流水号(idXzCollege)]的长度不能超过4!值:$(pobjUsersEN.idXzCollege)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.idXzMajor && GetStrLen(pobjUsersEN.idXzMajor) > 8) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|专业流水号(idXzMajor)]的长度不能超过8!值:$(pobjUsersEN.idXzMajor)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.stuIdTeacherId && GetStrLen(pobjUsersEN.stuIdTeacherId) > 20) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|学工号(stuIdTeacherId)]的长度不能超过20!值:$(pobjUsersEN.stuIdTeacherId)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.email && GetStrLen(pobjUsersEN.email) > 100) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|电子邮箱(email)]的长度不能超过100!值:$(pobjUsersEN.email)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.phoneNumber && GetStrLen(pobjUsersEN.phoneNumber) > 15) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|phoneNumber(phoneNumber)]的长度不能超过15!值:$(pobjUsersEN.phoneNumber)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.avatarsPicture && GetStrLen(pobjUsersEN.avatarsPicture) > 100) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|avatarsPicture(avatarsPicture)]的长度不能超过100!值:$(pobjUsersEN.avatarsPicture)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.identityId && GetStrLen(pobjUsersEN.identityId) > 2) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|身份编号(identityId)]的长度不能超过2!值:$(pobjUsersEN.identityId)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.auditDate && GetStrLen(pobjUsersEN.auditDate) > 14) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|auditDate(auditDate)]的长度不能超过14!值:$(pobjUsersEN.auditDate)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.auditUser && GetStrLen(pobjUsersEN.auditUser) > 18) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|auditUser(auditUser)]的长度不能超过18!值:$(pobjUsersEN.auditUser)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.registerDate && GetStrLen(pobjUsersEN.registerDate) > 14) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|registerDate(registerDate)]的长度不能超过14!值:$(pobjUsersEN.registerDate)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.mobilePhone && GetStrLen(pobjUsersEN.mobilePhone) > 20) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|手机(mobilePhone)]的长度不能超过20!值:$(pobjUsersEN.mobilePhone)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.openId && GetStrLen(pobjUsersEN.openId) > 50) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|微信openId(openId)]的长度不能超过50!值:$(pobjUsersEN.openId)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.updDate && GetStrLen(pobjUsersEN.updDate) > 20) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|修改日期(updDate)]的长度不能超过20!值:$(pobjUsersEN.updDate)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.updUser && GetStrLen(pobjUsersEN.updUser) > 20) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|修改人(updUser)]的长度不能超过20!值:$(pobjUsersEN.updUser)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.memo && GetStrLen(pobjUsersEN.memo) > 1000) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|备注(memo)]的长度不能超过1000!值:$(pobjUsersEN.memo)(Users_CheckProperty4Update)',
      );
    }
    if (null !== pobjUsersEN.headPic && GetStrLen(pobjUsersEN.headPic) > 500) {
      throw new Error(
        '(errid:Watl000062)字段[用户(Users)|头像(headPic)]的长度不能超过500!值:$(pobjUsersEN.headPic)(Users_CheckProperty4Update)',
      );
    }
    //检查字段的数据类型是否正确
    if (
      null !== pobjUsersEN.userId &&
      undefined !== pobjUsersEN.userId &&
      tzDataType.isString(pobjUsersEN.userId) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|用户ID(userId)]的值:[$(pobjUsersEN.userId)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.userName &&
      undefined !== pobjUsersEN.userName &&
      tzDataType.isString(pobjUsersEN.userName) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|用户名(userName)]的值:[$(pobjUsersEN.userName)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.departmentId &&
      undefined !== pobjUsersEN.departmentId &&
      tzDataType.isString(pobjUsersEN.departmentId) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|部门Id(departmentId)]的值:[$(pobjUsersEN.departmentId)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.userStateId &&
      undefined !== pobjUsersEN.userStateId &&
      tzDataType.isString(pobjUsersEN.userStateId) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|用户状态Id(userStateId)]的值:[$(pobjUsersEN.userStateId)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.password &&
      undefined !== pobjUsersEN.password &&
      tzDataType.isString(pobjUsersEN.password) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|password(password)]的值:[$(pobjUsersEN.password)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.isGpUser &&
      undefined !== pobjUsersEN.isGpUser &&
      tzDataType.isBoolean(pobjUsersEN.isGpUser) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|是否Gp用户(isGpUser)]的值:[$(pobjUsersEN.isGpUser)], 非法，应该为布尔型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.idSchool &&
      undefined !== pobjUsersEN.idSchool &&
      tzDataType.isString(pobjUsersEN.idSchool) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|学校编号(idSchool)]的值:[$(pobjUsersEN.idSchool)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.beginYearMonth &&
      undefined !== pobjUsersEN.beginYearMonth &&
      tzDataType.isString(pobjUsersEN.beginYearMonth) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|开始年月(beginYearMonth)]的值:[$(pobjUsersEN.beginYearMonth)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.endYearMonth &&
      undefined !== pobjUsersEN.endYearMonth &&
      tzDataType.isString(pobjUsersEN.endYearMonth) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|结束年月(endYearMonth)]的值:[$(pobjUsersEN.endYearMonth)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.idGradeBase &&
      undefined !== pobjUsersEN.idGradeBase &&
      tzDataType.isString(pobjUsersEN.idGradeBase) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|年级流水号(idGradeBase)]的值:[$(pobjUsersEN.idGradeBase)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.idXzCollege &&
      undefined !== pobjUsersEN.idXzCollege &&
      tzDataType.isString(pobjUsersEN.idXzCollege) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|学院流水号(idXzCollege)]的值:[$(pobjUsersEN.idXzCollege)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.idXzMajor &&
      undefined !== pobjUsersEN.idXzMajor &&
      tzDataType.isString(pobjUsersEN.idXzMajor) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|专业流水号(idXzMajor)]的值:[$(pobjUsersEN.idXzMajor)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.isLeaved &&
      undefined !== pobjUsersEN.isLeaved &&
      tzDataType.isBoolean(pobjUsersEN.isLeaved) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|isLeaved(isLeaved)]的值:[$(pobjUsersEN.isLeaved)], 非法，应该为布尔型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.stuIdTeacherId &&
      undefined !== pobjUsersEN.stuIdTeacherId &&
      tzDataType.isString(pobjUsersEN.stuIdTeacherId) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|学工号(stuIdTeacherId)]的值:[$(pobjUsersEN.stuIdTeacherId)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.email &&
      undefined !== pobjUsersEN.email &&
      tzDataType.isString(pobjUsersEN.email) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|电子邮箱(email)]的值:[$(pobjUsersEN.email)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.phoneNumber &&
      undefined !== pobjUsersEN.phoneNumber &&
      tzDataType.isString(pobjUsersEN.phoneNumber) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|phoneNumber(phoneNumber)]的值:[$(pobjUsersEN.phoneNumber)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.avatarsPicture &&
      undefined !== pobjUsersEN.avatarsPicture &&
      tzDataType.isString(pobjUsersEN.avatarsPicture) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|avatarsPicture(avatarsPicture)]的值:[$(pobjUsersEN.avatarsPicture)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.identityId &&
      undefined !== pobjUsersEN.identityId &&
      tzDataType.isString(pobjUsersEN.identityId) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|身份编号(identityId)]的值:[$(pobjUsersEN.identityId)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.auditDate &&
      undefined !== pobjUsersEN.auditDate &&
      tzDataType.isString(pobjUsersEN.auditDate) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|auditDate(auditDate)]的值:[$(pobjUsersEN.auditDate)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.auditUser &&
      undefined !== pobjUsersEN.auditUser &&
      tzDataType.isString(pobjUsersEN.auditUser) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|auditUser(auditUser)]的值:[$(pobjUsersEN.auditUser)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.isAudit &&
      undefined !== pobjUsersEN.isAudit &&
      tzDataType.isBoolean(pobjUsersEN.isAudit) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|是否审核(isAudit)]的值:[$(pobjUsersEN.isAudit)], 非法，应该为布尔型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.isRegister &&
      undefined !== pobjUsersEN.isRegister &&
      tzDataType.isBoolean(pobjUsersEN.isRegister) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|isRegister(isRegister)]的值:[$(pobjUsersEN.isRegister)], 非法，应该为布尔型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.registerDate &&
      undefined !== pobjUsersEN.registerDate &&
      tzDataType.isString(pobjUsersEN.registerDate) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|registerDate(registerDate)]的值:[$(pobjUsersEN.registerDate)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.mobilePhone &&
      undefined !== pobjUsersEN.mobilePhone &&
      tzDataType.isString(pobjUsersEN.mobilePhone) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|手机(mobilePhone)]的值:[$(pobjUsersEN.mobilePhone)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.openId &&
      undefined !== pobjUsersEN.openId &&
      tzDataType.isString(pobjUsersEN.openId) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|微信openId(openId)]的值:[$(pobjUsersEN.openId)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.updDate &&
      undefined !== pobjUsersEN.updDate &&
      tzDataType.isString(pobjUsersEN.updDate) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|修改日期(updDate)]的值:[$(pobjUsersEN.updDate)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.updUser &&
      undefined !== pobjUsersEN.updUser &&
      tzDataType.isString(pobjUsersEN.updUser) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|修改人(updUser)]的值:[$(pobjUsersEN.updUser)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.memo &&
      undefined !== pobjUsersEN.memo &&
      tzDataType.isString(pobjUsersEN.memo) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|备注(memo)]的值:[$(pobjUsersEN.memo)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.headPic &&
      undefined !== pobjUsersEN.headPic &&
      tzDataType.isString(pobjUsersEN.headPic) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|头像(headPic)]的值:[$(pobjUsersEN.headPic)], 非法，应该为字符型!(Users_CheckProperty4Update)',
      );
    }
    if (
      null !== pobjUsersEN.isGSuser &&
      undefined !== pobjUsersEN.isGSuser &&
      tzDataType.isBoolean(pobjUsersEN.isGSuser) === false
    ) {
      throw new Error(
        '(errid:Watl000063)字段[用户(Users)|是否GS用户(isGSuser)]的值:[$(pobjUsersEN.isGSuser)], 非法，应该为布尔型!(Users_CheckProperty4Update)',
      );
    }
    //检查主键是否为Null或者空！
    if (
      null === pobjUsersEN.userId ||
      (null !== pobjUsersEN.userId && pobjUsersEN.userId.toString() === '')
    ) {
      throw new Error(
        '(errid:Watl000064)字段[用户|用户ID]不能为空(NULL)!(Users_CheckProperty4Update)',
      );
    }
    //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！
  }

  /// <summary>
  /// 把一个对象转化为一个JSON串
  /// 作者:
  /// 日期:20200605192605
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
  /// </summary>
  /// <param name = "strJSON">需要转化的JSON串</param>
  /// <returns>返回一个生成的对象</returns>
  public static GetJSONStrByObj(pobjUsersEN: clsUsersEN): string {
    pobjUsersEN.sfUpdFldSetStr = pobjUsersEN.updFldString;
    let strJson;
    // let jsonData;
    try {
      strJson = JSON.stringify(pobjUsersEN);
    } catch (objException: any) {
      //myShowErrorMsg(objException.toString());
    }
    return strJson ?? '';
  }

  /// <summary>
  /// 把一个JSON串转化为一个对象列表
  /// 作者:
  /// 日期:20200605192605
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
  /// </summary>
  /// <param name = "strJSON">需要转化的JSON串</param>
  /// <returns>返回一个生成的对象列表</returns>
  public static GetObjLstByJSONStr(strJSON: string): Array<clsUsersEN> {
    let arrUsersObjLst: Array<clsUsersEN> = [];
    if (strJSON === '') {
      return arrUsersObjLst;
    }
    try {
      arrUsersObjLst = JSON.parse(strJSON);
    } catch (objException) {
      return arrUsersObjLst;
    }
    return arrUsersObjLst;
  }

  /// <summary>
  /// 把一个JSON串转化为一个对象
  /// 作者:
  /// 日期:20200605192605
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
  /// </summary>
  /// <param name = "strJSON">需要转化的JSON串</param>
  /// <returns>返回一个生成的对象</returns>
  public static GetObjByJSONStr(strJSON: string): clsUsersEN {
    let pobjUsersEN = new clsUsersEN();
    if (strJSON === '') {
      return pobjUsersEN;
    }
    try {
      pobjUsersEN = JSON.parse(strJSON);
    } catch (objException) {
      return pobjUsersEN;
    }
    return pobjUsersEN;
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
  /// </summary>
  /// <param name = "objUsersENS">源对象</param>
  /// <param name = "objUsersENT">目标对象</param>
  public static CopyObjTo(objUsersENS: clsUsersEN, objUsersENT: clsUsersEN): void {
    objUsersENT.userId = objUsersENS.userId; //用户ID
    objUsersENT.userName = objUsersENS.userName; //用户名
    objUsersENT.departmentId = objUsersENS.departmentId; //部门Id
    objUsersENT.userStateId = objUsersENS.userStateId; //用户状态Id
    objUsersENT.password = objUsersENS.password; //password
    objUsersENT.isGpUser = objUsersENS.isGpUser; //是否Gp用户
    objUsersENT.idSchool = objUsersENS.idSchool; //学校编号
    objUsersENT.beginYearMonth = objUsersENS.beginYearMonth; //开始年月
    objUsersENT.endYearMonth = objUsersENS.endYearMonth; //结束年月
    objUsersENT.idGradeBase = objUsersENS.idGradeBase; //年级流水号
    objUsersENT.idXzCollege = objUsersENS.idXzCollege; //学院流水号
    objUsersENT.idXzMajor = objUsersENS.idXzMajor; //专业流水号
    objUsersENT.isLeaved = objUsersENS.isLeaved; //isLeaved
    objUsersENT.stuIdTeacherId = objUsersENS.stuIdTeacherId; //学工号
    objUsersENT.email = objUsersENS.email; //电子邮箱
    objUsersENT.phoneNumber = objUsersENS.phoneNumber; //phoneNumber
    objUsersENT.avatarsPicture = objUsersENS.avatarsPicture; //avatarsPicture
    objUsersENT.identityId = objUsersENS.identityId; //身份编号
    objUsersENT.auditDate = objUsersENS.auditDate; //auditDate
    objUsersENT.auditUser = objUsersENS.auditUser; //auditUser
    objUsersENT.isAudit = objUsersENS.isAudit; //是否审核
    objUsersENT.isRegister = objUsersENS.isRegister; //isRegister
    objUsersENT.registerDate = objUsersENS.registerDate; //registerDate
    objUsersENT.mobilePhone = objUsersENS.mobilePhone; //手机
    objUsersENT.openId = objUsersENS.openId; //微信openId
    objUsersENT.updDate = objUsersENS.updDate; //修改日期
    objUsersENT.updUser = objUsersENS.updUser; //修改人
    objUsersENT.memo = objUsersENS.memo; //备注
    objUsersENT.headPic = objUsersENS.headPic; //头像
    objUsersENT.isGSuser = objUsersENS.isGSuser; //是否GS用户
    objUsersENT.sfUpdFldSetStr = objUsersENS.updFldString; //sfUpdFldSetStr
  }
}
