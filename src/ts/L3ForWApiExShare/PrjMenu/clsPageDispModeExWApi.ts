/*-- -- -- -- -- -- -- -- -- -- --
 类名:clsPageDispModeExWApi
 表名:PageDispMode(01120908)
 生成代码版本:2021.06.06.1
 生成日期:2021/06/11 17:35:26
 生成者:pyf
 生成服务器IP:103.116.76.183
 工程名称:问卷调查
 工程ID:0112
 相关数据库:103.116.76.183,9433EduHigh_Jsie
 PrjDataBaseId:0170
 模块中文名:菜单管理
 模块英文名:PrjMenu
 框架-层名:WA_访问扩展层(WA_AccessEx)
 编程语言:TypeScript
 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
        2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 == == == == == == == == == == == == 
 */

/// <summary>
/// 页面显示模式(PageDispMode)
/// (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
/// </summary>
/**
 * Created by pyf on 2021年06月11日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

//import * as QQ from "q";
import { clsPageDispModeEN } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { clsPageDispModeENEx } from '@/ts/L0Entity/PrjMenu/clsPageDispModeENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

import { Format } from '@/ts/PubFun/clsString';

export class clsPageDispModeExWApi {
  public static mstrController = 'PageDispModeExApi';
  public objPageDispModeEN: clsPageDispModeEN = new clsPageDispModeEN();

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_ClassConstructor)
  /// </summary>
  constructor() {}


  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objPageDispModeENS">源对象</param>
  /// <returns>目标对象=>clsPageDispModeEN:objPageDispModeENT</returns>
  public static CopyToEx(objPageDispModeENS: clsPageDispModeEN): clsPageDispModeENEx {
    const objPageDispModeENT = new clsPageDispModeENEx();
    try {
      PageDispMode_CopyObjTo(objPageDispModeENS, objPageDispModeENT);
      return objPageDispModeENT;
    } catch (e:any) {
      const strMsg: string = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
      console.error(strMsg);
      alert(strMsg);
      return objPageDispModeENT;
    }
  }
}

function PageDispMode_CopyObjTo(
  objPageDispModeENS: clsPageDispModeEN,
  objPageDispModeENT: clsPageDispModeENEx,
) {
  console.log(objPageDispModeENS);
  console.log(objPageDispModeENT);
  throw new Error('Function not implemented.');
}
