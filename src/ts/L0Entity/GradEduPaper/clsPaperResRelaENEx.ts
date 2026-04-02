/**
 * 类名:clsPaperResRelaENEx
 * 表名:PaperResRela(01120964)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 14:51:21
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
 * 论文资源关系(PaperResRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsPaperResRelaEN } from '@/ts/L0Entity/GradEduPaper/clsPaperResRelaEN';

export class clsPaperResRelaENEx extends clsPaperResRelaEN {
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
      case clsPaperResRelaENEx.con_PaperSubResName:
        return this.paperSubResName;
      case clsPaperResRelaENEx.con_PaperTitle:
        return this.paperTitle;
      case clsPaperResRelaENEx.con_Author:
        return this.author;
      case clsPaperResRelaENEx.con_UserName:
        return this.userName;
      case clsPaperResRelaENEx.con_PaperSubResTypeName:
        return this.paperSubResTypeName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"PaperSubResName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PaperSubResName(): string {
    return 'paperSubResName';
  } //子资源名称

  /**
   * 常量:"PaperTitle"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PaperTitle(): string {
    return 'paperTitle';
  } //论文标题

  /**
   * 常量:"Author"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_Author(): string {
    return 'author';
  } //作者

  /**
   * 常量:"UserName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_UserName(): string {
    return 'userName';
  } //用户名

  /**
   * 常量:"PaperSubResTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PaperSubResTypeName(): string {
    return 'paperSubResTypeName';
  } //论文子资源类型名

  public paperSubResName = ''; //子资源名称
  public paperTitle = ''; //论文标题
  public author = ''; //作者
  public userName = ''; //用户名
  public paperSubResTypeName = ''; //论文子资源类型名

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
      case clsPaperResRelaENEx.con_PaperSubResName:
        this.paperSubResName = strValue;
        this.hmProperty['paperSubResName'] = true;
        break;
      case clsPaperResRelaENEx.con_PaperTitle:
        this.paperTitle = strValue;
        this.hmProperty['paperTitle'] = true;
        break;
      case clsPaperResRelaENEx.con_Author:
        this.author = strValue;
        this.hmProperty['author'] = true;
        break;
      case clsPaperResRelaENEx.con_UserName:
        this.userName = strValue;
        this.hmProperty['userName'] = true;
        break;
      case clsPaperResRelaENEx.con_PaperSubResTypeName:
        this.paperSubResTypeName = strValue;
        this.hmProperty['paperSubResTypeName'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PaperResRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
