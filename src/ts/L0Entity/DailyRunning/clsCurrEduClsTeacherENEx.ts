/**
 * 类名:clsCurrEduClsTeacherENEx
 * 表名:CurrEduClsTeacher(01120124)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/10 11:54:53
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * 当前教学班教师(CurrEduClsTeacher)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherEN';

export class clsCurrEduClsTeacherENEx extends clsCurrEduClsTeacherEN {
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
      case clsCurrEduClsTeacherENEx.con_CollegeName:
        return this.collegeName;
      case clsCurrEduClsTeacherENEx.con_TeacherId:
        return this.teacherId;
      case clsCurrEduClsTeacherENEx.con_CourseId:
        return this.courseId;
      case clsCurrEduClsTeacherENEx.con_TeacherName:
        return this.teacherName;
      case clsCurrEduClsTeacherENEx.con_EduClsName:
        return this.eduClsName;
      case clsCurrEduClsTeacherENEx.con_CourseName:
        return this.courseName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"CollegeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CollegeName(): string {
    return 'collegeName';
  } //学院名称

  /**
   * 常量:"TeacherId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TeacherId(): string {
    return 'teacherId';
  } //教师工号

  /**
   * 常量:"CourseId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CourseId(): string {
    return 'courseId';
  } //课程Id

  /**
   * 常量:"TeacherName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TeacherName(): string {
    return 'teacherName';
  } //教师姓名

  /**
   * 常量:"EduClsName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_EduClsName(): string {
    return 'eduClsName';
  } //教学班名

  /**
   * 常量:"CourseName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CourseName(): string {
    return 'courseName';
  } //课程名称

  public collegeName = ''; //学院名称
  public teacherId = ''; //教师工号
  public courseId = ''; //课程Id
  public teacherName = ''; //教师姓名
  public eduClsName = ''; //教学班名
  public courseName = ''; //课程名称

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
      case clsCurrEduClsTeacherENEx.con_CollegeName:
        this.collegeName = strValue;
        this.hmProperty['collegeName'] = true;
        break;
      case clsCurrEduClsTeacherENEx.con_TeacherId:
        this.teacherId = strValue;
        this.hmProperty['teacherId'] = true;
        break;
      case clsCurrEduClsTeacherENEx.con_CourseId:
        this.courseId = strValue;
        this.hmProperty['courseId'] = true;
        break;
      case clsCurrEduClsTeacherENEx.con_TeacherName:
        this.teacherName = strValue;
        this.hmProperty['teacherName'] = true;
        break;
      case clsCurrEduClsTeacherENEx.con_EduClsName:
        this.eduClsName = strValue;
        this.hmProperty['eduClsName'] = true;
        break;
      case clsCurrEduClsTeacherENEx.con_CourseName:
        this.courseName = strValue;
        this.hmProperty['courseName'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CurrEduClsTeacher]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
