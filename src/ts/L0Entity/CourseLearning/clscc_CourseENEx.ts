/**
 * 类名:clscc_CourseENEx
 * 表名:cc_Course(01120056)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:44:22
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * 课程(cc_Course)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';

export class clscc_CourseENEx extends clscc_CourseEN {
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
      case clscc_CourseENEx.con_SchoolName:
        return this.schoolName;
      case clscc_CourseENEx.con_MajorName:
        return this.majorName;
      case clscc_CourseENEx.con_CollegeName:
        return this.collegeName;
      case clscc_CourseENEx.con_ExcellentTypeName:
        return this.excellentTypeName;
      case clscc_CourseENEx.con_CourseTypeName:
        return this.courseTypeName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"SchoolName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SchoolName(): string {
    return 'schoolName';
  } //学校名称

  /**
   * 常量:"MajorName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MajorName(): string {
    return 'majorName';
  } //专业名称

  /**
   * 常量:"CollegeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CollegeName(): string {
    return 'collegeName';
  } //学院名称

  /**
   * 常量:"ExcellentTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ExcellentTypeName(): string {
    return 'excellentTypeName';
  } //精品课程类型名称

  /**
   * 常量:"CourseTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CourseTypeName(): string {
    return 'courseTypeName';
  } //课程类型名称

  public schoolName = ''; //学校名称
  public majorName = ''; //专业名称
  public collegeName = ''; //学院名称
  public excellentTypeName = ''; //精品课程类型名称
  public courseTypeName = ''; //课程类型名称

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
      case clscc_CourseENEx.con_SchoolName:
        this.schoolName = strValue;
        this.hmProperty['schoolName'] = true;
        break;
      case clscc_CourseENEx.con_MajorName:
        this.majorName = strValue;
        this.hmProperty['majorName'] = true;
        break;
      case clscc_CourseENEx.con_CollegeName:
        this.collegeName = strValue;
        this.hmProperty['collegeName'] = true;
        break;
      case clscc_CourseENEx.con_ExcellentTypeName:
        this.excellentTypeName = strValue;
        this.hmProperty['excellentTypeName'] = true;
        break;
      case clscc_CourseENEx.con_CourseTypeName:
        this.courseTypeName = strValue;
        this.hmProperty['courseTypeName'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[cc_Course]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
