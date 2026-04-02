/**
 * 类名:QxPrjMenus_DetailEx(界面:QxPrjMenusCRUD)
 * 表名:QxPrjMenus(00140004)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/02 01:11:37
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { QxPrjMenus_Detail } from '@/viewsBase/MenuManage_GP/QxPrjMenus_Detail';
import { QxPrjMenusCRUDEx } from '@/viewsShare/MenuManage_GP/QxPrjMenusCRUDEx';
/* QxPrjMenus_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class QxPrjMenus_DetailEx extends QxPrjMenus_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objQxPrjMenusCRUD: QxPrjMenusCRUDEx = new QxPrjMenusCRUDEx();
    const objPage: QxPrjMenus_DetailEx = new QxPrjMenus_DetailEx(objQxPrjMenusCRUD);
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(QxPrjMenus_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
