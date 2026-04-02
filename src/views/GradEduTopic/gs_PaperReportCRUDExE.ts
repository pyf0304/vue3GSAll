import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
import { vgs_PaperReport_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvgs_PaperReportWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { gs_PaperReportEx_GetReportDateNumObjLstAsync } from '@/ts/L3ForWApiEx/GradEduTopic/clsgs_PaperReportExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { gs_PaperReportCRUDExC } from '@/views/GradEduTopic/gs_PaperReportCRUDExC';
export async function gs_PaperReportCRUDEx_Bind_PaperReportList(divLayout: HTMLDivElement) {
  alert('gs_PaperReportCRUDExC_Bind_PaperReportList');
  const divName = new gs_PaperReportCRUDExC(divLayout).getDivName(enumDivType.LayOut_01);
  const strUserId = userStore.getUserId;
  const strRoleId = userStore.getRoleId;

  const strTopicId = clsPrivateSessionStorage.topicIdInTree;
  const intYear = GetInputValueInDivObj(divName, 'hidYear');
  const intMonth = $('#hidMonth').val();
  const strWhereCond = ` topicId='${strTopicId}' and year='${intYear}' and month='${intMonth}'`;
  console.log(strRoleId, strUserId, strWhereCond);
  //声明主题变量

  try {
    const arrgs_ReportDateNumObjLst = await gs_PaperReportEx_GetReportDateNumObjLstAsync(
      strWhereCond,
    );

    const arrgs_PaperReportObjLst1 = await vgs_PaperReport_GetObjLstAsync(strWhereCond);

    // 获取用户缓存数据;
    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    const strBr =
      '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    console.log(strRoleId, strUserId);
    let strhtml = '';

    for (let i = 0; i < arrgs_ReportDateNumObjLst.length; i++) {
      const strReportDate = arrgs_ReportDateNumObjLst[i].reportDate;
      strhtml += '<li class="layui-timeline-item">';
      strhtml += '<i class="layui-icon layui-timeline-axis"></i>';
      strhtml += '<div class="layui-timeline-content layui-text">';
      strhtml += `<h3 class="layui-timeline-title">${strReportDate}</h3>`;

      const arrgs_PaperReportObjLst2 = arrgs_PaperReportObjLst1.filter(
        (x) => x.reportDate == strReportDate,
      );
      for (let j = 0; j < arrgs_PaperReportObjLst2.length; j++) {
        const strKeyId = arrgs_PaperReportObjLst2[j].reportId;
        let strReportContent = arrgs_PaperReportObjLst2[j].reportContent;
        //处理换行
        strReportContent = strReportContent.replace(/\r\n/g, strBr);
        strReportContent = strReportContent.replace(/\n/g, strBr);

        const strUpdUser = arrgs_PaperReportObjLst2[j].updUser;
        const isSubmit = arrgs_PaperReportObjLst2[j].isSubmit;

        const strReportUser = arrgs_PaperReportObjLst2[j].reportUser;
        const strReportPaper = arrgs_PaperReportObjLst2[j].paperTitle;
        const strUpdDate = arrgs_PaperReportObjLst2[j].updDate;

        strhtml += `<span class="rowtit color1">[汇报论文]：</span>${strReportPaper}`;

        strhtml += `<div>${strReportContent}</div>`;
        strhtml += '<div>';
        if (arrgs_PaperReportObjLst2[j].score != 0) {
          //评分
          strhtml += `综合评分：${arrgs_PaperReportObjLst2[j].score}`;
        }
        if (arrgs_PaperReportObjLst2[j].teaScore != 0) {
          strhtml += `&nbsp;&nbsp;教师评分：${arrgs_PaperReportObjLst2[j].teaScore}`;
        }
        if (arrgs_PaperReportObjLst2[j].stuScore != 0) {
          strhtml += `&nbsp;&nbsp;学生评分：${arrgs_PaperReportObjLst2[j].stuScore}&nbsp;&nbsp;`;
        }
        strhtml += `<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('论文汇报评论', '../GradEduTools/SysComment?Key=${strKeyId}&Type=12&User=${strUpdUser}&pubParentId=${strTopicId}')"> ${clsIcon.faCommentDots}添加评论<span class="badge text-bg-info">${arrgs_PaperReportObjLst2[j].appraiseCount}</span></button >`;

        strhtml += '</div>';
        strhtml += '<div style="width:100%;height:40px;">';
        strhtml += '<div style="float:left;">';
        const strUserName = await vQxUsersSimStore.getUserName(strUpdUser);
        if (strUserName != '') {
          strhtml += `<span class="rowtit color1">[编辑用户]：</span>${strUserName}`;
        }
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color1">[编辑时间]：</span>${strUpdDate}`;
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color1">[汇报人]：</span>${strReportUser}`;
        if (arrgs_PaperReportObjLst2[j].pPTUrl != '') {
          const strfilepath = GetAddressAndPort() + arrgs_PaperReportObjLst2[j].pPTUrl;
          const strfilename = `${strReportDate}汇报的PPT`;
          strhtml += `<button title="下载PPT" class="layui-btn layui-btn layui-btn-xs" onclick=btnDownLoad_PaperReport_Click("${strfilepath}","${strfilename}")><i class="layui-icon">&#xe601;</i>下载PPT</button>`;
        }
        if (arrgs_PaperReportObjLst2[j].pDFUrl != '') {
          const strfilepath = GetAddressAndPort() + arrgs_PaperReportObjLst2[j].pDFUrl;
          const strfilename = `${strReportDate}汇报的PDF`;
          strhtml += `<button title="下载PDF" class="layui-btn layui-btn layui-btn-xs" onclick=btnDownLoad_PaperReport_Click("${strfilepath}","${strfilename}")><i class="layui-icon">&#xe601;</i>下载PDF</button>`;
          strhtml += `<span class="colorRed" style="padding-left:50px;" onclick="xadmin.open('pdf查看', '../GradEduEx/Pdf?file=${strfilepath}')">pdf查看</span>`;
        }
        strhtml += '</div>';
        strhtml += '<div style="float:right; margin-right:20px;">';
        if (isSubmit == false) {
          strhtml += '&nbsp;<span class="rowtit color2">未提交</span>&nbsp;&nbsp;';
          if (strUserId == strUpdUser) {
            //删除
            strhtml += `<button title="提交论文汇报" class="layui-btn layui-btn-danger layui-btn-xs" onclick=UpdateIsSubmit_Click("${strKeyId}",1) href="javascript:;"><i class="layui-icon">&#x1005;</i>提交</button>`;
            //编辑
            strhtml += `<button title="编辑论文汇报" class="btn btn-info btn-sm" onclick=btnUpdategs_PaperReport_Click("${strKeyId}")>${clsIcon.faPenToSquare}</button>`;
          }
          if (strRoleId != '00620003') {
            //删除
            strhtml += `<button title="删除论文汇报" class="btn-danger btn btn-sm" onclick=btnDelgs_PaperReport_Click("${strKeyId}") href="javascript:;">${clsIcon.faTrash}</button>`;
          }
        } else {
          strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[已提交]</span>';
          if (
            strRoleId == enumQxRoles.System_Admin_00620001 ||
            strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
          ) {
            //删除
            strhtml += `<button title="撤销提交" class="layui-btn layui-btn-danger layui-btn-xs" onclick=UpdateIsSubmit_Click("${strKeyId}",0) href="javascript:;"><i class="layui-icon">&#xe9aa;</i>撤销提交</button>`;
          }
        }
        //判断角色
        //不等于学生，其他角色都可以添加问题
        strhtml += '</div>';

        strhtml += '</div>';

        strhtml += '<div style="border-bottom: 1px solid #eee;"></div>';
      }
      strhtml += '</div>';
      strhtml += '</li>';
    }
    $('#PaperReportList').html(strhtml);
  } catch (e: any) {
    console.error(e);
    const strMsg = `获取论文汇报列表不成功,${e}.`;
    alert(strMsg);
  }
}
