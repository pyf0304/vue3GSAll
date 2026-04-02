import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsPublicParagraph } from '@/ts/FunClass/clsPublicParagraph';
import { gs_MeetingMinutes_Edit } from '@/viewsBase/GradEduTopic/gs_MeetingMinutes_Edit';
import { clsgs_MeetingMinutesEN } from '@/ts/L0Entity/GradEduTopic/clsgs_MeetingMinutesEN';
import { clsgs_MeetingMinutesVerEN } from '@/ts/L0Entity/GradEduTopic/clsgs_MeetingMinutesVerEN';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import {
  gs_MeetingMinutesVer_AddNewRecordAsync,
  gs_MeetingMinutesVer_GetFirstObjAsync,
  gs_MeetingMinutesVer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_MeetingMinutesVerWApi';
import {
  gs_MeetingMinutes_AddNewRecordWithMaxIdAsync,
  gs_MeetingMinutes_GetMaxStrIdAsync,
  gs_MeetingMinutes_GetObjByMeetingIdAsync,
  gs_MeetingMinutes_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_MeetingMinutesWApi';
import { vRTUserRela_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { userStore } from '@/store/modulesShare/user';

// declare function startCompare(): void;
// declare function setTextboxio(): void;
// declare function getTextboxio(): void;

/* gs_MeetingMinutes_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_MeetingMinutes_EditEx extends gs_MeetingMinutes_Edit {
  public static GetPropValue: (strPropName: string) => string;

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: gs_MeetingMinutes_EditEx = <gs_MeetingMinutes_EditEx>(
      gs_MeetingMinutes_Edit.GetPageEditObj('gs_MeetingMinutes_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_MeetingMinutes_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;

      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_MeetingMinutes_EditEx.btn_Click');

        break;
    }
  }

  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
   */
  public async AddNewRecord() {
    this.btnSubmitgs_MeetingMinutes = '确认添加';
    this.btnCancelgs_MeetingMinutes = '取消添加';
    this.Clear();
    //wucgs_MeetingMinutesB1.meetingId = clsgs_MeetingMinutesBL.GetMaxStrId_S();
    try {
      const responseText = await gs_MeetingMinutes_GetMaxStrIdAsync();
      const returnString: string = responseText;
      if (returnString == '') {
        const strInfo = `获取表gs_MeetingMinutes的最大关键字为空，不成功，请检查!`;
        //显示信息框
        alert(strInfo);
      } else {
        $('#txtMeetingId').val(returnString);
        $('#txtMeetingDate').val(clsPubFun4Web.getNowDate_ymd());
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
  }

  public async PutDataTogs_MeetingMinutesClass(pobjgs_MeetingMinutesEN: clsgs_MeetingMinutesEN) {
    const divName = this.getDivName();
    //pobjgs_MeetingMinutesEN.SetMeetingId(this.meetingId;// 会议Id
    //getTextboxio();
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
      clsPrivateSessionStorage.topicIdInTree,
    );

    pobjgs_MeetingMinutesEN.SetIdCurrEduCls(strIdCurrEduCls);
    pobjgs_MeetingMinutesEN.SetTopicId(clsPrivateSessionStorage.topicIdInTree); // 主题编号
    pobjgs_MeetingMinutesEN.SetIsSubmit(false); // 是否提交
    pobjgs_MeetingMinutesEN.SetMeetingContent(this.meetingContent); // 会议内容
    pobjgs_MeetingMinutesEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjgs_MeetingMinutesEN.SetParticipants(GetInputValueInDivObj(divName, 'txtParticipants')); // 参会者
    pobjgs_MeetingMinutesEN.SetUpdUser(userStore.getUserId); // 修改人
    const strYmd = clsPubFun4Web.getNowDate_ymd();
    if (this.meetingDate == '') {
      pobjgs_MeetingMinutesEN.SetMeetingDate(strYmd); // 会议日期
    } else {
      pobjgs_MeetingMinutesEN.SetMeetingDate(this.meetingDate); // 会议日期
    }
    const objDateTime = new clsDateTime(this.meetingDate);
    pobjgs_MeetingMinutesEN.SetYear(objDateTime.year.toString());
    pobjgs_MeetingMinutesEN.SetMonth(objDateTime.month.toString());
    pobjgs_MeetingMinutesEN.SetMemo(this.memo); // 备注
  }

  /* 函数功能:把类对象的属性内容显示到界面上
    注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
     如果在设置数据库时,就应该一级字段在前,二级字段在后
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
     <param name = "pobjgs_MeetingMinutesEN">表实体类对象</param>
   */
  public async GetDataFromgs_MeetingMinutesClass(pobjgs_MeetingMinutesEN: clsgs_MeetingMinutesEN) {
    this.meetingId = pobjgs_MeetingMinutesEN.meetingId; // 会议Id
    this.topicId = pobjgs_MeetingMinutesEN.topicId; // 主题编号
    this.isSubmit = pobjgs_MeetingMinutesEN.isSubmit; // 是否提交
    this.meetingContent = pobjgs_MeetingMinutesEN.meetingContent; // 会议内容
    $('#txtParticipants').val(pobjgs_MeetingMinutesEN.participants); // 参会者
    this.meetingDate = pobjgs_MeetingMinutesEN.meetingDate; // 会议日期
    this.memo = pobjgs_MeetingMinutesEN.memo; // 备注
    // setTextboxio();
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnSubmit_Click() {
    const strCommandText: string = this.btnSubmitgs_MeetingMinutes;

    try {
      let strMeetingId;
      let returnBool;
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          //if (this.opType == "AddWithMaxId") {
          //    //const responseText3 = await this.AddNewRecordWithMaxIdSave().then((jsonData)=>{
          //    //const returnBool2: boolean = jsonData;
          //    //if (returnBool2 == true)
          //    //{
          //    //HideDialog_gs_MeetingMinutes();
          //    //this.iShowList.BindGvCache(clsgs_MeetingMinutesEN._CurrTabName);
          //    //}
          //    //});
          //}
          //else {

          strMeetingId = await this.AddNewRecordWithMaxIdSave();
          if (strMeetingId != '') {
            this.keyId = strMeetingId;
            //添加记录的同时添加历史版本
            const returnBool: boolean = await this.AddVersionRecordSave();
            if (returnBool == true) {
              this.HideDialog_gs_MeetingMinutes();
              this.iShowList.BindGv(clsgs_MeetingMinutesEN._CurrTabName, '');
              //alert("添加历史版本出问题！");
            }
          }
          //}
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,

          returnBool = await this.UpdateRecordSave();
          if (returnBool == true) {
            const strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
            //strInfo += "(In gs_MeetingMinutes_Edit.btnSubmit_Click)";
            //$('#lblResult51').val(strInfo);
            //显示信息框
            console.log(strInfo);
            //alert(strInfo);
            message.success(strInfo);

            //添加记录的同时添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                this.HideDialog_gs_MeetingMinutes();
                this.iShowList.BindGv(clsgs_MeetingMinutesEN._CurrTabName, '');
                //alert("添加历史版本出问题！");
              }
            });
          }
          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnSubmit_Click');

          break;
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
  */
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const divName = this.getDivName();
    const objgs_MeetingMinutesEN: clsgs_MeetingMinutesEN = new clsgs_MeetingMinutesEN();
    const strUserId = userStore.getUserId;
    //1、获取当前用户的色码块
    await this.GetLoginUserColorCode();
    const strColorCode = GetInputValueInDivObj(divName, 'hidColorCode');
    // getTextboxio();
    //如果是添加段落，那么肯定是第一条记录，只需要把当前用户的色码块通过html标签加入到段落内容；
    this.meetingContent = `<span style='color:${strColorCode}' name='${strUserId}' >${this.meetingContent}</span>`;
    //this.meetingContent = '<span style="color:' + strColorCode + '">' + this.meetingContent + '</span>';

    await this.PutDataTogs_MeetingMinutesClass(objgs_MeetingMinutesEN);
    try {
      const responseKeyId = await gs_MeetingMinutes_AddNewRecordWithMaxIdAsync(
        objgs_MeetingMinutesEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //gs_MeetingMinutes_ReFreshCache();
        const strInfo = `添加记录成功!`;
        //
        //显示信息框
        //alert(strInfo);
        message.success(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      throw strMsg;
    }
    return ''; //一定要有一个返回值，否则会出错！
  }

  /* 修改记录
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   */
  public async UpdateRecordSave() {
    const divName = this.getDivName();
    const strThisFuncName = this.UpdateRecordSave.name;
    //
    const objgs_MeetingMinutesEN: clsgs_MeetingMinutesEN = new clsgs_MeetingMinutesEN();
    objgs_MeetingMinutesEN.SetMeetingId(this.keyId);
    // getTextboxio();
    // let strHisToryUserId = '';

    //修改段落，那么首先需要查询该段落的最后一条历史记录，得到段落数据，然后取出来与当前段落数据比较，返回更改的段落数据
    const strWhereCond2 = ` 1 =1 and meetingId=${this.keyId} order by MeetingVId desc `;
    // intVersionCount = await gs_MeetingMinutesVer_GetRecCountByCondAsync(strWhereCond2);
    await gs_MeetingMinutesVer_GetFirstObjAsync(strWhereCond2).then((jsonData) => {
      const objgs_MeetingMinutesVerEN: clsgs_MeetingMinutesVerEN = <clsgs_MeetingMinutesVerEN>(
        jsonData
      );

      if (objgs_MeetingMinutesVerEN != null) {
        //需要去标签的更改数据存放
        $('#inpLeft').val(objgs_MeetingMinutesVerEN.meetingContent);
        //存放老的带标签的数据不更改
        $('#inpOldData').val(objgs_MeetingMinutesVerEN.meetingContent);
        // const strHisToryUserId = objgs_MeetingMinutesVerEN.updUser;
      }
    });
    //调用比较方法
    // startCompare();

    //返回比对后的字符串数据；

    const strInputNewContent = this.meetingContent;
    const strNew = GetInputValueInDivObj(divName, 'inpRight');
    const strNewTextContent = clsPublicParagraph.GetNewStringList(strInputNewContent, strNew);
    //把得到新的数据存入编辑控件
    //$("#txtAnswerContent").val(strNewTextContent);
    this.meetingContent = strNewTextContent;

    await this.PutDataTogs_MeetingMinutesClass(objgs_MeetingMinutesEN);
    objgs_MeetingMinutesEN.sfUpdFldSetStr = objgs_MeetingMinutesEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objgs_MeetingMinutesEN.meetingId == '' || objgs_MeetingMinutesEN.meetingId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await gs_MeetingMinutes_UpdateRecordAsync(objgs_MeetingMinutesEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        //gs_MeetingMinutes_ReFreshCache();
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  //添加历史版本
  public async AddVersionRecordSave() {
    const divName = this.getDivName();
    const strThisFuncName = this.AddVersionRecordSave.name;

    //
    const objgs_MeetingMinutesVerEN: clsgs_MeetingMinutesVerEN = new clsgs_MeetingMinutesVerEN();

    this.PutDataTogs_MeetingMinutesVClass(objgs_MeetingMinutesVerEN);

    try {
      const responseText2 = await gs_MeetingMinutesVer_AddNewRecordAsync(objgs_MeetingMinutesVerEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1 =1 and meetingId=${this.keyId}`;
        const intVersionCount = await gs_MeetingMinutesVer_GetRecCountByCondAsync(strWhereCond2);

        const objgs_MeetingMinutesEN: clsgs_MeetingMinutesEN = new clsgs_MeetingMinutesEN();
        objgs_MeetingMinutesEN.SetMeetingId(this.keyId);
        objgs_MeetingMinutesEN.SetVersionCount(intVersionCount);

        objgs_MeetingMinutesEN.sfUpdFldSetStr = objgs_MeetingMinutesEN.updFldString; //设置哪些字段被修改(脏字段)
        if (
          objgs_MeetingMinutesEN.meetingId == '' ||
          objgs_MeetingMinutesEN.meetingId == undefined
        ) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        gs_MeetingMinutes_UpdateRecordAsync(objgs_MeetingMinutesEN).then((jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == true) {
            return true;
          } else {
            const strInfo = `添加历史版本数不成功!`;
            alert(strInfo);
            console.log('添加历史版本数不成功');
            //CloseWindow();
            return false;
          }
        });
        return true;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加版本记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }

  public PutDataTogs_MeetingMinutesVClass(pobjgs_MeetingMinutesVerEN: clsgs_MeetingMinutesVerEN) {
    const divName = this.getDivName();
    pobjgs_MeetingMinutesVerEN.SetMeetingId(this.keyId);
    pobjgs_MeetingMinutesVerEN.SetTopicId(clsPrivateSessionStorage.topicIdInTree); // 主题编号
    pobjgs_MeetingMinutesVerEN.SetIsSubmit(false); // 是否提交
    pobjgs_MeetingMinutesVerEN.SetMeetingContent(this.meetingContent); // 会议内容
    pobjgs_MeetingMinutesVerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjgs_MeetingMinutesVerEN.SetUpdUser(userStore.getUserId); // 修改人
    const strYmd = clsPubFun4Web.getNowDate_ymd();
    if (this.meetingDate == '') {
      pobjgs_MeetingMinutesVerEN.SetMeetingDate(strYmd); // 会议日期
    } else {
      pobjgs_MeetingMinutesVerEN.SetMeetingDate(this.meetingDate); // 会议日期
    }
    pobjgs_MeetingMinutesVerEN.SetMemo(this.memo); // 备注
  }

  /* 根据关键字获取相应的记录的对象
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async UpdateRecord(strMeetingId: string): Promise<boolean> {
    this.btnSubmitgs_MeetingMinutes = '确认修改';
    this.btnCancelgs_MeetingMinutes = '取消修改';
    this.keyId = strMeetingId;
    try {
      //1、获取当前用户的色码块
      await this.GetLoginUserColorCode();

      const responseText2 = await gs_MeetingMinutes_GetObjByMeetingIdAsync(strMeetingId);
      const objgs_MeetingMinutesEN: clsgs_MeetingMinutesEN = <clsgs_MeetingMinutesEN>responseText2;
      await this.GetDataFromgs_MeetingMinutesClass(objgs_MeetingMinutesEN);
      console.log('完成UpdateRecord!');
      return true;
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
    return true;
  }

  //获取当前登录用户的色码在该主题下
  public async GetLoginUserColorCode() {
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    //主题用户关系
    // const arrRTUserRelaObjLst: Array<clsvRTUserRelaEN> = [];
    const strUserId = userStore.getUserId;
    $('#hidUserId').val(strUserId);

    const strWhereCondUser = ` 1=1 And ${clsvRTUserRelaEN.con_TopicId} = '${strTopicId}' And ${clsvRTUserRelaEN.con_UserId} ='${strUserId}'`;
    //根据当前登录人和主题Id 查询用户排序号，根据排序号 得到色码对应色块；
    await vRTUserRela_GetFirstObjAsync(strWhereCondUser).then((jsonData) => {
      const objRtUsersEN: clsvRTUserRelaEN = <clsvRTUserRelaEN>jsonData;
      //通过用户的编号，获取色码表对应的编号色码
      //strIdCurrEduclsObjgs_Color = arrGs_ColorObjLst.find(x => x.userNo == objRtUsersEN.orderNum);

      if (objRtUsersEN != null) {
        $('#hidColorCode').val(objRtUsersEN.colorCode);
        //这里用固定背景色；
        //$("#hidColorCode").val(objRtUsersEN.userBgColor);
      }
    });
  }
}
