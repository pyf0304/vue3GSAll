/**
 * 类名:clsgs_PaperDiscussEN
 * 表名:gs_PaperDiscuss(01120681)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:24
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
 * 论文讨论表(gs_PaperDiscuss)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsgs_PaperDiscussEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'gs_PaperDiscuss'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DiscussId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'discussId',
    'discussContent',
    'paperId',
    'parentId',
    'score',
    'scoreType',
    'discussTypeId',
    'userId',
    'voteCount',
    'updUser',
    'updDate',
    'idCurrEduCls',
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
  private mstrDiscussId = ''; //讨论ID
  private mstrDiscussContent = ''; //讨论内容
  private mstrPaperId = ''; //论文Id
  private mstrParentId = ''; //父节点Id
  private mfltScore = 0.0; //评分
  private mstrScoreType = ''; //评分类型
  private mstrDiscussTypeId = ''; //讨论类型Id
  private mstrUserId = ''; //用户ID
  private mintVoteCount = 0; //点赞计数
  private mstrUpdUser = ''; //修改人
  private mstrUpdDate = ''; //修改日期
  private mstrIdCurrEduCls = ''; //教学班流水号
  private mstrMemo = ''; //备注

  /**
   * 讨论ID(说明:;字段类型:char;字段长度:10;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDiscussId(value: string) {
    if (value != undefined) {
      this.discussId = value;
      this.hmProperty['discussId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 讨论内容(说明:;字段类型:varchar;字段长度:2000;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDiscussContent(value: string) {
    if (value != undefined) {
      this.discussContent = value;
      this.hmProperty['discussContent'] = true;
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
   * 父节点Id(说明:;字段类型:char;字段长度:10;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParentId(value: string) {
    if (value != undefined) {
      this.parentId = value;
      this.hmProperty['parentId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 评分(说明:;字段类型:float;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetScore(value: number) {
    if (value != undefined) {
      this.score = value;
      this.hmProperty['score'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 评分类型(说明:;字段类型:char;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetScoreType(value: string) {
    if (value != undefined) {
      this.scoreType = value;
      this.hmProperty['scoreType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 讨论类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDiscussTypeId(value: string) {
    if (value != undefined) {
      this.discussTypeId = value;
      this.hmProperty['discussTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 用户ID(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserId(value: string) {
    if (value != undefined) {
      this.userId = value;
      this.hmProperty['userId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 点赞计数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVoteCount(value: number) {
    if (value != undefined) {
      this.voteCount = value;
      this.hmProperty['voteCount'] = true;
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
      case clsgs_PaperDiscussEN.con_DiscussId:
        return this.discussId;
      case clsgs_PaperDiscussEN.con_DiscussContent:
        return this.discussContent;
      case clsgs_PaperDiscussEN.con_PaperId:
        return this.paperId;
      case clsgs_PaperDiscussEN.con_ParentId:
        return this.parentId;
      case clsgs_PaperDiscussEN.con_Score:
        return this.score;
      case clsgs_PaperDiscussEN.con_ScoreType:
        return this.scoreType;
      case clsgs_PaperDiscussEN.con_DiscussTypeId:
        return this.discussTypeId;
      case clsgs_PaperDiscussEN.con_UserId:
        return this.userId;
      case clsgs_PaperDiscussEN.con_VoteCount:
        return this.voteCount;
      case clsgs_PaperDiscussEN.con_UpdUser:
        return this.updUser;
      case clsgs_PaperDiscussEN.con_UpdDate:
        return this.updDate;
      case clsgs_PaperDiscussEN.con_IdCurrEduCls:
        return this.idCurrEduCls;
      case clsgs_PaperDiscussEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[gs_PaperDiscuss]中不存在!`;
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
      case clsgs_PaperDiscussEN.con_DiscussId:
        this.discussId = strValue;
        this.hmProperty['discussId'] = true;
        break;
      case clsgs_PaperDiscussEN.con_DiscussContent:
        this.discussContent = strValue;
        this.hmProperty['discussContent'] = true;
        break;
      case clsgs_PaperDiscussEN.con_PaperId:
        this.paperId = strValue;
        this.hmProperty['paperId'] = true;
        break;
      case clsgs_PaperDiscussEN.con_ParentId:
        this.parentId = strValue;
        this.hmProperty['parentId'] = true;
        break;
      case clsgs_PaperDiscussEN.con_Score:
        this.score = Number(strValue);
        this.hmProperty['score'] = true;
        break;
      case clsgs_PaperDiscussEN.con_ScoreType:
        this.scoreType = strValue;
        this.hmProperty['scoreType'] = true;
        break;
      case clsgs_PaperDiscussEN.con_DiscussTypeId:
        this.discussTypeId = strValue;
        this.hmProperty['discussTypeId'] = true;
        break;
      case clsgs_PaperDiscussEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsgs_PaperDiscussEN.con_VoteCount:
        this.voteCount = Number(strValue);
        this.hmProperty['voteCount'] = true;
        break;
      case clsgs_PaperDiscussEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsgs_PaperDiscussEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsgs_PaperDiscussEN.con_IdCurrEduCls:
        this.idCurrEduCls = strValue;
        this.hmProperty['idCurrEduCls'] = true;
        break;
      case clsgs_PaperDiscussEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[gs_PaperDiscuss]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public discussId = ''; //讨论ID
  public discussContent = ''; //讨论内容
  public paperId = ''; //论文Id
  public parentId = ''; //父节点Id
  public score = 0.0; //评分
  public scoreType = ''; //评分类型
  public discussTypeId = ''; //讨论类型Id
  public userId = ''; //用户ID
  public voteCount = 0; //点赞计数
  public updUser = ''; //修改人
  public updDate = ''; //修改日期
  public idCurrEduCls = ''; //教学班流水号
  public memo = ''; //备注

  /**
   * 常量:"DiscussId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DiscussId(): string {
    return 'discussId';
  } //讨论ID

  /**
   * 常量:"DiscussContent"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DiscussContent(): string {
    return 'discussContent';
  } //讨论内容

  /**
   * 常量:"PaperId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PaperId(): string {
    return 'paperId';
  } //论文Id

  /**
   * 常量:"ParentId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ParentId(): string {
    return 'parentId';
  } //父节点Id

  /**
   * 常量:"Score"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Score(): string {
    return 'score';
  } //评分

  /**
   * 常量:"ScoreType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ScoreType(): string {
    return 'scoreType';
  } //评分类型

  /**
   * 常量:"DiscussTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DiscussTypeId(): string {
    return 'discussTypeId';
  } //讨论类型Id

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户ID

  /**
   * 常量:"VoteCount"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_VoteCount(): string {
    return 'voteCount';
  } //点赞计数

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
   * 常量:"IdCurrEduCls"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdCurrEduCls(): string {
    return 'idCurrEduCls';
  } //教学班流水号

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
