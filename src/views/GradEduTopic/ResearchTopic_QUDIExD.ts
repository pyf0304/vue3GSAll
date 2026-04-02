import {
  RTUserRelaEx_CopyToEx,
  RTUserRelaEx_GetObjLstByTopicId,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsRTUserRelaExWApi';
import { useBBFunctions } from '@/ts/L3ForWApiEx/GradEduTopic/clsRTUserRelaExWApiB';
import { GetDivObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { ResearchTopic_QUDIExB } from '@/views/GradEduTopic/ResearchTopic_QUDIExB';

/* 根据条件获取相应的记录对象的列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
export async function ResearchTopic_QUDIEx_BindGv_vRTUserRela(
  strTopicId: string,
  divLayout: HTMLDivElement,
) {
  let arrRTUserRelaExObjLst;
  try {
    const arrRTUserRelaObjLst = await RTUserRelaEx_GetObjLstByTopicId(strTopicId);
    arrRTUserRelaExObjLst = arrRTUserRelaObjLst.map(RTUserRelaEx_CopyToEx);
  } catch (e: any) {
    console.error('catch(e)=');
    console.error(e);
    const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
  }
  if (arrRTUserRelaExObjLst == null) return;

  try {
    try {
      // 使用动态导入加载函数代码块
      const { RTUserRelaEx_BindTabvRTUserRela } = await import(
        '@/ts/L3ForWApiEx/GradEduTopic/clsRTUserRelaExWApiB'
      );
      // console.error('已经导入：RTUserRelaEx_BindTabvRTUserRela');
      // 调用加载的函数
      useBBFunctions(ResearchTopic_QUDIExB.vuebtn_Click);
      const objPage = new ResearchTopic_QUDIExB(divLayout);
      const objLayOut = objPage.getDivName(enumDivType.LayOut_01);
      if (objLayOut == null) return;
      const divRtUserRelaDataLst = GetDivObjInDivObj(objLayOut, 'divRtUserRelaDataLst');
      await RTUserRelaEx_BindTabvRTUserRela(divRtUserRelaDataLst, arrRTUserRelaExObjLst);
    } catch (error) {
      console.error('加载函数:[RTUserRelaEx_BindTabvRTUserRela]时出现错误:', error);
    }

    let arrTopicUserList = '';
    for (let i = 0; i < arrRTUserRelaExObjLst.length; i++) {
      arrTopicUserList += `${arrRTUserRelaExObjLst[i].userId},`;
    }
    arrTopicUserList = arrTopicUserList.substring(0, arrTopicUserList.length - 1);
    clsPubLocalStorage.TopicUserList = arrTopicUserList;

    console.log('完成BindGv_vRTUserRela!');
  } catch (e: any) {
    console.error('catch(e)=');
    console.error(e);
    const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
    alert(strMsg);
  }
}
