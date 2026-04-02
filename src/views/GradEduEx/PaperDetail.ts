import $ from 'jquery';
import {
  SysCommentEx_AddNewRecordExAsync,
  SysCommentEx_DelRecordAsync,
} from '@/ts/L3ForWApiExShare/GraduateEdu/clsSysCommentExWApi';
import { clsPubFun4Web, doDownLoad, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { clsPaperCollectionLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperCollectionLogEN';
import { clsPaperDownloadLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperDownloadLogEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsSysCommentEN';
import { clsvSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsvSysCommentEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { PaperAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import {
  PaperCollectionLog_AddNewRecordAsync,
  PaperCollectionLog_GetRecCountByCondAsync,
  PaperCollectionLog_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperCollectionLogWApi';
import {
  PaperDownloadLog_AddNewRecordAsync,
  PaperDownloadLog_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperDownloadLogWApi';
import {
  Paper_GetFirstObjAsync,
  Paper_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { vSysComment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsvSysCommentWApi';
import {
  SysVote_AddNewRecordAsync,
  SysVote_GetRecCountByCondAsync,
  SysVote_IsExistRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { GetAddressAndPort, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  HideDivInDivObj,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetCheckedKeyIdsInDivObj,
  SetImgSrcInDivObj,
  GetLabelValueInDivObj,
  GetTextAreaValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { Ref } from 'vue';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

/*
 * 宣布一个已经在存在的函数HideDialog，用于隐藏对象框，
 */

declare let window: any;
/* PaperReadWriteCRUD 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export default class PaperDetail extends PaperCRUD {
  public static GetPropValue: (strPropName: string) => string;
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static EditRef: Ref<any>;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
  protected _className = 'Unknown'; // 基类中的实际字段
  // 定义虚拟属性
  get className(): string {
    return this._className;
  }

  public static parentId = '';
  public mstrListDiv = 'divDataLst';
  //public objPager: clsPager = new clsPager();
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;
  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in QxPrjMenusCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPrjMenusCRUDEx');
  }
  /*
    //根据ID得到论文读写表数据
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
 */
  public async btnDetailRecord_Click(strCommentOrder: enumCommentOrder) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    try {
      if (userStore.getUserId != '') {
        $('#hidUserId').val(userStore.getUserId);
        $('#hidRoleId').val(userStore.getRoleId);
        $('#bUserName').append(userStore.getUserName);

        await this.IsVote(); //判断是否点赞或者收藏
        await this.IsCollection(); //判断是否点赞或者收藏
        //this.btnAddViews_Click();

        await this.DetailRecord(); //绑定论文信息
        await this.Bind_ShowAppraise_Click(strCommentOrder); //绑定评论
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //判断是否点赞或收藏并作出反应
  public async IsVote() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strWhereCond = ` 1 =1 and updUser='${userStore.getUserId}' and tableKey='${this.paperId}' and voteTypeId='01'`;

    try {
      const responseText = await SysVote_IsExistRecordAsync(strWhereCond);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        //strIdCurrEduclsstrMsg: string = `您已经点赞过这条论文了，请给其他论文点赞一下吧！`;
        //alert(strMsg);

        SetImgSrcInDivObj(
          objLayOut,
          'imgVotet',
          `${clsSysPara4WebApi.spVirtualDirectory}assets/img/vote2.png`,
        );
        //return responseText;//一定要有一个返回值，否则会出错！
      } else {
        SetImgSrcInDivObj(objLayOut, 'imgVotet', `/img/vote.png`);
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  public async IsCollection() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    const strWhereCond = ` 1 =1 and updUser='${userStore.getUserId}' and paperId='${this.paperId}'`;
    try {
      const responseText2 = await PaperCollectionLog_IsExistRecordAsync(strWhereCond);
      const bolIsExist: boolean = responseText2;
      if (bolIsExist == true) {
        SetImgSrcInDivObj(
          divName,
          'imgCollection',
          `${clsSysPara4WebApi.spVirtualDirectory}assets/img/collection2.png`,
        );
        //strIdCurrEduclsstrMsg: string = `您已经收藏过这条论文了！`;
        //alert(strMsg);
        //return responseText2;//一定要有一个返回值，否则会出错！
      } else {
        SetImgSrcInDivObj(divName, 'imgCollection', `/img/collection.png`);
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 根据关键字获取相应的记录的对象
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
   <param name = "sender">参数列表</param>
 */
  public async DetailRecord() {
    const strThisFuncName = this.DetailRecord.name;
    //this.keyId = strPaperRWId;
    const strWhereCond = await this.CombinevPaperReadWriteCondition();

    try {
      const objvPaperEN = await Paper_GetFirstObjAsync(strWhereCond);
      if (objvPaperEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      this.GetReadWriteData(objvPaperEN);
      console.log('完成Detail!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 函数功能:把类对象的属性内容显示到界面上
   注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
    如果在设置数据库时,就应该一级字段在前,二级字段在后
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
    <param name = "pobjPaperReadWriteEN">表实体类对象</param>
  */
  public async GetReadWriteData(pobjvPaperEN: clsPaperEN) {
    if (pobjvPaperEN.attachmentCount > 0) {
      $('#btnDownLoadFile').show();
      $('#lblDownLoadFile').hide();
    } else {
      $('#btnDownLoadFile').hide();
      $('#lblDownLoadFile').show();
    }
    //判断引用论文，自研论文
    if (pobjvPaperEN.paperTypeId == '02') {
      const strPaperTitle = pobjvPaperEN.paperTitle;
      $('#txtPaperTitle').html(strPaperTitle); //论文标题
    } else {
      $('#txtPaperTitle').html(pobjvPaperEN.paperTitle); //论文标题
    }

    $('#txtKeyword').html(pobjvPaperEN.keyword); //关键字Id
    $('#txtPeriodical').html(pobjvPaperEN.periodical); //
    $('#txtAuthor').html(pobjvPaperEN.author); //作者
    $('#txtResearchQuestion').html(pobjvPaperEN.researchQuestion); //研究问题
    $('#txtPaperContent').html(pobjvPaperEN.paperContent); //论文内容

    $('#lblUpdDate').text(pobjvPaperEN.updDate); //编辑时间
    const strUserName = await vQxUsersSimStore.getUserName(pobjvPaperEN.updUser);
    if (strUserName != '') {
      $('#lblUpdUser').text(strUserName); //编辑用户
    }

    $('#hidPaperUserId').val(pobjvPaperEN.updUser); //编辑用户

    $('#lblOKCount').text(pobjvPaperEN.okCount); //点赞数量

    $('#lblViews').text(pobjvPaperEN.browseNumber); //浏览量

    $('#lblViews').val(pobjvPaperEN.browseNumber); //浏览量

    if (pobjvPaperEN.score != null) {
      $('#lblScore').text(pobjvPaperEN.score); //统计平均评分
    } else {
      $('#lblScore').text(0); //统计平均评分
    }

    this.btnAddBrowseNumber_Click();

    //$("#txtMemo").html(pobjvPaperEN.memo);//备注
  }

  /* 把所有的查询控件内容组合成一个条件串
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
      <returns>条件串(strWhereCond)</returns>
    */
  public async CombinevPaperReadWriteCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const strPaperId = this.paperId;
    // const strUserId = userStore.getUserId;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      strWhereCond += ` And paperId = '${strPaperId}'`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperReadWriteCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  //添加论文浏览量

  public async btnAddBrowseNumber_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    const strThisFuncName = this.btnAddBrowseNumber_Click.name;
    //
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(this.paperId);
    const intBrowseNum: number = parseInt(GetLabelValueInDivObj(divName, 'lblViews'));
    if (intBrowseNum == null && intBrowseNum == 0 && intBrowseNum == '') {
      objPaperEN.SetBrowseNumber(1);
    } else {
      objPaperEN.SetBrowseNumber(intBrowseNum + 1);
    }

    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        //strIdCurrEduclsstrInfo: string = `论文审核成功!`;
        //
        ////显示信息框
        //alert(strInfo);
        //HideDialog();
        //this.BindGv_vPaper();
        //this.DetailRecord();
      } else {
        const strInfo = `不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('增加浏览量失败');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
    }
  }

  //添加点赞
  public async btnAddVote_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.btnAddVote_Click.name;

    //this.DivName = "divAddNewRecordSave";
    const objSysVoteEN: clsSysVoteEN = new clsSysVoteEN();

    //this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);

    objSysVoteEN.SetTableKey(this.paperId);
    objSysVoteEN.SetVoteTypeId('01');
    objSysVoteEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objSysVoteEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    objSysVoteEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);

    const strWhereCond = ` 1 =1 and updUser='${userStore.getUserId}' and tableKey='${this.paperId}'`;
    try {
      const responseText = await SysVote_IsExistRecordAsync(strWhereCond);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `您已经点赞过这条论文了，请给其他论文点赞一下吧！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await SysVote_AddNewRecordAsync(objSysVoteEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1 =1 and voteTypeId='01' and tableKey='${clsPrivateSessionStorage.paperId}'`;
        const intVoteCount = await SysVote_GetRecCountByCondAsync(strWhereCond2);
        const objPaperEN: clsPaperEN = new clsPaperEN();
        objPaperEN.SetPaperId(this.paperId);
        objPaperEN.SetOkCount(intVoteCount);

        objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }
        const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
        if (returnBool == true) {
          this.IsVote(); //判断是否点赞或者收藏
        } else {
          const strInfo = `点赞不成功!`;
          alert(strInfo);
          console.log('点赞不成功');
        }
      } else {
        const strInfo = `点赞不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `点赞不成功,${e}.`;
      alert(strMsg);
      return false;
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  //添加收藏
  public async btnAddCollection_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.btnAddCollection_Click.name;
    //this.DivName = "divAddNewRecordSave";
    const objPaperCollectionLogEN: clsPaperCollectionLogEN = new clsPaperCollectionLogEN();

    //this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);

    objPaperCollectionLogEN.SetPaperId(this.paperId);
    objPaperCollectionLogEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objPaperCollectionLogEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    const strWhereCond = ` 1 =1 and updUser='${objPaperCollectionLogEN.updUser}' and paperId=${objPaperCollectionLogEN.paperId}`;
    try {
      const responseText = await PaperCollectionLog_IsExistRecordAsync(strWhereCond);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `您已经收藏过这条论文了！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await PaperCollectionLog_AddNewRecordAsync(objPaperCollectionLogEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` paperId='${this.paperId}'`;
        const intCollectionCount = await PaperCollectionLog_GetRecCountByCondAsync(strWhereCond2);
        const objPaperEN: clsPaperEN = new clsPaperEN();
        objPaperEN.SetPaperId(this.paperId);
        objPaperEN.SetCollectionCount(intCollectionCount);

        objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }
        const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
        if (returnBool == true) {
          this.IsCollection();
        } else {
          const strInfo = `收藏不成功!`;
          alert(strInfo);
          console.log('收藏不成功');
        }
      } else {
        const strInfo = `收藏不成功!`;

        //显示信息框
        alert(strInfo);
        //this.BindGv_vPaperSubViewpoint();
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `收藏不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  //     const objSysCommentEN: clsSysCommentEN = new clsSysCommentEN();
  //this.PutDataToSysCommentClass(objSysCommentEN);
  //try {
  //    const responseText2 = await SysComment_AddNewRecordWithMaxIdAsync(objSysCommentEN);

  //添加评论
  public async SubmitAppraise1_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    if (IsNullOrEmpty(PaperDetail.parentId) == true) PaperDetail.parentId = 'root';

    const objSysCommentEN: clsSysCommentEN = new clsSysCommentEN();
    //this.PutDataToSysCommentClass(objSysCommentEN);
    objSysCommentEN.SetTableKey(this.paperId);
    objSysCommentEN.SetCommentTypeId('01');
    objSysCommentEN.SetParentId(PaperDetail.parentId);
    if (GetInputValueInDivObj(divName, 'hidRoleId') == '00620003') {
      objSysCommentEN.SetScoreType('1');
    } else {
      objSysCommentEN.SetScoreType('2');
      objSysCommentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    }
    const strvalue = GetInputValueInDivObj(divName, 'pin1');
    //判断是否有打分
    if (strvalue != '' && strvalue != undefined) {
      //获取值转化分数
      const strScore: string = this.GetScorebyText(strvalue);

      //判断内容是否输入
      if (GetTextAreaValueInDivObj(divName, 'txtAppraiseContent') != '') {
        objSysCommentEN.SetComment(GetTextAreaValueInDivObj(divName, 'txtAppraiseContent')); // 评议内容
        objSysCommentEN.SetScore(parseInt(strScore)); // 打分
        objSysCommentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
        objSysCommentEN.SetUpdUser(userStore.getUserId); // 修改用户Id
        objSysCommentEN.SetUserId(userStore.getUserId); // 修改用户Id
        try {
          const returnBool = await SysCommentEx_AddNewRecordExAsync(objSysCommentEN);
          //const responseText2 = await SysComment_AddNewRecordWithMaxIdAsync(objSysCommentEN);

          if (returnBool == true) {
            //strIdCurrEduclsstrInfo: string = `添加评论成功!`;
            //
            ////显示信息框
            //alert(strInfo);
            PaperDetail.vuebtn_Click('AlertOK', '');

            this.Bind_ShowAppraise_Click(enumCommentOrder.AllComment_01);
            //HideDialog3();
            //this.BindGv_vPaperSubViewpoint();
            //this.btnShowAppraise_Click();
          } else {
            const strInfo = `添加评论不成功!`;

            //显示信息框
            alert(strInfo);
            this.Bind_ShowAppraise_Click(enumCommentOrder.AllComment_01);
            //HideDialog3();
            //this.BindGv_vPaperSubViewpoint();
            //this.btnShowAppraise_Click();
          }

          $('#J_PostBtn').attr('disabled', 'false');
          $('#btnOKUpdAppraise').attr('disabled', 'false');
          return returnBool; //一定要有一个返回值，否则会出错！
        } catch (e: any) {
          $('#J_PostBtn').attr('disabled', 'false');
          $('#btnOKUpdAppraise').attr('disabled', 'false');
          console.error('catch(e)=');
          console.error(e);
          const strMsg = `添加评论不成功,${e}.`;
          alert(strMsg);
        }
      } else {
        $('#J_PostBtn').attr('disabled', 'false');
        $('#btnOKUpdAppraise').attr('disabled', 'false');
        //strIdCurrEduclsstrInfo: string = `请输入评语!`;
        ////显示信息框
        //alert(strInfo);

        PaperDetail.vuebtn_Click('AlertComment', '');
        return;
      }
    } else {
      $('#J_PostBtn').attr('disabled', 'false');
      $('#btnOKUpdAppraise').attr('disabled', 'false');
      //strIdCurrEduclsstrInfo: string = `请选择评分!`;
      ////显示信息框
      //alert(strInfo);

      PaperDetail.vuebtn_Click('AlertScore', '');
      return;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  //回复评论
  public async SubmitAppraise2_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);

    const objSysCommentEN: clsSysCommentEN = new clsSysCommentEN();
    //this.PutDataToSysCommentClass(objSysCommentEN);
    objSysCommentEN.SetTableKey(this.paperId);
    objSysCommentEN.SetCommentTypeId('01');
    objSysCommentEN.SetParentId(PaperDetail.parentId);
    if (GetInputValueInDivObj(divName, 'hidRoleId') == '00620003') {
      objSysCommentEN.SetScoreType('1');
    } else {
      objSysCommentEN.SetScoreType('2');
      objSysCommentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    }

    const strvalue = GetInputValueInDivObj(divName, 'pin2');
    //判断是否有打分
    if (strvalue != '' && strvalue != undefined) {
      //获取值转化分数
      const strScore: string = this.GetScorebyText(strvalue);

      //判断内容是否输入
      if (GetInputValueInDivObj(divName, 'txtAppraiseContent2') != '') {
        objSysCommentEN.SetComment(GetInputValueInDivObj(divName, 'txtAppraiseContent2')); // 评议内容
        objSysCommentEN.SetScore(parseInt(strScore)); // 打分
        objSysCommentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
        objSysCommentEN.SetUpdUser(userStore.getUserId); // 修改用户Id
        try {
          const responseText2 = await SysCommentEx_AddNewRecordExAsync(objSysCommentEN);
          //const responseText2 = await SysComment_AddNewRecordWithMaxIdAsync(objSysCommentEN);
          const returnBool = !!responseText2;
          if (returnBool == true) {
            const strInfo = `回复评论成功!`;

            //显示信息框
            alert(strInfo);

            this.Bind_ShowAppraise_Click(enumCommentOrder.AllComment_01);

            PaperDetail.vuebtn_Click('HideDialog', '');
            //HideDialog3();
            //this.BindGv_vPaperSubViewpoint();
            //this.btnShowAppraise_Click();
          } else {
            const strInfo = `回复评论不成功!`;

            //显示信息框
            alert(strInfo);
            this.Bind_ShowAppraise_Click(enumCommentOrder.AllComment_01);

            PaperDetail.vuebtn_Click('HideDialog', '');
            //HideDialog3();
            //this.BindGv_vPaperSubViewpoint();
            //this.btnShowAppraise_Click();
          }

          $('#btnOKUpdAppraise').attr('disabled', 'false');
          return responseText2; //一定要有一个返回值，否则会出错！
        } catch (e: any) {
          $('#btnOKUpdAppraise').attr('disabled', 'false');
          console.error('catch(e)=');
          console.error(e);
          const strMsg = `添加评论不成功,${e}.`;
          alert(strMsg);
        }
      } else {
        $('#btnOKUpdAppraise').attr('disabled', 'false');
        const strInfo = `请输入评语!`;
        //显示信息框
        alert(strInfo);
        return;
      }
    } else {
      $('#btnOKUpdAppraise').attr('disabled', 'false');
      const strInfo = `请选择评分!`;
      //显示信息框
      alert(strInfo);
      return;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  //通过得到的值判断，得到分数
  public GetScorebyText(sValue: string) {
    let Score = '';
    if (sValue == '1') {
      Score = '2';
    } else if (sValue == '2') {
      Score = '4';
    } else if (sValue == '3') {
      Score = '6';
    } else if (sValue == '4') {
      Score = '8';
    } else {
      Score = '10';
    }
    return Score;
  }

  /* 
    删除评论内容
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   */
  public async btnDeleteComment_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      await this.DelRecord(strKeyId);
      await this.Bind_ShowAppraise_Click(enumCommentOrder.AllComment_01);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
    根据关键字删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   */
  public async DelRecord_pyf(strCommentId: string) {
    try {
      const returnInt: number = await SysCommentEx_DelRecordAsync(strCommentId);
      if (returnInt > 0) {
        PaperDetail.vuebtn_Click('AlertNo', '');
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
      } else {
        const strInfo = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //显示评论
  public async Bind_ShowAppraise_Click(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let arrvSysCommentObjLst1: Array<clsvSysCommentEN> = [];
    let arrvSysCommentObjLst2: Array<clsvSysCommentEN> = [];
    let arrvSysCommentObjLst3: Array<clsvSysCommentEN> = [];
    let strWhereCond1 = '';
    let strWhereCond2 = '';
    const strUserId = userStore.getUserId;
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部评论
        strWhereCond1 = ` parentId='root' and  commentTypeId='01' and tableKey='${this.paperId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  commentTypeId='01' and tableKey='${this.paperId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人评论
        strWhereCond1 = ` parentId='root' and  commentTypeId='01' and tableKey='${this.paperId}' and updUser='${strUserId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  commentTypeId='01' and tableKey='${this.paperId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新评论
        strWhereCond1 = ` parentId='root' and  commentTypeId='01' and tableKey='${this.paperId}' order by updDate Desc`;
        strWhereCond2 = ` parentId<>'root' and  commentTypeId='01' and tableKey='${this.paperId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }
    try {
      arrvSysCommentObjLst1 = await vSysComment_GetObjLstAsync(strWhereCond1);
      arrvSysCommentObjLst2 = await vSysComment_GetObjLstAsync(strWhereCond2);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrvSysCommentObjLst1.length; i++) {
        const objvSysComment = arrvSysCommentObjLst1[i];
        varNum++;
        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml += `<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>`;
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';
        const strUserName = await vQxUsersSimStore.getUserName(objvSysComment.updUser);

        if (GetInputValueInDivObj(divName, 'hidPaperUserId') == objvSysComment.updUser) {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842 style="color:red;" > 楼主：${strUserName}</span>`;
        } else {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842">${strUserName}</span>`;
        }
        strhtml += `<span class="comment-time">${objvSysComment.updDate}</span>`;
        strhtml += `  <span class="comment-username J_User">${varNum}楼</span></p>`;
        //strhtml += '<div class="comment-content J_CommentContent">评分：' + arrvPaperAppraiseObjLst[i].AppraiseScore + '</div>';
        strhtml += `<div class="comment-content J_CommentContent">${objvSysComment.comment}</div>`;

        //回复区

        arrvSysCommentObjLst3 = arrvSysCommentObjLst2.filter(
          (x) => x.parentId == objvSysComment.commentId,
        );
        if (arrvSysCommentObjLst3.length > 0) {
          strhtml += '<div class="reply J_ReplyBlock">';
          for (let j = 0; j < arrvSysCommentObjLst3.length; j++) {
            strhtml += '<div class="reply-block">';

            strhtml += '<div class="reply-content">';

            const strUserName = await vQxUsersSimStore.getUserName(
              arrvSysCommentObjLst3[j].updUser,
            );

            if (
              GetInputValueInDivObj(divName, 'hidPaperUserId') == arrvSysCommentObjLst3[j].updUser
            ) {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" data-userid="28805328" style="color:red;"> 楼主(${strUserName})</b>：</span>`;
            } else {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" data-userid="28805328">${strUserName}</b>：</span>`;
            }
            strhtml += `${arrvSysCommentObjLst3[j].comment}</div>`;

            strhtml += '<div class="reply-operate reply-operate--hot">';
            if (arrvSysCommentObjLst3[j].scoreType == '2') {
              strhtml += `<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分：<i>${arrvSysCommentObjLst3[j].score}</i></span>`;
            } else {
              strhtml += `<span class="J_Vote reply-operate-item reply-up">学生评分：<i>${arrvSysCommentObjLst3[j].score}</i></span>`;
            }
            strhtml += `<i class="reply-dot">·</i><span>${arrvSysCommentObjLst3[j].updDate}</span>`;
            strhtml += '</div>';

            strhtml += '</div>';
          }
          strhtml += '</div>';
        }
        ///操作区
        strhtml += '<div class="comment-operate J_CommentOperate clearfix">';
        if (objvSysComment.scoreType == '2') {
          strhtml += `<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分：<i>${objvSysComment.score}</i></span>`;
        } else {
          strhtml += `<span class="J_Vote reply-operate-item reply-up">学生评分：<i>${objvSysComment.score}</i></span>`;
        }

        strhtml += '<span class="J_Vote comment-operate-item comment-operate-up">赞<i>1</i></span>';
        strhtml += `<span class="J_Reply comment-operate-item comment-operate-reply" id="J_Reply" onclick=btnReplyComment_Click("${objvSysComment.commentId}")>回复</span>`;
        strhtml += '</div>';

        if (strUserId == objvSysComment.updUser) {
          strhtml += `<div class="J_Report comment-report" id="J_Report6673850347411436155" onclick=btnDeleteComment_Click("${objvSysComment.commentId}")>删除</div>`;
        }

        strhtml += '</div></div>';
      }
      J_ShortComment.innerHTML = strhtml;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取数据不成功,${e}.`;
      alert(strMsg);
    }
  }
  //下载文件
  public btnDownLoadFile_Click() {
    this.GetPaperAttachmentRecord();
    this.btnAddDownload_Click();
  }

  public async GetPaperAttachmentRecord() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPapeId = this.paperId;
    //this.keyId = strPaperRWId;
    const strWhereCond = ` ${clsPaperAttachmentEN.con_PaperId} = '${strPapeId}'`;
    let arrPaperAttachmentObjLst: Array<clsPaperAttachmentEN> = [];
    try {
      arrPaperAttachmentObjLst = await PaperAttachment_GetObjLstAsync(strWhereCond);
      for (let i = 0; i < arrPaperAttachmentObjLst.length; i++) {
        const strfilepath = GetAddressAndPort() + arrPaperAttachmentObjLst[i].filePath;
        doDownLoad(strfilepath, arrPaperAttachmentObjLst[i].paperAttachmentName);
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  //添加下载量
  public async btnAddDownload_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.btnAddDownload_Click.name;
    //this.DivName = "divAddNewRecordSave";
    const objPaperDownloadLogEN: clsPaperDownloadLogEN = new clsPaperDownloadLogEN();

    //this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);

    objPaperDownloadLogEN.SetPaperId(this.paperId);
    objPaperDownloadLogEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objPaperDownloadLogEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    // const strWhereCond = ` 1 =1 and updUser='${objPaperDownloadLogEN.updUser}' and paperId=${objPaperDownloadLogEN.paperId}`;
    try {
      //const responseText = await PaperDownloadLog_IsExistRecordAsync(strWhereCond);
      //strIdCurrEduclsbolIsExist: boolean = responseText;
      //if (bolIsExist == true) {
      //    //strIdCurrEduclsstrMsg: string = `您已经收藏过这条论文了！`;
      //    //alert(strMsg);
      //    return responseText;//一定要有一个返回值，否则会出错！
      //}

      const returnBool = await PaperDownloadLog_AddNewRecordAsync(objPaperDownloadLogEN);

      if (returnBool == true) {
        const strWhereCond2 = ` paperId='${this.paperId}'`;
        const intDownloadCount = await PaperDownloadLog_GetRecCountByCondAsync(strWhereCond2);
        const objPaperEN: clsPaperEN = new clsPaperEN();
        objPaperEN.SetPaperId(this.paperId);
        objPaperEN.SetDownloadCount(intDownloadCount);

        objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }
        const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
        if (returnBool == false) {
          const strInfo = `添加下载量不成功!`;
          alert(strInfo);
          console.log('添加下载量不成功');
        }
      } else {
        const strInfo = `添加下载量不成功!`;

        //显示信息框
        alert(strInfo);
        //this.BindGv_vPaperSubViewpoint();
      }
      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加下载量不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  /*
   * 获取当前页序号
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }

  /*
   * 论文标题
   */
  public set paperTitle(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtPaperTitle', value);
  }
  /*
   * 论文标题
   */
  public get paperTitle(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperTitle');
  }
  /*
   * 论文标题
   */
  public get paperTitle_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperTitle_q');
  }
  /*
   * 期刊
   */
  public set periodical(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtPeriodical', value);
  }
  /*
   * 期刊
   */
  public get periodical(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPeriodical');
  }
  /*
   * 引用Id
   */
  public set quoteId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtQuoteId', value);
  }
  /*
   * 引用Id
   */
  public get quoteId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtQuoteId');
  }
  /*
   * 研究问题
   */
  public set researchQuestion(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtResearchQuestion', value);
  }
  /*
   * 研究问题
   */
  public get researchQuestion(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtResearchQuestion');
  }

  /*
   * 备注
   */
  public set memo(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtMemo', value);
  }
  /*
   * 备注
   */
  public get memo(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtMemo');
  }
  /*
   * 设置操作类型：Add||Update||Detail
   */
  public set opType(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidOpType', value);
  }
  /*
   * 主题内容
   */
  public set paperContent(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtPaperContent', value);
  }
  /*
   * 主题内容
   */
  public get paperContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperContent');
  }

  /*
   * 关键字
   */
  public set keyword(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtKeyword', value);
  }
  /*
   * 关键字
   */
  public get keyword(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtKeyword');
  }
  /*
   * 作者
   */
  public set author(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtAuthor', value);
  }
  /*
   * 作者
   */
  public get author(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtAuthor');
  }

  /*
   * 获取年月日
   */
  public getNowDate(): string {
    const date = new Date();
    let month: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();
    if (month <= 9) {
      month = `0${month}`;
    }
    if (strDate <= 9) {
      strDate = `0${strDate}`;
    }

    return `${date
      .getFullYear()
      .toString()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
  /*
   * 教学班
   */
  public get idCurrEduCls(): string {
    return PaperDetail.GetPropValue('idCurrEduCls');
  }
  public get paperId(): string {
    return PaperDetail.GetPropValue('paperId');
  }
  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_PaperDetail(): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_PaperDetail.name;
    if (PaperDetail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (PaperDetail.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditRef为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await PaperDetail.EditObj.showDialog();
    }

    PaperDetail.vuebtn_Click('SetDiv', '');
    return true;
  }
  /*
   * 函数功能:页面导入,当页面开始运行时所发生的事件
   */
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      const bolIsSuccess = await this.ShowDialog_PaperDetail();
      if (bolIsSuccess == false) return;
      const objLayOut = this.getDivName(enumDivType.LayOut_01);
      if (objLayOut == null) return;
      // console.log('PaperDetail window is open');
      PaperDetail.vuebtn_Click('window_onload', '');
      // this.btnDetailRecord_Click();
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    // const objPage = new StudentInfoList();

    const objPage = new PaperDetail(divLayout);
    const divDataLst = GetDivObjInDivObj(divLayout, 'divDataLst');
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divDataLst);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divDataLst);
    //const objPageEdit: Ex = new Ex(objPage);
    switch (strCommandName) {
      case 'AddStuToEduCls':
        // objPage.btnAddStuToEduCls_Click();
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'StudentInfoList.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }
}
