/**
 * 类名:clsXzMajorDirectionEN
 * 表名:XzMajorDirection(01120552)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/10 08:14:09
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
 * 专业方向(XzMajorDirection)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsXzMajorDirectionEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'XzMajorDirection'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'MajorDirectionId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 9;
  public static AttributeName = [
    'majorDirectionId',
    'idXzMajor',
    'majorDirectionName',
    'majorDirectionENName',
    'majorDirectionExplain',
    'isVisible',
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
  private mstrMajorDirectionId = ''; //研究方向Id
  private mstrIdXzMajor = ''; //专业流水号
  private mstrMajorDirectionName = ''; //研究方向名
  private mstrMajorDirectionENName = ''; //研究方向英文名
  private mstrMajorDirectionExplain = ''; //专业方向说明
  private mbolIsVisible = false; //是否显示
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改人
  private mstrMemo = ''; //备注

  /**
   * 研究方向Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMajorDirectionId(value: string) {
    if (value != undefined) {
      this.majorDirectionId = value;
      this.hmProperty['majorDirectionId'] = true;
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
   * 研究方向名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMajorDirectionName(value: string) {
    if (value != undefined) {
      this.majorDirectionName = value;
      this.hmProperty['majorDirectionName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 研究方向英文名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMajorDirectionENName(value: string) {
    if (value != undefined) {
      this.majorDirectionENName = value;
      this.hmProperty['majorDirectionENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 专业方向说明(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMajorDirectionExplain(value: string) {
    if (value != undefined) {
      this.majorDirectionExplain = value;
      this.hmProperty['majorDirectionExplain'] = true;
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
      case clsXzMajorDirectionEN.con_MajorDirectionId:
        return this.majorDirectionId;
      case clsXzMajorDirectionEN.con_IdXzMajor:
        return this.idXzMajor;
      case clsXzMajorDirectionEN.con_MajorDirectionName:
        return this.majorDirectionName;
      case clsXzMajorDirectionEN.con_MajorDirectionENName:
        return this.majorDirectionENName;
      case clsXzMajorDirectionEN.con_MajorDirectionExplain:
        return this.majorDirectionExplain;
      case clsXzMajorDirectionEN.con_IsVisible:
        return this.isVisible;
      case clsXzMajorDirectionEN.con_UpdDate:
        return this.updDate;
      case clsXzMajorDirectionEN.con_UpdUser:
        return this.updUser;
      case clsXzMajorDirectionEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[XzMajorDirection]中不存在!`;
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
      case clsXzMajorDirectionEN.con_MajorDirectionId:
        this.majorDirectionId = strValue;
        this.hmProperty['majorDirectionId'] = true;
        break;
      case clsXzMajorDirectionEN.con_IdXzMajor:
        this.idXzMajor = strValue;
        this.hmProperty['idXzMajor'] = true;
        break;
      case clsXzMajorDirectionEN.con_MajorDirectionName:
        this.majorDirectionName = strValue;
        this.hmProperty['majorDirectionName'] = true;
        break;
      case clsXzMajorDirectionEN.con_MajorDirectionENName:
        this.majorDirectionENName = strValue;
        this.hmProperty['majorDirectionENName'] = true;
        break;
      case clsXzMajorDirectionEN.con_MajorDirectionExplain:
        this.majorDirectionExplain = strValue;
        this.hmProperty['majorDirectionExplain'] = true;
        break;
      case clsXzMajorDirectionEN.con_IsVisible:
        this.isVisible = Boolean(strValue);
        this.hmProperty['isVisible'] = true;
        break;
      case clsXzMajorDirectionEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsXzMajorDirectionEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsXzMajorDirectionEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[XzMajorDirection]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public majorDirectionId = ''; //研究方向Id
  public idXzMajor = ''; //专业流水号
  public majorDirectionName = ''; //研究方向名
  public majorDirectionENName = ''; //研究方向英文名
  public majorDirectionExplain = ''; //专业方向说明
  public isVisible = false; //是否显示
  public updDate = ''; //修改日期
  public updUser = ''; //修改人
  public memo = ''; //备注

  /**
   * 常量:"MajorDirectionId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MajorDirectionId(): string {
    return 'majorDirectionId';
  } //研究方向Id

  /**
   * 常量:"IdXzMajor"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzMajor(): string {
    return 'idXzMajor';
  } //专业流水号

  /**
   * 常量:"MajorDirectionName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MajorDirectionName(): string {
    return 'majorDirectionName';
  } //研究方向名

  /**
   * 常量:"MajorDirectionENName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MajorDirectionENName(): string {
    return 'majorDirectionENName';
  } //研究方向英文名

  /**
   * 常量:"MajorDirectionExplain"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MajorDirectionExplain(): string {
    return 'majorDirectionExplain';
  } //专业方向说明

  /**
   * 常量:"IsVisible"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsVisible(): string {
    return 'isVisible';
  } //是否显示

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
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumXzMajorDirection {
  /**
   * testlyl
   **/
  static readonly testlyl_00000001 = '00000001';
  /**
   * test0118
   **/
  static readonly test_00000003 = '00000003';
  /**
   * 杨雪姣
   **/
  static readonly Lucy_00000004 = '00000004';
  /**
   * 信息化教育
   **/
  static readonly InformationTechnology_00000005 = '00000005';
  /**
   * 绩效培训
   **/
  static readonly PerformanceTraining_00000006 = '00000006';
  /**
   * 网络方向
   **/
  static readonly NetworkingDirection_00000007 = '00000007';
  /**
   * 数字媒体
   **/
  static readonly DigitalMedia_00000008 = '00000008';
  /**
   * 自适应学习与个性化学习
   **/
  static readonly AdaptiveLearningAndPersonalizedLearning_00000009 = '00000009';
}
