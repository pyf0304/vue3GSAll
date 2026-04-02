import { message } from '@/utils/myMessage';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { gs_PaperAttention_Edit } from '@/viewsBase/GradEduPaper/gs_PaperAttention_Edit';
import { clsgs_PaperAttentionEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperAttentionEN';
import { clsgs_PaperGroupEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperGroupEN';
import {
  gs_PaperAttention_AddNewRecordAsync,
  gs_PaperAttention_IsExistRecordAsync,
  gs_PaperAttention_ReFreshThisCache,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperAttentionWApi';
import {
  gs_PaperGroup_AddNewRecordWithReturnKeyAsync,
  gs_PaperGroup_GetFirstObjAsync,
  gs_PaperGroup_ReFreshCache,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperGroupWApi';
import { vgs_PaperAttention_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduPaper/clsvgs_PaperAttentionWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { userStore } from '@/store/modulesShare/user';

/* gs_PaperAttention_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PaperAttention_EditEx extends gs_PaperAttention_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;

    const objPage: gs_PaperAttention_EditEx = <gs_PaperAttention_EditEx>(
      gs_PaperAttention_Edit.GetPageEditObj('gs_PaperAttention_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_PaperAttention_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_PaperAttention_EditEx.btn_Click');

        break;
    }
  }

  //添加关注
  public async btnAttention_Click(strPaperId: string) {
    try {
      const strUserId = userStore.getUserId;

      const strWhereCond = ` 1 =1 and updUser='${strUserId}' and paperId='${strPaperId}'`;

      const responseText = await gs_PaperAttention_IsExistRecordAsync(strWhereCond);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `您已经关注过这条论文了，请关注其他论文！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const strWhereCond1 = ` updUser='${strUserId}' and paperGroupName='${clsPubLocalStorage.eduClsName}'`;

      const objgs_PaperGroup = await gs_PaperGroup_GetFirstObjAsync(strWhereCond1);

      const objgs_PaperAttentionEN: clsgs_PaperAttentionEN = new clsgs_PaperAttentionEN();
      objgs_PaperAttentionEN.SetPaperId(strPaperId);
      objgs_PaperAttentionEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
      objgs_PaperAttentionEN.SetUpdUser(strUserId); // 修改用户Id
      objgs_PaperAttentionEN.SetUserId(strUserId); // 修改用户Id
      if (objgs_PaperGroup != null) {
        objgs_PaperAttentionEN.SetPaperGroupId(objgs_PaperGroup.paperGroupId);
      } else {
        const objgs_PaperGroupEN: clsgs_PaperGroupEN = new clsgs_PaperGroupEN();
        objgs_PaperGroupEN.SetPaperGroupName(clsPubLocalStorage.eduClsName);
        objgs_PaperGroupEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
        objgs_PaperGroupEN.SetUpdUser(strUserId); // 修改用户Id

        const strPaperGroupId = await gs_PaperGroup_AddNewRecordWithReturnKeyAsync(
          objgs_PaperGroupEN,
        );
        if (strPaperGroupId != '') {
          objgs_PaperAttentionEN.SetPaperGroupId(strPaperGroupId);
          gs_PaperGroup_ReFreshCache(strUserId); //刷新论文组
        }
      }

      const returnBool = await gs_PaperAttention_AddNewRecordAsync(objgs_PaperAttentionEN);
      if (returnBool == true) {
        //this.BindGv_Paper();
        message.success('已关注！');
        vgs_PaperAttention_ReFreshThisCache(strUserId); //刷新论文关注
        gs_PaperAttention_ReFreshThisCache(strUserId); //刷新论文关注
      } else {
        const strInfo = `关注不成功!`;

        //显示信息框
        alert(strInfo);
        return false;
        //this.BindGv_vPaperSubViewpoint();
      }
      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `关注不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }
}
