
 /**
 * 类名:clsvDiscussionTopicsEN
 * 表名:vDiscussionTopics(01120586)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:20
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
 * v讨论主题视图(vDiscussionTopics)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvDiscussionTopicsEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vDiscussionTopics"; //当前表名,与该类相关的表名
public static _KeyFldName= "TopicsId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 18;
public static AttributeName = ["topicsId", "discussionTypeId", "discussionTypeName", "topicsTitle", "topicsContent", "isAudit", "isTop", "browseNumber", "updDate", "updUser", "memo", "collegeName", "idXzCollege", "idXzMajor", "majorName", "userName", "subCount", "idCurrEduCls"];
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
case clsvDiscussionTopicsEN.con_TopicsId:
return this.topicsId;
case clsvDiscussionTopicsEN.con_DiscussionTypeId:
return this.discussionTypeId;
case clsvDiscussionTopicsEN.con_DiscussionTypeName:
return this.discussionTypeName;
case clsvDiscussionTopicsEN.con_TopicsTitle:
return this.topicsTitle;
case clsvDiscussionTopicsEN.con_TopicsContent:
return this.topicsContent;
case clsvDiscussionTopicsEN.con_IsAudit:
return this.isAudit;
case clsvDiscussionTopicsEN.con_IsTop:
return this.isTop;
case clsvDiscussionTopicsEN.con_BrowseNumber:
return this.browseNumber;
case clsvDiscussionTopicsEN.con_UpdDate:
return this.updDate;
case clsvDiscussionTopicsEN.con_UpdUser:
return this.updUser;
case clsvDiscussionTopicsEN.con_Memo:
return this.memo;
case clsvDiscussionTopicsEN.con_CollegeName:
return this.collegeName;
case clsvDiscussionTopicsEN.con_IdXzCollege:
return this.idXzCollege;
case clsvDiscussionTopicsEN.con_IdXzMajor:
return this.idXzMajor;
case clsvDiscussionTopicsEN.con_MajorName:
return this.majorName;
case clsvDiscussionTopicsEN.con_UserName:
return this.userName;
case clsvDiscussionTopicsEN.con_SubCount:
return this.subCount;
case clsvDiscussionTopicsEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vDiscussionTopics]中不存在!`;
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
case clsvDiscussionTopicsEN.con_TopicsId:
this.topicsId = strValue;
break;
case clsvDiscussionTopicsEN.con_DiscussionTypeId:
this.discussionTypeId = strValue;
break;
case clsvDiscussionTopicsEN.con_DiscussionTypeName:
this.discussionTypeName = strValue;
break;
case clsvDiscussionTopicsEN.con_TopicsTitle:
this.topicsTitle = strValue;
break;
case clsvDiscussionTopicsEN.con_TopicsContent:
this.topicsContent = strValue;
break;
case clsvDiscussionTopicsEN.con_IsAudit:
this.isAudit = Boolean(strValue);
break;
case clsvDiscussionTopicsEN.con_IsTop:
this.isTop = Boolean(strValue);
break;
case clsvDiscussionTopicsEN.con_BrowseNumber:
this.browseNumber = Number(strValue);
break;
case clsvDiscussionTopicsEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvDiscussionTopicsEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvDiscussionTopicsEN.con_Memo:
this.memo = strValue;
break;
case clsvDiscussionTopicsEN.con_CollegeName:
this.collegeName = strValue;
break;
case clsvDiscussionTopicsEN.con_IdXzCollege:
this.idXzCollege = strValue;
break;
case clsvDiscussionTopicsEN.con_IdXzMajor:
this.idXzMajor = strValue;
break;
case clsvDiscussionTopicsEN.con_MajorName:
this.majorName = strValue;
break;
case clsvDiscussionTopicsEN.con_UserName:
this.userName = strValue;
break;
case clsvDiscussionTopicsEN.con_SubCount:
this.subCount = Number(strValue);
break;
case clsvDiscussionTopicsEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vDiscussionTopics]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public topicsId = "";    //主题Id
public discussionTypeId = "";    //讨论类型Id
public discussionTypeName = "";    //讨论类型名称
public topicsTitle = "";    //主题标题
public topicsContent = "";    //主题内容
public isAudit = false;    //是否审核
public isTop = false;    //是否置顶
public browseNumber = 0;    //浏览量
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public collegeName = "";    //学院名称
public idXzCollege = "";    //学院流水号
public idXzMajor = "";    //专业流水号
public majorName = "";    //专业名称
public userName = "";    //用户名
public subCount = 0;    //SubCount
public idCurrEduCls = "";    //教学班流水号


 /**
 * 常量:"TopicsId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicsId(): string {return "topicsId";}    //主题Id

 /**
 * 常量:"DiscussionTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DiscussionTypeId(): string {return "discussionTypeId";}    //讨论类型Id

 /**
 * 常量:"DiscussionTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DiscussionTypeName(): string {return "discussionTypeName";}    //讨论类型名称

 /**
 * 常量:"TopicsTitle"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicsTitle(): string {return "topicsTitle";}    //主题标题

 /**
 * 常量:"TopicsContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicsContent(): string {return "topicsContent";}    //主题内容

 /**
 * 常量:"IsAudit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsAudit(): string {return "isAudit";}    //是否审核

 /**
 * 常量:"IsTop"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsTop(): string {return "isTop";}    //是否置顶

 /**
 * 常量:"BrowseNumber"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_BrowseNumber(): string {return "browseNumber";}    //浏览量

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
 * 常量:"SubCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SubCount(): string {return "subCount";}    //SubCount

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

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