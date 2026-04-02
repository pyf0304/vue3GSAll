
 /**
 * 类名:clscc_CourseExamPaperEN
 * 表名:cc_CourseExamPaper(01120071)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:33
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 考卷(cc_CourseExamPaper)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clscc_CourseExamPaperEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "cc_CourseExamPaper"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseExamPaperId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 26;
public static AttributeName = ["courseExamPaperId", "courseId", "examPaperName", "paperIndex", "examPaperTypeId", "isShow", "totalScore", "viewCount", "doneNumber", "paperTime", "downloadNumber", "collectionCount", "likeCount", "idXzMajor", "paperDispModeId", "examCreateTime", "createUserID", "isOpenToAllStu", "isOpenToSchool", "isOpenToSocial", "courseChapterId", "isAutoGeneQuestion", "isCanMultiDo", "updDate", "updUserId", "memo"];
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
private mstrCourseExamPaperId = "";    //考卷流水号
private mstrCourseId = "";    //课程Id
private mstrExamPaperName = "";    //考卷名称
private mintPaperIndex = 0;    //试卷序号
private mstrExamPaperTypeId = "";    //试卷类型Id
private mbolIsShow = false;    //是否启用
private mdblTotalScore = 0;    //总得分
private mintViewCount = 0;    //浏览量
private mintDoneNumber = 0;    //已做人数
private mintPaperTime = 0;    //考试时间（分钟）
private mintDownloadNumber = 0;    //下载数目
private mlngCollectionCount = 0;    //收藏数量
private mlngLikeCount = 0;    //资源喜欢数量
private mstrIdXzMajor = "";    //专业流水号
private mstrPaperDispModeId = "";    //试卷显示模式Id
private mstrExamCreateTime = "";    //考卷建立时间
private mstrCreateUserID = "";    //建立用户ID
private mbolIsOpenToAllStu = false;    //全校师生
private mbolIsOpenToSchool = false;    //全校师生公开
private mbolIsOpenToSocial = false;    //社会公众
private mstrCourseChapterId = "";    //课程章节ID
private mbolIsAutoGeneQuestion = false;    //是否自动生成题目
private mbolIsCanMultiDo = false;    //是否可以做多次
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注

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
 * 考卷名称(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetExamPaperName (value: string)
{
if (value  != undefined)
{
 this.examPaperName = value;
    this.hmProperty["examPaperName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 试卷序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperIndex (value: number)
{
if (value  != undefined)
{
 this.paperIndex = value;
    this.hmProperty["paperIndex"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 试卷类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetExamPaperTypeId (value: string)
{
if (value  != undefined)
{
 this.examPaperTypeId = value;
    this.hmProperty["examPaperTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否启用(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsShow (value: boolean)
{
if (value  != undefined)
{
 this.isShow = value;
    this.hmProperty["isShow"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 总得分(说明:;字段类型:decimal;字段长度:10;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTotalScore (value: number)
{
if (value  != undefined)
{
 this.totalScore = value;
    this.hmProperty["totalScore"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 浏览量(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetViewCount (value: number)
{
if (value  != undefined)
{
 this.viewCount = value;
    this.hmProperty["viewCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 已做人数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDoneNumber (value: number)
{
if (value  != undefined)
{
 this.doneNumber = value;
    this.hmProperty["doneNumber"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 考试时间（分钟）(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperTime (value: number)
{
if (value  != undefined)
{
 this.paperTime = value;
    this.hmProperty["paperTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 下载数目(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDownloadNumber (value: number)
{
if (value  != undefined)
{
 this.downloadNumber = value;
    this.hmProperty["downloadNumber"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 收藏数量(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCollectionCount (value: number)
{
if (value  != undefined)
{
 this.collectionCount = value;
    this.hmProperty["collectionCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 资源喜欢数量(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLikeCount (value: number)
{
if (value  != undefined)
{
 this.likeCount = value;
    this.hmProperty["likeCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 专业流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdXzMajor (value: string)
{
if (value  != undefined)
{
 this.idXzMajor = value;
    this.hmProperty["idXzMajor"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 试卷显示模式Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperDispModeId (value: string)
{
if (value  != undefined)
{
 this.paperDispModeId = value;
    this.hmProperty["paperDispModeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 考卷建立时间(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetExamCreateTime (value: string)
{
if (value  != undefined)
{
 this.examCreateTime = value;
    this.hmProperty["examCreateTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 建立用户ID(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCreateUserID (value: string)
{
if (value  != undefined)
{
 this.createUserID = value;
    this.hmProperty["createUserID"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 全校师生(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsOpenToAllStu (value: boolean)
{
if (value  != undefined)
{
 this.isOpenToAllStu = value;
    this.hmProperty["isOpenToAllStu"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 全校师生公开(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsOpenToSchool (value: boolean)
{
if (value  != undefined)
{
 this.isOpenToSchool = value;
    this.hmProperty["isOpenToSchool"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 社会公众(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsOpenToSocial (value: boolean)
{
if (value  != undefined)
{
 this.isOpenToSocial = value;
    this.hmProperty["isOpenToSocial"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程章节ID(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseChapterId (value: string)
{
if (value  != undefined)
{
 this.courseChapterId = value;
    this.hmProperty["courseChapterId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否自动生成题目(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsAutoGeneQuestion (value: boolean)
{
if (value  != undefined)
{
 this.isAutoGeneQuestion = value;
    this.hmProperty["isAutoGeneQuestion"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否可以做多次(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsCanMultiDo (value: boolean)
{
if (value  != undefined)
{
 this.isCanMultiDo = value;
    this.hmProperty["isCanMultiDo"] = true;
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
case clscc_CourseExamPaperEN.con_CourseExamPaperId:
return this.courseExamPaperId;
case clscc_CourseExamPaperEN.con_CourseId:
return this.courseId;
case clscc_CourseExamPaperEN.con_ExamPaperName:
return this.examPaperName;
case clscc_CourseExamPaperEN.con_PaperIndex:
return this.paperIndex;
case clscc_CourseExamPaperEN.con_ExamPaperTypeId:
return this.examPaperTypeId;
case clscc_CourseExamPaperEN.con_IsShow:
return this.isShow;
case clscc_CourseExamPaperEN.con_TotalScore:
return this.totalScore;
case clscc_CourseExamPaperEN.con_ViewCount:
return this.viewCount;
case clscc_CourseExamPaperEN.con_DoneNumber:
return this.doneNumber;
case clscc_CourseExamPaperEN.con_PaperTime:
return this.paperTime;
case clscc_CourseExamPaperEN.con_DownloadNumber:
return this.downloadNumber;
case clscc_CourseExamPaperEN.con_CollectionCount:
return this.collectionCount;
case clscc_CourseExamPaperEN.con_LikeCount:
return this.likeCount;
case clscc_CourseExamPaperEN.con_IdXzMajor:
return this.idXzMajor;
case clscc_CourseExamPaperEN.con_PaperDispModeId:
return this.paperDispModeId;
case clscc_CourseExamPaperEN.con_ExamCreateTime:
return this.examCreateTime;
case clscc_CourseExamPaperEN.con_CreateUserID:
return this.createUserID;
case clscc_CourseExamPaperEN.con_IsOpenToAllStu:
return this.isOpenToAllStu;
case clscc_CourseExamPaperEN.con_IsOpenToSchool:
return this.isOpenToSchool;
case clscc_CourseExamPaperEN.con_IsOpenToSocial:
return this.isOpenToSocial;
case clscc_CourseExamPaperEN.con_CourseChapterId:
return this.courseChapterId;
case clscc_CourseExamPaperEN.con_IsAutoGeneQuestion:
return this.isAutoGeneQuestion;
case clscc_CourseExamPaperEN.con_IsCanMultiDo:
return this.isCanMultiDo;
case clscc_CourseExamPaperEN.con_UpdDate:
return this.updDate;
case clscc_CourseExamPaperEN.con_UpdUserId:
return this.updUserId;
case clscc_CourseExamPaperEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseExamPaper]中不存在!`;
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
case clscc_CourseExamPaperEN.con_CourseExamPaperId:
this.courseExamPaperId = strValue;
    this.hmProperty["courseExamPaperId"] = true;
break;
case clscc_CourseExamPaperEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clscc_CourseExamPaperEN.con_ExamPaperName:
this.examPaperName = strValue;
    this.hmProperty["examPaperName"] = true;
break;
case clscc_CourseExamPaperEN.con_PaperIndex:
this.paperIndex = Number(strValue);
    this.hmProperty["paperIndex"] = true;
break;
case clscc_CourseExamPaperEN.con_ExamPaperTypeId:
this.examPaperTypeId = strValue;
    this.hmProperty["examPaperTypeId"] = true;
break;
case clscc_CourseExamPaperEN.con_IsShow:
this.isShow = Boolean(strValue);
    this.hmProperty["isShow"] = true;
break;
case clscc_CourseExamPaperEN.con_TotalScore:
this.totalScore = Number(strValue);
    this.hmProperty["totalScore"] = true;
break;
case clscc_CourseExamPaperEN.con_ViewCount:
this.viewCount = Number(strValue);
    this.hmProperty["viewCount"] = true;
break;
case clscc_CourseExamPaperEN.con_DoneNumber:
this.doneNumber = Number(strValue);
    this.hmProperty["doneNumber"] = true;
break;
case clscc_CourseExamPaperEN.con_PaperTime:
this.paperTime = Number(strValue);
    this.hmProperty["paperTime"] = true;
break;
case clscc_CourseExamPaperEN.con_DownloadNumber:
this.downloadNumber = Number(strValue);
    this.hmProperty["downloadNumber"] = true;
break;
case clscc_CourseExamPaperEN.con_CollectionCount:
this.collectionCount = Number(strValue);
    this.hmProperty["collectionCount"] = true;
break;
case clscc_CourseExamPaperEN.con_LikeCount:
this.likeCount = Number(strValue);
    this.hmProperty["likeCount"] = true;
break;
case clscc_CourseExamPaperEN.con_IdXzMajor:
this.idXzMajor = strValue;
    this.hmProperty["idXzMajor"] = true;
break;
case clscc_CourseExamPaperEN.con_PaperDispModeId:
this.paperDispModeId = strValue;
    this.hmProperty["paperDispModeId"] = true;
break;
case clscc_CourseExamPaperEN.con_ExamCreateTime:
this.examCreateTime = strValue;
    this.hmProperty["examCreateTime"] = true;
break;
case clscc_CourseExamPaperEN.con_CreateUserID:
this.createUserID = strValue;
    this.hmProperty["createUserID"] = true;
break;
case clscc_CourseExamPaperEN.con_IsOpenToAllStu:
this.isOpenToAllStu = Boolean(strValue);
    this.hmProperty["isOpenToAllStu"] = true;
break;
case clscc_CourseExamPaperEN.con_IsOpenToSchool:
this.isOpenToSchool = Boolean(strValue);
    this.hmProperty["isOpenToSchool"] = true;
break;
case clscc_CourseExamPaperEN.con_IsOpenToSocial:
this.isOpenToSocial = Boolean(strValue);
    this.hmProperty["isOpenToSocial"] = true;
break;
case clscc_CourseExamPaperEN.con_CourseChapterId:
this.courseChapterId = strValue;
    this.hmProperty["courseChapterId"] = true;
break;
case clscc_CourseExamPaperEN.con_IsAutoGeneQuestion:
this.isAutoGeneQuestion = Boolean(strValue);
    this.hmProperty["isAutoGeneQuestion"] = true;
break;
case clscc_CourseExamPaperEN.con_IsCanMultiDo:
this.isCanMultiDo = Boolean(strValue);
    this.hmProperty["isCanMultiDo"] = true;
break;
case clscc_CourseExamPaperEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clscc_CourseExamPaperEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clscc_CourseExamPaperEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseExamPaper]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public courseExamPaperId = "";    //考卷流水号
public courseId = "";    //课程Id
public examPaperName = "";    //考卷名称
public paperIndex = 0;    //试卷序号
public examPaperTypeId = "";    //试卷类型Id
public isShow = false;    //是否启用
public totalScore = 0;    //总得分
public viewCount = 0;    //浏览量
public doneNumber = 0;    //已做人数
public paperTime = 0;    //考试时间（分钟）
public downloadNumber = 0;    //下载数目
public collectionCount = 0;    //收藏数量
public likeCount = 0;    //资源喜欢数量
public idXzMajor = "";    //专业流水号
public paperDispModeId = "";    //试卷显示模式Id
public examCreateTime = "";    //考卷建立时间
public createUserID = "";    //建立用户ID
public isOpenToAllStu = false;    //全校师生
public isOpenToSchool = false;    //全校师生公开
public isOpenToSocial = false;    //社会公众
public courseChapterId = "";    //课程章节ID
public isAutoGeneQuestion = false;    //是否自动生成题目
public isCanMultiDo = false;    //是否可以做多次
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注


 /**
 * 常量:"CourseExamPaperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CourseExamPaperId(): string {return "courseExamPaperId";}    //考卷流水号

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
 * 常量:"PaperIndex"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperIndex(): string {return "paperIndex";}    //试卷序号

 /**
 * 常量:"ExamPaperTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ExamPaperTypeId(): string {return "examPaperTypeId";}    //试卷类型Id

 /**
 * 常量:"IsShow"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

 /**
 * 常量:"TotalScore"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TotalScore(): string {return "totalScore";}    //总得分

 /**
 * 常量:"ViewCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewCount(): string {return "viewCount";}    //浏览量

 /**
 * 常量:"DoneNumber"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DoneNumber(): string {return "doneNumber";}    //已做人数

 /**
 * 常量:"PaperTime"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperTime(): string {return "paperTime";}    //考试时间（分钟）

 /**
 * 常量:"DownloadNumber"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DownloadNumber(): string {return "downloadNumber";}    //下载数目

 /**
 * 常量:"CollectionCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CollectionCount(): string {return "collectionCount";}    //收藏数量

 /**
 * 常量:"LikeCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LikeCount(): string {return "likeCount";}    //资源喜欢数量

 /**
 * 常量:"IdXzMajor"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"PaperDispModeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperDispModeId(): string {return "paperDispModeId";}    //试卷显示模式Id

 /**
 * 常量:"ExamCreateTime"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ExamCreateTime(): string {return "examCreateTime";}    //考卷建立时间

 /**
 * 常量:"CreateUserID"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CreateUserID(): string {return "createUserID";}    //建立用户ID

 /**
 * 常量:"IsOpenToAllStu"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsOpenToAllStu(): string {return "isOpenToAllStu";}    //全校师生

 /**
 * 常量:"IsOpenToSchool"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsOpenToSchool(): string {return "isOpenToSchool";}    //全校师生公开

 /**
 * 常量:"IsOpenToSocial"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsOpenToSocial(): string {return "isOpenToSocial";}    //社会公众

 /**
 * 常量:"CourseChapterId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"IsAutoGeneQuestion"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsAutoGeneQuestion(): string {return "isAutoGeneQuestion";}    //是否自动生成题目

 /**
 * 常量:"IsCanMultiDo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsCanMultiDo(): string {return "isCanMultiDo";}    //是否可以做多次

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
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