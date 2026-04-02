/**
 * 类名:clsXzAdminClsEN
 * 表名:XzAdminCls(01120194)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:40
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:人员管理(PeopleManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 行政班(XzAdminCls)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsXzAdminClsEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'XzAdminCls'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'IdAdminCls'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'idAdminCls',
    'adminClsName',
    'idXzMajor',
    'idXzCollege',
    'idUniZone',
    'currentStuQty',
    'idGradeBase',
    'adminClsId',
    'idAdminClsType',
    'adminClsIndex',
    'memo',
    'modifyUserId',
    'modifyDate',
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
  private mstrIdAdminCls = ''; //行政班流水号
  private mstrAdminClsName = ''; //行政班名称
  private mstrIdXzMajor = ''; //专业流水号
  private mstrIdXzCollege = ''; //学院流水号
  private mstrIdUniZone = ''; //校区流水号
  private mintCurrentStuQty = 0; //当前学生数
  private mstrIdGradeBase = ''; //年级流水号
  private mstrAdminClsId = ''; //行政班代号
  private mstrIdAdminClsType = ''; //行政班级类型流水号
  private mintAdminClsIndex = 0; //AdminClsIndex
  private mstrMemo = ''; //备注
  private mstrModifyUserId = ''; //修改人
  private mstrModifyDate = ''; //修改日期

  /**
   * 行政班流水号(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdAdminCls(value: string) {
    if (value != undefined) {
      this.idAdminCls = value;
      this.hmProperty['idAdminCls'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 行政班名称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAdminClsName(value: string) {
    if (value != undefined) {
      this.adminClsName = value;
      this.hmProperty['adminClsName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

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
   * 校区流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdUniZone(value: string) {
    if (value != undefined) {
      this.idUniZone = value;
      this.hmProperty['idUniZone'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 当前学生数(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCurrentStuQty(value: number) {
    if (value != undefined) {
      this.currentStuQty = value;
      this.hmProperty['currentStuQty'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 年级流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdGradeBase(value: string) {
    if (value != undefined) {
      this.idGradeBase = value;
      this.hmProperty['idGradeBase'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 行政班代号(说明:;字段类型:varchar;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAdminClsId(value: string) {
    if (value != undefined) {
      this.adminClsId = value;
      this.hmProperty['adminClsId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 行政班级类型流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdAdminClsType(value: string) {
    if (value != undefined) {
      this.idAdminClsType = value;
      this.hmProperty['idAdminClsType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * AdminClsIndex(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAdminClsIndex(value: number) {
    if (value != undefined) {
      this.adminClsIndex = value;
      this.hmProperty['adminClsIndex'] = true;
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsXzAdminClsEN.con_IdAdminCls:
        return this.idAdminCls;
      case clsXzAdminClsEN.con_AdminClsName:
        return this.adminClsName;
      case clsXzAdminClsEN.con_IdXzMajor:
        return this.idXzMajor;
      case clsXzAdminClsEN.con_IdXzCollege:
        return this.idXzCollege;
      case clsXzAdminClsEN.con_IdUniZone:
        return this.idUniZone;
      case clsXzAdminClsEN.con_CurrentStuQty:
        return this.currentStuQty;
      case clsXzAdminClsEN.con_IdGradeBase:
        return this.idGradeBase;
      case clsXzAdminClsEN.con_AdminClsId:
        return this.adminClsId;
      case clsXzAdminClsEN.con_IdAdminClsType:
        return this.idAdminClsType;
      case clsXzAdminClsEN.con_AdminClsIndex:
        return this.adminClsIndex;
      case clsXzAdminClsEN.con_Memo:
        return this.memo;
      case clsXzAdminClsEN.con_ModifyUserId:
        return this.modifyUserId;
      case clsXzAdminClsEN.con_ModifyDate:
        return this.modifyDate;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[XzAdminCls]中不存在!`;
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
      case clsXzAdminClsEN.con_IdAdminCls:
        this.idAdminCls = strValue;
        this.hmProperty['idAdminCls'] = true;
        break;
      case clsXzAdminClsEN.con_AdminClsName:
        this.adminClsName = strValue;
        this.hmProperty['adminClsName'] = true;
        break;
      case clsXzAdminClsEN.con_IdXzMajor:
        this.idXzMajor = strValue;
        this.hmProperty['idXzMajor'] = true;
        break;
      case clsXzAdminClsEN.con_IdXzCollege:
        this.idXzCollege = strValue;
        this.hmProperty['idXzCollege'] = true;
        break;
      case clsXzAdminClsEN.con_IdUniZone:
        this.idUniZone = strValue;
        this.hmProperty['idUniZone'] = true;
        break;
      case clsXzAdminClsEN.con_CurrentStuQty:
        this.currentStuQty = Number(strValue);
        this.hmProperty['currentStuQty'] = true;
        break;
      case clsXzAdminClsEN.con_IdGradeBase:
        this.idGradeBase = strValue;
        this.hmProperty['idGradeBase'] = true;
        break;
      case clsXzAdminClsEN.con_AdminClsId:
        this.adminClsId = strValue;
        this.hmProperty['adminClsId'] = true;
        break;
      case clsXzAdminClsEN.con_IdAdminClsType:
        this.idAdminClsType = strValue;
        this.hmProperty['idAdminClsType'] = true;
        break;
      case clsXzAdminClsEN.con_AdminClsIndex:
        this.adminClsIndex = Number(strValue);
        this.hmProperty['adminClsIndex'] = true;
        break;
      case clsXzAdminClsEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsXzAdminClsEN.con_ModifyUserId:
        this.modifyUserId = strValue;
        this.hmProperty['modifyUserId'] = true;
        break;
      case clsXzAdminClsEN.con_ModifyDate:
        this.modifyDate = strValue;
        this.hmProperty['modifyDate'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[XzAdminCls]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public idAdminCls = ''; //行政班流水号
  public adminClsName = ''; //行政班名称
  public idXzMajor = ''; //专业流水号
  public idXzCollege = ''; //学院流水号
  public idUniZone = ''; //校区流水号
  public currentStuQty = 0; //当前学生数
  public idGradeBase = ''; //年级流水号
  public adminClsId = ''; //行政班代号
  public idAdminClsType = ''; //行政班级类型流水号
  public adminClsIndex = 0; //AdminClsIndex
  public memo = ''; //备注
  public modifyUserId = ''; //修改人
  public modifyDate = ''; //修改日期

  /**
   * 常量:"IdAdminCls"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdAdminCls(): string {
    return 'idAdminCls';
  } //行政班流水号

  /**
   * 常量:"AdminClsName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AdminClsName(): string {
    return 'adminClsName';
  } //行政班名称

  /**
   * 常量:"IdXzMajor"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzMajor(): string {
    return 'idXzMajor';
  } //专业流水号

  /**
   * 常量:"IdXzCollege"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzCollege(): string {
    return 'idXzCollege';
  } //学院流水号

  /**
   * 常量:"IdUniZone"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdUniZone(): string {
    return 'idUniZone';
  } //校区流水号

  /**
   * 常量:"CurrentStuQty"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CurrentStuQty(): string {
    return 'currentStuQty';
  } //当前学生数

  /**
   * 常量:"IdGradeBase"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdGradeBase(): string {
    return 'idGradeBase';
  } //年级流水号

  /**
   * 常量:"AdminClsId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AdminClsId(): string {
    return 'adminClsId';
  } //行政班代号

  /**
   * 常量:"IdAdminClsType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdAdminClsType(): string {
    return 'idAdminClsType';
  } //行政班级类型流水号

  /**
   * 常量:"AdminClsIndex"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AdminClsIndex(): string {
    return 'adminClsIndex';
  } //AdminClsIndex

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注

  /**
   * 常量:"ModifyUserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ModifyUserId(): string {
    return 'modifyUserId';
  } //修改人

  /**
   * 常量:"ModifyDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ModifyDate(): string {
    return 'modifyDate';
  } //修改日期

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
