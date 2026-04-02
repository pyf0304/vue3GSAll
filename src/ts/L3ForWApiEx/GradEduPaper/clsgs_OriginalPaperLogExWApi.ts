/*-- -- -- -- -- -- -- -- -- -- --
 类名:clsgs_OriginalPaperLogExWApi
 表名:gs_OriginalPaperLog(01120680)
 生成代码版本:2021.06.06.1
 生成日期:2021/06/11 17:33:35
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
import { gs_OriginalPaperLog_CopyObjTo } from '@/ts/L3ForWApi/GradEduPaper/clsgs_OriginalPaperLogWApi';
import { clsgs_OriginalPaperLogEN } from '@/ts/L0Entity/GradEduPaper/clsgs_OriginalPaperLogEN';
import { clsgs_OriginalPaperLogENEx } from '@/ts/L0Entity/GradEduPaper/clsgs_OriginalPaperLogENEx';
import { Format } from '@/ts/PubFun/clsString';

export class clsgs_OriginalPaperLogExWApi {
  public static mstrController = 'gs_OriginalPaperLogExApi';
  public objgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN = new clsgs_OriginalPaperLogEN();

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_ClassConstructor)
  /// </summary>
  constructor() {}



  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objgs_OriginalPaperLogENS">源对象</param>
  /// <returns>目标对象=>clsgs_OriginalPaperLogEN:objgs_OriginalPaperLogENT</returns>
  public static CopyToEx(
    objgs_OriginalPaperLogENS: clsgs_OriginalPaperLogEN,
  ): clsgs_OriginalPaperLogENEx {
    const objgs_OriginalPaperLogENT = new clsgs_OriginalPaperLogENEx();
    try {
      gs_OriginalPaperLog_CopyObjTo(objgs_OriginalPaperLogENS, objgs_OriginalPaperLogENT);
      return objgs_OriginalPaperLogENT;
    } catch (e:any) {
      const strMsg: string = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
      console.error(strMsg);
      alert(strMsg);
      return objgs_OriginalPaperLogENT;
    }
  }
}
