/**
 * 类名:clsvSysCommentWApi
 * 表名:vSysComment(01120624)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:16
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v系统评论表(vSysComment)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月08日.
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
import { clsvSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsvSysCommentEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vSysComment_Controller = 'vSysCommentApi';
export const vSysComment_ConstructorName = 'vSysComment';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCommentId:关键字
 * @returns 对象
 **/
export async function vSysComment_GetObjByCommentIdAsync(
  strCommentId: string,
): Promise<clsvSysCommentEN | null> {
  const strThisFuncName = 'GetObjByCommentIdAsync';

  if (IsNullOrEmpty(strCommentId) == true) {
    const strMsg = Format(
      '参数:[strCommentId]不能为空!(In clsvSysCommentWApi.GetObjByCommentIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCommentId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strCommentId]的长度:[{0}]不正确!(clsvSysCommentWApi.GetObjByCommentIdAsync)',
      strCommentId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCommentId';
  const strUrl = GetWebApiUrl(vSysComment_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCommentId,
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
      const objvSysComment = vSysComment_GetObjFromJsonObj(returnObj);
      return objvSysComment;
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
        vSysComment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysComment_ConstructorName,
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
 * @param strCommentId:所给的关键字
 * @returns 对象
 */
export async function vSysComment_GetObjByCommentIdCache(
  strCommentId: string,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCommentIdCache';

  if (IsNullOrEmpty(strCommentId) == true) {
    const strMsg = Format(
      '参数:[strCommentId]不能为空!(In clsvSysCommentWApi.GetObjByCommentIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCommentId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strCommentId]的长度:[{0}]不正确!(clsvSysCommentWApi.GetObjByCommentIdCache)',
      strCommentId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvSysCommentObjLstCache = await vSysComment_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrvSysCommentSel = arrvSysCommentObjLstCache.filter((x) => x.commentId == strCommentId);
    let objvSysComment: clsvSysCommentEN;
    if (arrvSysCommentSel.length > 0) {
      objvSysComment = arrvSysCommentSel[0];
      return objvSysComment;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvSysCommentConst = await vSysComment_GetObjByCommentIdAsync(strCommentId);
        if (objvSysCommentConst != null) {
          vSysComment_ReFreshThisCache(strIdCurrEduCls);
          return objvSysCommentConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCommentId,
      vSysComment_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCommentId:所给的关键字
 * @returns 对象
 */
export async function vSysComment_GetObjByCommentIdlocalStorage(strCommentId: string) {
  const strThisFuncName = 'GetObjByCommentIdlocalStorage';

  if (IsNullOrEmpty(strCommentId) == true) {
    const strMsg = Format(
      '参数:[strCommentId]不能为空!(In clsvSysCommentWApi.GetObjByCommentIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCommentId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strCommentId]的长度:[{0}]不正确!(clsvSysCommentWApi.GetObjByCommentIdlocalStorage)',
      strCommentId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvSysCommentEN._CurrTabName, strCommentId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvSysCommentCache: clsvSysCommentEN = JSON.parse(strTempObj);
    return objvSysCommentCache;
  }
  try {
    const objvSysComment = await vSysComment_GetObjByCommentIdAsync(strCommentId);
    if (objvSysComment != null) {
      localStorage.setItem(strKey, JSON.stringify(objvSysComment));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvSysComment;
    }
    return objvSysComment;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCommentId,
      vSysComment_ConstructorName,
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
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vSysComment_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsvSysCommentWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvSysCommentWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvSysCommentEN.con_CommentId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvSysCommentEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvSysCommentEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCommentId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvSysComment = await vSysComment_GetObjByCommentIdCache(
    strCommentId,
    strIdCurrEduClsClassfy,
  );
  if (objvSysComment == null) return '';
  if (objvSysComment.GetFldValue(strOutFldName) == null) return '';
  return objvSysComment.GetFldValue(strOutFldName).toString();
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
export function vSysComment_SortFunDefa(a: clsvSysCommentEN, b: clsvSysCommentEN): number {
  return a.commentId.localeCompare(b.commentId);
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
export function vSysComment_SortFunDefa2Fld(a: clsvSysCommentEN, b: clsvSysCommentEN): number {
  if (a.comment == b.comment) return a.score - b.score;
  else return a.comment.localeCompare(b.comment);
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
export function vSysComment_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvSysCommentEN.con_CommentId:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          return a.commentId.localeCompare(b.commentId);
        };
      case clsvSysCommentEN.con_Comment:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (a.comment == null) return -1;
          if (b.comment == null) return 1;
          return a.comment.localeCompare(b.comment);
        };
      case clsvSysCommentEN.con_Score:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          return a.score - b.score;
        };
      case clsvSysCommentEN.con_CommentTypeId:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          return a.commentTypeId.localeCompare(b.commentTypeId);
        };
      case clsvSysCommentEN.con_ScoreType:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (a.scoreType == null) return -1;
          if (b.scoreType == null) return 1;
          return a.scoreType.localeCompare(b.scoreType);
        };
      case clsvSysCommentEN.con_ParentId:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          return a.parentId.localeCompare(b.parentId);
        };
      case clsvSysCommentEN.con_TableKey:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (a.tableKey == null) return -1;
          if (b.tableKey == null) return 1;
          return a.tableKey.localeCompare(b.tableKey);
        };
      case clsvSysCommentEN.con_UpdUser:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvSysCommentEN.con_UpdDate:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvSysCommentEN.con_Memo:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvSysCommentEN.con_CommentTypeName:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (a.commentTypeName == null) return -1;
          if (b.commentTypeName == null) return 1;
          return a.commentTypeName.localeCompare(b.commentTypeName);
        };
      case clsvSysCommentEN.con_CommentTable:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (a.commentTable == null) return -1;
          if (b.commentTable == null) return 1;
          return a.commentTable.localeCompare(b.commentTable);
        };
      case clsvSysCommentEN.con_CommentTableId:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (a.commentTableId == null) return -1;
          if (b.commentTableId == null) return 1;
          return a.commentTableId.localeCompare(b.commentTableId);
        };
      case clsvSysCommentEN.con_OkCount:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          return a.okCount - b.okCount;
        };
      case clsvSysCommentEN.con_PubParentId:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (a.pubParentId == null) return -1;
          if (b.pubParentId == null) return 1;
          return a.pubParentId.localeCompare(b.pubParentId);
        };
      case clsvSysCommentEN.con_IdCurrEduCls:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvSysCommentEN.con_UserId:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vSysComment]中不存在!(in ${vSysComment_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvSysCommentEN.con_CommentId:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          return b.commentId.localeCompare(a.commentId);
        };
      case clsvSysCommentEN.con_Comment:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (b.comment == null) return -1;
          if (a.comment == null) return 1;
          return b.comment.localeCompare(a.comment);
        };
      case clsvSysCommentEN.con_Score:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          return b.score - a.score;
        };
      case clsvSysCommentEN.con_CommentTypeId:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          return b.commentTypeId.localeCompare(a.commentTypeId);
        };
      case clsvSysCommentEN.con_ScoreType:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (b.scoreType == null) return -1;
          if (a.scoreType == null) return 1;
          return b.scoreType.localeCompare(a.scoreType);
        };
      case clsvSysCommentEN.con_ParentId:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          return b.parentId.localeCompare(a.parentId);
        };
      case clsvSysCommentEN.con_TableKey:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (b.tableKey == null) return -1;
          if (a.tableKey == null) return 1;
          return b.tableKey.localeCompare(a.tableKey);
        };
      case clsvSysCommentEN.con_UpdUser:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvSysCommentEN.con_UpdDate:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvSysCommentEN.con_Memo:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvSysCommentEN.con_CommentTypeName:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (b.commentTypeName == null) return -1;
          if (a.commentTypeName == null) return 1;
          return b.commentTypeName.localeCompare(a.commentTypeName);
        };
      case clsvSysCommentEN.con_CommentTable:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (b.commentTable == null) return -1;
          if (a.commentTable == null) return 1;
          return b.commentTable.localeCompare(a.commentTable);
        };
      case clsvSysCommentEN.con_CommentTableId:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (b.commentTableId == null) return -1;
          if (a.commentTableId == null) return 1;
          return b.commentTableId.localeCompare(a.commentTableId);
        };
      case clsvSysCommentEN.con_OkCount:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          return b.okCount - a.okCount;
        };
      case clsvSysCommentEN.con_PubParentId:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (b.pubParentId == null) return -1;
          if (a.pubParentId == null) return 1;
          return b.pubParentId.localeCompare(a.pubParentId);
        };
      case clsvSysCommentEN.con_IdCurrEduCls:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvSysCommentEN.con_UserId:
        return (a: clsvSysCommentEN, b: clsvSysCommentEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vSysComment]中不存在!(in ${vSysComment_ConstructorName}.${strThisFuncName})`;
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
export async function vSysComment_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvSysCommentEN.con_CommentId:
      return (obj: clsvSysCommentEN) => {
        return obj.commentId === value;
      };
    case clsvSysCommentEN.con_Comment:
      return (obj: clsvSysCommentEN) => {
        return obj.comment === value;
      };
    case clsvSysCommentEN.con_Score:
      return (obj: clsvSysCommentEN) => {
        return obj.score === value;
      };
    case clsvSysCommentEN.con_CommentTypeId:
      return (obj: clsvSysCommentEN) => {
        return obj.commentTypeId === value;
      };
    case clsvSysCommentEN.con_ScoreType:
      return (obj: clsvSysCommentEN) => {
        return obj.scoreType === value;
      };
    case clsvSysCommentEN.con_ParentId:
      return (obj: clsvSysCommentEN) => {
        return obj.parentId === value;
      };
    case clsvSysCommentEN.con_TableKey:
      return (obj: clsvSysCommentEN) => {
        return obj.tableKey === value;
      };
    case clsvSysCommentEN.con_UpdUser:
      return (obj: clsvSysCommentEN) => {
        return obj.updUser === value;
      };
    case clsvSysCommentEN.con_UpdDate:
      return (obj: clsvSysCommentEN) => {
        return obj.updDate === value;
      };
    case clsvSysCommentEN.con_Memo:
      return (obj: clsvSysCommentEN) => {
        return obj.memo === value;
      };
    case clsvSysCommentEN.con_CommentTypeName:
      return (obj: clsvSysCommentEN) => {
        return obj.commentTypeName === value;
      };
    case clsvSysCommentEN.con_CommentTable:
      return (obj: clsvSysCommentEN) => {
        return obj.commentTable === value;
      };
    case clsvSysCommentEN.con_CommentTableId:
      return (obj: clsvSysCommentEN) => {
        return obj.commentTableId === value;
      };
    case clsvSysCommentEN.con_OkCount:
      return (obj: clsvSysCommentEN) => {
        return obj.okCount === value;
      };
    case clsvSysCommentEN.con_PubParentId:
      return (obj: clsvSysCommentEN) => {
        return obj.pubParentId === value;
      };
    case clsvSysCommentEN.con_IdCurrEduCls:
      return (obj: clsvSysCommentEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvSysCommentEN.con_UserId:
      return (obj: clsvSysCommentEN) => {
        return obj.userId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vSysComment]中不存在!(in ${vSysComment_ConstructorName}.${strThisFuncName})`;
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
export async function vSysComment_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsvSysCommentWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvSysCommentWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvSysCommentEN.con_CommentId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvSysComment = await vSysComment_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrvSysComment == null) return [];
  let arrvSysCommentSel = arrvSysComment;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvSysCommentSel = arrvSysCommentSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvSysCommentSel = arrvSysCommentSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvSysCommentSel = arrvSysCommentSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvSysCommentSel = arrvSysCommentSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvSysCommentSel = arrvSysCommentSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvSysCommentSel = arrvSysCommentSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvSysCommentSel = arrvSysCommentSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvSysCommentSel = arrvSysCommentSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvSysCommentSel = arrvSysCommentSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvSysCommentSel = arrvSysCommentSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvSysCommentSel.length == 0) return [];
  return arrvSysCommentSel.map((x) => x.commentId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vSysComment_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vSysComment_Controller, strAction);

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
        vSysComment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysComment_ConstructorName,
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
export async function vSysComment_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vSysComment_Controller, strAction);

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
        vSysComment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysComment_ConstructorName,
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
export async function vSysComment_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvSysCommentEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vSysComment_Controller, strAction);

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
      const objvSysComment = vSysComment_GetObjFromJsonObj(returnObj);
      return objvSysComment;
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
        vSysComment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysComment_ConstructorName,
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
export async function vSysComment_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvSysCommentEN.WhereFormat) == false) {
    strWhereCond = Format(clsvSysCommentEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvSysCommentEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvSysCommentEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSysCommentEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvSysCommentExObjLstCache: Array<clsvSysCommentEN> = CacheHelper.Get(strKey);
    const arrvSysCommentObjLstT = vSysComment_GetObjLstByJSONObjLst(arrvSysCommentExObjLstCache);
    return arrvSysCommentObjLstT;
  }
  try {
    const arrvSysCommentExObjLst = await vSysComment_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvSysCommentExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSysCommentExObjLst.length,
    );
    console.log(strInfo);
    return arrvSysCommentExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSysComment_ConstructorName,
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
export async function vSysComment_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvSysCommentEN.WhereFormat) == false) {
    strWhereCond = Format(clsvSysCommentEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvSysCommentEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvSysCommentEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvSysCommentEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSysCommentEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvSysCommentExObjLstCache: Array<clsvSysCommentEN> = JSON.parse(strTempObjLst);
    const arrvSysCommentObjLstT = vSysComment_GetObjLstByJSONObjLst(arrvSysCommentExObjLstCache);
    return arrvSysCommentObjLstT;
  }
  try {
    const arrvSysCommentExObjLst = await vSysComment_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvSysCommentExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSysCommentExObjLst.length,
    );
    console.log(strInfo);
    return arrvSysCommentExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSysComment_ConstructorName,
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
export async function vSysComment_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvSysCommentEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvSysCommentObjLstCache: Array<clsvSysCommentEN> = JSON.parse(strTempObjLst);
    return arrvSysCommentObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vSysComment_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvSysCommentEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vSysComment_Controller, strAction);

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
          vSysComment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysComment_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysComment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysComment_ConstructorName,
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
export async function vSysComment_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvSysCommentEN.WhereFormat) == false) {
    strWhereCond = Format(clsvSysCommentEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvSysCommentEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvSysCommentEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvSysCommentEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSysCommentEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvSysCommentExObjLstCache: Array<clsvSysCommentEN> = JSON.parse(strTempObjLst);
    const arrvSysCommentObjLstT = vSysComment_GetObjLstByJSONObjLst(arrvSysCommentExObjLstCache);
    return arrvSysCommentObjLstT;
  }
  try {
    const arrvSysCommentExObjLst = await vSysComment_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvSysCommentExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSysCommentExObjLst.length,
    );
    console.log(strInfo);
    return arrvSysCommentExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSysComment_ConstructorName,
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
export async function vSysComment_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvSysCommentEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvSysCommentObjLstCache: Array<clsvSysCommentEN> = JSON.parse(strTempObjLst);
    return arrvSysCommentObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vSysComment_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsvSysCommentEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsvSysCommentWApi.vSysComment_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvSysCommentWApi.vSysComment_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvSysCommentObjLstCache;
  switch (clsvSysCommentEN.CacheModeId) {
    case '04': //sessionStorage
      arrvSysCommentObjLstCache = await vSysComment_GetObjLstsessionStorage(strIdCurrEduCls);
      break;
    case '03': //localStorage
      arrvSysCommentObjLstCache = await vSysComment_GetObjLstlocalStorage(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrvSysCommentObjLstCache = await vSysComment_GetObjLstClientCache(strIdCurrEduCls);
      break;
    default:
      arrvSysCommentObjLstCache = await vSysComment_GetObjLstClientCache(strIdCurrEduCls);
      break;
  }
  return arrvSysCommentObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vSysComment_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvSysCommentObjLstCache;
  switch (clsvSysCommentEN.CacheModeId) {
    case '04': //sessionStorage
      arrvSysCommentObjLstCache = await vSysComment_GetObjLstsessionStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrvSysCommentObjLstCache = await vSysComment_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrvSysCommentObjLstCache = null;
      break;
    default:
      arrvSysCommentObjLstCache = null;
      break;
  }
  return arrvSysCommentObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCommentIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vSysComment_GetSubObjLstCache(
  objvSysCommentCond: clsvSysCommentEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvSysCommentObjLstCache = await vSysComment_GetObjLstCache(strIdCurrEduCls);
  let arrvSysCommentSel = arrvSysCommentObjLstCache;
  if (objvSysCommentCond.sfFldComparisonOp == null || objvSysCommentCond.sfFldComparisonOp == '')
    return arrvSysCommentSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSysCommentCond.sfFldComparisonOp,
  );
  //console.log("clsvSysCommentWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSysCommentCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysCommentCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvSysCommentSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvSysCommentCond),
      vSysComment_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvSysCommentEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCommentId:关键字列表
 * @returns 对象列表
 **/
export async function vSysComment_GetObjLstByCommentIdLstAsync(
  arrCommentId: Array<string>,
): Promise<Array<clsvSysCommentEN>> {
  const strThisFuncName = 'GetObjLstByCommentIdLstAsync';
  const strAction = 'GetObjLstByCommentIdLst';
  const strUrl = GetWebApiUrl(vSysComment_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCommentId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vSysComment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysComment_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysComment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysComment_ConstructorName,
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
 * @param arrstrCommentIdLst:关键字列表
 * @returns 对象列表
 */
export async function vSysComment_GetObjLstByCommentIdLstCache(
  arrCommentIdLst: Array<string>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByCommentIdLstCache';
  try {
    const arrvSysCommentObjLstCache = await vSysComment_GetObjLstCache(strIdCurrEduCls);
    const arrvSysCommentSel = arrvSysCommentObjLstCache.filter(
      (x) => arrCommentIdLst.indexOf(x.commentId) > -1,
    );
    return arrvSysCommentSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCommentIdLst.join(','),
      vSysComment_ConstructorName,
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
export async function vSysComment_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvSysCommentEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vSysComment_Controller, strAction);

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
          vSysComment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysComment_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysComment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysComment_ConstructorName,
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
export async function vSysComment_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvSysCommentEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vSysComment_Controller, strAction);

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
          vSysComment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysComment_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysComment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysComment_ConstructorName,
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
export async function vSysComment_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvSysCommentEN>();
  const arrvSysCommentObjLstCache = await vSysComment_GetObjLstCache(strIdCurrEduCls);
  if (arrvSysCommentObjLstCache.length == 0) return arrvSysCommentObjLstCache;
  let arrvSysCommentSel = arrvSysCommentObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvSysCommentCond = new clsvSysCommentEN();
  ObjectAssign(objvSysCommentCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvSysCommentWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysCommentCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvSysCommentSel.length == 0) return arrvSysCommentSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvSysCommentSel = arrvSysCommentSel.sort(vSysComment_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvSysCommentSel = arrvSysCommentSel.sort(objPagerPara.sortFun);
    }
    arrvSysCommentSel = arrvSysCommentSel.slice(intStart, intEnd);
    return arrvSysCommentSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vSysComment_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvSysCommentEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vSysComment_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvSysCommentEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvSysCommentEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vSysComment_Controller, strAction);

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
          vSysComment_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysComment_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysComment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysComment_ConstructorName,
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
 * @param objstrCommentIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vSysComment_IsExistRecordCache(
  objvSysCommentCond: clsvSysCommentEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvSysCommentObjLstCache = await vSysComment_GetObjLstCache(strIdCurrEduCls);
  if (arrvSysCommentObjLstCache == null) return false;
  let arrvSysCommentSel = arrvSysCommentObjLstCache;
  if (objvSysCommentCond.sfFldComparisonOp == null || objvSysCommentCond.sfFldComparisonOp == '')
    return arrvSysCommentSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSysCommentCond.sfFldComparisonOp,
  );
  //console.log("clsvSysCommentWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSysCommentCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysCommentCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvSysCommentSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvSysCommentCond),
      vSysComment_ConstructorName,
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
export async function vSysComment_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vSysComment_Controller, strAction);

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
        vSysComment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysComment_ConstructorName,
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
 * @param strCommentId:所给的关键字
 * @returns 对象
 */
export async function vSysComment_IsExistCache(strCommentId: string, strIdCurrEduCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvSysCommentObjLstCache = await vSysComment_GetObjLstCache(strIdCurrEduCls);
  if (arrvSysCommentObjLstCache == null) return false;
  try {
    const arrvSysCommentSel = arrvSysCommentObjLstCache.filter((x) => x.commentId == strCommentId);
    if (arrvSysCommentSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCommentId,
      vSysComment_ConstructorName,
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
 * @param strCommentId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vSysComment_IsExistAsync(strCommentId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vSysComment_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCommentId,
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
        vSysComment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysComment_ConstructorName,
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
export async function vSysComment_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vSysComment_Controller, strAction);

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
        vSysComment_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysComment_ConstructorName,
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
 * @param objvSysCommentCond:条件对象
 * @returns 对象列表记录数
 */
export async function vSysComment_GetRecCountByCondCache(
  objvSysCommentCond: clsvSysCommentEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvSysCommentObjLstCache = await vSysComment_GetObjLstCache(strIdCurrEduCls);
  if (arrvSysCommentObjLstCache == null) return 0;
  let arrvSysCommentSel = arrvSysCommentObjLstCache;
  if (objvSysCommentCond.sfFldComparisonOp == null || objvSysCommentCond.sfFldComparisonOp == '')
    return arrvSysCommentSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSysCommentCond.sfFldComparisonOp,
  );
  //console.log("clsvSysCommentWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSysCommentCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysCommentCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvSysCommentSel = arrvSysCommentSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvSysCommentSel = arrvSysCommentSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvSysCommentSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvSysCommentCond),
      vSysComment_ConstructorName,
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
export function vSysComment_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vSysComment_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvSysCommentEN._CurrTabName, strIdCurrEduCls);
    switch (clsvSysCommentEN.CacheModeId) {
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
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vSysComment_GetJSONStrByObj(pobjvSysCommentEN: clsvSysCommentEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvSysCommentEN);
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
export function vSysComment_GetObjLstByJSONStr(strJSON: string): Array<clsvSysCommentEN> {
  let arrvSysCommentObjLst = new Array<clsvSysCommentEN>();
  if (strJSON === '') {
    return arrvSysCommentObjLst;
  }
  try {
    arrvSysCommentObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvSysCommentObjLst;
  }
  return arrvSysCommentObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvSysCommentObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vSysComment_GetObjLstByJSONObjLst(
  arrvSysCommentObjLstS: Array<clsvSysCommentEN>,
): Array<clsvSysCommentEN> {
  const arrvSysCommentObjLst = new Array<clsvSysCommentEN>();
  for (const objInFor of arrvSysCommentObjLstS) {
    const obj1 = vSysComment_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvSysCommentObjLst.push(obj1);
  }
  return arrvSysCommentObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vSysComment_GetObjByJSONStr(strJSON: string): clsvSysCommentEN {
  let pobjvSysCommentEN = new clsvSysCommentEN();
  if (strJSON === '') {
    return pobjvSysCommentEN;
  }
  try {
    pobjvSysCommentEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvSysCommentEN;
  }
  return pobjvSysCommentEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vSysComment_GetCombineCondition(objvSysCommentCond: clsvSysCommentEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_CommentId,
    ) == true
  ) {
    const strComparisonOpCommentId: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_CommentId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_CommentId,
      objvSysCommentCond.commentId,
      strComparisonOpCommentId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_Comment,
    ) == true
  ) {
    const strComparisonOpComment: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_Comment];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_Comment,
      objvSysCommentCond.comment,
      strComparisonOpComment,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvSysCommentEN.con_Score,
      objvSysCommentCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_CommentTypeId,
    ) == true
  ) {
    const strComparisonOpCommentTypeId: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_CommentTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_CommentTypeId,
      objvSysCommentCond.commentTypeId,
      strComparisonOpCommentTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_ScoreType,
    ) == true
  ) {
    const strComparisonOpScoreType: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_ScoreType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_ScoreType,
      objvSysCommentCond.scoreType,
      strComparisonOpScoreType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_ParentId,
    ) == true
  ) {
    const strComparisonOpParentId: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_ParentId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_ParentId,
      objvSysCommentCond.parentId,
      strComparisonOpParentId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_TableKey,
    ) == true
  ) {
    const strComparisonOpTableKey: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_TableKey];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_TableKey,
      objvSysCommentCond.tableKey,
      strComparisonOpTableKey,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_UpdUser,
      objvSysCommentCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_UpdDate,
      objvSysCommentCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_Memo,
      objvSysCommentCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_CommentTypeName,
    ) == true
  ) {
    const strComparisonOpCommentTypeName: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_CommentTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_CommentTypeName,
      objvSysCommentCond.commentTypeName,
      strComparisonOpCommentTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_CommentTable,
    ) == true
  ) {
    const strComparisonOpCommentTable: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_CommentTable];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_CommentTable,
      objvSysCommentCond.commentTable,
      strComparisonOpCommentTable,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_CommentTableId,
    ) == true
  ) {
    const strComparisonOpCommentTableId: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_CommentTableId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_CommentTableId,
      objvSysCommentCond.commentTableId,
      strComparisonOpCommentTableId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_OkCount,
    ) == true
  ) {
    const strComparisonOpOkCount: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_OkCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvSysCommentEN.con_OkCount,
      objvSysCommentCond.okCount,
      strComparisonOpOkCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_PubParentId,
    ) == true
  ) {
    const strComparisonOpPubParentId: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_PubParentId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_PubParentId,
      objvSysCommentCond.pubParentId,
      strComparisonOpPubParentId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_IdCurrEduCls,
      objvSysCommentCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysCommentCond.dicFldComparisonOp,
      clsvSysCommentEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objvSysCommentCond.dicFldComparisonOp[clsvSysCommentEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysCommentEN.con_UserId,
      objvSysCommentCond.userId,
      strComparisonOpUserId,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvSysCommentENS:源对象
 * @param objvSysCommentENT:目标对象
 */
export function vSysComment_CopyObjTo(
  objvSysCommentENS: clsvSysCommentEN,
  objvSysCommentENT: clsvSysCommentEN,
): void {
  objvSysCommentENT.commentId = objvSysCommentENS.commentId; //评论Id
  objvSysCommentENT.comment = objvSysCommentENS.comment; //评论
  objvSysCommentENT.score = objvSysCommentENS.score; //评分
  objvSysCommentENT.commentTypeId = objvSysCommentENS.commentTypeId; //评论类型Id
  objvSysCommentENT.scoreType = objvSysCommentENS.scoreType; //评分类型
  objvSysCommentENT.parentId = objvSysCommentENS.parentId; //父Id
  objvSysCommentENT.tableKey = objvSysCommentENS.tableKey; //表主键
  objvSysCommentENT.updUser = objvSysCommentENS.updUser; //修改人
  objvSysCommentENT.updDate = objvSysCommentENS.updDate; //修改日期
  objvSysCommentENT.memo = objvSysCommentENS.memo; //备注
  objvSysCommentENT.commentTypeName = objvSysCommentENS.commentTypeName; //评论类型名
  objvSysCommentENT.commentTable = objvSysCommentENS.commentTable; //评论表
  objvSysCommentENT.commentTableId = objvSysCommentENS.commentTableId; //评论表Id
  objvSysCommentENT.okCount = objvSysCommentENS.okCount; //点赞统计
  objvSysCommentENT.pubParentId = objvSysCommentENS.pubParentId; //公共父Id
  objvSysCommentENT.idCurrEduCls = objvSysCommentENS.idCurrEduCls; //教学班流水号
  objvSysCommentENT.userId = objvSysCommentENS.userId; //用户ID
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvSysCommentENS:源对象
 * @param objvSysCommentENT:目标对象
 */
export function vSysComment_GetObjFromJsonObj(
  objvSysCommentENS: clsvSysCommentEN,
): clsvSysCommentEN {
  const objvSysCommentENT: clsvSysCommentEN = new clsvSysCommentEN();
  ObjectAssign(objvSysCommentENT, objvSysCommentENS);
  return objvSysCommentENT;
}
