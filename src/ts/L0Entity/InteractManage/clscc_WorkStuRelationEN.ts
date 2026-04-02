
 /**
 * 类名:clscc_WorkStuRelationEN
 * 表名:cc_WorkStuRelation(01120145)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:43:56
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 作业与学生关系(cc_WorkStuRelation)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clscc_WorkStuRelationEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "cc_WorkStuRelation"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdWorkStuRelation"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 41;
public static AttributeName = ["idWorkStuRelation", "idCurrEduCls", "questionId", "scores", "specifyCompletionDate", "idStudentInfo", "answerModeId", "answerOptionId", "answerMultiOptions", "answerBoolResult", "stuAnswerText", "isPublish", "isLook", "isSave", "isSubmit", "applySendBackDate", "isApplySendBack", "realFinishDate", "operateTime", "score", "comment", "isMarking", "markerId", "markDate", "isSendBack", "isInErrorQuestion", "workTypeId", "answerIP", "answerDate", "answerTime", "courseExamPaperId", "isRight", "isAccessKnowledge", "isNotProcessTimeout", "schoolYear", "schoolTerm", "errMsg", "courseId", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
*/
 constructor()
 {
 super();
 }

/**
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mlngIdWorkStuRelation = 0;    //流水号
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrQuestionId = "";    //题目Id
private mdblScores = 0;    //分值
private mstrSpecifyCompletionDate = "";    //指定完成日期
private mstrIdStudentInfo = "";    //学生流水号
private mstrAnswerModeId = "";    //答案模式Id
private mstrAnswerOptionId = "";    //回答选项Id
private mstrAnswerMultiOptions = "";    //多选项答案
private mbolAnswerBoolResult = false;    //答案布尔结果
private mstrStuAnswerText = "";    //学生回答文本
private mbolIsPublish = false;    //是否发布
private mbolIsLook = false;    //是否查看
private mbolIsSave = false;    //是否保存
private mbolIsSubmit = false;    //是否提交
private mstrApplySendBackDate = "";    //申请退回日期
private mbolIsApplySendBack = false;    //是否申请退回
private mstrRealFinishDate = "";    //实际完成日期
private mstrOperateTime = "";    //操作时间
private mdblScore = 0;    //得分
private mstrComment = "";    //批注
private mbolIsMarking = false;    //是否批阅
private mstrMarkerId = "";    //打分者
private mstrMarkDate = "";    //打分日期
private mbolIsSendBack = false;    //是否退回
private mbolIsInErrorQuestion = false;    //是否进入错题
private mstrWorkTypeId = "";    //作业类型Id
private mstrAnswerIP = "";    //回答IP
private mstrAnswerDate = "";    //回答日期
private mstrAnswerTime = "";    //回答时间
private mstrCourseExamPaperId = "";    //考卷流水号
private mbolIsRight = false;    //是否正确
private mbolIsAccessKnowledge = false;    //是否处理知识点
private mbolIsNotProcessTimeout = false;    //是否不处理超时
private mstrSchoolYear = "";    //学年
private mstrSchoolTerm = "";    //学期
private mstrErrMsg = "";    //错误信息
private mstrCourseId = "";    //课程Id
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注

/**
 * 流水号(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdWorkStuRelation (value: number)
{
if (value  != undefined)
{
 this.idWorkStuRelation = value;
    this.hmProperty["idWorkStuRelation"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学班流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCurrEduCls (value: string)
{
if (value  != undefined)
{
 this.idCurrEduCls = value;
    this.hmProperty["idCurrEduCls"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionId (value: string)
{
if (value  != undefined)
{
 this.questionId = value;
    this.hmProperty["questionId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 分值(说明:;字段类型:decimal;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetScores (value: number)
{
if (value  != undefined)
{
 this.scores = value;
    this.hmProperty["scores"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 指定完成日期(说明:;字段类型:varchar;字段长度:14;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSpecifyCompletionDate (value: string)
{
if (value  != undefined)
{
 this.specifyCompletionDate = value;
    this.hmProperty["specifyCompletionDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学生流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdStudentInfo (value: string)
{
if (value  != undefined)
{
 this.idStudentInfo = value;
    this.hmProperty["idStudentInfo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 答案模式Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerModeId (value: string)
{
if (value  != undefined)
{
 this.answerModeId = value;
    this.hmProperty["answerModeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回答选项Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerOptionId (value: string)
{
if (value  != undefined)
{
 this.answerOptionId = value;
    this.hmProperty["answerOptionId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 多选项答案(说明:;字段类型:varchar;字段长度:300;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerMultiOptions (value: string)
{
if (value  != undefined)
{
 this.answerMultiOptions = value;
    this.hmProperty["answerMultiOptions"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 答案布尔结果(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerBoolResult (value: boolean)
{
if (value  != undefined)
{
 this.answerBoolResult = value;
    this.hmProperty["answerBoolResult"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学生回答文本(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStuAnswerText (value: string)
{
if (value  != undefined)
{
 this.stuAnswerText = value;
    this.hmProperty["stuAnswerText"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否发布(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsPublish (value: boolean)
{
if (value  != undefined)
{
 this.isPublish = value;
    this.hmProperty["isPublish"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否查看(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsLook (value: boolean)
{
if (value  != undefined)
{
 this.isLook = value;
    this.hmProperty["isLook"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否保存(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSave (value: boolean)
{
if (value  != undefined)
{
 this.isSave = value;
    this.hmProperty["isSave"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否提交(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSubmit (value: boolean)
{
if (value  != undefined)
{
 this.isSubmit = value;
    this.hmProperty["isSubmit"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 申请退回日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetApplySendBackDate (value: string)
{
if (value  != undefined)
{
 this.applySendBackDate = value;
    this.hmProperty["applySendBackDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否申请退回(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsApplySendBack (value: boolean)
{
if (value  != undefined)
{
 this.isApplySendBack = value;
    this.hmProperty["isApplySendBack"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 实际完成日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRealFinishDate (value: string)
{
if (value  != undefined)
{
 this.realFinishDate = value;
    this.hmProperty["realFinishDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 操作时间(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOperateTime (value: string)
{
if (value  != undefined)
{
 this.operateTime = value;
    this.hmProperty["operateTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 得分(说明:;字段类型:decimal;字段长度:6;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetScore (value: number)
{
if (value  != undefined)
{
 this.score = value;
    this.hmProperty["score"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 批注(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetComment (value: string)
{
if (value  != undefined)
{
 this.comment = value;
    this.hmProperty["comment"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否批阅(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsMarking (value: boolean)
{
if (value  != undefined)
{
 this.isMarking = value;
    this.hmProperty["isMarking"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 打分者(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMarkerId (value: string)
{
if (value  != undefined)
{
 this.markerId = value;
    this.hmProperty["markerId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 打分日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMarkDate (value: string)
{
if (value  != undefined)
{
 this.markDate = value;
    this.hmProperty["markDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否退回(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSendBack (value: boolean)
{
if (value  != undefined)
{
 this.isSendBack = value;
    this.hmProperty["isSendBack"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否进入错题(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsInErrorQuestion (value: boolean)
{
if (value  != undefined)
{
 this.isInErrorQuestion = value;
    this.hmProperty["isInErrorQuestion"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 作业类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWorkTypeId (value: string)
{
if (value  != undefined)
{
 this.workTypeId = value;
    this.hmProperty["workTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回答IP(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerIP (value: string)
{
if (value  != undefined)
{
 this.answerIP = value;
    this.hmProperty["answerIP"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回答日期(说明:;字段类型:varchar;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerDate (value: string)
{
if (value  != undefined)
{
 this.answerDate = value;
    this.hmProperty["answerDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回答时间(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerTime (value: string)
{
if (value  != undefined)
{
 this.answerTime = value;
    this.hmProperty["answerTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 考卷流水号(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseExamPaperId (value: string)
{
if (value  != undefined)
{
 this.courseExamPaperId = value;
    this.hmProperty["courseExamPaperId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否正确(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsRight (value: boolean)
{
if (value  != undefined)
{
 this.isRight = value;
    this.hmProperty["isRight"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否处理知识点(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsAccessKnowledge (value: boolean)
{
if (value  != undefined)
{
 this.isAccessKnowledge = value;
    this.hmProperty["isAccessKnowledge"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否不处理超时(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsNotProcessTimeout (value: boolean)
{
if (value  != undefined)
{
 this.isNotProcessTimeout = value;
    this.hmProperty["isNotProcessTimeout"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学年(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchoolYear (value: string)
{
if (value  != undefined)
{
 this.schoolYear = value;
    this.hmProperty["schoolYear"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学期(说明:;字段类型:char;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchoolTerm (value: string)
{
if (value  != undefined)
{
 this.schoolTerm = value;
    this.hmProperty["schoolTerm"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 错误信息(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetErrMsg (value: string)
{
if (value  != undefined)
{
 this.errMsg = value;
    this.hmProperty["errMsg"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseId (value: string)
{
if (value  != undefined)
{
 this.courseId = value;
    this.hmProperty["courseId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdDate (value: string)
{
if (value  != undefined)
{
 this.updDate = value;
    this.hmProperty["updDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUserId (value: string)
{
if (value  != undefined)
{
 this.updUserId = value;
    this.hmProperty["updUserId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}


/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clscc_WorkStuRelationEN.con_IdWorkStuRelation:
return this.idWorkStuRelation;
case clscc_WorkStuRelationEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clscc_WorkStuRelationEN.con_QuestionId:
return this.questionId;
case clscc_WorkStuRelationEN.con_Scores:
return this.scores;
case clscc_WorkStuRelationEN.con_SpecifyCompletionDate:
return this.specifyCompletionDate;
case clscc_WorkStuRelationEN.con_IdStudentInfo:
return this.idStudentInfo;
case clscc_WorkStuRelationEN.con_AnswerModeId:
return this.answerModeId;
case clscc_WorkStuRelationEN.con_AnswerOptionId:
return this.answerOptionId;
case clscc_WorkStuRelationEN.con_AnswerMultiOptions:
return this.answerMultiOptions;
case clscc_WorkStuRelationEN.con_AnswerBoolResult:
return this.answerBoolResult;
case clscc_WorkStuRelationEN.con_StuAnswerText:
return this.stuAnswerText;
case clscc_WorkStuRelationEN.con_IsPublish:
return this.isPublish;
case clscc_WorkStuRelationEN.con_IsLook:
return this.isLook;
case clscc_WorkStuRelationEN.con_IsSave:
return this.isSave;
case clscc_WorkStuRelationEN.con_IsSubmit:
return this.isSubmit;
case clscc_WorkStuRelationEN.con_ApplySendBackDate:
return this.applySendBackDate;
case clscc_WorkStuRelationEN.con_IsApplySendBack:
return this.isApplySendBack;
case clscc_WorkStuRelationEN.con_RealFinishDate:
return this.realFinishDate;
case clscc_WorkStuRelationEN.con_OperateTime:
return this.operateTime;
case clscc_WorkStuRelationEN.con_Score:
return this.score;
case clscc_WorkStuRelationEN.con_Comment:
return this.comment;
case clscc_WorkStuRelationEN.con_IsMarking:
return this.isMarking;
case clscc_WorkStuRelationEN.con_MarkerId:
return this.markerId;
case clscc_WorkStuRelationEN.con_MarkDate:
return this.markDate;
case clscc_WorkStuRelationEN.con_IsSendBack:
return this.isSendBack;
case clscc_WorkStuRelationEN.con_IsInErrorQuestion:
return this.isInErrorQuestion;
case clscc_WorkStuRelationEN.con_WorkTypeId:
return this.workTypeId;
case clscc_WorkStuRelationEN.con_AnswerIP:
return this.answerIP;
case clscc_WorkStuRelationEN.con_AnswerDate:
return this.answerDate;
case clscc_WorkStuRelationEN.con_AnswerTime:
return this.answerTime;
case clscc_WorkStuRelationEN.con_CourseExamPaperId:
return this.courseExamPaperId;
case clscc_WorkStuRelationEN.con_IsRight:
return this.isRight;
case clscc_WorkStuRelationEN.con_IsAccessKnowledge:
return this.isAccessKnowledge;
case clscc_WorkStuRelationEN.con_IsNotProcessTimeout:
return this.isNotProcessTimeout;
case clscc_WorkStuRelationEN.con_SchoolYear:
return this.schoolYear;
case clscc_WorkStuRelationEN.con_SchoolTerm:
return this.schoolTerm;
case clscc_WorkStuRelationEN.con_ErrMsg:
return this.errMsg;
case clscc_WorkStuRelationEN.con_CourseId:
return this.courseId;
case clscc_WorkStuRelationEN.con_UpdDate:
return this.updDate;
case clscc_WorkStuRelationEN.con_UpdUserId:
return this.updUserId;
case clscc_WorkStuRelationEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_WorkStuRelation]中不存在!`;
console.error(strMsg);
return "";
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
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
case clscc_WorkStuRelationEN.con_IdWorkStuRelation:
this.idWorkStuRelation = Number(strValue);
    this.hmProperty["idWorkStuRelation"] = true;
break;
case clscc_WorkStuRelationEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clscc_WorkStuRelationEN.con_QuestionId:
this.questionId = strValue;
    this.hmProperty["questionId"] = true;
break;
case clscc_WorkStuRelationEN.con_Scores:
this.scores = Number(strValue);
    this.hmProperty["scores"] = true;
break;
case clscc_WorkStuRelationEN.con_SpecifyCompletionDate:
this.specifyCompletionDate = strValue;
    this.hmProperty["specifyCompletionDate"] = true;
break;
case clscc_WorkStuRelationEN.con_IdStudentInfo:
this.idStudentInfo = strValue;
    this.hmProperty["idStudentInfo"] = true;
break;
case clscc_WorkStuRelationEN.con_AnswerModeId:
this.answerModeId = strValue;
    this.hmProperty["answerModeId"] = true;
break;
case clscc_WorkStuRelationEN.con_AnswerOptionId:
this.answerOptionId = strValue;
    this.hmProperty["answerOptionId"] = true;
break;
case clscc_WorkStuRelationEN.con_AnswerMultiOptions:
this.answerMultiOptions = strValue;
    this.hmProperty["answerMultiOptions"] = true;
break;
case clscc_WorkStuRelationEN.con_AnswerBoolResult:
this.answerBoolResult = Boolean(strValue);
    this.hmProperty["answerBoolResult"] = true;
break;
case clscc_WorkStuRelationEN.con_StuAnswerText:
this.stuAnswerText = strValue;
    this.hmProperty["stuAnswerText"] = true;
break;
case clscc_WorkStuRelationEN.con_IsPublish:
this.isPublish = Boolean(strValue);
    this.hmProperty["isPublish"] = true;
break;
case clscc_WorkStuRelationEN.con_IsLook:
this.isLook = Boolean(strValue);
    this.hmProperty["isLook"] = true;
break;
case clscc_WorkStuRelationEN.con_IsSave:
this.isSave = Boolean(strValue);
    this.hmProperty["isSave"] = true;
break;
case clscc_WorkStuRelationEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
    this.hmProperty["isSubmit"] = true;
break;
case clscc_WorkStuRelationEN.con_ApplySendBackDate:
this.applySendBackDate = strValue;
    this.hmProperty["applySendBackDate"] = true;
break;
case clscc_WorkStuRelationEN.con_IsApplySendBack:
this.isApplySendBack = Boolean(strValue);
    this.hmProperty["isApplySendBack"] = true;
break;
case clscc_WorkStuRelationEN.con_RealFinishDate:
this.realFinishDate = strValue;
    this.hmProperty["realFinishDate"] = true;
break;
case clscc_WorkStuRelationEN.con_OperateTime:
this.operateTime = strValue;
    this.hmProperty["operateTime"] = true;
break;
case clscc_WorkStuRelationEN.con_Score:
this.score = Number(strValue);
    this.hmProperty["score"] = true;
break;
case clscc_WorkStuRelationEN.con_Comment:
this.comment = strValue;
    this.hmProperty["comment"] = true;
break;
case clscc_WorkStuRelationEN.con_IsMarking:
this.isMarking = Boolean(strValue);
    this.hmProperty["isMarking"] = true;
break;
case clscc_WorkStuRelationEN.con_MarkerId:
this.markerId = strValue;
    this.hmProperty["markerId"] = true;
break;
case clscc_WorkStuRelationEN.con_MarkDate:
this.markDate = strValue;
    this.hmProperty["markDate"] = true;
break;
case clscc_WorkStuRelationEN.con_IsSendBack:
this.isSendBack = Boolean(strValue);
    this.hmProperty["isSendBack"] = true;
break;
case clscc_WorkStuRelationEN.con_IsInErrorQuestion:
this.isInErrorQuestion = Boolean(strValue);
    this.hmProperty["isInErrorQuestion"] = true;
break;
case clscc_WorkStuRelationEN.con_WorkTypeId:
this.workTypeId = strValue;
    this.hmProperty["workTypeId"] = true;
break;
case clscc_WorkStuRelationEN.con_AnswerIP:
this.answerIP = strValue;
    this.hmProperty["answerIP"] = true;
break;
case clscc_WorkStuRelationEN.con_AnswerDate:
this.answerDate = strValue;
    this.hmProperty["answerDate"] = true;
break;
case clscc_WorkStuRelationEN.con_AnswerTime:
this.answerTime = strValue;
    this.hmProperty["answerTime"] = true;
break;
case clscc_WorkStuRelationEN.con_CourseExamPaperId:
this.courseExamPaperId = strValue;
    this.hmProperty["courseExamPaperId"] = true;
break;
case clscc_WorkStuRelationEN.con_IsRight:
this.isRight = Boolean(strValue);
    this.hmProperty["isRight"] = true;
break;
case clscc_WorkStuRelationEN.con_IsAccessKnowledge:
this.isAccessKnowledge = Boolean(strValue);
    this.hmProperty["isAccessKnowledge"] = true;
break;
case clscc_WorkStuRelationEN.con_IsNotProcessTimeout:
this.isNotProcessTimeout = Boolean(strValue);
    this.hmProperty["isNotProcessTimeout"] = true;
break;
case clscc_WorkStuRelationEN.con_SchoolYear:
this.schoolYear = strValue;
    this.hmProperty["schoolYear"] = true;
break;
case clscc_WorkStuRelationEN.con_SchoolTerm:
this.schoolTerm = strValue;
    this.hmProperty["schoolTerm"] = true;
break;
case clscc_WorkStuRelationEN.con_ErrMsg:
this.errMsg = strValue;
    this.hmProperty["errMsg"] = true;
break;
case clscc_WorkStuRelationEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clscc_WorkStuRelationEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clscc_WorkStuRelationEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clscc_WorkStuRelationEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_WorkStuRelation]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idWorkStuRelation = 0;    //流水号
public idCurrEduCls = "";    //教学班流水号
public questionId = "";    //题目Id
public scores = 0;    //分值
public specifyCompletionDate = "";    //指定完成日期
public idStudentInfo = "";    //学生流水号
public answerModeId = "";    //答案模式Id
public answerOptionId = "";    //回答选项Id
public answerMultiOptions = "";    //多选项答案
public answerBoolResult = false;    //答案布尔结果
public stuAnswerText = "";    //学生回答文本
public isPublish = false;    //是否发布
public isLook = false;    //是否查看
public isSave = false;    //是否保存
public isSubmit = false;    //是否提交
public applySendBackDate = "";    //申请退回日期
public isApplySendBack = false;    //是否申请退回
public realFinishDate = "";    //实际完成日期
public operateTime = "";    //操作时间
public score = 0;    //得分
public comment = "";    //批注
public isMarking = false;    //是否批阅
public markerId = "";    //打分者
public markDate = "";    //打分日期
public isSendBack = false;    //是否退回
public isInErrorQuestion = false;    //是否进入错题
public workTypeId = "";    //作业类型Id
public answerIP = "";    //回答IP
public answerDate = "";    //回答日期
public answerTime = "";    //回答时间
public courseExamPaperId = "";    //考卷流水号
public isRight = false;    //是否正确
public isAccessKnowledge = false;    //是否处理知识点
public isNotProcessTimeout = false;    //是否不处理超时
public schoolYear = "";    //学年
public schoolTerm = "";    //学期
public errMsg = "";    //错误信息
public courseId = "";    //课程Id
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注


 /**
 * 常量:"IdWorkStuRelation"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdWorkStuRelation(): string {return "idWorkStuRelation";}    //流水号

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"Scores"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Scores(): string {return "scores";}    //分值

 /**
 * 常量:"SpecifyCompletionDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SpecifyCompletionDate(): string {return "specifyCompletionDate";}    //指定完成日期

 /**
 * 常量:"IdStudentInfo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStudentInfo(): string {return "idStudentInfo";}    //学生流水号

 /**
 * 常量:"AnswerModeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerModeId(): string {return "answerModeId";}    //答案模式Id

 /**
 * 常量:"AnswerOptionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerOptionId(): string {return "answerOptionId";}    //回答选项Id

 /**
 * 常量:"AnswerMultiOptions"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerMultiOptions(): string {return "answerMultiOptions";}    //多选项答案

 /**
 * 常量:"AnswerBoolResult"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerBoolResult(): string {return "answerBoolResult";}    //答案布尔结果

 /**
 * 常量:"StuAnswerText"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuAnswerText(): string {return "stuAnswerText";}    //学生回答文本

 /**
 * 常量:"IsPublish"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsPublish(): string {return "isPublish";}    //是否发布

 /**
 * 常量:"IsLook"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsLook(): string {return "isLook";}    //是否查看

 /**
 * 常量:"IsSave"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSave(): string {return "isSave";}    //是否保存

 /**
 * 常量:"IsSubmit"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"ApplySendBackDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ApplySendBackDate(): string {return "applySendBackDate";}    //申请退回日期

 /**
 * 常量:"IsApplySendBack"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsApplySendBack(): string {return "isApplySendBack";}    //是否申请退回

 /**
 * 常量:"RealFinishDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RealFinishDate(): string {return "realFinishDate";}    //实际完成日期

 /**
 * 常量:"OperateTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OperateTime(): string {return "operateTime";}    //操作时间

 /**
 * 常量:"Score"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //得分

 /**
 * 常量:"Comment"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Comment(): string {return "comment";}    //批注

 /**
 * 常量:"IsMarking"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsMarking(): string {return "isMarking";}    //是否批阅

 /**
 * 常量:"MarkerId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MarkerId(): string {return "markerId";}    //打分者

 /**
 * 常量:"MarkDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MarkDate(): string {return "markDate";}    //打分日期

 /**
 * 常量:"IsSendBack"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSendBack(): string {return "isSendBack";}    //是否退回

 /**
 * 常量:"IsInErrorQuestion"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsInErrorQuestion(): string {return "isInErrorQuestion";}    //是否进入错题

 /**
 * 常量:"WorkTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_WorkTypeId(): string {return "workTypeId";}    //作业类型Id

 /**
 * 常量:"AnswerIP"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerIP(): string {return "answerIP";}    //回答IP

 /**
 * 常量:"AnswerDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerDate(): string {return "answerDate";}    //回答日期

 /**
 * 常量:"AnswerTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerTime(): string {return "answerTime";}    //回答时间

 /**
 * 常量:"CourseExamPaperId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseExamPaperId(): string {return "courseExamPaperId";}    //考卷流水号

 /**
 * 常量:"IsRight"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsRight(): string {return "isRight";}    //是否正确

 /**
 * 常量:"IsAccessKnowledge"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsAccessKnowledge(): string {return "isAccessKnowledge";}    //是否处理知识点

 /**
 * 常量:"IsNotProcessTimeout"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsNotProcessTimeout(): string {return "isNotProcessTimeout";}    //是否不处理超时

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"ErrMsg"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ErrMsg(): string {return "errMsg";}    //错误信息

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

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
if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false)
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
else
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
}
}