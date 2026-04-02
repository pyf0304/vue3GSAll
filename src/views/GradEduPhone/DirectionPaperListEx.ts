//import * as QQ from "q";
//import { PaperCRUD } from "./PaperCRUD.js";

import $ from 'jquery';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
import { clsvPaperSimEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSimEN';

import { vPaperSim_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSimWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import {
  GetInputValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { userStore } from '@/store/modulesShare/user';

declare let window: any;
/* DirectionPaperListEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class DirectionPaperListEx extends PaperCRUD {
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

        const strUserId = userStore.getUserId;
        $('#hidUserId').val(strUserId);

        //判断角色
        //管理员
        //if (objvUserRoleRelation.roleId == "00620001") {

        //    $("#btnDelRecord").show();
        //    $("#btnAudit").show();

        //}
        //else if (objvUserRoleRelation.roleId == "00620002") {

        //    $("#btnDelRecord").hide();
        //    $("#btnAudit").show();
        //}
        //else {
        //    $("#btnDelRecord").hide();
        //    $("#btnAudit").hide();

        //}
        //方向论文；
        // await this.BindGv_vPaperDirection();

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

  /* 把所有的查询控件内容组合成一个条件串
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
  <returns>条件串(strWhereCond)</returns>
*/
  public CombinevPaperSimCondition(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.paperTitle_q != "") {
      //    strWhereCond += ` And ${clsvPaperSimEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      //}
      //if (this.updDate_q != "") {
      //    strWhereCond += ` And ${clsvPaperSimEN.con_UpdDate} like '%${this.updDate_q}%'`;
      //}
      //if (this.literatureTypeId_q != "" && this.literatureTypeId_q != "0") {
      //    strWhereCond += ` And ${clsvPaperSimEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      //}
      //if (this.User_q != "" && this.User_q != "0") {
      //    strWhereCond += ` And ${clsvPaperSimEN.con_UpdUser} = '${this.User_q}'`;
      //}
      ////if (this.User_q != "" && this.User_q != "0") {
      ////    strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.User_q}'`;
      ////}
      //if (this.idXzMajor_q != "" && this.idXzMajor_q != "0") {
      //    strWhereCond += ` And ${clsvPaperSimEN.con_IdXzMajor} = '${this.idXzMajor_q}'`;
      //    //if (this.MajorDirectionId_q != "" && this.MajorDirectionId_q != "0") {
      //    //    strWhereCond += " and paperId in (select paperId from vMajorDirectionPaperRela where majorDirectionId='" + this.MajorDirectionId_q + "')";
      //    //}
      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
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

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevPaperCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (GetInputValueInDivObj(divName, 'hidUserInfo') != '') {
        const strUserId = userStore.getUserId;

        $('#hidUserId').val(strUserId);
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
}
