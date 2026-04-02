import { Pub_PaperList } from '../GradEduPublicPage/Pub_PaperList';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { qa_Paper_Edit } from '@/viewsBase/InteractManage/qa_Paper_Edit';
import { clsqa_PaperEN } from '@/ts/L0Entity/InteractManage/clsqa_PaperEN';
import { qa_Paper_AddNewRecordWithMaxIdAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_PaperWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { GetSelectValueInDivObj, SetSelectValueByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import {
  LiteratureType_BindDdl_LiteratureTypeIdInDivCache,
  LiteratureType_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { GetHidPaperId, SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { userStore } from '@/store/modulesShare/user';
/* qa_Paper_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class qa_Paper_EditEx extends qa_Paper_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: qa_Paper_EditEx = <qa_Paper_EditEx>(
      qa_Paper_Edit.GetPageEditObj('qa_Paper_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'qa_Paper_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'qa_Paper_EditEx.btn_Click');

        break;
    }
  }

  public async btnAddNewRecordWithMaxId_Click() {
    this.opType = 'AddWithMaxId';
    try {
      const bolIsSuccess = await this.ShowDialog_qa_Paper(this.opType);
      if (bolIsSuccess == false) return;
      // 为编辑区绑定下拉框
      console.log('结束AddDPV_Edit界面');
      await this.BindDdl4EditRegionInDiv();
      console.log('结束BindDdl4EditRegion绑定');

      this.ShowDialog_qa_Paper('Add');

      //获取分享Id
      const responseText = await gs_UserConfigEx_GetNewReturnShareIdEx('11', userStore.getUserId);
      const strShareId: string = responseText;
      //const returnBool: boolean = !!responseText2;
      if (strShareId != '') {
        this.shareId = strShareId;
      }

      const objPage_Paper = new Pub_PaperList();
      await objPage_Paper.PageLoad();
      //await objPage_Paper.BindGv_vPaper();
      this.bolIsLoadEditRegion = true; //
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
*/
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const objqa_PaperEN: clsqa_PaperEN = new clsqa_PaperEN();
    this.PutDataToqa_PaperClass(objqa_PaperEN);
    try {
      const returnKeyId = await qa_Paper_AddNewRecordWithMaxIdAsync(objqa_PaperEN);

      if (IsNullOrEmpty(returnKeyId) == false) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return returnKeyId; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return '';
    }
    //return true;//一定要有一个返回值，否则会出错！
  }

  public async PutDataToqa_PaperClass(pobjqa_PaperEN: clsqa_PaperEN) {
    const divName = this.getDivName();
    pobjqa_PaperEN.SetPaperId(GetHidPaperId(divName)); // 论文Id
    pobjqa_PaperEN.SetIsPublic(true); // 是否公开
    pobjqa_PaperEN.SetIsSubmit(false); // 是否公开
    pobjqa_PaperEN.SetQuestionsCount(0);
    pobjqa_PaperEN.SetAnswerCount(0);
    pobjqa_PaperEN.SetShareId(this.shareId);
    pobjqa_PaperEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjqa_PaperEN.SetUpdUser(userStore.getUserId); // 修改日期
    pobjqa_PaperEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班id
    pobjqa_PaperEN.SetMemo(this.memo); // 备注
  }

  //////////////////////////////////////////////////////论文部分/////////////////////////////////////////////////
  //确定选择的论文 并添加到关系表中
  public async btnPaperRecordInTab_Click(strkeyId: string) {
    const divName = this.getDivName();
    if (divName == null) return;

    //存放Id
    SetHidPaperId(divName, strkeyId);

    //判断是否选择分配权限；没选择给出提示；
    //需要提示选择角色
    if (this.shareId != '' && this.shareId != '0') {
      const returnKeyId = await this.AddNewRecordWithMaxIdSave();
      if (IsNullOrEmpty(returnKeyId) == false) {
        this.HideDialog_qa_Paper();
        this.iShowList.BindGv(clsqa_PaperEN._CurrTabName, returnKeyId);
      }
    } else {
      const strInfo = `请选择分配权限下拉框!`;

      //显示信息框
      alert(strInfo);
      return;
    }
  }
  /*
   * 分享
   */
  public set shareId(value: string) {
    const divName = this.getDivName();
    SetSelectValueByIdInDivObj(divName, 'ddlShareId', value);
  }
  /*
   * 分享
   */
  public get shareId(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlShareId');
  }

  //------------------------------
  //////////////////////////////////////////////////////论文部分/////////////////////////////////////////////////

  /* 函数功能:为编辑区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
   */
  public async BindDdl4EditRegion() {
    // 在此处放置用户代码以初始化页面
    const divName = this.getDivName();
    if (divName == null) return;
    await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId'); //用户查询区域
    await LiteratureType_BindDdl_LiteratureTypeIdInDivCache(divName, 'ddlLiteratureTypeId');

    await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');
  }

  public async BindDdl_LiteratureTypeId_Cache(
    ddlLiteratureTypeId: string,
    objLiteratureType_Cond: clsLiteratureTypeEN,
  ) {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      let arrObjLst_Sel: Array<clsLiteratureTypeEN> = await LiteratureType_GetSubObjLstCache(
        objLiteratureType_Cond,
      );
      arrObjLst_Sel = arrObjLst_Sel.sort((x) =>
        x.GetFldValue(clsLiteratureTypeEN.con_LiteratureTypeId),
      );
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrObjLst_Sel,
        clsLiteratureTypeEN.con_LiteratureTypeId,
        clsLiteratureTypeEN.con_LiteratureTypeName,
        '文献类型',
      );
      console.log('完成BindDdl_LiteratureTypeId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //==============================
}
