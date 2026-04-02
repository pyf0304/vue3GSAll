import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { RTUserRela_Edit } from '@/viewsBase/GradEduTopic/RTUserRela_Edit';
import { clsRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaEN';
import { enumTopicUserRole } from '@/ts/L0Entity/RT_Params/clsTopicUserRoleEN';
import {
  RTUserRela_AddNewRecordAsync,
  RTUserRela_GetFirstObjAsync,
  RTUserRela_IsExistRecordAsync,
  RTUserRela_ReFreshCache,
  RTUserRela_ReOrderAsync,
  RTUserRela_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTUserRelaWApi';
import { gs_Color_GetObjLstCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ColorWApi';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Pub_RTUserRelaList } from '@/views/GradEduPublicPage/Pub_RTUserRelaList';
import { userStore } from '@/store/modulesShare/user';
/* RTUserRela_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class RTUserRela_EditEx extends RTUserRela_Edit {
  public static TopicId_Static = '';
  public topicUserRole_q = '';
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: RTUserRela_EditEx = <RTUserRela_EditEx>(
      RTUserRela_Edit.GetPageEditObj('RTUserRela_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'RTUserRela_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'RTUserRela_EditEx.btn_Click');

        break;
    }
  }

  /* 添加主题同时把用户作为组长存放到主题用户关系表*/
  public async AddNewTopicAndRecordSaveUserRela(strTopicId: string): Promise<boolean> {
    RTUserRela_EditEx.TopicId_Static = strTopicId;
    const strUserId = userStore.getUserId;
    const objRTUserRelaEN: clsRTUserRelaEN = new clsRTUserRelaEN();
    await this.PutDataToRTUserRelaClassWhere(objRTUserRelaEN, strTopicId);
    //获取缓存色码表；
    // const arrGs_ColorObjLst: Array<clsgs_ColorEN> = [];
    try {
      // 同一主题 同一用户 只能添加一次；
      const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And userId = '${strUserId}'`;
      const bolIsExist = await RTUserRela_IsExistRecordAsync(strWhere);
      if (bolIsExist == true) {
        // const strMsg = `同一主题不能重复添加同一个用户！`;
        //alert(strMsg);
        console.log('同一主题不能重复添加同一个用户！');
        return false;
        // return responseText;//一定要有一个返回值，否则会出错！
      }

      const returnBool = await RTUserRela_AddNewRecordAsync(objRTUserRelaEN);

      if (returnBool == true) {
        RTUserRela_ReFreshCache(strTopicId);
        // const strInfo = `添加成功!`;

        //隐藏用户框
        //HideDialogFour();
        //显示信息框
        //alert(strInfo);
        await this.btnReOrder_Click();
        //获取色码数据
        const arrGs_ColorObjLst = await gs_Color_GetObjLstCache();

        //添加完成后把根据用户排序号得到色码表 样式把样式更新到主题用户关系表；
        const strWhereUserRela = ` 1 = 1 And topicId = '${strTopicId}' And userId = '${strUserId}'`;
        //const responseText = await RTUserRela_GetFirstObjAsync(strWhere);
        const objRTUserRelaEN = await RTUserRela_GetFirstObjAsync(strWhereUserRela);

        if (objRTUserRelaEN != null) {
          //得到用户排序号
          const Objgs_Color = arrGs_ColorObjLst.find((x) => x.userNo == objRTUserRelaEN.orderNum);
          if (Objgs_Color != null) {
            //得到色码

            const objUpdateRTUserRelaEN: clsRTUserRelaEN = new clsRTUserRelaEN();
            objUpdateRTUserRelaEN.SetmId(objRTUserRelaEN.mId);
            objUpdateRTUserRelaEN.SetColorId(Objgs_Color.colorId);
            objUpdateRTUserRelaEN.SetUserBgColor(Objgs_Color.colorCode); //用户背景色码；

            objUpdateRTUserRelaEN.sfUpdFldSetStr = objUpdateRTUserRelaEN.updFldString; //设置哪些字段被修改(脏字段)

            RTUserRela_UpdateRecordAsync(objUpdateRTUserRelaEN).then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                return true;
              } else {
                const strInfo = `修改用户色码不成功!`;
                alert(strInfo);
                console.log('修改用户色码不成功');
                return false;
              }
            });
          }
        }
        return true;
        //this.BindGv_vRTUserRela();
        ////主题Id
        //window.location.href = "../GraduateEdu/WApiRTUserRela_QUDI_TS?TopicRelaId='01'";
      } else {
        const strInfo = `添加不成功!`;

        //显示信息框
        alert(strInfo);
        return false;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加主题用户关系不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjRTUserRelaEN">数据传输的目的类对象</param>
   */
  public PutDataToRTUserRelaClassWhere(pobjRTUserRelaEN: clsRTUserRelaEN, strTopicId: string) {
    const strUserId = userStore.getUserId;
    pobjRTUserRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTUserRelaEN.SetUserId(strUserId); // 用户ID
    pobjRTUserRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTUserRelaEN.SetTopicUserRoleId(enumTopicUserRole.TeamLeader_0002); //组成
    pobjRTUserRelaEN.SetUpdUser(strUserId); // 修改人
    pobjRTUserRelaEN.SetOrderNum(30);
    pobjRTUserRelaEN.SetColorId(''); //获取不同色码
    pobjRTUserRelaEN.SetMemo(''); // 备注
  }
  /*
重序
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
*/
  public async btnReOrder_Click() {
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        topicId: RTUserRela_EditEx.TopicId_Static,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await RTUserRela_ReOrderAsync(objOrderByData);
      RTUserRela_ReFreshCache(RTUserRela_EditEx.TopicId_Static);
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    //绑定主题用户关系；
    //this.BindGv_vRTUserRela();
  }
  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjRTUserRelaEN">数据传输的目的类对象</param>
   */
  public async PutDataToRTUserRelaClass(pobjRTUserRelaEN: clsRTUserRelaEN) {
    const divName = this.getDivName();
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    // const strPaperId = GetHidPaperId(divName);
    const strUserIdKey = GetInputValueInDivObj(divName, 'hidUserIdKey');
    const strUserId = userStore.getUserId;
    pobjRTUserRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTUserRelaEN.SetUserId(strUserIdKey); // 用户ID
    pobjRTUserRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTUserRelaEN.SetTopicUserRoleId(this.topicUserRole_q);
    pobjRTUserRelaEN.SetUpdUser(strUserId); // 修改人
    pobjRTUserRelaEN.SetMemo(this.memo); // 备注
  }

  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSaveUserRela() {
    const divName = this.getDivName();
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    // const strPaperId = GetHidPaperId(divName);
    const strUserId = GetInputValueInDivObj(divName, 'hidUserIdKey');
    const objRTUserRelaEN: clsRTUserRelaEN = new clsRTUserRelaEN();
    this.PutDataToRTUserRelaClass(objRTUserRelaEN);

    try {
      // 同一主题 同一用户 只能添加一次；
      const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And userId = '${strUserId}'`;
      const responseText = await RTUserRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一主题不能重复添加同一个用户！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await RTUserRela_AddNewRecordAsync(objRTUserRelaEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加成功!`;

        //隐藏用户框
        // HideDialogFour();
        //显示信息框
        alert(strInfo);
        //this.BindGv_vRTUserRela();
        const objPage_RTUserRela = new Pub_RTUserRelaList();
        await objPage_RTUserRela.PageLoad();
        //await objPage_RTUserRela.BindGv_vRTUserRela();
        ////主题Id
        //window.location.href = "../GraduateEdu/WApiRTUserRela_QUDI_TS?TopicRelaId='01'";
      } else {
        const strInfo = `添加不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  //确定选择的用户 并添加到关系表中
  public btnUserRecordInTab_Click(strkeyId: string) {
    //需要提示选择角色
    if (this.topicUserRole_q != '' && this.topicUserRole_q != '0') {
      //存放Id
      $('#hidUserIdKey').val(strkeyId);
      //执行添加关系方法
      this.AddNewRecordSaveUserRela();
    } else {
      const strInfo = `请选择用户角色!`;

      //显示信息框
      alert(strInfo);
      return;
    }
  }
}
