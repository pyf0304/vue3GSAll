import $ from 'jquery';
import { Public_SysSkill } from '../GradEduPublicPage/Public_SysSkill';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { SysSkillCRUD } from '@/viewsBase/GradEduTopic/SysSkillCRUD';
import { clsRTSysSkillRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTSysSkillRelaEN';
import { clsSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsSysSkillEN';

import { clsvSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSkillEN';
import {
  RTSysSkillRela_AddNewRecordAsync,
  RTSysSkillRela_DelRecordAsync,
  RTSysSkillRela_GetRecCountByCondAsync,
  RTSysSkillRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTSysSkillRelaWApi';
import { SysSkill_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsSysSkillWApi';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetButtonObjLstInDivObjN,
  GetDivObjInDivObj,
  GetInputValueInDiv,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueByIdInDiv,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType'; //技能选择
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import {
  vRTViewpoint_GetObjLstByPagerAsync,
  vRTViewpoint_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointWApi';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import {
  vPaperSubViewpoint_GetObjLstByPagerAsync,
  vPaperSubViewpoint_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';

declare function HideDialogNine(): void;
declare let window: any;

/* SysSkillCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ResearchTopicSysskillEx extends SysSkillCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public sortvRTSysSkillBy = '';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvSysSkillBy: string = "skillId";
  //技能列表
  public mstrListDivPaper = 'divSysSkillDataLst';
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
    console.log(strType, strPara);
    this.BindGv_vSysSkill();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vSysSkill':
        alert('该类没有绑定该函数：[this.BindGv_vSysSkill_Cache]！');
        //this.BindGv_vSysSkillCache();;
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  //技能
  public mstrListSysskillDivPaper = 'divSysskillDataLst';

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

        // 为查询区绑定下拉框
        await this.BindDdl4QueryRegion();

        SysSkillCRUD.sortvSysSkillBy = 'skillName Asc';
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vSysSkill();
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  //技能；
  public async liSysskillClick(divName: HTMLDivElement) {
    try {
      //主题技能关系
      this.sortvRTSysSkillBy = 'classificationId Asc,updDate Desc';
      await this.BindGv_vRTSysSkill(divName);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取客观依据列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevSysSkillCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1=1';

    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strUserId = userStore.getUserId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.skillName_q != '') {
        strWhereCond += ` And ${clsvSysSkillEN.con_SkillName} like '%${this.skillName_q}%'`;
      }
      if (this.operationTypeId_q != '' && this.operationTypeId_q != '0') {
        strWhereCond += ` And ${clsvSysSkillEN.con_OperationTypeId} = '${this.operationTypeId_q}'`;
      }

      if (clsPubLocalStorage.eduClsTypeId == '0001') {
        $('#ddlCurrEduCls_q4').hide();
        $('#ddlPublicViewPoint').show();
        if ($('#ddlPublicViewPoint').val() == '1') {
          strWhereCond += ` And ${clsvSysSkillEN.con_UpdUser} in('${clsPubLocalStorage.TopicUserList}')`;
        } else {
          strWhereCond += ` And ${clsvSysSkillEN.con_ShareId} ='03'`;
        }
      } else {
        //用户
        if (this.updUser_q != '') {
          strWhereCond += ` And ${clsvSysSkillEN.con_UpdUser} like '%${this.updUser_q}%'`;
        }
      }

      if (
        GetSelectValueInDivObj(divName, 'ddlCurrEduCls_q4') != '' &&
        $('#ddlCurrEduCls_q4').val() != '0'
      ) {
        strWhereCond += ` And idCurrEduCls='${GetSelectValueInDivObj(
          divName,
          'ddlCurrEduCls_q4',
        )}'`;
      } else {
        strWhereCond += ` And idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
      }

      //只能查询提交的技能数据
      strWhereCond += ` And ${clsvSysSkillEN.con_IsSubmit} = 'true'`;

      //排除获取已存在的关系数据 根据当前用户；
      strWhereCond += ` And skillId not in (select skillId from RTSysSkillRela where topicId = '${strTopicId}' And updUser = '${strUserId}')`;
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
    // const strListDiv: string = this.mstrListDivPaper;
    const strWhereCond = await this.CombinevSysSkillCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvSysSkillObjLst: Array<clsvPaperSubViewpointEN> = [];
    try {
      this.recCount = await vPaperSubViewpoint_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: SysSkillCRUD.sortvSysSkillBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvSysSkillObjLst = await vPaperSubViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvSysSkillObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
    //    alert(strMsg);
    //    return;
    //}
    try {
      //this.BindTab_vSysSkill(strListDiv, arrvSysSkillObjLst);
      //strhtml = "";
      ////个人观点
      //strhtml += '<div class="info" id="infoConcept"><div class="title btn-4">';

      //strhtml += '<div><a href="javascript:void(0)" title="当前相关技能">当前相关技能</a></div>';
      ////strhtml += '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加相关概念" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加相关概念</button></div>';

      //strhtml += '</div><ul class="artlist">';
      //v = 0;//给内容加个序号
      //for (let i = 0; i < arrvSysSkillObjLst.length; i++) {
      //    //得到SkillIdId；
      //    strSkillId = arrvSysSkillObjLst[i].skillId;
      //    v++;
      //    strhtml += '<li><span class="rowtit color4">' + v + '.[技能名称]：</span><span class="abstract-text">' + arrvSysSkillObjLst[i].skillName + '</span></li>';
      //    strhtml += '<li><span class="rowtit color4">[实施过程]：</span><span class="abstract-text">' + arrvSysSkillObjLst[i].process + '</span></li>';
      //    strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>' + arrvSysSkillObjLst[i].updUser;
      //    strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>' + arrvSysSkillObjLst[i].updDate;
      //    //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：';

      //    //引用数
      //    strhtml += '&nbsp;&nbsp;被引用数:' + arrvSysSkillObjLst[i].citationCount;

      //    strhtml += '&nbsp;&nbsp;<button title="引用相关技能" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkSysskillInTab_Click("' + arrvSysSkillObjLst[i].skillId + '")> ${clsIcon.faCommentDots}引用该相关概念</button>';

      //    strhtml += '</li>';

      //    strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      //}
      //strhtml += '</ul></div>';
      const strHtml = await Public_SysSkill.BindList_vSysSkill('02', arrvSysSkillObjLst);
      //拼接；
      $('#divSysSkillDataLst').html(strHtml);

      if (arrvSysSkillObjLst.length > 10) {
        //$("#divPager2").show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }

      console.log('完成BindGv_vSysSkill!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //添加技能
  public async btnAddSysskillInTab_Click() {
    // 为查询区绑定下拉框
    await this.BindDdl4QueryRegion();
    const strRoleId = userStore.getRoleId;
    if (strRoleId == '00620003') {
      await clsDropDownList.BindDdl_CurrEduClsStu('ddlCurrEduCls_q4');
    } else {
      await clsDropDownList.BindDdl_CurrEduClsTea('ddlCurrEduCls_q4');
    }
    await this.BindGv_vSysSkill();
  }
  //确定选择的观点 并添加到关系表中
  public btnOkSysskillInTab_Click(strkeyId: string) {
    //存放Id
    $('#hidSkillId').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSave();
  }
  //查询技能
  public async btnQuerySysskill_Click() {
    await this.BindGv_vSysSkill();
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjRTSysSkillRelaEN">数据传输的目的类对象</param>
*/
  public async PutDataToRTSysSkillRelaClass(pobjRTSysSkillRelaEN: clsRTSysSkillRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strUserId = userStore.getUserId;
    const strSkillId = GetInputValueInDivObj(divName, 'hidSkillId');
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);

    pobjRTSysSkillRelaEN.SetIdCurrEduCls(strIdCurrEduCls);
    pobjRTSysSkillRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTSysSkillRelaEN.SetSkillId(strSkillId); // 技能Id
    pobjRTSysSkillRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTSysSkillRelaEN.SetUpdUser(strUserId);
    pobjRTSysSkillRelaEN.SetMemo(this.memo); // 备注
    pobjRTSysSkillRelaEN.SetClassificationId('0000000000'); // 分类为000000
  }

  /* 添加新记录，保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSave() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.AddNewRecordSave.name;

    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strSkillId = GetInputValueInDivObj(divName, 'hidSkillId');
    const strUserId = userStore.getUserId;
    const objRTSysSkillRelaEN: clsRTSysSkillRelaEN = new clsRTSysSkillRelaEN();
    await this.PutDataToRTSysSkillRelaClass(objRTSysSkillRelaEN);
    try {
      //同一用户，同一主题 同一技能 只能添加一次；
      const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And skillId = '${strSkillId}' And updUser = '${strUserId}'`;
      const responseText = await RTSysSkillRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一主题同一个用户不能重复添加同一个技能！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      } else {
        const responseText2 = await RTSysSkillRela_AddNewRecordAsync(objRTSysSkillRelaEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          const strInfo = `添加记录成功!`;

          //根据ID获取最大数；
          const strWhereCond2 = ` 1 =1 and skillId=${strSkillId}`;
          const intCitationCount = await RTSysSkillRela_GetRecCountByCondAsync(strWhereCond2);

          const objSysSkillEN: clsSysSkillEN = new clsSysSkillEN();
          objSysSkillEN.SetSkillId(strSkillId);
          objSysSkillEN.SetCitationCount(intCitationCount);

          objSysSkillEN.sfUpdFldSetStr = objSysSkillEN.updFldString; //设置哪些字段被修改(脏字段)
          if (objSysSkillEN.skillId == '' || objSysSkillEN.skillId == undefined) {
            throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
          }

          await SysSkill_UpdateRecordAsync(objSysSkillEN).then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == false) {
              const strInfo = `操作不成功!`;
              alert(strInfo);
              console.log('操作不成功');
            }
          });

          //显示信息框
          alert(strInfo);
          HideDialogNine();
        } else {
          const strInfo = `添加记录不成功!`;

          //显示信息框
          alert(strInfo);
        }
      }
      return responseText; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }

  //--------------------------------=================================================================--技能
  /* 函数功能:在数据 列表中跳转到某一页
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
 <param name = "intPageIndex">页序号</param>
*/
  //public IndexPageTen(intPageIndex: number) {
  //    if (intPageIndex == 0) {
  //        intPageIndex = this.objPager.pageCount;
  //    }
  //    console.log("跳转到" + intPageIndex + "页");
  //    this.setCurrPageIndex(intPageIndex, this.divName4Pager);
  //    this.BindGv_vRTSysSkill();
  //}
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
 <returns>条件串(strWhereCond)</returns>
*/
  public CombinevRTSysSkillCondition(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 `;
    strWhereCond += ` And ${clsvRTViewpointEN.con_gsKnowledgeTypeId} = ${enumgs_KnowledgeType.Skill_06}`;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTViewpointEN.con_TopicId} = '${strTopicId}'`;
      }

      const strClassificationId = this.classificationId;
      if (strClassificationId != '') {
        strWhereCond += ` And ${clsvRTViewpointEN.con_ClassificationId} = '${strClassificationId}'`;
      }

      // const strViewsId = this.viewsId;
      // if (strViewsId != '') {
      //   strWhereCond += ` And ${clsvRTViewpointEN.con_mId} = ${strViewsId}`;
      // }

      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTSysSkillRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vRTSysSkill(divName: HTMLDivElement) {
    // const strListDiv: string = this.mstrListSysskillDivPaper; //显示div
    const strWhereCond = await this.CombinevRTSysSkillCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvRTSysSkillObjLst: Array<clsvRTViewpointEN> = [];
    //arrvUsersObjLst: Array<clsvUsersSimEN> = [];
    try {
      this.recCount = await vRTViewpoint_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.sortvRTSysSkillBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvRTSysSkillObjLst = await vRTViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    try {
      const divDataLst = GetDivObjInDivObj(divName, 'divDataLst');

      const strHtml = await Public_SysSkill.BindList_vRTSysSkill('06', arrvRTSysSkillObjLst);

      //拼接；

      divDataLst.innerHTML = strHtml;
      this.SetEventForSkill(divName);
      if (arrvRTSysSkillObjLst.length > 10) {
        $('#divPagerSysskill').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(divName, this, this.divName4Pager);
      }
      //this.BindTab_vRTSysSkill(arrvRTSysSkillObjLst, arrvUsersObjLst);
      console.log('完成BindGv_vRTSysSkill!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public SetEventForSkill(objLayOut: HTMLDivElement) {
    {
      const arrbtnAddToCurrTopicId = GetButtonObjLstInDivObjN(objLayOut, 'btnUpdSysskill');
      for (const btnUpdSysskill of arrbtnAddToCurrTopicId) {
        if (btnUpdSysskill != null) {
          const strKeyId = btnUpdSysskill.getAttribute('keyid');

          if (strKeyId != null) {
            const strTopicId = clsPrivateSessionStorage.topicIdInTree;

            btnUpdSysskill.setAttribute('keyId2', strKeyId);
            const arr = strKeyId.split('|');
            if (arr.length != 2) continue;
            const objData = { subViewpointId: arr[0], paperId: arr[1], topicId: strTopicId };
            (function (objData) {
              btnUpdSysskill.onclick = function () {
                ResearchTopicSysskillEx.vuebtn_Click('UpdSysskill', objData);
              };
            })(objData);
          }
        }
      }
    }
    {
      const arrbtnAddToCurrTopicId = GetButtonObjLstInDivObjN(
        objLayOut,
        'btnAddClassificationRecordInTab',
      );
      for (const btnAddClassificationRecordInTab of arrbtnAddToCurrTopicId) {
        if (btnAddClassificationRecordInTab != null) {
          const strKeyId = btnAddClassificationRecordInTab.getAttribute('keyid');

          if (strKeyId != null) {
            btnAddClassificationRecordInTab.setAttribute('keyId2', strKeyId);

            (function (strKeyId) {
              btnAddClassificationRecordInTab.onclick = function () {
                ResearchTopicSysskillEx.vuebtn_Click('AddClassificationRecordInTab', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }
    {
      const arrbtnAddToCurrTopicId = GetButtonObjLstInDivObjN(
        objLayOut,
        'btnUpdateClassificationRecordInTab',
      );
      for (const btnUpdateClassificationRecordInTab of arrbtnAddToCurrTopicId) {
        if (btnUpdateClassificationRecordInTab != null) {
          const strKeyId = btnUpdateClassificationRecordInTab.getAttribute('keyid');

          if (strKeyId != null) {
            const strTopicId = clsPrivateSessionStorage.topicIdInTree;
            const arr = strKeyId.split('|');
            if (arr.length != 2) continue;
            // const strKeyId = `${objvConceptEx.subViewpointId}|${objvConceptEx.memo}`;
            const objData = { subViewpointId: arr[0], strClassificationId: arr[1] };
            (function (objData) {
              btnUpdateClassificationRecordInTab.onclick = function () {
                ResearchTopicSysskillEx.vuebtn_Click('UpdateClassificationRecordInTab', objData);
              };
            })(objData);
          }
        }
      }
    }
  }
  /* 
在数据表里删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
*/
  public async btnDelSysskillRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const divName = this.getDivName(enumDivType.LayOut_01);
      if (divName == null) return;
      const lngKeyId = Number(strKeyId);
      await this.DelRTSysSkillRelaRecord(lngKeyId);
      await this.BindGv_vRTSysSkill(divName);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  /* 
根据关键字删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRTSysSkillRelaRecord(lngmId: number) {
    try {
      const responseText = await RTSysSkillRela_DelRecordAsync(lngmId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /**
   * 备注 (Used In Clear())
   **/
  public set memo(value: string) {
    SetInputValueInDivObj(this.divLayout, 'txtMemo', value);
  }
  /**
   * 备注 (Used In PutDataToClass())
   **/
  public get memo(): string {
    const strValue = GetInputValueInDivObj(this.divLayout, 'txtMemo');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  public get classificationId(): string {
    return ResearchTopicSysskillEx.GetPropValue('classificationId');
  }

  public get viewsId(): string {
    return ResearchTopicSysskillEx.GetPropValue('viewsId');
  }
}
