import { SchoolTerm_CopyObjTo } from '@/ts/L3ForWApi/SysPara/clsSchoolTermWApi';
import { clsSchoolTermEN } from '@/ts/L0Entity/SysPara/clsSchoolTermEN';
import { clsSchoolTermENEx } from '@/ts/L0Entity/SysPara/clsSchoolTermENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';

export class clsSchoolTermExWApi {
  public static mstrController = 'SchoolTermExApi';
  public objSchoolTermEN: clsSchoolTermEN = new clsSchoolTermEN();

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_ClassConstructor)
  /// </summary>
  constructor() {}


  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objSchoolTermENS">源对象</param>
  /// <returns>目标对象=>clsSchoolTermEN:objSchoolTermENT</returns>
  public static CopyToEx(objSchoolTermENS: clsSchoolTermEN): clsSchoolTermENEx {
    const objSchoolTermENT = new clsSchoolTermENEx();
    try {
      SchoolTerm_CopyObjTo(objSchoolTermENS, objSchoolTermENT);
      return objSchoolTermENT;
    } catch (e:any) {
      const strMsg: string = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
      console.error(strMsg);
      alert(strMsg);
      return objSchoolTermENT;
    }
  }
}
