
 /**
 * 类名:clsvDiscussionSubContentEN
 * 表名:vDiscussionSubContent(01120585)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:50
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
 * v讨论子内容视图(vDiscussionSubContent)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvDiscussionSubContentEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vDiscussionSubContent"; //当前表名,与该类相关的表名
public static _KeyFldName= "SubContentId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 20;
public static AttributeName = ["subContent", "topicsId", "topicsTitle", "isTop", "updDate", "updUser", "memo", "collegeName", "idXzCollege", "idXzMajor", "majorName", "userName", "browseNumber", "idCurrEduCls", "parentId", "topicsContent", "userId", "vUpdDate", "vUpdUser", "subContentId"];
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
case clsvDiscussionSubContentEN.con_SubContent:
return this.subContent;
case clsvDiscussionSubContentEN.con_TopicsId:
return this.topicsId;
case clsvDiscussionSubContentEN.con_TopicsTitle:
return this.topicsTitle;
case clsvDiscussionSubContentEN.con_IsTop:
return this.isTop;
case clsvDiscussionSubContentEN.con_UpdDate:
return this.updDate;
case clsvDiscussionSubContentEN.con_UpdUser:
return this.updUser;
case clsvDiscussionSubContentEN.con_Memo:
return this.memo;
case clsvDiscussionSubContentEN.con_CollegeName:
return this.collegeName;
case clsvDiscussionSubContentEN.con_IdXzCollege:
return this.idXzCollege;
case clsvDiscussionSubContentEN.con_IdXzMajor:
return this.idXzMajor;
case clsvDiscussionSubContentEN.con_MajorName:
return this.majorName;
case clsvDiscussionSubContentEN.con_UserName:
return this.userName;
case clsvDiscussionSubContentEN.con_BrowseNumber:
return this.browseNumber;
case clsvDiscussionSubContentEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvDiscussionSubContentEN.con_ParentId:
return this.parentId;
case clsvDiscussionSubContentEN.con_TopicsContent:
return this.topicsContent;
case clsvDiscussionSubContentEN.con_UserId:
return this.userId;
case clsvDiscussionSubContentEN.con_vUpdDate:
return this.vUpdDate;
case clsvDiscussionSubContentEN.con_vUpdUser:
return this.vUpdUser;
case clsvDiscussionSubContentEN.con_SubContentId:
return this.subContentId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vDiscussionSubContent]中不存在!`;
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
case clsvDiscussionSubContentEN.con_SubContent:
this.subContent = strValue;
break;
case clsvDiscussionSubContentEN.con_TopicsId:
this.topicsId = strValue;
break;
case clsvDiscussionSubContentEN.con_TopicsTitle:
this.topicsTitle = strValue;
break;
case clsvDiscussionSubContentEN.con_IsTop:
this.isTop = Boolean(strValue);
break;
case clsvDiscussionSubContentEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvDiscussionSubContentEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvDiscussionSubContentEN.con_Memo:
this.memo = strValue;
break;
case clsvDiscussionSubContentEN.con_CollegeName:
this.collegeName = strValue;
break;
case clsvDiscussionSubContentEN.con_IdXzCollege:
this.idXzCollege = strValue;
break;
case clsvDiscussionSubContentEN.con_IdXzMajor:
this.idXzMajor = strValue;
break;
case clsvDiscussionSubContentEN.con_MajorName:
this.majorName = strValue;
break;
case clsvDiscussionSubContentEN.con_UserName:
this.userName = strValue;
break;
case clsvDiscussionSubContentEN.con_BrowseNumber:
this.browseNumber = Number(strValue);
break;
case clsvDiscussionSubContentEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvDiscussionSubContentEN.con_ParentId:
this.parentId = strValue;
break;
case clsvDiscussionSubContentEN.con_TopicsContent:
this.topicsContent = strValue;
break;
case clsvDiscussionSubContentEN.con_UserId:
this.userId = strValue;
break;
case clsvDiscussionSubContentEN.con_vUpdDate:
this.vUpdDate = strValue;
break;
case clsvDiscussionSubContentEN.con_vUpdUser:
this.vUpdUser = strValue;
break;
case clsvDiscussionSubContentEN.con_SubContentId:
this.subContentId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vDiscussionSubContent]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public subContent = "";    //子内容
public topicsId = "";    //主题Id
public topicsTitle = "";    //主题标题
public isTop = false;    //是否置顶
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public collegeName = "";    //学院名称
public idXzCollege = "";    //学院流水号
public idXzMajor = "";    //专业流水号
public majorName = "";    //专业名称
public userName = "";    //用户名
public browseNumber = 0;    //浏览量
public idCurrEduCls = "";    //教学班流水号
public parentId = "";    //父节点Id
public topicsContent = "";    //主题内容
public userId = "";    //用户ID
public vUpdDate = "";    //vUpdDate
public vUpdUser = "";    //vUpdUser
public subContentId = "";    //子内容Id


 /**
 * 常量:"SubContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SubContent(): string {return "subContent";}    //子内容

 /**
 * 常量:"TopicsId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicsId(): string {return "topicsId";}    //主题Id

 /**
 * 常量:"TopicsTitle"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicsTitle(): string {return "topicsTitle";}    //主题标题

 /**
 * 常量:"IsTop"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsTop(): string {return "isTop";}    //是否置顶

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"CollegeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"IdXzCollege"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdXzMajor"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"MajorName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"UserName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"BrowseNumber"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_BrowseNumber(): string {return "browseNumber";}    //浏览量

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"ParentId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ParentId(): string {return "parentId";}    //父节点Id

 /**
 * 常量:"TopicsContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicsContent(): string {return "topicsContent";}    //主题内容

 /**
 * 常量:"UserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"vUpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_vUpdDate(): string {return "vUpdDate";}    //vUpdDate

 /**
 * 常量:"vUpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_vUpdUser(): string {return "vUpdUser";}    //vUpdUser

 /**
 * 常量:"SubContentId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SubContentId(): string {return "subContentId";}    //子内容Id

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