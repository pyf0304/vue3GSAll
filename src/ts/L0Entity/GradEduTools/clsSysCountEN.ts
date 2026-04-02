
 /**
 * 类名:clsSysCountEN
 * 表名:SysCount(01120625)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:35
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 统计数据(SysCount)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsSysCountEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "SysCount"; //当前表名,与该类相关的表名
public static _KeyFldName= "CountId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 16;
public static AttributeName = ["countId", "countTypeId", "paperRWCount", "okCount", "collectionCount", "downloadCount", "attachmentCount", "commentCount", "score", "stuScore", "teaScore", "tableKey", "parentId", "updUser", "updDate", "memo"];
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
private mstrCountId = "";    //CountId
private mstrCountTypeId = "";    //CountTypeId
private mintPaperRWCount = 0;    //PaperRWCount
private mintOkCount = 0;    //点赞统计
private mlngCollectionCount = 0;    //收藏数量
private mintDownloadCount = 0;    //下载数
private mintAttachmentCount = 0;    //附件计数
private mintCommentCount = 0;    //评论数
private mfltScore = 0.0;    //评分
private mfltStuScore = 0.0;    //学生平均分
private mfltTeaScore = 0.0;    //教师评分
private mstrTableKey = "";    //表主键
private mstrParentId = "";    //父Id
private mstrUpdUser = "";    //修改人
private mstrUpdDate = "";    //修改日期
private mstrMemo = "";    //备注

/**
 * CountId(说明:;字段类型:char;字段长度:10;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCountId (value: string)
{
if (value  != undefined)
{
 this.countId = value;
    this.hmProperty["countId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * CountTypeId(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCountTypeId (value: string)
{
if (value  != undefined)
{
 this.countTypeId = value;
    this.hmProperty["countTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * PaperRWCount(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperRWCount (value: number)
{
if (value  != undefined)
{
 this.paperRWCount = value;
    this.hmProperty["paperRWCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 点赞统计(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOkCount (value: number)
{
if (value  != undefined)
{
 this.okCount = value;
    this.hmProperty["okCount"] = true;
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
 * 下载数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDownloadCount (value: number)
{
if (value  != undefined)
{
 this.downloadCount = value;
    this.hmProperty["downloadCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 附件计数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAttachmentCount (value: number)
{
if (value  != undefined)
{
 this.attachmentCount = value;
    this.hmProperty["attachmentCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 评论数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCommentCount (value: number)
{
if (value  != undefined)
{
 this.commentCount = value;
    this.hmProperty["commentCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 评分(说明:;字段类型:float;字段长度:8;是否可空:True)
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
 * 学生平均分(说明:;字段类型:float;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStuScore (value: number)
{
if (value  != undefined)
{
 this.stuScore = value;
    this.hmProperty["stuScore"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教师评分(说明:;字段类型:float;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeaScore (value: number)
{
if (value  != undefined)
{
 this.teaScore = value;
    this.hmProperty["teaScore"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 表主键(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTableKey (value: string)
{
if (value  != undefined)
{
 this.tableKey = value;
    this.hmProperty["tableKey"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 父Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetParentId (value: string)
{
if (value  != undefined)
{
 this.parentId = value;
    this.hmProperty["parentId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUser (value: string)
{
if (value  != undefined)
{
 this.updUser = value;
    this.hmProperty["updUser"] = true;
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
case clsSysCountEN.con_CountId:
return this.countId;
case clsSysCountEN.con_CountTypeId:
return this.countTypeId;
case clsSysCountEN.con_PaperRWCount:
return this.paperRWCount;
case clsSysCountEN.con_OkCount:
return this.okCount;
case clsSysCountEN.con_CollectionCount:
return this.collectionCount;
case clsSysCountEN.con_DownloadCount:
return this.downloadCount;
case clsSysCountEN.con_AttachmentCount:
return this.attachmentCount;
case clsSysCountEN.con_CommentCount:
return this.commentCount;
case clsSysCountEN.con_Score:
return this.score;
case clsSysCountEN.con_StuScore:
return this.stuScore;
case clsSysCountEN.con_TeaScore:
return this.teaScore;
case clsSysCountEN.con_TableKey:
return this.tableKey;
case clsSysCountEN.con_ParentId:
return this.parentId;
case clsSysCountEN.con_UpdUser:
return this.updUser;
case clsSysCountEN.con_UpdDate:
return this.updDate;
case clsSysCountEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SysCount]中不存在!`;
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
case clsSysCountEN.con_CountId:
this.countId = strValue;
    this.hmProperty["countId"] = true;
break;
case clsSysCountEN.con_CountTypeId:
this.countTypeId = strValue;
    this.hmProperty["countTypeId"] = true;
break;
case clsSysCountEN.con_PaperRWCount:
this.paperRWCount = Number(strValue);
    this.hmProperty["paperRWCount"] = true;
break;
case clsSysCountEN.con_OkCount:
this.okCount = Number(strValue);
    this.hmProperty["okCount"] = true;
break;
case clsSysCountEN.con_CollectionCount:
this.collectionCount = Number(strValue);
    this.hmProperty["collectionCount"] = true;
break;
case clsSysCountEN.con_DownloadCount:
this.downloadCount = Number(strValue);
    this.hmProperty["downloadCount"] = true;
break;
case clsSysCountEN.con_AttachmentCount:
this.attachmentCount = Number(strValue);
    this.hmProperty["attachmentCount"] = true;
break;
case clsSysCountEN.con_CommentCount:
this.commentCount = Number(strValue);
    this.hmProperty["commentCount"] = true;
break;
case clsSysCountEN.con_Score:
this.score = Number(strValue);
    this.hmProperty["score"] = true;
break;
case clsSysCountEN.con_StuScore:
this.stuScore = Number(strValue);
    this.hmProperty["stuScore"] = true;
break;
case clsSysCountEN.con_TeaScore:
this.teaScore = Number(strValue);
    this.hmProperty["teaScore"] = true;
break;
case clsSysCountEN.con_TableKey:
this.tableKey = strValue;
    this.hmProperty["tableKey"] = true;
break;
case clsSysCountEN.con_ParentId:
this.parentId = strValue;
    this.hmProperty["parentId"] = true;
break;
case clsSysCountEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsSysCountEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsSysCountEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[SysCount]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public countId = "";    //CountId
public countTypeId = "";    //CountTypeId
public paperRWCount = 0;    //PaperRWCount
public okCount = 0;    //点赞统计
public collectionCount = 0;    //收藏数量
public downloadCount = 0;    //下载数
public attachmentCount = 0;    //附件计数
public commentCount = 0;    //评论数
public score = 0.0;    //评分
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public tableKey = "";    //表主键
public parentId = "";    //父Id
public updUser = "";    //修改人
public updDate = "";    //修改日期
public memo = "";    //备注


 /**
 * 常量:"CountId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CountId(): string {return "countId";}    //CountId

 /**
 * 常量:"CountTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CountTypeId(): string {return "countTypeId";}    //CountTypeId

 /**
 * 常量:"PaperRWCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperRWCount(): string {return "paperRWCount";}    //PaperRWCount

 /**
 * 常量:"OkCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"CollectionCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CollectionCount(): string {return "collectionCount";}    //收藏数量

 /**
 * 常量:"DownloadCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DownloadCount(): string {return "downloadCount";}    //下载数

 /**
 * 常量:"AttachmentCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AttachmentCount(): string {return "attachmentCount";}    //附件计数

 /**
 * 常量:"CommentCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CommentCount(): string {return "commentCount";}    //评论数

 /**
 * 常量:"Score"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //评分

 /**
 * 常量:"StuScore"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_StuScore(): string {return "stuScore";}    //学生平均分

 /**
 * 常量:"TeaScore"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TeaScore(): string {return "teaScore";}    //教师评分

 /**
 * 常量:"TableKey"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TableKey(): string {return "tableKey";}    //表主键

 /**
 * 常量:"ParentId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ParentId(): string {return "parentId";}    //父Id

 /**
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

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