import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { RTTopicObjectiveRela_Edit } from '@/viewsBase/GradEduTopic/RTTopicObjectiveRela_Edit';
import { clsRTTopicObjectiveRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTTopicObjectiveRelaEN';
import { clsTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsTopicObjectiveEN';
import {
  RTTopicObjectiveRela_AddNewRecordAsync,
  RTTopicObjectiveRela_GetRecCountByCondAsync,
  RTTopicObjectiveRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTTopicObjectiveRelaWApi';
import { TopicObjective_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsTopicObjectiveWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';
declare function HideDialogEight(): void;
/* RTTopicObjectiveRela_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class RTTopicObjectiveRela_EditEx extends RTTopicObjectiveRela_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: RTTopicObjectiveRela_EditEx = <RTTopicObjectiveRela_EditEx>(
      RTTopicObjectiveRela_Edit.GetPageEditObj('RTTopicObjectiveRela_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'RTTopicObjectiveRela_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'RTTopicObjectiveRela_EditEx.btn_Click');

        break;
    }
  }
  /* 添加新记录，保存函数
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSave() {
    const divName = this.getDivName();
    const strThisFuncName = this.AddNewRecordSave.name;

    const strObjectiveId = GetInputValueInDivObj(divName, 'hidObjectiveId');
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    // const strUserId = userStore.getUserId;

    const objRTTopicObjectiveRelaEN: clsRTTopicObjectiveRelaEN = new clsRTTopicObjectiveRelaEN();
    await this.PutDataToRTTopicObjectiveRelaClass(objRTTopicObjectiveRelaEN);
    try {
      //同一主题 同一客观事实 数据 只能添加一次；
      const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And topicObjectiveId = '${strObjectiveId}'`;
      //const strWhere = " 1 = 1 And topicId = '" + strTopicId + "' And viewpointId = '" + strViewpointId + "'";
      const responseText = await RTTopicObjectiveRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一主题同一用户不能重复添加同一个客观事实数据！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      } else {
        const responseText = await RTTopicObjectiveRela_AddNewRecordAsync(
          objRTTopicObjectiveRelaEN,
        );
        const returnBool = !!responseText;
        if (returnBool == true) {
          const strInfo = `添加记录成功!`;

          //根据ID获取最大数；
          const strWhereCond2 = ` 1 =1 and topicObjectiveId=${strObjectiveId}`;
          const intCitationCount = await RTTopicObjectiveRela_GetRecCountByCondAsync(strWhereCond2);

          const objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
          objTopicObjectiveEN.SetTopicObjectiveId(strObjectiveId);
          objTopicObjectiveEN.SetCitationCount(intCitationCount);

          objTopicObjectiveEN.sfUpdFldSetStr = objTopicObjectiveEN.updFldString; //设置哪些字段被修改(脏字段)
          if (
            objTopicObjectiveEN.topicObjectiveId == '' ||
            objTopicObjectiveEN.topicObjectiveId == undefined
          ) {
            throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
          }

          await TopicObjective_UpdateRecordAsync(objTopicObjectiveEN).then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == false) {
              const strInfo = `操作不成功!`;
              alert(strInfo);
              console.log('操作不成功');
            }
          });

          //显示信息框
          alert(strInfo);
          HideDialogEight();
        } else {
          const strInfo = `添加记录不成功!`;

          //显示信息框
          alert(strInfo);
        }
      }

      return responseText; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjRTTopicObjectiveRelaEN">数据传输的目的类对象</param>
*/
  public async PutDataToRTTopicObjectiveRelaClass(
    pobjRTTopicObjectiveRelaEN: clsRTTopicObjectiveRelaEN,
  ) {
    const divName = this.getDivName();
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strObjectiveId = GetInputValueInDivObj(divName, 'hidObjectiveId');
    const strUserId = userStore.getUserId;

    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);

    pobjRTTopicObjectiveRelaEN.SetIdCurrEduCls(strIdCurrEduCls);
    pobjRTTopicObjectiveRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTTopicObjectiveRelaEN.SetTopicObjectiveId(strObjectiveId); // 客观Id
    pobjRTTopicObjectiveRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTTopicObjectiveRelaEN.SetUpdUser(strUserId); // 修改人
    pobjRTTopicObjectiveRelaEN.SetMemo(this.memo); // 备注
    pobjRTTopicObjectiveRelaEN.SetClassificationId('0000000000'); // 分类为000000
  }

  //确定选择的客观观点 并添加到关系表中
  public btnOkObjectiveInTab_Click(strkeyId: string) {
    //存放Id
    $('#hidObjectiveId').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSave();
  }
}
