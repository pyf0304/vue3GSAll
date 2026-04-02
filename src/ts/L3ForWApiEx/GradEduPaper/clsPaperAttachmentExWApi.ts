/*-- -- -- -- -- -- -- -- -- -- --
 类名:clsPaperAttachmentExWApi
 表名:PaperAttachment(01120578)
 生成代码版本:2021.06.06.1
 生成日期:2021/06/11 17:35:32
 生成者:pyf
 生成服务器IP:103.116.76.183
 工程名称:问卷调查
 工程ID:0112
 相关数据库:103.116.76.183,9433EduHigh_Jsie
 PrjDataBaseId:0170
 模块中文名:研培论文
 模块英文名:GradEduPaper
 框架-层名:WA_访问扩展层(WA_AccessEx)
 编程语言:TypeScript
 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
        2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 == == == == == == == == == == == == 
 */
//import * as QQ from "q";
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  PaperAttachment_AddNewRecordAsync,
  PaperAttachment_CopyObjTo,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { clsPaperAttachmentENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentENEx';
import { Format } from '@/ts/PubFun/clsString';
import { UploadResponseData } from '@/ts/FunClass/UploadResponseData';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { message } from '@/utils/myMessage';
import { userStore } from '@/store/modulesShare/user';

export class clsPaperAttachmentExWApi {
  public static mstrController = 'PaperAttachmentExApi';
  public objPaperAttachmentEN: clsPaperAttachmentEN = new clsPaperAttachmentEN();

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_ClassConstructor)
  /// </summary>
  constructor() {}

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objPaperAttachmentENS">源对象</param>
  /// <returns>目标对象=>clsPaperAttachmentEN:objPaperAttachmentENT</returns>
  public static CopyToEx(objPaperAttachmentENS: clsPaperAttachmentEN): clsPaperAttachmentENEx {
    const objPaperAttachmentENT = new clsPaperAttachmentENEx();
    try {
      PaperAttachment_CopyObjTo(objPaperAttachmentENS, objPaperAttachmentENT);
      return objPaperAttachmentENT;
    } catch (e: any) {
      const strMsg: string = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
      console.error(strMsg);
      alert(strMsg);
      return objPaperAttachmentENT;
    }
  }
}

function PaperAttachmentEx_PutDataToPaperAttachmentClass(
  pobjPaperAttachmentEN: clsPaperAttachmentEN,
  strPaperId: string,
  filePath: string,
  strIdCurrEduCls: string,
) {
  pobjPaperAttachmentEN.SetPaperId(strPaperId); // 论文Id
  let strfilePath = filePath;
  const index = strfilePath.lastIndexOf('/');
  strfilePath = strfilePath.substring(index + 1, strfilePath.length);
  pobjPaperAttachmentEN.SetFilePath(filePath);
  pobjPaperAttachmentEN.SetPaperAttachmentName(strfilePath);

  pobjPaperAttachmentEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0)); // 修改日期
  pobjPaperAttachmentEN.SetIdCurrEduCls(strIdCurrEduCls); //教学班
  pobjPaperAttachmentEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
}
async function PaperAttachmentEx_AddPaperAttachmentSave(
  strPaperId: string,
  filePath: string,
  strIdCurrEduCls: string,
) {
  const objPaperAttachmentEN: clsPaperAttachmentEN = new clsPaperAttachmentEN();
  await PaperAttachmentEx_PutDataToPaperAttachmentClass(
    objPaperAttachmentEN,
    strPaperId,
    filePath,
    strIdCurrEduCls,
  );
  try {
    const returnBool = await PaperAttachment_AddNewRecordAsync(objPaperAttachmentEN);
    if (returnBool == true) {
    } else {
      const strInfo = `论文附件添加不成功!`;
      //显示信息框
      message.warning(strInfo);
    }
    return returnBool; //一定要有一个返回值，否则会出错！
  } catch (e: any) {
    const strMsg = `论文附件添加不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  //return true;//一定要有一个返回值，否则会出错！
}

export async function PaperAttachmentEx_AddPaperAttachment(
  strPaperId: string,
  strIdCurrEduCls: string,
  uploadResponseData: UploadResponseData,
) {
  if (strPaperId == '') {
    const strInfo = `添加论文附件时，论文Id不能为空!`;

    //显示信息框
    alert(strInfo);
    return;
  }
  try {
    //存放主键

    //判断是否有返回的附件路径值
    if (uploadResponseData.fileNameOne == '') return true;

    //第一个附件框判断
    const fileOne = uploadResponseData.fileNameOne;
    const returnBool1 = await PaperAttachmentEx_AddPaperAttachmentSave(
      strPaperId,
      fileOne,
      strIdCurrEduCls,
    );

    if (returnBool1 != true) {
      const strInfo = `添加第1个论文附件失败，请修改该条数据重新上传附件!`;
      alert(strInfo);
      return false;
    }

    if (uploadResponseData.fileNameTwo == '') return true;
    const fileTwo = uploadResponseData.fileNameTwo;
    const returnBool2 = await PaperAttachmentEx_AddPaperAttachmentSave(
      strPaperId,
      fileTwo,
      strIdCurrEduCls,
    );

    if (returnBool2 != true) {
      const strInfo = `添加第2个论文附件失败，请修改该条数据重新上传附件!`;
      alert(strInfo);
      return false;
    }

    if (uploadResponseData.fileNameThree == '') return true;

    const fileThree = uploadResponseData.fileNameThree;
    const returnBool3 = await PaperAttachmentEx_AddPaperAttachmentSave(
      strPaperId,
      fileThree,
      strIdCurrEduCls,
    );

    if (returnBool3 != true) {
      const strInfo = `添加第3个论文附件失败，请修改该条数据重新上传附件!`;
      alert(strInfo);
      return false;
    }
    return true;
  } catch (e: any) {
    const strMsg = `添加论文附件不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
}
