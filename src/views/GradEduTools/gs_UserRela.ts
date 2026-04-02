import $ from 'jquery';
import { clsgs_UserRelaExWApi } from '@/ts/L3ForWApiEx/GradEduTools/clsgs_UserRelaExWApi';
import { gs_UserRelaPositionEx_AddNewRecordAsync } from '@/ts/L3ForWApiEx/GradEduTools/clsgs_UserRelaPositionExWApi';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import { clsvCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherEN';
import { clsgs_UserRelaEN } from '@/ts/L0Entity/GradEduTools/clsgs_UserRelaEN';
import { clsgs_UserRelaPositionEN } from '@/ts/L0Entity/GradEduTools/clsgs_UserRelaPositionEN';
import { vCurrEduClsStu_GetObjLstCache } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import { vCurrEduClsTeacher_GetObjLstCache } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import {
  gs_UserRelaPosition_Delgs_UserRelaPositionsByCondAsync,
  gs_UserRelaPosition_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTools/clsgs_UserRelaPositionWApi';
import { gs_UserRela_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_UserRelaWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetSelectValueByIdInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { message } from '@/utils/myMessage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { userStore } from '@/store/modulesShare/user';

// declare function UserRelaCanvas(str1: string, str2: string, str3: string, str4: string): void;

// declare function Alert_layer(strIcon: string, strMsg: string): void;
declare let window: any;
/* PaperSubViewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class gs_UserRela {
  public static UserRelaCanvas: (str1: string, str2: string, str3: string, str4: string) => void;
  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divLayout: HTMLDivElement; //界面布局的层对象

  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //1、从教学班表内获取当前教学班学生

        //const ddl_UserId_q = await clsDropDownList.BindDdl_CurrEduClsStuUser("ddlUserId_q");
        const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

        //默认显示数据
        await this.Bind_UserRela(strIdCurrEducls);

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

  //同步总数据统计
  public async btnSynUserRelaNum_Click(strid_CurrEdu: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    ShowDivInDivObj(objLayOut, 'divLoading');
    const strSeUserId = userStore.getUserId;
    //strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

    let strIdCurrEducls = '';
    if (strid_CurrEdu == '' || strid_CurrEdu == null) {
      strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    } else {
      strIdCurrEducls = strid_CurrEdu;
    }
    try {
      const responseText1 = await clsgs_UserRelaExWApi.SynUserRelaNumAsync(
        strIdCurrEducls,
        strSeUserId,
      );
      const returnBool2 = !!responseText1;
      if (returnBool2 == true) {
        const strInfo = `同步用户关系成功!`;
        message.success(strInfo);
        await this.Bind_UserRela(strIdCurrEducls);
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        const strInfo = `同步用户关系不成功!`;
        alert(strInfo);
        HideDivInDivObj(objLayOut, 'divLoading');
      }
      return responseText1; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `同步用户关系异常,${e}.`;
      alert(strMsg);
      HideDivInDivObj(objLayOut, 'divLoading');
    }
  }

  //绑定用户关系图
  public async Bind_UserRela(strid_CurrEdu: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strSeUserId = userStore.getUserId;
    let strIdCurrEducls = '';
    if (strid_CurrEdu == '' || strid_CurrEdu == null) {
      strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    } else {
      strIdCurrEducls = strid_CurrEdu;
    }

    // const strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;

    let arrvCurrEduClsStuObjLst: Array<clsvCurrEduClsStuEN> = [];
    let arrvCurrEduClsTeacherObjLst: Array<clsvCurrEduClsTeacherEN> = [];

    let arrgs_UserRelaObjLst: Array<clsgs_UserRelaEN> = [];

    let arrgs_UserRelaPositionObjLst: Array<clsgs_UserRelaPositionEN> = [];

    try {
      //教学班学生
      arrvCurrEduClsStuObjLst = await vCurrEduClsStu_GetObjLstCache(strIdCurrEducls);
      console.log('1');

      //教学班教师
      arrvCurrEduClsTeacherObjLst = await vCurrEduClsTeacher_GetObjLstCache(strIdCurrEducls);
      console.log('2');

      //用户关系
      arrgs_UserRelaObjLst = await gs_UserRela_GetObjLstCache(strIdCurrEducls);
      console.log('3');

      //计算出教师圆形坐标
      const t_nodeSize = arrvCurrEduClsTeacherObjLst.length;
      const t_center_x = 600;
      const t_center_y = 400;
      const t_radius = 60;
      let t_ii, t_i;
      const t_layouts: any = [];

      if (GetInputValueInDivObj(divName, 'hidQueryStata') == '1') {
        for (t_ii = t_i = 0; t_i < t_nodeSize; t_ii = ++t_i) {
          const x = t_center_x + t_radius * Math.sin((2 * Math.PI * t_ii) / t_nodeSize);
          const y = t_center_y + t_radius * Math.cos((2 * Math.PI * t_ii) / t_nodeSize);

          t_layouts.push({ x, y });
        }
      } else if (
        GetInputValueInDivObj(divName, 'hidQueryStata') == '3' ||
        $('#hidQueryStata').val() == '4'
      ) {
        const strWhereCond4 = `idCurrEduCls='${strIdCurrEducls}' and updUser ='${strSeUserId}'`;
        //用户关系
        arrgs_UserRelaPositionObjLst = await gs_UserRelaPosition_GetObjLstAsync(strWhereCond4);
        console.log('3');

        //如果用户关系排列数据为空
        if (arrgs_UserRelaPositionObjLst.length == 0) {
          //Alert_layer(2, strMsg);
          $('#hidQueryStata').val('2');
          $('#btnSaveUserRela').show();
          //先清除背景色
          $('#li_IntelligenceArray').removeClass('btn-info');
          //$("#li_RandomArray").removeClass("btn-info");
          $('#li_UserArray').removeClass('btn-info');
          $('#li_Anonymous').removeClass('btn-info');
          //添加背景色
          $('#li_RandomArray').addClass('btn-info');

          const strMsg = '用户关系排列数据为空，请您先在随机图内保存关系图!';
          alert(strMsg);
        }
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

        const ti = i + 1;

        if (GetInputValueInDivObj(divName, 'hidQueryStata') == '4') {
          strUserInfo1 += `{ "id": "${strUserId}", "name": "t${ti}", "attributes": { "modularity_class": ${j} } },`;
        } else {
          strUserInfo1 += `{ "id": "${strUserId}", "name": "${strUserName}", "attributes": { "modularity_class": ${j} } },`;
        }

        if (GetInputValueInDivObj(divName, 'hidQueryStata') == '1') {
          const f_x = t_layouts[i].x;
          const f_y = t_layouts[i].y;
          strUserInfo2 += `{id: ${j},name: '${strUserName}',itemStyle: { normal: { color: '${strcolor}' } },symbolSize: [42, 42],x:${f_x},y:${f_y}},`;
        } else if (GetInputValueInDivObj(divName, 'hidQueryStata') == '2') {
          strUserInfo2 += `{id: ${j},name: '${strUserName}',itemStyle: { normal: { color: '${strcolor}' } },symbolSize: [42, 42]},`;
        } else if (GetInputValueInDivObj(divName, 'hidQueryStata') == '3') {
          const objgs_UserRelaPosition = arrgs_UserRelaPositionObjLst.find(
            (x) => x.userId == strUserId,
          );
          if (objgs_UserRelaPosition != null) {
            strUserInfo2 += `{id: ${j},name: '${strUserName}',itemStyle: { normal: { color: '${strcolor}' } },symbolSize: [42, 42],x:${objgs_UserRelaPosition.xPosition},y:${objgs_UserRelaPosition.yPosition}},`;
          }
        } else if (GetInputValueInDivObj(divName, 'hidQueryStata') == '4') {
          const objgs_UserRelaPosition = arrgs_UserRelaPositionObjLst.find(
            (x) => x.userId == strUserId,
          );
          if (objgs_UserRelaPosition != null) {
            strUserInfo2 += `{id: ${j},name: 't${ti}',itemStyle: { normal: { color: '${strcolor}' } },symbolSize: [42, 42],x:${objgs_UserRelaPosition.xPosition},y:${objgs_UserRelaPosition.yPosition}},`;
          }
        }
        j++;
      }

      //计算出学生圆形坐标
      const s_nodeSize = arrvCurrEduClsStuObjLst.length;
      const s_center_x = 600;
      const s_center_y = 400;
      const s_radius = 330;
      let s_ii, s_i;
      const s_layouts: any = [];
      if (GetInputValueInDivObj(divName, 'hidQueryStata') == '1') {
        for (s_ii = s_i = 0; s_i < s_nodeSize; s_ii = ++s_i) {
          const x = s_center_x + s_radius * Math.sin((2 * Math.PI * s_ii) / s_nodeSize);
          const y = s_center_y + s_radius * Math.cos((2 * Math.PI * s_ii) / s_nodeSize);

          s_layouts.push({ x, y });
        }
      }
      //教学班学生
      for (let i = 0; i < arrvCurrEduClsStuObjLst.length; i++) {
        const strUserId = arrvCurrEduClsStuObjLst[i].stuId;
        const strUserName = arrvCurrEduClsStuObjLst[i].stuName;
        const strcolor = this.getRandomColor();

        const si = i + 1;

        if (GetInputValueInDivObj(divName, 'hidQueryStata') == '4') {
          strUserInfo1 += `{ "id": "${strUserId}", "name": "s${si}", "attributes": { "modularity_class": ${j} } },`;
        } else {
          strUserInfo1 += `{ "id": "${strUserId}", "name": "${strUserName}", "attributes": { "modularity_class": ${j} } },`;
        }

        if (GetInputValueInDivObj(divName, 'hidQueryStata') == '1') {
          const f_x = s_layouts[i].x;
          const f_y = s_layouts[i].y;
          strUserInfo2 += `{id: ${j},name: '${strUserName}',itemStyle: { normal: { color: '${strcolor}' } },symbolSize: [42, 42],x:${f_x},y:${f_y}},`;
        } else if (GetInputValueInDivObj(divName, 'hidQueryStata') == '2') {
          strUserInfo2 += `{id: ${j},name: '${strUserName}',itemStyle: { normal: { color: '${strcolor}' } },symbolSize: [42, 42]},`;
        } else if (GetInputValueInDivObj(divName, 'hidQueryStata') == '3') {
          const objgs_UserRelaPosition = arrgs_UserRelaPositionObjLst.find(
            (x) => x.userId == strUserId,
          );
          if (objgs_UserRelaPosition != null) {
            strUserInfo2 += `{id: ${j},name: '${strUserName}',itemStyle: { normal: { color: '${strcolor}' } },symbolSize: [42, 42],x:${objgs_UserRelaPosition.xPosition},y:${objgs_UserRelaPosition.yPosition}},`;
          }
        } else if (GetInputValueInDivObj(divName, 'hidQueryStata') == '4') {
          const objgs_UserRelaPosition = arrgs_UserRelaPositionObjLst.find(
            (x) => x.userId == strUserId,
          );
          if (objgs_UserRelaPosition != null) {
            strUserInfo2 += `{id: ${j},name: 's${si}',itemStyle: { normal: { color: '${strcolor}' } },symbolSize: [42, 42],x:${objgs_UserRelaPosition.xPosition},y:${objgs_UserRelaPosition.yPosition}},`;
          }
        }
        j++;
      }

      if (strUserInfo1.length > 5) {
        strUserInfo1 = strUserInfo1.substring(0, strUserInfo1.length - 1);
      }
      if (strUserInfo2.length > 5) {
        strUserInfo2 = strUserInfo2.substring(0, strUserInfo2.length - 1);
      }

      strUserInfo1 += ']';
      strUserInfo2 += ']';

      const strUserInfo1Json = eval(strUserInfo1);
      const strUserInfo2Json = eval(strUserInfo2);

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
        gs_UserRela.UserRelaCanvas(
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
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnSaveUserRela_Click(strUserRelax_y: any, strid_CurrEdu: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    ShowDivInDivObj(objLayOut, 'divLoading');
    let strJson = '[';
    for (let i = 0; i < strUserRelax_y.length; i++) {
      const userId: string = strUserRelax_y[i].id;
      const x: number = strUserRelax_y[i].x;
      const y: number = strUserRelax_y[i].y;
      const updDate: string = clsPubFun4Web.getNowDate(); // 修改日期
      const updUser: string = userStore.getUserId; // 修改人
      //idCurrEduCls: string = clsPubLocalStorage.idCurrEduCls;
      let strIdCurrEducls = '';
      if (strid_CurrEdu == '' || strid_CurrEdu == null) {
        strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      } else {
        strIdCurrEducls = strid_CurrEdu;
      }

      strJson += '{';
      strJson += `"userId":"${userId}",`;
      strJson += `"updUser":"${updUser}",`;
      strJson += `"updDate":"${updDate}",`;
      strJson += `"idCurrEduCls":"${strIdCurrEducls}",`;
      strJson += `"orderNum":${i},`;
      strJson += `"xPosition":${x},`;
      strJson += `"yPosition":${y}`;
      strJson += '},';
    }
    strJson = strJson.substring(0, strJson.length - 1);
    strJson += ']';

    //const responseText = await gs_UserRelaPositionEx_AddNewRecordAsync(strJson).then((jsonData) => {
    //    const returnBool: boolean = jsonData;
    //    if (returnBool == true) {

    //    } else {

    //    }
    //});

    //删除之前的用户关系排列图
    await this.DelRecord();
    //添加
    const responseText = await gs_UserRelaPositionEx_AddNewRecordAsync(strJson);
    const returnBool = !!responseText;
    if (returnBool == true) {
      const strInfo = `保存用户关系排列图成功!`;
      message.success(strInfo);
      $('#hidQueryStata').val('3');
      // strIdCurrEducls: string = clsPubLocalStorage.idCurrEduCls;
      let strIdCurrEducls = '';
      if (strid_CurrEdu == '' || strid_CurrEdu == null) {
        strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      } else {
        strIdCurrEducls = strid_CurrEdu;
      }
      await this.Bind_UserRela(strIdCurrEducls);
      HideDivInDivObj(objLayOut, 'divLoading');
    } else {
      const strInfo = `保存用户关系排列图不成功!`;
      alert(strInfo);
      HideDivInDivObj(objLayOut, 'divLoading');
    }
  }

  //删除之前的用户关系排列图
  public async DelRecord() {
    try {
      const strWhere = ` idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}' and updUser='${userStore.getUserId}'`;
      const returnInt: number = await gs_UserRelaPosition_Delgs_UserRelaPositionsByCondAsync(
        strWhere,
      );
      if (returnInt > 0) {
        const strInfo = `删除之前的用户关系排列图成功!`;
        ////显示信息框
        //alert(strInfo);
        console.log(strInfo);
      } else {
        const strInfo = `删除之前的用户关系排列图记录不成功!`;
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

  //获取不同色码
  public getRandomColor(): string {
    return `#${`00000${((Math.random() * 0x1000000) << 0).toString(16)}`.substring(-6)}`;
  }

  /*
   * 用户
   */
  public get userId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }
  /*
   * 用户
   */
  public set userId_q(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlUserId_q', value);
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
        divName = gs_UserRela.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = gs_UserRela.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = gs_UserRela.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = gs_UserRela.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = gs_UserRela.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = gs_UserRela.divPager;
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
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: gs_UserRela;

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
