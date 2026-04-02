import $ from 'jquery';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsPubFun4Web, doDownLoad, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import {
  PaperEx_GetObjExLstByPagerAsync,
  PaperEx_ReFreshThisCacheByIdCurrEduCls,
} from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
import { clsgs_PaperAttentionEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperAttentionEN';
import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { clsPaperCollectionLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperCollectionLogEN';
import { clsPaperDownloadLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperDownloadLogEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';
import { clsvPaperCountEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperCountEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { clsgs_PaperTypeEN } from '@/ts/L0Entity/RT_Params/clsgs_PaperTypeEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { gs_PaperAttention_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperAttentionWApi';
import { PaperAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import {
  PaperCollectionLog_AddNewRecordAsync,
  PaperCollectionLog_GetObjLstAsync,
  PaperCollectionLog_GetRecCountByCondAsync,
  PaperCollectionLog_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperCollectionLogWApi';
import {
  PaperDownloadLog_AddNewRecordAsync,
  PaperDownloadLog_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperDownloadLogWApi';
import {
  Paper_GetRecCountByCondAsync,
  Paper_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { vPaperCount_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperCountWApi';
import { SysVote_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import {
  gs_PaperType_BindDdl_PaperTypeIdInDivCache,
  gs_PaperType_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsgs_PaperTypeWApi';
import {
  LiteratureType_BindDdl_LiteratureTypeIdInDivCache,
  LiteratureType_GetObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { sysVoteStore } from '@/store/modules/sysVote';

declare let window: any;
/* Paper_List 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Paper_List extends PaperCRUD {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvPaperBy: string = "paperId";

  //专业方向
  public mstrListDivMajorDirection = 'divMajorDirectionDataLst';

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
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //加载页面所需数据源到缓存
        // 为查询区绑定下拉框
        await this.BindDdl4QueryRegion();
        //绑定编辑文献类型

        PaperCRUD.sortPaperBy = 'updDate Desc';
        this.hidSortvXzMajorDirectionBy = 'majorDirectionId Asc';

        $('#hidUserId').val(userStore.getUserId);

        await this.BindGv_vPaper();

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

  public async Refresh_Click() {
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    PaperEx_ReFreshThisCacheByIdCurrEduCls(strIdCurrEducls);
    location.reload();
  }

  public async BindDdl4QueryRegion() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q'); //用户查询区域

    //const objXzMajor_Cond: clsXzMajorEN = new clsXzMajorEN();//查询区域
    //const ddl_idXzMajor_q = await clsDropDownList.BindDdl_XzMajorInvPaper_Cache("ddlIdXzMajor_q", objXzMajor_Cond);//专业查询区域

    await LiteratureType_BindDdl_LiteratureTypeIdInDivCache(objLayOut, 'ddlLiteratureTypeId_q');

    await gs_PaperType_BindDdl_PaperTypeIdInDivCache(objLayOut, 'ddlPaperTypeId_q');
  }

  public async BindDdl_gs_PaperType_Cache(ddlgs_PaperTypeId: string) {
    const objDdl = document.getElementById(ddlgs_PaperTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlgs_PaperTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const objgs_PaperType_Cond: clsgs_PaperTypeEN = new clsgs_PaperTypeEN();
      const arrObjLst_Sel: Array<clsgs_PaperTypeEN> = await gs_PaperType_GetSubObjLstCache(
        objgs_PaperType_Cond,
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

  public async BindDdl_LiteratureTypeId_Cache(ddlLiteratureTypeId: string) {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      let arrObjLst_Sel: Array<clsLiteratureTypeEN> = await LiteratureType_GetObjLstCache();
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
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName4Pager = 'divPager';
    try {
      ShowDivInDivObj(objLayOut, 'divLoading');
      await this.BindGv_vPaper();

      HideDivInDivObj(objLayOut, 'divLoading');
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
  public async liAllPaper_Click(key: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName4Pager = 'divPager';
    console.log(key);
    try {
      await this.BindGv_vPaper();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 本专业
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async liMajor_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    try {
      //绑定专业论文
      await this.BindGv_vPaperMajor();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 本专业方向
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async liMajorDirection_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName4Pager = 'divPager';
    try {
      //绑定方向论文
      await this.BindGv_vPaperDirection();
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, divName4Pager);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //排序事件
  public async PaperSort_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName4Pager = 'divPager';
    try {
      if (this.PaperSort == '1') {
        PaperCRUD.sortPaperBy = 'updDate Desc';
        await this.BindGv_vPaper();
      } else if (this.PaperSort == '2') {
        PaperCRUD.sortPaperBy = 'paperTitle Asc';
        await this.BindGv_vPaper();
      } else if (this.PaperSort == '3') {
        PaperCRUD.sortPaperBy = 'appraiseCount Desc';
        await this.BindGv_vPaper();
      } else if (this.PaperSort == '4') {
        PaperCRUD.sortPaperBy = 'score Desc';
        await this.BindGv_vPaper();
      } else if (this.PaperSort == '5') {
        PaperCRUD.sortPaperBy = 'pcount Desc';
        await this.BindGv_vPaper();
      } else if (this.PaperSort == '6') {
        PaperCRUD.sortPaperBy = 'downloadCount Desc';
        await this.BindGv_vPaper();
      } else if (this.PaperSort == '7') {
        PaperCRUD.sortPaperBy = 'okCount Desc';
        await this.BindGv_vPaper();
      }
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, divName4Pager);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevPaperCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (GetInputValueInDivObj(divName, 'hidTabPaper') == '2') {
        strWhereCond += ` and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
      }
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }
      if (this.updDate_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_UpdDate} like '%${this.updDate_q}%'`;
      }
      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      }
      if (this.User_q != '' && this.User_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.User_q}'`;
      }
      //论文类型
      if (this.PaperTypeId_q != '' && this.PaperTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTypeId} = '${this.PaperTypeId_q}'`;
      }

      //if (this.User_q != "" && this.User_q != "0") {
      //    strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.User_q}'`;
      //}
      //if (this.idXzMajor_q != "" && this.idXzMajor_q != "0") {
      //    strWhereCond += ` And ${clsPaperEN.con_IdXzMajor} = '${this.idXzMajor_q}'`;

      //    //if (this.MajorDirectionId_q != "" && this.MajorDirectionId_q != "0") {
      //    //    strWhereCond += " and paperId in (select paperId from vMajorDirectionPaperRela where majorDirectionId='" + this.MajorDirectionId_q + "')";
      //    //}
      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombinevPaperConditionobj(): clsPaperEN {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    //strWhereCond: string = " 1 = 1 and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";

    const objvPaper_Cond: clsPaperEN = new clsPaperEN();

    //objvPaper_Cond.SetCondFldValue(clsPaperEN.con_IdCurrEduCls, clsPubLocalStorage.idCurrEduCls, "=");
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        objvPaper_Cond.SetCondFldValue(clsPaperEN.con_PaperTitle, this.paperTitle_q, 'like');
      }
      if (this.updDate_q != '') {
        objvPaper_Cond.SetCondFldValue(clsPaperEN.con_UpdDate, this.updDate_q, 'like');
      }
      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        objvPaper_Cond.SetCondFldValue(
          clsPaperEN.con_LiteratureTypeId,
          this.literatureTypeId_q,
          '=',
        );
      }
      if (this.User_q != '' && this.User_q != '0') {
        objvPaper_Cond.SetCondFldValue(clsPaperEN.con_UpdUser, this.User_q, '=');
      }
      //if (this.idXzMajor_q != "" && this.idXzMajor_q != "0") {
      //    objvPaper_Cond.SetCondFldValue(clsPaperEN.con_IdXzMajor, this.idXzMajor_q, "=");
      //}
      //论文类型
      if (this.PaperTypeId_q != '' && this.PaperTypeId_q != '0') {
        objvPaper_Cond.SetCondFldValue(clsPaperEN.con_PaperTypeId, this.PaperTypeId_q, '=');
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineUsersConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objvPaper_Cond;
  }

  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
 */
  public async BindGv_vPaper() {
    const strWhereCond = await this.CombinevPaperCondition();
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

    //strWhereCond2: string = "";
    //const objvPaper_Cond: clsPaperEN = this.CombinevPaperConditionobj();

    ////objvPaper_Cond.SetCondFldValue(clsPaperEN.con_IdXzMajor, this.idXzMajor_q, "=");

    //strWhereCond2 = JSON.stringify(objvPaperEN_Sim);

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvPaperObjLst0: Array<clsPaperENEx> = [];
    // const arrPaperExObjLst: Array<clsPaperENEx> = [];
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

    try {
      //this.recCount = await vPaper_GetRecCountByCondCache(objvPaper_Cond, strIdCurrEducls);
      //console.log("完成计数!");
      //arrvPaperObjLst0 = await vPaper_GetObjLstByPagerCache(objPagerPara, strIdCurrEducls);
      //console.log("完成对象列表获取!");

      this.recCount = await Paper_GetRecCountByCondAsync(strWhereCond);

      arrvPaperObjLst0 = await PaperEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根据条件获取论文视图的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }

    try {
      if (strIdCurrEducls == '00000050') {
        //arrPaperExObjLst = arrvPaperObjLst0.filter(x => x.idCurrEduCls != "00000050");

        //const gvResultPaper = await this.BindList_vPaper("1", arrPaperExObjLst);
        await this.BindList_vPaper('1', arrvPaperObjLst0);
      } else {
        await this.BindList_vPaper('1', arrvPaperObjLst0);
      }

      $('#divPager').show();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定论文视图对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //绑定个性化论文列表
  public async BindList_vPaper(strTypeId: string, arrPaperExObjLst: Array<clsPaperENEx>) {
    const divName = this.getDivName(enumDivType.LayOut_01);

    let arrPaperCollectionLogObjLst: Array<clsPaperCollectionLogEN> = [];
    let arrgs_PaperAttentionObjLst: Array<clsgs_PaperAttentionEN> = [];

    let arrvPaperCountObjLst: Array<clsvPaperCountEN> = [];
    let strhtml = '';
    // const strWhereCond1 = ` 1 =1 and updUser='${userStore.getUserId}' and voteTypeId='01'`;
    const strWhereCond2 = ` 1 =1 and updUser='${userStore.getUserId}'`;

    //strWhereCond3 = " 1 =1 and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
    const strWhereCond3 = await this.CombinevPaperCondition();

    try {
      const strVoteType = '01';
      const strUserId = userStore.getUserId;
      arrPaperCollectionLogObjLst = await PaperCollectionLog_GetObjLstAsync(strWhereCond2);

      arrvPaperCountObjLst = await vPaperCount_GetObjLstAsync(strWhereCond3);

      arrgs_PaperAttentionObjLst = await gs_PaperAttention_GetObjLstAsync(strWhereCond2);

      for (let i = 0; i < arrPaperExObjLst.length; i++) {
        const objPaperEx = arrPaperExObjLst[i];
        const objCount = arrvPaperCountObjLst.find((x) => x.paperId == objPaperEx.paperId); //使用find必须通过if判断不能为空后才能调用属性

        if (objCount != null) {
          strhtml += '<div class="main-w1 fl" ><dl class="detail-list dbpage" ><dd>';
          //strhtml += '<h6><a href="../GradEduEx/PaperDetail?paperId=' + objPaperEx.paperId + '">' + objPaperEx.paperTitle + '</a>';
          //判断引用论文，自研论文
          if (objPaperEx.paperTypeId == '02') {
            //自研论文
            strhtml += `<h6><a href="javascript:void(0)" onclick="xadmin.open('论文查看(原创论文)', '../GradEduEx/PaperDetail?paperId=${objPaperEx.paperId}')"><span class='text-info'>${objPaperEx.paperTitle}(${objPaperEx.paperTypeName})</a>`;
          } else {
            strhtml += `<h6><a href="javascript:void(0)" onclick="xadmin.open('论文查看(引用论文)', '../GradEduEx/PaperDetail?paperId=${objPaperEx.paperId}')">${objPaperEx.paperTitle}(${objPaperEx.paperTypeName})</a>`;
          }

          //if (objCount.attachmentCount > 0) {
          //    strhtml += "<span class=\"btn-2\" style=\"padding-left:50px;\"><a style=\"font-size:15px; color:#f98c51\" href=\"#\" onclick=\"xadmin.open('pdf查看', '../GradEduEx/PdfDetail?paperId=" + objPaperEx.paperId + "')\">pdf查看</a></span>";
          //}

          strhtml += `<span class="btn-2" style="padding-left:50px;"><a style="font-size:15px; color:#f98c51" href="javascript:void(0)" onclick=PaperSubVer_Click("${objPaperEx.paperId}")>pdf论文子观点查看</a></span>`;

          //只有自研论文才有历史版本
          if (objPaperEx.paperTypeId == '02') {
            if (objPaperEx.versionCount > 0 && objPaperEx.versionCount != null) {
              strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('自研论文历史版本', '../GradEduEx/HistoricalVersion?Key=${objPaperEx.paperId}&Type=10')"> ${clsIcon.faCommentDots}历史版本</button >`;
            }
          }

          strhtml += '</h6>';
          strhtml += `<div class="baseinfo"><span><a href="javascript:void(0)">${objPaperEx.author}</a></span><span><a href="javascript:void(0)">${objPaperEx.literatureSources}</a></span>`;
          strhtml += `<span>${objPaperEx.periodical}</span><em>${objPaperEx.keyword}</em>`;
          strhtml += '</div>';
          strhtml += `<div class="abstract">${objPaperEx.paperContent}</div>`;
          strhtml += '<div class="opts"><ul class="opts-count">';
          strhtml += `<li>评论数:<em>${objCount.appraiseCount}</em></li><li>综合评分:<em>${objCount.score}</em></li>`;
          if (objCount.teaScore != null) {
            strhtml += `<li>教师评分:<em>${objCount.teaScore}</em></li>`;
          }
          if (objCount.stuScore != null) {
            strhtml += `<li>学生评分:<em>${objCount.stuScore}</em></li>`;
          }
          strhtml += `<li>读写数:<em>${objCount.pcount}</em></li><li>浏览量:<em>${objPaperEx.browseNumber}</em></li>`;
          //strhtml += '<li>:<em>' + objPaperEx.pcount + '</em></li>';
          const strUserName = await vQxUsersSimStore.getUserName(objPaperEx.updUser);
          if (strUserName != '') {
            strhtml += `<li class="date">编辑用户：${strUserName}</li><li class="date">发表日期：${objPaperEx.updDate}</li></ul>`;
          }

          strhtml += '<ul class="opts-btn">';

          const objAttention = arrgs_PaperAttentionObjLst.find(
            (x) => x.paperId == objPaperEx.paperId,
          );

          if (objAttention == null) {
            strhtml += `<li><a href="javascript:void(0)" onclick=btnAttention_Click("${objPaperEx.paperId}")><i class="layui-icon layui-icon-face-smile-b" style="font-size: 20px;"></i><b>关注</b></a></li>`;
          } else {
            strhtml += `<li><a href="javascript:void(0)" onclick=btnAttention_Click("${objPaperEx.paperId}")><i class="layui-icon layui-icon-face-smile-b" style="font-size: 20px; color: #1E9FFF;"></i><b>已关注</b></a></li>`;
          }

          const objLike = sysVoteStore.getObj(strVoteType, strUserId, objPaperEx.paperId);

          //if (objLike == null) {
          //    strhtml += '<li class="btn-quote">' + objCount.okCount + '<a class="icon-zan" href="javascript:void(0)" onclick=btnAddVote_Click("' + objPaperEx.paperId + '","' + objPaperEx.updUser + '")><i></i>点赞</a></li>';
          //    //console.log("null!");
          //} else {
          //    strhtml += '<li class="btn-quote">' + objCount.okCount + '<a class="icon-zan_" href="javascript:void(0)" onclick=btnAddVote_Click("' + objPaperEx.paperId + '","' + objPaperEx.updUser + '")><i></i>已点赞</a></li>';
          //    //console.log(objLike.paperId);
          //}
          if (objLike == null) {
            strhtml += `<li>${objCount.okCount}<a href="javascript:void(0)" onclick=btnAddVote_Click("${objPaperEx.paperId}","${objPaperEx.updUser}")><i class="layui-icon layui-icon-praise" style="font-size: 24px; "></i>点赞</a></li>`;
            //console.log("null!");
          } else {
            strhtml += `<li>${objCount.okCount}<a href="javascript:void(0)" onclick=btnAddVote_Click("${objPaperEx.paperId}","${objPaperEx.updUser}")><i class="layui-icon layui-icon-praise" style="font-size: 24px; color: #1E9FFF;"></i>已点赞</a></li>`;
            //console.log(objLike.paperId);
          }

          const objCollection = arrPaperCollectionLogObjLst.find(
            (x) => x.paperId == objPaperEx.paperId,
          );
          //const objSysVoteObjLst: Array<clsvSysVoteEN> = [];
          //objSysVoteObjLst = arrvSysVoteObjLst.filter(x => x.updUser == "2020/02/18");

          //if (objCollection == null) {
          //    strhtml += '<li class="btn-collect"><a class="icon-collect" href="javascript:void(0)" onclick=btnAddCollection_Click("' + objPaperEx.paperId + '")><i></i><b>收藏</b></a></li>';
          //    //console.log("null!");
          //} else {
          //    strhtml += '<li class="btn-collect"><a class="icon-collect_" href="javascript:void(0)" onclick=btnAddCollection_Click("' + objPaperEx.paperId + '")><i></i><b>已收藏</b></a></li>';
          //    //console.log(objCollection.paperId);
          //}
          if (objCollection == null) {
            strhtml += `<li><a href="javascript:void(0)" onclick=btnAddCollection_Click("${objPaperEx.paperId}")><i class="layui-icon layui-icon-rate" style="font-size: 22px; "></i><b>收藏</b></a></li>`;
            //console.log("null!");
          } else {
            strhtml += `<li><a href="javascript:void(0)" onclick=btnAddCollection_Click("${objPaperEx.paperId}")><i class="layui-icon layui-icon-rate-solid" style="font-size: 22px; color: #1E9FFF;"></i><b>已收藏</b></a></li>`;
            //console.log(objCollection.paperId);
          }

          if (objCount.attachmentCount > 0) {
            strhtml += `<li>${objCount.downloadCount}<a id="btnDownLoadFile"  href="javascript:void(0)" onclick=btnDownLoadFile_Click("${objPaperEx.paperId}")> <i class="layui-icon layui-icon-download-circle" style="font-size: 24px; "></i><b>点击下载</b></a></li>`;
          } else {
            strhtml +=
              '<li><a id="btnDownLoadFile" href="javascript:void(0)" title="暂无下载文件"><i class="layui-icon layui-icon-download-circle" style="font-size: 24px; color: #1E9FFF;"></i><b>无下载文件</b></a></li>';
          }
        }

        strhtml += '</ul></div>';

        strhtml += '</dd></dl></div>';
      }
      if (strTypeId == '1') {
        if (GetInputValueInDivObj(divName, 'hidTabPaper') == '1') {
          $('#divDataLst').html(strhtml);
        } else {
          $('#divCurrEduClsDataLst').html(strhtml);
        }
      } else if (strTypeId == '2') {
        $('#divDataLstMajor').html(strhtml);
      } else if (strTypeId == '3') {
        $('#divDataLstDirection').html(strhtml);
      }

      //if (strTypeId == "1") {
      //    $("#divDataLst").append(strhtml);
      //} else if (strTypeId == "2") {
      //    $('#divDataLstMajor').append(strhtml);
      //} else if (strTypeId == "3") {
      //    $('#divDataLstDirection').append(strhtml);
      //}
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //绑定本专业
  public async BindGv_vPaperMajor() {
    //strIdCurrEduclsstrListDiv: string = this.mstrListDivMajor;
    let strWhereCond = await this.CombinevPaperCondition();

    //通过登录的用户得到用户专业

    const stridXzMajor = userStore.getIdXzMajor;

    //strWhereCond += ` and paperId in (select paperId from vMajorDirectionPaperRela where idXzMajor= '${stridXzMajor}')`;

    strWhereCond += ` and  idXzMajor= '${stridXzMajor}'`;

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrPaperExObjLst: Array<clsPaperENEx> = [];
    try {
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
      ////绑定方向论文
      //const gvResultDirection = await this.BindGv_vPaperDirection();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根据条件获取本专业的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrPaperExObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    try {
      //this.BindTab_vPaper(strListDiv, arrPaperExObjLst);
      await this.BindList_vPaper('2', arrPaperExObjLst);
      console.log('完成BindGv_vPaperMajor!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定本专业对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  //绑定本方向
  public async BindGv_vPaperDirection() {
    //strIdCurrEduclsstrListDiv: string = this.mstrListDivDirection;
    let strWhereCond = await this.CombinevPaperCondition();

    //通过登录的用户得到用户专业

    const stridXzMajor = userStore.getIdXzMajor;

    strWhereCond += ` and paperId in (select paperId from vMajorDirectionPaperRela where majorDirectionId in (select majorDirectionId from XzMajorDirection where idXzMajor= '${stridXzMajor}'))`;

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrPaperExObjLst: Array<clsPaperENEx> = [];
    try {
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
      const strMsg = `根据条件获取本方向的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrPaperExObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    try {
      //this.BindTab_vPaper(strListDiv, arrPaperExObjLst);
      await this.BindList_vPaper('3', arrPaperExObjLst);
      console.log('完成BindGv_vPaperDirection!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定本方向对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:在数据 列表中跳转到某一页
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
   <param name = "intPageIndex">页序号</param>
 */
  public async IndexPage(intPageIndex: number) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName4Pager = 'divPager';
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);

    await this.BindGv_vPaper();

    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(objLayOut, this, divName4Pager);
  }

  /* 函数功能:在数据 列表中跳转到某一页
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
   <param name = "intPageIndex">页序号</param>
 */
  public IndexPageOne(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    //this.BindGv_vXzMajorDirection();
  }

  /*
   * 修改用户Id
   */
  public set updUser(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidUserId', value);
  }
  /*
   * 修改用户Id
   */
  public get updUser(): string {
    return userStore.getUserId;
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvXzMajorDirectionBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvXzMajorDirectionBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvXzMajorDirectionBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvXzMajorDirectionBy');
  }

  /*
   * 用户
   */
  //public get readUser_q(): string {
  //    return $("#txtReadUser_q").val();
  //}
  public get User_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }

  public get PaperSort(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlPaperSort');
  }

  //  /*
  // * 专业流水号
  //*/
  //  public set idXzMajor_q(value: string) {
  //      $("#ddlIdXzMajor_q").val(value);
  //  }
  //  /*
  //  * 专业流水号
  // */
  //  public get idXzMajor_q(): string {
  //      return $("#ddlIdXzMajor_q").val();
  //  }

  /*
   * 专业方向号
   */
  // public set MajorDirectionId_q(value: string) {
  //     $("#ddlMajorDirectionId_q").val(value);
  // }
  // /*
  // * 专业方向号
  //*/
  // public get MajorDirectionId_q(): string {
  //     return $("#ddlMajorDirectionId_q").val();
  // }

  //添加收藏
  public async btnAddCollection_Click(strPaperId: string) {
    const strThisFuncName = this.btnAddCollection_Click.name;
    const objPaperCollectionLogEN: clsPaperCollectionLogEN = new clsPaperCollectionLogEN();

    objPaperCollectionLogEN.SetPaperId(strPaperId);
    objPaperCollectionLogEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objPaperCollectionLogEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    const strWhereCond = ` updUser='${objPaperCollectionLogEN.updUser}' and paperId='${strPaperId}'`;
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
        const strWhereCond2 = ` paperId='${strPaperId}'`;
        const intCollectionCount = await PaperCollectionLog_GetRecCountByCondAsync(strWhereCond2);
        const objPaperEN: clsPaperEN = new clsPaperEN();
        objPaperEN.SetPaperId(strPaperId);
        objPaperEN.SetCollectionCount(intCollectionCount);

        objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }
        const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
        if (returnBool == true) {
          //await this.BindGv_vPaper();
          this.BindGv_vPaper();
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

  //添加下载量
  public async btnAddDownload_Click(strPaperId: string) {
    const strThisFuncName = this.btnAddDownload_Click.name;

    //this.DivName = "divAddNewRecordSave";
    const objPaperDownloadLogEN: clsPaperDownloadLogEN = new clsPaperDownloadLogEN();

    //this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);

    objPaperDownloadLogEN.SetPaperId(strPaperId);
    objPaperDownloadLogEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objPaperDownloadLogEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    // const strWhereCond = ` 1 =1 and updUser='${objPaperDownloadLogEN.updUser}' and paperId='${strPaperId}'`;
    try {
      const responseText2 = await PaperDownloadLog_AddNewRecordAsync(objPaperDownloadLogEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` paperId='${strPaperId}'`;
        const intDownloadCount = await PaperDownloadLog_GetRecCountByCondAsync(strWhereCond2);
        const objPaperEN: clsPaperEN = new clsPaperEN();
        objPaperEN.SetPaperId(strPaperId);
        objPaperEN.SetDownloadCount(intDownloadCount);

        objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }
        const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
        if (returnBool == true) {
          //await this.BindGv_vPaper();
          this.BindGv_vPaper();
        } else {
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
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加下载量不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  //下载文件
  public btnDownLoadFile_Click(strPaperId: string) {
    //下载函数
    this.GetPaperAttachmentRecord(strPaperId);
    //添加下载记录
    this.btnAddDownload_Click(strPaperId);
  }

  //下载函数
  public async GetPaperAttachmentRecord(strPaperId: string) {
    const strPapeId = strPaperId;
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

  /*
   * 论文类型查询
   */
  public set PaperTypeId_q(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlPaperTypeId_q', value);
  }
  /*
   * 论文类型查询
   */
  public get PaperTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlPaperTypeId_q');
  }

  ////通过专业得到专业方向
  //public async selectXzMajorDirection_Click() {
  //    try {
  //        //clsPrjInfoEN objPrjInfo = clsPrjInfoBL.GetObjByPrjID_Cache(strPrjId);
  //        //strWhereCond = " idXzMajor='" + this.idXzMajor_q + "'";
  //        //const ddl_MajorDirectionId = await this.BindDdl_MajorDirectionId("ddlMajorDirectionId_q", strWhereCond);

  //    }
  //    catch (e:any) {
  //        strIdCurrEduclsstrMsg: string = `获取数据有问题,${e}.`;
  //        alert(strMsg);
  //    }

  //}
}
