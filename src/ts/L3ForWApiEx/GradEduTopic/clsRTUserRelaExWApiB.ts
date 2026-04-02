import { userStore } from '@/store/modulesShare/user';
import { clsRTUserRelaENEx } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaENEx';
import { RTUserRelaEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/GradEduTopic/clsRTUserRelaExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
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
let vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
export function useBBFunctions(btn_Click: (strCommandName: string, strKeyId: string) => void) {
  // 在这里使用 fun1
  vuebtn_Click = btn_Click;
}
//绑定主题用户关系列表；
export async function RTUserRelaEx_BindTabvRTUserRela(
  divName: HTMLDivElement,
  arrvRTUserRelaObjLst: Array<clsRTUserRelaENEx>,
) {
  for (const objInFor of arrvRTUserRelaObjLst) {
    await RTUserRelaEx_FuncMapByFldName(clsRTUserRelaENEx.con_CollegeName, objInFor);
    await RTUserRelaEx_FuncMapByFldName(clsRTUserRelaENEx.con_ColorCode, objInFor);
    await RTUserRelaEx_FuncMapByFldName(clsRTUserRelaENEx.con_MajorName, objInFor);
    await RTUserRelaEx_FuncMapByFldName(clsRTUserRelaENEx.con_TopicUserRoleName, objInFor);
    await RTUserRelaEx_FuncMapByFldName(clsRTUserRelaENEx.con_UserName, objInFor);
  }
  divName.innerHTML = '';
  const strUserId = userStore.getUserId;
  let strRoleId = '';
  // const divInfo = GetDiv_Empty('info');
  // divInfo.id = 'infoRTUserRela';
  // divInfo.style.height = '20px';
  // divName.appendChild(divInfo);
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
    {
      const spnUserName0 = GetSpan_Empty('rowtit color4');
      spnUserName0.innerText = `${v}.[用户]：`;
      const spnUserName = GetSpan_Empty('abstract-text');
      spnUserName.innerText = objRTUserRelaEx.userName;

      li1.appendChild(spnUserName0);

      li1.appendChild(spnUserName);
    }
    //学院
    {
      const spnClg0 = GetSpan_Empty('rowtit color4 ml3');
      spnClg0.innerText = `[学院]：`;
      const spnClg = GetSpan_Empty('abstract-text');
      spnClg.innerText = objRTUserRelaEx.collegeName;
      li1.appendChild(spnClg0);
      li1.appendChild(spnClg);
    }
    {
      const spnMajor0 = GetSpan_Empty('rowtit color4 ml3');
      spnMajor0.innerText = `[专业]：`;
      const spnMajor = GetSpan_Empty('abstract-text');
      spnMajor.innerText = objRTUserRelaEx.majorName;
      li1.appendChild(spnMajor0);
      li1.appendChild(spnMajor);
    }
    {
      const spnRole0 = GetSpan_Empty('rowtit color4 ml3');
      spnRole0.innerText = `[角色]：`;
      const spnRole = GetSpan_Empty('abstract-text');
      spnRole.innerText = objRTUserRelaEx.topicUserRoleName;
      li1.appendChild(spnRole0);
      li1.appendChild(spnRole);
    }
    {
      const spnColor0 = GetSpan_Empty('rowtit color4 ml3');
      spnColor0.innerText = `[色码]：`;
      const spnColor = GetSpan_Empty('abstract-text');

      const lblColor = GetLabel_Empty('');
      lblColor.style.background = strUserColor;
      lblColor.innerText = '角码   ';
      spnColor.appendChild(lblColor);
      li1.appendChild(spnColor0);
      li1.appendChild(spnColor);
    }
    // strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[操作]：';
    const spnOp0 = GetSpan_Empty('rowtit color4 ml3');
    spnOp0.innerText = `[操作]：`;
    const spnButton_Up = GetButton_Empty('layui-btn layui-btn layui-btn layui-btn-xs');
    const spnButton_Del = GetButton_Empty('layui-btn layui-btn layui-btn layui-btn-xs');

    if (strRoleId != '0003') {
      //组长或指导员
      spnButton_Up.innerText = '修改';
      spnButton_Del.innerText = '移除';
    } else {
      //成员 只能修改自己的，所以这里判断一下；
      if (strTopicUser == strUserId) {
        spnButton_Up.innerText = '修改';
        spnButton_Del.innerText = '移除';
      }
    }
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const objData0 = {
      topicId: strTopicId,
      userId: strTopicUser,
      roleId: objRTUserRelaEx.topicUserRoleId,
    };
    (function (objData) {
      spnButton_Up.onclick = function () {
        vuebtn_Click('UpdateUserRela', objData);
      };
    })(objData0);
    const objData = { topicId: strTopicId, userId: strTopicUser };
    (function (objData) {
      spnButton_Del.onclick = function () {
        vuebtn_Click('DelUserRela', objData);
      };
    })(objData);
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

  //拼接；
  divName.appendChild(divTitle);
}
