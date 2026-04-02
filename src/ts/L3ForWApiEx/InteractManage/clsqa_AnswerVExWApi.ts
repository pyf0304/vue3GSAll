/*-- -- -- -- -- -- -- -- -- -- --
类名:clsqa_AnswerVExWApi
表名:qa_AnswerV(01120756)
生成代码版本:2021.06.19.1
生成日期:2021/06/19 15:44:49
生成者:pyf
生成服务器IP:103.116.76.183
工程名称:问卷调查
工程ID:0112
相关数据库:103.116.76.183,9433EduHigh_Jsie
PrjDataBaseId:0170
模块中文名:互动管理
模块英文名:InteractManage
框架-层名:WA_访问扩展层(WA_AccessEx)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/
//import * as QQ from "q";
import { qa_AnswerVer_CopyObjTo } from '@/ts/L3ForWApi/InteractManage/clsqa_AnswerVerWApi';
import { clsqa_AnswerVerEN } from '@/ts/L0Entity/InteractManage/clsqa_AnswerVerEN';
import { clsqa_AnswerVerENEx } from '@/ts/L0Entity/InteractManage/clsqa_AnswerVerENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';

export class clsqa_AnswerVExWApi {
  public static mstrController = 'qa_AnswerVExApi';
  public objqa_AnswerVerEN: clsqa_AnswerVerEN = new clsqa_AnswerVerEN();

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_ClassConstructor)
  /// </summary>
  constructor() {}


  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objqa_AnswerVerENS">源对象</param>
  /// <returns>目标对象=>clsqa_AnswerVerEN:objqa_AnswerVerENT</returns>
  public static CopyToEx(objqa_AnswerVerENS: clsqa_AnswerVerEN): clsqa_AnswerVerENEx {
    const objqa_AnswerVerENT = new clsqa_AnswerVerENEx();
    try {
      qa_AnswerVer_CopyObjTo(objqa_AnswerVerENS, objqa_AnswerVerENT);
      return objqa_AnswerVerENT;
    } catch (e:any) {
      const strMsg: string = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
      console.error(strMsg);
      alert(strMsg);
      return objqa_AnswerVerENT;
    }
  }
}
