import { Ref } from 'vue';
import { Section_EditEx } from './Section_EditEx';
import { SectionCRUD } from '@/viewsBase/GradEduPaper/SectionCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { clsSectionEN } from '@/ts/L0Entity/GradEduPaper/clsSectionEN';
import { vSectionEx_GetObjExLstByPagerCache } from '@/ts/L3ForWApiEx/GradEduPaper/clsvSectionExWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsvSectionENEx } from '@/ts/L0Entity/GradEduPaper/clsvSectionENEx';
import { vSection_GetRecCountByCondCache } from '@/ts/L3ForWApi/GradEduPaper/clsvSectionWApi';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsvSectionEN } from '@/ts/L0Entity/GradEduPaper/clsvSectionEN';
//import $ from "jquery";
/** SectionCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class SectionCRUD_EditEx extends SectionCRUD implements IShowList {
  public static SectionCRUDEditRef: Ref<any>;

  public static times4TestShowDialog = 0;
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
  public opType = '';
  public static strPaperId = '';
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortvSectionBy = "SectionId";
  /**
   * 每页记录数，在扩展类可以修改
   **/
  public get pageSize(): number {
    return 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    this.BindGv_vSectionCache();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vSection':
        alert('该类没有绑定该函数：[this.BindGv_vSection_Cache]！');
        //this.BindGv_vSectionCache();;
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    console.log(strCommandName, strKeyId);
    let objPage: SectionCRUD_EditEx;
    if (SectionCRUD.objPageCRUD == null) {
      SectionCRUD.objPageCRUD = new SectionCRUD_EditEx(divLayout);
      objPage = <SectionCRUD_EditEx>SectionCRUD.objPageCRUD;
    } else {
      objPage = <SectionCRUD_EditEx>SectionCRUD.objPageCRUD;
    }
    const objPageEdit: Section_EditEx = new Section_EditEx('Section_EditEx', objPage);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPageEdit.btnUpdateRecord_Click(strKeyId);
        }
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'SectionCRUDExEx.btn_Click');

        break;
    }
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGvCache)
   **/
  public async BindGv_vSectionCache() {
    const strThisFuncName = this.BindGv_vSectionCache.name;
    if (SectionCRUD.sortvSectionBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvSectionBy)为空,请检查!(In BindGv_vSectionCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(objLayOut, 'divDataLst');
    if (divDataLst == null) {
      const strMsg = Format('在显示层中,找不到层‘divDataLst’,请检查!(In BindGv_vSectionCache)');
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objvSectionCond = await this.CombinevSectionConditionObj();

    objvSectionCond.SetCondFldValue(clsvSectionEN.con_PaperId, SectionCRUD_EditEx.strPaperId, '=');

    const strWhereCond = JSON.stringify(objvSectionCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvSectionExObjLst: Array<clsvSectionENEx> = [];
    try {
      this.recCount = await vSection_GetRecCountByCondCache(objvSectionCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', objvSectionCond.whereCond);
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objvSectionCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      const intPageCount = this.objPager.GetPageCount(this.recCount, this.pageSize);
      if (intCurrPageIndex == 0) {
        if (intPageCount > 1) intCurrPageIndex = intPageCount;
        else intCurrPageIndex = 1;
        this.SetCurrPageIndex(intCurrPageIndex);
      } else if (intCurrPageIndex > intPageCount) {
        intCurrPageIndex = intPageCount;
        this.SetCurrPageIndex(intCurrPageIndex);
      }

      let strSortFun = (x: any, y: any) => {
        x = x;
        y = y;
        return 0;
      };
      if (SectionCRUD.sortFunStatic != undefined) {
        strSortFun = SectionCRUD.sortFunStatic(SectionCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: SectionCRUD.sortvSectionBy,
        sortFun: strSortFun,
      };
      arrvSectionExObjLst = await vSectionEx_GetObjExLstByPagerCache(objPagerPara);
      console.log('arrvSectionExObjLst:', arrvSectionExObjLst);
    } catch (e: any) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divPager: HTMLDivElement = <HTMLDivElement>document.getElementById('divPager');
    if (this.recCount <= this.pageSize) {
      if (divPager != null) {
        divPager.style.display = 'none';
      }
    } else {
      if (divPager != null) {
        divPager.style.display = 'block';
      }
    }
    if (arrvSectionExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      const divDataLst: HTMLDivElement = <HTMLDivElement>document.getElementById('divDataLst');
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format('{0}', clsSectionEN._CurrTabName);
      const strMsg = Format('根据条件获取的记录数为0!(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(objLayOut, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_vSection(this.thisDivList, arrvSectionExObjLst);
      //console.log("完成BindGv_vSectionCache!");
    } catch (e: any) {
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      this.opType;
      const bolIsSuccess = await this.ShowDialog_Section(this.opType);
      if (bolIsSuccess == false) return;
      console.log('SectionCRUD_EditEx.strPaperId:', SectionCRUD_EditEx.strPaperId);
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();
      this.SetEventFunc();
      SectionCRUD.sortvSectionBy = 'sectionId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vSectionCache();
    } catch (e: any) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_Section() {
    if (SectionCRUD_EditEx.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      SectionCRUD_EditEx.SectionCRUDEditRef.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_Section(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_Section.name;
    if (SectionCRUD_EditEx.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (SectionCRUD_EditEx.SectionCRUDEditRef == null) {
        const strMsg = Format(
          '当前编辑区的SectionCRUDEditRef为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await SectionCRUD_EditEx.SectionCRUDEditRef.value.showDialog();
    }
    this.divLayout = SectionCRUD_EditEx.SectionCRUDEditRef.value.$refs.refDivLayout;
    if (this.divLayout == null) {
      if (SectionCRUD_EditEx.times4TestShowDialog < 2) {
        SectionCRUD_EditEx.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_Section(strOp);
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
      SectionCRUD_EditEx.times4TestShowDialog = 0;
    }
    // if (strOp === 'Add' || strOp === 'AddWithMaxId') {
    //   this.btnSubmitSection = '确认添加';
    //   this.btnCancelSection = '取消添加';
    // } else if (strOp === 'Update') {
    //   this.btnSubmitSection = '确认修改';
    //   this.btnCancelSection = '取消修改';
    // }
    return true;
  }
}
