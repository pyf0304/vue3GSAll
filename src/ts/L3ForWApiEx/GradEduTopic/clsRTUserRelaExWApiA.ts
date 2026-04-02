import { userStore } from '@/store/modulesShare/user';
import { clsRTUserRelaENEx } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaENEx';
import {
  GetBr_Empty,
  GetButton_Empty,
  GetDiv_Empty,
  GetLabel_Empty,
  GetLi_Empty,
  GetSpan_Empty,
  GetUl_Empty,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

//绑定主题用户关系列表；
export async function RTUserRelaEx_BindTabvRTUserRelaA(
  divName: HTMLDivElement,
  arrvRTUserRelaObjLst: Array<clsRTUserRelaENEx>,
) {
  // let strhtml = '';

  // for (const objInFor of arrvRTUserRelaObjLst) {
  //   await RTUserRelaEx_FuncMapByFldName(clsRTUserRelaENEx.con_CollegeName, objInFor);
  //   await RTUserRelaEx_FuncMapByFldName(clsRTUserRelaENEx.con_ColorCode, objInFor);
  //   await RTUserRelaEx_FuncMapByFldName(clsRTUserRelaENEx.con_MajorName, objInFor);
  //   await RTUserRelaEx_FuncMapByFldName(clsRTUserRelaENEx.con_TopicUserRoleName, objInFor);
  //   await RTUserRelaEx_FuncMapByFldName(clsRTUserRelaENEx.con_UserName, objInFor);
  // }
  const strUserId = userStore.getUserId;
  let strRoleId = '';
  // strhtml += '<div class="info" id="infoRTUserRela"><div class="title btn-4">';
  // const divInfo = GetDiv_Empty('info');

  // divInfo.id = 'infoRTUserRela';

  const divTitle = GetDiv_Empty('title btn-4');

  const ul1 = GetUl_Empty('artlist');
  //获取当前用户在 主题用户关系表中的角色；
  const objUserRela = arrvRTUserRelaObjLst.find((x) => x.userId == strUserId);
  if (objUserRela != null) {
    strRoleId = objUserRela.topicUserRoleId;
  }

  let v = 0; //给内容加个序号
  for (let i = 0; i < arrvRTUserRelaObjLst.length; i++) {
    //得到mId；
    const objRTUserRelaEx = arrvRTUserRelaObjLst[i];

    const strUserColor = objRTUserRelaEx.colorCode;
    const strTopicUser = objRTUserRelaEx.userId;
    // const strTopicRoleId = objRTUserRelaEx.topicUserRoleId;
    v++;
    const li1 = GetLi_Empty('');
    const spnUserName0 = GetSpan_Empty('rowtit color4');
    spnUserName0.innerText = `${v}.[用户]：`;
    const spnUserName = GetSpan_Empty('abstract-text');
    spnUserName.innerText = objRTUserRelaEx.userName;

    li1.appendChild(spnUserName0);

    li1.appendChild(spnUserName);

    //学院

    const spnClg0 = GetSpan_Empty('rowtit color4 ml3');
    spnUserName0.innerText = `[学院]：`;
    const spnClg = GetSpan_Empty('abstract-text');
    spnUserName.innerText = objRTUserRelaEx.collegeName;
    li1.appendChild(spnClg0);
    li1.appendChild(spnClg);

    const spnMajor0 = GetSpan_Empty('rowtit color4 ml3');
    spnUserName0.innerText = `[专业]：`;
    const spnMajor = GetSpan_Empty('abstract-text');
    spnUserName.innerText = objRTUserRelaEx.majorName;
    li1.appendChild(spnMajor0);
    li1.appendChild(spnMajor);

    const spnRole0 = GetSpan_Empty('rowtit color4 ml3');
    spnUserName0.innerText = `[角色]：`;
    const spnRole = GetSpan_Empty('abstract-text');
    spnUserName.innerText = objRTUserRelaEx.topicUserRoleName;
    li1.appendChild(spnRole0);
    li1.appendChild(spnRole);

    const spnColor0 = GetSpan_Empty('rowtit color4 ml3');
    spnUserName0.innerText = `[色码]：`;
    const spnColor = GetSpan_Empty('abstract-text');

    const lblColor = GetLabel_Empty('');
    lblColor.style.background = strUserColor;
    spnColor.appendChild(lblColor);
    li1.appendChild(spnColor0);
    li1.appendChild(spnColor);

    // strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[操作]：';
    const spnOp0 = GetSpan_Empty('rowtit color4 ml3');
    spnOp0.innerText = `[操作]：`;
    const spnButton_Up = GetButton_Empty('layui-btn layui-btn layui-btn layui-btn-xs');
    const spnButton_Del = GetButton_Empty('layui-btn layui-btn layui-btn layui-btn-xs');

    ////修改色码
    ////只能修改自己的，所以这里判断一下；

    if (strRoleId != '0003') {
      //组长或指导员
      // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="修改" class="layui-btn layui-btn layui-btn layui-btn-xs" onclick="btnUpdateUserRelaInTab_Click(${objRTUserRelaEx.mId},${strRoleId})" >修改</button>`;
      spnButton_Up.innerText = '修改';
      // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="删除" class="layui-btn-danger layui-btn layui-btn layui-btn-xs" onclick="btnDelUserRelaInTab_Click(${objRTUserRelaEx.mId})" > <i class="layui-icon" >&#xe640;</i>移除</button>`;
      spnButton_Del.innerText = '移除';
    } else {
      //成员 只能修改自己的，所以这里判断一下；
      if (strTopicUser == strUserId) {
        // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="修改" class="layui-btn layui-btn layui-btn layui-btn-xs" onclick="btnUpdateUserRelaInTab_Click(${objRTUserRelaEx.mId},${strRoleId})" >修改</button>`;
        spnButton_Up.innerText = '修改';
        // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="删除" class="layui-btn-danger layui-btn layui-btn layui-btn-xs" onclick="btnDelUserRelaInTab_Click(${objRTUserRelaEx.mId})" > <i class="layui-icon" >&#xe640;</i>移除</button>`;
        spnButton_Del.innerText = '移除';
      }
    }
    li1.appendChild(spnOp0);
    li1.appendChild(spnButton_Up);
    li1.appendChild(spnButton_Del);

    const br1 = GetBr_Empty();
    const div1 = GetDiv_Empty('');
    div1.style.borderBottom = '1px solid #eee';
    ul1.appendChild(li1);
    ul1.appendChild(br1);
    ul1.appendChild(div1);
  }
  // strhtml += '</ul></div>';
  divTitle.appendChild(ul1);
  // divInfo.appendChild(divTitle);
  //拼接；
  divName.appendChild(divTitle);

  // $(`#${strDivName}`).html(strhtml); //#divRtUserRelaDataLst
}
