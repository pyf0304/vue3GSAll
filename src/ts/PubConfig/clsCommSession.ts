/// <summary>
/// 所有Session变量的定义(clsCommSession)
/// </summary>
export class clsCommSession {
  /// <summary>
  /// 构造函数
  /// </summary>
  constructor() {}
  /// <summary>
  /// 用户Id
  /// </summary>
  public static get userId() {
    const strKey = 'userId';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      const strUserId: string = localStorage.getItem(strKey) as string;
      return strUserId;
    }
    return '';
  }

  /// <summary>
  /// 用户Id
  /// </summary>
  public static set userId(value: string) {
    const strKey = 'userId';
    localStorage.setItem(strKey, value);
  }

  /// <summary>
  /// 当前工程Id
  /// </summary>
  public static get CurrPrjId() {
    const strKey = 'CurrPrjId';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      const strCurrPrjId: string = localStorage.getItem(strKey) as string;
      return strCurrPrjId;
    }
    return '';
  }

  /// <summary>
  /// 当前工程Id
  /// </summary>
  public static set CurrPrjId(value: string) {
    const strKey = 'CurrPrjId';
    localStorage.setItem(strKey, value);
  }

  /// <summary>
  /// 当前工程Id
  /// </summary>
  public static get CurrSelPrj() {
    const strKey = 'CurrSelPrj';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      const strCurrSelPrj: string = localStorage.getItem(strKey) as string;
      return strCurrSelPrj;
    }
    return '';
  }

  /// <summary>
  /// 当前工程Id
  /// </summary>
  public static set CurrSelPrj(value: string) {
    const strKey = 'CurrSelPrj';
    localStorage.setItem(strKey, value);
  }

  /// <summary>
  /// 当前工程数据库Id
  /// </summary>
  public static get CurrPrjDataBaseId() {
    const strKey = 'CurrPrjDataBaseId';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      const strCurrPrjDataBaseId: string = localStorage.getItem(strKey) as string;
      return strCurrPrjDataBaseId;
    }
    return '';
  }

  /// <summary>
  /// 当前工程数据库Id
  /// </summary>
  public static set CurrPrjDataBaseId(value: string) {
    const strKey = 'CurrPrjDataBaseId';
    localStorage.setItem(strKey, value);
  }
  /// <summary>
  /// 当前用户角色Id
  /// </summary>
  public static get CurrUserRoleId() {
    const strKey = 'CurrUserRoleId';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      const strCurrUserRoleId: string = localStorage.getItem(strKey) as string;
      return strCurrUserRoleId;
    }
    return '';
  }

  /// <summary>
  /// 当前用户角色Id
  /// </summary>
  public static set CurrUserRoleId(value: string) {
    const strKey = 'CurrUserRoleId';
    localStorage.setItem(strKey, value);
  }
}
