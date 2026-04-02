/**
 * 类名:clsPaperAttachmentENEx
 * 表名:PaperAttachment(01120578)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:14
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
 * 论文附件(PaperAttachment)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';

export class clsPaperAttachmentENEx extends clsPaperAttachmentEN {
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
      case clsPaperAttachmentENEx.con_PaperTitleAuthor:
        return this.paperTitleAuthor;
      case clsPaperAttachmentENEx.con_EduClsName:
        return this.eduClsName;
      case clsPaperAttachmentENEx.con_UserName:
        return this.userName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"PaperTitleAuthor"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PaperTitleAuthor(): string {
    return 'paperTitleAuthor';
  } //论文标题作者

  /**
   * 常量:"EduClsName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_EduClsName(): string {
    return 'eduClsName';
  } //教学班名

  /**
   * 常量:"UserName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserName(): string {
    return 'userName';
  } //用户名

  public paperTitleAuthor = ''; //论文标题作者
  public eduClsName = ''; //教学班名
  public userName = ''; //用户名

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
      case clsPaperAttachmentENEx.con_PaperTitleAuthor:
        this.paperTitleAuthor = strValue;
        this.hmProperty['paperTitleAuthor'] = true;
        break;
      case clsPaperAttachmentENEx.con_EduClsName:
        this.eduClsName = strValue;
        this.hmProperty['eduClsName'] = true;
        break;
      case clsPaperAttachmentENEx.con_UserName:
        this.userName = strValue;
        this.hmProperty['userName'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PaperAttachment]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
