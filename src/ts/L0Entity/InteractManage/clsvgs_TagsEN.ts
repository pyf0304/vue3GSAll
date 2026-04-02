
 /**
 * 类名:clsvgs_TagsEN
 * 表名:vgs_Tags(01120757)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:02
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
 * 论文标注视图(vgs_Tags)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvgs_TagsEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vgs_Tags"; //当前表名,与该类相关的表名
public static _KeyFldName= "TagsId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 22;
public static AttributeName = ["tagsId", "tagsContent", "pdfContent", "pdfPageNum", "voteCount", "orderNum", "updUser", "updDate", "pdfLineNum", "pdfX", "pdfY", "memo", "idCurrEduCls", "paperTitle", "paperId", "shareId", "pdfPageNumIn", "pdfPageTop", "pdfDivLet", "pdfDivTop", "pdfZoom", "tagsTypeId"];
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
case clsvgs_TagsEN.con_TagsId:
return this.tagsId;
case clsvgs_TagsEN.con_TagsContent:
return this.tagsContent;
case clsvgs_TagsEN.con_PdfContent:
return this.pdfContent;
case clsvgs_TagsEN.con_PdfPageNum:
return this.pdfPageNum;
case clsvgs_TagsEN.con_VoteCount:
return this.voteCount;
case clsvgs_TagsEN.con_OrderNum:
return this.orderNum;
case clsvgs_TagsEN.con_UpdUser:
return this.updUser;
case clsvgs_TagsEN.con_UpdDate:
return this.updDate;
case clsvgs_TagsEN.con_PdfLineNum:
return this.pdfLineNum;
case clsvgs_TagsEN.con_PdfX:
return this.pdfX;
case clsvgs_TagsEN.con_PdfY:
return this.pdfY;
case clsvgs_TagsEN.con_Memo:
return this.memo;
case clsvgs_TagsEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvgs_TagsEN.con_PaperTitle:
return this.paperTitle;
case clsvgs_TagsEN.con_PaperId:
return this.paperId;
case clsvgs_TagsEN.con_ShareId:
return this.shareId;
case clsvgs_TagsEN.con_PdfPageNumIn:
return this.pdfPageNumIn;
case clsvgs_TagsEN.con_PdfPageTop:
return this.pdfPageTop;
case clsvgs_TagsEN.con_PdfDivLet:
return this.pdfDivLet;
case clsvgs_TagsEN.con_PdfDivTop:
return this.pdfDivTop;
case clsvgs_TagsEN.con_PdfZoom:
return this.pdfZoom;
case clsvgs_TagsEN.con_TagsTypeId:
return this.tagsTypeId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_Tags]中不存在!`;
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
case clsvgs_TagsEN.con_TagsId:
this.tagsId = strValue;
break;
case clsvgs_TagsEN.con_TagsContent:
this.tagsContent = strValue;
break;
case clsvgs_TagsEN.con_PdfContent:
this.pdfContent = strValue;
break;
case clsvgs_TagsEN.con_PdfPageNum:
this.pdfPageNum = Number(strValue);
break;
case clsvgs_TagsEN.con_VoteCount:
this.voteCount = Number(strValue);
break;
case clsvgs_TagsEN.con_OrderNum:
this.orderNum = Number(strValue);
break;
case clsvgs_TagsEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvgs_TagsEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvgs_TagsEN.con_PdfLineNum:
this.pdfLineNum = Number(strValue);
break;
case clsvgs_TagsEN.con_PdfX:
this.pdfX = strValue;
break;
case clsvgs_TagsEN.con_PdfY:
this.pdfY = strValue;
break;
case clsvgs_TagsEN.con_Memo:
this.memo = strValue;
break;
case clsvgs_TagsEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvgs_TagsEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvgs_TagsEN.con_PaperId:
this.paperId = strValue;
break;
case clsvgs_TagsEN.con_ShareId:
this.shareId = strValue;
break;
case clsvgs_TagsEN.con_PdfPageNumIn:
this.pdfPageNumIn = strValue;
break;
case clsvgs_TagsEN.con_PdfPageTop:
this.pdfPageTop = Number(strValue);
break;
case clsvgs_TagsEN.con_PdfDivLet:
this.pdfDivLet = strValue;
break;
case clsvgs_TagsEN.con_PdfDivTop:
this.pdfDivTop = strValue;
break;
case clsvgs_TagsEN.con_PdfZoom:
this.pdfZoom = strValue;
break;
case clsvgs_TagsEN.con_TagsTypeId:
this.tagsTypeId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_Tags]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public orderNum = 0;    //序号
public updUser = "";    //修改人
public updDate = "";    //修改日期
public pdfLineNum = 0;    //pdf行号
public pdfX = "";    //PdfX
public pdfY = "";    //PdfY
public memo = "";    //备注
public idCurrEduCls = "";    //教学班流水号
public paperTitle = "";    //论文标题
public paperId = "";    //论文Id
public shareId = "";    //分享Id
public pdfPageNumIn = "";    //PdfPageNumIn
public pdfPageTop = 0;    //pdf页面顶部位置
public pdfDivLet = "";    //PdfDivLet
public pdfDivTop = "";    //PdfDivTop
public pdfZoom = "";    //PdfZoom
public tagsTypeId = "";    //标注类型ID


 /**
 * 常量:"TagsId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TagsId(): string {return "tagsId";}    //标注Id

 /**
 * 常量:"TagsContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TagsContent(): string {return "tagsContent";}    //标注内容

 /**
 * 常量:"PdfContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfContent(): string {return "pdfContent";}    //Pdf内容

 /**
 * 常量:"PdfPageNum"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfPageNum(): string {return "pdfPageNum";}    //Pdf页码

 /**
 * 常量:"VoteCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VoteCount(): string {return "voteCount";}    //点赞计数

 /**
 * 常量:"OrderNum"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

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
 * 常量:"PdfLineNum"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfLineNum(): string {return "pdfLineNum";}    //pdf行号

 /**
 * 常量:"PdfX"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfX(): string {return "pdfX";}    //PdfX

 /**
 * 常量:"PdfY"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfY(): string {return "pdfY";}    //PdfY

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"PaperTitle"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperTitle(): string {return "paperTitle";}    //论文标题

 /**
 * 常量:"PaperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperId(): string {return "paperId";}    //论文Id

 /**
 * 常量:"ShareId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ShareId(): string {return "shareId";}    //分享Id

 /**
 * 常量:"PdfPageNumIn"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfPageNumIn(): string {return "pdfPageNumIn";}    //PdfPageNumIn

 /**
 * 常量:"PdfPageTop"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfPageTop(): string {return "pdfPageTop";}    //pdf页面顶部位置

 /**
 * 常量:"PdfDivLet"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfDivLet(): string {return "pdfDivLet";}    //PdfDivLet

 /**
 * 常量:"PdfDivTop"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfDivTop(): string {return "pdfDivTop";}    //PdfDivTop

 /**
 * 常量:"PdfZoom"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfZoom(): string {return "pdfZoom";}    //PdfZoom

 /**
 * 常量:"TagsTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
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