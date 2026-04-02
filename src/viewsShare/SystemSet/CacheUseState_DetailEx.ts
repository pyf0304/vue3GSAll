/**
 * 类名:CacheUseState_DetailEx(界面:CacheUseStateCRUD)
 * 表名:CacheUseState(00050566)
 * 版本:2023.06.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/25 12:31:47
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:系统设置(SystemSet)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { CacheUseState_Detail } from '@/viewsBase/SystemSet/CacheUseState_Detail';
import { CacheUseStateCRUDEx } from '@/viewsShare/SystemSet/CacheUseStateCRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
/* CacheUseState_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class CacheUseState_DetailEx extends CacheUseState_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objCacheUseStateCRUD: CacheUseStateCRUDEx = new CacheUseStateCRUDEx();
    const objPage: CacheUseState_DetailEx = new CacheUseState_DetailEx(objCacheUseStateCRUD);
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'CacheUseState_DetailEx.btnClick');
        alert(strMsg);
        break;
    }
  }
}
