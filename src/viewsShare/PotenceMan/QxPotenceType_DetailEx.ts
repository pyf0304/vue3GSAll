/**
 * 类名:QxPotenceType_DetailEx(界面:QxPotenceTypeCRUD)
 * 表名:QxPotenceType(00140003)
 * 版本:2024.01.16.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/20 11:36:09
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:权限管理(PotenceMan)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { QxPotenceType_Detail } from '@/viewsBase/PotenceMan/QxPotenceType_Detail';
import { QxPotenceTypeCRUDEx } from '@/viewsShare/PotenceMan/QxPotenceTypeCRUDEx';
/* QxPotenceType_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class QxPotenceType_DetailEx extends QxPotenceType_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objQxPotenceTypeCRUD: QxPotenceTypeCRUDEx = new QxPotenceTypeCRUDEx();
    const objPage: QxPotenceType_DetailEx = new QxPotenceType_DetailEx(objQxPotenceTypeCRUD);
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(QxPotenceType_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
