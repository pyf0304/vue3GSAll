import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsqa_AnswerEN';
import {
  qa_Answer_AddNewRecordWithMaxIdAsync,
  qa_Answer_AddNewRecordWithReturnKeyAsync,
  qa_Answer_GetObjByAnswerIdAsync,
  qa_Answer_IsExistRecordAsync,
  qa_Answer_UpdateRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_AnswerWApi';
import {
  GetButtonHtmlInDivObj,
  GetInputValueInDivObj,
  HideDivInDivObj,
  SetButtonHtmlInDivObj,
  SetSpanHtmlInDivObj,
  SetTextAreaValueInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { qa_Answer_Edit } from '@/viewsBase/InteractManage/qa_Answer_Edit';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { vRTUserRela_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import { clsqa_PaperEN } from '@/ts/L0Entity/InteractManage/clsqa_PaperEN';
import { vqa_Answer_GetRecCountByCondAsync } from '@/ts/L3ForWApi/InteractManage/clsvqa_AnswerWApi';
import { qa_Paper_UpdateRecordAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_PaperWApi';
import { clsqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsqa_QuestionsEN';
import {
  qa_Questions_GetObjByQuestionsIdCache,
  qa_Questions_UpdateRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_QuestionsWApi';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { fa } from 'element-plus/es/locale';
import { userStore } from '@/store/modulesShare/user';
declare function setTextboxio(): void;

/* qa_Answer_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class qa_Answer_EditEx extends qa_Answer_Edit {
  public static parentId = '';
  public answerTypeId = '';
  public static answerTypeIdTemp = '';

  public questionsId = '';
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string, divEdit: HTMLDivElement) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: qa_Answer_EditEx = <qa_Answer_EditEx>(
      qa_Answer_Edit.GetPageEditObj('qa_Answer_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'qa_Answer_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    if (objPage.divEdit.id == 'temp') {
      objPage.divEdit = divEdit;
    }
    let arr;
    let strMsg;
    let strAnswerId;
    let strTopicId;
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'AddNewAnswer':
        console.log('objPage:(in qa_Answer_EditEx)', objPage);
        objPage.btnAddNewAnswer_Click();
        break;
      case 'AddNewAnswerInP':
        objPage.btnAddNewAnswer_ClickInP();
        break;
      case 'AnswerSubmit':
        objPage.btnSubmit_ClickInP();
        break;
      case 'ReplyAnswer': //
        objPage.btnAddNewAnswer_Click();
        break;
      case 'ReplyAnswerInP': //
        objPage.btnAddNewAnswer_ClickInP();
        break;
      case 'UpdateAnswerInP':
        arr = strKeyId.split('|');
        if (arr.length < 2) {
          strMsg = `在执行btnUpdateQa_Answer_Click过程中，参数数目不正确！`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        strAnswerId = arr[0];
        strTopicId = arr[1];
        objPage.btnUpdAnswer_ClickInP(strAnswerId, strTopicId);
        break;
      case 'UpdateQa_Answer':
        arr = strKeyId.split('|');
        if (arr.length < 2) {
          strMsg = `在执行btnUpdateQa_Answer_Click过程中，参数数目不正确！`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        strAnswerId = arr[0];
        strTopicId = arr[1];
        objPage.btnUpdateQa_Answer_Click(strAnswerId, strTopicId);
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'qa_Answer_EditEx.btn_Click');

        break;
    }
  }
  public async PutDataToqa_AnswerClass(pobjqa_AnswerEN: clsqa_AnswerEN) {
    const divName = this.getDivName();
    if (divName == null) return;
    let strTopicId = clsPrivateSessionStorage.topicIdInTree;
    if (strTopicId == '') strTopicId = '00000000';
    pobjqa_AnswerEN.SetTopicId(strTopicId); //问题ID
    pobjqa_AnswerEN.SetQuestionsId(this.questionsId); //问题ID
    pobjqa_AnswerEN.SetAnswerTypeId(this.answerTypeId); //问题ID

    //pobjqa_AnswerEN.SetParentId("root";//父节点
    pobjqa_AnswerEN.SetParentId(qa_Answer_EditEx.parentId); //父节点
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);

    pobjqa_AnswerEN.SetIdCurrEduCls(strIdCurrEduCls);
    pobjqa_AnswerEN.SetAnswerContent(this.answerContent); // 答案内容
    pobjqa_AnswerEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjqa_AnswerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
  }

  /* 修改记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async UpdateRecordSave2() {
    const strThisFuncName = this.UpdateRecordSave2.name;
    //
    const objqa_AnswerEN: clsqa_AnswerEN = new clsqa_AnswerEN();
    objqa_AnswerEN.SetAnswerId(this.keyId);
    // $('#hidAnswerId').val(this.answerId);
    await this.PutDataToqa_AnswerClass(objqa_AnswerEN);

    objqa_AnswerEN.sfUpdFldSetStr = objqa_AnswerEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objqa_AnswerEN.answerId == '' || objqa_AnswerEN.answerId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await qa_Answer_UpdateRecordAsync(objqa_AnswerEN);
      const returnBool = !!responseText;

      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  // /*
  //  * 设置关键字的值
  //  */
  // public set answerId(value: string) {
  //   const divName = this.getDivName();
  //   SetInputValueInDivObj(divName, 'hidAnswerId', value);
  // }
  // /*
  //  * 设置关键字的值
  //  */
  // public get answerId(): string {
  //   const divName = this.getDivName();
  //   return GetInputValueInDivObj(divName, 'hidAnswerId');
  // }

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   */
  public async AddNewRecordWithMaxIdSave2(): Promise<string> {
    //
    const objqa_AnswerEN: clsqa_AnswerEN = new clsqa_AnswerEN();
    objqa_AnswerEN.SetCreateDate(clsPubFun4Web.getNowDate()); // 修改日期
    await this.PutDataToqa_AnswerClass(objqa_AnswerEN);
    try {
      //const responseText2 = await qa_Answer_AddNewRecordWithMaxIdAsync(objqa_AnswerEN);
      const strAnswerId = await qa_Answer_AddNewRecordWithReturnKeyAsync(objqa_AnswerEN);
      //const returnBool: boolean = !!responseText2;

      $('#hidAnswerId').val(strAnswerId);
      //const returnBool: boolean = !!responseText2;
      if (strAnswerId != '') {
        //if (returnBool == true) {

        const strInfo = `添加回答成功!`;

        //显示信息框
        message.success(strInfo);
        //alert(strInfo);
        return strAnswerId;
      } else {
        const strInfo = `添加回答不成功!`;

        //显示信息框
        alert(strInfo);
        return '';
      }
      //return responseText2;//一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加回答不成功,${e}.`;
      alert(strMsg);
      return '';
    }
  }
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
  */
  public async btnSubmit_Click() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmitqa_Answer;
    try {
      // const strAnswerId = GetInputValueInDivObj(divName, 'hidAnswerId');

      // let returnBool2 = true;
      let strAnswerId;
      switch (strCommandText) {
        case '添加':
          //const responseText1 = await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,

          strAnswerId = await this.AddNewRecordWithMaxIdSave2();

          if (strAnswerId != '') {
            this.HideDialog_qa_Answer();
            this.iShowList.BindGvCache(clsqa_AnswerEN._CurrTabName, strAnswerId);
          }
          //更新总表3个参数 主键、子表类型、页面操作类型；
          //$("#hidAnswerId").val(strAnswerId);
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          await this.UpdateRecordSave2().then((jsonData) => {
            const returnBool: boolean = jsonData;
            const strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
            //strInfo += "(In qa_AnswerCRUD.btnOKUpd_Click)";

            //显示信息框
            console.log(strInfo);

            if (returnBool == true) {
              this.HideDialog_qa_Answer();
              this.iShowList.BindGvCache(clsqa_AnswerEN._CurrTabName, this.keyId);
              message.success(strInfo);
            } else {
              alert(strInfo);
            }
          });

          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

          break;
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  public async btnSubmit_ClickInP() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmitqa_AnswerInP;
    try {
      // const strAnswerId = GetInputValueInDivObj(divName, 'hidAnswerId');

      // let returnBool2 = true;
      let strAnswerId;
      switch (strCommandText) {
        case '添加':
          //const responseText1 = await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,

          strAnswerId = await this.AddNewRecordWithMaxIdSave2();

          if (strAnswerId != '') {
            this.HideDialog_qa_Answer();
            this.iShowList.BindGvCache(clsqa_AnswerEN._CurrTabName, strAnswerId);
          }
          //更新总表3个参数 主键、子表类型、页面操作类型；
          //$("#hidAnswerId").val(strAnswerId);
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          await this.UpdateRecordSave2().then((jsonData) => {
            const returnBool: boolean = jsonData;
            const strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
            //strInfo += "(In qa_AnswerCRUD.btnOKUpd_Click)";

            //显示信息框
            console.log(strInfo);

            if (returnBool == true) {
              this.HideDialog_qa_Answer();
              this.iShowList.BindGvCache(clsqa_AnswerEN._CurrTabName, this.keyId);
              message.success(strInfo);
            } else {
              alert(strInfo);
            }
          });

          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

          break;
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
  /* 添加答案
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecordWithMaxId_Click)
   */
  public async btnAddNewAnswer_ClickV2() {
    this.opType = 'AddWithMaxId';
    try {
      this.btnSubmitqa_Answer = '确认添加';
      this.btnCancelqa_Answer = '取消添加';
      this.answerContent = '';
      //const responseText = this.AddNewRecordWithMaxId();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 修改答案
       (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
       <param name = "sender">参数列表</param>
     */
  public async btnUpdateAnswer_Click(strAnswerId: string) {
    this.btnSubmitqa_Answer = '确认修改';
    this.btnCancelqa_Answer = '取消修改';
    this.keyId = strAnswerId;
    try {
      const responseText = await qa_Answer_GetObjByAnswerIdAsync(strAnswerId);
      const objqa_AnswerEN: clsqa_AnswerEN = <clsqa_AnswerEN>responseText;
      this.answerContent = objqa_AnswerEN.answerContent;
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  public async showQuestionContent() {
    const objqa_Questions = await qa_Questions_GetObjByQuestionsIdCache(this.questionsId);
    if (objqa_Questions == null) return false;
    SetSpanHtmlInDivObj(this.divEdit, 'spnQuestionContent', objqa_Questions.questionsContent);
    return true;
  }
  //---------------------1111
  /* 添加答案
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecordWithMaxId_Click)
   */
  public async btnAddNewAnswer_Click() {
    this.opType = 'AddWithMaxId';
    try {
      const bolIsSuccess = await this.ShowDialog_qa_Answer(this.opType);
      if (bolIsSuccess == false) return;
      const objLayOut = this.getDivName();
      if (objLayOut == null) return;
      const bolResult = await this.showQuestionContent();
      if (bolResult == false) {
        alert(`问题Id:${this.questionsId}所对应的对象不存在！`);
        return false;
      }
      if (this.answerTypeId == '01') {
        if (qa_Answer_EditEx.parentId == 'root') {
          const strWhere = ` answerTypeId='01' and questionsId='${this.questionsId}' and updUser='${userStore.getUserId}' and isRecommend=0 and parentId='root'`;
          const returnBool: boolean = await qa_Answer_IsExistRecordAsync(strWhere);
          if (returnBool == true) {
            const strInfo = `一个问题只能回答一次，您已经回答过了!`;
            //显示信息框
            alert(strInfo);
            return false;
          } else {
            $('#myModalAnswerLabel').html('回答编辑');
            $('#AnswerInfo').show();
            $('#AnswerIsSubmit').show();
          }
        } else {
          $('#myModalAnswerLabel').html('回答编辑');
          $('#AnswerInfo').show();
          $('#AnswerIsSubmit').show();
        }
      } else {
        $('#AnswerInfo').hide();
        $('#AnswerIsSubmit').hide();
        $('#myModalAnswerLabel').html('讨论编辑');
      }

      // HideDivInDivObj(objLayOut, 'div_qa_Answer');

      // ShowDivInDivObj(objLayOut, 'divEditAnswerRegion');
      this.btnSubmitqa_Answer = '确认添加';
      this.btnCancelqa_Answer = '取消添加';
      this.answerContent = '';
      //const responseText = this.AddNewRecordWithMaxId();
      //1、获取当前用户的色码块
      if (clsPrivateSessionStorage.topicIdInTree != '') {
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        await this.GetLoginUserColorCode(strTopicId);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  public async btnAddNewAnswer_ClickInP() {
    this.opType = 'AddWithMaxId';
    try {
      // const bolIsSuccess = await this.ShowDialog_qa_Answer(this.opType);
      // if (bolIsSuccess == false) return;
      const objLayOut = this.getDivName();
      if (objLayOut == null) return;
      if (this.answerTypeId == '01') {
        if (qa_Answer_EditEx.parentId == 'root') {
          const strWhere = ` answerTypeId='01' and questionsId='${this.questionsId}' and updUser='${userStore.getUserId}' and isRecommend=0 and parentId='root'`;
          const returnBool: boolean = await qa_Answer_IsExistRecordAsync(strWhere);
          if (returnBool == true) {
            const strInfo = `一个问题只能回答一次，您已经回答过了!`;
            //显示信息框
            alert(strInfo);
            return false;
          } else {
            $('#myModalAnswerLabel').html('回答编辑');
            $('#AnswerInfo').show();
            $('#AnswerIsSubmit').show();
          }
        } else {
          $('#myModalAnswerLabel').html('回答编辑');
          $('#AnswerInfo').show();
          $('#AnswerIsSubmit').show();
        }
      } else {
        $('#AnswerInfo').hide();
        $('#AnswerIsSubmit').hide();
        $('#myModalAnswerLabel').html('讨论编辑');
      }

      // HideDivInDivObj(objLayOut, 'div_qa_Answer');

      // ShowDivInDivObj(objLayOut, 'divEditAnswerRegion');
      this.btnSubmitqa_AnswerInP = '确认添加';
      this.btnCancelqa_AnswerInP = '取消添加';
      this.answerContent = '';
      //const responseText = this.AddNewRecordWithMaxId();
      //1、获取当前用户的色码块
      if (clsPrivateSessionStorage.topicIdInTree != '') {
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        await this.GetLoginUserColorCode(strTopicId);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  public async btnUpdAnswer_ClickInP(strAnswerId: string, strTopicId: string) {
    console.log(strTopicId);
    this.opType = 'Update';
    try {
      // const bolIsSuccess = await this.ShowDialog_qa_Answer(this.opType);
      // if (bolIsSuccess == false) return;
      const objLayOut = this.getDivName();
      if (objLayOut == null) return;
      this.keyId = strAnswerId;
      const objqa_AnswerEN = await qa_Answer_GetObjByAnswerIdAsync(strAnswerId);
      if (objqa_AnswerEN == null) return;
      SetTextAreaValueInDivObj(objLayOut, 'txtAnswerContent', objqa_AnswerEN.answerContent);
      this.answerTypeId = objqa_AnswerEN.answerTypeId;
      qa_Answer_EditEx.parentId = objqa_AnswerEN.parentId;

      if (objqa_AnswerEN.isRecommend == true) {
        $('#hidIsRecommend').val(1);
      }
      if (this.answerTypeId == '01') {
        $('#myModalAnswerLabel').html('回答编辑');
        $('#AnswerInfo').show();
        $('#AnswerIsSubmit').show();
      } else {
        $('#AnswerInfo').hide();
        $('#AnswerIsSubmit').hide();
        $('#myModalAnswerLabel').html('讨论编辑');
      }

      this.btnSubmitqa_AnswerInP = '确认修改';
      this.btnCancelqa_AnswerInP = '取消修改';

      //const responseText = this.AddNewRecordWithMaxId();
      //1、获取当前用户的色码块
      if (clsPrivateSessionStorage.topicIdInTree != '') {
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        await this.GetLoginUserColorCode(strTopicId);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 修改答案
       (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
       <param name = "sender">参数列表</param>
     */
  public async btnUpdateAnswer_ClickBak(strAnswerId: string, strTopicId: string) {
    if (clsPrivateSessionStorage.topicIdInTree != '') {
      this.btnSubmitqa_Answer = '确认推荐';
      this.btnCancelqa_Answer = '取消推荐';
    } else {
      this.btnSubmitqa_Answer = '确认修改';
      this.btnCancelqa_Answer = '取消修改';
    }

    this.keyId = strAnswerId;
    //1、获取当前用户的色码块
    await this.GetLoginUserColorCode(strTopicId);
    try {
      const responseText = await qa_Answer_GetObjByAnswerIdAsync(strAnswerId);
      const objqa_AnswerEN: clsqa_AnswerEN = <clsqa_AnswerEN>responseText;
      if (this.btnSubmitqa_Answer == '确认推荐') {
        // strAnswerContent = objqa_AnswerEN.answerContent.replace("</?[^>]+>", "");//去除html标签

        let strAnswerContent = objqa_AnswerEN.answerContent.replace(/<\/?.+?>/g, '');
        strAnswerContent = strAnswerContent.replace(/ /g, ''); //dds为得到后的内容
        //txtcontent = txtcontent.replace("\\s*|\t|\r|\n", "");//去除字符串中的空格,回车,换行符,制表符
        this.answerContent = strAnswerContent;
      } else {
        this.answerContent = objqa_AnswerEN.answerContent;
      }

      //textarea编辑样式；
      setTextboxio();
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  //获取当前登录用户的色码在该主题下
  public async GetLoginUserColorCode(strTopicId: string) {
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
        //$("#hidColorCode").val(objRtUsersEN.colorCode);
        //这里用固定背景色；
        $('#hidColorCode').val(objRtUsersEN.userBgColor);
      }
    });
  }

  //修改答案

  public async btnUpdateQa_Answer_Click(strAnswerId: string, strTopicId: string) {
    const bolIsSuccess = await this.ShowDialog_qa_Answer(this.opType);
    if (bolIsSuccess == false) return;
    this.btnSubmitqa_Answer = '确认修改';
    this.btnCancelqa_Answer = '取消修改';

    this.keyId = strAnswerId;

    //1、获取当前用户的色码块
    await this.GetLoginUserColorCode(strTopicId);
    try {
      const objqa_AnswerEN = await qa_Answer_GetObjByAnswerIdAsync(strAnswerId);
      if (objqa_AnswerEN == null) return;
      this.answerContent = objqa_AnswerEN.answerContent;
      //判断如果得到isRecommend状态为true则是小组答案，那么存放到控件；用于修改时候判断是否需要增加历史版本
      if (objqa_AnswerEN.isRecommend == true) {
        $('#hidIsRecommend').val(1);
      }

      $('#hidAnswerTypeId').val(objqa_AnswerEN.answerTypeId);
      qa_Answer_EditEx.parentId = objqa_AnswerEN.parentId;
      //textarea编辑样式；
      // setTextboxio();
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  //修改答案

  public async btnUpdateQa_Answer_ClickV2(strAnswerId: string, strTopicId: string) {
    this.btnSubmitqa_Answer = '确认修改';
    this.btnCancelqa_Answer = '取消修改';

    this.keyId = strAnswerId;
    //1、获取当前用户的色码块
    await this.GetLoginUserColorCode(strTopicId);
    try {
      const objqa_AnswerEN = await qa_Answer_GetObjByAnswerIdAsync(strAnswerId);
      if (objqa_AnswerEN == null) return;
      this.answerContent = objqa_AnswerEN.answerContent;
      //判断如果得到isRecommend状态为true则是小组答案，那么存放到控件；用于修改时候判断是否需要增加历史版本
      if (objqa_AnswerEN.isRecommend == true) {
        $('#hidIsRecommend').val(1);
      }

      this.answerTypeId = objqa_AnswerEN.answerTypeId;
      qa_Answer_EditEx.parentId = objqa_AnswerEN.parentId;
      //textarea编辑样式；
      setTextboxio();
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 添加答案
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecordWithMaxId_Click)
   */
  public async btnAddNewAnswer_ClickV3() {
    const objLayOut = this.getDivName();
    if (objLayOut == null) return;
    this.opType = 'AddWithMaxId';
    try {
      if (this.answerTypeId == '01') {
        if (qa_Answer_EditEx.parentId == 'root') {
          const strWhere = ` answerTypeId='01' and questionsId='${this.questionsId}' and updUser='${userStore.getUserId}' and isRecommend=0 and parentId='root'`;
          const returnBool: boolean = await qa_Answer_IsExistRecordAsync(strWhere);
          if (returnBool == true) {
            const strInfo = `一个问题只能回答一次，您已经回答过了!`;
            //显示信息框
            alert(strInfo);
            return false;
          } else {
            $('#myModalAnswerLabel').html('回答编辑');
            $('#AnswerInfo').show();
            $('#AnswerIsSubmit').show();
          }
        } else {
          $('#myModalAnswerLabel').html('回答编辑');
          $('#AnswerInfo').show();
          $('#AnswerIsSubmit').show();
        }
      } else {
        $('#AnswerInfo').hide();
        $('#AnswerIsSubmit').hide();
        $('#myModalAnswerLabel').html('讨论编辑');
      }

      HideDivInDivObj(objLayOut, 'div_qa_Answer');
      ShowDivInDivObj(objLayOut, 'divEditAnswerRegion');

      this.btnSubmitqa_Answer = '确认添加';
      this.btnCancelqa_Answer = '取消添加';
      this.answerContent = '';
      //const responseText = this.AddNewRecordWithMaxId();
      //1、获取当前用户的色码块
      if (clsPrivateSessionStorage.topicIdInTree != '') {
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        await this.GetLoginUserColorCode(strTopicId);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  public PutDataToqa_AnswerClassV2(pobjqa_AnswerEN: clsqa_AnswerEN) {
    // const divName = this.getDivName();
    pobjqa_AnswerEN.SetQuestionsId(this.questionsId); //问题ID
    //pobjqa_AnswerEN.SetParentId("root";//父节点
    pobjqa_AnswerEN.SetParentId(qa_Answer_EditEx.parentId); //父节点
    pobjqa_AnswerEN.SetAnswerContent(this.answerContent); // 答案内容
    pobjqa_AnswerEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjqa_AnswerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
  }
  /* 修改记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async UpdateRecordSave2V2() {
    const strThisFuncName = this.UpdateRecordSave2.name;

    //
    const objqa_AnswerEN: clsqa_AnswerEN = new clsqa_AnswerEN();
    objqa_AnswerEN.SetAnswerId(this.keyId);
    this.PutDataToqa_AnswerClass(objqa_AnswerEN);

    objqa_AnswerEN.sfUpdFldSetStr = objqa_AnswerEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objqa_AnswerEN.answerId == '' || objqa_AnswerEN.answerId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await qa_Answer_UpdateRecordAsync(objqa_AnswerEN);
      const returnBool = !!responseText;

      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   */
  public async AddNewRecordWithMaxIdSave2V2() {
    //
    const objqa_AnswerEN: clsqa_AnswerEN = new clsqa_AnswerEN();

    this.PutDataToqa_AnswerClass(objqa_AnswerEN);
    try {
      const responseText2 = await qa_Answer_AddNewRecordWithMaxIdAsync(objqa_AnswerEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        await this.SynAnswer();
        const strInfo = `添加回答成功!`;

        //显示信息框
        message.success(strInfo);
        //alert(strInfo);
      } else {
        const strInfo = `添加回答不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加回答不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  //添加删除答案的时候统计问题数据量到问题表和论文答疑表
  public async SynAnswer() {
    const divName = this.getDivName();
    const strThisFuncName = this.SynAnswer.name;

    const strqa_PaperId = GetInputValueInDivObj(divName, 'hidqa_PaperId');

    //添加记录的同时并记录论文读写的教师评价数
    let strWhereCond = ` qaPaperId=${strqa_PaperId}`;
    const intAnswerCount1 = await vqa_Answer_GetRecCountByCondAsync(strWhereCond);

    const objqa_PaperEN: clsqa_PaperEN = new clsqa_PaperEN();
    objqa_PaperEN.SetQaPaperId(strqa_PaperId);
    objqa_PaperEN.SetAnswerCount(intAnswerCount1);

    objqa_PaperEN.sfUpdFldSetStr = objqa_PaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objqa_PaperEN.qaPaperId == '' || objqa_PaperEN.qaPaperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    const responseText1 = await qa_Paper_UpdateRecordAsync(objqa_PaperEN);
    const returnBool1 = !!responseText1;
    if (returnBool1 == true) {
      //刷新缓存
      console.log('添加答案数量到答疑表成功！');
    } else {
      console.log('添加答案数量到答疑表失败！');
    }
    //添加记录的同时并记录论文读写的教师评价数
    strWhereCond = ` questionsId='${this.questionsId}'`;
    const intAnswerCount2 = await vqa_Answer_GetRecCountByCondAsync(strWhereCond);

    const objqa_QuestionsEN: clsqa_QuestionsEN = new clsqa_QuestionsEN();
    objqa_QuestionsEN.SetQuestionsId(this.questionsId);
    objqa_QuestionsEN.SetAnswerCount(intAnswerCount2);

    objqa_QuestionsEN.sfUpdFldSetStr = objqa_QuestionsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objqa_QuestionsEN.questionsId == '' || objqa_QuestionsEN.questionsId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    const responseText2 = await qa_Questions_UpdateRecordAsync(objqa_QuestionsEN);
    const returnBool2 = !!responseText2;
    if (returnBool2 == true) {
      //刷新缓存
      console.log('添加答案数量到答疑表成功！');
    } else {
      console.log('添加答案数量到答疑表失败！');
    }
    //添加记录的同时并记录论文读写的教师评价数
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
  public async btnOKUpd2_ClickV2() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmitqa_Answer;
    try {
      let returnKeyId;
      let returnBool;
      let strInfo;
      switch (strCommandText) {
        case '添加':
          //const responseText1 = await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,

          returnKeyId = await this.AddNewRecordWithMaxIdSave2();
          if (IsNullOrEmpty(returnKeyId) == false) {
            //if (returnBool2 == true) {
            ShowDivInDivObj(divName, 'div_qa_Answer');
            HideDivInDivObj(divName, 'divEditAnswerRegion');

            this.iShowList.BindGvCache(clsqa_AnswerEN._CurrTabName, '');
            // this.btnShowAnswer_Click();
            // if (GetInputValueInDivObj(divName, 'hidPushId') != '') {
            //   await this.btnUpdQA_Push_Click(GetInputValueInDivObjN(divName, 'hidPushId'));
            // }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave2();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          //strInfo += "(In qa_AnswerCRUD.btnOKUpd_Click)";

          //显示信息框
          console.log(strInfo);

          if (returnBool == true) {
            message.success(strInfo);
            ShowDivInDivObj(divName, 'div_qa_Answer');
            HideDivInDivObj(divName, 'divEditAnswerRegion');
            this.iShowList.BindGvCache(clsqa_AnswerEN._CurrTabName, '');
            // this.btnShowAnswer_Click();
          } else {
            alert(strInfo);
          }

          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

          break;
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
  //=====================1111
  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   **/
  public set btnCancelqa_AnswerInP(value: string) {
    SetButtonHtmlInDivObj(this.divEdit, 'btnCancelqa_Answer', value);
  }

  /**
   * 获取按钮的标题
   **/
  public get btnSubmitqa_AnswerInP(): string {
    const strValue = GetButtonHtmlInDivObj(this.divEdit, 'btnSubmitqa_Answer');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitqa_AnswerInP(value: string) {
    SetButtonHtmlInDivObj(this.divEdit, 'btnSubmitqa_Answer', value);
  }
}
