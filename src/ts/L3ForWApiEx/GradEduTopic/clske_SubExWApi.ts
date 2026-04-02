/*-- -- -- -- -- -- -- -- -- -- --
类名:clske_SubExWApi
表名:ke_Sub(01120660)
生成代码版本:2021.06.19.1
生成日期:2021/06/19 14:59:55
生成者:pyf
生成服务器IP:192.168.1.12
工程名称:问卷调查
工程ID:0112
相关数据库:103.116.76.183,9433EduHigh_Jsie
PrjDataBaseId:0170
模块中文名:研培主题
模块英文名:GradEduTopic
框架-层名:WA_访问扩展层(WA_AccessEx)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/
//import * as QQ from "q";
import { ke_Sub_CopyObjTo } from '@/ts/L3ForWApi/GradEduTopic/clske_SubWApi';
import { clske_SubEN } from '@/ts/L0Entity/GradEduTopic/clske_SubEN';
import { clske_SubENEx } from '@/ts/L0Entity/GradEduTopic/clske_SubENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';

export class clske_SubExWApi {
  public static mstrController = 'ke_SubExApi';
  public objke_SubEN: clske_SubEN = new clske_SubEN();

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_ClassConstructor)
  /// </summary>
  constructor() {}

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objke_SubENS">源对象</param>
  /// <returns>目标对象=>clske_SubEN:objke_SubENT</returns>
  public static CopyToEx(objke_SubENS: clske_SubEN): clske_SubENEx {
    const objke_SubENT = new clske_SubENEx();
    try {
      ke_Sub_CopyObjTo(objke_SubENS, objke_SubENT);
      return objke_SubENT;
    } catch (e:any) {
      const strMsg: string = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
      console.error(strMsg);
      alert(strMsg);
      return objke_SubENT;
    }
  }
}
