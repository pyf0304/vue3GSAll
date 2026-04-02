/**
 * 类名:clsvXzMajorDirectionEN
 * 表名:vXzMajorDirection(01120553)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:45:21
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
 * v专业方向(vXzMajorDirection)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvXzMajorDirectionEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vXzMajorDirection'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'MajorDirectionId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 11;
  public static AttributeName = [
    'majorDirectionId',
    'idXzMajor',
    'majorID',
    'majorName',
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvXzMajorDirectionEN.con_MajorDirectionId:
        return this.majorDirectionId;
      case clsvXzMajorDirectionEN.con_IdXzMajor:
        return this.idXzMajor;
      case clsvXzMajorDirectionEN.con_MajorID:
        return this.majorID;
      case clsvXzMajorDirectionEN.con_MajorName:
        return this.majorName;
      case clsvXzMajorDirectionEN.con_MajorDirectionName:
        return this.majorDirectionName;
      case clsvXzMajorDirectionEN.con_MajorDirectionENName:
        return this.majorDirectionENName;
      case clsvXzMajorDirectionEN.con_MajorDirectionExplain:
        return this.majorDirectionExplain;
      case clsvXzMajorDirectionEN.con_IsVisible:
        return this.isVisible;
      case clsvXzMajorDirectionEN.con_UpdDate:
        return this.updDate;
      case clsvXzMajorDirectionEN.con_UpdUser:
        return this.updUser;
      case clsvXzMajorDirectionEN.con_Memo:
        return this.memo;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vXzMajorDirection]中不存在!`;
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
      case clsvXzMajorDirectionEN.con_MajorDirectionId:
        this.majorDirectionId = strValue;
        break;
      case clsvXzMajorDirectionEN.con_IdXzMajor:
        this.idXzMajor = strValue;
        break;
      case clsvXzMajorDirectionEN.con_MajorID:
        this.majorID = strValue;
        break;
      case clsvXzMajorDirectionEN.con_MajorName:
        this.majorName = strValue;
        break;
      case clsvXzMajorDirectionEN.con_MajorDirectionName:
        this.majorDirectionName = strValue;
        break;
      case clsvXzMajorDirectionEN.con_MajorDirectionENName:
        this.majorDirectionENName = strValue;
        break;
      case clsvXzMajorDirectionEN.con_MajorDirectionExplain:
        this.majorDirectionExplain = strValue;
        break;
      case clsvXzMajorDirectionEN.con_IsVisible:
        this.isVisible = Boolean(strValue);
        break;
      case clsvXzMajorDirectionEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvXzMajorDirectionEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvXzMajorDirectionEN.con_Memo:
        this.memo = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vXzMajorDirection]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public majorID = ''; //专业ID
  public majorName = ''; //专业名称
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
