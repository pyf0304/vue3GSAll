import $ from 'jquery';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';

import { clsvPaperSimEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSimEN';
import { vPaperSim_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSimWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { vPaperSimEx_GetRecCountByCondByIdCurrEduCls_Cache } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSimExWApi';
import {
  GetInputValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { stuUserLoginInfo } from '@/ts/FunClass/stuUserLoginInfo';

declare let window: any;
/* PaperAllListEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PaperAllListEx extends PaperCRUD {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvPaperBy: string = "paperId";

  //专业方向
  public mstrListDivMajorDirection = 'divMajorDirectionDataLst';

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 200;
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
  */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName = this.getDivName(enumDivType.LayOut_01);
    const divName4Pager = 'divPager';
    // 在此处放置用户代码以初始化页面
    try {
      if (GetInputValueInDivObj(divName, 'hidUserInfo') != '') {
        //加载页面所需数据源到缓存
        // const arrLiteratureType_Cache = await LiteratureType_GetObjLstAsync('1=1');
        //const arrXzMajor_Cache = await XzMajor_GetObjLstAsync("1=1");
        // const arrvPaperSim_Cache = await vPaperSim_GetObjLstAsync('1=1');

        ////1、为下拉框设置数据源,绑定列表数据

        ////查询文献类型绑定；

        ////const ddl_UserId_q = await clsDropDownList.BindDdl_UserId("ddlUserId_q");
        //const ddl_UserId_q = await this.BindDdl_UserId("ddlUserId_q");

        //const ddl_LiteratureTypeId_q = await this.BindDdl_LiteratureTypeId_Cache("ddlLiteratureTypeId_q", new clsLiteratureTypeEN);

        ////const ddl_idXzMajor_q = await this.BindDdl_idXzMajor_Cache("ddlIdXzMajor_q", new clsXzMajorEN);
        //const ddl_idXzMajor_q = await this.BindDdl_idXzMajorNum("ddlIdXzMajor_q");

        //绑定编辑文献类型

        PaperCRUD.sortPaperBy = 'updDate Desc';
        this.hidSortvXzMajorDirectionBy = 'majorDirectionId Asc';
        const strWhereCond = await this.CombinevPaperCondition();

        await vPaperSim_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {
          this.recCount = jsonData;
        });

        //2、显示无条件的表内容在GridView中
        //await this.BindGv_vPaperLoad();
        //const gvResultMajor = await this.BindGv_vPaperMajor();
        //const gvResultDecrtion = await this.BindGv_vPaperDirection();

        //}
        //else {
        //    window.location.href = "/GraduateStudyWebApp/WebApp/Login";
        //}

        const strUserInfo_Hid = GetInputValueInDivObj(divName, 'hidUserInfo');
        const objvUserRoleRelation = stuUserLoginInfo.GetObjByHtmlString2(strUserInfo_Hid);
        $('#hidUserId').val(objvUserRoleRelation.userId);

        //判断角色
        //管理员
        if (objvUserRoleRelation.roleId == '00620001') {
          $('#btnDelRecord').show();
          $('#btnAudit').show();
        } else if (objvUserRoleRelation.roleId == '00620002') {
          $('#btnDelRecord').hide();
          $('#btnAudit').show();
        } else {
          $('#btnDelRecord').hide();
          $('#btnAudit').hide();
        }
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, divName4Pager);
          this.bolIsInitShow = true; //
        }
        await this.BindGv_vPaper(this.thisDivList);

        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        window.top.location.href = '../WebApp/Login';
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public CombinevPaperSimConditionobj(): clsvPaperSimEN {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const objvPaperSim_Cond: clsvPaperSimEN = new clsvPaperSimEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.paperTitle_q != "") {
      //    objvPaperSim_Cond.SetCondFldValue(clsvPaperSimEN.con_PaperTitle, this.paperTitle_q, "like");
      //}
      //if (this.updDate_q != "") {
      //    objvPaperSim_Cond.SetCondFldValue(clsvPaperSimEN.con_UpdDate, this.updDate_q, "like");
      //}
      //if (this.literatureTypeId_q != "" && this.literatureTypeId_q != "0") {
      //    objvPaperSim_Cond.SetCondFldValue(clsvPaperSimEN.con_LiteratureTypeId, this.literatureTypeId_q, "=");
      //}
      //if (this.User_q != "" && this.User_q != "0") {
      //    objvPaperSim_Cond.SetCondFldValue(clsvPaperSimEN.con_UpdUser, this.User_q, "=");
      //}
      //if (this.idXzMajor_q != "" && this.idXzMajor_q != "0") {
      //    objvPaperSim_Cond.SetCondFldValue(clsvPaperSimEN.con_IdXzMajor, this.idXzMajor_q, "=");
      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineUsersConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objvPaperSim_Cond;
  }
  /* 根据条件获取相应的记录对象的列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vPaper(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    //strWhereCond = await this.CombinevPaperCondition();
    // let strWhereCond = '';
    const objvPaperSim_Cond: clsvPaperSimEN = this.CombinevPaperSimConditionobj();
    // strWhereCond = JSON.stringify(objvPaperSim_Cond);

    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    // let arrvPaperSimObjLst: Array<clsvPaperSimEN> = [];
    // const objPagerPara: stuPagerPara = {
    //   pageIndex: intCurrPageIndex,
    //   pageSize: this.pageSize,
    //   whereCond: strWhereCond,
    //   orderBy: PaperCRUD.sortPaperBy,
    //   sortFun: (x, y) => {
    //     x = x; y = y;
    //     x = x; y = y;
    //     x = x; y = y;
    //     return 0;
    //   },
    // };

    try {
      this.recCount = await vPaperSimEx_GetRecCountByCondByIdCurrEduCls_Cache(
        objvPaperSim_Cond,
        clsPubLocalStorage.idCurrEduCls,
      );
      console.log('完成计数!');
      // arrvPaperSimObjLst = await vPaperSimEx_GetObjLstByPagerByIdCurrEduCls_Cache(
      //   objPagerPara,
      //   clsPubLocalStorage.idCurrEduCls,
      // );
      console.log('完成对象列表获取!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根据条件获取论文视图的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvPaperSimObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    try {
      //  const gvResultPaper = await this.BindList_vPaperSim("1", arrvPaperSimObjLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定论文视图对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevPaperCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.paperTitle_q != "") {
      //    strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      //}
      //if (this.updDate_q != "") {
      //    strWhereCond += ` And ${clsPaperEN.con_UpdDate} like '%${this.updDate_q}%'`;
      //}
      //if (this.literatureTypeId_q != "" && this.literatureTypeId_q != "0") {
      //    strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      //}

      ////论文维护
      //if (strPaperTypeId == "01") {
      if (GetInputValueInDivObj(divName, 'hidUserInfo') != '') {
        const strUserInfo_Hid = GetInputValueInDivObj(divName, 'hidUserInfo');

        const objvUserRoleRelation = stuUserLoginInfo.GetObjByHtmlString2(strUserInfo_Hid);
        //$('#lnkUserName').html(objvUserRoleRelation.userName + '(' + objvUserRoleRelation.roleName + ')');
        $('#hidUserId').val(objvUserRoleRelation.userId);
        //判断角色
        //管理员
        if (objvUserRoleRelation.roleId == '00620001') {
          //可以查看所有；
          $('#btnDelRecord').show();
          $('#btnAudit').show();
        } else if (objvUserRoleRelation.roleId == '00620002') {
          $('#btnDelRecord').hide();
          $('#btnAudit').show();
          //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
          strWhereCond += `And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='${objvUserRoleRelation.userId}' And isEffective='1') And isEffective='1')`;
        } else {
          $('#btnDelRecord').hide();
          $('#btnAudit').hide();
          //学生00620003
          //只能查看自己的数据；或公开的数据；
          //strWhereCond += ` And ${clsvSubViewpointEN.con_UpdUser} = '${strUserId}'`;
          strWhereCond += ` And updUser = '${objvUserRoleRelation.userId}'`;
        }
      } else {
        window.top.location.href = '../WebApp/Login';
      }
      //}
      //else {
      //    //查看无需做控制；可以看到所有；
      //}

      //if (this.IsChecked_q == true) {
      //    strWhereCond += ` And ${clsPaperEN.con_IsChecked} = '1'`;
      //}
      //else {
      //    strWhereCond += ` And ${clsPaperEN.con_IsChecked} = '0'`;
      //}
      //if (this.IsQuotethesis_q == true) {
      //    strWhereCond += ` And ${clsPaperEN.con_IsQuotethesis} = '1'`;
      //}
      //else {
      //    strWhereCond += ` And ${clsPaperEN.con_IsQuotethesis} = '0'`;
      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvXzMajorDirectionBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvXzMajorDirectionBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvXzMajorDirectionBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvXzMajorDirectionBy');
  }
  /**
   * 获取当前组件的divList的层对象
   **/
  public get thisDivList(): HTMLDivElement {
    const divLayOut = this.getDivName(enumDivType.LayOut_01);
    const divList = GetDivObjInDivObj(divLayOut, 'divList_AllPaper');
    return divList;
  }
}
