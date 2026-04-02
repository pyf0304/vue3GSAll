/*
 * 功能:公共数据实体底层
 * 版本:2019-07-24-01
 * 作者:潘以锋
 * */

interface ILookup<T> {
  [key: string]: T;
}

export class clsGeneralTabV implements ILookup<any> {
  //[x: string]: any;
  public sfFldComparisonOp: string; //字符型标签

  //public intTag: number;     //整型Tag
  //public strTag: string;     //字符型标签
  private isCheckProperty; // : Bool;     //是否检查属性
  public static _CurrTabName = ''; //当前表名，与该类相关的表名
  public static _KeyFldName = ''; //当前表的关键字字段的名称
  //public hmProperty: { [index: string]: boolean };// : Dictionary<String, String>!
  public dicFldComparisonOp: { [index: string]: string }; // :Dictionary<String, String>!
  public whereCond = '';
  //以下是属性变量
  ///该函数不存在:
  constructor() {
    //this.intTag = 0;     //整型Tag
    //this.strTag = "";     //字符型标签
    this.isCheckProperty = false; //是否检查属性
    //this.hmProperty = {};
    this.dicFldComparisonOp = {};
    //this.sfUpdFldSetStr = "";     //修改字符标志串
    this.sfFldComparisonOp = ''; //修改字符标志串
    this.whereCond = '';
  }
  public GetFldValue(strFldName: string): any {
    console.log(strFldName);
    return '';
  }
  public SetFldValue(strFldName: string, strFldValue: any) {
    console.log(strFldName, strFldValue);
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

  ///// <summary>
  ///// 常量:"intTag"
  ///// (ExamLibWeb.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  ///// </summary>
  //public con_IntTag  =  "intTag";    //整型Tag

  ///// <summary>
  ///// 常量:"strTag"
  ///// (ExamLibWeb.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  ///// </summary>
  //public con_StrTag  =  "strTag";    //字符型标签

  /// <summary>
  /// 常量:"IsCheckProperty"
  /// (ExamLibWeb.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  //public con_IsCheckProperty  =  "isCheckProperty";    //是否检查属性
  /// <summary>
  /// 整型Tag(说明:;字段类型:int;字段长度:4;是否可空:False)
  /// (ExamLibWeb.BusinessLogicEx.clsPrjTabFldBLEx:ToString2)
  /// </summary>

  //public SetIntTag(value: number)// : Int
  //{
  //    this.intTag = value;
  //    //记录修改过的字段
  //    this.hmProperty["intTag"] = true;
  //}

  //public SetStrTag(value: string) {
  //    if (value === "") {
  //        //this.mintErrNo = 1;
  //        this.strTag = value;
  //    }
  //    else {
  //        this.strTag = value;
  //    }
  //    //记录修改过的字段
  //    this.hmProperty["strTag"] = true;
  //}

  //public get sfUpdFldSetStr(): string {
  //    return this.mstrsfUpdFldSetStr;
  //}
  //public set sfUpdFldSetStr(value: string) {
  //    this.mstrsfUpdFldSetStr = value;
  //}
  //public get sfFldComparisonOp(): string {
  //    return this.mstrsfFldComparisonOp;
  //}
  //public set sfFldComparisonOp(value: string) {
  //    this.mstrsfFldComparisonOp = value;
  //}

  //public get hmProperty()// : String
  //{
  //    return this.hmProperty;
  //}
  //public sethmProperty(value: string, IsUpdated:boolean) {
  //    this.hmProperty[value] = IsUpdated;
  //}

  //public SetIsCheckProperty(value: boolean) {
  //    this.isCheckProperty = value;
  //    //记录修改过的字段
  //    this.hmProperty["isCheckProperty"] = true;

  //}

  /// <summary>
  /// 设置类的有些属性初始值
  /// </summary>
  //public SetInit () {
  //    this._CurrTabName = "Users"; //当前表名，与该类相关的表名
  //    this.keyFldName = "userId"; //当前表的关键字字段的名称
  //    this.hmProperty = {};//new { [key: string]: string }();
  //    //mstrModuleName = this.GetType().toString();
  //}

  //public get updFldProperty()// -> Dictionary<String, String>  {
  //{
  //    return this.hmProperty;
  //}

  /*
   * 获取修改的字段名串
   */
  //public get updFldString(): string//->String
  //{let sbMsg = "";
  //    //const iLen = this.hmProperty.length();
  //    for (const key in this.hmProperty) {
  //        const value = this.hmProperty[key];
  //        sbMsg = sbMsg + key + "|";
  //    }
  //    return sbMsg;
  //}

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
