/**
 * 类名:clsMajorDirectionPaperRelaENEx
 * 表名:MajorDirectionPaperRela(01120554)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:47
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
 * 专业方向论文关系(MajorDirectionPaperRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsMajorDirectionPaperRelaEN } from '@/ts/L0Entity/GradEduPaper/clsMajorDirectionPaperRelaEN';

export class clsMajorDirectionPaperRelaENEx extends clsMajorDirectionPaperRelaEN {
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
      case clsMajorDirectionPaperRelaENEx.con_IdXzMajor:
        return this.idXzMajor;
      case clsMajorDirectionPaperRelaENEx.con_MajorName:
        return this.majorName;
      case clsMajorDirectionPaperRelaENEx.con_MajorDirectionName:
        return this.majorDirectionName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"IdXzMajor"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzMajor(): string {
    return 'idXzMajor';
  } //专业流水号

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

  public idXzMajor = ''; //专业流水号
  public majorName = ''; //专业名称
  public majorDirectionName = ''; //研究方向名

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
      case clsMajorDirectionPaperRelaENEx.con_IdXzMajor:
        this.idXzMajor = strValue;
        this.hmProperty['idXzMajor'] = true;
        break;
      case clsMajorDirectionPaperRelaENEx.con_MajorName:
        this.majorName = strValue;
        this.hmProperty['majorName'] = true;
        break;
      case clsMajorDirectionPaperRelaENEx.con_MajorDirectionName:
        this.majorDirectionName = strValue;
        this.hmProperty['majorDirectionName'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[MajorDirectionPaperRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
