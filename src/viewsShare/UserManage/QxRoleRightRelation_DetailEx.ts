/**
 * 类名:QxRoleRightRelation_DetailEx(界面:QxRoleRightRelationCRUD)
 * 表名:QxRoleRightRelation(01120957)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/29 16:21:42
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { QxRoleRightRelation_Detail } from '@/viewsBase/UserManage/QxRoleRightRelation_Detail';
import { QxRoleRightRelationCRUDEx } from '@/viewsShare/UserManage/QxRoleRightRelationCRUDEx';
/* QxRoleRightRelation_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class QxRoleRightRelation_DetailEx extends QxRoleRightRelation_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objQxRoleRightRelationCRUD: QxRoleRightRelationCRUDEx = new QxRoleRightRelationCRUDEx();
    const objPage: QxRoleRightRelation_DetailEx = new QxRoleRightRelation_DetailEx(
      objQxRoleRightRelationCRUD,
    );
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(QxRoleRightRelation_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
