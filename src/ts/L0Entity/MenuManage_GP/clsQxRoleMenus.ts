/**
 * 类名:clsQxRoleMenus
 * 表名:QxRoleMenus(00140007)
 * 版本:2024.01.01.1(服务器:DESKTOP-1KM2OK3)
 * 日期:2024/01/02 16:10:27
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 角色菜单(QxRoleMenus)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsQxRoleMenus {
  public static _CurrTabName = 'QxRoleMenus'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 10;
  public static AttributeName = [
    'mId',
    'roleId',
    'qxPrjId',
    'cmPrjId',
    'menuSetId',
    'menuId',
    'isDisp',
    'updDate',
    'updUserId',
    'memo',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public mId = 0; //流水号
  public roleId = ''; //角色Id
  public qxPrjId = ''; //项目Id
  public cmPrjId = ''; //Cm项目Id
  public menuSetId = ''; //菜单集Id
  public menuId = ''; //菜单Id
  public isDisp = false; //是否显示
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //备注

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsQxRoleMenus.con_mId:
        return this.mId;
      case clsQxRoleMenus.con_RoleId:
        return this.roleId;
      case clsQxRoleMenus.con_QxPrjId:
        return this.qxPrjId;
      case clsQxRoleMenus.con_CmPrjId:
        return this.cmPrjId;
      case clsQxRoleMenus.con_MenuSetId:
        return this.menuSetId;
      case clsQxRoleMenus.con_MenuId:
        return this.menuId;
      case clsQxRoleMenus.con_IsDisp:
        return this.isDisp;
      case clsQxRoleMenus.con_UpdDate:
        return this.updDate;
      case clsQxRoleMenus.con_UpdUserId:
        return this.updUserId;
      case clsQxRoleMenus.con_Memo:
        return this.memo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QxRoleMenus]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"mId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //流水号

  /**
   * 常量:"RoleId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_RoleId(): string {
    return 'roleId';
  } //角色Id

  /**
   * 常量:"QxPrjId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_QxPrjId(): string {
    return 'qxPrjId';
  } //项目Id

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //Cm项目Id

  /**
   * 常量:"MenuSetId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_MenuSetId(): string {
    return 'menuSetId';
  } //菜单集Id

  /**
   * 常量:"MenuId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_MenuId(): string {
    return 'menuId';
  } //菜单Id

  /**
   * 常量:"IsDisp"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IsDisp(): string {
    return 'isDisp';
  } //是否显示

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUserId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

  /**
   * 常量:"Memo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注
}
