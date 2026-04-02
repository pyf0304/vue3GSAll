/*-- -- -- -- -- -- -- -- -- -- --
 类名:clsXzGradeBaseExWApi
 表名:XzGradeBase(01120129)
 生成代码版本:2021.06.06.1
 生成日期:2021/06/11 17:41:41
 生成者:pyf
 生成服务器IP:103.116.76.183
 工程名称:问卷调查
 工程ID:0112
 相关数据库:103.116.76.183,9433EduHigh_Jsie
 PrjDataBaseId:0170
 模块中文名:系统参数
 模块英文名:SysPara
 框架-层名:WA_访问扩展层(WA_AccessEx)
 编程语言:TypeScript
 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
        2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 == == == == == == == == == == == == 
 */
//import * as QQ from "q";
import { XzGradeBase_CopyObjTo } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
import { clsXzGradeBaseENEx } from '@/ts/L0Entity/SysPara/clsXzGradeBaseENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';

export class clsXzGradeBaseExWApi {
  public static mstrController = 'XzGradeBaseExApi';
  public objXzGradeBaseEN: clsXzGradeBaseEN = new clsXzGradeBaseEN();

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_ClassConstructor)
  /// </summary>
  constructor() {}

  

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objXzGradeBaseENS">源对象</param>
  /// <returns>目标对象=>clsXzGradeBaseEN:objXzGradeBaseENT</returns>
  public static CopyToEx(objXzGradeBaseENS: clsXzGradeBaseEN): clsXzGradeBaseENEx {
    const objXzGradeBaseENT = new clsXzGradeBaseENEx();
    try {
      XzGradeBase_CopyObjTo(objXzGradeBaseENS, objXzGradeBaseENT);
      return objXzGradeBaseENT;
    } catch (e:any) {
      const strMsg: string = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
      console.error(strMsg);
      alert(strMsg);
      return objXzGradeBaseENT;
    }
  }
}
