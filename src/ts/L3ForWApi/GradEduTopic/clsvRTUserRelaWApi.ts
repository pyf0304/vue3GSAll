/**
 * 类名:clsvRTUserRelaWApi
 * 表名:vRTUserRela(01120584)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/10 09:06:33
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
 * 主题用户关系视图(vRTUserRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月10日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vRTUserRela_Controller = 'vRTUserRelaApi';
export const vRTUserRela_ConstructorName = 'vRTUserRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function vRTUserRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsvRTUserRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvRTUserRelaWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(vRTUserRela_Controller, strAction);

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
      const objvRTUserRela = vRTUserRela_GetObjFromJsonObj(returnObj);
      return objvRTUserRela;
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
        vRTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTUserRela_ConstructorName,
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
export async function vRTUserRela_GetObjBymIdCache(
  lngmId: number,
  strUserId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvRTUserRelaWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrvRTUserRelaObjLstCache = await vRTUserRela_GetObjLstCache(strUserId);
  try {
    const arrvRTUserRelaSel = arrvRTUserRelaObjLstCache.filter((x) => x.mId == lngmId);
    let objvRTUserRela: clsvRTUserRelaEN;
    if (arrvRTUserRelaSel.length > 0) {
      objvRTUserRela = arrvRTUserRelaSel[0];
      return objvRTUserRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvRTUserRelaConst = await vRTUserRela_GetObjBymIdAsync(lngmId);
        if (objvRTUserRelaConst != null) {
          vRTUserRela_ReFreshThisCache(strUserId);
          return objvRTUserRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vRTUserRela_ConstructorName,
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
export async function vRTUserRela_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvRTUserRelaWApi.GetObjBymIdlocalStorage)');
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvRTUserRelaEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvRTUserRelaCache: clsvRTUserRelaEN = JSON.parse(strTempObj);
    return objvRTUserRelaCache;
  }
  try {
    const objvRTUserRela = await vRTUserRela_GetObjBymIdAsync(lngmId);
    if (objvRTUserRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objvRTUserRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvRTUserRela;
    }
    return objvRTUserRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vRTUserRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
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
export async function vRTUserRela_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strUserIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strUserIdClassfy) == true) {
    const strMsg = Format('参数:[strUserIdClassfy]不能为空!(In clsvRTUserRelaWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvRTUserRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvRTUserRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvRTUserRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objvRTUserRela = await vRTUserRela_GetObjBymIdCache(lngmId, strUserIdClassfy);
  if (objvRTUserRela == null) return '';
  if (objvRTUserRela.GetFldValue(strOutFldName) == null) return '';
  return objvRTUserRela.GetFldValue(strOutFldName).toString();
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
export function vRTUserRela_SortFunDefa(a: clsvRTUserRelaEN, b: clsvRTUserRelaEN): number {
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
export function vRTUserRela_SortFunDefa2Fld(a: clsvRTUserRelaEN, b: clsvRTUserRelaEN): number {
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
export function vRTUserRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvRTUserRelaEN.con_mId:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return a.mId - b.mId;
        };
      case clsvRTUserRelaEN.con_TopicId:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsvRTUserRelaEN.con_UserId:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsvRTUserRelaEN.con_UpdUserName:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.updUserName == null) return -1;
          if (b.updUserName == null) return 1;
          return a.updUserName.localeCompare(b.updUserName);
        };
      case clsvRTUserRelaEN.con_TopicName:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.topicName == null) return -1;
          if (b.topicName == null) return 1;
          return a.topicName.localeCompare(b.topicName);
        };
      case clsvRTUserRelaEN.con_TopicContent:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.topicContent == null) return -1;
          if (b.topicContent == null) return 1;
          return a.topicContent.localeCompare(b.topicContent);
        };
      case clsvRTUserRelaEN.con_TopicProposePeople:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.topicProposePeople == null) return -1;
          if (b.topicProposePeople == null) return 1;
          return a.topicProposePeople.localeCompare(b.topicProposePeople);
        };
      case clsvRTUserRelaEN.con_UserName:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.userName == null) return -1;
          if (b.userName == null) return 1;
          return a.userName.localeCompare(b.userName);
        };
      case clsvRTUserRelaEN.con_IdXzCollege:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.idXzCollege == null) return -1;
          if (b.idXzCollege == null) return 1;
          return a.idXzCollege.localeCompare(b.idXzCollege);
        };
      case clsvRTUserRelaEN.con_CollegeName:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.collegeName == null) return -1;
          if (b.collegeName == null) return 1;
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsvRTUserRelaEN.con_IdXzMajor:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.idXzMajor == null) return -1;
          if (b.idXzMajor == null) return 1;
          return a.idXzMajor.localeCompare(b.idXzMajor);
        };
      case clsvRTUserRelaEN.con_MajorName:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.majorName == null) return -1;
          if (b.majorName == null) return 1;
          return a.majorName.localeCompare(b.majorName);
        };
      case clsvRTUserRelaEN.con_TopicUserRoleId:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return a.topicUserRoleId.localeCompare(b.topicUserRoleId);
        };
      case clsvRTUserRelaEN.con_TopicUserRoleName:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.topicUserRoleName == null) return -1;
          if (b.topicUserRoleName == null) return 1;
          return a.topicUserRoleName.localeCompare(b.topicUserRoleName);
        };
      case clsvRTUserRelaEN.con_OrderNum:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvRTUserRelaEN.con_ColorId:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.colorId == null) return -1;
          if (b.colorId == null) return 1;
          return a.colorId.localeCompare(b.colorId);
        };
      case clsvRTUserRelaEN.con_ColorCode:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.colorCode == null) return -1;
          if (b.colorCode == null) return 1;
          return a.colorCode.localeCompare(b.colorCode);
        };
      case clsvRTUserRelaEN.con_UserBgColor:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.userBgColor == null) return -1;
          if (b.userBgColor == null) return 1;
          return a.userBgColor.localeCompare(b.userBgColor);
        };
      case clsvRTUserRelaEN.con_IdCurrEduCls:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvRTUserRelaEN.con_TeaScore:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsvRTUserRelaEN.con_StuScore:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return a.stuScore - b.stuScore;
        };
      case clsvRTUserRelaEN.con_Score:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return a.score - b.score;
        };
      case clsvRTUserRelaEN.con_AppraiseCount:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return a.appraiseCount - b.appraiseCount;
        };
      case clsvRTUserRelaEN.con_OkCount:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return a.okCount - b.okCount;
        };
      case clsvRTUserRelaEN.con_IsSubmit:
        return (a: clsvRTUserRelaEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsvRTUserRelaEN.con_UpdDate:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvRTUserRelaEN.con_UpdUser:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvRTUserRelaEN.con_Memo:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vRTUserRela]中不存在!(in ${vRTUserRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvRTUserRelaEN.con_mId:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return b.mId - a.mId;
        };
      case clsvRTUserRelaEN.con_TopicId:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsvRTUserRelaEN.con_UserId:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsvRTUserRelaEN.con_UpdUserName:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.updUserName == null) return -1;
          if (a.updUserName == null) return 1;
          return b.updUserName.localeCompare(a.updUserName);
        };
      case clsvRTUserRelaEN.con_TopicName:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.topicName == null) return -1;
          if (a.topicName == null) return 1;
          return b.topicName.localeCompare(a.topicName);
        };
      case clsvRTUserRelaEN.con_TopicContent:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.topicContent == null) return -1;
          if (a.topicContent == null) return 1;
          return b.topicContent.localeCompare(a.topicContent);
        };
      case clsvRTUserRelaEN.con_TopicProposePeople:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.topicProposePeople == null) return -1;
          if (a.topicProposePeople == null) return 1;
          return b.topicProposePeople.localeCompare(a.topicProposePeople);
        };
      case clsvRTUserRelaEN.con_UserName:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.userName == null) return -1;
          if (a.userName == null) return 1;
          return b.userName.localeCompare(a.userName);
        };
      case clsvRTUserRelaEN.con_IdXzCollege:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.idXzCollege == null) return -1;
          if (a.idXzCollege == null) return 1;
          return b.idXzCollege.localeCompare(a.idXzCollege);
        };
      case clsvRTUserRelaEN.con_CollegeName:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.collegeName == null) return -1;
          if (a.collegeName == null) return 1;
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsvRTUserRelaEN.con_IdXzMajor:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.idXzMajor == null) return -1;
          if (a.idXzMajor == null) return 1;
          return b.idXzMajor.localeCompare(a.idXzMajor);
        };
      case clsvRTUserRelaEN.con_MajorName:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.majorName == null) return -1;
          if (a.majorName == null) return 1;
          return b.majorName.localeCompare(a.majorName);
        };
      case clsvRTUserRelaEN.con_TopicUserRoleId:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return b.topicUserRoleId.localeCompare(a.topicUserRoleId);
        };
      case clsvRTUserRelaEN.con_TopicUserRoleName:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.topicUserRoleName == null) return -1;
          if (a.topicUserRoleName == null) return 1;
          return b.topicUserRoleName.localeCompare(a.topicUserRoleName);
        };
      case clsvRTUserRelaEN.con_OrderNum:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvRTUserRelaEN.con_ColorId:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.colorId == null) return -1;
          if (a.colorId == null) return 1;
          return b.colorId.localeCompare(a.colorId);
        };
      case clsvRTUserRelaEN.con_ColorCode:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.colorCode == null) return -1;
          if (a.colorCode == null) return 1;
          return b.colorCode.localeCompare(a.colorCode);
        };
      case clsvRTUserRelaEN.con_UserBgColor:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.userBgColor == null) return -1;
          if (a.userBgColor == null) return 1;
          return b.userBgColor.localeCompare(a.userBgColor);
        };
      case clsvRTUserRelaEN.con_IdCurrEduCls:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvRTUserRelaEN.con_TeaScore:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsvRTUserRelaEN.con_StuScore:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return b.stuScore - a.stuScore;
        };
      case clsvRTUserRelaEN.con_Score:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return b.score - a.score;
        };
      case clsvRTUserRelaEN.con_AppraiseCount:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return b.appraiseCount - a.appraiseCount;
        };
      case clsvRTUserRelaEN.con_OkCount:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          return b.okCount - a.okCount;
        };
      case clsvRTUserRelaEN.con_IsSubmit:
        return (b: clsvRTUserRelaEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsvRTUserRelaEN.con_UpdDate:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvRTUserRelaEN.con_UpdUser:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvRTUserRelaEN.con_Memo:
        return (a: clsvRTUserRelaEN, b: clsvRTUserRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vRTUserRela]中不存在!(in ${vRTUserRela_ConstructorName}.${strThisFuncName})`;
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
export async function vRTUserRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvRTUserRelaEN.con_mId:
      return (obj: clsvRTUserRelaEN) => {
        return obj.mId === value;
      };
    case clsvRTUserRelaEN.con_TopicId:
      return (obj: clsvRTUserRelaEN) => {
        return obj.topicId === value;
      };
    case clsvRTUserRelaEN.con_UserId:
      return (obj: clsvRTUserRelaEN) => {
        return obj.userId === value;
      };
    case clsvRTUserRelaEN.con_UpdUserName:
      return (obj: clsvRTUserRelaEN) => {
        return obj.updUserName === value;
      };
    case clsvRTUserRelaEN.con_TopicName:
      return (obj: clsvRTUserRelaEN) => {
        return obj.topicName === value;
      };
    case clsvRTUserRelaEN.con_TopicContent:
      return (obj: clsvRTUserRelaEN) => {
        return obj.topicContent === value;
      };
    case clsvRTUserRelaEN.con_TopicProposePeople:
      return (obj: clsvRTUserRelaEN) => {
        return obj.topicProposePeople === value;
      };
    case clsvRTUserRelaEN.con_UserName:
      return (obj: clsvRTUserRelaEN) => {
        return obj.userName === value;
      };
    case clsvRTUserRelaEN.con_IdXzCollege:
      return (obj: clsvRTUserRelaEN) => {
        return obj.idXzCollege === value;
      };
    case clsvRTUserRelaEN.con_CollegeName:
      return (obj: clsvRTUserRelaEN) => {
        return obj.collegeName === value;
      };
    case clsvRTUserRelaEN.con_IdXzMajor:
      return (obj: clsvRTUserRelaEN) => {
        return obj.idXzMajor === value;
      };
    case clsvRTUserRelaEN.con_MajorName:
      return (obj: clsvRTUserRelaEN) => {
        return obj.majorName === value;
      };
    case clsvRTUserRelaEN.con_TopicUserRoleId:
      return (obj: clsvRTUserRelaEN) => {
        return obj.topicUserRoleId === value;
      };
    case clsvRTUserRelaEN.con_TopicUserRoleName:
      return (obj: clsvRTUserRelaEN) => {
        return obj.topicUserRoleName === value;
      };
    case clsvRTUserRelaEN.con_OrderNum:
      return (obj: clsvRTUserRelaEN) => {
        return obj.orderNum === value;
      };
    case clsvRTUserRelaEN.con_ColorId:
      return (obj: clsvRTUserRelaEN) => {
        return obj.colorId === value;
      };
    case clsvRTUserRelaEN.con_ColorCode:
      return (obj: clsvRTUserRelaEN) => {
        return obj.colorCode === value;
      };
    case clsvRTUserRelaEN.con_UserBgColor:
      return (obj: clsvRTUserRelaEN) => {
        return obj.userBgColor === value;
      };
    case clsvRTUserRelaEN.con_IdCurrEduCls:
      return (obj: clsvRTUserRelaEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvRTUserRelaEN.con_TeaScore:
      return (obj: clsvRTUserRelaEN) => {
        return obj.teaScore === value;
      };
    case clsvRTUserRelaEN.con_StuScore:
      return (obj: clsvRTUserRelaEN) => {
        return obj.stuScore === value;
      };
    case clsvRTUserRelaEN.con_Score:
      return (obj: clsvRTUserRelaEN) => {
        return obj.score === value;
      };
    case clsvRTUserRelaEN.con_AppraiseCount:
      return (obj: clsvRTUserRelaEN) => {
        return obj.appraiseCount === value;
      };
    case clsvRTUserRelaEN.con_OkCount:
      return (obj: clsvRTUserRelaEN) => {
        return obj.okCount === value;
      };
    case clsvRTUserRelaEN.con_IsSubmit:
      return (obj: clsvRTUserRelaEN) => {
        return obj.isSubmit === value;
      };
    case clsvRTUserRelaEN.con_UpdDate:
      return (obj: clsvRTUserRelaEN) => {
        return obj.updDate === value;
      };
    case clsvRTUserRelaEN.con_UpdUser:
      return (obj: clsvRTUserRelaEN) => {
        return obj.updUser === value;
      };
    case clsvRTUserRelaEN.con_Memo:
      return (obj: clsvRTUserRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vRTUserRela]中不存在!(in ${vRTUserRela_ConstructorName}.${strThisFuncName})`;
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
export async function vRTUserRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strUserIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strUserIdClassfy) == true) {
    const strMsg = Format('参数:[strUserIdClassfy]不能为空!(In clsvRTUserRelaWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvRTUserRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvRTUserRela = await vRTUserRela_GetObjLstCache(strUserIdClassfy);
  if (arrvRTUserRela == null) return [];
  let arrvRTUserRelaSel = arrvRTUserRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvRTUserRelaSel.length == 0) return [];
  return arrvRTUserRelaSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vRTUserRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vRTUserRela_Controller, strAction);

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
        vRTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTUserRela_ConstructorName,
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
export async function vRTUserRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vRTUserRela_Controller, strAction);

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
        vRTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTUserRela_ConstructorName,
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
export async function vRTUserRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvRTUserRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vRTUserRela_Controller, strAction);

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
      const objvRTUserRela = vRTUserRela_GetObjFromJsonObj(returnObj);
      return objvRTUserRela;
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
        vRTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTUserRela_ConstructorName,
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
export async function vRTUserRela_GetObjLstClientCache(strUserId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvRTUserRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsvRTUserRelaEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("UserId='{0}'", strUserId);
  }
  const strKey = Format('{0}_{1}', clsvRTUserRelaEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsvRTUserRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTUserRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvRTUserRelaExObjLstCache: Array<clsvRTUserRelaEN> = CacheHelper.Get(strKey);
    const arrvRTUserRelaObjLstT = vRTUserRela_GetObjLstByJSONObjLst(arrvRTUserRelaExObjLstCache);
    return arrvRTUserRelaObjLstT;
  }
  try {
    const arrvRTUserRelaExObjLst = await vRTUserRela_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvRTUserRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTUserRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTUserRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTUserRela_ConstructorName,
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
export async function vRTUserRela_GetObjLstlocalStorage(strUserId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvRTUserRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsvRTUserRelaEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvRTUserRelaEN.con_UserId, strUserId);
  }
  const strKey = Format('{0}_{1}', clsvRTUserRelaEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsvRTUserRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTUserRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvRTUserRelaExObjLstCache: Array<clsvRTUserRelaEN> = JSON.parse(strTempObjLst);
    const arrvRTUserRelaObjLstT = vRTUserRela_GetObjLstByJSONObjLst(arrvRTUserRelaExObjLstCache);
    return arrvRTUserRelaObjLstT;
  }
  try {
    const arrvRTUserRelaExObjLst = await vRTUserRela_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvRTUserRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTUserRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTUserRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTUserRela_ConstructorName,
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
export async function vRTUserRela_GetObjLstlocalStoragePureCache(strUserId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvRTUserRelaEN._CurrTabName, strUserId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvRTUserRelaObjLstCache: Array<clsvRTUserRelaEN> = JSON.parse(strTempObjLst);
    return arrvRTUserRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vRTUserRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvRTUserRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vRTUserRela_Controller, strAction);

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
          vRTUserRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTUserRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTUserRela_ConstructorName,
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
export async function vRTUserRela_GetObjLstsessionStorage(strUserId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvRTUserRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsvRTUserRelaEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvRTUserRelaEN.con_UserId, strUserId);
  }
  const strKey = Format('{0}_{1}', clsvRTUserRelaEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsvRTUserRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTUserRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvRTUserRelaExObjLstCache: Array<clsvRTUserRelaEN> = JSON.parse(strTempObjLst);
    const arrvRTUserRelaObjLstT = vRTUserRela_GetObjLstByJSONObjLst(arrvRTUserRelaExObjLstCache);
    return arrvRTUserRelaObjLstT;
  }
  try {
    const arrvRTUserRelaExObjLst = await vRTUserRela_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvRTUserRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTUserRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTUserRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTUserRela_ConstructorName,
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
export async function vRTUserRela_GetObjLstsessionStoragePureCache(strUserId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvRTUserRelaEN._CurrTabName, strUserId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvRTUserRelaObjLstCache: Array<clsvRTUserRelaEN> = JSON.parse(strTempObjLst);
    return arrvRTUserRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vRTUserRela_GetObjLstCache(
  strUserId: string,
): Promise<Array<clsvRTUserRelaEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format(
      '参数:[strUserId]不能为空！(In clsvRTUserRelaWApi.vRTUserRela_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvRTUserRelaObjLstCache;
  switch (clsvRTUserRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrvRTUserRelaObjLstCache = await vRTUserRela_GetObjLstsessionStorage(strUserId);
      break;
    case '03': //localStorage
      arrvRTUserRelaObjLstCache = await vRTUserRela_GetObjLstlocalStorage(strUserId);
      break;
    case '02': //ClientCache
      arrvRTUserRelaObjLstCache = await vRTUserRela_GetObjLstClientCache(strUserId);
      break;
    default:
      arrvRTUserRelaObjLstCache = await vRTUserRela_GetObjLstClientCache(strUserId);
      break;
  }
  return arrvRTUserRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vRTUserRela_GetObjLstPureCache(strUserId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvRTUserRelaObjLstCache;
  switch (clsvRTUserRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrvRTUserRelaObjLstCache = await vRTUserRela_GetObjLstsessionStoragePureCache(strUserId);
      break;
    case '03': //localStorage
      arrvRTUserRelaObjLstCache = await vRTUserRela_GetObjLstlocalStoragePureCache(strUserId);
      break;
    case '02': //ClientCache
      arrvRTUserRelaObjLstCache = null;
      break;
    default:
      arrvRTUserRelaObjLstCache = null;
      break;
  }
  return arrvRTUserRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vRTUserRela_GetSubObjLstCache(
  objvRTUserRelaCond: clsvRTUserRelaEN,
  strUserId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvRTUserRelaObjLstCache = await vRTUserRela_GetObjLstCache(strUserId);
  let arrvRTUserRelaSel = arrvRTUserRelaObjLstCache;
  if (objvRTUserRelaCond.sfFldComparisonOp == null || objvRTUserRelaCond.sfFldComparisonOp == '')
    return arrvRTUserRelaSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTUserRelaCond.sfFldComparisonOp,
  );
  //console.log("clsvRTUserRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTUserRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTUserRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvRTUserRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvRTUserRelaCond),
      vRTUserRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvRTUserRelaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function vRTUserRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsvRTUserRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(vRTUserRela_Controller, strAction);

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
          vRTUserRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTUserRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTUserRela_ConstructorName,
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
export async function vRTUserRela_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strUserId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrvRTUserRelaObjLstCache = await vRTUserRela_GetObjLstCache(strUserId);
    const arrvRTUserRelaSel = arrvRTUserRelaObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrvRTUserRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      vRTUserRela_ConstructorName,
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
export async function vRTUserRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvRTUserRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vRTUserRela_Controller, strAction);

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
          vRTUserRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTUserRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTUserRela_ConstructorName,
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
export async function vRTUserRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvRTUserRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vRTUserRela_Controller, strAction);

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
          vRTUserRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTUserRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTUserRela_ConstructorName,
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
export async function vRTUserRela_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strUserId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvRTUserRelaEN>();
  const arrvRTUserRelaObjLstCache = await vRTUserRela_GetObjLstCache(strUserId);
  if (arrvRTUserRelaObjLstCache.length == 0) return arrvRTUserRelaObjLstCache;
  let arrvRTUserRelaSel = arrvRTUserRelaObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvRTUserRelaCond = new clsvRTUserRelaEN();
  ObjectAssign(objvRTUserRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvRTUserRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTUserRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvRTUserRelaSel.length == 0) return arrvRTUserRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvRTUserRelaSel = arrvRTUserRelaSel.sort(vRTUserRela_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvRTUserRelaSel = arrvRTUserRelaSel.sort(objPagerPara.sortFun);
    }
    arrvRTUserRelaSel = arrvRTUserRelaSel.slice(intStart, intEnd);
    return arrvRTUserRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vRTUserRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvRTUserRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vRTUserRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvRTUserRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvRTUserRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vRTUserRela_Controller, strAction);

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
          vRTUserRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTUserRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTUserRela_ConstructorName,
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
export async function vRTUserRela_IsExistRecordCache(
  objvRTUserRelaCond: clsvRTUserRelaEN,
  strUserId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvRTUserRelaObjLstCache = await vRTUserRela_GetObjLstCache(strUserId);
  if (arrvRTUserRelaObjLstCache == null) return false;
  let arrvRTUserRelaSel = arrvRTUserRelaObjLstCache;
  if (objvRTUserRelaCond.sfFldComparisonOp == null || objvRTUserRelaCond.sfFldComparisonOp == '')
    return arrvRTUserRelaSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTUserRelaCond.sfFldComparisonOp,
  );
  //console.log("clsvRTUserRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTUserRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTUserRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvRTUserRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvRTUserRelaCond),
      vRTUserRela_ConstructorName,
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
export async function vRTUserRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vRTUserRela_Controller, strAction);

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
        vRTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTUserRela_ConstructorName,
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
export async function vRTUserRela_IsExistCache(lngmId: number, strUserId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvRTUserRelaObjLstCache = await vRTUserRela_GetObjLstCache(strUserId);
  if (arrvRTUserRelaObjLstCache == null) return false;
  try {
    const arrvRTUserRelaSel = arrvRTUserRelaObjLstCache.filter((x) => x.mId == lngmId);
    if (arrvRTUserRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      vRTUserRela_ConstructorName,
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
export async function vRTUserRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vRTUserRela_Controller, strAction);

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
        vRTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTUserRela_ConstructorName,
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
export async function vRTUserRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vRTUserRela_Controller, strAction);

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
        vRTUserRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTUserRela_ConstructorName,
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
 * @param objvRTUserRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function vRTUserRela_GetRecCountByCondCache(
  objvRTUserRelaCond: clsvRTUserRelaEN,
  strUserId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvRTUserRelaObjLstCache = await vRTUserRela_GetObjLstCache(strUserId);
  if (arrvRTUserRelaObjLstCache == null) return 0;
  let arrvRTUserRelaSel = arrvRTUserRelaObjLstCache;
  if (objvRTUserRelaCond.sfFldComparisonOp == null || objvRTUserRelaCond.sfFldComparisonOp == '')
    return arrvRTUserRelaSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTUserRelaCond.sfFldComparisonOp,
  );
  //console.log("clsvRTUserRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTUserRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTUserRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvRTUserRelaSel = arrvRTUserRelaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvRTUserRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvRTUserRelaCond),
      vRTUserRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vRTUserRela_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vRTUserRela_ReFreshThisCache(strUserId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvRTUserRelaEN._CurrTabName, strUserId);
    switch (clsvRTUserRelaEN.CacheModeId) {
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
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vRTUserRela_GetJSONStrByObj(pobjvRTUserRelaEN: clsvRTUserRelaEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvRTUserRelaEN);
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
export function vRTUserRela_GetObjLstByJSONStr(strJSON: string): Array<clsvRTUserRelaEN> {
  let arrvRTUserRelaObjLst = new Array<clsvRTUserRelaEN>();
  if (strJSON === '') {
    return arrvRTUserRelaObjLst;
  }
  try {
    arrvRTUserRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvRTUserRelaObjLst;
  }
  return arrvRTUserRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvRTUserRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vRTUserRela_GetObjLstByJSONObjLst(
  arrvRTUserRelaObjLstS: Array<clsvRTUserRelaEN>,
): Array<clsvRTUserRelaEN> {
  const arrvRTUserRelaObjLst = new Array<clsvRTUserRelaEN>();
  for (const objInFor of arrvRTUserRelaObjLstS) {
    const obj1 = vRTUserRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvRTUserRelaObjLst.push(obj1);
  }
  return arrvRTUserRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vRTUserRela_GetObjByJSONStr(strJSON: string): clsvRTUserRelaEN {
  let pobjvRTUserRelaEN = new clsvRTUserRelaEN();
  if (strJSON === '') {
    return pobjvRTUserRelaEN;
  }
  try {
    pobjvRTUserRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvRTUserRelaEN;
  }
  return pobjvRTUserRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vRTUserRela_GetCombineCondition(objvRTUserRelaCond: clsvRTUserRelaEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTUserRelaEN.con_mId,
      objvRTUserRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_TopicId,
      objvRTUserRelaCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_UserId,
      objvRTUserRelaCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_UpdUserName,
    ) == true
  ) {
    const strComparisonOpUpdUserName: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_UpdUserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_UpdUserName,
      objvRTUserRelaCond.updUserName,
      strComparisonOpUpdUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_TopicName,
    ) == true
  ) {
    const strComparisonOpTopicName: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_TopicName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_TopicName,
      objvRTUserRelaCond.topicName,
      strComparisonOpTopicName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_TopicProposePeople,
    ) == true
  ) {
    const strComparisonOpTopicProposePeople: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_TopicProposePeople];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_TopicProposePeople,
      objvRTUserRelaCond.topicProposePeople,
      strComparisonOpTopicProposePeople,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_UserName,
      objvRTUserRelaCond.userName,
      strComparisonOpUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_IdXzCollege,
    ) == true
  ) {
    const strComparisonOpIdXzCollege: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_IdXzCollege];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_IdXzCollege,
      objvRTUserRelaCond.idXzCollege,
      strComparisonOpIdXzCollege,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_CollegeName,
    ) == true
  ) {
    const strComparisonOpCollegeName: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_CollegeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_CollegeName,
      objvRTUserRelaCond.collegeName,
      strComparisonOpCollegeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_IdXzMajor,
    ) == true
  ) {
    const strComparisonOpIdXzMajor: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_IdXzMajor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_IdXzMajor,
      objvRTUserRelaCond.idXzMajor,
      strComparisonOpIdXzMajor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_MajorName,
    ) == true
  ) {
    const strComparisonOpMajorName: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_MajorName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_MajorName,
      objvRTUserRelaCond.majorName,
      strComparisonOpMajorName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_TopicUserRoleId,
    ) == true
  ) {
    const strComparisonOpTopicUserRoleId: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_TopicUserRoleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_TopicUserRoleId,
      objvRTUserRelaCond.topicUserRoleId,
      strComparisonOpTopicUserRoleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_TopicUserRoleName,
    ) == true
  ) {
    const strComparisonOpTopicUserRoleName: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_TopicUserRoleName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_TopicUserRoleName,
      objvRTUserRelaCond.topicUserRoleName,
      strComparisonOpTopicUserRoleName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTUserRelaEN.con_OrderNum,
      objvRTUserRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_ColorId,
    ) == true
  ) {
    const strComparisonOpColorId: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_ColorId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_ColorId,
      objvRTUserRelaCond.colorId,
      strComparisonOpColorId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_ColorCode,
    ) == true
  ) {
    const strComparisonOpColorCode: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_ColorCode];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_ColorCode,
      objvRTUserRelaCond.colorCode,
      strComparisonOpColorCode,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_UserBgColor,
    ) == true
  ) {
    const strComparisonOpUserBgColor: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_UserBgColor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_UserBgColor,
      objvRTUserRelaCond.userBgColor,
      strComparisonOpUserBgColor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_IdCurrEduCls,
      objvRTUserRelaCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTUserRelaEN.con_TeaScore,
      objvRTUserRelaCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTUserRelaEN.con_StuScore,
      objvRTUserRelaCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTUserRelaEN.con_Score,
      objvRTUserRelaCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_AppraiseCount,
    ) == true
  ) {
    const strComparisonOpAppraiseCount: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_AppraiseCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTUserRelaEN.con_AppraiseCount,
      objvRTUserRelaCond.appraiseCount,
      strComparisonOpAppraiseCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_OkCount,
    ) == true
  ) {
    const strComparisonOpOkCount: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_OkCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTUserRelaEN.con_OkCount,
      objvRTUserRelaCond.okCount,
      strComparisonOpOkCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_IsSubmit,
    ) == true
  ) {
    if (objvRTUserRelaCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvRTUserRelaEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvRTUserRelaEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_UpdDate,
      objvRTUserRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_UpdUser,
      objvRTUserRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTUserRelaCond.dicFldComparisonOp,
      clsvRTUserRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvRTUserRelaCond.dicFldComparisonOp[clsvRTUserRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTUserRelaEN.con_Memo,
      objvRTUserRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvRTUserRelaENS:源对象
 * @param objvRTUserRelaENT:目标对象
 */
export function vRTUserRela_CopyObjTo(
  objvRTUserRelaENS: clsvRTUserRelaEN,
  objvRTUserRelaENT: clsvRTUserRelaEN,
): void {
  objvRTUserRelaENT.mId = objvRTUserRelaENS.mId; //mId
  objvRTUserRelaENT.topicId = objvRTUserRelaENS.topicId; //主题Id
  objvRTUserRelaENT.userId = objvRTUserRelaENS.userId; //用户ID
  objvRTUserRelaENT.updUserName = objvRTUserRelaENS.updUserName; //UpdUserName
  objvRTUserRelaENT.topicName = objvRTUserRelaENS.topicName; //栏目主题
  objvRTUserRelaENT.topicContent = objvRTUserRelaENS.topicContent; //主题内容
  objvRTUserRelaENT.topicProposePeople = objvRTUserRelaENS.topicProposePeople; //主题提出人
  objvRTUserRelaENT.userName = objvRTUserRelaENS.userName; //用户名
  objvRTUserRelaENT.idXzCollege = objvRTUserRelaENS.idXzCollege; //学院流水号
  objvRTUserRelaENT.collegeName = objvRTUserRelaENS.collegeName; //学院名称
  objvRTUserRelaENT.idXzMajor = objvRTUserRelaENS.idXzMajor; //专业流水号
  objvRTUserRelaENT.majorName = objvRTUserRelaENS.majorName; //专业名称
  objvRTUserRelaENT.topicUserRoleId = objvRTUserRelaENS.topicUserRoleId; //主键Id
  objvRTUserRelaENT.topicUserRoleName = objvRTUserRelaENS.topicUserRoleName; //主题用户角色
  objvRTUserRelaENT.orderNum = objvRTUserRelaENS.orderNum; //序号
  objvRTUserRelaENT.colorId = objvRTUserRelaENS.colorId; //颜色Id
  objvRTUserRelaENT.colorCode = objvRTUserRelaENS.colorCode; //颜色码
  objvRTUserRelaENT.userBgColor = objvRTUserRelaENS.userBgColor; //用户段落背景
  objvRTUserRelaENT.idCurrEduCls = objvRTUserRelaENS.idCurrEduCls; //教学班流水号
  objvRTUserRelaENT.teaScore = objvRTUserRelaENS.teaScore; //教师评分
  objvRTUserRelaENT.stuScore = objvRTUserRelaENS.stuScore; //学生平均分
  objvRTUserRelaENT.score = objvRTUserRelaENS.score; //评分
  objvRTUserRelaENT.appraiseCount = objvRTUserRelaENS.appraiseCount; //评论数
  objvRTUserRelaENT.okCount = objvRTUserRelaENS.okCount; //点赞统计
  objvRTUserRelaENT.isSubmit = objvRTUserRelaENS.isSubmit; //是否提交
  objvRTUserRelaENT.updDate = objvRTUserRelaENS.updDate; //修改日期
  objvRTUserRelaENT.updUser = objvRTUserRelaENS.updUser; //修改人
  objvRTUserRelaENT.memo = objvRTUserRelaENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvRTUserRelaENS:源对象
 * @param objvRTUserRelaENT:目标对象
 */
export function vRTUserRela_GetObjFromJsonObj(
  objvRTUserRelaENS: clsvRTUserRelaEN,
): clsvRTUserRelaEN {
  const objvRTUserRelaENT: clsvRTUserRelaEN = new clsvRTUserRelaEN();
  ObjectAssign(objvRTUserRelaENT, objvRTUserRelaENS);
  return objvRTUserRelaENT;
}
