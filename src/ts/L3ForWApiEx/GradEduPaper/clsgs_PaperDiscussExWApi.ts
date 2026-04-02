/*-- -- -- -- -- -- -- -- -- -- --
 类名:clsgs_PaperDiscussExWApi
 表名:gs_PaperDiscuss(01120681)
 生成代码版本:2021.06.06.1
 生成日期:2021/06/11 17:33:42
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
import { gs_PaperDiscuss_CopyObjTo } from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperDiscussWApi';
import { clsgs_PaperDiscussEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperDiscussEN';
import { clsgs_PaperDiscussENEx } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperDiscussENEx';
import { Format } from '@/ts/PubFun/clsString';

export class clsgs_PaperDiscussExWApi {
  public static mstrController = 'gs_PaperDiscussExApi';
  public objgs_PaperDiscussEN: clsgs_PaperDiscussEN = new clsgs_PaperDiscussEN();

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_ClassConstructor)
  /// </summary>
  constructor() {}


  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objgs_PaperDiscussENS">源对象</param>
  /// <returns>目标对象=>clsgs_PaperDiscussEN:objgs_PaperDiscussENT</returns>
  public static CopyToEx(objgs_PaperDiscussENS: clsgs_PaperDiscussEN): clsgs_PaperDiscussENEx {
    const objgs_PaperDiscussENT = new clsgs_PaperDiscussENEx();
    try {
      gs_PaperDiscuss_CopyObjTo(objgs_PaperDiscussENS, objgs_PaperDiscussENT);
      return objgs_PaperDiscussENT;
    } catch (e:any) {
      const strMsg: string = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
      console.error(strMsg);
      alert(strMsg);
      return objgs_PaperDiscussENT;
    }
  }
}
