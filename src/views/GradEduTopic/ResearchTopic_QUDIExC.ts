import $ from 'jquery';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import { clsRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaEN';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import {
  CurrEduCls_GetObjByIdCurrEduClsAsync,
  CurrEduCls_GetObjLstAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { RTUserRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTUserRelaWApi';
import {
  ResearchTopic_GetFirstObjAsync,
  ResearchTopic_GetObjByTopicIdCache,
  ResearchTopic_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { CurrEduClsEx_SortFun_IntTag } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsExWApi';
import { CurrEduClsTeacherEx_SetCurrEduClsOrderNum4TeacherId } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsTeacherExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { TreeNode } from '@/ts/components/TreeNode';
import { ResearchTopic_QUDIExB } from '@/views/GradEduTopic/ResearchTopic_QUDIExB';
import { ResearchTopicEx_GetObjExByLastVisitedDate } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { clsResearchTopicENEx } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicENEx';
import {
  RTUserRelaEx_GetTopicIdLstByUserId,
  RTUserRelaEx_UpdateLastVisitedDate,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsRTUserRelaExWApi';
import { userStore } from '@/store/modulesShare/user';
class TreeNodeImpl implements TreeNode {
  id: string;
  label: string;
  type: string;
  expanded: boolean;
  children?: TreeNode[];
  parentNode: TreeNode | null;

  constructor(
    id: string,
    label: string,
    type: string,
    expanded: boolean,
    parentNode: TreeNode | null,
  ) {
    this.id = id;
    this.label = label;
    this.type = type;
    this.expanded = expanded;
    this.parentNode = parentNode;
  }
}
export async function ResearchTopic_QUDIEx_BindTr(
  divLayout: HTMLDivElement,
): Promise<Array<TreeNodeImpl>> {
  const arrTreeNode = new Array<TreeNodeImpl>();
  const strWhereCond = await new ResearchTopic_QUDIExB(divLayout).CombineResearchTopicCondition();
  //声明主题变量
  let arrResearchTopicObjLst0: Array<clsResearchTopicEN> = [];
  // const arrResearchTopicObjLst: Array<clsResearchTopicEN> = [];
  //声明主题变量
  let arrCurrEduClsObjLst: Array<clsCurrEduClsEN> = [];

  arrResearchTopicObjLst0 = await ResearchTopic_GetObjLstAsync(strWhereCond);
  let arridCurrEduCls = '';
  for (let i = 0; i < arrResearchTopicObjLst0.length; i++) {
    arridCurrEduCls += `${arrResearchTopicObjLst0[i].idCurrEduCls},`;
  }
  if (arridCurrEduCls.length > 0) {
    arridCurrEduCls = arridCurrEduCls.substring(0, arridCurrEduCls.length - 1);

    const strWhereCond2 = `idCurrEduCls in(${arridCurrEduCls}) order by eduClsName Asc`;

    arrCurrEduClsObjLst = await CurrEduCls_GetObjLstAsync(strWhereCond2);
    const strRoleName = userStore.getRoleName;

    if (strRoleName.indexOf('学生') == -1) {
      const strTeacherId = userStore.getUserId;
      await CurrEduClsTeacherEx_SetCurrEduClsOrderNum4TeacherId(arrCurrEduClsObjLst, strTeacherId);
      arrCurrEduClsObjLst = arrCurrEduClsObjLst.sort(CurrEduClsEx_SortFun_IntTag);
    }
  }

  //主题用户关系
  const strWhereCond3 = `UserID ='${userStore.getUserId}'`;
  let arrRTUserRelaObjLst: Array<clsRTUserRelaEN> = [];

  arrRTUserRelaObjLst = await RTUserRela_GetObjLstAsync(strWhereCond3);

  //$("#TreeBind li").remove();
  const strUserId = userStore.getUserId;
  const arrTopicId = await RTUserRelaEx_GetTopicIdLstByUserId(strUserId);
  // console.log(arrRTUserRelaObjLst, strUserId);
  if (arrCurrEduClsObjLst.length > 0) {
    //判断如果存在00000050私有教学班，但是没有私有主题，则默认添加一个默认主题
    const objCurrEduCls = arrCurrEduClsObjLst.find((x) => x.idCurrEduCls == '00000050');
    if (objCurrEduCls != null) {
      //有这个教学班，那么查询是否有这个教学班的私有主题，没有则默认添加一个(01代表私有)
      const strWhereCond = ` 1=1 And idCurrEduCls = '00000050' And updUser = '${strUserId}' And shareId = '01'`;
      const objResearchTopicEN = await ResearchTopic_GetFirstObjAsync(strWhereCond);
      if (objResearchTopicEN != null) {
        console.log('已有私有主题');
        //主题菜单树展示
        // await this.ShowResearchTopicTree(
        //   arrCurrEduClsObjLst,
        //   arrResearchTopicObjLst0,
        //   arrRTUserRelaObjLst,
        // );
        let tnCurrEduCls;

        //如果私有教学班没有 则直接显示；
        for (let j = 0; j < arrCurrEduClsObjLst.length; j++) {
          const objCurrEduCls = arrCurrEduClsObjLst[j];
          let htmleduClsName = '';
          const strEduClsTypeId = arrCurrEduClsObjLst[j].eduClsTypeId;
          //如果是公共私有教学班那么就不显示
          if (strEduClsTypeId == '0001') {
            htmleduClsName = `私有研究`;
          } else {
            htmleduClsName = arrCurrEduClsObjLst[j].eduClsName;
          }

          tnCurrEduCls = new TreeNodeImpl(
            objCurrEduCls.idCurrEduCls,
            htmleduClsName,
            'CurrEduCls',
            false,
            null,
          );

          const spnLevelCurrEduCls: HTMLSpanElement = document.createElement('span');
          //aLevel1.href = "#";
          spnLevelCurrEduCls.id = Format('{0}', objCurrEduCls.idCurrEduCls);
          spnLevelCurrEduCls.classList.add('main');
          spnLevelCurrEduCls.title = objCurrEduCls.idCurrEduCls;
          spnLevelCurrEduCls.setAttribute('idCurrEduCls', objCurrEduCls.idCurrEduCls);
          const iLevel1 = <HTMLElement>document.createElement('i');
          iLevel1.classList.add('icon-plus-sign');

          const arrResearchTopicObjLst = arrResearchTopicObjLst0.filter(
            (x) =>
              x.idCurrEduCls == arrCurrEduClsObjLst[j].idCurrEduCls &&
              arrTopicId.indexOf(x.topicId) > -1,
          );
          if (arrResearchTopicObjLst.length > 0) {
            const arrResearchTopicExObjLst = await ResearchTopicEx_GetObjExByLastVisitedDate(
              arrResearchTopicObjLst,
            );
            //循环数据
            for (let i = 0; i < arrResearchTopicExObjLst.length; i++) {
              const objResearchTopic = arrResearchTopicExObjLst[i];
              await BindTr_ResearchTopic(tnCurrEduCls, objResearchTopic, arrRTUserRelaObjLst);
            }
            arrTreeNode.push(tnCurrEduCls);
          } else {
            //没有则添加一个
            //没有主题就默认添加一天主题数据；
            //temp await this.AddPrivateTopic();
          }
        }
      }
    }
  }
  // console.log(arrTreeNode);
  return arrTreeNode;
}
export async function BindTr_ResearchTopic(
  ul_App: TreeNodeImpl,

  objResearchTopic: clsResearchTopicENEx,
  arrRTUserRelaObjLst: Array<clsRTUserRelaEN>,
) {
  let strTopicName = objResearchTopic.topicName;
  if (strTopicName.length > 15) {
    strTopicName = `${strTopicName.substring(0, 15)}...`;
  }

  // strhtml += `<li id="li${objResearchTopic.topicId}" onclick=btnSelectResearchTopic("${objResearchTopic.topicId}","${objResearchTopic.idCurrEduCls}","${objResearchTopic.topicName}","${strEduClsTypeId}")>`;
  //默认存放第一条数据显示；

  //根据主题用户关系得到当前主题和登录用户之间的身份信息
  let strIcon = '';
  const objRTUserRela = arrRTUserRelaObjLst.find((x) => x.topicId == objResearchTopic.topicId);
  if (objRTUserRela != null) {
    switch (objRTUserRela.topicUserRoleId) {
      case '0001':
        strIcon += `-指导者`;
        break;
      case '0002':
        strIcon += '-组长';
        break;
      case '0003':
        strIcon += '-成员';
        break;
    }
  } else {
    strIcon += '-管理';
  }

  //if (i == 0) {
  //判断存放的id控件是否为空；
  if (IsNullOrEmpty(clsPrivateSessionStorage.topicIdInTree) == true) {
    //存放Id
    ResearchTopic_QUDIExB.topicId = objResearchTopic.topicId;
    clsPrivateSessionStorage.topicIdInTree = ResearchTopic_QUDIExB.topicId;
    clsPubLocalStorage.idCurrEduCls = objResearchTopic.idCurrEduCls;
    $('#topicName', window.parent.document).html(objResearchTopic.topicName);
    // clsPubLocalStorage.eduClsTypeId = strEduClsTypeId;

    // strhtml += `<a href="javascript:void(0)" title="${objResearchTopic.topicName}" class="selected">${strTopicName}${strIcon}</a>`;
    strTopicName += strIcon;
  } else {
    strTopicName += strIcon;
  }

  const tnCodeType = new TreeNodeImpl(
    objResearchTopic.topicId,
    strTopicName,
    'ResearchTopic',
    false,
    ul_App,
  );
  if (ul_App.children == null) ul_App.children = [];
  ul_App.children.push(tnCodeType);
}

//点击主题树菜单事件；
export async function ResearchTopic_QUDIEx_btnSelectResearchTopic(
  strKeyId: string,
  strIdCurrEduCls: string,
  divLayout: HTMLDivElement,
  // strTopicName,
  // strEduClsTypeId,
) {
  const objResearchTopicEN = await ResearchTopic_GetObjByTopicIdCache(strKeyId, strIdCurrEduCls);
  if (objResearchTopicEN == null) return;
  const objCurrEduCls = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
  if (objCurrEduCls == null) return;
  //$("#divContent_list").show();
  //先清除背景色
  $('.submenu li a').removeClass('selected');
  //添加背景色
  $(`#${strKeyId} a`).addClass('selected');
  //存储点击的id
  $('#hidTopicRelaId').val(strKeyId);
  //存储教学班Id
  clsPubLocalStorage.idCurrEduCls = strIdCurrEduCls;
  //把主题名称传递给父框架页
  $('#TopicName', window.parent.document).html(objResearchTopicEN.topicName);
  //存储教学班Id
  $('#hidEduClsTypeId').val(objCurrEduCls.eduClsTypeId);
  const bolIsSuecc = await RTUserRelaEx_UpdateLastVisitedDate(strKeyId, userStore.getUserId);

  //alert(strKeyId);
  //点击后调整关系表数据方法；

  const objPage = new ResearchTopic_QUDIExB(divLayout);
  objPage.GetAllFunctionMethod(strKeyId);
}
