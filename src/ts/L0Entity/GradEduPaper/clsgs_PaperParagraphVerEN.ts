/**
 * 类名:clsgs_PaperParagraphVerEN
 * 表名:gs_PaperParagraphVer(01120743)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:30
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
 * 论文段落版本(gs_PaperParagraphVer)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsgs_PaperParagraphVerEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'gs_PaperParagraphVer'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ParagraphVId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 9;
  public static AttributeName = [
    'paragraphVId',
    'paragraphId',
    'sectionId',
    'paragraphTypeId',
    'paragraphContent',
    'updDate',
    'updUser',
    'memo',
    'paperId',
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
  private mlngParagraphVId = 0; //段落版本Id
  private mstrParagraphId = ''; //段落Id
  private mstrSectionId = ''; //节Id
  private mstrParagraphTypeId = ''; //段落类型Id
  private mstrParagraphContent = ''; //段落内容
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改人
  private mstrMemo = ''; //备注
  private mstrPaperId = ''; //论文Id

  /**
   * 段落版本Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParagraphVId(value: number) {
    if (value != undefined) {
      this.paragraphVId = value;
      this.hmProperty['paragraphVId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 段落Id(说明:;字段类型:char;字段长度:10;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParagraphId(value: string) {
    if (value != undefined) {
      this.paragraphId = value;
      this.hmProperty['paragraphId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 节Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSectionId(value: string) {
    if (value != undefined) {
      this.sectionId = value;
      this.hmProperty['sectionId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 段落类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParagraphTypeId(value: string) {
    if (value != undefined) {
      this.paragraphTypeId = value;
      this.hmProperty['paragraphTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 段落内容(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParagraphContent(value: string) {
    if (value != undefined) {
      this.paragraphContent = value;
      this.hmProperty['paragraphContent'] = true;
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsgs_PaperParagraphVerEN.con_ParagraphVId:
        return this.paragraphVId;
      case clsgs_PaperParagraphVerEN.con_ParagraphId:
        return this.paragraphId;
      case clsgs_PaperParagraphVerEN.con_SectionId:
        return this.sectionId;
      case clsgs_PaperParagraphVerEN.con_ParagraphTypeId:
        return this.paragraphTypeId;
      case clsgs_PaperParagraphVerEN.con_ParagraphContent:
        return this.paragraphContent;
      case clsgs_PaperParagraphVerEN.con_UpdDate:
        return this.updDate;
      case clsgs_PaperParagraphVerEN.con_UpdUser:
        return this.updUser;
      case clsgs_PaperParagraphVerEN.con_Memo:
        return this.memo;
      case clsgs_PaperParagraphVerEN.con_PaperId:
        return this.paperId;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[gs_PaperParagraphVer]中不存在!`;
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
      case clsgs_PaperParagraphVerEN.con_ParagraphVId:
        this.paragraphVId = Number(strValue);
        this.hmProperty['paragraphVId'] = true;
        break;
      case clsgs_PaperParagraphVerEN.con_ParagraphId:
        this.paragraphId = strValue;
        this.hmProperty['paragraphId'] = true;
        break;
      case clsgs_PaperParagraphVerEN.con_SectionId:
        this.sectionId = strValue;
        this.hmProperty['sectionId'] = true;
        break;
      case clsgs_PaperParagraphVerEN.con_ParagraphTypeId:
        this.paragraphTypeId = strValue;
        this.hmProperty['paragraphTypeId'] = true;
        break;
      case clsgs_PaperParagraphVerEN.con_ParagraphContent:
        this.paragraphContent = strValue;
        this.hmProperty['paragraphContent'] = true;
        break;
      case clsgs_PaperParagraphVerEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsgs_PaperParagraphVerEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsgs_PaperParagraphVerEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsgs_PaperParagraphVerEN.con_PaperId:
        this.paperId = strValue;
        this.hmProperty['paperId'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[gs_PaperParagraphVer]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public paragraphVId = 0; //段落版本Id
  public paragraphId = ''; //段落Id
  public sectionId = ''; //节Id
  public paragraphTypeId = ''; //段落类型Id
  public paragraphContent = ''; //段落内容
  public updDate = ''; //修改日期
  public updUser = ''; //修改人
  public memo = ''; //备注
  public paperId = ''; //论文Id

  /**
   * 常量:"ParagraphVId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ParagraphVId(): string {
    return 'paragraphVId';
  } //段落版本Id

  /**
   * 常量:"ParagraphId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ParagraphId(): string {
    return 'paragraphId';
  } //段落Id

  /**
   * 常量:"SectionId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SectionId(): string {
    return 'sectionId';
  } //节Id

  /**
   * 常量:"ParagraphTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ParagraphTypeId(): string {
    return 'paragraphTypeId';
  } //段落类型Id

  /**
   * 常量:"ParagraphContent"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ParagraphContent(): string {
    return 'paragraphContent';
  } //段落内容

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
   * 常量:"PaperId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PaperId(): string {
    return 'paperId';
  } //论文Id

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
