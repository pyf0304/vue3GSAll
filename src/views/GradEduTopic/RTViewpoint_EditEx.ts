
 /**
 * 类名:RTViewpoint_EditEx(界面:RTViewpointCRUD)
 * 表名:RTViewpoint(01120955)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/04 10:00:43
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { RTViewpoint_SplitKeyLst } from "@/ts/L3ForWApi/GradEduTopic/clsRTViewpointWApi";
import { Format } from "@/ts/PubFun/clsString";
import { RTViewpoint_Edit } from "@/viewsBase/GradEduTopic/RTViewpoint_Edit";
 /* RTViewpoint_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class  RTViewpoint_EditEx extends RTViewpoint_Edit
{


 /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
public static btnEdit_Click(strCommandName: string, strKeyId: string) {
const strThisFuncName = this.btnEdit_Click.name;
const objPage: RTViewpoint_EditEx = <RTViewpoint_EditEx> (
RTViewpoint_Edit.GetPageEditObj('RTViewpoint_EditEx')
);
if (objPage == null)
{
const strMsg = `从预存编辑类获取关键字:[RTViewpoint_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！`;
console.error(strMsg);
message.warning(strMsg);
return;
}
let strMsg = '';
let objKeyLst;
const strKeyLst = strKeyId;
switch (strCommandName)
{
case "Submit":            //提交
objPage.btnSubmit_Click();
break;
case "CreateWithMaxId":    //添加记录使用最大关键字
//objPage.btnAddNewRecordWithMaxId_Click();
break;
case "AddNewRecord":            //添加记录
case "Create":            //添加记录
objPage.btnAddNewRecord_Click();
break;
case "UpdateRecord":            //修改记录
case "Update":            //修改记录
case "UpdateRecordInTab":            //修改记录InTab
objKeyLst = RTViewpointSplitKeyLst(strKeyLst);
if (strCommandName == "UpdateRecordInTab")
{
objPage.btnUpdateRecordInTab_Click(objKeyLst.TopicId,objKeyLst.SubViewpointId);
}
else
{
objPage.btnUpdateRecord_Click(objKeyLst.TopicId,objKeyLst.SubViewpointId);
}
break;
default:
strMsg =Format("命令:{0}, 关键字: {1}, 在函数({2}.{3})中没有被处理!", strCommandName, strKeyId, this.constructor.name, strThisFuncName);
console.error(strMsg)
alert(strMsg);
break;
}
}



}