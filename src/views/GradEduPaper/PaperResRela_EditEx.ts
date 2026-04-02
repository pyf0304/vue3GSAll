//import $ from "jquery";
import { message } from '@/utils/myMessage';
import { PaperResRela_AddNewRecordAsync, PaperResRela_IsExistRecordAsync, PaperResRela_SplitKeyLst } from '@/ts/L3ForWApi/GradEduPaper/clsPaperResRelaWApi';
import { Format } from '@/ts/PubFun/clsString';
import { PaperResRela_Edit } from '@/viewsBase/GradEduPaper/PaperResRela_Edit';
import { clsPaperResRelaEN } from '@/ts/L0Entity/GradEduPaper/clsPaperResRelaEN';
/* PaperResRela_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class PaperResRela_EditEx extends PaperResRela_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string, divEdit: HTMLDivElement) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: PaperResRela_EditEx = <PaperResRela_EditEx>(
      PaperResRela_Edit.GetPageEditObj('PaperResRela_EditEx')
    );
    if (objPage == null) {
      const strMsg = `从预存编辑类获取关键字:[PaperResRela_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！`;
      console.error(strMsg);
      message.warning(strMsg);
      return;
    }
    if (objPage.divEdit.id == 'temp') {
      objPage.divEdit = divEdit;
    }
    let strMsg = '';
    let objKeyLst;
    const strKeyLst = strKeyId;
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
        objKeyLst = PaperResRela_SplitKeyLst(strKeyLst);
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(objKeyLst.paperId, objKeyLst.paperSubResId);
        } else {
          objPage.btnUpdateRecord_Click(objKeyLst.paperId, objKeyLst.paperSubResId);
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
  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSavePaperRela(strPaperId: string, lngPaperSubResId:number): Promise<boolean> {

    // const strUserId = userStore.getUserId;
    const objPaperResRelaEN: clsPaperResRelaEN = new clsPaperResRelaEN();
    this.PutDataToPaperResRelaClass(objPaperResRelaEN);

    try {
      // 同一主题 同一论文 只能添加一次；
      const strWhere = ` 1 = 1 And ${clsPaperResRelaEN.con_PaperSubResId} = ${lngPaperSubResId} And paperId = '${strPaperId}'`;
      const bolIsExist = await PaperResRela_IsExistRecordAsync(strWhere);
      if (bolIsExist == true) {
        const strMsg = `同一主题不能重复添加同一个论文！`;
        alert(strMsg);
        return false; //一定要有一个返回值，否则会出错！
      }

      const returnBool = await PaperResRela_AddNewRecordAsync(objPaperResRelaEN);
      if (returnBool == true) {
        //this.iShowList.BindGv(clsPaperResRelaEN._CurrTabName, returnBool.toString());
        return true;
      } else {
        const strInfo = `添加不成功!`;
        //显示信息框
        alert(strInfo);
        return false;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
}
