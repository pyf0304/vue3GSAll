/**
 * 类名:qa_Push_EditEx(界面:qa_PushCRUD)
 * 表名:qa_Push(01120640)
 * 版本:2023.09.11.1(服务器:WIN-SRV103-116)
 * 日期:2023/09/18 04:56:29
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:互动管理(InteractManage)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";

import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsqa_PushEN } from '@/ts/L0Entity/InteractManage/clsqa_PushEN';
import { qa_Push_UpdateRecordAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_PushWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { message } from '@/utils/myMessage';
import { qa_Push_Edit } from '@/viewsBase/InteractManage/qa_Push_Edit';
/* qa_Push_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class qa_Push_EditEx extends qa_Push_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: qa_Push_EditEx = <qa_Push_EditEx>qa_Push_Edit.GetPageEditObj('qa_Push_EditEx');
    if (objPage == null) {
      const strMsg = `从预存编辑类获取对象为空，请在调用编辑类(父类)的定义一下！`;
      console.error(strMsg);
      message.warning(strMsg);
      return;
    }
    let strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPage.btnUpdateRecord_Click(strKeyId);
        }
        break;
      default:
        strMsg = Format(
          '命令:{0}, 关键字: {1}, 在函数({2}.{3})中没有被处理!',
          strCommandName,
          strKeyId,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /* 如果是被邀请回答的问题，回答完以后会更新推送表内的信息
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async btnUpdQA_Push_Click(pushId: number) {
    const strThisFuncName = this.btnUpdQA_Push_Click.name;
    const objqa_PushEN: clsqa_PushEN = new clsqa_PushEN();
    objqa_PushEN.SetPushId(pushId);
    objqa_PushEN.SetIsReceive(true);
    objqa_PushEN.SetIsReply(true);
    objqa_PushEN.SetReplyDate(clsPubFun4Web.getNowDate());
    objqa_PushEN.SetReceiveDate(clsPubFun4Web.getNowDate());
    objqa_PushEN.sfUpdFldSetStr = objqa_PushEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objqa_PushEN.pushId == 0 || objqa_PushEN.pushId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await qa_Push_UpdateRecordAsync(objqa_PushEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        message.success('当前邀请已经回复！');
      }
      return returnBool;
    } catch (e:any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
}
