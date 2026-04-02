import { userStore } from '@/store/modulesShare/user';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsgs_PaperVerEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperVerEN';
import { Paper_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import {
  gs_PaperVer_AddNewRecordAsync,
  gs_PaperVer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperVerWApi';
import { GetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { gs_PaperVer_Edit } from '@/viewsBase/GradEduPaper/gs_PaperVer_Edit';
/* gs_PaperVer_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PaperVer_EditEx extends gs_PaperVer_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;

    const objPage: gs_PaperVer_EditEx = <gs_PaperVer_EditEx>(
      gs_PaperVer_Edit.GetPageEditObj('gs_PaperVer_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_PaperVer_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_PaperVer_EditEx.btn_Click');

        break;
    }
  }
  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjPaperEN">数据传输的目的类对象</param>
   */
  public async PutDataToPaperVerClass(pobjPaperEN: clsgs_PaperVerEN) {
    const divName = this.getDivName();
    const strPaperId = GetHidPaperId(divName);
    pobjPaperEN.SetPaperId(strPaperId); // 论文Id
    pobjPaperEN.SetPaperTitle(this.paperTitle); // 论文标题
    pobjPaperEN.SetPaperContent(this.paperContent); // 主题内容
    pobjPaperEN.SetPeriodical(this.periodical); // 期刊
    pobjPaperEN.SetAuthor(this.author); // 作者
    pobjPaperEN.SetResearchQuestion(this.researchQuestion); // 研究问题
    pobjPaperEN.SetUpdDate(clsPubFun4Web.getNowDate_ymd()); // 修改日期
    pobjPaperEN.SetUpdUser(userStore.getUserId); // 修改用户Id

    pobjPaperEN.SetMemo(this.memo); // 备注
    pobjPaperEN.SetKeyword(this.keyword); // 关键字
    pobjPaperEN.SetLiteratureSources(this.literatureSources); // 文献来源
    pobjPaperEN.SetLiteratureLink(this.literatureLink); // 文献链接
    pobjPaperEN.SetLiteratureTypeId(this.literatureTypeId); //文献类型
    pobjPaperEN.SetUploadfileUrl(GetInputValueInDivObj(divName, 'hdnpic'));
    pobjPaperEN.SetIsQuotethesis(this.isQuotethesis); // 是否引用论文
    pobjPaperEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjPaperEN.SetQuoteId(this.quoteId); // 引用Id
    pobjPaperEN.SetIsChecked(this.isChecked); // 是否检查
    pobjPaperEN.SetChecker(this.checker); // 审核人

    pobjPaperEN.SetPaperTypeId(this.paperTypeId); // 论文类型
    pobjPaperEN.SetPaperStatusId(this.paperStatusId); // 论文状态
  }
  //添加历史版本
  public async AddVersionRecordSave() {
    const divName = this.getDivName();
    const strThisFuncName = this.AddVersionRecordSave.name;

    const strPaperId = GetHidPaperId(divName);
    const objgs_PaperEN: clsgs_PaperVerEN = new clsgs_PaperVerEN();
    objgs_PaperEN.SetPaperId(strPaperId);
    this.PutDataToPaperVerClass(objgs_PaperEN);

    try {
      const responseText2 = await gs_PaperVer_AddNewRecordAsync(objgs_PaperEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1=1 and paperId='${strPaperId}'`;
        const intVersionCount = await gs_PaperVer_GetRecCountByCondAsync(strWhereCond2);

        if (intVersionCount > 0) {
          const objPaperEN: clsPaperEN = new clsPaperEN();
          objPaperEN.SetPaperId(strPaperId);
          objPaperEN.SetVersionCount(intVersionCount);

          objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
          if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
            throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
          }

          Paper_UpdateRecordAsync(objPaperEN).then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == true) {
              return true;
            } else {
              const strInfo = `添加历史版本数不成功!`;
              alert(strInfo);
              console.log('添加历史版本数不成功');
              return false;
            }
          });
        }

        return true;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加版本记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }
}
