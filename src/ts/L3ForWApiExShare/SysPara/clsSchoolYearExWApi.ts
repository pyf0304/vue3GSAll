//import * as QQ from "q";
import { SchoolYear_CopyObjTo } from '@/ts/L3ForWApi/SysPara/clsSchoolYearWApi';
import { clsSchoolYearEN } from '@/ts/L0Entity/SysPara/clsSchoolYearEN';
import { clsSchoolYearENEx } from '@/ts/L0Entity/SysPara/clsSchoolYearENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';

export class clsSchoolYearExWApi {
  public static mstrController = 'SchoolYearExApi';
  public objSchoolYearEN: clsSchoolYearEN = new clsSchoolYearEN();

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_ClassConstructor)
  /// </summary>
  constructor() {}


  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objSchoolYearENS">源对象</param>
  /// <returns>目标对象=>clsSchoolYearEN:objSchoolYearENT</returns>
  public static CopyToEx(objSchoolYearENS: clsSchoolYearEN): clsSchoolYearENEx {
    const objSchoolYearENT = new clsSchoolYearENEx();
    try {
      SchoolYear_CopyObjTo(objSchoolYearENS, objSchoolYearENT);
      return objSchoolYearENT;
    } catch (e:any) {
      const strMsg: string = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
      console.error(strMsg);
      alert(strMsg);
      return objSchoolYearENT;
    }
  }
}
