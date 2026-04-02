
 /**
 * 类名:clscc_CourseChapterEN
 * 表名:cc_CourseChapter(01120060)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:44:10
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
 * 课程章节(cc_CourseChapter)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clscc_CourseChapterEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "cc_CourseChapter"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseChapterId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 25;
public static AttributeName = ["courseChapterId", "courseChapterName", "chapterId", "sectionId", "chapterName", "sectionName", "chapterNameSim", "sectionNameSim", "chapterContent", "courseId", "parentNodeId", "isOpenToAllStu", "isOpenToSchool", "isOpenToSocial", "isMustMenu", "themeName", "isFile", "isUse", "viewCount", "courseChapterReferred", "orderNum", "createDate", "editPeople", "updDate", "memo"];
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
private mstrCourseChapterId = "";    //课程章节ID
private mstrCourseChapterName = "";    //课程章节名称
private mstrChapterId = "";    //章Id
private mstrSectionId = "";    //节Id
private mstrChapterName = "";    //章名
private mstrSectionName = "";    //节名
private mstrChapterNameSim = "";    //章名简称
private mstrSectionNameSim = "";    //节名简称
private mstrChapterContent = "";    //章节内容
private mstrCourseId = "";    //课程Id
private mstrParentNodeId = "";    //父节点编号
private mbolIsOpenToAllStu = false;    //全校师生
private mbolIsOpenToSchool = false;    //全校师生公开
private mbolIsOpenToSocial = false;    //社会公众
private mbolIsMustMenu = false;    //是否必建栏目
private mstrThemeName = "";    //主题名
private mbolIsFile = false;    //项目或文件夹
private mbolIsUse = false;    //是否使用
private mintViewCount = 0;    //浏览量
private mstrCourseChapterReferred = "";    //节简称
private mintOrderNum = 0;    //序号
private mstrCreateDate = "";    //建立日期
private mstrEditPeople = "";    //修改人
private mstrUpdDate = "";    //修改日期
private mstrMemo = "";    //备注

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
 * 课程章节名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseChapterName (value: string)
{
if (value  != undefined)
{
 this.courseChapterName = value;
    this.hmProperty["courseChapterName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 章Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetChapterId (value: string)
{
if (value  != undefined)
{
 this.chapterId = value;
    this.hmProperty["chapterId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 节Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSectionId (value: string)
{
if (value  != undefined)
{
 this.sectionId = value;
    this.hmProperty["sectionId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 章名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetChapterName (value: string)
{
if (value  != undefined)
{
 this.chapterName = value;
    this.hmProperty["chapterName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 节名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSectionName (value: string)
{
if (value  != undefined)
{
 this.sectionName = value;
    this.hmProperty["sectionName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 章名简称(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetChapterNameSim (value: string)
{
if (value  != undefined)
{
 this.chapterNameSim = value;
    this.hmProperty["chapterNameSim"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 节名简称(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSectionNameSim (value: string)
{
if (value  != undefined)
{
 this.sectionNameSim = value;
    this.hmProperty["sectionNameSim"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 章节内容(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetChapterContent (value: string)
{
if (value  != undefined)
{
 this.chapterContent = value;
    this.hmProperty["chapterContent"] = true;
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
 * 父节点编号(说明:;字段类型:varchar;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetParentNodeId (value: string)
{
if (value  != undefined)
{
 this.parentNodeId = value;
    this.hmProperty["parentNodeId"] = true;
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
 * 是否必建栏目(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsMustMenu (value: boolean)
{
if (value  != undefined)
{
 this.isMustMenu = value;
    this.hmProperty["isMustMenu"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 主题名(说明:;字段类型:varchar;字段长度:200;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetThemeName (value: string)
{
if (value  != undefined)
{
 this.themeName = value;
    this.hmProperty["themeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 项目或文件夹(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsFile (value: boolean)
{
if (value  != undefined)
{
 this.isFile = value;
    this.hmProperty["isFile"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否使用(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsUse (value: boolean)
{
if (value  != undefined)
{
 this.isUse = value;
    this.hmProperty["isUse"] = true;
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
 * 节简称(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseChapterReferred (value: string)
{
if (value  != undefined)
{
 this.courseChapterReferred = value;
    this.hmProperty["courseChapterReferred"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOrderNum (value: number)
{
if (value  != undefined)
{
 this.orderNum = value;
    this.hmProperty["orderNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 建立日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCreateDate (value: string)
{
if (value  != undefined)
{
 this.createDate = value;
    this.hmProperty["createDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改人(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetEditPeople (value: string)
{
if (value  != undefined)
{
 this.editPeople = value;
    this.hmProperty["editPeople"] = true;
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
case clscc_CourseChapterEN.con_CourseChapterId:
return this.courseChapterId;
case clscc_CourseChapterEN.con_CourseChapterName:
return this.courseChapterName;
case clscc_CourseChapterEN.con_ChapterId:
return this.chapterId;
case clscc_CourseChapterEN.con_SectionId:
return this.sectionId;
case clscc_CourseChapterEN.con_ChapterName:
return this.chapterName;
case clscc_CourseChapterEN.con_SectionName:
return this.sectionName;
case clscc_CourseChapterEN.con_ChapterNameSim:
return this.chapterNameSim;
case clscc_CourseChapterEN.con_SectionNameSim:
return this.sectionNameSim;
case clscc_CourseChapterEN.con_ChapterContent:
return this.chapterContent;
case clscc_CourseChapterEN.con_CourseId:
return this.courseId;
case clscc_CourseChapterEN.con_ParentNodeId:
return this.parentNodeId;
case clscc_CourseChapterEN.con_IsOpenToAllStu:
return this.isOpenToAllStu;
case clscc_CourseChapterEN.con_IsOpenToSchool:
return this.isOpenToSchool;
case clscc_CourseChapterEN.con_IsOpenToSocial:
return this.isOpenToSocial;
case clscc_CourseChapterEN.con_IsMustMenu:
return this.isMustMenu;
case clscc_CourseChapterEN.con_ThemeName:
return this.themeName;
case clscc_CourseChapterEN.con_IsFile:
return this.isFile;
case clscc_CourseChapterEN.con_IsUse:
return this.isUse;
case clscc_CourseChapterEN.con_ViewCount:
return this.viewCount;
case clscc_CourseChapterEN.con_CourseChapterReferred:
return this.courseChapterReferred;
case clscc_CourseChapterEN.con_OrderNum:
return this.orderNum;
case clscc_CourseChapterEN.con_CreateDate:
return this.createDate;
case clscc_CourseChapterEN.con_EditPeople:
return this.editPeople;
case clscc_CourseChapterEN.con_UpdDate:
return this.updDate;
case clscc_CourseChapterEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseChapter]中不存在!`;
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
case clscc_CourseChapterEN.con_CourseChapterId:
this.courseChapterId = strValue;
    this.hmProperty["courseChapterId"] = true;
break;
case clscc_CourseChapterEN.con_CourseChapterName:
this.courseChapterName = strValue;
    this.hmProperty["courseChapterName"] = true;
break;
case clscc_CourseChapterEN.con_ChapterId:
this.chapterId = strValue;
    this.hmProperty["chapterId"] = true;
break;
case clscc_CourseChapterEN.con_SectionId:
this.sectionId = strValue;
    this.hmProperty["sectionId"] = true;
break;
case clscc_CourseChapterEN.con_ChapterName:
this.chapterName = strValue;
    this.hmProperty["chapterName"] = true;
break;
case clscc_CourseChapterEN.con_SectionName:
this.sectionName = strValue;
    this.hmProperty["sectionName"] = true;
break;
case clscc_CourseChapterEN.con_ChapterNameSim:
this.chapterNameSim = strValue;
    this.hmProperty["chapterNameSim"] = true;
break;
case clscc_CourseChapterEN.con_SectionNameSim:
this.sectionNameSim = strValue;
    this.hmProperty["sectionNameSim"] = true;
break;
case clscc_CourseChapterEN.con_ChapterContent:
this.chapterContent = strValue;
    this.hmProperty["chapterContent"] = true;
break;
case clscc_CourseChapterEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clscc_CourseChapterEN.con_ParentNodeId:
this.parentNodeId = strValue;
    this.hmProperty["parentNodeId"] = true;
break;
case clscc_CourseChapterEN.con_IsOpenToAllStu:
this.isOpenToAllStu = Boolean(strValue);
    this.hmProperty["isOpenToAllStu"] = true;
break;
case clscc_CourseChapterEN.con_IsOpenToSchool:
this.isOpenToSchool = Boolean(strValue);
    this.hmProperty["isOpenToSchool"] = true;
break;
case clscc_CourseChapterEN.con_IsOpenToSocial:
this.isOpenToSocial = Boolean(strValue);
    this.hmProperty["isOpenToSocial"] = true;
break;
case clscc_CourseChapterEN.con_IsMustMenu:
this.isMustMenu = Boolean(strValue);
    this.hmProperty["isMustMenu"] = true;
break;
case clscc_CourseChapterEN.con_ThemeName:
this.themeName = strValue;
    this.hmProperty["themeName"] = true;
break;
case clscc_CourseChapterEN.con_IsFile:
this.isFile = Boolean(strValue);
    this.hmProperty["isFile"] = true;
break;
case clscc_CourseChapterEN.con_IsUse:
this.isUse = Boolean(strValue);
    this.hmProperty["isUse"] = true;
break;
case clscc_CourseChapterEN.con_ViewCount:
this.viewCount = Number(strValue);
    this.hmProperty["viewCount"] = true;
break;
case clscc_CourseChapterEN.con_CourseChapterReferred:
this.courseChapterReferred = strValue;
    this.hmProperty["courseChapterReferred"] = true;
break;
case clscc_CourseChapterEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clscc_CourseChapterEN.con_CreateDate:
this.createDate = strValue;
    this.hmProperty["createDate"] = true;
break;
case clscc_CourseChapterEN.con_EditPeople:
this.editPeople = strValue;
    this.hmProperty["editPeople"] = true;
break;
case clscc_CourseChapterEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clscc_CourseChapterEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseChapter]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public courseChapterId = "";    //课程章节ID
public courseChapterName = "";    //课程章节名称
public chapterId = "";    //章Id
public sectionId = "";    //节Id
public chapterName = "";    //章名
public sectionName = "";    //节名
public chapterNameSim = "";    //章名简称
public sectionNameSim = "";    //节名简称
public chapterContent = "";    //章节内容
public courseId = "";    //课程Id
public parentNodeId = "";    //父节点编号
public isOpenToAllStu = false;    //全校师生
public isOpenToSchool = false;    //全校师生公开
public isOpenToSocial = false;    //社会公众
public isMustMenu = false;    //是否必建栏目
public themeName = "";    //主题名
public isFile = false;    //项目或文件夹
public isUse = false;    //是否使用
public viewCount = 0;    //浏览量
public courseChapterReferred = "";    //节简称
public orderNum = 0;    //序号
public createDate = "";    //建立日期
public editPeople = "";    //修改人
public updDate = "";    //修改日期
public memo = "";    //备注


 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"CourseChapterName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseChapterName(): string {return "courseChapterName";}    //课程章节名称

 /**
 * 常量:"ChapterId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ChapterId(): string {return "chapterId";}    //章Id

 /**
 * 常量:"SectionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionId(): string {return "sectionId";}    //节Id

 /**
 * 常量:"ChapterName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ChapterName(): string {return "chapterName";}    //章名

 /**
 * 常量:"SectionName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionName(): string {return "sectionName";}    //节名

 /**
 * 常量:"ChapterNameSim"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ChapterNameSim(): string {return "chapterNameSim";}    //章名简称

 /**
 * 常量:"SectionNameSim"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionNameSim(): string {return "sectionNameSim";}    //节名简称

 /**
 * 常量:"ChapterContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ChapterContent(): string {return "chapterContent";}    //章节内容

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"ParentNodeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ParentNodeId(): string {return "parentNodeId";}    //父节点编号

 /**
 * 常量:"IsOpenToAllStu"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsOpenToAllStu(): string {return "isOpenToAllStu";}    //全校师生

 /**
 * 常量:"IsOpenToSchool"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsOpenToSchool(): string {return "isOpenToSchool";}    //全校师生公开

 /**
 * 常量:"IsOpenToSocial"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsOpenToSocial(): string {return "isOpenToSocial";}    //社会公众

 /**
 * 常量:"IsMustMenu"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsMustMenu(): string {return "isMustMenu";}    //是否必建栏目

 /**
 * 常量:"ThemeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ThemeName(): string {return "themeName";}    //主题名

 /**
 * 常量:"IsFile"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsFile(): string {return "isFile";}    //项目或文件夹

 /**
 * 常量:"IsUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsUse(): string {return "isUse";}    //是否使用

 /**
 * 常量:"ViewCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewCount(): string {return "viewCount";}    //浏览量

 /**
 * 常量:"CourseChapterReferred"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseChapterReferred(): string {return "courseChapterReferred";}    //节简称

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"CreateDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CreateDate(): string {return "createDate";}    //建立日期

 /**
 * 常量:"EditPeople"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EditPeople(): string {return "editPeople";}    //修改人

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

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