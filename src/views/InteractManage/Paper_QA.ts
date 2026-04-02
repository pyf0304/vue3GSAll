import { Ref } from 'vue';
import $ from 'jquery';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { vqa_QuestionsEx_GetPageNumObjLstAsync } from '@/ts/L3ForWApiEx/InteractManage/clsvqa_QuestionsExWApi';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsqa_PushEN } from '@/ts/L0Entity/InteractManage/clsqa_PushEN';
import { clsqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsqa_QuestionsEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { clsvqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsvqa_AnswerEN';
import { clsvqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsvqa_QuestionsEN';
import { Paper_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { qa_Push_AddNewRecordAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_PushWApi';
import { qa_Questions_GetFirstObjAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_QuestionsWApi';
import { SysVote_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import { vqa_Answer_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsvqa_AnswerWApi';
import {
  vqa_Questions_GetObjLstAsync,
  vqa_Questions_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/InteractManage/clsvqa_QuestionsWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  get_page_cache,
  get_page_top,
  get_pdfContent,
  get_pdfDiv_left,
  get_pdfDiv_top,
  get_pdfPageNum,
  get_pdf_zoom,
  set_page_cache,
  set_page_top,
  set_pdfContent,
  set_pdfDiv_left,
  set_pdfDiv_top,
  set_pdfPageNum,
  set_pdf_zoom,
} from '@/ts/FunClass/clsPubFun4Pdf';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
import { userStore } from '@/store/modulesShare/user';
import { sysVoteStore } from '@/store/modules/sysVote';

declare function btnShowAnswer_Click(strKey: string, pageNum: number, pdfContent: string): void;

declare let window: any;
/* spaqa_QuestionsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PaperQA {
  public static questionsId = '';
  public static EditRef: Ref<any>;
  public static divLayout: HTMLDivElement;
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象
  public static times4TestShowDialog = 0;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvqa_QuestionsBy: string = "questionsId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  //public static uniq(arr: Array<clsvqa_QuestionsEN>): Array<clsvqa_QuestionsEN> {
  //    let arrObjLst_New: Array<clsvqa_QuestionsEN> = new Array<clsvqa_QuestionsEN>();
  //    for (let x of arr) {
  //        if (Pdf_QA.IsExist(arrObjLst_New, x) == false) {
  //            arrObjLst_New.push(x);
  //        }
  //    }
  //    return arrObjLst_New;
  //}

  //public static IsExist(arr: Array<clsvqa_QuestionsEN>, key: clsvqa_QuestionsEN) {
  //    let arr_Sel = arr.filter(x => x.pdfPageNum == key.pdfPageNum);
  //    if (arr_Sel.length > 0) return true;
  //    return false;
  //}

  //public static GetvPdfpageNumByvqa_Questions(objvqa_Questions: clsvqa_QuestionsEN): clsvqa_QuestionsEN {
  //    const objvqa_Questions: clsvqa_QuestionsEN = new clsvqa_QuestionsEN();
  //    objvqa_Questions.questionsId = objvqa_Questions.questionsId;
  //    objvqa_Questions.pdfPageNum = objvqa_Questions.pdfPageNum;
  //    return objvqa_Questions;
  //}

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

  ///添加问题推送
  public async AddNewqa_Push() {
    try {
      let strJson = clsPubSessionStorage.GetUserLst();
      const JsonLent: number = strJson.length;
      strJson = strJson.substring(0, JsonLent - 1);
      console.log(strJson);
      const strUses = eval(`[${strJson}]`);
      //把存入的数组拿出来循环并添加到推送表
      for (let i = 0; i < strUses.length; i++) {
        const strUserId = strUses[i];
        const objqa_PushEN: clsqa_PushEN = new clsqa_PushEN();
        objqa_PushEN.SetQuestionsId(PaperQA.questionsId);
        objqa_PushEN.SetReceiveUser(strUserId);
        objqa_PushEN.SetIsReceive(false);
        objqa_PushEN.SetIsRequestReply(this.isRequestReply); // 是否要求回复
        objqa_PushEN.SetUpdDate(clsPubFun4Web.getNowDate());
        objqa_PushEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班Id
        const responseText = await qa_Push_AddNewRecordAsync(objqa_PushEN);
        console.log(responseText);
      }
      //添加完以后清空用户数组字符串
      const strKey = 'UserLst';
      sessionStorage.removeItem(strKey);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `推送记录添加不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjqa_QuestionsEN">数据传输的目的类对象</param>
  */
  public PutDataToqa_QuestionsClass(pobjqa_QuestionsEN: clsqa_QuestionsEN) {
    pobjqa_QuestionsEN.SetPaperId(clsPrivateSessionStorage.paperId);
    pobjqa_QuestionsEN.SetQaPaperId('00000000');
    pobjqa_QuestionsEN.SetQuestionsTypeId('01');
    pobjqa_QuestionsEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjqa_QuestionsEN.SetQuestionsContent(this.questionsContent); // 提问内容
    pobjqa_QuestionsEN.SetPdfContent(this.pdfContent); // Pdf内容
    pobjqa_QuestionsEN.SetPdfPageNum(this.pdfPageNum); // Pdf页码
    pobjqa_QuestionsEN.SetOrderNum(this.orderNum); // 序号

    pobjqa_QuestionsEN.SetPdfPageNumIn(this.page_cache);
    pobjqa_QuestionsEN.SetPdfPageTop(this.page_top);
    pobjqa_QuestionsEN.SetPdfZoom(this.pdf_zoom);
    let pdfDiv_top1 = this.pdfDiv_top;
    pdfDiv_top1 = pdfDiv_top1.substring(0, pdfDiv_top1.length - 2);
    let pdfDiv_left = this.pdfDiv_left;
    pdfDiv_left = pdfDiv_left.substring(0, pdfDiv_left.length - 2);

    pobjqa_QuestionsEN.SetPdfDivTop(pdfDiv_top1);
    pobjqa_QuestionsEN.SetPdfDivLet(pdfDiv_left);

    pobjqa_QuestionsEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjqa_QuestionsEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
  }

  /* 函数功能:把类对象的属性内容显示到界面上
   注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
    如果在设置数据库时,就应该一级字段在前,二级字段在后
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
    <param name = "pobjqa_QuestionsEN">表实体类对象</param>
  */
  public GetDataFromqa_QuestionsClass(pobjqa_QuestionsEN: clsqa_QuestionsEN) {
    this.questionsContent = pobjqa_QuestionsEN.questionsContent; // 提问内容
    this.pdfContent = pobjqa_QuestionsEN.pdfContent; // Pdf内容
    this.pdfPageNum = pobjqa_QuestionsEN.pdfPageNum; // Pdf页码
  }

  //添加删除问题的时候统计问题数据量到论文答疑表
  public async SynQuestions() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strThisFuncName = this.SynQuestions.name;
    const strPaperId = clsPrivateSessionStorage.paperId;

    //添加记录的同时并记录论文读写的教师评价数
    const strWhereCond = ` questionsTypeId='01' and paperId='${strPaperId}'`;
    const intQuestionsCount = await vqa_Questions_GetRecCountByCondAsync(strWhereCond);

    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strPaperId);
    objPaperEN.SetPaperQCount(intQuestionsCount);

    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    const responseText = await Paper_UpdateRecordAsync(objPaperEN);
    const returnBool = !!responseText;
    if (returnBool == true) {
      //刷新缓存
      console.log('添加问题数量成功！');
    } else {
      console.log('添加问题数量失败！');
    }
    //添加记录的同时并记录论文读写的教师评价数
  }

  /*************************************************回答相关的模块********************************************************/

  /////////////////////////////////////////////////////////点赞——邀请其他人/////////////////////////////////////////////////////

  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  //public TagsClear() {
  //    this.tagsContent = "";
  //}

  // /*
  // * 设置确定按钮的标题
  //*/
  // public set btnOKUpd3(value: string) {
  //     $("#btnOKUpd3").html(value);
  // }
  // /*
  // * 获取按钮的标题
  //*/
  // public get btnOKUpd3(): string {
  //     return $("#btnOKUpd3").html();
  // }
  /*
   * 序号
   */
  public set orderNum(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    SetInputValueInDivObj(divName, 'txtOrderNum', value);
  }
  /*
   * 序号
   */
  public get orderNum(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObjN(divName, 'txtOrderNum');
  }

  //  /*
  // * Pdf内容
  //*/
  //  public set pdfContent(value: string) {
  //      $("#hidPdfContent").val(value);
  //  }
  //  /*
  //  * Pdf内容
  // */
  //  public get pdfContent(): string {
  //      return $("#hidPdfContent").val();
  //  }

  //  /*
  //  * Pdf页码
  // */
  //  public set pdfPageNum(value: number) {
  //      $("#hidPdfPageNum").val(value);
  //  }
  //  /*
  //  * Pdf页码
  // */
  //  public get pdfPageNum(): number {
  //      return $("#hidPdfPageNum").val();
  //  }

  /*
   * 提问内容
   */
  public set questionsContent(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtQuestionsContent', value);
  }
  /*
   * 提问内容
   */
  public get questionsContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtQuestionsContent');
  }

  /*
   * 答案内容
   */
  public set answerContent(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtAnswerContent', value);
  }
  /*
   * 答案内容
   */
  public get answerContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtAnswerContent');
  }

  // /*
  // * 设置关键字的值
  //*/hidPdfContent
  // public set tagsId(value: string) {
  //     $("#hidTagsId").val(value);
  // }
  // /*
  // * 设置关键字的值
  //*/
  // public get tagsId(): string {
  //     return $("#hidTagsId").val();
  // }

  /*
   * 设置关键字的值
   */
  public set hidPdfContent(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidPdfContent', value);
  }
  /*
   * 设置关键字的值
   */
  public get hidPdfContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidPdfContent');
  }

  /*
   * 设置关键字的值
   */
  public set answerId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidAnswerId', value);
  }
  /*
   * 设置关键字的值
   */
  public get answerId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidAnswerId');
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

  // /*
  // * pdf标注内容
  //*/
  // public set tagsContent(value: string) {
  //     $("#txtTagsContent").val(value);
  // }
  // /*
  // * pdf标注内容
  //*/
  // public get tagsContent(): string {
  //     return $("#txtTagsContent").val();
  // }

  /******************************************************************iFrame子页面控件******************************************************/

  /*
   * Pdf内容
   */
  public set pdfContent(value: string) {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    //$("#hidPdfContent").val(value);
    //$("#iframe_qaPdf").contents().find("#hidPdfContent").val(value);
    //$(window.parent.$("#iframe_qaPdf")).contents().find("#hidPdfContent").val(value);
    set_pdfContent('iframe_qaPdf', 'hidPdfContent', value);
  }
  /*
   * Pdf内容
   */
  public get pdfContent(): string {
    //return $("#hidPdfContent").val();
    //return $("#iframe_qaPdf").contents().find("#hidPdfContent").val();
    return get_pdfContent('iframe_qaPdf', 'hidPdfContent');
  }

  /*
   * Pdf页码
   */
  public set pdfPageNum(value: number) {
    //$("#hidPdfPageNum").val(value);
    //$("#iframe_qaPdf").contents().find("#hidPdfPageNum").val(value);
    set_pdfPageNum('iframe_qaPdf', 'hidPdfPageNum', value);
  }
  /*
   * Pdf页码
   */
  public get pdfPageNum(): number {
    //return $("#hidPdfPageNum").val();
    //return $("#iframe_qaPdf").contents().find("#hidPdfPageNum").val();
    return get_pdfPageNum('iframe_qaPdf');
  }

  /*
   * PdfTop
   */
  public set page_top(value: number) {
    //$("#hidPdfPageNum").val(value);
    //$("#iframe_qaPdf").contents().find("#page_top").val(value);
    set_page_top('iframe_qaPdf', 'page_top', value);
  }
  /*
   * PdfTop
   */
  public get page_top(): number {
    //return $("#hidPdfPageNum").val();
    //return $("#iframe_qaPdf").contents().find("#page_top").val();
    return get_page_top('iframe_qaPdf', 'page_top');
  }

  /*
   * page_cache
   */
  public set page_cache(value: string) {
    //$("#hidPdfPageNum").val(value);
    //$("#iframe_qaPdf").contents().find("#page_cache").val(value);
    set_page_cache('iframe_qaPdf', 'page_cache', value);
  }
  /*
   * page_cache
   */
  public get page_cache(): string {
    //return $("#hidPdfPageNum").val();
    //return $("#iframe_qaPdf").contents().find("#page_cache").val();
    return get_page_cache('iframe_qaPdf', 'page_cache');
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

  /*
   * pdfDiv_top
   */
  public set pdfDiv_top(value: string) {
    set_pdfDiv_top('pdfDiv_top', value);
    //$("#iframe_qaPdf", parent.document).contents().find("#pdfDiv_top").val(value);
  }
  /*
   * pdfDiv_top
   */
  public get pdfDiv_top(): string {
    return get_pdfDiv_top('pdfDiv_top');
    //return $("#iframe_qaPdf").contents().find("#pdfDiv_top").val();
    //return $("#iframe_qaPdf", parent.document).contents().find("#pdfDiv_top").val();
  }

  /*
   * pdfDiv_left
   */
  public set pdfDiv_left(value: string) {
    set_pdfDiv_left('pdfDiv_left', value);
    //$("#iframe_qaPdf").contents().find("#pdfDiv_left").val(value);
    //$("#iframe_qaPdf", parent.document).contents().find("#pdfDiv_left").val(value);
  }
  /*
   * pdfDiv_left
   */
  public get pdfDiv_left(): string {
    return get_pdfDiv_left('pdfDiv_left');
    //return $("#iframe_qaPdf").contents().find("#pdfDiv_left").val();
    //return $("#iframe_qaPdf", parent.document).contents().find("#pdfDiv_left").val();
  }
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
        divName = PaperQA.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = PaperQA.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = PaperQA.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = PaperQA.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = PaperQA.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = PaperQA.divPager;
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
  //绑定提问数据
  public async Showdiv_Questions() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strWhereCond1 = `1=1 and questionsTypeId='01' and paperId='${clsPrivateSessionStorage.paperId}'`;
    const strWhereCond = `1=1 and questionsTypeId='01' and paperId='${clsPrivateSessionStorage.paperId}' order by updDate Asc`;
    const strUserId = userStore.getUserId;
    //const objqa_Questions: clsqa_QuestionsEN = null;
    let arrvqa_QuestionsObjLst0: Array<clsvqa_QuestionsEN> = [];
    let arrvqa_QuestionsObjLst: Array<clsvqa_QuestionsEN> = [];
    let arrvqa_PdfPageNumObjLst: Array<clsvqa_QuestionsEN> = [];
    try {
      await vqa_QuestionsEx_GetPageNumObjLstAsync(strWhereCond1).then((jsonData) => {
        arrvqa_PdfPageNumObjLst = <Array<clsvqa_QuestionsEN>>jsonData;
      });
      await vqa_Questions_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrvqa_QuestionsObjLst0 = <Array<clsvqa_QuestionsEN>>jsonData;
      });

      let strhtml = '';
      strhtml += '<div class="info" id="infoPaper_QA">';
      for (let j = 0; j < arrvqa_PdfPageNumObjLst.length; j++) {
        arrvqa_QuestionsObjLst = arrvqa_QuestionsObjLst0.filter(
          (x) => x.pdfPageNum == arrvqa_PdfPageNumObjLst[j].pdfPageNum,
        );

        strhtml += '<div class="title btn-2">';
        strhtml += `<a href="javascript:void(0)" title="当前pdf论文上的第几页一共有几个问题">第${arrvqa_PdfPageNumObjLst[j].pdfPageNum}页上的${arrvqa_QuestionsObjLst.length}个答疑</a>`;
        //strhtml += '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加问题" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btnAddNewQuestions_Click();> <i class="layui-icon" ></i>添加问题</button></div>';
        strhtml += '</div><ul class="artlist">';

        let k = 0;
        for (let i = 0; i < arrvqa_QuestionsObjLst.length; i++) {
          k++;
          strhtml += '<li>';

          strhtml += `<div id="Q${arrvqa_QuestionsObjLst[i].questionsId}" style="text-align:left; float:left; width:60%;">`;
          strhtml += `<span class="rowtit color1">${k}.</span>`;
          //strhtml += '&nbsp;<span class="rowtit color3">[' + arrvqa_QuestionsObjLst[i].pdfPageNum + ']</span>';

          strhtml += `<span class="title btn-4"><a href="javascript:void(0)" onclick=btnShowAnswer_Click("${arrvqa_QuestionsObjLst[i].questionsId}",${arrvqa_QuestionsObjLst[i].pdfPageNum},"${arrvqa_QuestionsObjLst[i].pdfContent}"); class="abstract-text">${arrvqa_QuestionsObjLst[i].questionsContent}</a></span>`;
          strhtml += `&nbsp;<span style="font-style:italic;" class="rowtit color2" title="第${arrvqa_QuestionsObjLst[i].pdfPageNum}页标记">P${arrvqa_QuestionsObjLst[i].pdfPageNum}</span>`;
          strhtml += `&nbsp;<span class="rowtit color3">[${arrvqa_QuestionsObjLst[i].answerCount}]</span>`;
          strhtml += '</div>';

          strhtml += '<div style="text-align:right; float:right; width:39%;">';
          if (arrvqa_QuestionsObjLst[i].updUser == strUserId) {
            //编辑
            strhtml += `<button title="编辑问题" class="btn btn-info btn-sm" onclick=btnUpdateQuestions_Click("${arrvqa_QuestionsObjLst[i].questionsId}")>${clsIcon.faPenToSquare}</button>`;
            //删除
            strhtml += `<button title="删除问题" class="btn-danger btn btn-sm" onclick=btnDelQuestions_Click("${arrvqa_QuestionsObjLst[i].questionsId}") href="javascript:;">${clsIcon.faTrash}</button>`;
          }

          //strhtml += '<span class="rowtit color5">[提问用户]：</span>' + arrvqa_QuestionsObjLst[i].userName + '&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[提问时间]：</span>' + arrvqa_QuestionsObjLst[i].updDate;

          let strUpdDate = arrvqa_QuestionsObjLst[i].updDate;
          strUpdDate = strUpdDate.substring(2, strUpdDate.length - 11);

          strhtml += `&nbsp;<span class="rowtit color4">${arrvqa_QuestionsObjLst[i].userName}/${strUpdDate}</span>&nbsp;&nbsp;`;
          strhtml += '</div>';
          strhtml += '</li>';
          //strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div>';
          //strhtml += '<li> <div style="border-bottom: 1px solid #eee;"></div></li>';
        }
        strhtml += '</ul>';
      }
      strhtml += '</div>';

      //拼接；
      // $('#div_qa_Questions').html(strhtml);
      const div_qa_Questions = GetDivObjInDivObj(divName, 'div_qa_Questions');
      div_qa_Questions.innerHTML = strhtml;

      const strQuestionsId = PaperQA.questionsId;
      if (strQuestionsId != '') {
        const objQuestions = arrvqa_QuestionsObjLst0.find((x) => x.questionsId == strQuestionsId);
        if (objQuestions != null) {
          btnShowAnswer_Click(strQuestionsId, objQuestions.pdfPageNum, objQuestions.pdfContent);
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
  //绑定答案数据并对pdf添加高亮
  public async btnShowAnswer_Click(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    //对pdf添加高亮
    //this.btnUpdatePaperPageNum_Click(this.hidPdfContent);

    //绑定答案数据
    let arrvqa_AnswerObjLst1: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst2: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst3: Array<clsvqa_AnswerEN> = [];

    let strWhereCond1 = '';
    let strWhereCond2 = '';

    const strUserId = userStore.getUserId;
    const strQuestionsId = PaperQA.questionsId;
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部评论
        strWhereCond1 = ` parentId='root' and  questionsId='${strQuestionsId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  questionsId='${strQuestionsId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人评论
        strWhereCond1 = ` parentId='root' and  questionsId='${strQuestionsId}' and updUser='${strUserId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  questionsId='${strQuestionsId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新评论
        strWhereCond1 = ` parentId='root' and  questionsId='${strQuestionsId}' order by updDate Desc`;
        strWhereCond2 = ` parentId<>'root' and  questionsId='${strQuestionsId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }
    // const strVateWhereCond = ` 1 =1 and updUser='${strUserId}' and voteTypeId='12' and pubParentId='${strQuestionsId}'`;
    const strVoteType = '12';
    const strPubParentId = strQuestionsId;

    const strQWhereCond = `questionsId='${strQuestionsId}'`;
    try {
      arrvqa_AnswerObjLst1 = await vqa_Answer_GetObjLstAsync(strWhereCond1);
      arrvqa_AnswerObjLst2 = await vqa_Answer_GetObjLstAsync(strWhereCond2);

      const objqa_Questions = await qa_Questions_GetFirstObjAsync(strQWhereCond);
      if (objqa_Questions != null) {
        $('#Questions_Name').html(objqa_Questions.questionsContent);
      }
      let strhtml = '';
      let varNum = 0;
      //   const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      // J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrvqa_AnswerObjLst1.length; i++) {
        const objvqa_Answer = arrvqa_AnswerObjLst1[i];
        varNum++;
        strhtml += '<div class="comment" >';
        strhtml +=
          '<div class="common-avatar J_User" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block">';
        if (GetInputValueInDivObj(divName, 'hidQuestionsUser') == objvqa_Answer.updUser) {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:red;" > 题主：${objvqa_Answer.userName}</span>`;
        } else {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvqa_Answer.userName}</span>`;
        }
        strhtml += `<span class="comment-time">${objvqa_Answer.updDate}</span>`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment-username J_User">${varNum}楼</span></p>`;
        //strhtml += '<div class="comment-content J_CommentContent">评分：' + arrvPaperAppraiseObjLst[i].AppraiseScore + '</div>';
        strhtml += `<div class="comment-content J_CommentContent">${objvqa_Answer.answerContent}</div>`;

        //回复区

        arrvqa_AnswerObjLst3 = arrvqa_AnswerObjLst2.filter(
          (x) => x.parentId == objvqa_Answer.answerId,
        );
        if (arrvqa_AnswerObjLst3.length > 0) {
          strhtml += '<div class="reply J_ReplyBlock">';
          for (let j = 0; j < arrvqa_AnswerObjLst3.length; j++) {
            strhtml += '<div class="reply-block">';

            strhtml += '<div class="reply-content">';
            if (
              GetInputValueInDivObj(divName, 'hidQuestionsUser') == arrvqa_AnswerObjLst3[j].updUser
            ) {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" style="color:red;"> 题主(${arrvqa_AnswerObjLst3[j].userName})</b>：</span>`;
            } else {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User">${arrvqa_AnswerObjLst3[j].userName}</b>：</span>`;
            }
            strhtml += `${arrvqa_AnswerObjLst3[j].answerContent}</div>`;

            strhtml += '<div class="reply-operate reply-operate--hot">';
            //if (arrvqa_AnswerObjLst3[j].scoreType == "2") {
            //    strhtml += '<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分:<i>' + arrvqa_AnswerObjLst3[j].score + '</i></span>';
            //} else {
            //    strhtml += '<span class="J_Vote reply-operate-item reply-up">学生评分:<i>' + arrvqa_AnswerObjLst3[j].score + '</i></span>';
            //}
            const objLike = sysVoteStore.getObj(
              strVoteType,
              strUserId,
              arrvqa_AnswerObjLst3[j].answerId,
            );
            if (objLike == null) {
              strhtml += `<span class="J_Vote reply-operate-item reply-up" onclick=btnAddVote_Click("${arrvqa_AnswerObjLst3[j].answerId}","${arrvqa_AnswerObjLst3[j].updUser}")>赞<i>${arrvqa_AnswerObjLst3[j].voteCount}</i></span >`;
            } else {
              strhtml += `<span class="J_Vote reply-operate-item reply-up operate-visited" >已赞<i>${arrvqa_AnswerObjLst3[j].voteCount}</i></span >`;
            }
            //strhtml += '<i class="reply-dot">·</i><span class="J_Reply reply-operate-item"  onclick=btnReplyAnswer_Click("' + arrvqa_AnswerObjLst3[j].answerId + '")>回复</span>';

            strhtml += `<i class="reply-dot">·</i><span>${arrvqa_AnswerObjLst3[j].updDate}</span>`;
            if (strUserId == arrvqa_AnswerObjLst3[j].updUser) {
              strhtml += '<i class="reply-dot reply-operate-report" >·</i>';
              strhtml += `<span class="reply-operate-item reply-operate-report J_ReplyReport" onclick=btnDelAnswer_Click("${arrvqa_AnswerObjLst3[j].answerId}")>删除</span>`;
            }
            strhtml += '</div>';

            strhtml += '</div>';
          }
          strhtml += '</div>';
        }
        ///评论区
        strhtml += '<div class="comment-operate J_CommentOperate clearfix">';
        //if (objvqa_Answer.scoreType == "2") {
        //    strhtml += '<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分:<i>' + objvqa_Answer.score + '</i></span>';
        //} else {
        //    strhtml += '<span class="J_Vote reply-operate-item reply-up">学生评分:<i>' + objvqa_Answer.score + '</i></span>';
        //}
        const objLike = sysVoteStore.getObj(strVoteType, strUserId, objvqa_Answer.answerId);
        if (objLike == null) {
          strhtml += `<span class="J_Vote comment-operate-item comment-operate-up" onclick=btnAddVote_Click("${objvqa_Answer.answerId}","${objvqa_Answer.updUser}")>赞<i>${objvqa_Answer.voteCount}</i></span>`;
        } else {
          strhtml += `<span class="J_Vote comment-operate-item comment-operate-up operate-visited">已赞<i>${objvqa_Answer.voteCount}</i></span>`;
        }
        strhtml += `<span class="J_Reply comment-operate-item comment-operate-reply" id="J_Reply" onclick=btnReplyAnswer_Click("${objvqa_Answer.answerId}")>回复</span>`;
        strhtml += '</div>';

        if (strUserId == objvqa_Answer.updUser) {
          //strhtml += '<div class="J_Report comment-report" id="J_Report6673850347411436155" onclick=btnUpdateAnswer_Click("' + objvqa_Answer.answerId + '")>修改</div>';
          strhtml += `<div class="J_Report comment-report" onclick=btnDelAnswer_Click("${objvqa_Answer.answerId}")>删除</div>`;
        }
        strhtml += '</div></div>';
      }
      //$("#J_ShortComment").append(strhtml);
      $('#J_ShortComment').html(strhtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取数据不成功,${e}.`;
      alert(strMsg);
    }
  }
}
