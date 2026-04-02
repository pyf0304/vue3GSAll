/**
 * 类名:clsvqa_PaperWApi
 * 表名:vqa_Paper(01120637)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:51:07
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v论文答疑(vqa_Paper)
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
import { clsvqa_PaperEN } from '@/ts/L0Entity/InteractManage/clsvqa_PaperEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vqa_Paper_Controller = 'vqa_PaperApi';
export const vqa_Paper_ConstructorName = 'vqa_Paper';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strQaPaperId:关键字
 * @returns 对象
 **/
export async function vqa_Paper_GetObjByQaPaperIdAsync(
  strQaPaperId: string,
): Promise<clsvqa_PaperEN | null> {
  const strThisFuncName = 'GetObjByQaPaperIdAsync';

  if (IsNullOrEmpty(strQaPaperId) == true) {
    const strMsg = Format(
      '参数:[strQaPaperId]不能为空!(In clsvqa_PaperWApi.GetObjByQaPaperIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQaPaperId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strQaPaperId]的长度:[{0}]不正确!(clsvqa_PaperWApi.GetObjByQaPaperIdAsync)',
      strQaPaperId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByQaPaperId';
  const strUrl = GetWebApiUrl(vqa_Paper_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strQaPaperId,
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
      const objvqa_Paper = vqa_Paper_GetObjFromJsonObj(returnObj);
      return objvqa_Paper;
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
        vqa_Paper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Paper_ConstructorName,
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
 * @param strQaPaperId:所给的关键字
 * @returns 对象
 */
export async function vqa_Paper_GetObjByQaPaperIdCache(
  strQaPaperId: string,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByQaPaperIdCache';

  if (IsNullOrEmpty(strQaPaperId) == true) {
    const strMsg = Format(
      '参数:[strQaPaperId]不能为空!(In clsvqa_PaperWApi.GetObjByQaPaperIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQaPaperId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strQaPaperId]的长度:[{0}]不正确!(clsvqa_PaperWApi.GetObjByQaPaperIdCache)',
      strQaPaperId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvqa_PaperObjLstCache = await vqa_Paper_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrvqa_PaperSel = arrvqa_PaperObjLstCache.filter((x) => x.qaPaperId == strQaPaperId);
    let objvqa_Paper: clsvqa_PaperEN;
    if (arrvqa_PaperSel.length > 0) {
      objvqa_Paper = arrvqa_PaperSel[0];
      return objvqa_Paper;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvqa_PaperConst = await vqa_Paper_GetObjByQaPaperIdAsync(strQaPaperId);
        if (objvqa_PaperConst != null) {
          vqa_Paper_ReFreshThisCache(strIdCurrEduCls);
          return objvqa_PaperConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strQaPaperId,
      vqa_Paper_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strQaPaperId:所给的关键字
 * @returns 对象
 */
export async function vqa_Paper_GetObjByQaPaperIdlocalStorage(strQaPaperId: string) {
  const strThisFuncName = 'GetObjByQaPaperIdlocalStorage';

  if (IsNullOrEmpty(strQaPaperId) == true) {
    const strMsg = Format(
      '参数:[strQaPaperId]不能为空!(In clsvqa_PaperWApi.GetObjByQaPaperIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQaPaperId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strQaPaperId]的长度:[{0}]不正确!(clsvqa_PaperWApi.GetObjByQaPaperIdlocalStorage)',
      strQaPaperId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvqa_PaperEN._CurrTabName, strQaPaperId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvqa_PaperCache: clsvqa_PaperEN = JSON.parse(strTempObj);
    return objvqa_PaperCache;
  }
  try {
    const objvqa_Paper = await vqa_Paper_GetObjByQaPaperIdAsync(strQaPaperId);
    if (objvqa_Paper != null) {
      localStorage.setItem(strKey, JSON.stringify(objvqa_Paper));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvqa_Paper;
    }
    return objvqa_Paper;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strQaPaperId,
      vqa_Paper_ConstructorName,
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
export async function vqa_Paper_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsvqa_PaperWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvqa_PaperWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvqa_PaperEN.con_QaPaperId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvqa_PaperEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvqa_PaperEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strQaPaperId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvqa_Paper = await vqa_Paper_GetObjByQaPaperIdCache(strQaPaperId, strIdCurrEduClsClassfy);
  if (objvqa_Paper == null) return '';
  if (objvqa_Paper.GetFldValue(strOutFldName) == null) return '';
  return objvqa_Paper.GetFldValue(strOutFldName).toString();
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
export function vqa_Paper_SortFunDefa(a: clsvqa_PaperEN, b: clsvqa_PaperEN): number {
  return a.qaPaperId.localeCompare(b.qaPaperId);
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
export function vqa_Paper_SortFunDefa2Fld(a: clsvqa_PaperEN, b: clsvqa_PaperEN): number {
  if (a.paperId == b.paperId) return a.questionsCount - b.questionsCount;
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
export function vqa_Paper_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvqa_PaperEN.con_QaPaperId:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          return a.qaPaperId.localeCompare(b.qaPaperId);
        };
      case clsvqa_PaperEN.con_PaperId:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.paperId == null) return -1;
          if (b.paperId == null) return 1;
          return a.paperId.localeCompare(b.paperId);
        };
      case clsvqa_PaperEN.con_QuestionsCount:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          return a.questionsCount - b.questionsCount;
        };
      case clsvqa_PaperEN.con_IsDelete:
        return (a: clsvqa_PaperEN) => {
          if (a.isDelete == true) return 1;
          else return -1;
        };
      case clsvqa_PaperEN.con_IsPublic:
        return (a: clsvqa_PaperEN) => {
          if (a.isPublic == true) return 1;
          else return -1;
        };
      case clsvqa_PaperEN.con_IsSubmit:
        return (a: clsvqa_PaperEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsvqa_PaperEN.con_UpdUser:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvqa_PaperEN.con_UserName:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.userName == null) return -1;
          if (b.userName == null) return 1;
          return a.userName.localeCompare(b.userName);
        };
      case clsvqa_PaperEN.con_UpdDate:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvqa_PaperEN.con_Memo:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvqa_PaperEN.con_PaperTitle:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.paperTitle == null) return -1;
          if (b.paperTitle == null) return 1;
          return a.paperTitle.localeCompare(b.paperTitle);
        };
      case clsvqa_PaperEN.con_AttachmentCount:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          return a.attachmentCount - b.attachmentCount;
        };
      case clsvqa_PaperEN.con_PaperContent:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.paperContent == null) return -1;
          if (b.paperContent == null) return 1;
          return a.paperContent.localeCompare(b.paperContent);
        };
      case clsvqa_PaperEN.con_Periodical:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.periodical == null) return -1;
          if (b.periodical == null) return 1;
          return a.periodical.localeCompare(b.periodical);
        };
      case clsvqa_PaperEN.con_Author:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.author == null) return -1;
          if (b.author == null) return 1;
          return a.author.localeCompare(b.author);
        };
      case clsvqa_PaperEN.con_ResearchQuestion:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.researchQuestion == null) return -1;
          if (b.researchQuestion == null) return 1;
          return a.researchQuestion.localeCompare(b.researchQuestion);
        };
      case clsvqa_PaperEN.con_LiteratureSources:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.literatureSources == null) return -1;
          if (b.literatureSources == null) return 1;
          return a.literatureSources.localeCompare(b.literatureSources);
        };
      case clsvqa_PaperEN.con_UploadfileUrl:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.uploadfileUrl == null) return -1;
          if (b.uploadfileUrl == null) return 1;
          return a.uploadfileUrl.localeCompare(b.uploadfileUrl);
        };
      case clsvqa_PaperEN.con_IdXzMajor:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.idXzMajor == null) return -1;
          if (b.idXzMajor == null) return 1;
          return a.idXzMajor.localeCompare(b.idXzMajor);
        };
      case clsvqa_PaperEN.con_MajorName:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.majorName == null) return -1;
          if (b.majorName == null) return 1;
          return a.majorName.localeCompare(b.majorName);
        };
      case clsvqa_PaperEN.con_IdCurrEduCls:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvqa_PaperEN.con_AnswerCount:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          return a.answerCount - b.answerCount;
        };
      case clsvqa_PaperEN.con_ShareId:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (a.shareId == null) return -1;
          if (b.shareId == null) return 1;
          return a.shareId.localeCompare(b.shareId);
        };
      case clsvqa_PaperEN.con_TagsCount:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          return a.tagsCount - b.tagsCount;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vqa_Paper]中不存在!(in ${vqa_Paper_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvqa_PaperEN.con_QaPaperId:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          return b.qaPaperId.localeCompare(a.qaPaperId);
        };
      case clsvqa_PaperEN.con_PaperId:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.paperId == null) return -1;
          if (a.paperId == null) return 1;
          return b.paperId.localeCompare(a.paperId);
        };
      case clsvqa_PaperEN.con_QuestionsCount:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          return b.questionsCount - a.questionsCount;
        };
      case clsvqa_PaperEN.con_IsDelete:
        return (b: clsvqa_PaperEN) => {
          if (b.isDelete == true) return 1;
          else return -1;
        };
      case clsvqa_PaperEN.con_IsPublic:
        return (b: clsvqa_PaperEN) => {
          if (b.isPublic == true) return 1;
          else return -1;
        };
      case clsvqa_PaperEN.con_IsSubmit:
        return (b: clsvqa_PaperEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsvqa_PaperEN.con_UpdUser:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvqa_PaperEN.con_UserName:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.userName == null) return -1;
          if (a.userName == null) return 1;
          return b.userName.localeCompare(a.userName);
        };
      case clsvqa_PaperEN.con_UpdDate:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvqa_PaperEN.con_Memo:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvqa_PaperEN.con_PaperTitle:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.paperTitle == null) return -1;
          if (a.paperTitle == null) return 1;
          return b.paperTitle.localeCompare(a.paperTitle);
        };
      case clsvqa_PaperEN.con_AttachmentCount:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          return b.attachmentCount - a.attachmentCount;
        };
      case clsvqa_PaperEN.con_PaperContent:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.paperContent == null) return -1;
          if (a.paperContent == null) return 1;
          return b.paperContent.localeCompare(a.paperContent);
        };
      case clsvqa_PaperEN.con_Periodical:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.periodical == null) return -1;
          if (a.periodical == null) return 1;
          return b.periodical.localeCompare(a.periodical);
        };
      case clsvqa_PaperEN.con_Author:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.author == null) return -1;
          if (a.author == null) return 1;
          return b.author.localeCompare(a.author);
        };
      case clsvqa_PaperEN.con_ResearchQuestion:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.researchQuestion == null) return -1;
          if (a.researchQuestion == null) return 1;
          return b.researchQuestion.localeCompare(a.researchQuestion);
        };
      case clsvqa_PaperEN.con_LiteratureSources:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.literatureSources == null) return -1;
          if (a.literatureSources == null) return 1;
          return b.literatureSources.localeCompare(a.literatureSources);
        };
      case clsvqa_PaperEN.con_UploadfileUrl:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.uploadfileUrl == null) return -1;
          if (a.uploadfileUrl == null) return 1;
          return b.uploadfileUrl.localeCompare(a.uploadfileUrl);
        };
      case clsvqa_PaperEN.con_IdXzMajor:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.idXzMajor == null) return -1;
          if (a.idXzMajor == null) return 1;
          return b.idXzMajor.localeCompare(a.idXzMajor);
        };
      case clsvqa_PaperEN.con_MajorName:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.majorName == null) return -1;
          if (a.majorName == null) return 1;
          return b.majorName.localeCompare(a.majorName);
        };
      case clsvqa_PaperEN.con_IdCurrEduCls:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvqa_PaperEN.con_AnswerCount:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          return b.answerCount - a.answerCount;
        };
      case clsvqa_PaperEN.con_ShareId:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          if (b.shareId == null) return -1;
          if (a.shareId == null) return 1;
          return b.shareId.localeCompare(a.shareId);
        };
      case clsvqa_PaperEN.con_TagsCount:
        return (a: clsvqa_PaperEN, b: clsvqa_PaperEN) => {
          return b.tagsCount - a.tagsCount;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vqa_Paper]中不存在!(in ${vqa_Paper_ConstructorName}.${strThisFuncName})`;
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
export async function vqa_Paper_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvqa_PaperEN.con_QaPaperId:
      return (obj: clsvqa_PaperEN) => {
        return obj.qaPaperId === value;
      };
    case clsvqa_PaperEN.con_PaperId:
      return (obj: clsvqa_PaperEN) => {
        return obj.paperId === value;
      };
    case clsvqa_PaperEN.con_QuestionsCount:
      return (obj: clsvqa_PaperEN) => {
        return obj.questionsCount === value;
      };
    case clsvqa_PaperEN.con_IsDelete:
      return (obj: clsvqa_PaperEN) => {
        return obj.isDelete === value;
      };
    case clsvqa_PaperEN.con_IsPublic:
      return (obj: clsvqa_PaperEN) => {
        return obj.isPublic === value;
      };
    case clsvqa_PaperEN.con_IsSubmit:
      return (obj: clsvqa_PaperEN) => {
        return obj.isSubmit === value;
      };
    case clsvqa_PaperEN.con_UpdUser:
      return (obj: clsvqa_PaperEN) => {
        return obj.updUser === value;
      };
    case clsvqa_PaperEN.con_UserName:
      return (obj: clsvqa_PaperEN) => {
        return obj.userName === value;
      };
    case clsvqa_PaperEN.con_UpdDate:
      return (obj: clsvqa_PaperEN) => {
        return obj.updDate === value;
      };
    case clsvqa_PaperEN.con_Memo:
      return (obj: clsvqa_PaperEN) => {
        return obj.memo === value;
      };
    case clsvqa_PaperEN.con_PaperTitle:
      return (obj: clsvqa_PaperEN) => {
        return obj.paperTitle === value;
      };
    case clsvqa_PaperEN.con_AttachmentCount:
      return (obj: clsvqa_PaperEN) => {
        return obj.attachmentCount === value;
      };
    case clsvqa_PaperEN.con_PaperContent:
      return (obj: clsvqa_PaperEN) => {
        return obj.paperContent === value;
      };
    case clsvqa_PaperEN.con_Periodical:
      return (obj: clsvqa_PaperEN) => {
        return obj.periodical === value;
      };
    case clsvqa_PaperEN.con_Author:
      return (obj: clsvqa_PaperEN) => {
        return obj.author === value;
      };
    case clsvqa_PaperEN.con_ResearchQuestion:
      return (obj: clsvqa_PaperEN) => {
        return obj.researchQuestion === value;
      };
    case clsvqa_PaperEN.con_LiteratureSources:
      return (obj: clsvqa_PaperEN) => {
        return obj.literatureSources === value;
      };
    case clsvqa_PaperEN.con_UploadfileUrl:
      return (obj: clsvqa_PaperEN) => {
        return obj.uploadfileUrl === value;
      };
    case clsvqa_PaperEN.con_IdXzMajor:
      return (obj: clsvqa_PaperEN) => {
        return obj.idXzMajor === value;
      };
    case clsvqa_PaperEN.con_MajorName:
      return (obj: clsvqa_PaperEN) => {
        return obj.majorName === value;
      };
    case clsvqa_PaperEN.con_IdCurrEduCls:
      return (obj: clsvqa_PaperEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvqa_PaperEN.con_AnswerCount:
      return (obj: clsvqa_PaperEN) => {
        return obj.answerCount === value;
      };
    case clsvqa_PaperEN.con_ShareId:
      return (obj: clsvqa_PaperEN) => {
        return obj.shareId === value;
      };
    case clsvqa_PaperEN.con_TagsCount:
      return (obj: clsvqa_PaperEN) => {
        return obj.tagsCount === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vqa_Paper]中不存在!(in ${vqa_Paper_ConstructorName}.${strThisFuncName})`;
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
export async function vqa_Paper_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsvqa_PaperWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvqa_PaperWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvqa_PaperEN.con_QaPaperId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvqa_Paper = await vqa_Paper_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrvqa_Paper == null) return [];
  let arrvqa_PaperSel = arrvqa_Paper;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvqa_PaperSel = arrvqa_PaperSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvqa_PaperSel = arrvqa_PaperSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvqa_PaperSel = arrvqa_PaperSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvqa_PaperSel = arrvqa_PaperSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvqa_PaperSel = arrvqa_PaperSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvqa_PaperSel = arrvqa_PaperSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvqa_PaperSel = arrvqa_PaperSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvqa_PaperSel = arrvqa_PaperSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvqa_PaperSel.length == 0) return [];
  return arrvqa_PaperSel.map((x) => x.qaPaperId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vqa_Paper_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vqa_Paper_Controller, strAction);

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
        vqa_Paper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Paper_ConstructorName,
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
export async function vqa_Paper_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vqa_Paper_Controller, strAction);

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
        vqa_Paper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Paper_ConstructorName,
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
export async function vqa_Paper_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvqa_PaperEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vqa_Paper_Controller, strAction);

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
      const objvqa_Paper = vqa_Paper_GetObjFromJsonObj(returnObj);
      return objvqa_Paper;
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
        vqa_Paper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Paper_ConstructorName,
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
export async function vqa_Paper_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvqa_PaperEN.WhereFormat) == false) {
    strWhereCond = Format(clsvqa_PaperEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvqa_PaperEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvqa_PaperEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvqa_PaperEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvqa_PaperExObjLstCache: Array<clsvqa_PaperEN> = CacheHelper.Get(strKey);
    const arrvqa_PaperObjLstT = vqa_Paper_GetObjLstByJSONObjLst(arrvqa_PaperExObjLstCache);
    return arrvqa_PaperObjLstT;
  }
  try {
    const arrvqa_PaperExObjLst = await vqa_Paper_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvqa_PaperExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvqa_PaperExObjLst.length,
    );
    console.log(strInfo);
    return arrvqa_PaperExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vqa_Paper_ConstructorName,
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
export async function vqa_Paper_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvqa_PaperEN.WhereFormat) == false) {
    strWhereCond = Format(clsvqa_PaperEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvqa_PaperEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvqa_PaperEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvqa_PaperEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvqa_PaperEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvqa_PaperExObjLstCache: Array<clsvqa_PaperEN> = JSON.parse(strTempObjLst);
    const arrvqa_PaperObjLstT = vqa_Paper_GetObjLstByJSONObjLst(arrvqa_PaperExObjLstCache);
    return arrvqa_PaperObjLstT;
  }
  try {
    const arrvqa_PaperExObjLst = await vqa_Paper_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvqa_PaperExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvqa_PaperExObjLst.length,
    );
    console.log(strInfo);
    return arrvqa_PaperExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vqa_Paper_ConstructorName,
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
export async function vqa_Paper_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvqa_PaperEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvqa_PaperObjLstCache: Array<clsvqa_PaperEN> = JSON.parse(strTempObjLst);
    return arrvqa_PaperObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vqa_Paper_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvqa_PaperEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vqa_Paper_Controller, strAction);

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
          vqa_Paper_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vqa_Paper_GetObjLstByJSONObjLst(returnObjLst);
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
        vqa_Paper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Paper_ConstructorName,
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
export async function vqa_Paper_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvqa_PaperEN.WhereFormat) == false) {
    strWhereCond = Format(clsvqa_PaperEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvqa_PaperEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvqa_PaperEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvqa_PaperEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvqa_PaperEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvqa_PaperExObjLstCache: Array<clsvqa_PaperEN> = JSON.parse(strTempObjLst);
    const arrvqa_PaperObjLstT = vqa_Paper_GetObjLstByJSONObjLst(arrvqa_PaperExObjLstCache);
    return arrvqa_PaperObjLstT;
  }
  try {
    const arrvqa_PaperExObjLst = await vqa_Paper_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvqa_PaperExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvqa_PaperExObjLst.length,
    );
    console.log(strInfo);
    return arrvqa_PaperExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vqa_Paper_ConstructorName,
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
export async function vqa_Paper_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvqa_PaperEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvqa_PaperObjLstCache: Array<clsvqa_PaperEN> = JSON.parse(strTempObjLst);
    return arrvqa_PaperObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vqa_Paper_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsvqa_PaperEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsvqa_PaperWApi.vqa_Paper_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvqa_PaperWApi.vqa_Paper_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvqa_PaperObjLstCache;
  switch (clsvqa_PaperEN.CacheModeId) {
    case '04': //sessionStorage
      arrvqa_PaperObjLstCache = await vqa_Paper_GetObjLstsessionStorage(strIdCurrEduCls);
      break;
    case '03': //localStorage
      arrvqa_PaperObjLstCache = await vqa_Paper_GetObjLstlocalStorage(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrvqa_PaperObjLstCache = await vqa_Paper_GetObjLstClientCache(strIdCurrEduCls);
      break;
    default:
      arrvqa_PaperObjLstCache = await vqa_Paper_GetObjLstClientCache(strIdCurrEduCls);
      break;
  }
  return arrvqa_PaperObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vqa_Paper_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvqa_PaperObjLstCache;
  switch (clsvqa_PaperEN.CacheModeId) {
    case '04': //sessionStorage
      arrvqa_PaperObjLstCache = await vqa_Paper_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
      break;
    case '03': //localStorage
      arrvqa_PaperObjLstCache = await vqa_Paper_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrvqa_PaperObjLstCache = null;
      break;
    default:
      arrvqa_PaperObjLstCache = null;
      break;
  }
  return arrvqa_PaperObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrQaPaperIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vqa_Paper_GetSubObjLstCache(
  objvqa_PaperCond: clsvqa_PaperEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvqa_PaperObjLstCache = await vqa_Paper_GetObjLstCache(strIdCurrEduCls);
  let arrvqa_PaperSel = arrvqa_PaperObjLstCache;
  if (objvqa_PaperCond.sfFldComparisonOp == null || objvqa_PaperCond.sfFldComparisonOp == '')
    return arrvqa_PaperSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvqa_PaperCond.sfFldComparisonOp,
  );
  //console.log("clsvqa_PaperWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvqa_PaperCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvqa_PaperCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvqa_PaperSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvqa_PaperCond),
      vqa_Paper_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvqa_PaperEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrQaPaperId:关键字列表
 * @returns 对象列表
 **/
export async function vqa_Paper_GetObjLstByQaPaperIdLstAsync(
  arrQaPaperId: Array<string>,
): Promise<Array<clsvqa_PaperEN>> {
  const strThisFuncName = 'GetObjLstByQaPaperIdLstAsync';
  const strAction = 'GetObjLstByQaPaperIdLst';
  const strUrl = GetWebApiUrl(vqa_Paper_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrQaPaperId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vqa_Paper_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vqa_Paper_GetObjLstByJSONObjLst(returnObjLst);
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
        vqa_Paper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Paper_ConstructorName,
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
 * @param arrstrQaPaperIdLst:关键字列表
 * @returns 对象列表
 */
export async function vqa_Paper_GetObjLstByQaPaperIdLstCache(
  arrQaPaperIdLst: Array<string>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByQaPaperIdLstCache';
  try {
    const arrvqa_PaperObjLstCache = await vqa_Paper_GetObjLstCache(strIdCurrEduCls);
    const arrvqa_PaperSel = arrvqa_PaperObjLstCache.filter(
      (x) => arrQaPaperIdLst.indexOf(x.qaPaperId) > -1,
    );
    return arrvqa_PaperSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrQaPaperIdLst.join(','),
      vqa_Paper_ConstructorName,
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
export async function vqa_Paper_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvqa_PaperEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vqa_Paper_Controller, strAction);

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
          vqa_Paper_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vqa_Paper_GetObjLstByJSONObjLst(returnObjLst);
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
        vqa_Paper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Paper_ConstructorName,
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
export async function vqa_Paper_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvqa_PaperEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vqa_Paper_Controller, strAction);

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
          vqa_Paper_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vqa_Paper_GetObjLstByJSONObjLst(returnObjLst);
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
        vqa_Paper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Paper_ConstructorName,
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
export async function vqa_Paper_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvqa_PaperEN>();
  const arrvqa_PaperObjLstCache = await vqa_Paper_GetObjLstCache(strIdCurrEduCls);
  if (arrvqa_PaperObjLstCache.length == 0) return arrvqa_PaperObjLstCache;
  let arrvqa_PaperSel = arrvqa_PaperObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvqa_PaperCond = new clsvqa_PaperEN();
  ObjectAssign(objvqa_PaperCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvqa_PaperWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvqa_PaperCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvqa_PaperSel.length == 0) return arrvqa_PaperSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvqa_PaperSel = arrvqa_PaperSel.sort(vqa_Paper_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvqa_PaperSel = arrvqa_PaperSel.sort(objPagerPara.sortFun);
    }
    arrvqa_PaperSel = arrvqa_PaperSel.slice(intStart, intEnd);
    return arrvqa_PaperSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vqa_Paper_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvqa_PaperEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vqa_Paper_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvqa_PaperEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvqa_PaperEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vqa_Paper_Controller, strAction);

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
          vqa_Paper_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vqa_Paper_GetObjLstByJSONObjLst(returnObjLst);
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
        vqa_Paper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Paper_ConstructorName,
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
 * @param objstrQaPaperIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vqa_Paper_IsExistRecordCache(
  objvqa_PaperCond: clsvqa_PaperEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvqa_PaperObjLstCache = await vqa_Paper_GetObjLstCache(strIdCurrEduCls);
  if (arrvqa_PaperObjLstCache == null) return false;
  let arrvqa_PaperSel = arrvqa_PaperObjLstCache;
  if (objvqa_PaperCond.sfFldComparisonOp == null || objvqa_PaperCond.sfFldComparisonOp == '')
    return arrvqa_PaperSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvqa_PaperCond.sfFldComparisonOp,
  );
  //console.log("clsvqa_PaperWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvqa_PaperCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvqa_PaperCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvqa_PaperSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvqa_PaperCond),
      vqa_Paper_ConstructorName,
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
export async function vqa_Paper_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vqa_Paper_Controller, strAction);

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
        vqa_Paper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Paper_ConstructorName,
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
 * @param strQaPaperId:所给的关键字
 * @returns 对象
 */
export async function vqa_Paper_IsExistCache(strQaPaperId: string, strIdCurrEduCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvqa_PaperObjLstCache = await vqa_Paper_GetObjLstCache(strIdCurrEduCls);
  if (arrvqa_PaperObjLstCache == null) return false;
  try {
    const arrvqa_PaperSel = arrvqa_PaperObjLstCache.filter((x) => x.qaPaperId == strQaPaperId);
    if (arrvqa_PaperSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strQaPaperId,
      vqa_Paper_ConstructorName,
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
 * @param strQaPaperId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vqa_Paper_IsExistAsync(strQaPaperId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vqa_Paper_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strQaPaperId,
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
        vqa_Paper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Paper_ConstructorName,
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
export async function vqa_Paper_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vqa_Paper_Controller, strAction);

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
        vqa_Paper_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Paper_ConstructorName,
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
 * @param objvqa_PaperCond:条件对象
 * @returns 对象列表记录数
 */
export async function vqa_Paper_GetRecCountByCondCache(
  objvqa_PaperCond: clsvqa_PaperEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvqa_PaperObjLstCache = await vqa_Paper_GetObjLstCache(strIdCurrEduCls);
  if (arrvqa_PaperObjLstCache == null) return 0;
  let arrvqa_PaperSel = arrvqa_PaperObjLstCache;
  if (objvqa_PaperCond.sfFldComparisonOp == null || objvqa_PaperCond.sfFldComparisonOp == '')
    return arrvqa_PaperSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvqa_PaperCond.sfFldComparisonOp,
  );
  //console.log("clsvqa_PaperWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvqa_PaperCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvqa_PaperCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvqa_PaperSel = arrvqa_PaperSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvqa_PaperSel = arrvqa_PaperSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvqa_PaperSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvqa_PaperCond),
      vqa_Paper_ConstructorName,
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
export function vqa_Paper_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vqa_Paper_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvqa_PaperEN._CurrTabName, strIdCurrEduCls);
    switch (clsvqa_PaperEN.CacheModeId) {
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
export function vqa_Paper_GetJSONStrByObj(pobjvqa_PaperEN: clsvqa_PaperEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvqa_PaperEN);
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
export function vqa_Paper_GetObjLstByJSONStr(strJSON: string): Array<clsvqa_PaperEN> {
  let arrvqa_PaperObjLst = new Array<clsvqa_PaperEN>();
  if (strJSON === '') {
    return arrvqa_PaperObjLst;
  }
  try {
    arrvqa_PaperObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvqa_PaperObjLst;
  }
  return arrvqa_PaperObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvqa_PaperObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vqa_Paper_GetObjLstByJSONObjLst(
  arrvqa_PaperObjLstS: Array<clsvqa_PaperEN>,
): Array<clsvqa_PaperEN> {
  const arrvqa_PaperObjLst = new Array<clsvqa_PaperEN>();
  for (const objInFor of arrvqa_PaperObjLstS) {
    const obj1 = vqa_Paper_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvqa_PaperObjLst.push(obj1);
  }
  return arrvqa_PaperObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vqa_Paper_GetObjByJSONStr(strJSON: string): clsvqa_PaperEN {
  let pobjvqa_PaperEN = new clsvqa_PaperEN();
  if (strJSON === '') {
    return pobjvqa_PaperEN;
  }
  try {
    pobjvqa_PaperEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvqa_PaperEN;
  }
  return pobjvqa_PaperEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vqa_Paper_GetCombineCondition(objvqa_PaperCond: clsvqa_PaperEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_QaPaperId,
    ) == true
  ) {
    const strComparisonOpQaPaperId: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_QaPaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_QaPaperId,
      objvqa_PaperCond.qaPaperId,
      strComparisonOpQaPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_PaperId,
      objvqa_PaperCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_QuestionsCount,
    ) == true
  ) {
    const strComparisonOpQuestionsCount: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_QuestionsCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvqa_PaperEN.con_QuestionsCount,
      objvqa_PaperCond.questionsCount,
      strComparisonOpQuestionsCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_IsDelete,
    ) == true
  ) {
    if (objvqa_PaperCond.isDelete == true) {
      strWhereCond += Format(" And {0} = '1'", clsvqa_PaperEN.con_IsDelete);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvqa_PaperEN.con_IsDelete);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_IsPublic,
    ) == true
  ) {
    if (objvqa_PaperCond.isPublic == true) {
      strWhereCond += Format(" And {0} = '1'", clsvqa_PaperEN.con_IsPublic);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvqa_PaperEN.con_IsPublic);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_IsSubmit,
    ) == true
  ) {
    if (objvqa_PaperCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvqa_PaperEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvqa_PaperEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_UpdUser,
      objvqa_PaperCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_UserName,
      objvqa_PaperCond.userName,
      strComparisonOpUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_UpdDate,
      objvqa_PaperCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_Memo,
      objvqa_PaperCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_PaperTitle,
    ) == true
  ) {
    const strComparisonOpPaperTitle: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_PaperTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_PaperTitle,
      objvqa_PaperCond.paperTitle,
      strComparisonOpPaperTitle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_AttachmentCount,
    ) == true
  ) {
    const strComparisonOpAttachmentCount: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_AttachmentCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvqa_PaperEN.con_AttachmentCount,
      objvqa_PaperCond.attachmentCount,
      strComparisonOpAttachmentCount,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_Periodical,
    ) == true
  ) {
    const strComparisonOpPeriodical: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_Periodical];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_Periodical,
      objvqa_PaperCond.periodical,
      strComparisonOpPeriodical,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_Author,
    ) == true
  ) {
    const strComparisonOpAuthor: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_Author];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_Author,
      objvqa_PaperCond.author,
      strComparisonOpAuthor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_ResearchQuestion,
    ) == true
  ) {
    const strComparisonOpResearchQuestion: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_ResearchQuestion];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_ResearchQuestion,
      objvqa_PaperCond.researchQuestion,
      strComparisonOpResearchQuestion,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_LiteratureSources,
    ) == true
  ) {
    const strComparisonOpLiteratureSources: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_LiteratureSources];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_LiteratureSources,
      objvqa_PaperCond.literatureSources,
      strComparisonOpLiteratureSources,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_UploadfileUrl,
    ) == true
  ) {
    const strComparisonOpUploadfileUrl: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_UploadfileUrl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_UploadfileUrl,
      objvqa_PaperCond.uploadfileUrl,
      strComparisonOpUploadfileUrl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_IdXzMajor,
    ) == true
  ) {
    const strComparisonOpIdXzMajor: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_IdXzMajor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_IdXzMajor,
      objvqa_PaperCond.idXzMajor,
      strComparisonOpIdXzMajor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_MajorName,
    ) == true
  ) {
    const strComparisonOpMajorName: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_MajorName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_MajorName,
      objvqa_PaperCond.majorName,
      strComparisonOpMajorName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_IdCurrEduCls,
      objvqa_PaperCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_AnswerCount,
    ) == true
  ) {
    const strComparisonOpAnswerCount: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_AnswerCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvqa_PaperEN.con_AnswerCount,
      objvqa_PaperCond.answerCount,
      strComparisonOpAnswerCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_ShareId,
    ) == true
  ) {
    const strComparisonOpShareId: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_ShareId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_PaperEN.con_ShareId,
      objvqa_PaperCond.shareId,
      strComparisonOpShareId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_PaperCond.dicFldComparisonOp,
      clsvqa_PaperEN.con_TagsCount,
    ) == true
  ) {
    const strComparisonOpTagsCount: string =
      objvqa_PaperCond.dicFldComparisonOp[clsvqa_PaperEN.con_TagsCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvqa_PaperEN.con_TagsCount,
      objvqa_PaperCond.tagsCount,
      strComparisonOpTagsCount,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvqa_PaperENS:源对象
 * @param objvqa_PaperENT:目标对象
 */
export function vqa_Paper_CopyObjTo(
  objvqa_PaperENS: clsvqa_PaperEN,
  objvqa_PaperENT: clsvqa_PaperEN,
): void {
  objvqa_PaperENT.qaPaperId = objvqa_PaperENS.qaPaperId; //论文答疑Id
  objvqa_PaperENT.paperId = objvqa_PaperENS.paperId; //论文Id
  objvqa_PaperENT.questionsCount = objvqa_PaperENS.questionsCount; //提问计数
  objvqa_PaperENT.isDelete = objvqa_PaperENS.isDelete; //是否删除
  objvqa_PaperENT.isPublic = objvqa_PaperENS.isPublic; //是否公开
  objvqa_PaperENT.isSubmit = objvqa_PaperENS.isSubmit; //是否提交
  objvqa_PaperENT.updUser = objvqa_PaperENS.updUser; //修改人
  objvqa_PaperENT.userName = objvqa_PaperENS.userName; //用户名
  objvqa_PaperENT.updDate = objvqa_PaperENS.updDate; //修改日期
  objvqa_PaperENT.memo = objvqa_PaperENS.memo; //备注
  objvqa_PaperENT.paperTitle = objvqa_PaperENS.paperTitle; //论文标题
  objvqa_PaperENT.attachmentCount = objvqa_PaperENS.attachmentCount; //附件计数
  objvqa_PaperENT.paperContent = objvqa_PaperENS.paperContent; //主题内容
  objvqa_PaperENT.periodical = objvqa_PaperENS.periodical; //期刊
  objvqa_PaperENT.author = objvqa_PaperENS.author; //作者
  objvqa_PaperENT.researchQuestion = objvqa_PaperENS.researchQuestion; //研究问题
  objvqa_PaperENT.literatureSources = objvqa_PaperENS.literatureSources; //文献来源
  objvqa_PaperENT.uploadfileUrl = objvqa_PaperENS.uploadfileUrl; //文件地址
  objvqa_PaperENT.idXzMajor = objvqa_PaperENS.idXzMajor; //专业流水号
  objvqa_PaperENT.majorName = objvqa_PaperENS.majorName; //专业名称
  objvqa_PaperENT.idCurrEduCls = objvqa_PaperENS.idCurrEduCls; //教学班流水号
  objvqa_PaperENT.answerCount = objvqa_PaperENS.answerCount; //回答计数
  objvqa_PaperENT.shareId = objvqa_PaperENS.shareId; //分享Id
  objvqa_PaperENT.tagsCount = objvqa_PaperENS.tagsCount; //论文标注数
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvqa_PaperENS:源对象
 * @param objvqa_PaperENT:目标对象
 */
export function vqa_Paper_GetObjFromJsonObj(objvqa_PaperENS: clsvqa_PaperEN): clsvqa_PaperEN {
  const objvqa_PaperENT: clsvqa_PaperEN = new clsvqa_PaperEN();
  ObjectAssign(objvqa_PaperENT, objvqa_PaperENS);
  return objvqa_PaperENT;
}
