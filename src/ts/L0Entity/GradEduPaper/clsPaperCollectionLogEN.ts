/**
 * 类名:clsPaperCollectionLogEN
 * 表名:PaperCollectionLog(01120565)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:17
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
 * 论文收藏(PaperCollectionLog)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsPaperCollectionLogEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'PaperCollectionLog'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'PaperCollectionLogId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 5;
  public static AttributeName = ['paperCollectionLogId', 'paperId', 'updUser', 'updDate', 'meno'];
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
  private mlngPaperCollectionLogId = 0; //论文收藏Id
  private mstrPaperId = ''; //论文Id
  private mstrUpdUser = ''; //修改人
  private mstrUpdDate = ''; //修改日期
  private mstrMeno = ''; //备注

  /**
   * 论文收藏Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPaperCollectionLogId(value: number) {
    if (value != undefined) {
      this.paperCollectionLogId = value;
      this.hmProperty['paperCollectionLogId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 论文Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPaperId(value: string) {
    if (value != undefined) {
      this.paperId = value;
      this.hmProperty['paperId'] = true;
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
   * 备注(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMeno(value: string) {
    if (value != undefined) {
      this.meno = value;
      this.hmProperty['meno'] = true;
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
      case clsPaperCollectionLogEN.con_PaperCollectionLogId:
        return this.paperCollectionLogId;
      case clsPaperCollectionLogEN.con_PaperId:
        return this.paperId;
      case clsPaperCollectionLogEN.con_UpdUser:
        return this.updUser;
      case clsPaperCollectionLogEN.con_UpdDate:
        return this.updDate;
      case clsPaperCollectionLogEN.con_Meno:
        return this.meno;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PaperCollectionLog]中不存在!`;
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
      case clsPaperCollectionLogEN.con_PaperCollectionLogId:
        this.paperCollectionLogId = Number(strValue);
        this.hmProperty['paperCollectionLogId'] = true;
        break;
      case clsPaperCollectionLogEN.con_PaperId:
        this.paperId = strValue;
        this.hmProperty['paperId'] = true;
        break;
      case clsPaperCollectionLogEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsPaperCollectionLogEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsPaperCollectionLogEN.con_Meno:
        this.meno = strValue;
        this.hmProperty['meno'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PaperCollectionLog]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public paperCollectionLogId = 0; //论文收藏Id
  public paperId = ''; //论文Id
  public updUser = ''; //修改人
  public updDate = ''; //修改日期
  public meno = ''; //备注

  /**
   * 常量:"PaperCollectionLogId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PaperCollectionLogId(): string {
    return 'paperCollectionLogId';
  } //论文收藏Id

  /**
   * 常量:"PaperId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PaperId(): string {
    return 'paperId';
  } //论文Id

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改人

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"Meno"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Meno(): string {
    return 'meno';
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
