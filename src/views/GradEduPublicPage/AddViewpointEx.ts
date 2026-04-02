import $ from 'jquery';
import { Pub_PaperList } from './Pub_PaperList';
import { Pub_ResearchTopicList } from './Pub_ResearchTopicList';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { Viewpoint_Edit } from '@/viewsBase/GradEduTopic/Viewpoint_Edit';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointRelaEN';
import { clsViewpointAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointAttachmentEN';
import { clsViewpointCitationEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointCitationEN';
import { clsViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointEN';
import { clsViewpointVerEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointVerEN';
import { clsvViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvViewpointEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { clsViewpointTypeEN } from '@/ts/L0Entity/RT_Params/clsViewpointTypeEN';
import { ResearchTopic_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import {
  RTViewpointRela_AddNewRecordAsync,
  RTViewpointRela_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTViewpointRelaWApi';
import {
  ViewpointAttachment_AddNewRecordAsync,
  ViewpointAttachment_DelViewpointAttachmentsByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsViewpointAttachmentWApi';
import {
  ViewpointCitation_AddNewRecordAsync,
  ViewpointCitation_DelViewpointCitationsByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsViewpointCitationWApi';
import {
  ViewpointVer_AddNewRecordAsync,
  ViewpointVer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsViewpointVerWApi';
import {
  Viewpoint_AddNewRecordAsync,
  Viewpoint_GetMaxStrIdAsync,
  Viewpoint_GetObjByViewpointIdAsync,
  Viewpoint_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsViewpointWApi';
import { vViewpoint_GetObjByViewpointIdAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvViewpointWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { LiteratureType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { ViewpointType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsViewpointTypeWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';

declare function HideDialog(): void;
declare function HideDialogThree(): void;
declare function CloseWindow(): void;
declare let window: any;
/* Viewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class AddViewpointEx extends Viewpoint_Edit {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvViewpointBy: string = "viewpointId";

  //论文列表
  public mstrListDivPaper = 'divPaperDataLst';
  //主题列表
  public mstrListdivTopicDataLst = 'divTopicDataLst';
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
        (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
      */
  public async PageLoad() {
    const divName = this.getDivName();
    if (divName == null) return;
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        if (clsPubLocalStorage.idCurrEduCls == '') {
          const objResearchTopic = await ResearchTopic_GetFirstObjAsync(
            ` topicId=${clsPrivateSessionStorage.topicIdInTree}`,
          ); //通过主题Id获取教学班ID
          if (objResearchTopic == null) {
            const strMsg = Format(
              '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
            ////const strThisFuncName = this.PageLoad.name;
          }
          clsPubLocalStorage.idCurrEduCls = objResearchTopic.idCurrEduCls;
        }
        const divName = this.getDivName();
        if (divName == null) return;
        await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');
        await this.BindDdl_ViewpointTypeId('ddlViewpointTypeId');

        let userTypeId = GetInputValueInDivObj(divName, 'hidUserTypeId');
        if (userTypeId == '01') {
          userTypeId = '04';
        } else {
          userTypeId = '05';
        }
        if (GetInputValueInDivObj(divName, 'hidViewpointId') != '') {
          await this.UpdateRecord(GetInputValueInDivObj(divName, 'hidViewpointId'));

          //if ($("#hidIsRecommend").val() != "") {
          //    const RecommendRecord = await this.RecommendRecord($("#hidViewpointId").val());
          //}

          HideDivInDivObj(divName, 'divLoading');
        } else {
          this.AddNewRecord();
          //获取分享Id
          const responseText = await gs_UserConfigEx_GetNewReturnShareIdEx(
            userTypeId,
            userStore.getUserId,
          );
          const strShareId: string = responseText;
          //const returnBool: boolean = !!responseText2;
          if (strShareId != '') {
            this.shareId = strShareId;
          }
          HideDivInDivObj(divName, 'divLoading');
        }

        //1、为下拉框设置数据源,绑定列表数据

        //const ddl_ViewpointTypeId_q = await this.BindDdl_ViewpointTypeId("ddlViewpointTypeId_q");
        //ViewpointCRUD.sortvViewpointBy = "updDate Desc";
        //this.hidSortResearchTopicBy = "updDate Desc";
        //论文
        //PaperCRUD.sortPaperBy = "updDate Desc";
        //用户下拉框绑定
        //const ddl_UserId_q = await this.BindDdl_UserId("ddlUserId_q");

        await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q'); //用户查询区域
        //文献类型；
        await this.BindDdl_LiteratureTypeId('ddlLiteratureTypeId_q');

        //论文
        this.hidSortvRTPaperRelaBy = 'updDate Desc';

        //strWhereCond = await this.CombinevViewpointCondition();
        //const responseText = await vViewpoint_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {

        //});
        //2、显示无条件的表内容在GridView中
        //await this.BindGv_vViewpoint();
        //获取传参的paperId
        const strPaperId = GetInputValueInDivObj(divName, 'hidRequestPaperId');
        if (strPaperId != '') {
          $('#SelectPaper').hide();
          //存放Id
          $('#txtPaperId').val(strPaperId);
        } else {
          $('#SelectPaper').show();
        }
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 为插入记录做准备工作
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
  */

  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    this.btnSubmitViewpoint = '确认添加';
    this.btnCancelViewpoint = '取消添加';
    this.Clear();
    //去掉提交按钮不可用状态
    $('#btnOKUpd').attr('disabled', 'false');
    //wucViewpointB1.viewpointId = clsViewpointBL.GetMaxStrId_S();
    //return new Promise((resolve, reject) => {
    //    try {
    //        const responseText = Viewpoint_GetMaxStrIdAsync().then((jsonData) => {
    //            strIdCurrEduclsreturnString: string = jsonData.toString();
    //            if (returnString == "") {
    //                strIdCurrEduclsstrInfo: string = `获取表Paper的最大关键字为空，不成功，请检查!`;
    //                //显示信息框
    //                alert(strInfo);
    //            }
    //            else {
    //                $('#txtViewpointId').val(returnString);
    //            }
    //        });
    //    }
    //    catch (e:any) {
    //        console.error('catch(e)=');
    //        console.error(e);
    //        strIdCurrEduclsstrMsg: string = `获取表关键字的最大值不成功,${e}.`;
    //        alert(strMsg);
    //    }
    //});
  }
  /// <summary>
  /// 为下拉框获取数据,从表:[ViewpointType]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_ViewpointTypeId(ddlViewpointTypeId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlViewpointTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlViewpointTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrViewpointTypeObjLst = await ViewpointType_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlViewpointTypeId,
        arrViewpointTypeObjLst,
        clsViewpointTypeEN.con_ViewpointTypeId,
        clsViewpointTypeEN.con_ViewpointTypeName,
        '观点类型',
      );
      console.log('完成BindDdl_ViewpointTypeId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /// <summary>
  /// 为下拉框获取数据,从表:[Paper]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_LiteratureTypeId(ddlLiteratureTypeId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrPaperObjLst = await LiteratureType_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrPaperObjLst,
        clsLiteratureTypeEN.con_LiteratureTypeId,
        clsLiteratureTypeEN.con_LiteratureTypeName,
        '文献类型',
      );
      console.log('完成BindDdl_LiteratureTypeId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
  <param name = "pobjViewpointEN">数据传输的目的类对象</param>
*/
  public PutDataToViewpointVerClass(pobjViewpointVerEN: clsViewpointVerEN) {
    const divName = this.getDivName();
    pobjViewpointVerEN.SetViewpointId(this.viewpointId); // 观点Id
    pobjViewpointVerEN.SetViewpointName(this.viewpointName); // 观点名称
    pobjViewpointVerEN.SetViewpointContent(this.viewpointContent); // 观点内容
    pobjViewpointVerEN.SetViewpointTypeId(this.viewpointTypeId); // 观点类型Id
    pobjViewpointVerEN.SetReason(this.reason); // 理由
    pobjViewpointVerEN.SetSource(this.source); // 来源
    pobjViewpointVerEN.SetCitationId(this.paperId); //引用论文id;
    //判断用户类型，然后添加数据
    const strhidUserTypeId = GetInputValueInDivObj(divName, 'hidUserTypeId');
    if (strhidUserTypeId != '') {
      pobjViewpointVerEN.SetUserTypeId(strhidUserTypeId);
    }

    if (clsPubLocalStorage.idCurrEduCls != '') {
      pobjViewpointVerEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    } else {
      pobjViewpointVerEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    }

    pobjViewpointVerEN.SetVPProposePeople(userStore.getUserId); // 观点提出人
    pobjViewpointVerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjViewpointVerEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjViewpointVerEN.SetMemo(this.memo); // 备注
  }

  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjViewpointEN">数据传输的目的类对象</param>
  */
  public async PutDataToViewpointClass(pobjViewpointEN: clsViewpointEN) {
    const divName = this.getDivName();
    pobjViewpointEN.SetViewpointId(this.viewpointId); // 观点Id
    pobjViewpointEN.SetViewpointName(this.viewpointName); // 观点名称
    pobjViewpointEN.SetViewpointContent(this.viewpointContent); // 观点内容
    pobjViewpointEN.SetViewpointTypeId(this.viewpointTypeId); // 观点类型Id
    pobjViewpointEN.SetReason(this.reason); // 理由
    pobjViewpointEN.SetSource(this.source); // 来源
    pobjViewpointEN.SetIsSubmit(false); //是否提交；//因为是在主题维护个人添加，所以状态为false，方便后续修改更正；
    pobjViewpointEN.SetShareId(this.shareId);
    pobjViewpointEN.SetCitationId(this.paperId); //引用论文id;

    const strPdfPageNum = GetInputValueInDivObjN(divName, 'hidPdfPageNum');
    if (strPdfPageNum != 0) {
      pobjViewpointEN.SetPdfPageNum(strPdfPageNum);
    } else {
      pobjViewpointEN.SetPdfPageNum(1);
    }

    //判断用户类型，然后添加数据
    const strhidUserTypeId = GetInputValueInDivObj(divName, 'hidUserTypeId');
    if (strhidUserTypeId != '') {
      pobjViewpointEN.SetUserTypeId(strhidUserTypeId);
    }
    if (clsPubLocalStorage.idCurrEduCls != '') {
      pobjViewpointEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    } else {
      pobjViewpointEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    }
    //pobjViewpointEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls;
    pobjViewpointEN.SetVPProposePeople(userStore.getUserId); // 观点提出人
    pobjViewpointEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期

    if (this.btnSubmitViewpoint == '确认添加') {
      pobjViewpointEN.SetUpdUser(userStore.getUserId); // 修改人
    }
    //pobjViewpointEN.SetUpdUser(userStore.getUserId;// 修改人

    pobjViewpointEN.SetMemo(this.memo); // 备注
  }

  /* 函数功能:把类对象的属性内容显示到界面上
    注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
     如果在设置数据库时,就应该一级字段在前,二级字段在后
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
     <param name = "pobjViewpointEN">表实体类对象</param>
   */
  public async GetDataFromViewpointClass(pobjViewpointEN: clsViewpointEN) {
    this.viewpointId = pobjViewpointEN.viewpointId; // 观点Id
    this.viewpointName = pobjViewpointEN.viewpointName; // 观点名称
    this.viewpointContent = pobjViewpointEN.viewpointContent; // 观点内容
    this.viewpointTypeId = pobjViewpointEN.viewpointTypeId; // 观点类型Id
    this.reason = pobjViewpointEN.reason; // 理由
    this.source = pobjViewpointEN.source; // 来源
    this.isSubmit = pobjViewpointEN.isSubmit; //是否提交；
    this.vPProposePeople = pobjViewpointEN.vPProposePeople; // 观点提出人
    this.shareId = pobjViewpointEN.shareId;
    this.paperId = pobjViewpointEN.citationId; //引用Id;
    //this.updDate = pobjViewpointEN.updDate;// 修改日期
    //this.updUser = pobjViewpointEN.updUser;// 修改人
    this.memo = pobjViewpointEN.memo; // 备注
  }

  /* 修改记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
  */
  public async btnUpdateRecord_Click(strKeyId: string) {
    this.opType = 'Update';

    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }
    this.UpdateRecord(strKeyId);
  }
  /* 根据关键字获取相应的记录的对象
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
    <param name = "sender">参数列表</param>
  */
  public async UpdateRecord(strViewpointId: string): Promise<boolean> {
    const divName = this.getDivName();
    if (GetInputValueInDivObj(divName, 'hidIsRecommend') != '') {
      this.btnSubmitViewpoint = '确认推荐';
      this.btnCancelViewpoint = '取消推荐';
    } else {
      this.btnSubmitViewpoint = '确认修改';
      this.btnCancelViewpoint = '取消修改';
    }

    this.keyId = strViewpointId;

    try {
      const objViewpointEN = await Viewpoint_GetObjByViewpointIdAsync(strViewpointId);
      if (objViewpointEN == null) return false;
      // //通过判断数据用户是否是当前登录用户；
      //if (objViewpointEN.updUser == strUserId) {

      //判断数据是否提交，提交则不可修改；
      //if (objViewpointEN.isSubmit == false) {
      //ShowDialog('Update');
      this.GetDataFromViewpointClass(objViewpointEN);
      console.log('完成UpdateRecord!');
      //resolve(jsonData);
      //}
      //else {
      //    alert("当前数据已提交,不能修改！");
      //    return;
      //}

      //}
      //else {
      //    alert("当前数据不是您所添加，不能修改！");
      //    return;
      //}
      return true;
    } catch (e: any) {
      console.error(e);
      const strMsg = `提交数据可能有异常,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  public async btnIsSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    this.SubmitRecord(strKeyId);
  }
  //提交判断；
  public async SubmitRecord(strViewpointId: string) {
    this.keyId = strViewpointId;

    try {
      const objViewpointEN = await Viewpoint_GetObjByViewpointIdAsync(strViewpointId);
      if (objViewpointEN == null) return;
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色 //学生00620003
      if (strRoleId == '00620003') {
        // //通过判断数据用户是否是当前登录用户；
        if (objViewpointEN.updUser == strUserId) {
          //判断数据是否已审核
          if (objViewpointEN.isSubmit == false) {
            this.SubmitRecordSave();
          } else {
            alert('当前数据已提交！');
            return;
          }
        } else {
          alert('当前数据不是您所添加，不能提交！');
          return;
        }
      } else {
        //可以提交
        //判断数据是否已提交
        if (objViewpointEN.isSubmit == false) {
          this.SubmitRecordSave();
        } else {
          alert('当前数据已提交！');
          return;
        }
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async SubmitRecordSave(): Promise<boolean> {
    const strThisFuncName = this.SubmitRecordSave.name;
    //
    const objViewpointEN: clsViewpointEN = new clsViewpointEN();
    objViewpointEN.SetViewpointId(this.keyId);
    objViewpointEN.SetIsSubmit(true);
    this.PutDataToViewpointClass(objViewpointEN);
    objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await Viewpoint_UpdateRecordAsync(objViewpointEN);
      if (returnBool == true) {
        const strInfo = `提交成功!`;

        //显示信息框
        alert(strInfo);

        HideDialog();
        //this.BindGv_vViewpoint();
        this.iShowList.BindGv(clsViewpointEN._CurrTabName, returnBool.toString());
      } else {
        const strInfo = `提交不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('提交失败');
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

  /* 在数据表里修改记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecordInTab_Click)
 */
  public btnDetailInTab_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要的记录！');
      return;
    }
    this.DetailRecord(strKeyId);
  }

  /* 根据关键字获取相应的记录的对象
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
      <param name = "sender">参数列表</param>
    */
  public async DetailRecord(strViewpointId: string) {
    this.keyId = strViewpointId;

    try {
      const objvViewpointEN = await vViewpoint_GetObjByViewpointIdAsync(strViewpointId);
      if (objvViewpointEN == null) return;
      //数据显示
      $('#txtViewpointNameDetail').html(objvViewpointEN.viewpointName);
      $('#txtViewpointTypeNameDetail').html(objvViewpointEN.viewpointTypeName);
      $('#txtViewpointContentDetail').html(objvViewpointEN.viewpointContent);
      $('#txtReasonDetail').html(objvViewpointEN.reason);
      $('#txtSourceDetail').html(objvViewpointEN.source);
      $('#txtMemoDetail').html(objvViewpointEN.memo);
    } catch (e: any) {
      console.error(e);
      const strMsg = `当前无数据获取失败,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
 */
  public async btnOKUpd_Click() {
    const divName = this.getDivName();
    if (divName == null) return;
    const strCommandText: string = this.btnSubmitViewpoint;
    try {
      //判断session是否失效

      if (userStore.getUserId != '') {
        let userTypeId = GetInputValueInDivObj(divName, 'hidUserTypeId');
        const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId');

        let returnBool;
        let returnBool7;
        let returnBool6;
        switch (strCommandText) {
          case '添加':
            await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,

            returnBool = await this.AddNewRecordSave();

            //如果接受参数是不添加关系表的那么就不添加关系
            if (returnBool == true) {
              const strInfo = `添加记录成功!`;
              alert(strInfo);

              const IsAddRela = GetInputValueInDivObj(divName, 'hidIsAddRela');
              if (IsAddRela != 'false') {
                //添加观点关系
                await this.AddNewRecordSaveViewpointRela();
              }
            }
            //更新总表3个参数 主键、子表类型、页面操作类型；

            if (userTypeId == '01') {
              userTypeId = '04';
            } else {
              userTypeId = '05';
            }

            returnBool7 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strViewpointId,
              userTypeId,
              '1',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool7 == true) {
              console.log('客观数据总表同步成功；');
            } else {
              console.log('客观数据总表同步失败；');
            }

            //添加记录的同时添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                CloseWindow();
                //alert("添加历史版本出问题！");
              }
            });

            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            await this.UpdateRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                //HideDialog();
                //this.BindGv_vViewpoint();
              }
            });
            //更新总表3个参数 主键、子表类型、页面操作类型；

            if (userTypeId == '01') {
              userTypeId = '04';
            } else {
              userTypeId = '05';
            }

            returnBool6 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strViewpointId,
              userTypeId,
              '2',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool6 == true) {
              console.log('客观数据总表同步成功；');
            } else {
              console.log('客观数据总表同步失败；');
            }
            //修改记录的同时添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                CloseWindow();
                //HideDialog();
                //this.BindGv_vViewpoint();
                //alert("添加历史版本出问题！");
              }
            });
            break;
          case '确认推荐':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,

            returnBool = await this.AddNewRecordSave();

            //如果接受参数是不添加关系表的那么就不添加关系
            if (returnBool == true) {
              const strInfo = `推荐记录成功!`;
              alert(strInfo);

              const IsAddRela = GetInputValueInDivObj(divName, 'hidIsAddRela');
              if (IsAddRela != 'false') {
                //添加观点关系
                await this.AddNewRecordSaveViewpointRela();
              }
            }
            //更新总表3个参数 主键、子表类型、页面操作类型；

            if (userTypeId == '01') {
              userTypeId = '04';
            } else {
              userTypeId = '05';
            }

            returnBool7 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strViewpointId,
              userTypeId,
              '1',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool7 == true) {
              console.log('客观数据总表同步成功；');
            } else {
              console.log('客观数据总表同步失败；');
            }

            //添加记录的同时添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                CloseWindow();
                //alert("添加历史版本出问题！");
              }
            });

            break;
          default:
            AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

            break;
        }
      } else {
        alert('登录超时，请重新登录');
        reLogin();
      }
      HideDivInDivObj(divName, 'divLoading');
      //防止重复提交
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSave() {
    const divName = this.getDivName();
    try {
      await Viewpoint_GetMaxStrIdAsync().then((jsonData) => {
        const returnString: string = jsonData.toString();
        if (returnString == '') {
          const strInfo = `获取表ViewPoint的最大关键字为空，不成功，请检查!`;
          //显示信息框
          alert(strInfo);
        } else {
          $('#txtViewpointId').val(returnString);
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
    if (GetInputValueInDivObj(divName, 'txtViewpointId') != '') {
      const strViewpointId = GetInputValueInDivObj(divName, 'txtViewpointId');
      //存放主键；
      $('#hidViewpointId').val(strViewpointId);

      const objViewpointEN: clsViewpointEN = new clsViewpointEN();
      objViewpointEN.SetCreateDate(clsPubFun4Web.getNowDate_ymd());
      if (GetInputValueInDivObj(divName, 'hidIsRecommend') != '') {
        objViewpointEN.SetIsRecommend(true);
      }
      this.PutDataToViewpointClass(objViewpointEN);
      try {
        //const responseText = await Viewpoint_IsExistAsync(objViewpointEN.viewpointId);
        //strIdCurrEduclsbolIsExist: boolean = responseText;
        //if (bolIsExist == true) {
        //    strIdCurrEduclsstrMsg: string = `添加记录时，关键字：${objViewpointEN.viewpointId}已经存在！`;
        //    alert(strMsg);
        //    return responseText;//一定要有一个返回值，否则会出错！
        //}
        const responseText2 = await Viewpoint_AddNewRecordAsync(objViewpointEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          //添加附件图片
          if (GetInputValueInDivObj(divName, 'hdnFileOne') != '') {
            //第一个附件框判断
            const fileOne = GetInputValueInDivObj(divName, 'hdnFileOne');
            this.AddPaperSubAttachmentSave(fileOne, 'first');
          } else {
            if (GetInputValueInDivObj(divName, 'hdnFileTwo') != '') {
              const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
              this.AddPaperSubAttachmentSave(fileTwo, 'two');
            } else {
              if (GetInputValueInDivObj(divName, 'hdnFileThree') != '') {
                const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
                this.AddPaperSubAttachmentSave(fileThree, 'three');
              }
            }
          }
          ////执行之前需要判断是否有引用 ;有就添加论文、没有就添加附件；
          //if ($("#txtPaperId").val() == "") {
          //    //添加成功，则执行附件添加方法；
          //    //判断是否有返回的附件路径值
          //    if ($("#hdnFileOne").val() != "") { //第一个附件框判断
          //        strIdCurrEduclsfileOne = $("#hdnFileOne").val();
          //        this.AddPaperSubAttachmentSave(fileOne, "first");
          //    }
          //    else {
          //        if ($("#hdnFileTwo").val() != "") {
          //            strIdCurrEduclsfileTwo = $("#hdnFileTwo").val();
          //            this.AddPaperSubAttachmentSave(fileTwo, "two");
          //        }
          //        else {
          //            if ($("#hdnFileThree").val() != "") {
          //                strIdCurrEduclsfileThree = $("#hdnFileThree").val();
          //                this.AddPaperSubAttachmentSave(fileThree, "three");
          //            }
          //        }

          //    }
          //}
          //else {
          //    //1.这里执行添加观点引用论文；
          //    const objclsViewpointCitationEN: clsViewpointCitationEN = new clsViewpointCitationEN();
          //    this.PutDataToclsViewpointCitationClass(objclsViewpointCitationEN);
          //    //引用论文；
          //    const responseText3 = await ViewpointCitation_AddNewRecordAsync(objclsViewpointCitationEN);
          //    const returnBool: boolean = !!responseText3;

          //    if (returnBool == true) {

          //        //添加成功，则执行附件添加方法；
          //        //判断是否有返回的附件路径值
          //        if ($("#hdnFileOne").val() != "") { //第一个附件框判断
          //            strIdCurrEduclsfileOne = $("#hdnFileOne").val();
          //            this.AddPaperSubAttachmentSave(fileOne, "first");
          //        }
          //        else {
          //            if ($("#hdnFileTwo").val() != "") {
          //                strIdCurrEduclsfileTwo = $("#hdnFileTwo").val();
          //                this.AddPaperSubAttachmentSave(fileTwo, "two");
          //            }
          //            else {
          //                if ($("#hdnFileThree").val() != "") {
          //                    strIdCurrEduclsfileThree = $("#hdnFileThree").val();
          //                    this.AddPaperSubAttachmentSave(fileThree, "three");
          //                }
          //            }

          //        }

          //    }
          //    else {

          //    }

          //}

          //strIdCurrEduclsstrInfo: string = `添加记录成功!`;
          //
          ////显示信息框
          //alert(strInfo);
        } else {
          const strInfo = `编辑记录不成功!`;

          //显示信息框
          CloseWindow();
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
    } else {
      const strInfo = `获取最大关键字为空，不成功!`;
      //显示信息框
      alert(strInfo);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  //添加历史版本
  public async AddVersionRecordSave() {
    const strThisFuncName = this.AddVersionRecordSave.name;

    const objViewpointVerEN: clsViewpointVerEN = new clsViewpointVerEN();
    objViewpointVerEN.SetViewpointId(this.viewpointId);
    this.PutDataToViewpointVerClass(objViewpointVerEN);

    try {
      const responseText2 = await ViewpointVer_AddNewRecordAsync(objViewpointVerEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1 =1 and viewpointId=${this.viewpointId}`;
        const intVersionCount = await ViewpointVer_GetRecCountByCondAsync(strWhereCond2);

        const objViewpointEN: clsViewpointEN = new clsViewpointEN();
        objViewpointEN.SetViewpointId(this.viewpointId);
        objViewpointEN.SetVersionCount(intVersionCount);

        objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        Viewpoint_UpdateRecordAsync(objViewpointEN).then((jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == true) {
            return true;
          } else {
            const strInfo = `添加历史版本数不成功!`;
            alert(strInfo);
            console.log('添加历史版本数不成功');
            CloseWindow();
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

  /* 函数功能:把界面上的属性数据传到类对象中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
<param name = "pobjRTViewpointRelaEN">数据传输的目的类对象</param>
*/
  public PutDataToclsViewpointCitationClass(pobjViewpointCitationEN: clsViewpointCitationEN) {
    const divName = this.getDivName();
    const strPaperId = GetInputValueInDivObj(divName, 'txtPaperId');
    const strViewpointId = GetInputValueInDivObj(divName, 'txtViewpointId');
    const strUserId = userStore.getUserId;
    pobjViewpointCitationEN.SetPaperId(strPaperId); // 论文编号
    pobjViewpointCitationEN.SetViewpointId(strViewpointId); // 观点Id
    pobjViewpointCitationEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjViewpointCitationEN.SetUpdUserId(strUserId); // 修改用户Id// 修改用户Id
    //pobjRTViewpointRelaEN.SetMemo(this.memo;// 备注
  }

  //////////////////////////////////////////////////////////////////////附件添加
  //添加上传论文附件方法
  public async AddPaperSubAttachmentSave(filePath: string, strfileNum: string) {
    const divName = this.getDivName();
    const objViewpointAttachmentEN: clsViewpointAttachmentEN = new clsViewpointAttachmentEN();
    this.PutDataToPaperAttachmentClass(objViewpointAttachmentEN, filePath);
    try {
      const responseText2 = await ViewpointAttachment_AddNewRecordAsync(objViewpointAttachmentEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        //第一个附件
        if (strfileNum == 'first') {
          //如果第二个附件不等于空，那么执行添加函数；
          if (GetInputValueInDivObj(divName, 'hdnFileTwo') != '' && $('#hdnFileTwo') != undefined) {
            const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
            this.AddPaperSubAttachmentSave(fileTwo, 'two');
          } else {
            //为空则判断第三个附件值；
            if (
              GetInputValueInDivObj(divName, 'hdnFileThree') != '' &&
              $('#hdnFileThree') != undefined
            ) {
              const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
              this.AddPaperSubAttachmentSave(fileThree, 'three');
            }
          }
        } else if (strfileNum == 'two') {
          //为空则判断第三个附件值；
          if (
            GetInputValueInDivObj(divName, 'hdnFileThree') != '' &&
            $('#hdnFileThree') != undefined
          ) {
            const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
            this.AddPaperSubAttachmentSave(fileThree, 'three');
          }
        }
      } else {
        const strInfo = `论文附件添加不成功!`;

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

  //观点附件数据存放
  public PutDataToPaperAttachmentClass(
    pobjViewpointAttachmentEN: clsViewpointAttachmentEN,
    filePath: string,
  ) {
    const divName = this.getDivName();
    pobjViewpointAttachmentEN.SetViewpointId(GetInputValueInDivObj(divName, 'txtViewpointId')); // 观点Id

    let strfilePath = filePath;
    //判断地址不为空则执行截取操作
    if (strfilePath != '') {
      const index = strfilePath.lastIndexOf('/');
      strfilePath = strfilePath.substring(index + 1, strfilePath.length);
      pobjViewpointAttachmentEN.SetFilePath(filePath);

      pobjViewpointAttachmentEN.SetViewpointAttachmentName(strfilePath);
    }
    pobjViewpointAttachmentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期

    if (clsPubLocalStorage.idCurrEduCls != '') {
      pobjViewpointAttachmentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    } else {
      pobjViewpointAttachmentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    }
    //pobjViewpointAttachmentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls;//教学班
    pobjViewpointAttachmentEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
  }

  ////////////////////////////////////////////////修改时的方法
  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateRecordSave(): Promise<boolean> {
    const divName = this.getDivName();
    const strThisFuncName = this.UpdateRecordSave.name;

    const objViewpointEN: clsViewpointEN = new clsViewpointEN();
    objViewpointEN.SetViewpointId(this.keyId);
    this.PutDataToViewpointClass(objViewpointEN);
    objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await Viewpoint_UpdateRecordAsync(objViewpointEN);
      if (returnBool == true) {
        //判断引用的论文ID是否为空
        const strPaperId = GetInputValueInDivObj(divName, 'txtPaperId');
        if (strPaperId != '') {
          //，如果不为空，根据Id删除引用文件
          const strwhere = `viewpointId ='${objViewpointEN.viewpointId}'`;
          this.DelRecordViewpointCitationByWhere(strwhere);
        } else {
          //如果等于空，那么就去判断附件是否为空；
          //得到相关论文附件地址，判断是否为空 只要有一个不为空都执行附件清除功能；
          if (
            (GetInputValueInDivObj(divName, 'hdnFileOne') != '' && $('#hdnFileOne') != undefined) ||
            (GetInputValueInDivObj(divName, 'hdnFileTwo') != '' && $('#hdnFileTwo') != undefined) ||
            (GetInputValueInDivObj(divName, 'hdnFileThree') != '' &&
              $('#hdnFileThree') != undefined)
          ) {
            //根据Id删除附件
            const strwhere = `viewpointId ='${objViewpointEN.viewpointId}'`;
            this.DelRecordByWhere(strwhere);
          }
        }
        const strInfo = `修改记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `修改记录不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('完成UpdateRecordSave');
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
  //删除附件
  public async DelRecordViewpointCitationByWhere(strWhere: string) {
    try {
      const returnInt: number = await ViewpointCitation_DelViewpointCitationsByCondAsync(strWhere);
      if (returnInt > 0) {
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
      } else {
        // const strInfo = `删除记录不成功!`;
        //显示信息框
        //alert(strInfo);
      }
      //清除后、添加新的论文数据；
      this.AddNewRecordViewpointCitationSave();

      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  //添加引用论文
  public async AddNewRecordViewpointCitationSave() {
    const divName = this.getDivName();
    //1.这里执行添加观点引用论文；
    const objclsViewpointCitationEN: clsViewpointCitationEN = new clsViewpointCitationEN();
    this.PutDataToclsViewpointCitationClass(objclsViewpointCitationEN);
    //引用论文；
    const responseText3 = await ViewpointCitation_AddNewRecordAsync(objclsViewpointCitationEN);
    const returnBool = !!responseText3;

    if (returnBool == true) {
      //在修改时候，不管是否有附件数据被清除； 都需要执行附件添加功能
      //判断是否有返回的附件路径值
      const fileOne = GetInputValueInDivObj(divName, 'hdnFileOne');
      if (fileOne != '' && fileOne != undefined) {
        //第一个附件框判断

        this.AddPaperSubAttachmentSave(fileOne, 'first');
      } else {
        const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
        if (fileTwo != '' && fileTwo != undefined) {
          this.AddPaperSubAttachmentSave(fileTwo, 'two');
        } else {
          const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
          if (fileThree != '' && fileThree != undefined) {
            this.AddPaperSubAttachmentSave(fileThree, 'three');
          }
        }
      }
    }
  }

  //删除观点附件
  /* 
根据关键字删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecordByWhere(strWhere: string) {
    const divName = this.getDivName();

    try {
      const returnInt: number = await ViewpointAttachment_DelViewpointAttachmentsByCondAsync(
        strWhere,
      );
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

        this.AddPaperSubAttachmentSave(fileOne, 'first');
      } else {
        const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
        if (fileTwo != '' && fileTwo != undefined) {
          this.AddPaperSubAttachmentSave(fileTwo, 'two');
        } else {
          const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
          if (fileThree != '' && fileThree != undefined) {
            this.AddPaperSubAttachmentSave(fileThree, 'three');
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

  /* 把所有的查询控件内容组合成一个条件串
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
  <returns>条件串(strWhereCond)</returns>
*/
  public async CombineResearchTopicCondition(): Promise<string> {
    const divName = this.getDivName();
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId'); //观点
    // const strTopicId = clsPrivateSessionStorage.topicIdInTree; //主题
    const strUserId = userStore.getUserId;

    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.topicName_q != "") {
      //    strWhereCond += ` And ${clsResearchTopicEN.con_TopicName} like '%${this.topicName_q}%'`;
      //}
      //if (this.TopicProposePeople_q != "") {
      //    strWhereCond += ` And ${clsResearchTopicEN.con_TopicProposePeople} like '%${this.TopicProposePeople_q}%'`;
      //}
      //排除获取已存在的关系数据 根据当前用户；
      strWhereCond += ` And topicId not in (select topicId from RTViewpointRela where viewpointId = '${strViewpointId}' And updUser = '${strUserId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineResearchTopicCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  //添加主题关系 展示主题列表数据
  public async btnAddRela_Click() {
    const objPage_ResearchTopic = new Pub_ResearchTopicList();
    await objPage_ResearchTopic.BindGv_ResearchTopic();
  }
  //确定选择的主题 并添加到关系表中
  public btnOkInTab_Click(strkeyId: string) {
    //存放Id
    clsPrivateSessionStorage.topicIdInTree = strkeyId;
    //执行添加关系方法
    this.AddNewRecordSaveViewpointRela();
  }

  ///////////////////////////////////---------------------------------------------------------------------------添加主题观点关系

  /* 添加新记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 */
  public async AddNewRecordSaveViewpointRela() {
    const divName = this.getDivName();
    const strThisFuncName = this.AddNewRecordSaveViewpointRela.name;
    const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId'); //观点

    const objRTViewpointRelaEN: clsRTViewpointRelaEN = new clsRTViewpointRelaEN();
    await this.PutDataToRTViewpointRelaClass(objRTViewpointRelaEN);

    try {
      ////同一主题 同一观点 只能添加一次；
      //const strWhere = " 1 = 1 And topicId = '" + strTopicId + "' And viewpointId = '" + strViewpointId + "' And updUser = '" + strUserId + "'";
      ////const strWhere = " 1 = 1 And topicId = '" + strTopicId + "' And viewpointId = '" + strViewpointId + "'";
      //const responseText = await RTViewpointRela_IsExistRecordAsync(strWhere);
      //strIdCurrEduclsbolIsExist: boolean = responseText;
      //if (bolIsExist == true) {
      //    strIdCurrEduclsstrMsg: string = `同一观点不能重复添加同一个主题！`;
      //    alert(strMsg);
      //    return responseText;//一定要有一个返回值，否则会出错！
      //}

      const responseText2 = await RTViewpointRela_AddNewRecordAsync(objRTViewpointRelaEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        //根据ID获取最大数；
        const strWhereCond2 = ` 1 =1 and viewpointId=${strViewpointId}`;
        const intCitationCount = await RTViewpointRela_GetRecCountByCondAsync(strWhereCond2);

        const objViewpointEN: clsViewpointEN = new clsViewpointEN();
        objViewpointEN.SetViewpointId(strViewpointId);
        objViewpointEN.SetCitationCount(intCitationCount);

        objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        await Viewpoint_UpdateRecordAsync(objViewpointEN).then((jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == false) {
            const strInfo = `操作不成功!`;
            alert(strInfo);
            console.log('操作不成功');
          }
        });

        //strIdCurrEduclsstrInfo: string = `添加成功!`;
        //
        //HideDialogTwo();
        ////显示信息框
        //alert(strInfo);
        //window.location.href = "../GraduateEdu/ViewpointAdd?TopicRelaId=" + strViewpointId;

        ////执行之前需要判断是否有引用 ;有就添加论文、没有就添加附件；
        //if ($("#txtPaperId").val() == "") {
        //添加成功，则执行附件添加方法；
        //判断是否有返回的附件路径值
        //if ($("#hdnFileOne").val() != "") { //第一个附件框判断
        //    strIdCurrEduclsfileOne = $("#hdnFileOne").val();
        //    this.AddPaperSubAttachmentSave(fileOne, "first");
        //}
        //else {
        //    if ($("#hdnFileTwo").val() != "") {
        //        strIdCurrEduclsfileTwo = $("#hdnFileTwo").val();
        //        this.AddPaperSubAttachmentSave(fileTwo, "two");
        //    }
        //    else {
        //        if ($("#hdnFileThree").val() != "") {
        //            strIdCurrEduclsfileThree = $("#hdnFileThree").val();
        //            this.AddPaperSubAttachmentSave(fileThree, "three");
        //        }
        //    }

        //}
        //}
        //else {
        //    //1.这里执行添加观点引用论文；
        //    const objclsViewpointCitationEN: clsViewpointCitationEN = new clsViewpointCitationEN();
        //    this.PutDataToclsViewpointCitationClass(objclsViewpointCitationEN);
        //    //引用论文；
        //    const responseText3 = await ViewpointCitation_AddNewRecordAsync(objclsViewpointCitationEN);
        //    const returnBool: boolean = !!responseText3;

        //    if (returnBool == true) {

        //        //添加成功，则执行附件添加方法；
        //        //判断是否有返回的附件路径值
        //        if ($("#hdnFileOne").val() != "") { //第一个附件框判断
        //            strIdCurrEduclsfileOne = $("#hdnFileOne").val();
        //            this.AddPaperSubAttachmentSave(fileOne, "first");
        //        }
        //        else {
        //            if ($("#hdnFileTwo").val() != "") {
        //                strIdCurrEduclsfileTwo = $("#hdnFileTwo").val();
        //                this.AddPaperSubAttachmentSave(fileTwo, "two");
        //            }
        //            else {
        //                if ($("#hdnFileThree").val() != "") {
        //                    strIdCurrEduclsfileThree = $("#hdnFileThree").val();
        //                    this.AddPaperSubAttachmentSave(fileThree, "three");
        //                }
        //            }

        //        }

        //    }
        //    else {

        //    }

        //}
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
  /* 函数功能:把界面上的属性数据传到类对象中
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
  <param name = "pobjRTViewpointRelaEN">数据传输的目的类对象</param>
*/
  public async PutDataToRTViewpointRelaClass(pobjRTViewpointRelaEN: clsRTViewpointRelaEN) {
    const divName = this.getDivName();
    const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId');
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strUserId = userStore.getUserId;
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);

    pobjRTViewpointRelaEN.SetIdCurrEduCls(strIdCurrEduCls);
    pobjRTViewpointRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTViewpointRelaEN.SetViewpointId(strViewpointId); // 观点Id
    pobjRTViewpointRelaEN.SetProposePeople(strUserId); // 提出人
    pobjRTViewpointRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTViewpointRelaEN.SetUpdUser(strUserId); // 修改用户Id// 修改用户Id
    pobjRTViewpointRelaEN.SetClassificationId('0000000000'); // 分类为000000
    //pobjRTViewpointRelaEN.SetMemo(this.memo;// 备注
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortResearchTopicBy(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidSortResearchTopicBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortResearchTopicBy(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'hidSortResearchTopicBy');
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvPaperBy(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidSortvPaperBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvPaperBy(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'hidSortvPaperBy');
  }
  /*
   * 论文标题
   */
  public get paperTitle_q(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtPaperTitle_q');
  }
  ///////////////////////论文列表条件
  public get readUser_q(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }

  /*
   * 文献类型Id
   */
  public get literatureTypeId_q(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlLiteratureTypeId_q');
  }
  /*
   * 论文Id
   */
  public set paperId(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtPaperId', value);
  }
  /*
   * 论文
   */
  public get paperId(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtPaperId');
  }
  /*
   * 设置排序字段-相当使用ViewState功能  主题论文关系
   */
  public set hidSortvRTPaperRelaBy(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidSortvRTPaperRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvRTPaperRelaBy(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'hidSortvRTPaperRelaBy');
  }
  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */
  public async CombinevPaperCondition(): Promise<string> {
    // const divName = this.getDivName();
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }

      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      }
      //用户
      if (this.readUser_q != '' && this.readUser_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.readUser_q}'`;
      }
      //只查询提交的论文数据
      strWhereCond += ` And ${clsPaperEN.con_IsSubmit} = 'true'`;

      //排除获取已被当前观点引用过的论文数据；
      //strWhereCond += ` And paperId not in (select paperId from RTPaperRela where viewpointId = '${strTopicId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //选择论文

  //添加用户关系
  public async selectPaper_Click() {
    const objPage_Paper = new Pub_PaperList();
    await objPage_Paper.BindGv_vPaper();
  }
  //查询论列表
  public async btnPaperQuery_Click() {
    const objPage_Paper = new Pub_PaperList();
    await objPage_Paper.BindGv_vPaper();
  }
  ////查询用户数据
  //public async btnUserQuery_Click() {
  //    const responseObjList = await this.BindGv_vPaper();
  //}
  //确定选择的论文 并添加到关系表中
  public btnPaperRecordInTab_Click(strkeyId: string) {
    const divName = this.getDivName();
    if (divName == null) return;

    //存放Id
    SetHidPaperId(divName, strkeyId);
    $('#txtPaperId').val(strkeyId);
    //设置只读属性；
    $('#txtPaperId').attr('disabled', 'disabled');
    //关闭列表
    HideDialogThree();
  }
  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {
    this.viewpointId = '';
    this.viewpointName = '';
    this.viewpointContent = '';
    $('#ddlViewpointTypeId option[0]').attr('selected', 'true');
    this.reason = '';
    this.source = '';
    // this.vPProposePeople = '';
    this.updDate = '';
    // this.updUser = '';
    this.memo = '';
    this.paperId = '';

    $('#hdnFileOne').val('');
    $('#hdnFileTwo').val('');
    $('#hdnFileThree').val('');
  }

  /*
   * 分享
   */
  public set shareId(value: string) {
    const divName = this.getDivName();
    SetSelectValueByIdInDivObj(divName, 'ddlShareId', value);
  }
  /*
   * 分享
   */
  public get shareId(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlShareId');
  }
}
