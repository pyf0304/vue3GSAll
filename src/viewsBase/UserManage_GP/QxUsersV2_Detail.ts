
 /**
 * 类名:QxUsersV2_Detail(界面:QxUsersV2CRUD)
 * 表名:QxUsersV2(00140110)
 * 版本:2024.04.16.1(服务器:WIN-SRV103-116)
 * 日期:2024/04/19 00:03:40
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { QxUsersV2_GetObjByidAsync } from "@/ts/L3ForWApi/UserManage_GP/clsQxUsersV2WApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsQxUsersV2EN } from "@/ts/L0Entity/UserManage_GP/clsQxUsersV2EN";
import { SetLabelHtmlByIdInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* QxUsersV2_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class  QxUsersV2_Detail 
{
public static DetailObj: any;
public divDetail: HTMLDivElement;
public static times4TestShowDialog = 0;
public opType = "";
public keyId = "";
public static strPageDispModeId = "01";//PopupBox(弹出框)

private iShowList: IShowList;
public mstrListDiv = "divDataLst";
public bolIsLoadDetailRegion = false;  //记录是否导入编辑区的变量
public divName4Detail = "divDetail";  //编辑区的Id
 /**
 * 获取当前组件的divEdit的层对象
 **/
public get thisDivDetail(): HTMLDivElement {
return this.divDetail;
}
 /**
 * 获取当前组件的divEdit的层对象
 **/
public get thisDivLayout(): HTMLDivElement {
return this.divDetail;
}
constructor(objShowList: IShowList) {
this.iShowList = objShowList;
const divTemp = document.createElement('div');
divTemp.id = 'temp';
this.divDetail = divTemp;
}


 /**
 * 隐藏对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
 **/
public HideDialog_QxUsersV2() {
if (QxUsersV2_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 QxUsersV2_Detail.DetailObj.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_QxUsersV2(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_QxUsersV2.name;
if (QxUsersV2_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (QxUsersV2_Detail.DetailObj == null)
{
const strMsg = Format(
'当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
this.constructor.name,
strThisFuncName,
);
console.error(strMsg);
alert(strMsg);
return false;
}
await QxUsersV2_Detail.DetailObj.showDialog();
}
this.divDetail = QxUsersV2_Detail.DetailObj.$refs.refDivDetail;
if (this.divDetail == null)
{
if (QxUsersV2_Detail.times4TestShowDialog < 2)
{
QxUsersV2_Detail.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_QxUsersV2(strOp);
}, 100);
}
else
{
const strMsg = Format("当前详细信息区的层(div)对象为空，请检查！(in {0}.{1})", this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;
}
return false;
} else {
QxUsersV2_Detail.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelQxUsersV2 = "关闭";
        }
return true;
}

 /**
 * 获取显示详细信息的div对象
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
 **/
public getDivName(): HTMLDivElement | null {
const strThisFuncName = this.getDivName.name;
if (QxUsersV2_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01)
{
if (this.divDetail != null) return this.divDetail;
}
else {
if (QxUsersV2_Detail.DetailObj.dialogVisible == false)
{
const strMsg = Format('当前详细信息区的的对话框还没有打开，请检查！(in {0}.{1})',
this.constructor.name,
strThisFuncName,
);
console.error(strMsg);
alert(strMsg);
return null;
}
}
this.divDetail = QxUsersV2_Detail.DetailObj.$refs.refDivDetail;
if (this.divDetail == null)
{
if (QxUsersV2_Detail.times4TestShowDialog < 2)
{
QxUsersV2_Detail.times4TestShowDialog++;
setTimeout(() => {
this.getDivName();
}, 100);
}
else
{
const strMsg = Format("当前详细信息区的层(div)对象为空，请检查！(in {0}.{1})", this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return null;
}
return null;
} else {
QxUsersV2_Detail.times4TestShowDialog = 0;
}
return this.divDetail;
}

 /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
public async btnDetailRecordInTab_Click(strKeyId:string) {
const strThisFuncName = this.btnDetailRecordInTab_Click.name;
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_QxUsersV2('Detail');
if (bolIsSuccess == false) return;
try
{
 if (strKeyId == "")
{
alert("请选择需要详细信息的记录!");
return "";
}
const lngKeyId =  Number(strKeyId);
this.DetailRecord(lngKeyId);
}
catch(e)
{
const strMsg = Format("详细信息记录不成功. {0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /* 
 根据关键字详细信息记录
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord)
  <param name = "sender">参数列表</param>
*/
public async DetailRecord(intid: number):Promise<boolean> 
{
const strThisFuncName = this.DetailRecord.name;
this.btnCancelQxUsersV2 = "关闭";
try
{
const objQxUsersV2EN = await QxUsersV2_GetObjByidAsync(intid);
       if (objQxUsersV2EN == null)
        {
            const strMsg = Format("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
            return false;
        }
this.ShowDetailDataFromQxUsersV2Class(objQxUsersV2EN);
console.log("完成DetailRecord!");
}
catch(e)
{
const strMsg = Format("显示详细信息不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
            return false;
}
            return true;
}

 /* 修改记录
 (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
*/
public async btnDetailRecord_Click(strKeyId: string) {
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_QxUsersV2('Detail');
if (bolIsSuccess == false) return;
if (IsNullOrEmpty(strKeyId) == true)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
 // 为编辑区绑定下拉框
//const conBindDdl = await this.BindDdl4DetailRegion();
this.bolIsLoadDetailRegion = true;  //
const lngKeyId =  Number(strKeyId);
this.DetailRecord(lngKeyId);
}

 /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass)
  <param name = "pobjQxUsersV2EN">表实体类对象</param>
*/
public ShowDetailDataFromQxUsersV2Class(pobjQxUsersV2EN: clsQxUsersV2EN )
{
 this.createTime_d = pobjQxUsersV2EN.createTime;// 建立时间
 this.departmentIdInt_d = pobjQxUsersV2EN.departmentIdInt;// 部门Id
 this.name_d = pobjQxUsersV2EN.name;// 姓名
 this.userName_d = pobjQxUsersV2EN.userName;// 用户名
 this.password_d = pobjQxUsersV2EN.password;// 口令
 this.psalt_d = pobjQxUsersV2EN.psalt;// 密码盐值
 this.nickName_d = pobjQxUsersV2EN.nickName;// 邮箱
 this.headImg_d = pobjQxUsersV2EN.headImg;// 邮箱
 this.email_d = pobjQxUsersV2EN.email;// 邮箱
 this.phone_d = pobjQxUsersV2EN.phone;// 电话号码
 this.remark_d = pobjQxUsersV2EN.remark;// 备注
 this.status_d = pobjQxUsersV2EN.status;// 用户状态Id
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelQxUsersV2(value: string) {
QxUsersV2_Detail.DetailObj.SetButtonText('btnCancelQxUsersV2', value);
}
 /**
 * 建立时间 (Used In ShowDetailDataFromClass())
 **/
public  set createTime_d(value: string) {
 SetLabelHtmlByIdInDivObj(this.divDetail, "lblCreateTime_d", value);
}
 /**
 * 部门Id (Used In ShowDetailDataFromClass())
 **/
public  set departmentIdInt_d(value: number) {
 SetLabelHtmlByIdInDivObj(this.divDetail, "lblDepartmentIdInt_d", value !== null ? value.toString() : '');
}
 /**
 * 邮箱 (Used In ShowDetailDataFromClass())
 **/
public  set email_d(value: string) {
 SetLabelHtmlByIdInDivObj(this.divDetail, "lblEmail_d", value);
}
 /**
 * 头像 (Used In ShowDetailDataFromClass())
 **/
public  set headImg_d(value: string) {
 SetLabelHtmlByIdInDivObj(this.divDetail, "lblheadImg_d", value);
}
 /**
 * 姓名 (Used In ShowDetailDataFromClass())
 **/
public  set name_d(value: string) {
 SetLabelHtmlByIdInDivObj(this.divDetail, "lblname_d", value);
}
 /**
 * 呢称 (Used In ShowDetailDataFromClass())
 **/
public  set nickName_d(value: string) {
 SetLabelHtmlByIdInDivObj(this.divDetail, "lblnickName_d", value);
}
 /**
 * 口令 (Used In ShowDetailDataFromClass())
 **/
public  set password_d(value: string) {
 SetLabelHtmlByIdInDivObj(this.divDetail, "lblPassword_d", value);
}
 /**
 * 电话号码 (Used In ShowDetailDataFromClass())
 **/
public  set phone_d(value: string) {
 SetLabelHtmlByIdInDivObj(this.divDetail, "lblphone_d", value);
}
 /**
 * 密码盐值 (Used In ShowDetailDataFromClass())
 **/
public  set psalt_d(value: string) {
 SetLabelHtmlByIdInDivObj(this.divDetail, "lblpsalt_d", value);
}
 /**
 * 备注 (Used In ShowDetailDataFromClass())
 **/
public  set remark_d(value: string) {
 SetLabelHtmlByIdInDivObj(this.divDetail, "lblremark_d", value);
}
 /**
 * 用户状态Id (Used In ShowDetailDataFromClass())
 **/
public  set status_d(value: number) {
 SetLabelHtmlByIdInDivObj(this.divDetail, "lblstatus_d", value !== null ? value.toString() : '');
}
 /**
 * 用户名 (Used In ShowDetailDataFromClass())
 **/
public  set userName_d(value: string) {
 SetLabelHtmlByIdInDivObj(this.divDetail, "lblUserName_d", value);
}
}