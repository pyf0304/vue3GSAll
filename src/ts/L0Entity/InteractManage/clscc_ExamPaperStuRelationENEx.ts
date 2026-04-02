
 /**
 * 类名:clscc_ExamPaperStuRelationENEx
 * 表名:cc_ExamPaperStuRelation(01120235)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/11 17:17:49
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
 /**
 * 考卷与学生关系(cc_ExamPaperStuRelation)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clscc_ExamPaperStuRelationEN } from "@/ts/L0Entity/InteractManage/clscc_ExamPaperStuRelationEN";

export class  clscc_ExamPaperStuRelationENEx extends clscc_ExamPaperStuRelationEN
{
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
 **/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strValue;
switch (strFldName)
{
case "CtrlId":
return "";
case clscc_ExamPaperStuRelationENEx.con_CourseId:
return this.courseId;
case clscc_ExamPaperStuRelationENEx.con_ExamPaperName:
return this.examPaperName;
case clscc_ExamPaperStuRelationENEx.con_EduClsName:
return this.eduClsName;
case clscc_ExamPaperStuRelationENEx.con_StuName:
return this.stuName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"CourseId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"ExamPaperName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ExamPaperName(): string {return "examPaperName";}    //考卷名称

 /**
 * 常量:"EduClsName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"StuName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_StuName(): string {return "stuName";}    //姓名

public courseId = "";    //课程Id
public examPaperName = "";    //考卷名称
public eduClsName = "";    //教学班名
public stuName = "";    //姓名

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clscc_ExamPaperStuRelationENEx.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clscc_ExamPaperStuRelationENEx.con_ExamPaperName:
this.examPaperName = strValue;
    this.hmProperty["examPaperName"] = true;
break;
case clscc_ExamPaperStuRelationENEx.con_EduClsName:
this.eduClsName = strValue;
    this.hmProperty["eduClsName"] = true;
break;
case clscc_ExamPaperStuRelationENEx.con_StuName:
this.stuName = strValue;
    this.hmProperty["stuName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_ExamPaperStuRelation]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
}