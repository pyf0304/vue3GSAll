import $ from 'jquery';
import { SysCommentEx_GetTotalRevalidationAsync } from '@/ts/L3ForWApiExShare/GraduateEdu/clsSysCommentExWApi';
import { gs_TotalDataStatisticsEx_GetSubObjLstCacheEx } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import {
  vgs_TotalDataStatisticsEx_GetUserNumObjLstAsync,
  vgs_TotalDataStatisticsEx_GetUser_WeekNumObjLstAsync,
} from '@/ts/L3ForWApiEx/GradEduTools/clsvgs_TotalDataStatisticsExWApi';
import { SysScoreSummaryCRUD } from '@/viewsBase/GradEduTools/SysScoreSummaryCRUD';
import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import { clsvCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherEN';
import { clsgs_TeachingDateEN } from '@/ts/L0Entity/DailyRunning/clsgs_TeachingDateEN';
import { clsgs_TotalDataStatisticsEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataStatisticsEN';
import {
  clsgs_TotalDataTypeEN,
  enumgs_TotalDataType,
} from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataTypeEN';
import { clsgs_UserRelaEN } from '@/ts/L0Entity/GradEduTools/clsgs_UserRelaEN';
import { clsvgs_TotalDataStatisticsEN } from '@/ts/L0Entity/GradEduTools/clsvgs_TotalDataStatisticsEN';
import { clsvSysScoreSummaryEN } from '@/ts/L0Entity/GradEduTools/clsvSysScoreSummaryEN';

import { clsSchoolYearEN } from '@/ts/L0Entity/SysPara/clsSchoolYearEN';

import { vCurrEduClsStu_GetObjLstCache } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import { vCurrEduClsTeacher_GetObjLstCache } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import { gs_TeachingDate_GetObjLstCache } from '@/ts/L3ForWApi/DailyRunning/clsgs_TeachingDateWApi';
import { gs_TotalDataStatistics_ReFreshCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataStatisticsWApi';
import { gs_TotalDataType_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataTypeWApi';
import { gs_UserRela_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_UserRelaWApi';
import { vSysScoreSummary_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTools/clsvSysScoreSummaryWApi';
import { SchoolYear_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clsSchoolYearWApi';

import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import {
  GetButtonObjLstInDivObjN,
  GetCheckedKeyIdsInDivObj,
  GetInputValueInDivObj,
  GetSpanHtmlInDivObj,
  GetTBodyObjInDivObj,
  HideDivInDivObj,
  SetDivHtmlInDivObj,
  SetInputValueInDivObj,
  SetSpanHtmlInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl'; //人员关系图上传
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import gs_UserRela from '@/views/GradEduTools/gs_UserRela';
import TotalDataStatisticsEx from '@/views/GradEduTools/TotalDataStatisticsEx';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { gs_TotalDataTypeEx_GetObjNameByTotalDataType } from '@/ts/L3ForWApiEx/GradEduTools/clsgs_TotalDataTypeExWApi';
import { CurrEduCls_GetObjByIdCurrEduClsCache } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { gs_TeachingDate_EditEx } from '@/viewsShare/DailyRunning/gs_TeachingDate_EditEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Ref } from 'vue';
import { gs_TotalDataStatisticsCRUD } from '@/viewsBase/GradEduTools/gs_TotalDataStatisticsCRUD';

import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { userStore } from '@/store/modulesShare/user';
// import { TotalDataStatisticsEx } from '@/views/GradEduTools/TotalDataStatisticsEx';

// declare function UserRelaCanvasUpload(str1: string, str2: string, str3: string, str4: string): void;
declare let window: any;

export default class SysScoreSummaryNewTotal extends SysScoreSummaryCRUD implements IShowList {
  public static EditRef: Ref<any>;
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static UserRelaCanvasUpload: (
    strUserInfo1Json: any,
    strUserInfo2Json: any,
    strUserRelaJson: any,
    strUserId: string,
  ) => void;
  public static Canvas3: (
    strlabelsJson: string[],
    strdatasetsJson: any,
    strCanvasNo: string,
    strUserIdorCurrEduClsId: string,
  ) => void; //图标方法
  public static GetExportCurrEduclsID: (strIdCurrEduCls: string) => void;

  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvSysScoreSummaryBy: string = "mId";
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
    console.log('InitVarSet in TeacherInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_vgs_TeachingDate]!${strType}${strPara}`);
    //this.BindGv_vgs_TeachingDateCache();
  }
  async BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'vgs_TeachingDate':
      case 'gs_TeachingDate':
        // this.BindGv_vgs_TeachingDateCache();
        await this.ShowEduDataRange();
        break;
      default:
        AccessBindGvDefault(strType);
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
        await this.ShowEduClsInfo();
        await this.ShowEduDataRange();
        //建立缓存
        //
        //const arrSchoolYear_Cache = await SchoolYear_GetObjLstAsync("1=1");//查询区域
        //const arrSysScoreType_Cache = await SysScoreType_GetObjLstAsync("1=1");//查询区域
        //const arrvSysScoreSummary_Cache = await vSysScoreSummary_GetObjLstAsync("1=1");

        //const objSchoolYear_Cond: clsSchoolYearEN = new clsSchoolYearEN();//查询区域

        // const ddlSchoolYear_q = this.BindDdl_SchoolYear('ddlSchoolYear_q'); //查询区域
        //const ddlScoreTypeId_q = SysScoreType_BindDdl_ScoreTypeId_Cache("ddlScoreTypeId_q", objSysScoreType_Cond);//查询区域
        //  const ddlSchoolYear = this.BindDdl_SchoolYear("ddlSchoolYear");//编辑区域
        //const ddlScoreTypeId = SysScoreType_BindDdl_ScoreTypeId_Cache("ddlScoreTypeId", objSysScoreType_Cond);//编辑区域
        SysScoreSummaryCRUD.sortvSysScoreSummaryBy = 'schoolYear Asc';

        //const responseText = await vSysScoreSummary_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {

        //});
        //默认显示智能排序；
        $('#hidQueryStata').val('1');
        $('#li_IntelligenceArray').addClass('btn-info');

        //2、显示无条件的表内容在GridView中
        await this.BindGv_vSysScoreSummary();

        //教学班人员关系展示
        // await this.GetUserRela();

        HideDivInDivObj(objLayOut, 'divLoading');
        //各学生详细内容；
        await this.ExportDetail();
        //教学班各种图形 以及人员关系图 布局；
        await this.GetCurrEduClsUserRela();
        //生成教学班人员智能排序关系图
        await this.Bind_UserRelaOne();
        //生成教学班图表图片数据以及个人数据：；
        await this.BindGv_TotalDataNum();
        //教学班各种图形
        await this.GetBind_AllData();
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }
  public async ShowEduClsInfo() {
    const strCourseId = clsPubLocalStorage.courseId;
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    const objCurrEduCls = await CurrEduCls_GetObjByIdCurrEduClsCache(strIdCurrEducls, strCourseId);
    if (objCurrEduCls == null) return;
    const strCurrEduClsName = objCurrEduCls.eduClsName;
    const strSchoolYear = objCurrEduCls.schoolYear;
    // const strMsg = Format('没有可申请的研究主题。当前教学班:[{0}].', objCurrEduCls?.eduClsName);
    // alert(strMsg);
    SetSpanHtmlInDivObj(
      this.divLayout,
      'spnEduClsName',
      `${strCurrEduClsName}(${strIdCurrEducls})`,
    );
    SetSpanHtmlInDivObj(this.divLayout, 'ShoolYear', `${strSchoolYear}`);

    return;
  }

  //获取教学班时间范围
  public async ShowEduDataRange() {
    // strWhereCond: string = " 1 = 1 and idCurrEduCls=" + clsPubLocalStorage.idCurrEduCls;
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

    const arrgs_TeachingDateObjLst = await gs_TeachingDate_GetObjLstCache(strIdCurrEducls);
    // console.log('获取教学班日期成功');

    //通过教学班得到教学班时间范围；、
    // const responseText1 = await gs_TeachingDate_GetFirstObjAsync(strWhereCond);
    const objgs_TeachingDateEN = arrgs_TeachingDateObjLst.find(
      (x) => x.idCurrEduCls == strIdCurrEducls,
    );
    //    const objgs_TeachingDateEN: clsgs_TeachingDateEN = <clsgs_TeachingDateEN>responseText1;
    if (objgs_TeachingDateEN != null) {
      SetSpanHtmlInDivObj(this.divLayout, 'spnStartDate', objgs_TeachingDateEN.startDate);
      SetSpanHtmlInDivObj(this.divLayout, 'spnEndDate', objgs_TeachingDateEN.endDate);
    }
  }

  /// <summary>
  /// 为下拉框获取数据,从表:[schoolYear]中获取
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DdlBind_Cache)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_SchoolYear(strDdlName: string) {
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      //const responseText = SchoolYear_GetObjLstAsync(strWhereCond).then((jsonData) => {
      const arrSchoolYearObjLst: Array<clsSchoolYearEN> = await SchoolYear_GetObjLstCache();
      BindDdl_ObjLst(
        strDdlName,
        arrSchoolYearObjLst,
        clsSchoolYearEN.con_SchoolYear,
        clsSchoolYearEN.con_SchoolYearName,
        '学年',
      );
      console.log('完成BindDdl_SchoolYearId!');

      console.log('完成BindDdl_SchoolYear!');
    } catch (e: any) {
      const strMsg = `使用缓存对象列表绑定下拉框出错,${e}.`;
      alert(strMsg);
    }
  }

  //关于用户关系数据
  public async GetUserRela() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      let strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
      if (strIdCurrEduCls == '') {
        strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      }
      const objgs_UserRela: gs_UserRela = new gs_UserRela();
      objgs_UserRela.Bind_UserRela(strIdCurrEduCls);
    } catch (e: any) {
      const strMsg = `用户关系获取不成功,${e}.`;
      alert(strMsg);
    }
  }

  //教学班各种图片绑定Bind_AllData
  public async GetBind_AllData() {
    const divLayout = this.getDivName(enumDivType.LayOut_01);
    if (divLayout == null) return;
    let strIdCurrEduCls = GetInputValueInDivObj(divLayout, 'hidIdCurrEduClspara');
    if (strIdCurrEduCls == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    }
    this.divLayout = divLayout;

    const objTotalDataStatisticsEx: TotalDataStatisticsEx = new TotalDataStatisticsEx(
      this.divLayout,
    );
    const hidQueryStata = GetInputValueInDivObj(divLayout, 'hidQueryStata');
    objTotalDataStatisticsEx.queryStata = hidQueryStata;

    //canvas02//绑定教学班 周观点数统计
    objTotalDataStatisticsEx.BindGv_TeaClassNum(strIdCurrEduCls, '02', 'canvas02');

    //教学班周评论数统计图 Canvas5
    //绑定教学班周评论统计
    objTotalDataStatisticsEx.BindChart_TeaClassComment(strIdCurrEduCls, '05', 'canvas05');
    //教学班周均分趋势图 Canvas4
    //获取教学班周教师打分平均分
    objTotalDataStatisticsEx.BindGv_AVGTeaScore(strIdCurrEduCls, '04', 'canvas04');
    //用户周评论数统计图 canvas06
    //绑定当前教学班用户周期评论数据
    objTotalDataStatisticsEx.BindChart_UserCommentNum(strIdCurrEduCls, '06', 'canvas06');
    //用户周讨论回答统计图canvas07
    //绑定当前教学班用户讨论回答统计数据
    objTotalDataStatisticsEx.BindChart_UserDiscussNum(strIdCurrEduCls, '07', 'canvas07');
  }
  catch(e: any) {
    const strMsg = `用户关系获取不成功,${e}.`;
    alert(strMsg);
  }

  //同步总数据统计
  public async btnSynUserRelaNum_Click() {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    // try {
    //   let strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
    //   if (strIdCurrEduCls == '') {
    //     strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    //   }
    //   const objgs_UserRela: gs_UserRela = new gs_UserRela();
    //   objgs_UserRela.btnSynUserRelaNum_Click(strIdCurrEduCls);
    // } catch (e:any) {
    //   const strMsg = `用户关系获取不成功,${e}.`;
    //   alert(strMsg);
    // }
  }
  //保存当前排列关系图
  public async btnSaveUserRela_Click(strUserRelax_y: any) {
    console.log(strUserRelax_y);
    // const divName = this.getDivName(enumDivType.LayOut_01);
    // try {
    //   let strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
    //   if (strIdCurrEduCls == '') {
    //     strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    //   }
    //   const objgs_UserRela: gs_UserRela = new gs_UserRela();
    //   objgs_UserRela.btnSaveUserRela_Click(strUserRelax_y, strIdCurrEduCls);
    // } catch (e:any) {
    //   const strMsg = `用户关系获取不成功,${e}.`;
    //   alert(strMsg);
    // }
  }

  public async GetCurrEduClsUserRela() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    try {
      let strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
      if (strIdCurrEduCls == '') {
        strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      }

      let strhtmlPic = '';
      //服务器展示

      //本地展示；

      //教学班人员关系图
      let strAddressAndPortfull = `${GetAddressAndPort()}UploadFiles/UserCanvasPic/${strIdCurrEduCls}/canvas03.png`;
      //strhtmlPic += '<div class="info" id="UserRelaSingle"  style="position:fixed;margin-top:200px;"><div class="panel-heading title btn-1"><i class="fa fa-bar-chart fa-lg" style = "padding-right: 5px;" > </i>用户成员关系图<span style="color:crimson;line-height:40px;">(提示：该图表示当前教学班中学生用户之间的关系数据,例如观点参与、问题的讨论等等！)</span></div>';
      strhtmlPic +=
        '<div class="info" id="UserRelaSingle"  style="display:none;"><div class="panel-heading title btn-1"><i class="fa fa-bar-chart fa-lg" style = "padding-right: 5px;" > </i>用户成员关系图<span style="color:crimson;line-height:40px;font-size:14px;">(提示：该图表示当前教学班中学生用户之间的关系数据,例如观点参与、问题的讨论等等！)</span></div>';
      strhtmlPic += `<br/>&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" alt="" id="txtImgPathcanvas03" style="width:97%;"/></div>`;

      //教学班用户周观点数统计图
      strAddressAndPortfull = `${GetAddressAndPort()}UploadFiles/UserCanvasPic/${strIdCurrEduCls}/${strIdCurrEduCls}.png`;
      strhtmlPic += `<div id="div${strIdCurrEduCls}" class="info"><div class="panel-heading title btn-1"><i class="fa fa-bar-chart fa-lg" style = "padding-right: 5px;" > </i>教学班用户周观点数统计图<span style="color:crimson;line-height:40px;font-size:14px;">(提示：该图表示以用户为主体,展示当前教学班所有用户每周观点统计数量,能够具体看到学生每周观点数量！)</span></div>`;
      strhtmlPic += `<br/>&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" alt="" id="txtImgPath${strIdCurrEduCls}" style="width:97%;"/></div>`;

      //教学班周观点数统计图
      strAddressAndPortfull = `${GetAddressAndPort()}UploadFiles/UserCanvasPic/${strIdCurrEduCls}/canvas02.png`;
      strhtmlPic += `<div id="divCanvas02" class="info"><div class="panel-heading title btn-1"><i class="fa fa-bar-chart fa-lg" style = "padding-right: 5px;" > </i>教学班周观点数统计图<span style="color:crimson;line-height:40px;font-size:14px;">(提示：该图表示当前教学班每周总体观点数量的一个趋势图,能够清楚看到当前班观点数的分布！)</span></div>`;
      strhtmlPic += `<br/>&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" alt="" id="txtImgPath${strIdCurrEduCls}" style="width:97%;"/></div>`;
      //教学班周均分趋势图
      strAddressAndPortfull = `${GetAddressAndPort()}UploadFiles/UserCanvasPic/${strIdCurrEduCls}/canvas04.png`;
      strhtmlPic +=
        '<div id="divCanvas04" class="info"><div class="panel-heading title btn-1"><i class="fa fa-bar-chart fa-lg" style = "padding-right: 5px;" > </i>教学班周均分趋势图<span style="color:crimson;line-height:40px;font-size:14px;">(提示：该图以教学班为主体展示每周平均分趋势图！)</span></div>';
      strhtmlPic += `<br/>&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" alt="" id="txtImgPath${strIdCurrEduCls}" style="width:97%;"/></div>`;
      //教学班周评论数统计图
      strAddressAndPortfull = `${GetAddressAndPort()}UploadFiles/UserCanvasPic/${strIdCurrEduCls}/canvas05.png`;
      strhtmlPic +=
        '<div id="divCanvas05" class="info"><div class="panel-heading title btn-1"><i class="fa fa-bar-chart fa-lg" style = "padding-right: 5px;" > </i>教学班周评论数统计图<span style="color:crimson;line-height:40px;font-size:14px;">(提示：该图以教学班为主体,展示每周评论数量的统计趋势图！)</span></div>';
      strhtmlPic += `<br/>&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" alt="" id="txtImgPath${strIdCurrEduCls}" style="width:97%;"/></div>`;
      //用户周评论数统计图
      strAddressAndPortfull = `${GetAddressAndPort()}UploadFiles/UserCanvasPic/${strIdCurrEduCls}/canvas06.png`;
      strhtmlPic +=
        '<div id="divCanvas06" class="info"><div class="panel-heading title btn-1"><i class="fa fa-bar-chart fa-lg" style = "padding-right: 5px;" > </i>用户周评论数统计图<span style="color:crimson;line-height:40px;font-size:14px;">(提示：该图以用户为主体,展示当前教学班每周各用户评论数量的统计趋势图！)</span></div>';
      strhtmlPic += `<br/>&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" alt="" id="txtImgPath${strIdCurrEduCls}" style="width:97%;"/></div>`;
      //用户周讨论回答统计图
      strAddressAndPortfull = `${GetAddressAndPort()}UploadFiles/UserCanvasPic/${strIdCurrEduCls}/canvas07.png`;
      strhtmlPic +=
        '<div id="divCanvas07" class="info"><div class="panel-heading title btn-1"><i class="fa fa-bar-chart fa-lg" style = "padding-right: 5px;" > </i>用户周讨论回答统计图<span style="color:crimson;line-height:40px;font-size:14px;">(提示：该图以用户为主体,展示当前教学班每周各用户关于问题回答、讨论数量的统计趋势图！)</span></div>';
      strhtmlPic += `<br/>&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" alt="" id="txtImgPath${strIdCurrEduCls}" style="width:97%;"/></div>`;
      SetDivHtmlInDivObj(divName, 'CurrEduclsUserRela', strhtmlPic);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  //绑定用户关系图
  public async Bind_UserRelaOne() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
    if (strIdCurrEduCls == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    }

    let arrvCurrEduClsStuObjLst: Array<clsvCurrEduClsStuEN> = [];
    let arrvCurrEduClsTeacherObjLst: Array<clsvCurrEduClsTeacherEN> = [];

    let arrgs_UserRelaObjLst: Array<clsgs_UserRelaEN> = [];

    try {
      //教学班学生
      arrvCurrEduClsStuObjLst = await vCurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
      console.log('1');

      //教学班教师
      arrvCurrEduClsTeacherObjLst = await vCurrEduClsTeacher_GetObjLstCache(strIdCurrEduCls);
      console.log('2');

      //用户关系
      arrgs_UserRelaObjLst = await gs_UserRela_GetObjLstCache(strIdCurrEduCls);
      console.log('3');

      //计算出教师圆形坐标
      const t_nodeSize = arrvCurrEduClsTeacherObjLst.length;
      const t_center_x = 600;
      const t_center_y = 400;
      const t_radius = 60;
      let t_ii, t_i;
      const t_layouts: any = [];

      // if ($("#hidQueryStata").val() == "1") {
      for (t_ii = t_i = 0; t_i < t_nodeSize; t_ii = ++t_i) {
        const x = t_center_x + t_radius * Math.sin((2 * Math.PI * t_ii) / t_nodeSize);
        const y = t_center_y + t_radius * Math.cos((2 * Math.PI * t_ii) / t_nodeSize);

        t_layouts.push({ x, y });
      }

      let strUserInfo1 = '';
      let strUserInfo2 = '';
      let strUserRela = '';

      let j = 0;
      strUserInfo1 += '[';
      strUserInfo2 += '[';

      //教学班教师
      for (let i = 0; i < arrvCurrEduClsTeacherObjLst.length; i++) {
        const strUserId = arrvCurrEduClsTeacherObjLst[i].teacherId;
        const strUserName = arrvCurrEduClsTeacherObjLst[i].teacherName;
        const strcolor = this.getRandomColor();

        strUserInfo1 += `{ "id": "${strUserId}", "name": "${strUserName}", "attributes": { "modularity_class": ${j} } },`;

        const f_x = t_layouts[i].x;
        const f_y = t_layouts[i].y;
        strUserInfo2 += `{id: ${j},name: '${strUserName}',itemStyle: { normal: { color: '${strcolor}' } },symbolSize: [42, 42],x:${f_x},y:${f_y}},`;

        j++;
      }

      //计算出学生圆形坐标
      const s_nodeSize = arrvCurrEduClsStuObjLst.length;
      const s_center_x = 600;
      const s_center_y = 400;
      const s_radius = 330;
      let s_ii, s_i;
      const s_layouts: any = [];

      for (s_ii = s_i = 0; s_i < s_nodeSize; s_ii = ++s_i) {
        const x = s_center_x + s_radius * Math.sin((2 * Math.PI * s_ii) / s_nodeSize);
        const y = s_center_y + s_radius * Math.cos((2 * Math.PI * s_ii) / s_nodeSize);

        s_layouts.push({ x, y });
      }

      //教学班学生
      for (let i = 0; i < arrvCurrEduClsStuObjLst.length; i++) {
        const strUserId = arrvCurrEduClsStuObjLst[i].stuId;
        const strUserName = arrvCurrEduClsStuObjLst[i].stuName;
        const strcolor = this.getRandomColor();

        strUserInfo1 += `{ "id": "${strUserId}", "name": "${strUserName}", "attributes": { "modularity_class": ${j} } },`;

        //   if ($("#hidQueryStata").val() == "1") {
        const f_x = s_layouts[i].x;
        const f_y = s_layouts[i].y;
        strUserInfo2 += `{id: ${j},name: '${strUserName}',itemStyle: { normal: { color: '${strcolor}' } },symbolSize: [42, 42],x:${f_x},y:${f_y}},`;

        j++;
      }
      strUserInfo1 = strUserInfo1.substring(0, strUserInfo1.length - 1);
      strUserInfo2 = strUserInfo2.substring(0, strUserInfo2.length - 1);

      strUserInfo1 += ']';
      strUserInfo2 += ']';

      const strUserInfo1Json = eval(strUserInfo1);
      // const strUserInfo1Json = strUserInfo1;
      const strUserInfo2Json = eval(strUserInfo2);
      // const strUserInfo2Json = strUserInfo2;

      //用户关系数据
      //如果用户关系有数据那么就显示关系图
      if (arrgs_UserRelaObjLst.length > 0) {
        strUserRela += '[';
        for (let i = 0; i < arrgs_UserRelaObjLst.length; i++) {
          const strUserId = arrgs_UserRelaObjLst[i].userId;
          const strUserRelaId = arrgs_UserRelaObjLst[i].userRelaId;
          strUserRela += `{ "id": "${i}", "source": "${strUserId}", "target": "${strUserRelaId}" },`;
        }
        strUserRela = strUserRela.substring(0, strUserRela.length - 1);
        strUserRela += ']';
        const strUserRelaJson = eval(strUserRela);
        // const strUserRelaJson = strUserRela;

        const strSeUserId = '';
        SysScoreSummaryNewTotal.UserRelaCanvasUpload(
          strUserInfo1Json,
          strUserInfo2Json,
          strUserRelaJson,
          strSeUserId,
        );
      }
      //else {
      //    //如果没用户关系数据就去同步
      //    const gvResult1 = await this.btnSynUserRelaNum_Click();
      //}
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async GetExportCurrEduclsID(strIdCurrEducls: string) {
    SysScoreSummaryNewTotal.GetExportCurrEduclsID(strIdCurrEducls);
  }

  //查询
  public async btnQuery_Click() {
    try {
      await this.BindGv_vSysScoreSummary();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `查询不成功,${e}.`;
      alert(strMsg);
    }
  }

  //学生总分核算
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
    const divName = this.getDivName(enumDivType.LayOut_01);
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

        const strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
        if (strIdCurrEduCls == '') {
          strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;
          $('#hidIdCurrEduClspara').val(clsPubLocalStorage.idCurrEduCls);
        } else {
          strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`;
        }

        //strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;
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
  public async BindGv_vSysScoreSummary() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    const strListDiv = GetTBodyObjInDivObj(objLayOut, 'divDataLst');
    if (strListDiv == null) return;
    let IdCurrEduCls = GetInputValueInDivObj(objLayOut, 'hidIdCurrEduClspara');
    if (IdCurrEduCls == '') {
      IdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    }

    const objgs_TotalDataStatistics_Cond = await this.Combinegs_TotalConditionObj();
    //strIdCurrEduclsstrIdCurrEduCls = $("#hidIdCurrEduClspara").val();;

    // const strWhereCond = await this.CombinevSysScoreSummaryCondition();
    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    let arrvSysScoreSummaryObjLst: Array<clsvSysScoreSummaryEN> = [];
    let arrvSysScoreSummaryObjLst1: Array<clsvSysScoreSummaryEN> = [];
    let arrvSysScoreSummaryObjLst2: Array<clsvSysScoreSummaryEN> = [];
    //教学班学生
    let arrvCurrEduClsObjLst: Array<clsvCurrEduClsStuEN> = [];
    //观点数量统计
    let arrgs_TotalDataStatisticsObjLst0: Array<clsgs_TotalDataStatisticsEN> = [];
    let arrgs_TotalDataStatisticsObjLst: Array<clsgs_TotalDataStatisticsEN> = [];
    //观点类型
    let arrObjLst_Sel: Array<clsgs_TotalDataTypeEN> = [];
    try {
      arrvSysScoreSummaryObjLst = await vSysScoreSummary_GetObjLstCache(IdCurrEduCls);

      //strWhereCond1 = " 1=1 ";
      //strIdCurrEduclshidIdCurrEduCls = $("#hidIdCurrEduClspara").val();
      //if (hidIdCurrEduCls == "") {

      //    strWhereCond1 += " And idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
      //}
      //else {
      //    strWhereCond1 += " And idCurrEduCls='" + hidIdCurrEduCls + "'";

      //}

      // 获取教学班学生数据；
      arrvCurrEduClsObjLst = await vCurrEduClsStu_GetObjLstCache(IdCurrEduCls);

      ////获取各类型观点数量数据；
      //const responseObjLst4 = await gs_TotalDataStatisticsEx_GetObjLstEx(strWhereCond1).then((jsonData) => {
      //    arrgs_TotalDataStatisticsObjLst0 = <Array<clsgs_TotalDataStatisticsEN>>jsonData;
      //});

      await gs_TotalDataStatisticsEx_GetSubObjLstCacheEx(
        objgs_TotalDataStatistics_Cond,
        IdCurrEduCls,
      ).then((jsonData) => {
        arrgs_TotalDataStatisticsObjLst0 = <Array<clsgs_TotalDataStatisticsEN>>jsonData;
      });

      // console.log('完成对象列表获取!');

      //类型数据；

      arrObjLst_Sel = await gs_TotalDataType_GetObjLstCache();
      arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.totalDataTypeId != '02');
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
      let strIdCurrEduCls = '';
      let strhtml = '';
      // const cateid = 0;
      let CountTotal = 0; //存放教学班学生人数；
      //$('#tbList tr').remove();

      arrvCurrEduClsObjLst;

      arrvSysScoreSummaryObjLst1 = arrvSysScoreSummaryObjLst.filter((x) => x.scoreTypeId == '0009');
      let strFullNajorName = '专业：';
      let strSchoolYearName = '学年：';
      for (let i = 0; i < arrvSysScoreSummaryObjLst1.length; i++) {
        const strUserId = arrvSysScoreSummaryObjLst1[i].userId;
        const strUserName: string = arrvSysScoreSummaryObjLst1[i].userName;
        // const strcollegeName: string = arrvSysScoreSummaryObjLst1[i].collegeName;
        const strmajorName: string = arrvSysScoreSummaryObjLst1[i].majorName;
        const strSchoolYear: string = arrvSysScoreSummaryObjLst1[i].schoolYear;
        // const strgradeBaseName: string = arrvSysScoreSummaryObjLst1[i].gradeBaseName;
        const streduClsName: string = arrvSysScoreSummaryObjLst1[i].eduClsName;
        //教学班
        if (GetSpanHtmlInDivObj(objLayOut, 'spnEduClsName') == '') {
          const strEduClsFullName = `教学班：${streduClsName}`;
          SetSpanHtmlInDivObj(objLayOut, 'spnEduClsName', strEduClsFullName);
        }
        //学年
        if (strSchoolYear != '') {
          //检索值没有出现，那么则拼接；
          if (strSchoolYearName.indexOf(strSchoolYear) == -1) {
            strSchoolYearName += `${strSchoolYear},`;
          }
        }
        //专业不能为空
        if (strmajorName != '') {
          //检索值没有出现，那么则拼接；
          if (strFullNajorName.indexOf(strmajorName) == -1) {
            strFullNajorName += `${strmajorName},`;
          }
        }
        //相等说明循环完毕，那么直接存放数据
        if (i + 1 == arrvSysScoreSummaryObjLst1.length) {
          $('#majorName').html(strFullNajorName);
          $('#ShoolYear').html(strSchoolYearName);
        }

        strIdCurrEduCls = arrvSysScoreSummaryObjLst1[i].idCurrEduCls;
        //strIdCurrEduclsstreduClsName: string = "教育大数据";

        //判断该成员是否是教学班学生，只有学生才显示数据；
        const arrvCurrEduStuObjList = arrvCurrEduClsObjLst.filter(
          (x) => x.idCurrEduCls == strIdCurrEduCls && x.stuId == strUserId,
        );
        if (arrvCurrEduStuObjList.length > 0) {
          //判断教学班
          const arrvCurrEduObjList = arrvCurrEduClsObjLst.filter(
            (x) => x.idCurrEduCls == strIdCurrEduCls,
          );
          CountTotal = arrvCurrEduObjList.length; //获取教学班人数

          let PaperSubviewsS = 0;
          let NumberPaperSubviewsS = 0; //教师子观点名次
          let PersonalViewsS = 0;
          let NumberPersonalViewsS = 0; //个人观点名次
          let ExpertViewsS = 0;
          let NumberExpertViewsS = 0; //专家观点名次
          let ConceptsS = 0;
          let NumberConceptsS = 0; //概念名次
          let ObjectiveFactsS = 0;
          let NumberObjectiveFactsS = 0; //客观事实名次
          let ObjectiveDataS = 0;
          let NumberObjectiveDataS = 0; //客观数据名次

          let OthersCommentS = 0;
          // let UserS = '0';
          let ViewpointRatioS = 0;
          // const ViewpointConversionS = 0; //各观点折算分
          let SkillS = 0; //技能
          let NumberSkillS = 0; //技能名次
          let SocialRelationsS = 0; //社会关系
          let NumberSocialRelationsS = 0; //社会关系名次
          let qa_AnswerS = 0; //问题回答
          let Numberqa_AnswerS = 0; //问题回答名次

          //讨论教师总打分 、 评价教师总打分；
          let AnswerTotal = 0;
          let SysCommentTotal = 0;
          //标志教师总打分
          let TagTotal = 0;

          let PaperSubviewsR = 0; //生分数 以下参数雷同；都是存放生分数；
          let NumberPaperSubviewsR = 0; //学生子观点名次
          let PersonalViewsR = 0;
          let NumberPersonalViewsR = 0; //个人观点名次
          let ExpertViewsR = 0;
          let NumberExpertViewsR = 0; //专家观点名次
          let ConceptsR = 0;
          let NumberConceptsR = 0; //概念名次
          let ObjectiveFactsR = 0;
          let NumberObjectiveFactsR = 0; //客观事实名次
          let ObjectiveDataR = 0;
          let NumberObjectiveDataR = 0; //客观数据名次

          // const OthersCommentR = 0;
          // const UserR = '0';
          //strIdCurrEduclsViewpointRatioR: string = "0";//各观点占生分数
          //strIdCurrEduclsTotalScoreR: string = "0"; //生分数

          let SkillR = 0; //技能
          let NumberSkillR = 0; //技能名次
          let SocialRelationsR = 0; //社会关系
          let NumberSocialRelationsR = 0; //社会关系名次
          let qa_AnswerR = 0; //生分数  问题回答
          let Numberqa_AnswerR = 0; //问题回答名次

          let stuScoreTotal = 0; //生分 总分

          //各类型观点数量数据参数；
          // let PaperCount = 0; //01
          let PaperViewpointCount = 0; //03
          let ViewpointCount = 0; //04
          let ExpertViewpointCount = 0; //05
          let ConceptCount = 0; //06
          let TopicObjectiveCount = 0; //07
          let ObjectiveBasisCount = 0; //08
          let SkillCount = 0; //09
          let SysSocialCount = 0; //10
          let QaAnswerCount = 0; //11

          //得到各观点数据类型数据、
          for (let k = 0; k < arrObjLst_Sel.length; k++) {
            // const TypeName = arrObjLst_Sel[k].totalDataTypeName;
            const strTypeId = arrObjLst_Sel[k].totalDataTypeId;

            //查询过滤等于ID数据；

            arrgs_TotalDataStatisticsObjLst = arrgs_TotalDataStatisticsObjLst0.filter(
              (x) => x.totalDataTypeId == strTypeId && x.dataUser == strUserId,
            );

            if (arrgs_TotalDataStatisticsObjLst.length > 0) {
              //存放数据各类型的数据统计；

              switch (strTypeId) {
                case enumgs_TotalDataType.Paper_01:
                  // PaperCount = arrgs_TotalDataStatisticsObjLst.length;
                  break;
                case enumgs_TotalDataType.PaperSubViewpoint_03:
                  PaperViewpointCount = arrgs_TotalDataStatisticsObjLst.length;
                  break;
                case enumgs_TotalDataType.Viewpoint_04:
                  ViewpointCount = arrgs_TotalDataStatisticsObjLst.length;
                  break;
                case enumgs_TotalDataType.Viewpoint_05:
                  ExpertViewpointCount = arrgs_TotalDataStatisticsObjLst.length;
                  break;
                case enumgs_TotalDataType.Concept_06:
                  ConceptCount = arrgs_TotalDataStatisticsObjLst.length;
                  break;
                case enumgs_TotalDataType.TopicObjective_07:
                  TopicObjectiveCount = arrgs_TotalDataStatisticsObjLst.length;
                  break;
                case enumgs_TotalDataType.TopicObjective_08:
                  ObjectiveBasisCount = arrgs_TotalDataStatisticsObjLst.length;
                  break;
                case enumgs_TotalDataType.SysSkill_09:
                  SkillCount = arrgs_TotalDataStatisticsObjLst.length;
                  break;
                case enumgs_TotalDataType.SysSocialRelations_10:
                  SysSocialCount = arrgs_TotalDataStatisticsObjLst.length;
                  break;
                case enumgs_TotalDataType.qa_Answer_11:
                  QaAnswerCount = arrgs_TotalDataStatisticsObjLst.length;
                  break;

                default:
                  break;
              }
            }
          }

          arrvSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) => x.userId == strUserId,
          );
          for (let j = 0; j < arrvSysScoreSummaryObjLst2.length; j++) {
            const strScoreTypeId: string = arrvSysScoreSummaryObjLst2[j].scoreTypeId;
            switch (strScoreTypeId) {
              case '0001':
                PaperSubviewsS = arrvSysScoreSummaryObjLst2[j].score;
                //子观点

                break;
              case '0002':
                PersonalViewsS = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0003':
                ExpertViewsS = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0004':
                ConceptsS = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0005':
                ObjectiveFactsS = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0006':
                ObjectiveDataS = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0007':
                OthersCommentS = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0008':
                // UserS = arrvSysScoreSummaryObjLst2[j].score.toString();
                break;
              case '0009':
                ViewpointRatioS = arrvSysScoreSummaryObjLst2[j].score;
                break;

              case '0021': //技能；
                SkillS = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0023': //社会关系
                SocialRelationsS = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0025': //问题回答
                qa_AnswerS = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0041': //讨论教师打分
                AnswerTotal = arrvSysScoreSummaryObjLst2[j].score;
                break;
              case '0042': //评价教师打分
                SysCommentTotal = arrvSysScoreSummaryObjLst2[j].score;
                break;
              case '0045': //标志教师打分
                TagTotal = arrvSysScoreSummaryObjLst2[j].score;
                break;

              case '0031': //从这里开始 得到是学生评价分汇总
                PaperSubviewsR = arrvSysScoreSummaryObjLst2[j].score;

                //名次 学生

                break;
              case '0032':
                PersonalViewsR = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0033':
                ExpertViewsR = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0034':
                ConceptsR = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0035':
                ObjectiveFactsR = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0036':
                ObjectiveDataR = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0037':
                SkillR = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0038':
                SocialRelationsR = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0039': //问题回答 生分
                qa_AnswerR = arrvSysScoreSummaryObjLst2[j].score;

                break;
              case '0040': //生分 总分
                stuScoreTotal = arrvSysScoreSummaryObjLst2[j].score;
                break;
              default:
                break;
            }
          }

          //得到标志名次，通过标志教师打分分数；
          //标记名次
          let TagIndexNumber = 0;
          let arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0045' && x.score > TagTotal,
          );
          if (TagTotal == 0) {
            TagIndexNumber = CountTotal;
          } else {
            TagIndexNumber = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }

          //得到讨论名次，通过分数；
          let qaIndexNumber = 0;
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0041' && x.score > AnswerTotal,
          );
          if (AnswerTotal == 0) {
            qaIndexNumber = CountTotal;
          } else {
            qaIndexNumber = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }

          //得到评价名次，通过分数；
          let CommentIndexNumber = 0;
          const arrSysScoreSummaryObjLst4 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0042' &&
              x.score > SysCommentTotal,
          );
          if (SysCommentTotal == 0) {
            CommentIndexNumber = CountTotal;
          } else {
            CommentIndexNumber = arrSysScoreSummaryObjLst4.length + 1; //加1代表当前排名；
          }

          //师分、总排名
          let TeaIndexNumber = 0;
          const arrSysScoreSummaryObjLst1 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0009' &&
              x.score > ViewpointRatioS,
          );
          if (ViewpointRatioS == 0) {
            TeaIndexNumber = CountTotal;
          } else {
            TeaIndexNumber = arrSysScoreSummaryObjLst1.length + 1; //加1代表当前排名；
          }

          //生分 、总排名
          let StuIndexNumber = 0;
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0040' &&
              x.score > stuScoreTotal,
          );
          if (stuScoreTotal == 0) {
            StuIndexNumber = CountTotal;
          } else {
            StuIndexNumber = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }

          //教师排名
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0001' &&
              x.score > PaperSubviewsS,
          );
          if (PaperSubviewsS == 0) {
            NumberPaperSubviewsS = CountTotal;
          } else {
            NumberPaperSubviewsS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0002' &&
              x.score > PersonalViewsS,
          );
          if (PersonalViewsS == 0) {
            NumberPersonalViewsS = CountTotal;
          } else {
            NumberPersonalViewsS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0003' &&
              x.score > ExpertViewsS,
          );
          if (ExpertViewsS == 0) {
            NumberExpertViewsS = CountTotal;
          } else {
            NumberExpertViewsS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0004' && x.score > ConceptsS,
          );
          if (ConceptsS == 0) {
            NumberConceptsS = CountTotal;
          } else {
            NumberConceptsS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0005' &&
              x.score > ObjectiveFactsS,
          );
          if (ObjectiveFactsS == 0) {
            NumberObjectiveFactsS = CountTotal;
          } else {
            NumberObjectiveFactsS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0006' &&
              x.score > ObjectiveDataS,
          );
          if (ObjectiveDataS == 0) {
            NumberObjectiveDataS = CountTotal;
          } else {
            NumberObjectiveDataS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) => x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0021' && x.score > SkillS,
          );
          if (SkillS == 0) {
            NumberSkillS = CountTotal;
          } else {
            NumberSkillS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0023' &&
              x.score > SocialRelationsS,
          );
          if (SocialRelationsS == 0) {
            NumberSocialRelationsS = CountTotal;
          } else {
            NumberSocialRelationsS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0025' && x.score > qa_AnswerS,
          );
          if (qa_AnswerS == 0) {
            Numberqa_AnswerS = CountTotal;
          } else {
            Numberqa_AnswerS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }

          //学生排名；
          //名次 学生
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0031' &&
              x.score > PaperSubviewsR,
          );
          if (PaperSubviewsR == 0) {
            NumberPaperSubviewsR = CountTotal;
          } else {
            NumberPaperSubviewsR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0032' &&
              x.score > PersonalViewsR,
          );
          if (PersonalViewsR == 0) {
            NumberPersonalViewsR = CountTotal;
          } else {
            NumberPersonalViewsR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0033' &&
              x.score > ExpertViewsR,
          );
          if (ExpertViewsR == 0) {
            NumberExpertViewsR = CountTotal;
          } else {
            NumberExpertViewsR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0034' && x.score > ConceptsR,
          );
          if (ConceptsR == 0) {
            NumberConceptsR = CountTotal;
          } else {
            NumberConceptsR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0035' &&
              x.score > ObjectiveFactsR,
          );
          if (ObjectiveFactsR == 0) {
            NumberObjectiveFactsR = CountTotal;
          } else {
            NumberObjectiveFactsR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0036' &&
              x.score > ObjectiveDataR,
          );
          if (ObjectiveDataR == 0) {
            NumberObjectiveDataR = CountTotal;
          } else {
            NumberObjectiveDataR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) => x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0037' && x.score > SkillR,
          );
          if (SkillR == 0) {
            NumberSkillR = CountTotal;
          } else {
            NumberSkillR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }
          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls &&
              x.scoreTypeId == '0038' &&
              x.score > SocialRelationsR,
          );
          if (SocialRelationsR == 0) {
            NumberSocialRelationsR = CountTotal;
          } else {
            NumberSocialRelationsR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }

          arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0039' && x.score > qa_AnswerR,
          );
          if (qa_AnswerR == 0) {
            Numberqa_AnswerR = CountTotal;
          } else {
            Numberqa_AnswerR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }

          strhtml += '<tr>';
          //strhtml += '<td>' + strUserName + '</br>' + strSchoolYear + '</td>';
          strhtml += `<td>${strUserName}</td>`;

          strhtml += `<td>师分：${PaperSubviewsS}/${NumberPaperSubviewsS}</br>生分：${PaperSubviewsR}/${NumberPaperSubviewsR}</br>数量：${PaperViewpointCount}</td>`;
          strhtml += `<td>师分：${PersonalViewsS}/${NumberPersonalViewsS}</br>生分：${PersonalViewsR}/${NumberPersonalViewsR}</br>数量：${ViewpointCount}</td>`;
          strhtml += `<td>师分：${ExpertViewsS}/${NumberExpertViewsS}</br>生分：${ExpertViewsR}/${NumberExpertViewsR}</br>数量：${ExpertViewpointCount}</td>`;
          strhtml += `<td>师分：${ConceptsS}/${NumberConceptsS}</br>生分：${ConceptsR}/${NumberConceptsR}</br>数量：${ConceptCount}</td>`;
          strhtml += `<td>师分：${ObjectiveFactsS}/${NumberObjectiveFactsS}</br>生分：${ObjectiveFactsR}/${NumberObjectiveFactsR}</br>数量：${TopicObjectiveCount}</td>`;
          strhtml += `<td>师分：${ObjectiveDataS}/${NumberObjectiveDataS}</br>生分：${ObjectiveDataR}/${NumberObjectiveDataR}</br>数量：${ObjectiveBasisCount}</td>`;
          strhtml += `<td>师分：${SkillS}/${NumberSkillS}</br>生分：${SkillR}/${NumberSkillR}</br>数量：${SkillCount}</td>`;
          strhtml += `<td>师分：${SocialRelationsS}/${NumberSocialRelationsS}</br>生分：${SocialRelationsR}/${NumberSocialRelationsR}</br>数量：${SysSocialCount}</td>`;
          strhtml += `<td>师分：${qa_AnswerS}/${Numberqa_AnswerS}</br>生分：${qa_AnswerR}/${Numberqa_AnswerR}</br>数量：${QaAnswerCount}</td>`;
          //strhtml += '<td>师分：' + OthersCommentS + '</br>生分：' + OthersCommentR + '</td><td>师分：' + ViewpointRatioS + '</br>生分：' + ViewpointRatioR + '</br>折算分：' + ViewpointConversionS + '</td>';
          strhtml += `<td>师分：${OthersCommentS}</br></td>`;
          strhtml += `<td>师分：${AnswerTotal}</br>名次：${qaIndexNumber}</td>`; //讨论打分排名
          strhtml += `<td>师分：${SysCommentTotal}</br>名次：${CommentIndexNumber}</td>`; //评论打分排名
          strhtml += `<td>师分：${TagTotal}</br>名次：${TagIndexNumber}</td>`; //标志打分排名

          strhtml += `<td>师分：${ViewpointRatioS}</br>生分：${stuScoreTotal}</td>`;
          strhtml += `<td>教师：${TeaIndexNumber}</br>学生：${StuIndexNumber}</td>`;
          //strhtml += '<td>评分：' + UserS + '</br>折算分：' + UserR + '</td><td style="font-weight:bold;color:red;">折算总分：' + TotalScoreR + '</td>';

          // o1nclick=btnStuDetail("${strUserId}","${strIdCurrEduCls}")
          const strKeyId = `${strUserId}|${strIdCurrEduCls}`;
          strhtml += `<td><button id="btnStuDetail" keyId="${strKeyId}" class="btn btn-info btn-sm text-nowrap" >详情</button></td>`;
          //strhtml += '<td>' + ObjectiveFactsS + '</td><td>' + ObjectiveDataS + '</td>';
          //strhtml += '<td>' + OthersCommentS + '</td><td>' + UserS + '</td>';
          //strhtml += '<td>' + ViewpointRatioS + '</td><td>' + TotalScoreS + '</td>';

          strhtml += '</tr>';
        }
      }

      //拼接；
      //$("#tbList").append(strhtml);
      $('#divDataLst').html(strhtml);

      this.SetEventForButtonEvent();
      console.log('完成BindGv_vSysScoreSummary!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public SetEventForButtonEvent() {
    {
      const arrbtnStuDetail = GetButtonObjLstInDivObjN(this.divLayout, 'btnStuDetail');
      for (const btnStuDetail of arrbtnStuDetail) {
        if (btnStuDetail != null) {
          const strKeyId = btnStuDetail.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = { userId: arr[0], idCurrEduCls: arr[1] };

          (function (objData: any) {
            btnStuDetail.onclick = function () {
              SysScoreSummaryNewTotal.vuebtn_Click('StuDetail', objData);
            };
          })(objData);
        }
      }
    }
  }
  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */
  public async Combinegs_TotalCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //  const strUserId = userStore.getUserId;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      const strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
      if (strIdCurrEduCls == '') {
        strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;
        $('#hidIdCurrEduClspara').val(clsPubLocalStorage.idCurrEduCls);
      } else {
        strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`;
        $('#hidIdCurrEduClspara').val(strIdCurrEduCls);
      }
      // const strUserId = userStore.getUserId;
      //if (strUserId == "") {
      //    strWhereCond += " and dataUser ='" + userStore.getUserId + "'";
      //}
      //else {
      //    //获取当前用户自己数据
      //    strWhereCond += " And dataUser='" + strUserId + "'";
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
  public async Combinegs_TotalConditionObj(): Promise<clsgs_TotalDataStatisticsEN> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const objgs_TotalDataStatistics_Cond: clsgs_TotalDataStatisticsEN =
      new clsgs_TotalDataStatisticsEN();
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    //  const strUserId = userStore.getUserId;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      let strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
      if (strIdCurrEduCls == '') {
        strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
        // strWhereCond += ` And ${clsgs_TotalDataStatisticsEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;

        $('#hidIdCurrEduClspara').val(clsPubLocalStorage.idCurrEduCls);
      } else {
        //strWhereCond += ` And ${clsgs_TotalDataStatisticsEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`;
        $('#hidIdCurrEduClspara').val(strIdCurrEduCls);
      }
      // const strUserId = userStore.getUserId;
      //if (strUserId == "") {
      //    strWhereCond += " and dataUser ='" + userStore.getUserId + "'";
      //}
      //else {
      //    //获取当前用户自己数据
      //    strWhereCond += " And dataUser='" + strUserId + "'";
      //}
      objgs_TotalDataStatistics_Cond.SetCondFldValue(
        clsgs_TotalDataStatisticsEN.con_IdCurrEduCls,
        strIdCurrEduCls,
        '=',
      );
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objgs_TotalDataStatistics_Cond;
  }

  //导出的详细数据；
  public async ExportDetail() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    const strListDiv = GetTBodyObjInDivObj(objLayOut, 'divDataLst');
    if (strListDiv == null) return;

    const objWhere_Cond = await this.Combinegs_TotalCondition();

    const objgs_TotalDataStatistics_Cond = await this.Combinegs_TotalConditionObj();
    const strIdCurrEducls = GetInputValueInDivObj(objLayOut, 'hidIdCurrEduClspara');
    // const strWhereCond = JSON.stringify(objgs_TotalDataStatistics_Cond);
    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    let arrvgs_TotalDataStatisticsObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];

    let arrgs_TotalDataStatisticsObjLst0: Array<clsgs_TotalDataStatisticsEN> = [];
    let arrgs_TotalDataStatisticsObjLst: Array<clsgs_TotalDataStatisticsEN> = [];
    let arrgs_TotalDataType_Sel: Array<clsgs_TotalDataTypeEN> = [];
    //const objPagerPara: stuPagerPara = {
    //    pageIndex: intCurrPageIndex,
    //    pageSize: this.pageSize,
    //    whereCond: objgs_TotalDataStatistics_Cond,
    //    orderBy: this.hidSortTotalBy
    //};

    try {
      arrgs_TotalDataStatisticsObjLst0 = await gs_TotalDataStatisticsEx_GetSubObjLstCacheEx(
        objgs_TotalDataStatistics_Cond,
        strIdCurrEducls,
      );
      // console.log('完成对象列表获取!');
      arrgs_TotalDataType_Sel = await gs_TotalDataType_GetObjLstCache();
      arrgs_TotalDataType_Sel = arrgs_TotalDataType_Sel.filter((x) => x.totalDataTypeId != '02');

      arrvgs_TotalDataStatisticsObjLst = await vgs_TotalDataStatisticsEx_GetUserNumObjLstAsync(
        objWhere_Cond,
      );
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根据条件获取论文视图的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }

    try {
      //换行符
      const strBr =
        '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
      //声明参数 用来判断是否有数据；
      // const strDataContent = '';
      //动态显示对应的数据
      let strhtml = '';
      // const strUserId = userStore.getUserId;
      // const strRoleId = userStore.getRoleId;
      //个人观点
      strhtml += '<div class="info" id="infoDetailTotal">';

      //循环教学班人数
      for (let y = 0; y < arrvgs_TotalDataStatisticsObjLst.length; y++) {
        const strUserId = arrvgs_TotalDataStatisticsObjLst[y].dataUser;

        let UpdUserName = await vQxUsersSimStore.getUserName(strUserId); //

        for (let k = 0; k < arrgs_TotalDataType_Sel.length; k++) {
          const TypeName = arrgs_TotalDataType_Sel[k].totalDataTypeName;
          const strTypeId = arrgs_TotalDataType_Sel[k].totalDataTypeId;

          //查询过滤等于ID数据；
          //arrgs_TotalDataStatisticsObjLst0 = arrgs_TotalDataStatisticsObjLst0.filter(x => x.dataUser == '0310276' || x.dataUser == 's1')

          //如果用户表不存在次数据，那么则不用查询总表，不显示此数据；
          if (UpdUserName != '') {
            arrgs_TotalDataStatisticsObjLst = arrgs_TotalDataStatisticsObjLst0.filter(
              (x) => x.totalDataTypeId == strTypeId && x.dataUser == strUserId,
            );

            if (arrgs_TotalDataStatisticsObjLst.length > 0) {
              strhtml += `<div><span class="color2">${UpdUserName}(${strUserId})</span></div>`;
              strhtml += `<div><span class="color3">${TypeName}</span></div></br>`;
              strhtml += `<span class="color4">数量：&nbsp;&nbsp;</span><span class="abstract-text">${arrgs_TotalDataStatisticsObjLst.length}</span></br>`;
              strhtml += '';
              // let v = 0; //给内容加个序号
              for (let i = 0; i < arrgs_TotalDataStatisticsObjLst.length; i++) {
                const objgs_TotalDataStatistics = arrgs_TotalDataStatisticsObjLst[i];
                // v++;
                //对内容进行换行替换
                let strTotalContent = objgs_TotalDataStatistics.memo;
                const strWeek = objgs_TotalDataStatistics.week;
                const strWeekRange = objgs_TotalDataStatistics.weekTimeRange;
                if (IsNullOrEmpty(strTotalContent) == true) {
                  strTotalContent = await gs_TotalDataTypeEx_GetObjNameByTotalDataType(
                    objgs_TotalDataStatistics.totalDataTypeId,
                    objgs_TotalDataStatistics.tableKey,
                    objgs_TotalDataStatistics.idCurrEduCls,
                  );
                } else {
                  strTotalContent = strTotalContent.replace(/\r\n/g, strBr);
                  strTotalContent = strTotalContent.replace(/\n/g, strBr);
                }
                if (IsNullOrEmpty(strTotalContent) == false) {
                  strhtml += `<span class="color4">${TypeName}名称&nbsp;&nbsp;</span><span class="abstract-text">${strTotalContent}(${objgs_TotalDataStatistics.tableKey})</span></br>`;
                }
                strhtml += `<span class="color5">统计&nbsp;&nbsp;教师分数：${objgs_TotalDataStatistics.teaScore}`;
                strhtml += `&nbsp;&nbsp;学生分数：${
                  objgs_TotalDataStatistics.stuScore ?? 0
                }</span></br>`;
                strhtml += `<span class="color6">时间&nbsp;&nbsp;当前周${strWeek}`;
                strhtml += `&nbsp;&nbsp;周时间范围${strWeekRange}</span></br></br>`;

                strhtml += `</br><div id="divCanvas${strUserId}" style="border-bottom: 1px solid #eee;"></div></br>`;
              }

              strhtml += '';
            }
          }
        }

        if (UpdUserName != '') {
          //  if (arrgs_TotalDataStatisticsObjLst.length > 0) {
          //服务器展示

          //本地展示；
          //   strIdCurrEduclsstrAddressAndPort = `${clsSysPara4WebApi.CurrIPAddressAndPort_LocalPic}/${clsSysPara4WebApi.CurrPrx_Local}/`;
          const strAddressAndPortfull = `${GetAddressAndPort()}UploadFiles/UserCanvasPic/${strIdCurrEducls}/${strUserId}.png`;
          strhtml += `<br/>&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" alt="" id="txtImgPath${strUserId}"/>`;

          //    }
        }
      }

      strhtml += '</div>';

      //拼接；
      $('#ExportDetail').html(strhtml);

      gs_TotalDataStatistics_ReFreshCache(strIdCurrEducls);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定论文视图对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //-------------------------------关于图表函数绑定
  //绑定所有学生数据统计

  public async BindGv_TotalDataNum() {
    const strWhereCond = await this.CombineCondition1();
    let arrvgs_TotalDataStatisticsObjLst1: Array<clsvgs_TotalDataStatisticsEN> = [];
    //var arrvgs_TotalDataStatisticsObjLst2: Array<clsvgs_TotalDataStatisticsEN> = [];
    let arrvgs_TotalDataStatisticsObjLst3: Array<clsvgs_TotalDataStatisticsEN> = [];

    //临时
    let arrvgs_TotalDataStatisticsObjLst4: Array<clsvgs_TotalDataStatisticsEN> = [];

    try {
      //用户
      arrvgs_TotalDataStatisticsObjLst1 = await vgs_TotalDataStatisticsEx_GetUserNumObjLstAsync(
        strWhereCond,
      );

      //用户、周
      arrvgs_TotalDataStatisticsObjLst3 =
        await vgs_TotalDataStatisticsEx_GetUser_WeekNumObjLstAsync(strWhereCond);
      //教学班

      const WeekNum = await this.GetTeachingDateWeek();

      if (WeekNum != 0) {
        /*********************************周列表*********************************/
        let strWeek = '[';

        for (let j = 1; j <= WeekNum; j++) {
          //判断是否存在对等的周数据 ，存在则从列表中取，否则为0；
          //从详细数据中过滤 通过当前周作为条件；把数据存放到某一个类型观点详细；

          strWeek += `"第${j}周",`;
        }

        strWeek = strWeek.substring(0, strWeek.length - 1);
        strWeek += ']';

        const strLabelsJson = eval(strWeek);

        //定义一个标识符Number 用于展示多个Canvas；
        let Number = 0;

        if (arrvgs_TotalDataStatisticsObjLst1.length > 0) {
          /******************************************************************/

          //循环总数据 先得到先得到每个人的数据；

          let k = 0;
          for (k = 0; k < arrvgs_TotalDataStatisticsObjLst1.length; k++) {
            const strDataUserId = arrvgs_TotalDataStatisticsObjLst1[k].dataUser;
            // const strIdCurrEduCls = arrvgs_TotalDataStatisticsObjLst1[k].idCurrEduCls;

            const arrvgs_TotalDataStatisticsObjLst2 = arrvgs_TotalDataStatisticsObjLst1.filter(
              (x) => x.dataUser == strDataUserId,
            );

            if (strDataUserId != '') {
              //存放隐藏参数；

              let strNum = '[';
              for (let i = 0; i < arrvgs_TotalDataStatisticsObjLst2.length; i++) {
                //获取色码
                const strcolor = this.getRandomColor();

                const objUser = await vQxUsersSimStore.getObj(
                  arrvgs_TotalDataStatisticsObjLst2[i].dataUser,
                );
                if (objUser != null) {
                  //strHtml += spanUserName1 + strcolor + spanUserName2 + objUser.userName + spanUserName3;

                  //strNum += "{ label: \"" + objUser.userName + "\",fillColor: \"rgba(220,220,220, 0.01)\",strokeColor: \"" + strcolor + "\",pointColor: \"" + strcolor + "\",pointStrokeColor: \"#fff\",pointHighlightFill: \"#fff\",pointHighlightStroke: \"" + strcolor + "\",data: [";
                  strNum += `{ label: "${objUser.userName}",backgroundColor: "${strcolor}",borderColor: "${strcolor}",fill: false,data: [`;
                  arrvgs_TotalDataStatisticsObjLst4 = arrvgs_TotalDataStatisticsObjLst3.filter(
                    (x) => x.dataUser == arrvgs_TotalDataStatisticsObjLst2[i].dataUser,
                  );

                  //for (var j = 0; j < arrvgs_TotalDataStatisticsObjLst2.length; j++) {
                  for (let j = 1; j <= WeekNum; j++) {
                    if (arrvgs_TotalDataStatisticsObjLst4.length > 0) {
                      //var objWeek = arrvgs_TotalDataStatisticsObjLst4.find(x => x.week == arrvgs_TotalDataStatisticsObjLst2[j].week);
                      const objWeek = arrvgs_TotalDataStatisticsObjLst4.find((x) => x.week == j);
                      if (objWeek != null) {
                        strNum += `${objWeek.memo},`;
                      } else {
                        strNum += '0,';
                      }
                    } else {
                      strNum += '0,';
                    }
                  }
                  strNum = strNum.substring(0, strNum.length - 1);
                  strNum += ']},';
                }
                //else {

                //    strNum += "],";
                //}
              }
              if (strNum.length > 1) {
                //只有大于1数组才表示有数据；才需要截取；和调用；
                strNum = strNum.substring(0, strNum.length - 1);
                strNum += ']';

                const strDatasetsJson = eval(strNum);
                // const strDatasetsJson = strNum;

                Number++; //用来区分多个Canvas ，用户ID 作为属性 用于图片存放名称；
                let strCanvasNo = Number.toString().trim();
                if (strCanvasNo.length == 1) strCanvasNo = '0' + strCanvasNo;
                strCanvasNo = strDataUserId;
                SysScoreSummaryNewTotal.Canvas3(
                  strLabelsJson,
                  strDatasetsJson,
                  strCanvasNo,
                  strDataUserId,
                );
              }

              //   btnExportWord_Click();
            }

            // const strNum = '';
          }

          //如果循环完毕，那么再次调用教学班所有数据；
          if (k == arrvgs_TotalDataStatisticsObjLst1.length) {
            //存放隐藏参数；

            let strNum = '[';
            for (let i = 0; i < arrvgs_TotalDataStatisticsObjLst1.length; i++) {
              //获取色码
              const strcolor = this.getRandomColor();

              const objUser = await vQxUsersSimStore.getObj(
                arrvgs_TotalDataStatisticsObjLst1[i].dataUser,
              );
              if (objUser != null) {
                //strHtml += spanUserName1 + strcolor + spanUserName2 + objUser.userName + spanUserName3;

                //strNum += "{ label: \"" + objUser.userName + "\",fillColor: \"rgba(220,220,220, 0.01)\",strokeColor: \"" + strcolor + "\",pointColor: \"" + strcolor + "\",pointStrokeColor: \"#fff\",pointHighlightFill: \"#fff\",pointHighlightStroke: \"" + strcolor + "\",data: [";
                strNum += `{ label: "${objUser.userName}",backgroundColor: "${strcolor}",borderColor: "${strcolor}",fill: false,data: [`;
                arrvgs_TotalDataStatisticsObjLst4 = arrvgs_TotalDataStatisticsObjLst3.filter(
                  (x) => x.dataUser == arrvgs_TotalDataStatisticsObjLst1[i].dataUser,
                );

                //for (var j = 0; j < arrvgs_TotalDataStatisticsObjLst2.length; j++) {
                for (let j = 1; j <= WeekNum; j++) {
                  if (arrvgs_TotalDataStatisticsObjLst4.length > 0) {
                    //var objWeek = arrvgs_TotalDataStatisticsObjLst4.find(x => x.week == arrvgs_TotalDataStatisticsObjLst2[j].week);
                    const objWeek = arrvgs_TotalDataStatisticsObjLst4.find((x) => x.week == j);
                    if (objWeek != null) {
                      strNum += `${objWeek.memo},`;
                    } else {
                      strNum += '0,';
                    }
                  } else {
                    strNum += '0,';
                  }
                }
                strNum = strNum.substring(0, strNum.length - 1);
                strNum += ']},';
              }
            }

            strNum = strNum.substring(0, strNum.length - 1);
            strNum += ']';

            const strDatasetsJson = eval(strNum);
            // const strDatasetsJson = strNum;

            const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls; // $('#hidIdCurrEduClspara').val() ?? '';
            Number = 0; //这里等于0 说明代表是整个教学班的Canvas图；
            const strCanvasNo = '0';
            SysScoreSummaryNewTotal.Canvas3(
              strLabelsJson,
              strDatasetsJson,
              strCanvasNo,
              strIdCurrEduCls.toString(),
            );
            // btnExportWord_Click();
            strNum = '';
          }
        } else {
          const strMsg = `当前无数据,请选择其他条件或切换教学班.`;
          console.log(strMsg);
          // alert(strMsg);
        }
      } else {
        const strMsg = `当前教学班没有设置时间范围`;
        console.error(strMsg);
        alert(strMsg);
      }

      //$("#divUserLst").html(strHtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public CombineCondition1(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
    if (strIdCurrEduCls == '') {
      strWhereCond += ` and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
      SetInputValueInDivObj(divName, 'hidIdCurrEduClspara', clsPubLocalStorage.idCurrEduCls);
    } else {
      strWhereCond += ` and idCurrEduCls='${strIdCurrEduCls}'`;
    }
    //通过教学班得到教学班时间范围；、

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //管理员
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //获取不同色码
  public getRandomColor(): string {
    return `#${`00000${((Math.random() * 0x1000000) << 0).toString(16)}`.substring(-6)}`;
  }
  //获取教学班的时间得到周数
  public async GetTeachingDateWeek(): Promise<number> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //教学班
    let strIdCurrEducls = '';
    const strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
    if (strIdCurrEduCls == '') {
      strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      //$("#hidIdCurrEduClspara").val(clsPubLocalStorage.idCurrEduCls);
    } else {
      strIdCurrEducls = strIdCurrEduCls;
    }

    let arrgs_TeachingDateObjLst: Array<clsgs_TeachingDateEN> = [];
    arrgs_TeachingDateObjLst = await gs_TeachingDate_GetObjLstCache(strIdCurrEduCls);

    const objgs_TeachingDateEN = arrgs_TeachingDateObjLst.find(
      (x) => x.idCurrEduCls == strIdCurrEducls,
    );
    if (objgs_TeachingDateEN != null) {
      const eventStartTime = new Date(objgs_TeachingDateEN.startDate);
      const eventEndTime = new Date(objgs_TeachingDateEN.endDate);
      const duration = eventEndTime.valueOf() - eventStartTime.valueOf();

      //计算出相差天数
      const days = Math.floor(duration / (24 * 3600 * 1000));
      //天数除以7得到周；
      const WeekNum = Math.ceil(days / 7);
      return WeekNum;
    } else {
      const strMsg = `当前教学班没有设置时间范围`;
      alert(strMsg);
      return 0;
    }
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage = new SysScoreSummaryNewTotal(divLayout);
    let objPageEdit;
    console.log(strKeyId);
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    // strKeyId = GetFirstCheckedKeyIdInDivObj(PaperAttention.divDataLst);
    switch (strCommandName) {
      case 'ResetEduClsDate':
        objPageEdit = new gs_TeachingDate_EditEx('gs_TeachingDate_EditEx', objPage);

        // gs_TeachingDate_Edit.EditObj.btngs_TeachingDate_Edit_Click(strCommandName, strKeyId);
        gs_TeachingDate_EditEx.btnEdit_Click(strCommandName, clsPubLocalStorage.idCurrEduCls);
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
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PaperAttention.btn_Click');

        break;
    }
  }
}
