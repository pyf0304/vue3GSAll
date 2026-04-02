
 /**
 * 类名:clsPaperSubResType
 * 表名:PaperSubResType(01120965)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/22 23:44:29
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 论文子资源类型(PaperSubResType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsPaperSubResType 
{
public static _CurrTabName= "PaperSubResType"; //当前表名,与该类相关的表名
public static _KeyFldName= "PaperSubResTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["paperSubResTypeId", "paperSubResTypeName", "paperSubResTypeENName", "fileExtentNameLst", "fileExtentNameLst2", "isUse", "orderNum", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public paperSubResTypeId = "";    //论文子资源类型Id
public paperSubResTypeName = "";    //论文子资源类型名
public paperSubResTypeENName = "";    //论文子资源类型英文名
public fileExtentNameLst = "";    //文件扩展名列表
public fileExtentNameLst2 = "";    //文件扩展名列表2
public isUse = false;    //是否使用
public orderNum = 0;    //序号
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsPaperSubResType.con_PaperSubResTypeId:
return this.paperSubResTypeId;
case clsPaperSubResType.con_PaperSubResTypeName:
return this.paperSubResTypeName;
case clsPaperSubResType.con_PaperSubResTypeENName:
return this.paperSubResTypeENName;
case clsPaperSubResType.con_FileExtentNameLst:
return this.fileExtentNameLst;
case clsPaperSubResType.con_FileExtentNameLst2:
return this.fileExtentNameLst2;
case clsPaperSubResType.con_IsUse:
return this.isUse;
case clsPaperSubResType.con_OrderNum:
return this.orderNum;
case clsPaperSubResType.con_UpdDate:
return this.updDate;
case clsPaperSubResType.con_UpdUser:
return this.updUser;
case clsPaperSubResType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[PaperSubResType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"PaperSubResTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperSubResTypeId(): string {return "paperSubResTypeId";}    //论文子资源类型Id

 /**
 * 常量:"PaperSubResTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperSubResTypeName(): string {return "paperSubResTypeName";}    //论文子资源类型名

 /**
 * 常量:"PaperSubResTypeENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperSubResTypeENName(): string {return "paperSubResTypeENName";}    //论文子资源类型英文名

 /**
 * 常量:"FileExtentNameLst"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileExtentNameLst(): string {return "fileExtentNameLst";}    //文件扩展名列表

 /**
 * 常量:"FileExtentNameLst2"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileExtentNameLst2(): string {return "fileExtentNameLst2";}    //文件扩展名列表2

 /**
 * 常量:"IsUse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsUse(): string {return "isUse";}    //是否使用

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumPaperSubResType
{
 /**
 * 视频
 **/
static readonly Video_0001 = "0001";
 /**
 * 音频
 **/
static readonly Audio_0002 = "0002";
 /**
 * 动画
 **/
static readonly Animation_0003 = "0003";
 /**
 * 图片
 **/
static readonly Picture_0004 = "0004";
 /**
 * 其它
 **/
static readonly Other_0005 = "0005";
 /**
 * PPT
 **/
static readonly PPT_0006 = "0006";
 /**
 * Word文档
 **/
static readonly Word_0007 = "0007";
 /**
 * Access文档
 **/
static readonly Access_0008 = "0008";
 /**
 * XPS文档
 **/
static readonly XPS_0009 = "0009";
 /**
 * 纯文本
 **/
static readonly Text_0010 = "0010";
 /**
 * Html文本
 **/
static readonly Html_0011 = "0011";
 /**
 * 压缩文件
 **/
static readonly CompressedFile_0012 = "0012";
 /**
 * Pdf文件
 **/
static readonly Pdf_0013 = "0013";
 /**
 * Excel文件
 **/
static readonly Excel_0014 = "0014";
 /**
 * 源代码
 **/
static readonly SourceCode_0015 = "0015";
}