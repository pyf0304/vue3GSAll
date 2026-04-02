/**
 * 类名:clsPaperENEx
 * 表名:Paper(01120535)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/26 17:11:44
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
 * 论文表(Paper)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';

export class clsPaperENEx extends clsPaperEN {
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
      case clsPaperENEx.con_IdCurrEduCls:
        return this.idCurrEduCls;
      case clsPaperENEx.con_PaperTypeName:
        return this.paperTypeName;
      case clsPaperENEx.con_IsSysVote:
        return this.isSysVote;
      case clsPaperENEx.con_IsCollection:
        return this.isCollection;
      case clsPaperENEx.con_IsHasAttention:
        return this.isHasAttention;
      case clsPaperENEx.con_UpdUserName:
        return this.updUserName;
      case clsPaperENEx.con_DdAuthor:
        return this.ddAuthor;
      case clsPaperENEx.con_DdPeriodical:
        return this.ddPeriodical;
      case clsPaperENEx.con_DdKeyword:
        return this.ddKeyword;
      case clsPaperENEx.con_DdLiteratureSources:
        return this.ddLiteratureSources;
      case clsPaperENEx.con_LiteratureTypeName:
        return this.literatureTypeName;
      case clsPaperENEx.con_PaperStatusName:
        return this.paperStatusName;
      case clsPaperENEx.con_MajorDirectionId:
        return this.majorDirectionId;
      case clsPaperENEx.con_StudyLevelName:
        return this.studyLevelName;
      case clsPaperENEx.con_GradeName:
        return this.gradeName;
      case clsPaperENEx.con_SectionNum:
        return this.sectionNum;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"IdCurrEduCls"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_IdCurrEduCls(): string {
    return 'idCurrEduCls';
  } //教学班流水号

  /**
   * 常量:"PaperTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PaperTypeName(): string {
    return 'paperTypeName';
  } //论文类型名

  /**
   * 常量:"IsSysVote"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_IsSysVote(): string {
    return 'isSysVote';
  } //是否投票

  /**
   * 常量:"IsCollection"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_IsCollection(): string {
    return 'isCollection';
  } //是否收藏

  /**
   * 常量:"IsHasAttention"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_IsHasAttention(): string {
    return 'isHasAttention';
  } //是否收藏

  /**
   * 常量:"UpdUserName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_UpdUserName(): string {
    return 'updUserName';
  } //UpdUserName

  /**
   * 常量:"DdAuthor"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DdAuthor(): string {
    return 'ddAuthor';
  } //作者

  /**
   * 常量:"DdPeriodical"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DdPeriodical(): string {
    return 'ddPeriodical';
  } //期刊

  /**
   * 常量:"DdKeyword"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DdKeyword(): string {
    return 'ddKeyword';
  } //关键字

  /**
   * 常量:"DdLiteratureSources"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DdLiteratureSources(): string {
    return 'ddLiteratureSources';
  } //文献来源

  /**
   * 常量:"LiteratureTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_LiteratureTypeName(): string {
    return 'literatureTypeName';
  } //文献类型名

  /**
   * 常量:"PaperStatusName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PaperStatusName(): string {
    return 'paperStatusName';
  } //论文状态名

  /**
   * 常量:"MajorDirectionId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_MajorDirectionId(): string {
    return 'majorDirectionId';
  } //研究方向Id

  /**
   * 常量:"StudyLevelName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_StudyLevelName(): string {
    return 'studyLevelName';
  } //学段名称

  /**
   * 常量:"GradeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_GradeName(): string {
    return 'gradeName';
  } //年级名称

  /**
   * 常量:"SectionNum"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_SectionNum(): string {
    return 'sectionNum';
  } //节数

  public idCurrEduCls = ''; //教学班流水号
  public paperTypeName = ''; //论文类型名
  public isSysVote = false; //是否投票
  public isCollection = false; //是否收藏
  public isHasAttention = false; //是否收藏
  public updUserName = ''; //UpdUserName
  public ddAuthor = ''; //作者
  public ddPeriodical = ''; //期刊
  public ddKeyword = ''; //关键字
  public ddLiteratureSources = ''; //文献来源
  public literatureTypeName = ''; //文献类型名
  public paperStatusName = ''; //论文状态名
  public majorDirectionId = ''; //研究方向Id
  public studyLevelName = ''; //学段名称
  public gradeName = ''; //年级名称
  public sectionNum = 0; //节数

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
      case clsPaperENEx.con_IdCurrEduCls:
        this.idCurrEduCls = strValue;
        this.hmProperty['idCurrEduCls'] = true;
        break;
      case clsPaperENEx.con_PaperTypeName:
        this.paperTypeName = strValue;
        this.hmProperty['paperTypeName'] = true;
        break;
      case clsPaperENEx.con_IsSysVote:
        this.isSysVote = Boolean(strValue);
        this.hmProperty['isSysVote'] = true;
        break;
      case clsPaperENEx.con_IsCollection:
        this.isCollection = Boolean(strValue);
        this.hmProperty['isCollection'] = true;
        break;
      case clsPaperENEx.con_IsHasAttention:
        this.isHasAttention = Boolean(strValue);
        this.hmProperty['isHasAttention'] = true;
        break;
      case clsPaperENEx.con_UpdUserName:
        this.updUserName = strValue;
        this.hmProperty['updUserName'] = true;
        break;
      case clsPaperENEx.con_DdAuthor:
        this.ddAuthor = strValue;
        this.hmProperty['ddAuthor'] = true;
        break;
      case clsPaperENEx.con_DdPeriodical:
        this.ddPeriodical = strValue;
        this.hmProperty['ddPeriodical'] = true;
        break;
      case clsPaperENEx.con_DdKeyword:
        this.ddKeyword = strValue;
        this.hmProperty['ddKeyword'] = true;
        break;
      case clsPaperENEx.con_DdLiteratureSources:
        this.ddLiteratureSources = strValue;
        this.hmProperty['ddLiteratureSources'] = true;
        break;
      case clsPaperENEx.con_LiteratureTypeName:
        this.literatureTypeName = strValue;
        this.hmProperty['literatureTypeName'] = true;
        break;
      case clsPaperENEx.con_PaperStatusName:
        this.paperStatusName = strValue;
        this.hmProperty['paperStatusName'] = true;
        break;
      case clsPaperENEx.con_MajorDirectionId:
        this.majorDirectionId = strValue;
        this.hmProperty['majorDirectionId'] = true;
        break;
      case clsPaperENEx.con_StudyLevelName:
        this.studyLevelName = strValue;
        this.hmProperty['studyLevelName'] = true;
        break;
      case clsPaperENEx.con_GradeName:
        this.gradeName = strValue;
        this.hmProperty['gradeName'] = true;
        break;
      case clsPaperENEx.con_SectionNum:
        this.sectionNum = Number(strValue);
        this.hmProperty['sectionNum'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[Paper]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
