import $ from 'jquery';
import { Public_Viewpoint } from '../GradEduPublicPage/Public_Viewpoint';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { ViewpointCRUD } from '@/viewsBase/GradEduTopic/ViewpointCRUD';
import { clsRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointRelaEN';
import { clsViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointEN';
import { clsvRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointRelaEN';
import { clsvViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvViewpointEN';
import {
  RTViewpointRela_AddNewRecordAsync,
  RTViewpointRela_DelRecordAsync,
  RTViewpointRela_GetObjBymIdAsync,
  RTViewpointRela_GetRecCountByCondAsync,
  RTViewpointRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTViewpointRelaWApi';
import { Viewpoint_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsViewpointWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { BindTabV2Where_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetButtonObjLstInDivObj,
  GetButtonObjLstInDivObjN,
  GetDivObjInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  SetInputValueInDivObj,
  getDivObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import {
  vRTViewpoint_GetObjLstByPagerAsync,
  vRTViewpoint_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointWApi';
import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import {
  vPaperSubViewpoint_GetObjLstByPagerAsync,
  vPaperSubViewpoint_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare function HideDialogTwo(): void;
declare let window: any;
/* WApiConceptCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ResearchTopicViewpointEx extends ViewpointCRUD {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //观点列表
  public mstrListDivViewpoint = 'divViewpointDataLst';

  //个人观点关系
  public mstrListDivRtViewPointRela = 'divRtViewPointRelaDataLst';
  //专家观点
  public mstrListDivRtExpertViewPointRela = 'divRtExpertViewPointRelaDataLst';
  public sortvRTViewpointRelaBy = '';
  public currPageIndexViewpoint = 1;
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 30;
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
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad_Cache)
*/
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //await this.BindGv_ConceptCache();;
        //主题观点关系
        this.sortvRTViewpointRelaBy = 'classificationId Asc,updDate Desc';

        //观点
        this.hidSortvViewpointBy = 'updDate Desc';
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  //个人观点
  public async liViewpointClick(divName: HTMLDivElement) {
    try {
      await this.BindGv_vRTViewpointRela(divName);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取个人观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //专家观点
  public async liExpertViewpointClick(divName: HTMLDivElement) {
    try {
      await this.BindGv_vRTExpertViewpointRela(divName);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取专家观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //////////////////////////////////////////////////////////////////个人观点部分
  //观点查询按钮
  public async btnViewpointQuery_Click() {
    await this.BindGv_vViewpoint();
  }

  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
 */
  public async BindGv_vViewpoint() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strWhereCond = await this.CombinevViewpointCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvViewpointObjLst: Array<clsvPaperSubViewpointEN> = [];
    try {
      this.recCount = await vPaperSubViewpoint_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: 30,
        whereCond: strWhereCond,
        orderBy: this.hidSortvViewpointBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvViewpointObjLst = await vPaperSubViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    try {
      const strUserTypeId = GetInputValueInDivObj(divName, 'hidUserTypeId');
      const strHtml = await Public_Viewpoint.BindList_vViewpoint(
        '02',
        strUserTypeId,
        arrvViewpointObjLst,
      );

      //拼接；
      $('#divViewpointDataLst').html(strHtml);

      if (arrvViewpointObjLst.length > 10) {
        //$("#divPager1").show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
      console.log('完成BindGv_vViewpoint!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombinevViewpointCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ' 1=1 ';

    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    // const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId');
    const strUserId = userStore.getUserId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (GetInputValueInDivObj(divName, 'txtViewpointName_q') != '') {
        strWhereCond += ` And ${clsvViewpointEN.con_ViewpointName} like '%${$(
          '#txtViewpointName_q',
        ).val()}%'`;
      }

      if (clsPubLocalStorage.eduClsTypeId == '0001') {
        $('#ddlCurrEduCls_q1').hide();
        $('#ddlPublicViewPoint').show();
        if ($('#ddlPublicViewPoint').val() == '1') {
          strWhereCond += ` And ${clsvViewpointEN.con_UpdUser} in('${clsPubLocalStorage.TopicUserList}')`;
        } else {
          strWhereCond += ` And ${clsvViewpointEN.con_ShareId} ='03'`;
        }
      } else {
        //用户
        if (
          GetSelectValueInDivObj(divName, 'ddlViewUpdName_q') != '' &&
          $('#ddlViewUpdName_q').val() != '0'
        ) {
          strWhereCond += ` And updUser = '${GetSelectValueInDivObj(divName, 'ddlViewUpdName_q')}'`;
        }
      }

      if (
        GetSelectValueInDivObj(divName, 'ddlCurrEduCls_q1') != '' &&
        $('#ddlCurrEduCls_q1').val() != '0'
      ) {
        strWhereCond += ` And idCurrEduCls='${GetSelectValueInDivObj(
          divName,
          'ddlCurrEduCls_q1',
        )}'`;
      } else {
        strWhereCond += ` And idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
      }
      //根据传入的usertypeId 来区分是本人观点还是专家观点
      const strhidUserTypeId = GetInputValueInDivObj(divName, 'hidUserTypeId');
      if (strhidUserTypeId != '') {
        strWhereCond += ` And ${clsvViewpointEN.con_UserTypeId} = '${strhidUserTypeId}'`;
      }
      //只能查询提交的观点数据
      strWhereCond += ` And ${clsvViewpointEN.con_IsSubmit} = 'true'`;

      //排除获取已存在的关系数据 根据当前用户；
      strWhereCond += ` And viewpointId not in (select viewpointId from RTViewpointRela where topicId = '${strTopicId}' And updUser = '${strUserId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 显示vViewpoint对象的所有属性值
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   <param name = "divContainer">显示容器</param>
   <param name = "arrViewpointObjLst">需要绑定的对象列表</param>
 */

  public async BindTab_vViewpoint(
    divContainer: HTMLDivElement,
    arrvViewpointObjLst: Array<clsvViewpointEN>,
  ) {
    const strThisFuncName = this.BindTab_vViewpoint.name;
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
        fldName: 'viewpointName',
        colHeader: '观点名称',
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
        fldName: 'viewpointContent',
        colHeader: '观点内容',
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
        fldName: 'viewpointTypeName',
        colHeader: '观点类型名',
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
        colHeader: '编辑日期',
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
        colHeader: '编辑人',
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
          btn1.setAttribute('onclick', `btnOkInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
    ];
    BindTabV2Where_V(
      divContainer,
      arrvViewpointObjLst,
      arrDataColumn,
      'viewpointId',
      'TopicViewpoint',
    );
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    //BindTab(o, arrvViewpointObjLst, arrDataColumn, "viewpointId");
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
  }
  public async btnAddRela_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strRoleId = userStore.getRoleId;
    if (strRoleId == '00620003') {
      await clsDropDownList.BindDdl_CurrEduClsStu('ddlCurrEduCls_q1');
    } else {
      await clsDropDownList.BindDdl_CurrEduClsTea('ddlCurrEduCls_q1');
    }

    //根据传入的usertypeId 来区分是本人观点还是专家观点
    const strhidUserTypeId = GetInputValueInDivObj(divName, 'hidUserTypeId');
    await clsDropDownList.BindDdl_ViewpointUserIdByPara_Cache(
      'ddlViewUpdName_q',

      strhidUserTypeId,
    );
    await this.BindGv_vViewpoint();
  }
  //确定选择的观点 并添加到关系表中
  public btnOkInTab_Click(strkeyId: string) {
    //存放Id
    $('#hidViewpointId').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSaveViewpointRela();
  }
  /* 添加新记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 */
  public async AddNewRecordSaveViewpointRela() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    const strThisFuncName = this.AddNewRecordSaveViewpointRela.name;

    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId');
    const strUserId = userStore.getUserId;
    const objRTViewpointRelaEN: clsRTViewpointRelaEN = new clsRTViewpointRelaEN();
    await this.PutDataToRTViewpointRelaClass(objRTViewpointRelaEN);

    try {
      //同一用户，同一主题 同一观点 只能添加一次；
      const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And viewpointId = '${strViewpointId}' And updUser = '${strUserId}'`;
      //const strWhere = " 1 = 1 And topicId = '" + strTopicId + "' And viewpointId = '" + strViewpointId + "'";
      const responseText = await RTViewpointRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一主题不能重复添加同一个观点！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await RTViewpointRela_AddNewRecordAsync(objRTViewpointRelaEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加成功!`;

        //根据ID获取最大数；
        const strWhereCond2 = ` 1 =1 and viewpointId=${strViewpointId}`;
        const intCitationCount = await RTViewpointRela_GetRecCountByCondAsync(strWhereCond2);

        const objViewpointEN: clsViewpointEN = new clsViewpointEN();
        objViewpointEN.SetViewpointId(strViewpointId);
        objViewpointEN.SetCitationCount(intCitationCount);

        objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        await Viewpoint_UpdateRecordAsync(objViewpointEN).then((jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == true) {
            this.BindGv_vRTViewpointRela(divName);
          } else {
            const strInfo = `点赞不成功!`;
            alert(strInfo);
            console.log('点赞不成功');
          }
        });

        HideDialogTwo();
        //显示信息框
        alert(strInfo);
      } else {
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
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  /* 函数功能:把界面上的属性数据传到类对象中
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   <param name = "pobjRTViewpointRelaEN">数据传输的目的类对象</param>
 */
  public async PutDataToRTViewpointRelaClass(pobjRTViewpointRelaEN: clsRTViewpointRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);

    const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId');
    const strUserId = userStore.getUserId;
    pobjRTViewpointRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTViewpointRelaEN.SetIdCurrEduCls(strIdCurrEduCls);
    pobjRTViewpointRelaEN.SetViewpointId(strViewpointId); // 观点Id
    pobjRTViewpointRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTViewpointRelaEN.SetUpdUser(strUserId); // 修改用户Id// 修改用户Id
    pobjRTViewpointRelaEN.SetClassificationId('0000000000'); // 分类为000000
    //pobjRTViewpointRelaEN.SetMemo(this.memo;// 备注
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvViewpointBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvViewpointBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvViewpointBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvViewpointBy');
  }

  /* 函数功能:在数据 列表中跳转到某一页 观点列表
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
  <param name = "intPageIndex">页序号</param>
*/
  public IndexPageOne(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_vViewpoint();
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////专家------观点关系

  //添加观点 展示观点列表数据
  public async btnAddExperRela_Click(divName: HTMLDivElement) {
    await this.BindGv_vRTExpertViewpointRela(divName);
  }
  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */
  public CombinevRTExpertViewpointRelaCondition(): string {
    let strWhereCond = ' 1 = 1 ';
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
      //只显示专家观点数据
      strWhereCond += ` And ${clsvRTViewpointEN.con_gsKnowledgeTypeId} ='${enumgs_KnowledgeType.ExpertOpinion_02}'`;
      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；

      //判断角色
      //管理员
      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        //       $("#btnDelRecord").show();
      } else if (userStore.getRoleId == '00620002') {
        //教师
        //         $("#btnDelRecord").show();
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        //  strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + objvUserRoleRelation.userId + "' And isEffective='1') And isEffective='1')";
      } else {
        //学生；
        //         $("#btnDelRecord").show();
        //   strWhereCond += ` And ${clsvRTViewpointRelaEN.con_UpdUser} = '${objvUserRoleRelation.userId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTViewpointRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的记录对象的列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
  */
  public async BindGv_vRTExpertViewpointRela(divName: HTMLDivElement) {
    // const strListDiv: string = this.mstrListDivRtExpertViewPointRela;
    const strWhereCond = await this.CombinevRTExpertViewpointRelaCondition();
    const intCurrPageIndex = this.currPageIndexViewpoint; //获取当前页
    let arrvRTViewpointRelaObjLst: Array<clsvRTViewpointEN> = [];
    try {
      this.recCount = await vRTViewpoint_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.sortvRTViewpointRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvRTViewpointRelaObjLst = await vRTViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    try {
      this.BindList_vRTViewpointRela(divName, '02', arrvRTViewpointRelaObjLst);
      //this.BindTab_vRTExpertViewpointRela(strListDiv, arrvRTViewpointRelaObjLst);
      console.log('完成BindGv_vRTViewpointRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////主题观点关系
  /* 观点列表表头排序；
   */

  public async SortBy(objAnchorElement: any) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      ViewpointCRUD.ascOrDesc4SortFun,
      ViewpointCRUD.sortvViewpointBy,
      strSortExpress,
    );
    ViewpointCRUD.sortvViewpointBy = sortBy;
    ViewpointCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    ViewpointCRUD.sortFunStatic = sortFun;
    await this.BindGv_vViewpoint();
  }
  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */
  public async CombinevRTViewpointRelaCondition(): Promise<string> {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTViewpointRelaEN.con_TopicId} = '${strTopicId}'`;
      }

      const strClassificationId = this.classificationId;
      if (strClassificationId != '') {
        strWhereCond += ` And ${clsvRTViewpointRelaEN.con_ClassificationId} = '${strClassificationId}'`;
      }
      //else {
      //    strWhereCond += ` And ${clsvRTViewpointRelaEN.con_ClassificationId} = '0000000000'`;
      //}

      // const strViewsId = this.viewsId;
      // if (strViewsId != '') {
      //   strWhereCond += ` And ${clsvRTViewpointRelaEN.con_mId} = ${strViewsId}`;
      // }

      //只显示个人观点数据
      strWhereCond += ` And ${clsvRTViewpointEN.con_gsKnowledgeTypeId} ='${enumgs_KnowledgeType.PersonalOpinion_01}'`;
      //读取session角色 来判断绑定不同数据列表
      //判断角色
      //管理员
      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        //     $("#btnDelRecord").show();
      } else if (userStore.getRoleId == '00620002') {
        //教师
        //    $("#btnDelRecord").show();
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        //     strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + objvUserRoleRelation.userId + "' And isEffective='1') And isEffective='1')";
      } else {
        //学生；
        //  $("#btnDelRecord").show();
        //    strWhereCond += ` And ${clsvRTViewpointRelaEN.con_UpdUser} = '${objvUserRoleRelation.userId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTViewpointRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的记录对象的列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
  */
  public async BindGv_vRTViewpointRela(divName: HTMLDivElement) {
    // const strListDiv: string = this.mstrListDivRtViewPointRela;
    const strWhereCond = await this.CombinevRTViewpointRelaCondition();
    const intCurrPageIndex = this.currPageIndexViewpoint; //获取当前页
    let arrvRTViewpointRelaObjLst: Array<clsvRTViewpointEN> = [];
    try {
      this.recCount = await vRTViewpoint_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.sortvRTViewpointRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvRTViewpointRelaObjLst = await vRTViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    try {
      this.BindList_vRTViewpointRela(divName, '01', arrvRTViewpointRelaObjLst);
      console.log('完成BindGv_vRTViewpointRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  public async BindList_vRTViewpointRela(
    divName: HTMLDivElement,
    strVType: string,
    arrvRTViewpointRelaObjLst: Array<clsvRTViewpointEN>,
  ) {
    const divDataLst = GetDivObjInDivObj(divName, 'divDataLst');

    $('#hidPageType').val(strVType);
    const strUserTypeId = strVType;
    let strHtml = '';
    if (arrvRTViewpointRelaObjLst.length > 0) {
      strHtml = await Public_Viewpoint.BindList_vRTViewpointRela(
        '06',
        strUserTypeId,
        arrvRTViewpointRelaObjLst,
      );
    }
    //拼接；
    if (strVType == '01') {
      divDataLst.innerHTML = strHtml;

      if (arrvRTViewpointRelaObjLst.length > 10) {
        $('#divPagerViewpoint').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(divName, this, this.divName4Pager);
      }
    } else if (strVType == '02') {
      divDataLst.innerHTML = strHtml;

      if (arrvRTViewpointRelaObjLst.length > 10) {
        $('#divExpertPagerViewpoint').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(divName, this, this.divName4Pager);
      }
    }
    this.SetEventForViewpoint(divName);
  }

  public SetEventForViewpoint(objLayOut: HTMLDivElement) {
    {
      const arrbtnAddToCurrTopicId = GetButtonObjLstInDivObjN(objLayOut, 'btnUpdViewPoint');
      for (const btnUpdViewPoint of arrbtnAddToCurrTopicId) {
        if (btnUpdViewPoint != null) {
          const strKeyId = btnUpdViewPoint.getAttribute('keyid');

          if (strKeyId != null) {
            const strTopicId = clsPrivateSessionStorage.topicIdInTree;

            btnUpdViewPoint.setAttribute('keyId2', strKeyId);
            const arr = strKeyId.split('|');
            if (arr.length != 2) continue;
            const objData = { subViewpointId: arr[0], paperId: arr[1], topicId: strTopicId };
            (function (objData) {
              btnUpdViewPoint.onclick = function () {
                ResearchTopicViewpointEx.vuebtn_Click('UpdViewPoint', objData);
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
            const strTopicId = clsPrivateSessionStorage.topicIdInTree;

            btnAddClassificationRecordInTab.setAttribute('keyId2', strKeyId);

            (function (strKeyId) {
              btnAddClassificationRecordInTab.onclick = function () {
                ResearchTopicViewpointEx.vuebtn_Click('AddClassificationRecordInTab', strKeyId);
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
            btnUpdateClassificationRecordInTab.setAttribute('keyId2', strKeyId);
            const objData = { subViewpointId: arr[0], strClassificationId: arr[1] };
            (function (objData) {
              btnUpdateClassificationRecordInTab.onclick = function () {
                ResearchTopicViewpointEx.vuebtn_Click('UpdateClassificationRecordInTab', objData);
              };
            })(objData);
          }
        }
      }
    }
  }
  public async btnDelViewPointRelaRecordInTab_Click(strKeyId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);

      const strUserId = userStore.getUserId;
      //strIdCurrEduclsstrTopicId = clsPrivateSessionStorage.topicIdInTree;
      //const strWhereCond = ` 1=1 And ${clsRTUserRelaEN.con_TopicId} = '${strTopicId}' And ${clsRTUserRelaEN.con_UserId} ='${strUserId}'`;
      //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
      await RTViewpointRela_GetObjBymIdAsync(lngKeyId).then((jsonData) => {
        const objRtViewpointEN: clsRTViewpointRelaEN = <clsRTViewpointRelaEN>jsonData;
        if (objRtViewpointEN != null) {
          if (objRtViewpointEN.updUser == strUserId) {
            //01 个人
            if (GetInputValueInDivObj(divName, 'hidPageType') == '01') {
              this.DelViewPointRelaRecord(lngKeyId, '01');
            } else if (GetInputValueInDivObj(divName, 'hidPageType') == '02') {
              this.DelViewPointRelaRecord(lngKeyId, '02');
            }
          } else {
            //成员
            const strMsg = `您只能删除自己添加的数据！`;
            alert(strMsg);
            return;
          }
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //删除专家观点关系数据
  public async btnDelExpertViewPointRelaRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      const strUserId = userStore.getUserId;

      //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
      await RTViewpointRela_GetObjBymIdAsync(lngKeyId).then((jsonData) => {
        const objRtExpertViewpointEN: clsRTViewpointRelaEN = <clsRTViewpointRelaEN>jsonData;
        if (objRtExpertViewpointEN != null) {
          if (objRtExpertViewpointEN.updUser == strUserId) {
            //01 个人
            this.DelViewPointRelaRecord(lngKeyId, '02');
            // const responseText2 = await this.BindGv_vRTPaperRela();
          } else {
            //成员
            const strMsg = `您只能删除自己添加的数据！`;
            alert(strMsg);
            return;
          }
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  /* 
    根据关键字删除记录  type 01 个人 02专家
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   */
  public async DelViewPointRelaRecord(lngmId: number, TypeId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    try {
      const returnInt: number = await RTViewpointRela_DelRecordAsync(lngmId);
      if (returnInt > 0) {
        //type 01 个人 02专家
        if (TypeId == '01') {
          //个人
          this.BindGv_vRTViewpointRela(divName);
        } else {
          //专家
          this.BindGv_vRTExpertViewpointRela(divName);
        }

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
  //分页数据
  /* 函数功能:在数据 列表中跳转到某一页 观点列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
 <param name = "intPageIndex">页序号</param>
*/
  public IndexPageSix(intPageIndex: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_vRTViewpointRela(divName);
  }

  /* 观点 个人 专家
   */
  public async SortByViewpoint(strSortByFld: string) {
    if (this.hidSortvViewpointBy.indexOf(strSortByFld) >= 0) {
      if (this.hidSortvViewpointBy.indexOf('Asc') >= 0) {
        this.hidSortvViewpointBy = `${strSortByFld} Desc`;
      } else {
        this.hidSortvViewpointBy = `${strSortByFld} Asc`;
      }
    } else {
      this.hidSortvViewpointBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_vViewpoint();
  }

  /*主题个人观点关系
   */
  public async SortByRTViewpoint(strSortByFld: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    if (this.sortvRTViewpointRelaBy.indexOf(strSortByFld) >= 0) {
      if (this.sortvRTViewpointRelaBy.indexOf('Asc') >= 0) {
        this.sortvRTViewpointRelaBy = `${strSortByFld} Desc`;
      } else {
        this.sortvRTViewpointRelaBy = `${strSortByFld} Asc`;
      }
    } else {
      this.sortvRTViewpointRelaBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_vRTViewpointRela(divName);
  }

  /*主题专家关系
   */
  public async SortByRTExpertViewpoint(strSortByFld: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    if (this.sortvRTViewpointRelaBy.indexOf(strSortByFld) >= 0) {
      if (this.sortvRTViewpointRelaBy.indexOf('Asc') >= 0) {
        this.sortvRTViewpointRelaBy = `${strSortByFld} Desc`;
      } else {
        this.sortvRTViewpointRelaBy = `${strSortByFld} Asc`;
      }
    } else {
      this.sortvRTViewpointRelaBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_vRTExpertViewpointRela(divName);
  }
  public get classificationId(): string {
    return ResearchTopicViewpointEx.GetPropValue('classificationId');
  }

  public get viewsId(): string {
    return ResearchTopicViewpointEx.GetPropValue('viewsId');
  }
}
