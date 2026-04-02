import { RTPaperRelaCRUD } from '@/viewsBase/GradEduTopic/RTPaperRelaCRUD';
import { RTUserRelaCRUD } from '@/viewsBase/GradEduTopic/RTUserRelaCRUD';
import { clsvgs_PViewpointRelaEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PViewpointRelaEN';
import { clsvRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import {
  vRTPaperRela_GetObjLstByPagerAsync,
  vRTPaperRela_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTPaperRelaWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { BindTab_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

/* Viewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Pub_RTPaperRelaList extends RTPaperRelaCRUD implements IShowList {
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
  BindGv(strType: string) {
    console.log(strType);
    this.BindGv_vRTPaperRela(this.thisDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'ge_InspectionResults':
        alert('该类没有绑定该函数：[this.BindGv_ge_InspectionResults4Func]！');
        //this.BindGv_ge_InspectionResults4Func();
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
    //const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      //const ddl_ViewpointTypeId_q = await this.BindDdl_ViewpointTypeId("ddlViewpointTypeId_q");
      RTUserRelaCRUD.sortvRTUserRelaBy = Format('{0} Desc', clsvRTUserRelaEN.con_UpdDate);
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(objLayOut, this.divName4Pager);
        this.bolIsInitShow = true; //
      }
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vRTPaperRela(this.thisDivList);
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 为插入记录做准备工作
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
  */

  /*
   * 分享
   */
  public set shareId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlShareId', value);
  }
  /*
   * 分享
   */
  public get shareId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlShareId');
  }

  ////////////////////////////////////////主题用户关系
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevRTPaperRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.userId_q != "") {
      //    strWhereCond += ` And ${clsvRTUserRelaEN.con_UserId} like '%${this.userId_q}%'`;
      //}
      //if (this.topicName_q != "") {
      //    strWhereCond += ` And ${clsvRTUserRelaEN.con_TopicName} like '%${this.topicName_q}%'`;
      //}

      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTUserRelaEN.con_TopicId} = '${strTopicId}'`;
      }

      ////判断角色
      ////管理员
      //if (objvUserRoleRelation.roleId == "00620001") {

      //    // $("#btnDelRecord").show();

      //}
      //else if (objvUserRoleRelation.roleId == "00620002") {
      //    //教师
      //    // $("#btnDelRecord").show();
      //    //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
      //    strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + objvUserRoleRelation.userId + "' And isEffective='1') And isEffective='1')";

      //}
      //else {
      //    //学生；
      //    // $("#btnDelRecord").show();
      //    strWhereCond += ` And ${clsvRTUserRelaEN.con_UpdUser} = '${objvUserRoleRelation.userId}'`;
      //    //学生00620003

      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTUserRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  //////////////////////////////////////////////////////////////////////////////主题观点关系
  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */
  public CombinevRTViewpointRelaCondition1(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断Paperid
      const strPaperId = GetInputValueInDivObj(divName, 'hidPaperRelaId');

      if (strPaperId != '') {
        strWhereCond += ` And ${clsvgs_PViewpointRelaEN.con_PaperId} = '${strPaperId}'`;
      }

      strWhereCond += " and userTypeId='01'";

      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTViewpointRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的记录对象的列表
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vRTPaperRela(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombinevRTPaperRelaCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvRTPaperRelaObjLst: Array<clsvRTPaperRelaEN> = [];
    try {
      this.recCount = await vRTPaperRela_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: RTPaperRelaCRUD.sortvRTPaperRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvRTPaperRelaObjLst = await vRTPaperRela_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    try {
      this.BindTab_vRTPaperRela(divList, arrvRTPaperRelaObjLst);
      console.log('完成BindGv_vRTPaperRela(in  Pub_RTPaperRelaList)!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  /* 显示vRTPaperRela对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
 <param name = "divContainer">显示容器</param>
 <param name = "arrRTPaperRelaObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_vRTPaperRela(
    divContainer: HTMLDivElement,
    arrvRTPaperRelaObjLst: Array<clsvRTPaperRelaEN>,
  ) {
    const strThisFuncName = this.BindTab_vRTPaperRela.name;
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
        fldName: 'topicName',
        colHeader: '栏目主题',
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
        fldName: 'paperTitle',
        colHeader: '论文标题',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },

      //{
      //    fldName: "author",
      //    colHeader: "作者",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "periodical",
      //    colHeader: "期刊",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'userName',
        colHeader: '用户名',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },

      //{
      //    fldName: "",
      //    colHeader: "详情",
      //    text: "详情",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btnDetailInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},

      {
        fldName: '',
        colHeader: '删除',
        text: '删除',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info';
          btn1.setAttribute('onclick', `btnDelPaperRelaRecordInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
    ];
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvRTPaperRelaObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
  }
}
