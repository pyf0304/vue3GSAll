/**
 * 类名:clsvgs_UserConfigEN
 * 表名:vgs_UserConfig(01120691)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:53
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:考试管理(ExamMan)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 用户配置视图(vgs_UserConfig)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvgs_UserConfigEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '02'; //客户端缓存
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vgs_UserConfig'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ConfigId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 10;
  public static AttributeName = [
    'configId',
    'configTypeId',
    'configTypeName',
    'shareId',
    'dataTable',
    'updUser',
    'dataTableId',
    'updDate',
    'shareName',
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
      case clsvgs_UserConfigEN.con_ConfigId:
        return this.configId;
      case clsvgs_UserConfigEN.con_ConfigTypeId:
        return this.configTypeId;
      case clsvgs_UserConfigEN.con_ConfigTypeName:
        return this.configTypeName;
      case clsvgs_UserConfigEN.con_ShareId:
        return this.shareId;
      case clsvgs_UserConfigEN.con_DataTable:
        return this.dataTable;
      case clsvgs_UserConfigEN.con_UpdUser:
        return this.updUser;
      case clsvgs_UserConfigEN.con_DataTableId:
        return this.dataTableId;
      case clsvgs_UserConfigEN.con_UpdDate:
        return this.updDate;
      case clsvgs_UserConfigEN.con_ShareName:
        return this.shareName;
      case clsvgs_UserConfigEN.con_Memo:
        return this.memo;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vgs_UserConfig]中不存在!`;
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
      case clsvgs_UserConfigEN.con_ConfigId:
        this.configId = Number(strValue);
        break;
      case clsvgs_UserConfigEN.con_ConfigTypeId:
        this.configTypeId = strValue;
        break;
      case clsvgs_UserConfigEN.con_ConfigTypeName:
        this.configTypeName = strValue;
        break;
      case clsvgs_UserConfigEN.con_ShareId:
        this.shareId = strValue;
        break;
      case clsvgs_UserConfigEN.con_DataTable:
        this.dataTable = strValue;
        break;
      case clsvgs_UserConfigEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvgs_UserConfigEN.con_DataTableId:
        this.dataTableId = strValue;
        break;
      case clsvgs_UserConfigEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvgs_UserConfigEN.con_ShareName:
        this.shareName = strValue;
        break;
      case clsvgs_UserConfigEN.con_Memo:
        this.memo = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vgs_UserConfig]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public configId = 0; //配置Id
  public configTypeId = ''; //配置类型Id
  public configTypeName = ''; //配置类型名称
  public shareId = ''; //分享Id
  public dataTable = ''; //数据表
  public updUser = ''; //修改人
  public dataTableId = ''; //数据表Id
  public updDate = ''; //修改日期
  public shareName = ''; //分享名称
  public memo = ''; //备注

  /**
   * 常量:"ConfigId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ConfigId(): string {
    return 'configId';
  } //配置Id

  /**
   * 常量:"ConfigTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ConfigTypeId(): string {
    return 'configTypeId';
  } //配置类型Id

  /**
   * 常量:"ConfigTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ConfigTypeName(): string {
    return 'configTypeName';
  } //配置类型名称

  /**
   * 常量:"ShareId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ShareId(): string {
    return 'shareId';
  } //分享Id

  /**
   * 常量:"DataTable"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataTable(): string {
    return 'dataTable';
  } //数据表

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改人

  /**
   * 常量:"DataTableId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataTableId(): string {
    return 'dataTableId';
  } //数据表Id

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"ShareName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ShareName(): string {
    return 'shareName';
  } //分享名称

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
