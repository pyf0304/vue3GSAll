/**
 * 类名:Users_EditEx(界面:UsersCRUD)
 * 表名:Users(01120034)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/13 21:05:28
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { message } from '@/utils/myMessage';
import { Users_Edit } from '@/viewsBase/UserManage/Users_Edit';
/* Users_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class Users_EditEx extends Users_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: Users_EditEx = <Users_EditEx>Users_Edit.GetPageEditObj('Users_EditEx');
    if (objPage == null) {
      const strMsg = `从预存编辑类获取关键字:[Users_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！`;
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

  /** 函数功能:为编辑区绑定下拉框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
   **/
  public async BindDdl4EditRegionInDiv() {
    // const IdXzCollegeStatic = Users_Edit.IdXzCollegeStatic; //静态变量;//静态变量

    await this.SetDdl_UserStateIdInDiv(); //编辑区域

    await this.SetDdl_IdGradeBaseInDiv(); //编辑区域

    await this.SetDdl_IdXzCollegeInDiv(); //编辑区域

    await this.SetDdl_IdSchoolInDiv(); //编辑区域

    await this.SetDdl_IdGradeInDiv(); //编辑区域
    // await this.SetDdl_IdXzMajorInDiv(IdXzCollegeStatic); //编辑区域

    await this.SetDdl_IdentityIdInDiv(); //编辑区域
  }
  /* 函数功能:系统生成的Change事件函数
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass9_0:<Gen_Vue_Ts_GeneEventFuncEx>b__1)
*/
  public async ddlIdXzCollege_SelectedIndexChanged() {
    // alert('请在扩展层:Users_EditExEx中重写该函数!');
    const strIdXzCollege = this.idXzCollege;
    if (strIdXzCollege == '') return;
    this.SetDdl_IdXzMajorInDiv(strIdXzCollege);
  }
}
