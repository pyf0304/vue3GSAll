import $ from 'jquery';
import { Public_Viewpoint } from './Public_Viewpoint';
import { clsgs_TotalDataRelaEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataRelaEN';
import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';

import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { clsvRTUserRelaENEx } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaENEx';
import { gs_TotalDataRela_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataRelaWApi';
import { gs_VpClassification_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationWApi';
import { vRTUserRela_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import { SysVote_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { clsRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaEN';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { sysVoteStore } from '@/store/modules/sysVote';
import { gs_TotalDataRelaEx_BindList_gs_TotalDataRela } from '@/ts/L3ForWApiEx/GradEduTools/clsgs_TotalDataRelaExWApi';
import { gs_VpClassificationRelaStore } from '@/store/modules/gs_VpClassificationRela';
// declare let window: any;
export class Public_UserRela {
  //绑定观点数据
  public static async Bind_vRTUserRela(lngmId: number): Promise<string> {
    // const strCourseId = clsPubLocalStorage.courseId;
    let strhtml = '';
    const strWhereCond = `1=1 and ${clsRTUserRelaEN.con_mId}=${lngmId}`;

    try {
      const objvRTUserRela = await vRTUserRela_GetFirstObjAsync(strWhereCond);

      if (objvRTUserRela != null) {
        //概念
        //技能
        strhtml += '<div class="info" id="infoRTUserRela">';
        strhtml += '<ul class="artlist">';

        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[用户名]：</span><span class="abstract-text">${objvRTUserRela.userName}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[角色]：</span><span class="abstract-text">${objvRTUserRela.topicUserRoleName}</span>&nbsp;&nbsp;&nbsp;</li>`;

        const strUserName = await vQxUsersSimStore.getUserName(objvRTUserRela.updUser);
        if (strUserName != '') {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
        }
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${clsDateTime.GetDate_Sim(
          objvRTUserRela.updDate,
        )}`;
        strhtml += '</li>';

        //如果当前观点有引用论文，那么就显示论文标题和作者
        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

        strhtml += '</ul></div>';

        //拼接；

        console.log('完成BindGv_SysSkill!');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    return strhtml;
  }

  //绑定观点列表数据
  private static async BindList_vRTUserRelaEx(
    strOperationType: string,
    arrvRTUserRelaExObjLst: Array<clsvRTUserRelaENEx>,
  ): Promise<string> {
    //主题用户关系
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    let strhtml = '';
    //换行符
    // const strCourseId = clsPubLocalStorage.courseId;
    const strRoleId = userStore.getRoleId;

    //观点关系
    let arrgs_TotalDataRelaObjLst: Array<clsgs_TotalDataRelaEN> = []; //
    let arrgs_TotalDataRelaObjLst0: Array<clsgs_TotalDataRelaEN> = []; //

    //观点分类
    let arrgs_VpClassificationObjLst: Array<clsgs_VpClassificationEN> = [];
    // const strWhereCondLike = `1=1 and voteTypeId='09' And ${clsSysVoteEN.con_UpdUser} = '${strUserId}'`; //新0605
    const strVoteType = '09';

    //关系查看需要点赞功能
    if (strOperationType == '01' || strOperationType == '07') {
      arrgs_TotalDataRelaObjLst0 = await gs_TotalDataRela_GetObjLstCache(
        clsPubLocalStorage.idCurrEduCls,
      );

      if (strOperationType == '07') {
        // //观点
      }
    }

    if (strOperationType == '06') {
      //主题用户关系

      const strWhereCond = ` 1 = 1 and topicId='${strTopicId}' order by updDate Asc`;
      //获取观点分类
      arrgs_VpClassificationObjLst = await gs_VpClassification_GetObjLstAsync(strWhereCond);
    }

    strhtml += '<div class="info" id="infoSysskill"><div class="title btn-3">';
    if (strOperationType == '01') {
      strhtml +=
        '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加技能" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加技能</button></div>';
    } else {
      strhtml +=
        '<div style="float:left;"><a href="javascript:void(0)" title="技能">技能</a></div>';
    }

    strhtml += '</div><ul class="artlist">';
    // let v = 0; //给内容加个序号
    for (let i = 0; i < arrvRTUserRelaExObjLst.length; i++) {
      const objvRTUserRelaEx = arrvRTUserRelaExObjLst[i];
      //得到skillId；
      const strUserId = objvRTUserRelaEx.userId;
      //各观点关系
      const strTotalDataId1 = `09${strUserId}`;
      // v++;
      if (strOperationType == '06') {
        const strClassificationName = await gs_VpClassificationRelaStore.getClassificationName(
          Number(objvRTUserRelaEx.memo),
          strTopicId,
        );
        if (strClassificationName != '') {
          strhtml += `<li><span class="rowtit color6">[技能]：</span><span class="abstract-text">${objvRTUserRelaEx.userName}</span>&nbsp;&nbsp;<span style="color:#17a2b8;">(${strClassificationName})</span></li>`;
        } else {
          strhtml += `<li><span class="rowtit color6">[技能]：</span><span class="abstract-text">${objvRTUserRelaEx.userName}</span>&nbsp;&nbsp;<span style="color:red;">(未分类)</span></li>`;
        }
      } else {
        strhtml += `<li><span class="rowtit color6">[技能]：</span><span class="abstract-text">${objvRTUserRelaEx.userName}</span></li>`;
      }

      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[类型]：</span><span class="abstract-text">${objvRTUserRelaEx.topicUserRoleName}</span>&nbsp;&nbsp;&nbsp;</li>`;

      strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[统计]：';
      if (objvRTUserRelaEx.appraiseCount != 0) {
        //评论
        strhtml += `&nbsp;&nbsp;评论数：${objvRTUserRelaEx.appraiseCount}`;
      }
      if (objvRTUserRelaEx.score != 0) {
        //评分
        strhtml += `&nbsp;&nbsp;综合评分：${objvRTUserRelaEx.score}`;
      }
      if (objvRTUserRelaEx.teaScore != 0) {
        strhtml += `&nbsp;&nbsp;教师评分：${objvRTUserRelaEx.teaScore}`;
      }
      if (objvRTUserRelaEx.stuScore != 0) {
        strhtml += `&nbsp;&nbsp;学生评分：${objvRTUserRelaEx.stuScore}`;
      }

      strhtml += '</li>';
      strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：</span>';
      const strUserName = await vQxUsersSimStore.getUserName(objvRTUserRelaEx.updUser);

      if (strOperationType == '06' || strOperationType == '07') {
        if (strOperationType == '06') {
          //加入到观点分类
          if (objvRTUserRelaEx.memo == '0000000000') {
            // onclick="btnAddClassificationRecordInTab_Click(${objvRTUserRelaEx.mId})"
            strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnAddClassificationRecordInTab" keyId="${objvRTUserRelaEx.mId}" style="float:right;" title="加入当前分类" class="layui-btn layui-btn layui-btn-xs"  > <i class="layui-icon" >&#xe61f;</i>加入分类</button>`;
          } else {
            strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="调整当前分类" class="layui-btn layui-btn layui-btn-xs" onclick=btnUpdateClassificationRecordInTab_Click(${objvRTUserRelaEx.mId},"${objvRTUserRelaEx.memo}") > ${clsIcon.faCommentDots}调整分类</button>`;
          }

          if (strUserId == objvRTUserRelaEx.updUser) {
            strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="移除引用" class="layui-btn-danger layui-btn layui-btn layui-btn-xs" onclick="btnDelSysskillRecordInTab_Click(${objvRTUserRelaEx.mId})" > <i class="layui-icon" >&#xe640;</i>移除</button>`;
          }
        } else if (strOperationType == '07') {
          const objLike = sysVoteStore.getObj(strVoteType, strUserId, strUserId); //新0605
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;';
          if (objLike == null) {
            strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${strUserId}","${objvRTUserRelaEx.updUser}","09")><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞"></a>`;
          } else {
            strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${strUserId}","${objvRTUserRelaEx.updUser}","09")><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞"></a>`;
          }
          strhtml += `&nbsp;${objvRTUserRelaEx.okCount}&nbsp;&nbsp;`;
          //评论
          //strhtml += '&nbsp;&nbsp;<span  style="color:royalblue" >评论数:' + objvRTUserRelaEx.appraiseCount + '</span >';
          strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('相关技能评论', '../GradEduTools/SysComment?Key=${strUserId}&Type=09&User=${
            objvRTUserRelaEx.updUser
          }&pubParentId=${clsPrivateSessionStorage.topicIdInTree}&FontSize=${$(
            '#hidFontSize',
          ).val()}')"> ${clsIcon.faCommentDots}添加评论<span class="badge text-bg-info">${
            objvRTUserRelaEx.appraiseCount
          }</span></button >`;
          //建立观点关系
        }
      } else {
        if (strUserName != '') {
          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color4">编辑用户：</span>${strUserName}`;
        }
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">编辑时间：</span>${clsDateTime.GetDate_Sim(
          objvRTUserRelaEx.updDate,
        )}`;
      }
      if (strOperationType == '01') {
        //历史版本
        if (strUserId == objvRTUserRelaEx.updUser) {
          if (objvRTUserRelaEx.isSubmit != true) {
            //修改个人观点
            strhtml += `&nbsp;&nbsp;<button title="修改" class="layui-btn layui-btn layui-btn-xs" onclick=btnUpdateRecordInTab_Click("${strUserId}")> ${clsIcon.faCommentDots}修改</button>`;
            //删除个人观点
            strhtml += `&nbsp;&nbsp;<button title="删除" class="layui-btn layui-btn-danger layui-btn-xs" onclick=btnDelRecordInTab_Click("${strUserId}")> <i class="layui-icon" >&#xe640;</i>删除</button>`;
            //观点提交
            strhtml += `&nbsp;&nbsp;<button title="提交" class="layui-btn layui-btn layui-btn-xs" onclick=btnIsSubmit_Click("${strUserId}")> ${clsIcon.faCommentDots}提交</button>`;
          }
        }
        if (strRoleId != '00620003') {
          //取消提交
          strhtml += `&nbsp;&nbsp;<button id="btnCancelSubmit" title="取消提交" class="layui-btn layui-btn layui-btn-xs" onclick=btnCancelSubmit_Click("${strUserId}")> ${clsIcon.faCommentDots}取消提交</button>`;
        }
        //建立观点关系

        arrgs_TotalDataRelaObjLst = arrgs_TotalDataRelaObjLst0.filter(
          (x) => x.totalDataId1 == strTotalDataId1,
        ); //
        strhtml += `&nbsp;&nbsp;<button id="AddViewRela" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('建立观点关系', '../GradEduTools/gs_TotalDataRela?keyId=${strUserId}&TypeId=09&OperationType=1','','',true)"> ${clsIcon.faCommentDots}建立观点关系</button >`;
      } else if (strOperationType == '02') {
        strhtml += `&nbsp;&nbsp;<button title="引用相关技能" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkSysskillInTab_Click("${strUserId}")> ${clsIcon.faCommentDots}引用该相关概念</button>`;
      } else if (strOperationType == '04') {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="移除关系" class="layui-btn-danger layui-btn layui-btn-xs" onclick=btnDelSysskillRecordInTab_Click("${strUserId}") > <i class="layui-icon" >&#xe640;</i>移除</button>`;
      } else if (strOperationType == '05') {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button title="建立关系" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkSysskillInTab_Click("${strUserId}")> ${clsIcon.faCommentDots}建立关系</button>`;
      }

      strhtml += '</li>';

      //主题查看——各观点关系查看
      if (strOperationType == '07') {
        arrgs_TotalDataRelaObjLst = arrgs_TotalDataRelaObjLst0.filter(
          (x) => x.totalDataId1 == strTotalDataId1,
        ); //
        if (arrgs_TotalDataRelaObjLst.length > 0) {
          strhtml += '<li>';

          strhtml += await gs_TotalDataRelaEx_BindList_gs_TotalDataRela(arrgs_TotalDataRelaObjLst);
          strhtml += `&nbsp;&nbsp;&nbsp;<button id="AddViewRela" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('关联观点查看', '../GradEduTools/gs_TotalDataRela?keyId=${strUserId}&TypeId=09&OperationType=2')"> ${clsIcon.faCommentDots}相关观点详细<span class="badge text-bg-info">${arrgs_TotalDataRelaObjLst.length}</span></button >`;
          strhtml += '</li>';
        }
      }

      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
    }
    strhtml += '</ul></div>';

    return strhtml;
  }

  //绑定观点视图
  public static async BindList_vRTUserRela(
    strOperationType: string,
    arrvRTUserRelaObjLst: Array<clsvRTUserRelaEN>,
  ): Promise<string> {
    const arrvRTUserRelaExObjLst: Array<clsvRTUserRelaENEx> = arrvRTUserRelaObjLst.map(
      this.GetVExByV,
    );
    const strHtml = await this.BindList_vRTUserRelaEx(strOperationType, arrvRTUserRelaExObjLst);
    return strHtml;
  }

  //转换论文观点数据到扩展观点实体
  private static GetVExByV(objvRTUserRela: clsvRTUserRelaEN): clsvRTUserRelaENEx {
    const objvRTUserRelaEx: clsvRTUserRelaENEx = new clsvRTUserRelaENEx();
    objvRTUserRelaEx.userId = objvRTUserRela.userId;
    objvRTUserRelaEx.userName = objvRTUserRela.userName;
    objvRTUserRelaEx.topicUserRoleName = objvRTUserRela.topicUserRoleName;

    objvRTUserRelaEx.okCount = objvRTUserRela.okCount;
    objvRTUserRelaEx.appraiseCount = objvRTUserRela.appraiseCount;
    objvRTUserRelaEx.score = objvRTUserRela.score;
    objvRTUserRelaEx.teaScore = objvRTUserRela.teaScore;
    objvRTUserRelaEx.stuScore = objvRTUserRela.stuScore;

    objvRTUserRelaEx.updDate = objvRTUserRela.updDate;
    objvRTUserRelaEx.updUser = objvRTUserRela.updUser;

    return objvRTUserRelaEx;
  }
}
