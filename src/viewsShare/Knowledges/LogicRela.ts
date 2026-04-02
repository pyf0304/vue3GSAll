import $ from 'jquery';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { gs_KnowledgesLogicEx_AddNewRecordAsync } from '@/ts/L3ForWApiExShare/Knowledges/clsgs_KnowledgesLogicExWApi';
import { gs_KnowledgesLogicRelaEx_AddNewRecordAsync } from '@/ts/L3ForWApiExShare/Knowledges/clsgs_KnowledgesLogicRelaExWApi';
import { clscc_CourseKnowledgesEN } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN';
import { clsgs_KnowledgesLogicEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicEN';
import { clsgs_KnowledgesLogicRelaEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicRelaEN';
import { cc_CourseKnowledges_GetObjLstCache } from '@/ts/L3ForWApi/Knowledges/clscc_CourseKnowledgesWApi';
import {
  gs_KnowledgesLogicRela_Delgs_KnowledgesLogicRelasByCondAsync,
  gs_KnowledgesLogicRela_GetObjLstAsync,
} from '@/ts/L3ForWApi/Knowledges/clsgs_KnowledgesLogicRelaWApi';
import {
  gs_KnowledgesLogic_Delgs_KnowledgesLogicsByCondAsync,
  gs_KnowledgesLogic_GetObjLstAsync,
} from '@/ts/L3ForWApi/Knowledges/clsgs_KnowledgesLogicWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import {
  GetInputValueInDivObj,
  HideDivInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { userStore } from '@/store/modulesShare/user';
declare function LoadjsPlumb(): void;
declare function Alert_layer(strIcon: string, strMsg: string): void;
declare let window: any;
/* cc_CourseKnowledgesCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class LogicRela {
  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divLayout: HTMLDivElement; //界面布局的层对象
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvcc_CourseKnowledgesBy: string = "courseKnowledgeId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public Arrgs_KnowledgesLogicObjLst: Array<clsgs_KnowledgesLogicEN> = [];

  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      // 为查询区绑定下拉框
      //await this.BindDdl4QueryRegion();

      //this.hidSortvcc_CourseKnowledgesBy = "knowledgeTitle Asc";
      ////2、显示无条件的表内容在GridView中
      //await this.BindGv_vcc_CourseKnowledges();

      if (userStore.getUserId != '') {
        await this.BindGv_gs_KnowledgesLogic();
        await this.BindGv_gs_KnowledgesLogicRela();

        await this.BindGv_vcc_CourseKnowledges();
        LoadjsPlumb();
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  //绑定左边的知识点标题
  public async BindGv_vcc_CourseKnowledges() {
    //获取观点分类
    let arrcc_CourseKnowledgesObjLst: Array<clscc_CourseKnowledgesEN> = [];
    await cc_CourseKnowledges_GetObjLstCache('').then((jsonData) => {
      arrcc_CourseKnowledgesObjLst = <Array<clscc_CourseKnowledgesEN>>jsonData;
    });

    let strhtml = '';

    const tempArr = arrcc_CourseKnowledgesObjLst;
    for (let i = 0; i < this.Arrgs_KnowledgesLogicObjLst.length; i++) {
      for (let j = 0; j < arrcc_CourseKnowledgesObjLst.length; j++) {
        if (
          arrcc_CourseKnowledgesObjLst[j].courseKnowledgeId ==
          this.Arrgs_KnowledgesLogicObjLst[i].courseKnowledgeId
        ) {
          tempArr.splice(tempArr.indexOf(arrcc_CourseKnowledgesObjLst[j]), 1);
        }
      }
      //let result = arrcc_CourseKnowledgesObjLst.filter(item => this.Arrgs_KnowledgesLogicObjLst.some(id => id.courseKnowledgeId != arrcc_CourseKnowledgesObjLst[i].courseKnowledgeId));
    }

    //let result = arrcc_CourseKnowledgesObjLst.filter(item => this.Arrgs_KnowledgesLogicObjLst.some(id => id.courseKnowledgeId == item.courseKnowledgeId));

    //let result = this.Arrgs_KnowledgesLogicObjLst.filter(item => arrcc_CourseKnowledgesObjLst.some(id => id.courseKnowledgeId == item.courseKnowledgeId));

    //for (let i = 0; i < arrcc_CourseKnowledgesObjLst.length; i++) {
    //    let result = arrcc_CourseKnowledgesObjLst.filter(item => this.Arrgs_KnowledgesLogicObjLst.some(id => id.courseKnowledgeId != arrcc_CourseKnowledgesObjLst[i].courseKnowledgeId));

    //    //strIdCurrEduclsstrKnowledgesNode = document.getElementById("KnowledgesNode");

    //    //strIdCurrEduclsdiv = document.createElement("div");
    //    //div.className = "node node1css";
    //    //div.setAttribute("data-type", "server");
    //    //div.innerHTML = arrcc_CourseKnowledgesObjLst[i].knowledgeTitle;
    //    ////strKnowledgesNode.a
    //    //strKnowledgesNode.appendChild(div);
    //}
    for (let i = 0; i < tempArr.length; i++) {
      strhtml += `<div id="${tempArr[i].courseKnowledgeId}" class="node node1css" data-type="server">${tempArr[i].knowledgeTitle}</div>`;
    }

    //strhtml += '<div class+="node node1css" data-type="server">' + arrcc_CourseKnowledgesObjLst[0].knowledgeTitle + '</div>';
    $('#KnowledgesNode').html(strhtml);
  }

  //绑定知识点逻辑点位
  public async BindGv_gs_KnowledgesLogic() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strKnowledgeGraphId = GetInputValueInDivObj(divName, 'hidKnowledgeGraphId');
    const strWhereCond = ` 1=1 and knowledgeGraphId='${strKnowledgeGraphId}'`;

    //获取观点分类
    let arrgs_KnowledgesLogicObjLst: Array<clsgs_KnowledgesLogicEN> = [];
    await gs_KnowledgesLogic_GetObjLstAsync(strWhereCond).then((jsonData) => {
      arrgs_KnowledgesLogicObjLst = <Array<clsgs_KnowledgesLogicEN>>jsonData;
    });
    this.Arrgs_KnowledgesLogicObjLst = arrgs_KnowledgesLogicObjLst;

    if (arrgs_KnowledgesLogicObjLst.length > 0) {
      let strLogicJson = '[';
      for (let i = 0; i < arrgs_KnowledgesLogicObjLst.length; i++) {
        const strCourseKnowledgeId: string = arrgs_KnowledgesLogicObjLst[i].courseKnowledgeId;
        const strLogicNodeId: string = arrgs_KnowledgesLogicObjLst[i].logicNodeId;
        const strClassName: string = arrgs_KnowledgesLogicObjLst[i].className;
        const strCourseKnowledgeTitle: string = arrgs_KnowledgesLogicObjLst[i].courseKnowledgeTitle;

        const strX_Position: number = arrgs_KnowledgesLogicObjLst[i].xPosition;
        const strY_Position: number = arrgs_KnowledgesLogicObjLst[i].yPosition;

        //strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

        strLogicJson += '{';
        strLogicJson += `"courseKnowledgeId":"${strCourseKnowledgeId}",`;
        strLogicJson += `"courseKnowledgeTitle":"${strCourseKnowledgeTitle}",`;
        strLogicJson += `"logicNodeId":"${strLogicNodeId}",`;
        strLogicJson += `"className":"${strClassName}",`;
        strLogicJson += `"xPosition":${strX_Position},`;
        strLogicJson += `"yPosition":${strY_Position}`;
        strLogicJson += '},';
      }
      strLogicJson = strLogicJson.substring(0, strLogicJson.length - 1);
      strLogicJson += ']';
      $('#hidLogicNodeJson').val(strLogicJson);
    }
  }

  //绑定知识点逻辑关系
  public async BindGv_gs_KnowledgesLogicRela() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strKnowledgeGraphId = GetInputValueInDivObj(divName, 'hidKnowledgeGraphId');
    const strWhereCond = ` 1=1 and knowledgeGraphId='${strKnowledgeGraphId}'`;

    //获取观点分类
    let arrgs_KnowledgesLogicRelaObjLst: Array<clsgs_KnowledgesLogicRelaEN> = [];
    await gs_KnowledgesLogicRela_GetObjLstAsync(strWhereCond).then((jsonData) => {
      arrgs_KnowledgesLogicRelaObjLst = <Array<clsgs_KnowledgesLogicRelaEN>>jsonData;
    });

    if (arrgs_KnowledgesLogicRelaObjLst.length > 0) {
      let strLogicRelaJson = '[';
      for (let i = 0; i < arrgs_KnowledgesLogicRelaObjLst.length; i++) {
        const courseKnowledgeTitleA: string =
          arrgs_KnowledgesLogicRelaObjLst[i].courseKnowledgeTitleA;
        const courseKnowledgeTitleB: string =
          arrgs_KnowledgesLogicRelaObjLst[i].courseKnowledgeTitleB;
        const strSourceAnchor: string = arrgs_KnowledgesLogicRelaObjLst[i].sourceAnchor;
        const strTargetAnchor: string = arrgs_KnowledgesLogicRelaObjLst[i].targetAnchor;

        const strRelaTitle: string = arrgs_KnowledgesLogicRelaObjLst[i].relaTitle;

        strLogicRelaJson += '{';
        strLogicRelaJson += `"courseKnowledgeTitleA":"${courseKnowledgeTitleA}",`;
        strLogicRelaJson += `"courseKnowledgeTitleB":"${courseKnowledgeTitleB}",`;
        strLogicRelaJson += `"relaTitle":"${strRelaTitle}",`;
        strLogicRelaJson += `"sourceAnchor":"${strSourceAnchor}",`;
        strLogicRelaJson += `"targetAnchor":"${strTargetAnchor}"`;
        strLogicRelaJson += '},';
      }
      strLogicRelaJson = strLogicRelaJson.substring(0, strLogicRelaJson.length - 1);
      strLogicRelaJson += ']';
      $('#hidLogicRelaJson').val(strLogicRelaJson);
    }
  }

  //刷新逻辑关系
  //public async RefreshKnowledgeTitle(ojson: any) {
  //    strIdCurrEduclsarrcc_CourseKnowledgesObjLst: Array<clscc_CourseKnowledgesEN> = [];
  //    const responseObjLst = await cc_CourseKnowledges_GetObjLstCache().then((jsonData) => {
  //        arrcc_CourseKnowledgesObjLst = <Array<clscc_CourseKnowledgesEN>>jsonData;

  //    });

  //    strhtml = "";
  //    let tempArr = arrcc_CourseKnowledgesObjLst;
  //    for (let i = 0; i < ojson.server.length; i++) {

  //        for (let j = 0; j < arrcc_CourseKnowledgesObjLst.length; j++) {

  //            if (arrcc_CourseKnowledgesObjLst[j].courseKnowledgeId == ojson.server[i].id) {

  //                tempArr.splice(tempArr.indexOf(arrcc_CourseKnowledgesObjLst[j]), 1);
  //            }
  //        }
  //        //let result = arrcc_CourseKnowledgesObjLst.filter(item => this.Arrgs_KnowledgesLogicObjLst.some(id => id.courseKnowledgeId != arrcc_CourseKnowledgesObjLst[i].courseKnowledgeId));
  //    }
  //    for (let i = 0; i < tempArr.length; i++) {
  //        strhtml += '<div id="' + tempArr[i].courseKnowledgeId + '" class="node node1css" data-type="server">' + tempArr[i].knowledgeTitle + '</div>';
  //    }
  //    $("#KnowledgesNode").html(strhtml);
  //    LoadjsPlumb();
  //}

  //保存逻辑关系
  public async btnSaveLogicRela_Click(ojson: any) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    ShowDivInDivObj(objLayOut, 'divLoading');
    const strKnowledgeGraphId = GetInputValueInDivObj(objLayOut, 'hidKnowledgeGraphId');
    let strLogicJson = '[';
    for (let i = 0; i < ojson.server.length; i++) {
      const strCourseKnowledgeId: string = ojson.server[i].id;
      const strLogicNodeId: string = ojson.server[i].divId;

      const strCourseKnowledgeTitle: string = ojson.server[i].name;
      const strX_Position: number = ojson.server[i].positionX;
      const strY_Position: number = ojson.server[i].positionY;
      const strClassName: number = ojson.server[i].class;

      const strUpdDate = clsPubFun4Web.getNowDate(); // 修改日期
      const strUpdUser = userStore.getUserId; // 修改人
      //strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

      strLogicJson += '{';
      strLogicJson += `"courseKnowledgeId":"${strCourseKnowledgeId}",`;
      strLogicJson += `"courseKnowledgeTitle":"${strCourseKnowledgeTitle}",`;
      strLogicJson += `"logicNodeId":"${strLogicNodeId}",`;
      strLogicJson += `"className":"${strClassName}",`;
      strLogicJson += `"updUser":"${strUpdUser}",`;
      strLogicJson += `"updDate":"${strUpdDate}",`;
      strLogicJson += `"knowledgeGraphId":"${strKnowledgeGraphId}",`;
      strLogicJson += `"xPosition":${strX_Position},`;
      strLogicJson += `"yPosition":${strY_Position}`;
      strLogicJson += '},';
    }
    strLogicJson = strLogicJson.substring(0, strLogicJson.length - 1);
    strLogicJson += ']';

    let strLogicRelaJson = '[';
    for (let i = 0; i < ojson.line.length; i++) {
      const strCourseKnowledgeIdA: string = ojson.line[i].pageSourceId;
      const strCourseKnowledgeIdB: string = ojson.line[i].pageTargetId;
      const strSourceAnchor: string = ojson.line[i].pageSourceAnchor;
      const strTargetAnchor: string = ojson.line[i].pageTargetAnchor;
      const strRelaTitle: string = ojson.line[i].overlaysText;

      const strUpdDate = clsPubFun4Web.getNowDate(); // 修改日期
      const strUpdUser = userStore.getUserId; // 修改人
      // const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

      strLogicRelaJson += '{';
      strLogicRelaJson += `"CourseKnowledgeIdA":"${strCourseKnowledgeIdA}",`;
      strLogicRelaJson += `"courseKnowledgeTitleA":"${strCourseKnowledgeIdA}",`;
      strLogicRelaJson += `"CourseKnowledgeIdB":"${strCourseKnowledgeIdB}",`;
      strLogicRelaJson += `"courseKnowledgeTitleB":"${strCourseKnowledgeIdB}",`;
      strLogicRelaJson += `"sourceAnchor":"${strSourceAnchor}",`;
      strLogicRelaJson += `"targetAnchor":"${strTargetAnchor}",`;
      strLogicRelaJson += `"relaTitle":"${strRelaTitle}",`;
      strLogicRelaJson += `"updUser":"${strUpdUser}",`;
      strLogicRelaJson += `"updDate":"${strUpdDate}",`;
      strLogicRelaJson += `"knowledgeGraphId":"${strKnowledgeGraphId}"`;
      strLogicRelaJson += '},';
    }
    strLogicRelaJson = strLogicRelaJson.substring(0, strLogicRelaJson.length - 1);
    strLogicRelaJson += ']';

    //删除1
    await this.DelRecord1();
    //添加1
    const responseText = await gs_KnowledgesLogicEx_AddNewRecordAsync(strLogicJson);
    const returnBool = !!responseText;
    if (returnBool == true) {
      //删除2
      await this.DelRecord2();
      //添加2
      const responseText2 = await gs_KnowledgesLogicRelaEx_AddNewRecordAsync(strLogicRelaJson);
      const returnBool2 = !!responseText2;
      if (returnBool2 == true) {
        const strInfo = `保存逻辑关系图成功!`;
        Alert_layer('1', strInfo);

        //const gvResult1 = await this.Bind_UserRela(strIdCurrEducls);
        HideDivInDivObj(objLayOut, 'divLoading');
      }
    } else {
      const strInfo = `保存用户关系排列图不成功!`;
      alert(strInfo);
      HideDivInDivObj(objLayOut, 'divLoading');
    }
  }

  //删除之前的用户关系排列图
  public async DelRecord1() {
    const divName = this.getDivName(enumDivType.LayOut_01);

    try {
      const strKnowledgeGraphId = GetInputValueInDivObj(divName, 'hidKnowledgeGraphId');
      const strWhere = ` knowledgeGraphId='${strKnowledgeGraphId}' and updUser='${userStore.getUserId}'`;
      const returnInt: number = await gs_KnowledgesLogic_Delgs_KnowledgesLogicsByCondAsync(
        strWhere,
      );
      if (returnInt > 0) {
        const strInfo = `删除知识点逻辑成功!`;
        ////显示信息框
        //alert(strInfo);
        console.log(strInfo);
      } else {
        const strInfo = `删除知识点逻辑不成功!`;
        //显示信息框
        console.log(strInfo);
        //alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //删除之前的用户关系排列图
  public async DelRecord2() {
    const divName = this.getDivName(enumDivType.LayOut_01);

    try {
      const strKnowledgeGraphId = GetInputValueInDivObj(divName, 'hidKnowledgeGraphId');
      const strWhere = ` knowledgeGraphId='${strKnowledgeGraphId}' and updUser='${userStore.getUserId}'`;
      const returnInt: number = await gs_KnowledgesLogicRela_Delgs_KnowledgesLogicRelasByCondAsync(
        strWhere,
      );
      if (returnInt > 0) {
        const strInfo = `删除知识点逻辑关系成功!`;
        ////显示信息框
        //alert(strInfo);
        console.log(strInfo);
      } else {
        const strInfo = `删除知识点逻辑关系不成功!`;
        //显示信息框
        console.log(strInfo);
        //alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  /**
   * 获取div对象，根据不同的div类型
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_GetDivName)
   **/
  public getDivName(strDivType: enumDivType): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    let divName;
    let divTypeName;
    let strMsg;
    switch (strDivType) {
      case enumDivType.LayOut_01:
        divName = LogicRela.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = LogicRela.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = LogicRela.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = LogicRela.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = LogicRela.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = LogicRela.divPager;
        divTypeName = 'divPager';
        break;
      default:
        strMsg = `获取div对象时，DivType =${strDivType}没有被处理，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return null;
        break;
    }
    if (divName == null) {
      strMsg = `当前${divTypeName}层(div)对象为空，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
      return null;
    }
    return divName;
  }
}
