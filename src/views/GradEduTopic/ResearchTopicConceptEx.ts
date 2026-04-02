import $ from 'jquery';
import { Public_Concept } from '../GradEduPublicPage/Public_Concept';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { ConceptCRUD } from '@/viewsBase/GradEduTopic/ConceptCRUD';
import { clsConceptEN } from '@/ts/L0Entity/GradEduTopic/clsConceptEN';
import { clsRTConceptRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTConceptRelaEN';
import { clsvConceptEN } from '@/ts/L0Entity/GradEduTopic/clsvConceptEN';
import { Concept_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsConceptWApi';
import {
  RTConceptRela_AddNewRecordAsync,
  RTConceptRela_DelRecordAsync,
  RTConceptRela_GetObjBymIdAsync,
  RTConceptRela_GetRecCountByCondAsync,
  RTConceptRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTConceptRelaWApi';
import { vConcept_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvConceptWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetButtonObjLstInDivObjN,
  GetDivObjInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import {
  vRTViewpoint_GetObjLstByPagerAsync,
  vRTViewpoint_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointWApi';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { vPaperSubViewpoint_GetObjLstByPagerAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
import { userStore } from '@/store/modulesShare/user';

declare function HideDialogSeven(): void;
declare let window: any;
/* WApiConceptCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ResearchTopicConceptEx extends ConceptCRUD {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public sortvRTConceptRelaBy = '';
  //论文列表
  public mstrListDivPaper = 'divConceptDataLst';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortConceptBy: string = "conceptId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 50;
  }

  //概念
  public mstrListConceptDivPaper = 'divRtConceptRelaDataLst';

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
  public async PageLoadCache() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //const arrConcept_Cache = await vConcept_GetObjLstAsync("1=1");
        //1、为下拉框设置数据源,绑定列表数据

        //1、为下拉框设置数据源,绑定列表数据
        ConceptCRUD.sortConceptBy = 'updDate Desc';
        //const objConcept_Cond = this.CombineConceptConditionObj();
        //this.recCount = await vConcept_GetRecCountByCondCache(objConcept_Cond);
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_ConceptCache();
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  //相关概念
  public async liConceptClick(divName: HTMLDivElement) {
    try {
      //主题概念关系
      this.sortvRTConceptRelaBy = 'classificationId Asc,updDate Desc';

      await this.BindGv_vRTConceptRela(divName);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取相关概念列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombineConceptCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1=1';
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    // const strConceptId = GetInputValueInDivObj(divName, 'hidConceptId');
    const strUserId = userStore.getUserId;

    const txtConceptUpdName_q = GetInputValueInDivObj(divName, 'txtConceptUpdName_q');
    //获取用户缓存

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    const objConcept_Cond: clsConceptEN = new clsConceptEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.conceptName_q != '') {
        strWhereCond += ` And ${clsConceptEN.con_ConceptName} like '%${this.conceptName_q}%'`;
        objConcept_Cond.SetCondFldValue(clsConceptEN.con_ConceptName, this.conceptName_q, 'like');
      }

      if (clsPubLocalStorage.eduClsTypeId == '0001') {
        $('#ddlCurrEduCls_q2').hide();
        $('#ddlPublicViewPoint').show();
        if ($('#ddlPublicViewPoint').val() == '1') {
          strWhereCond += ` And ${clsvConceptEN.con_UpdUser} in('${clsPubLocalStorage.TopicUserList}')`;
        } else {
          strWhereCond += ` And ${clsvConceptEN.con_ShareId} ='03'`;
        }
      } else {
        //用户
        if (txtConceptUpdName_q != '') {
          const objUser = arrUsers.find((x) => x.userName == txtConceptUpdName_q);
          if (objUser != null) {
            strWhereCond += ` And \${clsvConceptEN.con_UpdUser} = '${objUser.userId}'`;
            objConcept_Cond.SetCondFldValue(clsvConceptEN.con_UpdUser, objUser.userId, '=');
          }
          //strWhereCond += ` And ${clsvConceptEN.con_UserName} like '%${txtConceptUpdName_q}%'`;
          //objConcept_Cond.SetCondFldValue(clsvConceptEN.con_UserName, txtConceptUpdName_q, "like");
        }
      }

      if (
        GetSelectValueInDivObj(divName, 'ddlCurrEduCls_q2') != '' &&
        $('#ddlCurrEduCls_q2').val() != '0'
      ) {
        strWhereCond += ` And idCurrEduCls='${GetSelectValueInDivObj(
          divName,
          'ddlCurrEduCls_q2',
        )}'`;
      } else {
        strWhereCond += ` And idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
      }
      //if (this.IsSubmit_q == true) {
      //    strWhereCond += ` And ${clsConceptEN.con_IsSubmit} = '1'`;
      //    objConcept_Cond.SetCondFldValue(clsConceptEN.con_IsSubmit, true, "=");
      //}
      //else {
      //    strWhereCond += ` And ${clsConceptEN.con_IsSubmit} = '0'`;
      //    objConcept_Cond.SetCondFldValue(clsConceptEN.con_IsSubmit, false, "=");
      //}

      //只能查询提交的概念数据
      strWhereCond += ` And ${clsConceptEN.con_IsSubmit} = 'true'`;

      //排除获取已存在的关系数据 根据当前用户；
      strWhereCond += ` And conceptId not in (select conceptId from RTConceptRela where topicId = '${strTopicId}' And updUser = '${strUserId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineConceptConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv_Cache)
*/
  public async BindGv_ConceptCache() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // const strListDiv: string = this.mstrListDivPaper;
    const strWhereCond = await this.CombineConceptCondition();
    // strWhereCond = JSON.stringify(objConceptEN_Sim);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvConceptObjLst: Array<clsvPaperSubViewpointEN> = [];
    try {
      //this.recCount = Concept_GetRecCountByCond(objConcept_Cond);
      this.recCount = await vConcept_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: ConceptCRUD.sortConceptBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };

      arrvConceptObjLst = await vPaperSubViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }

    try {
      const strHtml = await Public_Concept.BindList_vConcept('02', arrvConceptObjLst);
      //拼接；
      $('#divConceptDataLst').html(strHtml);

      if (arrvConceptObjLst.length > 10) {
        //$("#divPager2").show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
      console.log('完成BindGv_Concept!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //概念查询按钮
  public async btnConceptQuery_Click() {
    await this.BindGv_ConceptCache();
  }
  //分页数据
  /* 函数功能:在数据 列表中跳转到某一页 观点列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
 <param name = "intPageIndex">页序号</param>
*/
  public IndexPageSeven(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_ConceptCache();
  }

  //添加观点 展示观点列表数据
  public async btnAddConceptRela_Click() {
    const strRoleId = userStore.getRoleId;
    if (strRoleId == '00620003') {
      await clsDropDownList.BindDdl_CurrEduClsStu('ddlCurrEduCls_q2');
    } else {
      await clsDropDownList.BindDdl_CurrEduClsTea('ddlCurrEduCls_q2');
    }
    await this.BindGv_ConceptCache();
  }
  //确定选择的观点 并添加到关系表中
  public btnOkConceptInTab_Click(strkeyId: string) {
    //存放Id
    $('#hidConceptId').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSave();
  }

  /* 添加新记录，保存函数
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSave() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.AddNewRecordSave.name;

    //this.DivName = "divAddNewRecordSave";
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strConceptId = GetInputValueInDivObj(divName, 'hidConceptId');
    // const strUserId = userStore.getUserId;
    const objRTConceptRelaEN: clsRTConceptRelaEN = new clsRTConceptRelaEN();
    this.PutDataToRTConceptRelaClass(objRTConceptRelaEN);
    try {
      //同一主题 同一概念 只能添加一次；
      const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And conceptId = '${strConceptId}'`;
      //const strWhere = " 1 = 1 And topicId = '" + strTopicId + "' And viewpointId = '" + strViewpointId + "'";
      const responseText = await RTConceptRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一主题同一个用户不能重复添加同一个观点！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      } else {
        const responseText = await RTConceptRela_AddNewRecordAsync(objRTConceptRelaEN);
        const returnBool = !!responseText;
        if (returnBool == true) {
          const strInfo = `添加记录成功!`;

          //根据ID获取最大数；
          const strWhereCond2 = ` 1 =1 and conceptId=${strConceptId}`;
          const intCitationCount = await RTConceptRela_GetRecCountByCondAsync(strWhereCond2);

          const objConceptEN: clsConceptEN = new clsConceptEN();
          objConceptEN.SetConceptId(strConceptId);
          objConceptEN.SetCitationCount(intCitationCount);

          objConceptEN.sfUpdFldSetStr = objConceptEN.updFldString; //设置哪些字段被修改(脏字段)
          if (objConceptEN.conceptId == '' || objConceptEN.conceptId == undefined) {
            throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
          }

          await Concept_UpdateRecordAsync(objConceptEN).then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == false) {
              const strInfo = `操作不成功!`;
              alert(strInfo);
              console.log('操作不成功');
            }
          });

          //显示信息框
          alert(strInfo);
          HideDialogSeven();
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
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjRTConceptRelaEN">数据传输的目的类对象</param>
   */
  public PutDataToRTConceptRelaClass(pobjRTConceptRelaEN: clsRTConceptRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strConceptId = GetInputValueInDivObj(divName, 'hidConceptId');
    const strUserId = userStore.getUserId;
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    pobjRTConceptRelaEN.SetIdCurrEduCls(strIdCurrEduCls);
    pobjRTConceptRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTConceptRelaEN.SetConceptId(strConceptId); // 概念Id
    pobjRTConceptRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTConceptRelaEN.SetUpdUser(strUserId); // 修改用户Id
    //pobjRTConceptRelaEN.SetMemo(this.memo;// 备注
    pobjRTConceptRelaEN.SetClassificationId('0000000000'); // 分类为000000
  }

  /* 概念
   */
  public async SortByConcept(strSortByFld: string) {
    if (ConceptCRUD.sortConceptBy.indexOf(strSortByFld) >= 0) {
      if (ConceptCRUD.sortConceptBy.indexOf('Asc') >= 0) {
        ConceptCRUD.sortConceptBy = `${strSortByFld} Desc`;
      } else {
        ConceptCRUD.sortConceptBy = `${strSortByFld} Asc`;
      }
    } else {
      ConceptCRUD.sortConceptBy = `${strSortByFld} Asc`;
    }
    this.BindGv_ConceptCache();
  }

  ////////////////////////////////////////////////相关概念////////////////////////////////////////////
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevRTConceptRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    strWhereCond += ` And ${clsvRTViewpointEN.con_gsKnowledgeTypeId} = ${enumgs_KnowledgeType.Concept_03}`;

    //const objvRTConceptRela_Cond: clsvRTConceptRelaEN = new clsvRTConceptRelaEN();
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
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineRTConceptRelaConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vRTConceptRela(divName: HTMLDivElement) {
    // const strListDiv: string = this.mstrListConceptDivPaper;
    const strWhereCond = await this.CombinevRTConceptRelaCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvRTConceptRelaObjLst: Array<clsvRTViewpointEN> = [];
    try {
      this.recCount = await vRTViewpoint_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.sortvRTConceptRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvRTConceptRelaObjLst = await vRTViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    try {
      this.BindList_vRTConceptRela(divName, arrvRTConceptRelaObjLst);
      //this.BindTab_vRTConceptRela(strListDiv, arrvRTConceptRelaObjLst);
      console.log('完成BindGv_vRTConceptRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  public async BindList_vRTConceptRela(
    divName: HTMLDivElement,
    arrvRTConceptRelaObjLst: Array<clsvRTViewpointEN>,
  ) {
    const divDataLst = GetDivObjInDivObj(divName, 'divDataLst');
    // const objLayOut = this.getDivName(enumDivType.LayOut_01);
    // if (objLayOut == null) return;
    const strHtml = await Public_Concept.BindList_vRTConceptRela('06', arrvRTConceptRelaObjLst);

    //拼接；
    divDataLst.innerHTML = strHtml;
    this.SetEventForConcept(divName);
    if (arrvRTConceptRelaObjLst.length > 10) {
      $('#divPagerConcept').show();
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(divName, this, this.divName4Pager);
    }
  }
  public SetEventForConcept(objLayOut: HTMLDivElement) {
    {
      const arrbtnAddToCurrTopicId = GetButtonObjLstInDivObjN(objLayOut, 'btnUpdConcept');
      for (const btnUpdConcept of arrbtnAddToCurrTopicId) {
        if (btnUpdConcept != null) {
          const strKeyId = btnUpdConcept.getAttribute('keyid');

          if (strKeyId != null) {
            const strTopicId = clsPrivateSessionStorage.topicIdInTree;

            btnUpdConcept.setAttribute('keyId2', strKeyId);
            const arr = strKeyId.split('|');
            if (arr.length != 2) continue;
            const objData = { subViewpointId: arr[0], paperId: arr[1], topicId: strTopicId };
            (function (objData) {
              btnUpdConcept.onclick = function () {
                ResearchTopicConceptEx.vuebtn_Click('UpdConcept', objData);
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
                ResearchTopicConceptEx.vuebtn_Click('AddClassificationRecordInTab', strKeyId);
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
                ResearchTopicConceptEx.vuebtn_Click('UpdateClassificationRecordInTab', objData);
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
  public async btnDelConceptRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      const strUserId = userStore.getUserId;
      //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
      await RTConceptRela_GetObjBymIdAsync(lngKeyId).then((jsonData) => {
        const objRtConceptEN: clsRTConceptRelaEN = <clsRTConceptRelaEN>jsonData;
        if (objRtConceptEN != null) {
          if (objRtConceptEN.updUser == strUserId) {
            //
            this.DelConceptRecord(lngKeyId);
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
根据关键字删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelConceptRecord(lngmId: number): Promise<number> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return 0;
    try {
      const returnInt: number = await RTConceptRela_DelRecordAsync(lngmId);
      if (returnInt > 0) {
        this.BindGv_vRTConceptRela(divName);
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
      return returnInt;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
      return 0;
    }
  }

  /*主题概念关系
   */
  public async SortByRTConcept(strSortByFld: string) {
    if (this.sortvRTConceptRelaBy.indexOf(strSortByFld) >= 0) {
      if (this.sortvRTConceptRelaBy.indexOf('Asc') >= 0) {
        this.sortvRTConceptRelaBy = `${strSortByFld} Desc`;
      } else {
        this.sortvRTConceptRelaBy = `${strSortByFld} Asc`;
      }
    } else {
      this.sortvRTConceptRelaBy = `${strSortByFld} Asc`;
    }
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    await this.BindGv_vRTConceptRela(divName);
  }

  public get classificationId(): string {
    return ResearchTopicConceptEx.GetPropValue('classificationId');
  }

  public get viewsId(): string {
    return ResearchTopicConceptEx.GetPropValue('viewsId');
  }
}
