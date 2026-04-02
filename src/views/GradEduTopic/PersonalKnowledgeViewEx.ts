import $ from 'jquery';
import { PaperEx_GetObjExLstByPagerAsync } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { PaperSubViewpointCRUD } from '@/viewsBase/GradEduPaper/PaperSubViewpointCRUD';
import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';
import { clsvPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperReadWriteEN';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsvConceptEN } from '@/ts/L0Entity/GradEduTopic/clsvConceptEN';
import { clsvSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSkillEN';
import { clsvSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsEN';
import { clsvTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN';
import { clsvViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvViewpointEN';
import { Paper_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import {
  vPaperReadWrite_GetObjLstByPagerAsync,
  vPaperReadWrite_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsvPaperReadWriteWApi';
import {
  vPaperSubViewpoint_GetObjLstByPagerAsync,
  vPaperSubViewpoint_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import {
  vConcept_GetObjLstByPagerCache,
  vConcept_GetRecCountByCondCache,
} from '@/ts/L3ForWApi/GradEduTopic/clsvConceptWApi';
import {
  vSysSkill_GetObjLstByPagerAsync,
  vSysSkill_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvSysSkillWApi';
import {
  vSysSocialRelations_GetObjLstByPagerAsync,
  vSysSocialRelations_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvSysSocialRelationsWApi';
import {
  vTopicObjective_GetObjLstByPagerAsync,
  vTopicObjective_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvTopicObjectiveWApi';
import {
  vViewpoint_GetObjLstByPagerAsync,
  vViewpoint_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvViewpointWApi';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  HideDivInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare let window: any;
/* ResearchTopic_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PersonalKnowledgeViewEx extends PaperSubViewpointCRUD {
  //观点列表
  public mstrListDivViewpoint = 'divViewpointDataLst';

  //论文列表
  public mstrListDivPaper = 'divPaperDataLst';

  //用户列表
  public mstrListDivUser = 'divUserDataLst';

  //研究计划

  public mstrListDivResearchPlan = 'divDataLst4ResearchPlan';
  //布置任务
  public mstrListDivgs_TeacherTask = 'divDataLst4gs_TeacherTask';

  //主题用户关系
  public mstrListDivRtUserRela = 'divRtUserRelaDataLst';

  //个人观点关系
  public mstrListDivRtViewPointRela = 'divRtViewPointRelaDataLst';
  //专家观点
  public mstrListDivRtExpertViewPointRela = 'divRtExpertViewPointRelaDataLst';

  //主题引用论文关系
  //public mstrListDivRtPaperRela: string = "divRtPaperRelaDataLst";
  public mstrListDivRtCitedPaperRela = 'divRtCitedPaperRelaDataLst';

  //主题自研论文关系
  public mstrListDivRtOriginalPaperRela = 'divDataLst4RtOriginalPaperRela';

  //概念
  public mstrListConceptDivPaper = 'divRtConceptRelaDataLst';
  //客观事实
  public mstrListTopicObjectiveDivPaper = 'divRtTopicObjectiveDataLst';
  //客观依据

  public mstrListBasisTopicObjectiveDivPaper = 'divBasisRtTopicObjectiveDataLst';
  //研究结果
  public mstrListResearchResultDivPaper = 'divRtResearchResultDataLst';

  //技能
  public mstrListSysskillDivPaper = 'divSysskillDataLst';

  //社会关系
  public mstrListSysSocialRelaDivPaper = 'divRtSysSocialRelaLst';

  public strBr =
    '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  public recCount = 0;

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
      if (userStore.getUserId != '') {
        this.hidSortBy = 'updDate Desc';

        //读取session角色 来判断绑定不同数据列表
        //获取用户角色来判断显示不同的列表数据；

        $('#hidUserId').val(userStore.getUserId);
        $('#hidRoleId').val(userStore.getRoleId);
        $('#hidIdCurrEduCls').val(clsPubLocalStorage.idCurrEduCls);

        //管理员 判断角色
        if (GetInputValueInDivObj(objLayOut, 'hidRoleId') == '00620001') {
          $('#btnDelRecord').show();
          $('#tab4Bind tr').find('td:eq(8)').show();
        } else {
          //学生00620003 教师
          $('#btnDelRecord').hide();
          $('#tab4Bind tr').find('td:eq(8)').hide();
        }
        await this.GetAllFunctionMethod();
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
  //得到3个关系列表数据；
  public async GetAllFunctionMethod() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //如果是点击了树菜单、或者是刷新，那么需要做样式控制；
    //首先要去掉ul下 li a 样式
    $('#myTab li a').removeClass();
    $('#myTab li').removeClass();
    //判断根据序号显示不同的数据源
    const strnum = GetInputValueInDivObj(divName, 'hidTabNum');
    if (strnum == '1') {
      $('#liPaper').addClass('active');
      $('#liPaper a').addClass('active');
      $('#li_Paper ').addClass('in active show');
      //论文
      this.BindGv_vPaper();
    } else if (strnum == '2') {
      $('#liPaperReadWrite').addClass('active');
      $('#liPaperReadWrite a').addClass('active');

      $('#li_PaperReadWrite ').addClass('in active show');
      //论文读写
      this.BindGv_vPaperReadWrite();
    } else if (strnum == '3') {
      $('#liPaperSubViewpoint').addClass('active');
      $('#liPaperSubViewpoint a').addClass('active');

      $('#li_PaperSubViewpoint ').addClass('in active show');
      //论文子观点
      this.BindGv_vPaperSubViewpoint();
    } else if (strnum == '4') {
      $('#liViewpoint').addClass('active');
      $('#liViewpoint a').addClass('active');

      $('#li_Viewpoint ').addClass('in active show');

      //个人观点关系；
      this.BindGv_vViewpoint();
    } else if (strnum == '5') {
      $('#liExpertViewpoint').addClass('active');
      $('#liExpertViewpoint a').addClass('active');

      $('#li_ExpertViewpoint ').addClass('in active show');
      //专家观点
      this.BindGv_vExpertViewpoint();
    } else if (strnum == '6') {
      $('#liConcept').addClass('active');
      $('#liConcept a').addClass('active');

      $('#li_Concept ').addClass('in active show');
      //主题概念关系
      this.BindGv_ConceptCache();
    } else if (strnum == '7') {
      $('#liObjectiveFact').addClass('active');
      $('#liObjectiveFact a').addClass('active');

      $('#li_Objective ').addClass('in active show');
      //客观事实关系
      this.BindGv_vTopicObjective();
    } else if (strnum == '8') {
      $('#liObjectiveBasis').addClass('active');
      $('#liObjectiveBasis a').addClass('active');

      $('#li_ObjectiveBasis ').addClass('in active show');
      //客观依据关系
      this.BindGv_vTopicObjectiveBasis();
    } else if (strnum == '9') {
      $('#liSysskill').addClass('active');
      $('#liSysskill a').addClass('active');

      $('#liSysskill ').addClass('in active show');
      //技能
      this.BindGv_vSysSkill();
    } else if (strnum == '10') {
      $('#liSysSocialRela').addClass('active');
      $('#liSysSocialRela a').addClass('active');

      $('#liSysSocialRela ').addClass('in active show');
      //社会关系
      this.BindGv_vSysSocialRelations();
    } else {
      $('#liPaper').addClass('active');
      $('#liPaper a').addClass('active');
      $('#li_Paper ').addClass('in active show');
      //论文
      this.BindGv_vPaper();
    }
  }

  /* 函数功能:在数据 列表中跳转到某一页
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
 <param name = "intPageIndex">页序号</param>
*/
  public async IndexPage(intPageIndex: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    //this.setCurrPageIndex(intPageIndex, this.divName4Pager);
    this.SetCurrPageIndex(intPageIndex);
    //判断根据序号显示不同的数据源
    const strnum = GetInputValueInDivObj(divName, 'hidTabNum');
    if (strnum == '1') {
      //论文
      this.BindGv_vPaper();
    } else if (strnum == '2') {
      //论文读写
      this.BindGv_vPaperReadWrite();
    } else if (strnum == '3') {
      //论文子观点
      this.BindGv_vPaperSubViewpoint();
    } else if (strnum == '4') {
      //个人观点关系；
      this.BindGv_vViewpoint();
    } else if (strnum == '5') {
      //专家观点
      this.BindGv_vExpertViewpoint();
    } else if (strnum == '6') {
      //主题概念关系
      this.BindGv_ConceptCache();
    } else if (strnum == '7') {
      //客观事实关系
      this.BindGv_vTopicObjective();
    } else if (strnum == '8') {
      //客观依据关系
      this.BindGv_vTopicObjectiveBasis();
    } else if (strnum == '9') {
      //技能
      this.BindGv_vSysSkill();
    } else if (strnum == '10') {
      //社会关系
      this.BindGv_vSysSocialRelations();
    } else {
      //论文
      this.BindGv_vPaper();
    }
  }

  //论文
  public async liPaperClick() {
    try {
      await this.BindGv_vPaper();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //论文读写
  public async liPaperReadWriteClick() {
    try {
      await this.BindGv_vPaperReadWrite();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //论文子观点
  public async liPaperSubViewpointClick() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    try {
      await this.BindGv_vPaperSubViewpoint();
      if (this.recCount > 10) {
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //个人观点
  public async liViewpointClick() {
    try {
      await this.BindGv_vViewpoint();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //专家观点
  public async liExpertViewpointClick() {
    try {
      await this.BindGv_vExpertViewpoint();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //概念
  public async liConceptClick() {
    try {
      await this.BindGv_ConceptCache();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //客观事实
  public async liObjectiveFactClick() {
    try {
      await this.BindGv_vTopicObjective();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //客观数据
  public async liObjectiveBasisClick() {
    try {
      await this.BindGv_vTopicObjectiveBasis();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //技能
  public async liSysskillClick() {
    try {
      await this.BindGv_vSysSkill();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //社会关系
  public async liSysSocialRelationsClick() {
    try {
      await this.BindGv_vSysSocialRelations();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
 <returns>条件串(strWhereCond)</returns>
*/
  public async CombinevPaperCondition(): Promise<string> {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (userStore.getUserId != '') {
        //判断角色//管理员
        const strUserId = userStore.getUserId;
        const strRoleId = userStore.getRoleId;
        if (strRoleId != '00620001' && strRoleId != '00620002') {
          //学生00620003
          strWhereCond += ` And updUser = '${strUserId}'`;
        }
      } else {
        reLogin();
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
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    const strWhereCond = await this.CombinevPaperCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrPaperExObjLst: Array<clsPaperENEx> = [];
    try {
      this.recCount = await Paper_GetRecCountByCondAsync(strWhereCond);
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
      arrPaperExObjLst = await PaperEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    try {
      await this.BindTab_vPaper(arrPaperExObjLst);

      if (this.recCount > 10) {
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
      console.log('完成BindGv_vPaper!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public async BindTab_vPaper(arrPaperExObjLst: Array<clsPaperENEx>) {
    let strhtml = '';
    strhtml += '<div class="info" id="infoPaper"><div class="title btn-3"><ul class="artlist">';
    let p = 0; //给内容加个序号
    for (let i = 0; i < arrPaperExObjLst.length; i++) {
      const objPaperEx = arrPaperExObjLst[i];
      p++;
      //    strPaperId = objPaperEx.paperId;
      //判断引用论文，自研论文
      if (objPaperEx.paperTypeId == '02') {
        strhtml += `<li><span class="rowtit color3">${p}.[标题]：</span><span class="abstract-text">${objPaperEx.paperTitle}(${objPaperEx.paperTypeName})</span></li>`;
      } else {
        strhtml += `<li><span class="rowtit color3">${p}.[标题]：</span><span class="abstract-text">${objPaperEx.paperTitle}(${objPaperEx.paperTypeName})</span></li>`;
      }
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[研究问题]：</span><span class="abstract-text">${objPaperEx.researchQuestion}</span><span class="rowtit color3">[关键字]：</span><span class="abstract-text">${objPaperEx.keyword}</span></li>`;
    }
    strhtml += '</ul></div>';

    $('#divRtCitedPaperRelaDataLst').html(strhtml);
  }

  //////--------------------------------------论文读写

  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */
  public async CombinevPaperReadWriteCondition(): Promise<string> {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    // const strReadWriteTypeId = GetInputValueInDivObj(divName, 'hidReadWriteTypeId');
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //// 02 代表论文写作

      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      if (strRoleId != '00620001' && strRoleId != '00620002') {
        //只能查看自己的数据；或公开的数据；学生
        strWhereCond += ` And updUser = '${strUserId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperReadWriteCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
 */
  public async BindGv_vPaperReadWrite() {
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    const strWhereCond = await this.CombinevPaperReadWriteCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvPaperReadWriteObjLst: Array<clsvPaperReadWriteEN> = [];
    try {
      this.recCount = await vPaperReadWrite_GetRecCountByCondAsync(strWhereCond);
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
      arrvPaperReadWriteObjLst = await vPaperReadWrite_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    try {
      this.BindTab_vPaperReadWrite(arrvPaperReadWriteObjLst);
      console.log('完成BindGv_vPaperReadWrite!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public async BindTab_vPaperReadWrite(arrvPaperReadWriteObjLst: Array<clsvPaperReadWriteEN>) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    let strhtml = '';
    strhtml += '<div class="info" id="infoPaper"><div class="title btn-3"><ul class="artlist">';
    let p = 0; //给内容加个序号
    for (let i = 0; i < arrvPaperReadWriteObjLst.length; i++) {
      p++;
      // const strPaperId = arrvPaperReadWriteObjLst[i].paperId;
      //判断引用论文，自研论文
      if (arrvPaperReadWriteObjLst[i].operationTypeId == '02') {
        strhtml += `<li><span class="rowtit color3">${p}.[标题]：</span><span class="abstract-text">${arrvPaperReadWriteObjLst[i].paperTitle}(${arrvPaperReadWriteObjLst[i].operationTypeName})</span></li>`;
      } else {
        strhtml += `<li><span class="rowtit color3">${p}.[标题]：</span><span class="abstract-text">${arrvPaperReadWriteObjLst[i].paperTitle}(${arrvPaperReadWriteObjLst[i].operationTypeName})</span></li>`;
      }
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[研究问题]：</span><span class="abstract-text">${arrvPaperReadWriteObjLst[i].researchQuestion}</span><span class="rowtit color3">[关键字]：</span><span class="abstract-text">${arrvPaperReadWriteObjLst[i].keyword}</span></li>`;
    }
    strhtml += '</ul></div>';

    $('#divPaperReadWriteDataLst').html(strhtml);
    if (this.recCount > 10) {
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
    }
  }

  //-------------------------------------------------------论文子观点

  public async CombinevPaperSubViewpointCondition(): Promise<string> {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    // const strReadWriteTypeId = GetInputValueInDivObj(divName, 'hidReadWriteTypeId');
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //// 02 代表论文写作

      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      if (strRoleId != '00620001' && strRoleId != '00620002') {
        //只能查看自己的数据；或公开的数据；学生
        strWhereCond += ` And updUser = '${strUserId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperReadWriteCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的记录对象的列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vPaperSubViewpoint() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    const strWhereCond = await this.CombinevPaperSubViewpointCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvPaperSubViewpointObjLst: Array<clsvPaperSubViewpointEN> = [];
    try {
      this.recCount = await vPaperSubViewpoint_GetRecCountByCondAsync(strWhereCond);
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
      arrvPaperSubViewpointObjLst = await vPaperSubViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    try {
      await this.BindTab_vPaperSubViewpoint1(arrvPaperSubViewpointObjLst);
      console.log('完成BindGv_vPaperReadWrite!');
      if (this.recCount > 10) {
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public async BindTab_vPaperSubViewpoint1(
    arrvPaperSubViewpointObjLst: Array<clsvPaperSubViewpointEN>,
  ) {
    let strhtml = '';
    strhtml +=
      '<div class="info" id="infoPaper"><div class="title btn-3"></div><ul class="artlist">';
    let p = 0; //给内容加个序号
    for (let i = 0; i < arrvPaperSubViewpointObjLst.length; i++) {
      p++;
      // strPaperId = arrvPaperSubViewpointObjLst[i].subViewpointId;
      //判断引用论文，自研论文

      strhtml += `<li><span class="rowtit color3">${p}.[观点类型]：</span><span class="abstract-text">${arrvPaperSubViewpointObjLst[i].subViewpointTypeName}</span></li>`;
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[观点内容]：</span><span class="abstract-text">${arrvPaperSubViewpointObjLst[i].subViewpointContent}</span></li>`;
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">${arrvPaperSubViewpointObjLst[i].explainTypeName}：</span><span class="abstract-text">${arrvPaperSubViewpointObjLst[i].explainContent}</span></li>`;
    }
    strhtml += '</ul></div>';

    $('#divPaperSubViewpointDataLst').html(strhtml);
  }
  //-----------------------------------------------------------------------------个人观点

  /* 把所有的查询控件内容组合成一个条件串
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
  <returns>条件串(strWhereCond)</returns>
*/
  public async CombinevViewpointCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //strIdCurrEduclsstrhidUserTypeId = $("#hidUserTypeId").val();
      //if (strhidUserTypeId != "") {
      //    strWhereCond += ` And ${clsvViewpointEN.con_UserTypeId} = '${strhidUserTypeId}'`;
      //}
      strWhereCond += ` And ${clsvViewpointEN.con_UserTypeId} = '01'`;
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      $('#hidUserId').val(strUserId);
      //判断角色
      //管理员
      if (
        strRoleId == enumQxRoles.System_Admin_00620001 ||
        strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        $('#btnDelRecord').show();
        $('#btnCancelSubmit').show();
      } else if (strRoleId == '00620002') {
        //教师
      } else {
        //学生00620003 00620002教师
        strWhereCond += ` And ${clsvViewpointEN.con_UpdUser} = '${strUserId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
 */
  public async BindGv_vViewpoint() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    const strWhereCond = await this.CombinevViewpointCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvViewpointObjLst: Array<clsvViewpointEN> = [];
    try {
      this.recCount = await vViewpoint_GetRecCountByCondAsync(strWhereCond);
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
      arrvViewpointObjLst = await vViewpoint_GetObjLstByPagerAsync(objPagerPara);
      //换行符
      const strBr =
        '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
      //动态显示对应的数据
      let strhtml = '';

      //个人观点
      strhtml += '<div class="info" id="infoViewpoint"><div class="title btn-3">';

      strhtml += '</div><ul class="artlist">';
      // let v = 0; //给内容加个序号
      for (let i = 0; i < arrvViewpointObjLst.length; i++) {
        //得到viewpointId；
        // const strViewpointId = arrvViewpointObjLst[i].viewpointId;
        // v++;

        //对内容进行换行替换
        let strViewpointContent = arrvViewpointObjLst[i].viewpointContent;
        let strReason = arrvViewpointObjLst[i].reason;

        strViewpointContent = strViewpointContent.replace(/\r\n/g, strBr);
        strViewpointContent = strViewpointContent.replace(/\n/g, strBr);

        strReason = strReason.replace(/\r\n/g, strBr);
        strReason = strReason.replace(/\n/g, strBr);

        strhtml += `<li><span class="rowtit color3">[观点名称]：</span><span class="abstract-text">${arrvViewpointObjLst[i].viewpointName}</span></li>`;

        //strhtml += '<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[类型]：</span><span class="abstract-text">' + arrvViewpointObjLst[i].viewpointTypeName + '</span></li>';
        strhtml += `<li><span class="rowtit color3">[观点内容]：</span><span class="abstract-text">${strViewpointContent}</span></li>`;
        //类型+理由
        strhtml += `<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${arrvViewpointObjLst[i].viewpointTypeName}]：</span><span class="abstract-text">${strReason}</span></li>`;

        //strhtml += '<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[来源]：</span><span class="abstract-text">' + arrvViewpointObjLst[i].source + '</span></li>';

        strhtml += '<li><div style="height:100%;width:100%;"><div style = "float:left;width:69%;">';

        strhtml += `<span class="rowtit color3">[编辑日期]：</span><span class="abstract-text">${arrvViewpointObjLst[i].updDate}</span>`;

        //判断ture 、false
        if (arrvViewpointObjLst[i].isSubmit == true) {
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已提交</span></div>';
        } else {
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">未提交</span></div>';
        }
        strhtml += '</br></br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //拼接；
      $('#divRtViewPointRelaDataLst').html(strhtml);

      if (this.recCount >= 10) {
        $('#divPagerViewpoint').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //----------------------------------------------------专家观点

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public CombinevExpertViewpointCondition(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      strWhereCond += ` And ${clsvViewpointEN.con_UserTypeId} = '02'`;
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      $('#hidUserId').val(strUserId);
      //判断角色
      //管理员
      if (
        strRoleId == enumQxRoles.System_Admin_00620001 ||
        strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        $('#btnDelRecord').show();
        $('#btnCancelSubmit').show();
      } else if (strRoleId == '00620002') {
        //教师
      } else {
        //学生00620003 00620002教师
        strWhereCond += ` And ${clsvViewpointEN.con_UpdUser} = '${strUserId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
 */
  public async BindGv_vExpertViewpoint() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    const strWhereCond = await this.CombinevExpertViewpointCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvViewpointObjLst: Array<clsvViewpointEN> = [];
    try {
      this.recCount = await vViewpoint_GetRecCountByCondAsync(strWhereCond);
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
      arrvViewpointObjLst = await vViewpoint_GetObjLstByPagerAsync(objPagerPara);
      //换行符
      const strBr =
        '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
      //动态显示对应的数据
      let strhtml = '';

      //个人观点
      strhtml += '<div class="info" id="infoViewpoint"><div class="title btn-3">';

      strhtml += '</div><ul class="artlist">';
      // let v = 0; //给内容加个序号
      for (let i = 0; i < arrvViewpointObjLst.length; i++) {
        //得到viewpointId；
        // const strViewpointId = arrvViewpointObjLst[i].viewpointId;
        // v++;

        //对内容进行换行替换
        let strViewpointContent = arrvViewpointObjLst[i].viewpointContent;
        let strReason = arrvViewpointObjLst[i].reason;

        strViewpointContent = strViewpointContent.replace(/\r\n/g, strBr);
        strViewpointContent = strViewpointContent.replace(/\n/g, strBr);

        strReason = strReason.replace(/\r\n/g, strBr);
        strReason = strReason.replace(/\n/g, strBr);

        strhtml += `<li><span class="rowtit color3">[观点名称]：</span><span class="abstract-text">${arrvViewpointObjLst[i].viewpointName}</span></li>`;
        strhtml += `<li><span class="rowtit color3">[观点内容]：</span><span class="abstract-text">${strViewpointContent}</span></li>`;
        //类型+理由
        strhtml += `<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${arrvViewpointObjLst[i].viewpointTypeName}]：</span><span class="abstract-text">${strReason}</span></li>`;

        strhtml += '<li><div style="height:100%;width:100%;"><div style = "float:left;width:69%;">';

        strhtml += `<span class="rowtit color3">[编辑日期]：</span><span class="abstract-text">${arrvViewpointObjLst[i].updDate}</span>`;

        //判断ture 、false
        if (arrvViewpointObjLst[i].isSubmit == true) {
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已提交</span></div>';
        } else {
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">未提交</span></div>';
        }
        strhtml += '</br></br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //拼接；
      $('#divRtExpertViewPointRelaDataLst').html(strhtml);

      if (this.recCount >= 10) {
        $('#divExpertPagerViewpoint').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //--------------------------------------------------------------------概念

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
<returns>条件串(strWhereCond)</returns>
*/
  public CombineConceptConditionObj(): clsvConceptEN {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const objConcept_Cond: clsvConceptEN = new clsvConceptEN();
    objConcept_Cond.SetCondFldValue(
      clsvConceptEN.con_IdCurrEduCls,
      clsPubLocalStorage.idCurrEduCls,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色
      //管理员
      if (strRoleId != '00620001' && strRoleId != '00620002') {
        $('#btnCancelSubmit').hide();
        //学生；

        objConcept_Cond.SetCondFldValue(clsvConceptEN.con_UpdUser, strUserId, '=');
      }
      $('#hidUserId').val(strUserId);
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineConceptConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objConcept_Cond;
  }
  /* 根据条件获取相应的对象列表
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv_Cache)
*/
  public async BindGv_ConceptCache() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const objConcept_Cond = this.CombineConceptConditionObj();
    const strWhereCond = JSON.stringify(objConcept_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    try {
      this.recCount = await vConcept_GetRecCountByCondCache(
        objConcept_Cond,
        clsPubLocalStorage.idCurrEduCls,
      );
      //this.recCount = await vConcept_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {

      //});
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
      const arrConceptObjLst = await vConcept_GetObjLstByPagerCache(
        objPagerPara,
        clsPubLocalStorage.idCurrEduCls,
      );

      //换行符
      const strBr =
        '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
      //动态显示对应的数据
      let strhtml = '';

      //个人观点
      strhtml += '<div class="info" id="infoViewpoint"><div class="title btn-3">';

      strhtml += '</div><ul class="artlist">';
      // let v = 0; //给内容加个序号
      for (let i = 0; i < arrConceptObjLst.length; i++) {
        //得到conceptId；
        // const strConceptId = arrConceptObjLst[i].conceptId;
        // v++;
        //对内容进行换行替换
        let strConceptContent = arrConceptObjLst[i].conceptContent;
        strConceptContent = strConceptContent.replace(/\r\n/g, strBr);
        strConceptContent = strConceptContent.replace(/\n/g, strBr);

        //strhtml += v + ".观点：" + arrConceptObjLst[i].viewpointName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>" + "&nbsp;内容:" + arrConceptObjLst[i].viewpointContent + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;" + arrConceptObjLst[i].viewpointTypeName + ":" + arrConceptObjLst[i].reason + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;所属主题：" + arrConceptObjLst[i].topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%></br>";
        strhtml += `<li><span class="rowtit color3">[概念名称]：</span><span class="abstract-text">${arrConceptObjLst[i].conceptName}</span></li>`;
        strhtml += `<li><span class="rowtit color3">[概念内容]：</span><span class="abstract-text">${strConceptContent}</span></li>`;
        strhtml += '<li><div style="height:100%;width:100%;"><div style = "float:left;width:70%;">';

        strhtml += `<span class="rowtit color3">[编辑日期]：</span><span class="abstract-text">${arrConceptObjLst[i].updDate}</span>`;

        //判断ture 、false
        if (arrConceptObjLst[i].isSubmit == true) {
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已提交</span></div>';
        } else {
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">未提交</span></div>';
        }

        strhtml += '</li>';

        strhtml += '</br></br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';
      //拼接；
      $('#divRtConceptRelaDataLst').html(strhtml);

      if (this.recCount >= 10) {
        $('#divPagerConcept').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }

    if (this.recCount >= 10) {
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
    }
  }
  //-----------------------------------------------------客观事实
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevTopicObjectiveCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断客观类型 区分是客观事实、客观依据

      strWhereCond += ` And ${clsvTopicObjectiveEN.con_ObjectiveType} = '01'`;

      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      $('#hidUserId').val(strUserId);

      //判断角色
      //管理员
      if (strRoleId != '00620001' && strRoleId != '00620002') {
        //学生；
        strWhereCond += ` And ${clsvTopicObjectiveEN.con_UpdUser} = '${strUserId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineTopicObjectiveCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vTopicObjective() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strWhereCond = await this.CombinevTopicObjectiveCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvTopicObjectiveObjLst: Array<clsvTopicObjectiveEN> = [];
    try {
      this.recCount = await vTopicObjective_GetRecCountByCondAsync(strWhereCond);
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
      arrvTopicObjectiveObjLst = await vTopicObjective_GetObjLstByPagerAsync(objPagerPara);
      //换行符
      const strBr =
        '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
      //动态显示对应的数据
      let strhtml = '';

      //个人观点
      strhtml += '<div class="info" id="infoViewpoint"><div class="title btn-3">';

      strhtml += '</div><ul class="artlist">';
      // let v = 0; //给内容加个序号
      for (let i = 0; i < arrvTopicObjectiveObjLst.length; i++) {
        //得到topicObjectiveId；
        // const strTopicObjectiveId = arrvTopicObjectiveObjLst[i].topicObjectiveId;
        // v++;
        //对内容进行换行替换
        let strObjectiveContent = arrvTopicObjectiveObjLst[i].objectiveContent;
        let strConclusion = arrvTopicObjectiveObjLst[i].conclusion;
        strObjectiveContent = strObjectiveContent.replace(/\r\n/g, strBr);
        strObjectiveContent = strObjectiveContent.replace(/\n/g, strBr);
        strConclusion = strConclusion.replace(/\r\n/g, strBr);
        strConclusion = strConclusion.replace(/\n/g, strBr);
        //strhtml += v + ".观点：" + arrvTopicObjectiveObjLst[i].viewpointName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>" + "&nbsp;内容:" + arrvTopicObjectiveObjLst[i].viewpointContent + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;" + arrvTopicObjectiveObjLst[i].viewpointTypeName + ":" + arrvTopicObjectiveObjLst[i].reason + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;所属主题：" + arrvTopicObjectiveObjLst[i].topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%></br>";
        strhtml += `<li><span class="rowtit color3">[客观名称]：</span><span class="abstract-text">${arrvTopicObjectiveObjLst[i].objectiveName}</span></li>`;
        strhtml += `<li><span class="rowtit color3">[客观内容]：</span><span class="abstract-text">${strObjectiveContent}</span></li>`;
        strhtml += `<li><span class="rowtit color3">[客观推论]：</span><span class="abstract-text">${strConclusion}</span></li>`;
        strhtml += '<li><div style="height:100%;width:100%;"><div style = "float:left;width:69%;">';

        strhtml += `<span class="rowtit color3">[编辑日期]：</span><span class="abstract-text">${arrvTopicObjectiveObjLst[i].updDate}</span>`;
        //判断ture 、false
        if (arrvTopicObjectiveObjLst[i].isSubmit == true) {
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已提交</span></div>';
        } else {
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">未提交</span></div>';
        }

        strhtml += '</li>';

        strhtml += '</br></br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';
      //拼接；
      $('#divRtTopicObjectiveDataLst').html(strhtml);

      if (this.recCount >= 10) {
        $('#divPagerObjective').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
  }

  //-----------------------------------------------------------------客观数据

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public CombinevTopicObjectiveBasisCondition(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断客观类型 区分是客观事实、客观依据

      strWhereCond += ` And ${clsvTopicObjectiveEN.con_ObjectiveType} = '02'`;

      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      $('#hidUserId').val(strUserId);

      //判断角色
      //管理员
      if (strRoleId != '00620001' && strRoleId != '00620002') {
        //学生；
        strWhereCond += ` And ${clsvTopicObjectiveEN.con_UpdUser} = '${strUserId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineTopicObjectiveCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vTopicObjectiveBasis() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strWhereCond = await this.CombinevTopicObjectiveBasisCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvTopicObjectiveObjLst: Array<clsvTopicObjectiveEN> = [];
    try {
      this.recCount = await vTopicObjective_GetRecCountByCondAsync(strWhereCond);
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
      arrvTopicObjectiveObjLst = await vTopicObjective_GetObjLstByPagerAsync(objPagerPara);
      //换行符
      const strBr =
        '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
      //动态显示对应的数据
      let strhtml = '';

      //个人观点
      strhtml += '<div class="info" id="infoViewpoint"><div class="title btn-3">';

      strhtml += '</div><ul class="artlist">';
      // let v = 0; //给内容加个序号
      for (let i = 0; i < arrvTopicObjectiveObjLst.length; i++) {
        //得到topicObjectiveId；
        // const strTopicObjectiveId = arrvTopicObjectiveObjLst[i].topicObjectiveId;
        // v++;
        //对内容进行换行替换
        let strObjectiveContent = arrvTopicObjectiveObjLst[i].objectiveContent;
        let strConclusion = arrvTopicObjectiveObjLst[i].conclusion;
        strObjectiveContent = strObjectiveContent.replace(/\r\n/g, strBr);
        strObjectiveContent = strObjectiveContent.replace(/\n/g, strBr);
        strConclusion = strConclusion.replace(/\r\n/g, strBr);
        strConclusion = strConclusion.replace(/\n/g, strBr);
        //strhtml += v + ".观点：" + arrvTopicObjectiveObjLst[i].viewpointName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>" + "&nbsp;内容:" + arrvTopicObjectiveObjLst[i].viewpointContent + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;" + arrvTopicObjectiveObjLst[i].viewpointTypeName + ":" + arrvTopicObjectiveObjLst[i].reason + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;所属主题：" + arrvTopicObjectiveObjLst[i].topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%></br>";
        strhtml += `<li><span class="rowtit color3">[客观名称]：</span><span class="abstract-text">${arrvTopicObjectiveObjLst[i].objectiveName}</span></li>`;
        strhtml += `<li><span class="rowtit color3">[客观内容]：</span><span class="abstract-text">${strObjectiveContent}</span></li>`;
        strhtml += `<li><span class="rowtit color3">[客观推论]：</span><span class="abstract-text">${strConclusion}</span></li>`;
        strhtml += '<li><div style="height:100%;width:100%;"><div style = "float:left;width:69%;">';

        strhtml += `<span class="rowtit color3">[编辑日期]：</span><span class="abstract-text">${arrvTopicObjectiveObjLst[i].updDate}</span>`;
        //判断ture 、false
        if (arrvTopicObjectiveObjLst[i].isSubmit == true) {
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已提交</span></div>';
        } else {
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">未提交</span></div>';
        }

        strhtml += '</li>';

        strhtml += '</br></br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';
      //拼接；
      $('#divBasisRtTopicObjectiveDataLst').html(strhtml);

      if (this.recCount >= 10) {
        $('#divPagerBasis').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
  }

  //-------------------------------------------------技能
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevSysSkillCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;
      $('#hidUserId').val(strUserId);
      //判断角色
      //管理员
      if (strRoleId != '00620001' && strRoleId != '00620002') {
        //学生 教师；

        strWhereCond += ` And ${clsvSysSkillEN.con_UpdUser} = '${strUserId}'`;
        //strWhereCond += ` And ${clsvViewpointEN.con_VPProposePeople} = '${objvUserRoleRelation.userId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysSkillCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vSysSkill() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strWhereCond = await this.CombinevSysSkillCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvSysSkillObjLst: Array<clsvSysSkillEN> = [];

    try {
      this.recCount = await vSysSkill_GetRecCountByCondAsync(strWhereCond);
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
      arrvSysSkillObjLst = await vSysSkill_GetObjLstByPagerAsync(objPagerPara);
      //换行符
      const strBr =
        '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
      //动态显示对应的数据
      let strhtml = '';

      //技能
      strhtml += '<div class="info" id="infoViewpoint"><div class="title btn-3">';

      strhtml += '</div><ul class="artlist">';
      // let v = 0; //给内容加个序号
      for (let i = 0; i < arrvSysSkillObjLst.length; i++) {
        //得到skillId；
        // const strSkillId = arrvSysSkillObjLst[i].skillId;
        // v++;
        let strProcess = arrvSysSkillObjLst[i].process;
        strProcess = strProcess.replace(/\r\n/g, strBr);
        strProcess = strProcess.replace(/\n/g, strBr);
        //strhtml += v + ".观点：" + arrvTopicObjectiveObjLst[i].viewpointName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>" + "&nbsp;内容:" + arrvTopicObjectiveObjLst[i].viewpointContent + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;" + arrvTopicObjectiveObjLst[i].viewpointTypeName + ":" + arrvTopicObjectiveObjLst[i].reason + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;所属主题：" + arrvTopicObjectiveObjLst[i].topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%></br>";
        strhtml += `<li><span class="rowtit color3">[技能名称]：</span><span class="abstract-text">${arrvSysSkillObjLst[i].skillName}</span></li>`;
        strhtml += `<li><span class="rowtit color3">[实施过程]：</span><span class="abstract-text">${strProcess}</span></li>`;
        //strhtml += '<li><span class="rowtit color3">[客观推论]：</span><span class="abstract-text">' + arrvTopicObjectiveObjLst[i].conclusion + '</span></li>';
        strhtml += '<li><div style="height:100%;width:100%;"><div style = "float:left;width:69%;">';

        strhtml += `<span class="rowtit color3">[编辑日期]：</span><span class="abstract-text">${arrvSysSkillObjLst[i].updDate}</span>`;

        strhtml += '</li>';

        strhtml += '</br></br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';
      //拼接；
      $('#divSysskillDataLst').html(strhtml);

      if (this.recCount >= 10) {
        $('#divPagerSysskill').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
  }

  //-------------------------------------------------------------社会关系

  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vSysSocialRelations() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strWhereCond = await this.CombinevSysSocialRelationsCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvSysSocialRelationsObjLst: Array<clsvSysSocialRelationsEN> = [];
    try {
      this.recCount = await vSysSocialRelations_GetRecCountByCondAsync(strWhereCond);
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
      arrvSysSocialRelationsObjLst = await vSysSocialRelations_GetObjLstByPagerAsync(objPagerPara);

      //换行符
      const strBr =
        '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
      //动态显示对应的数据
      let strhtml = '';

      //社会关系
      strhtml += '<div class="info" id="infoViewpoint"><div class="title btn-3">';

      strhtml += '</div><ul class="artlist">';
      // let v = 0; //给内容加个序号
      for (let i = 0; i < arrvSysSocialRelationsObjLst.length; i++) {
        //得到socialId；
        // const strSocialId = arrvSysSocialRelationsObjLst[i].socialId;
        // v++;
        let strDetailedDescription = arrvSysSocialRelationsObjLst[i].detailedDescription;
        strDetailedDescription = strDetailedDescription.replace(/\r\n/g, strBr);
        strDetailedDescription = strDetailedDescription.replace(/\n/g, strBr);
        //strhtml += v + ".观点：" + arrvTopicObjectiveObjLst[i].viewpointName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>" + "&nbsp;内容:" + arrvTopicObjectiveObjLst[i].viewpointContent + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;" + arrvTopicObjectiveObjLst[i].viewpointTypeName + ":" + arrvTopicObjectiveObjLst[i].reason + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;所属主题：" + arrvTopicObjectiveObjLst[i].topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%></br>";
        strhtml += `<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[姓名]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].fullName}</span>`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[国籍]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].nationality}</span>`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[工作单位]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].workUnit}</span>`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[专业]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].major}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[成就]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].achievement}</span></li>`;
        strhtml += `<li><span class="rowtit color3">[详细说明]：</span><span class="abstract-text">${strDetailedDescription}</span></li>`;
        strhtml += '<li><div style="height:100%;width:100%;"><div style = "float:left;width:69%;">';

        strhtml += `<span class="rowtit color3">[编辑日期]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].updDate}</span>`;

        //判断ture 、false
        if (arrvSysSocialRelationsObjLst[i].isSubmit == true) {
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已提交</span></div>';
        } else {
          strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">未提交</span></div>';
        }

        strhtml += '</li>';

        strhtml += '</br></br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';
      //拼接；
      $('#divSysSocialRelaDataLst').html(strhtml);

      if (this.recCount >= 10) {
        $('#divPagerSysSocialRela').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevSysSocialRelationsCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;
      $('#hidUserId').val(strUserId);
      //判断角色
      //管理员
      if (strRoleId != '00620001' && strRoleId != '00620002') {
        //学生 教师；

        strWhereCond += ` And ${clsvSysSocialRelationsEN.con_UpdUser} = '${strUserId}'`;
        //strWhereCond += ` And ${clsvViewpointEN.con_VPProposePeople} = '${objvUserRoleRelation.userId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysSocialRelationsCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
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
   * 设置排序字段-相当使用ViewState功能  主题用户关系
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
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: PersonalKnowledgeViewEx;

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        break;

      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PaperCollectionLogCRUDExEx.btn_Click');

        break;
    }
  }
}
