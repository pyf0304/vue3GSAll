import $ from 'jquery';
import { gs_PaperParagraph_EditEx } from './gs_PaperParagraph_EditEx';
import { Section_EditEx } from './Section_EditEx';
import { gs_PaperParagraphEx_GetObjLstAsync } from '@/ts/L3ForWApiEx/GradEduPaper/clsgs_PaperParagraphExWApi';
import { gs_PaperParagraphCRUD } from '@/viewsBase/GradEduPaper/gs_PaperParagraphCRUD';
import { clsgs_PaperParagraphVerEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperParagraphVerEN';
import { clsvgs_PaperParagraphEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PaperParagraphEN';
import { clsvSectionEN } from '@/ts/L0Entity/GradEduPaper/clsvSectionEN';
import { clsRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaEN';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { gs_PaperParagraphVer_Delgs_PaperParagraphVersByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperParagraphVerWApi';
import {
  gs_PaperParagraph_DelRecordAsync,
  gs_PaperParagraph_DownMoveAsync,
  gs_PaperParagraph_GetRecCountByCondAsync,
  gs_PaperParagraph_ReFreshCache,
  gs_PaperParagraph_ReOrderAsync,
  gs_PaperParagraph_UpMoveAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperParagraphWApi';
import {
  vgs_PaperParagraph_GetObjLstAsync,
  vgs_PaperParagraph_ReFreshThisCache,
} from '@/ts/L3ForWApi/GradEduPaper/clsvgs_PaperParagraphWApi';
import {
  vSection_GetObjLstAsync,
  vSection_ReFreshThisCache,
} from '@/ts/L3ForWApi/GradEduPaper/clsvSectionWApi';
import {
  vRTUserRela_GetFirstObjAsync,
  vRTUserRela_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  HideDivInDivObj,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
  GetUlObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';

declare let window: any;
/* gs_PaperParagraph 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PaperParagraph extends gs_PaperParagraphCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvPaperBy: string = "paperId";

  // public arrType6: PeoplebgColor[] = [];
  // arrType6: PeoplebgColor[] = [{ userId: "Mr.A", bgcolor: '' }, { userId: "Mr.B", bgcolor: '' }]
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
    console.log('InitVarSet in QxPrjMenusCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPrjMenusCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    vSection_ReFreshThisCache();
    this.BindGv_vSection(this.thisDivList);
    vgs_PaperParagraph_ReFreshThisCache();
    this.BindGv_vgs_PaperParagraph(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'vgs_TeachingDate':
        alert('该类没有绑定该函数：[this.BindGv_vgs_TeachingDate_Cache]！');
        //this.BindGv_vgs_TeachingDateCache();;
        break;
    }
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
        // 为查询区绑定下拉框
        await this.BindDdl4QueryRegion();

        //const responseText = await Paper_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {

        //});
        this.hidSortvgs_PaperParagraphBy = 'updDate Asc';

        //1、获取当前用户的色码块
        await this.GetLoginUserColorCode();
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示左边树中
        await this.BindGv_vSection(this.thisDivList);
        //显示右边内容
        await this.BindGv_vgs_PaperParagraph(this.thisDivList);

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
  //获取当前登录用户的色码
  public async GetLoginUserColorCode() {
    //主题用户关系

    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strUserId = userStore.getUserId;
    //获取缓存色码表；

    const strWhereCondUser = ` 1=1 And ${clsvRTUserRelaEN.con_TopicId} = '${strTopicId}' And ${clsvRTUserRelaEN.con_UserId} ='${strUserId}'`;
    //根据当前登录人和主题Id 查询用户排序号，根据排序号 得到色码对应色块；
    await vRTUserRela_GetFirstObjAsync(strWhereCondUser).then((jsonData) => {
      const objRtUsersEN: clsvRTUserRelaEN = <clsvRTUserRelaEN>jsonData;
      //通过用户的编号，获取色码表对应的编号色码
      //strIdCurrEduclsObjgs_Color = arrGs_ColorObjLst.find(x => x.userNo == objRtUsersEN.orderNum);

      if (objRtUsersEN != null) {
        $('#hidColorCode').val(objRtUsersEN.colorCode);
        ////这里用固定背景色；
        //$("#hidColorCode").val(objRtUsersEN.userBgColor);
      }
    });
  }

  //根据主题ID 查询得到改主题有几个用户，存放数组，存放用户id  背景色 等等；
  public async ConstStr() {
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    let arrvRTUserRelaObjLst: Array<clsvRTUserRelaEN> = [];
    const strWhereCond = ` And ${clsvRTUserRelaEN.con_TopicId} = '${strTopicId}'`;
    arrvRTUserRelaObjLst = await vRTUserRela_GetObjLstAsync(strWhereCond);
    if (arrvRTUserRelaObjLst.length > 0) {
      for (let i = 0; i < arrvRTUserRelaObjLst.length; i++) {
        // const strUserId = arrvRTUserRelaObjLst[i].userId;
        // const strColor = this.getRandomColor();
      }
    }
    let strUserId = '[';
    let strColor = '[';

    for (let i = 0; i < arrvRTUserRelaObjLst.length; i++) {
      const objvRTUserRela = arrvRTUserRelaObjLst[i];
      strUserId = objvRTUserRela.userId;
      strColor = this.getRandomColor();
      strUserId += `"${strUserId}",`;
      strColor += `"${this.getRandomColor()}",`;
    }

    strUserId = strUserId.substring(0, strUserId.length - 1);
    strColor = strColor.substring(0, strColor.length - 1);
    strUserId += ']';
    strColor += ']';

    const strLabelsJson = eval(strUserId);
    const strColorJson = eval(strColor);
    this.UserColor(strLabelsJson, strColorJson);
    //  this.arrType6 = [{ userId: "Mr.A", bgcolor: '' }, { userId: "Mr.B", bgcolor: '' }]
  }
  //获取不同色码
  public getRandomColor(): string {
    return `#${`00000${((Math.random() * 0x1000000) << 0).toString(16)}`.substring(-6)}`;
  }
  //用户颜色数据组合
  public UserColor(strlabelsJson: string, strColorJson: string) {
    const config = {
      userId: strlabelsJson,
      backgroundColor: strColorJson,
    };
    console.log(config);
  }
  /* 把所有的查询控件内容组合成一个条件串
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
  <returns>条件串(strWhereCond)</returns>
*/
  public async Combinevgs_PaperParagraphCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const strPaperId = GetHidPaperId(divName);

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.ParagraphContent_q != "") {
      //    strWhereCond += ` And ${clsvgs_PaperParagraphEN.con_ParagraphContent} like '%${this.ParagraphContent_q}%'`;
      //}
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvgs_PaperParagraphEN.con_PaperId} = '${strPaperId}'`;
      }
      strWhereCond += ' order by orderNum Asc';
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0009)在组合查询条件(Combinegs_PaperParagraphCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   */
  public async BindGv_vgs_PaperParagraph(divList: HTMLDivElement) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (this.hidSortvgs_PaperParagraphBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortvgs_PaperParagraphBy)为空，请检查！(In BindGv_vgs_PaperParagraph)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.Combinevgs_PaperParagraphCondition();
    const strWhereSectionCond = this.CombinevSectionCondition();

    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvgs_PaperParagraphObjLst: Array<clsvgs_PaperParagraphEN> = [];
    //段落临时数据
    let arrParagraphObjLst: Array<clsvgs_PaperParagraphEN> = [];
    //节点数据源
    let arrvSectionObjLst: Array<clsvSectionEN> = [];
    //小节
    let arrvSectionZhangObjLst: Array<clsvSectionEN> = [];
    //小节子节
    let arrvSectionJieObjLst: Array<clsvSectionEN> = [];
    //主题用户关系
    let arrRTUserRelaObjLst: Array<clsvRTUserRelaEN> = [];
    //获取缓存色码表；
    // const arrGs_ColorObjLst: Array<clsgs_ColorEN> = [];
    //段落历史数据
    let arrgs_PaperParagraphVObjLst: Array<clsgs_PaperParagraphVerEN> = [];

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    try {
      //获取段落数据
      arrvgs_PaperParagraphObjLst = await vgs_PaperParagraph_GetObjLstAsync(strWhereCond);
      //获取节点数据
      arrvSectionObjLst = await vSection_GetObjLstAsync(strWhereSectionCond);

      const strTopicId = clsPrivateSessionStorage.topicIdInTree;

      const strWhereCondUser = ` 1=1 And ${clsRTUserRelaEN.con_TopicId} = '${strTopicId}'`;
      arrRTUserRelaObjLst = await vRTUserRela_GetObjLstAsync(strWhereCondUser);

      //获取段落历史数据
      const strPaperId = GetHidPaperId(divName);
      const strHistoryWhere = `  ${clsgs_PaperParagraphVerEN.con_PaperId} = '${strPaperId}'`;
      arrgs_PaperParagraphVObjLst = await gs_PaperParagraphEx_GetObjLstAsync(strHistoryWhere);

      let strhtml = '';
      //$('#divTwo li').remove();
      let cateid = 0;
      let cateid_ = 0;

      // let intJ = 0;

      $('#firstgarapht th').remove();
      //通过历史段落数据得到当前论文有多少用户；然后通过用户ID查询比对主题用户关系表 得到用户序号，通过序号 得到色码表；
      //循环数据源
      let strt = '<th colspan="2">';
      for (let y = 0; y < arrRTUserRelaObjLst.length; y++) {
        const strUserId = arrRTUserRelaObjLst[y].userId;
        // const orderNum = arrRTUserRelaObjLst[y].orderNum;
        const strUserName = arrRTUserRelaObjLst[y].userName;
        //strColorCode = arrRTUserRelaObjLst[y].userBgColor;//这用固定背景色
        const strColorCode = arrRTUserRelaObjLst[y].colorCode; //色码表中色码块
        //判断Userid 在段落历史中是否存在
        const objgs_PaperParagraphV = arrgs_PaperParagraphVObjLst.find(
          (x) => x.updUser == strUserId,
        );
        if (objgs_PaperParagraphV != null) {
          //strIdCurrEduclsObjgs_Color = arrGs_ColorObjLst.find(x => x.userNo == orderNum);
          //if (Objgs_Color != null) {
          // strColorCode = objUser.colorCode;
          strt += `<label style="background: ${strColorCode}">&nbsp;&nbsp;&nbsp;&nbsp;</label>&nbsp;&nbsp;<span>${strUserName}</span>&nbsp;&nbsp;&nbsp;`;
          // }
        }
      }
      strt += '</th>';

      $('#firstgarapht').append(strt);

      $('#tbList tr').remove();

      if (arrvSectionObjLst.length > 0) {
        //获取该论文下 所有的章节；
        arrvSectionZhangObjLst = arrvSectionObjLst.filter((x) => x.parentId == 'root');

        //循环所有的章节数据；
        if (arrvSectionZhangObjLst.length > 0) {
          for (let i = 0; i < arrvSectionZhangObjLst.length; i++) {
            //得到ID 然后得到章节下面的所有节数据
            const strSectionId = arrvSectionZhangObjLst[i].sectionId;
            const strSectionName = arrvSectionZhangObjLst[i].sectionName;

            //节点子数据
            arrvSectionJieObjLst = arrvSectionObjLst.filter((x) => x.parentId == strSectionId);
            if (arrvSectionJieObjLst.length > 0) {
              //得到子节点数据 循环输出；
              for (let j = 0; j < arrvSectionJieObjLst.length; j++) {
                const strJieSectionId = arrvSectionJieObjLst[j].sectionId;
                const strJieSectionName = arrvSectionJieObjLst[j].sectionName;
                cateid++;
                // intJ++;
                const fid = 0;
                //先创建子模块类型
                //strhtml += '<li data-role="list-divider" role="heading" class="ui-li-has-alt ui-li-divider ui-bar-inherit ui-first-child"><a><H1>' + this.SubViewpointTypeObjLst[j].subViewpointTypeName + ' </H1></a><span class="ui-li-count ui-body-inherit" ><a href="javascript:void(0)" title = "添加" onclick=btnAddRecordInTab_Click("' + strsubTypeId + '");>添加</a></span></li>';

                strhtml += `<tr cate-id="${cateid}" fid="${fid}"><td colspan="2">`;

                //strhtml += '<div style="float:left;"><h3>' + intJ + '.' + strJieSectionName + '</h3></div>';
                strhtml += `<div style="float:left;"><h3>${strSectionName}-${strJieSectionName}</h3></div>`;
                strhtml += '<div style="float:right;">';

                //if ($("#hidIsSubmit").val() != "true") {
                strhtml += `<button title="添加段落" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btnAddNewParagraphRecord_Click("${strJieSectionId}");><i class="layui-icon"></i></button>`;
                //strhtml += '<button title="重新排列序号" class="layui-btn layui-btn layui-btn-xs" onclick=btnReOrder_Click("' + strJieSectionId + '")><i class="layui-icon">&#xe669;</i></button>';
                //   }
                // }

                strhtml += '</div></td></tr>';

                //子节点下面的段落数据
                //段落ID
                // const strParagraphId = '';
                let strParagraphTypeId = ''; //段落类型
                let strParagraphContent = ''; //段落内容
                // let strUserName = ''; //编辑人姓名
                cateid_ = cateid;
                // const intK = 0;
                //通过目录子节点数据ID 查询得到对应的段落数据；
                arrParagraphObjLst = arrvgs_PaperParagraphObjLst.filter(
                  (x) => x.sectionId == strJieSectionId,
                );

                for (let k = 0; k < arrParagraphObjLst.length; k++) {
                  const strParagraphId = arrParagraphObjLst[k].paragraphId;
                  strParagraphTypeId = arrParagraphObjLst[k].paragraphTypeId;
                  strParagraphContent = arrParagraphObjLst[k].paragraphContent;
                  cateid++;

                  //查找比对用户
                  const ObjRTUserRela = arrRTUserRelaObjLst.find(
                    (x) => x.userId == arrParagraphObjLst[k].updUser,
                  );
                  if (ObjRTUserRela != null) {
                    // const strUserName = ObjRTUserRela.userName;
                    // const OrderNumber = ObjRTUserRela.orderNum;

                    ////通过用户的编号，获取色码表对应的编号色码
                    //strIdCurrEduclsObjgs_Color = arrGs_ColorObjLst.find(x => x.userNo == OrderNumber);
                    //if (Objgs_Color != null) {
                    //    strhtml += '<tr cate-id="' + cateid + '" fid="' + cateid_ + '" style="Color:' + Objgs_Color.colorCode + '"><td style="width:10%;">';
                    //}
                    //else {
                    //    strhtml += '<tr cate-id="' + cateid + '" fid="' + cateid_ + '" ><td style="width:10%;">';
                    //}
                    //通过用户的编号，获取色码表对应的编号色码
                    //strIdCurrEduclsObjgs_Color = arrGs_ColorObjLst.find(x => x.userNo == OrderNumber);
                    //if (Objgs_Color != null) {
                    //    strhtml += '<tr cate-id="' + cateid + '" fid="' + cateid_ + '" style="Color:' + Objgs_Color.colorCode + '"><td style="width:10%;">';
                    // }
                    // else {
                    strhtml += `<tr cate-id="${cateid}" fid="${cateid_}" ><td style="width:10%;">`;
                    // }
                  } else {
                    strhtml += `<tr cate-id="${cateid}" fid="${cateid_}" ><td style="width:10%;">`;
                  }
                  //strhtml += '<tr cate-id="' + cateid + '" fid="' + cateid_ + '" onmouseover=btnUpdatePaperPageNum_Click(' + arrParagraphObjLst[k].paperPageNum + ',"' + arrParagraphObjLst[k].explainContent + '")><td>';
                  //tr行内分2列展示；
                  //序号
                  strhtml += `<span class="color3" > ${arrParagraphObjLst[k].orderNum}. </span>`;
                  //通过段落数据比对 获取历史中的用户数据 段落ID和历史段落ID 比对得到列表
                  const arrHistoryParagraphObjLst = arrgs_PaperParagraphVObjLst.filter(
                    (x) => x.paragraphId == strParagraphId,
                  );
                  //循环数据源
                  for (let p = 0; p < arrHistoryParagraphObjLst.length; p++) {
                    //得到用户Id
                    const strUserId = arrHistoryParagraphObjLst[p].updUser;
                    //根据Id 查询用户缓存得到名字；
                    //得到编辑人名字
                    const objUsers = arrUsers.find((x) => x.userId == strUserId);
                    if (objUsers != null) {
                      //姓名
                      strhtml += `<br/><span class="color6" > ${objUsers.userName} </span>`;
                    }
                  }
                  //日期
                  strhtml += `<br/> <span class="colorRed" > ${clsDateTime.GetDate_Sim(
                    arrParagraphObjLst[k].updDate,
                  )} </span></td><td>`;

                  //先判断段落类型，根据类型判断是图片，还是段落；
                  if (strParagraphTypeId == '02') {
                    //图片，如果图片存放字段不为空
                    if (strParagraphContent != '') {
                      const strAddressAndPortfull = GetAddressAndPort() + strParagraphContent;
                      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" alt="" id="txtImgPath${strParagraphId}"/>`;
                    }
                  } else {
                    ////文字
                    //strhtml += '&nbsp;&nbsp;<span class="color3">' + arrParagraphObjLst[k].orderNum + '</span>.${clsIcon.faPlay}' + strParagraphContent + '';
                    //文字
                    strhtml += `&nbsp;&nbsp;${strParagraphContent}`;
                  }

                  //最底一行编辑
                  strhtml += '<br/><div style="float:right;">';

                  //strhtml += '<input id="txt_OrderNum' + cateid + '" type="text" class="layui-input" style="width:40px;" name="order" value="' + arrParagraphObjLst[k].orderNum + '" onBlur=btnUpdateOrderNum_Click("' + strSubViewpointId + '","txt_OrderNum' + cateid + '");>';
                  strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs" onclick="xadmin.open('段落历史版本', '../GradEduEx/HistoricalVersion?Key=${strParagraphId}&Type=11')"> ${clsIcon.faCommentDots}历史版本</button >`;
                  strhtml += `<button title="添加中间段落" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btnAddCenterParagraphRecord_Click("${strJieSectionId}",${arrParagraphObjLst[k].orderNum});><i class="layui-icon"></i></button>`;
                  //上移
                  strhtml += `<button title="上移序号" class="layui-btn layui-btn layui-btn-xs" onclick=btnUpMove_Click("${strParagraphId}",${arrParagraphObjLst[k].orderNum},"${strJieSectionId}")><i class="iconfont">&#xe6a5;</i></button>`;
                  //下移
                  strhtml += `<button title="下移序号" class="layui-btn layui-btn layui-btn-xs" onclick=btnDownMove_Click("${strParagraphId}",${arrParagraphObjLst[k].orderNum},"${strJieSectionId}")><i class="iconfont">&#xe6a6;</i></button>`;

                  //编辑
                  strhtml += `<button title="编辑段落" class="btn btn-info btn-sm" onclick=btnUpdategs_PaperParagraph_Click("${strParagraphId}")>${clsIcon.faPenToSquare}</button>`;
                  //删除
                  strhtml += `<button title="删除段落" class="btn-danger btn btn-sm" onclick=btnDelRecordInTab_Click("${strParagraphId}")>${clsIcon.faTrash}</button>`;

                  strhtml += '</div></td></tr>';
                }
              }
            }
          }

          //拼接；
          $('#tbList').append(strhtml);
        }
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
    //try {
    //    this.BindTab_vgs_PaperParagraph(strListDiv, arrvgs_PaperParagraphObjLst);
    //    console.log("完成BindGv_vgs_PaperParagraph!");
    //}
    //catch (e:any) {
    //    console.error('catch(e)=');
    //    console.error(e);
    //    //console.trace();
    //    strIdCurrEduclsstrMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
    //    alert(strMsg);
    //}
  }

  //删除段落
  /* 
在数据表里删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
*/
  public async btnDelRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      //删除之前先删除ID对应的历史版本记录；
      await this.DelRecordgs_PaperParagraphW(strKeyId);

      await this.DelRecord(strKeyId);
      await this.btnReOrder_Click();
      await this.BindGv_vgs_PaperParagraph(this.thisDivList);
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
  public async DelRecord(strParagraphId: string) {
    try {
      const responseText = await gs_PaperParagraph_DelRecordAsync(strParagraphId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //gs_PaperParagraph_ReFreshCache();
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
  /* 
根据关键字删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecordgs_PaperParagraphW(strParagraphId: string) {
    try {
      //删除之前先删除ID对应的历史版本记录；
      const strWhere = ` 1=1 And paragraphId = '${strParagraphId}'`;
      const responseText = await gs_PaperParagraphVer_Delgs_PaperParagraphVersByCondAsync(strWhere);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //gs_PaperParagraph_ReFreshCache();
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        //alert(strInfo);
        console.log(strInfo);
      } else {
        // const strInfo = `删除记录不成功!`;
        //显示信息框
        // alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */
  public CombinevSectionCondition(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const strPaperId = GetHidPaperId(divName);
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (strPaperId != '') {
        //论文ID
        strWhereCond += ` And ${clsvSectionEN.con_PaperId} = '${strPaperId}'`;
      }
      strWhereCond += ' order by orderNum Asc';
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSectionCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //章节数据源
  /* 根据条件获取相应的记录对象的列表
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vSection(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombinevSectionCondition();
    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvSectionObjLst: Array<clsvSectionEN> = [];
    let arrvSectionZhangObjLst: Array<clsvSectionEN> = [];
    let arrvSectionJieObjLst: Array<clsvSectionEN> = [];
    try {
      arrvSectionObjLst = await vSection_GetObjLstAsync(strWhereCond);

      let strhtml = '';
      $('#TreeBind li').remove();
      if (arrvSectionObjLst.length > 0) {
        //获取该论文下 所有的章；
        arrvSectionZhangObjLst = arrvSectionObjLst.filter((x) => x.parentId == 'root'); //技能引用人

        //循环章数据；
        if (arrvSectionZhangObjLst.length > 0) {
          for (let i = 0; i < arrvSectionZhangObjLst.length; i++) {
            //得到ID 然后得到章下面的所有节数据
            const strSectionId = arrvSectionZhangObjLst[i].sectionId;
            const strSectionName = arrvSectionZhangObjLst[i].sectionName;
            strhtml += '<li class="li">';
            strhtml += `<a href="javascript:void(0)" id = "${strSectionId}" class="main" title = "${strSectionName}" onclick =main_Click("${strSectionId}") style = "background: url(&quot;../images/st_folder_open.gif&quot;) left center no-repeat;" >${strSectionName}</a>`;
            strhtml += `<ul class="submenu" id = "ul${strSectionId}" style = "">`;

            arrvSectionJieObjLst = arrvSectionObjLst.filter((x) => x.parentId == strSectionId);
            if (arrvSectionJieObjLst.length > 0) {
              //得到子节点数据 循环输出；
              for (let j = 0; j < arrvSectionJieObjLst.length; j++) {
                const strJieSectionId = arrvSectionJieObjLst[j].sectionId;
                const strJieSectionName = arrvSectionJieObjLst[j].sectionName;
                strhtml += `<li id="li${strJieSectionId}" onclick=btnSelectResearchTopic("${strJieSectionId}","${strJieSectionName}")>`;
                strhtml += `<a href="javascript:void(0)" title ="${strJieSectionName}" > ${strJieSectionName}</a>`;
                strhtml += '</li>';
              }
            }

            strhtml += ' </ul></li>';
          }
        }
      }

      // $('#T1reeBind').html(strhtml);
      const TreeBind = GetUlObjInDivObj(objLayOut, 'TreeBind');
      TreeBind.innerHTML = strhtml;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    //if (arrvSectionObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    //try {
    //    this.BindTab_vSection(strListDiv, arrvSectionObjLst);
    //    console.log("完成BindGv_vSection!");
    //}
    //catch (e:any) {
    //    console.error('catch(e)=');
    //    console.error(e);
    //    strIdCurrEduclsstrMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
    //    alert(strMsg);
    //}
  }

  //-----------------添加节 、修改节、删除；
  /* 添加新记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
  */
  public async btnAddNewRecord_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      const strLevelId = GetInputValueInDivObj(divName, 'hidLevelId');
      const strSectionId = GetInputValueInDivObj(divName, 'hidSectionId');
      //论文Id；
      const strPaperId = GetHidPaperId(divName);
      //操作之前 清空编辑区html
      $('#divEdit').html('');
      const objPage: gs_PaperParagraph = new gs_PaperParagraph(this.divLayout);
      const objPageEdit: Section_EditEx = new Section_EditEx('Section_EditEx', objPage);

      //页面传入
      ///   strIdCurrEduclsstrzxPageType = GetInputValueInDivObj(divName, 'hidzxPageType');
      if (strLevelId == '1') {
        //     strIdCurrEduclsGroupTextId = GetInputValueInDivObj(divName, 'hidGroupTextId');
        //父节点；
        objPageEdit.btnAddNewSection_Click(strPaperId, 'root');
      } else {
        //这里是等于2，等于3在页面已经处理；
        objPageEdit.btnAddNewSection_Click(strPaperId, strSectionId);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  //节修改
  public async btn_UpdateSection() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //得到修改的主键
    const strSectionId = GetInputValueInDivObj(divName, 'hidSectionId');
    if (strSectionId != '') {
      $('#divEdit').html('');
      const objPage: gs_PaperParagraph = new gs_PaperParagraph(this.divLayout);
      const objPageEdit: Section_EditEx = new Section_EditEx('Section_EditEx', objPage);

      objPageEdit.btnUpdateRecordInTab_Click(strSectionId);
    } //个人
  }
  //添加子节点论文段落
  public async btnAddNewParagraphRecord_Click(strKeyId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      const strSectionId = strKeyId;
      //获取色码块
      const strColorCode = GetInputValueInDivObj(divName, 'hidColorCode');
      //论文Id；
      const strPaperId = GetHidPaperId(divName);
      //操作之前 清空编辑区html
      $('#divEdit').html('');
      const objPage: gs_PaperParagraph = new gs_PaperParagraph(this.divLayout);
      const objPageEdit: gs_PaperParagraph_EditEx = new gs_PaperParagraph_EditEx(
        'gs_PaperParagraph_EditEx',
        objPage,
      );

      //添加段落；
      objPageEdit.btnAddNewParagraph_Click(strPaperId, strSectionId, '', strColorCode);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  //添加中间段落
  public async btnAddCenterParagraphRecord_Click(strJieSectionId: string, orderNum: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      const strSectionId = strJieSectionId;
      //获取色码块
      const strColorCode = GetInputValueInDivObj(divName, 'hidColorCode');
      //论文Id；
      const strPaperId = GetHidPaperId(divName);
      //操作之前 清空编辑区html
      $('#divEdit').html('');
      const objPage: gs_PaperParagraph = new gs_PaperParagraph(this.divLayout);
      const objPageEdit: gs_PaperParagraph_EditEx = new gs_PaperParagraph_EditEx(
        'gs_PaperParagraph_EditEx',
        objPage,
      );

      //添加段落；
      objPageEdit.btnAddNewParagraph_Click(strPaperId, strSectionId, orderNum, strColorCode);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  //子节点段落修改
  /* 在数据表里修改记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdategs_PaperParagraph_Click)
  */
  public async btnUpdategs_PaperParagraph_Click(strKeyId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //得到修改的主键
    $('#hidParagraphId').val(strKeyId);
    //获取色码块
    const strColorCode = GetInputValueInDivObj(divName, 'hidColorCode');
    if (strKeyId != '') {
      $('#divEdit').html('');
      const objPage: gs_PaperParagraph = new gs_PaperParagraph(this.divLayout);
      const objPageEdit: gs_PaperParagraph_EditEx = new gs_PaperParagraph_EditEx(
        'gs_PaperParagraph_EditEx',
        objPage,
      );

      objPageEdit.btnUpdategs_PaperParagraph_Click(strKeyId, strColorCode);
    } //个人
  }

  /*
重序
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
*/
  public async btnReOrder_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (this.PreCheck4Order() == false) return;
    const strSectionId: string = GetInputValueInDivObj(divName, 'hidJieSectionId');
    const strPaperId: string = GetHidPaperId(divName);
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        sectionId: strSectionId,
        paperId: strPaperId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await gs_PaperParagraph_ReOrderAsync(objOrderByData);
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
      alert(strMsg);
      return;
    }
    await this.BindGv_vgs_PaperParagraph(this.thisDivList);
  }

  /*
    上移
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
    */
  public async btnUpMove_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (GetInputValueInDivObj(divName, 'hidOrderNum') == '0') {
      await this.btnReOrder_Click();
    }
    //  if (this.PreCheck4Order() == false) return;
    const strSectionId: string = GetInputValueInDivObj(divName, 'hidJieSectionId');
    const strPaperId: string = GetHidPaperId(divName);
    const arrKeyIds = GetInputValueInDivObj(divName, 'hidKeyId') as any;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        sectionId: strSectionId,
        paperId: strPaperId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await gs_PaperParagraph_UpMoveAsync(objOrderByData);
      await gs_PaperParagraph_ReFreshCache();
    } catch (e: any) {
      const strMsg = `上1移记录出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await this.BindGv_vgs_PaperParagraph(this.thisDivList);

    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    //arrKeyIds.forEach((e) => clsCommonFunc4Web.SetCkechedItem4KeyId(strListDiv, e));
  }

  /*
    下移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
    */
  public async btnDownMove_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (GetInputValueInDivObj(divName, 'hidOrderNum') == '0') {
      await this.btnReOrder_Click();
    }

    //  if (this.PreCheck4Order() == false) return;
    const strSectionId: string = GetInputValueInDivObj(divName, 'hidJieSectionId');
    const strPaperId: string = GetHidPaperId(divName);
    const arrKeyIds = GetInputValueInDivObj(divName, 'hidKeyId') as any;
    //先获取该节点段落最大段落数，如果和排序号相等，那么则是最后一条数据
    const orderNum = GetInputValueInDivObjN(divName, 'hidOrderNum');
    const strWhere = ` 1=1 And paperId='${strPaperId}' And sectionId='${strSectionId}'`;
    const intCount = await gs_PaperParagraph_GetRecCountByCondAsync(strWhere);
    if (intCount == orderNum) {
      const strMsg = `该记录已经是最后一条记录`;
      alert(strMsg);
      return;
    } else {
      try {
        const objOrderByData: clsOrderByData = new clsOrderByData();
        objOrderByData.KeyIdLst = arrKeyIds;
        const jsonObject = {
          sectionId: strSectionId,
          paperId: strPaperId,
        };
        const jsonStr: string = JSON.stringify(jsonObject);
        objOrderByData.ClassificationFieldValueLst = jsonStr;
        await gs_PaperParagraph_DownMoveAsync(objOrderByData);
        await gs_PaperParagraph_ReFreshCache();
      } catch (e: any) {
        const strMsg = `下移记录出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await this.BindGv_vgs_PaperParagraph(this.thisDivList);
    }

    //await this.BindGv_vPaperSubViewpoint();
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    //arrKeyIds.forEach((e) => clsCommonFunc4Web.SetCkechedItem4KeyId(strListDiv, e));
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvgs_PaperParagraphBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvgs_PaperParagraphBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvgs_PaperParagraphBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvgs_PaperParagraphBy');
  }
}
