import $ from 'jquery';
import { clsPubFun4Web, doDownLoad } from '@/ts/FunClass/clsPubFun4Web';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';

import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { clsPaperDownloadLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperDownloadLogEN';
import { PaperAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import { PaperDownloadLog_AddNewRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperDownloadLogWApi';
import {
  Paper_GetFirstObjAsync,
  Paper_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  HideDivInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { stuUserLoginInfo } from '@/ts/FunClass/stuUserLoginInfo';
import { GetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { userStore } from '@/store/modulesShare/user';

declare let window: any;
/* PaperReadWriteCRUD 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class PaperDetailPhoneEx extends PaperCRUD {
  public mstrListDiv = 'divDataLst';
  //public objPager: clsPager = new clsPager();
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;

  /*
    //根据ID得到论文读写表数据
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
 */
  public async btnDetailRecord_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    try {
      if (GetInputValueInDivObj(objLayOut, 'hidUserInfo') != '') {
        const strUserInfo_Hid = GetInputValueInDivObj(objLayOut, 'hidUserInfo');
        const objvUserRoleRelation = stuUserLoginInfo.GetObjByHtmlString2(strUserInfo_Hid);
        $('#lnkUserName').html(`${userStore.getUserName}(${userStore.getRoleName})`);
        $('#hidUserId').val(objvUserRoleRelation.userId);
        $('#bUserName').append(userStore.getUserName);

        //this.btnAddViews_Click();
        await this.DetailRecord(); //绑定论文信息
        //const gvResult1 = await this.IsVoteCollection();//判断是否点赞或者收藏
        // const gvResult3 = await this.Bind_ShowAppraise_Click();//绑定评论
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        window.top.location.href = '../WebApp/Login';
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
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
  public GetReadWriteData(pobjvPaperEN: clsPaperEN) {
    //if (pobjvPaperEN.attachmentCount > 0) {
    //    $("#btnDownLoadFile").show();
    //    $("#lblDownLoadFile").hide();

    //} else {
    //    $("#btnDownLoadFile").hide();
    //    $("#lblDownLoadFile").show();
    //}

    $('#txtPaperTitle').html(pobjvPaperEN.paperTitle); //论文标题
    $('#txtKeyword').html(pobjvPaperEN.keyword); //关键字Id
    $('#txtPeriodical').html(pobjvPaperEN.periodical); //
    $('#txtAuthor').html(pobjvPaperEN.author); //作者
    $('#txtResearchQuestion').html(pobjvPaperEN.researchQuestion); //研究问题
    $('#txtPaperContent').html(pobjvPaperEN.paperContent); //论文内容

    $('#lblUpdDate').text(pobjvPaperEN.updDate); //编辑时间

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

  //  }
  /* 把所有的查询控件内容组合成一个条件串
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
      <returns>条件串(strWhereCond)</returns>
    */
  public async CombinevPaperReadWriteCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const strPaperId = GetHidPaperId(divName);
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
    const strThisFuncName = this.btnAddBrowseNumber_Click.name;
    //
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(GetHidPaperId(divName));
    const intBrowseNum: number = parseInt(GetInputValueInDivObj(divName, 'lblViews'));
    if (intBrowseNum == null && intBrowseNum == 0 && intBrowseNum == '') {
      objPaperEN.browseNumber = 1;
    } else {
      objPaperEN.browseNumber = intBrowseNum + 1;
    }

    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      Paper_UpdateRecordAsync(objPaperEN).then((jsonData) => {
        const returnBool: boolean = jsonData;
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
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
    }
  }

  //添加收藏
  //public async btnAddCollection_Click() {
  //    //this.DivName = "divAddNewRecordSave";
  //    const objPaperCollectionLogEN: clsPaperCollectionLogEN = new clsPaperCollectionLogEN();

  //    //this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);

  //    objPaperCollectionLogEN.SetPaperId($("#hidPaperId").val();
  //    objPaperCollectionLogEN.SetUpdDate(clsPubFun4Web.getNowDate();// 修改日期
  //    objPaperCollectionLogEN.SetUpdUser(userStore.getUserId;// 修改用户Id
  //    strWhereCond = " 1 =1 and updUser='" + objPaperCollectionLogEN.updUser + "' and paperId=" + objPaperCollectionLogEN.paperId;
  //    try {
  //        const responseText = await PaperCollectionLog_IsExistRecordAsync(strWhereCond);
  //        strIdCurrEduclsbolIsExist: boolean = responseText;
  //        if (bolIsExist == true) {
  //            strIdCurrEduclsstrMsg: string = `您已经收藏过这条论文了！`;
  //            alert(strMsg);
  //            return responseText;//一定要有一个返回值，否则会出错！
  //        }

  //        const responseText2 = await PaperCollectionLog_AddNewRecordAsync(objPaperCollectionLogEN);
  //        const returnBool: boolean = !!responseText2;
  //        if (returnBool == true) {
  //            //strIdCurrEduclsstrInfo: string = `收藏成功!`;
  //            //
  //            ////显示信息框
  //            //alert(strInfo);
  //            this.IsVoteCollection();
  //            //this.BindGv_vPaperSubViewpoint();
  //        }
  //        else {
  //            strIdCurrEduclsstrInfo: string = `收藏不成功!`;
  //
  //            //显示信息框
  //            alert(strInfo);
  //            //this.BindGv_vPaperSubViewpoint();
  //        }
  //        return responseText2;//一定要有一个返回值，否则会出错！
  //    }
  //    catch (e:any) {
  //        console.error('catch(e)=');
  //        console.error(e);
  //        strIdCurrEduclsstrMsg: string = `收藏不成功,${e}.`;
  //        alert(strMsg);
  //    }

  //    return true;//一定要有一个返回值，否则会出错！
  //}

  ////添加评论
  //public async SubmitAppraise_Click() {
  //    this.DivName = "divAddNewRecordSave";
  //    const objPaperAppraiseEN: clsPaperAppraiseEN = new clsPaperAppraiseEN();
  //    //this.PutDataToPaperAppraiseClass(objPaperAppraiseEN);
  //    objPaperAppraiseEN.SetPaperId($("#hidPaperId").val();

  //    strIdCurrEduclsstrvalue = $("#pin").val();
  //    //判断是否有打分
  //    if (strvalue != "" && strvalue != undefined) {
  //        //获取值转化分数
  //        strIdCurrEduclsstrScore: string = this.GetScorebyText(strvalue);

  //        //判断内容是否输入
  //        if ($("#txtAppraiseContent").val() != "") {
  //            objPaperAppraiseEN.PaperAppraiseContent = $("#txtAppraiseContent").val();// 评议内容
  //            objPaperAppraiseEN.AppraiseScore = parseInt(strScore);// 打分
  //            objPaperAppraiseEN.SetUpdDate(clsPubFun4Web.getNowDate();// 修改日期
  //            objPaperAppraiseEN.SetUpdUser(userStore.getUserId;// 修改用户Id
  //            try {
  //                const responseText2 = await PaperAppraise_AddNewRecordAsync(objPaperAppraiseEN);
  //                const returnBool: boolean = !!responseText2;
  //                if (returnBool == true) {
  //                    strIdCurrEduclsstrInfo: string = `添加评论成功!`;
  //
  //                    //显示信息框
  //                    alert(strInfo);
  //                    this.Bind_ShowAppraise_Click();
  //                    //HideDialog3();
  //                    //this.BindGv_vPaperSubViewpoint();
  //                    //this.btnShowAppraise_Click();
  //                }
  //                else {
  //                    strIdCurrEduclsstrInfo: string = `添加评论不成功!`;
  //
  //                    //显示信息框
  //                    alert(strInfo);
  //                    this.Bind_ShowAppraise_Click();
  //                    //HideDialog3();
  //                    //this.BindGv_vPaperSubViewpoint();
  //                    //this.btnShowAppraise_Click();
  //                }
  //                return responseText2;//一定要有一个返回值，否则会出错！
  //            }
  //            catch (e:any) {
  //                console.error('catch(e)=');
  //                console.error(e);
  //                strIdCurrEduclsstrMsg: string = `添加评论不成功,${e}.`;
  //                alert(strMsg);
  //            }
  //        }
  //        else {
  //            strIdCurrEduclsstrInfo: string = `请输入评语!`;
  //            //显示信息框
  //            alert(strInfo);
  //            return;
  //        }

  //    }
  //    else {

  //        strIdCurrEduclsstrInfo: string = `请选择评分!`;
  //        //显示信息框
  //        alert(strInfo);
  //        return;
  //    }
  //    return true;//一定要有一个返回值，否则会出错！
  //}

  //添加评论
  //public async SubmitAppraise_Click() {
  //    this.DivName = "divAddNewRecordSave";
  //    const objPaperAppraiseEN: clsPaperAppraiseEN = new clsPaperAppraiseEN();
  //    //this.PutDataToPaperAppraiseClass(objPaperAppraiseEN);
  //    objPaperAppraiseEN.SetPaperId($("#hidPaperId").val();

  //    strIdCurrEduclsstrvalue = $("#pin").val();
  //    //判断是否有打分
  //    if (strvalue != "" && strvalue != undefined) {
  //        //获取值转化分数
  //        strIdCurrEduclsstrScore: string = this.GetScorebyText(strvalue);

  //        //判断内容是否输入
  //        if ($("#txtAppraiseContent").val() != "") {
  //            objPaperAppraiseEN.PaperAppraiseContent = $("#txtAppraiseContent").val();// 评议内容
  //            objPaperAppraiseEN.AppraiseScore = parseInt(strScore);// 打分
  //            //objPaperAppraiseEN.AppraiseScore = 10;// 打分
  //            objPaperAppraiseEN.SetUpdDate(clsPubFun4Web.getNowDate();// 修改日期
  //            objPaperAppraiseEN.SetUpdUser(userStore.getUserId;// 修改用户Id
  //            try {
  //                const responseText2 = await PaperAppraise_AddNewRecordAsync(objPaperAppraiseEN);
  //                const returnBool: boolean = !!responseText2;
  //                if (returnBool == true) {
  //                    strIdCurrEduclsstrInfo: string = `添加评论成功!`;
  //
  //                    //显示信息框
  //                    alert(strInfo);
  //                    this.Bind_ShowAppraise_Click();
  //                    //HideDialog3();
  //                    //this.BindGv_vPaperSubViewpoint();
  //                    //this.btnShowAppraise_Click();
  //                }
  //                else {
  //                    strIdCurrEduclsstrInfo: string = `添加评论不成功!`;
  //
  //                    //显示信息框
  //                    alert(strInfo);
  //                    this.Bind_ShowAppraise_Click();
  //                    //HideDialog3();
  //                    //this.BindGv_vPaperSubViewpoint();
  //                    //this.btnShowAppraise_Click();
  //                }
  //                return responseText2;//一定要有一个返回值，否则会出错！
  //            }
  //            catch (e:any) {
  //                console.error('catch(e)=');
  //                console.error(e);
  //                strIdCurrEduclsstrMsg: string = `添加评论不成功,${e}.`;
  //                alert(strMsg);
  //            }
  //        }
  //        else {
  //            strIdCurrEduclsstrInfo: string = `请输入评语!`;
  //            //显示信息框
  //            alert(strInfo);
  //            return;
  //        }

  //    }
  //    else {

  //        strIdCurrEduclsstrInfo: string = `请选择评分!`;
  //        //显示信息框
  //        alert(strInfo);
  //        return;
  //    }
  //    return true;//一定要有一个返回值，否则会出错！
  //}

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

  //下载文件
  public btnDownLoadFile_Click() {
    this.GetPaperAttachmentRecord();
    this.btnAddDownload_Click();
  }

  public async GetPaperAttachmentRecord() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPapeId = GetHidPaperId(divName);
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
    //this.DivName = "divAddNewRecordSave";
    const objPaperDownloadLogEN: clsPaperDownloadLogEN = new clsPaperDownloadLogEN();

    //this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);

    objPaperDownloadLogEN.SetPaperId(GetHidPaperId(divName));
    objPaperDownloadLogEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objPaperDownloadLogEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    // const strWhereCond = ` 1 =1 and updUser='${objPaperDownloadLogEN.updUser}' and paperId=${objPaperDownloadLogEN.paperId}`;
    try {
      const responseText2 = await PaperDownloadLog_AddNewRecordAsync(objPaperDownloadLogEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        //strIdCurrEduclsstrInfo: string = `收藏成功!`;
        //
        ////显示信息框
        //alert(strInfo);
        //this.BindGv_vPaperSubViewpoint();
      } else {
        const strInfo = `添加下载量不成功!`;

        //显示信息框
        alert(strInfo);
        //this.BindGv_vPaperSubViewpoint();
      }
      return responseText2; //一定要有一个返回值，否则会出错！
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
}
