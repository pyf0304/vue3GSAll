import { userStore } from '@/store/modulesShare/user';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsgs_KnowledgesGraphEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphEN';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { gs_KnowledgesGraph_Edit } from '@/viewsBase/Knowledges/gs_KnowledgesGraph_Edit';

/* gs_KnowledgesGraph_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_KnowledgesGraph_EditEx extends gs_KnowledgesGraph_Edit {
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage = gs_KnowledgesGraph_EditEx.objPageEdit;
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;

      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_KnowledgesGraph_EditEx.btn_Click');

        break;
    }
  }

  public async PutDataTogs_KnowledgesGraphClass(pobjgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN) {
    pobjgs_KnowledgesGraphEN.SetKnowledgeGraphName(this.knowledgeGraphName); // 知识点图名
    pobjgs_KnowledgesGraphEN.SetCourseId(this.courseId); // 课程Id
    pobjgs_KnowledgesGraphEN.SetUpdDate(clsPubFun4Web.getNowDate_ymd()); // 修改日期
    pobjgs_KnowledgesGraphEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    pobjgs_KnowledgesGraphEN.SetCreateUser(userStore.getUserId); // 修改用户Id
    pobjgs_KnowledgesGraphEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
  }
}
