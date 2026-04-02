/**
 * 类名:clsvSysSkillWApi
 * 表名:vSysSkill(01120653)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:00
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
 * 技能表视图(vSysSkill)
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
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSkillEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vSysSkill_Controller = 'vSysSkillApi';
export const vSysSkill_ConstructorName = 'vSysSkill';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSkillId:关键字
 * @returns 对象
 **/
export async function vSysSkill_GetObjBySkillIdAsync(
  strSkillId: string,
): Promise<clsvSysSkillEN | null> {
  const strThisFuncName = 'GetObjBySkillIdAsync';

  if (IsNullOrEmpty(strSkillId) == true) {
    const strMsg = Format('参数:[strSkillId]不能为空!(In clsvSysSkillWApi.GetObjBySkillIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strSkillId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strSkillId]的长度:[{0}]不正确!(clsvSysSkillWApi.GetObjBySkillIdAsync)',
      strSkillId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBySkillId';
  const strUrl = GetWebApiUrl(vSysSkill_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSkillId,
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
      const objvSysSkill = vSysSkill_GetObjFromJsonObj(returnObj);
      return objvSysSkill;
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
        vSysSkill_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysSkill_ConstructorName,
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
 * @param strSkillId:所给的关键字
 * @returns 对象
 */
export async function vSysSkill_GetObjBySkillIdCache(
  strSkillId: string,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBySkillIdCache';

  if (IsNullOrEmpty(strSkillId) == true) {
    const strMsg = Format('参数:[strSkillId]不能为空!(In clsvSysSkillWApi.GetObjBySkillIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strSkillId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strSkillId]的长度:[{0}]不正确!(clsvSysSkillWApi.GetObjBySkillIdCache)',
      strSkillId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvSysSkillObjLstCache = await vSysSkill_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrvSysSkillSel = arrvSysSkillObjLstCache.filter((x) => x.skillId == strSkillId);
    let objvSysSkill: clsvSysSkillEN;
    if (arrvSysSkillSel.length > 0) {
      objvSysSkill = arrvSysSkillSel[0];
      return objvSysSkill;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvSysSkillConst = await vSysSkill_GetObjBySkillIdAsync(strSkillId);
        if (objvSysSkillConst != null) {
          vSysSkill_ReFreshThisCache(strIdCurrEduCls);
          return objvSysSkillConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSkillId,
      vSysSkill_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strSkillId:所给的关键字
 * @returns 对象
 */
export async function vSysSkill_GetObjBySkillIdlocalStorage(strSkillId: string) {
  const strThisFuncName = 'GetObjBySkillIdlocalStorage';

  if (IsNullOrEmpty(strSkillId) == true) {
    const strMsg = Format(
      '参数:[strSkillId]不能为空!(In clsvSysSkillWApi.GetObjBySkillIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSkillId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strSkillId]的长度:[{0}]不正确!(clsvSysSkillWApi.GetObjBySkillIdlocalStorage)',
      strSkillId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvSysSkillEN._CurrTabName, strSkillId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvSysSkillCache: clsvSysSkillEN = JSON.parse(strTempObj);
    return objvSysSkillCache;
  }
  try {
    const objvSysSkill = await vSysSkill_GetObjBySkillIdAsync(strSkillId);
    if (objvSysSkill != null) {
      localStorage.setItem(strKey, JSON.stringify(objvSysSkill));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvSysSkill;
    }
    return objvSysSkill;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSkillId,
      vSysSkill_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strSkillId:所给的关键字
 * @returns 对象
 */
export async function vSysSkill_GetNameBySkillIdCache(strSkillId: string, strIdCurrEduCls: string) {
  if (IsNullOrEmpty(strSkillId) == true) {
    const strMsg = Format('参数:[strSkillId]不能为空!(In clsvSysSkillWApi.GetNameBySkillIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strSkillId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strSkillId]的长度:[{0}]不正确!(clsvSysSkillWApi.GetNameBySkillIdCache)',
      strSkillId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvSysSkillObjLstCache = await vSysSkill_GetObjLstCache(strIdCurrEduCls);
  if (arrvSysSkillObjLstCache == null) return '';
  try {
    const arrvSysSkillSel = arrvSysSkillObjLstCache.filter((x) => x.skillId == strSkillId);
    let objvSysSkill: clsvSysSkillEN;
    if (arrvSysSkillSel.length > 0) {
      objvSysSkill = arrvSysSkillSel[0];
      return objvSysSkill.operationTypeId;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strSkillId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

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
export async function vSysSkill_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsvSysSkillWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvSysSkillWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvSysSkillEN.con_SkillId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvSysSkillEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvSysSkillEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strSkillId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvSysSkill = await vSysSkill_GetObjBySkillIdCache(strSkillId, strIdCurrEduClsClassfy);
  if (objvSysSkill == null) return '';
  if (objvSysSkill.GetFldValue(strOutFldName) == null) return '';
  return objvSysSkill.GetFldValue(strOutFldName).toString();
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
export function vSysSkill_SortFunDefa(a: clsvSysSkillEN, b: clsvSysSkillEN): number {
  return a.skillId.localeCompare(b.skillId);
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
export function vSysSkill_SortFunDefa2Fld(a: clsvSysSkillEN, b: clsvSysSkillEN): number {
  if (a.skillName == b.skillName) return a.process.localeCompare(b.process);
  else return a.skillName.localeCompare(b.skillName);
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
export function vSysSkill_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvSysSkillEN.con_SkillId:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return a.skillId.localeCompare(b.skillId);
        };
      case clsvSysSkillEN.con_SkillName:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (a.skillName == null) return -1;
          if (b.skillName == null) return 1;
          return a.skillName.localeCompare(b.skillName);
        };
      case clsvSysSkillEN.con_Process:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (a.process == null) return -1;
          if (b.process == null) return 1;
          return a.process.localeCompare(b.process);
        };
      case clsvSysSkillEN.con_OperationTypeId:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (a.operationTypeId == null) return -1;
          if (b.operationTypeId == null) return 1;
          return a.operationTypeId.localeCompare(b.operationTypeId);
        };
      case clsvSysSkillEN.con_LevelId:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (a.levelId == null) return -1;
          if (b.levelId == null) return 1;
          return a.levelId.localeCompare(b.levelId);
        };
      case clsvSysSkillEN.con_LevelName:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (a.levelName == null) return -1;
          if (b.levelName == null) return 1;
          return a.levelName.localeCompare(b.levelName);
        };
      case clsvSysSkillEN.con_UpdUser:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvSysSkillEN.con_UpdDate:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvSysSkillEN.con_IsSubmit:
        return (a: clsvSysSkillEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsvSysSkillEN.con_CitationId:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (a.citationId == null) return -1;
          if (b.citationId == null) return 1;
          return a.citationId.localeCompare(b.citationId);
        };
      case clsvSysSkillEN.con_OkCount:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return a.okCount - b.okCount;
        };
      case clsvSysSkillEN.con_AppraiseCount:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return a.appraiseCount - b.appraiseCount;
        };
      case clsvSysSkillEN.con_Score:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return a.score - b.score;
        };
      case clsvSysSkillEN.con_StuScore:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return a.stuScore - b.stuScore;
        };
      case clsvSysSkillEN.con_TeaScore:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsvSysSkillEN.con_IdCurrEduCls:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvSysSkillEN.con_PdfContent:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (a.pdfContent == null) return -1;
          if (b.pdfContent == null) return 1;
          return a.pdfContent.localeCompare(b.pdfContent);
        };
      case clsvSysSkillEN.con_PdfPageNum:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return a.pdfPageNum - b.pdfPageNum;
        };
      case clsvSysSkillEN.con_CitationCount:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return a.citationCount - b.citationCount;
        };
      case clsvSysSkillEN.con_VersionCount:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return a.versionCount - b.versionCount;
        };
      case clsvSysSkillEN.con_Memo:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvSysSkillEN.con_OperationTypeName:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (a.operationTypeName == null) return -1;
          if (b.operationTypeName == null) return 1;
          return a.operationTypeName.localeCompare(b.operationTypeName);
        };
      case clsvSysSkillEN.con_CreateDate:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (a.createDate == null) return -1;
          if (b.createDate == null) return 1;
          return a.createDate.localeCompare(b.createDate);
        };
      case clsvSysSkillEN.con_ShareId:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return a.shareId.localeCompare(b.shareId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vSysSkill]中不存在!(in ${vSysSkill_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvSysSkillEN.con_SkillId:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return b.skillId.localeCompare(a.skillId);
        };
      case clsvSysSkillEN.con_SkillName:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (b.skillName == null) return -1;
          if (a.skillName == null) return 1;
          return b.skillName.localeCompare(a.skillName);
        };
      case clsvSysSkillEN.con_Process:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (b.process == null) return -1;
          if (a.process == null) return 1;
          return b.process.localeCompare(a.process);
        };
      case clsvSysSkillEN.con_OperationTypeId:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (b.operationTypeId == null) return -1;
          if (a.operationTypeId == null) return 1;
          return b.operationTypeId.localeCompare(a.operationTypeId);
        };
      case clsvSysSkillEN.con_LevelId:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (b.levelId == null) return -1;
          if (a.levelId == null) return 1;
          return b.levelId.localeCompare(a.levelId);
        };
      case clsvSysSkillEN.con_LevelName:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (b.levelName == null) return -1;
          if (a.levelName == null) return 1;
          return b.levelName.localeCompare(a.levelName);
        };
      case clsvSysSkillEN.con_UpdUser:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvSysSkillEN.con_UpdDate:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvSysSkillEN.con_IsSubmit:
        return (b: clsvSysSkillEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsvSysSkillEN.con_CitationId:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (b.citationId == null) return -1;
          if (a.citationId == null) return 1;
          return b.citationId.localeCompare(a.citationId);
        };
      case clsvSysSkillEN.con_OkCount:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return b.okCount - a.okCount;
        };
      case clsvSysSkillEN.con_AppraiseCount:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return b.appraiseCount - a.appraiseCount;
        };
      case clsvSysSkillEN.con_Score:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return b.score - a.score;
        };
      case clsvSysSkillEN.con_StuScore:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return b.stuScore - a.stuScore;
        };
      case clsvSysSkillEN.con_TeaScore:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsvSysSkillEN.con_IdCurrEduCls:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvSysSkillEN.con_PdfContent:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (b.pdfContent == null) return -1;
          if (a.pdfContent == null) return 1;
          return b.pdfContent.localeCompare(a.pdfContent);
        };
      case clsvSysSkillEN.con_PdfPageNum:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return b.pdfPageNum - a.pdfPageNum;
        };
      case clsvSysSkillEN.con_CitationCount:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return b.citationCount - a.citationCount;
        };
      case clsvSysSkillEN.con_VersionCount:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return b.versionCount - a.versionCount;
        };
      case clsvSysSkillEN.con_Memo:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvSysSkillEN.con_OperationTypeName:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (b.operationTypeName == null) return -1;
          if (a.operationTypeName == null) return 1;
          return b.operationTypeName.localeCompare(a.operationTypeName);
        };
      case clsvSysSkillEN.con_CreateDate:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          if (b.createDate == null) return -1;
          if (a.createDate == null) return 1;
          return b.createDate.localeCompare(a.createDate);
        };
      case clsvSysSkillEN.con_ShareId:
        return (a: clsvSysSkillEN, b: clsvSysSkillEN) => {
          return b.shareId.localeCompare(a.shareId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vSysSkill]中不存在!(in ${vSysSkill_ConstructorName}.${strThisFuncName})`;
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
export async function vSysSkill_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvSysSkillEN.con_SkillId:
      return (obj: clsvSysSkillEN) => {
        return obj.skillId === value;
      };
    case clsvSysSkillEN.con_SkillName:
      return (obj: clsvSysSkillEN) => {
        return obj.skillName === value;
      };
    case clsvSysSkillEN.con_Process:
      return (obj: clsvSysSkillEN) => {
        return obj.process === value;
      };
    case clsvSysSkillEN.con_OperationTypeId:
      return (obj: clsvSysSkillEN) => {
        return obj.operationTypeId === value;
      };
    case clsvSysSkillEN.con_LevelId:
      return (obj: clsvSysSkillEN) => {
        return obj.levelId === value;
      };
    case clsvSysSkillEN.con_LevelName:
      return (obj: clsvSysSkillEN) => {
        return obj.levelName === value;
      };
    case clsvSysSkillEN.con_UpdUser:
      return (obj: clsvSysSkillEN) => {
        return obj.updUser === value;
      };
    case clsvSysSkillEN.con_UpdDate:
      return (obj: clsvSysSkillEN) => {
        return obj.updDate === value;
      };
    case clsvSysSkillEN.con_IsSubmit:
      return (obj: clsvSysSkillEN) => {
        return obj.isSubmit === value;
      };
    case clsvSysSkillEN.con_CitationId:
      return (obj: clsvSysSkillEN) => {
        return obj.citationId === value;
      };
    case clsvSysSkillEN.con_OkCount:
      return (obj: clsvSysSkillEN) => {
        return obj.okCount === value;
      };
    case clsvSysSkillEN.con_AppraiseCount:
      return (obj: clsvSysSkillEN) => {
        return obj.appraiseCount === value;
      };
    case clsvSysSkillEN.con_Score:
      return (obj: clsvSysSkillEN) => {
        return obj.score === value;
      };
    case clsvSysSkillEN.con_StuScore:
      return (obj: clsvSysSkillEN) => {
        return obj.stuScore === value;
      };
    case clsvSysSkillEN.con_TeaScore:
      return (obj: clsvSysSkillEN) => {
        return obj.teaScore === value;
      };
    case clsvSysSkillEN.con_IdCurrEduCls:
      return (obj: clsvSysSkillEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvSysSkillEN.con_PdfContent:
      return (obj: clsvSysSkillEN) => {
        return obj.pdfContent === value;
      };
    case clsvSysSkillEN.con_PdfPageNum:
      return (obj: clsvSysSkillEN) => {
        return obj.pdfPageNum === value;
      };
    case clsvSysSkillEN.con_CitationCount:
      return (obj: clsvSysSkillEN) => {
        return obj.citationCount === value;
      };
    case clsvSysSkillEN.con_VersionCount:
      return (obj: clsvSysSkillEN) => {
        return obj.versionCount === value;
      };
    case clsvSysSkillEN.con_Memo:
      return (obj: clsvSysSkillEN) => {
        return obj.memo === value;
      };
    case clsvSysSkillEN.con_OperationTypeName:
      return (obj: clsvSysSkillEN) => {
        return obj.operationTypeName === value;
      };
    case clsvSysSkillEN.con_CreateDate:
      return (obj: clsvSysSkillEN) => {
        return obj.createDate === value;
      };
    case clsvSysSkillEN.con_ShareId:
      return (obj: clsvSysSkillEN) => {
        return obj.shareId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vSysSkill]中不存在!(in ${vSysSkill_ConstructorName}.${strThisFuncName})`;
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
export async function vSysSkill_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsvSysSkillWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvSysSkillWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvSysSkillEN.con_SkillId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvSysSkill = await vSysSkill_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrvSysSkill == null) return [];
  let arrvSysSkillSel = arrvSysSkill;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvSysSkillSel = arrvSysSkillSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvSysSkillSel = arrvSysSkillSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvSysSkillSel = arrvSysSkillSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvSysSkillSel = arrvSysSkillSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvSysSkillSel = arrvSysSkillSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvSysSkillSel = arrvSysSkillSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvSysSkillSel = arrvSysSkillSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvSysSkillSel = arrvSysSkillSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvSysSkillSel.length == 0) return [];
  return arrvSysSkillSel.map((x) => x.skillId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vSysSkill_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vSysSkill_Controller, strAction);

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
        vSysSkill_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysSkill_ConstructorName,
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
export async function vSysSkill_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vSysSkill_Controller, strAction);

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
        vSysSkill_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysSkill_ConstructorName,
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
export async function vSysSkill_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvSysSkillEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vSysSkill_Controller, strAction);

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
      const objvSysSkill = vSysSkill_GetObjFromJsonObj(returnObj);
      return objvSysSkill;
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
        vSysSkill_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysSkill_ConstructorName,
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
export async function vSysSkill_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvSysSkillEN.WhereFormat) == false) {
    strWhereCond = Format(clsvSysSkillEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvSysSkillEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvSysSkillEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSysSkillEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvSysSkillExObjLstCache: Array<clsvSysSkillEN> = CacheHelper.Get(strKey);
    const arrvSysSkillObjLstT = vSysSkill_GetObjLstByJSONObjLst(arrvSysSkillExObjLstCache);
    return arrvSysSkillObjLstT;
  }
  try {
    const arrvSysSkillExObjLst = await vSysSkill_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvSysSkillExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSysSkillExObjLst.length,
    );
    console.log(strInfo);
    return arrvSysSkillExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSysSkill_ConstructorName,
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
export async function vSysSkill_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvSysSkillEN.WhereFormat) == false) {
    strWhereCond = Format(clsvSysSkillEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvSysSkillEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvSysSkillEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvSysSkillEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSysSkillEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvSysSkillExObjLstCache: Array<clsvSysSkillEN> = JSON.parse(strTempObjLst);
    const arrvSysSkillObjLstT = vSysSkill_GetObjLstByJSONObjLst(arrvSysSkillExObjLstCache);
    return arrvSysSkillObjLstT;
  }
  try {
    const arrvSysSkillExObjLst = await vSysSkill_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvSysSkillExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSysSkillExObjLst.length,
    );
    console.log(strInfo);
    return arrvSysSkillExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSysSkill_ConstructorName,
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
export async function vSysSkill_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvSysSkillEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvSysSkillObjLstCache: Array<clsvSysSkillEN> = JSON.parse(strTempObjLst);
    return arrvSysSkillObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vSysSkill_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvSysSkillEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vSysSkill_Controller, strAction);

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
          vSysSkill_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysSkill_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysSkill_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysSkill_ConstructorName,
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
export async function vSysSkill_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvSysSkillEN.WhereFormat) == false) {
    strWhereCond = Format(clsvSysSkillEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvSysSkillEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvSysSkillEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvSysSkillEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSysSkillEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvSysSkillExObjLstCache: Array<clsvSysSkillEN> = JSON.parse(strTempObjLst);
    const arrvSysSkillObjLstT = vSysSkill_GetObjLstByJSONObjLst(arrvSysSkillExObjLstCache);
    return arrvSysSkillObjLstT;
  }
  try {
    const arrvSysSkillExObjLst = await vSysSkill_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvSysSkillExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSysSkillExObjLst.length,
    );
    console.log(strInfo);
    return arrvSysSkillExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSysSkill_ConstructorName,
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
export async function vSysSkill_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvSysSkillEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvSysSkillObjLstCache: Array<clsvSysSkillEN> = JSON.parse(strTempObjLst);
    return arrvSysSkillObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vSysSkill_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsvSysSkillEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsvSysSkillWApi.vSysSkill_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvSysSkillWApi.vSysSkill_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvSysSkillObjLstCache;
  switch (clsvSysSkillEN.CacheModeId) {
    case '04': //sessionStorage
      arrvSysSkillObjLstCache = await vSysSkill_GetObjLstsessionStorage(strIdCurrEduCls);
      break;
    case '03': //localStorage
      arrvSysSkillObjLstCache = await vSysSkill_GetObjLstlocalStorage(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrvSysSkillObjLstCache = await vSysSkill_GetObjLstClientCache(strIdCurrEduCls);
      break;
    default:
      arrvSysSkillObjLstCache = await vSysSkill_GetObjLstClientCache(strIdCurrEduCls);
      break;
  }
  return arrvSysSkillObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vSysSkill_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvSysSkillObjLstCache;
  switch (clsvSysSkillEN.CacheModeId) {
    case '04': //sessionStorage
      arrvSysSkillObjLstCache = await vSysSkill_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
      break;
    case '03': //localStorage
      arrvSysSkillObjLstCache = await vSysSkill_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrvSysSkillObjLstCache = null;
      break;
    default:
      arrvSysSkillObjLstCache = null;
      break;
  }
  return arrvSysSkillObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrSkillIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vSysSkill_GetSubObjLstCache(
  objvSysSkillCond: clsvSysSkillEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvSysSkillObjLstCache = await vSysSkill_GetObjLstCache(strIdCurrEduCls);
  let arrvSysSkillSel = arrvSysSkillObjLstCache;
  if (objvSysSkillCond.sfFldComparisonOp == null || objvSysSkillCond.sfFldComparisonOp == '')
    return arrvSysSkillSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSysSkillCond.sfFldComparisonOp,
  );
  //console.log("clsvSysSkillWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSysSkillCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysSkillCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvSysSkillSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvSysSkillCond),
      vSysSkill_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvSysSkillEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSkillId:关键字列表
 * @returns 对象列表
 **/
export async function vSysSkill_GetObjLstBySkillIdLstAsync(
  arrSkillId: Array<string>,
): Promise<Array<clsvSysSkillEN>> {
  const strThisFuncName = 'GetObjLstBySkillIdLstAsync';
  const strAction = 'GetObjLstBySkillIdLst';
  const strUrl = GetWebApiUrl(vSysSkill_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSkillId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vSysSkill_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysSkill_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysSkill_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysSkill_ConstructorName,
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
 * @param arrstrSkillIdLst:关键字列表
 * @returns 对象列表
 */
export async function vSysSkill_GetObjLstBySkillIdLstCache(
  arrSkillIdLst: Array<string>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstBySkillIdLstCache';
  try {
    const arrvSysSkillObjLstCache = await vSysSkill_GetObjLstCache(strIdCurrEduCls);
    const arrvSysSkillSel = arrvSysSkillObjLstCache.filter(
      (x) => arrSkillIdLst.indexOf(x.skillId) > -1,
    );
    return arrvSysSkillSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrSkillIdLst.join(','),
      vSysSkill_ConstructorName,
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
export async function vSysSkill_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvSysSkillEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vSysSkill_Controller, strAction);

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
          vSysSkill_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysSkill_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysSkill_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysSkill_ConstructorName,
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
export async function vSysSkill_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvSysSkillEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vSysSkill_Controller, strAction);

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
          vSysSkill_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysSkill_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysSkill_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysSkill_ConstructorName,
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
export async function vSysSkill_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvSysSkillEN>();
  const arrvSysSkillObjLstCache = await vSysSkill_GetObjLstCache(strIdCurrEduCls);
  if (arrvSysSkillObjLstCache.length == 0) return arrvSysSkillObjLstCache;
  let arrvSysSkillSel = arrvSysSkillObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvSysSkillCond = new clsvSysSkillEN();
  ObjectAssign(objvSysSkillCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvSysSkillWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysSkillCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvSysSkillSel.length == 0) return arrvSysSkillSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvSysSkillSel = arrvSysSkillSel.sort(vSysSkill_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvSysSkillSel = arrvSysSkillSel.sort(objPagerPara.sortFun);
    }
    arrvSysSkillSel = arrvSysSkillSel.slice(intStart, intEnd);
    return arrvSysSkillSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vSysSkill_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvSysSkillEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vSysSkill_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvSysSkillEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvSysSkillEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vSysSkill_Controller, strAction);

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
          vSysSkill_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysSkill_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysSkill_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysSkill_ConstructorName,
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
 * @param objstrSkillIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vSysSkill_IsExistRecordCache(
  objvSysSkillCond: clsvSysSkillEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvSysSkillObjLstCache = await vSysSkill_GetObjLstCache(strIdCurrEduCls);
  if (arrvSysSkillObjLstCache == null) return false;
  let arrvSysSkillSel = arrvSysSkillObjLstCache;
  if (objvSysSkillCond.sfFldComparisonOp == null || objvSysSkillCond.sfFldComparisonOp == '')
    return arrvSysSkillSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSysSkillCond.sfFldComparisonOp,
  );
  //console.log("clsvSysSkillWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSysSkillCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysSkillCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvSysSkillSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvSysSkillCond),
      vSysSkill_ConstructorName,
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
export async function vSysSkill_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vSysSkill_Controller, strAction);

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
        vSysSkill_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysSkill_ConstructorName,
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
 * @param strSkillId:所给的关键字
 * @returns 对象
 */
export async function vSysSkill_IsExistCache(strSkillId: string, strIdCurrEduCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvSysSkillObjLstCache = await vSysSkill_GetObjLstCache(strIdCurrEduCls);
  if (arrvSysSkillObjLstCache == null) return false;
  try {
    const arrvSysSkillSel = arrvSysSkillObjLstCache.filter((x) => x.skillId == strSkillId);
    if (arrvSysSkillSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strSkillId,
      vSysSkill_ConstructorName,
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
 * @param strSkillId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vSysSkill_IsExistAsync(strSkillId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vSysSkill_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSkillId,
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
        vSysSkill_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysSkill_ConstructorName,
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
export async function vSysSkill_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vSysSkill_Controller, strAction);

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
        vSysSkill_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysSkill_ConstructorName,
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
 * @param objvSysSkillCond:条件对象
 * @returns 对象列表记录数
 */
export async function vSysSkill_GetRecCountByCondCache(
  objvSysSkillCond: clsvSysSkillEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvSysSkillObjLstCache = await vSysSkill_GetObjLstCache(strIdCurrEduCls);
  if (arrvSysSkillObjLstCache == null) return 0;
  let arrvSysSkillSel = arrvSysSkillObjLstCache;
  if (objvSysSkillCond.sfFldComparisonOp == null || objvSysSkillCond.sfFldComparisonOp == '')
    return arrvSysSkillSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSysSkillCond.sfFldComparisonOp,
  );
  //console.log("clsvSysSkillWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSysSkillCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysSkillCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvSysSkillSel = arrvSysSkillSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvSysSkillSel = arrvSysSkillSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvSysSkillSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvSysSkillCond),
      vSysSkill_ConstructorName,
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
export function vSysSkill_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vSysSkill_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvSysSkillEN._CurrTabName, strIdCurrEduCls);
    switch (clsvSysSkillEN.CacheModeId) {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
export async function vSysSkill_BindDdl_SkillIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strIdCurrEduCls: string,
) {
  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsvSysSkillWApi.BindDdl_SkillIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvSysSkillWApi.BindDdl_SkillIdInDiv)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_SkillIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_SkillIdInDivCache");
  const arrObjLstSel = await vSysSkill_GetObjLstCache(strIdCurrEduCls);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvSysSkillEN.con_SkillId,
    clsvSysSkillEN.con_SkillName,
    '技能表视图',
  );
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vSysSkill_GetJSONStrByObj(pobjvSysSkillEN: clsvSysSkillEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvSysSkillEN);
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
export function vSysSkill_GetObjLstByJSONStr(strJSON: string): Array<clsvSysSkillEN> {
  let arrvSysSkillObjLst = new Array<clsvSysSkillEN>();
  if (strJSON === '') {
    return arrvSysSkillObjLst;
  }
  try {
    arrvSysSkillObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvSysSkillObjLst;
  }
  return arrvSysSkillObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvSysSkillObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vSysSkill_GetObjLstByJSONObjLst(
  arrvSysSkillObjLstS: Array<clsvSysSkillEN>,
): Array<clsvSysSkillEN> {
  const arrvSysSkillObjLst = new Array<clsvSysSkillEN>();
  for (const objInFor of arrvSysSkillObjLstS) {
    const obj1 = vSysSkill_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvSysSkillObjLst.push(obj1);
  }
  return arrvSysSkillObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vSysSkill_GetObjByJSONStr(strJSON: string): clsvSysSkillEN {
  let pobjvSysSkillEN = new clsvSysSkillEN();
  if (strJSON === '') {
    return pobjvSysSkillEN;
  }
  try {
    pobjvSysSkillEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvSysSkillEN;
  }
  return pobjvSysSkillEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vSysSkill_GetCombineCondition(objvSysSkillCond: clsvSysSkillEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_SkillId,
    ) == true
  ) {
    const strComparisonOpSkillId: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_SkillId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysSkillEN.con_SkillId,
      objvSysSkillCond.skillId,
      strComparisonOpSkillId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_SkillName,
    ) == true
  ) {
    const strComparisonOpSkillName: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_SkillName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysSkillEN.con_SkillName,
      objvSysSkillCond.skillName,
      strComparisonOpSkillName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_OperationTypeId,
    ) == true
  ) {
    const strComparisonOpOperationTypeId: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_OperationTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysSkillEN.con_OperationTypeId,
      objvSysSkillCond.operationTypeId,
      strComparisonOpOperationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_LevelId,
    ) == true
  ) {
    const strComparisonOpLevelId: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_LevelId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysSkillEN.con_LevelId,
      objvSysSkillCond.levelId,
      strComparisonOpLevelId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_LevelName,
    ) == true
  ) {
    const strComparisonOpLevelName: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_LevelName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysSkillEN.con_LevelName,
      objvSysSkillCond.levelName,
      strComparisonOpLevelName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysSkillEN.con_UpdUser,
      objvSysSkillCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysSkillEN.con_UpdDate,
      objvSysSkillCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_IsSubmit,
    ) == true
  ) {
    if (objvSysSkillCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvSysSkillEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvSysSkillEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_CitationId,
    ) == true
  ) {
    const strComparisonOpCitationId: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_CitationId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysSkillEN.con_CitationId,
      objvSysSkillCond.citationId,
      strComparisonOpCitationId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_OkCount,
    ) == true
  ) {
    const strComparisonOpOkCount: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_OkCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvSysSkillEN.con_OkCount,
      objvSysSkillCond.okCount,
      strComparisonOpOkCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_AppraiseCount,
    ) == true
  ) {
    const strComparisonOpAppraiseCount: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_AppraiseCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvSysSkillEN.con_AppraiseCount,
      objvSysSkillCond.appraiseCount,
      strComparisonOpAppraiseCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvSysSkillEN.con_Score,
      objvSysSkillCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvSysSkillEN.con_StuScore,
      objvSysSkillCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvSysSkillEN.con_TeaScore,
      objvSysSkillCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysSkillEN.con_IdCurrEduCls,
      objvSysSkillCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_PdfContent,
    ) == true
  ) {
    const strComparisonOpPdfContent: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_PdfContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysSkillEN.con_PdfContent,
      objvSysSkillCond.pdfContent,
      strComparisonOpPdfContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_PdfPageNum,
    ) == true
  ) {
    const strComparisonOpPdfPageNum: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_PdfPageNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvSysSkillEN.con_PdfPageNum,
      objvSysSkillCond.pdfPageNum,
      strComparisonOpPdfPageNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_CitationCount,
    ) == true
  ) {
    const strComparisonOpCitationCount: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_CitationCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvSysSkillEN.con_CitationCount,
      objvSysSkillCond.citationCount,
      strComparisonOpCitationCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_VersionCount,
    ) == true
  ) {
    const strComparisonOpVersionCount: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_VersionCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvSysSkillEN.con_VersionCount,
      objvSysSkillCond.versionCount,
      strComparisonOpVersionCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysSkillEN.con_Memo,
      objvSysSkillCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_OperationTypeName,
    ) == true
  ) {
    const strComparisonOpOperationTypeName: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_OperationTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysSkillEN.con_OperationTypeName,
      objvSysSkillCond.operationTypeName,
      strComparisonOpOperationTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_CreateDate,
    ) == true
  ) {
    const strComparisonOpCreateDate: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_CreateDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysSkillEN.con_CreateDate,
      objvSysSkillCond.createDate,
      strComparisonOpCreateDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysSkillCond.dicFldComparisonOp,
      clsvSysSkillEN.con_ShareId,
    ) == true
  ) {
    const strComparisonOpShareId: string =
      objvSysSkillCond.dicFldComparisonOp[clsvSysSkillEN.con_ShareId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysSkillEN.con_ShareId,
      objvSysSkillCond.shareId,
      strComparisonOpShareId,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvSysSkillENS:源对象
 * @param objvSysSkillENT:目标对象
 */
export function vSysSkill_CopyObjTo(
  objvSysSkillENS: clsvSysSkillEN,
  objvSysSkillENT: clsvSysSkillEN,
): void {
  objvSysSkillENT.skillId = objvSysSkillENS.skillId; //技能Id
  objvSysSkillENT.skillName = objvSysSkillENS.skillName; //技能名称
  objvSysSkillENT.process = objvSysSkillENS.process; //实施过程
  objvSysSkillENT.operationTypeId = objvSysSkillENS.operationTypeId; //操作类型ID
  objvSysSkillENT.levelId = objvSysSkillENS.levelId; //级别Id
  objvSysSkillENT.levelName = objvSysSkillENS.levelName; //级别名称
  objvSysSkillENT.updUser = objvSysSkillENS.updUser; //修改人
  objvSysSkillENT.updDate = objvSysSkillENS.updDate; //修改日期
  objvSysSkillENT.isSubmit = objvSysSkillENS.isSubmit; //是否提交
  objvSysSkillENT.citationId = objvSysSkillENS.citationId; //引用Id
  objvSysSkillENT.okCount = objvSysSkillENS.okCount; //点赞统计
  objvSysSkillENT.appraiseCount = objvSysSkillENS.appraiseCount; //评论数
  objvSysSkillENT.score = objvSysSkillENS.score; //评分
  objvSysSkillENT.stuScore = objvSysSkillENS.stuScore; //学生平均分
  objvSysSkillENT.teaScore = objvSysSkillENS.teaScore; //教师评分
  objvSysSkillENT.idCurrEduCls = objvSysSkillENS.idCurrEduCls; //教学班流水号
  objvSysSkillENT.pdfContent = objvSysSkillENS.pdfContent; //Pdf内容
  objvSysSkillENT.pdfPageNum = objvSysSkillENS.pdfPageNum; //Pdf页码
  objvSysSkillENT.citationCount = objvSysSkillENS.citationCount; //引用统计
  objvSysSkillENT.versionCount = objvSysSkillENS.versionCount; //版本统计
  objvSysSkillENT.memo = objvSysSkillENS.memo; //备注
  objvSysSkillENT.operationTypeName = objvSysSkillENS.operationTypeName; //操作类型名
  objvSysSkillENT.createDate = objvSysSkillENS.createDate; //建立日期
  objvSysSkillENT.shareId = objvSysSkillENS.shareId; //分享Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvSysSkillENS:源对象
 * @param objvSysSkillENT:目标对象
 */
export function vSysSkill_GetObjFromJsonObj(objvSysSkillENS: clsvSysSkillEN): clsvSysSkillEN {
  const objvSysSkillENT: clsvSysSkillEN = new clsvSysSkillEN();
  ObjectAssign(objvSysSkillENT, objvSysSkillENS);
  return objvSysSkillENT;
}
