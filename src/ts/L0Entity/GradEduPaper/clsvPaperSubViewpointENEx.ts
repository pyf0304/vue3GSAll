/**
 * 类名:clsvPaperSubViewpointENEx
 * 表名:vPaperSubViewpoint(01120551)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 01:31:10
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * v子观点表(vPaperSubViewpoint)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';

export class clsvPaperSubViewpointENEx extends clsvPaperSubViewpointEN {
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
   **/
  constructor() {
    super();
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strValue;
    switch (strFldName) {
      case 'CtrlId':
        return '';
      case clsvPaperSubViewpointENEx.con_ClassificationId:
        return this.classificationId;
      case clsvPaperSubViewpointENEx.con_RelaUpdUser:
        return this.relaUpdUser;
      case clsvPaperSubViewpointENEx.con_RelaUpdDate:
        return this.relaUpdDate;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ClassificationId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ClassificationId(): string {
    return 'classificationId';
  } //分类Id

  /**
   * 常量:"RelaUpdUser"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RelaUpdUser(): string {
    return 'relaUpdUser';
  } //修改人

  /**
   * 常量:"RelaUpdDate"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RelaUpdDate(): string {
    return 'relaUpdDate';
  } //修改日期

  public classificationId = 0; //分类Id
  public relaUpdUser = ''; //修改人
  public relaUpdDate = ''; //修改日期

  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
   */
  public SetFldValue(strFldName: string, strValue: string) {
    const strThisFuncName = 'SetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsvPaperSubViewpointENEx.con_ClassificationId:
        this.classificationId = Number(strValue);
        break;
      case clsvPaperSubViewpointENEx.con_RelaUpdUser:
        this.relaUpdUser = strValue;
        break;
      case clsvPaperSubViewpointENEx.con_RelaUpdDate:
        this.relaUpdDate = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vPaperSubViewpoint]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
