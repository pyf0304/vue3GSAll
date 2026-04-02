/**
 * 类名:clsPaperSubViewpointLikeLogENEx
 * 表名:PaperSubViewpointLikeLog(01120560)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/29 23:51:22
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
 * 子观点点赞表(PaperSubViewpointLikeLog)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsPaperSubViewpointLikeLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubViewpointLikeLogEN';

export class clsPaperSubViewpointLikeLogENEx extends clsPaperSubViewpointLikeLogEN {
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
      case clsPaperSubViewpointLikeLogENEx.con_ExplainContent:
        return this.explainContent;
      case clsPaperSubViewpointLikeLogENEx.con_RWTitle:
        return this.rWTitle;
      case clsPaperSubViewpointLikeLogENEx.con_SubViewpointContent:
        return this.subViewpointContent;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ExplainContent"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ExplainContent(): string {
    return 'explainContent';
  } //说明内容

  /**
   * 常量:"RWTitle"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RWTitle(): string {
    return 'rWTitle';
  } //读写标题

  /**
   * 常量:"SubViewpointContent"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SubViewpointContent(): string {
    return 'subViewpointContent';
  } //详情内容

  public explainContent = ''; //说明内容
  public rWTitle = ''; //读写标题
  public subViewpointContent = ''; //详情内容

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
      case clsPaperSubViewpointLikeLogENEx.con_ExplainContent:
        this.explainContent = strValue;
        this.hmProperty['explainContent'] = true;
        break;
      case clsPaperSubViewpointLikeLogENEx.con_RWTitle:
        this.rWTitle = strValue;
        this.hmProperty['rWTitle'] = true;
        break;
      case clsPaperSubViewpointLikeLogENEx.con_SubViewpointContent:
        this.subViewpointContent = strValue;
        this.hmProperty['subViewpointContent'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PaperSubViewpointLikeLog]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
