/**
 * 类名:clscc_ThemesEN
 * 表名:cc_Themes(01120069)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:05
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 课程主题(cc_Themes)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clscc_ThemesEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'cc_Themes'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ThemeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 10;
  public static AttributeName = [
    'themeId',
    'themeName',
    'themeDesc',
    'pageName',
    'exampleImgPath',
    'orderNum',
    'isUse',
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
  private mstrThemeId = ''; //主题Id
  private mstrThemeName = ''; //主题名
  private mstrThemeDesc = ''; //主题描述
  private mstrPageName = ''; //页面名称
  private mstrExampleImgPath = ''; //示例图路径
  private mintOrderNum = 0; //序号
  private mbolIsUse = false; //是否使用
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //备注

  /**
   * 主题Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetThemeId(value: string) {
    if (value != undefined) {
      this.themeId = value;
      this.hmProperty['themeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 主题名(说明:;字段类型:varchar;字段长度:200;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetThemeName(value: string) {
    if (value != undefined) {
      this.themeName = value;
      this.hmProperty['themeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 主题描述(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetThemeDesc(value: string) {
    if (value != undefined) {
      this.themeDesc = value;
      this.hmProperty['themeDesc'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 页面名称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPageName(value: string) {
    if (value != undefined) {
      this.pageName = value;
      this.hmProperty['pageName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 示例图路径(说明:;字段类型:varchar;字段长度:300;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetExampleImgPath(value: string) {
    if (value != undefined) {
      this.exampleImgPath = value;
      this.hmProperty['exampleImgPath'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
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
   * 是否使用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsUse(value: boolean) {
    if (value != undefined) {
      this.isUse = value;
      this.hmProperty['isUse'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
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
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
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
      case clscc_ThemesEN.con_ThemeId:
        return this.themeId;
      case clscc_ThemesEN.con_ThemeName:
        return this.themeName;
      case clscc_ThemesEN.con_ThemeDesc:
        return this.themeDesc;
      case clscc_ThemesEN.con_PageName:
        return this.pageName;
      case clscc_ThemesEN.con_ExampleImgPath:
        return this.exampleImgPath;
      case clscc_ThemesEN.con_OrderNum:
        return this.orderNum;
      case clscc_ThemesEN.con_IsUse:
        return this.isUse;
      case clscc_ThemesEN.con_UpdDate:
        return this.updDate;
      case clscc_ThemesEN.con_UpdUserId:
        return this.updUserId;
      case clscc_ThemesEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[cc_Themes]中不存在!`;
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
      case clscc_ThemesEN.con_ThemeId:
        this.themeId = strValue;
        this.hmProperty['themeId'] = true;
        break;
      case clscc_ThemesEN.con_ThemeName:
        this.themeName = strValue;
        this.hmProperty['themeName'] = true;
        break;
      case clscc_ThemesEN.con_ThemeDesc:
        this.themeDesc = strValue;
        this.hmProperty['themeDesc'] = true;
        break;
      case clscc_ThemesEN.con_PageName:
        this.pageName = strValue;
        this.hmProperty['pageName'] = true;
        break;
      case clscc_ThemesEN.con_ExampleImgPath:
        this.exampleImgPath = strValue;
        this.hmProperty['exampleImgPath'] = true;
        break;
      case clscc_ThemesEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clscc_ThemesEN.con_IsUse:
        this.isUse = Boolean(strValue);
        this.hmProperty['isUse'] = true;
        break;
      case clscc_ThemesEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clscc_ThemesEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clscc_ThemesEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[cc_Themes]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public themeId = ''; //主题Id
  public themeName = ''; //主题名
  public themeDesc = ''; //主题描述
  public pageName = ''; //页面名称
  public exampleImgPath = ''; //示例图路径
  public orderNum = 0; //序号
  public isUse = false; //是否使用
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //备注

  /**
   * 常量:"ThemeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ThemeId(): string {
    return 'themeId';
  } //主题Id

  /**
   * 常量:"ThemeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ThemeName(): string {
    return 'themeName';
  } //主题名

  /**
   * 常量:"ThemeDesc"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ThemeDesc(): string {
    return 'themeDesc';
  } //主题描述

  /**
   * 常量:"PageName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PageName(): string {
    return 'pageName';
  } //页面名称

  /**
   * 常量:"ExampleImgPath"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ExampleImgPath(): string {
    return 'exampleImgPath';
  } //示例图路径

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"IsUse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsUse(): string {
    return 'isUse';
  } //是否使用

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
