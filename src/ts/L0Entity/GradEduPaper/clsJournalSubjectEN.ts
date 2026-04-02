/**
 * 类名:clsJournalSubjectEN
 * 表名:JournalSubject(01120930)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:07
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 期刊学科(JournalSubject)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsJournalSubjectEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'JournalSubject'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'JournalSubjectId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 7;
  public static AttributeName = [
    'journalSubjectId',
    'journalSubjectCode',
    'journalSubjectName',
    'journalSubjectCategoryId',
    'updDate',
    'updUser',
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
  private mstrJournalSubjectId = ''; //期刊学科Id
  private mstrJournalSubjectCode = ''; //期刊学科代码
  private mstrJournalSubjectName = ''; //期刊学科名称
  private mstrJournalSubjectCategoryId = ''; //期刊学科门类Id
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改人
  private mstrMemo = ''; //备注

  /**
   * 期刊学科Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetJournalSubjectId(value: string) {
    if (value != undefined) {
      this.journalSubjectId = value;
      this.hmProperty['journalSubjectId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 期刊学科代码(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetJournalSubjectCode(value: string) {
    if (value != undefined) {
      this.journalSubjectCode = value;
      this.hmProperty['journalSubjectCode'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 期刊学科名称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetJournalSubjectName(value: string) {
    if (value != undefined) {
      this.journalSubjectName = value;
      this.hmProperty['journalSubjectName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 期刊学科门类Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetJournalSubjectCategoryId(value: string) {
    if (value != undefined) {
      this.journalSubjectCategoryId = value;
      this.hmProperty['journalSubjectCategoryId'] = true;
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
   * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUser(value: string) {
    if (value != undefined) {
      this.updUser = value;
      this.hmProperty['updUser'] = true;
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
      case clsJournalSubjectEN.con_JournalSubjectId:
        return this.journalSubjectId;
      case clsJournalSubjectEN.con_JournalSubjectCode:
        return this.journalSubjectCode;
      case clsJournalSubjectEN.con_JournalSubjectName:
        return this.journalSubjectName;
      case clsJournalSubjectEN.con_JournalSubjectCategoryId:
        return this.journalSubjectCategoryId;
      case clsJournalSubjectEN.con_UpdDate:
        return this.updDate;
      case clsJournalSubjectEN.con_UpdUser:
        return this.updUser;
      case clsJournalSubjectEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[JournalSubject]中不存在!`;
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
      case clsJournalSubjectEN.con_JournalSubjectId:
        this.journalSubjectId = strValue;
        this.hmProperty['journalSubjectId'] = true;
        break;
      case clsJournalSubjectEN.con_JournalSubjectCode:
        this.journalSubjectCode = strValue;
        this.hmProperty['journalSubjectCode'] = true;
        break;
      case clsJournalSubjectEN.con_JournalSubjectName:
        this.journalSubjectName = strValue;
        this.hmProperty['journalSubjectName'] = true;
        break;
      case clsJournalSubjectEN.con_JournalSubjectCategoryId:
        this.journalSubjectCategoryId = strValue;
        this.hmProperty['journalSubjectCategoryId'] = true;
        break;
      case clsJournalSubjectEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsJournalSubjectEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsJournalSubjectEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[JournalSubject]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public journalSubjectId = ''; //期刊学科Id
  public journalSubjectCode = ''; //期刊学科代码
  public journalSubjectName = ''; //期刊学科名称
  public journalSubjectCategoryId = ''; //期刊学科门类Id
  public updDate = ''; //修改日期
  public updUser = ''; //修改人
  public memo = ''; //备注

  /**
   * 常量:"JournalSubjectId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_JournalSubjectId(): string {
    return 'journalSubjectId';
  } //期刊学科Id

  /**
   * 常量:"JournalSubjectCode"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_JournalSubjectCode(): string {
    return 'journalSubjectCode';
  } //期刊学科代码

  /**
   * 常量:"JournalSubjectName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_JournalSubjectName(): string {
    return 'journalSubjectName';
  } //期刊学科名称

  /**
   * 常量:"JournalSubjectCategoryId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_JournalSubjectCategoryId(): string {
    return 'journalSubjectCategoryId';
  } //期刊学科门类Id

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改人

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
