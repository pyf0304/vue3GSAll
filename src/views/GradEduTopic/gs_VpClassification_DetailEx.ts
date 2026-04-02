/**
 * 类名:gs_VpClassification_DetailEx(界面:gs_VpClassificationCRUD)
 * 表名:gs_VpClassification(01120958)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 18:09:20
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
import { gs_VpClassification_Detail } from '@/viewsBase/GradEduTopic/gs_VpClassification_Detail';
import { gs_VpClassificationCRUDEx } from '@/views/GradEduTopic/gs_VpClassificationCRUDEx';
/* gs_VpClassification_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class gs_VpClassification_DetailEx extends gs_VpClassification_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objgs_VpClassificationCRUD: gs_VpClassificationCRUDEx = new gs_VpClassificationCRUDEx();
    const objPage: gs_VpClassification_DetailEx = new gs_VpClassification_DetailEx(
      objgs_VpClassificationCRUD,
    );
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(gs_VpClassification_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
