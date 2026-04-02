import $ from 'jquery';
import { DiscussionSubContentCRUD } from '@/viewsBase/GradEduTools/DiscussionSubContentCRUD';
import { clsPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsPaperReadWriteEN';
import { clsvDiscussionSubContentEN } from '@/ts/L0Entity/GradEduTools/clsvDiscussionSubContentEN';
import { vDiscussionSubContent_GetObjLstByPagerAsync } from '@/ts/L3ForWApi/GradEduTools/clsvDiscussionSubContentWApi';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  HideDivInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';

declare let window: any;
/* PaperSubViewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class MyComments extends DiscussionSubContentCRUD {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvPaperSubViewpointBy: string = "subViewpointId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 50;
  }

  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      const strUserId = userStore.getUserId;
      //strIdCurrEduclsstrRoleId = userStore.getRoleId;
      //1、为下拉框设置数据源,绑定列表数据
      if (strUserId != '') {
        $('#hidUserId').val(strUserId);

        this.hidSortBy = 'updDate Desc';
        // await this.BindGv_PaperComment();
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

  /* 查询
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async btnQuery_Click() {
    try {
      //if ($("#hidQueryStata").val() == "1") {
      //    const gvResult1 = await this.BindGv_PaperComment();
      //} else if ($("#hidQueryStata").val() == "2") {
      //    const gvResult2 = await this.BindGv_PaperSubViewpointComment();
      //} else if ($("#hidQueryStata").val() == "3") {
      //    const gvResult3 = await this.BindGv_ViewpointComment();
      //} else {
      //    const gvResult4 = await this.BindGv_DiscussionTopicsComment();
      //}
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 论文评论
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async li_PaperComment_Click() {
    try {
      // await this.BindGv_PaperComment();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 主题讨论评论
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async li_DiscussionTopicsComment_Click() {
    try {
      await this.BindGv_DiscussionTopicsComment();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public CombineCondition1(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_UpdDate} < '${this.EndDate_q}'`;
      }

      strWhereCond += ` And updUser = '${userStore.getUserId}'`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombineCondition2(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_UpdDate} < '${this.EndDate_q}'`;
      }

      strWhereCond += ` And updUser = '${userStore.getUserId}'`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //主题讨论评论
  public async BindGv_DiscussionTopicsComment() {
    const strWhereCond = await this.CombineCondition1();

    let arrvDiscussionSubContentObjLst: Array<clsvDiscussionSubContentEN> = [];
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    try {
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortBy,
        sortFun: (x, y) => {
          x = x;
          y = y;

          return 0;
        },
      };

      arrvDiscussionSubContentObjLst = await vDiscussionSubContent_GetObjLstByPagerAsync(
        objPagerPara,
      );

      let strhtml = '';
      const cateid = 0;
      //$('#tbList tr').remove();

      for (let i = 0; i < arrvDiscussionSubContentObjLst.length; i++) {
        const strSubContent: string = arrvDiscussionSubContentObjLst[i].subContent;
        //strIdCurrEduclsstrAppraiseScore: number = arrvDiscussionSubContentObjLst[i].AppraiseScore;
        const strtopicsTitle: string = arrvDiscussionSubContentObjLst[i].topicsTitle;
        const strUpdDate: string = arrvDiscussionSubContentObjLst[i].updDate;

        strhtml += `<tr><td>${cateid}</td><td>${strSubContent}</td><td>${strtopicsTitle}</td><td>${strUpdDate}</td></tr>`;
      }
      //拼接；
      //$("#tbList").append(strhtml);
      $('#tbList4').html(strhtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
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
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortBy');
  }

  /*
   * 起始时间
   */
  public get StartDate_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtStartDate_q');
  }
  /*
   * 起始时间
   */
  public set StartDate_q(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtStartDate_q', value);
  }

  /*
   * 结束时间
   */
  public get EndDate_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtEndDate_q');
  }
  /*
   * 结束时间
   */
  public set EndDate_q(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtEndDate_q', value);
  }
}
