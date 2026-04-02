/**
 * 类名:clsQxRolePotenceRela
 * 表名:QxRolePotenceRela(00140123)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/20 23:37:10
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:权限管理(PotenceMan)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 角色权限关系(QxRolePotenceRela)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsQxRolePotenceRela {
  public static _CurrTabName = 'QxRolePotenceRela'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'RoleId,PotenceId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 6;
  public static AttributeName = ['roleId', 'potenceId', 'qxPrjId', 'updDate', 'updUser', 'memo'];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public roleId = ''; //角色Id
  public potenceId = ''; //权限ID
  public qxPrjId = ''; //项目Id
  public updDate = ''; //修改日期
  public updUser = ''; //修改用户
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
      case clsQxRolePotenceRela.con_RoleId:
        return this.roleId;
      case clsQxRolePotenceRela.con_PotenceId:
        return this.potenceId;
      case clsQxRolePotenceRela.con_QxPrjId:
        return this.qxPrjId;
      case clsQxRolePotenceRela.con_UpdDate:
        return this.updDate;
      case clsQxRolePotenceRela.con_UpdUser:
        return this.updUser;
      case clsQxRolePotenceRela.con_Memo:
        return this.memo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QxRolePotenceRela]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"RoleId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_RoleId(): string {
    return 'roleId';
  } //角色Id

  /**
   * 常量:"PotenceId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PotenceId(): string {
    return 'potenceId';
  } //权限ID

  /**
   * 常量:"QxPrjId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_QxPrjId(): string {
    return 'qxPrjId';
  } //项目Id

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改用户

  /**
   * 常量:"Memo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注
}
