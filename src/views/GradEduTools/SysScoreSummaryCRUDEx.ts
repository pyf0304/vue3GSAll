import { SysScoreSummaryCRUD } from '@/viewsBase/GradEduTools/SysScoreSummaryCRUD';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  HideDivInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { SysCommentEx_GetTotalRevalidationAsync } from '@/ts/L3ForWApiExShare/GraduateEdu/clsSysCommentExWApi';
import { clsvSysScoreSummaryEN } from '@/ts/L0Entity/GradEduTools/clsvSysScoreSummaryEN';
import { vSysScoreSummary_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsvSysScoreSummaryWApi';
import { userStore } from '@/store/modulesShare/user';
//import $ from "jquery";
/** SysScoreSummaryCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class SysScoreSummaryCRUDEx extends SysScoreSummaryCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortvSysScoreSummaryBy = "mId";
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
    this.BindGv_vSysScoreSummaryCache(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vSysScoreSummary':
        alert('该类没有绑定该函数：[this.BindGv_vSysScoreSummary_Cache]！');
        //this.BindGv_vSysScoreSummaryCache();;
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
    let objPage: SysScoreSummaryCRUDEx;
    if (SysScoreSummaryCRUD.objPageCRUD == null) {
      SysScoreSummaryCRUD.objPageCRUD = new SysScoreSummaryCRUDEx(divLayout);
      objPage = <SysScoreSummaryCRUDEx>SysScoreSummaryCRUD.objPageCRUD;
    } else {
      objPage = <SysScoreSummaryCRUDEx>SysScoreSummaryCRUD.objPageCRUD;
    }
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);

    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
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
        AccessBtnClickDefault(strCommandName, 'SysScoreSummaryCRUDExEx.btn_Click');

        break;
    }
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
        //建立缓存

        SysScoreSummaryCRUD.sortvSysScoreSummaryBy = 'schoolYear Asc';
        await this.CombinevSysScoreSummaryCondition();

        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vSysScoreSummary(this.thisDivList);

        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        //    reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  //查询
  public async btnQuery_Click() {
    try {
      await this.BindGv_vSysScoreSummary(this.thisDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `查询不成功,${e}.`;
      alert(strMsg);
    }
  }

  //总分核算
  public async btnTotalRevalidation_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strUserId = userStore.getUserId;
    try {
      ShowDivInDivObj(objLayOut, 'divLoading');
      const responseText2 = await SysCommentEx_GetTotalRevalidationAsync(strUserId);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `总分核算成功!`;

        //显示信息框
        alert(strInfo);
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        const strInfo = `总分核算不成功!`;

        //显示信息框
        alert(strInfo);
        HideDivInDivObj(objLayOut, 'divLoading');
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `总分核算异常,${e}.`;
      alert(strMsg);
      HideDivInDivObj(objLayOut, 'divLoading');
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
      <returns>条件串(strWhereCond)</returns>
    */
  public async CombinevSysScoreSummaryCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.userName_q != '') {
        strWhereCond += ` And ${clsvSysScoreSummaryEN.con_UserName} like '%${this.userName_q}%'`;
      }
      if (this.schoolYear_q != null && this.schoolYear_q != '0') {
        strWhereCond += ` And ${clsvSysScoreSummaryEN.con_SchoolYear} = '${this.schoolYear_q}'`;
      }

      //学生 判断角色
      if (userStore.getRoleId == '00620003') {
        strWhereCond += ` and userId ='${userStore.getUserId}'`;
      } else {
        //管理员 教师
        $('#btnTotalRevalidation').show();
        strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;
      }

      strWhereCond += ' order by Score Desc';
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysScoreSummaryCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的对象列表
       (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
     */
  public async BindGv_vSysScoreSummary(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombinevSysScoreSummaryCondition();
    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    let arrvSysScoreSummaryObjLst: Array<clsvSysScoreSummaryEN> = [];
    let arrvSysScoreSummaryObjLst1: Array<clsvSysScoreSummaryEN> = [];
    let arrvSysScoreSummaryObjLst2: Array<clsvSysScoreSummaryEN> = [];
    try {
      arrvSysScoreSummaryObjLst = await vSysScoreSummary_GetObjLstAsync(strWhereCond);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvSysScoreSummaryObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
    //    alert(strMsg);
    //    return;
    //}
    try {
      let strhtml = '';
      // const cateid = 0;
      //$('#tbList tr').remove();

      arrvSysScoreSummaryObjLst1 = arrvSysScoreSummaryObjLst.filter((x) => x.scoreTypeId == '0009');

      for (let i = 0; i < arrvSysScoreSummaryObjLst1.length; i++) {
        const strUserId = arrvSysScoreSummaryObjLst1[i].userId;
        const strUserName: string = arrvSysScoreSummaryObjLst1[i].userName;
        // const strcollegeName: string = arrvSysScoreSummaryObjLst1[i].collegeName;
        const strmajorName: string = arrvSysScoreSummaryObjLst1[i].majorName;
        const strSchoolYear: string = arrvSysScoreSummaryObjLst1[i].schoolYear;
        // const strgradeBaseName: string = arrvSysScoreSummaryObjLst1[i].gradeBaseName;
        const streduClsName: string = arrvSysScoreSummaryObjLst1[i].eduClsName;
        //strIdCurrEduclsstreduClsName: string = "教育大数据";

        let PaperSubviewsS = '0';
        let PersonalViewsS = '0';
        let ExpertViewsS = '0';
        let ConceptsS = '0';
        let ObjectiveFactsS = '0';
        let ObjectiveDataS = '0';
        let OthersCommentS = '0';
        let UserS = '0';
        let ViewpointRatioS = '0';
        let ViewpointConversionS = '0'; //各观点折算分
        let SkillS = '0'; //技能
        let SocialRelationsS = '0'; //社会关系

        let PaperSubviewsR = '0';
        let PersonalViewsR = '0';
        let ExpertViewsR = '0';
        let ConceptsR = '0';
        let ObjectiveFactsR = '0';
        let ObjectiveDataR = '0';
        let OthersCommentR = '0';
        let UserR = '0';
        let ViewpointRatioR = '0'; //各观点占比分
        let TotalScoreR = '0';

        let SkillR = '0'; //技能
        let SocialRelationsR = '0'; //社会关系

        arrvSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter((x) => x.userId == strUserId);
        for (let j = 0; j < arrvSysScoreSummaryObjLst2.length; j++) {
          const strScoreTypeId: string = arrvSysScoreSummaryObjLst2[j].scoreTypeId;
          switch (strScoreTypeId) {
            case '0001':
              PaperSubviewsS = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0002':
              PersonalViewsS = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0003':
              ExpertViewsS = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0004':
              ConceptsS = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0005':
              ObjectiveFactsS = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0006':
              ObjectiveDataS = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0007':
              OthersCommentS = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0008':
              UserS = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0009':
              ViewpointRatioS = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0010': //各观点占比分
              ViewpointRatioR = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;

            case '0011':
              PaperSubviewsR = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0012':
              PersonalViewsR = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0013':
              ExpertViewsR = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0014':
              ConceptsR = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0015':
              ObjectiveFactsR = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0016':
              ObjectiveDataR = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0017':
              OthersCommentR = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0018':
              UserR = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0019': //各观点折算分
              ViewpointConversionS = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0020':
              TotalScoreR = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;

            case '0021':
              SkillS = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0022':
              SkillR = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0023': //各观点折算分
              SocialRelationsS = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0024':
              SocialRelationsR = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;

            default:
              break;
          }
        }
        strhtml += '<tr>';
        strhtml += `<td>${strUserName}</br>${strSchoolYear}</td><td>${streduClsName}</br>${strmajorName}</td>`;

        strhtml += `<td>统计分：${PaperSubviewsS}</br>占比分：${PaperSubviewsR}</td><td>统计分：${PersonalViewsS}</br>占比分：${PersonalViewsR}</td>`;
        strhtml += `<td>统计分：${ExpertViewsS}</br>占比分：${ExpertViewsR}</td><td>统计分：${ConceptsS}</br>占比分：${ConceptsR}</td>`;
        strhtml += `<td>统计分：${ObjectiveFactsS}</br>占比分：${ObjectiveFactsR}</td><td>统计分：${ObjectiveDataS}</br>占比分：${ObjectiveDataR}</td>`;
        strhtml += `<td>统计分：${SkillS}</br>占比分：${SkillR}</td><td>统计分：${SocialRelationsS}</br>占比分：${SocialRelationsR}</td>`;
        strhtml += `<td>统计分：${OthersCommentS}</br>占比分：${OthersCommentR}</td><td>统计分：${ViewpointRatioS}</br>占比分：${ViewpointRatioR}</br>折算分：${ViewpointConversionS}</td>`;

        strhtml += `<td>评分：${UserS}</br>折算分：${UserR}</td><td style="font-weight:bold;color:red;">折算总分：${TotalScoreR}</td>`;

        //strhtml += '<td>' + ExpertViewsS + '</td><td>' + ConceptsS + '</td>';
        //strhtml += '<td>' + ObjectiveFactsS + '</td><td>' + ObjectiveDataS + '</td>';
        //strhtml += '<td>' + OthersCommentS + '</td><td>' + UserS + '</td>';
        //strhtml += '<td>' + ViewpointRatioS + '</td><td>' + TotalScoreS + '</td>';

        strhtml += '</tr>';
      }
      //拼接；
      //$("#tbList").append(strhtml);
      $('#divDataLst').html(strhtml);

      //this.BindTab_vSysScoreSummary(strListDiv, arrvSysScoreSummaryObjLst);
      console.log('完成BindGv_vSysScoreSummary!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
}
