/**
 * 类名:clsQxPrjMenusEN
 * 表名:QxPrjMenus(00140004)
 * 版本:2023.12.26.1(服务器:DESKTOP-1KM2OK3)
 * 日期:2024/01/01 17:54:45
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 工程菜单(QxPrjMenus)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsQxPrjMenusEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'QxPrjMenus'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'MenuId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 20;
  public static AttributeName = [
    'menuId',
    'menuName',
    'qxPrjId',
    'upMenuId',
    'linkFile',
    'qsParameters',
    'tabId',
    'imgFile',
    'roleId',
    'orderNum',
    'isLeafNode',
    'menuSetId',
    'menuTitle',
    'pageDispModeId',
    'inUse',
    'menuControlName',
    'applicationTypeId',
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
  private mstrMenuId = ''; //菜单Id
  private mstrMenuName = ''; //菜单名
  private mstrQxPrjId = ''; //项目Id
  private mstrUpMenuId = ''; //上级菜单Id
  private mstrLinkFile = ''; //链接文件
  private mstrqsParameters = ''; //qs参数
  private mstrTabId = ''; //表ID
  private mstrImgFile = ''; //图像文件
  private mstrRoleId = ''; //角色Id
  private mintOrderNum = 0; //排序号
  private mbolIsLeafNode = false; //是否叶子
  private mstrMenuSetId = ''; //菜单集Id
  private mstrMenuTitle = ''; //菜单标题
  private mstrPageDispModeId = ''; //页面显示模式Id
  private mbolInUse = false; //是否在用
  private mstrMenuControlName = ''; //菜单控件名
  private mintApplicationTypeId = 0; //应用程序类型Id
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //备注

  /**
   * 菜单Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMenuId(value: string) {
    if (value != undefined) {
      this.menuId = value;
      this.hmProperty['menuId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 菜单名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMenuName(value: string) {
    if (value != undefined) {
      this.menuName = value;
      this.hmProperty['menuName'] = true;
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
   * 上级菜单Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpMenuId(value: string) {
    if (value != undefined) {
      this.upMenuId = value;
      this.hmProperty['upMenuId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 链接文件(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLinkFile(value: string) {
    if (value != undefined) {
      this.linkFile = value;
      this.hmProperty['linkFile'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * qs参数(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetqsParameters(value: string) {
    if (value != undefined) {
      this.qsParameters = value;
      this.hmProperty['qsParameters'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabId(value: string) {
    if (value != undefined) {
      this.tabId = value;
      this.hmProperty['tabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 图像文件(说明:;字段类型:varchar;字段长度:300;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetImgFile(value: string) {
    if (value != undefined) {
      this.imgFile = value;
      this.hmProperty['imgFile'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

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
   * 排序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOrderNum(value: number) {
    if (value != undefined) {
      this.orderNum = value;
      this.hmProperty['orderNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否叶子(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsLeafNode(value: boolean) {
    if (value != undefined) {
      this.isLeafNode = value;
      this.hmProperty['isLeafNode'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 菜单集Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMenuSetId(value: string) {
    if (value != undefined) {
      this.menuSetId = value;
      this.hmProperty['menuSetId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 菜单标题(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMenuTitle(value: string) {
    if (value != undefined) {
      this.menuTitle = value;
      this.hmProperty['menuTitle'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 页面显示模式Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPageDispModeId(value: string) {
    if (value != undefined) {
      this.pageDispModeId = value;
      this.hmProperty['pageDispModeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否在用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInUse(value: boolean) {
    if (value != undefined) {
      this.inUse = value;
      this.hmProperty['inUse'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 菜单控件名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMenuControlName(value: string) {
    if (value != undefined) {
      this.menuControlName = value;
      this.hmProperty['menuControlName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 应用程序类型Id(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetApplicationTypeId(value: number) {
    if (value != undefined) {
      this.applicationTypeId = value;
      this.hmProperty['applicationTypeId'] = true;
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
      case clsQxPrjMenusEN.con_MenuId:
        return this.menuId;
      case clsQxPrjMenusEN.con_MenuName:
        return this.menuName;
      case clsQxPrjMenusEN.con_QxPrjId:
        return this.qxPrjId;
      case clsQxPrjMenusEN.con_UpMenuId:
        return this.upMenuId;
      case clsQxPrjMenusEN.con_LinkFile:
        return this.linkFile;
      case clsQxPrjMenusEN.con_qsParameters:
        return this.qsParameters;
      case clsQxPrjMenusEN.con_TabId:
        return this.tabId;
      case clsQxPrjMenusEN.con_ImgFile:
        return this.imgFile;
      case clsQxPrjMenusEN.con_RoleId:
        return this.roleId;
      case clsQxPrjMenusEN.con_OrderNum:
        return this.orderNum;
      case clsQxPrjMenusEN.con_IsLeafNode:
        return this.isLeafNode;
      case clsQxPrjMenusEN.con_MenuSetId:
        return this.menuSetId;
      case clsQxPrjMenusEN.con_MenuTitle:
        return this.menuTitle;
      case clsQxPrjMenusEN.con_PageDispModeId:
        return this.pageDispModeId;
      case clsQxPrjMenusEN.con_InUse:
        return this.inUse;
      case clsQxPrjMenusEN.con_MenuControlName:
        return this.menuControlName;
      case clsQxPrjMenusEN.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsQxPrjMenusEN.con_UpdDate:
        return this.updDate;
      case clsQxPrjMenusEN.con_UpdUserId:
        return this.updUserId;
      case clsQxPrjMenusEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QxPrjMenus]中不存在!`;
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
      case clsQxPrjMenusEN.con_MenuId:
        this.menuId = strValue;
        this.hmProperty['menuId'] = true;
        break;
      case clsQxPrjMenusEN.con_MenuName:
        this.menuName = strValue;
        this.hmProperty['menuName'] = true;
        break;
      case clsQxPrjMenusEN.con_QxPrjId:
        this.qxPrjId = strValue;
        this.hmProperty['qxPrjId'] = true;
        break;
      case clsQxPrjMenusEN.con_UpMenuId:
        this.upMenuId = strValue;
        this.hmProperty['upMenuId'] = true;
        break;
      case clsQxPrjMenusEN.con_LinkFile:
        this.linkFile = strValue;
        this.hmProperty['linkFile'] = true;
        break;
      case clsQxPrjMenusEN.con_qsParameters:
        this.qsParameters = strValue;
        this.hmProperty['qsParameters'] = true;
        break;
      case clsQxPrjMenusEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsQxPrjMenusEN.con_ImgFile:
        this.imgFile = strValue;
        this.hmProperty['imgFile'] = true;
        break;
      case clsQxPrjMenusEN.con_RoleId:
        this.roleId = strValue;
        this.hmProperty['roleId'] = true;
        break;
      case clsQxPrjMenusEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsQxPrjMenusEN.con_IsLeafNode:
        this.isLeafNode = Boolean(strValue);
        this.hmProperty['isLeafNode'] = true;
        break;
      case clsQxPrjMenusEN.con_MenuSetId:
        this.menuSetId = strValue;
        this.hmProperty['menuSetId'] = true;
        break;
      case clsQxPrjMenusEN.con_MenuTitle:
        this.menuTitle = strValue;
        this.hmProperty['menuTitle'] = true;
        break;
      case clsQxPrjMenusEN.con_PageDispModeId:
        this.pageDispModeId = strValue;
        this.hmProperty['pageDispModeId'] = true;
        break;
      case clsQxPrjMenusEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsQxPrjMenusEN.con_MenuControlName:
        this.menuControlName = strValue;
        this.hmProperty['menuControlName'] = true;
        break;
      case clsQxPrjMenusEN.con_ApplicationTypeId:
        this.applicationTypeId = Number(strValue);
        this.hmProperty['applicationTypeId'] = true;
        break;
      case clsQxPrjMenusEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsQxPrjMenusEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsQxPrjMenusEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[QxPrjMenus]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public menuId = ''; //菜单Id
  public menuName = ''; //菜单名
  public qxPrjId = ''; //项目Id
  public upMenuId = ''; //上级菜单Id
  public linkFile = ''; //链接文件
  public qsParameters = ''; //qs参数
  public tabId = ''; //表ID
  public imgFile = ''; //图像文件
  public roleId = ''; //角色Id
  public orderNum = 0; //排序号
  public isLeafNode = false; //是否叶子
  public menuSetId = ''; //菜单集Id
  public menuTitle = ''; //菜单标题
  public pageDispModeId = ''; //页面显示模式Id
  public inUse = false; //是否在用
  public menuControlName = ''; //菜单控件名
  public applicationTypeId = 0; //应用程序类型Id
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //备注

  /**
   * 常量:"MenuId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MenuId(): string {
    return 'menuId';
  } //菜单Id

  /**
   * 常量:"MenuName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MenuName(): string {
    return 'menuName';
  } //菜单名

  /**
   * 常量:"QxPrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_QxPrjId(): string {
    return 'qxPrjId';
  } //项目Id

  /**
   * 常量:"UpMenuId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpMenuId(): string {
    return 'upMenuId';
  } //上级菜单Id

  /**
   * 常量:"LinkFile"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_LinkFile(): string {
    return 'linkFile';
  } //链接文件

  /**
   * 常量:"qsParameters"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_qsParameters(): string {
    return 'qsParameters';
  } //qs参数

  /**
   * 常量:"TabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"ImgFile"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ImgFile(): string {
    return 'imgFile';
  } //图像文件

  /**
   * 常量:"RoleId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RoleId(): string {
    return 'roleId';
  } //角色Id

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //排序号

  /**
   * 常量:"IsLeafNode"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsLeafNode(): string {
    return 'isLeafNode';
  } //是否叶子

  /**
   * 常量:"MenuSetId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MenuSetId(): string {
    return 'menuSetId';
  } //菜单集Id

  /**
   * 常量:"MenuTitle"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MenuTitle(): string {
    return 'menuTitle';
  } //菜单标题

  /**
   * 常量:"PageDispModeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PageDispModeId(): string {
    return 'pageDispModeId';
  } //页面显示模式Id

  /**
   * 常量:"InUse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"MenuControlName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MenuControlName(): string {
    return 'menuControlName';
  } //菜单控件名

  /**
   * 常量:"ApplicationTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型Id

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
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
