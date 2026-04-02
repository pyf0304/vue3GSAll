/**
 * 类名:RTViewpointCRUDEx(界面:RTViewpointCRUD)
 * 表名:RTViewpoint(01120955)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/04 10:00:41
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { RTViewpointCRUD } from '@/viewsBase/GradEduTopic/RTViewpointCRUD';
import { RTViewpoint_EditEx } from '@/views/GradEduTopic/RTViewpoint_EditEx';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetCheckedKeyLstsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format } from '@/ts/PubFun/clsString';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointEN';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { RTViewpointEx_GetObjExLstByPagerCache } from '@/ts/L3ForWApiEx/GradEduTopic/clsRTViewpointExWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsRTViewpointENEx } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointENEx';
import { message } from '@/utils/myMessage';
import { clsvRTViewpointENEx } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointENEx';
import { vRTViewpoint_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointWApi';
import { vRTViewpointEx_GetObjExLstByPagerAsync } from '@/ts/L3ForWApiEx/GradEduTopic/clsvRTViewpointExWApi';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
/** RTViewpointCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class RTViewpointCRUDEx extends RTViewpointCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrSortRTViewpointBy = "SubViewpointId";
  /**
   * 每页记录数,在扩展类可以修改
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
    alert(`该类没有绑定该函数：[this.BindGv_RTViewpoint]!${strType}${strPara}`);
    //this.BindGv_RTViewpointCache();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'RTViewpoint':
        this.BindGv_vRTViewpoint(this.divList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: RTViewpointCRUDEx;
    let objPageEdit;
    if (RTViewpointCRUD.objPageCRUD == null) {
      RTViewpointCRUD.objPageCRUD = new RTViewpointCRUDEx(divLayout);
      objPage = <RTViewpointCRUDEx>RTViewpointCRUD.objPageCRUD;
    } else {
      objPage = <RTViewpointCRUDEx>RTViewpointCRUD.objPageCRUD;
    }
    let strMsg = '';
    let arrKeyLsts;
    let strKeyLst = '';
    const divDataLst = GetDivObjInDivObj(objPage.divList, 'divDataLst');
    if (divDataLst != null) {
      arrKeyLsts = GetCheckedKeyLstsInDivObj(divDataLst);

      strKeyLst = GetFirstCheckedKeyLstInDivObj(divDataLst);
    }
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new RTViewpoint_EditEx('RTViewpoint_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        RTViewpointCRUD.EditObj.btnRTViewpoint_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        RTViewpointCRUD.DetailObj.btnRTViewpoint_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new RTViewpoint_EditEx('RTViewpoint_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        RTViewpointCRUD.EditObj.btnRTViewpoint_Edit_Click(strCommandName, strKeyLst);
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyLsts == null || arrKeyLsts.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(RTViewpointCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();
      this.SetEventFunc();
      RTViewpointCRUD.sortvRTViewpointBy = 'topicId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vRTViewpoint(this.divList);
    } catch (e) {
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
  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    const IdCurrEduClsCache = clsPubLocalStorage.idCurrEduCls; //缓存分类变量;//在switch中未找到相关类型: tsCache(in AGC.PureClassEx.FuncParaType:GetTsTypeStr)
    const TopicIdStatic = RTViewpointCRUD.TopicIdStatic; //静态变量;//静态变量

    // await this.SetDdl_IdCurrEduClsInDiv(CourseIdStatic); //查询区域

    await this.SetDdl_TopicIdInDiv(IdCurrEduClsCache); //查询区域

    await this.SetDdl_gsKnowledgeTypeIdInDiv(); //查询区域

    // await this.SetDdl_ClassificationIdInDiv(TopicIdStatic); //查询区域
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevRTViewpointCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    if (clsPubLocalStorage.idCurrEduCls != '') {
      strWhereCond += ` and ${clsRTViewpointEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;
    }
    if (this.gsKnowledgeTypeId != '') {
      strWhereCond += ` and ${clsvRTViewpointEN.con_gsKnowledgeTypeId} = '${this.gsKnowledgeTypeId}'`;
    }

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.topicId_q != '' && this.topicId_q != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsvRTViewpointEN.con_TopicId, this.topicId_q);
      }
      if (this.proposePeople_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsvRTViewpointEN.con_ProposePeople,
          this.proposePeople_q,
        );
      }
      if (this.gsKnowledgeTypeId_q != '' && this.gsKnowledgeTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvRTViewpointEN.con_gsKnowledgeTypeId,
          this.gsKnowledgeTypeId_q,
        );
      }
      if (this.classificationId_q != 0) {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvRTViewpointEN.con_ClassificationId,
          this.classificationId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineRTViewpointCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGvCache)
   **/
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   **/
  public async BindGv_vRTViewpoint(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_vRTViewpoint.name;

    if (this.topicId_q == '') {
      message.warning('请选择一个主题！');

      return;
    }
    if (RTViewpointCRUD.sortvRTViewpointBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvRTViewpointBy)为空,请检查!(In BindGv_vRTViewpoint)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const strWhereCond = await this.CombinevRTViewpointCondition();
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvRTViewpointExObjLst: Array<clsvRTViewpointENEx> = [];
    try {
      this.recCount = await vRTViewpoint_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const divDataLst: HTMLDivElement = <HTMLDivElement>document.getElementById('divDataLst');
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
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

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: RTViewpointCRUD.sortvRTViewpointBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrvRTViewpointExObjLst = await vRTViewpointEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
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
    if (arrvRTViewpointExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strMsg = Format('根据条件获取的记录数为0!');
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_vRTViewpoint(divList, arrvRTViewpointExObjLst);
      //console.log("完成BindGv_vRTViewpoint!");
    } catch (e) {
      //console.trace();
      const strMsg = Format(
        '绑定对象列表不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public get gsKnowledgeTypeId() {
    return RTViewpointCRUDEx.GetPropValue('gsKnowledgeTypeId');
  }
}
