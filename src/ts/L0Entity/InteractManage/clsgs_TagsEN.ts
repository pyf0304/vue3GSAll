
 /**
 * 类名:clsgs_TagsEN
 * 表名:gs_Tags(01120714)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 00:26:13
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
 * 标注(gs_Tags)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsgs_TagsEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "gs_Tags"; //当前表名,与该类相关的表名
public static _KeyFldName= "TagsId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 23;
public static AttributeName = ["tagsId", "tagsContent", "pdfContent", "pdfPageNum", "voteCount", "userId", "orderNum", "updUser", "updDate", "pdfLineNum", "pdfX", "pdfY", "memo", "idCurrEduCls", "paperId", "shareId", "pdfPageNumIn", "pdfPageTop", "selectSpanRange", "pdfDivLet", "pdfDivTop", "pdfZoom", "tagsTypeId"];
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
private mstrTagsId = "";    //标注Id
private mstrTagsContent = "";    //标注内容
private mstrPdfContent = "";    //Pdf内容
private mintPdfPageNum = 0;    //Pdf页码
private mintVoteCount = 0;    //点赞计数
private mstrUserId = "";    //用户ID
private mintOrderNum = 0;    //序号
private mstrUpdUser = "";    //修改人
private mstrUpdDate = "";    //修改日期
private mintPdfLineNum = 0;    //pdf行号
private mstrPdfX = "";    //PdfX
private mstrPdfY = "";    //PdfY
private mstrMemo = "";    //备注
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrPaperId = "";    //论文Id
private mstrShareId = "";    //分享Id
private mstrPdfPageNumIn = "";    //PdfPageNumIn
private mintPdfPageTop = 0;    //pdf页面顶部位置
private mstrselectSpanRange = "";    //选择Span范围
private mstrPdfDivLet = "";    //PdfDivLet
private mstrPdfDivTop = "";    //PdfDivTop
private mstrPdfZoom = "";    //PdfZoom
private mstrTagsTypeId = "";    //标注类型ID

/**
 * 标注Id(说明:;字段类型:char;字段长度:10;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTagsId (value: string)
{
if (value  != undefined)
{
 this.tagsId = value;
    this.hmProperty["tagsId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 标注内容(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTagsContent (value: string)
{
if (value  != undefined)
{
 this.tagsContent = value;
    this.hmProperty["tagsContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Pdf内容(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfContent (value: string)
{
if (value  != undefined)
{
 this.pdfContent = value;
    this.hmProperty["pdfContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Pdf页码(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfPageNum (value: number)
{
if (value  != undefined)
{
 this.pdfPageNum = value;
    this.hmProperty["pdfPageNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 点赞计数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetVoteCount (value: number)
{
if (value  != undefined)
{
 this.voteCount = value;
    this.hmProperty["voteCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户ID(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserId (value: string)
{
if (value  != undefined)
{
 this.userId = value;
    this.hmProperty["userId"] = true;
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
 * pdf行号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfLineNum (value: number)
{
if (value  != undefined)
{
 this.pdfLineNum = value;
    this.hmProperty["pdfLineNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * PdfX(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfX (value: string)
{
if (value  != undefined)
{
 this.pdfX = value;
    this.hmProperty["pdfX"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * PdfY(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfY (value: string)
{
if (value  != undefined)
{
 this.pdfY = value;
    this.hmProperty["pdfY"] = true;
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
 * 论文Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperId (value: string)
{
if (value  != undefined)
{
 this.paperId = value;
    this.hmProperty["paperId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 分享Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetShareId (value: string)
{
if (value  != undefined)
{
 this.shareId = value;
    this.hmProperty["shareId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * PdfPageNumIn(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfPageNumIn (value: string)
{
if (value  != undefined)
{
 this.pdfPageNumIn = value;
    this.hmProperty["pdfPageNumIn"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * pdf页面顶部位置(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfPageTop (value: number)
{
if (value  != undefined)
{
 this.pdfPageTop = value;
    this.hmProperty["pdfPageTop"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 选择Span范围(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetselectSpanRange (value: string)
{
if (value  != undefined)
{
 this.selectSpanRange = value;
    this.hmProperty["selectSpanRange"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * PdfDivLet(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfDivLet (value: string)
{
if (value  != undefined)
{
 this.pdfDivLet = value;
    this.hmProperty["pdfDivLet"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * PdfDivTop(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfDivTop (value: string)
{
if (value  != undefined)
{
 this.pdfDivTop = value;
    this.hmProperty["pdfDivTop"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * PdfZoom(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfZoom (value: string)
{
if (value  != undefined)
{
 this.pdfZoom = value;
    this.hmProperty["pdfZoom"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 标注类型ID(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTagsTypeId (value: string)
{
if (value  != undefined)
{
 this.tagsTypeId = value;
    this.hmProperty["tagsTypeId"] = true;
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
case clsgs_TagsEN.con_TagsId:
return this.tagsId;
case clsgs_TagsEN.con_TagsContent:
return this.tagsContent;
case clsgs_TagsEN.con_PdfContent:
return this.pdfContent;
case clsgs_TagsEN.con_PdfPageNum:
return this.pdfPageNum;
case clsgs_TagsEN.con_VoteCount:
return this.voteCount;
case clsgs_TagsEN.con_UserId:
return this.userId;
case clsgs_TagsEN.con_OrderNum:
return this.orderNum;
case clsgs_TagsEN.con_UpdUser:
return this.updUser;
case clsgs_TagsEN.con_UpdDate:
return this.updDate;
case clsgs_TagsEN.con_PdfLineNum:
return this.pdfLineNum;
case clsgs_TagsEN.con_PdfX:
return this.pdfX;
case clsgs_TagsEN.con_PdfY:
return this.pdfY;
case clsgs_TagsEN.con_Memo:
return this.memo;
case clsgs_TagsEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsgs_TagsEN.con_PaperId:
return this.paperId;
case clsgs_TagsEN.con_ShareId:
return this.shareId;
case clsgs_TagsEN.con_PdfPageNumIn:
return this.pdfPageNumIn;
case clsgs_TagsEN.con_PdfPageTop:
return this.pdfPageTop;
case clsgs_TagsEN.con_selectSpanRange:
return this.selectSpanRange;
case clsgs_TagsEN.con_PdfDivLet:
return this.pdfDivLet;
case clsgs_TagsEN.con_PdfDivTop:
return this.pdfDivTop;
case clsgs_TagsEN.con_PdfZoom:
return this.pdfZoom;
case clsgs_TagsEN.con_TagsTypeId:
return this.tagsTypeId;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_Tags]中不存在!`;
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
case clsgs_TagsEN.con_TagsId:
this.tagsId = strValue;
    this.hmProperty["tagsId"] = true;
break;
case clsgs_TagsEN.con_TagsContent:
this.tagsContent = strValue;
    this.hmProperty["tagsContent"] = true;
break;
case clsgs_TagsEN.con_PdfContent:
this.pdfContent = strValue;
    this.hmProperty["pdfContent"] = true;
break;
case clsgs_TagsEN.con_PdfPageNum:
this.pdfPageNum = Number(strValue);
    this.hmProperty["pdfPageNum"] = true;
break;
case clsgs_TagsEN.con_VoteCount:
this.voteCount = Number(strValue);
    this.hmProperty["voteCount"] = true;
break;
case clsgs_TagsEN.con_UserId:
this.userId = strValue;
    this.hmProperty["userId"] = true;
break;
case clsgs_TagsEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsgs_TagsEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsgs_TagsEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsgs_TagsEN.con_PdfLineNum:
this.pdfLineNum = Number(strValue);
    this.hmProperty["pdfLineNum"] = true;
break;
case clsgs_TagsEN.con_PdfX:
this.pdfX = strValue;
    this.hmProperty["pdfX"] = true;
break;
case clsgs_TagsEN.con_PdfY:
this.pdfY = strValue;
    this.hmProperty["pdfY"] = true;
break;
case clsgs_TagsEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsgs_TagsEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsgs_TagsEN.con_PaperId:
this.paperId = strValue;
    this.hmProperty["paperId"] = true;
break;
case clsgs_TagsEN.con_ShareId:
this.shareId = strValue;
    this.hmProperty["shareId"] = true;
break;
case clsgs_TagsEN.con_PdfPageNumIn:
this.pdfPageNumIn = strValue;
    this.hmProperty["pdfPageNumIn"] = true;
break;
case clsgs_TagsEN.con_PdfPageTop:
this.pdfPageTop = Number(strValue);
    this.hmProperty["pdfPageTop"] = true;
break;
case clsgs_TagsEN.con_selectSpanRange:
this.selectSpanRange = strValue;
    this.hmProperty["selectSpanRange"] = true;
break;
case clsgs_TagsEN.con_PdfDivLet:
this.pdfDivLet = strValue;
    this.hmProperty["pdfDivLet"] = true;
break;
case clsgs_TagsEN.con_PdfDivTop:
this.pdfDivTop = strValue;
    this.hmProperty["pdfDivTop"] = true;
break;
case clsgs_TagsEN.con_PdfZoom:
this.pdfZoom = strValue;
    this.hmProperty["pdfZoom"] = true;
break;
case clsgs_TagsEN.con_TagsTypeId:
this.tagsTypeId = strValue;
    this.hmProperty["tagsTypeId"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_Tags]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public tagsId = "";    //标注Id
public tagsContent = "";    //标注内容
public pdfContent = "";    //Pdf内容
public pdfPageNum = 0;    //Pdf页码
public voteCount = 0;    //点赞计数
public userId = "";    //用户ID
public orderNum = 0;    //序号
public updUser = "";    //修改人
public updDate = "";    //修改日期
public pdfLineNum = 0;    //pdf行号
public pdfX = "";    //PdfX
public pdfY = "";    //PdfY
public memo = "";    //备注
public idCurrEduCls = "";    //教学班流水号
public paperId = "";    //论文Id
public shareId = "";    //分享Id
public pdfPageNumIn = "";    //PdfPageNumIn
public pdfPageTop = 0;    //pdf页面顶部位置
public selectSpanRange = "";    //选择Span范围
public pdfDivLet = "";    //PdfDivLet
public pdfDivTop = "";    //PdfDivTop
public pdfZoom = "";    //PdfZoom
public tagsTypeId = "";    //标注类型ID


 /**
 * 常量:"TagsId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TagsId(): string {return "tagsId";}    //标注Id

 /**
 * 常量:"TagsContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TagsContent(): string {return "tagsContent";}    //标注内容

 /**
 * 常量:"PdfContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PdfContent(): string {return "pdfContent";}    //Pdf内容

 /**
 * 常量:"PdfPageNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PdfPageNum(): string {return "pdfPageNum";}    //Pdf页码

 /**
 * 常量:"VoteCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_VoteCount(): string {return "voteCount";}    //点赞计数

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"PdfLineNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PdfLineNum(): string {return "pdfLineNum";}    //pdf行号

 /**
 * 常量:"PdfX"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PdfX(): string {return "pdfX";}    //PdfX

 /**
 * 常量:"PdfY"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PdfY(): string {return "pdfY";}    //PdfY

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"PaperId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PaperId(): string {return "paperId";}    //论文Id

 /**
 * 常量:"ShareId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ShareId(): string {return "shareId";}    //分享Id

 /**
 * 常量:"PdfPageNumIn"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PdfPageNumIn(): string {return "pdfPageNumIn";}    //PdfPageNumIn

 /**
 * 常量:"PdfPageTop"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PdfPageTop(): string {return "pdfPageTop";}    //pdf页面顶部位置

 /**
 * 常量:"selectSpanRange"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_selectSpanRange(): string {return "selectSpanRange";}    //选择Span范围

 /**
 * 常量:"PdfDivLet"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PdfDivLet(): string {return "pdfDivLet";}    //PdfDivLet

 /**
 * 常量:"PdfDivTop"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PdfDivTop(): string {return "pdfDivTop";}    //PdfDivTop

 /**
 * 常量:"PdfZoom"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PdfZoom(): string {return "pdfZoom";}    //PdfZoom

 /**
 * 常量:"TagsTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TagsTypeId(): string {return "tagsTypeId";}    //标注类型ID

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