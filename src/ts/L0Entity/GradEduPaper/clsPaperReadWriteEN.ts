/**
 * 类名:clsPaperReadWriteEN
 * 表名:PaperReadWrite(01120547)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:05
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
 * 论文读写表(PaperReadWrite)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsPaperReadWriteEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'PaperReadWrite'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'PaperRWId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 16;
  public static AttributeName = [
    'paperRWId',
    'readerId',
    'paperId',
    'researchQuestion',
    'operationTypeId',
    'updDate',
    'memo',
    'isSubmit',
    'isPublic',
    'submitter',
    'idCurrEduCls',
    'subVCount',
    'teaCount',
    'createDate',
    'shareId',
    'updUser',
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
  private mstrPaperRWId = ''; //课文阅读
  private mstrReaderId = ''; //阅读者Id
  private mstrPaperId = ''; //论文Id
  private mstrResearchQuestion = ''; //研究问题
  private mstrOperationTypeId = ''; //操作类型ID
  private mstrUpdDate = ''; //修改日期
  private mstrMemo = ''; //备注
  private mbolIsSubmit = false; //是否提交
  private mbolIsPublic = false; //是否公开
  private mstrSubmitter = ''; //提交人
  private mstrIdCurrEduCls = ''; //教学班流水号
  private mintSubVCount = 0; //论文子观点数
  private mintTeaCount = 0; //TeaCount
  private mstrCreateDate = ''; //建立日期
  private mstrShareId = ''; //分享Id
  private mstrUpdUser = ''; //修改人

  /**
   * 课文阅读(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPaperRWId(value: string) {
    if (value != undefined) {
      this.paperRWId = value;
      this.hmProperty['paperRWId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 阅读者Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetReaderId(value: string) {
    if (value != undefined) {
      this.readerId = value;
      this.hmProperty['readerId'] = true;
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
   * 研究问题(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetResearchQuestion(value: string) {
    if (value != undefined) {
      this.researchQuestion = value;
      this.hmProperty['researchQuestion'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 操作类型ID(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOperationTypeId(value: string) {
    if (value != undefined) {
      this.operationTypeId = value;
      this.hmProperty['operationTypeId'] = true;
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
   * 是否提交(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsSubmit(value: boolean) {
    if (value != undefined) {
      this.isSubmit = value;
      this.hmProperty['isSubmit'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否公开(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsPublic(value: boolean) {
    if (value != undefined) {
      this.isPublic = value;
      this.hmProperty['isPublic'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 提交人(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSubmitter(value: string) {
    if (value != undefined) {
      this.submitter = value;
      this.hmProperty['submitter'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 教学班流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdCurrEduCls(value: string) {
    if (value != undefined) {
      this.idCurrEduCls = value;
      this.hmProperty['idCurrEduCls'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 论文子观点数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSubVCount(value: number) {
    if (value != undefined) {
      this.subVCount = value;
      this.hmProperty['subVCount'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * TeaCount(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTeaCount(value: number) {
    if (value != undefined) {
      this.teaCount = value;
      this.hmProperty['teaCount'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 建立日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCreateDate(value: string) {
    if (value != undefined) {
      this.createDate = value;
      this.hmProperty['createDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 分享Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetShareId(value: string) {
    if (value != undefined) {
      this.shareId = value;
      this.hmProperty['shareId'] = true;
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsPaperReadWriteEN.con_PaperRWId:
        return this.paperRWId;
      case clsPaperReadWriteEN.con_ReaderId:
        return this.readerId;
      case clsPaperReadWriteEN.con_PaperId:
        return this.paperId;
      case clsPaperReadWriteEN.con_ResearchQuestion:
        return this.researchQuestion;
      case clsPaperReadWriteEN.con_OperationTypeId:
        return this.operationTypeId;
      case clsPaperReadWriteEN.con_UpdDate:
        return this.updDate;
      case clsPaperReadWriteEN.con_Memo:
        return this.memo;
      case clsPaperReadWriteEN.con_IsSubmit:
        return this.isSubmit;
      case clsPaperReadWriteEN.con_IsPublic:
        return this.isPublic;
      case clsPaperReadWriteEN.con_Submitter:
        return this.submitter;
      case clsPaperReadWriteEN.con_IdCurrEduCls:
        return this.idCurrEduCls;
      case clsPaperReadWriteEN.con_SubVCount:
        return this.subVCount;
      case clsPaperReadWriteEN.con_TeaCount:
        return this.teaCount;
      case clsPaperReadWriteEN.con_CreateDate:
        return this.createDate;
      case clsPaperReadWriteEN.con_ShareId:
        return this.shareId;
      case clsPaperReadWriteEN.con_UpdUser:
        return this.updUser;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PaperReadWrite]中不存在!`;
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
      case clsPaperReadWriteEN.con_PaperRWId:
        this.paperRWId = strValue;
        this.hmProperty['paperRWId'] = true;
        break;
      case clsPaperReadWriteEN.con_ReaderId:
        this.readerId = strValue;
        this.hmProperty['readerId'] = true;
        break;
      case clsPaperReadWriteEN.con_PaperId:
        this.paperId = strValue;
        this.hmProperty['paperId'] = true;
        break;
      case clsPaperReadWriteEN.con_ResearchQuestion:
        this.researchQuestion = strValue;
        this.hmProperty['researchQuestion'] = true;
        break;
      case clsPaperReadWriteEN.con_OperationTypeId:
        this.operationTypeId = strValue;
        this.hmProperty['operationTypeId'] = true;
        break;
      case clsPaperReadWriteEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsPaperReadWriteEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsPaperReadWriteEN.con_IsSubmit:
        this.isSubmit = Boolean(strValue);
        this.hmProperty['isSubmit'] = true;
        break;
      case clsPaperReadWriteEN.con_IsPublic:
        this.isPublic = Boolean(strValue);
        this.hmProperty['isPublic'] = true;
        break;
      case clsPaperReadWriteEN.con_Submitter:
        this.submitter = strValue;
        this.hmProperty['submitter'] = true;
        break;
      case clsPaperReadWriteEN.con_IdCurrEduCls:
        this.idCurrEduCls = strValue;
        this.hmProperty['idCurrEduCls'] = true;
        break;
      case clsPaperReadWriteEN.con_SubVCount:
        this.subVCount = Number(strValue);
        this.hmProperty['subVCount'] = true;
        break;
      case clsPaperReadWriteEN.con_TeaCount:
        this.teaCount = Number(strValue);
        this.hmProperty['teaCount'] = true;
        break;
      case clsPaperReadWriteEN.con_CreateDate:
        this.createDate = strValue;
        this.hmProperty['createDate'] = true;
        break;
      case clsPaperReadWriteEN.con_ShareId:
        this.shareId = strValue;
        this.hmProperty['shareId'] = true;
        break;
      case clsPaperReadWriteEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PaperReadWrite]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public paperRWId = ''; //课文阅读
  public readerId = ''; //阅读者Id
  public paperId = ''; //论文Id
  public researchQuestion = ''; //研究问题
  public operationTypeId = ''; //操作类型ID
  public updDate = ''; //修改日期
  public memo = ''; //备注
  public isSubmit = false; //是否提交
  public isPublic = false; //是否公开
  public submitter = ''; //提交人
  public idCurrEduCls = ''; //教学班流水号
  public subVCount = 0; //论文子观点数
  public teaCount = 0; //TeaCount
  public createDate = ''; //建立日期
  public shareId = ''; //分享Id
  public updUser = ''; //修改人

  /**
   * 常量:"PaperRWId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PaperRWId(): string {
    return 'paperRWId';
  } //课文阅读

  /**
   * 常量:"ReaderId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ReaderId(): string {
    return 'readerId';
  } //阅读者Id

  /**
   * 常量:"PaperId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PaperId(): string {
    return 'paperId';
  } //论文Id

  /**
   * 常量:"ResearchQuestion"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ResearchQuestion(): string {
    return 'researchQuestion';
  } //研究问题

  /**
   * 常量:"OperationTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OperationTypeId(): string {
    return 'operationTypeId';
  } //操作类型ID

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注

  /**
   * 常量:"IsSubmit"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsSubmit(): string {
    return 'isSubmit';
  } //是否提交

  /**
   * 常量:"IsPublic"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsPublic(): string {
    return 'isPublic';
  } //是否公开

  /**
   * 常量:"Submitter"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Submitter(): string {
    return 'submitter';
  } //提交人

  /**
   * 常量:"IdCurrEduCls"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdCurrEduCls(): string {
    return 'idCurrEduCls';
  } //教学班流水号

  /**
   * 常量:"SubVCount"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SubVCount(): string {
    return 'subVCount';
  } //论文子观点数

  /**
   * 常量:"TeaCount"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TeaCount(): string {
    return 'teaCount';
  } //TeaCount

  /**
   * 常量:"CreateDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CreateDate(): string {
    return 'createDate';
  } //建立日期

  /**
   * 常量:"ShareId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ShareId(): string {
    return 'shareId';
  } //分享Id

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改人

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
