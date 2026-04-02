import { Ref } from 'vue';
import $ from 'jquery';
import {
  PaperEx_GetObjExLstByPagerAsync,
  PaperEx_ReFreshThisCacheByIdCurrEduCls,
} from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { vRTPaperRelaEx_CopyToEx } from '@/ts/L3ForWApiEx/GradEduTopic/clsvRTPaperRelaExWApi';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';
import { clsRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTPaperRelaEN';
import { clsvRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN';
import { clsvRTPaperRelaENEx } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaENEx';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  Paper_GetObjByPaperIdAsync,
  Paper_GetRecCountByCondAsync,
  Paper_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { RTPaperRela_GetObjBymIdAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTPaperRelaWApi';
import {
  LiteratureType_BindDdl_LiteratureTypeIdInDivCache,
  LiteratureType_GetObjLstAsync,
  LiteratureType_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';

import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  GetArray,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst, BindTabV2Where, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { Format } from '@/ts/PubFun/clsString';

import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { vUsersSimEx_func } from '@/ts/L3ForWApiExShare/UserManage_GP/clsvUsersSimExWApi';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';

declare function ParticipateQA_Click(strKey: string): void;
declare let window: any;
/* WApiRTPaperRela_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PaperLstSel extends PaperCRUD {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static EditRef: Ref<any>;
  public divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
  public static paperTypeId = '';
  public opType = '';

  public bolIsLoadEditRegion = false; //记录是否导入编辑区的变量
  public divName4Edit = 'divEdit_Sel'; //编辑区的Id
  public static objPageEdit: PaperLstSel;
  protected iShowList: IShowList;

  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvRTPaperRelaBy: string = "mId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  //论文列表
  public mstrListDivPaper = 'divDataLst';

  //主题自研论文关系
  public mstrListDivRtOriginalPaperRela = 'divDataLst4RtOriginalPaperRela';

  //主题引用论文关系
  //public mstrListDivRtPaperRela: string = "divRtPaperRelaDataLst";
  public mstrListDivRtCitedPaperRela = 'divRtCitedPaperRelaDataLst';
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
  public get pageSize(): number {
    return 10;
  }

  constructor(objShowList: IShowList, divLayout: HTMLDivElement) {
    super(divLayout);
    this.iShowList = objShowList;
    const divTemp = document.createElement('div');
    divTemp.id = 'temp';
    this.divEdit = divTemp;
    PaperLstSel.objPageEdit = this;
  }
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
  }
  /*
    按钮单击,用于调用Js函数中btn_Click
   (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    console.log(strKeyId);
    //        const objShowList: IShowList
    // const objPage: PaperLstSel = PaperLstSel.objPageEdit;

    switch (strCommandName) {
      case 'AddUsersToTopic': //删除研究主题AddgsReflectLog
        // objPage.btnAddUsersToTopic_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ResearchTopic_QUDIEx.btn_Click');

        break;
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
*/
  public async PageLoad() {
    const objLayOut = this.divEdit;
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      const divName4Pager = 'divPager';

      if (userStore.getUserId != '') {
        //1、为下拉框设置数据源,绑定列表数据
        this.hidSortvRTPaperRelaBy = 'updDate Desc';

        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vPaper();

        $('#hidUserId').val(userStore.getUserId);
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

  // /*
  //    显示对话框
  //   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_TS_ShowDialog)
  //   */
  // public ShowDialog_Paper(strOp:string) {
  //   //检查相关控件是否存在

  //   CheckControlExist(divName, 'div', 'divPaperList');
  //   CheckControlExist(divName, 'h4', 'myModalLabel');
  //   if (strOp === 'Add') {
  //     $('#divPaperList').html('添加记录');
  //     //ViewInfo_EditEx.GetMaxStrId('#txtViewId');
  //   } else if (strOp === 'Update') {
  //     $('#divPaperList').html('修改记录');
  //   } else if (strOp === 'Detail') {
  //     $('#btnSubmit_ViewInfo').hide();
  //     $('#myModalLabel').html('详细信息');
  //   }
  //   ShowDialog('#divPaperList');
  // }

  /*
     隐藏对话框
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_TS_HideDialog)
    */
  // public HideDialog_Paper() {

  //   CheckControlExist(divName, 'div', 'divPaperList');
  //   HideDialog('#divPaperList');
  // }
  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_divPaperList(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_divPaperList.name;
    if (PaperLstSel.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      await PaperLstSel.EditObj.showDialog();
    }
    this.divEdit = PaperLstSel.EditObj.$refs.refDivLayout;
    if (this.divEdit == null) {
      if (PaperLstSel.times4TestShowDialog < 2) {
        PaperLstSel.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_divPaperList(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      PaperLstSel.times4TestShowDialog = 0;
      this.divList = GetDivObjInDivObjN(this.divEdit, 'divList');
      this.divQuery = GetDivObjInDivObjN(this.divEdit, 'divQuery');
      this.divFunction = GetDivObjInDivObjN(this.divEdit, 'divFunction');
    }
    // if (strOp === 'Add' || strOp === 'AddWithMaxId') {
    //   this.btnSubmitTopicObjective = '确认添加';
    //   this.btnCancelTopicObjective = '取消添加';
    // } else if (strOp === 'Update') {
    //   this.btnSubmitTopicObjective = '确认修改';
    //   this.btnCancelTopicObjective = '取消修改';
    // }
    return true;
  }
  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_divPaperList() {
    if (PaperLstSel.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      PaperLstSel.EditObj.hideDialog();
    }
  }
  public async btnAddPaperRela_Click() {
    //this.opType = "Add";
    try {
      const divName4Pager = 'divPager';
      const bolIsSuccess = await this.ShowDialog_divPaperList(this.opType);
      if (bolIsSuccess == false) return;

      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegion();
      this.SetEventFunc();
      // this.ShowDialog_Paper('');
      this.bolIsLoadEditRegion = true; //
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(this.divEdit, divName4Pager);
        this.bolIsInitShow = true; //
      }
      await this.BindGv_vPaper();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:设置事件函数
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_SetEventFunc)
   */
  public async SetEventFunc() {
    // 在此处放置用户代码以初始化页面
    try {
      const objDiv0 = document.getElementById('divPaperList');
      if (objDiv0 == undefined) return;
      const objDiv: HTMLDivElement = <HTMLDivElement>objDiv0;
      const objLst = objDiv.getElementsByTagName('button');
      //console.log("objLst", objLst);
      const arrElement = GetArray(objLst);

      //strIdCurrEduclsbtnUpdate4Dg = document.getElementById('btnUpdateRecord');
      const btnQuery = arrElement.find((x) => x.id == 'btnQuery');
      if (btnQuery == null) return;

      btnQuery.addEventListener('click', (e: any) => {
        console.log(e);
        this.btnPaperQuery_Click();
      });
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 函数功能:为编辑区绑定下拉框
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
   */
  public async BindDdl4EditRegion() {
    const objLayOut = this.divEdit;
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    await LiteratureType_BindDdl_LiteratureTypeIdInDivCache(objLayOut, 'ddlLiteratureTypeId_q');

    await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q'); //用户查询区域
  }
  /// <summary>
  /// 在当前界面中，导入编辑区域
  /// (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
  /// </summary>
  /// <returns></returns>
  public async AddDPV_Edit(divName4Edit: string) {
    const strUrl = './PaperLstSel';
    console.log(`divName4Edit:(In AddDPV_Edit)${divName4Edit}`);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'GET',
        dataType: 'html',
        data: {},
        success(data) {
          console.log(`已经成功获取页面:${strUrl}  字节数: ${data.length.toString()}`);
          $(`#${divName4Edit}`).html(data);
          resolve(true);
          //setTimeout(() => { clsEditObj.BindTab(); }, 100);
          //clsEditObj.BindTab();
        },
        error: (e: any) => {
          console.error(e);
          reject(e);
        },
      });
    });
  }
  //相关论文
  public async liPaperClick() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    try {
      //用户下拉框绑定
      //const ddl_UserId_q = await this.BindDdl_UserId("ddlUserId_q");

      await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q'); //用户查询区域

      //文献类型；
      //const ddl_LiteratureTypeId_q = await this.BindDdl_LiteratureTypeId("ddlLiteratureTypeId_q");
      await LiteratureType_BindDdl_LiteratureTypeIdInDivCache(objLayOut, 'ddlLiteratureTypeId_q');

      //主题论文
      this.hidSortvRTPaperRelaBy = 'updDate Desc';

      await this.BindGv_vPaper();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  public async BindDdl_LiteratureTypeId_Cache(
    ddlLiteratureTypeId: string,
    objLiteratureType_Cond: clsLiteratureTypeEN,
  ) {
    //strWhereCond = " 1 =1 ";
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

  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objzx_ConceptS">源对象</param>
  public async FuncMap(objvRTPaperRela: clsvRTPaperRelaENEx) {
    try {
      const vUsersSim_UserId = objvRTPaperRela.updUser;
      const vUsersSim_UserName = await vUsersSimEx_func(
        clsvUsersSimEN.con_UserId,
        clsvUsersSimEN.con_UserName,
        vUsersSim_UserId,
      );
      objvRTPaperRela.userName = vUsersSim_UserName;
    } catch (e: any) {
      const strMsg = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.(${clsStackTrace.GetCurrClassFunction()})`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objzx_ConceptENS">源对象</param>
  /// <returns>目标对象=>clszx_ConceptEN:objzx_ConceptENT</returns>
  public CopyToEx(objzx_ConceptENS: clsvRTPaperRelaEN): clsvRTPaperRelaENEx {
    let objzx_ConceptENT = new clsvRTPaperRelaENEx();
    try {
      objzx_ConceptENT = vRTPaperRelaEx_CopyToEx(objzx_ConceptENS);
      return objzx_ConceptENT;
    } catch (e: any) {
      const strMsg: string = Format(
        '(errid:WiTsCs0011)Copy表对象数据出错,${e}.({0})',
        clsStackTrace.GetCurrClassFunction(),
      );
      alert(strMsg);
      return objzx_ConceptENT;
    }
  }

  public async btnParticipateQA_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      RTPaperRela_GetObjBymIdAsync(lngKeyId).then((jsonData) => {
        const objRTPaperRelaEN: clsRTPaperRelaEN = <clsRTPaperRelaEN>jsonData;
        if (objRTPaperRelaEN != null) {
          const strPaperId = objRTPaperRelaEN.paperId;
          ParticipateQA_Click(strPaperId);
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //////////////////////////////////////////////////////论文部分//////////////////////////////////////////

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
      const arrLiteratureTypeObjLst = await LiteratureType_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrLiteratureTypeObjLst,
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
  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombinevPaperCondition(): Promise<string> {
    const divName = this.divEdit;
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    const strTopicId: string = this.topicId;
    //论文条件教学班
    //strWhereCond += ` And ${clsPaperEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;

    //strWhereCond += ` And ${clsPaperEN.con_IdCurrEduCls} <> '00000050'`;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }
      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      }

      //if (clsPubLocalStorage.eduClsTypeId == "0001") {
      //    strWhereCond += ` And ${clsPaperEN.con_UpdUser} in('${clsPubLocalStorage.TopicUserList}')`;
      //} else {
      //    //用户
      //    if (this.readUser_q != "" && this.readUser_q != "0") {
      //        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.readUser_q}'`;
      //    }
      //}
      //用户
      if (this.readUser_q != '' && this.readUser_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.readUser_q}'`;
      }

      const strPaperTypeId = PaperLstSel.paperTypeId;
      if (strPaperTypeId == '01') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTypeId} = '${strPaperTypeId}'`;
      } else if (strPaperTypeId == '02') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTypeId} = '${strPaperTypeId}'`;
      }

      //只查询提交后的论文数据
      //strWhereCond += ` And ${clsPaperEN.con_IsSubmit} = 'true'`;

      //获取论文条件 02代表 小组成员论文数据；
      const strType = GetInputValueInDivObj(divName, 'hidstrType');

      if (strType == '01') {
        //排除获取已存在的关系数据
        strWhereCond += ` And paperId not in (select paperId from RTPaperRela where topicId = '${strTopicId}')`;
      } else if (strType == '02') {
        //小组成员的论文数据；
        strWhereCond += ` And updUser in (select UserID from RTUserRela where topicId = '${strTopicId}')`;
        //排除获取已存在的关系数据
        strWhereCond += ` And paperId not in (select paperId from RTResearchResult where topicId = '${strTopicId}')`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的记录对象的列表
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vPaper() {
    const objDivLayOut = this.divEdit;
    if (objDivLayOut == null) return;
    const strListDiv = GetDivObjInDivObj(objDivLayOut, this.mstrListDivPaper);

    //if (this.bolIsInitShow == false)  //
    //{
    //    this.objPager.InitShow(this.divName4Pager);
    //    this.bolIsInitShow = true;  //
    //}
    //论文
    PaperCRUD.sortPaperBy = 'updDate Desc';

    const strWhereCond = await this.CombinevPaperCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrPaperExObjLst: Array<clsPaperENEx> = [];
    try {
      this.recCount = await Paper_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: PaperCRUD.sortPaperBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrPaperExObjLst = await PaperEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    try {
      this.BindTab_vPaper(strListDiv, arrPaperExObjLst);
      console.log('完成BindGv_vPaper!');

      if (GetInputValueInDivObj(objDivLayOut, 'hidstrType') == '03') {
        this.BindTab_vPaperQA(strListDiv, arrPaperExObjLst);
        console.log('完成BindGv_vQAPaper!');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 显示vPaper对象的所有属性值
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   <param name = "divContainer">显示容器</param>
   <param name = "arrPaperObjLst">需要绑定的对象列表</param>
 */
  public async BindTab_vPaper(divContainer: HTMLDivElement, arrPaperExObjLst: Array<clsPaperENEx>) {
    const strThisFuncName = this.BindTab_vPaper.name;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'paperTitle',
        colHeader: '论文标题',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      // {
      //   fldName: 'eduClsName',
      //   colHeader: '教学班',
      //   text: '',
      //   tdClass: 'text-left',
      //   sortBy: '',
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   columnType: 'Label',
      //   orderNum: 1,
      //   funcName: () => {},
      // },
      {
        fldName: 'periodical',
        colHeader: '期刊',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'author',
        colHeader: '作者',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'keyword',
        colHeader: '关键字',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'updDate',
        colHeader: '提交日期',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },

      // {
      //   fldName: 'userName',
      //   colHeader: '用户',
      //   text: '',
      //   tdClass: 'text-left',
      //   sortBy: '',
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   columnType: 'Label',
      //   orderNum: 1,
      //   funcName: () => {},
      // },
      {
        fldName: '',
        colHeader: '确定',
        text: '确定',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info btn-sm';
          //btn1.setAttribute("onclick", `btnPaperRecordInTab_Click("${strKeyId}");`);
          (function (strKeyId1) {
            btn1.onclick = function () {
              PaperLstSel.btnReturnClick(strKeyId1);
            };
          })(strKeyId);

          return btn1;
        },
      },
    ];
    const objLayOut = this.divEdit;
    if (objLayOut == null) return;
    const divName4Pager = 'divPager';
    BindTabV2Where(divContainer, arrPaperExObjLst, arrDataColumn, 'paperId', 'TopicPaper');
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(objLayOut, this, divName4Pager);
  }
  public static btnReturnClick(strKeyId: string) {
    // PaperLstSel.objPageEdit.HideDialog_Paper();
    PaperLstSel.objPageEdit.iShowList.BindGvCache(clsRTPaperRelaEN._CurrTabName, strKeyId);
    console.log('btnReturnClick(strKeyId:string) ');
  }
  public async BindTab_vPaperQA(
    divContainer: HTMLDivElement,
    arrPaperExObjLst: Array<clsPaperENEx>,
  ) {
    const strThisFuncName = this.BindTab_vPaperQA.name;
    const objLayOut = this.divEdit;
    if (objLayOut == null) return;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'paperTitle',
        colHeader: '论文标题',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'periodical',
        colHeader: '期刊',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'author',
        colHeader: '作者',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'keyword',
        colHeader: '关键字',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'userName',
        colHeader: '用户',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: '',
        colHeader: '添加',
        text: '添加',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info btn-sm';
          btn1.setAttribute('onclick', `btnPaperQARecordInTab_Click("${strKeyId}");`);
          return btn1;
        },
      },
    ];
    BindTabV2Where(divContainer, arrPaperExObjLst, arrDataColumn, 'paperId', 'TopicPaper');
    //BindTab(o, arrPaperExObjLst, arrDataColumn, "paperId");
    const divName4Pager = 'divPager';
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, divName4Pager);
  }

  //查询论列表
  public async btnPaperQuery_Click() {
    await this.BindGv_vPaper();
  }
  //确定选择的论文 并添加到关系表中
  public btnPaperRecordInTab_Click(strkeyId: string) {
    const divName = this.divEdit;
    //存放Id
    SetHidPaperId(divName, strkeyId);

    //获取论文条件 02代表 小组成员论文数据；
    const strType = GetInputValueInDivObj(divName, 'hidstrType');
    if (strType == '01') {
      //执行添加关系方法
      //this.AddNewRecordSavePaperRela();//所有论文
    } else {
      //小组成员论文；
      //this.AddNewRecordSaveResearchResult();
    }
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvPaperBy(value: string) {
    const divName = this.divEdit;
    SetInputValueInDivObj(divName, 'hidSortvPaperBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvPaperBy(): string {
    const divName = this.divEdit;
    return GetInputValueInDivObj(divName, 'hidSortvPaperBy');
  }
  /* 函数功能:在数据 列表中跳转到某一页 论文列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
<param name = "intPageIndex">页序号</param>
*/
  public IndexPageTwo(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_vPaper();
  }

  public get readUser_q(): string {
    const divName = this.divEdit;
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }
  /*
   * 文献类型Id
   */
  public get literatureTypeId_q(): string {
    const divName = this.divEdit;
    return GetSelectValueInDivObj(divName, 'ddlLiteratureTypeId_q');
  }

  /*
   * 设置排序字段-相当使用ViewState功能  主题论文关系
   */
  public set hidSortvRTPaperRelaBy(value: string) {
    const divName = this.divEdit;
    SetInputValueInDivObj(divName, 'hidSortvRTPaperRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvRTPaperRelaBy(): string {
    const divName = this.divEdit;
    return GetInputValueInDivObj(divName, 'hidSortvRTPaperRelaBy');
  }

  /*
   * 获取当前页序号  -------论文
   */
  public get CurrPageIndexPaper(): number {
    const divName = this.divEdit;
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndexPaper');
  }
  /*
   * 设置当前页序号-------论文
   */
  public set CurrPageIndexPaper(value: number) {
    const divName = this.divEdit;
    SetInputValueInDivObj(divName, 'hidCurrPageIndexPaper', value);
  }

  /* 
   论文
  */
  public async SortByPaper(strSortByFld: string) {
    if (PaperCRUD.sortPaperBy.indexOf(strSortByFld) >= 0) {
      if (PaperCRUD.sortPaperBy.indexOf('Asc') >= 0) {
        PaperCRUD.sortPaperBy = `${strSortByFld} Desc`;
      } else {
        PaperCRUD.sortPaperBy = `${strSortByFld} Asc`;
      }
    } else {
      PaperCRUD.sortPaperBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_vPaper();
  }

  //小组论文写作 公开
  public async btnIsPublicPaper_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }
    this.PublicPaperRecord_pyf(strKeyId);
  }

  public async PublicPaperRecord_pyf(strPaperId: string) {
    //this.keyId = strPaperId;

    try {
      await Paper_GetObjByPaperIdAsync(strPaperId).then((jsonData) => {
        const objPaperEN: clsPaperEN = <clsPaperEN>jsonData;

        // //通过判断数据用户是否是当前登录用户；
        if (objPaperEN.updUser == userStore.getUserId) {
          //判断数据是否已审核
          if (objPaperEN.isSubmit == false) {
            this.PublicRecordSave1();
          } else {
            alert('当前数据已审核！');
            return;
          }
        } else {
          alert('当前数据不是您所添加，不能修改！');
          return;
        }
      });
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 论文公开
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async PublicRecordSave1(): Promise<boolean> {
    const strThisFuncName = this.PublicRecordSave1.name;
    //
    const objPaperEN: clsPaperEN = new clsPaperEN();
    //objPaperEN.SetPaperId(this.keyId;
    //设置提交状态；
    objPaperEN.SetIsPublic(true);
    //this.PutDataToPaperClassAudit(objPaperEN);
    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        const strInfo = `操作成功!`;

        //显示信息框
        alert(strInfo);
        //刷新缓存
        //vPaper_ReFreshThisCache();
        //刷新缓存
        PaperEx_ReFreshThisCacheByIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
        // this.HideDialog_Paper();
        //this.BindGv_vRTPaperRela();
      } else {
        const strInfo = `操作不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('操作失败');
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
  public get topicId(): string {
    return PaperLstSel.GetPropValue('topicId');
  }
}
