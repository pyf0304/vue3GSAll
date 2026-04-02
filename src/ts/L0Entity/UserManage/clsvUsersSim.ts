
export class clsvUsersSim {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat =
    "UserId in (Select UserId from CmPrjIdUserIdRela where CmPrjId='{0}')"; //条件格式串
  public static _CurrTabName = 'vUsersSim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'UserId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 8;
  public static AttributeName = [
    'userId',
    'userName',
    'idXzCollege',
    'collegeName',
    'idXzMajor',
    'majorName',
    'headPic',
    'isGSuser',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public userId = ''; //用户ID
  public userName = ''; //用户名
  public idXzCollege = ''; //学院流水号
  public collegeName = ''; //学院名称
  public idXzMajor = ''; //专业流水号
  public majorName = ''; //专业名称
  public headPic = ''; //头像
  public isGSuser = false; //是否GS用户

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户ID

  /**
   * 常量:"UserName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserName(): string {
    return 'userName';
  } //用户名

  /**
   * 常量:"IdXzCollege"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzCollege(): string {
    return 'idXzCollege';
  } //学院流水号

  /**
   * 常量:"CollegeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CollegeName(): string {
    return 'collegeName';
  } //学院名称

  /**
   * 常量:"IdXzMajor"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzMajor(): string {
    return 'idXzMajor';
  } //专业流水号

  /**
   * 常量:"MajorName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MajorName(): string {
    return 'majorName';
  } //专业名称

  /**
   * 常量:"HeadPic"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_HeadPic(): string {
    return 'headPic';
  } //头像

  /**
   * 常量:"IsGSuser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsGSuser(): string {
    return 'isGSuser';
  } //是否GS用户
}
