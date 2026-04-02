
 /**
 * 类名:clsgs_TagsENEx
 * 表名:gs_Tags(01120714)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 00:26:14
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
 * 标注(gs_Tags)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsgs_TagsEN } from "@/ts/L0Entity/InteractManage/clsgs_TagsEN";

export class  clsgs_TagsENEx extends clsgs_TagsEN
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
case clsgs_TagsENEx.con_PaperTitle:
return this.paperTitle;
case clsgs_TagsENEx.con_UserName:
return this.userName;
case clsgs_TagsENEx.con_PaperName:
return this.paperName;
case clsgs_TagsENEx.con_PaperTitleAuthor:
return this.paperTitleAuthor;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"PaperTitle"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_PaperTitle(): string {return "paperTitle";}    //论文标题

 /**
 * 常量:"UserName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"PaperName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_PaperName(): string {return "paperName";}    //主题名称

 /**
 * 常量:"PaperTitleAuthor"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_PaperTitleAuthor(): string {return "paperTitleAuthor";}    //论文标题作者

public paperTitle = "";    //论文标题
public userName = "";    //用户名
public paperName = "";    //主题名称
public paperTitleAuthor = "";    //论文标题作者

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
case clsgs_TagsENEx.con_PaperTitle:
this.paperTitle = strValue;
    this.hmProperty["paperTitle"] = true;
break;
case clsgs_TagsENEx.con_UserName:
this.userName = strValue;
    this.hmProperty["userName"] = true;
break;
case clsgs_TagsENEx.con_PaperName:
this.paperName = strValue;
    this.hmProperty["paperName"] = true;
break;
case clsgs_TagsENEx.con_PaperTitleAuthor:
this.paperTitleAuthor = strValue;
    this.hmProperty["paperTitleAuthor"] = true;
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
}