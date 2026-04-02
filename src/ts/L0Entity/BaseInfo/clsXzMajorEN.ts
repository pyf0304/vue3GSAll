/**
 * 类名:clsXzMajorEN
 * 表名:XzMajor(01120065)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:35
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 专业(XzMajor)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsXzMajorEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'XzMajor'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'IdXzMajor'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 17;
  public static AttributeName = [
    'idXzMajor',
    'majorID',
    'majorName',
    'majorEnglishName',
    'majorExplain',
    'majorNationalID',
    'idXzCollege',
    'idMajorType',
    'idDegreeType',
    'isMainMajor',
    'majorDirection',
    'isVisible',
    'isNormal',
    'modifyDate',
    'modifyUserId',
    'memo',
    'idXzMajorShoolType',
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
  private mstrIdXzMajor = ''; //专业流水号
  private mstrMajorID = ''; //专业ID
  private mstrMajorName = ''; //专业名称
  private mstrMajorEnglishName = ''; //专业英文名称
  private mstrMajorExplain = ''; //专业说明
  private mstrMajorNationalID = ''; //专业国家代码
  private mstrIdXzCollege = ''; //学院流水号
  private mstrIdMajorType = ''; //专业类型(文理工)流水号
  private mstrIdDegreeType = ''; //学位类型流水号
  private mbolIsMainMajor = false; //是否重要专业
  private mstrMajorDirection = ''; //专业方向
  private mbolIsVisible = false; //是否显示
  private mbolIsNormal = false; //IsNormal
  private mstrModifyDate = ''; //修改日期
  private mstrModifyUserId = ''; //修改人
  private mstrMemo = ''; //备注
  private mstrIdXzMajorShoolType = ''; //专业学校类型流水号

  /**
   * 专业流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdXzMajor(value: string) {
    if (value != undefined) {
      this.idXzMajor = value;
      this.hmProperty['idXzMajor'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 专业ID(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMajorID(value: string) {
    if (value != undefined) {
      this.majorID = value;
      this.hmProperty['majorID'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 专业名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMajorName(value: string) {
    if (value != undefined) {
      this.majorName = value;
      this.hmProperty['majorName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 专业英文名称(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMajorEnglishName(value: string) {
    if (value != undefined) {
      this.majorEnglishName = value;
      this.hmProperty['majorEnglishName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 专业说明(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMajorExplain(value: string) {
    if (value != undefined) {
      this.majorExplain = value;
      this.hmProperty['majorExplain'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 专业国家代码(说明:;字段类型:varchar;字段长度:10;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMajorNationalID(value: string) {
    if (value != undefined) {
      this.majorNationalID = value;
      this.hmProperty['majorNationalID'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学院流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdXzCollege(value: string) {
    if (value != undefined) {
      this.idXzCollege = value;
      this.hmProperty['idXzCollege'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 专业类型(文理工)流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdMajorType(value: string) {
    if (value != undefined) {
      this.idMajorType = value;
      this.hmProperty['idMajorType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学位类型流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdDegreeType(value: string) {
    if (value != undefined) {
      this.idDegreeType = value;
      this.hmProperty['idDegreeType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否重要专业(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsMainMajor(value: boolean) {
    if (value != undefined) {
      this.isMainMajor = value;
      this.hmProperty['isMainMajor'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 专业方向(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMajorDirection(value: string) {
    if (value != undefined) {
      this.majorDirection = value;
      this.hmProperty['majorDirection'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsVisible(value: boolean) {
    if (value != undefined) {
      this.isVisible = value;
      this.hmProperty['isVisible'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * IsNormal(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNormal(value: boolean) {
    if (value != undefined) {
      this.isNormal = value;
      this.hmProperty['isNormal'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetModifyDate(value: string) {
    if (value != undefined) {
      this.modifyDate = value;
      this.hmProperty['modifyDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改人(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetModifyUserId(value: string) {
    if (value != undefined) {
      this.modifyUserId = value;
      this.hmProperty['modifyUserId'] = true;
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
   * 专业学校类型流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdXzMajorShoolType(value: string) {
    if (value != undefined) {
      this.idXzMajorShoolType = value;
      this.hmProperty['idXzMajorShoolType'] = true;
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
      case clsXzMajorEN.con_IdXzMajor:
        return this.idXzMajor;
      case clsXzMajorEN.con_MajorID:
        return this.majorID;
      case clsXzMajorEN.con_MajorName:
        return this.majorName;
      case clsXzMajorEN.con_MajorEnglishName:
        return this.majorEnglishName;
      case clsXzMajorEN.con_MajorExplain:
        return this.majorExplain;
      case clsXzMajorEN.con_MajorNationalID:
        return this.majorNationalID;
      case clsXzMajorEN.con_IdXzCollege:
        return this.idXzCollege;
      case clsXzMajorEN.con_IdMajorType:
        return this.idMajorType;
      case clsXzMajorEN.con_IdDegreeType:
        return this.idDegreeType;
      case clsXzMajorEN.con_IsMainMajor:
        return this.isMainMajor;
      case clsXzMajorEN.con_MajorDirection:
        return this.majorDirection;
      case clsXzMajorEN.con_IsVisible:
        return this.isVisible;
      case clsXzMajorEN.con_IsNormal:
        return this.isNormal;
      case clsXzMajorEN.con_ModifyDate:
        return this.modifyDate;
      case clsXzMajorEN.con_ModifyUserId:
        return this.modifyUserId;
      case clsXzMajorEN.con_Memo:
        return this.memo;
      case clsXzMajorEN.con_IdXzMajorShoolType:
        return this.idXzMajorShoolType;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[XzMajor]中不存在!`;
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
      case clsXzMajorEN.con_IdXzMajor:
        this.idXzMajor = strValue;
        this.hmProperty['idXzMajor'] = true;
        break;
      case clsXzMajorEN.con_MajorID:
        this.majorID = strValue;
        this.hmProperty['majorID'] = true;
        break;
      case clsXzMajorEN.con_MajorName:
        this.majorName = strValue;
        this.hmProperty['majorName'] = true;
        break;
      case clsXzMajorEN.con_MajorEnglishName:
        this.majorEnglishName = strValue;
        this.hmProperty['majorEnglishName'] = true;
        break;
      case clsXzMajorEN.con_MajorExplain:
        this.majorExplain = strValue;
        this.hmProperty['majorExplain'] = true;
        break;
      case clsXzMajorEN.con_MajorNationalID:
        this.majorNationalID = strValue;
        this.hmProperty['majorNationalID'] = true;
        break;
      case clsXzMajorEN.con_IdXzCollege:
        this.idXzCollege = strValue;
        this.hmProperty['idXzCollege'] = true;
        break;
      case clsXzMajorEN.con_IdMajorType:
        this.idMajorType = strValue;
        this.hmProperty['idMajorType'] = true;
        break;
      case clsXzMajorEN.con_IdDegreeType:
        this.idDegreeType = strValue;
        this.hmProperty['idDegreeType'] = true;
        break;
      case clsXzMajorEN.con_IsMainMajor:
        this.isMainMajor = Boolean(strValue);
        this.hmProperty['isMainMajor'] = true;
        break;
      case clsXzMajorEN.con_MajorDirection:
        this.majorDirection = strValue;
        this.hmProperty['majorDirection'] = true;
        break;
      case clsXzMajorEN.con_IsVisible:
        this.isVisible = Boolean(strValue);
        this.hmProperty['isVisible'] = true;
        break;
      case clsXzMajorEN.con_IsNormal:
        this.isNormal = Boolean(strValue);
        this.hmProperty['isNormal'] = true;
        break;
      case clsXzMajorEN.con_ModifyDate:
        this.modifyDate = strValue;
        this.hmProperty['modifyDate'] = true;
        break;
      case clsXzMajorEN.con_ModifyUserId:
        this.modifyUserId = strValue;
        this.hmProperty['modifyUserId'] = true;
        break;
      case clsXzMajorEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsXzMajorEN.con_IdXzMajorShoolType:
        this.idXzMajorShoolType = strValue;
        this.hmProperty['idXzMajorShoolType'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[XzMajor]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public idXzMajor = ''; //专业流水号
  public majorID = ''; //专业ID
  public majorName = ''; //专业名称
  public majorEnglishName = ''; //专业英文名称
  public majorExplain = ''; //专业说明
  public majorNationalID = ''; //专业国家代码
  public idXzCollege = ''; //学院流水号
  public idMajorType = ''; //专业类型(文理工)流水号
  public idDegreeType = ''; //学位类型流水号
  public isMainMajor = false; //是否重要专业
  public majorDirection = ''; //专业方向
  public isVisible = false; //是否显示
  public isNormal = false; //IsNormal
  public modifyDate = ''; //修改日期
  public modifyUserId = ''; //修改人
  public memo = ''; //备注
  public idXzMajorShoolType = ''; //专业学校类型流水号

  /**
   * 常量:"IdXzMajor"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzMajor(): string {
    return 'idXzMajor';
  } //专业流水号

  /**
   * 常量:"MajorID"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MajorID(): string {
    return 'majorID';
  } //专业ID

  /**
   * 常量:"MajorName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MajorName(): string {
    return 'majorName';
  } //专业名称

  /**
   * 常量:"MajorEnglishName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MajorEnglishName(): string {
    return 'majorEnglishName';
  } //专业英文名称

  /**
   * 常量:"MajorExplain"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MajorExplain(): string {
    return 'majorExplain';
  } //专业说明

  /**
   * 常量:"MajorNationalID"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MajorNationalID(): string {
    return 'majorNationalID';
  } //专业国家代码

  /**
   * 常量:"IdXzCollege"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzCollege(): string {
    return 'idXzCollege';
  } //学院流水号

  /**
   * 常量:"IdMajorType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdMajorType(): string {
    return 'idMajorType';
  } //专业类型(文理工)流水号

  /**
   * 常量:"IdDegreeType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdDegreeType(): string {
    return 'idDegreeType';
  } //学位类型流水号

  /**
   * 常量:"IsMainMajor"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsMainMajor(): string {
    return 'isMainMajor';
  } //是否重要专业

  /**
   * 常量:"MajorDirection"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MajorDirection(): string {
    return 'majorDirection';
  } //专业方向

  /**
   * 常量:"IsVisible"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsVisible(): string {
    return 'isVisible';
  } //是否显示

  /**
   * 常量:"IsNormal"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsNormal(): string {
    return 'isNormal';
  } //IsNormal

  /**
   * 常量:"ModifyDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ModifyDate(): string {
    return 'modifyDate';
  } //修改日期

  /**
   * 常量:"ModifyUserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ModifyUserId(): string {
    return 'modifyUserId';
  } //修改人

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注

  /**
   * 常量:"IdXzMajorShoolType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzMajorShoolType(): string {
    return 'idXzMajorShoolType';
  } //专业学校类型流水号

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
