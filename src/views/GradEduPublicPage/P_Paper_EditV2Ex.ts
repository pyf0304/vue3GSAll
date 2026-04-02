import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { Pub_PaperList } from './Pub_PaperList';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { PaperEx_ReFreshThisCacheByIdCurrEduCls } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { Paper_Edit } from '@/viewsBase/GradEduPaper/Paper_Edit';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { clsgs_PaperAttentionEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperAttentionEN';
import { clsgs_PaperGroupEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperGroupEN';
import { clsgs_PaperVerEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperVerEN';
import { clsMajorDirectionPaperRelaEN } from '@/ts/L0Entity/GradEduPaper/clsMajorDirectionPaperRelaEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTPaperRelaEN';
import { clsgs_PaperStatusEN } from '@/ts/L0Entity/RT_Params/clsgs_PaperStatusEN';
import { clsgs_PaperTypeEN } from '@/ts/L0Entity/RT_Params/clsgs_PaperTypeEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { XzMajor_GetObjLstAsync } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import {
  gs_PaperAttention_AddNewRecordAsync,
  gs_PaperAttention_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperAttentionWApi';
import {
  gs_PaperGroup_AddNewRecordWithReturnKeyAsync,
  gs_PaperGroup_GetFirstObjAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperGroupWApi';
import {
  gs_PaperVer_AddNewRecordAsync,
  gs_PaperVer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperVerWApi';
import {
  MajorDirectionPaperRela_AddNewRecordAsync,
  MajorDirectionPaperRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsMajorDirectionPaperRelaWApi';
import {
  PaperAttachment_DelPaperAttachmentsByCondAsync,
  PaperAttachment_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import {
  Paper_AddNewRecordAsync,
  Paper_AddNewRecordWithReturnKeyAsync,
  Paper_GetMaxStrIdAsync,
  Paper_GetObjByPaperIdAsync,
  Paper_GetRecCountByCondAsync,
  Paper_IsExistAsync,
  Paper_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { ResearchTopic_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { RTPaperRela_AddNewRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTPaperRelaWApi';
import {
  gs_PaperStatus_BindDdl_PaperStatusIdInDivCache,
  gs_PaperStatus_GetObjLstAsync,
} from '@/ts/L3ForWApi/RT_Params/clsgs_PaperStatusWApi';
import { gs_PaperType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsgs_PaperTypeWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import {
  LiteratureType_BindDdl_LiteratureTypeIdInDivCache,
  LiteratureType_GetObjLstAsync,
  LiteratureType_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputDisable,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetHidPaperId, SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { UploadResponseData } from '@/ts/FunClass/UploadResponseData';
import { PaperAttachmentEx_AddPaperAttachment } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperAttachmentExWApi';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';
import { UserTypeMap } from '@/store/modules/types/userType';

// declare function ShowDialog(strOpType: string): void;
// declare function HideDialog(): void;
// declare function HideDialogOne(): void;
// declare function CloseWindow(): void;
declare function setTextboxio(): void;
// declare function layui_Alert(iconKey, strMsg): void;
declare let window: any;
/* AddPaperEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class P_Paper_EditV2Ex extends Paper_Edit {
  public static uploadResponseData: UploadResponseData = new UploadResponseData();
  public static topicId = '';

  //专业方向
  public mstrListDivMajorDirection = 'divMajorDirectionDataLst';

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: P_Paper_EditV2Ex = <P_Paper_EditV2Ex>(
      Paper_Edit.GetPageEditObj('P_Paper_EditV2Ex')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'P_Paper_EditV2Ex'初始化过，请检查！`;
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
        AccessBtnClickDefault(strCommandName, 'gs_PaperReport_EditEx.btn_Click');

        break;
    }
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
  */
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    const bolIsSuccess = await this.ShowDialog_Paper(this.opType);
    if (bolIsSuccess == false) return;
    // 在此处放置用户代码以初始化页面
    try {
      const divName = this.getDivName();
      if (divName == null) return;
      if (userStore.getUserId != '') {
        //通过主题Id获取教学班ID
        if (clsPubLocalStorage.idCurrEduCls == '') {
          const objResearchTopic = await ResearchTopic_GetFirstObjAsync(
            ` topicId=${clsPrivateSessionStorage.topicIdInTree}`,
          );
          if (objResearchTopic == null) {
            const strMsg = Format(
              '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
          }
          clsPubLocalStorage.idCurrEduCls = objResearchTopic.idCurrEduCls;
        }

        //加载页面所需数据源到缓存
        await LiteratureType_GetObjLstAsync('1=1');

        //绑定论文类型下拉框
        await this.BindDdl_gs_PaperType_Cache('ddlPaperTypeId');

        //论文状态

        await gs_PaperStatus_BindDdl_PaperStatusIdInDivCache(divName, 'ddlPaperStatusId');
        //绑定编辑文献类型

        await LiteratureType_BindDdl_LiteratureTypeIdInDivCache(divName, 'ddlLiteratureTypeId');
        await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');

        PaperCRUD.sortPaperBy = 'updDate Desc';

        const strUserId = userStore.getUserId;
        $('#hidUserId').val(strUserId);

        this.AddNewRecord();
        //获取分享Id
        const responseText = await gs_UserConfigEx_GetNewReturnShareIdEx('01', userStore.getUserId);
        const strShareId: string = responseText;

        if (strShareId != '') {
          this.shareId = strShareId;
        }
        // HideDivInDivObj(objLayOut, 'divLoading');
        HideDivInDivObj(divName, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //论文类型
  public async BindDdl_gs_PaperType_Cache(ddlgs_PaperTypeId: string) {
    const strWhereCond = ' 1 =1 ';
    const objDdl = document.getElementById(ddlgs_PaperTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlgs_PaperTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrObjLst_Sel: Array<clsgs_PaperTypeEN> = await gs_PaperType_GetObjLstAsync(
        strWhereCond,
      );

      BindDdl_ObjLst(
        ddlgs_PaperTypeId,
        arrObjLst_Sel,
        clsgs_PaperTypeEN.con_PaperTypeId,
        clsgs_PaperTypeEN.con_PaperTypeName,
        '论文类型',
      );
      console.log('完成BindDdl_gs_PaperType_Cache!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //论文状态
  public async BindDdl_gs_PaperStatus_Cache(ddlgs_PaperStatusId: string) {
    const strWhereCond = ' 1 =1 ';
    const objDdl = document.getElementById(ddlgs_PaperStatusId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlgs_PaperStatusId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrObjLst_Sel: Array<clsgs_PaperStatusEN> = await gs_PaperStatus_GetObjLstAsync(
        strWhereCond,
      );

      BindDdl_ObjLst(
        ddlgs_PaperStatusId,
        arrObjLst_Sel,
        clsgs_PaperStatusEN.con_PaperStatusId,
        clsgs_PaperStatusEN.con_PaperStatusName,
        '论文状态',
      );
      console.log('完成BindDdl_gs_PaperStatus_Cache!');
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
    this.btnSubmitPaper = '确认添加';
    this.btnCancelPaper = '取消添加';
    this.Clear();
    //去掉提交按钮不可用状态
    $('#btnOKUpd').attr('disabled', 'false');

    // this.Disabled_false();
    //因为是添加 只显示基本信息；
    $('#liextendEdit').attr('style', 'display:block;');
  }

  //论文类型下拉框事件

  public ddlPaperTypeChange() {
    //判断下拉框是否有值，且值是否等于
    if (this.paperTypeId != '' && this.paperTypeId != '0') {
      if (this.paperTypeId == '01') {
        //引用论文
        $('#ddlPaperStatusId').attr('disabled', 'true');
      } else {
        //原创论文
        $('#ddlPaperStatusId').attr('disabled', 'false');
      }
    }
  }

  public async BindDdl_LiteratureTypeId_Cache(
    ddlLiteratureTypeId: string,
    objLiteratureType_Cond: clsLiteratureTypeEN,
  ) {
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      let arrObjLst_Sel: Array<clsLiteratureTypeEN> = await LiteratureType_GetSubObjLstCache(
        objLiteratureType_Cond,
      );
      arrObjLst_Sel = arrObjLst_Sel.sort((x) =>
        x.GetFldValue(clsLiteratureTypeEN.con_LiteratureTypeId),
      );
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrObjLst_Sel,
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

  /* 查询
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async btnQuery_Click() {
    try {
      const objPage_Paper = new Pub_PaperList(this.divEdit);
      await objPage_Paper.BindGv_vPaper();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 所有论文
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async liAllPaper_Click() {
    try {
      const objPage_Paper = new Pub_PaperList(this.divEdit);
      await objPage_Paper.BindGv_vPaper();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 为下拉框获取数据,从表:[XzMajor]中获取
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
   * return 获取主键字段、名称字段两列的所有记录记录的dataTable
   * */
  public async BindDdl_idXzMajor(ddlIdXzMajor: string, strWhereCond = '1 =1') {
    const objDdl = document.getElementById(ddlIdXzMajor);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlIdXzMajor} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrXzMajorObjLst = await XzMajor_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlIdXzMajor,
        arrXzMajorObjLst,
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        '',
      );
      console.log('完成BindDdl_idXzMajor!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
*/
  public async AddNewRecordWithMaxIdSaveRetrunId(): Promise<string> {
    const divName = this.getDivName();
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetCreateDate(clsPubFun4Web.getNowDate_ymd());
    this.PutDataToPaperClass(objPaperEN);
    try {
      const strCondition = Format(
        " 1 = 1 and paperTitle = '{0}' and paperId in (select paperId from PaperEduClsRela where idCurrEduCls = '{1}')",
        this.paperTitle,
        clsPubLocalStorage.idCurrEduCls,
      );

      const intPaperCount = await Paper_GetRecCountByCondAsync(strCondition);
      if (intPaperCount != 0) {
        const strMsg = `添加记录时，当前教学班论文标题：${objPaperEN.paperTitle}已经存在，请重新命名！`;
        alert(strMsg);
        return ''; //一定要有一个返回值，否则会出错！
      }
      const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
        clsPrivateSessionStorage.topicIdInTree,
      );
      const strPaperId = await Paper_AddNewRecordWithReturnKeyAsync(objPaperEN);

      if (strPaperId != '') {
        SetHidPaperId(divName, strPaperId);
        //判断是否有返回的附件路径值
        if (P_Paper_EditV2Ex.uploadResponseData.fileNameOne != '') {
          //第一个附件框判断
          const strPaperId = GetHidPaperId(divName);
          const returnBool_AddPaperAttach = await PaperAttachmentEx_AddPaperAttachment(
            strPaperId,
            strIdCurrEduCls,
            P_Paper_EditV2Ex.uploadResponseData,
          );
        }

        return strPaperId;
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return strPaperId; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return '';
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
  public async btnSubmit_Click() {
    const divName = this.getDivName();
    if (divName == null) return;
    const strCommandText: string = this.btnSubmitPaper;
    try {
      //判断session是否失效
      if (userStore.getUserId != '') {
        // const strPaperId = GetHidPaperId(divName);
        // if (strPaperId == '') {
        //   const strMsg = `当前PaperId为空，请检查！`;
        //   alert(strMsg);
        //   console.error(strMsg);
        //   return;
        // }
        let returnBool4;
        let returnBool = true;
        let returnBool8;
        let strPaperId = '';
        let returnBool9;
        switch (strCommandText) {
          case '添加':
            await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,

            strPaperId = await this.AddNewRecordWithMaxIdSaveRetrunId();
            //更新总表3个参数 主键、子表类型、页面操作类型；
            if (strPaperId == '') {
              const strInfo = `添加论文失败!`;
              alert(strInfo);
              return;
            }
            returnBool8 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strPaperId,
              '01',
              '1',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool8 == true) {
              console.log('客观数据总表同步成功；');
            } else {
              console.log('客观数据总表同步失败；');
            }

            //添加完自动关注该论文

            returnBool4 = await this.btnAttention_Click(strPaperId);

            if (returnBool4 == true) {
              console.log('论文关注成功；');
            } else {
              console.log('论文关注失败；');
            }

            if (returnBool == true) {
              //添加记录的同时添加历史版本 判断只有原创论文才记录历史版本
              if (this.paperTypeId == '02') {
                const returnBool = await this.AddVersionRecordSave();
                if (returnBool == true) {
                  //alert("添加历史版本出问题！");
                }
              }

              //统计附件数量并添加到论文表
              await this.AddAttachmentCount(strPaperId);
              //添加主题论文关系
              await this.AddNewRecordSavePaperRela(strPaperId);

              const strInfo = `添加记录成功!`;
              alert(strInfo);
              this.iShowList.BindGvCache(clsPaperEN._CurrTabName, '');
              this.HideDialog_Paper();
            }
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,

            returnBool = await this.UpdateRecordSave();
            if (returnBool == true) {
              //添加记录的同时添加历史版本 判断只有原创论文才记录历史版本
              if (this.paperTypeId == '02') {
                await this.AddVersionRecordSave().then((jsonData) => {
                  const returnBool: boolean = jsonData;
                  if (returnBool == true) {
                    //alert("添加历史版本出问题！");
                  }
                });
              }
              //更新总表3个参数 主键、子表类型、页面操作类型；

              returnBool9 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
                strPaperId,
                '01',
                '2',
                clsPubLocalStorage.idCurrEduCls,
              );

              if (returnBool9 == true) {
                console.log('客观数据总表同步成功；');
              } else {
                console.log('客观数据总表同步失败；');
              }

              //统计附件数量并添加到论文表
              await this.AddAttachmentCount(strPaperId);
              //添加主题论文关系
              await this.AddNewRecordSavePaperRela(strPaperId);
              const strInfo = `修改记录成功!`;
              alert(strInfo);
              this.HideDialog_Paper();
            }

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
      //去掉提交按钮不可用状态
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  //添加关注
  public async btnAttention_Click(strPaperId: string) {
    const strThisFuncName = this.btnAttention_Click.name;
    try {
      const strUserId = userStore.getUserId;
      const strWhereCond = ` 1 =1 and updUser='${strUserId}' and paperId='${strPaperId}'`;

      const responseText = await gs_PaperAttention_IsExistRecordAsync(strWhereCond);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `您已经关注过这条论文了，请关注其他论文！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const strWhereCond1 = ` updUser='${strUserId}' and paperGroupName='${clsPubLocalStorage.eduClsName}'`;

      let objgs_PaperGroupEN = await gs_PaperGroup_GetFirstObjAsync(strWhereCond1);
      if (objgs_PaperGroupEN == null) {
        objgs_PaperGroupEN = new clsgs_PaperGroupEN();
        objgs_PaperGroupEN.SetPaperGroupName(clsPubLocalStorage.eduClsName);
        objgs_PaperGroupEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
        objgs_PaperGroupEN.SetUpdUser(strUserId); // 修改用户Id
        const strPaperGroupId = await gs_PaperGroup_AddNewRecordWithReturnKeyAsync(
          objgs_PaperGroupEN,
        );
      }
      const objgs_PaperAttentionEN: clsgs_PaperAttentionEN = new clsgs_PaperAttentionEN();
      objgs_PaperAttentionEN.SetPaperId(strPaperId);
      objgs_PaperAttentionEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
      objgs_PaperAttentionEN.SetUpdUser(strUserId); // 修改用户Id
      objgs_PaperAttentionEN.SetUserId(strUserId); // 修改用户Id
      if (objgs_PaperGroupEN != null) {
        objgs_PaperAttentionEN.SetPaperGroupId(objgs_PaperGroupEN.paperGroupId);
      }

      const responseText3 = await gs_PaperAttention_AddNewRecordAsync(objgs_PaperAttentionEN);
      const returnBool = !!responseText3;
      if (returnBool == true) {
        // const objPage_Paper = new Pub_PaperList();
        // await objPage_Paper.BindGv_vPaper();
        //     message.success('已关注！');
        message.success('已关注！');
      } else {
        const strInfo = `关注不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText3; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `关注不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  //添加历史版本
  public async AddVersionRecordSave() {
    const divName = this.getDivName();
    const strThisFuncName = this.AddVersionRecordSave.name;

    const strPaperId = GetHidPaperId(divName);
    const objgs_PaperEN: clsgs_PaperVerEN = new clsgs_PaperVerEN();
    objgs_PaperEN.SetPaperId(strPaperId);
    this.PutDataToPaperVerClass(objgs_PaperEN);

    try {
      const responseText2 = await gs_PaperVer_AddNewRecordAsync(objgs_PaperEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1 =1 and paperId='${strPaperId}'`;
        const intVersionCount = await gs_PaperVer_GetRecCountByCondAsync(strWhereCond2);

        const objPaperEN: clsPaperEN = new clsPaperEN();
        objPaperEN.SetPaperId(strPaperId);
        objPaperEN.SetVersionCount(intVersionCount);

        objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        Paper_UpdateRecordAsync(objPaperEN).then((jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == true) {
            return true;
          } else {
            const strInfo = `添加历史版本数不成功!`;
            alert(strInfo);
            console.log('添加历史版本数不成功');
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
     <param name = "pobjPaperEN">数据传输的目的类对象</param>
   */
  public async PutDataToPaperVerClass(pobjPaperEN: clsgs_PaperVerEN) {
    const divName = this.getDivName();
    const strPaperId = GetHidPaperId(divName);
    pobjPaperEN.SetPaperId(strPaperId); // 论文Id
    pobjPaperEN.SetPaperTitle(this.paperTitle); // 论文标题
    pobjPaperEN.SetPaperContent(this.paperContent); // 主题内容
    pobjPaperEN.SetPeriodical(this.periodical); // 期刊
    pobjPaperEN.SetAuthor(this.author); // 作者
    pobjPaperEN.SetResearchQuestion(this.researchQuestion); // 研究问题
    pobjPaperEN.SetUpdDate(clsPubFun4Web.getNowDate_ymd()); // 修改日期
    pobjPaperEN.SetUpdUser(userStore.getUserId); // 修改用户Id

    pobjPaperEN.SetMemo(this.memo); // 备注
    pobjPaperEN.SetKeyword(this.keyword); // 关键字
    pobjPaperEN.SetLiteratureSources(this.literatureSources); // 文献来源
    pobjPaperEN.SetLiteratureLink(this.literatureLink); // 文献链接
    pobjPaperEN.SetLiteratureTypeId(this.literatureTypeId); //文献类型
    pobjPaperEN.SetUploadfileUrl(GetInputValueInDivObj(divName, 'hdnpic'));
    pobjPaperEN.SetIsQuotethesis(this.isQuotethesis); // 是否引用论文
    pobjPaperEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjPaperEN.SetQuoteId(this.quoteId); // 引用Id
    pobjPaperEN.SetIsChecked(this.isChecked); // 是否检查
    pobjPaperEN.SetChecker(this.checker); // 审核人

    pobjPaperEN.SetPaperTypeId(this.paperTypeId); // 论文类型
    pobjPaperEN.SetPaperStatusId(this.paperStatusId); // 论文状态
  }

  //统计附件数量并添加到论文表
  public async AddAttachmentCount(strPaperId: string) {
    // const divName = this.getDivName();
    const strThisFuncName = this.AddAttachmentCount.name;
    //添加记录的同时并记录论文的读写数
    // const strPaperId = GetHidPaperId(divName);
    const strWhereCond2 = ` 1=1 and paperId='${strPaperId}'`;
    const intAttachmentCount = await PaperAttachment_GetRecCountByCondAsync(strWhereCond2);

    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strPaperId);
    objPaperEN.SetAttachmentCount(intAttachmentCount);

    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    const responseText = await Paper_UpdateRecordAsync(objPaperEN);
    const returnBool = !!responseText;
    if (returnBool == true) {
      PaperEx_ReFreshThisCacheByIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
      //HideDialog();
      //this.BindGv_vPaper();
      //$("#divLoading").hide();
      ////显示信息框
      //this.Clear();
      //strIdCurrEduclsstrInfo: string = `添加记录成功!`;
      //alert(strInfo);
      console.log('添加统计数量成功');
    } else {
      const strInfo = `添加统计数量不成功!`;
      alert(strInfo);
      console.log('添加统计数量不成功');
    }
  }

  /* 添加新记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
  */
  public async AddNewRecordSave() {
    const divName = this.getDivName();
    try {
      await Paper_GetMaxStrIdAsync().then((jsonData) => {
        const returnString: string = jsonData.toString();
        if (returnString == '') {
          const strInfo = `获取表Paper的最大关键字为空，不成功，请检查!`;
          //显示信息框
          alert(strInfo);
        } else {
          $('#txtPaperId').val(returnString);
          SetHidPaperId(divName, returnString);
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }

    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(GetHidPaperId(divName));
    await this.PutDataToPaperClass(objPaperEN);
    try {
      const responseText03 = await Paper_IsExistAsync(objPaperEN.paperId);
      const bolIsExist: boolean = responseText03;
      if (bolIsExist == true) {
        const strMsg = `添加记录时，关键字：${objPaperEN.paperId}已经存在！`;
        alert(strMsg);
        return responseText03; //一定要有一个返回值，否则会出错！
      }

      const intPaperCount = await Paper_GetRecCountByCondAsync(
        `1=1 and paperTitle='${this.paperTitle}' and idCurrEduCls ='${clsPubLocalStorage.idCurrEduCls}'`,
      );
      if (intPaperCount != 0) {
        const strMsg = `添加记录时，当前教学班论文标题：${objPaperEN.paperTitle}已经存在，请重新命名！`;
        alert(strMsg);
        return false; //一定要有一个返回值，否则会出错！
      }
      const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
        clsPrivateSessionStorage.topicIdInTree,
      );
      const responseText05 = await Paper_AddNewRecordAsync(objPaperEN);
      const returnBool = !!responseText05;
      if (returnBool == true) {
        //判断是否有返回的附件路径值
        if (P_Paper_EditV2Ex.uploadResponseData.fileNameOne != '') {
          //第一个附件框判断
          const strPaperId = GetHidPaperId(divName);
          const returnBool_AddPaperAttach = await PaperAttachmentEx_AddPaperAttachment(
            strPaperId,
            strIdCurrEduCls,
            P_Paper_EditV2Ex.uploadResponseData,
          );
        }
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText05; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  ///////////////////////////////////////////////----------------------------------------------------添加主题论文关系
  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSavePaperRela(strPaperId: string) {
    // const divName = this.getDivName();
    // const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    // const strPaperId = GetHidPaperId(divName);
    // const strUserId = userStore.getUserId;
    const objRTPaperRelaEN: clsRTPaperRelaEN = new clsRTPaperRelaEN();
    this.PutDataToRTPaperRelaClass(objRTPaperRelaEN, strPaperId);

    try {
      //// 同一主题 同一论文 只能添加一次；
      //const strWhere = " 1 = 1 And topicId = '" + strTopicId + "' And paperId = '" + strPaperId + "'";
      //const responseText = await RTPaperRela_IsExistRecordAsync(strWhere);
      //strIdCurrEduclsbolIsExist: boolean = responseText;
      //if (bolIsExist == true) {
      //    strIdCurrEduclsstrMsg: string = `同一主题不能重复添加同一个论文！`;
      //    alert(strMsg);
      //    return responseText;//一定要有一个返回值，否则会出错！
      //}

      const responseText2 = await RTPaperRela_AddNewRecordAsync(objRTPaperRelaEN);
      const returnBool = !!responseText2;
      if (returnBool == false) {
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
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjRTPaperRelaEN">数据传输的目的类对象</param>
*/
  public PutDataToRTPaperRelaClass(pobjRTPaperRelaEN: clsRTPaperRelaEN, strPaperId: string) {
    // const divName = this.getDivName();
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    // const strPaperId = GetHidPaperId(divName);

    pobjRTPaperRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTPaperRelaEN.SetPaperId(strPaperId); // 论文Id
    pobjRTPaperRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTPaperRelaEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjRTPaperRelaEN.SetMemo(this.memo); // 备注
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

  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateRecordSave(): Promise<boolean> {
    const divName = this.getDivName();
    const strThisFuncName = this.UpdateRecordSave.name;

    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(this.keyId);
    SetHidPaperId(divName, this.keyId);
    this.PutDataToPaperClass(objPaperEN);
    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        //得到相关论文附件地址，判断是否为空
        if (
          GetInputValueInDivObj(divName, 'hdnFileOne') != '' ||
          GetInputValueInDivObj(divName, 'hdnFileTwo') != '' ||
          GetInputValueInDivObj(divName, 'hdnFileThree') != ''
        ) {
          //根据Id删除附件
          const strwhere = `paperId ='${objPaperEN.paperId}'`;
          this.DelRecordByWhere(strwhere);
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

  /* 
   根据关键字删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
  */
  public async DelRecordByWhere(strWhere: string) {
    const divName = this.getDivName();

    try {
      const returnInt: number = await PaperAttachment_DelPaperAttachmentsByCondAsync(strWhere);
      if (returnInt > 0) {
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
      } else {
        // const strInfo = `删除记录不成功!`;
        //显示信息框
        //alert(strInfo);
      }
      const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
        clsPrivateSessionStorage.topicIdInTree,
      );
      //不管是否有数据删除 都需要执行附件添加功能
      //判断是否有返回的附件路径值
      //判断是否有返回的附件路径值
      if (P_Paper_EditV2Ex.uploadResponseData.fileNameOne != '') {
        //第一个附件框判断
        const strPaperId = GetHidPaperId(divName);
        const returnBool_AddPaperAttach = await PaperAttachmentEx_AddPaperAttachment(
          strPaperId,
          strIdCurrEduCls,
          P_Paper_EditV2Ex.uploadResponseData,
        );
      }

      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 根据关键字获取相应的记录的对象
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
    <param name = "sender">参数列表</param>
  */
  public async UpdateRecord(strPaperId: string): Promise<boolean> {
    const objLayOut = this.getDivName();
    if (objLayOut == null) return false;

    this.btnSubmitPaper = '确认修改';
    this.btnCancelPaper = '取消修改';
    this.keyId = strPaperId;

    try {
      const strUserId = userStore.getUserId;

      const objPaperEN = await Paper_GetObjByPaperIdAsync(strPaperId);
      if (objPaperEN == null) return false;
      //判断是不是添加用户
      if (objPaperEN.updUser == strUserId) {
        //判断数据是否已经审核
        if (objPaperEN.isChecked == true) {
          //$("#btnOKUpd").hide();
          //$("#btnCancel").hide();
          //$('#myModalLabel').html('详细信息');

          //this.GetDataFromPaperClass(objPaperEN);
          //console.log("完成UpdateRecord!");
          //resolve(jsonData);
          const strMsg = `当前记录已被审核不可修改！`;
          alert(strMsg);
          return false;
        } else {
          $('#btnOKUpd').show();
          $('#btnCancel').show();
          const bolIsSuccess = await this.ShowDialog_Paper(this.opType);
          if (bolIsSuccess == false) return false;
          this.GetDataFromPaperClass(objPaperEN);
          SetInputDisable(objLayOut, 'txtPaperTitle', true);
          console.log('完成UpdateRecord!');
          //resolve(jsonData);
        }
      } else {
        //$("#btnOKUpd").hide();
        //$("#btnCancel").hide();
        //$('#myModalLabel').html('详细信息');
        //ShowDialog('Update');
        //this.GetDataFromPaperClass(objPaperEN);
        //console.log("完成UpdateRecord!");
        //resolve(jsonData);

        const strMsg = `当前记录不是您添加的只能查看不能修改！`;
        alert(strMsg);
        return false;
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }
  //public async GetPaperDataByPaperId() {

  //}
  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjPaperEN">数据传输的目的类对象</param>
   */
  public async PutDataToPaperClass(pobjPaperEN: clsPaperEN) {
    const divName = this.getDivName();
    pobjPaperEN.SetPaperId(this.paperId); // 论文Id
    pobjPaperEN.SetPaperTitle(this.paperTitle); // 论文标题
    pobjPaperEN.SetPaperContent(this.paperContent); // 主题内容
    pobjPaperEN.SetPeriodical(this.periodical); // 期刊
    pobjPaperEN.SetAuthor(this.author); // 作者
    pobjPaperEN.SetResearchQuestion(this.researchQuestion); // 研究问题
    pobjPaperEN.SetUpdDate(clsPubFun4Web.getNowDate_ymd()); // 修改日期

    const strUserId = userStore.getUserId;

    pobjPaperEN.SetUpdUser(strUserId); // 修改用户Id
    //pobjPaperEN.SetUpdUser(userStore.getUserId;// 修改用户Id
    pobjPaperEN.SetMemo(this.memo); // 备注
    pobjPaperEN.SetKeyword(this.keyword); // 关键字
    pobjPaperEN.SetLiteratureSources(this.literatureSources); // 文献来源
    pobjPaperEN.SetLiteratureLink(this.literatureLink); // 文献链接
    pobjPaperEN.SetLiteratureTypeId(this.literatureTypeId); //文献类型
    pobjPaperEN.SetUploadfileUrl(GetInputValueInDivObj(divName, 'hdnpic'));
    pobjPaperEN.SetIsQuotethesis(this.isQuotethesis); // 是否引用论文
    // pobjPaperEN.SetQuoteId(this.quoteId); // 引用Id
    //pobjPaperEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls;
    pobjPaperEN.SetShareId(this.shareId);
    //pobjPaperEN.SetIsChecked(this.isChecked;// 是否检查
    //在主题维护关系界面、添加论文、暂定默认为true、
    pobjPaperEN.SetIsChecked(false); // 是否检查
    pobjPaperEN.SetIsSubmit(false); //是否提交//因为是个人添加，所以状态为false；
    pobjPaperEN.SetChecker(this.checker); // 审核人

    if (userStore.userType == UserTypeMap.middle_School) {
      pobjPaperEN.SetPaperTypeId('03'); // 论文类型  该页面默认状态为01
    } else {
      pobjPaperEN.SetPaperTypeId('01'); // 论文类型  该页面默认状态为01
    }
    pobjPaperEN.SetPaperStatusId(this.paperStatusId); // 论文状态
    pobjPaperEN.SetIsPublic(true); //引用论文；
  }

  /* 函数功能:把类对象的属性内容显示到界面上
   注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
    如果在设置数据库时,就应该一级字段在前,二级字段在后
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
    <param name = "pobjPaperEN">表实体类对象</param>
  */
  public async GetDataFromPaperClass(pobjPaperEN: clsPaperEN) {
    this.paperId = pobjPaperEN.paperId; // 论文Id
    this.paperTitle = pobjPaperEN.paperTitle; // 论文标题
    this.paperContent = pobjPaperEN.paperContent; // 主题内容
    this.periodical = pobjPaperEN.periodical; // 期刊
    this.author = pobjPaperEN.author; // 作者
    this.researchQuestion = pobjPaperEN.researchQuestion; // 研究问题
    //this.updDate = pobjPaperEN.updDate;// 修改日期
    this.updUser = pobjPaperEN.updUser; // 修改用户Id
    this.memo = pobjPaperEN.memo; // 备注
    this.keyword = pobjPaperEN.keyword; // 关键字
    this.literatureSources = pobjPaperEN.literatureSources; // 文献来源
    this.literatureLink = pobjPaperEN.literatureLink; // 文献链接
    this.literatureTypeId = pobjPaperEN.literatureTypeId; //文献类型；
    $('#hdnpic').val(pobjPaperEN.uploadfileUrl);
    this.isQuotethesis = pobjPaperEN.isQuotethesis; // 是否引用论文
    this.shareId = pobjPaperEN.shareId;
    this.quoteId = pobjPaperEN.quoteId; // 引用Id
    this.isChecked = pobjPaperEN.isChecked; // 是否检查
    this.checker = pobjPaperEN.checker; // 审核人
    setTextboxio();

    if (pobjPaperEN.paperTypeId != '') {
      if (pobjPaperEN.paperTypeId == '02') {
        $('#ddlPaperTypeId').attr('disabled', 'true');
        $('#ddlPaperStatusId').attr('disabled', 'false'); //原创论文可以修改 论文状态；
      } else {
        $('#ddlPaperTypeId').attr('disabled', 'true');
        $('#ddlPaperStatusId').attr('disabled', 'true');
      }
    }
  }

  /*
   * 修改用户Id
   */
  public set updUser(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidUserId', value);
  }
  /*
   * 修改用户Id
   */
  public get updUser(): string {
    return userStore.getUserId;
  }

  //论文审核
  public async btnAudit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要审核的记录！');
      return;
    }

    this.SubmitRecord(strKeyId);
  }
  //审核判断；
  public async SubmitRecord(strPaperId: string) {
    this.keyId = strPaperId;

    try {
      const objPaperEN = await Paper_GetObjByPaperIdAsync(strPaperId);
      if (objPaperEN == null) return;
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色 //学生00620003
      if (strRoleId == '00620003') {
        // //通过判断数据用户是否是当前登录用户；
        if (objPaperEN.updUser == strUserId) {
          //判断数据是否已审核
          if (objPaperEN.isChecked == false) {
            this.SubmitRecordSave();
          } else {
            alert('当前数据已审核！');
            return;
          }
        } else {
          alert('当前数据不是您所添加，不能修改！');
          return;
        }
      } else {
        //可以提交
        //判断数据是否已提交
        if (objPaperEN.isChecked == false) {
          this.SubmitRecordSave();
        } else {
          alert('当前数据已审核！');
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
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(this.keyId);
    //设置提交状态；
    objPaperEN.SetIsChecked(true);
    this.PutDataToPaperClassAudit(objPaperEN);
    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        const strInfo = `论文审核成功!`;

        //显示信息框
        alert(strInfo);

        this.HideDialog_Paper();
        //this.BindGv_vPaper();
        this.iShowList.BindGv(clsPaperEN._CurrTabName, returnBool.toString());
      } else {
        const strInfo = `论文审核不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('审核失败');
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
  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjPaperReadWriteEN">数据传输的目的类对象</param>
*/
  public PutDataToPaperClassAudit(pobjPaperEN: clsPaperEN) {
    //pobjPaperReadWriteEN.SetPaperRWId(this.paperRWId;// 论文读写Id
    pobjPaperEN.SetIsChecked(true);
    pobjPaperEN.SetChecker(userStore.getUserId); //提交人；
  }

  //用来选择专业记录方法；
  public btnOkInTab_Click(strKeyId: string) {
    $('#hidMajorDirectionId').val(strKeyId); //专业方向
    this.AddNewRecordSaveMajorDirection();
  }
  /* 添加新记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
    */
  public async AddNewRecordSaveMajorDirection() {
    const divName = this.getDivName();
    const strMajorDirectionId = GetInputValueInDivObj(divName, 'hidMajorDirectionId'); //专业方向
    const strPaperId = GetHidPaperId(divName); //论文

    const objMajorDirectionPaperRelaEN: clsMajorDirectionPaperRelaEN =
      new clsMajorDirectionPaperRelaEN();
    this.PutDataToMajorDirectionPaperRelaClass(objMajorDirectionPaperRelaEN);
    try {
      //同一论文不能重复添加同一个专业方向；
      const strWhere = ` 1 = 1 And paperId = '${strPaperId}' And majorDirectionId = '${strMajorDirectionId}'`;
      const responseText = await MajorDirectionPaperRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一论文不能重复添加同一个专业方向！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await MajorDirectionPaperRela_AddNewRecordAsync(
        objMajorDirectionPaperRelaEN,
      );
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
        this.HideDialog_Paper();
        //window.location.href = "../GradEduEx/PaperCRUD?paperTypeId=01";
        window.location.href = `../GraduateEdu/PaperAddXzmajorRela?paperId='${strPaperId}'`;
      } else {
        const strInfo = `添加记录不成功!`;

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
    <param name = "pobjMajorDirectionPaperRelaEN">数据传输的目的类对象</param>
  */
  public PutDataToMajorDirectionPaperRelaClass(
    pobjMajorDirectionPaperRelaEN: clsMajorDirectionPaperRelaEN,
  ) {
    const divName = this.getDivName();
    const strMajorDirectionId = GetInputValueInDivObj(divName, 'hidMajorDirectionId');
    const strViewpointId = GetHidPaperId(divName);

    pobjMajorDirectionPaperRelaEN.SetMajorDirectionId(strMajorDirectionId); // 研究方向Id
    pobjMajorDirectionPaperRelaEN.SetPaperId(strViewpointId); // 论文Id
    pobjMajorDirectionPaperRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjMajorDirectionPaperRelaEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjMajorDirectionPaperRelaEN.SetMemo(this.memo); // 备注
  }

  ///* 函数功能:在数据 列表中跳转到某一页
  //   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
  //   <param name = "intPageIndex">页序号</param>
  // */
  //public IndexPageOne(intPageIndex: number) {
  //    if (intPageIndex == 0) {
  //        intPageIndex = this.objPager.pageCount;
  //    }
  //    console.log("跳转到" + intPageIndex + "页");
  //    this.setCurrPageIndex(intPageIndex, this.divName4Pager);
  //    this.BindGv_vXzMajorDirection();
  //}
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvXzMajorDirectionBy(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidSortvXzMajorDirectionBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvXzMajorDirectionBy(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'hidSortvXzMajorDirectionBy');
  }

  /*
   * 设置上传文件
   */
  public set Uploadfile(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtUploadfile', value);
  }
  /*
   * 获取上传文件
   */
  public get Uploadfile(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtUploadfile');
  }

  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {
    this.paperId = '';
    this.paperTitle = '';
    this.paperContent = '';
    this.periodical = '';
    this.author = '';
    this.researchQuestion = '';
    //this.updDate = "";
    this.updUser = '';
    this.memo = '';
    this.keyword = '';
    this.literatureSources = '';
    this.literatureLink = '';
    this.uploadfileUrl = '';
    this.isQuotethesis = false;
    // this.quoteId = '';
    this.isChecked = false;
    this.checker = '';
    $('#ddlLiteratureTypeId option[0]').attr('selected', 'true');
    this.Uploadfile = '';
    $('#hdnFileOne').val('');
    $('#hdnFileTwo').val('');
    $('#hdnFileThree').val('');
    $('#ddlPaperTypeId option[0]').attr('selected', 'true');
    $('#ddlPaperStatusId option[0]').attr('selected', 'true');
  }
  //屏蔽控件
  public Disabled_true() {
    const objLayOut = this.getDivName();
    if (objLayOut == null) return false;
    SetInputDisable(objLayOut, 'txtPaperTitle', true);
    $('#txtPaperContent').attr('disabled', 'true');

    $('#txtPeriodical').attr('disabled', 'true');
    $('#txtAuthor').attr('disabled', 'true');
    $('#txtResearchQuestion').attr('disabled', 'true');
    $('#txtKeyword').attr('disabled', 'true');
    $('#ddlLiteratureTypeId').attr('disabled', 'true');

    $('#txtLiteratureSources').attr('disabled', 'true');
    $('#txtLiteratureLink').attr('disabled', 'true');

    $('#txtLiteratureLink').attr('disabled', 'true');
    $('#txtLiteratureLink').attr('disabled', 'true');

    $('#ddlPaperTypeId').attr('disabled', 'true');
    $('#ddlPaperStatusId').attr('disabled', 'true');
  }

  //开放控件
  public Disabled_false() {
    const objLayOut = this.getDivName();
    if (objLayOut == null) return false;
    SetInputDisable(objLayOut, 'txtPaperTitle', false);
    $('#txtPaperContent').attr('disabled', 'false');

    $('#txtPeriodical').attr('disabled', 'false');
    $('#txtAuthor').attr('disabled', 'false');
    $('#txtResearchQuestion').attr('disabled', 'false');
    $('#txtKeyword').attr('disabled', 'false');
    $('#ddlLiteratureTypeId').attr('disabled', 'false');

    $('#ddlPaperTypeId').attr('disabled', 'false');
    $('#ddlPaperStatusId').attr('disabled', 'true');

    $('#txtLiteratureSources').attr('disabled', 'false');
    $('#txtLiteratureLink').attr('disabled', 'false');

    $('#txtLiteratureLink').attr('disabled', 'false');
    $('#txtLiteratureLink').attr('disabled', 'false');
  }

  /*
   * 专业流水号
   */
  public get idXzMajor_q(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlIdXzMajor_q');
  }
  /*
   * 研究方向名
   */
  public get majorDirectionName_q(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtMajorDirectionName_q');
  }

  /*
   * 文献类型
   */
  public set literatureTypeId(value: string) {
    const divName = this.getDivName();
    SetSelectValueByIdInDivObj(divName, 'ddlLiteratureTypeId', value);
  }
  /*
   * 文献类型
   */
  public get literatureTypeId(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlLiteratureTypeId');
  }

  /*
   * 论文类型
   */
  public set paperTypeId(value: string) {
    const divName = this.getDivName();
    SetSelectValueByIdInDivObj(divName, 'ddlPaperTypeId', value);
  }
  /*
   * 论文类型
   */
  public get paperTypeId(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlPaperTypeId');
  }

  /*
   * 论文状态
   */
  public set paperStatusId(value: string) {
    const divName = this.getDivName();
    SetSelectValueByIdInDivObj(divName, 'ddlPaperStatusId', value);
  }
  /*
   * 论文状态
   */
  public get paperStatusId(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlPaperStatusId');
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
