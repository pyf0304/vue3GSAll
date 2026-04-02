import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { Paper_EditEx } from '../GradEduPaper/Paper_EditEx';
import { Paper_QUDI_AllPaper } from './Paper_QUDI_AllPaper';
import { Paper_QUDI_CurrEduCls } from './Paper_QUDI_CurrEduCls';
import { Paper_QUDI_Direction } from './Paper_QUDI_Direction';
import { Paper_QUDI_Major } from './Paper_QUDI_Major';
import { clsPaperWApiEx } from '@/ts/L3ForWApiEx/GraduateEdu/clsPaperWApiEx';
import { MajorDirectionPaperRelaEx_SetMajorDirectionId } from '@/ts/L3ForWApiEx/GradEduPaper/clsMajorDirectionPaperRelaExWApi';
import { PaperEduClsRelaEx_SetIdCurrEduCls } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperEduClsRelaExWApi';
import {
  PaperEx_GetObjExLstByPagerAsync,
  PaperEx_ReFreshThisCacheByIdCurrEduCls,
} from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { clsgs_PaperTypeEN } from '@/ts/L0Entity/RT_Params/clsgs_PaperTypeEN';
import { clsgs_PaperStatusEN } from '@/ts/L0Entity/RT_Params/clsgs_PaperStatusEN';
import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsvXzMajorDirectionEN } from '@/ts/L0Entity/BaseInfo/clsvXzMajorDirectionEN';
import {
  XzMajorDirection_BindDdl_MajorDirectionIdByIdXzMajorInDivCache,
  XzMajorDirection_GetObjByMajorDirectionIdCache,
} from '@/ts/L3ForWApi/BaseInfo/clsXzMajorDirectionWApi';
import { PaperAttachment_DelPaperAttachmentsByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import {
  Paper_GetRecCountByCondAsync,
  Paper_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { RTPaperRela_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTPaperRelaWApi';
import { gs_Tags_GetRecCountByCondAsync } from '@/ts/L3ForWApi/InteractManage/clsgs_TagsWApi';
import { qa_Questions_GetRecCountByCondAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_QuestionsWApi';
import {
  gs_PaperStatus_BindDdl_PaperStatusIdInDivCache,
  gs_PaperStatus_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsgs_PaperStatusWApi';
import { gs_PaperType_GetSubObjLstCache } from '@/ts/L3ForWApi/RT_Params/clsgs_PaperTypeWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import {
  LiteratureType_BindDdl_LiteratureTypeIdInDivCache,
  LiteratureType_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import {
  GetCheckedKeyIdsInDiv,
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  SetSpanHtmlInDivObj,
  ShowDivInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  BindDdl_ObjLst,
  BindTab,
  BindTab_V,
  GetCheckedKeyIds,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare function HideDialog(): void;

declare let window: any;
/* Paper_QUDIEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Paper_QUDIEx extends PaperCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrsortPaperBy: string = "paperId";
  public static CurrTabName = 'AllPaper';
  public static paperTypeId = '';
  //专业方向
  public mstrListDivMajorDirection = 'divMajorDirectionDataLst';

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
  */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName4Pager = 'divPager';
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        // 为查询区绑定下拉框
        //await this.BindDdl4QueryRegion();
        await XzMajorDirection_BindDdl_MajorDirectionIdByIdXzMajorInDivCache(
          objLayOut,
          'ddlMajorDirectionId_SetFldValue',
          userStore.getIdXzMajor,
        );
        SetSpanHtmlInDivObj(objLayOut, 'spnMajorName', userStore.getMajorName);
        PaperCRUD.sortPaperBy = 'updDate Desc';

        const strRoleId = userStore.getRoleId;
        //判断角色
        //管理员
        if (
          strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
          $('#btnDelRecord').show();
          $('#btnAudit').show();
          $('#btnSynPaperStatistics').show();
        } else if (strRoleId == '00620002') {
          $('#btnDelRecord').hide();
          $('#btnAudit').show();
        } else {
          $('#btnDelRecord').hide();
          $('#btnAudit').hide();
          $('#btnCancelSubmit').hide();
        }
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        const objPage = new Paper_QUDI_AllPaper(this.divLayout);
        await objPage.PageLoad();
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

  //统计核算
  public async btnSynPaperStatistics_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strUserId = userStore.getUserId;
    try {
      ShowDivInDivObj(objLayOut, 'divLoading');
      const responseText2 = await clsPaperWApiEx.SynPaperStatisticsAsync(strUserId);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `统计核算成功!`;

        //显示信息框
        alert(strInfo);
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        const strInfo = `统计核算不成功!`;

        //显示信息框
        alert(strInfo);
        HideDivInDivObj(objLayOut, 'divLoading');
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `统计核算异常,${e}.`;
      alert(strMsg);
      HideDivInDivObj(objLayOut, 'divLoading');
    }
  }

  public async BindDdl4QueryRegion() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    //绑定编辑文献类型
    await LiteratureType_BindDdl_LiteratureTypeIdInDivCache(objLayOut, 'ddlLiteratureTypeId');

    //绑定论文类型下拉框
    await this.BindDdl_gs_PaperType_Cache('ddlPaperTypeId');

    //论文状态

    await gs_PaperStatus_BindDdl_PaperStatusIdInDivCache(objLayOut, 'ddlPaperStatusId');
    //分享

    const divDataLst = GetDivObjInDivObj(objLayOut, 'divDataLst');

    await gs_Share_BindDdl_ShareIdInDivCache(divDataLst, 'ddlShareId');
  }

  public async BindDdl_LiteratureTypeId_Cache(
    ddlLiteratureTypeId: string,
    objLiteratureType_Cond: clsLiteratureTypeEN,
  ) {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      let arrObjLst_Sel: Array<clsLiteratureTypeEN> = await LiteratureType_GetSubObjLstCache(
        objLiteratureType_Cond,
      );
      arrObjLst_Sel = arrObjLst_Sel.sort((x) =>
        x.GetFldValue(clsLiteratureTypeEN.con_LiteratureTypeId),
      );
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrObjLst_Sel,
        clsLiteratureTypeEN.con_LiteratureTypeId,
        clsLiteratureTypeEN.con_LiteratureTypeName,
        '文献类型',
      );
      console.log('完成BindDdl_LiteratureTypeId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async BindDdl_gs_PaperType_Cache(ddlgs_PaperTypeId: string) {
    const objDdl = document.getElementById(ddlgs_PaperTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlgs_PaperTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const objgs_PaperType_Cond: clsgs_PaperTypeEN = new clsgs_PaperTypeEN();
      const arrObjLst_Sel: Array<clsgs_PaperTypeEN> = await gs_PaperType_GetSubObjLstCache(
        objgs_PaperType_Cond,
      );
      BindDdl_ObjLst(
        ddlgs_PaperTypeId,
        arrObjLst_Sel,
        clsgs_PaperTypeEN.con_PaperTypeId,
        clsgs_PaperTypeEN.con_PaperTypeName,
        '论文类型',
      );
      console.log('完成BindDdl_gs_PaperType_Cache!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async BindDdl_gs_PaperStatus_Cache(ddlgs_PaperStatusId: string) {
    const objDdl = document.getElementById(ddlgs_PaperStatusId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlgs_PaperStatusId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const objgs_PaperStatus_Cond: clsgs_PaperStatusEN = new clsgs_PaperStatusEN();
      const arrObjLst_Sel: Array<clsgs_PaperStatusEN> = await gs_PaperStatus_GetSubObjLstCache(
        objgs_PaperStatus_Cond,
      );

      BindDdl_ObjLst(
        ddlgs_PaperStatusId,
        arrObjLst_Sel,
        clsgs_PaperStatusEN.con_PaperStatusId,
        clsgs_PaperStatusEN.con_PaperStatusName,
        '论文状态',
      );
      console.log('完成BindDdl_gs_PaperStatus_Cache!');
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
  public async CombinevPaperCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    //strWhereCond: string = " 1 = 1 and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
    let strWhereCond = ' 1 = 1 ';
    const strPaperTypeId = Paper_QUDIEx.paperTypeId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }
      if (this.updDate_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_UpdDate} like '%${this.updDate_q}%'`;
      }
      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      }
      //论文类型
      if (this.PaperTypeId_q != '' && this.PaperTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTypeId} = '${this.PaperTypeId_q}'`;
      }

      //用户
      if (this.User_q != '' && this.User_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.User_q}'`;
      }

      //论文维护
      if (strPaperTypeId == '01') {
        if (userStore.getUserId != '') {
          //判断角色
          //管理员
          const strUserId = userStore.getUserId;
          const strRoleId = userStore.getRoleId;
          if (
            strRoleId == enumQxRoles.System_Admin_00620001 ||
            strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
          ) {
            //可以查看所有；
            $('#btnDelRecord').show();
            $('#btnAudit').show();
            $('#btnCancelSubmit').show();
            //strWhereCond += " and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
          } else if (strRoleId == '00620002') {
            $('#btnDelRecord').show();
            $('#btnAudit').show();
            $('#btnCancelSubmit').show();
            //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
            //strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + strUserId + "' And isEffective='1') And isEffective='1')";
            //strWhereCond += " and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
          } else {
            $('#btnDelRecord').show();
            $('#btnAudit').hide();
            $('#btnCancelSubmit').hide();
            //学生00620003
            //只能查看自己的数据；或公开的数据；
            //strWhereCond += ` And ${clsvSubViewpointEN.con_UpdUser} = '${strUserId}'`;
            strWhereCond += ` And updUser = '${strUserId}'`;
          }
        } else {
          reLogin();
        }
      } else {
        //查看无需做控制；可以看到所有；
      }

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
根据关键字删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecordByWhere(strWhere: string) {
    try {
      const returnInt = await PaperAttachment_DelPaperAttachmentsByCondAsync(strWhere);
      if (returnInt > 0) {
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
        console.log(`删除附件成功,共删除${returnInt}条记录!`);
      } else {
        // const strInfo = `删除记录不成功!`;
        //显示信息框
        //alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
  */
  public async btnDelRecord_Click() {
    try {
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      let strKeyList;
      if (arrKeyIds.length == 0) return '';
      strKeyList = '';
      for (let i = 0; i < arrKeyIds.length; i++) {
        //先删除总表数据更新总表
        const strPaperId = arrKeyIds[i].toString();
        const responseText5 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
          strPaperId,
          '01',
          '3',
          clsPubLocalStorage.idCurrEduCls,
        );
        const returnBool5 = !!responseText5;
        if (returnBool5 == true) {
          console.log('论文数据总表删除成功；');
        } else {
          console.log('论文数据总表删除失败；');
        }

        if (i == 0) strKeyList = `${strKeyList}'${arrKeyIds[i].toString()}'`;
        else strKeyList += `,` + `'${arrKeyIds[i].toString()}'`;
      }

      const strWhereCond = ` paperId in (${strKeyList})`;
      const intqa_QuestionsCount = await qa_Questions_GetRecCountByCondAsync(strWhereCond);
      if (intqa_QuestionsCount != 0) {
        alert('请先删除该论文下问题答疑数据！');
        return '';
      } else {
        const intgs_TagsCount = await gs_Tags_GetRecCountByCondAsync(strWhereCond);
        if (intgs_TagsCount != 0) {
          alert('请先删除该论文下标注数据！');
          return '';
        } else {
          const intRTPaperCount = await RTPaperRela_GetRecCountByCondAsync(strWhereCond);
          if (intRTPaperCount != 0) {
            alert('请先删除该论文和主题关系数据！');
            return '';
          } else {
            for (let i = 0; i < arrKeyIds.length; i++) {
              //先删除总表数据更新总表
              const strPaperId = arrKeyIds[i].toString();
              const responseText5 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
                strPaperId,
                '01',
                '3',
                clsPubLocalStorage.idCurrEduCls,
              );
              const returnBool5 = !!responseText5;
              if (returnBool5 == true) {
                console.log('论文数据总表删除成功；');
              } else {
                console.log('论文数据总表删除失败；');
              }
            }
            //删除论文附件
            await this.DelRecordByWhere(strWhereCond);

            await this.DelMultiRecord(arrKeyIds);
            //刷新缓存
            PaperEx_ReFreshThisCacheByIdCurrEduCls(strIdCurrEducls);
          }
        }
      }

      const objPage = new Paper_QUDI_AllPaper(this.divLayout);
      await objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //论文类型下拉框事件

  public ddlPaperTypeChange() {
    //判断下拉框是否有值，且值是否等于
    if (this.paperTypeId != '' && this.paperTypeId != '0') {
      if (this.paperTypeId == '01') {
        //引用论文
        $('#ddlPaperStatusId').attr('disabled', 'true');
      } else {
        //原创论文
        $('#ddlPaperStatusId').attr('disabled', 'false');
      }
    }
  }

  //public async GetPaperDataByPaperId() {

  //}

  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
 */
  public async BindGv_vPaper(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombinevPaperCondition();
    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    const arrPaperExObjLst: Array<clsPaperENEx> = [];
    try {
      this.recCount = await Paper_GetRecCountByCondAsync(strWhereCond);
      // const objPagerPara: stuPagerPara = {
      //   pageIndex: intCurrPageIndex,
      //   pageSize: this.pageSize,
      //   whereCond: strWhereCond,
      //   orderBy: PaperCRUD.sortPaperBy,
      //   sortFun: (x, y) => {
      //     x = x; y = y;

      //     return 0;
      //   },
      // };
      // const arrPaperExObjLst = await PaperEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    //if (arrPaperExObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_vPaper(divList, arrPaperExObjLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 显示vPaper对象的所有属性值
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   <param name = "divContainer">显示容器</param>
   <param name = "arrPaperObjLst">需要绑定的对象列表</param>
 */
  public async BindTab_vPaper(divContainer: HTMLDivElement, arrPaperExObjLst: Array<clsPaperENEx>) {
    const strThisFuncName = this.BindTab_vPaper.name;
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
        fldName: 'paperTitle',
        colHeader: '论文标题',
        text: '',
        tdClass: 'text-left',
        sortBy: 'paperTitle',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      //{
      //    fldName: "paperTitle",
      //    colHeader: "论文标题",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsa1: HTMLElement = document.createElement("Label");
      //        a1.innerText = strText;
      //        a1.className = "btn btn-outline-info";
      //        a1.setAttribute("onclick", `btnDetailRecordInTab_Click('${strKeyId}');`);
      //        return a1;
      //    }
      //},

      {
        fldName: 'periodical',
        colHeader: '期刊',
        text: '',
        tdClass: 'text-left',
        sortBy: 'periodical',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'author',
        colHeader: '作者',
        text: '',
        tdClass: 'text-left',
        sortBy: 'author',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      //{
      //    fldName: "researchQuestion",
      //    colHeader: "研究问题",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},

      {
        fldName: 'keyword',
        colHeader: '关键字',
        text: '',
        tdClass: 'text-left',
        sortBy: 'keyword',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'literatureSources',
        colHeader: '文献来源',
        text: '',
        tdClass: 'text-left',
        sortBy: 'literatureSources',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      //{
      //    fldName: "literatureLink",
      //    colHeader: "文献链接",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "uploadfileUrl",
      //    colHeader: "文件地址",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "checker",
      //    colHeader: "审核人",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'isSubmit',
        colHeader: '是否提交',
        text: '',
        tdClass: 'text-left',
        sortBy: 'isSubmit',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'isChecked',
        colHeader: '是否审核',
        text: '',
        tdClass: 'text-left',
        sortBy: 'isChecked',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      //{
      //    fldName: "isQuotethesis",
      //    colHeader: "是否引用论文",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'updDate',
        colHeader: '提交日期',
        text: '',
        tdClass: 'text-left',
        sortBy: 'updDate',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'userName',
        colHeader: '提交用户',
        text: '',
        tdClass: 'text-left',
        sortBy: 'userName',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'pcount',
        colHeader: '读写数',
        text: '',
        tdClass: 'text-left',
        sortBy: 'pcount',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'attachmentCount',
        colHeader: '附件数',
        text: '',
        tdClass: 'text-left',
        sortBy: 'attachmentCount',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: '',
        colHeader: '详情',
        text: '详情',
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
          btn1.setAttribute('onclick', `btnDetailRecordInTab_Click("${strKeyId}");`);
          return btn1;
        },
      },
      //{
      //    fldName: "",
      //    colHeader: "删除",
      //    text: "删除",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info";
      //        btn1.setAttribute("onclick", `btnDelRecordInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},
    ];
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName4Pager = 'divPager';
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    await BindTab(divDataLst, arrPaperExObjLst, arrDataColumn, 'paperId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, divName4Pager);
  }

  /*
   * 修改用户Id
   */
  public set updUser(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidUserId', value);
  }
  /*
   * 修改用户Id
   */
  public get updUser(): string {
    return userStore.getUserId;
  }

  /*
   * 主题内容
   */
  // public set paperContent(value: string) {
  //     $("#txtPaperContent").html(value);
  // }
  // /*
  // * 主题内容
  //*/
  // public get paperContent(): string {

  //     strIdCurrEduclseditors = textboxio.get('#txtPaperContent');
  //     strIdCurrEduclseditor = editors[0];
  //     return editor.content.get();

  //     return $("#txtPaperContent").html();
  // }

  //绑定本专业
  public async BindGv_vPaperMajor(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    let strWhereCond = await this.CombinevPaperCondition();

    //通过登录的用户得到用户专业

    const stridXzMajor = userStore.getIdXzMajor;

    //strWhereCond += ` and paperId in (select paperId from vMajorDirectionPaperRela where idXzMajor= '${stridXzMajor}')`;
    strWhereCond += ` and  idXzMajor= '${stridXzMajor}'`;

    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    const arrPaperExObjLst: Array<clsPaperENEx> = [];
    try {
      this.recCount = await Paper_GetRecCountByCondAsync(strWhereCond);
      // const objPagerPara: stuPagerPara = {
      //   pageIndex: intCurrPageIndex,
      //   pageSize: 20,
      //   whereCond: strWhereCond,
      //   orderBy: PaperCRUD.sortPaperBy,
      //   sortFun: (x, y) => {
      //     x = x; y = y;
      //     return 0;
      //   },
      // };
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    //if (arrPaperExObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_vPaper(divList, arrPaperExObjLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  //绑定本方向
  public async BindGv_vPaperDirection(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    let strWhereCond = await this.CombinevPaperCondition();

    //通过登录的用户得到用户专业

    const stridXzMajor = userStore.getIdXzMajor;

    strWhereCond += ` and paperId in (select paperId from vMajorDirectionPaperRela where majorDirectionId in (select majorDirectionId from XzMajorDirection where idXzMajor= '${stridXzMajor}'))`;

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrPaperExObjLst: Array<clsPaperENEx> = [];
    try {
      this.recCount = await Paper_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: 20,
        whereCond: strWhereCond,
        orderBy: PaperCRUD.sortPaperBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrPaperExObjLst = await PaperEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    //if (arrPaperExObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_vPaper(divList, arrPaperExObjLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //public async btnMajorDirection_Click() {
  //    const responseObjList = await this.BindGv_vXzMajorDirection();
  //}

  /* 显示vXzMajorDirection对象的所有属性值
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
  <param name = "divContainer">显示容器</param>
  <param name = "arrXzMajorDirectionObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_vXzMajorDirection(
    divContainer: HTMLDivElement,
    arrvXzMajorDirectionObjLst: Array<clsvXzMajorDirectionEN>,
  ) {
    const strThisFuncName = this.BindTab_vXzMajorDirection.name;
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
        fldName: 'majorDirectionId',
        colHeader: '研究方向Id',
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
        fldName: 'majorName',
        colHeader: '专业名称',
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
        fldName: 'majorDirectionName',
        colHeader: '研究方向名',
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
        fldName: 'MajorDirectionENName',
        colHeader: '研究方向英文名',
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
        colHeader: '修改日期',
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
        fldName: 'updUser',
        colHeader: '修改人',
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
          btn1.className = 'btn btn-outline-info';
          btn1.setAttribute('onclick', `btnOkInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
      //{
      //    fldName: "",
      //    colHeader: "删除",
      //    text: "删除",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info";
      //        btn1.setAttribute("onclick", `btnDelRecordInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},
    ];
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName4Pager = 'divPager';
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvXzMajorDirectionObjLst, arrDataColumn, 'majorDirectionId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, divName4Pager);
  }

  ///* 函数功能:在数据 列表中跳转到某一页
  //   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
  //   <param name = "intPageIndex">页序号</param>
  // */
  //public IndexPageOne(intPageIndex: number) {
  //    if (intPageIndex == 0) {
  //        intPageIndex = this.objPager.pageCount;
  //    }
  //    console.log("跳转到" + intPageIndex + "页");
  //    this.setCurrPageIndex(intPageIndex, this.divName4Pager);
  //    this.BindGv_vXzMajorDirection();
  //}

  //论文提交
  public async btnIsSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    try {
      this.IsSubmitRecordSave(strKeyId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*提交论文
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async IsSubmitRecordSave(strKeyId: string) {
    const strThisFuncName = this.IsSubmitRecordSave.name;
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    //
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strKeyId);
    objPaperEN.SetIsSubmit(true);

    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        const strInfo = `提交成功!`;

        //显示信息框
        alert(strInfo);

        //刷新缓存
        PaperEx_ReFreshThisCacheByIdCurrEduCls(strIdCurrEducls);
        HideDialog();
        const objPage = new Paper_QUDI_AllPaper(this.divLayout);
        await objPage.PageLoad();
      } else {
        const strInfo = `提交不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('取消失败');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `提交不成功,${e}.`;
      alert(strMsg);
    }
  }

  //取消论文提交
  public async btnCancelSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    try {
      this.CancelSubmitRecordSave(strKeyId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*取消提交论文
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async CancelSubmitRecordSave(strKeyId: string) {
    const strThisFuncName = this.CancelSubmitRecordSave.name;

    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    //
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strKeyId);
    objPaperEN.SetIsSubmit(false);

    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        const strInfo = `取消成功!`;

        //显示信息框
        alert(strInfo);
        //刷新缓存
        PaperEx_ReFreshThisCacheByIdCurrEduCls(strIdCurrEducls);
        HideDialog();
        const objPage = new Paper_QUDI_AllPaper(this.divLayout);
        await objPage.PageLoad();
      } else {
        const strInfo = `取消不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('取消失败');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `取消记录不成功,${e}.`;
      alert(strMsg);
    }
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

  /*
   * 设置上传文件
   */
  public set Uploadfile(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtUploadfile', value);
  }
  /*
   * 获取上传文件
   */
  public get Uploadfile(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUploadfile');
  }

  /*
   * 论文类型查询
   */
  public set PaperTypeId_q(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlPaperTypeId_q', value);
  }
  /*
   * 论文类型查询
   */
  public get PaperTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlPaperTypeId_q');
  }

  /*
   * 论文类型
   */
  public set paperTypeId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlPaperTypeId', value);
  }
  /*
   * 论文类型
   */
  public get paperTypeId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlPaperTypeId');
  }

  /*
   * 论文状态
   */
  public set paperStatusId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlPaperStatusId', value);
  }
  /*
   * 论文状态
   */
  public get paperStatusId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlPaperStatusId');
  }

  /*
   * 专业流水号
   */
  public get idXzMajor_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlIdXzMajor_q');
  }
  /*
   * 研究方向名
   */
  public get majorDirectionName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtMajorDirectionName_q');
  }

  /*
   * 用户
   */
  //public get readUser_q(): string {
  //    return $("#txtReadUser_q").val();
  //}
  public get User_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }
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
  async BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    const objPage = new Paper_QUDI_AllPaper(this.divLayout);
    await objPage.PageLoad();
    message.success('已关注！');
  }
  async BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vPaper':
        const objPage = new Paper_QUDI_AllPaper(this.divLayout);
        await objPage.PageLoad();
        message.success('已关注！');
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage = new Paper_QUDIEx(divLayout);
    //if (PaperCRUD.objPageCRUD == null) {
    //    PaperCRUD.objPageCRUD = new Paper_QUDIEx();
    //    objPage = <Paper_QUDIEx>PaperCRUD.objPageCRUD;
    //}
    //else {
    //    objPage = <Paper_QUDIEx>PaperCRUD.objPageCRUD;
    //}
    const objPageEdit: Paper_EditEx = new Paper_EditEx('Paper_EditEx', objPage);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'SetCurrMajorDirection': //查询记录
        objPage.btnSetCurrMajorDirection_Click();
        break;

      case 'SetCurrEduCls': //查询记录
        objPage.btnSetCurrEduCls_Click();
        break;

      //case "SetCurrMajor":    //查询记录
      //    objPage.btnSetCurrMajor_Click();
      //    break;
      case 'MajorDirection': //查询记录
        objPage.liMajorDirection_Click();
        break;

      case 'CurrEduCls': //查询记录
        objPage.liCurrEduCls_Click();
        break;
      case 'AllPaper': //查询记录
        objPage.liAllPaper_Click();
        break;
      case 'Major': //查询记录
        objPage.liMajor_Click();
        break;

      //case "AddCollection":    //查询记录
      //    objPage.btnAddCollection_Click(strKeyId);
      //    break;
      //case "AddVote":    //查询记录
      //    objPage.btnAddVote_Click(strKeyId);
      //    break;
      //case "AddAttention":    //查询记录
      //    objPage.btnAddAttention_Click(objPage, strKeyId);
      //    break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPageEdit.btnUpdateRecord_Click(strKeyId);
        }
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PaperCRUDExEx.btn_Click');

        break;
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    const strThisFuncName = this.btnQuery_Click.name;
    this.SetCurrPageIndex(1);
    let objPage_Sub;

    let strMsg = '';
    switch (Paper_QUDIEx.CurrTabName) {
      case 'AllPaper':
        objPage_Sub = new Paper_QUDI_AllPaper(this.divLayout);
        await objPage_Sub.PageLoad();
        break;
      case 'CurrEduCls':
        objPage_Sub = new Paper_QUDI_CurrEduCls(this.divLayout);
        await objPage_Sub.PageLoad();
        break;
      case 'Major':
        objPage_Sub = new Paper_QUDI_Major(this.divLayout);
        await objPage_Sub.PageLoad();
        break;
      case 'Direction':
        objPage_Sub = new Paper_QUDI_Direction(this.divLayout);
        await objPage_Sub.PageLoad();
        break;
      default:
        strMsg = `当前Tab:${Paper_QUDIEx.CurrTabName}在函数(${strThisFuncName})中没有被处理！`;
        alert(strMsg);

        break;
    }
  }

  /* 所有论文
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async liAllPaper_Click() {
    try {
      Paper_QUDIEx.CurrTabName = 'AllPaper';
      const objPage = new Paper_QUDI_AllPaper(this.divLayout);
      await objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 所有论文
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
 */
  public async liCurrEduCls_Click() {
    try {
      Paper_QUDIEx.CurrTabName = 'CurrEduCls';
      const objPage = new Paper_QUDI_CurrEduCls(this.divLayout);
      await objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 本专业
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async liMajor_Click() {
    try {
      Paper_QUDIEx.CurrTabName = 'Major';
      //绑定专业论文
      const objPage = new Paper_QUDI_Major(this.divLayout);
      objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 本专业方向
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async liMajorDirection_Click() {
    try {
      Paper_QUDIEx.CurrTabName = 'Direction';
      //绑定方向论文
      const objPage = new Paper_QUDI_Direction(this.divLayout);
      objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:从界面列表中根据某一个字段排序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param objAnchorElement:带有排序字段的Anchors
   **/
  public async SortBy(objAnchorElement: any) {
    //const strThisFuncName = this.SortBy.name;
    console.log('objAnchorElement(In SetAllCkechedKeysV2):', objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      PaperCRUD.ascOrDesc4SortFun,
      PaperCRUD.sortPaperBy,
      strSortExpress,
    );
    PaperCRUD.sortPaperBy = sortBy;
    PaperCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    PaperCRUD.sortFunStatic = sortFun;
    await this.btnQuery_Click();
  }

  /* 所有论文
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
 */
  public async btnSetCurrEduCls_Click() {
    const strThisFuncName = this.btnSetCurrEduCls_Click.name;
    try {
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      let arrKeyIds: Array<string> = [];
      let objPage_Sub;
      let strMsg = '';
      switch (Paper_QUDIEx.CurrTabName) {
        case 'AllPaper':
          objPage_Sub = new Paper_QUDI_AllPaper(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        case 'CurrEduCls':
          objPage_Sub = new Paper_QUDI_CurrEduCls(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        case 'Major':
          objPage_Sub = new Paper_QUDI_Major(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        case 'Direction':
          objPage_Sub = new Paper_QUDI_Direction(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        default:
          strMsg = `当前Tab:${Paper_QUDIEx.CurrTabName}在函数(${strThisFuncName})中没有被处理！`;
          alert(strMsg);

          break;
      }

      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }

      await PaperEduClsRelaEx_SetIdCurrEduCls(arrKeyIds, strIdCurrEducls);

      Paper_QUDIEx.CurrTabName = 'CurrEduCls';
      const objPage = new Paper_QUDI_CurrEduCls(this.divLayout);
      await objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `设置当前教学班不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 所有论文
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
 */
  public async btnSetCurrMajorDirection_Click() {
    const strThisFuncName = this.btnSetCurrEduCls_Click.name;
    try {
      const strMajorDirectionId = GetSelectValueInDivObj(
        this.divFunction,
        'ddlMajorDirectionId_SetFldValue',
      );
      if (strMajorDirectionId == '') {
        const strMsg = '请输入研究方向Id(MajorDirectionId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      let arrKeyIds: Array<string> = [];
      let objPage_Sub;

      let strMsg = '';
      switch (Paper_QUDIEx.CurrTabName) {
        case 'AllPaper':
          objPage_Sub = new Paper_QUDI_AllPaper(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        case 'CurrEduCls':
          objPage_Sub = new Paper_QUDI_CurrEduCls(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        case 'Major':
          objPage_Sub = new Paper_QUDI_Major(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        case 'Direction':
          objPage_Sub = new Paper_QUDI_Direction(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        default:
          strMsg = `当前Tab:${Paper_QUDIEx.CurrTabName}在函数(${strThisFuncName})中没有被处理！`;
          alert(strMsg);

          break;
      }

      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }

      await MajorDirectionPaperRelaEx_SetMajorDirectionId(arrKeyIds, strMajorDirectionId);

      Paper_QUDIEx.CurrTabName = 'Direction';
      const objPage = new Paper_QUDI_Direction(this.divLayout);
      await objPage.PageLoad();
      //const objPage2 = new Paper_QUDI_Major();
      //await objPage2.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `设置当前专业研究方向不成功,${e}.`;
      alert(strMsg);
    }
  }

  /** 函数功能:系统生成的Change事件函数
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
*/
  public async ddlMajorDirectionId_Tabs_SelectedIndexChanged() {
    const strThisFuncName = this.ddlMajorDirectionId_Tabs_SelectedIndexChanged.name;
    const strMajorDirectionId = GetSelectValueInDivObj(this.divList, 'ddlMajorDirectionId_Tabs');
    if (IsNullOrEmpty(strMajorDirectionId) == true) return;
    clsPubLocalStorage.majorDirectionId = strMajorDirectionId;
    const objXzMajorDirection = await XzMajorDirection_GetObjByMajorDirectionIdCache(
      strMajorDirectionId,
      userStore.getIdXzMajor,
    );
    if (objXzMajorDirection == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    clsPubLocalStorage.majorDirectionName = objXzMajorDirection.majorDirectionName;
    const strMajorDirectionName = Format(
      "<span class='text-secondary font-weight-bold'>[{0}]</span>方向论文",
      objXzMajorDirection.majorDirectionName,
    );
    $('#aMajorDirectionName').html(strMajorDirectionName);
    const objPage = new Paper_QUDI_Direction(this.divLayout);
    await objPage.PageLoad();
  }
}
