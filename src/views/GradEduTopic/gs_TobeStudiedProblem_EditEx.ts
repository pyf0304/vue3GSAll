import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsPublicParagraph } from '@/ts/FunClass/clsPublicParagraph';
import { gs_TobeStudiedProblem_Edit } from '@/viewsBase/GradEduTopic/gs_TobeStudiedProblem_Edit';
import { clsgs_TobeStudiedProblemEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TobeStudiedProblemEN';
import { clsgs_TobeStudiedProblemVerEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TobeStudiedProblemVerEN';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import {
  gs_TobeStudiedProblemVer_AddNewRecordAsync,
  gs_TobeStudiedProblemVer_GetFirstObjAsync,
  gs_TobeStudiedProblemVer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_TobeStudiedProblemVerWApi';
import {
  gs_TobeStudiedProblem_AddNewRecordWithMaxIdAsync,
  gs_TobeStudiedProblem_GetMaxStrIdAsync,
  gs_TobeStudiedProblem_GetObjByProblemIdAsync,
  gs_TobeStudiedProblem_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_TobeStudiedProblemWApi';
import { vRTUserRela_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { GetInputValueInDivObj, GetTextAreaValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { userStore } from '@/store/modulesShare/user';

// declare function startCompare2(): void;
// declare function setTextboxio2(): void;
// declare function getTextboxio2(): void;

/* gs_TobeStudiedProblem_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_TobeStudiedProblem_EditEx extends gs_TobeStudiedProblem_Edit {
  public static GetPropValue: (strPropName: string) => string;
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: gs_TobeStudiedProblem_EditEx = <gs_TobeStudiedProblem_EditEx>(
      gs_TobeStudiedProblem_Edit.GetPageEditObj('gs_TobeStudiedProblem_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_TobeStudiedProblem_EditEx'初始化过，请检查！`;
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
        AccessBtnClickDefault(strCommandName, 'gs_TobeStudiedProblem_EditEx.btn_Click');

        break;
    }
  }

  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
   */
  public async AddNewRecord() {
    this.btnSubmitgs_TobeStudiedProblem = '确认添加';
    this.btnCancelgs_TobeStudiedProblem = '取消添加';
    this.Clear();
    //wucgs_TobeStudiedProblemB1.problemId = clsgs_TobeStudiedProblemBL.GetMaxStrId_S();
    try {
      const responseText = await gs_TobeStudiedProblem_GetMaxStrIdAsync();
      const returnString: string = responseText;
      if (returnString == '') {
        const strInfo = `获取表gs_TobeStudiedProblem的最大关键字为空，不成功，请检查!`;
        //显示信息框
        alert(strInfo);
      } else {
        $('#txtProblemId').val(returnString);
        $('#txtProblemDate').val(clsPubFun4Web.getNowDate_ymd());
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
  }

  public async PutDataTogs_TobeStudiedProblemClass(
    pobjgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN,
  ) {
    const divName = this.getDivName();
    //pobjgs_TobeStudiedProblemEN.problemId = this.problemId;// 会议Id
    //getTextboxio();
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
      clsPrivateSessionStorage.topicIdInTree,
    );

    pobjgs_TobeStudiedProblemEN.SetIdCurrEduCls(strIdCurrEduCls);
    pobjgs_TobeStudiedProblemEN.SetTopicId(clsPrivateSessionStorage.topicIdInTree); // 主题编号
    pobjgs_TobeStudiedProblemEN.SetIsSubmit(false); // 是否提交
    pobjgs_TobeStudiedProblemEN.SetProblemTitle(this.problemTitle); // 会议内容
    pobjgs_TobeStudiedProblemEN.SetProblemContent(this.problemContent); // 会议内容
    pobjgs_TobeStudiedProblemEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjgs_TobeStudiedProblemEN.SetParticipant(GetInputValueInDivObj(divName, 'txtParticipant')); // 参会者
    pobjgs_TobeStudiedProblemEN.SetUpdUser(userStore.getUserId); // 修改人
    const strYmd = clsPubFun4Web.getNowDate_ymd();
    if (this.problemDate == '') {
      pobjgs_TobeStudiedProblemEN.SetProblemDate(strYmd); // 会议日期
    } else {
      pobjgs_TobeStudiedProblemEN.SetProblemDate(this.problemDate); // 会议日期
    }
    const objDateTime = new clsDateTime(this.problemDate);
    pobjgs_TobeStudiedProblemEN.SetYear(objDateTime.year.toString());
    pobjgs_TobeStudiedProblemEN.SetMonth(objDateTime.month.toString());
    pobjgs_TobeStudiedProblemEN.SetMemo(this.memo); // 备注
  }

  /* 函数功能:把类对象的属性内容显示到界面上
    注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
     如果在设置数据库时,就应该一级字段在前,二级字段在后
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
     <param name = "pobjgs_TobeStudiedProblemEN">表实体类对象</param>
   */
  public async GetDataFromgs_TobeStudiedProblemClass(
    pobjgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN,
  ) {
    this.problemId = pobjgs_TobeStudiedProblemEN.problemId; // 会议Id
    // this.topicId = pobjgs_TobeStudiedProblemEN.topicId; // 主题编号
    this.isSubmit = pobjgs_TobeStudiedProblemEN.isSubmit; // 是否提交
    this.problemTitle = pobjgs_TobeStudiedProblemEN.problemTitle; // 会议内容
    this.problemContent = pobjgs_TobeStudiedProblemEN.problemContent; // 会议内容
    $('#txtParticipant').val(pobjgs_TobeStudiedProblemEN.participant); // 参会者
    this.problemDate = pobjgs_TobeStudiedProblemEN.problemDate; // 会议日期
    this.memo = pobjgs_TobeStudiedProblemEN.memo; // 备注
    // setTextboxio2();
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnSubmit_Click() {
    const strCommandText: string = this.btnSubmitgs_TobeStudiedProblem;

    try {
      let returnBool;
      let strProblemId;
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,

          strProblemId = await this.AddNewRecordWithMaxIdSave();
          if (strProblemId != '') {
            this.keyId = strProblemId;
            //添加记录的同时添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                this.HideDialog_gs_TobeStudiedProblem();
                this.iShowList.BindGv(clsgs_TobeStudiedProblemEN._CurrTabName, '');
                //alert("添加历史版本出问题！");
              }
            });
          }
          //}
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,

          await this.UpdateRecordSave().then((jsonData) => {
            returnBool = jsonData;
          });
          if (returnBool == true) {
            const strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
            //strInfo += "(In gs_TobeStudiedProblem_Edit.btnSubmit_Click)";
            //$('#lblResult51').val(strInfo);
            //显示信息框
            console.log(strInfo);
            //alert(strInfo);
            message.success(strInfo);

            //添加记录的同时添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                this.HideDialog_gs_TobeStudiedProblem();
                this.iShowList.BindGv(clsgs_TobeStudiedProblemEN._CurrTabName, '');
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
    const objgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN = new clsgs_TobeStudiedProblemEN();
    const strUserId = userStore.getUserId;
    //1、获取当前用户的色码块
    await this.GetLoginUserColorCode();
    const strColorCode = GetInputValueInDivObj(divName, 'hidColorCode');
    // getTextboxio2();
    //如果是添加段落，那么肯定是第一条记录，只需要把当前用户的色码块通过html标签加入到段落内容；
    this.problemContent = `<span style='color:${strColorCode}' name='${strUserId}' >${this.problemContent}</span>`;
    //this.problemContent = '<span style="color:' + strColorCode + '">' + this.problemContent + '</span>';

    await this.PutDataTogs_TobeStudiedProblemClass(objgs_TobeStudiedProblemEN);
    try {
      const responseKeyId = await gs_TobeStudiedProblem_AddNewRecordWithMaxIdAsync(
        objgs_TobeStudiedProblemEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //gs_TobeStudiedProblem_ReFreshCache();
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
    if (divName == null) return false;
    const strThisFuncName = this.UpdateRecordSave.name;

    const objgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN = new clsgs_TobeStudiedProblemEN();
    objgs_TobeStudiedProblemEN.problemId = this.keyId;
    // getTextboxio2();
    // let strHisToryUserId = '';

    //修改段落，那么首先需要查询该段落的最后一条历史记录，得到段落数据，然后取出来与当前段落数据比较，返回更改的段落数据
    const strWhereCond2 = ` 1 =1 and problemId=${this.keyId} order by ProblemVId desc `;
    // intVersionCount = await gs_TobeStudiedProblemVer_GetRecCountByCondAsync(strWhereCond2);
    await gs_TobeStudiedProblemVer_GetFirstObjAsync(strWhereCond2).then((jsonData) => {
      const objgs_TobeStudiedProblemVerEN: clsgs_TobeStudiedProblemVerEN = <
        clsgs_TobeStudiedProblemVerEN
      >jsonData;

      if (objgs_TobeStudiedProblemVerEN != null) {
        //需要去标签的更改数据存放
        $('#inpLeft').val(objgs_TobeStudiedProblemVerEN.problemContent);
        //存放老的带标签的数据不更改
        $('#inpOldData').val(objgs_TobeStudiedProblemVerEN.problemContent);
        // strHisToryUserId = objgs_TobeStudiedProblemVerEN.updUser;
      }
    });
    //调用比较方法
    // startCompare2();
    //返回比对后的字符串数据；
    const strInputNewContent = GetTextAreaValueInDivObj(divName, 'txtProblemContent');
    const strNew = GetTextAreaValueInDivObj(divName, 'inpRight');
    const strNewTextContent = clsPublicParagraph.GetNewStringList(strInputNewContent, strNew);
    //把得到新的数据存入编辑控件
    //$("#txtAnswerContent").val(strNewTextContent);
    this.problemContent = strNewTextContent;

    await this.PutDataTogs_TobeStudiedProblemClass(objgs_TobeStudiedProblemEN);
    objgs_TobeStudiedProblemEN.sfUpdFldSetStr = objgs_TobeStudiedProblemEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objgs_TobeStudiedProblemEN.problemId == '' ||
      objgs_TobeStudiedProblemEN.problemId == undefined
    ) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await gs_TobeStudiedProblem_UpdateRecordAsync(
        objgs_TobeStudiedProblemEN,
      );
      const returnBool = !!responseText;
      if (returnBool == true) {
        //gs_TobeStudiedProblem_ReFreshCache();
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

    const objgs_TobeStudiedProblemVerEN: clsgs_TobeStudiedProblemVerEN =
      new clsgs_TobeStudiedProblemVerEN();

    this.PutDataTogs_TobeStudiedProblemVClass(objgs_TobeStudiedProblemVerEN);

    try {
      const responseText2 = await gs_TobeStudiedProblemVer_AddNewRecordAsync(
        objgs_TobeStudiedProblemVerEN,
      );
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1 =1 and problemId=${this.keyId}`;
        const intVersionCount = await gs_TobeStudiedProblemVer_GetRecCountByCondAsync(
          strWhereCond2,
        );

        const objgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN =
          new clsgs_TobeStudiedProblemEN();
        objgs_TobeStudiedProblemEN.problemId = this.keyId;
        objgs_TobeStudiedProblemEN.SetVersionCount(intVersionCount);

        objgs_TobeStudiedProblemEN.sfUpdFldSetStr = objgs_TobeStudiedProblemEN.updFldString; //设置哪些字段被修改(脏字段)
        if (
          objgs_TobeStudiedProblemEN.problemId == '' ||
          objgs_TobeStudiedProblemEN.problemId == undefined
        ) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        gs_TobeStudiedProblem_UpdateRecordAsync(objgs_TobeStudiedProblemEN).then((jsonData) => {
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

  public PutDataTogs_TobeStudiedProblemVClass(
    pobjgs_TobeStudiedProblemVerEN: clsgs_TobeStudiedProblemVerEN,
  ) {
    const divName = this.getDivName();
    pobjgs_TobeStudiedProblemVerEN.problemId = this.keyId;
    pobjgs_TobeStudiedProblemVerEN.SetTopicId(clsPrivateSessionStorage.topicIdInTree); // 主题编号
    pobjgs_TobeStudiedProblemVerEN.SetIsSubmit(false); // 是否提交

    //pobjgs_TobeStudiedProblemVerEN.SetProblemTitle(this.problemTitle;// 是否提交
    pobjgs_TobeStudiedProblemVerEN.SetProblemContent(this.problemContent); // 会议内容
    pobjgs_TobeStudiedProblemVerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjgs_TobeStudiedProblemVerEN.SetUpdUser(userStore.getUserId); // 修改人
    const strYmd = clsPubFun4Web.getNowDate_ymd();
    if (this.problemDate == '') {
      pobjgs_TobeStudiedProblemVerEN.SetProblemDate(strYmd); // 会议日期
    } else {
      pobjgs_TobeStudiedProblemVerEN.SetProblemDate(this.problemDate); // 会议日期
    }
    pobjgs_TobeStudiedProblemVerEN.SetMemo(this.memo); // 备注
  }

  /* 根据关键字获取相应的记录的对象
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async UpdateRecord(strProblemId: string): Promise<boolean> {
    this.btnSubmitgs_TobeStudiedProblem = '确认修改';
    this.btnCancelgs_TobeStudiedProblem = '取消修改';
    this.keyId = strProblemId;
    try {
      //1、获取当前用户的色码块
      await this.GetLoginUserColorCode();

      const responseText2 = await gs_TobeStudiedProblem_GetObjByProblemIdAsync(strProblemId);
      const objgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN = <clsgs_TobeStudiedProblemEN>(
        responseText2
      );
      await this.GetDataFromgs_TobeStudiedProblemClass(objgs_TobeStudiedProblemEN);
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
    ////获取缓存色码表；
    //strIdCurrEduclsarrGs_ColorObjLst: Array<clsgs_ColorEN> = [];
    ////获取色码数据
    //const responseObjLst3 = await gs_Color_GetObjLstCache().then((jsonData) => {
    //    arrGs_ColorObjLst = <Array<clsgs_ColorEN>>jsonData;

    //});
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
