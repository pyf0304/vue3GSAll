/**
 * 类名:clsQxRolesEN
 * 表名:QxRoles(00140014)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 00:38:40
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 角色(QxRoles)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsQxRolesEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'QxRoles'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'RoleId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 10;
  public static AttributeName = [
    'roleId',
    'roleName',
    'roleENName',
    'roleIndex',
    'userType',
    'qxPrjId',
    'isInUse',
    'updDate',
    'updUserId',
    'memo',
  ];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  /**
   * 设置对象中私有属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
   */
  private mstrRoleId = ''; //角色Id
  private mstrRoleName = ''; //角色名称
  private mstrRoleENName = ''; //角色英文名
  private mintRoleIndex = 0; //角色序号
  private mstrUserType = ''; //用户类型
  private mstrQxPrjId = ''; //项目Id
  private mbolIsInUse = false; //是否在使用
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //备注

  /**
   * 角色Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRoleId(value: string) {
    if (value != undefined) {
      this.roleId = value;
      this.hmProperty['roleId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 角色名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRoleName(value: string) {
    if (value != undefined) {
      this.roleName = value;
      this.hmProperty['roleName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 角色英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRoleENName(value: string) {
    if (value != undefined) {
      this.roleENName = value;
      this.hmProperty['roleENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 角色序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRoleIndex(value: number) {
    if (value != undefined) {
      this.roleIndex = value;
      this.hmProperty['roleIndex'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 用户类型(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserType(value: string) {
    if (value != undefined) {
      this.userType = value;
      this.hmProperty['userType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 项目Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQxPrjId(value: string) {
    if (value != undefined) {
      this.qxPrjId = value;
      this.hmProperty['qxPrjId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否在使用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsInUse(value: boolean) {
    if (value != undefined) {
      this.isInUse = value;
      this.hmProperty['isInUse'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdDate(value: string) {
    if (value != undefined) {
      this.updDate = value;
      this.hmProperty['updDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUserId(value: string) {
    if (value != undefined) {
      this.updUserId = value;
      this.hmProperty['updUserId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMemo(value: string) {
    if (value != undefined) {
      this.memo = value;
      this.hmProperty['memo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsQxRolesEN.con_RoleId:
        return this.roleId;
      case clsQxRolesEN.con_RoleName:
        return this.roleName;
      case clsQxRolesEN.con_RoleENName:
        return this.roleENName;
      case clsQxRolesEN.con_RoleIndex:
        return this.roleIndex;
      case clsQxRolesEN.con_UserType:
        return this.userType;
      case clsQxRolesEN.con_QxPrjId:
        return this.qxPrjId;
      case clsQxRolesEN.con_IsInUse:
        return this.isInUse;
      case clsQxRolesEN.con_UpdDate:
        return this.updDate;
      case clsQxRolesEN.con_UpdUserId:
        return this.updUserId;
      case clsQxRolesEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QxRoles]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
   */
  public SetFldValue(strFldName: string, strValue: string) {
    const strThisFuncName = 'SetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsQxRolesEN.con_RoleId:
        this.roleId = strValue;
        this.hmProperty['roleId'] = true;
        break;
      case clsQxRolesEN.con_RoleName:
        this.roleName = strValue;
        this.hmProperty['roleName'] = true;
        break;
      case clsQxRolesEN.con_RoleENName:
        this.roleENName = strValue;
        this.hmProperty['roleENName'] = true;
        break;
      case clsQxRolesEN.con_RoleIndex:
        this.roleIndex = Number(strValue);
        this.hmProperty['roleIndex'] = true;
        break;
      case clsQxRolesEN.con_UserType:
        this.userType = strValue;
        this.hmProperty['userType'] = true;
        break;
      case clsQxRolesEN.con_QxPrjId:
        this.qxPrjId = strValue;
        this.hmProperty['qxPrjId'] = true;
        break;
      case clsQxRolesEN.con_IsInUse:
        this.isInUse = Boolean(strValue);
        this.hmProperty['isInUse'] = true;
        break;
      case clsQxRolesEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsQxRolesEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsQxRolesEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QxRoles]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public roleId = ''; //角色Id
  public roleName = ''; //角色名称
  public roleENName = ''; //角色英文名
  public roleIndex = 0; //角色序号
  public userType = ''; //用户类型
  public qxPrjId = ''; //项目Id
  public isInUse = false; //是否在使用
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //备注

  /**
   * 常量:"RoleId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RoleId(): string {
    return 'roleId';
  } //角色Id

  /**
   * 常量:"RoleName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RoleName(): string {
    return 'roleName';
  } //角色名称

  /**
   * 常量:"RoleENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RoleENName(): string {
    return 'roleENName';
  } //角色英文名

  /**
   * 常量:"RoleIndex"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RoleIndex(): string {
    return 'roleIndex';
  } //角色序号

  /**
   * 常量:"UserType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserType(): string {
    return 'userType';
  } //用户类型

  /**
   * 常量:"QxPrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_QxPrjId(): string {
    return 'qxPrjId';
  } //项目Id

  /**
   * 常量:"IsInUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsInUse(): string {
    return 'isInUse';
  } //是否在使用

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注

  /**
   * 设置条件字段值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
   * @param strFldName:字段名
   * @param strFldValue:字段值
   * @param strComparisonOp:比较操作条符
   * @returns 根据关键字获取的名称
   **/
  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    this.SetFldValue(strFldName, strFldValue);
    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumQxRoles {
  /**
   * 统一平台总管理员
   **/
  static readonly UP_Admin_00010001 = '00010001';
  /**
   * 项目管理员
   **/
  static readonly Project_Admin_00010002 = '00010002';
  /**
   * 高级用户
   **/
  static readonly Advanced_User_00010003 = '00010003';
  /**
   * 普通用户
   **/
  static readonly Regular_User_00010004 = '00010004';
  /**
   * 无
   **/
  static readonly none_00620000 = '00620000';
  /**
   * 系统管理员
   **/
  static readonly System_Admin_00620001 = '00620001';
  /**
   * 普通教师
   **/
  static readonly Regular_Teacher_00620002 = '00620002';
  /**
   * 普通学生
   **/
  static readonly Regular_Student_00620003 = '00620003';
  /**
   * 小组长(微格)
   **/
  static readonly Group_Leader_00620005 = '00620005';
  /**
   * 中小学实习指导老师
   **/
  static readonly Mentor_for_K_12_Internship_00620006 = '00620006';
  /**
   * 学工办辅导员
   **/
  static readonly Student_Affairs_Counselor_00620007 = '00620007';
  /**
   * 实习指导老师
   **/
  static readonly Internship_Mentor_00620008 = '00620008';
  /**
   * 指导老师（微格）
   **/
  static readonly Mentor_00620009 = '00620009';
  /**
   * 评审专家
   **/
  static readonly Review_Expert_00620010 = '00620010';
  /**
   * 教务处
   **/
  static readonly Academic_Affairs_Office_00620011 = '00620011';
  /**
   * 案例维护
   **/
  static readonly Case_Maintenance_00620012 = '00620012';
  /**
   * 中小学教师
   **/
  static readonly K_12_Teacher_00620013 = '00620013';
  /**
   * 教师(交建)
   **/
  static readonly Construction_and_Building_00620014 = '00620014';
  /**
   * 交建答题学生
   **/
  static readonly Construction_and_Building_Answering_Student_00620015 = '00620015';
  /**
   * 语音学生
   **/
  static readonly Voice_Student_00620016 = '00620016';
  /**
   * 中学学生
   **/
  static readonly High_School_Student_00620017 = '00620017';
  /**
   * 中学系统管理员
   **/
  static readonly Secondary_School_System_Admin_00620018 = '00620018';
  /**
   * 系统管理员
   **/
  static readonly System_Admin_01030001 = '01030001';
}
