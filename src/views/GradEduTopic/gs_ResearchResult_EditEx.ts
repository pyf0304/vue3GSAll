import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { gs_ResearchResult_Edit } from '@/viewsBase/GradEduTopic/gs_ResearchResult_Edit';
import { clsgs_ResearchResultAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ResearchResultAttachmentEN';
import { clsgs_ResearchResultEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ResearchResultEN';
import { clsvRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN';
import {
  gs_ResearchResultAttachment_AddNewRecordAsync,
  gs_ResearchResultAttachment_Delgs_ResearchResultAttachmentsByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_ResearchResultAttachmentWApi';
import {
  gs_ResearchResult_AddNewRecordWithMaxIdAsync,
  gs_ResearchResult_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_ResearchResultWApi';
import { vRTPaperRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTPaperRelaWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { BindDdl_ObjLst_V } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';

// declare let window: any;
/* gs_ResearchResult_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_ResearchResult_EditEx extends gs_ResearchResult_Edit {
  public static GetPropValue: (strPropName: string) => string;
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: gs_ResearchResult_EditEx = <gs_ResearchResult_EditEx>(
      gs_ResearchResult_Edit.GetPageEditObj('gs_ResearchResult_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_ResearchResult_EditEx'初始化过，请检查！`;
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
        AccessBtnClickDefault(strCommandName, 'gs_ResearchResult_EditEx.btn_Click');

        break;
    }
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[paperId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS)
  /// </summary>
  public async SetDdl_PaperId(strIdCurrEducls: string) {
    console.log(strIdCurrEducls);
    //const objPaper_Cond: clsPaperEN = new clsPaperEN();//编辑区域
    ////定义条件字段
    ////strIdCurrEducls = "";//定义条件字段
    //const ddlPaperId = await Paper_BindDdl_PaperId_Cache("ddlPaperId", objPaper_Cond, strIdCurrEducls);//编辑区域
    await this.BindDdl_PaperId('ddlPaperId');
  }

  //专业下拉框绑定
  public async BindDdl_PaperId(ddlPaperId: string) {
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strWhereCond = ` topicId= ${strTopicId}`;

    const objDdl = document.getElementById(ddlPaperId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlPaperId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrvRTPaperRelaObjLst: Array<clsvRTPaperRelaEN> = await vRTPaperRela_GetObjLstAsync(
        strWhereCond,
      );
      BindDdl_ObjLst_V(
        ddlPaperId,
        arrvRTPaperRelaObjLst,
        clsvRTPaperRelaEN.con_PaperId,
        clsvRTPaperRelaEN.con_PaperTitle,
        '主题相关论文',
      );
      console.log('完成BindDdl_UserId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async PutDataTogs_ResearchResultClass(pobjgs_ResearchResultEN: clsgs_ResearchResultEN) {
    const divName = this.getDivName();
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
      clsPrivateSessionStorage.topicIdInTree,
    );

    pobjgs_ResearchResultEN.SetIdCurrEduCls(strIdCurrEduCls);
    pobjgs_ResearchResultEN.SetResultId(this.resultId); // 成果Id
    pobjgs_ResearchResultEN.SetPaperId(this.paperId); // 论文Id
    pobjgs_ResearchResultEN.SetTopicId(clsPrivateSessionStorage.topicIdInTree); // 主题编号
    pobjgs_ResearchResultEN.SetResultTypeId(GetSelectValueInDivObj(divName, 'ddlResultTypeId')); // 成果类型Id
    pobjgs_ResearchResultEN.SetResultName(this.resultName); // 成果名称
    pobjgs_ResearchResultEN.SetResultContent(this.resultContent); // 成果内容
    pobjgs_ResearchResultEN.SetAuthor(this.author); // 作者
    pobjgs_ResearchResultEN.SetDivision(this.division); // 分工
    pobjgs_ResearchResultEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjgs_ResearchResultEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjgs_ResearchResultEN.SetMemo(this.memo); // 备注
  }

  /* 函数功能:把类对象的属性内容显示到界面上
    注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
     如果在设置数据库时,就应该一级字段在前,二级字段在后
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
     <param name = "pobjgs_ResearchResultEN">表实体类对象</param>
   */
  public async GetDataFromgs_ResearchResultClass(pobjgs_ResearchResultEN: clsgs_ResearchResultEN) {
    //this.resultId = pobjgs_ResearchResultEN.resultId;// 会议Id
    //this.topicId = pobjgs_ResearchResultEN.topicId;// 主题编号
    //this.isSubmit = pobjgs_ResearchResultEN.isSubmit;// 是否提交
    //this.resultContent = pobjgs_ResearchResultEN.resultContent;// 会议内容
    //$("#txtResultUser").val(pobjgs_ResearchResultEN.ResultUser);// 参会者
    //this.paperId = pobjgs_ResearchResultEN.paperId;
    //$("#hidppt").val(pobjgs_ResearchResultEN.pPTUrl);// PPT
    //$("#hidpdf").val(pobjgs_ResearchResultEN.pDFUrl);// PDF
    //this.ResultDate = pobjgs_ResearchResultEN.ResultDate;// 会议日期
    //this.memo = pobjgs_ResearchResultEN.memo;// 备注

    this.resultId = pobjgs_ResearchResultEN.resultId; // 成果Id
    this.paperId = pobjgs_ResearchResultEN.paperId; // 论文Id
    //this.topicId = pobjgs_ResearchResultEN.topicId;// 主题编号
    //this.resultTypeId = pobjgs_ResearchResultEN.resultTypeId;// 成果类型Id
    this.resultName = pobjgs_ResearchResultEN.resultName; // 成果名称
    this.resultContent = pobjgs_ResearchResultEN.resultContent; // 成果内容
    this.author = pobjgs_ResearchResultEN.author; // 作者
    this.division = pobjgs_ResearchResultEN.division; // 分工
    //this.updDate = pobjgs_ResearchResultEN.updDate;// 修改日期
    //this.updUser = pobjgs_ResearchResultEN.updUser;// 修改人
    this.memo = pobjgs_ResearchResultEN.memo; // 备注

    //setTextboxio();
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnSubmit_Click() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmitgs_ResearchResult;

    try {
      let strResultId;
      let returnBool;
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          //if (this.opType == "AddWithMaxId") {

          //}
          //else {

          strResultId = await this.AddNewRecordWithMaxIdSave();

          if (strResultId != '') {
            this.HideDialog_gs_ResearchResult();
            this.iShowList.BindGv(clsgs_ResearchResultEN._CurrTabName, '');
            //alert("添加历史版本出问题！");
          }
          //}
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,

          returnBool = await this.UpdateRecordSave();
          if (returnBool == true) {
            $('#hidResultId').val(this.keyId);
            const strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
            //strInfo += "(In gs_ResearchResult_Edit.btnSubmit_Click)";
            //$('#lblResult51').val(strInfo);
            //显示信息框
            console.log(strInfo);
            //alert(strInfo);
            message.success(strInfo);
            // HideDivInDivObj(divName, 'divLoading');

            this.HideDialog_gs_ResearchResult();
            this.iShowList.BindGv(clsgs_ResearchResultEN._CurrTabName, '');
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
    if (divName == null) return '';
    const objgs_ResearchResultEN: clsgs_ResearchResultEN = new clsgs_ResearchResultEN();
    await this.PutDataTogs_ResearchResultClass(objgs_ResearchResultEN);
    try {
      const responseKeyId = await gs_ResearchResult_AddNewRecordWithMaxIdAsync(
        objgs_ResearchResultEN,
      );
      const returnKeyId: string = responseKeyId;

      if (IsNullOrEmpty(returnKeyId) == false) {
        this.resultId = returnKeyId;
        //判断是否有返回的附件路径值
        if (GetInputValueInDivObj(divName, 'hdnFileOne') != '') {
          //第一个附件框判断
          const fileOne = GetInputValueInDivObj(divName, 'hdnFileOne');
          this.AddNewRecordobjgs_ResearchResultAttachmentENSave(fileOne, 'first');
        } else {
          if (GetInputValueInDivObj(divName, 'hdnFileTwo') != '') {
            const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
            this.AddNewRecordobjgs_ResearchResultAttachmentENSave(fileTwo, 'two');
          } else {
            if (GetInputValueInDivObj(divName, 'hdnFileThree') != '') {
              const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
              this.AddNewRecordobjgs_ResearchResultAttachmentENSave(fileThree, 'three');
            }
          }
        }
        //gs_ResearchResult_ReFreshCache();
        const strInfo = `添加记录成功!`;
        //
        //显示信息框
        //alert(strInfo);
        message.success(strInfo);
        // HideDivInDivObj(divName, 'divLoading');
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

    const objgs_ResearchResultEN: clsgs_ResearchResultEN = new clsgs_ResearchResultEN();
    objgs_ResearchResultEN.SetResultId(this.keyId);
    await this.PutDataTogs_ResearchResultClass(objgs_ResearchResultEN);
    objgs_ResearchResultEN.sfUpdFldSetStr = objgs_ResearchResultEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objgs_ResearchResultEN.resultId == '' || objgs_ResearchResultEN.resultId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const returnBool = await gs_ResearchResult_UpdateRecordAsync(objgs_ResearchResultEN);

      if (returnBool == true) {
        //存放主键;
        this.resultId = this.keyId;
        //得到相关论文附件地址，判断是否为空 只要有一个不为空都执行附件清除功能；
        if (
          (GetInputValueInDivObj(divName, 'hdnFileOne') != '' && $('#hdnFileOne') != undefined) ||
          (GetInputValueInDivObj(divName, 'hdnFileTwo') != '' && $('#hdnFileTwo') != undefined) ||
          (GetInputValueInDivObj(divName, 'hdnFileThree') != '' && $('#hdnFileThree') != undefined)
        ) {
          //根据Id删除附件
          const strwhere = `resultId ='${this.resultId}'`;
          this.DelRecordByWhere(strwhere);
        }

        //gs_ResearchResult_ReFreshCache();
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

  //添加上传附件方法
  public async AddNewRecordobjgs_ResearchResultAttachmentENSave(
    filePath: string,
    strfileNum: string,
  ) {
    const divName = this.getDivName();
    const objgs_ResearchResultAttachmentEN: clsgs_ResearchResultAttachmentEN =
      new clsgs_ResearchResultAttachmentEN();
    this.PutDataToPaperAttachmentClass(objgs_ResearchResultAttachmentEN, filePath);
    try {
      const responseText2 = await gs_ResearchResultAttachment_AddNewRecordAsync(
        objgs_ResearchResultAttachmentEN,
      );
      const returnBool = !!responseText2;
      if (returnBool == true) {
        //strIdCurrEduclsreturnKeyId: string = responseText2;
        //if (returnKeyId != "") {
        //存放返回主键
        //  $("#hidKeyId").val(returnKeyId);
        //第一个附件
        if (strfileNum == 'first') {
          //如果第二个附件不等于空，那么执行添加函数；
          if (GetInputValueInDivObj(divName, 'hdnFileTwo') != '' && $('#hdnFileTwo') != undefined) {
            const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
            this.AddNewRecordobjgs_ResearchResultAttachmentENSave(fileTwo, 'two');
          } else {
            //为空则判断第三个附件值；
            if (
              GetInputValueInDivObj(divName, 'hdnFileThree') != '' &&
              $('#hdnFileThree') != undefined
            ) {
              const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
              this.AddNewRecordobjgs_ResearchResultAttachmentENSave(fileThree, 'three');
            }
          }
        } else if (strfileNum == 'two') {
          //为空则判断第三个附件值；
          if (
            GetInputValueInDivObj(divName, 'hdnFileThree') != '' &&
            $('#hdnFileThree') != undefined
          ) {
            const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
            this.AddNewRecordobjgs_ResearchResultAttachmentENSave(fileThree, 'three');
          }
        }
      } else {
        const strInfo = `附件添加不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  public PutDataToPaperAttachmentClass(
    pobjgs_ResearchResultAttachmentEN: clsgs_ResearchResultAttachmentEN,
    filePath: string,
  ) {
    pobjgs_ResearchResultAttachmentEN.SetResultId(this.resultId); // 论文Id

    let strfilePath = filePath;
    //判断地址不为空则执行截取操作
    if (strfilePath != '') {
      const index = strfilePath.lastIndexOf('/');
      strfilePath = strfilePath.substring(index + 1, strfilePath.length);
      pobjgs_ResearchResultAttachmentEN.SetFilePath(filePath);

      pobjgs_ResearchResultAttachmentEN.SetFileName(strfilePath);
    }
    pobjgs_ResearchResultAttachmentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期

    pobjgs_ResearchResultAttachmentEN.SetTopicId(clsPrivateSessionStorage.topicIdInTree); //主题Id
    pobjgs_ResearchResultAttachmentEN.SetUpdUser(userStore.getUserId); // 修改用户Id
  }

  /* 
根据关键字删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecordByWhere(strWhere: string) {
    const divName = this.getDivName();

    try {
      const returnInt =
        await gs_ResearchResultAttachment_Delgs_ResearchResultAttachmentsByCondAsync(strWhere);
      if (returnInt > 0) {
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
      } else {
        // const strInfo = `删除记录不成功!`;
        //显示信息框
        //alert(strInfo);
      }

      //在修改时候，不管是否有附件数据被清除； 都需要执行附件添加功能
      //判断是否有返回的附件路径值
      const fileOne = GetInputValueInDivObj(divName, 'hdnFileOne');
      if (fileOne != '' && fileOne != undefined) {
        //第一个附件框判断

        this.AddNewRecordobjgs_ResearchResultAttachmentENSave(fileOne, 'first');
      } else {
        const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
        if (fileTwo != '' && fileTwo != undefined) {
          this.AddNewRecordobjgs_ResearchResultAttachmentENSave(fileTwo, 'two');
        } else {
          const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
          if (fileThree != '' && fileThree != undefined) {
            this.AddNewRecordobjgs_ResearchResultAttachmentENSave(fileThree, 'three');
          }
        }
      }

      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
}
