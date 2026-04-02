/**
 * 类名:clsPaperSubViewpointAppraiseEN
 * 表名:PaperSubViewpointAppraise(01120561)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/29 23:51:19
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
 * 子观点评论表(PaperSubViewpointAppraise)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsPaperSubViewpointAppraiseEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '02'; //客户端缓存
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'PaperSubViewpointAppraise'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'PaperSubViewpointAppraiseId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 7;
  public static AttributeName = [
    'paperSubViewpointAppraiseId',
    'subViewpointId',
    'appraiseScore',
    'appraiseContent',
    'updDate',
    'meno',
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
  private mlngPaperSubViewpointAppraiseId = 0; //子观点评价Id
  private mlngSubViewpointId = 0; //子观点Id
  private mfltAppraiseScore = 0.0; //打分
  private mstrAppraiseContent = ''; //评议内容
  private mstrUpdDate = ''; //修改日期
  private mstrMeno = ''; //备注
  private mstrUpdUser = ''; //修改人

  /**
   * 子观点评价Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPaperSubViewpointAppraiseId(value: number) {
    if (value != undefined) {
      this.paperSubViewpointAppraiseId = value;
      this.hmProperty['paperSubViewpointAppraiseId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 子观点Id(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSubViewpointId(value: number) {
    if (value != undefined) {
      this.subViewpointId = value;
      this.hmProperty['subViewpointId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 打分(说明:;字段类型:float;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAppraiseScore(value: number) {
    if (value != undefined) {
      this.appraiseScore = value;
      this.hmProperty['appraiseScore'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 评议内容(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAppraiseContent(value: string) {
    if (value != undefined) {
      this.appraiseContent = value;
      this.hmProperty['appraiseContent'] = true;
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
      case clsPaperSubViewpointAppraiseEN.con_PaperSubViewpointAppraiseId:
        return this.paperSubViewpointAppraiseId;
      case clsPaperSubViewpointAppraiseEN.con_SubViewpointId:
        return this.subViewpointId;
      case clsPaperSubViewpointAppraiseEN.con_AppraiseScore:
        return this.appraiseScore;
      case clsPaperSubViewpointAppraiseEN.con_AppraiseContent:
        return this.appraiseContent;
      case clsPaperSubViewpointAppraiseEN.con_UpdDate:
        return this.updDate;
      case clsPaperSubViewpointAppraiseEN.con_Meno:
        return this.meno;
      case clsPaperSubViewpointAppraiseEN.con_UpdUser:
        return this.updUser;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PaperSubViewpointAppraise]中不存在!`;
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
      case clsPaperSubViewpointAppraiseEN.con_PaperSubViewpointAppraiseId:
        this.paperSubViewpointAppraiseId = Number(strValue);
        this.hmProperty['paperSubViewpointAppraiseId'] = true;
        break;
      case clsPaperSubViewpointAppraiseEN.con_SubViewpointId:
        this.subViewpointId = Number(strValue);
        this.hmProperty['subViewpointId'] = true;
        break;
      case clsPaperSubViewpointAppraiseEN.con_AppraiseScore:
        this.appraiseScore = Number(strValue);
        this.hmProperty['appraiseScore'] = true;
        break;
      case clsPaperSubViewpointAppraiseEN.con_AppraiseContent:
        this.appraiseContent = strValue;
        this.hmProperty['appraiseContent'] = true;
        break;
      case clsPaperSubViewpointAppraiseEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsPaperSubViewpointAppraiseEN.con_Meno:
        this.meno = strValue;
        this.hmProperty['meno'] = true;
        break;
      case clsPaperSubViewpointAppraiseEN.con_UpdUser:
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
        strMsg = `字段名:[${strFldName}]在表对象:[PaperSubViewpointAppraise]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public paperSubViewpointAppraiseId = 0; //子观点评价Id
  public subViewpointId = 0; //子观点Id
  public appraiseScore = 0.0; //打分
  public appraiseContent = ''; //评议内容
  public updDate = ''; //修改日期
  public meno = ''; //备注
  public updUser = ''; //修改人

  /**
   * 常量:"PaperSubViewpointAppraiseId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PaperSubViewpointAppraiseId(): string {
    return 'paperSubViewpointAppraiseId';
  } //子观点评价Id

  /**
   * 常量:"SubViewpointId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SubViewpointId(): string {
    return 'subViewpointId';
  } //子观点Id

  /**
   * 常量:"AppraiseScore"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AppraiseScore(): string {
    return 'appraiseScore';
  } //打分

  /**
   * 常量:"AppraiseContent"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AppraiseContent(): string {
    return 'appraiseContent';
  } //评议内容

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
