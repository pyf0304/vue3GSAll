/**
 * 类名:RTViewpoint_DetailEx(界面:RTViewpointCRUD)
 * 表名:RTViewpoint(01120955)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/04 10:00:45
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { RTViewpoint_Detail } from '@/viewsBase/GradEduTopic/RTViewpoint_Detail';
import { RTViewpointCRUDEx } from '@/views/GradEduTopic/RTViewpointCRUDEx';
/* RTViewpoint_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class RTViewpoint_DetailEx extends RTViewpoint_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objRTViewpointCRUD: RTViewpointCRUDEx = new RTViewpointCRUDEx();
    const objPage: RTViewpoint_DetailEx = new RTViewpoint_DetailEx(objRTViewpointCRUD);
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId, 0);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(RTViewpoint_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
