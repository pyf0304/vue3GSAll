import $ from 'jquery';
import { clsgs_PaperReportEN } from '@/ts/L0Entity/GradEduTopic/clsgs_PaperReportEN';
import {
  gs_PaperReportEx_GetReportMonthNumObjLstAsync,
  gs_PaperReportEx_GetReportYearNumObjLstAsync,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsgs_PaperReportExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { gs_PaperReportCRUDExC } from '@/views/GradEduTopic/gs_PaperReportCRUDExC';

// 论文汇报树绑定;
export async function gs_PaperReportCRUDEx_Bind_PaperReportTree() {
  const divName = new gs_PaperReportCRUDExC().getDivName(enumDivType.LayOut_01);
  const strWhereCond = ` topicId='${clsPrivateSessionStorage.topicIdInTree}'`;

  //声明主题变量
  let arrgs_ReportYearNumObjLst: Array<clsgs_PaperReportEN> = [];
  let arrgs_ReportMonthNumObjLst1: Array<clsgs_PaperReportEN> = [];
  let arrgs_ReportMonthNumObjLst2: Array<clsgs_PaperReportEN> = [];

  await gs_PaperReportEx_GetReportYearNumObjLstAsync(strWhereCond).then((jsonData) => {
    arrgs_ReportYearNumObjLst = <Array<clsgs_PaperReportEN>>jsonData;
  });
  await gs_PaperReportEx_GetReportMonthNumObjLstAsync(strWhereCond).then((jsonData) => {
    arrgs_ReportMonthNumObjLst1 = <Array<clsgs_PaperReportEN>>jsonData;
  });

  let strhtml = '';

  for (let i = 0; i < arrgs_ReportYearNumObjLst.length; i++) {
    const strYear = arrgs_ReportYearNumObjLst[i].year;

    strhtml += '<li class="li">';

    strhtml += `<a href="javascript:void(0)" id="${strYear}" class="main" title="${strYear}" onclick=main_Click("${strYear}")>${strYear}年</a>`;

    strhtml += `<ul class="submenu" id="ul${strYear}">`;

    arrgs_ReportMonthNumObjLst2 = arrgs_ReportMonthNumObjLst1.filter((x) => x.year == strYear);
    //循环数据
    for (let j = 0; j < arrgs_ReportMonthNumObjLst2.length; j++) {
      const strMonth = arrgs_ReportMonthNumObjLst2[j].month;

      strhtml += `<li id="li${strYear}${strMonth}" onclick=btnSelectMonth("${strYear}","${strMonth}")>`;
      //默认存放第一条数据显示；
      //判断存放的id控件是否为空；

      if (GetInputValueInDivObj(divName, 'hidYear') == '') {
        //存放Id
        $('#hidYear').val(strYear);
        $('#hidMonth').val(strMonth);

        strhtml += `<a style="float:left;" href="javascript:void(0)" title="${strMonth}" class="selected">${strMonth}月</a>`;
      } else {
        strhtml += `<a style="float:left;" href="javascript:void(0)" title="${strMonth}">${strMonth}月</a>`;
      }
      strhtml += '<div>';
      strhtml += `&nbsp;&nbsp;&nbsp;<span class="badge badge-primary" title="论文汇报${arrgs_ReportMonthNumObjLst2[j].memo}条">${arrgs_ReportMonthNumObjLst2[j].memo}</span>`;

      strhtml += '</div>';

      strhtml += '</li>';
    }
    strhtml += '</ul>';
    strhtml += '</li>';
  }
  $('#PaperReportTreeBind').html(strhtml);
}
