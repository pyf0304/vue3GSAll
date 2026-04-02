import { Ref } from 'vue';
import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsgs_TagsTypeEN } from '@/ts/L0Entity/GradEduTools/clsgs_TagsTypeEN';
import { clsgs_TagsEN } from '@/ts/L0Entity/InteractManage/clsgs_TagsEN';
import { Paper_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { gs_TagsType_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsgs_TagsTypeWApi';
import {
  gs_Tags_DelRecordAsync,
  gs_Tags_GetObjLstAsync,
  gs_Tags_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/InteractManage/clsgs_TagsWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  HideDivInDivObj,
  SetInputValueInDivObj,
  GetAObjLstInDivObj,
  GetButtonObjLstInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  get_pdf_zoom,
  pdf_ClearSelectedText,
  pdf_GetEndElementPos,
  pdf_HighLightText,
  pdf_LocationPdfPageNum,
  pdf_SetClientType,
  pdf_getPdfPages,
  pdf_removeElementsByClass,
  set_pdf_zoom,
} from '@/ts/FunClass/clsPubFun4Pdf';
import { IShowList } from '@/ts/PubFun/IShowList';
import { gs_Tags_EditEx } from '@/views/InteractManage/gs_Tags_EditEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { gs_Tags_Edit } from '@/viewsBase/InteractManage/gs_Tags_Edit';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

declare let window: any;
/* spags_TagsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Paper_Tags implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static divLayout: HTMLDivElement;
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象

  public static EditRef: Ref<any>;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvgs_TagsBy: string = "questionsId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
  }
  async BindGvCache(strType: string, strPara: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    console.log('strPara', strPara);
    let strMsg = '';

    switch (strType) {
      case 'qa_Answer':
        break;
      case clsgs_TagsEN._CurrTabName:
        $('#div_Tags').show();
        $('#div_qa_Welcome').show();
        $('#divEditTagsRegion').hide();
        await this.SynTags();
        await this.Bind_TagsList();
        await this.Showdiv_PdfTags();
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public static btn_Click(strCommandName: string, data: any, divLayout: HTMLDivElement) {
    console.log(strCommandName, data);
    const strPaperId = data;
    const objData = data;
    const objPage = new Paper_Tags();
    let objPageEdit;
    const objLayOut = objPage.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    let arrKeyIds: Array<string> = [];
    let strKeyId = data;
    if (Paper_Tags.divDataLst != null) {
      arrKeyIds = GetCheckedKeyIdsInDivObj(Paper_Tags.divDataLst);
      strKeyId = GetFirstCheckedKeyIdInDivObj(Paper_Tags.divDataLst);
    }
    const qa_PaperId = ''; //待定
    let pdfDiv_top;
    let pdfDiv_left;
    let strMsg;
    let intPageNum;
    let strExplainContent;
    switch (strCommandName) {
      case 'ShowTags':
        intPageNum = objData.paperPageNum;
        strExplainContent = objData.pdfContent;
        pdf_LocationPdfPageNum(objData.paperPageNum, objData.pdfContent);
        pdf_HighLightText(objData.paperPageNum, objData.selectSpanRange);
        $('#hidExplainContent').val(strExplainContent);

        break;
      // objPage.btnShowTags_Click();
      case 'Showdiv_PdfTags':
        objPage.Showdiv_PdfTags();
        break;
      case 'SwitchPaper':
        SetHidPaperId(objLayOut, strPaperId);
        $('#hidqa_PaperId').val(qa_PaperId);

        // objPage.BindPdf();
        break;

      case 'SwitchPaper_Tags':
        SetHidPaperId(objLayOut, strPaperId);

        // objPage.BindPdf();
        break;
      case 'TagsSubmit':
        gs_Tags_EditEx.btnEdit_Click(strCommandName, '');
        break;
      case 'AddTags':
        pdfDiv_top = $('#iframe_qaPdf', parent.document).contents().find('#pdfDiv_top').val() ?? '';
        pdfDiv_left =
          $('#iframe_qaPdf', parent.document).contents().find('#pdfDiv_left').val() ?? '';
        $('#pdfDiv_top').val(pdfDiv_top);
        $('#pdfDiv_left').val(pdfDiv_left);

        $('#txtTagsContent').val('');
        $('#myModalLabel').html('添加标注');
        $('#btnOKUpd3').html('添加标注');

        $('#div_Tags').hide();
        $('#div_qa_Welcome').hide();
        $('#divEditTagsRegion').show();
        gs_Tags_Edit.strPageDispModeId = enumPageDispMode.Left_04;
        objPageEdit = new gs_Tags_EditEx('gs_Tags_EditEx', objPage);
        objPageEdit.divEdit = divLayout;
        // objPageEdit.questionsTypeId = '01';
        objPageEdit.pdfData = data;
        objPageEdit.divName4Edit = 'divEditRegion';
        objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'UpdateTags':
        $('#txtTagsContent').val('');
        //ShowDialog('Update');
        $('#div_Tags').hide();
        $('#div_qa_Welcome').hide();
        $('#divEditTagsRegion').show();

        $('#myModalLabel').html('修改标注');
        $('#btnOKUpd3').html('修改标注');
        gs_Tags_Edit.strPageDispModeId = enumPageDispMode.Left_04;
        objPageEdit = new gs_Tags_EditEx('gs_Tags_EditEx', objPage);
        // objPage.btnUpdateTags_Click(strKey);
        gs_Tags_EditEx.btnEdit_Click(strCommandName, data);
        break;
      case 'UpdateAnswer': //
        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        $('#divEditAnswerRegion').show();
        gs_Tags_EditEx.btnEdit_Click('UpdateAnswer', strKeyId);
        break;

      case 'ReplyAnswer': //
        gs_Tags_EditEx.answerTypeId = strKeyId;
        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        $('#divEditAnswerRegion').show();
        gs_Tags_EditEx.btnEdit_Click('AddNewAnswer', data);
        break;

      case 'AddNewAnswer': //
        gs_Tags_EditEx.answerTypeId = 'root';
        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        $('#divEditAnswerRegion').show();
        gs_Tags_EditEx.btnEdit_Click('AddNewAnswer', data);
        break;

      case 'OKUpd1':
      case 'QuestionsSubmit':
        gs_Tags_EditEx.btnEdit_Click(strCommandName, data);
        break;
      case 'DelTags': //删除记录
        objPage.btnDelTags_Click(strKeyId);
        break;
      case 'UpdateQuestions': //
        $('#div_qa_Welcome').hide();
        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        $('#divEditQuestionsRegion').show();
        gs_Tags_EditEx.btnEdit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewQuestions': //
        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        $('#divEditAnswerRegion').hide();
        $('#divEditQuestionsRegion').show();

        gs_Tags_EditEx.btnEdit_Click(strCommandName, strKeyId);

        // objPage.btnQuery_Click();
        break;
      case 'Query': //查询记录
        // objPage.btnQuery_Click();
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;

      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
          return;
        }
        // objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        // objPage.btnDelRecordInTab_Click(strKeyId);
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'Paper_Tags.btn_Click');
        break;
    }
  }
  public async PageLoad(strCommentOrder: enumCommentOrder) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //显示当前评论的观点
        await this.Bind_TagsList();
        pdf_SetClientType('Tags');
        await pdf_ClearSelectedText();
        await this.Showdiv_PdfTags();
        await this.BindDdl_gs_TagsType_Cache('ddlTagsTypeId');
        //评论列表
        //const gvResult2 = await this.btnShowAppraise_Click();
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //绑定标注下拉框
  public async BindDdl_gs_TagsType_Cache(ddlTagsTypeId: string) {
    const strWhereCond = ' 1=1 ';
    const objDdl = document.getElementById(ddlTagsTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlTagsTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      const arrObjLst_Sel: Array<clsgs_TagsTypeEN> = await gs_TagsType_GetObjLstAsync(strWhereCond);

      BindDdl_ObjLst(
        ddlTagsTypeId,
        arrObjLst_Sel,
        clsgs_TagsTypeEN.con_TagsTypeId,
        clsgs_TagsTypeEN.con_TagsTypeName,
        '标注类型',
      );
    } catch (e: any) {
      const strMsg = `根据条件获取标记类型的下拉框不成功,${e}.`;
      alert(strMsg);
    }
  }

  ////////////////////////////////////////////////////////标注维护/////////////////////////////////////////////////////////

  //绑定提问数据
  public async Bind_TagsList() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strWhereCond = `1=1 and paperId='${clsPrivateSessionStorage.paperId}' order by updDate Asc`;
    const strUserId = userStore.getUserId;

    let arrgs_TagsObjLst: Array<clsgs_TagsEN> = [];
    let arrgs_TagsObjLst0: Array<clsgs_TagsEN> = [];
    let arrgs_TagsTypeObjLst: Array<clsgs_TagsTypeEN> = [];

    try {
      //获取标注数据
      await gs_Tags_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrgs_TagsObjLst = <Array<clsgs_TagsEN>>jsonData;
      });
      await gs_TagsType_GetObjLstAsync('1=1').then((jsonData) => {
        arrgs_TagsTypeObjLst = <Array<clsgs_TagsTypeEN>>jsonData;
      });

      if (arrgs_TagsObjLst.length > 0) {
        $('#list_Tags').show();
        let strhtml = '';
        strhtml += '<div class="info" id="infoTages">';
        strhtml += '<div class="title btn-1">';
        strhtml += '<a href="javascript:void(0)" title="pdf标注">pdf标注</a>';
        strhtml += '</div><ul class="artlist">';

        let k = 0;
        for (let i = 0; i < arrgs_TagsObjLst.length; i++) {
          const objgs_Tags = arrgs_TagsObjLst[i];
          k++;
          const strTagsId = objgs_Tags.tagsId;
          strhtml += '<li>';

          strhtml += `<div id="T${strTagsId}" style="text-align:left; float:left; width:65%;">`;
          strhtml += `<span class="rowtit color1">${k}.</span>`;

          const objTagsType = arrgs_TagsTypeObjLst.find(
            (x) => x.tagsTypeId == objgs_Tags.tagsTypeId,
          );
          if (objTagsType != null) {
            strhtml += `<span class="rowtit color3">[${objTagsType.tagsTypeName}]</span>`;
          }
          let strKeyId = `${strTagsId}|${objgs_Tags.pdfPageNum}|${objgs_Tags.pdfContent.replace(
            /"/g,
            '&quot;',
          )}|${objgs_Tags.selectSpanRange}`;

          strhtml += `<span  class="title btn-2"><a id="aabtnShowTags" keyId="${strKeyId}" href="javascript:void(0)" ); class="abstract-text">${objgs_Tags.tagsContent}</a></span>`;
          strhtml += `&nbsp;<span  style="font-style:italic;" class="rowtit color2" title="第${objgs_Tags.pdfPageNum}页标记">P${objgs_Tags.pdfPageNum}</span>`;
          strhtml += '</div>';

          strhtml += '<div style="text-align:right; float:right; width:34%;">';
          if (objgs_Tags.updUser == strUserId) {
            //编辑
            strhtml += `<button id="btnUpdateTags" keyId="${strTagsId}" title="编辑标注" class="btn btn-info btn-sm" )>${clsIcon.faPenToSquare}</button>`;
            //删除
            strhtml += `<button id="btnDelTags" keyId="${strTagsId}" title="删除标注" class="btn btn-danger btn-sm") href="javascript:;">${clsIcon.faTrash}</button>`;
          }
          const strUserName = await vQxUsersSimStore.getUserName(objgs_Tags.updUser);
          if (strUserName != '') {
            let strUpdDate = objgs_Tags.updDate;
            strUpdDate = strUpdDate.substring(2, strUpdDate.length - 11);

            strhtml += `&nbsp;<span class="rowtit color4">${strUserName}/${strUpdDate}</span>&nbsp;&nbsp;`;

            //strhtml += '&nbsp;&nbsp;&nbsp;(' + objUser.userName + '&nbsp;/&nbsp;' + objgs_Tags.updDate + ')&nbsp;&nbsp;&nbsp;';
          }
          strhtml += '</div>';

          strhtml += '</li>';
          //strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div>';
          //strhtml += '<li> <div style="border-bottom: 1px solid #eee;"></div></li>';
        }
        strhtml += '<li>';
        strhtml += '<div style="text-align:left; float:left; width:99%;">';
        for (let j = 0; j < arrgs_TagsTypeObjLst.length; j++) {
          arrgs_TagsObjLst0 = arrgs_TagsObjLst.filter(
            (x) => x.tagsTypeId == arrgs_TagsTypeObjLst[j].tagsTypeId,
          );
          if (arrgs_TagsObjLst0.length > 0) {
            strhtml += `${arrgs_TagsTypeObjLst[j].tagsTypeName}:${arrgs_TagsObjLst0.length}个标注;&nbsp;`;
          }
        }
        strhtml += '</div>';
        strhtml += '</li>';
        strhtml += '</ul>';
        strhtml += '</div>';

        //拼接；
        $('#list_Tags').html(strhtml);
        if (arrgs_TagsObjLst.length > 0) {
          this.SetEventForTags();
        }
      }
      //else {
      //    $("#list_Tags").hide();
      //}
      console.log('完成BindGv_gs_Tags!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public SetEventForTags() {
    {
      const arrabtnShowTags = GetAObjLstInDivObj(Paper_Tags.divLayout, 'aabtnShowTags');
      for (const aabtnShowTags of arrabtnShowTags) {
        if (aabtnShowTags != null) {
          const strKeyId = aabtnShowTags.getAttribute('keyid');
          if (strKeyId != null) {
            const arr = strKeyId.split('|');
            if (arr.length != 4) {
              const strMsg = `在执行btnShowTags_Click过程中，参数数目不正确！`;
              console.error(strMsg);
              alert(strMsg);
              return;
            }
            const objData = {
              paperPageNum: Number(arr[1]),
              pdfContent: arr[2],
              selectSpanRange: arr[3],
            };
            (function (objData) {
              aabtnShowTags.onclick = function () {
                Paper_Tags.vuebtn_Click('ShowTags', objData);
              };
            })(objData);
          }
        }
      }
      //console.log('btnDelSubViewPoint:', btnDelSubViewPoint);
      {
        const arrbtnUpdateTags = GetButtonObjLstInDivObjN(Paper_Tags.divLayout, 'btnUpdateTags');
        for (const btnUpdateTags of arrbtnUpdateTags) {
          if (btnUpdateTags != null) {
            const strKeyId = btnUpdateTags.getAttribute('keyid');
            if (strKeyId != null) {
              (function (strKeyId: string) {
                btnUpdateTags.onclick = function () {
                  Paper_Tags.vuebtn_Click('UpdateTags', strKeyId);
                };
              })(strKeyId);
            }
          }
        }
      }

      {
        const arrbtnDelTags = GetButtonObjLstInDivObjN(Paper_Tags.divLayout, 'btnDelTags');
        for (const btnDelTags of arrbtnDelTags) {
          if (btnDelTags != null) {
            const strKeyId = btnDelTags.getAttribute('keyid');
            if (strKeyId != null) {
              (function (strKeyId: string) {
                btnDelTags.onclick = function () {
                  Paper_Tags.vuebtn_Click('DelTags', strKeyId);
                };
              })(strKeyId);
            }
          }
        }
      }
    }
  }
  //显示pdf标注
  public async Showdiv_PdfTags() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strWhereCond = `1=1 and paperId='${clsPrivateSessionStorage.paperId}'`;
    // const iframeElement = $('#iframe_qaPdf')[0] as HTMLIFrameElement;
    // if (iframeElement == null) return;
    // if (iframeElement.contentWindow == null) return;
    //const objgs_Tags: clsgs_TagsEN = null;

    let arrgs_TagsObjLst: Array<clsgs_TagsEN> = [];

    try {
      arrgs_TagsObjLst = await gs_Tags_GetObjLstAsync(strWhereCond);

      //strhtml = "";
      //strIdCurrEduclsstrPdfDivTop_Left = "";
      //$("#pdfdivTop_Left div").remove();

      //arrgs_TagsObjLst = arrgs_TagsObjLst0.filter(x => x.pdfPageNum = this.pdfPageNum);

      // console.log('共移除元素:', intCount);
      pdf_removeElementsByClass('.TagsCss');
      for (let i = 0; i < arrgs_TagsObjLst.length; i++) {
        const objgs_Tags = arrgs_TagsObjLst[i];

        pdf_HighLightText(objgs_Tags.pdfPageNum, objgs_Tags.selectSpanRange);
        const strPdfPageNum = objgs_Tags.pdfPageNum;
        const strTagsId = objgs_Tags.tagsId;
        //strIdCurrEduclsstrPdfDivTop: number = Number(objgs_Tags.pdfDivTop) - 20;
        //strIdCurrEduclsstrPdfDivLet: number = Number(objgs_Tags.pdfDivLet);
        const strTagsContent = objgs_Tags.tagsContent;

        //strUpdUser = objgs_Tags.updUser;

        //如果zoom是auto的那么就默认赋值110
        let Currpdf_zoom = 0;
        if (this.pdf_zoom == 'auto') {
          Currpdf_zoom = 110;
        } else {
          Currpdf_zoom = Number(this.pdf_zoom);
        }

        let Datapdf_zoom = 0;
        if (objgs_Tags.pdfZoom == 'auto') {
          Datapdf_zoom = 110;
        } else {
          Datapdf_zoom = Number(objgs_Tags.pdfZoom);
        }

        //strIdCurrEduclsDatapdf_zoom: number = Number(objgs_Tags.pdfZoom);
        let strPdfDivTop = Number(objgs_Tags.pdfDivTop);
        let strPdfDivLet = Number(objgs_Tags.pdfDivLet);

        if (Currpdf_zoom > Datapdf_zoom) {
          let ZoomValue = Currpdf_zoom - Datapdf_zoom;
          ZoomValue = ZoomValue - ZoomValue / 10;
          //获得换算后的top值
          strPdfDivTop = strPdfDivTop + strPdfDivTop * (ZoomValue / 100);
          //获得换算后的top值
          strPdfDivLet = strPdfDivLet + strPdfDivLet * (ZoomValue / 100);

          strPdfDivTop = strPdfDivTop - 20; //补充值，为了标记放置在文字的上面
        } else if (Currpdf_zoom < Datapdf_zoom) {
          let ZoomValue = Datapdf_zoom - Currpdf_zoom;
          ZoomValue = ZoomValue + ZoomValue / 10;
          //获得换算后的top值
          strPdfDivTop = strPdfDivTop - strPdfDivTop * (ZoomValue / 100);
          //获得换算后的top值
          strPdfDivLet = strPdfDivLet - strPdfDivLet * (ZoomValue / 100);

          strPdfDivTop = strPdfDivTop - 20; //补充值，为了标记放置在文字的上面
        } else {
          strPdfDivTop = strPdfDivTop - 20; //补充值，为了标记放置在文字的上面
        }

        //SetDivLertTop(objgs_Tags.pdfPageNum, strPdfDivTop_Left);
        //SetDivLertTop(strPdfPageNum, strTagsId, strPdfDivTop, strPdfDivLet, strTagsContent);

        //$("#iframe_qaPdf")[0].contentWindow.SetTagsLertTop(strPdfPageNum, strTagsId, strPdfDivTop, strPdfDivLet, strTagsContent, strUpdUser, strUserId);

        //strIdCurrEduclspdfPage = window.frames["iframe_qaPdf"].contentDocument.getElementsByClassName("page");

        // = window.parent.frames['iframe_qaPdf'].contentDocument.getElementsByClassName('page');
        const pdfPage = pdf_getPdfPages();
        // console.log('pdfPage:', pdfPage);

        if (pdfPage == null) return;
        if (pdfPage.length == 0) return;

        for (let j = 0; j <= pdfPage.length; j++) {
          if (strPdfPageNum == 0) continue;
          if (strPdfPageNum == j) {
            const endPos = pdf_GetEndElementPos(objgs_Tags.pdfPageNum, objgs_Tags.selectSpanRange);
            // console.log('endPos:', endPos);
            // console.log('strPdfDivLet:', strPdfDivLet);
            // console.log('strPdfDivTop:', strPdfDivTop);
            if (endPos == null) continue;
            if (endPos.x == 0 && endPos.y == 0) continue;
            const div = document.createElement('a');
            strPdfDivLet = endPos.x - 0;
            strPdfDivTop = endPos.y - 20;
            div.className = 'TagsCss';
            div.href = 'javascript:void(0)';
            div.style.left = `${strPdfDivLet}px`;
            div.style.top = `${strPdfDivTop}px`;
            div.style.position = 'absolute';
            div.style.zIndex = '999';
            div.title = strTagsContent;
            div.id = strTagsId;

            div.setAttribute('onclick', `btnUpdateTags_Click('${strTagsId}')`);

            const vari = document.createElement('img');
            vari.style.lineHeight = '32px';
            vari.src = '../images/001_50.png';

            div.appendChild(vari);

            pdfPage[j - 1].appendChild(div);
          }
        }
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* pdf标记删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   */
  public async btnDelTags_Click(strTagsId: string) {
    try {
      await this.DelRecord3(strTagsId);
      await this.SynTags();

      await this.Bind_TagsList();
      await this.Showdiv_PdfTags();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
   根据关键字删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
  */
  public async DelRecord3(strTagsId: string) {
    try {
      const responseText = await gs_Tags_DelRecordAsync(strTagsId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        const strInfo = `删除记录成功!`;
        //显示信息框
        message.success(strInfo);
        //alert(strInfo);
      } else {
        const strInfo = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //添加删除标记的时候统计问题数据量到论文答疑表
  public async SynTags() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strThisFuncName = this.SynTags.name;

    const strPaperId = clsPrivateSessionStorage.paperId;
    //添加记录的同时并记录论文读写的教师评价数
    const strWhereCond = ` paperId='${strPaperId}'`;
    const intTagsCount = await gs_Tags_GetRecCountByCondAsync(strWhereCond);

    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strPaperId);
    objPaperEN.SetTagsCount(intTagsCount);

    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    const responseText = await Paper_UpdateRecordAsync(objPaperEN);
    const returnBool = !!responseText;
    if (returnBool == true) {
      //刷新缓存
      console.log('添加标注数量成功！');
    } else {
      console.log('添加标注数量失败！');
    }
    //添加记录的同时并记录论文读写的教师评价数
  }

  /*******************************************添加高亮************************************************/

  //添加高亮
  public btnUpdatePaperPageNum_Click(strFindText: string) {
    this.RemoveSelect();
    //const objLst = document.getElementsByTagName("span");
    const objLst =
      window.parent.frames['iframe_qaPdf'].contentDocument.getElementsByTagName('span');
    //strIdCurrEduclsstrStartName: string = "400%";
    const arrElement: Array<HTMLElement> = this.GetArray(objLst) as Array<HTMLElement>;
    //let arrSpan
    const arrFind: Array<HTMLSpanElement> = arrElement as Array<HTMLSpanElement>;
    //let arrFind: Array<HTMLSpanElement> = arrSpan.filter(x => x.id.indexOf(strStartName) > -1);

    const arrWord: Array<string> = arrFind.map((x) => x.innerText);

    let strWord = arrWord.join('');
    const intWord = strWord.indexOf('400%');
    strWord = strWord.substring(intWord);

    //let strFindText = GetInputValueInDivObj(divName, 'hidExplainContent');
    let intStart = strWord.indexOf(strFindText);
    if (intStart > -1) {
      let strInnerText = arrFind[intStart].innerText;
      let strCurrWord = strWord.substring(0, 1);
      // const intWordIndex = 0;
      const bolFind = false;
      let intCompareIndex = 0;
      while (bolFind == false) {
        strInnerText = arrFind[intStart + intCompareIndex].innerText;
        strCurrWord = strFindText.substring(intCompareIndex, intCompareIndex + 1);
        console.log(`${strInnerText}--${strCurrWord}`);
        if (strInnerText == strCurrWord) {
          intCompareIndex++;
          if (intCompareIndex >= strFindText.length) break;
          continue;
        } else {
          intStart++;
          intCompareIndex = 0;
          if (intStart > arrFind.length - 2) {
            break;
          }
        }
      }
      const intLen = strFindText.length;
      const intEnd = intStart + intLen;
      const arrSpan_Sel: Array<HTMLSpanElement> = arrFind.slice(intStart, intEnd);
      arrSpan_Sel.forEach((x) => {
        const strWord = x.innerText;
        //const objSpan_New: HTMLSpanElement = document.createElement("span");
        const objSpan_New: HTMLSpanElement =
          window.parent.frames['iframe_qaPdf'].contentDocument.createElement('span');
        objSpan_New.className = 'text-span';
        objSpan_New.innerText = strWord;
        x.innerHTML = '';
        x.appendChild(objSpan_New);
      });
    }
  }
  /// <summary>
  /// 把Html控件集合转换成Array列表
  /// (AutoGCLib.WA_ViewUTScriptCS_TS4TypeScript:Gen_WApi_Ts_GetArray)
  /// </summary>
  /// <returns></returns>
  public GetArray(arr: any): Array<HTMLElement> {
    const arrLst: Array<HTMLElement> = new Array<HTMLElement>();
    for (let i = 0; i < arr.length; i++) {
      const chk: HTMLElement = arr[i]; // as HTMLElement;
      arrLst.push(chk);
    }
    return arrLst;
  }
  //清除高亮
  public RemoveSelect() {
    //const objLst = document.getElementsByTagName("span");
    const objLst =
      window.parent.frames['iframe_qaPdf'].contentDocument.getElementsByTagName('span');
    //strIdCurrEduclsstrStartName: string = "divEditFldComparison";
    const arrElement: Array<HTMLElement> = this.GetArray(objLst) as Array<HTMLElement>;
    const arrSpan: Array<HTMLSpanElement> = arrElement as Array<HTMLSpanElement>;
    const arrSpan_Sel: Array<HTMLSpanElement> = arrSpan.filter((x) => x.className == 'text-span');

    arrSpan_Sel.forEach((x) => {
      const strWord = x.innerText;
      const objSpan_Parent = x.parentNode as HTMLSpanElement;
      objSpan_Parent.innerHTML = strWord;
    });
  }

  /*
   * 序号
   */
  public set orderNum(value: number) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    SetInputValueInDivObj(objLayOut, 'txtOrderNum', value);
  }
  /*
   * 序号
   */
  public get orderNum(): number {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObjN(objLayOut, 'txtOrderNum');
  }

  /*
   * 提问内容
   */
  public set questionsContent(value: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    SetInputValueInDivObj(objLayOut, 'txtQuestionsContent', value);
  }
  /*
   * 提问内容
   */
  public get questionsContent(): string {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(objLayOut, 'txtQuestionsContent');
  }

  /*
   * 答案内容
   */
  public set answerContent(value: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    SetInputValueInDivObj(objLayOut, 'txtAnswerContent', value);
  }
  /*
   * 答案内容
   */
  public get answerContent(): string {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(objLayOut, 'txtAnswerContent');
  }

  /*
   * 设置操作类型：Add||Update||Detail
   */
  public set opType(value: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);

    SetInputValueInDivObj(objLayOut, 'hidOpType', value);
  }
  /*
   * 设置操作类型：Add||Update||Detail
   */
  public get opType(): string {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(objLayOut, 'hidOpType');
  }

  /*
   * 设置关键字的值
   */
  public set tagsId(value: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    SetInputValueInDivObj(objLayOut, 'hidTagsId', value);
  }
  /*
   * 设置关键字的值
   */
  public get tagsId(): string {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(objLayOut, 'hidTagsId');
  }

  /*
   * 设置关键字的值
   */
  public set hidPdfContent(value: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    SetInputValueInDivObj(objLayOut, 'hidPdfContent', value);
  }
  /*
   * 设置关键字的值
   */
  public get hidPdfContent(): string {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(objLayOut, 'hidPdfContent');
  }

  /*
   * 设置关键字的值
   */
  public set answerId(value: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    SetInputValueInDivObj(objLayOut, 'hidAnswerId', value);
  }
  /*
   * 设置关键字的值
   */
  public get answerId(): string {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(objLayOut, 'hidAnswerId');
  }

  /*
   * 是否要求回复
   */
  public set isRequestReply(value: boolean) {
    $('#chkIsRequestReply').attr('checked', value.toString());
  }
  /*
   * 是否要求回复
   */
  public get isRequestReply(): boolean {
    return $('#chkIsRequestReply').prop('checked');
  }

  /*
   * pdf标注内容
   */
  public set tagsContent(value: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    SetInputValueInDivObj(objLayOut, 'txtTagsContent', value);
  }
  /*
   * pdf标注内容
   */
  public get tagsContent(): string {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(objLayOut, 'txtTagsContent');
  }

  /******************************************************************iFrame子页面控件******************************************************/
  /**
   * 获取div对象，根据不同的div类型
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_GetDivName)
   **/
  public getDivName(strDivType: enumDivType): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    let divName;
    let divTypeName;
    let strMsg;
    switch (strDivType) {
      case enumDivType.LayOut_01:
        divName = Paper_Tags.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = Paper_Tags.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = Paper_Tags.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = Paper_Tags.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = Paper_Tags.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = Paper_Tags.divPager;
        divTypeName = 'divPager';
        break;
      default:
        strMsg = `获取div对象时，DivType =${strDivType}没有被处理，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return null;
        break;
    }
    if (divName == null) {
      strMsg = `当前${divTypeName}层(div)对象为空，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
      return null;
    }
    return divName;
  }

  /*
   * pdf_zoom
   */
  public set pdf_zoom(value: string) {
    //$("#hidPdfPageNum").val(value);
    //$("#iframe_qaPdf").contents().find("#pdf_zoom").val(value);
    set_pdf_zoom('iframe_qaPdf', 'pdf_zoom', value);
  }
  /*
   * pdf_zoom
   */
  public get pdf_zoom(): string {
    //return $("#hidPdfPageNum").val();
    //return $("#iframe_qaPdf").contents().find("#pdf_zoom").val();
    return get_pdf_zoom('iframe_qaPdf', 'pdf_zoom');
  }
  /**
   * 获取当前界面的主表名
   **/
  public get thisTabName(): string {
    return 'Paper_Tags';
  }
}
