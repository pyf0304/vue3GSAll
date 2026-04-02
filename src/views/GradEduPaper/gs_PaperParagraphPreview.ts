import $ from 'jquery';
import { gs_PaperParagraphEx_GetObjLstAsync } from '@/ts/L3ForWApiEx/GradEduPaper/clsgs_PaperParagraphExWApi';
import { clsPublicParagraph } from '@/ts/FunClass/clsPublicParagraph';
import { gs_PaperParagraphCRUD } from '@/viewsBase/GradEduPaper/gs_PaperParagraphCRUD';
import { clsgs_PaperParagraphVerEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperParagraphVerEN';
import { clsvgs_PaperParagraphEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PaperParagraphEN';
import { clsvSectionEN } from '@/ts/L0Entity/GradEduPaper/clsvSectionEN';
import { clsRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaEN';
import { clsvRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { vgs_PaperParagraph_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvgs_PaperParagraphWApi';
import { vSection_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvSectionWApi';
import { vRTPaperRela_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTPaperRelaWApi';
import { vRTUserRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import { GetAddressAndPort, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import {
  GetInputValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';

declare let window: any;
/* gs_PaperParagraphPreview 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PaperParagraphPreview extends gs_PaperParagraphCRUD {
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

        // const strRoleId = userStore.getRoleId;
        //判断角色
        //管理员
        // if ( strRoleId == enumQxRoles.System_Admin_00620001 ||
        // strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018) {
        // } else if (strRoleId == '00620002') {
        // } else {
        // }
        await this.GetPaperTitleById();
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
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
  //根据主题ID 和论文ID查论文名称
  public async GetPaperTitleById() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = GetHidPaperId(divName);
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strWhereCond = ` 1=1 And ${clsvRTPaperRelaEN.con_TopicId} = '${strTopicId}' And ${clsvRTPaperRelaEN.con_PaperId} ='${strPaperId}'`;

    //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
    await vRTPaperRela_GetFirstObjAsync(strWhereCond).then((jsonData) => {
      const objRtUsersEN: clsvRTPaperRelaEN = <clsvRTPaperRelaEN>jsonData;
      $('#lblPaperTitle').html(objRtUsersEN.paperTitle);
    });
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
    //段落历史数据
    let arrgs_PaperParagraphVObjLst: Array<clsgs_PaperParagraphVerEN> = [];
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
      // let cateid = 0;
      // let cateid_ = 0;

      // let intJ = 0;
      // const fid = 0;

      $('#tbList div').remove();

      if (arrvSectionObjLst.length > 0) {
        //获取该论文下 所有的章节；
        arrvSectionZhangObjLst = arrvSectionObjLst.filter((x) => x.parentId == 'root');
        $('#firstgarapht div').remove();
        let strt = '<div style="text-align:center;"><th style="text-align:center;">参与者:';
        //参与者
        for (let y = 0; y < arrRTUserRelaObjLst.length; y++) {
          const strUserId = arrRTUserRelaObjLst[y].userId;
          // const orderNum = arrRTUserRelaObjLst[y].orderNum;
          const strUserName = arrRTUserRelaObjLst[y].userName;
          //判断Userid 在段落历史中是否存在
          const objgs_PaperParagraphV = arrgs_PaperParagraphVObjLst.find(
            (x) => x.updUser == strUserId,
          );
          if (objgs_PaperParagraphV != null) {
            strt += `<span>${strUserName}</span>&nbsp;&nbsp;&nbsp;`;
          }
        }
        strt += '</th></div>';
        $('#firstgarapht').append(strt);

        //循环所有的章节数据；
        if (arrvSectionZhangObjLst.length > 0) {
          for (let i = 0; i < arrvSectionZhangObjLst.length; i++) {
            //得到ID 然后得到章节下面的所有节数据
            const strSectionId = arrvSectionZhangObjLst[i].sectionId;
            const strSectionName = arrvSectionZhangObjLst[i].sectionName;

            // strhtml += '<tr cate-id="' + cateid + '" fid="' + fid + '"><td>';

            //strhtml += '<div style="float:left;"><h3>' + intJ + '.' + strJieSectionName + '</h3></div>';
            strhtml += `<div><h3>${strSectionName}</h3></div>`;

            //strhtml += '</td></tr>';
            //节点子数据
            arrvSectionJieObjLst = arrvSectionObjLst.filter((x) => x.parentId == strSectionId);
            if (arrvSectionJieObjLst.length > 0) {
              //得到子节点数据 循环输出；
              for (let j = 0; j < arrvSectionJieObjLst.length; j++) {
                const strJieSectionId = arrvSectionJieObjLst[j].sectionId;
                const strJieSectionName = arrvSectionJieObjLst[j].sectionName;
                // cateid++;
                // intJ++;

                //先创建子模块类型
                //strhtml += '<li data-role="list-divider" role="heading" class="ui-li-has-alt ui-li-divider ui-bar-inherit ui-first-child"><a><H1>' + this.SubViewpointTypeObjLst[j].subViewpointTypeName + ' </H1></a><span class="ui-li-count ui-body-inherit" ><a href="javascript:void(0)" title = "添加" onclick=btnAddRecordInTab_Click("' + strsubTypeId + '");>添加</a></span></li>';

                strhtml += `<div><h4>${strJieSectionName}</h4></div>`;

                //子节点下面的段落数据
                //段落ID
                let strParagraphId = '';
                let strParagraphTypeId = ''; //段落类型
                let strParagraphContent = ''; //段落内容
                // const strUserName = ''; //编辑人姓名
                // cateid_ = cateid;
                // const intK = 0;
                //通过目录子节点数据ID 查询得到对应的段落数据；
                arrParagraphObjLst = arrvgs_PaperParagraphObjLst.filter(
                  (x) => x.sectionId == strJieSectionId,
                );

                for (let k = 0; k < arrParagraphObjLst.length; k++) {
                  strParagraphId = arrParagraphObjLst[k].paragraphId;
                  strParagraphTypeId = arrParagraphObjLst[k].paragraphTypeId;
                  strParagraphContent = arrParagraphObjLst[k].paragraphContent;
                  // cateid++;

                  strhtml += '<div>';

                  //先判断段落类型，根据类型判断是图片，还是段落；
                  if (strParagraphTypeId == '02') {
                    //图片，如果图片存放字段不为空
                    if (strParagraphContent != '') {
                      const strAddressAndPortfull = GetAddressAndPort() + strParagraphContent;
                      //strhtml += '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="' + strAddressAndPortfull + '" crossorigin="anonymous" alt="" id="txtImgPath' + strParagraphId + '"/>';
                      strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" crossorigin="anonymous" alt="" id="txtImgPath${strParagraphId}"/>`;
                    }
                  } else {
                    ////文字
                    //strhtml += '&nbsp;&nbsp;<span class="color3">' + arrParagraphObjLst[k].orderNum + '</span>.${clsIcon.faPlay}' + strParagraphContent + '';
                    //文字
                    strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;${strParagraphContent}`;
                  }

                  //最底一行编辑
                  strhtml += '<br/>';

                  strhtml += '</div>';
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

  //根据老的标签字符串，格式化后，循环数据存放对象列表；
  public SaveObjListByString(strText: string): Array<clsPublicParagraph> {
    //用来记录是标签开始，还是结束；
    // let Ismark = false;
    let strTextValue = ''; //用来接收循环的数据组合；
    let NumId = 0;
    //声明一个临时对象列表
    const arrObjLst: Array<clsPublicParagraph> = new Array<clsPublicParagraph>();
    //循环标签字符串，这里循环的是老的标签数据；
    for (let i = 0; i < strText.length; i++) {
      //首先判断标签符号是否是<
      if (strText[i] == '<') {
        //判断临时数据是否为"" ;为空则说明数据已经被处理，是起始数据；不为空，则说明是标签中间内容部分
        if (strTextValue != '') {
          NumId++;
          //不等于空，则说明是标签内容部分，结束，那么需要插入到对象列表；
          const objPublicParagraph: clsPublicParagraph = new clsPublicParagraph();
          objPublicParagraph.TextId = String(NumId);
          objPublicParagraph.TextValue = strTextValue; //把数据存放到对象；
          objPublicParagraph.IsTag = false;

          arrObjLst.push(objPublicParagraph);

          //清空临时变量数据；
          strTextValue = '';

          //将数据插入对象列表后，更改为true，因为是标签
          // Ismark = true;
          //将字符存放到临时数据 ，进行组合
          strTextValue += strText[i];
        } else {
          //等于空，说明是开始，
          // Ismark = true;
          //将字符存放到临时数据 ，进行组合
          strTextValue += strText[i];
        }
      } else if (strText[i] == '>') {
        //如果是结束标签；那么ismark改为false；把临时数据存入对象，清空临时数据存放
        strTextValue += strText[i];
        NumId++;
        const objPublicParagraph: clsPublicParagraph = new clsPublicParagraph();
        objPublicParagraph.TextId = String(NumId);
        objPublicParagraph.TextValue = strTextValue; //把数据存放到对象；
        objPublicParagraph.IsTag = true;

        arrObjLst.push(objPublicParagraph);

        // Ismark = false;
        strTextValue = '';
      } else {
        //不是<>标签，那么字符继续组合存放
        strTextValue += strText[i];
      }
    }

    //调用数据比对转换
    const strNewTextValue = '测试一大段数据不同<span style="color:red;">小小</span>的颜色显示';
    this.GetDataList(arrObjLst, strNewTextValue);

    return arrObjLst;
  }

  //获取存放的对象列表arr，需要比对的新的字符串strNewTextValue；过滤标签数据，循环输出比对
  public GetDataList(
    arr: Array<clsPublicParagraph>,
    strNewTextValue: string,
  ): Array<clsPublicParagraph> {
    strNewTextValue = '测试一大段数据不同<span style="color:red;">小小</span>的颜色显示';

    //先过滤掉标签数据不是标签的；
    const arrObjLst_New: Array<clsPublicParagraph> = arr.filter((x) => x.IsTag == false);
    // let objParagraph: clsPublicParagraph;
    console.log(arrObjLst_New);
    //循环得到的标签内容数据
    for (let i = 0; i < arrObjLst_New.length; i++) {
      //通过获取的标签内容 再次循环 和新的数据比对 字符比对
      const strTabContent: string = arrObjLst_New[i].TextValue;
      const strTextId = arrObjLst_New[i].TextId;

      //定义一个字符组合变量;用来存放for循环输出的数据；
      let strNewTextTabContent = '';
      //循环内容
      for (let j = 0; j < strTabContent.length; j++) {
        //循环读取每段的单个字符
        const strSinger = strTabContent[j];

        //用得到的字符去 比对转换后的带标签的字符串；
        for (let k = 0; k < strNewTextValue.length; k++) {
          //如果比对的字符相等；
          if (strSinger == strNewTextValue[k]) {
            //相等，那么就存放到变量
            strNewTextTabContent += strSinger;
            //获取当前字符的位置
            const index = strNewTextValue.indexOf(strNewTextValue[k]);
            //那么截取这个字符之后的数据
            strNewTextValue = strNewTextValue.substring(index + 1, strNewTextValue.length);
            break;
          } else {
            //如果比对不相等；且出现<，说明被更改，出现了标签数据；
            if (strNewTextValue[k] == '<') {
              //那么截取第二个>前面的内容，这样就能得到一个完整的标签数据
              //index = strNewTextValue.indexOf(">", strNewTextValue.indexOf(">") + 1);//先得到第二个字符位置
              const index = strNewTextValue.indexOf('>', strNewTextValue.indexOf('>')); //先得到第一个字符位置

              //截取从开始到第二个字符之前的数据，因为截取的是>之前的数据，所以自动加上>;
              const c = `${strNewTextValue.substring(0, index)}>`;

              //要拼接到 循环strNewTextValue[k] 后面位置 待定----------；
              strNewTextTabContent += c;

              //操作完成后，截取第二个>之后的字符 +1代表不包含>
              //strNewTextValue = strNewTextValue.substring(index + 1, strNewTextValue.length);//6
              //这里下标不+1，因为for循环执行第二次会读取下一个字符；+1会出现位置不一致；
              strNewTextValue = strNewTextValue.substring(index, strNewTextValue.length); //6

              //因为是标签数据，所以不用break；继续比对
              //break;
            } else {
              ////获取当前字符的位置
              //index = strNewTextValue.indexOf(strNewTextValue[k]);
              ////那么截取这个字符之后的数据
              //strNewTextValue = strNewTextValue.substring(index + 1, strNewTextValue.length);
            }
          }
        }
      }

      //如果老的对象循环完，但是新的数据还有的情况 需要继续判断
      if (i + 1 == arrObjLst_New.length) {
        //如果新数据还存在的情况下，需要拼接到临时对象、直接拼接；
        if (strNewTextValue.length > 0) {
          strNewTextTabContent += strNewTextValue;
        }
      }

      //当跳出当前循环体 说明一段内容比对完毕，这里个时候 需要把组合的新内容 存放到循环的对象列表字段中
      //改变list中某个元素值
      const Paragraph = arrObjLst_New.find((c) => c.TextId == strTextId);
      if (Paragraph != null) {
        Paragraph.NewTextValue = strNewTextTabContent;
      }
    }

    //组合后的数据
    this.GetNewDataList(arrObjLst_New, arr);

    return arrObjLst_New;
  }

  //通过获取的标签内容对象列表数据 ，循环输出比对原有数据，替换新的数据；
  public GetNewDataList(
    arr: Array<clsPublicParagraph>,
    arrOldLst: Array<clsPublicParagraph>,
  ): Array<clsPublicParagraph> {
    // strIdCurrEduclsLastArrList: Array<clsPublicParagraph> = arrOldLst;

    //先循环不带标签的数据；
    for (let i = 0; i < arr.length; i++) {
      //通过获取的新的标签内容;
      const strTabNewContent: string = arr[i].NewTextValue;
      const strTextId = arr[i].TextId;

      const Paragraph = arrOldLst.find((c) => c.TextId == strTextId);
      if (Paragraph != null) {
        Paragraph.NewTextValue = strTabNewContent;
      }
    }

    //定义一个接受拼接字符串变量
    let strNewTextContent = '';
    //把对象数据组合成 新的字符串
    for (let i = 0; i < arrOldLst.length; i++) {
      //如果是标签就取Textvalue；
      if (arrOldLst[i].IsTag == true) {
        strNewTextContent += arrOldLst[i].TextValue;
      } else {
        strNewTextContent += arrOldLst[i].NewTextValue;
      }
    }

    //测试弹出数据；
    const strMsg: string = strNewTextContent;
    alert(strMsg);
    return arrOldLst;
  }
}
