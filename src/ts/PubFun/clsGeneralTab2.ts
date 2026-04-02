/*
 * 功能：公共数据实体底层
 * 版本：2019-07-24-01
 * 作者：潘以锋
 * */

interface ILookup<T> {
  [key: string]: T;
}
export class clsGeneralTabSim2 {}
export class clsGeneralTab2 implements ILookup<any> {
  private mstrsfUpdFldSetStr: string; //字符型标签
  private mstrsfFldComparisonOp: string; //字符型标签

  private mintIntTag: Number; //整型Tag
  private mstrStrTag: string; //字符型标签
  private mbolIsCheckProperty; // : Bool;     //是否检查属性
  public static _CurrTabName = ''; //当前表名，与该类相关的表名
  public static _KeyFldName = ''; //当前表的关键字字段的名称
  public hmProperty: { [index: string]: boolean }; // : Dictionary<String, String>!
  public dicFldComparisonOp: { [index: string]: string }; // :Dictionary<String, String>!
  public whereCond = '';

  //以下是属性变量
  ///该函数不存在:
  constructor() {
    this.mintIntTag = 0; //整型Tag
    this.mstrStrTag = ''; //字符型标签
    this.mbolIsCheckProperty = false; //是否检查属性
    this.hmProperty = {};
    this.dicFldComparisonOp = {};
    this.mstrsfUpdFldSetStr = ''; //修改字符标志串
    this.mstrsfFldComparisonOp = ''; //修改字符标志串
    this.whereCond = '';
  }
  //以下是出错信息
  //public mstrErrMsg :Array<String> = [ "0:正常", "1:院系号为空", "2:专业编号为空", "3:已有相同的编号"];

  //以下是出错信息号码
  //public mintErrNo: Number = 0; //0:正常,1:房间号为空,2:学号为空
  //public mstrDispErrMsg: string; //对外显示的错误信息
  //public mstrModuleName: string;

  //		public static String mstrClassName;
  //public mblnDisposed : boolean = false; //是否已经释放对象(用于析构函数)
  //public EXCEPTION_MSG = " there was an error in the method. please see the Application Log for details.";

  /// <summary>
  /// 常量:"intTag"
  /// (ExamLibWeb.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public con_IntTag: String = 'intTag'; //整型Tag

  /// <summary>
  /// 常量:"StrTag"
  /// (ExamLibWeb.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public con_StrTag: String = 'StrTag'; //字符型标签

  /// <summary>
  /// 常量:"IsCheckProperty"
  /// (ExamLibWeb.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public con_IsCheckProperty: String = 'IsCheckProperty'; //是否检查属性

  /// <summary>
  /// 整型Tag(说明:;字段类型:int;字段长度:4;是否可空:False)
  /// (ExamLibWeb.BusinessLogicEx.clsPrjTabFldBLEx:ToString2)
  /// </summary>
  public get intTag() {
    // : Int
    return this.mintIntTag;
  }
  public set intTag(
    value: Number, // : Int
  ) {
    this.mintIntTag = value;
    //记录修改过的字段
    this.hmProperty['intTag'] = true;
  }

  /// <summary>
  /// 字符型标签(说明:;字段类型:string;字段长度:1000;是否可空:False)
  /// (ExamLibWeb.BusinessLogicEx.clsPrjTabFldBLEx:ToString2)
  /// </summary>
  public get StrTag() {
    // : String
    return this.mstrStrTag;
  }
  public set StrTag(value: string) {
    if (value === '') {
      //this.mintErrNo = 1;
      this.mstrStrTag = value;
    } else {
      this.mstrStrTag = value;
    }
    //记录修改过的字段
    this.hmProperty['StrTag'] = true;
  }

  public get sfUpdFldSetStr(): string {
    return this.mstrsfUpdFldSetStr;
  }
  public set sfUpdFldSetStr(value: string) {
    this.mstrsfUpdFldSetStr = value;
  }
  public get sfFldComparisonOp(): string {
    return this.mstrsfFldComparisonOp;
  }
  public set sfFldComparisonOp(value: string) {
    this.mstrsfFldComparisonOp = value;
  }

  //public get hmProperty()// : String
  //{
  //    return this.hmProperty;
  //}
  //public sethmProperty(value: string, IsUpdated:boolean) {
  //    this.hmProperty[value] = IsUpdated;
  //}

  /// <summary>
  /// 是否检查属性(说明:;字段类型:bool;字段长度:1;是否可空:False)
  /// (ExamLibWeb.BusinessLogicEx.clsPrjTabFldBLEx:ToString2)
  /// </summary>
  public get _IsCheckProperty(): boolean {
    return this.mbolIsCheckProperty;
  }
  public set _IsCheckProperty(value: boolean) {
    this.mbolIsCheckProperty = value;
    //记录修改过的字段
    this.hmProperty['IsCheckProperty'] = true;
  }

  /// <summary>
  /// 设置类的有些属性初始值
  /// </summary>
  //public SetInit () {
  //    this._CurrTabName = "Users"; //当前表名，与该类相关的表名
  //    this.KeyFldName = "userId"; //当前表的关键字字段的名称
  //    this.hmProperty = {};//new { [key: string]: string }();
  //    //mstrModuleName = this.GetType().toString();
  //}

  public get UpdFldProperty() {
    // -> Dictionary<String, String>  {
    return this.hmProperty;
  }

  /*
   * 获取修改的字段名串
   */
  public get updFldString(): string {
    //->String
    let sbMsg = '';
    //iLen = this.hmProperty.length();
    for (const key in this.hmProperty) {
      // const value = this.hmProperty[key];
      sbMsg = `${sbMsg + key}|`;
    }
    return sbMsg;
  }

  //public get ErrNo ()//->Int
  //{
  //    return this.mintErrNo;
  //}

  //public set ErrNo (value:Number) {
  //    this.mintErrNo = value;
  //}

  //public get DispErrMsg () { //对外显示的错误信息
  //    return this.mstrDispErrMsg;
  //}

  //public set DispErrMsg (value:string) { //对外显示的错误信息
  //    this.mstrDispErrMsg = value;
  //}

  //public get TabName_Curr() {
  //    return this._CurrTabName;
  //}

  /// <summary>
  /// 为条件设置相关字段值，为自动处理获取条件串做准备
  /// </summary>
  /// <param name = "strFldName">字段名</param>
  /// <param name = "strFldValue">字段值</param>
  /// <param name = "strComparisonOp">比较运算符</param>
  //public SetCondFldValue(strFldName: string, strFldValue: string, strComparisonOp: string ): void {
  //    this[strFldName] = strFldValue;
  //    if (this.dicFldComparisonOp.hasOwnProperty(strFldName) == false) {
  //        this.dicFldComparisonOp[strFldName] = strComparisonOp;
  //    }
  //    else {
  //        this.dicFldComparisonOp[strFldName] = strComparisonOp;
  //    }
  //}
}
