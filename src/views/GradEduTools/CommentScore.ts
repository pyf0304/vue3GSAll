import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { SysCommentEx_AddOrUpdateSysScoreSummaryAsync } from '@/ts/L3ForWApiExShare/GraduateEdu/clsSysCommentExWApi';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import { clsSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsSysCommentEN';
import { clsSysScoreSummaryEN } from '@/ts/L0Entity/GradEduTools/clsSysScoreSummaryEN';
import { clsgs_TagsEN } from '@/ts/L0Entity/InteractManage/clsgs_TagsEN';
import { clsvqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsvqa_AnswerEN';
import { vCurrEduClsStu_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import { SysComment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsSysCommentWApi';
import {
  SysScoreSummary_GetFirstObjAsync,
  SysScoreSummary_GetObjLstAsync,
  SysScoreSummary_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTools/clsSysScoreSummaryWApi';
import { gs_Tags_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsgs_TagsWApi';
import { vqa_Answer_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsvqa_AnswerWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetUlObjInDivObj,
  HideDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { userStore } from '@/store/modulesShare/user';

declare let window: any;
/* PaperSubViewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class CommentScore {
  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divLayout: HTMLDivElement; //界面布局的层对象
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvPaperSubViewpointBy: string = "subViewpointId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 50;
  }

  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        await this.CurrEduClsStuTree(objLayOut);

        await this.li_QaCommentScore_Click();

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

  public async li_QaCommentScore_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //如果是点击了树菜单、或者是刷新，那么需要做样式控制；
    //首先要去掉ul下 li a 样式
    //$("#myTab li a").removeClass();
    //$("#myTab li").removeClass();
    //判断根据序号显示不同的数据源

    //strPaperId = $("#hidPaperId").val()
    //if (strPaperId != "") {
    const strnum = GetInputValueInDivObj(divName, 'hidTabNum');
    switch (strnum) {
      case '1':
        await this.Bind_Qa_Answer();
        break;
      case '2':
        await this.Bind_SysComment();
        break;
      case '3':
        await this.Bind_PaperTags();
        break;
      //case "4":
      //    const gvResult4 = await this.Bind_TeaQA();
      //    break;
      default:
        await this.Bind_Qa_Answer();
        break;
    }

    //   }
  }

  //绑定论文标记
  public async Bind_PaperTags() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //标记表
    let arrgs_TagsObjLst: Array<clsgs_TagsEN> = [];
    //打分表
    // const arrSysScoreSummaryObjLst: Array<clsSysScoreSummaryEN> = [];
    let objSysScoreSummaryEN: clsSysScoreSummaryEN = new clsSysScoreSummaryEN();

    const strUserId = GetInputValueInDivObj(divName, 'hidStuId');
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

    const strWhereCond4 = ` 1=1 and updUser='${strUserId}' and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}' order by updDate desc`;

    //intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页

    //打分0045 表示标记打分（教师专属）
    const strWhereCond5 = ` 1=1 and userId='${strUserId}' And scoreTypeId ='0045' And idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;

    try {
      //获取标记数据；
      arrgs_TagsObjLst = await gs_Tags_GetObjLstAsync(strWhereCond4);
      await SysScoreSummary_GetFirstObjAsync(strWhereCond5).then((jsonData) => {
        objSysScoreSummaryEN = <clsSysScoreSummaryEN>jsonData;
      });

      let strhtml = '';
      const cateid = 0;

      strhtml += `<tr cate-id="${cateid}" ><td>`;

      //strhtml += '<div style="float:left;"><h3>' + intJ + '.' + arrSubViewpointTypeObjLst[j].subViewpointTypeName + '</h3></div>';
      strhtml += '<div style="float:left;"><h3>标记数据</h3></div>';
      strhtml += '<div style="float:right;">';
      if (objSysScoreSummaryEN != null) {
        if (objSysScoreSummaryEN.isSubmit == false) {
          strhtml += `<a style="float:left;" href="javascript:void(0)" onclick=BtnAddOrUpdateScoreSummary_Click("${strUserId}","${strIdCurrEducls}","0045") class="btn btn-info btn-sm">${clsIcon.faPenToSquare}打分</a>`;
          strhtml += `<a href="javascript:void(0)" onclick=BtnSubmitScoreSummary_Click("${strUserId}","${strIdCurrEducls}","0045")><i class="layui-icon layui-icon-list" style="font-size:16px; color: #219167;" title="提交" ></i>提交</a>`;
        }
      } else {
        strhtml += `<a style="float:left;" href="javascript:void(0)" onclick=BtnAddOrUpdateScoreSummary_Click("${strUserId}","${strIdCurrEducls}","0045") class="btn btn-info btn-sm">${clsIcon.faPenToSquare}打分</a>`;
        strhtml += `<a href="javascript:void(0)" onclick=BtnSubmitScoreSummary_Click("${strUserId}","${strIdCurrEducls}","0045")><i class="layui-icon layui-icon-list" style="font-size:16px; color: #219167;" title="提交" ></i>提交</a>`;
      }

      strhtml += '</div></td></tr>';

      let intK = 0;

      for (let k = 0; k < arrgs_TagsObjLst.length; k++) {
        intK++;

        strhtml += `<tr cate-id="${cateid}" fid="${intK}" ><td>`;

        strhtml += `&nbsp;&nbsp;<span class="color3">${intK}</span>.${clsIcon.faPlay}【标记内容】${arrgs_TagsObjLst[k].tagsContent}`;

        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="color2">${clsIcon.faPlay}【标记时间】${arrgs_TagsObjLst[k].updDate}</span>`;

        strhtml += '</td></tr>';
      }
      //}

      $('#tbTagsList').html(strhtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班学生树
  public async CurrEduClsStuTree(divLayout: HTMLDivElement) {
    //教学班学生
    let arrvCurrEduClsObjLst: Array<clsvCurrEduClsStuEN> = [];
    //讨论表
    let arrvqa_AnswerObjLst: Array<clsvqa_AnswerEN> = [];
    //评价表
    let arrSysCommentObjLst: Array<clsSysCommentEN> = [];
    //打分表
    let arrSysScoreSummaryObjLst: Array<clsSysScoreSummaryEN> = [];

    //标记表
    let arrgs_TagsObjLst: Array<clsgs_TagsEN> = [];

    //strWhereCond1 = " updUser='" + userStore.getUserId + "' And";
    const strWhereCond1 = ` idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`; //得到评论表的条件；

    //得到讨论表的条件；010203代表属于讨论的类型；
    const strWhereCond3 = ` idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}' And answerTypeId in ('01','02','03')`;
    //打分00041 0042 表示讨论打分 和评价打分（教师专属）
    const strWhereCond4 = ` scoreTypeId in('0041','0042','0045') And idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;

    // strWhereCond5 = " 1=1 and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";

    //获取讨论数据；
    arrvqa_AnswerObjLst = await vqa_Answer_GetObjLstAsync(strWhereCond3);
    //获取评价数据；
    arrSysCommentObjLst = await SysComment_GetObjLstAsync(strWhereCond1);
    // 获取教学班学生数据；
    arrvCurrEduClsObjLst = await vCurrEduClsStu_GetObjLstAsync(strWhereCond1);
    //打分表
    arrSysScoreSummaryObjLst = await SysScoreSummary_GetObjLstAsync(strWhereCond4);

    //获取标记数据；
    arrgs_TagsObjLst = await gs_Tags_GetObjLstAsync(strWhereCond1);

    let CountTotal = 0;
    let strhtml = '';
    if (arrvCurrEduClsObjLst.length > 0) {
      CountTotal = arrvCurrEduClsObjLst.length; //获取教学班人数
      //循环数据
      for (let i = 0; i < arrvCurrEduClsObjLst.length; i++) {
        const strStuId = arrvCurrEduClsObjLst[i].stuId;
        const strStuName = arrvCurrEduClsObjLst[i].stuName;
        const strIdCurrEducls = arrvCurrEduClsObjLst[i].idCurrEduCls;

        //存放Id
        $('#hidStuId').val(strStuId);
        $('#spUserName').html(strStuName);
        clsPubLocalStorage.idCurrEduCls = strIdCurrEducls;

        //获取当前用户讨论数据；
        let qaCount = 0;
        const arrvqa_AnswerObjLst1 = arrvqa_AnswerObjLst.filter((x) => x.updUser == strStuId);
        if (arrvqa_AnswerObjLst1.length > 0) {
          qaCount = arrvqa_AnswerObjLst1.length;
        }

        //获取当前用户评论数据；
        let commentCount = 0;
        const arrSysCommentObjLst1 = arrSysCommentObjLst.filter((x) => x.updUser == strStuId);
        if (arrSysCommentObjLst1.length > 0) {
          commentCount = arrSysCommentObjLst1.length;
        }

        let strqaScore = 0;
        let strqaDate = '';
        //获取分数（讨论0041 、评价0042） ，获取相关时间
        const arrSysScoreSummaryObjLst1 = arrSysScoreSummaryObjLst.find(
          (x) =>
            x.userId == strStuId && x.idCurrEduCls == strIdCurrEducls && x.scoreTypeId == '0041',
        );
        if (arrSysScoreSummaryObjLst1 != null) {
          strqaScore = arrSysScoreSummaryObjLst1.score;
          strqaDate = arrSysScoreSummaryObjLst1.updDate.substring(2, 8);
        }

        //得到讨论名次，通过分数；
        let qaIndexNumber = 0;
        const arrSysScoreSummaryObjLst2 = arrSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEducls && x.scoreTypeId == '0041' && x.score > strqaScore,
        );
        if (strqaScore == 0) {
          qaIndexNumber = CountTotal;
        } else {
          qaIndexNumber = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }

        let strCommentScore = 0;
        let strCommentDate = '';
        const arrSysScoreSummaryObjLst3 = arrSysScoreSummaryObjLst.find(
          (x) =>
            x.userId == strStuId && x.idCurrEduCls == strIdCurrEducls && x.scoreTypeId == '0042',
        );
        if (arrSysScoreSummaryObjLst3 != null) {
          strCommentScore = arrSysScoreSummaryObjLst3.score;
          strCommentDate = arrSysScoreSummaryObjLst3.updDate.substring(2, 8);
        }
        //得到评价名次，通过分数；
        let CommentIndexNumber = 0;
        const arrSysScoreSummaryObjLst4 = arrSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEducls &&
            x.scoreTypeId == '0042' &&
            x.score > strCommentScore,
        );
        if (strCommentScore == 0) {
          CommentIndexNumber = CountTotal;
        } else {
          CommentIndexNumber = arrSysScoreSummaryObjLst4.length + 1; //加1代表当前排名；
        }

        //标记数量
        let TagCount = 0;
        const arrgs_TagsObjLst1 = arrgs_TagsObjLst.filter((x) => x.updUser == strStuId);
        if (arrgs_TagsObjLst1.length > 0) {
          TagCount = arrgs_TagsObjLst1.length;
        }

        //标记分数
        let strTagScore = 0;
        let strTagDate = '';
        const arrSysScoreSummaryObjLst5 = arrSysScoreSummaryObjLst.find(
          (x) =>
            x.userId == strStuId && x.idCurrEduCls == strIdCurrEducls && x.scoreTypeId == '0045',
        );
        if (arrSysScoreSummaryObjLst5 != null) {
          strTagScore = arrSysScoreSummaryObjLst5.score;
          strTagDate = arrSysScoreSummaryObjLst5.updDate.substring(2, 8);
        }
        //标记名次
        let TagIndexNumber = 0;
        const arrSysScoreSummaryObjLst6 = arrSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEducls && x.scoreTypeId == '0045' && x.score > strTagScore,
        );
        if (strTagScore == 0) {
          TagIndexNumber = CountTotal;
        } else {
          TagIndexNumber = arrSysScoreSummaryObjLst6.length + 1; //加1代表当前排名；
        }

        strhtml += '<tr>';
        strhtml += `<td><button id="${strStuId}" onclick=btnSelectPaper("${strStuId}","${strIdCurrEducls}","${strStuName}")>${strStuName}</button></td>`;
        //讨论回复
        strhtml += `<td>${qaIndexNumber}</td>`;
        strhtml += `<td>${qaCount}/${strqaScore}</td>`;
        strhtml += `<td>${strqaDate}</td>`;

        //评论
        strhtml += `<td>${CommentIndexNumber}</td>`;
        strhtml += `<td>${commentCount}/${strCommentScore}</td>`;
        strhtml += `<td>${strCommentDate}</td>`;

        //标记
        strhtml += `<td>${TagIndexNumber}</td>`;
        strhtml += `<td>${TagCount}/${strTagScore}</td>`;
        strhtml += `<td>${strTagDate}</td>`;

        strhtml += '</tr>';
      }

      $('#T1reeBind').html(strhtml);
      const TreeBind = GetUlObjInDivObj(divLayout, 'TreeBind');
      TreeBind.innerHTML = strhtml;
    }
  }

  //绑定讨论
  public async Bind_Qa_Answer() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    //讨论表
    let arrvqa_AnswerObjLst: Array<clsvqa_AnswerEN> = [];
    // //评价表
    // const arrSysCommentObjLst: Array<clsSysCommentEN> = [];
    // //打分表
    // const arrSysScoreSummaryObjLst: Array<clsSysScoreSummaryEN> = [];
    let objSysScoreSummaryEN: clsSysScoreSummaryEN = new clsSysScoreSummaryEN();

    const strUserId = GetInputValueInDivObj(divName, 'hidStuId');
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    //得到讨论表的条件；010203代表属于讨论的类型；
    const strWhereCond3 = ` 1=1 and updUser='${strUserId}' and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}' And answerTypeId in ('01','02','03') order by updDate desc`;
    // const strWhereCond4 = ` 1=1 and updUser='${strUserId}' and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;

    //intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页

    //打分00041 0042 表示讨论打分 和评价打分（教师专属）
    const strWhereCond5 = ` 1=1 and userId='${strUserId}' And scoreTypeId ='0041' And idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;

    try {
      //获取讨论数据；
      arrvqa_AnswerObjLst = await vqa_Answer_GetObjLstAsync(strWhereCond3);

      await SysScoreSummary_GetFirstObjAsync(strWhereCond5).then((jsonData) => {
        objSysScoreSummaryEN = <clsSysScoreSummaryEN>jsonData;
      });

      let strhtml = '';
      const cateid = 0;

      //$('#tbList tr').remove();

      strhtml += `<tr cate-id="${cateid}" ><td>`;

      //strhtml += '<div style="float:left;"><h3>' + intJ + '.' + arrSubViewpointTypeObjLst[j].subViewpointTypeName + '</h3></div>';
      strhtml += '<div style="float:left;"><h3>讨论数据</h3></div>';
      strhtml += '<div style="float:right;">';
      if (objSysScoreSummaryEN != null) {
        if (objSysScoreSummaryEN.isSubmit == false) {
          strhtml += `<a style="float:left;" href="javascript:void(0)" onclick=BtnAddOrUpdateScoreSummary_Click("${strUserId}","${strIdCurrEducls}","0041") class="btn btn-info btn-sm">${clsIcon.faPenToSquare}打分</a>`;
          strhtml += `<a href="javascript:void(0)" onclick=BtnSubmitScoreSummary_Click("${strUserId}","${strIdCurrEducls}","0041")><i class="layui-icon layui-icon-list" style="font-size:16px; color: #219167;" title="提交" ></i>提交</a>`;
        }
      } else {
        strhtml += `<a style="float:left;" href="javascript:void(0)" onclick=BtnAddOrUpdateScoreSummary_Click("${strUserId}","${strIdCurrEducls}","0041") class="btn btn-info btn-sm">${clsIcon.faPenToSquare}打分</a>`;
        strhtml += `<a href="javascript:void(0)" onclick=BtnSubmitScoreSummary_Click("${strUserId}","${strIdCurrEducls}","0041")><i class="layui-icon layui-icon-list" style="font-size:16px; color: #219167;" title="提交" ></i>提交</a>`;
      }

      strhtml += '</div></td></tr>';

      let intK = 0;

      for (let k = 0; k < arrvqa_AnswerObjLst.length; k++) {
        intK++;

        strhtml += `<tr cate-id="${cateid}" fid="${intK}" ><td>`;

        strhtml += `&nbsp;&nbsp;<span class="color3">${intK}</span>.${clsIcon.faPlay}【讨论内容】${arrvqa_AnswerObjLst[k].answerContent}`;

        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="color2">${clsIcon.faPlay}【讨论时间】${arrvqa_AnswerObjLst[k].updDate}</span>`;

        strhtml += '</td></tr>';
      }
      //}

      $('#tbList').html(strhtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //绑定评价
  public async Bind_SysComment() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //评价表
    let arrSysCommentObjLst: Array<clsSysCommentEN> = [];
    //打分表
    // const arrSysScoreSummaryObjLst: Array<clsSysScoreSummaryEN> = [];
    let objSysScoreSummaryEN: clsSysScoreSummaryEN = new clsSysScoreSummaryEN();

    const strUserId = GetInputValueInDivObj(divName, 'hidStuId');
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    //得到讨论表的条件；010203代表属于讨论的类型；
    // const strWhereCond3 = ` 1=1 and updUser='${strUserId}' and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}' And answerTypeId in ('01','02','03') order by updDate desc`;
    const strWhereCond4 = ` 1=1 and updUser='${strUserId}' and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}' order by updDate desc`;

    //intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页

    //打分00041 0042 表示讨论打分 和评价打分（教师专属）
    const strWhereCond5 = ` 1=1 and userId='${strUserId}' And scoreTypeId ='0042' And idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;

    try {
      //获取评价数据；
      arrSysCommentObjLst = await SysComment_GetObjLstAsync(strWhereCond4);
      await SysScoreSummary_GetFirstObjAsync(strWhereCond5).then((jsonData) => {
        objSysScoreSummaryEN = <clsSysScoreSummaryEN>jsonData;
      });

      let strhtml = '';
      const cateid = 0;

      //$('#tbList tr').remove();

      strhtml += `<tr cate-id="${cateid}" ><td>`;

      //strhtml += '<div style="float:left;"><h3>' + intJ + '.' + arrSubViewpointTypeObjLst[j].subViewpointTypeName + '</h3></div>';
      strhtml += '<div style="float:left;"><h3>评价数据</h3></div>';
      strhtml += '<div style="float:right;">';
      if (objSysScoreSummaryEN != null) {
        if (objSysScoreSummaryEN.isSubmit == false) {
          strhtml += `<a style="float:left;" href="javascript:void(0)" onclick=BtnAddOrUpdateScoreSummary_Click("${strUserId}","${strIdCurrEducls}","0042") class="btn btn-info btn-sm">${clsIcon.faPenToSquare}打分</a>`;
          strhtml += `<a href="javascript:void(0)" onclick=BtnSubmitScoreSummary_Click("${strUserId}","${strIdCurrEducls}","0042")><i class="layui-icon layui-icon-list" style="font-size:16px; color: #219167;" title="提交" ></i>提交</a>`;
        }
      } else {
        strhtml += `<a style="float:left;" href="javascript:void(0)" onclick=BtnAddOrUpdateScoreSummary_Click("${strUserId}","${strIdCurrEducls}","0042") class="btn btn-info btn-sm">${clsIcon.faPenToSquare}打分</a>`;
        strhtml += `<a href="javascript:void(0)" onclick=BtnSubmitScoreSummary_Click("${strUserId}","${strIdCurrEducls}","0042")><i class="layui-icon layui-icon-list" style="font-size:16px; color: #219167;" title="提交" ></i>提交</a>`;
      }

      strhtml += '</div></td></tr>';

      let intK = 0;

      for (let k = 0; k < arrSysCommentObjLst.length; k++) {
        intK++;

        strhtml += `<tr cate-id="${cateid}" fid="${intK}" ><td>`;

        strhtml += `&nbsp;&nbsp;<span class="color3">${intK}</span>.${clsIcon.faPlay}【评价内容】${arrSysCommentObjLst[k].comment}`;

        strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="color2">${clsIcon.faPlay}【评价时间】${arrSysCommentObjLst[k].updDate}</span>`;

        strhtml += '</td></tr>';
      }
      //}

      $('#tbCommentList').html(strhtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //讨论打分  --评价打分
  public async BtnAddOrUpdateScoreSummary_Click(
    strUserId: string,
    strIdCurrEducls: string,
    strScoreTypeId: string,
  ) {
    let objSysScoreSummaryEN: clsSysScoreSummaryEN = new clsSysScoreSummaryEN();
    //通过条件查询是否存在、存在则取到分数显示到文本框；
    const strWhereCond = ` 1=1 And idCurrEduCls = '${strIdCurrEducls}' And userId = '${strUserId}' And scoreTypeId = '${strScoreTypeId}'`;
    await SysScoreSummary_GetFirstObjAsync(strWhereCond).then((jsonData) => {
      objSysScoreSummaryEN = <clsSysScoreSummaryEN>jsonData;
      if (objSysScoreSummaryEN != null) {
        $('#txtScoreName').val(objSysScoreSummaryEN.score);
      }
    });
  }

  //讨论提交 ---//评价提交
  public async BtnSubmitScoreSummary_Click(
    strUserId: string,
    strIdCurrEducls: string,
    strScoreTypeId: string,
  ) {
    const strThisFuncName = this.BtnSubmitScoreSummary_Click.name;
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    let objSysScoreSummaryEN: clsSysScoreSummaryEN = new clsSysScoreSummaryEN();
    //通过条件查询是否存在、存在则取到分数显示到文本框；
    const strWhereCond = ` 1=1 And idCurrEduCls = '${strIdCurrEducls}' And userId = '${strUserId}' And scoreTypeId = '${strScoreTypeId}'`;
    await SysScoreSummary_GetFirstObjAsync(strWhereCond).then((jsonData) => {
      objSysScoreSummaryEN = <clsSysScoreSummaryEN>jsonData;
    });
    if (objSysScoreSummaryEN != null) {
      const objNewSysScoreSummaryEN: clsSysScoreSummaryEN = new clsSysScoreSummaryEN();
      objNewSysScoreSummaryEN.SetmId(objSysScoreSummaryEN.mId);
      //设置提交状态；
      objNewSysScoreSummaryEN.SetIsSubmit(true);

      objNewSysScoreSummaryEN.sfUpdFldSetStr = objNewSysScoreSummaryEN.updFldString; //设置哪些字段被修改(脏字段)
      if (objNewSysScoreSummaryEN.mId == 0 || objNewSysScoreSummaryEN.mId == undefined) {
        throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
      }

      try {
        const returnBool: boolean = await SysScoreSummary_UpdateRecordAsync(
          objNewSysScoreSummaryEN,
        );
        if (returnBool == true) {
          //刷新缓存
          this.CurrEduClsStuTree(objLayOut);
          this.li_QaCommentScore_Click();
          message.success('操作成功!');
          console.log('操作成功！');
        } else {
          //刷新缓存
          //const responseText2 =  this.CurrEduClsStuTree();
          message.success('操作失败!');
          console.log('操作失败！');
        }
      } catch (e: any) {
        console.error('catch(e)=');
        console.error(e);
        const strMsg = `修改记录不成功,${e}.`;
        alert(strMsg);
      }
    }
  }

  //打分提交
  public async SubmitScore_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    try {
      const strUserId = GetInputValueInDivObj(divName, 'hidStuId');
      const strUpdUser = userStore.getUserId;
      const strnum = GetInputValueInDivObj(divName, 'hidTabNum');

      const objSysScoreSummaryEN: clsSysScoreSummaryEN = new clsSysScoreSummaryEN();
      objSysScoreSummaryEN.SetUserId(strUserId);
      objSysScoreSummaryEN.SetScore(GetInputValueInDivObjN(divName, 'txtScoreName'));
      objSysScoreSummaryEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
      if (strnum == '1') {
        //讨论
        objSysScoreSummaryEN.scoreTypeId = '0041';
      }
      if (strnum == '2') {
        //讨论
        objSysScoreSummaryEN.scoreTypeId = '0042';
      } else {
        //标志
        objSysScoreSummaryEN.scoreTypeId = '0045';
      }
      objSysScoreSummaryEN.SetIsSubmit(false);
      objSysScoreSummaryEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
      objSysScoreSummaryEN.SetUpdUser(strUpdUser); // 修改用户Id

      const responseText = await SysCommentEx_AddOrUpdateSysScoreSummaryAsync(objSysScoreSummaryEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        //刷新缓存
        await this.CurrEduClsStuTree(divName);
        message.success('操作成功!');
        console.log('操作成功！');
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `操作不成功. ${e}.`;
      alert(strMsg);
    }
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
        divName = CommentScore.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = CommentScore.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = CommentScore.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = CommentScore.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = CommentScore.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = CommentScore.divPager;
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
}
