import $ from 'jquery';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsPubFun4Web, doDownLoad, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import {
  PaperEx_BindTab_Paper,
  PaperEx_BindTab_Paper4MSReading,
  PaperEx_GetObjExLstByPagerAsync,
  PaperEx_ReFreshThisCacheByIdCurrEduCls,
} from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { clsPaperDownloadLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperDownloadLogEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';
import { clsgs_PaperTypeEN, enumgs_PaperType } from '@/ts/L0Entity/RT_Params/clsgs_PaperTypeEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { PaperAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import {
  PaperDownloadLog_AddNewRecordAsync,
  PaperDownloadLog_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperDownloadLogWApi';
import {
  Paper_GetRecCountByCondAsync,
  Paper_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import {
  gs_PaperType_BindDdl_PaperTypeIdInDivCache,
  gs_PaperType_GetObjLstAsync,
} from '@/ts/L3ForWApi/RT_Params/clsgs_PaperTypeWApi';
import {
  LiteratureType_BindDdl_LiteratureTypeIdInDivCache,
  LiteratureType_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { GetAddressAndPort, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { userStore } from '@/store/modulesShare/user';
import { UserTypeMap } from '@/store/modules/types/userType';

declare let window: any;
/* Paper_QUDI_AllPaper 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Paper_QUDI_AllPaper extends PaperCRUD {
  public static strdivList_AllPaper: string = 'divList_AllPaper';
  //public static mstrSortvPaperBy: string = "paperId";

  //专业方向
  public mstrListDivMajorDirection = 'divMajorDirectionDataLst';

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
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
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
  */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      const objDivQuery = this.getDivName(enumDivType.Query_02);
      if (objDivQuery == null) return;
      // this.getDivName(enumDivType.DataList_04);
      if (userStore.getUserId != '') {
        //加载页面所需数据源到缓存

        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, 'divPager');
          this.bolIsInitShow = true; //
        }

        await this.BindGv_Paper(this.thisDivList);

        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, 'divPager');

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

    await LiteratureType_BindDdl_LiteratureTypeIdInDivCache(objLayOut, 'ddlLiteratureTypeId_q');

    await gs_PaperType_BindDdl_PaperTypeIdInDivCache(objLayOut, 'ddlPaperTypeId_q');

    //const ddl_UserId_q = await this.BindDdl_UserId("ddlUserId_q");
    //const ddl_idXzMajor_q = await this.BindDdl_idXzMajorNum("ddlIdXzMajor_q");
  }

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

  //排序事件
  public async PaperSort_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    try {
      if (this.PaperSort == '1') {
        PaperCRUD.sortPaperBy = 'updDate Desc';
        await this.BindGv_Paper(this.thisDivList);
      } else if (this.PaperSort == '2') {
        PaperCRUD.sortPaperBy = 'paperTitle Asc';
        await this.BindGv_Paper(this.thisDivList);
      } else if (this.PaperSort == '3') {
        PaperCRUD.sortPaperBy = 'appraiseCount Desc';
        await this.BindGv_Paper(this.thisDivList);
      } else if (this.PaperSort == '4') {
        PaperCRUD.sortPaperBy = 'score Desc';
        await this.BindGv_Paper(this.thisDivList);
      } else if (this.PaperSort == '5') {
        PaperCRUD.sortPaperBy = 'pcount Desc';
        await this.BindGv_Paper(this.thisDivList);
      } else if (this.PaperSort == '6') {
        PaperCRUD.sortPaperBy = 'downloadCount Desc';
        await this.BindGv_Paper(this.thisDivList);
      } else if (this.PaperSort == '7') {
        PaperCRUD.sortPaperBy = 'okCount Desc';
        await this.BindGv_Paper(this.thisDivList);
      }
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, 'divPager');
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinePaperCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    if (userStore.getUserType == UserTypeMap.middle_School) {
      strWhereCond += `and ${clsPaperEN.con_PaperTypeId} = '${enumgs_PaperType.MiddleSchoolReading_03}'`;
    } else {
      strWhereCond += `and ${clsPaperEN.con_PaperTypeId} = '${enumgs_PaperType.CitedPapers_01}'`;
    }
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
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
  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombinePaperCondition_EduCLs(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
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

  public CombinePaperConditionobj(): clsPaperEN {
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
  public async BindGv_vPaperBak() {
    const strWhereCond = await this.CombinePaperCondition();
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

    //strWhereCond2: string = "";
    //const objvPaper_Cond: clsPaperEN = this.CombinePaperConditionobj();

    ////objvPaper_Cond.SetCondFldValue(clsPaperEN.con_IdXzMajor, this.idXzMajor_q, "=");

    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    // let arrvPaperObjLst0: Array<clsPaperEN> = [];

    // const objPagerPara: stuPagerPara = {
    //   pageIndex: intCurrPageIndex,
    //   pageSize: this.pageSize,
    //   whereCond: strWhereCond,
    //   orderBy: PaperCRUD.sortPaperBy,
    //   sortFun: (x, y) => {
    //     x = x; y = y;

    //     return 0;
    //   },
    // };

    try {
      //this.recCount = await vPaper_GetRecCountByCondCache(objvPaper_Cond, strIdCurrEducls);
      //console.log("完成计数!");
      //arrvPaperObjLst0 = await vPaper_GetObjLstByPagerCache(objPagerPara, strIdCurrEducls);
      //console.log("完成对象列表获取!");

      this.recCount = await Paper_GetRecCountByCondAsync(strWhereCond);

      // arrvPaperObjLst0 = await PaperEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根据条件获取论文视图的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrPaperExObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    try {
      if (strIdCurrEducls == '00000050') {
        //私有空间
        //arrPaperExObjLst = arrvPaperObjLst0.filter(x => x.idCurrEduCls != "00000050");
        //const gvResultPaper = await this.BindList_vPaper("1", arrPaperExObjLst);
        //const gvResultPaper = await this.BindList_vPaperBak("1", arrvPaperObjLst0);
      } else {
        //const gvResultPaper = await this.BindList_vPaperBak("1", arrvPaperObjLst0);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定论文视图对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public async BindGv_Paper(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    if (divList == null) {
      divList = GetDivObjInDivObj(objLayOut, Paper_QUDI_AllPaper.strdivList_AllPaper);
    }
    const strWhereCond = await this.CombinePaperCondition();

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrPaperObjLst0: Array<clsPaperENEx> = [];

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
      this.recCount = await Paper_GetRecCountByCondAsync(strWhereCond);

      arrPaperObjLst0 = await PaperEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根据条件获取论文视图的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }

    try {
      // if (strIdCurrEducls == '00000050') {
      if (userStore.userType == UserTypeMap.middle_School) {
        //私有空间
        await PaperEx_BindTab_Paper4MSReading(divList, arrPaperObjLst0, this);
      } else {
        await PaperEx_BindTab_Paper(divList, arrPaperObjLst0, this);
      }

      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, 'divPager');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定论文视图对象列表不成功.Error Massage:${e}.`;
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
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    const divList_AllPaper = GetDivObjInDivObj(objLayOut, Paper_QUDI_AllPaper.strdivList_AllPaper);
    await this.BindGv_Paper(divList_AllPaper);

    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(objLayOut, this, 'divPager');
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

  public get User_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }

  public get PaperSort(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlPaperSort');
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
        const returnBool = await Paper_UpdateRecordAsync(objPaperEN);

        if (returnBool == true) {
          //await this.BindGv_Paper();
          const objLayOut = this.getDivName(enumDivType.LayOut_01);
          if (objLayOut == null) return;
          const divList_AllPaper = GetDivObjInDivObj(
            objLayOut,
            Paper_QUDI_AllPaper.strdivList_AllPaper,
          );
          await this.BindGv_Paper(divList_AllPaper);
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
  /**
   * 获取当前组件的divList的层对象
   **/
  public get thisDivList(): HTMLDivElement {
    const divLayOut = this.getDivName(enumDivType.LayOut_01);
    const divList = GetDivObjInDivObj(divLayOut, 'divList_AllPaper');
    return divList;
  }
}
