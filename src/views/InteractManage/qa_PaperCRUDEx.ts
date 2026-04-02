import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { Pub_PaperList } from '../GradEduPublicPage/Pub_PaperList';
import { qa_Paper_EditEx } from './qa_Paper_EditEx';
import { qa_PaperCRUD } from '@/viewsBase/InteractManage/qa_PaperCRUD';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsqa_PushEN } from '@/ts/L0Entity/InteractManage/clsqa_PushEN';
import { clsvqa_PushEN } from '@/ts/L0Entity/InteractManage/clsvqa_PushEN';
import { clsvqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsvqa_QuestionsEN';
import {
  qa_Push_GetRecCountByCondAsync,
  qa_Push_UpdateRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_PushWApi';
import { vqa_Push_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsvqa_PushWApi';
import {
  vqa_Questions_GetObjByQuestionsIdAsync,
  vqa_Questions_GetObjLstByPagerAsync,
  vqa_Questions_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/InteractManage/clsvqa_QuestionsWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { userStore } from '@/store/modulesShare/user';

declare function xadminopen(str1: string, str2: string): void;
declare let window: any;
/* qa_PaperCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class qa_PaperCRUDEx extends qa_PaperCRUD implements IShowList {
  public static GetPropValue: (strPropName: string) => string;
  public static mstrListDiv = 'divDataLst';

  //论文列表

  public mstrListDivPaper = 'divPaperDataLst';
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    this.BindGv_vqa_Paper(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vqa_Paper':
        alert('该类没有绑定该函数：[this.BindGv_vqa_Paper_Cache]！');
        //this.BindGv_vqa_PaperCache();;
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName = this.getDivName(enumDivType.LayOut_01);
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //建立缓存
        //
        // 为查询区绑定下拉框
        //await this.BindDdl4QueryRegion();

        qa_PaperCRUD.sortvqa_PaperBy = 'updDate Desc';
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vqa_Paper(this.thisDivList);
        await this.Bind_QuestionsCount();
        if (Number(GetInputValueInDivObj(divName, 'hidQuestionsCount')) > 0) {
          await this.BindGv_vqa_Push();
        }
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /****************************************************答疑邀请相关 Start***************************************************/

  public Combinevqa_PushCondition(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      strWhereCond += ` and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
      strWhereCond += ` and receiveUser='${userStore.getUserId}' and isReceive=0`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combineqa_PaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //答疑被邀请数
  public async Bind_QuestionsCount() {
    try {
      //strWhereCond = " 1=1 and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
      //strWhereCond += " and receiveUser='" + userStore.getUserId + "' and isReceive=0";
      const strWhereCond = await this.Combinevqa_PushCondition();
      const intQuestionsCount = await qa_Push_GetRecCountByCondAsync(strWhereCond);
      $('#questionsCount').html(intQuestionsCount.toString());
      $('#hidQuestionsCount').val(intQuestionsCount);
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //绑定答疑被邀请列表
  public async BindGv_vqa_Push() {
    let strWhereCond = await this.Combinevqa_PushCondition();
    strWhereCond += ' order by updDate Asc';
    //intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
    let arrvqa_PushObjLst: Array<clsvqa_PushEN> = [];
    try {
      //this.recCount = await vqa_Push_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {

      //});
      //const objPagerPara: stuPagerPara = {
      //    pageIndex: intCurrPageIndex,
      //    pageSize: this.pageSize,
      //    whereCond: strWhereCond,
      //    orderBy: "updDate Asc"
      //};
      //const responseObjLst = await vqa_Push_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
      //    arrvqa_PushObjLst = <Array<clsvqa_PushEN>>jsonData;
      //});
      await vqa_Push_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrvqa_PushObjLst = <Array<clsvqa_PushEN>>jsonData;
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定推送数据不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvqa_PushObjLst.length > 10) {
    //    $("#divPager").show();
    //}
    try {
      let strhtml = '';
      strhtml += '<div class="info" id="infoSubViewpoint">';
      //strhtml += '<div class="title btn-2">';
      //strhtml += '<a href="javascript:void(0)" title="当前pdf论文上的第几页一共有几个问题">第' + arrvqa_PdfPageNumObjLst[j].pdfPageNum + '页上的' + arrvqa_QuestionsObjLst.length + '个问题</a>';
      ////strhtml += '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加问题" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btnAddNewQuestions_Click();> <i class="layui-icon" ></i>添加问题</button></div>';
      //strhtml += '</div><ul class="artlist">';
      strhtml += '<ul class="artlist">';

      let k = 0;
      for (let i = 0; i < arrvqa_PushObjLst.length; i++) {
        k++;
        strhtml += `<li id="li${arrvqa_PushObjLst[i].questionsId}">&nbsp;&nbsp;&nbsp;<span class="rowtit color1">${k}、</span>`;
        //strhtml += '&nbsp;<span class="rowtit color2" title="该问题在pdf的第' + arrvqa_PushObjLst[i].pdfPageNum + '页有标注">[' + arrvqa_PushObjLst[i].pdfPageNum + ']</span>';
        strhtml += `<span class="title btn-1"><a href="javascript:void(0)"  class="abstract-text">${arrvqa_PushObjLst[i].questionsContent}</a></span>`;
        //strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span title="当前问题已经有' + arrvqa_PushObjLst[i].answerCount + '个回答" class="badge badge-info">' + arrvqa_PushObjLst[i].answerCount + '</span>';
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="badge badge-primary" title="该问题在pdf的第${arrvqa_PushObjLst[i].pdfPageNum}页有标注">${arrvqa_PushObjLst[i].pdfPageNum}页</span>`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="badge badge-pill badge-success" title="当前问题已经有${arrvqa_PushObjLst[i].answerCount}个回答" >${arrvqa_PushObjLst[i].answerCount}</span>`;

        //回复
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button title="回复" class="layui-btn layui-btn layui-btn-xs" onclick=btnQA_PushRecord_Click("${arrvqa_PushObjLst[i].paperId}","${arrvqa_PushObjLst[i].questionsId}","${arrvqa_PushObjLst[i].pushId}")>${clsIcon.spanCircleQuestion}</button>`;

        //忽略
        strhtml += `&nbsp;<button title="忽略" class="btn-danger btn btn-sm" onclick=btnUpdQA_Push_Click("${arrvqa_PushObjLst[i].pushId}") href="javascript:;">${clsIcon.faTrash}</button>`;

        strhtml += '</li>';
        strhtml += '<li style="text-align:right;>';
        strhtml += `<span class="rowtit color5">[提问人]：</span>${arrvqa_PushObjLst[i].userName}&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[提问时间]：</span>${arrvqa_PushObjLst[i].updDate}`;
        strhtml += '</li>';

        //strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div>';
        //strhtml += '<li> <div style="border-bottom: 1px solid #eee;"></div></li>';
      }
      strhtml += '</ul>';
      strhtml += '</div>';

      //拼接；
      $('#home').html(strhtml);
      console.log('完成BindGv_vqa_Push!');
      //历史答疑邀请
      await this.BindGv_History_vqa_Push();
      console.log('完成BindGv_History_vqa_Push!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定推送列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //绑定历史答疑被邀请列表
  public async BindGv_History_vqa_Push() {
    let strWhereCond = '1=1';
    strWhereCond += ` and idCurrEduCls=${clsPubLocalStorage.idCurrEduCls}`;
    strWhereCond += ` and receiveUser='${userStore.getUserId}' and isReceive=1`;
    strWhereCond += ' order by updDate Desc';
    //intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
    let arrvqa_PushObjLst: Array<clsvqa_PushEN> = [];
    try {
      //this.recCount = await vqa_Push_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {

      //});
      //const objPagerPara: stuPagerPara = {
      //    pageIndex: intCurrPageIndex,
      //    pageSize: this.pageSize,
      //    whereCond: strWhereCond,
      //    orderBy: "updDate Asc"
      //};
      //const responseObjLst = await vqa_Push_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
      //    arrvqa_PushObjLst = <Array<clsvqa_PushEN>>jsonData;
      //});
      await vqa_Push_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrvqa_PushObjLst = <Array<clsvqa_PushEN>>jsonData;
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定推送数据不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvqa_PushObjLst.length > 10) {
    //    $("#divPager").show();
    //}
    try {
      let strhtml = '';
      strhtml += '<div class="info" id="infoSubViewpoint">';
      //strhtml += '<div class="title btn-2">';
      //strhtml += '<a href="javascript:void(0)" title="当前pdf论文上的第几页一共有几个问题">第' + arrvqa_PdfPageNumObjLst[j].pdfPageNum + '页上的' + arrvqa_QuestionsObjLst.length + '个问题</a>';
      ////strhtml += '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加问题" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btnAddNewQuestions_Click();> <i class="layui-icon" ></i>添加问题</button></div>';
      //strhtml += '</div><ul class="artlist">';
      strhtml += '<ul class="artlist">';

      let k = 0;
      for (let i = 0; i < arrvqa_PushObjLst.length; i++) {
        k++;
        strhtml += `<li id="li${arrvqa_PushObjLst[i].questionsId}">&nbsp;&nbsp;&nbsp;<span class="rowtit color3">${k}、</span>`;
        strhtml += `<span class="title btn-3"><a href="javascript:void(0)"  class="abstract-text">${arrvqa_PushObjLst[i].questionsContent}</a></span>`;
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="badge badge-primary" title="该问题在pdf的第${arrvqa_PushObjLst[i].pdfPageNum}页有标注">${arrvqa_PushObjLst[i].pdfPageNum}页</span>`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="badge badge-pill badge-success" title="当前问题已经有${arrvqa_PushObjLst[i].answerCount}个回答" >${arrvqa_PushObjLst[i].answerCount}</span>`;

        //回复
        //strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button title="回复" class="layui-btn layui-btn layui-btn-xs" onclick=btnQA_PushRecord_Click("' + arrvqa_PushObjLst[i].qaPaperId + '","' + arrvqa_PushObjLst[i].questionsId + '","' + arrvqa_PushObjLst[i].pushId + '")>${clsIcon.spanCircleQuestion}</button>';
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button title="回复" class="layui-btn layui-btn layui-btn-xs" onclick=btnQA_PushRecord_Click("${arrvqa_PushObjLst[i].paperId}","${arrvqa_PushObjLst[i].questionsId}","${arrvqa_PushObjLst[i].pushId}","${arrvqa_PushObjLst[i].idCurrEduCls}")>${clsIcon.spanCircleQuestion}</button>`;

        strhtml += '</li>';
        strhtml += '<li style="text-align:right;>';

        strhtml += `<span class="rowtit color5">[提问人]：</span>${arrvqa_PushObjLst[i].userName}&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[提问时间]：</span>${arrvqa_PushObjLst[i].updDate}`;
        if (arrvqa_PushObjLst[i].isReply == true) {
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color1">[已回复]：</span>';
        } else {
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color2">[已忽略]：</span>';
        }
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[回复时间]：</span>${arrvqa_PushObjLst[i].replyDate}`;
        strhtml += '</li>';

        //strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div>';
        //strhtml += '<li> <div style="border-bottom: 1px solid #eee;"></div></li>';
      }
      strhtml += '</ul>';
      strhtml += '</div>';

      //拼接；
      $('#menu1').html(strhtml);
      console.log('完成BindGv_vqa_Push!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定推送列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //被邀请跳转到pdf答疑页面并回复
  //public async btnQA_PushRecord_Click(strqa_PaperId: string, strQuestionsId: string, strPushId: string) {
  //    strIdCurrEduclsstrReadWriteTypeId = $("#hidReadWriteTypeId").val();
  //    strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
  //    const objqa_Paper: clsqa_PaperEN;
  //    const objPaperAttachment: clsPaperAttachmentEN;

  //    strWhereCond1 = " 1=1 and qaPaperId ='" + strqa_PaperId + "'";
  //    try {
  //        const responseText1 = await qa_Paper_GetFirstObjAsync(strWhereCond1);
  //        objqa_Paper = <clsqa_PaperEN>responseText1;
  //        strWhereCond2 = " 1=1 and paperId ='" + objqa_Paper.paperId + "'";
  //        const responseText2 = await PaperAttachment_GetFirstObjAsync(strWhereCond2);
  //        objPaperAttachment = <clsPaperAttachmentEN>responseText2;

  //        if (objPaperAttachment != null) {
  //            strfilepath = strAddressAndPort + objPaperAttachment.filePath;
  //            window.location.href = "../InteractManage/Pdf_QA?zoom=1.1&idCurrEduCls=" + strIdCurrEducls + "&qaPaperId=" + strqa_PaperId + "&questionsId=" + strQuestionsId + "&pushId=" + strPushId + "&file=" + strfilepath;
  //        } else {
  //            window.location.href = "../InteractManage/Pdf_QA?zoom=1.1&idCurrEduCls=" + strIdCurrEducls + "&qaPaperId=" + strqa_PaperId + "&questionsId=" + strQuestionsId + "&pushId=" + strPushId;
  //        }
  //    }
  //    catch (e:any) {
  //        console.error('catch(e)=');
  //        console.error(e);
  //        strIdCurrEduclsstrMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
  //        alert(strMsg);
  //    }
  //}

  /* 忽略被邀请，
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async btnUpdQA_Push_Click(pushId: number) {
    const strThisFuncName = this.btnUpdQA_Push_Click.name;

    const objqa_PushEN: clsqa_PushEN = new clsqa_PushEN();
    objqa_PushEN.SetPushId(pushId);
    objqa_PushEN.SetIsReceive(true);
    objqa_PushEN.SetIsReply(false);
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
        message.success('当前邀请已经被忽略！');
        await this.Bind_QuestionsCount();
        await this.BindGv_vqa_Push();
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /****************************************************答疑邀请相关 End***************************************************/

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async Combinevqa_PaperCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ' 1 = 1 ';
    //strWhereCond += " and isPublic=1";
    strWhereCond += ` and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsvqa_QuestionsEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }
      // if (this.questionsContent != '') {
      //   strWhereCond += ` And ${clsvqa_QuestionsEN.con_QuestionsContent} like '%${this.questionsContent}%'`;
      // }
      if (this.userName_q != '') {
        strWhereCond += ` And ${clsvqa_QuestionsEN.con_UserName} like '%${this.userName_q}%'`;
      }
      if (this.updDate_q != '') {
        strWhereCond += ` And ${clsvqa_QuestionsEN.con_UpdDate} like '%${this.updDate_q}%'`;
      }
      if (this.typeId == '2') {
        $('#MyQA').hide();
        $('#FunInfo').show();
        //$('#btnAddNewRecord').show();
        //$('#btnDelRecord').show();
        strWhereCond += ` and updUser='${userStore.getUserId}'`;
      } else {
        $('#MyQA').show();
        $('#FunInfo').hide();
        //$('#btnDelRecord').hide();
        //$('#btnAddNewRecord').hide();
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combineqa_PaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public async btnQuery_Click() {
    await this.BindGv_vqa_Paper(this.thisDivList);
  }

  /* 根据条件获取相应的对象列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
 */
  public async BindGv_vqa_Paper(divList: HTMLDivElement) {
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    //strWhereCond = await this.Combinevqa_PaperCondition();
    //intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
    //strIdCurrEduclsarrvqa_PaperObjLst: Array<clsvqa_PaperEN> = [];

    //try {
    //    this.recCount = await vqa_Paper_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {

    //    });
    //    const objPagerPara: stuPagerPara = {
    //        pageIndex: intCurrPageIndex,
    //        pageSize: this.pageSize,
    //        whereCond: strWhereCond,
    //        orderBy: this.hidSortvqa_PaperBy
    //    };
    //    const responseObjLst = await vqa_Paper_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
    //        arrvqa_PaperObjLst = <Array<clsvqa_PaperEN>>jsonData;
    //    });
    //}
    //catch (e:any) {
    //    console.error('catch(e)=');
    //    console.error(e);
    //    strIdCurrEduclsstrMsg: string = `绑定GridView不成功,${e}.`;
    //    alert(strMsg);
    //}
    //if (arrvqa_PaperObjLst.length > 10) {
    //    $("#divPager").show();
    //}
    //try {
    //    this.BindTab_vqa_Paper(strListDiv, arrvqa_PaperObjLst);
    //    console.log("完成BindGv_vqa_Paper!");
    //}
    //catch (e:any) {
    //    console.error('catch(e)=');
    //    console.error(e);
    //    strIdCurrEduclsstrMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
    //    alert(strMsg);
    //}
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.Combinevqa_PaperCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvqa_QuestionsObjLst: Array<clsvqa_QuestionsEN> = [];
    try {
      this.recCount = await vqa_Questions_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: qa_PaperCRUD.sortvqa_PaperBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      await vqa_Questions_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
        arrvqa_QuestionsObjLst = <Array<clsvqa_QuestionsEN>>jsonData;
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvqa_QuestionsObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_vqa_Questions(divList, arrvqa_QuestionsObjLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 显示vqa_Questions对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
     <param name = "divContainer">显示容器</param>
     <param name = "arrqa_QuestionsObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_vqa_Questions(
    divContainer: HTMLDivElement,
    arrvqa_QuestionsObjLst: Array<clsvqa_QuestionsEN>,
  ) {
    const strThisFuncName = this.BindTab_vqa_Questions.name;
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'paperTitle',
        colHeader: '论文标题',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'questionsContent',
        colHeader: '提问内容',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'answerCount',
        colHeader: '回答计数',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'userName',
        colHeader: '提问用户',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'updDate',
        colHeader: '提问日期',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: '',
        colHeader: '解答',
        text: '解答',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info btn-sm';
          btn1.setAttribute('onclick', `btnAnswer_Click('${strKeyId}');`);
          return btn1;
        },
      },
      //{
      //    fldName: "",
      //    colHeader: "删除",
      //    text: "删除", tdClass: "text-left", sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btnDelRecordInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},
    ];
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvqa_QuestionsObjLst, arrDataColumn, 'questionsId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async btnAnswer_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      await vqa_Questions_GetObjByQuestionsIdAsync(strKeyId).then((jsonData) => {
        const objvqa_QuestionsEN: clsvqa_QuestionsEN = <clsvqa_QuestionsEN>jsonData;
        if (objvqa_QuestionsEN != null) {
          const strPaperId = objvqa_QuestionsEN.paperId;
          const strQuestionsId = strKeyId;
          const strIdCurrEducls = objvqa_QuestionsEN.idCurrEduCls;
          const strHref = `../GradEduEx/PaperSubViewpoint_pdf?Type=02&paperId=${strPaperId}&questionsId=${strQuestionsId}&questionsTypeId=01&idCurrEduCls=${strIdCurrEducls}`;

          xadminopen('Pdf论文答疑', strHref);
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //答疑主界面列表正常跳转到pdf答疑页面
  //public async btnQARecord_Click(strKeyId: string) {
  //    //this.opType = "Update";

  //    strIdCurrEduclsstrReadWriteTypeId = $("#hidReadWriteTypeId").val();
  //    strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
  //    const objqa_Paper: clsqa_PaperEN;
  //    const objPaperAttachment: clsPaperAttachmentEN;

  //    strWhereCond1 = " 1=1 and qaPaperId ='" + strKeyId + "'";

  //    try {
  //        const responseText1 = await qa_Paper_GetFirstObjAsync(strWhereCond1);
  //        objqa_Paper = <clsqa_PaperEN>responseText1;
  //        strPaperId = objqa_Paper.paperId;
  //        strWhereCond2 = " 1=1 and paperId ='" + strPaperId + "'";

  //        const responseText2 = await PaperAttachment_GetFirstObjAsync(strWhereCond2);
  //        objPaperAttachment = <clsPaperAttachmentEN>responseText2;

  //        if (objPaperAttachment != null) {
  //            strfilepath = strAddressAndPort + objPaperAttachment.filePath;
  //            window.location.href = "../InteractManage/Pdf_QA?idCurrEduCls=" + strIdCurrEducls + "&qaPaperId=" + strKeyId + "&paperId=" + strPaperId + "&file=" + strfilepath;
  //        } else {
  //            window.location.href = "../InteractManage/Pdf_QA?idCurrEduCls=" + strIdCurrEducls + "&qaPaperId=" + strKeyId + "&paperId=" + strPaperId;
  //        }
  //    }
  //    catch (e:any) {
  //        console.error('catch(e)=');
  //        console.error(e);
  //        strIdCurrEduclsstrMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
  //        alert(strMsg);
  //    }
  //}

  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: qa_PaperCRUDEx;
    if (qa_PaperCRUD.objPageCRUD == null) {
      qa_PaperCRUD.objPageCRUD = new qa_PaperCRUDEx(divLayout);
      objPage = <qa_PaperCRUDEx>qa_PaperCRUD.objPageCRUD;
    } else {
      objPage = <qa_PaperCRUDEx>qa_PaperCRUD.objPageCRUD;
    }
    const objPageEdit: qa_Paper_EditEx = new qa_Paper_EditEx('qa_Paper_EditEx', objPage);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPageEdit.btnUpdateRecord_Click(strKeyId);
        }
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'qa_PaperCRUDExEx.btn_Click');

        break;
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombinevPaperCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle}%'`;
      }

      if (this.literatureTypeId != '' && this.literatureTypeId != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId}'`;
      }
      //用户
      if (this.PaperUser != '' && this.PaperUser != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.PaperUser}'`;
      }
      //只查询提交后的论文数据
      strWhereCond += ` And ${clsPaperEN.con_IsSubmit} = 'true'`;

      //获取论文条件 02代表 小组成员论文数据；
      //strIdCurrEduclsstrType = $("#hidstrType").val();
      //if (strType == "02") {
      //    //小组成员的论文数据；
      //    strWhereCond += ` And updUser in (select UserID from RTUserRela where topicId = '${strTopicId}')`;
      //    //排除获取已存在的关系数据
      //    strWhereCond += ` And paperId not in (select paperId from RTResearchResult where topicId = '${strTopicId}')`;
      //}
      //else {

      //    //排除获取已存在的关系数据
      //    strWhereCond += ` And paperId not in (select paperId from RTPaperRela where topicId = '${strTopicId}')`;
      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombinevPaperConditionobj(): clsPaperEN {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    //strWhereCond: string = " 1 = 1 and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";

    const objvPaper_Cond: clsPaperEN = new clsPaperEN();

    //objvPaper_Cond.SetCondFldValue(clsPaperEN.con_IdCurrEduCls, clsPubLocalStorage.idCurrEduCls, "=");
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle != '') {
        objvPaper_Cond.SetCondFldValue(clsPaperEN.con_PaperTitle, this.paperTitle, 'like');
      }
      if (this.literatureTypeId != '' && this.literatureTypeId != '0') {
        objvPaper_Cond.SetCondFldValue(clsPaperEN.con_LiteratureTypeId, this.literatureTypeId, '=');
      }
      if (this.PaperUser != '' && this.PaperUser != '0') {
        objvPaper_Cond.SetCondFldValue(clsPaperEN.con_UpdUser, this.PaperUser, '=');
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineUsersConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objvPaper_Cond;
  }

  //添加论文关系
  public async btnAddPaperRela_Click(strType: string) {
    //存放类型区分 论文相关条件；
    $('#hidstrType').val(strType);
    const objPage_Paper = new Pub_PaperList(this.divLayout);
    await objPage_Paper.PageLoad();
    //await objPage_Paper.BindGv_vPaper();
  }

  //查询论列表
  public async btnPaperQuery_Click() {
    const objPage_Paper = new Pub_PaperList(this.divLayout);
    await objPage_Paper.PageLoad();
    //await objPage_Paper.BindGv_vPaper();
  }

  /*
   * 论文标题
   */
  public get paperTitle(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperTitle');
  }
  ///////////////////////论文列表条件
  public get PaperUser(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlUserId');
  }
  /*
   * 文献类型Id
   */
  public get literatureTypeId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlLiteratureTypeId');
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvPaperBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvPaperBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvPaperBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvPaperBy');
  }
  /*
   * 分享
   */
  public set shareId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlShareId', value);
  }
  /*
   * 分享
   */
  public get shareId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlShareId');
  }

  /*
   * 论文标题
   */
  public get questionsContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtQuestionsContent_q');
  }

  /*
   * 类型Id
   */
  public get typeId(): string {
    return qa_PaperCRUDEx.GetPropValue('typeId');
  }
}
